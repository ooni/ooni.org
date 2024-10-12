---
title: "Ethiopia: From internet blackouts to the blocking of WhatsApp and Telegram"
author: "Maria Xynou (OONI), Arturo Filastò (OONI), Moses Karanja (University of Toronto)"
date: "2019-06-21"
tags: ["ethiopia", "DPI", "protests", "telegram", "whatsapp", "censorship", "country-et", "theme-im", "theme-social_media"]
categories: ["report"]
---

Communication access in Ethiopia has significantly been disrupted over the last week. Internet access and Short Message Services (SMS) were [disconnected](https://web.archive.org/save/https://twitter.com/addisstandard/status/1139127606211727360) intermittently across the country. 

During the first half of the week, internet connectivity was [shut down completely](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ET&lastView=overview&from=1560166834&until=now). After access was restored, both [WhatsApp](https://explorer.ooni.io/measurement/20190615T215418Z_AS24757_NKzIEujAd7rEN95SsIZnraLm1yjqdU79EqczVKFLUzsOJh4DLE) and [Telegram](https://explorer.ooni.io/measurement/20190615T222820Z_AS24757_4flsDD8gZDpmh2jr60nmgLuGGymkNsRA8HOejGDOFZZDEWr6EP) were blocked. A few days ago, Ethio Telecom (the only telecom in the country) [published a notice](https://web.archive.org/web/20190619122350/https:/twitter.com/ethiotelecom_/status/1141013304762146817), acknowledging the internet disruptions, but came short on details about the extent of communication disruptions or why they occurred in the first place.

These events coincided with Ethiopia’s national high school exams and it is [believed](https://www.bbc.com/news/world-africa-48653392) that internet access may have been restricted in an attempt to prevent students from cheating.

In this report, we share [OONI measurements](https://explorer.ooni.io/country/ET) which reveal the [blocking of WhatsApp](https://explorer.ooni.io/measurement/20190615T215418Z_AS24757_NKzIEujAd7rEN95SsIZnraLm1yjqdU79EqczVKFLUzsOJh4DLE) and [Telegram](https://explorer.ooni.io/measurement/20190615T222820Z_AS24757_4flsDD8gZDpmh2jr60nmgLuGGymkNsRA8HOejGDOFZZDEWr6EP) in Ethiopia (mainly) between 15th to 18th June 2019. We also share our custom experiments, which confirm the SNI filtering of WhatsApp and the IP blocking of Telegram.  

To demonstrate the internet blackouts (between 11th to 14th June 2019), we share [IODA data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ET&lastView=overview&from=1560166834&until=1560958174) and [Google traffic data](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1560038400000;end:1560816000000;product:1;region:ET&lu=fraction_traffic) from Ethiopia.

* [A bit of background](#a-bit-of-background)

* [Internet blackouts](#internet-blackouts)

* [Blocking of WhatsApp](#blocking-of-whatsapp)

  * [SNI filtering](#sni-filtering)
  
* [Blocking of Telegram](#blocking-of-telegram)

* [Conclusion](#conclusion)

# A bit of background

In 2016, some copies of the Ethiopian high school national examination [were leaked on Facebook](https://web.archive.org/save/https://www.facebook.com/Jawarmd/posts/10102310911771083) by activists to reportedly sabotage the government and act as a political statement against what they saw as an [unfair examination](https://web.archive.org/save/https://www.facebook.com/Jawarmd/posts/10102311396454773) for students from protest zones who had involuntarily missed school for long durations, while their peers from other regions were uninterrupted. The government had to cancel the exam and organize a fresh one in a month’s time. It is during this second exam that [access to online social media was blocked in the country](https://www.aljazeera.com/news/2016/07/ethiopia-blocks-social-media-sites-exam-leak-160711183939642.html) to evidently avoid a repeat of the leakage.

Amid a wave of protests by ethnic groups, the [internet was again shut down completely](https://ooni.io/post/ethiopia-internet-shutdown-amidst-recent-protests/) in August 2016. In collaboration with [Amnesty International](https://www.amnesty.org/en/), we published a [research report](https://ooni.io/post/ethiopia-report/) which documented the [blocking of WhatsApp](https://ooni.io/post/ethiopia-report/#whatsapp-blocked) and of [numerous local media websites](https://ooni.io/post/ethiopia-report/#media-outlets) during these persistent protests. The blocks also included [political opposition](https://ooni.io/post/ethiopia-report/#political-opposition-and-armed-groups), [LGBTQI](https://ooni.io/post/ethiopia-report/#lgbti-websites), [human rights](https://ooni.io/post/ethiopia-report/#human-rights-websites), and [circumvention tool](https://ooni.io/post/ethiopia-report/#censorship-circumvention-tool-websites) sites.

In 2017, Ethiopia [shut down the internet just before the planned national high school exams](https://www.reuters.com/article/us-ethopia-internet/ethiopia-cuts-off-internet-after-high-school-exam-leaks-idUSKBN18S535) evidently informed by the 2016 leakage. During the 2018 national exams week, there were no known instances of internet disruptions, a clear departure from a practice which was gaining traction - national exams as moments of internet disruptions.

While last week’s censorship events are [quite similar](https://www.africanews.com/2019/06/14/ethiopia-internet-blackout-enters-third-day-authorities-remain-mum//) to previous attempts to curb cheating during national exams, they probably mark the first time that access to social media is blocked nationally in Ethiopia under the leadership of a [new Prime Minister](https://edition.cnn.com/2018/04/02/africa/ethiopia-new-pm-abiy-ahmed/index.html), Abiy Ahmed. His government is widely [regarded](https://www.bbc.com/news/world-africa-43567007) as promising a relatively open society, and a host of reforms on expression and access to information have been introduced, including the [reported unblocking of 264 websites](http://www.africanews.com/2018/06/23/ethiopia-unblocks-264-websites-and-tv-channels//). In collaboration with [Access Now](https://www.accessnow.org/), we conducted a [study](https://ooni.io/post/ethiopia-unblocking/) to collect network measurements and we were able to [confirm the unblocking of almost all the websites that we previously found to be blocked](https://ooni.io/post/ethiopia-unblocking/) in Ethiopia.

The recent internet disruptions in Ethiopia buck the current government’s public trend on [reforms](https://www.theguardian.com/world/2018/jul/08/abiy-ahmed-upending-ethiopian-politics). The [Open Observatory of Network Interference (OONI)](https://ooni.io/) sought to understand this phenomenon and we hereby present our user-led, open, and reproducible research data and findings.

# Internet blackouts

The [Internet Outage Detection and Analysis (IODA)](https://ioda.caida.org/) project of the [Centre for Applied Internet Data Analysis (CAIDA)](https://www.caida.org/) measures internet blackouts worldwide in near real-time. Their [data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ET&lastView=overview&from=1560166834&until=1560958174), which is openly available, provides signals of three internet disruptions in Ethiopia over the last week, as illustrated via the following chart.

![](/post/ethiopia-whatsapp-telegram/ethiopia-ioda-1.png)

**Source:** [Internet Outage Detection and Analysis (IODA): Ethiopia](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ET&lastView=overview&from=1560166834&until=1560958174)  

The first disruption appears to have been relatively brief. It started at ~ 7:00 UTC on 11th June 2019 and lasted until ~ 12:00 UTC on that day. The second disruption started a few hours later on the same day, at ~17:00 UTC on 11th June until ~6:30 UTC of the next day (12th June 2019). The third disruption, which was the longest, started at ~ 17:45 UTC on 12th June 2019 and lasted for more than 24 hours, ending at ~12:15 UTC on 14th June 2019. Thereafter, [IODA data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ET&lastView=overview&from=1560166834&until=1560958174) does not show any signs of any subsequent internet outages in Ethiopia.

[Google traffic data](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1560038400000;end:1560816000000;product:1;region:ET&lu=fraction_traffic) corroborates the metrics presented by IODA.

![](/post/ethiopia-whatsapp-telegram/google-traffic-ethiopia.png)

**Source:** [Google Transparency Reports: Traffic and disruptions to Google](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1560038400000;end:1560816000000;product:1;region:ET&lu=fraction_traffic)

The above chart, which is based on Google traffic data originating from Ethiopia, illustrates disruptions during the same three time periods as IODA data.

Data shared by both [IODA](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ET&lastView=overview&from=1560166834&until=now) and the [Google Transparency Reports](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1560038400000;end:1560816000000;product:1;region:ET&lu=fraction_traffic) strongly suggest that internet outages occurred in Ethiopia between 11th to 14th June 2019, and that internet access has since been restored in the country. These internet outages were also [reported by NetBlocks](https://netblocks.org/reports/total-internet-outage-identified-in-ethiopia-gBLkVoA4) for the same time periods.

# Blocking of WhatsApp

During the brief window of connectivity on 12th June 2019, between 06:30 UTC and 17:45 UTC (when the second disruption ended and the third started), even though the internet was switched back on, locals in Ethiopia noticed that they couldn’t use WhatsApp. They therefore ran [OONI’s WhatsApp test](https://ooni.io/nettest/whatsapp/) in an [attempt to measure](https://explorer.ooni.io/measurement/20190612T155709Z_AS24757_lPXNcOTMFF3neBU3TSILtWMyPr9M8sVfJ2CD1rr3MaxlOJW7b9) potential blocking.

This [test](https://ooni.io/nettest/whatsapp/) is designed to measure the reachability of both WhatsApp’s mobile app and web version (web.whatsapp.com) by attempting to perform an HTTP GET request, TCP connection, and DNS lookup to WhatsApp’s endpoints, registration service, and web version over the vantage point of the user. All measurements collected by [OONI Probe](https://ooni.io/install/) users running this test are [openly published](https://explorer.ooni.io/country/ET) every day.

An analysis of [OONI WhatsApp measurements](https://explorer.ooni.io/country/ET) collected over the last month reveals that WhatsApp’s registration service and web version (web.whatsapp.com) were blocked in Ethiopia between 12th to 17th June 2019, but WhatsApp’s mobile app was not blocked.

It’s quite unclear when exactly the blocking of WhatsApp started on 12th June 2019, as only [one measurement](https://explorer.ooni.io/measurement/20190612T155709Z_AS24757_lPXNcOTMFF3neBU3TSILtWMyPr9M8sVfJ2CD1rr3MaxlOJW7b9) was collected on that day (at 15:56 UTC). Unlike previous WhatsApp measurements collected over the last year, that [measurement](https://explorer.ooni.io/measurement/20190612T155709Z_AS24757_lPXNcOTMFF3neBU3TSILtWMyPr9M8sVfJ2CD1rr3MaxlOJW7b9) (collected on 12th June 2019) provided a signal of blocking, since the HTTPS connections to the WhatsApp registration service (v.whatsapp.net) and web interface (web.whatsapp.com) failed. No further OONI measurements were collected until 15th June 2019, most likely due to the [internet blackout that followed until 14th June 2019](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ET&lastView=overview&from=1560166834&until=now).

Once internet access was restored, [OONI Probe](https://ooni.io/install/) users in Ethiopia performed tests and [shared](https://web.archive.org/web/20190619132827/https:/twitter.com/AtnafB/status/1140018473994719233) their findings on Twitter.

![](/post/ethiopia-whatsapp-telegram/atnaf-tweet.png)

**Source:** Tweet by Atnaf Brhane: [https://web.archive.org/web/20190619132827/https:/twitter.com/AtnafB/status/1140018473994719233](https://web.archive.org/web/20190619132827/https:/twitter.com/AtnafB/status/1140018473994719233)  

All OONI WhatsApp measurements collected between [15th June 2019](https://explorer.ooni.io/measurement/20190615T070253Z_AS24757_gRi6dhAqgWa7Yp4tah4LX6Rl1j6c8kJuja3OgZranEpMicEj2p) (at 07:00 UTC) to [17th June 2019](https://explorer.ooni.io/measurement/20190617T094036Z_AS24757_0J9kMVRFY0P4pA88FLyZGFHCprYq9SLP8915CTT8E9qE4a6xQl) (at 09:40 UTC) consistently suggested blocking of WhatsApp’s registration service and web version (web.whatsapp.com), as illustrated below.

![](/post/ethiopia-whatsapp-telegram/WhatsAppBlockingEthiopia.png)

**Source:** [OONI measurements: Ethiopia](https://explorer.ooni.io/country/ET) ([CSV data](/post/ethiopia-whatsapp-telegram/20190617-ethiopia-whatsapp.csv))

However, the block does not appear to have been implemented very reliably, as a [request went through at 08:16 UTC on 15th June 2019](https://explorer.ooni.io/measurement/20190615T081631Z_AS24757_NafA1DQMRQl69tAO5TF1jggGpK4q0PDYVqFR8df4sufOlYyi31). All other OONI WhatsApp measurements collected during this time period (07:00 UTC on 15th June 2019 to 09:40 UTC on 17th June 2019) provided strong signals of blocking, since HTTPS requests to WhatsApp’s registration service failed, and HTTPS requests to web.whatsapp.com were consistently failing (which were [not previously observed](https://explorer.ooni.io/country/ET) as part of longitudinal testing).

OONI measurements suggest that WhatsApp was *unblocked* sometime between 09:40 UTC (when the [last measurement showed blocking](https://explorer.ooni.io/measurement/20190617T094036Z_AS24757_0J9kMVRFY0P4pA88FLyZGFHCprYq9SLP8915CTT8E9qE4a6xQl)) and 10:10 UTC (when the [first measurement showed that WhatsApp was accessible again](https://explorer.ooni.io/measurement/20190617T101028Z_AS24757_jFV9RYgWx65yZcbvkZqfOpE7a7DbdCBqFu0GfFJnomWBnHlrvw)) on 17th June 2019. All other OONI WhatsApp measurements collected thereafter suggest that the instant messaging app has been unblocked, since [recent measurements successfully connect](https://explorer.ooni.io/measurement/20190617T214036Z_AS24757_RkEd4z8mcNGsQSm7acmIylmF9V0Gl3OyNvDFoZWvwMiOlWNkiO) to WhatsApp’s endpoints, registration service, and web version.

## SNI filtering

To investigate further and to confirm the blocking of WhatsApp in Ethiopia, we ran some custom experiments using the [curl](https://curl.haxx.se/) command line to understand how whatsapp.com and whatsapp.net were interfered with.

These experiments confirmed the SNI filtering of whatsapp.com and whatsapp.net.

The following curl output shows that when using the www.whatsapp.com [SNI] (https://en.wikipedia.org/wiki/Server_Name_Indication) and connecting to an unrelated TLS server (kernel.org), the connection is aborted following the TLS Client hello message:

```
$ curl -v --connect-to ::kernel.org: https://www.whatsapp.com
* Rebuilt URL to: https://www.whatsapp.com/
* Connecting to hostname: kernel.org
% Total % Received % Xferd Average Speed Time Time Time Current
Dload Upload Total Spent Left Speed
0 0 0 0 0 0 0 0 --:--:-- 0:00:02 --:--:-- 0* Trying 198.145.29.83...
* TCP_NODELAY set
0 0 0 0 0 0 0 0 --:--:-- 0:00:03 --:--:-- 0* Connected to kernel.org (198.145.29.83) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
* CAfile: /etc/ssl/cert.pem
CApath: none
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
} [222 bytes data]
0 0 0 0 0 0 0 0 --:--:-- 0:01:04 --:--:-- 0* LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to www.whatsapp.com:443
* stopped the pause stream!
0 0 0 0 0 0 0 0 --:--:-- 0:01:04 --:--:-- 0
* Closing connection 0
curl: (35) LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to www.whatsapp.com:443
Conversely, when using the kernel.org SNI when connecting to [www.whatsapp.com](http://www.whatsapp.com) , we do not observe any interference:
$ curl -v --connect-to ::www.whatsapp.com: https://kernel.org 2>&1 | tee ET16062019_01.txt
* Rebuilt URL to: https://kernel.org/
* Connecting to hostname: www.whatsapp.com
% Total % Received % Xferd Average Speed Time Time Time Current
Dload Upload Total Spent Left Speed
0 0 0 0 0 0 0 0 --:--:-- --:--:-- --:--:-- 0* Trying 31.13.90.51...
* TCP_NODELAY set
0 0 0 0 0 0 0 0 --:--:-- 0:00:01 --:--:-- 0* Connected to www.whatsapp.com (31.13.90.51) port 443 (#0)
0 0 0 0 0 0 0 0 --:--:-- 0:00:02 --:--:-- 0* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
* CAfile: /etc/ssl/cert.pem
CApath: none
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
} [216 bytes data]
0 0 0 0 0 0 0 0 --:--:-- 0:00:03 --:--:-- 0* TLSv1.2 (IN), TLS handshake, Server hello (2):
{ [98 bytes data]
0 0 0 0 0 0 0 0 --:--:-- 0:00:25 --:--:-- 0* TLSv1.2 (IN), TLS handshake, Certificate (11):
{ [2724 bytes data]
* TLSv1.2 (IN), TLS handshake, Server key exchange (12):
{ [147 bytes data]
* TLSv1.2 (IN), TLS handshake, Server finished (14):
{ [4 bytes data]
* TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
} [70 bytes data]
* TLSv1.2 (OUT), TLS change cipher, Client hello (1):
} [1 bytes data]
* TLSv1.2 (OUT), TLS handshake, Finished (20):
} [16 bytes data]
0 0 0 0 0 0 0 0 --:--:-- 0:00:26 --:--:-- 0* TLSv1.2 (IN), TLS change cipher, Client hello (1):
{ [1 bytes data]
* TLSv1.2 (IN), TLS handshake, Finished (20):
{ [16 bytes data]
* SSL connection using TLSv1.2 / ECDHE-ECDSA-AES128-GCM-SHA256
* ALPN, server accepted to use h2
* Server certificate:
* subject: C=US; ST=CA; L=Menlo Park; O=Facebook, Inc.; CN=*.whatsapp.net
* start date: May 20 00:00:00 2019 GMT
* expire date: Aug 18 12:00:00 2019 GMT
* subjectAltName does not match kernel.org
* SSL: no alternative certificate subject name matches target host name 'kernel.org'
* stopped the pause stream!
0 0 0 0 0 0 0 0 --:--:-- 0:00:27 --:--:-- 0
* Closing connection 0
* TLSv1.2 (OUT), TLS alert, Client hello (1):
} [2 bytes data]
curl: (51) SSL: no alternative certificate subject name matches target host name 'kernel.org'
```

This shows that the censor used the SNI field to implement the blocking of WhatsApp.

It’s worth noting that the block also affected v.whatsapp.net (which is the service used by WhatsApp for the registration of a new client):

```
$ curl -v --connect-to ::kernel.org: https://v.whatsapp.net
* Rebuilt URL to: https://v.whatsapp.net/
* Connecting to hostname: kernel.org
% Total % Received % Xferd Average Speed Time Time Time Current
Dload Upload Total Spent Left Speed
0 0 0 0 0 0 0 0 --:--:-- --:--:-- --:--:-- 0* Trying 198.145.29.83...
* TCP_NODELAY set
* Connected to kernel.org (198.145.29.83) port 443 (#0)
0 0 0 0 0 0 0 0 --:--:-- --:--:-- --:--:-- 0* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
* CAfile: /etc/ssl/cert.pem
CApath: none
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
} [220 bytes data]
* stopped the pause stream!
0 0 0 0 0 0 0 0 --:--:-- 0:01:00 --:--:-- 0
* Closing connection 0
curl: (35) LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to v.whatsapp.net:443
```

Other experiments show that the block also affected whatsapp.net subdomains indiscriminately, including those that don’t exist (such as no-exist.whatsapp.net):

```
$ curl -v --resolve 'no-exist.whatsapp.net:443:157.240.193.50' --connect-to ::kernel.org: https://no-exist.whatsapp.net 2>&1 | tee ET16062019_02.txt
* Added no-exist.whatsapp.net:443:157.240.193.50 to DNS cache
* Rebuilt URL to: https://no-exist.whatsapp.net/
* Connecting to hostname: kernel.org
% Total % Received % Xferd Average Speed Time Time Time Current
Dload Upload Total Spent Left Speed
0 0 0 0 0 0 0 0 --:--:-- --:--:-- --:--:-- 0* Trying 198.145.29.83...
* TCP_NODELAY set
0 0 0 0 0 0 0 0 --:--:-- 0:00:01 --:--:-- 0* Connected to kernel.org (198.145.29.83) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
* CAfile: /etc/ssl/cert.pem
CApath: none
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
} [227 bytes data]
0 0 0 0 0 0 0 0 --:--:-- 0:01:01 --:--:-- 0* LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to no-exist.whatsapp.net:443
* stopped the pause stream!
0 0 0 0 0 0 0 0 --:--:-- 0:01:02 --:--:-- 0
* Closing connection 0
curl: (35) LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to no-exist.whatsapp.net:443


$ curl -v --resolve 'no-exist.whatsapp.com:443:157.240.193.50' --connect-to ::kernel.org: https://no-exist.whatsapp.com 2>&1 | tee ET16062019_02.txt
* Added no-exist.whatsapp.com:443:157.240.193.50 to DNS cache
* Rebuilt URL to: https://no-exist.whatsapp.com/
* Connecting to hostname: kernel.org
% Total % Received % Xferd Average Speed Time Time Time Current
Dload Upload Total Spent Left Speed
0 0 0 0 0 0 0 0 --:--:-- --:--:-- --:--:-- 0* Trying 198.145.29.83...
* TCP_NODELAY set
* Connected to kernel.org (198.145.29.83) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
* CAfile: /etc/ssl/cert.pem
CApath: none
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
} [227 bytes data]
0 0 0 0 0 0 0 0 --:--:-- 0:01:00 --:--:-- 0* LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to no-exist.whatsapp.com:443
* stopped the pause stream!
0 0 0 0 0 0 0 0 --:--:-- 0:01:00 --:--:-- 0
* Closing connection 0
curl: (35) LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to no-exist.whatsapp.com:443
```

# Blocking of Telegram

Telegram is one of the [most popular](https://qz.com/africa/1214381/in-a-continent-dominated-by-whatsapp-ethiopia-says-yes-to-telegram/) communication platforms in Ethiopia, more than WhatsApp and Viber.

Once internet access was restored in Ethiopia by 15th June 2019, [Telegram was blocked](https://explorer.ooni.io/measurement/20190615T065831Z_AS24757_wsEXheNmLVO9uauDWpx5sEdZm5KuZxyrB4TLUwJxunvAm5oMY7) along with WhatsApp. [OONI Probe](https://ooni.io/install/) users measured the blocking of Telegram in Ethiopia as well.

[OONI’s Telegram test](https://ooni.io/nettest/telegram/) is designed to measure the reachability of Telegram’s mobile app and web version (web.telegram.org) by attempting to perform an HTTP POST request, TCP connection, and HTTP GET request to Telegram’s endpoints and web version over the vantage point of the user.

The following chart illustrates that most measurements collected between 12th to 18th June 2019 showed blocking of Telegram’s endpoints, suggesting that Ethio Telecom attempted to block access to the Telegram mobile app.

![](/post/ethiopia-whatsapp-telegram/TelegramBlockingEthiopia.png)

**Source:** [OONI measurements: Ethiopia](https://explorer.ooni.io/country/ET) ([CSV data](/post/ethiopia-whatsapp-telegram/20190619-ethiopia-telegram.csv))

It’s worth noting though that not all Telegram endpoints were blocked. OONI measurements show that while most connections to Telegram endpoints failed, some were successful. Out of 10 Telegram IPs that were measured, we found that connections to 8 of them were consistently blocked, while connections to 2 Telegram IPs were consistently successful throughout all testing. This pattern suggests that Ethio Telecom may have blocked a static list of Telegram IPs.

That said, it’s worth acknowledging that the testing was limited to the hardcoded IPs used by the Telegram desktop app and, therefore, may not reflect entirely what was experienced by Telegram mobile app users in Ethiopia over the past week. It is evident though from the testing that there were attempts at disrupting the availability of the Telegram mobile app.

While it’s quite unclear how successful the blocking of the Telegram mobile app was in practice, the relatively high volume of failed attempts to establish TCP connections to Telegram endpoints strongly suggests that Ethio Telecom attempted to block the app over the last week (and that it, therefore, was probably inaccessible for many users in Ethiopia).

Telegram Web (web.telegram.org) also appeared to not work as expected. In order to determine if this HTTPS service was blocked in the same way as WhatsApp Web, we ran a series of custom [curl](https://curl.haxx.se/) experiments to check for SNI filtering.

We did not notice any sort of SNI based filtering when accessing the Telegram web interface (web.telegram.org):

```
$ curl -v --connect-to ::kernel.org: https://web.telegram.org
* Rebuilt URL to: https://web.telegram.org/
* Connecting to hostname: kernel.org
* Trying 198.145.29.83...
* TCP_NODELAY set
* Connected to kernel.org (198.145.29.83) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
* CAfile: /etc/ssl/cert.pem
CApath: none
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
* TLSv1.2 (IN), TLS handshake, Server hello (2):
* TLSv1.2 (IN), TLS handshake, Certificate (11):
* TLSv1.2 (IN), TLS handshake, Server key exchange (12):
* TLSv1.2 (IN), TLS handshake, Server finished (14):
* TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
* TLSv1.2 (OUT), TLS change cipher, Client hello (1):
* TLSv1.2 (OUT), TLS handshake, Finished (20):
* TLSv1.2 (IN), TLS change cipher, Client hello (1):
* TLSv1.2 (IN), TLS handshake, Finished (20):
* SSL connection using TLSv1.2 / ECDHE-RSA-AES128-GCM-SHA256
* ALPN, server accepted to use http/1.1
* Server certificate:
* subject: OU=Domain Control Validated; OU=Gandi Standard Wildcard SSL; CN=*.kernel.org
* start date: Oct 11 00:00:00 2016 GMT
* expire date: Oct 11 23:59:59 2019 GMT
* subjectAltName does not match web.telegram.org
* SSL: no alternative certificate subject name matches target host name 'web.telegram.org'
* stopped the pause stream!
* Closing connection 0
* TLSv1.2 (OUT), TLS alert, Client hello (1):
curl: (51) SSL: no alternative certificate subject name matches target host name 'web.telegram.org'
```

Instead, we observed connection timeouts (similarly to what we found through [OONI measurements](https://explorer.ooni.io/measurement/20190616T140326Z_AS24757_U2Z3q8xCv4wPIRXGtypey43UvKJPAXKDzEcW6Z5BoK52O862Fr)), strongly suggesting that Telegram was blocked by means of IP blocking:

```
$ curl -v --connect-to ::web.telegram.org: https://kernel.org
* Rebuilt URL to: https://kernel.org/
* Connecting to hostname: web.telegram.org
* Trying 149.154.167.99...
* TCP_NODELAY set
* Connection failed
* connect to 149.154.167.99 port 443 failed: Operation timed out
* Failed to connect to web.telegram.org port 443: Operation timed out
* Closing connection 0
curl: (7) Failed to connect to web.telegram.org port 443: Operation timed out


$ curl -v --connect-to ::telegram.org: https://kernel.org
* Rebuilt URL to: https://kernel.org/
* Connecting to hostname: telegram.org
* Trying 149.154.167.99...
* TCP_NODELAY set
* Connection failed
* connect to 149.154.167.99 port 443 failed: Operation timed out
* Failed to connect to telegram.org port 443: Operation timed out
* Closing connection 0
curl: (7) Failed to connect to telegram.org port 443: Operation timed out
```

In addition to the mobile app, Telegram Web (web.telegram.org) appears to have been [blocked](https://explorer.ooni.io/measurement/20190617T090551Z_AS24757_IyJ0cA4JuMWA1ReiFLI5jGWvJTN9chgpHAkDuIwT0ngx5s1grR) too, since its testing presented timeout errors. If it was blocked intentionally though, Ethio Telecom would have likely added web.telegram.org to their SNI filtering list (similarly to how they blocked access to web.whatsapp.com) to obtain much higher blocking accuracy (in comparison to the IP blocking of the site).

Our experiments therefore suggest that Telegram Web (web.telegram.org) was probably not blocked intentionally. Rather, the blocking of web.telegram.org was likely the collateral damage of the blocking of Telegram’s endpoints.

# Conclusion

Between 11th to 14th June 2019, Ethiopia experienced three internet blackouts, as suggested by [IODA](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ET&lastView=overview&from=1560166834&until=1560958174) and [Google traffic](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1560038400000;end:1560816000000;product:1;region:ET&lu=fraction_traffic) data.

Internet connectivity was restored thereafter, but [OONI data](https://explorer.ooni.io/country/ET) shows that access to [WhatsApp](https://explorer.ooni.io/measurement/20190616T124137Z_AS24757_OkJV7OTNFUKSTKl7LeAzPdDPPd1gzhrz7E47A3svdGd5szbqOr) and [Telegram](https://explorer.ooni.io/measurement/20190616T140326Z_AS24757_U2Z3q8xCv4wPIRXGtypey43UvKJPAXKDzEcW6Z5BoK52O862Fr) was blocked between 15th to 18th June 2019.

Both WhatsApp’s registration service (v.whatsapp.net) and web interface (web.whatsapp.com) were blocked by means of SNI filtering, but the blocks were [lifted](https://explorer.ooni.io/measurement/20190617T101028Z_AS24757_jFV9RYgWx65yZcbvkZqfOpE7a7DbdCBqFu0GfFJnomWBnHlrvw) by 10:10 UTC on 17th June 2019. Many Telegram endpoints were blocked between 15th to 18th June 2019, strongly suggesting that Telegram’s mobile app was blocked (though connections to some Telegram endpoints were successful). The IP blocking of Telegram’s mobile app appears to have resulted in the (likely unintentional) blocking of web.telegram.org as well.

These censorship events possibly occurred in an [attempt to prevent high school students in Ethiopia from cheating during the national exams](https://www.bbc.com/news/world-africa-48653392), similarly to [previous years](https://www.reuters.com/article/us-ethopia-internet/ethiopia-cuts-off-internet-after-high-school-exam-leaks-idUSKBN18S535). This seems to be a step back from the new government’s attempts in securing a free and open internet in Ethiopia (through the [unblocking of websites last June](https://ooni.io/post/ethiopia-unblocking/)).

As this study was performed using [free and open source software](https://ooni.io/install/) and [open data](https://ooni.io/data/), it can potentially be reproduced and expanded upon.

We thank all OONI Probe users in Ethiopia who made this study possible.
