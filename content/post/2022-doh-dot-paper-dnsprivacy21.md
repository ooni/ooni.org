---
title: "Measuring DoT/DoH Blocking Using OONI Probe: A Preliminary Study"
description: "This research paper examines encrypted DNS blocking in Iran, China, and Kazakhstan."
author: "Simone Basso"
date: "2022-02-14"
tags: ["dot", "doh", "dns", "censorship", "country-ir", "country-cn", "country-kz", "paper"]
categories: ["report"]
---

Last year, we designed the [dnscheck](https://github.com/ooni/spec/blob/master/nettests/ts-028-dnscheck.md)
network experiment and we conducted a one-month-long measurement campaign in Iran, China, and
Kazakhstan, using dnscheck to perform DNS measurements.
The dnscheck experiment focuses on encrypted DNS. In particular, it measures the blocking of
[DNS over HTTPS](https://datatracker.ietf.org/doc/html/rfc8484), also known as DoH, and [DNS
over TLS](https://datatracker.ietf.org/doc/html/rfc7858), also known as DoT.

We documented this reseach and development work in the [Measuring
DoT/DoH Blocking Using OONI Probe: a Preliminary Study](https://www.ndss-symposium.org/wp-content/uploads/dnspriv21-02-paper.pdf)
research paper, presented at the Network and Distributed System Security Symposium (NDSS’21) in
the context of the [DNS Privacy Workshop](https://www.ndss-symposium.org/ndss-program/dns-privacy-2021/).

The dnscheck experiment is currently available as part of the "experimental" group in ooniprobe and soon
will also be available in the Experimental card of [OONI Probe Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe) and [OONI Probe iOS](https://itunes.apple.com/us/app/id1199566366). Because
we are incrementally rolling out dnscheck, this seems to be a good moment in time to refer to the research paper
describing its design and evaluating its implementation.

**[READ RESEARCH PAPER](https://www.ndss-symposium.org/wp-content/uploads/dnspriv21-02-paper.pdf)**

Here's the paper abstract:

*We designed DNSCheck, an active network experiment to detect the blocking of DoT/DoH
services. We implemented DNSCheck into OONI Probe, the network-interference
measurement tool we develop since 2012. We compiled a list of popular DoT/DoH
services and ran DNSCheck measurements with help from volunteer OONI Probe users. We present
preliminary results from measurements in Kazakhstan (AS48716), Iran (AS197207), and China
(AS45090). We tested 123 DoT/DoH services, corresponding to 461 TCP/QUIC endpoints. We
found endpoints to fail or succeed consistently. In AS197207 (Iran), 50% of the DoT endpoints
seem blocked. Otherwise, we found that more than 80% of the tested endpoints were always
reachable. The most frequently blocked services are Cloudflare’s and Google’s. In most cases,
attempting to reach blocked endpoints failed with a timeout. We observed timeouts
connecting, during, and after the TLS handshake. TLS blocking depends on either
the SNI or the destination endpoint.*

You can also watch the paper's presentation on YouTube:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wggz3CcctO0?start=1859"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>

Here's an extended summary of the main contributions in this paper with
direct references to sections inside the paper itself:

*We model the blocking of DoT/DoH services (Section III)
and design DNSCheck, a measurement methodology to measure
such blocking (Section IV). DNSCheck consists of two
steps. The first step checks whether the system resolver
(and other unencrypted resolvers, such as the standard
DNS over UDP protocol, henceforth called Do53) allow one to resolve a DoT/DoH
service’s domain name. The second step checks which
TCP/QUIC endpoints associated with the service allow domain
resolutions using the proper protocol (DoT or DoH).*

*We discuss measurements collected from Kazakhstan (Section V-C),
Iran (Section V-D), and China (Section V-E),
covering 123 DoT/DoH services and 461 TCP/QUIC endpoints.
Helped by volunteer OONI Probe users, we ran tests
between 15th December 2020 and 10th January 2021. We
only observed Do53 censorship in AS197207 (Iran). Most
DoT/DoH endpoints fail or succeed consistently. In AS197207,
around 50% of the DoT endpoints failed consistently. Apart
from this case, for all the other ASN/protocol combinations,
no more than 20% of the endpoints failed. The most frequently
blocked services are Cloudflare’s and Google’s.*

*Timeout is the most frequent cause of failure. We see timeouts
connecting, during, and right after the TLS handshake.
We investigate timeouts during and after the TLS handshake
(Section V-G). They seem to correspond to the discard of
either outgoing TCP segments or incoming ACKs.
TLS blocking depends on either the SNI value or the destination
endpoint. In particular, in Section V-I we show that in
AS197207 (Iran), Google’s endpoints blocking is independent
of the SNI and only depends on the destination endpoint.*
