---
title: "OONI releases new Web Connectivity test for detecting online censorship"
author: "Arturo Filastò, Maria Xynou"
date: "2016-06-03"
tags: ["release", "nettest"]
categories: ["blog"]
---

Today the Open Observatory of Network Interference (OONI) is excited to be
releasing a brand new test, called
*[Web Connectivity](https://ooni.org/nettest/web-connectivity/)*,
which is designed to detect three different types of censorship: *DNS
tampering*, *TCP/IP blocking* and *HTTP blocking*.

## Advantages of running Web Connectivity

This test allows us to see which websites are blocked and how, more accurately
than ever before!

Previously we relied on running separate (http_request, dns_consistency and
tcp_connect) tests with the aim of identifying various forms of censorship. We
then had to correlate measurements across different tests to identify whether
and how websites were blocked. This process was not only tedious, but it also
led to more false positives.

Now with Web Connectivity we can test for various aspects of censorship all
within one test! This not only enables us to identify which content is being
blocked, but it also helps us pinpoint the exact reason of blocking. This is
particularly useful because it makes the process of analyzing why a website is
not reachable easier, faster and more accurate.

The heuristics used by Web Connectivity are also a bit more advanced. Contrary
to previous tests, Web Connectivity allows us to clearly distinguish between
censorship and accessibility, in the sense that we are able to determine whether
a website is actually blocked, or if it is just (temporarily) down. Furthermore,
collected measurements are no longer compared over Tor, because the
discrimination of exit nodes (by CloudFlare, for example) led to many false
positives. We now compare collected measurements over a control server which is
less likely to be discriminated.

## How Web Connectivity works

This test examines whether websites are blocked by performing the steps below
*both* over a control server and over the network of the user. The collected
results are then compared with the aim of identifying whether and how tested
websites are tampered with. If the compared results do *not* match, then there
is a sign of censorship.

**1. Resolver identification**

The domain name system (DNS) is what is responsible for transforming a host name
(e.g. torproject.org) into an IP address (e.g. 38.229.72.16). Internet Service
Providers (ISPs), amongst others, run DNS resolvers which map host names to IP
addresses. In some circumstances though, ISPs map the requested host names to
the wrong IP addresses, which is a form of tampering.

As a first step, the Web Connectivity test attempts to identify which DNS
resolver is being used by the user. It does so by performing a DNS query to
special domains (such as whoami.akamai.com) which will disclose the IP address
of the resolver. This is an important step because it allows us to see if the
user's resolver is one that is unlikely to perform censorship (such as Google
DNS), or that of a local ISP (which is more likely to perform censorship).

**2. DNS lookup**

Once the Web Connectivity test has identified the DNS resolver of the user, it
then attempts to identify which addresses are mapped to the tested host names by
the resolver. It does so by performing a DNS lookup, which asks the resolver to
disclose which IP addresses are mapped to the tested host names, as well as
which other host names are linked to the tested host names under DNS queries.

If the DNS responses (such as the IP addresses mapped to host names) do *not*
match when comparing those collected over the network of the user and over a
control server, then there is a clear sign of DNS blocking.

**3. TCP connect**

The Web Connectivity test will then try to connect to the tested websites by
attempting to establish a TCP session on port 80 (or port 443 for URLs that
begin with HTTPS) for the list of IP addresses that were identified in the
previous step (DNS lookup).

If a TCP session to connect to websites was *not* established over the network
of the user, then those websites are probably blocked.

**4. HTTP GET request**

As the Web Connectivity test connects to tested websites (through the previous
step), it sends requests through the HTTP protocol to the servers which are
hosting those websites. A server normally responds to an HTTP GET request with
the content of the webpage that is requested.

However, the requested websites are most likely blocked if the HTTP request over
the user's network failed, or the HTTP status codes don't match, or all of the
following apply:

* The body length of compared websites (over the control server and the network
  of the user) differs by some percentage

* The HTTP headers names do not match

* The HTML title tags do not match

## How to run Web Connectivity

If you've ever run OONI tests before, then you're probably familiar with
`oonideckgen`: OONI's software suite which includes multiple tests. Now
Web Connectivity has been added to oonideckgen, replacing the previous
http_request and dns_consistency tests (which are included in Web Connectivity
anyway).

You can run Web Connectivity by either running `oonideckgen` or by simply
running the following command with a file containing a list of URLs to test
(this can either be 1 URL per line or a CSV from the
[citizenlab test-lists repository](https://github.com/citizenlab/test-lists/tree/master/lists)):

`ooniprobe blocking/web_connectivity -f ~/.ooni/resources/citizenlab-test-lists/global.csv`

or by testing your URL of choice:

`ooniprobe blocking/web_connectivity --url http://torproject.org/`

Learn more about how to run OONI tests (and their associated
[risks](https://github.com/TheTorProject/ooni-spec/blob/master/informed-consent/risks.md))
[here](https://github.com/TheTorProject/ooni-probe#ooni-in-5-minutes).

Happy testing!
