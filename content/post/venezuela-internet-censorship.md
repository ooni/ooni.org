---
title: "The State of Internet Censorship in Venezuela"
author: "Mariengracia Chirinos (IPYS Venezuela), Andrés Azpúrua (Venezuela Inteligente / VEsinFiltro), Leonid Evdokimov (OONI), Maria Xynou (OONI)"
date: "2018-08-16"
tags: ["country-ve", "research-report", "censorship", "theme-news_media", "theme-circumvention"]
categories: ["report"]
---

![Cover image](/post/venezuela/ve-image.png)

A study by IPYS Venezuela, Venezuela Inteligente, and the Open
Observatory of Network Interference (OONI).

**Update (2018-10-19):** The section on [Tor becoming accessible](#tor-unblocking) was added.

* [Key Findings](#key-findings)

* [Introduction](#introduction)

* [Background](#background)

	* [Political environment](#political-environment)

	* [Legal environment](#legal-environment)

	* [Reported cases of internet censorship](#reported-cases-of-internet-censorship)

* [Methodology: Measuring internet censorship in Venezuela](#methodology-measuring-internet-censorship-in-venezuela)

	* [Acknowledgement of limitations](#acknowledgement-of-limitations)

* [Findings](#findings)

	* [Blocked websites](#blocked-websites)

		* [Media](#media)

		* [Political criticism](#political-criticism)

		* [Zello](#zello)

		* [Currency exchange](#currency-exchange)

	* [Blocking of Tor](#blocking-of-tor)

		* [About Tor](#about-tor)
		* [Testing](#testing)
		* [Tor unblocking](#tor-unblocking)

* [Conclusion](#conclusion)

**Probed ISPs:** Most recent measurements collected from Digitel
(AS264731), CANTV (AS8048), Movistar (AS6306) and Movilnet (AS27889).

**OONI tests:** [Web Connectivity](/nettest/web-connectivity/)
test, [HTTP Invalid Request Line](/nettest/http-invalid-request-line/)
test, [HTTP Header Field Manipulation](/nettest/http-header-field-manipulation/)
test, [WhatsApp](/nettest/whatsapp/) test,
[Facebook Messenger](/nettest/facebook-messenger/)
test, [Telegram](/nettest/telegram/) test,
[Vanilla Tor](/nettest/vanilla-tor/) test,
[Tor Bridge Reachability](/nettest/tor-bridge-reachability/)
test

**Testing/analysis period:** 20th February 2014 to 10th August 2018

**Censorship methods:** DNS tampering & HTTP blocking

# Key Findings

Media censorship appears to be quite pervasive, as a number of
independent media websites were found to be blocked in Venezuela
(primarily) by means of DNS tampering. Blocked news outlets include [El Pitazo](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Felpitazo.com)
and [El Nacional](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Fel-nacional.com),
while La Patilla was [temporarily blocked](https://explorer.ooni.io/measurement/20180606T212129Z_AS8048_PpN50F7H35GboisZ8JXLx8Qwzwg8tisIelPw70JkvM1Z490lw9?input=http:%2F%2Fwww.lapatilla.com)
in June 2018.

Walkie-talkie app Zello was [reportedly blocked](https://www.infobae.com/2014/03/06/1548288-zello-la-aplicacion-terrorista-los-estudiantes-venezolanos/)
during Venezuela’s 2014 protests and recent measurements suggest that
the service [remains blocked](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Fcontent.zello.com)
by state-owned CANTV. Other blocked sites include a number of [currency exchange sites](https://explorer.ooni.io/measurement/20180627T013502Z_AS8048_TKmrzeqqVwdn2t9IKtzF95ptVafOtf2tAsM4csctpiVcI9AH8m?input=http:%2F%2Fdolartoday.com),
as well as
[blogs](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Fvdebate.blogspot.com)
expressing political criticism.

Censorship circumvention has (possibly) become harder in Venezuela, as
CANTV
[blocked](https://explorer.ooni.io/measurement/20180811T001818Z_AS8048_WD5wpEvGX4XaG6Y6MczK8eLOsYFSgzStVkTMnvz1u36l8HMPxf)
access to the [Tor network](https://www.torproject.org/) and to public
[obfs4](https://gist.github.com/hellais/ec4915246641a9f96ff0c9539ba9fe1d)
bridges two months ago.

# Introduction

Media censorship was
[reported](https://ipysvenezuela.org/navegarconlibertad/tag/ipys-venezuela/)
by Venezuelan civil society groups, [IPYS Venezuela](https://ipysvenezuela.org/) and [Venezuela Inteligente](http://veinteligente.org/), back in early 2016. At the
time, they measured the blocking of websites across four states in
Venezuela through the use of [OONI Probe](/install/), which is [free and open source software](https://github.com/TheTorProject/ooni-probe) designed
to measure internet censorship. They collected network measurement data
showing the [DNS blocking](https://ipysvenezuela.org/navegarconlibertad/tag/ipys-venezuela/)
of numerous local media sites and other types of websites during
Venezuela’s 2015 parliamentary elections. Now, OONI has joined forces
with IPYS Venezuela and Venezuela Inteligente.

The [Open Observatory of Network Interference (OONI)](/), [IPYS Venezuela](https://ipysvenezuela.org/) and [Venezuela Inteligente](http://veinteligente.org/) collaborated on a joint
research study to examine internet censorship in Venezuela. Our study
involves the analysis of [hundreds of thousands of network measurements](https://api.ooni.io/files/by_country/VE) collected from
multiple local vantage points over the last four years.

The following sections of this report provide information about
Venezuela’s political and legal environment (with respect to censorship
and freedom of expression) and about previous cases of censorship that
have been reported in the country. The remainder of the report documents
the methodology and findings of our study.

# Background

## Political environment

Democratic freedoms have
[deteriorated](https://freedomhouse.org/report/freedom-world/2018/venezuela)
in Venezuela. The government has been characterized as an authoritarian
regime, closing spaces for public discussions and free expression, while
systematic violations of human rights have intensified. According to
[IPYS Venezuela](https://ipysvenezuela.org/), the elections held in
Venezuela in recent years have suffered from a lack of fair conditions.
The institutionality and the State of Rights have been broken, given the
lack of autonomy and independence of the public powers, all dominated by
the strength of the United Socialist Party of Venezuela, which has
accompanied Hugo Chávez and currently maintains Nicolás Maduro.

Venezuela is experiencing a complex humanitarian emergency, intensified
by
[hyperinflation](https://www.washingtonpost.com/world/venezuelas-inflation-rate-may-hit-1000000-percent-yes-1-million/2018/07/24/90d59086-8f4a-11e8-ae59-01880eac5f1d_story.html?utm_term=.3f624988a758),
the absence of transparency in public management, and the
[weakness](https://freedomhouse.org/report/freedom-world/2018/venezuela)
of democratic institutions. These conditions have negatively impacted
the quality of life of citizens, as well as the conditions for the
protection of human rights. Within this context, Venezuelans have been
deprived of the right to decent housing and have very limited access to
public services.

Between January to July 2018, reporting on the [transportation crisis](https://www.reuters.com/article/us-venezuela-transportation/weary-venezuelans-rely-on-dog-cart-transports-as-buses-succumb-to-crisis-idUSKBN1K72BJ),
[power outages](https://www.reuters.com/article/us-venezuela-blackouts/venezuela-begins-power-rationing-as-drought-causes-severe-outages-idUSKCN1GS2M5),
[water shortages](https://www.economist.com/the-americas/2018/05/10/how-chavismo-makes-the-taps-run-dry-in-venezuela)
and [gas shortages](https://www.reuters.com/article/us-venezuela-gas/cooking-gas-shortages-force-venezuelans-to-turn-to-firewood-idUSKBN1AQ23Q)
has increased. According to data provided by the [Venezuelan Observatory of Social Conflict (OVCS)](https://www.observatoriodeconflictos.org.ve/) and the
[Venezuelan Program of Education-Action in Human Rights (Provea)](https://www.derechos.org.ve/), these issues affect the
quality of life of Venezuelans and their ability to exercise their basic
rights.

Internet blackouts in Venezuela have been documented by the [Press and Society Institute of Venezuela (IPYS Venezuela)](https://ipysvenezuela.org/), which have left citizens in
rural, suburban and urban areas of the country without internet
connectivity. According to IPYS Venezuela, these internet blackouts have
harmed citizens’ rights to access information and freedom of expression.
Freedom House [scores Venezuela 6/25 in obstacles to access the internet](https://freedomhouse.org/country/venezuela/freedom-net/2017)
(where a lower ranking is worse).

Research conducted by Mariengracia Chirinos in terms of public policies
on internet access reveals that, between 2007 to 2017, a vision of
political and social control prevailed in Venezuela, in favor of the
defense of national sovereignty and the "defense of the country”. This
however, she notes, contradicts the principles of inclusion, diversity,
openness, competitiveness and freedom that should guide the process of
formulating internet access policies.

Public policies around internet access have been limited by regulatory
processes (which follow the model of a closed society), affecting market
competitiveness and incentives for investment. This has had a negative
impact on technological advancements in the telecommunications sector,
which are far from the [standards of ECLAC (2016)](https://www.cepal.org/en/publications/40736-society-rights-and-environment-international-human-rights-standards-applicable)
and the [OECD (2016)](https://www.oecd.org/education/skills-beyond-school/education-at-a-glance-2016-indicators.htm).
Between 2017 to 2018, this contributed towards [connectivity issues](https://ipysvenezuela.org/2018/05/08/internet-surfing-at-its-minimum-situation-of-internet-in-venezuela/)
across Venezuela.

IPYS Venezuela
[reports](https://ipysvenezuela.org/categoria/publicaciones/) that
digital rights were at risk throughout 2017 in light of several
restrictive regulations. Police persecution manifested through arbitrary
arrests of citizens based on their opinions expressed online through
social networks, various portals of digital media and civil society
organizations were attacked, and web portals were selectively blocked.
Threats have been made against journalists, while [official structures](https://ipysvenezuela.org/alerta/gobierno-incentiva-la-vigilancia-redes-sociales-la-difusion-noticias-falsas/)
for online surveillance and police monitoring have been proposed.

## Legal environment

A restrictive framework for expression on the internet was consolidated
in 2017 and internet censorship was legalized. Following a wave of
street protests, the President of the Republic, Nicolás Maduro, [signed a decree](https://ipysvenezuela.org/2018/05/08/internet-surfing-at-its-minimum-situation-of-internet-in-venezuela/)
to extend the State of Emergency Exception and Economic Emergency, which
further expands internet censorship powers to avoid "destabilization
campaigns".

The turning point came with the [approval of the Anti-Hate law](http://www.ipsnews.net/2017/12/new-anti-hate-law-threatens-freedoms-venezuela/).
Last November, the National Constituent Assembly (ANC) - a body created
outside of the national constitution and which functions as a
"superpower" with all of the ruling parliamentarians - approved the "Law
against Hatred, for Peaceful Co-existence and Tolerance".

This regulation [empowers authorities to block websites](https://cpj.org/blog/2018/02/venezuelas-anti-hate-law-provides-maduro-with-anot.php)
that are deemed to spread hate or incite violence. If messages that are
considered to "incite hatred" are not removed by website owners within 6
hours, they may be subjected to a fine. The law also includes prison
sentences, ranging from 10 to 20 years, for those who do not comply with
censorship requests by authorities.

Similarly, Article 27 of the
[Law on Social Responsibility in Radio, Television and Electronic Media](https://web.archive.org/web/20070528181559/http://www.leyresorte.gob.ve/index.asp)
sets conditions for the prohibition of content that does not acknowledge
the legitimacy of authorities or which fosters citizen anxiety.

## Reported cases of internet censorship

Pervasive levels of internet censorship have been carried out in
Venezuela since 2014, largely monitored and documented by local civil
society groups [IPYS Venezuela](https://ipysvenezuela.org/) and
[Venezuela Inteligente](http://veinteligente.org).

Their
[study](https://ipysvenezuela.org/navegarconlibertad/tag/ipys-venezuela/)
(between 2015 and 2016) showed that 43 websites were systematically
blocked by one or more Venezuelan ISPs. The types of websites that
appeared to be blocked the most include: Sites related to the parallel
market of the dollar (44%), media (19%), blogs criticizing Chavez (12%),
games of chance and online bets (9%), collaboration tools or shorteners
(5%), personal communication tools (5%), gore (2%), anonymization and
circumvention sites (2%), and hosting services (2%).

Movistar was [found to block sites the most](https://ipysvenezuela.org/navegarconlibertad/tag/ipys-venezuela/),
with 41 blocked domains, corresponding to 35 different websites. The
types of sites blocked by Movistar - but which *weren’t* blocked by
CANTV - include: parallel dollar market, chavismo criticism blogs,
hosting services, collaboration tools or shorteners, and digital media.

Data [presented in August 2017](https://twitter.com/vesinfiltro/status/893197963337625602) by
Venezuela Inteligente, as follow-up to their previous study with IPYS
Venezuela,
[shows](https://twitter.com/andresAzp/status/897250588563472384) that
of the blocked sites, 36% of them were related to currency exchange
rates, 32% were media, 16% games of chance and online bets, 12% social
networking or communications tools, and 4% of them were blogs critical
of the government.
[24%](https://twitter.com/andresAzp/status/897248479893958656) of all
blocked sites were international with international audiences, while
[76%](https://twitter.com/andresAzp/status/897248479893958656) of them
had (mostly) local audiences.

Between 2017 to 2018, IPYS Venezuela
[documented](https://ipysvenezuela.org/categoria/publicaciones/) seven
cases of internet censorship, involving news websites, currency exchange
websites and other sites discussing corruption and economic information.
Today, these seven news portals remain blocked by CANTV, Movistar and
Digitel, according to [OONI Probe network measurement data](https://api.ooni.io/files/by_country/VE) collected by IPYS
Venezuela and Venezuela Inteligente.

Last year, Venezuela Inteligente
[reported](http://vesinfiltro.com/noticias/bloqueos_abril_2017/),
through the VEsinFiltro project, how three private online streaming
broadcasters - [Vivoplay](http://vivoplay.net),
[VPI](https://www.vpitv.com), and [Capitolio TV](https://www.youtube.com/channel/UCbSDz7_rVKXjZ9fRON16apQ) (site now
defunct) - were blocked simultaneously by all major ISPs (primarily by
means of DNS) as a result of broadcasting live street protests. VPI and
Capitolio TV resorted to livestreaming on YouTube, instead of on their
own sites, to circumvent the block. The Maduradas portal was also
[blocked](https://ipysvenezuela.org/alerta/balance-semanal-periodicos-y-radioemisoras-fueron-objeto-de-censura-y-abuso-de-poder/)
by means of DNS.

Media websites blocked in 2018 include [El Pitazo](https://ipysvenezuela.org/alerta/dos-medidas-de-censura-han-afectado-a-el-pitazo/),
[El Nacional and La Patilla](https://www.lapatilla.com/2018/06/12/los-bloqueos-de-la-patilla-y-el-nacional-revelaron-una-nueva-forma-de-censura-en-internet/).
These censorship events were (temporarily) implemented by both private
and state providers, who blocked the sites at their own discretion
without a court order, violating due process. These media outlets were
blocked by means of DNS tampering and HTTP blocking, primarily by CANTV,
Movistar, Movilnet, and Digitel.

Authorities of the National Telecommunications Commission have
previously ordered the blocking of websites that disseminate
"destabilizing" information or form a "media war" against the
government. However, no court order or other legal justification was
provided for the censorship events that occurred over the last year.
Furthermore, the National Telecommunications Commission has repeatedly
[ignored public information requests](https://medium.com/@andresAzp/solicitamos-transparencia-en-los-bloqueos-en-internetve-cb622bac87fd)
regarding recent internet censorship events.

# Methodology: Measuring internet censorship in Venezuela

To measure internet censorship in Venezuela, we ran OONI’s network
measurement software ([OONI Probe](/install/)) on a daily basis across
multiple local vantage points. OONI Probe is [free and open source software](https://github.com/TheTorProject/ooni-probe) designed to
measure various forms of network interference.

The main OONI Probe tests that we ran as part of this study include:

* [Web Connectivity](/nettest/web-connectivity/)

* [HTTP Invalid Request Line](/nettest/http-invalid-request-line/)

* [HTTP Header Field Manipulation](/nettest/http-header-field-manipulation/)

* [Vanilla Tor](/nettest/vanilla-tor/)

* [Tor Bridge Reachability](/nettest/tor-bridge-reachability/)

* [WhatsApp](/nettest/whatsapp/)

* [Facebook Messenger](/nettest/facebook-messenger/)

* [Telegram](/nettest/telegram/)

OONI’s [Web Connectivity test](/nettest/web-connectivity/) is
designed to measure whether websites are blocked by means of DNS
tampering, TCP/IP blocking, or by an HTTP transparent proxy. This test
is automatically performed both over the vantage point of the user and
from a non-censored control vantage point. If the results from both
vantage points match, then the tested website is most likely accessible.
If the results however differ, then the measurement is flagged as
anomalous. OONI’s current methodology only confirms the blocking of a
website if a blockpage is served. In cases where ISPs do not serve
blockpages, the relevant network measurements are analyzed over time,
examining whether the specific types of failures persist and what causes
these failures (i.e. ruling out false positives).

The testing was mostly limited to the URLs included in the Citizen Lab’s
[global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)
and
[Venezuelan](https://github.com/citizenlab/test-lists/blob/master/lists/ve.csv)
test lists. These lists consist of a variety of different types of URLs
that fall under [30 categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)
and that are tested for censorship by network measurement projects like
OONI. Throughout the course of this research, we updated the
[Venezuelan test list](https://github.com/citizenlab/test-lists/blob/master/lists/ve.csv)
to ensure that reportedly blocked sites were being tested. Overall,
around 1,410 URLs, included in both the Citizen Lab’s
[global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)
and
[Venezuelan](https://github.com/citizenlab/test-lists/blob/master/lists/ve.csv)
test lists, were measured as part of this study.

In an attempt to identify which equipment was used to implement internet
censorship in Venezuela, we ran OONI’s [HTTP Invalid Request Line](/nettest/http-invalid-request-line/)
and [HTTP Header Field Manipulation](/nettest/http-header-field-manipulation/)
tests. Both tests are designed to measure networks with the aim of
identifying the presence of middleboxes.

OONI’s HTTP Invalid Request Line test does this by sending an invalid
HTTP request line to an echo server listening on the standard HTTP port.
If a middlebox is present, the invalid HTTP request line will be
intercepted by the middlebox, potentially triggering an error that will
be sent back to OONI servers. In the past, this has enabled the
[identification of censorship equipment](https://explorer.ooni.io/highlights/) in various
countries around the world. OONI’s HTTP Header Field Manipulation test,
on the other hand, attempts to identify middleboxes by sending HTTP
requests with non-canonical HTTP headers. If a middlebox is present, it
will likely normalize the headers or add extra headers, enabling the
identification of its presence in the network. In addition to OONI Probe
tests, we also performed additional network measurement tests via
Raspberry Pi deployments in Venezuela.

To monitor the accessibility of popular instant messaging platforms over
time, we ran OONI’s
[WhatsApp](/nettest/whatsapp/), [Facebook Messenger](/nettest/facebook-messenger/),
and [Telegram](/nettest/telegram/) tests.
These tests are designed to measure the reachability of the WhatsApp,
Facebook Messenger, and Telegram apps and web interfaces through DNS
lookups and by attempting to establish TCP connections to their
endpoints.

In light of increased censorship events over the last years, we decided
to monitor the accessibility of censorship circumvention tools as well.
Many circumvention tool sites were included in the Citizen Lab’s
[global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv),
which we measured via OONI’s [Web Connectivity test](/nettest/web-connectivity/). But we
also ran OONI’s [Vanilla Tor](/nettest/vanilla-tor/) and [Tor Bridge Reachability](/nettest/tor-bridge-reachability/)
tests, which are designed to measure the blocking of the [Tor network](https://www.torproject.org/) and [Tor bridges](https://bridges.torproject.org/).

Once network measurement data was collected from all of these tests,
[OONI data](https://api.ooni.io/files/by_country/VE) was subsequently
[processed](https://github.com/TheTorProject/ooni-pipeline) and
analyzed based on a standardized set of heuristics for detecting
internet censorship and traffic manipulation. We analyzed all OONI Probe
network measurements collected from Venezuela between 20th February 2014
to 10th August 2018.

The main findings though that we present in this study are based on:

* Networks from which most of the recent measurements were collected from, namely: Digitel (AS264731), CANTV (AS8048), Movistar (AS6306) and Movilnet (AS27889).

* Recent censorship findings that are currently more relevant.

* Censorship findings that have been persistent over time (i.e. sites that remained blocked over time and which presented the highest ratio of anomalies).

## Acknowledgement of limitations

The first limitation of this study is associated with the testing
period. This study includes an analysis of [thousands of network measurements collected from Venezuela](https://api.ooni.io/files/by_country/VE) over the last four
years, between 20th February 2014 to 10th August 2018. Censorship events
that may have occurred before and/or after the analysis period are not
examined as part of this study.

Another limitation to this study is associated to the amount and types
of URLs that were tested for censorship. OONI’s [Web Connectivity test](/nettest/web-connectivity/) was run to
measure the accessibility of [287 URLs](https://github.com/citizenlab/test-lists/blob/master/lists/ve.csv)
that are more relevant to the Venezuelan context and [1,123 internationally relevant sites](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv).
All of these URLs were selected in collaboration with community members
over the last years. We acknowledge the URL selection bias and that the
testing sample of URLs might exclude many other sites that are blocked
in Venezuela. We therefore encourage researchers and community members
to continue [reviewing and contributing to these test lists](/get-involved/contribute-test-lists/)
to help improve future research and analysis.

Since block pages weren’t detected in Venezuela (at least for none of
the tested URLs), we present censorship findings with caution,
acknowledging that false positives may be present. This is the primary
reason why we mainly present findings that (a) presented consistent
anomalies over time (suggesting blocking) and (b) [IPYS Venezuela](https://ipysvenezuela.org/) and [Venezuela Inteligente](http://veinteligente.org/) were able to verify locally in
terms of (in)accessibility.

Finally, while network measurements were collected from multiple ASNs in
Venezuela, [OONI’s software tests](https://github.com/TheTorProject/ooni-probe) were not run
consistently across all networks. To share more recent and relevant
findings, we mainly focus on ASNs from which measurements were collected
the most over the last months: Digitel (AS264731), CANTV (AS8048),
Movistar (AS6306) and Movilnet (AS27889).

# Findings

Recent [OONI measurements](https://api.ooni.io/files/by_country/VE)
show the DNS blocking of local news outlets, sites expressing political
criticism, zello.com and currency exchange websites by (at least) four
Venezuelan ISPs. We also confirm the [blocking of the Tor network](https://explorer.ooni.io/measurement/20180811T001818Z_AS8048_WD5wpEvGX4XaG6Y6MczK8eLOsYFSgzStVkTMnvz1u36l8HMPxf)
by state-owned CANTV.

## Blocked websites

Following Venezuela’s 2015 elections, civil society groups IPYS
Venezuela and Venezuela Inteligente
[reported](https://advox.globalvoices.org/2016/05/23/venezuela-research-confirms-censorship-of-news-platforms-currency-websites/)
(through the use of [OONI Probe](/install/)) on the blocking of a
number of websites, including currency exchange websites, blogs
expressing political criticism and media-related sites.

Our latest OONI findings show that such websites are currently blocked
by multiple Venezuelan ISPs and have remained blocked all along.
Measurements collected from Venezuela also suggest that a number of
other sites (such as el-nacional.com, lapatilla.com, elpitazo.com and
armando.info) have more recently been blocked as well.

As part of the following sections, we share [OONI data](https://api.ooni.io/files/by_country/VE) pertaining to the
blocking of news outlets, sites expressing political criticism, currency
exchange sites and zello.com. The data we share is based on recent
measurements collected from four Venezuelan networks: Digitel
(AS264731), CANTV (AS8048), Movistar (AS6306) and Movilnet (AS27889).

### Media

Independent media websites are blocked in Venezuela (primarily by means
of DNS tampering), as illustrated in the following table (based on
recent OONI measurements).  

| URL                      | Digitel (AS264731) | CANTV (AS8048) | Movistar (AS6306) | Movilnet (AS27889) |
|--------------------------|--------------------|----------------|-------------------|--------------------|
| http://elpitazo.com/     | [DNS tampering](https://explorer.ooni.io/measurement/20180810T233912Z_AS264731_7OIxxNxrImB1KLGA0CzqUU0FqFa5o0q313RPVTtc7Xer4tQLt1?input=http:%2F%2Felpitazo.com)      | [DNS tampering](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Felpitazo.com)  | [DNS tampering](https://explorer.ooni.io/measurement/20180810T144120Z_AS6306_B5lbKz5EW3Ukpi6KXyye75mCKzosaBOpAQJKeUqm0LQx2v7PKh?input=http:%2F%2Felpitazo.com)     | [DNS tampering](https://explorer.ooni.io/measurement/20180806T220516Z_AS27889_2fUK4PvrYpicA5AfBU5xNLMeWeyK9vYQ7x122nOiVAkv1RS4oc?input=http:%2F%2Felpitazo.com)      |
| http://elpitazo.info/    | [DNS tampering](https://explorer.ooni.io/measurement/20180810T233912Z_AS264731_7OIxxNxrImB1KLGA0CzqUU0FqFa5o0q313RPVTtc7Xer4tQLt1?input=http:%2F%2Felpitazo.info)      | [DNS tampering](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Felpitazo.info)  | [DNS tampering](https://explorer.ooni.io/measurement/20180810T145701Z_AS6306_w5ymvkIGCw4svF0JyCbi39g3cW2R7QhQlOTT6c3WPjLtKkhLIk?input=http:%2F%2Felpitazo.info)     | [DNS tampering](https://explorer.ooni.io/measurement/20180806T220516Z_AS27889_2fUK4PvrYpicA5AfBU5xNLMeWeyK9vYQ7x122nOiVAkv1RS4oc?input=http:%2F%2Felpitazo.info)      |
| http://elpitazo.ml/      | [DNS tampering](https://explorer.ooni.io/measurement/20180810T233912Z_AS264731_7OIxxNxrImB1KLGA0CzqUU0FqFa5o0q313RPVTtc7Xer4tQLt1?input=http:%2F%2Felpitazo.ml)      | [DNS tampering](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Felpitazo.ml)  | [DNS tampering](https://explorer.ooni.io/measurement/20180810T145701Z_AS6306_w5ymvkIGCw4svF0JyCbi39g3cW2R7QhQlOTT6c3WPjLtKkhLIk?input=http:%2F%2Felpitazo.ml)     | [DNS tampering](https://explorer.ooni.io/measurement/20180806T220516Z_AS27889_2fUK4PvrYpicA5AfBU5xNLMeWeyK9vYQ7x122nOiVAkv1RS4oc?input=http:%2F%2Felpitazo.ml)      |
| http://el-nacional.com/  | [Accessible](https://explorer.ooni.io/measurement/20180810T233912Z_AS264731_7OIxxNxrImB1KLGA0CzqUU0FqFa5o0q313RPVTtc7Xer4tQLt1?input=http:%2F%2Fel-nacional.com)         | [HTTP failure](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Fel-nacional.com)   | [Accessible](https://explorer.ooni.io/measurement/20180810T145701Z_AS6306_w5ymvkIGCw4svF0JyCbi39g3cW2R7QhQlOTT6c3WPjLtKkhLIk?input=http:%2F%2Fel-nacional.com)        | [HTTP failure](https://explorer.ooni.io/measurement/20180806T220516Z_AS27889_2fUK4PvrYpicA5AfBU5xNLMeWeyK9vYQ7x122nOiVAkv1RS4oc?input=http:%2F%2Fel-nacional.com)       |
| http://www.infobae.com/  | N/A                | [DNS tampering](https://explorer.ooni.io/measurement/20180810T024406Z_AS8048_GxLMU1Y4WYhmJldyTKetLGsq0FyPFuQJw7TWcYuT1NFpDtVZ7y?input=http:%2F%2Fwww.infobae.com)  | [DNS tampering](https://explorer.ooni.io/measurement/qPkC0JBOZ02G6YD5RCITsOXGcUp216B2Q8b5R2NEGRMjgDdfun4LWhL8XsojQXDC?input=http:%2F%2Fwww.infobae.com)     | N/A                |
| http://maduradas.com/    | [DNS tampering](https://explorer.ooni.io/measurement/20180806T122611Z_AS264731_5QGumiX9hg9NHgpIRX27ulvOiyJvSSKEpJJCrH0rDaf7l2Nx74?input=http:%2F%2Fmaduradas.com)      | [DNS tampering](https://explorer.ooni.io/measurement/20180806T122529Z_AS8048_Ims6SAXvYZMzF0kCI6heWTlPuGER17ARxjBXckYIPHOsZAJZJR?input=http:%2F%2Fmaduradas.com)  | [DNS tampering](https://explorer.ooni.io/measurement/20180806T124248Z_AS6306_l3LxW6yYpkJpqIgZFqrSPBrIuFvsITy7aG9rma4xg4jSeTFpv3?input=http:%2F%2Fmaduradas.com)     | [Accessible](https://explorer.ooni.io/measurement/20180806T114208Z_AS27889_UNyXFgUh262Nq1LFaGPuBGpYzF47U6hEBCQAy5yxxmZf1waRmu?input=http:%2F%2Fmaduradas.com)         |
| http://minuto30.com/     | [DNS tampering](https://explorer.ooni.io/measurement/20180806T122611Z_AS264731_5QGumiX9hg9NHgpIRX27ulvOiyJvSSKEpJJCrH0rDaf7l2Nx74?input=http:%2F%2Fminuto30.com)      | [DNS tampering](https://explorer.ooni.io/measurement/20180806T120523Z_AS8048_QZFVtAx6xyVRYbqaHKqVlcstfUeq4Ev9XHq6Rws4xWB97oWjml?input=http:%2F%2Fminuto30.com)  | [DNS tampering](https://explorer.ooni.io/measurement/20180806T124248Z_AS6306_l3LxW6yYpkJpqIgZFqrSPBrIuFvsITy7aG9rma4xg4jSeTFpv3?input=http:%2F%2Fminuto30.com)     | [Accessible](https://explorer.ooni.io/measurement/20180806T114208Z_AS27889_UNyXFgUh262Nq1LFaGPuBGpYzF47U6hEBCQAy5yxxmZf1waRmu?input=http:%2F%2Fminuto30.com)         |
| http://noticiaaldia.com/ | N/A                | [DNS tampering](https://explorer.ooni.io/measurement/20180405T025325Z_AS8048_zHRXY2AxlvwXTtUYmA4pQKJwo42UsLl3Hs1ffioON6Zwt3o1O1?input=http:%2F%2Fnoticiaaldia.com)  | N/A               | N/A                |
| http://noticias.com/     | [DNS tampering](https://explorer.ooni.io/measurement/20180719T180315Z_AS264731_X0r1s85WEziWdCc6cGXReVTTYWLL4RaEna8Y3YsxKSy9hzU3Ph?input=http:%2F%2Fnoticias.com)      | [DNS tampering](https://explorer.ooni.io/measurement/20180719T180006Z_AS8048_HLGzZWAvpEmL2AankRtIhTiVkxCvLQDLvZ15ptdBrNJc2b6XBR?input=http:%2F%2Fnoticias.com)  | [DNS tampering](https://explorer.ooni.io/measurement/20180719T180025Z_AS6306_ph9f3EY0DvPQyYbgDqCt0v1q2KsW00rWiL5Wtqk1Y53flpPGZo?input=http:%2F%2Fnoticias.com)     | [DNS tampering](https://explorer.ooni.io/measurement/20180806T220516Z_AS27889_2fUK4PvrYpicA5AfBU5xNLMeWeyK9vYQ7x122nOiVAkv1RS4oc?input=http:%2F%2Fnoticias.com)      |
| http://ntn24.com/        | N/A                | [DNS tampering](https://explorer.ooni.io/measurement/20180810T024406Z_AS8048_GxLMU1Y4WYhmJldyTKetLGsq0FyPFuQJw7TWcYuT1NFpDtVZ7y?input=http:%2F%2Fntn24.com)  | N/A               | N/A                |
| http://armando.info      | N/A                | [HTTP failure](https://explorer.ooni.io/measurement/20180813T223843Z_AS8048_XsMtNp6XzoS2otdCYdznzZ43U2TxAtpH4ETiKTEqBbGfhH8Rev?input=http:%2F%2Fwww.armando.info)   | [Accessible](https://explorer.ooni.io/measurement/20180813T223816Z_AS6306_xfdvcNktQis2kD5IxMHdEFKrhcfBZDJCHUW31BaRuCbtCIzQQD?input=http:%2F%2Fwww.armando.info)        | N/A                |
                                                                                                                                                                       
El Pitazo is an independent news outlet run by Venezuelans that
[started off](https://elpitazo.com/quienes-somos/) as a YouTube
channel in 2014, expanded to a radio program, and eventually created a
media website. They [aim](https://elpitazo.com/quienes-somos/) to
share information with the most economically disadvantaged populations
of Venezuela and to shed light on issues that are otherwise censored by
state-owned media. El Pitazo is one of the few media outlets that has a
presence in all states in Venezuela, and whose news agenda is focused on
issues of community complaints, conflicts, and acts of corruption that
affect citizens and are of public interest.

A few months ago (in April 2018), Venezuela Inteligente and IPYS
Venezuela [reported](https://twitter.com/vesinfiltro/status/984156584845692928) that [two of El Pitazo’s domains](https://ipysvenezuela.org/alerta/dos-medidas-de-censura-han-afectado-a-el-pitazo/)
(elpitazo.com and elpitazo.info) were blocked by CANTV, Digitel,
Movistar, Movilnet and Intercable by means of DNS. Recent OONI data not
only shows that these domains remain blocked across ISPs, but that a
third domain of El Pitazo (elpitazo.ml) has been blocked as well.

Our findings pertaining to the recent testing of El Pitazo domains (over
the last two months) are aggregated in the following table (where
numbers represent the amount of measurements presenting each anomaly per
ISP).

|                    | elpitazo.ml | elpitazo.info | elpitazo.com |
|--------------------|-------------|---------------|--------------|
| **CANTV (AS8048)**     |             |               |              |
| DNS blocking       | 14          | 14            | 14           |
| HTTP failures      | 6           | 6             | 6            |
| **Digitel (AS264731)** |             |               |              |
| DNS blocking       | 13          | 13            | 13           |
| HTTP failures      | 1           | 1             | 1            |
| **Movilnet (AS27889)** |             |               |              |
| DNS blocking       | 5           | 5             | 5            |
| HTTP failures      | 21          | 21            | 21           |
| **Movistar (AS6306)**  |             |               |              |
| DNS blocking       | 19          | 19            | 19           |
| HTTP failures      | 4           | 4             | 4            |

CANTV, Digitel and Movistar primarily appeared to block El Pitazo
domains by means of DNS, while most measurements collected from Movilnet
presented HTTP failures, suggesting potential HTTP blocking (though the
previous table links to some of the latest measurements presenting DNS
lookup errors).

The presence of both DNS lookup errors and HTTP failures may suggest
that ISPs employ both DNS and HTTP blocking techniques, or that HTTP
failures are caused as a result of DNS blocking techniques not being
implemented properly. Alternatively, they could be caused by a congested
network, server-side blocking, or if the site in question went down
during testing due to a DDoS attack. But we consider these possibilities
rather unlikely, as El Pitazo domains run behind Cloudflare, so they
should be quite resistant to failures.

Two months after El Pitazo domains were blocked, IPYS Venezuela
[reported](https://ipysvenezuela.org/alerta/nueva-forma-de-censura-en-internet-aparece-en-venezuela-balance-ipysve/)
that independent news outlets La Patilla and El Nacional were blocked as
well.

La Patilla was [founded](https://www.lapatilla.com/) in 2010 by the
former CEO of Globovision (private Venezuelan TV channel) and is
[ranked](https://www.alexa.com/topsites/countries;0/VE) as one of the
most visited websites in Venezuela (ahead of other major news websites).
Currently, lapatilla.com is
[accessible](https://explorer.ooni.io/measurement/20180810T024406Z_AS8048_GxLMU1Y4WYhmJldyTKetLGsq0FyPFuQJw7TWcYuT1NFpDtVZ7y?input=http:%2F%2Fwww.lapatilla.com),
but was [temporarily blocked](https://explorer.ooni.io/measurement/20180606T212129Z_AS8048_PpN50F7H35GboisZ8JXLx8Qwzwg8tisIelPw70JkvM1Z490lw9?input=http:%2F%2Fwww.lapatilla.com)
between 6th to 10th June 2018. OONI data collected on 6th June 2018
shows that the site was
[accessible](https://explorer.ooni.io/measurement/20180606T135026Z_AS6306_nlCjR1zxn2yWxKXiKhNU8kceTSjYpc0PRMIS7mvc4bwzAazCoR?input=http:%2F%2Fwww.lapatilla.com)
on Movistar (AS6306), but
[blocked](https://explorer.ooni.io/measurement/20180606T212129Z_AS8048_PpN50F7H35GboisZ8JXLx8Qwzwg8tisIelPw70JkvM1Z490lw9?input=http:%2F%2Fwww.lapatilla.com)
by state-owned CANTV (AS8048). Lapatilla.com was tested multiple times
on CANTV and all measurements presented the same HTTP failures and
“generic timeout errors”, suggesting HTTP blocking. CANTV though appears
to have
[unblocked](https://explorer.ooni.io/measurement/20180611T195842Z_AS8048_mdI1VLXYpPTwaL6C0rOIybhWiWivU5ItIZcpVmiBrUZ6OWALYU?input=http:%2F%2Fwww.lapatilla.com)
the site by 11th June 2018, as corroborated by all subsequent
measurements.

El Nacional is Venezuela’s largest independent newspaper. Having [run stories](https://www.washingtonpost.com/world/the_americas/as-it-slides-toward-authoritarianism-venezuela-targets-one-of-its-last-independent-newspapers/2018/07/03/9cb5fe22-7a2d-11e8-ac4e-421ef7165923_story.html?)
on corruption, official brutality, electoral fraud, protests and other
stories critical of the government, the newspaper has received
significant government pressure over the last months. Similarly to La
Patilla, el-nacional.com primarily appears to be censored by means of
HTTP blocking, as suggested by HTTP failures (and “generic timeout
errors”) presented in recent OONI measurements. OONI data suggests that
the site’s [blocked by CANTV](https://explorer.ooni.io/measurement/20180810T222728Z_AS8048_EJ8BJ6MxVJRTaYrgh8zdMYrzq5aFwq8H9x0wsG8GsJzUlVDOkJ?input=http:%2F%2Fel-nacional.com)
and
[Movilnet](https://explorer.ooni.io/measurement/20180806T220516Z_AS27889_2fUK4PvrYpicA5AfBU5xNLMeWeyK9vYQ7x122nOiVAkv1RS4oc?input=http:%2F%2Fel-nacional.com),
but [accessible on Digitel](https://explorer.ooni.io/measurement/20180810T233912Z_AS264731_7OIxxNxrImB1KLGA0CzqUU0FqFa5o0q313RPVTtc7Xer4tQLt1?input=http:%2F%2Fel-nacional.com)
and
[Movistar](https://explorer.ooni.io/measurement/20180811T111705Z_AS6306_Oob0CZvOVwStTemivOHGzrkprDI3h7YgWVu40APYeQPCLEK53v?input=http:%2F%2Fel-nacional.com).

HTTP failures indicative of blocking have been inconsistent or even
intermittent at times. This may suggest that internet censorship is not
implemented in a centralized way (i.e. by the same people) or in a way
that doesn’t affect all traffic.

A few days ago, [Venezuela Inteligente](https://twitter.com/vesinfiltro/status/1028975238216916993)
and [IPYS Venezuela](https://twitter.com/ipysvenezuela/status/1029165159535849472)
reported that investigative journalism site armando.info was
inaccessible as well. This site is known for its critical and extensive
reporting on corruption and has been [tested fairly regularly](https://explorer.ooni.io/country/VE) across ISPs
over the last two years. Most OONI measurements collected up until 12th
August 2018 suggested that the site was
[accessible](https://explorer.ooni.io/measurement/20180812T064426Z_AS8048_FgzMuq4W7meAL9Mzn318FsQCx5hav7d0tbxtjO8rskEUyOduSM?input=http:%2F%2Farmando.info).
But on 13th August 2018, OONI Probe testing revealed that the site was
suddenly
[inaccessible](https://explorer.ooni.io/measurement/20180813T221705Z_AS8048_YaFF69k3LE9Uzf4xEYV4naxo4hoSMGrnpqoH9nUiPdmCm2QSy1?input=http:%2F%2Fwww.armando.info)
on CANTV, presenting HTTP failures.

To investigate further, IPYS Venezuela and Venezuela Inteligente
coordinated a measurement campaign, engaging locals across Venezuela to
[test armando.info with OONI Probe](https://run.ooni.io/nettest?tn=web_connectivity&ta=%7B%22urls%22%3A%5B%22https%3A%2F%2Farmando.info%2F%22%5D%7D&mv=1.2.0)
in various networks and regions of the country. In the evening of 13th
August 2018, armando.info was tested on CANTV, Movistar, CIX and Inter
in the following regions: Caracas, Carabobo, Táchira, Aragua, Bolívar,
Lara, Portuguesa and Monagas.

The table below summarizes the results of their testing.

| Time of testing (local time) | ISPs              | Results      |
|------------------------------|-------------------|--------------|
| 5:54 pm                      | CANTV (AS8048)    | [HTTP failure](https://explorer.ooni.io/measurement/20180813T215415Z_AS8048_XVq7RVS2chMLNCL5797zlBKBTZYw29e03rlO1T30G8yahvjsYe?input=http:%2F%2Fwww.armando.info) |
| 5:57 pm                      | Movistar (AS6306) | [Accessible](https://explorer.ooni.io/measurement/20180813T215707Z_AS6306_AdEBkS5NW1ljF0U8XOq3ipAtxDKMRdy3AVWjf841VK3Xi1unyW?input=http:%2F%2Fwww.armando.info)   |
| 6:07 pm                      | Movistar (AS6306) | [Accessible](https://explorer.ooni.io/measurement/20180813T220727Z_AS6306_rlN6FVKmywaREaOMpRb3w2VdANwMD7eG6Ekpjl2OvDkEbBq8EU?input=http:%2F%2Fwww.armando.info)   |
| 6:10 pm                      | CANTV (AS8048)    | [HTTP failure](https://explorer.ooni.io/measurement/20180813T221021Z_AS8048_r6TrGGGrbAGqRIETPyS1xDcogKqIn5VxZTfpGH9fItIFQvJLw0?input=http:%2F%2Fwww.armando.info) |
| 6:13 pm                      | CANTV (AS8048)    | [HTTP failure](https://explorer.ooni.io/measurement/20180813T221318Z_AS8048_A2sdDZH3Yi2p3puNubYqnYoIlJERnJGeVwUNfP3NMQDKoOc6bz?input=http:%2F%2Fwww.armando.info) |
| 6:13 pm                      | Movistar (AS6306) | [Accessible](https://explorer.ooni.io/measurement/20180813T221331Z_AS6306_2XHd7rVThcIKKI0E2yueI9onzOokksSayj7GcptppGqfaxfHxn?input=http:%2F%2Fwww.armando.info)   |
| 6:16 pm                      | CANTV (AS8048)    | [Accessible](https://explorer.ooni.io/measurement/20180813T221626Z_AS8048_zOHUDdLilIqcj031YigJDgV1PZ6pHULj42ebnQv7vVzI6cDep6?input=http:%2F%2Fwww.armando.info)   |
| 6:17 pm                      | Movistar (AS6306) | [Accessible](https://explorer.ooni.io/measurement/20180813T221706Z_AS6306_XMqQa7B90W1Feo9DTQ2YXVg0aMEMmjMz3FdEq69ITDYrKQpi22?input=http:%2F%2Fwww.armando.info)   |
| 6:24 pm                      | Movistar (AS6306) | [Accessible](https://explorer.ooni.io/measurement/20180813T222432Z_AS6306_3xggZOvnwXZ8Tv8sL64uDNX5up1SWIEfGiIu7CzSvfI68Sio45?input=http:%2F%2Fwww.armando.info)   |
| 6:28 pm                      | CANTV (AS8048)    | [HTTP failure](https://explorer.ooni.io/measurement/20180813T222810Z_AS8048_nEJFbAV0lqGSEksFhrpP024SSYjyY9IPDKvOb0UIZJKXwLd5my?input=http:%2F%2Fwww.armando.info) |
| 6:30 pm                      | CANTV (AS8048)    | [HTTP failure](https://explorer.ooni.io/measurement/20180813T223023Z_AS8048_qkZmghbj91nPS2KS1Mm9lgJIQ7N9U41sotAfQUf45KMZ6kAzd7?input=http:%2F%2Fwww.armando.info) |
| 6:32 pm                      | Movistar (AS6306) | [Accessible](https://explorer.ooni.io/measurement/20180813T223044Z_AS6306_2vDXl7NWV1M5imFOl8DlN8y6QFUPABnWqKcH5mKy68khITkM6M?input=http:%2F%2Fwww.armando.info)   |
| 6:34 pm                      | CANTV (AS8048)    | [HTTP failure](https://explorer.ooni.io/measurement/20180813T223415Z_AS8048_M7VkLUkfPLhw4SLgjeIBr3z7OtV0HxUdxgn1YD0Oh118Zf9SBY?input=http:%2F%2Fwww.armando.info) |
| 6:37 pm                      | Movistar (AS6306) | [Accessible](https://explorer.ooni.io/measurement/20180813T223705Z_AS6306_oAzIMF3CGCB3UGbydxOdq3ORCVEniy22daLPZqJoOr6nFoh47T?input=http:%2F%2Fwww.armando.info)   |
| 6:37 pm                      | Inter (AS21826)   | [Accessible](https://explorer.ooni.io/measurement/20180813T223711Z_AS21826_LosGDpFBfDnIenPTvurRcy4zlqMeVqsaq7qrk7rTWU2FLYWCGr?input=http:%2F%2Fwww.armando.info)   |
| 6:38 pm                      | CANTV (AS8048)    | [HTTP failure](https://explorer.ooni.io/measurement/20180813T223843Z_AS8048_XsMtNp6XzoS2otdCYdznzZ43U2TxAtpH4ETiKTEqBbGfhH8Rev?input=http:%2F%2Fwww.armando.info) |
| 6:50 pm                      | Movistar (AS6306) | [Accessible](https://explorer.ooni.io/measurement/20180813T225224Z_AS6306_YrfBlZQbpfh55BvIpqoPxANj6BQl4NSqYcqx9z67CCglwMdVI4?input=http:%2F%2Fwww.armando.info)   |
| 7:13 pm                      | Movistar (AS6306) | [Accessible](https://explorer.ooni.io/measurement/20180813T223816Z_AS6306_xfdvcNktQis2kD5IxMHdEFKrhcfBZDJCHUW31BaRuCbtCIzQQD?input=http:%2F%2Fwww.armando.info)   |
| 8:01 pm                      | CIX (AS265641)    | [Accessible](https://explorer.ooni.io/measurement/20180814T000151Z_AS265641_WLC0qT9K2FQWaLpFV6AlOE42s5bBBJiy1dKBi6jP2pFR5MpJ9i?input=http:%2F%2Fwww.armando.info)   |
| 8:16 pm                      | CANTV (AS8048)    | [Accessible](https://explorer.ooni.io/measurement/20180814T001610Z_AS8048_zR3MHe1CanwhrYiJa1FpCkXqCKvfrfPilcmXdSdKtFR51rq10x?input=http:%2F%2Fwww.armando.info)   |
| 8:18 pm                      | CANTV (AS8048)    | [Accessible](https://explorer.ooni.io/measurement/20180814T001652Z_AS8048_yK8D6bON8XhBj9J2LkcFPf1Gf5m1kJhvpAyIEzFmfVEYn1Gssk?input=http:%2F%2Fwww.armando.info)   |

What’s clear from recent [OONI Probe measurements](https://explorer.ooni.io/country/VE)
(collected on 13th August 2018) is that the potential blocking of
armando.info is certainly inconsistent. We can see from the above table,
for example, that measurements collected from CANTV alternated between
being accessible and presenting HTTP failures. And these failures
weren’t triggered consistently over time and across regions.

The first CANTV measurements (presenting HTTP failures) in the early
evening of 13th August 2018 were collected from Caracas, while the last
CANTV measurements presented in the table (showing accessibility) were
collected from Táchira. The other
[accessible](https://explorer.ooni.io/measurement/20180813T221626Z_AS8048_zOHUDdLilIqcj031YigJDgV1PZ6pHULj42ebnQv7vVzI6cDep6?input=http:%2F%2Fwww.armando.info)
CANTV measurement at 6:16 pm was collected from Carabobo. This is
particularly interesting, as it may suggest that CANTV doesn’t roll out
the same censorship across its network, or that network or configuration
issues impacted the accessibility of armando.info.

[Venezuela Inteligente](http://veinteligente.org/) and [IPYS Venezuela](https://ipysvenezuela.org/) (who are based in Caracas)
report that their experience in attempting to access armando.info (on
CANTV, Movistar and Digitel) is also inconsistent. As of 13th August
2018, there are moments when they can access the site and there are
moments when they can’t. While the armando.info site was
[inaccessible](https://explorer.ooni.io/measurement/20180813T215415Z_AS8048_XVq7RVS2chMLNCL5797zlBKBTZYw29e03rlO1T30G8yahvjsYe?input=http:%2F%2Fwww.armando.info),
as documented by OONI Web Connectivity tests, the server was reachable
and accepted TCP connections even as the HTTP exchange failed.

It therefore remains unclear whether armando.info is (or was)
intentionally blocked. However, it’s worth highlighting that
armando.info uses Google Shield, so we believe that server-side issues
are unlikely a reason for the observed network anomalies. Further
monitoring and
[testing](https://run.ooni.io/nettest?tn=web_connectivity&ta=%7B%22urls%22%3A%5B%22https%3A%2F%2Farmando.info%2F%22%5D%7D&mv=1.2.0)
is required.

### Political criticism

Back in 2016, IPYS Venezuela and Venezuela Inteligente
[reported](https://advox.globalvoices.org/2016/05/23/venezuela-research-confirms-censorship-of-news-platforms-currency-websites/)
that a number of blogs critical of the government were blocked. Our
recent testing shows that the following two sites are currently blocked
across ISPs, primarily by means of DNS tampering.

| URL                          | Digitel (AS264731) | CANTV (AS8048) | Movistar (AS6306) | Movilnet (AS27889) |
|------------------------------|--------------------|----------------|-------------------|--------------------|
| http://vdebate.blogspot.com/ | [DNS tampering](https://explorer.ooni.io/measurement/20180810T233912Z_AS264731_7OIxxNxrImB1KLGA0CzqUU0FqFa5o0q313RPVTtc7Xer4tQLt1?input=http:%2F%2Fvdebate.blogspot.com)      | [DNS tampering](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Fvdebate.blogspot.com)  | [DNS tampering](https://explorer.ooni.io/measurement/20180810T145701Z_AS6306_w5ymvkIGCw4svF0JyCbi39g3cW2R7QhQlOTT6c3WPjLtKkhLIk?input=http:%2F%2Fvdebate.blogspot.com)     | [DNS tampering](https://explorer.ooni.io/measurement/20180806T220516Z_AS27889_2fUK4PvrYpicA5AfBU5xNLMeWeyK9vYQ7x122nOiVAkv1RS4oc?input=http:%2F%2Fvdebate.blogspot.com)      |
| http://ovario2.com/          | [DNS tampering](https://explorer.ooni.io/measurement/20180810T233912Z_AS264731_7OIxxNxrImB1KLGA0CzqUU0FqFa5o0q313RPVTtc7Xer4tQLt1?input=http:%2F%2Fovario2.com)      | [DNS tampering](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Fovario2.com)  | [HTTP failure](https://explorer.ooni.io/measurement/20180810T145701Z_AS6306_w5ymvkIGCw4svF0JyCbi39g3cW2R7QhQlOTT6c3WPjLtKkhLIk?input=http:%2F%2Fovario2.com)      | [DNS tampering](https://explorer.ooni.io/measurement/20180806T220516Z_AS27889_2fUK4PvrYpicA5AfBU5xNLMeWeyK9vYQ7x122nOiVAkv1RS4oc?input=http:%2F%2Fovario2.com)      |

The first site listed in the table above (vdebate.blogpost.com) is the
blog of an organization whose [mission](https://vdebate.blogspot.com/)
is to “work for the recovery of democracy in Venezuela”. In
collaboration with other organizations and volunteers, they defend the
human, political and civil rights of Venezuelans. The second site listed
above (ovario2.com) is a blog that covers Venezuelan issues,
[expressing political criticism](http://ovario2.com/bienvenido/acerca-de-este-blog-about-this-blog/).

Previous measurements collected from CANTV show that
alekboyd.blogspot.co.uk (a blog covering corruption and other political
issues) was
[blocked](https://explorer.ooni.io/measurement/20180405T025325Z_AS8048_zHRXY2AxlvwXTtUYmA4pQKJwo42UsLl3Hs1ffioON6Zwt3o1O1?input=https:%2F%2Falekboyd.blogspot.com)
by CANTV by means of DNS tampering, up until (at least) 5th April 2018.
The blog though has since been unblocked and is currently
[accessible](https://explorer.ooni.io/measurement/20180810T024406Z_AS8048_GxLMU1Y4WYhmJldyTKetLGsq0FyPFuQJw7TWcYuT1NFpDtVZ7y?input=https:%2F%2Falekboyd.blogspot.com).

### Zello

Zello is a [mobile app](https://zello.com/) that serves as a
walkie-talkie over cell phone networks. Over the last years, it has been
[popular among protesters](https://edition.cnn.com/2014/02/24/world/venezuela-ukraine-protests-apps/)
in Venezuela, Ukraine and
[Russia](https://blog.zello.com/2017/04/13/russia-blocks-zello).
During Venezuela’s 2014 protests, the app was [reportedly blocked](https://www.infobae.com/2014/03/06/1548288-zello-la-aplicacion-terrorista-los-estudiantes-venezolanos/)
for enabling “terrorist acts”.

Our recent testing suggests that the service remains blocked by (at
least) three ISPs, as illustrated below.

| URL                       | Digitel (AS264731) | CANTV (AS8048) | Movistar (AS6306) | Movilnet (AS27889) |
|---------------------------|--------------------|----------------|-------------------|--------------------|
| http://content.zello.com/ | [DNS tampering](https://explorer.ooni.io/measurement/20180810T233912Z_AS264731_7OIxxNxrImB1KLGA0CzqUU0FqFa5o0q313RPVTtc7Xer4tQLt1?input=http:%2F%2Fcontent.zello.com)      | [DNS tampering](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Fcontent.zello.com)  | [DNS tampering](https://explorer.ooni.io/measurement/20180719T164056Z_AS6306_nRIVvm84Q6nmvdrguzVz7JvNomzYM2ymbisMODbkmtVEh8391v?input=http:%2F%2Fcontent.zello.com)     | N/A                |

### Currency exchange

Venezuela is experiencing the [worst economic crisis](https://www.aljazeera.com/indepth/features/2017/05/venezuela-worst-economic-crisis-wrong-170501063130120.html)
in its history. The country heavily depends on its oil (it has the
largest oil reserves in the world), the revenue of which supported its
social programmes and food subsidies. But when the price of oil fell,
these programmes became unsustainable and the country plummeted into a
food crisis.

Venezuela has established different exchange rate systems for its
national currency (the bolivar), with government control on the price of
basic goods, which is very high. In light of hyperinflation, coupled
with the devaluation of the bolivar in the black market, many
Venezuelans are opting for dollars rather than bolivares. But according
to the Venezuelan government, this
[deepens](https://cpj.org/blog/2013/12/venezuela-forces-isps-to-police-internet.php)
the country’s economic crisis.

To limit currency exchange, the Venezuelan government restricted access
to dollars and [banned currency exchange websites in 2013](https://cpj.org/blog/2013/12/venezuela-forces-isps-to-police-internet.php),
more than 100 of which have reportedly been blocked.

Our recent testing (based on a limited amount of [tested URLs](https://github.com/citizenlab/test-lists/blob/master/lists/ve.csv))
reveals the blocking of the following currency exchange sites.

| URL                                     | Digitel (AS264731) | CANTV (AS8048) | Movistar (AS6306) | Movilnet (AS27889) |
|-----------------------------------------|--------------------|----------------|-------------------|--------------------|
| http://dolartoday.com/                  | N/A                | [DNS tampering](https://explorer.ooni.io/measurement/20180627T013502Z_AS8048_TKmrzeqqVwdn2t9IKtzF95ptVafOtf2tAsM4csctpiVcI9AH8m?input=http:%2F%2Fdolartoday.com)  | N/A               | N/A                |
| http://dollar.nu/                       | N/A                | [DNS tampering](https://explorer.ooni.io/measurement/20180810T024406Z_AS8048_GxLMU1Y4WYhmJldyTKetLGsq0FyPFuQJw7TWcYuT1NFpDtVZ7y?input=http:%2F%2Fdollar.nu)  | N/A               | N/A                |
| http://dollarparalelovenezuela.com/     | [DNS tampering](https://explorer.ooni.io/measurement/20180810T233912Z_AS264731_7OIxxNxrImB1KLGA0CzqUU0FqFa5o0q313RPVTtc7Xer4tQLt1?input=http:%2F%2Fdollarparalelovenezuela.com)      | [DNS tampering](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Fdollarparalelovenezuela.com)  | [DNS tampering](https://explorer.ooni.io/measurement/20180810T145701Z_AS6306_w5ymvkIGCw4svF0JyCbi39g3cW2R7QhQlOTT6c3WPjLtKkhLIk?input=http:%2F%2Fdollarparalelovenezuela.com)     | [DNS tampering](https://explorer.ooni.io/measurement/20180806T220516Z_AS27889_2fUK4PvrYpicA5AfBU5xNLMeWeyK9vYQ7x122nOiVAkv1RS4oc?input=http:%2F%2Fdollarparalelovenezuela.com)      |
| http://eldolarparalelo.info/            | [DNS tampering](https://explorer.ooni.io/measurement/20180810T233912Z_AS264731_7OIxxNxrImB1KLGA0CzqUU0FqFa5o0q313RPVTtc7Xer4tQLt1?input=http:%2F%2Feldolarparalelo.info)      | [DNS tampering](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Feldolarparalelo.info)  | [DNS tampering](https://explorer.ooni.io/measurement/20180810T145701Z_AS6306_w5ymvkIGCw4svF0JyCbi39g3cW2R7QhQlOTT6c3WPjLtKkhLIk?input=http:%2F%2Feldolarparalelo.info)     | [DNS tampering](https://explorer.ooni.io/measurement/20180806T220516Z_AS27889_2fUK4PvrYpicA5AfBU5xNLMeWeyK9vYQ7x122nOiVAkv1RS4oc?input=http:%2F%2Feldolarparalelo.info)      |
| http://aguacateverde1.blogspot.com      | N/A                | [DNS tampering](https://explorer.ooni.io/measurement/20180718T212149Z_AS8048_LHNE0Aq5Kvq3bb8qOvXJ1pJ1ly7wCp8OrVuqHHZzcxClcbSfUz?input=http:%2F%2Faguacateverde1.blogspot.com)  | N/A               | N/A                |
| http://liberal-venezolano.blogspot.com/ | [DNS tampering](https://explorer.ooni.io/measurement/20180810T233912Z_AS264731_7OIxxNxrImB1KLGA0CzqUU0FqFa5o0q313RPVTtc7Xer4tQLt1?input=http:%2F%2Fliberal-venezolano.blogspot.com)      | [DNS tampering](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Fliberal-venezolano.blogspot.com)  | [DNS tampering](https://explorer.ooni.io/measurement/20180810T145701Z_AS6306_w5ymvkIGCw4svF0JyCbi39g3cW2R7QhQlOTT6c3WPjLtKkhLIk?input=http:%2F%2Fliberal-venezolano.blogspot.com)     | [DNS tampering](https://explorer.ooni.io/measurement/20180806T220516Z_AS27889_2fUK4PvrYpicA5AfBU5xNLMeWeyK9vYQ7x122nOiVAkv1RS4oc?input=http:%2F%2Fliberal-venezolano.blogspot.com)      |
| http://tucadivi.com/                    | [DNS tampering](https://explorer.ooni.io/measurement/20180810T233912Z_AS264731_7OIxxNxrImB1KLGA0CzqUU0FqFa5o0q313RPVTtc7Xer4tQLt1?input=http:%2F%2Ftucadivi.com)      | [DNS tampering](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Ftucadivi.com)  | [DNS tampering](https://explorer.ooni.io/measurement/20180810T145701Z_AS6306_w5ymvkIGCw4svF0JyCbi39g3cW2R7QhQlOTT6c3WPjLtKkhLIk?input=http:%2F%2Ftucadivi.com)     | [Accessible](https://explorer.ooni.io/measurement/20180806T175450Z_AS27889_bUEUX6wglcFYiY8OFwX3xbLgAd9GV6tnclw8UtJtc2DJVzWimE?input=http:%2F%2Ftucadivi.com)         |

Miami-based DolarToday is run by the Venezuelan diaspora and is widely
used to track the plummeting black market value of the bolivar. It was
first [reportedly blocked](https://cpj.org/blog/2013/12/venezuela-forces-isps-to-police-internet.php)
in 2013. In late 2015, Venezuela’s central bank [filed suit](https://www.theguardian.com/world/2015/oct/23/venezuela-sues-dolartoday-currency-website-cyberterrorism)
in the US against dolartoday.com, alleging that the site’s managers
“committed cyberterrorism” and “sowed economic chaos” in Venezuela.
According to recent OONI measurements, dollartoday.com [remains blocked](https://explorer.ooni.io/measurement/20180627T013502Z_AS8048_TKmrzeqqVwdn2t9IKtzF95ptVafOtf2tAsM4csctpiVcI9AH8m?input=http:%2F%2Fdolartoday.com)
on CANTV.

## Blocking of Tor

### About Tor

The [Tor network](https://www.torproject.org/) offers online
anonymity, privacy, and censorship circumvention. By bouncing
communications across a distributed network of relays, Tor hides its
users’ IP addresses. In doing so, Tor users not only have online
anonymity, but they can also bypass the blocking of sites and services
(since they access them from IP addresses allocated to different
countries).

As a result, the Tor network has become a target of censorship in
several countries around the world (such as
[Egypt](/post/egypt-internet-censorship/)
and
[Iran](/post/iran-internet-censorship/#anonymity-and-circumvention-tools)),
where governments attempt to make circumvention harder and improve their
online surveillance capabilities. To bypass Tor censorship, [Tor bridges](https://bridges.torproject.org/) have been built to enable
users to connect to the Tor network in censored environments. Tor
Browser offers built-in (public) bridges that users can enable. If such
bridges are blocked, users can
[request](https://bridges.torproject.org/options) for (private) custom
bridges.

According to our recent testing and analysis, Venezuela now also
[blocks](https://explorer.ooni.io/measurement/20180811T001818Z_AS8048_WD5wpEvGX4XaG6Y6MczK8eLOsYFSgzStVkTMnvz1u36l8HMPxf)
access to the major part of the Tor network and to many public obfs3 and
obfs4 Tor bridges. State-owned CANTV (AS8048) appears to have started
blocking the anonymity network around 20th June 2018, following months
of increased censorship, particularly targeting media websites.

### Testing

OONI’s [Vanilla Tor test](/nettest/vanilla-tor/) is designed to
measure the reachability of the [Tor network](https://www.torproject.org/) from the local vantage point of
the user. If the test does *not* manage to bootstrap a connection within
300 seconds, access to the Tor network is likely blocked. Similarly,
OONI’s [Bridge Reachability test](/nettest/tor-bridge-reachability/)
measures the reachability of (public) [Tor bridges](https://bridges.torproject.org/) by attempting to successfully
bootstrap a connection to them. To confirm the potential blocking with
more confidence (and rule out false positives), it’s useful to examine
measurements collected from the same network over time.

All measurements collected up until 6th June 2018 were successful,
showing that the Tor network was
[accessible](https://explorer.ooni.io/measurement/20180606T191742Z_AS8048_KEG9dh8bT91bQ5WQt522pWTc9fFKMM34BeogNEelPWrL8c2XkU)
in Venezuela. On 20th June 2018, however, Tor testing started to
[fail](https://explorer.ooni.io/measurement/20180620T185351Z_AS8048_Au99GuLkM5KdIJESmiwduZdUb6eqnJBY4Iv3v1IngPAVEa3EVj)
and civil society group [Venezuela Inteligente](http://veinteligente.org/) reported the blocking of the
[Tor network](https://www.torproject.org/) and [Tor bridges](https://bridges.torproject.org/) by CANTV.

![VI tweet](/post/venezuela/ve-inteligente-tweet.png)

Most other measurements collected from 20th June 2018 onwards (from the
same network on an almost daily basis) have failed as well, strongly
suggesting that state-owned CANTV (AS8048) has been
[blocking](https://explorer.ooni.io/measurement/20180809T001818Z_AS8048_MUWnFBk13Pb64ctdl8UPCxc3Vj0RIXwiNav5HtxcTdxT4pSG36)
access to the Tor network over the last two months. According to our
recent mid-August scans from CANTV, around 75% of the Tor network
appears to be blocked.

The lack of measurements between 6th to 20th June 2018 prevents us from
determining the exact date when Tor first got blocked. It’s worth noting
though that the blocking probably started on 20th June 2018, since
that’s when local civil society group, [Venezuela Inteligente](http://veinteligente.org/) (who’s been monitoring internet
censorship in Venezuela over the last years), first
[reported](https://twitter.com/vesinfiltro/status/1009595373462151173)
on it.

To investigate further, OONI ran tests from a Raspberry Pi connected to
CANTV (AS8048) and performed some experiments examining the blocking of
Tor relays. Based on the following, we were able to successfully confirm
that connections to 74% of well-known IP:Port entities of the Tor
network were blocked (data:
[1](/post/venezuela/torping-consensus.1534370063.tsv),
[2](/post/venezuela/torping-consensus.1534373973.tsv),
[3](/post/venezuela/torping-consensus.1534377862.tsv),
[4](/post/venezuela/torping-consensus.1534381698.tsv),
[5](/post/venezuela/torping-consensus.1534385620.tsv),
[6](/post/venezuela/torping-consensus.1534389587.tsv),
[7](/post/venezuela/torping-consensus.1534393558.tsv),
[8](/post/venezuela/torping-consensus.1534397534.tsv),
[9](/post/venezuela/torping-consensus.1534401504.tsv)).
The blocking was implemented on the reverse path,
so it was hard for the client to distinguish it from server-side
blocking:

* The client could perform a TCP traceroute to all of the hops except for the last one; the client therefore got ICMP TTL Exceeded responses all the way long, but did not receive SYN-ACK.

* The server sees SYN and sends SYN-ACK.

* If the server *rejects* SYN with ICMP Port Unreachable - instead of RST - then the client gets the packet and the Linux TCP stack returns the “connection refused” error.

* The server can perform a reverse TCP traceroute back to the client’s IP without anomalies.

* Anomalous packet loss is observed on “parasitic” reverse TCP traceroutes, when the traceroute is executed using 5-tuple of existing connection. The anomaly seems to be located within the [GlobeNet](https://globenet.com/en/) network, a US-based company that provides one of the backbone internet links to Venezuela’s state-owned CANTV.

The “parasitic reverse traceroute” experiment was designed in the
following way: a) the client tried to establish 1000+ connections to the
TCP port of Tor relay, b) both [“blocked”](/post/venezuela/sa-traceroute-from-filtered.tsv)
and [“non-blocked”](/post/venezuela/sa-traceroute-from-open.tsv) relays were
tested, c) the relay was replying with a batch of marked SYN-ACKs with
varying TTL fields.

The following chart summarizes the percentage of
replies from specific routers and latency to them. It highlights that
the network anomaly occurs between two GlobeNet routers.

![Tor blocking](/post/venezuela/tor-blocking.png)

In addition to Tor blocking, Venezuela Inteligente also
[reported](https://twitter.com/vesinfiltro/status/1009595373462151173)
that access to a large amount of obfs3 and obfs4 bridges (i.e. [Tor bridges](https://bridges.torproject.org/) enabling Tor censorship
circumvention) was blocked as well, making it practically impossible to
circumvent Tor blocking with built-in bridges. OONI’s [bridge reachability](/nettest/tor-bridge-reachability/)
measurements corroborate these reports, showing the [blocking of many Tor endpoints](https://gist.github.com/hellais/ec4915246641a9f96ff0c9539ba9fe1d).

Bridge reachability tests run from CANTV (AS8048) in late June 2018 show
a failure rate of around 94% to known Tor bridges. Not all of these
failures are necessarily caused by blocking, as some bridges might be
offline or unreachable at any given moment. The high percentage of
connection failures though is highly indicative of blocking targeted to
well-known bridges. Repeated testing in mid-August 2018 showed a similar
percentage: 88% of *running* bridges were unreachable from a CANTV
vantage point.

The data from our scans is available via the following files: [1](/post/venezuela/torping-bridge.1534407846.tsv),
[2](/post/venezuela/torping-bridge.1534407911.tsv), [3](/post/venezuela/torping-bridge.1534407977.tsv),
[control](/post/venezuela/torping-bridges-control.1534407588.tsv).

Venezuela Inteligente tested a random sample of unlisted, publicly
available bridges from [BridgeDB](https://bridges.torproject.org/),
revealing that the failure rate is around 26% and that all testing to
private Tor bridges resulted in successful connections, regardless of
the type of bridge (including vanilla, obfs3 and obfs4 bridges). Forward
TCP traceroutes towards various accessible Tor relays go via GlobeNet,
Level3, Telia and Seabone. This also refutes the hypothesis that Tor
blocking depends on uplink (assuming that forward and reverse paths
match).

It’s worth highlighting that Tor’s website (torproject.org) has remained
[accessible](https://explorer.ooni.io/measurement/20180810T222728Z_AS8048_EJ8BJ6MxVJRTaYrgh8zdMYrzq5aFwq8H9x0wsG8GsJzUlVDOkJ?input=http:%2F%2Ftorproject.org)
in CANTV (and [other networks](https://explorer.ooni.io/measurement/20180810T233912Z_AS264731_7OIxxNxrImB1KLGA0CzqUU0FqFa5o0q313RPVTtc7Xer4tQLt1?input=http:%2F%2Ftorproject.org)),
even though access to the Tor network and obfs4 is blocked.

### Tor unblocking

Further testing on 2nd October 2018 revealed that around 97% of public Tor nodes were reachable with TLS handshake from
the vantage point of CANTV. This corroborates local reports on Tor being accessible again. 

While the precise date of unblocking is quite unclear, [Tor Metrics](https://metrics.torproject.org/userstats-relay-country.html?start=2018-05-01&end=2018-10-01&country=ve&events=off) suggest that Tor may have been unblocked on 30th August 2018, since we observe a spike in Tor usage, as illustrated below. 

![Tor Metrics stats](/post/venezuela/userstats-relay-country-ve-2018-05-01-2018-10-01-off.png)

# Conclusion

Censorship in Venezuela appears to be a symptom of its deep economic and
political crisis, which is considered the [most severe crisis](https://www.aljazeera.com/indepth/features/2017/05/venezuela-worst-economic-crisis-wrong-170501063130120.html)
in the country’s history. This is strongly suggested by the [blocking of numerous currency exchange websites](https://explorer.ooni.io/measurement/20180627T013502Z_AS8048_TKmrzeqqVwdn2t9IKtzF95ptVafOtf2tAsM4csctpiVcI9AH8m?input=http:%2F%2Fdolartoday.com),
as well as by the blocking of [independent news outlets](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Felpitazo.com)
and
[blogs](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Fvdebate.blogspot.com)
that discuss corruption and express political criticism.

The [recent blocking of the Tor network](https://explorer.ooni.io/measurement/20180811T001818Z_AS8048_WD5wpEvGX4XaG6Y6MczK8eLOsYFSgzStVkTMnvz1u36l8HMPxf)
(which followed the blocking of news websites [El Pitazo](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Felpitazo.com)
and [El Nacional](https://explorer.ooni.io/measurement/20180810T215359Z_AS8048_drib9FofDh0sq3NjRVwbVPshPdfow0rb4wrhcghZYb163Zxltb?input=http:%2F%2Fel-nacional.com))
may signify that internet censorship is becoming more dynamic in
Venezuela, as ISPs are taking extra steps to reinforce censorship and
make circumvention harder. The blocking of the [Tor network](https://www.torproject.org/) - which offers *online
anonymity*, in addition to circumvention - might also suggest that the
government is attempting to improve its online surveillance
capabilities.

While Venezuelan ISPs primarily block sites by means of DNS tampering,
they also appear to be implementing HTTP filtering, suggesting a
variance in the filtering rules adopted by ISPs. And the variance, both
in terms of censorship techniques and censored platforms, across regions
and ISPs also indicates that internet censorship is not implemented in a
centralized way.

The censorship events identified as part of this study (particularly the
blocking of news websites and blogs) contradict the rights outlined by
the Inter-American Commission on Human Rights (IACHR) in its
[report](https://www.oas.org/en/iachr/expression/docs/publications/internet_2016_eng.pdf)
on Standards for a Free, Open and Inclusive Internet. Media censorship
and the blocking of blogs limit press freedom and the right to freedom
of thought and expression. In examining each right
[outlined](https://www.oas.org/en/iachr/expression/docs/publications/internet_2016_eng.pdf)
by IACHR, questions around the necessity and proportionality of these
censorship events are inevitably raised, particularly in terms of how
they relate to human rights.

Venezuela’s political and economic environment is fragile and as events
unfold, its internet censorship apparatus may evolve. Continuing to
monitor censorship events in Venezuela is therefore essential. This
study can be reproduced and expanded upon through the use of [OONI Probe](/install/) and [OONI data](https://api.ooni.io/files/by_country/VE).
