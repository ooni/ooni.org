---
title: "Benin: Social media blocking and Internet blackout amid 2019 elections"
author: "Roderick Fanou (CAIDA, UC San Diego), Ramakrishna Padmanabhan (CAIDA, UC San Diego), Arturo Filastò (OONI), Maria Xynou (OONI)"
date: "2019-04-30"
tags: ["benin", "censorship", "country-bj", "theme-im", "theme-social_media"]
categories: ["report"]
---

Two days ago, social media was [reportedly](https://netblocks.org/reports/internet-blocked-in-benin-on-election-day-aAwqknyM) blocked and access to the Internet was shutdown in Benin during its 2019 parliamentary elections.

In this report, the [Open Observatory of Network Interference (OONI)](https://ooni.io/) and the [Center for Applied Internet Data Analysis (CAIDA)](https://www.caida.org/) teams share [OONI](https://api.ooni.io/files/by_country/BJ), [IODA](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/BJ&lastView=overview&from=1556385008&until=1556557928), and [RIPE Atlas](https://atlas.ripe.net/) network measurement data that corroborate and provide insight into these recent censorship events in Benin.

* [Background](#background)

* [Social media blocking](#social-media-blocking)

  * [OONI measurements](#ooni-measurements)
  
  * [RIPE Atlas measurements](#ripe-atlas-measurements)

* [Internet blackout](#internet-blackout)

  * [About IODA](#about-ioda)
  
  * [Internet blackout in Benin](#internet-blackout-in-benin)

## Background

On 28th April 2019, the West African country [Republic of Benin](https://en.wikipedia.org/wiki/Benin), although [known as one of Africa’s most stable democracies](https://www.bbc.com/news/world-africa-13037572) since 1990, had [parliamentary elections with no opposition candidates](https://www.aljazeera.com/news/2019/04/opposition-candidates-benin-votes-general-election-190428080718093.html).

Last month, the electoral authorities, namely the Autonomous National Electoral Commission ([CENA](https://www.cena.bj/en/)), [ruled](https://www.bbc.com/news/world-africa-48084124) that only two parties out of seven (Le Bloc Republicain - BR - and Union Progressiste - UP) were eligible - both loyal to President Talon. Despite [several attempts for dialogue](https://www.youtube.com/watch?v=Tofb2QeoACQ), [a crackdown on protests (followed by a wave of arrests)](https://www.amnesty.org/en/latest/news/2019/04/benin-crackdown-on-protests-and-wave-of-arrests-fuel-tense-election-period/) and [calls to stop the electoral process](https://www.banouto.info/article/politique/20190422-bnin-lgislatives-2019-nouvel-appel-des-ex-prsidents-soglo-et-yayi--talon/), electoral authorities moved forward ([with the support of the government](https://www.youtube.com/watch?v=yn0SpmLB-4s) and that of [the presidents of local institutions](https://www.beninespoir.com/benin-rencontre-du-chef-de-letat-avec-les-presidents-des-institutions/)) and [Benin voters went to the polls in an election with only one choice.](https://www.dw.com/en/benin-goes-to-the-polls-in-an-election-with-only-one-choice/a-48520955) 

In the early hours of the election day, on 28th April 2019, access to social media was [reportedly](https://qz.com/africa/1606670/benin-shuts-internet-blocks-whatsapp-facebook-ahead-of-election/) blocked in the country. A few hours later, there was [reportedly](https://netblocks.org/reports/internet-blocked-in-benin-on-election-day-aAwqknyM) a complete Internet blackout. Benin thus joined the [group of African countries in which the Internet was reportedly shutdown on an election day](https://qz.com/africa/696552/more-african-countries-are-blocking-internet-access-during-elections/) (such as [Uganda](https://ooni.io/post/uganda-social-media-blocked/) and [The Gambia](https://ooni.io/post/gambia-internet-shutdown/)).

In the following sections of this report, we share [OONI](https://api.ooni.io/files/by_country/BJ) and [IODA](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/BJ&lastView=overview&from=1556385008&until=1556557928) network measurement data on the blocking of social media in Benin and the subsequent Internet outage. We augment these timely results with those of publicly available [RIPE Atlas](https://atlas.ripe.net/) measurements launched during the first hours of the election day and continuously conducted by RIPE Atlas probes previously hosted in local networks. 

## Social media blocking

### OONI measurements

OONI [measurements](https://api.ooni.io/files/by_country/BJ), testing the accessibility of websites and apps, have been collected from multiple networks in Benin since 2017. OONI’s [Web Connectivity test](https://ooni.io/nettest/web-connectivity/) is designed to measure the TCP/IP, HTTP, and DNS blocking of websites, while OONI’s [WhatsApp](https://ooni.io/nettest/whatsapp/), [Facebook Messenger](https://ooni.io/nettest/facebook-messenger/), and [Telegram](https://ooni.io/nettest/telegram/) tests are designed to measure the reachability of those apps from local vantage points.

The following chart, based on [OONI data collected from Benin](https://api.ooni.io/files/by_country/BJ), illustrates the blocking of social media sites on 28th April 2019, amid Benin’s 2019 parliamentary elections.

![](/post/2019-benin-social-media-blocking/OONI - Blocking of social media in Benin.png)
**Figure 1:**Blocking of social media in Benin, Open Observatory of Network Interference (OONI) measurements, Benin: [https://explorer.ooni.io/country/BJ](https://explorer.ooni.io/country/BJ)

Most measurements were collected from the mobile operator [Spacetel (AS37424)](https://stat.ripe.net/AS37424#tabId=at-a-glance), locally known as MTN Benin, and consistently showed that the testing of the following social media sites presented HTTP failures: [facebook.com](https://explorer.ooni.io/measurement/20190428T044628Z_AS37424_wmcxWVQmJR0ootqOYGor7PUXJXWEKdPr8QIgsHOd8KpxCLGzMw?input=https:%2F%2Ffacebook.com), [whatsapp.com](https://explorer.ooni.io/measurement/20190428T044628Z_AS37424_wmcxWVQmJR0ootqOYGor7PUXJXWEKdPr8QIgsHOd8KpxCLGzMw?input=https:%2F%2Fwww.whatsapp.com), [telegram.org](https://explorer.ooni.io/measurement/20190428T044628Z_AS37424_wmcxWVQmJR0ootqOYGor7PUXJXWEKdPr8QIgsHOd8KpxCLGzMw?input=https:%2F%2Ftelegram.org), [twitter.com](https://explorer.ooni.io/measurement/20190428T044628Z_AS37424_wmcxWVQmJR0ootqOYGor7PUXJXWEKdPr8QIgsHOd8KpxCLGzMw?input=http:%2F%2Ftwitter.com), [instagram.com](https://explorer.ooni.io/measurement/20190428T044628Z_AS37424_wmcxWVQmJR0ootqOYGor7PUXJXWEKdPr8QIgsHOd8KpxCLGzMw?input=https:%2F%2Fwww.instagram.com), [skype.com](https://explorer.ooni.io/measurement/20190428T053237Z_AS37424_n2LS7jvw22xZWsiJgaV5FRdkRU8QvaxHgjT6rxMtfplUYLua5D?input=https:%2F%2Fwww.skype.com), [snapchat.com](https://explorer.ooni.io/measurement/20190428T053237Z_AS37424_n2LS7jvw22xZWsiJgaV5FRdkRU8QvaxHgjT6rxMtfplUYLua5D?input=https:%2F%2Fwww.snapchat.com), [imo.im](https://explorer.ooni.io/measurement/20190428T043240Z_AS37424_Rwc66AjfwIux5AnanLtjBjlGMHduDG4KOix2OjmNrCljGMAmc7?input=http:%2F%2Fimo.im%2F), [hangouts.google.com](https://explorer.ooni.io/measurement/20190428T032552Z_AS37424_V2ifoL0WDx09o1dSdXK1qXbF3ZBlrNcF6DjERmAT3jSGRXzO63?input=https:%2F%2Fhangouts.google.com%2F), [web.wechat.com](https://explorer.ooni.io/measurement/20190428T011523Z_AS37424_3BMK29ryPLYMbZB1vnJByHdSSX9C8XGK3ckBULg7AMXMD7pPPz?input=https:%2F%2Fweb.wechat.com%2F). Youtube though remained [accessible](https://explorer.ooni.io/measurement/20190428T025254Z_AS37424_Po0R55r3LxonVWdun5wkwlpuAdDomE4qa4k2bKrgOIWurX0jmy?input=https:%2F%2Fwww.youtube.com%2F) throughout the elections.

The blocking of WhatsApp was also detected through [OONI’s WhatsApp test](https://ooni.io/nettest/whatsapp/), which attempts to perform an HTTP GET request, TCP connection, and DNS lookup to WhatsApp’s endpoints, registration service, and web version over the vantage point of the user.

The following chart illustrates the blocking of WhatsApp on MTN (AS37424) in Benin.

![](/post/2019-benin-social-media-blocking/OONI - WhatsApp blocking in Benin.png)
**Figure 2:**WhatsApp blocking in Benin, Open Observatory of Network Interference (OONI) measurements, Benin: [https://explorer.ooni.io/country/BJ](https://explorer.ooni.io/country/BJ)

Both WhatsApp’s web version (web.whatsapp.com) and the registration server used by WhatsApp’s mobile app appear to have been blocked on MTN Benin by midnight, 28th April 2019 (local time). Throughout the day, all [measurements](https://explorer.ooni.org/measurement/20190428T084731Z_AS37424_PEWoAruDdsUVHj3Do5fjh2q75YtW0zQUkciidHZDsbx7QwrQlC) collected from this network consistently showed that attempts to establish TCP connections to WhatsApp’s registration service failed, while HTTP requests to web.whatsapp.com rendered HTTP failures, with connections being reset. MTN Benin though did not block access to the addresses used by the WhatsApp application, but limited the block to merely the registration service.

It’s worth noting though that WhatsApp was accessible on two other networks: [ISOCEL (AS37090)](https://explorer.ooni.org/measurement/20190428T084647Z_AS37090_ncsfkT1r5gaqm4qiaZ3utBkfeYxcibRjllOc1Jmp10jcGSLU2w) and [OPT Benin (AS28683)](https://explorer.ooni.org/measurement/20190428T100329Z_AS28683_66GIpNZ5Bn2JdWU9nHoXH7dt8w9YEmbHNRgzgdsqapPV7NXD5d), known as Benin Telecom. Some measurements collected from Benin Telecom (AS28683) suggest “endpoint blocking”, but those are false positives due to [DNS based load balancing](https://explorer.ooni.io/measurement/20190428T063548Z_AS28683_vqNse0EZfLblie2ObeJQjatNlKFOxwW4Ap8mhEQTLqKcHjfy65) (for example, `169.54.55.206` belongs to `WhatsApp Inc.`).

Unlike WhatsApp, Facebook Messenger appears to have been [accessible](https://explorer.ooni.io/measurement/20190428T084745Z_AS37424_M0wsdJFR5FZEN8GuIKzPS36cYbuKa5RUyAoM7Cs3W9yhfgkdSg) on MTN Benin (AS37424) on 28th April 2019, even though [access to facebook.com was blocked](https://explorer.ooni.io/measurement/20190428T044628Z_AS37424_wmcxWVQmJR0ootqOYGor7PUXJXWEKdPr8QIgsHOd8KpxCLGzMw?input=https:%2F%2Ffacebook.com).

The following chart shows that [Facebook Messenger was accessible in Benin](https://explorer.ooni.io/measurement/20190428T100358Z_AS28683_B7vWp01e1GAAb6ffsg2jqoObgaJeBVxyHLQ1wVmQb3KmlNtpk9) on three different networks during the elections.

![](/post/2019-benin-social-media-blocking/OONI - Facebook Messenger in Benin.png)

**Figure 3:**Facebook Messenger testing in Benin, Open Observatory of Network Interference (OONI) measurements, Benin: [https://explorer.ooni.io/country/BJ](https://explorer.ooni.io/country/BJ)

All measurements show that TCP connections to Facebook’s endpoints succeeded (the few [DNS anomalies](https://explorer.ooni.io/measurement/20190428T233738Z_AS37424_KNTyT3H8DJXpCW4faM8PHZ6uw3dc9mogGkM6yKyt863JHbBzmo) were false positives), suggesting that Facebook Messenger worked while facebook.com was blocked.

Quite similarly, measurements collected through [OONI’s Telegram test](https://ooni.io/nettest/telegram/) show that MTN Benin [blocked telegram.org](https://explorer.ooni.io/measurement/20190428T044628Z_AS37424_wmcxWVQmJR0ootqOYGor7PUXJXWEKdPr8QIgsHOd8KpxCLGzMw?input=https:%2F%2Ftelegram.org), but they [did not block access to the Telegram mobile app](https://explorer.ooni.io/measurement/20190428T084737Z_AS37424_PDJXi8Kfcx2iyYzzRX78Gv7VHMizGCLDhvkeBp30Qu2KsCtXtV). This is illustrated through the following chart, which also shows that Telegram’s web version seemed mostly accessible on other networks.

![](/post/2019-benin-social-media-blocking/telegram-blocking-benin.png)

**Figure 4:**Telegram blocking in Benin, Open Observatory of Network Interference (OONI) measurements, Benin: [https://explorer.ooni.io/country/BJ](https://explorer.ooni.io/country/BJ)

Several circumvention tool sites, such as [purevpn.fr](https://explorer.ooni.io/measurement/20190428T053237Z_AS37424_n2LS7jvw22xZWsiJgaV5FRdkRU8QvaxHgjT6rxMtfplUYLua5D?input=https:%2F%2Fwww.purevpn.fr), [betternet.co](https://explorer.ooni.io/measurement/20190428T052542Z_AS37424_SzAPN1eapTf9KNvmS3KnmsPIYau4Nk5QDZTHr34fhNeTeqNDJH?input=https:%2F%2Fwww.betternet.co%2F), and [tigervpn.com](https://explorer.ooni.io/measurement/20190428T053237Z_AS37424_n2LS7jvw22xZWsiJgaV5FRdkRU8QvaxHgjT6rxMtfplUYLua5D?input=https:%2F%2Fwww.tigervpn.com), presented HTTP failures. However, these failures are likely false positives, particularly given the fact that more popular circumvention tool sites, such as psiphon.ca, were [accessible](https://explorer.ooni.io/measurement/20190428T061116Z_AS37424_aHLn8cXXrPVYF4oeHd2DXZpwZACWcrhik7an5k2LaiU9OIiAuY?input=https:%2F%2Fpsiphon.ca%2F). The testing of openvpn.com presented an [anomaly](https://explorer.ooni.io/measurement/20190428T053237Z_AS37424_n2LS7jvw22xZWsiJgaV5FRdkRU8QvaxHgjT6rxMtfplUYLua5D?input=https:%2F%2Fopenvpn.net), but this was triggered by a cloudflare captcha page (i.e., the site was accessible in Benin during the elections).

### RIPE Atlas measurements

As of 29th April 2019, the [RIPE Atlas measurements platform](https://atlas.ripe.net/about/) contains [10,458 probes](https://atlas.ripe.net/results/maps/network-coverage/) deployed worldwide for the purpose of measuring the Internet. The [RIPE Atlas probes](https://atlas.ripe.net/landing/probes-and-anchors/) can run pings, traceroutes, DNS, HTTP, SSL measurements, etc. Five of them were previously deployed within local networks in Benin. Among them, two were online on 28th April 2019, hosted in [JENY-SAS-AS (AS328098)](http://as-rank.caida.org/asns/?name=328098&type=search)(whose provider is Spacetel, [AS37424](http://as-rank.caida.org/asns/?name=37424&type=search)) and [ISOCEL Telecom (AS37090)](https://stat.ripe.net/AS37090#tabId=at-a-glance).

Since HTTP queries are only enabled on RIPE Atlas anchors (none of which are hosted in Benin), we launched traceroutes from all online RIPE Atlas probes in the country towards the landing webpages of social media, such as [whatsapp.com](https://www.whatsapp.com/), [instagram.com](https://www.instagram.com/), [wechat.com](https://www.wechat.com/), [messenger.com](https://www.messenger.com/), [facebook.com](https://facebook.com/). The measurements cover the period April 28, 2019 at 07:04 UTC to April 30, 2019 at 05:19 UTC. The results of these measurements reflect the connectivity on the IP/network layer (and not on the application layer) from the host Autonomous System (AS).

Figures 5, 6, 7, 8, and 9 display for each probe the evolution of the RTT from the source IP to their different destination IPs (y-axis) over the period of the measurements campaign (x-axis). Figure 10, 11, and 12 present not only the RTTs to the destination IPs, but also the inferred AS paths at key moments of the said campaign. We analyze and compare those figures in the next paragraphs, highlighting the insights they provide.

For whatsapp.com, we could not collect any successful measurement outputs from Probe 32381 (top graph in Figure 5) until the end of that period (name resolution failed on the node). By contrast, the results from Probe 11944, hosted in [AS37090](http://as-rank.caida.org/asns/?name=37090&type=search), were successful (with a median of 113.45 ms) from April 28, 2019 at 7:12 to 10:11 UTC but stopped reaching the target from 10:11 UTC to 12:04 UTC, suggesting that the blocking affected the network layer.

Then followed a period (12:04 UTC to 15:13 UTC) during which RTTs to the same destination gradually decreased from 107.72 ms to 0 ms, indicating that during a short period packets could be transmitted. From April 28, 2019 at 15:13 UTC to April 29, 2019 at 05: 04 UTC, the probe could not reach the destination IP or was fully disconnected again on the IP layer. This corresponds to the biggest period of the blackout (presented in the following Internet blackout section). Traceroutes were only successful again starting from April 29, 2019 at 05:04 UTC.

Interestingly, the patterns registered for Probe 11944 when it comes to traceroutes towards the landing webpages of instagram.com (Figure 6), wechat.com (Figure 7), www.messenger.com (Figure 8), www.google.com (Figure 9), Google DNS (Figure 10 and 11), show that the Internet outage is experienced by the source AS (ISOCEL).

![](/post/2019-benin-social-media-blocking/ripe-atlas-1.png)
![](/post/2019-benin-social-media-blocking/ripe-atlas-2.png)

**Figure 5:**RIPE Atlas measurement, Recurring IPv4 traceroute measurement from all probes online in Benin to [www.whatsapp.com](http://www.whatsapp.com), [https://atlas.ripe.net/measurements/21083876/](https://atlas.ripe.net/measurements/21083876/), April 28, 2019. The red pattern is registered for Probe 32381 because the probe could not resolve the URL [www.whatsapp.com](http://www.whatsapp.com).

![](/post/2019-benin-social-media-blocking/ripe-atlas-3.png)

**Figure 6:**RIPE Atlas measurement, Recurring IPv4 traceroute measurement from all probes online in Benin to [www.instagram.com](http://www.instagram.com), [https://atlas.ripe.net/measurements/](https://atlas.ripe.net/measurements/21083876/)[21084196](https://atlas.ripe.net/measurements/21083876/)[/](https://atlas.ripe.net/measurements/21083876/), April 28, 2019

![](/post/2019-benin-social-media-blocking/ripe-atlas-4.png)

**Figure 7:**RIPE Atlas measurement, Recurring IPv4 traceroute measurement from all probes online in Benin to [www.wechat.com](http://www.wechat.com), [https://atlas.ripe.net/measurements/](https://atlas.ripe.net/measurements/21083876/)[21084197](https://atlas.ripe.net/measurements/21083876/)[/](https://atlas.ripe.net/measurements/21083876/), April 28, 2019

![](/post/2019-benin-social-media-blocking/ripe-atlas-5.png)

**Figure 8:**RIPE Atlas measurement, Recurring IPv4 traceroute measurement from all probes online in Benin to [www.messenger.com](http://www.wechat.com), [https://atlas.ripe.net/measurements/](https://atlas.ripe.net/measurements/21083876/)[21084200](https://atlas.ripe.net/measurements/21083876/)[/](https://atlas.ripe.net/measurements/21083876/), April 28, 2019

![](/post/2019-benin-social-media-blocking/ripe-atlas-6.png)

**Figure 9:**RIPE Atlas measurement, Recurring IPv4 traceroute measurement from all probes online in Benin to [www.google.com](http://www.wechat.com), [https://atlas.ripe.net/measurements/](https://atlas.ripe.net/measurements/21083876/)[21083844](https://atlas.ripe.net/measurements/21083876/)[/](https://atlas.ripe.net/measurements/21083876/), April 28, 2019

Compared to those of Probe 32381, they are mostly consistent, except for the interval of time between ~12:00 UTC - 00:00 UTC, which is the time during which there was an Internet outage. These results are confirmed by in-depth inspection carried out on AS paths inferred from the traceroute outputs. They suggest that ASes ISOCEL on one side, JENY-AS and Spacetel experience the shutdown differently.

Measurements from Probe 11944, which are gathered from AS37090, are consistent with OONI Probe measurements in the previous section, confirming the accessibility of these services on ISOCEL Telecom.

![](/post/2019-benin-social-media-blocking/ripe-atlas-7.png)

**Figure 10:**RIPE Atlas measurement, Recurring IPv4 traceroute measurement from all probes online in Benin to Google DNS (8.8.8.8), [https://atlas.ripe.net/measurements/](https://atlas.ripe.net/measurements/21083876/)[21083844](https://atlas.ripe.net/measurements/21083876/)[/](https://atlas.ripe.net/measurements/21083876/) (AS paths inferences before the shutdown), April 28, 2019

![](/post/2019-benin-social-media-blocking/ripe-atlas-8.png)

**Figure 11:**RIPE Atlas measurement, Recurring IPv4 traceroute measurement from all probes online in Benin to Google DNS (8.8.8.8), [https://atlas.ripe.net/measurements/](https://atlas.ripe.net/measurements/21083876/)[21083844](https://atlas.ripe.net/measurements/21083876/)[/](https://atlas.ripe.net/measurements/21083876/) (AS paths inferences during the shutdown), April 28, 2019

![](/post/2019-benin-social-media-blocking/ripe-atlas-9.png)

**Figure 12:** RIPE Atlas measurement, Recurring IPv4 traceroute measurement from all probes online in Benin to 9.9.9.9 (Quad9) depicting that BENIN-IX was mostly UP on election day and that the shutdown did not occur there and proving that each network implemented/suffered from the blackout differently. [https://atlas.ripe.net/measurements/](https://atlas.ripe.net/measurements/21083876/)[21084227](https://atlas.ripe.net/measurements/21083876/)[/](https://atlas.ripe.net/measurements/21083876/), April 28, 2019

We can deduce the following from comparing these figures:

1. ISOCEL end-users clearly suffered a shutdown on election day, because its network did.
2. Meanwhile, the destinations of our measurements were all reachable from JENY-AS and Spacetel Benin: MTNNS-AS (AS16637), the sibling of Spacetel was reachable from both ASes on the IP layer, while landing webpages from social media were not.
3. There was a period (00:00 UTC to 06:00 UTC) during which ISOCEL was experiencing a blackout on the IP layer, while Spacetel was not.
4. Both networks have been reconnected to the Internet since early April 29, 2019 roughly at 06:00 UTC.
5. The Internet Exchange point switch was UP during the whole period of the blocking campaign (Figure 12).

## Internet blackout

IODA detected significant Internet blackouts affecting Benin on 28th and 29th April 2019. IODA’s data sources further show that these blackouts were not limited to a single AS; instead, many large ASes in Benin experienced blackouts.

### About IODA

The [Center for Applied Internet Data Analysis (CAIDA)](https://www.caida.org/home/) runs a project called [IODA](https://ioda.caida.org/) (short for Internet Outage Detection and Analysis), which monitors the Internet, in near-realtime, to identify macroscopic Internet outages, affecting the edge of the network (i.e. significantly impacting an AS or a large fraction of a country). IODA does so using three complementary data sources:

*   **Global Internet routing (BGP):** Using data from ~500 monitors participating in the RouteViews and RIPE RIS projects to establish which network blocks are reachable based on the Internet control plane.
*   **Active probing:** Continuously probing a large fraction of the (routable) IPv4 address space using [a methodology developed by the University of Southern California](https://www.isi.edu/~johnh/PAPERS/Quan13c.html) to infer when a /24 block is affected by a network outage.
*   **Internet Background Radiation:** Processing unsolicited traffic reaching the UCSD Network Telescope monitoring an unutilized /8 address block.

Data from IODA provides insight into Internet disruptions affecting entire countries, as well as the granularity required for identifying disruptions only affecting certain networks or regions within countries.

### Internet blackout in Benin

IODA data shows that an Internet blackout occurred in Benin during the elections, on 28th April 2019.

The following figures show the time series for the three data sources that IODA monitors for IP addresses belonging to different aggregates of addresses in Benin.

![](/post/2019-benin-social-media-blocking/ioda-1.png)

**Figure 13:** Internet Outage Detection and Analysis (IODA), Benin:

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/BJ&lastView=overview&from=1556385008&until=1556557928](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/BJ&lastView=overview&from=1556385008&until=1556557928)

In Figure 13, all three time series indicate the occurrence of a significant Internet blackout. The figure shows that the outage began at around 10 AM UTC on 28th April 2019 (the day of the election). By around 6 AM UTC on the next day, 29th April 2019, the time series for all data sources suggest that the Internet blackout in Benin ended.

Figures 14, 15, 16 and 17 below show the occurrences of Internet blackout events in four large ASes in Benin.

![](/post/2019-benin-social-media-blocking/ioda-2.png)

**Figure 14:** Internet Outage Detection and Analysis (IODA), AS37090

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/37090&lastView=overview&from=1556385008&until=1556557928](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/37090&lastView=overview&from=1556385008&until=1556557928)

![](/post/2019-benin-social-media-blocking/ioda-3.png)

**Figure 15:** Internet Outage Detection and Analysis (IODA), AS28683

[https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/28683&lastView=overview&from=1556385008&until=1556557928](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=asn/28683&lastView=overview&from=1556385008&until=1556557928)

![](/post/2019-benin-social-media-blocking/ioda-4.png)

**Figure 16:** Internet Outage Detection and Analysis (IODA), AS37424

[https://ioda.caida.org/ioda/dashboard#lastView=overview&view=inspect&entity=asn/37424&from=1556385000&until=1556558400](https://ioda.caida.org/ioda/dashboard#lastView=overview&view=inspect&entity=asn/37424&from=1556385000&until=1556558400)  

![](/post/2019-benin-social-media-blocking/ioda-5.png)

**Figure 17:** Internet Outage Detection and Analysis (IODA), AS328098

[https://ioda.caida.org/ioda/dashboard#lastView=overview&view=inspect&entity=asn/328098&from=1556385000&until=1556558400](https://ioda.caida.org/ioda/dashboard#lastView=overview&view=inspect&entity=asn/328098&from=1556385000&until=1556558400)

The figures show that the blackout events began at roughly the same time (around 10 AM UTC) in all the four ASes. However, one of them seems to have recovered connectivity few hours later than the others, suggesting that individual ASes might have implemented shutdowns in their networks independently of each other.

Figures 11 and 12 show that the blackout ended in AS28683 and AS37424 before midnight UTC on 29th April 2019, whereas the blackout ended in AS37090 at around 6 AM UTC. We also observe differences in how the blackout events manifest in IODA’s data sources. AS37090 and AS37424 see a significant drop in BGP-visible /24 blocks at the beginning of the outage. However, AS37090’s visible /24 blocks curve briefly reattains prior values before dropping again. AS28683, on the other hand, experiences only a drop in its active-probing curve initially.

In summary:

* Four different large ASes in Benin had blackouts.  These blackouts were not limited to a single AS; instead, many large ASes in Benin experienced blackouts.
* The blackouts begin at roughly the same time, but end at different times; it is, therefore, possible that ASes implemented  them independently.
* Each AS’s blackout has a different signature in IODA's data sources; for some, the blackout is visible in the BGP data source first whereas for others, the blackout is visible in the active probing data source first.

MTN Benin (AS37424) [acknowledged the Internet disruptions](https://beninwebtv.com/2019/04/coupure-dinternet-au-benin-mtn-sort-de-sa-reserve-des-remboursements-annonces/) on 28th April 2019, but declined all responsibility, promising to reimburse its clients.
