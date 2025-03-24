---
title: "Requirements for OONI’s anonymous credentials system"
description: "Designing and implementing an anonymous credential system for OONI requires balancing trust in our measurements and the privacy of our users. Our goal is to enrich our measurements with metadata that strengthen their reliability, while maintaining the strong privacy guarantees our users expect."
author: "Arturo Filastò"
date: "2025-03-24"
tags: ["ooni", "anonymous credentials"]
categories: ["blog"]
---

{{<img src="images/requirements-for-probe-id.png" title="Requirements for OONI Probe ID" alt="Requirements for OONI Probe ID">}}

The goal of integrating an anonymous credential system in [OONI Probe](https://ooni.org/install/) is to increase trust in [OONI measurements](https://ooni.org/data/) by enriching the data with properties about the probes that collected them, while preserving the privacy of our users.

In our [first blog post on the topic](https://ooni.org/post/2025-probe-security-without-identification/), we explain at a high level what this system is meant to achieve and provide a comprehensive academic literature review of the current state of the art in cryptographic anonymous credential systems.

At a high level, the goals are:

1. Enable OONI and consumers of [OONI data](https://ooni.org/data/) to filter out measurements coming from less trustworthy, faulty or malicious probes.  
2. Preserve the same privacy and security properties that currently apply to [OONI Probe](https://ooni.org/install/) users.  
3. Stamp measurements with a unique probe identifier which is local to a particular network vantage point (network-local identifiers).

Regarding points 2\. and 3., the main concern we have is that of *not* tracking OONI Probe users across the different networks they are running measurements from.

This problem can be illustrated by means of an example.

If we were to trivially stamp all measurements from the same probe with a globally unique identifier, it would be possible for someone to lookup all measurements for that particular probe ID and use the probe\_asn, probe\_cc tuple in them to track all the network locations that user has been to and when they have been there.

This can be especially problematic as it would mean that once someone figures out which ID is associated with a particular probe/user, they can use this information to track, for example, when a person is connected to their home wifi network, commuting to work, and at work.

Since we would like to avoid this, the probe identifier needs to change every time the measured network changes.

## Threat model

The primary goal of the anonymous credential system is to **protect against correlation attacks that could track users across different networks**, undermining our goal of network-local identifiers. An adversary with access to the measurement data (which is publicly available) could attempt to link measurements from the same probe across different networks, effectively creating a location history of the user.

The credential system must also resist forgery and [Sybil attacks](https://en.wikipedia.org/wiki/Sybil_attack), where malicious actors might generate false credentials or create multiple identities to pollute the measurement dataset. This directly impacts our goal of increasing trust in OONI measurements.

From a privacy perspective, credential issuance and verification processes present the potential for information leakage. Side-channel attacks during these operations could reveal identifying information about a user or their network location.

Additionally, special attention should be placed on ensuring that additional metadata included inside of OONI measurements (eg. engine\_version, software\_version) to not to reduce the anonymity set of OONI Probe users sharing that metadata to a point that they can be identified.

## Anonymous credentials applied to OONI

OONI Probe measurements already include information that will vary from user to user and hence might be used to narrow the set of likely users to have generated a particular set of measurements.

These include:

* ASN of the network where the measurement was run (probe\_asn)  
* Type of network where the measurement was run (network\_type)  
* Country code of where the network was run (probe\_cc)  
* Timestamp of when the measurement was run (measurement\_start\_time)  
* Timestamp of when the measurement was uploaded (measurement\_uid)  
* Engine and OONI Probe version used to collect the measurement (engine\_version, software\_version)

To this end, we would like at the bare minimum to not worsen the situation by introducing anonymous credentials.

The **additional metadata** we would like to add to measurements includes:

* How long a probe has been sending data to OONI (probe\_age)  
* How many measurements the probe has submitted (measurement\_count)  
* If a probe belongs to a set of blocklisted probes (is\_blocklisted)  
  * It should be possible to add probes to the set of blocklisted probes by using as input a particular measurement they have uploaded  
  * It is OK for the is\_blocklisted flag to only apply to future measurements and not apply retroactively  
* If a probe belongs to a set of trusted probes (is\_trusted)  
  * These are probes that are run by organizations or individuals that OONI has explicitly added to a list of trustworthy probes  
  * It’s worth noting that being inside of this set will reduce the anonymity of a given probe, which is probably acceptable for probes run by organizations that are publicly engaged in internet freedom work

In order to achieve the goals set out in the threat model, we need to ensure that:

1. It’s hard for a malicious actor wanting to submit measurements to OONI to falsify the values of probe\_age, measurement\_count and is\_blocklisted  
2. The resolution of probe\_age and measurement\_count are coarse enough that the number of users sharing the same value of the tuple (probe\_age, measurement\_count) is sufficiently large  
   1. If, for example, we just used the exact timestamp of registration of the probe for its probe\_age, this value would be too unique and would be sufficient to identify a specific probe by its age

In order to make it hard for malicious actors to falsify the values of probe\_age, measurement\_count and is\_blocklisted, we will be making use of an anonymous credential system. More details about the specific implementation are work in progress and some additional information can be found in our previous blog post providing a [literature review of anonymous credential systems](https://ooni.org/post/2025-probe-security-without-identification/).

Regarding the coarseness of probe\_age and measurement\_count, we will be picking some ranges which allow us to maximise the number of unique probes present in each range.

A concrete example of how these ranges might look like is:

* probe\_age
  * \> 1 week  
  * \> 1 month  
  * \> 6 months  
  * \> 1 year  
  * \> 2 years  
  * \> 3 years  
* measurement\_count  
  * \> 1k  
  * \> 10k  
  * \> 100k  
  * \> 1M  
  * \> 10M  
  * \> 100M

Additionally, we need to pay attention to the fact that a probe going from one range to another might be used as a side-channel to identify a particular probe.

Finally, we would like to make it hard to register a lot of distinct probes, hampering our ability to filter implement restrictions based on probe\_age or measurement\_count, but also making it hard to identify all the different probes associated with the same bad actor. This is what is stated in the threat model as a Sybil attack.

Preventing this is out of scope for the anonymous credential system at this time and will likely be implemented through some kind of registration rate limiting directly inside of OONI Probe.

# Conclusion

Designing and implementing an anonymous credential system for OONI requires balancing trust in our measurements and the privacy of our users. Our goal is to enrich our measurements with metadata that strengthen their reliability, while maintaining the strong privacy guarantees our users expect.

This post outlines some of the key requirements we are working with and our thought process in coming up with them. In doing so, we are laying the groundwork for what the final implementation will look like and we look forward to receiving community feedback.
