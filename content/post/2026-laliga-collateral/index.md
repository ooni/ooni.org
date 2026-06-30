---
title: "Collateral Damage of IP-Based Blocking During LALIGA Football Streaming in Spain: Evidence from OONI Measurements"
description: "This report documents the widespread collateral damage caused by IP-based blocking during LALIGA football match broadcasts in Spain, based on OONI data and DNS scans."
author: "Arturo Filastò (OONI), Maria Xynou (OONI), Mehul Gulati (OONI)"
date: "2026-06-30"
tags: ["country-es", "censorship", "theme-circumvention", "theme-human_rights", "theme-news_media", "theme-im"]
categories: ["report"]
---

Since [February 2025](https://www.laliga.com/en-US/news/official-statement-in-relation-to-the-blocking-of-ips-during-the-recent-ea-sports-laliga-matchdays-linked-to-illegal-cloudflare-practices), Internet Servic
e Providers (ISPs) in Spain have reportedly begun blocking specific IP addresses associated with alleged p
iracy streaming services during LALIGA football match broadcasts. These blocking actions are implemented d
uring live matches and are tied to court-authorized enforcement measures requested in relation to copyrigh
t infringement.

Because much of today’s internet relies on shared hosting and content delivery infrastructure, blocking s
pecific IP addresses can result in [unintended collateral impact on unrelated services](https://vercel.com/blog/update-on-spain-and-laliga-blocks-of-the-internet) hosted on the same infrastructure.

This report shares [OONI data](https://ooni.org/data) collected from Spain documenting these blocking events and their observed impact on the accessibility of legitimate websites.

{{<table-of-contents>}}

## Key Findings

Our analysis of [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity) collected from Spain, as well as our [DNS scans](https://github.com/zmap/zdns) against 9.2 million of the internet's most popular domains, revealed that the specific IP blocks associated with alleged piracy streaming services during LALIGA football match broadcasts resulted in widespread collateral damage, affecting hundreds of thousands of domains, including legitimate and widely used websites.

Key findings include:

* **At least 5.8% of the internet's most popular domains were found to be blocked in Spain, as the blocking of a small number of IP addresses caused collateral damage affecting more than 500,000 domains over the course of the league.** During most LALIGA broadcasts on multiple Spanish networks, blocking only 4–20 IP addresses in a 1-hour window led to significant collateral damage, affecting over 400,000 unique domains through shared hosting and infrastructure dependencies. Out of 9.2 million domains tested, we found at least 554,510 domains blocked at some point in time in Spain during the LALIGA football match broadcasts.
  * **Affected domains include benign and important websites.** The blocked domains include a wide range of legitimate, unrelated-to-football websites. Some of these are benign, while others are of public interest and defend human rights. Examples of [blocked domains](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&axis_x=measurement_start_day&since=2026-05-09&until=2026-05-10&time_grain=hour&probe_cc=ES&axis_y=domain&domain=cronicaluz.es%2Creferendum.cat%2Camnesty.ie%2Camnestynews.de%2Camnesty.org.au%2Copusdei.es%2Cislamic-relief.com%2Chuman-rights-for-all.org%2Cmercycorps.org.uk%2Ccaritas.lt%2Ccaritas.org.ar%2Cgreenpeace.org.ar%2Cislamophobia-watch.com%2Cdiocese-braga.pt%2Ctribunale.bergamo.it%2Cfreerussia.eu%2C4freerussia.org%2Cuacrisis.org%2Csenate.gov.au) include:
    * **Human rights websites,** such as [Amnesty International](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&domain=amnesty.ie&only=anomalies) (`amnesty.ie`, `amnestynews.de`, `amnesty.org.au`) and a [Venezuelan digital rights group](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&domain=vesinfiltro.org&only=anomalies) (`vesinfiltro.org`).
    * **Environmental websites,** such as [Greenpeace Argentina](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&domain=greenpeace.org.ar&only=anomalies) (`greenpeace.org.ar`), [Cool Earth](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&domain=www.coolearth.org&only=anomalies) (`www.coolearth.org`), [The Climate Reality Project](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&domain=www.climaterealityproject.org&only=anomalies) (`www.climaterealityproject.org`), and [Orangutan Outreach](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&domain=redapes.org&only=anomalies) (`redapes.org`).
    * **Governmental websites,** such as the [Australian Senate](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&domain=senate.gov.au&only=anomalies) (`senate.gov.au`) and the [Bergamo Court](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&domain=tribunale.bergamo.it&only=anomalies) in Italy (`tribunale.bergamo.it`).
    * **Political websites,** such as the [Catalan Referendum](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&domain=referendum.cat&only=anomalies) (`referendum.cat`).
    * **News media websites,** such as [La Patilla](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&domain=lapatilla.com&only=anomalies), a Venezuelan news media website (`lapatilla.com`), and the [Ukrainian Crisis Media Center](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&domain=uacrisis.org&only=anomalies) (`uacrisis.org`).
    * **Messaging platforms,** such as the [IM+](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&domain=plus.im&only=anomalies) (`plus.im`), [WeChat](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&domain=www.wechat.com&only=anomalies) (`www.wechat.com`), and [Session](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&domain=getsession.org&only=anomalies) (`getsession.org`) messaging apps.
    * **Humanitarian websites,** such as [Caritas Argentina](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&domain=caritas.org.ar&only=anomalies) (`caritas.org.ar`), the official social and humanitarian arm of the Catholic Church in Argentina.

* **At least 36 infrastructure and hosting providers were implicated in the IP-level blocking observed during LALIGA match broadcasts.** OONI data collected from Spain reveals the blocking of 7,441 unique IP addresses belonging to 36 organizations, including Amazon, Cloudflare, Alibaba Cloud, Akamai, Meta, and Microsoft. Because many of these IP addresses were shared by multiple services and websites, the blocking extended far beyond the intended targets, affecting organizations ranging from major technology companies to universities such as Harvard University, the University of Washington, and the University of Tsukuba.
* **TLS Man-in-the-Middle (MitM) attacks on Digi Mobil (AS57269).** OONI data collected from Digi Mobil (AS57269) in Spain reveals that a total of 7,334 unique IPs in 14 ASNs, hosting a total of 10,759 domain names, were affected by TLS MitM attacks. The highest number of affected IP addresses are associated with Amazon Web Services (AWS), followed by Cloudflare and Alibaba Cloud.
* **Blocking implementation varies across ISPs, with Telefonica found as one of the most consistently compliant operators.** OONI data from Spain shows that enforcement of the blocking measures differed in both consistency and intensity across providers, with Telefonica (AS3352) among those applying the blocks most reliably during LALIGA match broadcasts over the analysis period.
* **Blocking by most ISPs is largely confined to match time windows, with minimal evidence of spillover outside broadcast periods.** OONI data indicates that the timing of IP blocking correlates with LALIGA match broadcasts, with blocking events beginning shortly before match start times and being lifted shortly after matches conclude. This is observed on several networks, such as Mas Movil (AS15704), Telefonica De Espana (AS3352), Orange Espagne (AS12479), Vodafone Espana (AS12430), Mas Orange (AS12334), Vodafone ONI (AS6739), and Euskaltel (AS12338).

## Introduction

Starting from [February 2025](https://www.laliga.com/en-US/news/official-statement-in-relation-to-the-blocking-of-ips-during-the-recent-ea-sports-laliga-matchdays-linked-to-illegal-cloudflare-practices), Internet Service Providers (ISPs) in Spain have regularly blocked specific IP addresses associated with alleged piracy streaming services during LALIGA football match broadcasts. As these IPs host many other unrelated websites, there is the [risk of collateral damage](https://euipo.europa.eu/tunnel-web/secure/webdav/guest/document_library/observatory/documents/reports/2023_Live_Event_Piracy/2023_Live_Event_Piracy_Discussion_Paper_FullR_en.pdf), impacting the accessibility of many legitimate websites during these blocking events. Such cases of collateral damage have been [reportedly anecdotally](https://www.reddit.com/r/docker/comments/1sjio1g/no_one_in_spain_can_docker_pull_right_now_because/) by internet users and tracked by [monitoring groups](https://hayahora.futbol/) in Spain over the last year.

Building upon these efforts, this report investigates and documents the **scale of collateral damage caused by these LALIGA-related IP blocks** based on the analysis of [OONI network measurement data](https://ooni.org/data/) collected from Spain.

Founded in 2012, the [Open Observatory of Network Interference (OONI)](https://ooni.org/) is a nonprofit organization with global expertise on internet censorship, having built [free software tools](https://ooni.org/install) for [measuring](https://ooni.org/nettest/) various forms of internet censorship. OONI hosts the [world's largest open dataset on internet censorship](https://ooni.org/data/) of its kind, consisting of more than 3 billion measurements collected from 30,000 unique networks across 245 countries and territories since 2012. Because OONI measurements are collected from the edge of the network, they provide unique insights into the accessibility or blocking of internet services and can serve as evidence of internet censorship. OONI's impact has been recognized with the [2012 Access Now Freedom of Expression Tech Prize](https://web.archive.org/web/20130424101948/https://www.accessnow.org/blog/2012/12/11/first-annual-access-innovation-awards-prize-winners-announced) and the [2023 FOCI Community Award](https://foci.community/awards.html).

The following sections of this report present OONI's measurement methodologies and findings from the analysis of [OONI data](https://ooni.org/data/) collected from Spain (as well as from additional [DNS scans](https://github.com/zmap/zdns)), in relation to reported IP blocking during LALIGA football match broadcasts. The objective of this study is to document and assess the scale of collateral impact on unrelated, legitimate websites hosted on the same IP addresses that were subject to blocking during these events.

## Background

[LALIGA](https://www.laliga.com/) is the highest level of professional men's football in Spain. The league consists of 20 clubs that compete annually for the championship. It is widely regarded as one of the strongest domestic football leagues in the world and has historically included clubs such as Real Madrid, FC Barcelona, and Atlético Madrid. LALIGA has also been home to many of the sport's most prominent players, including Lionel Messi, Cristiano Ronaldo, and Johan Cruyff.

Beyond organizing the league competition, LALIGA is also the governing organization that manages commercial rights, broadcasting agreements, and [anti-piracy efforts](https://www.laliga.com/en-GB/news/piracy-detection-in-sports-and-other-live-events-hits-record-levels-thanks-to-greater-investment-in-resources-and-technology) related to Spanish professional football. According to LALIGA, Spanish football clubs alone [lose an estimated €600–700 million annually](https://www.laliga.com/en-GB/news/laliga-warns-of-the-dangers-of-illegal-broadcasts-you-get-pirated-football-they-get-you) due to illegal broadcasts. Rightsholders (including TV companies and streaming platforms) [reportedly](https://cybernews.com/news/spain-laliga-streaming-piracy-campaign/) pay billions each year to legally broadcast LALIGA, and pirated streams contribute to revenue loss.

To combat piracy efforts, LALIGA launched an [awareness campaign](https://www.laliga.com/en-GB/news/laliga-warns-of-the-dangers-of-illegal-broadcasts-you-get-pirated-football-they-get-you) in 2025 under the slogan "**You Get Pirated Football, They Get You**" to educate fans about the risks associated with using unauthorized streaming services. The campaign emphasized not only the financial impact of piracy on the sport but also the risks to users themselves, including malware infections, theft of personal data, and financial fraud.

In December 2024, the Commercial Court No. 6 of Barcelona instructed Spanish Internet Service Providers (ISPs) to block IP addresses associated with unauthorized LALIGA football streaming. The first blocks of this kind were reported in February 2025, which LALIGA acknowledged with an [official statement](https://www.laliga.com/en-US/news/official-statement-in-relation-to-the-blocking-of-ips-during-the-recent-ea-sports-laliga-matchdays-linked-to-illegal-cloudflare-practices). In March 2025, LALIGA President Javier Tebas reportedly stated that they [block around 3,000 IPs every weekend](https://tribuna.com/en/news/2025-03-28-la-liga-president-tebas-we-block-around-3000-ips-every-weekend-due-to-illegal-football-st/) related to illegal football streams.

In 2023, the European Union Intellectual Property Office (EUIPO) published a [discussion paper](https://euipo.europa.eu/tunnel-web/secure/webdav/guest/document_library/observatory/documents/reports/2023_Live_Event_Piracy/2023_Live_Event_Piracy_Discussion_Paper_FullR_en.pdf) on "challenges and good practices from online intermediaries to prevent the use of their services for live event piracy" based on input from experts. This paper describes IP-level blocking as a measure in which an Internet Access Provider (IAP) prohibits or redirects traffic between its users and the IP address of an Internet service. The paper notes that IP blocking may be the only practical option when dealing with uncooperative hosting providers or piracy services that do not rely on domain names, such as streaming servers that supply piracy applications. Because a small number of servers can support a large number of piracy services, IP-level blocking can be an effective enforcement mechanism.

The [discussion paper](https://euipo.europa.eu/tunnel-web/secure/webdav/guest/document_library/observatory/documents/reports/2023_Live_Event_Piracy/2023_Live_Event_Piracy_Discussion_Paper_FullR_en.pdf) also highlights several limitations of IP-level blocking. Piracy operators can evade blocks by rapidly migrating to new IP addresses, while users can circumvent them through proxy services or virtual private networks (VPNs). In addition, IP-level blocking carries a **risk of overblocking** when legitimate services share the same IP address as the targeted service. To mitigate this risk, the paper recommends excluding IP ranges known to be used for shared hosting, and limiting the duration of IP-level blocking to the period of the live event at risk of being pirated.

While the IP blocks during LALIGA football match broadcasts may have been limited to the period of the live event, they appear to have had **far-reaching impact beyond the intended targets**. Over the past year, internet users in Spain have regularly reported on platforms such as [Reddit](https://www.reddit.com/r/docker/comments/1sjio1g/no_one_in_spain_can_docker_pull_right_now_because/) and the [Cloudflare community forum](https://community.cloudflare.com/t/website-inaccessible-from-spain-possible-regional-block-on-cloudflare-ips/883954) that access to a wide range of unrelated services were impacted by the blocks. Some internet users even [reported](https://community.cloudflare.com/t/anycast-188-114-96-0-22-returns-self-signed-cert-and-502-from-spain/926536) the presence of a **TLS Man-in-the-Middle (MitM) attack**, and [monitoring efforts to track blocks during LALIGA football match broadcasts](https://hayahora.futbol/) were created.

Vercel [reported](https://vercel.com/blog/update-on-spain-and-laliga-blocks-of-the-internet) that LALIGA's anti-piracy enforcement has caused **collateral damage** because Spanish ISPs blocked entire IP addresses rather than only the domains associated with infringing services. According to the company, a Spanish court authorized LALIGA to require ISPs to block IP addresses linked to unauthorized football streaming, and these measures began affecting Vercel's infrastructure after enforcement expanded in early 2025. Vercel argued that this approach constitutes indiscriminate IP-level blocking, resulting in **significant disruption for developers, businesses, and end users whose legitimate services share the same infrastructure**. The company further notes that similar impacts have been observed by other hosting and content delivery providers, including Cloudflare, GitHub Pages, and BunnyCDN. Vercel concluded that copyright enforcement should instead rely on **targeted, transparent, and technically precise measures that remove infringing content while minimizing disruption to legitimate internet services**, rather than broad IP-level blocking of shared infrastructure.

In February 2026, LALIGA and its broadcasting partner, Telefonica (which is [10% state owned](https://www.sepi.es/en/press-room/news/sepi-reaches-10-stake-telefonicas-capital)), [reportedly obtained court orders](https://www.reuters.com/sports/soccer/laliga-wins-court-orders-forcing-vpns-block-16-alleged-pirate-sites-2026-02-17/) requiring VPN providers NordVPN and Proton VPN to block access from Spain to 16 websites accused of illegally streaming LALIGA matches. The orders required the VPN providers to make the IP addresses of the identified websites inaccessible to users connecting from Spanish networks. LALIGA stated that the rulings recognize the responsibility of technological intermediaries in addressing online piracy. Both NordVPN and Proton VPN, however, [reported](https://www.tbsnews.net/sports/football/laliga-wins-court-orders-forcing-vpns-block-16-alleged-pirate-sites-1364521) that they had not been notified of the legal proceedings before the court orders were announced publicly.

The rulings represent an expansion of LALIGA's anti-piracy strategy, extending enforcement beyond internet access providers to VPN providers that can be used to circumvent network-level blocking measures.

## Methods

Overall, OONI measures internet services in a crowdsourced way through network-level [experiments](https://ooni.org/nettest) run by [OONI Probe app](https://ooni.org/install/) users in [around 180 countries](https://explorer.ooni.org/) each month (including [Spain](https://explorer.ooni.org/country/ES), where OONI Probe users have contributed measurements since 2014). Each of these experiments has a different methodology, all of which are [publicly documented](https://github.com/ooni/spec/tree/master/nettests). Since these experiments are run from local network vantage points, they offer unique insights into the accessibility or blocking of internet services at the edge of the network. OONI publishes OONI Probe test results ("measurements") from around the world as [open data](https://ooni.org/data/) in real-time.

As part of this study, our goal is to identify and document which IP addresses were blocked in Spain during the LALIGA football match broadcasts, as well as how many and which domains were impacted by these blocks. Ultimately, we aim to explore and document the scale of the blocking impact on unrelated, legitimate websites.

Specifically, we examine the following main research questions:

* **Which IP addresses were blocked in Spain during the LALIGA football match broadcasts, and when?**

  * How does the time of blocking line up with the LALIGA football matches?
  * On which providers and networks are these IP addresses located?

* **How many and which domain names resolve to the affected IP addresses during the time in which they are blocked?**

  * How many of these domains are completely affected by the blocks (i.e., all the IPs they resolve to are restricted)? And how many are partially affected (i.e., some IPs in the record set are unfiltered)?

To examine the above research questions, we analyzed [OONI data](https://ooni.org/data) collected from Spain and we performed [DNS scans](https://github.com/zmap/zdns). As part of OONI data analysis, we **extracted and analyzed TCP reachability and TLS measurements** from [Web Connectivity](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md) measurements performed in Spain. To identify blocked IPs, we analyzed [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity) collected from Spain between **1st January 2026 to 1st June 2026**. To identify affected domains, we performed DNS scans (using [ZDNS](https://github.com/zmap/zdns)) against a target list of **9.2 million domains**.

The data analysis we performed for this study is available **[here](https://gist.github.com/hellais/a43e2816178e4c310f5e19dec02d1954#file-20260626-ooni-laliga-final-ipynb)**.

### Identifying blocked IPs

To explore the most recent blocks, we analysed [OONI data](https://ooni.org/data) collected from Spain between 1st January 2026 to 1st June 2026.

In order to assess which IPs were impacted by blocks in Spain during the LALIGA football match broadcasts, we **look at the TCP and TLS measurements** conducted as part of the OONI [Web Connectivity](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md) measurements performed in Spain. We then compared the outcomes of these tests in vantage points located in Spain against the outcomes from our control vantage point located in Frankfurt, Germany.

We counted the total number of successful and failed TCP three-way handshake attempts for each IP–probe ASN pair, aggregating observations into one-hour windows. This fine-grained temporal aggregation was necessary because the reported blocking events were highly time-bound, affecting the targets only during the matches. We performed the same analysis using data from the control vantage point to enable comparison.

Based on our methods, we considered an **IP address to be blocked on a specific network** (`probe_asn`), at some point within the 1-hour window, if the following **conditions** were met:

* The target IP is considered reachable from the control vantage point if it has more than 5 control measurements and a failure rate below 1%. We apply this filter to exclude cases where the target is non-responsive due to factors other than blocking.
* The target IP has at least two measurements within the one-hour window, with a failure rate exceeding 90%.

As we consider these to be **fairly conservative estimates**, there is the risk that we may have missed cases of true censorship.

Additionally, as part of our methodology, we considered a given IP address to be affected by restrictions when we observed a TLS Man-in-the-Middle (MitM) signal where the **DNS answer was consistent, but the offered TLS certificate was invalid**.

Specifically, we identified the following **self-signed TLS certificate being offered on the Digi Mobil (AS57269) network**:

```
Serial Number : 1D:80:68:AA:D9:32:F0:C5:BB:DE:B5:8F:8E:3B:41:E9:67:A1:8F:AF
Fingerprint   : D5:EB:30:1E:5A:00:4C:8B:6C:39:36:A5:DA:81:B1:E8:FC:F6:D7:7F (SHA-1)
Subject       : 1.2.840.113549.1.9.1=admin@Packetland,CN=core1.netops.test,OU=Packetland,O=Widgits Pty Ltd,L=SOME-CITY,ST=SOME-ST,C=EU
Issuer        : 1.2.840.113549.1.9.1=admin@Packetland,CN=core1.netops.test,OU=Packetland,O=Widgits Pty Ltd,L=SOME-CITY,ST=SOME-ST,C=EU
Validity
  ├─ Not Before : 2026-02-19 14:46:27
  └─ Not After  : 2124-09-18 14:46:27
Public Key    : RSAPublicKey 2048-bit
Signature Alg : 1.2.840.113549.1.1.11
```

### Identifying affected domains

In order to assess how many domain names were affected by the aforementioned IP blocks, we made use of a [ZDNS](https://github.com/zmap/zdns) scan against a **target list of 9.2 million domains** names that we compiled from the [Cloudflare Radar top 1M list](https://radar.cloudflare.com/domains), [Tranco top 1M list](https://tranco-list.eu/), [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists), [Majestic Million](https://majestic.com/reports/majestic-million) and the [Certificate Transparency](https://certificate.transparency.dev/logs/) logs. This list of domains was **resolved 4 times a day** from a vantage point located in Spain, as well as from a control vantage point located outside of Spain to enable comparison.

As [OONI measurements](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity) extend to dates preceding the start of our [DNS scanning](https://github.com/zmap/zdns) campaign, we used the earliest available DNS scan to estimate domain impact for measurements collected before 4th May 2026 (when we started running DNS scans). This approach allowed us to derive impact estimates despite the absence of contemporaneous DNS scan data.

For each set of IPs identified as blocked within a given time slice, we retrieved the DNS resolution closest in time to that slice and determined which domain names mapped to those IPs. We then classified domains into two categories: "**fully blocked**", where all resolved IP addresses belonged to the set of blocked IPs, and "**partially blocked**", where at least one resolved IP address was not included in the blocked set.

However, a domain classified as partially blocked was not necessarily fully reachable during that time period. In some cases, we lacked visibility into certain IP addresses because they had not been tested. As a result, our classification was conservative: some domains labeled as partially blocked may in fact have been fully blocked.

## Findings

Our analysis found that the IP-based blocking measures implemented during LALIGA football match broadcasts in Spain caused substantial collateral damage well beyond their intended targets.

Out of 9.2 million domains tested, **554,507 domains (around 5.8%) were blocked at some point during match broadcasts**. In a single one-hour window, blocking only 4–20 IP addresses, shared by hundreds of thousands of websites, was enough to disrupt over 400,000 domains at once. The affected domains included a broad range of legitimate services, including human rights organizations, environmental groups, government institutions, news media outlets, humanitarian organizations, and messaging platforms.

OONI data further revealed that the **blocking affected 7,441 unique IP addresses across 36 infrastructure and hosting providers**, including Cloudflare, Amazon, Akamai, Meta, and Microsoft, highlighting the widespread impact of blocking shared infrastructure. We also observed **TLS man-in-the-middle attacks on Digi Mobil (AS57269)**.

While the implementation of the blocking measures varied across ISPs, with Telefonica among the most consistently compliant operators, the **timing of the disruptions closely aligned with LALIGA match broadcasts and generally ceased shortly after matches ended**, suggesting that the measures were intentionally applied during narrow broadcast windows rather than continuously.

Further details are shared in the sections below.

### Impact: Over 500,000 domains and 7,441 IPs blocked

By looking at OONI measurements from the entire time interval of analysis, using both the TLS MitM signal and the TCP failure one, we observe a total of **554,507 unique domain names that were at some point in time affected** during the LALIGA football match broadcasts. Out of 9.2 million domains tested, this accounts for **5.8% of the internet's most popular domains**. These domains were affected through the blocking of **7,441 unique IP addresses across 36 ASNs** (combining the IPs identified via the TLS MitM signature and the TCP-failure method).

The table below summarizes the count of affected domains and their distribution across networks. The distribution is extraordinarily concentrated: a single network, Cloudflare (AS13335), accounts for 501,305 of the affected domains, 90.4% of the total, yet those domains sit on only 2,218 of the blocked IPs (30.0%). Squarespace (AS53831) shows the same pattern in an even more extreme form, with 18,592 affected domains served from a single blocked IP address.

| ASN | AS Name | Domain Count | Domain % | IP Count | IP % |
|-----|---------|-------------|----------|----------|------|
| 13335 | Cloudflare, Inc. | 501305 | 90.405% | 2218 | 30.022% |
| 53831 | Squarespace, Inc. | 18592 | 3.353% | 1 | 0.014% |
| 209242 | Cloudflare London, LLC | 18021 | 3.250% | 2 | 0.027% |
| 16509 | Amazon.com, Inc. | 11647 | 2.100% | 4286 | 58.013% |
| 205585 | AbrArvan (ArvanCloud) | 1921 | 0.346% | 2 | 0.027% |
| 139341 | WeChat/QQ CDN | 1504 | 0.271% | 3 | 0.041% |
| 24429 | Alibaba Cloud | 972 | 0.175% | 12 | 0.162% |
| 30148 | Sucuri | 302 | 0.054% | 3 | 0.041% |
| 6698 | Virtual Systems LLC | 50 | 0.009% | 4 | 0.054% |
| 47583 | Hostinger International Limited | 31 | 0.006% | 6 | 0.081% |
| 30860 | Virtual Systems LLC | 27 | 0.005% | 2 | 0.027% |
| 20940 | Akamai International B.V. | 25 | 0.005% | 4 | 0.054% |
| 40966 | ZAO Web Hosting / L7GUARD-AS / ValueHOST | 14 | 0.003% | 1 | 0.014% |
| 209042 | TiZoo Sarl | 12 | 0.002% | 1 | 0.014% |
| 30943 | ZAO Web Hosting | 9 | 0.002% | 1 | 0.014% |
| 40092 | HostPapa | 9 | 0.002% | 1 | 0.014% |
| 32475 | Internap Holding LLC | 8 | 0.001% | 1 | 0.014% |
| 200928 | ANO "TV-Novosti" | 8 | 0.001% | 2 | 0.027% |
| 1742 | Harvard University | 7 | 0.001% | 1 | 0.014% |
| 8075 | Microsoft Corporation | 7 | 0.001% | 2 | 0.027% |
| 46606 | Unified Layer | 7 | 0.001% | 1 | 0.014% |
| 32934 | Facebook, Inc. | 5 | 0.001% | 2 | 0.027% |
| 48090 | TECHOFF SRV LIMITED | 4 | 0.001% | 2 | 0.027% |
| 1103 | SURF B.V. (SURFnet) | 4 | 0.001% | 1 | 0.014% |
| 53667 | FranTech Solutions | 2 | 0.000% | 1 | 0.014% |
| 50098 | Melbikomas UAB | 2 | 0.000% | 2 | 0.027% |
| 36850 | University of North Carolina at Chapel Hill | 2 | 0.000% | 1 | 0.014% |
| 34879 | OOO "Sovremennye setevye tekhnologii" (NGENIX) | 2 | 0.000% | 1 | 0.014% |
| 32489 | Amanah Tech Inc. | 2 | 0.000% | 1 | 0.014% |
| 14454 | SilverSky, Inc. | 2 | 0.000% | 1 | 0.014% |
| 14585 | CIFNet, Inc. | 2 | 0.000% | 1 | 0.014% |
| 14618 | Amazon.com, Inc. | 2 | 0.000% | 811 | 10.977% |
| 73 | University of Washington | 1 | 0.000% | 1 | 0.014% |
| 37917 | University of Tsukuba | 1 | 0.000% | 5 | 0.068% |
| 16652 | Riseup Networks | 1 | 0.000% | 1 | 0.014% |
| 40401 | Backblaze Inc | 0 | 0.000% | 3 | 0.041% |

As illustrated through the above table, there is quite some difference in how domains are consolidated across providers. Cloudflare and Squarespace use few IP addresses to serve many domains, while Amazon and Akamai spread a smaller number of domains across a larger number of IP addresses.

This inversion between a provider's share of affected domains and its share of blocked IPs is shown directly in the chart below, where each network's domain share (left) is set against its IP share (right). Cloudflare dominates the left wing while barely registering on the right; Amazon does the reverse.

{{<img src="images/image5.png">}}

**Chart:** Share of affected domains (left) versus share of blocked IPs (right) for each provider.

This likely reflects a difference in architecture. Cloudflare and Squarespace act as reverse proxies, where many domains share a small pool of (often anycast) IP addresses and are distinguished only by the TLS SNI or HTTP Host header. As a result, a single address can front thousands of unrelated domains. Amazon, by contrast, operates primarily as infrastructure-as-a-service, assigning customers dedicated resources such as Elastic IPs, load balancers, and CloudFront distributions, so domains are distributed across many distinct addresses. Akamai, though a CDN, similarly presents many IP addresses per domain because its large, geographically distributed edge fleet returns different addresses depending on the resolver's location.

This distinction matters for assessing collateral damage: blocking a single Cloudflare or Squarespace address can disrupt a large number of domains at once, whereas blocking an individual Amazon or Akamai address tends to affect comparatively few. It also means our assessment may be skewed by the composition of the OONI testing-list targets, for providers with sparse IP allocation we likely observe too few IPs and therefore undercount their true impact (discussed further in the "Limitations" section of this report).

### TLS Man-in-the-Middle (MitM)

As part of our analysis of [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity), we found a total of **7,334 unique IPs,** hosting a total of **10,759 domain names**, **affected by TLS Man-in-the-Middle (MitM) attacks on Digi Mobil (AS57269)**.

Specifically, the TLS MitM certificate we observe is the following:

```
Subject       : 1.2.840.113549.1.9.1=admin@Packetland,CN=core1.netops.test,OU=Packetland,O=Widgits Pty Ltd,L=SOME-CITY,ST=SOME-ST,C=EU
Issuer        : 1.2.840.113549.1.9.1=admin@Packetland,CN=core1.netops.test,OU=Packetland,O=Widgits Pty Ltd,L=SOME-CITY,ST=SOME-ST,C=EU
Validity
  ├─ Not Before : 2026-02-19 14:46:27
  └─ Not After  : 2124-09-18 14:46:27
Serial Number : 1D:80:68:AA:D9:32:F0:C5:BB:DE:B5:8F:8E:3B:41:E9:67:A1:8F:AF
Fingerprint   : D5:EB:30:1E:5A:00:4C:8B:6C:39:36:A5:DA:81:B1:E8:FC:F6:D7:7F (SHA-1)
Public Key    : RSAPublicKey 2048-bit
Signature Alg : 1.2.840.113549.1.1.11
SANs          : N/A
```

Below we illustrate the timing of detection of a TLS MiTM event, alongside the number of affected ASes and the total number of affected IP addresses observed during each event.

{{<img src="images/image2.png">}}

**Chart:** Timing of blocking events alongside the number of affected ASes and affected IP addresses observed during each event (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity)).

### Affected domains include benign and important websites

Affected domains include both benign and important websites. The blocked set spans a wide range of legitimate, unrelated-to-football services, some merely benign, others of clear public interest, including sites that defend human rights, document state interference, or deliver humanitarian aid.

The two detection methods we use carry different evidentiary weight per observation. For the TCP reachability failure signal, confidence comes from seeing the failures recur consistently and across several Spanish ISPs during match windows.

For domains blocked at the TCP/IP level, below is a selection of domains affected by the block on 9th May 2026 during the LALIGA matches Elche vs. Alavés, Sevilla vs. Espanyol, Atlético Madrid vs. Celta Vigo, and Real Sociedad vs. Real Betis.

{{<img src="images/image1.png">}}

**Chart:** Unrelated websites being blocked in Spain on 9th May 2026 during the LALIGA football match broadcasts (source: [OONI data](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&axis_x=measurement_start_day&since=2026-05-09&until=2026-05-10&time_grain=hour&probe_cc=ES&axis_y=domain&domain=cronicaluz.es%2Creferendum.cat%2Camnesty.ie%2Camnestynews.de%2Camnesty.org.au%2Copusdei.es%2Cislamic-relief.com%2Chuman-rights-for-all.org%2Cmercycorps.org.uk%2Ccaritas.lt%2Ccaritas.org.ar%2Cgreenpeace.org.ar%2Cislamophobia-watch.com%2Cdiocese-braga.pt%2Ctribunale.bergamo.it%2Cfreerussia.eu%2C4freerussia.org%2Cuacrisis.org%2Csenate.gov.au%2Clapatilla.com)).

The TLS MitM signature observed on Digi Mobil (AS57269) is conclusive on its own: a single observation of the injected `core1.netops.test` certificate confirms the connection was intercepted. Examples of affected domains below are drawn from both signals.

* **Human rights.** Amnesty International chapters in Ireland (`amnesty.ie`), Germany (`amnestynews.de`), Australia (`amnesty.org.au`), New Zealand (`amnesty.org.nz`), Russia (`amnesty.org.ru`), and the Caribbean (`amnesty-caribbean.org`); the Venezuelan digital rights group Venezuela Sin Filtro (`vesinfiltro.org`); and five US American Civil Liberties Union (ACLU) state chapters: Florida (`aclufl.org`), Hawaii (`acluhi.org`), North Carolina (`acluofnorthcarolina.org`), San Diego (`aclusd.org`), and Texas (`aclutx.org`).

* **Anti-corruption.** Transparency International chapters in Armenia, the Czech Republic, and Hungary (`transparency.am`, `transparency.cz`, `transparency.hu`).
* **Intergovernmental institutions.** UNICEF national sites in Italy, Chile, Greece, Thailand, and Australia (`unicef.it`, `unicef.cl`, `unicef.gr`, `unicef.or.th`, `unicef.org.au`); UNHCR national sites in Canada, Switzerland, Germany, and France (`unhcr.ca`, `unhcr.ch`, `unhcr.de`, `unhcr.fr`); and treaty-based bodies under the .int TLD — the International Pacific Halibut Commission (`iphc.int`), the Organization of Southern Cooperation (`osc.int`), and the Parliamentary Assembly of the Mediterranean (`pam.int`).
* **Environmental.** Greenpeace Argentina (`greenpeace.org.ar`), Cool Earth (`www.coolearth.org`), The Climate Reality Project (`www.climaterealityproject.org`), Orangutan Outreach (`redapes.org`), and the climate-science nonprofit Berkeley Earth (`berkeleyearth.org`).
* **Governmental.** The Australian Senate (`senate.gov.au`) and the Bergamo Court in Italy (`tribunale.bergamo.it`), along with US municipal and state government sites (the Arizona Legislature `azleg.gov`, Montana `csimt.gov`, Cape Cod `capecod.gov`, Clarke County `clarkecounty.gov`, and the Hopi tribal government `hopi-nsn.gov`), UK local authorities (Bassetlaw, Derby, and Cyberaware — the UK National Cyber Security Centre awareness site, `cyberaware.gov.uk`), and Australian government bodies including `betstop.gov.au`, the country's national gambling self-exclusion register.
* **Politics.** The Catalan Referendum site (`referendum.cat`).
* **News media.** La Patilla, a Venezuelan news outlet (`lapatilla.com`); the Ukrainian Crisis Media Center (`uacrisis.org`); pro-democracy Russia-focused outlets (`freerussia.eu`, `4freerussia.org`); and Latin-American and European editions of major news brands (`elmundo.com.bo`, `elpais.com.sv`, `euronews.al`, `euronews.bg`, `spiegel.lat`).
* **Humanitarian.** Caritas Argentina (`caritas.org.ar`), the social and humanitarian arm of the Catholic Church in Argentina, alongside the global confederation site (`caritas.org`) and chapters in Lithuania, Switzerland, Vietnam, Hong Kong, and Norway (`caritas.lt`, `caritas.ch`, `caritasdanang.org`, `caritasse.org.hk`, `caritastrondheim.no`); Mercy Corps (`mercycorps.org.uk`); and Islamic Relief (`islamic-relief.com`).
* **Universities and academic publications.** Stanford Law Review (`stanfordlawreview.org`), Yale Alumni Magazine (`yalealumnimagazine.org`) and Yale Journal (`yalejournal.org`), Princeton Public Library (`princetonlibrary.org`), Columbia Journal (`columbiajournal.org`), and the Oxford Institute for Energy Studies (`oxfordenergy.org`).
* **Security and developer infrastructure.** Multiple Amazon S3 regional endpoints (`s3.amazonaws.com`, `s3.eu-west-1.amazonaws.com`, `s3.us-east-1.amazonaws.com`), HashiCorp's Terraform registry (`registry.terraform.io`), the Qubes OS project (`qubes-os.org`), and the Turkish Debian mirror (`debian.org.tr`).
* **Intended piracy-streaming targets.** The actual objects of enforcement, e.g. `rojadirectatv.global`, `futbollibreonline.com`, `librefutbol.su`, `pirlotvenhd.me`, `tarjetarojatv.blog`, `elitegoltv.blog`, `pelotalibretv2.pl`, and `v3.sportssonline.click`.
* **Incidentally affected consumer services.** Linux Mint (`linuxmint.com`), Goodreads (`www.goodreads.com`), the IM+ (`plus.im`) and WeChat (`www.wechat.com`) messaging services, BYD (`www.byd.com`), Sina (`www.sina.com.cn`), Grindr's CDN (`cdns.grindr.com`), and the Polymarket prediction-market upload endpoint (`polymarket-upload.s3.us-east-2.amazonaws.com`).

A full list of all **domains found blocked** as part of our analysis is available **[here](data/20260629-laliga-blocked-domain-list.txt)**.

A full list of all **affected IPs** as part of our analysis is available **[here](data/20260629-all-affected-ips.csv)**.

### Temporal coupling of blocking

As part of our analysis of [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity) collected from Spain, we found that the **timing of IP blocking correlates with LALIGA match broadcasts**, with blocking events beginning shortly before match start times and being lifted shortly after matches conclude.

When looking at OONI data over time, we observe that during most times of LALIGA football matches on multiple Spanish networks, **blocking just a mere 4-20 IP addresses** results in a complete block **affecting over 400,000 unique domain names**.

Given that this analysis is based on OONI data that was opportunistically collected in Spain at those time intervals, we are **under-estimating the impact**. There might be even more IP addresses that were restricted in Spain that we did not capture in OONI data, or there may be some impacted domain names which we did not measure DNS resolution for and hence we would not know that they were affected by the IP blocks.

In some cases the block is marked as a "full block". This means that all the DNS records which a particular domain was resolving to were blocked. On the other hand, "partial block" means that we were not able to confirm whether or not all the IP addresses which were returned by the DNS resolution were in fact unavailable, but only a subset of them. The fact that a domain is marked as "partially blocked" does not necessarily mean that it is available, as it might also mean that we did not have measurements for all the resolved IP addresses.

While we are airing on the side of caution with these findings, even the most conservative estimates show some very concerning results.

Each of the charts in this section contain three panels. The top panel shows the count of domain names affected by IP-level blocking per measurement window, split by whether the impact is a full block (all IPs a domain resolves to were blocked) or a partial block (only a subset of resolved IPs were confirmed blocked). The light blue vertical bands overlaid on the top panel indicate the time windows during which LALIGA football matches were taking place. These allow the blocking events to be read directly against the match schedule: in most cases, **blocks begin shortly before kick-off and are lifted shortly after the final whistle, confirming the match-timed nature of enforcement**.

The middle panel shows the count of unique IP addresses found to be blocked within each measurement window. The bottom panel provides measurement coverage context: it shows the total number of OONI TCP reachability measurements collected on that network over time, with the bar colour indicating how many of the IPs that were found to be blocked at any point during the analysis were being actively tested at each moment (`ip_cnt`). Darker bars indicate that more of the eventually-blocked IPs were covered by measurements in that window; lighter bars indicate sparser coverage.

This panel is essential for interpreting absences in the top two panels: a period with no observed blocking but with low `ip_cnt` and low `msmt_cnt` should not be read as confirmation that no blocking occurred, as it may simply mean that the relevant IPs were not being tested at that time. Conversely, a period with consistently high `ip_cnt` and no blocking detected provides stronger grounds for concluding enforcement was genuinely absent.

{{<img src="images/image11.png">}}

**Chart:** Comparison of blocked IPs with partially and fully blocked domains on Orange Espagne (AS12479) in Spain during the LALIGA football match broadcasts between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS12479)).

Orange Espagne (illustrated above) records 103 measurement windows with over 400,000 domains blocked, spanning from 3rd January 2026 to 9th June 2026. We observe that **both full blocks and partial blocks co-occur throughout this period**, with one of the highest per-event IP counts in the dataset. The top panel, read against the match-time overlays, shows that blocking events align almost precisely with every LALIGA match window throughout the season, with **blocked domain counts reaching 477,965 in an hourly window**. Full blocks dominate (92 windows), but partial blocks also appear recurrently (11 windows), sometimes on the same match day, reflecting a blocked IP set that spans highly consolidated infrastructure, where one IP covers all of a domain's resolution set, alongside more distributed hosting where only a subset of IPs are confirmed to be blocked.

{{<img src="images/image9.png">}}

**Chart:** Comparison of blocked IPs with partially and fully blocked domains on Telefonica De Espana (AS3352) in Spain during the LALIGA football match broadcasts between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS3352)).

Telefonica De Espana shows enforcement on almost every LALIGA match weekend from early January 2026 through to the finals in June 2026, with 144 measurement windows exceeding 400,000 blocked domains. The **total blocked domain counts** (counting both partial to complete) **reached up to 478,052 in a single hour**.

{{<img src="images/image16.png">}}

**Chart:** Comparison of blocked IPs with partially and fully blocked domains on Mas Orange (AS12334) in Spain during the LALIGA football match broadcasts between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS12334)).

In contrast, Mas Orange (depicted above) shows minimal activity through the first quarter of the year before a marked shift from late March 2026 onwards, when both full and partial block events begin reaching above 400,000 domains per window. The concentration of high-impact events in April 2026 and May 2026 mirrors patterns seen on other operators during the closing weeks of the LALIGA season, consistent with match frequency increasing toward the end of the campaign. Per-event IP counts peak at around 7. Overall, blocking enforcement on Mas Orange **escalates sharply in the second half of the season**, with full and partial blocks reaching maximum scale simultaneously.

{{<img src="images/image13.png">}}

**Chart:** Comparison of blocked IPs with partially and fully blocked domains on Vodafone Espana (AS12430) in Spain during the LALIGA football match broadcasts between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS12430)).

Vodafone Espana applies IP-level blocks at irregular intervals across the LALIGA season, each time producing full-block events affecting over 400,000 domain names. No partial blocks are recorded, consistent with enforcement targeting consolidated infrastructure, such as Cloudflare IPs, where a single blocked address covers the complete resolution set of many domains. Per-event IP counts remain very low, typically 2–6 addresses. Overall, we observe **irregular but high-impact blocking enforcement** on Vodafone Espana, as every blocking event fully disrupts over 400,000 domains.

{{<img src="images/image4.png">}}

**Chart:** Comparison of blocked IPs with partially and fully blocked domains on Vodafone ONO (AS6739) in Spain during the LALIGA football match broadcasts between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS6739)).

Vodafone ONO follows the broad pattern of Spain's major fixed-line operators: repeated full-block events affecting over 400,000 domains, tightly coupled to LALIGA matches, with no partial blocks observed throughout the period. Blocking activity is concentrated in late January, February, and mid-May 2026. Per-event IP counts peak at around 4, illustrating how a very small number of IP-level restrictions can produce collateral impact at an enormous scale.

{{<img src="images/image3.png">}}

**Chart:** Comparison of blocked IPs with partially and fully blocked domains on Mas Movil (AS15704) in Spain during the LALIGA football match broadcasts between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS15704)).

Blocking events on Mas Movil (illustrated above) are tightly coupled to LALIGA match windows and occur on an almost weekly cadence from January 2026 through June 2025. Each event affects over 400,000 domain names despite involving as few as 4–20 IP addresses. The upper panel shows the mix of fully and partially blocked domains per measurement window; the lower panel shows the count of unique IP addresses restricted. Overall, we observe that sustained weekly blocking enforcement on Spain's fourth-largest ISP produces near-continuous collateral impact at scale.

In contrast, we observe reduced blocking consistency, frequency, and intensity on the networks shared through the charts below.

{{<img src="images/image8.png">}}

**Chart:** Comparison of blocked IPs with partially and fully blocked domains on Euskaltel (AS12338) in Spain during the LALIGA football match broadcasts between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS12338)).

{{<img src="images/image12.png">}}

**Chart:** Comparison of blocked IPs with partially and fully blocked domains on DigiMobil (AS57269) in Spain during the LALIGA football match broadcasts between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS57269)).

{{<img src="images/image17.png">}}

**Chart:** Comparison of blocked IPs with partially and fully blocked domains on RedIRIS (AS766) in Spain during the LALIGA football match broadcasts between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS766)).

In order to track more accurately the blocking of a specific IP that seemed to be consistently measured across all during all match windows and presented signs of blocking in at least one of them. We use this as a proxy for evaluating compliance and onset of the block.

The following charts plot the `blocking_rate` of IP address `188.114.97.5`, highlighting the temporal coupling between the start and end of LALIGA football matches and the corresponding onset and termination of IP-level blocking.

The `blocking_rate` is defined as the `log((failure_cnt + 0.5) / (ok_cnt + 0.5))`.

A high `blocking_rate` indicates that the number of failed measurements substantially exceeds the number of successful (`OK`) measurements, whereas a negative `blocking_rate` indicates the opposite. Values close to zero occur when the numbers of failed and successful measurements are similar, or when both counts are small. In these cases, the available evidence is insufficient to confidently infer either the presence or the absence of blocking.

In the charts below, we can see how most ISPs block the IP `188.114.97.5` just before the match start time and remove the block soon thereafter. This is observed on several networks – Telefonica De Espana (AS3352), Mas Movil (AS15704), Orange Espagne (AS12479), Vodafone Espana (AS12430), Mas Orange (AS12334), Vodafone ONI (AS6739), and Euskaltel (AS12338) – shared below.

{{<img src="images/image19.png">}}

**Chart:** OONI measurements on the blocking of IP `188.114.97.5` on Telefonica De Espana (AS3352) during LALIGA football matches between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS3352)).

{{<img src="images/image18.png">}}

**Chart:** OONI measurements on the blocking of IP `188.114.97.5` on Mas Movil (AS15704) during LALIGA football matches between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS15704)).

{{<img src="images/image15.png">}}

**Chart:** OONI measurements on the blocking of IP `188.114.97.5` on Orange Espagne (AS12479) during LALIGA football matches between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS12479)).

{{<img src="images/image10.png">}}

**Chart:** OONI measurements on the blocking of IP `188.114.97.5` on Vodafone Espana (AS12430) during LALIGA football matches between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS12430)).

{{<img src="images/image14.png">}}

**Chart:** OONI measurements on the blocking of IP `188.114.97.5` on Mas Orange (AS12334) during LALIGA football matches between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS12334)).

{{<img src="images/image7.png">}}

**Chart:** OONI measurements on the blocking of IP `188.114.97.5` on Vodafone ONO (AS6739) during LALIGA football matches between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS6739)).

{{<img src="images/image6.png">}}

**Chart:** OONI measurements on the blocking of IP `188.114.97.5` on Euskaltel (AS12338) during LALIGA football matches between January 2026 to June 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2026-01-01&until=2026-06-01&failure=false&probe_cc=ES&test_name=web_connectivity&probe_asn=AS12338)).

As is evident from the above charts, OONI data from Spain shows that enforcement of the blocking measures **differed in both consistency and intensity across providers**, with Telefonica (AS3352) among those applying the blocks most reliably during LALIGA match broadcasts over the analysis period. OONI data also suggests that **blocking by most ISPs is largely confined to match time windows**, with minimal evidence of spillover outside broadcast periods.

## Limitations

The findings of this study are subject to some limitations. Notably most of these bias our results towards **under-stating the scale of the blocking**, so the true impact is likely greater than what we report.

* **Tested-IP sampling.** The set of IP addresses we can observe being blocked is bounded by the domains in the OONI Web Connectivity test lists, primarily the [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists), because the IPs we measure are those to which these domains resolve. An IP that no tested domain resolved to during a blocking event is invisible to this analysis, regardless of whether it was blocked.
* **Opportunistic measurement coverage.** [OONI measurements](https://ooni.org/data) are crowdsourced and collected opportunistically, with coverage varying across networks and over time depending on when and where [OONI Probe](https://ooni.org/install) users ran tests. We restrict our findings to the best-covered networks, and the per-window measurement counts shown alongside our charts indicate confidence: an absence of observed blocking in a low-coverage window is not evidence that no blocking occurred. The two blocking signals we use also differ in how much coverage they require, which introduces a further bias. The TLS MitM signal is detectable from a single measurement; one observation of the injected certificate is enough to flag an IP and domain. The TCP-failure signal requires more: an IP must have more than five control measurements with a failure rate below 1%, and at least two in-window measurements with a failure rate above 90%. Heavily consolidated providers such as Cloudflare host many tested domains behind the same IPs, so those IPs are measured repeatedly and are far more likely to accumulate enough observations to cross the TCP-failure threshold. IPs at providers with sparser domain-to-IP allocation are tested less often and are correspondingly more likely to fall short of the threshold and go undetected. The MitM signal is much less affected, since it does not depend on observation volume. The TCP-failure method is therefore itself biased toward well-consolidated infrastructure, compounding the under-count for sparse providers.
* **IP-to-domain mapping bias.** To estimate domain impact, we map blocked IPs back to domains using DNS scans of a fixed list of 9.2 million domains, compiled from the [Cloudflare Radar top 1M list](https://radar.cloudflare.com/domains), [Tranco top 1M list](https://tranco-list.eu/), [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists), [Majestic Million](https://majestic.com/reports/majestic-million) and the [Certificate Transparency](https://certificate.transparency.dev/logs/) logs. Affected domains outside this list are not captured, so the real number of impacted domains may be higher. The list also covers some providers more densely than others, which can skew the relative impact attributed to each.
* **DNS resolution timing.** To map blocked IPs to domains, we relied on [ZDNS](https://github.com/zmap/zdns) scans run four times daily, and for measurements predating our scanning campaign (4 May 2026) we used the earliest available scan as a proxy. Where a domain's actual resolution at the time of blocking differed from the nearest scan, this introduces some error into the IP-to-domain attribution.
* **IP address consolidation.** Beyond its effect on detection, consolidation also shapes the measured domain impact: providers that place many domains behind few shared IPs (e.g. Cloudflare) yield large impact per blocked IP, while those with sparser allocation yield less. Our per-provider estimates therefore reflect infrastructure architecture as much as enforcement intensity.
* **Conservative blocking classification.** We label a domain "fully blocked" only when every IP it resolves to is in the blocked set, and "partially blocked" otherwise. A domain marked partial may in fact have been fully unreachable where we lacked visibility into all of its IPs, and our detection thresholds are deliberately strict, so some genuine blocking goes uncounted.

## Conclusion

This study highlights the **widespread collateral damage** in Spain that resulted from IP blocks associated with alleged piracy streaming services during LALIGA football match broadcasts, affecting hundreds of thousands of domains, including legitimate and widely used websites.

At least 5.8% out of 9.2 million of the internet's most popular domains were found to be blocked in Spain, including human rights organizations, environmental groups, government institutions, news media outlets, humanitarian organizations, and messaging platforms. These impacted domains were the result of blocking affecting 7,441 unique IP addresses across 36 infrastructure and hosting providers, including Cloudflare, Amazon, Akamai, Meta, and Microsoft, highlighting the widespread impact of blocking shared infrastructure.

Although the impact estimated in our study is already substantial, our methodology is a lower bound, suggesting that the **true extent of the impact is likely higher** than our reported figures. This **raises questions about the necessity and proportionality of blocking such a large portion of the web in the context of copyright enforcement against unauthorized football streams**. It also raises broader questions about where the appropriate boundaries of such measures lie, and whether their deployment may set a precedent for more extensive blocking in the future.

While it's positive that the blocks by most ISPs were largely confined to match time windows, there is still the need for **more robust oversight and transparency** about what is being blocked and why, and strict proportionality between the measure and its harm. As part of our analysis, we observed TLS man-in-the-middle attacks on Digi Mobil (AS57269), which raises important **privacy and security concerns**. OONI data from Spain shows that enforcement of the blocking measures differed in both consistency and intensity across providers, with **Telefonica (AS3352) among those applying the blocks most reliably** during LALIGA match broadcasts over the analysis period.

Telefonica operates as both a major telecommunications provider and a broadcaster of football content through its media services, and it's approximately [10% state-owned](https://www.sepi.es/en/press-room/news/sepi-reaches-10-stake-telefonicas-capital) through public investment participation. This combination of roles, alongside its commercial interest in football broadcasting rights and its position within Spain's telecommunications infrastructure, **raises questions about potential conflicts of interest** and the independence of enforcement dynamics. These considerations are relevant to broader discussions on self-regulation and the involvement of industry stakeholders in the implementation of court-authorized blocking measures.

Overall, this study underscores the need for continuous, independent oversight of blocking measures in Europe to ensure that the region maintains its leadership in safeguarding an open internet and the rights of its users.

## Acknowledgements

We thank [OONI Probe](https://ooni.org/install) users in Spain for contributing measurements, and Cloudflare for sponsoring part of this work. The research was conducted independently by OONI, and all findings and conclusions are our own.
