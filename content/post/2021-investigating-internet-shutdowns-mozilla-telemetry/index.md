---
title: "Investigating Internet shutdowns through Mozilla telemetry"
description: "This report shares findings from analyzing Mozilla telemetry to investigate Internet connectivity shutdowns in Myanmar, Uganda, Belarus, and Iran."
author: "Arturo Filastò (OONI), Maria Xynou (OONI), Ramakrishna Padmanabhan (IODA), Alberto Dainotti (IODA)"
date: "2021-11-08"
tags: ["myanmar", "belarus", "iran", "uganda", "shutdown", "blackout", "mozilla-telemetry", "country-mm", "country-ir", "country-ug", "country-by"]
categories: ["report"]
---

More than [200 million users](https://data.firefox.com/dashboard/user-activity) worldwide use
the [Firefox](https://www.mozilla.org/en-US/firefox/new/) web browser
(developed by Mozilla) every month.

If access to the Internet is shut down in a country, Mozilla should
expect to see a dramatic drop in Firefox usage from that country. Given
how [widespread](https://data.firefox.com/dashboard/user-activity) the
use of Firefox is around the world, could Mozilla telemetry be a
valuable resource for the Internet freedom community to investigate
Internet shutdowns?

To explore this question, the [Open Observatory of Network Interference (OONI)](https://ooni.org/) and [Internet Outage Detection and Analysis (IODA)](https://ioda.caida.org/) teams joined forces to analyze a
dataset of potential outage signals gathered through regular Mozilla
telemetry, access to which was provided by Mozilla as part of a relevant
research project to validate assumptions about the data.

In this report, we share our findings from analyzing Mozilla telemetry
to investigate Internet connectivity shutdowns in
[Myanmar](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/),
[Uganda](https://ooni.org/post/2021-uganda-general-election-blocks-and-outage/),
[Belarus](https://ooni.org/post/2020-belarus-internet-outages-website-censorship/),
and [Iran](https://ioda.caida.org/ioda/2020-iran-report).

Our analysis demonstrates that Mozilla telemetry is not only a valuable
resource for investigating Internet connectivity shutdowns worldwide,
but that it also provides novel insights. We share recommendations
for improving the research use of Mozilla telemetry.

* [Introduction](#introduction)

* [Methods](#methods)

    * [Case studies](#case-studies)

    * [Analysis of Mozilla telemetry](#analysis-of-mozilla-telemetry)

        * [Limitations](#limitations)

    * [Comparison of Mozilla telemetry with other public datasets](#comparison-of-mozilla-telemetry-with-other-public-datasets)

* [Investigating Internet shutdowns](#investigating-internet-shutdowns)

    * [Myanmar](#myanmar)

    * [Uganda](#uganda)

    * [Belarus](#belarus)

    * [Iran](#iran)

* [Conclusion](#conclusion)

    * [Recommendations](#recommendations)

* [Acknowledgements](#acknowledgements)

# Introduction

How can we verify that access to the Internet has (intentionally or
unintentionally) been shut down in a country? We often hear of Internet
shutdowns occurring worldwide from media reports and [advocacy campaigns](https://www.accessnow.org/keepiton/), but which data sources
can we refer to?

There are a number of public datasets that shed light on whether access
to the Internet has been shut down in a country. Some of these datasets
(such as [IODA](https://ioda.caida.org/ioda/dashboard)) are
specifically designed to measure Internet outages, but you can also
potentially
[infer](https://ooni.org/post/2021-uganda-general-election-blocks-and-outage/#social-media)
the presence of Internet shutdowns through the *absence* of data from
other Internet-wide measurement datasets (such as [RIPE data](https://www.ripe.net/manage-ips-and-asns/db), [M-Lab data](https://www.measurementlab.net/data/) and, in some cases, [OONI data](https://ooni.org/data/)). If an Internet-wide measurement dataset
contains a stable volume of data from a specific network over a long
period of time, a drop in volume of data could potentially signal the
absence of Internet connectivity.

[Tor Metrics](https://metrics.torproject.org/) show the number of
directly connecting [Tor](https://www.torproject.org/) users from a
given country. Similarly, the [Psiphon Data Engine](https://psix.ca/)
shares the number of daily [Psiphon](https://psiphon.ca/) users from
each country. If the number of Tor or Psiphon users drops dramatically
to almost no users, that may be a signal that the country in question is
experiencing an Internet shutdown (since Internet connectivity is
required to use Tor and Psiphon). But in the case of Tor and Psiphon
(which are censorship circumvention tools), a drop in their usage may
also be the result of their blocking (as governments tend to block
circumvention tools in an attempt to prevent censorship circumvention),
rather than a country-wide Internet connectivity shutdown.

This highlights the need to check whether drops in Internet connectivity
signals are present in *multiple independent datasets* for the same
country, during the same time period. It also suggests that it’s useful
to check *Internet traffic towards popular services*, which governments
are less likely to shut down.

As Google services are widely used in most countries, [Google traffic data](https://transparencyreport.google.com/traffic/overview) (which
illustrates the volume of Internet traffic towards Google products and
services) is a great example of this. A significant drop in Google
traffic (in comparison to previous levels in that country) often
[provides a signal of an Internet connectivity shutdown](https://ooni.org/post/2019-iran-internet-blackout/#other-data-sources)
(as Internet access is required to use Google products and services).
However, Google currently publishes its datasets aggregated at the
granularity of entire countries, precluding the ability to detect
Internet connectivity shutdowns that target a specific sub-national
region or a network within a country.

With [more than 200 million users](https://data.firefox.com/dashboard/user-activity) worldwide
every month, can Mozilla telemetry -- gathered only from Firefox web
browser users who have data reporting enabled -- be another useful
source for investigating and potentially corroborating Internet
connectivity shutdowns worldwide?

To evaluate this question, Mozilla provided us access to [specific aggregated data points](https://github.com/mozilla/bigquery-etl/blob/main/sql/moz-fx-data-shared-prod/internet_outages/global_outages_v1/metadata.yaml)
(which did *not* contain any personal information) about network
activity from Firefox telemetry in a dataset which spans from January
2020 to date.

We selected 4 case studies based on countries
([Myanmar](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/),
[Uganda](https://ooni.org/post/2021-uganda-general-election-blocks-and-outage/),
[Belarus](https://ooni.org/post/2020-belarus-internet-outages-website-censorship/),
[Iran](https://ioda.caida.org/ioda/2020-iran-report)) where Internet
shutdowns are known to have occurred (based on public datasets and
reports) from January 2020 onwards (the starting date of Mozilla
telemetry that we have access to).

Ultimately, with this study we aim to evaluate how useful Mozilla
telemetry is for the Internet freedom community in researching Internet
connectivity shutdown events worldwide.

**Note:** We use the terms “outages” and “shutdowns” interchangeably to
refer to the complete disruption of Internet connectivity. The partial
shutdown of specific Internet services (such as the blocking of apps) is
out of scope in this study because Mozilla telemetry does not involve
such tests.

# Methods

To evaluate whether Mozilla telemetry can be helpful in examining
Internet connectivity shutdowns, we:

* **Selected case studies.** The case studies were chosen based on
countries that are known to have experienced Internet connectivity
shutdowns within the Mozilla telemetry date range that we have
access to (from January 2020 to date).

* **Analyzed Mozilla telemetry.** Our analysis involved the 4
countries (Myanmar, Uganda, Belarus, Iran) that we selected as
case studies.

* **Compared Mozilla telemetry with other public datasets.** We
compared public data (such as [IODA](https://ioda.caida.org/ioda/dashboard) and [Google traffic data](https://transparencyreport.google.com/traffic/overview))
with Mozilla telemetry on the selected case studies.

Based on this comparison, our goal was to explore whether it is possible
to observe signals of Internet connectivity shutdowns through Mozilla
telemetry within the date ranges of selected case studies. We also aimed
to understand the potential strengths and limitations of Mozilla
telemetry in examining Internet connectivity shutdowns.

## Case studies

We selected case studies to explore whether signals of Internet
connectivity outages are visible in Mozilla telemetry.

Our criteria for selecting these case studies include:

* **Date range of Mozilla telemetry.** The date range of Mozilla
telemetry that we have access to spans from January 2020 to date.
We therefore needed to select cases of Internet outages that
occurred from January 2020 onwards.

* **Countries that are known to have experienced Internet connectivity
shutdowns from January 2020 onwards.** To compare Mozilla
telemetry with other public data sources, we selected countries
that are known to have experienced Internet connectivity shutdowns
(based on media reports and signals from relevant public datasets)
during the Mozilla telemetry date range.

* **Internet connectivity shutdown cases that occurred during
political events.** When access to the Internet is shut down
during a political event (such as elections or protests), it is
possible that such a shutdown was *intentional* and that its
timing had a larger public impact. It is therefore important to
monitor such shutdown events (which are more relevant from a
socio-political perspective) and to evaluate whether they are
visible through Mozilla telemetry.

* **Internet connectivity shutdowns previously reported by OONI and/or
IODA.** We further narrowed our case study selection to Internet
shutdown events that OONI and/or IODA had already
[reported](https://ooni.org/reports/) on from January 2020
onwards. Having previously performed relevant analysis and
published reports, such case studies enabled us to have a more
in-depth understanding, facilitating more accurate comparison with
Mozilla telemetry. However, we acknowledge our bias in our case
study selection.

Based on these criteria, we selected the following case studies:

1) **Myanmar.** We examine two [Internet outages](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/#ongoing-nightly-outages)
that occurred following the February 2021 military coup.

2) **Uganda.** We examine the [4-day nationwide Internet outage](https://ooni.org/post/2021-uganda-general-election-blocks-and-outage/#internet-outage-amid-2021-general-election)
amid its January 2021 general election.

3) **Belarus.** We examine the [Internet outages amid its 2020 presidential election](https://ooni.org/post/2020-belarus-internet-outages-website-censorship/#internet-outages-amid-2020-belarusian-presidential-election).

4) **Iran.** We examine two [Internet outages in March 2020](https://ioda.caida.org/ioda/2020-iran-report) following its
February 2020 legislative election.

## Analysis of Mozilla telemetry

For the purpose of this research, Mozilla provided us access to an
[aggregated dataset](https://github.com/mozilla/bigquery-etl/blob/main/sql/moz-fx-data-shared-prod/internet_outages/global_outages_v1/metadata.yaml)
of network activity based on Firefox web browser usage worldwide. This
telemetry dataset spans from January 2020 to date.

[Mozilla telemetry data](https://github.com/mozilla/bigquery-etl/blob/main/sql/moz-fx-data-shared-prod/internet_outages/global_outages_v1/metadata.yaml)
is only collected from
[Firefox](https://www.mozilla.org/en-US/firefox/new/) browser users
who have data reporting enabled, reporting information on certain
networking related metadata when browsing the web. As such, Mozilla
telemetry provides a representation of the user experience when
accessing the web. This telemetry has been aggregated to build privacy
protections in the data.

The telemetry dataset which has been made available to us is an
aggregate of pings sent by Firefox clients.

A row of the data looks something like this:

```
country,city,datetime,proportion_undefined,proportion_timeout,proportion_abort,proportion_unreachable,proportion_terminated,proportion_channel_open,avg_dns_success_time,missing_dns_success,avg_dns_failure_time,missing_dns_failure,count_dns_failure,ssl_error_prop,avg_tls_handshake_time
```
Each row represents the various aggregate metrics (percentage of
failures, timing information, counts) over a window of 1 hour in a
specific country or city. The aggregation is performed on an hourly
basis, but cities which have less than or equal to 50 hourly active
users are filtered out.

To analyze Mozilla telemetry as part of this study, we queried the
dataset based on the 4 countries that we selected as case studies. For
each country, we queried the dataset based on the date range(s) of the
Internet shutdown events (selected as part of the case studies). We then
checked whether we could observe a drop in metrics or a complete absence
of metrics within that date range (in comparison to previous levels
before and after the Internet shutdown event), which could provide a
signal of a potential Internet outage. We also checked whether we could
observe a spike in connection timeouts (or other errors), which could
signal a disruption in Internet connectivity (in cases where the
Internet shutdown does not affect all networks in a country).

Based on our analysis of Mozilla telemetry, we produced relevant charts,
which we share in the Findings section below.

### Limitations

The Mozilla dataset provides location granularity in terms of
`country` and `city`, which is very useful for potentially detecting
localized Internet outages that only affect specific cities or regions
(such as the [Internet shutdowns in Jammu and Kashmir](https://internetshutdowns.in/)). However, it does not provide
[Autonomous System Number (ASN)](https://ooni.org/support/glossary/#asn) level information, which
is essential for identifying the specific AS network that is impacted by
an Internet outage. In Iran, for example, we observed [network-level differences](https://ooni.org/post/2019-iran-internet-blackout/#network-level-differences)
during the nationwide Internet shutdown in November 2019. The absence of
ASN information in Mozilla telemetry therefore presents a limitation in
detecting Internet shutdowns that only occur on certain networks.

The `datetime` column in Mozilla telemetry indicates when the metric
was submitted to Mozilla’s telemetry backend, but *not* the time in
which that particular metric was computed on the client. As clients will
store and attempt to re-transmit the metrics at a later stage, these two
times can vary quite dramatically during an Internet outage event. This
therefore presents a limitation in evaluating the correct timing of a
metric.

As part of this study, the primary metric we used for detecting an
outage event is the number of distinct locations that are able to submit
telemetry data to Mozilla servers. But when looking at other metrics,
such as the average percentage of connection timeouts, the exact timing
of when these metrics were recorded is quite unclear. Moreover, Mozilla
telemetry is aggregated on an hourly basis, which presents the risk of
missing short-lived Internet connectivity shutdowns (which last less
than an hour).

Given that Mozilla telemetry is aggregated and doesn’t contain
information on the testing of endpoints, we cannot use it to examine the
blocking of specific Internet services (and, therefore, cannot compare
it against [OONI measurement data](https://ooni.org/data/)). Rather,
Mozilla telemetry is more useful for examining Internet connectivity
shutdowns by checking whether a dramatic drop or absence of metrics is
visible during a reported Internet shutdown event.

## Comparison of Mozilla telemetry with other public datasets

[False positives](https://ooni.org/support/glossary/#false-positive)
can occur (particularly in Internet measurement data), and datasets
usually present limitations.

[IODA](https://ioda.caida.org/ioda/dashboard) signals, for example,
may miss certain Internet outages (particularly if they only affect
cellular networks), while [Google traffic data](https://transparencyreport.google.com/traffic/overview) may not
reflect Internet outages that only impact certain networks or regions.
Mozilla telemetry shares city-level granularity (which
[IODA](https://ioda.caida.org/ioda/dashboard) does not), but does not
provide network-level granularity (which
[IODA](https://ioda.caida.org/ioda/dashboard) does). The absence (or
dramatic drop) of [Tor](https://metrics.torproject.org/) or
[Psiphon](https://psix.ca/) metrics may signal the presence of an
Internet outage, or that may be the result of those tools being blocked
in the specific country.

In short, it is necessary to adopt a more holistic approach, examining
potential Internet connectivity shutdowns through the *comparison of
relevant datasets*.

We therefore compared Mozilla telemetry with other public datasets for
the selected case studies of this research. Based on the analysis of
Mozilla telemetry, we checked whether we could observe a significant
drop in metrics or a complete absence of metrics within the date range
of a selected case study, in comparison to metrics for the same country
and date range in other public datasets (such as
[IODA](https://ioda.caida.org/ioda/dashboard) and [Google traffic data](https://transparencyreport.google.com/traffic/overview)).

Our hypothesis is that if we observe a similar drop or absence of
metrics in Mozilla telemetry in comparison to other relevant public
datasets (for the same country and date range), Mozilla telemetry can be
a useful data source for examining Internet connectivity shutdowns.
However, if we do not observe a significant drop or absence of metrics
in Mozilla telemetry, that may reflect limitations to the dataset,
and/or suggest that the Internet outage in question did not have a large
impact (if Firefox clients were still able to submit metrics). The
hourly granularity of Mozilla telemetry (as opposed to being near
real-time) may also present the risk of short-term outages (that last
less than 1 hour) not being recorded.

# Investigating Internet shutdowns

To evaluate whether Mozilla telemetry can be useful in investigating
Internet connectivity shutdowns, we analyzed Mozilla telemetry and
compared it against relevant public datasets involving 4
country-specific case studies in
[Myanmar](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/),
[Uganda](https://ooni.org/post/2021-uganda-general-election-blocks-and-outage/),
[Belarus](https://ooni.org/post/2020-belarus-internet-outages-website-censorship/),
and [Iran](https://ioda.caida.org/ioda/2020-iran-report).

We share our analysis and findings in the sections below.

## Myanmar

On 1st February 2021, the military in Myanmar carried out a [coup d’etat](https://www.bbc.com/news/world-asia-55882489), seizing power
and detaining the country’s State Counsellor (equivalent to a prime
minister) and other democratically elected leaders. On the same night,
IODA data
[suggests](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612051200&until=1612224000)
that an Internet outage occurred.

As we can see from the chart below, IODA illustrates a drop in both
Active Probing and BGP signals.

{{<img src="images/01.png" title="IODA signals in Myanmar" alt="IODA signals in Myanmar">}}

**Source:** Internet Outage Detection and Analysis (IODA), IODA Signals
for Myanmar, https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612051200&until=1612224000

When looking closer at the outage, we can see that it [does not appear to affect all networks in the same way](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/#outage-on-1st-february-2021).
Some networks experienced almost complete loss of Internet connectivity,
while others appear to have only experienced small outages.

For the purpose of confirming the outage, we looked at the number of
datapoints present in Mozilla telemetry data and searched for “holes” in
the data. A “hole” is when no clients are able to report back any data
to Mozilla telemetry servers.

When comparing IODA signals (from the Internet outage in Myanmar on 1st
February 2021) to Mozilla telemetry data, we can see that the outage is
*not* very visible in the overall metrics count chart (which looks at
how many locations in a given hour were able to report back metrics to
the telemetry server).

{{<img src="images/02.png" title="Mozilla telemetry from Myanmar" alt="Mozilla telemetry from Myanmar">}}

**Source:** Mozilla telemetry data from Myanmar (24th January 2021 to
11th February 2021): Custom overall metrics count chart.

But when looking at Mozilla’s metric on “Average Proportion Timeout”, we
notice a spike in the percentage of connections which timeout.

{{<img src="images/03.png" title="Mozilla telemetry from Myanmar" alt="Mozilla telemetry from Myanmar">}}

**Source:** Mozilla telemetry data from Myanmar (January 2021 to
February 2021): Custom chart on Average Proportion Timeout.

The spike in connection timeouts (as illustrated in the above chart)
could potentially provide a signal of an Internet disruption. However,
this data is presented with a lag because the timestamp of Mozilla
telemetry is based on data submission, rather than on the timing of the
measurement being performed.

Yet, the fact that there is not a complete absence of data seems to
indicate that this outage only affected a *subset* of all networks in
the country, as several clients were still able to submit metrics during
the period of the outage. IODA data appears to corroborate this
hypothesis, as it
[shows](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/#outage-on-1st-february-2021)
that not all AS networks in Myanmar were impacted by the Internet
outage.

When a [second Internet outage](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/#outage-on-6th-february-2021)
occurred in Myanmar a few days later (on 6th February 2021), Mozilla
telemetry provided a strong signal as we observe the *complete absence*
of metrics during that period.

{{<img src="images/04.png" title="Mozilla telemetry from Myanmar" alt="Mozilla telemetry from Myanmar">}}

**Source:** Mozilla telemetry data from Myanmar (February 2021): Custom
chart showing the absence of Mozilla telemetry on 6th February 2021.

As we can see from the above chart, starting from 6th February 2021 at
06:00 UTC until 7th February 2021 at 07:00 UTC, there is a complete
absence of data points, strongly suggesting that an Internet
connectivity shutdown event occurred. Compared to the first Internet
outage on 1st February 2021 (during which some network connectivity was
still present), this second outage (on 6th February 2021) was much more
severe and pervasive, as no Mozilla telemetry clients were able to
report back any data.

The severity of the second Internet outage on 6th February 2021 is also
illustrated in [IODA data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612310400&until=1612915200)
(below), which
[shows](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/#outage-on-6th-february-2021)
a major drop in both Active Probing and IBR signals, as well as a drop
in the BGP signal correlating in time with the drop in the other
signals. This strongly suggests that Myanmar experienced a widespread
internet outage, corroborating the signal seen previously in Mozilla
telemetry.

{{<img src="images/05.png" title="IODA data from Myanmar" alt="IODA data from Myanmar">}}

**Source:** Internet Outage Detection and Analysis (IODA), IODA Signals
for Myanmar, https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612310400&until=1612915200

Similarly, [Google traffic data](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1612051200000;end:1612915199999;product:19;region:MM&lu=fraction_traffic)
very visibly shows that almost no Google traffic originated from Myanmar
during the same time period, as illustrated below.

{{<img src="images/06.png" title="Google traffic data from Myanmar" alt="Google traffic data from Myanmar">}}

**Source:** Google Transparency Report, Traffic and disruptions to
Google: Myanmar (February 2021), https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1612051200000;end:1612915199999;product:19;region:MM&lu=fraction_traffic

When comparing Mozilla telemetry, [IODA data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612310400&until=1612915200),
and [Google traffic data](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1612051200000;end:1612915199999;product:19;region:MM&lu=fraction_traffic),
we observe absence of relevant metrics during the same time period in
Myanmar. The Internet outage on 6th February 2021 is further indicated
by the fact that we see the signals from all 3 datasets resume to their
previous levels thereafter.

Overall, our comparison of Mozilla telemetry from Myanmar with other
(relevant) public data sources shows that:

* High impact Internet connectivity shutdowns which affect all
networks are visible through Mozilla telemetry (when access to the
Internet is shut down completely and Firefox users cannot submit
telemetry to Mozilla servers);

* Lower impact Internet connectivity shutdowns which only affect
certain networks are *not* visible through the overall Mozilla
telemetry count, but can potentially be inferred if Mozilla
metrics display a high percentage of connection timeouts.

## Uganda

On 13th January 2021, on the eve of Uganda’s 2021 general election, the
country was [disconnected from the Internet entirely](https://ooni.org/post/2021-uganda-general-election-blocks-and-outage/#internet-outage-amid-2021-general-election).
The nationwide Internet connectivity shutdown lasted for 4 days, with
Internet access being restored on the morning of 18th January 2021.

In this case study, we compare Mozilla telemetry with
[IODA](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/UG&lastView=overview&from=1610280000&until=1611057600),
the (now discontinued) Oracle Internet Intelligence map, [Google traffic data](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1609459200000;end:1611187199999;product:19;region:UG&lu=fraction_traffic),
and [Cloudflare radar data](https://radar.cloudflare.com/ug?date_filter=last_30_days) to
explore whether Uganda’s 4-day Internet connectivity shutdown is visible
in Mozilla telemetry.

When looking at the metrics reported to Mozilla telemetry services, we
can see that the last successfully submitted data points were on 13th
January 2021 at 17:00 UTC. What follows is a complete lack of any data
which is visible as a “hole” in the chart below.

{{<img src="images/07.png" title="Mozilla telemetry from Uganda" alt="Mozilla telemetry from Uganda">}}

**Source:** Mozilla telemetry data from Uganda (January 2021): Custom
chart showing the absence of Mozilla telemetry between 13th-18th January
2021.

Starting from 18th January 2021 at 05:00 UTC, we can see that traffic
towards Mozilla telemetry services resumes to previous levels. The
complete absence of Mozilla telemetry between 17:00 UTC on 13th January
2021 to 05:00 UTC on 18th January 2021 provides a strong indication that
Uganda experienced a widespread Internet connectivity shutdown.

When we compare the above chart with [IODA data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/UG&lastView=overview&from=1610280000&until=1611057600),
we can clearly see that the timing of the hypothesized Internet
connectivity shutdown is quite consistent.

{{<img src="images/08.png" title="IODA data from Uganda" alt="IODA data from Uganda">}}

**Source:** Internet Outage Detection and Analysis (IODA), IODA Signals
for Uganda, https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/UG&lastView=overview&from=1610280000&until=1611057600

IODA data (above) shows a major drop in both Active Probing and IBR
signals, starting at around 16:00 UTC on 13th January 2021, and lasting
up until around 09:30 UTC on 18th January 2021. We also observe a drop
in the BGP signal correlating in time with the drop in the other
signals. As we see that all these signals resume to their previous
levels on 18th January 2021, IODA data strongly indicates that Uganda
experienced a widespread Internet outage.

The same drop in traffic between 13th to 18th January 2021 can be seen
in data from Oracle Internet Intelligence (now discontinued), Google
traffic data, and Cloudflare radar data, as illustrated through the
following charts.

{{<img src="images/09.png" title="Oracle Internet Intelligence data from Uganda" alt="Oracle Internet Intelligence data from Uganda">}}

**Source:** Oracle Internet Intelligence Map, Uganda (January 2021), https://map.internetintel.oracle.com/?root=national&country=UG
(the link no longer provides relevant data because the project has
recently been discontinued)

Oracle’s Internet Intelligence Map (shared above) used to track internet
disruptions worldwide based on three signals: Traceroute completion
ratio, BGP routes, and DNS query rate. Between 13th to 18th January
2021, Oracle’s Internet Intelligence Map (now discontinued) recorded
almost identical timings in the drop of signals as [IODA data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/UG&lastView=overview&from=1610280000&until=1611057600).

{{<img src="images/10.png" title="Google traffic data from Uganda" alt="Google traffic data from Uganda">}}

**Source:** Google Transparency Report, Traffic and disruptions to
Google: Uganda (January 2021), https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1609459200000;end:1611187199999;product:19;region:UG&lu=fraction_traffic

Similarly, [Google traffic data](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1609459200000;end:1611187199999;product:19;region:UG&lu=fraction_traffic)
(above) shows a major drop in traffic between 13th to 18th January 2021,
as almost no Google traffic originated from Uganda during this time
period (but traffic resumed thereafter).

{{<img src="images/11.png" title="Cloudflare Radar data from Uganda" alt="Cloudflare Radar data from Uganda">}}

**Source:** Cloudflare Radar, Change in Internet Traffic in Uganda
(January 2021), https://radar.cloudflare.com/ug?date_filter=last_30_days
(it is currently only possible to filter CloudFlare Radar data up until
30 days ago)

Uganda’s Internet connectivity shutdown is further corroborated by
[Cloudflare Radar data](https://radar.cloudflare.com/ug?date_filter=last_30_days), which
also shows a major drop in traffic from Uganda between the evening of
13th January 2021 to the morning of 18th January 2021.

Similarly to our previous case study on Myanmar, our comparison of
Mozilla telemetry from Uganda with other (relevant) public data sources
shows that high impact Internet connectivity shutdowns which affect all
networks are visible through Mozilla telemetry (when access to the
Internet is shut down completely and Firefox users cannot submit
telemetry to Mozilla servers).

## Belarus

Amid a [controversial presidential election](https://ooni.org/post/2020-belarus-internet-outages-website-censorship/#2020-belarusian-presidential-election),
Belarus experienced several [Internet outages](https://ooni.org/post/2020-belarus-internet-outages-website-censorship/#internet-outages-amid-2020-belarusian-presidential-election)
between 8th to 17th August 2020, with the most heavy disruptions being
noted between 9th to 12th August 2020.

In this case study, we compare Mozilla telemetry with IODA and Google
traffic data from Belarus in August 2020.

Based on our analysis of Mozilla telemetry from Belarus, we have
produced the following chart.

{{<img src="images/12.png" title="Mozilla telemetry from Belarus" alt="Mozilla telemetry from Belarus">}}

**Source:** Mozilla telemetry data from Belarus (August 2020): Custom
chart showing the drop in Mozilla telemetry between 9th-11th August
2020.

By looking at Mozilla telemetry (above) from Belarus on the evening of
9th August 2020, we can see that the number of locations submitting
metrics starts dropping at around 17:00 UTC. This is followed by a
complete absence of metrics until 10th August 2020 at 17:00 UTC.
Thereafter, we can see that metrics start being submitted again for some
hours until 20:00 UTC. After that there is another interruption in
metric submission, until traffic appears to fully resume on 11th August
2020 at 05:00 UTC.

The pattern observed in Mozilla telemetry data is consistent with what
we see in the
[IODA](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/BY&lastView=overview&from=1596114973&until=1598534173)
Active Probing and BGP feed data.

{{<img src="images/13.png" title="IODA data from Belarus" alt="IODA data from Belarus">}}

**Source:** Internet Outage Detection and Analysis (IODA): Belarus
(August 2020), https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/BY&lastView=overview&from=1596114973&until=1598534173

The first two drops in the evening of 9th August 2020 (between around
18:00 UTC to midnight UTC) and the evening of 10th August 2020 (between
16:00 UTC to around midnight) lineup very well with what we see in
Mozilla telemetry data. We do not, however, see the third drop in
Mozilla telemetry data on the next day, 11th August 2020 (during the
same time period).

[Google traffic data](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1595894400000;end:1598572799999;product:19;region:BY&lu=fraction_traffic)
further supports these Internet disruptions, as illustrated below.

{{<img src="images/14.png" title="Google traffic data from Belarus" alt="Google traffic data from Belarus">}}

**Source:** Google Transparency Reports: Traffic and disruptions to
Google in Belarus (August 2020), https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1595894400000;end:1598572799999;product:19;region:BY&lu=fraction_traffic

[Google traffic data](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1595894400000;end:1598572799999;product:19;region:BY&lu=fraction_traffic)
seems to be aligned with what is displayed in [IODA data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/BY&lastView=overview&from=1596114973&until=1598534173),
as we observe (in the above chart) 3 drops in Google traffic originating
from Belarus between 9th to 12th August 2020.

In an attempt to further characterize the Internet outages in Belarus
amid its 2020 presidential election, we tried to understand why Mozilla
telemetry does not display the third Internet outage that both [IODA data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/BY&lastView=overview&from=1596114973&until=1598534173)
and [Google traffic data](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1595894400000;end:1598572799999;product:19;region:BY&lu=fraction_traffic)
display in the evening of 11th August 2020. To this end, we looked at
the average proportion of timed out connections, as well as the average
proportion of connections reporting the network as being unreachable.

Based on this analysis, we produced the following chart, which includes
Mozilla telemetry from Belarus on both the average proportion of
connection timeouts and the average proportion of unreachable
connections.

{{<img src="images/15.png" title="Mozilla telemetry from Belarus" alt="Mozilla telemetry from Belarus">}}

**Source:** Mozilla telemetry data from Belarus (August 2020): Custom
charts showing the average proportion of connection timeouts and the
average proportion of unreachable connections.

Starting on 10th August 2020 (as illustrated above), we observe a spike
in the average proportion of connections timing out. As some telemetry
continued to be submitted during this period nonetheless, it may be
indicative of an unreliable connection. The high rate of connection
timeouts appears to persist until at least 23:00 UTC on 12th August
2020, which is consistent with the duration of the outage observed in
[IODA](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/BY&lastView=overview&from=1596114973&until=1598534173)
and [Google traffic data](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1595894400000;end:1598572799999;product:19;region:BY&lu=fraction_traffic).

It is important to note though that the reported timestamps do not
correspond to the exact time when the metric was collected, but to when
the metric was submitted to Mozilla telemetry servers. A Mozilla metric
may therefore refer to a prior period.

As for why we see this unusual pattern in Mozilla telemetry, we have the
following observations and hypothesis. It could be that the outages were
not “total”, but instead transitioned to being instances of throttling.
Moreover, a partial outage may have resulted in certain users
experiencing poor Internet connectivity for some time. It might be the
case that one of the upstream ISPs for certain users was out and some
backup routes had to be used.

The hypothesis of the upstream ISP going down and backup routes being
used is suggested by the fact that we observe an increase in locations
submitting telemetry data during the period of the outage, as
illustrated below.

{{<img src="images/16.png" title="Mozilla telemetry from Belarus" alt="Mozilla telemetry from Belarus">}}

**Source:** Mozilla telemetry data from Belarus (August 2020): Custom
chart showing the submission of telemetry by region in Belarus.

As is evident through the above chart, there are certain locations that
only appear to report Mozilla telemetry data during the period of the
outage. This indicates that there might have been some reshaping of the
network topology during the outage, leading to us to see users exit from
different locations.

Overall, Mozilla telemetry provides a strong signal of the first two
Internet outages (on 9th and 10th August 2020) in Belarus, similarly to
[IODA](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/BY&lastView=overview&from=1596114973&until=1598534173)
and [Google traffic data](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1595894400000;end:1598572799999;product:19;region:BY&lu=fraction_traffic).
The third outage (on 11th August 2020), however, is not directly visible
through Mozilla telemetry, but can potentially be inferred through the
spike in connection timeouts and unreachable connections. The fact that
we see an increase in such metrics from a variety of different locations
in Belarus (possibly as a result of network topology reshaping) on 11th
August 2020 adds to the overall Mozilla metric count, making it harder
to spot an outage on that day (in comparison to previous days).

## Iran

Iran [experienced two Internet outages](https://ioda.caida.org/ioda/2020-iran-report) in March 2020,
following its February 2020 legislative election. The first occurred on
3rd March 2020; it only lasted for about 1 hour, but it affected several
networks. The second outage occurred on 11th March 2020, only lasting
for 10 minutes, but also affecting several networks.

IODA data
[shows](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/IR&lastView=overview&from=1583179200&until=1583208000)
that all 3 of its signals experienced a significant drop in Iran between
around 00:50 UTC and 01:30 UTC on 3rd March 2020, as illustrated below.

{{<img src="images/17.png" title="IODA data from Iran" alt="IODA data from Iran">}}

**Source:** Internet Outage Detection and Analysis (IODA): Iran (March
2020), https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/IR&lastView=overview&from=1583179200&until=1583208000

IODA [found](https://ioda.caida.org/ioda/2020-iran-report#mar-3-2020)
that several of the affected networks (including cellular networks) had
outages that began nearly simultaneously (in contrast to [Iran’s
November 2019 nationwide Internet shutdown](https://ooni.org/post/2019-iran-internet-blackout/)), but the
extent of the outages varied across providers. Interestingly, two large
state-owned providers (Iran Telecom Co (AS58224) and ITC (AS12880)) only
observed small outages, whereas some non-state-owned providers (such as
Shatel (AS31549), Asiatech (AS43754), Mobin Net (AS50810), DATAK
(AS25124)) observed outages that appeared to affect the entirety of
their address-space.

A week later, on 11th March 2020, IODA
[showed](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/IR&lastView=overview&from=1583870400&until=1583985600)
that Iran experienced a second, but shorter (in terms of duration)
Internet outage. This outage affected multiple networks at approximately
14:00 UTC and lasted less than 10 minutes.

{{<img src="images/18.png" title="IODA data from Iran" alt="IODA data from Iran">}}

**Source:** Internet Outage Detection and Analysis (IODA): Iran (March
2020), https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/IR&lastView=overview&from=1583870400&until=1583985600

Similarly to the outage on 3rd March 2020, some large non-state-owned
ASes appear to have experienced a [more severe outage](https://ioda.caida.org/ioda/2020-iran-report#mar-11-2020)
compared to state-owned ASes during the outage on 11th March 2020.

To explore whether these outages are visible in Mozilla telemetry, we
analyzed their data and produced the following charts which display the
number of distinct locations submitting metrics and average proportion
of connection timeouts from Iran in March 2020.

{{<img src="images/19.png" title="Mozilla telemetry from Iran" alt="Mozilla telemetry from Iran">}}

**Source:** Mozilla telemetry data from Iran (February to March 2020):
Custom charts showing the number of distinct locations submitting
telemetry data and average proportion of connection timeouts from Iran.

However, as is evident from the above charts, we do not notice any
visible drop in the number of locations submitting Mozilla telemetry
data during the affected periods (3rd and 11th March 2020). This is
likely due to the fact that Mozilla telemetry is aggregated on an hourly
basis, therefore missing short-lived Internet outages that last less
than an hour.

It’s interesting to note though that while we don’t notice any anomalies
in the average proportion of connection timeouts during the first outage
(3rd March 2020), there is a visible spike during the second outage
(11th March 2020), even though it lasted far less (not even 10 minutes).
The reason for this remains quite unclear to us. However, we theorize
that it is possible that the second outage may have been caused by a
DDoS attack that targeted a major upstream provider, resulting in
increased latency (and therefore more connection timeouts). The first
outage may have had some other cause which isn’t evident in Mozilla
telemetry data.

It’s also worth mentioning that short-lived Internet shutdowns are
commonly not seen in other datasets either. [Google traffic
data](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1582934400000;end:1584316799999;product:19;region:IR&lu=fraction_traffic),
for example, does not present any significant signs of disruption in
Iran during this period.

# Conclusion

Mozilla telemetry is very useful for examining Internet connectivity
shutdowns.

Through the case studies of this research, we were able to detect strong
signals in Mozilla telemetry on **high impact Internet connectivity
shutdowns** (such as those observed in
[Uganda](https://ooni.org/post/2021-uganda-general-election-blocks-and-outage/#internet-outage-amid-2021-general-election)
and
[Myanmar](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/#outage-on-6th-february-2021)
earlier this year). In those cases, access to the Internet was shut down
entirely. As a result, we observe a complete absence of Mozilla
telemetry, strongly suggesting the presence of an Internet connectivity
shutdown. If researchers observe the same absence of metrics (for the
same country and date range) in other (relevant) public datasets as well
(such as [IODA](https://ioda.caida.org/ioda/dashboard) and [Google
traffic data](https://transparencyreport.google.com/traffic/overview)),
they have greater confidence in confirming an Internet shutdown event.

We were also able to observe lower impact Internet shutdowns through the
analysis of Mozilla telemetry. In
[Belarus](https://ooni.org/post/2020-belarus-internet-outages-website-censorship/#internet-outages-amid-2020-belarusian-presidential-election),
for example, the drop in Mozilla metrics on 9th and 10th August 2020
(amid the presidential election) provided a signal of Internet
disruptions, which we corroborated with other public datasets. However,
a third Internet disruption (on 11th August 2020), which is visible in
both
[IODA](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/BY&lastView=overview&from=1596114973&until=1598534173)
and [Google traffic data](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1595894400000;end:1598572799999;product:19;region:BY&lu=fraction_traffic),
is not visible in Mozilla telemetry. Yet, we observe a spike in
connection timeouts and unreachable connections in Mozilla telemetry on
that day from many more locations in Belarus, which might suggest that
there may have been some reshaping of the network topology during the
outage.

In
[Myanmar](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/#internet-outages),
while Mozilla telemetry provides a strong signal of a [high impact Internet shutdown on 6th February 2021](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/#outage-on-6th-february-2021),
the [lower impact Internet shutdown of 1st February 2021](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/#outage-on-1st-february-2021)
(which only affected certain networks for a shorter period of time) is
not very visible in Mozilla telemetry. We could, however, **potentially
infer the shutdown from the high percentage of connection timeouts** in
Mozilla telemetry from Myanmar on 1st February 2021.

In [Iran](https://ioda.caida.org/ioda/2020-iran-report#outages),
Mozilla telemetry does not provide signals of the two short-lived
Internet outages that occurred on 3rd and 11th March 2020 (both of which
lasted for less than an hour). This is likely due to the fact that
Mozilla telemetry is aggregated in hourly buckets, therefore missing
short-lived Internet outages.

Overall, Mozilla telemetry (in its current form) appears to be a useful
data source primarily for examining high impact Internet connectivity
shutdowns, which involve the complete shutdown of all Internet access in
a country. The high average proportion rate of connection timeouts in
Mozilla telemetry can also provide a signal of lower impact Internet
connectivity shutdowns (when they only affect certain networks, and/or
are short-lived), particularly when compared with other relevant data
sources. The geographical granularity in Mozilla telemetry data
potentially provides research opportunities to explore the reshaping of
network topology.

## Recommendations

Following our analysis of Mozilla telemetry for this study, we provide
the following friendly recommendations to Mozilla for enhancing the
research and advocacy use of the Mozilla dataset for the Internet
freedom community.

Our recommendations include:

1) **Publish Mozilla telemetry as open data.** By making a dataset of
Mozilla telemetry openly available, Mozilla will support research
and [advocacy](https://www.accessnow.org/keepiton/) efforts to
investigate Internet connectivity shutdowns worldwide. Mozilla
telemetry can potentially offer evidence of an Internet
connectivity shutdown.

2) **Provide AS-level aggregation.** Often, Internet shutdowns around
the world only affect certain networks. Such shutdown events are
currently hard to detect through Mozilla’s current dataset, which
does not provide AS-level aggregation. ASN information would
enable researchers and advocates to investigate which networks are
affected by outages, and to confirm lower impact Internet
connectivity shutdowns.

3) **Aggregate by collection time rather than submission time.**
Currently, Mozilla data is aggregated by the time data was
received by the ingestion pipeline, rather than when it’s
collected. This presents an important research limitation because,
in the absence of a working connection to the Mozilla telemetry
service, data might be stored and submitted up to 90 days later
compared to when the measurement was gathered by the device.

# Acknowledgements

We thank Mozilla for providing us access to Mozilla telemetry for this
research, and for considering our recommendations.
