---
title: "Nigeria’s 2019 elections through the lens of network measurements"
author: "Babatunde Okunoye (Paradigm Initiative), Maria Xynou (OONI), Arturo Filastò (OONI), Gabreal Odunsi (Paradigm Initiative)"
date: "2019-05-29"
tags: ["censorship", "research-report", "country-ng"]
categories: ["report"]
---

Censorship events are increasingly being reported during political
events in Africa (and elsewhere around the world). A few examples
include the [social media disruptions in Mali](https://ooni.torproject.org/post/mali-disruptions-amid-2018-election/)
amid its 2018 presidential election, the [blocking of social media in Uganda](https://ooni.torproject.org/post/uganda-social-media-blocked/)
during its 2016 general elections, and the complete [internet blackout in The Gambia](https://ooni.torproject.org/post/gambia-internet-shutdown/)
during its 2016 presidential election.

Leading up to and during Nigeria’s 2019 general elections, we
collaborated with our local partner, [Paradigm Initiative](https://paradigmhq.org/), on measuring networks in the
country to monitor potential censorship events.

Our findings are included in a joint research report published today with
Paradigm Initiative. The full report, titled **“The 2019 Nigerian
Elections through the lens of digital rights”**, can be **[downloaded here](https://paradigmhq.org/download/the-2019-nigerian-elections-through-the-lens-of-digital-rights/)**.

This post summarizes OONI findings based on the analysis of all
[network measurements](https://explorer.ooni.io/country/NG) collected
during Nigeria’s 2019 general election period.

* [Methodology](#methodology)

    * [Test list updates](#test-list-updates)

    * [OONI Probe testing](#ooni-probe-testing)

    * [Data analysis](#data-analysis)

* [Findings](#findings)

    * [Blocking of sites associated to Biafra](#blocking-of-sites-associated-to-biafra)

        * [MTN](#mtn)

        * [Airtel](#airtel)

        * [Globacom](#globacom)

        * [Cobranet](#cobranet)

* [Conclusion](#conclusion)

# Methodology

The aim of this study is to examine whether and to what extent internet
censorship occurred during Nigeria’s 2019 general elections.

To this end, internet censorship was measured in Nigeria through the use
of [OONI Probe](https://ooni.io/install/), which is [free and open source software](https://github.com/ooni) designed to measure various
forms of network interference. More specifically, OONI Probe consists of
a number of tests designed to measure:

* Blocking of [websites](https://ooni.io/nettest/web-connectivity/);

* Blocking of [WhatsApp](https://ooni.io/nettest/whatsapp/),
[Facebook Messenger](https://ooni.io/nettest/facebook-messenger/), and
[Telegram](https://ooni.io/nettest/telegram/);

* Blocking of the [Tor network](https://ooni.io/nettest/vanilla-tor/) and [Tor bridges](https://ooni.io/nettest/tor-bridge-reachability/);

* Presence of [middleboxes](https://ooni.io/nettest/http-invalid-request-line/);

* [Speed and performance](https://ooni.io/nettest/ndt/) of networks;

* [Video streaming](https://ooni.io/nettest/dash/) performance.

The methodology of this study involves:

* Reviewing the [Citizen Lab’s test list for Nigeria](https://github.com/citizenlab/test-lists/blob/master/lists/ng.csv)

* Running [OONI Probe](https://ooni.io/install/) tests from local vantage points

* Data analysis

## Test list updates

OONI Probe is configured to measure the blocking of URLs included in the
[Citizen Lab’s test list repository on GitHub](https://github.com/citizenlab/test-lists).

A [test list](https://ooni.io/get-involved/contribute-test-lists/#what-are-test-lists)
is a list of URLs that are measured for censorship, and may contain
sites that are known to be blocked, as well as sites that are known to
currently be accessible. The Citizen Lab’s [test list methodology](https://ooni.io/get-involved/contribute-test-lists/)
consists of two types of test lists:

* [Global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv): including internationally-relevant websites (such as facebook.com)

* [Country-specific test lists](https://github.com/citizenlab/test-lists/tree/master/lists): including websites that are relevant to a specific country

Given that OONI Probe only measures the websites included in these
lists, the measurement findings will only pertain to those specific
websites. [Updating these lists](https://ooni.io/get-involved/contribute-test-lists/#contributing-to-test-lists)
on an ongoing basis is therefore crucial in ensuring that the tested
websites are operational and relevant to the questions that researchers
are interested in answering.

As part of this study, we collaborated with Paradigm Initiative on
making [multiple updates](https://github.com/citizenlab/test-lists/pulls?utf8=%E2%9C%93&q=NG)
to the [Nigerian test list](https://github.com/citizenlab/test-lists/blob/master/lists/ng.csv).
More recently, these
[updates](https://github.com/citizenlab/test-lists/pull/423) included
adding a number of Nigerian media websites, local human rights sites,
and political sites - particularly sites related to the Nigerian 2019
general elections. This helped ensure that all OONI Probe users in
Nigeria would test a wide range of media and political websites,
monitoring the accessibility of these sites during the election period.

## OONI Probe testing

OONI Probe tests have been run in Nigeria [since 2014](https://explorer.ooni.io/country/NG) from multiple local vantage
points.

As part of this study, Paradigm Initiative coordinated with local OONI
Probe users across Nigeria to run tests on multiple different networks.
Most tests were run by volunteers using the [OONI Probe mobile app](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe),
which doesn’t currently include the [Vanilla Tor](https://ooni.io/nettest/vanilla-tor/) and [Tor bridge reachability tests](https://ooni.io/nettest/tor-bridge-reachability/)
(these tests are only available on the [OONI Probe versions for macOS and Linux](https://ooni.io/install/ooniprobe)). Measurements from these
two tests are therefore out of scope for this study.

Most OONI Probe tests run as part of this study measured the [blocking of websites](https://ooni.io/nettest/web-connectivity/), as well as the
potential blocking of [WhatsApp](https://ooni.io/nettest/whatsapp/)
and [Facebook Messenger](https://ooni.io/nettest/facebook-messenger/).
For more targeted website testing, we generated [OONI Run](https://run.ooni.io/) links, containing lists of Nigerian media
and political websites, which we shared with local OONI Probe users.
This helped ensure that sites that were more relevant to the elections
were tested as much as possible (and from as many different ISPs as
possible).

Throughout February 2019, 5,1660 [OONI Probe measurements](https://explorer.ooni.io/country/NG) were collected from
16 distinct ASNs in Nigeria.

## Data analysis

OONI Probe [measurements](https://explorer.ooni.io/country/NG) have
almost continuously been collected from Nigeria since 2014. Since the
aim of this study is to examine potential blocking of websites during
Nigeria’s 2019 general elections, we limited our analysis to
measurements collected from 1st February 2019 to 31st March 2019.

By default, as soon as anyone runs [OONI Probe](https://ooni.io/install/), their network measurements are
automatically sent to OONI’s servers, processed by [OONI’s data processing pipeline](https://github.com/ooni/pipeline), and published
on [OONI Explorer](https://explorer.ooni.io/world/) and on the [OONI API](https://api.ooni.io/). As a result, all OONI Probe measurements
collected from Nigeria have been [openly published](https://explorer.ooni.io/country/NG) since the tests were
run, and the analysis of this study is based on these openly published
measurements.

While published measurements are pre-processed based on a set of
heuristics (for example, depending on [test methodologies](https://github.com/ooni/spec/tree/master/nettests)),
further data analysis is required to rule out false positives, examine
network anomalies in more depth, check whether network anomalies are
triggered by other factors (such as server-side blocking), and examine
network anomalies over time and across ISPs. This is especially
necessary when ISPs don’t serve blockpages, but implement internet
censorship through the use of more subtle techniques which may make
confirming censorship more challenging.

# Findings

Most of the tested websites (i.e. the URLs included in the Citizen Lab’s
[global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)
and
[Nigerian](https://github.com/citizenlab/test-lists/blob/master/lists/ng.csv)
test lists) were [accessible](https://explorer.ooni.io/country/NG) in
Nigeria throughout the 2019 general elections. The testing of
[WhatsApp](https://explorer.ooni.io/measurement/20190225T135922Z_AS29465_SK5hgzHOfoYl3ZbsKJ0gpCIB0RnWi6I5c1ZUJ2BzDnipg5h5nB)
and [Facebook Messenger](https://explorer.ooni.io/measurement/20190225T135946Z_AS29465_JJCz0kjhIJU0YsXKdVdlsAhGXQFqMajFeNvAEEp9wWY9HcDAp4)
didn’t present any signs of network interference during this period
either. OONI measurements therefore suggest that Nigerians had access to
popular online platforms throughout the 2019 general elections.

Even though new censorship events didn’t emerge during Nigeria’s latest
elections, old blocks appeared to remain in place.

Last year, OONI and Paradigm Initiative [co-published a research report](https://ooni.torproject.org/documents/nigeria-report.pdf) which
offered an analysis of [OONI measurements collected from Nigeria](https://explorer.ooni.io/country/NG). Our findings showed that
while most tested sites and services were accessible (including
internationally popular platforms, such as Facebook and WhatsApp), a
number of websites associated to the secessionist movement of Biafra
were blocked.

Our latest analysis of OONI measurements shows that the same sites
remain blocked in Nigeria.

## Blocking of sites associated to Biafra

The Nigerian Civil War between 1967 - 1970 (also known as the Biafran
War) was fought between the government of Nigeria and the secessionist
state of Biafra. The secession of Biafra was mostly led by the Igbo
ethnic group due to economic, cultural, and religious tensions among the
peoples of Nigeria. This secessionist movement, which supports the
(re-)creation of an independent state of Biafra, continues to this day.

In October 2017, Nigeria’s National Communications Commission (NCC)
[reportedly ordered](https://paradigmhq.org/president-buharis-secret-war-on-free-speech/)
the blocking of 21 websites, almost all of which are associated to the
secessionist movement of Biafra. Last year, these 21 sites were tested
in Nigeria, the blocking of which was
[confirmed](https://ooni.io/post/nigeria-internet-censorship/) for
most of them (excluding naij.com which was only temporarily blocked) on
3 local networks: Globacom (AS37148), MTN (AS29465), and Airtel
(AS36873).

Recent OONI data analysis (of
[measurements](https://explorer.ooni.io/country/NG) collected between
1st February 2019 to 31st March 2019) not only shows that these sites
remain blocked in Nigeria, but that they are also blocked by most local
ISPs.

While OONI measurements have been collected from 16 different ASNs
during this study, we have limited our analysis to 7 ASNs from which
most measurements were collected from: MTN (AS29465), Airtel (AS36873),
Cobranet (AS35074), Swift Networks (AS36923), EMTS (AS37076), Globacom
(AS37148), and Spectranet (AS37340).

Our analysis of measurements from all 7 ASNs is available and
**[visualized here](https://public.tableau.com/profile/arturo.filast.#!/vizhome/Nigeria2019byISP/BlockingofwebsitesinNigeriabyISP)**.

The following sections show how the blocking of sites associated to
Biafra differs across 3 of those ISPs: MTN, Airtel, and Globacom. We
have chosen these 3 ISPs because (a) they allow us to compare findings
with [OONI Probe testing of the same sites from last year](https://ooni.io/post/nigeria-internet-censorship/), and (b) the
largest volume of stable measurements was collected from these 3
networks during the testing period of this study.

### MTN

MTN (AS29465) continues to block sites associated to Biafra by means of
DNS tampering. The same censorship techniques were also
[observed](https://ooni.io/post/nigeria-internet-censorship/) last
year.

The following chart shows that almost all measurements consistently
presented signs of DNS tampering between February 2019 to March 2019.

![MTN graph](/post/nigeria/mtn.png)

Source: OONI measurements collected from Nigeria, [https://explorer.ooni.io/country/NG](https://explorer.ooni.io/country/NG)

When blocking sites by means of DNS, MTN appears to [resolve the domains of blocked websites to a private IP space](https://explorer.ooni.io/measurement/20190220T134019Z_AS29465_ceaRsGue5q2MAR4mbl5AqD7CuEegg1LSla0OCzf4BZbalFJGgc?input=http:%2F%2Fbiafraradio.com%2F)
(i.e. 192.0.0.1). Previous measurements collected over the past year
have also [shown](https://ooni.io/post/nigeria-internet-censorship/)
this pattern. It’s possible that MTN may resolve blocked domains with
unrouted IP addresses so that clients do not generate extra traffic (and
potentially overload their network) when accessing blocked domains.

Previously, MTN used to [block www.biafra.club by means of DNS](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.biafra.club),
but recent measurements show that this block has been lifted - possibly
because this site is no longer operational. Quite similarly, MTN does
not block restoringbiafranationhood.info, which is not operational
either.

What’s noteworthy is that, unlike the other sites, biafraforum.com is
not blocked by means of DNS, but its testing presents HTTP failures.
When this site was first tested in November 2017 (following the NCC’s
blocking order), it was initially found to be
[accessible](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.biafraforum.com)
on MTN. When it was tested again in April 2018, it presented a
[connection error and signs of HTTP blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.biafraforum.com).
Similarly, recent measurements collected from February 2019 to March
2019 consistently present the [same anomalies](https://explorer.ooni.io/measurement/20190315T112234Z_AS29465_019dX4gFZkBRMhuZjIPPiqPXaM5HMsUw5ZwveTh98kcwxXNAaa?input=http:%2F%2Fwww.biafraforum.com%2F)
on the MTN network. This suggests that MTN is using a different
censorship technique to block access to biafraforum.com (in comparison
to other sites).

### Airtel

Similarly to [measurements collected in 2018](https://ooni.io/post/nigeria-internet-censorship/), recent [OONI measurements](https://explorer.ooni.io/country/NG) collected between
February 2019 to March 2019 suggest that Airtel (AS36873) continues to
block numerous sites associated to Biafra by means of HTTP blocking.

The following chart illustrates that websites associated to Biafra
consistently presented HTTP failures throughout the testing period.

![Airtel graph](/post/nigeria/airtel.png)

Source: OONI measurements collected from Nigeria, [https://explorer.ooni.io/country/NG](https://explorer.ooni.io/country/NG)

Exceptions include www.biafra.club and restoringbiafranationhood.info,
neither of which are operational (and, similarly to MTN, Airtel appears
to have
[unblocked](https://explorer.ooni.io/measurement/20190316T164719Z_AS36873_XkGCSXakxzaD0TZvoWyYk9x63e5MG1xlZSrtaoCTlhrkJcA3i7?input=http:%2F%2Fwww.biafra.club%2F)
access to www.biafra.club), as well as www.bafmembers.com, which
[remains accessible](https://explorer.ooni.io/measurement/20190316T164719Z_AS36873_XkGCSXakxzaD0TZvoWyYk9x63e5MG1xlZSrtaoCTlhrkJcA3i7?input=http:%2F%2Fwww.bafmembers.com%2F).

Last year, biafrasay.com was [not tested on Airtel](https://ooni.io/post/nigeria-internet-censorship/) and the lack
of measurements prevented us from evaluating whether the website was
blocked on that network or not. Recent OONI measurements present [HTTP failures](https://explorer.ooni.io/measurement/20190316T164719Z_AS36873_XkGCSXakxzaD0TZvoWyYk9x63e5MG1xlZSrtaoCTlhrkJcA3i7?input=http:%2F%2Fwww.biafrasay.com%2F),
suggesting that Airtel blocks access to biafrasay.com. While it’s
unclear when the blocking started, OONI measurements show that the site
has been [blocked on Airtel (AS36873) since at least 11th February 2019](https://explorer.ooni.io/measurement/20190211T151858Z_AS36873_BRDJKEZakpT81kJZfKXC4KOGPigSH1Q2rEcuJVClCwUI9RV3IK?input=http:%2F%2Fwww.biafrasay.com%2F).

### Globacom

Recent [OONI measurements](https://explorer.ooni.io/country/NG) show
that Globacom (AS37148) continues (in comparison to [last year](https://ooni.io/post/nigeria-internet-censorship/)) to block
sites associated to Biafra primarily by means of TCP/IP blocking.

![Globacom graph](/post/nigeria/globacom.png)

Source: OONI measurements collected from Nigeria, [https://explorer.ooni.io/country/NG](https://explorer.ooni.io/country/NG)

The results, illustrated in the chart above, include three Biafra sites
(biafraland.com, biafraradio.com, biafra.net) that were not tested last
year on Globacom. Most measurements from the testing of [biafraland.com suggest TCP/IP blocking](https://explorer.ooni.io/measurement/20190315T142834Z_AS37148_3pinpqfrQ2WwLeMxeiJpR26N0Zak6YfFOoKm2BvXzywGGhlfMf?input=http:%2F%2Fwww.biafraland.com%2F),
while *all* measurements collected from the testing of [biafraradio.com consistently presented TCP anomalies](https://explorer.ooni.io/measurement/20190316T172846Z_AS37148_Masqf2813eG5AQuDUj2KxdaSshhnQOP487qwpI45v6BTkMCxSg?input=http:%2F%2Fbiafraradio.com%2F).
Biafraradio.com was, therefore, most certainly inaccessible during the
testing period, and most likely
[blocked](https://explorer.ooni.io/measurement/20190316T172846Z_AS37148_Masqf2813eG5AQuDUj2KxdaSshhnQOP487qwpI45v6BTkMCxSg?input=http:%2F%2Fbiafraradio.com%2F).
The recent testing of biafra.net was less conclusive (but the domain of
the site has expired).

Similarly to MTN and Airtel, Globacom refrained from blocking
www.biafra.club and restoringbiafranationhood.info (neither of which are
operational). While TCP anomalies are observed with regards to the
testing of www.bafmembers.com, some connections are successful. It is
therefore quite unclear if the TCP anomalies were caused by transient
network failures, or if access to the site was intentionally blocked.
Similar inconsistencies are also observed in the testing of other sites
as well (as illustrated in the above chart), suggesting limitations to
how internet censorship is implemented on this network.

### Cobranet

On Cobranet (AS35074) [measurements collected from the testing of biafranet.com reveal the presence of a squid proxy](https://explorer.ooni.io/measurement/20190228T132341Z_AS35074_MimGsUHp6Nd1LChGc0FKgqFvcIHUbHQX1OHfvn1jr9bCMsDln6?input=http:%2F%2Fbiafranet.com%2F),
which is part of a zentyal installation. Judging by the software run on
this proxy, it’s probably not carrier grade, but rather on the local
network of the user. The relevant
[measurements](https://explorer.ooni.io/measurement/20190228T132341Z_AS35074_MimGsUHp6Nd1LChGc0FKgqFvcIHUbHQX1OHfvn1jr9bCMsDln6?input=http:%2F%2Fbiafranet.com%2F)
show that the proxy says “connection reset by peer”, confirming the
blocking of biafranet.com (since it does not respond to the local
proxy).

# Conclusion

Thousands of [OONI measurements](https://explorer.ooni.io/country/NG)
collected from 16 different ASNs between 1st February 2019 to 31st March
2019 suggest that major internet services were accessible in Nigeria
throughout the 2019 general elections. Most of the tested websites were
found to be accessible, while popular instant messaging platforms,
[WhatsApp](https://explorer.ooni.io/measurement/20190223T065922Z_AS36873_Q3WIXWpBwidF2oq7UMHS1XBljxBnZTJ0F4fe0mNzx0o08rH5n7)
and [Facebook Messenger](https://explorer.ooni.io/measurement/20190223T065937Z_AS36873_CQ57gHZAqyCNnnQCwxtxa73JmsmM0CYG3Mvm4NRYwkyizzFACr),
were working as well.

However, a number of sites hosting content associated to the Biafra
secessionist movement remained blocked. Recent [OONI measurements](https://explorer.ooni.io/country/NG) show that Globacom
continues to block these sites by means of TCP/IP blocking, MTN by means
of DNS tampering, and Airtel at the HTTP layer. This is strongly
suggested by the fact that the same network anomalies (in [comparison to last year](https://ooni.io/post/nigeria-internet-censorship/)) are
observed on the same networks with regards to the testing of the same
list of sites. Out of more than a thousand URLs tested in total, only
sites associated to Biafra consistently presented network anomalies
throughout the testing period.

This study can be reproduced and expanded upon through the use of [OONI Probe](https://ooni.io/install/), which is [free and open source software](https://github.com/ooni) designed to measure various forms of
network interference, as well as through the use of [OONI data](https://ooni.io/data/), which is openly available.
