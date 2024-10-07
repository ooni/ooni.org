---
title: "Myanmar: Data on internet blocks and internet outages following military coup"
description: "This report shares OONI measurements on internet blocks in Myanmar, and IODA data on the internet outages following the military coup."
author: "Maria Xynou (OONI), Ramakrishna Padmanabhan (CAIDA, UC San Diego), Phyu Kyaw, Myanmar ICT for Development Organization (MIDO), Arturo Filastò (OONI)"
date: "2021-03-09"
tags: ["myanmar", "censorship", "blackout", "military-coup", "country-mm", "theme-news_media", "theme-social_media", "theme-circumvention"]
categories: ["report"]
---

On 1st February 2021, the military in Myanmar carried out a [coup d’etat](https://www.bbc.com/news/world-asia-55882489), seizing power
and detaining the country’s State Counsellor (equivalent to a prime
minister) and other democratically elected leaders.

A few days after the coup, ISPs in Myanmar started [blocking access to Facebook services](https://www.reuters.com/article/us-myanmar-politics-facebook-idUSKBN2A32ZE).
On 5th February 2021, they started [blocking access to Twitter and Instagram](https://edition.cnn.com/2021/02/05/tech/myanmar-blocks-twitter-instagram/index.html)
as well. On 6th February 2021, access to [the internet was shut down entirely for nearly 30 hours](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612437274&until=1612782874).
When internet connectivity was restored, social media blocks remained in
place and they are currently ongoing. Since 15th February 2021, access
to the internet has been [shut down every night](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1613219264&until=1614774464)
(between around 1am to 9am local time) in Myanmar. More recently, some
ISPs in Myanmar appear to have started [blocking access to Wikipedia](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&test_name=web_connectivity&domain=www.wikipedia.org&until=2021-03-05)
as well.

In this report, we share [OONI data](https://explorer.ooni.org/search?since=2021-01-27&probe_cc=MM&only=anomalies)
on the blocking of social media, Wikipedia, and circumvention tool sites
in Myanmar following the military coup. To demonstrate the internet
outages that Myanmar experienced every night over the past weeks, we
share [IODA data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612569600&until=1614989280)
(and other public data sources monitoring internet traffic).

* [Background](#background)

* [Methods](#methods)

* [Findings](#findings)

	* [Blocking of social media](#blocking-of-social-media)

	* [Blocking of Wikipedia](#blocking-of-wikipedia)

	* [Blocking of circumvention tool sites](#blocking-of-circumvention-tool-sites)

	* [Other ongoing blocks](#other-ongoing-blocks)

		* [News media](#news-media)

		* [Justice for Myanmar](#justice-for-myanmar)

		* [COVID-19 site](#covid-19-site)

	* [Internet outages](#internet-outages)

		* [Outage on 1st February 2021](#outage-on-1st-february-2021)

		* [Outage on 6th February 2021](#outage-on-6th-february-2021)

		* [Ongoing nightly outages](#ongoing-nightly-outages)

* [Conclusion](#conclusion)

* [Acknowledgements](#acknowledgements)

# Background

In November 2020, the [National League for Democracy (NLD)](https://nld-official.org/en/) party
[won](https://www.bbc.com/news/world-asia-54899170) the majority in
Myanmar’s 2020 general election. The NLD governed Myanmar since
[winning the 2015 general election](https://www.bbc.com/news/world-asia-33547036), with [Aung San Suu Kyi](https://www.bbc.com/news/world-asia-pacific-11685977)
serving as the country’s State Counsellor (equivalent to a prime
minister). Aung San Suu Kyi was once seen as a beacon for human rights,
having [won](https://www.bbc.com/news/world-asia-pacific-11685977) the
Nobel Peace Prize in 1991 amid 15 years in detention for her
pro-democracy struggle. But her [inaction in response to the genocide of the Muslim Rohingya people in Rakhine State](https://www.nytimes.com/2019/12/11/world/asia/aung-san-suu-kyi-rohingya-myanmar-genocide-hague.html)
(which started in October 2016) and her refusal to acknowledge that
Myanmar’s military had committed masacres drew international criticism.

Observers [questioned](https://www.bbc.com/news/world-asia-54899170)
the credibility of the November 2020 election because of the
disenfranchisement of the Rohingya, particularly since Myanmar’s
electoral commission cancelled voting in large parts of Rakhine State
and other conflict-hit states. Nonetheless, the NLD
[reported](https://www.bbc.com/news/world-asia-54899170) that the
latest election was a “landslide” victory and announced that it would be
inviting ethnic minority parties to work with it.

However, the military-backed opposition
[disputed](https://www.bbc.com/news/world-asia-54899170) the election
results, accusing the government of irregularities, and demanding a
rerun of the election. The country’s Union Election Commission
determined that the election was done “fairly and free”, and that there
would *not* be an election re-run.

In response, military leaders in Myanmar [seized power in a coup](https://www.bbc.com/news/world-asia-55882489) on 1st February
2021, detaining Aung San Suu Kyi and other elected leaders. A night-time
curfew has been imposed by the military, and a one-year state of
emergency has been declared. Following the coup, the military instructed
local Internet Service Providers (ISPs) to [block access to social media services](https://www.forbes.com/sites/rachelsandler/2021/02/05/social-media-blackout-myanmar-military-government-blocks-twitter-instagram/),
and to shut down the internet every night (starting from around 1am
local time on 15th February 2021). They have also [amended the Electronic Transactions Law](https://data.opendevelopmentmyanmar.net/en/dataset/law-amending-the-electronic-transactions-law-15-feb-2021),
making the spread of “fake news or disinformation” online punishable by
up to 3 years in prison. The amended Electronic Transactions Law also
includes
[provisions](https://www.myanmar-now.org/en/news/amended-law-throws-myanmar-back-into-media-dark-age)
that the military initially tried to introduce in a new cybersecurity
bill drafted shortly after it seized power (but that bill was rejected
by stakeholders in Myanmar). These amendments
[reportedly](https://www.myanmar-now.org/en/news/amended-law-throws-myanmar-back-into-media-dark-age)
raise concerns with respect to media freedom, access to information, and
online freedom of expression in Myanmar.

# Methods

To investigate the blocking of online platforms, we analyzed [OONI measurements collected from Myanmar](https://explorer.ooni.org/search?since=2021-01-27&probe_cc=MM)
(similarly to our previous studies in
[2020](https://ooni.org/post/2020-myanmar-blocks-websites-amid-covid19/)
and [2017](https://ooni.org/post/myanmar-report/)). OONI measurements
are regularly collected and contributed by users of the [OONI Probe app](https://ooni.org/install/), which is [free and open source](https://github.com/ooni), designed to
[measure](https://ooni.org/nettest/) various forms of internet
censorship and network interference.

More specifically, we limited our analysis to [OONI measurements](https://explorer.ooni.org/search?since=2021-01-27&probe_cc=MM)
collected from Myanmar between **1st February 2021 to 25th February
2021** in order to examine how internet censorship has changed in the
country following the military coup. We further limited our analysis to
OONI measurements pertaining to the testing of social media websites and
apps, as well as to the testing of `www.wikipedia.org`, circumvention
tool websites, news media websites (which we
[reported](https://ooni.org/post/2020-myanmar-blocks-websites-amid-covid19/#blocked-news-outlets)
to be blocked last year), `www.justiceformyanmar.org` and
`coronavirus.app` (which we found blocked as part of recent OONI data
analysis).

While a wide range of websites can be tested through [OONI’s Web Connectivity test](https://ooni.org/nettest/web-connectivity/)
(designed to measure the TCP/IP, DNS, and HTTP blocking of websites),
the [OONI Probe app](https://ooni.org/install/) currently only
includes tests for the following social media apps:
[WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), and
[Telegram](https://ooni.org/nettest/telegram/). Our analysis was
therefore limited to the testing of these specific apps.

Our findings are also limited by the type and volume of measurements
contributed by volunteer [OONI Probe](https://ooni.org/install/) users
in Myanmar (i.e. if a blocked service was not tested in Myanmar in the
analysis period, relevant measurement findings will not be available).

To explore the internet outages (i.e. when access to the internet was
shut down entirely) in Myanmar, we referred to the following public data
sources: [Internet Outage Detection and Analysis (IODA)](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1613219264&until=1614774464),
[Oracle’s Internet Intelligence Map](https://map.internetintel.oracle.com/?root=national&country=MM),
and [Google traffic data](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1612137600000;end:1614729599999;product:19;region:MM&lu=fraction_traffic).
Our goal was to check whether the signals and timing of the internet
outages in Myanmar can be verified and corroborated by all three
separate public data sources.

# Findings

## Blocking of social media

{{<img src="images/FB-MM.jpeg" title="Facebook blocked in Myanmar" alt="Facebook blocked in Myanmar">}}

Merely three days after the military coup, ISPs in Myanmar started
blocking access to Facebook services.

On 4th February 2021, OONI data showed that access to
[facebook.com](https://explorer.ooni.org/search?until=2021-02-05&since=2021-01-05&domain=www.facebook.com&probe_cc=MM),
[Facebook Messenger](https://explorer.ooni.org/search?until=2021-02-05&since=2021-01-05&probe_cc=MM&test_name=facebook_messenger),
and
[WhatsApp](https://explorer.ooni.org/search?until=2021-02-05&since=2021-01-05&probe_cc=MM&test_name=whatsapp)
was blocked on several networks in Myanmar. This was also
[disclosed](https://www.telenor.com/directive-to-block-social-media-service/)
by Telenor, who shared that they received a directive from Myanmar’s
Ministry of Transport and Communications on 3rd February 2021 to
temporarily block Facebook. This directive was
[reportedly](https://www.cnet.com/news/facebook-temporarily-blocked-in-myanmar-after-military-coup/)
motivated by concerns over the spread of misinformation on Facebook.
Quite similarly, Facebook
[reportedly](https://edition.cnn.com/2021/02/12/tech/facebook-myanmar-military-intl-hnk/index.html)
restricted the distribution of content by profiles and accounts run by
Myanmar’s military in an attempt to limit the spread of misinformation.
While it was initially
[reported](https://techcrunch.com/2021/02/03/myanmar-orders-telecom-networks-to-temporarily-block-facebook/)
that Facebook would remain blocked until 7th February 2021, OONI data
[shows](https://explorer.ooni.org/search?since=2021-01-31&domain=www.facebook.com&probe_cc=MM)
that access to Facebook services remains blocked on several networks in
Myanmar.

On 5th February 2021, ISPs in Myanmar appear to have started [blocking access to Twitter](https://explorer.ooni.org/search?until=2021-02-14&since=2021-01-15&domain=twitter.com&probe_cc=MM)
as well. Many OONI measurements collected thereafter suggest the ongoing
[blocking](https://explorer.ooni.org/search?since=2021-01-31&domain=twitter.com&probe_cc=MM)
of `twitter.com` on several networks in Myanmar. OONI measurements
also suggest the
[blocking](https://explorer.ooni.org/search?since=2021-01-15&domain=www.instagram.com&probe_cc=MM)
of `www.instagram.com` from 10th February 2021 onwards (though it’s
possible that the blocking may have started earlier, as [very few measurements](https://explorer.ooni.org/search?until=2021-02-14&since=2021-01-15&domain=www.instagram.com&probe_cc=MM)
testing `www.instagram.com` are available from the previous days).

The following chart illustrates the blocking of social media in Myanmar
in February 2021 (following the military coup) based on OONI data.

{{<img src="images/social-media.png" title="Social Media Blocks in Myanmar" alt="Social Media Blocks in Myanmar">}}

**Source:** OONI measurements collected from Myanmar between 1st
February 2021 to 25th February 2021,
[https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-25](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-25)

The above chart aggregates the [OONI Probe](https://ooni.org/install/)
measurement coverage that each social media domain received (across
networks in Myanmar) between 1st February 2021 to 25th February 2021.
The measurements are colour-coded based on the [Web Connectivity](https://ooni.org/nettest/web-connectivity/) test results;
it is evident that most measurements presented
[TCP/IP](https://ooni.org/support/glossary/#tcp) anomalies, suggesting
the IP blocking of Twitter, Facebook, WhatsApp, and Instagram on most
tested networks in Myanmar.

In some cases though (on the following 6 networks: AS58952, AS133385,
AS136255, AS63852, AS18399, AS136783), we see these social media sites
blocked in different ways. Measurements that are annotated as
`confirmed` in the above chart pertain to cases where we were able to
*automatically confirm* blocking based on the detection of [block pages](https://ooni.org/support/glossary/#block-page). We were able to
confirm blocking because OONI network measurement data
[shows](https://explorer.ooni.org/measurement/20210217T163818Z_webconnectivity_MM_58952_n1_jYRBeNMNDaXRkXAo?input=http%3A%2F%2Fwww.facebook.com)
that those ISPs implemented DNS based interference which returned IP
addresses (59.153.90.11, 167.172.4.60) that host block pages, such as
the following:

{{<img src="images/mm-blockpage.png" title="Block page in Myanmar" alt="Block page in Myanmar">}}

**Image:** Block page served in Myanmar.

It’s worth noting though that the same ISPs which served block pages
through DNS based interference were also found to implement IP based
blocking as well. In other words, OONI data shows that ISPs in Myanmar
adopt a mixture of censorship techniques -- in some cases serving block
pages, while in other cases implementing what looks like IP based
blocking. More details are available through our
[analysis](https://gist.github.com/hellais/397af212f267757ab492534cd1bded85).

Overall, from the above chart on social media blocking in Myanmar, we
see that:

* There was a significant increase in [OONI Probe](https://ooni.org/install/) measurement coverage towards
the end of the analysis period;

* Most measurements present TCP/IP level interference, suggesting IP
based blocking on most networks;

* Some ISPs blocked a few of these sites by means of DNS interference,
returning IP addresses that host block pages (59.153.90.11,
167.172.4.60) or an address in private IP space (such as 127.0.0.1
or [172.29.8.1](https://explorer.ooni.org/measurement/20210224T071933Z_webconnectivity_MM_132148_n1_LXbhEGsskbD7xWZA?input=https%3A%2F%2Fwww.facebook.com%2F));

* Some measurements were successful (i.e. the tested websites were
found accessible), showing that the blocks are not implemented
deterministically over time on all networks.

While OONI measurements show that [Telegram has been reachable](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&test_name=telegram)
in Myanmar, both
[WhatsApp](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&test_name=whatsapp)
and [Facebook Messenger](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&test_name=facebook_messenger)
presented signs of blocking during their testing throughout February
2021. Similarly to the testing of social media websites, we observe both
[DNS based tampering](https://explorer.ooni.org/measurement/20210301T112251Z_facebookmessenger_MM_9988_n1_3sXa5cabiM38MoaZ)
and [IP blocking](https://explorer.ooni.org/measurement/20210301T122856Z_facebookmessenger_MM_58952_n1_LCyASUnnYoJuiXfJ)
of WhatsApp and Facebook, which varies from network to network (and in
some cases, we observe ISPs adopting a mixture of censorship
techniques).

In the [testing of Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), there are
cases where [all attempted TCP connections to Facebook’s endpoints failed](https://explorer.ooni.org/measurement/20210225T175057Z_facebookmessenger_MM_135371_n1_kiBxLMPQaNtdti7o),
and there are other cases where [DNS lookups](https://ooni.org/support/glossary/#dns-lookup) to domains
associated with Facebook [do not resolve to IP addresses](https://explorer.ooni.org/measurement/20210228T160224Z_facebookmessenger_MM_9988_n1_bxkvQF7FaNSoTY09)
allocated to Facebook. In the [testing of WhatsApp](https://ooni.org/nettest/whatsapp/), we observe
[interference](https://explorer.ooni.org/measurement/20210227T134501Z_whatsapp_MM_58952_n1_Wk3NjyqtPxGIUvB6)
with WhatsApp web (`web.whatsapp.com`) and WhatsApp’s registration
service, though attempted connections to WhatsApp’s endpoints are often
successful (this is observed on several networks).

The following chart illustrates the testing of WhatsApp and Facebook
Messenger (across networks) in Myanmar throughout February 2021, based
on OONI data.

{{<img src="images/whatsapp-fb.png" title="WhatsApp and Facebook Messenger blocked in Myanmar" alt="WhatsApp and Facebook Messenger blocked in Myanmar">}}

**Source:** OONI measurements collected from Myanmar throughout February
2021,
[https://explorer.ooni.org/search?until=2021-02-28&since=2021-02-01&probe_cc=MM](https://explorer.ooni.org/search?until=2021-02-28&since=2021-02-01&probe_cc=MM)

As is evident from the above chart, WhatsApp and Facebook Messenger
presented signs of blocking most times that they were tested in Myanmar
throughout February 2021. The high volume of
[anomalous](https://ooni.org/support/glossary/#network-anomaly)
measurements (across many different networks) provides a strong signal
of blocking, particularly since this is not observed in [past measurements](https://explorer.ooni.org/search?since=2020-10-01&probe_cc=MM&until=2021-02-01)
(before February 2021). It’s worth noting though that some measurements
(collected in February 2021) were successful (i.e. the tested apps were
reachable), suggesting that the blocks are not deterministic across
networks in Myanmar.

Today, OONI data suggests the ongoing blocking of
[Facebook](https://explorer.ooni.org/search?since=2021-01-31&domain=www.facebook.com&probe_cc=MM),
[Facebook Messenger](https://explorer.ooni.org/search?since=2021-01-31&probe_cc=MM&test_name=facebook_messenger),
[WhatsApp](https://explorer.ooni.org/search?since=2021-01-31&probe_cc=MM&test_name=whatsapp),
[Twitter](https://explorer.ooni.org/search?since=2021-01-31&domain=twitter.com&probe_cc=MM),
and
[Instagram](https://explorer.ooni.org/search?since=2021-01-31&domain=www.instagram.com&probe_cc=MM)
in Myanmar.

## Blocking of Wikipedia

Starting from 20th February 2021, we started to observe the [blocking of Wikipedia](https://explorer.ooni.org/search?since=2021-01-31&probe_cc=MM&test_name=web_connectivity&domain=www.wikipedia.org)
in Myanmar as well (though the first
[measurement](https://explorer.ooni.org/measurement/20210218T093817Z_webconnectivity_MM_135405_n1_w5oeniepsZYZNAve?input=http%3A%2F%2Fwww.wikipedia.org)
that presented signs of IP based blocking of `www.wikipedia.org` was
collected on 18th February 2021).

In all [anomalous measurements](https://explorer.ooni.org/search?since=2021-01-31&probe_cc=MM&test_name=web_connectivity&domain=www.wikipedia.org&only=anomalies)
collected thereafter on the testing of `www.wikipedia.org` on several
different networks in Myanmar, we consistently observe that attempted
TCP connections to the IP address allocated to `www.wikipedia.org`
[failed](https://explorer.ooni.org/measurement/20210226T135823Z_webconnectivity_MM_9988_n1_3fgc0oeyV8tetza3?input=https%3A%2F%2Fwww.wikipedia.org%2F),
suggesting IP based blocking. This censorship technique would also
affect Wikipedia subdomains, which is why we see other Wikipedia
language editions (such as `ar.wikipedia.org`) presenting the [same signs of IP blocking](https://explorer.ooni.org/search?since=2021-01-31&probe_cc=MM&test_name=web_connectivity&domain=ar.wikipedia.org).

It’s worth highlighting though that `www.wikipedia.org` does *not*
appear to be blocked on all networks in Myanmar. The following chart
aggregates OONI measurements from the testing of `www.wikipedia.org`
on multiple networks in Myanmar, illustrating that while
`www.wikipedia.org` presents [signs of IP blocking](https://explorer.ooni.org/measurement/20210226T135823Z_webconnectivity_MM_9988_n1_3fgc0oeyV8tetza3?input=https%3A%2F%2Fwww.wikipedia.org%2F)
(primarily from 20th February 2021 onwards) on some networks, it’s
[accessible](https://explorer.ooni.org/measurement/20210224T054430Z_webconnectivity_MM_134714_n1_MoooNRRTZ1wlaewJ?input=https%3A%2F%2Fwww.wikipedia.org%2F)
on others.

{{<img src="images/wikipedia.png" title="Wikipedia blocked in Myanmar" alt="Wikipedia blocked in Myanmar">}}

**Source:** OONI measurements collected from Myanmar testing
`www.wikipedia.org` between 1st February 2021 to 25th February 2021,
[https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&test_name=web_connectivity&domain=www.wikipedia.org](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&test_name=web_connectivity&domain=www.wikipedia.org)

The blocking of `www.wikipedia.org` does not appear to be
deterministic either. For example, when looking at [recent measurements collected from AS136480](https://explorer.ooni.org/search?since=2021-02-02&domain=www.wikipedia.org&probe_cc=MM&probe_asn=AS136480)
(UniLink Myanmar), it is evident that some measurements collected on
24th February 2021 [successfully established a TCP connection to Wikipedia’s IP address](https://explorer.ooni.org/measurement/20210224T030303Z_webconnectivity_MM_136480_n1_vGOHJiv41BunQGN1?input=https%3A%2F%2Fwww.wikipedia.org%2F),
while other measurements (collected on the same day on the same network)
suggest that [Wikipedia’s IP was blocked](https://explorer.ooni.org/measurement/20210224T065310Z_webconnectivity_MM_136480_n1_LBMmCE6EDEV1O745?input=https%3A%2F%2Fwww.wikipedia.org%2F).
We observe the same non-deterministic pattern in the [blocking of social media](https://explorer.ooni.org/search?since=2021-01-31&probe_cc=MM&test_name=web_connectivity&domain=www.facebook.com)
as well, as it is sometimes possible for connections to go through (even
though IP blocks appear to be in place).

## Blocking of circumvention tool sites

Circumventing internet censorship over the last month might have been
quite challenging in Myanmar, given that a number of censorship
circumvention tools appear to have been blocked. In February 2021, a
list of VPNs and their associated IP addresses (that ISPs in Myanmar
were reportedly required to block access to)
[circulated](https://www.facebook.com/groups/yesagyogp/permalink/1119533741827118/)
on Facebook. The websites of some of these VPNs (such as
`protonvpn.com` and `www.tunnelbear.com`) were found blocked in our
recent OONI data analysis, as illustrated in the chart below.

{{<img src="images/circumvention.png" title="Circumvention tool sites blocked in Myanmar" alt="Circumvention tool sites blocked in Myanmar">}}

**Source:** OONI measurements collected from Myanmar between 1st
February 2021 to 28th February 2021,
[https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28)

All of the circumvention tool websites listed in the above chart were
[confirmed blocked](https://explorer.ooni.org/measurement/20210225T052736Z_webconnectivity_MM_133385_n1_wYDF8P05wzi12xip?input=https%3A%2F%2Fwww.tunnelbear.com%2F)
at least once, as OONI measurements show DNS based interference
[returning IP addresses](https://explorer.ooni.org/measurement/20210225T052736Z_webconnectivity_MM_133385_n1_wYDF8P05wzi12xip?input=https%3A%2F%2Fwww.torproject.org%2F)
that host block pages (59.153.90.11, 167.172.4.60) or an [address in private IP space](https://explorer.ooni.org/measurement/20210226T043238Z_webconnectivity_MM_136255_n1_iDvwdo8o2cNXK20J?input=https%3A%2F%2Fwww.privateinternetaccess.com%2F)
(such as 127.0.0.1 or 172.29.8.1).

Most anomalous measurements though
[show](https://explorer.ooni.org/measurement/20210226T150825Z_webconnectivity_MM_58952_n1_W9ojTIWZwHn52o6D?input=https%3A%2F%2Fwww.tunnelbear.com%2F)
IP blocking, which is not only consistent with what we observe in the
blocking of social media and Wikipedia, but which also matches
[reports](https://www.facebook.com/groups/yesagyogp/permalink/1119533741827118/)
regarding the IP blocking of circumvention tools. It’s worth
highlighting though that these circumvention tool sites are *not*
blocked on all networks in Myanmar (as illustrated in the above chart),
and that the blocking of certain circumvention tool websites does not
necessarily mean that the relevant apps are blocked as well
(particularly since circumvention tools often rely on a variety of
techniques for evading censors).

For example, even though the testing of `www.torproject.org` presented
signs of IP blocking on several networks (such as
[AS18399](https://explorer.ooni.org/measurement/20210225T035619Z_webconnectivity_MM_18399_n1_YVrLIXbBsC862SBe?input=https%3A%2F%2Fwww.torproject.org%2F)
and
[AS135405](https://explorer.ooni.org/measurement/20210224T083040Z_webconnectivity_MM_135405_n1_F2uanxDVsPjtlvmI?input=https%3A%2F%2Fwww.torproject.org%2F)),
the [testing of Tor](https://ooni.org/nettest/tor/) shows that it was
[reachable on multiple networks](https://explorer.ooni.org/search?until=2021-03-08&since=2021-02-01&probe_cc=MM&test_name=tor)
(including
[AS18399](https://explorer.ooni.org/measurement/20210224T132652Z_tor_MM_18399_n1_eTpIPnucXiiN4anf)
and
[AS135405](https://explorer.ooni.org/measurement/20210226T112757Z_tor_MM_135405_n1_NV8mTvCmtPdJVfvX))
in Myanmar over the last month. As most Tor directory authorities and
bridges were
[reachable](https://explorer.ooni.org/search?until=2021-03-08&since=2021-02-01&probe_cc=MM&test_name=tor)
when tested from local networks in Myanmar, it was likely possible to
use [Tor](https://www.torproject.org/download/) for censorship
circumvention.

[OONI Probe](https://ooni.org/install/) currently only includes tests
for measuring the reachability of the following circumvention tools:
[Tor](https://ooni.org/nettest/tor/),
[Psiphon](https://ooni.org/nettest/psiphon/), and
[RiseupVPN](https://ooni.org/nettest/riseupvpn/). We are therefore
unable to evaluate whether the apps of the other circumvention tool
websites (listed in the above chart) were blocked in Myanmar as well.

## Other ongoing blocks

Apart from the recent [blocking of social media](https://explorer.ooni.org/search?since=2021-02-02&domain=www.facebook.com&probe_cc=MM)
and
[Wikipedia](https://explorer.ooni.org/search?since=2021-02-02&domain=www.wikipedia.org&probe_cc=MM)
(following the recent [military coup](https://www.bbc.com/news/world-asia-55882489) in Myanmar), we
also observe the ongoing blocking of a number of news media websites and
of the site of Justice for Myanmar (`justiceformyanmar.org`), the
[blocking](https://explorer.ooni.org/search?since=2021-02-02&domain=www.justiceformyanmar.org&probe_cc=MM&until=2021-03-04&only=anomalies)
of which [started in 2020](https://www.telenor.com.mm/en/article/directive-block-website-and-3-ip-addresses).
As part of our recent OONI data analysis, we found a COVID-19 site
(`coronavirus.app`)
[blocked](https://explorer.ooni.org/search?since=2021-02-02&domain=coronavirus.app&probe_cc=MM&only=anomalies&until=2021-03-04)
in Myanmar as well.

### News media

Last year, we [reported](https://ooni.org/post/2020-myanmar-blocks-websites-amid-covid19/)
the **DNS based blocking of 174 domains** in Myanmar (following a
[March 2020 directive](https://www.telenor.com.mm/en/article/blocking-websites-myanmar-updated-9-september-2020)
issued by Myanmar’s Ministry of Transport and Communications), which
include [41 news outlets](https://ooni.org/post/2020-myanmar-blocks-websites-amid-covid19/#blocked-news-outlets). While
they include a few [ethnic media websites](https://ooni.org/post/2020-myanmar-blocks-websites-amid-covid19/#blocked-news-outlets)
reporting on the situation in Rakhine, they also include websites which
are not considered credible (as pointed out to us by civil society
groups in Myanmar).

Recent OONI measurements
[show](https://explorer.ooni.org/search?domain=karennews.org&probe_cc=MM&since=2020-04-06)
that these news websites currently remain blocked on several networks in
Myanmar, as illustrated through the following chart.

{{<img src="images/blocked-media.png" title="News sites blocked in Myanmar" alt="News sites blocked in Myanmar">}}

**Source:** OONI measurements collected from Myanmar between 1st
February 2021 to 25th February 2021,
[https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&only=anomalies&test_name=web_connectivity](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&only=anomalies&test_name=web_connectivity)

It is evident through the above chart (which aggregates measurements
across networks) that the (ongoing) blocking of news media websites in
Myanmar varies from network to network, and that different censorship
techniques are adopted.

In some cases, we observe [DNS based interference](https://explorer.ooni.org/measurement/20210225T052736Z_webconnectivity_MM_133385_n1_wYDF8P05wzi12xip?input=http%3A%2F%2Fkarennews.org%2F)
which returns IP addresses that host block pages, enabling us to
automatically confirm blocking. In other cases, we observe [IP based blocking](https://explorer.ooni.org/measurement/20210226T081447Z_webconnectivity_MM_135405_n1_2qLVe5N6NUJoLbCo?input=http%3A%2F%2Fkarennews.org%2F)
(which we more commonly see in more recent measurements), while some
measurements are successful. These censorship patterns are consistent
with what we observe in the blocking of social media and Wikipedia, as
discussed previously. Further details are available through our
[analysis](https://gist.github.com/hellais/397af212f267757ab492534cd1bded85)
(which also provides relevant OONI measurements).

### Justice for Myanmar

In August 2020, Telenor Myanmar
[disclosed](https://www.telenor.com.mm/en/article/directive-block-website-and-3-ip-addresses)
that the Myanmar government had issued another directive instructing
ISPs to
[block](https://public.opentech.fund/documents/The_Rise_of_Online_Censorship_and_Surveillance_in_Myanmar.pdf)
the website of [Justice for Myanmar](https://www.justiceformyanmar.org/) and 3 associated IP
addresses.

Justice for Myanmar is an activist campaign which
[aims](https://www.justiceformyanmar.org/about) to pressure businesses
and investors around the world to divest from Myanmar military
businesses. They argue that more than 150 international and domestic
companies are engaged with military-owned companies in Myanmar,
supporting brutal oppression in the country. Their campaign aims to
expose international businesses with ties to Myanmar’s military and
pressure them to divest.

Their work is even more timely and urgent now that Myanmar is run by the
military. However, access to their website [remains blocked](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&only=anomalies&test_name=web_connectivity&domain=www.justiceformyanmar.org)
on several networks in Myanmar, as illustrated through the following
chart.

{{<img src="images/justice-for-myanmar.png" title="Justice for Myanmar blocked" alt="Justice for Myanmar blocked">}}

**Source:** OONI measurements collected from Myanmar between 1st
February 2021 to 25th February 2021,
[https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&test_name=web_connectivity&domain=www.justiceformyanmar.org](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&test_name=web_connectivity&domain=www.justiceformyanmar.org)

We were able to confirm the blocking of `www.justiceformyanmar.org` on
[MyTel (AS136255)](https://explorer.ooni.org/measurement/20210226T043238Z_webconnectivity_MM_136255_n1_iDvwdo8o2cNXK20J?input=https%3A%2F%2Fwww.justiceformyanmar.org%2F),
[Frontiir (AS58952)](https://explorer.ooni.org/measurement/20210225T155638Z_webconnectivity_MM_58952_n1_5LgTNMr5WcTSGVKc?input=https%3A%2F%2Fwww.justiceformyanmar.org%2F),
and [Yatanarpon Teleport (AS18399)](https://explorer.ooni.org/measurement/20210224T081936Z_webconnectivity_MM_18399_n1_D6alZXIeXgoowSdE?input=https%3A%2F%2Fwww.justiceformyanmar.org%2F)
where we observe DNS based interference [returning an IP address](https://explorer.ooni.org/measurement/20210225T155638Z_webconnectivity_MM_58952_n1_5LgTNMr5WcTSGVKc?input=https%3A%2F%2Fwww.justiceformyanmar.org%2F)
(`59.153.90.11`) that hosts a block page or an [address in private IP space](https://explorer.ooni.org/measurement/20210226T043238Z_webconnectivity_MM_136255_n1_iDvwdo8o2cNXK20J?input=https%3A%2F%2Fwww.justiceformyanmar.org%2F)
(`127.0.0.1`). It’s worth noting though that the site appears to be
[accessible](https://explorer.ooni.org/measurement/20210227T165410Z_webconnectivity_MM_136442_n1_EF8rAhLhNQY1WTR3?input=https%3A%2F%2Fwww.justiceformyanmar.org%2F)
on many other networks.

In their
[statement](https://www.telenor.com.mm/en/article/directive-block-website-and-3-ip-addresses),
Telenor Myanmar highlighted that while authorities in Myanmar have legal
basis to order such directives, the practice appears to be incompatible
with international human rights law. And so while Telenor Myanmar were
required to comply with this directive and
[block](https://explorer.ooni.org/measurement/20210225T052736Z_webconnectivity_MM_133385_n1_wYDF8P05wzi12xip?input=https%3A%2F%2Fwww.justiceformyanmar.org%2F)
access to `www.justiceformyanmar.org`, they
[reportedly](https://www.telenor.com.mm/en/article/directive-block-website-and-3-ip-addresses)
raised concerns regarding international human rights and the collateral
damage that may inadvertently occur from the blocking of IP addresses.

Campaigners from Justice for Myanmar [reportedly argued](https://www.aljazeera.com/news/2021/2/1/who-is-min-aung-hlaing)
that the February 2021 military coup was not just about preserving Min
Aung Hlaing’s political influence (who has served as the
commander-in-chief of Defense Services since 2011, and who now serves as
the country’s de facto leader), but also his wealth. Businesses owned by
Min Aung Hlaing’s children have [reportedly profited](https://www.aljazeera.com/news/2021/2/1/who-is-min-aung-hlaing)
from access to state resources during his tenure.

According to [Justice for Myanmar](https://www.aljazeera.com/news/2021/2/1/who-is-min-aung-hlaing):

*“If democratization progresses and there is accountability for his
criminal conduct, he and his family stand to lose their revenue
streams.”*

### COVID-19 site

While analyzing OONI data for this report, we came across the [blocking of a COVID-19 site](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&test_name=web_connectivity&domain=coronavirus.app&only=anomalies)
(`coronavirus.app`) as well. This [site](https://coronavirus.app/)
(“The Coronavirus App”) tracks the spread of the [ongoing COVID-19 pandemic](https://covid19.who.int/) worldwide, providing users with an
interactive map that allows them to view fatality rate and recoveries,
and check affected regions in real-time.

The following chart aggregates [OONI Probe measurement coverage](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&test_name=web_connectivity&domain=coronavirus.app)
on the testing of `coronavirus.app` on multiple networks in Myanmar
between 1st February 2021 to 25th February 2021.

{{<img src="images/covid-19.png" title="COVID-19 site blocked" alt="COVID-19 site blocked">}}

**Source:** OONI measurements collected from Myanmar between 1st
February 2021 to 25th February 2021,
[https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&test_name=web_connectivity&domain=coronavirus.app](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&test_name=web_connectivity&domain=coronavirus.app)

While `coronavirus.app` is accessible on many networks in Myanmar,
OONI data shows that it is blocked on at least 3 networks
([AS136255](https://explorer.ooni.org/measurement/20210226T043238Z_webconnectivity_MM_136255_n1_iDvwdo8o2cNXK20J?input=https%3A%2F%2Fcoronavirus.app%2F),
[AS58952](https://explorer.ooni.org/measurement/20210226T110157Z_webconnectivity_MM_58952_n1_onMOqu3B3rx6TMEI?input=https%3A%2F%2Fcoronavirus.app%2F),
[AS18399](https://explorer.ooni.org/measurement/20210224T051712Z_webconnectivity_MM_18399_n1_MsB0Fs6DkLhSVoaT?input=https%3A%2F%2Fcoronavirus.app%2F))
where we were able to automatically confirm blocking. On these networks,
we observe DNS based interference, [returning an IP address](https://explorer.ooni.org/measurement/20210226T094246Z_webconnectivity_MM_63852_n1_Y1Gtc6TVlVbmMIgT?input=https%3A%2F%2Fcoronavirus.app%2F)
(`59.153.90.11`) that hosts a block page or an [address in private IP space](https://explorer.ooni.org/measurement/20210224T051712Z_webconnectivity_MM_18399_n1_MsB0Fs6DkLhSVoaT?input=https%3A%2F%2Fcoronavirus.app%2F)
(`127.0.0.1`).

Note: While [some of these measurements](https://explorer.ooni.org/measurement/20210224T051712Z_webconnectivity_MM_18399_n1_MsB0Fs6DkLhSVoaT?input=https%3A%2F%2Fcoronavirus.app%2F)
include an `error` annotation in the OONI Explorer measurement
headers, that is due to the fact that the blockpage server was not
reachable in the moment that the test was performed (possibly because
the blockpage server was offline). We are nonetheless able to
fingerprint the blocking because these IP addresses (59.153.90.11,
167.172.4.60) used to host block pages, as documented in our [previous study](https://ooni.org/post/2020-myanmar-blocks-websites-amid-covid19/)
last year. The return of an IP address in private IP space (such as
127.0.0.1 or 172.29.8.1) is consistent with the blocking pattern we
observed for other websites.

## Internet outages

Since the military coup on 1st February 2021, Myanmar has experienced
multiple significant internet outages. These outages are visible through
several public data sources: [Internet Outage Detection and Analysis (IODA)](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612009664&until=1614774464),
[Oracle’s Internet Intelligence Map](https://map.internetintel.oracle.com/?root=national&country=MM),
and [Google traffic](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1611878400000;end:1614729599999;product:19;region:MM&lu=fraction_traffic)
data.

The [Internet Outage Detection and Analysis (IODA)](https://ioda.caida.org/) project of the [Center for Applied Internet Data Analysis (CAIDA)](https://www.caida.org/) measures
internet outages worldwide in near real-time. To track and identify
internet outages, IODA uses [three complementary measurement and inference methods](https://www.caida.org/projects/ioda/): Routing (BGP)
announcements, Active Probing, and Internet Background Radiation (IBR)
traffic. Access to IODA measurements is openly available through their
[Dashboard](https://ioda.caida.org/ioda/dashboard), which enables
users to explore internet outages with country, region, and AS level of
granularity.

### Outage on 1st February 2021

IODA
[detected](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612009664&until=1612268864)
an initial drop in connectivity at around 21:00 UTC on 31st January
2021, followed by a larger drop at around 00:20 UTC on 1st February
2021, as illustrated below. Both of these drops are visible in IODA’s
Active Probing and BGP signals.

{{<img src="images/ioda-1.png" title="IODA signals in Myanmar" alt="IODA signals in Myanmar">}}

**Source:** Internet Outage Detection and Analysis (IODA), IODA Signals
for Myanmar,
[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612051200&until=1612224000](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612051200&until=1612224000)

IODA provides data at network-level granularity (in addition to
country-level and region-level), enabling us to examine which networks
were affected and to what extent. Analyzing network-level data also
allows us to uncover outage timing patterns and differences.

This was the first major Internet outage that occurred amid the coup;
for this particular outage, we observed significant differences in the
extent to which various networks were affected and we also observed
timing differences. Some networks experienced almost complete loss of
Internet connectivity while others appear to have experienced only small
outages. For networks that did experience an outage, there were still
timing differences: in some, the outage began at 21:00 (UTC) on 31st
January 2021, while on other networks, the outage began only after
midnight on 1st February 2021. The graphs below highlight these
differences.

{{<img src="images/ioda-2.png" title="IODA signals in Myanmar" alt="IODA signals in Myanmar">}}

**Source:** Internet Outage Detection and Analysis (IODA), Active
Probing and BGP Signals for MPT (AS9988) and Mytel (AS136255). These
networks observe steep drops in the BGP signal just after midnight (UTC)
on 1st February 2021.
[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/9988&lastView=overview&from=1612051200&until=1612224000](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/9988&lastView=overview&from=1612051200&until=1612224000)

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/136255&lastView=overview&from=1612051200&until=1612224000](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/136255&lastView=overview&from=1612051200&until=1612224000)

{{<img src="images/ioda-3.png" title="IODA signals in Myanmar" alt="IODA signals in Myanmar">}}

**Source:** Internet Outage Detection and Analysis (IODA), Active
Probing and BGP Signals for Ooredoo (AS132167) and Telenor (AS133385).
These networks first observe drops in the signals at ~ 21:00 (UTC) on
31st January 2021. The signals drop further after midnight (UTC) on 1st
February 2021.

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/132167&lastView=overview&from=1612051200&until=1612224000](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/132167&lastView=overview&from=1612051200&until=1612224000)

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/133385&lastView=overview&from=1612051200&until=1612224000](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/133385&lastView=overview&from=1612051200&until=1612224000)

{{<img src="images/ioda-4.png" title="IODA signals in Myanmar" alt="IODA signals in Myanmar">}}

**Source:** Internet Outage Detection and Analysis (IODA), Active
Probing and BGP Signals for Frontiir (AS58952) and YTP (AS18399). These
networks observe relatively small drops in Internet connectivity
according to IODA’s signals. 

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/18399&lastView=overview&from=1612051200&until=1612224000](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/18399&lastView=overview&from=1612051200&until=1612224000)

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/58952&lastView=overview&from=1612051200&until=1612224000](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/58952&lastView=overview&from=1612051200&until=1612224000)

While this outage resulted in significant drops in connectivity across
many [ASes](https://ooni.org/support/glossary/#asn), the next ones
were even more severe.

### Outage on 6th February 2021

Myanmar experienced a second (higher impact) internet outage on 6th
February 2021. [IODA data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612310400&until=1612915200)
from the following chart (taken from the [IODA dashboard](https://ioda.caida.org/ioda/dashboard)) clearly shows that
Myanmar experienced an internet outage, starting from around 02:00 UTC
on 6th February 2021 and lasting up until around 08:00 UTC on 7th
February 2021.

{{<img src="images/ioda-5.png" title="IODA signals in Myanmar" alt="IODA signals in Myanmar">}}

**Source:** Internet Outage Detection and Analysis (IODA), IODA Signals
for Myanmar, [https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612310400&until=1612915200](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612310400&until=1612915200)

Within this time period, we observe a major drop in both active probing
and IBR signals, and also a drop in the BGP signal correlating in time
with the drop in the other signals, strongly suggesting that Myanmar
experienced a widespread internet outage. This is further indicated by
the fact that we see these signals resume to their previous levels
thereafter.

Quite similarly, [Oracle’s Internet Intelligence Map](https://map.internetintel.oracle.com/) tracks internet disruptions
worldwide based on three signals: Traceroute completion ratio, BGP
routes, and DNS query rate. On 6th February 2021, Oracle’s Internet
Intelligence Map [records the same internet outage](https://map.internetintel.oracle.com/?root=national&country=MM)
in Myanmar as IODA data (with almost identical timings in the drop of
signals). We also observe the same drop in connectivity on 1st February
2021, as previously seen in [IODA data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612009664&until=1612268864).

{{<img src="images/oracle-1.jpeg" title="Oracle signals in Myanmar" alt="Oracle signals in Myanmar">}}

**Source:** Oracle Internet Intelligence Map, Myanmar (February 2021),
[https://map.internetintel.oracle.com/?root=national&country=MM](https://map.internetintel.oracle.com/?root=national&country=MM)

Myanmar’s internet outage (on 6th February 2021) is further corroborated
by [Google traffic data](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1612051200000;end:1612915199999;product:19;region:MM&lu=fraction_traffic),
which very visibly shows that almost no Google traffic originated from
Myanmar during the same time period.

{{<img src="images/google-1.png" title="Google traffic in Myanmar" alt="Google traffic in Myanmar">}}

**Source:** Google Transparency Report, Traffic and disruptions to
Google: Myanmar (February 2021),
[https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1612051200000;end:1612915199999;product:19;region:MM&lu=fraction_traffic](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1612051200000;end:1612915199999;product:19;region:MM&lu=fraction_traffic)

Investigating IODA’s network-level signals for the outage that began on
6th February 2021, we observe fewer timing differences among major
networks compared to the first outage that occurred amid the coup on 1st
February 2021. The end-times of the outage, in particular, are nearly
identical across most major networks. This level of synchronization
suggests that networks were able to plan and execute the enforcement and
relaxation of this shutdown.

{{<img src="images/ioda-6.png" title="IODA signals in Myanmar" alt="IODA signals in Myanmar">}}

**Source:** Internet Outage Detection and Analysis (IODA), BGP Signals
for MPT (AS9988), Mytel (AS136255), Ooredoo (AS132167), Telenor
(AS133385), and YTP (AS18399). While the outage begins at slightly
different times, Internet connectivity appears to be restored almost
simultaneously across these networks.

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/9988&lastView=overview&from=1612310400&until=1612915200](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/9988&lastView=overview&from=1612310400&until=1612915200)

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/136255&lastView=overview&from=1612310400&until=1612915200](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/136255&lastView=overview&from=1612310400&until=1612915200)

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/132167&lastView=overview&from=1612310400&until=1612915200](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/132167&lastView=overview&from=1612310400&until=1612915200)

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/133385&lastView=overview&from=1612310400&until=1612915200](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/133385&lastView=overview&from=1612310400&until=1612915200)

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/18399&lastView=overview&from=1612310400&until=1612915200](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/18399&lastView=overview&from=1612310400&until=1612915200)

### Ongoing nightly outages

Starting from 15th February 2021, Myanmar began to experience [internet outages every night](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1613219264&until=1614774464).

Like clockwork, access to the internet has been shut down completely on
a national level every night (for around 8 hours) between 01:00 to 09:00
local time (which corresponds to 18:30 UTC to 02:30 UTC). And the
nightly internet curfews in Myanmar appear to be ongoing.

This is evident through [IODA data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1613217600&until=1614859200),
which shows that all signals consistently drop between 01:00 to 09:00
local time every night from 15th February 2021 onwards.

{{<img src="images/ioda-curfew.png" title="IODA signals in Myanmar" alt="IODA signals in Myanmar">}}

**Source:** Internet Outage Detection and Analysis (IODA), IODA Signals
for Myanmar,
[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1613217600&until=1614859200](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1613217600&until=1614859200)

The nightly internet outages in Myanmar are also visible through
[Oracle’s Internet Intelligence Map](https://map.internetintel.oracle.com/?root=national&country=MM),
which shows the same timings in the drop of signals as IODA data.

{{<img src="images/oracle-curfew.png" title="Oracle signals in Myanmar" alt="Oracle signals in Myanmar">}}

**Source:** Oracle Internet Intelligence Map, Myanmar (February 2021),
[https://map.internetintel.oracle.com/?root=national&country=MM](https://map.internetintel.oracle.com/?root=national&country=MM)

Myanmar’s nightly internet outages are further suggested by [Google traffic data](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1612137600000;end:1614729599999;product:19;region:MM&lu=fraction_traffic),
which shows a drop in Google traffic from 15th February 2021 onwards (in
comparison to previous dates), quite similarly to
[IODA](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1613219264&until=1614774464)
and [Oracle Internet Intelligence](https://map.internetintel.oracle.com/?root=national&country=MM)
data.

{{<img src="images/google-curfew.png" title="Google traffic in Myanmar" alt="Google traffic in Myanmar">}}

**Source:** Google Transparency Report, Traffic and disruptions to
Google: Myanmar (February 2021),
[https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1612137600000;end:1614729599999;product:19;region:MM&lu=fraction_traffic](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1612137600000;end:1614729599999;product:19;region:MM&lu=fraction_traffic)

When investigating IODA’s network-level signals, we observe that most
major networks in Myanmar now experience highly synchronized outages,
that each begin at 18:30 UTC and end at 02:30 UTC. This synchronization
is in stark contrast to the first Internet outage that occurred during
the coup on 1st February 2021; in the time since, it appears that ISPs
have developed and honed techniques to enforce and relax Internet
connectivity shutdowns according to pre-planned schedules.

{{<img src="images/ioda-curfew-2.png" title="IODA signals in Myanmar" alt="IODA signals in Myanmar">}}

**Source:** Internet Outage Detection and Analysis (IODA), BGP Signals
for MPT (AS9988), Mytel (AS136255), Ooredoo (AS132167), Telenor
(AS133385), and YTP (AS18399). The nightly Internet outages begin at
18:30 UTC and end at 02:30 UTC for all these networks, suggesting high
levels of coordination and automation.

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/9988&lastView=overview&from=1613217600&until=1614859200](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/9988&lastView=overview&from=1613217600&until=1614859200)

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/136255&lastView=overview&from=1613217600&until=1614859200](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/136255&lastView=overview&from=1613217600&until=1614859200)

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/132167&lastView=overview&from=1613217600&until=1614859200](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/132167&lastView=overview&from=1613217600&until=1614859200)

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/133385&lastView=overview&from=1613217600&until=1614859200](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/133385&lastView=overview&from=1613217600&until=1614859200)

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/18399&lastView=overview&from=1613217600&until=1614859200](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/18399&lastView=overview&from=1613217600&until=1614859200)

All of these data sources on the nightly internet outages corroborate
what locals in Myanmar have been reporting, as well as what has already
been
[reported](https://www.aljazeera.com/news/2021/3/4/myanmar-internet-blackouts)
quite extensively by the international media.

# Conclusion

As the political environment in Myanmar changed (following the
[military coup](https://www.bbc.com/news/world-asia-55882489) on 1st
February 2021), internet controls in the country increased.

Last year, multiple websites (including a few [ethnic media websites](https://ooni.org/post/2020-myanmar-blocks-websites-amid-covid19/#blocked-news-outlets)
reporting on the situation in Rakhine) were
[blocked](https://ooni.org/post/2020-myanmar-blocks-websites-amid-covid19/#blocked-news-outlets),
and their blocking appears to be
[ongoing](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&only=anomalies&test_name=web_connectivity).
We also observe the [ongoing blocking](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&test_name=web_connectivity&domain=www.justiceformyanmar.org&only=anomalies)
of `www.justiceformyanmar.org` (an activist campaign which
[aims](https://www.justiceformyanmar.org/about) to pressure businesses
and investors around the world to divest from Myanmar military
businesses), and we recently detected the
[blocking](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&test_name=web_connectivity&domain=coronavirus.app&only=anomalies)
of COVID-19 site (`coronavirus.app`) as well.

But following the [February 2021 military coup](https://www.bbc.com/news/world-asia-55882489), the scale of
internet censorship in Myanmar has become quite unprecedented.

In summary, we now see:

* **Social media blocks.** Access to
[Facebook](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&test_name=web_connectivity&domain=www.facebook.com&only=anomalies),
[Facebook Messenger](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&test_name=facebook_messenger&only=anomalies),
[WhatsApp](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&test_name=whatsapp&only=anomalies),
[Instagram](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&test_name=web_connectivity&domain=www.instagram.com&only=anomalies),
and [Twitter](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&test_name=web_connectivity&domain=twitter.com&only=anomalies)
appears to be blocked on multiple networks in Myanmar since early
February 2021.

* **Wikipedia block.** Access to `www.wikipedia.org` appears to have
been [blocked](https://explorer.ooni.org/search?since=2021-02-01&probe_cc=MM&until=2021-02-28&test_name=web_connectivity&domain=www.wikipedia.org&only=anomalies)
on several networks in Myanmar (primarily seen from 20th February
2021 onwards).

* **Circumvention tool sites blocked.** Access to several
circumvention tool websites (such as `protonvpn.com` and `www.tunnelbear.com`) appears to have been
[blocked](https://explorer.ooni.org/measurement/20210225T052736Z_webconnectivity_MM_133385_n1_wYDF8P05wzi12xip?input=https%3A%2F%2Fwww.tunnelbear.com%2F)
on some networks in Myanmar in February 2021.

* **Nightly internet outages.** The first internet disruption was
[observed](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612009664&until=1612268864)
in the early hours of 1st February 2021 (on the day of the
military coup), followed by a second, higher impact [internet outage on 6th February 2021](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1612182464&until=1612960064) (which lasted for almost 30 hours). As of 15th February 2021,
Myanmar has been experiencing [complete internet outages every night](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/MM&lastView=overview&from=1613219264&until=1614774464)
(between around 1am to 9am local time).

Through [OONI data](https://explorer.ooni.org/search?until=2021-03-05&since=2021-02-03&probe_cc=MM&only=anomalies)
(on the blocking of Wikipedia and social media services), we observe the
following:

* **Censorship variance across networks.** Internet censorship appears
to vary across networks in Myanmar, as we observe different sites
being blocked on different networks (and the blocks are not
implemented on all networks).

* **Variance in censorship techniques.** ISPs in Myanmar are primarily
seen to block sites and apps by means of IP blocking and/or DNS
based interference.

	* **IP blocking.** In many cases, we observe the IP blocking of
	websites and apps across networks in Myanmar.

	* **DNS based interference.** In some cases, ISPs in Myanmar block
	sites by means of DNS based interference, returning IP
	addresses that host block pages (59.153.90.11, 167.172.4.60)
	or an address in private IP space (such as 127.0.0.1 or
	172.29.8.1). We were able to automatically confirm these
	censorship cases.

* **Non-deterministic censorship.** Not all IP blocks appear to be
effective. OONI data
[shows](https://explorer.ooni.org/search?since=2021-02-02&domain=www.wikipedia.org&probe_cc=MM&probe_asn=AS136480&until=2021-03-05)
that it is sometimes possible for connections to go through (even
though IP blocks appear to be in place), which is likely why we
observe inconsistent measurements (in terms of accessibility and
blocking).

The findings of this study suggest an **alarming shift in Myanmar’s
internet censorship landscape**. In our [2017 study](https://ooni.org/post/myanmar-report/) (which examined internet
censorship in Myanmar based on the analysis of all OONI measurements
collected between 2016-2017), we barely found any internet censorship in
the country. Now, the ongoing social media blocks and nightly internet
outages raise major human rights concerns, particularly in light of the
current political environment.

# Acknowledgements

We thank [OONI Probe](https://ooni.org/install/) users in Myanmar for
contributing measurements, making this study possible.
