---
title: "#EgyptCensors: Evidence of recent censorship events in Egypt"
author: "Maria Xynou (OONI), Vasilis Ververis (OONI), Arturo Filastò (OONI), Wafa Ben Hassine (Access Now)"
date: "2017-06-19T15:30:00Z"
tags: ["egypt", "censorship", "country-eg", "theme-news_media", "theme-circumvention"]
categories: ["report"]
---

![Egyptian Flag](/post/egypt-network-interference/egypt-flag.png)

**Country:** Egypt

**OONI tests:** [Web Connectivity](https://ooni.org/nettest/web-connectivity/),
[HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/),
[HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/),
[HTTP Host](https://ooni.org/nettest/http-host/), [Vanilla Tor](https://ooni.org/nettest/vanilla-tor/).

**Probed ISPs:** Link Egypt (AS24863), Vodafone Egypt (AS36935), Telecom
Egypt (AS8452).

**Analysis period:** 23rd May 2017 to 17th June 2017.

**Censorship method:** Deep Packet Inspection (DPI) used to RESET
connections.

Starting on May 24th, the Egyptian government ordered ISPs to [block at least 21 news websites](https://cpj.org/2017/05/egypt-blocks-access-to-21-news-websites.php)
on the grounds of “supporting terrorism and spreading lies”. In an
attempt to understand which sites were blocked and how, [OONI Probe network measurement software](https://github.com/TheTorProject/ooni-probe) - designed to
examine internet censorship - was run in three local vantage points in
the country.

So far, we have been able to identify and confirm the blocking of *ten*
news websites, including madamasr.com, aljazeera.net, and eight others.
It remains unclear to us though if all ten sites have been blocked under
the Egyptian government’s recent order.

Unfortunately, we also found access to censorship circumvention software
to be blocked as well. Link Egypt appears to be
[blocking](https://explorer.ooni.org/measurement/20170607T000039Z_AS24863_4ECuBjVSis0W3jkh8NUDz2NnVyVbhFtCAU0T0E3y55azgD1ntq)
access to the [Tor network](https://torproject.org/), though it
appears to currently be accessible from the Telecom Egypt (TE) and
Vodafone networks. We also found torproject.org, the [Tor bridges website](https://bridges.torproject.org/), and even [our own site](https://ooni.org/) (which enables users to measure
internet censorship) to be blocked in some networks.

Through the collection and analysis of [network measurement data](https://api.ooni.io/files/by_country/EG) we
were able to determine that Egyptian ISPs are using Deep Packet
Inspection (DPI) technology to RESET connections to sites.

# Mada Masr blocked

Mada Masr is an independent Cairo-based media organization that
[publishes stories](https://www.madamasr.com/) of critical interest to
the public. Such stories range from politics, culture and the economy,
and even [cover the ongoing crackdown](https://www.madamasr.com/en/topic/activist-arrests/) of
human rights activists. Two years ago, Mada Masr [won an award](https://www.madamasr.com/en/2015/10/15/news/u/mada-masr-nominated-for-raif-badawi-award-for-courageous-journalists/)
for courageous journalism and for “trying to document facts rather than
presenting populist arguments”.

Recently, Mada Masr
[announced](https://www.madamasr.com/en/2017/05/26/feature/politics/24-hours-later-what-we-know-about-the-blocking-of-mada-masrs-website/)
that its site was blocked in Egypt. [Network measurement data](https://explorer.ooni.org/country/EG) collected from
[OONI Probe](https://ooni.org/install/) users in Egypt
confirms the blocking of madamasr.com in three networks, as illustrated
through the table below.

| Websites                  | Link Egypt (AS24863) | Vodafone Egypt (AS36935) | TE (AS8452) |
|---------------------------|----------------------|--------------------------|-------------|
| `http://www.madamasr.com/`  | [BLOCKED](https://explorer.ooni.org/measurement/20170606T010719Z_AS24863_RPgEEPSee1tU0UtS99LL0KODKV57tui2Ix7UODjc4MI8V7BGoB?input=http:%2F%2Fmadamasr.com)              | [BLOCKED](https://explorer.ooni.org/measurement/20170617T112204Z_AS36935_mDk3o109bS27kksZ75bBcKtzKG7YXbNSJoDwif7bNLmBO6L3Zr?input=http:%2F%2Fwww.madamasr.com)                  | [BLOCKED](https://explorer.ooni.org/measurement/20170611T125225Z_AS8452_9881Gm998h0a9fcgmv5Y8VhsxPUGzOHwjYl8tEbY1l8pbJMyyj?input=http:%2F%2Fwww.madamasr.com%2Far%2F)     |
| `https://www.madamasr.com/` | [BLOCKED](https://explorer.ooni.org/measurement/20170527T022637Z_AS24863_a2cVejuvTKddBoVLe3DyDGnPfEnaoUAmP51zo3jTJNEdF6iJJT?input=https:%2F%2Fmadamasr.com)              | [BLOCKED](https://explorer.ooni.org/measurement/20170524T220659Z_AS36935_KOMTdBwGsyVovBhs8tYihdTP4ucPSWA5iMH4PqXEfX5TU1ZWK3?input=https:%2F%2Fwww.madamasr.com)                  | [ACCESSIBLE](https://explorer.ooni.org/measurement/20170601T122343Z_AS8452_sGKIfKmvIikjYIwfZEyJ0KDA2hZ6vt3UWtwb7LfmJMuDhMw1CJ?input=https:%2F%2Fmadamasr.com)  |

Interestingly enough, TE (AS8452) has only been blocking the HTTP
version of madamasr.com, enabling users to circumvent the censorship by
accessing the site over HTTPS. Vodafone Egypt (AS36935) and Link Egypt
(AS24863), on the other hand, have been blocking both the HTTP and HTTPS
versions of the site, rendering censorship harder to circumvent.

Based on the [network measurement data](https://explorer.ooni.org/country/EG) collected, we
can confirm that Vodafone Egypt has been [blocking access to madamasr.com from 24th May 2017](https://explorer.ooni.org/measurement/20170524T220638Z_AS36935_SveTAFTLwr1eLS6z6VntLnsSPTVa9Z1pPDxY8EQbDMPvSfeDyL?input=http:%2F%2Fwww.madamasr.com)
(when the ban was first announced) to this date. The blocking of the
site by Link Egypt can be [confirmed as of 25th May 2017](https://explorer.ooni.org/measurement/20170525T002807Z_AS24863_D0wke80vqyAftWWAj961yFc2afF0jtFbdiMFpu62DI5Sfs96b6?input=http:%2F%2Fmadamasr.com),
when OONI Probe users started testing the site in that network.

It’s worth noting that the HTTP version of madamasr.com was [accessible in the TE network until 30th May 2017](https://explorer.ooni.org/measurement/20170530T005058Z_AS8452_cWwFLiGgXdRMrPJ24gH4CUx1K2h4ZPSO0KKW2MmXNoWXYf9bSJ?input=http:%2F%2Fmadamasr.com)
and that it only started getting [blocked on 31st May 2017](https://explorer.ooni.org/measurement/20170531T104508Z_AS8452_jE1XD5egqf8T5NyeHPLMd9YXtuZln6FffTsQf6JDXoqVrQHuLk?input=http:%2F%2Fwww.madamasr.com).

All three ISPs are continuing to block access to madamasr.com, according
to recent measurements.

# Aljazeera blocked

Recent censorship events in Egypt are not limited to national news
outlets. [Network measurement data](https://explorer.ooni.org/country/EG) collected from
OONI Probe users in Egypt confirms the blocking of aljazeera.net in three
networks, as illustrated through the table below.

| Websites                   | Link Egypt (AS24863) | Vodafone Egypt (AS36935) | TE (AS8452)   |
|----------------------------|----------------------|--------------------------|---------------|
| `http://www.aljazeera.net/`  | [BLOCKED](https://explorer.ooni.org/measurement/20170607T000416Z_AS24863_nrmytBw1nQBc5CKsQsuSe6r3XR7k5Mt0hFrO2Zeo3PEHIX4Jkt?input=http:%2F%2Fwww.aljazeera.net)              | [BLOCKED](https://explorer.ooni.org/measurement/20170617T112204Z_AS36935_mDk3o109bS27kksZ75bBcKtzKG7YXbNSJoDwif7bNLmBO6L3Zr?input=http:%2F%2Fwww.aljazeera.net)                  | [BLOCKED](https://explorer.ooni.org/measurement/20170611T125225Z_AS8452_9881Gm998h0a9fcgmv5Y8VhsxPUGzOHwjYl8tEbY1l8pbJMyyj?input=http:%2F%2Fwww.aljazeera.net%2F)       |
| `https://www.aljazeera.net/` | Unknown (N/A)        | [BLOCKED](https://explorer.ooni.org/measurement/20170524T220920Z_AS36935_oaDJX0uN8fMLncEu9NQ794dvX4bC3zFejdVouFgsmlHukkjCsn?input=https:%2F%2Fwww.aljazeera.net)                  | Unknown (N/A) |

Based on the most recent [network measurement data](https://explorer.ooni.org/country/EG), the HTTP
version of aljazeera.net is currently blocked by Link Egypt, Vodafone
Egypt and TE. Both [Vodafone Egypt](https://explorer.ooni.org/measurement/20170524T220805Z_AS36935_Ia2wQfPniG5PpADTdVt0luN42pHLoF5d04wgOazzO6Ah4P9aeK?input=http:%2F%2Fwww.aljazeera.net)
and [Link Egypt](https://explorer.ooni.org/measurement/20170524T230622Z_AS24863_0N03X2oYPyCxNFjPD8NQriw1VQZMt1luVNnSkBTxeXMokS5ek8?input=http:%2F%2Fwww.aljazeera.net)
started blocking access to the site on 24th May 2017, when the ban was
officially announced. The data we have shows that [TE blocked access to aljazeera.net as of 5th May 2017](https://explorer.ooni.org/measurement/20170605T000038Z_AS8452_22YpwwmYi2fFWXTnlZqgzQSB2X0fn0C7dDEdD5g75jT0IH9qXP?input=http:%2F%2Fwww.aljazeera.net),
though the block may have been implemented at an earlier date (this is
something that we cannot corroborate, since the testing of this site in
this network started on 5th May).

Similarly to the blocking of madamasr.com, Vodafone Egypt was found to
be blocking both the
[HTTP](https://explorer.ooni.org/measurement/20170608T120433Z_AS36935_Cb2MTybnpnvEyLi1h2rnCL9Kpom8qxdoOFJNCLZDpQvnLzUb3G?input=http:%2F%2Fwww.aljazeera.net%2F)
and
[HTTPS](https://explorer.ooni.org/measurement/20170524T220920Z_AS36935_oaDJX0uN8fMLncEu9NQ794dvX4bC3zFejdVouFgsmlHukkjCsn?input=https:%2F%2Fwww.aljazeera.net)
versions of aljazeera.net. However, as the HTTPS version of the site was
only [tested in that network on 24th May 2017](https://explorer.ooni.org/measurement/20170524T220920Z_AS36935_oaDJX0uN8fMLncEu9NQ794dvX4bC3zFejdVouFgsmlHukkjCsn?input=https:%2F%2Fwww.aljazeera.net),
it remains unclear if it is still being censored. Given the fact though
that recent measurements show that Vodafone Egypt is still [blocking both the HTTP](https://explorer.ooni.org/measurement/20170608T120433Z_AS36935_Cb2MTybnpnvEyLi1h2rnCL9Kpom8qxdoOFJNCLZDpQvnLzUb3G?input=http:%2F%2Fwww.madamasr.com%2Far%2F)
and
[HTTPS](https://explorer.ooni.org/measurement/20170524T220659Z_AS36935_KOMTdBwGsyVovBhs8tYihdTP4ucPSWA5iMH4PqXEfX5TU1ZWK3?input=https:%2F%2Fwww.madamasr.com)
versions of madamasr.com, it’s likely that they are continuing to block
the HTTPS version of aljazeera.net as well.

As the HTTPS version of aljazeera.net has not been tested recently in
the Link Egypt and TE networks, we do not have data that can show
whether it is blocked or not.

Interestingly enough, TE temporarily [unblocked access to aljazeera.net/portal](https://explorer.ooni.org/measurement/20170530T005058Z_AS8452_cWwFLiGgXdRMrPJ24gH4CUx1K2h4ZPSO0KKW2MmXNoWXYf9bSJ?input=http:%2F%2Fwww.aljazeera.net%2Fportal)
and to
[midan.aljazeera.net](https://explorer.ooni.org/measurement/20170531T121314Z_AS8452_TKPNRi4aRsUL2DJJBeyuZlliNrcXlH67MwCqF0pcAKp584UUmQ?input=http:%2F%2Fmidan.aljazeera.net)
on 30th and 31st May 2017, while [continuing to block access to aljazeera.net](https://explorer.ooni.org/measurement/20170531T142614Z_AS8452_XzeOJtpw0NcNaLoAU6ffKjZFbmATnucDaGcx3KjST35uV3Q1c1?input=http:%2F%2Fwww.aljazeera.net).
However, they [resumed the blocking](https://explorer.ooni.org/measurement/20170601T124754Z_AS8452_LiivSQN1qKbHeESfQQfZYPav1mX5bS7N9Or8m8wkpSAEJjEJw7?input=http:%2F%2Fmidan.aljazeera.net)
on 1st June 2017.

# More news websites blocked

We also found the following 8 media websites to be blocked by Vodafone
based on recent measurements. It remains unclear though if these news
outlets were blocked under the [Egyptian government’s recent order](https://cpj.org/2017/05/egypt-blocks-access-to-21-news-websites.php).

| Websites                         | Link Egypt (AS24863) | Vodafone Egypt (AS36935) | TE (AS8452)       |
|----------------------------------|----------------------|--------------------------|-------------------|
| `http://horriapost.net/`           | [Likely blocked](https://explorer.ooni.org/measurement/20170525T002712Z_AS24863_VVZHpJEjhssb4Hg3JRYTwAl6O37lu8mG8tMIYEYlK9RKdLCKS1?input=http:%2F%2Fhorriapost.net%2F)       | [BLOCKED](https://explorer.ooni.org/measurement/20170615T131624Z_AS36935_XbM7CT7wIvIDj338bud9oonjQNKYae4blQfuwMY4ZCrpCO5GJY?input=http:%2F%2Fhorriapost.net%2F)                  | [Likely blocked](https://explorer.ooni.org/measurement/20170611T125225Z_AS8452_9881Gm998h0a9fcgmv5Y8VhsxPUGzOHwjYl8tEbY1l8pbJMyyj?input=http:%2F%2Fhorriapost.net%2F)    |
| `http://www.al-watan.com/`         | Unknown (N/A)        | [BLOCKED](https://explorer.ooni.org/measurement/20170615T131624Z_AS36935_XbM7CT7wIvIDj338bud9oonjQNKYae4blQfuwMY4ZCrpCO5GJY?input=http:%2F%2Fwww.al-watan.com%2F)                  | [Mostly accessible](https://explorer.ooni.org/measurement/20170611T125225Z_AS8452_9881Gm998h0a9fcgmv5Y8VhsxPUGzOHwjYl8tEbY1l8pbJMyyj?input=http:%2F%2Fwww.al-watan.com%2F) |
| `http://www.gulf-times.com`       | Unknown (N/A)        | [BLOCKED](https://explorer.ooni.org/measurement/20170617T112204Z_AS36935_mDk3o109bS27kksZ75bBcKtzKG7YXbNSJoDwif7bNLmBO6L3Zr?input=http:%2F%2Fwww.gulf-times.com)                  | [Likely blocked](https://explorer.ooni.org/measurement/20170611T125225Z_AS8452_9881Gm998h0a9fcgmv5Y8VhsxPUGzOHwjYl8tEbY1l8pbJMyyj?input=http:%2F%2Fwww.gulf-times.com)    |
| `http://www.masralarabia.com/`     | [ACCESSIBLE](https://explorer.ooni.org/measurement/20170525T002729Z_AS24863_BuDMMzWdGoHuuEWJuWYuGJlCxxPtoEN1JnrrX6Cxn8Mh1UF1d3?input=http:%2F%2Fwww.masralarabia.com%2F)           | [BLOCKED](https://explorer.ooni.org/measurement/20170615T131624Z_AS36935_XbM7CT7wIvIDj338bud9oonjQNKYae4blQfuwMY4ZCrpCO5GJY?input=http:%2F%2Fwww.masralarabia.com%2F)                  | [Likely blocked](https://explorer.ooni.org/measurement/20170611T125225Z_AS8452_9881Gm998h0a9fcgmv5Y8VhsxPUGzOHwjYl8tEbY1l8pbJMyyj?input=http:%2F%2Fwww.masralarabia.com%2F)    |
| `http://www.moheet.com/`           | Unknown (N/A)        | [BLOCKED](https://explorer.ooni.org/measurement/20170615T131624Z_AS36935_XbM7CT7wIvIDj338bud9oonjQNKYae4blQfuwMY4ZCrpCO5GJY?input=http:%2F%2Fwww.moheet.com%2F)                  | [Likely blocked](https://explorer.ooni.org/measurement/20170611T125225Z_AS8452_9881Gm998h0a9fcgmv5Y8VhsxPUGzOHwjYl8tEbY1l8pbJMyyj?input=http:%2F%2Fwww.moheet.com%2F)    |
| `http://www.qtv.qa/`               | Unknown (N/A)        | [BLOCKED](https://explorer.ooni.org/measurement/20170615T131624Z_AS36935_XbM7CT7wIvIDj338bud9oonjQNKYae4blQfuwMY4ZCrpCO5GJY?input=http:%2F%2Fwww.qtv.qa%2F)                  | [Likely blocked](https://explorer.ooni.org/measurement/20170611T125225Z_AS8452_9881Gm998h0a9fcgmv5Y8VhsxPUGzOHwjYl8tEbY1l8pbJMyyj?input=http:%2F%2Fwww.qtv.qa%2F)    |
| `http://www.raya.com/`             | [Likely blocked](https://explorer.ooni.org/measurement/20170607T004202Z_AS24863_PdA4gRMl8XlnXGCZu9o7TVwcsXv0zokEr5GGpDHj2oiS9stzkv?input=http:%2F%2Fwww.raya.com%2Fportal)       | [BLOCKED](https://explorer.ooni.org/measurement/20170615T131624Z_AS36935_XbM7CT7wIvIDj338bud9oonjQNKYae4blQfuwMY4ZCrpCO5GJY?input=http:%2F%2Fwww.raya.com%2F)                  | [Likely blocked](https://explorer.ooni.org/measurement/20170611T125225Z_AS8452_9881Gm998h0a9fcgmv5Y8VhsxPUGzOHwjYl8tEbY1l8pbJMyyj?input=http:%2F%2Fwww.raya.com%2F)    |
| `http://www.thepeninsulaqatar.com` | Unknown (N/A)        | [BLOCKED](https://explorer.ooni.org/measurement/20170617T112204Z_AS36935_mDk3o109bS27kksZ75bBcKtzKG7YXbNSJoDwif7bNLmBO6L3Zr?input=http:%2F%2Fwww.thepeninsulaqatar.com)                  | Unknown (N/A)     |
  
The table above illustrates that all eight news outlets were found to
recently be blocked by Vodafone Egypt, which appears to be using DPI
technology to RESET connections to these sites. We are currently unable
though to confirm whether these sites are in fact blocked in the TE and
Link Egypt networks as well.

# Torproject.org, Tor bridges, and OONI’s site blocked

[Tor](https://www.torproject.org/) is free software and an open
network that provides its users with online anonymity. Tor software is
designed to bounce communications around a distributed network of relays
run by volunteers around the world, thus hiding users’ IP addresses and
circumventing online tracking and internet censorship. [Tor bridges](https://bridges.torproject.org/) are designed to enable users
to access the Tor network in countries where access to it is blocked.

[Network measurement data](https://explorer.ooni.org/country/EG) collected from
three local vantage points in Egypt show the blocking of The Tor
Project’s website and of bridges.torproject.org, the subdomain that
enables users to get Tor bridges to circumvent the blocking of the Tor
network. But we also found our own site (ooni.org), which
promotes network measurement software designed to detect internet
censorship, to be blocked as well.

| Websites                       | Link Egypt (AS24863) | Vodafone Egypt (AS36935) | TE (AS8452)   |
|--------------------------------|----------------------|--------------------------|---------------|
| `http://www.torproject.org`      | [BLOCKED](https://explorer.ooni.org/measurement/20170527T213554Z_AS24863_dEZ5mDUS0q3wwhcJWy4JeJB8ecIwYL7Kp7CyyWKFihwwiU5aXM?input=http:%2F%2Ftorproject.org)              | [BLOCKED](https://explorer.ooni.org/measurement/20170617T112204Z_AS36935_mDk3o109bS27kksZ75bBcKtzKG7YXbNSJoDwif7bNLmBO6L3Zr?input=http:%2F%2Fwww.torproject.org)                  | Unclear       |
| `https://www.torproject.org`     | [BLOCKED](https://explorer.ooni.org/measurement/20170607T000416Z_AS24863_nrmytBw1nQBc5CKsQsuSe6r3XR7k5Mt0hFrO2Zeo3PEHIX4Jkt?input=https:%2F%2Fwww.torproject.org)              | Unknown (N/A)            | Unclear       |
| `http://bridges.torproject.org`  | [BLOCKED](https://explorer.ooni.org/measurement/20170528T012045Z_AS24863_tzOtDMIclzclWroIwG4ITWj56g0u9La10h3a4IhkmpZXDmDWmZ?input=http:%2F%2Fbridges.torproject.org)              | [BLOCKED](https://explorer.ooni.org/measurement/20170617T112204Z_AS36935_mDk3o109bS27kksZ75bBcKtzKG7YXbNSJoDwif7bNLmBO6L3Zr?input=http:%2F%2Fbridges.torproject.org)                  | [ACCESSIBLE](https://explorer.ooni.org/measurement/20170611T125225Z_AS8452_9881Gm998h0a9fcgmv5Y8VhsxPUGzOHwjYl8tEbY1l8pbJMyyj?input=http:%2F%2Fbridges.torproject.org)    |
| `https://bridges.torproject.org` | [BLOCKED](https://explorer.ooni.org/measurement/20170607T004202Z_AS24863_PdA4gRMl8XlnXGCZu9o7TVwcsXv0zokEr5GGpDHj2oiS9stzkv?input=https:%2F%2Fbridges.torproject.org)              | Unknown (N/A)            | [ACCESSIBLE](https://explorer.ooni.org/measurement/20170611T010538Z_AS8452_8xbPtSv86ne0xmuWkInIlHcJCDu6wm2kLqGGxE7fZ8hikeF2Xc?input=https:%2F%2Fbridges.torproject.org)    |
| `http://ooni.org`     | [BLOCKED](https://explorer.ooni.org/measurement/20170527T220324Z_AS24863_bXdVf9r1lBblsIZcA5X0w2yIZ36ktyOXw1uOdtgug9qaKU2WP6?input=http:%2F%2Fooni.org)              | [BLOCKED](https://explorer.ooni.org/measurement/20170617T112204Z_AS36935_mDk3o109bS27kksZ75bBcKtzKG7YXbNSJoDwif7bNLmBO6L3Zr?input=http:%2F%2Fooni.org)                  | [ACCESSIBLE](https://explorer.ooni.org/measurement/20170611T125225Z_AS8452_9881Gm998h0a9fcgmv5Y8VhsxPUGzOHwjYl8tEbY1l8pbJMyyj?input=http:%2F%2Fooni.org)    |
| `https://ooni.org`    | [BLOCKED](https://explorer.ooni.org/measurement/20170601T003359Z_AS24863_hBVFAdrydtozIg60uDcw7jsKi1wFWNXKOck4MbSUA7FP4gUqqW?input=https:%2F%2Fooni.org)              | Unknown (N/A)            | Unknown (N/A) |

The table above illustrates that both the HTTP and HTTPS versions of
torproject.org, bridges.torproject.org and ooni.org were
found to recently be blocked by Link Egypt. Based on the collected data,
Link Egypt appears to have started blocking these domains on 27th May
2017 and continues to block them to date.

Vodafone Egypt, on the other hand, was only found to be blocking the
HTTP versions of torproject.org, bridges.torproject.org and
ooni.org. It remains unclear, however, if the HTTPS versions
of these domains are blocked as well, since they have not been tested
within this network.

Based on the recent collection of network measurement data, we are
unable to reach a conclusion on the accessibility of torproject.org in
the TE network. Some
[measurements](https://explorer.ooni.org/measurement/20170528T222857Z_AS8452_GQNW87otydPexm8sKRXiyTbErQBvP7jSGHHO5rU4yDlw8tmERT?input=https:%2F%2Fwww.torproject.org)
indicate that TE may have started blocking access to
https://www.torproject.org on 28th May 2017, but only on its mobile
network. Similarly, other
[measurements](https://explorer.ooni.org/measurement/20170530T005058Z_AS8452_cWwFLiGXdRMrPJ24gH4CUx1K2h4ZPSO0KKW2MmXNoWXYf9bSJ?input=https:%2F%2Ftorproject.org)
indicate that TE may have started blocking https://torproject.org on
fixed networks on 30th May 2017. But on 4th June 2017, both domains
appeared to be accessible (data
[here](https://explorer.ooni.org/measurement/20170604T085131Z_AS8452_131O4JvC2J6TUcLu70jDQqicAHkHGMdnRrK2IxNk3uPxFzmD2w?input=https:%2F%2Ftorproject.org)
and
[here](https://explorer.ooni.org/measurement/20170604T075102Z_AS8452_zbpJ7JDsbnj7zRpzQI6cBQ8Mhe0F0vWPryWmqd29l6Ej764JW5?input=https:%2F%2Fwww.torproject.org)),
indicating that if they were censored, their block was lifted.

However, access to `https://torproject.org` appeared to be [blocked again](https://explorer.ooni.org/measurement/20170608T020414Z_AS8452_LIot9lnBiGkPw3OYWo52W9SWlhYNSPcDW3IU0fND6WAbYiK41N?input=https:%2F%2Ftorproject.org)
on 8th June, while appearing to be
[accessible](https://explorer.ooni.org/measurement/20170609T011311Z_AS8452_Vi1AOZpkPpEKwD8vOI41LYWOcKQQeEVMM3LBqHWOY6LX5lOzmi?input=https:%2F%2Ftorproject.org)
the next day. Quite similarly, OONI’s network measurements indicate that
TE blocked access to the HTTPS version of www.torproject.org on
[6th](https://explorer.ooni.org/measurement/20170606T000048Z_AS8452_4syxiMyUcjacHSLUFWoAS8RQKWZxzBHaYglwJrceUKf9dClE79?input=https:%2F%2Fwww.torproject.org)
and
[7th](https://explorer.ooni.org/measurement/20170607T143520Z_AS8452_buuB25v50T8fEy2PviRH0nTlq7cuLwPwuLJFV5eNXTCJORgkz6?input=https:%2F%2Fwww.torproject.org)
June, but the HTTP version of this domain appeared to be
[accessible](https://explorer.ooni.org/measurement/20170607T153246Z_AS8452_BrJDLZ6slIndIRUGN8yonWPAlEEo4N23xg6Sv3lChLSDTWmQEk?input=http:%2F%2Fwww.torproject.org%2F)
during the same dates within the same network. The latest measurements,
on the other hand, show that both the
[HTTP](https://explorer.ooni.org/measurement/20170609T091444Z_AS8452_VS4MRLXrZIETB18HE1cBIMn1lEIx6vrukrf1XtFBEfim6ICvqH?input=http:%2F%2Fwww.torproject.org%2F)
and
[HTTPS](https://explorer.ooni.org/measurement/20170609T000049Z_AS8452_VxGiZKSsPdYWwc40X34gDsWyIZQLCJO8EAZBNzCIOwuoQ5UBCn?input=https:%2F%2Fwww.torproject.org)
versions of www.torproject.org were accessible in the TE network. Since
the collected data is not conclusive, it remains unclear whether TE
intentionally blocked access to torproject.org or whether the anomalous
measurements are false positives.

It also remains unclear whether TE blocked access to
ooni.org. Measurements from 9th June 2017 indicate that
[access to our site was blocked](https://explorer.ooni.org/measurement/20170609T091444Z_AS8452_VS4MRLXrZIETB18HE1cBIMn1lEIx6vrukrf1XtFBEfim6ICvqH?input=http:%2F%2Fooni.org),
but measurements from [previous dates](https://explorer.ooni.org/measurement/20170608T113834Z_AS8452_jHZsSvnejndKU0rga2OtkDZFQkmlyHPdDcXVSVOXAsAY4D49et?input=http:%2F%2Fooni.org),
as well as [more recent measurements](https://explorer.ooni.org/measurement/20170611T125225Z_AS8452_9881Gm998h0a9fcgmv5Y8VhsxPUGzOHwjYl8tEbY1l8pbJMyyj?input=http:%2F%2Fooni.org),
show that it was accessible. As such, the anomalous measurements might
have been due to transient network failures.

On a positive note, bridges.torproject.org was confirmed to be
[accessible](https://explorer.ooni.org/measurement/20170609T091444Z_AS8452_VS4MRLXrZIETB18HE1cBIMn1lEIx6vrukrf1XtFBEfim6ICvqH?input=http:%2F%2Fbridges.torproject.org)
in the TE network, enabling users to acquire Tor bridges.

# Tor network blocked by Link Egypt

OONI’s [Vanilla Tor test](https://ooni.org/nettest/vanilla-tor/) is designed to
examine the reachability of the [Tor network](https://www.torproject.org/) by attempting to successfully
bootstrap a connection to the Tor network.
[Data](https://explorer.ooni.org/country/EG) collected
through this test indicates that the Tor network is
[blocked](https://explorer.ooni.org/measurement/20170607T000039Z_AS24863_4ECuBjVSis0W3jkh8NUDz2NnVyVbhFtCAU0T0E3y55azgD1ntq)
in the Link Egypt network, but likely accessible in the TE and Vodafone
Egypt networks.

Tests in the Link Egypt network were run every day between 24th to 28th
May, and 1st to 7th June 2017. During this period, OONI Probe was never
able to establish a connection to the Tor network, strongly indicating
that it may have been blocked.

Data collected from the TE network, however, is less conclusive. While
OONI Probe was able to bootstrap a connection to the Tor network between
29th to 31st May, it was unable to do so on 1st and 4th June. Between
5th to 9th June 2017, some attempts were successful, while others
failed. Since OONI Probe was able to establish *some* connections over
the last weeks, it’s likely that the failed connections were caused by
transient network failures.

During the last weeks, the Tor network was only tested once in the
Vodafone Egypt network, and a connection to it was [successfully established](https://explorer.ooni.org/measurement/20170601T150308Z_AS36935_YJmHwPxdxUkZDHeO2SZQ71dJwKdALK33dovkkBeBNCF5LlTswQ).

# Contributing to this study

This study is part of ongoing efforts to monitor internet censorship
events in Egypt and around the world. Potentially anyone can [run OONI Probe](https://ooni.org/install/), since it’s [free and open source software](https://github.com/TheTorProject/ooni-probe) and
can be run from multiple platforms (Android, iOS, macOS, Linux,
Raspberry Pis). Over the last five years, tens of thousands of OONI Probe
users have [measured networks across more than 190 countries](https://explorer.ooni.org/world/) with the aim of
uncovering internet censorship events.

Running OONI Probe however can potentially be a
[risky](https://ooni.org/about/risks/) activity. Anyone
monitoring your internet activity (e.g. ISP, government, employer) will
be able to know that you are running OONI Probe. And some of the sites
that are tested by OONI Probe (such as pornography or online gambling)
may be illegal in certain countries.

If you feel uncomfortable with the potential risks, there are other
(equally important) ways that you can contribute. Ooniprobe’s censorship
findings are only as interesting as the types of sites that are tested.
We were likely unable to identify the [blocking of all 21 news outlets](https://cpj.org/2017/05/egypt-blocks-access-to-21-news-websites.php)
if they were not included in the [lists of sites](https://github.com/citizenlab/test-lists/tree/master/lists) that
we tested for censorship. As such, reviewing and updating the lists that
OONI Probe tests for censorship is an important task. Information on how
to contribute to such lists can be found
[here](https://ooni.org/get-involved/contribute-test-lists/).

If you’re a data analyst, you may be interested in analyzing the
[network measurement data](https://api.ooni.io/)
collected by OONI Probe. If you’re a journalist, you may be interested in
telling stories based on the
[data](https://explorer.ooni.org/world/). If you’re a
lawyer, you may be interested in examining the legality of censorship
events based on OONI Probe network measurement data, and potentially even
using it as evidence in court cases. And if you’re a human rights
advocate, you may be interested in supporting [Access Now’s KeepItOn campaign](https://www.accessnow.org/keepiton/) for a free and open internet.
