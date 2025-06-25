---
title: "Year in Review: OONI in 2019"
author: "Maria Xynou"
date: "2020-03-20"
tags: ["ooni"]
categories: ["blog"]
---

As the new decade begins, we publish this post to share some OONI
highlights from 2019. We also share some thoughts for 2020.

* [New Apps](#new-apps)

    * [Revamped OONI Probe Mobile App](#revamped-ooni-probe-mobile-app)

    * [New OONI Probe Desktop App](#new-ooni-probe-desktop-app)

* [Near real-time publication of OONI measurements](#near-real-time-publication-of-ooni-measurements)

    * [Revamped OONI Explorer](#revamped-ooni-explorer)

    * [OONI PostgreSQL MetaDB](#ooni-postgresql-metadb)

* [Improved measurements](#improved-measurements)

    * [New OONI Probe tests](#new-ooni-probe-tests)

    * [New OONI Probe measurement engine](#new-ooni-probe-measurement-engine)

* [Community](#community)

    * [New partnerships](#new-partnerships)

    * [Research publications](#research-publications)

    * [OONI workshops and presentations](#ooni-workshops-and-presentations)

    * [Community resources](#community-resources)

* [OONI-verse](#ooni-verse)

* [2020](#2020)

# New Apps

## Revamped OONI Probe Mobile App

![OONI Probe Mobile: Old vs. New](/post/ooni-2019/mobile.png)

**Image:** [Comparison of old and new OONI Probe mobile app](https://ooni.org/post/revamped-ooni-probe-mobile-app/)

We [launched OONI Probe mobile 2.0](https://ooni.org/post/revamped-ooni-probe-mobile-app/)! OONI Probe
is [free and open source software](https://github.com/ooni/probe)
designed to [measure](https://ooni.org/nettest/) internet censorship
and various forms of network interference.

The new OONI Probe mobile app has been revamped entirely based on
community feedback and features requests from the last years, following
the [initial launch of the OONI Probe mobile app](https://ooni.org/post/ooni-mobile-app/) in February 2017.

[Highlights](https://ooni.org/post/revamped-ooni-probe-mobile-app/#ooni-probe-2-0-highlights)
from the revamped OONI Probe mobile app include:

* **Major UI overhaul.** The new app has an entirely new design and
UX, simplified navigation, and improved presentation of
test results.

* **Enhanced website testing.** You can test the websites of your
choice directly through the OONI Probe mobile app! You can also
test the URLs included in the [Citizen Lab’s country-specific test lists](https://github.com/citizenlab/test-lists/tree/master/lists),
and choose which categories of sites to test.

* **Overview of test results.** You can now have a bird’s eye view of
all your OONI Probe test results, enabling comparison.

* **Data usage.** You can keep track of how much of your mobile data
the OONI Probe app is using.

Try out the new OONI Probe mobile app! It’s available for
[Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe),
[F-Droid](https://f-droid.org/packages/org.openobservatory.ooniprobe/),
and [iOS](https://apps.apple.com/us/app/id1199566366).

Thanks to support from the [Localization Lab](https://www.localizationlab.org/) community, the app has been
[translated](https://explore.transifex.com/otf/ooniprobe/dashboard/) to
the following 15 languages: Arabic, Farsi, Chinese, Russian, Hindi,
Spanish, French, Portuguese, Catalan, Turkish, Italian, Albanian, Greek,
Slovak, German.

## New OONI Probe Desktop App

![OONI Probe Desktop](/post/ooni-2019/desktop.png)

**Image:** [New OONI Probe desktop app](https://github.com/ooni/probe-desktop/releases)

Throughout 2019, we worked on developing the first [native OONI Probe desktop app](https://github.com/ooni/probe-desktop/releases), which
we plan to publicly launch soon!

Supporting OONI Probe on Windows has been a popular [community request](https://ooni.org/post/ooni-partner-gathering-2017/#challenges-and-needs)
over the last years. We previously supported macOS and Linux users with
a command line version of OONI Probe that could also be run from a [web user interface](https://ooni.org/post/web-ui-post/). However, setting
up OONI Probe from the terminal presented a technical barrier for many
community members. Furthermore, many human rights defenders globally
(that are interested in running OONI Probe) use Windows, which wasn’t
previously supported.

Now, Windows and macOS users will be able to easily install and run OONI
Probe through the upcoming [new desktop app](https://github.com/ooni/probe-desktop/releases). We have generally
tried to create a seamless experience between the OONI Probe mobile and
desktop apps, which is why you will notice that the design and UX of the
two apps is very similar, and that they include many of the same tests.

However, the new OONI Probe desktop app includes some *different
features* in comparison to the OONI Probe mobile app:

* **Circumvention tool tests.** You can measure the blocking of
[Tor](https://www.torproject.org/) and
[Psiphon](https://psiphon.ca/) with the new OONI Probe
desktop app. These tests will be integrated into the OONI Probe
mobile app as well within 2020.

* **Website testing.** Due to bandwidth constraints on mobile, the
default setting is configured to test a random sample of URLs
within 90 seconds. In the OONI Probe desktop app, on the other
hand, you will test *all URLs* included in the Citizen Lab’s
[country-specific](https://github.com/citizenlab/test-lists/tree/master/lists)
and [global test lists](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)
in one run. You have the option to limit the number of websites
you test through the OONI Probe desktop app settings.

While the new OONI Probe desktop app was released in 2019, we plan to
publicly launch it soon (once it’s more polished). So [stay tuned](https://twitter.com/openobservatory)!

# Near real-time publication of OONI measurements

As of November 2019, OONI measurements from around the world are
published in near real-time! This means that as soon as anyone runs
[OONI Probe](https://ooni.org/install/) anywhere around the world,
their test results are (automatically) [openly published](https://ooni.org/data/) within minutes (unless they have
opted-out from publication).

**This is a major milestone because for the first time, the public can
track global censorship events in near real-time.** And this is thanks
to our colleague Federico Ceratto, who joined the OONI team in May 2019
and built a new **[fast-path pipeline](https://github.com/ooni/pipeline/pull/213)** that makes
instant analysis and publication of measurements from around the world
possible.

## Revamped OONI Explorer

![Next Generation OONI Explorer](/post/ooni-2019/explorer.png)

**Image:** [Next Generation OONI Explorer](https://ooni.org/post/next-generation-ooni-explorer/)

We [launched OONI Explorer 2.0](https://ooni.org/post/next-generation-ooni-explorer/)! 

Consisting of millions of network measurements collected from thousands of networks
in more than 200 countries since 2012, [OONI Explorer](https://explorer.ooni.org/) is arguably the largest publicly
available measurement resource on internet censorship to date.

Highlights from the [next generation OONI Explorer](https://ooni.org/post/next-generation-ooni-explorer/)
include:

* **Revamped country pages.** Through the [new OONI Explorer country pages](https://explorer.ooni.org/countries), you can learn which
websites were most recently blocked (if [block pages](https://ooni.org/support/glossary/#block-page) are
served), how many measurements have been collected per [OONI Probe test](https://ooni.org/nettest/) over time, and how that
compares across networks in each country.

* **Search tool.** With the [new OONI Explorer search tool](https://explorer.ooni.org/search?), you can filter
measurements to view which websites are confirmed blocked (i.e.
[block pages](https://ooni.org/support/glossary/#block-page)
are served) and which websites presented network anomalies (and
therefore may be blocked). You can also filter measurements per
ASN to compare censorship across networks.

* **Measurement pages.** Through the newly designed [OONI Explorer measurement pages](https://ooni.org/post/next-generation-ooni-explorer/#measurement-pages),
you can gain an overview of test results, as well as access to the
raw measurement data, which you can download in JSON format.

* **Censorship highlights.** The landing page of the new OONI Explorer
shares some [examples of interesting cases](https://ooni.org/post/next-generation-ooni-explorer/#censorship-highlights)
that you can uncover through OONI data. These include
politically-motivated censorship events, media censorship, the
blocking of LGBTQI sites, and censorship changes around the world.

## OONI PostgreSQL MetaDB

To support batch consumption of OONI data, we have made a full copy of
the **OONI PostgreSQL MetaDB** available.

This is the same database that also powers the [OONI API](https://api.ooni.io/) and [OONI Explorer](https://explorer.ooni.org/).

The OONI PostgreSQL MetaDB enables you to set-up a read-only replica of
the OONI MetaDB, allowing you to run heavy database queries on your own
infrastructure for batch analysis. To enable adoption, we published
[documentation](https://github.com/ooni/sysadmin/blob/metadb-share/docs/metadb-sharing.md)
that explains how to set-up a copy of the OONI MetaDB.

# Improved measurements

## New OONI Probe tests

We expanded our methodologies by developing the following new OONI Probe
tests:

* Telegram [rewrite in Go](https://github.com/ooni/probe-engine/issues/54)

* [ndt7](https://github.com/ooni/probe-engine/issues/70) (improved
speed test) -- in collaboration with [M-Lab](https://www.measurementlab.net/)

* [DASH rewrite using HTTPS](https://github.com/ooni/probe-engine/issues/51)

For follow-up measurements, we wrote the following tests:

* [SNI blocking detection](https://github.com/ooni/probe-engine/issues/64)

* [DNS over TLS fallback](https://github.com/ooni/probe-engine/issues/66)

* [DNS over HTTPS fallback](https://github.com/ooni/probe-engine/issues/65)

To ensure that our methods work as expected and to make OONI Probe more
resilient, we built a **[censorship simulation tool (called Jafar)](https://github.com/ooni/jafar)** to run experiments and improve
the robustness of our tools.

## New OONI Probe measurement engine

We released a new **[OONI Probe engine](https://github.com/ooni/probe-engine)**!

Over the last years, the OONI Probe mobile app was powered by the C++
[Measurement Kit](https://github.com/measurement-kit/measurement-kit)
library. To enable the integration of tests, improve its
maintainability, and iterate more quickly with higher confidence in code
quality, we re-wrote the OONI Probe measurement engine from C++ to Go.

The new [OONI Probe engine](https://github.com/ooni/probe-engine)
powers both the OONI Probe mobile and desktop apps. We plan to complete
the process of making the apps rely entirely on the new golang engine in
2020.

# Community

## New partnerships

Our network of partners grew in 2019!

Throughout the year, we had the opportunity to establish **6 new
partnerships** with the following digital rights organizations:

* [ASUTIC](https://asutic.org/) (Senegal)

* [Fundación Internet Bolivia](https://internetbolivia.org/) (Bolivia)

* [Open Culture Foundation](https://ocf.tw/) (Taiwan)

* [Software Freedom Law Centre](https://sflc.in/) (India)

* [COMPSUDEV](https://www.facebook.com/compsudev.cameroon/) (Cameroon)

* [Red en Defensa de los Derechos Digitales](https://r3d.mx/) (Mexico)

With our growing coalition of partnerships, we will continue to measure
and report on internet censorship around the world.

## Research publications

In collaboration with our partners (and other community members), we
published the following **13 research reports** covering censorship
events around the world:

* [Internet disruption in Gabon amid coup attempt](https://ooni.io/post/gabon-internet-disruption/)

* [Zimbabwe protests: Social media blocking and internet blackouts](https://ooni.io/post/zimbabwe-protests-social-media-blocking-2019/)

* [From the blocking of Wikipedia to social media: Venezuela’s Political Crisis](https://ooni.io/post/venezuela-blocking-wikipedia-and-social-media-2019/)

* [Cuba blocks independent media amid 2019 constitutional referendum](https://ooni.io/post/cuba-referendum/)

* [Benin: Social media blocking and internet blackout amid 2019 elections](https://ooni.io/post/2019-benin-social-media-blocking/)

* [China is now blocking all language editions of Wikipedia](https://ooni.io/post/2019-china-wikipedia-blocking/)

* [Nigeria’s 2019 elections through the lens of network measurements](https://ooni.io/post/2019-nigeria-internet-censorship/)

* [Jordan: Measuring Facebook live-streaming interference during protests](https://ooni.io/post/jordan-measuring-facebook-interference/)

* [Ethiopia: From internet blackouts to the blocking of WhatsApp and Telegram](https://ooni.io/post/ethiopia-whatsapp-telegram/)

* [Resurgence of Internet Censorship in Ethiopia: Blocking of WhatsApp, Facebook, and African Arguments](https://ooni.io/post/resurgence-internet-censorship-ethiopia-2019/)

* [Egypt blocks BBC and Alhurra: Expanding media censorship amid political unrest](https://ooni.org/post/2019-egypt-blocks-bbc-and-alhurra/)

* [On the blocking of abortion rights websites: Women on Waves & Women on Web](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/)

* [Iran’s nation-wide Internet blackout: Measurement data and technical observations](https://ooni.org/post/2019-iran-internet-blackout/)

## OONI workshops and presentations

As part of our community engagement and outreach activities in 2019, we
facilitated workshops and presented OONI at the following conferences
and events around the world:

* **FOSDEM 2019 (Belgium),** Session: “[Designing for Activism: An overview of the UX overhaul of OONI Probe](https://archive.fosdem.org/2019/schedule/event/ux_overhaul_ooni/)” (2nd February 2019)

* **BarCamp Chiang Mai (Thailand),** Session: “[OONI workshop](https://www.barcampchiangmai.com/)” (16th February 2019)

* **Vietnam Cyber Dialogue (Spain),** Session: “[OONI censorship measurement](https://internetfreedomfestival.org/vietnam-cyber-dialogue/)”
(31st March 2019)

* **Internet Freedom Festival 2019 (Spain)**, [Sessions](https://internetfreedomfestival.org/): “OONI
community feedback: Improving censorship measurement research“,
“Conducting network measurements in censorship hotspots – lessons
from the field“, “Multi-disciplinary teams, journalistic
capabilities, and methodological protocols to monitor and
investigate internet censorship“, “OONI Partners Meetup”, OONI
presentation at the IFF Expo & Tool Showcase (1st – 5th
April 2019)

* **Digital Rights & Inclusion Forum 2019 (Nigeria)**, Session: “[Uncovering Censorship Evidence](https://drif.paradigmhq.org/)”
(23rd April 2019)

* **Media for Democracy Forum (USA),** Panel: "[New and Emerging Threats to Media Freedom: What's
Next?](https://www.usagm.gov/2019/05/07/media-for-democracy-forum/)" (7th May 2019)

* **RightsCon 2019 (Tunisia),** Sessions: “[Supporting the KeepItOn campaign with network measurement data](https://rightscon2019.sched.com/event/PvrM/supporting-the-keepiton-campaign-with-network-measurement-data)”,
“[Measuring internet shutdowns](https://rightscon2019.sched.com/event/Pvs2/measuring-internet-shutdowns)“,
“[Detecting, understanding, and countering censorship of Wikipedia](https://rightscon2019.sched.com/event/Pvem/detecting-understanding-and-countering-censorship-of-wikipedia)“,
“[Methods: Measuring freedom of internet](https://rightscon2019.sched.com/event/Pvea/methods-measuring-freedom-of-internet)”,
“OONI Partners Meetup”, “OONI workshop (Day 0)“ (11th-14th June 2019)

* **Citizen Lab Summer Institute 2019 (Canada)**, Sessions:
“[Censorship Measurement Campaigns: A decentralized approach to measuring and responding to internet censorship
events](https://docs.google.com/document/d/e/2PACX-1vQ9d__mLXzK3ngw-8YA3fvkMIQ3VMDY3h3WCubP1bvT-_My85rMoD1W3Z_vzo5rJPhFoSDjVHl-smqO/pub)” (1st August 2019)

* **Chaos Communication Camp 2019 (Germany)**, Sessions: “[OONI: Measuring Internet Censorship Around the World](https://events.ccc.de/camp/2019/wiki/Session:OONI:_Measuring_internet_censorship_around_the_world)”,
“[OONI Hackathon](https://events.ccc.de/camp/2019/wiki/Session:OONI_Hackathon)” (22nd-25th August 2019)

OONI partners and other community members facilitated OONI workshops
around the world too! Examples include the [Open Culture Foundation’s OONI workshop in Taiwan](https://ocftw.kktix.cc/events/iffcc201910) and
an [OONI workshop hosted in Venezuela](https://twitter.com/ipysvenezuela/status/1162365664008515585)
for local journalists.

## Community resources

To support OONI community engagement efforts around the world, we
created and published several resources. These include:

* **OONI workshop slides.** Interested in facilitating an OONI
workshop? Download the [OONI workshop slides](https://docs.google.com/presentation/d/1UAxGeF1NhCXc8pT7cfWTp0NPdkWB5LInBkGfgW2syJA/edit?usp=sharing)
and adapt them to meet the needs of your communities.

* **OONI Frequently Asked Questions (FAQ).** The new [OONI FAQ](https://ooni.org/support/faq/) addresses many questions that
community members ask about OONI, OONI Probe, OONI Explorer, and
OONI data.

* **OONI Glossary.** The new [OONI Glossary](https://ooni.org/support/glossary/) provides brief
explanations for terms commonly used in the OONI-verse (within
OONI apps, documentation, and research reports), as well as for a
number of technical terms used in the internet freedom community.

* **OONI Run buttons page.** Is social media reportedly blocked in a
country? To support rapid response to emergent censorship events,
we integrated [thematic OONI Run buttons](https://ooni.org/get-involved/run/) on our website to
enable the testing of specific types of websites.

# OONI-verse

Thanks to the OONI community, many measurements were collected from far
and wide.

Every month in 2019, more than 8 million OONI Probe measurements were
[collected](https://explorer.ooni.org/) from more than 4,000 networks
in more than 205 countries around the world.

![OONI measurement coverage](/post/ooni-2019/measurement-coverage.png)

**Image:** [Monthly OONI measurement coverage worldwide](https://explorer.ooni.org/)

Based on this global measurement coverage, many cases of internet
censorship were detected and [reported](https://ooni.org/reports/)
around the world. Apart from our reports, many other cases were reported
by community members who made use of [OONI data](https://ooni.org/data/) as part of their own, independent
research efforts.

Some highlights include:

* **Blocking of thousands of websites in Egypt.** Through the use of
OONI Probe and OONI data, Egypt’s [AFTE](https://afteegypt.org/en/) published a [research report](https://afteegypt.org/en/digital_freedoms-2/publications_digital_freedoms-digital_freedoms-en/2019/05/19/17500-afteegypt.html)
on the collateral blocking of thousands of websites in Egypt.

* **Media filtering in Russia and Crimea amid presidential elections.** Through the use of OONI data, OTF
Information Control Fellows Ksenia Ermoshina and Igor Valentovitch
published a [research report](https://www.opentech.fund/news/exploring-online-media-filtering-during-2018-russian-presidential-elections/)
that investigated, contrasted, and compared internet censorship in
Russia and Crimea during the 2018 Russian presidential elections.

* **Measuring internet censorship across Ukraine.** The [Digital Security Lab of Ukraine](https://medium.com/@cyberlabukraine)
created its own “local OONI”, coordinating OONI Probe censorship
measurement efforts across Ukraine. Based on their analysis of
OONI data, they published several [research reports](https://medium.com/@cyberlabukraine) documenting the
[blocking of websites](https://medium.com/@cyberlabukraine/findings-of-analysis-of-internet-blocking-in-ukraine-march-2019-b20e23c17aee)
and how that varies across regions and networks in Ukraine.

* **Online petition site blocked in Cuba.** Through the use of OONI
Probe and OONI data, a Cuban non-profit organization, called
[YucaByte](https://www.yucabyte.org/), published a
[report](http://www.yucabyte.org/confirman-bloqueo-changeorg-en-cuba/)
on the blocking of `change.org` in Cuba.

* **Freedom on the Net 2019 reports.** Many [Freedom House](https://freedomhouse.org/) reports on Freedom on the Net
cited OONI data, including those for [Venezuela](https://www.freedomonthenet.org/country/venezuela/freedom-on-the-net/2019),
[Zimbabwe](https://www.freedomonthenet.org/country/zimbabwe/freedom-on-the-net/2019),
[Zambia](https://www.freedomonthenet.org/country/zambia/freedom-on-the-net/2019),
[Nigeria](https://www.freedomonthenet.org/country/nigeria/freedom-on-the-net/2019),
[Kenya](https://www.freedomonthenet.org/country/kenya/freedom-on-the-net/2019),
[Jordan](https://www.freedomonthenet.org/country/jordan/freedom-on-the-net/2019),
[Iran](https://www.freedomonthenet.org/country/iran/freedom-on-the-net/2019),
[Indonesia](https://www.freedomonthenet.org/country/indonesia/freedom-on-the-net/2019),
[Ethiopia](https://www.freedomonthenet.org/country/ethiopia/freedom-on-the-net/2019),
[Egypt](https://www.freedomonthenet.org/country/egypt/freedom-on-the-net/2019),
and [Cuba](https://www.freedomonthenet.org/country/cuba/freedom-on-the-net/2019).

Overall, OONI data became more actionable in 2019, as community members
used OONI Probe and OONI data in many interesting ways. Below we share a
few highlights from 2019:

* **OONI data supported a High Court petition in Pakistan.** Back in
November 2017, we [reported](https://ooni.io/post/how-pakistan-blocked-social-media/)
on the blocking of several media websites, Facebook (facebook.com
and Facebook Messenger), YouTube, Twitter, Instagram, WhatsApp,
and Telegram in Pakistan amid protests. Our report -- which shared
OONI network measurement data collected from Pakistan -- was cited
as evidence in a petition filed in the Islamabad High Court by
[Pakistan's Media Matters for Democracy](http://mediamatters.pk/), challenging the blocking of
media websites and popular social media platforms during
the protests. The petition -- filed through
[Charahgar](http://mediamatters.pk/charahgar/) --
[challenged](http://digitalrightsmonitor.pk/islamabad-high-court-takes-up-petition-filed-by-rights-activists-challenging-the-legality-of-social-media-takedown-during-faizabad-dharna-issues-notices-to-pta-and-the-federal-government/)
the Pakistan Telecommunication Authority's (PTA) authority to
block websites without due process. As an outcome, the Islamabad
High Court [declared](https://tribune.com.pk/story/2061933/1-pta-not-empowered-block-website-ihc/)
that the Pakistan Telecommunications Authority's interpretation of
Section 37 of PECA is against the Constitution, and that they
cannot regulate content without following the due process, the
principles of transparency, and oversight. This is a landmark
victory for internet freedom in Pakistan.

* **Venezuelan partners nominated for 2019 Gabo Award.** Through the
use of OONI Probe and OONI data, [IPYS Venezuela](https://ipysvenezuela.org/) (along with [Venezuela Inteligente](http://veinteligente.org/) /
[VEsinFiltro](https://vesinfiltro.com/)) has been measuring
internet censorship in Venezuela since 2014. They have created a
network of volunteer OONI Probe users across Venezuela, who
coordinate on measuring and reporting on emergent
censorship events. Through the use of OONI data, they have
published numerous research reports, documenting internet
censorship events in Venezuela on an ongoing basis. Their
[Intercortados project](https://ipysvenezuela.org/intercortados/) was
[nominated](https://premioggm.org/premio-gabo/edicion/2019/nominados/)
for the [2019 Gabo Award](https://premioggm.org/noticias/2019/09/conoce-a-los-40-nominados-al-premio-gabo-2019/),
among the 10 best innovation projects.

* **Harvard’s AccessCheck project powered by OONI data.** Harvard’s
[Berkman Klein Center for Internet and Society](https://cyber.harvard.edu/) launched
[AccessCheck](https://accesscheck.thenetmonitor.org/), a
platform that enables you to check the accessibility of websites
around the world. We are excited that AccessCheck is [powered by OONI data](https://accesscheck.thenetmonitor.org/about), along
with data collected from virtual private network (VPN) endpoints
and virtual private servers (VPS).

We are excited to see how community members make use of OONI data in
2020! If you’re interested in working with OONI data and need support,
please don’t hesitate to [reach out](https://ooni.org/about/#contact).

# 2020

There’s no doubt that 2020 will be a challenging year for everyone
around the world.

In light of the escalating global impact of [COVID-19 (coronavirus)](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen),
many digital rights conferences and events have already been cancelled
(such as the [Internet Freedom Festival](https://internetfreedomfestival.org/wiki/index.php/Cancellation_of_the_2020_Internet_Freedom_Festival)
and
[RightsCon](https://www.rightscon.org/covid-19-update-rightscon-costa-rica-postponed-until-2021/)),
and we’ll likely see less of each other in person this year.

Nonetheless, we look forward to **connecting more with you online**.
Join us on the [OONI Slack channel](https://slack.ooni.org/) to chat
with the OONI team and community members from around the world. Please
feel encouraged to use the OONI Slack channel as a **social space amid
[social distancing](https://www.wired.com/story/opinion-how-social-distancing-became-social-justice/)**:
a space to connect with others, share ideas and thoughts, and to support
each other.

We facilitate **monthly community meetings** on the [OONI Slack channel](https://slack.ooni.org/) to receive news and updates from the
community, collect community feedback on OONI tools and methodologies,
address questions, and foster discussions on internet censorship issues.
We usually facilitate these meetings at 14:00 UTC on the last Tuesday of
the month, but we confirm these details on the [ooni-talk mailing list](https://lists.torproject.org/cgi-bin/mailman/listinfo/ooni-talk).

We will also explore opportunities to **facilitate online workshops and
events** throughout 2020. If you’re interested in facilitating an online
OONI workshop to engage people with censorship measurement, we encourage
you to do so and we share [OONI workshop slides](https://docs.google.com/presentation/d/1UAxGeF1NhCXc8pT7cfWTp0NPdkWB5LInBkGfgW2syJA/edit?usp=sharing)
that you can download and adapt.

Ensuring a free and open internet during an emergency, like the current
pandemic, is more important than ever. But a few days ago, state-owned
CANTV [blocked access to a coronavirus information portal in Venezuela](https://vesinfiltro.com/noticias/bloqueado_portal_coronavirus_AN).
Measuring internet censorship can therefore be a question of public
safety.

Throughout 2020, we will continue to improve upon the [OONI Probe apps](https://ooni.org/install/) and methodologies. We will continue to
improve upon [OONI Explorer](https://explorer.ooni.org/) and our data
analysis capabilities. We will continue to [report on censorship events](https://ooni.org/reports/) around the world, and to serve the
internet freedom community.

We hope you all [stay safe](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public)
during these difficult times.
