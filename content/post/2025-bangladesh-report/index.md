---
title: "The Longest Silence: Internet Shutdowns During Bangladesh’s 2024 Uprising"
description: "This report documents internet censorship in Bangladesh between July to August 2024 student-led uprising."
author: "Tohidul Islam Raso (Digitally Right), Suhadha Afrin (Digitally Right, Prothom Alo), Miraj Ahmed Chowdhury (Digitally Right), Maria Xynou (OONI), Elizaveta Yachmeneva (OONI)"
date: "2025-07-31"
tags: ["country-bd", "censorship", "bangladesh", "theme-social_media", "theme-human_rights"]
categories: ["report"]
---

This study was conducted by [Digitally Right](https://digitallyright.org/) in collaboration with the [Open Observatory of Network Interference (OONI)](https://ooni.org/). Key contributors include Tohidul Islam Raso from Digitally Right and Maria Xynou from OONI. Suhadha Afrin, a Tech Policy Fellow at Digitally Right and journalist at Prothom Alo, also contributed to the research and documentation for this report. The research has been reviewed by Miraj Ahmed Chowdhury from Digitally Right. 

We are equally grateful to Digitally Right's Network Measurement Fellows across Bangladesh, whose work in tracking disruptions and documenting censorship during the protests helped verify and strengthen the findings of this report. We also thank the journalists whose extensive coverage of the shutdowns provided a vital foundation for this report and the individuals affiliated with operators and service provider organizations who provided interviews and shared relevant information that informed this analysis.

We hope this report contributes to a clearer understanding of the July–August 2024 internet shutdowns in Bangladesh and serves as a foundation for future research into network disruptions and digital rights in Bangladesh.

{{< oonibtn href="/documents/2025-bd-report-en.pdf" text="Download in PDF" >}}

{{<table-of-contents>}}

{{<img src="images/image28.png" title="Title illustration" alt="Title illustration">}}

## Executive Summary 

Bangladesh witnessed its worst internet shutdown during the July–August 2024 student-led uprising, which ultimately led to the fall of the Sheikh Hasina government. Over a 22-day period, from mid-July to early August, the shutdowns coincided with mass protests, the killing of hundreds of demonstrators, and widespread human rights violations, as documented by domestic and international observers, including United Nations reports.

The scale and complexity of the shutdown were unprecedented. Multiple layers of control were deployed, ranging from nationwide blackouts to bandwidth throttling, cache server deactivations, and targeted blocking of social media and VPNs. Implementation was marked by a lack of transparency, overlapping government actors, and informal or verbal directives, leading to conflicting narratives and limited public disclosure.

Yet, this shutdown became one of the most extensively documented in Bangladesh’s history. Local and national media covered nearly every disruption, activists used open-source tools to track and document censorship, and international watchdogs monitored the incidents offering technical data and evidence.

Digitally Right Limited, in collaboration with the Open Observatory of Network Interference (OONI), developed this report to reconstruct a verified timeline of these events, map how the shutdown was enforced at different network layers, and assess its broader implications for accountability, rights, and access to information during political crises.

Key findings include:

* **Unprecedented scale and duration:** The shutdown with two full national blackouts (July 18-23 and August 5), bandwidth throttling and targeted blocking was the longest and most geographically widespread in Bangladesh’s history.
* **Network disruption aligned with political escalation**: The most severe disruptions, including the five-day blackout and the August 5 blackout, broadly coincided with the deadliest phases of unrest. Between July 18-23 alone, media reports documented at least 143 deaths, while August 4-5 saw 223 more, highlighting how shutdowns paralleled spikes in violence.
* **Multi-layered methods of control**: The state employed diverse tactics, from complete shutdowns of mobile and broadband services to throttling, cache server shutdowns, and selective blocking of social media, messaging apps, and circumvention tools.
* **Opacity and fragmented authority**: Most measures were ordered informally, often via WhatsApp, with overlapping roles played by the ministry of ICT, BTRC, NTMC, and Department of Telecommunications. Conflicting public statements and a lack of formal orders left citizens and journalists unable to verify or challenge restrictions in real time.
* **Crackdown on circumvention:** Authorities extended controls to VPNs, including ProtonVPN, NordVPN, and TunnelBear, hindering efforts to bypass censorship and share evidence of abuses, particularly during the July 31–August 5 phase.

## List of acronyms 

**AL** – Awami League 

**AS** – Autonomous System 

**BCL** – Bangladesh Chhatra League

**BEC** – Bangladesh Election Commission

**BGB** – Border Guard Bangladesh

**BNP** – Bangladesh Nationalist Party

**BTRC** – Bangladesh Telecommunication Regulatory Commission

**CAIDA** – Center for Applied Internet Data Analysis (developer of IODA)

**CDN** – Content Delivery Network

**CU** – Chittagong University

**DB** – Detective Branch (of Dhaka Metropolitan Police)

**DU** – Dhaka University

**DoT** – Department of Telecommunications

**ICT** – Information and Communications Technology

**IIG** – International Internet Gateway

**IODA** – Internet Outage Detection and Analysis (Georgia Tech/CAIDA)

**IP** – Internet Protocol 

**ISP** – Internet Service Provider

**ISPAB** – Internet Service Providers Association of Bangladesh

**ITC** – International Terrestrial Cable

**JU** – Jahangirnagar University

**MNO** – **Mobile Network Operator

**NTMC** – National Telecommunication Monitoring Centre

**OONI** – Open Observatory of Network Interference

**PS core** – Packet Switched core 

**RU** – Rajshahi University

**SUST** – Shahjalal University of Science and Technology

**TLS** – Transport Layer Security (protocol)

**VPN** – Virtual Private Network

## Introduction

During the [student-led uprising](https://archive.ph/uS6h1) between July 15 and August 5, 2024, Bangladesh experienced a [series of internet shutdowns](https://pulse.internetsociety.org/en/shutdowns/bangladesh-government-shuts-down-mobile-internet-again-amidst-protests/) that varied in form, intensity, and geographic reach. While internet disruptions have [occurred in the country since 2009](https://pulse.internetsociety.org/blog/shutdown-watch-building-a-community-against-internet-shutdowns-in-bangladesh), the [July–August 2024 shutdown](https://ioda.inetintel.cc.gatech.edu/country/BD?from=1719866792&until=1725137192) was unprecedented – both in scope, due to its nationwide impact, and in duration, marking the longest sustained disruption to date. The array of tactics used by the authorities to restrict access, ranging from full blackouts to bandwidth throttling and selective blocking, made it broader and more complex than any previous incident.

Compounding the severity of these shutdowns was the opacity with which they were carried out. The lack of publicly disclosed directives and the shifting methods of enforcement created confusion and made it difficult to document events as they unfolded. This report draws on news coverage published during the uprising and in the aftermath of Sheikh Hasina’s fall from power, as well as technical data from international internet monitoring organizations and interviews with service providers and authorities.

Although the overall period spans 22 days, internet connectivity was disrupted for 20 of those days, with August 1 and 3 standing out as days when no significant disruption was reported. This report divides the 22-day period into five phases, documenting each phase’s political developments, patterns of protest and repression, and the specific forms of network control imposed. It examines not only when shutdowns occurred and what form they took, but also the mechanisms and institutions through which they were executed. Its goal is to reconstruct a verified timeline, linking disruption to its political backdrop, technical characteristics, and chain of responsibility.

### What Is an Internet Shutdown?

The #KeepItOn coalition [defines](https://www.accessnow.org/campaign/keepiton/) an internet shutdown as “an intentional disruption of internet or electronic communications, rendering them inaccessible or effectively unusable, for a specific population or within a location, often to exert control over the flow of information.” Shutdowns are typically ordered by state authorities and implemented through technical means to limit access to information, suppress communication, or control public mobilization during periods of political unrest or perceived instability. Shutdowns may take several forms:

* **Blackout**: A complete disconnection of internet services, including mobile data and fixed-line broadband. \
**Throttling**: A deliberate reduction of internet speed (such as downgrading from 4G to 2G) making regular use of the internet difficult or impossible.
* **Blocking**: Targeted disruptions of access to specific platforms, such as Facebook, WhatsApp, or YouTube, usually through DNS tampering, IP blocking, or filtering at the gateway level.

At their core, shutdowns disconnect large segments of the population from communication, information, and essential services, and are often implemented without transparency or due process.

### How are Shutdowns Implemented?

In Bangladesh, internet shutdowns are typically initiated through instructions from state authorities including the regulator, Bangladesh Telecommunication Regulatory Commission (BTRC). Authorities issue formal or informal orders to mobile network operators (MNOs) and internet service providers (ISPs) to block access, reduce speeds, or shut down connectivity entirely (often referred to as [triggering a "kill switch"](https://archive.ph/wBVEm)). Targeted disruptions of access to specific platforms, such as Facebook, WhatsApp, or YouTube, are usually implemented through DNS tampering, IP blocking, or filtering at the gateway level.

The centralized structure of Bangladesh’s internet infrastructure makes such enforcement relatively straightforward. All domestic internet traffic must pass through a limited number of International Internet Gateways (IIGs), which serve as chokepoints through which access to the global internet is routed. Such centralization allows the authorities to implement shutdowns either by instructing individual ISPs or by applying restrictions upstream at the IIG level – affecting all downstream users simultaneously.

In some instances, according to the industry insiders, state agencies with technical capacity, such as the [National Telecommunication Monitoring Centre (NTMC)](https://archive.ph/NiFmd) – may directly intervene in network operations without the involvement of private providers. The Centre also provides directives to the operators and service providers to censor the internet. However, due to the lack of formal, publicly disclosed procedures, these directives often remain in the dark and implemented with almost no resistance from the service providers.

Internet shutdowns in Bangladesh can be localized, regional, or nationwide. Their scope may vary, and duration can range from minutes to weeks, depending on the intent and technical method used. From a [brief blackout in November 2015](https://archive.ph/z4yKE), to nationwide mobile internet throttling during [the 2018 student protests, to platform blocking in 2021](https://preparepreventresist.openinternetproject.org/wp-content/uploads/2023/02/Optima-Bangladesh-Report.pdf), shutdowns have been imposed in different forms. However, the July–August 2024 shutdown blackouts, throttling, and platform blocking were deployed simultaneously at a national scale and sustained over multiple weeks.

## Methodology

This timeline and analysis were reconstructed using a range of publicly available sources and digital evidence. Throughout the protest period, our team monitored media reports, social media posts, official statements, and platform behavior to document when, where, and how internet disruptions occurred.  

We also relied on network measurement data from platforms such as IODA and OONI to verify the timing and scale of shutdowns. These technical signals were crucial in corroborating media reports, especially during moments of complete information blackout. Interviews with key stakeholders, including those from the government, IIGs, ITCs, and MNOs, offered additional context on the implementation mechanisms.

Where possible, firsthand experiences were documented by the research team and cross-referenced with public reports. The fragmented and often conflicting nature of available information meant that the timeline was assembled iteratively, with constant back-checking and source triangulation.  

### Limitations

Due to the opacity of government communication, we were unable to access formal written orders for most instances of internet shutdowns, platform blocks, and VPN disruptions. Much of the timeline had to be reconstructed using news reports, corroborated operator interviews, infrastructure behavior (such as cache server shutdowns), and data from network monitoring platforms.

For this report, we primarily relied on death counts reported in national newspapers during the July-August 2024 uprising. These contemporaneous reports were used to infer patterns of violence and their correlation with periods of intensified internet shutdowns. Later, government and UN reports provided differing figures. For instance, the Ministry of Health's count, which was later [cited by the UN Human Rights Office report](https://www.ohchr.org/sites/default/files/documents/countries/bangladesh/ohchr-fftb-hr-violations-bd.pdf) released in February 2025, recorded 841 deaths. It was estimated that as many as 1,400 people had died between July 15 and August 5, 2024, including women and children, with the vast majority killed by firearms.

However, neither government bodies nor the UN have released disaggregated or day-specific fatality figures that allow for precise time-coded analysis. As such, while this report identifies broad overlaps between the most intense periods of network disruption and spikes in media-reported violence, it was not possible to draw precise statistical conclusions without verified, time-coded casualty datasets.

### OONI methodology

Since 2012, [OONI](https://ooni.org/) has developed free and open source software (called [OONI Probe](https://ooni.org/install/)) which is designed to [measure various forms of internet censorship](https://ooni.org/nettest/), including the blocking of websites and apps. Every month, OONI Probe is regularly run by volunteers in [around 170 countries](https://explorer.ooni.org/), including [Bangladesh](https://explorer.ooni.org/country/BD). By default, network measurements collected by OONI Probe users are automatically published as [open data in real-time](https://ooni.org/data).

[OONI Probe](https://ooni.org/install/) includes the [Web Connectivity experiment](https://ooni.org/nettest/web-connectivity/) which is designed to measure the blocking of many different [websites](https://ooni.org/support/faq#which-websites-will-i-test-for-censorship-with-ooni-probe) (included in the public, community-curated [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists)). Specifically, OONI’s [Web Connectivity test](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md) is designed to measure the accessibility of [URLs](https://github.com/citizenlab/test-lists/tree/master/lists) by performing the following steps:

* Resolver identification
* DNS lookup
* TCP connect to the resolved IP addresses
* TLS handshake to the resolved IP addresses
* HTTP(s) GET request following redirects

The above steps are automatically performed from both the local network of the user, and from a control vantage point. If the results from both networks are the same, the tested URL is annotated as accessible. If the results differ, the tested URL is annotated as [anomalous](https://ooni.org/support/faq#what-do-you-mean-by-anomalies), and the type of anomaly is further characterized depending on the reason that caused the failure (for example, if the TCP connection fails, the measurement is annotated as a TCP/IP anomaly).

[Anomalous measurements](https://ooni.org/support/faq#what-do-you-mean-by-anomalies) may be indicative of blocking, but [false positives](https://ooni.org/support/faq#what-are-false-positives) can occur. We therefore consider that the likelihood of blocking is greater if the overall volume of anomalous measurements is high in comparison to the overall measurement count (compared on an ASN level within the same date range for each OONI Probe experiment type).

Each [Web Connectivity](https://ooni.org/nettest/web-connectivity/) measurement provides further network information (such as information pertaining to TLS handshakes) that helps with evaluating whether an anomalous measurement presents signs of blocking. We therefore disaggregate based on the reasons that caused the anomaly (e.g. connection reset during the TLS handshake) and if they are consistent, they provide a stronger signal of potential blocking.

Based on OONI’s heuristics, we are able to automatically confirm the blocking of websites based on [fingerprints](https://github.com/ooni/blocking-fingerprints) if a [block page](https://ooni.org/support/glossary#block-page) is served, or if DNS resolution returns an IP known to be associated with censorship. While this method enables us to [automatically confirm website blocking](https://explorer.ooni.org/search?since=2025-06-26&until=2025-07-27&failure=false&only=confirmed) in [Bangladesh](https://explorer.ooni.org/search?since=2025-06-26&until=2025-07-27&failure=false&only=confirmed&probe_cc=BD) and numerous other countries (such as [Italy](https://explorer.ooni.org/search?since=2024-10-16&until=2024-11-16&failure=false&test_name=web_connectivity&only=confirmed&probe_cc=IT), [Kazakhstan](https://explorer.ooni.org/search?since=2024-10-16&until=2024-11-16&failure=false&test_name=web_connectivity&only=confirmed&probe_cc=KZ), [Iran](https://explorer.ooni.org/search?since=2024-10-16&until=2024-11-16&failure=false&test_name=web_connectivity&only=confirmed&probe_cc=IR), and [Indonesia](https://explorer.ooni.org/search?since=2024-10-16&until=2024-11-16&failure=false&test_name=web_connectivity&only=confirmed&probe_cc=ID)), not all blocks are implemented in a way that is fingerprintable and automatically detectable. 

We therefore aggregate anomalous web connectivity measurements based on failure types (“dns”, “tcp_ip”, “http-failure”, “http-diff”) to evaluate if they were consistently present (or if the types of failures varied), as a more consistent failure type observed in a larger volume of measurements provides a stronger signal of blocking. We further analyze these failures to detect the specific errors (such as “connection_reset_error” or “generic_timeout_error”) that would enable us to characterize potential blocking, and we aggregate the errors to examine whether and to what extent they were consistent across (relevant) measurements on each tested ASN.

This involved analyzing the network information from TLS handshake data in these measurements to evaluate whether the errors were a result of TLS based interference. For example, a measurement may show that DNS resolution returned consistent IPs, that it was possible to establish a connection to resolved IPs, but that the TLS handshake session timed out after the first ClientHello message (which is unencrypted), resulting in a “generic_timeout_error”. While we would consider that such a measurement shows signs of potential TLS based interference, we would not draw conclusions from a single measurement alone.

We therefore aggregate the errors to determine whether a large percentage of anomalous measurements for a tested URL presented the same error (e.g. “tls_timeout_error”) in comparison to the overall measurement volume on a specific network, within a specified date range. The higher the ratio of consistent errors (from anomalous measurements) in comparison to the overall measurement count, the stronger the signal (and the greater our confidence) that access to the tested domain is (a) blocked, and (b) blocked in a specific way (e.g TLS interference).

**The OONI findings of this report present several limitations:**

* **Date range of analysis.** The findings are limited to [OONI network measurement data collected from Bangladesh](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&time_grain=day) between **1st July 2024 to 31st August 2024**, when the internet disruptions and blocks [reportedly](https://www.cbc.ca/news/world/bangladesh-jobs-protests-telecoms-cut-1.7268940) occurred amid the student-led uprising of the summer of 2024.
* **Measurement coverage.** The availability of OONI data depends on whether, on which networks, and when an [OONI Probe](https://ooni.org/install) user ran tests in Bangladesh. As OONI Probe is used on a voluntary basis, OONI has no control over the availability of measurements. As a result, OONI measurement coverage in Bangladesh varies over time.
* **Tested ASes.** While OONI Probe tests are regularly performed on multiple ASes in Bangladesh, not all networks are tested equally. Rather, the availability of measurements depends on which networks [OONI Probe](https://ooni.org/install) users were connected to when performing tests. As a result, OONI measurement coverage varies across ASes over time in Bangladesh. Moreover, the findings are limited to the ASes which received the largest measurement coverage and which presented the strongest blocking signals during the analysis period.
* **Blocking signals.** As part of their data analysis, OONI limited their findings to signals that they considered more reliable and indicative of government-commissioned censorship, while excluding cases viewed as presenting weak signals (due to limited measurement coverage and inconsistent failure types).

{{<img src="images/image7.png" title="Timeline" alt="Timeline">}}

## A Timeline of the July Shutdown

The July-August 2024 internet shutdown in Bangladesh is likely one of the most extensively documented in the country’s history. From the very first day, each instance of disruption was reported in some form by local and national news outlets. Following the fall of Sheikh Hasina’s government, further reporting examined the scope, methods, and political context of the shutdown. Internet users were also vocal throughout the period, sharing real-time reports of service disruptions on social media. Several local and international watchdog organizations collected technical measurement data during this time, producing reliable evidence of the censorship. 

This report draws on media coverage, technical evidence, and interviews with operators, service providers, and regulators to reconstruct a verified timeline of the shutdown and understand how each phase of disruption was carried out.

### a) July 15–17: Escalating Protests and Initial Internet Controls

**Political Context**

The anti-discrimination protests escalated on July 14, shortly after a controversial remark by then–Prime Minister Sheikh Hasina, who stated, “If the grandchildren of the freedom fighters don't get quota benefits, should the grandchildren of Razakars get the benefit?” The term “Razakar”  refers to collaborators of the Pakistani Army during the 1971 Liberation War, which is deeply tied to national trauma and betrayal. The statement was seen as offensive and as an attempt to imply that the protesting students were descendants of Razakar. That evening, [demonstrations broke out across public university campuses](https://archive.ph/eJoHK). By July 15, tensions deepened as activists from the ruling Awami League’s student wing, Bangladesh Chhatra League (BCL), launched attacks on protesters at several campuses, turning universities into flashpoints of violence.

On July 16, students from [private universities and other institutions](https://archive.ph/58rTc) joined the movement. The [first reported death](https://archive.ph/zfKcb) occurred that day: in Rangpur, a video showing police firing on Abu Sayed, a student at Begum Rokeya University, circulated widely. Media reports published the same day indicated at least six deaths. On that very day, [general students fought back and drove the BCL activists out](https://archive.ph/YJbAB) of Dhaka and Rajshahi Universities in the university campuses.

Later that night, all public and private universities across the country were [declared closed indefinitely](https://archive.ph/dbCoP). Students were ordered to vacate their dormitories. On July 17, many were forcibly evicted and took shelter in surrounding areas. [Students tried to hold “absentee funerals”](https://www.voanews.com/a/timeline-of-events-leading-to-the-resignation-of-bangladesh-prime-minister-sheikh-hasina/7731456.html) for those who were killed, but police attacked their gatherings at three universities. As a result, protests spread from public campuses to private universities and beyond. 

**Nature of the Shutdown** 

Between July 15 and 17, three key forms of internet control were reported: mobile internet throttling, targeted mobile service shutdowns, and selective platform blocking.

Complaints of [slow mobile data](https://www.deshrupantor.com/523034/%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE-%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F-%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A6%BE%E0%A6%B8%E0%A7%87-%E0%A6%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A6%A8%E0%A7%87%E0%A6%9F-%E0%A6%B8%E0%A7%87%E0%A6%AC%E0%A6%BE-%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A7) (indicating throttling) in the Dhaka University area began on the night of July 14. By the morning of July 15, both 3G and 4G services were reportedly disabled in the Shahbagh and DU areas. As clashes spread, high-speed mobile internet was similarly shut down in other major university zones from midnight (July 15-16) onward.

From July 16, users outside these university areas also [began reporting](https://archive.ph/ZwGpk) degraded connectivity. This included either a complete inability to access 3G/4G services or [significant disruptions when attempting to open Facebook or Messenger on mobile networks](https://archive.ph/RVkf7). Importantly, at this time, Facebook remained accessible via broadband connections.

Independent [OONI Probe](https://ooni.org/install/) network tests conducted by [Digitally Right](https://digitallyright.org/)’s network measurement fellows on July 16 and 17 in six districts – including Dhaka, Sylhet, Tangail, Mymensingh, and Rangpur – suggested that Facebook was blocked across all major mobile networks by the night of July 16.

{{<img src="images/image17.png" title="OONI Probe test results" alt="OONI Probe test results">}}

**Image 1:** Screenshots of OONI Probe test results showing the blocking of Facebook on networks in Bangladesh on 16th July 2024 (source: [OONI Probe app](https://ooni.org/install/)).

While [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&domain=www.facebook.com&since=2024-07-01&until=2024-07-31&axis_x=measurement_start_day&axis_y=probe_asn&time_grain=day) collected from multiple networks in Bangladesh throughout July 2024 indicates that Facebook was accessible on most networks, access to “www.facebook.com” appears to have been blocked on the [AS24432](https://explorer.ooni.org/m/20240716200350.966415_BD_webconnectivity_921a95b91bc1bdd3) (Axiata) and [AS24389](https://explorer.ooni.org/m/20240716172647.769708_BD_webconnectivity_9e7c087cc444d1ee) (Grameenphone) networks, starting from 16th July 2024.

Chart 1 aggregates OONI measurement coverage from the testing of “www.facebook.com” on the AS24432 (Axiata) and AS24389 (Grameenphone) networks in Bangladesh throughout July 2024.

{{<img src="images/image27.png" title="OONI measurement coverage from the testing of “www.facebook.com”" alt="OONI measurement coverage from the testing of “www.facebook.com”">}}

**Chart 1:** OONI Probe testing of www.facebook.com in Bangladesh on the AS24432 (Axiata) and AS24389 (Grameenphone) networks between 1st July 2024 to 31st July 2024 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=BD&probe_asn=24389%2C24432&test_name=web_connectivity&domain=www.facebook.com&since=2024-07-01&until=2024-07-31&axis_x=measurement_start_day&axis_y=probe_asn&time_grain=day)).

As is evident from chart 1, most [OONI measurements](https://explorer.ooni.org/chart/mat?probe_cc=BD&probe_asn=24389%2C24432&test_name=web_connectivity&domain=www.facebook.com&since=2024-07-01&until=2024-07-31&axis_x=measurement_start_day&axis_y=probe_asn&time_grain=day) from the testing of “www.facebook.com” on the AS24432 and AS24389 networks resulted in [anomalies](https://ooni.org/support/interpreting-ooni-data/#anomalies) (signals of potential censorship) on 16th and 17th July 2024 – the timing of which correlates with the [protests](https://www.reuters.com/world/asia-pacific/bangladesh-deploys-police-job-protests-flare-up-2024-07-16/) in Dhaka. However, the availability of measurements from these networks from previous days is very limited, presenting an important limitation to this finding. 

It’s worth noting though that most measurements from both networks on 16th and 17th July 2024 resulted in failures ([timeout errors](https://explorer.ooni.org/m/20240717082919.245093_BD_webconnectivity_740ef4a92c6e58a5) and [connection reset errors](https://explorer.ooni.org/m/20240716174236.351512_BD_webconnectivity_319be948792b4860)) during the TLS handshake, suggesting the presence of TLS level interference. This is further suggested by the OONI data, which [shows](https://explorer.ooni.org/search?since=2024-07-17&until=2024-07-18&probe_cc=BD&test_name=web_connectivity&probe_asn=24389&domain=www.facebook.com&failure=true) that connections to the resolved IPs were successful, reducing the likelihood of the anomalies being false positives triggered by transient network failures. Moreover, Facebook interference on the AS24432 and AS24389 networks is further suggested by the OONI data [showing](https://explorer.ooni.org/chart/mat?probe_cc=BD&probe_asn=24389%2C24432&test_name=web_connectivity&since=2024-07-10&until=2024-08-05&axis_x=measurement_start_day&axis_y=domain&time_grain=day) that most other tested websites were accessible on these networks on 16th July 2024, while the testing of several [Facebook endpoints presented anomalies](https://explorer.ooni.org/chart/mat?probe_cc=BD&probe_asn=24389%2C24432&test_name=web_connectivity&domain=external.xx.fbcdn.net&since=2024-07-10&until=2024-08-05&axis_x=measurement_start_day&axis_y=domain&time_grain=day) (further suggesting Facebook blocking).

Quite similarly, [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=BD&probe_asn=24389%2C24432&since=2024-07-17&until=2024-07-18&time_grain=hour&axis_x=measurement_start_day&axis_y=probe_asn&test_name=whatsapp) suggests the potential temporary blocking of WhatsApp on 17th July 2024 between 7:00 to 9:00 am UTC. More specifically, OONI data from the [testing of WhatsApp](https://ooni.org/nettest/whatsapp/) in Bangladesh on 17th July 2024 shows that while most connections to WhatsApp endpoints succeeded, attempted connections to WhatsApp’s registration service and WhatsApp Web failed, resulting in [connection reset errors](https://explorer.ooni.org/m/20240717074637.449725_BD_whatsapp_e9b5a10845b26966). However, the limited volume of measurement coverage during this period limits our ability to confirm WhatsApp blocking with confidence.

Various media outlets [reported](https://archive.ph/eDhI0) the issue prominently, and the network monitoring group NetBlocks [reported](https://archive.ph/zNGrA) that access to Facebook had been restricted on several networks.   

{{<img src="images/image3.jpg" title="Netblocks report" alt="Netblocks report">}}

**Image 2:** Netblocks report on Facebook restrictions on networks in Bangladesh on 16th July 2024 (source: [X](https://archive.ph/zNGrA)).

**How It Happened**

The implementation of shutdown measures during this period was marked by opacity, limited disclosure, and overlapping authority. No official announcements were made to inform users about the disruptions. Available information was pieced together through retrospective media investigations, technical data, and interviews with network providers.

<table>
  <tr>
   <td>
     
{{<img src="images/image1.png" title="WhatsApp screenshot with instructions from BTRC" alt="WhatsApp screenshot with instructions from BTRC">}}

   </td>
   <td>

{{<img src="images/image22.png" title="WhatsApp screenshot with instructions from BTRC" alt="WhatsApp screenshot with instructions from BTRC">}}

   </td>
  </tr>
  
**Image 3**: Instructions sent via WhatsApp by BTRC on July 15 and 16. Source: The Daily Star

According to operator sources cited in [The Daily Star](https://archive.ph/5OV9G), the BTRC issued initial instructions via WhatsApp shortly after midnight on July 15, directing mobile operators to disable 3G and 4G services in the Shahbagh area. Within 30 minutes, the scope of this directive was expanded to cover multiple public universities, including Dhaka University (DU), Jahangirnagar University (JU), Chittagong University (CU), Rajshahi University (RU), and Shahjalal University of Science and Technology (SUST). By July 16, [the shutdown was extended](https://archive.ph/DQdPP) to include 59 campuses nationwide.

Although these instructions account for area-based throttling in and around public universities, they do not explain the widespread unavailability of high-speed mobile internet outside university zones or the simultaneous platform-level blocking observed from the evening of July 16 onward.

In a statement issued on July 20, [Telenor Asia](https://archive.ph/vqn9B) reported that its mobile operator, Grameenphone, had received directives from local authorities to shut down 3G and 4G networks starting on July 17, 2024, leaving customers with access only to 2G services limited to voice and SMS.

There were conflicting accounts regarding the source of the disruptions, particularly the platform blocks. While [BTRC officials denied](https://archive.ph/DrFHr) issuing a directive to block Facebook, media reports from [Prothom Alo](https://archive.ph/RVkf7) and [Daily Sun](https://archive.ph/zMh7A) suggested the government agencies possessed alternative technical capabilities to enforce such blocks directly, independent of traditional ISPs or IIGs. However, formal documentation eventually clarified some aspects of these actions. On the night of July 17, [NTMC issued explicit instructions](https://archive.ph/5OV9G) to block Facebook and YouTube, effective from 12:01 a.m. on July 18. A subsequent order from the same agency directed the nationwide suspension of 4G services. 

Operators interviewed for this report confirmed that NTMC had previously installed proprietary filtering systems within the Packet Switched (PS) core architecture of mobile networks. This advanced capability allowed NTMC to unilaterally implement service blocks and content filtering without requiring direct mediation or action from the mobile operators themselves, thereby enabling more immediate and untraceable control. However, available monitoring data does not clarify to what extent this capability was actually used during this phase.

### b) July 18–23: Nationwide Blackout, Heavy Casualties Amid Clashes

**Political Context**

On July 18, student protesters announced a nationwide “[complete shutdown](https://archive.ph/MJq7T)” in response to the deaths and injuries caused by security forces, including police, the Border Guard Bangladesh (BGB), and the Rapid Action Battalion (RAB), during earlier demonstrations. The program called for the suspension of all institutional activity except emergency and hospital services, and urged students across the country to participate.

Clashes escalated as the shutdown took effect. Confrontations between protesters, law enforcement agencies, and supporters of the ruling party were reported across multiple districts. On July 18 alone, at least 29 people were reported killed and over 3,000 injured, [according to media coverage](https://archive.ph/4Lpn2). The violence spread to at least 19 districts nationwide.

The highest number of deaths occurred on July 19, when at least 66 people were reported killed. In response to the escalating unrest, the government imposed a [nationwide curfew](https://archive.ph/jFoB6) and deployed the army on July 20. The same day, [the government announced a two-day “general holiday”](https://archive.ph/YJbAB) and detained key figures from the quota reform movement and members of the opposition Bangladesh Nationalist Party (BNP).

On July 21, the Supreme Court delivered its verdict in the quota case, abolishing most quotas for civil service jobs and allocating 93% of positions to general applicants. The curfew remained in place. On July 23, the government formalized the new quota system in line with the court's decision. Protest organizers stated that the move was too late and that too many lives had been lost. The media [reported](https://archive.ph/4Lpn2) a total of 143 deaths between July 18 and 23, either in the clashes or from injuries sustained during the protest. The curfew was partially relaxed on July 23.

**Nature of the Shutdown**

The nationwide internet blackout began in the early hours of July 18, coinciding with the onset of the [deadliest phase of protest-related violence](https://www.aljazeera.com/news/longform/2024/8/7/how-bangladeshs-gen-z-protests-brought-down-pm-sheikh-hasina). Mobile internet services were suspended at 1:29 a.m., followed by the [shutdown of broadband](https://www.dhakatribune.com/bangladesh/354596/btrc-ntmc-behind-internet-shutdown-palak-issued) access at approximately 8:30 p.m. the same day. The blackout remained in effect through July 23, encompassing the entire period during which [mass casualties](https://www.dhakatribune.com/bangladesh/373524/un-report-1-400-people-killed-in-july-uprising) were reported. The continuity of the blackout during this period significantly restricted the flow of real-time information, including documentation of events by affected communities and media outlets.

The 5-day, nationwide internet connectivity shutdown in Bangladesh between 18th to 23rd July 2024 is visible through several independent data sources: [Internet Outage Detection and Analysis (IODA)](https://ioda.inetintel.cc.gatech.edu/country/BD?from=1719866792&until=1725137192), [Cloudflare Radar](https://radar.cloudflare.com/traffic/bd?dateStart=2024-07-01&dateEnd=2024-07-31), and [Google traffic](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1719792000000;end:1725148799999;product:19;region:BD&lu=fraction_traffic) data.

The [Internet Outage Detection and Analysis (IODA)](https://ioda.inetintel.cc.gatech.edu/) project of Georgia Tech measures internet outages worldwide in near real-time. To track and identify internet outages, IODA uses [three complementary measurement and inference methods](https://ioda.inetintel.cc.gatech.edu/resources?tab=glossary): Routing (BGP) announcements, Active Probing, and Internet Background Radiation (IBR) traffic. More recently, IODA also integrated Google Product signals. Access to IODA measurements is openly available through their [Dashboard](https://ioda.inetintel.cc.gatech.edu/dashboard), which enables users to explore internet outages with country, region, and AS level of granularity.

The following [IODA chart](https://ioda.inetintel.cc.gatech.edu/country/BD?from=1719866792&until=1725137192) suggests the presence of a major internet outage in Bangladesh between 18th to 23th July 2024.

{{<img src="images/image16.png" title="IODA chart" alt="IODA chart">}}

**Chart 2:** Internet connectivity for Bangladesh between 1st July 2024 to 31st August 2024 (source: [IODA](https://ioda.inetintel.cc.gatech.edu/country/BD?from=1719866792&until=1725137192)). 

Within this time period, we observe a major drop in active probing, IBR, and Google product signals, as well as a drop in the BGP signal correlating in time with the drop in the other signals, strongly suggesting that Bangladesh experienced a widespread internet outage. This is further indicated by the fact that we see these signals return to their previous levels thereafter.

The timing of the nationwide internet connectivity shutdown in Bangladesh is also visible through [Google traffic data](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1719792000000;end:1725148799999;product:19;region:BD&lu=fraction_traffic), which shows a complete drop in Google search traffic originating from Bangladesh between 18th to 23rd July 2024 (as illustrated below).

{{<img src="images/image19.png" title="Google traffic data" alt="Google traffic data">}}

**Chart 3:** Google search traffic originating from Bangladesh between 1st July 2024 to 31st August 2024 (source: [Google Transparency Report](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1719792000000;end:1725148799999;product:19;region:BD&lu=fraction_traffic)). 

The complete absence of Google traffic data from Bangladesh between 18th to 23rd July 2024 strongly suggests that Bangladesh experienced a major, nationwide internet connectivity shutdown. 

A similar absence of data during the same time frame is observed in OONI data collected from Bangladesh as well (demonstrated below).

{{<img src="images/image26.png" title="OONI Probe testing" alt="OONI Probe testing">}}

**Chart 4:** OONI Probe testing in Bangladesh between 1st July 2024 to 31st August 2024 (source: [OONI data](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&axis_x=measurement_start_day&since=2024-07-01&until=2024-08-31&time_grain=day&probe_cc=BD)). 

While [OONI measurement coverage](https://explorer.ooni.org/countries) is generally quite unstable and varies over time and across countries (being dependent on volunteers who run [OONI Probe](https://ooni.org/install/) from local network vantage points and contribute measurements), it’s worth highlighting that Bangladesh received [relatively stable OONI measurement coverage](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&axis_x=measurement_start_day&since=2024-07-01&until=2024-08-31&time_grain=day&probe_cc=BD) before and after the timing of the internet connectivity shutdown (which is visible in both [IODA](https://ioda.inetintel.cc.gatech.edu/country/BD?from=1719866792&until=1725137192) and [Google traffic data](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1719792000000;end:1725148799999;product:19;region:BD&lu=fraction_traffic)). The complete absence of OONI measurements between 19th to 22nd July 2024 (as illustrated in the above [chart](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&axis_x=measurement_start_day&since=2024-07-01&until=2024-08-31&time_grain=day&probe_cc=BD), Chart 4) suggests that [OONI Probe](https://ooni.org/install/) users in Bangladesh could not contribute measurements due to the lack of internet connectivity.

Moreover, the major internet connectivity shutdown in Bangladesh is also visible in [Cloudflare Radar data](https://radar.cloudflare.com/traffic/bd?dateStart=2024-07-01&dateEnd=2024-07-31) (shared below), which shows a complete drop in traffic during the same period. 

{{<img src="images/image12.png" title="Cloudflare Radar data" alt="Cloudflare Radar data">}}

**Chart 5:** Traffic volume in Bangladesh between 1st July 2024 to 31st July 2024 (source: [Cloudflare Radar](https://radar.cloudflare.com/traffic/bd?dateStart=2024-07-01&dateEnd=2024-07-31)).

**How It Happened**

The internet blackout was implemented in two stages: the shutdown of mobile internet and the suspension of broadband connectivity. According to operator accounts and [public reports](https://archive.ph/st0Vz), the mobile network suspension was carried out through directives from the BTRC and NTMC. The broadband shutdown was executed upstream, through instructions issued to International Terrestrial Cable (ITC) operators, the Submarine Cable Company, and IIG providers – effectively cutting off bandwidth to ISPs nationwide.

While government officials publicly acknowledged the mobile shutdown, conflicting statements were made regarding the cause of the broadband disruption. Then-state minister for Posts and Telecommunications Zunaid Ahmed Palak [stated](https://archive.ph/5OV9G) that mobile internet had been suspended to support law enforcement operations, with technical coordination from BTRC and NTMC. However, BTRC officials denied involvement. 

Grameenphone, the country’s largest mobile operator, [told the Daily Star](https://archive.ph/TjybE) that mobile internet had been shut down by government order, citing the State Minister, who had attributed the disruption to a fire allegedly caused by an arson attack. He claimed the incident damaged a nearby data center and disrupted connectivity. The following day, BTRC issued a mobile alert repeating the claim. However, this explanation was challenged by the [Internet Service Providers Association of Bangladesh](https://archive.ph/TjybE) (ISPAB), which clarified that the fire had occurred in an adjacent building and affected only a small number of overhead cables, impacting no more than 20 percent of the national network. ISPAB stated that no data center was directly affected.

{{<img src="images/image9.jpg" title="BTRC message" alt="BTRC message">}}

**Image 4:** BTRC sent a mobile message stating that internet services had been disrupted due to a fire at the Mohakhali Data Center. Source: The Daily Star

Media [reports](https://archive.ph/5OV9G) later revealed that the broadband shutdown was carried out through direct government intervention. At 7:37 p.m. on July 18, BTRC’s Engineering and Operations Division initiated a WhatsApp group call with ITC and submarine cable officials, instructing them to suspend bandwidth supply. Around 8:45 p.m., IIG providers received similar instructions and shortly thereafter ceased delivering connectivity to downstream ISPs.

Interviews conducted for this report with officials from three IIGs, one ITC operator, and one Submarine Cable Company confirmed that they received direct instructions from BTRC to cut services. An official from the Submarine Cable Company further reported receiving a personal call from the State Minister, who instructed the shutdown of both Cox’s Bazar and Kuakata landing stations. This action, according to the source, resulted in the near-complete disconnection of broadband internet across the country.

### c) July 24–31: Eased Curfew, Layered Internet Controls Continue

**Political Context**

Tensions and clashes began to [subside temporarily](https://archive.ph/bKXQG) from July 22. As a result, on July 24, the curfew was partially relaxed, and both government and private offices were allowed to open for four hours. However, educational institutions that had been shut down due to the protests remained closed. 

On July 26, three coordinators of the anti-discrimination student movement – Nahid Islam, Asif Mahmud, and Abu Baker Majumder – who were receiving treatment in the hospital, were [taken into custody by the Detective Branch](https://archive.ph/Lgh4K) (DB) of Dhaka Metropolitan Police. That night, the DB stated that the individuals had been taken into protective custody for security reasons. Over the following two days, three more coordinators were similarly detained. On July 28, while in the custody of the DB, six organizers of the student movement were seen in a video reading out a statement [declaring an end to the protests](https://archive.ph/sDyze). However, other student leaders quickly vowed to continue the movement, and demonstrations resumed the following day.

After rejecting the video message announcing the movement's withdrawal, the other coordinators who remained free, called for renewed protests starting July 29. Demonstrations consequently resumed, leading to [police detentions in Dhaka](https://archive.ph/zN5kv) and protests against alleged forced statements, spreading to cities like [Rajshahi](https://archive.ph/oUuSu) and [Barishal](https://archive.ph/qZOTS). Amidst these events, the [DB chief dismissed allegations](https://archive.ph/4utwB) of forced statements as mere rumors.

On the same day, the then Home Minister Asaduzzaman Khan stated that, [according to official records](https://archive.ph/SyIJz), 150 people had died in the violence related to the quota reform movement up to that point. However, a [Prothom Alo report](https://archive.ph/nOZ1j) indicated that by July 27, the death toll linked to the protests had reached 210.

A symbolic political divide emerged on July 30 as the [government declared a national day of mourning](https://archive.ph/eKGmA) for protest-related deaths. Student coordinators swiftly rejected this, urging supporters to adopt red-color social media profile pictures, sparking a widespread online campaign. On July 31 the  “[March for Justice](https://archive.ph/nFO7Y)” program took place nationwide, facing police dispersal with batons, sound grenades, and tear gas, and leading to arrests. Adding another dimension, the [then-Law Minister announced](https://archive.ph/71TXz) the executive ban on Bangladesh Jamaat-e-Islami and its student wing, Islami Chhatrashibir, effective on the same day.

**Nature of the Shutdown**

During this period, internet restrictions were implemented through throttling of broadband speeds, continued shutdown of mobile internet, and blocking of selected social media and messaging platforms.

After the full internet blackout between 18th to 23rd July 2024, the government restored broadband in [limited areas](https://archive.md/XkFNe) at approximately 9:00 p.m. on July 23. On July 24, [broadband service resumed more broadly](https://www.dhakatribune.com/bangladesh/352620/palak-broadband-internet-services-could-be-fully), but speeds remained slow, access to social media platforms was restricted, and mobile internet remained fully suspended.

IODA data confirms that connectivity began returning after 10:00 p.m. on July 23, with partial functionality by the afternoon of July 24. However, services did not stabilize until July 28. Provider-specific data showed that Banglalink remained offline throughout the period, while Robi Axiata’s traffic showed irregular patterns.

Specifically, IODA data below shows that [Banglalink’s internet services remained suspended](https://ioda.inetintel.cc.gatech.edu/asn/45245?from=1721757679&until=1722189679) between 24th to 28th July 2024, while [IODA data from Robi Axiata](https://ioda.inetintel.cc.gatech.edu/asn/24432?from=1721757679&until=1722189679) showed signs of internet connectivity disruption during this period.

{{<img src="images/image14.png" title="IODA data from Robi Axiata" alt="IODA data from Robi Axiata">}}

**Chart 6:** Internet connectivity for Banglalink (AS45245) between 23rd July 2024 to 28th July 2024 (source: [IODA](https://ioda.inetintel.cc.gatech.edu/asn/45245?from=1721757679&until=1722189679)).

{{<img src="images/image8.png" title="IODA data from Robi Axiata" alt="IODA data from Robi Axiata">}}

**Chart 7:** Internet connectivity for Robi Axiata (AS24432) between 23rd July 2024 to 28th July 2024 (source: [IODA](https://ioda.inetintel.cc.gatech.edu/asn/24432?from=1721757679&until=1722189679)).

The above charts, Chart 6 and Chart 7, show significant drops in BGP signals, signalling major internet connectivity disruptions on these networks. Quite similarly, Cloudflare Radar [shows](https://radar.cloudflare.com/traffic/as45245?dateStart=2024-07-01&dateEnd=2024-08-31) disruptions on these two networks during the same period as well, as illustrated through the charts 8 and 9 below.

{{<img src="images/image18.png" title="Cloudflare Radar data from Banglalink" alt="Cloudflare Radar data from Banglalink">}}

**Chart 8:** Traffic volume from Banglalink (AS45245) in Bangladesh between 1st July 2024 to 31st August 2024 (source: [Cloudflare Radar](https://radar.cloudflare.com/traffic/as45245?dateStart=2024-07-01&dateEnd=2024-08-31)).

{{<img src="images/image24.png" title="Cloudflare Radar data from Robi Axiata" alt="Cloudflare Radar data from Robi Axiata">}}

**Chart 9:** Traffic volume from Robi Axiata (AS24432) in Bangladesh between 1st July 2024 to 31st August 2024 (source: [Cloudflare Radar](https://radar.cloudflare.com/traffic/as24432?dateStart=2024-07-01&dateEnd=2024-08-31)).

According to [media reports](https://archive.ph/B4UrU), mobile internet services were restored after 3:00 p.m. on July 28. This was also confirmed by the [NTMC](https://ntmc.gov.bd/), which [stated](https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/images/2024/08/13/5.jpg) that it would be reopening mobile internet services starting from 15:00 on 28th July 2024. However, platform-level restrictions continued. The [NTMC instructed ISPs in Bangladesh to continue blocking access to a specific list of services](https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/images/2024/08/13/5.jpg) (beyond 15:00 on July 28th, when mobile internet services would be restored): Facebook, Messenger, WhatsApp, Telegram, Viber, Imo, YouTube, BiP, Signal, Skype, and Botim. This directive not only corroborates [relevant blocks observed in OONI data](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&domain=www.facebook.com%2Cwww.youtube.com%2Cwww.viber.com%2Cwww.skype.com%2Cimo.im%2Cwww.whatsapp.com%2Ctelegram.org%2Csignal.org%2Cwww.messenger.com&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=domain&time_grain=day) after July 28th, but also in previous days (between 24th to 28th July, after the nationwide internet blackout). 

The following [chart](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&domain=www.facebook.com%2Cwww.youtube.com%2Cwww.viber.com%2Cwww.skype.com%2Cimo.im%2Cwww.whatsapp.com%2Ctelegram.org%2Csignal.org%2Cwww.messenger.com&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=domain&time_grain=day) aggregates OONI measurement coverage from the testing of the [services listed in the NTMC directive](https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/images/2024/08/13/5.jpg), excluding Botim and BiP which did not receive OONI measurement coverage in Bangladesh. Specifically, the measurements in the following chart pertain to the OONI Probe [testing](https://ooni.org/nettest/web-connectivity/) of Imo, Signal, Telegram, Facebook, Messenger, Skype, Viber, WhatsApp and YouTube domains on multiple networks in Bangladesh between 1st July 2024 to 31st August 2024. 

{{<img src="images/image10.png" title="OONI Probe testing" alt="OONI Probe testing">}}

**Chart 10:** OONI Probe testing of Imo, Signal, Telegram, Facebook, Messenger, Skype, Viber, WhatsApp and YouTube domains on multiple networks in Bangladesh between 1st July 2024 to 31st August 2024 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&domain=www.facebook.com%2Cwww.youtube.com%2Cwww.viber.com%2Cwww.skype.com%2Cimo.im%2Cwww.whatsapp.com%2Ctelegram.org%2Csignal.org%2Cwww.messenger.com&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=domain&time_grain=day)).

Once internet connectivity was restored on 24th July 2024, access to most of the social media services [listed](https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/images/2024/08/13/5.jpg) in the NTMC directive and illustrated in [chart](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&domain=www.facebook.com%2Cwww.youtube.com%2Cwww.viber.com%2Cwww.skype.com%2Cimo.im%2Cwww.whatsapp.com%2Ctelegram.org%2Csignal.org%2Cwww.messenger.com&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=domain&time_grain=day) 10 started to present a spike in [anomalies](https://ooni.org/support/interpreting-ooni-data/#anomalies), providing a signal of blocking. These anomalies persisted until 31st July 2024, which is consistent with the timing communicated in the [NTMC directive](https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/images/2024/08/13/5.jpg), suggesting that access to them was blocked between 24th to 31st July 2024. The domains of Facebook, Messenger, and WhatsApp [presented the largest and most consistent volume of anomalies](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&domain=www.facebook.com%2Cwww.youtube.com%2Cwww.viber.com%2Cwww.skype.com%2Cimo.im%2Cwww.whatsapp.com%2Ctelegram.org%2Csignal.org%2Cwww.messenger.com&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=domain&time_grain=day) during this period, thereby providing the strongest signals of blocking. The testing of YouTube, Telegram, and Signal domains presented fewer anomalies, suggesting that they were still accessible on some networks in Bangladesh during this period. And the domains of Imo, Skype, and Viber barely presented anomalies, suggesting that they were mostly accessible on tested networks. Even though OONI measurement coverage from Bangladesh is limited and unequal across networks, [chart](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&domain=www.facebook.com%2Cwww.youtube.com%2Cwww.viber.com%2Cwww.skype.com%2Cimo.im%2Cwww.whatsapp.com%2Ctelegram.org%2Csignal.org%2Cwww.messenger.com&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=domain&time_grain=day) 10 suggests that the blocks [directed](https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/images/2024/08/13/5.jpg) by the NTMC were not implemented uniformly and consistently across networks in Bangladesh between 24th to 31st July 2024. 

The blocking of WhatsApp, Facebook Messenger, Telegram, and Signal is further corroborated by [OONI data](https://explorer.ooni.org/chart/mat?test_name=facebook_messenger%2Ctelegram%2Cwhatsapp%2Csignal&axis_x=measurement_start_day&since=2024-07-01&until=2024-08-31&time_grain=day&probe_cc=BD&axis_y=test_name) collected from the measurement of these instant messaging apps from separate, dedicated experiments. In addition to the [Web Connectivity experiment](https://ooni.org/nettest/web-connectivity/) (designed to measure the blocking of websites), the [OONI Probe app](https://ooni.org/install/) also includes dedicated [WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/), and [Signal](https://ooni.org/nettest/signal/) experiments designed to measure the reachability of endpoints used by each of these apps. 

The following [chart](https://explorer.ooni.org/chart/mat?test_name=facebook_messenger%2Ctelegram%2Cwhatsapp%2Csignal&axis_x=measurement_start_day&since=2024-07-01&until=2024-08-31&time_grain=day&probe_cc=BD&axis_y=test_name) aggregates OONI measurement coverage from the testing of the Facebook Messenger, Signal, Telegram, and WhatsApp apps on multiple networks in Bangladesh between 1st July 2024 to 31st August 2024.

{{<img src="images/image2.png" title="OONI Probe testing" alt="OONI Probe testing">}}

**Chart 11:** OONI Probe testing of the Facebook Messenger, Signal, Telegram, and WhatsApp apps on multiple networks in Bangladesh between 1st July 2024 to 31st August 2024 (source: [OONI data](https://explorer.ooni.org/chart/mat?test_name=facebook_messenger%2Ctelegram%2Cwhatsapp%2Csignal&axis_x=measurement_start_day&since=2024-07-01&until=2024-08-31&time_grain=day&probe_cc=BD&axis_y=test_name)).

As illustrated in chart 11, the OONI Probe testing of these apps demonstrates that these apps were mostly reachable on tested networks in Bangladesh prior to the nationwide internet blackout (between 18th to 23rd July 2024). This [changed on 24th July 2024](https://explorer.ooni.org/chart/mat?test_name=facebook_messenger%2Ctelegram%2Cwhatsapp%2Csignal&axis_x=measurement_start_day&since=2024-07-01&until=2024-08-31&time_grain=day&probe_cc=BD&axis_y=test_name) when internet connectivity was restored, but all four apps started presenting a spike in anomalies, which persisted until 31st July 2024. The large and persistent volume of anomalies – especially when compared with previously successful measurements – provides a signal that access to these apps was blocked on tested networks in Bangladesh. This correlates with the [timing when the testing of their domains presented anomalies (](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&domain=www.facebook.com%2Cwww.youtube.com%2Cwww.viber.com%2Cwww.skype.com%2Cimo.im%2Cwww.whatsapp.com%2Ctelegram.org%2Csignal.org%2Cwww.messenger.com&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=domain&time_grain=day)as discussed previously), suggesting that these blocks were lifted on 31st July 2024. However, in both of the above charts 10 and 11, there is a noticeable, subsequent spike in anomalies on 4th August 2024 – right before Bangladesh experienced another internet disruption, as documented by [IODA](https://ioda.inetintel.cc.gatech.edu/country/BD?from=1719866792&until=1725137192) and [Cloudflare Radar](https://radar.cloudflare.com/traffic/bd?dateStart=2024-07-01&dateEnd=2024-08-31) (further discussed in the next section) – suggesting that access to these apps was temporarily blocked again four days later. 

When disaggregating OONI measurement coverage pertaining to these instant messaging apps by ASN, we observe that their testing [presented anomalies on most tested networks](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=whatsapp&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=probe_asn&time_grain=day) in Bangladesh between 24th to 31st July 2024. As each of these apps was tested on more than 170 networks in Bangladesh during this period, the consistent presence of anomalies during the same dates across networks provides a further signal of blocking. The following charts share the top three networks where the [OONI Probe](https://ooni.org/install/) testing of the [WhatsApp](https://explorer.ooni.org/chart/mat?test_name=whatsapp&axis_x=measurement_start_day&since=2024-07-01&until=2024-08-31&time_grain=day&probe_cc=BD&axis_y=probe_asn), [Facebook Messenger](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=facebook_messenger&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=probe_asn&time_grain=day), [Telegram](https://explorer.ooni.org/chart/mat?test_name=telegram&axis_x=measurement_start_day&since=2024-07-01&until=2024-08-31&time_grain=day&probe_cc=BD&axis_y=probe_asn), and [Signal](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=signal&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=probe_asn&time_grain=day) apps presented the largest volume of anomalies – and, therefore, the strongest signals of blocking – during this time period. 

{{<img src="images/image23.png" title="OONI Probe testing" alt="OONI Probe testing">}}

**Chart 12:** Networks where the OONI Probe testing of the WhatsApp app presented the largest volume of anomalies in Bangladesh between 1st July 2024 to 31st August 2024 (source: [OONI data](https://explorer.ooni.org/chart/mat?test_name=whatsapp&axis_x=measurement_start_day&since=2024-07-01&until=2024-08-31&time_grain=day&probe_cc=BD&axis_y=probe_asn)).

{{<img src="images/image20.png" title="OONI Probe testing" alt="OONI Probe testing">}}

**Chart 13:** Networks where the OONI Probe testing of the Facebook Messenger app presented the largest volume of anomalies in Bangladesh between 1st July 2024 to 31st August 2024 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=facebook_messenger&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=probe_asn&time_grain=day)).

{{<img src="images/image13.png" title="OONI Probe testing" alt="OONI Probe testing">}}

**Chart 14:** Networks where the OONI Probe testing of the Telegram app presented the largest volume of anomalies in Bangladesh between 1st July 2024 to 31st August 2024 (source: [OONI data](https://explorer.ooni.org/chart/mat?test_name=telegram&axis_x=measurement_start_day&since=2024-07-01&until=2024-08-31&time_grain=day&probe_cc=BD&axis_y=probe_asn)).

{{<img src="images/image5.png" title="OONI Probe testing" alt="OONI Probe testing">}}

**Chart 15:** Networks where the OONI Probe testing of the Signal app presented the largest volume of anomalies in Bangladesh between 1st July 2024 to 31st August 2024 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=signal&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=probe_asn&time_grain=day)).

Beyond the [services listed in the NTMC directive](https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/images/2024/08/13/5.jpg), OONI data suggests that additional social media websites were blocked between 24th to 31st July 2024 as well. Specifically, OONI data [shows](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&domain=twitter.com%2Cx.com%2Cwww.instagram.com%2Cwww.tiktok.com&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=domain&time_grain=day) that the testing of Instagram, Twitter/X, and TikTok presented a spike in anomalies during this period, as illustrated below.

{{<img src="images/image25.png" title="OONI Probe testing" alt="OONI Probe testing">}}

**Chart 16:** OONI Probe testing of Twitter/X, Instagram, and TikTok domains on multiple networks in Bangladesh between 1st July 2024 to 31st August 2024 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&domain=twitter.com%2Cx.com%2Cwww.instagram.com%2Cwww.tiktok.com&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=domain&time_grain=day)).

Notably, almost all OONI measurements from the testing of Instagram presented anomalies between 24th to 31st July 2024 (when the block was lifted). The [blocking of Instagram](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&domain=www.instagram.com&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&time_grain=day) is further suggested by the fact that the [testing of numerous Instagram endpoints](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=domain&time_grain=day) – required for Instagram app functionality – presented a spike in anomalies during the same days as well, as demonstrated below.

{{<img src="images/image11.png" title="OONI Probe testing" alt="OONI Probe testing">}}

**Chart 17:** OONI Probe testing of Instagram endpoints on multiple networks in Bangladesh between 1st July 2024 to 31st August 2024 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=domain&time_grain=day)).

While the [testing of TikTok](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&domain=www.tiktok.com&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&time_grain=day) presented fewer anomalies in comparison, it’s worth noting that it was among the social media platforms [reported as being blocked](https://www.thedailystar.net/business/news/what-you-need-know-about-internet-crackdown-bangladesh-3676346) during this period by the media. Meanwhile, the presence of anomalies in the testing of both twitter.com and x.com during this period provide a signal that access to the [social media platform X (formerly known as Twitter) was blocked](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&domain=twitter.com%2Cx.com&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=domain&time_grain=day) in Bangladesh.

It seems unlikely that the aforementioned social media websites and instant messaging apps presented anomalies due to network disruptions because OONI data shows that most [other tested services were accessible](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=domain&time_grain=day) in Bangladesh during those days (between 24th to 31st July 2024). Moreover, by looking at the anomalous OONI measurements, we observe that many result in [timeout errors](https://explorer.ooni.org/m/20240728154829.417947_BD_webconnectivity_1d7f5d5f8c3ea3e1) during the TLS handshake, suggesting the presence of **TLS level interference**. The likelihood of these failures being the result of transient network failures is excluded because OONI data shows that TCP connections to the resolved IPs are successful, and that the [session times out only after the ClientHello message](https://explorer.ooni.org/m/20240730231624.142954_BD_webconnectivity_3f2f6ec0a71e29a8) during the TLS handshake. This is consistent with how OONI [documented other blocks](https://explorer.ooni.org/findings/11686385001) in Bangladesh in 2024.

It’s worth noting, though, that the blocks also appear to be implemented by means of **IP blocking**. Most OONI measurements from the testing of the [Facebook](https://explorer.ooni.org/search?since=2024-07-24&until=2024-07-31&probe_cc=BD&test_name=web_connectivity&domain=www.facebook.com&failure=true), [Instagram](https://explorer.ooni.org/search?since=2024-07-24&until=2024-07-31&probe_cc=BD&test_name=web_connectivity&domain=www.instagram.com&failure=true), [WhatsApp](https://explorer.ooni.org/search?since=2024-07-24&until=2024-07-31&probe_cc=BD&test_name=web_connectivity&domain=www.whatsapp.com&failure=true), and [Messenger domains show](https://explorer.ooni.org/search?since=2024-07-24&until=2024-07-31&probe_cc=BD&test_name=web_connectivity&domain=www.messenger.com&failure=true) that the TCP connections to the resolved IPs consistently failed, indicating the presence of IP-level blocks. This is consistent with the [blocking of numerous Facebook and Instagram endpoints](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&axis_x=measurement_start_day&since=2024-07-01&until=2024-08-31&time_grain=day&probe_cc=BD&axis_y=domain), as well as with the blocking of [WhatsApp](https://explorer.ooni.org/search?since=2024-07-24&until=2024-07-31&probe_cc=BD&test_name=whatsapp&failure=true) and [Facebook Messenger app endpoints](https://explorer.ooni.org/search?since=2024-07-24&until=2024-07-31&probe_cc=BD&test_name=facebook_messenger&failure=true).

This period also saw a coordinated crackdown on virtual private network (VPN) services. Beginning on July 31, after social media blocks were restored, users reported being unable to connect to commonly used VPN servers, including 1.1.1.1 and NordVPN. The Digitally Right team also encountered difficulties accessing TunnelBear and ProtonVPN during this period.

The following [chart](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&domain=www.tunnelbear.com%2Cnordvpn.com%2C1.1.1.1%2Cprotonvpn.com&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=domain&time_grain=day) aggregates OONI measurement coverage from the testing of NordVPN, 1.1.1.1, TunnelBear, and ProtonVPN domains on multiple networks in Bangladesh between 1st July 2024 to 31st August 2024. 

{{<img src="images/image21.png" title="OONI Probe testing" alt="OONI Probe testing">}}

**Chart 18:** OONI Probe testing of NordVPN, 1.1.1.1, TunnelBear, and ProtonVPN domains on multiple networks in Bangladesh between 1st July 2024 to 31st August 2024 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=BD&test_name=web_connectivity&domain=www.tunnelbear.com%2Cnordvpn.com%2C1.1.1.1%2Cprotonvpn.com&since=2024-07-01&until=2024-08-31&axis_x=measurement_start_day&axis_y=domain&time_grain=day)).

As is evident from chart 18, the OONI Probe testing of 1.1.1.1, NordVPN, TunnelBear, and ProtonVPN domains mainly presented anomalies (signs of blocking) between 24th July 2024 (when internet connectivity was restored) to 29th July 2024. While the volume of these measurements is very limited (limiting our confidence in the findings), it’s worth noting that the [anomalies](https://explorer.ooni.org/search?since=2024-07-24&until=2024-07-29&probe_cc=BD&test_name=web_connectivity&domain=nordvpn.com&failure=true&only=anomalies) presented signs of [TLS interference](https://explorer.ooni.org/m/20240724235027.689301_BD_webconnectivity_6809d09f1410b7b5) and [IP blocking](https://explorer.ooni.org/m/20240727022246.281399_BD_webconnectivity_1637d085d44708de) (depending on the network), similarly to what was observed for the blocking of social media websites during this period. The presence of a few anomalies in the days thereafter suggests that there may have been some repeated or ongoing interference, but the limited measurement volume limits our ability to corroborate this. 

Overall, the fact that most measurements from 30th July 2024 onwards were successful provides an indication that access to these circumvention tools may have been interfered with between 24th to 29th July 2024, alongside the social media blocks (which took place between 24th to 31st July 2024, as discussed previously). Globally, OONI data over the past few years has shown that [social media blocks are often accompanied by VPN blocks](https://ooni.org/reports/circumvention/)—likely as part of efforts to prevent circumvention of social media censorship. This, for example, has been documented in countries that include [Myanmar](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/), [Uganda](https://ooni.org/post/2021-uganda-general-election-blocks-and-outage/), [Russia](https://ooni.org/post/2023-russia-a-year-after-the-conflict/), and [Iran](https://ooni.org/post/2022-iran-technical-multistakeholder-report/), among many others.   

In early August 2024, in response to our query, a representative from ProtonVPN confirmed via email that “_there is currently a crackdown on VPN services in Bangladesh, in which Proton VPN is also being blocked_,” and their team was working to provide anti-censorship support. 

**How It Happened**

Despite the resumption of mobile internet on July 28 and broadband services on July 23, media reports cited widespread user complaints about slow internet. Interviews conducted for this study and [media reports](https://archive.ph/9j6Eh) indicated that internet speeds were intentionally limited. BTRC instructed IIGs to block access to selected social media platforms and ordered ISPs to disable cache servers, which normally support faster content delivery. On July 25, BTRC authorized cache access only for [Google and YouTube](https://archive.ph/XfnnW).

According to [ISPAB](https://archive.ph/Yr2oQ), the combination of mobile internet shutdown and cache server disconnection reduced broadband speeds to about 20% of normal levels and increased pressure on broadband infrastructure significantly as mobile users shifted to fixed-line services. ISPAB reported that full capacity was only restored after the mobile network came back online.

{{<img src="images/image6.jpg" title="NTMC instructions" alt="NTMC instructions">}}

**Image 5:** Although mobile internet was restored, the NTMC instructed that 11 apps remain blocked. Source: The Daily Star

Though mobile internet services were restored, selective app blocking remained in place during the period, and [NTMC reportedly instructed service providers to continue blocking 11 platforms](https://archive.ph/5OV9G). In addition, BTRC verbally directed IIGs and mobile operators to resume cache services for all platforms except Facebook, TikTok, Akamai, and Baishan. At that point, State Minister Palak told the media that letters had been sent to Facebook, TikTok, and other platforms, citing non-compliance with national laws. These companies were asked to respond by July 31 and attend a meeting at the BTRC.

### d) August 1-3: Slow Internet, and the Shift to One-Point Demand 

**Political Context:**

In this period, student organizers launched several major protest programs. A “[Remembering Our Heroes](https://archive.ph/qNN93)” program on August 1 saw [demonstrations met with security force obstructions](https://archive.ph/6nMOa). Notably, the [six previously detained student coordinators were released from DB custody](https://archive.ph/s44Ou) that day, coinciding with the official gazetting of the Jamaat-e-Islami ban.

On August 2, organizers announced a “[Prayers and Mass Procession](https://archive.ph/m0P24)” campaign against mass killings and arrests. This led to renewed [protests across the capital and other districts despite rain](https://archive.ph/1QSKQ), culminating in clashes, vandalism, and arson in at least five districts. [Two additional deaths were reported](https://archive.ph/ixsVW) that day, raising the movement’s total reported death toll to 215. Crucially, the[ six previously detained coordinators publicly stated that](https://archive.ph/mGlvC) their July 28 video message, announcing the movement's withdrawal, was not made voluntarily.

Later that evening, on August 2, [a coordinator announced](https://archive.ph/bW0kk) a nationwide protest procession for August 3 and a full-scale non-cooperation movement starting August 4. As planned, thousands participated in a demonstration march on August 3, culminating in a mass rally at the Central Shaheed Minar. There, a key coordinator, Nahid Islam, announced the movement's definitive [one-point demand](https://archive.ph/e4Zmp): the resignation of the government.

**Nature of the Shutdown:** 

Between July 29 and August 3, broadband services remained operational across the country, but mobile internet was unstable and subject to repeated throttling and temporary shutdowns. Social media platforms – including Facebook, Messenger, and Telegram – were [reportedly](https://www.dhakatribune.com/bangladesh/353476/mobile-access-to-facebook-restored-after-nearly) intermittently blocked, primarily on mobile networks.

After mobile internet was restored on July 28, users began reporting [reduced mobile data speeds](https://archive.ph/fuqLi) in Dhaka from the very next day. 4G signals appeared to be available, but in measurement tests conducted by Prothom Alo, speeds ranged from 30 Kbps to 3 Mbps, far lower than typical 4G levels. 

Access to social media platforms was restored on July 31. However, on August 2, access to Telegram was [reportedly blocked](https://www.dhakatribune.com/bangladesh/353476/mobile-access-to-facebook-restored-after-nearly) on mobile networks starting around 12:15 p.m., followed shortly by Facebook and Messenger. While access to [Facebook and Messenger](https://archive.ph/sfy1M) was restored after roughly six hours, Telegram [reportedly](https://archive.ph/rcT05) remained inaccessible. On August 3, no evidence of internet disruption was reported across the country.

**How It Happened**

Following the restoration of mobile internet on July 28, users began experiencing slowdowns, particularly in Dhaka. No formal announcement or technical clarification was issued by the authorities at the time. However, media reports indicated that the reduced speeds were likely due to directives from government regulators, who [possess the “technical capacity to limit internet speeds.](https://archive.ph/fuqLi)” [Filtering measures](https://archive.ph/keLtG) targeting social media platforms were also reported to have contributed to degraded network performance.

On August 2, Telegram, Facebook, and Messenger were again blocked on mobile networks. Then–State Minister Palak denied issuing the directive, [stating that](https://archive.ph/LsF6f) neither his ministry nor the BTRC had done so. However, The Daily Star [reported](https://archive.ph/5OV9G) that the NTMC instructed operators to block Telegram at 2:34 p.m., followed shortly by Facebook and Messenger. 

The most ambiguous part of this period was how VPN blocking was imposed. Service providers and mobile operators interviewed for this report stated that they had not received any directive and did not enforce VPN blocking themselves. Officials at the BTRC also denied issuing such an order. However, representatives from IIGs suggested that the Department of Telecommunications (DoT) possesses IP-specific blocking capabilities and may have implemented the blocks. DoT could not be reached for clarification.


### e) August 4–5: Complete Blackout Again and The Fall of the Government

**Political Context**

The political climate intensified sharply following the declaration of the one-point demand and the non-cooperation movement, spearheaded by the anti-discrimination student movement. August 4 marked the first day of this movement, which saw widespread clashes and confrontations between ruling party activists, law enforcement, and protesters. According to media reports, it resulted in [at least 114 fatalities](https://archive.ph/FDUT4) nationwide – the highest single-day death toll since the movement began.

In response, the anti-discrimination student movement coordinators adjusted their "March to Dhaka" program, moving it from the initially planned [August 6 to August 5](https://archive.ph/VAy8P). They urged students and the public to participate in this march. As the movement gained momentum, the [government declared](https://archive.ph/LTSYe) a three-day public holiday commencing Monday, August 5.

On August 5, Dhaka witnessed hundreds of thousands of people taking to the streets in protest. Amid the heightened tension surrounding the planned march toward the Prime Minister’s residence, [Sheikh Hasina resigned from her position](https://archive.ph/qrcBE) and departed the country by military helicopter at approximately 2:30 p.m. Immediately following her departure, large crowds entered the Prime Minister’s residence.

At 4:00 p.m., Army Chief General Waqar-uz-Zaman [addressed](https://archive.ph/k1SOm) the nation, having previously engaged in discussions with leaders from various political parties. His televised speech announced the formation of an interim government to manage the country's affairs. Even on this day, the day of the government's fall, [at least 109 additional lives were lost](https://archive.ph/FDUT4) in clashes across Dhaka and other regions.

**Nature of the Shutdown**

During August 4 and 5, authorities implemented internet control through a complete suspension of mobile internet, the blocking of social media platforms on broadband services, and a full internet blackout.

On August 4, as protests and violence escalated across the nation, [4G mobile internet services were suspended](https://archive.ph/FAr9p) starting at 12:00 p.m. Approximately an hour after this mobile internet shutdown, a [separate measure](https://archive.ph/btGro) was implemented to block social media platforms on broadband services, even as general broadband connectivity remained active. Around 1:00 p.m., IIG operators had their Meta cache servers disabled, rendering platforms such as Facebook, Messenger, WhatsApp, and Instagram inaccessible via broadband. Thus, on August 4, both a mobile internet shutdown and a social media block on broadband significantly disrupted internet access nationwide.

The following day, August 5, at approximately 10:30 a.m., [broadband internet services were entirely shut down](https://www.dhakatribune.com/bangladesh/353724/broadband-internet-service-restored-after-3-hours), plunging Bangladesh into a complete internet blackout once again. [IODA data](https://ioda.inetintel.cc.gatech.edu/country/BD?from=1722804392&until=1722977192) also corroborates that Bangladesh experienced a **nationwide internet blackout for approximately three and a half hours on August 5**, starting at 10:30 a.m.

{{<img src="images/image4.png" title="IODA data" alt="IODA data">}}

**Chart 19:** Internet connectivity for Bangladesh between 4th August 2024 to 6th August 2024 (source: [IODA](https://ioda.inetintel.cc.gatech.edu/country/BD?from=1722804392&until=1722977192)). 

Following the resignation and departure of then-Prime Minister Sheikh Hasina, [broadband internet](https://www.dhakatribune.com/bangladesh/353724/broadband-internet-service-restored-after-3-hours) services were restored at 1:30 p.m., and mobile internet services resumed around 2:00 p.m. According to media [reports](https://www.dhakatribune.com/bangladesh/353739/facebook-other-social-media-platforms-back-online), access to social media platforms was restored after 4:00 p.m. on the same day, allowing users in Bangladesh to once again access Facebook, TikTok, WhatsApp, Instagram, and YouTube. Their accessibility thereafter is also corroborated by [OONI data](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&axis_x=measurement_start_day&since=2024-07-01&until=2024-08-31&time_grain=day&probe_cc=BD&domain=twitter.com%2Cwww.facebook.com%2Cwww.instagram.com%2Cwww.tiktok.com%2Cwww.youtube.com%2Cwww.viber.com%2Cwww.skype.com%2Cimo.im%2Cx.com&axis_y=domain). 

**How It Happened**

The directives for internet disruptions during these two days originated from the government. On August 4, at approximately 2:30 p.m., a minister [told reporters](https://archive.ph/FIRLv) that the shutdown of mobile internet and the blocking of social media on broadband had not been ordered by the government, attributing the disruptions in certain areas to alleged attacks by miscreants on internet infrastructure. However, on the same day, another State Minister for Information and Broadcasting publicly [stated that](https://archive.ph/VFv0g) social media platforms had been temporarily shut down across the country to prevent the spread of rumors. Furthermore, major telecom operators, including Grameenphone, Robi, and Banglalink, issued [statements](https://archive.ph/zaaCZ) confirming that government authorities had ordered the suspension of mobile internet services.

A report by [The Business Standard](https://archive.ph/0fBrV) indicated that the BTRC issued the directive to suspend mobile internet services on August 4, and had also instructed relevant authorities to block all Meta-owned social media platforms. Meanwhile, [The Daily Star](https://archive.ph/5OV9G) reported that, as the protests escalated, NTMC ordered the suspension of 4G mobile internet services on August 4 until further notice.

The following day, on August 5, the order to shut down broadband internet also came from the government. [The Dhaka Tribune](https://www.dhakatribune.com/bangladesh/353724/broadband-internet-service-restored-after-3-hours), citing an IIG official, reported that the government directed IIG operators to suspend broadband service at approximately 10:30 a.m. Citing a BTRC letter, [Prothom Alo](https://archive.ph/l1PiN) reported that on August 5, former State Minister Junaid Ahmed ordered the suspension of broadband internet at 10:00 a.m. via a mobile message. However, after news of Sheikh Hasina’s resignation, broadband services were restored. According to [Prothom Alo](https://archive.ph/YDfLC), a government agency issued a verbal order at 1:15 p.m. to restore broadband service. Mobile internet was restored shortly thereafter, around 2:00 p.m.

Later that day, after 4:00 p.m., social media platforms were also [unblocked](https://www.dhakatribune.com/bangladesh/353739/facebook-other-social-media-platforms-back-online). At that time, the President of the Internet Service Providers Association of Bangladesh (ISPAB) [told the media that](https://archive.ph/CqDsH) the entire internet system had been reopened and the caches for social media platforms, including Facebook, had been restored.

**Table: A summary of the key findings**

| Phase      | Political context                                                | Type of control                                                                                      | Network layer involved                                                                                 |
|------------|------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| July 15-17 | Escalating campus protests, BCL attacks, and university closures | Mobile internet throttling, Facebook blocking                                                        | Mobile operator-level throttling, TLS interference, BTRC and NTMC directive                            |
| July 18-23 | Nationwide shutdown, mass protests, army deployment, curfew      | Full mobile and broadband blackout nationwide                                                        | IIG, ITC, Submarine Cable, BTRC directives                                                             |
| July 24-31 | Eased curfew, arrests of leaders, movement fragmenting           | Mobile internet off, broadband throttled, blocking of social media, instant messaging apps, and VPNs | IIG cache blocks, ISP throttling, TLS interference, IP-level blocks, NTMC directive on platform blocks |
| Aug 1-3    | Protests shift to one-point demand, ban on Jamaat-e-Islami       | Mobile slowdowns, intermittent platform blocks                                                       | NTMC order, platform blocks on mobile internet                                                         |
| Aug 4-5    | Non-cooperation movement, peak protests, PM resigns              | Full blackout: mobile and broadband, Meta cache shutdown                                             | Mobile + IIG + ISP + cache all disabled on government order                                            |

## Key takeaways

* **Unprecedented scale and duration:** The July–August 2024 internet shutdown was the longest and most geographically extensive in Bangladesh's history, marking a significant escalation of digital control.
* **Evolution of censorship tactics aligned with protest milestones:** Authorities deployed a broad and evolving arsenal of control methods, from complete nationwide mobile blackouts and broadband throttling to sophisticated selective platform blocking.
* **Correlation between intense shutdowns and casualties:** The most intense periods of network disruption, particularly full blackouts, broadly coincided with spikes in reported violence and casualties during the anti-discrimination movement.
* **Deliberate opacity and fragmented authority:** Shutdowns were carried out with a stark lack of official disclosure, relying on informal directives (e.g., via WhatsApp) and involving multiple government entities (BTRC, NTMC, DoT) often operating with overlapping or unclear lines of authority, leading to confusion.
* **Targeted crackdown on circumvention tools:** Authorities actively worked to thwart circumvention efforts, including a crackdown on VPNs (like Proton VPN) and other free apps, making it significantly harder for users to bypass restrictions.
* **Leveraging service providers for implementation:** Internet Service Providers (ISPs) and International Internet Gateways (IIGs), along with mobile operators, were extensively utilized to implement censorship, often being instructed to disable cache servers and comply with verbal or informal directives.
* **Internet control as a central state response to protest:** The entire episode highlights how internet shutdowns and censorship were not isolated incidents but a dynamic and central tool used by the state to control information flow, suppress dissent, and manage the public narrative during a period of profound political and social upheaval.

## Conclusion

The internet shutdown enforced across Bangladesh between July 15 and August 5, 2024, represents an unprecedented and highly complex chapter in the nation's history of digital control. This period of censorship, unmatched in both its nationwide scope and sustained duration, coincided directly with the peak of the anti-discrimination movement and a tumultuous political transition. 

This timeline shows that the shutdown was neither uniform nor transparent. Instead, it was characterized by inconsistent enforcement, conflicting official statements, and the absence of clear legal orders, making it difficult for citizens, journalists, and digital rights actors to respond or verify information in real time.  

At a moment of mass mobilization and regime change, control over digital connectivity often becomes central to the state's response. Understanding how these shutdowns are implemented and their cumulative effect on political expression, access to information, and human rights is critical not only for accountability but also for prevention. We hope that this timeline and analysis will serve as a vital resource for researchers, human rights organizations, and digital watchdogs in their ongoing efforts to understand, document, and ultimately prevent similar abuses of internet freedom.


## References

* Abdullah, M. (2024, August 13). Probe reveals deliberate internet blackout to suppress quota reform movement. *Dhaka Tribune*. https://www.dhakatribune.com/bangladesh/354596/btrc-ntmc-behind-internet-shutdown-palak-issued
* Abdullah, S. (2024, November 5). *Shutdown watch: Building a community against internet shutdowns in bangladesh*. Internet Society Pulse.[ https://pulse.internetsociety.org/blog/shutdown-watch-building-a-community-against-internet-shutdowns-in-bangladesh](https://pulse.internetsociety.org/blog/shutdown-watch-building-a-community-against-internet-shutdowns-in-bangladesh)
* Afrin, S. (2024, August 13). *BTRC and NTMC shut down internet, Palak phoned too*. Prothomalo. https://en.prothomalo.com/bangladesh/7rh73pjode
* Ahmed, R. (2024, July 28). *Government itself shut down internet*. Prothomalo. https://en.prothomalo.com/bangladesh/iv2dsrbrfk
* Ali, A. C., Marium. (n.d.). *How bangladesh’s ‘gen z’ protests brought down pm sheikh hasina*. Al Jazeera.  https://www.aljazeera.com/news/longform/2024/8/7/how-bangladeshs-gen-z-protests-brought-down-pm-sheikh-hasina
* *All public, private universities closed indefinitely; students asked to vacate halls*. (2024, July 16). The Business Standard.[ https://www.tbsnews.net/bangladesh/education/all-public-private-universities-closed-indefinitely-901056](https://www.tbsnews.net/bangladesh/education/all-public-private-universities-closed-indefinitely-901056)
* bdnews24.com. (2015, November 18). Internet access restored in Bangladesh after brief shutdown. *Internet Access Restored in Bangladesh After Brief Shutdown*. https://bdnews24.com/bangladesh/internet-access-restored-in-bangladesh-after-brief-shutdown
* Bergin, J., Lim, L., Nyein, N., & Nachemson, A. (2022, August 29). Flicking the kill switch: Governments embrace internet shutdowns as a form of control. *The Guardian*.[ https://www.theguardian.com/technology/2022/aug/29/flicking-the-kill-switch-governments-embrace-internet-shutdowns-as-a-form-of-control](https://www.theguardian.com/technology/2022/aug/29/flicking-the-kill-switch-governments-embrace-internet-shutdowns-as-a-form-of-control)
* Broadband, 4G internet services restored. (2024, August 5). *Dhaka Tribune*.[ https://www.dhakatribune.com/bangladesh/353724/broadband-internet-service-restored-after-3-hours](https://www.dhakatribune.com/bangladesh/353724/broadband-internet-service-restored-after-3-hours)
* Broadband internet restored in limited areas after blackout. (2024, July 24). *Dhaka Tribune*. https://www.dhakatribune.com/bangladesh/352554/broadband-internet-restored-in-limited-areas-after
* *Broadband, mobile internet restored*. (2024, August 5). The Business Standard. https://www.tbsnews.net/bangladesh/broadband-internet-disrupted-places-dhaka-910011
* BSS. (2024, July 29). *Quota movement coordinators not forced to issue statement: DB chief*. Prothomalo. https://en.prothomalo.com/bangladesh/xtaxw5o5vt
* *BTRC instructs IIGs to increase internet speed across country*. (n.d.). The Financial Express.  https://thefinancialexpress.com.bd/national/btrc-instructs-iigs-to-boost-internet-speed-across-country
* CBC. (2024, July 19). Nationwide curfew in Bangladesh as deadly protests over government jobs escalate. *CBC News*.[ https://www.cbc.ca/news/world/bangladesh-jobs-protests-telecoms-cut-1.7268940](https://www.cbc.ca/news/world/bangladesh-jobs-protests-telecoms-cut-1.7268940)
* Chowdhury, M., & Henderson, L. (n.d.). *Internet Shutdown Advocacy in Bangladesh: How to Prepare, Prevent Resist.* https://preparepreventresist.openinternetproject.org/wp-content/uploads/2023/02/Optima-Bangladesh-Report.pdf
* Correspondent. (2024a, July 29). *Students demonstrate in front of RU*. Prothomalo. https://en.prothomalo.com/bangladesh/local-news/zxqt3ngkow
* Correspondent. (2024b, August 2). *Didn’t announce withdrawal of movement voluntarily: Six coordinators in joint statement*. Prothomalo. https://en.prothomalo.com/bangladesh/cigx71vi3p
* Correspondent, D. U. (2024c, July 15). *PM’s Quota Remark: Late-night protests rock DU, other universities*. The Daily Star. https://www.thedailystar.net/news/bangladesh/news/pms-quota-remark-late-night-protests-rock-du-other-universities-3657201
* Correspondent, S. (2024a, July 19). *Internet service blocked across the country*. The Daily Star. https://www.thedailystar.net/news/bangladesh/news/internet-service-blocked-across-the-country-3660596
* Correspondent, S. (2024c, July 25). *Broadband restored on trial*. The Daily Star. https://www.thedailystar.net/news/bangladesh/news/broadband-restored-trial-3661356
* Correspondent, S. (2024d, July 29). *15 injured in attack on protesters at Barishal Uni, demonstrations at BM College*. Prothomalo. https://en.prothomalo.com/bangladesh/local-news/dkmf611ost
* Correspondent, S. (2024e, July 29). *Cops charge baton at protestors at ECB Chattar, 20 detained from Mirpur, Dhanmandi*. Prothomalo. https://en.prothomalo.com/bangladesh/city/rr1h6i77fq
* Correspondent, S. (2024f, July 29). *DB custody: 6 coordinators announce withdrawal of programme*. Prothomalo. https://en.prothomalo.com/bangladesh/1a5pu53bbq
* Correspondent, S. (2024g, July 30). *Jamaat to be banned through executive order by Wednesday: Law minister*. Prothomalo. https://en.prothomalo.com/bangladesh/politics/nzlm53rf3g
* Correspondent, S. (2024h, July 31). *March for Justice: Students face police resistance, arrests across country*. Prothomalo. https://en.prothomalo.com/bangladesh/7rtmv6141n
* Correspondent, S. (2024i, July 31). *Protesting students announce fresh programme “remembering our heroes” Thursday*. Prothomalo. https://en.prothomalo.com/bangladesh/dmkanm6oj3
* Correspondent, S. (2024j, August 2). *Facebook, Messenger resume on mobile internet after 5-hr disruption*. Prothomalo. https://en.prothomalo.com/science-technology/ivjcn3yi1o
* Correspondent, S. (2024k, August 2). *Protests, demonstrations all over city, demands for justice*. Prothomalo. https://en.prothomalo.com/bangladesh/5dx6tsauyh
* Correspondent, S. (2024l, August 2). *Students against discrimination to hold ‘prayers and mass procession’ today*. Prothomalo. https://en.prothomalo.com/bangladesh/i7vwh1x14x
* Correspondent, S. (2024m, August 3). *Students against discrimination announces new programmes for saturday, sunday*. Prothomalo. https://en.prothomalo.com/bangladesh/nsjuagpio9
* Correspondent, S. (2024n, August 3). *Students Against Discrimination declares one-point demand for govt’s resignation*. Prothomalo. https://en.prothomalo.com/bangladesh/rd12isd6ni
* Correspondent, S. (2024o, August 4). *Facebook, Messenger, WhatsApp, Instagram, mobile internet ordered to be shut down*. Prothomalo. https://en.prothomalo.com/bangladesh/r6w5a3mpcy
* Correspondent, S. (2024p, August 4). *Students against discrimination’s ‘march to dhaka’ on monday*. Prothomalo. https://en.prothomalo.com/bangladesh/xlv47rs3c3
* Correspondent, S. (2024q, August 4). *Three days of public holiday from Monday*. Prothomalo. https://en.prothomalo.com/bangladesh/k26kmf1n06
* Correspondent, S. (2024r, August 5). *Broadband internet restored*. Prothomalo. https://en.prothomalo.com/bangladesh/gm0o97gu3x
* Correspondent, S. (2024s, August 5). *Cooperate with us, all the killings will be brought to trial: Army chief*. Prothomalo. https://en.prothomalo.com/bangladesh/gg699hf4gf
* Correspondent, S. (2024t, August 5). *Crowd breaks into Ganabhaban*. Prothomalo. https://en.prothomalo.com/bangladesh/city/fl10zveq9o
* Desk, P. A. (2024, August 12). *109 killed in clashes in a single day*. Prothomalo. https://en.prothomalo.com/bangladesh/qhf6h8cwxy
* Desk, P. A. E. (2024, August 3). *2 killed in mass processions, clashes across country*. Prothomalo.[ https://en.prothomalo.com/bangladesh/nd2t409kax](https://en.prothomalo.com/bangladesh/nd2t409kax)
* Facebook, other social media platforms back online. (2024, August 5). *Dhaka Tribune*. https://www.dhakatribune.com/bangladesh/353739/facebook-other-social-media-platforms-back-online
* *OONI Facebook Messenger test*. (n.d.).  https://ooni.org/nettest/facebook-messenger/
* *OONI Frequently Asked Questions (FAQ)*. (n.d.-a).  https://ooni.org/support/faq/
* *OONI Frequently Asked Questions (FAQ)*. (n.d.-b).  https://ooni.org/support/faq/
* *OONI Frequently Asked Questions (FAQ)*. (n.d.-c).  https://ooni.org/support/faq/
* *OONI Frequently Asked Questions (FAQ)*. (n.d.-d).  https://ooni.org/support/faq/
* *Google transparency report*. (n.d.).  https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1719792000000;end:1725148799999;product:19;region:BD&lu=fraction_traffic
* Hasan, M. (2024a, August 1). *IT firms suffer low productivity amid slow internet*. The Daily Star. https://www.thedailystar.net/business/news/it-firms-suffer-low-productivity-amid-slow-internet-3666826
* Hasan, M. (2024b, August 13). *What you need to know about internet crackdown in Bangladesh*. The Daily Star. https://www.thedailystar.net/business/news/what-you-need-know-about-internet-crackdown-bangladesh-3676346
* *Internet censorship in bangladesh—OONI explorer*. (n.d.).  https://explorer.ooni.org/country/BD
* *Documentation on Interpreting OONI data*. (n.d.).  https://ooni.org/support/interpreting-ooni-data/
* *IODA*. (n.d.-a).  https://ioda.inetintel.cc.gatech.edu/country/BD?from=1719866792&until=1725137192
* *IODA*. (n.d.-c).  https://ioda.inetintel.cc.gatech.edu/resources?tab=glossary
* *IODA*. (n.d.-e).  https://ioda.inetintel.cc.gatech.edu/asn/45245?from=1721757679&until=1722189679
* *IODA*. (n.d.-f).  https://ioda.inetintel.cc.gatech.edu/asn/24432?from=1721757679&until=1722189679
* *IODA*. (n.d.-g).  https://ioda.inetintel.cc.gatech.edu/country/BD?from=1722804392&until=1722977192
* Islam, R. (2024a, July 29). *4G internet service becomes slower from Monday afternoon*. Prothomalo. https://en.prothomalo.com/bangladesh/0wn7j3e5hs
* *#KeepItOn: Fighting internet shutdowns around the world*. (n.d.). Access Now. [ https://www.accessnow.org/campaign/keepiton/](https://www.accessnow.org/campaign/keepiton/)
* Mobile access to Facebook restored after nearly 6hrs. (2024, August 2). *Dhaka Tribune*. https://www.dhakatribune.com/bangladesh/353476/mobile-access-to-facebook-restored-after-nearly
* *Mobile internet shut down across Bangladesh again*. (2025, July 28). https://www.newagebd.net/post/country/241641/mobile-internet-shut-down-across-bangladesh-again
* Moral, S. (2024, September 7). *Student-people uprising: More than 18,000 injured*. Prothomalo.[ https://en.prothomalo.com/bangladesh/1qyly6muhk](https://en.prothomalo.com/bangladesh/1qyly6muhk)
* NetBlocks. (2024, July 17). *Confirmed: Live metrics show that social media platform Facebook has been restricted on multiple internet providers in #Bangladesh*. X.com. https://x.com/netblocks/status/1813293423157555534
* *OONI Test Descriptions*. (n.d.). [ https://ooni.org/nettest/](https://ooni.org/nettest/)
* OHCHR. (n.d.). *Human Rights Violations and Abuses related to the Protests of July and August 2024 in Bangladesh*. https://www.ohchr.org/sites/default/files/documents/countries/bangladesh/ohchr-fftb-hr-violations-bd.pdf
* *OONI Explorer—Bangladesh blocked news media websites amid 2024 general elections*. (n.d.).  https://explorer.ooni.org/findings/11686385001
* *OONI Explorer—Open data on internet censorship worldwide*. (n.d.-a).  https://explorer.ooni.org/search
* *OONI Explorer—Open data on internet censorship worldwide*. (n.d.-i).  https://explorer.ooni.org/m/20240716200350.966415_BD_webconnectivity_921a95b91bc1bdd3
* *OONI Explorer—Open data on internet censorship worldwide*. (n.d.-j).  https://explorer.ooni.org/m/20240716172647.769708_BD_webconnectivity_9e7c087cc444d1ee
* *OONI Explorer—Open data on internet censorship worldwide*. (n.d.-k).  https://explorer.ooni.org/m/20240717082919.245093_BD_webconnectivity_740ef4a92c6e58a5
* *OONI Explorer—Open data on internet censorship worldwide*. (n.d.-l).  https://explorer.ooni.org/m/20240716174236.351512_BD_webconnectivity_319be948792b4860
* *OONI Explorer—Open data on internet censorship worldwide*. (n.d.-m).  https://explorer.ooni.org/chart/mat
* *OONI Explorer—Open data on internet censorship worldwide*. (n.d.-n).  https://explorer.ooni.org/chart/mat
* *OONI Explorer—Open data on internet censorship worldwide*. (n.d.-o).  https://explorer.ooni.org/chart/mat
* *OONI Explorer—Open data on internet censorship worldwide*. (n.d.-p).  https://explorer.ooni.org/m/20240717074637.449725_BD_whatsapp_e9b5a10845b26966
* *OONI Explorer—Open data on internet censorship worldwide*. (n.d.-q).  https://explorer.ooni.org/countries
* *OONI Explorer—Open data on internet censorship worldwide*. (n.d.-r).  https://explorer.ooni.org/chart/mat
* *OONI Explorer—Open data on internet censorship worldwide*. (n.d.-s).  https://explorer.ooni.org/m/20240728154829.417947_BD_webconnectivity_1d7f5d5f8c3ea3e1
* *OONI Explorer—Open data on internet censorship worldwide*. (n.d.-t).  https://explorer.ooni.org/m/20240730231624.142954_BD_webconnectivity_3f2f6ec0a71e29a8
* *OONI Explorer—Open data on internet censorship worldwide*. (n.d.-u).  https://explorer.ooni.org/m/20240727022246.281399_BD_webconnectivity_1637d085d44708de
* *OONI Explorer—Open data on internet censorship worldwide*. (n.d.-v).  https://explorer.ooni.org/chart/mat
* *OONI Glossary*. (n.d.).  https://ooni.org/support/glossary/
* OONI, IODA, M-Lab, Cloudflare, Kentik, Planet, C., ISOC, & Article19 2022-11-29. (2022, November 29). *Technical multi-stakeholder report on Internet shutdowns: The case of Iran amid autumn 2022 protests*. https://ooni.org/post/2022-iran-technical-multistakeholder-report/
* *OONI/blocking-fingerprints*. (2025). [Python]. Open Observatory of Network Interference (OONI). https://github.com/ooni/blocking-fingerprints (Original work published 2022)
* Palak: Broadband internet services could be fully restored by Wednesday night. (2024, July 24). *Dhaka Tribune*. https://www.dhakatribune.com/bangladesh/352620/palak-broadband-internet-services-could-be-fully
* Paul, R. (2024, July 16). Five killed in violent anti-quota protests in Bangladesh. *Reuters*. https://www.reuters.com/world/asia-pacific/bangladesh-deploys-police-job-protests-flare-up-2024-07-16/
* Report, S. B. (2024, August 2). *Mobile access to Facebook restored after nearly six hours*. The Daily Star. https://www.thedailystar.net/business/news/mobile-access-facebook-restored-after-nearly-six-hours-3668056
* *OONI Research reports: Blocking of circumvention tools*. (n.d.).  https://ooni.org/reports/circumvention/
* Roskomsvoboda, O. 2023-02-24. (2023, February 24). *How Internet censorship changed in Russia during the 1st year of military conflict in Ukraine*. https://ooni.org/post/2023-russia-a-year-after-the-conflict/
* *Shutdown—Bangladesh*. (2024, August 4). Internet Society Pulse. https://pulse.internetsociety.org/en/shutdowns/bangladesh-government-shuts-down-mobile-internet-again-amidst-protests/
* *OONI Signal test*. (n.d.).  https://ooni.org/nettest/signal/
* *Spec/nettests/ts-017-web-connectivity. Md at master · ooni/spec*. (n.d.). GitHub.  https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md
* Sun, D. (2024a, July 12). *Mobile internet ‘controlled’ in protesting areas*. Daily-Sun. https://www.daily-sun.com/printversion/details/758138
* Sun, D. (2024b, August 5). *Mobile internet suspended, social media blocked on broadband*. Daily-Sun. https://www.daily-sun.com/post/760516
* *OONI Telegram test*. (n.d.).  https://ooni.org/nettest/telegram/
* *Test-lists/lists at master · citizenlab/test-lists*. (n.d.). GitHub.  https://github.com/citizenlab/test-lists/tree/master/lists
* *Timeline of events leading to the resignation of bangladesh prime minister sheikh hasina*. (2024a, August 5). Voice of America. https://www.voanews.com/a/timeline-of-events-leading-to-the-resignation-of-bangladesh-prime-minister-sheikh-hasina/7731456.html
* *Traffic from AS24432*. (n.d.). Cloudflare.[ https://radar.cloudflare.com/traffic/as24432?dateStart=2024-07-01&dateEnd=2024-08-31](https://radar.cloudflare.com/traffic/as24432?dateStart=2024-07-01&dateEnd=2024-08-31)
* *Traffic from AS45245*. (n.d.). Cloudflare.[ https://radar.cloudflare.com/traffic/as45245?dateStart=2024-07-01&dateEnd=2024-08-31](https://radar.cloudflare.com/traffic/as45245?dateStart=2024-07-01&dateEnd=2024-08-31)
* *Traffic in Bangladesh*. (n.d.). Cloudflare.[ https://radar.cloudflare.com/traffic/bd?dateStart=2024-07-01&dateEnd=2024-07-31](https://radar.cloudflare.com/traffic/bd?dateStart=2024-07-01&dateEnd=2024-07-31)
* UN report: 1,400 people killed in July uprising. (2025, February 12). *Dhaka Tribune*. https://www.dhakatribune.com/bangladesh/373524/un-report-1-400-people-killed-in-july-uprising
* *Violent clashes erupt between police and protesters in Dhaka even after 6 die during campus protests*. (2024, July 17). AP News.[ https://apnews.com/article/bangladesh-universities-close-hasina-quota-student-protest-77f82215bf8fce35f288ea39d812bcdb](https://apnews.com/article/bangladesh-universities-close-hasina-quota-student-protest-77f82215bf8fce35f288ea39d812bcdb)
* *WhatsApp test*. (n.d.). OONI. https://ooni.org/nettest/whatsapp/
* *Web connectivity*. (a, January 1). https://ooni.org/nettest/web-connectivity/
* *WhatsApp test*. (n.d.).  https://ooni.org/nettest/whatsapp/
* *Why is broadband internet so slow now?: Experts tell TBS*. (2024, July 25). The Business Standard. https://www.tbsnews.net/bangladesh/why-broadband-internet-so-slow-now-experts-tell-tbs-903381
* Xynou, M., Basso, S., Padmanabhan, R., Filastò, A., DefendDefenders, & Initiative 2021-01-22, D. P. (2021, January 22). *Uganda: Data on internet blocks and nationwide internet outage amid 2021 general election*. https://ooni.org/post/2021-uganda-general-election-blocks-and-outage/
* Xynou, M., Padmanabhan, R., Kyaw, P., Organization, M. I. for D., & Filastò2021-03-09, A. (2021, March 9). *Myanmar: Data on internet blocks and internet outages following military coup*.[ https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/](https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/)
* Yu, A. (2024, August 5). *Situation in Bangladesh*. Telenor Asia.[ https://www.telenorasia.com/announcements/situation-in-bangladesh/](https://www.telenorasia.com/announcements/situation-in-bangladesh/)
* *কোটা আন্দোলন: দশদিন পর মোবাইল ইন্টারনেট চালু, চলবে না ফেসবুক, হোয়াটসঅ্যাপ, টিকটক*. (2024, July 28). BBC News বাংলা.[ https://www.bbc.com/bengali/articles/c87rny08e72o](https://www.bbc.com/bengali/articles/c87rny08e72o)
* ডিবি কার্যালয় থেকে সব কর্মসূচি প্রত্যাহারের ঘোষণা ৬ সমন্বয়কের. (2024, July 28). *Samakal*.[ https://samakal.com/bangladesh/article/248082/ডিবি-কার্যালয়-থেকে-সব-কর্মসূচি-প্রত্যাহারের-ঘোষণা-৬-সমন্বয়কের](https://samakal.com/bangladesh/article/248082/ডিবি-কার্যালয়-থেকে-সব-কর্মসূচি-প্রত্যাহারের-ঘোষণা-৬-সমন্বয়কের)
* *ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসে ইন্টারনেট সেবা বন্ধ*. (2024, July 15). দেশ রূপান্তর.[ https://www.deshrupantor.com/523034/%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE-%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F-%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A6%BE%E0%A6%B8%E0%A7%87-%E0%A6%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A6%A8%E0%A7%87%E0%A6%9F-%E0%A6%B8%E0%A7%87%E0%A6%AC%E0%A6%BE-%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A7](https://www.deshrupantor.com/523034/%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE-%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F-%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A6%BE%E0%A6%B8%E0%A7%87-%E0%A6%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A6%A8%E0%A7%87%E0%A6%9F-%E0%A6%B8%E0%A7%87%E0%A6%AC%E0%A6%BE-%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A7)
* ঢাকায় ইন্টারনেট সেবা ‘বিঘ্নিত’, বিটিআরসি বলছে, কোনো নির্দেশনা নেই. (2024, July 17). *bdnews24.com*. https://bangla.bdnews24.com/bangladesh/0561d9978da2
* প্রতিবেদক. (2024, July 30). *শিক্ষার্থীদের সঙ্গে সংহতি জানিয়ে অনেকের ফেসবুক প্রোফাইলে লাল ফ্রেম*. Prothomalo. https://www.prothomalo.com/bangladesh/i75t39xlhp
* প্রতিবেদককালবেলা. (n.d.). *সন্ধ্যা থেকেই মোবাইল ইন্টারনেট সেবা বিঘ্ন | কালবেলা*. কালবেলা | বাংলা নিউজ পেপার.  https://www.kalbela.com/national/105004
* প্রতিবেদকনিজস্ব. (2024a, July 16). *কোটা আন্দোলন: রংপুরে সংঘর্ষে রোকেয়া বিশ্ববিদ্যালয়ের শিক্ষার্থী নিহত*. Prothomalo. https://www.prothomalo.com/bangladesh/district/2yt74df0iq
* প্রতিবেদকনিজস্ব. (2024b, July 17). *মোবাইল ইন্টারনেটে ফেসবুক ব্যবহারে সমস্যা*. Prothomalo. https://www.prothomalo.com/bangladesh/h4uzv1zi9f
* প্রতিবেদকনিজস্ব. (2024d, July 27). *কোটা সংস্কার আন্দোলনকে ঘিরে সংঘাত: নিহত বেড়ে ২১০*. Prothomalo. https://www.prothomalo.com/bangladesh/un7b63tabl
* প্রতিবেদকনিজস্ব. (2024e, July 29). *কোটা সংস্কার আন্দোলন: সরকারি হিসাবে মৃতের সংখ্যা বেড়ে ১৫০*. dhakapost.com. https://www.dhakapost.com/national/295169
* প্রতিবেদকনিজস্ব. (2024f, August 1). *ছয় সমন্বয়ককে ছেড়ে দিল ডিবি*. Prothomalo. https://www.prothomalo.com/bangladesh/vt91qmdtcb
* প্রতিবেদকনিজস্ব. (2024g, August 4). *কর্তৃপক্ষের নির্দেশে মোবাইল ইন্টারনেট বন্ধ: অপারেটরদের বিবৃতি*. Prothomalo. https://www.prothomalo.com/bangladesh/hav5wty5j0
* প্রতিবেদকনিজস্ব. (2024h, August 4). *মোবাইল ইন্টারনেট বন্ধের নির্দেশ*. Prothomalo. https://www.prothomalo.com/bangladesh/5h6t8ay1rl
* প্রতিবেদকনিজস্ব. (2024i, August 5). *আবার স্বাভাবিক ছন্দে ইন্টারনেট, ব্যবহার করা যাচ্ছে ফেসবুক, হোয়াটসঅ্যাপ, মেসেঞ্জার ও ইনস্টাগ্রাম*. Prothomalo. https://www.prothomalo.com/technology/5lifre3n2o
* প্রতিবেদকনিজস্ব. (2024j, August 15). *বিগত সরকারের রাজনৈতিক উদ্দেশ্য পূরণে পলকের নির্দেশে ইন্টারনেট বন্ধ রাখা হতো: বিটিআরসি*. Prothomalo. https://www.prothomalo.com/bangladesh/yhqc15kwke
* প্রতিবেদকবিশেষ. (2024, July 24). *কারফিউ আরও শিথিল, অফিস খুলছে আজ*. Prothomalo. https://www.prothomalo.com/bangladesh/t37nlcbsc2
* *রাজধানীসহ সারা দেশে বিক্ষোভ-অবরোধ: যোগ দিল বেসরকারি বিশ্ববিদ্যালয়ও*. (n.d.). Jugantor.  https://www.jugantor.com/tp-firstpage/828507
* রিপোর্টস্টার অনলাইন. (2024a, July 17). *বৃহস্পতিবার সারা দেশে ‘কমপ্লিট শাটডাউন’ বৈষম্যবিরোধী ছাত্র আন্দোলনের*. The Daily Star Bangla. https://bangla.thedailystar.net/news/bangladesh/quota-protest/news-599271
* রিপোর্টস্টার অনলাইন. (2024b, July 23). *কোটা সংস্কার আন্দোলন: ৮ দিনে নিহত অন্তত ১৫০, আহত কয়েক হাজার*. The Daily Star Bangla. https://bangla.thedailystar.net/news/bangladesh/news-599696
* রিপোর্টস্টার অনলাইন. (2024c, July 23). *কোটা সংস্কার আন্দোলন: ৮ দিনে নিহত অন্তত ১৫০, আহত কয়েক হাজার*. The Daily Star Bangla. https://bangla.thedailystar.net/news/bangladesh/news-599696
* *সারা দিন বন্ধের পর সন্ধ্যায় সচল ফেসবুক*. (n.d.). Jugantor.  https://www.jugantor.com/tp-lastpage/833288
* সারা দেশে কারফিউ, সেনা মোতায়েন. (2024, July 20). *Kaler Kantho*. [https://www.kalerkantho.com/print-edition/first-page/2024/07/20/1408230](https://www.kalerkantho.com/print-edition/first-page/2024/07/20/1408230)
* বিক্ষোভে পুলিশের বাধা, ধস্তাধস্তি. (2024, August 2). *Samakal*. https://samakal.com/bangladesh/article/248778/বিক্ষোভে-পুলিশের-বাধা-ধস্তাধস্তি
