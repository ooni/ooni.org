---
categories: blog
title: "OONI Run Usability Study: Findings"
description: Report that shares the findings of the 2020 OONI Run usability study.
date: 2020-06-09T09:38:02.821Z
author: Maria Xynou
tags:
  - ooni-run
  - usability
  - ux
thumbnail: /images/uploads/dscf7168.jpg
enabletoc: true
---
![](/images/uploads/dscf7168.jpg)

[OONI Run](https://ooni.org/post/ooni-run/) is a platform ([launched](https://ooni.org/post/ooni-run/) in September 2017) that you can use to generate mobile deep links and widget code to coordinate [OONI Probe](https://ooni.org/install/) testing. To enable community members to more effectively use[ OONI Run](https://run.ooni.org/), we researched its limitations and collected structured community feedback through an [OONI Run usability study](https://ooni.org/post/2020-ooni-run-survey-and-interviews/).

This report outlines the objectives, personas, assumptions, and methods of this study.

We also share the outcomes based on the analysis of information collected through our [survey](https://ooni.typeform.com/to/r9c5ee) and interviews with community members, as well as some of the next steps towards improving OONI Run.

{{<table-of-contents>}}

# OONI Run usability study

![](/images/uploads/ooni-run.png)

## Objectives

The overarching objective of the [OONI Run](https://run.ooni.org/) usability study (conducted in April and May 2020) is to better support decentralized community efforts around the world in coordinating [OONI Probe](https://ooni.org/install/) censorship measurement efforts.

More specifically, through this usability study, we aim to improve our understanding of:

* Community **needs** with regards to coordinating and participating in censorship measurement campaigns;
* Challenges that community members have experienced when **generating and sharing OONI Run links** to coordinate censorship measurement campaigns (i.e. OONI Run testing coordinators);
* Challenges that community members have experienced when **receiving and using OONI Run links** (i.e. OONI Run testing participants);
* Challenges that community members experience when attempting to use the [OONI Run platform](https://run.ooni.org/) for the first time (inexperienced OONI Run users).

Based on community feedback collected through this usability study, we aim to release an improved version of [OONI Run](https://run.ooni.org/) that is more usable and useful to the internet freedom community, supporting the coordination of censorship measurement campaigns and promoting rapid response to emergent censorship events around the world.

## Personas

To meet the aforementioned objectives, this study involved the following 3 user personas:

1. **Measurement campaign coordinator.** Experienced [OONI Probe](https://ooni.org/install/) users who generate and share OONI Run links. This includes researchers, human rights defenders, journalists, and technologists who are part of the broader internet freedom community and who are long-term OONI Probe users. This persona has experience coordinating OONI Probe censorship measurement campaigns by generating and sharing [OONI Run](https://run.ooni.org/) links with other OONI Probe users, often leading up to and during political events (such as elections and protests).
2. **Measurement campaign volunteer.** [OONI Probe](https://ooni.org/install/) users who receive [OONI Run](https://run.ooni.org/) links (from measurement campaign coordinators) and participate in censorship measurement campaigns by running the tests and/or testing the URLs included in the shared OONI Run link(s). This persona may include individuals that participate in the broader internet freedom community, or who otherwise care about human rights.
3. **Internet freedom community member.** Researchers, human rights defenders, journalists, lawyers, and technologists who are part of the broader internet freedom community and who use [OONI Probe](https://ooni.org/install/) to measure internet censorship. They don’t have experience using [OONI Run](https://run.ooni.org/), but could potentially be interested in using OONI Run to generate and share custom links, or to receive OONI Run links to perform customized testing.

The main thing that the three user personas have in common is that they have all used [OONI Probe](https://ooni.org/install/) to measure internet censorship. The first two user personas participate in censorship measurement campaigns, whether by coordinating them or by participating in them as a volunteer. The third user persona includes individuals who have not participated in a censorship measurement campaign before, but may potentially be interested in doing so (which is why it’s important to collect their feedback too).

## Assumptions

We started off by taking note of the assumptions we have around the challenges that users currently face when using the [OONI Run](https://run.ooni.org/) platform. By being aware of these assumptions we are able to validate if they are true and, more importantly, challenge them to learn if they are misguided.

Based on past community feedback, the main challenges that we suspect [OONI Run](https://run.ooni.org/) users face are the following:

1. Issues related to sharing OONI Run links due to their length;
2. Issues related to triggering the mobile app deep link and opening the OONI Probe mobile app;
3. Issues related to OONI Run links breaking or getting mangled by specific messaging clients;
4. Tracking and accessing the measurements collected by measurement campaign volunteers.

In addition the the above, we also have the following assumptions:

* It may not always be clear to OONI Probe users what OONI Run is and what its relationship with OONI Probe is;
* OONI Probe users don’t frequently use the performance and middlebox tests in OONI Run (they mainly use OONI Run to test websites);
* OONI Probe users don’t frequently use OONI Run to generate and use custom widget code (it may be unclear how to use the generated widget code);
* OONI Run users may not always be aware of the benefit of contributing tested URLs to the [Citizen Lab test lists](https://github.com/citizenlab/test-lists) (or how to contribute URLs to these test lists);
* It may not always be clear that OONI Run is (currently) only meant to be used on mobile platforms.

Over the last years, we mainly received feedback from experienced OONI Probe users who used OONI Run to generate and share links.

As part of this study, our aim was to improve our understanding of the challenges that they encounter, and to receive feedback from OONI Probe users who make use of OONI Run links as well. We also aimed to better understand the needs of OONI Probe users who have not necessarily used OONI Run yet (but who could be interested in using the platform), and to understand what challenges they encounter (if any) in using the platform.

## Methods

Between 23rd April 2020 to 15th May 2020, we conducted an OONI Run usability study with community members to explore the limitations to the current [OONI Run](https://run.ooni.org/) link format and collect community feedback for improvement.

This study involved the following two methods:

* **Survey.** Through a [survey that we published](https://ooni.typeform.com/to/r9c5ee) and circulated to our community, our goal was to collect information on community needs, challenges, and feedback for the improvement of OONI Run. The survey was primarily meant to be completed by people with experience using OONI Run, as the questions are platform-specific and require prior use of the tool. As we[ promoted the survey](https://ooni.org/post/2020-ooni-run-survey-and-interviews/) through our social media channels and on our website, our goal was to reach OONI Run users whose feedback we hadn’t received before.
* **Interviews.** Through interviews with community members (that fall under the 3 user personas described previously), we aimed to collect more in-depth qualitative information to better understand their needs, challenges, and feedback for the improvement of OONI Run. The interviews also provided us an opportunity to observe how participants interact with the OONI Run platform and therefore gain a deeper understanding of the challenges and needs associated with using the tool.

Once we concluded the interviews on 15th May 2020, we analyzed the information collected from both the interviews and survey responses. The findings and next steps are documented below.

# Findings

## Survey

Unlike the OONI Probe mobile app (which is widely used by tens of thousands of users in more than 200 countries every month), OONI Run appears to have a much smaller user base. This is suggested by the fact that our [previous survey](https://ooni.typeform.com/to/a1P0cn) for the revamp of the OONI Probe mobile app received 287 responses, whereas our recent [OONI Run survey](https://ooni.typeform.com/to/r9c5ee) only received 30 complete responses.

The following factors though need to be taken into consideration:

* **Audiences.** The OONI Probe mobile app is widely used by diverse audiences (possibly even by people who are just interested in its speed test, expanding beyond the internet freedom community), while OONI Run is a tool that is primarily meant to be used by people (e.g. activists) interested in coordinating censorship measurement campaigns. The target audience of OONI Run is therefore far more narrow than that of OONI Probe. This is also why we sent push notifications to share the OONI Probe mobile app survey, but refrained from doing so with the OONI Run survey.
* **Functionality.** The OONI Probe mobile app includes a variety of censorship measurement and performance tests, and users can access the test results in the app. OONI Run, on the other hand, has limited functionality: it only creates mobile deep links and widget code (which are used with OONI Probe).
* **Survey questions.** Our previous [OONI Probe mobile app survey](https://ooni.typeform.com/to/a1P0cn) consisted of questions that were broad enough that anyone with any level of OONI Probe experience could probably respond with relative ease. Our [OONI Run survey](https://ooni.typeform.com/to/r9c5ee), on the other hand, consisted of specialized and platform-specific questions that required prior experience with [OONI Run](https://run.ooni.org/) (either as a measurement campaign coordinator or volunteer). In other words, most OONI Probe users probably couldn’t complete this survey. This is evident by the fact that 86 people started the survey, but only 30 completed it, with the highest drop-off rate being at the first question that was platform-specific (and made it clear that previous experience with OONI Run was essential to complete the survey).
* **Survey length.** As our [OONI Probe mobile app survey](https://ooni.typeform.com/to/a1P0cn) was geared towards a broad audience and we were optimizing for receiving as many responses as possible, we only included 7 questions in the survey. In our [OONI Run survey](https://ooni.typeform.com/to/r9c5ee), on the other hand, we tried to collect as much platform-specific quantitative information as possible, which is why we included 18 questions in the survey (many of which were multiple-choice). This, however, meant that completing the OONI Run survey required a longer time commitment (in comparison to our OONI Probe mobile app survey).

Our [OONI Run survey](https://ooni.typeform.com/to/r9c5ee) was therefore primarily completed by community members with both experience and interest in using [OONI Run](https://run.ooni.org/). We summarize the survey findings below.

### OONI Run usage: Overview

Most survey respondents (60%) reported that they have **primarily used OONI Run to generate and share OONI Run links**, as well as to **tap on an OONI Run button** to perform testing. A smaller percentage (40%) reported having received an OONI Run link from others to perform coordinated testing, while only 20% of participants reported having used OONI Run for the purpose of generating an OONI Run button.

When asked how frequently they use OONI Run, 33.3% of survey respondents reported having **used OONI Run only a few times per year**, while 26.7% of respondents reported using OONI Run a few times per month. Only 10% of participants reported that they use OONI Run daily or weekly.

The vast majority (76.7%) of survey respondents reported that their **primary reason for using OONI Run is to measure the blocking of websites**, while less than 30% of the participants reported that they use the platform to run the other available tests (only 26.7% of participants reported using OONI Run for the middlebox tests, while only 20% reported using the performance tests).

**Monitoring internet censorship during political events** appears to be an important motivation for using OONI Run, as reported by more than half of the survey participants (53.3%).

Many participants also reported that they use OONI Run to:

* Collect evidence once specific websites are reported blocked (46.7% of responses);
* Check whether inaccessible websites are in fact blocked (43.3% of responses);
* Collect measurements from different regions and networks (40% of responses).

### Sharing (and receiving) OONI Run links

**Website testing appears to be the primary reason** why OONI Run is used, as most survey respondents (53.3%) reported that they have generated and shared an OONI Run link for the testing of websites.

When asked whether they have generated and shared an OONI Run link based on the speed and performance tests, 80% of respondents said that they have not. Similarly, 86.7% of respondents said that they have never used OONI Run to generate and share an OONI Run link based on the middlebox tests. When asked whether they have found it useful to generate OONI Run links based on the middlebox and performance tests, none of the 30 survey respondents provided an answer.

The platforms that were reportedly used to share and/or receive OONI Run links include email, Twitter, WhatsApp, Telegram, Facebook Messenger, Slack, IRC, Matrix, and online forums, with most (50%) reporting that they **used email to share/receive OONI Run links**.

Most respondents (33.3%) reported using OONI Run to **generate links for the testing of 4-20 URLs**. Quite similarly, many reported using OONI Run to generate links for the testing of 1-3 URLs (26.7% of respondents) and for the testing of 21-50 URLs (23.3% of respondents). Meanwhile, only 10% of respondents reported using OONI Run to generate links for the testing of more than 50 URLs, and only 6.7% for the testing of more than 500 URLs. This suggests that OONI Run is **primarily used for the testing of relatively short lists of URLs**. However, it is possible that OONI Run is primarily used for the testing of shorter lists of URLs due to UI challenges associated with adding long lists of URLs (an issue expressed by multiple interview participants, as well as survey respondents, as discussed further in the next sections), rather than lack of interest in testing long lists of URLs.

When asked whether they have ever added the URLs that they have tested with OONI Run to the [Citizen Lab test lists](https://github.com/citizenlab/test-lists), the vast majority of survey participants (70%) responded that they have not. Out of these respondents, many reported that they **don’t know how to add URLs to the Citizen Lab test lists** and some reported that they find this process too complicated. Some of the respondents reported that they **didn’t know what the Citizen Lab test lists are**, and that they didn’t know they should contribute the URLs they were testing (with OONI Run) to the Citizen Lab test lists.

### Challenges associated with using OONI Run links

Our survey provided an open-ended question that encouraged participants to describe the challenges they encountered in using OONI Run links.

Several respondents reported that when they include many URLs for testing, the generated **OONI Run links are far too long** to share. They reported that these long OONI Run links **break when shared through various messaging platforms**, and that **some messaging platforms have a character limit** that prevents sharing very long OONI Run links. As a result, OONI Run users have had to generate shorter OONI Run links based on shorter lists of URLs. However, having to coordinate testing based on multiple OONI Run links is reportedly more complicated (than coordinating testing based on a single OONI Run link), particularly since it results in unequal measurement coverage.

Furthermore, a few respondents mentioned that the process of adding URLs to the OONI Run platform (i.e. typing URLs in the URL slots) can be **slow and sluggish**, as it can take a few seconds before the typed letters appear in the URL slots. They also reported that they **expected OONI Run to serve as a browser-based version of OONI Probe**, and that they were disappointed and confused when they weren’t able to run tests and receive test results through the platform. This suggests that the purpose and functionality of OONI Run (i.e. to generate mobile deep links and widget code) is not clearly communicated through the platform.

A few survey participants also mentioned that when coordinating censorship measurement campaigns, another challenge is associated with **users reporting errors when tapping/clicking on the OONI Run links** that they receive. As a result, the censorship measurement coordinators need to invest time in trouble-shooting, which often is challenging to do remotely.

Another reported challenge is associated with the **requirement of having the OONI Probe mobile app installed**. Many respondents mentioned that the people that they share OONI Run links with often don’t have OONI Probe already installed, and that requesting them to install the app can be a challenge. Furthermore, the requirement of having to explain OONI Probe (and all other relevant information) in order to convince people to install the app was also reported as a challenge. This, reportedly, is especially challenging when social media platforms are blocked, limiting the ability to share links and encourage app installation.

### Challenges associated with using OONI Run buttons

Our survey provided an open-ended question that encouraged participants to describe the challenges they encountered in using OONI Run buttons.

Most survey respondents did not report having extensive experience using OONI Run to generate widget code. Out of those who shared feedback on this, the main issue that they reported was **not having an easy and quick way to update the list(s) of URLs included in OONI Run buttons** that they create. They expressed the need to be able to quickly and easily update OONI Run buttons, by easily viewing and editing the included URLs.

Similarly to the challenges expressed with using OONI Run links, some of the survey respondents mentioned that **requiring people to have OONI Probe installed** (in order to be able to make use of the OONI Run buttons) is a challenge. Others mentioned that **embedding OONI Run buttons based on a long list of URLs is a challenge** as well, as the large length of such widget code is not always easily supported by various websites.

Other survey respondents reported not having faced any issues and that they find the process of generating and using OONI Run buttons “simple and straightforward”.

### Overall: Challenges associated with using OONI Run

At the end of our survey, we provided an open-ended question that encouraged participants to describe what they find most challenging about OONI Run (overall).

Many of the same challenges (previously discussed) were reiterated in these answers, as summarized below:

* **Generated OONI Run links can be far too long** (and people who are not already familiar with OONI -- and the concept of mobile deep links -- may feel uncomfortable tapping on such a strange and long link);
* **Long OONI Run links break** when shared through various messaging platforms;
* Some platforms have a character limit, preventing the sharing of long OONI Run links;
* **Not being able to easily and quickly edit the URLs** included in generated OONI Run links and buttons is a reported challenge;
* **Remembering to re-run OONI Run links/buttons**-- and having to constantly remind volunteers to re-run tests -- is a reported challenge;
* **Requiring OONI Probe installation** -- and using OONI Run links/buttons with OONI Probe -- is a challenge, because it can be hard to convince people to install the app;
* **Troubleshooting remotely with volunteers** when they are unable to use OONI Run links or buttons (for example, errors occur when they tap on the shared OONI Run link is challenging);
* **Tracking and aggregating the measurements (in one place) specifically collected by measurement campaign volunteers (based on specific OONI Run links)** is a challenge (and this is often required in real-time during political events);
* Unclear to new users why or how they should use OONI Run (the platform is not self-explanatory);
* Unclear what to do afterwards, once an OONI Run link or button has been generated.

### Suggestions for improving OONI Run

The last survey question asked participants to describe their “wish list” features for OONI Run.

The suggestions and feature requests provided by survey respondents are summarized below:

* **Shorten the OONI Run links** (and widget code) so that it’s easy to share them and test long lists of URLs (without links breaking or having to generate multiple OONI Run links);
* Add ability to **generate (and share) OONI Run links directly through the OONI Probe mobile app** (rather than through a separate platform);
* Ability to **easily and quickly edit the URLs** included in generated OONI Run links and buttons;
* Add ability to **generate a (short) OONI Run link based on all tests** (rather than having to generate separate OONI Run links for each test);
* Add ability to **track and aggregate all measurements collected by measurement campaign volunteers** (based on the use of specific OONI Run links) in one place (rather than having to search for relevant measurements through OONI Explorer -- without knowing if those measurements were collected by the volunteers of a specific campaign of not);
* Add ability to easily **export/retrieve measurements generated from a specific OONI Run link** (as part of a campaign);
* Enable users to **easily add URLs (included in OONI Run links/buttons) to the Citizen Lab test lists** (ideally, without having to use GitHub) and explain and remind them (within the OONI Run platform) of the need to do so;
* Add support for **automatically adding URLs (included in generated OONI Run links/buttons) to the Citizen Lab test lists** (without requiring the time and effort of users);
* **Add Instant Messaging tests** (and other missing OONI Probe tests) to the OONI Run platform (to more easily coordinate the testing of social media apps);
* Enable the easy/quick **generation of OONI Run links/buttons based on social media websites and apps** (since they are frequently blocked around the world and require coordinated testing the most);
* Enable the easy/quick **generation of OONI Run links/buttons based on the Citizen Lab test lists**;
* Enable the easy/quick **generation of OONI Run links/buttons based on specific categories** (for example, using the Citizen Lab category codes and test lists);
* Make **estimate runtime** in OONI Probe mobile app more predictable (to set expectations for volunteers in measurement campaigns);
* Add support for **running OONI Run links on OONI Probe desktop and probe-cli**;
* Add ability to **share generated OONI Run links with testers directly through the OONI Run platform** (rather than having to use email or other messaging services);
* Enable testers to **re-run OONI Run links** (and provide reminders);
* **Localize the OONI Run platform** (i.e. support more languages, other than English);
* Provide a **visual guide** (such as a screencast) explaining what OONI Run is, what it’s for, how they can use it, and what they should expect from it (for new users) ;
* Link to a **FAQ section** (inside the OONI Run platform) answering questions around using OONI Run (for example, what to do when encountering an error);
* Provide a **guide which includes step-by-step instructions** (with screenshots), explaining how to use OONI Run;
* Provide **documentation that contextualizes OONI Run** and which shares examples of how other community members use it as part of campaigns and advocacy efforts;
* Once a link/button has been generated, provide a message communicating next steps and expectations to users (for example, “Thank you for generating a link. Please share it via email with other OONI Probe users. You can now close this page. The results will be published on OONI Explorer once the link is used.”)
* Provide examples of URLs in the OONI Run platform so that new users can better understand what they’re supposed to do;
* Add test for HTTPS middlebox detection (man-in-the-middle-attacks);
* Provide ability to generate OONI Run links from offline resources/services;
* Provide more detailed information about blocked websites (inside the OONI Probe apps);
* Enable users to see which websites are also blocked in neighboring counties;
* Enable users to measure online censorship on social media platforms.

## Interviews

As part of our OONI Run usability study, we interviewed 16 community members to collect more in-depth feedback.

The interview participants included experienced OONI Run users (measurement campaign coordinators and volunteers), as well as internet freedom community members who use [OONI Probe](https://ooni.org/install/) to measure internet censorship, but who have not used [OONI Run](https://run.ooni.org/) before.

As these different user personas have different experiences (or lack thereof) with OONI Run, we prepared separate interview questions for each group. In all cases, the second part of the interviews (following a set of more high-level questions) involved hands-on use of the OONI Run platform, so that we could observe the challenges and needs associated with using the tool in practice.

In the following sections, we share the feedback provided during the interviews by measurement campaign coordinators and volunteers (i.e. experienced OONI Run users) and more general internet freedom community members.

### Measurement campaign coordinators and volunteers

Through the interviews with measurement campaign coordinators and volunteers, our goal was to better understand their needs and the specific challenges that they have encountered when using OONI Run.

As part of this study, we interviewed 9 measurement campaign coordinators and volunteers, most of whom have extensive and long-term experience running measurement campaigns with large groups of volunteers.

During the interviews, we started off by asking the following questions:

* What are your primary reasons for using OONI Run?
* What has been the most rewarding outcome of using OONI Run?
* What has been your biggest challenge with OONI Run?

Through these questions, we aimed to introduce participants to the study, learn more about their goals, motivations, and expectations around using OONI Run, how OONI Run has been useful to them so far, and what is the biggest challenge they have encountered with using OONI Run (that stands out in their memory, without interacting with the platform).

The second part of the interview was more hands-on. We requested participants to access the OONI Run website (run.ooni.io) and share their screen with us, so that we could observe how they interact with the platform in practice. We asked participants to show us how they go about using the platform, during which we asked the following questions:

* How do you use OONI Run to generate or open a link?
* How do you add URLs to the OONI Run platform in order to generate a link?
* Which platforms do you use to share or receive OONI Run links?
* What challenges have you faced when sharing or opening OONI Run links?
* Have you ever generated and/or made use of an OONI Run button? Why/Why not?
* Have you ever generated and/or used OONI Run links or buttons based on other OONI Probe tests, beyond website testing (for example, middlebox tests)? If so, how did you find it useful?
* Do you have any suggestions for improving OONI Run?
* What is the “dream feature” you would like to see in the next version of OONI Run?

In the following sections, we share the main interview findings around OONI Run usage, associated challenges, and suggestions for improvement.

#### OONI Run usage

When asked what are their **primary reasons** for using OONI Run, the interview participants shared (in summary) that they use OONI Run to:

* Monitor the blocking of websites during political events (such as elections or protests) and other time-sensitive events;
* Test URLs that are not already included in the [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists);
* Test a long custom list of URLs (that otherwise would have to be tested manually by inserting one URL at a time through the[ OONI Probe mobile app](https://ooni.org/install/mobile));
* Test specific categories of websites (e.g. LGBTQI sites);
* Collect measurements once specific websites are reported blocked;
* Monitor specific websites which could potentially get blocked (for example, due to their sensitive political content);
* Check whether inaccessible websites are in fact blocked;
* Examine and compare the blocking of specific websites across different networks and regions within a country;
* Coordinate the testing of websites in foreign countries, regions, and networks;
* Collect larger volume of measurements from more vantage points;
* Discover the blocking of websites (in the absence of an official blocklist);
* Collect evidence when governments deny internet censorship.

All participants mentioned that they almost always use OONI Run solely for the purpose of testing websites (though the Web Connectivity test), and that they rarely (if ever) use OONI Run to coordinate testing based on the other available tests. They explained that this is partly due to the fact that their research interests center more around website censorship, but also because the other tests are already included in the OONI Probe mobile app (and since OONI Run links require use of the app anyway, they usually just ask volunteers to run the tests directly inside the app). While several participants mentioned that they have made use of widget code generated through OONI Run, they primarily use OONI Run for its mobile deep links.

When asked what has been the most **rewarding outcome** of using OONI Run, interview participants mentioned that OONI Run has been particularly helpful with **rapid response**, enabling them to coordinate the testing of specific websites and gain access to relevant measurements quickly. Several interview participants elaborated how OONI Run has helped them collect evidence of internet censorship during time-sensitive events, such as during a temporary 2-hour block, or during political events, such as elections and protests.

Evidence of internet censorship, collected through OONI Run campaigns, has **supported journalistic reporting and advocacy efforts**. Some interviewees mentioned that collecting measurements that can potentially serve as evidence of internet censorship -- especially when it is being denied by governments -- has helped inform their advocacy work.

Several interview participants mentioned that, for them, the most rewarding outcome has been being able to **create a country-wide censorship measurement system**, through the use of OONI Run. This has been possible because OONI Run enabled them to **monitor the blocking of websites across different regions and networks** in somewhat real-time, with the help of volunteers. OONI Run has also helped increase relevant measurement coverage (across network and regions), providing more conclusive results and stronger evidence (for the broader internet freedom community, since all measurements are [openly published](https://ooni.org/data/)).

As participants interacted with the OONI Run platform during the interview, they said that they add URLs either by manually typing each URL (usually only when it involves a few websites), or by copy-pasting their own (longer) list of URLs from a text editor, Excel file, or Google spreadsheet.

Interestingly, when some participants manually typed URLs in the OONI Run website during the interview (while they shared their screen with us), we noticed that they ***accidentally mistyped the URL, didn’t notice the error, but proceeded to generate an OONI Run link anyway***. The fact that even experienced OONI Run users run the risk of generating (and sharing) OONI Run links based on broken URLs -- due to the limitations of the OONI Run platform -- highlights the need to improve the platform in such a way that such errors are more easily noticeable or avoidable.

Most participants mentioned that they ***primarily share OONI Run links via email***, because email clients are more reliable than instant messaging apps in terms of not breaking long OONI Run links. In other cases (particularly when they aim to reach larger audiences), they share OONI Run links using Twitter, Facebook, WhatsApp, Facebook Messenger, Telegram, and Signal. Some participants also mentioned that they sometimes embed OONI Run widget code into their website, as they find it easier to point volunteers to a button on a website, than to share incredibly long OONI Run links.

#### Challenges

Interview participants (who are experienced [OONI Run](https://run.ooni.org/) users) shared that they have encountered the following challenges when using the OONI Run platform:

* **Long OONI Run links break when shared (and forwarded) on instant messaging platforms.** This challenge was expressed by almost all interview participants. They mentioned that messaging apps, such as Telegram, Signal, WhatsApp, and Facebook Messenger, break long OONI Run links (by cutting part of them). They also mentioned that OONI Run links break when shared on IRC. All participants, however, mentioned that OONI Run links have never broken when shared via email, and that email clients serve as their most reliable option for sharing long OONI Run links.
* **Coordinating the testing of multiple (shorter) OONI Run links.** As a result of long OONI Run links breaking, many interview participants mentioned that they have had to generate and share multiple short OONI Run links instead. However, coordinating testing based on multiple links (as opposed to one), and ensuring that all links are tested equally and frequently, is a challenge. This then resulted in unequal or limited measurement coverage.
* **OONI Run website lags.** Several interview participants mentioned that the OONI Run website (run.ooni.io) lags and that they find the process of typing URLs into the URL slots slow and sluggish. More specifically, they mentioned that there is a delay between typing and the typed letters being displayed in the URL slots of the OONI Run website.
* **Double HTTP prefix.** Participants mentioned that when they paste a URL (that already has the HTTP or HTTPS prefix), the existing HTTP prefix in the OONI Run URL slot is not automatically removed, leading to the presence of two HTTP prefixes. Unless an OONI Run user notices and fixes this (by manually deleting the extra “HTTP”), they may proceed with generating an OONI Run link based on a broken URL.
* **Unclear how to test a long list of URLs.** While most interview participants knew that they could copy-paste a long list of URLs into the OONI Run platform, some interview participants were not aware of this feature. Understandably so though, given that this feature was never officially supported, and only added as a “quick fix” when community members expressed the need to be able to quickly and easily test a long list of URLs. As a result, some interview participants expressed the challenge of having to do the tedious task of manually typing each URL one by one, every time they wanted to coordinate the testing of a long list of websites.
* **Copying long OONI Run links.** A few interview participants mentioned that even the process of merely copying a long OONI Run link (once generated through the pop-up window in the OONI Run website) can be challenging. The longer the generated OONI Run link, the more the platform lags, and the harder it is to copy the generated link and share it.
* **Empty URL slots created when copy-pasting URLs.** Several participants mentioned that when they copy-paste URLs into the URL slots of OONI Run, empty lines are created between the URLs, which they manually have to delete before clicking the “Generate” button. Some participants mentioned that these empty lines usually occur when they copy URLs from a spreadsheet (and there’s an extra space after each URL in the spreadsheet).
* **Editing long custom lists of URLs.** Several participants mentioned that during measurement campaigns, they often need to make changes to their OONI Run links and add and/or remove certain URLs. However, OONI Run does not provide a way to save custom lists of URLs in order to be able to go back and easily make changes and generate new OONI Run links.
* **Requirement to have the OONI Probe mobile app installed.** Many interview participants mentioned that requiring volunteers to have the [OONI Probe mobile app](https://ooni.org/install/mobile) installed, as a prerequisite to using OONI Run links, was a challenge -- particularly when volunteers don’t have an incentive to use OONI Probe in the long term, and/or when they have limited app space in their phones.
* **Getting volunteers to use OONI Run links, once they have installed the OONI Probe mobile app.** An interview participant with long-term and extensive experience coordinating censorship measurement campaigns (through the use of OONI Run), mentioned that once volunteers install OONI Probe, they often proceed with running the [Web Connectivity test](https://ooni.org/nettest/web-connectivity/) inside the app (and sharing those results), without making use of the shared OONI Run link.
* **Opening OONI Run links with a browser, instead of with the OONI Probe mobile app.** Several interview participants mentioned that once volunteers receive OONI Run links, they often open them in a web browser (instead of with the OONI Probe mobile app), as they may be unfamiliar with the concept of a mobile deep link. When attempting to open an OONI Run link with a browser, it’s unclear to volunteers why it does not work.
* **Accessing an OONI Run link from a desktop browser.** When accessing an OONI Run link from a desktop browser, it says that OONI Probe needs to be installed. However, some interview participants mentioned that they had the [OONI Probe desktop app](https://ooni.org/install/desktop) installed (in addition to the OONI Probe mobile app), and that they found it confusing that they were asked to install OONI Probe nonetheless (as a requirement to using the OONI Run link). In short, participants highlighted that, when accessing an OONI Run link from a desktop browser, it is unclear that OONI Run links are only meant to be used on mobile (with the OONI Probe mobile app).
* **Encountering errors when attempting to open an OONI Run link.** A few interview participants mentioned that when they coordinated censorship measurement campaigns, volunteers reported that they encountered 500 error pages when attempting to open and use OONI Run links. This added the extra challenge of having to troubleshoot with volunteers remotely.
* **Encountering errors when attempting to use an OONI Run button.** When generating an OONI Run button based on a long list of URLs, volunteers reported that they encountered an error message when attempting to use the button and that it didn’t work.
* **Runtime too long.** Several interview participants mentioned that when coordinating censorship measurement campaigns, many volunteers complained that running the tests takes too long.
* **Lack of runtime estimate.** Measurement campaign volunteers also mentioned that since the OONI Run link doesn’t provide an estimate of how long the testing is expected to last, they can’t plan their movements accordingly (for example, they may be forced to keep their phone connected to a specific network for many hours, without knowing when the testing will end).
* **Long-running tests timeout.** But even when measurement campaign volunteers do decide to patiently wait until long-running tests end, these tests sometimes timeout in the end (without rendering any useful measurements).
* **Tracking, aggregating, and accessing all measurements collected during a censorship measurement campaign.** Many participants mentioned that their biggest challenge associated with using OONI Run is gaining access to all measurements collected by volunteers using a specific OONI Run link that they share. Measurements are openly published on [OONI Explorer](https://explorer.ooni.org/), but it can be hard to identify and access measurements that are specifically collected as part of their measurement campaign (through the use of the specific OONI Run link that they created). This makes real-time access and analysis of relevant measurements, and rapid response to emergent censorship events, challenging.
* **Finding relevant measurements through OONI Explorer.** A few interview participants mentioned that, while the [next generation OONI Explorer](https://ooni.org/post/next-generation-ooni-explorer/) is much easier to use than the previous version, they still find it quite hard to find measurements through OONI Explorer. Specifically, they mentioned that OONI Explorer queries often lead to errors, making it hard to find relevant measurements during/after a campaign.

Out of all of these challenges, those that were highlighted the most (as the biggest challenges) include the issues associated with long OONI Run links breaking and not having an easy way to track, identify, aggregate, and access relevant measurements during a censorship measurement campaign.

#### Suggestions and “dream features”

Based on their experience using OONI Run, interview participants offered many detailed suggestions for the improvement of the platform.

These include:

* **Shorten the length of OONI Run links.** To avoid the plethora of challenges encountered with generating, copying, sharing, and forwarding long OONI Run links (as discussed previously), the foremost suggestion that all interview participants unanimously proposed is to shorten the length of OONI Run links.
* **Make it clear that it’s important to specify the HTTP or HTTPS prefix.** Currently, the URL slots in the OONI Run platform include the HTTP prefix, but to new users, it may not be clear/obvious that they should manually change the prefix to HTTPS (if that is what is supported for the website they want to test).
* **Prevent the generation of an OONI Run link/button based on a domain.** Even though there is a warning (that URLs should include the HTTP or HTTPS prefix to be valid), users may still delete the HTTP prefix and generate an OONI Run link based on a domain nonetheless (leading to inaccurate testing).
* **Fix HTTP prefix bug.** When pasting a URL (that already has the HTTP or HTTPS prefix), the existing HTTP prefix in the OONI Run URL slot should automatically be removed/deleted to avoid the presence of two HTTP prefixes (and the testing of a broken URL).
* **Flag errors when URLs are mistyped.** Several interview participants mentioned that they sometimes accidentally mistyped URLs, leading to the testing of malformed URLs. They therefore requested that the OONI Run platform informs users when URLs are mistyped, and which prevents them from generating an OONI Run link unless the errors are fixed.
* **Save URLs added to OONI Run website so that users can go back and edit URLs.** Several participants mentioned that once they have added URLs to OONI Run and click the “Generate” button, their URLs are lost if they go back (for example, to add another URL or make other changes). They therefore expressed the need to be able to go back (inside the OONI Run website), once they have already clicked the “Generate” button, without the URLs they previously added being lost. An interview participant proposed adding a “copy this list” button, which enables users to save specific lists of URLs.
* **Enable users to generate OONI Run links based on previously created links.** A few participants mentioned that they would find it useful to be able to generate OONI Run links based on previously created links, without having to create each OONI Run link from scratch. Rather, they would like to have the ability to save their lists (through the OONI Run platform) and build upon them every time they want to generate a new OONI Run link.
* **Enable users to edit and build upon previous lists.** Similarly to the previous point, an interview participant proposed including an “edit this list” or “build upon this list” button that enables users to expand upon their testing, even if they have lost their initial list of tested URLs.
* **Make it obvious that it’s possible to copy-paste a long list of URLs into OONI Run.** To prevent new users from having to go through the tedious task of manually inserting each URL one by one (or limiting their testing altogether), the OONI Run platform should clearly communicate that it is possible to copy-paste a list of URLs into the platform. It would also be good to explain how to do that in order to avoid generating a link based on broken URLs.
* **Improve how URLs are pasted into the OONI Run website to avoid the creation of empty URL slots.** Some participants mentioned that empty lines (i.e. empty URL slots) are created when copy-pasting URLs from a spreadsheet into OONI Run. Unless they manually delete each of these empty lines, they would proceed with generating an OONI Run link that probably doesn’t work. They therefore propose that OONI Run automatically deletes or otherwise does not take into account the empty URL slots generated in these cases.
* **Enable users to import/upload their custom test list for the automatic generation of an OONI Run link/button.** Rather than requiring users to copy-paste a long list of URLs (and risk generating an OONI Run link based on broken URLs), perhaps the OONI Run platform could include a button that enables users to import/upload their custom list of URLs. This would then automatically populate the URL slots with the URLs included in the uploaded file, and enable the generation of an OONI Run link/button.
* **Enable users to generate one OONI Run link/button based on all OONI Probe tests.** Rather than requiring users to generate (and share) a separate link for each OONI Probe test, it would be more efficient to be able to generate one link that includes all of the tests that the user has selected. That way, measurement campaign coordinators can more easily coordinate testing based on a set of different OONI Probe tests.
* **Improve visibility of generated OONI Run link in pop-up window.** A few interview participants mentioned that the text in the pop-up window is too big, while the generated OONI Run link is only one line, and therefore quite subtle (especially for new users). They therefore proposed that the UI of the pop-up window in OONI Run is improved in order to make the generated OONI Run link and widget code more noticeable/prominent.
* **Add a copy button next to the generated OONI Run link.** To avoid issues related to copying long OONI Run links -- and to otherwise simplify the process of copying OONI Run links -- participants proposed that a copy button/icon is added next to the generated OONI Run link.
* **Delete the extra “Link” button in the pop-up window.** Several participants pointed out that the “Link” button in the pop-up window (once an OONI Run link and widget code are generated) is redundant (given that there is already the generated link below) and that is potentially adds to confusion. They therefore proposed that the “Link” button be removed.
* **Clearly communicate that installing the OONI Probe mobile app is a requirement to using an OONI Run link or button.** To reduce confusion and set expectations, interview participants suggested that we improve how we communicate OONI Run requirements, particularly as they relate to having the OONI Probe mobile app installed.
* **Upon OONI Probe installation, remind new users to use their OONI Run link (if they have received one).** As several interview participants expressed the challenge of getting volunteers to remember to use the OONI Run link once they’ve installed the OONI Probe mobile app, they proposed that new users are reminded of this once they install the app.
* **Provide estimated runtime in generated OONI Run links/buttons.** Interview participants proposed that the generated OONI Run links/buttons display how much time the testing of particular targets is expected to last. This will help set volunteer expectations, and they can plan their testing accordingly (for example, they can plan to use the OONI Run link when they’re in a stable location, connected to WiFi).
* **Enable users to easily re-test the URLs included in an OONI Run link.** To increase testing coverage, several interview participants expressed the need to be able to easily re-test the URLs included in an OONI Run link several times. This is currently supported in the OONI Probe mobile app, but participants weren’t aware (highlighting the need to revisit how we display this feature in order to make it more prominent/obvious).
* **Send automated reminders to encourage users to keep running tests.** This can be particularly helpful during censorship measurement campaigns, when increased measurement coverage is paramount.
* **Enable the easy/quick testing of popular social media sites and apps.** As social media websites and apps are frequently blocked around the world, several interview participants highlighted the need to have a quick and easy way to coordinate the testing of popular social media sites and apps. Perhaps OONI Run could have an option for testing social media websites, which is pre-populated with some of the most popular social media websites (users can then review these URLs, remove and add to them before generating a link). If it’s possible to generate a single link based on multiple tests, the “social media” testing option could involve a combination of popular social media websites, along with OONI’s three instant messaging app tests (Telegram, WhatsApp, Facebook Messenger).
* **Enable the easy/quick testing of circumvention tool sites.** Similarly to social media, circumvention tools are frequently blocked around the world too. Some interview participants therefore proposed that OONI Run provides a quick and easy way for coordinating the testing of circumvention tools. Perhaps OONI Run could have an option for testing circumvention tool websites, which is pre-populated ( and users can review these URLs, remove and add to them before generating a link). If it’s possible to generate a single link based on multiple tests, the “circumvention” testing option could involve a combination of circumvention tool websites, along with OONI’s two circumvention tool tests (Tor and Psiphon).
* **Make OONI Run buttons easier to find.** A few interview participants mentioned that they find the [OONI Run buttons embedded into the OONI website](https://ooni.org/get-involved/run/) particularly helpful for their campaigns. However, as this page is not linked directly from the main website, it can be hard to find. They therefore proposed that we promote it more and make it easier to find through the OONI website.
* **Send push notifications when blocking is confirmed or to share reports published based on campaign measurements.** Some participants mentioned that they would appreciate receiving push notifications when cases that they are testing are confirmed blocked (either automatically, or following manual analysis). They also said they would appreciate receiving research reports or other information published based on their measurements.
* **Integrate missing OONI Probe tests into the OONI Run website.** Currently, the OONI Run website only enables users to generate mobile deep links and widget code based on OONI’s website censorship, middlebox, and performance tests. Interview participants therefore proposed integrating the remaining OONI Probe tests as well (instant messaging app tests and circumvention tool tests), to consistently provide users with the option to coordinate testing based on any OONI Probe test.
* **Link to OONI Explorer through the OONI Run website.** To enable new users to find the measurements generated through OONI Run testing, interview participants proposed that a link to [OONI Explorer](https://explorer.ooni.org/) is included in the OONI Run website (and that it is explained that that’s where they can search for the test results).
* **Make it easier to find measurements through OONI Explorer.** Several participants mentioned that they would like the process of finding relevant measurements (generated from the OONI Run link they shared with volunteers) on OONI Explorer to be simplified.
* **Enable users to filter OONI Explorer measurements based on a custom test list.** Many interview participants expressed the need to filter OONI Explorer measurements based on their custom test list (that they used to generate an OONI Run link/button), rather than having to filter OONI Explorer measurements separately based on each URL (for a long list of URLs, this process can be time-consuming and tedious).
* **Enable users to track measurements from a measurement campaign.** This was highlighted as one of the most pressing needs by most interview participants. Some interview participants proposed adding tags to measurements in order to be able to identify whether they’re being collected by volunteers of a specific measurement campaign.
* **Fast-track to gain prioritized access to measurements during a campaign.** As real-time access to measurements is essential for rapid response, an interview participant proposed the creation of a fast-track system that would enable the coordinators of campaigns to gain prioritized access to the measurements pertaining to their OONI Run links.
* **Enable measurement campaign coordinators to learn how many people make use of their OONI Run links.** An interview participant mentioned that they would find it useful to know how many volunteers make use of the OONI Run links they share, and how many measurements are generated as a direct result of their campaign.
* **Measurement campaign training.** To encourage OONI Probe adoption and enable participation in censorship measurement campaigns, several interview participants mentioned that they have found training a focus group of volunteers in advance particularly helpful. As part of these trainings, they introduced volunteers to the concepts around censorship measurement, why it’s important to measure internet censorship, and how to practically use OONI Probe and OONI Run links during campaigns. That way, volunteers were better prepared to respond during emergent censorship events. They therefore recommend that the OONI community do more of these measurement campaign trainings.
* **Provide a guide with step-by-step instructions on how to use OONI Run.** Many interview participants mentioned that new OONI Run users could benefit from having access to a guide that offers screenshots with step-by-step instructions on how to use the platform. This guide would also help set expectations and increase user confidence.
* **Provide a video explaining how to use OONI Run.** Several participants mentioned that video footage, explaining how to use the platform, may be more effective in engaging volunteers and other new users.
* **Provide information explaining how to run a censorship measurement campaign.** Several interview participants highlighted the need for more contextual information that explains how to run a censorship measurement campaign with OONI Run, and which shares common use cases for different scenarios (for example, coordinating censorship measurement during elections, testing LGBTQI websites, etc.). This can be particularly helpful for new users, as it helps them imagine the different types of scenarios in which they can make use of these tools.
* **Link to a relevant FAQ section.** To empower community members to feel more confident in using the platform (and engage others), interview participants suggested that we link to a relevant Frequently Asked Questions (FAQ) section that addresses commonly asked questions around OONI Run usage.

When asked what “dream features” they would like to see in future versions of OONI Run, interview participants shared the following:

* **Having OONI Run links re-run automatically.** Rather than having to remember or remind volunteers to constantly re-run the shared OONI Run link, it would be useful if it were possible to configure it so that it can re-run automatically in timely intervals.
* **Encourage users to run tests on both mobile data and WiFi.** As censorship often differs on mobile and fixed-line networks, performing tests on both types of networks is crucial. Interview participants therefore proposed that the OONI Probe app informs users of this and encourages them to perform tests on different types of networks, particularly when they’re making use of OONI Run links.
* **Support OONI Run testing on desktop.** A few participants mentioned that they would find it useful to be able to perform testing based on OONI Run links and buttons through the use of the [OONI Probe desktop app](https://ooni.org/install/desktop) (and the [OONI Probe Command Line Interface](https://github.com/ooni/probe-cli)) as well.
* **Being able to share OONI Run links directly through the OONI Run platform.** Rather than having to send emails or use other platforms, an interview participant mentioned that they would like to be able to share OONI Run links directly through the OONI Run platform.
* **Being able to see if URLs from the global or country test list are being measured.** An interview participant mentioned that when testing websites, they would appreciate being informed through the OONI Probe app whether they are testing URLs included in the [Citizen Lab’s test lists](https://github.com/citizenlab/test-lists/tree/master/lists) (and if so, which test lists).
* **Live chat with OONI team for tech support.** An interview participant mentioned that, ideally, the OONI team would provide a form of “customer support” through a live chat, enabling community members to ask questions and gain support in real-time.

### Internet freedom community members

Apart from understanding and tailoring to the needs of existing OONI Run users (measurement campaign coordinators and volunteers), we also aim to enable and encourage OONI Run usage by new users as well.

To this end, we interviewed internet freedom community members who could be interested in using OONI Run as part of their work, but who haven’t used the platform yet. Through these interviews, we aimed to gain fresh perspective from new users and explore their needs and challenges in using the platform.

As part of this study, we interviewed 7 individuals who are active in the broader internet freedom community and who use OONI Probe and/or OONI data to examine internet censorship.

During the interviews, we started off by asking the following questions:

* What are your primary reasons for using OONI Probe?
* Have you ever had the need to coordinate OONI Probe testing (for example, to encourage others to test specific websites)? If so, please elaborate.

Through these questions, we aimed to introduce participants to the study, learn more about their goals, motivations, and expectations around using OONI Probe, and explore whether they have experienced needs that OONI Run is designed to meet.

The second part of the interview was more hands-on. We shared the OONI Run website (run.ooni.io) with participants, asked them to access the site and share their screen with us, so that we could observe how they interact with the platform in practice.

While they interacted with the OONI Run platform, we asked the following questions:

* What are your initial thoughts? Do you understand what’s going on?
* How would you go about using this platform?
* How would you add URLs?
* How would you add a long list of URLs?
* What do you think the generated link is? What do you think it does?
* What would you do with the generated link?
* How would you share the generated link? Which platforms would you use?
* What do you like about OONI Run?
* What do you find most confusing about OONI Run?
* Do you have any suggestions for improving it?
* What is the “dream feature” you would like to see in the next version of OONI Run?

In the following sections, we share the main interview findings around OONI Run usage, associated challenges, and suggestions for improvement.

#### OONI Run usage

Interview participants mentioned that they use [OONI Probe](https://ooni.org/install/) for research and advocacy purposes, primarily with the goal of measuring the blocking of websites and apps. Some interview participants mentioned that they also run OONI Probe for its middlebox and performance tests, as part of their broader research efforts to examine net neutrality violations. A few of the interview participants mentioned that they facilitate OONI workshops and engage their local communities with censorship measurement research and advocacy.

When asked whether they ever had the need to coordinate censorship measurement (such as the testing of specific websites in a particular country, region, or network), several participants mentioned that they did, but that they weren’t familiar with [OONI Run](https://run.ooni.org/). These interview participants shared that they would find it useful to coordinate testing among their partner networks, particularly leading up to and during political events (such as elections). Quite similarly, other interview participants mentioned that they have had the need to coordinate OONI Probe testing on several occasions when specific websites were reported blocked in foreign countries (and they wanted to collect relevant measurements). Other interview participants mentioned that they would find the coordination of testing useful in order to perform tests on more networks and regions (that they don’t personally have easy access to).

Once we shared the OONI Run website (run.ooni.io) with participants, we asked them to access the site and share their screen with us. The goal of this exercise was to observe, in practice, how a new user interacts with the OONI Run platform for the first time (and acquire feedback from a fresh perspective).

While most interview participants understood that the OONI Run website somehow pertained to OONI Probe testing, their first reaction was that they mostly found the platform rather confusing. At first glance, many interview participants said that the workflow of the OONI Run website is not straightforward, and that without guidance or instructions, it’s **unclear what the website is about**, what they’re required to do, and why. In short, they did not find the platform intuitive at all. One interview participant highlighted that even though they use OONI Probe and they’re very familiar with OONI, they don’t understand, contextually, what they are supposed to do when they land on the OONI Run website.

Most interview participants eventually proceeded to manually type URLs into the URL slots of the OONI Run website, while a few copy-pasted URLs directly from a browser. Some interview participants were careful to ensure that the HTTP prefix in the inserted URLs was accurate, while other interview participants did not fix the prefix or deleted it entirely. A few participants were unsure which URLs they should add, and it was unclear to them how many URLs they could add. **None of the interviewed participants assumed that they could copy-paste a long list of URLs.** When asked how they would go about adding a longer list of URLs, they responded that they would have to manually type them one by one.

Interestingly, several interview participants **assumed that OONI Run was a browser version of OONI Probe** (similarly to the OONI Probe [mobile](https://ooni.org/install/mobile) and [desktop](https://ooni.org/install/desktop) apps), expecting to be able to run tests directly through the OONI Run website and gain access to results (similarly to the OONI Probe apps). When asked to interact with the OONI Run website, these participants tried running tests by clicking on the test options (“Web Connectivity”, “NDT Speed Test”, etc.) and by clicking the “Generate” button. They were confused by the pop-up window that appeared instead, as it was unclear what they were meant to share or otherwise do. Having assumed that they ran tests, it was unclear how they could gain access to the results through the OONI Run website, leading to visible disappointment.

Upon clicking the “Generate” button, several interview participants **found the pop-up window confusing**. It was **unclear what they were supposed to share**, why, and how. More specifically, it was unclear to them *if they would be sharing the OONI Probe app* (to encourage installation), or if they would just be sharing the websites they previously inserted. To some participants, it was initially unclear that they had to share anything at all.

Interestingly, several participants clicked on the “Done” button inside the pop-up window, expecting something to happen. When the window just closed and brought them back to an empty (URL-wise) OONI Run website, they were confused. By **clicking “Done”, they had originally assumed that they would run tests**, or that they would gain access to test results (quite similarly to the OONI Probe apps).

![](/images/uploads/window.png)

**Image:** OONI Run pop-up window upon generating a mobile deep link and widget code, https://run.ooni.org/

Upon **clicking the “Link” button** inside the pop-up window, many interview participants were **confused by the page** that they landed on (accessed from a desktop browser). That page told them to install OONI Probe, but they were puzzled because they ***already had the OONI Probe app installed***. Some participants even had *both* the OONI Probe [desktop](https://ooni.org/install/desktop) and [mobile](https://ooni.org/install/mobile) apps installed, finding this page particularly confusing. When clicking on the “Run” button on that page (from a desktop browser), nothing happened. It was therefore unclear to them how to proceed.

![](https://lh6.googleusercontent.com/UnMzKVG8YMY-iC9LNBjnMQljeZ4IqICY4RLHVmzCVxyFG7bqGstgdlDtxOxMWjGbcK71AITvPb3MCc335d1hwFJhVpPQC80HQ3jR_jIacL1yIUo7XWUCRd9cFPgkziq4Y0Etnpsc)

**Image:** OONI Run page (when accessed from a desktop browser) based on generated OONI Run link, https://run.ooni.org/

Since the purpose and functionality of OONI Run was not immediately clear, the use of the generated widget code was not clear either. However, once participants understood the goal and functionality of OONI Run, several participants understood how they would use the generated widget code as well.

Overall, many interview participants mentioned that for first-time users, OONI Run is not intuitive at all, as the platform lacks contextual information and it’s unclear what users are supposed to do. But they highlighted that once you know what OONI Run is about, the platform is easy and simple to use. Some participants mentioned that, while they would appreciate links to guides and further information, at the same time they appreciate that the current OONI Run website is quite “minimalist” and doesn’t “drown users with too much information”.

#### Challenges

While interacting with the [OONI Run](https://run.ooni.org/) platform for the first time, interview participants experienced the following challenges:

* **Unclear what OONI Run is about and what you are supposed to do.** Most interview participants expressed confusion, as it was not immediately clear what OONI Run was about and what they were expected to do.
* **OONI Run looks like a “web browser version” of OONI Probe.** Through the OONI Run website, many interview participants expected that they could run OONI Probe tests from their browser. They therefore tried clicking on the “Web Connectivity” test option, expecting to be able to run tests. Similarly to the OONI Probe apps, they also expected that they would gain access to the test results through OONI Run.
* **Unclear how many URLs you can add and test.** Several participants were unsure of how many URLs they could add to the OONI Run platform. When one participant added 3 URLs, they were surprised to learn that only one OONI Run link was generated based on 3 URLs.
* **Unclear how to test a long list of URLs.** None of the interviewed participants assumed that they could copy-paste a long list of URLs into the OONI Run platform. They assumed that they would have to manually type each URL one by one.
* **Unclear that OONI Run is only for custom test lists.** Interestingly, a few participants expected to test a default test list (similarly to what happens when you click “Run” in the Website card of the OONI Probe apps) when generating an OONI Run link without URLs. It was unclear to them that if they generated an OONI Run link without any URLs, that the generated link would not test any websites.
* **Confusing pop-up window.** Upon clicking “Generate”, many participants found the pop-up window confusing because it was contrary to their expectations (i.e. that tests would run), it was unclear to them what they were required to share, and it was unclear that the generated link was based on the URLs they previously inserted into the platform.
* **Unclear what is being shared.** Several participants were unsure what they could share through the OONI Run platform. Some interview participants thought that they would be sharing a link to install the OONI Probe app.
* **Unfamiliar with the concept of mobile deep links.** Many participants found the generated link confusing. It was unclear why the link was so long, and why it didn’t work from a web browser.
* **Confusing “Link” button and page.** Several participants found the “Link” button (inside the pop-up window) confusing because once they clicked on it, the page told them to install the OONI Probe app, but they already had the OONI Probe desktop and mobile apps installed.
* **Unclear that OONI Run links only work on mobile.** Several interview participants attempted to run the generated OONI Run link once they clicked on the “Link” button (inside the pop-up window), but they were unable to do this on desktop. It was unclear that the “Link” button only works on mobile.
* **Confusing widget code.** A few interview participants were confused by the generated widget code, as it was unclear to them what the difference was between the generated widget code and the link. Some interview participants didn’t notice the widget code in the pop-up window at all.
* **Confusing “Done” button.** Several participants found the “Done” button (inside the pop-up window) confusing, because they expected something to happen (such as running tests or getting results) upon clicking it.

#### Suggestions and “dream features”

Interestingly, many of the suggestions (for the improvement of the OONI Run platform) offered by first-time OONI Run users were similar to those shared by experienced measurement campaign coordinators and volunteers. But they also shared several new ideas.

The suggestions they offered include:

* **Provide a guide with step-by-step instructions.** Most interview participants expressed interest in a guide that provides screenshots with step-by-step instructions on how to use the OONI Run platform. They mentioned that this would be particularly helpful for first-time users and it would enable them to get started.
* **Link to a relevant FAQ.** Several participants mentioned that they would find it helpful if the OONI Run website linked to a Frequently Asked Questions (FAQ) section that addresses some of the most commonly asked questions around using the platform.
* **Provide contextual information on how to use OONI Run.** By sharing examples of how OONI Run has been used in the past, interview participants explained that new users would gain a better idea of how to use the platform and what to expect. This would be particularly useful in inspiring new users, and providing them with ideas on how to use the tool in their counties, as part of their work.
* **Clearly communicate that OONI Run only works on mobile.** To avoid confusion, participants proposed that the OONI Run platform communicates that the generated OONI Run link only works with the [OONI Probe mobile app](https://ooni.org/install/mobile). This should also be communicated in the page that users access once they click on the “Link” button (inside the pop-up window).
* **Edit copy.** Some interview participants mentioned that the OONI Run platform could benefit from copy edits that more clearly communicate what each action does and what users can expect. For example, one interview participant mentioned that the language could be “get a link with which you can measure the performance of your network”. They also recommended looking at patterns commonly used by other similar apps, editing the copy entirely in the pop-up window, and editing the copy in the page that appears when you click on the “Link” button (to say something like “Come join me on OONI Probe, follow this link...”).
* **Enable the testing of a long list of URLs.** As none of the participants assumed that it’s possible to copy-paste a long list of URLs, they requested that this is clearly communicated in the OONI Run platform, or that a button (enabling the upload of a file) is added.
* **Provide contextual clues inside the pop-up window.** An interview participant mentioned that using OONI Run would be easier if contextual clues are provided throughout the platform, particularly in the pop-up window. These clues could provide subtext of what users are looking at, and how they can use the platform.
* **Make the generated OONI Run link more prominent in the pop-up window.** Several participants did not notice the generated OONI Run link, and only used the “Link” button, which did not work on desktop.
* **Make it easier to copy the generated OONI Run link.** Several participants struggled to copy the generated OONI Run link (mainly due to its length) through the pop-up window.
* **Enable users to generate OONI Run links based on existing lists of URLs.** Rather than requiring users to generate OONI Run links based on their own custom test lists, a few interview participants mentioned that they would find it helpful if they also had the option to generate OONI Run links based on existing lists of URLs. This, they highlighted, could be particularly helpful for first-time users, who may not know which URLs to test. They mentioned that the OONI Run website could include a drop-down menu for selecting one of the [Citizen Lab country-specific test lists](https://github.com/citizenlab/test-lists/tree/master/lists), based on which to generate an OONI Run link.
* **Enable users to go back to their URLs once they have generated an OONI Run link.** A few participants noticed that if they go back once they have generated the pop-up window, the URLs they previously inserted are lost. They mentioned that it would be helpful if those URLs are saved so that they can go back and make changes, if necessary, before sharing an OONI Run link.
* **Enable users to save the list of URLs based on which they generate OONI Run links.** Several interview participants mentioned that they would find it helpful to be able to save the list of URLs that they use to generate OONI Run links, so that they can easily go back to it, make changes, and generate new OONI Run links that expand upon previous ones.
* **Enable users to share their custom OONI Run test lists.** A few interview participants mentioned that they would find it useful if they could easily access (and potentially test) the lists of URLs tested by other OONI Run users.
* **Make it easier to learn how OONI Probe tests work.** A few participants mentioned that they would appreciate having access to information that explains (in simple words) how the OONI Probe tests (displayed in OONI Run) work. Several participants did not notice that links to test descriptions are already included in the OONI Run platform, particularly since they only appear once the relevant test option is selected.
* **Link to OONI Explorer.** A few interview participants mentioned that by linking to [OONI Explorer](https://explorer.ooni.org/), users can easily find relevant measurements and better understand how the use of OONI Run contributes to the global understanding of internet censorship.
* **Add missing OONI Probe tests.** Several interview participants noticed that the OONI Run platform was missing several tests that are included in the OONI Probe apps. They particularly expressed interest in the instant messaging app tests (such as OONI’s WhatsApp test).
* **Enable the testing of social media.** As online social media is frequently blocked around the world, interview participants expressed the need for a quick and easy way to coordinate the testing of popular social media websites and apps. They therefore proposed that this option is added to OONI Run.
* **Enable users to generate one OONI Run link based on multiple OONI Probe tests.** Several participants mentioned that they would find it helpful to be able to generate one OONI Run link based on several tests, rather than have to generate and share multiple OONI Run links for each test. This would significantly enable the coordination of censorship measurement campaigns.

When asked what “dream features” they would ideally like to see in a future version of OONI Run, interview participants shared the following:

* **Ability to perform tests remotely.** Some interview participants mentioned that while they appreciate having the ability to coordinate remote testing with OONI Run, they would also like to have the ability to perform testing remotely themselves.
* **Easy way to track and access all measurements generated from an OONI Run link.** Rather than having to dig for relevant measurements through [OONI Explorer](https://explorer.ooni.org/), participants expressed the need to have easy and quick access to all measurements generated through an OONI Run link that they share to coordinate a censorship measurement campaign.
* **Make the “Link” button distinguish mobile from desktop users.** An interview participant mentioned that it would be great if the “Link” button in the pop-up window were “smart enough” to know if the user is on mobile or desktop, and if they already have the OONI Probe app installed.
* **Contact between OONI Run users.** Interview participants mentioned that they would find it beneficial being in touch with other measurement campaign coordinators and volunteers who make use of OONI Run. That way, they could easily share custom test lists with other measurement campaign coordinators, and more easily reach measurement campaign volunteers when needed. To this end, they proposed linking (for example) to the [OONI Slack channel](https://slack.ooni.org/) on the OONI Run website.
* **Integrate OONI Run into other platforms to enable collaboration.** A few participants mentioned that they would like to see OONI Run integrated into platforms that are commonly used by people around the world, enabling use of OONI Run and collaboration. Integration with Google spreadsheets, for example, would enable collaborative editing of lists of URLs based on which to generate OONI Run links.
* **Ability to measure internet blackouts through the use of OONI Run.** Some interview participants expressed interest in measuring internet blackouts through OONI Run links that they could send (for example, with SMS) to users in regions that are disconnected from the internet. This could potentially help with collecting relevant metrics.
* **Safer way of running OONI Probe.** An interview participant mentioned that they often feel reserved to encourage OONI Probe adoption -- particularly in high-risk environments (where censorship events also tend to emerge -- due to the potential [risks](https://ooni.org/about/risks/) associated with using OONI Probe. Since OONI Probe installation is a requirement to use OONI Run, they mentioned that, ideally, OONI Probe would be less fingerprintable and safer to use.

## Conclusion

Overall, many of the same challenges and suggestions were not only shared by both survey respondents and interview participants, but also by both experienced OONI Run users and first-time users.

Some of the main challenges expressed by most participants include issues related to generating long OONI Run links (which often break when shared on popular messenger platforms), requiring volunteers to have [OONI Probe](https://ooni.org/install/mobile) installed (as a prerequisite to using OONI Run links), not being able to quickly and easily edit URLs included in OONI Run links, and not having an easy way to track, aggregate, and access measurements generated based on specific OONI Run links.

To improve the OONI Run platform, most participants requested the shortening of OONI Run links, having the ability to save and easily edit URLs included in OONI Run links, and having an easy way to coordinate the testing of popular social media sites and apps. Many participants pointed out the missing OONI Probe tests (particularly the instant messaging app tests) which should get added to the platform, as well as the need for OONI Run links to provide users with an estimated runtime. To enable adoption, participants proposed linking to relevant guides that provide step-by-step instructions, as well as to a relevant FAQ and other contextual information. To enable contributions to the [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists), participants proposed providing an easy way to do so in the OONI Run website, or automating the process entirely.

To promote rapid response to emergent censorship events, participants emphasized the need for having an easy way to identify, access, and aggregate relevant measurements pertaining to specific OONI Run links, used as part of censorship measurement campaigns.

# Next Steps

We thank all those who participated in this OONI Run usability study, both those who shared feedback by completing our [survey](https://ooni.typeform.com/to/r9c5ee) and those who participated in interviews. We also thank all other community members who have shared feedback over the years, and who have used OONI Run as part of their work (despite the challenges).

The feedback we gathered through this study is incredibly useful, as it introduced us to many user challenges and needs that we were not previously aware of, and to many brilliant suggestions and ideas that we had not thought of. We will therefore do our best to address all feedback shared through this study (and documented in this report).

We will start off by opening [tickets](https://help.github.com/en/github/working-with-github-support/submitting-a-ticket) on our [OONI Run](https://github.com/ooni/run) and [OONI Probe](https://github.com/ooni/probe) GitHub repositories (which are publicly available), based on all of the feedback collected through this study. Through these tickets, you will be able to track our discussions around each piece of feedback (and participate in those discussions), which decisions we make (and why), and how we proceed with implementation. If you have further feedback you would like to share, we encourage you to[ open a ticket](https://github.com/ooni/run/issues/new) or [write](https://ooni.org/about/#contact) to us.

We aim to release an improved version of OONI Run by the end of 2020. Stay tuned!
