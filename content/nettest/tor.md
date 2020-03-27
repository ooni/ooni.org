---
title: "Tor"
short_description: "This test provides an automated way of examining whether Tor works in a
tested network."
groups: ["tor"]
---

# Tor

## About Tor

The [Tor network](https://www.torproject.org/), which is free and open source, provides its users with online
anonymity, privacy, and censorship circumvention. Tor software is designed to
bounce communications around a distributed network of relays run by volunteers
around the world, thereby hiding its users’ IP addresses and enabling them to
circumvent online tracking and internet censorship.

In an attempt to limit online anonymity and circumvention, some governments have
[blocked](https://ooni.org/post/iran-internet-censorship/#anonymity-and-circumvention-tools) access to Tor. The Tor Project has therefore created [Tor bridges](https://bridges.torproject.org/),
enabling the circumvention of Tor blocking. [Tor Browser](https://www.torproject.org/download/) -- the main way that Tor
is used by millions of users around the world -- is shipped with a set of public
bridges (called [obfs4](https://bridges.torproject.org/bridges?transport=obfs4)) that users in censored environments can enable. 

OONI has developed an [OONI Probe](https://ooni.org/install/) test that anyone can run to measure the
blocking of [Tor](https://www.torproject.org/).

## Tor test

The **OONI Probe Tor test** provides an automated way of examining whether [Tor](https://www.torproject.org/)
works in a tested network.

To this end, this [test](https://github.com/ooni/probe-engine) examines the reachability of a set of services that allow
Tor to work. These include the following protocols:
 
* Tor directory authorities (used by Tor relays) 

* OR port (used by Tor bridges) 

* OR port of directory authorities (used by Tor clients) 

* obfs4 (Tor bridge that speaks the OBFS4 protocol)

By measuring the reachability of selected Tor directory authorities and bridges,
this test evaluates whether they can be used and, by extension, whether Tor
works within the tested network.

More specifically, this test attempts to perform the following actions from the
vantage point of the user:

* HTTP GET request to the ``tor/status-vote/current/consensus.z`` resource, which
is required for Tor directory authorities; 

* Connect to OR ports and OR ports of directory authorities and perform a TLS handshake; 

* Connect to obfs4 addresses and perform an OBFS4 handshake (an obfuscated handshake). 

If the test succeeds in performing all of the above, Tor should work on
this network.

**If the test fails in performing any of the above, Tor does not work in the
tested network and may be blocked.**

Read the **[Tor test specification](https://github.com/ooni/spec/blob/master/nettests/ts-023-tor.md)**.
