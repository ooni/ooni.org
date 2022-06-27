---
title: "Measuring DoT/DoH Blocking Using OONI Probe: A Preliminary Study"
description: "This research paper examines encrypted DNS blocking in Iran, China, and Kazakhstan."
author: "Simone Basso"
date: "2022-06-17"
tags: ["dot", "doh", "dns", "censorship", "country-ir", "country-cn", "country-kz", "paper"]
categories: ["report"]
---

When you enter a URL such as `https://example.com/`, under the
hood, your web browser resolves the `example.com` domain to one or
more IP addresses using the Domain Name System (DNS), a set of
federated servers and protocols providing this name-to-IP-address
mapping. For example, as of 2022-06-16, `example.com` resolves to
the `93.184.216.34` (IPv4) and `2606:2800:220:1:248:1893:25c8:1946`
(IPv6) addresses. Once it knows the IP addresses for the domain,
the browser then uses them to fetch the requested webpage. Conceptually,
the browser tries the IP addresses in sequence until it finds one
that works. If no returned IP address works, the request fails.
Therefore, domain name lookups are key to browsing and, incidentally,
are also key to website censorship and surveillance.

Historically, browsers and tools have always performed DNS resolution
using an unencrypted protocol using UDP on port `53`. Because such
a protocol is not encrypted, censors could tamper with domain name
resolution or observe and log the domain names you resolve.

The Internet community has been working to secure domain name
resolution for a few years by proposing and implementing encrypted
DNS protocols. The [DNS over
TLS](https://datatracker.ietf.org/doc/html/rfc7858) protocol, also
known as DoT, suggests using Transport Layer Security (TLS) to
encrypt and authenticate domain name lookups. In a similar vein,
the [DNS over HTTPS]( https://datatracker.ietf.org/doc/html/rfc8484)
protocol, also known as DoH, proposes to use encrypted HTTP (HTTPS)
to keep your domain name lookups safe from tampering and prying
eyes.

In other words, these two new protocols increase users' privacy and
provide a mechanism to bypass ordinary domain name resolution
censorship. Yet, censors could block attempts to use DoT or DoH,
thus preventing users from reaping their benefits in terms of extra
privacy and censorship circumvention.

To investigate the blocking of DoT and DoH, last year, we designed
the
[dnscheck](https://github.com/ooni/spec/blob/master/nettests/ts-028-dnscheck.md)
network experiment and **we conducted a one-month-long `dnscheck`
measurement campaign in Kazakhstan, Iran, and China**. We documented
this work in the **[Measuring DoT/DoH Blocking Using OONI Probe: a
Preliminary
Study](https://www.ndss-symposium.org/wp-content/uploads/dnspriv21-02-paper.pdf)**
research paper, presented at the Network and Distributed System
Security Symposium (NDSS'21) in the context of the [DNS Privacy
Workshop](https://www.ndss-symposium.org/ndss-program/dns-privacy-2021/).

Because we are incrementally rolling out dnscheck to all OONI Probe
users, this seems to be a good moment in time to refer to the
research paper, explain how `dnscheck` works, and summarize the main
findings of our measurement campaign. To know more about this topic,
continue reading this blog post, refer to the [research paper](
https://www.ndss-symposium.org/wp-content/uploads/dnspriv21-02-paper.pdf),
or watch me presenting the paper at the DNS Privacy Workshop:

{{< youtube vid="wggz3CcctO0?start=1859" >}}

## How dnscheck works

Because we are measuring the blocking of encrypted DNS services,
what matters to `dnscheck` is not the name we would like to resolve
(`example.com` in the example above). Instead, what matters is the
specific DoT or DoH service to measure.

DoH is DNS over HTTPS; therefore, users access DoH services by URL.
For example, `https://1.1.1.1/dns-query` is the URL identifying
Cloudflare's public DoH resolver. While this specific URL contains
an IP address (`1.1.1.1`), DoH URLs have domain names in other
cases. For example, an alternative URL for Cloudflare's public DoH
resolver is `https://dns.cloudflare.com/dns-query`.

DoT is similar to DoH in that a service endpoint could contain an
IP address or a domain name. However, unlike DoH, you generally
identify DoT service endpoints by their IP name and port (e.g.,
`8.8.4.4:853`) or by their domain name and port (e.g., `dns.google:853`).

In short, regardless of whether we want to measure DoT or DoH, there
are two cases: (1) the service endpoint contains a domain name; (2)
the service endpoint contains an IP address.

The first case, i.e., when the service endpoint contains a domain
name, is more complex to measure. We need to use the ordinary
unencrypted DNS to map the domain name into a list of IP addresses.
Once that step is complete, we can measure each IP address using
either DoT or DoH.

Perhaps an example could clarify the process.

Suppose you ask `dnscheck` to measure `https://dns.google/dns-query`.
Then, `dnscheck` would notice that `dns.google` is a domain name
and would use the unencrypted DNS to obtain IP addresses for
`dns.google`. Suppose this operation is successful and yields
`8.8.8.8` and `8.8.4.4`. Then, `dnscheck` will measure both
`https://8.8.8.8/dns-query` and `https://8.8.4.4/dns-query`.

The second case is more immediate. If you ask `dnscheck` to measure
`https://8.8.8.8/dns-query`, it will notice that `8.8.8.8` is already
and IP address, and it will just measure `https://8.8.8.8/dns-query`.

What happens, though, if there's DNS blocking of the `dns.google`
domain name?

In its most simplistic configuration, `dnscheck` would conclude
that the service endpoint's domain name is blocked and will stop
the measurement. However, it is also possible to tell `dnscheck`
what are known-valid IP addresses for the domain. In such a case,
`dnscheck` will continue the measurement using the known-valid IP
addresses to check for additional censorship of the given service
endpoint. We took advantage of this opportunity to provide a more
comprehensive censorship assessment for the measurement campaign
in Kazakhstan, Iran, and China.

Returning to the measurement algorithm, once `dnscheck` knows the
IP address(es) of a service endpoint, it measures each IP address.
In practice, it means that, for each IP address, `dnscheck` performs
the following operations:

1. Establish a TCP connection to the given IP address and port (for
the above `https://8.8.8.8/dns-query` example, that would be `8.8.8.8`
on port `443`);

2. Create a TLS channel over the TCP connection
(DNS-over-TLS uses TLS and DNS-over-HTTPS also uses TLS because
HTTPS is HTTP over TLS);

3. Create a DNS query for `example.com` and send the query using
the rules defined by the specific protocol (DNS-over-TLS uses a
straightforward algorithm for sending DNS messages while DNS-over-HTTPS
encapsulates messages inside HTTP messages, so it is a bit more
complex);

4. Receive from the server the corresponding DNS response.

We say the experiment is successful (for a given IP address and
port) if we complete all these steps. If the first step fails, we
say there is TCP/IP blocking. If the second step fails, there is
TLS blocking. If the third or fourth step fails, we say there is
TLS interference after establishing a TLS session (aka "interference
after the TLS handshake").

It is important to note that a given service endpoint could be
partially blocked. For example, there could be a case where
`https://dns.google/dns-query` is blocked when using the `8.8.8.8`
IP address and works as intended when using `8.8.4.4`.

## Summary of the main findings

The general idea of this measurement campaign was to find  DoT/DoH
service endpoints blocking in selected countries. So, in December
2020 and January 2021, we compiled a list of 123 public DoT/DoH
services and, with help from volunteer users, we ran measurements
in Kazakhstan ([AS48716](https://ipinfo.io/AS48716)), Iran
([AS197207](https://ipinfo.io/AS197207)), and China
([AS45090](https://ipinfo.io/AS45090)).

We were surprised to discover that there was no interference when
mapping the service endpoint's domain name (e.g., `dns.google`) to
IP addresses (e.g., `8.8.8.8` and `8.8.4.4`). The only exception
to this trend was Iran, where `dns.adguard.com` mapped to `10.10.34.36`,
a well-known private IP address used for censoring.

Blocking, instead, focused on preventing TCP or TLS communication
between OONI Probe and the IP address(es) used by DoT/DoH services.
The following table summarizes our findings in terms of blocking
by protocol:

|                        |  Kazakhstan |       Iran |      China |
| ---------------------- | ----------- | ---------- | ---------- |
| Successful DoT lookups |  8157 (95%) | 1156 (50%) | 4332 (93%) |
| Successful DoH lookups | 16466 (82%) | 4824 (92%) | 9414 (89%) |

As you can see, *many* lookups succeeded. **Blocking was the most
aggressive in Iran: 50% of the DoT endpoints were not working**. It
seems reasonable to see more censorship in the Iranian network we
tested than in the other two networks. In Iran, we ran measurements
from one of the most popular mobile networks, while we used VPSs
in China and Kazakhstan.

In terms of blocking by the company providing the service, **Cloudflare
was the most blocked company** in the pack in several cases (and was
more frequently blocked than other companies such as Google and
Quad9):

|    Company |    KZ DoT |     KZ DoH |    IR DoT |    IR DoH |    CN DoT |    CN DoH |
| ---------- | --------- | ---------- | --------- | --------- | --------- | --------- |
| Cloudflare | 408 (91%) | 3109 (88%) | 158 (14%) |  52 (13%) | 230 (74%) | 532 (47%) |
|     Others |  38 (9%)  |  413 (12%) | 976 (86%) | 337 (87%) |  81 (26%) | 590 (53%) |

Cloudflare blocking was especially apparent in the Kazakhstan network
we tested. In the other networks, especially in Iran, blocking is
more spread across companies. Again, this probably happens because
we measured from a consumer-facing network in Iran.

Each network implemented distinct blocking policies. The following
table summarizes the reason for blocking for blocked DoH lookups:

|                    Interference | Kazakhstan |      Iran |     China |
| ------------------------------- | ---------- | --------- | --------- |
| timeout after the TLS handshake | 2701 (77%) | 160 (41%) |   3 (~0%) |
| TLS handshake timeout           |  331 (9%)  |   1 (~0%) |  61 (5%)  |
| TCP connect timeout             |  397 (11%) |  72 (19%) | 813 (72%) |
| Reset during TLS handshake      |    1 (~0%) |  77 (20%) | 152 (14%) |
| Other                           |   92 (3%)  |  79 (20%) |  93 (9%)  |

In China, there's a prevalence of TCP/IP blocking. Iran and Kazakhstan,
there's interference with the TLS sessions.

In the Kazakhstan network we tested, TLS interference seemed to
depend on the name of the service we're accessing as shown by the
following table (which shows DoH measurements):

|              Address |                Server Name |                          Result | Frequency |
| -------------------- | -------------------------- | ------------------------------- | --------- |
| 2606:4700::6810:f8f9 |         cloudflare-dns.com | Timeout after the TLS handshake |  85 (99%) |
| 2606:4700::6810:f8f9 |         cloudflare-dns.com |                 Connect timeout |   1 (1%)  |
| 2606:4700::6810:f8f9 | mozilla.cloudflare-dns.com |                         Success | 88 (100%) |

These measurements used the same IPv6 address (`2606:4700::6810:f8f9`).
However, using `cloudflare-dns.com` causes a failure, while using
`mozilla.cloudflare-dns.com` works. Because the failure happens (in
most cases) when creating or using a TLS session (i.e., after the
TLS handshake), this seems to be a case of [Server Name Indication](
https://en.wikipedia.org/wiki/Server_Name_Indication) based blocking.

Conversely, in Iran, we confirmed [our previous
result](https://ooni.org/post/2020-iran-dot/) showing that DoT
traffic is blocked during the TLS handshake regardless of the name
of the service:

| Address | Server Name |                Result | Frequency |
| ------- | ----------- | --------------------- | --------- |
| 8.8.4.4 | 8888.google | TLS handshake timeout | 40 (100%) |
| 8.8.4.4 | null        | TLS handshake timeout | 40 (100%) |
| 8.8.8.8 | 8888.google | Success (TLSv1.3)     | 40 (100%) |

The first and the second row show that, with `8.8.4.4`, using
`8888.google` as the server name or just testing without a server
name yields the same result: a timeout during the TLS handshake.
Yet, using another IP address (`8.8.8.8`) with the `8888.google`
server name does not cause any blocking, suggesting there was
`8.8.4.4`-specific blocking.

## Concluding remarks

As far as we know, this research was the first account of DoT
and DoH blocking. Since our measurement campaign in late 2020,
[other researchers started studying encrypted DNS blocking](
https://arxiv.org/pdf/2202.00663.pdf). As `dnscheck` is now
integrated into [OONI Probe](https://ooni.org/install/), we can continue to collect DoT/DoH blocking
information and hopefully produce more comprehensive
analysis of the phenomenon in the future.
