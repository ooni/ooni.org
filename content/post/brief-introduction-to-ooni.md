---
title: "A brief introduction to OONI"
author: "Federico Ceratto"
date: "2021-08-24"
tags: ["technology"]
categories: ["blog"]
---

This is gentle introduction to OONI that does not require readers to have a technical background.

If you are familiar with how the Internet works and how it can be censored you can skip [The basics](#the-basics).

For frequently asked questions and answers, please refer to the [OONI FAQ](https://ooni.org/support/faq/).

## The basics

You might be connecting to the [Internet](https://en.wikipedia.org/wiki/Internet)
from a [local network](https://en.wikipedia.org/wiki/Local_area_network)
or using an [Internet Service Provider](https://ooni.org/support/glossary/#isp) (ISP).

ISPs are usually not connected to each other. Rather they connect to large
[carriers](https://en.wikipedia.org/wiki/Tier_1_network) or simply to a [bigger ISP](https://en.wikipedia.org/wiki/Tier_2_network).

When visiting a website your data might go through your local network,
then your ISP, then one or two carriers,
another ISP, across a [datacenter network](https://en.wikipedia.org/wiki/Data_center#Network_infrastructure)
and finally reach a [server](https://en.wikipedia.org/wiki/Server_(computing)).

Data is transmitted using various "formats" called protocols.

Multiple protocols are used together:
* The whole Internet uses the [IP](https://en.wikipedia.org/wiki/Internet_Protocol) protocol.
* Most of the time, the IP protocol is used together with the [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) protocol.
* And finally, most applications use one or more [application protocols](https://en.wikipedia.org/wiki/Application_layer#Protocols).

For example, websites mainly use the [HTTPS](https://en.wikipedia.org/wiki/HTTPS) protocol, while emails
use a different application protocol. Instant Messaging and videogames often have their own protocols.

When browsing a website, you most often rely on IP, TCP, [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) and HTTPS.

Data can be lost or altered at virtually any location on the network (ISP, carrier, etc), both by accident and on purpose.

Additionally, devices called [middleboxes](https://ooni.org/support/glossary/#middlebox) can be deployed by third parties between ISPs and carriers or in other locations. They can be used to disrupt or block traffic based on source, destination and content.

Finally, a website (or another service) can block users by itself (e.g. depending on the location of the users). This case (server-side blocking) falls outside of what is called "network interference" because the blocking is done at the source.

## How OONI Probe detects blocking

Most Internet traffic travels across different networks and often relies on multiple protocols. As such, it is possible to interfere with Internet traffic in different ways and at different locations in complex combinations.

Some common forms of interference include:

* **IP blocking:** An ISP prevents a user from connecting to the [IP address](https://ooni.org/support/glossary/#ip-address) of a website or app;
* **DNS hijacking:** An ISP prevents a user from connecting to a website or app by making them connect to an *incorrect IP address* (which is not the actual IP address of the website or app that the user is trying to access), which may host a [block page](https://ooni.org/support/glossary/#block-page) or present a connection error;
* **HTTP blocking:** An ISP prevents a user from retrieving information from a website or app. This can be done in many ways, such as by serving a [block page](https://ooni.org/support/glossary/#block-page), intercepting the user's [HTTP request](https://ooni.org/support/glossary/#http-request), or by resetting the connection.

These forms of censorship can be measured through OONI's app, called [OONI Probe](https://ooni.org/install/).  

Not all forms of traffic disruption represent censorship. Sometimes it is due to technical problems, and sometimes
it is done for security reasons (for example, to block spam, or to protect browsers from websites that serve malware).

Furthermore, there are forms of censorship that are out of scope for OONI, such as an article on a news website that is deleted by the author,
a movie streaming service that refuses services to users from a given country, and content takedowns by social media companies (such as Facebook).

OONI relies on a large number of volunteers worldwide who run [OONI Probe](https://ooni.org/install/) on phones, desktops, laptops, and servers.

OONI Probe can test multiple protocols and includes a variety of different [tests](https://ooni.org/nettest/) which check for:

* Blocking of websites (using [lists of websites](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe) hosted publicly);
* Blocking of instant messaging apps (WhatsApp, Facebook Messenger, Telegram, Signal);
* Blocking of circumvention tools (Tor, Psiphon, RiseupVPN);
* [Middleboxes](https://ooni.org/support/glossary/#middlebox) on tested networks;
* Speed and performance of tested networks;
* Video-streaming performance.

The OONI Probe app communicates with the OONI backend: a centralized service that receives network measurement data from the probes, processes it, and provides public access to it through [OONI Explorer](https://explorer.ooni.org/) and the [OONI API](https://api.ooni.io/).

OONI Probe test results are called "measurements", and they are automatically processed by the OONI backend to detect blocking in real-time.

OONI measurements are classified as:
 * **normal:** no interference detected
 * **anomaly:** interference detected
 * **confirmed:** automatically confirmed censorship (based on a [block page](https://ooni.org/support/glossary/#block-page))
 * **failure:** an error occurred during the measurement and it is therefore ignored

Due to the complexity of the blocking mechanisms and the large number of measurements, [false positives](https://ooni.org/support/faq/#what-are-false-positives) can emerge. Currently, OONI only [automatically confirms cases of blocking](https://ooni.org/support/faq/#why-does-ooni-confirm-censorship-when-a-block-page-is-served) when block pages are served.

However, we perform investigations of significant events and publish [reports](https://ooni.org/reports/).
