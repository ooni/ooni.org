---
title: "Why Collaboration and Transparency is Key to Internet Measurement"
description: "A post on internet measurements, collaboration and transparency."
author: "Maria Xynou"
date: "2021-11-30"
tags: ["ooni", "isoc"]
categories: ["blog"]
---

-----------------------------------------------------------------------------------------------------------

This post was originally published on the [Internet Society Pulse blog](https://pulse.internetsociety.org/blog/internet-measurements-collaboration-and-transparency).

--------------------------------------------------------------------------------------------------------------------------

With Internet shutdowns, disruptions and censorship events on the increase
around the world, tracking where such events are happening and gathering
evidence to help in the fight against them is becoming more and more
important.

Tracking these events is crucial because of the impact they have on society and
the economy. When social media apps are blocked, for example, freedom of
speech, access to information, and movement-building is hampered. When access
to the Internet is shut down completely, people may not have access to vital
services or be able to work and study.

Both the blocking of Internet services and Internet shutdowns often occur in
correlation with political events, such as elections or protests. We have seen
this multiple times around the world over the last years. For example, major
social media services were recently [blocked in Zambia](https://ooni.org/post/2021-zambia-social-media-blocks-amid-elections/) amid its 2021 general
election.

When challenging those responsible, evidence is necessary. And that’s where
Internet measurement plays an important role. 

# Collaborative Community

Internet measurements provide insight into what is happening on a network. This
can be useful for gathering data that can potentially serve as evidence of
Internet censorship and disruption. However, confirming these events can be
tricky, particularly since there are many reasons why an Internet service may
appear to be blocked by an Internet Service Provider (ISP), but not be.

False positives are common in the field of network measurement, so it’s always
necessary to examine the raw network measurement data as well as to
cross-reference multiple different relevant datasets in order to examine
whether they all show the same signals of censorship.

Therefore, it’s really important for Internet measurement projects to provide
open data and to collaborate with each other. Without this collaboration, it’s
like having only one piece of a huge puzzle. To investigate and really
understand Internet censorship events, multiple datasets and perspectives are
necessary. This is why we’re excited to [collaborate](https://pulse.internetsociety.org/partners) with the Internet Society
on the Pulse platform on its [Internet Shutdowns](https://pulse.internetsociety.org/shutdowns) focus area. 

# Data in Context

While empirical network measurement data is important as it can show evidence of
Internet censorship, it is often not enough for us to be able to confirm that a
censorship event is in progress, nor understand the context surrounding that
event.

OONI data provides evidence of Internet censorship around the world and offers
rich network measurement data on the blocking of websites, instant messaging
apps (WhatsApp, Telegram, Facebook Messenger, Signal), and circumvention tools
(Tor, Psiphon, RiseupVPN). It also provides data on network speed and
video-streaming performance.

This data is collected by a large network of volunteers who run OONI software –
called [OONI Probe](https://ooni.org/install/?pk_campaign=ISOCOONIProbeInstall) – on their local networks, contributing test results
(“measurements“) which are openly published in near real-time. As OONI Probe
tests are run on local networks, we are able to capture (through the
measurements) what Internet censorship looks like from the user’s local vantage
point. 

# Largest Open Dataset on Internet Censorship

Since 2012, OONI Probe users have contributed more than 466 million measurements
from 22,900 networks in [240 countries and territories](https://explorer.ooni.org/). As new measurements from
around the world are openly published every minute, OONI data is likely the
largest open dataset on Internet censorship to date. It is also the only open
dataset of this scale based on censorship measurements contributed by
volunteers. Given that OONI data spans nine years, it is possible to perform
longitudinal studies to examine how censorship changes in each country over
time (often in correlation with political events). 

# Providing Local Context and Insight

Every dataset has limitations but, more importantly, it is also necessary to
have insight into what people are experiencing on the ground. This is why the
[OONI Partnership Program](https://ooni.org/partners) was formed in 2016 with the goal of collaborating with
local digital rights organizations around the world who can help corroborate
what we’re seeing in OONI data.

OONI partners share relevant context about their Internet experience, and
information about which websites should be tested for censorship. These
partners have helped make network measurement data actionable by using it as
part of their research and advocacy efforts, and in some cases, in court cases
too. 

# The Importance of Tracking Internet Disruptions

Often there is limited (if any) transparency into which websites and apps are
blocked in a certain country, how that varies across Internet Service
Providers (ISPs), and why specific services are blocked. We’re often in the
dark in the sense that we need to trust that Internet censorship and blocking
will be limited to what a specific government deems to be unlawful categories
of websites, and that ISPs won’t block other websites as well. Instead of
having to blindly trust governments and ISPs, OONI Probe users can measure
networks, check which services are blocked in their county, and use the data
collected to hold those in power to account. 

# Openness and Transparency is Key

Without making raw data available to everyone and offering methodological
transparency, Internet measurements are no different to an anecdotal report. 

False positives are common in network measurement, particularly since there are
many reasons why an Internet service might look like it’s blocked, but not be.
For example, false positives can occur due to transient network failures,
unreliable servers, DNS resolution, and the geographical distribution of
content by websites. Sometimes a website may be inaccessible because the
website owner is blocking IP addresses from a specific country
(server-side blocking), rather than the user’s ISP blocking access. 

To rule out false positives, it is necessary for everyone to be able to read the
detailed methodology of how measurements are performed and evaluate the
limitations. It is also necessary to be able to access the raw data and
evaluate it based on its measurement methodology to be able to determine
whether a signal of censorship is a false positive or not. Going further, it is
often necessary to examine a large volume of relevant open data (examining the
data in aggregate), and to compare it against other, relevant open datasets.

Further, OONI relies on volunteers to gather network measurements via OONI
Probe, and this can potentially be [risky](https://ooni.org/about/risks/), particularly in high-risk
environments. We therefore have an ethical obligation to inform users of what
tests they would be performing by providing full [methodological transparency](https://github.com/ooni/spec/tree/master/nettests)
and to acquire their informed consent.

It is precisely the openness and methodological transparency of data that can
make it serve as evidence when bringing the powerful to account.
