---
title: "urandom.pcap: when DDoS shield is confused with censor; case of pernambuco.com"
author: "Leonid Evdokimov, Vasilis Ververis"
date: "2017-11-22"
tags: ["brazil", "CDN", "DNS"]
categories: ["blog"]
---

**Country:** Brazil, worldwide

**OONI tests:** [Web Connectivity](https://ooni.torproject.org/nettest/web-connectivity/),
[HTTP requests](https://ooni.torproject.org/nettest/http-requests/)

**Probed ISPs:** [AS1916](https://stat.ripe.net/AS1916) (Associação Rede Nacional de Ensino e Pesquisa),
[AS262650](https://stat.ripe.net/AS262650) (Kyatera Informatica Ltda),
[AS2715](https://stat.ripe.net/AS2715) (Fundacao de Amparo a Pesquisa/RJ),
[AS27699](https://stat.ripe.net/AS27699) (TELEFÔNICA BRASIL S.A),
[AS28573](https://stat.ripe.net/AS28573) (CLARO S.A.),
[AS52873](https://stat.ripe.net/AS52873) (SOFTDADOS CONECTIVIDADE),
[AS7738](https://stat.ripe.net/AS7738) (Telemar Norte Leste S.A.),
[AS8167](https://stat.ripe.net/AS8167) (Brasil Telecom S/A - Filial Distrito Federal)

**Measurement period:** July 2016 — November 2017

**Website inaccessibility reasons:** IPv6 or DNS misconfiguration

We recently identified DNS based networking interferences after
inaccessibility of the website [pernambuco.com](http://pernambuco.com); a
regional news portal in Brazil that is not reachable from several networks and
ISPs in Brazil [for quite a long
time](https://people.torproject.org/~andz/pe/measurements.br.pernambuco.pdf).
Looking at the [OONI data](https://people.torproject.org/~andz/pe/measurements.br.pernambuco.csv) we found that the website was not reachable
and it presented signs of [DNS-based
blocking](https://explorer.ooni.torproject.org/measurement/s3YPvS70pxtUQXG5qLv8z2wfafZ98eUzCmxcbYkvSRELpYS2mBWksZCacvAr5GqS?input=http:%2F%2Fwww.pernambuco.com%2Fdiario)
due to empty DNS responses that is usually a symptom of possible internet censorship
or network blocking. Upon further analysis we detected a number of DNS
misconfigurations of the content delivery networks DNS servers where the
nameservers of the domain in question are hosted. A
[nameserver](https://en.wikipedia.org/wiki/Name_server) is a necessary
component and the most important function of a DNS server that implements a
network service for providing responses to queries against a directory service.
In this article we present an analysis of possible DNS misconfigurations that
may have caused the website to be inaccessible and provide some possible
solution to resolve DNS misconfiguration that causes `pernambuco.com` and other
affected websites to be inaccessible in Brazil and other networks worldwide.

(FIXME: what version of assets in people/~andz should we store in static/post/xxxx?)

OONI tries hard to apply [Hanlon's razor](https://en.wikipedia.org/wiki/Hanlon%27s_razor) to every statement about network
interference: *never attribute to censorship that which is adequately explained
by misconfiguration*. Thanks to Lucas from [CodingRights](https://www.codingrights.org/) who gave us access to
his networks, the numerous OONI measurements reports that were submitted by
volunteers and RIPE Atlas measurements, we were able to investigate the DNS
interference issues that made it impossible to access the regional news portal
[pernambuco.com](http://pernambuco.com) from within various ISPs and networks
in Brazil as well as worldwide.

## DNS resolution failures

The basic issue we have identified was the [recursive DNS nameserver](https://en.wikipedia.org/wiki/Domain_Name_System#Recursive_and_caching_name_server)
provided by [Virtua ISP](https://stat.ripe.net/AS28573) failed to resolve the
domain responding with <tt>SERVFAIL</tt> (Server failure) that means that the name
server was unable to process the query due to a problem with the name
server (Source: [RFC1035](https://tools.ietf.org/html/rfc1035))

Below the output of the DNS lookup utility `dig` querying the domain name
`pernambuco.com`:

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
to attempt resolving it directly through an [authoritative nameserver](https://en.wikipedia.org/wiki/Domain_Name_System#Authoritative_name_server).
If DNS name resolution works that way, it suggests that the case could be some
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

While checking various resolution paths we discovered that `ns2.upx.com.br`,
resolving to the IPv6 address `2001:19f0:ac01:b3:5400:ff:fe46:4676`, was not
responding to DNS queries. The first assumption we made was that the recursive
DNS nameserver has a strong preference for IPv6 over IPv4 and fails fast if the
IPv6 endpoint is not reachable. However the resource `ns1.upx.com.br` had an
IPv6 address, so we assumed that there is something special about the resource
`ns2.upx.com.br` and found out that it was the only authoritative nameserver
having an IPv6
[glue record](https://en.wikipedia.org/wiki/Domain_Name_System#Circular_dependencies_and_glue_records)
in the top-level domain zone.

We verified through [RIPE Atlas](https://atlas.ripe.net) measurements that `ns2.upx.com.br` works without
errors through IPv4 via
[DNS/TCP](https://atlas.ripe.net/measurements/10197953/#!probes), but is broken
through IPv6 both via
[DNS/UDP](https://atlas.ripe.net/measurements/10197871/#!probes) and
[DNS/TCP](https://atlas.ripe.net/measurements/10197872/#!probes).

We got in contact with the service provider of the aforementioned DNS
nameserver [UPX Technologies](https://www.upx.com/) and reported the issue. The
technical support team was very prompt and quickly resolved the issue of the
IPv6 connectivity for
[DNS/TCP](https://atlas.ripe.net/measurements/10199076/#!probes) and
[DNS/UDP](https://atlas.ripe.net/measurements/10199080/#!probes). We appreciate
the level of cooperation and support from the UPX team, even if we are not
their customers.

Unfortunately, the recursive DNS nameserver still responds with the
<tt>SERVFAIL</tt> error code and the issue [affects lots of Brazilian
networks](https://atlas.ripe.net/measurements/10203306/#!probes), although not
all of them: and this is an indicator that it *may* be a possible
misconfiguration and not a network filtering policy. In point of fact, the
issue is affecting a number of
[networks worldwide](https://atlas.ripe.net/measurements/10203314/#!probes) and
the [failure was cached](https://atlas.ripe.net/measurements/10204036/#!probes)
according to consequent resolution latency. The issue seems to be "persistent"
as is unlikely that IP routing is the root cause. In addition to the domain
`pernambuco.com` there are other affected domains such as
[`aquipe.com.br`](https://atlas.ripe.net/measurements/10204359/#!probes),
[`assineodiario.com.br`](https://atlas.ripe.net/measurements/10294525/#!probes),
[`brunoprado.com.br`](https://atlas.ripe.net/measurements/10294526/#!probes),
[`clubediario.com.br`](https://atlas.ripe.net/measurements/10294527/#!probes),
[`espacodaprevidencia.com.br`](https://atlas.ripe.net/measurements/10294528/#!probes),
[`radiogloborecife.com.br`](https://atlas.ripe.net/measurements/10294529/#!probes),
[`tvonorte.com.br`](https://atlas.ripe.net/measurements/10294531/#!probes) and
[`wakeworld.com.br`](https://atlas.ripe.net/measurements/10294532/#!probes) presenting the same
failure and symptoms. But some other domains "hosted" by UPX Technologies were
not affected, and [`dpnet.com.br` was one of properly working
domains](https://atlas.ripe.net/measurements/10204294/#!probes) as well as
the resource `upx.com.br` hosted on the same nameservers have [no issues related
to the  DNS resolving](https://atlas.ripe.net/measurements/10203916/#!general)
from the same vantage points.
What is common amongst the failing domains (SERVFAIL response code) is the
difference between the `NS` records at the top-level domain nameserver and the
authoritative nameserver that was clearly visible in the trace of the
delegation path from the root name servers; `dig +trace`.

## NS records pointing to a CNAME is a bad practice

The `NS` records of the affected domains are `americadonorte.upx.com.br` and
`americalatina.upx.com.br` were these records are `CNAME` records in the
`upx.com.br` zone and according to [RFC's 1996 common DNS errors
section](https://tools.ietf.org/html/rfc1912#section-2.4) (dating back around
11 years ago): "*Having NS records pointing to a CNAME is bad and may conflict
badly with current BIND servers. In fact, current BIND implementations will
ignore such records, possibly leading to a lame delegation*".
A proof of concept to verify this issue in the most widely used DNS server,
[BIND](https://en.wikipedia.org/wiki/BIND) follows:

<details><summary>BIND DNS server in an Ubuntu 16.04 docker container:</summary>
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

## Workaround

A list of possible ways to fix this issue:

- UPX may expand americalatina.upx.com.br and americadonorte.upx.com.br CNAMEs to usual `A` and `AAAA` records
- The administrator of the affected website may change americalatina.upx.com.br to ns1.upx.com.br and ns2.upx.com.br in corresponding TLD registry control panel

## Responsible disclosure

On the 15th of November 2017 we have reported to UPX the issue along with a way
to reproduce it and have still not received any reply on a possible resolution.
Our intention is for UPX to solve the issue for all UPX customers instead of
customers manually changing the NS records of their domains in the top-level
domain registry.

We believe that the issue is indeed a misconfiguration and not an intention
network interference from network filtering policy. We hope that our report may
help other people or entities to troubleshoot and fix DNS misconfiguration that
may affect the accessibility of a website.
