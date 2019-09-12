---
title: "Next Generation OONI Explorer Launched!"
author: "Maria Xynou"
date: "2019-09-12"
tags: ["ooni-explorer", "launch"]
categories: ["blog"]
---

![Next Generation OONI Explorer](/post/2019-explorer-revamp/explorer-revamped.png)

Today the Open Observatory of Network Interference (OONI) team is
thrilled to announce the public launch of the revamped, **[next generation OONI Explorer](https://explorer.ooni.org/)**!

**OONI Explorer is an open data resource on internet censorship around
the world.** This new platform offers access to millions of censorship
measurements collected from 233 countries since 2012.

* [About OONI Explorer](#about-ooni-explorer)

    * [Why use OONI Explorer?](#why-use-ooni-explorer)

    * [Who is OONI Explorer for?](#who-is-ooni-explorer-for)

* [OONI Explorer 2.0](#ooni-explorer-2-0)

    * [Revamped country pages](#revamped-country-pages)

        * [Blocking of websites](#blocking-of-websites)

        * [Measurement coverage](#measurement-coverage)

        * [Comparison of networks](#comparison-of-networks)

    * [Search Tool](#search-tool)

        * [Confirmed blocked](#confirmed-blocked)

        * [Anomalies](#anomalies)

        * [ASN](#asn)

    * [Measurement pages](#measurement-pages)

    * [Censorship Highlights](#censorship-highlights)

* [Acknowledgements](#acknowledgements)

* [Credits](#credits)

# About OONI Explorer

## Why use OONI Explorer?

**OONI Explorer is likely the largest, publicly available network
measurement resource on internet censorship to date.** Thanks to [OONI Probe](https://ooni.io/install/) users around the world (who run
censorship measurement software every day), 280 million network
measurements have been collected from 18,000 networks in 233
countries since 2012. All of these measurements are openly available on
[OONI Explorer](https://explorer.ooni.org/).

**You can use OONI Explorer to uncover evidence of internet
censorship worldwide.** Every day, hundreds of thousands of new
measurements are published from around the world. OONI Explorer is an
*expanding public archive* on global internet censorship.

Some questions that you can answer via OONI Explorer include:

* **Blocking of websites.** Which [websites](https://ooni.io/nettest/web-connectivity/) are blocked and by which ISPs? How are websites blocked (i.e. which censorship techniques)? How does the blocking of websites differ across ISPs and over time?

* **Blocking of instant messaging apps.** Are [WhatsApp](https://ooni.io/nettest/whatsapp/), [Facebook Messenger](https://ooni.io/nettest/facebook-messenger/), and [Telegram](https://ooni.io/nettest/telegram/) blocked? If so, how? How does their blocking differ across networks and over time?

* **Blocking of circumvention tools.** Is [Tor](https://ooni.io/nettest/vanilla-tor/) blocked? If so, do [Tor bridges](https://ooni.io/nettest/tor-bridge-reachability/) work in that network?

* **Network speed and performance.** What is the [speed and performance](https://ooni.io/nettest/ndt/) of tested networks? How does it change over time and across networks?

* **Middleboxes.** Are there signs of network tampering on tested networks? Which [middleboxes](https://ooni.io/nettest/http-invalid-request-line/) (network devices) are used by ISPs? Are these middleboxes known to implement internet censorship and/or surveillance?

You can also use OONI Explorer to **independently verify our findings**
(published through our [research reports](https://ooni.io/post/)), and
to expand upon our research. Through open data, we aim to support
**reproducible research**.

## Who is OONI Explorer for?

OONI Explorer is our gift to all [OONI Probe](https://ooni.io/install/) users. But it is also for:

* **Human rights defenders.** Inform your advocacy efforts based on censorship events and trends identified around the world through OONI data.

* **Journalists.** Enhance the credibility of your stories by referencing network measurement data as evidence of censorship events. Discover unreported censorship stories through OONI data.

* **Lawyers.** Examine the legality of censorship events identified through OONI data. Consider using OONI data as evidence in court cases.

* **Researchers.** Explore your own research questions through OONI network measurement data.

* **Circumvention tool projects.** Inform the development of your tools and strategies based on information about censorship events around the world.

* **The public.** Keep your government and your Internet Service Providers (ISPs) to account.

# What’s new in OONI Explorer 2.0?

OONI Explorer was [originally launched in March 2016](https://blog.torproject.org/ooni-explorer-censorship-and-other-network-anomalies-around-world).
For the first time, OONI censorship measurements were openly published
in a web platform that enabled human rights defenders and social science
researchers without a technical background (i.e. having to parse JSON
files) to explore them and to independently discover cases of internet
censorship around the world. However, presenting technical data to the
general public - without reducing the data or creating the risk for
misinterpretation - has been a challenge, and the initial version of
OONI Explorer had many limitations.

Thanks to years of incredibly valuable community feedback, we are now
launching the next generation OONI Explorer. The new OONI Explorer
features a **major UI overhaul** with improved design and UX. The
**codebase was re-written entirely to react.js** (using next.js) to
enable code-sharing across different OONI software projects (and
therefore improve its maintainability), to be able to use the [OONI API](https://api.ooni.io/) directly, and to be able to iterate faster
and adapt to user needs (for example, the new OONI Explorer codebase
will enable us to add support for translations).

With OONI Explorer 2.0, **our goal is to improve the usability of the
platform and to support more advanced search functionalities in order to
simplify and enable the process of exploring measurements and
discovering censorship events**. We also aim to provide deeper insight
of internet censorship on a country level.

Below we share some highlights from OONI Explorer 2.0.

## Revamped country pages

![OONI Explorer country pages](/post/2019-explorer-revamp/country-pages.png)

The [OONI Explorer country pages](https://explorer.ooni.org/countries) have been completely revamped!
Previously, the main functionality of the OONI Explorer country pages
was the search tool for filtering individual measurements.

Now, with the new OONI Explorer country pages, you are provided an
**overview of internet censorship in each country**, as well as access
to measurements that enable you to explore each censorship case in more
depth. You are also presented with **detailed stats on measurement
coverage**, which you can explore based on different OONI Probe tests
and on all tested networks.

### Blocking of websites

At a glance, you can view **which websites were most recently blocked**
in each country via OONI Explorer.

![OONI Explorer: Blocked URLs](/post/2019-explorer-revamp/ir-blocked-urls.png)

[OONI Explorer country pages](https://explorer.ooni.org/countries) provide an overview of the most recently
blocked websites (when block pages are served), but you can also dig
deeper and explore the measurements pertaining to each tested URL (by
clicking on “Explore more measurements”). These results will
automatically get updated as new measurements are collected from [OONI Probe](https://ooni.io/install/) users in each country.

When you first visit an OONI Explorer country page, you will be
presented with results collected from networks that were tested the most
(and are therefore likely more reliable). By selecting the AS drop-down
menu in the top, left corner, you can filter the results to view
measurements collected from other tested networks. **This enables you to
compare the blocking of websites across different ISPs.**

You will also view a **timeline of the recent measurement coverage**
pertaining to each tested URL. **You can use these timelines to track
the blocking and unblocking of specific websites over time**. We also
share these timelines to enable users to evaluate results with more
confidence, particularly since confirming internet censorship can be
tricky, and false positives can emerge. If, for example, a website was
always accessible every time it was tested on a specific network and it
only presented an anomaly once in recent testing, it’s likely the case
that that anomaly was a false positive. If, on the other hand, a website
consistently presents anomalies every time that it is tested on the same
network, it’s likely the case that that ISP is blocking access to that
site.

In short, rather than looking at results individually, it’s best when
they are examined within a timeline and within a larger dataset - which
is what the new OONI Explorer country pages aim to enable.

### Measurement coverage

![Measurement coverage](/post/2019-explorer-revamp/measurement-coverage.png)

The new [OONI Explorer country pages](https://explorer.ooni.org/countries) share a greater amount of
granularity in terms of measurement coverage (in comparison to the old
OONI Explorer). Specifically:

* **Measurement coverage by test class.** You can view the volume of
measurements collected from each [OONI Probe test](https://ooni.io/nettest/) over the last month in
each country. The stats in the graph show how many websites have
been tested, how many (and which) OONI Probe tests have been run,
and how many networks have been tested. This information can be
useful in interpreting and evaluating measurements, and can help
inform relevant outreach strategies (for example, if instant
messaging apps haven’t been tested in a specific country, it may
be worth prioritizing [OONI Probe](https://ooni.io/install/)
community engagement for relevant tests in that country).

* **Measurement coverage per tested URL.** As discussed, you can view
how many times each tested URL has been measured across different 
networks within each country. This is helpful in tracking the
blocking and unblocking of websites, as well as in evaluating
measurements within a timeline and within a larger dataset.

* **Measurement coverage per OONI Probe Instant Messaging (IM) test.**
You can view the measurement coverage across networks based on
OONI Probe tests for WhatsApp, Facebook Messenger, and Telegram.
This enables the comparison of testing across networks and the
identification of networks which could benefit from more testing.

![IM measurement coverage](/post/2019-explorer-revamp/instant-messaging.png)

### Comparison of networks

As internet censorship can vary from network to network within each
country, one of our goals with the new OONI Explorer is to show this
variance and to enable the comparison of internet censorship (and other
forms of network interference) across networks. This can be useful in
supporting **censorship circumvention strategies**.

The new OONI Explorer country pages feature results from circumvention
tool tests (currently, measurements collected from the OONI Probe
[Vanilla Tor test](https://ooni.io/nettest/vanilla-tor/)), which you
can compare across all local networks from which tests were run.

![Vanilla Tor results](/post/2019-explorer-revamp/circumvention.png)

You can therefore, at a glance, check in which networks circumvention
software, like [Tor](https://www.torproject.org/), works - and in
which networks it’s blocked.

Thanks to support from the [Measurement Lab](https://www.measurementlab.net/), we were able to import analyzed
measurements from the [NDT](https://ooni.io/nettest/ndt/) and
[DASH](https://ooni.io/nettest/dash/) tests, which measure network
speed and performance, and video streaming performance respectively. The
new OONI Explorer now features the average upload, download, and ping
per network.

![Network speed and performance](/post/2019-explorer-revamp/networks.png)

This can be useful in evaluating and **comparing network speed and
performance across different ISPs** in each country.

## Search Tool

With the new OONI Explorer, you can now explore all measurements with a
[powerful search tool](https://explorer.ooni.org/search).

![Search Tool: OONI Explorer](/post/2019-explorer-revamp/search-tool.png)

The new OONI Explorer search tool features the following exciting
filters:

* Confirmed blocked

* Anomalies

* ASN

### Confirmed blocked

![Confirmed blocked: OONI Explorer](/post/2019-explorer-revamp/confirmed-blocked.png)

You can now quickly and easily view all the most recently tested
websites that have been confirmed blocked based on [OONI’s methodologies](https://ooni.io/nettest/web-connectivity/). By selecting
“Confirmed”, you can filter all measurements to view those where **block
pages are served for websites** around the world.

### Anomalies

![Anomalies: OONI Explorer](/post/2019-explorer-revamp/anomalies.png)

In many cases, ISPs don’t serve block pages, but block websites using
different (and more subtle) censorship techniques (such as DNS tampering
and IP blocking). Confirming those cases automatically can be tricky,
particularly since network anomalies can emerge due to transient network
failures and other reasons which may have nothing to do with intentional
blocking.

We have therefore added an “anomaly” filter in the new OONI Explorer
which enables you to explore measurements that presented anomalies. Many
of the anomalous measurements include evidence of internet censorship,
but others may contain false positives. We encourage you to use this new
filter to explore anomalous measurements in depth and to uncover cases
of internet censorship.

### ASN

![ASN: OONI Explorer](/post/2019-explorer-revamp/asn.png)

You can now filter measurements based on the [Autonomous System Number (ASN)](https://en.wikipedia.org/wiki/Autonomous_system_(Internet)) of
Internet Service Providers (ISPs). For example, if you’re interested in
searching measurements collected from Vodafone Italia, type AS30722
(which is the ASN of Vodafone Italia) in the ASN field and click “Filter
Results”. Usually, you can easily find the ASN of ISPs by googling the
ISP name and ASN (such as “Vodafone Italia ASN”).

This was probably one of the top feature requests we received from
researchers, since it allows for an easy/quick comparison of censorship
across ISPs.

## Measurement pages

![Measurement page: OONI Explorer](/post/2019-explorer-revamp/confirmed-blocked-measurement.png)

Similarly to the previous OONI Explorer, the new OONI Explorer features
measurement pages for every individual test. Through these pages, you
can gain an overview of the testing result (for example, whether and how
a tested website was blocked), as well as access to the raw network
measurement data (which can potentially serve as evidence of internet
censorship).

In addition to improved design (consolidated with the [new design of the OONI Probe mobile apps](https://ooni.io/post/revamped-ooni-probe-mobile-app/#major-ui-overhaul)),
the new measurement pages enable you to **download the raw measurement
data in JSON format**.

## Censorship Highlights

So what can you learn from OONI Explorer?

![Censorship Highlights](/post/2019-explorer-revamp/highlights.png)

Through the Highlights section on the landing page of the revamped OONI
Explorer, we share a few examples (based on OONI data) of:

* Censorship during political events

* Media censorship

* Blocking of LGBTQI sites

* Censorship changes around the world

For each case, we link to relevant [research reports based on OONI data](https://ooni.io/post/), as well as to Search pages on OONI
Explorer that provide pre-filtered measurements. This enables you to not
only learn more details about each censorship case through the published
research reports, but to also explore the raw data pertaining to each
censorship event.

Given that [OONI Explorer](https://explorer.ooni.io/) hosts millions
of measurements from thousands of networks from more than 200 countries
- spanning all the way back to 2012 and expanding every day with the
publication of hundreds of thousands of new measurements - it’s hard to
pick a few highlights. And determining a “highlight” can be really
subjective. So while we share a few examples of censorship worldwide
based on our studies (in collaboration with our local partners), OONI
Explorer is a gold mine waiting to be explored!

We encourage you to dig through OONI Explorer measurements and to share
censorship stories with the world.

# Acknowledgements

OONI Explorer wouldn’t exist without the hundreds of thousands of [OONI Probe](https://ooni.io/install/) users who measure internet censorship
in more than 200 countries every month -- often even in high-risk
environments. We thank every single OONI Probe user out there.

We thank the community members who participated in the more recent OONI
Explorer usability studies, as well as all community members who
participated in usability studies and otherwise shared feedback over the
years. We also thank our partners for providing detailed feedback during
the [OONI Partner Gathering in 2017](https://ooni.io/post/ooni-partner-gathering-2017/#challenges-and-needs),
and for continuing to share feedback on how to improve OONI Explorer
over the years.

Finally, we thank **[Mozilla](https://www.mozilla.org/)** for supporting
the development of the new OONI Explorer (through [Mozilla Open Source Support (MOSS)](https://www.mozilla.org/en-US/moss/)) and making this
revamp possible.

# Credits

OONI Explorer contributors:

* **Sarath M S** - Lead developer

* **Elio Qoshi** - Design

* **Antonela Debiasi** - Design

* **Gaba** - Project management

* **Arturo Filastò** - Project management and backend development

* **Maria Xynou** - Copy and user research
