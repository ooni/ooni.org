---
title: "RiseupVPN"
short_description: "This test provides an automated way of examining whether RiseupVPN works in a
tested network."
groups: ["proxies"]
---

## About RiseupVPN
[RiseupVPN](https://riseup.net/vpn) is a non-commercial, donation-based VPN service. It offers simple-to-use clients to secure your internet traffic against surveillance and to circumvent internet censorship. RiseupVPN doesn't log any user data and doesn't require registration. The software is based on [LEAP VPN](https://leap.se/), an open source VPN solution, and is run by the [Riseup collective](https://riseup.net/about-us) which has been offering privacy-preserving online services for activists for more than 20 years. 

## RiseupVPN test

The **RiseupVPN test**, contributed by the [LEAP collective](https://leap.se/), provides an automated way of examining whether RiseupVPN works in a tested network.

This test evaluates if the bootstrap servers used during the self-configuration of the VPN clients can be reached. The test also checks if RiseupVPN's gateways can be reached on different ports and transports.

In the future, this test can form the base to offer a generic way to probe the reachability of other LEAP-powered VPN infrastructure, self-hosted by other providers.

For more details, read the **[RiseupVPN test specification](https://github.com/ooni/spec/blob/master/nettests/ts-026-riseupvpn.md)**.
