---
title: "Throttling of Social Media in Türkiye During Protests: An Analysis of OONI Data"
description: "Based on OONI data, this report documents the throttling of social media and instant messaging apps in Türkiye during protests."
author: "Mehul Gulati, Arturo Filastò, Maria Xynou, Luis Diaz, Elizaveta Yachmeneva"
date: "2025-11-20"
tags: ["country-tr", "censorship", "theme-social_media", "theme-im"]
categories: ["report"]
---

Protests [erupted](https://www.aljazeera.com/features/2025/3/23/why-are-there-protests-in-turkiye-what-to-know) throughout Türkiye on 19th March 2025 – following the arrest of Istanbul’s mayor and presidential candidate Ekrem İmamoğlu – and remain ongoing. Amid the protests, access to major social media platforms was [reportedly interfered with](https://www.turkiyetoday.com/turkiye/social-media-access-restricted-in-turkiye-amid-political-developments-133004) in Türkiye.

In this report, we present OONI data and findings from our investigation into the **throttling of social media platforms** across various networks in Türkiye during March and September 2025, periods when interference with these platforms was reported. Specifically, OONI data suggests that access to Twitter/X, Facebook, Instagram, WhatsApp, YouTube, TikTok, and Signal was throttled, whereas access to Telegram was blocked. Additionally, [YouTube was blocked via DNS on TurkNet (AS12735)](https://explorer.ooni.org/search?since=2025-03-19&until=2025-03-20&failure=false&domain=www.youtube.com&probe_cc=TR&probe_asn=AS12735&only=confirmed). Details are shared below.

{{<table-of-contents>}}

## Key Findings

Our analysis of [OONI data](https://ooni.org/data) from Türkiye indicates that access to Twitter/X, Facebook, Instagram, WhatsApp, YouTube, TikTok, and Signal was throttled, whereas access to Telegram was blocked. Additionally, [YouTube was blocked via DNS on TurkNet (AS12735)](https://explorer.ooni.org/search?since=2025-03-19&until=2025-03-20&failure=false&domain=www.youtube.com&probe_cc=TR&probe_asn=AS12735&only=confirmed). These censorship events were primarily observed on the **TTNET (AS47331)and Turkcell Superonline (AS34984)** networks, occurring on **19th and 20th March 2025** (coinciding with the [onset of protests](https://www.aljazeera.com/features/2025/3/23/why-are-there-protests-in-turkiye-what-to-know)) and on **8th September 2025** (following [clashes between police and opposition supporters](https://www.euronews.com/2025/09/08/turkey-restricts-internet-access-amid-opposition-party-standoff)).

Specifically, OONI data shows:

*   **Throttling of Twitter/X.** Given that the TLS handshake time for `twitter.com` was significantly longer than for 19 other hostnames using the same IP prefixes (162.159.0.0/16 and 172.66.0.0/16) and tested on the same network (AS47331) during the same period, there is strong indication that access to Twitter was throttled. The same pattern of throttling on the same networks was observed on both 19–20 March 2025 and 8th September 2025.
*   **Throttling of Facebook, Instagram, and WhatsApp.** OONI data shows that the testing of Instagram, WhatsApp, and Facebook domains and endpoints exhibited long TLS handshake times – indicating the presence of throttling – on both 19–20 March 2025 and 8th September 2025.
*   **Throttling and blocking of YouTube.** Given that the TLS handshake time for `www.youtube.com` was significantly longer than for 30 other hostnames that shared similar network paths or were hosted on the same infrastructure (Google) during the same period, there is strong indication that access to YouTube was throttled in Türkiye. OONI data also [shows](https://explorer.ooni.org/m/20250319232007.473186_TR_webconnectivity_d772ffa1a4764261) that access to [YouTube was blocked by means of DNS on TurkNet (AS12735)](https://explorer.ooni.org/search?since=2025-03-19&until=2025-03-20&failure=false&domain=www.youtube.com&probe_cc=TR&probe_asn=AS12735&only=confirmed) because DNS resolution returned an IP address (`195.175.254.2`) [associated with censorship](https://github.com/ooni/blocking-fingerprints/blob/main/fingerprints_dns.csv). Overall, OONI data suggests that access to YouTube was throttled and blocked in similar ways and on the same networks in Türkiye on both 19–20 March 2025 and 8th September 2025.
*   **Throttling of TikTok.** Similarly to Twitter/X, Facebook, Instagram, WhatsApp, and YouTube, OONI data shows increased TLS handshake times for `www.tiktok.com` on 19th and 20th March 2025, and again on 8th September 2025 – suggesting that access to TikTok was throttled in Türkiye on these days. However, the small measurement sample for hostnames sharing the same IP prefixes as `www.tiktok.com` limits our ability to confidently confirm TikTok throttling.
*   **Blocking of Telegram Web.** Rather than throttled, OONI data suggests that access to Telegram Web (`web.telegram.org`) was [blocked](https://explorer.ooni.org/m/20250320132947.738700_TR_telegram_badb6172dd4bb4f8) on both 19–20 March 2025 and 8th September 2025 on TTNET (AS47331) and Turkcell Superonline (AS34984). The block appears to have been [limited to Telegram Web](https://explorer.ooni.org/m/20250908160634.609588_TR_telegram_88734ac91caf4f89), as connections to the (tested) endpoints used by the Telegram mobile app were successful.
*   **Throttling of Signal.** Given that TLS handshake times for `storage.signal.org` were significantly longer than for 20 other hostnames sharing the same IP prefixes during the same period, OONI data suggests that access to Signal was throttled on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye. While OONI data indicates throttling on 19th and 20th March 2025, the signal is stronger on 8th September 2025.

## Background

On 19 March 2025, Istanbul mayor and presidential candidate Ekrem İmamoğlu was [detained](https://apnews.com/article/turkey-istanbul-mayor-police-search-ead3dd38aa547ecd13bc336e7d6c4d58) by Turkish police on suspicion of corruption and supporting terrorism. Ekrem İmamoğlu is often [described](https://www.politico.eu/article/turkey-jailed-tayyip-erdogan-mayor-immamoglu-jail-crackdown-nato-democracy/) as the ‘main rival’ of the current President Recep Tayyip Erdogan.

Following the arrest of Ekrem İmamoğlu, thousands of people [flooded the streets](https://www.dw.com/en/turkeys-erdogan-says-he-wont-give-in-amid-protests/a-71999067) of Turkish cities on the same day to protest against politically motivated arrests. Protesters in many cities [faced police violence](https://www.bbc.com/news/articles/c5yren8mxp8o), including pepper spray and rubber bullets, and more than 90 people were arrested. The protests in different Turkish cities continued over the next months. On the 100th day of Ekrem İmamoğlu's arrest, a [rally with dozens of thousands of people](https://www.hurriyetdailynews.com/chp-rallies-for-imamoglu-at-istanbul-211016) was held in Istanbul. These protests are [reportedly part of a larger fight for democracy](https://www.theguardian.com/world/2025/mar/22/turkey-protests-istanbul-mayor-grow-into-fight-about-democracy) in Türkiye.

As soon as the protests erupted on 19th March 2025, access to major social media platforms – Twitter/X, YouTube, Instagram and TikTok – was [reportedly interfered with](https://www.turkiyetoday.com/turkiye/social-media-access-restricted-in-turkiye-amid-political-developments-133004). These reports described that users faced connection failures and slow loading times, suggesting that access to those platforms may have been throttled.

Subsequently on 7th September 2025, access to major social media platforms and instant messaging apps – Twitter/X, Instagram, YouTube, TikTok, Facebook, WhatsApp, Telegram, and Signal – was [reportedly interfered with](https://www.fidh.org/en/region/europe-central-asia/turkey/turkey-stop-throttling-social-media-platforms-and-messaging-services) following [clashes between police and opposition supporters](https://www.euronews.com/2025/09/08/turkey-restricts-internet-access-amid-opposition-party-standoff) trying to prevent a government-appointed trustee from taking control of the Republican People's Party (CHP) Istanbul headquarters. Access to these social media platforms was [reportedly restored](https://www.reuters.com/sustainability/society-equity/access-social-media-restored-turkey-internet-monitor-says-2025-09-08/) the next day.

In this report, we investigate the two incidents – in March 2025 and September 2025 –  involving restrictions to social media platforms in Türkiye based on the analysis of [OONI data](https://ooni.org/data). The following sections document our methods and detailed findings.

## Methods

Since 2012, the [Open Observatory of Network Interference (OONI)](https://ooni.org/) has designed and developed [free and open source software](https://github.com/ooni) – the [OONI Probe app](https://ooni.org/install/) – for measuring different forms of internet censorship. The OONI Probe app includes a variety of [network-level experiments](https://github.com/ooni/spec/tree/master/nettests) designed to measure the blocking of websites, instant messaging apps, and circumvention tools. These experiments are run by [OONI Probe app](https://ooni.org/install/) users in [around 170 countries](https://explorer.ooni.org/) (including [Türkiye](https://explorer.ooni.org/country/TR?since=2025-10-12&until=2025-11-12)) each month. As these experiments are run from local network vantage points, they provide unique insights from the edge of the network into how access to internet services is being interfered with. We publish OONI Probe test results (“measurements”) from around the world as [open data](https://ooni.org/data/) in real-time.

Since 2014, [more than 24 million OONI measurements](https://explorer.ooni.org/country/TR?since=2025-10-12&until=2025-11-12) have been collected from 277 ASes in Türkiye. Throughout 2025, Türkiye has received stable and large OONI measurement coverage, as illustrated below.

{{<img src="images/image23.png" title="OONI Explorer" alt="OONI Explorer">}}

**Image:** OONI measurement coverage from Türkiye between 1st January 2025 to 11th November 2025 (source: [OONI Explorer](https://explorer.ooni.org/country/TR?since=2025-10-12&until=2025-11-12)).

The consistently high volume of [OONI measurements from Türkiye](https://explorer.ooni.org/country/TR?since=2025-10-12&until=2025-11-12) provides a strong basis for our analysis, as greater and more stable coverage increases our confidence in the findings. These measurements have been collected from multiple [OONI Probe experiments](https://github.com/ooni/spec/tree/master/nettests), but since we are interested in examining reported cases of throttling, we limit our analysis to measurements collected from the OONI Probe [Web Connectivity experiment](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md).

OONI’s [Web Connectivity experiment](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md) is designed to measure the blocking of the [websites](https://ooni.org/support/faq#which-websites-will-i-test-for-censorship-with-ooni-probe) included in the public, community-curated [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists), which include the domains of the social media and instant messaging platforms (Twitter/X, Facebook, Instagram, WhatsApp, YouTube, TikTok, Signal, and Telegram) that were [reportedly interfered with in Türkiye in March 2025](https://www.turkiyetoday.com/turkiye/social-media-access-restricted-in-turkiye-amid-political-developments-133004) and [September 2025](https://www.fidh.org/en/region/europe-central-asia/turkey/turkey-stop-throttling-social-media-platforms-and-messaging-services).

Specifically, OONI’s Web Connectivity test is designed to measure the accessibility of [URLs](https://github.com/citizenlab/test-lists/tree/master/lists) by performing the following steps:

*   Resolver identification
*   DNS lookup
*   TCP connect to the resolved IP addresses
*   TLS handshake to the resolved IP addresses
*   HTTP(s) GET request following redirects

The above steps are automatically performed from both the local network of the user, and from a control vantage point. If the results from both networks are the same, the tested URL is annotated as accessible. If the results differ, the tested URL is annotated as [anomalous](https://ooni.org/support/interpreting-ooni-data/#anomalies), and the type of anomaly is further characterized depending on the reason that caused the failure. Based on our heuristics, we are able to automatically confirm the blocking of websites based on [fingerprints](https://github.com/ooni/blocking-fingerprints) if a [block page](https://ooni.org/support/glossary#block-page) is served, or if DNS resolution returns an IP known to be associated with censorship.

Each Web Connectivity measurement provides network information (such as information pertaining to TLS handshakes) that helps with evaluating whether an anomalous measurement presents signs of blocking. We therefore disaggregate based on the reasons that caused the anomaly (e.g. connection reset during the TLS handshake) and aggregate based on failure types (e.g. `tls.generic\_timeout\_error`); if they are consistent, they provide a stronger signal of potential blocking. We used the [OONI data processing pipeline v5](https://github.com/ooni/data) for this analysis.

### Throttling analysis

Throttling is a subtle form of censorship where traffic towards a restricted service is **intentionally slowed down** to a point where it becomes effectively unusable, rather than being outright blocked. The implementation of throttling typically involves configuring a threshold for a user’s traffic flow to limit access to a specific service. Once this threshold is reached, the rate of packets in the flow is restricted, and packets may be delayed, queued, or dropped until the transmission rate falls back below the threshold. Since throttling presents itself as **degraded network performance**, it can be challenging to distinguish it from network congestion.

As part of our [methodology for measuring throttling](https://github.com/ooni/probe-cli/blob/master/docs/design/dd-007-throttling.md), we analyze OONI [Web Connectivity](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md) data (which is collected through the [OONI Probe](https://ooni.org/install/) testing of URLs) to detect targeted cases of extreme throttling that impact specific online services (such as the throttling of YouTube). The [OONI Web Connectivity](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md) measurements include `network\_events`, which are processed by the [OONI Pipeline v5](https://github.com/ooni/data) to extract precise timing information, including the duration of TLS handshakes.

Our methodology for detecting targeted throttling involves **analyzing timing information from HTTPS requests** in [Web Connectivity](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md) data to identify deliberate slowdowns of specific services. Because throttling often appears as normal network congestion, we **compare the performance of potentially throttled services against a baseline** — a similar service hosted on a comparable network path — to rule out natural congestion. By comparing traffic patterns — for instance, examining specific fingerprints such as the TLS Server Name Indication (SNI) field — we can distinguish between general network issues and intentional, targeted interference. We have previously applied this methodology in measuring various cases of throttling, such as those documented in our research reports involving throttling cases in [Kazakhstan](https://ooni.org/post/2023-throttling-kz-elections/#throttling-of-sites), [Russia](https://ooni.org/post/2022-russia-blocks-amid-ru-ua-conflict/#twitter-throttled), and [Turkey](https://ooni.org/post/2023-turkey-throttling-blocking-twitter/).

As part of this study, we analyzed OONI [Web Connectivity](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md) data collected from Türkiye to investigate **two throttling events** reported on [19-20 March 2025](https://www.turkiyetoday.com/turkiye/social-media-access-restricted-in-turkiye-amid-political-developments-133004) and on [8th September 2025](https://www.fidh.org/en/region/europe-central-asia/turkey/turkey-stop-throttling-social-media-platforms-and-messaging-services).

To this end, our analysis involved the following two date ranges:

*   10th to 30th March 2025
*   1st to 15th September 2025

We extracted and analyzed [TLS handshake](https://github.com/ooni/spec/blob/master/data-formats/df-006-tlshandshake.md) timing data for the domains of services reportedly restricted in Türkiye (Twitter/X, Facebook, Instagram, WhatsApp, YouTube, TikTok, Signal, and Telegram) to assess whether TLS handshake times increased unusually on the days of reported restrictions compared to the days before and after (which is what we would expect to see in a throttling event). We then **compared this data to TLS handshake timing data aggregated from other hosts that shared the same IP prefixes, had similar network paths, or were hosted on the same infrastructure**, over the same period and within the same ASes. If a spike in TLS handshake times occurred on the day of a reported throttling event for the targeted service, but not for aggregated hosts used for the base during the same period, we considered it a strong indicator of throttling.

## Findings

Our analysis of [OONI data](https://ooni.org/data) from Türkiye indicates that access to Twitter/X, Facebook, Instagram, WhatsApp, YouTube, TikTok, and Signal was throttled, whereas access to Telegram was blocked. Additionally, [YouTube was blocked via DNS on TurkNet (AS12735)](https://explorer.ooni.org/search?since=2025-03-19&until=2025-03-20&failure=false&domain=www.youtube.com&probe_cc=TR&probe_asn=AS12735&only=confirmed). These censorship events were primarily observed on the **TTNET (AS47331) and Turkcell Superonline (AS34984)** networks, occurring on **19th and 20th March 2025** (coinciding with the [onset of protests](https://www.aljazeera.com/features/2025/3/23/why-are-there-protests-in-turkiye-what-to-know)) and on **8th September 2025** (following [clashes between police and opposition supporters](https://www.euronews.com/2025/09/08/turkey-restricts-internet-access-amid-opposition-party-standoff)). Further details are shared in the following sections.

### Twitter/X

#### March 2025

[OONI Probe](https://ooni.org/install/) includes the [Web Connectivity experiment](https://ooni.org/nettest/web-connectivity/), which is designed to measure the blocking of many different [websites](https://ooni.org/support/faq#which-websites-will-i-test-for-censorship-with-ooni-probe) (included in the public, community-curated [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists)). The URLs related to X/Twitter services are stored in the [Global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv), which is tested in all countries where OONI Probe users run tests. 

Among the domains pertaining to the Twitter/X services, we chose the one with the biggest sample (number of measurements) for this analysis: `twitter.com`. While other domains (`t.co`, `x.com`, `upload.twitter.com`) are also used by Twitter/X, we excluded them from this analysis because of the lack of measurement coverage.

The following chart shows the TLS handshake time per AS for `twitter.com` throughout March 2025. As we can see, there seems to be a spike in the TLS handshake time on 19th and 20th March 2025 for `twitter.com` (coinciding with the [onset of protests](https://www.aljazeera.com/features/2025/3/23/why-are-there-protests-in-turkiye-what-to-know)), specially on **TTNET (AS47331) and **Turkcell Superonline (AS34984)**, as illustrated below.

{{<img src="images/image19.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** TLS handshake times for `twitter.com` on several ASes in Türkiye in March 2025 (source: [OONI data](https://docs.ooni.org/data)).

TTNET A.Ş., the owner of AS47331 network, is part of the Türk Telekom Group, and is the largest Internet Service Provider (ISP) in Türkiye. When we focus on **TTNET (AS47331),** we can see that the data shows a strong indication of throttling on 19th and 20th March 2025. The quantiles are unusually high during those days, implying that the TLS handshake time was unusually high (demonstrated below).

{{<img src="images/image15.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Daily TLS handshake time quantiles for `twitter.com` on AS47331 in Türkiye in March 2025 (source: [OONI data](https://docs.ooni.org/data)).

The chart above displays the daily TLS handshake time quantiles (10th, 50th, 75th, 90th percentile, and maximum) for `twitter.com` on AS47331 during March 2025. This chart clearly highlights the significant increase in TLS handshake times on March 19th and 20th, with the upper quantiles showing a dramatic spike compared to other days.

To establish a baseline, we looked into the most frequently measured IP addresses for `twitter.com`, and we found that the most common IP addresses are within the prefixes **162.159.0.0/16** and **172.66.0.0/16**.

{{<img src="images/image32.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Distribution of OONI measurements for `twitter.com` based on IP prefix in Türkiye, March 2025 (source: [OONI data](https://docs.ooni.org/data)).

The bar chart above illustrates the distribution of observation counts for various IP prefixes associated with `twitter.com`. It shows that the prefixes **162.159.0.0/16** and **172.66.0.0/16** account for a substantial portion of OONI measurements, indicating they are primary hosts for Twitter traffic. And the testing of `twitter.com` still shows a strong indication of increased TLS handshake time on AS47331 for both these IP prefixes.

{{<img src="images/image21.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Distribution of TLS handshake times for `twitter.com` by IP prefix on AS47331 in Türkiye during March 2025 (source: [OONI data](https://docs.ooni.org/data)).

We then looked at other OONI measurements that were towards these same prefixes, but had a hostname field that was unrelated to `twitter.com`. The goal is to use these as baselines to rule out the possibility of the increased TLS handshake times being the result of a congested network link.

The hostnames in the table below shared the **same prefixes** (162.159.0.0/16 and 172.66.0.0/16) as Twitter, but were associated with domains unrelated to Twitter. We also list the number of OONI measurement observations for each hostname.

| Hostnames                 | Observation count |
| ------------------------- | ----------------- |
| `vimeo.com`             | 116               |
| `qph.fs.quoracdn.net`   | 84                |
| `qsbr.fs.quoracdn.net`  | 68                |
| `www.opentech.fund`     | 66                |
| `cdn-client.medium.com` | 62                |
| `iyiparti.org.tr`       | 60                |
| `www.quora.com`         | 58                |
| `livestream.com`        | 56                |
| `www.betternet.co`      | 54                |
| `discord.gg`            | 50                |
| `www.theglobalfund.org` | 50                |
| `status.im`             | 50                |
| `bi.org`                | 48                |
| `www.fastmail.com`      | 42                |
| `friendsoftheearth.uk`  | 41                |
| `medium.com`            | 41                |
| `miro.medium.com`       | 37                |
| `www.icj.org`           | 30                |
| `www.mamacash.org`      | 30                |

We used a total of **19 aggregated hosts as a baseline comparison**. When comparing the TLS handshake times for `twitter.com` against the 19 other hostnames (that use the same IP prefixes) on the same network (AS47331) in Türkiye, we see that there is a significant difference, as illustrated below.

{{<img src="images/image1.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake times for `twitter.com` vs 19 other hostnames using the same IP prefixes (162.159.0.0/16 and 172.66.0.0/16) on AS47331 in Türkiye during March 2025 (source: [OONI data](https://docs.ooni.org/data)).

Given that the TLS handshake time for `twitter.com` was significantly longer than for 19 other hostnames using the same IP prefixes and tested on the same network (AS47331) during the same period (March 2025), there is **strong indication that access to Twitter was throttled**.

Similarly, the quantile values for `twitter.com` are higher than those of the other 19 hosts.

{{<img src="images/image16.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake quantiles for `twitter.com` vs 19 other hostnames using the same IP prefixes (162.159.0.0/16 and 172.66.0.0/16) on AS47331 in Türkiye during March 2025 (source: [OONI data](https://docs.ooni.org/data)).

Since the TLS handshake time increases when a Twitter-related SNI is present, compared to other hosts using the same network prefixes, we conclude that this behavior is not due to general network congestion but rather to targeted throttling.

#### September 2025

Access to Twitter/X was reportedly [throttled again](https://www.fidh.org/en/region/europe-central-asia/turkey/turkey-stop-throttling-social-media-platforms-and-messaging-services) in Türkiye on 7th September 2025. Our analysis of OONI data shows that, similarly to the throttling event of March 2025, access to Twitter was throttled again around 8th September 2025.

The following chart illustrates our analysis of the TLS handshake times for three Twitter/X hostnames (`twitter.com`, `upload.twitter.com`, `x.com`) on three ASes in Türkiye between 1st to 15th September 2025.

{{<img src="images/image33.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake times for Twitter/X hostnames (`twitter.com`, `upload.twitter.com`, `x.com`) on three ASes in Türkiye between 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

As is evident, the above chart indicates **major throttling signals on two networks** – TTNET (AS47331) and Turkcell Superonline (AS34984) – where we observe long TLS handshake times (especially in comparison to the third AS in the chart). These are the same two networks where we previously observed the throttling of Twitter/X in March 2025 (discussed previously). Even though OONI measurement coverage is significantly larger for `twitter.com` in comparison to the measurement coverage for `upload.twitter.com` and `x.com`, we can still see that the testing of these hostnames results in longer TLS handshake times on TTNET (AS47331) and Turkcell Superonline (AS34984). These throttling signals are stronger around 8th September 2025.

Similarly, we observe high TLS handshake quantile values for `twitter.com` on TTNET (AS47331) and Turkcell Superonline (AS34984) during the same period.

{{<img src="images/image17.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake quantiles for `twitter.com` on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye between 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

As discussed previously, the most frequently measured IP addresses for `twitter.com` are within the 162.159.0.0/16 and 172.66.0.0/16 prefixes. This was also the case in September 2025, with 1023 measurement observations recorded for the 172.66.0.0/16 prefix and 937 measurement observations for the 162.159.0.0/16 prefix.

The plot below shows the distribution of TLS handshake times for `twitter.com` across major IP prefixes (162.159.0.0/16 and 172.66.0.0/16) on TTNET (AS47331) and Turkcell Superonline (AS34984) from 1st to 15th September 2025.  
  
{{<img src="images/image31.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Distribution of TLS handshake times for `twitter.com` across major IP prefixes on AS47331 and AS34984 in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

From the above chart, we observe long TLS handshake times on 8th September 2025, indicating the presence of throttling. To rule out the possibility of the increased TLS handshake times being the result of a congested network link, we looked at other OONI measurements that were towards the same prefixes (162.159.0.0/16 and 172.66.0.0/16), but with hostnames unrelated to `twitter.com`.

To this end, we used the following hostnames as a baseline for comparison.

| Hostnames                        | Total measurements |
| -------------------------------- | ------------------ |
| `vimeo.com`                    | 258                |
| `qph.fs.quoracdn.net`          | 152                |
| `qsbr.fs.quoracdn.net`         | 152                |
| `www.quora.com`                | 148                |
| `www.clintonfoundation.org`    | 148                |
| `cdn-client.medium.com`        | 146                |
| `www.opentech.fund`            | 146                |
| `www.unfe.org`                 | 142                |
| `www.ifex.org`                 | 142                |
| `iyiparti.org.tr`              | 140                |
| `www.humanrightsconnected.org` | 138                |
| `www.chinatimes.com`           | 134                |
| `matrix.org`                   | 134                |
| `cdt.org`                      | 124                |
| `cpj.org`                      | 124                |
| `gelecekpartisi.org.tr`        | 124                |
| `www.amnestyusa.org`           | 124                |
| `bianet.org`                   | 123                |
| `www.betternet.co`             | 122                |
| `ultravpn.com`                 | 120                |

From the above table, we used a total of **20 aggregated hosts as a baseline comparison**. When comparing the TLS handshake times for `twitter.com` against the 20 other hostnames (that use the same IP prefixes) on the same network (AS34984) in Türkiye, we see that there is a significant difference, as illustrated below.

{{<img src="images/image28.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake times for `twitter.com` vs 20 other hostnames using the same IP prefixes (162.159.0.0/16 and 172.66.0.0/16) on AS34984 in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

Given that the TLS handshake time for `twitter.com` was significantly longer than for 20 other hostnames using the same IP prefixes and tested on the same network (AS34984) during the same period, there is **strong indication that access to Twitter was throttled** again in September 2025.

### Facebook, Instagram, and WhatsApp

#### March 2025

Similarly to Twitter/X, OONI data shows an unusually high increase in the TLS handshake time for `www. facebook.com` and `www.instagram.com` on 19th and 20th March 2025, particularly on the **TTNET (AS47331)** and **Turkcell Superonline (AS34984)** networks.

{{<img src="images/image24.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart**: TLS handshake times for `www.facebook.com` and `www.instagram.com` on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye from 10th to 30th March 2025 (source: [OONI data](https://docs.ooni.org/data)).

The above chart shows the daily TLS handshake time for `www. facebook.com` and `www.instagram.com` on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye from 10th to 30th March 2025. A noticeable increase in TLS handshake times is visible for both domains, particularly on March 19th and 20th, suggesting that access to these sites was throttled on those networks.

The following charts further disaggregate the TLS handshake time data for Instagram and Facebook by daily quantiles (10th, 50th, 75th, 90th percentile, and maximum). The consistent and significant rise in the upper quantiles on March 19th and 20th provides strong evidence of throttling affecting these platforms on these specific networks (AS47331 and AS34984).

{{<img src="images/image35.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake quantiles for `www.instagram.com` on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye from 10th to 30th March 2025 (source: [OONI data](https://docs.ooni.org/data)).

{{<img src="images/image6.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake quantiles for `www.facebook.com` on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye from 10th to 30th March 2025 (source: [OONI data](https://docs.ooni.org/data)).

Meta has several domains related to their main services (Instagram, Facebook, Whatsapp, Messenger). The following table shares the distribution of OONI measurement observations for each of the Meta hostnames tested by [OONI Probe](https://ooni.org/install) users in Türkiye throughout March 2025.

| Hostnames                            | Observation count |
| ------------------------------------ | ----------------- |
| `scontent.xx.fbcdn.net`            | 1966              |
| `edge-mqtt.facebook.com`           | 1954              |
| `external.xx.fbcdn.net`            | 1930              |
| `web.whatsapp.com`                 | 1854              |
| `v.whatsapp.net`                   | 1848              |
| `b-api.facebook.com`               | 1830              |
| `b-graph.facebook.com`             | 1824              |
| `star.c10r.facebook.com`           | 1820              |
| `www.whatsapp.com`                 | 182               |
| `cdn.fbsbx.com`                    | 134               |
| `static.cdninstagram.com`          | 126               |
| `lookaside.facebook.com`           | 126               |
| `scontent-ams4-1.cdninstagram.com` | 118               |
| `video.cdninstagram.com`           | 116               |
| `web.facebook.com`                 | 114               |

Examining the TLS handshake times for Meta hostnames with the largest measurement coverage (Facebook endpoints) in March 2025, we observe elevated TLS handshake times on March 19th and 20th, as illustrated below.

{{<img src="images/image27.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart**: TLS handshake times for Facebook endpoints on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye from 10th to 30th March 2025 (source: [OONI data](https://docs.ooni.org/data)).

We therefore conclude that the analyzed Facebook and Instagram targets experienced increased TLS handshake times, suggesting that access to these platforms was throttled in Türkiye on 19th and 20th March 2025, coinciding with the [onset of protests](https://www.dw.com/en/turkeys-erdogan-says-he-wont-give-in-amid-protests/a-71999067).

#### September 2025

OONI data suggests that the same pattern of throttling – impacting Facebook, Instagram, and WhatsApp – is repeated on 8th September 2025.

Specifically, OONI data shows a major increase in the TLS handshake time for `www.facebook.com`, `www.instagram.com`, and `web.whatsapp.com` on 8th September 2025 on the **TTNET (AS47331)** and **Turkcell Superonline (AS34984)** networks, as illustrated below.

{{<img src="images/image22.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart**: TLS handshake times for `www.facebook.com`, `www.instagram.com`, and `web.whatsapp.com` on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

The following charts disaggregate the TLS handshake time data for Instagram, Facebook, and WhatsApp by daily quantiles (10th, 50th, 75th, 90th percentile, and maximum). The consistent and significant rise in the upper quantiles on 8th September 2025 indicates that throttling affected these platforms on these specific networks (AS47331 and AS34984).

{{<img src="images/image5.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake quantiles for `www.facebook.com` on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

{{<img src="images/image29.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake quantiles for `www.instagram.com` on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

{{<img src="images/image30.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake quantiles for `web.whatsapp.com` on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

The following table shares the distribution of OONI measurement observations for each of the Meta hostnames tested by [OONI Probe](https://ooni.org/install) users on the same networks in Türkiye in September 2025.

| Hostnames                     | Total measurements |
| ----------------------------- | ------------------ |
| `edge-mqtt.facebook.com`    | 1406               |
| `scontent.xx.fbcdn.net`     | 1403               |
| `external.xx.fbcdn.net`     | 1398               |
| `v.whatsapp.net`            | 1298               |
| `b-api.facebook.com`        | 1292               |
| `star.c10r.facebook.com`    | 1291               |
| `b-graph.facebook.com`      | 1288               |
| `www.whatsapp.com`          | 123                |
| `cdn.fbsbx.com`             | 115                |
| `video.cdninstagram.com`    | 105                |
| `scontent.cdninstagram.com` | 95                 |
| `static.cdninstagram.com`   | 94                 |
| `staticxx.facebook.com`     | 91                 |
| `web.facebook.com`          | 90                 |
| `edge-chat.instagram.com`   | 81                 |

When looking at the TLS handshake times for Meta hostnames that received the largest measurement coverage (Facebook endpoints) in September 2025, we observe that a few measurements also presented long TLS handshake times on 8th September 2025 (illustrated below).

{{<img src="images/image8.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart**: TLS handshake times for Facebook endpoints on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

### Youtube

#### March 2025

Access to YouTube appears to have been both throttled and [blocked](https://explorer.ooni.org/search?since=2025-03-19&until=2025-03-20&failure=false&domain=www.youtube.com&probe_cc=TR&probe_asn=AS12735&only=confirmed).

OONI data in the following charts shows the TLS handshake time for `www.youtube.com` on the ASes where it received the significant measurement coverage and increased TLS handshake times between 10th to 30th March 2025.

{{<img src="images/image10.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart**: TLS handshake times for `www.youtube.com` on the ASes in Türkiye where it received significant OONI measurement coverage and increased TLS handshake times from 10th to 30th March 2025 (source: [OONI data](https://docs.ooni.org/data)).

As is evident from the above charts, there is a spike in the TLS handshake times on multiple networks (AS12735, AS15897, AS34984, AS47331) on March 19th and 20th, indicating that access to YouTube was throttled on these two days. We also observe unusually high TLS handshake quantile values for `www.youtube.com` on these networks (AS12735, AS15897, AS34984, AS47331) on 19th and 20th March 2025.

{{<img src="images/image12.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake quantiles for `www.youtube.com` on several ASes (AS12735, AS15897, AS34984, AS47331) in Türkiye between 10th to 30th March 2025 (source: [OONI data](https://docs.ooni.org/data)).

To establish a baseline for comparison, we looked into the most frequently measured IP addresses for `www.youtube.com`, and we found that the most common IP addresses are within the prefixes **172.217.0.0/16**, **142.250.0.0/16, 142.251.0.0/16, 216.58.0.0/16**.

The following table shares the number of OONI measurement observations for each of these IP prefixes.

| IP prefixes    | Observation count |
| -------------- | ----------------- |
| 172.217.0.0/16 | 8757              |
| 142.250.0.0/16 | 6986              |
| 142.251.0.0/16 | 6477              |
| 216.58.0.0/16  | 5566              |

We used **30 aggregated hosts as a baseline for comparison**. These hosts were selected because they shared similar network paths or were hosted on the same infrastructure (Google). This approach allowed for a more accurate assessment of whether the observed YouTube performance issues were specific to YouTube or indicative of broader network congestion. In the following table, we list these hostnames, along with the number of measurement observations for each.

| Hostnames                                | Observation count |
| ---------------------------------------- | ----------------- |
| `firebaseinstallations.googleapis.com` | 895               |
| `notifications-pa.googleapis.com`      | 851               |
| `www.kickassclassical.com`             | 772               |
| `getoutline.org`                       | 336               |
| `www.google.com`                       | 320               |
| `drive.google.com`                     | 262               |
| `play.googleapis.com`                  | 257               |
| `censored.tv`                          | 256               |
| `fcm.googleapis.com`                   | 249               |
| `messages.google.com`                  | 90                |
| `www.getoutline.org`                   | 90                |
| `news.google.com`                      | 90                |
| `groups.google.com`                    | 89                |
| `googleweblight.com`                   | 84                |
| `transsicko.blogspot.com`              | 83                |
| `encrypted-tbn0.gstatic.com`           | 82                |
| `webcache.googleusercontent.com`       | 76                |
| `translate.google.com`                 | 74                |
| `www.privaterra.org`                   | 73                |
| `transparencyreport.google.com`        | 71                |
| `mail.google.com`                      | 69                |
| `lh3.googleusercontent.com`            | 69                |
| `www.google.com.tr`                    | 69                |
| `cdn.ampproject.org`                   | 68                |
| `bard.google.com`                      | 67                |
| `lens.google.com`                      | 67                |
| `dl.google.com`                        | 66                |
| `www.patlakhaber.com`                  | 66                |
| `www.gstatic.com`                      | 66                |
| `play-lh.googleusercontent.com`        | 65                |

The following chart compares the TLS handshake times for `www.youtube.com` against the 30 other aggregated baseline hosts. By comparing YouTube's TLS handshake times to those of other Google-hosted services and similarly routed websites, this chart helps to determine if the observed increase in YouTube's TLS handshake times is an isolated incident or part of a broader network issue.

{{<img src="images/image20.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake times for `www.youtube.com` vs 30 other hostnames that shared similar network paths or were hosted on the same infrastructure (Google) from 10th to 30th March 2025 in Türkiye (source: [OONI data](https://docs.ooni.org/data)).

Given that the TLS handshake time for `www.youtube.com` was significantly longer than for 30 other hostnames that shared similar network paths or were hosted on the same infrastructure (Google) during the same period (from 10th to 30th March 2025), there is **strong indication that access to YouTube was throttled in Türkiye**.

We also observe that access to [YouTube was blocked by means of DNS](https://explorer.ooni.org/search?since=2025-03-19&until=2025-03-20&failure=false&domain=www.youtube.com&probe_cc=TR&probe_asn=AS12735&only=confirmed) on TurkNet (AS12735). We are able to [automatically confirm this blocking case](https://explorer.ooni.org/search?since=2025-03-19&until=2025-03-20&failure=false&domain=www.youtube.com&probe_cc=TR&probe_asn=AS12735&only=confirmed) because OONI data [shows](https://explorer.ooni.org/m/20250319232007.473186_TR_webconnectivity_d772ffa1a4764261) that DNS resolution returns an IP address (`195.175.254.2`) associated with censorship, which has been added to our [database](https://github.com/ooni/blocking-fingerprints/blob/main/fingerprints_dns.csv) to enable automated confirmation of such cases.

#### September 2025

Access to YouTube was reportedly [throttled again](https://www.fidh.org/en/region/europe-central-asia/turkey/turkey-stop-throttling-social-media-platforms-and-messaging-services) in Türkiye on 7th September 2025. Our analysis of OONI data shows that, similarly to the throttling event of March 2025, access to YouTube was throttled again around 8th September 2025.

The following chart shows the TLS handshake time per AS for `www.youtube.com` from 1st to 15th September 2025. As we can see, there seems to be a spike in the TLS handshake time on 8th September 2025 for `www.youtube.com`, specially on **TTNET (AS47331)** and **Turkcell Superonline (AS34984)**, as illustrated below.

{{<img src="images/image4.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** TLS handshake times for `www.youtube.com` on several ASes in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

The long TLS handshake times observed on 8th September 2025 on TTNET (AS47331) and Turkcell Superonline (AS34984) – particularly when compared to the TLS times before and after this date – suggest that access to **YouTube was throttled** on these networks. This is further suggested because we observe high TLS handshake quantile values for `www.youtube.com` on TTNET (AS47331) and Turkcell Superonline (AS34984) during the same period.

{{<img src="images/image36.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake quantiles for `www.youtube.com` on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye between 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

To establish a baseline for comparison, we looked into the most frequently measured IP addresses for `www.youtube.com`, and we found that the most common IP addresses are within the prefixes **172.217.0.0/16**, **142.250.0.0/16, 142.251.0.0/16, 216.58.0.0/16**. The following table shares the number of OONI measurement observations for each of these IP prefixes between 1st to 15th September 2025.

| IP prefixes    | Observation count |
| -------------- | ----------------- |
| 172.217.0.0/16 | 6854              |
| 142.250.0.0/16 | 5582              |
| 142.251.0.0/16 | 5284              |
| 216.58.0.0/16  | 4428              |

The following chart shows the TLS handshake times for `www.youtube.com` across each of these IP prefixes from 1st to 15th September 2025. As evident from the data, there is a significant spike in handshake duration on 8 September 2025 across all prefixes, strongly suggesting that access to YouTube was throttled on that day.

{{<img src="images/image7.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** TLS handshake times for `www.youtube.com` on major IP prefixes in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

Similarly to our March 2025 analysis (discussed previously), we used **30 aggregated hosts as a baseline for comparison**. These hosts were selected because they shared similar network paths or were hosted on the same infrastructure (Google). This approach allowed for a more accurate assessment of whether the observed YouTube performance issues were specific to YouTube or indicative of broader network congestion. In the following table, we list these hostnames, along with the number of measurements for each.

| Hostnames                                | Total Measurements |
| ---------------------------------------- | ------------------ |
| `notifications-pa.googleapis.com`      | 840                |
| `firebaseinstallations.googleapis.com` | 826                |
| `www.kickassclassical.com`             | 650                |
| `drive.google.com`                     | 224                |
| `messages.google.com`                  | 94                 |
| `groups.google.com`                    | 91                 |
| `lens.google.com`                      | 88                 |
| `encrypted-tbn0.gstatic.com`           | 88                 |
| `news.google.com`                      | 86                 |
| `android.apis.google.com`              | 83                 |
| `translate.google.com`                 | 76                 |
| `mail.google.com`                      | 76                 |
| `bard.google.com`                      | 76                 |
| `webcache.googleusercontent.com`       | 72                 |
| `transparencyreport.google.com`        | 72                 |
| `lh3.googleusercontent.com`            | 72                 |
| `googleweblight.com`                   | 71                 |
| `photos.google.com`                    | 71                 |
| `www.getoutline.org`                   | 70                 |
| `www.patlakhaber.com`                  | 69                 |
| `www.privaterra.org`                   | 67                 |
| `sites.google.com`                     | 66                 |
| `transsicko.blogspot.com`              | 64                 |
| `dl.google.com`                        | 63                 |
| `play-lh.googleusercontent.com`        | 63                 |
| `play.google.com`                      | 61                 |
| `www.gstatic.com`                      | 60                 |
| `cdn.ampproject.org`                   | 60                 |
| `lh3.ggpht.com`                        | 60                 |
| `lh4.ggpht.com`                        | 60                 |

The following charts compare the TLS handshake times for `www.youtube.com` against the 30 other aggregated baseline hosts. By comparing YouTube's TLS handshake times to those of other Google-hosted services and similarly routed websites, these charts help with determining if the observed increase in YouTube's TLS handshake times is an isolated incident or part of a broader network issue.

{{<img src="images/image11.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake times for `www.youtube.com` vs 30 other hostnames that shared similar network paths or were hosted on the same infrastructure (Google) from 1st to 15th September 2025 in Türkiye (source: [OONI data](https://docs.ooni.org/data)).

Given that the TLS handshake time for `www.youtube.com` was significantly longer than for 30 other hostnames that shared similar network paths or were hosted on the same infrastructure (Google) during the same period (from 1st to 15th September 2025), there is **strong indication that access to YouTube was throttled in Türkiye**.

Similarly to the events of March 2025, OONI data [shows](https://explorer.ooni.org/m/20250908063958.191507_TR_webconnectivity_aaf74b42dd906fcb) that access to [YouTube was blocked by means of DNS on TurkNet (AS12735) on 8th September 2025](https://explorer.ooni.org/search?since=2025-09-01&until=2025-09-15&failure=false&domain=www.youtube.com&probe_cc=TR&only=confirmed) because DNS resolution returns an IP address (`195.175.254.2`) [associated with censorship](https://github.com/ooni/blocking-fingerprints/blob/main/fingerprints_dns.csv). All [other YouTube measurements](https://explorer.ooni.org/search?since=2025-09-01&until=2025-09-15&failure=false&domain=www.youtube.com&probe_cc=TR&probe_asn=AS12735) collected from this network between 1st and 15th September 2025 indicate that YouTube was accessible, with the [block limited to 8th September 2025](https://explorer.ooni.org/search?since=2025-09-01&until=2025-09-15&failure=false&domain=www.youtube.com&probe_cc=TR&only=confirmed) – the same day as the observed throttling events.

Overall, OONI data suggests that access to YouTube was throttled and blocked in similar ways and on the same networks in Türkiye during both March and September 2025.

### TikTok

While we observe some indication of TikTok throttling in Türkiye on 19th and 20th March 2025, the signal is not as strong as that observed for other domains analyzed as part of this study.

Similarly to Twitter/X, Facebook, Instagram, WhatsApp, and YouTube, our analysis shows increased TLS handshake times for `www.tiktok.com` on 19th and 20th March 2025 on several ASes (AS47331, AS34984, and AS8386) – with the strongest signal being observed on TTNET (AS47331) – suggesting that access to TikTok may have been throttled on these days. Establishing a baseline for comparison, however, is more challenging, as TikTok measurements collected from Türkiye in March 2025 span a broad range of IP prefixes.

OONI data provides a much stronger signal of TikTok throttling in September 2025. The following chart shows significant spikes in TLS handshakes times for `www.tiktok.com` on 8th September 2025 on the TTNET (AS47331) and Turkcell Superonline (AS34984) networks.

{{<img src="images/image18.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart**: TLS handshake times for `www.tiktok.com` on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

However, when disaggregating by IP prefix, we observe that only a few actually show signs of throttling. The major IP prefixes are presented in the following plot, along with the distribution of TikTok measurement observations for each in September 2025.  
  
{{<img src="images/image25.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Distribution of OONI measurement observations for `www.tiktok.com` based on major IP prefixes in Türkiye, September 2025 (source: [OONI data](https://docs.ooni.org/data)).

The following chart shows the TLS handshake times for `www.tiktok.com` across each of these IP prefixes from 1st to 15th September 2025. As evident from the data, there is a significant spike in handshake duration on 8 September 2025 across all prefixes, suggesting that access to TikTok was throttled on that day.

{{<img src="images/image9.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** TLS handshake times for `www.tiktok.com` on major IP prefixes in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

When identifying baseline hostnames for these prefixes, we find that the sample size is much smaller than the measurement volume for `www.tiktok.com`, limiting our ability to effectively compare results and confirm TikTok throttling with greater confidence.

{{<img src="images/image13.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake times for `www.tiktok.com` and other hostnames sharing the same IP prefixes in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

It’s worth noting, though, that we observe high TLS handshake quantile values for `www.tiktok.com` on TTNET (AS47331) and Turkcell Superonline (AS34984) on 8th September 2025, further suggesting that access to TikTok was throttled in Türkiye on that day.  
  
{{<img src="images/image26.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake quantiles for `www.tiktok.com` on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye between 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

### Telegram Web

Access to Telegram Web (`web.telegram.org`) appears to have been [blocked](https://explorer.ooni.org/m/20250320132947.738700_TR_telegram_badb6172dd4bb4f8), not throttled.

OONI data collected from Türkiye between 10th to 30th March 2025 [shows](https://explorer.ooni.org/chart/mat?probe_cc=TR&since=2025-03-10&until=2025-03-30&time_grain=day&axis_x=measurement_start_day&test_name=telegram) that the OONI Probe testing of Telegram mainly exhibited anomalies on 19th and 20th March 2025, coinciding with the period when the aforementioned social media platforms were throttled.

Our analysis of these measurements indicates that the elevated TLS handshake times observed on TTNET (AS47331) and Turkcell Superonline (AS34984) for `web.telegram.org` were caused by TLS connections ending in “generic timeout errors” (as illustrated below). This suggests that access to Telegram Web was [blocked](https://explorer.ooni.org/m/20250320132947.738700_TR_telegram_badb6172dd4bb4f8) rather than throttled.

{{<img src="images/image34.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart**: TLS handshake times for `web.telegram.org` on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye from 10th to 30th March 2025 (source: [OONI data](https://docs.ooni.org/data)).

We observed the [exact same pattern on 8th September 2025](https://explorer.ooni.org/chart/mat?probe_cc=TR&since=2025-09-01&until=2025-09-15&time_grain=day&axis_x=measurement_start_day&test_name=telegram), when the OONI Probe testing of `web.telegram.org` resulted in TLS handshake timeout errors on TTNET (AS47331) and Turkcell Superonline (AS34984), suggesting that access to Telegram Web was [blocked](https://explorer.ooni.org/m/20250908160634.609588_TR_telegram_88734ac91caf4f89) on those networks on that day.

{{<img src="images/image14.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart**: TLS handshake times for `web.telegram.org` on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

It is worth noting that the block appears to have been [limited to Telegram Web](https://explorer.ooni.org/m/20250908160634.609588_TR_telegram_88734ac91caf4f89), as connections to the (tested) endpoints used by the Telegram mobile app were successful.

### Signal

Similar to our findings for TikTok, OONI data provides a stronger indication of Signal throttling in September 2025 compared to March 2025.

For Signal, we observed a consistent increase in TLS handshake times on 19th and 20th March 2025, particularly on TTNET (AS47331) and Turkcell Superonline (AS34984). On TTNET (AS47331), there was a sustained slowdown throughout March 2025, with a pronounced spike on those two days. The increase in TLS handshake times on Turkcell Superonline (AS34984) aligns with patterns observed for other throttled domains, suggesting that throttling was deployed targeting Signal Messenger on 19th and 20th March 2025. When disaggregating Signal data by hostname, we find that `storage.signal.org`, `chat.signal.org`, and `cdsi.signal.org` exhibited the longest TLS handshake times on both ASes.

The following chart shows TLS handshake times for `storage.signal.org` on TTNET (AS47331) and Turkcell Superonline (AS34984) between 1st and 15th September 2025. As shown, there is a noticeable spike in TLS handshake times on 8th September 2025 – coinciding with the date on which access to Signal was [reportedly disrupted](https://www.fidh.org/en/region/europe-central-asia/turkey/turkey-stop-throttling-social-media-platforms-and-messaging-services) – suggesting that access to Signal was throttled on that day.

{{<img src="images/image3.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** TLS handshake times for `storage.signal.org` on TTNET (AS47331) and Turkcell Superonline (AS34984) in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

To establish a baseline for comparison, we looked into the most frequently measured IP addresses for `storage.signal.org`. We found that the most common IP addresses are within the prefixes in the following table, each of which is listed along with the number of OONI measurement observations for each.

| IP prefixes    | Observation count |
| -------------- | ----------------- |
| 172.217.0.0/16 | 313               |
| 142.250.0.0/16 | 397               |
| 142.251.0.0/16 | 326               |
| 216.58.0.0/16  | 257               |

The following chart shows the TLS handshake times for `storage.signal.org` across each of these IP prefixes from 1st to 15th September 2025. As evident from the data, there is a significant spike in TLS handshake duration on 8th September 2025 across all prefixes, further suggesting that access to Signal was throttled on that day.

{{<img src="images/image37.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** TLS handshake times for `storage.signal.org` on major IP prefixes in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

Baseline domains for [storage.signal.org](http://storage.signal.org)

We used **20 aggregated hosts as a baseline for comparison**. The following table lists 20 hostnames that share the same IP prefixes as `storage.signal.org`, along with the number of OONI measurements for each.

| Hostnames                                | Measurement count |
| ---------------------------------------- | ----------------- |
| `notifications-pa.googleapis.com`      | 840               |
| `firebaseinstallations.googleapis.com` | 826               |
| `www.kickassclassical.com`             | 650               |
| `drive.google.com`                     | 224               |
| `messages.google.com`                  | 94                |
| `groups.google.com`                    | 91                |
| `lens.google.com`                      | 88                |
| `encrypted-tbn0.gstatic.com`           | 88                |
| `news.google.com`                      | 86                |
| `android.apis.google.com`              | 83                |
| `translate.google.com`                 | 76                |
| `mail.google.com`                      | 76                |
| `bard.google.com`                      | 76                |
| `webcache.googleusercontent.com`       | 72                |
| `transparencyreport.google.com`        | 72                |
| `lh3.googleusercontent.com`            | 72                |
| `googleweblight.com`                   | 71                |
| `photos.google.com`                    | 71                |
| `www.getoutline.org`                   | 70                |
| `www.patlakhaber.com`                  | 69                |

The following chart compares the TLS handshake times for `storage.signal.org` against the 20 other aggregated baseline hosts (listed above). By comparing Signal’s TLS handshake times to those of other hostnames sharing the same IP prefixes, this chart helps to determine if the observed increase in Signal’s TLS handshake times is an isolated incident or part of a broader network issue.

{{<img src="images/image2.png" title="OONI Explorer" alt="OONI Explorer">}}

**Chart:** Comparison of TLS handshake times for `storage.signal.org` and 20 other hostnames sharing the same IP prefixes in Türkiye from 1st to 15th September 2025 (source: [OONI data](https://docs.ooni.org/data)).

Given that the TLS handshake times for `storage.signal.org` were significantly longer than for 20 other hostnames sharing the same IP prefixes during the same period (from 1st to 15th September 2025), there is **strong indication that access to Signal was throttled in Türkiye**.

## Conclusion

Access to major social media and instant messaging platforms is often [restricted](https://ooni.org/reports/social-media-im/) during protests and other politically sensitive periods worldwide. Türkiye, specifically, is known to implement politically-motivated censorship and to restrict access to social media platforms in recent years.

In the aftermath of a [deadly earthquake](https://edition.cnn.com/2023/02/13/middleeast/turkey-earthquake-building-construction-intl/index.html) in February 2023, Türkiye [throttled and blocked access to Twitter/X](https://ooni.org/post/2023-turkey-throttling-blocking-twitter/). Access to [Instagram was temporarily blocked](https://explorer.ooni.org/findings/330022197701) in August 2024, and Türkiye has been [blocking access to Discord](https://explorer.ooni.org/findings/267640924000) since October 2024. When the protests erupted in March 2025, Türkiye started [blocking the opposition campaign Boykotyap](https://explorer.ooni.org/findings/72755787600). Therefore, the censorship events documented as part of this study add to an existing environment of information control.

By simultaneously restricting access to multiple major social media and instant messaging platforms – including Twitter/X, Facebook, Instagram, WhatsApp, YouTube, TikTok, Signal, and Telegram – Türkiye was able to maximize information control during periods of heightened unrest. By implementing intermittent, short-term restrictions lasting only a day or two, the authorities may have **strategically amplified the political impact** of these measures while minimizing the costs associated with prolonged censorship. OONI data has shown that this approach is [commonly adopted worldwide](https://ooni.org/reports/social-media-im/).

By throttling access to platforms rather than outright blocking them, authorities may seek plausible deniability, raising concerns about transparency and potential human rights abuses.

## Acknowledgements

We thank [OONI Probe](https://ooni.org/install) users in Türkiye for contributing measurements, supporting this study.
