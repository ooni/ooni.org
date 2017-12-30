---
title: "Year in Review: OONI in 2017"
author: "Maria Xynou"
date: "2017-12-30"
tags: ["ooni"]
categories: ["blog"]
---

As the end of 2017 approaches, we publish this blog to share some OONI
highlights from the last year. We also share some of the things we’ll be working
on in 2018!

* [OONI Probe mobile apps](#ooni-probe-mobile-apps)

* [Speed and performance tests](#speed-and-performance-tests)

* [OONI Run](#ooni-run)

* [OONI API](#ooni-api)

* [OONI Partner Gathering](#ooni-partner-gathering)

* [Research reports](#research-reports)

* [OONI in 2018](#ooni-in-2018)

# OONI Probe mobile apps

![OONI Probe mobile app](/post/ooni-2017/01.jpg)

In February 2017, measuring internet censorship with [OONI Probe](https://github.com/TheTorProject/ooni-probe) suddenly became
easier than ever before! With the [launch of the OONI Probe mobile apps](https://ooni.torproject.org/post/ooni-mobile-app/), hundreds
of thousands of people from around the world started testing their networks for
censorship. Thanks to their testing, millions of measurements have been
collected (and [published](https://explorer.ooni.torproject.org/world/)) from thousands of local vantage points in more than
200 countries, shedding light on numerous [cases of internet censorship](https://ooni.torproject.org/post/).

We consider the launch of the OONI Probe mobile apps an important landmark since
it opened up the possibility for anyone (regardless of their technical skills)
to join a global movement that monitors (and responds to) information controls
on the internet.

# Speed and performance tests

New tests were released along with the launch of the OONI Probe mobile apps:

* [Network Diagnostic Test (NDT)](https://ooni.torproject.org/nettest/ndt/): Measures network speed and performance 

* [Dynamic Adaptive Streaming over HTTP (DASH)](https://ooni.torproject.org/nettest/dash/): Measures video streaming performance

We’re excited about these tests because they can potentially help identify net
neutrality violations. We recently [joined forces](http://www.testyourinter.net/) with [Fight for the Future](https://www.fightforthefuture.org/) to
monitor potential net neutrality violations in the U.S. through the collection
and analysis of OONI Probe network measurements.

# OONI Run

![OONI Run](/post/ooni-2017/02.jpg)

We often hear of censorship events around the world, but measuring networks in
those countries may not always be easy or feasible. In 2017, global coordination
on censorship measurement research likely became a whole lot easier!

With the [launch of OONI Run](https://ooni.torproject.org/post/ooni-run/), you can engage others with censorship measurement
tests by simply sharing a [URL generated from the platform](https://run.ooni.io/). This URL can include
the [OONI Probe tests](https://ooni.torproject.org/nettest/) of your choice, as well as the sites that you’re interested
in testing for censorship. Anyone who clicks on this URL will be prompted to
install the OONI Probe mobile app to run the tests and test the sites you have
chosen.

![OONI Run Widget](/post/ooni-2017/03.jpg)

Interested in knowing whether *your* site is blocked? With [OONI Run](https://run.ooni.io/), you can also
monitor the accessibility of the sites you care about! We provide widget code
that you can embed to have your site tested by the global OONI Probe community.

We’re particularly excited about OONI Run because it can help support evidence-
based monitoring of global censorship events and rapid response by the internet
freedom community.

# OONI API

![OONI API](/post/ooni-2017/04.jpg)

Open data is at the heart of the OONI project. Following a year of re-
engineering and improving upon our [data processing pipeline](https://github.com/TheTorProject/ooni-pipeline), we recently
launched the [OONI API](https://api.ooni.io/).

Dynamically updated everyday with measurements collected from all across the
globe (and consisting of millions of measurements collected since 2012), the
[OONI API](https://api.ooni.io/) is probably the largest public database on internet censorship to date.

We publish all measurements we collect to:

* Increase transparency of internet censorship 

* Enable third parties to independently analyze OONI data and verify findings 

* Support reproducible research

We encourage data scientists and researchers to download and analyze OONI
measurements to uncover cases of network interference.

# OONI Partner Gathering

![OONI Partner Gathering](/post/ooni-2017/05.jpg)

Over the last year and a half, we have had the opportunity to establish
partnerships with digital rights organizations from around the world. In July
2017, we hosted the first [OONI Partner Gathering](https://ooni.torproject.org/post/ooni-partner-gathering-2017/).

This two-day event was held at the University of Toronto and brought together
our partners from Africa, Latin America, the Middle East, South Asia, and
Southeast Asia to share skills, knowledge, and findings on the study of internet
censorship.

# Research reports

In collaboration with our partners, we published the following research reports
based on the analysis of OONI network measurements:

* [The State of Internet Censorship in Thailand](https://ooni.torproject.org/post/thailand-internet-censorship/) 

* [The State of Internet Censorship in Myanmar](https://ooni.torproject.org/post/myanmar-report/) 

* [The State of Internet Censorship in Indonesia](https://ooni.torproject.org/post/indonesia-internet-censorship/) 

* [#EgyptCensors: Evidence of recent censorship events in Egypt](https://ooni.torproject.org/post/egypt-censors/)

* [Measuring Internet Censorship in Cuba’s ParkNets](https://ooni.torproject.org/post/cuba-internet-censorship-2017/) 

* [Internet Censorship in Iran: Findings from 2014-2017](https://ooni.torproject.org/post/iran-internet-censorship/) 

* [Evidence of Internet Censorship during Catalonia’s Independence Referendum](https://ooni.torproject.org/post/internet-censorship-catalonia-independence-referendum/) 

* [Internet Censorship in Pakistan: Findings from 2014-2017](https://ooni.torproject.org/post/pakistan-internet-censorship/) 

* [Identifying cases of DNS misconfiguration: Not quite censorship](https://ooni.torproject.org/post/not-quite-network-censorship/)

* [How Pakistan blocked news outlets, social media sites, and IM apps amidst protests](https://ooni.torproject.org/post/how-pakistan-blocked-social-media/) 

# OONI in 2018

Many of the things we worked on in 2017 were possible thanks to our passionate
community. We would therefore like to express our gratitude by sharing and
encouraging feedback for some of the upcoming things we’ll be working on in
2018. These include:

* **New OONI Probe desktop apps for Windows and macOS:** Our aim is to build [desktop apps](https://ooni.torproject.org/post/writing-a-modern-cross-platform-desktop-app/) that are as easy to install and use as popular software, enabling more communities to engage with censorship measurement research. 

* **Censorship Alert System:** We aim aim to disseminate timely alerts of emergent censorship events around the world through the analysis of OONI data.

* **Internet Blackout Monitoring methodology:** We’ll be creating a [methodology](https://ooni.torproject.org/post/examining-internet-blackouts/) for automatically detecting and examining internet blackouts (i.e. when the internet as a whole is rendered inaccessible), supporting [#KeepItOn](https://www.accessnow.org/keepiton/) and other advocacy efforts.

* **OONI Probe Orchestration System (OPOS):** Dynamically [instrumenting](https://github.com/TheTorProject/ooni-spec/blob/master/opos/OONI-Probe-Orchestration-System-Design.md) the collection of OONI Probe measurements from around the world, particularly in response to emergent censorship events. 

* **Revamped OONI Explorer:** We’ll be revamping [OONI Explorer](https://explorer.ooni.torproject.org/world/) to improve upon its design and usability, enable the export of CSV files, and to present the top censorship findings per country based on OONI data (which will automatically be updated on an ongoing basis). 

* **Revamped mobile apps:** We’ll be revamping the [OONI Probe mobile apps](https://ooni.torproject.org/install/) to improve upon their design and usability, and to include more tests.

* **Revamped OONI website:** We’ll also be revamping the [OONI website](https://ooni.torproject.org/) to improve upon its design and usability and to include more content pages.

* **Research reports:** We’re eager to form more partnerships with digital rights organizations around the world and to publish more research reports on internet censorship.

Happy new year, and stay tuned! 