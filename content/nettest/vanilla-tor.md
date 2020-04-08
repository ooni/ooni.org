---
title: "Vanilla Tor"
short_description: "This test examines the reachability of the Tor network (which is designed for online anonymity
and censorship circumvention)."
groups: ["tor"]
---

# Vanilla Tor

This test examines the reachability of the [Tor network](https://www.torproject.org/) (which is designed for online anonymity
and censorship circumvention).

The Vanilla Tor test attempts to start a connection to the Tor network. If the
test successfully bootstraps a connection within a predefined amount of seconds (300 by default),
then Tor is considered to be reachable from the vantage point of the user. But if the test
does *not* manage to establish a connection, then the Tor network is likely blocked within the
tested network.

Read the **[Vanilla Tor test specification](https://github.com/ooni/spec/blob/master/nettests/ts-016-vanilla-tor.md)**.
