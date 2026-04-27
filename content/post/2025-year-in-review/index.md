---
title: "Year in Review: OONI in 2025"
description: "This post shares OONI highlights from 2025."
author: "Maria Xynou"
date: "2026-04-27"
tags: ["ooni", "2025", "year-in-review"]
categories: ["blog"]
---

{{<img src="images/image3.png">}}

In this report, we share OONI highlights from 2025, as well as some of the great ways through which the internet freedom community made use of OONI tools and data.

{{<table-of-contents>}}

## Launched OONI Probe Multiplatform App for Android and iOS

{{<img src="images/image15.png">}}

In March 2025, we [launched](https://ooni.org/post/2025-launch-ooniprobe-multiplatform-app/) an [OONI Probe multiplatform app for Android and iOS](https://ooni.org/install/mobile)! This is an important milestone for the **long-term sustainability of the OONI Probe apps**, as it will enable us to ensure feature parity and to ship new features faster and more effectively across platforms.

[OONI Probe](https://ooni.org/install/) is a free and open source tool that we have built since 2012, designed to [measure various forms of internet censorship](https://ooni.org/nettest/). To enable communities worldwide to run OONI Probe and contribute measurements (which are published as [open data](https://ooni.org/data/) in real-time), we have made OONI Probe available for [both mobile and desktop](https://ooni.org/install/) platforms. Specifically, OONI Probe is available for [Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe), [F-Droid](https://f-droid.org/repository/browse/?fdid=org.openobservatory.ooniprobe), [iOS](https://itunes.apple.com/us/app/id1199566366), [Windows](https://ooni.org/install/desktop), [macOS](https://ooni.org/install/desktop), and [Linux](https://ooni.org/install/cli/ubuntu-debian/).

However, in practice this means that we have had to maintain OONI Probe in 4 different codebases: [OONI Probe Android](https://github.com/ooni/probe-android), [OONI Probe iOS](https://github.com/ooni/probe-ios), [OONI Probe Desktop](https://github.com/ooni/probe-desktop), [OONI Probe Command Line Interface (CLI)](https://github.com/ooni/probe-cli). Given that we aim to have feature parity across OONI Probe apps, we have had to implement changes in each of these 4 codebases every time we introduce a new feature. Having to do this each time in 4 different codebases not only reduces the speed at which we can ship new features, but it also increases the risk of introducing bugs. It also means that our software doesn’t always have full feature parity across all platforms and even when it does, there are some differences that are hard to get right. In our line of work, where there is often the need to quickly adjust our software in response to emergent censorship events or infrastructure changes, having to implement changes in 4 different codebases is, simply put, a burden.

To improve the long-term sustainability of the OONI Probe apps and to enable us to fix bugs and ship new features faster and more effectively, we created an [OONI Probe multiplatform app](https://github.com/ooni/probe-multiplatform). This involved [rewriting the OONI Probe app](https://github.com/ooni/probe-multiplatform) using [Kotlin Multiplatform](https://www.jetbrains.com/kotlin-multiplatform/) for code sharing, and [Compose Multiplatform](https://www.jetbrains.com/compose-multiplatform/) for shared UIs across platforms. We now have a [unified codebase](https://github.com/ooni/probe-multiplatform) for [OONI Probe Mobile](https://ooni.org/install/mobile), through which we will make releases for OONI Probe Android and iOS.

We also worked towards supporting [OONI Probe Desktop](https://ooni.org/install/desktop) through the same [codebase](https://github.com/ooni/probe-multiplatform), and we aim to release the new OONI Probe Desktop App in 2026. Stay tuned!

## Launched OONI Explorer thematic censorship pages

In April 2025, we [launched](https://ooni.org/post/2025-ooni-explorer-thematic-censorship-pages/) new OONI Explorer thematic censorship pages.

To enable the internet freedom community to more easily discover and respond to censorship events, we created new [OONI Explorer](https://explorer.ooni.org/) pages which provide OONI data and findings on the following themes:

*   [Blocking of Social Media and Instant Messaging Apps](https://explorer.ooni.org/social-media)
*   [Blocking of News Media](https://explorer.ooni.org/news-media)
*   [Reachability of Circumvention Tools](https://explorer.ooni.org/circumvention)

Each of the new OONI Explorer thematic pages includes:

*   [Short reports](https://explorer.ooni.org/findings) documenting relevant blocks based on OONI data
*   [Longer research reports](https://ooni.org/reports/) documenting relevant blocks based on OONI data
*   Charts with the latest OONI data pertaining to each theme (social media, news media, circumvention tools)

{{<img src="images/image7.png">}}

**Image:** OONI Explorer Social Media page, [https://explorer.ooni.org/social-media](https://explorer.ooni.org/social-media)

{{<img src="images/image4.png">}}

**Image:** OONI Explorer News Media page, [https://explorer.ooni.org/news-media](https://explorer.ooni.org/news-media)

{{<img src="images/image8.png">}}

**Image:** OONI Explorer Circumvention Tools page, [https://explorer.ooni.org/circumvention](https://explorer.ooni.org/circumvention)

By default, these charts are filtered based on three countries: China, Iran, and Russia. We chose those countries because they have stable OONI measurement coverage and high levels of internet censorship, providing an opportunity to present more interesting charts. OONI measurement coverage is available for most countries, and you can adjust the charts in these pages by changing the countries and date range (which is set to the past month by default). The three themes (social media, news media, circumvention) were determined based on community feedback collected through user research, as well as by the fact that social media, news media, and circumvention tools are [frequently blocked](https://ooni.org/reports/) around the world, impacting human rights.

As an outcome of the [new OONI Explorer thematic pages](https://ooni.org/post/2025-ooni-explorer-thematic-censorship-pages/), researchers, journalists, and human rights defenders can more easily identify blocks affecting resources of public interest and respond to them using empirical data. We hope that the [global #KeepItOn campaign](https://www.accessnow.org/campaign/keepiton/) will find the new [social media](https://explorer.ooni.org/social-media) page useful for advocacy, and that data on the [reachability of circumvention tools](https://explorer.ooni.org/circumvention) will help strengthen their development, deployment, and overall effectiveness.

## OONI Anonymous Credential System

{{<img src="images/image10.png">}}

**Image:** An overview of the landscape of anonymous credentials in theoretical cryptography, with OONI’s positioning.

As the [OONI Probe](https://ooni.org/install/) network grows, so does the risk that some users (voluntarily or involuntarily) taint the measurement by supplying faulty data to the submission server. This may either be the result of a deliberate attack aimed at discrediting OONI’s platform by submitting false measurements or just caused by faulty OONI Probe installations.

How can we protect the [OONI dataset](https://ooni.org/data) from attacks and faulty measurements, while preserving the privacy of [OONI Probe](https://ooni.org/install/) users?

OONI needs to establish trust in submitted measurements without introducing identifiers that could expose user identity or enable cross-network tracking. **Anonymous credentials offer a cryptographic mechanism to verify properties of a probe** – such as long-term participation or measurement volume – without revealing who the user is, where they are, or linking their activity across networks.

To strengthen trust in [OONI data](https://ooni.org/data) and protect the OONI dataset from the intentional or unintentional submission of faulty measurements, we collaborated with [Michele Orrù](https://tumbolandia.net/), a cryptographer and expert in digital signatures and zero-knowledge proofs, on designing and implementing anonymous credentials within OONI Probe.

Throughout 2025, we made important progress towards building OONI’s new Anonymous Credential System. We worked towards detecting and remediating OONI measurement inconsistencies, and we created an OONI Probe anonymous credential system.

Specifically, we:

*   [Evaluated](https://github.com/ooni/backend/issues/896) current OONI measurements;
*   [Developed heuristics](https://github.com/ooni/backend/issues/912) to detect inconsistencies in OONI measurements;
*   [Developed strategies](https://github.com/ooni/backend/issues/897) for mitigating faulty measurements;
*   Published a [blog post with a literature review](https://ooni.org/post/2025-probe-security-without-identification/) on anonymous credentials;

*   Published a [blog post outlining some of the key requirements](https://ooni.org/post/2025-requirements-for-oonis-anonymous-credentials/) for OONI’s anonymous credential system;
*   [Designed](https://github.com/ooni/backend/issues/914) the [OONI Anonymous Credentials Protocol](https://github.com/ooni/spec/blob/master/backends/bk-006-anon-creds.md);
*   Wrote the [protocol specification](https://github.com/ooni/backend/issues/915);
*   Created a [reference implementation of the protocol](https://github.com/ooni/backend/issues/899);
*   Collected feedback and [presented the library](https://github.com/ooni/backend/issues/917).

The cryptographic library was developed as a separate component and is now available on [GitHub](https://github.com/sigma-rs/). OONI has a [wrapper](https://github.com/ooni/userauth) over it that limits the use of the library to OONI-specific use cases.

Throughout 2025, Michele Orrù presented this anonymous credential system at several universities, research institutions, and events:

*   [MIT presentation](https://css.csail.mit.edu/security-seminar/details.html#Apr2425) about the anonymous credential system;
*   [Stanford University presentation](https://mailman.stanford.edu/pipermail/theory-seminar/2025-August/002723.html) about [draft-irtf-cfrg-fiat-shamir](https://datatracker.ietf.org/doc/draft-irtf-cfrg-fiat-shamir/);
*   Kings College presentation about [draft-irtf-cfrg-fiat-shamir](https://datatracker.ietf.org/doc/draft-irtf-cfrg-fiat-shamir/);
*   [Permutation-Based Crypto 2025](https://permutationbasedcrypto.org/2025/) presentation about [draft-irtf-cfrg-fiat-shamir](https://datatracker.ietf.org/doc/draft-irtf-cfrg-fiat-shamir/);
*   CWI presentation about [draft-irtf-cfrg-fiat-shamir](https://datatracker.ietf.org/doc/draft-irtf-cfrg-fiat-shamir/);
*   Presentation of the academic paper for the core anonymous credential system at [ACM CCS 2025 in Taiwan](https://www.sigsac.org/ccs/CCS2025/accepted-papers/).

In early November 2025, the core library was [announced on the IETF mailing lis](https://mailarchive.ietf.org/arch/msg/cfrg/w5iB58BCOrEE8w0A2OoGOPOzDSo/)t. This project received help and feedback from internationally renowned cryptographers: Ian Goldberg (University of Waterloo), Lindsey Tulloch (Tor Project), and Victor Graf (RISC0). Together, the cryptographic library was made usable also by other projects.

Notably, two specifications for zero-knowledge proofs used by OONI – [Interactive Sigma Proofs](https://datatracker.ietf.org/doc/draft-irtf-cfrg-sigma-protocols/) and [Fiat-Shamir Transformation](https://datatracker.ietf.org/doc/draft-irtf-cfrg-fiat-shamir/) – are now part of the IETF CFRG, which generated lots of [interest from the wider community](https://mailarchive.ietf.org/arch/msg/cfrg/nOguhB374sipC5tbP8wUn96KdGE/). We also received feedback from Apple, Google, and Cloudflare which resulted in GitHub issues (such as the API framing and the reasoning behind some decisions: [#79](https://github.com/mmaker/draft-irtf-cfrg-sigma-protocols/pull/79)), and we even received a [free audit from Open Zeppelin](https://www.openzeppelin.com/news/interactive-sigma-proofs-and-fiat-shamir-transformation-proof-of-concept-implementation-audit).

In early 2026, we published a [blog post announcing OONI’s new Anonymous Credential System](https://ooni.org/post/2025-announcing-ooni-new-anonymous-credential-system/), sharing details of the system. We welcome feedback, especially from cryptographers and implementers.

We are currently working towards integrating the solutions into the OONI software stack. We have already [integrated the server library into the OONI backend](https://github.com/ooni/backend/issues/900), and we are [integrating the client library into OONI Probe](https://github.com/ooni/backend/issues/918). Once both are deployed to production, we will better assess the effectiveness and impact of the solution.

We thank Michele Orrù and all the other cryptographers who worked towards strengthening trust in OONI data! We also thank the [Open Technology Fund (OTF)](https://www.opentech.fund/) for supporting this project.

## Security Audits

In 2025, OONI received an **independent security audit** by [Cure53](https://cure53.de/) which involved penetration tests and source code audits against the following OONI components and aspects:

*   [OONI Pipeline v5](https://github.com/ooni/data/tree/main/oonipipeline)
*   [OONI Probe Engine Core](https://github.com/ooni/probe-cli)
*   OONI Probe Methodology Improvements:
	*   [Include HTTP transaction start/end](https://github.com/ooni/probe-cli/pull/943)
	*   [emit resolve_start and resolve_done](https://github.com/ooni/probe-cli/pull/944)
	*   [Implement netem for testing](https://github.com/ooni/netem)
	*   [Implement download speed metric collection](https://github.com/ooni/probe-cli/pull/1166)
	*   [Include IP URL in network_events](https://github.com/ooni/probe-cli/pull/882/files#diff-%20cb4050f35734ed723ce3750b00e3c1a889762918f7e5ef0ba8d3a8b402f884%206fR290)
	*   [Improvements to ECHCheck experiment](https://github.com/ooni/probe-cli/pull/1658)
	*   [Methodology for measuring throttling](https://github.com/ooni/probe-cli/pull/1166)
*   [Richer Testing Input (Python Backend)](https://github.com/ooni/backend/pull/962)
*   [Censorship Incident Reporting Platform](https://github.com/ooni/backend/tree/7bf80d60c6f5240f75c5bca09e8631be23e8246c/ooniapi/services/oonifindings)
*   [OONI Explorer Thematic Censorship Pages](https://github.com/ooni/explorer/pull/970)
*   [OONI infrastructure](https://github.com/ooni/devops/)

Based on the audit of the above, Cure53 found a total of 11 security deficiencies requiring follow-up consideration. Of those, 6 represent security vulnerabilities incurring noteworthy risk of exploitation, while the remaining 5 entail miscellaneous limitations that should be rectified for elevated defense-in-depth.

The OONI team has **resolved all high-severity issues** identified from the security audit. Several lower-priority issues have also been addressed. Any remaining issues for which fixes have not yet been implemented or deployed have been documented in our issue tracker.

In terms of the overarching verdict, Cure53 reported that **OONI maintains a mature and solid security foundation**, as substantiated by the codebase’s evident quality and moderate number of identified pitfalls. The code corresponding to the newly implemented features is verifiably clean, structurally modularized, and adequately protected. Crucially, the analysts did not locate any critical-impact weaknesses in the scrutinized implementations regarding the main backend API, frontend, OONI Probe, and data processing pipeline. While two high-severity flaws were reported, their impact is constrained to limited DoS.

Overall, Cure53 noted in their security audit report that the OONI team showcased their commitment to defensive proficiency by resolving several faults during the active research window, commending the OONI development team for their proactive and security-conscious efforts.

In 2025, we also [published the Penetration Test Report](https://ooni.org/post/ooni-security-audit/) from the security audit that we received from [Radically Open Security](https://www.radicallyopensecurity.com/) – with support from the [Open Technology Fund (OTF)](https://www.opentech.fund/) – between August 2024 and October 2024. The scope of the penetration test included the following OONI targets:

*   [Devops systems](https://github.com/ooni/devops/)
*   [OONI API](https://github.com/ooni/backend/tree/master/ooniapi)
*   [Backend services](https://github.com/ooni/backend)
*   [Cross-platform development architecture plan](https://github.com/ooni/probe-multiplatform)
*   [OONI Run v2 implementation](https://github.com/ooni/backend/tree/master/ooniapi/services/oonirun)

**Overall, the results of the penetration test were positive, with no critical or systemic vulnerabilities identified. Most issues were low-severity and have either been addressed or require minimal mitigation.**

Radically Open Security identified 14 low-severity issues, 2 high-severity issues, 2 moderate-severity issues, and 5 issues that were not applicable. The two high-severity findings were discussed in detail with Radically Open Security. Upon review, they acknowledged that no further mitigation was necessary beyond updates to our developer documentation — particularly as one of the high-severity findings stemmed from a misunderstanding of our implementation, which turned out to be secure and in line with best practices.

We have addressed all high and moderate severity issues identified during the penetration test and many of the low severity issues. We did not resolve some low severity issues which we did not consider to be high priority, but we have documented them in our [issue tracker](https://github.com/ooni/devops/issues) and we will address them when time and resources permit. We remain committed to delivering secure, high-quality software to our community.

We thank both [Radically Open Security](https://www.radicallyopensecurity.com/) and [Cure53](https://cure53.de/) for their thorough audits and valuable contributions to strengthening the security of OONI’s services and infrastructure.

## Research

### Research reports

In 2025, we published the following **6 research reports** based on the analysis of OONI data:

*   [OONI Analysis of Telegram Blocking in Kenya During the 2023 and 2024 KCSE Exams](https://ooni.org/post/2025-kenya-blocked-telegram-kcse-exams/)
*   [The Longest Silence: Internet Shutdowns During Bangladesh’s 2024 Uprising](https://ooni.org/post/2025-bangladesh-report/) (in collaboration with [Digitally Right](https://ooni.org/partners/digitally-right/))
*   [OONI Analysis on the Blocking of the X Social Media Platform in Tanzania](https://ooni.org/post/2025-tanzania-blocked-twitter/)
*   [Information Controls in India and Pakistan During the May 2025 Conflict](https://ooni.org/post/2025-media-censorship-in-india-and-pakistan/) (in collaboration with [Digital Rights Foundation](https://ooni.org/partners/digital-rights-foundation/))
*   [Throttling of Social Media in Türkiye During Protests: An Analysis of OONI Data](https://ooni.org/post/2025-turkiye-throttling-social-media/)
*   [How Internet Censorship Impacts the Women’s Rights Movement in Iran: Insights from OONI Data and Activist Interviews](https://ooni.org/post/2025-iran-censorship-womens-rights/) (in collaboration with [Miaan Group](https://ooni.org/partners/miaan/))

It’s worth highlighting that for several of the above reports, our partners **conducted interviews with affected communities to document the real-world impact of censorship**, enriching the reports with qualitative insights. This approach enabled OONI’s empirical measurement data to be meaningfully contextualized, thereby increasing the overall impact and value of the reports.

In addition to the above, we also contributed to a [multistakeholder research report](https://filter.watch/english/2025/10/02/irans-stealth-blackout-a-multi-stakeholder-analysis-of-the-june-2025-internet-shutdown/), titled “Iran’s ‘Stealth Blackout’: A Multi-stakeholder Analysis of the June 2025 Internet Shutdown”, that was published by Miaan Group, ASL19, and IODA on Iran’s June 2025 internet shutdown. We had the opportunity to contribute to this [report](https://filter.watch/wp-content/uploads/sites/2/2025/10/Click-here-to-read-the-full-report.pdf) by providing OONI data, analysis, and writing the section on the temporary blocking of WhatsApp in Iran in June 2025. Other key contributors to the report include Kentik, Cloudflare, the Tor Project, Lantern, eQualitie, and Psiphon.

In 2025, we also had the opportunity to publish a **[guest report](https://ooni.org/post/2025-france-report/)** (“A Legal and Technical Analysis of Internet Censorship in France”) by [Etienne Maynier](https://maynier.eu/) and Taziden analyzing Internet censorship in France based on OONI data.

Notably, **OONI data was used as evidence in support of a landmark public interest case** in Kenya. In May 2025, we published a [research report](https://ooni.org/post/2025-kenya-blocked-telegram-kcse-exams/) on the blocking of Telegram in Kenya during the country’s 2023 and 2024 KCSE national exams, which [supported a petition filed at the High Court of Kenya](https://blog.bake.co.ke/wp-content/uploads/2025/05/HCCHRPET.276.2025-ICJ-v-CA-Internet-Shutdown-Case.pdf). Specifically, BAKE, ICJ Kenya, Paradigm Initiative, Kenya Union of Journalists, Katiba Institute, The Law Society of Kenya (LSK), and CIPESA filed a [public interest case](https://blog.bake.co.ke/2025/05/14/bake-6-other-organizations-challenge-internet-shutdowns-in-kenya-in-landmark-public-interest-case/), challenging the unlawful disruption of internet access in Kenya. In support of this case, we wrote a detailed [research report](https://ooni.org/post/2025-kenya-blocked-telegram-kcse-exams/) in the form of an [Expert Opinion](https://ooni.org/documents/ooni-report-kenya-telegram-blocking-kcse-exams.pdf), documenting the blocking of Telegram in Kenya during the 2023 and 2024 KCSE exams based on OONI data, which is included in the [petition](https://blog.bake.co.ke/wp-content/uploads/2025/05/HCCHRPET.276.2025-ICJ-v-CA-Internet-Shutdown-Case.pdf).

This is a significant milestone, as Kenyan lawyers set an important legal precedent in the region for fighting internet censorship. Following this case, lawyers in Tanzania reached out to us requesting OONI data in support of their legal efforts challenging the blocking of Twitter/X. In response, we published a [research report](https://ooni.org/post/2025-tanzania-blocked-twitter/) documenting the blocking of X/Twitter in Tanzania to support these efforts.

### Censorship Findings reports on OONI Explorer

Beyond the aforementioned [research reports](https://ooni.org/reports/), we published **25 new** **reports** (based on OONI data) on emergent censorship events on the OONI Explorer [Censorship Findings](https://explorer.ooni.org/findings) page.

{{<img src="images/image9.png">}}

**Image:** OONI Explorer [Censorship Findings](https://explorer.ooni.org/findings) page.

In 2025, we published the following **25 reports**:

1.  [El Salvador blocked Telegram](https://explorer.ooni.org/findings/26818990400)
2.  [Russia blocked Discord](https://explorer.ooni.org/findings/162112071200)
3.  [Türkiye blocked Discord](https://explorer.ooni.org/findings/267640924000)
4.  [Azerbaijan blocked Twitter/X](https://explorer.ooni.org/findings/123289771000)
5.  [Russia blocked Viber](https://explorer.ooni.org/findings/50334204500)
6.  [Mozambique blocked Facebook, Instagram and WhatsApp amid protests](https://explorer.ooni.org/findings/169004237900)
7.  [Kenya blocked Telegram during the KCSE 2024 exams](https://explorer.ooni.org/findings/20313562200)
8.  [Venezuela blocked Twitter/X during protests](https://explorer.ooni.org/findings/291477923300)
9.  [Albania blocked TikTok](https://explorer.ooni.org/findings/274282914400)
10.  [Pakistan blocked Telegram](https://explorer.ooni.org/findings/324516225200)
11.  [Pakistan blocked Twitter/X](https://explorer.ooni.org/findings/255040833200)
12.  [Tanzania blocked Proton VPN](https://explorer.ooni.org/findings/279953403000)
13.  [Egypt blocked independent media outlet Zawia3](https://explorer.ooni.org/findings/99431807200)
14.  [Jordan blocked 12 news media websites](https://explorer.ooni.org/findings/101531332700)
15.  [India blocked The Wire amid military conflict with Pakistan](https://explorer.ooni.org/findings/667455800)
16.  [Indonesia blocked access to the Internet Archive](https://explorer.ooni.org/findings/8025203600)
17.  [Türkiye blocked the opposition campaign Boykotyap amid protests](https://explorer.ooni.org/findings/72755787600)
18.  [Vietnam blocked Telegram](https://explorer.ooni.org/findings/382823169800)
19.  [Kenya blocked Telegram amid anti-government protests](https://explorer.ooni.org/findings/224470320900)
20.  [Togo blocked Facebook, Telegram, Signal, YouTube, and DuckDuckGo amid protests](https://explorer.ooni.org/findings/167838678600)
21.  [Nepal blocked Telegram](https://explorer.ooni.org/findings/284032502800)
22.  [Iran blocked WhatsApp amid war with Israel](https://explorer.ooni.org/findings/273244099200)
23.  [Democratic Republic of Congo blocked Twitter/X and TikTok](https://explorer.ooni.org/findings/239437560400)
24.  [Tanzania blocked Twitter/X, again](https://explorer.ooni.org/findings/133109222300)
25.  [Cameroon blocked social media amid post-election protests](https://explorer.ooni.org/findings/393608039300)

In response to emergent censorship events, we will continue to publish new reports on the OONI Explorer [Censorship Findings](https://explorer.ooni.org/findings) page on an ongoing basis.

## Community

### New partnerships

{{<img src="images/image11.png">}}

**Image:** OONI [Partners](https://ooni.org/partners) page.

In 2025, we had the opportunity to establish **3 new partnerships** with the following organizations:

*   [CyberHub](https://ooni.org/partners/cyberhub/) (Armenia)
*   [EngageMedia](https://ooni.org/partners/engagemedia/) (Philippines)
*   [7amleh](https://ooni.org/partners/7amleh/) (Palestine)

Overall, we now have **[partnerships with 55 digital rights organizations](https://ooni.org/partners)**. Many of these partnerships are with leading digital rights organizations in Asia, Africa, the Middle East, and Latin America, with whom we collaborate on investigating internet censorship in their respective countries through the use of OONI tools and data. We also have partnerships with circumvention tool projects and international organizations that defend digital rights. Through these partnerships, we aim to support decentralized efforts in increasing transparency of internet censorship worldwide.

### Joined the Global Network Initiative (GNI)

{{<img src="images/image12.jpg">}}

**Image:** [Global Network Initiative (GNI)](https://globalnetworkinitiative.org/).

In August 2025, [OONI became a member](https://globalnetworkinitiative.org/gni-welcomes-new-members-factum-ooni-and-sanjana-hattotuwa/) of the [Global Network Initiative (GNI)](https://globalnetworkinitiative.org/). Bringing together academics, civil society, companies, and investors, the GNI is the leading multistakeholder forum for accountability, shared learning, and collective advocacy on government and company policies and practices at the intersection of technology and human rights.

We are excited to [join the Global Network Initiative](https://globalnetworkinitiative.org/gni-welcomes-new-members-factum-ooni-and-sanjana-hattotuwa/) in support of a shared commitment to protecting digital rights and internet freedom worldwide. As part of the GNI community, we look forward to contributing our expertise in internet censorship measurement and collaborating to defend a free and open internet. In 2025, we presented at the GNI Learning call on “Global Trends in Network Blocking and Interference and Related Human Rights Impacts”, alongside Cloudflare and India’s Internet Freedom Foundation (IFF), where we shared a brief overview of global censorship trends observed through OONI data over the past decade.

Beyond the GNI, OONI has also been an active member of the [global #KeepItOn campaign](https://www.accessnow.org/keepiton) since 2016. Over the past decade, we have supported a coalition of hundreds of human rights organizations in using OONI tools and data to fight internet shutdowns worldwide.

### Open Measurement Gatherings (OMG)

{{<img src="images/image1.jpg">}}

**Image:** [4th Open Measurement Gathering (OMG)](https://www.measurementlab.net/blog/omg4/) in Portugal in September 2025. Photo credit: Melissa Newcomb (M-Lab).

To exchange skills and knowledge with other internet measurement projects and, by extension, strengthen our collaboration and better serve the internet freedom community, we participated in the Open Measurement Gatherings (OMG): bi-annual, private events – organized by the [Measurement Lab (M-Lab)](https://www.measurementlab.net/), and funded by the [Open Technology Fund](https://www.opentech.fund/projects-we-support/supported-projects/measurement-lab/) – that bring together team members from 4 internet measurement projects ([OONI](https://ooni.org/), [M-Lab](https://www.measurementlab.net/), [Internet Outage Detection and Analysis (IODA)](https://ioda.live/), and [Censored Planet](https://censoredplanet.org/)). In 2024, we [participated in the first two Open Measurement Gatherings](https://ooni.org/post/2024-year-in-review/#open-measurement-gatherings-omg), both of which were hosted at [Georgia Tech](https://www.gatech.edu/) in Atlanta, USA.

In 2025, we participated in the 3rd and 4th Open Measurement Gathering (OMG) events. The [3rd Open Measurement Gathering (OMG)](https://ooni.org/post/2025-omg/) was hosted entirely online on 25th June 2025. As part of this online event, we [shared project updates](https://ooni.org/post/2025-omg/#-what-ooni-does), future plans, and gathered questions and feedback from the internet freedom community. Each measurement group [presented](https://www.youtube.com/playlist?list=PLEszjns3sXFGsa42CYPxrQrFPAfA7v71v) for 30 minutes followed by Q&A. You can watch OONI’s presentation [here](https://www.youtube.com/watch?v=WuPu3T2Vrqk).

{{<img src="images/image5.jpg">}}

**Image:** OONI booth at the [Open Measurement Gathering (OMG) Village](https://ooni.org/post/2025-gg-omg-village/) at the [Global Gathering event](https://wiki.digitalrights.community/index.php?title=Global_Gathering_2025) in Estoril, Portugal, in September 2025.

The [4th (and final) Open Measurement Gathering (OMG)](https://www.measurementlab.net/publications/OMG4_final_report.pdf) was hosted in Estoril, Portugal, alongside the [Global Gathering](https://wiki.digitalrights.community/index.php?title=Global_Gathering_2025) event. Between September 8-10, 2025, we co-hosted an **[Open Measurement Gathering (OMG) Village](https://ooni.org/post/2025-gg-omg-village/)** at the Global Gathering: a community space organized and hosted by 4 internet measurement projects: [Open Observatory of Network Interference (OONI)](https://ooni.org/), [Measurement Lab (M-Lab)](https://www.measurementlab.net/), [Internet Outage Detection & Analysis (IODA)](https://ioda.inetintel.cc.gatech.edu/), and [Censored Planet](https://censoredplanet.org/). As part of the OMG Village, we [facilitated a variety of sessions](https://ooni.org/post/2025-gg-omg-village/#omg-village-agenda) on topics related to censorship measurement, we provided space for community-led sessions, and we hosted a booth for ongoing community engagement and discussions throughout the 3-day event.

Following the [Global Gathering](https://wiki.digitalrights.community/index.php?title=Global_Gathering_2025) event, we hosted a private two-day Open Measurement Gathering (OMG) for the 4 internet measurement groups ([OONI](https://ooni.org/), [M-Lab](https://www.measurementlab.net/), [IODA](https://ioda.inetintel.cc.gatech.edu/), and [Censored Planet](https://censoredplanet.org/)) between September 11-12, 2025. As part of this convening, we reflected on community feedback gathered during the [OMG Village](https://ooni.org/post/2025-gg-omg-village/) sessions, we shared project updates and demos of new tools, we facilitated hands-on data sessions, we discussed how to strengthen our coordination on censorship monitoring, reporting, and rapid response efforts, as well as how to address challenges in our operations. We also discussed theories of change, how to strengthen the sustainability of our projects in new funding landscapes, and how to continue collaborating closely beyond the OMG convenings. Further details are available in the [4th Open Measurement Gathering (OMG) Public Report](https://www.measurementlab.net/publications/OMG4_final_report.pdf).

We thank the [Open Technology Fund](https://www.opentech.fund/projects-we-support/supported-projects/measurement-lab/) for supporting the four Open Measurement Gathering (OMG) convenings over the past two years, strengthening collaboration between internet measurement projects to better support the global internet freedom community.

### OONI workshops and presentations

{{<img src="images/image2.jpg">}}

**Image:** Network Measurement booth co-hosted at [RightsCon 2025](https://www.rightscon.org/) in collaboration with [IODA](https://ioda.inetintel.cc.gatech.edu/) and [M-Lab](https://www.measurementlab.net/).

In 2025, we had the opportunity to share OONI’s work as part of numerous (online and in-person) conferences, workshops, and events.

Notably, we facilitated OONI workshops for a total of **391 participants** around the world in 2025!

Throughout 2025, we presented OONI as part of the following conferences, events, and workshops:

*   **State of the Onion 2025.** On 10th December 2025, we [presented](https://www.youtube.com/watch?v=tZVk0kb7lhw) OONI highlights from 2025 and upcoming plans for 2026 as part of the [Tor Project’s annual State on the Onion Community event](https://blog.torproject.org/event/state-of-the-onion-2025/).
*   **Internet Society Pulse Research Week 2025 (Barcelona, Spain).** Between December 8-9, 2025, we participated in the [Internet Society Pulse Research Week](https://www.internetsociety.org/events/internet-society-pulse-research-week/) in Barcelona, Spain.
*   **Nepal test list workshop.** On 14th November 2025, we presented OONI as part of a [hybrid test list workshop](https://digitalrightsnepal.org/community-contribution-in-censorship-detection-updating-nepals-ooni-test-list/) organized by our partner, [Digital Rights Nepal](https://ooni.org/partners/digital-rights-nepal/).
*   **IETF 124 (Montreal, Canada).** On 7th November 2025, we gave a [presentation](https://datatracker.ietf.org/meeting/124/materials/agenda-124-pearg-04) (titled “Measuring and Understanding ECH Deployment: Global Trend and Challenges”) at the IETF 124 in Montreal, Canada.
*   **Internet Measurement Conference (IMC) 2025 Hackathon (Madison, USA).** On 31st October 2025, we co-hosted a [hackathon at the Internet Measurement Conference (IMC)](https://conferences.sigcomm.org/imc/2025/events/hackathon/) in collaboration with M-Lab, IODA, ISOC, Cloudflare, IIJ, and Sorbonne University.
*   **Webinar on Internet freedom amid global restrictions on anti-censorship tools.** On 24th October 2025, we spoke on a panel at an [online event](https://globalgovernanceprogramme.eui.eu/events/?id=582613) organized by EUI and Freedom House to discuss insights from their [research report](https://globalgovernanceprogramme.eui.eu/wp-content/uploads/2025/07/EUI_FH-Report-2025.pdf) (“Tunnel Vision: Anti-Censorship Tools, End-to-End Encryption, and the Fight for a Free and Open Internet”).
*   **IGF Kazakhstan 2025.** On 15th October 2025, we participated (remotely online) in a public discussion on internet censorship and content regulation in Kazakhstan, where we [presented](https://respublika.kz.media/archives/151900) the latest OONI findings on internet censorship in Kazakhstan and its implications for users.
*   **OONI workshop for RFE/RL Data Team.** On 15th October 2025, we facilitated an online hands-on session for the RFE/RL Data Team to practice their use of [OONI Explorer](https://explorer.ooni.org/) to investigate internet censorship in different countries.
*   **4th Open Measurement Gathering (Estoril, Portugal).** Between September 11-12, 2025, we participated in the [4th Open Measurement Gathering (OMG)](https://www.measurementlab.net/publications/OMG4_final_report.pdf) during which we provided a live demo of the OONI Probe Dashboard revamp, we facilitated a hands-on session on analyzing OONI data to investigate targeted cases of throttling, and we participated in many other sessions.
*   **Global Gathering 2025 (Estoril, Portugal).** Between September 8-10, 2025, we co-hosted the [Open Measurement Gathering (OMG) Village](https://ooni.org/post/2025-gg-omg-village/) at the [Global Gathering 2025 event](https://wiki.digitalrights.community/index.php?title=Global_Gathering_2025), where we [hosted an OONI booth](https://ooni.org/post/2025-gg-omg-village/#booths-ooni-and-ioda) and [facilitated 3 sessions](https://ooni.org/post/2025-gg-omg-village/#omg-village-agenda) related to censorship measurement.
*   **Harvard University, Berkman Klein Center for Internet and Society (Cambridge, USA).** On 16th July 2025, we presented OONI at the [Berkman Klein Center for Internet & Society at Harvard University](https://cyber.harvard.edu/) as part of their summer speaker series.
*   **3rd Open Measurement Gathering.** On 25th June 2025, we [presented](https://www.youtube.com/watch?v=WuPu3T2Vrqk) OONI updates and future plans as part of the [virtual Open Measurement Gathering (OMG)](https://ooni.org/post/2025-omg/) hosted by [Censored Planet](https://censoredplanet.org/).
*   **Harvard University, Berkman Klein Center for Internet and Society (Cambridge, USA).** On 17th June 2025, we presented global internet censorship trends based on OONI data (collected between 2017-2024) at the [Berkman Klein Center for Internet & Society at Harvard University](https://cyber.harvard.edu/), where [OONI’s Maria was a research fellow](https://cyber.harvard.edu/people/maria-xynou) (during the 2024-2025 academic year).
*   **CNRS Workshop (Paris, France).** On 21st May 2025, we facilitated a [session](https://cis.cnrs.fr/metrics-of-sovereignty/) on “Mapping digital sovereignty with OONI Probe” as part of the CNRS workshop.
*   **Harvard University, Berkman Klein Center for Internet and Society (Cambridge, USA).** On 13th May 2025, we organized and hosted a [webinar](https://cyber.harvard.edu/events/global-censorship-trends-insights-network-measurement-circumvention-and-advocacy) ( titled “Global censorship trends: Insights from network measurement, circumvention, and advocacy”) at the Berkman Klein Center for Internet and Society at Harvard University, where [OONI’s Maria was a 2024-2025 research fellow](https://cyber.harvard.edu/people/maria-xynou). As part of this webinar, we presented global censorship trends observed through OONI data over the past decade, while Felicia Anthonio shared how the [global #KeepItOn advocacy campaign](https://www.accessnow.org/keepiton) fights internet shutdowns, and Roger Dingledine discussed how [Tor Project](https://www.torproject.org/) tools support censorship circumvention efforts. Watch the webinar recording [here](https://www.youtube.com/watch?v=lyfHB3aZDMo).
*   **Harvard University, Berkman Klein Center for Internet and Society (Cambridge, USA).** On 9th May 2025, we provided a tech demo, showcasing the recently launched [OONI Explorer Social Media page](https://explorer.ooni.org/social-media) at the [Applied Social Media Lab (ASML) Spring Synthesizer event](https://cyber.harvard.edu/events/asml-spring-synthesizer) hosted at Harvard University.
*   **Global Network Initiative (GNI) Learning Call.** On 16th April 2025, we presented at the [Global Network Initiative (GNI)](https://globalnetworkinitiative.org/) Learning call on "Global Trends in Network Blocking and Interference and Related Human Rights Impacts", alongside Cloudflare and India’s Internet Freedom Foundation (IFF). Specifically, we provided a brief overview of censorship trends observed globally through OONI data over the past decade.
*   **Team CommUNITY Glitter Meetup.** On 10th April 2025, we [joined the online Team CommUNITY Glitter Meetup](https://wiki.digitalrights.community/index.php?title=April_10_2025_GM) to discuss network measurement and rapid response during censorship events.
*   **Real World Crypto (RWC) 2025 (Sofia, Bulgaria).** Between March 26-28, 2025, we attended the [Real World Crypto (RWC) 2025](https://rwc.iacr.org/2025/) conference to discuss [OONI’s new Anonymous Credential System](https://ooni.org/post/2025-requirements-for-oonis-anonymous-credentials/).
*   **RightsCon 2025 (Taipei, Taiwan).** Between February 24-27, 2025, we participated in [RightsCon](https://www.rightscon.org/) – the world’s leading digital rights conference – where we:
	*   Presented at a session on “Mapping the Splinternets: Data & Measurement Approaches” at [SplinterCon Taipei](https://splintercon.net/rightscon-taipei/), alongside RightsCon (24th February 2025)
	*   Co-facilitated the session “Measuring and circumventing internet censorship” in collaboration with the [Tor Project](https://www.torproject.org/) (25th February 2025)
	*   Joined the “Expert Presentation - Cyber Ambassador and Digital Diplomats Conclave” to present OONI tools to participants (25th February 2025)
	*   Hosted a Network Measurement booth (in collaboration with [IODA](https://ioda.inetintel.cc.gatech.edu/) and [M-Lab](https://www.measurementlab.net/)), where we distributed OONI swag and provided demos of OONI tools (26th February 2025)
	*   Co-facilitated a session on “Documenting internet shutdowns around the world” in collaboration with [Access Now](https://www.accessnow.org/) and [IODA](https://ioda.inetintel.cc.gatech.edu/) (27th February 2025)
*   **Online Freedom Workshop** **(Taipei, Taiwan).** On 23rd February 2025, right before [RightsCon](https://www.rightscon.org/), our partner, the [Open Culture Foundation (OCF)](https://ooni.org/partners/open-culture-foundation/), hosted an [event](https://ocftw.kktix.cc/events/internetfreedom-tor-tails-ooni-2025) at the National Taipei University of Technology, which featured workshops and presentations by the Tor Project, Tails, and OONI. As part of this event, we facilitated a [workshop](https://anoni.net/docs/en/blog/2025/02/rightscon25-tor-tails-ooni/) on “Detecting and Measuring Internet Censorship with OONI”.
*   **Open Tech Camp (Penang, Malaysia).** Between February 17-18, 2025, we [attended](https://x.com/OpenObservatory/status/1892154796804891005) the [Open Tech Camp](https://engagemedia.org/2025/opentechcamppenang2025/) in Malaysia organised by our partner, [EngageMedia](https://ooni.org/partners/engagemedia/), where we facilitated a session on investigating public data on network interference, including different datasets and tools such as OONI Explorer, IODA, Cloudflare Radar and others.
*   **Forus Workshop on Internet Censorship.** On 22nd January 2025, we gave a [presentation](https://www.forus-international.org/en/news/reclaiming-digital-spaces-for-civil-society-highlights-from-our-workshop-on-internet-censorship) on how civil society can use OONI tools and data to investigate internet censorship during an online workshop organized by [Forus](https://www.forus-international.org/en/) for civil society activists from around the world.

It’s worth highlighting that **many OONI workshops were also led, organized, and facilitated by our partners and broader community** throughout 2025!

Examples include:

*   OONI training session in Indonesia, organized by [SAFEnet](https://safenet.or.id/) (April 2025)
*   [OONI Explorer workshop in Thailand](https://pulse.internetsociety.org/en/events/measuring-internet-censorship/), hosted by [Internet Society](https://pulse.internetsociety.org/en/) and facilitated by [Sinar Project](https://sinarproject.org/) (May 2025)
*   Two-day [workshop in India on updating India’s test list](https://ooni.org/post/2025-event-india-test-list/), organized by [The Bachchao Project](https://thebachchaoproject.org/) (June 2025)
*   OONI workshop in Zimbabwe, organized by [Digital Society of Africa](https://www.digitalsociety.africa/) (September 2025)
*   OONI workshop in Malawi, organized by [Digital Society of Africa](https://www.digitalsociety.africa/) (September 2025)
*   OONI workshop in Cameroon, organized by [COMPSUDEV](https://ooni.org/partners/compsudev/) (November 2025)

We thank our partners and community members for facilitating OONI workshops and helping to spread the word!

Interested in facilitating an OONI workshop for your community? Please feel encouraged to use (and adapt) the [OONI workshop slides](https://ooni.org/support/ooni-outreach-kit/#ooni-workshop-slides) and other materials through the [OONI Outreach Kit](https://ooni.org/support/ooni-outreach-kit/), which is available in [Arabic](https://ooni.org/ar/support/ooni-outreach-kit/), [English](https://ooni.org/support/ooni-outreach-kit/), [Farsi](https://ooni.org/fa/support/ooni-outreach-kit/), [French](https://ooni.org/fr/support/ooni-outreach-kit/), [Russian](https://ooni.org/ru/support/ooni-outreach-kit/), [Spanish](https://ooni.org/es/support/ooni-outreach-kit/), and [Swahili](https://ooni.org/sw/support/ooni-outreach-kit/).

### Community surveys and feedback

{{<img src="images/image13.png">}}

**Image:** [OONI Community Survey](https://ooni.org/post/2025-community-survey/), January 2025.

The OONI community is at the heart of our work. We wouldn’t have [data](https://ooni.org/data) to publish about internet censorship without [your help](https://ooni.org/install/), and the data would have limited impact without its use in [research](https://ooni.org/reports/), [advocacy](https://www.accessnow.org/campaign/keepiton/), [litigation](https://blog.bake.co.ke/wp-content/uploads/2025/05/HCCHRPET.276.2025-ICJ-v-CA-Internet-Shutdown-Case.pdf), and other efforts in defense of human rights around the world. Ensuring that our tools and data are as useful as possible to our community is therefore mission critical.

To help ensure that our tools meet the needs of the global internet freedom community, we published and circulated two surveys in 2025 for community feedback and evaluation. The [first survey](https://ooni.org/post/2025-community-survey/), published in January 2025, collected community feedback on OONI tools, resources, and documentation. The [second survey](https://ooni.org/post/2025-ooni-survey/), published in November 2025, collected community feedback specifically for the evaluation of the following new OONI tools and resources:

*   [OONI Explorer Censorship Findings](https://explorer.ooni.org/findings) platform
*   [OONI Explorer thematic censorship pages](https://ooni.org/post/2025-ooni-explorer-thematic-censorship-pages/)
*   Latest [research reports](https://ooni.org/reports/) based on OONI data
*   Latest methodological improvements (e.g., new [throttling methodology](https://github.com/ooni/probe-cli/blob/master/docs/design/dd-007-throttling.md))
*   Data analysis improvements through [OONI Pipeline v5](https://github.com/ooni/data)

The analysis of results of the second survey reveals that **88% of survey respondents provided a positive evaluation** of enhancements aimed at improving the discovery of OONI censorship findings (exceeding our target of 70%).

Beyond these surveys, we collected community feedback on an ongoing basis through various other means, such as through our monthly community meetings, workshops, discussions on community channels (such as mailing lists and the [OONI Slack](https://slack.ooni.org/) channels), the [Open Measurement Gathering (OMG) Village](https://ooni.org/post/2025-gg-omg-village/) that we co-hosted at the [Global Gathering 2025 conference](https://wiki.digitalrights.community/index.php?title=Global_Gathering_2025), and at many other events that we participated in throughout the year. We also collected community feedback on an ongoing basis through numerous tickets opened by community members on OONI [GitHub repositories](https://github.com/ooni).

We thank community members for their invaluable feedback in 2025 (and in previous years). This feedback directly informs our internal documents and roadmaps, guiding the improvement – and creation – of OONI tools and methods. Thank you for helping us advance censorship measurement worldwide.

### Updated OONI Code of Conduct (CoC) Committee

To help ensure a safe and inclusive community, we have a [Code of Conduct](https://ooni.org/get-involved/code-of-conduct/) that applies to OONI as a whole, including all online and in-person OONI community spaces. As part of this policy, we promote diversity and we do not tolerate any kind of harassment related to national origin, gender, gender identity and expression, race, ethnicity, sexual orientation, physical characteristics, disability, religion, and age. We drafted this Code of Conduct in collaboration with our community, and we created an [Incident Response Committee](https://ooni.org/get-involved/code-of-conduct/#where-to-go-for-help) to address Code of Conduct violations.

In 2025, we updated the [OONI Code of Conduct (CoC) Incident Response Committee](https://ooni.org/get-involved/code-of-conduct/#where-to-go-for-help) to include the following new committee members:

1.  Raya Sharbain ([Tor Project](https://www.torproject.org/))
2.  Sam Ng ([Sinar Project](https://sinarproject.org/))
3.  Andrés Azpúrua ([Conexión Segura y Libre](https://conexionsegura.org/))

We are thrilled that they joined the OONI CoC Committee in light of their long-term participation and leadership within the OONI community. The [full CoC Committee](https://ooni.org/get-involved/code-of-conduct/#where-to-go-for-help) is listed in the updated section of the CoC.

We also updated the CoC to include a [new Transparency Report section](https://ooni.org/get-involved/code-of-conduct/#transparency-report), which lists the number of CoC violation reports that the CoC Committee has received and addressed each year (since 2022, when the Committee was established). So far, we have not received any CoC violation reports.

## 2025 end-of-year fundraising campaign

{{<img src="images/image14.png">}}

**Image:** [OONI 2025 end-of-year fundraising campaign](https://ooni.org/post/2025-fundraising-campaign/) image designed by [Robotina](https://www.robotina.it/).

Over the past decade, the internet freedom field has relied heavily on U.S. government funding. In 2025, changes in administration, policy shifts, and the **restructuring or closure of key U.S. government agencies** caused many of these funding sources to [disappear](https://www.techpolicy.press/the-us-just-logged-off-from-internet-freedom/), creating an [existential crisis](https://www.techpolicy.press/100-days-of-trump-global-digital-rights-and-internet-freedom-advocacy-efforts-face-generational-crisis/) for the global digital rights and internet freedom movement.

Although OONI has received support from a [wide range of funders](https://ooni.org/about/supporters/#funders) over the years, a significant portion of our annual budget came from U.S. government grants and contracts. As a result of recent [U.S government funding cuts](https://www.eff.org/deeplinks/2025/01/executive-order-state-department-sideswipes-freedom-tools-threatens-censorship), our ability to continue this work in the coming years is at risk.

That’s why we need your support.

In late 2025, we [launched an end-of-year fundraising campaign](https://ooni.org/post/2025-fundraising-campaign/) – “Protect Our Internet, Document Censorship” – to encourage [donations to OONI](https://ooni.org/donate/). As part of our fundraising campaign, we **raised €45,108**. We are deeply grateful for each and every contribution.

By supporting OONI, you help maintain [free and open source software for measuring internet censorship](https://ooni.org/install/), and you help sustain the [world’s largest open dataset on internet censorship](https://ooni.org/data/). Your support also enables research, advocacy, and litigation efforts around the world that rely on OONI data.

Huge thanks to everyone who contributed! Your support means a great deal to us and helps ensure we can continue providing free tools and open data in defense of a free and open internet.

To sustain OONI’s mission, we will continue pursuing diverse funding sources. Thank you for your trust and support.

## OONI-verse

Each year, OONI data and tools support research and advocacy efforts around the world. Below are some **highlights from third-party use of OONI tools and data** in 2025:

*   **High Court of Kenya petition using OONI data as evidence.** Our [report on the blocking of Telegram in Kenya](https://ooni.org/post/2025-kenya-blocked-telegram-kcse-exams/) supported a [petition](https://blog.bake.co.ke/wp-content/uploads/2025/05/HCCHRPET.276.2025-ICJ-v-CA-Internet-Shutdown-Case.pdf) filed at the High Court of Kenya in May 2025 by [BAKE, ICJ Kenya, Paradigm Initiative, Kenya Union of Journalists, Katiba Institute, The Law Society of Kenya (LSK), and CIPESA](https://blog.bake.co.ke/2025/05/14/bake-6-other-organizations-challenge-internet-shutdowns-in-kenya-in-landmark-public-interest-case/). OONI data was [used as evidence](https://blog.bake.co.ke/wp-content/uploads/2025/05/HCCHRPET.276.2025-ICJ-v-CA-Internet-Shutdown-Case.pdf) in support of this landmark public interest case.
*   **Access Now’s press statement on censorship and human rights abuses in Tanzania.** Access Now published a [press statement](https://www.accessnow.org/press-release/keepiton-tanzanian-authorities-and-meta-must-reverse-course-and-respect-human-rights/) which cites OONI data on the blocking of Telegram and Signal in Tanzania.
*   **Amnesty International research report on internet censorship and surveillance in Pakistan.** Amnesty International published a [research report](https://www.amnesty.org/en/documents/asa33/0206/2025/en/) documenting internet censorship and surveillance in Pakistan, which makes extensive use of OONI data and OONI Explorer charts.
*   **ISOC Pulse report on social media blocks in Nepal.** Internet Society (ISOC) published a [report](https://pulse.internetsociety.org/en/shutdowns/internet-services-banned-in-nepal-september-2025/) documenting social media blocks in Nepal in September 2025, citing OONI data and including OONI Explorer charts.
*   **Access Now’s press statement on social media blocks in Nepal.** Access Now published a [press statement](https://www.accessnow.org/press-release/access-nows-statement-on-nepals-escalating-digital-repression-and-deadly-crackdown/) on the blocking of social media platforms in Nepal, citing OONI data.
*   **InterSecLab’s research report on the Internet Coup in Myanmar.** InterSecLab published a [research report](https://interseclab.org/wp-content/uploads/2025/09/The-Internet-Coup_September2025.pdf) analysing the leak of correspondence and documentation from Geedge Networks. The report refers to OONI data on the blocking of Tor in Myanmar.
*   **Meduza article encouraging the use of OONI tools in Russia.** One of the most prominent Russian media in exile, Meduza, published an [article](https://meduza.io/cards/tsenzury-v-runete-vse-bolshe-kak-mozhno-otslezhivat-blokirovki) explaining OONI tools, and encouraging their use in Russia for the investigation of internet censorship.
*   **Bloggers Association of Kenya (BAKE) research report on the State of the Internet in Kenya (2020-2024).** The Bloggers Association of Kenya (BAKE) published a [research report](https://ifreedoms.co.ke/wp-content/uploads/2025/08/State-of-the-Internet-in-Kenya-report-2020-2024.pdf) on the state of the internet in Kenya between 2020 to 2024, citing OONI data.
*   **Human Rights Watch report on internet censorship in Russia.** Human Rights Watch published a [research report](https://www.hrw.org/report/2025/07/30/disrupted-throttled-and-blocked/state-censorship-control-and-increasing-isolation) (“Disrupted, Throttled, and Blocked: State Censorship, Control, and Increasing Isolation of Internet Users in Russia”) on internet censorship in Russia, citing OONI data.
*   **Access Now’s press statement on social media blocks in Togo.** Access Now published a [press statement](https://www.accessnow.org/press-release/keepiton-togolese-authorities-must-uphold-human-rights-online-and-off-during-protests/) on the social media blocks in Togo amid protests, citing OONI data.
*   **FOCI 2025 paper on integrating OONI data into the Internet Yellow Pages.** In July 2025, a new [FOCI paper](https://petsymposium.org/foci/2025/foci-2025-0007.pdf) was published on integrating OONI data into the Internet Yellow Pages (IYP). As part of this paper, they also demonstrate how the integrated data can be utilized to jointly analyze OONI data with other datasets made available by IYP.
*   **ISOC Pulse report on social media blocks in Togo.** Internet Society (ISOC) published a [report](https://pulse.internetsociety.org/en/shutdowns/blocking-of-services-in-togo/) on their Pulse Shutdown platform documenting social media blocks in Togo in June 2025, citing an [OONI report](https://explorer.ooni.org/findings/167838678600).
*   **Bloggers Association of Kenya (BAKE) advocacy statement on the blocking of Telegram in Kenya.** Bloggers Association of Kenya (BAKE) published an [advocacy statement](https://blog.bake.co.ke/2025/06/26/joint-statement-on-internet-restrictions-and-media-blackout-2/) on the blocking of Telegram in Kenya, citing OONI data.
*   **Karisma Foundation report on the blocking of a news website and collateral damage in Colombia.** Our partner, [Karisma Foundation](https://ooni.org/partners/karisma-foundation/), published a [report](https://obi.karisma.org.co/2025-06-12-boqueo-del-sitio-web-tvlatino.com-%28y-otros%29/) documenting the blocking of a news media website in Colombia, as well as the resulting collateral damage affecting other unrelated sites, based on OONI data.
*   **Academic paper on throttling analysis in Russia based on OONI data.** Researchers at the University of New Mexico published a new [paper](https://dl.acm.org/doi/pdf/10.1145/3717867.3717919) examining throttling in Russia based on the analysis of OONI data.
*   **Amnesty International research report on internet censorship in Mozambique.** Amnesty International published a [research report](https://www.amnesty.org/en/documents/afr41/9225/2025/en/) documenting post-2024 election human rights violations in Mozambique, as well as the blocking of social media platforms based on OONI data and OONI Explorer charts.
*   **Paradigm Initiative’s Londa Digital Rights and Inclusion in Africa 2024 Report.** Our partner, [Paradigm Initiative](https://ooni.org/partners/paradigm-initiative/), published their [2024 Londa Digital Rights and Inclusion in Africa 2024 Report](https://paradigmhq.org/wp-content/uploads/2025/06/Londa-2024-1.pdf), which cites OONI data.
*   **Report on internet censorship in France.** In March 2025, we had the opportunity to publish a [guest report](https://ooni.org/post/2025-france-report/) (“A Legal and Technical Analysis of Internet Censorship in France”) by [Etienne Maynier](https://maynier.eu/) and Taziden analyzing Internet censorship in France based on OONI data. They also published a more in-depth legal and technical analysis in French on their [site](https://censxres.fr/technique/).
*   **Conexión Segura y Libre research report on internet censorship during elections in Venezuela.** Our partner, [Conexión Segura y Libre](https://ooni.org/partners/conexion-segura/), published a [research report](https://vesinfiltro.org/res/files/digital_repression-venezuela_elections-VEsinFiltro.pdf) documenting blocks in Venezuela based on OONI data during the country’s presidential elections.
*   **Access Now’s Annual #KeepItOn 2024 Report.** Access Now published their annual [2024 #KeepItOn Report on Internet shutdowns](https://www.accessnow.org/wp-content/uploads/2025/02/KeepItOn-2024-Internet-Shutdowns-Annual-Report.pdf) around the world, citing OONI data.
*   **Academic paper on internet censorship measurement.** OONI is discussed as a censorship measurement platform in a new [academic paper](https://arxiv.org/pdf/2502.14945) (“A Survey of Internet Censorship and its Measurement: Methodology, Trends, and Challenges”) on internet censorship measurement methodologies, trends, and challenges.
*   **ISOC Pulse report on the blocking of Twitter/X in the Democratic Republic of the Congo (DRC).** Internet Society (ISOC) published a [report](https://pulse.internetsociety.org/en/shutdowns/service-blocking-in-drc-january-2025/) documenting the blocking of Twitter/X in the DRC in February 2025, citing OONI data and including an OONI Explorer chart.
*   **Team CommUNITY Community Series blog post about OONI.** Team CommUNITY published a [blog post](https://www.digitalrights.community/blog/community-series-ooni) about OONI as part of their [Community Series](https://www.digitalrights.community/blog/tag/community+series) featuring stories of the people and projects behind the digital rights community.
*   **Deutsche Welle (DW) video about internet censorship.** Deutsche Welle (DW) published a [video about internet censorship](https://www.youtube.com/watch?v=DONill59C4k), which features clips from an interview with OONI’s Arturo Filastò.
*   **ISOC Pulse report on social media blocks in South Sudan.** As part of their [report](https://pulse.internetsociety.org/en/shutdowns/government-of-south-sudan-orders-blocking-of-social-media-for-at-least-30-days/) on social media blocks in South Sudan, Internet Society (ISOC) encouraged OONI Probe testing for the collection of relevant measurements.
*   **Open Culture Foundation’s OONI Research Project.** In January 2025, our partner, [Open Culture Foundation (OCF)](https://ooni.org/partners/open-culture-foundation/), launched their [2025 OONI Research Project](https://anoni.net/docs/en/what-is-ooni/) to promote OONI to local communities in Taiwan and encourage community participation in censorship measurement research.

We measure our impact by how useful OONI tools and data are to the internet freedom community. We were therefore delighted to see their continued use throughout 2025! Our warm thanks to the community.

## 2026

In light of funding challenges resulting from [U.S. government cuts](https://www.techpolicy.press/the-us-just-logged-off-from-internet-freedom/), we need to expand our fundraising efforts and optimize our resources to prioritize mission-critical activities in 2026. Our focus will be on **sustaining and stabilizing our organizational and technical infrastructure** so we can continue delivering this work effectively.

Our top priority is to maintain the availability of [OONI data](https://ooni.org/data): the world’s largest open dataset on internet censorship, consisting of billions of measurements collected across tens of thousands of networks from 245 counties and territories since 2012. We are equally committed to continuing [OONI Probe](https://ooni.org/install) releases, ensuring that our measurement client – installed on hundreds of thousands of devices worldwide – remains secure, functional, and able to perform and submit measurements for publication.

If funding permits, some key project highlights for 2026 include:

*   **New OONI Probe Desktop Multiplatform App.** To improve the long-term sustainability of the [OONI Probe apps](https://ooni.org/install/) and enable us to fix bugs and ship new features faster and more effectively, we have created an [OONI Probe Multiplatform App](https://github.com/ooni/probe-multiplatform). We [launched the OONI Probe Multiplatform App for Android and iOS](https://ooni.org/post/2025-launch-ooniprobe-multiplatform-app/) in 2025, and we aim to launch the OONI Probe Desktop Multiplatform App in 2026!
*   **New OONI Probe Dashboard.** To increase user engagement and help expand OONI censorship measurement coverage, we worked towards revamping the OONI Probe Dashboard with the goal of making the app more appealing and engaging. As part of this effort, we repurposed the Dashboard to include a summary of the user’s measurements alongside a new “OONI News” section. This allows users to track the measurement coverage they contribute and stay updated on new research reports and announcements from the OONI team. After working on the new Dashboard throughout the second half of 2025, we [released](https://github.com/ooni/probe-multiplatform/releases/tag/v6.0.0) it on OONI Probe Mobile in March 2026. Stay tuned for the Desktop version!
*   **OONI Anonymous Credential System.** To increase the trustworthiness of OONI data and protect the [OONI dataset](https://ooni.org/data/) from the intentional or unintentional submission of faulty measurements, we designed and implemented an anonymous credential system throughout 2025 in collaboration with [Michele Orrù](https://tumbolandia.net/), a cryptographer and expert in digital signatures and zero-knowledge proofs. In 2026, we will complete the process of integrating the solutions into the OONI software stack and deploy them to production.
*   **Reports on internet censorship around the world.** Based on OONI data, we aim to publish more [research reports](https://ooni.org/reports/) on internet censorship. We also aim to publish timely reports on emergent censorship events on the OONI [Censorship Findings](https://explorer.ooni.org/findings) page on an ongoing basis.

If you would like to support our work, please consider [donating to OONI](https://ooni.org/donate/).

Warm thanks to the global OONI community and to our [funders](https://ooni.org/about/supporters/) for supporting our work throughout 2025!

We are grateful to every [OONI Probe](https://ooni.org/install/) user out there. Thank you for your continued support in 2026!

{{<img src="images/image6.jpg">}}
