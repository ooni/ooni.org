---
title: "On the blocking of abortion rights websites: Women on Waves & Women on Web"
author: "Joana Varon (Coding Rights), Rebecca Gomperts (Women on Waves, Women on Web), Maria Xynou (OONI), Federico Ceratto (OONI), Arturo Filastò (OONI)"
date: "2019-10-29"
tags: ["country-br", "country-ir", "country-tr", "country-sa", "country-kr", "censorship", "theme-human_rights"]
categories: ["report"]
---

![Cover image](/post/2019-blocking-abortion-rights-websites-women-on-waves-web/wow-cover-image.png)

**Image:** By Clarote (Coding Rights)

---------------------------------------------------------------------------------------------------------------------------------------------------------------

Read the [Portuguese version](https://medium.com/codingrights/brasil-bloqueia-women-on-waves-site-que-traz-informa%C3%A7%C3%B5es-sobre-aborto-seguro-91cd6ae64ba3) by Coding Rights.

View the report's [press coverage](https://theintercept.com/2019/12/12/net-claro-e-vivo-bloqueiam-site-aborto-seguro/) by The Intercept.

---------------------------------------------------------------------------------------------------------------------------------------------------------------

As abortion remains partially or totally
[criminalized](https://reproductiverights.org/worldabortionlaws) in
numerous countries, the fight to promote sexual and reproductive rights,
as well as women's health, also relies on access to information. But
recently, we were told that the website of the abortion rights
non-governmental organization womeonwaves.org, which provides
reproductive health services and education to women in countries with
restrictive abortion laws, was inaccessible in Brazil.

[Coding Rights](https://medium.com/codingrights) is a Brazil-based
feminist organization focused on issues pertaining to gender and
technology. Thanks to Coding Rights’ community engagement activities,
many Brazilians have been
[measuring](https://explorer.ooni.org/search?until=2019-10-28&probe_cc=BR)
the blocking of websites - including womenonwaves.org - over the last
few years through the use of [OONI Probe](https://ooni.io/install/).

OONI Probe is [free and open source software](https://github.com/ooni/probe) designed to measure the
blocking of websites and various other forms of internet censorship.
Hundreds of thousands of OONI Probe users run censorship measurements in
[around 210 countries every month](https://explorer.ooni.org).

To check whether womenonwaves.org is blocked in Brazil and in other
countries, we analyzed [OONI measurements from around the world](https://explorer.ooni.org/). As part of our analysis, we also
checked whether womenonweb.org - *the sister organization of
womenonwaves.org* - is blocked around the world too.

In this report, we share OONI data confirming the blocking of
womenonwaves.org in Brazil, as well as in Iran and Turkey. We also share
OONI data on the blocking of womeononweb.org in South Korea, Turkey, and
Saudi Arabia.

* [Background](#background)

* [Blocking of Women on Waves and Women on Web](#blocking-of-women-on-waves-and-women-on-web)

	* [Brazil](#brazil)

	* [Iran](#iran)

	* [Saudi Arabia](#saudi-arabia)

	* [South Korea](#south-korea)

	* [Turkey](#turkey)

* [Censored on social media platforms](#censored-on-social-media-platforms)

* [Conclusion](#conclusion)

# Background

While many parts of the world have acknowledged some aspects of gender
inequality and have progressively changed their practices and
legislations towards the promotion of women’s rights, the protection of
sexual and reproductive rights (particularly the right to have an
abortion) remains a taboo subject. As such, in some countries, abortion
is still criminalized in complete disregard of women’s right to
self-determination, dignity, health, bodily autonomy, and, ultimately,
their right to life.

The [World’s Abortion Laws Map](https://reproductiverights.org/worldabortionlaws) from the Center
for Reproductive Rights illustrated below shows us the status of
abortion laws around the globe.

![Map: World Abortion Laws](/post/2019-blocking-abortion-rights-websites-women-on-waves-web/abortion-laws-map.png)

**Source:** Center for Reproductive Rights, The World’s Abotion Laws, https://reproductiverights.org/worldabortionlaws

In the blue countries of the map, abortion can be performed upon
request, while the laws in the green countries permit abortion under a
broad range of social and economic circumstances. The laws in the yellow
countries only permit abortion on the basis of health or therapeutic
grounds, while the laws in the red countries only allow abortion when
the woman’s life is at risk. The laws in the maroon countries do not
permit abortion under any circumstances (including when the woman’s life
or health is at risk), as abortion is strictly prohibited altogether.
There are cases in which even providing information about abortion
practices could be considered a crime.

According to the UN [Human Rights Council Working group, on the issue of discrimination against women in law and in practice](https://www.ohchr.org/EN/Issues/Women/WGWomen/Pages/WGWomenIndex.aspx)
the ability for a woman or girl to make her own decisions about
pregnancy *“is at the very core of [her] fundamental right to
equality, privacy and physical and mental integrity and is a
precondition for the enjoyment of other rights and freedoms”*. The group
also stressed that when the legal and safe voluntary termination of
pregnancy is not possible, *“unsafe abortions cause the deaths of some
47,000 women each year and a further five million suffer some form of
temporary or permanent disability.”*

To change the legal scenario, protests and civil society pressure for
decriminalization have been common in several countries. As a result,
the United Nations Human Rights Committee released a [General Comment on the Right to Life](https://www.ohchr.org/Documents/HRBodies/CCPR/CCPR_C_GC_36.pdf)
in 2018 which calls upon States to *“not apply criminal sanctions
against women and girls undergoing abortion or against medical service
providers assisting them in doing so, since taking such measures compel
women and girls to resort to unsafe abortion.”*

Nancy Northup, the President and CEO of the Center for Reproductive
Rights, welcomed the text
[stating](https://reproductiverights.org/press-room/un-human-rights-committee-asserts-access-abortion-and-prevention-maternal-mortality-are)
that *“comprehensive reproductive health services, including abortion,
are necessary to guarantee the right to life, health, privacy, and
non-discrimination for women and girls.”*

The UN text also affirms that States should *“ensure access for women
and men, and, especially, girls and boys, to quality and evidence-based
information and education about sexual and reproductive health and to a
wide range of affordable contraceptive methods, and prevent the
stigmatization of women and girls seeking abortion.”*

Alligned with the thought of such recommendations, and to support women
in countries with restricted access to safe abortion, Dutch physician
Dr. Rebecca Gomperts founded [Women on Waves](https://www.womenonwaves.org/) in 1999. This abortion rights NGO
[aims](https://www.womenonwaves.org/en/page/650/who-are-we) to prevent
unsafe abortions and empower women to exercise their human rights to
physical and mental autonomy. And Women on Waves does so in several
ways.

Women on Waves [sails a ship to countries where abortion is illegal](https://www.womenonwaves.org/en/page/2582/abortion-ship-campaigns).
On the ship -- in international waters (where local laws do not apply)
-- Women on Waves provides women with abortion services, contraceptives,
information, and training. Since 2001, Women on Waves have traveled to
numerous countries to support women, including
[Mexico](https://www.womenonwaves.org/en/page/6944/in-collection/2582/abortion-ship-mexico--april-2017),
[Guatemala](https://www.womenonwaves.org/en/page/6686/in-collection/2582/abortion-ship-guatemala--february-2017),
[Morocco](https://www.womenonwaves.org/en/page/3416/in-collection/2582/abortion-ship-morocco-2012),
[Spain](https://www.womenonwaves.org/en/page/480/in-collection/2582/abortion-ship-spain-2008),
[Poland](https://www.womenonwaves.org/en/page/954/in-collection/2582/abortion-ship-poland-2003),
Portugal, and
[Ireland](https://www.womenonwaves.org/en/page/769/in-collection/2582/abortion-ship-ireland-2001).

![Women on Waves: Abortion Ship](/post/2019-blocking-abortion-rights-websites-women-on-waves-web/women-on-waves.jpg)

**Image:** Women on Waves, *Abortion Ship Campaigns*, https://www.womenonwaves.org/en/page/2582/abortion-ship-campaigns

Apart from sailing ships, Women on Waves have also used
[robots](https://www.womenonwaves.org/en/page/7524/abortion-robots)
and
[drones](https://www.womenonwaves.org/en/page/6402/abortion-drones) to
[deliver abortion pills to women in Poland](https://www.womenonwaves.org/en/page/7525/in-collection/7524/abortion-robot-on-stage-in-poland--2018)
and [Northern Ireland](https://www.womenonwaves.org/en/page/7115/abortion-robot-in-belfast--northern-ireland-2018).

![Women on Waves: Abortion Drones](/post/2019-blocking-abortion-rights-websites-women-on-waves-web/wow-drone.jpg)

**Image:** Women on Waves, *Abortion Drones*, https://www.womenonwaves.org/en/page/6402/abortion-drones

Women on Waves provide
[trainings](https://www.womenonwaves.org/en/page/2973/training---advocacy)
to organizations around the world with the aim of disseminating
information about misoprostol to support safe abortions. In addition,
they provide [safe abortion hotlines](https://www.womenonwaves.org/en/page/2583/safe-abortion-hotlines),
a [safe abortion mobile app](https://www.womenonwaves.org/en/page/6107/our-safe-abortion-app-is-out),
as well as [training manuals](https://www.womenonwaves.org/en/page/2591/in-collection/1013/training-manuals)
and several other
[resources](https://www.womenonwaves.org/en/page/1013/resources). In
2014, a [documentary (“Vessel”)](https://en.wikipedia.org/wiki/Vessel_(film)) focusing on
the work of Women on Waves was released and won numerous awards.

To provide online abortion services for women in countries where there
is no legal access to medical abortion, Dr. Rebecca Gomperts (also)
founded [Women on Web](https://www.womenonweb.org/) in 2005. This
service provides an [online consultation with a doctor](https://www.womenonweb.org/en/i-need-an-abortion) to support a
safe abortion,
[contraceptives](https://www.womenonweb.org/en/page/9184/get-contraceptives),
as well as [information about the abortion process](https://www.womenonweb.org/en/page/6905/questions-and-answers).
Women on Web (WoW) also publish [abortion stories](https://www.womenonweb.org/en/page/488/i-had-an-abortion) from
women around the world. For all this work, WoW are recognized worldwide
as a source of information on sexual and reproductive rights.

As abortion remains
[criminalized](https://reproductiverights.org/worldabortionlaws) in
several countries and Women on Waves has adopted unconventional tactics
to support safe abortions around the world, their websites
(womenonwaves.org and womenonweb.org) have been censored by certain
governments. In the following sections of this report, we share relevant
findings.

# Blocking of Women on Waves and Women on Web

Both `https://www.womenonwaves.org` and `https://www.womenonweb.org` have
been tested internationally fairly regularly since they were first
[added to the testing in October 2017](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv).
Every day, the results from [OONI Probe](https://ooni.org/install/)
tests around the world are [openly published](https://ooni.org/data/).

We analyzed [OONI measurements](https://explorer.ooni.org/) to examine the
blocking of www.womenonwaves.org and www.womenonweb.org around the
world. We found that, beyond Brazil, these sites appear to be blocked in
several countries, as illustrated below.

![Chart: Blocking of WoW worldwide](/post/2019-blocking-abortion-rights-websites-women-on-waves-web/wow-global-blocking-chart.png)

**Source:** OONI measurements from 2019, https://explorer.ooni.org/

Our analysis is available **[here](/post/2019-blocking-abortion-rights-websites-women-on-waves-web/20191025-wow-br-web_connectivity-pivot.csv)**.

OONI data, as demonstrated in the above chart, suggests blocking of both
womenonwaves.org and womenonweb.org in Turkey. Brazil and Iran only
appear to block www.womenonwaves.org (but not www.womenonweb.org), while
South Korea and Saudi Arabia appear to only block www.womenonweb.org
(but not www.womenonwaves.org). Women on Waves acknowledge the blocking
of womenonweb.org in [South Korea](https://www.womenonwaves.org/en/page/4599/women-on-web-website-is-blocked),
[Saudi Arabia](https://www.womenonwaves.org/en/page/6994/safe-abortion-for-saudi-arabia),
and
[Turkey](https://www.womenonwaves.org/en/page/6995/safe-abortion-for-turkey--turkiye-icin-guvenli-kurtaj)
and share [circumvention advice](https://www.womenonwaves.org/en/page/4599/women-on-web-website-is-blocked).

Recently (August 2019), womeonwaves.org was temporarily blocked on VEON
(AS8402) in Russia, which can be [confirmed since a block page was served](https://explorer.ooni.org/measurement/20190809T091511Z_AS8402_x2k2mWMb1yJJ3mWYtRY36PGpSdZOOGmvl4ANndzrXi625l7fVz?input=http%3A%2F%2Fwww.womenonwaves.org%2F).
Access to the site, however, has since been unblocked, as [more recent measurements from that network](https://explorer.ooni.org/measurement/20190906T024147Z_AS8402_i6Jax60WeR5Htkih5KlNMJR38pajl2OyawPgPgjvNWIj0vkqmZ?input=https%3A%2F%2Fwww.womenonwaves.org%2F)
show that it is accessible. In general, most recent womenonwaves.org
measurements suggest that the site is [accessible in Russia](https://explorer.ooni.org/search?until=2019-10-14&domain=www.womenonwaves.org&probe_cc=RU).

Quite similarly, [OONI measurements from the testing of womenonweb.org in Egypt](https://explorer.ooni.org/measurement/20190612T152648Z_AS8452_Ymy9lvXcAGhkSvllCsBkyI3TUvScixkmZMNTuyCxRjbVDGrKUu?input=https%3A%2F%2Fwww.womenonweb.org%2F)
presented anomalies on Telecom Egypt (AS8452) between 12th June 2019 to
19th June 2019, suggesting potential temporary blocking. However, the
limited volume of measurements and the absence of a block page (and the
fact that the measurements have been [successful subsequently](https://explorer.ooni.org/measurement/20190628T234109Z_AS8452_HMSIqGGFhQODhvEhMCUKML7uWkKJuW7FJi2lbcGsJKf1xSz1Xn?input=https%3A%2F%2Fwww.womenonweb.org%2F))
limit our confidence in confirming this.

Recent OONI measurements collected from Jordan suggest [potential blocking of womenonweb.org](https://explorer.ooni.org/measurement/20190917T090043Z_AS48832_umEYSvogEL0XF2oR2lKdeBh5dgRFwgat5ZJwv5NQC6BBOhCBvM?input=https%3A%2F%2Fwww.womenonweb.org%2F)
and
[womenonwaves.org](https://explorer.ooni.org/measurement/20190917T090043Z_AS48832_umEYSvogEL0XF2oR2lKdeBh5dgRFwgat5ZJwv5NQC6BBOhCBvM?input=https%3A%2F%2Fwww.womenonwaves.org%2F).
As of September 2019, all measurements collected from the testing of
these two sites on several different networks in Jordan consistently
presented
[anomalies](https://explorer.ooni.org/measurement/20190917T090043Z_AS48832_umEYSvogEL0XF2oR2lKdeBh5dgRFwgat5ZJwv5NQC6BBOhCBvM?input=https%3A%2F%2Fwww.womenonwaves.org%2F),
providing signals of potential blocking. The relatively limited volume
of measurements though -- and the absence of a block page -- limit our
confidence in confirming this as well.

While womenonwaves.org is generally accessible in Europe, we found the
site [blocked on a school network in the United Kingdom](https://explorer.ooni.org/measurement/20190321T134221Z_AS12513_AGcY983ayRo2xRhxoNE1YwGQLdOMU7U2OGVwGcDMXkzbyUA5xw?input=http%3A%2F%2Fwww.womenonwaves.org%2F).
Quite similarly, OONI measurements reveal the presence of [WatchGuard filtering technology used to block access to womenonwaves.org](https://explorer.ooni.org/measurement/20190812T165141Z_AS11426_ZHmMctVg7u5a1oW4NxTv626XJfUX1Si42Hvu3r9YLreflNzFgH?input=http%3A%2F%2Fwww.womenonwaves.org%2F)
on Charter Communications (AS11426) in the United States. These
measurements, in particular, show that this web filter has a
“pro-choice” blocking category, suggesting that other abortion sites may
be blocked on the same network as well.

![Watchguard filtering technology](/post/2019-blocking-abortion-rights-websites-women-on-waves-web/watchguard.png)

**Source:** OONI measurement, https://explorer.ooni.org/measurement/20190812T165141Z_AS11426_ZHmMctVg7u5a1oW4NxTv626XJfUX1Si42Hvu3r9YLreflNzFgH?input=http%3A%2F%2Fwww.womenonwaves.org%2F

Interestingly enough, womeonwaves.org and womeonweb.org are accessible
in most countries that prohibit abortion, including countries like [the Philippines](https://explorer.ooni.org/measurement/20190608T041722Z_AS9299_Q05TZcEzhuXDbtUmvBNtUL4nMeuIpCmRXDERhnTCkiUwSE8Sp8?input=https:%2F%2Fwww.womenonwaves.org%2F),
which [strictly prohibits abortion](https://reproductiverights.org/worldabortionlaws?country=PHL)
and does not permit it under any circumstances.

In the following sections, we share more details on the blocking of
womenonwaves.org and womeononweb.org in Brazil, Iran, Saudi Arabia,
South Korea, and Turkey.

## Brazil

In Brazil, voluntary termination of pregnancy is only allowed when the
pregnancy is the result of rape, if the life of the woman is at risk
and, after [a huge struggle of abortion rights activists](http://g1.globo.com/brasil/noticia/2012/04/supremo-decide-por-8-2-que-aborto-de-feto-sem-cerebro-nao-e-crime.html),
in the case of anencephaly.

Charges can result in 1 to 3 years of imprisonment for the pregnant
woman and up to 4 years for the doctor or anyone who helps out with the
abortion. Nevertheless, making it illegal has not prevented abortion
practices, but it has led women to resort to alternative and insecure
means.

According to [“Pesquisa Nacional de Aborto”](http://www.scielo.br/scielo.php?pid=S1413-81232017000200653&script=sci_abstract&tlng=pt)
(National Research on Abortion), more than half a million women in
Brazil resorted to clandestine abortion in 2016. In 2018, the Brazilian
Ministry of Health stated that such numbers could reach more than a
million. As a result (also according to data from the same Ministry),
[usafe abortion practices accounted for the death of 203 women in 2016](https://www.huffpostbrasil.com/2018/08/03/uma-mulher-morre-a-cada-2-dias-por-causa-do-aborto-inseguro-diz-ministerio-da-saude_a_23495452/)
(which represents 1 death every two days). Over the last decade, it is
[estimated](https://www.huffpostbrasil.com/2018/08/03/uma-mulher-morre-a-cada-2-dias-por-causa-do-aborto-inseguro-diz-ministerio-da-saude_a_23495452/)
that around 2,000 women (particularly black young women who do not have
the resources to access elite clandestine clinics) have died in Brazil
as a result of unsafe abortions.

The magazine AzMina was recently
[denounced](https://www1.folha.uol.com.br/cotidiano/2019/09/revista-faz-reportagem-sobre-aborto-e-e-denunciada-por-damares.shtml)
by the far-right Minister of Women, Family and Human Rights, Damares
Alves, for posting an article with information about safe abortion from
the World Health Organization. Currently, the magazine is being sued,
journalists who signed the article have also been victims of doxing and
other forms of attacks on social media, and they [are running a crowdfunding campaign to deal with the legal expenses](https://benfeitoria.com/azmina).

In August 2018, Brazil’s [Supreme Court held a 2-day public hearing](https://www.womenonweb.org/en/page/16662/women-on-web-testimony-for-the-supreme-court-in-brasil)
to consider whether the country’s abortion laws violate constitutional
protections. The hearing was covered under the hashtag
#NemPresaNemMorta. A report by the Minister Rosa Weber is yet to be
released.

![Brazil: Public intervention decriminalizing abortion](/post/2019-blocking-abortion-rights-websites-women-on-waves-web/brazil-public-intervention.png)

**Image by Heloisa Adegas.** Public intervention in reference to the distopic novel “The Handmaid’s
Tale” in front of the Supreme Court during a hearing to decriminalize
abortion in Brazil.

Dr. Rebecca Gomperts, the founder and director of [Women on Waves](https://www.womenonwaves.org/) and [Women on Web](https://www.womenonweb.org/), was one of the experts invited to
the hearing. As part of her
[testimony](https://www.womenonweb.org/en/page/16662/women-on-web-testimony-for-the-supreme-court-in-brasil),
Dr. Gomperts highlighted the lack of access to legal abortion in Brazil
in cases of rape and even in cases where the pregnancy is a risk for the
woman’s life -- as documented in emails received through the Women on
Web helpdesk.

Earlier this year, our Brazilian community members reported that they
encountered difficulties accessing www.womenonwaves.org. To investigate
potential blocking of the site, we coordinated further [OONI Probe](https://ooni.org/install/) testing and analyzed relevant [OONI measurements](https://explorer.ooni.org/country/BR) collected from
Brazil.

The following chart illustrates OONI findings based on the testing of
womeononweb.org and womenonwaves.org on multiple networks in Brazil from
1st January 2019 onwards. While womenonweb.org is accessible in Brazil,
access to womeonwaves.org appears to be blocked.

![Chart: Testing WoW in Brazil](/post/2019-blocking-abortion-rights-websites-women-on-waves-web/br-chart.png)

**Source:** [OONI measurements: Brazil 2019](https://explorer.ooni.org/country/BR)

Almost all measurements collected from the testing of womenonweb.org on
many different networks across Brazil consistently showed that the site
was
[accessible](https://explorer.ooni.org/measurement/20190904T141843Z_AS28573_SY7nMAjpxi9sjGZVodEvvZF8BdZ28GkO618PMPDTSb9603PM5w?input=https:%2F%2Fwww.womenonweb.org%2F)
throughout 2019. The testing of womenonwaves.org, on the other hand,
consistently presented [TCP/IP anomalies](https://explorer.ooni.org/measurement/20191014T012930Z_AS28573_OMGOO3qgceIpj8sCZTmrQa6WQVzUhpuBCP2XlT56og7cmjPpKv?input=https://www.womenonwaves.org/),
strongly suggesting that access to the site is blocked in Brazil.

While womenonwaves.org appears to be blocked on several networks, it’s
worth highlighting that it’s not blocked on *all* networks in Brazil, as
demonstrated in the following chart.

![Chart: Testing WoW across networks in Brazil](/post/2019-blocking-abortion-rights-websites-women-on-waves-web/br-network-chart.png)

**Source:** [OONI measurements: Brazil 2018-2019](https://explorer.ooni.org/country/BR)

Most testing was performed on Claro (AS28573), where multiple
measurements consistently presented TCP/IP anomalies (since at least
January 2018), strongly suggesting that this ISP blocked access to
womenonwaves.org. Many anomalies were also detected on Telefônica Brasil
(AS27699), which is branded as Vivo, suggesting potential blocking of
womenonwaves.org on that network as well.

Data collected from the [Satellite test](https://censoredplanet.org/projects/satellite) of [Censored Planet](https://censoredplanet.org/) (between 1st January 2019 to 30th September
2019) suggests the DNS based blocking of `www.womenonwaves.org` in Brazil.
Satellite scans the internet for open DNS resolvers and performs queries to them
in an attempt to identify DNS based blocking. These checks are performed from
vantage points outside of the country using open DNS resolvers, which means that
the filtering observed on these resolvers may not necessarily be experienced by
users in Brazil.

Out of the 1,730 probed DNS resolvers, 4 of them ('201.76.164.227',
'200.196.48.21', '189.75.28.176', '128.201.60.50') presented signs of
interference throughout most of 2019. In particular, these resolvers respond to
queries for the domain `www.womenonwaves.org` with the following IPs:
'200.196.48.41' (17/17 measurements return this IP), '192.68.2.1' (1/1
measurement), '200.31.1.49' (1/35 measurements).

Overall, this is one of the few cases where we observe internet
censorship in Brazil through OONI measurements. We previously [reported on the blocking of WhatsApp in Brazil](https://ooni.org/post/brazil-whatsapp-block/) 3 years ago, but those cases were
public, widely [discussed by the media](https://www.theguardian.com/world/2016/jul/19/whatsapp-ban-brazil-facebook), and they only lasted a few
days. Now we observe internet censorship in Brazil targeting information
that is essential to women’s sexual and reproductive rights.

To examine the impact of the blocking, Women on Waves shared Google
analytics stats. Interestingly enough, the number of visitors to
womenonwaves.org from Brazil was 357,554 from 1st January 2019 to 25th
October 2019, down from 1,165,445 in the same period in 2016, but
slightly higher compared to 242,071 during the same period in 2018.

While [most Latin American countries prohibit abortion](https://reproductiverights.org/worldabortionlaws) (and some
-- like
[Nicaragua](https://reproductiverights.org/worldabortionlaws?country=NIC),
[Honduras](https://reproductiverights.org/worldabortionlaws?country=HND),
[El Salvador](https://reproductiverights.org/worldabortionlaws?country=SLV),
and
[Suriname](https://reproductiverights.org/worldabortionlaws?country=SUR)
-- prohibit abortion altogether, without any exceptions), they do not
appear to censor access to abortion information, while Brazil appears to
be the only Latin American country that censors access to
womenonwaves.org (according to [OONI measurements](https://explorer.ooni.org/)).

OONI measurements suggest that womenonwaves.org is accessible in
[Argentina](https://explorer.ooni.org/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=AR),
[Paraguay](https://explorer.ooni.org/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=PY),
[Uruguay](https://explorer.ooni.org/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=UY),
[Chile](https://explorer.ooni.io/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=CL),
[Venezuela](https://explorer.ooni.io/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=VE),
[Cuba](https://explorer.ooni.org/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=CU),
[Colombia](https://explorer.ooni.org/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=CO),
[Mexico](https://explorer.ooni.io/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=MX),
[Peru](https://explorer.ooni.io/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=PE),
[Guatemala](https://explorer.ooni.io/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=GT),
[Ecuador](https://explorer.ooni.io/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=EC),
[Haiti](https://explorer.ooni.org/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=HT),
the [Dominican Republic](https://explorer.ooni.org/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=DO),
[Honduras](https://explorer.ooni.org/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=HN),
[El Salvador](https://explorer.ooni.org/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=SV),
[Nicaragua](https://explorer.ooni.org/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=NI),
[Costa Rica](https://explorer.ooni.org/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=CR),
and
[Panama](https://explorer.ooni.org/search?until=2019-09-05&domain=www.womenonwaves.org&test_name=web_connectivity&probe_cc=PA).
However, it’s worth noting that these findings are limited to the
networks and the time during which womenonwaves.org was tested in each
country. That is to say that the site might potentially be blocked on
different networks where tests were not performed, or that the site
might have been blocked since the last time it was measured in each
country. Further [OONI Probe testing of womenonwaves.org](https://run.ooni.io/nettest?tn=web_connectivity&ta=%7B%22urls%22%3A%5B%22https%3A%2F%2Fwww.womenonwaves.org%2F%22%5D%7D&mv=1.2.0)
is therefore encouraged.

## Iran

Abortion is [illegal](https://reproductiverights.org/worldabortionlaws?country=IRN)
in Iran. It is only permitted when necessary to save a woman’s life and
in cases of fetal impairment.

OONI measurements collected from multiple networks in Iran over the last
year show that access to [womenonwaves.org was blocked](https://explorer.ooni.org/measurement/20190916T184742Z_AS31549_01PnKsyo4c5wN5ZvzsX5UjRZqfmQnQdlHB8NklZVKjkB547xGo?input=http://www.womenonwaves.org/),
while access to [womeonweb.org was accessible](https://explorer.ooni.org/measurement/20190904T211023Z_AS50810_5OF6OUqsPQg7dJJUbhaSBsDmwCU0k2cLg7oqyzcKsdazS4u4mO?input=https:%2F%2Fwww.womenonweb.org%2F),
as illustrated below.

![Chart: Testing WoW in Iran](/post/2019-blocking-abortion-rights-websites-women-on-waves-web/ir-chart.png)

**Source:** [OONI measurements: Iran](https://explorer.ooni.org/country/IR)

We can confirm the blocking of womenonwaves.org in Iran as blockpages
were served by several ISPs, such as [Dadeh Gostar (AS56402)](https://explorer.ooni.org/measurement/20190926T161348Z_AS56402_9lhgNWO1poRte84dOf0fNJ7XATGNlV0nFaETszZLlLnyY9PQna?input=http://www.womenonwaves.org/)
and [Aria Shatel (AS31549)](https://explorer.ooni.org/measurement/20190916T184742Z_AS31549_01PnKsyo4c5wN5ZvzsX5UjRZqfmQnQdlHB8NklZVKjkB547xGo?input=http://www.womenonwaves.org/).

However, it’s worth highlighting that the blocking of womenonwaves.org
in Iran is *non-deterministic*, as we observe that [the blocking of the site is inconsistent site over time](https://explorer.ooni.org/search?until=2019-10-16&domain=www.womenonwaves.org&probe_cc=IR),
and that it is *not* blocked by all local ISPs. Instead, we observe ISPs
-- such as Dadeh Gostar (AS56402) -- flipping between
[blocking](https://explorer.ooni.org/measurement/20190926T161348Z_AS56402_9lhgNWO1poRte84dOf0fNJ7XATGNlV0nFaETszZLlLnyY9PQna?input=http://www.womenonwaves.org/)
and
[unblocking](https://explorer.ooni.org/measurement/20191013T134835Z_AS56402_opSExe0LMylPi4ea0YeeYsRucOYbgo95TelI4JaZ3sS7MXawaF?input=http://www.womenonwaves.org/)
access to the site over time.

We [previously documented this non-deterministic censorship pattern](https://ooni.org/post/iran-internet-censorship/#block-me-block-me-not-block-me)
in Iran and we observe similar patterns with regards to the blocking of
womenonwaves.org as well.

Google analytics (shared by Women on Waves) show that 18,796 visitors
from Iran visited womenonwaves.org between 1st January 2019 to 25th
October 2019, compared to 714 visitors during the same period in 2016,
which suggests that the blocking is less effective than before.

## Saudi Arabia

Laws in Saudi Arabia [permit abortion on the basis of health or therapeutic grounds](https://reproductiverights.org/worldabortionlaws?country=SAU),
but spousal and/or parental authorization is required.

OONI measurements collected from Saudi Arabia over the last year show
that (contrary to Iran) access to [womenonweb.org was blocked](https://explorer.ooni.org/measurement/20190904T212617Z_AS25019_Yuuq3yCL533hc63r2RV8QphzIqnNt2Ol9jeamUZ2XoaEpehUB8?input=https:%2F%2Fwww.womenonweb.org%2F),
while access to [womeonwaves.org was accessible](https://explorer.ooni.org/measurement/20190829T121954Z_AS39891_KBC1nSlB2eqaZTrjkQO6jyCJGyoRaLykxS37CHhuV2llLYcHbV?input=https:%2F%2Fwww.womenonwaves.org%2F),
as illustrated below.

![Chart: Testing WoW in Saudi Arabia](/post/2019-blocking-abortion-rights-websites-women-on-waves-web/sa-chart.png)

**Source:** [OONI measurements: Saudi Arabia](https://explorer.ooni.org/country/SA)

The above chart presents aggregate measurements per month. Almost all
measurements from the testing of womenonweb.org from February 2019
onwards consistently present HTTP failures on multiple networks (such as
[Integrated Telecom (AS35753)](https://explorer.ooni.org/measurement/20190722T032004Z_AS35753_ZPasWm1Pnt9vQyOUCTzZhDKeZybnB95bpaftAp3rFTknnYgQjU?input=http:%2F%2Fwww.womenonweb.org%2F),
[MTC KSA (AS43766)](https://explorer.ooni.org/measurement/20190730T171129Z_AS43766_s8VVpwb5ViIizQrvb05yG5FebH0wfsR4igGJdTrJENlUpLktZ6?input=https:%2F%2Fwww.womenonweb.org%2F),
and [Saudi Telecom (AS25019)](https://explorer.ooni.org/measurement/20190904T212617Z_AS25019_Yuuq3yCL533hc63r2RV8QphzIqnNt2Ol9jeamUZ2XoaEpehUB8?input=https:%2F%2Fwww.womenonweb.org%2F)),
indicating that the site was blocked. Only HTTPS requests are failing,
though, likely indicating the presence of some Deep Packet Inspection
(DPI) technology looking at the SNI field of the TLS handshake. It’s
worth noting though that access to womenonweb.org is not blocked on all
networks in Saudi Arabia, as measurements collected from Bayanat Al-Oula
(AS35819) showed that it was
[accessible](https://explorer.ooni.org/measurement/20190707T020855Z_AS35819_hGVfwBT04Qb9fiCuf4n38ujA8JtWCM2fFsUAOjomq8CtN0Jufd?input=http:%2F%2Fwww.womenonweb.org%2F)
in July 2019.

Google analytics (shared by Women on Web) show that 51,257 visitors from
Saudi Arabia visited womenonweb.org between 1st January 2019 to 25th
October 2019, compared to 102,679 visitors between 1st January 2016 to
25th October 2016.

## South Korea

Abortion is illegal in South Korea, as its laws only [permit abortion on the basis of health or therapeutic grounds](https://reproductiverights.org/worldabortionlaws?country=KOR),
particularly in cases of rape, incest, and fetal impairment. Though
earlier this year, South Korea’s [consitutional court ruled the abortion ban unconstitutional](https://www.bbc.com/news/world-asia-47890065) and
ordered that the country’s abortion law must be revised by the end of
2020.

OONI measurements collected from South Korea over the last year show
that access to [womenonweb.org was blocked](https://explorer.ooni.org/measurement/20190904T231144Z_AS17858_1VTT4wrclVtyxlLFT1mcDVdaPKOcphUriWRSEYMkzEarObHirb?input=https:%2F%2Fwww.womenonweb.org%2F),
while access to [womeonwaves.org was accessible](https://explorer.ooni.org/measurement/20190904T231144Z_AS17858_1VTT4wrclVtyxlLFT1mcDVdaPKOcphUriWRSEYMkzEarObHirb?input=https:%2F%2Fwww.womenonwaves.org%2F),
as illustrated below.

![Chart: Testing WoW in South Korea](/post/2019-blocking-abortion-rights-websites-women-on-waves-web/kr-chart.png)

**Source:** [OONI measurements: South Korea](https://explorer.ooni.org/country/KR)

We can confirm the blocking of womenonweb.org in South Korea because a
[blockpage is served](https://explorer.ooni.org/measurement/20190821T015612Z_AS4766_3TARaozQtQWlOevwdk5oNoGVuFolzLf2dcQshJFzijVGjg2Hng?input=http%3A%2F%2Fwww.womenonweb.org%2F)
(for example, by [Korea Telecom (AS4766)](https://explorer.ooni.org/measurement/20190821T015612Z_AS4766_3TARaozQtQWlOevwdk5oNoGVuFolzLf2dcQshJFzijVGjg2Hng?input=http%3A%2F%2Fwww.womenonweb.org%2F)).
Through OONI measurements, we observe the consistent blocking of
womenonweb.org in South Korea from January 2019 to date.

On the other hand, almost all measurements collected from the testing of
womenonwaves.org on multiple networks in South Korea consistently show
that access to the site was
[accessible](https://explorer.ooni.org/measurement/20190904T231144Z_AS17858_1VTT4wrclVtyxlLFT1mcDVdaPKOcphUriWRSEYMkzEarObHirb?input=https:%2F%2Fwww.womenonwaves.org%2F)
over the last year.

Google analytics (shared by Women on Web) show that 52,366 visitors from
South Korea visited womenonweb.org between 1st January 2019 to 25th
October 2019, compared to 70,098 visitors during the same months in
2018.

## Turkey

Abortion in Turkey is [legal until the 10th week](https://reproductiverights.org/worldabortionlaws?country=TUR)
after the conception, and can be extended if the life of the woman or
the fetus is endangered. Even though the abortion procedure is legal in
Turkey, it has been
[reported](https://www.dw.com/en/turkeys-women-face-dangerous-conditions-to-obtain-legal-abortion/a-47257680)
that in reality there is a de facto ban.

OONI measurements collected from Turkey suggest potential blocking of
both womenonwaves.org and womeonweb.org, but access to the sites doesn’t
appear to be consistently interfered with.

![Chart: Testing WoW in Turkey](/post/2019-blocking-abortion-rights-websites-women-on-waves-web/tr-chart.png)

**Source:** [OONI measurements: Turkey](https://explorer.ooni.org/country/TR)

Several OONI measurements (spread out across the testing period) for
[womenonwaves.org](https://explorer.ooni.org/measurement/20190612T000245Z_AS9121_XfrExgcGm0yIVI0pFbrh0qteeM1kUhKqOiVOPmACrLGWpucThG?input=https%3A%2F%2Fwww.womenonwaves.org%2F)
and
[womenonweb.org](https://explorer.ooni.org/measurement/20190619T170849Z_AS9121_51FRUxXFFlYPNxCceo8j0iwmXCJ4erOLkJiR9WQlSrBTpvTMl7?input=https%3A%2F%2Fwww.womenonweb.org%2F)
show that interception is happening at the DNS level, strongly
indicating some intention of blocking. Specifically, this is evident
through the following five measurements:

* `https://explorer.ooni.io/measurement/20190619T170849Z_AS9121_51FRUxXFFlYPNxCceo8j0iwmXCJ4erOLkJiR9WQlSrBTpvTMl7?input=https%3A%2F%2Fwww.womenonweb.org%2F`

* `https://explorer.ooni.io/measurement/20190411T005923Z_AS9121_WyRyoZ29uSwlpT7gyCmP3OPlKPgoRyygLQcFlH0oReG0jNXDyO?input=https%3A%2F%2Fwww.womenonweb.org%2F`

* `https://explorer.ooni.io/measurement/20190512T071840Z_AS9121_QeN5I8txa4PpbM9qUi8snzo6VbyvZUIVIsea0xzZT5U8VGXdfP?input=https%3A%2F%2Fwww.womenonwaves.org%2F`

* `https://explorer.ooni.io/measurement/20190612T000245Z_AS9121_XfrExgcGm0yIVI0pFbrh0qteeM1kUhKqOiVOPmACrLGWpucThG?input=https%3A%2F%2Fwww.womenonwaves.org%2F`

* `https://explorer.ooni.io/measurement/20190704T173715Z_AS9121_WQh7RAsWDKnUUlNEJVKQ4aDeyZGbytZKqFFsjkHttp207LZMKZ?input=https%3A%2F%2Fwww.womenonweb.org%2F`

Through these measurements, we can see that queries for womenonwaves.org
result in an answer pointing to 213.14.227.50, which is an IP address
associated with a Turkish ISP.

Below we share the relevant whois record for it:

```

inetnum: 213.14.227.0 - 213.14.227.255

netname: ERISIMSAGLAYICILARIBIRLIGI-NET

descr: ERI?IM SA?LAY?C?LAR? BIRLI?I

country: TR

admin-c: CK3925-RIPE

tech-c: CK3925-RIPE

status: ASSIGNED PA

mnt-by: MNT-TELLCOM

created: 2015-01-19T12:26:52Z

last-modified: 2015-01-19T12:26:52Z

source: RIPE # Filtered

person: Cemil Karan

remarks: ttnet_as

address: remzi oguz arih mah ataturk cad no 193 cankaya ankara

phone: +905439628686

nic-hdl: CK3925-RIPE

mnt-by: AS9121-MNT

created: 2015-01-05T15:05:59Z

last-modified: 2015-01-05T15:05:59Z

source: RIPE # Filtered

% Information related to '213.14.227.0/24AS200967'

route: 213.14.227.0/24

descr: ERISIM SAGLAYICILARI BIRLIGI

origin: AS200967

mnt-by: SOL-NET

created: 2015-04-09T13:22:22Z

last-modified: 2015-04-09T13:22:22Z

source: RIPE

% Information related to '213.14.227.0/24AS34984'

route: 213.14.227.0/24

descr: Tellcom Main Network Statement

origin: AS34984

mnt-by: MNT-TELLCOM

mnt-routes: MNT-TELLCOM

created: 2015-01-19T19:55:43Z

last-modified: 2015-01-19T19:55:43Z

source: RIPE
```

Since the URL was tested with HTTPS, we are unable to retrieve a
blockpage. The TLS handshake fails early during certificate validation
and therefore we do not retrieve the content of the tested page.

But by doing an HTTP based test using curl (even from outside of
Turkey), we are able to verify that when we pass the
`www.womenonwaves.org` Host header in a request to that IP address, we
are given a blockpage, as demonstrated below.

`curl -H 'Host:www.womenonwaves.org' 213.14.227.50`

```
<html><head><meta content="text/html; charset=UTF-8" http-equiv="Content-Type" /><meta content="matched-by-esb" name="status" /><title>Erişim Sağlayıcıları Birliği</title></head><body bgcolor="white"><div id="esb"><div id="457803312"></div></div><table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="1024"><tbody><tr><td style="height: 100%;width: 100%;padding-top: 20px;border-bottom-width: 1px;border-bottom-style: dotted;border-bottom-color: #DDCCFE;padding-bottom: 10px;text-align: center;"><span style="font-family:Georgia,Times,serif;font-size:12px;line-height:140%;font-weight:normal;color:#666666;text-decoration:none;">Bu internet sitesi <span style="font-family:Verdana,Times,serif;font-size:12px;line-height:140%;font-weight:normal;color:#6565FF;text-decoration:none;padding-bottom:10px;">(www.womenonwaves.org)</span><br />aşağıdaki karara istinaden 5651 sayılı Kanun uyarınca Erişim Sağlayıcıları Birliği tarafından erişime engellenmiştir.<br /><br /><table style="align: center;"><tbody><tr><td style="text-align: justify;"><span style="font-family:Georgia,Times,serif;font-size:12px;line-height:140%;font-weight:normal;color:#666666;text-decoration:none;">*</span></td><td style="text-align: justify;"><span style="font-family:Georgia,Times,serif;font-size:12px;line-height:140%;font-weight:normal;color:#666666;text-decoration:none;"><span style="font-family:Verdana,Times,serif;font-size:12px;line-height:140%;font-weight:normal;color:#6565FF;text-decoration:none;padding-bottom:10px;">SAĞLIK BAKANLIĞI TÜRKİYE İLAÇ VE TIBBİ CİHAZ KURUMU</span>'nin <span style="font-family:Verdana,Times,serif;font-size:12px;line-height:140%;font-weight:normal;color:#6565FF;text-decoration:none;padding-bottom:10px;">07-04-2017</span> tarih ve <span style="font-family:Verdana,Times,serif;font-size:12px;line-height:140%;font-weight:normal;color:#6565FF;text-decoration:none;padding-bottom:10px;">61762938-000-E.78048</span> sayılı kararı </span></td></tr></tbody></table></span></td></tr></tbody></table></body></html>
```

What is unclear, though, is why this type of blocking does not happen
consistently across all measurements, but only affects a very small set
of measurements.

Our findings are corroborated by [Censored Planet satellite data](/post/2019-blocking-abortion-rights-websites-women-on-waves-web/20191025-censored-planet-satellite_womenonw-eb-aves.csv.zip), which also shows
that the IP address 213.14.227.50 is used by the Turkish ISP to
implement blocking for www.womenonwaves.org and www.womenonweb.org (as
well as for these other websites: verystream.com, openload.co,
imgur.com, streamango.com).

Google analytics (shared by Women on Web) show that 10,878 visitors from
Turkey visited womenonweb.org between 1st January 2019 to 25th October
2019, compared to 170,347visitors during the same months in 2016. Google
analytics also show that 10,942 visitors from Turkey visited
womenonwaves.org between 1st January 2019 to 25th October 2019, compared
to 141,862 visitors during the same months in 2016.

# Censored on social media platforms

Apart from the blocking of their sites in several countries, Women on
Waves and Women on Web have reportedly also experienced other forms of
censorship as well.

In May 2017, Women on Web
[tweeted](https://twitter.com/abortionpil/status/862935024705863680)
that their Facebook page was unpublished. Facebook [reportedly censored the Women on Web page](https://www.theguardian.com/technology/2017/may/11/facebook-women-on-web-censored-abortion-pills)
(which helped women obtain abortion pills) citing its policy against the
“promotion or encouragement of drug use”. Their page though was only
temporarily unpublished, as [Facebook restored access](https://twitter.com/abortionpil/status/862989857446035457) to
it soon thereafter.

This was not the first time that Women on Web experienced censorship on
Facebook. In January 2012, [Facebook deleted an image](https://rewire.news/article/2012/01/02/facebook-censors-information-on-misoprostol/)
from the page of Dr. Rebecca Gomperts (the founder and director of Women
on Web) which consisted of text instructions on how to safely induce an
abortion using medication.

In addition to Facebook censorship, Women on Web have reportedly
experienced censorship by Twitter and YouTube as well. In January 2015,
[Twitter temporarily disabled the possibility to link to womenonweb.org](https://www.womenonwaves.org/en/page/5343/twitter-censorship-online-abortion-service-women-on-web)
or to tweet a link to the website. In January 2018, [YouTube temporarily removed the video channels from Women on Waves and Women on Web](https://www.womenonwaves.org/en/page/7044/youtube-censors-lifesaving-abortion-information),
both of which contained animations with information about safe ways to
do an abortion with medicine.

# Conclusion

Our analysis of all [OONI measurements](https://explorer.ooni.org/)
collected globally on the testing of womenonwaves.org and womeonweb.org
from 1st January 2019 onwards suggest that womeononwaves.org is blocked
in Brazil and Iran, womenonweb.org is blocked in Saudi Arabia and South
Korea, while both sites presented signs of blocking in Turkey.

Our findings are summarized in the following table.

| Country      | Women on Waves | Women on Web |
|--------------|----------------|--------------|
| Brazil       | [Blocked](https://explorer.ooni.org/measurement/20191014T012930Z_AS28573_OMGOO3qgceIpj8sCZTmrQa6WQVzUhpuBCP2XlT56og7cmjPpKv?input=https://www.womenonwaves.org/)        | [Accessible](https://explorer.ooni.org/measurement/20191014T172125Z_AS18881_o6v9rNVUOVjVq1XBEin6micHJhv7mX3fwteIPzsToLvSMMo4d1?input=https://www.womenonweb.org/)   |
| Iran         | [Blocked](https://explorer.ooni.org/measurement/20190916T184742Z_AS31549_01PnKsyo4c5wN5ZvzsX5UjRZqfmQnQdlHB8NklZVKjkB547xGo?input=http://www.womenonwaves.org/)        | [Accessible](https://explorer.ooni.org/measurement/20190904T211023Z_AS50810_5OF6OUqsPQg7dJJUbhaSBsDmwCU0k2cLg7oqyzcKsdazS4u4mO?input=https:%2F%2Fwww.womenonweb.org%2F)   |
| Saudi Arabia | [Accessible](https://explorer.ooni.org/measurement/20190829T121954Z_AS39891_KBC1nSlB2eqaZTrjkQO6jyCJGyoRaLykxS37CHhuV2llLYcHbV?input=https:%2F%2Fwww.womenonwaves.org%2F)     | [Blocked](https://explorer.ooni.org/measurement/20190904T212617Z_AS25019_Yuuq3yCL533hc63r2RV8QphzIqnNt2Ol9jeamUZ2XoaEpehUB8?input=https:%2F%2Fwww.womenonweb.org%2F)      |
| South Korea  | [Accessible](https://explorer.ooni.org/measurement/20190904T231144Z_AS17858_1VTT4wrclVtyxlLFT1mcDVdaPKOcphUriWRSEYMkzEarObHirb?input=https:%2F%2Fwww.womenonwaves.org%2F)     | [Blocked](https://explorer.ooni.org/measurement/20190904T231144Z_AS17858_1VTT4wrclVtyxlLFT1mcDVdaPKOcphUriWRSEYMkzEarObHirb?input=https:%2F%2Fwww.womenonweb.org%2F)      |
| Turkey       | [Blocked](https://explorer.ooni.org/measurement/20190612T000245Z_AS9121_XfrExgcGm0yIVI0pFbrh0qteeM1kUhKqOiVOPmACrLGWpucThG?input=https%3A%2F%2Fwww.womenonwaves.org%2F)        | [Blocked](https://explorer.ooni.org/measurement/20190816T114701Z_AS16135_SQpnOVp2KZ6nDAijOLF2rqqB8E7mjSzWeaaOi6D6LPWIDL9qs4?input=https:%2F%2Fwww.womenonweb.org%2F)      |

We can confirm the [blocking of womenonwaves.org in Iran](https://explorer.ooni.org/measurement/20190916T184742Z_AS31549_01PnKsyo4c5wN5ZvzsX5UjRZqfmQnQdlHB8NklZVKjkB547xGo?input=http://www.womenonwaves.org/)
and the [blocking of womenonweb.org in South Korea](https://explorer.ooni.org/measurement/20190821T015612Z_AS4766_3TARaozQtQWlOevwdk5oNoGVuFolzLf2dcQshJFzijVGjg2Hng?input=http%3A%2F%2Fwww.womenonweb.org%2F),
because blockpages were served in both cases. Our measurement analysis
also suggests [blocking of womenonwaves.org in Brazil](https://explorer.ooni.org/measurement/20191014T012930Z_AS28573_OMGOO3qgceIpj8sCZTmrQa6WQVzUhpuBCP2XlT56og7cmjPpKv?input=https://www.womenonwaves.org/)
and [blocking of womenonweb.org in Saudi Arabia](https://explorer.ooni.org/measurement/20190904T212617Z_AS25019_Yuuq3yCL533hc63r2RV8QphzIqnNt2Ol9jeamUZ2XoaEpehUB8?input=https:%2F%2Fwww.womenonweb.org%2F).
Several OONI measurements collected from Turkey for
[womenonwaves.org](https://explorer.ooni.org/measurement/20190612T000245Z_AS9121_XfrExgcGm0yIVI0pFbrh0qteeM1kUhKqOiVOPmACrLGWpucThG?input=https%3A%2F%2Fwww.womenonwaves.org%2F)
and
[womenonweb.org](https://explorer.ooni.org/measurement/20190619T170849Z_AS9121_51FRUxXFFlYPNxCceo8j0iwmXCJ4erOLkJiR9WQlSrBTpvTMl7?input=https%3A%2F%2Fwww.womenonweb.org%2F)
show that interception is happening at the DNS level, strongly
indicating intentional blocking.

As this study was carried out through the use of [free and open source software](https://github.com/ooni), [open methodologies](https://ooni.org/docs/), and [open data](https://ooni.org/data/), it can potentially be reproduced and
expanded upon.

To monitor the accessibility of womenonwaves.org and womeonweb.org in
your country:

1.  Install the [OONI Probe mobile app](https://ooni.org/install/)

2.  Open this [OONI Run link](https://run.ooni.io/nettest?tn=web_connectivity&ta=%7B%22urls%22%3A%5B%22https%3A%2F%2Fwww.womenonwaves.org%2F%22%2C%22https%3A%2F%2Fwww.womenonweb.org%2F%22%5D%7D&mv=1.2.0) with your OONI Probe mobile app (not with a web browser)

3.  Tap “Run” to test womenonwaves.org and womeonweb.org (ensure your VPN is turned-off)

You will then find the results in the Test Results section of your OONI
Probe mobile app. The results will also automatically be published on
[OONI Explorer](https://explorer.ooni.org/) within 24 hours (unless if
you disable publication in the app settings).

To coordinate further testing around the world, share the aforementioned
[OONI Run link](https://run.ooni.io/nettest?tn=web_connectivity&ta=%7B%22urls%22%3A%5B%22https%3A%2F%2Fwww.womenonwaves.org%2F%22%2C%22https%3A%2F%2Fwww.womenonweb.org%2F%22%5D%7D&mv=1.2.0)
with other OONI Probe users. To circumvent the blocks, use [Tor Browser](https://www.torproject.org/download/).
