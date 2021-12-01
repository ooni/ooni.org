---
title: "[Event Report] India, Let's Build the List"
description: "This guest blog post shares information about a 2-day test list workshop facilitated in India by The Bachchao Project."
author: "The Bachchao Project"
date: "2021-12-01"
tags: ["ooni", "workshop", "india", "community", "test-list", "country-in"]
categories: ["blog"]
---

-----------------------------------------------------------------------------------------------------------

This is a **guest post by [The Bachchao Project](https://thebachchaoproject.org/)**, originally published
[here](https://thebachchaoproject.org/event-report-india-lets-build-the-list/).

--------------------------------------------------------------------------------------------------------------------------

The [Bachchao Project](https://thebachchaoproject.org/) in partnership with [OONI](https://ooni.org/) hosted an online event on 9th and
10th October 2021 to update the [Citizen Lab test list for India](https://github.com/citizenlab/test-lists/blob/master/lists/in.csv). The event,
which was called “India, Lets build the list”, was organised to help strengthen
community based monitoring of internet censorship in India. The event allowed
experts from different fields to contribute to a curated [list of websites](https://github.com/citizenlab/test-lists/blob/master/lists/in.csv) that
are relevant to India and which are regularly tested for censorship by
volunteers in India.

Censorship in India, specifically online, has been evolving steadily since the
notification of the Information Technology Act of of 2000 and its associated
rules. Though the Act itself offers multiple ways in which the Government can
remove content and/or block access to content (including shutting down internet
services), [very little data](https://scroll.in/article/953146/how-india-is-using-its-information-technology-act-to-arbitrarily-take-down-online-content) is available to confirm if due process is regularly
followed in these matters. This raises serious concerns about its impact on
Indian citizens’ right to freedom of expression and access to information.

While many such blocked sites may fall in the expected categories of illegal
streaming, adult content, file sharing etc., [research](https://ooni.org/documents/those-unspoken-thoughts-otf-fellow.pdf) has shown that
internet censorship in India also impacts a wide variety of other sites, such
as news media and human rights sites. This list building and monitoring activity
is therefore crucial for us as citizens and as a community of digtal rights
practioners to safeguard the essence of a free internet and uphold the rule of
law.

One free software project that aims to increase transparency of internet
censorship (and other forms of network interference) around the world is the [Open Observatory of Network Interface (OONI)](https://ooni.org/). To this end, the project builds [free and open source software](https://github.com/ooni) – called [OONI Probe](https://ooni.org/install/) – designed to measure various
forms of network interference.

A [recent study](https://ooni.org/documents/those-unspoken-thoughts-otf-fellow.pdf) used the OONI Probe testing software to measure the blocking of
websites in various states in India (such as Manipur and Bangalore) from
January 2019 to January 2020. It found that while 136 sites from the [Citizen Lab test list for India](https://github.com/citizenlab/test-lists/blob/master/lists/in.csv) were confirmed to be blocked, the major decrepancies in
access were between ISPs rather than between regions. A large number of media
outlets seemed to be targeted for blocking as well.

As of now, a relatively small community in India reviews and contributes to the
[Citizen Lab test list for India](https://github.com/citizenlab/test-lists/blob/master/lists/in.csv), which means that it’s entirely possible that
we are not looking at all the possible thematic areas in which website
censorship may be happening.

It therefore becomes essential that more people from varied backgrounds and
fields of interest support such open source testing for censorship. By
reviewing and contributing to the [Citizen Lab test list for India](https://github.com/citizenlab/test-lists/blob/master/lists/in.csv), you can
help ensure that a broad range of relevant websites are tested, and that the
censorship measurement data collected from the testing of these websites is
more comprehensive, robust, and timely. This will enable citizens to ask
important questions to lawmakers and even mount legal challenges when
necessary.

To this end, on Day 1 of our 2-day workshop, our [OONI](https://ooni.org/) partners facilitated a
session (“Introduction to Internet censorship”) which introduced participants
to key concepts around internet censorship and how website censorship is
implemented, with the goal of ultimately highlighting the importance of
contributing to the Citizen Lab lists of websites that are measured for
internet censorship. 

For the purposes of this workshop, the following forms of
censorship were kept out of our scope:

* Censorship on social media platforms
* Internet outages/blackouts/shutdowns
* Takedown requests
* Online trolling
* Self-censorship

We used these two days to specifically look at websites that may have been or
could be at risk of being blocked by Internet Service Providers (ISPs). The
group discussed the recent history of internet censorship specifically related
to blocking of sites under Section 69 (A) and Section 79 of the IT Act. We
also reviewed existing research and public advocacy efforts with regards to
internet censorship in India.

The concept of the Citizen Lab [Global Test List](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) and [India Test List](https://github.com/citizenlab/test-lists/blob/master/lists/in.csv), both hosted
on Github, was introduced to the group. These lists are compiled and maintained
as a voluntary global effort to monitor website censorship. The India test list
has over 600 URLs  which fall under many of the Citizen Lab’s [30 standardized categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv).

A review of this list showed that the list was not balanced in terms of URLs in
each category. The list also needed an update based on recent events in the
country. Our workshop was specifically aimed at rectifying this and making the
list more comprehensive & inclusive of the myriad concerns of citizens of our
country.

A few of the participants shared their own experience with state censorship and
their work on these issues. One of them presented a list that they had compiled
by testing for DNS hijacking of sites specifically on the ACT Fibernet. Another
participant found that many official government websites are not accessible to
people outside the nation and shared their own work on creating a proxy to
allow researchers and others to access Indian government websites from other
countries. Geo-blocking prevents archival by the Internet Archive, which many
researchers depend on. Participants also shared their experience of studying
the issue of internet access in conflict zones in India and that even though
access to the internet is recognized as a human right, it is often on the very
bottom of the priority list for communities who are facing very intense threats
on the ground. They also shared that being able to help these communities
understand that the role the internet can play in responding to some of the
other threats they face (and the tools to enable this, while foregrounding
their safety needs) had been a very positive, empowering experience for all
involved.

To end Day 1, we dove into the methodology of list building and list pruning
which was developed and presented to the group by our friends at
[Netallitica](https://netalitica.com/). This session was specifically aimed to prepare us for Day 2 during
which we (the organizers and the attendees) split into groups and co-worked on
updating the [India test list](https://github.com/citizenlab/test-lists/blob/master/lists/in.csv).

We started Day 2 with practical inputs on how to make changes to this list,
important points to remember so that anyone who looks at this list later to
test or to clean it understands what changes have been made and why. Our
partners from [OONI](https://ooni.org/) also showcased their [beta tool](https://test-lists.ooni.org/) which will make updating the
Citizen Lab test lists much easier (through a web platform, without requiring
GitHub accounts), once it’s launched.

A total of 10 participants split into two online co-working groups and selected
a single theme to work on for 30-minute hands-on sessions each. The
participants selected themes based on their area of knowledge and interest and
also on how much information the list for that theme already contained. The
focus was to make each theme list cover a wider base making it representative
of platforms/sources of information/interaction that are currently important
in our country.

In each group there were discussions to decide which sites need to be added
and/or removed, and how websites should be categorized. An important part of
this exercise was to ensure that we are including sites that cater to various
schools of thought so that the list is not skewed in its representation. This
is important to do so that we can measure censorship across the board and not
only of target sites that may be important to the world view of the people
building and testing these lists.

Day 2 of the workshop resulted in the following [changes](https://github.com/citizenlab/test-lists/pull/864) to the India test list:

| Category Code (Name)  | New URLs added | Updated toHTTPS | Moved to Global list | Recommended for deletion | Domain Updated | Category Updated |
|-----------------------|----------------|-----------------|----------------------|--------------------------|----------------|------------------|
| ECommerce             | 7              | 1               | 0                    | 3                        | 1              | 0                |
| LGBT                  | 15             | 0               | 0                    | 1                        | 0              | 0                |
| Human Rights          | 8              | 0               | 0                    | 0                        | 0              | 0                |
| Environment           | 31             | 1               | 0                    | 0                        | 0              | 1                |
| Public Health         | 26             | 1               | 0                    | 1                        | 0              | 0                |
| News Media            | 11             | 0               | 0                    | 0                        | 0              | 0                |
| Terrorism & Militancy | 0              | 0               | 0                    | 1                        | 0              | 0                |
| Culture               | 19             | 1               | 0                    | 0                        | 1              | 1                |
| Hate Speech           | 2              | 0               | 0                    | 0                        | 0              | 0                |
| Political Criticism   | 4              | 0               | 0                    | 1                        | 0              | 1                |
| Government            | 1              | 0               | 0                    | 0                        | 0              | 0                |
| Pornography           | 5              | 0               | 0                    | 0                        | 0              | 0                |
| Total                 | 129            | 4               | 0                    | 7                        | 2              | 3                |

The participants were able to significantly [add]
(https://github.com/citizenlab/test-lists/pull/864) to the categories of LGBT,
Environment, Culture and Public Health which were very sparsely polluted
earlier.

Accomplishing this took time and effort to ensure no sites were repeated, URLs
were added correctly, and that existing URLs in the list were still relevant.
Our workshop focused specifically on contributing new URLs and we did not
specifically set out to prune the existing list (though some of us took the
initiative to look at this aspect too).

At the end of workshop, we were enthused by the
amount of understanding built about the importance of community based
monitoring of internet censorship and a huge role that people from all walks of
like can (and in our opinion, should) play to help technologists and digital
rights advocates around the world to stand guard over a free internet.

We hope that this effort will give impetus to more people to engage in these
sort of open source list building and testing activities that will enable the
generation of in-depth and representative data on the true nature of the
internet that citizens in India get to experience.
