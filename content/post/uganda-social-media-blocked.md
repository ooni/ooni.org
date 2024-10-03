---
title: "How Uganda blocked social media, again"
author: "Maria Xynou, Arturo Filastò"
date: "2016-05-17"
tags: ["uganda", "social-media", "country-ug", "theme-social_media"]
categories: ["report"]
---

**Country:** Uganda

**Probed ISPs:** Orange (AS36991), SMILE (AS37122) 

**Censorship method:** IP blocking

**OONI tests:** HTTP Requests

**Measurement period:** 2016-05-12


Last Wednesday, the Ugandan Communications Commission (UCC)
[ordered](https://freedomhouse.org/article/uganda-social-media-ordered-blocked-museveni-inauguration)
ISPs to block access to social media leading up to the (fifth) inauguration of
President Yoweri Museveni, who has governed the country since 1986. Authorities
argued that the blocking was ordered for “security purposes”, but the move
directly harms political opposition, which has [relied
on](https://advox.globalvoices.org/2016/05/11/social-media-blocked-in-uganda-ahead-of-president-musevenis-inauguration/)
social media to organize a “defiance campaign” of protests.

This is the *second* time that Uganda has decided to pull the plug on social
media this year.

Three months ago, Ugandan ISPs were
[ordered](http://www.bbc.com/news/world-africa-35601220) to block access to
social media during the general elections. Following these reports, [OONI
tests](https://github.com/TheTorProject/ooni-spec) were run in the country and
results showed that Facebook and Twitter appeared to be blocked in specific
networks. In similar fashion, OONI tests were run again in Uganda last
Thursday, in an attempt to not only provide evidence of the blocking, but to
also determine how censorship was implemented.

Today we are releasing [data](https://explorer.ooni.org/country/UG)
which indicates that two ISPs in Uganda -- Smile Telecom (Uganda) and Orange --
carried out *IP blocking* to censor access to major social media services.
Interestingly, OONI's findings illustrate that social media is not consistently
blocked across networks, and that certain cases of censorship can be easily
circumvented.

## Findings

OONI's [HTTP request
test](https://github.com/TheTorProject/ooni-probe/blob/master/docs/source/tests/http_requests.rst),
which is designed to examine whether websites are blocked or not based on a
comparison of HTTP requests over [Tor](https://www.torproject.org/) and over
the network of the user, was run from two different vantage points in Uganda
last Thursday: Smile Telecom (Uganda) and Orange. As, in some cases, ISPs only
block the *unencrypted HTTP* endpoints of websites, tests were also run against
the *encrypted HTTPS* endpoints of social media services to examine whether
those were accessible.

The table below illustrates a comparison of the censorship implemented by Smile
Telecom (Uganda) and Orange, based on [OONI's
measurements](https://explorer.ooni.org/country/UG):

![Blocked by ISP](/post/uganda-social-media/table.png)

It's interesting to see that while Smile Telecom (Uganda) blocked access to
*both* the HTTP and HTTPS endpoints of Facebook and Twitter, Orange appears to
have only blocked the unencrypted HTTP endpoints of those sites, enabling its
users to access them via HTTPS. Furthermore, Smile Telecom (Uganda) appears to
have blocked the HTTP endpoints of both WhatsApp and Viber, neither of which
appear to have been blocked by Orange.

Possibly, this difference in censorship indicates that ISPs were not ordered to
block specific services, but were only given a vague order to “block all social
media”, leaving each provider the flexibility to choose which services to block
and how to block them. The ISPs don't appear to be too pleased with the UCC's
order to block access to social media.  This is evident through the
[tweet](https://twitter.com/mtnug/status/730684160407375872) of the network
operator MTN Uganda:

> “Dear Customer, per UCC directive all social media is temporarily blocked,
> our other services are available. We regret any inconvenience caused.”

## Circumventing censorship

Social media in Uganda was censored both times this year based on *IP
blocking*, according to [OONI's
measurements](https://explorer.ooni.org/country/UG). This form of
censorship can be circumvented by accessing a blocked website over *HTTPS*,
rather than HTTP (if the HTTPS endpoint of a site is *not* blocked).  If that
doesn't work, users can bypass censorship through the use of
**[Tor](https://www.torproject.org/)**, which is designed to make its users'
traffic appear to come from a different part of the world.

As for circumventing the censorship of mobile applications, like WhatsApp or
Viber, Android users can try using the **[VPN mode of
Orbot](https://www.torproject.org/docs/android.html.en)** which enables all
apps on their device to run through the [Tor
network](https://www.torproject.org/).

## OONI Explorer report links

**Orange:**

HTTP Twitter (Blocked)
https://explorer.ooni.org/measurement/BOp0pU9RHsh7qV0U1LY5wlXlLvGQAqPvyehbCppPcF6rYqHbsCMfQWL9rUrfBhCt?input=http:%2F%2Ftwitter.com

HTTPS Twitter (Not blocked)
https://explorer.ooni.org/measurement/BOp0pU9RHsh7qV0U1LY5wlXlLvGQAqPvyehbCppPcF6rYqHbsCMfQWL9rUrfBhCt?input=https:%2F%2Ftwitter.com

HTTP Facebook (Blocked)
https://explorer.ooni.org/measurement/BOp0pU9RHsh7qV0U1LY5wlXlLvGQAqPvyehbCppPcF6rYqHbsCMfQWL9rUrfBhCt?input=http:%2F%2Fwww.facebook.com

HTTPS Facebook (Not blocked)
https://explorer.ooni.org/measurement/BOp0pU9RHsh7qV0U1LY5wlXlLvGQAqPvyehbCppPcF6rYqHbsCMfQWL9rUrfBhCt?input=https:%2F%2Fwww.facebook.com

HTTP Whatsapp (Not blocked)
https://explorer.ooni.org/measurement/BOp0pU9RHsh7qV0U1LY5wlXlLvGQAqPvyehbCppPcF6rYqHbsCMfQWL9rUrfBhCt?input=http:%2F%2Fwww.whatsapp.com

HTTP Viber (Not blocked)
https://explorer.ooni.org/measurement/BOp0pU9RHsh7qV0U1LY5wlXlLvGQAqPvyehbCppPcF6rYqHbsCMfQWL9rUrfBhCt?input=http:%2F%2Fwww.viber.com

**Smile Telecom (Uganda):**

HTTPS Twitter (Blocked)
https://explorer.ooni.org/measurement/ppXcO0JBDky6if2GtBi7zrYUoTG4gnVdwiUvEDrOkcsUbWJfj2KCvaBciBEDFzkI?input=https:%2F%2Ftwitter.com

HTTP Twitter (Blocked)
https://explorer.ooni.org/measurement/ppXcO0JBDky6if2GtBi7zrYUoTG4gnVdwiUvEDrOkcsUbWJfj2KCvaBciBEDFzkI?input=http:%2F%2Ftwitter.com

HTTPS Facebook (Blocked)
https://explorer.ooni.org/measurement/ppXcO0JBDky6if2GtBi7zrYUoTG4gnVdwiUvEDrOkcsUbWJfj2KCvaBciBEDFzkI?input=http:%2F%2Fwww.facebook.com

HTTP Facebook (Blocked)
https://explorer.ooni.org/measurement/ppXcO0JBDky6if2GtBi7zrYUoTG4gnVdwiUvEDrOkcsUbWJfj2KCvaBciBEDFzkI?input=https:%2F%2Fwww.facebook.com

HTTP Whatsapp (Blocked)
https://explorer.ooni.org/measurement/ppXcO0JBDky6if2GtBi7zrYUoTG4gnVdwiUvEDrOkcsUbWJfj2KCvaBciBEDFzkI?input=http:%2F%2Fwww.whatsapp.com

HTTP Viber (Blocked)
https://explorer.ooni.org/measurement/ppXcO0JBDky6if2GtBi7zrYUoTG4gnVdwiUvEDrOkcsUbWJfj2KCvaBciBEDFzkI?input=http:%2F%2Fwww.viber.com
