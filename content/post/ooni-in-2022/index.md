---
title: "Year in Review: OONI in 2022"
description: "An overview of OONI highlights from 2022, as well as upcoming OONI projects for 2023."
author: "Maria Xynou"
date: "2022-12-23"
tags: ["ooni", "2022", "year-in-review"]
categories: ["blog"]
---

As the end of 2022 approaches, we publish this post to share some OONI
highlights from the last year. We also share some of the things we’ll be
working on in 2023!

* [OONI Team](#ooni-team)

* [OONI Probe](#ooni-probe)

    * [New OONI Probe experiments](#new-ooni-probe-experiments)

    * [New Test Lists Editor](#new-test-lists-editor)

    * [OONI Run improvements](#ooni-run-improvements)

    * [OONI Probe Web prototype](#ooni-probe-web-prototype)

* [OONI data](#ooni-data)

    * [1 billion measurements](#1-billion-measurements)

    * [New OONI Measurement Aggregation Toolkit (MAT)](#new-ooni-measurement-aggregation-toolkit-mat)

    * [New Circumvention Tool Reachability Dashboard](#new-circumvention-tool-reachability-dashboard)

    * [Advancing OONI data analysis](#advancing-ooni-data-analysis)

* [Research](#research)

* [Community](#community)

    * [New online OONI training course](#new-online-ooni-training-course)

    * [New community resources](#new-community-resources)

    * [Localization](#localization)

    * [OONI's 10th Anniversary](#oonis-10th-anniversary)

    * [OONI workshops and presentations](#ooni-workshops-and-presentations)

* [OONI-verse](#ooni-verse)

* [2023](#2023)

# OONI Team

{{<img src="images/01.png">}}

2022 was an exciting year for the [OONI team](https://ooni.org/about/#team), as we hired 5 new people!

During this year, we had the opportunity to welcome:

* **Norbel Ambanumben**: OONI Mobile Developer

* **Maja Komel**: OONI Frontend Engineer

* **Roberta Giassetti**: OONI Finance and Administration Advisor

* **Elizaveta Yachmeneva**: OONI Community Coordinator

* **Kathrin Elmenhorst**: OONI Research Engineer

We are excited to have grown and diversified our team, improving our
capacity to support the internet freedom community in investigating
internet censorship over the next years.

In 2022, we had the opportunity to serve as the host organization for
three **OTF Information Controls Research Fellows**: [Ain Ghazal](https://www.opentech.fund/about/people/ain-ghazal/),
[Gurshabad Grover](https://www.opentech.fund/about/people/gurshabad-grover/), and
[Kathrin Elmenhorst](https://www.opentech.fund/about/people/kathrin-elmenhorst/).
Throughout their 1-year research fellowships with OONI, Ain designed
methods for measuring VPN blocking, while Gurshabad studied the legal
and technical infrastructure of censorship in Asia. During her 3-month
research fellowship with OONI, Kathrin investigated HTTP/3 censorship
and published a [blog post](https://ooni.org/post/2022-quick-look-quic-censorship/) sharing
her findings.

During the summer of 2022, we also had the opportunity to host two
**Google Summer of Code (GSoC) students**: Germa Vinsmoke and Mehul
Gulati. Germa worked on [OONI Explorer and Design System improvements](https://summerofcode.withgoogle.com/programs/2022/projects/EMOQ4Zai),
while Mehul worked on [OONI Probe network experiments](https://summerofcode.withgoogle.com/programs/2022/projects/GAEEQk5w).

In early November 2022, we hosted the first **in-person OONI Team
Meeting** (in Rome, Italy) since the start of the COVID-19 pandemic.
During this 3-day meeting, we improved our roadmaps and discussed
strategic priorities and implementation details for many new systems
we’ll be building over the next few years.

# OONI Probe

## New OONI Probe experiments

{{<img src="images/02.png">}}

In 2022, we shipped the following new experiments:

* [Tor Snowflake](https://ooni.org/nettest/tor-snowflake/)

* [Vanilla Tor](https://ooni.org/nettest/vanilla-tor/)

* [DNS Check](https://github.com/ooni/spec/blob/master/nettests/ts-028-dnscheck.md)

You can run these experiments through the [OONI Probe](https://ooni.org/install) apps. The [Tor Snowflake](https://ooni.org/nettest/tor-snowflake/) experiment provides
an automated way of measuring whether the [Tor Snowflake pluggable transport](https://snowflake.torproject.org/) works on a tested
network, while the [Vanilla Tor](https://ooni.org/nettest/vanilla-tor/) experiment measures the
reachability of the [Tor network](https://www.torproject.org/). Our
[DNS Check](https://github.com/ooni/spec/blob/master/nettests/ts-028-dnscheck.md)
experiment measures the reachability of encrypted DNS (DoH/DoT)
services, and has been used to support [research on DoH/DoT blocking](https://ooni.org/post/2022-doh-dot-paper-dnsprivacy21/) in
Kazakhstan, Iran, and China.

We also designed several other experiments (including [DNS Ping](https://github.com/ooni/spec/blob/master/nettests/ts-035-dnsping.md),
[TCP Ping](https://github.com/ooni/spec/blob/master/nettests/ts-032-tcpping.md),
[TLS Ping](https://github.com/ooni/spec/blob/master/nettests/ts-033-tlsping.md),
and [simple QUIC Ping](https://github.com/ooni/spec/blob/master/nettests/ts-034-simplequicping.md))
and we made numerous, significant [data quality improvements](https://github.com/ooni/probe/issues?q=is%3Aissue+is%3Aclosed+label%3A%22data+quality%22).

Notably, we designed [new methods](https://github.com/bassosimone/websteps-illustrated/) to
improve how we measure website blocking. Our new methods enumerate all
forms of website blocking, including support for HTTP/3, enabling the
collection of richer data. We aim to incrementally ship these new
methods as part of our [Web Connectivity](https://ooni.org/nettest/web-connectivity/) experiment
over the next year.

## New Test Lists Editor

{{<img src="images/03.png">}}

In July 2022, we
[launched](https://ooni.org/post/2022-test-lists-editor/) a new [Test Lists Editor](https://test-lists.ooni.org/)! This platform enables the
public to **review and contribute to the lists of websites** (“[test lists](https://ooni.org/get-involved/contribute-test-lists)”) that are
tested for censorship by [OONI Probe](https://ooni.org/install/) users
around the world.

Through this [web platform](https://test-lists.ooni.org/), community
members can add websites for [OONI Probe](https://ooni.org/install)
testing, edit existing entries (for example, to change a website’s
categorization or to update a URL), or propose the deletion of URLs. By
enabling community members to dynamically contribute to and update the
[test lists](https://ooni.org/support/faq#what-are-test-lists), we aim
to improve the quality of website censorship testing, supporting rapid
response efforts to emergent censorship events.

## OONI Run improvements

{{<img src="images/04.png">}}

Based on [community feedback](https://ooni.org/post/2020-06-09-ooni-run-usability-study-findings/),
we made a series of improvements to [OONI Run](https://run.ooni.io/):
a platform that you can use to generate mobile deep links and widget
code to coordinate [OONI Probe](https://ooni.org/install) testing. We
limited the [OONI Run](https://run.ooni.io/) platform to website
testing and we made improvements to the user interface.

To meet the needs of researchers performing custom testing, we designed
and [implemented a minimal version of the next generation version](https://github.com/ooni/probe-cli/pull/844) of OONI Run
(“[OONI Run v2](https://github.com/ooni/spec/pull/249)”) that enables
community members to run OONI Run links without backend support. We made
this [functionality](https://github.com/ooni/probe/issues/2184)
available to
[miniooni](https://github.com/ooni/probe-engine/tree/master/cmd/miniooni)
users with the goal of enabling community members to start experimenting
with this new OONI Run version and collect feedback that can support
further development and design decisions. We also [introduced a command line flag](https://github.com/ooni/probe-cli/pull/819) which enables
users to repeat a measurement every given number of seconds.

We aim to continue to make improvements to OONI Run over the next year
to further address [community feedback](https://ooni.org/post/2020-06-09-ooni-run-usability-study-findings/).

## OONI Probe Web prototype

{{<img src="images/05.png">}}

In response to community requests, we built a browser-based version of
OONI Probe (“OONI Probe Web”). Given that OONI Probe Web does not
require the installation of software and can be run from a web browser,
we hope that it can help support rapid response efforts.

We plan to launch OONI Probe Web in 2023. Stay tuned!

# OONI data

## 1 billion measurements

{{<img src="images/06.png">}}

On 6th October 2022, OONI published the 1 billionth measurement!

Since 2012, the OONI community has contributed [more than 1 billion measurements](https://explorer.ooni.org/) from 25 thousand networks in
241 countries and territories. All such measurements are published as
[open data](https://ooni.org/data) in real-time, shedding light on
[censorship events](https://ooni.org/reports/) worldwide.

In 2022, we completed the
[migration](https://github.com/ooni/pipeline/pulls?q=is%3Apr+clickhouse+is%3Aclosed)
of our infrastructure to the [ClickHouse](https://clickhouse.com/)
database, which enables the real-time processing and publication of OONI
Probe measurements collected from around the world.

## New OONI Measurement Aggregation Toolkit (MAT)

{{<img src="images/07.png">}}

In April 2022, we [launched](https://ooni.org/post/2022-ooni-mat/) the
OONI [Measurement Aggregation Toolkit (MAT)](https://explorer.ooni.org/chart/mat)! This tool enables you to
**track internet censorship worldwide in real-time and create charts**
based on aggregate views of OONI data.

Through the [MAT](https://explorer.ooni.org/chart/mat), you can plot
charts to compare censorship between
[countries](https://explorer.ooni.org/chart/mat?test_name=whatsapp&since=2022-10-26&until=2022-11-26&axis_x=measurement_start_day&axis_y=probe_cc)
and
[networks](https://explorer.ooni.org/chart/mat?test_name=whatsapp&since=2022-10-26&until=2022-11-26&axis_x=measurement_start_day&axis_y=probe_asn),
you can check the [blocking of websites](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&since=2022-10-26&until=2022-11-26&axis_x=measurement_start_day&axis_y=probe_cc)
and apps globally or in specific countries, and you can check which
[categories of websites](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&since=2022-10-26&until=2022-11-26&axis_x=measurement_start_day&axis_y=category_code)
(e.g. news media, LGBTIQ, environmental, human rights) are blocked in
each country.

Earlier this year, for example, the MAT
[showed](https://explorer.ooni.org/chart/mat?probe_cc=IR&test_name=web_connectivity&domain=www.instagram.com&since=2022-08-25&until=2022-09-25&axis_x=measurement_start_day)
that Iran started blocking Instagram on 21st September 2022, during the
ongoing protests.

{{<img src="images/08.png">}}

Over the past year, the MAT has enabled OONI and other internet freedom
community members to monitor and rapidly respond to many other
censorship events. Examples include the blocking of
[Twitter](https://explorer.ooni.org/experimental/mat?probe_cc=LK&test_name=web_connectivity&domain=twitter.com&since=2022-03-06&until=2022-04-06&axis_x=measurement_start_day),
[Facebook](https://explorer.ooni.org/experimental/mat?probe_cc=LK&test_name=web_connectivity&domain=www.facebook.com&since=2022-03-06&until=2022-04-06&axis_x=measurement_start_day),
[Instagram](https://explorer.ooni.org/experimental/mat?probe_cc=LK&test_name=web_connectivity&domain=www.instagram.com&since=2022-03-06&until=2022-04-06&axis_x=measurement_start_day),
[Facebook Messenger](https://explorer.ooni.org/experimental/mat?probe_cc=LK&test_name=facebook_messenger&since=2022-03-06&until=2022-04-06&axis_x=measurement_start_day),
[Telegram](https://explorer.ooni.org/experimental/mat?probe_cc=LK&test_name=telegram&since=2022-03-06&until=2022-04-06&axis_x=measurement_start_day),
[WhatsApp](https://explorer.ooni.org/experimental/mat?probe_cc=LK&test_name=whatsapp&since=2022-03-06&until=2022-04-06&axis_x=measurement_start_day)
in Sri Lanka (April 2022), as well as the blocking of
[PayPal](https://explorer.ooni.org/chart/mat?probe_cc=ID&test_name=web_connectivity&domain=www.paypal.com&since=2022-04-02&until=2022-08-02&axis_x=measurement_start_day),
[Yahoo](https://explorer.ooni.org/chart/mat?probe_cc=ID&test_name=web_connectivity&domain=yahoo.com&since=2022-04-02&until=2022-08-02&axis_x=measurement_start_day),
[Steam](https://explorer.ooni.org/chart/mat?probe_cc=ID&test_name=web_connectivity&domain=store.steampowered.com&since=2022-04-02&until=2022-08-02&axis_x=measurement_start_day),
[Origin](https://explorer.ooni.org/chart/mat?probe_cc=ID&test_name=web_connectivity&domain=origin.com&since=2022-04-02&until=2022-08-02&axis_x=measurement_start_day),
[Epic Games](https://explorer.ooni.org/chart/mat?probe_cc=ID&test_name=web_connectivity&domain=epicgames.com&since=2022-04-02&until=2022-08-02&axis_x=measurement_start_day),
and
[Dota2](https://explorer.ooni.org/chart/mat?probe_cc=ID&test_name=web_connectivity&domain=www.dota2.com&since=2022-04-02&until=2022-08-02&axis_x=measurement_start_day)
in Indonesia (July 2022).

## New Circumvention Tool Reachability Dashboard

{{<img src="images/09.png">}}

In 2022, we launched a new [Circumvention Tool Reachability Dashboard](https://explorer.ooni.org/chart/circumvention)! This tool
provides charts with aggregate views of real-time OONI data from the
reachability testing of [Psiphon](https://ooni.org/nettest/psiphon/),
[Tor](https://ooni.org/nettest/tor/), and [Tor Snowflake](https://ooni.org/nettest/tor-snowflake/). Through this
platform, you can easily discover whether these circumvention tools work
around the world, or whether they’re presenting signs of potential
blocking.

## Advancing OONI data analysis

In 2022, we created a [new data analysis tool](https://github.com/ooni/data) for exposing anomaly details of
website measurements and characterizing website blocking. Some of the
building blocks for designing this tool were applied in practice as part
of our investigation into [emergent website blocks in Russia](https://ooni.org/post/2022-russia-blocks-amid-ru-ua-conflict/),
where we were able to [characterize the blocking methods across ISPs](https://ooni.org/post/2022-russia-blocks-amid-ru-ua-conflict/#blocked-website-about-captured-and-killed-russian-soldiers).

The [high level architecture](https://github.com/ooni/data#architecture-overview) of
this new data analysis tool is that of transforming the raw network
measurements coming from OONI Probes into normalized and post-processed
“[Observations](https://github.com/ooni/data#observation-generation)”.
These Observations are “time stamped” statements about some network
condition that was observed by a particular vantage point. These
observations are then in turn post-processed to generate what we call an
“[Experiment result](https://github.com/ooni/data#experimentresult-generation)”,
which attributes to a set of observations from an individual test run a
series of outcomes with an associated level of confidence.

In order to reach a design that would be flexible enough to be expanded,
but also performant enough to run in a reasonable amount of time, we
[implemented](https://github.com/ooni/data/pull/2)
[several](https://github.com/ooni/data/pull/3) prototype
[iterations](https://github.com/ooni/data/pull/1) of this
[design](https://github.com/ooni/data/pull/15). Throughout the process
we [carried out benchmarks](https://github.com/ooni/data/issues/4) of
key components to identify any performance bottlenecks, working to
resolve them. The [last iteration](https://github.com/ooni/data/pull/17), based on some
[cursory benchmarks](https://github.com/ooni/data/pull/17#issue-1452100512),
should be able to generate observations from raw OONI measurements in
less than a week and re-generate all experiment results in about a day,
running on a single machine.

Through this [data analysis tool](https://github.com/ooni/data) (which
anyone can [run on their own computer](https://github.com/ooni/data#developer-setup) pointing it at
the [raw public OONI dataset](https://ooni.org/data)), it’s possible
to gain a much deeper understanding about the root cause of a blocking
event, and to carry out more advanced research that might not be
captured by the existing analysis.

The new design is an important shift in how we view results from OONI
measurements and we are confident that it will allow us to characterize
blocks in a much richer way. It also opens the door for empowering
researchers to carry out more advanced censorship investigations using
our datasets.

# Research

In 2022, we published the following research reports based on the
analysis of OONI data:

* [Technical multi-stakeholder report on Internet shutdowns: The case of Iran amid autumn 2022 protests](https://ooni.org/post/2022-iran-technical-multistakeholder-report/)

* [Iran blocks social media, app stores and encrypted DNS amid Mahsa Amini protests](https://ooni.org/post/2022-iran-blocks-social-media-mahsa-amini-protests/)

* [Azerbaijan and Armenia block TikTok amid border clashes](https://ooni.org/post/2022-azerbaijan-and-armenia-blocks-tiktok/)

* [New blocks emerge in Russia amid war in Ukraine: An OONI network measurement analysis](https://ooni.org/post/2022-russia-blocks-amid-ru-ua-conflict/)

We also published the following blog posts to share our findings from
research papers:

* [Measuring DoT/DoH Blocking Using OONI Probe: A Preliminary Study](https://ooni.org/post/2022-doh-dot-paper-dnsprivacy21/)

* [Measuring Encrypted-DNS Censorship Using OONI Probe](https://labs.ripe.net/author/bassosimone/measuring-encrypted-dns-censorship-using-ooni-probe/) (published by RIPE Labs)

* [Measuring HTTP/3 censorship with OONI Probe](https://ooni.org/post/2022-http3-measurements-paper/)

In response to the [UN High Commissioner for Human Rights’s call for submissions](https://www.ohchr.org/en/calls-for-input/calls-input/call-comments-report-internet-shutdowns-and-human-rights-fiftieth)
in support of the [OHCHR report on internet shutdowns and human rights](https://www.ohchr.org/en/hr-bodies/hrc/regular-sessions/session50/list-reports)
to the 50th session of the Human Rights Council in June 2022, we
provided a
[submission](https://ooni.org/documents/2022-ooni-submission-ohchr-report-internet-shutdowns.pdf)
with relevant information on the occurrence of mandated disruptions of
access to social media and messaging platforms over the past 5 years
based on empirical OONI network measurement data.

Through our
[submission](https://ooni.org/documents/2022-ooni-submission-ohchr-report-internet-shutdowns.pdf),
we shared OONI data and information on social media blocks that occurred
during elections in
[Uganda](https://ooni.org/post/2021-uganda-general-election-blocks-and-outage/),
[Tanzania](https://ooni.org/post/2020-tanzania-blocks-social-media-tor-election-day/),
[Mali](https://ooni.org/post/mali-disruptions-amid-2018-election/),
[Benin](https://ooni.org/post/2019-benin-social-media-blocking/),
[Togo](https://ooni.org/post/2020-togo-blocks-instant-messaging-apps/),
[Burundi](https://ooni.org/post/2020-burundi-blocks-social-media-amid-election/),
and
[Zambia](https://ooni.org/post/2021-zambia-social-media-blocks-amid-elections/)
over the last 5 years. We also shared information on social media blocks
that occurred during protests in
[Pakistan](https://ooni.org/post/how-pakistan-blocked-social-media/),
[Jordan](https://ooni.org/post/jordan-measuring-facebook-interference/),
[Iran](https://ooni.org/post/2018-iran-protests/),
[Zimbabwe](https://ooni.org/post/zimbabwe-protests-social-media-blocking-2019/),
and
[Cuba](https://ooni.org/post/2021-how-signal-private-messenger-blocked-around-the-world/#cuba).
Moreover, we shared OONI data and information on social media blocks
that emerged during sensitive political time periods in
[Ethiopia](https://ooni.org/post/ethiopia-report/),
[Myanmar](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/),
and
[Venezuela](https://ooni.org/post/venezuela-blocking-wikipedia-and-social-media-2019/).

# Community

## New online OONI training course

{{<img src="images/10.png">}}

To support OONI community engagement efforts worldwide, we created an
online OONI training course which was [launched on Small Media’s Advocacy Assembly platform](https://ooni.org/post/2022-ooni-training-course-advocacy-assembly/).

This 90-minute free, [online training course](https://advocacyassembly.org/en/courses/63/#/chapter/1/lesson/1)
provides a deep-dive into measuring internet censorship with [OONI Probe](https://ooni.org/install), and using [OONI Explorer](https://explorer.ooni.org/) to access and interpret real-time
OONI data collected from around the world. Designed for human rights
defenders, activists, journalists, and researchers, the course includes
a mix of **videos, screencasts, slides, quizzes and hands-on
exercises**. It also features case study videos from OONI community
members, and the course is available in
[English](https://advocacyassembly.org/en/courses/63/#/chapter/1/lesson/1),
[Arabic](https://advocacyassembly.org/ar/courses/63/#/chapter/1/lesson/1),
[Spanish](https://advocacyassembly.org/es/courses/63/#/chapter/1/lesson/1),
and
[Farsi](https://advocacyassembly.org/fa/courses/63/#/chapter/1/lesson/1).

## New community resources

In 2022, we created several new resources to support OONI community
engagement efforts around the world.

We published **new screencasts** for:

* [OONI Probe Desktop](https://www.youtube.com/watch?v=tLDVpyHFsW0)

* [Test Lists Editor](https://www.youtube.com/watch?v=6i2OVHUQEpE)

* [OONI Explorer](https://www.youtube.com/watch?v=6Rce-xshLac)

We published **new user guides and documentation** for:

* [User Guide: Test Lists Editor](https://ooni.org/support/test-lists-editor)

* [Guide: Updating the test lists on GitHub](https://ooni.org/support/github-test-lists)

* [User Guide: OONI Run](https://ooni.org/support/ooni-run/)

* [Tutorial: Analyzing OONI data](https://ooni.org/notebooks/tutorial-russia-data-analysis-case-study.html)
(using Russia as a case study)

We also updated the user guides for [OONI Probe Mobile](https://ooni.org/support/ooni-probe-mobile), [OONI Probe Desktop](https://ooni.org/support/ooni-probe-desktop), and [OONI Probe CLI](https://ooni.org/support/ooni-probe-cli), and we updated our
general [test list documentation](https://ooni.org/get-involved/contribute-test-lists).

To better meet community needs (particularly around OONI community
engagement), we created educational materials and resources for a new
**OONI Outreach Kit**. We plan to publish this Outreach Kit in 2023.

To help ensure a safe and inclusive environment for the global OONI
community, we created a [new Incident Response Committee](https://ooni.org/get-involved/code-of-conduct/#where-to-go-for-help)
with the goal of improving OONI’s Code of Conduct (CoC) and addressing
any CoC violations when they occur. In collaboration with the Committee
and based on community feedback collected from several meetings, we
re-wrote and published a new version of **[OONI’s Code of Conduct (CoC)](https://ooni.org/get-involved/code-of-conduct/)**.

## Localization

{{<img src="images/11.png">}}

Thanks to the [Localization Lab](https://www.localizationlab.org/)
community, [OONI Probe](https://ooni.org/install) has been
[translated to numerous languages](https://explore.transifex.com/otf/ooniprobe/), including
Farsi, Arabic, Chinese, Russian, Hindi, Thai, Indonesian, Swahili,
Spanish, and French – among many other languages. Throughout 2022, the
community continued to improve upon [OONI Probe translations](https://explore.transifex.com/otf/ooniprobe/), updating
47 languages. We updated our [OONI Probe localization guidelines](https://github.com/ooni/translations/blob/master/Guidelines%20for%20OONI%20Probe.md)
to support translation efforts.

In 2022, [OONI Explorer](https://explorer.ooni.org/) copy was uploaded
to [Transifex](https://explore.transifex.com/otf/ooni-explorer/) to
enable its translation by the [Localization Lab](https://www.localizationlab.org/) community, who worked towards
translating the platform in 21 languages. OONI Explorer has already been
[translated](https://explore.transifex.com/otf/ooni-explorer/) to
Farsi, Turkish, Russian, Burmese, Spanish, and Chinese, among other
languages. To support translation efforts, we published [new OONI Explorer localization guidelines](https://github.com/ooni/translations/blob/master/Guidelines%20for%20OONI%20Explorer.md).

We also uploaded the [OONI Probe Mobile](https://www.transifex.com/otf/ooni-probe-mobile-user-guide/)
and [OONI Probe Desktop](https://www.transifex.com/otf/ooni-probe-desktop-user-guide/)
user guides to Transifex, both of which have already been fully
translated to [Farsi](https://ooni.org/fa/support/ooni-probe-mobile)
and [Russian](https://ooni.org/ru/support/ooni-probe-mobile).

We thank the [Localization Lab](https://www.localizationlab.org/) for
bringing OONI censorship measurement to communities worldwide!

## OONI’s 10th Anniversary

{{<img src="images/12.png">}}

On 5th December 2022, we celebrated OONI’s 10th Anniversary!

Ten years ago, on 5th December 2012, we published the first OONI
measurement. Thanks to our global community, we have now published
[more than a billion measurements](https://explorer.ooni.org/)
collected from 25 thousand networks in 241 countries and territories,
shedding light on internet censorship around the world.

As the OONI community has always been at the heart of our work, we
consider it essential that community needs continue to inform OONI’s
future goals and priorities. We therefore circulated a
[survey](https://ooni.org/post/2022-survey-ooni-strategic-priorities/)
to collect community feedback that can help shape OONI’s strategic
priorities for the future. We thank all community members for their
valuable feedback!

In celebration of OONI’s 10th anniversary, we hosted [two live-streamed events](https://ooni.org/post/10th-ooniversary-events/):

* **[10th Ooniversary: OONI Highlights](https://www.youtube.com/watch?v=f4D4gq9TBMg)** (5th
December 2022): Presentation of OONI’s history, highlights from
the past 10 years, and our plans for the future.

* **[10th Ooniversary: OONI Community](https://www.youtube.com/watch?v=Co_f8KPBIZM)** (6th
December 2022): Presentations by [5 OONI community members](https://ooni.org/post/10th-ooniversary-events/#10th-ooniversary-ooni-community),
discussing how they have used OONI tools and data as part of their
research and advocacy efforts.

To mark the 10-year milestone, we also published:

* **[Animation](https://www.youtube.com/watch?v=AjpfF2kQ9jA)**: 10
Years of OONI, an animated timeline.

* **[OONI Community Video](https://www.youtube.com/watch?v=zrclQ2QZjVo)**: Featuring
[11 OONI community members](https://ooni.org/post/ooni-community-video/), discussing
how OONI has been useful to their work, and what they’d like to
see OONI do in the future.

* “**[Highlights: 10 Years of OONI](https://ooni.org/post/highlights-10-years-of-ooni/)**”: A
blog post sharing key OONI highlights from the past 10 years, as
well as our future plans.

Huge thanks to everyone who has supported OONI over the past decade!

## OONI workshops and presentations

In 2022, we attended our first *in-person* conferences and events since
the start of the COVID-19 pandemic. Most of the conferences, workshops,
and events that we attended though were hosted entirely online.

Throughout 2022, we presented OONI as part of the following conferences,
events, and workshops:

* **OONI workshop for journalists in Kyrgyzstan.** On 20th December
2022, we facilitated an online OONI workshop for journalists in
Kyrgyzstan.

* **Internet Governance Forum (IGF) 2022.** On 1st December 2022, we
presented OONI on the [panel](https://intgovforum.org/en/content/igf-2022-town-hall-54-help-the-kill-switch-is-taking-away-my-limited-agency)
“Help! The Kill switch is taking away my limited agency” (remote
participation) at the Internet Governance Forum (IGF) 2022.

* **OONI workshops in Kyrgyzstan.** In November 2022, we traveled to
Kyrgyzstan to facilitate multiple in-person OONI workshops for
local journalists, students, and civil society organizations.

* **Internet Without Borders (Paris).** On 18th November 2022, we
traveled to Paris to [present OONI](https://internetborders.net/conference-agenda/) as part of
the Internet Without Borders conference. On 19th November 2022, we
facilitated an [OONI hackathon](https://internetborders.net/ooni-challenge/) as part
of the event.

* **DataFest 2022 (Tbilisi).** On 17th November 2022, we [presented OONI at DataFest 2022](https://www.datafest.ge/schedule) in
Tbilisi, where we explained how journalists can use OONI’s
[Measurement Aggregation Toolkit (MAT)](https://explorer.ooni.org/chart/mat) to investigate
internet censorship around the world. On 19th November 2022, we
facilitated an OONI datathon at DataFest 2022, where participants
worked on analyzing OONI data collected from Russia.

* **State of the Onion 2022.** During the Tor Project’s annual [State of the Onion 2022](https://blog.torproject.org/state-of-the-onion-2022/)
event, we [shared OONI highlights from 2022](https://www.youtube.com/watch?v=O-7k0PjnBbk), as well as
upcoming OONI projects for 2023.

* **OONI workshop for journalists in Central Asia.** On 10th November
2022, we facilitated an online OONI workshop for journalists in
Central Asia.

* **IETF 115 PEARG.** On 9th November 2022, we
[presented](https://youtu.be/NO3pw3_hees?t=3592) our strategies
for measuring the blocking and throttling of encrypted protocols
as part of the Privacy Enhancements and Assessments Research Group
(PEARG) meeting during IETF 115.

* **IETF 115 IAB Open.** On 8th November 2022, we
[presented](https://youtu.be/7_G6XVjlun8?t=1730) our censorship
measurements in Iran as part of the Internet Architecture Board
(IAB) open meeting during IETF 115.

* **OONI workshop for civil society in Kazakhstan.** On 3rd November
2022, we facilitated an online [OONI workshop](https://www.facebook.com/medianetkaz/posts/pfbid02nhnfrTotir9yaeZA3EJtG64oivV8rUrB7hs9yMDJoLFE152JkSh2ZDb4p2bX4puYl)
for civil society groups in Kazakhstan.

* **RIPE85.** On 27th October 2022, we presented our
[research](https://ooni.org/post/2022-doh-dot-paper-dnsprivacy21/)
on measuring the blocking of encrypted DNS services (and how this
experiment is now part of OONI Probe) at
[RIPE85](https://ripe85.ripe.net/).

* **FIFAfrica 2022.** Between 26th-29th September 2022, we traveled to
Lusaka, Zambia, to participate in the [Forum on Internet Freedom in Africa (FIFAfrica) 2022](https://cipesa.org/fifafrica/)
conference. As part of our participation, we [facilitated an OONI workshop](https://cipesa.org/fifafrica/agenda/) (“Investigating
Internet censorship in Africa through OONI tools and open data”) and co-facilitated a workshop with [Access Now](https://www.accessnow.org/) (“Strengthening Advocacy to Fight Internet Shutdowns in Africa”).

* **DEMHACK 2022.** On 24th and 25th September 2022, we organized an
[OONI hackathon](https://demhack.ru/tasks) as part of
Roskomsvoboda’s [DEMHACK 2022](https://demhack.ru/) hackathon in
Russia. We also provided a live demo on using OONI’s [Measurement Aggregation Toolkit](https://explorer.ooni.org/chart/mat),
encouraging participants to use the tool as a starting point for
further analyzing OONI data.

* **OONI training session for researchers in Egypt.** On 10th August
2022, we facilitated a 3-hour, online OONI training session for
researchers in Egypt. This workshop provided an introduction to
internet censorship, as well as to OONI tools and data for
measuring internet censorship.

* **OONI training session for election observers.** On 4th August
2022, we facilitated an online OONI training session for election
observers. This training introduced participants to [OONI Probe](https://ooni.org/install) and [OONI data](https://ooni.org/data/), particularly with the goal of monitoring emerging censorship events during elections around the
world.

* **OONI training session for journalists in Kenya.** On 28th July
2022, we facilitated an online OONI training session for
journalists in Kenya. The workshop involved introducing
participants to OONI tools and data for investigating internet
censorship in Kenya and around the world.

* **Deutsche Welle Global Media Forum 2022.** On 19th June 2022, we
traveled to Bonn, Germany, to attend Deutsche Welle’s (DW)
[Global Media Forum 2022](https://gmf-event.com/), where we
spoke on a panel discussion on documenting internet shutdowns.

* **Internet Without Borders (Berlin)**. On 17th June 2022, we
traveled to Berlin, Germany, to attend the [Internet Without Borders](https://internetborders.net/project/berlin/) conference
for the Russian diaspora. As part of our participation, we
presented OONI and facilitated a day-long OONI hackathon.

* **Internet Without Borders (Vilnius).** On 10th June 2022, we
traveled to Vilnius, Lithuania, to attend the [Internet Without Borders](https://internetborders.net/project/vilnius/) conference
for the Russian diaspora. As part of our participation, we
presented OONI, we facilitated a workshop on using OONI’s
[Measurement Aggregation Toolkit (MAT)](https://explorer.ooni.org/chart/mat) for investigating
internet censorship in Russia, and we facilitated a day-long OONI
hackathon.

* **RightsCon 2022.** As part of our participation at [RightsCon 2022](https://www.rightscon.org/), we co-facilitated/spoke at the
following sessions:

    * Workshop on "Building capacity to document and circumvent
    internet shutdowns" co-hosted with
    [SFLC.in](https://sflc.in/) and [Top10VPN](https://www.top10vpn.com/) (6th June 2022)

    * Community lab on "Monitoring internet censorship in South and
    Southeast Asia" co-hosted with [Sinar Project](https://sinarproject.org/) (7th June 2022)

    * Panel on "Internet splintering due to server-side blocking and
    embargo sanction", hosted by [Censored Planet](https://censoredplanet.org/) (8th June 2022)

    * Social hour on "A light in the dark: learning about internet
    shutdowns and the #KeepItOn campaign" co-hosted with
    organizations from the [#KeepItOn campaign](https://www.accessnow.org/keepiton/) (9th
    June 2022)

* **OONI training session for civil society groups in Zimbabwe,
Zambia, and South Africa.** On 1st June 2022, we facilitated an
online OONI training session for civil society groups from
Zimbabwe, Zambia, and South Africa. This was organized by our
partner, [Digital Society of Africa](https://ooni.org/partners/digital-society-of-africa/).

* **OONI presentation for journalists.** On 25th May 2022, we
presented OONI’s tools, methods, research, and dataset to a group
of journalists from Russia and Belarus.

* **OONI workshop for civil society groups in Latin America.** On 19th
May 2022, we facilitated a 2-hour online OONI workshop for civil
society groups in Latin America.

* **OONI data analysis lecture for Georgia Tech students.** On 12th
April 2022, we were invited by [IODA](https://ioda.inetintel.cc.gatech.edu/) to give an online
lecture to Georgia Tech computer science students on analyzing
OONI data to investigate internet censorship.

* **Mozilla Twitter Space on Network Outages.** On 5th April 2022, we
participated as a speaker on [Mozilla’s Twitter Space](https://twitter.com/mozilla/status/1511091238774190085)
discussion on network outages. We explained OONI’s methods and
discussed how [OONI previously analyzed Mozilla telemetry](https://ooni.org/post/2021-investigating-internet-shutdowns-mozilla-telemetry/)
to investigate internet shutdowns.

* **Spacemesh Meetup.** On 8th March 2022, we [presented OONI](https://vimeo.com/688867593) at a
[Spacemesh](https://spacemesh.io/blog/winning_together-raise-the-flag/#challenge-overview)
meetup.

* **OONI training for UN peacekeeping missions.** On 25th January
2022, we facilitated an OONI training (“OONI - Practical exercise
measuring Internet censorship”) for UN peacekeeping missions as
part of an [online course](https://www.confluxcenter.org/wp-content/uploads/2022/01/Virtual-Course-Catalogue-2022.pdf)
(“Technologies and Digital Tools for Peacekeeping and Political
Missions: Data, Research, Analysis, & Communication”) organized by
Conflux Center. As part of the training, we introduced
participants to OONI censorship measurement tools, provided a live
demo of using OONI Probe for measuring internet censorship, and
facilitated hands-on exercises for using OONI Probe based on
real-world scenarios.

* **OONI Probe workshop for partners in Southeast Asia.** On 28th
January 2022, we facilitated an OONI Probe workshop for [Sinar Project](https://sinarproject.org/) partners in Southeast Asia
participating in the iMap Regional Workshop.

# OONI-verse

2022 was a particularly challenging year for many community members in
countries like Ukraine, Russia, and Iran, and our hearts go out to them.

We thank the global OONI community for continuing to contribute [many measurements from most countries and territories](https://explorer.ooni.org/) around the world.

Some highlights of **OONI activities by our community** in 2022 include:

* **8 research reports on internet censorship in Southeast Asia.** Our
long-term partner, [Sinar Project](https://ooni.org/partners/sinar-project/), published [8 research reports](https://imap.sinarproject.org/reports/2022) in
collaboration with their [partners](https://imap.sinarproject.org/partners) in Southeast
Asia. Based on the analysis of OONI data, these research reports
investigate internet censorship in
[Malaysia](https://imap.sinarproject.org/reports/2022/imap-state-of-internet-censorship-country-report-2022-malaysia),
[Thailand](https://imap.sinarproject.org/reports/2022/imap-state-of-internet-censorship-country-report-2022-thailand),
[Myanmar](https://imap.sinarproject.org/reports/2022/imap-state-of-internet-censorship-country-report-2022-myanmar),
[Indonesia](https://imap.sinarproject.org/reports/2022/the-state-of-internet-censorship-in-indonesia-2022),
[Cambodia](https://imap.sinarproject.org/reports/2022/imap-state-of-internet-censorship-country-report-2022-cambodia),
[Vietnam](https://imap.sinarproject.org/reports/2022/imap-state-of-internet-censorship-country-report-2022-vietnam),
[Hong Kong](https://imap.sinarproject.org/reports/2022/imap-state-of-internet-censorship-country-report-2022-hong-kong),
and the [Philippines](https://imap.sinarproject.org/reports/2022/2022-philippines).

* **OONI workshop for election observers in Kazakhstan.** [Access Now](https://www.accessnow.org/) facilitated an OONI workshop for
election observers in Kazakhstan.

* **OONI censorship measurement campaign during Malaysia’s 2022
general elections.** Leading up to and during Malaysia’s 2022
elections, [Sinar Project](https://sinarproject.org/)
coordinated an [OONI Probe measurement campaign](https://sinarproject.org/digital-rights/measuring-and-detecting-network-interference/ge15)
to monitor potential censorship events.

* **Blog post on the blocking of a website that digitizes books in Mexico.** Global Voices published a [blog post](https://globalvoices.org/2022/11/30/mexican-collective-pirating-books-to-make-culture-accessible-is-blocked/)
documenting the blocking of a website run by a Mexican collective
that digitizes books as a political position. This post cites OONI
data on the block.

* **Freedom on the Net 2022 reports.** Freedom House published their annual [Freedom on the Net](https://freedomhouse.org/report/freedom-net/2022/countering-authoritarian-overhaul-internet)
country reports. OONI data was cited in (at least) the Freedom on
the Net reports for the following countries:
[Iran](https://freedomhouse.org/country/iran/freedom-net/2022),
[Myanmar](https://freedomhouse.org/country/myanmar/freedom-net/2022),
[Malaysia](https://freedomhouse.org/country/malaysia/freedom-net/2022),
[Cuba](https://freedomhouse.org/country/cuba/freedom-net/2022),
[Azerbaijan](https://freedomhouse.org/country/azerbaijan/freedom-net/2022),
[Colombia](https://freedomhouse.org/country/colombia/freedom-net/2022),
[Ethiopia](https://freedomhouse.org/country/ethiopia/freedom-net/2022),
[Italy](https://freedomhouse.org/country/italy/freedom-net/2022),
[Jordan](https://freedomhouse.org/country/jordan/freedom-net/2022),
[Kenya](https://freedomhouse.org/country/kenya/freedom-net/2022),
[Saudi Arabia](https://freedomhouse.org/country/saudi-arabia/freedom-net/2022),
[Tunisia](https://freedomhouse.org/country/tunisia/freedom-net/2022),
[UAE](https://freedomhouse.org/country/united-arab-emirates/freedom-net/2022),
[Uzbekistan](https://freedomhouse.org/country/uzbekistan/freedom-net/2022),
and [Zambia](https://freedomhouse.org/country/zambia/freedom-net/2022).

* **Ranking Digital Rights Research Lab.** Ranking Digital Rights
launched a new [Research Lab](https://rankingdigitalrights.org/research-lab/preparing-your-research/)
which discusses how researchers can make use of OONI tools and
data (among other resources).

* **The OPTIMA Internet Shutdowns Resource Library.** Internews
published the [OPTIMA Library](https://preparepreventresist.org/), a compilation of new
and existing resources, guides, and methodologies to assist
individuals and activists before, during, and after an Internet
shutdown. The library includes OONI resources.

* **Research report on the impact of internet shutdowns on women in
Uganda.** Sandra Aceng published a [research report](https://preparepreventresist.org/wp-content/uploads/2022/07/Impact-of-Shutdowns-on-Women-in-Uganda.pdf)
(as part of Internews’ [OPTIMA](https://preparepreventresist.org/) project) which
documents the impact of internet shutdowns on women in Uganda.
This study makes use of OONI data collected from Uganda around the
country’s 2021 elections.

* **Digital Defenders Partnership guide.** Digital Defenders
Partnership published a [guide](https://www.digitaldefenders.org/wp-content/uploads/2022/09/2207-ISG_final-es.pdf)
(in Spanish) describing how to document internet blockages and
circumvent internet censorship. This publication cites OONI and
describes OONI tools.

* **Access Now paper on taxonomy of internet shutdowns.** Access Now
published a [paper](https://www.accessnow.org/cms/assets/uploads/2022/06/A-taxonomy-of-internet-shutdowns-the-technologies-behind-network-interference.pdf)
providing a taxonomy of internet shutdowns, citing OONI data, OON
research reports, and the [OONI Glossary](https://ooni.org/support/glossary).

* **Report on the blocking of a NFT fundraising campaign website in
Malaysia.** Sinar Project published a
[report](https://sinarproject.org/digital-rights/measuring-and-detecting-network-interference/nft-fundraising-campaign-website-of-malaysian-artist-fahmi-reza-blocked)
on the blocking of a NFT fundraising campaign website (of graphics
designer and political activist Fahmi Reza), which makes use of
OONI Probe and OONI data.

* **Access Now’s 2021 Annual KeepItOn Report.** Access Now published
their [2021 Annual #KeepItOn campaign Report](https://www.accessnow.org/cms/assets/uploads/2022/04/2021-KeepItOn-Report-1.pdf)
(“The Return Of Digital Authoritarianism: Internet shutdowns in 2021”), which makes use of OONI data.

* **VEsinFiltro’s 2021 Annual Report.** Our Venezuelan partner,
VEsinFiltro, published their [2021 Annual Report on digital rights and internet censorship in Venezuela](https://vesinfiltro.com/noticias/2021_annual_report/). In the Methodology section of their report, VEsinFiltro describe
that they measured internet blocks in Venezuela through the use of
OONI Probe and OONI data.

* **ISOC blog posts on blocks in Russia.** As part of their
“[Internet Perspectives: Ukraine and Russia](https://pulse.internetsociety.org/blog/internet-perspectives-ukraine-and-russia)”
blog series, Internet Society (ISOC) published 2 blog posts based
on OONI data: “[OONI Data: Looking For Anomalies and Blocks](https://pulse.internetsociety.org/blog/internet-perspectives-ukraine-and-russia#OONI)”
and “[Top Categories for New Russian Internet blocks (OONI Anomalies)](https://pulse.internetsociety.org/blog/internet-perspectives-ukraine-and-russia#OoniAnomalies)”.

* **Article on network congestion and blocks in Iran.** Digiato (an
Iranian technology news portal) published an
[article](https://digiato.com/article/2022/02/23/why-iran-internet-is-congested)
discussing network congestion in Iran, where Iranian experts
discuss intermittent blocks in the country, citing OONI data. The
article also features a screenshot of a chart generated from
OONI’s Measurement Aggregation Toolkit (to demonstrate the
intermittent blocks).

* **OONI workshop in Tanzania by Zaina Foundation.** On 28th February
2022, our partner, [Zaina Foundation](https://ooni.org/partners/zaina-foundation),
facilitated an [OONI workshop](https://twitter.com/ZainaFoundation/status/1498330087258742789)
as part of their broader Digital Security Training for women
journalists in Dar es Salaam, Tanzania.

* **OONI FAQ translated to Khmer by DigitalHub101.** Cambodian civil
society group, DigitalHub101, published a version of the [OONI Frequently Asked Questions (FAQ)](https://ooni.org/support/faq/)
documentation in [Khmer](https://digitalhub101.com/ooni/). This
[new page](https://digitalhub101.com/ooni/) features information
in Khmer about OONI, OONI Probe, OONI Explorer, and OONI research
reports.

* **Report on the blocking of news media websites in Venezuela.**
VEsinFiltro published a [report](https://vesinfiltro.com/noticias/2022-02-01-bloqueo-Noticias/)
documenting the blocking of news media websites in Venezuela.
Their report makes use of OONI data, as well as network
measurement data collected from their own custom tools.

* **Report on the blocking of circumvention tools in Venezuela.**
VEsinFiltro published a [report](https://vesinfiltro.com/noticias/2022-02-07-restriction-circumvention-tools/)
documenting the blocking of circumvention tools in Venezuela.
Their report makes use of OONI data, involving the analysis of
measurements collected from the OONI Probe [Tor](https://ooni.org/nettest/tor/) and [Web Connectivity](https://ooni.org/nettest/web-connectivity/)
experiments.

* **ECOWAS court ruling on internet shutdowns in Togo.** Togo’s
internet shutdown amid protests in September 2017 was challenged
in the “Amnesty International Togo and Ors v. The Togolese
Republic” [case](https://globalfreedomofexpression.columbia.edu/cases/amnesty-international-togo-and-ors-v-the-togolese-republic/)
that was brought to the Community Court of Justice of the Economic
Community of West African States (ECOWAS). In preparation for this
case, the OONI team was asked to share relevant technical
expertise, along with other experts. We analyzed the internet
shutdown and shared a [technical analysis](https://twitter.com/FrancoisPatuel/status/1494030238388563968)
in support of the court case. As an outcome, the Community Court
of Justice of ECOWAS held that the Togolese government violated
the applicants’ right to freedom of expression by shutting down
the internet during protests in September 2017, and ordered the
Respondent State of Togo to take measures to guarantee the
“non-occurrence” of a future similar situation. The ECOWAS court
ruling on the September 2017 internet shutdown in Togo won the
Columbia University [Global Freedom of Expression 2022 Significant Legal Ruling Award](https://globalfreedomofexpression.columbia.edu/prizewinners2022/).

We thank our community for their amazing efforts!

# 2023

{{<img src="images/13.png">}}

We have many exciting projects lined up for 2023!

Some highlights include:

* **Automating censorship detection and characterization based on OONI
measurements.** We will expand our ability to automatically
confirm blocks based on fingerprints, and we will develop new
metrics for the automatic characterization of more forms of
internet censorship. This will build upon our work on our [new data analysis tool](https://github.com/ooni/data).

* **New Social Media Censorship Alert System.** We are building a
system that the public can refer to in order to learn when and
where access to social media platforms is being blocked around the
world based on OONI data.

* **New Censorship Incident Reporting Platform.** This platform will
provide short reports with summary information on emergent
censorship events based on OONI data and charts, enabling
journalists and human rights defenders to more easily learn about
and respond to censorship events.

* **New OONI Explorer pages.** In 2023, we will publish new [OONI Explorer](https://explorer.ooni.org/) pages that provide
domain-centric and network-centric views of OONI data. We will
also continue to make a series of improvements to [OONI Explorer](https://explorer.ooni.org/) and the [Measurement Aggregation Toolkit (MAT)](https://explorer.ooni.org/chart/mat)
based on community feedback. Our goal is to enable the internet
freedom community to more easily discover censorship findings
based on OONI data.

* **New browser-based censorship measurement tool.** In 2022, we
created OONI Probe Web to simplify the process of testing websites
during urgent censorship events. We aim to publicly launch OONI
Probe Web in 2023.

* **New censorship measurement methodologies.** We will continue to
expand OONI’s censorship measurement methodologies. This will
include working towards creating an open methodology for measuring
throttling, and expanding OONI’s testing model to support richer
testing input. We also aim to ship our [new methods](https://github.com/bassosimone/websteps-illustrated/)
that advance how we measure website blocking.

* **Improved version of OONI Run.** We aim to release an improved
version of [OONI Run](https://run.ooni.io/) (“[OONI Run v2](https://github.com/ooni/spec/pull/249/files)”), addressing
key [community feedback and needs](https://ooni.org/post/2020-06-09-ooni-run-usability-study-findings/).
This will enable the internet freedom community to more
effectively coordinate censorship measurement campaigns and use
OONI data in support of their research and advocacy efforts.

* **New and strengthened partnerships.** Collaboration is key to
measuring and fighting internet censorship. In 2023, we aim to
strengthen our existing [partnerships](https://ooni.org/partners), and form new
partnerships with digital rights organizations around the world.

* **New OONI Outreach Kit.** To support OONI community engagement
efforts around the world, we aim to publish an OONI Outreach Kit
in 2023.

* **New community resources.** We aim to publish new documentation and
resources that can support OONI community engagement efforts
around the world. We also aim to publish translated versions of
our documents, and to strengthen our localization efforts.

* **More research reports, workshops, and training.** We will continue
to collaborate with community members on investigating censorship
events worldwide and documenting them through the publication of
[research reports](https://ooni.org/reports/). We will also
continue to engage communities through OONI workshops and training.

Our above priorities for 2023 have been informed by community feedback
collected over the years (as well as in response to the dynamic
censorship environment worldwide). If there are additional areas that
you think we should prioritize, please don’t hesitate to [let us know](https://ooni.org/about/#contact).

If you would like to support our work, please consider **[donating to OONI](https://ooni.org/donate/)**.

Warm thanks to the global OONI community for supporting our work
throughout 2022!

We are grateful to every [OONI Probe](https://ooni.org/install/) user
out there, and we’re excited for 2023. Stay tuned!
