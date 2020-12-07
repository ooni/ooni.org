---
title: "Riseupvpn"
short_description: "This test provides an automated way of examining whether RiseupVPN works in a
tested network."
groups: ["proxies"]
---

# RiseupVPN

This test provides an automated way of examining whether RiseupVPN works in a tested network.


## About RiseupVPN
[RiseupVPN](https://riseup.net/vpn) is a non-commercial, donation-based VPN service. It offers simple to use clients to secure your internet traffic against survaillance and to circumvent internet censorship. RiseupVPN doesn't log any user data and doesn't require a registration.
The software is based on [LEAP VPN](https://leap.se/), an open source VPN solution and is run by the [Riseup collective](https://riseup.net/about-us) which offers privacy preserving online services for activists since decades. 

## About the test

This test evaluates if the bootstrap server used during the self-configuration of the VPN clients can be reached. The test also checks the reachability of RiseupVPN's gateways on different ports and transports.

For the future we aim to use this test as a blueprint to offer a generic way to test the reachability of LEAP instances deployed by other providers and users who self-host their VPN.

For more details read the **[RiseupVPN test specification](https://github.com/ooni/spec/blob/master/nettests/ts-026-riseupvpn.md)**.
