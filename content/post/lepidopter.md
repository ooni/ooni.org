---
title: "OONI releases Lepidopter Raspberry Pi distribution"
author: "Vasilis Ververis"
date: "2016-07-07"
tags: ["release", "raspberry pi", "distribution", "image", "lepidopter"]
categories: ["blog"]
---

The Open Observatory of Network Interference (OONI) team is pleased to announce
the release of an ooni-probe distribution for embedded devices such as
Raspberry Pis "Lepidopter".

## What is Lepidopter

Lepidopter is a Raspberry Pi distribution image with all the required
dependencies and software packages in place, configured to run individual
networks measurements tests via the
[ooni-probe](https://github.com/TheTorProject/ooni-probe) software. It is
developed and designed to require no physical attendance upon first bootstrap
but also allows experienced users to further configure it as they wish. The
[source code](https://github.com/TheTorProject/Lepidopter), and the building
scripts of the Lepidopter image are free and open source software.

## Why use Lepidopter

Since 2012 OONI has collected numerous network measurements reports that show
evidence of internet censorship, network tampering and surveillance. OONI
measurement data have been used in research publications, a number of technical
[reports](https://ooni.torproject.org/post/) about how ISPs in countries filter
and censor the internet as well as reports that include sings of network
irregularities and tampering. This wouldn't be possible without the help of
numerous volunteers that are contributed by running consistent ooni-probe
network measurements tests from different vantage points. Up to now mostly
technical savvy users needed to maintain their own probes and deal with system
configuration, software upgrades and renewal of measurement test and relevant
test content related to the person's country. Lepidopter makes it easier for
people that have a Raspberry Pi and an SD card to be part of the OONI community
and help us reveal, publish and document possible instances of network
interference worldwide.

## How to obtain Lepidopter

Please refer to the [installation instructions]
(https://ooni.torproject.org/install/lepidopter/) where you can find a detailed
guide on how you can download, verify and install the latest Lepidopter image
to a Raspberry Pi.

## I don't have a Raspberry Pi how can I help?

There are a number of ways that you can help with if you don't own a Raspberry
Pi or another device were you can deploy a probe and submit dedicated reports.

In many cases we are considering providing a Raspberry Pi device to interested
parties, ease let us know if you would like to be part of the OONI operators
[community](https://ooni.torproject.org/get-involved/partnership-program/) and
provide regular measurements.


## Keep in touch

We have recently created a mailing list for future and current probe operators
to get it touch with us and receive regular updates regarding Lepidopter and
other probe specific operations. You can subscribe to the mailing list by
registering
[here](https://lists.torproject.org/cgi-bin/mailman/listinfo/ooni-operators).

Find out about our regular community meetings, other mailing lists and how you
can get involved [here](/get-involved/).
