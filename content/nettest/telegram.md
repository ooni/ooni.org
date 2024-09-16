---
title: "Telegram test"
short_description: "This test is designed to examine the reachability of
Telegram's app and web version within a tested network."
groups: ["im"]
---

This test is designed to examine the reachability of Telegram's app and web
version within a tested network.

More specifically, this test attempts to perform an HTTP POST request, and
establish a TCP connection to Telegram’s access points (DCs), as well as an
HTTPS GET request to Telegram's web version (`web.telegram.org`) over the
vantage point of the user. The test is triggered as blocking when connections
to *all* access points defined in the [test](
https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/telegram.py#L16-L22)
fail.

Based on this methodology Telegram’s *app* is likely blocked if any of the
following apply:

* TCP connections to all the tested Telegram access points fail

* HTTP POST requests to Telegram's access points do *not* send back a
response to OONI's servers.

Telegram's *web version* is likely blocked if the following applies:

* HTTPS GET request to `web.telegram.org` do *not* send back a consistent
response to OONI's servers.

Read the **[Telegram test specification](https://github.com/ooni/spec/blob/master/nettests/ts-020-telegram.md)**.
