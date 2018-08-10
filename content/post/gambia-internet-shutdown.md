---
title: "The Gambia: Internet Shutdown during 2016 Presidential Election"
author: "Arturo Filastò (OONI), Arthur Gwagwa (CIPIT), Maria Xynou (OONI)"
date: "2016-12-09"
tags: ["gambia", "elections", "shutdown", "country-gm"]
categories: ["report"]
---

Last week we attempted to perform [OONI network measurement tests](https://github.com/TheTorProject/ooni-probe) in the Gambia
to examine whether websites were blocked during its 2016 presidential election.
But merely a few hours after we connected our probe to perform tests, it stopped
working completely.

We suspected that this was due to an internet shutdown. To confirm this, we
referred to third-party data to examine whether a country-wide internet blackout
was taking place.

In this report, we summarize some of our key findings pertaining to the internet
shutdown that appears to have occurred in the Gambia on the eve of its 2016
presidential election.

# 2016 presidential election

President Yahya Jammeh [governed](http://www.bbc.com/news/world-africa-38183906) the Gambia for 22 years, following a coup in
1994. Since then, Jammeh won every election and reportedly [stated](http://qz.com/850002/gambias-government-has-shut-down-the-internet-on-the-eve-of-elections/) that he
intended to rule for “one billion years”. The opposition, however, became
increasingly popular and Adama Barrow of the United Democratic Party [won](http://www.bbc.com/news/world-africa-38183906) the
last elections on 1st December 2016.

Thousands of opposition supporters [demonstrated](http://www.africanews.com/2016/11/30/no-demonstrations-after-elections-gambia-s-jammeh-orders/) peacefully leading up to the
elections. Omar Amadou Jallow, an opposition leader for the People’s Progressive
Party, [stated](http://www.sfchronicle.com/news/world/article/Gambia-s-president-warns-against-protests-after-10644654.php):

*“For 22 years we have realized that Gambia has been turned into a prison; the
arrests, the tensions, the torture and many of our people have gone into exile
... That shows the tyranny of the regime.”*

President Jammeh [criticized](http://www.sfchronicle.com/news/world/article/Gambia-s-president-warns-against-protests-after-10644654.php) the protests, arguing that there was no reason for
anybody to demonstrate since the Gambia’s election system is rig-proof, and that
“demonstrations are the loopholes that are used to destabilize African
governments”.

Internet shutdowns, carried out for stifling communications amongst protesters,
have become increasingly [common](http://qz.com/850002/gambias-government-has-shut-down-the-internet-on-the-eve-of-elections/) in African countries during election periods. On
the eve of the Gambia’s election, the [Keep It On campaign](https://www.accessnow.org/keepiton/) published an [open letter](https://www.accessnow.org/keepiton-joint-letter-internet-election-gambia/) to President Jammeh, requesting that the internet is kept on to ensure
the stability and openness of the internet during the 2016 elections. However,
there appears to have been a country-wide internet blackout, as documented
through data in the section below.

# Internet shutdown

Through BGP announcement data aggregated by RIPE from 18 different [Remote Route Collectors (RRC)](https://www.ripe.net/analyse/internet-measurements/routing-information-service-ris/faq-ris/what-is-a-remote-route-collector-rrc) we can see that the first update withdrawing a prefix inside of
Gambia dates 2016-11-30 20:04:04.

Below are the times at which each of the RRCs saw the first Gambian prefix
withdrawn.

| rrc_id | timestamp           | prefix           |
|--------|---------------------|------------------|
| 0      | 2016-11-30 20:04:31 | 196.223.144.0/21 |
| 1      | 2016-11-30 20:04:05 | 212.60.64.0/19   |
| 3      | 2016-11-30 20:04:05 | 212.60.64.0/19   |
| 4      | 2016-11-30 20:04:26 | 196.223.144.0/21 |
| 5      | 2016-11-30 20:04:09 | 212.60.64.0/19   |
| 6      | 2016-11-30 20:04:31 | 196.223.144.0/21 |
| 7      | 2016-11-30 20:04:05 | 212.60.90.0/24   |
| 10     | 2016-11-30 20:04:31 | 196.223.144.0/21 |
| 11     | 2016-11-30 20:04:05 | 212.60.64.0/19   |
| 12     | 2016-11-30 20:04:04 | 196.223.144.0/21 |
| 13     | 2016-11-30 20:04:05 | 196.223.144.0/21 |
| 14     | 2016-11-30 20:04:31 | 196.223.144.0/21 |
| 15     | 2016-11-30 20:04:35 | 196.223.144.0/21 |
| 16     | 2016-11-30 20:04:31 | 196.223.144.0/21 |
| 18     | 2016-11-30 20:04:52 | 196.223.144.0/21 |
| 19     | 2016-11-30 20:05:24 | 196.223.144.0/21 |
| 20     | 2016-11-30 20:04:05 | 196.223.144.0/21 |
| 21     | 2016-11-30 20:04:04 | 196.223.144.0/21 |

*Source: https://stat.ripe.net/data/bgp-updates/data.json*

At around this time it was confirmed from various sources that internet
connectivity in the Gambia was being disrupted.

![Twitter post](/post/gambia-shutdown/gambia-01.png)

*Source: https://twitter.com/PsiphonInc/status/804089275017023488*

![Twitter post](/post/gambia-shutdown/gambia-02.png)

*Source: https://twitter.com/akamai_soti/status/804305892980256768*

Worldwide traffic data from Google is also consistent with the above reports as
illustrated below.

![Twitter post](/post/gambia-shutdown/gambia-03.png)

*Source: https://www.google.com/transparencyreport/traffic/explorer/?r=GM&l=WEBSEARCH&csd=1479483000000&ced=1480692600000*

## On and then off again

Some prefixes at 04:46:26 on 2016-12-02 appear to have been announced again,
only to be withdrawn 20 minutes later (2016-12-02 05:06:52).

| rrc_id | timestamp          | prefix           | path                                     | type |
|--------|--------------------|------------------|------------------------------------------|------|
| 0      | 2016-12-02 4:46:26 | 41.223.212.0/22  | [7018, 1299, 8657, 37309]                | A    |
| 1      | 2016-12-02 4:46:26 | 41.223.212.0/22  | [56730, 51945, 1299, 8657, 37309]        | A    |
| 3      | 2016-12-02 4:46:26 | 196.46.232.0/22  | [1103, 3257, 1299, 8657, 37309]          | A    |
| 4      | 2016-12-02 4:46:26 | 41.223.212.0/22  | [34781, 13030, 8657, 37309]              | A    |
| 5      | 2016-12-02 4:46:26 | 41.223.212.0/22  | [13237, 8657, 37309]                     | A    |
| 6      | 2016-12-02 4:46:25 | 196.46.232.0/22  | [25152, 6939, 8657, 37309]               | A    |
| 7      | 2016-12-02 4:46:26 | 41.223.212.0/22  | [47872, 2914, 1299, 8657, 37309]         | A    |
| 10     | 2016-12-02 4:46:26 | 41.223.212.0/22  | [12637, 3257, 1299, 8657, 37309]         | A    |
| 11     | 2016-12-02 4:46:26 | 41.223.212.0/22  | [15547, 1299, 8657, 37309]               | A    |
| 12     | 2016-12-02 4:46:26 | 197.242.128.0/20 | [25220, 3356, 1299, 8657, 37309]         | A    |
| 13     | 2016-12-02 4:46:26 | 197.242.128.0/20 | [24482, 8657, 37309]                     | A    |
| 14     | 2016-12-02 4:46:26 | 197.242.128.0/20 | [6762, 1299, 8657, 37309]                | A    |
| 15     | 2016-12-02 4:46:26 | 197.242.128.0/20 | [16735, 3549, 3356, 1299, 8657, 37309]   | A    |
| 16     | 2016-12-02 4:46:26 | 196.49.1.0/24    | [20080, 6762, 1299, 8657, 37309, 327719] | A    |
| 18     | 2016-12-02 4:46:30 | 196.46.236.0/22  | [35699, 2914, 8657, 37309]               | A    |
| 19     | 2016-12-02 4:46:46 | 197.242.128.0/20 | [3491, 3257, 8657, 37309]                | A    |
| 20     | 2016-12-02 4:46:26 | 197.242.128.0/20 | [202194, 6939, 8657, 37309]              | A    |
| 21     | 2016-12-02 4:46:26 | 197.242.128.0/20 | [34019, 8657, 37309]                     | A    |

*Source: https://stat.ripe.net/data/bgp-updates/data.json*

It remains unclear though if this was done intentionally, or if it was a
mistake.

We can see, however, from the above [Google traffic graph](https://www.google.com/transparencyreport/traffic/explorer/?r=GM&l=WEBSEARCH&csd=1479483000000&ced=1480692600000) that some users at that
time were accessing Google, indicating that connectivity was actually restored
for a brief period of time and that people took advantage of it.

Internet connectivity though appears to have lasted for a very short amount of
time, as the routes were unannounced at 5:06.

| rrc_id | timestamp          | prefix           | type |
|--------|--------------------|------------------|------|
| 0      | 2016-12-02 5:06:52 | 197.242.128.0/22 | W    |
| 1      | 2016-12-02 5:06:16 | 197.242.140.0/23 | W    |
| 3      | 2016-12-02 5:06:12 | 41.223.212.0/22  | W    |
| 4      | 2016-12-02 5:06:53 | 197.242.128.0/22 | W    |
| 5      | 2016-12-02 4:46:27 | 196.49.1.0/24    | W    |
| 6      | 2016-12-02 5:07:16 | 41.223.212.0/23  | W    |
| 7      | 2016-12-02 5:06:13 | 41.223.212.0/22  | W    |
| 10     | 2016-12-02 5:06:13 | 41.223.212.0/22  | W    |
| 11     | 2016-12-02 5:06:13 | 41.223.212.0/22  | W    |
| 12     | 2016-12-02 5:06:12 | 41.223.212.0/22  | W    |
| 13     | 2016-12-02 5:06:13 | 41.223.212.0/22  | W    |
| 14     | 2016-12-02 5:06:53 | 197.242.128.0/20 | W    |
| 15     | 2016-12-02 5:07:01 | 41.223.212.0/23  | W    |
| 16     | 2016-12-02 5:06:54 | 41.223.214.0/23  | W    |
| 18     | 2016-12-02 5:07:24 | 41.223.212.0/23  | W    |
| 19     | 2016-12-02 5:08:06 | 196.46.236.0/22  | W    |
| 20     | 2016-12-02 5:06:16 | 196.46.232.0/22  | W    |
| 21     | 2016-12-02 5:06:16 | 196.46.232.0/22  | W    |

*Source: https://stat.ripe.net/data/bgp-updates/data.json*

At 11:28 UTC of 2nd December the internet started being accessible again, as
shown through the following announcements.

| rrc_id | timestamp           | prefix           | path                                    | type |
|--------|---------------------|------------------|-----------------------------------------|------|
| 0      | 2016-12-02 11:28:36 | 197.242.128.0/20 | [3333, 1103, 3257, 6453, 8657, 37309]   | A    |
| 1      | 2016-12-02 11:28:36 | 197.242.128.0/20 | [56730, 51945, 1299, 6453, 8657, 37309] | A    |
| 3      | 2016-12-02 11:28:36 | 197.242.128.0/20 | [8283, 57866, 1299, 6453, 8657, 37309]  | A    |
| 4      | 2016-12-02 11:28:36 | 197.242.128.0/20 | [34781, 1299, 6453, 8657, 37309]        | A    |
| 5      | 2016-12-02 11:28:36 | 197.242.128.0/20 | [13237, 8657, 37309]                    | A    |
| 6      | 2016-12-02 11:28:35 | 197.242.128.0/20 | [25152, 6939, 8657, 37309]              | A    |
| 7      | 2016-12-02 11:28:36 | 197.242.128.0/20 | [6667, 3257, 1299, 8657, 37309]         | A    |
| 10     | 2016-12-02 11:28:36 | 197.242.128.0/20 | [41497, 3257, 6453, 8657, 37309]        | A    |
| 11     | 2016-12-02 11:28:36 | 197.242.128.0/20 | [24482, 8657, 37309]                    | A    |
| 12     | 2016-12-02 11:28:36 | 41.223.212.0/22  | [29686, 8657, 37309]                    | A    |
| 13     | 2016-12-02 11:28:36 | 197.242.128.0/20 | [25227, 1299, 8657, 37309]              | A    |
| 14     | 2016-12-02 11:28:36 | 197.242.128.0/20 | [14061, 3356, 3257, 8657, 37309]        | A    |
| 15     | 2016-12-02 11:28:36 | 197.242.128.0/20 | [52720, 3549, 3356, 1299, 8657, 37309]  | A    |
| 16     | 2016-12-02 11:28:36 | 197.242.128.0/20 | [20080, 8657, 37309]                    | A    |
| 18     | 2016-12-02 11:28:40 | 155.251.0.0/16   | [35699, 2914, 8657, 37309]              | A    |
| 19     | 2016-12-02 11:28:50 | 160.182.0.0/15   | [3491, 8657, 37309]                     | A    |
| 20     | 2016-12-02 11:28:36 | 197.242.128.0/20 | [8758, 8220, 8657, 37309]               | A    |
| 21     | 2016-12-02 11:28:36 | 196.46.232.0/21  | [24482, 8657, 37309]                    | A    |

*Source: https://stat.ripe.net/data/bgp-updates/data.json*

The time it took for each prefix to be announced again was fairly swift, leading
us to believe that ISPs coordinated tightly with the government to roll out the
blocking and the unblocking of the internet.

| prefix           | timestamp           | rrc_id | path                               | type |
|------------------|---------------------|--------|------------------------------------|------|
| 146.196.128.0/17 | 2016-12-02 11:28:35 | 6      | [25152, 6939, 8657, 37309]         | A    |
| 197.242.140.0/23 | 2016-12-02 11:28:35 | 6      | [25152, 6939, 8657, 37309]         | A    |
| 197.242.128.0/20 | 2016-12-02 11:28:35 | 6      | [25152, 6939, 8657, 37309]         | A    |
| 196.49.1.0/24    | 2016-12-02 11:28:35 | 6      | [25152, 6939, 8657, 37309, 327719] | A    |
| 196.46.236.0/22  | 2016-12-02 11:28:35 | 6      | [25152, 6939, 8657, 37309]         | A    |
| 41.223.212.0/22  | 2016-12-02 11:28:35 | 6      | [25152, 6939, 8657, 37309]         | A    |
| 196.46.232.0/21  | 2016-12-02 11:28:35 | 6      | [25152, 6939, 8657, 37309]         | A    |
| 160.182.0.0/15   | 2016-12-02 11:28:35 | 6      | [25152, 6939, 8657, 37309]         | A    |
| 155.251.0.0/16   | 2016-12-02 11:28:35 | 6      | [25152, 6939, 8657, 37309]         | A    |
| 196.46.232.0/22  | 2016-12-02 11:28:35 | 6      | [25152, 6939, 8657, 37309]         | A    |
| 196.223.144.0/21 | 2016-12-02 11:29:21 | 6      | [25152, 6939, 8657, 25250]         | A    |
| 212.60.64.0/19   | 2016-12-02 11:29:21 | 6      | [25152, 6939, 8657, 25250]         | A    |
| 212.60.90.0/24   | 2016-12-02 11:29:21 | 6      | [25152, 6939, 8657, 25250]         | A    |
| 41.223.214.0/23  | 2016-12-02 11:30:27 | 0      | [3333, 1257, 5511, 37309]          | A    |
| 197.242.128.0/22 | 2016-12-02 11:30:27 | 15     | [52863, 4809, 4134, 5511, 37309]   | A    |
| 41.223.212.0/23  | 2016-12-02 11:30:27 | 1      | [5511, 37309]                      | A    |
| 197.255.192.0/20 | 2016-12-02 11:30:54 | 1      | [5511, 37323]                      | A    |
| 212.60.76.0/24   | 2016-12-02 11:31:22 | 6      | [25152, 6939, 8657, 25250]         | A    |
| 197.231.204.0/22 | 2016-12-02 11:32:43 | 15     | [52863, 4809, 4134, 5511, 37552]   | A    |
| 197.148.72.0/21  | 2016-12-02 11:33:29 | 6      | [25152, 6939, 60171, 37524]        | A    |
| 41.76.12.0/24    | 2016-12-02 12:34:41 | 6      | [25152, 6939, 8657, 37503]         | A    |
| 41.76.8.0/21     | 2016-12-02 12:35:12 | 6      | [25152, 6939, 1299, 8657, 37503]   | A    |
| 197.231.128.0/21 | 2016-12-02 12:35:12 | 6      | [25152, 6939, 8657, 37503]         | A    |
| 212.60.74.0/24   | 2016-12-02 17:45:15 | 6      | [25152, 2914, 5511, 25250]         | A    |
| 212.60.71.0/24   | 2016-12-02 17:45:15 | 6      | [25152, 2914, 5511, 25250]         | A    |
| 212.60.77.0/24   | 2016-12-02 17:45:15 | 6      | [25152, 6939, 1299, 5511, 25250]   | A    |
| 212.60.78.0/24   | 2016-12-02 17:45:15 | 6      | [25152, 2914, 5511, 25250]         | A    |
| 212.60.79.0/24   | 2016-12-02 17:45:15 | 6      | [25152, 6939, 1299, 5511, 25250]   | A    |
| 212.60.84.0/24   | 2016-12-02 17:45:15 | 6      | [25152, 2914, 5511, 25250]         | A    |
| 212.60.87.0/24   | 2016-12-02 17:45:15 | 6      | [25152, 2914, 5511, 25250]         | A    |
| 212.60.88.0/24   | 2016-12-02 17:45:15 | 6      | [25152, 2914, 5511, 25250]         | A    |
| 212.60.69.0/24   | 2016-12-02 17:45:15 | 6      | [25152, 2914, 5511, 25250]         | A    |
| 212.60.66.0/24   | 2016-12-02 17:45:15 | 6      | [25152, 2914, 5511, 25250]         | A    |
| 212.60.65.0/24   | 2016-12-02 17:45:15 | 6      | [25152, 6939, 1299, 5511, 25250]   | A    |
| 212.60.72.0/24   | 2016-12-02 17:45:15 | 6      | [25152, 2914, 5511, 25250]         | A    |
| 212.60.68.0/24   | 2016-12-02 17:45:15 | 6      | [25152, 2914, 5511, 25250]         | A    |
| 212.60.85.0/24   | 2016-12-02 17:55:53 | 6      | [25152, 6939, 1299, 8657, 25250]   | A    |

*Source: https://stat.ripe.net/data/bgp-updates/data.json*

Several sources, including our own researchers on the ground, confirmed that the
internet had started working again at 12:00 UTC of 2nd December, after the
Gambia’s 2016 presidential election had concluded.

This can also be confirmed through the graphs below.

![Twitter post](/post/gambia-shutdown/gambia-04.png)

![Twitter post](/post/gambia-shutdown/gambia-05.png)

*Source: https://stat.ripe.net/GM#tabId=routing*

# #KeepItOn

Internet shutdowns, especially when carried out during elections and other
political events, pose restrictions to human rights because they limit the
public's ability to communicate, coordinate, share and access information.
Shutdowns can also harm business interests and foreign relations, if carried out
for extended periods of time.

We encourage organizations around the world to support [Access Now's #KeepItOn campaign](https://www.accessnow.org/keepiton/) for a stable and open internet around the world.
