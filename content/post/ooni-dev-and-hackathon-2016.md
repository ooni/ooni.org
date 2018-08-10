---
title: "OONI-dev meeting and hackathon 2016"
author: "Maria Xynou"
date: "2016-11-22"
tags: ["events", "hackathon"]
categories: ["blog"]
---

Oonitarians are spread out across the globe, and OONI’s core team is no
exception. We recently met in Berlin to hack on [OONI’s software](https://github.com/TheTorProject/ooni-probe), work on our
roadmap, and to have all those discussions that are more fruitful to have in
person than on IRC. We also held a [hackathon](https://ooni.torproject.org/post/berlin-hackathon-2016/) to engage new individuals with our project!

Below we document some of the things that we worked on as part of our OONI-dev
meeting and hackathon.

* [OONI-dev meeting](#ooni-dev-meeting)

* [OONI Hackathon](#ooni-hackathon)

    * [Data analysis](#data-analysis)

    * [OONI's measurement API](#ooni-s-measurement-api)

    * [Web development](#web-development)

    * [Measurement-kit](#measurement-kit)

    * [OONI mobile](#ooni-mobile)

    * [Test lists](#test-lists)

    * [Running ooniprobe](#running-ooniprobe)

# OONI-dev meeting

OONI’s internal meeting was an opportunity for the project’s core team members
to meet in person, discuss priorities over the next months, and to adjust the
project’s roadmap accordingly. This meeting took place between Monday, 7th
November and Thursday, 10th November.

We started off by mapping all of the ideas, questions, and problems that we
wanted to collaboratively discuss and work on as part of the meeting. We then
proceeded with voting amongst us on the ones that we believed were of highest
priority, and subsequently creating sessions out of them.

As a result, we spent the first two days of the OONI-dev meeting having
discussions as part of the following **[six sessions](https://github.com/OpenObs
ervatory/gatherings/tree/master/internal/2016-11-berlin)**.

**Session 1:** [OONI Explorer user stories](https://github.com/OpenObservatory/gatherings/blob/master/internal/2016-11-berlin/explorer-users-stories.md).

**Session 2:** [Probe orchestration](https://github.com/OpenObservatory/gatherings/blob/master/internal/2016-11-berlin/session-ooni-orchestration.md).

**Session 3:** [PCAPs and throttling as a form of censorship as opposed to IP blocking](https://github.com/OpenObservatory/gatherings/blob/master/internal/2016-11-berlin/session-ip-blocking-vs-throttling.md).

**Session 4:** [UX design](https://github.com/OpenObservatory/gatherings/blob/master/internal/2016-11-berlin/session-ooni-gui.md).

**Session 5:** [The future of testing clients: How should we ship software to end users?](https://github.com/OpenObservatory/gatherings/blob/master/internal/2016-11-berlin/session-testing-clients.md)

**Session 6:** [OONI mobile client](https://github.com/OpenObservatory/gatherings/blob/master/internal/2016-11-berlin/session-ooni-mobile.md).

We then spent the third day working on our **roadmap** for the next six months,
adjusting it to the project’s needs and priorities based on the discussions from
the sessions of the previous days. During the fourth (and final) day of our
internal meeting we held smaller, ad hoc discussions based on the rest of the
ideas/questions/problems that were mapped out in the first day, and which didn’t
fit into any of the six core sessions of the first two days. We also spent the
last day of the internal meeting hacking on [ooniprobe](https://github.com/TheTorProject/ooni-probe) and [measurement-kit](https://github.com/measurement-kit/measurement-kit) (a
network measurement library that ooniprobe is being integrated in).

# OONI Hackathon

The [OONI hackathon](https://ooni.torproject.org/post/berlin-hackathon-2016/),
held at Berlin’s OnionSpace on 11th and 12th November, was an opportunity for us
to meet new people interested in engaging with our project. We were excited to
see that individuals with diverse skills and backgrounds showed up at the
hackathon, including data scientists, programmers, researchers, and activists
from various countries around the world.

Below is a summary of the things that we worked on as part of the two-day
hackathon.

## Data analysis

[OONI Explorer](https://explorer.ooni.torproject.org/) provides a web interface
to explore all of OONI’s network measurements. However, OONI’s data processing
[pipeline](https://github.com/TheTorProject/ooni-pipeline) still needs some
improvement to make OONI’s data more accessible and easier to navigate. As
such, we were thrilled to have data scientists join the hackathon and offer
suggestions on how to improve our data analysis techniques.

We discussed and defined queries for data analysis that can help improve the
next iteration of OONI’s pipeline. This included:

* Defining heuristics for separating “normal” from “anomalous” measurements as
part of OONI’s data processing;

* Filtering the web connectivity “anomalous” measurements based on the types of
anomalies (DNS, HTTP-diff, HTTP-failure, TCP/IP);

* Aggregating the sum of anomalies per measurement;

* Filtering measurements based on their testing frequency.

Furthermore, we discussed and implemented techniques for identifying and
filtering false positives that emerge in the measurements. As part of this, we
discussed ways to filter Cloudflare false positives, as well as techniques for
better identifying block pages within measurements. We also discussed a
methodology for detecting URLs that fail in the same way across measurements,
across time, and across countries, and filtering them as false positives.

## OONI's measurement API

In addition to [OONI Explorer](https://explorer.ooni.torproject.org/world/),
OONI’s network measurements are published in [JSON format](https://measurements.ooni.torproject.org/). One of our priorities though
is to also build an API to the measurements that enables data analysis, allowing
users to query the API to retrieve measurements based on certain characteristics
(to query, for example, all anomalous measurements).

As part of the hackathon, we continued our work on OONI’s new measurement API
and created a staging version of it.

## Web development

Several web developers joined the hackathon and we worked with them on the
following:

* **Restructuring the “[Tests](https://ooni.torproject.org/nettest/)” section of the website.** OONI has developed multiple
free software tests and this section of the website was created to not only list
them, but to also provide descriptions explaining what each test is designed to
do. As part of the hackathon, one of the participants [worked](https://github.com/TheTorProject/ooni-web/pull/87) on restructuring
this section of the website to improve the accessibility of the test
descriptions.

* **Improving upon the presentation of information on OONI’s home page.** Another
participant [worked](https://github.com/TheTorProject/ooni-web/pull/89) on fixing some bugs and restructuring the home page of OONI’s
website to make the flow of information more accessible.

* **Integrating a Frequently Asked Questions (FAQ) section on the website.** Having a
page on OONI’s website which addresses some of the questions that we frequently
get asked by community members is important. As part of the hackathon, we [worked](https://github.com/TheTorProject/ooni-web/pull/91)
on creating a FAQ section for OONI’s website. If any important questions are
missing in there, please don’t hesitate to [contact](https://ooni.torproject.org//about/) us.

## Measurement-kit

[Measurement-kit](https://github.com/measurement-kit/measurement-kit) is a
network measurement library that ooniprobe is gradually being integrated in. As
part of the hackathon, we worked on improving the DNS capabilities of
measurement-kit along the following lines:

* We [developed fixes](https://github.com/measurement-kit/measurement-kit/pull/915) for several issues that prevent the default, libevent-based DNS
engine from working correctly with IPv6 in certain cases;

* We started [integrating a new DNS engine](https://github.com/measurement-kit/measurement-kit/pull/918) that uses the system’s DNS functionality;

* We started [writing a new DNS engine](https://github.com/measurement-kit/measurement-kit/pull/920) based on the c-ares DNS library.

In addition, we also started implementing [support for cloud-fronted collectors in measurement-kit](https://github.com/measurement-kit/measurement-kit/pull/907) to allow users to submit the result of OONI measurements to
our servers through a cloud-based service (e.g. Amazon), thus masking the fact
that they are communicating with OONI servers. We also committed enhancements
and fixes to support the development of mobile applications based on
measurement-kit.

## OONI mobile

**Spoiler:** Over the next few months we will be releasing a mobile app (for Android
and iOS) for running ooniprobe! During the hackathon, we worked on improving the
design of [OONI’s mobile app](https://github.com/measurement-kit/ooniprobe-ios).

Here’s a sneak peak of OONI’s upcoming mobile app:

![OONI mobile](/post/berlin-hackathon/ooni-mobile.png)

*Screenshot: OONI mobile*

![OONI mobile testing a site](/post/berlin-hackathon/ooni-mobile-2.png)

*Screenshot: OONI mobile testing http://neubot.org*

## Test lists

An important part of identifying censorship is determining *which* websites to
examine for blocking.

OONI bases its testing on the [Citizen Lab’s test list Github repository](https://github.com/citizenlab/test-lists) which includes a wide
range of country-specific lists of URLs. These lists constantly need to be
updated with new URLs and, in many cases, new lists need to be created for
countries that don’t already have their own test lists.

We were happy to see that various participants joined the hackathon to help
contribute to existing test lists and to learn how to create new ones. As part
of the hackathon, participants worked on updating the [Palestinian test list](https://github.com/citizenlab/test-lists/pull/102) to include many new
URLs. We also prioritized on updating test lists for countries with upcoming
elections, such as the [test list for Gambia](https://github.com/citizenlab/test-lists/pull/99).

##  Running ooniprobe

Amongst the new faces that joined us at the hackathon, we were also happy to
meet people curious to learn about OONI and how to run ooniprobe. We discussed
OONI’s approaches and methodologies, and taught participants how to run various
[ooniprobe](https://github.com/TheTorProject/ooni-probe) software tests. As an
outcome, we hope that participants will share the skills and knowledge they
acquired through the hackathon with others too, and help increase transparency
on internet censorship around the world.

------------------------------------------------------------------------------------------------------------------------------

The OONI team would like to send a warm **thank you** to all the **participants** who
joined the hackathon, to the **OnionSpace** for sharing its space with us for a
week, and to the **Ford Foundation** for covering some of the OONI team’s travel
costs, thus making this meeting and hackathon possible.
