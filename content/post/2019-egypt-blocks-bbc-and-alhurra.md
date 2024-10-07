---
title: "Egypt blocks BBC and Alhurra: Expanding media censorship amid political unrest"
author: "Ramy Raoof, Mohamed El-Taher, Mohamed Tita, Arturo Filastò, Maria Xynou"
date: "2019-09-26"
tags: ["egypt", "censorship", "country-eg", "theme-news_media"]
categories: ["report"]
---

Last weekend, [protests erupted in Egypt](https://www.bbc.com/news/world-middle-east-49786367) in response
to corruption allegations against President Abdul Fattah al-Sisi’s
government.

Protests have been rare since President Sisi took power in 2014, but
amid policies of economic austerity and recent corruption allegations,
hundreds of Egyptians took to the streets. It was subsequently
[reported](https://netblocks.org/reports/facebook-messenger-social-media-and-news-sites-disrupted-in-egypt-amid-protests-eA1Jd7Bp)
that BBC News and the US-funded Alhurra news website were amongst
blocked services. The head of Egypt’s Supreme Council for Media
Regulation [reportedly stated](https://cpj.org/2019/09/egypt-authorities-arrest-3-journalists-block-websi.php)
that the BBC and other news websites may have been blocked because of
their “inaccurate” coverage of the protests.

As part of a crackdown on protests (more of which are
[expected](https://www.theguardian.com/world/2019/sep/26/over-1900-arrested-as-egypt-braces-for-more-protests)
tomorrow, 27th September 2019), Egyptian security forces [reportedly arrested at least 59 demonstrators](https://www.amnesty.org/en/latest/news/2019/09/egypt-world-leaders-must-act-to-stop-president-al-sisis-repressive-crackdown/)
(the Egyptian Center for Economic and Social Rights
[reported](https://docs.google.com/spreadsheets/d/1MtnmLXnma3Dalo8fdWddbTuuCdv-RscnrV6oUjIe2Tk/edit?fbclid=IwAR1nc7ajQcnF8Bp4knKlxjG1oVJ0vYi0pNKdAAvr2u_dPfvSYMP8yBdxvbk#gid=1088629803)
that hundreds of individuals linked to the protests have been arrested
over the last week).

Unfortunately, media censorship is pervasive in Egypt, as documented
through our [previous studies](https://ooni.io/documents/Egypt-Internet-Censorship-AFTE-OONI-2018-07.pdf).
Thanks to ongoing [OONI Probe](https://ooni.io/install/) testing in
Egypt, we were able to check measurements on the [testing of bbc.com](https://explorer.ooni.org/search?until=2019-09-26&domain=www.bbc.com&probe_cc=EG)
and
[alhurra.com](https://explorer.ooni.org/search?until=2019-09-26&domain=www.alhurra.com&probe_cc=EG).
We also corroborated OONI findings with manual curl tests performed in
Egypt on Telecom Egypt (AS8452) with the help of our local partners.

In this report, we share [OONI network measurement data from the testing of bbc.com](https://explorer.ooni.org/search?until=2019-09-26&domain=www.bbc.com&probe_cc=EG)
and
[alhurra.com](https://explorer.ooni.org/search?until=2019-09-26&domain=www.alhurra.com&probe_cc=EG),
and explain how the blocking was implemented on a technical level. We
also share some recommendations on what these website owners can do to
improve the resilience of their sites to internet censorship.

* [BBC](#BBC)

* [Alhurra](#Alhurra)

* [Conclusion](#Conclusion)

# BBC

BBC and hundreds of other media websites are
[measured](https://explorer.ooni.org/search?until=2019-09-26&probe_cc=EG&test_name=web_connectivity)
for censorship in Egypt fairly regularly through the use of [OONI Probe](https://ooni.io/install/). Specifically, OONI Probe include a
test - called [Web Connectivity](https://ooni.io/nettest/web-connectivity/) - designed to
measure the DNS, TCP/IP, and HTTP blocking of websites. This testing has
previously [unveiled the blocking of hundreds of media websites](https://ooni.io/documents/Egypt-Internet-Censorship-AFTE-OONI-2018-07.pdf)
in Egypt.

As of 22nd September 2019 (coinciding with Egypt’s protests last
weekend), OONI measurements started [showing signs of interference when testing bbc.com](https://explorer.ooni.org/search?until=2019-09-26&domain=www.bbc.com&probe_cc=EG)
in Egypt.

In particular, we observe that several measurements resulted in TLS
errors on [Telecom Egypt (AS8452)](https://explorer.ooni.org/measurement/20190925T123505Z_AS8452_AengvAPQR19gEwSJlbI6QNIr2tgysRD5Apb8nCxXlHtuyHh0aF?input=http%3A%2F%2Fwww.bbc.com%2Fnews)
and [Orange Egypt (AS37069)](https://explorer.ooni.org/measurement/20190922T172806Z_AS37069_7bnh3ifWTQXLc1XBrgp9HuqnEW5OplnWMbjQ0I5h8iVZiLdPoc?input=https%3A%2F%2Fwww.bbc.com%2Fnews).
Other measurements, collected from [Vodafone Egypt (AS36935)](https://explorer.ooni.org/measurement/20190922T105606Z_AS36935_hRGq3a52FYoCY423rzA0QxLZ5EWfKYcvPBkFf363IoX4u1dvyZ?input=https://www.bbc.com),
presented a timeout error when trying to retrieve the website content.

To further support these results, we coordinated with groups in Egypt to
collect more data via manual testing (performed on Telecom Egypt).

```
curl -v --connect-to ::www.kernel.org: https://www.bbc.com/arabic
* Connecting to hostname: www.kernel.org
* Trying 136.144.49.103:443...
* TCP_NODELAY set
* Connected to www.kernel.org (136.144.49.103) port 443 (#0)
* Initializing NSS with certpath: sql:/etc/pki/nssdb
* CAfile: none
CApath: none
* loaded libnssckbi.so
* NSS error -5938 (PR_END_OF_FILE_ERROR)
* Encountered end of file
* Closing connection 0
curl: (35) Encountered end of file
```

We can see that even when connecting to an unrelated server
(www.kernel.org), but attempting a TLS handshake for www.bbc.com, the
connection was interrupted during the handshake.

On the other hand, when we connect to bbc.com directly, but use
www.kernel.org in the TLS handshake, the connection goes through, as is
evident in the following curl request extract.

```
curl -v --connect-to :: www.bbc.com: https://www.kernel.org
*   Trying 151.101.240.81:80...
* TCP_NODELAY set
* Connected to www.bbc.com (151.101.240.81) port 80 (#0)
> GET / HTTP/1.1
> Host: www.bbc.com
> User-Agent: curl/7.66.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 301 Moved Permanently
< Server: Apache
< x-bbc-no-scheme-rewrite: 1
< X-Cache-Action: HIT
< Cache-Control: max-age=3600
< X-Cache-Age: 2747
< Content-Type: text/html; charset=iso-8859-1
< Location: https://www.bbc.com/
< X-PAL-Host: pal149.back.live.telhc.local:80
< Content-Length: 228
< Accept-Ranges: bytes
< Date: Wed, 25 Sep 2019 16:52:23 GMT
< Via: 1.1 varnish
< Age: 2942
< Connection: keep-alive
< X-Fastly-Cache-Status: HIT
< X-Served-By: cache-mxp19848-MXP
< X-Cache: HIT
< X-Cache-Hits: 15, 21
< X-Timer: S1569430343.142910,VS0,VE0
< Vary: Accept-Encoding
< 
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>301 Moved Permanently</title>
</head><body>
<h1>Moved Permanently</h1>
<p>The document has moved <a href="https://www.bbc.com/">here</a>.</p>
</body></html>
* Connection #0 to host www.bbc.com left intact
*   Trying 136.144.49.103:443...
* TCP_NODELAY set
* Connected to www.kernel.org (136.144.49.103) port 443 (#1)
* Initializing NSS with certpath: sql:/etc/pki/nssdb
*   CAfile: none
  CApath: none
* loaded libnssckbi.so
* ALPN, server accepted to use http/1.1
* SSL connection using TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
* Server certificate:
* 	subject: CN=kernel.org,OU=PositiveSSL Multi-Domain,OU=Domain Control Validated
* 	start date: Oct 11 00:00:00 2016 GMT
* 	expire date: Oct 11 23:59:59 2019 GMT
* 	common name: kernel.org
* 	issuer: CN=Gandi Standard SSL CA 2,O=Gandi,L=Paris,ST=Paris,C=FR
> GET / HTTP/1.1
> Host: www.kernel.org
> User-Agent: curl/7.66.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Server: nginx
< Date: Wed, 25 Sep 2019 16:54:58 GMT
< Content-Type: text/html
< Content-Length: 16613
< Last-Modified: Tue, 24 Sep 2019 19:55:34 GMT
< Connection: keep-alive
< X-Frame-Options: DENY
< X-Content-Type-Options: nosniff
< Strict-Transport-Security: max-age=15768001
< Accept-Ranges: bytes
< 
<!DOCTYPE html>
<html lang="en">
<head>
[ SNIP ]
```

This is quite a strong indication of the presence of some form of Deep
Packet Inspection (DPI) technology that is aware of TLS and which is
most likely fingerprinting the SNI field of the TLS handshake.

# Alhurra

In the case of Alhurra, we also observe that, as of 22nd September 2019,
attempted connections to the site failed consistently, as illustrated in
the following chart.

![Chart: Blocking of BBC and Alhurra in Egypt](/post/egypt-internet-censorship/eg-bbc-alhurra-2019.png)

**Source:** OONI measurements: Egypt, https://explorer.ooni.org/search?until=2019-09-26&probe_cc=EG

All OONI measurements collected on 22nd September 2019 presented the
same type of http_experiment_failure (connection_reset), strongly
suggesting that alhurra.com was blocked. We observe these anomalies on
two tested networks: [Vodafone Egypt (AS36935)](https://explorer.ooni.org/search?until=2019-09-26&domain=www.alhurra.com&probe_cc=EG&probe_asn=AS36935&test_name=web_connectivity)
and [Telecom Egypt (AS8452)](https://explorer.ooni.org/search?until=2019-09-26&domain=www.alhurra.com&probe_cc=EG&probe_asn=AS8452&test_name=web_connectivity).

To corroborate OONI measurement findings and explore further, we also
performed manual tests from the Telecom Egypt (AS8452) network and
reached very similar conclusions to those for bbc.com.

Connecting to an unrelated server, but using the www.alhurra.com domain
in the TLS handshake, results in an unsuccessful connection, as
demonstrated below.

```
curl -v --connect-to ::www.kernel.org: https://www.alhurra.com/
* Connecting to hostname: www.kernel.org
*   Trying 136.144.49.103:443...
* TCP_NODELAY set
* Connected to www.kernel.org (136.144.49.103) port 443 (#0)
* Initializing NSS with certpath: sql:/etc/pki/nssdb
*   CAfile: none
  CApath: none
* loaded libnssckbi.so
* NSS error -5938 (PR_END_OF_FILE_ERROR)
* Encountered end of file
* Closing connection 0
curl: (35) Encountered end of file
```

Conversely, we are able to establish a connection to www.alhurra.com if
we use a different domain in the TLS handshake.

```
curl -v --connect-to :: www.alhurra.com: https://www.kernel.org
*   Trying 23.40.114.89:80...
* TCP_NODELAY set
* Connected to www.alhurra.com (23.40.114.89) port 80 (#0)
> GET / HTTP/1.1
> Host: www.alhurra.com
> User-Agent: curl/7.66.0
> Accept: */*
> 
* Recv failure: Connection reset by peer
* Closing connection 0
curl: (56) Recv failure: Connection reset by peer
*   Trying 136.144.49.103:443...
* TCP_NODELAY set
* Connected to www.kernel.org (136.144.49.103) port 443 (#1)
* Initializing NSS with certpath: sql:/etc/pki/nssdb
*   CAfile: none
  CApath: none
* loaded libnssckbi.so
* ALPN, server accepted to use http/1.1
* SSL connection using TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
* Server certificate:
* 	subject: CN=kernel.org,OU=PositiveSSL Multi-Domain,OU=Domain Control Validated
* 	start date: Oct 11 00:00:00 2016 GMT
* 	expire date: Oct 11 23:59:59 2019 GMT
* 	common name: kernel.org
* 	issuer: CN=Gandi Standard SSL CA 2,O=Gandi,L=Paris,ST=Paris,C=FR
> GET / HTTP/1.1
> Host: www.kernel.org
> User-Agent: curl/7.66.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Server: nginx
< Date: Wed, 25 Sep 2019 17:09:15 GMT
< Content-Type: text/html
< Content-Length: 16613
< Last-Modified: Tue, 24 Sep 2019 19:55:34 GMT
< Connection: keep-alive
< X-Frame-Options: DENY
< X-Content-Type-Options: nosniff
< Strict-Transport-Security: max-age=15768001
< Accept-Ranges: bytes
< 
<!DOCTYPE html>
<html lang="en">
<head>
        <title>The Linux Kernel Archives</title>
```

These results offer a strong indication that the blocking is happening
by means of SNI filtering.

# Conclusion

Amid protests, both bbc.com and alhurra.com were blocked in Egypt on
22nd September 2019, as suggested by both OONI measurements and manual
curl testing.

During previous investigations, we
[found](https://ooni.io/documents/Egypt-Internet-Censorship-AFTE-OONI-2018-07.pdf)
that Egyptian ISPs reset connections through the use of Deep Packet
Inspection (DPI) equipment. Manual testing performed for
bbc.com and alhurra.com suggests that it’s most likely the case (at least on TEData)
that censorship is implemented by means of DPI.

Based on the results we gathered, it appears that bbc.com & allhurra.com
could benefit from supporting **Encrypted SNI** on their backend
servers. By doing so, it may be possible to circumvent the block,
assuming that the browser used supports this feature (currently Firefox
supports it).

As [more protests are planned](https://www.theguardian.com/world/2019/sep/26/over-1900-arrested-as-egypt-braces-for-more-protests)
tomorrow, 27th September 2019, there is the risk that further censorship
events may be triggered in Egypt. This study can be expanded upon
through the use of [OONI Probe](https://ooni.io/install/) for further
testing. [OONI Run](https://run.ooni.io) can be used to generate
shareable links that enable the coordinated testing of specific
websites. All [OONI network measurement data](https://ooni.io/data/)
is openly published every day.

We thank all OONI Probe users in Egypt who made this study possible.
