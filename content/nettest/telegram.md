---
title: "Telegram test"
short_description: "This test is designed to examine the reachability of both Telegram's app and
the Telegram web version within a tested network."
groups: ["im"]
---

# Telegram test

This test is designed to examine the reachability of both Telegram's app and
the Telegram web version within a tested network.

OONI's Telegram test attempts to perform an HTTP GET request, TCP connection to
Telegram’s access points, and web version over the vantage point of the user.
Based on this methodology, Telegram’s *app* or Telegram's web version is likely
blocked if any of the following apply:

* TCP connections on ports `80` and `443` to Telegram's access points fail;

* HTTP requests on ports `80` and `443` to Telegram's access points do *not*
send back a response to OONI's servers.


Telegram's *web version* is likely blocked if any of the following apply:

* HTTP requests on ports `80` and `443` to `web.telegram.org` do *not* send
back a consistent response to OONI's servers.
