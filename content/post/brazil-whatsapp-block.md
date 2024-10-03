---
title: "OONI Data Reveals How WhatsApp Was Blocked (Again) in Brazil"
author: "Vasilis Ververis, Maria Xynou, Will Scott"
date: "2016-05-06"
tags: ["brazil", "whatsapp", "country-br", "theme-im"]
categories: ["report"]
aliases:
  - /whatsapp-blocked-in-brazil-again
---

**Country:** Brazil

**Probed ISPs:** Tim mobile (AS 26615), Oi landline (AS 7738)

**Censorship method:** DNS Hijacking

**OONI tests:** HTTP Requests, DNS Consistency

**Measurement period:** 2016-05-02 - 2016-05-03

----------------------------------------------------------------------------------------

**19:10 UTC Saturday, 7 May 2016** Update: Add OONI Explorer measurements links

Ever since [WhatsApp implemented end-to-end
encryption](https://www.whatsapp.com/security/) to protect the privacy and
security of its 1 billion users worldwide, several cases of censorship have
been ordered by governments who are frustrated with the fact that they can no
longer access users' private communications. Having implemented end-to-end
encryption with the Signal protocol, WhatsApp cannot decrypt its users' data,
even if it wanted to - which is precisely what makes it secure.

Last December, a judge in Brazil backfired to WhatsApp's non-compliance in a
criminal investigation by [ordering the blocking of WhatsApp for 48 hours]
(https://www.theguardian.com/technology/2015/dec/17/whatsapp-blocked-brazil-48-hours-facebook).
Similarly, early this week another Brazilian judge
[ordered the blocking of WhatsApp]
(https://www.theguardian.com/technology/2016/may/02/brazil-whatsapp-block-72-hours)
but this time, for 72 hours - as a form of retribution for the company's
failure to hand over data as part of an ongoing drug trafficking
investigation. Both orders for censorship were lifted in less than 24 hours
following a public uproar, since [more than 100 million individuals]
(http://www.theglobeandmail.com/technology/tech-news/whatsapp-comes-down-how-brazilians-are-coping-without-their-social-mediafixes/article27799710/)
in Brazil (91% of mobile users) depend on WhatsApp for their daily
communications.

According to Lucas Teixeira, Chief Technologist at [Coding Rights]
(https://www.codingrights.org/):

> "People reacted to the blocking of WhatsApp with a mix of shock, revolt and
> mockery, reflecting the fact that Whatsapp is used by pretty much everyone
> in big and small cities - and even in the countryside - to communicate with
> each other, replacing SMS and phone calls almost 100%. The company's
> zero-rating partnerships with telcos has also helped a lot. Mobile Internet
> plans with data caps but "free Whatsapp" are common. Marco Civil da
> Internet explicitly forbids violations to net neutrality, but the legality
> or not of zero rating will be set in its ongoing regulation process. As for
> the legality of WhatsApp's blocking, we can't be sure because the
> litigation is secret, but it has been reversed in court."

Following the latest reports of WhatsApp being blocked in Brazil, the
[Open Observatory of Network Interference (OONI)](https://ooni.org/)
ran tests locally in Brazil to detect the technical details of how censorship
was implemented. This blog post includes a publication of our measurements,
revealing that Brazilian ISPs blocked WhatsApp's website through DNS hijacking.

# Our findings

Two types of [OONI tests](https://github.com/TheTorProject/ooni-spec) were run
in Brazil to identify whether and how WhatsApp was blocked:

* [DNS-consistency tests]
(https://github.com/TheTorProject/ooni-probe/blob/master/docs/source/tests/dnsconsistency.rst)
* [HTTP-request tests]
(https://github.com/TheTorProject/ooni-probe/blob/master/docs/source/tests/http_requests.rst)

The first test is designed to compare the DNS query results from a DNS resolver
which is considered to be reliable with one that it tested for tampering. The
second test tries to detect online censorship based on a comparison of HTTP
requests over [Tor](https://www.torproject.org/) and over the network of the
user. By running these two types of tests on **web.whatsapp.com** and
**www.whatsapp.com**, **DNS hijacking** was identified as a method for blocking
WhatsApp, as illustrated below:

**DNS-consistency tests**

```
###########################################
# OONI Probe Report for dns_consistency (0.7.0)
# Tue May  3 06:20:40 2016
###########################################
probe_asn: AS7738
probe_cc: BR
test_helpers: {backend: '213.138.109.232:57004'}
test_name: dns_consistency
test_start_time: '2016-05-03 04:20:40'
test_version: 0.7.0
---
control_resolver: 213.138.109.232:57004
errors: {192.168.122.1: dns_lookup_error}
failures: [192.168.122.1]
inconsistent: []
input: www.whatsapp.com
measurement_start_time: '2016-05-03 04:20:43'
queries:
- answers:
  - {answer_type: A, ipv4: 184.173.147.39}
  - {answer_type: A, ipv4: 184.173.147.38}
  - {answer_type: A, ipv4: 192.155.212.203}
  - {answer_type: A, ipv4: 192.155.212.202}
  failure: null
  hostname: www.whatsapp.com
  query_type: A
  resolver_hostname: 213.138.109.232
  resolver_port: 57004
- answers: []
  failure: deferred_timeout_error
  hostname: www.whatsapp.com
  query_type: A
  resolver_hostname: 192.168.122.1
  resolver_port: 53
successful: []
test_resolvers: [192.168.122.1]
test_runtime: 1.2021667957305908
...
control_resolver: 213.138.109.232:57004
errors: {192.168.122.1: dns_lookup_error}
failures: [192.168.122.1]
inconsistent: []
input: web.whatsapp.com
measurement_start_time: '2016-05-03 04:20:43'
queries:
- answers:
  - {answer_type: CNAME, hostname: mmx-ds.cdn.whatsapp.net}
  - {answer_type: A, ipv4: 179.60.192.51}
  failure: null
  hostname: web.whatsapp.com
  query_type: A
  resolver_hostname: 213.138.109.232
  resolver_port: 57004
- answers: []
  failure: deferred_timeout_error
  hostname: web.whatsapp.com
  query_type: A
  resolver_hostname: 192.168.122.1
  resolver_port: 53
successful: []
test_resolvers: [192.168.122.1]
test_runtime: 1.223766803741455
```

```
###########################################
# OONI Probe Report for dns_consistency (0.7.0)
# Tue May  3 01:39:37 2016
###########################################
probe_asn: AS26615
probe_cc: BR
software_name: ooniprobe
software_version: 1.4.2
test_helpers: {backend: '213.138.109.232:57004'}
test_name: dns_consistency
test_start_time: '2016-05-02 23:39:37'
test_version: 0.7.0
---
control_resolver: 213.138.109.232:57004
errors: {192.168.122.1: no_answer}
failures: [192.168.122.1]
input: www.whatsapp.com
measurement_start_time: '2016-05-02 23:39:40'
queries:
- answers:
  - {answer_type: A, ipv4: 169.44.84.178}
  - {answer_type: A, ipv4: 184.173.147.39}
  - {answer_type: A, ipv4: 184.173.147.38}
  - {answer_type: A, ipv4: 169.44.82.102}
  - {answer_type: A, ipv4: 192.155.212.202}
  - {answer_type: A, ipv4: 192.155.212.203}
  failure: null
  hostname: www.whatsapp.com
  query_type: A
  resolver_hostname: 213.138.109.232
  resolver_port: 57004
- answers: []
  failure: null
  hostname: www.whatsapp.com
  query_type: A
  resolver_hostname: 192.168.122.1
  resolver_port: 53
successful: []
test_resolvers: [192.168.122.1]
test_runtime: 0.47959399223327637
---
control_resolver: 213.138.109.232:57004
errors: {192.168.122.1: no_answer}
failures: [192.168.122.1]
input: web.whatsapp.com
measurement_start_time: '2016-05-02 23:39:40'
queries:
- answers:
  - {answer_type: CNAME, hostname: mmx-ds.cdn.whatsapp.net}
  - {answer_type: A, ipv4: 179.60.192.51}
  failure: null
  hostname: web.whatsapp.com
  query_type: A
  resolver_hostname: 213.138.109.232
  resolver_port: 57004
- answers: []
  failure: null
  hostname: web.whatsapp.com
  query_type: A
  resolver_hostname: 192.168.122.1
  resolver_port: 53
successful: []
test_resolvers: [192.168.122.1]
test_runtime: 0.03604292869567871
```

```
###########################################
# OONI Probe Report for dns_consistency (0.7.0)
# Tue May  3 15:07:07 2016
###########################################
---
annotations: null
data_format_version: 0.2.0
input_hashes: [db9176124032c0dd1d974fa52ee194e8304658ba2f32f5f07911abfb03521ff0]
options: [-f, whatsappurl.list]
probe_asn: AS7738
probe_cc: BR
probe_city: null
probe_ip: 127.0.0.1
report_id: null
software_name: ooniprobe
software_version: 1.4.2
test_helpers: {backend: '213.138.109.232:57004'}
test_name: dns_consistency
test_start_time: '2016-05-03 13:07:07'
test_version: 0.7.0
...
---
control_resolver: 213.138.109.232:57004
errors: {192.168.122.1: dns_lookup_error}
failures: [192.168.122.1]
inconsistent: []
input: www.whatsapp.com
measurement_start_time: '2016-05-03 13:07:12'
queries:
- answers:
  - {answer_type: A, ipv4: 192.155.212.202}
  - {answer_type: A, ipv4: 192.155.212.203}
  - {answer_type: A, ipv4: 184.173.147.38}
  - {answer_type: A, ipv4: 184.173.147.39}
  - {answer_type: A, ipv4: 169.44.84.178}
  - {answer_type: A, ipv4: 169.44.82.102}
  failure: null
  hostname: www.whatsapp.com
  query_type: A
  resolver_hostname: 213.138.109.232
  resolver_port: 57004
- answers: []
  failure: deferred_timeout_error
  hostname: www.whatsapp.com
  query_type: A
  resolver_hostname: 192.168.122.1
  resolver_port: 53
successful: []
test_resolvers: [192.168.122.1]
test_runtime: 1.296454906463623
...
---
```

**HTTP-request test**

```
###########################################
# OONI Probe Report for http_requests (0.2.5)
# Mon May  2 23:17:02 2016
###########################################
probe_asn: AS26615
probe_cc: BR
software_name: ooniprobe
software_version: 1.4.2
test_helpers: {}
test_name: http_requests
test_start_time: '2016-05-02 21:17:02'
test_version: 0.2.5
...
agent: agent
body_length_match: null
body_proportion: null
control_cloudflare: null
control_failure: null
experiment_failure: dns_lookup_error
factor: 0.8
headers_diff: null
headers_match: null
input: https://www.whatsapp.com
measurement_start_time: '2016-05-02 21:17:07'
requests:
- failure: dns_lookup_error
  request:
    body: null
    headers: {User-Agent: 'Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.2)
        Gecko/20100115 Firefox/3.6'}
    method: GET
    tor: {exit_ip: null, exit_name: null, is_tor: false}
    url: https://www.whatsapp.com
  response: null
```

## Circumventing censorship

The blocking of WhatsApp's website can be circumvented through the use of
[Tor](https://www.torproject.org/). In cases of DNS hijacking, users might even
be able to access blocked websites by merely [changing their DNS resolver]
(https://developers.google.com/speed/public-dns/docs/using#google_public_dns_ip_addresses)
(though this is not something that always works).

If WhatsApp (or other IM applications) is blocked again, Android users in
Brazil (and elsewhere) can try circumventing censorship by using the
[**VPN mode of Orbot**](https://www.torproject.org/docs/android.html.en)
which enables all apps on their device to run through the [Tor network]
(https://www.torproject.org/). It's important though to note that Orbot's VPN
feature should *not* be used for anonymity, but only for bypassing censorship.

## Limitations to our study

Currently [OONI software tests](https://github.com/TheTorProject/ooni-spec) are
*not* specifically designed to test instant messaging (IM) applications (such
as WhatsApp), but websites. Our measurements are therefore limited to the
testing of WhatsApp's *website* which was found to be blocked based on DNS
hijacking, and do not include the testing of the WhatsApp application. Over the
next year though we plan to develop *new* OONI tests which will specifically be
designed for testing IM applications for censorship.

Until then, the blocking of WhatsApp's website and web app can be tested
through the following:

1. [Install ooniprobe](https://github.com/TheTorProject/ooni-probe#installation)
2. Download the [whatsapp deck]
(https://raw.githubusercontent.com/TheTorProject/ooni-probe/0b4cea0ad99696f664cd3083df929d93f88fda43/data/decks/whatsapp.deck)
(eg. `wget https://raw.githubusercontent.com/TheTorProject/ooni-probe/0b4cea0ad99696f664cd3083df929d93f88fda43/data/decks/whatsapp.deck`)
3. Run test deck `ooniprobe -i whatsapp.deck`

# OONI Explorer report links

## HTTP Requests measurements

- [URL: http://web.whatsapp.com May 2, 2016 9:17:02 PM, AS 26615](https://explorer.ooni.org/measurement/20160502T211641Z_AS26615_S0P6z1jAn0ToeMtK4xvjJUKlSOw9ENcipv9pUfrVd3yPmuD7ek?input=http:%2F%2Fweb.whatsapp.com)
- [URL: http://web.whatsapp.com May 2, 2016 9:17:02 PM, AS 26615](https://explorer.ooni.org/measurement/20160502T211641Z_AS26615_S0P6z1jAn0ToeMtK4xvjJUKlSOw9ENcipv9pUfrVd3yPmuD7ek?input=https:%2F%2Fweb.whatsapp.com)
- [URL: http://www.whatsapp.com May 2, 2016 9:17:02 PM, AS 26615](https://explorer.ooni.org/measurement/20160502T211641Z_AS26615_S0P6z1jAn0ToeMtK4xvjJUKlSOw9ENcipv9pUfrVd3yPmuD7ek?input=http:%2F%2Fwww.whatsapp.com)
- [URL: https://www.whatsapp.com May 2, 2016 9:17:02 PM, AS 26615](https://explorer.ooni.org/measurement/20160502T211641Z_AS26615_S0P6z1jAn0ToeMtK4xvjJUKlSOw9ENcipv9pUfrVd3yPmuD7ek?input=https:%2F%2Fwww.whatsapp.com)
- [URL: http://www.whatsapp.com/cidr.txt May 2, 2016 11:39:18 PM, AS 26615](https://explorer.ooni.org/measurement/20160504T214210Z_AS26615_LzBigYkP8oN1aAnI1mnFFDwZPAbUcTu2ZN6uSwosZuW8HVm7br?input=http:%2F%2Fwww.whatsapp.com%2Fcidr.txt)
- [URL: https://www.whatsapp.com/cidr.txt May 2, 2016 9:17:02 PM, AS 26615](https://explorer.ooni.org/measurement/20160502T211641Z_AS26615_S0P6z1jAn0ToeMtK4xvjJUKlSOw9ENcipv9pUfrVd3yPmuD7ek?input=https:%2F%2Fwww.whatsapp.com%2Fcidr.txt)
- [URL: http://web.whatsapp.com May 3, 2016 4:17:57 AM, AS 7738](https://explorer.ooni.org/measurement/20160504T214555Z_AS7738_bCjuASU2Bx2qP7XWIarsRXUTHCRUO7AYaWgDOQowqyUgF8hEGA?input=http:%2F%2Fweb.whatsapp.com)
- [URL: https://web.whatsapp.com May 3, 2016 4:17:57 AM, AS 7738](https://explorer.ooni.org/measurement/20160504T214555Z_AS7738_bCjuASU2Bx2qP7XWIarsRXUTHCRUO7AYaWgDOQowqyUgF8hEGA?input=https:%2F%2Fweb.whatsapp.com)
- [URL: http://www.whatsapp.com May 3, 2016 4:17:57 AM, AS 7738](https://explorer.ooni.org/measurement/20160504T214555Z_AS7738_bCjuASU2Bx2qP7XWIarsRXUTHCRUO7AYaWgDOQowqyUgF8hEGA?input=http:%2F%2Fwww.whatsapp.com)
- [URL: https://www.whatsapp.com May 3, 2016 4:17:57 AM, AS 7738](https://explorer.ooni.org/measurement/20160504T214555Z_AS7738_bCjuASU2Bx2qP7XWIarsRXUTHCRUO7AYaWgDOQowqyUgF8hEGA?input=https:%2F%2Fwww.whatsapp.com)
- [URL: http://www.whatsapp.com/cidr.txt May 3, 2016 4:17:57 AM, AS 7738](https://explorer.ooni.org/measurement/20160503T041735Z_AS7738_N5LWvuq8MtDoAP7r93EWmqurxi6pZ9pzpBsbZhXZR8VF4R484M?input=http:%2F%2Fwww.whatsapp.com%2Fcidr.txt)
- [URL: https://www.whatsapp.com/cidr.txt May 3, 2016 4:17:57 AM, AS 7738](https://explorer.ooni.org/measurement/20160503T041735Z_AS7738_N5LWvuq8MtDoAP7r93EWmqurxi6pZ9pzpBsbZhXZR8VF4R484M?input=https:%2F%2Fwww.whatsapp.com%2Fcidr.txt)

## DNS Consistency measurements

- [Website: web.whatsapp.com May 2, 2016 11:39:37 PM, AS 26615](https://explorer.ooni.org/measurement/20160502T233914Z_AS26615_MFMGaqdNJpa0ao1EZjVRVRkQIngry7DXMHE44SANRBBWMNB53e?input=web.whatsapp.com)
- [Website: www.whatsapp.com May 2, 2016 11:39:37 PM, AS 26615](https://explorer.ooni.org/measurement/20160502T233914Z_AS26615_MFMGaqdNJpa0ao1EZjVRVRkQIngry7DXMHE44SANRBBWMNB53e?input=www.whatsapp.com)
- [Website: web.whatsapp.com May 3, 2016 1:07:07 PM, AS 7738](https://explorer.ooni.org/measurement/20160504T214811Z_AS7738_G7r7jVDGUQffeea959x5m7Fr0e4EsM5ppD3vl9fWhuM3uqkyIA?input=web.whatsapp.com)
- [Website: www.whatsapp.com May 3, 2016 4:20:40 AM, AS 7738](https://explorer.ooni.org/measurement/20160503T042017Z_AS7738_OZ89SZlnKKhSFhXOGMmsFzcZ9ctLL8NZgJeEg6llwDV92JKIf8?input=www.whatsapp.com)
