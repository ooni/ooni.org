---
title: "EEEP and Greek Internet censorship"
summary: "Technical analysis of Hellenic gaming commission blacklist in Greece"
tags: ["greece", "eeep", "DPI", "DNS Hijacking", "country-gr"]
author: "Vasilis Ververis, George Kargiotakis, Arturo Filastò, Alexandros Afentoulis"
categories: ["report"]
date: "2015-06-10"
---

**Country:** Greece

**Probed ISPs:** Forthnet, Ote, Cyta, Wind, Vodafone, Cosmote, Wind mobile

**Blocking methods:** DPI, DNS Hijacking, HTTP proxy

**Measurement period:** June - July 2014

**19:40 UTC Saturday, 17 June 2016** Update: Add AS numbers of the ISPs, update
raw measurement data URLs.

The newly formed Independent Administrative Authority's Hellenic Gaming
Commission acts as the public body responsible for the control and supervision
of gambling services in Greece and published a blacklist of websites that are
offering unlicensed gambling and betting services to Greek internet users.
According to article 52, law No. 4002/2011, [A180][fekA180_articel52] unlicensed
gambling and betting websites without a license in Greece is a serious criminal
offense applying as well for users (players), companies and ISPs.

Most Greek ISPs have not issued any public report that notifies their
customers/users warning them about the content being blocked by the EEEP
blacklist.
Apart from that there is no documentation on how they have implemented the
block/censorship, if they keep track of people trying to access these blocked
websites, as the law orders, and so on.

In this technical report we have used the blacklist issued by the Hellenic
Gaming Commission [EEEP][EEEP_blacklist_PDF], titled "List of sites providing
gaming and betting services without authorisation in Greece". The collection of
the reports took place during June and July 2014.

The main test specifications used to probe the blacklist are:

## [HTTP Requests test]

This test performs an HTTP GET request from a specified URL list of potential blocked
websites over the test network (censored network) and over Tor. It then compares
the response headers and checks if the two responses (the one over Tor and the one
over the censored network) match and if the proportion between the expected body
length matches. In our test cases we have used a proportion with a tolerance
factor of 80% between the two body lengths.

By default the HTTP User Agent is chosen at random and is different between the
control request and the experiment request.

Since version 0.2.3 the User Agent is chosen at random, but is the same between
the control request and the experiment request.

The user agent is chosen amongst this set of possible user agents:

```
"Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7",
"Mozilla/5.0 (iPhone; U; CPU iPhone OS 3 1 2 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Mobile/7D11",
"Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2) Gecko/20100115 irefox/3.6",
"Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2) Gecko/20100115 Firefox/3.6",
"Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2) Gecko/20100115 Firefox/3.6",
"Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.2) Gecko/20100115 Firefox/3.6",
"Mozilla/5.0 (Windows; U; Windows NT 6.1; de; rv:1.9.2) Gecko/20100115 Firefox/3.6",
"Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.2) Gecko/20100115 Firefox/3.6",
"Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7",
"Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.1.7) Gecko/20091221 Firefox/3.5.7 (.NET CLR 3.5.30729)"
```

These user agents are taken from the ["How Unique Is Your Web
Browser?"](https://panopticlick.eff.org/browser-uniqueness.pdf) paper as the
browser user agents with largest anonymity set.

## [DNS consistency test]

This test performs an A DNS query (via UDP) to the control resolver. The answer
to such query is called the control answer. For each DNS resolver to be tested
the test performs an A DNS query for the domain in question. This answer
(experiment answer) is compared with the control answer. If the two have a
common IPv4 address then the result for the given hostname and resolver
combination is considered consistent (or not tampered) with the control
resolver (tampering: False).
If they do not have commonalities the test does a reverse lookup of the first
IPv4 address in the control answer and the first IPv4 address in the experiment
answer. If the two reverse lookups match (the PTR record points to the same
hostname), then censorship is probably not happening (tampering:
"reverse_match").

In any other case the result is marked as: `tampering: True`.

# Probed ISPs

Probed ISPs: `Forthnet (AS 1241), Ote (AS 6799), Cyta (AS 6866), Wind (AS
25472), Vodafone (AS 12361), Cosmote (AS 29247), Wind mobile (AS 15617)`

All of the tested ISPs employed [DNS hijacking] with the exception of Vodafone
that uses also [Deep Packet Inspection] to block the resources of the blacklist.

## Per ISP analysis

![Blocking per ISP](/post/eeep-greek-censorship/eeep_blocking_per_isp.png)

### Forthnet

This ISP has blocked 96 entries (21.91%) of the published [blacklist][EEEP_blacklist_PDF].

Excerpt from HTTP request test:

```
body_length_match: false
body_proportion: 0.0
control_failure: null
experiment_failure: null
factor: 0.8
headers_diff: !!set {Cache-Control: null, Content-Type: null, Date: null,
Expires: null,
  Location: null, Pragma: null, Set-Cookie: null, Vary: null}
headers_match: false
input: http://betguardian.me/
requests:
- request:
    body: null
    headers:
    - - User-Agent
      - ['Mozilla/5.0 (iPhone; U; CPU iPhone OS 3 1 2 like Mac OS X; en-us)
        AppleWebKit/528.18
          (KHTML, like Gecko) Mobile/7D11']
    method: GET
    tor: {is_tor: false}
    url: http://betguardian.me/
  response:
    body: ''
    code: 302
    headers:
    - - Connection
      - [close]
    - - Location
      - ['http://eeep.forthnetgroup.gr/']
    - - Content-Length
      - ['0']
    - - Server
      - [BigIP]
```

Excerpt from DNS Consistency test:

```
control_resolver: 64.9.225.221:57004
input: betguardian.me
queries:
- addrs: [109.68.33.64]
  answers:
  - [<RR name=betguardian.me type=A class=IN ttl=2407s auth=False>, <A
    address=109.68.33.64
      ttl=2407>]
  query: '[Query(''betguardian.me'', 1, 1)]'
  query_type: A
  resolver: &id002 [64.9.225.221, 57004]
- addrs: [62.1.46.55]
  answers:
  - [<RR name=betguardian.me type=A class=IN ttl=3600s auth=True>, <A
    address=62.1.46.55
      ttl=3600>]
  query: '[Query(''betguardian.me'', 1, 1)]'
  query_type: A
  resolver: &id001 [192.168.122.1, 53]
- addrs: [eeep.forthnet.gr]
  answers:
  - [<RR name=55.46.1.62.in-addr.arpa type=PTR class=IN ttl=86396s auth=False>,
    <PTR
      name=eeep.forthnet.gr ttl=86396>]
  query: '[Query(''55.46.1.62.in-addr.arpa'', 12, 1)]'
  query_type: PTR
  resolver: *id001
- query: '[Query(''64.33.68.109.in-addr.arpa'', 12, 1)]'
  query_type: PTR
  resolver: *id002
tampering: {192.168.122.1: true}
test_resolvers: [192.168.122.1]
```

A screenshot from the blocked website:

![Forthnet EEEP Blocked website screenshot](/post/eeep-greek-censorship/eeep_forthnetgroup_gr.png "Forthnet EEEP Blocked website screenshot")

### Ote

Excerpt from HTTP request test:

```
body_length_match: false
body_proportion: 0.13907389787503965
control_failure: null
experiment_failure: null
factor: 0.8
headers_diff: !!set {Accept-Ranges: null, Cache-Control: null, ETag: null,
Expires: null,
  Last-Modified: null, Pragma: null, Set-Cookie: null, Vary: null}
headers_match: false
input: http://betguardian.me/
requests:
- request:
    body: null
    headers:
    - - User-Agent
      - ['Mozilla/5.0 (Windows; U; Windows NT 6.1; de; rv:1.9.2) Gecko/20100115
        Firefox/3.6']
    method: GET
    tor: {is_tor: false}
    url: http://betguardian.me/
  response:
    body: "\uFEFF<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0
Transitional//EN\">\r\
      \n<HTML>\r\n<HEAD>\r\n <META content=\"IE=5.0000\"
http-equiv=\"X-UA-Compatible\"\
      >\r\n <TITLE>\u039C\u03AE
      >\u0395\u03C0\u03B9\u03C4\u03C1\u03B5\u03C0\u03C4\u03AE\
      \ \u03A0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7</TITLE> \r\n<META
http-equiv=\"\
      Content-Type\" content=\"text/html; charset=iso-8859-7\">\r\n<LINK
href=\"files/styles.css\"\
      \ rel=\"stylesheet\" type=\"text/css\">\r\n</HEAD> \r\n<BODY
text=\"#000000\"\
      \ topmargin=\"0\" leftmargin=\"0\" bgcolor=\"#eeeeee\" marginheight='0\"'
marginwidth=\"\
      0\">\r\n<TABLE width=\"100%\" height=\"100%\" border=\"0\"
cellspacing=\"0\"\
      \ cellpadding=\"0\">\r\n  <TBODY>\r\n  <TR>\r\n    <TD align=\"center\"
valign=\"\
      top\"><BR><BR>\r\n      <TABLE width=\"700\" style=\"border: 2px solid
rgb(202,\
      \ 202, 202);\" \r\n      cellspacing=\"0\" cellpadding=\"0\">\r\n
<TBODY>\r\
      \n        <TR>\r\n          <TD>\r\n            <TABLE width=\"100%\"
border=\"\
      0\" cellspacing=\"0\" cellpadding=\"0\">\r\n              <TBODY>\r\n
\
      \        <TR>\r\n                <TD width=\"650\" height=\"70\"
align=\"center\"\
      \ background=\"files/BackHeader.gif\" valign=\"middle\" colspan=3><FONT
class=\"\
      blueTitle\">\u039C\u0397
\u0395\u03A0\u0399\u03A4\u03A1\u0395\u03A0\u03A4\u0397\
      \
\u03A0\u03A1\u039F\u03A3\u0392\u0391\u03A3\u0397</FONT><BR></TD></TR>\r\n\
      \              <TR></TR>\r\n              <TR>\r\n                <TD
align=\"\
      left\" background=\"files/BackLeft.jpg\" valign=\"bottom\"
style=\"background-position:\
      \ left bottom; background-repeat: no-repeat;\" bgcolor=\"#ffffff\"
colspan=\"\
      2\">\r\n                  <CENTER>\r\n                  <TABLE>\r\n
\
      \            <TBODY>\r\n                    <TR>\r\n
<TD>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</TD>\r\
      \n                      <TD><FONT
class=\"blue\">\r\n\t\t\t<BR><BR>\u039C\u03B5\
      \ \u03B2\u03AC\u03C3\u03B7 \u03B1\u03C0\u03CC\u03C6\u03B1\u03C3\u03B7
\u03C4\
      \u03B7\u03C2
\u03B1\u03BD\u03B5\u03BE\u03AC\u03C1\u03C4\u03B7\u03C4\u03B7\u03C2\
      \ \u03B4\u03B9\u03BF\u03B9\u03BA\u03B7\u03C4\u03B9\u03BA\u03AE\u03C2
\u03B1\u03C1\
      \u03C7\u03AE\u03C2 \"\u0395\u03C0\u03B9\u03C4\u03C1\u03BF\u03C0\u03AE
\u0395\
      \u03C0\u03BF\u03C0\u03C4\u03B5\u03AF\u03B1\u03C2 \u03BA\u03B1\u03B9
\u0395\u03BB\
      \u03AD\u03B3\u03C7\u03BF\u03C5
\u03A0\u03B1\u03B9\u03B3\u03BD\u03AF\u03C9\u03BD\
      \" (\u0395.\u0395.\u0395.\u03A0.), \u03BF
\u03B9\u03C3\u03C4\u03CC\u03C4\u03BF\
      \u03C0\u03BF\u03C2 \u03C0\u03BF\u03C5
\u03B5\u03C0\u03B9\u03C7\u03B5\u03B9\u03C1\
      \u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1
\u03B5\u03C0\u03B9\u03C3\u03BA\u03B5\u03C6\
      \u03B8\u03B5\u03AF\u03C4\u03B5 \u03AD\u03C7\u03B5\u03B9
\u03B5\u03B3\u03B3\u03C1\
      \u03B1\u03C6\u03B5\u03AF \u03C3\u03C4\u03BF\u03BD
\u03BA\u03B1\u03C4\u03AC\u03BB\
      \u03BF\u03B3\u03BF \u03B5\u03BA\u03B5\u03AF\u03BD\u03C9\u03BD
\u03C0\u03BF\u03C5\
      \ \u03C0\u03C1\u03BF\u03C3\u03C6\u03AD\u03C1\u03BF\u03C5\u03BD
\u03C5\u03C0\u03B7\
      \u03C1\u03B5\u03C3\u03AF\u03B5\u03C2
\u03C4\u03C5\u03C7\u03B5\u03C1\u03CE\u03BD\
      \ \u03C0\u03B1\u03B9\u03B3\u03BD\u03AF\u03C9\u03BD \u03BA\u03B1\u03B9
\u03C3\
      \u03C4\u03BF\u03B9\u03C7\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD
\u03C7\u03C9\u03C1\
      \u03AF\u03C2
\u03AC\u03B4\u03B5\u03B9\u03B1.\r\n\t\t\t<BR><BR>\u039A\u03B1\u03C4\
      \u03AC \u03C3\u03C5\u03BD\u03AD\u03C0\u03B5\u03B9\u03B1, \u03BC\u03B5
\u03B2\
      \u03AC\u03C3\u03B7 \u03C4\u03B7\u03BD
\u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03B7\
      \ \u03BD\u03BF\u03BC\u03BF\u03B8\u03B5\u03C3\u03AF\u03B1, \u03B7
\u03C0\u03C1\
      \u03CC\u03C3\u03B2\u03B1\u03C3\u03B7 \u03C3\u03C4\u03BF\u03BD
\u03B9\u03C3\u03C4\
      \u03CC\u03C4\u03BF\u03C0\u03BF \u03B1\u03C5\u03C4\u03CC
\u03B4\u03B5\u03BD \u03B5\
      \u03C0\u03B9\u03C4\u03C1\u03AD\u03C0\u03B5\u03C4\u03B1\u03B9.\r\n\t\t\t<BR><BR>\u0393\
      \u03B9\u03B1
\u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B5\
  \u03C2 \u03C0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B5\u03C2:
<a\
      \
href=\"http://www.gamingcommission.gov.gr/index.php/el/\">http://www.gamingcommission.gov.gr/index.php/el/</a><BR><BR>\r\
      \n\t\t\t<BR><BR></FONT></TD>\r\n
<TD>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</TD>\r\
      \n
\t\t</TR></TBODY></TABLE></CENTER></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></BODY></HTML>\r\
      \n"
    code: 200
    headers:
    - - Content-Length
      - ['2631']
    - - Accept-Ranges
      - [bytes]
    - - Server
      - [Apache/2.2.15 (CentOS)]
    - - Last-Modified
      - ['Wed, 07 Aug 2013 11:24:33 GMT']
    - - Connection
      - [close]
    - - ETag
      - ['"81b85-a47-4e359c92631e1"']
    - - Date
      - ['Wed, 04 Jun 2014 18:24:16 GMT']
    - - Content-Type
      - [text/html; charset=UTF-8]
```

Excerpt from DNS Consistency test:

```
input: www.betguardian.me
queries:
- addrs: [109.68.33.64]
  answers:
  - [<RR name=www.betguardian.me type=A class=IN ttl=14399s auth=False>, <A
    address=109.68.33.64
      ttl=14399>]
  query: '[Query(''www.betguardian.me'', 1, 1)]'
  query_type: A
  resolver: &id002 [64.9.225.221, 57004]
- addrs: [83.235.64.20]
  answers:
  - [<RR name=www.betguardian.me type=A class=IN ttl=1800s auth=True>, <A
    address=83.235.64.20
      ttl=1800>]
  query: '[Query(''www.betguardian.me'', 1, 1)]'
  query_type: A
  resolver: &id001 [192.168.1.1, 53]
- addrs: [eeep.otenet.gr]
  answers:
  - [<RR name=20.64.235.83.in-addr.arpa type=PTR class=IN ttl=86376s
    auth=False>,
    <PTR name=eeep.otenet.gr ttl=86376>]
  query: '[Query(''20.64.235.83.in-addr.arpa'', 12, 1)]'
  query_type: PTR
  resolver: *id001
- failure: deferred_timeout_error
  query: '[Query(''64.33.68.109.in-addr.arpa'', 12, 1)]'
  query_type: PTR
  resolver: *id002
- failure: deferred_timeout_error
  query: '[Query(''www.betguardian.me'', 1, 1)]'
  query_type: A
  resolver: *id002
- addrs: [109.68.33.64]
  answers:
  - [<RR name=www.betguardian.me type=A class=IN ttl=14395s auth=False>, <A
    address=109.68.33.64
      ttl=14395>]
  query: '[Query(''www.betguardian.me'', 1, 1)]'
  query_type: A
  resolver: *id002
- addrs: [83.235.64.20]
  answers:
  - [<RR name=www.betguardian.me type=A class=IN ttl=1793s auth=False>, <A
    address=83.235.64.20
      ttl=1793>]
  query: '[Query(''www.betguardian.me'', 1, 1)]'
  query_type: A
  resolver: &id003 [192.168.1.1, 53]
- addrs: [eeep.otenet.gr]
  answers:
  - [<RR name=20.64.235.83.in-addr.arpa type=PTR class=IN ttl=86368s
    auth=False>,
    <PTR name=eeep.otenet.gr ttl=86368>]
  query: '[Query(''20.64.235.83.in-addr.arpa'', 12, 1)]'
  query_type: PTR
  resolver: *id003
- query: '[Query(''64.33.68.109.in-addr.arpa'', 12, 1)]'
  query_type: PTR
  resolver: *id002
tampering: {192.168.1.1: true}
test_resolvers: [192.168.1.1]

```

This ISP has blocked 438 entries (100%) of the published [blacklist][EEEP_blacklist_PDF].

A screenshot from the blocked website:

![Ote EEEP Blocked website screenshot](/post/eeep-greek-censorship/eeep_otenet_gr.png "Ote EEEP Blocked website screenshot")

## Cyta

Excerpt from HTTP request test:

```
input: http://betguardian.me/
requests:
- request:
    body: null
    headers:
    - - User-Agent
      - ['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.7)
        Gecko/20091221
          Firefox/3.5.7']
    method: GET
    tor: {is_tor: false}
    url: http://betguardian.me/
  response:
    body: "\uFEFF<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0
Transitional//EN\">\r\
      \n<!-- saved from url=(0037)http://www.cyta.gr/misc/eeep_noaccess
-->\r\n<!DOCTYPE\
      \ html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\"
\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\"\
      >\r\n<html\r\nlang=\"el\" xmlns=\"http://www.w3.org/1999/xhtml\"
      >xmlns:fb=\"\
      http://ogp.me/ns/fb#\">\r\n<head>\r\n    <meta content=\"text/html;
charset=utf-8\"\
      \ http-equiv=\"content-type\">\r\n    <meta content=\"IE=edge,chrome=1\"
http-equiv=\"\
      X-UA-Compatible\">\r\n    <title>\u039C\u03B7
\u03B4\u03C5\u03BD\u03B1\u03C4\
      \u03AE \r\n\u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7</title>\r\n
<meta\
      \ scheme=\"\" name=\"DESCRIPTION\" content=\"cyta\">\r\n    <meta
scheme=\"\"\
      \ name=\"KEYWORDS\" content=\"cyta\">\r\n    <meta name=\"viewport\"
content=\"\
      width=device-width,initial-scale=1\">\r\n    <meta name=\"CODE_LANGUAGE\"
content=\"\
      C#\">\r\n    <meta name=\"vs_defaultClientScript\"
content=\"JavaScript\">\r\
      \n    <meta name=\"vs_targetSchema\"
content=\"http://schemas.microsoft.com/intellisense/ie5\"\
      >\r\n    <!-- CSS -->\r\n    <link rel=\"stylesheet\" type=\"text/css\"
      >href=\"\
      index_files/style.css\" media=\"all\">\r\n    <link rel=\"Stylesheet\"
type=\"\
      text/css\" href=\"index_files/forms.css\" media=\"all\">\r\n    <link
rel=\"\
      stylesheet\" type=\"text/css\" href=\"index_files/print.css\"
media=\"print\"\
      >\r\n    <!--[if lte IE 7]><link rel=\"stylesheet\"
      >href=\"/css/cyta/ie7.css\"\
      \ type=\"text/css\" media=\"screen, projection\" /><![endif]-->\r\n
<!--\
      \ Icon -->\r\n    <link rel=\"shortcut icon\" type=\"image/x-icon\"
href=\"\
      /img/cyta/favicon.ico\">\r\n    <!-- Js -->\r\n    <link
rel=\"stylesheet\"\
      \ type=\"text/css\" href=\"index_files/VisitorIdentification.css\">\r\n
<meta\
      \ name=\"GENERATOR\" content=\"MSHTML
9.00.8112.16496\">\r\n</head>\r\n<body>\r\
      \n    <form id=\"mainform\" method=\"post\" name=\"mainform\"
action=\"eeep_noaccess\"\
      >\r\n        <div class=\"wrapper\">\r\n            <div style=\"padding:
      >20px\
      \ 0px 400px;\" class=\"errorpage\">\r\n                <img
src=\"index_files/eeep_noaccess.png\"\
      >\r\n                <h3 style=\"margin-top: 50px;\">\u0394\u03B5\u03BD
      >\u03B5\
      \u03AF\u03BD\u03B1\u03B9 \u03B4\u03C5\u03BD\u03B1\u03C4\u03AE \u03B7
\u03C0\u03C1\
      \u03CC\u03C3\u03B2\u03B1\u03C3\u03B7 \u03C3\u03C4\u03BF\u03BD
\u03B9\u03C3\u03C4\
      \u03CC\u03C4\u03BF\u03C0\u03BF.</h3>\r\n                <p
style=\"font-size:\
      \ 14px;\">\r\n                    \u0397
\u03B1\u03C0\u03B1\u03B3\u03CC\u03C1\
      \u03B5\u03C5\u03C3\u03B7 \u03C4\u03B7\u03C2
\u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\
      \u03C3\u03B7\u03C2
\u03B5\u03C0\u03B9\u03B2\u03AC\u03BB\u03BB\u03B5\u03C4\u03B1\
      \u03B9 \u03B1\u03C0\u03CC \u03C4\u03BF \u03BD\u03CC\u03BC\u03BF
\r\n4.002/2011\
      \ \u03BA\u03B1\u03B9 \u03C4\u03B9\u03C2
\u03B1\u03C0\u03BF\u03C6\u03AC\u03C3\
      \u03B5\u03B9\u03C2 \u03C4\u03B7\u03C2
\u0395\u03C0\u03B9\u03C4\u03C1\u03BF\u03C0\
      \u03AE\u03C2 \u0395\u03C0\u03BF\u03C0\u03C4\u03B5\u03AF\u03B1\u03C2
\u03BA\u03B1\
      \u03B9 \u0395\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5
\u03A0\u03B1\u03B9\u03B3\u03BD\
      \u03AF\u03C9\u03BD \r\n(\u0395.\u0395.\u0395.\u03A0.),
\u03C4\u03C5\u03C7\u03CC\
      \u03BD \u03C0\u03B1\u03C1\u03B1\u03B2\u03AF\u03B1\u03C3\u03B7
\u03C4\u03C9\u03BD\
      \ \u03BF\u03C0\u03BF\u03AF\u03C9\u03BD
\u03B5\u03C0\u03B9\u03C3\u03CD\u03C1\u03B5\
      \u03B9 \u03B1\u03C5\u03C3\u03C4\u03B7\u03C1\u03AD\u03C2
\u03B4\u03B9\u03BF\u03B9\
      \u03BA\u03B7\u03C4\u03B9\u03BA\u03AD\u03C2 \u03BA\u03B1\u03B9
\r\n\u03C0\u03BF\
      \u03B9\u03BD\u03B9\u03BA\u03AD\u03C2
\u03BA\u03C5\u03C1\u03CE\u03C3\u03B5\u03B9\
      \u03C2.\r\n                </p>\r\n                <p style=\"font-size:
14px;\"\
      >\r\n                    \u0393\u03B9\u03B1
      >\u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\
      \u03CC\u03C4\u03B5\u03C1\u03B5\u03C2
\u03C0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\
      \u03C1\u03AF\u03B5\u03C2
\u03B1\u03C0\u03B5\u03C5\u03B8\u03C5\u03BD\u03B8\u03B5\
      \u03AF\u03C4\u03B5 \u03C3\u03C4\u03B7\u03BD
\r\n\u03B9\u03C3\u03C4\u03BF\u03C3\
      \u03B5\u03BB\u03AF\u03B4\u03B1 \u03C4\u03B7\u03C2
\u0395.\u0395.\u0395.\u03A0\
      .: <a href=\"http://www.gamingcommission.gov.gr/index.php/el/\"
target=\"_blank\"\
      >http://www.gamingcommission.gov.gr/index.php/el/</a>\r\n
      ></p>\r\
      \n            </div>\r\n        </div>\r\n    </form>\r\n    <script>\r\n
\
      \      (function (i, s, o, g, r, a, m) {\r\n
i['GoogleAnalyticsObject']\
      \ = r; i[r] = i[r] || function () {\r\n                (i[r].q = i[r].q
|| []).push(arguments)\r\
      \n            }, i[r].l = 1 * new Date(); a = s.createElement(o),\r\n
\
      \      m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g;
m.parentNode.insertBefore(a,\
      \ m)\r\n        })(window, document, 'script',
'//www.google-analytics.com/analytics.js',\
      \ 'ga');\r\n\r\n        ga('create', 'UA-43814796-1', 'cyta.gr');\r\n
\
\      m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g;
m.parentNode.insertBefore(a,\
      \ m)\r\n        })(window, document, 'script',
'//www.google-analytics.com/analytics.js',\
      \ 'ga');\r\n\r\n        ga('create', 'UA-43814796-1', 'cyta.gr');\r\n
\
      \  ga('send', 'pageview');\r\n    </script>\r\n</body>\r\n</html>"
    code: 200
    headers:
    - - Content-Length
      - ['3429']
    - - Accept-Ranges
      - [bytes]
    - - Server
      - [Apache]
    - - Last-Modified
      - ['Mon, 09 Sep 2013 12:44:47 GMT']
    - - Connection
      - [close]
    - - ETag
      - ['"40e99-d65-4e5f2c0d6edc0"']
    - - Date
      - ['Mon, 23 Jun 2014 16:47:46 GMT']
    - - Content-Type
      - [text/html; charset=UTF-8]
```

This ISP has blocked 357 entries (81.5%) of the published [blacklist][EEEP_blacklist_PDF].

A screenshot from the blocked website:

![Cyta EEEP Blocked website screenshot](/post/eeep-greek-censorship/eeep_cyta_gr.png "Cyta EEEP Blocked website screenshot")

At least 80 entries faulty responded with a 404 HTTP error

An example response of a URL that faulty responded with a 404 error:

```
agent: agent
body_length_match: false
body_proportion: 0.0
control_failure: null
experiment_failure: null
factor: 0.8
headers_diff: !!set {Content-Type: null, Location: null, Server: null}
headers_match: false
input: http://backgammon.betoto.com/backgammon.aspx
requests:
- request:
    body: null
    headers:
    - - User-Agent
      - ['Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.2) Gecko/20100115
        Firefox/3.6']
    method: GET
    tor: {is_tor: false}
    url: http://backgammon.betoto.com/backgammon.aspx
  response:
    body: '<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">

      <html><head>

      <title>404 Not Found</title>

      </head><body>

      <h1>Not Found</h1>

      <p>The requested URL /backgammon.aspx was not found on this server.</p>

      </body></html>

      '
    code: 404
    headers:
    - - Date
      - ['Mon, 23 Jun 2014 16:47:46 GMT']
    - - Content-Length
      - ['213']
    - - Content-Type
      - [text/html; charset=iso-8859-1]
    - - Connection
      - [close]
    - - Server
      - [Apache]
```

Cyta introduces a Google Analytics user agent used to
track users that are being redirected on their [blocking
webpage](http://www.cyta.gr/misc/eeep_noaccess). It is worth mentioning that
Cyta uses a different user agent (UA) tag for user tracking purposes than on
their [main website](http://www.cyta.gr).

### Wind

Excerpt from HTTP request test:

```
input: http://betguardian.me/
requests:
- request:
    body: null
    headers:
    - - User-Agent
      - ['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2)
        Gecko/20100115
          Firefox/3.6']
    method: GET
    tor: {is_tor: false}
    url: http://betguardian.me/
  response:
    body: "\uFEFF<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01
Transitional//EN\"\r\
      \n\"http://www.w3.org/TR/html4/loose.dtd\">\r\n<html>\r\n<head>\r\n<title>.:\
      \ \u0391\u03C0\u03B1\u03B3\u03CC\u03C1\u03B5\u03C5\u03C3\u03B7
\u03A0\u03C1\u03CC\
      \u03C3\u03B2\u03B1\u03C3\u03B7\u03C2 :.</title>\r\n<meta
http-equiv=\"Content-Type\"\
      \ content=\"text/html; charset=UTF-8\">\r\n<style
type=\"text/css\">\r\n<!--\r\
      \nbody
{\r\n\tpadding:0px;\r\n\tmargin:0px;\r\n\tfont-family:Tahoma;\r\n\tfont-size:11pt;\r\
      \n\tbackground-image:
url(/img/wind_new_bg.jpg);\r\n\tbackground-repeat:repeat-x;\r\
      \n\tbackground-position: center top; \r\n}\r\n\r\na
{\r\n\tcolor:#02578E;\r\n\
      \tcursor: pointer; cursor: hand;\r\n}\r\n\r\nTop
{\r\n\tmargin:0;\r\n\theight:125px;\r\
      \n\twidth:970px;\r\n\tmargin-bottom:20px;\r\n}\r\n\r\nLogo{\r\n\tfloat:left;\r\
      \n\twidth:188px;\r\n}\r\n\r\n.style1 {\r\n\tfont-size:
11pt;\r\n\tfont-weight:\
      \ bold;\r\n}\r\n\r\n.style2 {color: #02578E}\r\n\r\n.main {\r\n\tmargin:
30px\
      \ 10px 10px 20px;\r\n\tpadding:10pt auto;\r\n\tline-spacing:
110%;\r\n\tfont-size:\
      \ 11pt;\r\n\ttext-align:
justify;\r\n}\r\n\r\n.uline{\r\n\ttext-decoration:underline;\r\
      \n\tfont-weight: bold;\r\n}\r\n-->\r\n</style>\r\n</head>\r\n<body
class=\"\
      body\">\r\n\t<div class=\"Top\">\r\n\t\t<div class=\"Logo\"><img
src=\"/img/wind_logo.jpg\"\
      ></div>\r\n\t</div>\r\n\t<div class=\"main\">\r\n\t\t\t<p><span
      >class=\"style1\"\
      >\u03A3\u03B7\u03BC\u03B1\u03BD\u03C4\u03B9\u03BA\u03AE
      >\u03B5\u03BD\u03B7\u03BC\
      \u03AD\u03C1\u03C9\u03C3\u03B7:</span></p>\r\n\t\t\t<p>\u039C\u03B5
\u03B2\u03AC\
      \u03C3\u03B7 \u03C4\u03B7\u03BD 65/8/24.7.2013
\u03B1\u03C0\u03CC\u03C6\u03B1\
      \u03C3\u03B7 \u03C4\u03B7\u03C2
<strong>\u0395\u03C0\u03B9\u03C4\u03C1\u03BF\
      \u03C0\u03AE\u03C2 \u0395\u03C0\u03BF\u03C0\u03C4\u03B5\u03AF\u03B1\u03C2
\u03BA\
      \u03B1\u03B9 \u0395\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5
\u03A0\u03B1\u03B9\u03B3\
      \u03BD\u03AF\u03C9\u03BD (\u0395.\u0395.\u0395.\u03A0.)</strong>, \u03BF
\u03B9\
      \u03C3\u03C4\u03CC\u03C4\u03BF\u03C0\u03BF\u03C2 \u03C0\u03BF\u03C5
\u03B5\u03C0\
      \u03B9\u03C7\u03B5\u03B9\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1
\u03B5\u03C0\
      \u03B9\u03C3\u03BA\u03B5\u03C6\u03B8\u03B5\u03AF\u03C4\u03B5
<strong>\u03C0\u03C1\
      \u03BF\u03C3\u03C6\u03AD\u03C1\u03B5\u03B9
\u03C5\u03C0\u03B7\u03C1\u03B5\u03C3\
      \u03AF\u03B5\u03C2 \u03C4\u03C5\u03C7\u03B5\u03C1\u03CE\u03BD
\u03C0\u03B1\u03B9\
      \u03B3\u03BD\u03AF\u03C9\u03BD \u03BA\u03B1\u03B9
\u03C3\u03C4\u03BF\u03B9\u03C7\
      \u03B7\u03BC\u03AC\u03C4\u03C9\u03BD <span
class='uline'>\u03C7\u03C9\u03C1\u03AF\
      \u03C2 \u03AC\u03B4\u03B5\u03B9\u03B1</span></strong>
\u03C3\u03C4\u03B7\u03BD\
      \
\u0395\u03BB\u03BB\u03AC\u03B4\u03B1.</p>\r\n\t\t\t<p>\u039A\u03B1\u03C4\u03AC\
      \ \u03C3\u03C5\u03BD\u03AD\u03C0\u03B5\u03B9\u03B1, <strong>\u03B7
\u03C0\u03C1\
      \u03CC\u03C3\u03B2\u03B1\u03C3\u03B7 \u03C3\u03C4\u03BF\u03BD
\u03B9\u03C3\u03C4\
      \u03CC\u03C4\u03BF\u03C0\u03BF \u03B1\u03C5\u03C4\u03CC
\u03B4\u03B5\u03BD \u03B5\
      \u03AF\u03BD\u03B1\u03B9
\u03B5\u03C0\u03B9\u03C4\u03C1\u03B5\u03C0\u03C4\u03AE\
      </strong>, \u03CC\u03C0\u03C9\u03C2 \u03BA\u03B1\u03B9 \u03C3\u03B5
\u03BA\u03AC\
      \u03B8\u03B5 \u03B9\u03C3\u03C4\u03CC\u03C4\u03BF\u03C0\u03BF
\u03C0\u03BF\u03C5\
      \
\u03C0\u03B5\u03C1\u03B9\u03BB\u03B1\u03BC\u03B2\u03AC\u03BD\u03B5\u03C4\u03B1\
      \u03B9 \u03C3\u03C4\u03BF\u03BD
\u03C3\u03C7\u03B5\u03C4\u03B9\u03BA\u03CC \u03BA\
      \u03B1\u03C4\u03AC\u03BB\u03BF\u03B3\u03BF \u03C4\u03B7\u03C2
\u0395.\u0395\
      .\u0395.\u03A0.
\u03A0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\
      \u03B5\u03C2
\u03BB\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\
      \u03C2 \u03C3\u03C7\u03B5\u03C4\u03B9\u03BA\u03AC \u03BC\u03B5
\u03C4\u03B1\
      \ \u03C0\u03B1\u03C1\u03B1\u03C0\u03AC\u03BD\u03C9
\u03BA\u03B1\u03B8\u03CE\u03C2\
      \ \u03BA\u03B1\u03B9 \u03C4\u03BF\u03BD \u03C0\u03BB\u03AE\u03C1\u03B7
\u03BA\
      \u03B1\u03C4\u03AC\u03BB\u03BF\u03B3\u03BF \u03C4\u03C9\u03BD
\u03B1\u03C0\u03B1\
      \u03B3\u03BF\u03C1\u03B5\u03C5\u03BC\u03AD\u03BD\u03C9\u03BD
\u03B1\u03C0\u03CC\
      \ \u03C4\u03B7\u03BD \u0395.\u0395.\u0395.\u03A0.
\u03B9\u03C3\u03C4\u03BF\u03C4\
      \u03CC\u03C0\u03C9\u03BD \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5
\u03BD\
      \u03B1 \u03B2\u03C1\u03B5\u03AF\u03C4\u03B5 \u03B5\u03B4\u03CE:  <a
href='http://www.gamingcommission.gov.gr/index.php/el'\
      \
target='_new'>http://www.gamingcommission.gov.gr/index.php/el/</a></p>\r\n\
      \t\t\t<p>\u039C\u03B5
\u03B5\u03BA\u03C4\u03AF\u03BC\u03B7\u03C3\u03B7,<br />\r\
      \n\t\t\tWIND
\u0395\u03BB\u03BB\u03AC\u03C2\r\n\t\t\t</p>\r\n\t</div>\r\n</body>\r\
      \n</html>\r\n"
    code: 200
    headers:
    - - Content-Length
      - ['2395']
    - - Accept-Ranges
      - [bytes]
    - - Server
      - [Tellas HTTP Server]
    - - Last-Modified
      - ['Wed, 04 Sep 2013 06:55:41 GMT']
    - - Connection
      - [close]
    - - ETag
      - ['"1cf689-95b-4b277540"']
    - - Date
      - ['Mon, 25 Aug 2014 11:42:53 GMT']
    - - Content-Type
      - [text/html]
```

This ISP has blocked 325 entries (74.2%) of the published [blacklist][EEEP_blacklist_PDF].

A screenshot from the blocked website:

![Wind EEEP Blocked website screenshot](/post/eeep-greek-censorship/eeep_wind_gr.png "Wind EEEP Blocked website screenshot")

At least 65 entries falsely responded with a 404 HTTP error.

```
agent: agent
body_length_match: false
body_proportion: 0.0
control_failure: null
experiment_failure: null
factor: 0.8
headers_diff: !!set {Content-Type: null, Date: null, Location: null}
headers_match: false
input: http://tatts.com/goldencasket
requests:
- request:
    body: null
    headers:
    - - User-Agent
      - ['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2)
        Gecko/20100115
          Firefox/3.6']
    method: GET
    tor: {is_tor: false}
    url: http://tatts.com/goldencasket
  response:
    body: '<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">

      <html><head>

      <title>404 Not Found</title>

      </head><body>

      <h1>Not Found</h1>

      <p>The requested URL /goldencasket was not found on this server.</p>

      <p>Additionally, a 404 Not Found

      error was encountered while trying to use an ErrorDocument to handle the
request.</p>

      </body></html>

      '
    code: 404
    headers:
    - - Date
      - ['Mon, 25 Aug 2014 11:43:09 GMT']
    - - Content-Length
      - ['329']
    - - Content-Type
      - [text/html; charset=iso-8859-1]
    - - Connection
      - [close]
    - - Server
      - [Tellas HTTP Server]
```

This ISP uses Etag for tracking users which try to visit the blocked content.

### HOL

This ISP has blocked 438 entries (100%) of the published [blacklist][EEEP_blacklist_PDF].

Excerpt from HTTP request test:

```
input: http://betguardian.me/
requests:
- request:
    body: null
    headers:
    - - User-Agent
      - ['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.7)
        Gecko/20091221
          Firefox/3.5.7']
    method: GET
    tor: {is_tor: false}
    url: http://betguardian.me/
  response:
    body: ''
    code: 301
    headers:
    - - Date
      - ['Thu, 24 Jul 2014 15:58:11 GMT']
    - - Connection
      - [close]
    - - Content-Length
      - ['0']
    - - Location
      - ['http://eeepnotice.hol.gr/']
    - - Server
      - [lighttpd/1.4.31]
```

Excerpt from DNS Consistency test:

```
input: betguardian.me
queries:
- addrs: [186.5.161.199]
  answers:
  - [<RR name=betguardian.me type=A class=IN ttl=14399s auth=False>, <A
    address=186.5.161.199
      ttl=14399>]
  query: '[Query(''betguardian.me'', 1, 1)]'
  query_type: A
  resolver: &id002 [64.9.225.221, 57004]
- addrs: [194.30.227.163]
  answers:
  - [<RR name=betguardian.me type=A class=IN ttl=3138s auth=False>, <A
    address=194.30.227.163
      ttl=3138>]
  query: '[Query(''betguardian.me'', 1, 1)]'
  query_type: A
  resolver: &id001 [192.168.122.1, 53]
- query: '[Query(''163.227.30.194.in-addr.arpa'', 12, 1)]'
  query_type: PTR
  resolver: *id001
- query: '[Query(''199.161.5.186.in-addr.arpa'', 12, 1)]'
  query_type: PTR
  resolver: *id002
tampering: {192.168.122.1: reverse_match}
test_resolvers: [192.168.122.1]
```

A screenshot from the blocked website:

![HOL EEEP Blocked website screenshot](/post/eeep-greek-censorship/eeepnotice_hol_gr.png "HOL EEEP Blocked website screenshot")

### Cosmote

Excerpt from HTTP request test:

```
input: http://betguardian.me/
requests:
- request:
    body: null
    headers:
    - - User-Agent
      - ['Mozilla/5.0 (iPhone; U; CPU iPhone OS 3 1 2 like Mac OS X; en-us)
        AppleWebKit/528.18
          (KHTML, like Gecko) Mobile/7D11']
    method: GET
    tor: {is_tor: false}
    url: http://betguardian.me/
  response:
    body: "\uFEFF<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0
Transitional//EN\">\r\
      \n<HTML>\r\n<HEAD>\r\n <META content=\"IE=5.0000\"
http-equiv=\"X-UA-Compatible\"\
      >\r\n <TITLE>\u039C\u03AE
      >\u0395\u03C0\u03B9\u03C4\u03C1\u03B5\u03C0\u03C4\u03AE\
      \ \u03A0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7</TITLE> \r\n<META
http-equiv=\"\
      Content-Type\" content=\"text/html; charset=iso-8859-7\">\r\n<LINK
href=\"files/styles.css\"\
      \ rel=\"stylesheet\" type=\"text/css\">\r\n</HEAD> \r\n<BODY
text=\"#000000\"\
      \ topmargin=\"0\" leftmargin=\"0\" bgcolor=\"#eeeeee\" marginheight='0\"'
marginwidth=\"\
      0\">\r\n<TABLE width=\"100%\" height=\"100%\" border=\"0\"
cellspacing=\"0\"\
      \ cellpadding=\"0\">\r\n  <TBODY>\r\n  <TR>\r\n    <TD align=\"center\"
valign=\"\
      top\"><BR><BR>\r\n      <TABLE width=\"700\" style=\"border: 2px solid
rgb(202,\
      \ 202, 202);\" \r\n      cellspacing=\"0\" cellpadding=\"0\">\r\n
<TBODY>\r\
      \n        <TR>\r\n          <TD>\r\n            <TABLE width=\"100%\"
border=\"\
      0\" cellspacing=\"0\" cellpadding=\"0\">\r\n              <TBODY>\r\n
\
      \        <TR>\r\n                <TD width=\"650\" height=\"70\"
align=\"center\"\
      \ background=\"files/BackHeader.gif\" valign=\"middle\" colspan=3><FONT
class=\"\
      blueTitle\">\u039C\u0397
\u0395\u03A0\u0399\u03A4\u03A1\u0395\u03A0\u03A4\u0397\
      \
\u03A0\u03A1\u039F\u03A3\u0392\u0391\u03A3\u0397</FONT><BR></TD></TR>\r\n\
      \              <TR></TR>\r\n              <TR>\r\n                <TD
align=\"\
      left\" background=\"files/BackLeft.jpg\" valign=\"bottom\"
style=\"background-position:\
      \ left bottom; background-repeat: no-repeat;\" bgcolor=\"#ffffff\"
colspan=\"\
      2\">\r\n                  <CENTER>\r\n                  <TABLE>\r\n
\
      \            <TBODY>\r\n                    <TR>\r\n
<TD>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</TD>\r\
      \n                      <TD><FONT
class=\"blue\">\r\n\t\t\t<BR><BR>\u039C\u03B5\
      \ \u03B2\u03AC\u03C3\u03B7 \u03B1\u03C0\u03CC\u03C6\u03B1\u03C3\u03B7
\u03C4\
      \u03B7\u03C2
\u03B1\u03BD\u03B5\u03BE\u03AC\u03C1\u03C4\u03B7\u03C4\u03B7\u03C2\
      \ \u03B4\u03B9\u03BF\u03B9\u03BA\u03B7\u03C4\u03B9\u03BA\u03AE\u03C2
\u03B1\u03C1\
      \u03C7\u03AE\u03C2 \"\u0395\u03C0\u03B9\u03C4\u03C1\u03BF\u03C0\u03AE
\u0395\
      \u03C0\u03BF\u03C0\u03C4\u03B5\u03AF\u03B1\u03C2 \u03BA\u03B1\u03B9
\u0395\u03BB\
      \u03AD\u03B3\u03C7\u03BF\u03C5
\u03A0\u03B1\u03B9\u03B3\u03BD\u03AF\u03C9\u03BD\
      \" (\u0395.\u0395.\u0395.\u03A0.), \u03BF
\u03B9\u03C3\u03C4\u03CC\u03C4\u03BF\
      \u03C0\u03BF\u03C2 \u03C0\u03BF\u03C5
\u03B5\u03C0\u03B9\u03C7\u03B5\u03B9\u03C1\
      \u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1
\u03B5\u03C0\u03B9\u03C3\u03BA\u03B5\u03C6\
      \u03B8\u03B5\u03AF\u03C4\u03B5 \u03AD\u03C7\u03B5\u03B9
\u03B5\u03B3\u03B3\u03C1\
      \u03B1\u03C6\u03B5\u03AF \u03C3\u03C4\u03BF\u03BD
\u03BA\u03B1\u03C4\u03AC\u03BB\
      \u03BF\u03B3\u03BF \u03B5\u03BA\u03B5\u03AF\u03BD\u03C9\u03BD
\u03C0\u03BF\u03C5\
      \ \u03C0\u03C1\u03BF\u03C3\u03C6\u03AD\u03C1\u03BF\u03C5\u03BD
\u03C5\u03C0\u03B7\
      \u03C1\u03B5\u03C3\u03AF\u03B5\u03C2
\u03C4\u03C5\u03C7\u03B5\u03C1\u03CE\u03BD\
      \ \u03C0\u03B1\u03B9\u03B3\u03BD\u03AF\u03C9\u03BD \u03BA\u03B1\u03B9
\u03C3\
      \u03C4\u03BF\u03B9\u03C7\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD
\u03C7\u03C9\u03C1\
      \u03AF\u03C2
\u03AC\u03B4\u03B5\u03B9\u03B1.\r\n\t\t\t<BR><BR>\u039A\u03B1\u03C4\
      \u03AC \u03C3\u03C5\u03BD\u03AD\u03C0\u03B5\u03B9\u03B1, \u03BC\u03B5
\u03B2\
      \u03AC\u03C3\u03B7 \u03C4\u03B7\u03BD
\u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03B7\
      \ \u03BD\u03BF\u03BC\u03BF\u03B8\u03B5\u03C3\u03AF\u03B1, \u03B7
\u03C0\u03C1\
      \u03CC\u03C3\u03B2\u03B1\u03C3\u03B7 \u03C3\u03C4\u03BF\u03BD
\u03B9\u03C3\u03C4\
      \u03CC\u03C4\u03BF\u03C0\u03BF \u03B1\u03C5\u03C4\u03CC
\u03B4\u03B5\u03BD \u03B5\
      \u03C0\u03B9\u03C4\u03C1\u03AD\u03C0\u03B5\u03C4\u03B1\u03B9.\r\n\t\t\t<BR><BR>\u0393\
      \u03B9\u03B1
\u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B5\
      \u03C2
\u03C0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B5\u03C2: <a\
      \
href=\"http://www.gamingcommission.gov.gr/index.php/el/\">http://www.gamingcommission.gov.gr/index.php/el/</a><BR><BR>\r\
      \n\t\t\t<BR><BR></FONT></TD>\r\n
<TD>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</TD>\r\
      \n
\t\t</TR></TBODY></TABLE></CENTER></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></BODY></HTML>\r\
      \n"
    code: 200
    headers:
    - - Content-Length
      - ['2631']
    - - Accept-Ranges
      - [bytes]
    - - Server
      - [Apache/2.2.15 (CentOS)]
    - - Last-Modified
      - ['Wed, 07 Aug 2013 11:24:33 GMT']
    - - Connection
      - [close]
    - - ETag
      - ['"81b85-a47-4e359c92631e1"']
    - - Date
      - ['Thu, 03 Jul 2014 16:16:06 GMT']
    - - Content-Type
      - [text/html; charset=UTF-8]
```

This ISP has blocked 438 entries (100%) of the published [blacklist][EEEP_blacklist_PDF].

A screenshot from the blocked website:

![Cosmote EEEP Blocked website screenshot](/post/eeep-greek-censorship/eeep_cosmote_gr.png "Cosmote EEEP Blocked website screenshot")

### Vodafone

This ISP has blocked 425 entries (97.03%) of the published [blacklist][EEEP_blacklist_PDF].


Excerpt from HTTP request test:

```
input: http://betguardian.me/
requests:
- request:
    body: null
    headers:
    - - User-Agent
      - ['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2)
        Gecko/20100115
          Firefox/3.6']
    method: GET
    tor: {is_tor: false}
    url: http://betguardian.me/
  response:
    body: ''
    code: 301
    headers:
    - - Date
      - ['Sun, 24 Aug 2014 17:33:56 GMT']
    - - Connection
      - [close]
    - - Content-Length
      - ['0']
    - - Location
      - ['http://1.2.3.50/ups/no_access_gambling.htm']
    - - Server
      - [WebProxy/6.0]
- request:
    body: null
    headers:
    - - User-Agent
      - ['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.7)
        Gecko/20091221
          Firefox/3.5.7']

```

A screenshot from the blocked website:

![Vodafone mobile EEEP Blocked website screenshot](/post/eeep-greek-censorship/eeep_vodafone_gr.png "Vodafone mobile EEEP Blocked website screenshot")

This ISP uses DNS hijacking for 58 entries that EEEP has published either using
HTTPS URLs on the blacklist or entries that not prefixed with 'http://' For the
rest of them it uses some kind of DPI/proxy, using Bluecoat's WebProxy/6.0. If
an HTTP URL does not exactly match the one published at the blacklist it is
passed on to the original server, if it matches then the request gets
redirected to:

```
http://1.2.3.50/ups/no_access_gambling.htm
```

Another interesting case with this ISP is that for domains that it has filtered
using DNS hijacking, subdomains of those do not even have an A record
(dns_lookup_error). That means that some URLs on the blacklist that
contain subdomains are not getting redirected to
'http://1.2.3.50/ups/no_access_gambling.htm'. They cannot be resolved
and they are not accessible at all from clients.

```
curl -I rivernilecasino.net
HTTP/1.1 302 Moved Temporarily
Date: Sun, 31 Aug 2014 12:38:01 GMT
Server: Microsoft-IIS/6.0
X-Powered-By: ASP.NET
X-AspNet-Version: 4.0.30319
Location: http://www.vegaspartnerlounge.com/generic/informer.asp?Subgid=987228&Country=Greece&btag=rivernilecasino.net&btag2=16&btag3=&btag4=&btag5=
Set-Cookie: RiverNileCasino=btag=rivernilecasino.net&btag2=16&btag3=&btag4=&btag5=; domain=rivernilecasino.net; expires=Mon, 01-Sep-2014 12:38:00 GMT; path=/; HttpOnly
Cache-Control: private
Content-Type: text/html; charset=utf-8
Content-Length: 279
Connection: keep-alive
```

By changing the URL to www.rivernilecasino.net (adding the www subdomain), the
request also passes through to the legitimate server.

```
curl -I www.rivernilecasino.net
HTTP/1.1 302 Moved Temporarily
Date: Sun, 31 Aug 2014 12:38:28 GMT
Server: Microsoft-IIS/6.0
X-Powered-By: ASP.NET
X-AspNet-Version: 4.0.30319
Location: http://www.vegaspartnerlounge.com/generic/informer.asp?Subgid=785274&Country=Greece&btag=www.rivernilecasino.net&btag2=16&btag3=&btag4=&btag5=
Set-Cookie: RiverNileCasino=btag=www.rivernilecasino.net&btag2=16&btag3=&btag4=&btag5=; domain=rivernilecasino.net; expires=Mon, 01-Sep-2014 12:38:28 GMT; path=/; HttpOnly
Cache-Control: private
Content-Type: text/html; charset=utf-8
Content-Length: 283
Connection: keep-alive
```

Finally using the same URL as the one published in the blacklist
(www.rivernilecasino.net/index.asp), the request gets proxied via
Vodafone ISP.

```
curl -I www.rivernilecasino.net/index.asp
HTTP/1.1 301 Moved Permanently
Server: WebProxy/6.0
Date: Sun, 31 Aug 2014 12:39:01 GMT
Content-Length: 0
Location: http://1.2.3.50/ups/no_access_gambling.htm
Connection: keep-alive
```

### Wind mobile

Excerpt from HTTP request test:

```
input: http://betguardian.me/
requests:
- request:
    body: null
    headers:
    - - User-Agent
      - ['Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.7)
        Gecko/20091221
          Firefox/3.5.7']
    method: GET
    tor: {is_tor: false}
    url: http://betguardian.me/
  response:
    body: "\uFEFF<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01
Transitional//EN\"\r\
      \n\"http://www.w3.org/TR/html4/loose.dtd\">\r\n<html>\r\n<head>\r\n<title>.:\
      \ \u0391\u03C0\u03B1\u03B3\u03CC\u03C1\u03B5\u03C5\u03C3\u03B7
\u03A0\u03C1\u03CC\
      \u03C3\u03B2\u03B1\u03C3\u03B7\u03C2 :.</title>\r\n<meta
http-equiv=\"Content-Type\"\
      \ content=\"text/html; charset=UTF-8\">\r\n<style
type=\"text/css\">\r\n<!--\r\
      \nbody
{\r\n\tpadding:0px;\r\n\tmargin:0px;\r\n\tfont-family:Tahoma;\r\n\tfont-size:11pt;\r\
      \n\tbackground-image:
url(/img/wind_new_bg.jpg);\r\n\tbackground-repeat:repeat-x;\r\
      \n\tbackground-position: center top; \r\n}\r\n\r\na
{\r\n\tcolor:#02578E;\r\n\
      \tcursor: pointer; cursor: hand;\r\n}\r\n\r\nTop
{\r\n\tmargin:0;\r\n\theight:125px;\r\
      \n\twidth:970px;\r\n\tmargin-bottom:20px;\r\n}\r\n\r\nLogo{\r\n\tfloat:left;\r\
      \n\twidth:188px;\r\n}\r\n\r\n.style1 {\r\n\tfont-size:
11pt;\r\n\tfont-weight:\
      \ bold;\r\n}\r\n\r\n.style2 {color: #02578E}\r\n\r\n.main {\r\n\tmargin:
30px\
      \ 10px 10px 20px;\r\n\tpadding:10pt auto;\r\n\tline-spacing:
110%;\r\n\tfont-size:\
      \ 11pt;\r\n\ttext-align:
justify;\r\n}\r\n\r\n.uline{\r\n\ttext-decoration:underline;\r\
      \n\tfont-weight: bold;\r\n}\r\n-->\r\n</style>\r\n</head>\r\n<body
class=\"\
      body\">\r\n\t<div class=\"Top\">\r\n\t\t<div class=\"Logo\"><img
src=\"/img/wind_logo.jpg\"\
      ></div>\r\n\t</div>\r\n\t<div class=\"main\">\r\n\t\t\t<p><span
      >class=\"style1\"\
      >\u03A3\u03B7\u03BC\u03B1\u03BD\u03C4\u03B9\u03BA\u03AE
      >\u03B5\u03BD\u03B7\u03BC\
      \u03AD\u03C1\u03C9\u03C3\u03B7:</span></p>\r\n\t\t\t<p>\u039C\u03B5
\u03B2\u03AC\
      \u03C3\u03B7 \u03C4\u03B7\u03BD 65/8/24.7.2013
\u03B1\u03C0\u03CC\u03C6\u03B1\
      \u03C3\u03B7 \u03C4\u03B7\u03C2
<strong>\u0395\u03C0\u03B9\u03C4\u03C1\u03BF\
      \u03C0\u03AE\u03C2 \u0395\u03C0\u03BF\u03C0\u03C4\u03B5\u03AF\u03B1\u03C2
\u03BA\
      \u03B1\u03B9 \u0395\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5
\u03A0\u03B1\u03B9\u03B3\
      \u03BD\u03AF\u03C9\u03BD (\u0395.\u0395.\u0395.\u03A0.)</strong>, \u03BF
\u03B9\
      \u03C3\u03C4\u03CC\u03C4\u03BF\u03C0\u03BF\u03C2 \u03C0\u03BF\u03C5
\u03B5\u03C0\
      \u03B9\u03C7\u03B5\u03B9\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1
\u03B5\u03C0\
      \u03B9\u03C3\u03BA\u03B5\u03C6\u03B8\u03B5\u03AF\u03C4\u03B5
<strong>\u03C0\u03C1\
      \u03BF\u03C3\u03C6\u03AD\u03C1\u03B5\u03B9
\u03C5\u03C0\u03B7\u03C1\u03B5\u03C3\
      \u03AF\u03B5\u03C2 \u03C4\u03C5\u03C7\u03B5\u03C1\u03CE\u03BD
\u03C0\u03B1\u03B9\
      \u03B3\u03BD\u03AF\u03C9\u03BD \u03BA\u03B1\u03B9
\u03C3\u03C4\u03BF\u03B9\u03C7\
      \u03B7\u03BC\u03AC\u03C4\u03C9\u03BD <span
class='uline'>\u03C7\u03C9\u03C1\u03AF\
      \u03C2 \u03AC\u03B4\u03B5\u03B9\u03B1</span></strong>
\u03C3\u03C4\u03B7\u03BD\
      \
\u0395\u03BB\u03BB\u03AC\u03B4\u03B1.</p>\r\n\t\t\t<p>\u039A\u03B1\u03C4\u03AC\
      \ \u03C3\u03C5\u03BD\u03AD\u03C0\u03B5\u03B9\u03B1, <strong>\u03B7
\u03C0\u03C1\
      \u03CC\u03C3\u03B2\u03B1\u03C3\u03B7 \u03C3\u03C4\u03BF\u03BD
\u03B9\u03C3\u03C4\
      \u03CC\u03C4\u03BF\u03C0\u03BF \u03B1\u03C5\u03C4\u03CC
\u03B4\u03B5\u03BD \u03B5\
      \u03AF\u03BD\u03B1\u03B9
\u03B5\u03C0\u03B9\u03C4\u03C1\u03B5\u03C0\u03C4\u03AE\
      </strong>, \u03CC\u03C0\u03C9\u03C2 \u03BA\u03B1\u03B9 \u03C3\u03B5
\u03BA\u03AC\
      \u03B8\u03B5 \u03B9\u03C3\u03C4\u03CC\u03C4\u03BF\u03C0\u03BF
\u03C0\u03BF\u03C5\
      \
\u03C0\u03B5\u03C1\u03B9\u03BB\u03B1\u03BC\u03B2\u03AC\u03BD\u03B5\u03C4\u03B1\
      \u03B9 \u03C3\u03C4\u03BF\u03BD
\u03C3\u03C7\u03B5\u03C4\u03B9\u03BA\u03CC \u03BA\
      \u03B1\u03C4\u03AC\u03BB\u03BF\u03B3\u03BF \u03C4\u03B7\u03C2
\u0395.\u0395\
      .\u0395.\u03A0.
\u03A0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\
      \u03B5\u03C2
\u03BB\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\
      \u03C2 \u03C3\u03C7\u03B5\u03C4\u03B9\u03BA\u03AC \u03BC\u03B5
\u03C4\u03B1\
      \ \u03C0\u03B1\u03C1\u03B1\u03C0\u03AC\u03BD\u03C9
\u03BA\u03B1\u03B8\u03CE\u03C2\
      \ \u03BA\u03B1\u03B9 \u03C4\u03BF\u03BD \u03C0\u03BB\u03AE\u03C1\u03B7
\u03BA\
      \u03B1\u03C4\u03AC\u03BB\u03BF\u03B3\u03BF \u03C4\u03C9\u03BD
\u03B1\u03C0\u03B1\
      \u03B3\u03BF\u03C1\u03B5\u03C5\u03BC\u03AD\u03BD\u03C9\u03BD
\u03B1\u03C0\u03CC\
      \ \u03C4\u03B7\u03BD \u0395.\u0395.\u0395.\u03A0.
\u03B9\u03C3\u03C4\u03BF\u03C4\
      \u03CC\u03C0\u03C9\u03BD \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5
\u03BD\
      \u03B1 \u03B2\u03C1\u03B5\u03AF\u03C4\u03B5 \u03B5\u03B4\u03CE:  <a
href='http://www.gamingcommission.gov.gr/index.php/el'\
      \
target='_new'>http://www.gamingcommission.gov.gr/index.php/el/</a></p>\r\n\
      \t\t\t<p>\u039C\u03B5
\u03B5\u03BA\u03C4\u03AF\u03BC\u03B7\u03C3\u03B7,<br />\r\
      \n\t\t\tWIND
\u0395\u03BB\u03BB\u03AC\u03C2\r\n\t\t\t</p>\r\n\t</div>\r\n</body>\r\
      \n</html>\r\n"
    code: 200
    headers:
    - - Content-Length
      - ['2395']
    - - Accept-Ranges
      - [bytes]
    - - Server
      - [Tellas HTTP Server]
    - - Last-Modified
      - ['Wed, 04 Sep 2013 06:55:41 GMT']
    - - Connection
      - [close]
    - - ETag
      - ['"1cf689-95b-4b277540"']
    - - Date
      - ['Fri, 04 Jul 2014 00:00:08 GMT']
    - - Content-Type
      - [text/html]
```

This ISP has blocked 325 entries (74.2%) of the published [blacklist][EEEP_blacklist_PDF].

A screenshot from the blocked website:

![Wind mobile EEEP Blocked website screenshot](/post/eeep-greek-censorship/eeep_wind_gr.png "Wind mobile EEEP Blocked website screenshot")

At least 65 entries falsely responded with a 404 HTTP error.

```
- request:
    body: null
    headers:
    - - User-Agent
      - ['Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.2) Gecko/20100115
        Firefox/3.6']
    method: GET
    tor: {is_tor: false}
    url: http://tatts.com/nswlotteries
  response:
    body: '<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">

      <html><head>

      <title>404 Not Found</title>

      </head><body>

      <h1>Not Found</h1>

      <p>The requested URL /nswlotteries was not found on this server.</p>

      <p>Additionally, a 404 Not Found

      error was encountered while trying to use an ErrorDocument to handle the
request.</p>

      </body></html>

      '
    code: 404
    headers:
    - - Date
      - ['Fri, 04 Jul 2014 00:01:30 GMT']
    - - Content-Length
      - ['329']
    - - Content-Type
      - [text/html; charset=iso-8859-1]
    - - Connection
      - [close]
    - - Server
      - [Tellas HTTP Server]
```

4 entries landing to the Wind support page: "landline services provided by Wind have been suspended"

```
agent: agent
body_length_match: false
body_proportion: 0.0
control_failure: null
experiment_failure: null
factor: 0.8
headers_diff: !!set {Accept-Ranges: null, Content-Type: null, ETag: null,
Last-Modified: null,
  Location: null, Server: null}
headers_match: false
input: http://www.betoto.com
requests:
- request:
    body: null
    headers:
    - - User-Agent
      - ['Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.7)
        Gecko/20091221
          Firefox/3.5.7']
    method: GET
    tor: {is_tor: false}
    url: http://www.betoto.com
  response:
    body: "\uFEFF<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01
Transitional//EN\"\r\
      \n\"http://www.w3.org/TR/html4/loose.dtd\">\r\n<html>\r\n<head>\r\n<title>.:\
      \ \u03A0\u03C1\u03BF\u03C3\u03C9\u03C1\u03B9\u03BD\u03AE
\u03C6\u03C1\u03B1\u03B3\
      \u03AE \u03C4\u03C9\u03BD
\u03C5\u03C0\u03B7\u03C1\u03B5\u03C3\u03B9\u03CE\u03BD\
      \ \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7\u03C2
\u03C3\u03C4\u03BF\
      \ Internet \u03BA\u03B1\u03B9
\u03C3\u03C4\u03B1\u03B8\u03B5\u03C1\u03AE\u03C2\
      \ \u03C4\u03B7\u03BB\u03B5\u03C6\u03C9\u03BD\u03AF\u03B1\u03C2
:.</title>\r\n\
      <!-- <meta http-equiv=\"Content-Type\" content=\"text/html;
charset=iso-8859-7\"\
      > -->\r\n<meta http-equiv=\"Content-Type\" content=\"text/html;
      > charset=UTF-8\"\
      >\r\n<style type=\"text/css\">\r\n<!--\r\n\r\n\r\nbody
      >{\r\n\tpadding:0px;\r\
      \n\tmargin:0px;\r\n\tfont-family:Tahoma;\r\n\tfont-size:11px;\r\n\tbackground-image:\
      \
url(/img/wind_new_bg.jpg);\r\n\tbackground-repeat:repeat-x;\r\n\tbackground-position:\
      \ center top; \r\n\t\r\n}\r\na {\r\n\tcolor:#02578E;\r\n\tcursor:
pointer; cursor:\
      \ hand;\r\n\t}\r\n\t\r\n\r\nTop\r\n{\r\n\tmargin:0
auto;\r\n\theight:125px;\r\
      \n\twidth:970px;\r\n\tmargin-bottom:20px;\r\n}\r\nLogo{\r\n\tfloat:left;\r\n\
      \twidth:188px;\r\n}\r\n.style1 {\r\n\tfont-size: 14px;\r\n\tfont-weight:
bold;\r\
      \n}\r\n.style2 {color: #02578E}\r\n\r\n\r\n\r\n-->\r\n</style>\r\n<script
type=\"\
      text/javascript\">  \r\ndocument.write('<style
type=\"text\\/css\">#toggle {\
      \ display: none; }<\\/style>');  \r\n</script>  \r\n<script
type=\"text/javascript\"\
      >  \r\nfunction switchMenu(obj) {  \r\n  var el =
      >  document.getElementById(obj);\
      \  \r\n  if ( el.style.display != \"none\" ) {  \r\n    el.style.display
= 'none';\
      \  \r\n  }  \r\n  else {  \r\n    el.style.display = 'block';  \r\n  }
\r\n\
      }  \r\nfunction hide() {  \r\n
document.getElementById(\"toggle\").style.display='none';\
      \  \r\n  document.getElementById(\"toggle1\").style.display='none'; \r\n
document.getElementById(\"\
      toggle2\").style.display='none'; \r\n}
\r\n</script>\r\n\r\n</head>\r\n\r\n\
      <body class=\"body\" onload=\"hide();\">\r\n\t\t<div
class=\"Top\">\r\n\t\t\t\
      <div
class=\"Logo\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\
      \n\t\t\t<img
src=\"/img/wind_logo.jpg\"></td>\r\n\t\t</div>\r\n\t\t</div>\r\n\
      \t\t<table width=\"100%\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td
width=\"15%\">&nbsp;</td>\r\
      \n\t\t\t\t\t<td width=\"76%\"><BR><BR><p><span
class=\"style1\">\u03A3\u03B7\
      \u03BC\u03B1\u03BD\u03C4\u03B9\u03BA\u03AE
\u03B5\u03BD\u03B7\u03BC\u03AD\u03C1\
      \u03C9\u03C3\u03B7:</span><br>\r\n\t\t\t\t     <br>\r\n\u03A3\u03B1\u03C2
\u03B5\
      \u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03BD\u03BF\u03C5\u03BC\u03B5
\u03C0\u03C9\
      \u03C2 <strong>\u03AD\u03C7\u03B5\u03B9
\u03B5\u03BD\u03B5\u03C1\u03B3\u03BF\
      \u03C0\u03BF\u03B9\u03B7\u03B8\u03B5\u03AF \u03B7
\u03C0\u03C1\u03BF\u03C3\u03C9\
      \u03C1\u03B9\u03BD\u03AE \u03C6\u03C1\u03B1\u03B3\u03AE
\u03C4\u03C9\u03BD \u03C5\
      \u03C0\u03B7\u03C1\u03B5\u03C3\u03B9\u03CE\u03BD
\u03C0\u03C1\u03CC\u03C3\u03B2\
      \u03B1\u03C3\u03B7\u03C2 \u03C3\u03C4\u03BF Internet \u03BA\u03B1\u03B9
\u03C3\
      \u03C4\u03B1\u03B8\u03B5\u03C1\u03AE\u03C2
\u03C4\u03B7\u03BB\u03B5\u03C6\u03C9\
      \u03BD\u03AF\u03B1\u03C2</strong> \u03C0\u03BF\u03C5
\u03BB\u03B1\u03BC\u03B2\
      \u03AC\u03BD\u03B5\u03C4\u03B5 \u03B1\u03C0\u03CC \u03C4\u03B7 Wind.
\u039F\
      \ \u03BB\u03CC\u03B3\u03BF\u03C2 \u03C4\u03B7\u03C2
\u03C6\u03C1\u03B1\u03B3\
      \u03AE\u03C2 \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1
\u03B5\u03AF\u03BD\
      \u03B1\u03B9:</p>\r\n\t\t\t\t\t  <ol>\r\n\t\t\t\t\t
<li><strong>\u039B\u03B7\
      \u03BE\u03B9\u03C0\u03C1\u03CC\u03B8\u03B5\u03C3\u03BC\u03B5\u03C2
\u03BF\u03C6\
      \u03B5\u03B9\u03BB\u03AD\u03C2</strong> \u03AE\r\n\t\t\t\t\t
</li>\r\n\t\t\
      \t            <li> <strong>\u03A7\u03C1\u03AE\u03C3\u03B7
\u03C4\u03B7\u03C2\
      \ \u03C5\u03C0\u03B7\u03C1\u03B5\u03C3\u03AF\u03B1\u03C2
\u03C0\u03BF\u03C5\
      \
\u03B5\u03BD\u03B1\u03BD\u03C4\u03B9\u03CE\u03BD\u03B5\u03C4\u03B1\u03B9
\u03BC\
      \u03B5 \u03C4\u03BF\u03C5\u03C2 \u03CC\u03C1\u03BF\u03C5\u03C2
\u03C7\u03C1\u03AE\
      \u03C3\u03B7\u03C2</strong>
(\u03B1\u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE\
      \ \u03BC\u03B1\u03B6\u03B9\u03BA\u03CE\u03BD mail -spam-,
\u03B5\u03C0\u03B9\
      \u03B8\u03AD\u03C3\u03B5\u03B9\u03C2 \u03C3\u03B5
\u03C3\u03C5\u03BD\u03B4\u03B5\
      \u03B4\u03B5\u03BC\u03AD\u03BD\u03BF\u03C5\u03C2
\u03C7\u03C1\u03AE\u03C3\u03C4\
      \u03B5\u03C2 -attacks- \u03BA\u03BB\u03C0)\r\n
\r\n\
      \t\t\t            </li>\r\n\t\t\t\t\t  </ol>\r\n
\u03A3\
      \u03C4\u03B7\u03BD \u03C0\u03B5\u03C1\u03AF\u03C0\u03C4\u03C9\u03C3\u03B7
\u03C4\
      \u03C9\u03BD
\u03BB\u03B7\u03BE\u03B9\u03C0\u03C1\u03CC\u03B8\u03B5\u03C3\u03BC\
      \u03C9\u03BD \u03BF\u03C6\u03B5\u03B9\u03BB\u03CE\u03BD,
\u03C0\u03B1\u03C1\u03B1\
      \u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 \u03BD\u03B1
\u03C0\u03C1\u03BF\u03C7\
      \u03C9\u03C1\u03AE\u03C3\u03B5\u03C4\u03B5 \u03AC\u03BC\u03B5\u03C3\u03B1
\u03C3\
      \u03C4\u03B7\u03BD \u03B5\u03BE\u03CC\u03C6\u03BB\u03B7\u03C3\u03AE
\u03C4\u03BF\
      \u03C5\u03C2 \u03BC\u03B5 \u03AD\u03BD\u03B1\u03BD \u03B1\u03C0\u03CC
\u03C4\
      \u03BF\u03C5\u03C2
\u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03BF\u03C5\
      \u03C2 \u03C4\u03C1\u03CC\u03C0\u03BF\u03C5\u03C2
\u03C0\u03BB\u03B7\u03C1\u03C9\
      \u03BC\u03AE\u03C2:\r\n                   \r\n<p><a
onclick=\"switchMenu('toggle');\"\
      \ title=\"\u0394\u03B5\u03AF\u03C4\u03B5 \u03C4\u03BF\u03C5\u03C2
\u03B4\u03B9\
      \u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03BF\u03C5\u03C2
\u03C4\u03C1\u03CC\u03C0\
      \u03BF\u03C5\u03C2 \u03C0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE\u03C2\"
onMouseOver=\"\
      this.style.color = '#C71B37'\" onMouseOut=\"this.style.color =
'#02578E'\">\r\
      \n<b><u>[+]
\xAB\u0394\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03BF\u03B9\
      \ \u03C4\u03C1\u03CC\u03C0\u03BF\u03B9
\u03C0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE\
      \u03C2\xBB</u></b></a><p></p>\r\n<DIV id=\"toggle\">\r\n<ol>
\
      \      \r\n\t<li
class=\"style2\"><strong>\u0395\u03BE\u03CC\u03C6\u03BB\u03B7\
      \u03C3\u03B7 \u03C3\u03B5
\u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B7\u03BC\u03B1\
      \ Wind <u>(\u03C3\u03C5\u03C3\u03C4\u03AE\u03BD\u03B5\u03C4\u03B1\u03B9
\u03B3\
      \u03B9\u03B1 \u03B3\u03C1\u03AE\u03B3\u03BF\u03C1\u03B7
\u03B5\u03BE\u03C5\u03C0\
      \u03B7\u03C1\u03AD\u03C4\u03B7\u03C3\u03B7)</u></strong></li>\r\n    <li
class=\"\
      style2\"><strong>\u039C\u03AD\u03C3\u03C9
\u03C0\u03B9\u03C3\u03C4\u03C9\u03C4\
      \u03B9\u03BA\u03CE\u03BD \u03BA\u03B1\u03C1\u03C4\u03CE\u03BD
\u03BC\u03B5 \u03B5\
      \u03C0\u03B9\u03C4\u03CC\u03C0\u03BF\u03C5
\u03C7\u03C1\u03AD\u03C9\u03C3\u03B7\
      \ \u03C3\u03B5 \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B7\u03BC\u03B1
Wind</strong>\
      \ (Visa, Mastercard,
\u0395\u03B8\u03BD\u03BF\u03BA\u03AC\u03C1\u03C4\u03B1\
      , American Express, Eurocard \u03BA\u03B1\u03B9 Diners) \u03AE
\u03BC\u03B5\
      \ <strong>\u03AC\u03BC\u03B5\u03C3\u03B7
\u03C7\u03C1\u03AD\u03C9\u03C3\u03B7\
      </strong> \u03C4\u03B7\u03C2
\u03C0\u03B9\u03C3\u03C4\u03C9\u03C4\u03B9\u03BA\
      \u03AE\u03C2 \u03C3\u03B1\u03C2 \u03BA\u03AC\u03C1\u03C4\u03B1\u03C2
(Visa,\
      \ Mastercard \u03BA\u03B1\u03B9 Diners),
\u03BA\u03B1\u03BB\u03CE\u03BD\u03C4\
      \u03B1\u03C2 \u03BC\u03B1\u03C2 \u03C3\u03C4\u03BF 1215
\u03B1\u03C0\u03CC \u03BA\
      \u03B9\u03BD\u03B7\u03C4\u03CC WIND \u03C7\u03C9\u03C1\u03AF\u03C2
\u03C7\u03C1\
      \u03AD\u03C9\u03C3\u03B7 \u03AE \u03C3\u03C4\u03BF 210-5100600
(\u0394\u03B5\
      \u03C5\u03C4\u03AD\u03C1\u03B1-\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\
      \u03AE 08:00-17:00)</li>\r\n    <li
class=\"style2\">\u03A3\u03C4\u03B1<strong>\
      \
\u03C5\u03C0\u03BF\u03BA\u03B1\u03C4\u03B1\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\
      \u03B1 \u03C4\u03C9\u03BD
\u03C4\u03C1\u03B1\u03C0\u03B5\u03B6\u03CE\u03BD</strong>:\
      \ \u0395\u03B8\u03BD\u03B9\u03BA\u03AE, EFG Eurobank-Ergasias, Alpha
Bank, T\
      \ Bank, Marfin-\u0395\u03B3\u03BD\u03B1\u03C4\u03AF\u03B1,
\u039A\u03CD\u03C0\
      \u03C1\u03BF\u03C5, \u0391\u03B3\u03C1\u03BF\u03C4\u03B9\u03BA\u03AE,
\u0395\
      \u03BC\u03C0\u03BF\u03C1\u03B9\u03BA\u03AE, Probank \u03BA\u03B1\u03B9
\u03A4\
      \u03B1\u03C7\u03C5\u03B4\u03C1\u03BF\u03BC\u03B9\u03BA\u03CC
\u03A4\u03B1\u03BC\
      \u03B9\u03B5\u03C5\u03C4\u03AE\u03C1\u03B9\u03BF
\u03C0\u03C1\u03BF\u03C3\u03BA\
      \u03BF\u03BC\u03AF\u03B6\u03BF\u03BD\u03C4\u03B1\u03C2 \u03C4\u03BF
\u03BB\u03BF\
      \u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC
\u03C3\u03B1\u03C2\r\n\t<li\
      \ class=\"style2\">\u03A3\u03C4\u03B1<strong>
\u03C5\u03C0\u03BF\u03BA\u03B1\
      \u03C4\u03B1\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03B1
\u0395\u039B\u03A4\u0391\
      </strong>,
\u03C0\u03C1\u03BF\u03C3\u03BA\u03BF\u03BC\u03AF\u03B6\u03BF\u03BD\
      \u03C4\u03B1\u03C2 \u03C4\u03BF
\u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\
      \u03BC\u03CC \u03C3\u03B1\u03C2</li>\r\n    <li
class=\"style2\">\u039C\u03AD\
      \u03C3\u03C9 <strong>web-banking</strong> \u03C4\u03C9\u03BD
\u03C4\u03C1\u03B1\
      \u03C0\u03B5\u03B6\u03CE\u03BD \u0395\u03B8\u03BD\u03B9\u03BA\u03AE, EFG
Eurobank-Ergasias,\
      \ Alpha Bank, Marfin-\u0395\u03B3\u03BD\u03B1\u03C4\u03AF\u03B1,
\u039A\u03CD\
      \u03C0\u03C1\u03BF\u03C5,
\u03A0\u03B5\u03B9\u03C1\u03B1\u03B9\u03CE\u03C2,\
      \ \u0391\u03B3\u03C1\u03BF\u03C4\u03B9\u03BA\u03AE,
\u0395\u03BC\u03C0\u03BF\
      \u03C1\u03B9\u03BA\u03AE, HSBC \u03BA\u03B1\u03B9
\u03A4\u03B1\u03C7\u03C5\u03B4\
      \u03C1\u03BF\u03BC\u03B9\u03BA\u03CC
\u03A4\u03B1\u03BC\u03B9\u03B5\u03C5\u03C4\
      \u03AE\u03C1\u03B9\u03BF</li>\r\n    <li
class=\"style2\">\u039C\u03AD\u03C3\
      \u03C9<strong> phone-banking</strong> \u03C4\u03C9\u03BD
\u03C4\u03C1\u03B1\u03C0\
      \u03B5\u03B6\u03CE\u03BD EFG Eurobank-Ergasias, Alpha Bank,
Marfin-\u0395\u03B3\
      \u03BD\u03B1\u03C4\u03AF\u03B1, \u039A\u03CD\u03C0\u03C1\u03BF\u03C5,
\u03A0\
      \u03B5\u03B9\u03C1\u03B1\u03B9\u03CE\u03C2 \u03BA\u03B1\u03B9
HSBC</li>\r\n\
      \    <li class=\"style2\">\u039C\u03AD\u03C3\u03C9 \u03C4\u03C9\u03BD
\u03B1\
      \u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03C9\u03BD
\u03BC\u03B7\u03C7\u03B1\u03BD\
      \u03B7\u03BC\u03AC\u03C4\u03C9\u03BD<strong> Easy Pay</strong>
\u03C4\u03B7\u03C2\
      \ \u03A4\u03C1\u03AC\u03C0\u03B5\u03B6\u03B1\u03C2
\u03A0\u03B5\u03B9\u03C1\u03B1\
      \u03B9\u03CE\u03C2</li>\r\n    <li
class=\"style2\">\u039C\u03AD\u03C3\u03C9\
      \ <strong>winbank</strong> easypay \u03C4\u03B7\u03C2
\u03A0\u03B5\u03B9\u03C1\
      \u03B1\u03B9\u03CE\u03C2</li>\r\n    <li
class=\"style2\">\u039C\u03AD\u03C3\
      \u03C9 \u03C4\u03BF\u03C5<strong>
\u03B4\u03B9\u03BA\u03C4\u03CD\u03BF\u03C5\
      \ \u0391\u03A4\u039C</strong> \u03C4\u03C9\u03BD
\u03C4\u03C1\u03B1\u03C0\u03B5\
      \u03B6\u03CE\u03BD \u0395\u03B8\u03BD\u03B9\u03BA\u03AE, Alpha Bank,
\u0391\u03B3\
      \u03C1\u03BF\u03C4\u03B9\u03BA\u03AE, Probank \u03BA\u03B1\u03B9
\u03A4\u03B1\
      \u03C7\u03C5\u03B4\u03C1\u03BF\u03BC\u03B9\u03BA\u03CC
\u03A4\u03B1\u03BC\u03B9\
      \u03B5\u03C5\u03C4\u03AE\u03C1\u03B9\u03BF, \u03BC\u03B5
\u03C7\u03C1\u03AE\u03C3\
      \u03B7 \u03C4\u03BF\u03C5 \u039A\u03C9\u03B4\u03B9\u03BA\u03BF\u03CD
\u03A0\u03BB\
      \u03B7\u03C1\u03C9\u03BC\u03AE\u03C2 \u0391\u03A4\u039C
\u03C0\u03BF\u03C5 \u03B1\
      \u03BD\u03B1\u03B3\u03C1\u03AC\u03C6\u03B5\u03C4\u03B1\u03B9
\u03C3\u03C4\u03B7\
      \u03BD \u03C0\u03C1\u03CE\u03C4\u03B7
\u03C3\u03B5\u03BB\u03AF\u03B4\u03B1 \u03C4\
      \u03BF\u03C5
\u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD\
      </li>\r\n    <li class=\"style2\">\u039C\u03AD\u03C3\u03C9
\u03C4\u03BF\u03C5\
      <strong> \u0394\u03B9\u03BA\u03C4\u03CD\u03BF\u03C5
\u0391\u03C5\u03C4\u03CC\
      \u03BC\u03B1\u03C4\u03C9\u03BD \u039A\u03AD\u03BD\u03C4\u03C1\u03C9\u03BD
\u03A0\
      \u03BB\u03B7\u03C1\u03C9\u03BC\u03CE\u03BD</strong> (APS)
\u03C4\u03BF\u03C5\
      \
\u03A4\u03B1\u03C7\u03C5\u03B4\u03C1\u03BF\u03BC\u03B9\u03BA\u03BF\u03CD
\u03A4\
      \u03B1\u03BC\u03B9\u03B5\u03C5\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5</li>\r\n\
      </ol>\r\n\r\n<p></p>\r\n\r\n  \r\n  \r\n<span
class=\"style2\"><strong><u>\u03A0\
      \u03C1\u03BF\u03C3\u03BF\u03C7\u03AE:</u></strong> \u03A3\u03B5
\u03C0\u03B5\
      \u03C1\u03AF\u03C0\u03C4\u03C9\u03C3\u03B7 \u03C0\u03BF\u03C5
<strong>\u03B4\
      \u03B5\u03BD</strong>
\u03C0\u03C1\u03BF\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\
      \u03C4\u03B5 \u03C3\u03B5
\u03B5\u03BE\u03CC\u03C6\u03BB\u03B7\u03C3\u03B7 \u03C3\
      \u03B5 \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B7\u03BC\u03B1 Wind,
\u03C3\u03C5\
      \u03C3\u03C4\u03AE\u03BD\u03B5\u03C4\u03B1\u03B9
-\u03CE\u03C3\u03C4\u03B5 \u03BD\
      \u03B1
\u03B5\u03BE\u03C5\u03C0\u03B7\u03C1\u03B5\u03C4\u03B7\u03B8\u03B5\u03AF\
      \u03C4\u03B5 \u03C4\u03B1\u03C7\u03CD\u03C4\u03B5\u03C1\u03B1- \u03B7
\u03B1\
      \u03C0\u03BF\u03C3\u03C4\u03BF\u03BB\u03AE \u03BC\u03B5 FAX
\u03C3\u03C4\u03BF\
      \ 211 120 1100 \u03AE \u03BC\u03B5 e-mail \u03C3\u03C4\u03BF
CustomerCareFixed@wind.gr,\
      \ \u03C4\u03B7\u03C2
\u03B1\u03C0\u03CC\u03B4\u03B5\u03B9\u03BE\u03B7\u03C2\
      \ \u03C0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE\u03C2, \u03BC\u03B5
\u03C4\u03B7\
      \u03BD \u03AD\u03BD\u03B4\u03B5\u03B9\u03BE\u03B7
\xAB\u0386\u03C1\u03C3\u03B7\
      \ \u03A0\u03C1\u03BF\u03C3\u03C9\u03C1\u03B9\u03BD\u03AE\u03C2
\u03A6\u03C1\u03B1\
      \u03B3\u03AE\u03C2\xBB \u03BA\u03B1\u03B9
\u03B1\u03BD\u03B1\u03B3\u03C1\u03AC\
      \u03C6\u03BF\u03BD\u03C4\u03B1\u03C2 \u03C4\u03BF\u03BD
\u03B1\u03C1\u03B9\u03B8\
      \u03BC\u03CC \u03C4\u03B7\u03C2
\u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03AE\u03C2\
      \ \u03C3\u03B1\u03C2 \u03AE \u03C4\u03BF\u03BD
\u03BA\u03C9\u03B4\u03B9\u03BA\
      \u03CC
\u03C0\u03B5\u03BB\u03AC\u03C4\u03B7</span>\r\n<p></p>\r\n</div>\r\n\
      <p>\u039C\u03B5 \u03C4\u03B7\u03BD
\u03B5\u03BE\u03CC\u03C6\u03BB\u03B7\u03C3\
      \u03B7 \u03C4\u03C9\u03BD \u03BF\u03C6\u03B5\u03B9\u03BB\u03CE\u03BD,
\u03B7\
      \ Wind \u03B8\u03B1
\u03C0\u03C1\u03BF\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03B9\
      \ \u03C3\u03C4\u03B9\u03C2<strong>
\u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\
      \u03B7\u03C4\u03B5\u03C2
\u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B5\u03C2\
      \ \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD \u03AC\u03C1\u03C3\u03B7
\u03C4\u03B7\
      \u03C2 \u03C6\u03C1\u03B1\u03B3\u03AE\u03C2</strong>, \u03B5\u03BD\u03CE
\u03B1\
      \u03C0\u03CC \u03C4\u03B7\u03BD \u03C0\u03BB\u03B5\u03C5\u03C1\u03AC
\u03C3\u03B1\
      \u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9
\u03C0\u03B9\u03B8\u03B1\u03BD\u03CC \u03BD\
      \u03B1 \u03C7\u03C1\u03B5\u03B9\u03AC\u03B6\u03B5\u03C4\u03B1\u03B9
<strong>\u03B5\
      \u03C0\u03B1\u03BD\u03B5\u03BA\u03BA\u03AF\u03BD\u03B7\u03C3\u03B7
\u03C4\u03BF\
      \u03C5 \u03B5\u03BE\u03BF\u03C0\u03BB\u03B9\u03C3\u03BC\u03BF\u03CD
(router).</strong></p>\r\
      \n<p>\u0393\u03B9\u03B1 \u03AC\u03BC\u03B5\u03C3\u03B7
\u03AC\u03C1\u03C3\u03B7\
      \ \u03C4\u03B7\u03C2 \u03C6\u03C1\u03B1\u03B3\u03AE\u03C2&nbsp;
<strong>\u03C3\
      \u03C5\u03C3\u03C4\u03AE\u03BD\u03B5\u03C4\u03B1\u03B9 \u03B7
\u03B5\u03BE\u03CC\
      \u03C6\u03BB\u03B7\u03C3\u03B7 \u03C3\u03B5
\u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\
      \u03B7\u03BC\u03B1 Wind </strong>.  </p>\r\n<p>\u039C\u03B5
\u03B5\u03BA\u03C4\
      \u03AF\u03BC\u03B7\u03C3\u03B7,\r\n<p>Wind
\u0395\u03BB\u03BB\u03AC\u03C2\r\n\
      \      </li>\r\n\t</ol>\r\n</td>\r\n<td
width=\"9%\">&nbsp;</td>\r\n</tr>\r\n\
      \t\t\t\t\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td
width=\"15%\">&nbsp;</td>\r\n\t\t\t\
      \t\t<td width=\"76%\">\r\n\t\t\t\t\t<a onclick=\"switchMenu('toggle2');\"
title=\"\
      English Version\" onMouseOver=\"this.style.color = '#C71B37'\"
onMouseOut=\"\
      this.style.color = '#02578E'\"><b> <u>[+] English
Version</u></b>&nbsp;&nbsp;<img\
      \ src=\"/img/flag_en.jpg\" width=\"18\" height=\"13\">
</a><p>\r\n\t\t\t\t\t\
      \ <div id=\"toggle2\"> \r\n\t\t\t\t\t <p><span class=\"style1\">Important
notice:</span><br>\r\
      \n  \r\nYou are kindly informed that your <strong>landline services
provided\
      \ by Wind have been suspended </strong> due to: </p>\r\n\t\t\t\t\t
<ol>\r\n\
      \t\t\t\t\t    <li><strong>Non-payment</strong> or</li>\r\n\t\t\t
\
      \ <li> <strong>Violation of terms of use</strong>\r\n
\
      \    \r\n\t\t\t            </li>\r\n\t\t\t\t\t  </ol>\r\n           In
case\
      \ of suspension due to non-payment please proceed as soon as possible to
settlement\
      \ with one of the available ways listed below:\r\n
\r\n<p><a\
      \ onclick=\"switchMenu('toggle1');\" title=\"Make Click to view the Ways
of\
      \ Payment\" onMouseOver=\"this.style.color = '#C71B37'\"
onMouseOut=\"this.style.color\
      \ = '#02578E'\"><b> <u>[+] &quot;Ways of
Payment&quot;</u></b></a>\r\n<DIV id=\"\
      toggle1\" class=\"style2\">\r\n<ol>
\r\n\t<li><strong>Directly\
      \ in any Wind Store <u>(recommended for quick service
re-activation)</u></strong><strong></strong></li>\r\
      \n    <li> <strong>Using your credit card </strong>, with <strong>direct
charge\
      \ in any Wind Store </strong> (Visa, Mastercard, Ethnokarta, American
Express,\
      \ Eurocard and Diners) or </li>\r\n    <li><strong>In any branch of the
following\
      \ banks: </strong>&nbsp;National bank of Greece, EFG Eurobank-Ergasias,
Alpha\
      \ Bank, T Bank, Marfin-Egnatia, Bank of Cyprus, ATEbank, Emporiki Bank,
Probank\
      \ and Hellenic Postbank bringing your bill </li>\r\n    <li> <strong>any
Hellenic\
      \ Post branch (ELTA) </strong>, bringing your bill </li>\r\n
<li>Through&nbsp;\
      \ <strong>web banking </strong>&nbsp;services of the following banks:
National\
      \ bank of Greece, EFG Eurobank-Ergasias, Alpha Bank, Marfin-Egnatia, Bank
of\
      \ Cyprus, Piraeus Bank, ATEbank, Emporiki Bank, HSBC and Hellenic
Postbank </li>\r\
      \n    <li> Through&nbsp; <strong>phone-banking </strong>&nbsp;services of
the\
      \ following banks: EFG Eurobank-Ergasias, Alpha Bank, Marfin-Egnatia,
Bank of\
      \ Cyprus, Piraeus Bank and HSBC </li>\r\n    <li> Through&nbsp;
<strong>Easy\
      \ Pay </strong>&nbsp;bill payment spots provided by Piraeus Bank
</li>\r\n \
      \   <li>Through&nbsp; <strong>Winbank Easy Pay </strong>&nbsp;service
provided\
      \ by Piraeus Bank</li>\r\n    <li>Through
<strong>&nbsp;\u0391\u03A4\u039C machines&nbsp;of\
      \ </strong>the following banks: National bank of Gre ece, Alpha B ank,
ATEbank,\
      \ Probank and Hellenic Postbank,using the ATM payment code mentioned on
the\
      \ first page of the bill </li>\r\n    \r\n</ol>\r\n  \r\n
\r\n<strong><u>Important\
      \ notice:</u></strong> In case you do <strong><u>not</u></strong> proceed
to\
      \ settlement through a Wind Store, it is highly recommended to submit
through\
      \ FAX to 211 120 1100 or e-mail to CustomerCareFixed@wind.gr, a copy of
the\
      \ receipt \u03C4\u03B7\u03C2
\u03B1\u03C0\u03CC\u03B4\u03B5\u03B9\u03BE\u03B7\
      \u03C2 \u03C0\u03BB\u03B7\u03C1\u03C9\u03BC\u03AE\u03C2, with the
indication\
      \ \"Service re-activation\", referring your telephone number or the
customer\
      \ code</div><p></p>\r\n\r\nUpon settlement, Wind will proceed to service
re-activation,\
      \ while <strong>restarting your router may be
needed.</strong>\r\n<p>\r\nFor\
      \ quick service re-activation it is <strong><u>recommended to pay through
any\
      \ Wind Store</u></strong>.\r\n                            \r\n<p>Best
regards,\r\
      \n<p>Wind S.A\r\n      </li>\r\n\t</ol></div>\r\n</td>\r\n<td
width=\"9%\">&nbsp;</td>\r\
      \n</tr>\r\n\t\t</table>\r\n</body>\r\n</html>\r\n"
    code: 200
    headers:
    - - Content-Length
      - ['10873']
    - - Accept-Ranges
      - [bytes]
    - - Server
      - [Tellas HTTP Server]
    - - Last-Modified
      - ['Fri, 05 Jul 2013 12:56:04 GMT']
    - - Connection
      - [close]
    - - ETag
      - ['"1ce8b8-2a79-37aa6100"']
    - - Date
      - ['Fri, 04 Jul 2014 00:02:07 GMT']
    - - Content-Type
      - [text/html]
```

This ISP uses Etag for tracking users which try to visit the blocked content.

## Failure on mail delivery

Most ISPs have hijacked the DNS mail
exchanger record(s) of the domain name of the EEEP blacklist. A MX record
points to the appropriate mail server and specifies how email delivery
should be routed for a domain name.

In our test cases the ISPs have not returned any answer when queried for MX
record(s), deliberately or by mis-configuration for the domain entries included
in the EEEP blacklist. During email delivery an SMTP client first would query
the domain for a MX record and if that is not found it falls back to looking up
for an A record (or AAAA record if IPV6 is available) and attempt to deliver
email based on these records.

In our case the A records points to a spoofed A record pointing to a local
server or proxy of the ISP (show A records from ISPs) any email delivery would
fail and the user would realize this after hours or even days (according to the
email SMTP configuration).This implies tremendous negative impacts as well as
restricting fair markets and business regulations, i.e a user trying to
communicate with any business (all of the censored websites are businesses)
would find himself not being able to perform an email delivery.

### DNS MX records responses:

The correct MX records of the censored domain names in example:

```
; <<>> DiG 9.8.4-rpz2+rl005.12-P1 <<>> MX 770.com @8.8.8.8
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 764
;; flags: qr rd ra; QUERY: 1, ANSWER: 5, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;770.com.           IN  MX

;; ANSWER SECTION:
770.com.        2473    IN  MX  20 alt1.aspmx.l.google.com.
770.com.        2473    IN  MX  30 aspmx2.googlemail.com.
770.com.        2473    IN  MX  20 alt2.aspmx.l.google.com.
770.com.        2473    IN  MX  30 aspmx3.googlemail.com.
770.com.        2473    IN  MX  10 aspmx.l.google.com.
```

```
; <<>> DiG 9.8.4-rpz2+rl005.12-P1 <<>> MX 880.com @8.8.8.8
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 17952
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;880.com.           IN  MX

;; ANSWER SECTION:
880.com.        2753    IN  MX  0 smtp.secureserver.net.
880.com.        2753    IN  MX  10 mailstore1.secureserver.net.
```

The spoofed MX record responses of the ISPs.

#### Forthnet

```
; <<>> DiG 9.8.4-rpz2+rl005.12-P1 <<>> 770.com
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 19146
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;770.com.                       IN      MX
```

#### Ote

```
; <<>> DiG 9.8.4-rpz2+rl005.12-P1 <<>> 770.com
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 25114
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 0

;; QUESTION SECTION:
;770.com.                       IN      MX

;; AUTHORITY SECTION:
770.com.                86400   IN      SOA     localhost.
hostmaster.localhost. 2014030701 10800 3600 1814400 86400
```

#### Vodafone

```
; <<>> DiG 9.9.5-4-Debian <<>> 888.com
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 50372
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;888.com.                       IN      MX

;; AUTHORITY SECTION:
888.com.                600     IN      SOA     ns0.panafonet.gr.
root.iapetos.panafonet.gr. 2014180301 28800 7200 1209600 600
```

#### Cosmote

```
; <<>> DiG 9.9.5-4-Debian <<>> 770.com
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 64761
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;770.com.                       IN      MX

;; AUTHORITY SECTION:
770.com.                900     IN      SOA     nyma_grid_dns1.dcn.cosmote.gr.
please_set_email.absolutely.nowhere. 4 10800 3600 2419200 900
```

#### Cyta

```
; <<>> DiG 9.9.5-4-Debian <<>> 770.com
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 26529
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;770.com.                       IN      MX

;; AUTHORITY SECTION:
770.com.                86400   IN      SOA     770.com. root.770.com. 42 10800
900 604800 86400
```

#### Wind mobile

```
; <<>> DiG 9.8.4-rpz2+rl005.12-P1 <<>> 770.com
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 8803
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 0

;; QUESTION SECTION:
;770.com.                       IN      MX

;; AUTHORITY SECTION:
770.com.                86400   IN      SOA     localhost. root.localhost.
2013091901 14400 7200 604800 86400
```

### DNS A records resposnes

The correct A records of the censored domain names in example:

```
; <<>> DiG 9.8.4-rpz2+rl005.12-P1 <<>> A 770.com @8.8.8.8
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 47376
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;770.com.           IN  A

;; ANSWER SECTION:
770.com.        285 IN  A   69.93.79.125
```

```
; <<>> DiG 9.8.4-rpz2+rl005.12-P1 <<>> A box24casino.com @8.8.8.8
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 61390
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;box24casino.com.       IN  A

;; ANSWER SECTION:
box24casino.com.    899 IN  A   46.28.204.122
```

```
; <<>> DiG 9.8.4-rpz2+rl005.12-P1 <<>> A acelivecasino.com @8.8.8.8
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 64017
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;acelivecasino.com.     IN  A

;; ANSWER SECTION:
acelivecasino.com.  1799    IN  A   198.135.249.123
```

The spoofed A records entries of the ISPs:

#### Forthnet

```
; <<>> DiG 9.8.4-rpz2+rl005.12-P1 <<>> A 770.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 2445
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;770.com.                       IN      A

;; ANSWER SECTION:
770.com.                3600    IN      A       62.1.46.55
```

#### Ote

```
; <<>> DiG 9.8.4-rpz2+rl005.12-P1 <<>> A box24casino.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 60841
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;box24casino.com.               IN      A

;; ANSWER SECTION:
box24casino.com.        86191   IN      A       83.235.64.20
```

#### Cyta

```
; <<>> DiG 9.9.5-4-Debian <<>> 770.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 59438
;; flags: qr aa rd ad; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
;; WARNING: recursion requested but not available

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;770.com.                       IN      A

;; ADDITIONAL SECTION:
770.com.                86400   IN      A       78.87.2.91
```

#### Wind

```
; <<>> DiG 9.8.4-rpz2+rl005.12-P1 <<>> A acelivecasino.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 21679
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;acelivecasino.com.             IN      A

;; ANSWER SECTION:
acelivecasino.com.      85963   IN      A       62.169.194.8
```

# Corollary

Throughout our technical report we highlighted flaws in the implementation of
betting websites' censorship. Nevertheless, we do not seek for a properly
implemented censorship of any kind. Instead, our intention is to make visible
all those problematics that arise when censorship is invoked as method to
approach a social or public issue.

The problem with poorly implemented censorship, is censorship per se.

ISPs in Greece haven't provided any kind of notification to their customers to
inform them how the blocking took place, why this happened and if they can
opt-out from the service. After all, they are paying for the full service.

Lack of transparency on behalf of the providers, permits them to block and
censor arbitrary internet destinations according to their needs, thus following
a blocking-at-will strategy. Internet destinations may be accessible or not,
while users have no reasoning about it. That would lead to deliberate abuse of
citizens' accessibility and view of the internet.

## Censorship as a social control method.

Censorship is introduced as a top-down method to solve pathogenic social
behaviours or phenomena. For example a state that censors a blog containing
caricatures of god with the pretense of confronting blasphemy. Or a state
that tries to protect public income by censoring betting companies' websites
that do not intend to pay taxes.

The problem with a top-down method is that frequently the ideas, the needs,
the culture of those on top -who actually take the decisions of what needs
to be censored- present deviations from the ideas and needs of the social
groups affected by the censorship.

Additionally pathogenic social behaviours appear to majorly differ between
societies in different places of our planet or in different time points of
human evolution. For example, in some epoch owning other human beings as slaves
was socially acceptable.

But, as a case study, we assume there is a commonly acknowledged social pathology.
Even then, censorship consists of imposition rather than education. Imposition
will result in fearful humans who do not understand why some specific behaviour
is banned, leading to more complex and problematic phenomena. On the other side,
educating individuals and social groups based on consensus and reasoning results
in free and healthy social relations.

We should also notice that censorship is bound to economic interests. Censorship
of betting websites by EEEP should not treated independently of the monopoly of
"ΟΠΑΠ" betting company that prevails in Greek territory. Spread of the internet led to
a conflict of interest between "ΟΠΑΠ" which holds physical betting kiosks and the
globalized market of the internet.

Censorship serving certain economic interests rises as a tool of manipulation of
users' choices, manipulation of the market and suggests corruption is part of the
public governance.

## Censorship as status quo

If online censorship is widespread and accepted with little opposition as a way
to implement a broad range of public policy issues, it becomes far harder to
argue for Internet freedom and net neutrality elsewhere. Governments and
companies around the world use the same technologies to restrict access to
online content and offer the same arguments about taste, decency and citizens
safety [ORG].

In most cases, as long as censorship is introduced -with some legitimate or not
excuse- societies tend to accept the fact that censorship can exist and is justified.
Any debate will be probably help over what is just to censor and what is not, and
rarely censorship per se will be questioned.

This strategy is encountered in other politics sectors too, such as fees in public
transport or health insurance, issues that are of tremendous importance for our
societies and are a point of conflict in many countries worldwide.

As long as censorship is established, the set of entities that are being subjected
to censorship tends to grow. More and more censorship will be used as a method to
resolve problems or rather to enforce a certain type of approach to the problem.

## Censorship's side-effects

Censorship of some betting sites in Greece was implemented as a way to forbid
residents of Greece to bet on websites that do not intend to pay taxes i.e. the
goal of the censors appears to be to prevent players from betting.

Censorship implementations includes some
side-effects: users are not only forbidden to play on these websites, but they
are also not being able to communicate (via email) with these companies. Censorship
is thus not limited to a specific problem (tax evasion) but it's totally destroying
user's experience and communication.

Disrupting users' communication with a certain entity can have various social implications
or economic impact. Suppose a Greek resident would like to work as web developer to one
of the blocked websites. Communicating with the owner company would be impossible.

# OONI data per ISP

## Raw measurement data per ISP

* Forthnet:
  * [HTTP Requests test report](https://measurements.ooni.torproject.org/2014-07-30/20140730T221712Z-GR-AS0-http_requests-no_report_id-0.1.0-probe.json)
  * [HTTP Requests test report](https://measurements.ooni.torproject.org/2014-06-23/20140623T125708Z-GR-AS1241-http_requests-no_report_id-0.1.0-probe.json)
  * [DNS Consistency test report](https://measurements.ooni.torproject.org/2014-06-25/20140625T222008Z-GR-AS1241-dns_consistency-no_report_id-0.1.0-probe.json)
* Ote:
  * [DNS Consistency test report](https://measurements.ooni.torproject.org/2014-06-26/20140626T105437Z-GR-AS6799-dns_consistency-no_report_id-0.1.0-probe.json)
  * [DNS Consistency test report](https://measurements.ooni.torproject.org/2014-06-26/20140626T130619Z-GR-AS6799-dns_consistency-no_report_id-0.1.0-probe.json)
  * [HTTP Requests test report](https://measurements.ooni.torproject.org/2014-06-25/20140625T210158Z-GR-AS0-http_requests-no_report_id-0.1.0-probe.json)
  * [HTTP Requests test report](https://measurements.ooni.torproject.org/2014-06-25/20140625T211147Z-GR-AS0-http_requests-no_report_id-0.1.0-probe.json)
* Cyta:
  * [HTTP Requests test report](https://measurements.ooni.torproject.org/2014-06-23/20140623T165118Z-GR-AS0-http_requests-no_report_id-0.1.0-probe.json)
  * [HTTP Requests test report](https://measurements.ooni.torproject.org/2014-07-30/20140730T224459Z-GR-AS0-http_requests-no_report_id-0.1.0-probe.json)
* Hol:
  * [HTTP Requests test report](https://measurements.ooni.torproject.org/2014-07-24/20140724T164440Z-GR-AS3329-http_requests-no_report_id-0.1.0-probe.json)
  * [HTTP Requests test report](https://measurements.ooni.torproject.org/2014-07-24/20140724T160923Z-GR-AS3329-http_requests-no_report_id-0.1.0-probe.json)
  * [DNS Consistency test report](https://measurements.ooni.torproject.org/2014-07-24/20140724T161705Z-GR-AS3329-dns_consistency-no_report_id-0.1.0-probe.json)
* Cosmote:
  * [HTTP Requests test report](https://measurements.ooni.torproject.org/2014-07-03/20140703T161600Z-GR-AS0-http_requests-no_report_id-0.1.0-probe.json)
* Vodafone:
  * [HTTP Requests test report](https://measurements.ooni.torproject.org/2014-07-03/20140703T083044Z-ZZ-AS0-http_requests-no_report_id-0.1.0-probe.json)
* Wind mobile:
  * [HTTP Requests test report](https://measurements.ooni.torproject.org/2014-07-04/20140704T025958Z-GR-AS0-http_requests-no_report_id-0.1.0-probe.json)
  * [HTTP Requests test report](https://measurements.ooni.torproject.org/2014-07-30/20140730T200818Z-GR-AS15617-http_requests-no_report_id-0.1.0-probe.json)

<!-- # References -->

[ORG]: https://www.openrightsgroup.org/ourwork/reports/mobile-internet-censorship:-whats-happening-and-what-we-can-do-about-it
[fekA180_articel52]:
http://nomoi.info/%CE%A6%CE%95%CE%9A-%CE%91-180-2011-%CF%83%CE%B5%CE%BB-44.html
[EEEP_blacklist_PDF]:
http://www.gamingcommission.gov.gr/images/Anakoinoseis/BlackList_EEEP_%2021022014.pdf
[HTTP Requests test]:
https://gitweb.torproject.org/ooni-probe.git/tree/ooni/nettests/blocking/http_requests.py
[DNS consistency test]:
https://gitweb.torproject.org/ooni-probe.git/tree/ooni/nettests/blocking/dns_consistency.py
[DNS hijacking]: https://en.wikipedia.org/wiki/DNS_hijacking
[Deep Packet Inspection]: https://en.wikipedia.org/wiki/Deep_packet_inspection
