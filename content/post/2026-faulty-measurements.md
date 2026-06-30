---
title: Methods for detecting & mitigating faulty measurements
author: Arturo Filastò, Luis Díaz
date: 2026-06-26
tags: ["anonymous-credentials", "research"]
categories: ["blog"]
---

Ensuring the integrity of [OONI’s measurement dataset](https://ooni.org/data/) is critical for maintaining its credibility and usefulness, particularly for human rights defenders and researchers who rely on it.

As the [OONI Probe](https://ooni.org/install/) network expands, so does the risk of faulty or misleading measurements, whether caused by misconfigurations or deliberate attacks.

In this blog post, we discuss our **existing and upcoming new methods** for detecting and mitigating faulty measurements in conjunction with our new anonymous credentials system for use in OONI Probe.

### Table of contents

- [Existing metrics and heuristics](#existing-metrics-and-heuristics)
  - [Approach & Methodology](#approach-and-methodology)
  - [Assessment & Findings](#assessment-and-findings)
    - [IP geolocation mismatches](#ip-geolocation-mismatches)
    - [Measurement volume anomalies](#measurement-volume-anomalies)
    - [Timestamp inconsistencies](#timestamp-inconsistencies)
    - [Probe OS, version metadata inconsistencies](#probe-os-version-metadata-inconsistencies)
- [New heuristics](#new-heuristics)
- [Strategies for mitigating faulty measurements](#strategies-for-mitigating-faulty-measurements)
  - [Overview](#overview)
  - [Anonymous credentials component](#anonymous-credentials-component)
  - [Mitigation steps](#mitigation-steps)
  - [Trade-offs for usability and efficiency (not in MVP release)](#trade-offs-for-usability-and-efficiency-not-in-mvp-release)
- [Assessing the effectiveness of the solution](#assessing-the-effectiveness-of-the-solution)
  - [Problem statement](#problem-statement)
  - [Naive solution](#naive-solution)
  - [Anonymous credentials solution](#anonymous-credentials-solution)
  - [Future validation](#future-validation)


# Existing metrics and heuristics {#existing-metrics-and-heuristics}

We start by seeing if we can identify faulty measurements using simple heuristics based on the data OONI already collects. Our goal is to establish a baseline for detection without compromising user privacy.

Through this baseline we will then be able to assess how to improve upon it by introducing the OONI Probe anonymous credentials system.

## Approach & Methodology {#approach-and-methodology}

To determine whether faulty measurements can be identified, we will analyze existing OONI data using a set of simple heuristics. These heuristics are designed to detect inconsistencies in measurement metadata and results.

The key approaches include:

- **IP geolocation mismatches** – Checking for discrepancies between the `probe_cc` (country code reported by the probe), `probe_asn` (the Autonomous System Number reported by the probe), and the geolocation of the egress IP seen by the measurement collector. This can help detect incorrect or misreported locations.
  - **Caveats:** The GeoIP database shipped inside of probes might be out of date; hence, the `probe_cc` and `probe_asn` inside of the measurement might be inconsistent due to the data used for performing the lookup in the probe being stale. We need to account for this when analyzing the data and make sure we filter those which are grossly inaccurate.
- **Measurement volume anomalies** – Identifying probes that submit an abnormally high number of measurements within short timeframes, which could indicate misconfiguration or a malicious attack.
  - **Caveats:** We don’t currently have an accurate method to identify measurements as coming from the same probe over time. We currently use the tuple (`probe_cc`, `probe_asn`, platform, architecture, engine_version) as a proxy for this, but there is a high chance (especially in networks with many users) of multiple users sharing the same tuple. This needs to be taken into account when looking at the data and increasing the threshold for anomaly detection in busy networks.
- **Timestamp inconsistencies** – Detecting measurements with a `measurement_start_time` that deviates significantly from the timestamp that is part of the `measurement_uid`. This might be caused by a misconfigured system clock or might be an indication of an intentional attempt at polluting our data.
  - **Caveats:** It’s possible for probes to upload measurements at a later moment in time, in which case the inconsistency will be expected. We should factor this into the analysis and, in the long term, consider better approaches to handling time inconsistencies (see: [https://github.com/ooni/probe/issues/1781](https://github.com/ooni/probe/issues/1781)).
- **Probe OS, version metadata** – OONI Probe contains a finite set of version numbers and `software_name` strings. We can use inconsistencies in these fields as an indication that the submitted measurement is unusual either due to misconfiguration or perhaps a malicious attack.
  - **Caveats:** Because OONI is an open platform, there may be legitimate reasons for there to be some software strings we do not recognize.

These heuristics can be used in combination with each other to support or disprove one or another hypothesis. As we make progress on this work, we should take note of specific examples and use them to inform the future iterations of the project. The above features will be used to look at existing data that’s already collected, but in some cases may require adding support for extracting missing features in a privacy preserving way. These features can then be used to either limit submissions from misconfigured or potentially malicious probes or flag the measurements as such when exposing them to end users inside of platforms such as [OONI Explorer](https://explorer.ooni.org/).

## Assessment & Findings {#assessment-and-findings}

### IP geolocation mismatches {#ip-geolocation-mismatches}

To assess the impact of IP geolocation mismatches, we added [some logging to OONI Probe requests](https://github.com/ooni/backend/issues/947#issuecomment-2737076230) targeting the `/api/v1/check-in` endpoint.

This endpoint is called every time a probe starts a `web_connectivity` measurement and includes the `probe_cc` and `probe_asn`, determined by the probe using its own GeoIP lookup method. We then compare the `probe_cc` and `probe_asn` seen inside of the check-in request body against a lookup of the same values using the public IP address of the probe retrieved from the `X-Real-IP` header.

Logs were collected from 19th March 2025 until 21st March 2025\.

Below is a summary table showing the breakdown of inconsistencies by software\_name and software\_version:

| platform | software\_version | nok\_cnt | ok\_cnt | nok\_rate |
| --- | --- | --- | --- | --- |
| android | 1   | 1   | 4   | 25  |
| android | 3.7.0 | 14  | 469 | 2.985075 |
| android | 3.7.2 | 4   | NaN | NaN |
| android | 3.8.8 | 10  | 113 | 8.849558 |
| android | 4.0.1 | 17  | 136 | 12.5 |
| android | 4.0.2 | 1   | 247 | 0.404858 |
| android | 5.0.3 | 283 | 5217 | 5.424574 |
| android | 5.0.5 | 44  | 439 | 10.022779 |
| browser | 0.1.0 | 19  | NaN | NaN |
| iOS | 3.9.1 | 1   | 12  | 8.333333 |
| ios | 5.0.3 | 1   | 26  | 3.846154 |
| ios | 5.0.5 | 23  | 276 | 8.333333 |
| linux | 3.10.0-alpha | 1   | 1   | 100 |
| linux | 3.14.0-alpha | 1   | 2   | 50  |
| linux | 3.17.2 | 2   | 9   | 22.222222 |
| linux | 3.19.0 | 6   | 7   | 85.714286 |
| linux | 3.19.2 | 2   | NaN | NaN |
| linux | 3.20.1 | 8   | NaN | NaN |
| linux | 3.22.0 | 2   | 57  | 3.508772 |
| linux | 3.23.0 | 16  | 560 | 2.857143 |
| linux | 3.25.0-alpha | 2   | 4   | 50  |
| macos | 3.10.0-beta.3 | 20  | 40  | 50  |
| macos | 3.14.1 | 17  | 62  | 27.419355 |
| macos | 3.17.5 | 10  | 111 | 9.009009 |
| macos | 3.19.2 | 18  | 19  | 94.736842 |
| macos | 3.20.1 | 36  | 135 | 26.666667 |
| macos | 3.23.0 | 25  | 441 | 5.668934 |
| macos | 3.24.0 | 2   | 555 | 0.36036 |
| macos | 3.9.2 | 15  | NaN | NaN |
| windows | 3.10.0-beta.3 | 3   | 20  | 15  |
| windows | 3.14.1 | 3   | 313 | 0.958466 |
| windows | 3.16.7 | 18  | 93  | 19.354839 |
| windows | 3.17.5 | 20  | 352 | 5.681818 |
| windows | 3.23.0 | 28  | 1794 | 1.560758 |
| windows | 3.24.0 | 49  | 1770 | 2.768362 |

The total number of inconsistencies was 722\. As we can see from the table above, we see a lot of inconsistencies even in very recent versions of OONI Probe, which are unlikely to be attributable to a stale GeoIP database.

We also checked inconsistencies between the reported ASN and country against the observed ASN and country coming from the `X-Real-IP` header and found the following:

| Total samples | CC Mismatches | ASN Mismatches | Total Mismatches | Mismatch percent |
| --- | --- | --- | --- | --- |
| 16139 | 847 | 941 | 1196 | 7.41% |

The following table shows the 10 most common CC mismatches:

| Reported CC | Real IP’s CC | total |
| --- | --- | --- |
| US  | CA  | 89  |
| CA  | RU  | 49  |
| CZ  | US  | 43  |
| BS  | US  | 36  |
| CA  | US  | 30  |
| CA  | SG  | 30  |
| CZ  | GB  | 25  |
| CA  | KH  | 18  |
| AU  | KH  | 18  |
| US  | DE  | 16  |

For example, in the case of US and CA, we have found that the majority of these issues come from a small number of ASNs. The following table shows how many mismatches we have per ASN when the real IP’s country is Canada:

| Real IP’s ASN | Name | total |
| --- | --- | --- |
| AS16276 | OVH SAS | 2   |
| AS174 | Cogent Communications | 34  |
| AS21949 | Beanfield Technologies Inc. | 50  |
| AS58065 | Orion Network Limited | 1   |
| AS63949 | Akamai Technologies, Inc. | 2   |

While we found **29 ASNs** from Canada in the sample data.

Another interesting example is the second most common source of CC mismatches: probes reporting Canada (CA) with an `X-Real-IP` from Russia (RU). None of these measurements have ASN mismatches and they all come from Cloudflare:

| ASN | ASN name | total |
| --- | --- | --- |
| AS13335 | Cloudflare, Inc. | 49  |

That probably corresponds to users using a VPN operated by cloudflare, such as WARP. Further investigation is needed to assess connections running through a proxy.

As an initial exploration, we looked at the connection type for these faulty measurements, and we found the following:

<div style="display: flex; gap: 10px; align-items: flex-start;">
  <img src="/post/2026-faulty-measurements/image9.png" style="width: 45%; height: auto;" alt="Figure 1. connection type chart 1">
  <img src="/post/2026-faulty-measurements/image2.png" style="width: 45%; height: auto;" alt="Figure 2. connection type chart 2">
</div>

Most of these measurements with unmatching CCs come from hosting connections, so it’s very likely that these measurements come from connections running through a VPN. In fact, if we look at the list of most common ISPs for `connection_type` \= hosting, we will see that most of them come from known VPN providers:

| Provider | Occurrences in sample data |
| --- | --- |
| Datacamp Limited | 322 |
| Cloudflare, Inc. | 183 |
| M247 Europe SRL | 168 |
| Clouvider Limited | 102 |
| IONOS SE | 57  |
| Alibaba (US) Technology Co., Ltd. | 48  |
| Iron Hosting Centre LTD | 47  |
| I-NET LLC | 45  |
| DigitalOcean, LLC | 37  |
| Akamai Technologies, Inc. | 36  |

Datacamp, Cloudflare, and M247 Europe are known VPN server providers, so it’s very likely that measurements coming through these servers are running through a VPN.

On the other hand, these are the 10 most common sources of mismatches between probe ASN and the real IP’s ASN:

| Real ASN Name | Real IP’s ASN | Real IP’s CC | Probe ASN | Probe CC | total |
| --- | --- | --- | --- | --- | --- |
| I-NET LLC | AS198265 | AM  | AS49800 | AM  | 45  |
| Datacamp Limited | AS212238 | US  | AS0 | CZ  | 43  |
| Proton AG | AS199218 | NL  | AS198584 | NL  | 27  |
| Datacamp Limited | AS212238 | GB  | AS9080 | CZ  | 25  |
| SkyNet Ltd. | AS35807 | RU  | AS9123 | RU  | 19  |
| DigitalOcean, LLC | AS14061 | US  | AS21928 | US  | 16  |
| Datacamp Limited | AS212238 | US  | AS174 | CA  | 15  |
| FLEX NETWORK SARL | AS198545 | FR  | AS174 | FR  | 15  |
| Beanfield Technologies Inc. | AS21949 | CA  | AS21928 | US  | 13  |
| Beanfield Technologies Inc. | AS21949 | CA  | AS16591 | US  | 13  |

In summary, we found that most of the inconsistencies between reported `probe_cc`, `probe_asn`, and the real IP address seen accessing the check-in endpoint seem to be associated with the use of a VPN. We did not find any significant volume of inconsistencies that might be attributable to malicious tampering of measurements or even unintentional probe misconfiguration.

The fact that VPN leads to these kinds of inconsistencies is something which we will have to take into account when rolling out the faulty measurement detection logic.

### Measurement volume anomalies {#measurement-volume-anomalies}

We looked into OONI measurements to spot anomalies in measurement volume.

Specifically, we looked at the rate of measurements that were run per “probe\_id” in a 1 minute window of time. We established that the mean, q75, q90 and q99 were 8, 16, 25 and 54 respectively. In order to spot extreme cases we filtered this list based on those that had spikes of more than 200 measurements per minute in a 1 minute time window.

Based on this, we found a whole class of software name strings which are not known to be used by official OONI Probe distributions that are submitted in a large volume of measurements per second.

![Figure 3\. Anomaly related to software\_name \= ooniprobe-react-os.*](/post/2026-faulty-measurements/image13.png)  
*Figure 3\. Anomaly related to software\_name \= ooniprobe-react-os.*

In the above chart we can see that, on a daily basis, a probe with software name ooniprobe-react-os (which is submitting measurements only for `probe_cc` \= CN) is sending us web\_connectivity measurements that appear to have been run at a rate of 200 measurements per minute (3 measurements per second) – which is quite unrealistic for the web\_connectivity test.

![Figure 4. ECDF of test runtime with probe_cc = CN](/post/2026-faulty-measurements/image16.png)
This ECDF plot shows the distribution of the test runtime, comparing the runtime of measurements from ooniprobe-react-os against other measurements with `probe_cc` \= CN, and it seems like tests tend to run faster with ooniprobe-react-os.

It’s surprising that the react measurements are faster than every other measurement given their volume. Having so many measurements in small windows of time should generate a network bottleneck, but that doesn’t seem to be the case.

Another case which stands out is related to measurements coming from Myanmar. In this case the bursts are not so regular, but only happen at specific times. In the following chart we can see bursts of measurements at a rate of 200 per minute on 6th January 2025\.

![Figure 5\. Burst of web\_connectivity measurements in Myanmar on January 6th, 2025\.*](/post/2026-faulty-measurements/image7.png)  
*Figure 5\. Burst of web\_connectivity measurements in Myanmar on January 6th, 2025\.*

### Timestamp inconsistencies {#timestamp-inconsistencies}

We calculated the difference between the timestamp inside of the measurement\_start\_time field of the measurement and the timestamp included as part of the measurement\_uid. This gives us a sense of measurements that have been submitted at a much later date compared to the original time a measurement was run or measurements that have been submitted with a timestamp from the future.

The following table shows the total amount of measurements with timestamp anomalies from 2025-03-02 to 2025-04-01:

| Past (\>1h) | Past (\>24h) | Past (\>7d) | Future (\>1h) | Future (\>24h) | Future (\>7d) | Total (anomalies) | Total | Anomaly % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 244134 | 76764 | 685 | 38352 | 513 | 0   | 282302 | 34407959 | 0.82% |

We also notice that most of the anomalies come from Linux and are mostly measurements from the past:

| platform | Past (\>1h) | Future(\>1h) | Total (anomalies) | Total | Anomaly percent |
| --- | --- | --- | --- | --- | --- |
| ios | 2375 | 0   | 2375 | 240843 | 0.99% |
| windows | 34192 | 24938 | 59130 | 10503040 | 0.56% |
| android | 21132 | 5509 | 26641 | 10389320 | 0.26% |
| macos | 906 | 0   | 906 | 3103961 | 0.03% |
| linux | 185322 | 7908 | 193230 | 8947716 | 2.16% |

![Figure 6. ECDF of delta time from the future by platform](/post/2026-faulty-measurements/image14.png)


The following chart shows the distribution of anomalies per software:  

![Figure 7. Measurements per minute for MY_930](/post/2026-faulty-measurements/image5.png)
This is consistent with the platform chart, where we see that most of the anomalies come from Windows, Linux, and Android. Ooniprobe-cli and miniooni are used mostly in linux, while ooniprobe-desktop includes Windows and Linux.

Usually timestamp inconsistencies come from:

1. A probe that performed measurements and store it for later
2. A probe with a bad clock

And it’s worth noting that **measurements *from the past* include both of these categories, but measurements *from the future* include only the second one**. This is consistent with the volume of measurements that we see, where most timestamp anomalies are from the past.

The following chart shows the ECDF of the amount of hours of difference for measurements from the past. As we can see, most anomalies are concentrated in the range between 1 and 35 hours:  
![Figure 8. ECDF of the amount of hours of difference for measurements from the past](/post/2026-faulty-measurements/image1.png)
 And this one shows the ECDF of the amount of hours of difference for measurements from the future. In this case mostly concentrated in the range between 1 and 10 hours. Measurements from “the future” seem to be from the near future:

![Figure 9. ECDF of the amount of hours of difference for measurements from the future](/post/2026-faulty-measurements/image19.png)

Note that **only 0.82% of the sampled measurements showed timestamp anomalies**, as shown in the table above. So the vast majority of our measurements were submitted within 1h after the test started, timestamp anomalies are not a common issue. 

The following chart shows the ECDF of time delta from the past by platform:

![Figure 10. ECDF of time delta from the past by platform](/post/2026-faulty-measurements/image4.png)

And the following one shows the ECDF for measurements from the future:  
![Figure 11. ECDF for measurements from the future](/post/2026-faulty-measurements/image6.png)
IOS and Macos don’t even show up in this chart because there are no measurements from the future in any of those platforms.

![Figure 12. Anomalies per country](/post/2026-faulty-measurements/image11.png)  
It’s worth noting that the majority of the measurements in the range 24h to 7d for the linux platform are coming from Venezuela. In the section below we show what the chart looks like without measurements from `probe_cc`=VE.  
![Figure 13. Anomalies per country without Venezuela](/post/2026-faulty-measurements/image15.png)

The following chart shows the distribution of anomalies per country:  
<div style="display: flex; gap: 10px; align-items: flex-start;">
  <img src="/post/2026-faulty-measurements/image3.png" style="width: 45%; height: auto;" alt="Figure 14. measurement volume anomaly chart 1">
  <img src="/post/2026-faulty-measurements/image12.png" style="width: 45%; height: auto;" alt="Figure 15. measurement volume anomaly chart 2">
</div>

After investigating those anomalous measurements coming from Venezuela, we noticed that the vast majority of them came from the same ASN. We were able to contact our partners in the region generating these measurements and we found out that the devices connected to this ASN were inadvertently misconfigured with incorrect time zones. This is an example of how bad configuration can generate misleading measurements.

Excluding venezuelan anomalies from the previous charts, we get the following distribution of anomalies per platform:

![Figure 16. Linux anomalies per platform chart 1](/post/2026-faulty-measurements/image18.png)
![Figure 17. Linux anomalies per platform chart 2](/post/2026-faulty-measurements/image17.png)
![Figure 18. Linux anomalies per platform chart 3](/post/2026-faulty-measurements/image8.png)

 As we can see, Linux anomalies go down significantly while everything else stays nearly the same. So these anomalies were only affecting Linux metrics.

### Probe OS, version metadata inconsistencies {#probe-os-version-metadata-inconsistencies}

We first focused on looking for the most blatant inconsistencies between software name and platform, things like software\_name \= ooniprobe-android, platform \= ios. The following table shows a summary of what we found:

| Software name | Platform | Occurrences |
| --- | --- | --- |
| ooniprobe-android | Not android | 718 |
| ooniprobe-ios | Not IOS | 0   |
| ooniprobe-desktop | Not one of: linux, windows, macos | 0   |

Interestingly, some of the Android inconsistencies seem to be related to the ooniprobe-react-os that we mentioned earlier:

| Software name | platform | total |
| --- | --- | --- |
| ooniprobe-android | linux | 1   |
| ooniprobe-android | React OS | 6   |
| ooniprobe-android | macos | 161 |
| ooniprobe-android-unattended | macos | 550 |

These measurements also come from `probe_cc` \= CN: 


| Software name | Platform | Probe CC | Probe ASN | Architecture | Measurement Start Time |
| --- | --- | --- | --- | --- | --- |
| ooniprobe-android | React OS | CN  | 56040 | amd64 | 2024-02-14 15:18:08 |
| ooniprobe-android | React OS | CN  | 9808 | amd64 | 2024-01-18 06:08:23 |
| ooniprobe-android | React OS | CN  | 9808 | amd64 | 2024-01-18 05:24:46 |
| ooniprobe-android | React OS | CN  | 9808 | amd64 | 2024-01-18 05:20:54 |
| ooniprobe-android | React OS | CN  | 56040 | amd64 | 2023-12-27 04:24:58 |
| ooniprobe-android | React OS | CN  | 56040 | amd64 | 2023-12-27 02:36:10 |

And as for the android-macos ones, we traced back to some our team member’s development machines. This is another example of how there might be faulty measurements due to the development process or bad configuration.

We also found some software strings that we weren’t aware of. Here’s the list along with a small investigation about what we could find with a quick Google search, more research might be needed in the future:

1. **Vladhog Security Bot , Vladhog Security Monitoring Service**: Seems like a security service that uses ooniprobe to run network tests. There’s a description [here](https://top.gg/bot/897084492571885628) but we couldn’t find an official webpage
2. **murakami-ooniprobe:** It’s a project similar to ooni, it seems like they use ooni for network analysis, [here’s](https://github.com/m-lab/murakami/blob/main/docs/SUPPORTED-TEST-RUNNERS.md#ooni-probe) the Github page where they explain this.
3. **MySorgenia:** Seems like an italian app to manage network services, their measurements are quite old: [https://areaclienti.sorgenia.it/login?forwardURL=%2Fprivate%2Fhome](https://areaclienti.sorgenia.it/login?forwardURL=%2Fprivate%2Fhome)
4. **Ooniprobe-react-os:** We mentioned this above and seems to be an ooniprobe fork with a high volume of measurements. We couldn’t find anything related to this software name with a quick google search so more research will be needed.
5. **Dismantle:** Some old (2023) measurements that come from Italy have this software name. We couldn’t find much about this either.

# New heuristics {#new-heuristics}

In addition to the existing heuristics and metrics which are already collected by OONI Probe and outlined in the previous sections, we would like to develop a set of **more advanced heuristics** that can be used to detect inconsistencies that can be a sign of faulty or malicious data.

A big source of issues in OONI Probe measurements is accurately establishing the location of a probe. This is due to the fact that we rely on IP to country and ASN mappings (geoIP databases) which are looked up directly by the probe itself. Since these geoIP databases are shipped as part of our application, if a probe is running an older version of our software or we haven’t made a release in a while, we might end up inaccurately stamping the network location in the measurement.

In order to counter this issue, we would like to introduce additional measures which would allow us to **identify these inconsistencies and flag these measurements for further review**. While these inconsistencies may not necessarily be indicative of malicious behaviour, we expect an adversary interested in polluting our dataset with bad data to be setting these values artificially.

Some approaches that we would like to adopt in order to get **more precise location information** include:

- **Retrieving the mobile network code and mobile country code from the mobile OS** (see: [https://github.com/ooni/probe-multiplatform/issues/422](https://github.com/ooni/probe-multiplatform/issues/422)).
  - **Challenges:** this will only work on mobile platforms.
- **Retrieving the country of the probe by asking OS location services**.
  - **Challenges:** users might be suspicious about the fact that OONI Probe is requesting for additional permissions.
- **Performing the IP to location mapping on the server side**, therefore avoiding the issue of stale GeoIP databases.
  - **Challenges:** communication to our backend services might be intermediated by a circumvention method, which would result in not seeing the true IP address of the probe.

These values could then be used to enrich OONI measurements and could be compared against the value of `probe_cc` and `probe_asn` to detect inconsistencies.

Additionally, we would like to apply the following **additional heuristics** to data we already collect in order to establish inconsistencies in measurements:

- **Network-Level anomalies** – Comparing results from the same region or ISP to identify outliers that may indicate faulty reporting or incorrect censorship assessments. This might either be an indication of misreported geoIP data, a misconfiguration of the probe or an attempt at polluting our dataset with bad data.
  - **Caveats:** It might not be so immediate to tell if the inconsistency in a particular network is due to a transient network condition or if it’s indeed consistent over time. This is a challenge we face in general with OONI data.
- **Protocol-Level anomalies** – Recognizing unusual test behaviors such as inconsistencies in TLS handshake results, which could indicate the presence of interfering software (e.g., antivirus tools modifying traffic). The presence of these kinds of devices may be identified using specific TLS MiTM fingerprints.
  - **Caveats:** Because the goal of OONI Probe is specifically that of detecting network level anomalies, the presence of these is not necessarily a bad sign. We are however interested in being able to differentiate between ISP or government mandated censorship from network interference happening on the end users device.

Once we implement the privacy preserving probe identity, age and measurement\_count credentials, we would then have additional fields which could be used to either limit submissions from probes that are too new or that haven’t sent us enough data. Moreover, we may use the probe\_id field to filter out all measurements from a probe that has triggered one of our anomaly detections to identify other measurements that might also have data quality issues.

More details about how this would work can be found in our [blog post on the requirements](https://ooni.org/post/2025-requirements-for-oonis-anonymous-credentials/) of an OONI anonymous credentials system.

# Strategies for mitigating faulty measurements {#strategies-for-mitigating-faulty-measurements}

## Overview {#overview}

As outlined in the previous sections we have a series of heuristics which can be used to identify a potentially faulty measurement and use these to implement some anomaly detection on these features.

Ultimately, however, we will want the decision of whether or not a particular measurement is indeed faulty and should warrant an account, to go through human review. We may eventually automate some level of this, but to avoid unintended consequences associated with flagging good data as bad, this will only be done as a next step as part of future work.

The fact a human should be in the loop of identifying faulty data, means that we can only make changes to mitigation strategies affecting that class of measurements, after the faulty measurement has already been submitted and processed by our data pipeline.

An additional constraint that we have is that we will avoid at all costs modifying data once it has already been submitted, unless the impact of not modifying it has an effect on user privacy.

# Anonymous credentials component {#anonymous-credentials-component}

For more details on how it works, see our blog post [announcing OONI's new anonymous credentials system](/post/2025-announcing-ooni-new-anonymous-credential-system)!

## Mitigation steps {#mitigation-steps}

Once we have identified that a certain measurement is faulty, we will look at past measurements coming from that particular probe and use that to inform what steps we should take in terms of mitigation.

Mitigation can work at two different levels:

1. On the measurement submission stage, by banning the pseudonym exhibiting bad behavior (pseudonyms are identical within a geographical area and an IP), accept only probes with a higher trust level and different creation date.
2. By performing rate limiting on the submissions that can be done by a registered credential.  
  The number of submissions that can be accepted by the OONI server in a specific area for a specific time window can be set dynamically.
3. By rotating the issuance key and scrutinizing the users that will ask for a credential update.

Mitigation is a question of being able to reduce the impact of this faulty data, while at the same time causing minimal disruption to the overall collection of data.

In the case of setting more stringent requirements on what probes can submit data to us, for example saying that only probes older than 6 months can upload, has the potential of impacting also the submission of measurements from “good” probes.

We might apply submission restrictions based on certain properties of probes (eg. [probe\_age or measurement\_count](https://ooni.org/post/2025-requirements-for-oonis-anonymous-credentials/)), this may be done because we suspect to be under a sybil attack and we would like to block for example all recently created probes that are sending us bad data. For these kinds of restrictions we will probably want to keep them time bound and eventually remove them once we don’t believe to be under attack anymore.

The other kind of restriction might be that of explicitly blocking a particular probe\_id, when we suspect the source of the bad data to be restricted to a single probe. These restrictions should probably also be time bound (so we don’t have to keep the list of bad probes forever), but since it’s much more specific it will not have such an impact on collecting measurements from unrelated probes.

Regarding the presentation layer, we may similarly use these features to present measurements from blocked probes or less trustworthy probes different in sites like OONI Explorer. This might additionally feed into our measurement analysis engine so that measurements from these probes are ignored.

## Trade-offs for usability and efficiency (not in MVP release) {#trade-offs-for-usability-and-efficiency-not-in-mvp-release}

- Old public parameters and old OONI versions can still be supported after key rotation happens, maybe trading off some security levels of older probes, but still support collecting the data.  
  Important for security: changing the PRF will change the NYM of the users.  
  Changing the public parameters will NOT change the NYM of users.
  
- If the OONI servers are under pressure:
  
  - Credential verification can be batched. Some examples of batch techniques can be found e.g in [zkp](https://github.com/dalek-cryptography/zkp/blob/master/src/toolbox/verifier.rs#L123-L174). This change affects only the backend.
  - Measurement count can be increased in a batched way, by adding another URL where the user can prove possession of the NYM attached to previous submissions.  
    This change will affect the backed and the user code

# **Assessing the effectiveness of the solution** {#assessing-the-effectiveness-of-the-solution}

Mitigating the effect of faulty measurements entering the system is a two steps problem:

- Having good observability of incoming measurements
- Having the right tools to filter out data when an issue is detected

At any given time, there are hundreds of measurements coming into Ooni systems. It’s really hard to have an idea of what’s constantly happening all the time. We have to understand what possible issues we could face, how to detect them in real time and what actions can be taken to mitigate them.

This understanding is addressed by the faulty measurements research that led to some interesting insights of what faulty data looks like. With this research Ooni was able to put together a dashboard and several metrics in the system in order to better capture possible faulty measurement events.

With this data we now have the ability to have a better understanding of the current state of the system and the data entering the database, and even set up automatic alerting. The next step is to be able to act on this data.

The second problem is a bit harder to tackle. Let’s try to understand what an ideal solution would look like, what problems we would face and how these problems are solved by the anonymous credentials system.

## **Problem statement** {#problem-statement}

Let’s say that we detect that there’s a sudden increase in the number of incoming measurements with time anomalies from the past for a given country (CC) and network (ASN). This data is inconsistent with other legit measurements on the same CC, ASN and time interval.

Let’s suppose that this data comes from a very small subset of concrete probes. How do we filter it out?

## **Naive solution** {#naive-solution}

If this is a very small set of probes, we could add an ID to the client, add the ID to the submission metadata  and do whitelisting of ids in the server. But this solution has the following problems:  

- Even unique randomized IDs are enough to **personally identify a probe**, which is in itself a huge problem
- The probe could just ask for a new ID, so we would have to define a more complex authentication system, probably asking for more **personally identifiable information** that we don’t want to store
  - We could store analytics for each probe to estimate a confidence score, but this would make the personally identifiable information problem worse and make the system more complex
  - If we don’t store this data, we can ask the probe to store it and send it when reporting new measurements, but a bad probe could easily forge it
- This would start a game of wack-a-mole of hunting down these new probe ids

So the problem becomes:

> How can we perform access control and define a confidence scoring without relying on **personally identifiable information** stored **long term** in our database? 

## **Anonymous credentials solution** {#anonymous-credentials-solution}

The main idea behind anonymous credentials is the following:

- We establish a trust scoring based on measurement submissions count (msm\_count) and age
  - We can filter out data based on msm\_count and age
  - We can scope this to specific CCs and ASNs combinations
- A credential is handed and signed by the server.
  - Not stored in the server
  - Privately stored within the probe and never shared again
  - This credential cryptographically encodes the measurement count and age of the probe
- Using this credential, a probe signs a submission request
- The server validates this signature and submission. The msm\_count and age are encoded in the signature, so the server can check if the measurement is allowed to come through depending on the access rules we have. Example:
  - We only allow probes from CC \= XX and ASN \= 1234 to send measurements if they have sent at the least 100 measurements in the past
- When the signature is accepted, the server sends a new signature. Here’s the key part: The probe is only able to update its internal credential (that encodes measurement count and age) using this signature

This solutions affords us the following features:

- We can keep a trust score using the age and msm\_count of a probe
- This data is NOT stored on a server, it’s stored by probes and we can’t access it on demand. It’s not even reported explicitly on submission, it’s presented as ranges: my msm\_count lies between 100 and 500
- It doesn’t rely on information we didn’t have before: probe CC and ASN
- There’s no unique ID for each probe that won’t change over time

Note that with this approach it is impossible to perform a very specific and targeted blocking. This is a limitation we accept and embrace to preserve user anonymity. We tackle this problem by carefully changing the access rules per (`probe_cc`, asn) tuple.

Let’s go back to our previous problem statement and see how the anonymous credentials solution that OONI has implemented would solve that situation:

- We notice an unexpected increase in the number of faulty measurements from the past:

![Figure 19. Screenshot of our grafana dashboard to monitor the number of measurements with time anomalies](/post/2026-faulty-measurements/image10.png)

- After noticing this issue, someone can look at the top offending (`probe_cc`, asn) tuples and figure out if they have a specific pattern. For example, (XX, 1234\) is over represented
- Then, we would set the following access rules in the manifest:

```
{
  "submission_policy": [
    // New entry
      {
        "policy": {
          "age": [
            2461110,
            2460784                       <-- Changed
          ],
          "min_measurement_count": 1000
        },
        "match": {
          "probe_cc": "XX",               <-- Changed
          "probe_asn": "1234"             <-- Changed
        }
      },
      // The rest of the clients fall here:
      {
        "policy": {
          "age": [
            2461110,
            2826140
          ],
          "min_measurement_count": 0
        },
        "match": {
          "probe_cc": "*",
          "probe_asn": "*"
        }
      }
}
```

- In the new rules we note:
  
  - A new access rule is added and scoped to (XX, 1234\)
  - The age is limited to only include older probes, probes in the time range between: 19 Apr. 2024 and 19 Apr. 2025 (in julian days)
  - The minimum measurement count must be 1000
- With these new rules a client has the following options:
  
  - Stop sending measurements if it doesn’t match the rules
    
  - Send the measurements anyways with the rules, even if the rules don’t match its internal msm\_count and age. This will lead to an error trying to construct the submission request, preventing the client from sending the request.
    
  - Send measurements using a wrong rule, the “catch all” rule for example. The server will choose the correct rule for running the verification, leading to a credential error and marking the measurement as **failed**.
    
  - Send measurements without any verification. This will mark measurements as **unverified**, so they can be further studied and filtered in measurements APIs
    

With this approach we don’t need to know the specific identity of this probe nor we have to store any long term analytics of them. Consumers of the API can check whether the measurements they see comply with some degree of confidence: verified, unverified and failed. OONI also has visibility over subsets of measurements that present anomalous behaviour so they can be studied in detail.

The process is straightforward and mostly automated, so it requires very little work to detect, filter and mark faulty measurements without compromising most legitimate probes.

## **Future validation** {#future-validation}

There are still some metrics that we can only collect over a long period of time in order to better understand the effectiveness of the system. This is a task that OONI will be continuously performing and refining over time. This includes:

- **Volume of verified measurements:** Measuring the volume of verified, unverified and untrusted measurements over time. This can help to diagnose the following issues:
  
  - A bad client update that breaks the protocol implementation
  - Older probes that are not updating
  - Performance issues: Are we seeing less measurement volume due to a slow down in measurement processing time?
- **Volume of currently deployed protocol versions:** Measuring the amount of probes, disaggregated by protocol versions.
  
  - This can help us to detect which client versions are having the most issues or unverified/untrusted measurements
  - Understanding if a specific protocol version with a security vulnerability introduced in the future has a particularly high rate of verified/unverified/untrusted measurements
- **Timing and profiling:** checking the time it takes to run a verification in the server will help us to understand if a performance regression was introduced in an update
  

All of these are metrics that will be collected during the lifespan of the anonymous credentials protocol to assess the current state of implementation and future issues we might encounter.
