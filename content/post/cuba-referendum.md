---
title: "Cuba blocks independent media amid 2019 constitutional referendum"
author: "Eduardo Ernesto Pérez Pujol, Arturo Filastò (OONI), Maria Xynou (OONI)"
date: "2019-02-26"
tags: ["cuba", "censorship", "country-cu", "theme-news_media"]
categories: ["report"]
---

On 24th February 2019, Cubans voted on a new constitution for the first time in decades.

But a few hours before the referendum, independent news outlet Tremenda Nota [reported](https://twitter.com/TremendaNota_cu/status/1099465370585518080?s=19) that their [website](https://www.tremendanota.com/) got blocked in Cuba.

In this post, we share [OONI network measurement data](https://explorer.ooni.io/country/CU) that confirms the blocking of tremendanota.com, as well as the blocking of several other independent media websites during the referendum.

We also found that ETECSA, Cuba’s only telecommunications company, has changed its censorship techniques, now censoring access to sites that support HTTPS by means of IP blocking.

# Constitutional Referendum

During the referendum, Cubans were asked to [vote](https://www.aljazeera.com/news/2019/02/cuba-constitutional-referendum-190222174420643.html) whether they approve of the new constitution [passed](https://www.bbc.com/news/world-latin-america-44971445) by the National Assembly of People’s Power in July 2018\.

An update to the 1976 constitution, the [new charter](http://www.parlamentocubano.cu/wp-content/uploads/Tabloide-Constituci%C3%B3n.pdf) recognizes private property and foreign investment; limits the president to serving two consecutive five-year terms; restores a presumption of innocence in the judicial system; creates the position of Prime Minister to oversee state affairs; extends a ban on discrimination based on gender, ethnic origin, sexual orientation, gender identity or disability (among other proposed constitutional changes).

Critics [argue](https://www.aljazeera.com/news/2019/02/cuba-constitutional-referendum-190222174420643.html) that the new constitution does not restructure political power, as the one-party system is kept intact and the possibility for a direct vote to elect the president is not introduced. According to Andres Pertierra, a Cuban-American historian, the vote not only serves as a referendum on the new constitution, but also on the government of President Miguel Diaz-Canel (who took office last year), providing a measure of legitimacy.

State media has widely promoted a “yes” vote, while members of the oppositionhave [pushed for a “no” or called for abstention](https://www.14ymedio.com/nacional/Anular-abstenerse-referendum-propone-oposicion_0_2505349445.html).

# Blocking of independent media

Right before the referendum, [Tremenda Nota](https://www.tremendanota.com/), an independent media outlet that [covers](http://www.diariodecuba.com/cuba/1551005821_44818.html) women’s rights, LGBTI and other human rights issues in Cuba, [reported](https://twitter.com/TremendaNota_cu/status/1099465370585518080?s=19) that access to their website was blocked in Cuba.

![](/post/cuba-referendum/tremenda-nota.png)

Their editor [shared the text](https://www.facebook.com/abel.invernal/posts/2466998813373922) that they believe motivated the blocking of their website, which criticizes Cuba’s National Assembly for ignoring survey results favourable to LGBTI rights and for not supporting equal marriage in the new constitution.

[OONI Probe](https://ooni.org/install/) tests - which are designed to measure the blocking of websites - were run in Cuba, [confirming the blocking of tremendanota.com](https://explorer.ooni.io/measurement/20190224T232022Z_AS27725_nclI9vnyHOjiOJrq5ZilcmtRGjeVL15WlGMWDudAY6PVGCTs4j?input=http:%2F%2Fwww.tremendanota.com%2F). But tremendanota.com is not the only independent media website blocked in Cuba.

Through the analysis of recent [OONI measurements](https://explorer.ooni.io/country/CU), we found several other independent media websites blocked in Cuba as well on 24th February 2019, during the referendum.

![](/post/cuba-referendum/CubaMediaBlocking.png)

**Source:** Open Observatory of Network Interference (OONI) measurements: Cuba, [https://explorer.ooni.io/country/CU](https://explorer.ooni.io/country/CU) 

The above graph shows how the blocking of media websites in Cuba changed over time (since May 2017).

Previously, Cuba’s telecommunications company (ETECSA) [mainly blocked the HTTP version of sites by serving blank block pages](https://ooni.org/post/cuba-internet-censorship-2017/). This meant that censorship could easily be circumvented by accessing blocked websites over HTTPS (if they supported it). For some sites (cibercuba.com and cubanet.org) that did support HTTPS, OONI measurements from 2017 show failures when performing the HTTP and HTTPS requests, but don’t show the IPs being blocked, suggesting that they may have been using Deep Packet Inspection (DPI) technology.

Now, we observe that ETECSA has **changed its censorship techniques**, blocking both the HTTP and HTTPS version of sites by means of **IP blocking**. More specifically, ETECSA:

* Has **shifted from serving blank block pages to implementing IP-based blocking** (for sites that support HTTPS, such as 14ymedio.com).
* Continues to serve blank block pages for sites that have not added HTTPS support (such as diariodecuba.com).
* Has shifted to IP-based blocking for sites (such as cibercuba.com and cubanet.org) that previously appeared to be blocked by means of DPI.

Both cibercuba.com and cubanet.org appear to have temporarily been unblocked (as demonstrated by the accessible measurements from January and early February 2019), suggesting that ETECSA may have made some changes to their censorship equipment around that time.

Our analysis of [OONI measurements](https://explorer.ooni.io/country/CU), used to produce the above chart, is available [here](/post/cuba-referendum/20190226-cuba-report-measurements.csv).

The OONI website (ooni.io) has been [blocked](https://explorer.ooni.io/measurement/20190224T232022Z_AS27725_nclI9vnyHOjiOJrq5ZilcmtRGjeVL15WlGMWDudAY6PVGCTs4j?input=https:%2F%2Fooni.io%2F) in Cuba as well by means of IP blocking, yet ooni.org is still [accessible](https://explorer.ooni.io/measurement/20190225T233901Z_AS27725_WPUkyBF7sttLnVLyPkXngqI2lSIa4Q7kCTDaTcMhyOO3Bi7FEi?input=https:%2F%2Fooni.org%2F).

We thank all the OONI Probe users in Cuba who made this study possible.
