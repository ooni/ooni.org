---
title: "Kenya: Censorship-free internet?"
author: "Maria Xynou (OONI), Arturo Filastò (OONI), Moses Karanja (CIPIT)"
date: "2016-12-27"
tags: ["kenya", "censorship", "country-ke"]
categories: ["report"]
---

Over the last five months we ran [OONI tests](https://github.com/TheTorProject/ooni-probe) in Kenya almost every day to examine
whether internet censorship events were occurring in the country. Hundreds of
thousands of [network measurements](https://explorer.ooni.torproject.org/country/KE) were collected and analyzed. [1,357 URLs](https://github.com/citizenlab/test-lists/tree/master/lists) were
tested for censorship, including both [international websites](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) and [sites that are more relevant to Kenya](https://github.com/citizenlab/test-lists/blob/master/lists/ke.csv) (e.g. local news outlets). Yet, after five months of
intensive testing from four local vantage points in Kenya, we found almost no
signs of internet censorship in the country.

# Methodology

As part of our study, we started off by updating the [Citizen Lab’s Kenyan test list](https://github.com/citizenlab/test-lists/blob/master/lists/ke.csv) with our local partner, Strathmore University’s [Centre for Intellectual Property and Information Technology Law (CIPIT)](http://cipit.org/). The aim of this was to ensure
that we would be testing as many URLs that are relevant to Kenya as possible and
which the government could potentially have an incentive to block. The types of
URLs that were added to the Kenyan list fall under [30 categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-proposed-category_codes.csv), ranging from
news media, file-sharing and culture, to provocative or objectionable
categories, like pornography, political criticism, and hate speech.

All of the URLs in both the [Kenyan list](https://github.com/citizenlab/test-lists/blob/master/lists/ke.csv) and the “[global list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)” (containing
internationally relevant websites) were tested for censorship through [OONI’s Web Connectivity test](https://ooni.torproject.org/nettest/web-connectivity/). This test is designed to examine whether access to websites
is blocked through DNS tampering, TCP connection RST/IP blocking, or by a
transparent HTTP proxy.

But our testing wasn’t limited to the blocking of websites. We also tested the
reachability of the [Tor anonymity network](https://www.torproject.org/) through OONI’s relevant [software test](https://ooni.torproject.org/nettest/vanilla-tor/),
and we ran other OONI tests ([HTTP invalid request line](https://ooni.torproject.org/nettest/http-invalid-request-line/) and [HTTP header field manipulation](https://ooni.torproject.org/nettest/http-header-field-manipulation/)) in an attempt to examine whether systems (“middle boxes”) that
could be responsible for censorship and/or surveillance were present in the
tested network.

OONI software tests were run from four local vantage points (AS36866, AS15399,
AS33771, AS36914) in Kenya. The testing period started on 26th July 2016 and
concluded on 14th December 2016. Once the testing period ended, we analyzed the
collected data with the aim of examining whether access to sites and services
was blocked, and whether proxy technologies were present in the tested network.

# Findings

Upon analysis of the [network measurements](https://explorer.ooni.torproject.org/country/KE) collected from Kenya, we found almost
no signs of internet censorship.

Out of all the [URLs](https://github.com/citizenlab/test-lists/tree/master/lists) that we tested, the only site that was [likely blocked](https://explorer.ooni.torproject.org/measurement/20161107T075602Z_AS36914_TjQtUZ2q8AOROLbiBqVmR9IlueW8SBSg5Ng69aSWShud2mQeJb?input=http:%2F%2Fwww.sportingbet.com) in
Kenya according to our testing is **http://www.sportingbet.com**. The table below
illustrates that most of our attempts to establish a TCP connection to this site
failed, indicating the possibility of TCP/IP blocking.

| URL                        | FALSE | cloudflare | dns | http-diff | http-failure | tcp_ip | anomalies |
|----------------------------|-------|------------|-----|-----------|--------------|--------|-----------|
| `http://www.sportingbet.com` | 0     | 0          | 0   | 1         | 1            | 46     | 48        |

The inaccessibility of http://www.sportingbet.com was also confirmed by our
local partner in Kenya. Given though that this site was only one of hundreds of
gambling sites that we tested, it remains unclear why there would be motivation
to block access to this particular site, and not others. It’s interesting to see
though that access to the same site appears to be [interfered](https://explorer.ooni.torproject.org/measurement/20161221T000038Z_AS29032_6B7aAG70pQs8UxMERv9ffjDqbCyqzbWL2k5pVhzSynKZC5ep48?input=http:%2F%2Fwww.sportingbet.com) with in other,
neighbouring African countries as well.

While other measurements presented similar anomalies, we excluded them from our
findings as false positives because (a) the sites in question presented high
failure rates from control vantage points, and (b) our local partner was able to
confirm the accessibility of the sites in question through a normal browser in
Kenya.

The [Tor network](https://www.torproject.org/) appeared to be accessible throughout the duration of our
testing, and we did not detect any systems (“middle boxes”) that could be
responsible for censorship and/or surveillance. However, this does not
necessarily mean that Kenyan ISPs are not using such systems, but rather that we
were not able to highlight their presence through the tests run in the specific
local networks (AS36866, AS15399, AS33771, AS36914) in Kenya.

The findings of this study are corroborated by our Kenyan partners who argue
that they never came across a block page or similar forms of censorship in the
country over the last five months. Last year however, a [site](http://www.isuhuruinkenya.co.ke/) mocking the
President’s frequent trips abroad was taken down due to pressure from the
government, according to [critics](http://nairobinews.nation.co.ke/news/website-mocking-tourist-president-shut-down-after-pressure-from-above/).

# Acknowledgement of Limitations

While it’s positive that almost no signs of internet censorship were detected as
part of this study, it’s important to highlight that these findings present
various limitations.

First, this study was limited to four local vantage points in Kenya (AS36866,
AS15399, AS33771, AS36914) and therefore does not include measurements from
other networks, where censorship events (including power cuts as indirect forms
of censorship) might have occurred. As such, the findings of this study are not
necessarily representative for Kenya on a countrywide level.

Second, the testing conducted under this study was limited to a set of URLs and
services. While a total of 1,357 different URLs were tested for censorship as
part of this study, not all the URLs on the internet were tested, indicating the
possibility that other sites and services not included in test lists might have
been blocked.

Third, the testing period was limited to nearly five months, starting on 26th
July 2016 and concluding on 14th December 2016. Therefore, censorship events
that may have occurred in the same network before and/or after the testing
period are not taken into account as part of this study.

Finally, the testing was limited to software tests that are designed to examine
very specific types of censorship (as explained in the methodology section
above). Other types of censorship that are not examined as part of [OONI’s software tests](https://github.com/TheTorProject/ooni-probe) are not analyzed as part of this study.

# Contribute to this study

Even when a country appears to have no censorship, it’s important to monitor
internet censorship nonetheless across time. Laws and policies change, and
decisions around internet censorship can change along with them.

OONI’s software (called [ooniprobe](https://github.com/TheTorProject/ooni-probe)) allows users around the world to
automatically test their networks every day for signs of internet censorship.
When and if internet censorship occurs, network data demonstrating how it’s
implemented will be collected, analyzed and [published](https://explorer.ooni.torproject.org/world/). This can help increase
transparency around internet censorship.

In light of the limitations outlined above, we encourage individuals in Kenya to
contribute to this study through the following ways:

1. If you’re a Linux or macOS user, consider running ooniprobe (especially if you
can cover different vantage points!). Learn how to do so [here](https://ooni.torproject.org/install/ooniprobe/). 

2. If you’re a
Windows user or are interested in running ooniprobe from a separate device,
consider running ooniprobe’s distribution for Raspberry Pis. Learn how to do so
[here](https://ooni.torproject.org/install/lepidopter/). 

3. If you have insights on which URLs to test for censorship, consider
contributing to the [Kenyan test list](https://github.com/citizenlab/test-lists/blob/master/lists/ke.csv). Find information on how to do so [here](https://ooni.torproject.org/get-involved/contribute-test-lists/).

Questions? Contact us at contact@openobservatory.org.
