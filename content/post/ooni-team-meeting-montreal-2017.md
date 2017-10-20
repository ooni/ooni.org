---
title: "OONI Team Meeting: Montreal 2017"
author: "Will Scott, Maria Xynou"
date: "2017-10-20"
tags: ["meeting"]
categories: ["blog"]
---

![OONI team meeting in Montreal](/post/montreal-meeting/ooni-team.jpg)

Last week, right before the [Tor meeting](https://trac.torproject.org/projects/tor/wiki/org/meetings/2017Montreal),
the OONI team gathered in Montreal for a 4-day meeting to reflect,
regroup, hack, and plan.

This post shares information from our meeting and future plans with the
broader community. All session notes are available on
[GitHub](https://github.com/OpenObservatory/gatherings/tree/master/internal/2017-10-montreal).


* [Summary: What OONI is working on](#summary-what-ooni-is-working-on)

* [Sessions](#sessions)

    * [Day 1 - 7th October 2017](#day-1-7th-october-2017)

    * [Day 2 - 8th October 2017](#day-2-8th-october-2017)

    * [Day 3 - 9th October 2017](#day-3-9th-october-2017)

    * [Day 4 - 10th October 2017](#day-4-10th-october-2017)

* [Meeting outcomes](#meeting-outcomes)


# Summary: What OONI is working on

We have our toes in many metaphorical pools. The major development
efforts underway include:

* **OONI Probe desktop apps for Windows and macOS:** Developing native desktop apps that are easy to install and run.

* **OONI Probe mobile apps:** Implementing new features based on community feedback, integrating more OONI Probe tests, and improving the design and usability.

* **Data analysis pipeline:** Improving our data analysis techniques to detect censorship events faster and more accurately.

* **Censorship Alert System:** Disseminating timely alerts of emergent censorship events worldwide based on OONI data.

* **Research reports:** Publishing research reports based on the analysis of OONI data.

* **Partnerships:** Expanding our collaboration with more groups and organizations around the world on the study of internet censorship.

* **Probe Orchestration:** Creating a feedback loop for follow-up measurements and for collecting data when emergent censorship events occur.

* **OONI Explorer:** Revamping [OONI Explorer](https://explorer.ooni.torproject.org/world/) to make it more usable by community members, data scientists, researchers, journalists, and policy makers.

* **Internet blackouts:** Creating the first methodology for the automatic detection and examination of internet blackouts around the world.

* **New censorship detection tests:** Designing and developing methodologies for deeper and more diverse testing of internet censorship.

# Sessions

Below we outline the sessions we held during our Montreal team meeting
and link to relevant notes.

## Day 1 - 7th October 2017

* **Session 1:** Time for reflection!

A stronger team makes a stronger project. This session included a
discussion of what worked well over the last year, and what didn’t.
Based on this discussion, we developed strategies for improving the
(horizontal) management of our project, intra-team collaboration, and
for re-distributing work among team members.

* **Session 2:** Building native OONI Probe apps for Windows and macOS

Over the next year, we will be developing native OONI Probe apps for
Windows and macOS. This session involved a discussion of the design and
development choices and next steps towards implementation. The session
notes are available
[here](https://github.com/OpenObservatory/gatherings/blob/master/internal/2017-10-montreal/ooniprobe-desktop-apps.md).

* **Session 3:** OONI Probe mobile apps: Feature requests & next steps

![Navigation flow](/post/montreal-meeting/mobile-apps.png)

Most of the global OONI community runs OONI Probe through our mobile
apps. This session involved a discussion of some of the next steps in
terms of feature requests and their implementation. The session notes
are available
[here](https://github.com/OpenObservatory/gatherings/blob/master/internal/2017-10-montreal/mobile-apps.md).

* **Session 4:** OONI Partnership Program: Next 2 years

Over the next 2 years, we aim to expand OONI’s network of partners to
work with many more organizations around the world on the study of
internet censorship. This means that we need to ensure that we are
better equipped to meet expanding community needs in terms of data
analysis, censorship measurement testing coordination, and report
writing, among other things. The session notes are available
[here](https://github.com/OpenObservatory/gatherings/blob/master/internal/2017-10-montreal/partnership-program.md).

## Day 2 - 8th October 2017

* **Session 1:** Revamping OONI Explorer

![Revamping OONI Explorer](/post/montreal-meeting/explorer.jpg)

No doubt, OONI Explorer needs to be revamped to be more useful to
community members. As part of this session, we discussed what the
“ideal” OONI Explorer would look like based on all the feedback that we
have collected from community members over the last year and we
discussed what’s required in terms of development and design. The
session notes are available
[here](https://github.com/OpenObservatory/gatherings/blob/master/internal/2017-10-montreal/revamping-ooni-explorer.md).

* **Session 2:** Revamping the OONI website

Our current website can be better presented to better engage
journalists, advocacy groups, and other new members of our community. As
part of this session, we brainstormed on the new information
architecture, design, and next steps towards implementation. The session
notes are available
[here](https://github.com/OpenObservatory/gatherings/blob/master/internal/2017-10-montreal/revamping-the-website.md).

* **Session 3:** Community needs and priorities

Through our partnership program, the [OONI Partner Gathering](https://ooni.torproject.org/post/ooni-partner-gathering-2017/),
and other community engagement activities, we have been receiving
feedback from community members on an ongoing basis. As part of this
session, we discussed some of the top, recurring community needs and
priorities that we have identified. We also discussed strategies and
development tasks for meeting those needs. The session notes are
available
[here](https://github.com/OpenObservatory/gatherings/blob/master/internal/2017-10-montreal/community-needs.md).

* **Session 4:** OONI data processing pipeline knowledge share

![Pipeline architecture](/post/montreal-meeting/pipeline.png)

Over the last year, OONI’s Leonid has been re-engineering our data
processing pipeline to analyze data faster and more accurately. As part
of this session, he shared his knowledge with the rest of the team.
Documentation from the knowledge share is available
[here](https://github.com/TheTorProject/ooni-pipeline/blob/master/Readme.md).

* **Session 5:** Creating a Censorship Alert System

![Censorship Alert System](/post/montreal-meeting/cas.jpg)

Over the next year we aim to create the first Censorship Alert System
which will disseminate timely alerts of emergent censorship events based
on OONI data. As part of this session, we discussed some of the next
steps (and the questions to consider) towards creating the prototype.
The session notes are available
[here](https://github.com/OpenObservatory/gatherings/blob/master/internal/2017-10-montreal/censorship-alert-system.md).

* **Session 6:** Detecting internet blackouts: Next steps

We also aim to create the first methodology for the automatic
examination and detection of internet blackouts around the world. As
part of this session, we discussed some of the next steps towards
designing and implementing this methodology, as well as foreseeable
challenges and ways to mitigate them. The session notes are available
[here](https://github.com/OpenObservatory/gatherings/blob/master/internal/2017-10-montreal/tracking-internet-blackouts.md).

## Day 3 - 9th October 2017

* **Session 1:** Probe Orchestration: Next steps

Over the last months we have been working on “Probe Orchestration”, the
instruction of OONI Probe tests (for cases where OONI Probe users have
opted-in). This can be particularly useful for collecting network
measurements when emergent censorship events occur around the world.
While Probe Orchestration has already been designed and developed, we’re
still addressing security questions, which we discussed as part of this
session. The session notes are available
[here](https://github.com/OpenObservatory/gatherings/blob/master/internal/2017-10-montreal/probe-orchestration.md).

* **Session 2:** Measurement-kit: Next steps

[Measurement-kit (MK)](https://github.com/measurement-kit) is the
network measurement library that powers OONI Probe mobile apps. We are
in the process of integrating more OONI Probe tests into MK and it will
provide support for OONI’s upcoming desktop apps. As part of this
session, we discussed all the new development tasks for MK over the next
year. The session notes are available
[here](https://github.com/OpenObservatory/gatherings/blob/master/internal/2017-10-montreal/measurement-kit.md).

* **Session 3:** The future of Lepidopter

[Lepidopter](https://ooni.torproject.org/install/lepidopter/) is an
OONI Probe distribution for Raspberry Pis that has been used by many of
our partners over the last year for the stable collection of
measurements. However, we have learned that shipping hardware can be
time-consuming, challenging, and expensive, without always leading to
the desired outcomes. As part of this session, we discussed questions
around continuing to maintain this distribution, as well as potential
next steps. The session notes are available
[here](https://github.com/OpenObservatory/gatherings/blob/master/internal/2017-10-montreal/the-future-of-lepidopter.md).

* **Session 4:** Roles and responsibilities

As part of this session, we discussed what each team member is most
passionate about, and what they found less enjoyable over the last year.
We subsequently mapped out and assigned roles and responsibilities among
team members for all the various moving components of the OONI project.
The aim of this session was to reflect on team members’ performance and
to ensure that responsibilities are reasonably distributed among team
members.

* **Session 5:** Avoiding Single Points of Failure (SPOF)

As a follow up to the previous session, we mapped out and identified
many of the SPOFs in terms of human resources, infrastructure, code,
etc. The aim of this session was to ensure that we have backup
strategies for most (if not all) components of our project.

* **Session 6:** What do you want OONI to be?

We are often overly consumed by that latest bug and striving to meet
tight deliverable deadlines. As part of this session, we stepped back
and tried to think about the big picture, together as a team. More
specifically, we discussed OONI’s mission, what we want to achieve in
the long-run, and what we should be doing to achieve those goals. The
session notes are available
[here](https://github.com/OpenObservatory/gatherings/blob/master/internal/2017-10-montreal/ooni-future.md).

## Day 4 - 10th October 2017

* **Session 1:** Grants

As part of this session, we discussed current grants that support OONI’s
work, as well as the deliverables assigned to them. We also brainstormed
on all the other things we want to be working on, but don’t currently
have funding for (and mapped out relevant potential funders).

* **Session 2:** New censorship testing methodologies

We discussed the limitations to current OONI Probe tests and all the
other questions that we would like to answer. Based on this, we
brainstormed on new censorship testing methodologies and [filed 15 tickets](https://github.com/measurement-kit/measurement-kit/issues?q=is%3Aissue+is%3Aopen+label%3A%22new+test%22).

* **Session 3:** Collaboration with Censored Planet

Will Scott, an Oonitarian and researcher with [Censored Planet](http://www.cs.princeton.edu/~rensafi/projects/Censored-Planet/),
joined our meeting and provided us an overview of the project’s next
steps. Based on this, we identified areas for collaboration on the study
of internet censorship. The session notes are available
[here](https://github.com/OpenObservatory/gatherings/blob/master/internal/2017-10-montreal/censored-planet.md).

* **Session 4:** Roadmap!

All of the previous sessions enabled us to gain a better understanding
of our goals and priorities over the next year, based on which we had a
two-hour road-mapping session for the next 12 months. We mapped out our
activities for each month and assigned team members.

* **Session 5:** Code hackathon: Deep-dive!

We spent the rest of the day hacking on OONI Probe and Measurement-Kit.

# Meeting outcomes

There were several concrete outcomes from the gathering, including:

* Detailed roadmap for the next 12 months.

* Assigning point people responsible for each track of deliverables, and mapping dependencies to make sure we understand the critical path for meeting goals.

* 15 bugs for "new testing methodologies" added to [Measurement-Kit](https://github.com/measurement-kit/measurement-kit/issues?q=is%3Aissue+is%3Aopen+label%3A%22new+test%22) as opportunities for collaboration, pulling in new contributors, and development.

* Progress on [Node bindings](https://github.com/measurement-kit/measurement-kit-node/tree/feature/base-tests) for Measurement-Kit as a basis for desktop applications.

* Scoping our planned Censorship Alert System, and clarifying our first step of extracting potential events as a new pipeline table for interactive analysis to better understand what events should be broadcast.

* Scoping the next steps for the development of the desktop apps, improvements to the mobile apps, and the methodology for examining internet blackouts.
