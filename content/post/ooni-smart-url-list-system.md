---
title: "Building a smart URL list system: Policy for URL prioritization"
author: "Maria Xynou"
date: "2020-04-15"
tags: ["ooni"]
categories: ["blog"]
---

To improve the monitoring of website censorship around the world, OONI
aims to create a smart URL list system, while ensuring, to the extent
possible, the safety of the URL lists themselves by running them through
the usual [Citizen Lab URL review process](https://github.com/citizenlab/test-lists). This will help
ensure smarter test target selection and by extension, it will enable us
-- and the broader internet freedom community -- to more effectively
monitor, analyze, and respond to cases of website censorship around the
world.

This document describes **[OONI’s policy for URL prioritization](/post/policy-url-prioritization/ooni-policy-url-prioritization.pdf)**. The
goal of this policy is to determine the criteria based on which the
[OONI Probe](https://ooni.org/install/) testing of certain types of
URLs will be prioritized over others. Through URL prioritization, OONI
aims to optimize the value of collected measurements, ensure regular
testing of the same URLs for consistency, ensure that the tested URLs
are relevant to OONI Probe users, and to improve the monitoring of
website censorship around the world.

* [Summary](#summary)

* [Background](#background)

    * [Why measure website censorship](#why-measure-website-censorship)

    * [Current OONI Probe limitations to URL testing](#current-ooni-probe-limitations-to-url-testing)

* [Smart URL list system](#smart-url-list-system)

    * [Goals](#goals)

    * [Criteria for URL prioritization](#criteria-for-url-prioritization)

        * [Global URL prioritization criteria](#global-url-prioritization-criteria)

        * [Country-specific URL prioritization criteria](#country-specific-url-prioritization-criteria)

    * [URL prioritization](#url-prioritization)

        * [Citizen Lab test list categories](#citizen-lab-test-list-categories)

        * [Emergent censorship events](#emergent-censorship-events)

        * [OONI data analysis](#ooni-data-analysis)

    * [Push notifications to solicit testing](#push-notifications-to-solicit-testing)

    * [Analysis and publication of measurements](#analysis-and-publication-of-measurements)

* [Call to Action](#call-to-action)

    * [Review URLs included in the Citizen Lab test lists](#review-urls-included-in-the-citizen-lab-test-lists)

    * [Review URL categorizations](#review-url-categorizations)

# Summary

Even though thousands of websites are measured by tens of thousands of
[OONI Probe](https://ooni.io/install/) users in [more than 200 countries every month](https://explorer.ooni.org/), detecting the
blocking of websites and collecting enough measurements to confirm
blocking with confidence remains an ongoing challenge. Blocked URLs are
sometimes not tested frequently enough (or at all), limiting the
coverage of censorship events, rapid response, and relevant advocacy
efforts.

To solve this problem, OONI aims to create a system for “smarter” URL
testing. With the smart URL list system, the [OONI Probe](https://ooni.org/install/) testing of certain categories of URLs
would be prioritized over others, in order to improve the monitoring of
website censorship around the world.

URLs will be prioritized for testing depending on whether they are of
public interest, whether their blocking could impact human rights, and
whether they fall under a category that is frequently blocked around the
world (particularly in correlation to political events).
Country-specific criteria may apply too on a case-by-case basis.

In every case, the smart URL list system will only prioritize URLs that
are already included in the [Citizen Lab test lists](https://github.com/citizenlab/test-lists) and which have
therefore been reviewed by the community and vetted in terms of safety.

# Background

## Why measure website censorship

Website blocking remains an ongoing - and increasingly worsening -
problem, often affecting marginalized communities the most.

Hundreds of media websites and human rights websites are blocked in
countries like
[Iran](https://ooni.io/post/iran-internet-censorship/#news-websites)
and [Egypt](https://ooni.io/post/egypt-internet-censorship/).
Independent media organizations in Egypt
[report](https://ooni.io/documents/Egypt-Internet-Censorship-AFTE-OONI-2018-07.pdf)
that they are forced to shut down their operations entirely, as a result
of ongoing, persistent blocking of their websites.

Amid Venezuela’s economic and political crisis, numerous [independent media websites have been blocked](https://ooni.io/post/venezuela-internet-censorship/#media),
along with several [blogs expressing political criticism](https://ooni.io/post/venezuela-internet-censorship/#political-criticism).
Last year, Wikipedia was not only [blocked in Venezuela](https://ooni.io/post/venezuela-blocking-wikipedia-and-social-media-2019/#blocking-of-wikipedia),
but [all language editions of Wikipedia are now blocked in China](https://ooni.io/post/2019-china-wikipedia-blocking/) as well.
Last month, the [Farsi language edition of Wikipedia was temporarily blocked in Iran](https://ooni.org/post/2020-iran-blocks-farsi-wikipedia/).

Minority group sites remain blocked in numerous countries around the
world. LGBTQI sites are blocked in countries like
[Indonesia](https://ooni.io/post/indonesia-internet-censorship/#lgbt),
[Iran](https://ooni.io/post/iran-internet-censorship/#human-rights-issues),
[Ethiopia](https://ooni.io/post/ethiopia-report/#lgbti-websites), and
[Malaysia](https://sinarproject.org/digital-rights/updates/online-lgbt-censorship-malaysia),
the sites of the [Baluch and Hazara ethnic minorities are blocked in Pakistan](https://ooni.io/post/pakistan-internet-censorship/#minority-groups),
while [the sites of the Baha'i religious minority are blocked in Iran](https://ooni.io/post/iran-internet-censorship/#human-rights-issues).

Meanwhile, the blocking of websites is increasingly becoming more
sophisticated around the world. Cuba, for example, [used to primarily serve blank block pages](https://ooni.torproject.org/post/cuba-internet-censorship-2017/), only blocking the HTTP version of websites. Now they censor access to
websites that support HTTPS by means of [IP blocking](https://ooni.io/post/cuba-referendum/). Venezuelan ISPs used
to primarily block sites by means of [DNS tampering](https://ooni.torproject.org/post/venezuela-internet-censorship/).
Now state-owned CANTV implements [SNI-based filtering](https://ooni.torproject.org/post/venezuela-blocking-wikipedia-and-social-media-2019/)
as well.

All of the aforementioned cases have been detected through the use of
[OONI Probe](https://ooni.io/install/) and reported based on [OONI censorship measurement data](https://ooni.io/data/). However, our
ability to effectively track and respond to the blocking of websites
(and other internet censorship events) around the world is still rather
limited.

## Current OONI Probe limitations to URL testing

The [OONI Probe mobile app](https://ooni.io/install/) (the most widely
adopted OONI Probe testing client) tests a random selection of URLs
taken from the
[global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)
and
[country-specific](https://github.com/citizenlab/test-lists/tree/master/lists)
(based on the country that the user is running OONI Probe from) Citizen
Lab test lists.

Due to bandwidth constraints, the default is that OONI Probe will only
measure as many URLs as it can connect to within 90 seconds (users can
extend the test runtime in the app settings, but this feature is not
widely used).

This inevitably means that OONI Probe URL testing presents the following
limitations:

* Blocked URLs may not get tested at all in a given country, if they don’t happen
to be randomly selected as part of the default testing;

* Blocked URLs may only get tested a few times in a given country,
often leading to inconclusive results (particularly if a [block page](https://ooni.org/support/faq/#why-does-ooni-confirm-censorship-when-a-block-page-is-served) is not served and if [false positives](https://ooni.org/support/faq/#what-are-false-positives) emerge);

* URLs may not get tested during a time-frame when they’re temporarily
blocked (i.e. URLs were tested before and/or after their blocking,
but not during);

* Many URLs that are of less public interest and which have never been
blocked may randomly get selected and get tested more frequently,
while other URLs of greater public interest and which are censored
may not get tested as frequently (or at all);

* The random testing of URLs limits the ability to track and evaluate
censorship changes over time (i.e. the blocking and unblocking of
URLs).

In summary, the random testing of URLs presents challenges to the
testing of blocked URLs (and potentially means that blocked URLs are
often missed), limiting the coverage of censorship events, rapid
response, and relevant advocacy efforts. It also limits the internet
freedom community’s ability to identify censorship trends and changes
over time, since URLs may not be tested consistently over time.

# Smart URL list system

To solve this problem and improve the monitoring of website censorship
around the world, we aim to build a system for “smarter” URL testing.

Based on this new system, OONI Probe users would no longer test URLs
(included in the [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists))
randomly. Rather, the testing of certain categories of URLs would be
prioritized over others, in order to improve the monitoring of website
censorship around the world.

## Goals

The underlying **goals and principles** behind URL prioritization
involve:

* Responding faster to emergent censorship events;

* Expanding the breadth and granularity of global coverage of website
censorship;

* Optimizing the value of collected measurements;

* Ensuring the regular testing of the same URLs for consistency and to
support data analysis efforts;

* Ensuring that the tested URLs are more relevant to OONI Probe users.

We will adjust URL priorities based on the above goals and URL
priorities will be transparent. We will openly display which URLs are
prioritized for testing and we will provide the internet freedom
community the option to offer suggestions.

In every case, the smart URL list system will only prioritize URLs that
are already included in the [Citizen Lab test lists](https://github.com/citizenlab/test-lists) and which have
therefore been reviewed by the community and vetted in terms of safety.

## Criteria for URL prioritization

As part of the smart URL list system, the testing of URLs will be
prioritized based on specified criteria. Some criteria will apply to all
OONI Probe users globally, while other criteria will differ from country
to country. Below we share the main criteria for each.

### Global URL prioritization criteria

The testing of URLs by OONI Probe users globally will be prioritized
based on the following criteria:

* **Public interest.** URLs that host content or offer services that
are of public interest will be prioritized. Whether a URL or
category of URLs is of “public interest” will be determined based
on whether the censorship of such information could have an impact
on the general public (because it relies on this information).
News media, for example, is generally [considered to be of public interest](https://ethicaljournalismnetwork.org/the-public-interest),
which is why its testing will be prioritized.

* **Impact on human rights.** Our goal is to defend human rights on
the internet. We will therefore prioritize the testing of human
rights sites and other sites whose potential blocking could have
an impact on human rights.

* **Frequently blocked around the world.** Social media is an example
of online content that is [frequently blocked](https://ooni.org/reports/) in countries around the
world, particularly during political events, such as elections or
protests. We will prioritize the testing of URLs if they fall
under a category that has commonly been blocked around the world
(such as social media, news media, and VPNs), particularly in correlation to political events.

### Country-specific URL prioritization criteria

The testing of URLs by OONI Probe users may differ from country to
country. In addition to the global URL prioritization criteria,
country-specific URL prioritization may apply too based on the following
criteria:

* **Reportedly blocked URLs.** If a specific website or type of
content is known to be blocked or reportedly blocked in a country
(according to news articles, research reports, local accounts, or
other third party resources), its testing may be prioritized. This
may include a certain type of content (such as gambling) that is
illegal/banned in a specific country. We are cognizant of the
increased [potential risk](https://ooni.org/about/risks/)
associated with testing illegal content, and will therefore
evaluate whether the testing of such content should be prioritized
based on input from local communities and country experts.

* **Likelihood of being censored.** If certain types of URLs are
likely to be blocked (now or in the future) due to their
provocative content, their testing may be prioritized in a
specific country. For example, this may include blogs and other
websites that express political criticism.

* **Correlation to political events and potential for censorship.**
Over the years, we have [observed](https://ooni.org/reports/) a
strong correlation between political events and the spike in
censorship events around the world. We may therefore prioritize
the testing of certain types of websites if they are likely to get
blocked in correlation to specific political events. For example,
this could involve the prioritized testing of election watchdog
websites leading up to, during, and shortly after an election.

The above country-specific criteria require local knowledge and
expertise. They will therefore mainly be applied when and if we receive
relevant advice and recommendations from local experts.

Overall, we may revise the above criteria in the future, particularly
once the smart URL list system is rolled out and we have seen how it
works in practice. We may also make changes based on community feedback
and suggestions, and adjust URL priorities over time. Any future changes
to the URL prioritization criteria will be reflected through an update
to this policy.

## URL prioritization

### Citizen Lab test list categories

OONI Probe measures the URLs included in the Citizen Lab’s
[global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)
and
[country-specific](https://github.com/citizenlab/test-lists/tree/master/lists)
test lists. These URLs fall under **[30 broad categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)**,
which range from news media and human rights, to more objectionable
categories, such as hate speech and pornography.

However, these categories don’t carry the same weight in terms of public
interest and the possibility of being censored. News media, for example,
is probably of greater public interest than URLs that fall under the
gaming category. In certain countries where LGBT rights are not
recognized, for example, the blocking of LGBT sites might be more
probable than the blocking of URLs that fall under the e-commerce
category.

Therefore, the new smart URL list system will implement backend logic
for **prioritizing the testing of certain URL categories** over others.
The prioritized testing of URL categories that are of greater public
interest is especially important for OONI Probe mobile app deployments,
as it makes it possible to save up on bandwidth by prioritizing the
testing of more relevant URLs.

### Emergent censorship events

In response to emergent censorship events, the smart URL list system may
prioritize the testing of URLs that are reported (for example, by the
news media or local community members) to be blocked. However, this
prioritization will be *limited to URLs that are already included in the
[Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists)*
(and have therefore been reviewed and vetted).

If, for example, popular social media platforms -- such as `facebook.com`
and `instagram.com` -- are reportedly blocked in a certain country, the
smart URL list system would enable us to prioritize the testing of
`facebook.com` and `instagram.com` by OONI Probe users in that country.

Practically, this means that if you are an OONI Probe user in said
country, when you tap/click “Run” in the OONI Probe app (without
specifying the URLs that you’re testing), `facebook.com` and `instagram.com`
would be amongst the first URLs you would test. The prioritization of
URLs may be re-adjusted once/if an emergent censorship event has ended
(for example, once access to `facebook.com` has been unblocked in a
certain country).

### OONI data analysis

With smart URL selection capabilities, we eventually aim to have the
ability to dynamically determine and adjust the testing targets based on
input from OONI data analysis.

Our new [fast-path data processing pipeline](https://github.com/ooni/pipeline/pull/213) automatically
analyzes and publishes OONI measurements from around the world in near
real-time. This analysis can help flag censorship changes, such as the
new blocking or unblocking of specific URLs. It can also flag the
presence of anomalies for URLs that are of public interest, signaling
the potential presence of past, emergent, or ongoing blocking. All this
information can potentially feed into our new smart URL list system, in
order to help inform which URLs we should prioritize testing for.

[OONI Run](https://run.ooni.io/) is a platform that is used by OONI
Probe users around the world to coordinate the testing of specific URLs
-- particularly leading up to and during political events (such as
elections or protests), and in response to emergent censorship events.
Many of these URLs may be interesting to test on an ongoing basis, but
may not already be included in the [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists).

We therefore aim to mine OONI data to identify URLs that have been
tested by OONI Probe users independently, add those URLs to the Citizen
Lab test lists, and prioritize the testing of certain URLs if they meet
the relevant criteria (as discussed previously).

## Push notifications to solicit testing

Ensuring the prioritized testing of URLs that are of public interest is
not enough. We often have limited testing coverage of URLs of interest,
limiting our confidence in ruling out [false positives](https://ooni.org/support/faq/#what-are-false-positives) and
confirming censorship events (especially if [block pages](https://ooni.org/support/faq/#why-does-ooni-confirm-censorship-when-a-block-page-is-served)
are *not* served).

To increase testing coverage, we will add support for configuring push
notifications to solicit testing. We will also add support so that OONI
Probe mobile app users can receive push notifications and run
experiments. This will be particularly useful during emergent censorship
events when fast coordination of targeted URL testing is crucial.

## Analysis and publication of measurements

As the OONI software ecosystem is designed to automatically [publish all measurements](https://ooni.org/data/) that are sent to OONI
servers, the internet freedom community and the public at large will
benefit from the more sophisticated testing of the smart URL list
system. Members of the internet freedom community and anyone from the
public will be able to share feedback on which URLs should be
prioritized.

To ensure that the measurements are more actionable, we are developing
data analysis capabilities aimed at examining results from a
website-centric perspective. This involves data analysis and pipeline
work necessary for extracting website metrics, as well as adding data
export capabilities for website-related metrics.

# Call to Action

## Review URLs included in the Citizen Lab test lists

Which URLs are prioritized for OONI Probe testing depends on which URLs
are included in the [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists).
This means that if certain URLs are blocked or otherwise interesting to
test, but they are not included in the relevant Citizen Lab test lists,
they will not be tested by OONI Probe users and relevant [OONI data](https://ooni.org/data/) will likely not be available.

We therefore [encourage URL contributions](https://ooni.org/get-involved/contribute-test-lists#contributing-to-test-lists)
to the Citizen Lab test lists.

## Review URL categorizations

The URLs included in the Citizen Lab test lists are categorized based on
a set of [30 categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv),
and the OONI smart list system will prioritize testing based on these
categories.

This emphasizes the need to ensure that URLs in the [Citizen Lab test lists](https://github.com/citizenlab/test-lists/tree/master/lists) are
categorized as accurately as possible. Your [help in reviewing URL categories in the Citizen Lab test lists](https://ooni.org/get-involved/contribute-test-lists#reviewing-test-lists)
(and changing any inaccurate categorizations) would be greatly
appreciated!
