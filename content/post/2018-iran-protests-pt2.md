---
title: "Iran Protests: DPI blocking of Instagram (Part 2)"
author: "Leonid Evdokimov"
date: "2018-02-14"
tags: ["technology", "iran", "DNS", "DNS Hijacking", "TCP injections", "DPI", "country-ir", "theme-social_media"]
categories: ["report"]
---

In early January 2018, OONI published a [post](/post/2018-iran-protests/)
reporting on the blocking of Telegram and Instagram amidst protests in Iran. We
have since been analyzing RIPE data and other network measurements collected
from Iran in an attempt to better understand the blockages. Upon further
analysis, we found that Instagram was in fact blocked (during the Iran
protests) through the use of Deep Packet Inspection (DPI) technology which
targeted the TLS protocol. And it was configured in an interesting way.

## TLS is fun

First, most Iranian RIPE Atlas probes
[failed to do TLS handshake](https://atlas.ripe.net/measurements/10692435/)
with Instagram, but TCP connection was established with reasonable TTC
(time-to-connect).

Second, IP addresses that were collected using Iranian DNS resolvers were
giving proper TLS certificate for `www.instagram.com`, which meant that DNS was
not tampered with.

Third, Iranian probes were able to TCP-connect to endpoints collected with
"external" resolvers, but failed to do TLS handshake (besides single
non-routable IP address that came as a cached DNS response from some resolver
in _Harbin, China_).

Fourth, TLS cert measurement to "nearby" IP address
[was successful](https://atlas.ripe.net/measurements/10692452/#!probes), which
meant that the whole AS was not blackholed.

Fifth, TLS cert measurement with bogus SNI field (or without SNI field at all)
was blocked too. And so was a request to a "nearby" IP address with Instagram
SNI, which meant that the SNI field is inspected, but it's not the only one.
Moreover, [a request to a completely unrelated host with `www.instagram.com` SNI header](https://atlas.ripe.net/measurements/10692485/#!probes)
was blocked.

And now the fun starts: If DPI content inspection is applied to all traffic, then
it's possible to create a **self-signed** certificate for `www.instagram.com`
and have some fun as DPI does not validate certificate. It's possible to send a
`CN=www.instagram.com` certificate for an absolutely **unrelated** SNI request,
[see the response blocked](https://atlas.ripe.net/measurements/10692494/#!general)
and deduce that commonName field of the certificate that is sent in clear-text
in response is used for filtering. It's possible to
[check TLS over non-standard port](https://atlas.ripe.net/measurements/10692504/#!probes)
and deduce that it's not only TCP port #443 that is inspected with DPI.

But more fun can be achieved with RIPE Atlas and some packet crafting with
`scapy` and `nfqueue`.  For example, one can intercept a packet with
ServerHello, override commonName on the wire (look at awesome
[PKI Posters](https://www.cem.me/pki/) if you don't want to read RFC on packet
structure) and make parasitic traceroute out of that with commonName displayed
in RIPE Atlas measurement being set to
[TTL of the last hop](https://atlas.ripe.net/measurements/10698361/#!probes)!
Sending packets is easy, but you'll have to look at pcap if you want to know
actual traceroute information:

```python
def ip_ttl_eq_ssl_cn(payload, data):
    bag = []
    for i in xrange(32):
        pkt = IP(data)
        pkt[IP].ttl = i
        del pkt[IP].chksum
        pkt[TCP].payload = str(pkt[TCP].payload).replace(
                'instagram.com', 'in{:03d}gram.rus'.format(i))
        del pkt[TCP].chksum
        bag.append(pkt)
    send(bag)
    payload.set_verdict(nfqueue.NF_DROP)
```

More practical results may be achieved splitting a single ServerHello segment into
smaller ones at "bad word" boundary. That's basically the same behaviour that
[brdgrd](https://github.com/NullHypothesis/brdgrd) and
[GoodbyeDPI](https://github.com/ValdikSS/GoodbyeDPI) trigger by manipulating
TCP Window. And that shows that *lots* of probes
[bypass commonName filter](https://atlas.ripe.net/measurements/10698447/#!probes)
when commonName is split into several TCP segments using the following code:

```python
def tcp_segmentation(payload, data):
    pkt = IP(data)
    segment = str(pkt[TCP].payload)
    slices = []
    badword = 'instagram.com'
    while badword in segment:
        ndx = segment.index(badword)
        slices.append(segment[:ndx+5])
        segment = segment[ndx+5:]
    slices.append(segment)
    bag = []
    offset = 0
    for p in slices:
        pkt = IP(data)
        pkt[TCP].payload = p
        pkt[TCP].seq += offset
        del pkt[IP].len, pkt[IP].chksum, pkt[TCP].chksum
        offset += len(p)
        bag.append(pkt)
    send(bag)
    payload.set_verdict(nfqueue.NF_DROP)
```

So my conclusion is that it's DPI filtering traffic (not a transparent proxy) as
packets are not reassembled back into the TCP stream. That also shows that both SNI
and commonName are inspected, so both traffic flows (ingress and egress) are
passed to inspection with all the performance implications of alike deployment.

Unfortunately, it's hard to tell the reason for connect() failures, but it seems
that a network congestion (or shutdown) might have taken place during the
event. The amount of RIPE Atlas probes going offline in that time-frame makes me
think so. The quantitative analysis of the collected data is yet to be done.

You can get sample python code doing server-side packet manipulation in
[`nfq.py`](/post/2018-iran-protests/nfq.py).

## Improving OONI DNS heuristics

OONI data [confirmed the blocking of Instagram](/post/2018-iran-protests/#blocking-of-instagram)
during the latest protests in Iran, but the means of censorship was
misidentified. It looked like Instagram was blocked by means of DNS tampering,
but upon further analysis, that appears to have been a false positive because:

- control measurement successfully connects to all the IP:port network endpoints
  that were returned by Iranian resolver
- it was possible to fetch a valid signed TLS certificate for
  `www.instagram.com` from aforementioned network endpoints
- control measurement has different set of IP addresses for
  `www.instagram.com`, but that's very common for Facebook and Google CDNs to
  use DNS to geo-balance traffic. Moreover, that can be validated from "control"
  vantage point with [Client Subnet in DNS Queries](https://tools.ietf.org/html/rfc7871)
  option, but OONI does not do it right now.

Limitations to OONI’s Web Connectivity test (and how they can result in false
positives) are [documented](/nettest/web-connectivity/) on the OONI website.
Unfortunately, there are many cases where DNS-related false positives can
emerge, and we quite recently
[reported on cases of DNS misconfiguration](/post/not-quite-network-censorship/)
that looked like censorship, but weren’t.

This highlights the need to improve our heuristics on accurately identifying
cases of DNS-based censorship. We have identified some
[heuristics](https://github.com/TheTorProject/ooni-probe/issues/647) for
detecting cases of DNS hijacking, and we hope to implement them as OONI Probe
tests within the next year. In the meanwhile, we encourage you to
[reach out to us](/about/#contact)  to share knowledge and ideas you may have
for better detecting cases of DNS-based censorship!
