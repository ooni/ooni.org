---
title: "The State of Internet Censorship in Thailand"
author: "Kay Yen Wong (Sinar Project), Maria Xynou (OONI), Arturo Filastò (OONI), Khairil Yusof (Sinar Project),Tan Sze Ming (Sinar Project), Thai Netizen Network"
date: "2017-03-20"
tags: ["thailand", "censorship", "research-report", "country-th", "theme-news_media", "theme-circumvention"]
categories: ["report"]
---

![Thailand block page](/post/thailand/thai-blockpage.png)

*Image: Block page in Thailand*

A research study by the Open Observatory of Network Interference (OONI), Sinar
Project, and the Thai Netizen Network.

**Table of contents**

* [Key Findings](#key-findings)

* [Introduction](#introduction)

* [Background](#background)

* [Network landscape and internet penetration](#network-landscape-and-internet-penetration)

* [Legal environment](#legal-environment)

  * [Freedom of expression](#freedom-of-expression)

  * [Press freedom](#press-freedom)

  * [Access to information](#access-to-information)

  * [Privacy](#privacy)

  * [Censorship and surveillance](#censorship-and-surveillance)

* [Reported cases of internet censorship and surveillance](#reported-cases-of-internet-censorship-and-surveillance)

* [Examining internet censorship in Thailand](#examining-internet-censorship-in-thailand)

  * [Methodology](#methodology)

    * [Review of the Citizen Lab's Thai test list](#review-of-the-citizen-labs-thai-test-list)

    * [OONI network measurements](#ooni-network-measurements)

      * [Web Connectivity test](#web-connectivity-test)

      * [HTTP Invalid Request Line test](#http-invalid-request-line-test)

      * [HTTP Header Field Manipulation test](#http-header-field-manipulation-test)

      * [Vanilla Tor test](#vanilla-tor-test)

      * [WhatsApp test](#whatsapp-test)

      * [Facebook Messenger test](#facebook-messenger-test)

  * [Data analysis](#data-analysis)

* [Findings](#findings)

    * [News Media](#news-media)

    * [Anonymity and censorship circumvention](#anonymity-and-censorship-circumvention)

    * [Pornography](#pornography)

  * [Acknowledgement of limitations](#acknowledgement-of-limitations)

* [Conclusion](#conclusion)

* [Acknowledgements](#acknowledgements)

**Country:** Thailand

**Probed ISPs:** Triple-T Internet (AS45758),  True Internet Co. Ldt (AS17552),
JasTel Network International Gateway (AS45629),  Realmove Company Limited
(AS132061), Advanced Wireless Network Company Limited (AS131445), Symphony
Communication (Thailand) PLC. (AS132280), AIS Fibre (AS133481), TOT Public
Company Limited (AS23969), Total Access Communication PLC. (AS24378), CAT
TELECOM Public Company Ldt. (AS131090), UIH/ BB Broadband (AS38794), TRUE
INTERNET Co., Ldt. (AS7470), SBN-ISP/AWN-ISP, maintained by Advanced Wireless
Network Company Limited (AS45458), DTAC Broadband (AS132032), The Communication
Authority of Thailand, CAT (AS9931), TOT Public Company Limited (AS56120).

**OONI tests:** Web Connectivity, HTTP Invalid Request Line, HTTP Header Field
Manipulation, Vanilla Tor, WhatsApp, Facebook Messenger.

**Testing period:** 6th November 2016 - 27th February 2017.

**Censorship method:** DNS hijacking, HTTP transparent proxies (delivering block pages).

# Key Findings

New [OONI data](https://api.ooni.io/files/by_country/TH)
reveals the blocking of **13 websites** in Thailand across 6 different ISPs, between
6th November 2016 and 27th February 2017. Thai ISPs appear to primarily be
implementing censorship through DNS hijacking and through the use of middle boxes (HTTP transparent
proxies) which serve block pages.

The blocked sites include:

* **News outlets** (nypost.com and dailymail.co.uk)

* **Wikileaks.org**

* **Anonymity and censorship circumvention tool sites** (e.g. hotspotshield.com)

* Pornography

Since these sites were not found to be blocked across all 16 ISPs where tests
were run, service providers in Thailand may be in a position to filter online
content at their own discretion.

WhatsApp, Facebook Messenger, and the [Tor network](https://www.torproject.org/)
appear to have been
[accessible](https://api.ooni.io/files/by_country/TH)
across all tested networks throughout the testing period. Previously blocked
sites, such as prachatai.com, were also found to be [accessible](https://explorer.ooni.org/measurement/20170223T005210Z_AS45758_CCQCtyEmEwYl3Q2TikmZVaLlzr3Y4XpTjy4wyWMsQfSB3d90yT?input=http:%2F%2Fprachatai.com%2Fenglish%2F).

# Introduction

Multiple censorship events in Thailand have been reported over the last decade.
More than 10,000 URLs were [reportedly blocked](https://thainetizen.org/wp-content/uploads/2013/11/netizen-report-2011-en.pdf) in 2010 on the grounds of
national security. Further restrictions on freedom of speech and the press
appear to have taken place following Thailand’s most recent coup d’etat, as
[reported by the Citizen Lab](https://citizenlab.org/2014/07/information-controls-thailand-2014-coup/) which found 56 websites to be blocked between May
to June 2014. Independent news outlets, such as
[Prachatai](http://www.prachatai.com/), have also been
[blocked](https://thainetizen.org/wp-content/uploads/2013/11/netizen-report-2011-en.pdf) in the past.

In an attempt to examine the current state of internet censorship in Thailand,
the [Open Observatory of Network Interference (OONI)](https://ooni.org/), [Sinar Project](http://sinarproject.org/)
and the [Thai Netizen Network](https://thainetizen.org/) collaborated on a joint
study to examine whether internet censorship events were persisting in the
country through the collection and analysis of network measurements.

The aim of this study is to increase transparency of internet controls in
Thailand and to collect data that can potentially corroborate rumours and
reports of internet censorship events. The following sections of this report
provide information about Thailand’s network landscape and internet penetration
levels, its legal environment with respect to freedom of expression, access to
information and privacy, as well as about cases of censorship and surveillance
that have previously been reported in the country. The remainder of the report
documents the methodology and key findings of this study.

# Background

Thailand is a [constitutional monarchy](https://www.cia.gov/library/publications/the-world-factbook/geos/th.html) in Southeast Asia with a population of around
[68 million](https://www.cia.gov/library/publications/the-world-factbook/geos/th.html). Geographically, it is bordered to the north by Myanmar
and Laos, to the east by Laos and Cambodia, to the south by the Gulf of Thailand
and Malaysia, and to the west by the Andaman Sea.

The majority of Thailand’s [population](https://www.cia.gov/library/publications/the-world-factbook/geos/th.html) is made up by the Thais (95.9%), the Burmese
(2%), and the remaining 1.3% constituting of other ethnic groups. Thailand’s
official religion is Buddhism with 93.6% of its population identifying as
Buddhists. Muslims constitute the second largest religious group (4.9%),
followed by Christians (1.2%).

Historically, Thailand has had a strong economy due to its free-enterprise
economy, well-developed infrastructure and generally pro-investment policies.
However, it has experienced [slow growth](https://www.cia.gov/library/publications/the-world-factbook/geos/th.html) from 2013 to 2015 as a result of its domestic political
turmoil. Thailand ranked low in the [2016 Corruption Perceptions Index](http://www.transparency.org/news/feature/corruption_perceptions_index_2016), ranking 101
out of 176. Human rights violations and systematic denial of basic rights such
as freedom of expression, association, and assembly, [occurred with regularity during the military junta’s rule](https://www.hrw.org/asia/thailand) of the
country since 2014.

Politically, Thailand is a constitutional monarchy where the Prime Minister is
the head of government and a hereditary monarch is the head of state. However,
Thailand has oscillated between being ruled by a parliamentary democracy and
military junta for decades, with the [latest military coup](http://www.bbc.com/news/world-asia-27517591) being in May 2014 in which
the army chief, General Prayut Chan-o-cha, was elected as Prime Minister and the
National Council for Peace and Order (NCPO) was established.

Unlike previous coups, there have been significant delays in the return to
civilian rule. Promises had been made by the NCPO to hold [new elections](http://thediplomat.com/2016/08/after-constitution-referendum-what-next-for-thailand/) only after a new constitution was enacted. However, the
[general elections have repeatedly been delayed](https://d2071andvip0wj.cloudfront.net/274-thailand-s-lengthening-roadmap-to-elections.pdf) by events such as the rejection of the initial draft
by government officials in 2015, issues of succession to the throne of Thailand
following the Thai monarch’s death at the end of 2016, and the newly crowned
King Vajiralongkorn’s [refusal to put the new constitution into effect](https://www.usnews.com/news/best-countries/articles/2017-02-03/thailands-king-rama-x-moves-the-country-away-from-a-constitutional-monarchy)
until amendments were made. Such [proposed provisions](http://theconversation.com/seeking-more-power-thailands-new-king-is-moving-the-country-away-from-being-a-constitutional-monarchy-71637) would be
aimed at expanding his powers, from allowing him to spend time abroad without
the appointment of a regent, to absolving the need for a countersignature on all
royal acts which would give him the disproportionate power of signing executive
orders and decrees individually. Currently, general elections in Thailand are
[expected to be held in mid-2018](http://www.gmanetwork.com/news/story/595753/news/world/thai-parliament-approves-king-s-constitutional-changes-request-likely-delaying-elections).

# Network landscape and internet penetration

The Thai government has long held expansive control over the internet,
largely facilitated by its various relationships with Internet Service
Providers (ISPs) and telecommunication companies. Amongst more than ten
International Internet Gateways (IIGs) in the country, [CAT and TOT,both state-owned, are still two of the largest](http://internet.nectec.or.th/webstats/internetmap.current.iir?Sec=internetmap_current).
Former politicians, military officers, or members of their families also
[hold key positions](http://www.mergermarket.com/pdf/CapitalProfileSpecialReport_ThaiFamilyPoliticalAffiliations%20(2).pdf)
in large telecommunication companies. Under telecommunication law, all
service providers are subjected to license suspensions or revocation if
found not cooperating with the regulator in law enforcement, which
also includes [network shutdowns](http://www.bangkokpost.com/news/general/1204333/dsi-cuts-off-internet-phone-communication-around-temple).
More frequently, ISPs are asked
[“informally”](http://tilleke.com/sites/default/files/2015_Sep_ICLG_Telecoms_Media_Internet_Thailand.pdf)
to block certain content.

The internet and mobile service providers of Thailand are a mix of state-owned
companies and private operators. The three fixed line operators in Thailand are
True Corporation, TT&T, and the state-owned TOT. The number of fixed lines is
gradually declining with the expansion of mobile phone services in Thailand
which have experienced significant growth with market penetration peaking at
[146%](https://www.budde.com.au/Research/Thailand-Telecoms-Mobile-Broadband-and-Digital-Media-Statistics-and-Analyses) in 2014, and declining to 128% in 2016
due to market consolidation. The three major private mobile carriers are AIS,
DTAC, and TrueMove.

| Mobile Operators/ISPs                                           | Fixed Internet | Mobile Internet |
|-----------------------------------------------------------------|----------------|-----------------|
| True Corporation                                                | X              | X               |
| 3BB                                                             | X              |                 |
| Telephone Organization of Thailand Public Company Limited (TOT) | X              | X               |
| Advanced Info Service Public Company Limited (AIS)              | X              | X               |
| DTAC                                                            | X              | X               |
| CAT Telecom                                                     | X              | X               |
| TT&T Public Company Limited                                     | X              | X               |

As of 2016, [60.1%](http://www.internetworldstats.com/asia/th.htm) of Thailand’s
population has access to the internet. According to the [2016 Thai Information and Communication Technology Survey in Household](http://web.nso.go.th/en/survey/ict/data_ict/Executive_Summary_2016.pdf), there were 32.3% computer users,
47.5% internet users and 81.4% mobile phone users from a population of 62.8
million aged 6 years and up in 2016. Most Thai internet and smartphone users
reside in municipal areas, which have a higher average household income. The
[proportion in internet use](http://web.nso.go.th/en/survey/ict/data_ict/Executive_Summary_2016.pdf) has
increased from 37.7% in 2012 to 57.4% in 2016 for municipal areas, and from
20.5% from 2012 to 39.5% in 2016 for non-municipal areas.

Social media is widely utilised in Thailand, with
[Bangkok](http://blogs.wsj.com/indonesiarealtime/2012/05/23/bangkok-tops-global-facebook-city-list/) topping the global Facebook users list by city, and Siam
Paragon, a shopping mall in Bangkok being the [most Instagrammed](https://www.techinasia.com/thailand-bangkok-mall-instagram-top-locations-2013) location on Earth. According to the [2016 Thai Information and Communication Technology Survey in Household](http://web.nso.go.th/en/survey/ict/data_ict/Executive_Summary_2016.pdf), 91.5% of internet users utilised the
internet for social networking.

Percentages of households with ICT devices from 2012 to 2016 are illustrated
below.

| Year | Households | Fixed Telephone (%) | Computer (%) | Internet (%) |
|------|------------|---------------------|--------------|--------------|
| 2012 | 20025.4    | 15.6                | 26.9         | 18.4         |
| 2013 | 20121.4    | 14                  | 28.7         | 23.5         |
| 2014 | 20564.7    | 14.4                | 33.9         | 34.7         |
| 2015 | 20642.9    | 12.3                | 29.5         | 52.2         |
| 2016 | 21367.2    | 12.2                | 28.4         | 59.8         |

*Source: [Thai Information and Communication Technology Survey in Household](http://web.nso.go.th/en/survey/ict/data_ict/Executive_Summary_2016.pdf)*

Of the households with internet access in 2016, 70.6% used mobile internet, and
23.3% utilised fixed broadband.

# Legal environment

## Freedom of expression

**Thailand Penal Code, Section 112 (Lèse-majesté)**

[Section 112 of the Thai Penal Code](http://library.siam-legal.com/thai-law/criminal-code-royal-family-sections-107-112/) penalises anyone who “defames, insults or
threatens the King, the Queen, the Heir-apparent or the Regent” with a
punishment of imprisonment of three to fifteen years. Lèse-majesté defendants
are routinely denied bail, and convictions often result in heavy sentences in
most cases. Lèse-majesté or defamation complaints can be lodged by any one
citizen against another, and such compliments always require formal
investigation from  authorities. This brings about the potential for abuse in
imposing systematic restrictions of information control to limit social
mobilisation around key political events.

On 2nd December 2016, BBC Thai [published a profile of Thailand’s new King](http://www.bbc.com/thai/thailand-38173269) which was shared widely on
social media. Some Thais criticized its content for being insulting to the new
king, and the Thai Ministry of Digital Economy [reportedly blocked](http://www.reuters.com/article/us-thailand-king-bbc-idUSKBN13W0FD) a
link to the profile on the BBC’s Thai website on the grounds of displaying
“inappropriate content”. Two months later, OONI tests found this site to be [accessible](https://explorer.ooni.org/measurement/20170206T004926Z_AS45758_nzYZYEAOUc6qkTBFlUenRfvOLIbvdFRVNGDS7PQqceR5PPpJ3u?input=http:%2F%2Fwww.bbc.com%2Fthai%2Fthailand-38173269) in tested networks, but it remains unclear how
long this site may have been blocked for. In December 2016, the police and some
soldiers subsequently visited the BBC’s office in Bangkok, and a Thai democracy
activist was [temporarily arrested](http://www.reuters.com/article/us-thailand-king-bbc-idUSKBN13W0FD) for sharing a link to the BBC profile.

**Computer Crime Act**

Article 14(1) of the [2007 Computer Crime Act (CCA)](http://itserv.ait.ac.th/helpdesk/announce/cc_laws_eng.pdf) penalises
individuals found to have uploaded content deemed to be "forged", "false", or
which is likely to "cause damage to a third party" with an imprisonment of up to
5 years along with a maximum fine of 100,000 Thai Baht. Such broad and ambiguous
language opens up the law to abuse. Article 14(1) of the CCA has long been
utilised against journalists, activists and internet users for content
considered to be damaging by government sanctioned authorities.

The [2017 amendment](https://thainetizen.org/docs/cybercrime-act-2017/)
to article 14(2) of the CCA broadens the scope, incriminating those
found guilty of uploading information that would “damage the maintenance
of national security, public safety, national economic security or
public infrastructure serving national’s public interest or cause panic
in the public”, and expanding the power authorities have in abusing a
person’s exercise of their protected right to freedom of expression.

**Internal Security Act 2008**

Under the [2008 Internal Security Act](https://en.wikisource.org/wiki/Internal_Security_Act,_BE_2551_(2008)), the
ISA would establish The Internal Security Operations Command (ISOC), a situation
monitoring center in every province which would have the authority to respond to
alleged threats to national security. The ISOC would be authorised to exercise
its powers with respect to situations affecting the national security where a
state of emergency has not been declared yet, bypassing the role of parliaments
and courts in reviewing or approving the necessity of such abuses of power.

## Press freedom

Press freedom in Thailand has been severely restricted post military coup
following the military junta’s creation of the National Council for Peace and
Order (NCPO) tasked with enforcing widespread censorship.

**NCPO Order 97/2014**

The NCPO announced [order 97/2014](https://globalfreedomofexpression.columbia.edu/updates/2015/05/thailand-the-revocation-of-license-to-broadcast-of-peace-tv/), "Cooperating
with the Work of the National Council for Peace and Order(NCPO) and the
Distribution of News to the Public" which prohibits publication or broadcast of
criticisms of the military authorities from print media, radio, TV, and online
media. The NCPO has sole discretion in determining what content falls within
prohibited categories. Violations of provisions in this announcement could
result in prosecution under the law, and the immediate suspension of the
publication or program.

**Article 5 of the Head NCPO Order 3⁄2015**

Under Article 5 of the Head NCPO Order 3⁄2015, NCPO officers are
authorised to issue orders prohibiting the distribution of press items,
or the sale of any publication or material that is deemed to have the
potential to cause public alarm, or which contains false information
likely to cause public misunderstanding, or which threatens public order
or national security.

## Access to information

**Official Information Act 1997**

The [1997 Official Information Act](http://www.thailawforum.com/database1/official-information-act.html) gives Thai citizens the right to request for the
disclosure of official government information from state agencies. However,
authorities have the right to reject requests for the disclosure of information
under Article 15 of the act, under unclear and overly broad reasons such as the
"decline in efficiency of law enforcement, risk to national security, and
endangerment of life or safety to any person”. Although citizens have the right
to appeal the rejection, appeals submitted to the committee take a long time to
be considered and process, making access difficult for citizens.

In addition, the Act does not cover information in the possession of private
entities, which has led to [ongoing disputes](https://www.article19.org/resources.php/resource/38143/en/the-right-to-information-in-thailandfor%20citizens.) over whether independent public
agencies such as the National Anti-Corruption Commission (NACC), the Office of
the Election Commission, and the Office of the Auditor General fall under the
scope of the Act.

## Privacy

**Constitution of the Kingdom of Thailand**

The 2007 [Constitution of the Kingdom of Thailand](https://www.unodc.org/tldb/pdf/Thailand_const_2007.pdf) provides
citizens with the right to privacy. Under Article 35 of the constitution, “A
person’s family rights, dignity, reputation or the right of privacy shall be
protected. The assertion or circulation of a statement or picture in any manner
whatsoever to the public, which violates or affects a person’s family rights,
dignity, reputation or the right of privacy, shall not be made except for the
case which is beneficial to the public”.

Following the 2014 military coup, an [interim constitution](http://asean-law.senate.go.th/files/Thailand_2014.pdf) was enacted, in which almost all of
the provisions of the original constitution were suspended. There is no longer
an explicit provision related to the right to privacy.

While there is no comprehensive general data protection law in Thailand,
personal data in the public sector is at some level protected by the
Official Information Act B.E. 2540 (1997) which obligates state agencies
to allow individuals to correct personal data that is maintained by the
agencies. Personal information in the private sector, such as credit
information, patient data, and telecommunication data, is regulated by
[sectoral laws](https://www.privacyinternational.org/node/750), like the 2008
Credit
Information Business Act, the 2007 National Health Act, and the 2006
Notification of the National Telecommunications Commission (on measures
to protect the rights of telecommunication consumers in the areas of
personal data, right to privacy, and freedom of communication via
telecommunication networks).

## Censorship and surveillance

**2017 Computer Crime Act, Article 20**

Under Article 20 of the [2017 Computer-related Crime Act (CCA)](https://thainetizen.org/docs/cybercrime-act-2017/), the
“Computer Data Screening Committee”, a 9 member panel appointed by the
government would have the power to suggest the court to suppress or
remove computer data that is “deemed to be a breach to the public order
or moral high ground of the people.” Due to the broadness of this
definition, this allows authorities to act as moral crusaders, giving
them a wide latitude to suppress online content that does not violate
any laws, but that they deem to be a breach of public morals.

**2017 Computer Crime Act, Article 18**

Articles 18(2) and 18(3) of the [2017 Computer Crime Act (CCA)](https://thainetizen.org/docs/cybercrime-act-2017/) would
allow user-related data and traffic data to be accessed by authorities without a
court order under probable cause to assist with investigations related to an
offense under the CCA or other laws.

Article 18(7) would allow authorities with a court order to compel service
providers in assisting with the decryption of encoded data, undermining the use
of encryption tools as a protection of user privacy.

# Reported cases of internet censorship and surveillance

Multiple cases of internet censorship and surveillance have been reported in
Thailand over the last decade. According to the Thai Netizen Network, [more than 10,000 URLs were blocked in 2010](https://thainetizen.org/wp-content/uploads/2013/11/netizen-report-2011-en.pdf) on the grounds of national
security, even though many of them expressed criticism towards the Abhisit
Vejjajiva administration. [Prachatai](http://www.prachatai.com/), an independent
news outlet, was amongst the many sites that were [blocked without transparency](https://thainetizen.org/wp-content/uploads/2013/11/netizen-report-2011-en.pdf).

Below we highlight a few cases of internet censorship and surveillance in
Thailand, as reported over the last few years.

**Censorship following Thailand’s 2014 military coup**

Thailand’s most recent May 2014 coup d’etat signaled further restrictions on
freedom of speech, association, and the press. According to network measurement
tests performed by the Citizen Lab between May to June 2014, [56 URLs were found to be blocked](https://citizenlab.org/2014/07/information-controls-thailand-2014-coup/).These sites included domestic independent news outlets,
international media critical of the coup, social media accounts sharing anti-
coup material, as well as censorship circumvention tools. Facebook was blocked
for approximately 40 minutes on 28th May 2014, possibly in an attempt to stop
the spread of anti-coup messages. A [report](https://privacyinternational.org/sites/default/files/thailand_2017_0.pdf) by Privacy International however suggests
that Facebook may have accidentally been blocked in an attempt to circumvent SSL
encryption which would direct traffic over unencrypted HTTP instead of HTTPS,
enabling government spying efforts.

Since the 2014 military coup, access to political and social content has
increasingly being blocked in Thailand on the grounds of national security and
lèse majesté, according to [Freedom House](https://freedomhouse.org/report/freedom-net/2016/thailand#_ftn65). The Royal Thai Police, the Communications
Authority of Thailand, and the Ministry of Information and Communication
Technology (MICT) have regularly arrested activists and internet users under
lèse majesté (Section 112 of the Thai Penal Code) for criticisms of the
monarchy, and Article 14 of the Computer Crime Act (CCA) which relates to
content deemed to affect “national security”, in addition to imposing systematic
restrictions of information control to limit social mobilisation around key
political events.

**Hacking Team Surveillance Software**

Leaked Hacking Team
[emails](https://wikileaks.org/hackingteam/emails/emailid/22429) in 2015
revealed that the Royal Thai Army and the Corrections Department of the Royal
Thai Police had [spent](https://thaipoliticalprisoners.wordpress.com/tag/hacking-team/) €286,482 and €360,000 respectively in 2014 to purchase a
surveillance program called Remote Control System (RCS) from Hacking Team, an
Italian spyware company. The spyware is designed to monitor the communications
of internet users, evade encryption and remotely collect information from a
target’s computer. In their correspondence, the National Security Council had
specifically [asked](https://wikileaks.org/hackingteam/emails/emailid/445665)
Hacking Team if their product was capable of targeting LINE, WeChat, and
WhatsApp (instant messaging apps used widely in Thailand).

**Microsoft’s assistance in Thai government surveillance by omission**

According to a Privacy International [report](https://privacyinternational.org/sites/default/files/thailand_2017_0.pdf), the Thai government has the potential
to misuse their root certificate and impersonate an intended website with a
falsified certificate to intercept apparently secure communications or for the
injection of false, malicious content such as malware. Microsoft was the
[only](https://crt.sh/?caid=13888) certificate authority entitled to sign a root
certificate that
[included](https://social.technet.microsoft.com/wiki/contents/articles/36275.microsoft-trusted-root-certificate-program-participants-as-of-november-17-2016.aspx) the Thai national root certificate in their OS and
browser by default.

A spokesperson from Microsoft
[defended](http://www.theinquirer.net/inquirer/news/3003315/microsoft-is-helping-thailand-s-military-government-to-spy-on-web-users-claims-privacy-international#disqus_thread) the decision, citing their “extensive review
process that includes regular audits from a third-party web trust auditor”.
Microsoft’s decision would leave Thai Windows users vulnerable to government
surveillance should the Thai government choose to misuse their root certificate.

**Technology Crime Suppression Division (TCSD)**

Aside from the use of surveillance technology, Thailand’s Information and
Communication Technology Ministry has dedicated human resources invested in the
monitoring of online activities, with a longstanding 30-person Technology Crime
Suppression Division (TCSD) team which scans online posts and follows up on
public complaints on cyber crimes and lèse-majesté content, [according to the former Minister of ICT](http://www.reuters.com/article/us-military-convictions-thailand-special-idUSKCN0R400X20150904) in August 2015.

**Cyber Scout program**

In another instance of state-sponsored surveillance, the Cyber Scout program,
initially launched in 2010 by the Ministry of Justice and Ministry of ICT was
aimed at recruiting and training students to monitor and report online content
that could be deemed as offensive, or a threat to national security,
particularly lèse-majesté content. The Cyber Scout program was
[reintroduced](https://asiancorrespondent.com/2014/08/thailand-junta-reactivates-cyber-scout-program-to-curb-online-dissent/) following the 2014
military coup with the Ministry of ICT cooperation with 200 schools, training
school children to restrict criticism and dissent by the military junta's
values. By 2015, the program had [recruited over 120,000 cyber scouts](https://freedomhouse.org/report/freedom-net/2016/thailand) nationwide,
spanning across 88 schools.

# Examining internet censorship in Thailand

The [Open Observatory of Network Interference (OONI)](https://ooni.org/), in collaboration with [Sinar Project](http://sinarproject.org/en) and the [Thai Netizen Network](https://thainetizen.org/), performed a study of internet censorship in
Thailand. The aim of this study was to understand whether and to what extent
censorship events occurred in Thailand during the testing period.

The sections below document the methodology and key findings of this study.

## Methodology

The methodology of this study, in an attempt to identify potential internet
censorship events in Thailand, included the following:

* Review of the Citizen Lab’s Thai test list

* OONI network measurements

* Data analysis

A [list of URLs](https://github.com/citizenlab/test-lists/blob/master/lists/th.csv) that are relevant and commonly accessed in
Thailand was created by the Citizen Lab in 2014 for the purpose of enabling
network measurement researchers to examine their accessibility in Thailand. As
part of this study, this list of URLs was reviewed to include additional URLs
which - along with [other URLs](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) that are commonly accessed around the world
- were tested for blocking based on [OONI’s free software tests](https://github.com/TheTorProject/ooni-probe). Such tests were run from
local vantage points in Thailand, and they also examined whether systems that
are responsible for censorship, surveillance and traffic manipulation were
present in the tested network. Once network measurement data was collected from
these tests, the data was subsequently processed and analyzed based on a set of
heuristics for detecting internet censorship and traffic manipulation.

The testing period for this study started on 6th November 2016 and concluded on
27th February 2017.

### Review of the Citizen Lab's Thai test list

An important part of identifying censorship is determining which websites to
examine for blocking.

OONI’s [software](https://github.com/TheTorProject/ooni-probe) (called
*OONI Probe*) is designed to examine URLs contained in specific lists (“test
lists”) for censorship. By default, OONI Probe examines the “[global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)”,
which includes a wide range of internationally relevant websites, most of which
are in English. These websites fall under [31 categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv), ranging from news media, file sharing and
culture, to provocative or objectionable categories, like pornography, political
criticism, and hate speech.

These categories help ensure that a wide range of different types of websites
are tested, and they enable the examination of the impact of censorship events
(for example, if the majority of the websites found to be blocked in a country
fall under the “human rights” category, that may have a bigger impact than other
types of websites being blocked elsewhere). The main reason why objectionable
categories (such as “pornography” and “hate speech”) are included for testing is
because they are more likely to be blocked due to their nature, enabling the
development of heuristics for detecting censorship elsewhere within a country.

In addition to testing the URLs included in the global test list, OONI Probe is
also designed to examine a test list which is specifically created for the
country that the user is running OONI Probe from, if such a list exists. Unlike
the global test list, [country-specific test lists](https://github.com/citizenlab/test-lists/tree/master/lists) include
websites that are relevant and commonly accessed within specific countries, and
such websites are often in local languages. Similarly to the global test list,
country-specific test lists include websites that fall under the same set of [31 categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv), as explained previously.

All test lists are hosted by the [Citizen Lab](https://citizenlab.org/) on
[GitHub](https://github.com/citizenlab/test-lists), supporting OONI and other
network measurement projects in the creation and maintenance of lists of URLs to
test for censorship. As part of this study, OONI reviewed the Citizen Lab’s test
list for Thailand by adding more URLs to be tested for censorship. Overall, [420 URLs](https://github.com/citizenlab/test-lists/blob/master/lists/th.csv) that
are relevant to Thailand were tested as part of this study. In addition, the
URLs included in the Citizen Lab’s [global list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) (including 1,105 different URLs) were
also tested.

It is important to acknowledge that the findings of this study are only limited
to the websites that were tested, and do not necessarily provide a complete view
of other censorship events that may have occurred during the testing period.

### OONI network measurements

The [Open Observatory of Network Interference (OONI)](https://ooni.org/) is a free software project that aims to
increase transparency of internet censorship around the world. Since 2012, OONI
has developed multiple [free and open source software tests](https://github.com/TheTorProject/ooni-probe) designed to examine the
following:

* Blocking of websites.

* Blocking of censorship circumvention tools (such as Tor).

* Blocking of instant messaging apps.

* Detection of systems responsible for censorship, surveillance, and traffic
manipulation.

As part of this study, the following [OONI software tests](https://github.com/TheTorProject/ooni-probe) were run from 16 different
local vantage points in Thailand:

* [Web connectivity](https://ooni.org/nettest/web-connectivity/)

* [HTTP invalid request line](https://ooni.org/nettest/http-invalid-request-line/)

* [HTTP header field manipulation](https://ooni.org/nettest/http-header-field-manipulation/)

* [Vanilla Tor](https://ooni.org/nettest/vanilla-tor/)

* [WhatsApp](https://ooni.org/nettest/whatsapp/)

* [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/)

The Web Connectivity test was run with the aim of examining whether a set of
URLs (included in both the “[global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)” and the recently updated “[Thai test list](https://github.com/citizenlab/test-lists/blob/master/lists/th.csv)”) were
blocked during the testing period and if so, how. The Vanilla Tor test was run
to examine the reachability of the [Tor network](https://www.torproject.org/),
while the [WhatsApp](https://ooni.org/nettest/whatsapp/) and
[Facebook Messenger](https://ooni.org/nettest/facebook-messenger/)
tests were run to examine whether these instant messaging apps were blocked in
Thailand during the testing period.

The HTTP invalid request line and HTTP header field manipulation tests were run
with the aim of examining whether “middle boxes” (systems placed in the network
between the user and a control server) that could potentially be responsible for
censorship and/or surveillance were present in the tested networks.

The sections below document how each of these tests are designed for the purpose
of detecting cases of internet censorship and traffic manipulation.

#### Web Connectivity test

This [test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/web_connectivity.py) examines whether
websites are reachable and if they are not, it attempts to determine whether
access to them is blocked through DNS tampering, TCP/IP blocking or by a
transparent HTTP proxy. Specifically, this test is designed to perform the
following:

* Resolver identification

* DNS lookup

* TCP connect

* HTTP GET request

By default, this test performs the above (excluding the first step, which is
performed only over the network of the user) both over a control server and over
the network of the user. If the results from both networks match, then there is
no clear sign of network interference; but if the results are different, the
websites that the user is testing are likely censored.

Further information is provided below, explaining how each step performed under
the web connectivity test works.

**1. Resolver identification**

The domain name system (DNS) is what is responsible for transforming a host name
(e.g. torproject.org) into an IP address (e.g. 38.229.72.16). Internet Service
Providers (ISPs), amongst others, run DNS resolvers which map IP addresses to
hostnames. In some circumstances though, ISPs map the requested host names to
the wrong IP addresses, which is a form of tampering.

As a first step, the web connectivity test attempts to identify which DNS
resolver is being used by the user. It does so by performing a DNS query to
special domains (such as whoami.akamai.com) which will disclose the IP address
of the resolver.

**2. DNS lookup**

Once the web connectivity test has identified the DNS resolver of the user, it
then attempts to identify which addresses are mapped to the tested host names by
the resolver. It does so by performing a DNS lookup, which asks the resolver to
disclose which IP addresses are mapped to the tested host names, as well as
which other host names are linked to the tested host names under DNS queries.

**3. TCP connect**

The web connectivity test will then try to connect to the tested websites by
attempting to establish a TCP session on port 80 (or port 443 for URLs that
begin with HTTPS) for the list of IP addresses that were identified in the
previous step (DNS lookup).

**4. HTTP GET request**

As the web connectivity test connects to tested websites (through the previous
step), it sends requests through the HTTP protocol to the servers which are
hosting those websites. A server normally responds to an HTTP GET request with
the content of the webpage that is requested.

**Comparison of results: Identifying censorship**

Once the above steps of the web connectivity test are performed both over a
control server and over the network of the user, the collected results are then
compared with the aim of identifying whether and how tested websites are
tampered with. If the compared results do not match, then there is a sign of
network interference.

Below are the conditions under which the following types of blocking are
identified:

* **DNS blocking:** If the DNS responses (such as the IP addresses mapped to host
names) do not match.

* **TCP/IP blocking:** If a TCP session to connect to websites was not established
over the network of the user.

* **HTTP blocking:** If the HTTP request over the user’s network failed, or the HTTP
status codes don’t match, or all of the following apply:

1. The body length of compared websites (over the control server and the network of
the user) differs by some percentage

2. The HTTP headers names do not match

3. The HTML title tags do not match

It’s important to note, however, that DNS resolvers, such as Google or a local
ISP, often provide users with IP addresses that are closest to them
geographically. Often this is not done with the intent of network tampering, but
merely for the purpose of providing users with localized content or faster
access to websites. As a result, some false positives might arise in OONI
measurements. Other false positives might occur when tested websites serve
different content depending on the country that the user is connecting from, or
in the cases when websites return failures even though they are not tampered
with.

#### HTTP Invalid Request Line test

This [test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/manipulation/http_invalid_request_line.py) tries
to detect the presence of network components (“middle box”) which could be
responsible for censorship and/or traffic manipulation.

Instead of sending a normal HTTP request, this test sends an invalid HTTP
request line - containing an invalid HTTP version number, an invalid field count
and a huge request method – to an echo service listening on the standard HTTP
port. An echo service is a very useful debugging and measurement tool, which
simply sends back to the originating source any data it receives. If a middle
box is not present in the network between the user and an echo service, then the
echo service will send the invalid HTTP request line back to the user, exactly
as it received it. In such cases, there is no visible traffic manipulation in
the tested network.

If, however, a middle box is present in the tested network, the invalid HTTP
request line will be intercepted by the middle box and this may trigger an error
and that will subsequently be sent back to OONI’s server. Such errors indicate
that software for traffic manipulation is likely placed in the tested network,
though it’s not always clear what that software is. In some cases though,
censorship and/or surveillance vendors can be identified through the error
messages in the received HTTP response. Based on this technique, OONI has
previously [detected](https://explorer.ooni.org/highlights/) the use
of BlueCoat, Squid and Privoxy proxy technologies in networks across multiple
countries around the world.

It’s important though to note that a false negative could potentially occur in
the hypothetical instance that ISPs are using highly sophisticated censorship
and/or surveillance software that is specifically designed to not trigger errors
when receiving invalid HTTP request lines like the ones of this test.
Furthermore, the presence of a middle box is not necessarily indicative of
traffic manipulation, as they are often used in networks for caching purposes.

#### HTTP Header Field Manipulation test

This [test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/manipulation/http_header_field_manipulation.py)
also tries to detect the presence of network components (“middle box”) which
could be responsible for censorship and/or traffic manipulation.

HTTP is a protocol which transfers or exchanges data across the internet. It
does so by handling a client’s request to connect to a server, and a server’s
response to a client’s request. Every time a user connects to a server, the user
(client) sends a request through the HTTP protocol to that server. Such requests
include “HTTP headers”, which transmit various types of information, including
the user’s device operating system and the type of browser that is being used.
If Firefox is used on Windows, for example, the “user agent header” in the HTTP
request will tell the server that a Firefox browser is being used on a Windows
operating system.

This test emulates an HTTP request towards a server, but sends HTTP headers that
have variations in capitalization. In other words, this test sends HTTP requests
which include valid, but non-canonical HTTP headers. Such requests are sent to a
backend control server which sends back any data it receives. If OONI receives
the HTTP headers exactly as they were sent, then there is no visible presence of
a “middle box” in the network that could be responsible for censorship,
surveillance and/or traffic manipulation. If, however, such software is present
in the tested network, it will likely normalize the invalid headers that are
sent or add extra headers.

Depending on whether the HTTP headers that are sent and received from a backend
control server are the same or not, OONI is able to evaluate whether software –
which could be responsible for traffic manipulation – is present in the tested
network.

False negatives, however, could potentially occur in the hypothetical instance
that ISPs are using highly sophisticated software that is specifically designed
to not interfere with HTTP headers when it receives them. Furthermore, the
presence of a middle box is not necessarily indicative of traffic manipulation,
as they are often used in networks for caching purposes.

#### Vanilla Tor test

This [test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/vanilla_tor.py) examines the
reachability of the [Tor network](https://www.torproject.org/), which is
designed for online anonymity and censorship circumvention.

The Vanilla Tor test attempts to start a connection to the Tor network. If the
test successfully bootstraps a connection within a predefined amount of seconds
(300 by default), then Tor is considered to be reachable from the vantage point
of the user. But if the test does not manage to establish a connection, then the
Tor network is likely blocked within the tested network.

#### WhatsApp test

This [test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/whatsapp.py) is designed to examine the
reachability of both WhatsApp’s app and the WhatsApp web version within a
network.

OONI’s WhatsApp test attempts to perform an HTTP GET request, TCP connection and
DNS lookup to WhatsApp’s endpoints, registration service and web version over
the vantage point of the user. Based on this methodology, WhatsApp’s app is
likely blocked if any of the following apply:

* TCP connections to WhatsApp’s endpoints fail;

* TCP connections to WhatsApp’s registration service fail; 

* DNS lookups resolve to IP addresses that are not allocated to WhatsApp;

* HTTP requests to WhatsApp’s registration service do not send back a response to
OONI’s servers.

WhatsApp’s web interface (web.whatsapp.com) is likely if any of the following
apply:

* TCP connections to web.whatsapp.com fail;

* DNS lookups illustrate that a different IP address has been allocated to
web.whatsapp.com;

* HTTP requests to web.whatsapp.com do not send back a consistent response to
OONI’s servers.

#### Facebook Messenger test

This [test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/facebook_messenger.py) is designed to
examine the reachability of Facebook Messenger within a tested network.

OONI’s Facebook Messenger test attempts to perform a TCP connection and DNS
lookup to Facebook’s endpoints over the vantage point of the user. Based on this
methodology, Facebook Messenger is likely blocked if one or both of the
following apply:

* TCP connections to Facebook’s endpoints fail;

* DNS lookups to domains associated to Facebook do not resolve to IP addresses
allocated to Facebook.

### Data analysis

Through its [data pipeline](https://github.com/TheTorProject/ooni-pipeline),
OONI processes all network measurements that it collects, including the
following types of data:

**Country code**

OONI by default collects the code which corresponds to the country from which
the user is running OONI Probe tests from, by automatically searching for it
based on the user’s IP address through the [MaxMind GeoIP database](https://www.maxmind.com/en/home). The collection of country codes is
an important part of OONI’s research, as it enables OONI to map out global
network measurements and to identify where network interferences take place.

**Autonomous System Number (ASN)**

OONI by default collects the Autonomous System Number (ASN) which corresponds to
the network that a user is running OONI Probe tests from. The collection of the
ASN is useful to OONI’s research because it reveals the specific network
provider (such as Vodafone) of a user. Such information can increase
transparency in regards to which network providers are implementing censorship
or other forms of network interference.

**Date and time of measurements**

OONI by default collects the time and date of when tests were run. This
information helps OONI evaluate when network interferences occur and to compare
them across time.

**IP addresses and other information**

OONI does not deliberately collect or store users’ IP addresses. In fact, OONI
takes measures to remove users’ IP addresses from the collected measurements, to
protect its users from [potential risks](https://ooni.org/about/risks/).

However, OONI *might unintentionally* collect users’ IP addresses and other
potentially personally-identifiable information, if such information is included
in the HTTP headers or other metadata of measurements. This, for example, can
occur if the tested websites include tracking technologies or custom content
based on a user’s network location.

**Network measurements**

The types of network measurements that OONI collects depend on the types of
tests that are run. Specifications about each OONI test can be viewed through
its [git repository](https://github.com/TheTorProject/ooni-spec/tree/master/test-specs), and details about what collected network measurements entail can
be viewed through [OONI Explorer](https://explorer.ooni.org/world/)
or through [OONI’s measurement API](https://api.ooni.io/).

OONI processes the above types of data with the aim of deriving meaning from the
collected measurements and, specifically, in an attempt to answer the following
types of questions:

* Which types of OONI tests were run?

* In which countries were those tests run?

* In which networks were those tests run?

* When were tests run?

* What types of network interference occurred?

* In which countries did network interference occur?

* In which networks did network interference occur?

* When did network interference occur?

* How did network interference occur?

To answer such questions, OONI’s pipeline is designed to process data which is
automatically sent to OONI’s measurement collector by default. The initial
processing of network measurements enables the following:

* Attributing measurements to a specific country.

* Attributing measurements to a specific network within a country.

* Distinguishing measurements based on the specific tests that were run for their
collection.

* Distinguishing between “normal” and “anomalous” measurements (the latter
indicating that a form of network tampering is likely present).

* Identifying the type of network interference based on a set of heuristics for
DNS tampering, TCP/IP blocking, and HTTP blocking. 

* Identifying block pages based on a set of heuristics for HTTP blocking.

* Identifying the presence of “middle boxes” within tested networks.

However, false positives can emerge within the processed data due to a number of
reasons. As explained previously (section on “OONI network measurements”), DNS
resolvers (operated by Google or a local ISP) often provide users with IP
addresses that are closest to them geographically. While this may appear to be a
case of DNS tampering, it is actually done with the intention of providing users
with faster access to websites. Similarly, false positives may emerge when
tested websites serve different content depending on the country that the user
is connecting from, or in the cases when websites return failures even though
they are not tampered with.

Furthermore, measurements indicating HTTP or TCP/IP blocking might actually be
due to temporary HTTP or TCP/IP failures, and may not conclusively be a sign of
network interference. It is therefore important to test the same sets of
websites across time and to cross-correlate data, prior to reaching a conclusion
on whether websites are in fact being blocked.

Since block pages differ from country to country and sometimes even from network
to network, it is quite challenging to accurately identify them. OONI uses a
series of heuristics to try to guess if the page in question differs from the
expected control, but these heuristics can often result in false positives. For
this reason OONI only says that there is a confirmed instance of blocking when a
block page is detected.

OONI’s methodology for detecting the presence of “middle boxes” - systems that
could be responsible for censorship, surveillance and traffic manipulation - can
also present false negatives, if ISPs are using highly sophisticated software
that is specifically designed to not interfere with HTTP headers when it
receives them, or to not trigger error messages when receiving invalid HTTP
request lines. It remains unclear though if such software is being used.
Moreover, it’s important to note that the presence of a middle box is not
necessarily indicative of censorship or traffic manipulation, as such systems
are often used in networks for caching purposes.

Upon collection of more network measurements, OONI continues to develop its data
analysis heuristics, based on which it attempts to accurately identify
censorship events.

## Findings

As part of this study, [network measurements](https://explorer.ooni.org/country/TH) were collected
through [OONI Probe software tests](https://github.com/TheTorProject/ooni-probe)
performed across 16 different local vantage points in Thailand between 6th
November 2016 to 27th February 2017.

Upon analysis of the collected data, the
[findings](https://api.ooni.io/files/by_country/TH)
illustrate that ISPs in Thailand are primarily implementing censorship through DNS hijacking and through
the use of middle boxes (HTTP transparent proxies) which serve block pages.
OONI’s [HTTP invalid request line test](https://ooni.org/nettest/http-invalid-request-line/), in particular,
[revealed](https://api.ooni.io/files/by_country/TH) the
presence of middle boxes in many networks, which intercepted the HTTP requests
that were sent to echo servers. OONI’s [Web Connectivity test](https://ooni.org/nettest/web-connectivity/), on the other hand,
[revealed](https://api.ooni.io/files/by_country/TH) that
many ISPs served block pages for *13 different sites*. 

The types of sites that were found to be blocked as part of this study include:

* News media

* Anonymity and censorship circumvention tools

* Pornography

The table below illustrates all of the sites that we confirmed to be blocked
across ISPs as part of our testing and data analysis.

| Internet Service Providers (ISPs)              | Blocked websites             | Categories                             | Date of blocking |
|------------------------------------------------|------------------------------|----------------------------------------|------------------|
| DTAC (AS24378)                                 | `http://www.nypost.com`        | News media                             | 2/23/2017        |
| DTAC (AS24378)                                 | `http://xhamster.com`          | Pornography                            | 2/10/2017        |
| TOT 3BB (AS23969)                              | `http://www.dailymail.co.uk`   | News media                             | 2/20/2017        |
| TOT 3BB (AS23969)                              | `http://www.hotspotshield.com` | Anonymity and censorship circumvention | 2/20/2017        |
| Realmove Company Limited (AS132061)            | `http://www.wikileaks.org`     | News media                             | 2/14/2017        |
| Realmove Company Limited (AS132061)            | `http://anonymouse.org`        | Anonymity and censorship circumvention | 2/14/2017        |
| Triple-T Internet Co., Ldt (AS45758)           | `http://ultrasurf.us`          | Anonymity and censorship circumvention | 2/22/2017        |
| Triple-T Internet Co., Ldt (AS45758)           | `http://pridetube.com`         | Pornography                            | 2/14/2017        |
| Triple-T Internet Co., Ldt (AS45758)           | `http://www.naughty.com`       | Pornography                            | 2/22/2017        |
| Triple-T Internet Co., Ldt (AS45758)           | `http://www.livejasmin.com`    | Pornography                            | 2/24/2017        |
| True Internet CO., LDT (AS17552)               | `http://redtube.com`           | Pornography                            | 2/22/2017        |
| True Internet CO., LDT (AS17552)               | `http://xhamster.com`          | Pornography                            | 2/16/2017        |
| JasTel Network International Gateway (AS45629) | `http://youjizz.com`           | Pornography                            | 2/14/2017        |

Following a meeting in early 2015 between Thailand’s National Broadcasting and
Telecommunications Commission (NBTC), various Internet Service Providers (ISPs),
and the police’s Special Branch, [Thai ISPs were “authorised” to block online content at their own discretion](https://www.lowyat.net/2015/42144/thailand-orders-isps-to-censor-content-on-their-own/). This appears to be corroborated by
our findings, which show different sites being blocked by different ISPs across
time, indicating that service providers may have flexibility in terms of what
they can filter.

[New York Post](https://nypost.com/), for example, was only [found to be blocked](https://explorer.ooni.org/measurement/20170223T132416Z_AS24378_YtsGhV1SMvKQow0RqWLTsfXF1ZYuYWfuKt6Bu6AaLSbbdlS2pF?input=http:%2F%2Fwww.nypost.com) in one mobile network
(DTAC), while being accessible across all other ISPs where tests were run.
Similarly, [WikiLeaks](https://wikileaks.org/) was only [found to be blocked](https://explorer.ooni.org/measurement/20170214T023413Z_AS132061_uOj4NMFvbADZII8Sp2cmuZbgnozyuePra6Dyp5i16tQRblJYDW?input=http:%2F%2Fwww.wikileaks.org)
by one provider (Realmove Company Limited). This indicates that ISPs were
probably not ordered to block WikiLeaks on the grounds of “national security”,
but rather that one provider likely chose to block the site at its own
discretion.

Anonymouse.org was [found to be blocked](https://explorer.ooni.org/measurement/20170214T071323Z_AS132061_NAhYzN5e108gx29cwCcF90v3hyepWKTMYZO0G6G37rUQ3JVNyu?input=http:%2F%2Fanonymouse.org) twice, while the rest of the sites in
the table above were [found to be blocked](https://api.ooni.io/files/by_country/TH) only
once. However, as the measurements were run quite sporadically across different
networks, it remains quite unclear whether and to what extent some of these
sites remain blocked.

On a positive note, OONI’s
[WhatsApp](https://ooni.org/nettest/whatsapp/) and [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/) tests show
that the apps appear to have been accessible in Thailand throughout the testing
period.

### News media

OONI data shows that DTAC, Thailand’s second largest GSM mobile phone provider,
[blocked access to nypost.com](https://explorer.ooni.org/measurement/20170223T132416Z_AS24378_YtsGhV1SMvKQow0RqWLTsfXF1ZYuYWfuKt6Bu6AaLSbbdlS2pF?input=http:%2F%2Fwww.nypost.com) in February 2017. The site though was found to be
accessible across other ISPs. While the company’s motivation remains unclear, it
may have chosen to block access to this news outlet if it was publishing
information that was viewed as offensive under lese majeste laws. Similarly, TOT
3BB [blocked access to dailymail.co.uk](https://explorer.ooni.org/measurement/20170220T132942Z_AS23969_BwA1Bn7QQCigePMY4Fk9N7UvyyYcudRfR97uA2yBQLJMIZKqwO?input=http:%2F%2Fwww.dailymail.co.uk), but rather than serving a block
page, dailymail.co.uk was found to be blocked based on DNS censorship.

| Internet Service Providers (ISPs)   | Blocked media sites        | Date of blocking |
|-------------------------------------|----------------------------|------------------|
| DTAC (AS24378)                      | `http://www.nypost.com`      | 2/23/2017        |
| TOT 3BB (AS23969)                   | `http://www.dailymail.co.uk` | 2/20/2017        |
| Realmove Company Limited (AS132061) | `http://www.wikileaks.org`   | 2/14/2017        |

WikiLeaks is a multi-national media organization that is known for publishing
large datasets of restricted official materials involving war, spying, and
corruption. In 2008, WikiLeaks [released a list of blacklisted websites](https://wikileaks.org/wiki/1,203_new_websites_censored_by_Thailand) by
Thailand’s Ministry of Information and Communication Technology (MICT).
Wikileaks.org was subsequently
[blocked](http://www.telegraph.co.uk/news/worldnews/asia/thailand/7951959/Thailand-blocks-Wikileaks-website.html) in Thailand less than two years later
under the 2005 emergency decree.

Our findings show that while wikileaks.org was accessible across 15 ISPs during
our testing, it was recently found to be [blocked](https://explorer.ooni.org/measurement/20170214T023413Z_AS132061_uOj4NMFvbADZII8Sp2cmuZbgnozyuePra6Dyp5i16tQRblJYDW?input=http:%2F%2Fwww.wikileaks.org) in February 2017 by Realmove Company Limited.

### Anonymity and censorship circumvention

On a positive note, the [Tor network](https://www.torproject.org/) appeared to
be accessible across all ISPs in Thailand where [OONI tests](https://ooni.org/nettest/vanilla-tor/) were run as part of this study.

Other sites, however, for anonymity and censorship circumvention were [found to be blocked](https://api.ooni.io/files/by_country/TH), as
illustrated in the table below.

| Internet Service Providers (ISPs)    | Blocked anonymity & circumvention sites | Date of blocking |
|--------------------------------------|-----------------------------------------|------------------|
| TOT 3BB (AS23969)                    | `http://www.hotspotshield.com`            | 2/20/2017        |
| Realmove Company Limited (AS132061)  | `http://anonymouse.org`                   | 2/14/2017        |
| Triple-T Internet Co., Ldt (AS45758) | `http://ultrasurf.us`                     | 2/22/2017        |

HotSpot Shield is a free Virtual Private Network (VPN) that enables its users to
enhance their online privacy and to circumvent online censorship. The testing of
hotspotshield.com showed that TOT 3BB [served a block page](https://explorer.ooni.org/measurement/20170220T132942Z_AS23969_BwA1Bn7QQCigePMY4Fk9N7UvyyYcudRfR97uA2yBQLJMIZKqwO?input=http:%2F%2Fwww.hotspotshield.com) in February
2017. Similarly, the testing of [anonymouse.org](https://explorer.ooni.org/measurement/20170214T071323Z_AS132061_NAhYzN5e108gx29cwCcF90v3hyepWKTMYZO0G6G37rUQ3JVNyu?input=http:%2F%2Fanonymouse.org) and [ultrasurf.us](https://explorer.ooni.org/measurement/20170222T131301Z_AS45758_Np4oEy8rsv8s9C9g1Xs1r00zm1xqPIthWls9phCG3SdVuPuL1A?input=http:%2F%2Fultrasurf.us) also showed that
providers (Realmove Company Limited and Triple-T Internet Co., Ldt) served block
pages.

### Pornography

Thailand’s [Prevention and Suppression of Temptations to Dangerous Behaviors Bill](http://prachatai.org/english/node/4772) aims to prohibit specific types of
pornography. As part of our testing, we found the following pornographic sites
to be blocked in Thailand.

| Internet Service Providers (ISPs)              | Blocked porn sites        | Date of blocking |
|------------------------------------------------|---------------------------|------------------|
| Triple-T Internet Co., Ldt (AS45758)           | `http://pridetube.com`      | 2/14/2017        |
| Triple-T Internet Co., Ldt (AS45758)           | `http://www.naughty.com`    | 2/22/2017        |
| Triple-T Internet Co., Ldt (AS45758)           | `http://www.livejasmin.com` | 2/24/2017        |
| True Internet CO., LDT (AS17552)               | `http://redtube.com`        | 2/22/2017        |
| True Internet CO., LDT (AS17552)               | `http://xhamster.com`       | 2/16/2017        |
| JasTel Network International Gateway (AS45629) | `http://youjizz.com`        | 2/14/2017        |
| DTAC (AS24378)                                 | `http://xhamster.com`       | 2/10/201         |

## Acknowledgement of limitations

The findings of this study present various limitations and do not necessarily
reflect a comprehensive view of internet censorship in Thailand.

The first limitation is associated with the testing period. While OONI network
measurements have been [collected from Thailand since 2014](https://api.ooni.io/files/by_country/TH) and continue
to be collected on the day of the publication of this report, this study only
takes into account and analyzes network measurements that were collected between
6th November 2016 and 27th February 2017. This study is limited to this time
frame because we aim to examine the most recent censorship events and because
there was a significant increase in the collection of network measurements
during this period, in comparison to previous months and years. As such,
censorship events which may have occurred before and/or after the testing period
are not examined as part of this study.

Another limitation to this study is associated to the amount and types of URLs
that were tested for censorship. As mentioned in the methodology section of this
report (“Creating a Thai test list”), OONI’s [Web Connectivity test](https://ooni.org/nettest/web-connectivity/) was run to examine
the accessibility of [420 URLs](https://github.com/citizenlab/test-lists/blob/master/lists/th.csv) that are more relevant to the Thai context and
of [1,105 internationally relevant sites](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv). While a total of 1,525 URLs were tested for
censorship as part of this study, we did not test all of the URLs on the
internet, indicating the possibility that other websites not included in tests
lists might have been blocked.

Finally, while network measurements were collected from 16 different local
vantage points in Thailand, OONI’s [software tests](https://github.com/TheTorProject/ooni-probe) were not run consistently
across all networks. Stable measurements were collected from certain vantage
points throughout the testing period, but less stable measurements were also
collected from a number of other vantage points following the [launch of OONI’s mobile app](https://ooni.org/post/ooni-mobile-app/) on 9th February
2017. In other words, once [OONI Probe](https://github.com/TheTorProject/ooni-probe) became easier to install and run via its mobile version for Android and
iOS, we received an increased amount of sporadic measurements from various new
networks. In some of these networks we were able to identify additional cases of
censorship, but since tests were not always run consistently, our ability to
evaluate whether censorship cases were persistent was limited.

# Conclusion

Multiple [censorship events](https://citizenlab.org/2014/07/information-controls-thailand-2014-coup/) have been reported in Thailand over the last
decade, particularly since the latest military coup in the country in May 2014,
involving the blocking of news outlets and sites that express political
criticism.

The objective of this study is to gain a better understanding of internet
censorship events in Thailand through the collection and analysis of network
measurements. To this end, [OONI software tests](https://github.com/TheTorProject/ooni-probe) were run across 16 different
local vantage points in Thailand with the aim of collecting and analyzing
network measurement data that could help examine whether sites, instant
messaging apps, and censorship circumvention tools were blocked. Some of the
[tests](https://ooni.org/nettest/) that were also run are designed to
examine whether systems (“middle boxes”) that could be responsible for
censorship, surveillance, and traffic manipulation were present in the tested
networks. Overall, the accessibility of [1,525 sites](https://github.com/citizenlab/test-lists/tree/master/lists) was tested,
and the [network measurement data](https://api.ooni.io/files/by_country/TH) collected
between 6th November 2016 to 27th February 2017 was analyzed.

The key [findings](https://api.ooni.io/files/by_country/TH)
of this study show that Thai ISPs appear to primarily be implementing censorship
through DNS hijacking and through the use of middle boxes (HTTP transparent proxies) which serve block
pages, while in fewer cases, ISPs appear to be implementing DNS-based censorship
(in the case of the [blocking of dailymail.co.uk](https://explorer.ooni.org/measurement/20170220T132942Z_AS23969_BwA1Bn7QQCigePMY4Fk9N7UvyyYcudRfR97uA2yBQLJMIZKqwO?input=http:%2F%2Fwww.dailymail.co.uk), for example). It’s worth
noting that Thai ISPs appear to be implementing censorship at their own
discretion, since the types of sites blocked vary across ISPs.

As part of this study, **13 sites** were confirmed to be blocked across 6 ISPs
(DTAC, Realmove Company Limited, TOT 3BB, Triple-T Internet Co., Ltd, True
Internet Co., Ltd, JasTel Network International). These sites include news
outlets (nypost.com and dailymail.co.uk), wikileaks.org, the sites of
circumvention tools (such as hotspotshield.com), and pornography. The fact that
these sites were not blocked across all networks leads us to believe that Thai
service providers may be filtering content based on broad government orders to
block content that is deemed to violate lese majeste rules. On a positive note,
WhatsApp, Facebook Messenger, and the [Tor network](https://www.torproject.org/)
appeared to be
[accessible](https://api.ooni.io/files/by_country/TH)
across 16 networks throughout the testing period.

Given the limited transparency around information controls in Thailand and the
potential implications they may have on human rights, we encourage ISPs to
disclose their motivation and justification behind the blocking of sites and
services. We also encourage public debate based on the
[findings](https://api.ooni.io/files/by_country/TH) of this
study around the necessity and proportionality of information controls.

# Acknowledgements

We thank the [Open Technology Fund (OTF)](https://www.opentech.fund/) and
[Access Now](https://www.accessnow.org/) for funding this research. We also
thank all the anonymous and brave volunteers in Thailand who have run and
continue to run OONI Probe, thus making this research possible.


*Note: This report was updated on 20th March 2017, following its publication.*
