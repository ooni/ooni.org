---
title: "China is now blocking all language editions of Wikipedia"
author: "iyouport.org, Open Culture Foundation (OCF), Sukhbir Singh (Open Web Fellow, Mozilla Foundation), Arturo Filastò (OONI), Maria Xynou (OONI)"
date: "2019-05-04"
tags: ["china", "wikipedia", "country-cn"]
categories: ["report"]
---

[translation: 中国封锁了所有语言版本的维基百科](/post/2019-china-wikipedia-blocking.zh/)

China recently started blocking all language editions of Wikipedia. Previously, the blocking was limited to the Chinese language edition of Wikipedia (zh.wikipedia.org), but has now expanded to include all `*.wikipedia.org` language editions.

In this post, we share [OONI network measurement data](https://api.ooni.io/files/by_country/CN) on the blocking of Wikipedia in China. We found that all wikipedia.org sub-domains are blocked in China by means of DNS injection and SNI filtering.

## DNS injection

Through the use of [OONI Probe](https://ooni.io/install/), Wikipedia domains have been [tested](https://api.ooni.io/files/by_country/CN) from multiple local vantage points in China since 2015. Most measurements have been collected from China Telecom (AS4134).  

OONI’s [Web Connectivity test](https://ooni.io/nettest/web-connectivity/) (available in the OONI Probe apps) is designed to measure the TCP/IP, HTTP, and DNS blocking of websites. [Network measurement data](https://api.ooni.io/files/by_country/CN) collected through this test has shown that most Wikipedia language editions were previously accessible in China, except for the Chinese edition, which has [reportedly been blocked](https://www.theepochtimes.com/china-now-blocked-from-accessing-wikipedia_1384917.html) since 19th May 2015. 

OONI data shows that China Telecom (AS4134) has been [blocking zh.wikipedia.org since at least the 10th November 2016](https://explorer.ooni.io/measurement/20161110T035949Z_AS4134_oAjg1SM4bjI5yI2D9yhu8Rfq830QL5avcxPg8LmhEAN1u0pvYq?input=http:%2F%2Fzh.wikipedia.org%2Fwiki%2Fwikipedia:%25e9%25a6%2596%25e9%25a1%25b5) (previous OONI measurements show that zh.wikipedia.org was [accessible in March 2015](http://api.ooni.io/files/download/2015-03-04/20150304T232111Z-CN-AS4808-http_requests-no_report_id-0.1.0-probe.yaml) on that network).  

The following chart, based on [OONI data](https://api.ooni.io/files/by_country/CN), illustrates that multiple language editions of Wikipedia have been blocked in China as of April 2019.

![](/post/2019-china-wikipedia-blocking/ooni-china-blocks-wikipedia.png)

**Source:**Blocking of Wikipedia domains in China, Open Observatory of Network Interference (OONI) data: China, [https://api.ooni.io/files/by_country/CN](https://api.ooni.io/files/by_country/CN)  

Our analysis of OONI measurements, used to produce the above chart, is available **[here](/post/2019-china-wikipedia-blocking/20190502-china-wikipedia.csv)**.

OONI measurements show that many of these Wikipedia domains were [previously accessible](https://explorer.ooni.io/measurement/20190218T081331Z_AS4134_2CoUgy8tf1A7DF2JZNghiXWuK7ndJRnTVHsnWTTVjkJFDb1mcd?input=https:%2F%2Fen.wikipedia.org%2Fwiki%2Fthe_holocaust), but all measurements collected from [25th April 2019 onwards](https://explorer.ooni.io/measurement/20190425T070917Z_AS4134_45hNnx6LkceBitzcVB1oAGfpHyJuKFKR7NkLU5XTCdz2JKVPhy?input=https:%2F%2Fen.wikipedia.org) [present the same DNS anomalies](https://explorer.ooni.io/measurement/20190425T070917Z_AS4134_45hNnx6LkceBitzcVB1oAGfpHyJuKFKR7NkLU5XTCdz2JKVPhy?input=https:%2F%2Fen.wikipedia.org) for all Wikipedia sub-domains. The few DNS anomalies that occurred in previous months were false positives, whereas the DNS anomalies from April 2019 onwards show that Wikipedia domains are blocked by means of DNS injection. Most measurements were collected from China Telecom (AS4134).

Since OONI measurements collected from China suggest blocking by means of DNS injection, we can further measure the DNS-based blocking from outside of China as well. To this end, we ran the [OONI Probe DNS injection test](https://github.com/ooni/spec/blob/master/nettests/ts-012-dns-injection.md) from a vantage point outside of the country, pointing towards an IP address in China.

This test relies on the fact that the Chinese firewall will “inject” DNS requests for restricted domains, even if the request is coming from outside the country and directed at an IP address which does not run a DNS resolver. The expectation was, therefore, that if the DNS query timed out, no blocking was happening, but if we saw a response, then that response was injected by the censor.

The OONI Probe DNS injection test is very fast. It allowed us to [scan more than 2,000 Wikipedia domain names](https://api.ooni.io/files/download/2019-04-24/20190424T200655Z-IS-AS47172-dns_injection-20190424T200655Z_AS47172_Peuv89addXJ1NZ5nTzY7i94X0rTag3QqGLwXKQcaoDTnHu9hu7-0.2.0-probe.json) in less than a minute and to determine which ones were blocked.

By analyzing the [results](https://api.ooni.io/files/download/2019-04-24/20190424T200655Z-IS-AS47172-dns_injection-20190424T200655Z_AS47172_Peuv89addXJ1NZ5nTzY7i94X0rTag3QqGLwXKQcaoDTnHu9hu7-0.2.0-probe.json) of the OONI Probe DNS injection test, we were able to understand that the restriction appears to be targeting any subdomain/language edition of wikipedia.org (i.e. `*.wikipedia.org`, `zh.wikipedia.org`, `en.wikipedia.org`, etc.) - including `wikipedia.org` - but to not be affecting any other Wikimedia resources, beyond zh.wikinews.org.

The blocking appears to be targeting wikipedia.org subdomains irrespective of whether they actually exist or not (for example, even [doesnotexist.wikipedia.org](https://api.ooni.io/files/download/2019-04-24/20190424T200655Z-IS-AS47172-dns_injection-20190424T200655Z_AS47172_Peuv89addXJ1NZ5nTzY7i94X0rTag3QqGLwXKQcaoDTnHu9hu7-0.2.0-probe.json) was blocked!). The IP address returned in the injected DNS response also appears to be pretty random (examples of prior work analyzing the distribution of IP addresses returned by the Great Firewall include “[The Great DNS Wall of China](https://censorbib.nymity.ch/pdf/Lowe2007a.pdf)” and “[Towards a Comprehensive Picture of the Great Firewall’s DNS Censorship](https://www.usenix.org/system/files/conference/foci14/foci14-anonymous.pdf)”).

## SNI filtering

To check whether the blocking of Wikipedia domains could be circumvented by merely encrypting DNS traffic, we attempted to enable DNS over HTTPS in Firefox.

To this end, we ran:

```
curl -H 'accept: application/dns-json' https://cloudflare-dns.com/dns-query?name=www.wikipedia.org&type=A
```

We were able to resolve the [www.wikipedia.org](http://www.wikipedia.org) domain name successfully with DNS over HTTPS.

These tests were also validated by [enabling DNS over HTTPS inside of Firefox](https://wiki.mozilla.org/Trusted_Recursive_Resolver).

![](/post/2019-china-wikipedia-blocking/firefox-1.png)

Yet, the page was still not accessible.

![](/post/2019-china-wikipedia-blocking/firefox-2.png)

We were only able to access the bare IP address from China, indicating that SNI filtering may be in place.

![](/post/2019-china-wikipedia-blocking/firefox-3.png)

To further validate the theory that filtering was happening based on [SNI filtering](https://en.wikipedia.org/wiki/Server_Name_Indication), we ran the following curl tests ([we ran similar tests in Venezuela to confirm the same hypothesis](https://ooni.torproject.org/post/venezuela-blocking-wikipedia-and-social-media-2019/)):

```
$ curl -v --connect-to ::www.kernel.org: https://www.wikipedia.org

* Rebuilt URL to: https://www.wikipedia.org/
* Connecting to hostname: www.kernel.org
*   Trying 147.75.46.191...
* TCP_NODELAY set
*   Trying 2604:1380:4080:c00::1...
* TCP_NODELAY set
* Immediate connect fail for 2604:1380:4080:c00::1: 网络不可达
* Connected to www.wikipedia.org (147.75.46.191) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
*   CAfile: /etc/ssl/certs/ca-certificates.crt
  CApath: /etc/ssl/certs
* TLSv1.2 (OUT), TLS header, Certificate Status (22):
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
* Unknown SSL protocol error in connection to www.wikipedia.org:443
* Curl_http_done: called premature == 1
* stopped the pause stream!
* Closing connection 0
curl: (35) Unknown SSL protocol error in connection to www.wikipedia.org:443
```

The above curl test is connecting to [www.kernel.org](http://www.kernel.org) (IP 147.75.46.191), but attempting to do a TLS handshake using the SNI of [www.wikipedia.org](http://www.wikipedia.org). As we can see from the output above, as soon as the `TLS handshake, Client hello` is sent, the connection is aborted.

Conversely, as seen below, if we attempt to use the SNI of [www.kernel.org](http://www.kernel.org) when doing a TLS handshake with [www.wikipedia.org](http://www.wikipedia.org) (we use the `--resolve` option to skip the DNS resolution), the request is successful and we are able to finish the TLS handshake.

```
$ curl -v --resolve 'www.wikipedia.org:443:91.198.174.192' --connect-to ::www.wikipedia.org: https://www.kernel.org

* Added www.wikipedia.org:443:91.198.174.192 to DNS cache
* Rebuilt URL to: https://www.kernel.org/
* Connecting to hostname: www.wikipedia.org
* Hostname www.wikipedia.org was found in DNS cache
*   Trying 91.198.174.192...
* TCP_NODELAY set
* Connected to www.kernel.org (91.198.174.192) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
*   CAfile: /etc/ssl/certs/ca-certificates.crt
  CApath: /etc/ssl/certs
* TLSv1.2 (OUT), TLS header, Certificate Status (22):
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
* SSL connection using TLSv1.2 / ECDHE-ECDSA-AES256-GCM-SHA384
* ALPN, server accepted to use h2
* Server certificate:
*  subject: C=US; ST=California; L=San Francisco; O=Wikimedia Foundation, Inc.; CN=*.wikipedia.org
*  start date: Nov  8 21:21:04 2018 GMT
*  expire date: Nov 22 07:59:59 2019 GMT
*  subjectAltName does not match www.kernel.org
* SSL: no alternative certificate subject name matches target host name 'www.kernel.org'
* Curl_http_done: called premature == 1
* stopped the pause stream!
* Closing connection 0
* TLSv1.2 (OUT), TLS alert, Client hello (1):
curl: (51) SSL: no alternative certificate subject name matches target host name 'www.kernel.org'
```

Based on these tests, we were able to conclude that China Telecom does in fact block all language editions of Wikipedia by means of both DNS injection and SNI filtering. 

Similarly to [censorship implemented in Egypt](https://ooni.torproject.org/post/egypt-internet-censorship/), perhaps this can be viewed as a “[defense in depth](https://en.wikipedia.org/wiki/Defense_in_depth_(computing))” tactic for network filtering. By implementing both DNS and SNI-based filtering, China Telecom creates multiple layers of censorship that make circumvention harder.

The use of an encrypted DNS resolver (such as DNS over HTTPS) together with [Encrypted SNI (ESNI)](https://datatracker.ietf.org/doc/draft-ietf-tls-esni/) could potentially work as a circumvention strategy. Wikipedia.org does not currently support ESNI, but there have been [discussions](https://phabricator.wikimedia.org/T205378) about enabling it.
