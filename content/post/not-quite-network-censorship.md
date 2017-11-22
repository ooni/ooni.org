---
title: "urandom.pcap: when DDoS shield is confused with censor; case of pernambuco.com"
author: "Leonid Evdokimov, Vasilis Ververis"
date: "2017-11-22"
tags: ["brazil", "CDN", "DNS"]
categories: ["blog"]
---

**Country:** Brazil, worldwide

**Measurement period:** July 2016 — November 2017

**Website inaccessibility reasons:** IPv6 or DNSSEC misconfiguration


We have recently heard of network anomalies in Brazil:
[pernambuco.com](http://pernambuco.com) news outlet (FIXME: is it correct "category"?) was
inaccessible from several networks in Brazil
[for quite a long time](https://people.torproject.org/~andz/pe/measurements.br.pernambuco.pdf).
OONI [data](https://people.torproject.org/~andz/pe/measurements.br.pernambuco.csv) confirms the issue saying that the root cause looks like
[DNS-based blocking](https://explorer.ooni.torproject.org/measurement/s3YPvS70pxtUQXG5qLv8z2wfafZ98eUzCmxcbYkvSRELpYS2mBWksZCacvAr5GqS?input=http:%2F%2Fwww.pernambuco.com%2Fdiario).

(FIXME: what version of assets in people/~andz should we store in static/post/xxxx?)

OONI tries hard to apply Hanlon's razor to every statement about network
interference: *never attribute to censorship that which is adequately explained
by misconfiguration*.  Luckily, the anonymous cypherpunk (FIXME: name RPi
hoster?) caring about the website was able to help us to investigate the issue
further and get a better understanding of possible root cause of the DNS
resolution failure.

The basic issue we saw was [recursive DNS nameserver](https://en.wikipedia.org/wiki/Domain_Name_System#Recursive_and_caching_name_server)
provided by [Virtua ISP](https://stat.ripe.net/AS28573) failed to resolve the domain emitting
<tt>SERVFAIL</tt> code:

<details><summary>`$ dig pernambuco.com`</summary>
```
; <<>> DiG 9.9.5-9+deb8u12-Debian <<>> pernambuco.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: SERVFAIL, id: 17644
;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;pernambuco.com.                        IN      A

;; Query time: 14 msec
;; SERVER: 181.213.132.2#53(181.213.132.2)
;; WHEN: Tue Nov 14 16:27:07 UTC 2017
;; MSG SIZE  rcvd: 43
```
</details>

One of the ways to check if the domain is blocked by some local DNS policy is
an attempt to resolve it directly through [authoritative nameserver](https://en.wikipedia.org/wiki/Domain_Name_System#Authoritative_name_server).
If DNS name resolution works that way it suggests that the case *MAY* be some
misconfiguration and not a DNS-based filtering. And `pernambuco.com` domain was
passing the test:

<details><summary>`$ dig +trace pernambuco.com`</summary>
```
; <<>> DiG 9.9.5-9+deb8u12-Debian <<>> +trace pernambuco.com
;; global options: +cmd
.                       369185  IN      NS      h.root-servers.net.
.                       369185  IN      NS      i.root-servers.net.
.                       369185  IN      NS      e.root-servers.net.
.                       369185  IN      NS      d.root-servers.net.
.                       369185  IN      NS      m.root-servers.net.
.                       369185  IN      NS      f.root-servers.net.
.                       369185  IN      NS      j.root-servers.net.
.                       369185  IN      NS      b.root-servers.net.
.                       369185  IN      NS      k.root-servers.net.
.                       369185  IN      NS      c.root-servers.net.
.                       369185  IN      NS      a.root-servers.net.
.                       369185  IN      NS      l.root-servers.net.
.                       369185  IN      NS      g.root-servers.net.
;; Received 811 bytes from 181.213.132.2#53(181.213.132.2) in 2116 ms

com.                    172800  IN      NS      a.gtld-servers.net.
com.                    172800  IN      NS      l.gtld-servers.net.
com.                    172800  IN      NS      c.gtld-servers.net.
com.                    172800  IN      NS      b.gtld-servers.net.
com.                    172800  IN      NS      j.gtld-servers.net.
com.                    172800  IN      NS      g.gtld-servers.net.
com.                    172800  IN      NS      d.gtld-servers.net.
com.                    172800  IN      NS      m.gtld-servers.net.
com.                    172800  IN      NS      k.gtld-servers.net.
com.                    172800  IN      NS      i.gtld-servers.net.
com.                    172800  IN      NS      e.gtld-servers.net.
com.                    172800  IN      NS      f.gtld-servers.net.
com.                    172800  IN      NS      h.gtld-servers.net.
com.                    86400   IN      DS      30909 8 2 E2D3C916F6DEEAC73294E8268FB5885044A833FC5459588F4A9184CF C41A5766
com.                    86400   IN      RRSIG   DS 8 1 86400 20171127050000 20171114040000 46809 . QSfUCjfWB2/Ulx1L/6BmpR3glCR6vAvtK+N9E332aJ9luPLQ9hycjiZp 4PoEWaDTDt4vQgL6pzgKNt+sGgr3lmbtJAnFEHAKPy/TBv/T8KhcApv8 Ceuwv/yUB1Oo5sUtppNVtNHQKm+jqUQ+MWQe9YNMPTrOi5dT2A3qYktg zhI9fk9gcqNfJkn/Vd/Ol1o+zLqP+yy9MY+xBjky2MPaXY4EaGnZWSQn UCyYH95k0WOuvHl6Q0EYe4jEAqQGQnMjGR/dFHF7WbARoqR92/Ahfsvr 2eAF2CcuIi5/cRKJr10Us3v3QvytZqvhwA6bzu292NYQIS0talFlATDF JRw9vQ==
;; Received 1174 bytes from 192.33.4.12#53(c.root-servers.net) in 3656 ms

pernambuco.com.         172800  IN      NS      americalatina.upx.com.br.
pernambuco.com.         172800  IN      NS      americadonorte.upx.com.br.
CK0POJMG874LJREF7EFN8430QVIT8BSM.com. 86400 IN NSEC3 1 1 0 - CK0Q1GIN43N1ARRC9OSM6QPQR81H5M9A NS SOA RRSIG DNSKEY NSEC3PARAM
CK0POJMG874LJREF7EFN8430QVIT8BSM.com. 86400 IN RRSIG NSEC3 8 2 86400 20171121054756 20171114043756 11324 com. b6a2rTyPdGqgyTGlHBQTry29KsYLpCTg2syg3DiYm4TU2zKm4AgtUmv3 NAnteEWIwXutUsWN1XOri34PxDm9CAcmxKKYN82lXHSnF4O8oEuZJ1Gf Go2D9a8GFCV44T4Cff4MBugeDtUyHwp+yd96IzH+2WtSbJRN/WswmtGI ylA=
CIP56NHTT7TEO7BIRQFIOVC1GSDSNFD0.com. 86400 IN NSEC3 1 1 0 - CIP5L6DBFHE9UAL3LG0PVN426ILSC3GJ NS DS RRSIG
CIP56NHTT7TEO7BIRQFIOVC1GSDSNFD0.com. 86400 IN RRSIG NSEC3 8 2 86400 20171120055405 20171113044405 11324 com. bLisStF5rB/gXGaHOMV9it6Qg4JcERGbaBlvP7KRDyj7d1LlTyjZHWmt V3B2LS0vdjCMlEDxqqwPsO3mL/1GF8WX0z7qrsWf5qYxuegxikhLDamK s9qOIIdFsdNDhnloPa9+e7p9PwM5B0jR07I778+2E7PRIUXZP7D3BSLF K4w=
;; Received 595 bytes from 192.42.93.30#53(g.gtld-servers.net) in 534 ms

pernambuco.com.         14400   IN      A       45.79.193.247
pernambuco.com.         86400   IN      NS      ns2.upx.com.br.
pernambuco.com.         86400   IN      NS      ns1.upx.com.br.
;; Received 193 bytes from 2804:2870:2:1::31#53(americalatina.upx.com.br) in 132 ms
```
</details>

While checking various resolution paths we've found that `ns2.upx.com.br`
having IPv6 address `2001:19f0:ac01:b3:5400:ff:fe46:4676` was not responding
DNS queries. The first assumption we made was that recursive DNS nameserver has
a strong preference to IPv6 over IPv4 and fails fast if IPv6 is not reachable.
But `ns1.upx.com.br` had IPv6 address, so we assumed that something is special
about `ns2.upx.com.br` and we've found out that it was the only authoritative
nameserver having IPv6
[glue record](https://en.wikipedia.org/wiki/Domain_Name_System#Circular_dependencies_and_glue_records)
in the top-level domain zone.

We verified through RIPE Atlas that `ns2.upx.com.br` works without errors
through IPv4 via [DNS/TCP](https://atlas.ripe.net/measurements/10197953/#!probes),
but is broken through IPv6 both via
[DNS/UDP](https://atlas.ripe.net/measurements/10197871/#!probes) and
[DNS/TCP](https://atlas.ripe.net/measurements/10197872/#!probes).

We communicated the issue to [UPX Technologies](https://www.upx.com/)
via email found in [whois](https://en.wikipedia.org/wiki/WHOIS)
and the issue with IPv6 connectivity was fixed really quickly both for
[DNS/TCP](https://atlas.ripe.net/measurements/10199076/#!probes) and
[DNS/UDP](https://atlas.ripe.net/measurements/10199080/#!probes).
Also, UPX CTO confirmed that the way we communicated the issue was the correct
one. We really appreciate that level of cooperation, UPX fixed the issue
for a random stranger from the Internet — we're not their customers,
`pernambuco.com` is.

But the recursive nameserver still was replying with <tt>SERVFAIL</tt> error
:-) The issue was still [affecting lots of Brazilian networks](https://atlas.ripe.net/measurements/10203306/#!probes), but not all
of them: and that's another indicator that it *MAY* be a misconfiguration and
not a network filtering policy. Indeed, the issue also affected lots of
[networks worldwide](https://atlas.ripe.net/measurements/10203314/#!probes)
while `upx.com.br` name hosted at same nameservers had
[no issues with DNS resolving](https://atlas.ripe.net/measurements/10203916/#!general)
from same vantage points.
And the [failure was cached](https://atlas.ripe.net/measurements/10204036/#!probes)
according to consequent resolution latency. So the issue was kinda
"persistent". It was unlikely that IP routing is the root cause. But
`pernambuco.com` was not the only affected domain,
[`aquipe.com.br` was affected too](https://atlas.ripe.net/measurements/10204359/#!probes)
and the failure had same symptoms. But some other domains "hosted" by UPX Technologies were not affected, and
[`dpnet.com.br` was one of properly working domains](https://atlas.ripe.net/measurements/10204294/#!probes).
The common between failing domains was the difference between `NS` records at
top-level domain nameserver and authoritative nameserver that was clearly
visible in `dig +trace`.

And, yes, it was the key. `NS` records for affected domains are
`americadonorte.upx.com.br` and `americalatina.upx.com.br` and these records
are `CNAME` records in `upx.com.br` zone. And
[BIND](https://en.wikipedia.org/wiki/BIND) (the most popular DNS servers)
ignores alike `NS` records.
[RFC 1996, Common DNS Errors](https://tools.ietf.org/html/rfc1912#section-2.4)
that is 11.5 years old today states that: "*Having NS records pointing to
a CNAME is bad and may conflict badly with current BIND servers.  In fact,
current BIND implementations will ignore such records, possibly leading to a
lame delegation*". And it's still the case decade later.  One can verify that
themselves using BIND from Ubuntu 16.04.

<details><summary>Using docker to verify:</summary>
```
root@dom0 # docker run -ti --rm ubuntu:16.04 bash
root@4017200da4e2:~# apt-get update && apt-get -y install bind9 dnsutils
root@4017200da4e2:~# echo 'logging { channel errchan {stderr; severity debug; print-severity yes; print-time yes;}; category default {errchan;}; };' >> /etc/bind/named.conf.local
root@4017200da4e2:~# /usr/sbin/named -f -u bind  &
root@4017200da4e2:~# dig pernambuco.com @127.0.0.1
22-Nov-2017 18:50:41.413 debug 1: fetch: pernambuco.com/A
22-Nov-2017 18:50:41.413 info: skipping nameserver 'americalatina.upx.com.br' because it is a CNAME, while resolving 'pernambuco.com/A'
22-Nov-2017 18:50:41.413 info: skipping nameserver 'americadonorte.upx.com.br' because it is a CNAME, while resolving 'pernambuco.com/A'
22-Nov-2017 18:50:41.413 debug 1: client 127.0.0.1#45827 (pernambuco.com): query failed (SERVFAIL) for pernambuco.com/IN/A at ../../../bin/named/query.c:7773

; <<>> DiG 9.10.3-P4-Ubuntu <<>> pernambuco.com @127.0.0.1
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: SERVFAIL, id: 23719
...
```
</details>

So possible ways to fix the issue are:

- UPX may expand americalatina.upx.com.br and americadonorte.upx.com.br CNAMEs to usual `A` and `AAAA` records
- administrator of the affected website may change americalatina.upx.com.br to ns1.upx.com.br and ns2.upx.com.br in corresponding TLD registry control panel

We've communicated the issue and the way to reproduce it with BIND to UPX on
November, 15th  but still have got no reply. We contacted UPX as we hoped to
"fix" the issue for all UPX customers instead of customers fixing NS records in
top-level domain registry one by one.

We're still quite confident that the case is not intentional "network
interference" but a misconfiguration.  So we publish this text hoping that
it'll be useful to sysadmins of affected websites or as an explanation for the
users who can't reach affected websites.
