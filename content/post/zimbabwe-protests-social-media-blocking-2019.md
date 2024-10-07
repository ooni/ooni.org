---
title: "Zimbabwe protests: Social media blocking and internet blackouts"
author: "Maria Xynou (OONI), Arturo Filastò (OONI), Tawanda Mugari (Digital Society of Zimbabwe), Natasha Msonza (Digital Society of Zimbabwe)"
date: "2019-01-23"
tags: ["zimbabwe", "censorship", "country-zw", "theme-social_media", "theme-im"]
categories: ["report"]
---

Last week, protests
[erupted](https://www.bbc.com/news/world-africa-46938679) in Zimbabwe
in response to the government’s announcement that the price of fuel
would more than double. According to Zimbabwe’s government, the price
hikes [aim](https://www.bbc.com/news/world-africa-46878267) to avert
fuel shortages and to crackdown on the illegal trading of fuel. The new
prices, however, mean that Zimbabwe now has the [most expensive fuel](https://www.globalpetrolprices.com/gasoline_prices/World-top10/)
in the world.

Zimbabwe’s fuel protests lasted for three days (14th to 17th January
2019), during which 12 people were
[reportedly](https://www.bbc.com/news/world-africa-46938679) killed
and many more beaten by security forces. It is estimated that 78 people
were [treated for gunshot wounds](http://www.hrforumzim.org/news/on-the-days-of-darkness-in-zimbabwe/),
while hundreds of protesters were
[arrested](http://www.hrforumzim.org/news/zimshutdown-violations-updates/)
by the police.

Amid the violent crackdown of protests, access to [social media was blocked](https://www.bbc.com/news/world-africa-46917259) and the
internet was temporarily [shut down](https://netblocks.org/reports/zimbabwe-internet-shutdowns-amid-fuel-price-protests-OxAGDdBz)
completely (possibly in an attempt to prevent censorship circumvention,
particularly in light of [increased VPN usage](https://qz.com/africa/1528663/zimbabwe-intnerent-shutdown-leads-to-vpn-use/)).

Internet access in Zimbabwe has since been restored, but certain social
media apps remained blocked until 21st January 2019, when the High Court
[ruled](https://www.washingtonpost.com/world/africa/zimbabwes-high-court-rules-internet-shutdown-illegal-orders-government-to-restore-full-internet-to-the-country/2019/01/21/1c61a538-1d8d-11e9-a759-2b8541bbbe20_story.html?noredirect=on&utm_term=.b328f523f26f)
that the internet blackouts were illegal. Internet service operators
immediately restored social media services following this ruling.

In this report, we share [OONI data](https://api.ooni.io/files/by_country/ZW) that shows the blocking
of social media during Zimbabwe’s fuel protests. We also share [IODA data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ZW&lastView=overview&from=-1w&until=now)
which sheds light on the two internet disruptions that occurred in the
country over the last week.

* [Social media blocking](#social-media-blocking)

	* [WhatsApp and Facebook](#whatsapp-and-facebook)

	* [Twitter](#twitter)

	* [Instagram and YouTube](#instagram-and-youtube)

* [Internet blackouts](#internet-blackouts)

* [Conclusion](#conclusion)


# Social media blocking

Facebook, WhatsApp and Twitter were [reportedly blocked](https://www.bbc.com/news/world-africa-46917259) during the
fuel protests. To confirm this (and to examine how the censorship was
implemented), local communities in Zimbabwe ran [OONI Probe](https://ooni.io/install/), which is free software designed to
measure various forms of internet censorship.

## WhatsApp and Facebook

The [OONI Probe mobile app](https://ooni.io/install/) includes tests
specifically designed to measure the accessibility of
[WhatsApp](https://ooni.io/nettest/whatsapp/) and [Facebook Messenger](https://ooni.io/nettest/facebook-messenger/) (among [other tests](https://ooni.io/nettest/)). These tests have been run in
Zimbabwe fairly regularly [since 2017](https://api.ooni.io/files/by_country/ZW?order_by=test_start_time&order=asc)
and most (if not all) collected
[measurements](https://api.ooni.io/files/by_country/ZW) have always
suggested that the apps were accessible locally.

Now, for the first time, we observe the [blocking of WhatsApp](https://explorer.ooni.io/measurement/20190120T202253Z_AS30969_qe8TquIM74ePz55QeSKxjBFdoG5IOKBdxlyhhpVodq9PxgJjph)
in Zimbabwe, as illustrated below.

![OONI data graph: Blocking of IM apps in Zimbabwe](/post/zimbabwe/zw-im-blocking.png)

**Source:** Open Observatory of Network Interference (OONI) data:
Zimbabwe, [https://explorer.ooni.io/country/ZW](https://explorer.ooni.io/country/ZW)

The above graph (based on openly available [OONI data](https://explorer.ooni.io/country/ZW)) compares the accessibility
and blocking of WhatsApp and Facebook Messenger across 4 ISPs (from
which most recent measurements were collected) in Zimbabwe between 14th
January 2019 to 20th January 2019.

WhatsApp appears to have been blocked by all 4 ISPs:
[ZOL](https://explorer.ooni.io/measurement/20190120T202253Z_AS30969_qe8TquIM74ePz55QeSKxjBFdoG5IOKBdxlyhhpVodq9PxgJjph),
[TelOne](https://explorer.ooni.io/measurement/20190118T180243Z_AS37204_SG9pCmA0VTQ5lYIOJBcAxuaavG0EDjfVy5EUFWhgPJesAFBstF),
[NetOne](https://explorer.ooni.io/measurement/20190120T140336Z_AS328088_R9n5lrLGlZwBsYKqESvsLmfjOHXWezZ9YVKvXFUJ1aVowTVryv)
and [Liquid Telecom](https://explorer.ooni.io/measurement/20190120T061622Z_AS56696_gYESHBlzbo3CPQRSnkGabEzyw90MLag4an2MQE5u626kzl2Cea).
The [first anomaly](https://explorer.ooni.io/measurement/20190114T123244Z_AS56696_EZf4oUUzJe88oe1aMee5zOljC2MYDwL5uU398sLqPRNW9xujES)
was detected on Liquid Telecom on 14th January 2019 at around 12:30pm
UTC (with the blocking of WhatsApp endpoints), but the anomalies on this
network are more persistent from 3pm UTC on 16th January 2019 onwards.
Quite similarly, ZOL appears to [first attempt to block WhatsApp](https://explorer.ooni.io/measurement/20190114T200823Z_AS30969_o0QTtvLXDUu94NOisBNtQlLyBc6MLDBACRG0mLec26sVYiTuMW)
at around 8pm UTC on 14th January 2019, while almost all measurements
collected from 6am UTC on 15th January 2019 until 20th January 2019
consistently present
[anomalies](https://explorer.ooni.io/measurement/20190115T072039Z_AS30969_5auJ1od5wKovQFxd53A6HaPvjUNknXgY2rnjMO0BPRvSLrbyFR),
strongly suggesting that WhatsApp was blocked during this time. As of
21st January 2019, WhatsApp has been [unblocked on ZOL](https://explorer.ooni.org/measurement/20190121T174326Z_AS30969_mr9lRJwdTk7ttqSxf1fQrxBIn0OaJPkkZl5BwFBW4SMeJBohc7)
and other networks.

Facebook Messenger, on the other hand, appears to have mostly been
accessible on Liquid Telecom, NetOne and ZOL between 14th to 20th
January 2019. Measurements collected from TelOne consistently presented
[anomalies](https://explorer.ooni.io/measurement/20190117T025424Z_AS37204_j1I2VcmTyKo7vE8tLHeNK8amEusLFxVPJs0nhp3sWvSydtFOOv)
from 17th January 2019 onwards, showing that TCP connections to
Facebook’s endpoints failed. However, the limited volume of collected
measurements from this ASN limits our confidence in determining whether
Facebook Messenger was blocked by TelOne last week. Recent measurements
from 22nd January 2019
[show](https://explorer.ooni.org/measurement/20190122T050350Z_AS37204_49Z5CpCBqa7Fn4l8IWF5mKcUYYrOWpMZqqfEJDvCnJaTfnKnPc)
that Facebook Messenger is currently accessible on TelOne.

Even though Liquid Telecom, NetOne and ZOL didn’t appear to block the
Facebook Messenger app, these ISPs may have blocked access to
facebook.com. All recent measurements (from 17th January 2019 onwards)
testing the accessibility of facebook.com (with OONI Probe’s [Web Connectivity](https://ooni.io/nettest/web-connectivity/) test)
consistently [presented the same HTTP failures](https://explorer.ooni.io/measurement/20190117T025421Z_AS56696_aGwqKVuDk5ZLRRFiXW5OcwDKUqor3OsUlZPGFw5DDMsSUODRqy?input=https:%2F%2Fwww.facebook.com)
on Liquid Telecom, suggesting that the ISP may have blocked access to
Facebook’s website. Similarly, most Web Connectivity measurements
testing facebook.com from
[NetOne](https://explorer.ooni.io/measurement/20190115T082939Z_AS328088_St3FAQOqNGnSIgRDOpWqJzHNih5NAbvkKeSYJcUhGCWVpawQh3?input=https:%2F%2Ffacebook.com),
[TelOne](https://explorer.ooni.io/measurement/20190116T175340Z_AS37204_4n6eOmsTrIbzUk4ytmPcWYCqPFbrTB5To2pp0WxmFhQbvHdTLK?input=https:%2F%2Fwww.facebook.com)
and
[ZOL](https://explorer.ooni.io/measurement/20190116T145031Z_AS30969_NnP6srbpb1KitECFkZNz6Ms6pmdJwP2OT0wdqNVk2IFkaHzp70?input=https:%2F%2Fwww.facebook.com)
present HTTP failures from 15th January 2019 onwards. The lack of recent
measurements (post 20th January 2019) limits our ability to determine
whether the site has since been unblocked, but this has been reported by
locals.

It’s worth highlighting that via the above graph (displaying the
timeline of collected measurements testing both WhatsApp and Facebook
Messenger across 4 different ISPs), it’s evident that *two internet
blackouts* likely occurred:

* **First internet blackout:** Between 10am UTC on 15th January 2019
to 2pm UTC on 16th January 2019.

* **Second internet blackout:** Between 9pm UTC on 17th January 2019
to 2pm UTC on 18th January 2019.

While OONI Probe is not specifically designed to [measure internet blackouts](https://ooni.io/post/investigating-internet-blackouts/Investigating-Internet-Blackouts-Methodology-2018-03.pdf)
(since OONI Probe requires internet connectivity in order to perform
tests), the lack of measurements between the same time-frames, involving
different tests, and across 4 different ISPs, suggests that the internet
may have been shut down completely. Two internet shutdowns, during the
same time periods, were also
[reported](https://qz.com/africa/1524405/zimbabwe-protest-internet-shut-down-military-deployed-5-dead/)
by the media and by our local contacts.

This may, in fact, be the first time that we are, indirectly, observing
internet blackouts via OONI data.

## Twitter

Amid the deadly protests, Twitter was [reportedly blocked](https://www.bbc.com/news/world-africa-46917259) in Zimbabwe as
well.

Similarly to WhatsApp and Facebook Messenger, the following graph (based
on [OONI data](https://api.ooni.io/files/by_country/ZW)) shows the
blocking of twitter.com across 4 ISPs ([Liquid Telecom](https://explorer.ooni.io/measurement/20190118T143735Z_AS56696_2NAYy3gS2H1kML1lHz1sB1ozflT2V9TTHaaU69yRZ8rp2TDTAH?input=https:%2F%2Ftwitter.com%2Fpastorevanlive%2F),
[NetOne](https://explorer.ooni.io/measurement/20190115T083947Z_AS328088_0gulxJ7f8cvbrqS5i51LQM39PHZodKTBX5HNhUbN87As36H8Ih?input=https:%2F%2Ftwitter.com),
[TelOne](https://explorer.ooni.io/measurement/20190117T000359Z_AS37204_r7baSb5heHMI8dz3DLij65Deez1r3hiI2obqQW5TpJRdrZ72WX?input=https:%2F%2Ftwitter.com%2F),
[ZOL](https://explorer.ooni.io/measurement/20190119T184634Z_AS30969_YEqgG9k8K1fGa9F3emSQZmsWQXyPrU6YwQBh8VGQLumqXXh3Ws?input=https:%2F%2Ftwitter.com%2Fbititendai%3Flang%3Den))
between 14th January 2019 to 20th January 2019.

![OONI data graph: Blocking of Twitter in Zimbabwe](/post/zimbabwe/zw-twitter-blocking.png)

**Source:** Open Observatory of Network Interference (OONI) data:
Zimbabwe, [https://explorer.ooni.io/country/ZW](https://explorer.ooni.io/country/ZW)

OONI measurements suggest that
[NetOne](https://explorer.ooni.io/measurement/20190115T064705Z_AS328088_m3ozWpxfD83ysqKUTGX8agVpRL2eqfylU3PoybWTuxI7g3VYeZ?input=https:%2F%2Ftwitter.com)
and
[ZOL](https://explorer.ooni.io/measurement/20190115T072015Z_AS30969_jGmAq7ce3nczN17VHg2m9Wif6EM7uchnx1R9ZQJqP88x88R88v?input=https:%2F%2Fwww.twitter.com)
started blocking twitter.com on 15th January 2019 (at around 7am UTC).
All measurements collected from these 4 networks suggest that
twitter.com [remained blocked](https://explorer.ooni.io/measurement/20190119T111921Z_AS30969_0NGnilwTGrxEmbudhTxgCxUwObPaiTq9LRoIv3IaDdBPj7TP8S?input=https:%2F%2Ftwitter.com%2Fnelsonchamisa)
until 19th January 2019. The lack of subsequent measurements limits our
ability to determine whether twitter.com has been unblocked, but this
has been reported by locals.

It’s worth highlighting that the internet blackouts observed via the
previous graph (sharing data on WhatsApp and Facebook Messenger testing)
are *also* observed with data pertaining to the testing of twitter.com.
Across the same 4 ISPs, we can see the same lack of measurements during
the same time frames between 15th to 16th January 2019 and 17th to 18th
January 2019, further suggesting that two internet blackouts most likely
occurred in Zimbabwe.

## Instagram and YouTube

Both Instagram and YouTube appear to have been blocked during the
protests as well.

Using OONI Probe’s [Web Connectivity test](https://ooni.io/nettest/web-connectivity/), locals in Zimbabwe
tested instagram.com between 14th January 2019 to 17th January 2019 on
the following 3 networks: [Liquid Telecom](https://explorer.ooni.io/measurement/20190114T133828Z_AS56696_9MpkJiAxHpdSOT4TEQbaLPPQjP3WzN8PXUaAlvToGoT8pNL1Fg?input=https:%2F%2Fwww.instagram.com%2F),
[NetOne](https://explorer.ooni.io/measurement/20190115T082726Z_AS328088_1LRnO7Y613pYFNKUUZt7y8EV9QWK5RU76TEU6puVVr1GVDWE8W?input=https:%2F%2Finstagram.com)
and
[ZOL](https://explorer.ooni.io/measurement/20190117T062335Z_AS30969_eAXwzfms1SYaHRe6KMlSFzEbcTNyLpfOA2znZA7e2Z37n5XFqE?input=https:%2F%2Finstagram.com).

Almost all measurements from NetOne and ZOL present the same [HTTP failures](https://explorer.ooni.io/measurement/20190115T082726Z_AS328088_1LRnO7Y613pYFNKUUZt7y8EV9QWK5RU76TEU6puVVr1GVDWE8W?input=https:%2F%2Finstagram.com),
suggesting that these 2 ISPs may have blocked access to instagram.com
during the protests. Instagram was only tested on Liquid Telecom on 14th
January 2019 and those measurements show that the site was
[accessible](https://explorer.ooni.io/measurement/20190114T133646Z_AS56696_UnpWGF0ZSCasvoQkdPyjptiChlRPTebKvxGqNH8meK23QyNHbA?input=https:%2F%2Fwww.instagram.com%2F),
but it remains unclear if this ISP blocked instragram.com thereafter.

YouTube was also tested on Liquid Telecom, NetOne, TelOne and ZOL
between 14th to 17th January 2019, but the results are quite different.
Most measurements presented HTTP failures on [Liquid Telecom](https://explorer.ooni.io/measurement/20190116T152809Z_AS56696_BNouC8zU78VpWQFhxmsG5HhQ0YU7Ny8eGbldjQdJtjTAk56ZcA?input=https:%2F%2Fwww.youtube.com%2F),
[TelOne](https://explorer.ooni.io/measurement/20190117T171241Z_AS37204_ZyMJsN2HXamm5uLXpsPF0qSzzeOdou3btidQhqGtDd0uXzIW4U?input=https:%2F%2Fwww.youtube.com%2Fchannel%2FUC4a2DkDqH8ZqiGxeJVpueuw)
and
[ZOL](https://explorer.ooni.io/measurement/20190116T211805Z_AS30969_QVXfmwqVrOPx8PmcsgBtqbISkzbR1ebQdZ7XHtxRKi5eZQ2OQn?input=https:%2F%2Fwww.youtube.com%2F),
but [no anomalies were detected on NetOne](https://explorer.ooni.io/measurement/20190114T164214Z_AS328088_pnmb5yilJU09bwz7MJKGoE87YvG8s7qc9bpPye3ISUo0PJvjQY?input=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEBRsjH5jWmI%2F)
(though youtube.com was not tested on this network after around 5pm UTC
on 14th January 2019). YouTube was subsequently tested on NetOne on 21st
January 2019, the measurement of which
[shows](https://explorer.ooni.org/measurement/20190121T231317Z_AS328088_t2Lh9tInb3XES3nQbWOKbFePwJWq8vhUOxXEdVK3cvCToD2y9d?input=https:%2F%2Fwww.youtube.com%2Fchannel%2FUC4a2DkDqH8ZqiGxeJVpueuw)
that the site was accessible.

# Internet blackouts

As mentioned, the lack of OONI measurements across four different ISPs
between two distinct time frames signals the possibility of two internet
blackouts having occurred in Zimbabwe. This is further corroborated and
more strongly suggested via CAIDA’s [IODA data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ZW&lastView=overview&from=-1w&until=now),
illustrated below.

![IODA data graph: Internet disruptions in Zimbabwe](/post/zimbabwe/zw-ioda.png)

**Source:** Internet Outage and Detection Analysis (IODA): Zimbabwe,
[https://ioda.caida.org/ioda/dashboard\#view=inspect&entity=country/ZW&lastView=overview&from=-1w&until=now](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ZW&lastView=overview&from=-1w&until=now)

Starting at around 7am UTC on 15th January 2019, we can see a drop in
the number of visible IP prefixes, along with a drop of reachable IPs in
the Zimbabwean IP address space, as well as a drop of connection
attempts from Zimbabwean IPs reaching the IODA darknet. By midnight,
around 50% of Zimbabwe’s address space appears to have been withdrawn,
with the internet disruption lasting for around 15 hours. By 3pm UTC on
16th January 2019, Zimbabwe’s prefixes started to come back online and
connectivity was (mostly) recovered by 5pm UTC that day.

However, a second internet blackout is evident on the next day. Starting
from 9:15 pm UTC on 17th January 2019, we can observe a complete drop in
measurements, with around 50% of Zimbabwe’s prefixes being withdrawn
again. In this case, the internet blackout appears to have lasted for
about 15 hours (until 12:30 pm UTC on 18th January 2019), and
connectivity was restored by 2:30pm UTC on 18th January 2019.

Both internet blackouts detected via IODA data are also confirmed by the
lack of OONI measurements on the same dates and during the same time
periods.

# Conclusion

Although this was not the first time Zimbabwe experienced internet
censorship - for example, the election-watchdog site, zimelection.com,
was previously
[blocked](http://www.dszim.org/2018/08/10/zimbabwean-election-website-blocked-following-2018-general-elections/)
following the country’s 2018 general elections - this was the first time
that we observed social media censorship and a complete internet
blackout in Zimbabwe (following years of [collecting OONI measurements](https://api.ooni.io/files/by_country/ZW) from multiple
local vantage points).

On 21st January 2019, Zimbabwe’s High Court
[ruled](https://zwnews.com/breaking-internet-shut-down-illegal-zimbabwe-high-court-rules/)
that last week’s internet blackouts were illegal and ordered the
government to restore full internet access to the whole country.
Zimbabwean ISPs have since unblocked access to social media apps and
sites.

Zimbabwe, though, remains politically fragile.

Last week’s protests were triggered by the government’s announcement to
increase the price of fuel, but they
[reflect](https://www.bbc.com/news/world-africa-46938679) a deeper
dissatisfaction following decades of economic hardship. Robert Mugabe
governed the country for more than three decades, but was
[ousted](https://www.ft.com/content/de0ae300-ce94-11e7-9dbb-291a884dd8c6)
in 2017. Yet, the Zimbabwe African National Union - Patriotic Front
(ZANU-PF) continued to govern Zimbabwe, this time under a new leader:
President Emmerson Mnangagwa. The re-election of ZANU-PF, following the
2018 general elections, spurred [violent riots](https://www.bbc.com/news/world-africa-45035533) in Harare.
Following the latest protests, which were met with a violent crackdown
by authorities, the United Nations has
[called](https://news.un.org/en/audio/2019/01/1030832) for a probe
into state violence in Zimbabwe.

As political events unfold, continuing to monitor internet censorship is
essential. Since this study was carried out through the use of [free and open source software](https://ooni.io/install/), [open data](https://ooni.io/data/) and [open methodologies](https://ooni.io/docs/), it can be reproduced and
expanded upon.

We thank all the Zimbabwean volunteers who have run OONI Probe, making
this research possible.
