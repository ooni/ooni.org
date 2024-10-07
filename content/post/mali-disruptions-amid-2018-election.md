---
title: "Mali: Social media disruptions amid 2018 presidential election?"
author: "Maria Xynou (OONI), Julie Owono (Internet Sans Frontieres)"
date: "2018-07-31"
tags: ["mali", "censorship", "whatsapp", "socialmedia", "country-ml", "theme-social_media", "theme-im", "theme-circumvention"]
categories: ["report"]
---

Two days ago, on 29th July 2018, Malians went to the polls to vote in [presidential elections](http://www.africanews.com/2018/07/26/mali-2018-presidential-election-top-10-facts/)
and [reported](https://twitter.com/Internet_SF/status/1023883426208915456) that social media was inaccessible.

This is _not_ the first time that social media is reportedly blocked in Mali.
Facebook and Twitter were [blocked two years ago](https://qz.com/762082/mali-is-the-latest-african-country-to-impose-a-social-media-blackout/)
amidst violent protests against the detention of a popular radio host. Last
month, Internet Sans Frontieres [reported](https://www.accessnow.org/fighting-censorship-in-2018-elections/)
that social media was disrupted in Mali, following a violent police crackdown
on banned opposition protests calling for transparency and accountability in
the 2018 presidential elections.

In this post, OONI and [Internet Sans Frontieres](https://internetwithoutborders.org/) share [OONI network measurement data](https://explorer.ooni.org/country/ML),
corroborating local reports on the blocking of WhatsApp and Twitter during
Mali’s 2018 presidential election.

## Measuring internet censorship in Mali

Daily [OONI network measurements](https://api.ooni.io/files/by_country/ML)
have been collected from Mali for more than a year, thanks to our local partners. These measurements,
collected mainly from Orange Mali (AS30985), show that most of the
([internationally relevant](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)
and [local](https://github.com/citizenlab/test-lists/blob/master/lists/ml.csv))
tested websites have been accessible, along with popular instant messaging
apps, like WhatsApp and Facebook Messenger.

Access to WhatsApp and Twitter though was suddenly disrupted last Sunday on
election day, as suggested by OONI data. We also observe a censorship policy
change in relation to the accessibility of circumvention tool sites
guardianproject.info and anonymizer.ru.

### WhatsApp

OONI’s [WhatsApp test](/nettest/whatsapp/) is designed to measure the blocking
of WhatsApp’s app and web version. The test attempts to establish TCP
connections to WhatsApp’s registration server and endpoints, and performs DNS lookups
and HTTP requests to web.whatsapp.com. Over the last year, this test has been
run on a daily basis from Orange Mali (AS30985), with most (if not all)
measurements confirming the app’s accessibility in the country.

WhatsApp though may have been blocked on 29th July 2018, as suggested by
[OONI data](https://api.ooni.io/files/by_country/ML). The table below shows
results (from AS30985) pertaining to the testing of WhatsApp’s registration
server, endpoints and web version in the evening of Mali’s latest elections.

| Time        | WhatsApp registration server status | WhatsApp endpoints status | web.whatsapp.com status |
|-------------|-------------------------------------|---------------------------|-------------------------|
| [17:43 local](https://explorer.ooni.org/measurement/20180729T174358Z_AS30985_iqn5JSxk70yf22AOUI3syjVl6BxNlgGcx6f1OdDuMANPKLzk0f) | OK                                  | OK                        | Connection reset        |
| [19:08 local](https://explorer.ooni.org/measurement/20180729T190855Z_AS30985_P80GekW4UhMA9BkXQKZ4WSSlSdAxuYGHuC2Aljz5r4SUIXBnVs) | Generic timeout error               | OK                        | Generic timeout error   |
| [19:18 local](https://explorer.ooni.org/measurement/20180729T191825Z_AS30985_Od9SSMzlAZ5VWeMidsjF6URaDDuUtxzFTIN0nCnGrhvCEinSIE) | OK                                  | OK                        | Generic timeout error   |
| [19:26 local](https://explorer.ooni.org/measurement/20180729T192646Z_AS30985_L6v4YCZn4hufvc4dkgAhAUuVZWHThuf5hh9nbWVK7Njs63Axjp) | Generic timeout error               | OK                        | OK                      |

Our findings suggest that WhatsApp’s web version was likely blocked, since TCP
connections to web.whatsapp.com were unsuccessful and rendered errors. Access
though appears to have been restored by 19:26 local Mali time. Quite similarly,
access to WhatsApp’s app might have also been blocked, since TCP connections to
WhatsApp’s registration server failed.

It’s worth highlighting though that WhatsApp wasn’t blocked by all ISPs. Many
OONI measurements, for example, collected from SOTELMA (AS21271) show that both
WhatsApp’s app and web version were accessible between 12:55 to 20:53 local
time on 29th July 2018.

### Twitter and circumvention tool sites

Access to Twitter appears to have been blocked in the evening of Mali’s
elections, along with two circumvention tool sites (guardianproject.info and
anonymizer.ru).

The following table shows that although these sites were accessible (from
AS30985) up until (at least) the early hours of 29th July 2018, their testing
presented failures in the evening, suggesting that access to them was blocked.

| URL                          | Time        | Results      |
|------------------------------|-------------|--------------|
| ``https://twitter.com``          | 01:19 local | [Accessible](https://explorer.ooni.org/measurement/20180729T010021Z_AS30985_sl9bNrOpPONSv1NkOz4JXlpjcCN6klmRrglMviBKLj7O8X5Dcv?input=https:%2F%2Ftwitter.com)   |
| ``https://twitter.com``          | 17:38 local | [SSL error](https://explorer.ooni.org/measurement/20180729T173750Z_AS30985_cJisIu0RELvv31cpq28KEgyiURi6l9frVpHtWCdJy8rhkovUpN?input=http:%2F%2Ftwitter.com%2Fanonops)    |
| ``https://guardianproject.info`` | 01:22 local | [Accessible](https://explorer.ooni.org/measurement/20180729T010021Z_AS30985_sl9bNrOpPONSv1NkOz4JXlpjcCN6klmRrglMviBKLj7O8X5Dcv?input=https:%2F%2Fguardianproject.info)   |
| ``https://guardianproject.info`` | 19:14 local | [HTTP failure](https://explorer.ooni.org/measurement/20180729T191448Z_AS30985_VSIxO0z4xkjVseK4yVZu5Mg7kbO970legMAq85jNjV4jYX5SK3?input=https:%2F%2Fguardianproject.info) |
| ``http://www.anonymizer.ru``     | 01:16 local | [Accessible](https://explorer.ooni.org/measurement/20180729T010021Z_AS30985_sl9bNrOpPONSv1NkOz4JXlpjcCN6klmRrglMviBKLj7O8X5Dcv?input=http:%2F%2Fwww.anonymizer.ru)   |
| ``http://www.anonymizer.ru``     | 19:14 local | [HTTP failure](https://explorer.ooni.org/measurement/20180729T191448Z_AS30985_VSIxO0z4xkjVseK4yVZu5Mg7kbO970legMAq85jNjV4jYX5SK3?input=http:%2F%2Fwww.anonymizer.ru) |

All of the URLs included in the above table were accessible over the last
months based on daily [OONI Probe](/install/) testing. The fact that they
suddenly presented network anomalies on the same evening of the same date (29th
July 2018) suggests a change in censorship policy and that Orange Mali
(AS30985) may have (temporarily) blocked access to them. Similarly to the
testing of WhatsApp, measurements collected from SOTELMA (AS21271) on 29th July
2018 show that Twitter was accessible.

Circumvention tools are usually blocked around the world in an attempt to make
censorship circumvention harder. The blocking of the [Guardian Project](https://guardianproject.info/)
(which develops various censorship circumvention tools) and anonymizer.ru could
potentially be an attempt to reinforce the blocking of social media in Mali.

The blocking of certain social media comes at a [highly tense political period](https://abcnews.go.com/International/wireStory/mali-votes-presidential-election-amid-insecurity-56895791). The west African country has been in
[turmoil](https://www.aljazeera.com/news/africa/2012/03/2012322111037483270.html)
since 2012, when ethnic and Islamist insurgents seized the northern region of
Mali. According to UN figures,
[more than 300 civilians have died](https://www.reuters.com/article/us-mali-security/almost-300-malians-killed-this-year-in-militia-clashes-u-n-idUSKBN1K71KV)
in ethnic clashes this year alone.

Leading up to the latest presidential election, armed groups
[issued threats](https://www.aljazeera.com/news/2018/07/mali-votes-presidential-polls-dominated-security-concerns-180729091749445.html)
of violence, warning that they would try to disrupt the elections, particularly
in the country’s northern region. While no major incidents were reported in the
south and the [voting “went smoothly” in the capital](https://www.aljazeera.com/news/2018/07/mali-votes-presidential-polls-dominated-security-concerns-180729091749445.html),
several violent incidents were [reported](http://www.france24.com/en/20180730-low-turnout-mali-election-violence-presidential-keita-cisse-mopti)
in northern and central Mali, limiting voter turnout. 

In addition, a [controversy on the existence of a parallel voter list](https://www.washingtonpost.com/news/monkey-cage/wp/2018/07/28/mali-has-an-important-election-on-sunday-will-it-be-peaceful/) emerged a few weeks before the election, casting doubts in the opposition on whether the election would be free and fair. If no candidate gains
more than 50% of the vote, a second round of elections will take place on 12th
August 2018.

As part of this study, we used [free and open source software](/install/),
[open methodologies](/docs/), and [open data](https://api.ooni.io/files/by_country/ML).
Our research methodologies can therefore be reproduced and this study can be
expanded upon as political events unfold. 
