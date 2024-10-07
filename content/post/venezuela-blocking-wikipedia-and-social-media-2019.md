---
title: "From the blocking of Wikipedia to Social Media: Venezuela's Political Crisis"
author: "Andrés Azpúrua (Venezuela Inteligente / VEsinFiltro), Mariengracia Chirinos (IPYS Venezuela), Arturo Filastò (OONI), Maria Xynou (OONI), Simone Basso (OONI), Kanishk Karan (Digital Forensic Research Lab)"
date: "2019-01-29"
tags: ["venezuela", "censorship", "country-ve", "theme-social_media"]
categories: ["report"]
---

As political tension escalated in Venezuela over the last few weeks, so
did internet censorship.

It started off with edits to Wikipedia pages earlier this month,
referencing the opposition leader, Juan Guaidó, as the President of
Venezuela. This resulted in the [blocking of Wikipedia](https://vesinfiltro.com/noticias/wikipedia_2019-01/). Then a
group of Venezuelan soldiers [circulated videos](https://www.telegraph.co.uk/news/2019/01/21/clashes-caracas-venezuelan-forces-arrest-rebelling-soldiers/),
announcing an uprising against the government of President Maduro and
calling on the public to join them in the streets. This led to the
[temporary blocking of YouTube, Twitter and Instagram](https://vesinfiltro.com/noticias/twitter_youtube_instagram_2019-01/)
on the same day. During last week’s [anti-government protests](https://www.theguardian.com/world/2019/jan/23/venezuela-protests-thousands-march-against-maduro-as-opposition-sees-chance-for-change)
(where Juan Guaidó [swore himself in as interim president](https://www.theguardian.com/world/2019/jan/15/juan-guaido-venezuelan-opposition-leader-challenging-maduros-rule)),
further network anomalies were
[reported](https://netblocks.org/reports/major-internet-disruptions-in-venezuela-amid-protests-4JBQ2kyo).
All cases were only observed on CANTV (AS8084), Venezuela’s state-owned
and largest telecommunication service.

This report shares [OONI data](https://explorer.ooni.io/country/VE) on
recent censorship events amid the political crisis in Venezuela.

* [Blocking of Wikipedia](#blocking-of-wikipedia)

* [Blocking of Instagram, Twitter and YouTube](#blocking-of-instagram-twitter-and-youtube)

* [What happened during the protests?](#what-happened-during-the-protests)

* [Conclusion](#conclusion)

# Blocking of Wikipedia

Local group Venezuela Inteligente
[reported](https://vesinfiltro.com/noticias/wikipedia_2019-01/) on the
blocking of all language editions of Wikipedia. According to their
report, the Wikipedia blockage took place after some articles on
Wikipedia made reference to opposition leader, Juan Guaidó, as the
President of Bolivarian Republic of Venezuela. The block reportedly
started on 12th January 2019 and was lifted by 18th January 2019.

The temporary blocking of wikipedia.org is corroborated by [OONI data](https://explorer.ooni.io/measurement/20190113T203747Z_AS8048_zmgCmhj2SnRKM6utWKbrj2GHz9UFtYq5db0nYWIbSJzDsHOXWE?input=https:%2F%2Fwikipedia.org),
illustrated below.

![OONI data graph: Blocking of Wikipedia in Venezuela](/post/venezuela-january-2019/ve-wikipedia-blocking.png)

**Source:** Open Observatory of Network Interference (OONI) data:
Venezuela, [https://api.ooni.io/files/by\_country/VE](https://api.ooni.io/files/by_country/VE)

**Note:** In the above chart, the X axis is not continuous, but only
displays measurements per 15-minute intervals when they exist.

The above graph (based on openly available [OONI data](https://api.ooni.io/files/by_country/VE)) shows that
wikipedia.org was
[blocked](https://explorer.ooni.io/measurement/20190113T203747Z_AS8048_zmgCmhj2SnRKM6utWKbrj2GHz9UFtYq5db0nYWIbSJzDsHOXWE?input=https:%2F%2Fwikipedia.org)
by CANTV between 13th January 2019 to 16th January 2019. The lack of
recent measurements before 13th January 2019 limits our ability to
determine when the blocking started, while on 17th January 2019 all OONI
measurements were only collected from Inter (AS21286) - where
wikipedia.org was
[accessible](https://explorer.ooni.io/measurement/20190118T164515Z_AS8048_Bt69ozPc6xYq6Anq7eka7x6Y3d7FZB3j6kMRayVCm0pV60eQaZ?input=https:%2F%2Fes.wikipedia.org).
As of 18th January 2019, wikipedia.org has been
[accessible](https://explorer.ooni.io/measurement/20190118T164515Z_AS8048_Bt69ozPc6xYq6Anq7eka7x6Y3d7FZB3j6kMRayVCm0pV60eQaZ?input=https:%2F%2Fes.wikipedia.org)
on CANTV, according to OONI measurements.

It’s worth highlighting that the blocking of wikipedia.org by CANTV was
non-deterministic. While measurements from 13th January 2019 show that
it was
[blocked](https://explorer.ooni.io/measurement/20190113T203747Z_AS8048_zmgCmhj2SnRKM6utWKbrj2GHz9UFtYq5db0nYWIbSJzDsHOXWE?input=https:%2F%2Fwikipedia.org),
measurements collected on 14th January 2019 show that wikipedia.org was
(temporarily)
[accessible](https://explorer.ooni.io/measurement/20190114T192613Z_AS8048_6FKa27lF2fu7TKuyEwpIUnG3Tp1hF7rJfSqznClGl3xNImyDT1?input=https:%2F%2Fwww.wikipedia.org%2F).
Most measurements collected on 16th January 2019 suggest
[blocking](https://explorer.ooni.io/measurement/20190116T025035Z_AS8048_JsEWMnCeVypWzfLELXuWwYFgZ40JjKukbyPhLN4GY499HCu433?input=https:%2F%2Fes.wikipedia.org)
of wikipedia.org, but some measurements (from the same ASN)
[successfully connected](https://explorer.ooni.io/measurement/20190116T201050Z_AS8048_RKp6YMhYkeO6Eo8T9GdMpg6yChLNd2DDvNlOL4Zx5NjafWd6CD?input=https:%2F%2Fwww.wikipedia.org)
to the site on the same day. Between 13th to 16th January 2019, we
observe a high amount of HTTP failures, but sporadically see connections
to wikipedia.org succeeding, suggesting that the way that CANTV
implemented censorship was non-deterministic, since it doesn't cover all
of the traffic.

Anomalous [OONI measurements](https://explorer.ooni.io/country/VE),
involving the testing of wikipedia.org between 13th to 16th January
2019, present HTTP failures and timeout errors. The possibility of
IP-based blocking is ruled out by the fact that OONI Probe tests
successfully connected to the IPs of wikipedia.org, but HTTP(S) requests
resulted in connection timeouts.

To investigate further, we [collaborated with Venezuela Inteligente on some manual testing](https://vesinfiltro.com/noticias/wikipedia_2019-01/), using
curl. We were able to validate the blocking by fingerprinting the [TLS SNI field](https://en.wikipedia.org/wiki/Server_Name_Indication).

In the curl request below, we can see that the connection aborted after
the first Client Hello message.

```
$ curl -v https://es.wikipedia.org
* Rebuilt URL to: https://es.wikipedia.org/
*   Trying 208.80.154.224...
* TCP_NODELAY set
* Connected to es.wikipedia.org (208.80.154.224) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
*   CAfile: /etc/ssl/cert.pem
  CApath: none
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
* LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to es.wikipedia.org:443
* stopped the pause stream!
* Closing connection 0
curl: (35) LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to es.wikipedia.org:443
```

When attempting to do the same TLS handshake towards a different,
unfiltered, host (www.kernel.org), we noticed the same behavior,
illustrated below.

```
$ curl -v --connect-to ::www.kernel.org: https://www.wikipedia.org
* Rebuilt URL to: https://www.wikipedia.org/
* Connecting to hostname: www.kernel.org
*   Trying 147.75.58.133...
* TCP_NODELAY set
* Connected to www.kernel.org (147.75.58.133) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
*   CAfile: /etc/ssl/cert.pem
  CApath: none
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
* LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to www.wikipedia.org:443
* stopped the pause stream!
* Closing connection 0
curl: (35) LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to www.wikipedia.org:443
```

Conversely, when attempting to do a TLS handshake for the www.kernel.org
domain and connecting to www.wikipedia.org, we received (as expected) a
certificate validation error.

```
curl -v --connect-to ::www.wikipedia.org: https://www.kernel.org
* Rebuilt URL to: https://www.kernel.org/
* Connecting to hostname: www.wikipedia.org
*   Trying 208.80.154.224...
* TCP_NODELAY set
* Connected to www.wikipedia.org (208.80.154.224) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
*   CAfile: /etc/ssl/cert.pem
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
* SSL connection using TLSv1.2 / ECDHE-ECDSA-CHACHA20-POLY1305
* ALPN, server accepted to use h2
* Server certificate:
*  subject: C=US; ST=California; L=San Francisco; O=Wikimedia Foundation, Inc.; CN=*.wikipedia.org
*  start date: Nov  8 21:21:04 2018 GMT
*  expire date: Nov 22 07:59:59 2019 GMT
*  subjectAltName does not match www.kernel.org
* SSL: no alternative certificate subject name matches target host name 'www.kernel.org'
* stopped the pause stream!
* Closing connection 0
* TLSv1.2 (OUT), TLS alert, Client hello (1):
curl: (51) SSL: no alternative certificate subject name matches target host name 'www.kernel.org'
```

This means that (irrespective of the destination host) if the Client
Hello message includes the SNI field with the hostname of
“wikipedia.org”, the connection is not going to be successful. We
therefore reached the conclusion that CANTV blocked Wikipedia by means
of SNI filtering.

By using the [Encrypted SNI (ESNI)](https://tools.ietf.org/html/draft-ietf-tls-esni) feature of
[Firefox Nightly](https://blog.mozilla.org/security/2018/10/18/encrypted-sni-comes-to-firefox-nightly/),
we were able to successfully connect to wikipedia.org, further
confirming the hypothesis that filtering occurred at the SNI field. This
highlights the importance of the ESNI feature. If integrated into more
browsers, more users could potentially circumvent some forms of internet
censorship, without having to install circumvention tools.

It’s worth adding that, through [OONI measurements](https://explorer.ooni.io/measurement/20190116T200226Z_AS8048_wqxT1347WsntMSMpRyvzOvkjjLjxBvrGPfnglS6IEVdh4Zn0X5?input=http:%2F%2Fes.wikipedia.org),
we observe connections to wikipedia.org failing on *both* HTTP and
HTTPS, as the initial HTTP requests (prior to the 302 redirect to HTTPS)
are also being interfered with, leading to connection timeouts. Since we
notice timeouts on the HTTP (plaintext) request too, it’s likely the
case that CANTV blocked wikipedia.org by means of SNI filtering and HTTP
blocking as well.

Our hypothesis is that CANTV may have a filtering rule which looks for
the substring “wikipedia.org” and closes the connection on the
server-side. This could explain why we see the blocking affecting both
SNI and host header fields. It may also be the case that CANTV’s
blocking equipment includes host header field *and* SNI field support.
We are currently unable to test and confirm these hypotheses, since the
blocking of wikipedia.org has been lifted.

# Blocking of Instagram, Twitter and YouTube

Last Monday, 21st January 2019, Venezuela Inteligente
[reported](https://vesinfiltro.com/noticias/twitter_youtube_instagram_2019-01/)
the blocking of YouTube, Instagram and Twitter by CANTV.

The block was presumably motivated by the circulation of videos showing
members of the Bolivarian National Guard of Venezuela chanting
anti-government slogans and showing solidarity with the opposition.
Venezuela Inteligente reported that the blocks only lasted for a few
hours and ended on the same day, by 9:50 am (GMT-4) local-time.

To measure the blocks, [Venezuela Inteligente](https://vesinfiltro.com/) and [IPYS Venezuela](https://ipysvenezuela.org/) coordinated an [OONI Probe](https://ooni.io/install/) measurement campaign, sharing [OONI Run](https://run.ooni.io/) links with Venezuelans to test YouTube,
Instagram and Twitter across the country. According to Venezuela
Inteligente, this garnered large public response, with about 2,100
clicks on OONI Run links since 21st January 2019.

The following graph shares [OONI data](https://explorer.ooni.io/country/VE), showing the blocking of
YouTube, Instagram and Twitter on CANTV.

![OONI data graph: Blocking of Instagram, Twitter and YouTube in Venezuela](/post/venezuela-january-2019/ve-social-media-blocking.png)

**Source:** Open Observatory of Network Interference (OONI) data:
Venezuela, [https://api.ooni.io/files/by\_country/VE](https://api.ooni.io/files/by_country/VE)

**Note:** In the above chart, the X axis is not continuous, but only
displays measurements per 15-minute intervals when they exist.

The above graph (based on openly available [OONI data](https://api.ooni.io/files/by_country/VE)) corroborates Venezuela
Inteligente’s
[reporting](https://vesinfiltro.com/noticias/twitter_youtube_instagram_2019-01/),
showing that access to youtube.com, twitter.com and instagram.com was
temporarily blocked on 21st January 2019 for about two hours (mainly
between 12pm UTC to 2pm UTC).

Similarly to the blocking of Wikipedia, the affected sites were blocked
with a combination of SNI filtering and HTTP blocking, as evidenced by
curl measurements and OONI measurements. All anomalous [OONI measurements](https://api.ooni.io/files/by_country/VE) present HTTP
failures and timeout errors, consistent with SNI filtering of
youtube.com, instagram.com and twitter.com. The blocking of these sites
also appears to be non-deterministic, since it does not cover 100% of
the traffic and we observe some successful measurements as well.

While access to these social media sites has since been restored,
Venezuela Inteligente
[reported](https://twitter.com/vesinfiltro/status/1088833974603001856)
that Instagram was temporarily blocked *again* on Friday, 25th January
2019. OONI data, illustrated below,
[corroborates](https://explorer.ooni.org/measurement/20190125T145344Z_AS8048_fsz5ZGIn2LwE6Efw4Mj3UIcv9RbvG0OMdrNExbw7yD6GVLxczt?input=https:%2F%2Finstagram.com)
this report.

![OONI data graph: Blocking of Instagram in Venezuela](/post/venezuela-january-2019/ve-instagram-blocked.png)

**Source:** Open Observatory of Network Interference (OONI) data:
Venezuela, [https://explorer.ooni.io/country/VE](https://explorer.ooni.io/country/VE)

The above graph shows that all OONI measurements testing instagram.com
between 2pm UTC to 3:30pm UTC presented [HTTP failures](https://explorer.ooni.org/measurement/20190125T145344Z_AS8048_fsz5ZGIn2LwE6Efw4Mj3UIcv9RbvG0OMdrNExbw7yD6GVLxczt?input=https:%2F%2Finstagram.com)
(likely due to SNI filtering), suggesting that the site was temporarily
blocked by CANTV. The testing of twitter.com also presented some
[anomalies](https://explorer.ooni.org/measurement/20190126T154912Z_AS8048_9IfUWsvWZhaxVYdt0RK89rkGbtByYVoPWmyvR6PJHQXE6iMHgH?input=http:%2F%2Ftwitter.com%2Fyouranonnews%2F)
on 26th January 2019, but the limited volume of measurements limits our
ability to confirm potential blocking. Facebook and YouTube, on the
other hand, have not shown any signs of network interference over the
last few days.

We also manually confirmed these results, using the same curl based
approach used for testing wikipedia.org, showing that they are using the
same SNI-based technique to implement the block.

Venezuela Inteligente
[argue](https://twitter.com/vesinfiltro/status/1088833974603001856)
that Instagram live streams (among other services that include
streaming) have become a popular source of live news in Venezuela during
the crisis, used by independent news organizations and by public figures
for their announcements. Venezuela Inteligente also
[reported](https://twitter.com/vesinfiltro/status/1089883867618652160)
that Instagram, Youtube, Facebook and Periscope were temporarily blocked
on 27th January 2019, coinciding with an online statement made by Juan
Guaidó.

# What happened during the protests?

Following the contested 2018 elections, the National Assembly of
Venezuela stated that the results were invalid and announced Juan Guaidó
as the acting president. President Maduro decided to hold his
leadership, triggering the eruption of
[protests](https://www.theguardian.com/world/2019/jan/23/venezuela-protests-thousands-march-against-maduro-as-opposition-sees-chance-for-change)
last Wednesday, 23rd January 2019.

OONI measurements show that, amid the protests, the testing of Google
services, YouTube, Facebook and Instagram presented *some* network
anomalies on CANTV, but most measurements show that they were
accessible, as illustrated below.

![OONI data graph: Anomalies on CANTV](/post/venezuela-january-2019/ve-anomalies.png)

**Source:** Open Observatory of Network Interference (OONI) data:
Venezuela, [https://api.ooni.io/files/by\_country/VE](https://api.ooni.io/files/by_country/VE)

Access to youtube.com, facebook.com and instagram.com may have been
interfered with at around 5pm UTC, though we don’t have enough
measurements to confirm this.

Unlike the measurements showing the SNI filtering of Wikipedia, Twitter,
Instagram and YouTube (discussed earlier), the (few) anomalous
measurements testing Google services only presented TCP/IP anomalies,
which may have occurred due to transient network failures.

Alternatively, the Google anomalies might have been triggered by the
blocking of *some* Google IPs, particularly since the only anomalous
measurements present TCP/IP anomalies. No [major internet disruption](https://netblocks.org/reports/major-internet-disruptions-in-venezuela-amid-protests-4JBQ2kyo)
appears to have occurred.

This is further corroborated by [Google traffic data](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1546300800000;end:1548374400000;product:1;region:VE&lu=fraction_traffic),
illustrated below, which shows that traffic originating from Venezuela
has been uninterrupted this past month.

![Google Traffic Data: Venezuela](/post/venezuela-january-2019/ve-google-traffic.png)

**Source:** Google Transparency Report, Traffic and disruptions to
Google: Venezuela, [https://transparencyreport.google.com/traffic/overview?fraction\_traffic=start:1546300800000;end:1548374400000;product:1;region:VE&lu=fraction\_traffic](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1546300800000;end:1548374400000;product:1;region:VE&lu=fraction_traffic)

During the protests, [IPYS Venezuela](https://ipysvenezuela.org/)
coordinated with a group of citizens across Venezuela to measure the
speed and performance of networks (fixed and mobile) through the use of
[M-Lab tests](https://speed.measurementlab.net/). Between 12pm to 9pm
(local time), they ran 39 tests across four ASNs (CANTV, Digitel, Inter,
Movistar) in 11 states: Anzoátegui, Aragua, Bolívar, Carabobo, Capital
District, Guárico, Miranda, Sucre, Táchira, Yaracuy and Zulia.

By looking at the median download speed taken from NDT measurements from
July 2018 until January 2019, we can see that there is a slight decrease
in throughput starting from the end of December 2018.

![M-Lab data graph](/post/venezuela-january-2019/ve-mlab.png)

**Source:** M-Lab, [https://www.measurementlab.net/data/](https://www.measurementlab.net/data/)

It remains unclear though if this decrease in throughput is due to
networks being overloaded or due to throttling.

Locals reported that internet access was disrupted in several states
between 23rd to 27th January 2019. IPYS Venezuela and Venezuela
Inteligente received reports of connectivity issues in Portuguesa,
Anzoátegui and Táchira on 23rd January 2019, and in parts of Trujillo
and Bolivar on 26th January 2019.

During this period, offline forms of censorship were reported as well.
According to IPYS Venezuela, the Chilean TV channel, Canal 24 horas, was
[censored on subscription TV services](https://ipysvenezuela.org/alerta/balance-especial-ipysve-23-y-24enero-la-censura-y-la-cautela-informativa-marcaron-la-agenda-politica-en-venezuela/)
on 24th January 2019 after it broadcast the signal of the Colombian
channel NTN24 (which has been censored in Venezuela since February
2014). The swearing-in of Juan Guaidó was not televised either.

# Conclusion

This is the first time we are seeing fast-paced, tactical changes to
censorship by Venezuelan ISPs. CANTV has started to rely on more
advanced censorship techniques since mid 2018, complimenting
[DNS-based](https://ooni.org/post/venezuela-internet-censorship/)
censorship. Manual testing conducted in Venezuela (correlated with
[OONI measurements](https://api.ooni.io/files/by_country/VE)) shows
that CANTV is implementing SNI-based filtering as well.

This is not, however, the first time that we are observing internet
censorship in the country. We previously
[reported](https://ooni.org/post/venezuela-internet-censorship/)
on pervasive media censorship in Venezuela, as well as on the blocking
of currency exchange websites and political sites.

The current political crisis has motivated the state ISP, CANTV, to
block social media in a more tactical way, restricting the reach of
specific public speeches that Venezuelans can only see online, on top of
previously
[reported](https://ooni.org/post/venezuela-internet-censorship/)
long-standing blocks (and all within the context of highly censored TV
and radio).

Network measurements collected from Venezuela have shown (and continue
to show) a strong correlation between internet censorship and political
events. The situation remains tense and as political events unfold, the
public can monitor censorship events through the use of [OONI Probe](https://ooni.io/install/) and [OONI data](https://api.ooni.io/).

We thank all OONI Probe users in Venezuela who made this study possible.





As previously also reported by netblocks:

https://netblocks.org/reports/wikipedia-blocked-in-venezuela-as-internet-controls-tighten-XaAwR08M

https://netblocks.org/reports/venezuela-social-media-restricted-amid-caracas-incident-zgBLoXA4

https://netblocks.org/reports/major-internet-disruptions-in-venezuela-amid-protests-4JBQ2kyo

https://netblocks.org/reports/venezuela-total-internet-blackouts-qr8VeYy5

https://netblocks.org/reports/venezuela-national-assembly-live-streams-disrupted-4M8JQvy0
