---
title: "OONI releases Lepidopter Raspberry Pi distribution"
author: "Vasilis Ververis"
date: "2016-07-04"
tags: ["release", "raspberry pi", "distribution", "image", "lepidopter"]
categories: ["blog"]
---

The Open Observatory of Network Interference (OONI) is happy to announce a new
distribution image dedicated to embedded devices such as Raspberry Pi named
Lepidopter.

## What is Lepidopter

Lepidopter is a Raspberry Pi distribution image with all the required
dependencies and software packages in place, configured to run individual
networks measurements tests via the
[ooni-probe](https://github.com/TheTorProject/ooni-probe) software.  It is
developed and designed to require no physical attendance upon first bootstrap
but also allows experienced users to further configure it as they wish. The
[source code](https://github.com/TheTorProject/Lepidopter), and the building
scripts of Lepidopter image are under a free/libre source software; GPL version
3 license which can be reviewed and modified by anyone.

## Why to use it

Starting from 2012 OONI has collected an amount of network measurements reports
that show evidence of internet censorship, network tampering and surveillance.
OONI measurement data have been used in a big amount of research publications,
a number of technical about how ISP in countries filter and censor the internet
as well as reports that include sing of network irregularities and tampering.
This wouldn't be possible without the help of numerous volunteers that are
contributed by running consistent ooni-probe network measurements tests from
different vantage points. Up to now mostly technical savvy users needed to
maintain their own probes and deal with system configuration, software upgrades
and renewal of measurement test and relevant test content related to the
person's country. Lepidopter makes it easier for people that have a Raspberry
Pi and an SD card to be part of the OONI community and help us reveal, publish
and document possible instances of network interference worldwide.

## How to obtain it

Please refer to the [installation instructions]
(https://ooni.torproject.org/install/lepidopter/) where you can find a detailed
guide on how you can download, verify and install the latest Lepidopter image
to a Raspbeery Pi.

## I don't have a Raspberry Pi how can I help?

There are a number of ways that you can help with if you don't own a Raspberry
Pi or another device were you can deploy a probe and submit dedicated reports.

In many cases we are considering providing a Raspberry Pi device to interested
parties, please let us know if you would like to be part of the OONI operators
community and provide regular measurements.


## Keep in touch

We have recently created a mailing list for future and current probe operators
to get it touch with us and receive regular updates regarding Lepidopter and
other probe specific operations. You can subscribe to the mailing list by
registering
[here](https://lists.torproject.org/cgi-bin/mailman/listinfo/ooni-operators).

Find out about our regular community meetings, other mailing lists and how you
can get involved [here](/get-involved/).

Thank you!
