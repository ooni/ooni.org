---
title: "Investigating Internet Blackouts from the Edge: OONI's new upcoming methodology"
author: "Maria Xynou, Leonid Evdokimov, Arturo Filastò"
date: "2018-04-04"
tags: ["blackouts"]
categories: ["blog"]
---

**The OONI team is creating a new methodology aimed at automatically
detecting and examining internet blackouts.** Learn all about our
methodology **[here](/documents/Investigating-Internet-Blackouts-Methodology-2018-03.pdf)**.

---------------------------------------------------------------------------------------------------------------------

Imagine a day where the internet is shut down completely. You have to
work, check the news, and communicate with your friends and family. All
of a sudden, you can’t do any of that, because there simply is no
internet. It feels like a strange form of time travel has taken place:
you’re thrown several decades into the past, into a world without
internet, but in one which has learned to heavily rely on it. And
sometimes, you remain in that world for several days (or
[months](https://qz.com/964927/caemroons-internet-shutdown-is-over-after-93-days/),
in the case of the anglophone region of Cameroon). None of this makes
sense, and there’s no clear justification for it either.

**This is the type of reality that millions of people around the world
experience every year, when an internet blackout takes place in their
region.**

Often, these internet blackouts occur alongside political events
(such as elections and protests). Last weekend, [network disruptions occurred in Sierra Leone](http://www.africanews.com/2018/04/01/why-sierra-leone-temporarily-shutdown-internet-after-runoff-vote/) amid the runoff elections. In The Gambia, the
internet was completely [shut down on the day of their 2016 general elections](/post/gambia-internet-shutdown/).
In Ethiopia, internet blackouts have been
[reported](/post/ethiopia-internet-shutdown-amidst-recent-protests/)
during a wave of political protests.

But internet blackouts are not limited to African countries. Most
internet blackouts have been [reported in India](https://www.internetshutdowns.in/), while many others have
occurred in [many other countries](https://www.accessnow.org/keepiton/) across the globe. An
entire movement, called the [KeepItOn campaign](https://www.accessnow.org/keepiton/), emerged in an attempt
to monitor, document, and respond to internet blackouts worldwide.
Thanks to their advocacy efforts, internet blackouts are part of public
debates and actions are being taken to urge governments to keep the
internet on.

**The main problem though with monitoring and responding to internet
blackouts is that it can be genuinely quite difficult to determine, with
accuracy, whether and how an internet blackout has actually occurred.**

Some internet blackouts may be politically-motivated, as a result of
government orders. Other internet blackouts may be accidental, as a
result of undersea cable cuts or network glitches. Maybe you can’t
access the internet due to a broken LAN switch or because
the network is simply overloaded. There are many reasons why you may not
be able to access the internet, and many of them probably have nothing
to do with governments intentionally shutting down the internet to serve
political interests.

Understanding *how* an internet blackout has occurred is a prerequisite
to understanding *why* it has occured. But how can we accurately track
and examine internet blackouts around the world?

The OONI team aims to address this problem through the creation of a new
methodology that investigates internet blackouts from the edge of the
network.

Thanks to our global community, [OONI Probe](/install/) is run on a daily basis in [around 200 countries](https://api.ooni.io/stats). Future versions of the OONI Probe
mobile apps will allow users to participate in internet blackout investigations.
More detailed information regarding the implementation of this methodology is
available in our **[Investigating Internet Blackouts document](/documents/Investigating-Internet-Blackouts-Methodology-2018-03.pdf)**, which we
encourage you to read.

Given that this would probably be the first methodology to attempt to
investigate internet blackouts from the edge of the network, it’s quite
experimental. We’d appreciate any feedback you can provide!
