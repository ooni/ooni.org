---
title: "Zambia, a country under Deep Packet Inspection"
author: "Mr T."
date: "2013-07-15"
tags: ["zambia", "country-zm"]
categories: ["report"]
aliases:
  - /zambia-a-country-under-deep-packet-inspection.html
---

    "I do not have the details of the blocking of Zambianwatchdog.com, but I
    would celebrate."
                          Guy Scott 
                          Zambian Vicepresident, Friday 28th June 2013

The following article is a guest blog post by Mr T. an independent researcher
and provider of hosting to various grass roots organizations.

This article summarizes how we discovered that the grass roots online newspaper
Zambianwatchdog.com was being blocked inside Zambia. This report provides
technical evidence of the unlawful presence of Deep Packet Inspection in the
country to monitor the Internet communications and stop users from browsing the
website.


# The connection was reset

On Monday 24 June 15:30 GMT readers of the website Zambianwatchdog.com from
inside Zambia were reporting error messages. 

![Connection RST](/post/zambia/connection-rst.jpg)


As hosting providers of the website, we initially could not see a significant
drop of active connections and we needed to have a close look into the access
logs of the site. Examining the connection logs to find any pattern that could
help us to determine the cause of the problem was not a straightforward task as
we needed to examine several gigabytes of data. It is worth mentioning here
that Zambian Watchdog ranks 8th overall biggest website in Zambia and probably
the biggest site after the large portals Facebook, Google or Youtube.

![Alexa ranks](/post/zambia/alexa-traffic-ranks.png)

Our first review of the logs revealed a clear increase of connections reporting
status code 200 but with zero bytes were transmitted back to the client. 

The server has large number of logs similar to this one:


    41.72.105.x - - [25/Jun/2013:05:03:58 +0000]  "GET / HTTP/1.1" 200 0 "-" "Mozilla/5.0 (Windows NT 6.1; rv:20.0) Gecko/20100101 Firefox/20.0"

The sample shows that IP address of this connection 41.72.105.x belongs to
ZAMTEL, the status code of the connection is 200 and zero information was sent
back to the client.

The status code 200 indicates that the client's request was successfully
received, understood, and accepted by the server but for some unknown reason no
information was send back to the client. 

In order to determine if this was a general problem of our servers we examined
the last four weeks of connection logs to conclude that there was inexplicable
increase of connections with status code 200 and zero bytes transmitted
starting that day.

We also looked into which readers were affected by this behavior and we
concluded that the majority of the connections reporting this problem were from
operators inside Zambia with the exception of MTN. 

![Pie chart](/post/zambia/pie-chart.png)

Origin of the dropped connections to the webserver


# Who is breaking the connections?

Four hours after we received the first reports of service outage inside Zambia
we could narrow down the problem to what it was perceived in the server side as
sudden termination of the connections. 

Comparing the connection logs of different weeks we could determine that
connections coming from at least these operators AS37146 realtime-as, AS37214
MICROLINK, AS28698 UUNET Africa, AS37287 ZAIN-ZAMBIA and AS37154 ZAMTEL were
suffering from some kind disruption.

In order to determine what kind of interference was taken place we proceed to
capture the network traffic arriving to Zambian Watchdog's server to look for
any special patters that could help us to understand why most of the readers
inside Zambia were experiencing connection drops with the exception of readers
using MTN mobile network.

![Wireshark](/post/zambia/wireshark.png)
After reviewing dozen of different packet captures we saw a
distinctive pattern


The readers seemed to be able to establish the initial connection with the
webserver but as soon as they request any content of the website we received
also a request to terminate such connection.

We proceed to examine our own generated connections from inside Zambia in real
time and discovered that the undesired termination was taken place if the HTTP
Header Host: www.zambianwatchdog.com was present in the request.

For example, we could see that a connection requesting the Breaking News
section of the site from a Nokia phone, using Celtel 3G network was always
quickly terminated after this request arrives to the server.


    GET /category/breaking-news/ HTTP/1.1 
    Host: www.zambianwatchdog.com

    Accept: text/html,text/css,multipart/mixed,application/java-archive,
    application/java, application/x-java-archive, text/vnd.sun.j2me.app-descriptor,
    application/vnd.oma.drm.message, application/vnd.oma.drm.content,
    application/vnd.oma.dd+xml, application/vnd.oma.drm.rights+xml,
    application/vnd.oma.drm.rights+wbxml, application/x-nokia-widget, */* 

    Accept-Charset: iso-8859-1, utf-8; q=0.7, *; q=0.7 

    Accept-Encoding: gzip, deflate, x-gzip, identity; q=0.9 

    Accept-Language: en;q=1.0,fr;q=0.5,de;q=0.5,it;q=0.5 

    Referer: http://www.google.co.zm/search?q=wachdog+news&btnG=Search 

    User-Agent: Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE63-1/500.21.009;
    Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko)
    Safari/413 

    x-wap-profile: "http://nds1.nds.nokia.com/uaprof/NE63-1r100.xml" 

    X-Nokia-MusicShop-Version: 08.0825.9 

    X-Nokia-MusicShop-Bearer: GPRS/3G


# DPI or not DPI?


What it was left to determine if the filtering was looking into other aspects
of the connection. In order to find out we run a few extra tests, requesting
access to the webpage using other headers. We tested requests using the
following headers

www.zambianwatchdog.COM 

zambianwatchdog.com

Zambianwatchdog.cOm

wWw.zambianwatchdog.com

To our surprise we discovered that the “reset” of the connections was only
talking place when we used the header www.zambianwatchdog.com and not when
using any of the other combinations. After twelve hours we could confirm that
malicious traffic was not generated by the readers but was actively injected
into the network when a reader was requesting content from the website
www.zambianwatchdog.com and that this behavior could only be explained by the
presence of deep packet inspection (DPI) equipment inside Zambia. 

Not until we technically verified and gathered forensic evidence of the
blocking we adviced to the website owners to inform to the general public that
such active interference was talking place and that the blocking was clearly
targeted against the website.


# Getting the website back online


To ensure the public visibility of the website inside Zambia and in order to
look for a quick solution to put the website online, we tested the availability
of the blocking technology to interfere with encrypted traffic. After testing
the encypted (SSL) traffic was not suffering from such type of interference the
decided to make the site available only via HTTPS. 

To our surprise, several popular Word Press plugins of the website needed some
tweaks so the full content was delivered encrypted to the readers.

We have also included the header


    Strict-Transport-Security "max-age=10886401; includeSubDomains";

to ensure that the readers that have reached the website at least once via
HTTPS will keep doing it so without the need to specify HTTPS in their future
requests.


# OONI Testing


Inspired by the work of our colleges of the Open Observatory of Network
Interferece (OONI) we conducted another run of tests to determine if any of
1000 top Alexa websites was blocking. The result of the testing is that we
could not find any other website blocked with the exception of the Zambian
Watchdog. 


# Blocking status

Three weeks after we initially detected and fingerprinted the blocking, the
filtering is still active. Unencrypted requests to the domain
zambianwatchdog.com remain unblocked while connections using
www.zambianwatchdog.com trigger a reset. 

Our test software that runs inside Zambia still reports interference when using
www.zambianwatchdog.com

Recv failure: Connection reset by peer 


While such interference is not present when dropping the www. 


    HTTP/1.1 301 Moved Permanently 

    Server: nginx 

    Date: Sat, 13 Jul 2013 12:35:16 GMT 

    Content-Type: text/html 

    Content-Length: 178 

    Location: https://'''zambianwatchdog.com/''' 

    Strict-Transport-Security: max-age=10886401; includeSubDomains 


# Courage is contagious

After we unveiled the blocking and network monitoring, Zambian Watchdog has
received information from whistle blowers of the presence of such
infrastructure. 


The 4th of July, the Zambian website reports

"They have also installed equipment a Lamya (1) in order to monitor people
blogging on a site like yours and also blocking watchdog. This is also
affecting all the other internet service providers who are using Zamtel as a
currier and service provider. Also the CODEX (2) which interconnects all ISP is
based at Lamya and this has given OP (3) access to all the ISP in Zambia."


* Lamya is the location of the ''Zambia'' Telecommunications Company

* CODEX is the Zambian Internet exchange OP is the Office of the President 

Further information about the case:

[Corruption worsens at zamtel emails phones being-monitored at lamya house](https://zambianwatchdog.com/corruption-worsens-at-zamtel-emails-phones-being-monitored-at-lamya-house/)

[Zicta suing of mobile companies aimed at mtn for refusing to block zwd](https://zambianwatchdog.com/zicta-suing-of-mobile-companies-aimed-at-mtn-for-refusing-to-block-zwd/)

[Sata orders op to block zwd on mtn as well](https://zambianwatchdog.com/sata-orders-op-to-block-zwd-on-mtn-as-well/)

[Sata signs order for op to tap phones emails](https://zambianwatchdog.com/sata-signs-order-for-op-to-tap-phones-emails/)

[Journalist zyambo out of jail police though he had obituary of sata](https://zambianwatchdog.com/journalist-zyambo-out-of-jail-police-though-he-had-obituary-of-sata/)


# Update (17th July 2013): And SSL got blocked...

On Tuesday 16th of July 2013 (14:43 GMT) just a few hours after this article
was released, the government has moved forward in their determination of
blocking the site and started to block the SSL connections.  The Deep Packet
Inspection gear seems to be monitoring the "Server Hello" message that is part
of the SSL negotiation. This message contains the string zambianwatchdog.com
before the SSL negotiation is completed.


![SSL Reset](/post/zambia/SSL-reset.png)

In order to find out if the government is actively making changes, we deployed
a new mirror server of the site in the domain http://zwd.cums.in. After a few
hours the domain has also been blocked and the filtering has been extended to
the whole /24 network. By extending the filtering the Zambian government has
also blocked hundreds of other organizations that are hosted in the same provider. 



    41.72.122.69 - - [17/Jul/2013:14:17:16 +0000]  "-" 400 0 "-" "-" "---" "ZM" "-x-" "41.72.122.69" "-"
    41.72.122.69 - - [17/Jul/2013:14:17:16 +0000]  "-" 400 0 "-" "-" "---" "ZM" "-x-" "41.72.122.69" "-"

This is an example of the logs in the server side. We can see that the attack
they are conducting leads to 0 bytes being transmitted and an error code 400 is
generated (Error 400 (Bad Request) takes place when the request to a SSL is
malformed.).

More information is available here
[https://zambianwatchdog.com/police-abduct-another-journalists-suspected-of-links-to-zwd-govt-blocks-zwd-futher/](https://zambianwatchdog.com/police-abduct-another-journalists-suspected-of-links-to-zwd-govt-blocks-zwd-futher/)
