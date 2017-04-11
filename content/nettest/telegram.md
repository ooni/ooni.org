---
title: "Telegram test"
short_description: "This test is designed to examine the reachability of
Telegram's app and web version within a tested network."
groups: ["im"]
---

# Telegram test

This test is designed to examine the reachability of Telegram's app and web
version within a tested network.

More specifically, this test attempts to perform an HTTP POST request, and
establish a TCP connection to Telegram’s access points (DCs), as well as an
HTTP GET request to Telegram's web version (`web.telegram.org`) over the
vantage point of the user. The test is triggered as blocking when connections
to *all* access points defined in the [test]
(https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/telegram.py#L16-L22)
fail.

Based on this methodology Telegram’s *app* is likely blocked if any of the
following apply:

* TCP connections to Telegram's access points fail;

* HTTP(S) POST requests to Telegram's access points do *not* send back a
response to OONI's servers.

Telegram's *web version* is likely blocked if any of the following apply:

* HTTP(S) GET requests to `web.telegram.org` do *not* send back a consistent
response to OONI's servers.
