---
title: "Identifying cases of DNS misconfiguration: Not quite censorship"
author: "Leonid Evdokimov, Vasilis Ververis"
date: "2017-11-24"
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

We recently noticed that [pernambuco.com](http://pernambuco.com), a
regional news portal, has not been reachable from several networks in Brazil [for quite some
time](https://people.torproject.org/~andz/pe/measurements.br.pernambuco.pdf).
By looking at [OONI data](https://people.torproject.org/~andz/pe/measurements.br.pernambuco.csv), we found that the site was not reachable and that it presented signs of [DNS-based
blocking](https://explorer.ooni.torproject.org/measurement/s3YPvS70pxtUQXG5qLv8z2wfafZ98eUzCmxcbYkvSRELpYS2mBWksZCacvAr5GqS?input=http:%2F%2Fwww.pernambuco.com%2Fdiario)
due to empty DNS responses that is usually a symptom of potential internet censorship. But upon further analysis, we found a number of DNS
misconfigurations of the content delivery networks where the
nameservers of the domain in question are hosted. A
[nameserver](https://en.wikipedia.org/wiki/Name_server) is a function of a DNS server that implements a
network service for providing responses to queries against a directory service.
In this article we present an analysis of possible DNS misconfigurations that
may have caused `pernambuco.com` to be inaccessible. We also provide some
solutions to resolve DNS misconfiguration for `pernambuco.com` and other sites potentially affected in Brazil and worldwide.

(FIXME: what version of assets in people/~andz should we store in static/post/xxxx?)

OONI tries hard to apply [Hanlon's razor](https://en.wikipedia.org/wiki/Hanlon%27s_razor) to every statement about network
interference: *never attribute to censorship that which is adequately explained
by misconfiguration*. Thanks to Lucas from [CodingRights](https://www.codingrights.org/) who gave us access to
his networks, the numerous [OONI measurements](https://api.ooni.io/files/by_country/BR) submitted by
volunteers and RIPE Atlas measurements, we were able to investigate the inaccessibility of
[pernambuco.com](http://pernambuco.com) in Brazil.

## DNS resolution failures

The basic issue that we identified is that the [recursive DNS nameserver](https://en.wikipedia.org/wiki/Domain_Name_System#Recursive_and_caching_name_server)
provided by [Virtua ISP](https://stat.ripe.net/AS28573) failed to resolve the
domain, responding with <tt>SERVFAIL</tt> (Server failure). As a result, the name
server was unable to process the query (Source: [RFC1035](https://tools.ietf.org/html/rfc1035)).

Below we include the output of the DNS lookup utility `dig` querying the domain name
`pernambuco.com`:

<details><summary>`$ dig pernambuco.com`</summary>
<pre><code>
; <<>> DiG 9.9.5-9+deb8u12-Debian <<>> pernambuco.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: SERVFAIL, id: 17644
;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 1
&nbsp;
;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;pernambuco.com.                        IN      A
&nbsp;
;; Query time: 14 msec
;; SERVER: 181.213.132.2#53(181.213.132.2)
;; WHEN: Tue Nov 14 16:27:07 UTC 2017
;; MSG SIZE  rcvd: 43
</code></pre></details>

One of the ways to check if the domain is blocked by some local DNS policy is
to attempt to resolve it directly through an [authoritative nameserver](https://en.wikipedia.org/wiki/Domain_Name_System#Authoritative_name_server).
If DNS name resolution works that way, it suggests that the case could be some
misconfiguration and not a case of DNS-based filtering. And `pernambuco.com`
passed the test:

<details><summary>`$ dig +trace pernambuco.com`</summary>
<pre><code>
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
&nbsp;
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
&nbsp;
pernambuco.com.         172800  IN      NS      americalatina.upx.com.br.
pernambuco.com.         172800  IN      NS      americadonorte.upx.com.br.
CK0POJMG874LJREF7EFN8430QVIT8BSM.com. 86400 IN NSEC3 1 1 0 - CK0Q1GIN43N1ARRC9OSM6QPQR81H5M9A NS SOA RRSIG DNSKEY NSEC3PARAM
CK0POJMG874LJREF7EFN8430QVIT8BSM.com. 86400 IN RRSIG NSEC3 8 2 86400 20171121054756 20171114043756 11324 com. b6a2rTyPdGqgyTGlHBQTry29KsYLpCTg2syg3DiYm4TU2zKm4AgtUmv3 NAnteEWIwXutUsWN1XOri34PxDm9CAcmxKKYN82lXHSnF4O8oEuZJ1Gf Go2D9a8GFCV44T4Cff4MBugeDtUyHwp+yd96IzH+2WtSbJRN/WswmtGI ylA=
CIP56NHTT7TEO7BIRQFIOVC1GSDSNFD0.com. 86400 IN NSEC3 1 1 0 - CIP5L6DBFHE9UAL3LG0PVN426ILSC3GJ NS DS RRSIG
CIP56NHTT7TEO7BIRQFIOVC1GSDSNFD0.com. 86400 IN RRSIG NSEC3 8 2 86400 20171120055405 20171113044405 11324 com. bLisStF5rB/gXGaHOMV9it6Qg4JcERGbaBlvP7KRDyj7d1LlTyjZHWmt V3B2LS0vdjCMlEDxqqwPsO3mL/1GF8WX0z7qrsWf5qYxuegxikhLDamK s9qOIIdFsdNDhnloPa9+e7p9PwM5B0jR07I778+2E7PRIUXZP7D3BSLF K4w=
;; Received 595 bytes from 192.42.93.30#53(g.gtld-servers.net) in 534 ms
&nbsp;
pernambuco.com.         14400   IN      A       45.79.193.247
pernambuco.com.         86400   IN      NS      ns2.upx.com.br.
pernambuco.com.         86400   IN      NS      ns1.upx.com.br.
;; Received 193 bytes from 2804:2870:2:1::31#53(americalatina.upx.com.br) in 132 ms
</code></pre></details>

While checking various resolution paths we discovered that `ns2.upx.com.br`,
resolving to the IPv6 address `2001:19f0:ac01:b3:5400:ff:fe46:4676`, was not
responding to DNS queries. The first assumption we made was that the recursive
DNS nameserver has a strong preference for IPv6 over IPv4 and fails fast if the
IPv6 endpoint is not reachable. However, the resource `ns1.upx.com.br` had an
IPv6 address, so we assumed that there is something special about the resource
`ns2.upx.com.br` and found that it was the only authoritative nameserver
with an IPv6
[glue record](https://en.wikipedia.org/wiki/Domain_Name_System#Circular_dependencies_and_glue_records)
in the top-level domain zone.

Through [RIPE Atlas](https://atlas.ripe.net) measurements, we verified that `ns2.upx.com.br` works without
errors through IPv4 via
[DNS/TCP](https://atlas.ripe.net/measurements/10197953/#!probes), but is broken
through IPv6 both via
[DNS/UDP](https://atlas.ripe.net/measurements/10197871/#!probes) and
[DNS/TCP](https://atlas.ripe.net/measurements/10197872/#!probes).

We got in touch with [UPX Technologies](https://www.upx.com/), the service provider of the aforementioned DNS
nameserver, and reported the issue. The
technical support team was very collaborative and quickly resolved the issue of
IPv6 connectivity for
[DNS/TCP](https://atlas.ripe.net/measurements/10199076/#!probes) and
[DNS/UDP](https://atlas.ripe.net/measurements/10199080/#!probes). We appreciate
the amount of cooperation and support that we received from the UPX team, even though we are not
their customers.

Unfortunately though, the recursive DNS nameserver still responds with the
<tt>SERVFAIL</tt> error code and the issue [affects many Brazilian
networks](https://atlas.ripe.net/measurements/10203306/#!probes), but not
all of them. This strongly suggests that it *may* be a
misconfiguration issue, rather than a network filtering policy. In addition to `pernambuco.com`, this
issue also appears to be affecting a number of other
[domains worldwide](https://atlas.ripe.net/measurements/10203314/#!probes) and
the [failure was cached](https://atlas.ripe.net/measurements/10204036/#!probes)
according to consequent resolution latency. The issue seems to be "persistent"
since it's unlikely that IP routing is the root cause. 

Other affected domains include
[`aquipe.com.br`](https://atlas.ripe.net/measurements/10204359/#!probes),
[`assineodiario.com.br`](https://atlas.ripe.net/measurements/10294525/#!probes),
[`brunoprado.com.br`](https://atlas.ripe.net/measurements/10294526/#!probes),
[`clubediario.com.br`](https://atlas.ripe.net/measurements/10294527/#!probes),
[`espacodaprevidencia.com.br`](https://atlas.ripe.net/measurements/10294528/#!probes),
[`radiogloborecife.com.br`](https://atlas.ripe.net/measurements/10294529/#!probes),
[`tvonorte.com.br`](https://atlas.ripe.net/measurements/10294531/#!probes) and
[`wakeworld.com.br`](https://atlas.ripe.net/measurements/10294532/#!probes). All of these domains present the same
failure and symptoms. But some other domains "hosted" by UPX Technologies were
not affected, such as [`dpnet.com.br`](https://atlas.ripe.net/measurements/10204294/#!probes) and
the resource [`upx.com.br`](https://atlas.ripe.net/measurements/10203916/#!general).

Most of the affected domains listed above look like stale, "dead" websites, while only two of them seem "active". 
What is common amongst the failing domains (SERVFAIL response code) is the
difference between the `NS` records at the top-level domain nameserver and the
authoritative nameserver that was clearly visible in the trace of the
delegation path from the root name servers; `dig +trace`.

## NS records pointing to a CNAME is a bad practice

The `NS` records of the affected domains are `americadonorte.upx.com.br` and
`americalatina.upx.com.br`. These records are `CNAME` records in the
`upx.com.br` zone and according to [RFC's 1912 common DNS errors
section](https://tools.ietf.org/html/rfc1912#section-2.4) (dating back around
11 years ago): "*Having NS records pointing to a CNAME is bad and may conflict
badly with current BIND servers. In fact, current BIND implementations will
ignore such records, possibly leading to a lame delegation*".

Below we include a proof of concept to verify this issue in [BIND](https://en.wikipedia.org/wiki/BIND), the most widely used DNS server:

<details><summary>BIND DNS server in an Ubuntu 16.04 docker container:</summary>
<pre><code>
root@dom0 # docker run -ti --rm ubuntu:16.04 bash
root@4017200da4e2:~# apt-get update && apt-get -y install bind9 dnsutils
root@4017200da4e2:~# echo 'logging { channel errchan {stderr; severity debug; print-severity yes; print-time yes;}; category default {errchan;}; };' >> /etc/bind/named.conf.local
root@4017200da4e2:~# /usr/sbin/named -f -u bind  &
root@4017200da4e2:~# dig pernambuco.com @127.0.0.1
22-Nov-2017 18:50:41.413 debug 1: fetch: pernambuco.com/A
22-Nov-2017 18:50:41.413 info: skipping nameserver 'americalatina.upx.com.br' because it is a CNAME, while resolving 'pernambuco.com/A'
22-Nov-2017 18:50:41.413 info: skipping nameserver 'americadonorte.upx.com.br' because it is a CNAME, while resolving 'pernambuco.com/A'
22-Nov-2017 18:50:41.413 debug 1: client 127.0.0.1#45827 (pernambuco.com): query failed (SERVFAIL) for pernambuco.com/IN/A at ../../../bin/named/query.c:7773
&nbsp;
; <<>> DiG 9.10.3-P4-Ubuntu <<>> pernambuco.com @127.0.0.1
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: SERVFAIL, id: 23719
...
</code></pre></details>

## Workaround

We propose the following possible solutions to fix this issue:

* To access an affected site, use any of the [public recursive name servers](https://en.wikipedia.org/wiki/Public_recursive_name_server), except for OpenNIC (which announces the usage of BIND 9.10.x via `version.bind/CH/TXT` DNS resource record and can't resolve the affected domain names);

* UPX may expand `americalatina.upx.com.br` and `americadonorte.upx.com.br` CNAMEs to `A` and `AAAA` records;

* The administrators of the affected sites can apply the following changes in the TLD registry control panel:

  * `americalatina.upx.com.br` should be replaced with `ns1.upx.com.br`;
  * `americadonorte.upx.com.br` → `ns2.upx.com.br`;
  * `asia.upx.com.br` → `ns3.upx.com.br`.

## Responsible disclosure

On 15th November 2017 we reported the issue to UPX. As a result, they quickly resolved the IPv6 issue. They also explained that the CNAME incident was a fix for some operational issues and that they were aware that this could potentially break backward compatibility.  UPX assured us that the affected customers
were notified about the migration to new NS names a long time ago.

UPX also advised us to notify the administrators of the affected websites,
pointing them to UPX customer service to avoid potential trust issues. We
notified the administrators of the affected "active" websites on 23rd November 2017, but
some of these email notifications [bounced back](https://en.wikipedia.org/wiki/Bounce_message).

`¯\_(ツ)_/¯`

We believe that the issue is indeed a misconfiguration and *not* an intentional, network filtering policy. We hope that this report will help others to troubleshoot and fix DNS misconfiguration affecting the accessibility of sites around the world.
