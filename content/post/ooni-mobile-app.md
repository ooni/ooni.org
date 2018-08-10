---
title: "New OONI Probe Mobile App: Measure Internet Censorship & Performance"
author: "Maria Xynou, Lorenzo Primiterra, Simone Basso, Arturo Filastò"
date: "2017-02-09"
tags: ["censorship", "speed", "performance"]
categories: ["blog"]
---

![OONI mobile app](/post/ooni-mobile-app/ooni-mobile-app.jpg)

Today the [Open Observatory of Network Interference (OONI)](https://ooni.torproject.org/) project is thrilled to
announce the release of a new mobile app (“**ooniprobe - Measure Internet
Censorship & Performance**”) that can now be installed on **Android** and **iOS** for
testing Internet censorship and network performance.

{{<app-stores>}}

By running the tests included in OONI’s mobile app, you can monitor:

* Blocking of websites; 
* Presence of systems that could be responsible for censorship or surveillance; 
* Speed and performance of your network.

The results of your tests will be
[published](https://explorer.ooni.torproject.org/world/), increasing
transparency of internet censorship and network interference around the world.

# Collecting evidence of internet censorship

OONI's [Web Connectivity test](https://ooni.torproject.org/nettest/web-connectivity/) is designed to examine whether websites are blocked
and if so, how. This test, in particular, attempts to determine whether access
to sites is blocked through DNS tampering, TCP/IP blocking, or by a
transparent HTTP proxy. By knowing how access to sites is interfered with,
you can more easily evaluate how to circumvent that specific type of
censorship. As OONI is committed to transparency through the [publication of
all network measurement data](https://measurements.ooni.torproject.org/), you can use it as evidence of any censorship
events that you come across.

# Detecting systems responsible for censorship and surveillance

Various types of proxy technologies are used in networks for implementing
censorship, surveillance, and traffic manipulation. OONI's [HTTP invalid request line test](https://ooni.torproject.org/nettest/http-invalid-request-line/) is designed to uncover the presence of such systems within tested
networks. However, it's important to point out that not all systems that you
might find are necessarily responsible for censorship and/or surveillance! Many
proxy technologies, for example, are used in networks for caching purposes.

# Measuring the speed and performance of your network

Sometimes the network that we are using doesn't work as well as we'd like it to.
OONI's implementation of the [Network Diagnostic Test (NDT)](https://ooni.torproject.org/nettest/ndt/) attempts to measure
the speed of your network by connecting to [M-Lab](http://www.measurementlab.net/) servers near you and by
subsequently uploading and downloading random data. In doing so, NDT collects
low level TCP/IP information that can help characterize the speed and
performance of your network. Such information can also be useful in examining
cases of throttling.

# Open data

OONI publishes all network measurement data that it collects and processes
because open data allows third parties to conduct independent studies, to verify
OONI findings and/or to answer other research questions. Such data also helps
increase transparency around internet censorship and various forms of network
interference. All data is published on [OONI Explorer](https://explorer.ooni.torproject.org/world/).

Once you have run each test, you should be able to view the results of your
tests directly in the app, as illustrated below:

![Test results](/post/ooni-mobile-app/app-results.jpg)

# Free software

All OONI tests, as well as its NDT implementation, are based on free and open
source software (the [network measurement library
MeasurementKit](https://measurement-kit.github.io)). You can find the source
code through the following links:

* https://github.com/TheTorProject/ooniprobe-ios

* https://github.com/TheTorProject/ooniprobe-android

* https://github.com/measurement-kit/measurement-kit

# Next steps

More tests will be integrated into OONI’s mobile app within the next year,
including - but not limited to - our new
[WhatsApp](https://ooni.torproject.org/nettest/whatsapp/) and [Facebook Messenger tests](https://ooni.torproject.org/nettest/facebook-messenger/). In
the meanwhile, learn about [potential risks](https://ooni.torproject.org/about/risks/) associated to running
ooniprobe. If you feel comfortable with them, install OONI’s mobile app and test
every network you connect to!

-----------------------------------------------------------------------------------------------------------

The OONI team thanks the [Open Technology Fund](https://www.opentech.fund/) for
sponsoring the development of OONI's mobile app, and
[M-Lab](https://www.measurementlab.net/) for sponsoring the development of
[Measurement-Kit](https://github.com/measurement-kit/measurement-kit) at the
[Nexa Center for Internet &amp; Society](https://nexa.polito.it/).
