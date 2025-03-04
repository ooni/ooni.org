---
title: "Launch: New OONI Probe multiplatform app"
description: "OONI released an OONI Probe multiplatform app for Android and iOS."
author: "Maria Xynou"
date: "2025-03-04"
tags: ["ooni", "ooniprobe", "multiplatform", "launch"]
categories: ["blog"]
---

We are excited to share that we have launched an **[OONI Probe multiplatform app for Android and iOS](https://ooni.org/install/mobile)**! This is an important milestone for the long-term sustainability of the OONI Probe apps, as it will enable us to ensure feature parity and to ship new features faster and more effectively across platforms.

**Update now** to the latest version (5.0.3) to start using the new OONI Probe app on [Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe) or [iOS](https://apps.apple.com/us/app/ooni-probe/id1199566366).

[OONI Probe](https://ooni.org/install/) is a free and open source tool that we have built since 2012, designed to [measure various forms of internet censorship](https://ooni.org/nettest/). To enable communities worldwide to run OONI Probe and contribute measurements (which are published as [open data](https://ooni.org/data/) in real-time), we have made OONI Probe available for [both mobile and desktop](https://ooni.org/install/) platforms. Specifically, OONI Probe is available for [Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe), [F-Droid](https://f-droid.org/repository/browse/?fdid=org.openobservatory.ooniprobe), [iOS](https://itunes.apple.com/us/app/id1199566366), [Windows](https://ooni.org/install/desktop), [macOS](https://ooni.org/install/desktop), and [Linux](https://ooni.org/install/cli/ubuntu-debian/).

However, in practice this means that we have had to maintain OONI Probe in 4 different codebases: [OONI Probe Android](https://github.com/ooni/probe-android), [OONI Probe iOS](https://github.com/ooni/probe-ios), [OONI Probe Desktop](https://github.com/ooni/probe-desktop), [OONI Probe Command Line Interface (CLI)](https://github.com/ooni/probe-cli). Given that we aim to have feature parity across OONI Probe apps, we have had to implement changes in each of these 4 codebases every time we introduce a new feature. Having to do this each time in 4 different codebases not only reduces the speed at which we can ship new features, but it also increases the risk of introducing bugs. It also means that our software doesn’t always have full feature parity across all platforms and even when it does, there are some differences that are hard to get right. In our line of work, where there is often the need to quickly adjust our software in response to emergent censorship events or infrastructure changes, having to implement changes in 4 different codebases is, simply put, a burden.

To **improve the long-term sustainability of the OONI Probe apps** and to enable us to fix bugs and ship new features faster and more effectively, we created an [OONI Probe multiplatform app](https://github.com/ooni/probe-multiplatform). This involved [rewriting the OONI Probe app](https://github.com/ooni/probe-multiplatform) using [Kotlin Multiplatform](https://www.jetbrains.com/kotlin-multiplatform/) for code sharing, and [Compose Multiplatform](https://www.jetbrains.com/compose-multiplatform/) for shared UIs across platforms. We now have a [unified codebase](https://github.com/ooni/probe-multiplatform) for [OONI Probe Mobile](https://ooni.org/install/mobile), through which we will make releases for OONI Probe Android and iOS. We also aim to support [OONI Probe Desktop](https://ooni.org/install/desktop) through the same [codebase](https://github.com/ooni/probe-multiplatform). Stay tuned!

We thank the [Open Technology Fund (OTF)](https://www.opentech.fund/) for supporting this work.