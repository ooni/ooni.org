---
title: "Year in Review: OONI in 2021"
description: "An overview of OONI highlights from 2021, as well as upcoming OONI projects for 2022."
author: "Maria Xynou"
date: "2021-12-27"
tags: ["ooni", "2021", "year-in-review"]
categories: ["blog"]
---

In light of the ongoing global [COVID-19 pandemic](https://www.who.int/emergencies/diseases/novel-coronavirus-2019),
2021 continued to be a challenging year for everyone.

Yet, several exciting things happened in the censorship measurement
world. In this post, we share some OONI highlights from 2021, as well as
some upcoming OONI projects for 2022!

* [OONI Probe](#ooni-probe)

    * [Automated OONI Probe testing](#automated-ooni-probe-testing)

    * [New Debian package for OONI Probe](#new-debian-package-for-ooni-probe)

    * [New OONI Probe Command Line Interface for Linux and macOS](#new-ooni-probe-command-line-interface-for-linux-and-macos)

    * [New OONI Probe Experimental card](#new-ooni-probe-experimental-card)

    * [Improved resilience to blocking](#improved-resilience-to-blocking)

    * [New OONI Probe user guides](#new-ooni-probe-user-guides)

* [Measurement methodologies](#measurement-methodologies)

    * [New OONI Probe test for Signal Private Messenger app](#new-ooni-probe-test-for-signal-private-messenger-app)

    * [New OONI Probe test for RiseupVPN](#new-ooni-probe-test-for-riseupvpn)

    * [New OONI Probe tests in progress](#new-ooni-probe-tests-in-progress)

        * [Website measurement test](#website-measurement-test)

        * [Tor Snowflake pluggable transport test](#tor-snowflake-pluggable-transport-test)

    * [New tutorial for writing OONI Probe tests](#new-tutorial-for-writing-ooni-probe-tests)

* [New OONI tools in progress](#new-ooni-tools-in-progress)

    * [OONI Probe Web](#ooni-probe-web)

    * [Web platform for updating test lists](#web-platform-for-updating-test-lists)

    * [Measurement Aggregation Toolkit](#measurement-aggregation-toolkit)

* [Real-time analysis and URL prioritization](#real-time-analysis-and-url-prioritization)

* [Research reports](#research-reports)

* [Community](#community)

    * [OONI partnerships](#ooni-partnerships)

    * [OONI Partner Training 2021](#ooni-partner-training-2021)

    * [OONI workshops and presentations](#ooni-workshops-and-presentations)

* [OONI-verse](#ooni-verse)

* [2022](#2022)

# OONI Probe

## Automated OONI Probe testing

{{<img src="images/01.png" title="Automated testing" alt="Automated testing">}}

Would you like to measure internet censorship every day without having
to remember to manually run tests? You can now have [OONI Probe](https://ooni.org/install/) run regular censorship measurement
tests automatically for you!

In 2021, we added support for automated testing to both the [OONI Probe mobile](https://ooni.org/install/mobile) and
[desktop](https://ooni.org/install/desktop) apps. This means that you
can [configure your OONI Probe app to run tests automatically](https://ooni.org/support/ooni-probe-desktop#automated-ooni-probe-testing)
on a regular basis, without having to remember to actively run the tests
yourself.

All you need to do is **[enable the "Run tests automatically"](https://ooni.org/support/ooni-probe-desktop#automated-ooni-probe-testing)**
option in the "Automated testing" setting of your OONI Probe app.
Through these settings on OONI Probe Mobile, you can choose whether
you'd prefer to have OONI Probe only run tests while you're connected to
WiFi and when your phone is charging (to avoid consuming your data and
battery).

Depending on the OONI Probe platform, automated testing currently
differs a bit. If you enable automated testing on [OONI Probe Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe),
[iOS](https://itunes.apple.com/us/app/id1199566366), [Windows, or macOS](https://ooni.org/install/desktop), all tests are run
automatically every hour. If you enable automated testing on [OONI Probe Linux](https://ooni.org/install/cli/ubuntu-debian), automated
testing is performed every 12 hours. In all cases, the testing includes
all [tests](https://ooni.org/nettest/) currently shipped as part of
the OONI Probe apps, excluding the performance card tests (which are
bandwidth intensive) and the new experimental card tests. Website
testing is currently limited to 100 URLs in each automated run, which
are randomly selected from the [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists).

To avoid over-cluttering the "Test Results" section of your OONI Probe
app with too many test results (from automated runs), they are only made
available on the [OONI API](https://api.ooni.io/) and [OONI Explorer](https://explorer.ooni.org/), where they are openly published
in real-time.

Since the release of OONI Probe versions with support for automated
testing, we have observed a spike in OONI measurement coverage
worldwide. Notably, we observe a spike in the number of ASNs that
receive at least 1,000 OONI measurements every month, as illustrated
below.

{{<img src="images/02.png" title="chart" alt="chart">}}

The above graph demonstrates that automated OONI Probe testing has
helped ensure that a larger volume of measurements is collected from a
larger set of stable vantage points over time.

We strongly recommend [enabling automated testing](https://ooni.org/support/ooni-probe-desktop#automated-ooni-probe-testing),
as this will help ensure regular testing, which is crucial for detecting
censorship events. In doing so, you will contribute [open data](https://ooni.org/data/) and help the internet freedom community
monitor and respond to censorship events around the world.

## New Debian package for OONI Probe

{{<img src="images/03.png" title="OONI Probe" alt="OONI Probe">}}

We released a [new Debian package](https://ooni.org/install/cli/ubuntu-debian) for OONI Probe
with support for automatic testing.

As part of the installation process, this package displays the informed
consent procedure through the use of native Debian packaging features.
Packages are [automatically built](https://github.com/ooni/probe/issues/1061) as part of the
continuous integration workflow. You can get the new Debian package
through the [OONI Probe installation page for Linux](https://ooni.org/install/cli/ubuntu-debian).

## New OONI Probe Command Line Interface for Linux and macOS

{{<img src="images/04.png" title="OONI Probe" alt="OONI Probe">}}

We released a new [OONI Probe Command Line Interface (CLI)](https://ooni.org/install/cli) for **Linux** and **macOS**. You
can also run OONI Probe CLI on **Raspberry Pis**.

[OONI Probe CLI](https://ooni.org/install/cli) serves as a
**replacement** for the [python legacy version of ooniprobe](https://github.com/ooni/probe-legacy), which has been around
since 2012, and which (to our surprise!) is still being run by users
around the world.

If you happen to be one of those users, please [switch over to OONI Probe CLI](https://ooni.org/install/cli) because:

* Legacy ooniprobe will no longer be able to contribute measurements,
since it relies on [v2 onion services which were deprecated](https://blog.torproject.org/v2-deprecation-timeline/)
in October 2021;

* OONI Probe CLI regularly runs all tests automatically in the
background;

* OONI Probe CLI will receive important future updates (new tests,
code improvements, etc.).

You can install OONI Probe on the command line on:

* [Debian/Ubuntu](https://ooni.org/install/cli/ubuntu-debian)

* [macOS](https://ooni.org/install/cli/macos)

Upon installation, OONI Probe will run tests automatically every day!
Given that all OONI Probe measurements are [openly published](https://ooni.org/data/) in real-time, you will help the
internet freedom community better investigate internet censorship around
the world.

## New OONI Probe Experimental card

{{<img src="images/05.png" title="OONI Probe" alt="OONI Probe">}}

As censorship becomes more sophisticated, we need to ship new censorship
detection tests faster.

To this end, we added a **new Experimental card** to the [OONI Probe apps](https://ooni.org/install/), where we plan to release our latest
experiments. This card is meant to provide us agility in adding and
removing new experiments on an ongoing basis, particularly in response
to emergent censorship events. By having a relatively quick and easier
way to ship new experiments, we aim to collect relevant network
measurement data that can help us improve our methodologies and respond
faster to more sophisticated forms of internet censorship.

Through the Experimental card, you can currently run our new [STUN reachability test](https://github.com/ooni/spec/blob/master/nettests/ts-025-stun-reachability.md).
In 2022, you can expect to see new experimental tests!

## Improved resilience to blocking

{{<img src="images/06.png" title="OONI Probe" alt="OONI Probe">}}

At some point in 2021, community members in Iran and a few other
countries reported that they were unable to use OONI Probe. We
investigated the issue and worked towards making [OONI Probe Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe)
more resilient to accidental or deliberate blocking of our backend
services.

Specifically, we implemented support for specifying a proxy that speaks
with OONI’s backend services. We also improved the build process to
influence the TLS Client Hello fingerprint, which helps with avoiding
accidental blocking.

OONI Probe Android now includes **backend proxy settings** where you
can:

* Enable [Psiphon](https://psiphon.ca/), or;

* Use a custom proxy.

This will help with circumventing any accidental or deliberate OONI
Probe blocking.

We published a [blog post](https://ooni.org/post/making-ooni-probe-android-more-resilient/)
where we describe in detail what we did to make OONI Probe Android more
resilient.

## New OONI Probe user guides

{{<img src="images/07.png" title="OONI Probe" alt="OONI Probe">}}

Do you have questions about using OONI Probe? To support community use
of OONI Probe and community engagement activities, we published 3 new
OONI Probe user guides in 2021.

These include **user guides** for:

* [OONI Probe Mobile](https://ooni.org/support/ooni-probe-mobile)
(Android & iOS)

* [OONI Probe Desktop](https://ooni.org/support/ooni-probe-desktop)
(Windows & macOS)

* [OONI Probe Command Line Interface](https://ooni.org/support/ooni-probe-cli)
(Debian/Ubuntu Linux, macOS, Raspberry Pis)

These user guides share step-by-step instructions (with screenshots) on
how to:

* Install and run OONI Probe (to measure various forms of internet
censorship)

* Access and share OONI censorship measurement data

* Customize your use of OONI Probe (for example, to test websites of
your choice)

* Configure your OONI Probe settings

With our new user guides, you can become an OONI Probe power user! Upon
reading these guides, we hope you feel empowered to share your OONI
Probe knowledge and skills with others.

# Measurement methodologies

## New OONI Probe test for Signal Private Messenger app

{{<img src="images/08.png" title="OONI Probe Signal test" alt="OONI Probe Signal test">}}

[Signal Private Messenger](https://signal.org/), commonly used by human rights
defenders worldwide, is widely considered the state-of-the-art app for
private and secure communications. But as its [popularity surged](https://edition.cnn.com/2021/01/12/tech/signal-growth-whatsapp-confusion/index.html)
recently, we started to hear that it was blocked in several countries.

In response to community requests, we released a new OONI Probe
[test](https://ooni.org/nettest/signal/) designed to measure the
blocking of the [Signal Private Messenger](https://signal.org/) app.

Specifically, our [new Signal test](https://github.com/ooni/spec/blob/master/nettests/ts-029-signal.md)
checks whether it’s possible to establish a TLS connection (while
validating the TLS certificate against the custom Signal CA root
certificate) and send an HTTP GET request to the Signal server backends
from the vantage point of the user. If the test successfully performs an
HTTPS request to the tested Signal endpoints, the Signal app is
considered reachable from the tested network. However, if connections to
any of the tested Signal endpoints fail, Signal might be unreachable or
blocked.

You can run this [test](https://ooni.org/nettest/signal/) and measure
the reachability of the Signal app through both the [OONI Probe mobile](https://ooni.org/install/mobile) and
[desktop](https://ooni.org/install/desktop) apps. All Signal test
results from around the world are [openly published](https://explorer.ooni.org/search?since=2021-11-23&until=2021-12-24&failure=false&test_name=signal)
in real-time, enabling the internet freedom community to track whether
access to the [Signal app](https://signal.org/) is being interfered
with.

Based on [Signal test results](https://explorer.ooni.org/search?since=2021-11-23&until=2021-12-24&failure=false&test_name=signal)
contributed by our community worldwide, we published a [research report](https://ooni.org/post/2021-how-signal-private-messenger-blocked-around-the-world/)
which documents the blocking of the Signal app in Iran, China, Cuba, and
Uzbekistan.

## New OONI Probe test for RiseupVPN

{{<img src="images/09.png" title="OONI Probe RiseupVPN test" alt="OONI Probe RiseupVPN test">}}

Thanks to the [LEAP collective](https://leap.se/), the OONI Probe apps
include a new test for measuring the blocking of
[RiseupVPN](https://riseup.net/vpn)!

The [RiseupVPN test](https://ooni.org/nettest/riseupvpn/), developed
by the [LEAP collective](https://leap.se/), provides an automated way
of examining whether [RiseupVPN](https://riseup.net/vpn) works on a
tested network. Specifically, this
[test](https://github.com/ooni/spec/blob/master/nettests/ts-026-riseupvpn.md)
evaluates if the bootstrap servers used during the self-configuration of
the VPN clients can be reached. The test also checks if RiseupVPN’s
gateways can be reached on different ports and transports. In the
future, this test can form the base to offer a generic way to probe the
reachability of other LEAP-powered VPN infrastructure, self-hosted by
other providers.

You can now [check whether RiseupVPN works](https://ooni.org/nettest/riseupvpn/) on your network by
[running OONI Probe](https://ooni.org/install/). All RiseupVPN test
results from around the world are [openly published](https://explorer.ooni.org/search?since=2021-11-23&until=2021-12-24&failure=false&test_name=riseupvpn)
in real-time.

## New OONI Probe tests in progress

Throughout 2021, we worked on designing and developing new OONI Probe
experiments which we plan to ship as part of the [OONI Probe apps](https://ooni.org/install/) in 2022.

The new tests include:

* [Website measurement test](https://github.com/ooni/probe/issues/1733)

* [Tor Snowflake pluggable transport test](https://github.com/ooni/spec/blob/master/nettests/ts-030-torsf.md)

We share further information below.

### Website measurement test

Currently, when you measure the blocking of websites with OONI Probe,
you run the [OONI Web Connectivity test](https://ooni.org/nettest/web-connectivity/). We [released this test back in 2016](https://ooni.org/post/web-connectivity/), when the
web was quite different. We therefore decided to re-think how we measure
websites, and to write a brand new experiment for measuring the blocking
of websites.

Our [new experiment](https://github.com/ooni/probe/issues/1733)
(tentatively called “Websteps”) will serve as the successor to our [Web Connectivity experiment](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md).
The research question that this experiment tries to address is that of
enumerating all the possible ways by which a specific URL can be
blocked. This means that this experiment does not stop when it detects
the first type of blocking, but rather drills deeper to discover all the
ways by which blocking is implemented.

The main differences compared to our current Web Connectivity test that
are worth highlighting include:

* We use a new test helper mechanism for enumerating all the endpoints
that need to be tested for a target URL. This includes all the IPs
that a particular domain resolves to, as well as the full redirect
chain from an uncensored vantage point.

* We also use QUIC to measure websites.

* We expand the taxonomy for classifying the various means by which
blocking is implemented.

* We add support for measuring all IP:URL pairs to detect IP blocking
that only targets certain addresses.

In writing this new test, we also made [significant improvements to our measurement engine](https://github.com/ooni/probe-cli/pull/528). In
particular, we implemented several new primitives for performing the
various stages of a URL request (that can eventually be reused by other
tests as well). In doing so, we also documented (in our [tutorial on writing OONI Probe tests](https://github.com/ooni/probe-cli/tree/master/internal/tutorial))
how third parties can go about using these functions for writing their
own tests. Once the improvements to the measurement engine were made, we
wrote the [new implementation of Websteps](https://github.com/ooni/probe-cli/pull/530) using these new
functions.

During the summer of 2021, we had the opportunity to serve as the host
organization for [Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) student, Kathrin
Elmenhorst, who worked with us on [developing OONI Probe network experiments](https://community.torproject.org/gsoc/ooni-probe-experiments/).
We worked with Kathrin on [implementing a prototype](https://github.com/ooni/probe-cli/pull/432) for the new
Websteps experiment, [adding support for using the utls library](https://github.com/ooni/probe-cli/pull/442) for TLS parroting,
and making [improvements to how errors are handled](https://github.com/ooni/probe/issues/1505) inside of our
measurement engine.

Currently, you can run the new Websteps experiment through our
[miniooni researcher tool](https://github.com/ooni/probe-cli#miniooni). We plan to ship this
new test as part of the OONI Probe apps in 2022!

### Tor Snowflake pluggable transport test

We developed a [new experiment](https://github.com/ooni/spec/blob/master/nettests/ts-030-torsf.md)
for measuring the reachability of the [Tor Snowflake pluggable transport](https://snowflake.torproject.org/), which is used by
[Tor](https://www.torproject.org/) users in censored environments. In
particular, Snowflake is a [pluggable transport](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home)
that proxies traffic through temporary proxies using
[WebRTC](https://webrtc.org/).

Apart from developing the [new OONI Probe experiment for Tor Snowflake](https://github.com/ooni/spec/blob/master/nettests/ts-030-torsf.md),
we also integrated Snowflake into OONI Probe as a Go library leveraging
version 2 of the pluggable-transports specification. We [expanded our data analysis capabilities to process and annotate Snowflake measurements](https://github.com/ooni/ooni.org/issues/766) as
“anomalous” when the test fails to successfully bootstrap the Snowflake
pluggable transport, and we [added support for extracting the bootstrap time](https://github.com/ooni/pipeline/pull/360/files) of the Snowflake
experiment. We also [added support to OONI Explorer](https://github.com/ooni/ooni.org/issues/773) and to the
[OONI API](https://github.com/ooni/ooni.org/issues/771) for displaying
measurements collected from our new Snowflake experiment.

We plan to ship the new Tor Snowflake experiment as part of the OONI
Probe apps in 2022!

## New tutorial for writing OONI Probe tests

Are you interested in contributing your own test to OONI Probe?

We published a [new tutorial](https://github.com/ooni/probe-cli/tree/master/internal/tutorial)
which explains how to write OONI Probe tests.

This in-depth tutorial is meant for developers who are interested in
contributing new experiments to OONI Probe. The tutorial includes
multiple chapters that explain how to practically write a network
measurement experiment (using the Tor Snowflake experiment as an
example), how to use the measurex package to write network experiments,
and how to use the netxlite networking library. The tutorial includes
code based on existing network measurement experiments.

OONI Probe has always been [free and open source](https://github.com/ooni/) to encourage independent third-party
review of our
[methodologies](https://github.com/ooni/spec/tree/master/nettests). We
have always hoped that the openness of OONI Probe would also encourage
talented developers to contribute new experiments.

Now, with the help of our [new tutorial](https://github.com/ooni/probe-cli/tree/master/internal/tutorial),
you can contribute your own network measurement tests. If integrated
into OONI Probe, your test will be run in around 200 countries and
territories every month, with test results published as [open data](https://ooni.org/data/) in real-time.

We have already integrated the [RiseupVPN test](https://ooni.org/nettest/riseupvpn/) developed by the LEAP
collective, and we have worked with
[M-Lab](https://www.measurementlab.net/) on integrating the
[NDT](https://ooni.org/nettest/ndt/) and
[DASH](https://ooni.org/nettest/dash/) performance tests. We look
forward to integrating more tests from the community!

# New OONI tools in progress

Throughout 2021, we worked on developing the following new OONI tools:

* OONI Probe Web

* Web platform for updating test lists

* Measurement Aggregation Toolkit (MAT)

We plan to publicly launch the above tools in 2022! Below we share
information about each tool.

## OONI Probe Web

{{<img src="images/10.png" title="OONI Probe Web" alt="OONI Probe Web">}}

Throughout 2021, we worked on building a new [OONI Probe Web](https://github.com/ooni/probe-web) version designed to run from
your web browser. Since this does not require the installation of
software, OONI Probe Web is meant to support rapid response efforts to
emergent censorship events.

Over the years, we have received many community requests for a
browser-based version of OONI Probe that community members can easily
share, and which does not require the installation of a new app. In
response to these requests, we are building OONI Probe Web, but it will
*not* serve as a replacement for our [OONI Probe apps](https://ooni.org/install/) because the types of tests that you
can run from a browser are very limited in comparison to what you can
technically measure through an application. As a result, OONI Probe Web
is limited to website testing (unlike the OONI Probe apps which include
a [variety of different tests](https://ooni.org/nettest/)).

OONI Probe Web is therefore meant to *supplement* the OONI Probe apps,
to serve as a gateway for introducing more people to OONI Probe, and to
encourage more [OONI Probe app](https://ooni.org/install/)
installations.

We have a prototype of OONI Probe Web ready, and we plan to publicly
launch it in 2022!

## Web platform for updating test lists

{{<img src="images/11.png" title="web platform" alt="web platform">}}

When you measure the [blocking of websites](https://ooni.org/nettest/web-connectivity/) with [OONI Probe](https://ooni.org/install/), you test websites included in the
[Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists).
Given that OONI Probe website testing is limited to the specific
websites included in these lists, the quality of OONI website censorship
measurement findings greatly depends on the quality of the websites
included in the Citizen Lab test lists.

These lists are publicly hosted on
[GitHub](https://github.com/citizenlab/test-lists/tree/master/lists),
and are curated and updated by community members around the world.
However, many community members who are best suited to determine which
websites should be tested for censorship (such as political scientists
and human rights defenders) are not GitHub users (a platform typically
used by developers), which has presented challenges in updating the
Citizen Lab test lists.

We therefore developed a [new web platform](https://test-lists.ooni.org/) to enable community members to
review and contribute to the [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists)
*without* using GitHub. Through this web platform, you will be able to
review all the Citizen Lab test lists, add new URLs, propose the
deletion of URLs, and edit existing URLs and [category codes](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv).
You will be able to submit your contributions directly through the web
platform, which will automatically open a pull request for you on GitHub
so that community contributions can continue to go through the usual
peer-reviewed process.

We currently have a private beta version of the web platform ready,
which we’re improving upon based on community feedback. We aim to
publicly launch the platform in 2022!

## Measurement Aggregation Toolkit

{{<img src="images/12.png" title="MAT" alt="MAT">}}

Evaluating internet censorship requires examining measurements in
*aggregate*, which is why we are building a new [Measurement Aggregation Toolkit (MAT)](https://explorer.ooni.org/experimental/mat).

As part of our OONI data analysis efforts (which, for example, support
our [research reports](https://ooni.org/reports/)), we always
aggregate measurements to evaluate whether
“[anomalies](https://ooni.org/support/faq/#what-do-you-mean-by-anomalies)”
(signs of potential censorship) are present and, if so, whether we
observe a large volume of anomalies (on a specific network) in
comparison to successful measurements. Viewing OONI measurements in
aggregate not only helps with ruling out [false positives](https://ooni.org/support/faq/#what-are-false-positives) and
better detecting censorship events, but it also helps with evaluating
how censorship *changes* over time, and how it *differs* across networks
in a country.

Given that data aggregation is *essential* for evaluating and detecting
censorship events, we decided to automate this process to enable the
broader internet freedom community to more effectively monitor and
respond to censorship events based on OONI data.

With our new [Measurement Aggregation Toolkit (MAT)](https://explorer.ooni.org/experimental/mat), you will be able to
**produce custom charts based on aggregate views of real-time OONI
data** collected from around the world. We are still working on
improving the MAT, but we expect to publicly launch it in 2022!

# Real-time analysis and URL prioritization

{{<img src="images/13.png" title="OONI Explorer" alt="OONI Explorer">}}

All OONI measurements collected from around the world are [openly published](https://ooni.org/data/) in real-time.

We are now in a position to **automatically confirm instances of
DNS-based censorship** (when [block pages](https://ooni.org/support/glossary/#block-page) are served). We
[added backend support](https://github.com/ooni/backend/issues/517)
for confirming DNS-based anomalies, and we [added new blockpage fingerprints](https://github.com/ooni/backend/issues/518) (both DNS and
HTTP response body) to our database. This has allowed us to
automatically detect and confirm the blocking of many more websites
around the world. [OONI Explorer](https://explorer.ooni.org/) now
displays many cases of automatically confirmed DNS-based censorship from
countries that include
[Malaysia](https://explorer.ooni.org/search?since=2021-11-23&until=2021-12-24&failure=false&probe_cc=MY&only=confirmed),
[Thailand](https://explorer.ooni.org/search?since=2021-11-23&until=2021-12-24&failure=false&probe_cc=TH&only=confirmed),
and
[Myanmar](https://explorer.ooni.org/search?since=2021-11-23&until=2021-12-24&failure=false&probe_cc=MM&only=confirmed).

To improve the quality of website testing (and resulting OONI
measurements), we are actively using our [smart URL list system](https://ooni.org/post/ooni-smart-url-list-system/) to adjust
URL testing priorities worldwide, particularly in response to emergent
censorship events. In particular, we are actively using (and improving
upon) the [OONI check-in API](https://github.com/ooni/api/blob/master/newapi/ooniapi/probe_services.py#L44)
to orchestrate automated OONI Probe testing (if a user has enabled
automated testing), and to ensure that probes measure URLs based on our
[prioritization policies](https://ooni.org/post/policy-url-prioritization/ooni-policy-url-prioritization.pdf)
configured in the backend.

Based on our smart URL list system, we have prioritized the [global testing of specific social media URLs](https://github.com/ooni/backend/issues/507) which are
[frequently blocked](https://ooni.org/reports/) around the world. We
also prioritize the testing of the [Citizen Lab’s “Social Networking (GRP)” category code](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)
in specific countries in response to reports involving the blocking of
social media websites.

Our new smart URL list system has empowered us to dynamically adjust URL
testing priorities in response to censorship events. On 14th July 2021,
for example, we bumped up the priority of the [Citizen Lab’s “Social Networking (GRP)” category code](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)
in Cuba (in response to reports of [social media blocks amid protests](https://www.nbcnews.com/tech/tech-news/cubans-protest-government-cracks-internet-access-messaging-apps-rcna1400)).
This enabled us to detect (and collect measurements on) the [temporary blocking of facebook.com](https://explorer.ooni.org/search?until=2021-07-30&since=2021-06-30&probe_cc=CU&domain=www.facebook.com&only=anomalies)
and
[tiktok.com](https://explorer.ooni.org/search?until=2021-07-30&since=2021-06-30&probe_cc=CU&domain=www.tiktok.com)
in Cuba (in addition to the blocking of other social media apps).
Following the prioritization of URLs from this category, we were able to
collect (and publish) a total of 960 measurements pertaining to the
testing of social media URLs in Cuba during the protests.

Throughout 2021, we made a series of improvements to the [OONI data processing pipeline](https://github.com/ooni/pipeline), we re-processed
all OONI measurements, we added scoring for new experiments, and we
started migrating over to alternative database solutions that boost the
performance of our services and better meet our data needs.

# Research reports

In collaboration with community members, we published the following 10
[research reports](https://ooni.org/reports/) documenting internet
censorship events around the world:

* [Russia started blocking Tor](https://ooni.org/post/2021-russia-blocks-tor/)

* [A multi-perspective view of Internet censorship in Myanmar](https://ooni.org/post/2021-multiperspective-view-internet-censorship-myanmar/)

* [Investigating Internet shutdowns through Mozilla telemetry](https://ooni.org/post/2021-investigating-internet-shutdowns-mozilla-telemetry/)

* [How countries attempt to block Signal Private Messenger App around the world](https://ooni.org/post/2021-how-signal-private-messenger-blocked-around-the-world/)

* [Italy blocks Gutenberg book publishing website](https://ooni.org/post/2021-italy-blocks-gutenberg-book-publishing-website/)

* [No Access: LGBTIQ Website Censorship in Six Countries](https://ooni.org/post/2021-no-access-lgbtiq-website-censorship-six-countries/)

* [Zambia: Social media blocked amid 2021 general elections](https://ooni.org/post/2021-zambia-social-media-blocks-amid-elections/)

* [Media censorship in Azerbaijan through the lens of network measurement](https://ooni.org/post/2021-azerbaijan/)

* [Myanmar: Data on internet blocks and internet outages following military coup](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/)

* [Uganda: Data on internet blocks and nationwide internet outage amid 2021 general election](https://ooni.org/post/2021-uganda-general-election-blocks-and-outage/)

Notably, we had the opportunity to collaborate with
[IODA](https://ioda.caida.org/), [Kentik](https://www.kentik.com/),
and other researchers from [UC San Diego](https://ucsd.edu/) and the
[University of Michigan](https://umich.edu/) on a **[research paper](https://dl.acm.org/doi/pdf/10.1145/3473604.3474562)** (“A
multi-perspective view of Internet censorship in Myanmar”) which offers
a holistic view into the censorship events that followed the February
2021 military coup in Myanmar. We submitted this paper to the [ACM
SIGCOMM 2021 Workshop on Free and Open Communications on the Internet (FOCI 2021)](https://conferences.sigcomm.org/sigcomm/2021/workshop-foci.html),
who [published](https://dl.acm.org/doi/10.1145/3473604.3474562) our
paper in August 2021.

We also submitted a [research paper](https://www.ndss-symposium.org/wp-content/uploads/dnspriv21-02-paper.pdf)
(“Measuring DoT/DoH Blocking Using OONI Probe: a Preliminary Study”) to
the 2021 DNS Privacy Workshop of the NDSS Symposium, where we
[present](https://www.ndss-symposium.org/ndss-paper/auto-draft-123/)
our new DNSCheck experiment and measurement results from the testing of
123 DoT/DoH services (corresponding to 461 TCP/QUIC endpoints) in
Kazakhstan, Iran, and China.

In December 2021, we started [serving as the host organization for Gurshabad Grover](https://twitter.com/OpenObservatory/status/1471454369866719237),
an [Open Technology Fund (OTF)](https://www.opentech.fund/)
Information Controls Research Fellow who will investigate how ISPs,
through their technical decisions, can exacerbate or minimize the
effects of state-ordered censorship (with a focus on South Asia and
Southeast Asia). We also look forward to hosting two other OTF research
fellows in 2022!

# Community

## OONI partnerships

{{<img src="images/14.png" title="OONI partnerships" alt="OONI partnerships">}}

Since 2016, we have had the opportunity to form
[partnerships](https://ooni.org/partners) with **41 organizations**
from around the world on the study of internet censorship.

Throughout 2021, we formed several new partnerships, including those
with [Internet Society (ISOC)](https://ooni.org/partners/internet-society/), Tanzania’s
[Zaina Foundation](https://ooni.org/partners/zaina-foundation/), and
India’s [Centre for Internet and Society (CIS)](https://ooni.org/partners/cis-india/). We continued to
collaborate with our partners primarily through the coordination of
censorship measurement efforts, training, and by providing OONI data
analysis support.

## OONI Partner Training 2021

{{<img src="images/15.png" title="OONI Partner Training 2021" alt="OONI Partner Training 2021">}}

To connect with our current (and prospect)
[partners](https://ooni.org/partners), we organized and hosted two
3-day online [OONI Partner Training](https://ooni.org/post/ooni-partner-training-2021/) events:

* **1st OONI Partner Training (28th-30th June 2021):** Participants
from Africa and Latin America

* **2nd OONI Partner Training (5th-7th July 2021):** Participants from
Asia and the Middle East

Overall (as part of the 2 events), we had the opportunity to facilitate
OONI training for **86 participants who work with 49 digital rights
organizations** around the world. Many of the participants work with
local/regional digital rights organizations in 25 countries, while other
participants work internationally with human rights organizations and
circumvention tool projects.

The goal of the OONI Partner Training was to share knowledge and skills
on OONI’s censorship measurement tools, dataset, and methodologies to
enable their use as part of research and advocacy efforts. We also aimed
to collect feedback on how to improve OONI tools to better serve
community needs.

The event was facilitated entirely online and entailed two 1.5 hour
sessions per day (over 3 days). We facilitated the following 6 sessions
as part of each of the two (3-day) OONI Partner Training events:

* Information Controls Around the World

* Introduction to Internet Censorship ([slides](https://ooni.org/documents/2021-ooni-partner-training-resources/introduction-internet-censorship.pdf))

* Using the [OONI Probe Apps](https://ooni.org/install/)

* Using [OONI Run](https://run.ooni.io/) to coordinate censorship testing

* Using [OONI Explorer](https://explorer.ooni.org/) to find censorship measurement data

* Interpreting OONI data ([slides](https://ooni.org/documents/2021-ooni-partner-training-resources/interpreting-ooni-data.pdf))

As an outcome, participants gained knowledge and skills necessary for
carrying out – and engaging their communities with – OONI censorship
measurement research and advocacy. We also had the opportunity to
collect extremely useful feedback from participants on how to improve
OONI tools, data, and methodologies. We share further information about
the training sessions and overall event through our relevant [blog post](https://ooni.org/post/ooni-partner-training-2021/).

## OONI workshops and presentations

In light of the COVID-19 pandemic, most conferences and events continued
to be hosted online this year.

Throughout 2021, we presented OONI at many (online) conferences and
events, including:

* **State of the Onion 2021.** During the Tor Project’s annual [State of the Onion 2021](https://blog.torproject.org/state-of-the-onion-2021/)
event, we [shared OONI highlights from 2021](https://www.youtube.com/watch?v=mNhIjtXuVzk), as well as
upcoming OONI projects for 2022.

* **ISOC Community Week 2021.** On 16th November 2021, we presented
OONI as part of the [Internet Society’s (ISOC) Community Week](https://www.internetsociety.org/events/community-week/)
event.

* **Swahilipot Hub event for HacktoberFest Mombasa.** On 22nd October
2021, we facilitated an OONI workshop (“How to measure Internet
censorship”) for Kenyan civil society as part of the [Swahilipot Hub](https://swahilipothub.co.ke/) event for HacktoberFest
Mombasa.

* **OPTIMA 2.0 Network Measurement Training.** On 21st and 28th
October 2021, we attended [Internews](https://internews.org/)’
live sessions for the “Introduction to Network Measurement” and
“OONI” training modules of the [OPTIMA 2.0 training program](https://internews.org/resource/optima-network-measurement-training/),
where we addressed participant questions pertaining to the
training modules.

* **Bachchao Project test list event.** On 9th and 10th October 2021,
we participated in the [Bachchao Project’s 2-day event](https://ooni.org/post/2021-event-india-test-list/)
(“India, Let’s Build the List”) where we gave a 1-hour
presentation (“Introduction to Internet censorship”), demoed
OONI’s new web platform for updating test lists, and helped
facilitate the hands-on sessions for updating the [Citizen Lab’s test list for India](https://github.com/citizenlab/test-lists/blob/master/lists/in.csv).

* **DIG Festival 2021.** On 3rd October 2021, we participated in a
panel discussion at the [DIG Festival for investigative journalism](https://dig-awards.org/en/dig-festival-2021-english-only/)
in Modena, Italy, where we discussed OONI’s censorship measurement
approach and algorithmic censorship.

* **Kenya Internet Governance Forum (KIGF) 2021 panel.** On 21st
September 2021, we participated as a speaker in a (pre-event)
panel session at the [Kenya Internet Governance Forum (KIGF) 2021](https://kigf.or.ke/kenya-igf-2021/), where we discussed
OONI’s partnerships with digital rights groups in Africa to
measure and respond to internet censorship events.

* **Access Now Twitter Space.** On 15th September 2021, we
participated as a speaker in [Access Now’s Twitter Space](https://twitter.com/accessnow/status/1437893160856870915)
(“Global Rise of Internet Shutdowns #KeepItOn”), where we
discussed how OONI tools and data can be used for measuring the
blocking of websites and apps, as well as OONI’s role in Access
Now’s #KeepItOn campaign fighting internet shutdowns worldwide.

* **Access Now webinar.** On 30th July 2021, we
[presented](https://youtu.be/aFIBrRXKm2E) OONI as part of Access
Now’s webinar (“#KeepItOn during an internet shutdown: How to
measure, document, and circumvent network interference”), where we
discussed how OONI’s tools and data can be used for measuring the
blocking of websites and apps.

* **Nexa Center for Internet and Society 90th Seminar.** On 28th July
2021, we [presented](https://www.youtube.com/watch?v=fO53FLTu4a8) OONI at
the [Nexa Center for Internet and Society](https://nexa.polito.it/lunch-90), where we provided OONI
updates on the state of internet censorship worldwide in 2020.

* **OONI Partner Training 2021.** Between 28th June 2021 to 7th July
2021, we organized and hosted [2 online OONI Partner Training events](https://ooni.org/post/ooni-partner-training-2021/), where
we presented OONI tools and methodologies and collected community
feedback.

* **RightsCon Online 2021.** In June 2021, we participated in
[RightsCon 2021](https://www.rightscon.org/), where we had the
opportunity to speak in the following 5 sessions:

    * Community Lab session: “Who are the perpetrators of internet
    shutdowns? What we documented in 2020 and beyond” (organized
    by Access Now’s #KeepItOn campaign), 7th June 2021

    * Strategy session: “Measuring internet disruptions during
    elections (and other political events)” (organized by OONI and
    CAIDA), 7th June 2021

    * Tech demo: “Understanding internet censorship data through OONI
    Explorer” (organized by OONI), 10th June 2021

    * Panel: “Confronting threats from all sides: building the
    anti-censorship ecosystem” (organized by Internews), 10th June 2021

    * Community Lab session: “Prepare, prevent, resist: a guide for
    internet shutdown advocacy strategy and resilience” (organized
    by Internews), 11th June 2021

* **TechUp workshops.** On 15th May 2021, we facilitated 2 online OONI
workshops for civil society communities in India and in the Philippines as part of the [TechUp event](https://www.theiofoundation.org/techup/). During these 2
workshops, we presented OONI’s tools, methodologies, and dataset,
and provided live demos explaining how participants can use [OONI Explorer](https://explorer.ooni.org/) to track censorship events
worldwide in real-time.

* **Stockholm Internet Forum 2021.** On 12th May 2021, we participated
as a speaker on a panel discussion (“#KeepItOn: Governments weaponizing Internet shutdowns”) at the [Stockholm Internet Forum 2021](https://stockholminternetforum.se/), where we presented
OONI’s work and discussed how OONI has supported the advocacy
efforts of the [#KeepItOn campaign](https://www.accessnow.org/keepiton/) in fighting
internet shutdowns around the world.

* **Nexa Center for Internet and Society 87th Seminar.** On 28th April
2021, we participated as a speaker at the [87th Nexa Lunch Seminar](https://nexa.polito.it/lunch-87) (titled “The risks of
digital sovereignty”).

* **MozFest 2021.** On 17th March 2021, we facilitated a session
(“Exploring Internet censorship through OONI data”) at [MozFest 2021](https://www.mozillafestival.org/) where we demoed [OONI Explorer](https://explorer.ooni.org/) and explained how human
rights defenders can use the platform to investigate internet
censorship around the world.

* **DigitalReach webinar.** On 17th March 2021, we participated as a
speaker on DigitalReach’s [webinar](https://digitalreach.asia/event/from-beijing-with-love-the-internet-firewall-in-southeast-asia/),
“From Beijing with Love: The Internet Firewall in Southeast Asia”,
where we presented OONI’s methodologies and explained how civil
society groups in Southeast Asia can use OONI Probe and OONI data
to investigate internet censorship.

* **OutRight Action International webinar.** On 24th February 2021, we
participated in OutRight Action International’s
[webinar](https://www.youtube.com/watch?v=hlGJ97F_jY0&list=PLDBBbveIozTg0XE_XdD_oj8weBat_Yhsg&index=2)
(“Censored: How LGBTIQ People And Activists Are Threatened By - And Surviving In - Restrictive And Repressive Digital
Environments”) where we discussed OONI’s collaboration with
[OutRight Action International](https://outrightinternational.org/) and the
[Citizen Lab](https://citizenlab.ca/) on investigating [LGBTIQ website censorship](https://ooni.org/post/2021-no-access-lgbtiq-website-censorship-six-countries/)
in Russia, Iran, Saudi Arabia, UAE, Malaysia, and Indonesia.

* **2021 DNS Privacy Workshop of the NDSS Symposium.** On 1st February
2021, we presented our [research paper](https://www.ndss-symposium.org/wp-content/uploads/dnspriv21-02-paper.pdf),
“Measuring DoT/DoH Blocking Using OONI Probe: a Preliminary
Study”. In particular, we
[presented](https://www.ndss-symposium.org/ndss-paper/auto-draft-123/)
our new DNSCheck experiment and measurement results from the
testing of 123 DoT/DoH services (corresponding to 461 TCP/QUIC
endpoints) in Kazakhstan, Iran, and China.

We also presented OONI as part of a number of other private online
workshops, training, and events. We thank community members for their
participation and invaluable feedback!

# OONI-verse

In 2021, the OONI community continued to contribute [*many measurements
from most countries and territories*](https://explorer.ooni.org/) around
the world.

Some highlights of **OONI activities by our community** in 2021 include:

* **PiProbe.** Our Venezuelan partners, [Venezuela Inteligente](https://ooni.org/partners/venezuela-inteligente/),
created a new OONI Probe distribution for Raspberry Pis, called
“[PiProbe](https://github.com/VEinteligente/PiProbe)”.

* **Report on media censorship during 2021 regional elections in Venezuela.** Venezuela Inteligente published a [report](https://vesinfiltro.com/noticias/2021-election-blocks/)
which documents the blocking of media websites amid Venezuela’s
2021 regional elections. Their report makes use of OONI data,
among other data sources.

* **OONI Probe integration into Murakami.** [Measurement Lab (M-Lab)](https://www.measurementlab.net/) integrated OONI Probe
into their [Murakami](https://www.measurementlab.net/blog/murakami/)
internet measurement tool. We are grateful for this
[integration](https://github.com/m-lab/murakami/pull/103), as it
will help increase OONI measurement coverage from more vantage
points!

* **OONI Probe integration into iThena.**
[iThena](https://root.ithena.net/) is a distributed computation
and measurement project based on the [Berkeley Open Infrastructure for Network Computing (BOINC)](https://boinc.berkeley.edu/) platform. The
[integration](https://root.ithena.net/usr/forum_thread.php?id=151)
of OONI Probe into the iThena platform has helped [boost OONI measurement coverage](https://ooni.org/post/2021-ithena-boosts-ooni-measurement-coverage/)
worldwide!

* **Report on the blocking of social networking sites in Sudan.**
Community members from Sudan published a
[report](https://www.beamreports.com/2021/10/16/%D9%85%D8%A7-%D8%AD%D9%82%D9%8A%D9%82%D8%A9-%D8%AD%D8%AC%D8%A8-%D8%A8%D8%B9%D8%B6-%D9%85%D9%88%D8%A7%D9%82%D8%B9-%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D8%A7%D9%84%D8%A5%D8%AC%D8%AA%D9%85%D8%A7/)
which documents the blocking of social networking sites in Sudan
based on OONI data.

* **NetDAN assistive tool.** [Unwanted Witness](https://www.unwantedwitness.org/) launched the [NetDAN assistive tool](https://app.netdan.org/) which notifies people with visual disabilities of network disruptions in Uganda based on
OONI data. NetDAN detects and audibly informs the users about the
connectivity status of the most commonly used websites and
applications in Uganda, using OONI data.

* **Freedom on the Net 2021 reports.** Freedom House published its
annual [Freedom on the Net](https://freedomhouse.org/report/freedom-net/2021/global-drive-control-big-tech)
country reports. OONI data was cited in (at least) the Freedom on
the Net reports for the following countries:
[Uganda](https://freedomhouse.org/country/uganda/freedom-net/2021),
[Italy](https://freedomhouse.org/country/italy/freedom-net/2021),
[Myanmar](https://freedomhouse.org/country/myanmar/freedom-net/2021),
[Azerbaijan](https://freedomhouse.org/country/azerbaijan/freedom-net/2021),
[Iran](https://freedomhouse.org/country/iran/freedom-net/2021),
[Malaysia](https://freedomhouse.org/country/malaysia/freedom-net/2021),
[Saudi Arabia](https://freedomhouse.org/country/saudi-arabia/freedom-net/2021),
[Zambia](https://freedomhouse.org/country/zambia/freedom-net/2021),
[Brazil](https://freedomhouse.org/country/brazil/freedom-net/2021),
[Colombia](https://freedomhouse.org/country/colombia/freedom-net/2021),
[Jordan](https://freedomhouse.org/country/jordan/freedom-net/2021),
and [Ethiopia](https://freedomhouse.org/country/ethiopia/freedom-net/2021).

* **OONI training in Tanzania.** In July 2021, [Zaina Foundation](https://zainafoundationtz.org/) organized and
facilitated an Internet Shutdown Training for human rights
defenders in Tanzania, which included several OONI training
sessions. Zaina Foundation shared community feedback with us and
coordinated with local communities on [translating OONI Probe to Swahili](https://explore.transifex.com/otf/ooniprobe/).

* **OONI documentation in Farsi.** Iranian community members created
[detailed and comprehensive documentation](https://wikicensorship.github.io/fa/docs/measure-internet-censorship/OONI/)
which explains OONI tools and methodologies in Farsi.

* **OONI Probe video tutorial in Spanish.** Our Bolivian partners,
[Fundación Internet Bolivia](https://ooni.org/partners/fundacion-internet-bolivia.org/),
created a [video tutorial in Spanish](https://peertube.tv/videos/watch/e6991978-a3d7-4718-b688-482a9a4de525)
where they present OONI and explain OONI Probe, providing a live
demo of using the tool.

* **Report on media censorship in Venezuela.** Venezuela Inteligente
published a [report](https://vesinfiltro.com/noticias/2021-06-04_censura_digital/)
which documents the blocking of media websites in Venezuela. Their
report makes use of OONI data, among other data sources.

* **Paradigm Initiative’s Ayeta Digital Rights Toolkit.** Our Nigerian
partner, [Paradigm Initiative](https://ooni.org/partners/paradigm-initiative/),
published the [Ayeta Digital Rights Toolkit](https://paradigmhq.org/programs/digital-rights/ayeta/),
which aims to address the growing need to safeguard digital rights
defenders, journalists, whistle blowers, and others working with
sensitive information in the global South. OONI is
[featured](https://paradigmhq.org/wp-content/uploads/2021/04/Ayeta%20Toolkit%20-%20English%20Version.pdf)
as a recommended tool under the “Measuring Internet Shutdowns and
Censorship” section of the Ayeta Digital Rights Toolkit.

* **OONI Probe Command Line Interface (CLI) guide in Spanish.** A
community member (Jacobo Nájera) wrote and published a [guide in Spanish](https://www.jacobo.org/sondas-ooni-desde-la-linea-de-comandos/)
which explains how to install and use the [OONI Probe Command Line Interface (CLI)](https://ooni.org/install/cli).

* **2020 Annual Report on Digital Rights in Venezuela.** Our
Venezuelan partners, [IPYS Venezuela](https://ooni.org/partners/ipys-venezuela/), published
their [2020 Annual Report on Digital Rights in Venezuela](https://ipysvenezuela.org/2021/05/16/32196/), which
made use of OONI data.

* **Report on the blocking of websites in Egypt.** Our Egyptian
partners, [Masaar - Technology and Law Community](https://ooni.org/partners/masaar/), published a
[research report](https://masaar.net/en/blocking-websites-in-egypt-techniques-and-laws/)
documenting the techniques and laws around the blocking of
websites in Egypt. As part of this report, they made use of OONI data.

* **OONI training in Cameroon.** Our Cameroonian partner,
[COMPSUDEV](https://ooni.org/partners/compsudev/), collaborated
with [AfroLeadership](https://afroleadership.org/) on organizing
and facilitating a 2-day training event (“Building Evidence for
Internet Rights Advocacy”) for civil society groups in Cameroon.
As part of this training event, they facilitated OONI workshops
with the goal of introducing participants to OONI’s tools,
methodologies, and dataset.

* **OONI guide by Fundación Karisma.** Our Colombian partner,
[Fundación Karisma](https://ooni.org/partners/karisma-foundation/), wrote
and published a short [OONI guide in Spanish](https://web.karisma.org.co/micro-guia-para-el-uso-de-ooni/).

* **Micro-course on Internet censorship.** [Asuntos del Sur](https://asuntosdelsur.org/) launched [Plataforma Inteligencia de Riesgos](https://riesgosdigitales.academiainnovacionpolitica.org/),
an online platform that provides micro-courses on digital security
and digital rights related topics. This platform features a
[micro-course on internet censorship](https://riesgosdigitales.academiainnovacionpolitica.org/cursos/censura-e-interrupcion-de-redes/)
(including a video about OONI Probe), which we had the opportunity
to contribute. As these micro-courses are primarily geared towards
civil society groups in Latin America, the materials include
Spanish translations.

* **Report on the blocking of currency exchange rate websites in Lebanon.** [SMEX](https://smex.org/) published an
[article](https://smex.org/internet-censorship-in-lebanon-the-case-of-currency-exchange-rate-online-platforms/)
on the blocking of currency exchange rate websites in Lebanon,
citing OONI data.

* **OONI Probe localization.** Thanks to the [Localization Lab](https://www.localizationlab.org/) community, the OONI Probe
app has been [translated](https://www.transifex.com/otf/ooniprobe/) to the
following **21 languages**: Chinese, Russian, Arabic, Persian,
Spanish, French, Hindi, Indonesian, Thai, Turkish, Icelandic,
Italian, Dutch, Portuguese, Catalan, German, Greek, Romanian,
Slovak, Albanian, and Swahili.

We thank our community for their amazing OONI efforts!

# 2022

{{<img src="images/16.png" title="OONI" alt="OONI">}}

We have many exciting projects lined up for 2022!

Some highlights include:

* **OONI Measurement Aggregation Toolkit (MAT).** We aim to publicly
launch our [Measurement Aggregation Toolkit (MAT)](https://explorer.ooni.org/experimental/mat) in 2022 to
enable the internet freedom community to produce custom charts
based on aggregate views of OONI data, supporting research and
rapid response efforts to emergent censorship events.

* **New web platform for community contributions to test lists.** In
2022, we aim to publicly launch our new [web platform](https://test-lists.ooni.org/) that will enable
community members to easily review and contribute to the [Citizen Lab test lists](https://github.com/citizenlab/test-lists)
(without having to use GitHub).

* **New browser-based censorship measurement tool.** In 2022, we aim
to release [OONI Probe Web](https://github.com/ooni/probe-web)
to simplify the process of testing websites during urgent
censorship events. This will complement the [OONI Probe apps](https://ooni.org/install/) and serve needs related to rapid
response.

* **New website measurement test.** We aim to ship our new [website measurement test](https://github.com/ooni/probe/issues/1733) as
part of the OONI Probe apps, significantly improving the quality
of website censorship testing and resulting measurements.

* **New network measurement tests.** We aim to ship new experiments
(such as the [Tor Snowflake pluggable transport test](https://github.com/ooni/spec/blob/master/nettests/ts-030-torsf.md))
developed in 2021 as part of the OONI Probe apps, and develop new
tests!

* **Backend infrastructure overhaul.** To improve the performance of
our services and to enhance our data analysis capabilities, we are
migrating over to new infrastructure. Throughout 2022, we will
work on improving our data processing capabilities and making
significant performance optimizations in our backend
infrastructure.

* **New community resources.** We aim to publish new resources to
support OONI community engagement efforts, including multimedia
content.

* **More research reports, workshops, and training.** We will continue
to collaborate with community members on investigating censorship
events worldwide and documenting them through the publication of
[research reports](https://ooni.org/reports/). We will also
continue to engage communities through OONI workshops and
training.

Our above priorities for 2022 have been informed by community feedback collected
over the years (as well as in response to the dynamic censorship environment
worldwide). If there are additional areas that you think we should prioritize,
please don’t hesitate to [let us know](https://ooni.org/about/#contact). 

If you would like to support our work, please consider **[donating to OONI](https://ooni.org/donate/)**.

Warm thanks to the global OONI community for supporting our work
throughout 2021!

We are grateful to every [OONI Probe](https://ooni.org/install/) user
out there, and we’re excited for 2022. Stay tuned! And above all, stay
safe.
