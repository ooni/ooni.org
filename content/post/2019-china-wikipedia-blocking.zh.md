---
title: "中国封锁了所有语言版本的维基百科"
author: "iyouport.org, Open Culture Foundation (OCF), Sukhbir Singh (Open Web Fellow, Mozilla Foundation), Arturo Filastò (OONI), Maria Xynou (OONI)"
date: "2019-05-04"
tags: ["china", "wikipedia", "country-cn"]
categories: ["report"]
---

中国最近开始封锁所有语言版本的维基百科。 以前，封锁仅限于维基百科的中文版（zh.wikipedia.org），但现在已经扩展到了所有语言`*.wikipedia.org`的版本。

我们将在本文分享OONI对于中国封锁维基百科的[网络测量数据](https://api.ooni.io/files/by_country/CN)。 我们发现所有wikipedia.org的子域名在中国都被通过DNS注入和SNI过滤的方式封锁了。

## DNS注入

通过使用[OONI Probe](https://ooni.io/install/)，自2015年以来，我们已经在中国的多个地区对维基百科域名进行了[测试](https://api.ooni.io/files/by_country/CN)。大多数测试数据都是从中国电信（AS4134）收集的。

OONI的[Web连通性测试](https://ooni.io/nettest/web-connectivity/)（在OONI Probe应用程序中提供）旨在测量基于TCP/IP，HTTP和DNS的对网站的封锁。 通过此测试收集的[网络测量数据](https://api.ooni.io/files/by_country/CN)显示，在以前，除了中文版之外的大多数维基百科语言版本以前都可在中国访问，中文版[据报道](https://www.theepochtimes.com/china-now-blocked-from-accessing-wikipedia_1384917.html)自2015年5月19日以来一直被封锁。

OONI数据显示中国电信（AS4134）[至少从2016年11月10日开始封锁zh.wikipedia.org](https://explorer.ooni.io/measurement/20161110T035949Z_AS4134_oAjg1SM4bjI5yI2D9yhu8Rfq830QL5avcxPg8LmhEAN1u0pvYq?input=http:%2F%2Fzh.wikipedia.org%2Fwiki%2Fwikipedia:%25e9%25a6%2596%25e9%25a1%25b5)（之前的OONI测试表明[2015年3月zh.wikipedia.org是可访问的](http://api.ooni.io/files/download/2015-03-04/20150304T232111Z-CN-AS4808-http_requests-no_report_id-0.1.0-probe.yaml)）。

下图基于[OONI数据](https://api.ooni.io/files/by_country/CN)，说明在2019年4月，多种语言版本的维基百科在中国被封锁。

![](/post/2019-china-wikipedia-blocking/ooni-china-blocks-wikipedia.png)

我们可以在**[这里](/post/2019-china-wikipedia-blocking/20190502-china-wikipedia.csv)**获得对用于生成上图的OONI测量的分析。

OONI测量结果表明，许多维基百科域名[之前都可以访问](https://explorer.ooni.io/measurement/20190218T081331Z_AS4134_2CoUgy8tf1A7DF2JZNghiXWuK7ndJRnTVHsnWTTVjkJFDb1mcd?input=https:%2F%2Fen.wikipedia.org%2Fwiki%2Fthe_holocaust)，但从[2019年4月25日开始](https://explorer.ooni.io/measurement/20190425T070917Z_AS4134_45hNnx6LkceBitzcVB1oAGfpHyJuKFKR7NkLU5XTCdz2JKVPhy?input=https:%2F%2Fen.wikipedia.org)收集的所有测量数据都显示了所有维基百科子域名的[相同DNS异常](https://explorer.ooni.io/measurement/20190425T070917Z_AS4134_45hNnx6LkceBitzcVB1oAGfpHyJuKFKR7NkLU5XTCdz2JKVPhy?input=https:%2F%2Fen.wikipedia.org)。 前几个月发生的少数DNS异常是误报，而2019年4月以来的DNS异常显示维基百科域名被通过DNS注入封锁。 大多数测量数据来自中国电信（AS4134）。

由于从中国收集的OONI测量结果表明封锁是通过DNS注入进行的，我们还可以进一步从中国以外测量基于DNS的封锁。 为此，我们从外国进行了[OONI Probe DNS注入测试](https://github.com/ooni/spec/blob/master/nettests/ts-012-dns-injection.md)，指向中国的IP地址。

此测试依赖于中国防火墙将“注入”受限域名的DNS请求这一事实，即使该请求来自国外并且指向的IP地址其实并不提供DNS解析服务。 因此，期望是，如果DNS查询超时，就说明没有封锁，但如果我们看到响应，那么就说明响应被审查注入了。

OONI Probe DNS注入测试速度非常快。 它能让我们在不到一分钟的时间内[扫描2,000多个维基百科域名](https://api.ooni.io/files/download/2019-04-24/20190424T200655Z-IS-AS47172-dns_injection-20190424T200655Z_AS47172_Peuv89addXJ1NZ5nTzY7i94X0rTag3QqGLwXKQcaoDTnHu9hu7-0.2.0-probe.json)，并确定哪些域名被封锁。

通过分析OONI Probe DNS注入测试的[结果](https://api.ooni.io/files/download/2019-04-24/20190424T200655Z-IS-AS47172-dns_injection-20190424T200655Z_AS47172_Peuv89addXJ1NZ5nTzY7i94X0rTag3QqGLwXKQcaoDTnHu9hu7-0.2.0-probe.json)，我们发现封锁针对的是wikipedia.org的任何子域名/语言版本（如`*.wikipedia.org`, `zh.wikipedia.org`, `en.wikipedia.org`等。）——包括`wikipedia.org`——但不影响zh.wikinews.org之外的任何其他维基媒体（Wikimedia）资源。

封锁针对wikipedia.org的子域名而不管它们是否存在（例如，甚至[donotexist.wikipedia.org](https://api.ooni.io/files/download/2019-04-24/20190424T200655Z-IS-AS47172-dns_injection-20190424T200655Z_AS47172_Peuv89addXJ1NZ5nTzY7i94X0rTag3QqGLwXKQcaoDTnHu9hu7-0.2.0-probe.json)都被封锁了！）。 被注入DNS响应中返回的IP地址似乎也是随机的（先前分析防火墙返回的IP地址分布的工作的例子包括“[中国的DNS长城](https://censorbib.nymity.ch/pdf/Lowe2007a.pdf)”和“[全面了解防火墙DNS审查的图景](https://www.usenix.org/system/files/conference/foci14/foci14-anonymous.pdf)”）。

## SNI过滤

为了检查是否可以通过仅加密DNS流量来对维基百科域名的封锁阻止，我们尝试在Firefox中启用DNS over HTTPS。

为此, 我们运行:

```
curl -H 'accept: application/dns-json' https://cloudflare-dns.com/dns-query?name=www.wikipedia.org&type=A
```

我们能够通过DNS over HTTPS成功解析[www.wikipedia.org](http://www.wikipedia.org)域名

这些测试也可以通过[在Firefox中启用DNS over HTTPS](https://wiki.mozilla.org/Trusted_Recursive_Resolver)来验证。

![](/post/2019-china-wikipedia-blocking/firefox-1.png)

但是，封锁仍然存在。

![](/post/2019-china-wikipedia-blocking/firefox-2.png)

从中国只能直接访问IP地址，表明可能存在SNI过滤。

![](/post/2019-china-wikipedia-blocking/firefox-3.png)

为了进一步验证封锁是基于[SNI过滤](https://en.wikipedia.org/wiki/Server_Name_Indication)的假设，我们进行了以下curl测试（[我们在委内瑞拉进行了类似的测试以确认相同的假设](https://ooni.torproject.org/post/venezuela-blocking-wikipedia-and-social-media-2019/)）：

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

上面的curl测试连接到www.kernel.org（IP 147.75.46.191），但尝试使用www.wikipedia.org的SNI进行TLS握手。 正如我们从上面的输出中看到的，`TLS handshake, Client hello`一发出，连接就中断了。

相反，如下所示，如果我们在与www.wikipedia.org进行TLS握手时尝试使用www.kernel.org的SNI（我们使用`--resolve`选项跳过DNS解析），请求是成功的并且能够完成TLS握手。

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

基于这些测试，我们得出结论，中国电信确实通过DNS注入和SNI过滤来封锁维基百科的所有语言版本。

与[在埃及实施的审查](https://ooni.torproject.org/post/egypt-internet-censorship/)相似，也许这可以被视为网络封锁的“[纵深防御](https://en.wikipedia.org/wiki/Defense_in_depth_(computing))”策略。 通过实施基于DNS和SNI的过滤，中国电信创建了多层审查制度，使翻墙更加困难。

使用加密的DNS解析（例如DNS over HTTPS）以及[加密的SNI（ESNI）](https://datatracker.ietf.org/doc/draft-ietf-tls-esni/)可能可以用作翻墙策略。 Wikipedia.org目前不支持ESNI，但是已经但有关于启用它的[讨论](https://phabricator.wikimedia.org/T205378)。
