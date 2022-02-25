---
title: "Tor Snowflake"
short_description: "This test provides an automated way of measuring whether the Tor Snowflake pluggable transport works on a
tested network."
groups: ["tor"]
---

## About Tor Snowflake

The [Tor network](https://www.torproject.org/), which is free and open source, provides its users with online
anonymity, privacy, and censorship circumvention. 

In an attempt to limit online anonymity and circumvention, some governments have
[blocked](https://ooni.org/post/iran-internet-censorship/#anonymity-and-circumvention-tools) access to Tor. The Tor Project therefore created [pluggable transports](https://gitlab.torproject.org/legacy/trac/-/wikis/doc/PluggableTransports)
to help users (who can't access the Tor network) circumvent Tor blocking. 

[Snowflake](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) is a pluggable transport that proxies traffic through temporary
proxies using [WebRTC](https://webrtc.org/), a peer-to-peer protocol with built-in NAT punching. You
can run a proxy by installing the [Snowflake](https://snowflake.torproject.org/) browser extension on [Firefox](https://addons.mozilla.org/en-US/firefox/addon/torproject-snowflake/) or
[Chrome](https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie). In doing so, you will help Tor users circumvent censorship. 

OONI has developed an [OONI Probe](https://ooni.org/install/) test that anyone can run to measure [Tor Snowflake](https://github.com/ooni/spec/blob/master/nettests/ts-030-torsf.md).

## Tor Snowflake test

The **OONI Probe Tor Snowflake test** provides an automated way of measuring whether
the Tor Snowflake pluggable transport works on a tested network.

In particular, this [test](https://github.com/ooni/spec/blob/master/nettests/ts-030-torsf.md) attempts to bootstrap tor using the Snowflake pluggable
transport, while recording how long it takes to bootstrap. 

As part of this process, there are 2 possible outcomes:

* **Tor Snowflake bootstraps.** If the test succeeds in bootstrapping Tor Snowflake,
we consider that Tor Snowflake works on the tested network. 

* **Tor Snowflake does not bootstrap.** If the test fails to bootstrap Tor Snowflake,
it may not work on the tested network (and might be blocked). The
bootstrap failure may be the result of one of the following: 
	* The test cannot create a listening port on the local host, which is required to start the test;
	* The tor daemon times out when performing the bootstrap.

Read the [Tor Snowflake test specification](https://github.com/ooni/spec/blob/master/nettests/ts-030-torsf.md). 