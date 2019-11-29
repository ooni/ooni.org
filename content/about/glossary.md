# OONI Glossary

This glossary contains *brief explanations* for terms used in OONI apps,
methodologies, and research reports.

If you would like to see additional terms in this glossary, please [open a pull request](https://github.com/TheTorProject/ooni-web) or [send us an email](https://ooni.org/about/#contact).

* [API](#api)

* [AS](#as)

* [ASN](#asn)

* [BGP](#bgp)

* [Blocklist](#blocklist)

* [Block page](#block-page)

* [Caching](#caching)

* [Circumvention tools](#circumvention-tools)

* [Client](#client)

* [Cloud-fronting](#cloud-fronting)

* [Data processing pipeline](#data-processing-pipeline)

* [DNS](#dns)

* [DNS hijacking](#dns-hijacking)

* [DNS lookup](#dns-lookup)

* [DNS query](#dns-query)

* [DNS resolver](#dns-resolver)

* [DNS spoofing](#dns-spoofing)

* [DNS tampering](#dns-tampering)

* [Domain](#domain)

* [DPI](#dpi)

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

* [Orchestration](#orchestration)

* [Performance](#performance)

* [Protocol](#protocol)

* [Proxy](#proxy)

* [Raspberry Pi](#raspberry-pi)

* [Server](#server)

* [TCP](#tcp)

* [TCP/IP blocking](#tcp-ip-blocking)

* [Test input](#test-input)

* [Test list](#test-list)

* [TLS](#tls)

* [Tor](#tor)

* [Traffic manipulation](#traffic-manipulation)

* [URL](#url)

* [VPN](#vpn)

### API

An Application Programming Interface (API) is an interface that enables
programmers to write integration code between different services.

The [OONI API](https://api.ooni.io/) provides an interface that enables users to
request specific types of OONI data and to download such data in a specific
format (JSON).

The article, ["What is an API? In English, please"](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/), explains what an API is quite well.

### AS

The internet is run by a collection of thousands of autonomous systems (AS) that
coordinate with each other to share routing information: directions on how to
reach IP addresses on the internet.

Generally, an Internet Service Provider (ISP) will be responsible for one or
more AS's.

Each AS is responsible for delivering IP packets to a set of IP addresses that
it manages.

### ASN

An Autonomous System Number (ASN) is a unique identifier of an autonomous system
(AS). This number allows its autonomous system to exchange routing information
with other systems.

Internet Service Providers (ISPs) must have an officially registered ASN.

OONI Probe collects the ASN to identify the network in which each test was
performed.

A simple Google search of an ASN number will show you which ISP it corresponds
to. For example, if you search "AS30722", you will see that it belongs to
"Vodafone Italia".

### BGP

The Border Gateway Protocol (BGP) is a standardized exterior gateway protocol
designed to exchange routing and reachability information among autonomous
systems (AS) on the internet.

BGP data, aggregated and published by organizations such as
[RIPE](https://www.ripe.net/) and [CAIDA](https://www.caida.org/), can be useful
in detecting internet outages.

### Blocklist

A blocklist is a list of internet resources (such as websites and IP addresses)
which are blocked and users are denied access to them.

Some governments occasionally publish official blocklists (or they get leaked)
which contain lists of websites that are legally prohibited in a country.

Internet Service Providers (ISPs) are then ordered to block access to all
websites included in such blocklists, commonly involving hundreds (or thousands)
of URLs that contain content illegal in that country (such as gambling, file
sharing, adult content, etc.).

### Block page

A block page (or "Access Denied Page") is a web page that is displayed when a
user attempts to access a website they are not permitted to view.

This is a censorship technique adopted by Internet Service Providers (ISPs) in
several countries (such as Iran, Indonesia, Greece, and Italy).

When a block page is served by an ISP, the user does not view the content of the
website they're trying to access. Instead, they view a web page (the block page)
that informs them that they're not allowed to access the intended website.

A block page is the only form of internet censorship where internet users are
clearly notified of the censorship. Often, a block page references the law
behind the censorship.

As an example, below is a block page served by ISPs in Indonesia:
    
![Indonesian block page](/post/indonesia/indonesian-blockpage.png)

Based on OONI's heuristics, internet censorship is automatically confirmed when
a block page is detected.

### Caching

Caching is the process of storing data in a cache, which is a temporary storage
area.

Caching aims to store data so that future requests for that data can be served
faster.

### Circumvention tools

Circumvention tools are technologies that enable their users to bypass internet
censorship, such as the blocking of websites and social media apps.

Circumvention tools enable their users to access internet services that are
blocked by their Internet Service Providers (ISPs).

VPNs and proxies are common circumvention tools, while
[Tor](https://www.torproject.org/) also provides its users with online privacy
and anonymity (in addition to censorship circumvention).

### Client

In the world of computers, a client is a piece of software or hardware that
accesses a service made available by a server.

The [OONI Probe app](https://ooni.org/install/), for example, is a client and it
communicates with OONI servers in order to submit testing results.

### Cloud-fronting

Cloud-fronting (commonly referred to as "domain-fronting") is a technique that
circumvents internet censorship by appearing to connect to the domain of a cloud
provider  -- such as google.com or awsstatic.com (Amazon cloud infrastructure)
-- while actually connecting to a blocked website.

This technique, therefore, not only provides users access to blocked internet
services, but it also hides the fact that they are accessing those services at
all.

OONI Probe used to support uploading measurements through the use of cloud-
fronting, but this is no longer supported since cloud-fronting was disabled by
[Google](https://arstechnica.com/information-technology/2018/04/google-disables-domain-fronting-capability-used-to-evade-censors/) and
[Amazon](https://www.theverge.com/2018/4/30/17304782/amazon-domain-fronting-google-discontinued) in April 2018.

### Data processing pipeline

A data processing pipeline is a software system designed to process data.

The [OONI data processing pipeline](https://github.com/ooni/pipeline) is
responsible for aggregating network measurement data from OONI Probe users and
analyzing the data to identify network anomalies around the world.

### DNS

DNS stands for "Domain Name System" and it maps domain names to IP addresses.

A domain is a name that we attribute to websites (when we create them), so that
we can more easily remember and access them. For example, twitter.com is the
domain of the Twitter website (`https://twitter.com/`).

However, computers can't connect to internet services through domain names, but
based on IP addresses: the digital address of each service on the internet.
Similarly, in the physical world, you would need the address of a house (rather
than the name of the house itself) in order to visit it.

The Domain Name System (DNS) is what is responsible for transforming a human-
readable domain name (such as twitter.com) into a numerical IP address (such as
38.229.72.16), allowing you to access an internet service.

### DNS hijacking

DNS hijacking (otherwise known as "DNS poisoning") occurs when you lookup the
address of a particular domain name and your DNS resolver (the server managing
your DNS requests) is dishonest, intentionally providing you an incorrect
answer.

As a result, you receive a forged response, such as the following:

* **NXDOMAIN:** A response indicating that the requested domain is either not
registered or invalid.

* **Block page:** A web page that informs you that the requested domain has
deliberately been blocked.

* **Error page:** A web page that informs you that the requested domain does not
exist or has been misspelled.

When Internet Service Providers (ISPs) receive government orders to block
specific websites, they sometimes adopt this technique. In these cases, it may
be possible to circumvent the censorship by merely changing your DNS resolver.

### DNS lookup

When you perform a DNS lookup, you ask your DNS resolver (the server managing
your DNS requests) to disclose which IP addresses correspond to specific domain
names.

To check whether websites are blocked by means of DNS, [OONI Probe](https://ooni.org/install/) starts off by performing a DNS lookup to see
which IP addresses are mapped to tested domains by the user's DNS resolver. If
the IP addresses do *not* match those allocated by another DNS resolver (known
to not implement censorship), it's possible that censorship is implemented at
the DNS level.

### DNS query

A DNS query (otherwise known as a "DNS request") is a request for information
sent from a user's computer to a DNS server.

In most cases, a DNS request is sent to ask for the IP address associated with a
domain name (such as twitter.com).

### DNS resolver

A DNS resolver is a server that stores a central database of DNS nameservers
(which define the DNS providers of domains), operating like an "address book".

Based on this database, a DNS resolver manages DNS requests (for all the clients
on its network) and is responsible for transforming host names (such as
twitter.com) into IP addresses (such as 38.229.72.16).

Internet Service Providers (ISPs), amongst others (such as Google), run DNS
resolvers to map IP addresses to host names.

### DNS spoofing

DNS spoofing (also referred to as "DNS injection") occurs when DNS queries are
intercepted and spoofed DNS answers are injected in response.

This does *not* involve [DNS misconfiguration](https://ooni.org/post/not-quite-network-censorship/), nor is it similar to DNS hijacking where DNS resolvers
reply with a forged response.

Rather, DNS spoofing is a more sophisticated technique, as it imitates the
legitimate response of the queried DNS server, but it provides fake data.

When Internet Service Providers (ISPs) receive government orders to block
specific websites, they sometimes adopt this technique, intercepting DNS traffic
and replying with a spoofed response for the banned sites (preventing access).

### DNS tampering

DNS tampering is an **umbrella term used to describe various forms of DNS
interference**, including DNS hijacking and DNS spoofing.

Internet services (such as websites and apps) are hosted on IP addresses, which
are digital addresses on the internet. To visit a website, you need its IP
address.

To obtain the IP address of a website, you need to ask a DNS resolver for it
(since it manages a database of IP addresses that correspond to domains).

DNS tampering happens when instead of receiving the actual IP address for the
website you want to visit, you instead receive the wrong IP address and as a
result, you are unable to access the intended website.

DNS tampering can happen in various ways, including:
    
* **DNS hijacking:** Where the DNS resolver lies and gives you the wrong IP
address.

* **DNS spoofing:** Where your DNS request is intercepted and you receive the
wrong IP address.

DNS tampering is a common censorship technique adopted by Internet Service
Providers (ISPs) around the world.

The [OONI Probe apps](https://ooni.org/install/) measure the [DNS tampering of websites and apps](https://ooni.org/nettest/).

### Domain

A domain is a name that we attribute to websites (when we create them), so that
we can more easily remember and access them.

For example, **twitter.com** is the domain of the Twitter website
(`https://twitter.com/`).

### DPI

Deep packet inspection (DPI) is an advanced method of examining and managing
network traffic. This technology is used to inspect in detail the data being
sent over a computer network.

As DPI enables advanced network management, it is commonly used by corporations
and Internet Service Providers (ISPs).

However, DPI technology can also be used for implementing internet censorship
(blocking of specific websites or apps) and online surveillance.

### False positive

A false positive is a test result which wrongly indicates that a particular
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
unstable network, the test results may show signs of potential TCP/IP
interference, when in fact network errors can cause the TCP connection to
drop.

* **Unreliable servers:** If a website is hosted on an unreliable server or
otherwise encounters server issues, the tested website may return failures
(even though it's not interfered with) and the OONI Probe test may fail.

* **DNS resolution:** If the DNS resolver of an OONI Probe user (such as Google
or their local ISP) provides an IP addresses that is closest to the user
geographically, that IP address may differ from the IP address resolved from
a control vantage point, potentially incorrectly indicating the presence of
DNS tampering.

* **Geographical distribution of content:** Many websites serve different
content depending on the country that the user is connecting from. In these
cases, the HTTP responses from the network of the OONI Probe user and from
the control vantage point will differ, potentially incorrectly indicating
the the presence of HTTP based interference.

### HTTP

Hypertext Transfer Protocol (HTTP) is the underlying protocol used by the World
Wide Web which transfers or exchanges data across the internet.

The HTTP protocol allows communication between a client and a server. It does so
by handling a client’s request to connect to a server, and a server’s response
to a client’s request.

All websites include an HTTP (or HTTPS) prefix (such as `http://example.com/`) so
that your computer (the client) can request and receive the content of a website
(hosted on a server).

The transmission of data over the HTTP protocol is **unencrypted**.

### HTTPS

Hypertext Transfer Protocol Secure (HTTPS) -- also known as HTTP over TLS, or
HTTP over SSL --  is the **encrypted version of the HTTP protocol**.

Over the last years, many websites on the internet started supporting HTTPS
(such as `https://www.facebook.com/`) so that the transmission of data (such as
passwords to login to websites) over the HTTP protocol is encrypted.

### HTTP blocking

HTTP blocking is an umbrella term used to describe various forms of HTTP
interference with the intention of preventing clients from retrieving
information from specific servers.

To access a website on the internet, we need to send a request to the server
hosting that website, which in turn will provide us access by giving us the
content of the requested website in its response.

When Internet Service Providers (ISPs) receive government orders to block
specific websites, HTTP blocking is a common censorship technique that they
adopt. There are many ways that they can implement censorship on the HTTP
protocol, such as the following:

* **Serving a block page:** In this case, the ISP intercepts the user's request
to access a specific website (e.g. facebook.com) and serves the user a page
(the "block page") which informs the user that they are not allowed to
access the requested website.

* **HTTP failure:** The user's HTTP request (to access a specific internet
service) fails because it is intercepted by an HTTP transparent proxy, the
ISP resets the connection or hijacks the (unencrypted) connection to
redirect it (to prevent it from reaching the intended server).

The OONI Probe [Web Connectivity test](https://ooni.org/nettest/web-connectivity/) checks the above scenarios when measuring websites for HTTP
blocking (and other forms of internet censorship).

### HTTPS collectors

An HTTPS collector is a server that collects data over the encrypted HTTPS
protocol.

OONI utilizes HTTPS collectors in order to collect network measurements from
OONI Probe users around the world.

### HTTP header

An HTTP header is the section of the request and response messages that defines
the operating parameters of an HTTP transaction between a client and a server.

Every time you connect to a server, you (the client) send a request through the
HTTP protocol to that server. Such requests include **HTTP headers**, which
request certain types of information based on various types of information
fields ("HTTP header fields"). These fields include the "Host header", which
includes information about the specific domain you want to access. For example,
when you connect to ooni.org, the host header of your HTTP request includes
information which communicates that you want to access that domain.

When measuring the blocking of websites, the OONI Probe [Web Connectivity test](https://ooni.org/nettest/web-connectivity/) compares the HTTP headers of
the tested website from the network of the user with a non-censored network (as
part of a larger testing methodology).

### HTTP request

In order to connect to a server hosting an internet service (such as a website
or application), you need to request access to it through the HTTP protocol.
This is what we call an HTTP request.

Every time you connect to a website, your browser (the client) sends a request
("HTTP request") through the HTTP protocol to the server which is hosting that
website. A server normally responds ("HTTP response") with the content of the
website it is hosting.

In some cases though, Internet Service Providers (ISP) prevent users from
accessing certain websites by blocking or interfering with the connection
between them and the server. This is a form of HTTP blocking,
[measured](https://ooni.org/nettest/web-connectivity/) by the [OONI Probe app](https://ooni.org/install/).

### HTTP response

Every time you connect to a website, your browser (the client) sends a request
("HTTP request") through the HTTP protocol to the server which is hosting that
website.

A server normally responds with the content of the website it is hosting. This
response is an HTTP response.

### HTTP status codes

HTTP status codes are standardized codes (maintained by the Internet Assigned
Numbers Authority) that are issued by a server in response to a client's
request. As suggested by their name, these codes communicate the status of an
HTTP response.

Common HTTP status codes include:

* HTTP Error *500*(Internal Server Error): General-purpose error message when a
web server encounters some form of internal error.

* HTTP Error *403*(Forbidden): When you try to access a forbidden directory on
a website.

* HTTP Error *404*(Not Found): When you try to access a resource on a web
server (usually a web page) that doesn’t exist (because, for example, you have
mistyped a URL).

* HTTP Error *400*(Bad Request): When the application you are using (such as
your web browser) accesses a server incorrectly or the request was corrupted.

* HTTP Error *401*(Unauthorized): When you try to access a restricted web page
but aren't authorized to do so (usually because of a failed login attempt).

When measuring the blocking of websites, the OONI Probe [Web Connectivity test](https://ooni.org/nettest/web-connectivity/) compares the HTTP status codes
of the tested website from the network of the user with a non-censored network
(as part of a larger testing methodology).

### HTTP transparent proxy

An HTTP transparent proxy is a type of middlebox, an intermediary system that
sits between a client and a server and performs actions over the HTTP protocol.

When a user makes a request to a server (for example, to access facebook.com),
the transparent proxy intercepts the request to perform various actions (such as
caching, redirection, and authentication).

Many Internet Service Providers (ISPs) around the world use HTTP transparent
proxies to improve network performance, provide users with faster access to
websites, and for a number of other  purposes.

Sometimes though, HTTP transparent proxies are also used to implement internet
censorship and/or surveillance.

The [OONI Probe app](https://ooni.org/install/) includes two
[tests](https://ooni.org/nettest/) designed to measure networks with the aim of
identifying the presence of HTTP transparent proxies.

### Instant Messaging

Instant messaging (IM) technology is a type of online chat that offers real-time
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

An internet blackout (also referred to as "internet outage") occurs when the
internet is completely turned-off in a country or region. The area or network
affected by the internet blackout has no internet access at all.

An internet blackout may be *intentional* (ordered by a government) -- in which
case, it constitutes a form of internet censorship -- or it may have been caused
*unintentionally* (for example, due to disruption of cables).

Since [OONI Probe](https://ooni.org/install/) requires internet connectivity in order to perform tests,
measuring internet blackouts is currently out of scope.

Several [public data sources](https://ooni.org/post/examining-internet-blackouts/) are available for monitoring internet blackouts, such as
[IODA](https://ioda.caida.org/).

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

Many Internet Service Providers (ISPs) around the world use middleboxes to
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

Mirror websites are often set-up in an attempt to circumvent internet
censorship. When ISPs block access to a website, they block access to its URL. By
changing the domain, these website owners can enable the public to access the
content of their site.

### Nettest

Nettest is an abbreviation for "network test".

Within the OONI context, nettests refer to OONI Probe network measurement tests.

Descriptions for OONI Probe nettests are available here: https://ooni.org/nettest/

### Network
                          
Devices, such as computers, connect to each other and form a network to exchange
data.

Each network is connected to other networks, which are connected to each other
through electronic, wireless and optical networking technologies. Multiple
interconnected networks form the Internet.

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

[Onion services](https://community.torproject.org/onion-services/) (previously
known as "Tor hidden services") are internet services that can only be accessed
[over the Tor network](https://www.torproject.org/), providing their users with
increased privacy and security benefits.

Websites, for example, can be placed in an anonymous network location through
the use of onion services, which allow them to hide their IP address and provide
more privacy to their visitors. You can distinguish such websites through their
.onion addresses, such as `https://facebookcorewwwi.onion/` or
`http://www.nytimes3xbfgragh.onion/`.

Over the last years, the [OONI Probe version for Linux and macOS](https://ooni.org/install/ooniprobe/) used onion services to upload
measurements to OONI servers.

### OONI bouncer

The OONI bouncer is the service that is responsible for informing OONI Probe
clients:
    
* where they should submit their results what the addresses of the nettest
* helpers are so that they can receive assistance in performing tests

### OONI collector

The OONI collector is the service that is used for collecting measurements from
OONI Probe clients around the world.

### OONI Explorer

[OONI Explorer](https://explorer.ooni.org/) is a web interface which provides a
location to explore, search, and download all network measurements collected
[through OONI Probe](https://ooni.org/install/) tests from 2012 until today.

### OONI nettest helpers

The OONI nettest helpers implement server-side protocols that are of assistance
to OONI Probe clients running tests.

### OONI Probe

OONI Probe is [free and open source software](https://github.com/ooni) designed
to measure internet censorship and other forms of network interference.

OONI Probe has been developed by the [Open Observatory of Network Interference](https://ooni.org/) since 2012 and is available on [Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe),
[iOS](https://itunes.apple.com/us/app/id1199566366),
[Linux](https://github.com/ooni/probe-cli/releases), [Windows and macOS](https://github.com/ooni/probe-desktop/releases).

### OONI Run

[OONI Run](https://run.ooni.io/) is a web interface that enables OONI Probe
mobile app users to generate links (custom URI scheme) for **customized OONI
Probe testing**.

This is intended to serve as a **tool for coordinating censorship measurement
with other OONI Probe users** in a country or around the world.

[OONI Run links](https://ooni.org/post/ooni-run/) can be generated by selecting
a specific OONI Probe test, or by adding URLs of the user's choice. The goal is
to share this generated OONI Run link with other OONI Probe mobile app users,
so that they can run the test or test the sites that were chosen (when the link
was generated).

The OONI Run platform can also be used to generate widget code to embed an OONI
button (for customized OONI Probe testing) on a website.

### Orchestration

Orchestration is the automated configuration, coordination, and management of
computer systems and software.

The [OONI Probe Orchestration System](https://github.com/ooni/orchestra) (also
referred to as "OONI Orchestra") is a software system that aims to dynamically
instrument the collection of OONI Probe measurements around the world
(particularly in response to emergent censorship events).

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

A proxy is a server that acts as an intermediary service through which you can
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
internet. It is a standard that defines how to establish and maintain a network
conversation via which application programs can exchange data.

In short, TCP is responsible for establishing and maintaining a connection to
internet services.

To connect to a website, for example, your computer needs to establish a TCP
connection to that website.

TCP works with the Internet Protocol (IP), which defines how computers send data
packets to each other.

### TCP/IP blocking

TCP/IP blocking is a form of internet censorship that is implemented by
preventing a client from establishing a TCP connection to an internet service.

[OONI Probe](https://ooni.org/install/) measures the TCP/IP blocking of websites
and apps.

### Test input

Test input is the internet resource (such as a URL, domain, or IP address) that
is measured by [OONI Probe](https://ooni.org/install/).

### Test list

A [test list](https://github.com/citizenlab/test-lists/tree/master/lists) is a
machine-readable CSV file that includes URLs that are tested for censorship by
tools like [OONI Probe](https://ooni.org/install/).

Censorship measurement projects like OONI rely on a global community of
volunteers who run censorship detection tests from local vantage points. In
light of bandwidth constraints, testing most websites available on the internet
is not practical (nor possible in many cases). Instead, our measurements focus
on a *sample* of websites provided in “test lists”: machine-readable CSV files
with a set of curated, interesting URLs.

There are two types of test lists:
    
* **Global test list:** Includes a wide range of internationally relevant websites (e.g. facebook.com), most of which are in English 

* **Country-specific test lists:** Include websites that are only relevant to a specific country (e.g. Brazilian media websites), many of which are in local languages

Test lists are [hosted](https://github.com/citizenlab/test-lists) and managed by
the [Citizen Lab](https://citizenlab.ca/).

### TLS

Transport Layer Security (TLS) -- also referred to as "SSL" -- is a
cryptographic protocol that allows you to maintain a secure, encrypted
connection between your computer and an internet service.

When you connect to a website though TLS, the address of the website will begin
with HTTPS (such as `https://www.facebook.com/`), instead of HTTP.

### Tor

The [Tor network](https://www.torproject.org/), which is free and open source,
provides its users with online anonymity, privacy, and censorship circumvention.
Tor software is designed to bounce communications around a distributed network
of relays run by volunteers around the world, hiding its users' IP addresses and
enabling them to circumvent online tracking and internet censorship.

### Traffic manipulation

Traffic manipulation (a form of network interference) describes adversarial
access to a network connection with capabilities to modify the data stream.

A middlebox (a computer networking device), for example, can be used by an
Internet Service Provider (ISP) to inspect, transform, filter, or otherwise
manipulate internet traffic.

### URL

A URL is the address of a World Wide Web page.

For example, `https://twitter.com/` is a URL, while twitter.com is a domain.

### VPN

A Virtual Private Network (VPN) is software that creates an encrypted "tunnel"
from your device to a server (run by a VPN provider).

When you browse the internet through this "tunnel", websites and other online
services will receive requests from the IP address of that server, rather than
from your actual IP address.

VPNs can therefore be used to circumvent internet censorship.

----------------------------------------------------------------------------------------

Special thanks to Anatol (OONI community member) for contributing to this
glossary.
