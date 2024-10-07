---
title: "Egypt: Media censorship, Tor interference, HTTPS throttling and ads injections?"
author: "Leonid Evdokimov, Vasilis Ververis"
date: "2016-10-27"
tags: ["egypt", "DPI", "TCP injections", "network throttling", "country-eg", "theme-news_media", "theme-circumvention"]
categories: ["report"]
---

**Country:** Egypt

**Probed ISPs:** Noor (AS 20928), TE Data (AS 8452), Vodafone (AS 24835)

**Censorship method:** DPI, network throttling, TCP injections

**OONI tests:** HTTP Requests, Web Connectivity, Vanilla Tor

**Measurement period:** 2016-08-27 - 2016-10-26

We recently noticed network anomalies in Egypt and performed a study in an
attempt to understand the situation.

Our findings indicate that the Tor anonymity network appeared to be interfered
with in Egypt, while HTTPS connections to DigitalOcean's Frankfurt data centre
were throttled. We also found that access to porn sites appeared to be
interfered with via in-band TCP packet injections of advertisement and malware
content, and that the blocking of [The New Arab](https://www.alaraby.co.uk)
website led to the blocking of specific content (such as images) of other sites
that are hosted on the same Content Distribution Network (CDN).

Below we present our findings based on network measurement tests performed over
the last two months.

* [*Media censorship*](#media-censorship)

    * [*Collateral damage*](#collateral-damage)


* [*HTTPS throttling*](#https-throttling)

    * [*Inaccessible URLs*](#inaccessible-urls)


* [*Attempts to block Tor*](#attempts-to-block-tor)

* [*Advertisement and malware injection*](#advertisement-and-malware-injection)

    * [*Third party tools (curl) showing injected content*](#third-party-tools-curl-showing-injected-content)

* [*Circumventing censorship*](#circumventing-censorship)

* [*Acknowledgements*](#acknowledgements)

* [*Appendix*](#appendix)


# <a name="media-censorship"></a> Media censorship

The New Arab website [www.alaraby.co.uk]
(https://explorer.ooni.org/measurement/20161025T230118Z_AS36935_N4hRIq4Ya5raRq0yRrW7dRu9yxeg8m7fgbyNrOd9ugt07uQGK0?input=http:%2F%2Fwww.alaraby.co.uk)
and its mirror website `www.alarabyaljadeed.co.uk`
has been blocked in Egypt since 2016-01-05 according to the [Guardian]
(https://www.theguardian.com/media/2016/jan/05/saudi-arabia-uae-egypt-block-access-qatari-news-website)
news outlet. Similarly, the domain
[www.alarabyaljadeed.co.uk](https://explorer.ooni.org/measurement/20161025T231508Z_AS36935_Cvza90GziUHIFTeK7F5rBLFVIa5nkFKi3X9i3gZ2dpNymzbn69?input=http:%2F%2Fwww.alarabyaljadeed.co.uk)
pointing to the same website (`www.alaraby.co.uk`) has also been blocked. The
ISPs have not redirected the visitors to any block page or any resource that
explains the reason of the block. Instead, they appear to have used Deep
Packet Inspection (DPI) equipment to censor the content of the website. When
requesting the HTTP version of the websites `http://www.alaraby.co.uk` and
`http://www.alarabyaljadeed.co.uk` a response from the middlebox is triggered
containing a blank webpage as is shown by the following two OONI measurements
collected on 25th of October 2016:

* [Blocking of www.alaraby.co.uk via
  HTTP](https://explorer.ooni.org/measurement/20161025T220457Z_AS36935_PqOJazEa6I8BzYZ3NrFVEILGKUaVq6fQ4pM9asTMWaQ3MWzqSz?input=http:%2F%2Fwww.alaraby.co.uk)

* [Blocking of www.alarabyaljadeed.co.uk via
  HTTP](https://explorer.ooni.org/measurement/20161025T231508Z_AS36935_Cvza90GziUHIFTeK7F5rBLFVIa5nkFKi3X9i3gZ2dpNymzbn69?input=http:%2F%2Fwww.alarabyaljadeed.co.uk)

The request for the HTTPS version of the websites (`https://www.alaraby.co.uk`,
`https://www.alarabyaljadeed.co.uk`) times out and no response is received, as
shown in the following measurement:

* [Timing out of requests to www.alaraby.co.uk via
  HTTPS](https://explorer.ooni.org/measurement/20161025T225008Z_AS36935_3RV6eZcQFuo4GncFinLXtrb1jlMfTSXZPG8xpWOCgWCPf9DreU?input=https:%2F%2Fwww.alaraby.co.uk)

## <a name="collateral-damage"></a> Collateral damage

In addition to the censorship of the media website The New Arab, this blocking
has caused some collateral damage to other websites hosted on the same Content
Delivery Network (CDN).

The screenshots below illustrate how these websites appeared from an Egyptian
vantage point (right-side) and when accessed via Tor Browser (left-side):

![Screenshort of http://www.viagogo.com](/post/egypt-network-interference/viagogo-2016-10-21.png)
![Screenshort of https://www.megapixl.com](/post/egypt-network-interference/megapixl-2016-10-21.png)
![Screenshort of https://uk-eshop.adiglobal.com/Pages/default.aspx](/post/egypt-network-interference/adiglobal-2016-10-21.png)

# <a name="https-throttling"></a> HTTPS throttling

Throughout August 2016 we noticed that HTTPS connections to a number of
services using DigitalOcean's Frankfurt data centre appeared to be presenting
network connectivity issues from two Egyptian vantage points: Noor ADSL
([AS20928](https://stat.ripe.net/AS20928)) and Vodafone Egypt (ex-RAYA
Telecom, [AS24835](https://stat.ripe.net/AS24835)).

As part of our research we found that one way to consistently reproduce a
network interference is by sending HTTPS requests to the network sub-nets
belonging to DigitalOcean's Frankfurt data center (including, but not limited
to `46.101.128.0/24`, `46.101.172.0/24`, `46.101.179.0/24` —
[AS201229](https://stat.ripe.net/AS201229)). Our experiment showed consistent
and heavy throttling of HTTPS services located in the network: only 3% of TCP
connection attempts succeeded.

Our latency analysis suggests that all the packets that the client was
receiving were [timeout-based TCP
re-transmissions](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Timeout_based_retransmission)
and that a network device was consistently dropping the first occurrence of
each TCP packet.

Non-encrypted protocols on the other hand, like plain HTTP, which hosted
services in the same sub-nets were not affected. This indicates that only HTTPS
connections were throttled, while insecure HTTP connections to DigitalOcean's
Frankfurt data centre were successful.

Based on our tests, the last sample of throttling that we observed occurred on
2016-09-01 12:30 UTC.

The complete and detailed technical analysis can be found
[here](/notebooks/eg-vs-digitalocean.html).

## <a name="inaccessible-urls"></a> Inaccessible URLs

The HTTPS throttling of services hosted by DigitalOcean's Frankfurt data centre
led to the inaccessibility of various URLs. These include the following:

* [Blocking of
  https://050media.nl](https://explorer.ooni.org/measurement/20160829T135335Z_AS20928_j3cqNiI8kwkJxby5R3LyH2PnTPgnBJ0rZ3Qx2RClxkQWc9WmOg?input=https:%2F%2F050media.nl)

* [Blocking of
  https://33-km.ru](https://explorer.ooni.org/measurement/20160829T134302Z_AS20928_I5cYSYTKoHbYLyKtnogYNPLNcdF7T5PkcmxVs4cfR46ifNiq7z?input=https:%2F%2F33-km.ru)

* [Blocking of
  https://laracasts.com](https://explorer.ooni.org/measurement/20160821T211424Z_AS8452_cZllOWSUFhF2WYmiz0KSH54J1mzkeDIqC5hrClLQ593FGGE3M1?input=https:%2F%2Flaracasts.com)

As well as the following URLs: `https://antoniomarques.eu`,
`https://akombakom.net`, `https://anadoluefessk.org`, `https://alexmerkel.com`,
`https://alexmerkel.me`, `https://alexmerkel.xyz`. The raw JSON OONI
measurements file (25Mb size) of these URLs can be found
[here](https://api.ooni.io/2016-08-31/20160830T125839Z-EG-AS20928-web_connectivity-no_report_id-0.2.0-probe.json).

The above lists however are *not* exhaustive and more websites may have been
affected which are not listed here.

# <a name="attempts-to-block-tor"></a> Attempts to block Tor

Two days ago, tests were run to examine the reachability of the
[Tor](https://www.torproject.org/) anonymity network. The collected measurement
data indicates that the Tor process bootstrap was
[disrupted](https://explorer.ooni.org/measurement/20161026T162218Z_AS36935_kTY80ArJx4baKS9FIss3oPEYfqpzEp0bubESO1T0aEc3Njl3QU)
by blocking requests to directory authorities, which are designed to help Tor
clients learn the list of relays that make up the Tor network.

One of the requests that were found to be blocked is a request to download a
"consensus" document from Tor directory authorities. That request is a plain
HTTP request to the URL:
`http://154.35.175.225/tor/status-vote/current/consensus.z` from a networking
point of view. Connections to directory authorities are intercepted and
blocking is performed by injecting a packet that terminates the connection
abruptly (a TCP RST packet). This happens right after the server acknowledges
the request.

The injected RST packets share the same static [IP identification (IP ID)]
(https://en.wikipedia.org/wiki/IPv4#Identification) value of `0x3412` as the
injected RST packets used to block aforementioned websites that we have found to be
blocked. Usage of the same IP ID implies that the blocking infrastructure used
to censor Tor is the same (or similar) to that used to block other websites
(see the in depth [technical analysis](/notebooks/eg-serving-malware.html) of
in-band TCP content injections).

In our testing we found **7 out of 9 directory authority** consensus file requests
to be blocked:

* [Blocking of consensus document requests to the moria1 directory
  authority](https://explorer.ooni.org/measurement/20161026T205703Z_AS36935_OyfZ1mzzY4xuh8S3abKAfvxcwWGh5JVHUCk55e8cInkOyRmw5U?input=http:%2F%2F128.31.0.39:9131%2Ftor%2Fstatus-vote%2Fcurrent%2Fconsensus.z)

* [Blocking of consensus document requests to the maatuska directory
  authority](https://explorer.ooni.org/measurement/20161026T210514Z_AS36935_3tNJySRXLDwSXijucIltcrFYoKt8KzfrYc2eYdSyO2cxTBs3k5?input=http:%2F%2F171.25.193.9:443%2Ftor%2Fstatus-vote%2Fcurrent%2Fconsensus.z)

* [Blocking of consensus document requests to the tor26 directory
  authority](https://explorer.ooni.org/measurement/20161026T210714Z_AS36935_w88LJ82yd0rKPiaEFJymNZt3kdusHPnMTuWHMHPWDlGxFQLPde?input=http:%2F%2F86.59.21.38:80%2Ftor%2Fstatus-vote%2Fcurrent%2Fconsensus.z)

* [Blocking of consensus document requests to the dizum directory
  authority](https://explorer.ooni.org/measurement/20161026T210218Z_AS36935_L18ktGixOxdLtxr9LYxIO0jGwkKkLjvsLDZ1YPOJ2eQL7EhDx4?input=http:%2F%2F194.109.206.212:80%2Ftor%2Fstatus-vote%2Fcurrent%2Fconsensus.z)

* [Blocking of consensus document requests to the gabelmoo directory
  authority](https://explorer.ooni.org/measurement/20161026T210811Z_AS36935_Co624cXxizzgIzXOEV1Cx44SCElOMjLHrGML838zycImudosLR?input=http:%2F%2F131.188.40.189:80%2Ftor%2Fstatus-vote%2Fcurrent%2Fconsensus.z)

* [Blocking of consensus document requests to the dannenberg directory
  authority](https://explorer.ooni.org/measurement/20161026T210434Z_AS36935_so2ZaGOjUdgGNJM7gjyALCyycGDS3v3r5SWoVgPdna7GstFit5?input=http:%2F%2F193.23.244.244:80%2Ftor%2Fstatus-vote%2Fcurrent%2Fconsensus.z)

* [Blocking of consensus document requests to the Faravahar directory
  authority](https://explorer.ooni.org/measurement/20161026T210524Z_AS36935_OfwC8F4e16wN6RjbZCSl6dveF0XRL2UnsygTeXSMFlDBRwB3bw?input=http:%2F%2F154.35.175.225:80%2Ftor%2Fstatus-vote%2Fcurrent%2Fconsensus.z)

We also found access to the now discontinued Tor [directory authority urras to
be blocked](https://explorer.ooni.org/measurement/20161026T210826Z_AS36935_Y1ON5xUx0alU1OMrDIMwix8FpjyFs5OUXsbPZWaK6PrCqKpMpW?input=http:%2F%2F208.83.223.34:443%2Ftor%2Fstatus-vote%2Fcurrent%2Fconsensus.z)
.We did not test the accessibility of the recently added `Bitfroest` Tor
directory authority, nor do we have samples regarding the potential blocking of
`longclaw`.

Also, it's just the set of consensus URLs that are blocked, for example, the
request for `/tor/status-vote/current/lack-of-consensus.z` produces ordinary
`404 Not found` error. That implies that the blockage is explicitly targeting
Tor.

Another type of request that is blocked is the Onion Router handshake sent to
ORPort of the well-known Tor router. They appear to be blocked in the same way:
the TCP connection is interrupted by terminating the connection (with a TCP RST
packet) during the TLS handshake (after the first `Client Hello` from the
client).

The blocking appears to only be targeting Tor in a default configuration. This
means that it's possible to easily circumvent such censorship by using any
[Tor Bridge](https://bridges.torproject.org/), including non-obfuscated ones.
Given the fact that the blocking of connections doesn't happen all the time, a
client should be able to bootstrap a Tor connection successfully with enough
retries. This however can, in some cases, take up to a half an hour.
Moreover, OR connections are only blocked to some subset of the public Tor
network, meaning that if a client has already bootstrapped and has a cached
version of the consensus and descriptors it is likely to work properly. The
connection is not throttled as soon as it is established successfully.

This sort of Tor blockage seems to *still* be active in the moment of the
publication of this report.

But this is not the first time we noticed interference with the Tor network in
Egypt. Earlier this month, users reported that they couldn't connect directly
to Tor from Egypt and had to use bridges to access it. Tor Metrics statistics
illustrate that [direct
connections](https://metrics.torproject.org/userstats-relay-country.html?start=2016-09-19&end=2016-10-26&country=eg&events=points)
to Tor were reduced on 2nd and 25th October 2016, while the use of
[bridges](https://metrics.torproject.org/userstats-bridge-country.html?start=2016-09-19&end=2016-10-26&country=eg)
increased, indicating that Tor might have been blocked. It's probably worth
noting though that only around 30% of Tor users appear to have used bridges to
circumvent potential censorship.

The following graphs below illustrate the estimated number of
directly-connecting clients and the estimated number of clients connecting via
bridges.

![Directly connecting users from Egypt](/post/egypt-network-interference/userstats-relay-country-eg-2016-09-19-2016-10-26-points.png)
![Bridge users from Egypt](/post/egypt-network-interference/userstats-bridge-country-eg-2016-09-19-2016-10-26.png)

# <a name="advertisement-and-malware-injection"></a> Advertisement and malware injection

Through our research we found false content deliberately injected by at least
one ISP in Egypt: [TE Data] (https://en.wikipedia.org/wiki/TE_Data). This ISP
accounts for 65% of the [market
share](https://www.igmena.org/Indicators-of-Internet-Penetration-in-Egypt) and
controls over 70% of the Egyptian internet bandwidth TE Data appears to be
using DPI or similar network equipment to conduct a man-in-the-middle attack
and transparently inject content for gaining profit (affiliate advertising) or
malicious purposes (serving malware).

Our experiment showed that there was a 10% probability that mobile device users
connected via Wi-Fi to TE Data ADSL would get redirected when visiting some
porn websites. The redirection injected the URL
`http://marketing-sv.com/mads.html`, which serves at least two different static
web-pages redirecting to `http://go.ad2upapp.com/afu.php?id=788146` either
directly or via static pages from `utextads.com` subdomains. This
PopUp/PopUnder advertisement network is known to be used by malware authors to
gain revenue.

During our October 2016 investigation the injector was mostly targeting mobile
[User-Agents] (https://en.wikipedia.org/wiki/User_agent). It was not limited to
iPhone and Android platforms, but also targeted BlackBerry and Symbian devices.
In August 2016 OONI Probe also [captured a similar
injection](https://explorer.ooni.org/measurement/20160827T153815Z_AS8452_gAU19jWom21aUc0hwieYQymbvcuTTTYULW8k1W1UXOlEYmhDPq?input=http:%2F%2Fxnxx.com)
in the TE Data network. The injection was redirecting the user to
`http://go.ad2upapp.com/afu.php?id=723454` that further redirects to
`http://go.deliverymodo.com/afu.php?id=723454`, a different advertising website
but with the same affiliate ID (723454). We also received user complains about
similar injections in transit traffic of Vodafone 3G
([AS36935](https://stat.ripe.net/AS36935)) and Noor ADSL
([AS20928](https://stat.ripe.net/AS20928)) pointing to the
`http://adf.ly/1cqbTY`, `marketing-sv.com` and `infinitiads.com` domains.

We also discovered at least one [malware
sample](https://virustotal.com/en/file/988f3b1079b7badb27442bd1439f1b7b51c9f812a27fbab7e4d60a37c97f3d64/analysis/)
served by the chain of web redirects starting with the aforementioned link
during our research. Our IP TTL and network packet latency analysis confirms
that the injection is done in-band using a DPI or similar network equipment to
conduct a man-in-the-middle attack. The analysis refutes the hypothesis of an
"infected" website serving advertisements instead of content. The statistics
suggest that the injector is located within the TE Data network (not further
than that and not as close as end-user LAN) and transparently injects content
for gaining profit via affiliate advertising.

`Client <--(forged packet)-- ISP's middle box <--(valid packet)-- Web server`

## <a name="third-party-tools-curl-showing-injected-content"></a> Third party tools (curl) showing injected content

The curl output excerpts below illustrate how TE Data and Noor ISP redirected
users' connections to porn websites through the injection of ads. It's
important though to note that the DNS query answers of the requested domains
are legitimate, and there appears to be no sign of DNS tampering.

TE Data ISP redirected the user visiting `http://xnxx.com/` (34th most visited
website in Egypt according to Alexa statistics) to
`http://go.ad2upapp.com/afu.php?id=723454`.

HTTP headers curl output `http://xnxx.com/` in Noor ISP.

```
* Rebuilt URL to: http://xnxx.com/
* Hostname was NOT found in DNS cache
*   Trying 141.0.174.38...
* Connected to xnxx.com (141.0.174.38) port 80 (#0)
> HEAD / HTTP/1.1
> User-Agent: curl/7.35.0
> Host: xnxx.com
> Accept: */*
>
< HTTP/1.1 307 Temporary Redirect
< Location: http://go.ad2upapp.com/afu.php?id=723454
< Connection: close
<
* Closing connection 0
```

Noor ISP redirected the user visiting `http://xhamster.com/` (53th most visited
website in Egypt according to Alexa statistics) to `http://adf.ly/1cqbTY`.

HTTP headers curl output of `http://xhamster.com/`

```
*   Trying 88.208.18.30...
* Connected to xhamster.com (88.208.18.30) port 80 (#0)
> HEAD / HTTP/1.1
> Host: xhamster.com
> User-Agent: curl/7.47.0
> Accept: */*
>
< HTTP/1.1 307 Temporary Redirect
< Location: http://adf.ly/1cqbTY
< Connection: close
<
* Closing connection 0
```

The complete and detailed technical analysis of the injected malware and
advertisements in TCP connections can be found
[here](/notebooks/eg-serving-malware.html).

# <a name="circumventing-censorship"></a> Circumventing censorship

OONI findings in Egypt revealed the censorship of a media website, blocking of
services and malicious TCP injections of advertisements and malware content.
ISPs in Egypt appear to be using DPI, TCP injections and network throttling to
block resources, censor websites and serve advertisements and malware to
internet users.

You can bypass such censorship through the use of
[Tor](https://www.torproject.org/) and the [Tor
Browser](https://www.torproject.org/projects/torbrowser.html.en). Users in
mobile networks can use
[Orbot](https://www.torproject.org/docs/android.html.en) (Tor on Android) to
access the web or other mobile applications by using the VPN mode of Orbot
which enables all apps on the device to run through the [Tor
network](https://www.torproject.org/).

# <a name="acknowledgements"></a> Acknowledgements

OONI would like to thank anonymous contributors that reported and shared
evidence to document these incidents including, but not limited to, the
cypherpunk who asked to be identified by the following hashsum:
```
KCB3XJW2ZVGS2A6MQKIE4NQCMJNFKIXI4KGK6CW4J2OFXFZE6RB5VB35LTLJKMM6ZQ654W57C7JLFWJBHMFH6UNO4CXIK7APUD3H33Y=
```

# <a name="appendix"></a> Appendix

Detailed technical analysis:

* [Egypt vs DigitalOcean](/notebooks/eg-vs-digitalocean.html) ([download ipynb
  notebook](/notebooks/eg-vs-digitalocean.ipynb))

* [Egypt serving malware](/notebooks/eg-serving-malware.html) ([download ipynb
  notebook](/notebooks/eg-serving-malware.ipynb))
