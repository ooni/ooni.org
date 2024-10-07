---
title: "urandom.pcap: Belarus (finally) bans Tor"
author: "Leonid Evdokimov"
date: "2016-12-08"
tags: ["belarus", "TCP injections", "country-by", "theme-circumvention"]
categories: ["report"]
---

**Country:** Belarus

**Probed ISPs:** Beltelecom ([AS 6697](https://stat.ripe.net/AS6697))

**Censorship method:** TCP injections

We have recently heard of [network anomalies in Belarus](https://metrics.torproject.org/userstats-relay-country.html?start=2016-09-07&end=2016-12-06&country=by&events=points).
Tor has been finally blocked in December 2016, although it had been explicitly
declared that Tor should be blocked [since February 2015](https://meduza.io/en/news/2015/02/25/belarus-bans-tor).

![Directly connected users from Belarus](/post/belarus-fries-onion/userstats-relay-country-by-2016-09-07-2016-12-06-points.png)

An anonymous cypherpunk has helped to gather some evidence regarding Tor
being blocked in Belarus. It's neither a complete study nor an in-depth
research and it's unclear if any other further evidence will be gathered, so we
decided to share current knowledge as-is:

1. Tor directory authorities are not blocked
2. *Public* onion routers have their ORPort blocked by TCP RST injection
3. The onion routers' DirPort is **not** blocked
4. Plain-old non-obfuscated Tor Bridges from [BridgeDB](https://bridges.torproject.org/) circumvent the interference
5. Beltelecom (or its upstream) has strange configuration of the networking gear injecting reset packets

The strangeness in equipment is the following. The first injected RST packet does
not have have proper SEQ/ACK numbers. These packet fields are just filled with
zeroes. So this packet is dropped by the client's TCP/IP stack per
[RFC5961](https://tools.ietf.org/html/rfc5961) and does not actually terminate
the client's connection:

```
$ tshark -Tfields -eframe.time_relative -eip.src -etcp.srcport -eip.dst -etcp.dstport \
    -eip.ttl -etcp.flags.str -etcp.seq -etcp.ack -r urandom.pcap | sed | awk | perl
0.000000   192.168.1.2 42555 87.118.94.227   443  64 **********S* 899897236  0
0.029459 87.118.94.227   443   192.168.1.2 42555 125 *********R** 0          0 (sic!)
0.096914 87.118.94.227   443   192.168.1.2 42555  52 *******A**S* 1984028404 899897237
0.096958   192.168.1.2 42555 87.118.94.227   443  64 *******A**** 899897237  1984028405
0.136874 87.118.94.227   443   192.168.1.2 42555 125 *********R** 1984028405 0

```

That's all for today. Remember, fried potato is better with onion!

![The Onion](/post/belarus-fries-onion/640px-Fried_potatoes.jpg)
