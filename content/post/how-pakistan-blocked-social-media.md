---
title: "How Pakistan blocked news outlets, social media sites, and IM apps amidst protests"
author: "Maria Xynou (OONI), Arturo Filastò (OONI), Shahzad Ahmad (Bytes for All Pakistan), Abdul Salam (Bytes for All Pakistan)"
date: "2017-11-29"
tags: ["pakistan", "censorship", "country-pk", "theme-news_media", "theme-social_media", "theme-im"]
categories: ["report"]
---

Last weekend, a number of social media sites and news outlets were
[blocked](https://dailytimes.com.pk/147132/social-media-goes-down-in-pakistan/)
in Pakistan during [Islamist protests](https://www.theguardian.com/world/2017/nov/25/pakistan-calls-on-army-to-restore-order-as-blasphemy-protests-spread).
Protesters gathered in Islamabad alleged that Mr. Zahid Hamid, the
Federal Law Minister, should be removed from his position because he
omitted a reference to the Prophet Muhammad in a parliamentary bill. On
Saturday, 25th November 2017, law enforcement agencies initiated an
operation to disperse the sit-in at the Faizabad Interchange linking
Islamabad and Rawalpindi.

As information about the government operation was reported by the media,
protests spread across the country, literally jamming roads and closing
businesses. The Pakistan Electronic Media Regulatory Authority (PEMRA)
[prohibited](https://twitter.com/reportpemra/status/934324775161356289)
live coverage of the operation at Faizabad, leading to governmental
[blocking](https://www.dawn.com/news/1372804) of social media sites
and online news channels.

In this post, we provide technical evidence of observed censorship
events. We share [OONI network measurement data](https://api.ooni.io/files/by_country/PK) collected from Pakistan,
confirming the DNS-based blocking of Facebook, YouTube, Twitter, and
Instagram. We confirm the DNS blocking of 14 news websites, as well as
the censorship of applications including Facebook Messenger, Telegram,
and WhatsApp’s web interface. All of these censorship events were
temporarily implemented last weekend, and are no longer in place.

* [Blocking of social media sites](#blocking-of-social-media-sites)

* [Blocking of instant messaging apps](#blocking-of-instant-messaging-apps)

  * [Facebook Messenger](#facebook-messenger)

  * [WhatsApp](#whatsapp)

  * [Telegram](#telegram)

* [Blocking of news websites](#blocking-of-news-websites)

* [Circumventing censorship](#circumventing-censorship)

* [Reproducing this study](#reproducing-this-study)

# Blocking of social media sites

Facebook, Twitter, YouTube, and Instagram were [reportedly blocked](https://dailytimes.com.pk/147132/social-media-goes-down-in-pakistan/)
in Pakistan last Saturday, 25th November, and Sunday, 26th November
2017.

To confirm these reports and examine how the blocks were implemented, we
analyzed [OONI network measurement data](https://api.ooni.io/files/by_country/PK) collected from Pakistan.
[OONI Probe](https://ooni.org/install/) is [free and open source software](https://github.com/TheTorProject/ooni-probe) designed
to measure internet censorship, including the [blocking of websites](https://ooni.org/nettest/web-connectivity/).
Community members in Pakistan have been running OONI Probe on a daily
basis for more than a year, providing data on the changing availability
of websites.

Our analysis confirms the DNS-based blocking of Facebook, Twitter,
YouTube, and Instagram, as summarized in the table below.

| Probed ASNs | Date of measurement | Tested URL                | Result       |
|-------------|---------------------|---------------------------|--------------|
| AS45595     | 2017-11-25          | `https://www.facebook.com`  | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T171126Z_AS45595_sULKkDkDyk5Nky1SzJkjSIHVOrHmsiQYtHvt1GKZ63FvfVnBZd&input=https%3A%2F%2Fwww.facebook.com) |
| AS45595     | 2017-11-25          | `https://www.youtube.com`   | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T171126Z_AS45595_sULKkDkDyk5Nky1SzJkjSIHVOrHmsiQYtHvt1GKZ63FvfVnBZd&input=https%3A%2F%2Fwww.youtube.com) |
| AS45595     | 2017-11-25          | `https://www.instagram.com` | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T171126Z_AS45595_sULKkDkDyk5Nky1SzJkjSIHVOrHmsiQYtHvt1GKZ63FvfVnBZd&input=https%3A%2F%2Fwww.instagram.com) |
| AS45595     | 2017-11-25          | `https://twitter.com`      | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T171126Z_AS45595_sULKkDkDyk5Nky1SzJkjSIHVOrHmsiQYtHvt1GKZ63FvfVnBZd&input=https%3A%2F%2Fwww.twitter.com) |
| AS45595     | 2017-11-26          | `https://www.facebook.com`  | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T014654Z_AS45595_N0E3jiJhxJzySNk11voDTC52Y0kzGvVYXebqcaw8sKa1yfbr1Z&input=https%3A%2F%2Fwww.facebook.com) |
| AS45595     | 2017-11-26          | `https://www.youtube.com`   | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T014654Z_AS45595_N0E3jiJhxJzySNk11voDTC52Y0kzGvVYXebqcaw8sKa1yfbr1Z&input=https%3A%2F%2Fwww.youtube.com) |
| AS45595     | 2017-11-26          | `https://www.instagram.com` | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T014059Z_AS45595_iuvwGbm0YYp30OEYSgj85lYKON3FlqLOjMwzFHMLOqBKl7kMCd&input=https%3A%2F%2Fwww.instagram.com%2F) |
| AS45595     | 2017-11-26          | `https://twitter.com`       | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T014654Z_AS45595_N0E3jiJhxJzySNk11voDTC52Y0kzGvVYXebqcaw8sKa1yfbr1Z&input=https%3A%2F%2Fwww.twitter.com) |
| AS23674     | 2017-11-26          | `https://www.facebook.com`  | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T013647Z_AS23674_CpNu06qQRpHefvuZ93GRcfiLPGQjz5MBKa5XaxzijGSObzg0BR&input=https%3A%2F%2Fwww.facebook.com) |
| AS23674     | 2017-11-26          | `https://www.youtube.com`   | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T013647Z_AS23674_CpNu06qQRpHefvuZ93GRcfiLPGQjz5MBKa5XaxzijGSObzg0BR&input=https%3A%2F%2Fwww.youtube.com) |
| AS23674     | 2017-11-26          | `https://www.instagram.com` | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T013647Z_AS23674_CpNu06qQRpHefvuZ93GRcfiLPGQjz5MBKa5XaxzijGSObzg0BR&input=https%3A%2F%2Fwww.instagram.com%2F) |
| AS23674     | 2017-11-26          | `https://twitter.com`       | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T013647Z_AS23674_CpNu06qQRpHefvuZ93GRcfiLPGQjz5MBKa5XaxzijGSObzg0BR&input=https%3A%2F%2Ftwitter.com) |

All four sites presented DNS lookup errors, strongly suggesting that
they were blocked by means of DNS tampering. This is also supported by
the fact that, according to [OONI measurements](https://api.ooni.io/files/by_country/PK), these sites
were accessible before and after last weekend. In other words, DNS
lookup errors for these sites only showed up in OONI measurements on the
25th and 26th of November.

This is not the first time these sites have been interfered with in
Pakistan. In our recently published [research report](https://ooni.org/post/pakistan-internet-censorship/)
in collaboration with [Bytes For All, Pakistan](http://content.bytesforall.pk/), we analyze network
measurements in the country from between 2014 to 2017. This study
confirms observations of blocking the HTTP versions of certain YouTube,
Facebook, and Twitter webpages hosting content related to the
controversial “Draw Muhammad Day” (these webpages remain blocked
today). This indicated that Pakistani ISPs applied “smart filters”, with
targeted censorship of specific webpages.

Last weekend, however, these sites were entirely blocked. This was also
reported in a [press release by the Digital Rights Foundation (DRF) and
NetBlocks](https://digitalrightsfoundation.pk/press-release-drf-and-netblocks-find-blanket-and-nation-wide-ban-on-social-media-in-pakistan-and-demand-it-to-be-lifted-immediately/).
Rather than filtering specific webpages, ISPs blocked access to the encrypted
HTTPS versions of facebook.com, twitter.com, youtube.com, and instagram.com by
means of DNS tampering, rendering them inaccessible.

# Blocking of instant messaging apps

Analysis of [OONI measurements](https://api.ooni.io/files/by_country/PK) indicates that
last weekend’s censorship wasn’t limited to news outlets and social
media sites; several instant messaging apps were interfered with as
well.

Facebook Messenger and WhatsApp’s web interface were temporarily blocked
on Sunday, 26th November 2017, while Telegram has possibly suffered a
longer outage.

## Facebook Messenger

OONI’s [Facebook Messenger test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/facebook_messenger.py)
attempts to perform a TCP connection and DNS lookup to Facebook’s
endpoints. If the TCP connection fails and/or DNS lookups don’t resolve
to IP addresses allocated to Facebook, then Facebook Messenger is likely
blocked. This test has been run on an almost daily basis from multiple
vantage points in Pakistan over the last year.

[OONI measurements](https://api.ooni.io/files/by_country/PK) usually
show that Facebook Messenger is accessible in Pakistan. However, last
Sunday we noticed DNS lookup errors from two different ISPs, suggesting
that Facebook Messenger was temporarily blocked.

| Probed ASNs | Date of measurement | Tested app         | Result       |
|-------------|---------------------|--------------------|--------------|
| AS23674     | 2017-11-25          | Facebook Messenger | [Accessible](https://api.ooni.io/files/download/2017-11-26/20171125T022110Z-PK-AS23674-facebook_messenger-20171125T022111Z_AS23674_wnhvNb46zUdmPCvWLM3nSJ6kUclvzO4OAMrnj9maSrlt0VZesj-0.2.0-probe.json)   |
| AS45595     | 2017-11-25          | Facebook Messenger | [Accessible](https://api.ooni.io/files/download/2017-11-26/20171125T014401Z-PK-AS45595-facebook_messenger-20171125T014403Z_AS45595_9ie9zPc76DKcQX9Xc7rlmapYA3wgMhPuXUkasaQZg5lmZj5Oy7-0.2.0-probe.json)   |
| AS23674     | 2017-11-26          | Facebook Messenger | [DNS blocking](https://api.ooni.io/files/download/2017-11-27/20171126T022118Z-PK-AS23674-facebook_messenger-20171126T022119Z_AS23674_NhYaVPex6JfTBsEt6JuXwqpOE6x0eZHMoOD1S2h50vKxlW3XUx-0.2.0-probe.json) |
| AS45595     | 2017-11-26          | Facebook Messenger | [DNS blocking](https://api.ooni.io/files/download/2017-11-27/20171126T014438Z-PK-AS45595-facebook_messenger-20171126T014439Z_AS45595_uAZJ72QHriHcKfmqSFn6FJHWRCuRxbrmXC0iPJltsLoWLMpITf-0.2.0-probe.json) |

## WhatsApp

Similarly, WhatsApp’s web interface (web.whatsapp.com) appears to have
temporarily been blocked on the 26th of November.

| Probed ASNs | Date of measurement | Tested URL                | Result       |
|-------------|---------------------|---------------------------|--------------|
| AS45595     | 2017-11-25          | `https://web.whatsapp.com/` | [Accessible](https://api.ooni.io/files/download/2017-11-26/20171125T014354Z-PK-AS45595-whatsapp-20171125T014355Z_AS45595_WwjzfYulDZEeCYim8KavRein3Tgc0WH5IP1kcCAWZFP1iUbIaD-0.2.0-probe.json)   |
| AS23674     | 2017-11-25          | `https://web.whatsapp.com/` | [Accessible](https://api.ooni.io/files/download/2017-11-26/20171125T020701Z-PK-AS23674-whatsapp-20171125T020702Z_AS23674_7SuC7I69G17hewbhAdgUJl3i2RfMeOqppUfMrjoW7UqcIbKidQ-0.2.0-probe.json)   |
| AS45595     | 2017-11-26          | `https://web.whatsapp.com/` | [DNS blocking](https://api.ooni.io/files/download/2017-11-27/20171126T014401Z-PK-AS45595-whatsapp-20171126T014402Z_AS45595_JDsFwRBWTePdhVQWXp2m1mjL5PSwkoUOhRHh127dcWyWHxcqsB-0.2.0-probe.json) |
| AS23674     | 2017-11-26          | `https://web.whatsapp.com/` | [DNS blocking](https://api.ooni.io/files/download/2017-11-27/20171126T020701Z-PK-AS23674-whatsapp-20171126T020702Z_AS23674_t29UfWck5WYMXfX5hzVNyaKWUaVPqtwimpQNMv8zz9LwyJMTFh-0.2.0-probe.json) |
| AS9541      | 2017-11-26          | `https://web.whatsapp.com/` | [Timeout](https://api.ooni.io/files/download/2017-11-27/20171126T042208Z-PK-AS9541-whatsapp-20171126T042212Z_AS9541_DwxXMICcYuMrKeIdScyIxsr2wvYXwOe3Y4lRau33HkvxXHEs6z-0.2.0-probe.json)      |

OONI’s [WhatsApp test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/whatsapp.py)
performs an HTTP GET request, TCP connection, and DNS lookup to
WhatsApp’s endpoints, registration service, and web version over the
vantage point of the user. In doing so, this test measures the
reachability of both WhatsApp’s app and web interface. While
web.whatsapp.com was likely blocked across three ISPs on 26th November
(as illustrated in the table above), the WhatsApp app was
[accessible](https://api.ooni.io/files/download/2017-11-27/20171126T014401Z-PK-AS45595-whatsapp-20171126T014402Z_AS45595_JDsFwRBWTePdhVQWXp2m1mjL5PSwkoUOhRHh127dcWyWHxcqsB-0.2.0-probe.json)
throughout the weekend in all vantage points where tests were run.

## Telegram

Telegram’s website was blocked last weekend in Pakistan, as illustrated
through the table below.

| Probed ASNs | Date of measurement | Tested URL            | Result       |
|-------------|---------------------|-----------------------|--------------|
| AS45595     | 2017-11-25          | `https://telegram.org/` | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T172144Z_AS45595_qutf6uDIgFxgJK6ROMElwgHJZxhibiBapLomWzzoNQhsP5KGW2&input=https%3A%2F%2Ftelegram.org) |
| AS45595     | 2017-11-26          | `https://telegram.org/` | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T195949Z_AS45595_qeN7WcqfbAbgxOBgeY4U1GEnuRW25v0urevnzYs6gi4b3rYmnn&input=https%3A%2F%2Ftelegram.org) |

But Telegram may have been blocked in Pakistan for a while.

OONI’s [Telegram test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/telegram.py)
is designed to measure the blocking of Telegram’s app and web version
(web.telegram.org) by attempting to perform an HTTP POST request,
establish a TCP connection to Telegram’s access points, and an HTTP GET
request to Telegram’s web interface over the vantage point of the user.
Measurements collected from this test indicate that Telegram’s app and
web interface (web.telegram.org) may have been blocked in Pakistan since
at least 20th November 2017.

![Telegram test measurements](/post/pakistan/telegram.png)

While the testing of Telegram’s web interface constantly presents DNS
lookup and timeout errors (strongly suggesting that it’s blocked), the
testing of Telegram’s endpoints is less conclusive. Therefore, it
remains unclear if the Telegram app is being blocked, or if the TCP
failures are false positives.

# Blocking of news websites

On Saturday, the Pakistan Electronic Media Regulatory Authority (PEMRA)
[prohibited](https://twitter.com/reportpemra/status/934324775161356289)
live coverage of the operation at Faizabad, Islamabad, explaining why a
number of online news channels were [reportedly blocked](https://www.dawn.com/news/1372804).

Testing confirmed the DNS-based blocking of the following news websites
on Saturday, 25th November 2017.

| Probed ASN | Date of measurement | Tested URL                                            | Result       |
|------------|---------------------|-------------------------------------------------------|--------------|
| AS45595    | 2017-11-25          | `https://live.pakistantv.tv/`                           | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T174259Z_AS45595_1f7MDJ8axRK3PQXN2gAUDP72RVrL5deDt5IYa4Wt4jpHPyvMDy&input=https%3A%2F%2Flive.pakistantv.tv%2F) |
| AS45595    | 2017-11-25          | `https://live.pakistantv.tv/channel-24-live-streaming/` | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T172144Z_AS45595_qutf6uDIgFxgJK6ROMElwgHJZxhibiBapLomWzzoNQhsP5KGW2&input=https%3A%2F%2Flive.pakistantv.tv%2Fchannel-24-live-streaming%2F) |
| AS45595    | 2017-11-25          | `http://92newshd.tv/live/`                              | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T172144Z_AS45595_qutf6uDIgFxgJK6ROMElwgHJZxhibiBapLomWzzoNQhsP5KGW2&input=http%3A%2F%2F92newshd.tv%2Flive%2F) |
| AS45595    | 2017-11-25          | `http://live.arynews.tv/`                               | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T172144Z_AS45595_qutf6uDIgFxgJK6ROMElwgHJZxhibiBapLomWzzoNQhsP5KGW2&input=http%3A%2F%2Flive.arynews.tv%2F) |
| AS45595    | 2017-11-25          | `http://live.geo.tv/`                                   | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T172144Z_AS45595_qutf6uDIgFxgJK6ROMElwgHJZxhibiBapLomWzzoNQhsP5KGW2&input=http%3A%2F%2Flive.geo.tv%2F) |
| AS45595    | 2017-11-25          | `https://www.samaa.tv/live/`                            | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T172144Z_AS45595_qutf6uDIgFxgJK6ROMElwgHJZxhibiBapLomWzzoNQhsP5KGW2&input=https%3A%2F%2Fwww.samaa.tv%2Flive%2F) |
| AS45595    | 2017-11-25          | `http://aaj.tv/live/`                                   | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T174259Z_AS45595_1f7MDJ8axRK3PQXN2gAUDP72RVrL5deDt5IYa4Wt4jpHPyvMDy&input=http%3A%2F%2Faaj.tv%2Flive%2F) |
| AS45595    | 2017-11-25          | `http://live.abbtakk.tv/`                               | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T174259Z_AS45595_1f7MDJ8axRK3PQXN2gAUDP72RVrL5deDt5IYa4Wt4jpHPyvMDy&input=http%3A%2F%2Flive.abbtakk.tv%2F) |
| AS45595    | 2017-11-25          | `http://waqtnews.tv/`                                   | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T174259Z_AS45595_1f7MDJ8axRK3PQXN2gAUDP72RVrL5deDt5IYa4Wt4jpHPyvMDy&input=http%3A%2F%2Fwaqtnews.tv%2F) |
| AS45595    | 2017-11-25          | `https://www.dawnnews.tv/watch-live/`                   | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T174259Z_AS45595_1f7MDJ8axRK3PQXN2gAUDP72RVrL5deDt5IYa4Wt4jpHPyvMDy&input=https%3A%2F%2Fwww.dawnnews.tv%2Fwatch-live%2F) |
| AS45595    | 2017-11-25          | `http://dunyanews.tv/`                                  | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T174259Z_AS45595_1f7MDJ8axRK3PQXN2gAUDP72RVrL5deDt5IYa4Wt4jpHPyvMDy&input=http%3A%2F%2Fdunyanews.tv%2F) |
| AS45595    | 2017-11-25          | `https://www.bolnetwork.com/`                           | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T174259Z_AS45595_1f7MDJ8axRK3PQXN2gAUDP72RVrL5deDt5IYa4Wt4jpHPyvMDy&input=https%3A%2F%2Fwww.bolnetwork.com%2F) |
| AS45595    | 2017-11-25          | `http://live.express.pk/`                               | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T174259Z_AS45595_1f7MDJ8axRK3PQXN2gAUDP72RVrL5deDt5IYa4Wt4jpHPyvMDy&input=http%3A%2F%2Flive.express.pk%2F) |
| AS45595    | 2017-11-25          | `http://capital.tv.com.pk/`                             | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T174259Z_AS45595_1f7MDJ8axRK3PQXN2gAUDP72RVrL5deDt5IYa4Wt4jpHPyvMDy&input=http%3A%2F%2Fcapital.tv.com.pk%2F) |
| AS45595    | 2017-11-25          | `https://www.suchtv.pk/`                                | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171125T174259Z_AS45595_1f7MDJ8axRK3PQXN2gAUDP72RVrL5deDt5IYa4Wt4jpHPyvMDy&input=https%3A%2F%2Fwww.suchtv.pk%2F) |

A subset remained blocked on Sunday, 26th November 2017.

| Probed ASN | Date of measurement | Tested URL                                            | Result       |
|------------|---------------------|-------------------------------------------------------|--------------|
| AS45595    | 2017-11-26          | `https://live.pakistantv.tv/`                           | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T015309Z_AS45595_1YD9wi4Y1XCt8l0q1uDvcwvQNQRz6NPIfSrBXmdMCNoXrodT32&input=https%3A%2F%2Flive.pakistantv.tv%2Fchannel-24-live-streaming%2F) |
| AS45595    | 2017-11-26          | `https://live.pakistantv.tv/channel-24-live-streaming/` | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T015309Z_AS45595_1YD9wi4Y1XCt8l0q1uDvcwvQNQRz6NPIfSrBXmdMCNoXrodT32&input=https%3A%2F%2Flive.pakistantv.tv%2Fchannel-24-live-streaming%2F) |
| AS45595    | 2017-11-26          | `http://92newshd.tv/live/`                              | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T015309Z_AS45595_1YD9wi4Y1XCt8l0q1uDvcwvQNQRz6NPIfSrBXmdMCNoXrodT32&input=http%3A%2F%2F92newshd.tv%2Flive%2F) |
| AS45595    | 2017-11-26          | `http://live.arynews.tv/`                               | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T015309Z_AS45595_1YD9wi4Y1XCt8l0q1uDvcwvQNQRz6NPIfSrBXmdMCNoXrodT32&input=http%3A%2F%2Flive.arynews.tv%2F) |
| AS45595    | 2017-11-26          | `http://live.geo.tv/`                                   | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T015309Z_AS45595_1YD9wi4Y1XCt8l0q1uDvcwvQNQRz6NPIfSrBXmdMCNoXrodT32&input=http%3A%2F%2Flive.geo.tv%2F) |
| AS45595    | 2017-11-26          | `https://www.samaa.tv/live/`                            | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T015309Z_AS45595_1YD9wi4Y1XCt8l0q1uDvcwvQNQRz6NPIfSrBXmdMCNoXrodT32&input=https%3A%2F%2Fwww.samaa.tv%2Flive%2F) |
| AS45595    | 2017-11-26          | `https://www.dawnnews.tv/`                              | [DNS blocking](https://api.ooni.io/api/v1/measurements?report_id=20171126T043352Z_AS45595_FypkLxUyLNMgP5WGTPAXBGZnolXFsvoVV8MjuwnqfcYiuJp0HJ&input=https%3A%2F%2Fwww.dawnnews.tv) |

It remains unclear if the other news outlets blocked on the 25th of
November were also blocked on the 26th of November - we do not have
testing data.

This is the first time that we have observed censorship of news websites
in Pakistan. Our [previous study](https://ooni.org/post/pakistan-internet-censorship/),
involving the analysis of thousands of network measurements collected
between 2014 to 2017, only allowed us to confirm the blocking of sites
expressing religious criticism and minority sites.

# Circumventing censorship

The following software tools can be used for censorship circumvention:

* [Tor](https://www.torproject.org/): Free and open source anonymity network which
hides its users’ real IP addresses, enabling them to bypass internet censorship
and online tracking.

* [Psiphon](https://psiphon.ca/): Centrally managed censorship circumvention tool
(ad-supported).

* [Lantern](https://getlantern.org/): Peer-to-peer (yet centrally managed)
censorship circumvention tool.

* [VPN mode of Orbot](https://www.torproject.org/docs/android.html.en): Enables
mobile apps to run over the [Tor network](https://www.torproject.org/),
circumventing censorship.

* [Paid VPN services](https://thatoneprivacysite.net/vpn-section/): Criteria for
selecting a VPN that’s right for you.

# Reproducing this study

In the event that censorship events re-emerge (in Pakistan or
elsewhere), we provide information on how to reproduce this study.
Monitoring internet censorship on an ongoing basis (regardless of
whether censorship events are known to be happening or not) can be
useful to track censorship events when/if they occur.

To reproduce this study:

1.  [Install](https://ooni.org/install/) the OONI Probe
    mobile app (Android, F-Droid, iOS)

2.  Add the sites that you want to test to [OONI Run](https://run.ooni.io/) and generate a link

3.  Click on your OONI Run link and open it with your OONI Probe mobile
    app

4.  Tap “Run”

To view the results:

1.  Tap on the menu icon on the top left corner in the OONI Probe mobile
    app

2.  Tap on “Past Tests”

3.  Tap on “View” next to “Web Connectivity”

To view the details of each measurement, tap on “View” next to each
tested site. If the site you selected is red, the measurement page will
provide you the following information:

* How the site is blocked (e.g. DNS tampering, HTTP or TCP/IP blocking);

* How the specific censorship can be circumvented;

* Network measurement information serving as evidence of the blocking (available
towards the end of each measurement page).

To run more OONI Probe tests and to schedule daily testing, consider
running OONI Probe on
[Linux](https://ooni.org/install/ooniprobe),
[macOS](https://ooni.org/install/ooniprobe), or on a
[Raspberry Pi](https://ooni.org/install/lepidopter/). All
network measurement data will be published on [OONI Explorer](https://explorer.ooni.org/) and on the [OONI API](https://api.ooni.io/), increasing transparency of internet censorship.
