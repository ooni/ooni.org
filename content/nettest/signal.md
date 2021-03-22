---
title: "Signal test"
short_description: "This test is designed to examine the reachability of Signal within a tested network."
groups: ["im"]
---

This test is designed to examine the reachability of Signal within a tested network.

OONI's Signal test attempts to perform a HTTPS request to the [Signal
server](https://github.com/signalapp/Signal-Server) services over the vantage
point of the user.

Based on this methodology, Signal is likely blocked if any of the connections
to the Signal server services fail.

Read the **[Signal test specification](https://github.com/ooni/spec/blob/master/nettests/ts-029-signal.md)**.
