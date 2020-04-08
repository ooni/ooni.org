---
title: "DASH Streaming Test"
short_description: "Measures video streaming performance"
groups: ["performance"]
date: "2017-07-24"
---

# DASH Streaming Test

DASH is designed to measure the *quality* of tested networks by emulating a
video streaming. This test is called DASH because it uses the DASH
([Dynamic Adaptive Streaming over HTTP](
https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP
)) streaming technique.

Running this test can be useful to understand the baseline streaming
performance of a specific network connection. It measures video-related
metrics as well as network metrics that are key to understand the reason of
performance issues.

When you run the test, it emulates the streaming of a thirty-second video
from an [M-Lab](https://www.measurementlab.net/) server. The video is divided
in fifteen two seconds segments. When the client requests a video segment, it
must also specify the video quality (e.g., SD, HD, Super HD). Of course,
the higher the request quality, the bigger the returned segment. During the
streaming, the client seeks to use the higher quality that does not load the
network, creating queues, so that the streaming can continue smoothly.

We say the player is simple in that it does not employ algorithms
that real players (e.g. YouTube, Netflix) implement to keep the
streaming quality stable and to avoid stalls. This simplicity is, however,
key to understand the contribution of the network to streaming
quality, which otherwise could be masked by smart players' behavior.

As a result, we expect real players to be generally faster than this test,
because they implement more optimization techniques. However, if the
[throttling of video is caused by congestion at interconnection points](
https://arstechnica.com/tech-policy/2010/12/comcastlevel3/
), this test may result faster when the network path from the client to
the M-Lab server does not pass through the congested interconnection point.

This network performance test was originally developed by the
[Neubot project](https://gitub.com/neubot) and later integrated
into [measurement-kit](https://github.com/measurement-kit/measurement-kit),
the engine used by OONI Probe.

**Disclaimer:** DASH is a general-purpose performance test conducted
against third-party servers provided by [Measurement Lab
(M-Lab)](https://www.measurementlab.net/). M-Lab's services
require the retention and disclosure of IP addresses for research
purposes. Learn more about M-Lab's data governance, see its [privacy
statement](https://www.measurementlab.net/privacy/).

Read the **[DASH test specification](https://github.com/ooni/spec/blob/master/nettests/ts-021-dash.md)**.
