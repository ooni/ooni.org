---
title: "Internet disruption in Gabon amid coup attempt"
author: "Philipp Winter, Maria Xynou"
date: "2019-01-09"
tags: ["gabon", "blackout", "country-ga"]
categories: ["report"]
---

On 7th January 2019, a [military coup was attempted in Gabon](https://www.bbc.com/news/world-africa-46779854) in a bid to end
more than 50 years of rule by President Ali Bongo’s family. The coup
attempt was quickly foiled. Security forces
[reportedly](https://www.aljazeera.com/news/2019/01/gabon-coup-attempt-foiled-190107131011483.html)
killed two suspects, arrested seven others, and Gabon’s government
retained control.

Meanwhile, a [curfew](https://www.aljazeera.com/news/2019/01/gabon-coup-attempt-foiled-190107131011483.html)
has been imposed and [NetBlocks reported](https://netblocks.org/reports/evidence-of-gabon-full-internet-shutdown-coup-attempt-dQ8oo18n)
that access to the Internet has been shut down.

In this post, we share data that provides signals of network disruptions
in Gabon.

# IODA data

The [Center for Applied Internet Data Analysis (CAIDA)](http://www.caida.org/home/) runs a project called
[IODA](https://ioda.caida.org/) (short for Internet Outage Detection
and Analysis), which monitors the Internet, in near-realtime, to
identify macroscopic Internet outages, affecting the edge of the network
(i.e. significantly impacting an AS or a large fraction of a country).
IODA does so via:

* **Global Internet routing (BGP):** Using data from ~500 monitors
participating in the RouteViews and RIPE RIS projects to establish
which network blocks are reachable based on the Internet
control plane.

* **Active probing:** Continuously probing a large fraction of
the (routable) IPv4 address space using a [methodology developed by the University of Southern California](https://www.isi.edu/~johnh/PAPERS/Quan13c.html) to
infer when a /24 block is affected by a network outage.

* **Internet Background Radiation:** Processing unsolicited traffic
reaching the UCSD Network Telescope monitoring an unutilized /8
address block.

IODA data provides insight into Internet disruptions affecting entire
countries, as well as the granularity required for identifying
disruptions only affecting certain networks or regions within countries.

The following IODA chart clearly shows that access to the Internet was
disrupted in Gabon at around 7am UTC on 7th January 2019 for 28 hours.

![IODA data: Gabon Internet Outage](/post/gabon/ioda-ga-data.png)

**Source:** Internet Outage Detection and Analysis (IODA), Gabon:
[https://ioda.caida.org/ioda/dashboard\#view=inspect&entity=country/GA&lastView=overview&from=1546814820&until=1546977600](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/GA&lastView=overview&from=1546814820&until=1546977600)

Around 75% of Gabon’s address space appears to have been withdrawn,
while active probing and darknet measurements dropped as well, at around
the same time. On 8th January 2019 at 11 a.m. UTC, Gabon’s prefixes came
back online and connectivity recovered. The shutdown lasted for 28
hours.

This is not the first time that an Internet outage is observed in Gabon.

The country recently (11th December 2018)
[experienced](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/GA&lastView=overview&from=1544515260&until=1544601540)
a significant Internet outage, affecting more than half of its address
space. In early September 2016, following the re-election of President
Ali Bongo and amid clashes between opposition protesters and security
forces, daily [Internet outages were detected](https://ioda.caida.org/ioda/dashboard/inspect#view=inspect&entity=country/GA&from=1473033600&until=1473638400)
by IODA.

# Google traffic data

Through their [Transparency Reports](https://transparencyreport.google.com/traffic/overview),
Google shares product traffic data originating from all countries around
the world. A visible decrease in traffic in a specific region may mean
that users there cannot access certain Google products or services.
Since Google services are widely used in most countries around the
world, Google traffic data can provide strong signals when network
disruptions occur.

Similarly to IODA data, [Google traffic data](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1546732800000;end:1546905600000;product:1;region:GA&lu=fraction_traffic)
also suggests that Gabon is experiencing Internet disruptions.

The following chart illustrates a drop in Google traffic on 7th January
2019, with almost no relative traffic originating from Gabon on 8th
January 2019.

![Google Traffic: Gabon](/post/gabon/google-traffic-ga.png)

**Source:** Google Transparency Report, Traffic and disruptions to
Google, Gabon,
[https://transparencyreport.google.com/traffic/overview?fraction\_traffic=start:1546732800000;end:1546905600000;product:1;region:GA&lu=fraction\_traffic](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1546732800000;end:1546905600000;product:1;region:GA&lu=fraction_traffic)

At the time of publication of this blog post, the Google Transparency
Reports haven’t been updated with the latest data (limiting our ability
to evaluate whether connectivity has been restored in Gabon based on
Google traffic).

It’s worth highlighting that both Google traffic and IODA charts are
rather consistent, even though they rely on different data sources. They
both show visible drops on 7th January 2019 and signs of Internet
disruptions in Gabon on 8th January 2019.

To receive updates on Internet outages around the world, [follow IODA](https://twitter.com/caida_ioda) on Twitter: @caida_ioda
