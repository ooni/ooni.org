---
title: "South Sudan: Measuring Internet Censorship in the World's Youngest Nation"
author: "Maria Xynou (OONI), Kenyi Yasin Abdallah Kenyi (TAHURID), Leonid Evdokimov (OONI), Stanley Nyombe Gore (TAHURID)"
date: "2018-08-01"
tags: ["south sudan", "censorship", "country-ss", "theme-news_media"]
categories: ["report"]
---

![South Sudan flag](/post/south-sudan/ss-flag.png)

*Image by [Mandavi](https://en.wikipedia.org/wiki/File:Flag_map_of_South_Sudan.svg)*

Established in July 2011, South Sudan is the youngest country in the
world. But the transition to independence from Sudan has been far from
smooth, as the country experiences an ongoing civil war. Even though
[internet penetration levels remain quite low](http://www.intgovforum.org/multilingual/es/system/files/filedepot/78/paradigmhq-digital_rights_in_africa_report_2017.pdf), two media websites and two independent blogs were [reportedly blocked](https://cpj.org/2017/07/south-sudan-authorities-block-access-to-at-least-f.php)
last year.

This report is a joint research effort by the [Open Observatory of Network Interference (OONI)](https://ooni.org/) and South
Sudan’s [The Advocates for Human Rights and Democracy (TAHURID)](http://tahurid.jovanjulien.com/). We examine internet
censorship in South Sudan through the collection and analysis of
[network measurements](https://api.ooni.io/files/by_country/SS).

Our findings corroborate
[reports](https://cpj.org/2017/07/south-sudan-authorities-block-access-to-at-least-f.php)
on the blocking of media outlets [Sudan Tribune](https://explorer.ooni.org/measurement/20180710T121021Z_AS36892_jFS7l6OqpHDaCHgyce42vBpqi7zxK9sTNGsR9jwpr4k9NRHZhn?input=http:%2F%2Fsudantribune.com%2F)
and [Radio Tamazuj](https://explorer.ooni.org/measurement/20180709T222326Z_AS37594_FFQFSoqLJWYMgU0EnSbIK7PxicwJTFenIz9PupZYZWoXwtpCTy?input=http:%2F%2Fradiotamazuj.org),
and independent blogs
[Nyamilepedia](https://explorer.ooni.org/measurement/20180710T121021Z_AS36892_jFS7l6OqpHDaCHgyce42vBpqi7zxK9sTNGsR9jwpr4k9NRHZhn?input=http:%2F%2Fnyamile.com%2F)
and [Paanluel Wel](https://explorer.ooni.org/measurement/20180710T121021Z_AS36892_jFS7l6OqpHDaCHgyce42vBpqi7zxK9sTNGsR9jwpr4k9NRHZhn?input=https:%2F%2Fpaanluelwel.com%2F),
suggesting that these sites have been blocked for a year. MTN appears to
block TCP/IP connections to these sites, while IPTEC appears to block
access by means of DNS tampering. Measurements collected in 2017
highlight the [presence of the Mikrotik HTTP transparent proxy](https://explorer.ooni.org/measurement/20170330T114057Z_AS327786_exzr3G2mf5ZPxwNSFMJGPF6ogXqUiuWwMrX141eMMl7PT6KP1N?input=http:%2F%2Fdeoxy.org).

* [Background](#background)

* [Measuring internet censorship](#measuring-internet-censorship)

	* [Blocked websites](#blocked-websites)

	* [HTTP proxy](#http-proxy)

* [Conclusion](#conclusion)

# Background

South Sudan has been [plagued by civil wars](https://www.bbc.com/news/world-africa-14069082) over the last
century.

The [first Sudanese civil war](https://www.globalsecurity.org/military/world/war/sudan-civil-war1.htm)
was a conflict from 1955 to 1972 between the northern part of Sudan and
the southern Sudan region that demanded more autonomy. Following the
first civil war, the Southern Sudan Autonomous Region was temporarily
formed, but a [second civil war](https://www.globalsecurity.org/military/world/war/sudan-civil-war2.htm)
erupted in 1983 and lasted until the end of 2004. After the second civil
war, the Autonomous Government of Southern Sudan was created. South
Sudan became an [independent state on 9th July 2011](https://www.nytimes.com/2011/07/10/world/africa/10sudan.html),
following a referendum.

The country though remains in turmoil. Two years after independence, a
[civil war erupted](https://www.bbc.com/news/av/world-africa-44554308/inside-south-sudan-s-civil-war)
within South Sudan between the government and opposition forces. In
2015, an
[agreement](https://www.aljazeera.com/news/2015/08/south-sudan-expected-sign-peace-deal-rebels-150826084550000.html)
to end South Sudan’s civil war was threatened by ceasefire violations
and [the war restarted](https://www.theguardian.com/world/2016/jul/12/south-sudan-is-the-renewed-violence-the-restart-of-civil-war)
by July 2016. South Sudan’s ongoing civil war has resulted in the
[displacement of millions](http://www.unhcr.org/south-sudan-emergency.html) (who have
seeked refuge in neighbouring Uganda, Sudan, and Kenya) and in [tens of thousands of deaths](https://www.aljazeera.com/news/2016/03/tens-thousands-killed-south-sudan-war-160303054110110.html)
(though aid workers [reported in 2016](https://www.news24.com/Africa/News/south-sudan-is-dying-and-nobody-is-counting-20160311-4)
that the true figure might be as high as 300,000 deaths, which is
comparable to the number killed in Syria during five years of war).

Recently, the Security Council of the United Nations [renewed sanctions](https://www.un.org/press/en/2018/sc13361.doc.htm)
(previously imposed in 2015) on South Sudan for 45 days, setting a
[deadline](http://www.africanews.com/2018/06/02/un-security-council-renews-south-sudan-sanctions-sets-peace-deadline//)
for the civil war to end by 30th June 2018. Even though South Sudan’s
main belligerents came to a peace agreement in late June 2018, experts
[worry](http://africanarguments.org/2018/06/29/south-sudan-peace-deal-missing-something-details-khartoum/)
that it fails to solve issues that have been at the heart of the civil
war.

Amid conflict and political turbulence, South Sudan has one of the
[least developed](https://www.cia.gov/library/publications/the-world-factbook/geos/od.html)
telecommunications and internet systems in the world. Fifteen Internet
Service Providers (ISPs) operate in South Sudan, but the lack of
fibre-optic cables and the limited availability of public power hinder
connectivity. MTN enjoys the [greatest share](https://www.balancingact-africa.com/news/telecoms-en/35234/south-sudan-mtn-becomes-the-number-one-player-in-africas-newest-country-market)
within the mobile phone market, followed by Vivacell and Zain. Earlier
this year however, Vivacell’s license was
[suspended](https://www.reuters.com/article/southsudan-telecoms/south-sudan-suspends-mobile-operator-vivacell-idUSL8N1R25VV)
for not paying [USD 60 million](https://www.nation.co.ke/news/africa/South-Sudan-shuts-down-telecom-firm-Vivacell/1066-4360596-l8h28yz/index.html)
in fees.

Internet penetration levels have
[increased](http://www.internetlivestats.com/internet-users/south-sudan/)
since independence in 2011, but remain quite low. According to the
National Communication Authority, around
[20.5%](http://www.intgovforum.org/multilingual/es/system/files/filedepot/78/paradigmhq-digital_rights_in_africa_report_2017.pdf)
of South Sudan’s population is estimated to have access to the internet,
mostly concentrated in Juba and largely based on mobile internet
subscriptions.

South Sudan’s [Transitional Constitution of 2011](https://www.sudantribune.com/IMG/pdf/The_Draft_Transitional_Constitution_of_the_ROSS2-2.pdf)
guarantees freedom of expression and press freedom under Article 24,
with possible exceptions for public order, safety, or morality. The
Article also calls on media to abide by professional ethics. Article 32
of the Transitional Constitution guarantees the right to access official
information, with exemptions for public security and personal privacy.
The regime though regularly [violates media freedom](http://www.jubamonitor.com/overview-of-the-media-landscape-forum/)
protections in practice, and government officials have engaged in
rhetoric that contributes to a hostile environment for the press.

Two media websites and two independent blogs were [reportedly blocked](https://cpj.org/2017/07/south-sudan-authorities-block-access-to-at-least-f.php)
in South Sudan in July 2017. The censored sites include Paris-backed
[Sudan Tribune](http://www.sudantribune.com/) and Dutch-backed [Radio Tamazuj](http://radiotamazuj.org/en), as well as the
[Nyamilepedia](http://nyamile.com/) and [Paanluel Wel](https://paanluelwel.com/) blogs of the Nuer and Dinka tribes,
South Sudan’s two largest ethnic groups.

# Measuring internet censorship

In an attempt to verify
[reports](https://cpj.org/2017/07/south-sudan-authorities-block-access-to-at-least-f.php)
on the blocking of websites and to examine South Sudan’s internet
landscape more broadly, we ran [OONI Probe](https://github.com/TheTorProject/ooni-probe) network measurement
tests in South Sudan.

OONI Probe consists of a number of [software tests](/nettest/) that scan TCP, DNS, HTTP and TLS
connections for signs of network tampering. Some tests request data over
an unencrypted connection and compare against a known good value. Others
check for HTTP transparent proxies, DNS spoofing, and network speed and
performance.

To measure the blocking of websites, we started off by carrying out some
[research](https://ooni.org/get-involved/contribute-test-lists/#test-list-research)
to identify South Sudanese URLs to test. We subsequently
[added](https://github.com/citizenlab/test-lists/pull/366/) these URLs
to the [Citizen Lab’s test list repository on GitHub](https://github.com/citizenlab/test-lists), since OONI Probe is
designed to measure the blocking of URLs included in these test lists.
Over the last few months, we primarily ran OONI Probe’s [Web Connectivity test](https://ooni.org/nettest/web-connectivity/) (among
other OONI Probe tests) in two networks: MTN South Sudan (AS37594) and
IPTEC Limited (AS36892).

As part of our testing, we measured the blocking of URLs included in the
[global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)
(including internationally relevant sites) and [South Sudanese](https://github.com/citizenlab/test-lists/blob/master/lists/ss.csv)
(including sites relevant to South Sudan) test lists. Once we collected
[OONI Probe network measurements from South Sudan](https://api.ooni.io/files/by_country/SS), we analyzed them with
the aim of identifying network anomalies that could serve as signs of
internet censorship.

## Blocked websites

Last year, media outlets [Sudan Tribune](http://www.sudantribune.com/)
and [Radio Tamazuj](http://radiotamazuj.org/en), and independent blogs
[Nyamilepedia](http://nyamile.com/) and [Paanluel Wel](https://paanluelwel.com/), were [reportedly blocked](https://cpj.org/2017/07/south-sudan-authorities-block-access-to-at-least-f.php)
in July 2017. Our recent testing not only corroborates these reports,
but also suggests that these sites remain blocked one year later.

The following table links to network measurements pertaining to the
recent testing of each of these sites across two ISPs.

| URLs                         | MTN (AS37594)   | IPTEC (AS36892) |
|------------------------------|-----------------|-----------------|
| ``http://nyamile.com/``          | [TCP/IP blocking](https://explorer.ooni.org/measurement/20180709T222326Z_AS37594_FFQFSoqLJWYMgU0EnSbIK7PxicwJTFenIz9PupZYZWoXwtpCTy?input=http:%2F%2Fnyamile.com%2F) | [DNS blocking](https://explorer.ooni.org/measurement/20180710T121021Z_AS36892_jFS7l6OqpHDaCHgyce42vBpqi7zxK9sTNGsR9jwpr4k9NRHZhn?input=http:%2F%2Fnyamile.com%2F)    |
| ``https://paanluelwel.com/``     | N/A             | [DNS blocking](https://explorer.ooni.org/measurement/20180710T121021Z_AS36892_jFS7l6OqpHDaCHgyce42vBpqi7zxK9sTNGsR9jwpr4k9NRHZhn?input=https:%2F%2Fpaanluelwel.com%2F)    |
| ``http://radiotamazuj.org``      | [TCP/IP blocking](https://explorer.ooni.org/measurement/20180709T222326Z_AS37594_FFQFSoqLJWYMgU0EnSbIK7PxicwJTFenIz9PupZYZWoXwtpCTy?input=http:%2F%2Fradiotamazuj.org) | [DNS blocking](https://explorer.ooni.org/measurement/20180710T121021Z_AS36892_jFS7l6OqpHDaCHgyce42vBpqi7zxK9sTNGsR9jwpr4k9NRHZhn?input=http:%2F%2Fradiotamazuj.org)    |
| ``http://sudantribune.com/``     | [TCP/IP blocking](https://explorer.ooni.org/measurement/20180709T222326Z_AS37594_FFQFSoqLJWYMgU0EnSbIK7PxicwJTFenIz9PupZYZWoXwtpCTy?input=http:%2F%2Fsudantribune.com%2F) | [DNS blocking](https://explorer.ooni.org/measurement/20180710T121021Z_AS36892_jFS7l6OqpHDaCHgyce42vBpqi7zxK9sTNGsR9jwpr4k9NRHZhn?input=http:%2F%2Fsudantribune.com%2F)    |
| ``http://www.sudantribune.com/`` | [TCP/IP blocking](https://explorer.ooni.org/measurement/20180709T222326Z_AS37594_FFQFSoqLJWYMgU0EnSbIK7PxicwJTFenIz9PupZYZWoXwtpCTy?input=http:%2F%2Fwww.sudantribune.com%2F) | [DNS blocking](https://explorer.ooni.org/measurement/20180710T121021Z_AS36892_jFS7l6OqpHDaCHgyce42vBpqi7zxK9sTNGsR9jwpr4k9NRHZhn?input=http:%2F%2Fwww.sudantribune.com%2Fspip.php%3Farticle61802)    |

Our findings suggest that MTN (AS37594) blocks TCP/IP connections to
these sites, while IPTEC (AS36892) blocks access by means of DNS
tampering. It’s worth noting that both MTN and IPTEC block access to
both ``http://sudantribune.com`` and ``http://www.sudantribune.com``.

South Sudanese authorities blocked these sites for publishing
“subversive content” and
[stated](https://cpj.org/2017/07/south-sudan-authorities-block-access-to-at-least-f.php)
that the bans would not be lifted until those institutions “behaved
well”. [Sudan Tribune](http://www.sudantribune.com/) and [Radio Tamazuj](http://radiotamazuj.org/en) are foreign-based media outlets
[accused](http://www.ifj.org/nc/en/news-single-view/backpid/1/category/campaigns-1/article/south-sudan-government-blocks-two-news-websites/)
of hostile reporting against the government.

[Paanluel Wel](https://paanluelwel.com/) is a leading blog for the
Dinka tribe, known for spearheading tribal political interests for the
Dinka people and inciting hatred and violence against the Nuer people
and other tribes. [Nyamilepedia](http://nyamile.com/), on the other
hand, is a leading blog for the Nuer tribe, known for promoting Nuer
political interests and spearheading hatred against the Dinka and other
Nuer who left the rebellion to join the Dinka-led government.

[TAHURID](http://tahurid.jovanjulien.com/) reports that
[Almshaheer](http://www.almshaheer.com/) and South Africa’s [Centre for Conflict Resolution](http://www.ccr.org.za/) are inaccessible on
IPTEC, but accessible on MTN (the accessibility of which is also
confirmed by OONI data testing
[almshaheer.com](https://explorer.ooni.org/measurement/20180709T222326Z_AS37594_FFQFSoqLJWYMgU0EnSbIK7PxicwJTFenIz9PupZYZWoXwtpCTy?input=http:%2F%2Fwww.almshaheer.com%2F)
and
[ccr.org.za](https://explorer.ooni.org/measurement/20180709T222326Z_AS37594_FFQFSoqLJWYMgU0EnSbIK7PxicwJTFenIz9PupZYZWoXwtpCTy?input=http:%2F%2Fwww.ccr.org.za%2F)).

Many [other URLs](https://api.ooni.io/files/by_country/SS) presented network anomalies (such as HTTP failures) as
part of our testing, but such anomalies were most likely caused due to
poor network performance and transient network failures. This suggests
that South Sudanese internet users may encounter challenges in accessing
sites in various points in time, even if they’re not intentionally being
blocked.

It’s worth highlighting, however, that many of the URLs that we tested
(including internationally popular and local sites) were found to be
[accessible](https://explorer.ooni.org/country/SS) in South
Sudan during this study. These include sites related to conflict
resolution and peacekeeping, such as the [United Nations Mission in South Sudan (UNMISS)](https://explorer.ooni.org/measurement/20180710T121021Z_AS36892_jFS7l6OqpHDaCHgyce42vBpqi7zxK9sTNGsR9jwpr4k9NRHZhn?input=https:%2F%2Funmiss.unmissions.org%2Fradio-miraya-news)
site.

## HTTP proxy

Measurements previously [collected in 2017](https://explorer.ooni.org/country/SS) highlight the
presence of an HTTP transparent proxy (Mikrotik).

![Miktrotik HTTP proxy in OONI data](/post/south-sudan/mikrotik.png)

This proxy is revealed in the HTTP response body in OONI Probe
measurements (linked below) pertaining to the testing of the following
sites:

* [http://deoxy.org](https://explorer.ooni.org/measurement/20170330T114057Z_AS327786_exzr3G2mf5ZPxwNSFMJGPF6ogXqUiuWwMrX141eMMl7PT6KP1N?input=http:%2F%2Fdeoxy.org)

* [http://dextroverse.org](https://explorer.ooni.org/measurement/20170330T114057Z_AS327786_exzr3G2mf5ZPxwNSFMJGPF6ogXqUiuWwMrX141eMMl7PT6KP1N?input=http:%2F%2Fdextroverse.org)

* [http://warc.jalb.de](https://explorer.ooni.org/measurement/20170330T114057Z_AS327786_exzr3G2mf5ZPxwNSFMJGPF6ogXqUiuWwMrX141eMMl7PT6KP1N?input=http:%2F%2Fwarc.jalb.de)

* [http://www.bloglines.com](https://explorer.ooni.org/measurement/20170330T114057Z_AS327786_exzr3G2mf5ZPxwNSFMJGPF6ogXqUiuWwMrX141eMMl7PT6KP1N?input=http:%2F%2Fwww.bloglines.com)

* [http://www.foreignword.com](https://explorer.ooni.org/measurement/20170330T114057Z_AS327786_exzr3G2mf5ZPxwNSFMJGPF6ogXqUiuWwMrX141eMMl7PT6KP1N?input=http:%2F%2Fwww.foreignword.com)

* [http://www.gamenode.com](https://explorer.ooni.org/measurement/20170330T114057Z_AS327786_exzr3G2mf5ZPxwNSFMJGPF6ogXqUiuWwMrX141eMMl7PT6KP1N?input=http:%2F%2Fwww.gamenode.com)

* [http://www.interactworldwide.org](https://explorer.ooni.org/measurement/20170330T114057Z_AS327786_exzr3G2mf5ZPxwNSFMJGPF6ogXqUiuWwMrX141eMMl7PT6KP1N?input=http:%2F%2Fwww.interactworldwide.org)

* [http://www.iwantim.com](https://explorer.ooni.org/measurement/20170330T114057Z_AS327786_exzr3G2mf5ZPxwNSFMJGPF6ogXqUiuWwMrX141eMMl7PT6KP1N?input=http:%2F%2Fwww.iwantim.com)

* [http://www.kazaa.com](https://explorer.ooni.org/measurement/20170330T114057Z_AS327786_exzr3G2mf5ZPxwNSFMJGPF6ogXqUiuWwMrX141eMMl7PT6KP1N?input=http:%2F%2Fwww.kazaa.com)

* [http://www.kcna.kp](https://explorer.ooni.org/measurement/20170330T114057Z_AS327786_exzr3G2mf5ZPxwNSFMJGPF6ogXqUiuWwMrX141eMMl7PT6KP1N?input=http:%2F%2Fwww.kcna.kp)

* [http://www.law-lib.utoronto.ca/Diana/](https://explorer.ooni.org/measurement/20170330T114057Z_AS327786_exzr3G2mf5ZPxwNSFMJGPF6ogXqUiuWwMrX141eMMl7PT6KP1N?input=http:%2F%2Fwww.law-lib.utoronto.ca%2FDiana%2F)

* [http://www.pornhub.com](https://explorer.ooni.org/measurement/20170330T114057Z_AS327786_exzr3G2mf5ZPxwNSFMJGPF6ogXqUiuWwMrX141eMMl7PT6KP1N?input=http:%2F%2Fwww.pornhub.com%2F)

* [http://www.proxyweb.net](https://explorer.ooni.org/measurement/20170330T114057Z_AS327786_exzr3G2mf5ZPxwNSFMJGPF6ogXqUiuWwMrX141eMMl7PT6KP1N?input=http:%2F%2Fwww.proxyweb.net)

* [http://www.wzo.org.il](https://explorer.ooni.org/measurement/20170330T114057Z_AS327786_exzr3G2mf5ZPxwNSFMJGPF6ogXqUiuWwMrX141eMMl7PT6KP1N?input=http:%2F%2Fwww.wzo.org.il)

These measurements clearly show that the Mikrotik HTTP transparent proxy
was present last year in the network path to the above sites through
South Sudan’s 4G Telecom (AS327786) network. It remains unclear though
if this proxy is still in use, since measurements haven’t been collected
from this network in recent months.

It’s worth noting that this equipment may potentially be used for
implementing internet censorship and/or for caching (the Mikrotik HTTP
proxy has this feature) to improve connectivity. Given though that most
of these sites were
[accessible](https://explorer.ooni.org/country/SS) (and the
ones that weren’t presented different errors, sometimes triggered as
part of anti-DDoS protection), it may be the case that this proxy was
primarily deployed for improving connectivity and network performance.

# Conclusion

South Sudan is a young nation in politically turbulent times. Within the
context of conflict, local experts
[discuss](http://www.jubamonitor.com/overview-of-the-media-landscape-forum/)
the challenges of drawing a line between freedom of expression and
[hate speech](http://www.africanews.com/2016/10/26/un-concerned-about-rise-in-hate-speech-in-south-sudan//),
which spurs violence.

Internet censorship does *not* appear to be pervasive, but limited to
sites that authorities
[deem](https://cpj.org/2017/07/south-sudan-authorities-block-access-to-at-least-f.php)
to publish “subversive content” and incite violence. This is evident
through the blocking of
[Nyamilepedia](https://explorer.ooni.org/measurement/20180710T121021Z_AS36892_jFS7l6OqpHDaCHgyce42vBpqi7zxK9sTNGsR9jwpr4k9NRHZhn?input=http:%2F%2Fnyamile.com%2F)
and [Paanluel Wel](https://explorer.ooni.org/measurement/20180710T121021Z_AS36892_jFS7l6OqpHDaCHgyce42vBpqi7zxK9sTNGsR9jwpr4k9NRHZhn?input=https:%2F%2Fpaanluelwel.com%2F),
the leading blogs of the Nuer and Dinka tribes who are known to incite
violence. OONI [data](https://api.ooni.io/files/by_country/SS) also
corroborates the blocking of media outlets [Sudan Tribune](https://explorer.ooni.org/measurement/20180710T121021Z_AS36892_jFS7l6OqpHDaCHgyce42vBpqi7zxK9sTNGsR9jwpr4k9NRHZhn?input=http:%2F%2Fsudantribune.com%2F)
and [Radio Tamazuj](https://explorer.ooni.org/measurement/20180709T222326Z_AS37594_FFQFSoqLJWYMgU0EnSbIK7PxicwJTFenIz9PupZYZWoXwtpCTy?input=http:%2F%2Fradiotamazuj.org),
both of which are hosted *outside* of South Sudan. Local journalists and
media organizations though face different (non-digital) forms of
censorship.

[Juba Monitor](http://www.jubamonitor.com/), for example, is an
independent South Sudanese newspaper critical of the government. Their
website was found to be
[accessible](https://explorer.ooni.org/measurement/20180709T222326Z_AS37594_FFQFSoqLJWYMgU0EnSbIK7PxicwJTFenIz9PupZYZWoXwtpCTy?input=http:%2F%2Fwww.jubamonitor.com),
but their editor was
[jailed](https://cpj.org/2016/07/south-sudan-authorities-arrest-editor-order-juba-m.php)
in 2016 as a result of his reporting and the newspaper has been
[ordered to cease its publishing](https://www.voanews.com/a/south-sudan-media-rights-juba-monitor/2601838.html)
over reports that the government considered “against the system”.
Security personnel has been
[deployed](http://www.jubamonitor.com/overview-of-the-media-landscape-forum/)
at the printing press, forcing journalists to remove or edit articles
critical of the government and its officials prior to publication.

Self-censorship might be one of the most effective forms of censorship
in South Sudan, as suggested by the reported
[intimidation](https://www.theguardian.com/world/2016/jul/07/south-sudan-is-wiping-out-its-free-press-one-journalist-at-a-time)
and [killing](https://cpj.org/africa/south-sudan/) of journalists.
Local experts
[argue](http://www.jubamonitor.com/overview-of-the-media-landscape-forum/)
that the media in South Sudan operate in a state of fear. Earlier this
year, even UN-backed Radio Miraya was
[suspended](https://cpj.org/2018/03/south-sudan-suspends-broadcast-of-un-backed-radio-.php)
on the grounds of not having acquired a broadcasting license.

Nonetheless, the fact that South Sudan has already started implementing
internet censorship raises questions as to whether its internet
censorship apparatus will expand as internet penetration levels increase
and political events unfold. Further research and testing is therefore
required to better understand the country’s internet landscape and
monitor any new censorship events.

This study offers some initial observations based on [network measurements](https://api.ooni.io/files/by_country/SS). Since we used
[free and open source software](https://ooni.org/install/),
[open methodologies](https://ooni.org/docs/), and [open data](https://api.ooni.io/files/by_country/SS), our research can
potentially be *reproduced* and expanded upon.
