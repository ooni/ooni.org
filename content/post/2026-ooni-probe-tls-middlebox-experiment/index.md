---
title: "New OONI Probe TLS Middlebox Experiment"
description: "OONI released a new OONI Probe TLS middlebox experiment."
author: "Sadia Nourin"
date: "2026-11-10"
tags: ["ooni", "ooniprobe", "experiment", "tlsmiddlebox", "launch"]
categories: ["blog"]
---

We are excited to announce the release of a new OONI Probe [TLS Middlebox experiment](https://github.com/ooni/spec/blob/master/nettests/ts-037-tlsmiddlebox.md), designed by [Sadia Nourin](https://www.opentech.fund/fellows/sadia-nourin/) as part of her OTF Information Controls Research Fellowship with OONI. This experiment was developed as part of her [research](https://www.opentech.fund/fellows/sadia-nourin/) on measuring and identifying censorship in-transit, wherein intermediary networks censor traffic that neither originates nor is destined for their network.

By [running](https://ooni.org/install) the new [OONI Probe TLS Middlebox experiment](https://github.com/ooni/spec/blob/master/nettests/ts-037-tlsmiddlebox.md), you can contribute measurements that help **identify the locations of censorship middleboxes** around the world. Measurements will be published as [open data](https://ooni.org/data/) in near real-time.

{{<table-of-contents>}}

## How the TLS Middlebox Experiment Works

The OONI Probe TLS Middlebox [experiment](https://github.com/ooni/spec/blob/master/nettests/ts-037-tlsmiddlebox.md) helps us identify where censorship occurs on the network, particularly when it is implemented by devices known as TLS middleboxes.

The test first uses a tool called traceroute to map the network path between the OONI client and the target server. Traceroute identifies the routers that network traffic passes through on its way to the server.

The test then sends requests to both a control domain and a censored domain to the target server. These requests are set to expire at multiple points on the network path.

This allows us to determine at which point in the network path the censorship begins, thereby identifying the network location of the censorship infrastructure.

This data can help us determine whether middleboxes are being deployed close to the user, or in different networks or even countries.

### Experiment Modes and Potential Risks

The [OONI Probe TLS Middlebox test](https://github.com/ooni/spec/blob/master/nettests/ts-037-tlsmiddlebox.md) runs on two different modes: default and advanced.

Default mode collects the following information from routers on the network path from the user to the target server:

*   The **geolocated country** associated with the IP address of each router
*   The **AS** associated with the IP address of each router
*   The **AS organization name** associated with the IP address of each router

Advanced mode collects all of the information collected by default mode, in addition to:

*   The **IP address** of each router
*   The **round-trip times (RTTs)** of each router

#### Default Mode

With default mode, there is **no new risk** to the user that is not already considered by other OONI Probe tests and/or OONI’s [documentation about potential risks](https://ooni.org/about/risks/). A third-party observer cannot conduct any meaningful analysis using the country and AS information of the routers to de-identify the user. However, benefits from the data collected through default mode are limited. We would only be able to confirm whether censoring infrastructure is located within a specific country/network if it is located deep within the country/network.

#### Advanced Mode

With advanced mode, the user is subjected to more risk than existing OONI Probe tests. Since we are collecting both the IP addresses AND timing information of the routers, a third-party observer can use this information to potentially locate the user’s city and /24 prefix and/or exact IP address.

**In the absolute worst case scenario, a user’s city and IP address can be discovered**.

A third party observer can use the combination of timing and location information of the routers to triangulate the origin city of the OONI Probe. The observer can also use the network path collected by the TLS Middlebox experiment to reverse engineer the /24 prefix that ran the probe. If there was only one live IP address at the time the OONI Probe was run, then the observer could also discover the probe’s IP address.

However, a more realistic scenario is that the third party observer is able to discover the user’s city and network, but because there are many live IP addresses in that network and many users in the same city running OONI Probe and the TLS Middlebox test, it is difficult to identify any specific user. In any case, in light of these potential risks, advanced mode is available on an **opt-in** basis only.

Compared to default mode, the additional IP address and timing information of the routers collected by advanced mode means that we can now detect the location of middleboxes even if it lies on the boundary of two countries/networks. Furthermore, we can now **measure censorship at city-level granularity,** which has been a long-term [OONI community request](https://ooni.org/post/2024-ooni-partner-gathering-report/#needs).

## Current Deployment and Feedback Request

We have released the new TLS Middlebox experiment in the OONI Probe engine/CLI (`v3.31.0`) and in the OONI Probe mobile and desktop apps (`v6.3.0`). Currently, the [OONI Probe app](https://ooni.org/install) only supports the **default mode** for the experiment, while the [OONI Probe CLI](https://ooni.org/install/cli) supports *both* the default and advanced modes.

Since the advanced mode of the OONI Probe TLS Middlebox experiment can potentially expose a user’s city and/or /24 prefix, we would like to collect additional community feedback before rolling out the advanced mode on the OONI Probe app (which is used by most of our users worldwide). As such, we have published a **[survey](https://ooni.org/post/2026-tls-middlebox-survey)**, which we encourage you to fill out to share your feedback: https://forms.gle/z5kjVTTUGLryRFcK8