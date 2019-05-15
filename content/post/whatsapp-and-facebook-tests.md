---
title: "New OONI tests examine the blocking of WhatsApp and Facebook Messenger"
author: "Maria Xynou"
date: "2016-12-15"
tags: ["whatsapp", "facebook", "censorship"]
categories: ["blog"]
---

Today the [Open Observatory of Network Interference
(OONI)](https://ooni.torproject.org/) project is excited to announce the release
of *two* new software tests which are designed to examine the blocking of
**WhatsApp** and **Facebook Messenger**. You can now run these tests to monitor the
accessibility of these apps across time, and to collect data that can serve as
evidence when/if they are blocked.

# WhatsApp test

Many of our users have asked us to develop a test to examine the accessibility
of WhatsApp, especially in light of it being [blocked](https://ooni.torproject.org/post/brazil-whatsapp-block/) by various governments
around the world during elections, protests, and other political events.

In response, OONI developed a [test](https://github.com/TheTorProject/ooni-spec/blob/master/test-specs/ts-018-whatsapp.md) that examines the reachability of both
WhatsApp’s app and web interface (web.whatsapp.com) within a network. In doing so, our new test
not only examines whether WhatsApp is blocked, but also collects data which
shows how censorship is implemented.

This test, in particular, attempts to perform an HTTP GET request, to establish a TCP
connection and to perform a DNS lookup to WhatsApp’s endpoints, registration service, and web
version over the vantage point of the user. According to our methodology,
WhatsApp’s *app* is likely blocked if any of the following apply:

* TCP/IP connections to WhatsApp’s endpoints fail;

* TCP/IP connections to WhatsApp’s registration service fail;

* DNS lookup illustrates that unexpected IP addresses have been allocated to
 WhatsApp’s endpoints;

* HTTP requests to WhatsApp’s registration service do not send back a response
 to OONI’s servers.

WhatsApp’s *web interface* (web.whatsapp.com), on the other hand, is likely
blocked if any of the following apply:

* TCP/IP connections to web.whatsapp.com fail; 

* DNS lookup illustrates that an unexpected IP address has been allocated to
 web.whatsapp.com;

* HTTP requests to web.whatsapp.com do not send back a consistent response to
 OONI’s servers.

If you’re a macOS or Linux user, you can run this test through the following
steps:

1. [Install](https://ooni.torproject.org/install/ooniprobe/) ooniprobe.

2. [Access ooniprobe’s web UI](https://ooni.torproject.org/install/ooniprobe/#running-ooniprobe) in your web browser. 

By default, the WhatsApp test will automatically be run from your computer on a
daily basis. To opt-out, disable the **Instant Messaging deck** under the decks
section of the web UI.

![IM deck](/post/im-tests/im-deck.png)

To actively run the WhatsApp test, click **Run** under **WhatsApp** in the nettests
section of the web UI.

![WhatsApp test](/post/im-tests/whatsapp.png)

Then click **Start Net Test** to start testing the reachability of WhatsApp in your
network.

![WhatsApp test](/post/im-tests/whatsapp-net-test.png)

To view the results of your test, click **measurements** in OONI’s web UI.

# Facebook Messenger test

Similarly to WhatsApp, Facebook Messenger serves a large user base around the
world and has been the target of censorship by various governments. OONI has
released a new [test](https://github.com/TheTorProject/ooni-spec/blob/master/test-specs/ts-019-facebook-messenger.md) that is designed to examine the reachability of Facebook
Messenger within a network.

This test, in particular, attempts to perform a TCP connection and DNS lookup to
Facebook’s endpoints over the vantage point of the user. According to our
methodology, Facebook Messenger is likely blocked if one or both of the
following apply:

* TCP connections to Facebook’s endpoints fail; 

* DNS lookups to domains associated to Facebook do not resolve to IP addresses
 allocated to Facebook.

If you’re a macOS or Linux user, you can run this test through the following
steps:

1. [Install](https://ooni.torproject.org/install/ooniprobe/) ooniprobe.

2. [Access ooniprobe’s web UI](https://ooni.torproject.org/install/ooniprobe/#running-ooniprobe) in your web browser.

By default, the Facebook Messenger test will automatically be run from your
computer on a daily basis. To opt-out, disable the **Instant Messaging deck** under
the decks section of the web UI.

![IM deck](/post/im-tests/im-deck.png)

To actively run the Facebook Messenger test, click **Run** under **Facebook Messenger**
in the nettests section of the web UI.

![WhatsApp test](/post/im-tests/facebook-messenger.png)

Then click **Start Net Test** to start testing the reachability of Facebook
Messenger in your network.

![WhatsApp test](/post/im-tests/facebook-net-test.png)

To view the results of your test, click **measurements** in OONI’s web UI.

By contributing to the testing of these instant messaging apps, you can help
increase transparency in regards to where, when, and how they are blocked around
the world.
