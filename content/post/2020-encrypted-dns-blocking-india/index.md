---
title: "Investigating Encrypted DNS Blocking in India"
description: "We ran encrypted-DNS-blocking measurements in India"
author: "Simone Basso (OONI)"
date: "2020-10-30"
tags: ["india", "censorship", "dns-blocking", "country-in"]
categories: ["blog"]
---

In October 2010, we collaborated with Divyank Katira and Gurshabad Grover,
researchers at the [Centre for Internet & Society, India](https://cis-india.org/),
to implement and evaluate a new OONI experiment focused on detecting DNS censorship.

This new OONI experiment, called [dnscheck](
https://github.com/ooni/probe-engine/tree/v0.19.0/experiment/dnscheck),
focuses on detecting the blocking of encrypted DNS
transports such as [DNS over TLS](https://en.wikipedia.org/wiki/DNS_over_TLS)
and [DNS over HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS). Its
methodology improves upon the measurement methodology OONI previously used to measure
[DoT blocking in Iran](https://ooni.org/post/2020-iran-dot).

The implementation, [written by Divyank Katira](
https://github.com/ooni/probe-engine/pull/950), is currently only available
to users of the [miniooni](
https://github.com/ooni/probe-engine/tree/v0.19.0#building-miniooni)
research client. We are however [planning on promoting the dsncheck experiment
as a first class experiment](https://github.com/ooni/probe/issues/1262) that will run
by default as part of the "websites" experiments group.

To validate dnscheck, we tested access to popular DoT and DoH resolvers
from four popular Indian ISPs covering a large majority of the Indian
internet subscriber base. We found that all these resolvers were accessible,
perhaps because network neutrality obligations in India do not allow ISPs
to arbitrarily block resources.

Read [the full research report](https://cis-india.org/internet-governance/blog/investigating-encrypted-dns-blocking-in-india)
on CIS India's website! Stay tuned for future updates that will
integrate the dnscheck experiment into OONI probes!
