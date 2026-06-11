---
title: "Abortion Access Denied: Investigating the Global Censorship of Women on Web"
description: "This report documents the blocking of Women on Web domains around the world based on OONI data."
author: "Women on Web, Maria Xynou (OONI), Mehul Gulati (OONI), Arturo Filastò (OONI)"
date: "2026-06-11"
tags: ["country-ir", "country-ph", "country-tr", "country-kr", "country-es", "country-ar", "country-kw", "country-pl", "country-ge", "country-pk", "country-ke", "censorship", "theme-human_rights"]
categories: ["report"]
---

{{<img src="images/image11.png">}}

This report documents the blocking of Women on Web domains around the world based on OONI data.

{{<table-of-contents>}}

## Key Findings

Our [analysis](https://github.com/ooni/backend/issues/989) of [OONI data](https://ooni.org/data) collected globally from 1st November 2025 to 1st April 2026 reveals the **blocking of Women on Web domains in 7 countries**: Iran, Türkiye, the Philippines, South Korea, Spain, Kuwait, and Argentina.

*   **Iran.** Since 9th November 2019, OONI data [shows](https://explorer.ooni.org/m/0120191109532aee30d2a5cac7dd113446e2daf1) the blocking of Women on Web in Iran. Out of the 7 countries which present signs of Women on Web blocking, **Iran presented the strongest signal** because the block is both [automatically confirmed](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IR&only=confirmed) and [visible on most tested networks](https://explorer.ooni.org/chart/mat?probe_cc=IR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org).

	*   **DNS tampering.** In most measurements, the [blocking of Women on Web’s website is automatically confirmed](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=IR&test_name=web_connectivity&domain=www.womenonweb.org&failure=true&only=confirmed) in Iran because private IP addresses (`10.10.34.35` and `10.10.34.36`), hosting the governmental block page, are returned as part of DNS resolution.
	*   **TLS interference.** On some networks in Iran, OONI data shows that the connection was [reset](https://explorer.ooni.org/m/20260220180752.514784_IR_webconnectivity_9d2626b4c0daf643) or [timed out](https://explorer.ooni.org/m/20260221132713.159898_IR_webconnectivity_4144f9c8d66d307e) after the ClientHello message during the TLS handshake. 

*   **Türkiye.** Access to Women on Web’s website has been [blocked](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/#turkey) since 2019. Recent OONI data shows that the [block remains ongoing](https://explorer.ooni.org/chart/mat?probe_cc=TR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org) and that it is implemented on most tested networks.

	*   **TLS interference.** On most networks in Türkiye, OONI data shows that the connection was [reset](https://explorer.ooni.org/m/20260330191304.480841_TR_webconnectivity_715b44aa7aab3759) or [timed out](https://explorer.ooni.org/m/20260331202242.033673_TR_webconnectivity_4dbf42441ab9d4c3) after the ClientHello message during the TLS handshake.
	*   **DNS tampering.** OONI data shows IP addresses (`195.175.254.2` and `213.14.227.50`) that are operated by Turk Telekomunikasyon, and are known to be associated with government mandated restrictions, returned as part of DNS resolution on [TurkNet (AS12735)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=TR&only=confirmed),  [Turk Telekom (AS9121)](https://explorer.ooni.org/m/20260331051240.034771_TR_webconnectivity_9fb09085a225a98b) and [TTNET (AS47331)](https://explorer.ooni.org/m/20260327104244.726632_TR_webconnectivity_61f8264f378da433).

*   **Philippines.** OONI data suggests that access to Women on Web’s main website (`www.womenonweb.org`) may have been blocked in the Philippines [as early as 5th January 2025](https://explorer.ooni.org/chart/mat?probe_cc=PH&since=2024-06-01&until=2025-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org) on some networks. The block is primarily implemented at the [DNS level](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=PH&only=anomalies).

	*   **DNS injection redirecting to block pages.** OONI data shows DNS resolution for the target website (`www.womenonweb.org`) points to a PAGCOR block page. The primary block pages [identified](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=PH&only=anomalies) are blocked.sbmd.cicc.gov.ph and [prohibitedaccess.globe.com.ph](http://prohibitedaccess.globe.com.ph).
	*   **Other cases of DNS tampering.** OONI data also shows that some ISPs in the Philippines [returned the NXDOMAIN error](https://explorer.ooni.org/m/20260316015449.870367_PH_webconnectivity_f37c71fc8275e3bf), falsely indicating that the Women on Web domain does not exist  – a common form of implementing restrictions.

*   **South Korea.** OONI data shows that access to Women on Web’s website has been [blocked in South Korea since January 2019](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/#south-korea), and that the [block remains ongoing](https://explorer.ooni.org/chart/mat?probe_cc=KR&since=2026-05-06&until=2026-06-06&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org) more than 7 years later.

	*   **TLS interference.** OONI data shows that while DNS resolution returned the expected IP address and a TCP connection to the resolved IP was successfully established (thereby excluding the possibility of transient network failures), the connection was [reset](https://explorer.ooni.org/m/20260331182727.172566_KR_webconnectivity_68796e8d6e5f4e29) after the ClientHello message during the TLS handshake. This is consistently observed on [most tested networks](https://explorer.ooni.org/chart/mat?probe_cc=KR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org).
	*   **Active censorship enforcement of Women on Web content.** Unlike other countries which limit their block to Women on Web’s main website, South Korea was found to also block access to additional Women on Web sites that were set up to circumvent censorship. The blocking of Korean-language domains, as well as the detection and blocking of additional Women on Web domains set up to circumvent blocks, suggests that ISPs in South Korea are investing more resources (in comparison to other countries) in actively enforcing Women on Web content censorship. 

*   **Spain.** Since February 2020, access to Women on Web’s main website has been blocked on multiple networks in Spain. Even though the Spanish Supreme Court ordered the [partial unblocking](https://www.womenonweb.org/en/news/women-on-webs-website-remains-censored-despite-the-supreme-court-ruling-to-unblock-the-website/) of Women on Web’s site in October 2022, OONI data shows that the block remains in place on multiple networks, including [Telefónica de España, S.A.U. (AS3352)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=3352&domain=www.womenonweb.org&failure=true), [Xtra Telecom (AS15704)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=AS15704&domain=www.womenonweb.org&failure=true), [Vodafone Espana (AS12430)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=AS12430&domain=www.womenonweb.org&failure=true), [Vodafone ONO (AS6739)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=AS6739&domain=www.womenonweb.org&failure=true), and [Orange Espagne (AS12479)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=AS12479&domain=www.womenonweb.org&failure=true).

	*   **TLS interference on most networks.** In most cases, OONI data shows that the blocking of Women on Web is implemented by means of TLS interference because the [connection is reset](https://explorer.ooni.org/m/20260331235602.754634_ES_webconnectivity_c74ca391239a7496) after the ClientHello message during the TLS handshake.
	*   **Allot-issued TLS certificate.** On two Vodafone networks ([AS6739](https://explorer.ooni.org/m/20251219154750.115480_ES_webconnectivity_5bfcb3ab585ddf0b) and [AS12430](https://explorer.ooni.org/m/20251212233809.195802_ES_webconnectivity_70f05a0c252e1f2f)), OONI measurements recorded `tls.bad\_cert` results involving a recurring certificate issued by [Allot](https://www.allot.com/), consistent with the presence of network security or filtering infrastructure capable of intercepting or inspecting HTTPS traffic.
	*   **Shift in TLS blocking technique.** In February 2026, OONI data shows a shift from `tls.bad\_cert` measurements (linked to an Allot-issued certificate and consistent with possible TLS interception) to `tls.connection\_reset` events [Vodafone ONO (AS6739)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=AS6739&domain=www.womenonweb.org&failure=true) and [Vodafone Espana (AS12430)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=AS12430&domain=www.womenonweb.org&failure=true), indicating a move toward direct connection termination over time.
	*   **DNS tampering on Orange Espagne (AS12479).** On this network, OONI data [shows](https://explorer.ooni.org/m/20260331232726.046450_ES_webconnectivity_7d65baf1ecaf6ed6) that the domain name is resolved to the local loopback address `127.0.0.1` – meaning it is redirected to the user’s own device – rather than to the actual IP address of the Women on Web website.

*   **Kuwait.** As of March 2025, OONI data provides [signals of potential Women on Web blocking](https://explorer.ooni.org/chart/mat?probe_cc=KW&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org&data=analysis) in Kuwait. The block appears to be implemented by means of TLS interference because OONI data [shows](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=KW&only=anomalies) that the connection was [reset](https://explorer.ooni.org/m/20260103180818.047385_KW_webconnectivity_777347abbf9eea19) after the ClientHello message during the TLS handshake. However, the limited measurement coverage provides an important limitation to the findings.
*   **Argentina.** Unlike the other countries discussed in this study, [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=AR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org) suggests that access to Women on Web may have only been blocked **temporarily** (between mid-December 2025 to mid-January 2026) on two networks (AS22927 and AS7303). On these networks, OONI data shows that the testing of `www.womenonweb.org` presented [TCP connection timeouts](https://explorer.ooni.org/m/20251216043147.307525_AR_webconnectivity_3b8e978fec89e8e0), suggesting possible interference at the TCP/IP layer. However, it remains unclear to us if this block was intentional or the result of collateral damage.

Beyond ISP-level blocking, our analysis of OONI data also identified cases where Women on Web’s website was inaccessible due to **corporate firewall filtering** in Poland, Kenya, Pakistan, and Georgia.

## Introduction

As part of this study, [Women on Web](https://www.womenonweb.org/) (WoW) and the [Open Observatory of Network Interference (OONI)](https://ooni.org/) collaborated on investigating the blocking of Women on Web domains around the world.

Founded in 2005, [Women on Web](https://www.womenonweb.org/) is a nonprofit organization that was the first ever online international abortion care provider. Today, WoW facilitates online access to abortion pills, and carries out research and global advocacy to demedicalize, destigmatize and decriminalize abortion. Founded in 2012, [OONI](https://ooni.org/) is a nonprofit organization that builds [free software tools](https://ooni.org/install) and hosts [open data](https://ooni.org/data/) to empower the public to monitor, document, and respond to internet censorship around the world.

In 2019, OONI partnered with Women on Web on a [report](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/) that detailed where the organization’s website was censored around the world. At the time, we [documented](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/) the blocking of [Women on Web](https://www.womenonweb.org/) and [Women on Waves](https://www.womenonwaves.org/) in Brazil, Iran, Saudi Arabia, South Korea, and Türkiye. This report was the first of its kind, as no other digital abortion providers had been known to face as many government-ordered blockages. Less than a year later, OONI also documented the [blocking of Women on Web in Spain](https://ooni.org/post/2020-engine-evaluation-spain/). In the years following these reports, WoW’s work on fighting the censorship of their website has escalated to multiple national court battles.

In this report, [OONI](https://ooni.org/) and [Women on Web](https://www.womenonweb.org/) joined forces again to investigate the global blocking of Women on Web domains based on the analysis of recent [OONI network measurement data](https://ooni.org/data). The goal of this study is to **document and increase transparency around where and how access to Women on Web domains is being restricted worldwide**, thereby limiting access to reproductive rights and information.

We share [OONI data](https://explorer.ooni.org/chart/mat?since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_cc&test_name=web_connectivity&domain=www.womenonweb.org) documenting the blocking of Women on Web domains in Iran, Türkiye, the Philippines, South Korea, Spain, and Kuwait. OONI also documented corporate firewall blocks in Poland, Kenya, Pakistan, and Georgia. Further details are shared in the following methods and findings sections.

## Background

The ability to access abortion information and services through the internet has served as a lifeline for women and pregnant people living in contexts where abortion access is restricted or otherwise inaccessible. Over the past 20 years, [Women on Web](https://www.womenonweb.org/en/home-en/) has provided abortion information and access to care for abortion seekers in more than 180 countries through their website. While WoW has successfully facilitated access to abortion pills to over 160,000 care seekers through their fully digital service, their organization has faced mounting difficulties in several countries following government-ordered blockages of their websites.

### Self-Managed Abortion with Pills

In response to restrictions on abortion, advocates have promoted self-managed abortion (SMA) with pills as an accessible option, which is carried out with misoprostol alone or a combination of mifepristone and misoprostol. For a medication abortion, a pregnant person first takes mifepristone to block the production of progesterone, which stops the pregnancy from growing. Then they take misoprostol, which causes the uterus to contract and empty. The process usually takes one to two days. Besides self-sourcing abortion pills locally - for example through pharmacies, grassroots activist networks, and community health workers - abortion pills can also be mailed to abortion seekers through various online services. There are many options for abortion seekers who are looking for mail order options online, such as [Women on Web](https://www.womenonweb.org/en/order-abortion-pill-online/)[’s](https://www.womenonweb.org/en/order-abortion-pill-online/).

The advent of the internet along with the broader availability of abortion medications online has been revolutionary for self-managed abortions. As [research](https://www.womenonweb.org/en/research/) has shown, access to reliable abortion information and pills online has greatly expanded access to abortion for women and pregnant people around the world, and provided additional evidence that SMA is a safe and effective way to have an abortion outside of a traditional medical setting.

It should also be noted that SMA is more than a workaround to access barriers. It enables people in both restrictive and non-restrictive settings to choose how and where they have an abortion. It allows abortion-seekers to exercise their bodily autonomy in a private setting, and in the comfort of their own home. Even in countries without harsh abortion restrictions where clinic-based care is available, people should still be able to access information and medications to self-manage their abortion on their own terms, whenever and wherever they need it.

**It is crucial that abortion access is grounded not in traditional models of healthcare, but in the needs and preferences of those seeking care.**

### Legal Status of Abortion Globally

Abortion laws vary greatly around the world. While there has been significant progress to advance reproductive rights in the past few decades, harmful restrictions still impact a massive proportion of the world’s population.

Today, [753 million](https://reproductiverights.org/maps/world-abortion-laws/) women of reproductive age live under restrictive abortion laws, and around [45% of abortions](https://www.who.int/news-room/fact-sheets/detail/abortion) worldwide are considered unsafe. As a result, unsafe abortion causes tens of thousands of deaths and illnesses every year, and it remains a leading cause of global maternal mortality and morbidity. [Almost all deaths](https://www.ohchr.org/sites/default/files/Documents/Issues/Women/WRGS/SexualHealth/INFO_Abortion_WEB.pdf) from unsafe abortions take place in countries where abortion is severely restricted. Even in countries where abortion laws are more broadly permissive, health system barriers to care exist, such as gestational limits, mandatory waiting periods, and requirements for abortion seekers to justify their need (often on social or economic grounds) for an abortion, which can delay access to care.

Over the past 30 years, more than 60 countries have liberalized their laws on abortion across most regions of the world, while four have further restricted access (El Salvador, Nicaragua, Poland, and the United States). The following map created by the Center for Reproductive Rights below shows the current status of abortion laws around the globe:

{{<img src="images/image13.png">}}

**Source**: [Center for Reproductive Rights, The World’s Abortion Laws](https://reproductiverights.org/maps/world-abortion-laws/).

Human rights bodies have repeatedly signaled that abortion care needs to be decriminalized, as limiting access to these reproductive health services constitutes discrimination against women and pregnant people. Criminalization of abortion results in poor quality of care, the obstruction of abortion information [dissemination](https://gh.bmj.com/content/7/12/e010409), maintains or increases abortion stigma, and it ultimately does not stop abortions from happening- it leads to [more unsafe abortions](https://www.who.int/news-room/fact-sheets/detail/abortion#:~:text=Evidence%20shows%20that%20restricting%20access,that%20can%20provide%20abortion%20services). The UN Working Group on Discrimination against Women has emphasized that a woman’s right “to make autonomous decisions about her own body and reproductive functions is at the very core of her fundamental [right to equality and privacy](https://www.ohchr.org/sites/default/files/Documents/Issues/Women/WG/WomensAutonomyEqualityReproductiveHealth.pdf).” Similarly, the Special Rapporteur on the right to health has [affirmed](https://docs.un.org/en/A/66/254) that laws criminalizing abortion infringe upon “women’s dignity and autonomy” by limiting their ability to make decisions about their own sexual and reproductive health.

In addition to human rights violations stemming from legal restrictions, UN Special Rapporteurs have also highlighted the importance of access to digital health information and the detrimental effects of censoring such information online. The Special Rapporteur on the promotion and protection of the right to freedom of opinion and expression has [stressed](https://digitallibrary.un.org/record/4011762?ln=ar&v=pdf) that “promoting access to information bolsters the promotion of health, life, autonomy, and good governance.” The World Health Organization has stated that access to information is [essential](https://iris.who.int/server/api/core/bitstreams/dd3d3a9c-6446-4e79-a43c-093a41df46bd/content) for the process of having a self-managed abortion.

Additionally, the Special Rapporteur on the right to health has highlighted the role that “NGOs fill the gap left by States in the provision of abortion services” by “using social media and other web platforms…to provide information and support for people wishing to self-manage their abortion”. The Special Rapporteur also [acknowledged](https://docs.un.org/en/A/HRC/53/65) some of the obstacles that these groups face, noting that “social media use categorization as a method of gatekeeping, for example information on abortion tagged as explicit material”.

Human rights organizations like Amnesty International have [underscored](https://www.amnesty.org/en/latest/news/2024/06/united-states-social-media-companies-removal-of-abortion-related-content-may-hinder-access-to-accurate-health-information/) that censoring abortion information can harm care seekers. They stress that everyone has the right to access unbiased and medically accurate information, and that restricting such access not only violates the right to information but also threatens the rights to health, equality, and bodily autonomy.

For reproductive health and justice organizations around the world, visibility online is essential for providing information and services to abortion seekers. Abortion remains deeply stigmatized, often excluded from sexual health education programs, and frequently treated as a topic that is not appropriate for discussion. This silence is particularly harmful given how common abortion is: [three out of 10](https://www.who.int/news-room/fact-sheets/detail/abortion) (29%) of all pregnancies worldwide end in induced abortion. Abortion is normal and a part of life, and organizations like [Women on Web](https://www.womenonweb.org/) use their digital presence to educate the public on how safe and effective medication abortion is, and they tell people how they can access it and safely self-manage their abortion.

Freedom of expression is essential for reproductive justice advocates online because open and unrestricted digital spaces serve as vital public spheres where people can access accurate healthcare information and make informed decisions about their bodies and lives. Any restrictions within these spaces directly compromise that ability, and can have harmful impacts on abortion seekers.

In this report, we share updated findings on where Women on Web is censored around the world.

## Methods

The goal of this study was to investigate and document the blocking of Women on Web domains around the world. This builds upon our previous studies documenting the [blocking of Women on Web in Spain](https://ooni.org/post/2020-engine-evaluation-spain/) and in [several other countries](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/) (Brazil, Iran, Saudi Arabia, South Korea, and Türkiye) based on OONI data.

To this end, we adopted a **mixed methods research approach**. Our quantitative methods involved [OONI data analysis](https://github.com/ooni/backend/issues/989), while our qualitative methods involved desk research, relevant legal analysis, and [updates](https://github.com/citizenlab/test-lists/pull/1949/changes) to the [Citizen Lab test lists](https://github.com/citizenlab/test-lists) (lists of URLs measured for censorship). Women on Web received direct reports from individuals in several countries stating that they were unable to access its website and abortion pill service, helping to corroborate findings from OONI data analysis. These reports of domain blocking were further confirmed through additional OONI measurements, as well as by Women on Web staff working in some of the affected countries.

To examine whether Women on Web domains are blocked around the world, and which censorship techniques are adopted by ISPs in each country, we analyzed [OONI network measurement data](https://ooni.org/data) collected globally, pertaining to the testing of specific Women on Web domains. The date range of our analysis spanned from **1st November 2025 to 1st April 2026** to include the most recent findings. To ensure that relevant Women on Web domains are tested by [OONI Probe](https://ooni.org/install/) users globally, providing the data needed for our global analysis, we [updated](https://github.com/citizenlab/test-lists/pull/1949/changes) several [Citizen Lab test lists](https://github.com/citizenlab/test-lists) to include more Women on Web domains for [OONI Probe](https://ooni.org/install/) censorship testing. These include [18 Women on Web domains](https://github.com/ooni/backend/issues/989) that have been set up to circumvent censorship and provide access to the main content hosted on www.womenonweb.org, as well as to Women on Web’s abortion care service. We share more details below.

### Updated the Citizen Lab test lists

We started off by reviewing the [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists), which include URLs measured for censorship by [OONI Probe](https://ooni.org/install/) users globally. By default, [OONI Probe](https://ooni.org/install/) users measure URLs included in two test lists: (a) the [Global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) list (which includes internationally-relevant URLs) and (b) the [country-specific list](https://github.com/citizenlab/test-lists/tree/master/lists) (which only includes URLs that are relevant to a specific country). The main Women on Web domain (www.womenonweb.org) has been included in the [global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) since 26th October 2017, and has been tested globally since. As OONI Probe test results are automatically published as [open data](https://ooni.org/data), almost a decade of OONI data is publicly available on the censorship testing of Women on Web globally.

In response to censorship around the world, Women on Web have set up several additional domains to circumvent the blocking of their website, and provide access to the main content hosted on www.womenonweb.org, as well as to Women on Web’s abortion pill service. To explore whether these other domains are accessible or blocked around the world, we updated the [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists) to include them for [OONI Probe](https://ooni.org/install/) testing. As part of this, we updated the test lists twice: [once in May 2025](https://github.com/citizenlab/test-lists/pull/1949/files), and a [second time in August 2025](https://github.com/citizenlab/test-lists/pull/1998). The [first update](https://github.com/citizenlab/test-lists/pull/1949/files) involved adding alternative Women on Web domains to multiple country-specific Citizen Lab test lists based on censorship reports, while the [second update](https://github.com/citizenlab/test-lists/pull/1998/changes) involved adding domains pertaining to Women on Web’s abortion pill service to the global test list. Once these test list updates were merged, the newly added domains were automatically prioritized for [OONI Probe](https://ooni.org/install/) testing and relevant data was [published](https://ooni.org/data), the analysis of which supported this study.

### OONI data analysis

To determine whether and how access to [Women on Web domains](https://github.com/ooni/backend/issues/989) was blocked, we analyzed [OONI data](https://ooni.org/data) pertaining to the testing of these websites globally. The date range of our [analysis](https://github.com/ooni/backend/issues/989) spanned from **1st November 2025 to 1st April 2026**.

Specifically, we analyzed measurements collected globally from the OONI Probe [Web Connectivity experiment](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md), which is designed to measure the blocking of websites. The OONI [Web Connectivity experiment](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md) is designed to measure the accessibility of URLs by performing the following steps:

*   Resolver identification
*   DNS lookup
*   TCP connect to the resolved IP addresses
*   TLS handshake to the resolved IP addresses
*   HTTP(s) GET request following redirects

The above steps are automatically performed from both the local network of the user, and from a control vantage point (known non-censored network). If the results from both networks are the same, the tested URL is annotated as accessible. If the results differ, the tested URL is annotated as [anomalous](https://ooni.org/support/interpreting-ooni-data/#anomalies), and the type of anomaly is further characterized depending on the reason that caused the failure (for example, if the TCP connection fails, the measurement is annotated as a TCP/IP anomaly).

[Anomalous measurements](https://ooni.org/support/interpreting-ooni-data/#anomalies) may be indicative of blocking, but [false positives](https://ooni.org/support/faq#what-are-false-positives) can occur. The likelihood of blocking is therefore greater if the overall volume of anomalous measurements is high in comparison to the overall measurement count – compared on an AS level within the same date range for each OONI Probe experiment type.

Each Web Connectivity measurement provides further network information (such as information pertaining to TLS handshakes) that helps with evaluating whether an anomalous measurement presents signs of blocking. We therefore disaggregate based on the reasons that caused the anomaly (e.g. connection reset during the TLS handshake) and if they are consistent, they provide a stronger signal of potential blocking.

Based on OONI’s heuristics, we are able to automatically confirm the blocking of websites based on [fingerprints](https://github.com/ooni/blocking-fingerprints) if a [block page](https://ooni.org/support/glossary#block-page) is served, or if DNS resolution returns an IP address known to be associated with censorship. These [blocking fingerprints](https://github.com/ooni/blocking-fingerprints) enable us to [automatically confirm website blocks](https://explorer.ooni.org/search?since=2026-01-30&until=2026-05-27&failure=false&only=confirmed) in many countries (such as [Iran](https://explorer.ooni.org/search?since=2026-04-27&until=2026-05-28&failure=false&probe_cc=IR&only=confirmed), [Russia](https://explorer.ooni.org/search?since=2026-04-27&until=2026-05-28&failure=false&probe_cc=RU&only=confirmed), [Kazakhstan](https://explorer.ooni.org/search?since=2026-04-27&until=2026-05-28&failure=false&probe_cc=KZ&only=confirmed), and [Indonesia](https://explorer.ooni.org/search?since=2026-04-27&until=2026-05-28&failure=false&probe_cc=ID&only=confirmed)) where Internet Service Providers (ISPs) implement blocks with these techniques.

In support of this study, we performed dedicated data analysis using the [OONI Pipeline v5](https://github.com/ooni/data) to analyze OONI Web Connectivity measurements collected globally (between 1st November 2025 to 1st April 2026) from the testing of the [18 Women on Web domains](https://github.com/ooni/backend/issues/989). Beyond the main Women on Web domain (`www.womenonweb.org`), they also include other domains that Women on Web have set up to circumvent the blocking of their website and abortion pill service in various countries. These domains, provided by Women on Web, were included as part of [OONI data analysis](https://github.com/ooni/backend/issues/989) for this report.

Through OONI data analysis, we aimed to answer the following main research questions:

*   In which **countries** are Women on Web domains blocked?
*   On which **networks** (in each of those countries) do we observe the **strongest signals** of blocking?
*   How are Women on Web domains blocked on each of those networks? Which **censorship techniques** do ISPs adopt?

We chose these research questions because they could help inform both the scale of global blocking of Women on Web domains, as well as how their censorship could potentially be circumvented (i.e. knowing the censorship techniques used to block Women on Web domains can help inform circumvention strategies).

The [OONI Pipeline v5](https://github.com/ooni/data) enables us to enumerate and aggregate all the errors (e.g., tls.connection_reset) that emerged in the testing of each of the [Women on Web domains](https://github.com/ooni/backend/issues/989). As a more consistent error observed in a larger volume of measurements provides a stronger signal of blocking, we aggregated the errors to determine whether a large percentage of measurements for a tested URL presented the same error (e.g. “tls_timeout_error”) in comparison to the overall measurement volume on a specific network, within a specified date range. The higher the ratio of consistent errors in comparison to the overall measurement count, the stronger the signal (and the greater our confidence) that access to the tested domain is (a) blocked, and (b) blocked in a specific way (e.g TLS interference).

As part of our analysis, we assigned confidence intervals to our censorship findings to distinguish between those where OONI data provides a strong signal of blocking (“high confidence”) and less strong signals (“medium confidence”). We excluded cases which provided weak signals as part of the findings. Those included cases with low measurement coverage (in comparison to the overall measurement coverage on a tested AS during the analysis period), a low percentage of anomalies (in comparison to the overall measurement volume for a tested service on a network), a relatively large proportion of inconsistent failure types and errors, as well as cases which were determined to be false positives based on known bugs or other issues (such as global failure rates as a result of tested services being hosted on unreliable servers, or measurements collected from unreliable networks).

To ensure more accurate and reliable findings, we set a measurement threshold in our analysis. We limited our findings to the ASes which received the largest OONI measurement coverage (and, therefore, the strongest blocking signals) for the [18 Women on Web domains](https://github.com/ooni/backend/issues/989) during the analysis period (1st November 2025 to 1st April 2026).

#### Acknowledgement of limitations

The findings of this study present several limitations, including:

*   **Date range of analysis.** The findings are limited to OONI measurements collected between 1st November 2025 to 1st April 2026. As a result, findings from measurements collected in different date ranges are excluded from this study.
*   **Type of measurements.** The findings mainly involve OONI [Web Connectivity](https://ooni.org/nettest/web-connectivity/) measurements pertaining to the testing of websites for censorship. As a result, findings from [other OONI Probe experiments](https://ooni.org/nettest) (particularly those that don’t measure the blocking of websites) are excluded from this study.
*   **Tested websites.** We limited our analysis to [18 Women on Web domains](https://github.com/ooni/backend/issues/989) as part of our goal to investigate their blocking globally. As a result, the findings of this study do not cover the blocking of other reproductive rights websites around the world.
*   **Testing coverage of websites.** Out of the [18 Women on Web domains](https://github.com/ooni/backend/issues/989) analyzed, not all domains were measured equally across countries over time. Some of these domains were only included in [certain country-specific test lists](https://github.com/citizenlab/test-lists/pull/1949/changes), and most of these domains were only [merged](https://github.com/citizenlab/test-lists/pull/1949/changes) into the [Citizen Lab test lists](https://github.com/citizenlab/test-lists) in 2025. Women on Web’s main domain (`www.womenonweb.org`), however, has been [tested globally](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) since 26th October 2017. Whether OONI data is available for a particular domain depends on whether, in which country, and on which networks an [OONI Probe](https://ooni.org/install) user tested it. As a result, tested websites received different testing coverage in different countries and on different networks throughout the analysis period, which impacts the findings.
*   **Tested ASes.** While OONI Probe tests are regularly performed on multiple ASes in most countries, not all networks are tested equally. Rather, the availability of measurements depends on which networks [OONI Probe](https://ooni.org/install) users were connected to when performing tests. As a result, the measurement coverage varies across ASes throughout the analysis period, impacting the findings. Moreover, we limited the findings of this study to the ASes which received the largest measurement coverage and which, therefore, presented the strongest blocking signals during the analysis period.
*   **Blocking signals.** As part of our data analysis, we mainly focused on signals that we considered more reliable and indicative of government-commissioned censorship, while excluding cases viewed as presenting weak signals (as discussed previously in the “Methods” section). As a result, we acknowledge the risk of potentially having missed some blocking cases in our findings (if those cases were annotated with weak signals as part of our data analysis).

## Findings

### Summary of Findings

Our [analysis](https://github.com/ooni/backend/issues/989) of [OONI data](https://ooni.org/data) collected globally from 1st November 2025 to 1st April 2026 reveals the **blocking of Women on Web domains in 7 countries**: Iran, Türkiye, the Philippines, South Korea, Spain, Kuwait, and Argentina.

In these countries, [OONI data](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&axis_x=measurement_start_day&since=2025-11-01&until=2026-04-01&time_grain=day&axis_y=probe_cc&domain=www.womenonweb.org) presents signs of government-commissioned censorship implemented by local Internet Service Providers (ISPs). However, the blocking signal in each of these countries varies, depending on how the block is implemented and the related measurement coverage.

The table below provides a summary of the findings.

| Country     | Domains affected                                                    | Networks affected                                                                                                                                                                                | Blocking methods                                                                 | OONI data                                                                                                                                                                                                   |
| ----------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Iran        | [www.womenonweb.org](http://www.womenonweb.org)                     | AS58224, AS197207, AS50810, AS44244, AS206065, AS48715, AS16322, AS31549, AS39501, AS202468, AS43754, AS49556, AS61173, AS210392, AS49100, AS57218, AS205647, AS24631, AS25124, AS42337, AS44208 | dns.bogon, tls.connection_reset                                                  | [Data](https://explorer.ooni.org/chart/mat?probe_cc=IR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) |
| Türkiye     | [www.womenonweb.org](http://www.womenonweb.org)                     | AS16135, AS34984, AS47524, AS34984,<br>AS12735,<br>AS9121                                                                                                                                        | tls.timeout, tls.connection_reset, DNS tampering                                 | [Data](https://explorer.ooni.org/chart/mat?probe_cc=TR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) |
| Philippines | [www.womenonweb.org](http://www.womenonweb.org)                     | AS4775, AS14593, AS9299,<br>AS14593, AS17693 AS132199 AS136797 AS139831                                                                                                                          | tls.bad_cert (through DNS poisoning – PAGCOR blockpage), dns.bogon, dns.nxdomain | [Data](https://explorer.ooni.org/chart/mat?probe_cc=PH&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) |
| South Korea | www.womenonweb.org, abortion-korea.org, abortion.kr, womenonweb.kr, | AS17858, AS4766, AS9318, AS9981                                                                                                                                                                  | tls.connection_reset, dns.bogon                                                  | [Data](https://explorer.ooni.org/chart/mat?probe_cc=KR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) |
| Spain       | [www.womenonweb.org](http://www.womenonweb.org)                     | AS12946, AS12430, AS12338, AS15704, AS6739, AS3352                                                                                                                                               | dns.bogon, tls.connection_reset                                                  | [Data](https://explorer.ooni.org/chart/mat?probe_cc=ES&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) |
| Kuwait      | [www.womenonweb.org](http://www.womenonweb.org)                     | AS42489, AS42961, AS9155                                                                                                                                                                         | tls.connection_reset                                                             | [Data](https://explorer.ooni.org/chart/mat?probe_cc=KW&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) |
| Argentina   | [www.womenonweb.org](http://www.womenonweb.org)                     | AS7303, AS22927                                                                                                                                                                                  | tcp.timeout, tcp.network_unreachable                                             | [Data](https://explorer.ooni.org/chart/mat?probe_cc=AR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) |

As evident from the table above, most of the [18 analyzed Women on Web domains](https://github.com/ooni/backend/issues/989) were found to be globally accessible. Women on Web’s primary domain (`www.womenonweb.org`) was the **only domain found to be blocked in 6 out of 7 countries** that showed signs of WoW domain blocking.

South Korea was the exception, where OONI data analysis revealed the [blocking of 3 additional WoW domains](https://explorer.ooni.org/chart/mat?probe_cc=KR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=domain&test_name=web_connectivity&domain=www.womenonweb.org%2Cabortion-korea.org%2Cwomenonweb.kr%2Cabortion.kr): `abortion-korea.org`, `abortion.kr`, and `womenonweb.kr`. The blocking of Korean-language domains suggests that ISPs in South Korea may be specifically seeking to restrict South Korean users’ access to Women on Web content. These domains were created by Women on Web to circumvent the blocking of its main website, which was [blocked in 2019](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/#south-korea). Women on Web’s main website [remains blocked](https://explorer.ooni.org/chart/mat?probe_cc=KR&since=2026-01-28&until=2026-05-28&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org) in South Korea, and they have since expanded WoW censorship to include additional domains. This pattern suggests that ISPs in South Korea are **actively and selectively enforcing censorship** of Women on Web content.

Overall, the blocking of Women on Web domains is observed on **multiple networks** in each of the 7 countries, providing confidence in the findings. Notably, the [blocking of Women on Web’s domain is automatically confirmed on most tested networks (21 ASes) in Iran](https://explorer.ooni.org/chart/mat?probe_cc=IR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) during the analysis period. In these cases, we are able to automatically confirm the blocking of `www.womenonweb.org` because [DNS resolution returns IP addresses](https://explorer.ooni.org/m/20251224224342.444175_IR_webconnectivity_dc8c8c35b86fd76f) (such as `10.10.34.35`) which are [commonly used](https://ooni.org/post/2025-iran-censorship-womens-rights/) in Iran for implementing censorship, and which are [included](https://github.com/ooni/blocking-fingerprints/blob/main/fingerprints_dns.csv) in [OONI’s blocking fingerprint database](https://github.com/ooni/blocking-fingerprints). Out of the 7 countries which present signs of Women on Web domain blocking, **Iran presented the strongest signal** because the block is both [automatically confirmed](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IR&only=confirmed) and [visible on most tested networks](https://explorer.ooni.org/chart/mat?probe_cc=IR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) (21 out of 25 tested ASes).

[DNS tampering](https://ooni.org/support/glossary/#dns-tampering) – when an ISP interferes with access to a website by returning the wrong IP address or an error indicating that the requested domain does not exist – is also observed in all other countries, except for Kuwait (where OONI data only shows [signs of TLS interference](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=KW&only=anomalies)) and Argentina (where we see signs of [temporary IP blocks](https://explorer.ooni.org/m/20251216043147.307525_AR_webconnectivity_3b8e978fec89e8e0)). In many of these cases, DNS resolution returns the bogon IP address `127.0.0.1`, instead of Women on Web’s IP address.

Normally, the IP address `127.0.0.1` **should never appear in the public internet** because it is [only meant for a machine to communicate with itself](https://ipinfo.io/127.0.0.1) (which is why it’s referred to as a “loopback address”, a “localhost”, and a “bogon”). When the testing of a website returns the private IP `127.0.0.1` instead of the actual IP address of a website, that is a strong signal of censorship. This IP is therefore [included in OONI’s blocking fingerprint database](https://github.com/ooni/blocking-fingerprints/blob/main/fingerprints_dns.csv) and used to automatically detect and confirm blocks. OONI data shows that this private IP (`127.0.0.1`) was used by ISPs to block access to Women on Web’s main website in [Iran](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IR&only=confirmed), [the Philippines](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=PH&only=anomalies), [South Korea](https://explorer.ooni.org/m/20260331115542.485198_KR_webconnectivity_949ae6aa7db830f8), and [Spain](https://explorer.ooni.org/m/20260331232726.046450_ES_webconnectivity_7d65baf1ecaf6ed6).

In other cases, DNS tampering was implemented by returning an NXDOMAIN error, which is used to indicate the fact that a domain name does not exist. OONI data shows that some ISPs in countries like [the Philippines](https://explorer.ooni.org/m/20260316015449.870367_PH_webconnectivity_f37c71fc8275e3bf) returned the NXDOMAIN error, **falsely indicating that the Women on Web domain does not exist**. But this pattern is not consistent across networks, as other ISPs in the Philippines [returned an IP address hosting a block page](https://explorer.ooni.org/m/20260305113642.874364_PH_webconnectivity_843b1e7774772f5d), transparently informing users that access to Women on Web’s website is blocked.

For example, OONI data from the Philippines [shows](https://explorer.ooni.org/m/20260305113642.874364_PH_webconnectivity_843b1e7774772f5d) the IP address `34.149.32.135` being returned as part of DNS resolution (instead of the IP address for `www.womenonweb.org`), which hosts the following [block page](https://ooni.org/support/glossary#block-page):

{{<img src="images/image9.png">}}

**Image:** Block page hosted on IP address `34.149.32.135`, returned as part of OONI Probe  testing of `www.womenonweb.org` in the Philippines on 5th March 2026 (source: [OONI data](https://explorer.ooni.org/m/20260305113642.874364_PH_webconnectivity_843b1e7774772f5d)).

In other words, some internet users in the Philippines encounter the “Access Restricted” page shown above when attempting to visit Women on Web’s main website. This notice is typically displayed by ISPs that use filtering infrastructure associated with the Philippine Amusement and Gaming Corporation (PAGCOR) to block access to websites, particularly those identified as illegal online gambling platforms. The appearance of this page on Women on Web’s website indicates that the site is being blocked through the same filtering mechanism.

Beyond DNS tampering, most OONI measurements suggest that **access to Women on Web’s main website is primarily blocked by means of TLS interference** across most countries. TLS interference is a technique used to restrict access to websites by disrupting the process through which a user's browser establishes a secure connection with a website. Rather than blocking access through a visible warning or by preventing access to a website's address outright (as discussed previously), the interference occurs during the initial exchange of encrypted messages (referred to as the “TLS handshake”) that enables secure communication. As a result, users may experience connection failures, security warnings, or an inability to load the website. Network measurement data can help identify this type of interference by detecting interruptions in the handshake process that are consistent with intentional blocking.

Most websites use HTTPS, which transmits data using the HTTP protocol secured by the TLS protocol. Before any data is exchanged, the user's browser and the website perform a TLS handshake—an initial exchange that verifies identities, negotiates encryption settings, and establishes a secure connection. The first message in this process is the ClientHello, which is sent by the user's browser and contains information about its security capabilities and preferences. This allows the browser and website to agree on how their communications will be encrypted and protected. The ClientHello also typically includes the name of the website being accessed, making it a potential target for network filtering and censorship systems that monitor internet traffic. In most HTTPS connections, this information is transmitted **before** the encrypted session is established and is therefore **visible** to network operators.

As a result, ISPs using Deep Packet Inspection (DPI) technology to monitor internet traffic can often identify when users attempt to access Women on Web’s website because the domain name `www.womenonweb.org` is typically visible in the TLS ClientHello message via the Server Name Indication (SNI) field, which is transmitted in unencrypted form before the secure connection is fully established. OONI data from this study shows that the connection is terminated (either through resets or timeouts) immediately after the ClientHello message, suggesting that interference occurs once the requested domain becomes visible in the traffic. These patterns are consistent with TLS interference, in which access to a website is disrupted by interfering with the establishment of a TLS connection, and they are observed for the blocking of Women on Web in [Iran](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IR&only=anomalies), [Türkiye](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=TR&only=anomalies), [South Korea](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=KR&only=anomalies), [Spain](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=ES&only=anomalies), and [Kuwait](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=KW&only=anomalies).

Beyond ISP-level blocking, OONI data also indicates that access to Women on Web has been blocked on certain networks in Poland, Kenya, Pakistan, and Georgia, with patterns consistent with filtering at the level of corporate or institutional firewalls. In these cases, the observed blocking does not indicate government-ordered censorship and instead reflects locally applied network policies within private or organizational networks.

Further details are shared for each of the countries in the following sections.

### Iran

Abortions in Iran are only permitted to save the pregnant person’s life, or in cases of fatal fetal diagnoses, if such abortions are approved by a [panel](https://www.ohchr.org/en/press-releases/2022/01/iran-repeal-crippling-new-anti-abortion-law-un-experts) consisting of a judge and multiple doctors. Iran has [publicly stated](https://apps.who.int/gb/statements/WHA77/PDF/Iran-11.7.pdf) that they have taken intentional actions to reduce the distribution of abortion medications outside of the formal medical system in Iran.

Women on Web has worked alongside Iranian feminist groups, like Me Too Iran, to facilitate access to abortion. Despite the censorship, people in Iran were able to access the support system of Women on Web via VPN and Starlink connections in large numbers. WoW made the decision to close service to Iran in mid-2025 following attacks on the country, as airstrikes and ongoing conflict disrupted the WoW’s ability to guarantee the delivery of medications to careseekers without significant delays.

While the Women on Web website was [not blocked in Iran in 2019](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/#iran) when we published our first report (at the time, the block was limited to the Women on Waves website), recent [OONI data](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=IR&test_name=web_connectivity&domain=www.womenonweb.org&failure=true&only=confirmed) shows that the website has now been censored on most networks in Iran.

The [first Women on Web censorship sighting](https://explorer.ooni.org/m/0120191109532aee30d2a5cac7dd113446e2daf1) in OONI data is visible on 9th November 2019 on the Asiatech (AS43754) network. In this measurement, we observe that the private IP address `10.10.34.35` (which is [known](https://ooni.org/post/2025-iran-censorship-womens-rights/) to be used in Iran for implementing government mandated censorship) is returned as part of DNS resolution (instead of the IP address for Women on Web’s website). As this IP is included in [OONI’s blocking fingerprint database](https://github.com/ooni/blocking-fingerprints/blob/main/fingerprints_dns.csv), the block was automatically detected and confirmed. Similarly, the [blocking of Women on Web’s website is automatically confirmed](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=IR&test_name=web_connectivity&domain=www.womenonweb.org&failure=true&only=confirmed) on several networks in Iran during the analysis period (between November 2026 to April 2025) where private IP addresses (`10.10.34.35` and `10.10.34.36`) are returned as part of DNS resolution.

In most cases, OONI data [shows](https://explorer.ooni.org/chart/mat?probe_cc=IR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) that the blocking of Women on Web’s website is primarily implemented by means of **DNS tampering** in Iran. The following chart aggregates our analysis of testing of `www.womenonweb.org` across multiple ASes in Iran between November 2025 and April 2026, showing that the majority of measurements returned DNS results containing bogon (non-routable or unallocated) IP addresses.

{{<img src="images/image27.png">}}

**Chart:** Aggregated analysis results from the OONI Probe testing of Women on Web (`www.womenonweb.org`) on multiple ASes in Iran between November 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=IR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org)).

The absence of measurements in January 2026, and the subsequent sharp decline in measurements from late February 2026 onwards, correlate with the timing of the internet connectivity shutdowns in Iran that are visible in [IODA](https://ioda.inetintel.cc.gatech.edu/country/IR?from=1767301330&until=1774990930&view=view1), [Cloudflare Radar](https://radar.cloudflare.com/ir?dateStart=2026-01-01&dateEnd=2026-03-31), and [Google traffic data](https://transparencyreport.google.com/traffic/overview?hl=en&fraction_traffic=start:1767139200000;end:1780617599999;product:19;region:IR&lu=fraction_traffic). In other words, because there was no (or very limited) internet connectivity during those times, people in Iran were unable to run [OONI Probe](https://ooni.org/install) tests and contribute measurements for publication.

The above chart also shows that in some cases, access to Women on Web was blocked by means of **TLS interference**. In these cases, OONI data shows that while DNS resolution returned the expected IP address and a TCP connection to the resolved IP was successfully established, the connection was [reset](https://explorer.ooni.org/m/20260220180752.514784_IR_webconnectivity_9d2626b4c0daf643) or [timed out](https://explorer.ooni.org/m/20260221132713.159898_IR_webconnectivity_4144f9c8d66d307e) after the ClientHello message during the TLS handshake.

Overall, the techniques observed in the [blocking of Women on Web](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=IR&test_name=web_connectivity&domain=www.womenonweb.org&failure=true&only=anomalies) are consistent with the [known censorship methods](https://ooni.org/post/2025-iran-censorship-womens-rights/) that are well-documented in Iran. Out of the 7 countries which present signs of Women on Web blocking, **Iran presented the strongest signal** because the block is both [automatically confirmed](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=IR&only=confirmed) and [visible on most tested networks](https://explorer.ooni.org/chart/mat?probe_cc=IR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) (21 out of 25 tested ASes).

### Türkiye

In Türkiye, abortion is legal upon request up to 10 weeks of gestation. After 10 weeks, abortion care is only allowed for threats to a pregnant person’s or fetus’ life or health. Many abortion seekers in Türkiye report significant systemic barriers to care, such as being denied abortion services in public hospitals and needing spousal consent if they are married. Only 5.1% of public hospitals and 50.4% of private hospitals [report](https://www.sciencedirect.com/science/article/pii/S0277539525001967) offering abortion care, and medication abortion is largely unavailable. Other barriers to access include lack of available information on abortion care, long distances to hospitals, and the price of abortion care in private hospitals. Many experts have pointed to a de facto abortion ban that severely restricts abortion access in practice.

In June of 2019, Women on Web’s website was blocked in Türkiye following an administrative decision of the Turkish Medicines and Medical Devices Agency, which was done without any prior notification. The Turkish government has also censored a localized anti-censorship website for Turkish care seekers that Women on Web created in response to the main website blockage. Currently, Women on Web is working with the [Freedom of Expression Association (İFÖD](https://ifade.org.tr/en/)) to challenge the website blockage in the Constitutional Court of Türkiye.

We first [reported](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/#turkey) on the blocking of Women on Web in Türkiye based on OONI data in 2019, and OONI data shows that the [block remains ongoing](https://explorer.ooni.org/chart/mat?probe_cc=TR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org). OONI data collected from the testing of `www.womenonweb.org` on [40 ASes in Türkiye](https://explorer.ooni.org/chart/mat?probe_cc=TR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) between 1st November 2025 to 1st April 2026 shows that the vast majority of measurements presented anomalies, as illustrated in the chart below.

{{<img src="images/image6.png">}}

**Chart:** Aggregated measurements from the OONI Probe testing of Women on Web (`www.womenonweb.org`) on 40 ASes in Türkiye between 1st November 2025 to 1st April 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=TR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org)).

Our [analysis](https://github.com/ooni/backend/issues/989) of these measurements shows that the testing of `www.womenonweb.org` presented signs of blocking on most tested networks in Türkiye, and that the testing resulted in multiple errors, as illustrated in the chart below. Most measurements presented TLS level errors, suggesting that access to Women on Web’s website is primarily blocked by means of **TLS interference** on most networks in Türkiye.

{{<img src="images/image31.png">}}

**Chart:** Aggregated analysis results from the OONI Probe testing of Women on Web (`www.womenonweb.org`) on multiple ASes in Türkiye between November 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=TR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org)).

In cases of TLS interference, OONI data shows that while DNS resolution returned the expected IP address and a TCP connection to the resolved IP was successfully established, the connection was [reset](https://explorer.ooni.org/m/20260330191304.480841_TR_webconnectivity_715b44aa7aab3759) or [timed out](https://explorer.ooni.org/m/20260331202242.033673_TR_webconnectivity_4dbf42441ab9d4c3) after the ClientHello message during the TLS handshake.

In other cases, OONI data shows that access to Women on Web is blocked by means of **DNS tampering**, as we observe DNS level interference returning IP addresses (`195.175.254.2` and `213.14.227.50`) that are operated by Turk Telekomunikasyon. The following chart shows the analysis results pertaining to OONI measurements from the testing of `www.womenonweb.org` in Türkiye with inconsistent DNS answers.

{{<img src="images/image12.png">}}

**Chart:** Analysis results pertaining to OONI measurements from the testing of `www.womenonweb.org` in Türkiye with inconsistent DNS answers between November 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=TR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org)). 

On [TurkNet (AS12735)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=TR&only=confirmed), the blocking of `www.womenonweb.org` is [automatically confirmed](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=TR&only=confirmed) because OONI data shows that DNS resolution returned the IP `195.175.254.2` (instead of the IP for `www.womenonweb.org`), which is included in [OONI’s blocking fingerprint database](https://github.com/ooni/blocking-fingerprints/blob/main/fingerprints_dns.csv). Meanwhile, our analysis shows that the IP `213.14.227.50` (operated by Turk Telekomunikasyon) is returned as part of DNS resolution when `www.womenonweb.org` was tested on [Turk Telekom (AS9121)](https://explorer.ooni.org/m/20260331051240.034771_TR_webconnectivity_9fb09085a225a98b) and [TTNET (AS47331)](https://explorer.ooni.org/m/20260327104244.726632_TR_webconnectivity_61f8264f378da433).

### Philippines

Abortion laws in the Philippines are some of the most restrictive in the world. Abortion is [banned](https://reproductiverights.org/wp-content/uploads/2018/08/pub_fac_philippines.pdf) without exceptions, and pregnant people and abortion providers face up to six years’ imprisonment for having or facilitating an abortion. The abortion law carries the deep colonial legacy of the country, as it was originally based on the Spanish Penal code of 1870, and it has not been updated for over 100 years.

Pregnant people in the Philippines, therefore, have little choice but to seek abortion care outside the formal medical system. Abortion seekers in the Philippines often report compounding barriers that limit their access to safe and reliable care, including financial constraints, lack of information about where to obtain abortion pills, and the risk of being scammed with counterfeit pills from unvetted sellers. Many have turned to Women on Web for support: **in 2025 alone, [WoW received over 10,000 requests for abortion pills](https://www.womenonweb.org/en/news/women-on-web-censored-in-the-philippines-cutting-off-thousands-from-essential-health-information/) from the Philippines, making the blocking of its site particularly harmful given the high volume of care seekers**.

In early December 2025, multiple care seekers wrote to Women on Web’s helpdesk saying that they could no longer access the website, the blocking of which is [corroborated by OONI data](https://explorer.ooni.org/chart/mat?probe_cc=PH&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org) collected from the Philippines. But OONI data suggests that the blocking of Women on Web’s main website may have [started as early as 5th January 2025](https://explorer.ooni.org/chart/mat?probe_cc=PH&since=2024-06-01&until=2025-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org), when a [spike in anomalies](https://explorer.ooni.org/search?since=2025-01-05&until=2025-03-06&probe_cc=PH&test_name=web_connectivity&domain=www.womenonweb.org&failure=true&only=anomalies) is recorded in the testing of `www.womenonweb.org` during those days.

Based on our analysis, the following chart aggregates OONI measurement analysis results from the testing of Women on Web (`www.womenonweb.org`) on [21 ASes](https://explorer.ooni.org/chart/mat?probe_cc=PH&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) in the Philippines between November 2025 to April 2026.

{{<img src="images/image17.png">}}

**Chart:** Aggregated analysis results from the OONI Probe testing of Women on Web (`www.womenonweb.org`) on 21 ASes in the Philippines between November 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=PH&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org)).

As is evident from the above chart, many measurements were successful (annotated in green as “OK”), suggesting that `www.womenonweb.org` is accessible on many of the [tested networks](https://explorer.ooni.org/chart/mat?probe_cc=PH&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) in the Philippines. However, OONI data also shows that access to `www.womenonweb.org` is [blocked on some networks](https://explorer.ooni.org/chart/mat?probe_cc=PH&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org), and that the **block is primarily implemented at the [DNS level](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=PH&only=anomalies)**.

Most DNS-based blocking responses observed in OONI measurements resolve to IP addresses associated with [block pages](https://ooni.org/support/glossary#block-page). The primary block pages [identified](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=PH&only=anomalies) are **blocked.sbmd.cicc.gov.ph** and **prohibitedaccess.globe.com.ph**. Since these block pages are also used to restrict access to websites that are not approved by Philippine Amusement and Gaming Corporation (PAGCOR), OONI data [suggests](https://explorer.ooni.org/m/20260113031642.996117_PH_webconnectivity_dd91ff3a3af4b653) that the blocking of Women on Web may be related to the same filtering mechanism.

Many OONI measurements show **DNS poisoning that redirects users to a block page with the wrong TLS certificate** (annotated in the above chart as `tls.bad_cert`). The `tls.bad_cert` measurements appear to result from DNS poisoning that redirects requests for the target website (`www.womenonweb.org`) to a [PAGCOR](https://www.pagcor.ph/) block page (illustrated below). Because the block page presents a TLS certificate that does not match the requested domain, the TLS handshake fails certificate validation, leading OONI to classify the measurement as `tls.bad_cert`.

OONI data from the Philippines, for example, [shows](https://explorer.ooni.org/m/20260305113642.874364_PH_webconnectivity_843b1e7774772f5d) the IP address `34.149.32.135` being returned as part of DNS resolution (instead of the IP address for `www.womenonweb.org`), which hosts the following block page:

{{<img src="images/image9.png">}}

**Image:** Block page hosted on IP address `34.149.32.135`, returned as part of OONI Probe testing of `www.womenonweb.org` in the Philippines on 5th March 2026 (source: [OONI data](https://explorer.ooni.org/m/20260305113642.874364_PH_webconnectivity_843b1e7774772f5d)).

In other words, some internet users in the Philippines encounter the “Access Restricted” page shown above when attempting to visit Women on Web’s main website. This notice is typically displayed by ISPs that use filtering infrastructure associated with the Philippine Amusement and Gaming Corporation (PAGCOR) to block access to websites, particularly those identified as illegal online gambling platforms. The appearance of this page on Women on Web’s website indicates that the site is being blocked through the same filtering mechanism.

The anomalous DNS responses do not appear to be limited to any specific resolver ASN. OONI measurements show injected DNS responses across a diverse set of resolver networks, including AS139831, AS138915, AS64666, AS57695, AS36236, AS15169, AS10139, AS9009, AS4775, and AS13335.

The plots below compare injected and legitimate DNS responses observed in OONI Probe measurements conducted from specific probe ASNs (AS132199 and AS9299), demonstrating that the block is limited to DNS poisoning.

{{<img src="images/image26.png">}}

**Charts:** Comparison of injected vs correct DNS responses in measurements collected from the OONI Probe testing of `www.womenonweb.org` on AS132199 in the Philippines between November 2025 to April 2026 (source: OONI data).

{{<img src="images/image3.png">}}

**Charts:** Comparison of injected vs correct DNS responses in measurements collected from the OONI Probe testing of `www.womenonweb.org` on AS9299 in the Philippines between November 2025 to April 2026 (source: OONI data).

Several particularly notable measurements [indicate](https://explorer.ooni.org/m/20251202165524.147074_PH_webconnectivity_aab9e098d530f94e) that connections to the IP addresses returned by the injected DNS responses present TLS certificates issued by "blocking-page-authority", while the Subject Alternative Name (SAN) continues to list `www.womenonweb.org`. **This suggests the presence of blocking infrastructure that intercepts requests while attempting to preserve the appearance of the original hostname**.

The TLS certificate chain metadata is shared below:

```
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            2d:9a:e9:8f:8b:f8:59:e5:19:9e:a9:35:fc:49:21:d1:bd:87:51:82
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: CN = blocking-page-authority
        Validity
            Not Before: Nov 28 15:14:26 2025 GMT
            Not After : Sep 17 15:14:26 2028 GMT
        Subject: CN = www.womenonweb.org
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (2048 bit)
                Modulus:
                    00:96:c4:ef:f1:2c:74:2c:9f:b4:cf:a8:3b:50:21:
                    42:c8:af:04:29:92:94:79:72:f1:b7:4e:41:ea:e6:
                    64:77:7c:f0:65:a5:95:34:12:1a:60:c7:b8:d6:7e:
                    8e:b8:dc:89:32:bc:b3:95:0b:de:c5:2e:ae:61:06:
                    de:67:cb:f4:f1:81:e8:6b:a9:20:6e:aa:ae:11:04:
                    a4:71:22:cd:fc:d8:50:0f:c3:9f:4e:07:8d:e8:94:
                    28:69:c8:f2:be:37:6a:f4:cc:4d:56:88:6f:43:62:
                    ee:22:78:1a:07:9e:3f:61:eb:ee:d4:b1:57:c6:ef:
                    7b:22:12:be:f4:58:a2:2f:8b:84:b4:18:0e:96:bf:
                    08:89:61:3b:16:99:09:38:0f:4b:56:ef:6a:dc:6e:
                    43:d8:48:78:b4:62:ee:86:7d:bb:98:4c:fb:51:70:
                    1f:aa:f1:d2:d8:f1:09:36:54:d5:c5:c7:dd:04:cb:
                    d5:f4:88:d9:f7:a5:c8:a7:53:35:c6:94:4b:85:82:
                    6f:36:2d:7d:3d:f1:58:4c:79:cf:50:39:d8:5e:3d:
                    75:39:d4:74:ea:0b:81:0f:5b:8b:e9:55:f2:a3:40:
                    39:71:02:c7:e3:88:ad:40:08:63:dd:97:db:31:bc:
                    ee:63:56:12:41:05:a8:e6:3d:43:df:e5:44:af:8c:
                    41:8b
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Subject Alternative Name: 
                DNS:www.womenonweb.org
            X509v3 Key Usage: critical
                Digital Signature, Key Encipherment
            X509v3 Extended Key Usage: 
                TLS Web Server Authentication, TLS Web Client Authentication
            X509v3 Basic Constraints: critical
                CA:FALSE
            X509v3 Subject Key Identifier: 
                AD:70:E0:24:82:83:4B:EA:37:31:22:9A:74:F9:46:86:1A:CB:49:58
            X509v3 Authority Key Identifier: 
                keyid:93:6F:00:58:F4:A7:A9:7F:59:BE:93:A2:A0:8D:7A:0F:A1:C7:4C:71
                DirName:/CN=blocking-page-authority
                serial:19:1E:A4:D0:1C:D3:0B:84:F8:37:74:DB:2A:58:70:AA:BA:72:58:24
    Signature Algorithm: sha256WithRSAEncryption
    Signature Value:
        60:1a:0b:eb:f4:c2:0e:b0:ce:79:cb:3d:93:99:f2:1d:bf:0d:
        08:63:b9:12:76:be:03:4d:49:c4:40:da:e9:00:29:d4:76:dd:
        a5:16:9a:e1:84:07:18:51:4a:76:f4:ac:12:17:8e:bb:c8:c6:
        89:d3:dd:1c:33:c9:3a:17:b8:08:4b:f7:ad:e7:a3:7f:8b:44:
        5b:c2:f1:57:f0:c5:94:77:01:92:b6:a5:f9:11:ed:65:ca:2c:
        da:cf:e8:8e:af:67:08:75:b9:57:66:d7:96:8a:d9:c1:e1:5a:
        f1:97:b5:fc:7e:0d:86:35:57:ae:c5:c6:ba:4f:ff:a9:2b:3f:
        9e:c4:dc:20:95:24:70:cb:df:b7:13:78:5c:94:5d:7c:aa:95:
        2b:37:00:99:16:5d:cf:8f:18:4b:39:b9:86:40:94:13:0f:70:
        d1:c6:e1:cd:f9:97:68:04:02:53:a1:20:97:c0:97:6e:c2:df:
        5c:3b:05:41:2b:05:61:ca:13:f6:14:cb:b0:17:02:ca:b6:e1:
        47:ee:8e:3a:b7:eb:48:67:1d:fc:da:c7:e3:03:df:f7:f9:b2:
        be:a0:62:79:4a:b4:b3:23:1a:42:90:ae:b1:18:a8:94:b5:85:
        7e:ba:08:81:fd:d0:cd:52:8d:ab:ee:38:16:23:87:34:9f:95:
        21:e2:b6:b8
```

In other cases, DNS tampering was implemented by returning an NXDOMAIN error, which normally appears when a domain does not exist. OONI data shows that some ISPs in the Philippines [returned the NXDOMAIN error](https://explorer.ooni.org/m/20260316015449.870367_PH_webconnectivity_f37c71fc8275e3bf), **falsely indicating that the Women on Web domain does not exist**. In this case, instead of the content of the Women on Web website, users would see something like the following:

{{<img src="images/image1.png">}}

**Image:** Example of a site presenting an NXDOMAIN error.
Because an NXDOMAIN error is intended to indicate that a website does not exist, using it to block access to Women on Web’s website may mislead users and create confusion about the reason the site is unavailable.

In response to the blocking of Women on Web in the Philippines, Venny Ala-Siurua, the Executive Director of Women on Web, [said](https://www.womenonweb.org/en/news/women-on-web-censored-in-the-philippines-cutting-off-thousands-from-essential-health-information/):

*“This is not the first time the Women on Web site has been censored, and we have launched a new website to continue disseminating information about safe self-managed abortion. Unfortunately, we have had to temporarily close our abortion pill service in the Philippines, but our help desk will stay open to support people. Censorship will not stop people from seeking abortions, and it is vital that they can continue to access accurate information as they source medication elsewhere.”*

### South Korea

In 2019, South Korea’s Constitutional Court said that criminalizing abortion was unconstitutional, and ordered a revision of the country’s laws by the end of 2020. The National Assembly failed to enact new abortion laws by the deadline, and in accordance with the court order, abortion was officially decriminalized nationwide on January 1, 2021.

To date, the country’s laws [have not been revised](https://www.straitstimes.com/asia/east-asia/debate-reignites-in-south-korea-over-legalisation-of-abortion-pills) to explicitly lay out the legality of abortion. Because of the lack of clear abortion laws, there are providers that refuse care to abortion seekers out of fear of legal consequences. Before this date, abortions were illegal in most circumstances with few exceptions. Four years after the decriminalization of abortion, mifepristone (one of the drugs used in medication abortions) is still not approved for use in South Korea, and access to this medication is at the center of debate for lawmakers.

In early 2019, the Korea Communications Standards Commission blocked access to Women on Web’s main website in South Korea. At the time, we [documented the block](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/#south-korea) based on OONI data. In response, Women on Web created an anti-censorship site to still be reachable by care seekers. After this anti-censorship site got blocked, the organization created additional sites in response to every instance of censorship:
*   `abortion-korea.org`
*   `abortion.kr` 
*   `womenonweb.kr` 
*   `women-on-web.kr`

Because of these blockages, the number of people accessing care through Women on Web’s sites have dropped steeply, but there are still some visitors to their Korean language sites. WoW is working with lawyers at [Open Net Korea](https://www.opennetkorea.org/), an organization that promotes internet freedom in South Korea, to work towards unblocking WoW’s websites through litigation in the national courts.

OONI data shows that access to Women on Web’s website has been [blocked in South Korea since January 2019](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/#south-korea), and that the [block remains ongoing](https://explorer.ooni.org/chart/mat?probe_cc=KR&since=2026-05-06&until=2026-06-06&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org) more than 7 years later. The following [chart](https://explorer.ooni.org/chart/mat?probe_cc=KR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=domain&test_name=web_connectivity&domain=www.womenonweb.org%2Cabortion-korea.org%2Cwomenonweb.kr%2Cabortion.kr%2Cwomen-on-web.kr) aggregates OONI measurement coverage from the testing of Women on Web’s main website (`www.womenonweb.org`) and the 4 additional sites set up for censorship circumvention (`abortion-korea.org`, `womenonweb.kr`, `abortion.kr`, `women-on-web.kr`) on all tested networks in South Korea during the analysis period (between 1st November 2025 to 1st April 2026).

{{<img src="images/image8.png">}}

**Chart:** Aggregated OONI measurement coverage for the testing of Women on Web domains (`www.womenonweb.org`, `abortion-korea.org`, `womenonweb.kr`, `abortion.kr`, `women-on-web.kr` ) on all tested networks in South Korea between 1st November 2025 to 1st April 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=KR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=domain&test_name=web_connectivity&domain=www.womenonweb.org%2Cabortion-korea.org%2Cwomenonweb.kr%2Cabortion.kr%2Cwomen-on-web.kr)).

As is evident from the above chart, most measurements for Women on Web’s main website (`www.womenonweb.org`), as well as for 3 additional Women on Web domains (`abortion-korea.org`, `womenonweb.kr`, `abortion.kr`), presented anomalies throughout the testing period, providing a strong signal of blocking. The only exception was the domain `women-on-web.kr`, the testing of which indicated that it was accessible on tested networks in South Korea during the testing period.

However, subsequent OONI measurements collected after our analysis period (November 2025 to April 2026) suggest that access to `women-on-web.kr` was [blocked in South Korea as well](https://explorer.ooni.org/chart/mat?probe_cc=KR&since=2026-04-01&until=2026-06-06&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=women-on-web.kr), as illustrated below.

{{<img src="images/image30.png">}}

**Chart:** Aggregated OONI measurement coverage for the testing of `women-on-web.kr` in South Korea between 1st April 2026 to 5th June 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=KR&since=2026-04-01&until=2026-06-06&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=women-on-web.kr)).

The above chart shows that the OONI Probe testing of `women-on-web.kr` started presenting a persistent volume of anomalies from 27th April 2026 onwards, suggesting that ISPs in South Korea started blocking access to the site around that date. A breakdown of the [per-network measurement coverage](https://explorer.ooni.org/chart/mat?probe_cc=KR&since=2026-04-01&until=2026-06-06&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=women-on-web.kr) shows a spike in anomalies on multiple ASes, suggesting that the block has been implemented on many networks in South Korea.

To characterize the blocks, we [analyzed](https://github.com/ooni/backend/issues/989) relevant OONI measurements. The following chart aggregates our analysis results from the OONI Probe testing of Women on Web domains on multiple networks in South Korea between November 2025 to April 2026.

{{<img src="images/image22.png">}}

**Chart:** Aggregated analysis results from the OONI Probe testing of Women on Web domains on all tested networks in South Korea between November 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=KR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org)).

As is evident from the above chart, the vast majority of measurements presented anomalies and, therefore, a strong signal of blocking on most tested networks in South Korea. Notably, the majority of measurements [presented TLS connection reset errors](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=KR&only=anomalies), suggesting that access to Women on Web domains is blocked primarily by means of **TLS interference**. Specifically, OONI data shows that while DNS resolution returned the expected IP address and a TCP connection to the resolved IP was successfully established (thereby excluding the possibility of transient network failures), the connection was [reset](https://explorer.ooni.org/m/20260331182727.172566_KR_webconnectivity_68796e8d6e5f4e29) after the ClientHello message during the TLS handshake.

ONI data [shows](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=KR&only=anomalies) that the blocking of Women on Web domains through TLS connection resets is visible on major ASes in South Korea, including AS17858, AS4766, AS9318 and AS9981. This technique is commonly used by ISPs around the world to restrict access to websites by disrupting the process through which a user's browser establishes a secure connection with a website. Implementing censorship in this way usually requires the use of Deep Packet Inspection (DPI) technology to monitor internet traffic and selectively terminate connections for specific domains.

This pattern is consistent across networks, and is visible when disaggregating OONI measurement coverage by AS. The following charts, for example, show consistent TLS connection resets in almost all measurements collected from the OONI Probe testing of Women on Web domains on each network.

{{<img src="images/image5.png">}}

**Chart:** Analysis results from the OONI Probe testing of Women on Web domains on AS9318 in South Korea between November 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=KR&probe_asn=AS9318)).

{{<img src="images/image15.png">}}

**Chart:** Analysis results from the OONI Probe testing of Women on Web domains on AS4766 in South Korea between November 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=KR&probe_asn=AS4766)).

Overall, the blocking of Korean-language domains suggests that ISPs in South Korea may be specifically seeking to restrict South Korean users’ access to Women on Web content. These domains were created by Women on Web to circumvent the blocking of its main website, which was [blocked in 2019](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/#south-korea). Women on Web’s main website [remains blocked](https://explorer.ooni.org/chart/mat?probe_cc=KR&since=2026-01-28&until=2026-05-28&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org) in South Korea, and they have since expanded WoW censorship to include additional domains. This pattern suggests that ISPs in South Korea are **actively and selectively enforcing censorship** of Women on Web content.

### Spain

Although abortion is broadly legal upon request up to 14 weeks of gestation in Spain, and available up to 22 weeks if the pregnant person’s or fetus’ health or life is at risk, abortion seekers face many barriers to care. These include encountering medical professionals who refuse to provide abortion care on grounds of conscientious objection, a lack of facilities that provide abortion care, and a lack of access to information on how to receive abortion care.

In February 2020, access to the Women on Web site was blocked by the Spanish Agency of Medical Products and Medical Devices. Soon after, WoW launched a sibling site called comoabortar.org to reach care seekers in Spain. To challenge the website blockage, Women on Web partnered with [Women’s Link Worldwide](https://womenslinkworldwide.org/en/) to file a lawsuit to overturn the blockage of their main website.

In October 2022, the Spanish Supreme Court issued a ruling allowing the [partial](https://www.womenonweb.org/en/news/women-on-webs-website-remains-censored-despite-the-supreme-court-ruling-to-unblock-the-website/) [unblocking](https://www.womenonweb.org/en/news/women-on-webs-website-remains-censored-despite-the-supreme-court-ruling-to-unblock-the-website/) of Women on Web’s site, as the court required that the page of the site where users could carry out consultations for abortion pills remain blocked. The court’s ruling acknowledged the importance of access to abortion information online through WoW’s website, which was deeply significant. However, soon after, the Spanish government informed Women on Web that it is technically challenging to unblock separate sections of the website, and therefore the full blockage of the site would remain in force. Today, the blockage remains in place after exhausting all legal pathways in the Spanish courts, so Women’s Link Worldwide will soon file an application on behalf of WoW in the European Court of Human Rights to pursue the unblocking of the main WoW website.

The blocking of Women on Web in Spain is corroborated by OONI data, which [shows](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&axis_x=measurement_start_day&since=2019-05-26&until=2020-05-26&time_grain=day&probe_cc=ES&domain=www.womenonweb.org) that the block has been in place on many networks since early February 2020. We [reported on this block back in May 2020](https://ooni.org/post/2020-engine-evaluation-spain/) as part of our evaluations of our new experiments and measurement engine. At the time, we determined that the block was implemented by means of SNI filtering, which is a way of blocking websites by reading the website’s name during the early stage of a secure connection and stopping access before the page loads.

Today, six years later, access to Women on Web’s website (`www.womenonweb.org`) [remains blocked](https://explorer.ooni.org/chart/mat?probe_cc=ES&since=2026-04-26&until=2026-05-26&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org) on multiple networks in Spain. This is evident through [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=ES&since=2026-04-26&until=2026-05-26&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org), which is collected by [OONI Probe](https://ooni.org/install) users in Spain and published by OONI as [open data](https://ooni.org/data). [OONI Probe](https://ooni.org/install) is free and open source software that is run daily by volunteers in [most countries](https://explorer.ooni.org/countries), including [Spain](https://explorer.ooni.org/country/ES). It includes a variety of [experiments](https://ooni.org/nettest/), including the [Web Connectivity test](https://ooni.org/nettest/web-connectivity/) designed to measure the blocking of websites.

This [test](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md) runs a series of checks ([DNS lookup](https://ooni.org/support/glossary/#dns-lookup), [TCP connection](https://ooni.org/support/glossary/#tcp), [TLS](https://ooni.org/support/glossary/#tls) handshake, and [HTTP(S) request](https://ooni.org/support/glossary/#http-request)) both from a known uncensored network (the “control”) and from the user’s local network. The results are then automatically compared. If they match, the website is considered accessible. If they differ, an “[anomaly](https://ooni.org/support/interpreting-ooni-data/#anomalies)” is recorded, suggesting that access to the website may be interfered with. The type of mismatch helps identify how the blocking is being carried out. Access to Women on Web’s website (`www.womenonweb.org`) has been [measured regularly](https://explorer.ooni.org/chart/mat?probe_cc=ES&since=2024-04-26&until=2026-05-26&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org) over the last years on multiple networks in Spain.

Based on our [analysis](https://github.com/ooni/backend/issues/989) of OONI measurements collected from Spain, the following chart aggregates the results for all Women on Web domains tested in Spain between November 2025 to April 2026.

{{<img src="images/image23.png">}}

**Chart:** Aggregated view of OONI data analysis results from the testing of Women on Web domains on multiple networks in Spain between November 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=ES&since=2025-11-11&until=2026-04-11&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org)).

As is evident from the above chart, the majority of measurements presented [anomalies](https://ooni.org/support/interpreting-ooni-data/#anomalies), suggesting that access to Women on Web was blocked on most tested networks in Spain during the analysis period. It’s worth noting though that some measurements throughout this period were successful (annotated in green as “OK”), indicating that the block is not implemented on all networks in Spain.

During the date range of analysis, a [per-network breakdown of the measurement coverage](https://explorer.ooni.org/chart/mat?probe_cc=ES&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) (pertaining to the OONI Probe testing of `www.womenonweb.org` in Spain) shows that out of 69 tested networks, the largest volume of anomalies – and, therefore, the strongest signals of blocking – are observed on the following 5 networks: [Telefónica de España, S.A.U. (AS3352)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=3352&domain=www.womenonweb.org&failure=true), [Xtra Telecom (AS15704)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=AS15704&domain=www.womenonweb.org&failure=true), [Vodafone Espana (AS12430)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=AS12430&domain=www.womenonweb.org&failure=true), [Vodafone ONO (AS6739)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=AS6739&domain=www.womenonweb.org&failure=true), and [Orange Espagne (AS12479)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=AS12479&domain=www.womenonweb.org&failure=true).

In most cases, OONI data shows that the blocking of Women on Web is implemented by means of **TLS interference** because the [connection is reset](https://explorer.ooni.org/m/20260331235602.754634_ES_webconnectivity_c74ca391239a7496) after the ClientHello message during the TLS handshake (which is consistent with TLS based interference observed in our [2020 study](https://ooni.org/post/2020-engine-evaluation-spain/)). This means the connection is cut off right after the browser tries to start a secure connection to the website, before any content can be exchanged. This pattern of interference is particularly visible on [Telefónica de España, S.A.U. (AS3352)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=3352&domain=www.womenonweb.org&failure=true) where almost all measurements throughout the analysis period consistently presented TLS connection reset errors, as illustrated in the following chart.

{{<img src="images/image4.png">}}

**Chart:** Analysis results from the testing of Women on Web domains on Telefónica de España, S.A.U. (AS3352) in Spain between December 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=3352&domain=www.womenonweb.org&failure=true)).

Interestingly, almost all OONI measurements from the testing of Women on Web on [Vodafone ONO (AS6739)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=AS6739&domain=www.womenonweb.org&failure=true) and [Vodafone Espana (AS12430)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=AS12430&domain=www.womenonweb.org&failure=true) presented a **bad TLS certificate** up until early February 2026, as illustrated through the following two charts.

{{<img src="images/image24.png">}}

**Chart:** Analysis results from the OONI Probe testing of Women on Web domains on Vodafone Espana (AS12430) in Spain between December 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=AS12430&domain=www.womenonweb.org&failure=true)).

{{<img src="images/image16.png">}}

**Chart:** Analysis results from the OONI Probe testing of Women on Web domains on Vodafone ONO (AS6739) in Spain between December 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=AS6739&domain=www.womenonweb.org&failure=true)).

On both Vodafone networks ([AS6739](https://explorer.ooni.org/m/20251219154750.115480_ES_webconnectivity_5bfcb3ab585ddf0b) and [AS12430](https://explorer.ooni.org/m/20251212233809.195802_ES_webconnectivity_70f05a0c252e1f2f)), OONI Probe testing of Women on Web domains recorded `tls.bad\_cert` measurements (annotated in orange in the above charts), indicating that the TLS handshake resulted in a certificate that was invalid, unexpected, or untrusted. In practical terms, this means the secure connection could not be properly established because the certificate presented during the handshake did not match what the browser would normally expect, suggesting interference with the connection. **Because the IP address that was resolved to via DNS was in reality correct, this is indicative of the fact that a man-in-the-middle (MitM) attack is being carried out by these providers, which has an impact on the web security of these users.** These findings are consistent with abnormal TLS behavior that can occur when network-level filtering, inspection, or interception systems interact with HTTPS traffic.

Notably, OONI measurements showing [invalid TLS certificates](https://explorer.ooni.org/m/20251219154750.115480_ES_webconnectivity_5bfcb3ab585ddf0b) for Women on Web include a common TLS certificate issued by [Allot](https://www.allot.com/), a commercial provider of network security and traffic management technologies. The repeated appearance of this [Allot-issued certificate in OONI measurements](https://explorer.ooni.org/m/20251212233809.195802_ES_webconnectivity_70f05a0c252e1f2f) suggests that ISP-deployed filtering infrastructure actively interfered with the TLS handshake when users attempted to access Women on Web’s website. These results are consistent with the use of Deep Packet Inspection (DPI) or TLS interception systems.

The TLS certificate metadata is shared below for reference:  
  
```
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number: 1 (0x1)
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: C = ES, ST = Madrid, L = Madrid, O = Allot, OU = Allot, CN = allot.com/emailAddress=info@allot.com
        Validity
            Not Before: Dec 16 13:07:49 2016 GMT
            Not After : Dec 16 13:07:49 2026 GMT
        Subject: C = ES, ST = Madrid, L = Madrid, O = Allot, OU = Allot, CN = allot.com/emailAddress=info@allot.com
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (2048 bit)
                Modulus:
                    00:b5:c9:1d:c0:f6:a4:95:6e:e5:01:4c:ff:8e:31:
                    67:78:f5:1e:18:d1:b4:c3:d1:35:6a:32:ea:e1:46:
                    4e:be:89:75:11:24:5d:89:55:c9:86:3e:37:ff:83:
                    6d:bc:51:a2:c3:4b:a3:0f:08:7c:2b:9c:44:ae:d6:
                    97:c7:e5:be:2e:4d:32:c3:6b:97:01:30:6d:76:fa:
                    f7:a5:d0:e3:73:13:63:51:56:25:ea:28:ac:d2:5c:
                    60:29:f7:f4:d9:fb:0b:1d:d2:ef:cb:d8:49:5f:4f:
                    30:b0:11:7a:34:a5:bd:61:eb:4c:e9:6c:e7:0e:c5:
                    b3:b6:e7:1f:83:c6:b5:41:a5:31:17:3c:07:c4:a8:
                    d3:69:5f:7e:44:ed:73:a2:c5:20:53:a4:48:67:00:
                    49:ad:79:f2:24:f7:8c:75:b0:de:4b:bf:96:5c:80:
                    10:4f:55:a5:7e:27:11:72:40:30:e1:55:fb:97:dd:
                    00:55:7c:e7:83:e2:9f:f9:21:2b:b0:3d:03:b4:e8:
                    8c:4b:f9:da:c1:af:f4:b5:6e:b0:85:de:b3:99:26:
                    82:b4:f2:60:df:b1:01:a7:70:50:92:97:67:46:f4:
                    42:b0:6f:61:d5:a5:a4:05:47:45:35:bd:26:35:b9:
                    c7:0c:fd:1d:99:6a:c3:64:41:4a:36:6a:5e:0b:a2:
                    e6:91
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Key Usage: critical
                Certificate Sign, CRL Sign
            X509v3 Basic Constraints: critical
                CA:TRUE
            X509v3 Subject Key Identifier: 
                A8:BC:2A:1D:0D:1A:D2:67:29:79:BA:97:0B:1F:50:2F:58:9B:AA:F7
            X509v3 Authority Key Identifier: 
                A8:BC:2A:1D:0D:1A:D2:67:29:79:BA:97:0B:1F:50:2F:58:9B:AA:F7
    Signature Algorithm: sha256WithRSAEncryption
    Signature Value:
        72:6c:1a:46:ef:fa:61:a1:30:77:dc:e7:3d:54:64:6b:07:d2:
        b9:15:d1:4f:ad:97:fe:a1:c2:eb:72:30:73:ce:b6:f1:c2:c0:
        ad:f4:91:e4:aa:88:8c:fc:13:48:2b:c2:43:00:89:2e:08:af:
        5c:39:da:17:c9:07:42:67:77:15:af:d6:b0:53:93:98:00:e4:
        04:ab:ba:1b:0d:29:c8:2f:84:38:1f:b9:50:70:4b:0e:c8:2d:
        7f:70:92:5e:49:d8:4b:bf:7b:0d:d3:44:1f:25:0c:ee:d7:5f:
        80:c5:d2:9d:8b:d4:3c:99:97:ea:f4:1d:20:7d:36:04:07:e2:
        42:3b:1d:2c:56:d2:8a:37:e1:bb:be:4b:fb:b7:c9:c3:19:d5:
        18:e3:cf:35:4a:b4:8e:52:eb:27:55:cf:6a:8a:56:a8:6e:4b:
        0b:85:26:79:dd:a0:a8:eb:cc:ca:61:c2:b6:8d:70:a4:93:2f:
        22:23:ef:b1:4a:d4:85:2d:8a:2b:e9:ad:79:35:e7:f9:6b:96:
        7a:0a:fb:32:25:ac:2c:d1:fd:89:79:a4:16:03:8d:bd:55:85:
        32:d4:07:39:bc:b8:d5:7f:76:56:10:a8:fc:a0:64:57:ca:f0:
        09:7f:a7:58:2b:20:b5:d6:50:79:9d:39:a5:17:f8:0a:16:96:
       2b:4a:0c:9a
```

It seems to be a root or intermediate certificate authority (CA) certificate, which can occur when traffic is being inspected or routed through systems such as VPNs or network security filters. Because it appears across both mobile and desktop tests, it is more likely related to the network environment rather than a single device configuration.

Across OONI Probe measurements, `tls.bad_cert` results and the detection of a root or intermediate CA certificate suggest that encrypted connections to the Women on Web website were not behaving normally. The `tls.bad_cert` result indicates that the secure connection failed because the certificate presented during the connection was invalid or untrusted. At the same time, the presence of a root or intermediate CA certificate suggests that a network security system was positioned between the user and the website and potentially inspecting or mediating encrypted traffic. Taken together, these findings are consistent with possible network-level interference with secure connections.

On both Vodafone networks (AS6739 and AS12430), OONI data shows a **shift** from `tls.bad_cert` to `tls.connection_reset` in most measurements from February 2026 onwards (as illustrated in the previous charts). This suggests that the networks **changed their blocking approach** over time, from interfering with and altering the TLS handshake to more directly terminating the connection before it could be established.

While TLS interference is observed on most networks, OONI data shows that access to `www.womenonweb.org` on [Orange Espagne (AS12479)](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&probe_cc=ES&test_name=web_connectivity&probe_asn=12479&domain=www.womenonweb.org&failure=true&only=anomalies) is blocked by means of **DNS tampering**. On this network, OONI data [shows](https://explorer.ooni.org/m/20260331232726.046450_ES_webconnectivity_7d65baf1ecaf6ed6) that the domain name is resolved to the local loopback address `127.0.0.1` – meaning it is redirected to the user’s own device – rather than to the actual IP address of the Women on Web website.

### Kuwait

Abortion in Kuwait is [banned](https://reproductiverights.org/maps/world-abortion-laws/?country=KWT) except in cases where the pregnant person’s health is in danger or if there are severe fetal abnormalities.

Investigating the censorship of abortion related information in Kuwait based on OONI data is quite challenging, given that Kuwait generally receives [very limited measurement coverage](https://explorer.ooni.org/country/KW) in comparison to [other countries](https://explorer.ooni.org/countries) (i.e very few [OONI Probe](https://ooni.org/install) users run tests and contribute measurements from Kuwait). Yet, despite the limited measurement coverage (which is an important limitation to the findings), OONI data provides [signals of potential Women on Web blocking](https://explorer.ooni.org/chart/mat?probe_cc=KW&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org&data=analysis) in Kuwait.

The following chart aggregates the analysis outcomes of OONI measurement coverage from the testing of Women on Web’s website (`www.womenonweb.org`) on 4 ASes in Kuwait between 1st November 2025 to 1st April 2026.

{{<img src="images/image2.png">}}

**Chart:** OONI Pipeline v5 analysis outcomes of OONI Probe testing of `www.womenonweb.org` on 4 ASes in Kuwait between 1st November 2025 to 1st April 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?data=analysis&probe_cc=KW&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org)).

As is evident from the above chart, most measurements presented TLS connection reset errors, suggesting that access to `www.womenonweb.org` was blocked in Kuwait by means of **TLS interference**. Specifically, OONI data [shows](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=KW&only=anomalies) that while DNS resolution returned the expected IP address and a TCP connection to the resolved IP was successfully established, the connection was [reset](https://explorer.ooni.org/m/20260103180818.047385_KW_webconnectivity_777347abbf9eea19) after the ClientHello message during the TLS handshake.

The blocking of Women on Web is further suggested by a [per-network measurement breakdown](https://explorer.ooni.org/chart/mat?data=analysis&probe_cc=KW&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org) which shows relatively consistent signals on each tested AS.

{{<img src="images/image20.png">}}

**Chart:** OONI Pipeline v5 analysis outcomes disaggregated by AS for the OONI Probe testing of `www.womenonweb.org` in Kuwait between 1st November 2025 to 1st April 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?data=analysis&probe_cc=KW&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org)).

The first instance of such a TLS connection reset error is [visible in OONI data](https://explorer.ooni.org/m/20250329025828.114798_KW_webconnectivity_7931a75b40c51d29) on 29th March 2025, suggesting that access to Women on Web’s website may have been blocked in Kuwait since early 2025. The limited measurement coverage, though, limits our ability to pinpoint the precise blocking date and to confirm the block with confidence. It’s worth noting though that OONI data suggests that Women on Web’s Arabic site `ijhad.org` (set up to circumvent the blocking of their main site) is currently [accessible](https://explorer.ooni.org/chart/mat?probe_cc=KW&since=2025-11-01&until=2026-06-06&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=ijhad.org) in Kuwait.

### Argentina

Abortion in Argentina is available upon request up to 14 weeks’ gestation following the legalization of abortion in 2020. After 14 weeks, abortion is permitted if the pregnancy was a result of rape or if it poses risks to the life or health of the pregnant person. Since the election of Javier Milei in 2023, policy changes and funding cuts by the national government to the health system have reduced support for abortion care services, such as halting the purchase of abortion medications and shifting this responsibility to under-resourced or anti-abortion provincial systems.

Unlike the other countries discussed in this study, [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=AR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org) suggests that the blocking of Women on Web in Argentina was only **temporary** and that the block was implemented in a different way. Specifically, OONI measurements from the testing of `www.womenonweb.org` [show](https://explorer.ooni.org/m/20251216043147.307525_AR_webconnectivity_3b8e978fec89e8e0) TCP connection timeouts, suggesting possible interference at the **TCP/IP layer**. These TCP connection timeout errors began around mid-December 2025 and ended around mid-January 2026, suggesting that the block only lasted for about a month. All tested Women on Web domains have been found accessible in Argentina thereafter.

The results of our analysis are aggregated in the chart below.

{{<img src="images/image7.png">}}

**Chart:** Analysis results from the OONI Probe testing of Women on Web’s main website (`www.womenonweb.org`) in Argentina between November 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=AR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org)).

Out of [26 ASes](https://explorer.ooni.org/chart/mat?probe_cc=AR&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&axis_y=probe_asn&test_name=web_connectivity&domain=www.womenonweb.org), the testing of `www.womenonweb.org` only presented signs of blocking on two networks: Telefonica de Argentina (AS22927) and Telecom Argentina (AS7303). The following charts aggregate our analysis results for each of these two networks.

{{<img src="images/image33.png">}}

**Chart:** Analysis results from the OONI Probe testing of Women on Web’s main website (`www.womenonweb.org`) on Telefonica de Argentina (AS22927) between November 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=AR&probe_asn=AS22927&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org)).

{{<img src="images/image14.png">}}

**Chart:** Analysis results from the OONI Probe testing of Women on Web’s main website (`www.womenonweb.org`) on Telecom Argentina (AS7303) between November 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=AR&probe_asn=AS7303&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org)).

The observation of [TCP connection timeouts](https://explorer.ooni.org/m/20251216043147.307525_AR_webconnectivity_3b8e978fec89e8e0) for the same domain (`www.womenonweb.org`) on two independent networks during the same time period, while [other websites tested on those networks remained accessible](https://explorer.ooni.org/chart/mat?probe_cc=AR&probe_asn=AS7303&since=2025-12-01&until=2026-03-01&time_grain=day&axis_x=measurement_start_day&axis_y=domain&test_name=web_connectivity), makes it less likely that the timeouts were caused by transient network failures.

Additional analysis of measurements from the affected probe ASNs targeting IPs within the same Hetzner network shows that, while the majority of measurements targeting the Hetzner network were successful, there are also other failures related to some other services also hosted on Hetzner during the same period of time. As a result, the available evidence does not allow us to conclusively determine whether Women on Web was the intended target of the blocking or whether its unavailability was the result of collateral damage stemming from the blocking of other services hosted on the same Hetzner network.

### Corporate firewall blocks

Beyond ISP-level blocking, our [analysis](https://github.com/ooni/backend/issues/989) of OONI data also identified cases where Women on Web’s website was inaccessible due to corporate firewall filtering in several countries. In these instances, the available evidence does *not* suggest blocking by ISPs as part of government-directed censorship. Rather, the observed restrictions appear to stem from **filtering policies implemented by corporate firewall products** or network administrators.

The following sections present examples of corporate firewall filtering that impacted access to Women on Web’s website in Poland, Kenya, Pakistan, and Georgia.

#### Poland

Poland has one of the most restrictive abortion laws in Europe: abortion is banned in almost all cases, except in cases of rape or if there is a threat to the pregnant person’s life or health. Anyone who assists or provides a pregnant person with an abortion faces years of prison time.

While Women on Web’s primary website remains [accessible](https://explorer.ooni.org/chart/mat?probe_cc=PL&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org), a secondary domain created as a backup access pathway, `aborcja-polska.org`, appears to be [blocked](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=aborcja-polska.org&probe_cc=PL&only=anomalies). OONI measurements from [AS211528](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=aborcja-polska.org&probe_cc=PL&only=anomalies&probe_asn=AS211528) show TLS certificate validation (`bad_cert`) errors. The peer certificates observed during TLS handshakes indicate the presence of **Fortinet filtering infrastructure** on the network path, suggesting that requests to the domain are being intercepted and blocked.

{{<img src="images/image10.png">}}

**Chart:** OONI measurements collected from the testing of `aborcja-polska.org` on AS211528 in Poland between November 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=aborcja-polska.org&probe_cc=PL&only=anomalies&probe_asn=AS211528)).

We also observe TLS certificate validation (`bad_cert`) errors on [AS196802](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=aborcja-polska.org&probe_cc=PL&only=anomalies&probe_asn=AS196802). In these measurements, DNS resolution intermittently [returns](https://explorer.ooni.org/m/20260107014715.832657_PL_webconnectivity_308c4bc976ac6d4b) the IP address `3.215.231.251`, which is associated with Amazon.com, Inc. and appears to host [Infoblox](https://community.infoblox.com/kb/articles/32192-april-2025) infrastructure. The inconsistency of this result suggests that it may not correspond to the intended destination.

#### Kenya

In April 2026, a Kenyan Court overturned a 2022 ruling that had previously expanded abortion access. Now, abortion is illegal under the [penal code](https://reproductiverights.org/maps/provision/kenyas-abortion-provisions/) unless a medical professional deems that is necessary for the life or the health of the pregnant person, or if it is “permitted by any other written law”.

Our analysis of [OONI measurements from Kenya](https://explorer.ooni.org/chart/mat?probe_cc=KE&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org) identifies both [DNS anomalies and TLS interference](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=KE&only=anomalies), primarily on AS37061. In some cases, DNS responses [return](https://explorer.ooni.org/m/20260117120816.314552_KE_webconnectivity_668d906488fca4fd) the IP address `208.91.112.55`, which is inconsistent with control measurements and appears to present **Fortinet-issued certificates**. In other cases, DNS resolution matches the control, but connections nonetheless encounter TLS certificate validation failures and evidence of TLS interception by Fortinet infrastructure. These observations suggest that network filtering may be implemented through both DNS-based and TLS-based mechanisms.

The chart below presents [measurements from AS37061](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=KE&probe_asn=AS37061), disaggregated according to whether DNS responses were altered or consistent with the control measurements.

{{<img src="images/image32.png">}}

**Chart:** OONI measurements from the testing of `www.womenonweb.org` on AS37061, disaggregated according to whether DNS responses were altered or consistent with the control measurements (source: [OONI data](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=KE&probe_asn=AS37061)).

#### Pakistan

Abortion in Pakistan is [illegal](https://www.guttmacher.org/fact-sheet/abortion-and-postabortion-care-pakistan) except to save a pregnant person’s life or to provide “necessary treatment” early in their pregnancy. These vague laws lead to many pregnant people pursuing unsafe methods of abortion, and in 2023 it was estimated that nearly 700,000 people across Pakistan received treatment for abortion complications.

We observe TLS certificate validation failures in measurements from Pakistan, primarily on [AS23674](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=PK&probe_asn=AS23674&only=anomalies). The peer certificates observed during TLS handshakes indicate the presence of **Fortinet infrastructure** on the network path, suggesting that requests to the website may be intercepted and filtered. The chart below presents [OONI measurements](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=PK&probe_asn=AS23674) from Pakistan collected on AS23674.

{{<img src="images/image28.png">}}

**Chart:** OONI measurements collected from the testing of `www.womenonweb.org` on AS23674 in Pakistan between November 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/search?since=2025-11-01&until=2026-04-01&failure=false&domain=www.womenonweb.org&probe_cc=PK&probe_asn=AS23674)).

#### Georgia

Abortion is permitted upon request in Georgia up to 12 weeks gestation. If an abortion seeker can find a care provider, they still face a mandatory five-day waiting period before their procedure and high cost of care, among other obstacles.

We observe DNS anomalies in measurements from Georgia, where DNS responses for the tested domain [return](https://explorer.ooni.org/m/20251225200040.729601_GE_webconnectivity_cd59bbb79fc950be) the bogon IP address `0.0.0.0`, a result consistent with DNS-based blocking. The chart below presents measurements disaggregated by probe ASN and resolver ASN, highlighting where these anomalous responses were observed. The resolver networks most commonly associated with the `0.0.0.0` responses are Worldstream B.V. and Hetzner.

The following [chart](https://explorer.ooni.org/chart/mat?probe_cc=GE&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org) aggregates OONI measurement coverage from tests of `www.womenonweb.org` in Georgia between November 2025 and April 2026, illustrating the occurrence of bogon IP addresses in DNS responses during DNS resolution.

{{<img src="images/image29.png">}}

**Chart:** Analysis results from the OONI Probe testing of `www.womenonweb.org` in Georgia between November 2025 to April 2026 (source: [OONI data](https://explorer.ooni.org/chart/mat?probe_cc=GE&since=2025-11-01&until=2026-04-01&time_grain=day&axis_x=measurement_start_day&test_name=web_connectivity&domain=www.womenonweb.org)). 

### Censorship beyond website blockages: Social Media and Search Engine Suppression

Since our last [report](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/) in 2019, Women on Web has experienced extensive social media censorship and algorithmic suppression on search engines. These experiences include, but are not limited to the following instances:

*   In May 2020, a **Google Core update led to an 80% drop in website traffic** for `womenonweb.org`, and the website’s traffic has never fully recovered. 

*   **Facebook has deleted numerous Women on Web accounts** in different languages. To date, Facebook has permanently deleted WoW’s Italian, Turkish, Indonesian, and Malaysian pages, among others.

*   Women on Web has also faced **repeated account suspensions on Instagram**, which removes WoW’s content from the public eye and makes it more difficult for care seekers to verify the legitimacy of the service. Most recently, the main WoW Instagram account was suspended on April 2nd, 2026 without prior warning and without providing a reason for the suspension. 

*   Countless **posts on Facebook and Instagram have been removed** from Women on Web’s various pages. Some of the content of the posts include:

*   A post joking about how Women on Web has been censored.
*   A post in Spanish with a graphic with two cartoon pills with the link to Women on Web’s website for people seeking information on abortion.
*   A post about Women on Web’s service in Arabic with the caption “Abortion should be a private matter”.

{{<img src="images/image21.png">}}

{{<img src="images/image25.png">}}

{{<img src="images/image19.png">}}

{{<img src="images/image18.png">}}

While the organization has faced a dizzying amount of censorship and suppression on digital platforms in the past seven years, they have worked diligently to document evidence of these instances to better advocate for themselves and other members of the reproductive health and justice movement who have [encountered](https://www.eff.org/pages/stop-censoring-abortion) the same issues.

### Women on Web’s Response to Website Censorship: Building Digital Resilience and The A-Line

In response to the continued censorship of their website, Women on Web has helped to push the abortion rights movement to think more creatively and strategically about circumventing and challenging online censorship. In particular, **data from OONI has been particularly helpful for the organization while pursuing strategic litigation in Spain, Türkiye, and South Korea to unblock their sites**. They have worked over the years to serve as a bridge between abortion access organizations and the digital rights community, and they have shown how essential it is for these two movements to work together to defend access to abortion and information online.

As activists around the world fight for bodily autonomy while navigating increasingly hostile political environments, they are also forced to fight for their own visibility online. This creates an enormous additional burden for a sector already fighting multiple battles on multiple fronts. Women on Web’s work highlights the **urgent need to connect digital rights and technical expertise with abortion rights advocates to tackle these challenges together**.

To that end, in 2025 Women on Web launched their new **[Digital Rights Program](https://www.womenonweb.org/en/digital-rights/)**. Women on Web’s Digital Rights Program works to protect and expand access to online abortion information and care by combating internet censorship, platform suppression, and other digital barriers to care. Through advocacy, research, and strategic litigation, the program works to strengthen the digital resilience of the abortion rights movement so people worldwide can safely access abortion services and information online.

In recent years, Women on Web has partnered with organizations like [eQualitie](https://equalitie.org/) to strengthen its censorship resilience strategy, and are now working with [ASL19](https://asl19.org/en) on the development of a new censorship-resistant app for care seekers in countries where its website is blocked.

Most recently, Women on Web has partnered with eQualitie on the creation of **[The A-Line](https://the-a-line.org/)**. The A-Line is a global initiative and tech clearinghouse created by Women on Web to strengthen digital resilience within the abortion rights movement by helping activists and organizations respond to censorship, cyberattacks, and online suppression. Through technical support, secure hosting, advocacy, and the testing of new technologies, the A-Line works to ensure that abortion information and services remain visible and accessible online, and that the reproductive justice movement can build long-term digital security capacity.

Looking towards the future, Women on Web continues to expand their digital rights advocacy, strategic litigation, and technological development to set positive precedents and to use these relationships for positive change within the abortion rights movement globally, and to continue trailblazing across digital spaces as they did 20 years ago when their online abortion service first opened.

## Conclusion

Censorship of reproductive rights information is on the rise globally, as suggested by the blocking of Women on Web in at least 7 countries – a notable rise in comparison to our [findings](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/) in 2019. Our latest analysis revealed the blocking of Women on Web domains in Iran, Türkiye, the Philippines, South Korea, Spain, Kuwait, and Argentina.

[OONI data](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&axis_x=measurement_start_day&since=2025-11-01&until=2026-04-01&time_grain=day&axis_y=probe_cc&domain=www.womenonweb.org) shows not only that access to Women on Web’s main website (`www.womenonweb.org`) is restricted in a growing number of countries, but also that the blocking is more widespread and consistently observed. We see a stronger blocking signal overall, with a larger volume of measurements across more networks confirming interference. Moreover, several instances involve blocking techniques that provide a high degree of confidence in the detection results, such as the [return of bogon IP addresses](https://explorer.ooni.org/m/20260331232726.046450_ES_webconnectivity_7d65baf1ecaf6ed6) during DNS resolution. Overall, OONI data indicates that the primary techniques used to block Women on Web across countries are [TLS interference](https://explorer.ooni.org/m/20260331182727.172566_KR_webconnectivity_68796e8d6e5f4e29) and [DNS tampering](https://explorer.ooni.org/m/20260331232726.046450_ES_webconnectivity_7d65baf1ecaf6ed6). **Because these censorship techniques often do not provide transparent notification of intentional blocking, users may incorrectly attribute access failures to technical issues rather than censorship**.

Notably, OONI data shows that the censorship of reproductive rights information is not restricted to countries where abortion is illegal or legally restricted. We found that **reproductive rights information is even restricted in European countries**, such as [Spain](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&axis_x=measurement_start_day&since=2025-11-01&until=2026-04-01&time_grain=day&probe_cc=ES&axis_y=probe_asn&domain=www.womenonweb.org), where abortion is legal but can be difficult to access.

Even though the Spanish Supreme Court issued a [ruling](https://www.womenonweb.org/en/news/women-on-webs-website-remains-censored-despite-the-supreme-court-ruling-to-unblock-the-website/) in 2022 allowing the partial unblocking of Women on Web’s site, OONI data shows that the website [remains blocked on multiple networks](https://explorer.ooni.org/chart/mat?test_name=web_connectivity&axis_x=measurement_start_day&since=2025-11-01&until=2026-04-01&time_grain=day&probe_cc=ES&axis_y=probe_asn&domain=www.womenonweb.org) in Spain. Beyond Spain, Women on Web are also pursuing strategic litigation to unblock their website in South Korea and Türkiye. In the meanwhile, Women on Web launched **[The A-Line](https://the-a-line.org/)** to help keep abortion online.

## Acknowledgements

We thank [OONI Probe](https://ooni.org/install/) users in Iran, Türkiye, the Philippines, South Korea, Spain, Kuwait, Argentina, Poland, Kenya, Pakistan, and Georgia for contributing measurements, supporting this study.

## Glossary

*   **AS:** An Autonomous System (AS) is a network or group of networks operated by a single organization that connects to and exchanges internet traffic with other networks across the internet.
*   **ASN:** An Autonomous System Number (ASN) is a unique identifier assigned to a network operated by an organization (such as an Internet Service Provider), helping route internet traffic between networks.
*   **Bogon IP:** A bogon IP is an internet address that is not supposed to be used on the public internet, often because it is unassigned or reserved for special purposes.
*   **ClientHello:** The first message a web browser sends when starting a secure connection to a website, containing information needed to establish encrypted communication.
*   **DNS:** The Domain Name System (DNS) is the internet service that translates website names into the numerical IP addresses needed to connect to websites and other online services.
*   **DNS injection:** DNS injection is a technique where incorrect or altered DNS responses are inserted into a user’s connection, causing domain names to resolve to the wrong IP address or to a blocking page instead of the intended website.
*   **DNS response:** A DNS response is the answer a DNS system gives when looking up a website name, usually returning the IP address needed to connect to that site.
*   **DNS tampering:** DNS tampering is the practice of altering the internet’s address lookup system so that users are redirected, blocked from accessing a website, or sent to a different destination than intended.
*   **Domain:** A domain is the unique name used to identify a website or online service on the internet, such as `example.com`.
*   **HTTPS:** HTTPS is the secure version of the protocol used to access websites, encrypting communications between users and websites to protect privacy and data integrity.
*   **IP address:** An IP address is a unique number that identifies a device or online service on the internet, helping computers find and communicate with one another.
*   **NXDOMAIN error:** An NXDOMAIN error is a message indicating that a website’s domain name cannot be found in the Domain Name System (DNS), usually because the domain does not exist.
*   **Resolver:** A resolver is a server that translates website names into IP addresses, helping users connect to websites and online services.
*   **TLS:** Transport Layer Security (TLS) is a security protocol that encrypts data exchanged over the internet, helping to protect communications from interception, tampering, and impersonation.
*   **TLS handshake:** A TLS handshake is the first step in a secure internet connection, where a device and a server establish trust and agree on how to encrypt their communication.
*   **TLS interference:** TLS interference occurs when a third party disrupts or manipulates a TLS-secured connection, potentially preventing access to a service or affecting the security of the communication.
*   **VPN:** A Virtual Private Network (VPN) is a service that creates an encrypted connection between a user's device and a remote server, helping to protect privacy and mask the user’s internet activity and location.
