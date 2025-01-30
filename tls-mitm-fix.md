### **TLS Man-In-The-Middle (MITM) attacks**

Kazakhstan has been known to use at least 4 different root CAs, which we summarize in the following table:

| Common Name                                     | Not Valid Before         | Not Valid After          | Links                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------- | ------------------------ | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| НЕГІЗГІ КУӘЛАНДЫРУШЫ ОРТАЛЫҚ                    | Jul 27 04:47:00 2015 GMT | Jul 27 04:47:00 2020 GMT | [mozilla.dev.security.policy thread](https://groups.google.com/g/mozilla.dev.security.policy/c/wnuKAhACo3E) • [mozilla bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1229827)                                                                                                                                                                                                         |
| Qaznet Trust Network                            | Feb 2 05:41:00 2016 GMT  | Feb 2 05:41:00 2046 GMT  | [net4people bbs thread](https://github.com/net4people/bbs/issues/6) • [censoredplanet report](https://censoredplanet.org/kazakhstan) • [archive.org cert](https://archive.org/details/qazca-ca-certificate) • [mozilla bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1567114) • [mozilla blog post](https://blog.mozilla.org/security/2019/08/21/protecting-our-users-in-kazakhstan/) |
| Information Security Certification Authority CA | Feb 28 04:08:03 2020 GMT | Feb 28 04:08:03 2040 GMT | [net4people bbs thread](https://github.com/net4people/bbs/issues/56) • [censoredplanet post](https://censoredplanet.org/kazakhstan/live) • [archive.org cert](https://archive.org/details/isca-ca-certificate) • [mozilla bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1680927) • [mozilla blog post](https://blog.mozilla.org/netpolicy/2020/12/18/kazakhstan-root-2020/)           |
| Information Security Certification Authority    | Feb 28 06:16:40 2020 GMT | Feb 28 06:16:40 2050 GMT | [net4people bbs thread](https://github.com/net4people/bbs/issues/339) • [ntc.party thread](https://ntc.party/t/https-mitm-in-kazakhstan-starting-2024-02-07/7405) • [crt.sh cert](https://crt.sh/?d=11106964945) • [mozilla bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1864724)                                                                                                    |

As part of our analysis, we found [evidence in OONI data](https://explorer.ooni.org/m/20210914080702.850310_KZ_webconnectivity_88ece394d9a0fcdc) that Kazakhstan’s government mandated root certificate authority was being used to implement TLS man-in-the-middle (MITM) attacks targeting a set of domains.

Specifically, OONI data from Kazakhstan shows that the following domains were targeted by TLS MITM attacks:

```
360tv.ru
astrakhan.sm.news
compromat.ru
cont.ws
knews.kg
kz.tsargrad.tv
regnum.ru
rutracker.org
sproot.it
stanradar.com
ukraina.ru
www.for.kg
www.pinterest.com
xakep.ru
```

We are able to conclude that this is indeed a TLS MITM and not just DNS tampering leading to a page which contains an invalid certificate, since we were able to establish that the IP returned as part of DNS resolution is DNS consistent (in comparison to the IP returned from control measurements) .

In previous years, TLS MITM attacks in Kazakhstan were reported in [news outlets](https://www.zdnet.com/article/kazakhstan-government-is-intercepting-https-traffic-in-its-capital/) and at the time, Mozilla took actions to explicitly [block that particular root CA](https://blog.mozilla.org/netpolicy/2020/12/18/kazakhstan-root-2020/) from working in their browser.

However, it’s worth noting that we found a **different and new root CA** than that which was [previously reported by Censored Planet in 2019](https://censoredplanet.org/assets/Kazakhstan.pdf) and which, at the time, was [added to the OneCRL list for revoking untrusted root CAs](https://bugzilla.mozilla.org/show_bug.cgi?id=1567114).

At least [7 more root CAs with common name Information Security Certification Authority](https://crt.sh/?q=Information+Security+Certification+Authority) exist:

- https://crt.sh/?id=4833570779
- https://crt.sh/?id=4739909320
- https://crt.sh/?id=4633597326
- https://crt.sh/?id=3967758934
- https://crt.sh/?id=12281942153
- https://crt.sh/?id=11106964945
- https://crt.sh/?id=14682080594

In order to identify which was used to sign the intermediates seen in OONI
measurements we ran [this script]().

In OONI data collected from Kazakhstan between 2021 to 2024, we found **7 distinct intermediate certificates** being used to carry out the TLS MITM. Each of these certificates has a relatively short duration period of validity of 75 days. This means that in order for the certificate chain to continue functioning properly, they would have to re-emit a new intermediate from their root CA at least every 74 days.

The following list summarizes the intermediates seen in OONI measurements and the relevant Root CA used to sign them:

https://explorer.ooni.org/m/20210808015758.022737_KZ_webconnectivity_3b9213f9ee4f2d06

```
Fingerprint: c0e15a945595372030f0d45938ebb6081bb39fb5
Serial: 542829070264121061358597976201233251364726286334
Not valid before: 2021-06-18 12:54:34
Not valid after: 2021-09-01 12:54:34
Issuer: C=KZ,O=ISCA,CN=Information Security Certification Authority
Root CA Cert: https://crt.sh/?d=4739909320
Root CA Fingerprint: fabda72fa1f620c160420a496194b61f82a01b4a
Root CA Serial: 212762436239719553268722926518842178639864163027
Root CA Not valid before: 2020-02-28 06:46:02
Root CA Not valid after: 2040-02-28 06:46:02
```

https://explorer.ooni.org/m/20210914080702.850310_KZ_webconnectivity_88ece394d9a0fcdc

```
Fingerprint: 90f9aa29195ecbfbf2c943ab1d5102f3ec84a68c
Serial: 600636309019776433832878055409971857043873967144
Not valid before: 2021-08-19 12:39:14
Not valid after: 2021-11-02 12:39:14
Issuer: C=KZ,O=ISCA,CN=Information Security Certification Authority
Root CA Unknown
```

https://explorer.ooni.org/m/20231016130600.035487_KZ_webconnectivity_4a5c38a0f8bea740

```
Fingerprint: 8634ecaefb5d02463d2a9ce42178001154752561
Serial: 293697198316360729812453916520636458008892047728
Not valid before: 2023-08-09 06:33:35
Not valid after: 2023-10-23 06:33:35
Issuer: C=KZ,O=ISCA,CN=Information Security Certification Authority
Root CA Cert: https://crt.sh/?d=11106964945
Root CA Fingerprint: ea5d093c312e1a516937e153c06c2d82127b47d6
Root CA Serial: 394571478723635638549382697435194886177070445336
Root CA Not valid before: 2020-02-28 05:39:51
Root CA Not valid after: 2050-02-28 05:39:51
```

https://explorer.ooni.org/m/20231118140134.149173_KZ_webconnectivity_a93dfc958ab79ec2

```
Fingerprint: cb074692a22395fa615a89a86d877c9abc034867
Serial: 203432698505598047390349427507107109607746033885
Not valid before: 2023-11-02 09:03:07
Not valid after: 2024-01-16 09:03:07
Issuer: C=KZ,O=ISCA,CN=Information Security Certification Authority
Root CA Cert: https://crt.sh/?d=11106964945
Root CA Fingerprint: ea5d093c312e1a516937e153c06c2d82127b47d6
Root CA Serial: 394571478723635638549382697435194886177070445336
Root CA Not valid before: 2020-02-28 05:39:51
Root CA Not valid after: 2050-02-28 05:39:51
```

https://explorer.ooni.org/m/20240317052821.044604_KZ_webconnectivity_3752cbf5dac624e9

```
Fingerprint: dfcd9dcb64edd86e333ad6247e2deda7dcf10ebd
Serial: 621829445753241691614495298860851878603068917060
Not valid before: 2023-11-28 11:24:53
Not valid after: 2024-02-11 11:24:53
Issuer: C=KZ,O=ISCA,CN=Information Security Certification Authority
Root CA Cert: https://crt.sh/?d=12281942153
Root CA Fingerprint: 1375ebdcf56359aae0423e861ac8fc6231511ce6
Root CA Serial: 285540385527369649610289916863209926796774245522
Root CA Not valid before: 2020-02-28 06:16:40
Root CA Not valid after: 2050-02-28 06:16:40
```

https://explorer.ooni.org/m/20240418133819.497733_KZ_webconnectivity_bd3a0d69cd5e8aca

```
Fingerprint: 5d54c6afa4fd4685359875595565ae9f8caab914
Serial: 499633659418679795571951434192241531137344178316
Not valid before: 2024-03-20 05:50:15
Not valid after: 2024-06-03 05:50:15
Issuer: C=KZ,O=ISCA,CN=Information Security Certification Authority
Root CA Unknown
```

https://explorer.ooni.org/m/20240901151413.637888_KZ_webconnectivity_c351db70f739197a

```
Fingerprint: 76e9f2a52c149586be8f389d8a71ac41d3f423d1
Serial: 414124517712191942334357388114692622770498879745
Not valid before: 2024-08-23 10:46:59
Not valid after: 2024-11-06 10:46:59
Issuer: C=KZ,O=ISCA,CN=Information Security Certification Authority
Root CA Cert: https://crt.sh/?d=14682080594
Root CA Fingerprint: bfd7f531eca8e3d65b4738167b160b7a95a8d894
Root CA Serial: 618155106210402083740770170610017403616935751280
Root CA Not valid before: 2020-02-28 07:04:41
Root CA Not valid after: 2050-02-28 07:04:41
```

What’s quite surprising from the above time ranges is that it’s quite apparent that there is a gap in between the renewal of the certificates. Based on OONI data, we were able to confirm that even if internet users in Kazakhstan were to have installed the root certificate, as directed by the government, they would still have received certificate validation errors between 2nd November 2011 and 9th August 2023. Shorter windows of invalidity for the certificate can be observed between 23rd October 2023 and 28th November 2023, and then between 11th February 2024 and 20th March 2024.

What can be seen from the chart below is that these intermediate certificates were spotted in the wild and **being used to perform MITM even during periods of certificate invalidity**.

{{<img src="images/image13.png" title="Intermediate Certificates" alt="Intermediate Certificates">}}

This suggests that if users were to attempt to visit the sites affected by the MITM and had installed the root CA, they would still be getting an error.

It’s unclear to us why they went through the hassle of telling users to install the root CA, but then failed to keep the intermediates up to date in order to effectively carry out a MITM attack, even when users were fully compliant with government orders. We can only speculate that this is either due to some misconfiguration in the periodic renewal task (although for the first certificate we see the time window of invalidity is almost 2 years), or that for 3 times they forgot to renew their certificates on time.

Based on OONI data, we were able to confirm that this root CA was being used to sign intermediate certificates that were then being used to **carry out MITM attacks targeting users in Kazakhstan on at least 19 different networks and at least 14 distinct domain names**.

Specifically, we found evidence of a TLS MITM on the following networks:

- Uplink LLC (AS8200)
- TimeWeb Ltd. (AS9123)
- JSC Kazakhtelecom (AS9198)
- “Mobile Business Solution" MBS LLP (AS15736)
- Kar-Tel LLC (AS21299)
- Kcell JSC (AS29355)
- Mobile Telecom-Service LLP (AS29555)
- Jusan Mobile JSC (AS35104)
- JSC Alma Telecommunications (AS39824)
- BTcom Infocommunications Ltd. (AS41124)
- JSC Transtelecom (AS41798)
- OBIT-telecommunications, LLC (AS43370)
- SMARTNET TOO (AS43994)
- STARK INDUSTRIES SOLUTIONS LTD (AS44477)
- ForteBank JSC. (AS48502)
- Mobile Telecom-Service LLP (AS48503)
- PS Internet Company LLP (AS48716)
- JSC Kazakhtelecom (AS50482)
- Kar-Tel LLC (AS206026)

The fact that so many distinct ISPs are implementing the MITM using the same certificate seems to suggest a high level of coordination amongst distinct providers and a fairly high level of compliance.
