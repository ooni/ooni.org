---
title: "Sierra Leone: Network disruptions amid 2018 runoff elections"
author: "Maria Xynou (OONI), Leonid Evdokimov (OONI), Arturo Filastò (OONI), Abdul Fatoma (Campaign for Human Rights and Development International)"
date: "2018-04-05"
tags: ["sierra leone", "censorship", "country-sl"]
categories: ["report"]
---

Last weekend, two network disruptions occurred in Sierra Leone right
before and after the country’s runoff elections.

This post examines these disruptions and shares data that corroborates
local
[reports](http://www.africanews.com/2018/04/01/why-sierra-leone-temporarily-shutdown-internet-after-runoff-vote/).

It seems that the network disruptions were caused by an ACE submarine
cable cut. [Google traffic](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1520294400000;end:1522886400000;product:19;region:SL&lu=fraction_traffic)
and [BGP data](https://stat.ripe.net/widget/country-routing-stats#w.resource=sl&w.zoom_start=1522368000000&w.zoom_end=1522627200000&w.comparison=no) suggest that the second disruption, following the runoff
elections, could be an internet blackout.

# 2018 general elections

President Koroma is stepping down, having served ten years in office.

[General elections](http://www.ifes.org/sites/default/files/2018_ifes_sierra_leone_general_elections_faqs_final.pdf)
were held on 7th March 2018 and the opposition, Sierra Leone People’s
Party (SLPP), [won slightly more votes](http://www.africanews.com/2018/03/13/sierra-leone-presidential-polls-enters-runoff-as-opposition-slpp-wins-first/)
than the ruling All People’s Congress (APC). Following [allegations of ballot tampering](https://www.aljazeera.com/programmes/insidestory/2018/04/presidential-elections-usher-era-sierra-leone-180401173146930.html),
a second round of elections was announced for 27th March 2018. The
presidential runoff though was delayed amid [claims of fraud and police harassment](https://www.aljazeera.com/news/2018/03/sierra-leone-court-pauses-preparations-presidential-run-180324145356398.html)
and held last Saturday, on 31st March 2018.

Opposition leader, Julius Maada Bio of SLPP,
[won](https://www.theguardian.com/world/2018/apr/05/sierra-leone-election-president-julius-maada-bio-wins)
Sierra Leone’s 2018 presidential election.

# OONI Probe testing

Throughout the election period, the Open Observatory of Network
Interference (OONI) and the Campaign for Human Rights and Development
International (CHRDI) collaborated on the collection and analysis of
network measurements with the aim of monitoring the accessibility of
sites and services.

Network measurement
[data](https://explorer.ooni.torproject.org/country/SL) collected via
[OONI Probe](/install/) (OONI’s software
designed to measure internet censorship) shows that local and
international sites and services were accessible. [OONI data](https://explorer.ooni.torproject.org/country/SL) shows no signs
of internet censorship throughout Sierra Leone’s 2018 election period,
though the findings are limited to the tests run and the sites and
services tested. It’s worth noting that even though
[WhatsApp](https://explorer.ooni.torproject.org/measurement/20180331T094204Z_AS37164_gUIesReFhEvsRpWt1OVck6JmTN6rQ0RFaCdAezot4YAOf1ZILW)
and [Facebook Messenger](https://explorer.ooni.torproject.org/measurement/20180331T094156Z_AS37164_ZH34DfsoxrGm4kSi7xapXfBQooXpHEVDfNVCj72M5TSpC2w11x)
were accessible, their testing presented high execution time, indicating
some form of performance degradation on the network.

After the polls closed on Saturday night, Sierra Leoneans
[reported](http://www.africanews.com/2018/04/01/why-sierra-leone-temporarily-shutdown-internet-after-runoff-vote/)
that the internet was shut down completely for several hours. The CHRDI
published an [open letter](http://www.thesierraleonetelegraph.com/politically-motivated-internet-shutdown-an-open-letter-to-president-koroma/),
urging the government to ensure the stability and openness of the
internet during the counting process.

Since OONI Probe requires internet connectivity to perform tests, we
referred to third party data sources to investigate further.

# Network disruptions

We started off by looking at Google traffic data. Since Google products
and services are commonly used in most countries around the world,
monitoring internet traffic to such services can help evaluate whether
an internet blackout has occurred or not.

The following graph illustrates [internet traffic from Sierra Leone to Google Search](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1520294400000;end:1522886400000;product:19;region:SL&lu=fraction_traffic)
throughout March 2018.

![Google traffic data](/post/sierra-leone/google-traffic.png)

Source: [Google Transparency Reports: Traffic and disruptions to Google](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1520294400000;end:1522886400000;product:19;region:SL&lu=fraction_traffic)

Most internet traffic was uninterrupted, but towards the end of the
month there are two noticeable network disruptions. The first occurred
in the early hours of 30th March 2018, where there is a decrease in
traffic from Sierra Leone to Google Search. The second occurred on the
following night, where we can observe a complete drop in traffic towards
Google Search from Sierra Leone (highlighted in red in the above chart).
The lack of internet traffic for several hours on the night of 31st
March 2018 and in the early hours of 1st April 2018 strongly suggests
that an internet blackout took place in the country.

Both network disruptions are corroborated by [BGP announcement data aggregated and published by RIPE](https://stat.ripe.net/widget/country-routing-stats#w.resource=sl&w.zoom_start=1522368000000&w.zoom_end=1522627200000&w.comparison=no).
The following graph shows the withdrawal of prefixes in the early hours
of 30th March 2018, as well as late at night on 31st March 2018 and in
the early hours of 1st April 2018.

![BGP announcement data published by RIPE](/post/sierra-leone/ripe.png)

Source: [BGP announcement data published by RIPE](https://stat.ripe.net/widget/country-routing-stats#w.resource=sl&w.zoom_start=1522368000000&w.zoom_end=1522627200000&w.comparison=no)

Similarly to Google traffic data, BGP data from the above graph shows
that a partial network disruption (only affecting a few ASNs and
subnets) occurred on 30th March 2018 and that a more severe network
disruption occurred on the following night after the runoff elections.
Both Google traffic and BGP announcement data show network disruptions
in Sierra Leone during the same dates and time, and both show that
internet access was restored by noon on 1st April 2018.

In our attempt to understand how and why these network disruptions occurred, we
referred to data published for other neighbouring countries. BGP announcement
data published by RIPE shows that network disruptions also occurred in
neighbouring [Guinea](https://stat.ripe.net/widget/country-routing-stats#w.resource=gn&w.zoom_start=1522368000000&w.zoom_end=1522627200000&w.comparison=no) and
[Liberia](https://stat.ripe.net/widget/country-routing-stats#w.resource=lr&w.zoom_start=1522368000000&w.zoom_end=1522627200000&w.comparison=no), but only on
30th March 2018. Sierra Leone Cable Company (SALCAB) - which manages Sierra
Leone’s connection to the ACE submarine cable - [reportedly stated](http://www.itwebafrica.com/telecommunications/891-sierra-leone/243740-internet-shutdown-as-sierra-leone-votes) ([archived](https://web.archive.org/web/20180404181143/http://www.itwebafrica.com/telecommunications/891-sierra-leone/243740-internet-shutdown-as-sierra-leone-votes))
that the network disruption ahead of the elections was caused by a submarine
cable issue between Nouakchott (Mauritania) and Dakar (Senegal).

![ACE Submarine Cable Cut](/post/sierra-leone/cable-cut.png)

Source: [ACE Submarine Cable Map](https://www.submarinecablemap.com/#/submarine-cable/africa-coast-to-europe-ace)

SALCAB released a public statement confirming that the network disruption was
caused by an ACE submarine cable cut and that it affected other countries in the
region as well.

![SALCAB public notice](/post/sierra-leone/salcab.png)

**However, the network disruptions on 30th and 31st March 2018 are
inconsistent.** The fact that the internet was *not* shut down
completely in the early hours of 30th March 2018 means that other
network paths towards Sierra Leone were probably possible. This is also
suggested by RIPE data, which shows that only a few prefixes were
withdrawn on 30th March 2018.

After the runoff elections, late at night on 31st March 2018, the data
tells a different story. 

Google traffic data shows that no internet
traffic to Google Search originated from Sierra Leone. RIPE data shows
that almost all prefixes were withdrawn. Both datasets show that no
neighbouring country was affected, and that internet connectivity was
restored the next day. If the second disruption was also caused by the
cable cut (similarly to what is suggested for the previous day), other
network paths towards Sierra Leone would have likely been possible. But
according to Google traffic and BGP data, they weren’t. All of this
strongly suggests that an internet blackout occurred in Sierra Leone
following its second round of elections.

We reached out to Sierra Leone Cable Company (SALCAB), Africell and
Orange to better understand how and why the two network disruptions
occurred. We received a prompt reply from the Vice Chair of Africa to
Europe (ACE) submarine cable who said:

*“We confirm that there is a cut in ACE submarine cable. ACE submarine
cable did not receive any government order to switch off the Internet.”*

Sierra Leone’s National Telecommunications Commission (NATCOM) also
[denied](https://www.telecompaper.com/news/sierra-leone-denies-internet-shutdown-during-election--1238708)
reports that it ordered the shutdown of the internet following the
elections. They claim that the network disruptions were caused by issues
pertaining to the cable cut.

We will update this post when/if we hear from the other providers we
reached out to.
