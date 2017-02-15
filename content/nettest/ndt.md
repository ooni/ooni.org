---
title: "NDT Speed Test"
short_description: "NDT (Network Diagnostic Test) provides a sophisticated speed and diagnostic test for understanding the performance of your network"
groups: ["performance"]
date: "0001-01-01"
---

# NDT Speed Test

NDT (Network Diagnostic Test) is designed to measure the *speed* and
*performance* of tested networks.

This network performance test was originally developed by The Internet2 Project
and is currently maintained by [Measurement Lab
(M-Lab)](http://www.measurementlab.net/tools/ndt/). NDT is designed to measure
the speed and performance of networks by connecting to M-Lab servers close to
the user, and by subsequently uploading and downloading random data. In doing
so, NDT collects TCP/IP low level information that is useful to examining and
characterizing the quality of the network path between the user and the mLab
server.

OONI utilizes an *[implementation of
NDT](https://github.com/measurement-kit/measurement-kit/tree/master/src/libmeasurement_kit/ndt)*
for [measurement-kit](https://github.com/measurement-kit/measurement-kit),
which is a network measurement library for running both desktop and mobile
network measurement tests. This NDT implementation is included as
a test that can be run via **OONI's mobile app**. Running NDT can be useful as the
type of information that it collects can potentially be used to examine cases
of throttling.

**Disclaimer:** NDT is a general-purpose performance test conducted against third-
party servers provided by [Measurement Lab (M-Lab)](https://www.measurementlab.net/). M-Lab's NDT services require the
retention and disclosure of IP addresses for research purposes. For more about
M-Lab's data governance, see its [privacy statement](https://www.measurementlab.net/privacy/).
