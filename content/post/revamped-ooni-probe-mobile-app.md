---
title: "Major Revamp: OONI Probe Mobile App 2.0 Launched!"
author: "Maria Xynou"
date: "2019-01-14"
tags: ["ooniprobe", "mobile", "launch"]
categories: ["blog"]
---

![OONI Probe: Dashboard](/post/ooni-mobile-app/dashboard.png)

Today the [Open Observatory of Network Interference (OONI)](https://ooni.torproject.org/) project is thrilled to announce
the release of a major, new OONI Probe mobile app version!

Are websites and social media apps blocked? Is your network unusually
slow?

Install **OONI Probe** now on
[Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe)
or [iOS](https://itunes.apple.com/us/app/id1199566366) to find
out!

* [Why run OONI Probe?](#why-run-ooni-probe)

* [OONI Probe 2.0 Highlights](#ooni-probe-2-0-highlights)

	* [Major UI overhaul](#major-ui-overhaul)

	* [Overview of Test Results](#overview-of-test-results)

	* [Enhanced Website Testing](#enhanced-website-testing)

		* [Test websites of your choice](#test-websites-of-your-choice)

		* [Test country-specific sites](#test-country-specific-sites)

		* [Choose categories of sites to test](#choose-categories-of-sites-to-test)

	* [Data usage](#data-usage)

* [Stay tuned for more!](#stay-tuned-for-more)

# Why run OONI Probe?

Imagine if everyone had the power to measure the internet. Imagine if
you could quickly discover whether access to websites or apps is
blocked. And imagine if you could even collect network data, potentially
serving as *evidence* of internet censorship.

You have this power with OONI Probe.

With the tap of a button, you can run OONI Probe to measure:

* Blocking of websites

* Blocking of WhatsApp, Facebook Messenger, and Telegram

* Presence of systems (middleboxes) that could be responsible for
censorship and/or surveillance

* Speed and performance of your network

* Video streaming performance

You’ll get results that not only answer the above, but which also
provide network data that can serve as evidence of network interference
(since it clearly shows, for example, how a service is blocked).

Apart from satisfying your own curiosity, you’ll also contribute to a
growing public archive, since all OONI measurements are (automatically)
[openly published](https://ooni.torproject.org/data/). By running OONI
Probe, your results will help increase transparency of internet
censorship and other forms of network interference. These measurements
will support researchers, lawyers, journalists, and human rights
advocates tracking internet censorship around the world.

# OONI Probe 2.0 Highlights

## Major UI overhaul

If you’ve used OONI Probe before, you’ll notice that the new apps have
improved design and UX!

They say that a picture is worth a thousand words:

![OONI Probe: old vs. new](/post/ooni-mobile-app/old-vs-new-app.png)

We have simplified navigation, improved how the results are presented to
you, and otherwise enabled you to run sophisticated network measurement
tests in an easy and (hopefully) pleasant way. Some UX highlights
include a dashboard for grouping tests by category and an overview of
test results.

## Overview of Test Results

With OONI Probe, you can view results in the app as soon as you run each
test, enabling immediate censorship detection.

One of the major new features of the revamped apps is that you can now
have a bird’s-eye view of all test results.

![OONI Probe: Overview of Test Results](/post/ooni-mobile-app/test-results.png)

By having an overview of results, you can:

* See at a glance what’s happening on your network

* Compare results over time

* Compare results across networks and countries (if you run OONI Probe
connected to different networks and from different countries)

With the revamped apps, you can also filter your test results, drill
down into specific results and dig through network measurement data.

## Enhanced Website Testing

### Test websites of your choice

Did you just hear that a website is blocked? Are you unable to access a
website, but you’re unsure if it’s intentionally blocked or not? Are you
interested in testing your own list of websites (as part of your
research or just out of curiosity)?

You can now easily test the sites of your choice via the revamped OONI
Probe mobile apps!

![OONI Probe: Test URLs](/post/ooni-mobile-app/test-websites.png)

As soon as you test each website, you can immediately find the results
in the app.

### Test country-specific sites

Previously, the OONI Probe mobile apps only supported testing URLs
included in the Citizen Lab’s [global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv),
which includes internationally relevant sites.

Now, you can also test URLs included in the Citizen Lab’s
[country-specific test lists](https://github.com/citizenlab/test-lists/tree/master/lists).
Depending on the country you’re in when you run OONI Probe, the app will
test websites included in that country’s test list (in addition to URLs
included in the [global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)).
This means that you can test a broader range of URLs, including both
internationally relevant and country-specific websites.

Remember to run OONI Probe’s Web Connectivity test as many times as
possible! Everytime you run this test, you will test a different sample
of URLs from the
[global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)
and
[country-specific](https://github.com/citizenlab/test-lists/tree/master/lists)
test lists. We have set this limitation due to bandwidth constraints.

### Choose categories of sites to test

By default, OONI Probe measures a *diverse* set of URLs included in the
Citizen Lab’s [test lists](https://github.com/citizenlab/test-lists/tree/master/lists).
While these URLs include popular sites - such as facebook.com,
twitter.com, media websites, etc. - they also include websites that may
be controversial or illegal to test in some countries.

To provide you with *more control and more choice* over which websites
you test, we have included a new feature in the OONI Probe mobile apps
that allows you to **enable and disable** [website categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv),
depending on what you feel comfortable with.

![OONI Probe categories](/post/ooni-mobile-app/web-categories.jpg)

You can find this feature via the settings of the Websites card of the
app.

## Data usage

With the new OONI Probe version, you can keep track of how much of your
mobile data the app is using. This allows you to understand, on a per
test basis, how much bandwidth is used by the OONI Probe mobile app.

# Stay tuned for more!

Since the [initial launch](https://ooni.torproject.org/post/ooni-mobile-app/) of the OONI
Probe mobile apps (back in February 2017), we’ve been collecting
community feedback (through [usability studies](https://ooni.torproject.org/post/ooniprobe-ux-survey-and-interviews/),
[workshops](https://ooni.torproject.org/post/ooni-in-africa-india-europe-conferences/),
and other means) to improve the apps and better serve your needs.

If you participated in usability studies or otherwise shared feedback,
we’d like to **thank you**, as you have played an important role in
today’s launch. And if you have feedback based on the new apps, we
encourage you to share it with us by sending an email to
[contact@openobservatory.org](mailto:contact@openobservatory.org).

Our work is ongoing and we plan to release many new features over the
next year. In the meanwhile, [install the new apps](https://ooni.torproject.org/install/) and stay tuned for the
next releases!
