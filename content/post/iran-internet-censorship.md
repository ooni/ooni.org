---
title: "Internet Censorship in Iran: Network Measurement Findings from 2014-2017"
author: "Maria Xynou (OONI), Arturo Filastò (OONI), Mahsa Alimardani (ARTICLE 19), Sina Kouhi (ASL19), Kyle Bowen (ASL19), Vmon (ASL19), Amin Sabeti (Small Media)"
date: "2017-09-28"
tags: ["iran", "censorship", "research-report", "country-ir", "theme-human_rights", "theme-news_media", "theme-social_media", "theme-circumvention"]
categories: ["report"]
---

![Iran block page](/post/iran/blockpage.png)

Image: Blockpage in Iran

A research study by the Open Observatory of Network Interference (OONI),
ASL19, ARTICLE 19, and Small Media.

**Table of contents**

* [Key Findings](#key-findings)

* [Introduction](#introduction)

* [Background](#background)

    * [Network landscape](#network-landscape)

    * [Internet use](#internet-use)

    * [Legal environment](#legal-environment)

    * [Reported cases of internet censorship](#reported-cases-of-internet-censorship)

* [Methodology: Measuring internet censorship in Iran](#methodology-measuring-internet-censorship-in-iran)

    * [Review of the Citizen Lab's test list for Iran](#review-of-the-citizen-labs-test-list-for-iran)

    * [OONI network measurement testing](#ooni-network-measurement-testing)

      * [Web Connectivity](#web-connectivity)

      * [HTTP Invalid Request Line](#http-invalid-request-line)

      * [HTTP Header Field Manipulation](#http-header-field-manipulation)

      * [Vanilla Tor test](#vanilla-tor-test)

      * [WhatsApp test](#whatsapp-test)

      * [Facebook Messenger test](#facebook-messenger-test)

      * [Telegram test](#telegram-test)

    * [Data analysis](#data-analysis)

* [Findings](#findings)

    * [Blocked domains and tools](#blocked-domains-and-tools)

        * [News websites](#news-websites)

        * [Political criticism](#political-criticism)

        * [Human rights issues](#human-rights-issues)

        * [Communication tools](#communication-tools)

        * [Social networks](#social-networks)

        * [Media sharing platforms](#media-sharing-platforms)

        * [Anonymity and circumvention tools](#anonymity-and-circumvention-tools)

    * [Block Me, Block Me Not, Block Me](#block-me-block-me-not-block-me)

    * [Non-governmental forms of internet censorship](#non-governmental-forms-of-internet-censorship)

    * [Acknowledgement of limitations](#acknowledgement-of-limitations)

* [Conclusion](#conclusion)

* [Acknowledgements](#acknowledgements)


**Country:** Iran

**Probed ISPs:** AS12660, AS12880, AS16322, AS1756, AS197207, AS197343,
AS198357, AS201150, AS201540, AS202571, AS206639, AS21341, AS25124,
AS29068, AS29256, AS31549, AS34918, AS39074, AS39308, AS39466, AS39501,
AS41881, AS42337, AS43754, AS44208, AS44244, AS44285, AS44498, AS44889,
AS47262, AS47796, AS48159, AS48281, AS48359, AS48434, AS49100, AS49103,
AS49689, AS50530, AS50810, AS51074, AS51119, AS51828, AS56402, AS56503,
AS56687, AS57218, AS57240, AS57563, AS58085, AS58142, AS58224, AS59573,
AS59587, AS59628, AS60054, AS61173, AS61248, AS8571 (60 ISPs in total)

**OONI tests:** [Web Connectivity](https://ooni.org/nettest/web-connectivity/),
[HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/),
[HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/),
[Vanilla Tor](https://ooni.org/nettest/vanilla-tor/),
[WhatsApp test](https://ooni.org/nettest/whatsapp/),
[Facebook Messenger test](https://ooni.org/nettest/facebook-messenger/),
[Telegram test](https://ooni.org/nettest/telegram/)

**Testing period:** 22nd September 2014 to 4th September 2017 (3 years)

**Censorship method:** DNS injection of blockpages, HTTP transparent
proxies serving blockpages

# Key Findings

Thousands of [OONI Probe network measurements](https://api.ooni.io/files/by_country/IR)
collected from 60 local networks across Iran over the last three years
**have confirmed the blocking of 886 domains** (and [1,019 URLs](/post/iran/ir-blocked-urls.csv) in
total), listed [here](/post/iran/ir-blocked-domains.csv).

The breadth and scale of internet censorship in Iran is pervasive.
Blocked domains include:

* **News websites:** [bbc.co.uk](https://explorer.ooni.org/measurement/20170903T034005Z_AS44244_FeFw8yqNhqZxoi6HoWpkKxEgL0x9yKCXlWWTMtpK6hQzlakmmy?input=http:%2F%2Fwww.bbc.co.uk), [voanews.com](https://explorer.ooni.org/measurement/20170904T022419Z_AS16322_S5cIgku1RXFRnKctLFy9JQRMtODe5oGnxO3JJmdEVsbw1n21wT?input=http:%2F%2Fwww.voanews.com%2Fpersian%2F), [dw-world.de](https://explorer.ooni.org/measurement/20170903T021755Z_AS16322_m8gKgQgZdu7o7GVe6tZYagB9DVjNLGrzrkUCzWAijzwf5rBQbv?input=http:%2F%2Fwww.dw-world.de%2Fdw%2F0,,641,00.html), [arabtimes.com](https://explorer.ooni.org/measurement/20170902T221146Z_AS197207_0FospvK9Ol7aYaROSdhQLWskUeOxYvspMWejPYrLcfepLIrDZA?input=http:%2F%2Fwww.arabtimes.com), [cbc.ca](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fwww.cbc.ca), [reddit.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.reddit.com%2F), [russia.tv](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Frussia.tv), [aawsat.com](https://explorer.ooni.org/measurement/20170903T034005Z_AS44244_FeFw8yqNhqZxoi6HoWpkKxEgL0x9yKCXlWWTMtpK6hQzlakmmy?input=http:%2F%2Faawsat.com%2F), [iranshahrnewsagency.com](https://explorer.ooni.org/measurement/20170903T034005Z_AS44244_FeFw8yqNhqZxoi6HoWpkKxEgL0x9yKCXlWWTMtpK6hQzlakmmy?input=http:%2F%2Firanshahrnewsagency.com%2F), [iranpressnews.com](https://explorer.ooni.org/measurement/20170903T034005Z_AS44244_FeFw8yqNhqZxoi6HoWpkKxEgL0x9yKCXlWWTMtpK6hQzlakmmy?input=http:%2F%2Fwww.iranpressnews.com), [iranntv.com](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fwww.iranntv.com), [tehranreview.net](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Ftehranreview.net%2F).

* **Opposition sites:** [People’s Mojahedin Organization of Iran](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Firan.mojahedin.org), [Worker-Communist Party](https://explorer.ooni.org/measurement/20170903T034005Z_AS44244_FeFw8yqNhqZxoi6HoWpkKxEgL0x9yKCXlWWTMtpK6hQzlakmmy?input=http:%2F%2Fwww.wpiran.org), [Labour Party (Toufan)](https://explorer.ooni.org/measurement/20170904T022419Z_AS16322_S5cIgku1RXFRnKctLFy9JQRMtODe5oGnxO3JJmdEVsbw1n21wT?input=http:%2F%2Fwww.toufan.org), [Komala Party of Iranian Kurdistan](https://explorer.ooni.org/measurement/20170904T022419Z_AS16322_S5cIgku1RXFRnKctLFy9JQRMtODe5oGnxO3JJmdEVsbw1n21wT?input=http:%2F%2Fwww.komala.org), [National Council of Resistance of Iran (NCRI)](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Firanncr.org).

* **Pro-democracy sites:** [National Democratic Institute (NDI)](https://explorer.ooni.org/measurement/20170902T104107Z_AS25124_ObKp4k9uiwaA0evMgY2m3cZmpyVmx2E4Ixk5CzwYadqsn8J3RY?input=https:%2F%2Fwww.ndi.org%2F), [National Endowment for Democracy (NED)](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fwww.ned.org).

* **Blogs of Iranian political activists:** [Ali Afshari](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Faliafshari.com%2F) and [Ahmad Batebi](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fahmadbatebi.com%2F).

* **Human rights sites:** [Center for Human Rights in Iran](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=https:%2F%2Fwww.iranhumanrights.org), [Human Rights & Democracy for Iran](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fwww.iranrights.org%2F), [Iran Human Rights](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Firanhr.net%2Ffa%2F), [Human Rights Watch](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=https:%2F%2Fwww.hrw.org), [Human Rights Campaign](https://explorer.ooni.org/measurement/20170902T213651Z_AS197207_Jy1372wqOUxV5SVoQ301hyHpJSB4XEj7saby2Ykpqy2MFvzrnP?input=http:%2F%2Fwww.hrc.org), [Human Rights First](https://explorer.ooni.org/measurement/20170902T221146Z_AS197207_0FospvK9Ol7aYaROSdhQLWskUeOxYvspMWejPYrLcfepLIrDZA?input=http:%2F%2Fwww.humanrightsfirst.org).

    * **Kurdish sites:** [kurdistanpress.com](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http%3A%2F%2Fkurdistanpress.com), [kurdistanmedia.com](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http%3A%2F%2Fwww.kurdistanmedia.com), [Kurdish Human Rights Project](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http%3A%2F%2Fwww.khrp.org).

    * **Baha’i sites:** [bahai.org](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Finfo.bahai.org), [bahai.com](https://explorer.ooni.org/measurement/20170902T034155Z_AS44244_TEWGAv9uptmhYBAPp2LUaBMx0tNmVgLd0EycgAAZi9kTfM9RQd?input=http:%2F%2Fwww.bahai.com),[bahai-education.org](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fbahai-education.org), [bahai-library.com](https://explorer.ooni.org/measurement/20170904T022419Z_AS16322_S5cIgku1RXFRnKctLFy9JQRMtODe5oGnxO3JJmdEVsbw1n21wT?input=http:%2F%2Fbahai-library.com), [bahairadio.org](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fbahairadio.org).

    * **Women’s rights sites:** [feminist.com](https://explorer.ooni.org/measurement/20170830T220149Z_AS50810_f2x4Ku834sDtePUxEW82kWbhLqyHNKCXKZTgy3mhYSgQ9NGJSH?input=http:%2F%2Fwww.feminist.com), [feminist.org](https://explorer.ooni.org/measurement/20170901T074151Z_AS25124_0AJZQSb9Pvphip58LWHxjyWgFbpnIMrAwObXDGjaFNmeeJ9OMs?input=http:%2F%2Fwww.feminist.org), [AWID](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.awid.org%2F).

    * **LGBTQI sites:** [Grindr](https://explorer.ooni.org/measurement/20170904T101149Z_AS31549_YtoGaLSQDhg9P2c3eZsABt09zrVKhSVCui3rACcYqVJgE6RYrq?input=http:%2F%2Fwww.grindr.com%2F), [lesbian.org](https://explorer.ooni.org/measurement/20170614T211346Z_AS197207_JqL9a0pvqD3QjTK2vqW4UILZZ82MbftVhqLc4UKfiUCIrT22kd?input=http:%2F%2Fwww.lesbian.org), [transsexual.org](https://explorer.ooni.org/measurement/20170901T001651Z_AS44244_QAo0VpO9CjPq7hgZFo7dYdUZWkVKQOxwH87cakbyrMGbTLVufi?input=http:%2F%2Ftranssexual.org), [ILGA](https://explorer.ooni.org/measurement/20170904T182716Z_AS197207_cWFe1e13mwDVf8EMyYE9dfd5ttrPIiBdyl5m1ZGh6zwbjAP50E?input=http:%2F%2Filga.org%2F).

    * **Sites promoting freedom of expression:** [Free Expression Network (FEN)](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fwww.freeexpression.org), [Free Speech TV](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.freespeech.org%2F), [Committee to Protect Journalists](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.cpj.org%2F), [Freedom House](https://explorer.ooni.org/measurement/20170903T034010Z_AS44244_eK4M5fnS6Wcn08gB9YsdtZlN90mLZJjOVcSzj9NQoWNmdZVwPA?input=https:%2F%2Ffreedomhouse.org%2F), [Reporters Without Borders](https://explorer.ooni.org/measurement/20170904T022419Z_AS16322_S5cIgku1RXFRnKctLFy9JQRMtODe5oGnxO3JJmdEVsbw1n21wT?input=http:%2F%2Fwww.rsf.org%2Farticle.php3%3Fid_article%3D19016), [ARTICLE 19](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.article19.org%2F).

    * **Digital rights groups:** [ASL19](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=https:%2F%2Fasl19.org), [The Citizen Lab](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=https:%2F%2Fcitizenlab.org), [Herdict](https://explorer.ooni.org/measurement/20170829T173711Z_AS16322_tJ77PaiMTsazuCfZFNKFGMygXz1wmA1V7OSvP3HE8IqtEFcjVR?input=https:%2F%2Fwww.herdict.org%2F), [Global Voices](https://explorer.ooni.org/measurement/20170901T001651Z_AS44244_QAo0VpO9CjPq7hgZFo7dYdUZWkVKQOxwH87cakbyrMGbTLVufi?input=http:%2F%2Fadvocacy.globalvoicesonline.org), [Electronic Frontier Foundation (EFF)](https://explorer.ooni.org/measurement/20170831T205401Z_AS201150_A5fQYrFRzQQLcuCRqx6Kggl40Cme6r5EEYy5S38ufNBKdp3Ydk?input=https:%2F%2Fwww.eff.org%2F), [The Centre for Democracy and Technology (CDT)](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fcdt.org%2F).

* **Blogging platforms:** [wordpress.com](https://explorer.ooni.org/measurement/20170919T043133Z_AS16322_lfGcun7eX1a9uBz54Pzn8mg4UoikhWtqRVpfw20T8NQstOQEr1?input=http:%2F%2Fwordpress.com), [blogger.com](https://explorer.ooni.org/measurement/20170919T043133Z_AS16322_lfGcun7eX1a9uBz54Pzn8mg4UoikhWtqRVpfw20T8NQstOQEr1?input=http:%2F%2Fblogger.com), [blogspot.com](https://explorer.ooni.org/measurement/20170919T043133Z_AS16322_lfGcun7eX1a9uBz54Pzn8mg4UoikhWtqRVpfw20T8NQstOQEr1?input=http:%2F%2Fwww.mani4lgbt.blogspot.com), [persianblog.com](https://explorer.ooni.org/measurement/20170919T043133Z_AS16322_lfGcun7eX1a9uBz54Pzn8mg4UoikhWtqRVpfw20T8NQstOQEr1?input=http:%2F%2Ffreedomforiran.persianblog.com).

* **Search engines:** [google.com](https://explorer.ooni.org/measurement/20170913T033941Z_AS44244_XWbJUSF7A1sEQXM6OyeVxUcXFkHlsSJ8WRc2q7nCBkBYDvjph0?input=http:%2F%2Fwww.google.com%2Fsearch%3Fhl%3Dar%26q%3DKoon%26btnG%3D%25D8%25A5%25D8%25A8%25D8%25AD%25D8%25AB%2521%26lr%3D), [duckduckgo.com](https://explorer.ooni.org/measurement/20170828T000727Z_AS16322_CbZW9Sf1s0WujtW5iTla3zSV5iRZ1t20zSKFoHxhCYg1lJa12B?input=https:%2F%2Fduckduckgo.com%2F).

* **Communication tools:** [viber.com](https://explorer.ooni.org/measurement/20170903T034010Z_AS44244_eK4M5fnS6Wcn08gB9YsdtZlN90mLZJjOVcSzj9NQoWNmdZVwPA?input=http:%2F%2Fwww.viber.com), [paltalk.com](https://explorer.ooni.org/measurement/20170918T030314Z_AS44244_5Uv7bXBuW5ocZ4v5Oe7zxlfDpNMY7qrPcJeQWiSZxwMvVwV9Kk?input=http:%2F%2Fwww.paltalk.com).

* **Social networks:** [twitter.com](https://explorer.ooni.org/measurement/20170831T111030Z_AS44244_mV6lnlrp0UDTtLHJBpeBApNkkmKQQqy13siWac0qZPPpmJis9G?input=https:%2F%2Ftwitter.com), [facebook.com](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=https:%2F%2Fwww.facebook.com%2Fkambizhosseini), [pinterest.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.pinterest.com%2F), [myspace.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fmyspace.com%2F), [4chan.org](https://explorer.ooni.org/measurement/20170831T111030Z_AS44244_mV6lnlrp0UDTtLHJBpeBApNkkmKQQqy13siWac0qZPPpmJis9G?input=http:%2F%2Fwww.4chan.org).

* **Media sharing platforms:** [youtube.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.youtube.com), [vimeo.com](https://explorer.ooni.org/measurement/20170904T101149Z_AS31549_YtoGaLSQDhg9P2c3eZsABt09zrVKhSVCui3rACcYqVJgE6RYrq?input=https:%2F%2Fvimeo.com%2F), [instagram.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.instagram.com%2F), [netflix.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.netflix.com%2F), [flickr.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.flickr.com%2F), [metacafe.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fwww.metacafe.com).

* **Anonymity and censorship circumvention tool sites:** [torproject.org](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.torproject.org), [psiphon.ca](https://explorer.ooni.org/measurement/20170904T101149Z_AS31549_YtoGaLSQDhg9P2c3eZsABt09zrVKhSVCui3rACcYqVJgE6RYrq?input=https:%2F%2Fpsiphon.ca%2F), [openvpn.net](https://explorer.ooni.org/measurement/20170829T144146Z_AS12880_d5GXgvFXw2So2rM9NI8DRNNeafsRnH42dBSClVT1eTnURjG3Zp?input=https:%2F%2Fopenvpn.net), [freenetproject.org](https://explorer.ooni.org/measurement/20170828T212242Z_AS57563_wi9roMwqCSNCQyP5iWYDxFZLrsnfw9O50rOl8SNrnwGB8la3yN?input=https:%2F%2Ffreenetproject.org%2F), [anonymouse.org](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fanonymouse.org), [anonymizer.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.anonymizer.com%2F), [megaproxy.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.megaproxy.com), [ultrasurf.us](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fultrasurf.us), [hotspotshield.com](https://explorer.ooni.org/measurement/20170902T181922Z_AS44244_2CCMuqmNwiHf6yIlzCWtaYEAQUrMhgIZpDj0O4kJCNglFdjlCe?input=https:%2F%2Fwww.hotspotshield.com%2F).

[OONI tests](https://ooni.org/nettest/vanilla-tor/) revealed [blocking of the Tor network](https://explorer.ooni.org/measurement/20170808T004237Z_AS197207_yysdxIa15WjQ3pQFt9RLxQc2lRzWFlxQKoQXd6846BUbEYw5gr)
in many networks across Iran. Some [Tor bridges](https://bridges.torproject.org/), used to circumvent the
blocking of the Tor network, remained [partially accessible](https://explorer.ooni.org/measurement/20160528T070123Z_AS16322_LQ1A8Q54Eo6AjvRcmc7dZ0432UzXrIXoeGQF1yYwQZQKG23Xjw?input=obfs4%20154.35.22.9:80%20C73ADBAC8ADFDBF0FC0F3F4E8091C0107D093716%20cert%3DgEGKc5WN%2FbSjFa6UkG9hOcft1tuK%2BcV8hbZ0H6cqXiMPLqSbCh2Q3PHe5OOr6oMVORhoJA%20iat-mode%3D0).

Facebook Messenger was [blocked using DNS manipulation](https://explorer.ooni.org/measurement/20170904T004807Z_AS44244_hTmlTpcncdzFBKkjI00ChqyuDLbFTz4GtokG7GBvQtcT9VYfhY).
In contrast, other popular communications apps, like [WhatsApp](https://explorer.ooni.org/measurement/20170904T004754Z_AS44244_lA7TEcxLjUjRrmWzukWJutJYqys9SEvjtlgycprFuG7BIGzglY)
and [Telegram](https://explorer.ooni.org/measurement/20170919T004801Z_AS16322_EFsshM60wHNs9A1szSICKi6GynpY0iNzvU9O7wHKHaJJHv9puM),
were accessible during the testing period.

**Internet censorship in Iran is quite sophisticated.** ISPs regularly
block both the HTTP and HTTPS versions of sites by serving blockpages
through DNS injection and through the use of HTTP transparent proxies.
Most ISPs not only block the same sites, but also use a standardized set
of censorship techniques, suggesting a centralized censorship apparatus.

**Internet censorship in Iran is non-deterministic.** Many observations
flipped between blocking and unblocking sites over time, possibly in an
attempt to make the censorship more subtle.

The government isn’t the only source of censorship in Iran.
[Norton](https://explorer.ooni.org/measurement/20170830T070124Z_AS197207_dK5xbieFUtWkyymCiN2txZbuH1crqFIals0EAmzSSsymcfMrfm?input=https:%2F%2Fnorton.com%2F)
and [GraphicRiver](https://explorer.ooni.org/measurement/20170903T021755Z_AS16322_m8gKgQgZdu7o7GVe6tZYagB9DVjNLGrzrkUCzWAijzwf5rBQbv?input=http:%2F%2Fgraphicriver.net%2F)
are examples of services inaccessible in the country because they block
IP addresses originating from Iran, in compliance with [U.S. export laws and regulations](https://dns.norton.com/terms.html). Virus Total,
which uses Google App Engine (GAE), was likewise [inaccessible](https://explorer.ooni.org/measurement/20170612T031742Z_AS16322_Gg0hUk9p5DTeHdBDj0jy7vywseo6RK4JgfPt4CtRgHEgZvKsHl?input=https:%2F%2Fwww.virustotal.com)
because Google blocks access to GAE from Iran.

# Introduction

This study is part of an ongoing effort to monitor internet censorship
in Iran and in [more than 200 other countries](https://explorer.ooni.org/world/) around the
world.

This research report, written by the [Open Observatory of Network Interference (OONI)](https://ooni.org/) in collaboration
with [ASL19](https://asl19.org/), [ARTICLE 19](https://www.article19.org/), and [Small Media](https://smallmedia.org.uk/), presents censorship findings from
the analysis of [thousands of network measurements](https://explorer.ooni.org/country/IR)
collected from 60 networks in Iran over the last three years.

The aim of this study is to increase the transparency of information
controls in Iran through the interpretation of empirical
[data](https://api.ooni.io/files/by_country/IR).

The following sections of this report provide information about Iran’s
network landscape and internet use, its legal environment with respect
to freedom of expression, as well as about cases of censorship that have
previously been reported in the country. The remainder of the report
documents the methodology and key findings of this study.

# Background

## Network landscape

Iran’s internet landscape is characterised by an infrastructure of
control (see page 8-10 of the Open Net Initiative’s (ONI) [After the Green Movement](https://opennet.net/sites/opennet.net/files/iranreport.pdf)
report). The very nature of how Iran connects to the world wide web is
enwrapped in the Islamic Republic’s core institutions.

Internet gateways into Iran are managed by the Telecommunication
Infrastructure Company (TIC) which maintains a monopoly, and is managed
by the Ministry of Information Communications and Technology. The TCI
also owns the Data Communication Company of Iran (DCI), which is the
main ISP of the country. Of greatest concern within this infrastructure
(visualized in the infographic from ONI below) is the fact that a
consortium of private businesses owned by the paramilitary institution
of the [Revolutionary Guards](https://en.wikipedia.org/wiki/Islamic_Revolutionary_Guard_Corps)
(known for their arrests, surveillance, and repression of human rights
defenders, journalists, bloggers, and internet users exercising their
rights to freedom of expression online) owns about 50% of the shares of
the Telecommunications Company of Iran (which operates the TIC) when the
government attempted to privatize it in 2007.

![Infrastructure landscape](/post/iran/ir-infrastructure.png)

Source: [After the Green Movement: Internet Controls in Iran, 2009-2012](https://opennet.net/sites/opennet.net/files/iranreport.pdf),
OpenNet Initiative

This is of great concern as the Revolutionary Guards effectively yield
significant influence over the company that routes all the internet
traffic through the country. As ONI
[wrote](https://opennet.net/sites/opennet.net/files/iranreport.pdf) in
2013, “This single point of connection makes it easy for the government
to control the Internet and effectively filter it either by blocking
webpages or blacklisting keywords.”

Below we include some
[observations](https://send.firefox.com/download/0e64a94242/#X5VeTYuwC6Y9aK3SHdmbhA)
on Iran’s ASN infrastructure based on BGP interactions data from
[RIPE](https://www.ripe.net/) and
[CAIDA](http://www.caida.org/home/).

The following ASes on the border of Iran's network to rest of the world,
with the first two controlling more than 90% of the connections.

* AS48159 - Telecommunication Infrastructure Company

* AS12880 - Information Technology Company (ITC)

* AS203100 - Iman Samaneh Sepehr LLC

* AS62229 - Fars News Agency Cultural Arts Institute

* AS39200 - Research Center of Theoretical Physics & Mathematics (IPM)

* AS58262 - Nrp Network LLC

* AS44932 - Fannavaran-e Idea Pardaz-e Saba PJSC

* AS31732 - PARSUN NETWORK SOLUTIONS PTY LTD

* AS6736 - Research Center of Theoretical Physics & Mathematics (IPM)

The above ASes are connected to:

* AS1299 - TELIANET - Sweden

* AS24940 - HETZNER - Germany

* AS29049 - Delta Telecom - Azerbaijan

* AS200612 - Gulf Bridge International - UAE

* AS6453 - Tata Communications - US

* AS34984 - Super Online - Turkey

* AS1273 - Vodafone Group PLC - UK

* AS6762 - Telecom Italia Sparkle S.p.A. - Italy

* AS3491 - Beyond The Network America, Inc. US

* AS15412 - Flag Telecom Global Internet - UK

* AS8529 - Omatel - Oman

* AS4436 - nLayer Communications - US

* AS3257 - GTT Communications Inc. - Germany

* AS33891 - Core Backbone - Germany

* AS12212 - Ravand Cybertech Inc. - Canada

* AS59456 - Cloud Brokers IT Services GmbH - Austria

* AS42926 - Radore Veri Merkezi Hizmetleri- Turkey

* AS60068 - Datacamp Limited - CDN77 - UK

The following ASes are acting like an internal hub with more ASes
connected to them but don't have direct connection to international
networks.

* AS51074 - GOSTARESH-E-ERTEBATAT-E MABNA COMPANY (Private Joint Stock)

* AS24631 - Tose'h Fanavari Ertebabat Pasargad Arian Co. PJS

* AS12880 - Information Technology Company (ITC)

* AS44889 - Farhang Azma Communications Company LTD

* AS41881 - Fanava Group

* AS59587 - PJSC "Fars Telecommunication Company"

The following International ASes import BGP data from Iran's ASes.

* AS198398 - Symphony Solutions FZ-LLC - UAE

* AS131284 - Etisalat Afghan - Afghanistan

* AS45178 - Roshan AF - Afganistan

* AS55330 - Afghanistan Government Communication Network - Afghanistan

* AS41152 - Ertebatat Faragostar Sharg Company, PVT. - UAE

* AS36344 - Advan Technologies LLC - US

* AS25152 - RIPE NCC - Netherlands

* AS3177 - Visparad Web Hosting Services LLC - EU

* AS47823 - Mohammad Moghaddas - Germany

The above international ASes are connected to the following ASes.

* AS16322 - Pars Online PJS

* AS48159 - Telecommunication Infrastructure Company

* AS25184 - Afranet

* AS43754 - Asiatech Data Transfer Inc PLC

* AS42337 - Respina Networks & Beyond PJSC

* AS31549 - Aria Shatel Company Ltd

Research on Iran’s network infrastructure has revealed the presence of a
“[hidden internet](https://arxiv.org/abs/1209.6398)”, with private IP
addresses allocated on the country’s national network.
Telecommunications entities were found to allow private addresses to
route domestically, whether intentionally or unintentionally, creating a
hidden network only reachable within Iran. Moreover, the research found
that records such as DNS entries suggest that servers are assigned both
domestic IP addresses and global ones.

## Internet use 

According to recent statistics
[published](http://www.isna.ir/news/96062816523/%D8%AC%D8%AF%DB%8C%D8%AF%D8%AA%D8%B1%DB%8C%D9%86-%D8%A2%D9%85%D8%A7%D8%B1-%D8%A7%D8%B2-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%A7%D9%86-%D8%A7%DB%8C%D9%86%D8%AA%D8%B1%D9%86%D8%AA-%D9%87%D9%85%D8%B1%D8%A7%D9%87-%D8%AF%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86)
in May 2017 by the Ministry of Communications and Information Technology
(ICT) , the total number of fixed broadband users in Iran summed up to
10 million users, and the total number of mobile-broadband users summed
up to 41 million users.

[ASL19](https://asl19.org/) conducted a survey in December 2016 with a
total sample size of 3,147, including 304 female and 2720 male
participants. Regarding internet usage, survey participants were asked
how frequently they use the internet for different activities. More than
10% of participants reported that they use the internet more than a few
times a day for online education and more than 32% for email and
communications. More than 31% of participants said that they use the
internet a few times a day for work and over 47% said that they use it a
few times a day for reading the news online. ASL19’s survey also asked
participants how frequently they use different social media platforms.
More than 85% of participants said that they use Telegram more than a
few times a day. Almost 6% said they use Facebook, over 8% use Twitter
and 46% said they use Instagram daily.

[TechRasa’s recent survey](http://techrasa.com/2017/06/18/infographic-state-internet-social-media-usage-iran/)
included 3,707 Iranians between the ages of 18 to 65, with 2,829 men and
878 women. According to their survey, 80% of participants have an
account on Telegram and 50% have an account on Instagram. 20% of
participants reported that they have an account on Facebook, even though
it is
[blocked](http://america.aljazeera.com/opinions/2014/4/iran-twitter-rouhaniinternetcensorship.html)
in Iran. As for the frequency of use of social media and messaging apps,
participants reported that they use Telegram the most (80%), while
Instagram is used more than 40%, Facebook over 10% and Twitter more than
5% as frequently.

## Legal environment

This section explores the Iranian laws pertaining to freedom of
expression and the press, via an analysis of three key legal documents:
[the Constitution of the Islamic Republic of Iran](http://www.iranhrdc.org/english/human-rights-documents/iranian-codes/3017-the-constitution-of-the-islamic-republic-of-iran.html),
the [Press Law](http://www.iranhrdc.org/english/human-rights-documents/iranian-codes/3201-the-press-law.html),
[the Penal Code](http://www.iranhrdc.org/english/human-rights-documents/iranian-codes/1000000455-english-translation-of-books-1-and-2-of-the-new-islamic-penal-code.html),
[Computer Crimes Law](https://www.article19.org/data/files/medialibrary/2921/12-01-30-FINAL-iran-WEB%5B4%5D.pdf).
Additionally, the erosion of freedom of expression can be seen through
the institutionalisation of censorship bodies. Overall, legal
protections for freedom of expression and the press are somewhat
ambiguous: rights are formally enumerated, while the opportunities in
which they may be exercised are restricted. To unpack this tension, we
turn to a few key passages from the Iranian constitution.

**The 1979 Constitution of Iran** protects the rights to free
expression, peaceful assembly and association in Articles 24, 26, and 27
respectively, but also permits these rights to be curtailed in
circumstances not compatible with the ICCPR. These include very vague
terms that are not defined, enabling arbitrary restrictions on the
exercise of these rights:

* Freedom of expression can be restricted if it is found to be
“detrimental to the fundamental principles of Islam or the rights
of the public” (Articles 20 and 24);

* Article 40 prohibits the exercise of constitutional rights in a
manner deemed to be “injurious to others” or “detrimental to
public interests”;

* The preamble of the Constitution specifies that the media must
“strictly refrain from diffusion and propagation of destructive
and anti-Islamic practices”.

**The Penal Code (IPC)** contains broad provisions criminalising
expression that are against international human rights law; including
criminal insult (see [Book Five, Articles 513, 514, 515, 517, 609](http://www.iranhrdc.org/english/human-rights-documents/iranian-codes/1000000351-islamic-penal-code-of-the-islamic-republic-of-iran-book-five.html))
and blasphemy provisions (see [Book Two, Part 2, Chapter 5](http://www.iranhrdc.org/english/human-rights-documents/iranian-codes/1000000351-islamic-penal-code-of-the-islamic-republic-of-iran-book-five.html)),
criminalisation of disseminating ‘propaganda against the State’ ([Book One, Article 286](http://www.iranhrdc.org/english/human-rights-documents/iranian-codes/1000000455-english-translation-of-books-1-and-2-of-the-new-islamic-penal-code.html#34)),
spreading false rumours, lies, and creating “anxiety and unease in the
public’s mind” ([Book One, Article 286](http://www.iranhrdc.org/english/human-rights-documents/iranian-codes/1000000455-english-translation-of-books-1-and-2-of-the-new-islamic-penal-code.html#34)).
Penalties include prison sentences (ranging from 3 months to 5 years),
flogging, and even death. Together with other vague and overbroad
provisions, such as “acting against national security”, “membership in
an illegal organization”, and “participation in an illegal gathering”
([Book Five, Article 502, 505, 507, 510, 511, 512](http://www.iranhrdc.org/english/human-rights-documents/iranian-codes/1000000455-english-translation-of-books-1-and-2-of-the-new-islamic-penal-code.html#34))
these provisions are arbitrarily interpreted to criminalise journalists,
bloggers, human rights defenders and minority groups as well as others
legitimately exercising their rights.

**The Press Law:** Article 24 of the Constitution protects press
freedom, but not for media deemed “detrimental to the fundamental
principles of Islam or the rights of the public”. Combined with the
repressive Press Law, severe restrictions on media freedom remain the
norm (read more about the Press Law
[here](http://irandataportal.syr.edu/press-law)).

Examples of problematic provisions of the Press Law include:

* Article 2 requires the press to pursue at least one of five
“legitimate objectives”, which include “to campaign against
manifestations of imperialistic culture” and “to propagate and
promote genuine Islamic culture and sound ethical principles”;

* Articles 6 prohibits the publishing of an exceptionally broad
spectrum of content including atheistic articles, those
prejudicial to Islamic codes, insulting Islam and/or its
sanctities, offending senior Islamic jurists, those quoting
articles from the “deviant press” or groups which are seen as
opposing Islam, or any publication deemed contradictory to the
Constitution;

In October 2016, President Rouhani’s administration proposed a
[new bill](https://www.iranhumanrights.org/2016/10/hassan-rouhani-government-bills-to-restrict-media/)
(the ‘Comprehensive Mass Media Regulation’) to replace the current Press
Law that will impose greater restrictions on media freedom. If
introduced, the bill raises concerns as it gives more leeway to judges
and prosecutors to determine whether an offence has been committed,
thereby facilitating the politically motivated judicial harassment of
journalists and newspapers both offline and online.

**The Computer Crimes Law:** Adopted by the Parliament in January 2010,
the Computer Crimes Law is saturated with provisions that criminalise
legitimate expression in the digital space, including draconian
content-based restrictions designed to allow the State to exert
unfettered control in the sphere where its authority is most frequently
challenged.

Among the content-based restrictions targeting online expression are the
offences against “public morality and chastity” (Articles 14 and 15) and
the “dissemination of lies” (Articles 16 – 18) that are engineered to
ensnare all forms of legitimate expression. These include broad
defamation and obscenity provisions that are antithetical to the right
of freedom of expression. Essential elements of offenses are described
with ambiguity and in vague and overbroad terms, giving the government
unfettered discretion to pursue its own prerogatives above the interests
of the public and the standards set by the international human rights
law.

The Computer Crimes Law mandates severe sentences that penalise
legitimate expression and offend the principle of proportionality,
without defences for individuals acting in the public interest. The
availability of the death penalty (Article 14) for crimes committed
online against public morality and chastity is particularly abhorrent.
Other sanctions include lengthy custodial sentences (Articles 14, 16, 18
and 27), excessive fines (Articles 1, 2, 3, 14, 16, 18 and 21), and
judicial orders to close organisations (Article 20) and ban individuals
from using electronic communications (Article 27). These penalties also
apply to Internet Service Providers that fail to enforce content-based
restrictions (Articles 21 and 23), incentivising the private sector to
promulgate Iran’s censorship culture.

**The institutionalisation of online censorship:** A number of
regulatory bodies with extremely opaque structures have been founded
since 2009 with mandates to restrict access to and use of the internet.
These bodies can be divided into three tiers: the first constituting
high-level policymaking councils; the second made up of executive
decision-making bodies; and the third including a range of enforcement
agencies.

**Policymaking:** The principal policymaking body is the Supreme Council
on Cyberspace (SCC), which develops Iran’s domestic and international
cyber policies, with members including Iran’s President and the Head of
the Judiciary. This council is overseen by the Supreme Cultural
Revolution Council (SCRC) which was set up in 1980, and the Supreme
Leader is only person who can overrule their decisions. The SCRC is
dominated by Islamic fundamentalists, based in the city of [Qom](http://en.wikipedia.org/wiki/Qom),
and made up of the clerical elites making strategic decisions
influencing the Supreme Leader. The [President of Iran](http://en.wikipedia.org/wiki/President_of_Iran) is the ex-officio
chairman of the Council.

**Executive decision-making bodies:** This tier includes executive
decision-making bodies such as the Committee Charged with Determining
Offensive Content (CCDOC), and the Ministry of Information and Cultural
Guidance (MICG).

The CCDOC identifies sites that carry prohibited content, communicates
the standards to be used in identifying unauthorised websites to the
Telecommunication Company of Iran (TCI), other major ISPs and the
Ministry of Communication and Information Technology and makes website
blocking decisions. The public may ask the CCDOC to block or unblock a
website via an online request form. The final decision will be made by
the Committee. The precise number of blocked websites in Iran is not
publicly available.

In January 2010, the CCDOC issued a “list of Internet offences” which
would lead up to blocking a website. The list is very long and targets a
wide range of areas, including anything that is contrary to “the public
morals and chastity,” “religious values” and “security and social
peace,” and anything that is “hostile towards government officials and
institutions” or which “facilitates the commission of a crime,”
including circumventing censorship or bypassing filtering systems. It
also lists “criminal content in relation to parliamentary and
presidential elections”.

The CCDOC is not independent of the Government but is an arm of the
Executive. It is headed by the Prosecutor General, and its other members
are representatives from 12 governmental bodies. Key members include the
Chief of Police and representatives of the Ministries of: Intelligence;
Islamic Guidance; and Communication and Information Technology.
International standards require that the determination of what content
should be blocked should only be undertaken by a competent judicial
authority or body which is independent of political, commercial or other
unwarranted influences to ensure that blocking is not used as a means of
censorship.

The SCC and the CCDOC also have seven members in common, which allows
for policy diffusion and institutional alignment.

**Enforcement agencies:** A number of enforcement agencies are
responsible for taking action against offenders. Iran’s Cyber Police
unit (FATA), tasked with fighting “digital criminals”, is the most
notorious. In the chain of command of internet censorship in Iran, FATA
is the policing body that acts on information provided by the SCC and
CCDOC.

**Summary**

The Iranian Government has developed a centralised system for internet
filtering, created institutions tasked with monitoring Internet use and
censorship of content, engaged the Revolutionary Guard Corps in
enforcing Internet content standards, and entrenched many of these
practices through legislation in the Computer Crimes Law. While certain
rights to freedom of expression are held within the Iranian
constitution, a number of provisions within both the constitution, the
penal code, and the press laws aim to restrict these values based on
vague and often arbitrary principles meant to shield ‘Islam’ or
‘national security’, with very little regard to proportionality.

## Reported cases of internet censorship

Iran’s censorship system is one of the most sophisticated in the world.
Over the years, since the introduction of the internet in Iran, the
government has employed different methods to censor it and its
censorship methods have progressively become more complicated. Here we
present a list summarizing the methods that have been employed so far
mainly based on literature review done by [TAAP16](https://censorbib.nymity.ch/pdf/Tschantz2016a.pdf) and [AAH13](https://www.usenix.org/system/files/conference/foci13/foci13-aryan.pdf).

Originally the government delegate the task of censorship to the ISPs to
deploy a IP and keyword based censorship system, moving to a hybrid of
central/ISP based system and eventually after 2009 moving to a central
censorship system. With the popularity of servers hosting multiple sites
and the introduction of CDNs, it moves away from blocking IPs and relies
on censoring host names in HTTP or SNI requests. It also uses throttling
via packet dropping to deter people from services which host a mix of
undesirable and benign content such as Amazon S3 services.

While maintaining mainly a blacklist system, censorship has been more
aggressive during politically sensitive occasions, such as days leading
to organized protests or elections, and engaged in protocol blacklisting
or even white listing. In 2012, for brief period of time, Iran blocked
TLS protocols by identifying the TLS handshake. During the months
leading up to the 2013 presidential election, the censor first throttled
encryption protocols, such as TLS and SSH. During the days leading up to
the election, the censor only whitelisted HTTP protocol and throttled
any other (known or unknown protocol) to the level of dropping after 60
seconds.

Iran also targets censorship circumvention tools. [Tor connections](https://www.torproject.org/), for example, have been
blocked by various methods, including the blocking of the Tor directory
authorities, identifying the DH prime used in Tor TLS handshake,
singling out the TLS certificate validity length etc. Iranian ISPs have
also actively participated in Psiphon client-server negotiation protocol
for receiving new proxy IP addresses and effectively blocking Psiphon's
proxies. A new law by the Supreme Council of Cyberspace (SCC) entitled
“Policies and Actions Organizing Social Media Messaging Applications”
(see Article 19’s translation on page 13
[here](https://www.article19.org/data/files/medialibrary/38874/Tightening-the-Net_3-English-version.pdf)),
created a new legal framework to coerce controls online in the absence
of technical censorship capabilities.

Recent efforts that have been tracked by researchers have followed the
technical and policy implications of the “intelligent filtering”
project. The project was initiated under the Ahmadinejad government with
the intention to unblock a number of currently censored platforms such
as Facebook and Twitter through targeted censorship. However, because of
the difficulties of HTTPS blocking, the project only experienced
technical implementation through Instagram.
[Investigations](https://advox.globalvoices.org/2015/05/07/new-research-iran-is-using-intelligent-censorship-on-instagram/)
into the content and type of blocking by Frederic Jacobs and Mahsa
Alimardani eventually led to Instagram enabling HTTPS on its mobile
application (previously only available on the web browser) in order to
limit this type of targeted censorship.

Following the initiation of Instagram encryption across both web based
and mobile application based access, there were some cases of select
images not being accessed in Iran. Preliminary investigations by the
[University of Amsterdam’s Digital Methods Initiative](https://wiki.digitalmethods.net/Dmi/ExploringInformationControlsByIranOnInstagram)
indicated this to be collateral damage from Content Delivery Networks
(CDN) that Instagram shared with it’s parent company, Facebook, which is
blocked in Iran. As of February 2016 however, the government has
[announced](https://www.iranhumanrights.org/2016/02/iran-will-spend-36m-on-smart-filtering/)
they are devoting \$36 million USD to the development of “intelligent
filtering.” According to the New York based human rights NGO [Campaign for Human Rights in Iran](https://www.iranhumanrights.org/2016/02/iran-will-spend-36m-on-smart-filtering/)
(CHRI) there is very “little likelihood of smart filtering capabilities
inside of Iran.”

While technical capabilities for Iranian censorship do not extend beyond
entire platform blocks, Iran’s strongest tactics have been in account
seizures and in attempting to incentivize companies to cooperate with
them. For Telegram, for example, the foremost messaging and social media
application for Iranian users, with over 40 million monthly users
(statistic is from Telegram founder [Pavel Durov](https://twitter.com/durov/status/854472773137256448?lang=en)),
the government has been able to [physically takeover certain accounts](https://www.article19.org/resources.php/resource/38678/en/iran:-arrests-and-intimidation-of-telegram-administrators-and-journalists-ahead-of-the-elections)
through arrests and detentions of the administrators running Telegram
channels. The government has also worked to institutionalize incentives
for platforms such as Telegram to cooperate with the government, as
opposed to implementing technical means to control them. An unsuccessful
ultimatum to all foreign technology companies was given in 2016, which
gave a year to applications such as Telegram to either comply with
authorities, and bring all data for Iranian users into the country (with
possibly government oversight) or face censorship.

# Methodology: Measuring internet censorship in Iran

The results of this study are based on a three phase process:

* Review of the [Citizen Lab’s test list for Iran](https://github.com/citizenlab/test-lists/blob/master/lists/ir.csv)

* OONI network measurement testing

* Data analysis

A list of URLs that are relevant and commonly accessed in Iran was
created by the Citizen Lab in 2014 for the purpose of enabling network
measurement researchers to examine accessibility in Iran. As part of
this study, this list of URLs was revised and extended to include
additional URLs. These, along with [other URLs](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)
that are commonly accessed around the world, were tested for blocking
using [OONI’s free software tests](https://github.com/TheTorProject/ooni-probe). Tests were run
from local vantage points across Iran. Using the network measurement
data that was collected from these tests, researchers processed and
analyzed this report using a standard set of heuristics for detecting
internet censorship and traffic manipulation.

This study analyzes network measurement data collected from Iran between
22nd September 2014 to 4th September 2017.

## Review of the Citizen Lab’s test list for Iran

An important part of identifying censorship is determining *which*
websites to examine for blocking.

OONI’s [software](https://github.com/TheTorProject/ooni-probe) (called
*OONI Probe*) is designed to examine URLs contained in specific lists
(“test lists”) for censorship. By default, OONI Probe examines the
“[global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)”,
which includes a wide range of internationally relevant websites, most
of which are in English. These websites fall under [30 categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv),
ranging from news media, file sharing and culture, to provocative or
objectionable categories, like pornography, political criticism, and
hate speech.

These categories ensure that a wide range of different types of websites
are tested. The main reason why objectionable categories (such as
“pornography” and “hate speech”) are included for testing is because
they are more likely to be blocked due to their nature, enabling the
development of heuristics for detecting censorship elsewhere within a
country.

In addition to testing the URLs included in the global test list,
OONI Probe is also designed to examine a test list which is specifically
created for the country that the user is running OONI Probe from, if such
a list exists. Unlike the global test list, [country-specific test lists](https://github.com/citizenlab/test-lists/tree/master/lists)
include websites that are relevant and commonly accessed within specific
countries, often in local languages. Like the global test list,
country-specific test lists are divided into [30 categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv).

All test lists are managed by the [Citizen Lab](https://citizenlab.org/) on
[GitHub](https://github.com/citizenlab/test-lists). As part of this
study, OONI reviewed the Citizen Lab’s [test list for Iran](https://github.com/citizenlab/test-lists/blob/master/lists/ir.csv),adding
additional URLs, and updating categorization. Overall, [894 URLs](https://github.com/citizenlab/test-lists/blob/master/lists/ir.csv)
that are relevant to Iran were tested as part of this study. The URLs
included in the Citizen Lab’s [global list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)
(1,107 unique URLs) were also tested.

It is important to acknowledge that the findings of this study are
limited to the websites that were tested, and do not provide a complete
view of other censorship events that may have occurred during the
testing period.

## OONI network measurement testing

Since 2012, OONI has developed multiple [free and open source software tests](https://github.com/TheTorProject/ooni-probe) designed to
measure the following:

* [Blocking of websites](https://ooni.org/nettest/web-connectivity/);

* Blocking of the [Tor network](https://ooni.org/nettest/vanilla-tor/) and [Tor bridges](https://ooni.org/nettest/tor-bridge-reachability/);

* Blocking of instant messaging apps ([WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/));

* [Detection of systems (“middleboxes”)](https://ooni.org/nettest/http-invalid-request-line/) which could be responsible for censorship and surveillance;

* [Speed and performance](https://ooni.org/nettest/ndt/) of networks.

As part of this study, the following [OONI software tests](https://github.com/TheTorProject/ooni-probe) were run in Iran:

* [Web Connectivity](https://ooni.org/nettest/web-connectivity/)

* [HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/)

* [HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/)

* [Vanilla Tor](https://ooni.org/nettest/vanilla-tor/)

* [WhatsApp](https://ooni.org/nettest/whatsapp/) test

* [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/) test

* [Telegram](https://ooni.org/nettest/telegram/) test

The Web Connectivity test checks whether a set of URLs (including both
the “[global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)”
and the recently updated “[Iranian test list](https://github.com/citizenlab/test-lists/blob/master/lists/ir.csv)”)
were blocked during the testing period and if so, how. The Vanilla Tor
test was run to examine the reachability of the [Tor network](https://www.torproject.org/), while the WhatsApp, Facebook
Messenger and Telegram tests were run to examine whether these instant
messaging apps were blocked in Iran during the testing period. The
remaining tests check whether “middleboxes” (systems placed in the
network between the user and a control server) that could potentially be
responsible for censorship and/or surveillance were present in the
tested networks.

The sections below document how each of these tests measure internet
censorship and traffic manipulation.

### Web Connectivity test

This
[test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/web_connectivity.py)
examines whether websites are reachable and if they are not, it attempts
to determine whether access to them is blocked through DNS tampering,
TCP/IP blocking or by a transparent HTTP proxy. Specifically, this test
is designed to perform the following:

* Resolver identification

* DNS lookup

* TCP connect

* HTTP GET request

By default, this test performs the above (excluding the first step,
which is performed only over the network of the user) both over a
control server and over the network of the user. If the results from
both networks match, then there is no clear sign of network
interference; but if the results are different, the websites that the
user is testing are likely censored.

Further information is provided below, explaining how each step
performed under the web connectivity test works.

**1. Resolver identification**

The domain name system (DNS) is what is responsible for transforming a
host name (e.g. torproject.org) into an IP address (e.g. 38.229.72.16).
Internet Service Providers (ISPs), amongst others, run DNS resolvers
which map IP addresses to hostnames. In some circumstances though, ISPs
map the requested host names to the wrong IP addresses, which is a form
of tampering.

As a first step, the web connectivity test attempts to identify which
DNS resolver is being used by the user. It does so by performing a DNS
query to special domains (such as whoami.akamai.com) which will disclose
the IP address of the resolver.

**2. DNS lookup**

Once the web connectivity test has identified the DNS resolver of the
user, it then attempts to identify which addresses are mapped to the
tested host names by the resolver. It does so by performing a DNS
lookup, which asks the resolver to disclose which IP addresses are
mapped to the tested host names, as well as which other host names are
linked to the tested host names under DNS queries.

**3. TCP connect**

The web connectivity test will then try to connect to the tested
websites by attempting to establish a TCP session on port 80 (or port
443 for URLs that begin with HTTPS) for the list of IP addresses that
were identified in the previous step (DNS lookup).

**4. HTTP GET request**

As the web connectivity test connects to tested websites (through the
previous step), it sends requests through the HTTP protocol to the
servers which are hosting those websites. A server normally responds to
an HTTP GET request with the content of the webpage that is requested.

**Comparison of results: Identifying censorship**

Once the above steps of the web connectivity test are performed *both*
over a control server and over the network of the user, the collected
results are then compared with the aim of identifying whether and how
tested websites are tampered with. If the compared results do *not*
match, then there is a sign of network interference.

Below are the conditions under which the following types of blocking are
identified:

* **DNS blocking:** If the DNS responses (such as the IP addresses mapped to host names) do *not* match.

* **TCP/IP blocking:** If a TCP session to connect to websites was *not* established over the network of the user.

* **HTTP blocking:** If the HTTP request over the user’s network failed, or the HTTP status codes don’t match, or all of the following apply:

    * The body length of compared websites (over the control server
    and the network of the user) differs by some percentage

    * The HTTP headers names do not match

    * The HTML title tags do not match

It’s important to note, however, that DNS resolvers, such as Google or a
local ISP, often provide users with IP addresses that are closest to
them geographically. Often this is *not* done with the intent of network
tampering, but merely for the purpose of providing users with localized
content or faster access to websites. As a result, some false positives
might arise in OONI measurements. Other false positives might occur when
tested websites serve different content depending on the country that
the user is connecting from, or in the cases when websites return
failures even though they are not tampered with.

### HTTP Invalid Request Line test

This
[test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/manipulation/http_invalid_request_line.py)
tries to detect the presence of network components (“middle box”) which
could be responsible for censorship and/or traffic manipulation.

Instead of sending a normal HTTP request, this test sends an invalid
HTTP request line - containing an invalid HTTP version number, an
invalid field count and a huge request method – to an echo service
listening on the standard HTTP port. An echo service is a very useful
debugging and measurement tool, which simply sends back to the
originating source any data it receives. If a middle box is not present
in the network between the user and an echo service, then the echo
service will send the invalid HTTP request line back to the user,
exactly as it received it. In such cases, there is no visible traffic
manipulation in the tested network.

If, however, a middle box is present in the tested network, the invalid
HTTP request line will be intercepted by the middle box and this may
trigger an error and that will subsequently be sent back to OONI’s
server. Such errors indicate that software for traffic manipulation is
likely placed in the tested network, though it’s not always clear what
that software is. In some cases though, censorship and/or surveillance
vendors can be identified through the error messages in the received
HTTP response. Based on this technique, OONI has previously
[detected](https://explorer.ooni.org/highlights/) the use
of BlueCoat, Squid and Privoxy proxy technologies in networks across
multiple countries around the world.

It’s important though to note that a false negative could potentially
occur in the hypothetical instance that ISPs are using highly
sophisticated censorship and/or surveillance software that is
specifically designed to not trigger errors when receiving invalid HTTP
request lines like the ones of this test. Furthermore, the presence of a
middle box is not necessarily indicative of traffic manipulation, as
they are often used in networks for caching purposes.

### HTTP Header Field Manipulation test

This
[test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/manipulation/http_header_field_manipulation.py)
also tries to detect the presence of network components (“middle box”)
which could be responsible for censorship and/or traffic manipulation.

HTTP is a protocol which transfers or exchanges data across the
internet. It does so by handling a client’s request to connect to a
server, and a server’s response to a client’s request. Every time a user
connects to a server, the user (client) sends a request through the HTTP
protocol to that server. Such requests include “HTTP headers”, which
transmit various types of information, including the user’s device
operating system and the type of browser that is being used. If Firefox
is used on Windows, for example, the “user agent header” in the HTTP
request will tell the server that a Firefox browser is being used on a
Windows operating system.

This test emulates an HTTP request towards a server, but sends HTTP
headers that have variations in capitalization. In other words, this
test sends HTTP requests which include valid, but non-canonical HTTP
headers. Such requests are sent to a backend control server which sends
back any data it receives. If OONI receives the HTTP headers exactly as
they were sent, then there is no visible presence of a “middle box” in
the network that could be responsible for censorship, surveillance
and/or traffic manipulation. If, however, such software is present in
the tested network, it will likely normalize the invalid headers that
are sent or add extra headers.

Depending on whether the HTTP headers that are sent and received from a
backend control server are the same or not, OONI is able to evaluate
whether software – which could be responsible for traffic manipulation –
is present in the tested network.

False negatives, however, could potentially occur in the hypothetical
instance that ISPs are using highly sophisticated software that is
specifically designed to not interfere with HTTP headers when it
receives them. Furthermore, the presence of a middle box is not
necessarily indicative of traffic manipulation, as they are often used
in networks for caching purposes.

### Vanilla Tor test

This
[test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/vanilla_tor.py)
examines the reachability of the [*Tor
network*](https://www.torproject.org/), which is designed for online
anonymity and censorship circumvention.

The Vanilla Tor test attempts to start a connection to the Tor network.
If the test successfully bootstraps a connection within a predefined
amount of seconds (300 by default), then Tor is considered to be
reachable from the vantage point of the user. But if the test does not
manage to establish a connection, then the Tor network is likely blocked
within the tested network.

### WhatsApp test

This
[test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/whatsapp.py)
is designed to examine the reachability of both WhatsApp’s app and the
WhatsApp web version within a network.

OONI’s WhatsApp test attempts to perform an HTTP GET request, TCP
connection and DNS lookup to WhatsApp’s endpoints, registration service
and web version over the vantage point of the user. Based on this
methodology, WhatsApp’s *app* is likely blocked if any of the following
apply:

* TCP connections to WhatsApp’s endpoints fail;

* TCP connections to WhatsApp’s registration service fail;

* DNS lookups resolve to IP addresses that are *not* allocated to
WhatsApp;

* HTTP requests to WhatsApp’s registration service do *not* send back
a response to OONI’s servers.

WhatsApp’s web interface (web.whatsapp.com) is likely if any of the
following apply:

* TCP connections to web.whatsapp.com fail;

* DNS lookups illustrate that a different IP address has been
allocated to web.whatsapp.com;

* HTTP requests to web.whatsapp.com do *not* send back a consistent
response to OONI’s servers.

### Facebook Messenger test 

This
[test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/facebook_messenger.py)
is designed to examine the reachability of Facebook Messenger within a
tested network.

OONI’s Facebook Messenger test attempts to perform a TCP connection and
DNS lookup to Facebook’s endpoints over the vantage point of the user.
Based on this methodology, Facebook Messenger is likely blocked if one
or both of the following apply:

* TCP connections to Facebook’s endpoints fail;

* DNS lookups to domains associated to Facebook do *not* resolve to IP
addresses allocated to Facebook.

### Telegram test

This
[test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/telegram.py)
is designed to examine the reachability of Telegram’s app and web
version within a tested network.

More specifically, this test attempts to perform an HTTP POST request,
and establish a TCP connection to Telegram’s access points (DCs), as
well as an HTTP GET request to Telegram’s web version (web.telegram.org)
over the vantage point of the user. The test is triggered as blocking
when connections to *all* access points defined in the
[test](https://github.com/TheTorProject/ooni-probe/blob/master/ooni/nettests/blocking/telegram.py#L16-L22)
fail.

Based on this methodology Telegram’s *app* is likely blocked if any of
the following apply:

* TCP connections to all the tested Telegram access points fail

* HTTP POST requests to Telegram’s access points do *not* send back a
response to OONI’s servers.

Telegram’s *web version* is likely blocked if any of the following
apply:

* HTTP(S) GET requests to web.telegram.org do *not* send back a
consistent response to OONI’s servers.

## Data analysis

The OONI [data pipeline](https://github.com/TheTorProject/ooni-pipeline) processes
measurements, including the following types of data:

**Country code**

OONI by default records the country users are running OONI Probe tests
from, by automatically resolving the user’s IP address with the
[MaxMind GeoIP database](https://www.maxmind.com/en/home). The
collection of country codes is an important part of OONI’s research, as
they enable OONI to map out global network measurements and to identify
where network interference takes place.

**Autonomous System Number (ASN)**

OONI also collects the Autonomous System Number (ASN) which corresponds
to the network or ISP that a user is in. The collection of the ASN is
useful to OONI’s research because it reveals the specific network
provider (such as Vodafone) of a user. This information can increase
transparency in regards to which network providers are implementing
censorship or other forms of network interference.

**Date and time of measurements**

OONI by default collects the time and date of when tests were run. This
information helps OONI evaluate when network interferences occur and to
compare them across time.

**IP addresses and other information**

OONI does *not* deliberately collect or store users’ IP addresses. In
fact, OONI takes measures to remove users’ IP addresses from collected
measurements, to protect its users from [potential risks](https://ooni.org/about/risks/).

However, OONI might *unintentionally* collect users’ IP addresses and
other potentially personally-identifiable information, if that
information is included in the HTTP headers or other metadata of
measurements. This, for example, can occur if tested websites include
tracking technologies or custom content based on a user’s network
location.

**Network measurements**

The types of network measurements that OONI collects depend on the types
of tests that are run. Specifications about each OONI test can be viewed
through its [git repository](https://github.com/TheTorProject/ooni-spec/tree/master/test-specs),
and collected network measurements can be viewed through [OONI Explorer](https://explorer.ooni.org/world/) or through
OONI’s [measurement API](https://api.ooni.io/).

OONI processes reports with the aim of deriving meaning from data and,
specifically, to answer the following types of questions:

* Which types of OONI tests were run?

* In which countries were those tests run?

* In which networks were those tests run?

* When were tests run?

* What types of network interference occurred?

* In which countries did network interference occur?

* In which networks did network interference occur?

* When did network interference occur?

* How did network interference occur?

To answer these questions, OONI’s pipeline is designed to process data
which is automatically sent to OONI’s measurement collector. The initial
processing of network measurements enables the following:

* Attributing measurements to a specific country.

* Attributing measurements to a specific network within a country.

* Distinguishing measurements based on the specific tests that were
run for their collection.

* Distinguishing between “normal” and “anomalous” measurements (the
latter indicating that a form of network tampering is likely present).

* Identifying the type of network interference based on a set of
heuristics for DNS tampering, TCP/IP blocking, and HTTP blocking.

* Identifying block pages based on a set of heuristics for
HTTP blocking.

* Identifying the presence of “middleboxes” within tested networks.

However, false positives can emerge within the processed data due to a
number of reasons. As explained previously (section on “OONI network
measurements”), DNS resolvers (operated by Google or a local ISP) often
provide users with IP addresses that are closest to them geographically.
While this may appear to be a case of DNS tampering, it is actually done
with the intention of providing users with faster access to websites.
Similarly, false positives may emerge when tested websites serve
different content depending on the country that the user is connecting
from, or in the cases when websites return failures even though they are
not tampered with.

Measurements indicating HTTP or TCP/IP blocking might actually be due to
temporary HTTP or TCP/IP failures, and may not conclusively indicate
network interference. It is therefore important to test the same
websites across time and to cross-correlate data, prior to concluding
that they are in fact being blocked.

Since block pages differ from country to country and sometimes even from
network to network, it can be challenging to accurately identify them.
OONI uses a series of heuristics to decide if a response differs from
the expected control, but these heuristics can fail. For this reason,
OONI only says that there is a confirmed instance of blocking when a
block page is positively detected.

OONI’s methodology for detecting the presence of “middleboxes” - systems
that could be responsible for censorship, surveillance and traffic
manipulation - can also present false negatives, if ISPs are using
highly sophisticated software that is specifically designed to *not*
interfere with HTTP headers when it receives them, or to *not* trigger
error messages when receiving invalid HTTP request lines. It remains
unclear though if such software is being used. Moreover, it’s important
to note that the presence of a middle box is not necessarily indicative
of censorship or traffic manipulation, as such systems are often used in
networks for caching purposes.

Upon collection of more network measurements, OONI continues to develop
its data analysis heuristics, based on which it attempts to accurately
identify censorship events.

# Findings

Thousands of network measurements
[collected](https://api.ooni.io/files/by_country/IR)
from 60 local networks over the last three years reveal *pervasive*
levels of internet censorship in Iran.

We confirm the **blocking of 886 unique domains** (and of 1,019 URLs in
total) due to the presence of block pages. Some Iranian ISPs served
block pages through DNS injection, while others used HTTP transparent
proxies to serve block pages.

Internet censorship in Iran does *not* appear to be deterministic. We
noticed that various ISPs would block sites inconsistently across time,
possibly creating public uncertainty on whether sites were in fact
blocked or not. As such, some of the blocked domains presented in this
study have been blocked and unblocked in various moments across time
over the last three years.

Most of the blocked domains include news outlets and human rights sites,
as illustrated in the graph below.

![Graph: Blocked domains in Iran](/post/iran/graph.png)

We have characterised the levels of internet censorship in Iran as
“pervasive” because we found a large portion of content falling under
many categories to be blocked. The above graph illustrates that internet
censorship in Iran is not restricted to illegal forms of content (such
as pornography, gambling, hate speech, alcohol and drugs), but also
extends to a broad range of other types of content, such as news
outlets, human rights sites, blogging platforms, online social networks,
communication tools, anonymity and censorship circumvention tools, and
search engines, amongst others.

Our tests examining the reachability of instant messaging apps revealed
the [DNS blocking of Facebook Messenger](https://explorer.ooni.org/measurement/20170829T024145Z_AS44244_PLe6uPURhuUA87xoPzzcFU69idfuiVs4jAEqj5E7r5i2BtK2cS)
in multiple networks across Iran.
[WhatsApp](https://explorer.ooni.org/measurement/20170904T030602Z_AS16322_Slr4QSUtTroYRQloYgIhatK1Jpwitgm0GWDuGtcJkaUUh4iQH7)
and
[Telegram](https://explorer.ooni.org/measurement/20170913T023324Z_AS16322_UhtHeecpvmOJOmggsdlet7q7KvUB6YP50R5rKOP6IOR7yVuUqC)
though were found to be accessible during the testing period. Other
[OONI tests](https://ooni.org/nettest/http-invalid-request-line/)
uncovered the [presence of middleboxes](https://explorer.ooni.org/measurement/20170831T234320Z_AS57218_XWI5W9PrsXjyLIAjt20vrePg4vh00YRa38Zv4UuIEE0bpeP2y3)
across many networks in Iran, which might be responsible for internet
censorship and traffic manipulation.

Circumventing internet censorship in Iran can be quite challenging. We
find that the domains of multiple popular circumvention tool sites (such
as
[anonymouse.org](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fanonymouse.org)
and
[psiphon.ca](https://explorer.ooni.org/measurement/20170831T224040Z_AS44244_V6FN6KBMd4mfh40FsyHOr23t38Zc8eWFDuAD1vo5vQbav0hmIj?input=https:%2F%2Fpsiphon.ca%2F))
are [blocked](https://explorer.ooni.org/country/IR). We
also find that the [Tor anonymity network](https://www.torproject.org/) is
[blocked](https://explorer.ooni.org/measurement/20170808T004237Z_AS197207_yysdxIa15WjQ3pQFt9RLxQc2lRzWFlxQKoQXd6846BUbEYw5gr)
in many networks, as revealed by [OONI’s test](https://ooni.org/nettest/vanilla-tor/) designed to
measure the reachability to the Tor network. Many Iranian ISPs block
both the HTTP and HTTPS versions of sites, while others even [block online translators](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fwww.systranbox.com)
as an additional method of limiting circumvention.

Therefore, internet censorship in Iran is not only pervasive in terms of
its breadth, but it is also in how it is implemented. The breadth and
scale of censorship also suggests a high level of surveillance, since
knowing what to block requires prior knowledge of what people are
accessing (or could be accessing).

The government is not the only source of internet censorship in Iran. We
found that
[Norton](https://explorer.ooni.org/measurement/20170830T070124Z_AS197207_dK5xbieFUtWkyymCiN2txZbuH1crqFIals0EAmzSSsymcfMrfm?input=https:%2F%2Fnorton.com%2F)
and
[GraphicRiver](https://explorer.ooni.org/measurement/20170830T070124Z_AS197207_dK5xbieFUtWkyymCiN2txZbuH1crqFIals0EAmzSSsymcfMrfm?input=http:%2F%2Fgraphicriver.net%2F)
are not accessible in Iran because the sites are blocking IP addresses
originating from Iran. [Virus Total was also found to be inaccessible](https://explorer.ooni.org/measurement/20170612T031742Z_AS16322_Gg0hUk9p5DTeHdBDj0jy7vywseo6RK4JgfPt4CtRgHEgZvKsHl?input=https:%2F%2Fwww.virustotal.com),
because it uses Google App Engine, access to which is blocked by Google.
These censorship cases appear to be due to U.S. export laws.

Below, we provide more information on *some* of the findings of this
study. We encourage researchers to explore the [published data](https://api.ooni.io/files/by_country/IR) for
additional analysis on interesting findings that we have not highlighted
in the following sections.

## Blocked domains and tools

The levels of internet censorship in Iran are pervasive since a variety
of different types of sites were [found to be blocked](/post/iran/ir-blocked-urls.csv), expanding beyond
those that host illegal content. Most of the blocked domains include
news outlets and human rights sites, though the [limited amount of sites tested](https://github.com/citizenlab/test-lists) and the bias in
their selection may have influenced this finding. In any case, a wide
range of sites, beyond those that are illegal, were found to be blocked
in the country.

Popular search engines, such as
[google.com](https://explorer.ooni.org/measurement/20170913T033941Z_AS44244_XWbJUSF7A1sEQXM6OyeVxUcXFkHlsSJ8WRc2q7nCBkBYDvjph0?input=http:%2F%2Fwww.google.com%2Fsearch%3Fhl%3Dar%26q%3DKoon%26btnG%3D%25D8%25A5%25D8%25A8%25D8%25AD%25D8%25AB%2521%26lr%3D)
and privacy-enhancing
[duckduckgo.com](https://explorer.ooni.org/measurement/20170828T000727Z_AS16322_CbZW9Sf1s0WujtW5iTla3zSV5iRZ1t20zSKFoHxhCYg1lJa12B?input=https:%2F%2Fduckduckgo.com%2F),
were amongst those found to be censored. Blogging platforms, like
[wordpress.com](https://explorer.ooni.org/measurement/20170909T033626Z_AS44244_nQ3nuzxEpubK0R9fba4Be6SEYlEMg3iBHcOkEujDFJskDCuEDt?input=https:%2F%2Fwordpress.com),
[blogger.com](https://explorer.ooni.org/measurement/20170813T043815Z_AS16322_bfLt3FuoNxavxSyivCYZpiJLdoQ0qlnc7DxjPP2dA4JhKsNDON?input=http:%2F%2Fblogger.com),
[blogspot.com](https://explorer.ooni.org/measurement/20170912T051036Z_AS197207_61ynG5Pbg0cHGA9XOd2cZ2yRrHwyEH3zzK6266x5Gv9pKUBE4i?input=http:%2F%2Fzibanawak.blogspot.com%2F),
and
[persianblog.com](https://explorer.ooni.org/measurement/20170907T034332Z_AS44244_fN1h5XCpGGFkHw6uMo3e4ElzvxrzQH6LiL8lc6XP4vR0N8w5Ee?input=http:%2F%2Fpersianblog.com%2F)
were also blocked. Iranian ISPs even targeted a variety of online gaming
sites, such as [World of Warcraft](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fworldofwarcraft.com%2F).
While the precise motivation behind this blocking is quite unclear to
us, it might be worth noting that [World of Warcraft has been monitored by the NSA](https://www.computerworld.com/article/2486632/cyberwarfare/the-nsa-tracks-world-of-warcraft-and-other-online-games-for-terrorist-clues.html)
over suspicions that the game was used as a communications platform by
terrorists.

Multiple Israeli domains were found to be blocked. These include
[government sites](https://explorer.ooni.org/measurement/20170906T030515Z_AS197207_RzGkAOX5mI1Gqp0GlODyuGNCgoyrt9pLHsyaVGIV5rol1tmD3Q?input=http:%2F%2Fwww.mod.gov.il),
news outlets
([haaretz.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fwww.haaretz.com)),
sports sites
([basket.co.il](https://explorer.ooni.org/measurement/20170901T035141Z_AS44244_IvztG4pj6MAMtt5RN6p8cY9AiaxFxE6Pm6mbl7rdmmIMIR5dFN?input=http:%2F%2Fwww.basket.co.il)),
a mail provider
([mail.walla.co.il](https://explorer.ooni.org/measurement/20170307T230434Z_AS43754_Ht3cpLL3OQgoWyqpJ81xeOYW7WduX2KYIfvMAYHd9WWvGQm3G0?input=http:%2F%2Fmail.walla.co.il))
and multiple other types of Israeli sites. The fact that the blocking of
Israeli domains is not limited to those that express criticism towards
the Iranian government or which host illegal content suggests that
Iranian ISPs likely blocked Israeli domains almost indiscriminately,
regardless of their content. The breadth of Israeli domain blocking also
indicates that politics likely influence how information controls are
implemented in Iran. Quite similarly, the blocking of
[usaid.gov](https://explorer.ooni.org/measurement/20170829T213139Z_AS43754_z1dX83Pysgq0bShLMZy082JY05w7qxI7maxCdrMJkz2s7hJwBg?input=https:%2F%2Fwww.usaid.gov%2F)
and
[cia.gov](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.cia.gov)
suggests that the political relations between Iran and the U.S. may have
influenced internet censorship in the country.

We have found many sites to be blocked as part of this study even though
they are no longer active, whether that is because they are censored
(preventing site owners from publishing new content), their servers are
down, or because the domains are squatted.

In the following subsections we highlight *some* of the blocked sites
and tools. Many more types of domains have also been blocked, all of
which can be found [here](/post/iran/ir-blocked-domains.csv).

### News websites

As part of this study, we found **121 news outlets** to be blocked
across Iran over the last three years. These include internationally
popular media sites, as well as Iranian news outlets.

Some of the blocked international news sites include:

* [bbc.co.uk](https://explorer.ooni.org/measurement/20170903T034005Z_AS44244_FeFw8yqNhqZxoi6HoWpkKxEgL0x9yKCXlWWTMtpK6hQzlakmmy?input=http:%2F%2Fwww.bbc.co.uk)

* [dw-world.de](https://explorer.ooni.org/measurement/20170903T021755Z_AS16322_m8gKgQgZdu7o7GVe6tZYagB9DVjNLGrzrkUCzWAijzwf5rBQbv?input=http:%2F%2Fwww.dw-world.de%2Fdw%2F0,,641,00.html)

* [voanews.com](https://explorer.ooni.org/measurement/20170904T022419Z_AS16322_S5cIgku1RXFRnKctLFy9JQRMtODe5oGnxO3JJmdEVsbw1n21wT?input=http:%2F%2Fwww.voanews.com%2Fpersian%2F)

* [indiatimes.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fwww.indiatimes.com)

* [arabtimes.com](https://explorer.ooni.org/measurement/20170902T221146Z_AS197207_0FospvK9Ol7aYaROSdhQLWskUeOxYvspMWejPYrLcfepLIrDZA?input=http:%2F%2Fwww.arabtimes.com)

* [cbsnews.com](https://explorer.ooni.org/measurement/20170901T074151Z_AS25124_0AJZQSb9Pvphip58LWHxjyWgFbpnIMrAwObXDGjaFNmeeJ9OMs?input=http:%2F%2Fwww.cbsnews.com)

* [dailymail.co.uk](https://explorer.ooni.org/measurement/20170828T212242Z_AS57563_wi9roMwqCSNCQyP5iWYDxFZLrsnfw9O50rOl8SNrnwGB8la3yN?input=http:%2F%2Fwww.dailymail.co.uk)

* [dailymotion.com](https://explorer.ooni.org/measurement/20170831T152444Z_AS44244_ahxHtgDh4OEBrPwPi5oeG0bdh6nd3zvBxQeiFdakHjZACDT8DC?input=http:%2F%2Fwww.dailymotion.com)

* [foxnews.com](https://explorer.ooni.org/measurement/20170830T114215Z_AS16322_RWOQKe9DzA09MrHWL85LJaFSjBk26D9IHpgHo8r2sIx53QdMEq?input=http:%2F%2Fwww.foxnews.com)

* [rambler.ru](https://explorer.ooni.org/measurement/20170828T203854Z_AS198357_1Ak3gAwQgL4wcrlFA0JO7I7VLcdqzJosKOnc7GuPjhEzRizkNn?input=https:%2F%2Fwww.rambler.ru%2F)

* [russia.tv](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Frussia.tv)

* [reddit.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.reddit.com%2F)

* [cbc.ca](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fwww.cbc.ca)

* [aawsat.com](https://explorer.ooni.org/measurement/20170903T034005Z_AS44244_FeFw8yqNhqZxoi6HoWpkKxEgL0x9yKCXlWWTMtpK6hQzlakmmy?input=http:%2F%2Faawsat.com%2F)

* [haaretz.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fwww.haaretz.com)

Many of the blocked international news outlets express criticism towards
the Iranian government and its regime, likely explaining the motivation
behind their censorship. We also found Reddit, an internationally
popular site that aggregates news and provides a platform for
discussions, to be
[blocked](https://explorer.ooni.org/measurement/20170902T081223Z_AS44244_dSch1V8VCbqnelUvwdhTbsg4qjSxODH1LTXWSnfgiG0vvbjnMV?input=https:%2F%2Fwww.reddit.com%2F)
as well.

Iranian ISPs were found to be blocking (at least) five BBC domains:
[bbc.co.uk](https://explorer.ooni.org/measurement/20170903T034005Z_AS44244_FeFw8yqNhqZxoi6HoWpkKxEgL0x9yKCXlWWTMtpK6hQzlakmmy?input=http:%2F%2Fwww.bbc.co.uk),
[bbc.com](https://explorer.ooni.org/measurement/20170906T030515Z_AS197207_RzGkAOX5mI1Gqp0GlODyuGNCgoyrt9pLHsyaVGIV5rol1tmD3Q?input=http:%2F%2Fwww.bbc.com%2Fpersian),
[bbcworld.com](https://explorer.ooni.org/measurement/20170210T134227Z_AS44244_cwXlqhFxGuTbqAyqf2NMXFuTJ6hNDbNiNh6BNXpJwVUGC7fpOP?input=http:%2F%2Fwww.bbcworld.com),
[news.bbc.co.uk](https://explorer.ooni.org/measurement/20170710T144728Z_AS31549_T0kaJfPCi2Z1zD5QaC9jk8dNIQqqMGy6p6v5WKE0iEopQ7DvDE?input=http:%2F%2Fnews.bbc.co.uk),
and
[bbcpersian.com](https://explorer.ooni.org/measurement/20170903T021755Z_AS16322_m8gKgQgZdu7o7GVe6tZYagB9DVjNLGrzrkUCzWAijzwf5rBQbv?input=http:%2F%2Fbbcpersian.com%2F).
This may not be surprising given that the news agency was previously
[banned from reporting in Iran for six years](http://time.com/3983510/bbc-iran/), following its reporting on
unrest in Iran in the aftermath of the 2009 presidential election. The
BBC’s Farsi service was also [reportedly blocked](https://www.theguardian.com/technology/2006/dec/04/news.iran)
more than ten years ago. More recently, Iranian authorities issued a
[court order imposing an asset freeze on 150 Iranian BBC journalists and former contributors](https://www.theguardian.com/world/2017/aug/15/iran-freezes-assets-bbc-persian-staff-crackdown-journalists)
due to their affiliation with the British media organization.

Some Iranian news outlets found to be blocked include:

* [iranpressnews.com](https://explorer.ooni.org/measurement/20170903T034005Z_AS44244_FeFw8yqNhqZxoi6HoWpkKxEgL0x9yKCXlWWTMtpK6hQzlakmmy?input=http:%2F%2Fwww.iranpressnews.com)

* [iranntv.com](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fwww.iranntv.com)

* [tehranreview.net](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Ftehranreview.net%2F)

* [iranshahrnewsagency.com](https://explorer.ooni.org/measurement/20170903T034005Z_AS44244_FeFw8yqNhqZxoi6HoWpkKxEgL0x9yKCXlWWTMtpK6hQzlakmmy?input=http:%2F%2Firanshahrnewsagency.com%2F)

* [iranefardanews.com](https://explorer.ooni.org/measurement/20170903T021755Z_AS16322_m8gKgQgZdu7o7GVe6tZYagB9DVjNLGrzrkUCzWAijzwf5rBQbv?input=http:%2F%2Firanefardanews.com%2F)

Iranshahr is the “[first news agency for Iranians abroad](http://www.iranshahrnewsagency.com/)”. It reports on
international news, but it also has an entire section dedicated to news
from Iran which may be viewed as overly critical towards the Iranian
government, potentially motivating its blocking by local ISPs.
TehranReview serves as a weekly online magazine and a virtual think
tank, which [aims](https://tehranreview.net/about) to empower the
voices of Iranian citizens, intellectuals and experts. Iran Press News
frequently [reports](http://www.iranpressnews.com/) on human rights
issues in Iran. Its English section is edited by Iranian human rights
activist, [Banafsheh Zand-Bonazzi](https://www.gatestoneinstitute.org/biography/Banafsheh+Zand),
whose father was a political prisoner until his suicide, which was
[viewed as a form of protest](http://www.washingtontimes.com/news/2011/may/1/longtime-iranian-dissident-kills-self-to-prove-his/)
against the government.

All news outlets found to be blocked in Iran can be found [here](/post/iran/ir-blocked-domains.csv).

### Political criticism

Opposition sites, pro-democracy sites and blogs expressing political
criticism were found to be blocked in Iran over the last three years.

**Opposition sites**

Major opposition sites run by Iranians in exile were found to be
blocked. These include the [People’s Mojahedin Organization of Iran](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Firan.mojahedin.org),
a political-militant organization that advocates the violent overthrow
of the Iranian government, as well as the sites of the
[Worker-Communist Party](https://explorer.ooni.org/measurement/20170903T034005Z_AS44244_FeFw8yqNhqZxoi6HoWpkKxEgL0x9yKCXlWWTMtpK6hQzlakmmy?input=http:%2F%2Fwww.wpiran.org)
and the [Labour Party (Toufan)](https://explorer.ooni.org/measurement/20170904T022419Z_AS16322_S5cIgku1RXFRnKctLFy9JQRMtODe5oGnxO3JJmdEVsbw1n21wT?input=http:%2F%2Fwww.toufan.org).

The [Komala Party of Iranian Kurdistan](http://komala.org/) is a
left-wing Kurdish nationalist political party,
[founded](http://komalainternational.org/2016/01/14/komala-party-of-iranian-kurdistan-an-introduction/)
by Kurdish university students in Tehran. Having engaged in armed
struggle for the rights and freedom of the Kurdish people in the 80s and
90s, and having [resumed armed struggle](http://www.rudaw.net/english/middleeast/iran/30042017) more
recently, it is
[viewed](http://www.tehrantimes.com/news/408124/Iranian-security-forces-arrest-several-Komala-terrorists)
by Iranian authorities as a terrorist organization, most likely
explaining the motivation behind the [blocking of its site](https://explorer.ooni.org/measurement/20170904T022419Z_AS16322_S5cIgku1RXFRnKctLFy9JQRMtODe5oGnxO3JJmdEVsbw1n21wT?input=http:%2F%2Fwww.komala.org).

Following the Iranian Revolution, the [National Council of Resistance of Iran (NCRI)](http://iranncr.org/) was formed in 1981 to [act as a parliament in exile](http://iranncr.org/index.php/2010-02-23-10-49-40/2010-02-23-10-53-52/460-2010-06-06-19-36-50)
with 530 members, 52% of which are women, including [representatives of ethnic and religious minorities](https://ncr-iran.org/en/about/our-resistance). It
[aims](https://ncr-iran.org/en/about/our-resistance) to establish a
secular democratic republic in Iran, based on the separation of religion
and state. To this end, it has
[approved](http://iranncr.org/index.php/2010-02-23-10-49-40/2010-02-23-10-53-52/460-2010-06-06-19-36-50)
the National Peace Initiative of the National Council of Resistance of
the Kurdish Autonomy Initiative, the Propagation of the Government
Relations with Religion, and the Plan of Freedom and the Rights of
Women, amongst other initiatives. We found the [NCRI’s site](http://iranncr.org/) to be
[blocked](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Firanncr.org)
in Iran during the testing period.

**Pro-democracy sites**

We also found sites advocating for democracy in Iran and internationally
to be blocked.

The [National Democratic Institute (NDI)](https://www.ndi.org/who-we-are) is a non-profit, non-partisan,
non-governmental organization that has supported democratic institutions
and practices around the world since 1983. As part of its work, NDI
collaborates with local partners to promote citizen participation,
strengthen civic and political organizations, and to safeguard
elections. Iran is one of the many countries that NDI [works in](https://www.ndi.org/middle-east-and-north-africa/iran), having
monitored elections and [examined the roles of religious and political institutions](https://www.ndi.org/iran_election_bulletin). NDI’s site
may have been
[blocked](https://explorer.ooni.org/measurement/20170902T104107Z_AS25124_ObKp4k9uiwaA0evMgY2m3cZmpyVmx2E4Ixk5CzwYadqsn8J3RY?input=https:%2F%2Fwww.ndi.org%2F)
for being viewed as overly
[critical](https://www.ndi.org/our-stories/iran%E2%80%99s-assemblies-fail-iranian-people),
and possibly for being perceived as interfering in internal affairs
(through election monitoring, for example).

Similarly, we found the [site](http://www.ned.org/) of the National
Endowment for Democracy (NED) to be
[blocked](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fwww.ned.org)
as well. Founded in 1983 by the United States Congress, NED is a
non-profit foundation that also aims to create and strengthen democratic
institutions around the world, [including Iran](http://www.ned.org/region/middle-east-and-northern-africa/iran-2016/).
NED has supported
[projects](http://www.ned.org/region/middle-east-and-northern-africa/iran-2016/)
in Iran that promote women’s rights, strengthen independent journalism,
monitor human rights violations, and track parliamentary activities,
amongst other projects.

**Blogs**

Numerous blogs expressing political criticism were found to be blocked
in Iran during the testing period.

These include the blogs of Iranian political activists, such as [Ali Afshari](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Faliafshari.com%2F)
and [Ahmad Batebi](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fahmadbatebi.com%2F).
Ali Afshari [campaigned](http://aliafshari.com/) for the democratic
reform of Iran, publicly discussing human rights violations and
advocating for freedom, human rights, and democracy. Having published
more than 50 essays and having delivered more than 100 speeches on
topics relating to democracy in Iran, he was
[imprisoned](https://web.archive.org/web/20080415023119/http://www.ned.org/forum/past.html)
in 2000 and 2003, and spent 400 days in solitary confinement. Ali
Afshari also carried out a [research fellowship on “The Challenge of Democratization in Iran”](https://web.archive.org/web/20080415023119/http://www.ned.org/forum/past.html)
with the [National Endowment for Democracy (NED)](http://www.ned.org/), whose site was found to be
[blocked](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fwww.ned.org),
in addition to [Ali’s site](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Faliafshari.com%2F).

Ahmad Batebi, whose [personal site](http://www.ahmadbatebi.com/fa/)
was found to be
[blocked](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fahmadbatebi.com%2F),
was designated a “[prisoner of conscience](https://wilmetteinstitute.org/ahmad-batebi/)” by Amnesty
International. He was involved in Iran’s student reform movement in the
late 1990s when a fellow student activist was murdered right next to him
by authorities. Once a [picture of him holding the student’s shirt splattered in blood](http://www.economist.com/node/11707464) appeared
on the cover of The Economist, he received a death sentence for
“creating street unrest”. Following pressure from the international
community, his sentence was commuted to a 15-year prison term, and
eventually reduced to 10 years. While in prison, it was
[reported](http://www.economist.com/node/11707464) that he was
subjected to torture. Ahmad Batebi eventually fled Iran and was granted
asylum by the United States. He has since [worked with the Voice of America (VOA) news agency](https://www.linkedin.com/in/ahmadbatebi),
whose site was also found to be
[blocked](https://explorer.ooni.org/measurement/20170904T022419Z_AS16322_S5cIgku1RXFRnKctLFy9JQRMtODe5oGnxO3JJmdEVsbw1n21wT?input=http:%2F%2Fwww.voanews.com%2Fpersian%2F)
in Iran.

Other [blocked blogs include ghoghnoos.org](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fwww.ghoghnoos.org)
which writes about various sensitive topics, such as the [Khordad movement](http://ghoghnoos.org/ak/kj/j-sal.html), a political faction
in Iran that aims to change the Iranian political system to include more
freedom and democracy. We also found a similar domain,
ghoghnoos-iran.blogspot.com (possibly run by the same blogger, following
the blocking of ghoghnoos.org), to be
[blocked](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fghoghnoos-iran.blogspot.com)
as well. The [last post](https://ghoghnoos-iran.blogspot.com)
published on this domain (dated 24th September 2004) discusses the
[Pakdasht murders](http://www.economist.com/node/3315755), a case
involving the rape and murder of Afghan refugee children near Pakdasht.
This suggests that the blog may have been blocked right after the last
post was published, which questions the way that authorities handled the
Pakdasht murder case. This finding is particularly interesting because
it indicates that internet censorship in Iran may also be implemented as
a means of hiding government responsibility.

All sites expressing political criticism that were found to be blocked
in Iran can be found [here](/post/iran/ir-blocked-domains.csv).

### Human rights issues

Numerous sites that discuss human rights violations and defend human
rights were found to be blocked in Iran. These include sites specific to
Iran, as well as international human rights sites.

Human rights sites focusing on Iran that were found to be blocked
include the [Center for Human Rights in Iran](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=https:%2F%2Fwww.iranhumanrights.org),
[Human Rights & Democracy for Iran](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fwww.iranrights.org%2F),
and [Iran Human Rights](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Firanhr.net%2Ffa%2F),
amongst others. The [Center for Human Rights in Iran (CHRI)](https://www.iranhumanrights.org/) is an independent,
nonpartisan, nonprofit organization headquartered in the U.S. that aims
to protect and promote human rights in Iran. CHRI has been researching
and documenting human rights violations in Iran since 2008, [reaching around 1.5 million people inside Iran](https://www.iranhumanrights.org/press-kit/) every month through
social media. Similarly, [Human Rights & Democracy for Iran](https://www.iranrights.org/) is a Washington-based project of the
Abdorrahman Boroumand Foundation, which “[seeks to ensure that human rights in Iran are promoted and protected without discrimination](https://www.iranrights.org/foundation)”. As part of
their research and reporting, they have published reports on the
[executions of political prisoners in 1988](https://www.iranrights.org/library/document/1380) and on [Iran’s 2009 elections](https://www.iranrights.org/library/document/604).
[Iran Human Rights](https://iranhr.net/) is an Oslo-based non-profit
organization that [aims](https://iranhr.net/en/about/) to create an
abolitionist movement in Iran by increasing awareness about the death
penalty. To this end, it has published a number of
[reports](https://iranhr.net/en/reports/#/) on executions in Iran.

Some international human rights sites found to be blocked include
[Human Rights Watch](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=https:%2F%2Fwww.hrw.org),
the [Human Rights Campaign](https://explorer.ooni.org/measurement/20170902T213651Z_AS197207_Jy1372wqOUxV5SVoQ301hyHpJSB4XEj7saby2Ykpqy2MFvzrnP?input=http:%2F%2Fwww.hrc.org),
and [Human Rights First](https://explorer.ooni.org/measurement/20170902T221146Z_AS197207_0FospvK9Ol7aYaROSdhQLWskUeOxYvspMWejPYrLcfepLIrDZA?input=http:%2F%2Fwww.humanrightsfirst.org).
Over the last decades, Iranian authorities have exhibited limited
tolerance when domestic issues are surfaced on the international agenda.
The [imprisonment of Ahmad Batebi](http://www.economist.com/node/11707464), an Iranian activist
who brought (more) international attention to human rights violations in
Iran when he appeared on the cover of The Economist, is an example of
this. Human Rights Watch has routinely been
[reporting](https://www.hrw.org/world-report/2017/country-chapters/iran)
on human rights violations in Iran, highlighting executions, torture,
and the ill-treatment of minorities, and defending political prisoners
and women’s rights. Therefore, the motivation behind the blocking of
such sites might be attributed to their coverage of incidents that
Iranian authorities may have incentive to conceal, and/or because they
may be viewed as overly critical or inaccurate by authorities.

It’s worth emphasizing though that other major human rights sites - such
as [Amnesty International](https://www.amnesty.org/) - which *also*
[report on human rights violations in Iran](https://www.amnesty.org/en/countries/middle-east-and-north-africa/iran/report-iran/),
were found to be
[accessible](https://explorer.ooni.org/measurement/20170904T022419Z_AS16322_S5cIgku1RXFRnKctLFy9JQRMtODe5oGnxO3JJmdEVsbw1n21wT?input=https:%2F%2Fwww.amnesty.org)
in Iran. The fact that Amnesty’s site was found to be accessible is
particularly interesting because the organization has [not been permitted to investigate human rights in Iran](https://www.amnesty.org/en/press-releases/2008/07/iran-end-discrimination-against-kurdish-minority-20080730/)
over the last decades.

**Religious and ethnic minorities**

According to international human rights organizations, such as [Human Rights Watch](https://www.hrw.org/world-report/2017/country-chapters/iran#72cd39)
and [Amnesty International](https://www.amnesty.org/en/countries/middle-east-and-north-africa/iran/report-iran/),
religious and ethnic minorities in Iran have been victims of
discrimination.

The Kurds are the [third largest ethnic group](https://www.cia.gov/library/publications/the-world-factbook/geos/ir.html)
in Iran. Amnesty has
[reported](https://www.amnesty.org/en/press-releases/2008/07/iran-end-discrimination-against-kurdish-minority-20080730/)
that while expression of Kurdish culture (such as dress and music) has
generally been respected, the Kurdish minority in Iran continues to
experience deep-rooted discrimination. Since 1918, there has been an
ongoing [separatist dispute](https://web.archive.org/web/20120615011857/http://government.arts.cornell.edu/assets/psac/sp09/Smith_Kurdish_Separatism_Feb09_PSAC.pdf)
between the Kurdish opposition in western Iran and the Iranian
government. Kurdish ethnic rights defenders Farzad Kamangar, Ali
Heydariyan and Farhad Vakili were [sentenced to death in 2008](https://editorials.voa.gov/a/a-41-2008-09-26-voa1-84649927/1480484.html),
following what Amnesty
[called](https://www.amnesty.org/en/press-releases/2008/07/iran-end-discrimination-against-kurdish-minority-20080730/)
a “grossly flawed” judicial process. Many other Kurdish human rights
defenders, community activists and journalists have [faced arbitrary arrests and prosecution](https://www.amnesty.org/en/press-releases/2008/07/iran-end-discrimination-against-kurdish-minority-20080730/).
Minority Rights Group International
[argues](http://peoplesunderthreat.org/countries/iran-islamic-republic-of/)
that the Kurds are amongst the communities at risk in Iran.

As part of this study, we found numerous Kurdish websites to be blocked.
These include Kurdish news outlets, such as
[kurdistanpress.com](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http%3A%2F%2Fkurdistanpress.com)
and
[kurdistanmedia.com](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http%3A%2F%2Fwww.kurdistanmedia.com),
as well as Kurdish human rights sites, such as the [Kurdish Human Rights Project](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http%3A%2F%2Fwww.khrp.org).
We also found the site of the [Unrepresented Nations & People’s Organization](http://unpo.org/) to be
[blocked](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Funpo.org%2F)
as well. Given the [ongoing tension](http://www.aljazeera.com/indepth/inpictures/2017/08/tensions-build-iraq-iran-border-170803075834091.html)
with the Kurdish separatist movement and the fact that such sites report
on human rights violations against the Kurds, these censorship events
may attempt to reinforce geopolitical dynamics of power.

Religious minorities have faced discrimination in Iran as well. Iran’s
Baha’i population - the country’s largest religious minority - has
[systemically faced prosecution](http://www.bahai.com/thebahais/pg59.htm) by authorities
over the last century. Following the contested 2009 elections, Human
Rights Watch
[argued](https://www.hrw.org/news/2010/02/23/iran-end-persecution-bahais)
that Iranian authorities targeted the Baha’i community as a cover for
the post-election unrest. In late 2016, at least [85 Baha’is were imprisoned](https://www.hrw.org/world-report/2017/country-chapters/iran#72cd39)
and [allegations of torture](https://www.amnesty.org/en/countries/middle-east-and-north-africa/iran/report-iran/)
surfaced for various other members of the Baha’i community. In addition
to being persecuted for practising their faith, the minority has also
been
[discriminated](https://www.amnesty.org/en/countries/middle-east-and-north-africa/iran/report-iran/)
in terms of education, employment, and inheritance.

As part of this study, we found various Baha’i sites to be blocked.
These include:

* [bahai.org](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Finfo.bahai.org): The website of the worldwide Baha’i community

* [bahai.com](https://explorer.ooni.org/measurement/20170902T034155Z_AS44244_TEWGAv9uptmhYBAPp2LUaBMx0tNmVgLd0EycgAAZi9kTfM9RQd?input=http:%2F%2Fwww.bahai.com): The Baha’i faith

* [bahai-education.org](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fbahai-education.org): Educational resources

* [bahai-library.com](https://explorer.ooni.org/measurement/20170904T022419Z_AS16322_S5cIgku1RXFRnKctLFy9JQRMtODe5oGnxO3JJmdEVsbw1n21wT?input=http:%2F%2Fbahai-library.com): Baha’i online library

* [bahairadio.org](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fbahairadio.org): Baha’i radio

**Women’s rights**

According to Human Rights Watch, women in Iran face
[discrimination](https://www.hrw.org/news/2016/01/27/iran-no-accountability-abuses)
in many aspects of their lives, such as marriage, divorce, and
inheritance. Two years ago, authorities even [sought to introduce discriminatory laws](https://www.hrw.org/news/2016/01/27/iran-no-accountability-abuses)
that would restrict the employment of women in certain sectors. Amnesty
International has
[reported](https://www.amnesty.org/en/countries/middle-east-and-north-africa/iran/report-iran/)
that Iranian authorities have targeted women human rights defenders,
criminalizing initiatives related to feminism and women’s rights.

Our testing showed the blocking of various sites that defend and promote
women’s rights. These include feminist sites (such as
[feminist.com](https://explorer.ooni.org/measurement/20170830T220149Z_AS50810_f2x4Ku834sDtePUxEW82kWbhLqyHNKCXKZTgy3mhYSgQ9NGJSH?input=http:%2F%2Fwww.feminist.com)
and
[feminist.org](https://explorer.ooni.org/measurement/20170901T074151Z_AS25124_0AJZQSb9Pvphip58LWHxjyWgFbpnIMrAwObXDGjaFNmeeJ9OMs?input=http:%2F%2Fwww.feminist.org)),
as well as
[AWID](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.awid.org%2F),
an international feminist organization
[committed](https://www.awid.org/) to achieving gender equality,
sustainable development and women’s rights. We also found
womeniniran.com to be
[blocked](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fwww.womeniniran.com),
even though the domain is currently
[squatted](http://www.womeniniran.com/).

**LGBTQI rights**

Both male and female homosexual activity is
[illegal](https://www.theguardian.com/world/2007/sep/25/iran.roberttait)
in Iran under the country’s sodomy laws. Punishment for engaging in
homosexual activity can result in multiple lashes and, in some cases,
[execution](https://www.independent.co.uk/news/world/middle-east/iran-executes-three-men-for-sodomy-2350671.html).
Several years ago, it was
[reported](https://www.theguardian.com/world/2010/aug/08/iran-mohammad-mostafaei-rights-lawyer)
that an 18-year-old was falsely charged of sodomy and sentenced to
death. Earlier this year, Iranian police [arrested more than 30 men](http://www.washingtonblade.com/2017/04/21/report-iranian-police-arrest-30-men-sodomy/)
on sodomy charges.

Iranian ISPs were found to be censoring sites connecting LGBTQI
communities, as well as sites promoting LGBTQI rights.
[Grindr](https://www.grindr.com/), an internationally popular social
networking site geared towards gay and bisexual men, was amongst those
found to be
[blocked](https://explorer.ooni.org/measurement/20170904T101149Z_AS31549_YtoGaLSQDhg9P2c3eZsABt09zrVKhSVCui3rACcYqVJgE6RYrq?input=http:%2F%2Fwww.grindr.com%2F).
One of the [first major sites for lesbians](http://www.lesbian.org)
was also
[blocked](https://explorer.ooni.org/measurement/20170614T211346Z_AS197207_JqL9a0pvqD3QjTK2vqW4UILZZ82MbftVhqLc4UKfiUCIrT22kd?input=http:%2F%2Fwww.lesbian.org).
We found sites like ILGA, a worldwide federation [campaigning for LGBTI rights](http://ilga.org/) since 1978, to be
[blocked](https://explorer.ooni.org/measurement/20170904T182716Z_AS197207_cWFe1e13mwDVf8EMyYE9dfd5ttrPIiBdyl5m1ZGh6zwbjAP50E?input=http:%2F%2Filga.org%2F)
as well.

While transexuality can be
[legal](https://link.springer.com/article/10.1007/s10691-016-9332-x)
in Iran if accompanied by a gender confirmation surgery, transsexuals
still experience social intolerance, similarly to many other countries
around the world. This is also suggested by our findings, which show
that [sites on transsexuality](http://transsexual.org/) were amongst
those
[blocked](https://explorer.ooni.org/measurement/20170901T001651Z_AS44244_QAo0VpO9CjPq7hgZFo7dYdUZWkVKQOxwH87cakbyrMGbTLVufi?input=http:%2F%2Ftranssexual.org)
in Iran.

**Freedom of expression**

Multiple sites promoting freedom of expression were found to be blocked
in Iran. These include the [Free Expression Network (FEN)](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fwww.freeexpression.org),
an alliance of organizations
[dedicated](http://www.freeexpression.org/) to combating censorship
and defending the right to free expression, as well as [Free Speech TV](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.freespeech.org%2F),
a U.S-based, independent news network
[committed](https://www.freespeech.org/about-us) to advancing
progressive social change. We also found the [*site of the Committee to
Project Journalists*](https://cpj.org/) to be
[blocked](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.cpj.org%2F)
as well.

Many sites run by international, non-profit, digital rights
organizations were amongst those censored in Iran. These include:

* **[Freedom House](https://explorer.ooni.org/measurement/20170903T034010Z_AS44244_eK4M5fnS6Wcn08gB9YsdtZlN90mLZJjOVcSzj9NQoWNmdZVwPA?input=https:%2F%2Ffreedomhouse.org%2F)**: An [independent watchdog organization](https://freedomhouse.org/) that conducts research
and advocacy on democracy, political freedom, and human rights for
most countries around the world (including
[Iran](https://freedomhouse.org/report/freedom-world/2017/iran)). It also [monitors](https://freedomhouse.org/report-types/freedom-net) censorship, intimidation and violence against journalists, and public access to information. Both the [HTTP](https://explorer.ooni.org/measurement/20170210T135010Z_AS44244_2ugMkSFDoP6ZscLxvj1Bof713EZt0xKIp8vK5xCGv4pYOoTnT6?input=http:%2F%2Fwww.freedomhouse.org)
and [HTTPS](https://explorer.ooni.org/measurement/20170402T231236Z_AS44244_eLA8yykbrZoLPrsxMDMqhqmHqmryOcs0QwrCnk3cuowfIY9qE6?input=https:%2F%2Ffreedomhouse.org%2F)
versions of Freedom House’s site were found to be blocked.

* **[Reporters Without Borders](https://explorer.ooni.org/measurement/20170904T022419Z_AS16322_S5cIgku1RXFRnKctLFy9JQRMtODe5oGnxO3JJmdEVsbw1n21wT?input=http:%2F%2Fwww.rsf.org%2Farticle.php3%3Fid_article%3D19016)**: An international non-profit, non-governmental organization headquartered in Paris that [promotes and defends freedom of information and freedom of the press](https://rsf.org/). Its mission includes combating censorship and laws aimed at restricting freedom of expression. Both the
[HTTP](https://explorer.ooni.org/measurement/20170917T034513Z_AS44244_qLMrG552Haux6j7Honjsm71KoLITiZarIyCFN5n5eet7qWKWj3?input=http:%2F%2Fwww.rsf.org%2Farticle.php3%3Fid_article%3D19016)
and [HTTPS](https://explorer.ooni.org/measurement/20170915T073256Z_AS44244_kDfZB8MUC5yqGfsgZRetTuUasAyRoXVLKauOwdapbSf4VhTTsP?input=https:%2F%2Frsf.org%2F) versions of Reporters Without Borders’ site were found to be blocked.

* **[ARTICLE 19](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.article19.org%2F)**: An international non-profit, non-governmental organization [defending](https://www.article19.org/pages/en/mission.html) freedom of expression. In collaboration with [90 partners worldwide](https://www.article19.org/pages/en/what-we-do.html), ARTICLE 19 carries out research and advocacy in support of
free expression. Both the [HTTP](https://explorer.ooni.org/measurement/20170705T040044Z_AS51074_GBlp77Zt5oEjvmDKhWJISrgkBvLRHtL6K9d92j3fc37amgq8bd?input=http:%2F%2Fwww.article19.org)
and [HTTPS](https://explorer.ooni.org/measurement/20170816T213055Z_AS58085_3ALHnxsKxBuTnbPX7OTCP1x25Fj92Cr9wvR3qBtziGPDqIihws?input=https:%2F%2Fwww.article19.org%2F)
versions of ARTICLE 19’s site were found to be blocked.

* **[ASL19](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=https:%2F%2Fasl19.org)**: An [independent technology
group](https://asl19.org/en/about.html) connected to both Iranians and technology actors in the West that aims to support civil society goals. To this end, ASL19 helps Iranians bypass internet censorship and more recently started providing support for circumvention tools in the broader Middle East and North
Africa region. The [HTTPS version of ASL19’s site was found to be blocked](https://explorer.ooni.org/measurement/20170709T044144Z_AS44244_BdhXyHUAcRB4PzVJpL1DT6EUiFvmEK9hDCJWnlfbxzZ7ijo1M9?input=https:%2F%2Fasl19.org),
but it remains unknown if the HTTP version is blocked as well because it hasn’t been tested (though the blocking of the HTTPS
version strongly suggests that the HTTP version is likely blocked as well).

* **[The Citizen Lab](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=https:%2F%2Fcitizenlab.org)**: An [interdisciplinary laboratory](https://citizenlab.ca/about/) based at the University of Toronto, focusing on research, development, and high-level strategic policy and legal engagement at the intersection of information and communication technologies, human rights, and global security. The Citizen Lab is known internationally for having published numerous [research reports](https://citizenlab.ca/category/research/) exposing internet censorship and targeted malware attacks against civil
society members. Both the [HTTP](https://explorer.ooni.org/measurement/20170726T103340Z_AS197207_Q7MNErjDcINCkIYiMUxxTWOD1ki5TB3o2Qg7XkQeVQBlKuTFQJ?input=http:%2F%2Fwww.citizenlab.org) and [HTTPS](https://explorer.ooni.org/measurement/20170912T051036Z_AS197207_61ynG5Pbg0cHGA9XOd2cZ2yRrHwyEH3zzK6266x5Gv9pKUBE4i?input=https:%2F%2Fcitizenlab.org)
versions of The Citizen Lab’s site were found to be blocked.

* **[Herdict](https://explorer.ooni.org/measurement/20170829T173711Z_AS16322_tJ77PaiMTsazuCfZFNKFGMygXz1wmA1V7OSvP3HE8IqtEFcjVR?input=https:%2F%2Fwww.herdict.org%2F)**: A [project](https://www.herdict.org/) under [Harvard’s Berkman Klein Center for Internet and Society](https://cyber.harvard.edu/) which [collects and disseminates](https://cyber.harvard.edu/gsoc/Herdict) real-time, crowdsourced information about internet filtering, denial of
service attacks, and other blockages. Both the [HTTP](https://explorer.ooni.org/measurement/20160730T095331Z_AS31549_GjWU3gDRoQOn7H6DOPQA5YF220doffCkmZFuHcajPVPGJfKeiq?input=http:%2F%2Fherdict.org)
and [HTTPS](https://explorer.ooni.org/measurement/20170503T074744Z_AS31549_kwZBC4CkcI5Md739dhY2MhcpACAmfdgayH0gU1q9wF4S0B7TTY?input=https:%2F%2Fwww.herdict.org%2F) versions of Herdict’s site were found to be blocked.

* **[Global Voices](https://explorer.ooni.org/measurement/20170901T001651Z_AS44244_QAo0VpO9CjPq7hgZFo7dYdUZWkVKQOxwH87cakbyrMGbTLVufi?input=http:%2F%2Fadvocacy.globalvoicesonline.org)**: An [international community](https://globalvoices.org/) of writers, bloggers, and digital activists that translate and report on what is being said in citizen media worldwide. It started off as a project of [Harvard’s Berkman Klein Center for Internet and Society](https://cyber.harvard.edu/) and became an independent non-profit in 2008. Global Voices is known for its advocacy and reporting on [digital rights issues](https://globalvoices.org/-/topics/human-rights/), such as surveillance and internet censorship. The blocking of Global Voices appears to be limited to the HTTP version of the site. Our measurements show that while the [HTTPS version of the site was accessible](https://explorer.ooni.org/measurement/20170704T051235Z_AS44244_5CZz9wLvB1uozEQvnKxSQT8DJsQPLpWaWVtBWaOLt7KaiAZFs4?input=https:%2F%2Fglobalvoices.org%2F) in Iran, [block pages were served for the HTTP version](https://explorer.ooni.org/measurement/20170802T090223Z_AS44208_N729EemfGjesxkLeGZ4lcKLLP3Nx0lmZC9QOIDwQeYmWVsCyfd?input=http:%2F%2Fadvocacy.globalvoicesonline.org).

* **[Electronic Frontier Foundation (EFF)](https://explorer.ooni.org/measurement/20170831T205401Z_AS201150_A5fQYrFRzQQLcuCRqx6Kggl40Cme6r5EEYy5S38ufNBKdp3Ydk?input=https:%2F%2Fwww.eff.org%2F)**: The leading non-profit organization [defending](https://www.eff.org/about) civil liberties in the digital world. EFF champions user privacy, free expression, and innovation through impact litigation, policy analysis, grassroots activism, and technology development. Both the [HTTP](https://explorer.ooni.org/measurement/20160623T224146Z_AS31549_KI4OH7sDnIYycDcBNfybgRIPrvsVFSorCuOX3AhiUsSwtfcUMj?input=http:%2F%2Fwww.eff.org) and [HTTPS](https://explorer.ooni.org/measurement/20170630T210936Z_AS44244_01nogU5OXzmdp1dUmsleVwYNXMyykKUrK2KzmqU7izsAfVIig1?input=https:%2F%2Fwww.eff.org%2F) versions of the EFF’s site were found to be blocked.

**[The Centre for Democracy and Technology (CDT)](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fcdt.org%2F)**: An international non-profit organization that [defends online civil liberties and human rights](https://cdt.org/about/), driving policy outcomes to keep the internet open, innovative, and free. Both the [HTTP](https://explorer.ooni.org/measurement/20170305T074359Z_AS197207_K5bIyw3xVutsK4x8DRdpoeTiTUyf0Y6lwzZFkMJyAo2yIk2S4b?input=http:%2F%2Fwww.cdt.org) and [HTTPS](https://explorer.ooni.org/measurement/20170914T073110Z_AS44244_ScbiV25prRGvI1R8A0XAQM0vGrbUR7l1ABHvNOElE0ToQqHil8?input=https:%2F%2Fcdt.org%2F) versions of CDT’s site were found to be blocked.

Freedom of expression though also appears to be limited in Iran through
the blocking of popular blogging platforms, such as
[wordpress.com](https://explorer.ooni.org/measurement/20170919T043133Z_AS16322_lfGcun7eX1a9uBz54Pzn8mg4UoikhWtqRVpfw20T8NQstOQEr1?input=http:%2F%2Fwordpress.com),
[blogger.com](https://explorer.ooni.org/measurement/20170919T043133Z_AS16322_lfGcun7eX1a9uBz54Pzn8mg4UoikhWtqRVpfw20T8NQstOQEr1?input=http:%2F%2Fblogger.com),
[blogspot.com](https://explorer.ooni.org/measurement/20170919T043133Z_AS16322_lfGcun7eX1a9uBz54Pzn8mg4UoikhWtqRVpfw20T8NQstOQEr1?input=http:%2F%2Fwww.mani4lgbt.blogspot.com),
and
[persianblog.com](https://explorer.ooni.org/measurement/20170919T043133Z_AS16322_lfGcun7eX1a9uBz54Pzn8mg4UoikhWtqRVpfw20T8NQstOQEr1?input=http:%2F%2Ffreedomforiran.persianblog.com).

All human rights sites found to be blocked in Iran can be viewed [here](/post/iran/ir-blocked-domains.csv).

### Communication Tools

Facebook Messenger was found to be [blocked in Iran by means of DNS tampering](https://explorer.ooni.org/measurement/20170904T004807Z_AS44244_hTmlTpcncdzFBKkjI00ChqyuDLbFTz4GtokG7GBvQtcT9VYfhY).
This was revealed by [OONI’s Facebook Messenger test](https://ooni.org/nettest/facebook-messenger/), which
is designed to examine the reachability of the app by attempting to
perform a TCP connection and DNS lookup to Facebook’s endpoints over the
vantage point of the user. While the test was able to establish TCP
connections to Facebook’s endpoints, DNS lookups to domains associated
to Facebook did not resolve to IP addresses allocated to Facebook,
illustrating that the app was blocked in Iran during the testing period.

Viber is another popular communications tool that we found to be
[blocked](https://explorer.ooni.org/measurement/20170903T034010Z_AS44244_eK4M5fnS6Wcn08gB9YsdtZlN90mLZJjOVcSzj9NQoWNmdZVwPA?input=http:%2F%2Fwww.viber.com).
While we didn’t measure the reachability of its app (we don’t have a
test for that yet), we found its domain, viber.com, to be
[blocked](https://explorer.ooni.org/measurement/20170903T034010Z_AS44244_eK4M5fnS6Wcn08gB9YsdtZlN90mLZJjOVcSzj9NQoWNmdZVwPA?input=http:%2F%2Fwww.viber.com)
across multiple networks in Iran. Quite similarly, we found [PalTalk’s domain](http://paltalk.com/) to also be
[blocked](https://explorer.ooni.org/measurement/20170918T030314Z_AS44244_5Uv7bXBuW5ocZ4v5Oe7zxlfDpNMY7qrPcJeQWiSZxwMvVwV9Kk?input=http:%2F%2Fwww.paltalk.com),
as well as the [domain of an Israeli mail provider](https://explorer.ooni.org/measurement/20170307T230434Z_AS43754_Ht3cpLL3OQgoWyqpJ81xeOYW7WduX2KYIfvMAYHd9WWvGQm3G0?input=http:%2F%2Fmail.walla.co.il).

On a positive note, other popular communications tools, like
[WhatsApp](https://explorer.ooni.org/measurement/20170904T004754Z_AS44244_lA7TEcxLjUjRrmWzukWJutJYqys9SEvjtlgycprFuG7BIGzglY)
and
[Telegram](https://explorer.ooni.org/measurement/20170919T004801Z_AS16322_EFsshM60wHNs9A1szSICKi6GynpY0iNzvU9O7wHKHaJJHv9puM),
were found to be accessible in Iran throughout the testing period.

All communication tool sites (excluding apps) found to be blocked in
Iran can be viewed [here](/post/iran/ir-blocked-domains.csv).

### Social Networks

Multiple social networking sites were found to be blocked in Iran over
the last three years. Some of the most popular social networks
internationally found to be blocked include:

* [twitter.com](https://explorer.ooni.org/measurement/20170831T111030Z_AS44244_mV6lnlrp0UDTtLHJBpeBApNkkmKQQqy13siWac0qZPPpmJis9G?input=https:%2F%2Ftwitter.com)

* [facebook.com](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=https:%2F%2Fwww.facebook.com%2Fkambizhosseini)

* [plus.google.com](https://explorer.ooni.org/measurement/20170904T182716Z_AS197207_cWFe1e13mwDVf8EMyYE9dfd5ttrPIiBdyl5m1ZGh6zwbjAP50E?input=https:%2F%2Fplus.google.com)

* [pinterest.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.pinterest.com%2F)

* [myspace.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fmyspace.com%2F)

* [4chan.org](https://explorer.ooni.org/measurement/20170831T111030Z_AS44244_mV6lnlrp0UDTtLHJBpeBApNkkmKQQqy13siWac0qZPPpmJis9G?input=http:%2F%2Fwww.4chan.org)

But internet censorship in Iran is not limited to international social
networking sites. We also found an [Iranian social forum](http://www.iransocialforum.org/) to be
[blocked](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fwww.iransocialforum.org)
as well. The censorship of this site, along with many others, cannot be
disputed since the providers served blockpages.

All social networking sites found to be blocked in Iran can be viewed
[here](/post/iran/ir-blocked-domains.csv).

### Media sharing platforms

Internet censorship in Iran also targets online platforms that share
videos and images, amongst other forms of media. Some internationally
popular media sharing platforms that were found to be blocked in Iran
over the last three years include the following:

* [youtube.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.youtube.com)

* [vimeo.com](https://explorer.ooni.org/measurement/20170904T101149Z_AS31549_YtoGaLSQDhg9P2c3eZsABt09zrVKhSVCui3rACcYqVJgE6RYrq?input=https:%2F%2Fvimeo.com%2F)

* [instagram.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.instagram.com%2F)

* [netflix.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.netflix.com%2F)

* [flickr.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.flickr.com%2F)

* [metacafe.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fwww.metacafe.com)

In previous years, it was
[reported](https://motherboard.vice.com/en_us/article/4x38kd/irans-smart-instagram-censorship-isnt-that-smart)
that ISPs in Iran applied “smart filters”, solely targeting specific
pages in the HTTP version of Instagram, rather than blocking access to
the whole site. However, our findings show that many ISPs in Iran are
*now* targeting both the HTTP and HTTPS versions of such sites. Ever
since sites like Instagram enabled HTTPS, Iranian ISPs appear to be
carrying out a form of “blanket censorship” by blocking the HTTPS
version as well, rending such sites completely inaccessible (since ISPs
cannot limit their censorship to specific web pages when a site is
hosted on HTTPS).

All media sharing sites found to be blocked in Iran can be viewed [here](/post/iran/ir-blocked-domains.csv).

### Anonymity and circumvention tools

Circumventing internet censorship in Iran can be quite challenging,
particularly since we found numerous circumvention tools to be blocked.

[Psiphon](https://psiphon.ca/) is a popular censorship circumvention
tool in Iran. In 2013, about 1.5 million unique users were
[estimated](https://psiphon.ca/en/blog/psiphon-iranian-election-2013.html)
to connect to Psiphon from inside Iran on a weekly basis to circumvent
internet censorship. But over the last three years, we found psiphon.ca
to be
[blocked](https://explorer.ooni.org/measurement/20170904T101149Z_AS31549_YtoGaLSQDhg9P2c3eZsABt09zrVKhSVCui3rACcYqVJgE6RYrq?input=https:%2F%2Fpsiphon.ca%2F)
across many networks in Iran on various occasions. Internet censorship
though in Iran is non-deterministic, meaning that psiphon.ca did not
always appear to be blocked. Other free software circumvention tools
censored in Iran include
[OpenVPN](https://explorer.ooni.org/measurement/20170829T144146Z_AS12880_d5GXgvFXw2So2rM9NI8DRNNeafsRnH42dBSClVT1eTnURjG3Zp?input=https:%2F%2Fopenvpn.net)
and
[Tor](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.torproject.org).

The [Tor anonymity network](https://www.torproject.org/) is free
software that allows its users to browse the web anonymously and to
circumvent internet censorship. As part of our testing, we found the Tor
network to be
[blocked](https://explorer.ooni.org/measurement/20170808T004237Z_AS197207_yysdxIa15WjQ3pQFt9RLxQc2lRzWFlxQKoQXd6846BUbEYw5gr)
in many networks in Iran, but we also found it to be
[accessible](https://explorer.ooni.org/measurement/20170904T030636Z_AS16322_GfhV8pGIAiuiJPd3hgPW174weSdti8PoI7lH5Mah9RGpWk4UOY)
in other occasions. The reachability of the Tor network was measured
through [OONI’s Vanilla Tor test](https://ooni.org/nettest/vanilla-tor/) which attempts
to successfully bootstrap a connection to the Tor network within a
predefined amount of seconds (300 is the default). Since this test
didn’t manage to establish connections to the Tor network in multiple
networks, access to the Tor network was most likely blocked.

Iranian ISPs were also found to be
[blocking](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.torproject.org)
access to [The Tor Project’s domain](https://www.torproject.org/),
limiting the ability to [download tor software](https://www.torproject.org/download/download-easy.html.en).
This also led to the blocking of The Tor Project’s subdomains, such as
[bridges.torproject.org](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fbridges.torproject.org)
and
[ooni.org](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fooni.org).
[Tor bridges](https://bridges.torproject.org/) are [Tor relays](https://www.eff.org/torchallenge/what-is-tor.html) that enable
users to circumvent the blocking of the Tor network, and to connect to
it even though it may be blocked in a network. While we found the
[domain of Tor bridges to be blocked](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fbridges.torproject.org),
it’s worth emphasizing that we found [some Tor bridges to work in some networks](https://explorer.ooni.org/measurement/20160528T070123Z_AS16322_LQ1A8Q54Eo6AjvRcmc7dZ0432UzXrIXoeGQF1yYwQZQKG23Xjw?input=obfs4%20154.35.22.9:80%20C73ADBAC8ADFDBF0FC0F3F4E8091C0107D093716%20cert%3DgEGKc5WN%2FbSjFa6UkG9hOcft1tuK%2BcV8hbZ0H6cqXiMPLqSbCh2Q3PHe5OOr6oMVORhoJA%20iat-mode%3D0)
in Iran. [OONI](https://ooni.org/), on the other hand, is a
Tor project that [measures internet censorship in more than 200 countries](https://explorer.ooni.org/world/) around the
world, including
[Iran](https://explorer.ooni.org/country/IR). The
[blocking of ooni.org](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fooni.org)
potentially limits Iranians’ ability to access network measurement data
that could serve as evidence of internet censorship in Iran and beyond.
It also potentially limits their ability to read this report.

[Freenet](https://freenetproject.org/) is another anonymity network
whose domain we found to be
[blocked](https://explorer.ooni.org/measurement/20170828T212242Z_AS57563_wi9roMwqCSNCQyP5iWYDxFZLrsnfw9O50rOl8SNrnwGB8la3yN?input=https:%2F%2Ffreenetproject.org%2F)
as part of this study. This peer-to-peer platform allows its users to
[browse and share files anonymously](https://freenetproject.org/pages/about.html), and to
circumvent internet censorship. It’s worth emphasizing that we only
found [Freenet’s domain](https://freenetproject.org/) to be blocked.
It remains unclear if the network itself is being censored (we don’t
have tests to measure that).

We also found a number of popular web proxies to be blocked as well.
These include
[Anonymouse](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fanonymouse.org),
a [web proxy](http://anonymouse.org/) that enables its users to browse
the web and send emails through the Anonymouse server which anonymizes
all transmitted data it receives, as well as
[MegaProxy](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.megaproxy.com),
which [allows](https://www.megaproxy.com/) its users to surf the web
through a web SSL VPN service. Both of these web proxies have been found
to be blocked in numerous other countries as well, more recently in
[Cuba](https://ooni.org/post/cuba-internet-censorship-2017/#anonymity-and-circumvention-tools).
[Anonymizer](https://www.anonymizer.com/), which we found to be
[blocked in Iran](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.anonymizer.com%2F),
offers VPN services that route internet traffic through an encrypted
tunnel, hiding users’ IP addresses and and browsing activities from
other third parties. We also found this site to be [blocked in Indonesia](https://ooni.org/post/indonesia-internet-censorship/#anonymity-tools),
amongst other countries.
[Ultrasurf](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fultrasurf.us)
and [Hotspot Shield](https://explorer.ooni.org/measurement/20170902T181922Z_AS44244_2CCMuqmNwiHf6yIlzCWtaYEAQUrMhgIZpDj0O4kJCNglFdjlCe?input=https:%2F%2Fwww.hotspotshield.com%2F),
also found to be [blocked in Thailand](https://ooni.org/post/thailand-internet-censorship/#anonymity-and-censorship-circumvention),
are amongst the many circumvention tool sites that we found to be
blocked in Iran.

But Iranian ISPs also appear to be taking *extra steps* to limit
censorship circumvention. As part of this study, we found online
translators, such as
[SYSTRAN](https://explorer.ooni.org/measurement/20170901T114827Z_AS12880_xuAfq3KDG1OuG5Wo6MXIXfvurK9qpQap9N4uiowo1NQHO9WkBX?input=http:%2F%2Fwww.systranbox.com)
and [Babylon Translation](https://explorer.ooni.org/measurement/20160728T203537Z_AS31549_cVUwVULt6ZlIiKUzZ1e1ypGVoaUDcHgE4BaHngboTgataWCFWX?input=http:%2F%2Ftranslator.babylon.com),
to be blocked. Pasting a URL into an online translator will provide
access to the site’s content, even if that site is blocked. Online
translators can therefore provide a form of censorship circumvention,
likely explaining the motivation behind their blocking.

All anonymity and circumvention tool sites found to be blocked in Iran
can be viewed [here](/post/iran/ir-blocked-domains.csv).

## Block Me, Block Me Not, Block Me

Internet censorship in Iran appears to be **non-deterministic**. In
multiple occasions, we found Iranian ISPs to be blocking sites, lifting
blocks, and then blocking them again over time. In other words, Iranian
ISPs don’t appear to always block sites consistently across time.
Rather, they appear to flip between blocking and unblocking sites,
possibly in an attempt to create uncertainty on whether sites are in
fact intentionally being censored or not.

The blocking and unblocking of the [National Coalition Against Censorship (NCAC) site](http://ncac.org/) is an example of this. The
table below shows that an HTTP transparent proxy served a block page 103
times, but the same site was also found to be accessible in the same
network once.

| probe_asn | domain   | calc_blockpage | count |
|-----------|----------|----------------|-------|
| AS16322   | `ncac.org` | ir-iframe-1    | 103   |
| AS16322   | `ncac.org` | not-blocked    | 1     |

Similarly, we found ISPs serving block pages multiple times and
occasionally lifting blocks, as illustrated through the other examples
below.

| probe_asn | domain  | calc_blockpage | count |
|-----------|---------|----------------|-------|
| AS16322   | `rsf.org` | ir-iframe-1    | 101   |
| AS16322   | `rsf.org` | not-blocked    | 1     |


| probe_asn | domain          | calc_blockpage | count |
|-----------|-----------------|----------------|-------|
| AS16322   | `womeniniran.com` | ir-iframe-1    | 100   |
| AS16322   | `womeniniran.com` | not-blocked    | 2     |


| probe_asn | domain    | calc_blockpage | count |
|-----------|-----------|----------------|-------|
| AS16322   | `asl19.org` | dns-blk-0      | 102   |
| AS16322   | `asl19.org` | not-blocked    | 1     |

 
| probe_asn | domain     | calc_blockpage | count |
|-----------|------------|----------------|-------|
| AS16322   | `psiphon.ca` | dns-blk-0      | 103   |
| AS16322   | `psiphon.ca` | not-blocked    | 1     |

We also found some ISPs to be blocking the same domains with different
techniques. The example below shows that, in some cases, Aria Shatel
(AS31549) censored bbc.com through the DNS injection of a block page,
while in other cases it used an HTTP transparent proxy to serve a block
page for the same site. The ISP also lifted the block on at least one
occasion.

| probe_asn | domain  | calc_blockpage | count |
|-----------|---------|----------------|-------|
| AS31549   | `bbc.com` | dns-blk-0      | 2     |
| AS31549   | `bbc.com` | ir-iframe-1    | 1     |
| AS31549   | `bbc.com` | dns-blk-0      | 2     |
| AS31549   | `bbc.com` | ir-iframe-1    | 16    |
| AS31549   | `bbc.com` | ir-iframe-1    | 15    |
| AS31549   | `bbc.com` | not-blocked    | 1     |

While in some cases ISPs mostly blocked certain sites
and only lifted blocks occasionally, in other cases we found the
opposite to be true. Google’s example below is quite interesting because
it shows that most of the time, the search engine appears to be
accessible. In this case, Aria Shatel only served a block page for
google.com a few times, possibly in an attempt to make the censorship
less noticeable.

| probe_asn | domain     | calc_blockpage | count |
|-----------|------------|----------------|-------|
| AS31549   | `google.com` | not-blocked    | 15    |
| AS31549   | `google.com` | not-blocked    | 18    |
| AS31549   | `google.com` | not-blocked    | 19    |
| AS31549   | `google.com` | ir-iframe-1    | 18    |
| AS31549   | `google.com` | not-blocked    | 18    |
| AS31549   | `google.com` | not-blocked    | 17    |
| AS31549   | `google.com` | ir-iframe-1    | 19    |
| AS31549   | `google.com` | not-blocked    | 16    |
| AS31549   | `google.com` | not-blocked    | 18    |
| AS31549   | `google.com` | ir-iframe-1    | 19    |
| AS31549   | `google.com` | not-blocked    | 17    |
| AS31549   | `google.com` | not-blocked    | 19    |
| AS31549   | `google.com` | not-blocked    | 18    |
| AS31549   | `google.com` | not-blocked    | 17    |
| AS31549   | `google.com` | not-blocked    | 18    |
| AS31549   | `google.com` | not-blocked    | 18    |
| AS31549   | `google.com` | not-blocked    | 18    |
| AS31549   | `google.com` | ir-iframe-1    | 19    |
| AS31549   | `google.com` | not-blocked    | 18    |
| AS31549   | `google.com` | not-blocked    | 17    |
| AS31549   | `google.com` | ir-iframe-1    | 18    |

Quite similarly, viber.com (a popular communications tool in Iran) was
only found to be blocked once by Aria Shatel (though more times by other
Iranian ISPs). This may suggest that some ISPs in Iran might take social
pressure into account, thus limiting the blocking of popular platforms
and/or making such censorship more subtle. This is also indicated by the
fact that we found
[WhatsApp](https://explorer.ooni.org/measurement/20170904T030602Z_AS16322_Slr4QSUtTroYRQloYgIhatK1Jpwitgm0GWDuGtcJkaUUh4iQH7)
and
[Telegram](https://explorer.ooni.org/measurement/20170913T023324Z_AS16322_UhtHeecpvmOJOmggsdlet7q7KvUB6YP50R5rKOP6IOR7yVuUqC),
which are [popular in Iran](http://techrasa.com/2016/05/13/messaging-apps-used-middle-east/),
to be accessible.

| probe_asn | domain    | calc_blockpage | count |
|-----------|-----------|----------------|-------|
| AS31549   | `viber.com` | ir-iframe-1    | 1     |
| AS31549   | `viber.com` | not-blocked    | 10    |

We found multiple other cases where numerous ISPs across Iran were found
to be flipping between blocking and unblocking sites and services.
The full database of such cases can be found [here](/post/iran/ir-blocked-not-blocked-urls.csv).

## Non-governmental forms of internet censorship

The government is not the only source of internet censorship in Iran.

[Norton](https://explorer.ooni.org/measurement/20170830T070124Z_AS197207_dK5xbieFUtWkyymCiN2txZbuH1crqFIals0EAmzSSsymcfMrfm?input=https:%2F%2Fnorton.com%2F)
(popular [antivirus software](https://norton.com/)) and
[GraphicRiver](https://explorer.ooni.org/measurement/20170903T021755Z_AS16322_m8gKgQgZdu7o7GVe6tZYagB9DVjNLGrzrkUCzWAijzwf5rBQbv?input=http:%2F%2Fgraphicriver.net%2F)
(a [site](https://graphicriver.net/) for graphic designers and
illustrators) were found to be inaccessible from the local vantage
points in Iran that they were tested from. However, unlike all the other
sites presented in this study that were blocked by Iranian ISPs, these
sites appear to be [blocking access from Iran](https://explorer.ooni.org/measurement/20170830T070124Z_AS197207_dK5xbieFUtWkyymCiN2txZbuH1crqFIals0EAmzSSsymcfMrfm?input=https:%2F%2Fnorton.com%2F).
In other words, these sites were found to be blocking all IP addresses
originating from Iran, which is why they weren’t accessible in the
country.

Norton’s [Terms of Service](https://dns.norton.com/terms.html)
explains that, in compliance with U.S. export laws and regulations, its
software and services cannot be made available in Iran (amongst other
countries):

*“Neither the Services of Symantec nor the underlying information or
technology may be downloaded or otherwise provided or made available,
either directly or indirectly, (i) into Cuba, Iraq, Iran, North Korea,
Sudan, Syria or any other country subject to U.S. trade sanctions, to
individuals or entities controlled by such countries, or to nationals or
residents of such countries other than nationals who are lawfully
admitted permanent residents of countries not subject to such sanctions;
or (ii) to anyone on the U.S. Treasury Department's list of Specially
Designated Nationals and Blocked Persons or the U.S. Commerce
Department's Table of Denial Orders. By agreeing to these Terms and
Conditions of Use, you agree to the foregoing and represent and warrant
that you are not located in, under the control of, or a national or
resident of any such country or on any such list.”*

Similarly, GraphicRiver states in its [Terms of Service](https://themeforest.net/legal/market?_ga=2.105170182.408115929.1506015047-1954672825.1506015047#housekeeping)
that it does not make its services available to US sanctioned countries
(like Iran):

*“57. US-specific controls. Envato Market is not available to anyone
located in any U.S. sanctioned countries or to anyone on the U.S
Treasury Department's list of Specially Designated Nationals List (SDN
list). You must not export or re-export Envato Market items to a U.S.
sanctioned country or to anyone on the SDN list.”*

Virus Total, a [site](https://www.virustotal.com/) that enables its
users to upload and scan files and URLs for malware, was also [found to be inaccessible](https://explorer.ooni.org/measurement/20170612T031742Z_AS16322_Gg0hUk9p5DTeHdBDj0jy7vywseo6RK4JgfPt4CtRgHEgZvKsHl?input=https:%2F%2Fwww.virustotal.com)
in Iran. But unlike Norton and GraphicRiver, this site was found to be
blocked by Google. Virus Total uses [Google App Engine (GAE)](https://cloud.google.com/appengine/), a web framework and cloud
computing platform, commonly used for hosting sites and for domain
fronting (a technique for censorship circumvention). As part of this
study, we found that IP addresses originating from Iran were blocked by
Google from accessing GAE, rendering virustotal.com inaccessible in the
country. This has been [known since (at least) 2010](https://groups.google.com/forum/#!topic/google-appengine/ZPhRvtcf8l0)
and, similarly to Norton and GraphicRiver, Google blocks access to GAE
from Iran in compliance with U.S. export laws.

## Acknowledgement of limitations

The findings of this study present various limitations.

The first limitation is associated to the testing period. This study
includes an analysis of [thousands of network measurements](https://api.ooni.io/files/by_country/IR)
that were collected from 60 vantage points in Iran over the last three
years, between 22nd September 2014 to 4th September 2017. Censorship
events that may have occurred before and/or after the testing period are
not analysed as part of this study.

Another limitation is associated to the amount and types of URLs that
were tested for censorship. As mentioned in the methodology section of
this report, OONI’s [Web Connectivity test](https://ooni.org/nettest/web-connectivity/) was run to
examine the accessibility of
[894 URLs](https://github.com/citizenlab/test-lists/blob/master/lists/ir.csv)
that are more relevant to the Iranian context and [1,107 internationally relevant sites](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv).
All of these URLs were selected and categorized in collaboration with
community members over the last years. We acknowledge that some URLs
might potentially be mis-categorized, the selection of URLs may have
been biased, and that the testing sample of URLs might exclude many
other sites that are also blocked in Iran. We therefore encourage
researchers and community members to continue [reviewing and contributing to these test lists](https://ooni.org/get-involved/contribute-test-lists/),
to help improve future research and analysis.

Finally, while network measurements were collected from 60 different
networks in Iran, [OONI’s software tests](https://github.com/TheTorProject/ooni-probe) were not run
consistently across all networks. Stable measurements were collected
from certain vantage points throughout the testing period, but less
stable measurements were also collected from a number of other vantage
points.

# Conclusion

This study reveals and confirms censorship events in Iran through the
analysis of [thousands of network measurements](https://api.ooni.io/files/by_country/IR)
that were collected from 60 local vantage points in Iran over the last
three years. The network measurement data clearly shows how ISPs blocked
sites and services and can therefore serve as **evidence of information
controls** in Iran.

Our main conclusions from this study are summarized below.

1. **The breadth and scale of internet censorship in Iran is pervasive**. We found a wide range of [different types of sites to be blocked](/post/iran/ir-blocked-urls.csv) (expanding beyond those that are illegal). Blocked domains include many news outlets and human rights sites, as well as blogging platforms, communication tools, online social networks, media sharing platforms, search engines, gaming sites, governmental sites, cultural and entertainment sites, amongst many other types of sites.

2. **Iranian ISPs appear to be enforcing a type of “intranet” through censorship.** By blocking access to popular international sites (such as [youtube.com](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.youtube.com), [facebook.com](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=https:%2F%2Fwww.facebook.com%2Fkambizhosseini), and [twitter.com](https://explorer.ooni.org/measurement/20170831T111030Z_AS44244_mV6lnlrp0UDTtLHJBpeBApNkkmKQQqy13siWac0qZPPpmJis9G?input=https:%2F%2Ftwitter.com)), Iranian ISPs appear to be creating a sort of “*intranet”* since non-censored internet activity appears to largely be limited to government-approved sites and services.

3. **Internet censorship in Iran is quite sophisticated.** (1) Iranian ISPs were found to serve block pages through DNS injection *and* through the use of HTTP transparent proxies. (2) We found ISPs to be blocking the same sites with different techniques (Aria Shatel, for example, served [block pages for bbc.com through DNS injection](https://explorer.ooni.org/measurement/20170623T002641Z_AS31549_VVYnsqIsyeuH6LJhOh4zuG11SDZvMsb5CobOyfLEXgj3VDhbBI?input=http:%2F%2Fwww.bbc.com%2Fnews) and [HTTP transparent proxies](https://explorer.ooni.org/measurement/20170328T083801Z_AS31549_eFpUdEKswulxmus8kWISa4glA8BWvPPjUOp0DJu7uKknS74Zwx?input=http:%2F%2Fwww.bbc.com%2Fnews)). (3) ISPs were found to block both the HTTP and HTTPS versions of sites, making censorship circumvention harder. (4) Internet censorship is *reinforced* through the extensive blocking of popular censorship circumvention tools (which is not limited to domains, but expands to the [blocking of the Tor network](https://explorer.ooni.org/measurement/20170808T004237Z_AS197207_yysdxIa15WjQ3pQFt9RLxQc2lRzWFlxQKoQXd6846BUbEYw5gr)). (5) ISPs were found to [*block online translators](https://explorer.ooni.org/measurement/20160728T203537Z_AS31549_cVUwVULt6ZlIiKUzZ1e1ypGVoaUDcHgE4BaHngboTgataWCFWX?input=http:%2F%2Ftranslator.babylon.com), possibly as an *extra step* to limit censorship circumvention.

4. **Shift from “smart filters” to “blanket censorship”?** A few years ago, when sites like Instagram did not support HTTPS, it was [reported](https://motherboard.vice.com/en_us/article/4x38kd/irans-smart-instagram-censorship-isnt-that-smart) that Iranian ISPs only censored certain webpages, rather than blocking access to entire sites. Now, however, we are seeing that Iranian ISPs are [also blocking the HTTPS version of sites](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.instagram.com%2F), since it’s not possible to limit censorship to specific webpages when a site is hosted on HTTPS. This indicates that Iranian ISPs may have shifted their practices from applying “smart filters” (only censoring specific webpages) to a form of “blanket censorship” (censoring entire sites).

5. **Internet censorship in Iran appears to be centralised.** This is strongly suggested by the fact that we found *consistency* in terms of how internet censorship was implemented across networks. ISPs were not only found to be blocking the same sites, but they were also found to be using the same set of censorship techniques.

6. **Internet censorship in Iran is non-deterministic.** ISPs in Iran do *not* appear to block sites consistently across time. Rather, they were found to filp between blocking and unblocking sites, possibly in an attempt to create uncertainty on whether a site is actually censored or to make the censorship more subtle. Interestingly enough, ISPs were found to block some of the more popular sites (such as [google.com](https://explorer.ooni.org/measurement/20170913T033941Z_AS44244_XWbJUSF7A1sEQXM6OyeVxUcXFkHlsSJ8WRc2q7nCBkBYDvjph0?input=http:%2F%2Fwww.google.com%2Fsearch%3Fhl%3Dar%26q%3DKoon%26btnG%3D%25D8%25A5%25D8%25A8%25D8%25AD%25D8%25AB%2521%26lr%3D)) less frequently in comparison to less popular sites. This may suggest a political and/or social cost to censorship, which might be taken into account.

7. **Political relations influence how information controls are implemented in Iran.** This is strongly suggested by the fact that Iranian ISPs were found to block multiple [Israeli](https://explorer.ooni.org/measurement/20170906T030515Z_AS197207_RzGkAOX5mI1Gqp0GlODyuGNCgoyrt9pLHsyaVGIV5rol1tmD3Q?input=http:%2F%2Fwww.mod.gov.il) and [U.S. domains](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=https:%2F%2Fwww.cia.gov). Israeli domains even appear to be [blocked](https://explorer.ooni.org/measurement/20170901T035141Z_AS44244_IvztG4pj6MAMtt5RN6p8cY9AiaxFxE6Pm6mbl7rdmmIMIR5dFN?input=http:%2F%2Fwww.basket.co.il) almost indiscriminately. U.S. export laws, on the other hand, [restrict](https://dns.norton.com/terms.html) the use of services (such as [Norton](https://explorer.ooni.org/measurement/20170830T070124Z_AS197207_dK5xbieFUtWkyymCiN2txZbuH1crqFIals0EAmzSSsymcfMrfm?input=https:%2F%2Fnorton.com%2F), [Virus Total](https://explorer.ooni.org/measurement/20170612T031742Z_AS16322_Gg0hUk9p5DTeHdBDj0jy7vywseo6RK4JgfPt4CtRgHEgZvKsHl?input=https:%2F%2Fwww.virustotal.com), and [Google App Engine](https://groups.google.com/forum/#!topic/google-appengine/ZPhRvtcf8l0)) in Iran.

8. **Internet censorship in Iran appears to reinforce geopolitical dynamics of power.** Over the last century, there has been an ongoing [separatist dispute](https://web.archive.org/web/20120615011857/http://government.arts.cornell.edu/assets/psac/sp09/Smith_Kurdish_Separatism_Feb09_PSAC.pdf) between the Kurdish opposition in western Iran and the Iranian government. According to [Amnesty International](https://www.amnesty.org/en/press-releases/2008/07/iran-end-discrimination-against-kurdish-minority-20080730/), many Kurdish human rights defenders, community activists and journalists have faced arbitrary arrests and prosecution. The blocking of numerous Kurdish sites, including [news outlets](https://explorer.ooni.org/measurement/20170904T034357Z_AS44244_tzAvg8gW5NamMwMUsVje7zudbDz1AkyFzCe3A4evLHXoYMFztM?input=http:%2F%2Fkurdistanpress.com) and [human rights sites](https://explorer.ooni.org/measurement/20170829T230553Z_AS16322_FzDNrDAXLoliG9WJQdIRlSWUvWRSH7hErmPzUgGaNKTqqQ8YLa?input=http:%2F%2Fwww.khrp.org), appears to be a politically motivated decision.

# Acknowledgements

We thank all the anonymous volunteers in Iran who have run and continue
to run OONI Probe, thus making this research possible.
