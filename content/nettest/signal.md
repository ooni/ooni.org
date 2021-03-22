---
title: "Signal test"
short_description: "This test measures the reachability of the Signal messaging app within a tested network."
groups: ["im"]
---

# About Signal

[Signal](https://signal.org/) is a free and open source messaging app for encrypted voice calls and instant messages. 

Signal provides security by encrypting communications in transit (end-to-end encryption) and by ensuring that past communications are secure even if encryption keys are stolen (forward secrecy). Several applications, such as WhatsApp, use the Signal protocol for encryption.

# Signal test

The **OONI Probe Signal test** is designed to measure the reachability of the Signal messaging app within a tested network.

To this end, this [test](https://github.com/ooni/spec/blob/master/nettests/ts-029-signal.md) checks whether it's possible to establish a TLS connection (while validating the TLS certificate against the custom Signal CA root certificate) and send an HTTP GET request to the [Signal server](https://github.com/signalapp/Signal-Server) backends from the vantage point of the user.

If the test successfully performs an HTTPS request to the [tested Signal endpoints](https://github.com/ooni/spec/blob/master/nettests/ts-029-signal.md), the Signal app is considered reachable from the tested network.

However, if connections to any of the tested Signal endpoints fail, Signal might be unreachable or blocked. 

Read the **[Signal test specification](https://github.com/ooni/spec/blob/master/nettests/ts-029-signal.md)**.
