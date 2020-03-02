---
title: "OONI Highlights: 2017-2019"
author: "Maria Xynou"
date: "2020-03-02"
tags: ["ooni"]
categories: ["blog"]
---

*This post was originally published on the [OTF website](https://www.opentech.fund/news/ooni-highlights-2017-2019/).*

Back in 2012, the [Open Observatory of Network Interference (OONI)](https://ooni.org/) was born with [OTF support](https://www.opentech.fund/results/supported-projects/ooni-open-observatory-of-network-interference/)
to create the first open methodologies that would enable anyone around
the world to measure internet censorship and other forms of network
interference.

Today, OONI comprises a global community that runs its censorship
measurement software ([OONI Probe](https://ooni.org/install/)) in
[more than 200 countries every month](https://explorer.ooni.org/).
Millions of measurements have been collected from tens of thousands of
networks in 236 countries since 2012, all of which are openly published
on [OONI Explorer](https://explorer.ooni.org/) -- arguably the largest
publicly available resource on internet censorship to date.

Most of this growth is thanks to [OTF support](https://www.opentech.fund/results/supported-projects/ooni-open-observatory-of-network-interference/)
over the years.

In this post, we share highlights from what the OONI team accomplished
between 2017 and 2019 with [OTF Internet Freedom Fund](https://www.opentech.fund/funds/internet-freedom-fund/) support.

* [Improved censorship measurement tools](#improved-censorship-measurement-tools)

* [Expanded global coverage of censorship events](#expanded-global-coverage-of-censorship-events)

* [Timely evidence of global censorship events](#timely-evidence-of-global-censorship-events)

* [Rapid response to emergent censorship events](#rapid-response-to-emergent-censorship-events)

* [Global OONI censorship measurement community](#global-ooni-censorship-measurement-community)

# Improved censorship measurement tools

![OONI Probe Mobile: Old vs. New](/post/ooni-highlights-2017-2019/old-vs-new-app.png)

**Image:** [Comparison of OONI Probe mobile 1.0 with OONI Probe mobile 2.0](https://ooni.org/post/revamped-ooni-probe-mobile-app/)
(both released between 2017-2019)

To enable the internet freedom community to measure censorship events
around the world, we first needed to:

* Make [OONI Probe](https://ooni.org/install/) **available on more
platforms** (such as Android and Windows);

* Improve OONI Probe **usability**;

* Make OONI Probe more **useful** to the internet freedom community
(by including new features based on community requests);

* Improve and expand upon OONI’s **methodologies** to collect richer
measurements and detect more forms of internet censorship.

To this end, we released:

* **[New OONI Probe mobile app for Android and iOS](https://ooni.org/post/ooni-mobile-app/).** For the first
time, it became possible to run OONI censorship measurement tests
with the tap of a button!

* **[Revamped version of the OONI Probe mobile app](https://ooni.org/post/revamped-ooni-probe-mobile-app/).**
OONI Probe mobile 2.0 includes many new features, improved design
and UX.

* **[New OONI Probe desktop app for Windows and macOS](https://github.com/ooni/probe-desktop/releases).** This
desktop app has a similar design and UX as the revamped OONI Probe
mobile app.

* **[New OONI Probe Command Line Interface (CLI)](https://github.com/ooni/probe-cli/releases).**
This is for Linux users who may want to run OONI Probe on servers
and contribute more stable measurements.

* **[New OONI Probe measurement engine](https://github.com/ooni/probe-engine).** Previously, the
OONI Probe mobile app was powered by the [Measurement Kit](https://github.com/measurement-kit/measurement-kit) library.
To enable the integration of tests and iterate more quickly with higher confidence in code quality, we re-wrote the OONI Probe
measurement engine from C++ to golang and released the **OONI Probe engine**.

* **New OONI Probe tests**. These include a new [Telegram](https://ooni.org/nettest/telegram/) test (and
[rewrite in Go](https://github.com/ooni/probe-engine/issues/54)), OONI
implementations of M-Lab’s [NDT](https://ooni.org/nettest/ndt/)
and [DASH](https://ooni.org/nettest/dash/) performance tests,
[ndt7](https://github.com/ooni/probe-engine/issues/70) (improved
speed test), a [DASH rewrite using HTTPS](https://github.com/ooni/probe-engine/issues/51), as well
as follow-up measurements for [DNS over TLS fallback](https://github.com/ooni/probe-engine/issues/66), [DNS over HTTPS fallback](https://github.com/ooni/probe-engine/issues/65), and
[SNI blocking detection](https://github.com/ooni/probe-engine/issues/64).

* **Jafar: a censorship simulation tool.** To ensure that our methods
work as expected and to make OONI Probe more resilient, we built a
[censorship simulation tool](https://github.com/ooni/jafar) to
run experiments and improve the robustness of our tools.

* **Methodology for investigating internet blackouts.** We published a
[document](https://ooni.org/post/investigating-internet-blackouts/Investigating-Internet-Blackouts-Methodology-2018-03.pdf)
which outlines our proposed methodology for investigating internet
blackouts from the edge of the network. We also published a [blog post](https://ooni.org/post/examining-internet-blackouts/) which
explains how to examine internet blackouts through existing public
data sources.

# Expanded global coverage of censorship events

![OONI monthly measurement coverage worldwide](/post/ooni-highlights-2017-2019/measurement-coverage.png)

**Image:** [Monthly OONI measurement coverage worldwide](https://explorer.ooni.org/)

**Every month, millions of OONI measurements are collected from
thousands of networks in more than 200 countries, shedding light on
censorship events around the world.**

This expanded coverage is most likely due to the improvement of OONI’s
censorship measurement tools. The following OONI measurement stats show
a large uptick in February 2017, following the initial [launch of the OONI Probe mobile app](https://ooni.org/post/ooni-mobile-app/) (which
made censorship measurement much easier).

![OONI measurement stats](/post/ooni-highlights-2017-2019/measurement-stats.png)

**Image:** [OONI monthly measurement statistics](https://explorer.ooni.org/) (previously hosted on the
[OONI API](https://api.ooni.io/))

Expanded measurement coverage means that more [OONI Probe](https://ooni.org/install/) tests are run in more countries and
on more networks, enabling the internet freedom community to detect many
more cases of internet censorship around the world.

Between 2017 to 2019, we collaborated with our local partners (and other
community members) on the publication of the following **32 research
reports** covering censorship events around the world:

* [The State of Internet Censorship in Thailand](https://ooni.org/post/thailand-internet-censorship/)

* [The State of Internet Censorship in Myanmar](https://ooni.org/post/myanmar-report/)

* [The State of Internet Censorship in Indonesia](https://ooni.org/post/indonesia-internet-censorship/)

* [#EgyptCensors: Evidence of recent censorship events in Egypt](https://ooni.org/post/egypt-censors/)

* [Measuring Internet Censorship in Cuba's ParkNets](https://ooni.org/post/cuba-internet-censorship-2017/)

* [Internet Censorship in Iran: Network Measurement Findings from 2014-2017](https://ooni.org/post/iran-internet-censorship/)

* [Evidence of Internet Censorship during Catalonia's Independence Referendum](https://ooni.org/post/internet-censorship-catalonia-independence-referendum/)

* [Internet Censorship in Pakistan: Findings from 2014-2017](https://ooni.org/post/pakistan-internet-censorship/)

* [How Pakistan blocked news outlets, social media sites, and IM apps amidst protests](https://ooni.org/post/how-pakistan-blocked-social-media/)

* [Iran Protests: OONI data confirms censorship events (Part 1)](https://ooni.org/post/2018-iran-protests/)

* [Iran Protests: DPI blocking of Instagram (Part 2)](https://ooni.org/post/2018-iran-protests-pt2/)

* [Sierra Leone: Network disruptions amid 2018 runoff elections](https://ooni.org/post/sierra-leone-network-disruptions-2018-elections/)

* [Nigeria: Measuring Internet Censorship](https://ooni.org/post/nigeria-internet-censorship/)

* [Ethiopia: Verifying the unblocking of websites](https://ooni.org/post/ethiopia-unblocking/)

* [The State of Internet Censorship in Egypt](https://ooni.org/post/egypt-internet-censorship/)

* [Mali: Social media disruptions amid 2018 presidential election?](https://ooni.org/post/mali-disruptions-amid-2018-election/)

* [South Sudan: Measuring Internet Censorship in the World's Youngest Nation](https://ooni.org/post/south-sudan-censorship/)

* [The State of Internet Censorship in Venezuela](https://ooni.org/post/venezuela-internet-censorship/)

* [Uganda's Social Media Tax through the lens of network measurements](https://ooni.org/post/uganda-social-media-tax/)

* [Internet disruption in Gabon amid coup attempt](https://ooni.org/post/gabon-internet-disruption/)

* [Zimbabwe protests: Social media blocking and internet blackouts](https://ooni.org/post/zimbabwe-protests-social-media-blocking-2019/)

* [From the blocking of Wikipedia to Social Media: Venezuela's Political Crisis](https://ooni.org/post/venezuela-blocking-wikipedia-and-social-media-2019/)

* [Cuba blocks independent media amid 2019 constitutional referendum](https://ooni.org/post/cuba-referendum/)

* [Benin: Social media blocking and Internet blackout amid 2019 elections](https://ooni.org/post/2019-benin-social-media-blocking/)

* [China is now blocking all language editions of Wikipedia](https://ooni.org/post/2019-china-wikipedia-blocking/)

* [Nigeria’s 2019 elections through the lens of network measurements](https://ooni.org/post/2019-nigeria-internet-censorship/)

* [Jordan: Measuring Facebook live-streaming interference during protests](https://ooni.org/post/jordan-measuring-facebook-interference/)

* [Ethiopia: From internet blackouts to the blocking of WhatsApp and Telegram](https://ooni.org/post/ethiopia-whatsapp-telegram/)

* [Resurgence of Internet Censorship in Ethiopia: Blocking of WhatsApp, Facebook, and African Arguments](https://ooni.org/post/resurgence-internet-censorship-ethiopia-2019/)

* [Egypt blocks BBC and Alhurra: Expanding media censorship amid political unrest](https://ooni.org/post/2019-egypt-blocks-bbc-and-alhurra/)

* [On the blocking of abortion rights websites: Women on Waves & Women on Web](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/)

* [Iran’s nation-wide Internet blackout: Measurement data and technical observations](https://ooni.org/post/2019-iran-internet-blackout/)

# Timely evidence of global censorship events

![New OONI Explorer](/post/ooni-highlights-2017-2019/explorer-revamped.png)

**Image:** [OONI Explorer](https://explorer.ooni.org/) ([revamped](https://ooni.org/post/next-generation-ooni-explorer/) in 2019)

**Now, OONI measurements from around the world are openly published in
near real-time.** This means that as soon as anyone runs [OONI Probe](https://ooni.org/install/) anywhere around the world, their test
results are (automatically) openly published on [OONI Explorer](https://explorer.ooni.org/) within minutes (unless if they
have opted-out from publication). It is therefore now possible to track
internet censorship events around the world in near real-time, thanks to
the creation of a **[new fast-path pipeline](https://github.com/ooni/pipeline/pull/213)**.

Data analysts and researchers may be interested in the **[OONI API](https://api.ooni.io/)** (launched in 2017) for downloading the raw
measurements in JSON format to perform their own analysis.

![OONI API](/post/ooni-highlights-2017-2019/api.png)

**Image:** [OONI API](https://api.ooni.io/)

Given that other tools (such as [OONI Explorer](https://explorer.ooni.org/)) depend on the OONI API, the use
of the API should be limited to light-weight queries (to avoid affecting
the performance of tools that rely on it).

To support batch consumption of OONI data, we have made a full copy of
the **OONI PostgreSQL MetaDB** available. This enables any third party
to setup a read-only replica of the OONI MetaDB, allowing them to run
heavy database queries on their own infrastructure for batch analysis.
This is the same database that also powers the [OONI API](https://api.ooni.io/) and [OONI Explorer](https://explorer.ooni.org/). To enable adoption, we published
[documentation](https://github.com/ooni/sysadmin/blob/metadb-share/docs/metadb-sharing.md)
that explains how to set-up a copy of the OONI MetaDB.

Thanks to the [Amazon Open Data program](https://aws.amazon.com/government-education/open-data/), the
whole OONI dataset can be fetched from the [ooni-data Amazon S3 bucket](https://ooni-data.s3.amazonaws.com/), and we published a [blog post](https://ooni.org/post/mining-ooni-data/) explaining how to do
this.

# Rapid response to emergent censorship events

![OONI Run](/post/ooni-highlights-2017-2019/ooni-run.jpg)

**Image:** [OONI Run](https://run.ooni.io)

To promote rapid response to emergent censorship events, we created a
new platform, called **[OONI Run](https://run.ooni.io)**, to enable
the coordination of customized OONI Probe testing.

Through OONI Run, you can [generate a link based on specific websites](https://ooni.org/post/ooni-run/) that you are interested in
testing, and share that link with [OONI Probe](https://ooni.org/install/) users so that they can test those
websites. This has been useful in various cases for measuring emergent
censorship events around the world.

Last year, for example, [IPYS Venezuela](https://ipysvenezuela.org/)
and [Venezuela Inteligente](https://vesinfiltro.com/) coordinated an
[OONI Probe measurement campaign](https://ooni.org/post/venezuela-blocking-wikipedia-and-social-media-2019/#blocking-of-instagram-twitter-and-youtube)
amid protests and political turbulence, sharing [OONI Run](https://run.ooni.io/) links with Venezuelans to test YouTube,
Instagram, and Twitter across the country. This enabled the rapid
collection of relevant measurements, supporting the publication of a
joint
[report](https://ooni.org/post/venezuela-blocking-wikipedia-and-social-media-2019/)
providing evidence of social media blocking in Venezuela. Quite
similarly, [OONI Run](https://run.ooni.io/) links were used to
coordinate testing in Egypt to collect evidence on the [blocking of bbc.com and alhurra.com](https://ooni.org/post/2019-egypt-blocks-bbc-and-alhurra/)
amid protests.

As social media, news websites, and circumvention tools often get
blocked during political events around the world, we [embedded several OONI Run buttons on the OONI website](https://ooni.org/get-involved/run/) to enable the testing of
such websites.

![OONI Run buttons](/post/ooni-highlights-2017-2019/buttons.png)

**Image:** [OONI Run buttons embedded on OONI website](https://ooni.org/get-involved/run/)

These sorts of buttons can be generated through the [OONI Run](https://run.ooni.io/) platform.

# Global OONI censorship measurement community

All of the above requires a **community**: humans who are interested in
defending a free and open internet, and willing to run censorship
measurement tests from local vantage points (despite [potential risks](https://ooni.org/about/risks/)).

To empower censorship research participation in the internet freedom
community, we established **17 new partnerships** (between 2017 to 2019)
with the following organizations:

* [Open Culture Foundation](https://ocf.tw/) (Taiwan)

* [Software Freedom Law Centre](https://sflc.in/) (India)

* [Association for Freedom of Thought and Expression](https://afteegypt.org/) (Egypt)

* [Jordan Open Source Association](https://jordanopensource.org/) (Jordan)

* [Paradigm Initiative](https://paradigmhq.org/) (Nigeria)

* [Digital Society of Zimbabwe](http://www.dszim.org/) (Zimbabwe)

* [Tuwindi Foundation](http://tuwindi.io/) (Mali)

* [ASUTIC](https://asutic.org/) (Senegal)

* [COMPSUDEV](https://www.facebook.com/compsudev.cameroon/) (Cameroon)

* [The Advocates for Human Rights and Democracy](https://www.facebook.com/TAHURIDSouthSuda/) (South Sudan)

* [Campaign for Human Rights & Development International](https://www.betterplace.org/en/organisations/6430-campaign-for-human-rights-and-development-sierra-l)
(Sierra Leone)

* [Instituto Prensa y Sociedad (IPYS) Venezuela](https://ipysvenezuela.org/) (Venezuela)

* [Asociación por los Derechos Civiles](https://adc.org.ar/) (Argentina)

* [Fundación Karisma](https://stats.karisma.org.co/) (Colombia)

* [Red en Defensa de los Derechos Digitales](https://r3d.mx/) (Mexico)

* [TEDIC](https://www.tedic.org/) (Paraguay)

* [Fundación Internet Bolivia](https://internetbolivia.org/) (Bolivia)

We started [establishing partnerships with digital rights organizations](https://ooni.org/get-involved/partnership-program/) in
mid-2016, and the new partnerships listed above expand our network to 27
partnerships overall. Through these partnerships, we aim to support
local efforts in increasing transparency of internet censorship. To this
end, we collaborate on OONI network measurement and provide OONI data
analysis support.

Between 2017 to 2019, we collaborated with our partners (and other
community members) on **updating 20 [Citizen Lab test lists](https://ooni.org/get-involved/contribute-test-lists)** for the
following countries:
[Senegal](https://github.com/citizenlab/test-lists/pull/424),
[Bolivia](https://github.com/citizenlab/test-lists/pull/426),
[Mexico](https://github.com/citizenlab/test-lists/pull/428),
[Paraguay](https://github.com/citizenlab/test-lists/pull/427),
[Tanzania](https://github.com/citizenlab/test-lists/pull/520),
[Algeria](https://github.com/citizenlab/test-lists/pull/517),
[Vietnam](https://github.com/citizenlab/test-lists/pull/516),
[Indonesia](https://github.com/citizenlab/test-lists/pull/512),
[Cameroon](https://github.com/citizenlab/test-lists/pull/508),
[Democratic Republic of Congo (DRC)](https://github.com/citizenlab/test-lists/pull/420),
[Colombia](https://github.com/citizenlab/test-lists/pull/393),
[Argentina](https://github.com/citizenlab/test-lists/pull/390),
[Jordan](https://github.com/citizenlab/test-lists/pull/388),
[Nigeria](https://github.com/citizenlab/test-lists/pull/387), [South Sudan](https://github.com/citizenlab/test-lists/pull/366),
[Venezuela](https://github.com/citizenlab/test-lists/pull/329),
[Zimbabwe](https://github.com/citizenlab/test-lists/pull/327),
[Sierra Leone](https://github.com/citizenlab/test-lists/pull/320),
[Egypt](https://github.com/citizenlab/test-lists/pull/301), and
[Mali](https://github.com/citizenlab/test-lists/pull/304).

To support local OONI community engagement efforts, we created and
published several resources, such as [OONI workshop slides](https://docs.google.com/presentation/d/1UAxGeF1NhCXc8pT7cfWTp0NPdkWB5LInBkGfgW2syJA/edit?usp=sharing),
a [Frequently Asked Questions (FAQ)](https://ooni.org/support/faq/)
section, and an [OONI Glossary](https://ooni.org/support/glossary). We
also started an [OONI Community Interview series](https://ooni.org/post/ooni-community-interviews-moses-karanja/)
and created a [short documentary](https://ooni.org/post/parknet-short-documentary-cuba/) on
internet censorship in Cuba.

Thanks to [OTF Community Lab](https://www.opentech.fund/labs/community-lab/) support, we had the
opportunity to host the **[OONI Partner Gathering in 2017](https://ooni.org/post/ooni-partner-gathering-2017/)**: a two-day
event that brought all of our partners together to share skills and
knowledge on censorship measurement research. We subsequently held
several other community gatherings, such as our monthly online meetings
and in-person meetups at international conferences and events (such as
[RightsCon](https://www.rightscon.org/) and the [Internet Freedom Festival](https://internetfreedomfestival.org/)).

The OONI team is immensely grateful to the OTF for supporting the growth
of the OONI-verse. We look forward to continuing to support the internet
freedom community in the fight against internet censorship.
