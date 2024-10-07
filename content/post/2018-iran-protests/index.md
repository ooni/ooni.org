---
title: "Iran Protests: OONI data confirms censorship events (Part 1)"
author: "Maria Xynou, Arturo Filastò"
date: "2018-01-05"
tags: ["iran", "censorship", "country-ir", "theme-im", "theme-social_media", "theme-circumvention"]
categories: ["report"]
---

At this point, you have probably read all about the
[major anti-government protests](https://www.theguardian.com/world/2018/jan/02/iran-protests-how-did-they-start-and-where-are-they-heading)
that erupted across Iran over the last week. You may have even read about how services like
[Telegram and Instagram were blocked](https://motherboard.vice.com/en_us/article/wjpxjy/iran-is-blocking-the-internet-to-shut-down-protests),
reportedly as part of a government attempt to stifle the unrest.

We publish this post to share [OONI network measurement data](https://api.ooni.io/files/by_country/IR)
collected from Iran between 28th December 2017 (when the protests started) to
2nd January 2018. OONI data confirms the blocking of Telegram, Instagram, and
Facebook Messenger amidst Iran’s protests and reveals how blocks were
implemented.

## Blocking of Telegram

Telegram is [extremely popular](https://www.theguardian.com/world/2016/feb/08/telegram-the-instant-messaging-app-freeing-up-iranians-conversations)
in Iran and could be viewed as [an organizing tool for protests](https://edition.cnn.com/2018/01/03/middleeast/iran-protests-social-media-ban-intl/index.html),
thus motivating authorities to block access to it.

OONI’s [Telegram test](/nettest/telegram/)
is designed to measure the blocking of Telegram’s app and web interface.
Network measurements collected from three local vantage points in Iran show
that ISPs started blocking access to Telegram’s app and web interface on New
Year’s Eve, as illustrated in the table below.

Date | ASN | web.telegram.org | Telegram app
---- | --- | ---------------- | ------------
2018-01-02 | AS44244 | [BLOCKED](https://explorer.ooni.io/measurement/20180102T101700Z_AS44244_HTdeBxumx5vYoSvoRxrIfJSN59BDf4KW7M86O4ZHhpXCpIUdyt) | [TCP blocking](https://explorer.ooni.io/measurement/20180102T101700Z_AS44244_HTdeBxumx5vYoSvoRxrIfJSN59BDf4KW7M86O4ZHhpXCpIUdyt)
2018-01-02 | AS197207 | [BLOCKED](https://explorer.ooni.io/measurement/20180102T045858Z_AS197207_sLHaB8SREM71nVdv3bM01iBxjy4ojSjYXwFdw0fVZcteZ9mRBw) | [TCP blocking](https://explorer.ooni.io/measurement/20180102T045858Z_AS197207_sLHaB8SREM71nVdv3bM01iBxjy4ojSjYXwFdw0fVZcteZ9mRBw)
2018-01-02 | AS16322 | [BLOCKED](https://explorer.ooni.io/measurement/20180102T034225Z_AS16322_vav2OTGBB7mpLZKKjTUnnTaexhKwNIbxjiI9Y6jgw0zf8hpEIc) | [TCP blocking](https://explorer.ooni.io/measurement/20180102T034225Z_AS16322_vav2OTGBB7mpLZKKjTUnnTaexhKwNIbxjiI9Y6jgw0zf8hpEIc)
2018-01-01 | AS16322 | [BLOCKED](https://explorer.ooni.io/measurement/20180101T052415Z_AS16322_1pJHkKEXpdv0o48SftrH2Dzhu8GuDmAcnU32lzAopAqTo9kKDc) | [TCP blocking](https://explorer.ooni.io/measurement/20180101T052415Z_AS16322_1pJHkKEXpdv0o48SftrH2Dzhu8GuDmAcnU32lzAopAqTo9kKDc)
2018-01-01 | AS44244 | [Accessible](https://explorer.ooni.io/measurement/20180101T033952Z_AS44244_QYJhhDS8HuyRLzXJP4VX4SLKeLfl4ckLdR0rbfinxFJWq7vBBz) | [Accessible](https://explorer.ooni.io/measurement/20180101T033952Z_AS44244_QYJhhDS8HuyRLzXJP4VX4SLKeLfl4ckLdR0rbfinxFJWq7vBBz)
2018-01-01 | AS197207 | [BLOCKED](https://explorer.ooni.io/measurement/20180101T001142Z_AS197207_YLpg7Guxq0oj5TG6NUojXGWUB25Fess4nrjla2fRUTxX5x6CiP) | [TCP blocking](https://explorer.ooni.io/measurement/20180101T001142Z_AS197207_YLpg7Guxq0oj5TG6NUojXGWUB25Fess4nrjla2fRUTxX5x6CiP)
2017-12-31 | AS197207 | [BLOCKED](https://explorer.ooni.io/measurement/20171231T221444Z_AS197207_vdCHuyjVnfHYcBnZM2S1r0iIxpGX7svtPHkrV5F8vKT2QT3jU1) | [TCP blocking](https://explorer.ooni.io/measurement/20171231T221444Z_AS197207_vdCHuyjVnfHYcBnZM2S1r0iIxpGX7svtPHkrV5F8vKT2QT3jU1)
2017-12-31 | AS44244 | [Accessible](https://explorer.ooni.io/measurement/20171231T230011Z_AS44244_fAAO2VeUQFkbE6190zvGGOqII8GRnP7DjjQnNT0JpAPV6lxTgg) | [Accessible](https://explorer.ooni.io/measurement/20171231T230011Z_AS44244_fAAO2VeUQFkbE6190zvGGOqII8GRnP7DjjQnNT0JpAPV6lxTgg)
2017-12-30 | AS16322 | [Accessible](https://explorer.ooni.io/measurement/20171230T003401Z_AS16322_ZnXcDaReWeIS843IsLxbZ7cKEAUVvzWr5uLWFQR1nPSK3rg1OT) | [Accessible](https://explorer.ooni.io/measurement/20171230T003401Z_AS16322_ZnXcDaReWeIS843IsLxbZ7cKEAUVvzWr5uLWFQR1nPSK3rg1OT)
2017-12-29 | AS16322 | [Accessible](https://explorer.ooni.io/measurement/20171229T003153Z_AS16322_5PjPILyaVqdVFGLlxDGVlExLrIHF3f4WaEm6LhKHEBJw11cewD) | [Accessible](https://explorer.ooni.io/measurement/20171229T003153Z_AS16322_5PjPILyaVqdVFGLlxDGVlExLrIHF3f4WaEm6LhKHEBJw11cewD)
2017-12-28 | AS16322 | [Accessible](https://explorer.ooni.io/measurement/20171228T003235Z_AS16322_xcZ8zEMUMWPXWIMebMYkNxNT0qmQwIoxv7FiuIW6HVmiJBYmbw) | [Accessible](https://explorer.ooni.io/measurement/20171228T003235Z_AS16322_xcZ8zEMUMWPXWIMebMYkNxNT0qmQwIoxv7FiuIW6HVmiJBYmbw)

Irancell ([AS44244](https://stat.ripe.net/AS44244)) only started blocking
Telegram on 2nd January 2018, while MCI ([AS197207](https://stat.ripe.net/AS197207))
started blocking access to the instant messaging app on 31st December 2017.
Telegram was also blocked by Pars Online ([AS16322](https://stat.ripe.net/AS16322))
as of 1st January 2018, but it remains unclear (due to the lack of
measurements) if the block started earlier.

## Blocking of Instagram

OONI’s [Web Connectivity test](/nettest/web-connectivity/) is designed to
measure the DNS, HTTP, and TCP/IP blocking of websites. Network measurement
data collected from this test shows the blocking of Instagram in Iran.

The table below summarizes OONI findings.

Date | ASN | Instagram status
---- | --- | ----------------
2018-01-02 | AS43754 | [BLOCKED](https://explorer.ooni.io/measurement/20180102T160319Z_AS43754_K6whakITvTdP9z0cewb2H7rpq06ukASYsNbvSHdFnG9TdCWyGE?input=https:%2F%2Fwww.instagram.com%2F)
2018-01-02 | AS48159 | [BLOCKED](https://explorer.ooni.io/measurement/20180102T142541Z_AS48159_RF0zhKX8E8I6iNyJqIDMIGUjaGlaTndYnZHORVaXQ0Tb6b4pl8?input=https:%2F%2Fwww.instagram.com%2F)
2018-01-02 | AS58085 | [BLOCKED](https://explorer.ooni.io/measurement/20180102T112541Z_AS58085_tltdsKq4LaV69fTvtWQjUKj3iPVAyruloixLpVFr8FR02HvwJd?input=https:%2F%2Fwww.instagram.com%2F)
2018-01-02 | AS44244 | [BLOCKED](https://explorer.ooni.io/measurement/20180102T101723Z_AS44244_DMj7NA8LBFjzQgkFTLDfAcuOsdyuRD7hXt5mofzjKCU3zE1a5Y?input=https:%2F%2Fwww.instagram.com%2F)
2018-01-02 | AS197207 | [BLOCKED](https://explorer.ooni.io/measurement/20180102T045843Z_AS197207_NFJCFhKIlwsIq0K4Q8s1XmJhSjELOElch4Mbsd80pn9q36XYX3?input=https:%2F%2Fwww.instagram.com%2F)
2018-01-02 | AS16322 | [BLOCKED](https://explorer.ooni.io/measurement/20180102T034311Z_AS16322_aGkXQtVYZTzOaZIDlIp1ausyEdwvC1dQcIF4GT2z4Hg2wNZaoX?input=https:%2F%2Fwww.instagram.com%2F)
2018-01-01 | AS197207 | [BLOCKED](https://explorer.ooni.io/measurement/20180101T153148Z_AS197207_UPOzygVf7OQQBYTxIu9xl7ZyzxrkFKtcmGoyD3DWo8YZ7ZgivW?input=https:%2F%2Fwww.instagram.com%2F)
2018-01-01 | AS16322 | [BLOCKED](https://explorer.ooni.io/measurement/20180101T190141Z_AS16322_8Vp1Xv5IdLupkDMV3w4rkSsbV5vJFN0ym9sY4UvawSfq4JU4VH?input=https:%2F%2Fwww.instagram.com%2F)
2018-01-01 | AS57218 | [BLOCKED](https://explorer.ooni.io/measurement/20180101T015120Z_AS57218_xf9ppqVOEFKFtrsvpcncwLGGQND04nuPCJ2RTUqQUhOTY24Q3S?input=https:%2F%2Fwww.instagram.com%2F)
2018-01-01 | AS44244 | [Accessible](https://explorer.ooni.io/measurement/20180101T010347Z_AS44244_bjDnLSqe6eGYGPkodhq583yhtIQdIsJuoLxlbbEeoLfh7VDGpb?input=https:%2F%2Fwww.instagram.com%2F)
2017-12-31 | AS197207 | [BLOCKED](https://explorer.ooni.io/measurement/20171231T201234Z_AS197207_w4m957v6FAJO8jbQ5qFCvDu6slbUFRJx0D1yIHU2HXUtrmWtRN?input=https:%2F%2Fwww.instagram.com%2F)
2017-12-31 | AS16322 | [BLOCKED](https://explorer.ooni.io/measurement/20171231T154147Z_AS16322_IZdxCBFkgX12cVDYf5drtmBDGFVoeakrAR3OCv7C3w0R9642Yw?input=https:%2F%2Fwww.instagram.com%2F)
2017-12-30 | AS16322 | [Accessible](https://explorer.ooni.io/measurement/20171230T011323Z_AS16322_q9kI0NM5y1eykajnwiLC0pp3jdl3rjwFL6fC6vKDTZy6lqX9uM?input=https:%2F%2Fwww.instagram.com%2F)
2017-12-29 | AS16322 | [Accessible](https://explorer.ooni.io/measurement/20171229T011549Z_AS16322_7UFb7En3w29tYH4sjOW4LbPORrIxeiXtf25z72ien06PoWF35l?input=https:%2F%2Fwww.instagram.com%2F)
2017-12-28 | AS16322 | [Accessible](https://explorer.ooni.io/measurement/20171228T011331Z_AS16322_fcAHo4Fl4gSDeKNi7afUerG6BQHWvL5DJ9Jlf2ccAJmF6lQ4Mc?input=https:%2F%2Fwww.instagram.com%2F)

Similarly to Telegram, OONI data shows that Iranian ISPs started blocking
access to Instagram on 31st December 2017, and that Irancell (AS44244) only
started blocking access on 2nd January 2018. ParsOnline Tehran (AS16322)
clearly started blocking access to Instagram on 31st December 2017, while
network measurements collected from 7 different ISPs in total show the blocking
of the site on 1st and 2nd January 2018.

Further findings are available in [Part 2](https://ooni.org/post/2018-iran-protests-pt2/) of this research. The latest findings show that Instagram
was blocked through the use of Deep Packet Inspection (DPI) technology which
targeted the TLS protocol.

## Blocking of Facebook Messenger

Facebook Messenger has been blocked in Iran independently from the recent
protests. We previously [reported](/post/iran-internet-censorship/) on the DNS
blocking of Facebook Messenger in a research report that analyzed network
measurements collected from Iran between 2014 to 2017. We generally measure the
reachability of Facebook Messenger (in Iran and elsewhere around the world)
through OONI’s [Facebook Messenger test](/nettest/facebook-messenger/).

More recent measurements, collected during Iran’s protests, show that Facebook
Messenger remains blocked in (at least) three networks.

Date | ASN | Facebook Messenger status
---- | --- | -------------------------
2018-01-02 | AS44244 | [BLOCKED](https://explorer.ooni.io/measurement/20180102T101654Z_AS44244_RiqeB1vcoY1fDs1viK0ym7WAK2yd0Mh2ePgzNXI2NVvuxrU3NJ)
2018-01-02 | AS197207 | [BLOCKED](https://explorer.ooni.io/measurement/20180102T045831Z_AS197207_2y7lxVI1EJgbuJju5hFhadiYjAyBb3m6Wh1ntIX8hncLZgW21S)
2018-01-02 | AS16322 | [BLOCKED](https://explorer.ooni.io/measurement/20180102T034222Z_AS16322_f0ehhH1k5lXJLi7w8qPuIb2QWvIMryATMGzWpvkBfetv8MdY5O)
2018-01-01 | AS16322 | [BLOCKED](https://explorer.ooni.io/measurement/20180101T043106Z_AS16322_c3qKiE1pM0Z5lptyQQdAYrgATswiEXoEoFK4T1vTTf77wZaK1Q)
2018-01-01 | AS44244 | [BLOCKED](https://explorer.ooni.io/measurement/20180101T031821Z_AS44244_lKJ9ljreRbeswJh12HC99uL6sXlXYGN193t0nakCX2az6MqTBW)
2018-01-01 | AS197207 | [BLOCKED](https://explorer.ooni.io/measurement/20180101T001137Z_AS197207_VoB53NyAthzATOW6rymyZbkqg3FLX3t325rW9LW9JMalQOaV5V)
2017-12-31 | AS44244 | [BLOCKED](https://explorer.ooni.io/measurement/20171231T195843Z_AS44244_t6ieNvB4gNpXwiHrLtcrq0aR9bOisqGzmLSSHCPR8dzgSV0mgQ)
2017-12-31 | AS197207 | [BLOCKED](https://explorer.ooni.io/measurement/20171231T154530Z_AS197207_UQ8MqsirgEh6k3UuRGL9picPEGGrkoXIkFt6ivLbLShphdplYF)
2017-12-31 | AS16322 | [BLOCKED](https://explorer.ooni.io/measurement/20171231T154142Z_AS16322_63VIhUm96f3babR389lMM0in4pYNmMG9QCuXM8aMQi2m8kEKZZ)
2017-12-30 | AS16322 | [BLOCKED](https://explorer.ooni.io/measurement/20171230T003349Z_AS16322_qzvOo1qmgMHINGMZBUOdRgFe40QOX9p1e5lsPVS3AkTX2hRs17)
2017-12-29 | AS16322 | [BLOCKED](https://explorer.ooni.io/measurement/20171229T003147Z_AS16322_fzjX7My1C93oz545rFYs5vEuwyq3jlER4Z2mSkSNsVDRLEDEJT)
2017-12-28 | AS16322 | [BLOCKED](https://explorer.ooni.io/measurement/20171228T003221Z_AS16322_nwfFETneJuavBlAwo1rCBECf2zvu8y6Efs4beBXDKJA4UkKFI4)
2017-12-27 | AS16322 | [BLOCKED](https://explorer.ooni.io/measurement/20171227T003145Z_AS16322_XOs0nsxyMG6mcAeQEhXNI2mWRy7tXSo9IscrNndzjUd54ddqVM)
2017-12-26 | AS16322 | [BLOCKED](https://explorer.ooni.io/measurement/20171226T020005Z_AS16322_iMPsKnKM6ztnczJCg9DksWQU9zvoSmfRfQOZrmBX2fJKuLi275)
2017-12-26 | AS44244 | [BLOCKED](https://explorer.ooni.io/measurement/20171226T023728Z_AS44244_kntaycxzz2fgrCIzmqd79VGZCBxQxkZpY1qCzPd2uySkjalRFc)

In contrast, WhatsApp appears to be [accessible](https://explorer.ooni.io/measurement/20180102T101645Z_AS44244_ahvY6PoUnZrqw71UXnUpa6ajRlbmXbho4J1rSMF5Q4gtNjBkUp) in Iran.

{{<img src="images/whatsapp-ok.png" title="WhatsApp measurements table" alt="Iran Protests: OONI data confirms censorship events (Part 1) - WhatsApp measurements table">}}

Viber [used to be the most popular instant messaging app in Iran](https://www.theguardian.com/world/2016/feb/08/telegram-the-instant-messaging-app-freeing-up-iranians-conversations),
before it got blocked by authorities. Then millions switched over to Telegram,
making it the most widely used instant messaging app in the country. Now that
Telegram is blocked too (and it remains unclear if authorities plan to lift the
ban), one can’t help but wonder if this will prompt a mass switch to
WhatsApp - particularly given its currently accessibility in Iran.

## Blocking of Tor

The [Tor anonymity network](https://www.torproject.org/) is free software that
allows its users to browse the web anonymously and to circumvent internet
censorship. [Tor Metrics](https://metrics.torproject.org/) (below) show a
sudden spike in Tor usage on 31st December 2017, when ISPs started blocking
access to Telegram and Instagram in Iran.

{{<img src="images/userstats-relay-country-ir-2017-10-07-2018-01-05-off.png" title="Tor Metrics graph" alt="Iran Protests: OONI data confirms censorship events (Part 1) - Tor Metrics Graph">}}

However, Tor Metrics suggest that Iranian ISPs may have started blocking access
to the Tor network thereafter, as indicated by the subsequent drop in Tor
usage. This is corroborated by data collected by
OONI’s [Vanilla Tor test](/nettest/vanilla-tor/), which is designed to measure
the reachability of the Tor network.

OONI data from [29th](https://explorer.ooni.io/measurement/20171229T050143Z_AS16322_2VknFuBXi9Orcctp3NotFJjTiNMI8LklGTTTCUGq01M6R9OiU6) &
[30th](https://explorer.ooni.io/measurement/20171230T014010Z_AS16322_bnUxGr3DOhPc0oTKs9AQpcRzEZo0CcgkwE3lCr5VHGo2HNW50G) December 2017
shows that Tor (without bridges) was bootstrapping properly in Iran. On 31st December 2017, when ISPs started blocking social media,
Tor still appeared to be bootstrapping, but was [very slow](https://explorer.ooni.io/measurement/20171231T154515Z_AS197207_6VGVYspnVqF0d4FooRmiEToqyu53y0OUSVvHEg1v7GPw1o41vh)
(138 seconds vs ~40 second average for the past 6 months). On 1st January 2018, the bootstrap time of
Tor was [even slower](https://explorer.ooni.io/measurement/20180101T010338Z_AS44244_1dJ7ZdAHCqHaIlKREsTf1dA3FLIUfZZ2XMmuRyVCp9yCV4Spd3) (273 seconds).
And in some networks, Tor was [blocked](https://explorer.ooni.io/measurement/20180101T060537Z_AS197207_wEXnoMiMbJej8EGvRn4w3LV2LSW0G5cxzHrblj0bqnVu6S6pje) entirely.
On 2nd January 2018, however, we found Tor to be [blocked](https://explorer.ooni.io/measurement/20180102T034214Z_AS16322_thDKlaNosdtRfJvBNrCPatlalZhdfeVuz2bjMfElitvGCABu6k)
in all networks (where measurements were collected) in Iran.

## Circumventing censorship

Even though the Tor network is blocked in Iran, it may be possible to connect
to it through the use of [Tor bridges](https://bridges.torproject.org/).
When configuring Tor Browser, you can connect to the Tor network by using obfs4
bridges. You can obtain obfs4 bridges by visiting
https://bridges.torproject.org/ or by sending an email to
bridges@torproject.org.

To circumvent the blocking of mobile applications, like Telegram or Facebook
Messenger, Android users can try enabling bridges and the [VPN mode of Orbot](https://www.torproject.org/docs/android.html.en)
which enables all apps on their device to run through the Tor network.

## Reproducible research

To measure the blocking of Telegram, Facebook Messenger, or WhatsApp, [run OONI Probe on Linux, macOS](https://ooni.org/install/ooniprobe/), or on a [Raspberry Pi](https://ooni.org/install/lepidopter/).

To measure the blocking of specific websites:

1. Install the [OONI Probe mobile app](https://ooni.org/install/)

2. Add those websites (e.g.`https://www.instagram.com`) to [OONI Run](https://run.ooni.io/)

3. Generate an OONI Run link to test those sites

All network measurement data based on your testing will be published via the following resources:

* [OONI API](https://api.ooni.io/)

* [OONI Explorer](https://explorer.ooni.org/world/)

## Acknowledgements

We thank all the anonymous volunteers in Iran who have run and continue
to run [OONI Probe](/install/), thus making this research possible.

**This post has been updated on 14th February 2018 following the [publication of further research](https://ooni.org/post/2018-iran-protests-pt2/).**
