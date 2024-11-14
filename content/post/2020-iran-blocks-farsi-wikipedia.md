---
title: "Iran temporarily blocks the Farsi language edition of Wikipedia"
author: "Arturo Filastò (OONI), Maria Xynou (OONI), Nima Fatemi (Kandoo)"
date: "2020-03-04"
tags: ["iran", "censorship", "country-ir"]
categories: ["report"]
---

Over the last days, between 2nd to 3rd March 2020, [OONI measurements](https://explorer.ooni.org/search?probe_cc=IR&until=2020-03-04&domain=fa.wikipedia.org&test_name=web_connectivity)
collected from 6 different networks in Iran showed that access to the
Farsi edition of Wikipedia (fa.wikipedia.org) was temporarily
[blocked](https://explorer.ooni.org/measurement/20200302T194052Z_AS197207_islb8RlGpTL7QYRJW5YqbATYCtS17SkETdmEPpkCQJbeSVtUf7?input=https%3A%2F%2Ffa.wikipedia.org%2F)
by means of **DNS tampering** and **SNI filtering**.

In this post, we share relevant OONI data.

# Blocking of Farsi Wikipedia and Wikinews

In the past, Iran mainly [blocked the HTTP version of specific Wikipedia articles](https://repository.upenn.edu/cgi/viewcontent.cgi?article=1003&context=iranmediaprogram).
But over the last years, this probably wasn’t very noticeable because
Wikipedia used [HTTPS](https://ooni.org/support/glossary/#https) with
HSTS enabled, meaning that Iranian internet users could easily access
the censored pages.

On 2nd and 3rd March 2020, Iran
[blocked](https://explorer.ooni.org/measurement/20200302T194052Z_AS197207_islb8RlGpTL7QYRJW5YqbATYCtS17SkETdmEPpkCQJbeSVtUf7?input=https%3A%2F%2Ffa.wikipedia.org%2F)
access to the entire Farsi language edition of Wikipedia -- not just
specific articles.

When websites are hosted on HTTPS (thereby encrypting connections),
censors cannot limit the blocking to specific web pages. Instead, they
need to make a choice: either block the entire website, or not block it
at all. Often, governments around the world choose the latter, as
blocking access to an entire website can result in public backlash
(especially if that site is popular!). Over the last few days, Iran
[blocked](https://explorer.ooni.org/measurement/20200302T194052Z_AS197207_islb8RlGpTL7QYRJW5YqbATYCtS17SkETdmEPpkCQJbeSVtUf7?input=https%3A%2F%2Ffa.wikipedia.org%2F)
access to the whole [Farsi edition of Wikipedia](https://fa.wikipedia.org/), but the block didn’t last long,
as it was
[lifted](https://explorer.ooni.org/measurement/20200303T171945Z_AS43754_Bg8uw668a7Rsslfw2hAgNlpNK1UbyD1I73j74XqKW1yx3YP3Jo?input=https%3A%2F%2Ffa.wikipedia.org%2F)
the next day.

The following chart illustrates the blocking of the Farsi versions of
Wikipedia (fa.wikipedia.org) and Wikinews (fa.wikinews.org) on 6
different networks in Iran between 2nd to 3rd March 2020.

![Chart: Blocking of Wikipedia in Iran](/post/2020-iran-wikipedia/ir-wikipedia-chart.png)

**Source:** [OONI measurements collected from Iran](https://explorer.ooni.org/search?probe_cc=IR&until=2020-03-04&domain=fa.wikipedia.org&test_name=web_connectivity)
([download the CSV](/post/2020-iran-wikipedia/ir-wikipedia.csv) used to produce the chart)

The block on Wikipedia appears to have been temporary, as all [OONI measurements](https://explorer.ooni.org/search?probe_cc=IR&until=2020-03-04&domain=fa.wikipedia.org&test_name=web_connectivity)
collected from the same 6 networks in Iran from [13:29 UTC on 3rd March 2020](https://explorer.ooni.org/measurement/20200303T132954Z_AS58224_dEHQrTtFeTNNl1WCXZNhVqdRdttAKZo4qIS4bbflGc984VZkX1?input=https%3A%2F%2Ffa.wikipedia.org%2F)
onwards show that ``https://fa.wikipedia.org`` was
[accessible](https://explorer.ooni.org/measurement/20200303T140201Z_AS44244_cxWXQsOzpbIlg9i58PGdXtfL3jNnfSYmSBHbgpO84M8qSdVEdW?input=https%3A%2F%2Ffa.wikipedia.org%2F)
thereafter.

The Farsi edition of Wikinews (fa.wikinews.org) has [remained blocked](https://explorer.ooni.org/measurement/20200303T171945Z_AS43754_Bg8uw668a7Rsslfw2hAgNlpNK1UbyD1I73j74XqKW1yx3YP3Jo?input=https%3A%2F%2Ffa.wikinews.org%2F),
but the site [hasn’t been updated much](https://fa.wikinews.org/wiki/%D9%88%DB%8C%DA%98%D9%87:%D8%AE%D9%88%D8%B1%D8%A7%DA%A9_%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1)
over the last years. Locals in Iran informed us that fa.wikinews.org has
been blocked for years, but this cannot be confirmed with OONI data
since the site has [only been tested with OONI Probe from 2nd March 2020](https://explorer.ooni.org/search?until=2020-03-04&domain=fa.wikinews.org&probe_cc=IR)
onwards. If the site has been blocked all along, that could potentially
explain why the site has received significantly fewer updates in recent
years.

It’s worth highlighting that the mobile version of the Farsi language
edition of Wikipedia (fa.m.wikipedia.org) [remains accessible](https://explorer.ooni.org/measurement/20200302T213422Z_AS43754_Mjs38sohXBf4bgXYY0yjwCRMJHPv5zXfs4MZaDlrdKIonzsT1T?input=https%3A%2F%2Ffa.m.wikipedia.org%2F),
as does the [English version of Wikipedia](https://explorer.ooni.org/measurement/20200302T194052Z_AS197207_islb8RlGpTL7QYRJW5YqbATYCtS17SkETdmEPpkCQJbeSVtUf7?input=https%3A%2F%2Fen.wikipedia.org%2F)
(en.wikipedia.org).

## DNS tampering

OONI measurements show that both
[https://fa.wikipedia.org](https://explorer.ooni.org/search?until=2020-03-04&domain=fa.wikipedia.org&probe_cc=IR)
and
[https://fa.wikinews.org](https://explorer.ooni.org/search?until=2020-03-04&domain=fa.wikinews.org&probe_cc=IR)
were blocked by means of DNS tampering.

The example below (taken from an [OONI measurement](https://explorer.ooni.org/measurement/20200302T213422Z_AS43754_Mjs38sohXBf4bgXYY0yjwCRMJHPv5zXfs4MZaDlrdKIonzsT1T?input=https%3A%2F%2Ffa.wikipedia.org%2F))
shows that when the hostname ``fa.wikipedia.org`` was looked up Iran,
the DNS answer contained the [private IPv4 address](https://en.wikipedia.org/wiki/Private_network#Private_IPv4_addresses)
``10.10.34.35``, which is commonly used to serve the Iranian
blockpage.

![DNS tampering: Wikipedia](/post/2020-iran-wikipedia/ir-dns-wikipedia.png)

**Source:** [OONI measurement testing fa.wikipedia.org in Iran](https://explorer.ooni.org/measurement/20200302T213422Z_AS43754_Mjs38sohXBf4bgXYY0yjwCRMJHPv5zXfs4MZaDlrdKIonzsT1T?input=https%3A%2F%2Ffa.wikipedia.org%2F)

The same IP is also returned when looking up ``fa.wikinews.org``, as can
be seen from the following [OONI measurement](https://explorer.ooni.org/measurement/20200302T134827Z_AS44244_Qm9ulYj9wQB0UxS24OKQM0yLfcuCsDhjk80TSnUfxoLiSH1Je0?input=https%3A%2F%2Ffa.wikinews.org%2F).

![DNS tampering: Wikinews](/post/2020-iran-wikipedia/ir-dns-wikinews.png)

**Source:** [OONI measurement testing fa.wikinews.org in Iran](https://explorer.ooni.org/measurement/20200302T134827Z_AS44244_Qm9ulYj9wQB0UxS24OKQM0yLfcuCsDhjk80TSnUfxoLiSH1Je0?input=https%3A%2F%2Ffa.wikinews.org%2F)

While most OONI measurements clearly show that fa.wikipedia.org and
fa.wikinews.org were blocked by means of DNS tampering, some OONI
measurements [present an HTTP failure](https://explorer.ooni.org/measurement/20200303T140859Z_AS56402_jxEZn9MWQ9ybcJQWVCZ4M2qr4Iwf2PDtHgMlD6AG9ZuvNeCKZF?input=https%3A%2F%2Ffa.wikinews.org%2F)
(instead of a DNS inconsistency error). This is likely due to the fact
that the real DNS query answer reached the end user faster than the
spoofed ``10.10.34.35`` one, therefore leading to a successful DNS
resolution. The fact that, although the DNS query succeeds, the
measurement still shows a block is an indication that SNI filtering may
be occurring, which we confirmed by running some manual tests (discussed
in the following section).

## SNI filtering

In order to determine if ``fa.wikipedia.org`` was *also* blocked by means of
SNI filtering, we ran some manual tests using dig and curl from a
vantage point located inside Iran.

As we can see from the following dig test results, this host is
experiencing DNS based filtering, similarly to what is observed in the
[OONI Probe test results](https://explorer.ooni.org/measurement/20200302T213422Z_AS43754_Mjs38sohXBf4bgXYY0yjwCRMJHPv5zXfs4MZaDlrdKIonzsT1T?input=https%3A%2F%2Ffa.wikipedia.org%2F)
discussed previously.

```
dig fa.wikipedia.org @1.1.1.1
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 3100
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0
;; QUESTION SECTION:
;fa.wikipedia.org.		IN	A
;; ANSWER SECTION:
fa.wikipedia.org.	1	IN	A	10.10.34.35
;; Query time: 75 msec
;; WHEN: Mon Mar 02 12:46:27 EST 2020
;; MSG SIZE  rcvd: 50
```
```
dig fa.wikipedia.org @8.8.8.8
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 17890
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0
;; QUESTION SECTION:
;fa.wikipedia.org.		IN	A
;; ANSWER SECTION:
fa.wikipedia.org.	1	IN	A	10.10.34.35
;; Query time: 58 msec
;; WHEN: Mon Mar 02 12:47:33 EST 2020
;; MSG SIZE  rcvd: 50
```

When we circumvent the DNS filtering by using DNS over TCP and attempt
to establish a connection to fa.wikipedia.org using curl, we notice that
the connection is interrupted during the TLS handshake, as soon as the
Client hello is sent.

```
curl -v https://fa.wikipedia.org
* Expire in 0 ms for 6 (transfer 0x56317b8c2f50)
[ SNIP ]
* Expire in 4 ms for 1 (transfer 0x56317b8c2f50)
*   Trying 91.198.174.192...
* TCP_NODELAY set
* Expire in 200 ms for 4 (transfer 0x56317b8c2f50)
* Connected to fa.wikipedia.org (91.198.174.192) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* successfully set certificate verify locations:
*   CAfile: none
  CApath: /etc/ssl/certs
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to fa.wikipedia.org:443
* Closing connection 0
curl: (35) OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to fa.wikipedia.org:443
```

If instead we set the SNI to dyna.wikimedia.org and attempt a connection
of fa.wikipedia.org, it goes through.

```
curl -vH "Host: fa.wikipedia.org" https://dyna.wikimedia.org
* Expire in 0 ms for 6 (transfer 0x5621e6548f50)
[ SNIP ]
* Expire in 200 ms for 1 (transfer 0x5621e6548f50)
*   Trying 91.198.174.192...
* TCP_NODELAY set
* Expire in 200 ms for 4 (transfer 0x5621e6548f50)
* Connected to dyna.wikimedia.org (91.198.174.192) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* successfully set certificate verify locations:
*   CAfile: none
 CApath: /etc/ssl/certs
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.2 (IN), TLS handshake, Certificate (11):
* TLSv1.2 (IN), TLS handshake, Server key exchange (12):
* TLSv1.2 (IN), TLS handshake, Server finished (14):
* TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
* TLSv1.2 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.2 (OUT), TLS handshake, Finished (20):
* TLSv1.2 (IN), TLS handshake, Finished (20):
* SSL connection using TLSv1.2 / ECDHE-ECDSA-CHACHA20-POLY1305
* ALPN, server accepted to use h2
* Server certificate:
*  subject: C=US; ST=California; L=San Francisco; O=Wikimedia Foundation,Inc.; CN=*.wikipedia.org
*  start date: Nov 12 00:00:00 2019 GMT
*  expire date: Oct  6 12:00:00 2020 GMT
*  subjectAltName: host "dyna.wikimedia.org" matched cert's "*.wikimedia.org"
*  issuer: C=US; O=DigiCert Inc; OU=www.digicert.com; CN=DigiCert SHA2 High Assurance Server CA
*  SSL certificate verify ok.
* Using HTTP2, server supports multi-use
* Connection state changed (HTTP/2 confirmed)
* Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
* Using Stream ID: 1 (easy handle 0x5621e6548f50)
> GET / HTTP/2
> Host: fa.wikipedia.org
> User-Agent: curl/7.64.0
> Accept: */*
>
* Connection state changed (MAX_CONCURRENT_STREAMS == 100)!
< HTTP/2 301
< date: Mon, 02 Mar 2020 12:47:02 GMT
[ SNIP ]
< location: https://fa.wikipedia.org/wiki/%D8%B5%D9%81%D8%AD%D9%87%D9%94_%D8%A7%D8%B5%D9%84%DB%8C
[ SNIP ]
* Connection #0 to host dyna.wikimedia.org left intact
```

This suggests that ``fa.wikipedia.org`` was blocked by means of SNI
filtering, similarly to what we [previously observed in Iran when Instagram was blocked in 2018 amid protests](https://ooni.org/post/2018-iran-protests-pt2/).

By running a similar curl based test, we can also see that the same
pattern of blocking is affecting ``fa.wikinews.org`` (which [remains blocked](https://explorer.ooni.org/measurement/20200303T171945Z_AS43754_Bg8uw668a7Rsslfw2hAgNlpNK1UbyD1I73j74XqKW1yx3YP3Jo?input=https%3A%2F%2Ffa.wikinews.org%2F)).

```
# curl -v --connect-to ::www.kernel.org: https://fa.wikinews.org
* Expire in 0 ms for 6 (transfer 0x55f763d10f50)
* Connecting to hostname: www.kernel.org
[ SNIP ]
*   Trying 136.144.49.103...
* TCP_NODELAY set
* Expire in 149911 ms for 3 (transfer 0x55f763d10f50)
* Expire in 200 ms for 4 (transfer 0x55f763d10f50)
* Connected to www.kernel.org (136.144.49.103) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* successfully set certificate verify locations:
*   CAfile: none
 CApath: /etc/ssl/certs
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to fa.wikinews.org:443
* Closing connection 0
curl: (35) OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to fa.wikinews.org:443
```

In this case, when we attempt to establish a TLS connection to an
unrelated domain name (www.kernel.org), SNI
blocking is closing the connection during the ClientHello stage.

# Further testing

Internet censorship in Iran is [sophisticated and non-deterministic](https://ooni.org/post/iran-internet-censorship/),
changing on an ongoing basis. To more accurately measure internet
censorship over time, larger volumes of longitudinal measurements are
necessary.

As this study was carried out through the use of [free and open source software](https://github.com/ooni) ([OONI Probe](https://ooni.org/install/)) and [open
data](https://ooni.org/data/), it can be expanded upon by researchers
in Iran and around the world (though participating in censorship
measurement research can be [risky](https://ooni.org/about/risks)).

Through the use of the [OONI Probe mobile app](https://ooni.org/install/), you can test 28 Wikipedia sites by
tapping on the following button.

{{<oonibtn text="Wikipedia" href="https://run.ooni.org/v2/10054">}}

Unless you opt-out in the OONI Probe app settings, all measurements will
be [openly published](https://ooni.org/data/).

We thank all [OONI Probe](https://ooni.org/install/) users in Iran for
contributing measurements and making this study possible.
