---
title: "Psiphon"
short_description: "This test provides an automated way of examining whether Psiphon works in a
tested network."
groups: ["proxies"]
---

# Psiphon

## About Psiphon

[Psiphon](https://psiphon.ca/) is a free and open source tool that utilizes VPN, SSH, and HTTP proxy
technology for censorship circumvention. The [Psiphon VPN](https://psiphon.ca/en/download.html) essentially serves as a
tunnel that enables you to circumvent censorship because you access resources on
the internet through the non-censored tunnel that Psiphon provides. 

In an attempt to limit censorship circumvention, some governments have [blocked](https://ooni.org/post/iran-internet-censorship/#anonymity-and-circumvention-tools)
access to Psiphon. OONI has therefore developed an [OONI Probe](https://ooni.org/install/) test that anyone
can run to measure the reachability of the Psiphon app.

## OONI Probe Psiphon test

The **OONI Probe Psiphon test** provides an automated way of examining whether the
[Psiphon app](https://psiphon.ca/) works in a tested network.

This [test](https://github.com/ooni/probe-engine) starts off by using Psiphon
code to bootstrap a Psiphon tunnel. Once the test has bootstrapped and created
the Psiphon tunnel, it then checks whether it actually works. To determine this,
the test attempts to fetch a webpage to see if it’s possible to use Psiphon in
order to connect to websites on the internet. 

As part of this process, there are 3 possible outcomes:

1) **Psiphon bootstraps and it’s able to fetch a webpage from the internet.** Psiphon
works in the tested network and can be used to circumvent internet censorship.

2) **Psiphon bootstraps, but it’s unable to fetch a webpage from the internet.** The
Psiphon tunnel has been created, but it can’t be used for accessing resources on
the internet. Therefore, Psiphon does not work on this network, and access to
the app may be blocked.  

3) **Psiphon does not bootstrap.** It is not even possible to
create the Psiphon tunnel to get started. Therefore, Psiphon does not work on
this network, and access to the app may be blocked. 

Read the OONI Probe **[Psiphon test specification](https://github.com/ooni/spec/blob/master/nettests/ts-015-psiphon.md)**.
