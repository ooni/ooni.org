---
title: "Writing a modern cross-platform desktop app"
author: "Arturo Filastò"
date: "2017-10-30"
tags: ["technology", "software engineering"]
categories: ["blog"]
---

The goal of this article is to outline some of the architecture & design considerations made while thinking about how we would implement the OONI Probe desktop apps. This is the result of research and experimentation with a variety of different libraries and approaches. For each part of the technical stack we will outline the rationale leading to our choices.

# Requirements & design goals

Our primary goal with the OONI Probe desktop apps is to enable **Windows**and **macOS**desktop users to run [OONI Probe](https://github.com/TheTorProject/ooni-probe) network measurement tests without knowledge of the command line. These tests will use the **[Measurement Kit](https://github.com/measurement-kit)** implementation of OONI tests.

## R) Requirements

These are **must haves**. We will not consider options which do not meet these criteria.

1.  **Windows** support
2.  **macOS** support
3.  **Auto-update** of the application
4.  **Must not**require a **web browser** for using the application
5.  **One-click** installation, whatever that means on the target platform
6.  **Mature technologies** that have an established community and a history of production applications using them
7.  Ability to link to a C++ library ([Measurement Kit](https://github.com/measurement-kit))
8.  **Open source**

## D) Desiderata

Below we list features or use cases that we **would like to** support, but they should not be the reason for excluding an approach or technology.

1.  **Linux** desktop support
2.  **Command Line Interface (CLI)** support
3.  Support **older versions of Windows**
4.  **Web browser** support (for IoT type deployments)
5.  Easy to **integrate**our existing [ooni-components](https://github.com/openobservatory/design) that are [styled-components](https://github.com/styled-components/styled-components)
6.  The **learning curve** of the technologies in question should not be too steep
7.  The technologies should be ones that we are already **familiar with**
8.  **Minimal code duplication** between the various platforms
9.  As **native** as possible look and feel

# Technological selection

In this section we provide an overview of the technologies we considered and list the pros and cons for each of them. Finally, we explain our choice of technical stack for this project.

The possible combinations of software stacks pivot around two main approaches:

**1\. Everything is implemented using some cross-platform GUI toolkit (electron, QT, etc.)**

Less duplication of code (**D8**) and likely less costly to maintain in the long run (one code base for all platforms).

**2\. Use the best solution available for implementing the UI layer for each platform (react-native-window or WPF on windows, gtk on linux, cocoa on macOS)**

More native feel (**D9**) and depending on the technological choice we can maybe re-use some code from the mobile apps (for example the iOS code for macOS).

## React Native Windows

[https://github.com/Microsoft/react-native-windows](https://github.com/Microsoft/react-native-windows)

**Pros:**

*   **D9** - Has a native look and feel (since it follows the path of the react-native way of writing react code to generate native code).
*   **D6** - The learning curve is similar to that of react.js, which is less steep than other native options.
*   **D7** - React is a technology we are already familiar with.
*   **R3, R4, R5, R7, R8**

**Meh:**

*   **R6** - It appears to have a fairly active community, is backed by microsoft and has some real world use cases of apps using it. That said, no high profile desktop app is using it.
*   **R1**- Partial support for Windows 7, but only with a much more limited API, as WPF support is behind UWD (Window 10 only). See: [https://github.com/Microsoft/react-native-windows/blob/master/docs/CoreParityStatus.md](https://github.com/Microsoft/react-native-windows/blob/master/docs/CoreParityStatus.md) 

**Cons:**

*   **D8** - This approach will only work for Windows, so we would have to come up with another solution for macOS, Linux and browsers.
*   **D3**- Older versions of Windows are only supported with WPF, which is much less comprehensive than UWD support. See: [https://github.com/infinitered/react-native-windows/blob/ebc512df2afb5b87d62ffd569c2ae8d3f822e7f7/docs/CoreParityStatusWPF.md](https://github.com/infinitered/react-native-windows/blob/ebc512df2afb5b87d62ffd569c2ae8d3f822e7f7/docs/CoreParityStatusWPF.md) 

## React native macOS

[https://github.com/ptmt/react-native-macos](https://github.com/ptmt/react-native-macos)

Excluded [this](https://github.com/ptmt/react-native-macos) fairly early on in our analysis as the quality of the software is not stable and doesn't have real world use (**R6**).

The Readme used to say:

“There is no success story for any RN desktop app yet, so it's not proven by production use.”

It doesn’t say it anymore, but I still couldn’t find any success stories through some quick online searching, nor by asking in the public channel.

## React native linux

[https://github.com/CanonicalLtd/react-native](https://github.com/CanonicalLtd/react-native) 

We looked at [this](https://github.com/CanonicalLtd/react-native) just for curiosity to see what the linux-verse was doing in this regard.

It’s unclear if it’s still being actively developed (**R6**), or if the project has been abandoned entirely. It appears to be very incomplete and [lacks proper documentation](https://github.com/CanonicalLtd/react-native/tree/ubuntu/ReactUbuntu). 

## Windows Presentation Foundation

[https://docs.microsoft.com/en-us/dotnet/framework/wpf/index](https://docs.microsoft.com/en-us/dotnet/framework/wpf/index)

This is the [de-facto standard for developing apps on the Windows platform](https://docs.microsoft.com/en-us/dotnet/framework/wpf/index). It’s superseded by the newer UWP, but the later only support Windows 10+.

Even though it’s unclear how open source it is, we decided to look into it nonetheless as the libraries for using it are included as part of any Window installation.

**Pros:**

*   **D9** - Has a native look and feel, as native as it gets.
*   **R6** - There is an active community, is backed by Microsoft and has many real world use cases of apps using it. Plenty of documentation on it is available online.
*   **D3**- Older versions of Windows are supported.
*   **R1, R3, R4, R5, R7**

**Cons:**

*   **D6** - Has a fairly steep learning curve.
*   **D7** - It’s a technology none of us are already familiar with.
*   **D8** - This approach will only work for Windows, so we would have to come up with another solution for macOS, Linux and browsers.

## Universal Windows Platform

[https://docs.microsoft.com/en-gb/windows/uwp/get-started/universal-application-platform-guide](https://docs.microsoft.com/en-gb/windows/uwp/get-started/universal-application-platform-guide)

[This](https://docs.microsoft.com/en-gb/windows/uwp/get-started/universal-application-platform-guide) has very similar pros and cons to WPF, except that it only supports Window 10+ (**D3**). It seems like the learning curve for it may be a bit less steep than WPF upon a cursory look at it, but since it doesn’t support Window 7 (the mostly highly used windows version as of date), we didn’t consider it.

## Cocoa

[https://developer.apple.com/macos/](https://developer.apple.com/macos/)

The main benefit of using [Cocoa](https://developer.apple.com/macos/) is that we could re-use some of the code from the iOS app. In looking into this option we realized that a lot of the code would need to change to support the desktop use-case and could not be easily translated. Moreover, the benefit of having identical code-bases for Windows and macOS outweighs the benefit of re-using iOS code.

Since we only have one developer on our team with Cocoa experience, it made more sense to opt for another solution (also given the fact that we didn’t find a satisfactory native option for Windows).

## Electron

[https://electron.atom.io/](https://electron.atom.io/)

The most successful current non-native stack for desktop app development world is to [use electron to build cross-platform desktop apps](https://github.com/sindresorhus/awesome-electron#apps).

**Pros:**

*   **D6** - The learning curve is not too steep as you are using javascript/node.js for most logic.
*   **D7** - Javascript is a technology that we are already familiar with.
*   **R6** - It has a **very** active community, is backed by GiHhub and has **many** real world, high profile, stories of apps using it (such as Slack, github desktop, atom, Brave).
*   **R1, R2, R3, R4, R5, R7, R8**
*   **D8, D1** - This approach will work for Windows, macOS and Linux. The javascript code base, if written carefully, can maybe be adapted to a browser use-case as well.
*   **D3**- Older versions of Windows are supported.

**Meh:**

*   **D9** - The look and feel is not particularly native, but you can style it in a way that doesn’t look horrible. In my experiments I found that it was possible to achieve an almost comparable look and feel to a native app without too much effort.

**Cons:**

*   Although not explicitly stated as a requirement, the size of the app is quite large. However, we do not consider this a good enough reason to discard this option (OONI Probe users already using a lot of bandwidth to run tests).

# Stack

Based on the considerations above in the **Technological selection**, we concluded that, for our use-case, the **[Electron](https://electron.atom.io/)** architecture makes the most sense.

The stack we decided to use based upon it includes:

*   [React](https://reactjs.org/): We alreadyhave experience using it and we have started implementing all our [UI components](https://github.com/OpenObservatory/design) using [styled-components](https://github.com/styled-components/styled-components).
*   [Next-electron](https://github.com/leo/electron-next): We are already familiar with next.js and has some real world use cases (example: [now-desktop](https://github.com/zeit/now-desktop)).
*   The logical choice for auto-update support in the Electron ecosystem is [Squirrel](https://github.com/Squirrel/Squirrel.Windows), which [works out of the box for macOS](https://github.com/electron/electron/blob/master/docs/api/auto-updater.md#macos) and can be made to work on [Windows with not too much effort](https://github.com/electron/electron/blob/master/docs/api/auto-updater.md#windows).
*   [Pkg](https://github.com/zeit/pkg) for building cross platform node.js executables.

# Architecture

![Architecture Chart](/post/writing-a-modern-cross-platform-desktop-app/Architecture.png)

While we are still consolidating the overall architecture of the desktop apps, our strawman architecture is the above.

The basic idea is that we are in the process of building [node.js bindings for Measurement Kit](http://github.com/measurement-kit/measurement-kit-node). OONI Probe CLI will depend on these bindings and the CLI interface will be used by the desktop app and the desktop app will communicate with it via an IPC channel.

The desktop app itself will be a react.js app (built with next.js) that will be
packaged with Electron.

We hope you have found this post useful, if you have further questions or suggestions on our development choices, we encourage you to subscribe to the [ooni-dev mailing list](https://lists.torproject.org/cgi-bin/mailman/listinfo/ooni-dev).
