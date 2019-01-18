---
title: "Year in Review: OONI in 2018"
author: "Maria Xynou"
date: "2019-01-18"
tags: ["ooni"]
categories: ["blog"]
---

As the new year begins, we publish this post to share some OONI
highlights from 2018. We also share some of the exciting new projects
we’ll be launching in 2019!

* [New partnerships](#new-partnerships)

* [Research publications](#research-publications)

* [Dev work behind the scenes](#dev-work-behind-the-scenes)

    * [Revamped OONI Probe mobile apps](#revamped-ooni-probe-mobile-apps)

    * [Revamped OONI Explorer](#revamped-ooni-explorer)

    * [New OONI Probe desktop apps](#new-ooni-probe-desktop-apps)

    * [Probe Orchestration](#probe-orchestration)

* [OONI workshops and presentations](#ooni-workshops-and-presentations)

* [Videos](#videos)

* [Expanding OONI-verse](#expanding-ooni-verse)

# New partnerships

Our network of partners grew significantly in 2018!

Throughout the year, we had the opportunity to establish 8 new
[partnerships](https://ooni.torproject.org/get-involved/partnership-program/)
with the following digital rights organizations:

* [Tuwindi Foundation](http://tuwindi.org/) (Mali)

* [Instituto Prensa y Sociedad (IPYS) Venezuela](https://ipysvenezuela.org/) (Venezuela)

* [Asociación por los Derechos Civiles](https://adc.org.ar/) (Argentina)

* [Fundación Karisma](https://karisma.org.co/) (Colombia)

* [The Advocates for Human Rights and Democracy](http://www.tahurid.jovanjulien.com/) (South Sudan)

* [Paradigm Initiative](https://paradigmhq.org/) (Nigeria)

* [Jordan Open Source Association](https://jordanopensource.org/) (Jordan)

* [TEDIC](https://www.tedic.org/) (Paraguay)

With our growing coalition of more than 20 digital rights organizations,
we will continue to measure and report on internet censorship around the
world.

# Research publications

In collaboration with our partners, we published the following 10
research reports:

* [Iran Protests: OONI data confirms censorship events (Part 1)](https://ooni.torproject.org/post/2018-iran-protests/)

* [Iran Protests: DPI blocking of Instagram (Part 2)](https://ooni.torproject.org/post/2018-iran-protests-pt2/)

* [Sierra Leone: Network disruptions amid 2018 runoff elections](https://ooni.torproject.org/post/sierra-leone-network-disruptions-2018-elections/)

* [Nigeria: Measuring Internet Censorship](https://ooni.torproject.org/post/nigeria-internet-censorship/)
(a version of which was also published in the [IEEE’s December 2018 Internet Policy Newsletter](https://internetinitiative.ieee.org/newsletter/december-2018/measuring-internet-censorship-in-nigeria))

* [Ethiopia: Verifying the unblocking of websites](https://ooni.torproject.org/post/ethiopia-unblocking/)

* [The State of Internet Censorship in Egypt](https://ooni.torproject.org/post/egypt-internet-censorship/)

* [Mali: Social media disruptions amid 2018 presidential election?](https://ooni.torproject.org/post/mali-disruptions-amid-2018-election/)

* [South Sudan: Measuring Internet Censorship in the World’s Youngest Nation](https://ooni.torproject.org/post/south-sudan-censorship/)

* [The State of Internet Censorship in Venezuela](https://ooni.torproject.org/post/venezuela-internet-censorship/)

* [Uganda’s Social Media Tax through the lens of network measurements](https://ooni.torproject.org/post/uganda-social-media-tax/)

We also published:

* A [paper](https://ooni.torproject.org/post/investigating-internet-blackouts/Investigating-Internet-Blackouts-Methodology-2018-03.pdf)
outlining our proposed methodology for **investigating internet
blackouts from the edge of the network**

* A [blog post](https://ooni.torproject.org/post/mining-ooni-data/)
explaining **how to mine OONI data**

# Dev work behind the scenes

The [OONI software ecosystem](https://github.com/ooni) is quite big,
consisting of multiple different, but interdependent, software projects
(expanding beyond user-facing apps).

During 2018, OONI developers worked on improving upon and maintaining
existing software projects, in addition to creating new ones.

Below we list some of the exciting new software projects we expect to
launch in 2019!

## Revamped OONI Probe mobile app

Earlier this week, we [launched a revamped version of the OONI Probe mobile app](https://ooni.io/post/revamped-ooni-probe-mobile-app/)!

Since “a picture is worth a thousand words”, here’s a comparison of the
old vs. new app:

![OONI Probe Mobile: Old vs. New](/post/ooni-2018/ooni-app-comparison.png)

We spent most of 2018 revamping the OONI Probe mobile app to improve
its usability and include new features.

Ever since we [first launched the OONI Probe mobile app](https://ooni.torproject.org/post/ooni-mobile-app/) (back in
February 2017), we have been collecting community feedback on an ongoing
basis (through monthly community meetings, workshops, daily interactions
with partners, etc). To collect community feedback in a more structured
way, we:

* Carried out an in-person usability study in Kiev, Ukraine
(July 2018) with local community members

* Created and circulated an online
[survey](https://ooniuxteam.typeform.com/to/a1P0cn)

* [Interviewed](https://ooni.torproject.org/post/ooniprobe-ux-survey-and-interviews/)
more than 20 community members from around the world

The feedback that we collected and analyzed from the usability studies
informed the design and development of the OONI Probe mobile app. In
November 2018, we released the [public beta](https://github.com/ooni/translations/blob/master/Guidelines.md#install-the-ooni-probe-public-beta)
of the revamped app. 

You can now [install the stable version](https://ooni.torproject.org/install/).

## Revamped OONI Explorer

[OONI Explorer](https://explorer.ooni.io/) is likely the
largest, publicly-available, dataset on internet censorship to date.

Consisting of millions of network measurements collected from thousands
of networks from more than 200 countries since 2012, OONI Explorer
serves as a growing, public archive on network interference around the
world. But the current version of OONI Explorer could benefit from a
series of improvements (we have collected lots of community feedback on
this over the years).

To this end, we started working on revamping OONI Explorer entirely.

We are excited that **Sarath M S** joined the OONI team in
2018! He has since been developing the new and improved OONI Explorer.

We expect to launch the revamped version of OONI Explorer by mid-2019... so stay tuned!

## New OONI Probe desktop apps

In 2018, we started building OONI Probe desktop apps. 

These apps are a big step forward compared to the previously released [macOS and Linux web UI](https://ooni.torproject.org/post/web-ui-post/), as they feature a more native platform integration and will be supporting Windows computers as well.

Our aim is to ensure that OONI Probe is not only available on more platforms, but that it is also as easy to install and use as possible. 

We released a [beta version](https://github.com/ooni/probe-desktop/releases) of the OONI Probe desktop apps for Windows and macOS in 2018, and plan to launch the apps in 2019. 

## Probe Orchestration

We have been working on creating the [OONI Probe Orchestration System](https://github.com/ooni/orchestra) to
dynamically instrument the collection of OONI Probe measurements around
the world, particularly in response to emergent censorship events.

Throughout 2018, we made a fair amount of progress on implementing
unattended Probe Orchestration, which means that OONI Probe deployments
would be “smart enough” to know when it’s the right moment to run
certain tests.

The specification and design of Probe Orchestration received a security
audit and we are planning to roll it out in production in 2019.

# OONI workshops and presentations

As part of our community engagement and outreach activities in 2018, we
facilitated workshops and presented OONI at the following conferences
and events around the world:

* **University of Cape Town (South Africa)**, Seminar: “[Internet Censorship Measurements](http://www.students.uct.ac.za/event/internet-censorship-measurements)”
(16th February 2018)

* **Internet Policy in Africa: Research Methods Workshop for
Advocacy (Uganda)**, “Network Measurement Research” and “OONI data
analysis” [workshops](http://globalnetpolicy.org/event/research-methods-africa/)
(28th February 2018)

* **NullCon (India)**, Talk: “[OONI: Measuring internet filters and their unexpected impact](https://nullcon.net/website/goa-2018/speakers/leonid-evdokimov.php)”
(2nd March 2018)

* **Internet Freedom Festival 2018 (Spain)**, Sessions: “[Which questions would you like censorship data to answer?](https://platform.internetfreedomfestival.org/en/IFF2018/public/schedule/custom/479)”, “[Tool showcase: OONI](https://platform.internetfreedomfestival.org/en/IFF2018/public/schedule/custom/721)”
(7th & 8th March 2018)

* **International Journalism Festival (Italy)**, Panel: “[States, companies, algorithms and crowds: The many new faces of web censorship](https://www.journalismfestival.com/programme/2018/states-companies-algorithms-and-crowds-the-many-new-faces-of-web-censorship)”
(13th April 2018)

* **RightsCon 2018 (Canada)**, Sessions: “[Enforcing Net Neutrality with Evidence Based Policy Making](https://rightscon2018.sched.com/event/EHoY/enforcing-net-neutrality-with-evidenced-based-policy-making)”, “[Shedding Light on Internet Blackouts](https://rightscon2018.sched.com/event/EHmS/shedding-light-on-internet-blackouts)”,“[Defending Minority Voices on a Censored Internet](https://rightscon2018.sched.com/event/EHmO/defending-minority-voices-on-a-censored-internet)”(16th & 17th May 2018)

* **Citizen Lab Summer Institute 2018 (Canada)**, Sessions: “[Making OONI’s censorship data more actionable](https://docs.google.com/document/d/e/2PACX-1vRhl3ErFOG5gRNdzVydrGIkpsIJ_C-pu5wW5fK_EDKOkdvqgFoW1iNN31PJ22UJ6gMF5Wa1WJQ5fQd8/pub#h.omigtdknxq7v)”,
“[Measurements from Embedded Devices](https://docs.google.com/document/d/e/2PACX-1vRhl3ErFOG5gRNdzVydrGIkpsIJ_C-pu5wW5fK_EDKOkdvqgFoW1iNN31PJ22UJ6gMF5Wa1WJQ5fQd8/pub#h.rm8pfvdzf8wy)” (14th & 15th June 2018)

* **Open Labs Hackerspace (Albania)**, [OONI Probe workshop](https://wiki.openlabs.cc/faqja/OONI_Probe_Workshop) (6th July 2018)

* **Chasopys EduSpace (Ukraine)**, Lecture: “[Uncovering Evidence of Internet Censorship](https://m.facebook.com/events/251993642054831/)”
(13th July 2018)

* **Italian Hacker Camp (Italy)**, Talk: “[An update on internet censorship](https://www.ihc.camp/event/italian-hacker-camp-2018-08-02-2018-08-05-1/track/an-update-on-internet-censorship-186)” (3rd August 2018)

* **Annenberg-Oxford Media Policy Summer Institute 2018 (UK)**, Lecture: “[Understanding & Measuring Online Censorship](http://pcmlp.socleg.ox.ac.uk/news/annenberg-oxford-media-policy-summer-institute/)” (6th August 2018)

* **FOCI 2018 (USA)**, Keynote: “[Growing the Open Observatory of Network Interference (OONI)](https://www.usenix.org/conference/foci18/workshop-program)”,
[slides](https://slides.ooni.io/2018/foci/) (14th August 2018)

* **Geek Picnic (Russia)**, [Talk](https://geek-picnic.me/saint-petersburg): “The role of
internet censorship in the development of the future”, [slides in Russian](https://slides.ooni.io/2018/geekpicnic/#/0) (18th August 2018)

* **Chaos Constructions 2018 (Russia)**, [Talk](https://chaosconstructions.ru/) discussing the blocking of Telegram in Russia, [slides in Russian](https://slides.ooni.io/2018/cc/#/) (25th August 2018)

* **CryptoInstallFest (Russia)**, [Talk](https://cryptofest.ru/agenda) discussing the blocking of Telegram in Russia, [slides in Russian](https://slides.ooni.io/2018/cif/#/) (22nd September 2018)

* **Mozilla Festival 2018 (UK)**, [OONI Probe workshop](https://twitter.com/mozTechSpeakers/status/1056851429766414336)
(29th October 2018)

* **Mozilla Community Space Taipei (Taiwan)**, [OONI workshop](https://ocftw.kktix.cc/events/ooni-workshop) (1st November 2018)

* **Science & Technology Law Institute (Taiwan)**, OONI seminar (2nd November 2018)

* **Internet Governance Forum (France)**, Panel: “[DC Net Neutrality: Measuring Discriminatory Practices](https://www.intgovforum.org/multilingual/content/igf-2018-dc-net-neutrality-measuring-discriminatory-practices-dcnn)” (12th November 2018)

# Videos

We started experimenting with the creation of videos! In 2018, we set up
an [OONI YouTube channel](https://www.youtube.com/channel/UCQhDgj9wBf4_w5bWFvLlq-w),
where we published the following:

* **[ParkNet: Exploring Internet Censorship in Cuba](https://www.youtube.com/watch?v=QslsL84jx4E&t=2s)** (short
documentary on our [research](https://ooni.torproject.org/post/cuba-internet-censorship-2017/) in Cuba)

* **[Interview with Julie Owono](https://www.youtube.com/watch?v=t842clfakt0)** (OONI Community Interview series)

* **[Interview with Moses Karanja](https://www.youtube.com/watch?v=Pam2UQoZ1qM)** (OONI Community Interview series)

We also interviewed many other community members and plan to publish
their interviews on our YouTube channel in 2019.

# Expanding OONI-verse

The OONI-verse expands beyond the projects that the core OONI team works
on.

For starters, projects like [OONI Explorer](https://explorer.ooni.io/) would not be possible without
the tens of thousands of community members who run OONI Probe every day,
contributing measurements to us and to the world.

In 2018, OONI Probe was run in around 210 countries every month,
covering more than 5,000 networks. This expanded coverage (in comparison
to previous years) is evident through our
[stats](https://api.ooni.io/stats):

![OONI Probe usage stats](/post/ooni-2018/ooni-2018-stats.png)

**We thank every single OONI Probe user out there.**

We are also excited to see communities take leadership, engaging their
local communities with OONI Probe and OONI data.

Malaysia’s [Sinar Project](https://sinarproject.org/), for example,
has been engaging journalists and human rights defenders across
Southeast Asia with censorship measurement research over the last years.
They recently organized and hosted the [OONI Southeast Asia Regional Workshop](https://sinarproject.org/digital-rights/updates/open-observatory-of-network-interference-ooni-southeast-asia-regional-workshop),
engaging local communities from Cambodia, Indonesia, the Philippines,
Thailand, and Vietnam with the use of OONI Probe and OONI data
(particularly within the context of election monitoring).

These initiatives help *decentralize OONI* and strengthen the global
fight against internet censorship. We hope to see more local community
initiatives in 2019!
