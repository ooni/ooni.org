---
title: "Tab-Tab, Come in! Bypassing Internet blocking to categorize DPI devices"
summary: "Analysis of censorship in Turkmenistan and Uzbekistan"
author: "Arturo Filastò and T."
date: "2013-05-14"
tags: ["uzbekistan", "turkmenistan", "country-tm", "country-uz"]
categories: ["report"]
aliases:
  - /tab-tab-come-in-bypassing-internet-blocking-to-categorize-dpi-devices.html
---

# Motivation

During the past two years, we have been following the technical developments in
Internet filtering in Uzbekistan and Turkmenistan. Internet users were
reporting that some websites were blocked, connections were reseted and in some
cases users were redirected to another website.

Apart from our technical curiosity of how Internet filtering is implemented at
large scale and how it can be circumvented, we are interested in providing
technical facts of how blocking is taking place. The lack of technical
information in this field has an interesting collateral effect in Internet
users. Lack of information, help rumours to spread and consolidate the idea
that governments have unlimited capabilities, that not only monitor all
communications but that ultimately nothing can be done to stop their control.
Understanding how Internet filtering is taking place is an important task as it
allows to discover mechanisms to bypass it and fingerprint and ultimately
expose the companies that provide technology and know-how to governments that
want to surpress the free flow of information in the Net.

# Our findings

The general Internet blocking architecture in Turkmenistan and Uzbekistan takes
places in two basic stages. The first stage is responsible to identify which
web/HTTP sessions are trying to reach a blacklisted website. This first stage
is hence responsible of matching if a certain user is trying to reach a website
that is blacklisted. Once the positive matching has taken place, the blocking
or filtering is implemented. We will refer to the first stage as "matching" and
the second as "blocking".

## Matching

During our technical investigation we found out that a key element in the
matching stage is the "Host header" in a HTTP session. Once the initial
handshake between user and the final webserver is established (TCP/IP
handshake) the browser will send a HTTP packet with a content like:


    GET / HTTP/1.1 Host: www.youtube.com


This first packet tells to the webserver that we want to request the homepage
of the website www.youtube.com

The Host header was introduced to be able to specify which domain we are
requesting in the common scenario that a single IP address is serving different
websites (think here in shared/virtual hosting). The Host header is optional in
HTTP 1.0 but mandatory in HTTP 1.1. According the standards, the GET request
line and the Host header must end with carriage return character followed by a
line feed character `<CR><LF>`.

Independently of which type of interception technology is used, matching takes
place by observing the HTTP Host header field. There are some good technical
reasons to implement the matching in this way. Filtering gear does not need to
keep track of IP addresses, can operate in stealth mode as it does not need to
perform any name resolution and inspecting packets for this header is as
technically challenging as keeping track of the content of the full HTTP
sessions.

This matching method is simple and even more effective with the current trend
of webservers or websites to force users to use the correct domain name when
requesting resources from the server. 


## Filtering

Once the matching is positive, blocking can take place if desired. We have
identified three basic methods used to block a session. Reset, Proxying and
Active Redirection.

### Reset

In the reset method, two RST packets will be send to both ends of the
communication. By injecting these two packets between the communicating
parties, both the Internet user/browser and the blacklisted webserver will be
instructed to terminate the connection. This blocking method is present in
Turkmenistan when we could effectively trigger RST traffic as a result of a
domain name present in the Host Header. 

To verify if the traffic between the browser and the blocked website was fully
blocked, we decided to ignore RST packets in both ends of the communication.
The result of the experiment is that it was possible to visit the blocked
website and the interception gear was not implementing a full blocking of all
traffic. Unfortunately ignoring all RST packets is not possible and makes this
method to bypass the blocking unpractical.

There are some good technical reasons why filtering is implemented using RST
packets. The filtering gear does not need to keep track of each of the sessions
(stateless) and the blocking can take place without major changes in an
existing network infrastructure. The fact that reset blocking limits itself to
inject bogus traffic without modifying legitimate traffic facilitates its
implementation and scalability.

An interesting collateral effect of RST blocking is passive redirection. Due to
backward compatibility with HTTP/1.0, when browsers receive a RST packet that
instruct them to close the connection, a new browser connection is initiated
against the same website but this time without the Host header. When the
browser receives the RST, it believes it is communicating to an old webserver
that does not support HTTP/1.1 and hence initiates a HTTP/1.0 session. This
session will not be "matched" by the interception gear and will not be blocked.
The website receiving the HTTP/1.0 connection will then send a redirection to
the default domain hosted at its IP address. For example, a HTTP/1.0 connection
to youtube.com will respond with a redirection to google.com. The user might
believe that the redirection is implemented by the filtering infrastructure
when in fact is a collateral results of the RST traffic.


### Proxying

The second mechanism to block the websites is by means of semi or fully
transparent proxies. In both cases the HTTP proxy is placed between the users
and the Internet. All outgoing web connections are intercepted by the proxy.
Depending on the technology used, the proxy can hide its presence to the
end-user (semi transparent), the webserver or both (fully transparent). The
most common transparent proxy implementation is the semi-transparent; this
implementation intercepts the HTTP requests from the users and places the
outbound connection on the users' behalf but does not hide the web proxy IP
address from the webserver i.e. the webserver can see that the connections do
not come from the user directly but from the IP address of the proxy. 

A fully transparent web proxy hides both from the user and the webserver that
the sessions are intercepted. The webserver cannot determine if the connection
comes directly from the end-user or the proxy itself. Semi-transparent proxies
are commonly used in combination with caching to speed up connections while
fully transparent proxies are typically implemented for surveillance.

The basic matching mechanism in any case is performed looking into the Host
Header. Opposite to the RST blocking mechanism, the web proxy has full access
to the data stream and can perform most complex string matching, for example:
blocking certain articles or random pages based on keywords. The transparent
webproxy can perform more complex filtering but requires the processing of all
web requests in the infrastructure. 

This blocking method is present in Uzbekistan and Turkmenistan where we
could effectively identify proxy headers when requesting blocked websites.

### Active redirection

In  the same way that a RST packets can be injected in the datastream to
teardown a connection, we have seen another type of injected traffic towards
the client. In this scenario the interception gear sends a HTTP  302
redirection packet informing to the browser that the website has  been "Moved"
to another location.

Instead of having a full web proxy implementation to perform the redirection,
we could determine that this type of redirection is performed without the need
of keep any session state. As in the case of the RST blocking, once the  Host
header is found a packet with a redirection to www.msn.com is sent to the
client.

    GET / HTTP/1.1
    User-Agent: TLT/2.6.4 (linux-gnu)
    Accept: */*
    Host: www.uznews.net
    Connection: Keep-Alive 

    HTTP/1.1 302 Found
    Location: http://www.msn.com/
    Content-Type: text/html; charset=utf-8
    Content-Length: 136
    Connection: close

    <html><head><title>Object moved</title></head><body> <h2>Object moved to <a
    href='http://www.msn.com/'>here</a>.</h2> </body></html>

This redirection method is highly scalable and users are aware that blocking
is talking place.

## How we manage to bypass the blocking?

During our investigation we discovered that it is possible to bypass the
filtering by tampering the Host header so the matching stage is not
triggered.

The basic idea is to use the `\t` (TAB) and `\n` (linefeed) characters in the
basic HTTP requests headers. We could test and verify that webservers
sanitize the requests headers and appending a tab character at the end of the
Host Header will not have an impact in the webserver side but will bypass the
detection-matching phase of the blocking gear. 

So instead of sending `Host: www.youtube.com\n` our requests look like `Host:
www.youtube.com\t\n`.

We also discovered that the Active Redirection Method could be bypassed by
pre-pending a linefeed to the GET header. So instead of sending `GET /
HTTP/1.1`, our requests look like `\nGET / HTTP/1.1`.

# OONI Testing

We ran from inside of TM and UZ a set of ooniprobe tests to collect some data
on how the filtering was happening and confirm our hypothesis of censorship
bypassing strategies.

Inside of Uzbekistan we ran the following tests:

### HTTP Header Field Manipulation
https://ooni.torproject.org/reports/0.1/TM/http_header_field_manipulation-2013-01-28T195727Z-AS20661.yamloo

Through such test we were able to determine that no extra HTTP header were
being appended to our outgoing requests. As we can see the response body
contains the same headers that have been sent by the client.

### HTTP Invalid Request Line test
https://ooni.torproject.org/reports/0.1/TM/http_invalid_request_line-2013-01-30T214938Z-AS20661.yamloo

Through such test we were able to determine that the DPI device does not
misbehave when receiving an invalid request line. This leads us to believe that
the device in question is not a bluecoat device since such devices usually
crash on 'test_random_invalid_version_number' and
'test_random_invalid_field_count' as is shown in the measurements done in
Myanmar (https://ooni.torproject.org/reports/0.1/MM/http_invalid_request_line-2012-12-06T162217Z-AS18399.yamloo).

### HTTP Host test
https://ooni.torproject.org/reports/0.1/TM/http_host-2013-01-30T224041Z-AS20661.yamloo

Through this test we were able to confirm that the above described filtering
bypassing strategies do indeed work as is shown by
'test_filtering_prepend_newline_to_method' and
'test_filtering_add_tab_to_host'. We were also able to determine that filtering
also occurs on subdomains of the target hostname as is shown by
'test_filtering_of_subdomain'.  Notes: The 'response_never_received' error code
is due to a TCP RST.

Inside of Turkmenistan we ran the same tests and obtained very similar results:

### HTTP Header Field Manipulation
https://ooni.torproject.org/reports/0.1/UZ/http_header_field_manipulation-2013-01-29T222932Z-AS31203.yamloo

### HTTP Invalid Request Line test
https://ooni.torproject.org/reports/0.1/UZ/http_invalid_request_line-2013-02-02T183110Z-AS31203.yamloo

### HTTP Host test
https://ooni.torproject.org/reports/0.1/UZ/http_host-2013-02-02T183406Z-AS31203.yamloo

Also here censorship of subdomains is occurring, though the filtering strategy
is to reply with a 302 redirect to 'http://www.msn.com'.

Such results are particularly interesting, because we are now able to test for
these bypassing strategies in the future. If it's possible to circumvent
censorship by means of these two strategies we can infer that the DPI device we
are facing could be similar to these.  If we continue doing this we will be
developing a heuristic for categorizing DPI devices.

Something similar was done in the case of Bluecoat in Burma, where we
discovered that by sending an invalid HTTP method in the Request Line would
cause a bluecoat device to output an error message. The same thing happens to
bluecoat, though with a different error message, when sending an invalid number
of parts in the HTTP request line.

# Lessons learned

We learned that censorship software is not perfect and that sometimes it can be
trivially bypassed. The fact that it can be bypassed is not of interest to who
deploys such software, because they are mainly interested in affecting a large
portion of their userbase and even if a select few is able to access restricted
content it is generally not a problem.
This means that they accept the fact that there is an imbalance in knowledge
amongst their population and this strengthens social inequality.

What is of interest to the OONI project is the fact that by detecting such
imperfections in filtering software we are able to classify the kind of product
being used. The next time we will see a device that can be bypassed by append
tab characters to the `Host` header field we can infer that it may be the same
used in UZ and TZ.

You can help us detect censorship by running ooni-probe. For more details see
the [install guide](https://github.com/thetorproject/ooni-probe#ooniprobe---open-observatory-of-network-interference)
