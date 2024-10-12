---
title: "Measuring Internet Censorship in Cuba's ParkNets"
author: "Maria Xynou, Arturo Filastò, Simone Basso"
date: "2017-08-28"
tags: ["cuba", "censorship", "research-report", "country-cu", "theme-news_media", "theme-human_rights", "theme-circumvention", "theme-social_media"]
categories: ["report"]
---

{{< imgcap title="Image by Arturo Filastò (CC-BY-SA-3.0)" src="/post/cuba-internet-censorship-2017/cu-01.jpg" src2x="/post/cuba-internet-censorship-2017/cu-01@2x.jpg" >}}

A research study by the Open Observatory of Network Interference (OONI)

View the **pdf** version of the report [here](/documents/cuba-internet-censorship-2017.pdf).

**Table of contents**

* [Key Findings](#key-findings)

* [Introduction](#introduction)

* [Background](#background)

* [Network landscape and internet penetration](#network-landscape-and-internet-penetration)

    * [ETECSA](#etecsa)

    * [ParkNets](#parknets)

    * [Joven Club](#joven-club)

    * [StreetNets](#streetnets)

    * [El Paquete](#el-paquete)

    * [Summary](#summary)

* [Measuring Internet Censorship in Cuba](#measuring-internet-censorship-in-cuba)

  * [Methodology](#methodology)

    * [Collection and analysis of OONI Probe network measurements](#collection-and-analysis-of-ooniprobe-network-measurements)

    * [Custom tests](#custom-tests)

* [Findings](#findings)

    * [Blocked websites](#blocked-websites)

        * [News Media](#news-media)

        * [Political Criticism](#political-criticism)

        * [Human Rights Issues](#human-rights-issues)

        * [Anonymity and Circumvention Tools](#anonymity-and-circumvention-tools)

        * [Communication Tools](#communication-tools)

        * [Culture](#culture)
        
        * [Religion](#religion)

        * [Militant](#militant)

    * [Skype blocked](#skype-blocked)

    * [Deep Packet Inspection technology](#deep-packet-inspection-technology)

    * [Huawei equipment in Cuba](#huawei-equipment-in-cuba)

    * [Google App Engine blocked by Google](#google-app-engine-blocked-by-google)

  * [Acknowledgement of limitations](#acknowledgement-of-limitations)

* [Conclusion](#conclusion)

**OONI tests:** [Web Connectivity](https://ooni.org/nettest/web-connectivity/),
[HTTP Host](https://ooni.org/nettest/http-host/), [HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/),
[HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/),
[Vanilla Tor](https://ooni.org/nettest/vanilla-tor/),
[Meek Fronted Requests](https://ooni.org/nettest/meek-fronted-requests/),
[Facebook Messenger test](https://ooni.org/nettest/facebook-messenger/),
[WhatsApp test](https://ooni.org/nettest/whatsapp/),
[Telegram test](https://ooni.org/nettest/telegram/),
[Network Diagnostic Test (NDT)](https://ooni.org/nettest/ndt/)

**Probed ISP:** ETECSA (AS27725)

**Testing period:** 29th May 2017 to 10th June 2017

**Censorship method:** Deep Packet Inspection (DPI) technology serving
blockpages and RST Injection

# Key Findings

[OONI network measurement data](https://explorer.ooni.org/country/CU), collected from
eight vantage points across three Cuban cities between 29th May 2017 to
10th June 2017, confirms the **blocking of 41 websites.** Deep Packet
Inspection (DPI) technology, which we suspect to be located in Havana,
was used to reset connections to those sites and serve (blank) block
pages. Only the HTTP version of those sites was blocked, potentially
enabling users to circumvent the censorship by merely accessing them
over HTTPS.

Most of the blocked sites have one main thing in common: they *express
criticism* towards the Castro regime, directly or indirectly.

The blocked sites include:

* News outlets and blogs expressing political criticism and covering human rights
issues in Cuba;

* The [independent news outlet](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Fwww.14ymedio.com%2F) created by [Yoani Sanchez](https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/tiffanypham/2014/11/30/how-she-did-it-yoani-sanchez-time-100-most-influential-person-launches-cuban-news-outlet-14ymedio/&refURL=&referrer=#608feccd4d5b), a prominent Cuban blogger;

* The [Cuban Free Press Project](https://explorer.ooni.org/measurement/20170723T204926Z_AS27725_1xHuKtaN92RjPXcI7xnrm9SI1OrwZvvWKUK8filfQt94oyJVIp?input=http:%2F%2Fwww.cubafreepress.org) which [aims](http://cubafreepress.org/) to support journalists and independent writers;

* A [Cuban online forum](https://explorer.ooni.org/measurement/20170601T235618Z_AS27725_SpZcfWCu3e17GPv8jpXSOIQucnRNNPolNnG2OODcGQC8H70cbe?input=http:%2F%2Fconexioncubana.net);

* Pro-democracy sites;

* [Freedom House](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Ffreedomhouse.org%2Fcountry%2Fcuba), which [publishes](https://freedomhouse.org/report/freedom-world/2017/cuba) annual reports on press freedom and net freedom;

* “[Ladies in White](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Fwww.damasdeblanco.com)”: Peaceful opposition [movement](http://www.damasdeblanco.com/) led by the wives and female relatives of jailed dissidents;

* [Cuba Sindical](https://explorer.ooni.org/measurement/20170717T213558Z_AS27725_dEvgI4mTUuEHTiTTjSLx6Yb18MVUamp0vcvIKLCkjD72OnyyrI?input=http:%2F%2Fwww.cubasindical.org), which promotes [independent trade unions](http://cubasindical.org/);

* [Anonymouse](https://explorer.ooni.org/measurement/20170607T184235Z_AS27725_OItktnzsSSPe1V0nd5d3D8ZAfy9sk0T8VaT5zJyR60y1CKUm5p?input=http:%2F%2Fanonymouse.org), amongst other web proxies;

* Anti-Castro groups: [Alpha 66](https://explorer.ooni.org/measurement/20170601T235618Z_AS27725_SpZcfWCu3e17GPv8jpXSOIQucnRNNPolNnG2OODcGQC8H70cbe?input=http:%2F%2Fwww.alpha66.org) and “[Brothers to the Rescue](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Fwww.hermanos.org)”.

Interestingly enough though, various other international sites which
also express criticism - such as Reporters Without Borders’ [portrait of Cuba’s President](https://rsf.org/en/predator/raul-castro-0),
presenting him as a “Predator of Press Freedom” - were found to be
[accessible](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=https:%2F%2Frsf.org%2Fen%2Fpredator%2Fraul-castro-0)
across Cuba. This might indicate a lack in sophistication in both
internet surveillance and censorship.

**Skype was the only popular communications tool that we found to be
blocked.** Other popular platforms, like [Facebook Messenger](https://explorer.ooni.org/measurement/20170607T175309Z_AS27725_a4wPIMQ7NwY7hXozjWQ9f9gSNDRzpN9kb3XLsjzW1GFbsfcMGz)
and
[WhatsApp](https://explorer.ooni.org/measurement/20170607T175300Z_AS27725_sscXF9fCtjN7lUqAy9WewtB7HxS3dBWVJcjmuHYvHhreJosqap),
were accessible across Cuba. While some web proxies were found to be
blocked, the [Tor network](https://www.torproject.org/) was
[accessible](https://explorer.ooni.org/measurement/20170607T175300Z_AS27725_XXfB14TYx5szrWoFiokwjWdQZIJQIuEtGWpkfaojBEPdiNsc3u)
during the testing period of this study.

Chinese vendor Huawei was found to be supporting Cuba’s internet
infrastructure. While it is clear that Cuba is using Huawei’s access
points, it remains unclear whether and to what extent Huawei equipment
is actually being used to implement internet censorship in the country.

Apart from government censorship, a major source of content blocking originated from external publishers. During the testing period, we found that Google disallowed access to its App Engine service from Cuban users.

The [high cost of the internet](http://www.etecsa.cu/internet_conectividad/internet/)
(especially in comparison to [local salaries](https://www.forbes.com/sites/kenrapoza/2016/04/26/guess-how-much-cubans-earn-per-month/))
and the [limited availability of wifi hotspots](http://www.etecsa.cu/internet_conectividad/areas_wifi/)
across Cuba remain the main barriers to accessing the internet.

# Introduction

Last May, the [OONI](https://ooni.org/) team visited Cuba.
We ran a variety of network measurement tests across eight vantage
points in Havana, Santa Clara, and Santiago de Cuba, with the aim of
measuring internet censorship.

We obviously ran our own network measurement software,[OONI Probe](https://github.com/TheTorProject/ooni-probe), which is
designed to [examine various forms of internet censorship](https://ooni.org/nettest/). We also ran other
network tests, particularly in response to OONI Probe findings, such as
latency measurements to blocked sites, traceroutes, and network scans.

This research report documents our key findings from the network
measurement tests that we performed in Cuba. The aim of this study is to
increase the research community’s understanding of information controls
in Cuba based on [empirical data](https://explorer.ooni.org/country/CU).

The following sections of this report provide information about Cuba’s
network landscape and internet penetration levels. The remainder of the
report documents the methodology and findings of this research study.

# Background

{{< imgcap title="Image by Arturo Filastò (CC-BY-SA-3.0)" src="/post/cuba-internet-censorship-2017/cu-02.jpg" src2x="/post/cuba-internet-censorship-2017/cu-02@2x.jpg" >}}

The Republic of Cuba is a Central American archipelago of islands
located in the northern Caribbean sea. Its population is multi-ethnic
with European, African, and Native American ancestry, and consists of
[around 11 million](https://www.cia.gov/library/publications/the-world-factbook/geos/cu.html).
The vast majority of Cuba’s population is Roman Catholic
([85%](https://www.cia.gov/library/publications/the-world-factbook/geos/cu.html))
as a result of Spanish colonization between the 15th and 19th centuries.

Following the Spanish-American war, Cuba gained formal independence and
the Republic of Cuba was [established in May 1902](https://www.cia.gov/library/publications/the-world-factbook/geos/cu.html).
Fulgencio Batista served as Cuba’s President between 1940 to 1944,
during which he instated Cuba’s 1940 Constitution, which was
[considered progressive](https://www.revolvy.com/topic/1940%20Constitution%20of%20Cuba)
for its time. In 1952 though he [staged a coup with U.S. support](http://www.people.fas.harvard.edu/~jidoming/images/jid_batista.PDF),
outlawing the Cuban Communist Party, suspending the 1940 Constitution,
and revoking most political liberties. High unemployment and general
political dissatisfaction throughout the 1950s resulted in various
[organizations competing for public support to bring about political change](https://books.google.gr/books?id=094JHT5JtCAC&pg=PA37). The
Cuban Revolution began in 1953, led by Fidel Castro’s 26th July Movement
and its allies, overthrowing Batista’s dictatorship and forcing him into
exile on 1st January 1959.

Castro [legalized the Communist Party and promulgated the Agrarian Reform Law](https://books.google.gr/books?id=o2SFNdAiB7UC&pg=PA123).
Through a series of laws relating to land reform, passed between 1959 to
1963, thousands of acres of farmland were expropriated, including those
of large U.S. landholders. The nationalization of U.S.-citizen-held
property deteriorated the relationship between Cuba and the U.S.,
resulting in a range of sanctions in the early 1960s, including a total
ban on trade between the two countries. Cuba then established [economic relations with the Soviet Union](http://www.mexicosolidarity.org/sites/default/files/Tsokhas,%20Cuba%20Soviet%20relations.pdf),
depending on it for substantial aid.

Following the collapse of the Soviet Union, Cuba entered a [period of economic crisis](http://www.cubahistory.org/en/special-period-a-recovery.html)
(known as the Special Period). As part of measures to cope with the
crisis, Cuba allowed some self-employment in certain sectors, legalized
the use of the US dollar in business, and encouraged tourism. But as
Cuba still has a largely state-controlled planned economy, most of the
labor force is employed by the government, and most means of production
are run and owned by the government. Cubans are entitled to a [monthly supply of food](http://www.economist.com/node/21550421) and other
staples, but the average monthly wage is only around USD 25.

Cuba is now one of the world’s last remaining socialist countries
following the Marxist-Leninist ideology. Following [decades of U.S embargo against Cuba](https://www.cato.org/publications/speeches/four-decades-failure-us-embargo-against-cuba),
the two governments reached a deal in July 2015 to reopen embassies in
their respective capitals and to [re-establish diplomatic relations](http://edition.cnn.com/2015/07/01/politics/obama-note-to-castro-reestablish-ties/index.html).
President Trump though has recently [reversed some actions taken by the Obama administration](https://www.nytimes.com/2017/06/16/us/politics/cuba-trump-engagement-restrictions.html).

# Network landscape and internet penetration

Cuba is one of the countries in the world with the most [restricted internet](https://freedomhouse.org/report/freedom-world/2017/cuba).

Even though the internet was first introduced in Cuba in the late 1990s,
internet access has been limited by various factors. Cuban [government policies restricted access](https://freedomhouse.org/report/freedom-world/2017/cuba) to the
internet, as the telecommunications sector was viewed as a [tool for the subversion](http://www.juventudrebelde.cu/cuba/2009-02-06/internet-es-vital-para-el-desarrollo-de-cuba/)
of the country’s political system. Following the fall of the Soviet
Union, Cuba had a major [economic crisis](http://www.cubahistory.org/en/special-period-a-recovery.html),
limiting the availability of funds that could support internet
infrastructure. Meanwhile, the [U.S. trade embargo](https://www.state.gov/e/eb/tfs/spi/cuba/) made internet
equipment expensive and difficult to obtain. The Cuban government also
feared that foreign investment could undermine national sovereignty.

Up until 2008, private ownership of a computer or cell phone [required a government permit](https://freedomhouse.org/report/freedom-net/2012/cuba) that was
difficult to obtain. But over the last few years, Cuba’s internet
landscape has gradually been changing. In December 2014, Presidents
Barack Obama and Raul Castro reached an [agreement to restore diplomatic relations](http://www.currenthistory.com/Henken-Ritter_CurrentHistory.pdf).
Earlier that year, Google’s executives [visited Cuba](http://www.currenthistory.com/Henken-Ritter_CurrentHistory.pdf)
to initiate discussions. In April 2017, Google became the [first foreign internet company to launch its servers in Cuba](http://www.currenthistory.com/Henken-Ritter_CurrentHistory.pdf).

Yet, only [32.5%](http://www.internetworldstats.com/carib.htm#cu) of
Cuba’s population has access to the internet. The sections below provide
an overview of Cuba’s unique internet landscape.

## ETECSA

{{< imgcap title="Image by Arturo Filastò (CC-BY-SA-3.0)" src="/post/cuba-internet-censorship-2017/cu-03.jpg" src2x="/post/cuba-internet-censorship-2017/cu-03@2x.jpg" >}}

As of 2013, Cubans can sign up with [Empresa de Telecommunicaciones de Cuba S.A. (ETECSA)](http://www.etecsa.cu/), the country’s *only*
telecom company, which is state-owned.

To connect to the internet, Cubans need to purchase a [temporary or permanent account](http://www.etecsa.cu/internet_conectividad/internet/) from
ETECSA. Temporary accounts are most commonly used by tourists,
particularly since permanent accounts are primarily provided to Cuban
residents. A temporary account is valid for 30 days, while a permanent
account is valid for 360 days (from the first connection to the
internet).

A temporary account is provided in the form of a card, which includes a
login code and a password, both of which are long strings of numbers.
ETECSA cards offer 30 minutes, 1 hour, or up to 5 hours of internet
access. Once connected to a wifi, browsers present the Nauta captive
portal, which is where users are required to enter the login code and
password from their ETECSA cards.

![Nauta captive portal](/post/cuba-internet-censorship-2017/cu-04.jpg)

Image: Nauta captive portal

It’s worth noting that unless users have deleted all of their browser
cookies, they are unable to login via the Nauta portal. This in itself
could potentially be viewed as a barrier to accessing the internet for
users who don’t know how to delete their browser cookies (or who aren’t
aware that they should be doing so).

Permanent accounts don’t require ETECSA cards. Rather, Cubans are issued
usernames and passwords when they purchase permanent accounts from
ETECSA, which they can charge and recharge for up to a year at a time.
Access to the national web (intranet) is available for only [0.10 CUC per hour](http://www.etecsa.cu/internet_conectividad/internet/), while accessing the international web (internet) is more than ten times more expensive, at [1.5 CUC per hour](http://www.etecsa.cu/internet_conectividad/internet/). In addition to internet and/or intranet
access, permanent accounts also provide Cubans with an @nauta.cu email
address.

![ETECSA accounts](/post/cuba-internet-censorship-2017/cu-05.jpg)

Source: ETECSA, http://www.etecsa.cu/internet\_conectividad/internet/

The ETECSA offices in Cuba require a passport to purchase temporary accounts. All foreigners and residents were required to present ID, although they were not linked to the account numbers being issued. Rather, IDs are likely noted to track the volume of purchases, potentially allowing identification of resellers.

While accounts should officially be purchased from the ETECSA offices,
many temporary accounts are resold on the streets at higher prices. Some
Cubans stock up on ETECSA cards and sell them at twice the price on the
streets, usually around public wifi hotspots. When purchased from an
ETECSA office, [temporary accounts cost 1.5 CUC for 1 hour of internet access](http://www.etecsa.cu/internet_conectividad/internet/).
Re-sellers, on the other hand, often sell the same temporary ETECSA
cards for 3 CUC. Given that ETECSA offices often have long queues (and
may not always be close to public wifi hotspots), many (particularly
tourists) resort to buying the more expensive ETECSA cards sold on the
streets.

The table below illustrates the cost of internet access, depending on
the type of account (temporary or permanent) and the amount of time
used.

![Internet cost](/post/cuba-internet-censorship-2017/cu-06.png)

Source: ETECSA, http://www.etecsa.cu/internet\_conectividad/internet/

On average, Cubans [earn around 25 CUC](https://www.forbes.com/sites/kenrapoza/2016/04/26/guess-how-much-cubans-earn-per-month/)
per month. Since only 1 hour of internet use [costs 1.5 CUC](http://www.etecsa.cu/internet_conectividad/internet/) (if bought
from the official ETECSA offices, otherwise it may be more expensive),
it’s likely that most Cubans restrict their use to the country’s
national intranet, which is far more affordable. Given the high cost of
accessing the internet (especially in comparison to local salaries),
it’s probably no surprise that only
[32.5%](http://www.internetworldstats.com/carib.htm#cu) of Cuba’s
population currently has access to the internet.

ETECSA provides [ADSL services](http://www.etecsa.cu/internet_conectividad/internet/#adsl)
for the commercial and state sector. Given that only 1 Mbps costs 16,000
CUC per year, it’s clear that ADSL services are currently out of reach
for most Cubans. ETECSA also offers [point-to-point connections](http://www.etecsa.cu/internet_conectividad/conectividad/#puntoapunto)
to businesses at a fixed monthly rate. According to ETECSA, full-time
connection is guaranteed with a maximum transmission speed of up to 2
Mbps. Similarly, ETECSA enables businesses to access and use the
internet via [ATM and Ethernet](http://www.etecsa.cu/internet_conectividad/conectividad/#ATM).
These services are priced such that they will not become widely available, purported due to limited total network capacity.

Previously, Cubans could only access the internet via [computer centres](http://www.telcomatraining.com/list-of-mobile-network-operators-of-cuba/)
across the country. Many of these centres are called “[Joven
Club](https://www.jovenclub.cu/)” and they provide computer classes
(including programming courses) to young Cubans. In 2015, the Cuban
government opened the [first public wifi hotspots](http://www.bbc.com/news/technology-31905794).

Today, Cubans can [access the internet](http://www.etecsa.cu/internet_conectividad/internet/) in
ETECSA offices, Joven Clubs, post offices, hotels, airports, and at the
public wifi hotspots.

## ParkNets

{{< imgcap title="Image by Arturo Filastò (CC-BY-SA-3.0)" src="/post/cuba-internet-censorship-2017/cu-07.jpg" src2x="/post/cuba-internet-censorship-2017/cu-07@2x.jpg" >}}

Cubans cannot access the internet from the comfort of their homes.
Rather, they must visit [public wifi hotspots](http://www.etecsa.cu/internet_conectividad/areas_wifi/).
Cubans therefore have a uniquely different relationship with the
internet, in comparison to other countries. They don’t access the
internet, they *visit* it.

Currently, Cuba has [421 public wifi hotspots](http://www.etecsa.cu/internet_conectividad/areas_wifi/). The
vast majority of these hotspots are located in public parks. Others are
located in cafeterias, boulevards, and research centres. One of the wifi
hotspots in Santa Clara is, interestingly enough, located right under
the Che Guevara Mausoleum. [Most wifi hotspots (63) are located in Havana](http://www.etecsa.cu/internet_conectividad/areas_wifi/), the
country’s capital. Even though Santiago de Cuba is the country’s second
largest city, it only has 27 hotspots.

While the amount of hotspots across the country has increased
significantly over the last years, some Cuban cities have very few
hotspots available. Most of these hotspots are located in parks, which
can be too hot and sunny to visit during the day, and too crowded (in
some cases) at night (often leading to worse internet speed and
performance). The inconvenience of having to visit hotspots, which may
not always provide fast and reliable internet, can in itself be viewed
as a barrier to accessing the internet in Cuba.

Since [most of the wifi hotspots are located in parks](http://www.etecsa.cu/internet_conectividad/areas_wifi/), we
dubbed them “*ParkNets*”. When hanging out in ParkNets, we noticed that
almost all Cubans accessed the internet via their mobile phones. We also
noticed that they appeared to be using the internet primarily for
communications. When talking to locals, they mentioned that - in their
view, at least - most Cubans use the internet to connect with their
family and friends (many of whom are abroad). [Facebook Messenger is extremely popular](https://www.economist.com/news/americas/21716099-ingenious-answer-digital-deprivation-cuba-app-stores-pay-rent) in Cuba, and so is the [IMO app](http://www.havanatimes.org/?p=112977).
Given the high cost of accessing the internet, it’s probably no wonder
why Cubans optimize for using the internet primarily for communications
purposes.

Resellers of ETECSA internet cards often lurk in and around ParkNets.
But the underground internet business is not restricted to them. We
noticed that some locals were using repeaters within ParkNets to sell
cheaper internet access to others. In those cases, we noticed that some
Cubans were using the internet for purposes that expanded beyond
communications, like listening to music or watching viral videos on
YouTube.

## Joven Club

Cuba has computer centres across the country which provide internet
access, computer classes, and even programming courses to the youth.
These centres are known as “[Joven Club](https://www.jovenclub.cu/)”
(“Youth Club”).

While in Cuba, we visited one of these Joven Clubs. To use a computer
and gain access to the internet, we were required to provide
identification which was most likely linked to our accounts. We were
then issued usernames and passwords to use the computers and access the
internet. Through these computers, we were able to access both the
internet and Cuba’s intranet. It’s worth emphasizing that the speed of
the internet at the Joven Club was incredibly fast, in comparison to
that provided at public wifi hotspots.

While browsing Cuba’s intranet, we came across
[EcuRed](https://www.ecured.cu/), which could be viewed as Cuba’s
version of Wikipedia.

![EcuRed](/post/cuba-internet-censorship-2017/cu-08.jpg)

Image: Accessing EcuRed via a computer at Joven Club

EcuRed, created by Cubans and only available in Spanish, serves as an
online encyclopedia which aims to “[create and disseminate knowledge from a decolonizing point of view](https://www.ecured.cu/Lo_que_EcuRed_no_es)”. Similarly to
Wikipedia, EcuRed offers Cubans an interactive space to edit and publish
open content. Unlike Wikipedia, EcuRed includes some “protected pages”
that can [only be edited by the platform’s moderators](https://www.ecured.cu/index.php/EcuRed:Pol%C3%ADticas_de_Moderaci%C3%B3n).
EcuRed’s content falls under a variety of different categories, ranging
from art, culture and sports to science, history and politics, as
illustrated below.

![EcuRed content categories](/post/cuba-internet-censorship-2017/cu-09.png)

Source: EcuRed, `https://www.ecured.cu/index.php/EcuRed:%C3%81rbol_de_Categor%C3%ADas`

It’s worth noting though that most of its content is written from a
Cuban lens.

Recently, EcuRed shared the [100 most read articles](http://ecured.cubava.cu/2017/05/30/los-cien-de-ecured-mayo-de-2017/)
on its platform. The top 13 articles include specialized topics, like
chemistry, biology and maths, indicating that EcuRed likely has a
limited (and specialized) audience.

![Top EcuRed articles](/post/cuba-internet-censorship-2017/cu-10.png)

Source: The hundred of EcuRed (May 2017),[http://ecured.cubava.cu/2017/05/30/los-cien-de-ecured-mayo-de-2017/](http://ecured.cubava.cu/2017/05/30/los-cien-de-ecured-mayo-de-2017/)

EcuRed also has a [blog](http://ecured.cubava.cu/), which aims to
“[provide a space for the free expression of all members of the EcuRed
community](http://ecured.cubava.cu/%C2%BFquienes-somos/)”, as well as a
[social network](http://ecured.cubava.cu/ecuclubs/) (called
“EquClubs”) for its community of editors.

Other sites on Cuba’s intranet include
[CubaEduca](http://www.cubaeduca.cu/) and
[CubaDebate](http://www.cubadebate.cu/). CubaEduca is the educational
portal of Cuba’s Ministry of Education, designed to provide a
communication channel for the exchange of information that can
facilitate the use of ICTs in education. CubaDebate, on the other hand,
is a government-supported news site, edited by the Cuban Journalists’
Association Against Terrorism, which aims to “create a space for the
exchange of information on issues related to the subversion and
defamatory campaigns organized against Cuba”. CubaDebate ranks as one of
the [top sites](https://www.alexa.com/topsites/countries/CU) visited
by Cubans.

[Reflejos](http://cubava.cu/) is another
[top-ranking](https://www.alexa.com/topsites/countries/CU) Cuban site
which serves as a blog hosting platform. It enables Cubans to publish
blogs on a variety of topics. The top blogs that the site recommends
include those of the Ministry of Communications and the EcuRed blog,
amongst others.

![Reflejos](/post/cuba-internet-censorship-2017/cu-11.png)

Source: Reflejos (translated to English), [http://cubava.cu/](http://cubava.cu/) 

Two years ago, students and employees at the University of Information
Science
[launched](https://laredcubana.blogspot.it/2016/07/cubas-intranet-portal-is-now-on-web.html)
a [digital portal](https://www.redcuba.cu/) designed to unify all
services available on Cuba’s intranet. This enables Cubans to browse all
images, documents, news articles, and academic papers and blogs
published on Cuba’s intranet.

Interestingly enough, we didn’t come across any blocked sites while
browsing the internet via computers in a Joven Club. Most
internationally relevant websites were accessible.

Similarly to Joven Clubs, Universities in Cuba require user accounts
(linked to IDs) to access the internet. Only University staff and
students are authorised to acquire such accounts. Since their online
activity is directly linked to their personal accounts, they likely
self-censor the types of sites that they access.

## StreetNets

Cuba’s restrictive internet landscape appears to be fostering
*alternative* means of accessing the internet, particularly amongst the
youth. As of 2001, a small community of tech-savvy Cubans [started building a mesh network across Havana](https://gizmodo.com/cubas-illegal-underground-internet-is-thriving-1681797114),
linking computers to a private network. Today, multiple [mesh networks](http://www.currenthistory.com/Henken-Ritter_CurrentHistory.pdf)
have sprung across Havana and many other Cuban cities, providing members
the opportunity to communicate and share files privately. These networks
are known as
“[StreetNets](https://www.polygon.com/features/2017/5/15/15625950/cuba-secret-gaming-network)”,
or “SNets” for short.

StreetNets consist of wifi antennas that communicate with each other, or
Ethernet cables on rooftops that connect hundreds of computers. StreetNet users
play online games, view popular TV shows and movies, communicate, and share
files. Even though StreetNets are technically illegal, especially since the use
of wifi equipment requires a license from the Ministry of Communications,
[authorities appear be turning a blind eye](http://www.technewsworld.com/story/81646.html). This is likely because
users [refrain from discussing politics and/or sharing prohibited materials](https://www.polygon.com/features/2017/5/15/15625950/cuba-secret-gaming-network). They even enforce this rule themselves. Self-censorship *might*
be the most effective form of censorship in Cuba, even within StreetNets.

## El Paquete

{{< imgcap title="Image by Arturo Filastò (CC-BY-SA-3.0)" src="/post/cuba-internet-censorship-2017/cu-12.jpg" src2x="/post/cuba-internet-censorship-2017/cu-12@2x.jpg" >}}

Cuba’s underground internet is not restricted to StreetNets. As of 2008,
Cuba’s underground market has been distributing digital materials, known
as “[El Paquete Semanal](http://www.cbc.ca/news/world/cuba-el-paquete-internet-wifi-havana-1.3527274)”
(“The Weekly Package”), or “El Paquete” for short.

El Paquete consists of a [variety of digital materials](https://laredcubana.blogspot.it/2016/05/inside-edition-of-el-paquete.html),
ranging from music, TV series, movies, and video clips, to news
websites, software manuals, classifieds, and advertisements. Every week,
the El Paquete package contains different materials. Cubans can purchase
these packages by having the materials copied onto CDs or USB drives.

These materials [do not include pornography or other prohibited materials](http://www.cbc.ca/news/world/cuba-el-paquete-internet-wifi-havana-1.3527274),
nor do they include content expressing criticism towards the Cuban
government. This has led some to
[speculate](http://www.cbc.ca/news/world/cuba-el-paquete-internet-wifi-havana-1.3527274)
that the Cuban government might be involved in its production.

In a way, El Paquete emerged as a sort of substitute for broadband
internet, serving as Cuba’s “[offline internet](https://www.theguardian.com/world/2014/dec/23/cuba-offline-internet-weekly-packet-external-hard-drives)”.
It enables Cubans to gain access to online content, without being
online.

## Summary

Cuba’s internet landscape is quite unique for a number of reasons. For
starters, it only has [one telecom company](https://www.etecsa.cu/),
which is state-owned and was only introduced to the public a few years
ago. Unlike elsewhere in the world, Cubans can only access the internet
in [specific designated areas](http://www.etecsa.cu/internet_conectividad/areas_wifi/), most of
which are located in parks. The limited availability of such wifi
hotspots, and the inconvenience of visiting them, in addition to the
[extremely high cost of the internet](http://www.etecsa.cu/internet_conectividad/internet/)
(especially in comparison to local salaries), constitute some of the
main barriers to accessing the internet. This environment though has
fostered *alternative* approaches of accessing the internet, such as the
[distribution of digital materials](http://www.bbc.com/news/technology-33816655) and the
creation of [private mesh networks](https://www.independent.co.uk/life-style/gadgets-and-tech/news/young-cubans-build-own-internet-after-being-cut-off-by-wifi-ban-and-trade-embargo-10006332.html).

The fact that [Cuba’s intranet is far more affordable](http://www.etecsa.cu/internet_conectividad/internet/) than
the global internet indicates that most Cubans likely limit their
browsing experience to government-approved sites and services. But the
political climate in the country likely demands increased levels of
self-censorship, which arguably is the most effective form of
censorship.

In an attempt to understand how internet censorship is performed in
Cuba, we performed network measurement tests across eight vantage points
in three cities across Cuba. The following sections explain our
methodology and key findings.

# Measuring internet censorship in Cuba

We performed a variety of network measurement tests in Cuba in an
attempt to understand whether and to what extent information controls
are implemented.

The sections below document the methodology and findings of this study.

## Methodology

The methodology of this study included the following:

* Collection and analysis of [OONI Probe](https://github.com/TheTorProject/ooni-probe) network measurements;

* Custom network measurement tests.

The wifi hotspots from which we performed network measurement tests were
located in parks, hotels, a store and airport across Havana, Santa
Clara, and Santiago de Cuba. Most of our tests were performed in
ParkNets.

The analysis period started on 29th May 2017 and concluded on 10th June
2017.

### Collection and analysis of OONI Probe network measurements

Since 2011, OONI has developed multiple [free and open source software tests](https://github.com/TheTorProject/ooni-probe), called OONI Probe,
designed to measure the following:

* [Blocking of websites](https://ooni.org/nettest/web-connectivity/);

* Blocking of instant messaging apps ([WhatsApp](https://ooni.org/nettest/whatsapp/),[Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/));

* Blocking of the [Tor network](https://ooni.org/nettest/vanilla-tor/) and [Tor bridges](https://ooni.org/nettest/tor-bridge-reachability/);

* Presence of [middleboxes](https://ooni.org/nettest/http-invalid-request-line/);

* [Speed and performance](https://ooni.org/nettest/ndt/) of networks.

As part of this study, the following [OONI Probe tests](https://github.com/TheTorProject/ooni-probe) were run from eight
local vantage points in Cuba:

* [Web Connectivity](https://ooni.org/nettest/web-connectivity/)

* [HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/)

* [HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/)

* [Vanilla Tor](https://ooni.org/nettest/vanilla-tor/)

* [WhatsApp test](https://ooni.org/nettest/whatsapp/)

* [Facebook Messenger test](https://ooni.org/nettest/facebook-messenger/)

* [Telegram test](https://ooni.org/nettest/telegram/)

* [Network Diagnostic Test (NDT)](https://ooni.org/nettest/ndt/)

* [HTTP Host](https://ooni.org/nettest/http-host/)

* [Meek Fronted Requests](https://ooni.org/nettest/meek-fronted-requests/)

The Web Connectivity test was run with the aim of examining whether a
set of URLs (included in both the [global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv),
and the [Cuban test list](https://github.com/citizenlab/test-lists/blob/master/lists/cu.csv))
were blocked during the testing period and if so, how. The Vanilla Tor
test was run to examine the reachability of the [Tor network](https://www.torproject.org/), while the Facebook Messenger,
Telegram, and WhatsApp tests were run to examine the reachability of
these instant messaging apps in Cuba during the testing period.

The HTTP Invalid Request Line and HTTP Header Field Manipulation tests
were run with the aim of examining whether “middleboxes” (systems placed
in the network between the user and a control server) that could
potentially be responsible for censorship and/or surveillance were
present in the tested networks.

The NDT test was run with the aim of measuring the speed and performance
of networks in Cuba.

The sections below document how each of these tests are designed.

**Web Connectivity**

This test examines whether websites are reachable and if they are not,
it attempts to determine whether access to them is blocked through DNS
tampering, TCP/IP blocking or by a transparent HTTP proxy.

OONI’s Web Connectivity test is designed to examine URLs contained in
specific [lists](https://github.com/citizenlab/test-lists) (“test
lists”) for censorship. By default, Web Connectivity examines the
“[global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)”,
which includes a wide range of internationally relevant websites, most
of which are in English. These websites fall under [30 categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv),
ranging from news media, file sharing and culture, to provocative or
objectionable categories, like pornography, political criticism, and
hate speech.

These categories help ensure that a wide range of different types of
websites are tested. The main reason why objectionable categories (such
as “pornography” and “hate speech”) are included for testing is because
they are more likely to be blocked due to their nature, enabling the
development of heuristics for detecting censorship elsewhere within a
country.

In addition to testing the URLs included in the global test list, Web
Connectivity is also designed to examine a test list which is
specifically created for the country that the user is running OONI Probe
from, if such a list exists. Unlike the global test list,
[country-specific test lists](https://github.com/citizenlab/test-lists/tree/master/lists)
include websites that are relevant and commonly accessed within specific
countries, and such websites are often in local languages. Similarly to
the global test list, country-specific test lists include websites that
fall under the same set of [30 categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv),
as explained previously. All test lists are hosted by the [Citizen Lab](https://citizenlab.ca/) on
[GitHub](https://github.com/citizenlab/test-lists), supporting OONI
and other network measurement projects in the creation and maintenance
of lists of URLs to test for censorship.

As part of this study, OONI’s Web Connectivity test examined the
accessibility of URLs included in both the “[global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)”
(containing 1,109 URLs) and in the “[Cuban test list](https://github.com/citizenlab/test-lists/blob/master/lists/cu.csv)”
(containing 349 URLs). In total, Web Connectivity tests **measured 1,458
URLs** for censorship across eight local vantage points in Cuba between
29th May 2017 to 10th June 2017.

OONI’s Web Connectivity test is designed to perform the following:

* Resolver identification

* DNS lookup

* TCP connect

* HTTP GET request

By default, this test performs the above (excluding the first step,
which is performed only over the network of the user) both over a
control server and over the network of the user. If the results from
both networks match, then there is no clear sign of network
interference; but if the results are different, the websites that the
user is testing are likely censored.

Further information is provided below, explaining how each step
performed under the web connectivity test works.

**1. Resolver identification**

The domain name system (DNS) is what is responsible for transforming a
host name (e.g. torproject.org) into an IP address (e.g. 38.229.72.16).
Internet Service Providers (ISPs), amongst others, run DNS resolvers
which map IP addresses to hostnames. In some circumstances though, ISPs
map the requested host names to the wrong IP addresses, which is a form
of tampering.

As a first step, the Web Connectivity test attempts to identify which
DNS resolver is being used by the user. It does so by performing a DNS
query to special domains (such as whoami.akamai.com) which will disclose
the IP address of the resolver.

**2. DNS lookup**

Once the Web Connectivity test has identified the DNS resolver of the
user, it then attempts to identify which addresses are mapped to the
tested host names by the resolver. It does so by performing a DNS
lookup, which asks the resolver to disclose which IP addresses are
mapped to the tested host names, as well as which other host names are
linked to the tested host names under DNS queries.

**3. TCP connect**

The Web Connectivity test will then try to connect to the tested
websites by attempting to establish a TCP session on port 80 (or port
443 for URLs that begin with HTTPS) for the list of IP addresses that
were identified in the previous step (DNS lookup).

**4. HTTP GET request**

As the Web Connectivity test connects to tested websites (through the
previous step), it sends requests through the HTTP protocol to the
servers which are hosting those websites. A server normally responds to
an HTTP GET request with the content of the webpage that is requested.

**Comparison of results: Identifying censorship**

Once the above steps of the web connectivity test are performed *both*
over a control server and over the network of the user, the collected
results are then compared with the aim of identifying whether and how
tested websites are tampered with. If the compared results do *not*
match, then there is a sign of network interference.

Below are the conditions under which the following types of blocking are
identified:

* **DNS blocking:** If the DNS responses (such as the IP addresses mapped to host names) do *not* match.

* **TCP/IP blocking:** If a TCP session to connect to websites was *not* established over the network of the user.

* **HTTP blocking:** If the HTTP request over the user’s network failed, or the HTTP status codes don’t match, or all of the
    following apply:

    * The body length of compared websites (over the control server
    and the network of the user) differs by some percentage;

    * The HTTP headers names do not match;

    * The HTML title tags do not match.

It’s important to note, however, that DNS resolvers, such as Google or a
local ISP, often provide users with IP addresses that are closest to
them geographically. Often this is *not* done with the intent of network
tampering, but merely for the purpose of providing users with localized
content or faster access to websites. As a result, some false positives
might arise in OONI measurements. Other false positives might occur when
tested websites serve different content depending on the country that
the user is connecting from, or in the cases when websites return
failures even though they are not tampered with (e.g. because they are
overloaded).

**HTTP Invalid Request Line**

This test tries to detect the presence of network components
(“middlebox”) which could be responsible for censorship and/or traffic
manipulation.

Instead of sending a normal HTTP request, this test sends an invalid
HTTP request line - containing an invalid HTTP version number, an
invalid field count and a huge request method – to an echo service
listening on the standard HTTP port. An echo service is a very useful
debugging and measurement tool, which simply sends back to the
originating source any data it receives. If a middle box is not present
in the network between the user and an echo service, then the echo
service will send the invalid HTTP request line back to the user,
exactly as it received it. In such cases, there is no visible traffic
manipulation in the tested network.

If, however, a middle box is present in the tested network, the invalid
HTTP request line will be intercepted by the middle box and this may
trigger an error and that will subsequently be sent back to OONI’s
server. Such errors indicate that software for traffic manipulation is
likely placed in the tested network, though it’s not always clear what
that software is. In some cases though, censorship and/or surveillance
vendors can be identified through the error messages in the received
HTTP response. Based on this technique, OONI has previously
[detected](https://explorer.ooni.org/highlights/) the use
of BlueCoat, Squid and Privoxy proxy technologies in networks across
multiple countries around the world.

It’s important though to note that a false negative could potentially
occur in the hypothetical instance that ISPs are using highly
sophisticated censorship and/or surveillance software that is
specifically designed to not trigger errors when receiving invalid HTTP
request lines like the ones of this test. Furthermore, the presence of a
middle box is not necessarily indicative of traffic manipulation, as
they are often used in networks for caching purposes.

**HTTP Header Field Manipulation**

This test also tries to detect the presence of network components
(“middlebox”) which could be responsible for censorship and/or traffic
manipulation.

HTTP is a protocol which transfers or exchanges data across the
internet. It does so by handling a client’s request to connect to a
server, and a server’s response to a client’s request. Every time a user
connects to a server, the user (client) sends a request through the HTTP
protocol to that server. Such requests include “HTTP headers”, which
transmit various types of information, including the user’s device
operating system and the type of browser that is being used. If Firefox
is used on Windows, for example, the “user agent header” in the HTTP
request will tell the server that a Firefox browser is being used on a
Windows operating system.

This test emulates an HTTP request towards a server, but sends HTTP
headers that have variations in capitalization. In other words, this
test sends HTTP requests which include valid, but non-canonical HTTP
headers. Such requests are sent to a backend control server which sends
back any data it receives. If OONI receives the HTTP headers exactly as
they were sent, then there is no visible presence of a “middle box” in
the network that could be responsible for censorship, surveillance
and/or traffic manipulation. If, however, such software is present in
the tested network, it will likely process and forward the request, most
likely normalizing the headers capitalization and/or add extra headers.

Depending on whether the HTTP headers that are sent and received from a
backend control server are the same or not, OONI is able to evaluate
whether software – which could be responsible for traffic manipulation –
is present in the tested network.

False negatives, however, could potentially occur in the hypothetical
instance that ISPs are using highly sophisticated software that is
specifically designed to not interfere with HTTP headers when it
receives them. Furthermore, the presence of a middle box is not
necessarily indicative of traffic manipulation, as they are often used
in networks for caching purposes.

**Vanilla Tor**

This test examines the reachability of the [Tor network](https://www.torproject.org/), which is designed for online
anonymity and censorship circumvention.

The Vanilla Tor test attempts to start a connection to the Tor network.
If the test successfully bootstraps a connection within a predefined
amount of seconds (300 by default), then Tor is considered to be
reachable from the vantage point of the user. But if the test does not
manage to establish a connection, then the Tor network is likely blocked
within the tested network.

**WhatsApp test**

This test is designed to examine the reachability of both WhatsApp’s app
and the WhatsApp web version within a tested network.

OONI’s WhatsApp test attempts to perform an HTTP GET request, TCP
connection and DNS lookup to WhatsApp’s endpoints, registration service
and web version over the vantage point of the user. Based on this
methodology, WhatsApp’s *app* is likely blocked if any of the following
apply:

* TCP connections to WhatsApp’s endpoints fail;

* TCP connections to WhatsApp’s registration service fail;

* DNS lookups resolve to IP addresses that are *not* allocated to
WhatsApp;

* HTTP requests to WhatsApp’s registration service do *not* send back
a response to OONI’s servers.

WhatsApp’s *web interface* is likely blocked if any of the following
apply:

* TCP connections to web.whatsapp.com fail;

* DNS lookup illustrates that a different IP addresses has been
allocated to web.whatsapp.com;

* HTTP requests to web.whatsapp.com do *not* send back a consistent
response to OONI’s servers.

**Facebook Messenger test**

This test is designed to examine the reachability of Facebook Messenger
within a tested network.

OONI’s Facebook Messenger test attempts to perform a TCP connection and
DNS lookup to Facebook’s endpoints over the vantage point of the user.
Based on this methodology, Facebook Messenger is likely blocked if one
or both of the following apply:

* TCP connections to Facebook’s endpoints fail;

* DNS lookups to domains associated to Facebook do not resolve to IP
addresses allocated to Facebook.

**Telegram test**

This test is designed to examine the reachability of Telegram’s app and
web version within a tested network.

More specifically, this test attempts to perform an HTTP POST request,
and establish a TCP connection to Telegram’s access points (DCs), as
well as an HTTP GET request to Telegram’s web version (web.telegram.org)
over the vantage point of the user. The test is triggered as blocking
when connections to *all* access points defined in the
[test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/telegram.py#L16-L22)
fail.

Based on this methodology Telegram’s *app* is likely blocked if any of
the following apply:

* TCP connections to all the tested Telegram access points fail;

* HTTP POST requests to Telegram’s access points do *not* send back a
response to OONI’s servers.

Telegram’s *web version* is likely blocked if the following applies:

* HTTP(S) GET requests to web.telegram.org do *not* send back a
consistent response to OONI’s servers.

**Network Diagnostic Test (NDT)**

NDT (Network Diagnostic Test) is designed to measure the *speed* and
*performance* of tested networks.

This network performance test was originally developed by The Internet2
Project and is currently maintained by [Measurement Lab (M-Lab)](https://www.measurementlab.net/tools/ndt/). NDT is designed to
measure the speed and performance of networks by connecting to M-Lab
servers close to the user, and by subsequently uploading and downloading
random data. In doing so, NDT collects TCP/IP low level information that
is useful to examining and characterizing the quality of the network
path between the user and the mLab server.

OONI utilizes an [implementation of NDT](https://github.com/measurement-kit/measurement-kit/tree/master/src/libmeasurement_kit/ndt)
for
[measurement-kit](https://github.com/measurement-kit/measurement-kit),
which is a network measurement library for running both desktop and
mobile network measurement tests. This NDT implementation is included as
a test that can be run via OONI’s mobile apps. Running NDT can be useful
as the type of information that it collects can potentially be used to
examine cases of throttling.

**HTTP Host**

This test attempts to:

* examine whether the domain names of websites are blocked;

* detect the presence of “middleboxes” (software which could be used
for censorship and/or traffic manipulation) in tested networks;

* assess which censorship circumvention techniques are capable of
bypassing the censorship implemented by the “middle box”.

Every time you connect to a server, you (the client) send a request
through the HTTP protocol to that server. Such requests include “HTTP
headers”, some of which (the “Host header”) include information about
the specific domain that you want to connect to. When you connect to
torproject.org, for example, the host header of your HTTP request
includes information which communicates that you want to connect to that
domain.

This test implements a series of techniques which help it evade getting
detected from censors and then uses a list of domain names (such as
bbc.co.uk) to connect to an OONI backend control server, which sends the
host headers of those domain names back to us. If a “middle box” is
detected between the network path of the probe and the OONI backend
control server, its fingerprint might be included in the JSON data that
we receive from the backend control server. Such data also informs us if
the tested domain names are blocked or not, as well as how the censor
tried to fingerprint the censorship of those domains. This can sometimes
lead to the identification of the type of infrastructure being used to
implement censorship.

**Note:** The presence of a middle box is not necessarily indicative of
censorship and/or traffic manipulation, as they are often used in
networks for caching purposes.

**Meek Fronted Requests**

This test examines whether the domains used by Meek (a type of [Tor bridge](https://bridges.torproject.org/)) work in tested networks.

Meek is a [pluggable transport](https://www.torproject.org/docs/pluggable-transports) which
uses non-blocked domains, such as google.com, awsstatic.com (Amazon
cloud infrastructure) and ajax.aspnetcdn.com (Microsoft azure cloud
infrastructure), to proxy its users over
[Tor](https://www.torproject.org/) to blocked websites, while hiding
both the fact that they are connecting to such websites and how they are
connecting to them. As such, Meek is useful for not only connecting to
websites that are blocked, but for also hiding which websites you are
connecting to.

Below is a simplified explanation of how this works:

\[user\] → \[[https://www.google.com\]](https://www.google.com) →
\[Meek hosted on the cloud\] → \[Tor\] → \[blocked- website\]

The user will receive a response (access to a blocked website, for
example) from cloud-fronted domains, such as google.com, through the
following way:

\[blocked-website\] → \[Tor\] → Meek hosted on the cloud\] →
\[[https://www.google.com\]](https://www.google.com/) → \[user\]

In short, this test does an encrypted connection to cloud-fronted
domains over HTTPS and examines whether it can connect to them or not.
As such, this test enables users to check whether Meek enables the
circumvention of censorship in an automated way.

**Data analysis**

Through its [data pipeline](https://github.com/TheTorProject/ooni-pipeline), OONI
processes all network measurements that it collects, including the
following types of data:

**Country code**

OONI by default collects the code which corresponds to the country from
which the user is running OONI Probe tests from, by automatically
searching for it based on the user’s IP address through the [MaxMind GeoIP database](https://www.maxmind.com/en/home). The collection of
country codes is an important part of OONI’s research, as it enables
OONI to map out global network measurements and to identify where
network interferences take place.

**Autonomous System Number (ASN)**

OONI by default collects the Autonomous System Number (ASN) which
corresponds to the network that a user is running OONI Probe tests from.
The collection of the ASN is useful to OONI’s research because it
reveals the specific network provider (such as Vodafone) of a user. Such
information can increase transparency in regards to which network
providers are implementing censorship or other forms of network
interference.

**Date and time of measurements**

OONI by default collects the time and date of when tests were run. This
information helps OONI evaluate when network interferences occur and to
compare them across time.

**IP addresses and other information**

OONI does *not* deliberately collect or store users’ IP addresses. In
fact, OONI takes measures to remove users’ IP addresses from the
collected measurements, to protect its users from [potential risks](https://ooni.org/about/risks/).

However, OONI might *unintentionally* collect users’ IP addresses and
other potentially personally-identifiable information, if such
information is included in the HTTP headers or other metadata of
measurements. This, for example, can occur if the tested websites
include tracking technologies or custom content based on a user’s
network location.

**Network measurements**

The types of network measurements that OONI collects depend on the types
of tests that are run. Specifications about each OONI test can be viewed
through its [git repository](https://github.com/TheTorProject/ooni-spec/tree/master/test-specs),
and details about what collected network measurements entail can be
viewed through [OONI Explorer](https://explorer.ooni.org/world/) or [OONI’s measurement API](https://api.ooni.io/).

OONI processes the above types of data with the aim of deriving meaning
from the collected measurements and, specifically, in an attempt to
answer the following types of questions:

* Which types of OONI tests were run?

* In which countries were those tests run?

* In which networks were those tests run?

* When were tests run?

* What types of network interference occurred?

* In which countries did network interference occur?

* In which networks did network interference occur?

* When did network interference occur?

* How did network interference occur?

To answer such questions, OONI’s pipeline is designed to process data
which is automatically sent to OONI’s measurement collector by default.
The initial processing of network measurements enables the following:

* Attributing measurements to a specific country.

* Attributing measurements to a specific network within a country.

* Distinguishing measurements based on the specific tests that were
run for their collection.

* Distinguishing between “normal” and “anomalous” measurements (the
latter indicating that a form of network tampering is likely present).

* Identifying the type of network interference based on a set of
heuristics for DNS tampering, TCP/IP blocking, and HTTP blocking.

* Identifying block pages based on a set of heuristics for
HTTP blocking.

* Identifying the presence of “middleboxes” within tested networks.

However, false positives emerge within the processed data due to a
number of reasons. As explained in the previous section, DNS resolvers
(operated by Google or a local ISP) often provide users with IP
addresses that are closest to them geographically. While this may appear
to be a case of DNS tampering, it is actually done with the intention of
providing users with faster access to websites. Similarly, false
positives may emerge when tested websites serve different content
depending on the country that the user is connecting from, or in the
cases when websites return failures even though they are not tampered
with.

Furthermore, measurements indicating HTTP or TCP/IP blocking might
actually be due to temporary HTTP or TCP/IP failures, and may not
conclusively be a sign of network interference. It is therefore
important to test the same sets of websites across time and to
cross-correlate data, prior to reaching a conclusion on whether websites
are in fact being blocked.

Since instances of internet censorship differ from country to country
and sometimes even from network to network, it is quite challenging to
accurately identify them. OONI uses a series of heuristics to try to
examine whether a measurement differs from the expected control, but
these heuristics can often result in false positives (as explained in
the previous section). As a result, **OONI only confirms instances of
blocking when block pages are detected.**

OONI’s methodology for detecting the presence of “middleboxes” - systems
that could be responsible for censorship, surveillance and traffic
manipulation - can also present false negatives, if ISPs are using
highly sophisticated software that is specifically designed to *not*
interfere with HTTP headers when it receives them, or to *not* trigger
error messages when receiving invalid HTTP request lines. It remains
unclear though if such software is being used. Moreover, it’s important
to note that the presence of a middle box is not necessarily indicative
of internet censorship, as such systems are often used in networks for
caching purposes.

OONI continues to develop its data analysis heuristics to identify
internet censorship events faster and more accurately.

### Custom tests

As part of our testing in Cuba, we also wrote and ran various custom
network measurement tests, in addition to running
[OONI Probe](https://github.com/TheTorProject/ooni-probe). These
included traceroutes, DNS queries, and network scans, as well as custom
tests measuring the latency to blocked sites and other follow-up tests
in response to OONI Probe findings.

The main test that yielded interested findings (included under the
“Findings” section of this report) was a custom test that we wrote to
measure the latency to blocked sites. This test, in particular, is
designed to measure the latency when connecting to blocked sites. If the
latency is low, we can infer that the equipment used to implement the
censorship is geographically close to the user running this test. If,
however, the latency when connecting to blocked sites is high, then the
censorship equipment is more likely located in a further geographical
location.

## Findings

Upon analysis of the collected [network measurements](https://explorer.ooni.org/country/CU), we can
confirm the **blocking of 41 websites** in Cuba. Deep Packet Inspection
(DPI) technology, which appears to be located in Havana based on latency
measurements, was found to reset connections to those sites and serve
(blank) block pages. Only the HTTP version of those sites was blocked,
potentially enabling users to circumvent the censorship by merely
accessing them over HTTPS.

Most of the blocked sites express criticism towards Cuba’s government,
either directly or indirectly. While various web proxies were found to
be blocked, it’s worth noting that the [Tor network](https://www.torproject.org/) was found to be
[accessible](https://explorer.ooni.org/measurement/20170607T175300Z_AS27725_XXfB14TYx5szrWoFiokwjWdQZIJQIuEtGWpkfaojBEPdiNsc3u)
across Cuba. Similarly, popular communications tools, like [Facebook Messenger](https://explorer.ooni.org/measurement/20170607T175309Z_AS27725_a4wPIMQ7NwY7hXozjWQ9f9gSNDRzpN9kb3XLsjzW1GFbsfcMGz)
and
[WhatsApp](https://explorer.ooni.org/measurement/20170607T175300Z_AS27725_sscXF9fCtjN7lUqAy9WewtB7HxS3dBWVJcjmuHYvHhreJosqap),
were found to be accessible. Skype was the only popular communications
tool that we found to be blocked.

Chinese vendor Huawei was found to be supporting Cuba’s internet
infrastructure, but it remains unclear if it is implementing internet
censorship in the country. What is clear though is that Google appears
to be blocking access to Google App Engine from Cuba.

The sections below provide more information pertaining to the censorship
events that we found in Cuba as part of this study.

### Blocked websites

News outlets and sites expressing political criticism towards Cuba’s
government were predominantly found to be blocked as part of this study.
Upon analysis of [network measurement data](https://explorer.ooni.org/country/CU) collected
through [OONI’s Web Connectivity test](https://ooni.org/nettest/web-connectivity/) (performed
across eight vantage points in Havana, Santa Clara, and Santiago de
Cuba), we were able to identify and confirm the **blocking of 41
websites**. We also found that these sites are blocked by Deep Packet
Inspection (DPI) technology which reset connections and served (blank)
block pages. It’s worth emphasizing that only the HTTP version of these
sites was found to be blocked. While, in theory, users could potentially
circumvent the censorship over HTTPS, many of the sites found to be
blocked do not support HTTPS.

Below we illustrate the types of sites we found to be blocked in
Cuba as part of this study.

{{< imgcap title="Source: OONI data" src="/post/cuba-internet-censorship-2017/cu-13.png" src2x="/post/cuba-internet-censorship-2017/cu-13@2x.png" >}}

Through the above graph, it is evident that news outlets and sites
expressing political criticism were found to be blocked the most.

Below we include a table which lists all 41 sites that we confirmed to
be blocked in Cuba during the testing period. In the third column of the
table, we list the amount of times that we detected block pages for each
site. It’s worth noting that all of the following sites presented block
pages every single time we tested them across eight vantage points in
Havana, Santa Clara, and Santiago de Cuba.

| Blocked websites                          | Types of sites                    | Times found blocked |
|-------------------------------------------|-----------------------------------|---------------------|
| `http://anon.inf.tu-dresden.de`             | Anonymity and circumvention tools | 11                  |
| `http://anonymouse.org`                     | Anonymity and circumvention tools | 10                  |
| `http://www.inetprivacy.com`                | Anonymity and circumvention tools | 8                   |
| `http://www.megaproxy.com`                  | Anonymity and circumvention tools | 1                   |
| `http://www.callserve.com`                  | Communication Tools               | 7                   |
| `http://www.pc2call.com`                    | Communication Tools               | 9                   |
| `http://www.vitral.org`                     | Culture                           | 14                  |
| `http://www.cubanuestra.nu`                 | Culture                           | 21                  |
| `http://www.cubasindical.org`               | Human Rights Issues               | 19                  |
| `http://www.damasdeblanco.com`              | Human Rights Issues               | 16                  |
| `http://www.hermanos.org`                   | Human Rights Issues               | 21                  |
| `http://www.hispanocubana.org`              | Human Rights Issues               | 20                  |
| `http://www.sigloxxi.org`                   | Human Rights Issues               | 17                  |
| `http://freedomhouse.org/country/cuba`      | Human Rights Issues               | 12                  |
| `http://www.lanuevacuba.com`                | News Media                        | 18                  |
| `http://martinoticias.com`                  | News Media                        | 18                  |
| `http://miscelaneasdecuba.net`              | News Media                        | 20                  |
| `http://www.cartadecuba.org`                | News Media                        | 19                  |
| `http://www.cubaencuentro.com`              | News Media                        | 42                  |
| `http://www.cubafreepress.org`              | News Media                        | 21                  |
| `http://www.cubalibredigital.com`           | News Media                        | 19                  |
| `http://www.cubamatinal.com`                | News Media                        | 18                  |
| `http://www.cubaliberal.org`                | News Media                        | 21                  |
| `http://www.netforcuba.org`                 | News Media                        | 20                  |
| `http://www.nuevoaccion.com`                | News Media                        | 18                  |
| `http://www.payolibre.com`                  | News Media                        | 18                  |
| `http://www.voanews.com`                    | News Media                        | 19                  |
| `http://www.14ymedio.com/`                  | News Media                        | 17                  |
| `http://conexioncubana.net`                 | Political Criticism               | 20                  |
| `http://cubanology.com`                     | Political Criticism               | 19                  |
| `http://pscuba.org`                         | Political Criticism               | 19                  |
| `http://www.agendacuba.org`                 | Political Criticism               | 21                  |
| `http://www.asambleasociedadcivilcuba.info` | Political Criticism               | 17                  |
| `http://www.cubademocraciayvida.org`        | Political Criticism               | 18                  |
| `http://www.cubaeuropa.com`                 | Political Criticism               | 20                  |
| `http://www.corriente.org`                  | Political Criticism               | 20                  |
| `http://www.directorio.org`                 | Political Criticism               | 18                  |
| `http://www.therealcuba.com/`               | Political Criticism               | 16                  |
| `http://www.solidaridadconcuba.com`         | Political Criticism               | 17                  |
| `http://www.idealpress.com`                 | Religion                          | 18                  |
| `http://www.alpha66.org`                    | Terrorism and Militants           | 19                  |
 
The following sections provide further information pertaining to the
blocking of sites, as found through this study.

#### News Media

Fourteen news websites were confirmed to be blocked in Cuba during the
testing period, as illustrated through the table below.

| Blocked media websites          | Amount of block pages detected |
|---------------------------------|--------------------------------|
| http://martinoticias.com        | 18                             |
| http://miscelaneasdecuba.net    | 20                             |
| http://www.cartadecuba.org      | 19                             |
| http://www.cubaencuentro.com    | 42                             |
| http://www.cubafreepress.org    | 21                             |
| http://www.cubalibredigital.com | 19                             |
| http://www.cubamatinal.com      | 18                             |
| http://www.cubaliberal.org      | 21                             |
| http://www.netforcuba.org       | 20                             |
| http://www.nuevoaccion.com      | 18                             |
| http://www.payolibre.com        | 18                             |
| http://www.voanews.com          | 19                             |
| http://www.14ymedio.com/        | 17                             |
| http://www.lanuevacuba.com      | 18                             |

Most of the above news websites express political criticism towards
Cuba’s government, possibly explaining the motivation behind their
censorship.

[Radio and TV Marti](https://www.martinoticias.com/), for example, is
an independent news outlet which aims to “provide the Cuban people with
news and information without the censorship of the Cuban government”. As
part of its reporting on Cuba, Radio and TV Marti frequently [covers human rights issues](https://www.martinoticias.com/z/248), including
the arrest of activists. Similarly, [Cuba Encuentro](http://www.cubaencuentro.com/) is a news outlet that,
amongst other topics, [reports on human rights issues](http://www.cubaencuentro.com/derechos-humanos) in Cuba, with a
focus on LGBT rights and women’s rights. In addition to news articles,
Cuba Encuentro
[publishes](http://www.cubaencuentro.com/derechos-humanos) documents,
legislation, opinion articles, and videos on issues that are more
relevant to women and Cuba’s LGBT community. Along with [Radio and TV Marti](https://explorer.ooni.org/measurement/20170601T235618Z_AS27725_SpZcfWCu3e17GPv8jpXSOIQucnRNNPolNnG2OODcGQC8H70cbe?input=http:%2F%2Fmartinoticias.com),
[Cuba Encuentro was found to be blocked](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Fwww.cubaencuentro.com%2Fes%2Fblogs%2Fefory-atocha)
in Cuba as well.

Cuba’s first independent online news outlet (created in 1997), [La Nueva Cuba](http://www.lanuevacuba.com), was also found to be
[blocked](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Fwww.lanuevacuba.com).
This site is no longer operational, and (when accessed outside of Cuba)
its domain redirects to “Havana City Hotels”. The image below, taken
from the [Internet Archive](https://archive.org/), shows what La Nueva
Cuba used to look like, when it operated as a news site.

![La Nueva Cuba](/post/cuba-internet-censorship-2017/cu-14.png)

Source: Internet Archive, La Nueva Cuba, https://web.archive.org/web/20050831051647/http://www.lanuevacuba.com:80/master.htm

La Nueva Cuba used to feature articles covering human rights issues,
such as violence against political dissidents, possibly explaining why
it was ultimately shut down.

![La Nueva Cuba articles](/post/cuba-internet-censorship-2017/cu-15.png)

Source: Internet Archive, La Nueva Cuba,https://web.archive.org/web/20050831211614/http://www.lanuevacuba.com:80/oposicion-debate.htm

[Yoani Sanchez](https://www.forbes.com/sites/tiffanypham/2014/11/30/how-she-did-it-yoani-sanchez-time-100-most-influential-person-launches-cuban-news-outlet-14ymedio/#608feccd4d5b),
a Cuban blogger who received international fame for her [critical portrayal of life in Cuba](https://generacionyen.wordpress.com/) under
its current government, co-founded the next independent Cuban news
outlet: [14ymedio](http://www.14ymedio.com/). In light of limited
internet availability, [Cuban 14ymedio journalists collaborate with a small team outside of Cuba](https://www.forbes.com/sites/tiffanypham/2014/11/30/how-she-did-it-yoani-sanchez-time-100-most-influential-person-launches-cuban-news-outlet-14ymedio/#608feccd4d5b),
who upload their articles and help coordinate social media efforts. This
news site though was also found to be
[blocked](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Fwww.14ymedio.com%2F)
in Cuba.

[Cuba Libre Digital](http://www.cubalibredigital.com/), run by the
Cuban diaspora in Brazil, is another independent news outlet
[blocked](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Fwww.cubalibredigital.com)
in the country. [PayoLibre](http://payolibre.com/index.php), which has
[published articles in defense of political dissidents](http://www.payolibre.com/PRESO-%20Antonio%20Diaz%20Sanchez.htm),
was found to be [censored](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Fwww.payolibre.com).
Netforcuba.org, also [blocked](https://explorer.ooni.org/measurement/20170601T235618Z_AS27725_SpZcfWCu3e17GPv8jpXSOIQucnRNNPolNnG2OODcGQC8H70cbe?input=http:%2F%2Fwww.netforcuba.org),
currently points to a YouTube page which includes a video report titled
“Cuba, false paradise”.

Limited press freedom in Cuba led to the creation of the [Cuba Free Press Project](http://cubafreepress.org/). This initiative [aims to support journalists and independent writers](http://cubafreepress.org/missionsp.html), providing them a
platform for free expression. This was also amongst the sites found to
be
[blocked](https://explorer.ooni.org/measurement/20170723T204926Z_AS27725_1xHuKtaN92RjPXcI7xnrm9SI1OrwZvvWKUK8filfQt94oyJVIp?input=http:%2F%2Fwww.cubafreepress.org).
Quite similarly, news site [Nuevo Accion](http://nuevoaccion.com/)
supports independent journalism and welcomes opinion pieces from the
public. The only international news site that we found to be
[blocked](https://explorer.ooni.org/measurement/20170607T171158Z_AS27725_ObqVLKTKK2AvLijpKhRAB6KhB1sNwlBveJNL85SqFOxL7opot3?input=http:%2F%2Fwww.voanews.com)
in Cuba was [Voice of America (VOA)](https://www.voanews.com/), which
is U.S. government-funded.

[ETECSA](http://www.etecsa.cu/) appears to continue to censor sites
even once they’re no longer operational. Cubamatinal.com,
cubaliberal.org, and miscelaneasdecuba.net were all found to be
[blocked](https://explorer.ooni.org/country/CU), even
though these sites are down. We also found cartadecuba.org to be
[blocked](https://explorer.ooni.org/measurement/20170603T183359Z_AS27725_AdrXzhQiFf9ULtvkQPpLGtBu2Lx4xR8LNT6bi6HugbDwegFELV?input=http:%2F%2Fwww.cartadecuba.org),
despite the site no longer being operational.

We only found the HTTP version of these fourteen media sites to be
blocked. Out of all of them, only [Cuba Encuentro](https://www.cubaencuentro.com/) and [Voice of America (VOA)](https://www.voanews.com/) currently support HTTPS, enabling
their readers to circumvent the censorship.

#### Political Criticism

Eleven other sites expressing political criticism towards Cuba’s
government were [found to be blocked](https://explorer.ooni.org/country/CU), as
illustrated through the table below.

| Blocked sites expressing political criticism | Amount of block pages detected |
|----------------------------------------------|--------------------------------|
| http://conexioncubana.net                    | 20                             |
| http://cubanology.com                        | 19                             |
| http://pscuba.org                            | 19                             |
| http://www.agendacuba.org                    | 21                             |
| http://www.asambleasociedadcivilcuba.info    | 17                             |
| http://www.cubademocraciayvida.org           | 18                             |
| http://www.cubaeuropa.com                    | 20                             |
| http://www.corriente.org                     | 20                             |
| http://www.directorio.org                    | 18                             |
| http://www.therealcuba.com/                  | 16                             |
| http://www.solidaridadconcuba.com            | 17                             |

[The Real Cuba](http://www.therealcuba.com/), a blog that expresses
intense political criticism, portrays Cuba within the context of
oppression. It criticizes Cuba’s
[healthcare](http://www.therealcuba.com/?page_id=77) and
[education](http://www.therealcuba.com/?page_id=62) system, and
describes [racism against Afro-Cubans](http://www.therealcuba.com/?page_id=279). It argues that,
under the Castro regime, Cuba has [more poverty than ever before](http://www.therealcuba.com/?page_id=273), heavily criticising
Castro’s [excessive wealth](http://www.therealcuba.com/?page_id=74).
Overall, this blog expresses [heavy criticism towards the Castro government](http://www.therealcuba.com/?page_id=103), and we found it
to be
[blocked](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Fwww.therealcuba.com%2F)
across Cuba.

[Conexion Cubana](http://www.conexioncubana.net/) is a Cuban online
forum, providing a platform for [political discussions](http://www.conexioncubana.net/foro/guerra) (amongst other
discussions), which we also found to be
[blocked](https://explorer.ooni.org/measurement/20170601T235618Z_AS27725_SpZcfWCu3e17GPv8jpXSOIQucnRNNPolNnG2OODcGQC8H70cbe?input=http:%2F%2Fconexioncubana.net).

[Cuba Democracia y Vida](http://cubademocraciayvida.org/) was created
by Guillermo Milan Reyes, a Cuban political dissident living in exile in
Sweden. This site
[aims](http://www.cubademocraciayvida.org/web/article.asp?artID=33695)
to provide “a voice for all those who fight in a peaceful way, for
democracy in Cuba, free from the dictatorship of Fidel Castro and for a
dignified life without poverty for all Cuban citizens”. To this end, it
encourages Cubans to submit articles that cover news about important
events, testimonies of life under the Castro regime, and reports on
human rights violations. We found this site to be
[blocked](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Fwww.cubademocraciayvida.org)
in Cuba.

The [Cuban Democratic Directory](http://www.directorio.org/) is an
organization, based in the U.S., that
[aims](http://www.directorio.org/aboutdirectorio) to promote democracy
in Cuba. To this end, it provides humanitarian and material aid to civil
society organizations that resist Castro’s regime. It also facilitates
the exchange of information and international solidarity with the civic
resistance in Cuba. According to the Cuban Democratic Directory, they
are [committed](http://www.directorio.org/aboutdirectorio) to
promoting freedom and the respect for human rights in Cuba. Their
[site](http://www.directorio.org/) was amongst those that we found to
be
[blocked](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Fwww.directorio.org)
in the country. Quite similarly, [Solidaridad Espanyola con Cuba](http://www.solidaridadconcuba.com/), also
[blocked](https://explorer.ooni.org/measurement/20170603T183359Z_AS27725_AdrXzhQiFf9ULtvkQPpLGtBu2Lx4xR8LNT6bi6HugbDwegFELV?input=http:%2F%2Fwww.solidaridadconcuba.com),
is run by Spaniards who
[aim](http://www.solidaridadconcuba.com/quienes/quienes.asp) to
support a peaceful transition to democracy in Cuba.

Cubanology.com, pscuba.org, agendacuba.org,
asambleasociedadcivilcuba.info, cubaeuropa.com, and corriente.org are no
longer operational. Yet, they were amongst the sites that we found to be
[blocked](https://explorer.ooni.org/country/CU) in Cuba
during the testing period of this study.

#### Human Rights Issues

Six sites covering human rights issues in Cuba were found to be
[blocked](https://explorer.ooni.org/country/CU) during the
testing period.

| Blocked human rights sites           | Amount of block pages detected |
|--------------------------------------|--------------------------------|
| http://www.cubasindical.org          | 19                             |
| http://www.damasdeblanco.com         | 16                             |
| http://www.hermanos.org              | 21                             |
| http://www.hispanocubana.org         | 20                             |
| http://www.sigloxxi.org              | 17                             |
| http://freedomhouse.org/country/cuba | 12                             |

[Freedom House](https://freedomhouse.org/) publishes annual reports on
civil liberties, press freedom and internet freedom for most countries
around the world, including Cuba. Its [2017 report on Cuba](https://freedomhouse.org/report/freedom-world/2017/cuba)
portrayed the country as “Not Free”. The research group attributed this
status to Cuba by measuring the protection of political rights and civil
liberties on a scale of 1-7, where 1 is “Most Free” and 7 is “Least
Free”. Overall, the country received a score of 15/100, where 0 is
“Least Free” and 100 is “Most Free”, placing it amongst the “Least Free”
countries in the world.

![Freedom House Cuba Report 2017](/post/cuba-internet-censorship-2017/cu-16.png)

Source: Freedom House, Cuba 2017 report, https://freedomhouse.org/report/freedom-world/2017/cuba

Freedom House also regularly publishes press releases which cover human
rights issues in Cuba, such as the [crackdown on human rights defenders](https://freedomhouse.org/article/cuba-arrests-target-human-rights-defenders).
As part of our study, we found Freedom House’s domain - including its
reports on Cuba - to be
[blocked](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Ffreedomhouse.org%2Fcountry%2Fcuba)
in the country.

But local human rights sites were found to be blocked as well. [Las Damas de Blanco](http://www.damasdeblanco.com/) (“Ladies in White”) is
an opposition movement founded in Cuba by the wives and other female
relatives of jailed dissidents. This movement emerged following the
[Black Spring](https://cpj.org/blog/2009/03/the-black-spring-of-2003-a-former-cuban-prisoner-s.php)
in 2003, when the government imprisoned 75 dissidents (including
journalists, librarians, and human rights activists) on the basis that
they were acting as agents of the United States. Ever since, the wives
and female relatives of imprisoned dissidents have been [protesting peacefully](https://www.foreignaffairs.com/gallerys/2016-05-03/cubas-damas-de-blanco)
on the streets, dressed in white clothing and carrying flowers. They are
united by a [common goal](http://www.damasdeblanco.com/actividades/actividades.asp): to
march peacefully demanding the freedom of their husbands, parents,
children, brothers, and nephews.

![Las Damas de Blanco](/post/cuba-internet-censorship-2017/cu-17.png)

Source: Las Damas de Blanco, http://www.damasdeblanco.com/actividades/actividades.asp

Despite protesting peacefully, they have been subjected to harassment.
Recently, for example, it was
[reported](http://www.huffingtonpost.com/yoani-sanchez/ladies-in-white-attacked_b_504817.html)
that they were attacked by a government sanctioned mob in Havana. Their
[site](http://www.damasdeblanco.com/), which includes news articles
and information about political prisoners, was found to be
[blocked](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Fwww.damasdeblanco.com)
in Cuba during the testing period of this study.

[Hermanos Al Rescate](http://hermanos.org/) (“Brothers to the Rescue”)
is a Miami-based activist non-profit organization run by Cubans in exile
who [aim](http://www.hermanos.org/Background%20and%20Information.htm)
to “promote and support the efforts of the Cuban people to free
themselves from dictatorship through the use of active non-violence”.
Formed in May 1991 following the death of a 15-year-old Cuban who tried
to flee Cuba on a raft, an [integral part of their efforts](http://www.hermanos.org/Background%20and%20Information.htm) is
to “save the lives of refugees escaping the island” and to “assist the
families of political prisoners”. Hermanos Al Rescate were amongst
several other Cuban-American groups that were [spied upon and infiltrated by Cuban intelligence officers](https://www.washingtonpost.com/news/worldviews/wp/2014/12/17/meet-the-cuban-five-at-the-center-of-the-blockbuster-u-s-announcement-on-cuba/?utm_term=.9ebe23f0b897),
known as the “Cuban Five” (or the “Miami Five”). As such, it’s probably
not surprising that we found their site to be
[blocked](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Fwww.hermanos.org)
in Cuba.

[Fundacion Hispano Cubana](http://hispanocubana.org/) (“The Hispano
Cubana Foundation”) is a non-profit organization which
[aims](http://hispanocubana.org/quienes-somos.php) to enhance the
protection of human rights in Cuba, as well as provide support for Cuban
refugees in Spain. It also strives to promote “values of freedom and
democracy in all matters relating to relations between Spain and Cuba”.
While performing tests in Cuba, we found this site to be
[blocked](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=http:%2F%2Fwww.hispanocubana.org).

[Cuba Sindical](http://cubasindical.org/) is a non-partisan,
non-profit, non-governmental organization, run by the International
Group for Corporate Social Responsibility in Cuba. According to its
[site](http://cubasindical.org/el-girscc/), Cuba Sindical is
“dedicated to promoting free and democratic trade unionism in Cuba” and
“seeks international support and solidarity for Cuban workers”. This
site was most likely
[blocked](https://explorer.ooni.org/measurement/20170717T213558Z_AS27725_dEvgI4mTUuEHTiTTjSLx6Yb18MVUamp0vcvIKLCkjD72OnyyrI?input=http:%2F%2Fwww.cubasindical.org)
because the Cuban government [prohibits independent trade unions](http://survey.ituc-csi.org/Cuba.html?lang=en#tabs-2).

Even though sigloxxi.org is not operational, we found it to be
[blocked](https://explorer.ooni.org/measurement/20170603T183359Z_AS27725_AdrXzhQiFf9ULtvkQPpLGtBu2Lx4xR8LNT6bi6HugbDwegFELV?input=http:%2F%2Fwww.sigloxxi.org)
as well during the testing period.

#### Anonymity and Circumvention Tools

The [Tor network](https://www.torproject.org/) was found to be
[accessible](https://explorer.ooni.org/measurement/20170607T175300Z_AS27725_XXfB14TYx5szrWoFiokwjWdQZIJQIuEtGWpkfaojBEPdiNsc3u)
across Cuba. Similarly, we were able to access other circumvention tool
sites, such as [Psiphon](https://psiphon.ca/). However, we found the
[Java Anon Proxy](https://anon.inf.tu-dresden.de/), also known as JAP
or JonDonym, to be
[blocked](https://explorer.ooni.org/measurement/20170601T234537Z_AS27725_c8woAxTKOxxxZwpXe21YCURgbpip82AJyUbs46SoMYkNLoE6jP?input=http:%2F%2Fanon.inf.tu-dresden.de),
along with web proxies.

| Blocked circumvention tool sites | Amount of block pages detected |
|----------------------------------|--------------------------------|
| http://anon.inf.tu-dresden.de    | 11                             |
| http://anonymouse.org            | 10                             |
| http://www.inetprivacy.com       | 8                              |
| http://www.megaproxy.com         | 1                              |

[Anonymouse](http://anonymouse.org/) is a popular web proxy. It
enables its users to [browse the web anonymously](http://anonymouse.org/anonwww.html), send [anonymous emails](http://anonymouse.org/anonemail.html), and to [anonymously post entries](http://anonymouse.org/anonnews.html) in newsgroups.
MegaProxy is another web proxy which allows its users to surf the web
through a web SSL VPN service. Both were found to be
[blocked](https://explorer.ooni.org/country/CU) in Cuba
during the testing period of this study, along with [iNetPrivacy software](http://www.inetprivacy.com/).

#### Communication Tools

Facebook Messenger is really
[popular](https://www.economist.com/news/americas/21716099-ingenious-answer-digital-deprivation-cuba-app-stores-pay-rent)
in Cuba. As part of our testing, we found it to be
[accessible](https://explorer.ooni.org/measurement/20170607T175309Z_AS27725_a4wPIMQ7NwY7hXozjWQ9f9gSNDRzpN9kb3XLsjzW1GFbsfcMGz)
across eight vantage in the country. We also found WhatsApp to be
[accessible](https://explorer.ooni.org/measurement/20170607T175300Z_AS27725_sscXF9fCtjN7lUqAy9WewtB7HxS3dBWVJcjmuHYvHhreJosqap).

However, we found the following communication tool sites to be blocked,
even though they are no longer operational.

| Blocked communication tool sites | Amount of block pages detected |
|----------------------------------|--------------------------------|
| http://www.callserve.com         | 7                              |
| http://www.pc2call.com           | 9                              |

#### Culture

As part of this study, we also found two cultural sites to be
[blocked](https://explorer.ooni.org/country/CU).

| Blocked cultural sites    | Amount of block pages detected |
|---------------------------|--------------------------------|
| http://www.vitral.org     | 14                             |
| http://www.cubanuestra.nu | 21                             |

[Vitral](http://www.vitral.org/) is a socio-cultural magazine, run by
the Diocese of Pinar del Rio, which aims to provide a platform for
“communication, reflection, and dialogue” on Cuban culture and society.
[Cuba Nuestra](http://cubanuestra.nu/), on the other hand, is the blog
of Swedes, who describe their experiences from living in Cuba (but also
share stories from life in Sweden).

#### Religion

[IDEAL magazine](http://www.idealpress.com/) is a religious site that
[aims](http://www.idealpress.com/sobreideal#&panel1-3) to “promote
democracy and freedom linked to Christian thought”. To this end, it
publishes articles, reports, comments, testimonies, poetry and humor in
relation to Cuba and the Christian faith. As part of this study, we
found it to be
[blocked](https://explorer.ooni.org/measurement/20170723T204926Z_AS27725_1xHuKtaN92RjPXcI7xnrm9SI1OrwZvvWKUK8filfQt94oyJVIp?input=http:%2F%2Fwww.idealpress.com).

| Blocked religious site    | Amount of block pages detected |
|---------------------------|--------------------------------|
| http://www.idealpress.com | 18                             |

#### Militant

Alpha 66 (named after its 66 original members) is an anti-Castro
paramilitary group, based in Miami. Along with [Brothers to the Rescue](http://hermanos.org/) and other anti-castro groups led by
Cubans in exile, it was [infiltrated by Cuban intelligence officers](https://www.washingtonpost.com/news/worldviews/wp/2014/12/17/meet-the-cuban-five-at-the-center-of-the-blockbuster-u-s-announcement-on-cuba/?utm_term=.3c2bbc73792a)
in the 1990s.

| Blocked militant site  | Amount of block pages detected |
|------------------------|--------------------------------|
| http://www.alpha66.org | 19                             |

Even though the site is no longer operational (and has been squatted),
ETECSA continues to
[block](https://explorer.ooni.org/measurement/20170601T235618Z_AS27725_SpZcfWCu3e17GPv8jpXSOIQucnRNNPolNnG2OODcGQC8H70cbe?input=http:%2F%2Fwww.alpha66.org)
access to its domain.

### Skype blocked

We found Skype to be blocked in Cuba by means of RST injection. We were
able to confirm that the RST packet was injected from Cuba because the
timing was much less than that of the SYN-ACK round-trip time and had an
inconsistent Time To Live (TTL).

We reached this conclusion by examining packet traces. We can estimate
the round-trip time by measuring the time elapsed from the moment that
we send the first TCP packet (the SYN packet) until we receive the
corresponding confirmation packet from the server (the SYN|ACK packet).
This estimate is a baseline for the time after which we expect to
receive a confirmation packet from any packet that we send over the TCP
session. In normal circumstances, the time between any packet and the
corresponding confirmation packet cannot be lower than the time measured
initially.

Yet, we noticed that RST packets were received much faster than
expected, indicating that such packets were injected by some middle box
close to us, given the low latency. We also noticed that the TTL field
in the RST packet was not consistent with the TTL of previously received
legitimate packets. This is also a sign that the RST packet was most
likely injected.

### Deep Packet Inspection technology

Once we detected the blocking of sites and services based on OONI Probe
tests, we subsequently wrote a new network measurement test (called
“latency-to-blocked”) that is designed to measure the latency to the
blocking infrastructure by performing test connections to a control
vantage point.

Interestingly enough, this test showed low latency when connecting to
blocked sites in Havana. The same test, however, presented higher
latency from Santa Clara, and even higher latency from Santiago de Cuba.
This allowed us to infer that the censorship equipment used in Cuba is
most likely located in Havana (and in any case, for sure in Cuba).

Based on the latency measurements (and other measurements collected
through [OONI’s HTTP Host test](https://ooni.org/nettest/http-host/)), we were able to
confirm that Deep Packet Inspection (DPI) technology was used to block
access to sites and services in Cuba. Through packet captures done on
the server-side, we found that the request of the client never arrived
and was RST by the DPI middlebox, as illustrated below.

![RST injection](/post/cuba-internet-censorship-2017/cu-18.png)

Moreover, we found that the connection was also RST (after having served
the injected blockpage) on the client as well.

To further understand the characteristics of the DPI technology, we
wrote a test that sends a packet only containing the blocked domain. The
purpose of this experiment was to understand whether the blocking
equipment was processing HTTP or was just reacting to the presence of a
censored domain inside a packet. After some iterations, we discovered
that, to trigger the blocking, it was enough to send a packet only
containing a colon (“:”) followed by a space, followed by the blocked
domain, and followed by a newline (specifically the internet newline,
composed of the CR and LF characters).

On the contrary, sending the domain followed by newline, but not
prefixed by a colon and a space did not trigger the reset. This
confirmed our initial hypothesis that the censorship equipment only
reacts to specific strings present in the packets and does not bother
with processing actual HTTP messages. As a possibly unintended
consequence, this means that censorship will be triggered if the blocked
domain is included in any HTTP header, since the string triggering
blocking does not check whether the blocked domain is part of an HTTP
message and inside of the “Host” header.

### Huawei equipment in Cuba

[Huawei](http://www.huawei.com/en/), a Chinese multinational
networking and telecommunications equipment and services company,
appears to have supported Cuba’s internet infrastructure. And this was
evident without even running any network measurement tests.

When accessing blocked websites in Cuba, for example, we noticed that
the server header contained the following value: **V2R2C00-IAE/1.0**.
This version string appears to be [associated to Huawei equipment called eSight](https://archive.fo/tOWe3#selection-15373.0-15373.6),
which is generally a “[unified software suite for planning, operating, and maintaining complex enterprise ICT infrastructure](https://archive.fo/Wlq6e)”.

Interestingly enough, ETECSA’s login portal - through which Cubans
access the internet - appears to have been written by Chinese
developers, since its source code contains comments written in Chinese.
This indicates that ETECSA likely hired Chinese developers to implement
the portal.

![Nauta captive portal containing Chinese comments in the source code](/post/cuba-internet-censorship-2017/cu-19.png)

Image: ETECSA login page containing Chinese comments in source code

We also noticed that the server of the captive portal replies with the
following server header: **OpenAS**. This too is [associated to Huawei equipment](https://archive.fo/gHxX1).

While it’s clear that Cuba is using Huawei access points, it remains
unclear to us whether and to what extent Huawei equipment is actually
being used to implement internet censorship in the country.

### Google App Engine blocked by Google

To measure the speed and performance of networks in Cuba, we attempted
to run [OONI’s Network Diagnostic Test (NDT)](https://ooni.org/nettest/ndt/). This test is designed
to measure the speed and performance of networks by connecting to
[M-Lab](http://www.measurementlab.net/tools/ndt/) servers close to the
user, and by subsequently uploading and downloading random data. In
doing so, NDT collects TCP/IP low level information that is useful to
examining and characterizing the quality of the network path between the
user and the M-Lab server.

However, we were initially unable to run the NDT test in any networks in
Cuba. Upon examination, we realized that this is due to the fact that
M-Lab uses Google App Engine to discover the closest server to the user.
And Google App Engine appeared to be blocking IP addresses originating
from Cuba. In other words, we found that Google was blocking access to
Google App Engine from Cuba.

We later worked around the problem by manually specifying the test
servers connected to by NDT. This allowed us to avoid using M-Lab
services which rely on Google App Engine (which was blocked), and to
directly connect to test servers instead.

## Acknowledgement of limitations

The findings of this study present various limitations.

While [OONI network measurements](https://api.ooni.io/files/by_country/CU)
have been collected from Cuba since January 2016, this study only
analyzes recent network measurements collected between 29th May 2017 to
10th June 2017. As such, censorship events which may have occurred
before and/or after this testing period are not analysed as part of this
study.

Another limitation is associated to the amount and types of URLs that
were tested for censorship. As mentioned in the methodology section of
this report, [OONI’s Web Connectivity test](https://ooni.org/nettest/web-connectivity/) was run to
examine the accessibility of
[349 URLs](https://github.com/citizenlab/test-lists/blob/master/lists/cu.csv)
that are more relevant to the Cuban context and [1,109 internationally relevant sites](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv).
While a total of 1,458 URLs were tested for censorship as part of this
study, we did not test all of the URLs on the internet, indicating the
possibility that other websites not included in [tests lists](https://github.com/citizenlab/test-lists/tree/master/lists)
might have been blocked.

Finally, while network measurements were collected from eight local
vantage points across three cities in Cuba, tests were not run from
every vantage point possible in the country. Therefore, the findings of
this study are limited to the vantage points from which network
measurement tests were run.

# Conclusion

[OONI data](https://explorer.ooni.org/country/CU) collected
from Cuba confirms the **blocking of 41 websites**. Most of these sites
include news outlets and blogs, as well as pro-democracy and human
rights sites. Many of the blocked sites, directly or indirectly, express
criticism towards Castro’s regime. Interestingly enough though, various
other international sites which also express criticism - such as
Reporters Without Borders’ [portrait of Cuba’s President](https://rsf.org/en/predator/raul-castro-0), presenting him
as a “Predator of Press Freedom” - were found to be
[accessible](https://explorer.ooni.org/measurement/20170602T204322Z_AS27725_77Dv0jxB6oySsvhkyiBCOwFhH2BV6BD3IhgrP0bPHiLLUPXMXT?input=https:%2F%2Frsf.org%2Fen%2Fpredator%2Fraul-castro-0)
across Cuba.

Web proxies, like [Anonymouse](http://anonymouse.org/), were amongst
those found to be blocked, limiting Cubans’ ability to circumvent
censorship. It’s worth noting though that the [Tor anonymity network](https://www.torproject.org/) was found to be
[accessible](https://explorer.ooni.org/measurement/20170607T175300Z_AS27725_XXfB14TYx5szrWoFiokwjWdQZIJQIuEtGWpkfaojBEPdiNsc3u)
across the country. This is likely due to the fact that [Cuba has relatively few Tor users](https://metrics.torproject.org/userstats-relay-country.html?start=2017-05-30&end=2017-08-28&country=cu).

Deep Packet Inspection (DPI) technology was found to be blocking sites
by resetting connections and serving (blank) block pages. Through
latency measurements, we were also able to confirm that the blocking
server is most likely located in Havana (and in any case, for sure in
Cuba). Only the HTTP version of sites was found to be blocked. While, in
theory, Cubans could potentially circumvent the censorship by merely
accessing such sites over HTTPS, many of the sites found to be blocked
do not support HTTPS.

Skype was the only popular communications tool that we found to be
censored. By examining packet traces, we were able to determine that the
DPI middlebox blocked Skype by means of RST injection. Other popular
communications tools, such as [Facebook Messenger](https://explorer.ooni.org/measurement/20170607T175309Z_AS27725_a4wPIMQ7NwY7hXozjWQ9f9gSNDRzpN9kb3XLsjzW1GFbsfcMGz)
and
[WhatsApp](https://explorer.ooni.org/measurement/20170607T175300Z_AS27725_sscXF9fCtjN7lUqAy9WewtB7HxS3dBWVJcjmuHYvHhreJosqap),
were accessible.

Huawei, a Chinese multinational networking and telecommunications
equipment and services company, was found to be supporting Cuba’s
internet infrastructure. The server header of blocked sites, for
example, pointed to Huawei equipment. While it is clear that Cuba is
using Huawei’s access points, it remains unclear whether and to what
extent the company is actually implementing internet censorship in the
country. What was clear though was that Google is blocking access to
Google App Engine from Cuba.

Internet censorship in Cuba does *not* appear to be particularly
sophisticated. Cuba’s ISP only appears to be blocking the HTTP version
of sites, enabling users to potentially circumvent censorship by
accessing such sites over HTTPS. While Cuba’s ISP targets *some* sites
that are viewed as overly critical of its government, many other
international websites which also express criticism are not censored.
Given the [high cost of the internet](http://www.etecsa.cu/internet_conectividad/internet/),
rendering it inaccessible to most Cubans, perhaps the government doesn’t
even *need* to invest in sophisticated internet censorship.

On average, [Cubans earn around 25 CUC per month](https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/kenrapoza/2016/04/26/guess-how-much-cubans-earn-per-month/),
while only 1 hour of internet access [costs 1.5 CUC](http://www.etecsa.cu/internet_conectividad/internet/). Cuba’s
*intranet* is more than ten times cheaper (at [0.10 CUC](http://www.etecsa.cu/internet_conectividad/internet/) per hour),
indicating that many Cubans possibly limit their browsing experience to
government-approved sites and services. The high cost of the internet,
and the [limited availability of ParkNets](http://www.etecsa.cu/internet_conectividad/areas_wifi/) (or
other public wifi hotspots) across the country, remain the main barriers
to accessing the internet in Cuba.

Cuba’s environment has fostered *alternative* approaches of accessing
the internet. Multiple private mesh networks, known as
“[StreetNets](https://www.polygon.com/features/2017/5/15/15625950/cuba-secret-gaming-network)”,
have sprung across Havana and other Cuban cities. An “[offline internet](https://www.theguardian.com/world/2014/dec/23/cuba-offline-internet-weekly-packet-external-hard-drives)”
has emerged through underground markets, providing Cubans access to
online content, without being online.

Cuba’s internet landscape has changed quite a lot over the last years,
and it will likely continue to evolve. But so might internet censorship.
It is therefore important to continue to measure networks. Software like
[OONI Probe](https://ooni.org/install/) allows users in Cuba
and beyond to collect data that sheds light on information controls.

{{< imgcap title="Image by Arturo Filastò (CC-BY-SA-3.0)" src="/post/cuba-internet-censorship-2017/cu-20.jpg" src2x="/post/cuba-internet-censorship-2017/cu-20@2x.jpg" >}}
