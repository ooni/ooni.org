---
title: "Nigeria: Measuring Internet Censorship"
author: "Maria Xynou, Leonid Evdokimov"
date: "2018-06-11"
tags: ["censorship", "research-report", "country-ng"]
categories: ["report"]
---

Last October, Nigeria’s National Communications Commission (NCC)
[reportedly ordered](https://pinigeria.org/president-buharis-secret-war-on-free-speech/)
the blocking of 21 websites. In response, we collaborated with Nigeria’s
[Paradigm Initiative](https://pinigeria.org/) to test those websites
and collect network measurement data that can shed light on whether and
how they’re blocked.

Our findings are included in a joint research report that we published today
with Paradigm Initiative. The full report, titled **“Tightening the Noose on
Freedom of Expression: Status of Internet Freedom in Nigeria 2018”**, can be
**[downloaded here](/documents/nigeria-report.pdf)**. A summary of the report
is available **[here](/documents/nigeria-report-summary.pdf)**.

This post summarizes OONI findings pertaining to these websites, as well
as our analysis of all other [OONI measurements collected from Nigeria](https://api.ooni.io/files/by_country/NG) over the last year.

# Testing websites

OONI’s [Web Connectivity test](https://ooni.torproject.org/nettest/web-connectivity/) is
designed to measure whether access to websites is blocked by means of
DNS tampering, TCP/IP blocking, or by a transparent HTTP proxy.

Most Web Connectivity [measurements](https://explorer.ooni.io/country/NG) in
Nigeria have been collected from mobile networks, primarily testing the
websites included in the [Citizen Lab’s global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv).
OONI [data](https://explorer.ooni.io/country/NG)
shows that most websites tested in Nigeria over the last year have been
accessible. The *accessible* sites include popular media websites, human
rights sites, communications platforms, circumvention tool sites, and
even more provocative or objectionable sites, such as pornography and
gambling sites.

In November 2017, however, Paradigm Initiative [reported](https://pinigeria.org/president-buharis-secret-war-on-free-speech/)
that Naij, a popular news outlet, and twenty other websites were
blocked. Following this report, we shared an [OONI Run link](https://run.ooni.io/) on social
media, encouraging locals in Nigeria to test those sites. Out of the [21 websites](https://pinigeria.org/president-buharis-secret-war-on-free-speech/)
Paradigm Initiative reported to be blocked, only 17 of them were tested
(excluding biafra.net, biafra.com, biafra.club, and
restoringbiafranationhood.info).

Biafraforum.com was found to be [accessible](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.biafraforum.com),
while the following 16 sites were found to be blocked by means of DNS
tampering in November 2017:

* [Naij.com](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.naij.com)

* [Igbofocus.co.uk](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.igbofocus.co.uk)

* [Ipobgovernment.org](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.ipobgovernment.org)

* [Biafraland.com](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.biafraland.com%2F)

* [Biafraradio.com](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fbiafraradio.com%2F)

* [Biafranet.com](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fbiafranet.com%2F)

* [Biafrastars.co](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.thebiafrastars.co)

* [Biafrainc.com](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.biafrainc.com)

* [Gobiafra.com](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.gobiafra.com)

* [Biafra.info](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.biafra.info)

* [Biafranigeriaworld.com](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.biafranigeriaworld.com)

* [Ekwenche.org](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.ekwenche.org)

* [Ustream.tv/channel/biafra-television](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.ustream.tv%2Fchannel%2Fbiafra-television)

* [Biafrasay.com](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.biafrasay.com)

* [Bafmembers.com](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.bafmembers.com%2F)

* [Thebiafrapost.com](https://explorer.ooni.io/measurement/20171122T123014Z_AS29465_W4CebDsIwMop4zEqGXeaMFdNhwuxMu1hKSaiMzsUdnDfiVTfrq?input=http:%2F%2Fwww.thebiafrapost.com)

OONI data (linked above) corroborates Paradigm Initiative’s [report](https://pinigeria.org/president-buharis-secret-war-on-free-speech/)
on the blocking of those websites. It’s worth highlighting though that
the above sites were only tested once on 22nd November 2017 in the MTN
(AS29465) network.

In recent months, the [21 sites that were reported to be blocked in November 2017](https://pinigeria.org/president-buharis-secret-war-on-free-speech/)
have been tested again. The table below summarizes OONI findings from
the most recent testing (April 2018).

| Domains                              | Globacom (AS37148)    | MTN (AS29465)    | Airtel (AS36873)      |
|--------------------------------------|-----------------------|------------------|-----------------------|
| naij.com                             | [Accessible](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.naij.com)            | [Accessible](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.naij.com)       | [Accessible](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.naij.com)            |
| igbofocus.co.uk                      | [TCP/IP blocking](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.igbofocus.co.uk)       | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.igbofocus.co.uk)     | [HTTP blocking](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.igbofocus.co.uk)         |
| ipobgovernment.org                   | [TCP/IP blocking](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.ipobgovernment.org)       | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.ipobgovernment.org)     | [HTTP blocking](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.ipobgovernment.org)         |
| biafraland.com                       | N/A                   | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.biafraland.com%2F)     | [HTTP blocking](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.biafraland.com%2F)         |
| biafraradio.com                      | N/A                   | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fbiafraradio.com%2F)     | [HTTP blocking](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fbiafraradio.com%2F)         |
| biafranet.com                        | [TCP/IP blocking](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fbiafranet.com%2F)       | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fbiafranet.com%2F)     | [HTTP blocking](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fbiafranet.com%2F)         |
| thebiafrastars.co                    | [TCP/IP blocking](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.thebiafrastars.co)       | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.thebiafrastars.co)     | [HTTP blocking](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.thebiafrastars.co)         |
| biafrainc.com                        | [Generic timeout error](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.biafrainc.com) | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.biafrainc.com)     | [HTTP blocking](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.biafrainc.com)         |
| gobiafra.com                         | [TCP/IP blocking](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.gobiafra.com)       | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.gobiafra.com)     | [HTTP blocking](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.gobiafra.com)         |
| biafra.info                          | [TCP/IP blocking](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.biafra.info)       | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.biafra.info)     | [HTTP blocking](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.biafra.info)         |
| biafranigeriaworld.com               | [TCP/IP blocking](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.biafranigeriaworld.com)       | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.biafranigeriaworld.com)     | [HTTP blocking](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.biafranigeriaworld.com)        |
| ekwenche.org                         | [TCP/IP blocking](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.ekwenche.org)       | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.ekwenche.org)     | [HTTP blocking](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.ekwenche.org)         |
| ustream.tv/channel/biafra-television | [TCP/IP blocking](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.ustream.tv%2Fchannel%2Fbiafra-television)       | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.ustream.tv%2Fchannel%2Fbiafra-television)     | [Accessible](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.ustream.tv%2Fchannel%2Fbiafra-television)            |
| biafrasay.com                        | [TCP/IP blocking](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.biafrasay.com)       | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.biafrasay.com)     | N/A                   |
| bafmembers.com                       | [TCP/IP blocking](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.bafmembers.com%2F)       | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.bafmembers.com%2F)     | [Accessible](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.bafmembers.com%2F)            |
| thebiafrapost.com                    | [DNS lookup error](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.thebiafrapost.com)      | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.thebiafrapost.com)     | [Generic timeout error](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.thebiafrapost.com) |
| biafraforum.com                      | [TCP/IP blocking](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.biafraforum.com)       | [Connection error](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.biafraforum.com) | [HTTP blocking](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.biafraforum.com)         |
| biafra.net                           | N/A                   | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.biafra.net)     | [HTTP blocking](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.biafra.net)         |
| biafra.com                           | [TCP/IP blocking](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.biafra.com)       | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.biafra.com)     | [HTTP blocking](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.biafra.com)         |
| biafra.club                          | N/A                   | [DNS blocking](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.biafra.club)     | [HTTP blocking](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.biafra.club)         |
| restoringbiafranationhood.info       | [Accessible](https://explorer.ooni.io/measurement/20180424T190522Z_AS37148_AdP4aKVReirGnvxkeBxnry0a5awIjpqHe0EkJ4H9yLIvVSS787?input=http:%2F%2Fwww.restoringbiafranationhood.info)            | [Accessible](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.restoringbiafranationhood.info)       | N/A                   |

News outlet naij.com no longer appears to be blocked. OONI measurements
collected in April 2018 show that the news website was accessible from
(at least) three local vantage points. Biafraforum.com, on the other
hand, was previously found to be accessible in November 2017, but recent
measurements from April 2018 show that it’s likely blocked by two ISPs.
It remains unclear though when the block was lifted and enforced for
these sites, since they weren’t tested between 22nd November 2017 to
24th April 2018.

Recent measurements involve the testing of four sites (biafra.net,
biafra.com, biafra.club, and restoringbiafranationhood.info) that
weren’t previously tested in November 2017, but which Paradigm
Initiative
[reported](https://pinigeria.org/president-buharis-secret-war-on-free-speech/)
to be blocked. Three of those sites (biafra.com, biafra.net,
biafra.club) were found to be blocked in April 2018, suggesting that
they may have been blocked since November 2017 (when ISPs reportedly
started blocking sites associated to Biafra). Recent testing of
restoringbiafranationhood.info, on the other hand, shows that the site
was accessible in two networks in April 2018.

What’s noteworthy from the above table is that Nigerian ISPs appear to
be quite consistent in the types of censorship techniques that they
adopt. Globacom appears to primarily be blocking sites by means of
TCP/IP blocking, MTN by means of DNS tampering, and Airtel always
appears to be blocking sites at the HTTP layer. The measurements that
show “generic timeout errors”, “DNS lookup errors” and “connection
errors” present signs of network anomalies, but do not necessarily serve
as evidence of internet censorship, since they may have occurred due to
transient network failures. While Globacom, MTN, and Airtel appear to
consistently block the same sites on the same dates, it’s worth noting
that Airtel did *not* block two sites (ustream.tv and bafmembers.com)
that appear to have been blocked by Globacom and MTN.

Another interesting pattern that we see in the measurements is that
Nigerian ISPs appear to be using reserved (and historically unrouted) IP
addresses, such as 192.0.0.1 and 1.1.1.1, as the spoofed DNS response.
This technique seems to be used [by MTN](https://explorer.ooni.io/measurement/20180425T034226Z_AS29465_eoSDut18KoFZptz0bFoquV8l7FngjphC0ZdMQ65eyNzJwz5tmn?input=http:%2F%2Fwww.thebiafraherald.co%2F),
which resolves blocked domains to 192.0.0.1, and by
[Airtel](https://explorer.ooni.io/measurement/20180425T142807Z_AS36873_3AfmnzK7JeJyfqebOQEnRI1pl2i2FewkqxVNafzGukCKj4iS84?input=http:%2F%2Fwww.thebiafraherald.co%2F),
which resolves blocked domains to 1.1.1.1. This could be due to the fact
that resolving blocked domains with unrouted IP addresses leads to
clients not generating any extra traffic (and potentially overloading
their network) when accessing blocked domains. It’s worth noting,
however, that the 1.1.1.1 IP address is actually no longer an unrouted
IP address and is now being used for the [CloudFlare DNS resolver](https://blog.cloudflare.com/fixing-reachability-to-1-1-1-1-globally/).

Block pages are essential for confirming censorship events with absolute
accuracy. Given that Nigerian ISPs do *not* appear to serve block pages
(at least for none of the tested websites), our confidence in confirming
the potential censorship events outlined in the above table is quite
limited. When blockpages are not served, OONI relies on analyzing large
volumes of network measurements collected over an extended period of
time (to identify whether censorship patterns are persistent and to
better rule out false positives). The latest measurements, however, were
collected on 25th April 2018, while the sites that were initially
identified as blocked in November 2017 weren’t tested in the interim
leading up to 24th April 2018, limiting our ability to identify
censorship changes.

Nonetheless, the measurements collected for the testing of the [21 sites](https://pinigeria.org/president-buharis-secret-war-on-free-speech/)
strongly suggest that many of them have been blocked, primarily due to
the following reasons:

* **Only (20 out of 21) sites that have been reported to be blocked
present signs of network interference.** All other tested websites
(including provocative or objectionable sites) were found to
be accessible.

* **These sites presented signs of network interference across three
ISPs, not just one.** This helps rule out the hypothesis that the
anomalies could have occurred due to an unreliable network.

* **The types of network anomalies (TCP/IP blocking, DNS tampering,
HTTP blocking) were (mostly) consistent per ISP, suggesting that
specific censorship techniques were adopted.** If the network
anomalies had occurred due to transient network failures, DNS
misconfiguration, or other reasons, they probably wouldn’t persist
in the same way.

Out of the 21 sites
[reported](https://pinigeria.org/president-buharis-secret-war-on-free-speech/)
to be blocked, almost all of them are associated with content on the
secession agitations for Biafra in Eastern Nigeria. What’s interesting
is that (excluding restoringbiafranationhood.info, which is no longer
operational anyway) news outlet naij.com is the only site that currently
appears to be accessible, while all other sites (which are associated to
Biafra) appear to be blocked (and may have remained that way since
November 2017).

# Testing instant messaging apps

Recent measurements from the last months show that popular instant
messaging apps were accessible in the country. These measurements were
collected through OONI’s [WhatsApp](https://ooni.torproject.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.torproject.org/nettest/facebook-messenger/), and [Telegram](https://ooni.torproject.org/nettest/telegram/)
tests which measure the reachability of these apps.

All **WhatsApp** measurements show that the app has been accessible in the
following networks in Nigeria: [Swift Networks Limited (AS36923)](https://explorer.ooni.io/measurement/20180319T083752Z_AS36923_FFQVwFHx3BoM3WRxZrmnzEEhi3aMDkK5Gdzanf0YBvW670VWZd), [Globacom Limited (AS37148)](https://explorer.ooni.io/measurement/20180305T000440Z_AS37148_bgnlV4rJst9jd3oJrh86zAIoqeStCTdPGl0p9pSbJXsNSM2Jq3), [MTN (AS29465)](https://explorer.ooni.io/measurement/20180302T230819Z_AS29465_9N1gbcwZGJEfKZLa0A8NR1vPrzDXIF2apehZ1txrkUKoZbUMDc), [Airtel (AS36873)](https://explorer.ooni.io/measurement/20180301T134935Z_AS36873_vXfYR6uo8xi2PDQ3h9iIsjsVXTytfSRUcL1nGJoaUxn9MegniS), [Spectranet Limited (AS37340)](https://explorer.ooni.io/measurement/20180214T064847Z_AS37340_5V5K2GyEPGEEbOQT4FNMb52hwfUH30DUtzUlKSYGDrdT6c23J9), [Natcom (AS327952)](https://explorer.ooni.io/measurement/20180131T100447Z_AS327952_G928Pan6acZDFjGytXZrcBlAZPl9rkxrARvupUZTZW2YazTq4n), [Futurecom Limited (AS37377)](https://explorer.ooni.io/measurement/20180123T065917Z_AS37377_zK6uBim3C7gssqz7syPmSIHNVKNoBzYgh6oWoyYnIEvzp0wwyh).

Similarly, all **Facebook Messenger** measurements show that the app has
been accessible in the following networks: [Swift Networks Limited (AS36923)](https://explorer.ooni.io/measurement/20180319T083746Z_AS36923_c5PNBD0IWQjeEZpBuXLpgZw1eOYNM9lsS4obge2UxmE99kVBmK), [Airtel (AS36873)](https://explorer.ooni.io/measurement/20180318T122918Z_AS36873_4I0fIg3Byguzj68TbIA5SOj8hEE13c1xAqVaR9FMAaMCqtkei0), [MTN (AS29465)](https://explorer.ooni.io/measurement/20180302T230839Z_AS29465_46hzKMHJEMfEBYYY6pj360ghlML3eWUkSrrse7LlIp6kxY3VWE), [Spectranet Limited (AS37340)](https://explorer.ooni.io/measurement/20180214T064928Z_AS37340_onEegzwhFbWUe1EaJQWguGSuCE48QeYk5EYRmh9WxbkPy4yVQl), [Natcom (AS327952)](https://explorer.ooni.io/measurement/20180131T100317Z_AS327952_dzqCO2ZdjOmcnKqoCHmAUlKND727sPwwy1ro6dLYrdUreRPW7K), [Globacom Limited (AS37148)](https://explorer.ooni.io/measurement/20180130T083252Z_AS37148_yEZdD2d6cJh8V6BQgYWfF6qMqrOijrzQlGhk33GeRoU8P6u35b), [Futurecom Limited (AS37377)](https://explorer.ooni.io/measurement/20180123T065940Z_AS37377_hJjmUNZXtkRB88znclB9X1bWQuGMVOnoUkXzGD7AsZYuzRe3LI).

**Telegram** was also found to be accessible in the following networks: [Airtel (AS36873)](https://explorer.ooni.io/measurement/20180318T130638Z_AS36873_8468HEZNxRTxdIsiWxfpcVn8DejpMBIyuwBs6O0IB3E1bSfRXW), [MTN (AS29465)](https://explorer.ooni.io/measurement/20180302T230827Z_AS29465_MKOxoQuXB4g17cojMLhA5eMJt223tDzUfDoMKqa3QyaLWhw7uU), [Spectranet Limited (AS37340)](https://explorer.ooni.io/measurement/20180214T064912Z_AS37340_RMg5qshSe9t3P2Uk2r6jR8TvioJuHwGBpKxEzoEBD2iMwdVIsT), [Natcom (AS327952)](https://explorer.ooni.io/measurement/20180131T100341Z_AS327952_4zvEiTScQJQamTrs7XkIV9tJeJUkhZ4zrFZslS37U7towyyedq), [Globacom Limited (AS37148)](https://explorer.ooni.io/measurement/20180130T083231Z_AS37148_LcVIDrbPuuCm9aUcqmgmnFrZAAKRCxYz3lokspICnKDdt3VRHr), [EMTS (AS37076)](https://explorer.ooni.io/measurement/20180114T051737Z_AS37076_7sczUGvGH11vBmIHW03NvPa8nEGq3MvxK02VoA7JDeS2t2Un8A).

It’s worth noting that these findings are limited to the specific
networks where tests were run, as well as to the dates and time of
testing. As a result, it remains unclear if any of these instant
messaging apps were blocked by different ISPs in Nigeria, and/or if they
were blocked in different moments in time when tests weren’t run.

# Testing circumvention tools

Popular circumvention tool sites (such as [ultrasurf.us](https://explorer.ooni.io/measurement/20180211T170056Z_AS37148_6jCMl9ORG996hSFEG3uCsRIIvt5RkzbwMk8cO1bYMWvyNV35r7?input=http:%2F%2Fultrasurf.us), [hotspotshield.com](https://explorer.ooni.io/measurement/20170401T201717Z_AS29465_5RXDSDNYTEeiwNTJsrwFzFssDKxhMM1isfVpfFXy6lk4sSgXyh?input=https:%2F%2Fwww.hotspotshield.com%2F),
and [torproject.org](https://explorer.ooni.io/measurement/20170928T205407Z_AS327952_xbg91jJseCINOgPPg2uUlFETAnVFPmyWJ6fkyklT0WuhEyZsIq?input=https:%2F%2Fwww.torproject.org))
were found to be accessible in Nigeria throughout the testing period.

OONI’s [Vanila Tor](https://ooni.torproject.org/nettest/vanilla-tor/) test is designed
to measure the blocking of the [Tor network](https://www.torproject.org/). This test has only been run once
in Nigeria (in June 2017) and the collected [data](https://explorer.ooni.io/measurement/20170606T015510Z_AS327952_fav7V5D6A3KPuTOCrHV30GBFblPhGM2d3zjumBaOc8GO9ZGfUS)
shows that the Tor network was accessible in the country. This is also
suggested through Tor Metrics which
[show](https://metrics.torproject.org/userstats-relay-country.html?start=2017-05-08&end=2018-05-08&country=ng&events=off)
relatively stable connections to the Tor network from Nigeria over the
last year, as illustrated in the graph below.

![Tor Metrics: Nigeria](/post/nigeria/ng-metrics.png)

Source: [Tor Metrics](https://metrics.torproject.org/userstats-relay-country.html?start=2017-05-08&end=2018-05-08&country=ng&events=off)

# Reproducing this study

OONI is based on [free and open source software](https://github.com/TheTorProject/ooni-probe), [open methodologies](https://ooni.torproject.org/docs/), and [open data](https://api.ooni.io/), enabling the independent
verification of findings and the reproducibility of this study.

To measure internet censorship based on OONI’s methodologies:

1.  Determine which websites you want to test (either by [contributing](https://ooni.torproject.org/get-involved/contribute-test-lists/)
to your country’s [test list](https://github.com/citizenlab/test-lists/tree/master/lists), or by [testing URLs](https://ooni.torproject.org/post/ooni-run/) directly via [OONI Run](https://run.ooni.io/))

2.  Run OONI Probe [tests](https://ooni.torproject.org/nettest/) (available for
[Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe), [iOS](https://itunes.apple.com/us/app/id1199566366),
[macOS](https://ooni.torproject.org/install/ooniprobe),
[Linux](https://ooni.torproject.org/install/ooniprobe), and
[Raspberry Pis](https://ooni.torproject.org/install/lepidopter/))

3.  Explore/Analyze OONI data via the following resources:

* [OONI Explorer](https://explorer.ooni.io/)

* [OONI API](https://api.ooni.io/)
