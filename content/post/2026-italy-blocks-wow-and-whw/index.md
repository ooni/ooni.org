---
title: "Italy Blocks Reproductive Rights Websites Women on Web (WoW) and Women Help Women (WHW)"
description: "This report documents the blocking of Women on Web (WoW) and Women Help Women (WHW) domains in Italy based on OONI data."
author: "Maria Xynou (OONI), Arturo Filastò (OONI), Mehul Gulati (OONI), Venny Ala-Siurua (Women on Web), Hannes-Jeremia Jaacks (Women on Web)"
date: "2026-07-28"
tags: ["country-it", "censorship", "theme-human_rights"]
categories: ["report"]
---

{{<img src="images/image8.png">}}

In this report, we share [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=IT&since=2025-11-01&until=2026-06-01&time_grain=day&axis_x=measurement_start_day&axis_y=domain&test_name=web_connectivity&domain=www.womenonweb.org%2Cwomenhelp.org) on the blocking of the [Women on Web (WoW)](https://www.womenonweb.org/) and [Women Help Women (WHW)](https://womenhelp.org/) websites in Italy. These websites facilitate access to reproductive health care and offer abortion information.

{{<table-of-contents>}}

## Key findings

Our analysis of [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=IT&since=2025-11-01&until=2026-06-01&time_grain=day&axis_x=measurement_start_day&axis_y=domain&test_name=web_connectivity&domain=www.womenonweb.org%2Cwomenhelp.org) collected from OONI Probe tests of Women on Web (`www.womenonweb.org`) and Women Help Women (`womenhelp.org`) in Italy between 1 November 2025 and 1 June 2026 indicates that **at least 6 Internet Service Providers (ISPs)** -- including [several of Italy's largest networks by end-user population](https://www.agcom.it/comunicazione/comunicati-stampa/osservatorio-sulle-comunicazioni-n1-2026) -- **began blocking access to both domains in mid-February 2026** through [DNS tampering](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&only=anomalies).

Specifically, key findings include:

*   **Concurrent DNS-based blocking of both Women on Web (WoW) and Women Help Women (WHW) across multiple ISPs.** Beginning in mid-February 2026, OONI data shows DNS-based interference affecting both Women on Web (`www.womenonweb.org`) and Women Help Women (`womenhelp.org`) on the following networks: Fastweb (AS12874), Vodafone Italia (AS30722), EOLO (AS35612), Sky Italia (AS210278), and Iliad/Scaleway (AS29447). The sixth affected network differs by domain: Women on Web was blocked on [INTRED (AS41497)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&only=anomalies&probe_asn=AS41497), while Women Help Women was blocked on [WIND TRE (AS1267)](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS1267&only=anomalies).
*   **Bogon IP responses.** For both domains, [Fastweb (AS12874)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&only=anomalies&probe_asn=AS12874) and [Iliad/Scaleway (AS29447)](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS29447&only=anomalies) returned the bogon IP address `127.0.0.1` during DNS resolution. This behavior was also observed for Women on Web on [INTRED (AS41497)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&only=anomalies&probe_asn=AS41497).
*   **NXDOMAIN responses.** [Vodafone Italia (AS30722)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&probe_asn=AS30722&only=anomalies) and [EOLO (AS35612)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&probe_asn=AS35612&only=anomalies) returned NXDOMAIN responses for both domains, falsely indicating that the domains did not exist. For Women Help Women, the same behavior was additionally observed on [WIND TRE (AS1267)](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS1267&only=anomalies).
*   **Block page redirection.** On Sky Italia (AS210278), requests for both [Women on Web](https://explorer.ooni.org/m/20260526111322.137094_IT_webconnectivity_aa99fc9046f2c0e8) and [Women Help Women](https://explorer.ooni.org/m/20260525060419.321444_IT_webconnectivity_41550a954043c3c6) were redirected from mid-February 2026 onwards to the IP address `195.162.95.240`, where the server presented a TLS certificate for `blocking.it.isp.sky`. This hostname mismatch resulted in TLS certificate validation failures.

## Introduction

Since 2012, the [Open Observatory of Network Interference (OONI)](https://ooni.org/) builds [free software tools](https://ooni.org/install) and hosts [open data](https://ooni.org/data/) to empower the public to monitor, document, and respond to internet censorship around the world. OONI is a nonprofit organization registered in Italy that operates globally.

Having pioneered crowdsourced methods for measuring internet censorship, OONI is a leader in the network measurement world. We won the [2012 Access Now Freedom of Expression Tech Prize](https://web.archive.org/web/20130424101948/https://www.accessnow.org/blog/2012/12/11/first-annual-access-innovation-awards-prize-winners-announced) for actionable ideas on how to use information technology to promote and enable human rights and deliver social good. More recently, we received the [Free and Open Communications on the Internet (FOCI) 2023 Community Award](https://foci.community/awards.html).

Overall, we measure internet services in a crowdsourced way through network-level [experiments](https://ooni.org/nettest/) run by [OONI Probe app](https://ooni.org/install/) users in [around 170 countries](https://explorer.ooni.org/) each month (including [Italy](https://explorer.ooni.org/country/IT)). Each of these experiments has a different methodology, all of which are [publicly documented](https://github.com/ooni/spec/tree/master/nettests). Since these experiments are run from local network vantage points, they offer **unique insights into the accessibility or blocking of internet services at the edge of the network**. We publish OONI Probe test results (“measurements”) from around the world as [open data](https://ooni.org/data/) in real-time.

In June 2026, we collaborated with [Women on Web (WoW)](https://www.womenonweb.org/), a feminist nonprofit that facilitates access to abortion information and care, on a joint [research report](https://ooni.org/post/2026-women-on-web-blocked/) documenting the blocking of Women on Web domains around the world. We previously collaborated with Women on Web on a [2019 report](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/) documenting the blocking of Women on Web in several countries (Brazil, Iran, Saudi Arabia, South Korea, and Türkiye) based on OONI data. This report was the first of its kind, as no other digital abortion providers had been known to face as many government-ordered blockages. In 2020, we also documented the [blocking of Women on Web in Spain](https://ooni.org/post/2020-engine-evaluation-spain/). In the years following these reports, Women on Web’s work on fighting the censorship of their website has escalated to multiple national court battles.

This study builds upon these previous efforts. We investigate and document the blocking of Women on Web (`www.womenonweb.org`) and Women Help Women (`womenhelp.org`) in Italy, both of which showed signs of blocking in recent [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=IT&since=2025-11-01&until=2026-06-01&time_grain=day&axis_x=measurement_start_day&axis_y=domain&test_name=web_connectivity&domain=www.womenonweb.org%2Cwomenhelp.org) collected over the last months. The goal of this study is to document and increase transparency around how access to Women on Web (WoW) and Women Help Women (WHW) domains is being restricted in Italy, thereby limiting access to reproductive healthcare and rights information.

In this report, we share our findings from the analysis of [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=IT&since=2025-11-01&until=2026-06-01&time_grain=day&axis_x=measurement_start_day&axis_y=domain&test_name=web_connectivity&domain=www.womenonweb.org%2Cwomenhelp.org), documenting the blocking of Women on Web (`www.womenonweb.org`) and Women Help Women (`womenhelp.org`) domains in Italy. Further details are shared in the following methods and findings sections.

## Background

Abortion is [legal upon request in Italy during the first 12 weeks](https://reproductiverights.org/maps/world-abortion-laws/?country=ITA) of pregnancy. After 12 weeks, abortion is available only if the pregnant person’s health is at risk or if there are severe fetal abnormalities. While medication abortion can legally be administered in family planning clinics, very few regions have fully implemented these guidelines. Therefore access remains uneven, challenging to navigate and in practice abortion care is still provided primarily in hospitals.

Even if an abortion seeker is within the 12 week gestational limit and has access to a local hospital, a doctor can turn them away on the basis of conscientious objection, which legally allows any doctor to deny a patient an abortion on moral grounds. In 2019, it was [reported](https://journals.sagepub.com/doi/10.1177/09685332221119503) that 67% of Italian gynecologists were registered as conscientious objectors and multiple hospitals reported having a 100% conscientious objection rate. If a care seeker can find a doctor who is willing to perform an abortion, they must endure a 7-day waiting period between their initial request for an abortion and the procedure (which can push care seekers past the 12 week gestational limit). In April 2024, the Italian parliament passed a [measure allowing anti-abortion activists to enter abortion consultation clinics](https://www.theguardian.com/world/2024/apr/16/italy-passes-measures-to-allow-anti-abortion-activists-to-enter-abortion-clinics).

Founded in 2005, [Women on Web (WoW)](https://www.womenonweb.org/) is a nonprofit organization that was the first ever online international abortion care provider. Today, Women on Web facilitates online access to abortion pills, and carries out research and global advocacy to demedicalize, destigmatize and decriminalize abortion. While Women on Web initially focused on supporting women and pregnant people in countries where abortion was prohibited, their work  has since expanded to include **countries where abortion is legal but remains difficult to access**, such as Italy.

According to an [Italian spokesperson for Women on Web](https://www.internazionale.it/notizie/jennifer-guerra/2026/01/23/aborto-clandestino-italia):

*"Many come to us because they have no other choice, but over the years we've noticed that more and more women simply want to have a peaceful abortion at home, via telemedicine, which is also the direction [recommended](https://iris.who.int/server/api/core/bitstreams/d167e16e-cb54-4d7c-b237-1a3c879638f0/content) by the World Health Organization (WHO)."*

Quite similar to Women on Web (WoW), [Women Help Women (WHW)](https://womenhelp.org/) is a feminist nonprofit organization that works globally to expand access to abortion medicines by providing online information, counseling, and support for self-managed abortion, while advocating to make abortion care safer, more accessible, and more community-led.

But as of February 2026, OONI data suggests that some ISPs in Italy started blocking access to both [Women on Web (WoW)](https://www.womenonweb.org/) and [Women Help Women (WHW)](https://womenhelp.org/). In the following sections, we share the methods and findings of our study.

## Methods

The goal of this study was to investigate and document the blocking of [Women on Web (WoW)](https://www.womenonweb.org/) and [Women Help Women (WHW)](https://womenhelp.org/) domains in Italy. This builds upon our most recent study examining the [blocking of Women on Web domains around the world](https://ooni.org/post/2026-women-on-web-blocked/), as well as our previous studies documenting the [blocking of Women on Web in Spain](https://ooni.org/post/2020-engine-evaluation-spain/) and in [several other countries](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/) (Brazil, Iran, Saudi Arabia, South Korea, and Türkiye) based on OONI data.

To this end, we analyzed [OONI network measurement data](https://ooni.org/data) collected from Italy, pertaining to the testing of Women on Web (`www.womenonweb.org`) and Women Help Women (`womenhelp.org`) domains. OONI data is contributed by users of the [OONI Probe](https://ooni.org/install/) software, which is designed to [measure various forms of internet censorship](https://ooni.org/nettest/), including the blocking of websites. By default, OONI Probe users test the websites included in the public, community-curated [Citizen Lab test lists](https://github.com/citizenlab/test-lists), which include a [global list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) (including internationally-relevant URLs) and a [country-specific list](https://github.com/citizenlab/test-lists/tree/master/lists) (limited to websites that are relevant to that country). OONI Probe users test websites for censorship that are included in both of these lists (the country-specific list is determined based on the location of an OONI Probe user). Both Women on Web (`www.womenonweb.org`) and Women Help Women (`womenhelp.org`) domains are included in the [global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) for global OONI Probe testing.

The date range of our analysis spanned from **1st November 2025 to 1st June 2026** to include recent findings. This range was initially defined before Women Help Women (`womenhelp.org`) was added to the scope of the analysis.

### OONI data analysis

To determine whether and how access to Women on Web (`www.womenonweb.org`) and Women Help Women (`womenhelp.org`) domains was blocked in Italy, we analyzed [OONI data](https://ooni.org/data) collected from Italy pertaining to the testing of these websites. The date range of our analysis spanned from **1st November 2025 to 1st June 2026**.

Specifically, we analyzed measurements collected globally from the OONI Probe [Web Connectivity experiment](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md), which is designed to measure the blocking of websites. The OONI [Web Connectivity experiment](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md) is designed to measure the accessibility of URLs by performing the following steps:

*   Resolver identification
*   DNS lookup
*   TCP connect to the resolved IP addresses
*   TLS handshake to the resolved IP addresses
*   HTTP(s) GET request following redirects

The above steps are automatically performed from both the local network of the user, and from a control vantage point (known non-censored network). If the results from both networks are the same, the tested URL is annotated as accessible. If the results differ, the tested URL is annotated as [anomalous](https://ooni.org/support/interpreting-ooni-data/#anomalies), and the type of anomaly is further characterized depending on the reason that caused the failure (for example, if the TCP connection fails, the measurement is annotated as a TCP/IP anomaly).

[Anomalous measurements](https://ooni.org/support/interpreting-ooni-data/#anomalies) may be indicative of blocking, but [false positives](https://ooni.org/support/faq#what-are-false-positives) can occur. The likelihood of blocking is therefore greater if the overall volume of anomalous measurements is high in comparison to the overall measurement count – compared on an AS level within the same date range for each OONI Probe experiment type.

Each Web Connectivity measurement provides further network information (such as information pertaining to TLS handshakes) that helps with evaluating whether an anomalous measurement presents signs of blocking. We therefore disaggregate based on the reasons that caused the anomaly (e.g. connection reset during the TLS handshake) and if they are consistent, they provide a stronger signal of potential blocking.

Based on OONI’s heuristics, we are able to automatically confirm the blocking of websites based on [fingerprints](https://github.com/ooni/blocking-fingerprints) if a [block page](https://ooni.org/support/glossary#block-page) is served, or if DNS resolution returns an IP address known to be associated with censorship. These [blocking fingerprints](https://github.com/ooni/blocking-fingerprints) enable us to [automatically confirm website blocks](https://explorer.ooni.org/search?since=2026-01-30&until=2026-05-27&failure=false&only=confirmed) in many countries – including [Italy](https://explorer.ooni.org/search?since=2026-01-30&until=2026-06-22&failure=false&only=confirmed&probe_cc=IT) – where Internet Service Providers (ISPs) implement blocks with these techniques.

In support of this study, we performed dedicated data analysis using the [OONI Pipeline v5](https://github.com/ooni/data) to analyze OONI Web Connectivity measurements collected from Italy (between 1st November 2025 to 1st June 2026) through the [OONI Probe](https://ooni.org/install/) testing of Women on Web (`www.womenonweb.org`) and Women Help Women (`womenhelp.org`) domains.

Through OONI data analysis, we aimed to answer the following main research questions:

*   On **which networks** in Italy do we observe the strongest signals of blocking?
*   How are Women on Web (WoW) and Women Help Women (WHW) domains blocked on each of those networks? Which **censorship techniques** do ISPs adopt?

We chose these research questions because they could help confirm the blocks and inform the scale of blocking of Women on Web and Women Help Women domains.

The [OONI Pipeline v5](https://github.com/ooni/data) enables us to enumerate and aggregate all the errors (e.g., `tls.connection_reset`) that emerged in the testing of each of the Women on Web (WoW) and Women Help Women (WHW) domains. As a more consistent error observed in a larger volume of measurements provides a stronger signal of blocking, we aggregated the errors to determine whether a large percentage of measurements for a tested URL presented the same error (e.g. “tls_timeout_error”) in comparison to the overall measurement volume on a specific network, within a specified date range. The higher the ratio of consistent errors in comparison to the overall measurement count, the stronger the signal (and the greater our confidence) that access to the tested domain is (a) blocked, and (b) blocked in a specific way (e.g TLS interference).

As part of our analysis, we assigned confidence intervals to our censorship findings to distinguish between those where OONI data provides a strong signal of blocking (“high confidence”) and less strong signals (“medium confidence”). We excluded cases which provided weak signals as part of the findings. Those included cases with low measurement coverage (in comparison to the overall measurement coverage on a tested AS during the analysis period), a low percentage of anomalies (in comparison to the overall measurement volume for a tested service on a network), a relatively large proportion of inconsistent failure types and errors, as well as cases which were determined to be false positives based on known bugs or other issues (such as global failure rates as a result of tested services being hosted on unreliable servers, or measurements collected from unreliable networks).

To ensure more accurate and reliable findings, we set a measurement threshold in our analysis. We limited our findings to the ASes which received the largest OONI measurement coverage (and, therefore, the strongest blocking signals) for the Women on Web and Women Help Women domains during the analysis period (1st November 2025 to 1st June 2026).

The data analysis we performed for this study is available **[here](https://github.com/ooni/notebooks/tree/master/analysis/2026-italy-reproductive-rights)**.

## Findings

### Women on Web (WoW)

As of mid-February 2026, OONI data [suggests](https://explorer.ooni.org/chart/mat?probe_cc=IT&since=2025-11-01&until=2026-06-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org) that access to Women on Web’s main website (`www.womenonweb.org`) is blocked on some networks in Italy. This is illustrated through the following [chart](https://explorer.ooni.org/chart/mat?probe_cc=IT&since=2025-11-01&until=2026-06-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org), which aggregates OONI measurement coverage from the testing of `www.womenonweb.org` on [69 ASes](https://explorer.ooni.org/chart/mat?probe_cc=IT&since=2025-11-01&until=2026-06-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) in Italy between 1st November 2026 to 1st June 2026.

{{<img src="images/image1.png">}}

**Chart:** Aggregated OONI measurement coverage from the testing of Women on Web’s main website (`www.womenonweb.org`) on 69 ASes in Italy between 1st November 2025 to 1st June 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=IT&since=2025-11-01&until=2026-06-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org)).

As is evident from the above chart, the majority of OONI measurements previously indicated that `www.womenonweb.org` was accessible on tested networks in Italy, only presenting a spike in [anomalies](https://ooni.org/support/interpreting-ooni-data/#anomalies) from [18th February 2026](https://explorer.ooni.org/search?since=2026-02-18&until=2026-02-19&probe_cc=IT&test_name=web_connectivity&domain=www.womenonweb.org&failure=true) onwards, suggesting that access to the site was blocked on some networks around that date. The persistent increased volume of anomalies thereafter provides a further signal of blocking. It is worth noting that the large spike in measurements visible in the chart above, beginning in May 2026, does not necessarily indicate increased blocking. Rather, it reflects an increase in [OONI Probe](https://ooni.org/install) testing of `www.womenonweb.org` in Italy because we increased the [testing priority](https://ooni.org/post/ooni-smart-url-list-system/) of the site.

A per-network breakdown of the measurement coverage [shows](https://explorer.ooni.org/chart/mat?probe_cc=IT&since=2025-11-01&until=2026-06-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) that the testing of `www.womenonweb.org` presented the **largest volume of anomalies on the following 6 ASes**: AS12874 (Fastweb), AS210278 (Sky Italia), AS29447 (Iliad/Scaleway), AS30722 (Vodafone Italia), AS35612 (EOLO), and AS41497 (INTRED).

{{<img src="images/image6.png">}}

**Chart:** Aggregated OONI measurement coverage from the testing of Women on Web’s main website (`www.womenonweb.org`) on AS12874 (Fastweb), AS210278 (Sky Italia), AS29447 (Iliad/Scaleway), AS30722 (Vodafone Italia), AS35612 (EOLO), and AS41497 (INTRED) in Italy between 1st November 2025 to 1st June 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=IT&since=2025-11-01&until=2026-06-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org)).

As the [OONI Probe](https://ooni.org/install) testing of Women on Web (`www.womenonweb.org`) consistently presented a large volume of anomalies on each of these networks during the same months, OONI data suggests that access to the website was blocked on these networks. To confirm blocking, we analyzed OONI data in order to determine the cause of the anomalies, and to evaluate whether the testing of `www.womenonweb.org` presented consistent errors on each network.

Based on our analysis of relevant OONI measurements, we produced the following charts which aggregate our analysis results from the OONI Probe testing of `www.womeonweb.org` on each of the 6 networks that presented the largest volumes of anomalies and, therefore, the strongest signals of blocking. The following chart aggregates our analysis results from the OONI Probe testing of Women on Web (`www.womenonweb.org`) on Iliad/Scaleway (AS29447) and INTRED (AS41497) in Italy between November 2025 to June 2026.

{{<img src="images/image18.png">}}

**Chart:** Analysis results from the OONI Probe testing of Women on Web (`www.womenonweb.org`) on Iliad/Scaleway (AS29447) and INTRED (AS41497) in Italy between November 2025 to June 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=IT&since=2025-11-01&until=2026-06-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org)).

Our analysis shows that the vast majority of anomalous measurements presented signs of **DNS tampering** because a [bogon IP](https://explorer.ooni.org/m/20260330223924.673376_IT_webconnectivity_0aa1047b336a972f) (`127.0.0.1`) was returned as part of DNS resolution. This suggests that these ISPs in Italy block access to Women on Web’s website primarily at the [DNS level](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&only=anomalies).

Similarly, we observe that all OONI measurements collected from the testing of `www.womenonweb.org` on Fastweb (AS12874) [returned a bogon IP](https://explorer.ooni.org/m/20260531214620.758763_IT_webconnectivity_5a635549e275f6fb) as part of DNS resolution from 22nd February 2026 onwards, as illustrated in the chart below.

{{<img src="images/image9.png">}}

**Chart:** Analysis results from the OONI Probe testing of  `www.womenonweb.org` on Fastweb (AS12874) in Italy between November 2025 to June 2026, disaggregated by resolver ASN (source: [OONI data](https://explorer.ooni.org/search?since=2026-03-01&until=2026-06-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&probe_asn=AS12874)).

Normally, the IP address `127.0.0.1` should never appear in the public internet because it is [only meant for a machine to communicate with itself](https://ipinfo.io/127.0.0.1) (which is why it’s referred to as a “bogon”, “loopback address”, and a “localhost”). When the testing of a website returns the private IP `127.0.0.1` instead of the actual IP address of a website, that is a strong signal of censorship. This IP is therefore [included in OONI’s blocking fingerprint database](https://github.com/ooni/blocking-fingerprints/blob/main/fingerprints_dns.csv) and used to automatically detect and confirm blocks. OONI data [shows](https://explorer.ooni.org/m/20260331220530.181815_IT_webconnectivity_13338cd2058224db) that this private IP (`127.0.0.1`) was used by [several ISPs in Italy](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&only=anomalies) to block access to Women on Web’s main website (similarly to [Iran](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IR&only=confirmed), [the Philippines](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=PH&only=anomalies), [South Korea](https://explorer.ooni.org/m/20260331115542.485198_KR_webconnectivity_949ae6aa7db830f8), and [Spain](https://explorer.ooni.org/m/20260331232726.046450_ES_webconnectivity_7d65baf1ecaf6ed6)). The main ASes in Italy where OONI measurements recorded the bogon IP address `127.0.0.1` in DNS responses for `www.womenonweb.org` during the analysis period were [Fastweb (AS12874)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&only=anomalies&probe_asn=AS12874), [Iliad/Scaleway (AS29447)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&only=anomalies&probe_asn=AS29447), and [INTRED (AS41497)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&only=anomalies&probe_asn=AS41497).

In other cases, DNS tampering was implemented by returning an NXDOMAIN error, which normally appears when a domain does not exist. Our analysis of OONI data shows that at least two ISPs in Italy, [Vodafone Italia (AS30722)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&probe_asn=AS30722&only=anomalies) and [EOLO (AS35612)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&probe_asn=AS35612&only=anomalies), returned the [NXDOMAIN error](https://explorer.ooni.org/m/20260314185306.433245_IT_webconnectivity_4f16d6d4c8c8aa07), falsely indicating that the Women on Web domain does not exist. Instead of the content of the Women on Web website, users would see something like the following:

{{<img src="images/image10.png">}}

**Image:** Example of a site presenting an NXDOMAIN error.

Because an NXDOMAIN error is intended to indicate that a website does not exist, using it to block access to Women on Web’s website may mislead users and create confusion about the reason the site is unavailable.

The following two charts present the results of our analysis of OONI Probe measurements for `www.womenonweb.org` on Vodafone Italia (AS30722) and EOLO (AS35612), disaggregated by resolver ASN, showing that the DNS responses consistently returned NXDOMAIN errors, suggesting the use of DNS tampering as the blocking mechanism.

{{<img src="images/image15.png">}}

**Chart:** Analysis results from the OONI Probe testing of  `www.womenonweb.org` on Vodafone Italia (AS30722) in Italy between November 2025 to June 2026, disaggregated by resolver ASN (source: [OONI data](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&probe_asn=AS30722&only=anomalies)).

{{<img src="images/image19.png">}}

**Chart:** Analysis results from the OONI Probe testing of `www.womenonweb.org` on EOLO (AS35612) in Italy between November 2025 to June 2026, disaggregated by resolver ASN (source: [OONI data](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&probe_asn=AS35612&only=anomalies)).

Since DNS anomalies are only observed when the resolver ASN matches the probe ASN, this strongly suggests resolver-side interference by the ISPs’ own DNS infrastructure, rather than [DNS spoofing](https://ooni.org/support/glossary/#dns-spoofing).

We also observed measurements with TLS certificate validation failures (annotated as `tls.bad_cert`) that appear to be linked to unexpected DNS responses. This was primarily observed on Sky Italia (AS210278), as illustrated in the chart below.

{{<img src="images/image16.png">}}

**Chart:** Analysis results from the OONI Probe testing of `www.womenonweb.org` on Sky Italia (AS210278) in Italy between November 2025 to June 2026, disaggregated by resolver ASN (source: [OONI data](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&probe_asn=AS210278)).

Specifically, OONI measurements from the testing of `www.womenonweb.org` on Sky Italia (AS210278) from mid-February 2026 onwards [show](https://explorer.ooni.org/m/20260526111322.137094_IT_webconnectivity_aa99fc9046f2c0e8) that the IP `195.162.95.240` is returned as part of DNS resolution (instead of the actual IP address for `www.womenonweb.org`), resulting in TLS certificate validation failures. This is also evident in the following chart, which shows that Sky Italia switched to returning the IP `195.162.95.240` (instead of the IP `188.245.230.228`) as part of DNS resolution for `www.womenonweb.org` in mid-February 2026.

{{<img src="images/image4.png">}}

**Chart:** Analysis results from the OONI Probe testing of `www.womenonweb.org` on Sky Italia (AS210278) in Italy between November 2025 to June 2026, disaggregated by resolved IP address (source: [OONI data](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=www.womenonweb.org&probe_cc=IT&probe_asn=AS210278)).

However, the IP `195.162.95.240`, which is an IP range allocated to Sky Italia, is used to host a legal block page, and this was also previously reportedly used as part of other blocks under the country’s automated [Privacy Shield](https://www.euroispa.org/2025/04/piracy-shield-a-flawed-approach-in-the-fight-against-online-piracy/) system (for example, in the [accidental blocking of Google Drive](https://torrentfreak.com/google-drive-blackout-in-italy-after-another-major-anti-piracy-blunder-241020/) in October 2024). OONI measurements [show](https://explorer.ooni.org/m/20260529110133.015802_IT_webconnectivity_a44b49036d6209e7) that the TLS certificate presented by Sky Italia contains the hostname `blocking.it.isp.sky` as both its Common Name (CN) and its Subject Alternative Name (SAN), confirming the blocking of `www.womenonweb.org`.

### Women Help Women (WHW)

Similarly to Women on Web (`www.womenonweb.org`), OONI data [suggests](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&axis_x=measurement_start_day&since=2025-11-01&until=2026-06-01&time_grain=day&probe_cc=IT&domain=womenhelp.org) that ISPs in Italy also started blocking access to Women Help Women (`womenhelp.org`) by means of DNS tampering in mid-February 2026. This is illustrated through the following chart, which aggregates the results of our analysis.

{{<img src="images/image14.png">}}

**Chart:** Aggregate analysis results from the OONI Probe testing of `womenhelp.org` on multiple ASes in Italy between November 2025 to June 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=IT&since=2025-11-01&until=2026-06-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=womenhelp.org)).

As is evident from the above chart, almost all previous measurements indicated that `womenhelp.org` was previously accessible on tested networks in Italy, while only starting to show increased signs of blocking from mid-February 2026 onwards. Most of the anomalous measurements show signs of **DNS tampering**, as many measurements returned NXDOMAIN errors or bogon IPs as part of DNS resolution, while few measurements during this period also presented TLS certificate validation failures. This is very consistent with what is observed in the testing of Women on Web, discussed previously.

A per-network breakdown of the measurement coverage [shows](https://explorer.ooni.org/chart/mat?probe_cc=IT&since=2025-11-01&until=2026-06-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=womenhelp.org) that the testing of `womenhelp.org` presented the **largest volume of anomalies on the following 6 ASes**: Sky Italia (AS210278), EOLO (AS35612), Vodafone Italia (AS30722), Iliad/Scaleway (AS29447), WIND TRE (AS1267), and Fastweb (AS12874).

{{<img src="images/image5.png">}}

**Chart:** Aggregated OONI measurement coverage from the testing of Women Help Women’s main website (`womenhelp.org`) on Sky Italia (AS210278), EOLO (AS35612), Vodafone Italia (AS30722), Iliad/Scaleway (AS29447), WIND TRE (AS1267), and Fastweb (AS12874) in Italy between 1st November 2025 to 1st June 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=IT&since=2025-11-01&until=2026-06-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=womenhelp.org)).

As the [OONI Probe](https://ooni.org/install) testing of Women Help Women (`womenhelp.org`) consistently presented a large volume of anomalies on each of these networks during the same months, OONI data suggests that access to the website was blocked on these networks. To confirm blocking, we analyzed OONI data in order to determine the cause of the anomalies, and to evaluate whether the testing of `womenhelp.org` presented consistent errors on each network.

Based on our analysis of relevant OONI measurements, we produced the following charts which aggregate our analysis results from the OONI Probe testing of `womenhelp.org` on each of the 6 networks that presented the largest volumes of anomalies and, therefore, the strongest signals of blocking.

Our analysis shows that a [bogon IP](https://explorer.ooni.org/m/20260531023734.739857_IT_webconnectivity_ac71e961968fedf1) (`127.0.0.1`) was returned as part of DNS resolution on [Fastweb (AS12874)](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS12874&only=anomalies) and [Iliad/Scaleway (AS29447)](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS29447&only=anomalies), as illustrated in the following two charts.

{{<img src="images/image17.png">}}

**Chart:** Analysis results from the OONI Probe testing of `womenhelp.org` on Fastweb (AS12874) in Italy between November 2025 to June 2026, disaggregated by resolver ASN (source: [OONI data](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS12874&only=anomalies)).

{{<img src="images/image11.png">}}

**Chart:** Analysis results from the OONI Probe testing of `womenhelp.org` on Iliad/Scaleway (AS29447) in Italy between November 2025 to June 2026, disaggregated by resolver ASN (source: [OONI data](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS29447&only=anomalies)).

In both of the above two cases, we observe that the majority of OONI measurements from 22nd February 2026 onwards returned a bogon IP (`127.0.0.1`) as part of DNS resolution, instead of the IP for `womenhelp.org`. Normally, the IP address `127.0.0.1` should never appear in the public internet because it is [only meant for a machine to communicate with itself](https://ipinfo.io/127.0.0.1) (which is why it’s referred to as a “bogon”, “loopback address”, and a “localhost”). When the testing of a website returns the private IP `127.0.0.1` instead of the actual IP address of a website, that is a strong signal of censorship. This IP is therefore [included in OONI’s blocking fingerprint database](https://github.com/ooni/blocking-fingerprints/blob/main/fingerprints_dns.csv) and used to automatically detect and confirm blocks.

In other cases, DNS tampering was implemented by returning an NXDOMAIN error, which normally appears when a domain does not exist. Our analysis of OONI data shows that at least 3 ISPs in Italy returned the NXDOMAIN error, falsely indicating that the Women Help Women (WHW) domain does not exist: [Vodafone Italia (AS30722)](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS30722&only=anomalies), [EOLO (AS35612)](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS35612&only=anomalies), and [WIND TRE](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS1267&only=anomalies) [(AS1267)](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS1267&only=anomalies). This is illustrated through the following three charts, which present the aggregate results of our analysis for each of these three networks.

{{<img src="images/image3.png">}}

**Chart:** Analysis results from the OONI Probe testing of `womenhelp.org` on Vodafone Italia (AS30722) in Italy between November 2025 to June 2026, disaggregated by resolver ASN (source: [OONI data](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS30722&only=anomalies)).

{{<img src="images/image13.png">}}

**Chart:** Analysis results from the OONI Probe testing of `womenhelp.org` on EOLO (AS35612) in Italy between November 2025 to June 2026, disaggregated by resolver ASN (source: [OONI data](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS35612&only=anomalies)).

{{<img src="images/image12.png">}}

**Chart:** Analysis results from the OONI Probe testing of `womenhelp.org` on WIND TRE (AS1267) in Italy between November 2025 to June 2026, disaggregated by resolver ASN (source: [OONI data](https://explorer.ooni.org/search?since=2026-02-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS1267&only=anomalies)).

On each of the above three networks, we observe that the blocking of Women Help Women (`womenhelp.org`) started at around the same time. While most of previous measurements were successful, the majority of measurements from mid-February 2026 started returning NXDOMAIN errors on each of these networks. However, the most recent measurements collected from WIND TRE (AS1267) [returned a bogon IP](https://explorer.ooni.org/m/20260531123850.546357_IT_webconnectivity_09f9606cb63c5688), suggesting a recent change in censorship methods.

By returning an NXDOMAIN error, instead of the content of the Women Help Women website, users in Italy would see something like the following:

{{<img src="images/image10.png">}}

**Image:** Example of a site presenting an NXDOMAIN error.

Because an NXDOMAIN error is intended to indicate that a website does not exist, using it to block access to Women Help Women’s website may mislead users and create confusion about the reason the site is unavailable.

Similarly to the blocking of Women on Web (WoW), OONI measurements of Women Help Women (`womenhelp.org`) on Sky Italia (AS210278) from mid-February 2026 onwards show that requests are redirected to the IP address `195.162.95.240`, where a server presents a TLS certificate for `blocking.it.isp.sky`. This hostname mismatch results in TLS certificate validation failures, as illustrated below.

{{<img src="images/image2.png">}}

**Chart:** Analysis results from the OONI Probe testing of `womenhelp.org` on Sky Italia (AS210278) in Italy between November 2025 to June 2026, disaggregated by resolver ASN (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS210278)).

Specifically, OONI measurements from the testing of `womenhelp.org` on Sky Italia (AS210278) from mid-February 2026 onwards [show](https://explorer.ooni.org/m/20260525060419.321444_IT_webconnectivity_41550a954043c3c6) that the IP `195.162.95.240` is returned as part of DNS resolution (instead of the actual IP address for `www.womenonweb.org`), resulting in TLS certificate validation failures. This is also evident in the following chart, which shows that Sky Italia switched to returning the IP `195.162.95.240` as part of DNS resolution for `womenhelp.org` in mid-February 2026.

{{<img src="images/image7.png">}}

**Chart:** Analysis results from the OONI Probe testing of `womenhelp.org` on Sky Italia (AS210278) in Italy between November 2025 to June 2026, disaggregated by resolver IP address (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&domain=womenhelp.org&probe_cc=IT&probe_asn=AS210278)).

OONI measurements [show](https://explorer.ooni.org/m/20260525060419.321444_IT_webconnectivity_41550a954043c3c6) that Sky Italia returned the IP address `195.162.95.240` in DNS responses for `womenhelp.org`. The server at that address presented a TLS certificate containing the hostname `blocking.it.isp.sky`, resulting in TLS certificate validation failures.

Overall, our analysis found consistent blocking techniques across the same networks for both Women on Web (`www.womenonweb.org`) and Women Help Women (`womenhelp.org`), increasing our confidence in the findings of this study.

#### Acknowledgement of limitations

The findings of this study present several limitations, including:

*   **Date range of analysis.** The findings are limited to OONI measurements collected between 1st November 2025 to 1st June 2026. As a result, findings from measurements collected in different date ranges are excluded from this study.
*   **Type of measurements.** The findings mainly involve OONI [Web Connectivity](https://ooni.org/nettest/web-connectivity/) measurements pertaining to the testing of websites for censorship. As a result, findings from [other OONI Probe experiments](https://ooni.org/nettest) (particularly those that don’t measure the blocking of websites) are excluded from this study.
*   **Tested websites.** We limited our analysis to Women on Web (`www.womenonweb.org`) and Women Help Women (`womenhelp.org`) domains as part of our goal to investigate their blocking in Italy. As a result, the findings of this study do not cover the blocking of other reproductive rights websites.
*   **Tested ASes.** While OONI Probe tests are regularly performed on multiple ASes in Italy, not all networks are tested equally. Rather, the availability of measurements depends on which networks [OONI Probe](https://ooni.org/install) users were connected to when performing tests. As a result, the measurement coverage varies across ASes throughout the analysis period, impacting the findings. Moreover, we limited the findings of this study to the ASes which received the largest measurement coverage and which, therefore, presented the strongest blocking signals during the analysis period.
*   **Blocking signals.** As part of our data analysis, we mainly focused on signals that we considered more reliable and indicative of government-commissioned censorship, while excluding cases viewed as presenting weak signals (as discussed previously in the “Methods” section). As a result, we acknowledge the risk of potentially having missed some blocking cases in our findings (if those cases were annotated with weak signals as part of our data analysis).

## Conclusion

Censorship of reproductive healthcare and rights information is not limited to countries where abortion is illegal or legally restricted. Our analysis of [OONI data](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&axis_x=measurement_start_day&since=2025-11-01&until=2026-06-01&time_grain=day&probe_cc=IT&axis_y=domain&domain=www.womenonweb.org%2Cwomenhelp.org) shows that access to reproductive rights information has also been restricted in European countries such as Italy and [Spain](https://ooni.org/post/2026-women-on-web-blocked/#spain), where abortion is legal but can remain difficult to access in practice.

In Italy, OONI data indicates that ISPs primarily block access to the Women on Web (WoW) and Women Help Women (WHW) websites through DNS tampering. Because these censorship techniques often do not provide users with a clear indication that access has been intentionally blocked, users may mistake censorship for a technical failure, highlighting the need for greater transparency.

These findings raise important questions about the necessity and proportionality of such blocking measures, particularly in light of the fundamental right to access information. According to the [World Health Organization (WHO)](https://iris.who.int/server/api/core/bitstreams/d167e16e-cb54-4d7c-b237-1a3c879638f0/content), access to accurate health information is a key component of enabling individuals to understand their healthcare options, make informed decisions, and safely navigate reproductive healthcare. Restricting access to such information may therefore risk undermining people's ability to obtain timely and safe care and, ultimately, to exercise their reproductive rights effectively.

## Acknowledgements

We thank [OONI Probe](https://ooni.org/install/) users in Italy for contributing measurements.