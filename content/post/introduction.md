---
title: "Introduction to OONI"
author: "Federico Ceratto"
date: "2021-07-18"
tags: ["technology"]
categories: ["blog"]
---

# An introduction to OONI

This is gentle introduction to OONI that does not require readers to have a technical background.

If you are familiar with how the Internet works and how it can be censored you can skip [The basics](#the-basics).

For frequently asked questions and answers see [FAQ](https://ooni.org/support/faq/).

## The basics

(This section contains links to Wikipedia for the most curious.)

You might be connecting to the [Internet](https://en.wikipedia.org/wiki/Internet)
from a [local network](https://en.wikipedia.org/wiki/Local_area_network)
or using an [Internet Service Provider](https://en.wikipedia.org/wiki/Internet_service_provider) (ISP).

ISPs are usually not connected to each other. Rather they connect to large
[carriers](https://en.wikipedia.org/wiki/Tier_1_network) or simply to a [bigger ISP](https://en.wikipedia.org/wiki/Tier_2_network)

When visiting a website your data might go through your local network,
then your ISP, then one or two carriers,
another ISP, across a [datacenter network](https://en.wikipedia.org/wiki/Data_center#Network_infrastructure)
and finally reach a [server](https://en.wikipedia.org/wiki/Server_(computing))

Data is transmitted using various "formats" called protocols.
Multiple protocols are used together:
- The whole Internet uses [IP](https://en.wikipedia.org/wiki/Internet_Protocol).
- Most of the time together with [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
- And finally, most application use one or more [application protocols](https://en.wikipedia.org/wiki/Application_layer#Protocols)

For example, websites use mainly [HTTPS](https://en.wikipedia.org/wiki/HTTPS), while email
use a different application protocol.
Instant Messaging and videogames often have their own.

When browsing a website, most often you rely on IP, TCP, [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) and HTTPS.

Data can be lost or altered at virtually any location on the network (ISP, carrier, etc), both by accident and on purpose.

Additionally, devices called middleboxes can be deployed by 3rd parties between ISPs and carriers or in other locations.
They can be used to disrupt or block traffic based on source, destination and content.

Finally, a website (or another service) can block users by itself e.g. depending on the location of the users.
This case falls outside of what is called "network interference" because the blocking is done at the source.

## How OONI detects blocking and censorship

Most Internet traffic travels across different networks and often relies on multiple protocols.
As such, it is possible to interfere with Internet traffic in different ways and at different locations in complex combinations.

Some forms of interference are more common than the rest:

 * An ISP alters DNS traffic from users from browsing a website, leading to a connection error.
 * An ISP alters DNS traffic from users from browsing a website, directing them to a webpage showing a notice about the block.
 * A middlebox located along national borders affects users of Tor, leading to intermittent connectivity.

Not all forms of traffic distruption represent censorship. Sometimes it is due to tecnical problems, and sometimes
it is done for security reasons, for example to block spam, or protect browsers from websites that serve malware.

Furthermore, there are forms of censorship that fall out of the scope of OONI: e.g. an article on a news website is deleted by the author,
a movie streaming service refuses services to users from a give country.

OONI relies on a large number of volunteers to run applications named OONI Probe on phones, desktops, laptops and servers.

Probes communicate with the OONI backend: it is a centralized service that receives data from the probes, processes it and provides public access to it
through [OONI Explorer](https://explorer.ooni.io/) and the [OONI API](https://api.ooni.io/)

Probes can test multiple protocols. They receive a list of URLs to test and upload the results of the tests, called measurements.
The backend processes the measurements automatically and in real time to detect blocking.

Measurements are classified as:
 * normal: no interference detected
 * anomaly: interference detected
 * confirmed: strong evidence of blocking is found, usually a blockpage
 * failure: an error occurred during the measurement and it is therefore ignored

Due to the complexity of the blocking mechanisms and the number of measurements any classification comes with a margin of error.
At this time OONI does not automatically pinpoint where, on a network, the interference is happening.

However, we perform investigation of significant events and publish [reports](https://ooni.org/reports/).




