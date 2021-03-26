---
title: "WhatsApp test"
short_description: "This test is designed to examine the reachability of both WhatsApp's app and
the WhatsApp web version within a tested network."
groups: ["im"]
---

This test is designed to examine the reachability of both WhatsApp's app and
the WhatsApp web version within a tested network.

OONI's WhatsApp test attempts to perform an HTTP GET request, TCP
connection and DNS lookup to WhatsApp’s endpoints, registration service and web
version over the vantage point of the user. Based on this methodology,
WhatsApp’s *app* is likely blocked if any of the following apply:

* TCP connections to WhatsApp's endpoints fail;

* TCP connections to WhatsApp's registration service fail;

* DNS lookups resolve to IP addresses that are *not* allocated to WhatsApp;

* HTTP requests to WhatsApp's registration service do *not* send back a response
to OONI's servers.

WhatsApp's *web interface* is likely blocked if any of the following apply:

* TCP connections to web.whatsapp.com fail;

* DNS lookup illustrates that a different IP addresses has been allocated to
web.whatsapp.com;

* HTTP requests to web.whatsapp.com do *not* send back a consistent response to OONI's
servers.

Read the **[WhatsApp test specification](https://github.com/ooni/spec/blob/master/nettests/ts-018-whatsapp.md)**.
