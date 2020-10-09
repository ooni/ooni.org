---
title: "OONI Probe ASN Incident Report"
author: "Maria Xynou, Simone Basso"
date: "2020-10-09"
tags: ["bug", "incident", "asn", "ooniprobe"]
categories: ["blog"]
---

Last week we [noticed](https://github.com/ooni/explorer/issues/495)
that some OONI measurements were available on [OONI Explorer](https://explorer.ooni.org/) under a report ID containing a
valid [Autonomous System Number (ASN)](https://ooni.org/support/glossary/#asn), even though the raw
JSON data contained zero as the ASN (i.e. encoded as `AS0`). We
initially thought that this was caused by a bug in our API code, but it
actually turned out to be an [OONI Probe](https://ooni.org/install/)
bug in our [probe engine](https://github.com/ooni/probe-engine) (which
powers the OONI Probe apps).

Please **[update your OONI Probe mobile app to the latest version (2.7.0)](https://ooni.org/install/mobile)**, which fixes this bug.
If you are an OONI Probe desktop app user and prefer not to share your
network ASN, please refrain from running tests until we have released a
fix for OONI Probe desktop ([hopefully this will be possible next week](https://github.com/ooni/explorer/issues/495#issuecomment-705518245)).

When we investigated this issue, we
[found](https://github.com/ooni/probe-engine/pull/966) that the probe
was opening a report with the real ASN of the user’s network, regardless
of whether the user had opted out of sharing their ASN with OONI.
Because the OONI backend uses the ASN submitted by the probe to
construct the report ID, the actual ASN was leaked in the report ID of
OONI measurements.

In practice, this means that if you disabled the “Include Network Info”
setting in your OONI Probe app — which would normally disable the
collection and publication of your network ASN (e.g. `AS30722` for
“Vodafone Italia”) — your network ASN *was not* published in the OONI
Explorer measurement page or in the raw JSON data (where it was
displayed as `AS0`), but *it was* included in the report ID of those
measurements.

As soon as we noticed this bug, we swiftly worked on resolving this
incident. Specifically, we:

* **Audited the [probe-engine codebase](https://github.com/ooni/probe-engine) to determine
whether there were other similar issues.** We found that the user
network ASN (when the user had opted out of ASN collection) is not
only leaked in the report ID, but that in some cases, the network
name (such as “Vodafone Italia”) is displayed in the raw data,
even though the annotated ASN is `AS0`. We also realized that
because we don’t sanitize the resolver IP (as this information is
useful for measuring DNS consistency), it has been possible to
obtain the ASN through it (ever since the [OONI Web Connectivity test was released](https://ooni.org/post/web-connectivity/) in
mid-2016).

* **Implemented [changes](https://github.com/ooni/probe-engine/compare/fe78736...0772010)
to our Go probe engine that fix this bug and sanitize the resolver
IP.** These changes not only ensure that the user network ASN is
no longer leaked through the report ID of measurements (when users
have opted out of ASN collection), but they also help ensure that
the network name is not disclosed when measurements are annotated
as `AS0`, and that the ASN is *not* retrieved through the
resolver IP. We also implemented tests to ensure that the fixes
work as expected.

* **[Released a new OONI Probe mobile app version (2.7.0)](https://ooni.org/install/mobile).** We fixed the bug on
OONI Probe [Android](https://github.com/ooni/probe-android/releases/tag/v2.7.0)
and [iOS](https://github.com/ooni/probe-ios/releases/tag/v2.7.0)
and released OONI Probe Mobile 2.7.0 with the bug fix.

* **[Fixed](https://github.com/ooni/probe-cli/releases/tag/v3.0.8) the bug on OONI Probe desktop.** We fixed the bug in the OONI
Probe desktop app, but unfortunately it has not been possible to
make a release yet (as third party action is required). We are
hoping that it will be possible to release the OONI Probe desktop
app with the bug fix next week.

* **Evaluated how many global OONI measurements were affected by this bug.** According to our analysis, only around 2% of global OONI
measurements leaked the user network ASN in the report ID (this
mainly involves new probes), and about 12% of global OONI
measurements *might* have disclosed the ASN through the client
resolver in [OONI’s Web Connectivity test](https://ooni.org/nettest/web-connectivity/) (this mainly
involves legacy probes).

* **Made [changes](https://github.com/ooni/explorer/releases/tag/v2.0.10) to OONI Explorer to make `AS0` measurements harder to find.** As
a short-term solution, we removed the listing of measurements
annotated as `AS0` (when users have opted out of ASN collection)
from the [OONI Explorer Search page](https://explorer.ooni.org/search), and we ensured that
users *cannot* filter OONI Explorer measurements based on `AS0`.
For extra precaution, we also made OONI Explorer measurements
annotated as `AS0` return a 404 error, instead of the
measurement page and raw data.

As a next step, we [plan](https://github.com/ooni/backend/issues/458)
to remove past `AS0` measurements from the [OONI API](https://api.ooni.io/) entirely. We will also explore whether we
can make changes to the [fast-path pipeline](https://github.com/ooni/pipeline) so that all past `AS0`
measurements are sanitized. But this is a very complex task, and we
unfortunately are unable to make these changes at the moment, as we are
busy migrating our infrastructure over to another data centre and
building a new PostgresDB to accommodate this migration.

We will also evaluate whether we can release a fix for the [legacy version of OONI Probe](https://github.com/ooni/probe-legacy) (which is
primarily run on Linux platforms). However, according to our analysis,
most legacy users are using ooniprobe 2.1.0 as packaged by Debian
jessie. But because no subsequent OONI Probe versions have been packaged
for Debian, it seems that tagging a new release of the legacy probe is
not going to solve the original problem. Since that version of OONI
Probe is deprecated, we recommend the use of the [OONI Probe Command Line Interface (CLI)](https://github.com/ooni/probe-cli) instead
([version 3.0.8 of probe-cli](https://github.com/ooni/probe-cli/releases/tag/v3.0.8)
contains a fix for this issue). Over the next year, we aim to release
Linux packages for OONI Probe which would serve as a replacement for the
legacy version of OONI Probe.

We decided to publish this incident report at this time because the
issue is solved on [OONI Probe mobile platforms](https://ooni.org/install/mobile) (which account for the
majority of global OONI Probe users) and on [OONI Explorer](https://explorer.ooni.org/). We are currently unable to
release the OONI Probe desktop app with the bug fix because we are
waiting on a third party for a signing certificate. We nonetheless chose
to inform our community in advance and offer a solution in the interim
([update to the latest OONI Probe 2.7.0 mobile app version](https://ooni.org/install/mobile) and stop running OONI Probe
desktop tests if you are concerned about disclosing your network ASN).

**Most OONI Probe users were *not* affected by this bug**, since roughly
86% of OONI measurements collected from around the world did *not*
disable the collection and publication of network information, which is
enabled in the default settings.

The reason why we have this setting *enabled by default* is because
identifying the network on which tests are performed is important in
evaluating where potential internet censorship took place. Without this
information, if a measurement shows the blocking of a website, we can
know that this blocking took place in a given country (because OONI
Probe users *[cannot opt out](https://ooni.org/about/data-policy#data-we-collect)* of country
code collection), but we don’t know on which network the blocking
occurred.

Knowing the network on which internet censorship is implemented is
*important* because it:

* Increases transparency of internet censorship implemented by
different Internet Service Providers (ISPs) in a country (and
allows the public to evaluate whether that censorship is in
compliance with the country’s laws and government orders);

* Allows us to potentially compare internet censorship across ISPs in
a country (particularly since we often see that internet
censorship varies across networks);

* Allows us to track censorship changes over time on a network;

* Improves OONI data analysis capabilities and helps with confirming
censorship events with more confidence (since it is important to
look at aggregate measurements on a specific network over time).

Due to the above reasons, given the *very limited value* of measurements
annotated as `AS0`, and in light of the fact that a small percentage
of global OONI measurements opt out of ASN collection, we are
**[considering the possibility of removing this option](https://github.com/ooni/probe-engine/issues/974) (i.e. to opt
out of ASN collection) entirely from the OONI Probe app settings**. For
the time being though, we have [fixed this bug](https://github.com/ooni/explorer/issues/495#issuecomment-704200732)
and [released a fix](https://ooni.org/install/mobile) for our users.

We have always aimed to provide OONI Probe users with as much choice as
possible (in terms of data collection settings), because we recognize
that people run OONI Probe in different environments, have different
threat models, and feel comfortable with different options.

Since 2012, we have gone to extra lengths in order to provide our
community with as much choice as possible in terms of data collection
options. But we have learned (from this and from a [previous incident](https://ooni.org/post/ooni-probe-android-200-incident/)) that
this adds extra complexity to our codebase, making the detection and
prevention of such bugs harder. This is particularly the case given the
[many large and complex codebases](https://github.com/ooni) that we
maintain, and our limited resources (we’re a small team in the nonprofit
world).

The OONI team sincerely apologizes to the OONI community for this
incident. We would never intentionally harm our users, we value and
respect user choice, and we take seriously the trust our users have
placed in us. We do our best to give you as much control over how you
use OONI Probe, but sometimes we make mistakes.

To limit the possibility of such bugs recurring in the future, we are
working on improving our development practices. To this end, we will
continue to:

* Proactively search for sources of complexity and remove them with
the goal of **reducing the overall complexity of our codebases**;

* Improve how we do **testing of our apps** (both in terms of unit
tests, but also end-to-end integration tests);

* Strengthen our **quality assurance and release management
workflow**;

* Be more thorough and rigorous in how we do **code review** for all
our software;

* Ensure that OONI developers follow the best practices outlined in
our [software development guidelines](https://ooni.org/post/ooni-software-development-guidelines).

To learn more about our data practices and about the principles that
govern OONI data collection, please refer to our [Data Policy](https://ooni.org/about/data-policy).

If you have any questions related to this incident or anything else OONI
related, please do not hesitate to reach out to us at:
[contact@openobservatory.org](mailto:contact@openobservatory.org).
