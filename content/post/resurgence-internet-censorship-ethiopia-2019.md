---
title: "Resurgence of Internet Censorship in Ethiopia: Blocking of WhatsApp, Facebook, and African Arguments"
author: "Maria Xynou (OONI), Moses Karanja (University of Toronto), Berhan Taye (Access Now), Arturo Filastò (OONI)"
date: "2019-08-14"
tags: ["country-et", "theme-social_media", "theme-im", "theme-news_media"]
categories: ["report"]
---

Last year in June 2018, following years of [pervasive internet censorship](https://ooni.io/post/ethiopia-report/), Ethiopia
[unblocked](https://ooni.io/post/ethiopia-unblocking/) hundreds of
websites as part of [political reforms](https://freedomhouse.org/report/special-reports/reform-ethiopia-turning-promise-progress)
under a new government. But merely a year later, we observe a resurgence
of internet censorship in the country.

In mid-June 2019, Ethiopia
[experienced](https://ooni.io/post/ethiopia-whatsapp-telegram/)
several internet blackouts and once internet access was restored, access
to WhatsApp and Telegram was blocked. These events coincided with
Ethiopia’s national high school exams and it is
[believed](https://www.bbc.com/news/world-africa-48653392) that
internet access was restricted in an attempt to prevent exam leakage as
has [happened in the past](https://addisstandard.com/national-higher-education-entrance-exam-cancelled-due-to-leakage/).

On 22nd June 2019, following an alleged [coup attempt](https://www.bbc.com/news/world-africa-48734572) in the Amhara
region, access to the internet was [shut down](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ET&lastView=overview&from=1560888269&until=1563480269)
again. Once internet access was restored, access to [WhatsApp was blocked again](https://explorer.ooni.io/measurement/20190627T175741Z_AS24757_CSMjmEelm9ARjxMhTWbZQBCzD9T3sWe2BUPSJoxBIxmVQy79ff).
This time though, we observe the blocking of Facebook
([facebook.com](https://explorer.ooni.io/measurement/20190702T145420Z_AS24757_aFPZjkNUanocV9FfcbUSxF7uLyavayudxhdkRheb9UX18kXuGw?input=https:%2F%2Ffacebook.com)
and [Facebook Messenger](https://explorer.ooni.io/measurement/20190627T180049Z_AS24757_DRqN0RPWDp9oDHQnwiupts4SVjwMPL0OW9ETxObziN5IJvYcle)),
instead of Telegram (which was/is
[accessible](https://explorer.ooni.io/measurement/20190627T175905Z_AS24757_jc24mJNiUP34uKm4FTXTGSuCW5cZQ1QA9P9OhI7ba3ewP7Gw8e)).
A few weeks later, we noticed the
[blocking](https://explorer.ooni.io/measurement/20190805T161100Z_AS24757_rWMKuKDBvZggwveDSiP8VB9j2ot1HG2HlEeJWuu62as3TJNwin?input=https:%2F%2Fafricanarguments.org%2F2019%2F07%2F31%2Fethiopia-whatever-happens-sidama-needs-negotiations%2F)
of the [African Arguments](https://africanarguments.org/) website as
well, a pan-African platform covering investigative stories.

In this report, we share [OONI network measurement data](https://explorer.ooni.io/country/ET) on these ongoing censorship
events.

* [Internet blackout following coup attempt](#internet-blackout-following-coup-attempt)

* [Blocking of WhatsApp](#blocking-of-whatsapp)

* [Blocking of Facebook](#blocking-of-facebook)

* [Blocking of African Arguments website](#blocking-of-african-arguments-website)

* [Conclusion](#conclusion)

# Internet blackout following coup attempt

We previously
[reported](https://ooni.io/post/ethiopia-whatsapp-telegram/) on
internet blackouts and the temporary blocking of Whatsapp and Telegram
in Ethiopia during mid-June 2019.

One day after our publication, on 22nd June 2019, factions of the
security forces of the Amhara region allegedly [attempted an armed coup](https://www.bbc.com/news/world-africa-48734572), during which the
regional president was assassinated. It was subsequently
[reported](https://netblocks.org/reports/internet-shutdown-in-ethiopia-amid-reports-of-attempted-coup-pA5KvNy7)
that a nationwide internet blackout occurred, which can be verified by
both [IODA data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ET&lastView=overview&from=1560888269&until=1563480269)
and [Google traffic data](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1560729600000;end:1563407999999;product:1;region:ET&lu=fraction_traffic)
shared below.

The [Internet Outage Detection and Analysis (IODA)](https://ioda.caida.org/) project of the [Center for Applied Internet Data Analysis (CAIDA)](https://www.caida.org/) measures
internet blackouts worldwide in near real-time. Their
[data](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ET&lastView=overview&from=1560888269&until=1563480269),
which is openly available, provides signals of an internet blackout in
Ethiopia between 22nd June 2019 to 27th June 2019, as illustrated via
the following chart.

![IODA data: Ethiopia](/post/ethiopia-august-2019/ioda-et.png)

**Source:** [Internet Outage Detection and Analysis (IODA): Ethiopia](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ET&lastView=overview&from=1560888269&until=1563480269)

More specifically, IODA data shows that the internet outage appears to
have started at around 20:00 UTC on 22nd June 2019 and to have lasted
until around 06:00 UTC on 27th June 2019 (4 days and 8 hours estimate).
Similarly, [Google traffic data](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1560729600000;end:1563407999999;product:1;region:ET&lu=fraction_traffic),
shared below, illustrates that all traffic originating from Ethiopia
towards Google services was disrupted during the same dates.

![Google traffic data: Ethiopia](/post/ethiopia-august-2019/google-traffic-et.png)

**Source:** [Google Transparency Reports: Traffic and disruptions to Google](https://transparencyreport.google.com/traffic/overview?fraction_traffic=start:1560729600000;end:1563407999999;product:1;region:ET&lu=fraction_traffic)

Once internet access was restored in Ethiopia on 27th June 2019, access
to major social media platforms was blocked. Below we share [OONI network measurement data](https://explorer.ooni.io/country/ET) on the
blocking of WhatsApp, Facebook Messenger, and facebook.com.

# Blocking of WhatsApp

Following the initial internet blackouts in mid-June 2019, WhatsApp was
[temporarily blocked](https://ooni.io/post/ethiopia-whatsapp-telegram/#blocking-of-whatsapp)
when internet access was restored. At the time, we
[found](https://ooni.io/post/ethiopia-whatsapp-telegram/#blocking-of-whatsapp)
that access to WhatsApp’s registration service and web version
(web.whatsapp.com) were blocked by means of [SNI filtering](https://ooni.io/post/ethiopia-whatsapp-telegram/#sni-filtering),
but that Ethio Telecom (the only telecom in the country) refrained from
blocking WhatsApp endpoints. OONI measurements then suggested that
WhatsApp was
[unblocked](https://explorer.ooni.io/measurement/20190617T101028Z_AS24757_jFV9RYgWx65yZcbvkZqfOpE7a7DbdCBqFu0GfFJnomWBnHlrvw)
on 17th June 2019.

But after the [coup attempt](https://www.bbc.com/news/world-africa-48734572) and subsequent
[internet blackout](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ET&lastView=overview&from=1560888269&until=1563480269)
(between 22nd to 27th June 2019), access to WhatsApp was [blocked again](https://explorer.ooni.io/measurement/20190627T175741Z_AS24757_CSMjmEelm9ARjxMhTWbZQBCzD9T3sWe2BUPSJoxBIxmVQy79ff)
and recent OONI measurements suggest that it [remains blocked](https://explorer.ooni.io/measurement/20190813T145830Z_AS24757_XFDNRHZEJUpcbFENvxhkKmqZKdAh9eIl3SCLUlQbKJ39ztZo6B).

![OONI data: Ethiopia](/post/ethiopia-august-2019/whatsapp-blocking-et.png)

**Source:** [OONI measurements: Ethiopia](https://explorer.ooni.io/country/ET)

Once again, Ethio Telecom appears to
[block](https://explorer.ooni.io/measurement/20190812T095715Z_AS24757_BjdMoFxrUdzPZ55K05xpW0eXfuiInsD9ZbACPwmX2LjPObhthX)
access to WhatsApp’s registration service and web version
(web.whatsapp.com), but not to WhatsApp endpoints. This is evident in
all OONI measurements collected between [17:53 UTC on 27th June 2019](https://explorer.ooni.io/measurement/20190627T175741Z_AS24757_CSMjmEelm9ARjxMhTWbZQBCzD9T3sWe2BUPSJoxBIxmVQy79ff)
to [14:58 UTC on 13th August 2019](https://explorer.ooni.io/measurement/20190813T145830Z_AS24757_XFDNRHZEJUpcbFENvxhkKmqZKdAh9eIl3SCLUlQbKJ39ztZo6B),
as illustrated in the graph above. A measurement collected in the
morning of 27th June 2019 at 08:56 UTC showed that WhatsApp was [still accessible](https://explorer.ooni.io/measurement/20190627T085650Z_AS24757_eJzAXlPyrzaRJ5IqBHgVoFGPtc8cYgchMFE0hxfPxuVYeKfa20),
suggesting that Ethio Telecom blocked access to the platform sometime
between 09:00 UTC and 17:53 UTC that day.

WhatsApp appears to be blocked on both [fixed-line (WiFi)](https://explorer.ooni.io/measurement/20190809T154346Z_AS24757_xek5z5EJUbQ3ZCvFUbA6XNSTHeiKX3wdde3ExjcpwYYGmIL6RS)
and
[mobile](https://explorer.ooni.io/measurement/20190810T180659Z_AS24757_pfs1jr9m7m41GS4KAjGwTAvO9oTRebmw6xsDT9GFAwrQsTPQZ0)
networks.

# Blocking of Facebook

Previously, Ethio Telecom
[blocked](https://ooni.io/post/ethiopia-whatsapp-telegram/) access to
WhatsApp and Telegram after the mid-June 2019 internet blackouts. But
after the attempted coup and the most recent internet blackout (which
ended on 27th June 2019), Ethio Telecom appears to have [blocked access to Facebook](https://explorer.ooni.io/measurement/20190627T180049Z_AS24757_DRqN0RPWDp9oDHQnwiupts4SVjwMPL0OW9ETxObziN5IJvYcle),
[instead of Telegram](https://explorer.ooni.io/measurement/20190627T175905Z_AS24757_jc24mJNiUP34uKm4FTXTGSuCW5cZQ1QA9P9OhI7ba3ewP7Gw8e).
Recent [testing of Telegram](https://ooni.io/nettest/telegram/) from
27th June 2019 onwards shows that the app is [not blocked](https://explorer.ooni.io/measurement/20190812T095824Z_AS24757_KnTXMJTYpv2s2KDELyewHgfkcOQvHf94hcLbl52HyNphNVU0nd)
in Ethiopia (though it remains unclear why Ethio Telecom chose to block
Facebook, instead of Telegram, this time around).

Similarly to the blocking of WhatsApp, OONI measurements show that
access to Facebook Messenger was [blocked in Ethiopia by 18:00 UTC on 27th June 2019](https://explorer.ooni.io/measurement/20190627T180049Z_AS24757_DRqN0RPWDp9oDHQnwiupts4SVjwMPL0OW9ETxObziN5IJvYcle)
(while an earlier measurement shows that the app was
[accessible](https://explorer.ooni.io/measurement/20190627T085705Z_AS24757_7g6IOEuVHXGi2rIe06e1FwpHjudLwQa8pMmnnHO4IJBONyXs4B)
in the morning of that day). All OONI measurements collected thereafter
consistently show that [attempts to establish TCP connections to Facebook’s endpoints fail](https://explorer.ooni.io/measurement/20190812T095835Z_AS24757_dYGfWimrvb72D8CBbbfFsjISj2oMIRcjYGPsnRs5QlnkpYJMNz),
strongly suggesting that the app is blocked. Recent OONI measurements
show that access to Facebook Messenger [remains blocked](https://explorer.ooni.io/measurement/20190813T145809Z_AS24757_WGLBzaPYVww4eNA3ltQGIodXwGEXP4cLEQDtj5dgTaVKG7uHyt)
in Ethiopia, and that it is blocked on both [fixed-line (WiFi)](https://explorer.ooni.io/measurement/20190813T145809Z_AS24757_WGLBzaPYVww4eNA3ltQGIodXwGEXP4cLEQDtj5dgTaVKG7uHyt)
and
[mobile](https://explorer.ooni.io/measurement/20190810T181220Z_AS24757_9Ob0M9q0HIe6y52uPGzBqBDIeM3HxS3VTHsnvzSL1VfEKQl607)
networks.

In addition to blocking access to Facebook Messenger, Ethio Telecom
appears to [block access to facebook.com](https://explorer.ooni.io/measurement/20190702T145420Z_AS24757_aFPZjkNUanocV9FfcbUSxF7uLyavayudxhdkRheb9UX18kXuGw?input=https:%2F%2Ffacebook.com)
as well. All OONI [Web Connectivity](https://ooni.io/nettest/web-connectivity/) measurements
collected from 2nd July 2019 onwards consistently
[show](https://explorer.ooni.io/measurement/20190702T145420Z_AS24757_aFPZjkNUanocV9FfcbUSxF7uLyavayudxhdkRheb9UX18kXuGw?input=https:%2F%2Ffacebook.com)
that the testing of facebook.com presents anomalies, suggesting that
access to the site is blocked in Ethiopia. Previous measurements leading
up to 16th June 2019 showed that facebook.com was
[accessible](https://explorer.ooni.io/measurement/20190616T175330Z_AS24757_Ww1jJcipiIENqt3lDK2SL02P8hSl1hlDZZJB0JFuEAuluJKZVD?input=https:%2F%2Fwww.facebook.com%2F),
but the lack of reliable measurements in the interim until 2nd July 2019
limits our ability to determine whether the blocking of facebook.com
started along with the blocking of Facebook Messenger and WhatsApp on
27th June 2019.

# Blocking of African Arguments website

Our attention was drawn to the alleged blocking of the [African Arguments](https://africanarguments.org/) website in Ethiopia, a
pan-African platform covering investigative stories and contemporary
African stories.

![Elias Meseret Taye's tweet](/post/ethiopia-august-2019/elias-meseret-tweet.png)

**Image:** Elias Meseret Taye's
[tweet](https://twitter.com/EliasMeseret/status/1158349672467116032)
(archived
[here](https://web.archive.org/web/20190805162742/https://twitter.com/EliasMeseret/status/1158349672467116032)).

Several internet users in Ethiopia tried accessing the website to
confirm and had mixed results. They reported that the website seemed to
be accessible on fixed-line connection (in this case, WiFi), but not on
cellular mobile data. When a VPN was used, they were able to access the
website on both fixed-line and mobile networks.

A technical verification did in fact flag a form of censorship and
corroborate the reports from Ethiopian internet users.

OONI’s [Web Connectivity test](https://ooni.io/nettest/web-connectivity/) (designed to measure
the TCP/IP, DNS, and HTTP blocking of websites) was run in Ethiopia to
measure the potential blocking of africanarguments.org. The collected
measurements consistently present [DNS anomalies](https://explorer.ooni.io/measurement/20190807T083856Z_AS24757_HZmfDeACC95NShKVUlL5CX0oWns2AmQqzty7zY9tPBljftHDXH?input=https:%2F%2Fafricanarguments.org%2F2019%2F07%2F31%2Fethiopia-whatever-happens-sidama-needs-negotiations%2F)
on mobile networks, strongly suggesting that Ethio Telecom blocks
africanarguments.org by means of DNS tampering. However, measurements
collected from WiFi networks show that the site was
[accessible](https://explorer.ooni.io/measurement/20190806T130838Z_AS24757_n9EUligR2UYpSf3IjcHMgEOsEdtPVLm6FOwTKElLkeIEp29tSu?input=https:%2F%2Fafricanarguments.org%2F2019%2F07%2F31%2Fethiopia-whatever-happens-sidama-needs-negotiations%2F)
during the same period.

The following table shows that africanarguments.org is consistently
blocked on mobile networks, but accessible on fixed-line networks
(WiFi).

![OONI data: Ethiopia](/post/ethiopia-august-2019/et-table.png)

**Source:** [OONI measurements: Ethiopia](https://explorer.ooni.io/country/ET)

It’s unclear when the blocking started as africanarguments.org has only
been tested in Ethiopia from 5th August 2019 onwards (which is also when
locals reported the blocking). [OONI Probe](https://ooni.io/install/)
users in Ethiopia can continue to test the availability of the [African Arguments website](https://africanarguments.org/) using this (OONI Run)
[link](https://run.ooni.io/nettest?tn=web_connectivity&ta=%7B%22urls%22%3A%5B%22https%3A%2F%2Fafricanarguments.org%2F%22%5D%7D&mv=1.2.0).

# Conclusion

Ethiopia seems to be sliding back to old ways when [internet censorship was a pervasive practice](https://ooni.io/post/ethiopia-report/). After
the political changes of 2018, hundreds of [websites were unblocked](https://ooni.io/post/ethiopia-unblocking/), but the recent
[internet blackouts](https://ioda.caida.org/ioda/dashboard#view=inspect&entity=country/ET&lastView=overview&from=1559389200&until=1561894800),
[social media censorship](https://ooni.org/post/ethiopia-whatsapp-telegram/),
and the ongoing [blocking of WhatsApp](https://explorer.ooni.io/measurement/20190812T095715Z_AS24757_BjdMoFxrUdzPZ55K05xpW0eXfuiInsD9ZbACPwmX2LjPObhthX)
and
[Facebook](https://explorer.ooni.io/measurement/20190812T095835Z_AS24757_dYGfWimrvb72D8CBbbfFsjISj2oMIRcjYGPsnRs5QlnkpYJMNz)
point to a dangerous path for freedom of expression, access to
information, and associated human rights in the country. In addition,
the lack of transparency and accountability as to why these websites and
apps are blocked is a cause for concern.

Network measurement data collected from Ethiopia indicate a pattern: The
lifting of complete internet blackouts is followed by the blocking of
social media and messaging applications, with WhatsApp, Telegram,
Facebook Messenger, and facebook.com being the most affected. We also
observed more censorship on mobile networks than on fixed-line (WiFi)
networks.

This study can be expanded upon through the use of [OONI Probe](https://ooni.io/install/) and [OONI data](https://ooni.io/data/).
