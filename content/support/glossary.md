---
title: OONI Glossary
description: "This glossary contains brief explanations for terms used in OONI apps, methodologies, and research reports."
---

**Last updated**: 3rd July 2023

This glossary contains *brief explanations* for terms used in OONI apps,
methodologies, and research reports.

**Translations**:

* **Español,** [OONI Glosario](/es/support/glossary)
* **العربية,** [OONI Glossary](/ar/support/glossary)
* **فارسی,** [OONI Glossary](/fa/support/glossary)
* **Kiswahili,** [OONI Faharasa](/sw/support/glossary)
* **Русский,** [OONI Глоссарий](/ru/support/glossary)

If you would like to see additional terms in this glossary, please [open a pull request](https://github.com/ooni/ooni.org) or [send us an email](https://ooni.org/about/#contact).

* [API](#api)

* [AS](#as)

* [ASN](#asn)

* [BGP](#bgp)

* [Blocklist](#blocklist)

* [Block page](#block-page)

* [Caching](#caching)

* [Circumvention tools](#circumvention-tools)

* [Client](#client)

* [Data processing pipeline](#data-processing-pipeline)

* [DNS](#dns)

* [DNS hijacking](#dns-hijacking)

* [DNS lookup](#dns-lookup)

* [DNS over HTTPS](#dns-over-https)

* [DNS over TLS](#dns-over-tls)

* [DNS over UDP](#dns-over-udp)

* [DNS query](#dns-query)

* [DNS resolver](#dns-resolver)

* [DNS spoofing](#dns-spoofing)

* [DNS tampering](#dns-tampering)

* [Domain fronting](#domain-fronting)

* [Domain name](#domain-name)

* [DPI](#dpi)

* [Endpoint](#endpoint)

* [False positive](#false-positive)

* [HTTP](#http)

* [HTTPS](#https)

* [HTTP blocking](#http-blocking)

* [HTTPS collectors](#https-collectors)

* [HTTP header](#http-header)

* [HTTP request](#http-request)

* [HTTP response](#http-response)

* [HTTP status codes](#http-status-codes)

* [HTTP transparent proxy](#http-transparent-proxy)

* [Instant Messaging](#instant-messaging)

* [Internet](#internet)

* [Internet blackout](#internet-blackout)

* [Internet censorship](#internet-censorship)

* [IP address](#ip-address)

* [ISP](#isp)

* [Measurement](#measurement)

* [Metadata](#metadata)

* [Middlebox](#middlebox)

* [Mirror website](#mirror-website)

* [Nettest](#nettest)

* [Network](#network)

* [Network anomaly](#network-anomaly)

* [Network interference](#network-interference)

* [Onion services](#onion-services)

* [OONI bouncer](#ooni-bouncer)

* [OONI collector](#ooni-collector)

* [OONI Explorer](#ooni-explorer)

* [OONI nettest helpers](#ooni-nettest-helpers)

* [OONI Probe](#ooni-probe)

* [OONI Run](#ooni-run)

* [Performance](#performance)

* [Protocol](#protocol)

* [Proxy](#proxy)

* [Raspberry Pi](#raspberry-pi)

* [Server](#server)

* [TCP](#tcp)

* [TCP/IP blocking](#tcpip-blocking)

* [Test input](#test-input)

* [Test list](#test-list)

* [TLS](#tls)

* [Tor](#tor)

* [Traffic manipulation](#traffic-manipulation)

* [UDP](#udp)

* [URL](#url)

* [Vantage point](#vantage-point)

* [VPN](#vpn)

### API

An Application Programming Interface (API) is an interface that enables
programmers to write integration code between different services.

The [OONI API](https://api.ooni.io/) provides an interface that enables users to
request specific types of OONI data and to download such data in a specific
format (JSON). For batch usage, we recommend the [OONI PostgreSQL MetaDB](https://github.com/ooni/sysadmin/blob/master/docs/metadb-sharing.md).

For a more detailed explanation, we recommend the article ["What is an API? In English, please"](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/).

### AS

The internet is run by tens of thousands of autonomous systems (AS) that
coordinate with each other to share routing information: directions on how to
reach [IP addresses](#ip-address) on the internet.

Generally, an [Internet Service Provider (ISP)](#isp) will be responsible for one or
more ASs.

Each AS is responsible for delivering IP packets to a set of IP addresses that
it manages.

### ASN

An Autonomous System Number (ASN) is a unique identifier of an autonomous system
([AS](#as)). This number allows the respective autonomous system to exchange routing information
with other systems.

An Internet Service Provider (ISP) usually has an officially registered ASN (and
they can have more than one ASN).

OONI Probe collects the ASN to identify the network in which each test was
performed.

Looking up an ASN number in a web search engine (such as Google) will show you
which [ISP](#isp) it corresponds to. For example, searching for ""AS30722"" should return
""Vodafone Italia"".

### BGP

The Border Gateway Protocol (BGP) is a protocol used by
[Autonomous Systems (AS)](#as) on the internet to exchange routing
information. With this information they are able to discover which
AS is responsible for which set of [IP addresses](#ip-address) and what is the path
IP packets need to take in order to reach that particular AS.

BGP data, aggregated and published by organizations such as
[RIPE](https://www.ripe.net/) and [IODA](https://ioda.inetintel.cc.gatech.edu/), can be useful
in detecting internet outages.

### Blocklist

A blocklist is a list of internet resources (such as websites and IP addresses)
which are blocked from user access.

Some governments occasionally publish official blocklists (or they get leaked)
which contain lists of websites that are considered prohibited in a country in accordance with local legislation.

Internet Service Providers (ISPs) are then ordered to block access to all
websites included in such blocklists, commonly involving hundreds (or thousands)
of URLs that contain content which is considered illegal in the respective country (such as
gambling, file sharing, adult content, political speech, etc.).

### Block page

A block page (or "Access Denied Page") is a web page that is displayed when a
user attempts to access a website they are not permitted to view.

This is a censorship technique adopted by [Internet Service Providers (ISPs)](#isp) in
several countries (such as Iran, Indonesia, Greece, and Italy).

When a block page is served by an ISP, the user does not view the content of the
website they're trying to access. Instead, they view a web page (the block page)
that informs them that they're not allowed to access the intended website.

A block page is the only form of internet censorship that clearly notifies
internet users of the censorship. Often, a block page references the law behind
the censorship.

As an example, below is a block page served by ISPs in Indonesia:
    
![Indonesian block page](/post/indonesia/indonesian-blockpage.png)

Based on OONI's heuristics, internet censorship is automatically confirmed when
a block page is detected.

### Caching

Caching is the process of storing data in a temporary storage that allows faster
access for future usage.

For example, a web [server](#server) may cache certain web resources so they can be loaded
faster when a user requests them.

### Circumvention tools

Circumvention tools are technologies that enable their users to bypass internet
censorship, such as the blocking of websites and social media apps.

Circumvention tools enable their users to access internet services that are
blocked by their [Internet Service Providers (ISPs)](#isp).

VPNs and proxies are common circumvention tools, while
[Tor](https://www.torproject.org/) also provides its users with online privacy
and anonymity (in addition to censorship circumvention).

### Client

In the world of computers, a client is a piece of software or hardware that
interacts with a service hosted by a server.

The [OONI Probe app](https://ooni.org/install/), for example, is a client that
communicates with OONI servers in order to submit testing results.

### Data processing pipeline

A data processing pipeline is a software system designed to process data.

The [OONI data processing pipeline](https://github.com/ooni/pipeline) is
responsible for aggregating network measurement data from OONI Probe users and
analyzing the data to identify network anomalies around the world.

### DNS

DNS stands for "Domain Name System" and it maps domain names to [IP addresses](#ip-address).

A domain is a name that is commonly attributed to websites (when they're
created), so that they can be more easily accessed and remembered. For example,
`wikipedia.org` is the domain of the Wikipedia website.

However, computers can't connect to internet services through domain names, but
based on IP addresses: the digital address of each service on the internet.
Similarly, in the physical world, you would need the address of a house (rather
than the name of the house itself) in order to visit it.

The Domain Name System (DNS) is what is responsible for transforming a human-
readable domain name (such as `ooni.org`) into its numerical IP address
counterpart (in this case:`104.198.14.52`), thus allowing your computer to
access the intended website.

### DNS hijacking

DNS hijacking (otherwise known as "DNS poisoning") occurs when, upon looking up
the address of a particular domain, the queried [DNS resolver](#dns-resolver) is 'dishonest',
intentionally returning an incorrect answer.

As a result, you either receive the IP address of a [block page](#block-page), or you get a
response claiming that the domain name does not exist.

When Internet Service Providers (ISPs) receive government orders to block
specific websites, they sometimes adopt this technique. In these cases, it may
be possible to circumvent the censorship merely by changing your DNS resolver,
or by using encrypted [DNS](#dns), such as [DNS over HTTPS](#dns-over-https).

### DNS lookup

When you try to access a website in your browser, the request is forwarded to a
[DNS resolver](#dns-resolver), requesting the corresponding [IP address](#ip-address) to the domain name you entered.

To check whether websites are blocked by means of DNS, [OONI Probe](https://ooni.org/install/) starts off by performing a DNS lookup to see
which IP addresses are mapped to tested domains by the user's DNS resolver. If
the IP addresses do *not* match those allocated by another DNS resolver (known
to not implement censorship), it's possible that censorship is implemented at
the DNS level. 

A more detailed description of how OONI's Web Connectivity test works is
available [here](https://ooni.org/nettest/web-connectivity/).

### DNS over HTTPS

A way to perform [DNS lookups](#dns-lookup) using [HTTPS](#https).

### DNS over TLS

A way to perform [DNS lookups](#dns-lookup) using [TLS](#tls).

### DNS over UDP

The standard way to perform [DNS lookups](#dns-lookup) over the internet. The client sends a one-off
[UDP](#udp) packet to the [server](#server) containing a [query](#dns-query) and awaits up until a given timeout
to receive the response to the query.

### DNS query

A DNS query (otherwise known as a "DNS request") is a request for information
sent from a user's computer to a DNS server.

In most cases, a DNS request is sent to ask for the IP address associated with a
domain name (such as `ooni.org`).

### DNS resolver

A DNS resolver is a [server](#server) which maps domain names to IP addresses, operating like
an "address book".

A DNS resolver manages [DNS requests](#dns-query) (for all the clients
on its network) and is responsible for transforming host (/domain) names (such as
`ooni.org`) into IP addresses (such as `104.198.14.52`).

Internet Service Providers (ISPs), amongst other service providers (such as Google), run DNS
resolvers that can be queried to receive the IP address of a given website.

### DNS spoofing

DNS spoofing (also referred to as "DNS injection") occurs when [DNS queries](#dns-query) are
intercepted and spoofed (faked) DNS answers are injected in response.

This does *not* involve [DNS misconfiguration](https://ooni.org/post/not-quite-network-censorship/), nor is it similar to [DNS hijacking](#dns-hijacking) where DNS resolvers
reply with a forged response.

DNS spoofing is a more sophisticated technique that imitates the
legitimate response of the queried DNS server, yet providing fake data.

When Internet Service Providers (ISPs) receive government orders to block
specific websites, they sometimes adopt this technique, intercepting DNS traffic
and replying with a spoofed response for the banned sites (preventing access).

### DNS tampering

DNS tampering is an **umbrella term used to describe various forms of DNS
interference**, including [DNS hijacking](#dns-hijacking) and [DNS spoofing](#dns-spoofing).

Internet services (such as websites and apps) are hosted on IP addresses, which
are digital addresses on the internet. To visit a website, you need its IP
address.

To obtain the IP address of a website, your computer needs to query a [DNS resolver](#dns-resolver) for it
(since it manages a database of IP addresses that correspond to domains).

DNS tampering occurs when, upon performing a DNS Lookup for a website, a wrong
IP address is being returned, preventing you from visiting the requested website.

DNS tampering can happen in various ways, including:
    
* **DNS hijacking:** Where the DNS resolver 'lies' and returns the wrong IP
address.

* **DNS spoofing:** Where your DNS request is intercepted and you receive the
wrong IP address.

DNS tampering is a common censorship technique adopted by Internet Service
Providers (ISPs) around the world.

The [OONI Probe apps](https://ooni.org/install/) measure the [DNS tampering of websites and apps](https://ooni.org/nettest/).

### Domain fronting

Domain fronting (also sometimes known as "cloud fronting") is a censorship
circumvention technique which relies on using a popular domain name hosted on a
big cloud service provider to "front" traffic towards a circumvention service
hosted on the same cloud service.

For example, this could involve setting up a service on the Google Cloud under the domain
`circumvention-service.google-cloud.com`, but fronting it via `google.com`. This means
that from the perspective of someone observing network traffic, all that they can
see is an encrypted TLS connection towards `google.com`. Yet, inside of this
encrypted connection, the client says "actually I want to access
`circumvention-service.google-cloud.com`", circumventing any potential block.

As a result, the censor would either have to block all of Google Cloud (and
therefore disrupt other services too) or they would have a hard time
distinguishing requests towards `circumvention-service.google-cloud.com` from
requests to `google.com`. This concept is called "[collateral freedom](https://www.upturn.org/static/files/CollateralFreedom.pdf)", as it
relies on censors *not* causing collateral damage by blocking access to big
services (such as Google Cloud) that many other services rely on.

### Domain name

A domain is a name that is commonly attributed to websites (when they're
created), so that they can be more easily accessed and remembered.

For example, `www.wikipedia.org` is the domain of the Wikipedia website.

### DPI

Deep packet inspection (DPI) is a method of examining and managing
network traffic. This technology is used for a detailed inspection of data being
sent over a computer network.

As DPI enables advanced network management, it is commonly used by corporations
and Internet Service Providers (ISPs).

However, DPI technology can also be used for implementing internet censorship
(blocking of specific websites or apps) and online surveillance.

### Endpoint

Combination of an IP address, a port and a protocol name that uniquely identifies
a client or server on the internet. For example, the `1.1.1.1` address on port
`443` using the [TCP](#tcp) protocol identifies an endpoint used by Cloudflare [DNS over
HTTPS](#dns-over-https) services.

It is common to represent endpoints using a compact notation like: `1.1.1.1:443/tcp`,
where `:` separates the address and the port and `/` separates the port and the
protocol.

### False positive

A false positive is a test result that wrongly indicates that a particular
condition or attribute is present.

**Within the OONI context, false positives are OONI Probe test results (flagged
as "anomalous") which incorrectly indicate the presence of network
interference (such as the blocking of a website or app)**.

OONI Probe test results, collected from the network of the user, are
automatically compared with test results collected from a non-censored network.
If the results don't match, then the OONI Probe test result in question is
flagged as an "anomaly", indicating potential network interference. Many of
these anomalies are in fact cases of network interference, while some are false
positives.

False positives can occur due a number of reasons (partly due to limitations to
[OONI methodologies](https://ooni.org/nettest/), and partly due to the very
nature of how the internet works), such as the following:
    
* **Transient network failures:** If OONI Probe tests are performed on an
unstable network, the test results may show signs of potential [TCP/IP
interference](#tcpip-blocking), when in fact network errors can cause the TCP connection to
drop.

* **Unreliable servers:** If a website is hosted on an unreliable server or
otherwise encounters server issues, the tested website may return failures
(even though it's not interfered with) and the OONI Probe test may fail.

* **DNS resolution:** If the [DNS resolver](#dns-resolver) of an OONI Probe user (such as Google
or their local ISP) provides an IP address that is closest to the user
geographically, that IP address may differ from the IP address resolved from
a control vantage point, potentially incorrectly indicating the presence of
DNS tampering.

* **Geographical distribution of content:** Many websites serve different
content depending on the country that the user is connecting from. In these
cases, the HTTP responses from the network of the OONI Probe user and from
the control vantage point will differ, potentially incorrectly indicating
the presence of [HTTP](#http) based interference.

### HTTP

The Hypertext Transfer Protocol (HTTP) is the underlying protocol used by the World
Wide Web to transfer or exchange data across the internet.

The HTTP protocol allows communication between a [client](#client) and a [server](#server). It does so
by handling a client’s request to connect to a server, and the server’s response
to the client’s request.

All websites include an HTTP (or HTTPS) prefix (such as `http://example.com/`) so
that your computer (the client) can request and receive the content of a website
(hosted on a server).

The transmission of data over the HTTP protocol is **unencrypted**.

### HTTPS

The Hypertext Transfer Protocol Secure (HTTPS) -- also known as HTTP over [TLS](#tls), or
HTTP over SSL --  is **the HTTP protocol over an encrypted channel**.

Over the last years, most major websites on the internet started supporting HTTPS
(such as `https://www.facebook.com/`) so that the transmission of data (such as
passwords to login to websites) over the HTTP protocol is encrypted.

### HTTP blocking

HTTP blocking is an umbrella term used to describe various forms of HTTP
interference with the intention of preventing clients from retrieving
information from specific servers.

To access a website on the internet, an HTTP request is sent to the server
hosting the website you're trying to reach. If the request was successful, the
server will reply with the contents of the website, allowing access.

When Internet Service Providers (ISPs) receive government orders to block
specific websites, HTTP blocking is a common censorship technique that they may
adopt. There are many ways that they can implement censorship on the HTTP
protocol, such as the following:

* **Serving a block page:** In this case, the ISP intercepts the user's request
to access a specific website (e.g. `wikipedia.org`) and serves the user a block
page instead, which informs the user that they are not allowed to access the
requested website.

* **HTTP failure:** The user's [HTTP request](#http-request) (to access a specific internet
service) fails because it is intercepted by an HTTP transparent proxy, or the
ISP resets the connection or hijacks the (unencrypted) connection to
redirect it (preventing it from reaching the intended server).

The OONI Probe [Web Connectivity test](https://ooni.org/nettest/web-connectivity/) checks the above scenarios when measuring websites for HTTP
blocking (and other forms of internet censorship).

### HTTPS collectors

An HTTPS collector is a server that collects data over the encrypted [HTTPS
protocol](#https).

OONI utilizes HTTPS collectors in order to collect network measurements from
OONI Probe users around the world.

### HTTP header

HTTP headers are used to **transmit metadata** about the [HTTP request](#http-request) or
response to the server or the client.

Certain HTTP headers are standardised for transmitting common bits of
information, such as the User-Agent header field, which is used to tell the
[server](#server) which browser is performing the request.

Every time you connect to a server, you (the [client](#client)) send a request through the
[HTTP protocol](#http) to that server. Such requests include **HTTP headers**, which
request certain types of information based on various types of information
fields ("HTTP header fields"). These fields include the "Host header", which
includes information about the specific domain you want to access. For example,
when you connect to `ooni.org`, the 'host' header of your HTTP request includes
information which communicates that you want to access that domain.

When measuring the blocking of websites, the OONI Probe [Web Connectivity test](https://ooni.org/nettest/web-connectivity/) compares the HTTP headers of
the tested website from the network of the user with a non-censored network (as
part of a larger testing methodology).

### HTTP request

Every time you visit a website, your browser (the [client](#client)) sends a request ("HTTP
request") through the HTTP protocol to the server that is hosting the website.
A server normally replies with a "HTTP response" which includes the content of
the website it is hosting.

In some cases though, Internet Service Providers (ISP) prevent users from
accessing certain websites by blocking or interfering with the connection
between them and the server. This is a form of [HTTP blocking](#http-blocking),
[measured](https://ooni.org/nettest/web-connectivity/) by the [OONI Probe app](https://ooni.org/install/).

### HTTP response

Every time you visit a website, your browser (the client) sends a request
("[HTTP request](#http-request)") through the HTTP protocol to the server that is hosting the
website.

In response to an HTTP request, a server will send an HTTP response, which
includes HTTP response headers and optionally a response body, which in the case
of a website will be the content of the page.

### HTTP status codes

HTTP status codes are standardized codes (maintained by the Internet Assigned
Numbers Authority or IANA) that are issued by a server in response to a client's
request. As suggested by their name, these codes communicate the status of an
HTTP response.

HTTP status codes are divided into specific ranges, depending on the type of status they are communicating:

* **100-199**: are used to communicate information to the client
* **200-299**: are used to indicate a successful request
* **300-399**: are used for redirecting the request to another location
* **400-499**: are used to indicate errors in the request by the client
* **500-599**: are used to indicate server-side errors

Common HTTP status codes include:

* HTTP status **200** (OK): Used to indicate that the request was successful. This
is generally the status code used most commonly for successful page loads.

* HTTP status **301** (Moved Permanently): When the resource requested by the
client is now available at a different location.

* HTTP status **302** (Found): When the resource requested by the client can be
**temporarily accessed** at a different location.

* HTTP status **400** (Bad Request): When the application you are using (such as
your web browser) accesses a server incorrectly or the request was corrupted.

* HTTP status **401** (Unauthorized): When you try to access a web page that requires
authentication credentials without you having provided any.

* HTTP status **403** (Forbidden): When you try to access a restricted directory on
a website that you don't have the correct authorized credentials for.

* HTTP status **404** (Not Found): When you try to access a resource on a web
server (usually a web page) that doesn’t exist (because, for example, you have
mistyped a URL).

* HTTP status **451** (Unavailable For Legal Reasons): When the resource that you are
trying to access is blocked by the server due to legal restrictions. This is
the status code used for implementing internet censorship.

* HTTP status **500** (Internal Server Error): General-purpose error message when a
web server encounters some form of internal error.

When measuring the blocking of websites, the OONI Probe [Web Connectivity test](https://ooni.org/nettest/web-connectivity/) compares the HTTP status codes
of the tested website from the network of the user with a non-censored network
(as part of a larger testing methodology).

### HTTP transparent proxy

An HTTP transparent proxy is a type of [middlebox](#middlebox), an intermediary system that
sits between a [client](#client) and a [server](#server) and performs actions over the [HTTP protocol](#http).

When a user makes a request to a server (for example, to access `wikipedia.org`),
the transparent proxy intercepts the request to perform various actions (such as
caching, redirection, and authentication).

Many Internet Service Providers (ISPs) around the world use HTTP transparent
proxies for a number of purposes; for example, to improve network performance or
to provide users with faster access to websites.

Sometimes though, HTTP transparent proxies are also used to implement internet
censorship and/or surveillance.

The [OONI Probe app](https://ooni.org/install/) includes two
[tests](https://ooni.org/nettest/) designed to measure networks with the aim of
identifying the presence of HTTP transparent proxies.

### Instant Messaging

Instant messaging (IM) technology is a type of online chat which offers real-time
text transmission over the internet.

WhatsApp, Facebook Messenger, and Telegram are examples of IM apps, all of which
are [measured](https://ooni.org/nettest/) for censorship by the [OONI Probe app](https://ooni.org/install/).

### Internet                         

The internet is a decentralized, international network of networks.

Devices, such as computers, connect to each other and form a network. Each
network is connected to other networks, which are connected to each other
through electronic, wireless and optical networking technologies.

Multiple interconnected networks form the internet.

### Internet blackout

An internet blackout (also referred to as "internet outage" or "internet shutdown") occurs when the
internet is completely turned-off in a country or region. The area or network
affected by the internet blackout has no internet access at all.

An internet blackout may be *intentional* (ordered by a government) -- in which
case, it constitutes a form of internet censorship -- or it may have been caused
*unintentionally* (for example, due to disruption of cables).

Since [OONI Probe](https://ooni.org/install/) requires internet connectivity in order to perform tests,
measuring internet blackouts is currently out of scope.

Several [public data sources](https://ooni.org/post/examining-internet-blackouts/) are available for monitoring internet blackouts, such as
[IODA](https://ioda.inetintel.cc.gatech.edu/).

### Internet censorship

Internet censorship is the *intentional* control or suppression of what can be accessed,
published, or viewed on the internet.

Internet Service Providers (ISPs) usually implement internet censorship based on
government orders and/or in compliance with national legislation. This involves
blocking access to specific websites and/or applications, preventing users of
that specific network from accessing specific internet services.

As internet censorship is implemented on the network level, it may differ from
network to network, and from country to country.

### IP address

An Internet Protocol (IP) address is a unique numerical address that identifies
a device or service on the internet.

An IP address serves 2 main functions:
    
1. **Identification:** An IP address distinguishes a system from all other
systems on the internet.

2. **Location:** An IP address serves as a **digital address** for a system,
enabling other systems on the internet to reach it.

To connect to the internet, every device is assigned an IP address.

### ISP

An Internet Service Provider (ISP) is an organization that provides services for
accessing and using the internet.

ISPs can be state-owned, commercial, community-owned, non-profit, or otherwise
privately owned.

Vodafone, AT&T, Airtel, and MTN are examples of ISPs.

### Measurement

A network measurement is the process of measuring certain attributes of a
network.

Within the OONI context, a measurement is the **result of an OONI Probe test**.

Each [OONI Probe test](https://ooni.org/nettest/) is designed to measure
different forms of network interference. Depending on the test, each OONI
measurement contains a different result.

Here is an example of an OONI measurement: https://explorer.ooni.org/measurement/20191024T090549Z_AS42668_D8RVKYKWbqzaTopEcH3K6qy8yzOHVe1QgNeyzn686G1CbEveKU?input=http://kavkaznews.com/

### Metadata

Metadata is often described as “data about data” and is used to provide context
and description of the data.

Examples of metadata for a document may include its author and the date of
publication.

### Middlebox

A middlebox is a computer networking device that transforms, inspects, filters,
or otherwise manipulates traffic for purposes other than packet forwarding.

Many [Internet Service Providers (ISPs)](#ISP) around the world use middleboxes to
improve network performance, provide users with faster access to websites, and
for a number of other networking purposes.

Sometimes though, middleboxes are also used to implement internet censorship
and/or surveillance.

The [OONI Probe app](https://ooni.org/install/) includes two
[tests](https://ooni.org/nettest/) designed to measure networks with the aim of
identifying the presence of middleboxes.

### Mirror website

A mirror website is a replica of another website. Such websites have different
URLs, but identical or near-identical content.

Mirror websites are often set up in an attempt to circumvent internet
censorship. When [ISPs](#isp) block access to a website, they block access to its URL. By
changing the [domain name](#dns), these website owners can enable the public to access the
content of their site.

### Nettest

Nettest is an abbreviation for "network test".

Within the OONI context, nettests refer to OONI Probe network measurement tests.

Descriptions for OONI Probe nettests are available here: https://ooni.org/nettest/

### Network
                          
Devices, such as computers, connect to each other and form a network to exchange
data.

Each network is connected to other networks, which are connected to each other
through electronic, wireless and optical networking technologies. The internet
is formed by multiple interconnected networks.

### Network anomaly

A network anomaly is network behavior that deviates from what is standard,
normal, or expected.

Within the OONI context, network anomalies are testing results which deviate
from what is expected based on the [methodologies of OONI Probe tests](https://ooni.org/nettest/).

OONI Probe test results, collected from the network of the user, are
automatically compared with test results collected from a non-censored network.
If the results don't match, then the OONI Probe test result in question is
flagged as an "anomaly", indicating potential network interference.

### Network interference

Network interference is an umbrella term used to describe various forms of
interference that occur on networks on the internet.

Within the OONI context, the term network interference is primarily used to
refer to cases of internet censorship and traffic manipulation.

### Onion services

[Onion services](https://community.torproject.org/onion-services/overview/) (previously known as "Tor hidden services") are internet services that can only be accessed over the Tor network, providing their users with all the security of HTTPS with the added privacy benefits of Tor Browser. 

Websites, for example, can be placed in an anonymous network location through the use of onion services, which allow them to hide their IP address and provide more privacy to their visitors. You can distinguish such websites through their .onion addresses, such as https://brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion/ or https://www.nytimesn7cgmftshazwhfgzm37qxb44r64ytbb2dj3x62d2lljsciiyd.onion.

### OONI bouncer

The OONI bouncer is the service that is responsible for informing OONI Probe
clients:
    
* where they should submit their results

* what the addresses of the nettest helpers are so that they can receive assistance in performing tests

### OONI collector

The OONI collector is the service that is used for collecting measurements from
OONI Probe clients around the world.

### OONI Explorer

[OONI Explorer](https://explorer.ooni.org/) is a web interface which provides a
location to explore, search, and download all network measurements collected
[through OONI Probe](https://ooni.org/install/) tests from 2012 until today.

### OONI nettest helpers

The OONI nettest helpers implement server-side protocols that are of assistance
to OONI Probe clients running tests. For example, OONI Probe clients speak to a
test helper to learn what the expected content of a website is in order to do
the control comparison and determine if that website is blocked.

### OONI Probe

OONI Probe is [free and open source software](https://github.com/ooni) designed
to measure internet censorship and other forms of network interference.

OONI Probe has been developed by the [Open Observatory of Network Interference](https://ooni.org/) since 2012 and is available on [Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe),
[iOS](https://itunes.apple.com/us/app/id1199566366),
[Linux](https://ooni.org/install/cli), [Windows and macOS](https://ooni.org/install/desktop).

### OONI Run

[OONI Run](https://run.ooni.io/) is a web interface that enables OONI Probe
mobile app users to generate links for **customized OONI Probe testing**.

This tool serves **to coordinate censorship measurement with other OONI Probe users** in a country or around the world.

[OONI Run links](https://ooni.org/support/ooni-run/) can be generated by adding URLs of the user's choice. The goal is to share this generated OONI Run link with other OONI Probe mobile app users,
so that they can test the sites that were chosen when the link
was generated.

The OONI Run platform can also be used to generate widget code to embed an OONI
button (for customized OONI Probe testing) on a website.

### Performance

Network performance is a measure to define the quality of a network connection.
This can be measured in several ways (e.g. speed, bandwidth, latency, error
rate).

### Protocol

Protocols are a set of rules or procedures for transmitting data between
electronic devices (such as computers) on the internet. These rules determine
how information will be structured and how it will be sent and received over the
internet.

The internet consists of various types of protocols, such as the Internet
Protocol (IP) which is used to direct data packets to a specific computer or
server.

### Proxy

A proxy is a [server](#server) that acts as an intermediary service through which you can
channel some or all of your internet communication. Proxies can therefore be
used to bypass internet censorship.

### Raspberry Pi

Raspberry Pi is the name of a series of single-board computers made by the
[Raspberry Pi Foundation](https://www.raspberrypi.org/), a UK charity that aims
to educate people in computing and create easier access to computing education.

OONI previously created an OONI Probe distribution for Raspberry Pis, called
[Lepidopter](https://ooni.org/install/lepidopter/).

### Server

A server is a computer that remains on and connected to the internet in order to
provide internet services to other computers.

All internet services (such as websites, apps, and emails) are hosted on
servers, which are responsible for receiving requests from other computers and
responding to those requests (for example, by providing access to the websites
they're hosting).

### TCP

The Transmission Control Protocol (TCP) is one of the main protocols on the
internet. 

To connect to a website, your computer needs to establish a TCP
connection to the address of that website.

TCP works on top of the Internet Protocol (IP), which defines how to address
computers on the internet.

When speaking to a machine over the TCP protocol you use an IP and port pair, also
called [endpoint](#endpoint), which looks something like this: 10.20.1.1:8080.

The main difference between TCP and (another very popular protocol called) [UDP](#udp)
is that TCP has the notion of a “connection”, making it a “reliable” transport
protocol.

### TCP/IP blocking

TCP/IP blocking is a form of internet censorship that is implemented by
preventing a [client](#client) from establishing a [TCP](#tcp) connection to an internet service.

This is achieved by either preventing the target IP from being reachable or
actively resetting (i.e. injecting TCP RST packets) the connection to the
IP:Port pair.

[OONI Probe](https://ooni.org/install/) measures the TCP/IP blocking of websites
and apps.

### Test input

Test input (in the context of [OONI Probe](https://ooni.org/install/)) is an
internet resource (such as a [URL](#url), [domain](#dns), or [IP address](#ip-address)) that is the target of a
measurement.

### Test list

A [test list](https://github.com/citizenlab/test-lists/tree/master/lists) is a
machine-readable CSV file that includes URLs that are tested for censorship by
tools like [OONI Probe](https://ooni.org/install/).

Censorship measurement projects like OONI rely on a global community of
volunteers who run censorship detection tests from local vantage points. In
light of bandwidth constraints, testing most websites available on the internet
is not practical (nor possible in many cases). Instead, our measurements focus
on a *sample* of websites provided in “test lists”: machine-readable CSV files
with a set of curated, interesting [URLs](#url).

There are two types of test lists:
    
* **Global test list:** Includes a wide range of internationally relevant websites (e.g. wikipedia.org), most of which are in English 

* **Country-specific test lists:** Include websites that are only relevant to a specific country (e.g. Brazilian media websites), many of which are in local languages

Test lists are [hosted](https://github.com/citizenlab/test-lists) and managed by
the [Citizen Lab](https://citizenlab.ca/).

### TLS

Transport Layer Security (TLS) -- also referred to as "SSL" -- is a
cryptographic protocol that allows you to maintain a secure, encrypted
connection between your computer and an internet service.

When you connect to a website though TLS, the address of the website will begin
with [HTTPS](#https) (such as `https://archive.org/`), instead of HTTP.

### Tor

The [Tor network](https://www.torproject.org/), which is free and open source,
provides its users with online anonymity, privacy, and censorship circumvention.
Tor software is designed to bounce communications around a distributed network
of relays run by volunteers around the world, thereby hiding its users' [IP addresses](#ip-address) and
enabling them to circumvent online tracking and internet censorship.

### Traffic manipulation

Traffic manipulation (a form of network interference) describes adversarial
access to a network connection with capabilities to modify the data stream.

A middlebox (a computer networking device), for example, can be used by an
[Internet Service Provider (ISP)](#isp) to inspect, transform, filter, or otherwise
manipulate internet traffic.

### UDP

The User Datagram Protocol (UDP) is one of the main protocols on the
internet.

Unlike [TCP](#tcp), which has the the notion of a “connection” and is reliable, UDP
allows one to send one-off packets over the internet.

### URL

A URL is the address of a World Wide Web page.

For example, `https://archive.org/` is a URL, while archive.org is a domain.

### Vantage point

A network vantage point is a unique network location from which internet
measurements are performed. In the context of OONI Probe, we consider a vantage
point to be a unique network and country pair, such as the vantage point of
“Vodafone in Italy”.

### VPN

A Virtual Private Network (VPN) is software that creates an encrypted connection
(commonly called "tunnel") from your device to a server (run by a VPN provider).

When you browse the internet through this "tunnel", websites and other online
services will receive requests from the [IP address](#ip-address) of that [server](#server), rather than
from your actual IP address.

VPNs can therefore be used to circumvent internet censorship.

----------------------------------------------------------------------------------------


***Special thanks to Anatol (OONI community member) for contributing to this
glossary.***
