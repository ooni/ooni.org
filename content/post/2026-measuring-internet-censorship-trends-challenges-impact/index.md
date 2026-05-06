---
title: "Measuring Internet Censorship: Challenges, Trends, and Impact"
description: "Blog post about challenges, trends, and impact related to measuring internet censorship."
author: "Maria Xynou"
date: "2026-05-05"
tags: ["ooni", "isoc"]
categories: ["blog"]
---

*This post was originally published on the **[Internet Society Pulse blog](https://pulse.internetsociety.org/en/blog/2026/05/measuring-internet-censorship-challenges-trends-and-impact/)**.*

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

In short:
* Internet censorship is becoming more sophisticated, targeted, and harder to detect.
* OONI crowdsourced network measurement data enables research and supports advocacy and rapid response to Internet censorship events.
* OONI’s longitudinal data reveals several key trends in how Internet censorship is evolving globally, including targeted, intermittent blocks for short-term control, and long-term blocks for systemic suppression.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Internet censorship is becoming more sophisticated and harder to detect, making transparency more urgent than ever.

Countries like [Russia](https://ooni.org/post/2024-russia-report/) and [Kazakhstan](https://ooni.org/post/2024-kazakhstan-report/) are blocking access to many independent news media, while [social media restrictions during elections and protests](https://ooni.org/reports/social-media-im/) are increasingly common worldwide. Even democratic countries are expanding their censorship practices. For example, [Albania blocked TikTok](https://explorer.ooni.org/findings/274282914400) last year, while [Spain has intermittently blocked parts of the web](https://www.techradar.com/vpn/vpn-privacy-security/la-ligas-war-on-piracy-is-breaking-the-internet-in-spain-and-your-vpn-could-be-the-next-target) by targeting Cloudflare infrastructure used by LaLiga streaming sites.

Such cases are documented by the [Open Observatory of Network Interference (OONI)](https://ooni.org/), a nonprofit that hosts the [world’s largest open dataset on Internet censorship](https://ooni.org/data/), compiled from crowdsourced measurements. This blog post briefly discusses the challenges of measuring Internet censorship, emerging censorship trends, and how Internet measurement powers advocacy for human rights.

{{<table-of-contents>}}

# Challenges in Measuring Internet Censorship

Confirming Internet censorship is [rarely as simple](https://ramakrishnansr.com/assets/censorship-data-analysis.pdf) as “up” or “down”, blocked or not.

Many factors can make a service appear inaccessible even when it isn’t intentionally restricted. A website on an unreliable server may be temporarily unavailable without any government interference, and users on unstable networks may struggle to access websites or apps. Even [DNS misconfigurations](https://ooni.org/post/not-quite-network-censorship/) can prevent access, though they are unrelated to censorship.

[False positives](https://ooni.org/support/faq/#what-are-false-positives) are common, and the challenge is compounded by the many ways censorship can be implemented—from Domain Name System (DNS) manipulation and IP blocking to subtler methods like throttling or injecting forged responses. A website may be accessible on one network but blocked on another, making widespread, decentralized testing essential for reliable conclusions.

[OONI](https://ooni.org/) addresses these challenges by developing [open measurement methodologies](https://github.com/ooni/spec/tree/master/nettests) — encouraging peer review and expert feedback — and by using control measurements for comparison. We also use a [probabilistic metric](https://docs.ooni.org/data/pipeline-design/) to estimate the likelihood that a given resource is restricted within a specific network and time period. Implemented in the [OONI Pipeline v5](https://github.com/ooni/data), this approach compares measurements and applies heuristics to classify results as “blocked,” “down,” or “OK” with certain confidence estimates.

Measurements collected directly from local networks—rather than through remote testing—are especially valuable because they reflect how users actually experience censorship. When volunteers run tests based on content they encounter as blocked and within their local context, the data is more likely to capture sudden, context-specific censorship events.

This is how OONI works: people around the world run [OONI Probe](https://ooni.org/install/) and contribute measurements from the networks they’re connected to. [Data](https://ooni.org/data) availability depends on what they choose to test, when, and where, so coverage varies widely across countries and even between networks within the same country. Uneven measurement coverage presents an important challenge, as detecting—and confirming—censorship reliably requires continuous data to increase confidence.

Censorship events often occur in high-risk situations -- such as during anti-government protests -- where testing carries real [risks](https://ooni.org/about/risks/) for contributors, creating additional challenges for measurement and censorship detection. At OONI, we prioritize user safety and ensure that anyone contributing measurements provides [informed consent](https://ooni.org/support/ooni-probe-desktop#onboarding-informed-consent), which we obtain through a quiz in our [OONI Probe apps](https://ooni.org/install/).

# Emerging Trends in Internet Censorship

OONI’s [longitudinal data](https://ooni.org/data) reveals several key trends in how Internet censorship is evolving globally:

### Globalization and Normalization of Internet Censorship

Network-level censorship is no longer limited to countries like China or Iran. Today, nearly every country implements some form of censorship, though what is blocked -- and the impact of those blocks -- varies widely. Most countries now have both the technical infrastructure and legal frameworks to enforce network-level restrictions.

### Targeted, Intermittent Blocks for Short-term Control

Many governments deploy [temporary censorship during politically sensitive events](https://ooni.org/reports/social-media-im/), such as elections, protests, or conflicts. These blocks often target specific websites or apps -- for example, [WhatsApp and Facebook were recently blocked in Uganda](https://explorer.ooni.org/findings/352623460000#social-media-blocks-following-ugandas-2026-general-election) following the 2026 general election. Typically lasting from a few hours to several weeks, these short-term measures limit political and economic costs while allowing authorities to control public discourse and restrict information flow when it matters most.

### Long-term Blocks for Systemic Suppression

Lasting for years, long-term blocks are designed to enforce ideologies, policies, and laws on the Internet. Unlike short-term blocks that target specific sites or apps, these measures often restrict entire categories of content deemed legally or socially unacceptable. Such censorship frequently silences marginalized communities and reinforces the status quo. Examples include the [blocking of websites related to LGBTQI rights](https://ooni.org/post/2021-no-access-lgbtiq-website-censorship-six-countries/), [ethnic or religious minority groups](https://ooni.org/post/iran-internet-censorship/#human-rights-issues), and [reproductive rights](https://ooni.org/post/2019-blocking-abortion-rights-websites-women-on-waves-web/). In Tanzania, for example, [extensive blocks targeting LGBTQI-related content](https://ooni.org/post/2024-tanzania-lgbtiq-censorship-and-other-targeted-blocks/) have been implemented following years of crackdowns on LGBTQI communities.

### Less Transparent Censorship in an Increasingly Encrypted Web

As more websites adopt HTTPS and encryption standards, censorship has become less visible. Traditional [block pages](https://ooni.org/support/glossary/#block-page), which inform users when access is intentionally restricted, are now less common. Instead, governments increasingly interfere with the Transport Layer Protocol (TLS) itself, often using advanced equipment such as Deep Packet Inspection (DPI) technology. OONI data [shows](https://ooni.org/reports/) that TLS-based interference is being documented in many countries, reflecting the growing reach of the global censorship technology industry. With TLS interference, users typically encounter a generic connection error rather than a block page, making it difficult to distinguish intentional censorship from network failures or other technical issues. In this way, ironically, a more encrypted web can make censorship less transparent.

### Throttling and Degraded Service

Governments are increasingly using bandwidth throttling as a subtler form of control, limiting access to certain services without outright blocking them. This can slow messaging apps or other platforms, discouraging their use while leaving the connection technically intact. To investigate such cases, OONI developed a [methodology for measuring targeted throttling](https://github.com/ooni/probe-cli/blob/master/docs/design/dd-007-throttling.md), which was applied and validated through real-world investigations on cases in [Kazakhstan](https://ooni.org/post/2023-throttling-kz-elections/), [Russia](https://ooni.org/post/2022-russia-blocks-amid-ru-ua-conflict/#twitter-throttled), and [Türkiye](https://ooni.org/post/2025-turkiye-throttling-social-media/).

### Censorship Versus Privacy Technologies

Authorities are also targeting emerging privacy technologies. Iran, for example, has [blocked encrypted DNS](https://ooni.org/post/2022-iran-blocks-social-media-mahsa-amini-protests/#blocking-of-dns-over-https-doh) since at least 2020, while [Russia blocked Encrypted Client Hello (ECH)](https://theins.ru/news/275980) in November 2024. These measures make it harder for users to circumvent censorship while also reducing online privacy. In response, OONI developed new experiments to [measure ECH](https://github.com/ooni/spec/blob/master/nettests/ts-039-echcheck.md) and [encrypted DNS](https://github.com/ooni/spec/blob/master/nettests/ts-028-dnscheck.md). These are integrated into [OONI Probe](https://ooni.org/install), with measurements published as [open data](https://ooni.org/data) in real-time from around the world.

### Rise of National Intranets and Allowlisting Approaches

Some governments are moving toward highly controlled national networks. In countries like [Iran](https://www.kentik.com/blog/from-stealth-blackout-to-whitelisting-inside-the-iranian-shutdown/), [Russia](https://habr.com/ru/articles/997088/), and [Myanmar](https://www.article19.org/resources/unplugged-in-myanmar-internet-restrictions-following-the-military-coup/), authorities are experimenting with “allowlisting”, limiting access to approved services or websites, and effectively creating walled-off portions of the Internet.

These trends demonstrate that Internet censorship is becoming more sophisticated, targeted, and harder to detect, highlighting the importance of continuous measurement and advocacy to safeguard online access and digital rights.

# From Measurement to Advocacy

Measuring networks enables us to observe how Internet traffic is handled in practice. Because censorship is often implemented at the network level, such measurements can reveal *what* is blocked, *how* it is blocked, *when* it occurs, and which network is responsible. This level of insight can provide evidence of censorship, making network measurement a powerful tool for advocacy aimed at defending an open Internet.

For this reason, OONI has been an active member of the [global #KeepItOn campaign](https://www.accessnow.org/keepiton) since 2016, supporting hundreds of human rights organizations worldwide in using [OONI data](https://ooni.org/data/) to advocate against Internet shutdowns. As a result, OONI data has supported advocacy efforts challenging social media blocks in numerous countries, including [Gabon](https://www.accessnow.org/press-release/keepiton-social-media-restore-access-in-gabon/), [Tanzania](https://www.accessnow.org/press-release/keepiton-tanzanian-authorities-and-meta-must-reverse-course-and-respect-human-rights/), [Nepal](https://www.accessnow.org/press-release/access-nows-statement-on-nepals-escalating-digital-repression-and-deadly-crackdown/), [Togo](https://www.accessnow.org/press-release/keepiton-togolese-authorities-must-uphold-human-rights-online-and-off-during-protests/), and [Mozambique](https://www.hrw.org/news/2024/11/06/mozambique-post-election-internet-restrictions-hinder-rights), as well as policy and legal interventions, such as High Court petitions in [Pakistan](https://web.archive.org/web/20190322194634/pakistantoday.com.pk/2019/03/21/submit-reply-or-face-contempt-ihc-tells-pta-chairman/) and [Kenya](https://blog.bake.co.ke/wp-content/uploads/2025/05/HCCHRPET.276.2025-ICJ-v-CA-Internet-Shutdown-Case.pdf).

At the same time, the scale of OONI’s dataset strengthens its value for advocacy. With [more than 3 billion measurements](https://explorer.ooni.org/) collected from 30,000 networks across 245 countries and territories since 2012, [OONI data](https://ooni.org/data) is the world’s largest open dataset on Internet censorship of its kind. Every month, tens of millions of new measurements are collected from around 180 countries. Every day, new measurements from around the world are published in real-time.

OONI data is a [rich dataset](https://ooni.org/data) waiting to be explored. Its breadth and depth enable research, while the real-time publication of measurements supports advocacy and rapid response efforts. It is regularly featured in [ISOC’s Pulse Shutdown project](https://pulse.internetsociety.org/en/shutdowns/) to document social media blocks worldwide – and you can use it too. [Get involved](https://ooni.org/get-involved/) and help defend a free and open Internet.
