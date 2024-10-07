---
title: "Togo: Instant messaging apps blocked amid 2020 presidential election"
author: "Maria Xynou, Arturo Filastò"
date: "2020-02-25"
tags: ["togo", "censorship", "country-tg", "theme-im"]
categories: ["report"]
---

Last Saturday, on 22nd February 2020, [presidential elections](https://www.theguardian.com/world/2020/feb/22/togo-votes-president-faure-gnassingbee-fourth-term)
were held in Togo. These elections follow a [wave of protests](https://www.acleddata.com/2018/12/13/togo-another-wave-of-demonstrations-washes-over-gnassingbes-regime/)
over the last years against the 53-year rule of Gnassingbe Eyadema and,
subsequently, his son, Faure Gnassingbe. A few days before the election,
non-partisan election monitoring was restricted as [National Democratic Institute (NDI) staff were expelled](https://www.ndi.org/publications/statement-expulsion-ndi-staff-togo-and-restrictions-election-monitoring)
from the country. According to preliminary results from the electoral
commission, incumbent President Faure Gnassingbe [won re-election](https://www.bbc.com/news/world-africa-51606972).

Amid concerns that the Togolese government would restrict access to the
internet during the elections (similarly to other West African
countries, such as
[Benin](https://ooni.org/post/2019-benin-social-media-blocking/) and
[The Gambia](https://ooni.org/post/gambia-internet-shutdown/)), Access
Now’s [KeepItOn campaign](https://www.accessnow.org/keepiton/)
published an [open letter](http://www.lamanchette.net/singlepost-togo-election--risque-de-coupure-dinternet--une-coalition-internationale-saisit-la-ministre-cina-lawson-5-154-775)
encouraging the government of Togo to ensure a free and open internet
during the election. Access Now also [encouraged the use of OONI Probe](https://www.accessnow.org/togo-election-2020/) so that locals in
Togo could monitor the accessibility of online sites and services
through network measurement.

On election day, [OONI Probe](https://ooni.org/install/) users in Togo
[tweeted](https://twitter.com/Farida_N/status/1231262176851234817)
that access to WhatsApp, Telegram, and Facebook Messenger was blocked.
In this post, we share [OONI measurements collected from Togo](https://explorer.ooni.org/search?until=2020-02-25&probe_cc=TG)
and discuss the blocking of instant messaging apps amid the country’s
2020 elections.

* [Blocking of instant messaging apps](#blocking-of-instant-messaging-apps)

	* [WhatsApp](#whatsapp)

	* [Telegram](#telegram)

	* [Facebook Messenger](#facebook-messenger)

* [Conclusion](#conclusion)

# Blocking of instant messaging apps

Starting on election day (22nd February 2020), [OONI measurements](https://explorer.ooni.org/search?until=2020-02-25&probe_cc=TG)
collected by [OONI Probe](https://ooni.org/install/) users in Togo
suggest that WhatsApp, Facebook Messenger, and Telegram were blocked on
two networks: Togo Telecom (AS24691) and Atlantique Telecom (AS37229).
All three apps, however, were accessible on the Canalbox (AS36924)
network, showing that blocking differed across ISPs in Togo.

The following chart illustrates the results from the testing of
WhatsApp, Facebook Messenger, and Telegram across three ISPs in Togo
between 21st to 23rd February 2020.

![Chart: Blocking of Instant Messaging Apps in Togo](/post/2020-togo/tg-chart.png)

**Source:** [OONI measurements collected from Togo](https://explorer.ooni.org/search?until=2020-02-23&probe_cc=TG)
(extract of data used to produce the above chart is available [here](https://gist.github.com/hellais/ffd99c7d199ee0bc1314d5a540a93bac))

Measurements in the above chart are annotated as “likely blocked”
(rather than “confirmed blocked”) due to their relatively limited
volume. Yet, the fact that [OONI measurements](https://explorer.ooni.org/search?until=2020-02-25&probe_cc=TG&probe_asn=AS24691)
show that these instant messaging apps were accessible in Togo before
and after the elections (from 24th February 2020) suggests that they
were most likely blocked on election day indeed.

## WhatsApp

OONI’s [WhatsApp test](https://ooni.org/nettest/whatsapp/) is designed
to measure the blocking of WhatsApp’s mobile app and web version
(web.whatsapp.com) by attempting to perform an [HTTP GET request](https://ooni.org/support/glossary/#http-request), [TCP connection](https://ooni.org/support/glossary/#tcp), and [DNS lookup](https://ooni.org/support/glossary/#dns-lookup) to WhatsApp’s
endpoints, registration service, and web version from the vantage point
of the user.

On 22nd February 2020, OONI’s WhatsApp test was run in Togo and
[measurements](https://explorer.ooni.org/search?until=2020-02-23&probe_cc=TG&test_name=whatsapp)
showed that while WhatsApp’s registration service and web.whatsapp.com
were accessible, access to [WhatsApp’s endpoints were blocked on the Togo Telecom (AS24691)](https://explorer.ooni.org/measurement/20200222T165239Z_AS24691_5WcQoZyep2HktNd8UvKf1Ka4C3WPyOc9AQP79zoJ7oPgyDwSWh)
and [Atlantique Telecom (AS37229)](https://explorer.ooni.org/measurement/20200222T172711Z_AS37229_Nrs8Yl4Bkgk2znjBfxUUW6vcJpbNBigUX7t8IULUWSq0W8FJFV)
networks.

The following image (taken from an [OONI WhatsApp measurement](https://explorer.ooni.org/measurement/20200222T165239Z_AS24691_5WcQoZyep2HktNd8UvKf1Ka4C3WPyOc9AQP79zoJ7oPgyDwSWh))
shows that attempts to establish TCP connections to WhatsApp endpoints
failed.

![Blocking of WhatsApp in Togo](/post/2020-togo/tg-whatsapp-blocked.png)

**Source:** [OONI measurement collected from Togo](https://explorer.ooni.org/measurement/20200222T165239Z_AS24691_5WcQoZyep2HktNd8UvKf1Ka4C3WPyOc9AQP79zoJ7oPgyDwSWh),
22nd February 2020

This is observed on both the [Togo Telecom (AS24691)](https://explorer.ooni.org/measurement/20200222T165239Z_AS24691_5WcQoZyep2HktNd8UvKf1Ka4C3WPyOc9AQP79zoJ7oPgyDwSWh)
and [Atlantique Telecom (AS37229)](https://explorer.ooni.org/measurement/20200222T172711Z_AS37229_Nrs8Yl4Bkgk2znjBfxUUW6vcJpbNBigUX7t8IULUWSq0W8FJFV)
networks on 22nd February 2020, suggesting that access to the WhatsApp
mobile app was blocked by means of **IP-based blocking**.

It’s worth highlighting that the IP addresses used by WhatsApp that
appeared to be blocked in Togo (the 34.192.0.0/10 netblock) are part of
the [Amazon AWS Cloud](https://aws.amazon.com/), which means that the
block could have potentially led to interference of other services
reliant on the Amazon Cloud.

![AWS IPs](/post/2020-togo/tg-aws.jpeg)

But even if some collateral damage did occur, it was probably
short-lived, as recent OONI measurements show that access to WhatsApp
has been *unblocked* on both [Togo Telecom (AS24691)](http://explorer.ooni.org/measurement/20200225T083431Z_AS24691_RXtDJ0jjszvfluWRn4AT7nWVO6NSyzcpjlkbiLOEzJLPB1Zzgf)
and [Atlantique Telecom (AS37229)](http://explorer.ooni.org/measurement/20200224T002637Z_AS37229_x53dT8leM3ZufEzCc5UMdNDudRDnriixaGvTGf6lmxOZcRI5S1).

On election day, WhatsApp was not blocked on all networks in Togo. OONI
measurements show that the WhatsApp mobile app, registration service,
and web version were [accessible on the Canalbox (AS36924) network](https://explorer.ooni.org/measurement/20200222T172325Z_AS36924_05r0YGhPPmCHvBLysIhqoZXGueMMoTF8thv2fs47SujotFyGkR)
in Togo on 22nd February 2020, as illustrated below.

![WhatsApp accessible in Togo](/post/2020-togo/tg-whatsapp-ok.png)

**Source:** [OONI measurement collected from Togo](https://explorer.ooni.org/measurement/20200222T172325Z_AS36924_05r0YGhPPmCHvBLysIhqoZXGueMMoTF8thv2fs47SujotFyGkR),
22nd February 2020

## Telegram

OONI’s [Telegram test](https://ooni.org/nettest/telegram/) is designed
to measure the blocking of Telegram’s app and web version
(web.telegram.org) by attempting to perform an HTTP POST request and TCP
connection to Telegram’s access points, as well as an HTTP GET request
to web.telegram.org from the vantage point of the user.

This test was run in Togo on 22nd February 2020.
[Measurements](http://explorer.ooni.org/search?until=2020-02-26&probe_cc=TG&test_name=telegram)
collected from both [Togo Telecom (AS24691)](https://explorer.ooni.org/measurement/20200222T165321Z_AS24691_dmMnrhU4civBhYlDoqrvwGysYFiM7iE6MrLw6aXjUELeKMU5pj)
and [Atlantique Telecom (AS37229)](https://explorer.ooni.org/measurement/20200222T172846Z_AS37229_4iCG5dngewBnAzUXDuYownBRGYaqQX14s7P7eTgBFOTwtzs7Nk)
show that the HTTPS version of Telegram Web (web.telegram.org) appears
to have been blocked, as illustrated below.

![Blocking of Telegram in Togo](/post/2020-togo/tg-telegram-blocked.jpeg)

**Source:** [OONI measurements collected from Togo](https://explorer.ooni.org/measurement/20200222T165321Z_AS24691_dmMnrhU4civBhYlDoqrvwGysYFiM7iE6MrLw6aXjUELeKMU5pj),
22nd February 2020

It’s worth noting though that TCP connections to Telegram endpoints were
successful on both networks, suggesting that the Telegram mobile app
worked in Togo on election day.

![Telegram accessible in Togo](/post/2020-togo/tg-telegram-ok.png)

**Source:** [OONI measurement collected from Togo](https://explorer.ooni.org/measurement/20200222T165321Z_AS24691_dmMnrhU4civBhYlDoqrvwGysYFiM7iE6MrLw6aXjUELeKMU5pj),
22nd February 2020

Access to Telegram Web has since been *unblocked* on both [Togo Telecom (AS24691)](http://explorer.ooni.org/measurement/20200225T083442Z_AS24691_sTD2ScACS9kkcwAyqn7T7X722wP0EXA3wSHSHD18xUakNqLVd1)
and [Atlantique Telecom (AS37229)](http://explorer.ooni.org/measurement/20200224T002631Z_AS37229_0l3SBZLBaBtAHNqDq3gds8XSxvqen9YEeJa5SQcSlu62hJUVym)
networks, as revealed by recent OONI measurements.

## Facebook Messenger

OONI’s [Facebook Messenger test](https://ooni.org/nettest/facebook-messenger/) is designed to
measure the blocking of Facebook Messenger by attempting to perform a
[TCP connection](https://ooni.org/support/glossary/#tcp) and [DNS lookup](https://ooni.org/support/glossary/#dns-lookup) to Facebook’s
endpoints from the vantage point of the user.

When this test was run in Togo on 22nd February 2020, the collected
[measurements](http://explorer.ooni.org/search?until=2020-02-26&probe_cc=TG&test_name=facebook_messenger)
presented signals of potential Facebook Messenger blocking on both
[Togo Telecom (AS24691)](https://explorer.ooni.org/measurement/20200222T165405Z_AS24691_q2DZDwOz7oHJAVbDKnByjajL7Wq2u9s627catBvfec8LuPFiQL)
and [Atlantique Telecom (AS37229)](https://explorer.ooni.org/measurement/20200222T172808Z_AS37229_T6e6CyNg4KdKacwe7K8zGYb701nrLVlf7nYjas5yyIWd4MOa5U).

![Testing Facebook Messenger in Togo](/post/2020-togo/tg-facebook-messenger.png)

**Source:** [OONI measurement collected from Togo](https://explorer.ooni.org/measurement/20200222T165405Z_AS24691_q2DZDwOz7oHJAVbDKnByjajL7Wq2u9s627catBvfec8LuPFiQL),
22nd February 2020

However, given that most attempts to establish TCP connections to
Facebook endpoints were successful, it remains unclear if these
anomalies were caused by transient network failures or by intentional
blocking of the Facebook Messenger app.

It’s worth noting though that following the elections, recent OONI
measurements *don’t* show any signs of Facebook Messenger blocking on
[Togo Telecom (AS24691)](http://explorer.ooni.org/measurement/20200225T083455Z_AS24691_HEnbqfeVzZKkZFmvAthYGvuQcpNRgR6bZqEqBwzUl89acmq0RR)
and [Atlantique Telecom (AS37229)](http://explorer.ooni.org/measurement/20200224T002630Z_AS37229_UPtkmRGxWuTV6ZpdkNWO9dKVo3wtkALxWCA8EB96BQzXZXvTEy).

# Conclusion

OONI
[measurements](http://explorer.ooni.org/search?until=2020-02-26&probe_cc=TG)
collected from Togo on 22nd February 2020 suggest the [blocking of the WhatsApp mobile app](https://explorer.ooni.org/measurement/20200222T165239Z_AS24691_5WcQoZyep2HktNd8UvKf1Ka4C3WPyOc9AQP79zoJ7oPgyDwSWh)
and [Telegram Web](https://explorer.ooni.org/measurement/20200222T165321Z_AS24691_dmMnrhU4civBhYlDoqrvwGysYFiM7iE6MrLw6aXjUELeKMU5pj),
as well as the [potential blocking of Facebook Messenger](https://explorer.ooni.org/measurement/20200222T165405Z_AS24691_q2DZDwOz7oHJAVbDKnByjajL7Wq2u9s627catBvfec8LuPFiQL).
All three instant messaging platforms appear to have been blocked on the
Togo Telecom (AS24691) and Atlantique Telecom (AS37229) networks, but
were accessible on the Canalbox (AS36924) network. This suggests that
internet censorship varies across networks in Togo.

As the [blocking of WhatsApp endpoints](https://explorer.ooni.org/measurement/20200222T165239Z_AS24691_5WcQoZyep2HktNd8UvKf1Ka4C3WPyOc9AQP79zoJ7oPgyDwSWh)
involved IP addresses that are part of the Amazon AWS Cloud, the block
might have potentially led to interference of other services reliant on
the Amazon Cloud. However, the block was
[lifted](http://explorer.ooni.org/measurement/20200225T083431Z_AS24691_RXtDJ0jjszvfluWRn4AT7nWVO6NSyzcpjlkbiLOEzJLPB1Zzgf)
by 24th February 2020, suggesting that any potential collateral damage
was probably short-lived. Similarly, OONI measurements show that
[Telegram Web](http://explorer.ooni.org/measurement/20200225T083442Z_AS24691_sTD2ScACS9kkcwAyqn7T7X722wP0EXA3wSHSHD18xUakNqLVd1)
and [Facebook Messenger](http://explorer.ooni.org/measurement/20200225T083455Z_AS24691_HEnbqfeVzZKkZFmvAthYGvuQcpNRgR6bZqEqBwzUl89acmq0RR)
are accessible across networks in Togo from 24th February 2020 onwards.

As the network anomalies observed for WhatsApp, Telegram Web, and
Facebook Messenger in Togo are mostly limited to 22nd February 2020, the
platforms may have been blocked in correlation to the country’s
[presidential election](https://www.dw.com/en/togo-president-gnassingb%C3%A9-wins-re-election/a-52494760)
on that day.

Longitudinal data is essential to enable the examination of censorship
events over time. To more accurately observe censorship changes and
spikes in correlation to political events (such as Togo’s recent
elections), it is necessary to collect relevant measurements on an
ongoing basis over time.

You can contribute measurements from Togo or anywhere else around the
world by [running OONI Probe](https://ooni.org/install/), which is
free and open source software designed to measure various forms of
internet censorship, such as the blocking of websites and instant
messaging apps. Network measurement data collected by OONI Probe users
around the world is [openly published in near real-time](https://ooni.org/data/), which you can use as part of your
research and advocacy.

We thank all [OONI Probe](https://ooni.org/install/) users in Togo for
contributing
[measurements](http://explorer.ooni.org/search?until=2020-02-26&probe_cc=TG)
and making this study possible.
