---
title: HTTP Invalid Request Line
slug: http-invalid-request-line
---


*Warning: This test is more dangerous to run than any other one. Only
perform it if you know what you are doing.*

This test does some basic fuzzing of HTTP request lines. We generate a
series of requests with the method, version number or other fields
tweaked so that the request is invalid.

Some interception devices will attempt to parse the invalid request but
choke in the process, revealing their presence and information which can
be used to fingerprint them.

The remote backend runs a TCP echo server. If the response from the
backend does not match what was sent then we say that tampering is
occurring.

For reference, a properly formed HTTP request line looks like:

    GET / HTTP/1.1

Types of Fuzzing Performed
==========================

**Invalid method.** Inserts a random 4-character alphanumeric string
where the method would normally go. Examples:

    9znH / HTTP/1.1
    MSVJ / HTTP/1.1
    OjzJ / HTTP/1.1

**Extra field.** Sends four fields rather than the standard three. The
fields are all composed of random characters:

    WFpe6 8E496 2jrUf jMtr3
    4KIqA PEh2h x7HRf EdfM9
    8PrHV 0qoKH Jv322 n7ogH

**Very long method field.** Sends a random method string of 512
characters in length:

    5pUQ9jNHCn2gH1fWEiWxjmz3fP6vD4hKvgYqjct5ya0oZt↩
    7C12nD7cmN0YWXWDCYJB88pwVL8eQU5dkLV8miHoDKIT3P↩
    fioxcjrw6QjF9QJ1hSnbqVTtTzGw1gaE7jXEujhESrqqf7↩
    GwYAak02oAtMRrouTF730Ra54K2XdQwddMngdQJ4by0Zj4↩
    jj6dp3LwE… (512 characters total) / HTTP/1.1

**Invalid HTTP version.** Inserts a random 3-character alphanumeric
string in place of the HTTP version:

    GET / HTTP/7Jn
    GET / HTTP/4QY
    GET / HTTP/4rL

Identifying Transparent Proxies
===============================

If a transparent proxy is present on the connection, the response may
help identify which software is being used and the version number. This
example shows how the [Squid][] caching proxy responds to an invalid
request:

    HTTP/1.0 400 Bad Request
    Server: squid/2.6.STABLE21
    Date: Sat, 23 Jul 2011 02:22:44 GMT
    Content-Type: text/html
    Content-Length: 1178
    Expires: Sat, 23 Jul 2011 02:22:44 GMT
    X-Squid-Error: ERR_INVALID_REQ 0
    X-Cache: MISS from cache_server
    X-Cache-Lookup: NONE from cache_server:312
    Via: 1.0 cache_server:312 (squid/2.6.STABLE21)
    Proxy-Connection: close

Running this Test
=================

    bin/ooniprobe
    manipulation/http_invalid_request_line
    -b <address of backend>

Example Reports
===============

-   [No traffic manipulation detected][]
-   [Transparent proxy detected in Indonesia][No traffic manipulation
    detected]

Source Code
===========

-   [http\_invalid\_request\_line.py][No traffic manipulation detected]
-   [tcp\_helpers.py][No traffic manipulation detected]

  [Squid]: http://www.squid-cache.org
  [No traffic manipulation detected]: 

