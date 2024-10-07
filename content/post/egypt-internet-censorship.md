---
title: "The State of Internet Censorship in Egypt"
author: "Leonid Evdokimov (OONI), Maria Xynou (OONI), Mohammad El-Taher (AFTE), Hassan Al-Azhary (AFTE), Sarah Mohsen (AFTE)"
date: "2018-07-02"
tags: ["egypt", "censorship", "research-report", "country-eg", "theme-news_media", "theme-circumvention"]
categories: ["report"]
---

{{< coverimg src="/post/egypt-internet-censorship/EgyptCover.png" src2x="/post/egypt-internet-censorship/EgyptCover@2x.png"  >}}

***The report uncovers anomalies on Egyptian networks, including
censorship and the hijacking of unencrypted HTTP connections for
advertising and cryptocurrency mining.***

{{< oonibtn href="/documents/Egypt-Internet-Censorship-AFTE-OONI-2018-07.pdf" text="Read full report in English" >}}

{{< oonibtn href="/documents/Egypt-Internet-Censorship-AFTE-OONI-2018-07.AR.pdf" text="Read full report in Arabic" >}}

**[Read the summary of the report in Arabic](/documents/summary-egypt-internet-censorship-arabic.pdf)**

Last year, Egypt [ordered the blocking of 21 news websites](https://cpj.org/2017/05/egypt-blocks-access-to-21-news-websites.php).
[OONI](https://ooni.org/), a censorship measurement project
under the Tor Project, responded by publishing a
[report](https://ooni.org/post/egypt-censors/) on the
blocking of (at least) 10 media websites, including [Mada Masr](https://explorer.ooni.org/measurement/20170527T022637Z_AS24863_a2cVejuvTKddBoVLe3DyDGnPfEnaoUAmP51zo3jTJNEdF6iJJT?input=https:%2F%2Fmadamasr.com)
and [Al Jazeera](https://explorer.ooni.org/measurement/20170524T220920Z_AS36935_oaDJX0uN8fMLncEu9NQ794dvX4bC3zFejdVouFgsmlHukkjCsn?input=https:%2F%2Fwww.aljazeera.net).
In an attempt to identify the remaining blocked sites, Egypt’s
[Association for Freedom of Thought and Expression (AFTE)](https://afteegypt.org/) ran [OONI Probe](https://ooni.org/install/) across multiple networks
in Egypt. They subsequently published [two research reports](https://afteegypt.org/right_to_know-2/publicationsright_to_know-right_to_know-2/2017/06/04/13069-afteegypt.html?lang=en),
uncovering the blocking of hundreds of URLs (which expand beyond media
sites).

OONI and AFTE joined forces. Today, we publish a joint research report
on internet censorship in Egypt, based on our analysis of [OONI network measurements](https://api.ooni.io/files/by_country/EG) collected
between January 2017 to May 2018.

Our research report is available
**[here](/documents/Egypt-Internet-Censorship-AFTE-OONI-2018-07.pdf)**.

Below we share some of the key findings.

# Pervasive media censorship

[More than 1,000 URLs](/post/egypt-internet-censorship/eg-anomalous-urls.csv)
presented network anomalies throughout the testing period,
[178](/post/egypt-internet-censorship/eg-blocked-sites.csv)
of which consistently presented a high ratio of HTTP failures, strongly
suggesting that they were blocked. Rather than serving block pages
(which would have provided a notification of the blocking), Egyptian
ISPs appear to primarily block sites through the use of Deep Packet
Inspection (DPI) technology that resets connections.

In some cases, instead of RST injection, ISPs drop packets, suggesting a
variance in filtering rules. In other cases, ISPs [interfere with the SSL encrypted traffic](/post/egypt-internet-censorship/eg-ssl-interference-cloudflare.csv)
between Cloudflare’s Point-of-Presence in Cairo and the backend servers
of sites
([psiphon.ca](https://explorer.ooni.org/measurement/20180326T100410Z_AS8452_gn91NHg6tJwnsfwGML6PDsOErBReeB02oh9isOrkRIRgKs30R7?input=https:%2F%2Fpsiphon.ca),
[purevpn.com](https://explorer.ooni.org/measurement/20180318T090929Z_AS8452_gf96lwrIRx9WnZ1ed8QRhi1sMu2ONRcdleOPfxVGw2yd3Yvf7o?input=https:%2F%2Fwww.purevpn.com%2F)
and
[ultrasawt.com](https://explorer.ooni.org/measurement/20180103T093454Z_AS8452_sVEGr9loIPSudsem4KhVtVUT7MYgSonjcQ0itRWWo1DmMGAPEW?input=https:%2F%2Fwww.ultrasawt.com))
hosted outside of Egypt. Latency measurements over the last year and a
half also suggest that Egyptian ISPs may have changed their filtering
equipment and/or techniques, since the latency-based detection of
middleboxes has become more challenging.

The chart below illustrates the types of sites that presented the
highest amount of network anomalies and are therefore considered to more
likely have been blocked.

{{< imgcap title="" src="/post/egypt-internet-censorship/EgyptWebsitesBlockedChart.png" src2x="/post/egypt-internet-censorship/EgyptWebsitesBlockedChart@2x.png" >}}

[More than 100 URLs](/post/egypt-internet-censorship/eg-blocked-news.csv)
that belong to media organizations appear to have been blocked, even
though Egyptian authorities only [ordered the blocking of 21 news websites](https://cpj.org/2017/05/egypt-blocks-access-to-21-news-websites.php)
last year. These include Egyptian news outlets (such as [Mada Masr](https://explorer.ooni.org/measurement/20170524T220659Z_AS36935_KOMTdBwGsyVovBhs8tYihdTP4ucPSWA5iMH4PqXEfX5TU1ZWK3?input=https:%2F%2Fwww.madamasr.com),
[Almesryoon](https://explorer.ooni.org/measurement/20170711T093730Z_AS8452_JpTTfKV4CebXaq18Vi2xNqgrkh7tmtIpFHUsHgDxLDEecVk1sm?input=http:%2F%2Fwww.almesryoon.com),
[Masr Al Arabia](https://explorer.ooni.org/measurement/20180417T120217Z_AS8452_GSsK1LV6eTr9eP664dZm8U8vqvtmgKa4pR1PEX3B3WdyVMFQ5B?input=http:%2F%2Fwww.masralarabia.com)
and [Daily News Egypt](https://explorer.ooni.org/measurement/20170615T131624Z_AS36935_XbM7CT7wIvIDj338bud9oonjQNKYae4blQfuwMY4ZCrpCO5GJY?input=http:%2F%2Fwww.dailynewsegypt.com%2F)),
as well as international media sites (such as [Al Jazeera](https://explorer.ooni.org/measurement/20180520T073156Z_AS24863_iWUATOpTygIDRHTrgFtxPNlACi2P2m6VeCOeANwu0udfBdTKom?input=http:%2F%2Fwww.aljazeera.com)
and [Huffington Post Arabic](https://explorer.ooni.org/measurement/20170615T131624Z_AS36935_XbM7CT7wIvIDj338bud9oonjQNKYae4blQfuwMY4ZCrpCO5GJY?input=http:%2F%2Fwww.huffpostarabi.com%2F)).
Various Turkish and Iranian news websites were blocked (such as
[turkpress.co](https://explorer.ooni.org/measurement/20180517T122830Z_AS8452_BQDNLmRk7yc1k0j06HQumDnsZMHP4OQ1Y4OUSqHqdf2rezSpi5?input=http:%2F%2Fturkpress.co)
and
[alalam.ir](https://explorer.ooni.org/measurement/20180520T073156Z_AS24863_iWUATOpTygIDRHTrgFtxPNlACi2P2m6VeCOeANwu0udfBdTKom?input=http:%2F%2Fwww.alalam.ir)),
suggesting that politics and security concerns may have influenced
censorship decisions. In an attempt to circumvent censorship, some
Egyptian media organizations set up [alternative domains](https://afteegypt.org/right_to_know-2/publicationsright_to_know-right_to_know-2/2017/06/04/13069-afteegypt.html?lang=en),
but (in a few cases) they got
[blocked](https://explorer.ooni.org/measurement/20180417T120217Z_AS8452_GSsK1LV6eTr9eP664dZm8U8vqvtmgKa4pR1PEX3B3WdyVMFQ5B?input=http:%2F%2Fthedailynewsegypt.com)
as well.

To examine the *impact* of these censorship events, AFTE interviewed
staff members working with some of the Egyptian media organizations
whose websites got blocked. They reported that the censorship has had a
severe impact on their work. In addition to not being able to publish
and losing part of their audience, the censorship has also had a
financial impact on their operations and deterred sources from reaching
out to their journalists. A number of Egyptian media organizations have
[suspended](https://www.facebook.com/korabia/posts/768019583402612)
their work entirely, as a result of persisting internet censorship.

Many other websites, beyond media, appear to have been blocked as well.
These include human rights websites (such as [Human Rights Watch](https://explorer.ooni.org/measurement/20180519T000039Z_AS24863_QA46GNkhtspz364ER9SJtRDd6fBWrGMZNm8RIheeNRd3QaKRMH?input=https:%2F%2Fwww.hrw.org%2F),
[Reporters without Borders](https://explorer.ooni.org/measurement/20180520T131028Z_AS8452_5VILUU3mOu51zwtD1E6n2E6Q0KGyq5cuWApNkAaZSCMoHZXxJc?input=https:%2F%2Frsf.org%2F),
the [Arabic Network for Human Rights Information](https://explorer.ooni.org/measurement/20170818T190042Z_AS8452_cNDTrIxYihq4jRlmoqnn8EUoa6scX0v8HwdEmXx67tX3LUMpj2?input=http:%2F%2Fanhri.net),
the [Egyptian Commission for Rights and Freedoms](https://explorer.ooni.org/measurement/20180512T065418Z_AS24863_YaAAZE3p4CPwmBElLdEKSMMUH3XD2zCo41NLphcbO5vqS6GsjH?input=http:%2F%2Fwww.ec-rf.org),
and the [Journalists Observatory against Torture](https://explorer.ooni.org/measurement/20180513T124516Z_AS8452_J5Orre5l0MAo8uwzg76CCJ7XcRm8Ya1K6NAI9ASskCFsShUZHI?input=http:%2F%2Fwww.jatoeg.org))
and sites expressing political criticism (such as the [April 6 Youth Movement](https://explorer.ooni.org/measurement/nbqhw5kWI9gMrX2qLs2ogfVk0Ukul7imncvAaDCs0kDabAxKQXNfrl6Mfk3fJZyZ?input=http:%2F%2F6april.org)),
raising the question of whether censorship decisions were politically
motivated.

# “Defense in depth” tactics for network filtering

Security experts are probably familiar with the “[defense in depth](https://en.wikipedia.org/wiki/Defense_in_depth_(computing))”
concept in which multiple layers of security controls (defense) are
placed throughout an IT system, providing redundancy in the event that a
security control fails. In Egypt, ISPs seem to apply “defense in depth”
tactics for *network filtering* by creating multiple layers of
censorship that make circumvention harder.

This is particularly evident when looking at the
[blocking](https://explorer.ooni.org/measurement/20180601T082146Z_AS24835_zCgwzOSmbXDftZn5OftmYZCDf5tw6SrDclPlgiMJ7YREynuOu0?input=http:%2F%2Fwww.fj-p.com)
of Egypt’s Freedom and Justice Party (FJP) site. Our testing shows that
different versions of this site (http://www.fj-p.com and
http://fj-p.com) were blocked by *two* different middleboxes. In doing
so, Egyptian ISPs added extra layers of censorship, ensuring that
circumvention requires extra effort.

Not only were numerous circumvention tool sites (including
[torproject.org](https://explorer.ooni.org/measurement/20180520T131028Z_AS8452_5VILUU3mOu51zwtD1E6n2E6Q0KGyq5cuWApNkAaZSCMoHZXxJc?input=http:%2F%2Fwww.torproject.org)
and
[psiphon.ca](https://explorer.ooni.org/measurement/20180520T063449Z_AS24863_dWOpnp9jqv4jOJxMWgAjRLyuWDLEXA1i22J88Y4eTrglGo8g2u?input=https:%2F%2Fpsiphon.ca%2F))
blocked, but access to the Tor network appears to be blocked as well.
Measurements collected from [Link Egypt (AS24863)](https://explorer.ooni.org/measurement/20180522T161301Z_AS24863_oOvnh7hhWXOXQZ4GQfe83vDoB4ORpWotUvDhJeVM50NTcI1d15)
and [Telecom Egypt (AS8452)](https://explorer.ooni.org/measurement/20180521T131355Z_AS8452_BVPG1Lh8gTJJfdphKQKRH38XF2XYwlolxFEiwGlGrKhEt8wUuy)
suggest that the Tor network is inaccessible, since the tests weren’t
able to bootstrap connections to the Tor network within 300 seconds. In
recent months, more than 460 measurements show connections to the Tor
network failing consistently. Similarly, measurements collected from
[Etisalat Misr (AS36992)](https://explorer.ooni.org/measurement/20171125T004035Z_AS36992_vGkIUAMBKLcmFEcrRVIl9G80tqnl2Xpq95s0xz2vHhDe6KZgyC),
[Mobinil (AS37069)](https://explorer.ooni.org/measurement/20171125T003356Z_AS37069_CpepgnxXwaPzD4OfMwcKnrxwsvlFZLyZKEHtLYRDZua3zN7kM7)
and [Vodafone (AS36935)](https://explorer.ooni.org/measurement/20171124T002601Z_AS36935_EjL8eS55NuackoBc1YTlLPYLU4uqhIRpAxltWVhSHooLpN8ZtX)
indicate that access to the Tor network is blocked. The Tor bootstrap
process is likely being disrupted via the [blocking of requests to directory authorities](https://ooni.org/post/egypt-network-interference/#attempts-to-block-tor).

“Defense in depth” tactics also seem to be applied in relation to the
blocking of [Tor bridges](https://bridges.torproject.org/), which
enable Tor censorship circumvention. Vodafone appears to be [blocking obfs4](https://explorer.ooni.org/measurement/20170606T163348Z_AS36935_FbKgm7SUyJTvlqJuxe5nSHNk98fMPcqjExFsOIEJcdBs1ixqoi?input=obfs4%20176.56.237.144:80)
(shipped as part of Tor Browser), since all attempted connections were
unsuccessful (though it remains unclear if *private* bridges work). All
measurements collected from Telecom Egypt show that [obfs4](https://explorer.ooni.org/measurement/20170608T001210Z_AS8452_EUzggnPD52mbPUs53DNdtsqg5zTg5SzGXVTiHKvCJzMo0cS39N?input=obfs4%2045.32.175.206:9443%20B44C65B5A61FF946AA33B651C74249A45F3DE945%20cert%3D3w2NyqUsDKODpYdTVuL9tbvqFU1PABzPTyH877gixECvZ%2F0YJeEqp7xfH%2F2ou%2BiNZpJBcw%20iat-mode%3D0)[works](https://explorer.ooni.org/measurement/20170608T001210Z_AS8452_EUzggnPD52mbPUs53DNdtsqg5zTg5SzGXVTiHKvCJzMo0cS39N?input=obfs4%2045.32.175.206:9443%20B44C65B5A61FF946AA33B651C74249A45F3DE945%20cert%3D3w2NyqUsDKODpYdTVuL9tbvqFU1PABzPTyH877gixECvZ%2F0YJeEqp7xfH%2F2ou%2BiNZpJBcw%20iat-mode%3D0).
Given that bridges.torproject.org is
[blocked](https://explorer.ooni.org/measurement/20180618T063810Z_AS24835_VbotQZ97S1Ma1fMhdiLfCVsPpjYw7xbNGtWbmvogC0xtHZyCIj?input=https:%2F%2Fbridges.torproject.org),
users can alternatively get Tor bridges by sending an email to
[bridges@torproject.org](mailto:bridges@torproject.org) (from a
[Riseup](https://riseup.net/), [Gmail](https://mail.google.com/), or
[Yahoo](https://mail.yahoo.com/) account).

# Ad campaign

Back in 2016, OONI
[uncovered](https://ooni.org/post/egypt-network-interference/#advertisement-and-malware-injection)
that state-owned Telecom Egypt was using DPI (or similar networking
equipment) to hijack users’ unencrypted HTTP connections and inject
redirects to revenue-generating content, such as affiliate ads. The
Citizen Lab expanded upon this research,
[identifying](https://citizenlab.ca/2018/03/bad-traffic-sandvines-packetlogic-devices-deploy-government-spyware-turkey-syria/)
the use of Sandvine PacketLogic devices and redirects being injected by
(at least) 17 Egyptian ISPs.

Over the last year, hundreds of [OONI Probe network measurements](https://api.ooni.io/files/by_country/EG) (collected from
multiple ASNs)
[show](/post/egypt-internet-censorship/eg-ad-campaign.csv)
the hijacking of unencrypted HTTP connections and the injection of
redirects to affiliate ads and cryptocurrency mining scripts. A wide
range of different types of URLs were affected, including the sites of
the [Palestinian Prisoner Society](https://explorer.ooni.org/measurement/20170814T100330Z_AS8452_dBRZHbzwg0CQy5iGYZn4IXW8xki1TcvvjTd2KxXagPsr2u7ArP?input=http:%2F%2Fwww.ppsmo.org%2F)
and the [Women’s Initiatives for Gender Justice](https://explorer.ooni.org/measurement/20170622T111520Z_AS24863_HjEg5xCsNPntFqu7BbweBxBXvRVbYgnrXU9USKOUJayrumRpUF?input=http:%2F%2F4genderjustice.org%2F),
as well as
[LGBTQI](https://explorer.ooni.org/measurement/20180225T160034Z_AS8452_hWaybE5mgssZYMFzuKJSP0MN0b4up9ai26W9P8DmFCXAUFySFX?input=http:%2F%2Fwww.bglad.com),
[VPN](https://explorer.ooni.org/measurement/20180103T131521Z_AS36935_4iaqfAGjWfIxPD0u30nvbk2YtCp9UHpH5kcSUFy919YXnsxlsS?input=http:%2F%2Fwww.connectionvpn.com)
and
[Israeli](https://explorer.ooni.org/measurement/20180103T131521Z_AS36935_4iaqfAGjWfIxPD0u30nvbk2YtCp9UHpH5kcSUFy919YXnsxlsS?input=http:%2F%2Fwww.likud.org.il)
sites. Even the sites of the United Nations, such as
[un.org](https://explorer.ooni.org/measurement/20171228T105443Z_AS8452_27e7Pg7AwCoT66hN3mSsEZr75YIzpClxFoYmYTa92r7w627Yta?input=http:%2F%2Fwww.un.org%2Frights%2F)
and
[ohchr.org](https://explorer.ooni.org/measurement/20170622T111520Z_AS24863_HjEg5xCsNPntFqu7BbweBxBXvRVbYgnrXU9USKOUJayrumRpUF?input=http:%2F%2Fwww.ohchr.org%2Fenglish%2Fbodies%2Fhrcouncil%2F)**,**
were among those affected by redirects to ads.

# Expand upon our research

This study is part of an ongoing effort to monitor internet censorship
in Egypt and around the world. Since this research was carried out
through the use of [free and open source software](https://github.com/TheTorProject/ooni-probe), [open methodologies](https://ooni.org/docs/) and [open data](https://api.ooni.io/), it can be reproduced and expanded upon.

Anyone can [run OONI Probe](https://ooni.org/install/) on
Android, iOS, macOS, Linux, and on Raspberry Pis. Tens of thousands of
OONI Probe users from [more than 200 countries](https://api.ooni.io/stats) do so every month. Thanks to
their testing, millions of network measurements have been
[published](https://explorer.ooni.org/world/), shedding
light on information controls worldwide.

But censorship findings are only as interesting as the types of sites
and services that are tested. We therefore encourage you to [contribute to the review and creation of test lists](https://ooni.org/get-involved/contribute-test-lists/),
to help advance future research in Egypt and beyond.

*To learn more about this study, read the full report [here](/documents/Egypt-Internet-Censorship-AFTE-OONI-2018-07.pdf).*

