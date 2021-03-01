---
title: Frequently Asked Questions (FAQ)
description: This Frequently Asked Questions (FAQ) section aims to address the questions that we are frequently asked by the community.
aliases:
    - /about/faq/
---

This Frequently Asked Questions (FAQ) section aims to address the
questions that we are frequently asked by the community.

Are there other questions you would like us to address? Please [let us know](https://ooni.org/about/#contact).

* [About OONI](#about-ooni)

    * [What is OONI?](#what-is-ooni)

    * [Why OONI?](#why-ooni)

    * [What does OONI do?](#what-does-ooni-do)

    * [Why measure internet censorship?](#why-measure-internet-censorship)

    * [How is OONI funded?](#how-is-ooni-funded)

    * [What is OONI's relationship with The Tor Project?](#what-is-oonis-relationship-with-the-tor-project)

    * [How can I get involved?](#how-can-i-get-involved)

* [OONI Probe](#ooni-probe)

    * [What is OONI Probe?](#what-is-ooni-probe)

    * [But my country doesn't have censorship. Why run OONI Probe?](#but-my-country-doesnt-have-censorship-why-run-ooni-probe)

    * [What do OONI Probe tests do?](#what-do-ooni-probe-tests-do)

    * [How do OONI Probe tests measure internet censorship?](#how-do-ooni-probe-tests-measure-internet-censorship)

    * [I am not a techie. Can I run OONI Probe?](#i-am-not-a-techie-can-i-run-ooni-probe)

    * [How can I run OONI Probe?](#how-can-i-run-ooni-probe)

    * [I ran OONI Probe. Should I send you the results?](#i-ran-ooni-probe-should-i-send-you-the-results)

    * [How often should I run OONI Probe?](#how-often-should-i-run-ooni-probe)

    * [How can I run OONI Probe daily?](#how-can-i-run-ooni-probe-daily)

    * [For how long should I run OONI Probe?](#for-how-long-should-i-run-ooni-probe)

    * [I found blocked websites. How can I circumvent their blocking?](#i-found-blocked-websites-how-can-i-circumvent-their-blocking)

    * [OONI Probe found a middlebox on my network. Does that mean I am under surveillance?](#ooni-probe-found-a-middlebox-on-my-network-does-that-mean-i-am-under-surveillance)

    * [Can I measure internet censorship remotely in another country?](#can-i-measure-internet-censorship-remotely-in-another-country)

    * [What types of data does OONI Probe collect?](#what-types-of-data-does-ooni-probe-collect)

    * [How can I opt-out from sending OONI measurements?](#how-can-i-opt-out-from-sending-ooni-measurements)

    * [What are the risks of running OONI Probe?](#what-are-the-risks-of-running-ooni-probe)

    * [How can I reduce the risks associated with running OONI Probe?](#how-can-i-reduce-the-risks-associated-with-running-ooni-probe)

    * [Can I run OONI Probe over a VPN?](#can-i-run-ooni-probe-over-a-vpn)

    * [Can OONI provide legal advice?](#can-ooni-provide-legal-advice)

* [Testing websites](#testing-websites)

    * [Which websites will I test for censorship with OONI Probe?](#which-websites-will-i-test-for-censorship-with-ooni-probe)

    * [What are test lists?](#what-are-test-lists)

    * [Why does OONI Probe use test lists?](#why-does-ooni-probe-use-test-lists)

    * [Why doesn’t the OONI Probe mobile app test all of the websites in test lists?](#why-doesnt-the-ooni-probe-mobile-app-test-all-of-the-websites-in-test-lists)

    * [How can I change the testing duration in the OONI Probe mobile app to test more websites?](#how-can-i-change-the-testing-duration-in-the-ooni-probe-mobile-app-to-test-more-websites)

    * [How can I find my country’s test list?](#how-can-i-find-my-countrys-test-list)

    * [Why doesn’t my country have a test list?](#why-doesnt-my-country-have-a-test-list)

    * [Who decides which websites are included in test lists?](#who-decides-which-websites-are-included-in-test-lists)

    * [How can I contribute to test lists?](#how-can-i-contribute-to-test-lists)

    * [I’m not a GitHub user, but I’d still like to submit URLs for testing. How can I do so?](#im-not-a-github-user-but-id-still-like-to-submit-urls-for-testing-how-can-i-do-so)

    * [What is the difference between a test list and a blocklist?](#what-is-the-difference-between-a-test-list-and-a-blocklist)

    * [How can I test all the URLs included in an official blocklist?](#how-can-i-test-all-the-urls-included-in-an-official-blocklist)

    * [What types of websites will OONI Probe test?](#what-types-of-websites-will-ooni-probe-test)

    * [How can I choose which types of websites to test?](#how-can-i-choose-which-types-of-websites-to-test)

    * [How can I choose which websites to test?](#how-can-i-choose-which-websites-to-test)

    * [How can I test a custom list of URLs?](#how-can-i-test-a-custom-list-of-urls)

* [OONI data](#ooni-data)

    * [What is OONI data?](#what-is-ooni-data)

    * [Why does OONI publish data?](#why-does-ooni-publish-data)

    * [Where does OONI publish data?](#where-does-ooni-publish-data)

    * [How can I interpret OONI data?](#how-can-i-interpret-ooni-data)

    * [How can I fetch and analyze OONI data?](#how-can-i-fetch-and-analyze-ooni-data)

* [OONI Explorer](#ooni-explorer)

    * [What is OONI Explorer?](#what-is-ooni-explorer)

    * [How can I find blocked websites via OONI Explorer?](#how-can-i-find-blocked-websites-via-ooni-explorer)

    * [How can I access measurements?](#how-can-i-access-measurements)

    * [How can I find OONI data via OONI Explorer?](#how-can-i-find-ooni-data-via-ooni-explorer)

    * [How can I find “evidence of internet censorship” in a measurement?](#how-can-i-find-evidence-of-internet-censorship-in-a-measurement)

    * [How can I find blocked websites in my country?](#how-can-i-find-blocked-websites-in-my-country)

    * [How can I check if a specific website is blocked?](#how-can-i-check-if-a-specific-website-is-blocked)

    * [Why can’t I find results for a specific website?](#why-cant-i-find-results-for-a-specific-website)

    * [How can I check the blocking of websites during a specific time period?](#how-can-i-check-the-blocking-of-websites-during-a-specific-time-period)

    * [What do you mean by “Confirmed”?](#what-do-you-mean-by-confirmed)

    * [I know of many other websites that are blocked. Why doesn’t OONI Explorer show them when I select “confirmed”?](#i-know-of-many-other-websites-that-are-blocked-why-doesnt-ooni-explorer-show-them-when-i-select-confirmed)

    * [Why does OONI confirm censorship when a block page is served?](#why-does-ooni-confirm-censorship-when-a-block-page-is-served)

    * [Why doesn’t OONI confirm other cases of internet censorship (beyond block pages)?](#why-doesnt-ooni-confirm-other-cases-of-internet-censorship-beyond-block-pages)

    * [What do you mean by “Anomalies”?](#what-do-you-mean-by-anomalies)

    * [Why does OONI Explorer suggest that a site or app that I can access is blocked in my country?](#why-does-ooni-explorer-suggest-that-a-site-or-app-that-i-can-access-is-blocked-in-my-country)

    * [What are false positives?](#what-are-false-positives)

    * [Why do false positives occur?](#why-do-false-positives-occur)

    * [How can I distinguish false positives?](#how-can-i-distinguish-false-positives)

    * [How can I check results from other OONI Probe tests?](#how-can-i-check-results-from-other-ooni-probe-tests)

    * [Why doesn’t my country have any recent measurements on OONI Explorer?](#why-doesnt-my-country-have-any-recent-measurements-on-ooni-explorer)


## About OONI

### What is OONI?

The [Open Observatory of Network Interference (OONI)](https://ooni.org/) is a free software project that aims to
empower decentralized efforts in increasing transparency of internet
censorship around the world.

Since 2012, OONI has released several [censorship measurement apps (OONI Probe)](https://ooni.org/install/) and [openly published millions of network measurements](https://ooni.org/data/) on internet
censorship worldwide.

### Why OONI?

You can use our [free software tools](https://github.com/ooni),
[open methodologies](https://ooni.org/docs/), and [open data](https://ooni.org/data/) to *verify* our findings, reproduce our
studies, and investigate internet censorship in your country.

We created OONI to **support public debate, and evidence-based reporting
and advocacy** on information controls.

### What does OONI do?

To empower decentralized efforts in increasing transparency of internet
censorship worldwide, we:

* **Build free and open source software for detecting
internet censorship.** [OONI Probe](https://ooni.org/install/)
is a network measurement tool that you can run to measure various forms of internet censorship, as well as network speed and performance.

* **Analyze and openly publish network measurements.** Every day, we
analyze and openly publish measurements on [OONI Explorer](https://explorer.ooni.org/), a website hosting
millions of network measurements from more than 200 countries from
2012 to date.

* **Publish research reports on internet censorship worldwide.** Based
on the analysis of OONI measurements, we publish [research reports](https://ooni.org/post/) (often in collaboration with our
local [partners](https://ooni.org/partners/))
documenting cases of internet censorship around the world.

### Why measure internet censorship?

Internet censorship can constitute a violation of human rights (such as
the right to freedom of expression and the right to access information).

However, identifying the *intentional* blocking of sites and services
can be tricky. Below are some reasons why:

1. **It’s harder to notice the blocking of less popular sites
and services.** Internet censorship is easier to notice when it
affects services that we commonly use, or when their blocking
receives media coverage. The [blocking of Telegram and Instagram in Iran](https://ooni.org/post/2018-iran-protests/), for example,
received a fair amount of [media coverage](http://www.bbc.com/news/world-middle-east-42529576) and
international attention, whereas the [blocking of religious and ethnic minority sites](https://ooni.org/post/iran-internet-censorship/#human-rights-issues)
may be less known.

2. **Internet censorship often differs from network to network within
a country.** In many countries around the world, Internet Service
Providers (ISPs) block access to different websites, often as a result of vague government orders. A site
that may be accessible in your network may be blocked in another.

3. **Most censorship techniques are quite subtle.** When an ISP serves
a block page, they inform you that a site is intentionally
censored (and they often include a legal justification). Some
ISPs, however, serve *blank* block pages which can potentially
create ambiguity on whether a site is intentionally blocked or
inaccessible due to other reasons (such as bad connectivity). In
many countries, ISPs don’t serve block pages at all. Rather, they
block sites by entirely different means (such as DNS tampering,
TCP/IP blocking, or RST injection) which don’t inform users, nor
provide a justification for the censorship. In these cases, it’s
harder to determine whether a site is intentionally blocked, or if
it’s inaccessible due to other reasons (such as a transient
network failure or a [case of DNS misconfiguration](https://ooni.org/post/not-quite-network-censorship/)).

4. **Some ISPs adopt a combination of different
censorship techniques.** While your ISP may serve a block page for
some sites (informing you that those sites are intentionally
blocked), they may block different sites with different techniques
-- limiting your ability to notice the blocking of those
other sites. In some countries, ISPs even [block the same sites with different techniques](https://ooni.org/post/iran-internet-censorship/#blocked-domains-and-tools).

5. **Over-blocking and collateral damage.** In Indonesia, for example,
[Vimeo and Reddit were found to be blocked even though their ban was lifted](https://ooni.org/post/indonesia-internet-censorship/)
more than 2 years ago. In Egypt, a number of sites that were
hosted on the same CDN as The New Arab were
[blocked](https://ooni.org/post/egypt-network-interference/#collateral-damage)
as well.

6. **The fact that a site or service is inaccessible doesn’t
necessarily mean that it’s blocked by your ISP.** Maybe it’s
hosted on an unreliable server, or maybe the site/service owner is
blocking all IP addresses originating from the country that you
are trying to access it from (in compliance with laws
and regulations).

Measuring internet censorship is, therefore, important because it allows
us to **inspect a network** and to examine the reasons as to why and how
we are (or aren’t) able to connect to an internet service.

When inspecting a network we observe, for example, that our ISP is
spoofing the IP address of the website that we’re trying to access, this
information can potentially **serve as evidence of intentional
interference** with our ability to access the intended website.

Through the use of [OONI Probe](https://ooni.org/install/), you can
measure networks and collect data that shows what is blocked, how, when,
and by whom.

### How is OONI funded?

Like most projects in the nonprofit world, OONI is primarily supported
by foundations.

The [Open Technology Fund (OTF)](https://www.opentech.fund/) has been
our main funder over the years, originally [supporting the creation of OONI back in 2012](https://www.opentech.fund/results/supported-projects/ooni-open-observatory-of-network-interference/).
The OTF has
[supported](https://www.opentech.fund/results/supported-projects/)
some of the most prominent free software projects that advance human
rights on the internet, such as
[Tor](https://www.opentech.fund/results/supported-projects/tor-project/)
and
[Signal](https://www.opentech.fund/results/supported-projects/open-whisper-systems/).

We have received support from Mozilla ([Mozilla Open Source Support](https://www.mozilla.org/en-US/moss/)) to [revamp OONI Explorer](https://ooni.org/post/next-generation-ooni-explorer/). The
initial creation of OONI Explorer (originally [launched in March 2016](https://blog.torproject.org/ooni-explorer-censorship-and-other-network-anomalies-around-world))
was supported by the [German Foreign Ministry](https://www.auswaertiges-amt.de). Over the years, we have
received support from several other foundations as well, such as the
[Media Democracy Fund (MDF)](https://mediademocracyfund.org/) and the [National Science Foundation (NSF)](https://www.nsf.gov/).

We have also received other forms of support, such as donations from
companies like [AirVPN](https://airvpn.org/) and
[VPNCompare](https://www.vpncompare.co.uk/). We have received
infrastructure support from [Greenhost](https://greenhost.net/) (who
have been providing us servers since 2016) and Amazon (for [hosting OONI measurements on Amazon S3](https://ooni-data.s3.amazonaws.com/)
and for [using their big data tooling](https://aws.amazon.com/research-credits/) for analyzing
measurements).

### What is OONI’s relationship with The Tor Project?

OONI was born out of [The Tor Project](https://www.torproject.org/).

Back in 2011, Tor Project developers started creating open methodologies
and frameworks with the goal of measuring various forms of network
interference, resulting in the creation of OONI.

OONI has since been [one of the projects hosted under The Tor Project Inc.](https://2019.www.torproject.org/projects/projects.html.en).

### How can I get involved?

There are many ways you can get involved!

* **[Run OONI Probe](https://ooni.org/install/)**. The more
networks are measured, the more likely we (OONI and the public)
are to detect internet censorship and other forms of
network interference. Even if you don’t detect censorship,
contributing measurements is still very useful (for data analysis
and historical purposes).

* **[Suggest URLs for testing](https://ooni.org/get-involved/contribute-test-lists/)**.
The censorship findings are only as interesting as the websites
that are tested. Please help us improve the quality of
measurements by adding websites that you think should be tested!

* **[Translate the OONI Probe apps](https://wiki.localizationlab.org/index.php/OONI_Probe)**.
By [translating the OONI Probe apps](https://www.transifex.com/otf/ooniprobe/), you are enabling
more communities to measure internet censorship.

* **Participate in community discussions.** Join us on our
[Slack](https://slack.ooni.org/) or IRC (ircs://irc.oftc.net:6697/#ooni) channel for real-time discussions,
and sign-up on our [mailing list](https://lists.torproject.org/cgi-bin/mailman/listinfo/ooni-talk)
to receive updates and share news.

* **Facilitate OONI workshops.** Engage your local communities with
the use of [OONI Probe](https://ooni.org/install/) and [OONI data](https://ooni.org/data/). Spread the word!

* **Coordinate censorship testing with OONI Probe users around
the world.** Use the [OONI Run platform](https://run.ooni.io/)
to generate links based on the websites you want to test, and
share those links with OONI Probe users around the world!

* **Use OONI data in your research.** OONI provides [free software](https://ooni.org/install/), [open methodologies](https://ooni.org/docs/), and [open data](https://ooni.org/data/) that you can use as part of
your research. View some of our [research reports](https://ooni.org/post/) to see examples of what you can
uncover through OONI data!

* **Use OONI data in your journalistic reporting.** Enhance the credibility of your stories by referencing network measurement
data as evidence of censorship events. [Discover untold censorship stories](https://cpj.org/blog/2019/09/qa-ooni-explorer-team-unlock-the-webs-untold-censo.php)
through [OONI data](https://explorer.ooni.org) and share them with the public.

* **Use OONI data in your advocacy.** Inform your advocacy efforts
based on censorship events and trends identified around the world
through [OONI data](https://ooni.org/data/).

* **Examine the legality of censorship events identified through
OONI data.** Share your legal analysis with the public and
consider using OONI data as evidence in court cases.

* **[Analyze OONI data](https://ooni.org/post/mining-ooni-data/)**. OONI data
is a goldmine, consisting of millions of measurements collected
from more than 200 countries since 2012. Every day, hundreds of
thousands of new measurements are published. Dig through [OONI data](https://ooni.org/data/) and discover cases of internet
censorship!

* **Visualize data**. Communicate OONI censorship findings through the
creation of data visualizations.

* **[Join the OONI Partnership Program](https://ooni.org/get-involved/partnership-program/)**.
Collaborate with us on the study of internet censorship. Engage
your local communities with [OONI Probe](https://ooni.org/install/), [update test lists](https://ooni.org/get-involved/contribute-test-lists/), and
[report](https://ooni.org/post/) on censorship findings.

* **[Help improve OONI software](https://github.com/ooni)**. We
develop and maintain many software projects that power the
OONI ecosystem. All of our code is open source and we encourage
you to review and/or contribute to it!

* **[Write a network measurement test for OONI Probe](https://ooni.org/docs/writing_tests.html)**. OONI
Probe was created based on open methodologies and frameworks to
enable community members to contribute their own network
measurement tests. If this interests you, [please reach out](https://ooni.org/about/#contact) so that we can coordinate.

## OONI Probe

### What is OONI Probe?

OONI Probe is [free and open source software](https://github.com/ooni/probe) designed to measure internet
censorship and other forms of network interference.

### But my country doesn’t have censorship. Why run OONI Probe?

We think it’s important to measure networks for censorship in every
country of the world (regardless of whether cases of internet censorship
have been reported or not) because:

* Censorship is often [politically motivated](https://explorer.ooni.org/) and can therefore change
depending on those in power and political events.

* If censorship starts taking place in your country, you’ll have data
to prove it (and previous data to compare it against).

* Many cases of internet censorship can go unnoticed, such as the
blocking of minority group websites.

* Internet censorship can differ from network to network within
a country. Perhaps internet services that are accessible on your
network are blocked on others.

* It’s not always clear if an internet service is *intentionally*
blocked, or if it’s inaccessible due to other reasons (such as
network issues).

* As long as there is no transparency, governments and Internet
Service Providers (ISPs) can potentially seek *plausible
deniability* (especially if it’s not clear that a service is
intentionally blocked).

* We consider it **good democratic practice to keep those in power to
account**.

* By contributing measurements, you are helping to **create a public
archive on network interference worldwide**. **You will enable
future generations to see what was happening on the network level
of the internet.**

### What do OONI Probe tests do?

[OONI Probe](https://ooni.org/install/) consists of [multiple free software tests](https://github.com/ooni/spec/tree/master/nettests)
designed to measure:

* Blocking of websites;

* Blocking of instant messaging apps (WhatsApp, Facebook Messenger,
Telegram);

* Blocking of censorship circumvention tools (such as Tor, Psiphon, and pluggable transports);

* Presence of middleboxes (i.e. systems that could be responsible for
censorship or surveillance);

* Speed and performance of networks.

### How do OONI Probe tests measure internet censorship?

To measure the blocking of a website, [OONI Probe](https://ooni.org/install/) automatically performs [certain checks](https://ooni.org/nettest/web-connectivity/) towards that
website from two networks:

* The network of the user (which may be censored)

* A control network (which is *not* censored)

The results from the two networks are automatically compared. If they
are the same, the tested website is considered accessible. However, if
the results differ, it’s possible that access to the tested website is
blocked.

You can learn how each OONI Probe test works through the links provided
below:

* Web Connectivity test: https://ooni.org/nettest/web-connectivity/

* WhatsApp test: https://ooni.org/nettest/whatsapp/

* Facebook Messenger test: https://ooni.org/nettest/facebook-messenger/

* Telegram test: https://ooni.org/nettest/telegram/

* HTTP Invalid Request Line test: https://ooni.org/nettest/http-invalid-request-line/

* HTTP Header Field Manipulation test: https://ooni.org/nettest/http-header-field-manipulation/

* NDT: https://ooni.org/nettest/ndt/

* DASH: https://ooni.org/nettest/dash/

You can also view the test specifications here: https://github.com/ooni/spec/tree/master/nettests

### I am not a techie. Can I run OONI Probe?

Absolutely! You can install the OONI Probe mobile app (for
[Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe)
and [iOS](https://itunes.apple.com/us/app/id1199566366)), which is the
easiest way to run OONI Probe. You can run tests with the tap of a
button!

We’re generally working towards making OONI Probe as easy to install and
run as possible. This includes a [new OONI Probe desktop app for Windows and macOS](https://github.com/ooni/probe-desktop/releases) with
similar design, UX, and features as the mobile app.

### How can I run OONI Probe?

You can run OONI Probe on the following platforms:

* Android: https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe

* iOS: https://itunes.apple.com/us/app/id1199566366

* F-Droid: https://f-droid.org/repository/browse/?fdid=org.openobservatory.ooniprobe

* Windows & macOS: https://github.com/ooni/probe-desktop/releases (new and experimental)

* Linux: https://github.com/ooni/probe-cli/releases (new and experimental)

Older versions of OONI Probe (which are no longer updated) are available
for:

* Linux & macOS: https://ooni.org/install/ooniprobe

* Raspberry Pi: https://ooni.org/install/lepidopter/

### I ran OONI Probe. Should I send you the results?

No need to. OONI Probe is designed to automatically send us your results
as soon as you run a test (unless if you have opted-out in the
settings). Your results will automatically get
[processed](https://github.com/ooni/pipeline) and
[published](https://ooni.org/data/).

### How often should I run OONI Probe?

As often as possible. Internet censorship can emerge abruptly, while the
blocking and unblocking of internet services may change over time.

To more effectively track internet censorship, you would ideally run
OONI Probe every day.

### How can I run OONI Probe daily?

We are adding support for [automatic daily testing](https://github.com/ooni/probe/issues/916). Stay tuned!

### For how long should I run OONI Probe?

As long as possible. Internet censorship can emerge abruptly, while the
blocking and unblocking of internet services may change over time.

Every time you run OONI Probe, you contribute measurements to a [public archive on network interference](https://explorer.ooni.org/) (since
your measurements get published).

To more effectively track internet censorship over time, you would
ideally run OONI Probe for as long as possible (years).

### I found blocked websites. How can I circumvent their blocking?

You can circumvent the blocking of websites or apps through the use of
[Tor Browser](https://www.torproject.org/download/) or a VPN (such as
[Psiphon](https://psiphon.ca/en/download.html?psiphonca)).

### OONI Probe found a middlebox on my network. Does that mean I am under surveillance?

No, not necessarily.

Many Internet Service Providers (ISPs) use middleboxes for a wide range
of networking purposes (such as caching), many of which have nothing to
do with surveillance or implementing internet censorship.

### Can I measure internet censorship remotely in another country?

OONI Probe tests are designed with the goal of measuring internet
censorship as a user would experience it within a country. OONI Probe is
designed to measure the network it connects to, in the country that that
network is located.

If you perform tests remotely (without physically being located in that
specific country) -- for example, through the use of a VPS -- you will
likely receive inaccurate results because the OONI Probe heuristics are
not designed for that.

For remote testing, we would recommend other tools, such as
[Satellite](https://censoredplanet.org/projects/satellite), which
scans the internet for open DNS resolvers and performs queries to them
in an attempt to identify DNS based blocking.

### What types of data does OONI Probe collect?

OONI Probe was built with the privacy and security of its users in mind,
but it’s *not* a privacy tool. We therefore try to limit data collection
to types of data that are necessary for measuring various forms of
internet censorship.

By default, OONI Probe collects:

* The **date and time** of a measurement (such as “2019-10-30,
14:00 UTC”)

* **Country code** (such as “IT” for Italy)

* **Information about your network:** This includes the AS Number (for example,
“AS30722” if a test was performed on Vodafone Italia) and the type of network
you are on (wifi or mobile).

* **Network measurement data** (which varies depending on the specific
[test](https://github.com/ooni/spec/tree/master/nettests) performed)

By default, OONI Probe does **not** collect your IP address. You can,
however, opt-in to submit your IP address (via the settings in the OONI
Probe apps) if you would like to enhance the accuracy of information.

We **might unintentionally** collect your IP address and other
personally-identifiable information if this is included in the HTTP
headers or other metadata of measurements. This data might be collected
if the websites OONI Probe is testing employ tracking technologies or
contain custom content. We take measures to remove IP addresses and
other potentially personally-identifiable information from our database
of collected measurements to reduce the risk to you.

Learn more about our data practices through the OONI Data Policy:
[https://ooni.org/about/data-policy/](https://ooni.org/about/data-policy/)

### How can I opt-out from sending OONI measurements?

Through the settings of the OONI Probe apps, you can:

* Disable the “**Include Network Info**” setting to **opt-out from
submitting the ASN** (such as “AS30722” for Vodafone Italia) of
the network are running OONI Probe from.

* Disable the “**Include Country Code**” setting to **opt-out from
submitting the code of the country** (such as “IT” for Italy) you
are running OONI Probe from.

* Disable the “**Automatically Publish Results**” setting to **opt-out
from sharing (and publishing) any measurements** at all.

### What are the risks of running OONI Probe?

To our knowledge, no one has ever gotten into trouble as a result of
running OONI Probe. That said, running OONI Probe can potentially be
risky.

Some things to take into account:

* **OONI Probe is *not* a privacy tool.** Anyone monitoring your
internet activity (e.g. government, ISP, employer) may see that
you are running OONI Probe (just the way they can probably see all
other software you run).

* **OONI Probe is an investigatory tool.** Some OONI Probe tests are
explicitly designed to uncover internet censorship.

* **[Your threat model](https://www.eff.org/keeping-your-site-alive/evaluating-your-threat-model)**.
A high-profile activist already under heavy surveillance, for
example, might attract more attention when running OONI Probe.

* **The laws and regulations of the country you’re running OONI
Probe from.** Best to consult with local lawyers.

* **The types of websites you test.** You might test legally banned
(in some countries), provocative or objectionable websites through
the use of OONI Probe.

* **The types of OONI Probe tests you run.** Not all OONI Probe tests
carry the same weight in terms of potential risk. OONI Probe, for
example, includes the [NDT test](https://ooni.org/nettest/ndt/)
(designed to measure the speed and performance of a network) which
may be viewed as less political or controversial in comparison to
other tests designed to measure the blocking of websites or apps.

* **Whether you publish your measurements or not.** OONI [openly publishes measurements](https://ooni.org/data/) collected from
OONI Probe users to increase transparency of internet censorship
around the world. We do our best not to publish your IP address or
any other potentially personally-identifiable information.

To learn more about potential risks associated with the use of OONI
Probe, please refer to our documentation: https://ooni.org/about/risks/

### How can I reduce the risks associated with running OONI Probe?

We aim to provide you with as much *choice* as possible, so that you can
mitigate potential risks and customize your usage of OONI Probe
depending on what you feel comfortable with.

You can:

* **Limit your testing to the websites of your choice.** The “Choose
websites” button inside the OONI Probe mobile app enables you to
test specific websites of your choice. You can also test a custom
list of sites using the [OONI Run platform](https://run.ooni.io/), and you can influence which URLs
are measured by OONI Probe users by [contributing to test lists](https://ooni.org/get-involved/contribute-test-lists/).

* **Limit your testing to the tests you feel more comfortable with.**
Through the OONI Probe mobile and (new) desktop apps, you need to
initiate a test by tapping or clicking on it (i.e. tests don’t run
automatically be default).

* **Opt-out from sharing certain data.** Through the settings of the
OONI Probe apps, you can disable the submission of network
information (the Autonomous System Number (ASN) of the network
where you’re running tests) and country code (for example, GR
for Greece). In this case, you would be submitting
(for publication) a measurement which cannot be attributed to a
specific network and/or country.

* **Opt-out from sharing any measurements.** Through the settings of
the OONI Probe apps, you can opt-out from sending OONI any
measurements at all. In this case, the results of your tests would
not be published (only you would have access to them through
your app).

* **Choose how to share your measurements.** If you run the [older version of OONI Probe for Linux and macOS](https://ooni.org/install/ooniprobe/), you have the
(more secure) option to upload your measurements to OONI servers through the use of [onion services](https://2019.www.torproject.org/docs/onion-services.html.en). This OONI Probe version though is no longer updated, as we’re
[building a new OONI Probe desktop app](https://github.com/ooni/probe-desktop/releases) (that will
also support onion services in the future).

### Can I run OONI Probe over a VPN?

We advise against running OONI Probe over a VPN because you wouldn’t be
measuring your network. You would, instead, be measuring the network
provider by your VPN, which is probably uncensored.

To capture internet censorship (as experienced by a local internet
user), turn-off your VPN (or any other circumvention software) prior to
running OONI Probe tests.

### Can OONI provide legal advice?

No. We are a team of software developers, and therefore cannot provide
any legal advice.

We do, however, share some questions that you can ask your lawyers
relating to the use of OONI Probe: https://ooni.org/about/risks/#seeking-legal-advice

## Testing websites

### Which websites will I test for censorship with OONI Probe?

When you tap “Run” in the OONI Probe apps, you will test the websites
included in the following two lists:

* **[Global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)**:
Includes internationally relevant websites (such as facebook.com),
most of which are in English;

* **[Country-specific test list](https://github.com/citizenlab/test-lists/tree/master/lists)**:
Includes websites that are only relevant to a specific country,
many of which are in local languages.

No matter which country you’re running OONI Probe from, you will always
test websites from the [global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv).

OONI Probe will automatically determine which country-specific list to
pick for testing based on the country you’re running OONI Probe from.
For example, if you run OONI Probe in Brazil, you will test websites
from the global test list and from the [Brazilian test list](https://github.com/citizenlab/test-lists/blob/master/lists/br.csv).
If you travel to Germany and run OONI Probe, it will test the websites
from the global and
[German](https://github.com/citizenlab/test-lists/blob/master/lists/de.csv)
test lists.

### What are test lists?

A [test list](https://ooni.org/get-involved/contribute-test-lists/#what-are-test-lists)
is a list of websites tested for censorship.

### Why does OONI Probe use test lists?

Testing all of the websites hosted on the internet is not feasible,
especially since OONI Probe is run by users with bandwidth constraints.
We therefore need to limit the testing to a selection of websites.

[Test lists](https://github.com/citizenlab/test-lists/tree/master/lists)
offer the following main advantages:

* They include a selection of **internationally relevant** websites
(global test list);

* They include a selection of **websites that are relevant to the
country of the user** (country test lists);

* They are **diverse** (including URLs that can fall under [30 categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)), providing
the opportunity to *discover* cases of censorship;

* They are public, which means that **users can check which websites
they will test** (prior to running tests);

* They are publicly hosted on GitHub, **encouraging community review
and contributions**;

* Because they are hosted on GitHub, **new websites are reviewed
carefully** before being integrated for testing (this, for
example, can help ensure that malicious sites don’t get added);

* They are **machine-readable** and as a result, OONI Probe can easily
use them for testing.

### Why doesn’t the OONI Probe mobile app test all of the websites in test lists?

Due to bandwidth constraints, default website testing via the OONI Probe
mobile app is limited to 90 seconds. OONI Probe will select a **random
sample of websites** (from the
[global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)
and
[country-specific](https://github.com/citizenlab/test-lists/tree/master/lists)
list) and **connect to as many of them as it can within 90 seconds**.

The OONI Probe desktop app tests all websites (from the
[global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)
and
[country-specific](https://github.com/citizenlab/test-lists/tree/master/lists)
list) in one go and you can limit the number of tested websites in the app settings.

### How can I change the testing duration in the OONI Probe mobile app to test more websites?

To test more websites, change the testing duration via the following
steps:

1.  Tap on the **Websites card** in your OONI Probe mobile app

2.  Tap on the **menu icon on the top right corner** (inside the
    Websites card)

3.  Tap on “**Test duration**”

4.  The default is 90 (seconds). Change this number to allow for
    longer testing.

5.  Tap “OK”

### How can I find my country’s test list?

The test list of each country is saved as a CSV file in the [Citizen Lab’s test list repository on GitHub](https://github.com/citizenlab/test-lists/tree/master/lists).

These files have been saved in the following format: **country code dot
csv.** For example, the Brazilian test list has been saved as
[br.csv](https://github.com/citizenlab/test-lists/blob/master/lists/br.csv)
(since “BR” is the country code for Brazil).

You can find your country’s test list by searching for a [CSV file with its country code](https://github.com/citizenlab/test-lists/tree/master/lists).

### Why doesn’t my country have a test list?

If you can’t find a test list for your country, that’s probably because
it doesn’t exist yet. In this case, OONI Probe would only test the
websites included in the
[global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)
test list.

Please [help us create a test list](https://ooni.org/get-involved/contribute-test-lists/#creating-new-test-lists)
for your country.

### Who decides which websites are included in test lists?

Anyone can! Test lists are publicly [hosted on GitHub by the Citizen Lab](https://github.com/citizenlab/test-lists) to encourage community
review and contributions.

We encourage you to [review which websites are included in test lists and to propose additional URLs](https://ooni.org/get-involved/contribute-test-lists/#reviewing-test-lists).

### How can I contribute to test lists?

Detailed information explaining how to contribute to test lists is
available through our guide: https://ooni.org/get-involved/contribute-test-lists/

If you’re a GitHub user, you can contribute to test lists by [opening a pull request](https://github.com/citizenlab/test-lists).

### I’m not a GitHub user, but I’d still like to submit URLs for testing. How can I do so?

Some of the greatest test list contributions come from people who don’t
use GitHub (such as social scientists), particularly since updating test
lists requires an understanding of the country’s social and political
environment.

If you’re not a GitHub user and would like to contribute to test lists,
please refer to our
[guide](https://ooni.org/get-involved/contribute-test-lists/) and send
us your updates by dropping us an email at
[contact@openobservatory.org](mailto:contact@openobservatory.org).

### What is the difference between a test list and a blocklist?

A test list is a **list of sites that we test** to check whether they
are blocked.

A blocklist, on the other hand, is a list of (legally) prohibited
websites, all of which are often blocked.

Some governments occasionally publish official blocklists (or they get
leaked) which contain lists of websites that are legally prohibited in a
country. Internet Service Providers (ISPs) are then ordered to block
access to all websites included in such blocklists, commonly involving
hundreds (or thousands) of URLs that contain content illegal in that
country (such as gambling, file sharing, adult content, etc.).

Test lists, on the other hand, are *not* meant to be limited to blocked
websites. Rather, they serve the purpose of monitoring when policies
change - what’s most likely to be blocked or unblocked.

While test lists may include *some* websites that are known to be
blocked (and that is useful for detecting censorship techniques adopted
by ISPs), most sites are not censored locally when they are added to
test lists.

With test lists, we aim to **discover internet censorship** (by
identifying the blocking of sites that were previously accessible), not
only confirm it.

### How can I test all the URLs included in an official blocklist?

Blocklists often include thousands of URLs and due to bandwidth
constraints, we refrain from including all of those websites in [test lists](https://github.com/citizenlab/test-lists) (though we do add a
few). We generally try to limit test lists to around 1,000 URLs, and we
try to ensure that the URLs are as diverse as possible.

You can test an entire blocklist through the following steps:

1.  Install the [OONI Probe mobile app](https://ooni.org/install/)

2.  **Save the URLs of the blocklist in a text file** and ensure that:

    * Each URL is included in a separate line.

    * URLs are formatted properly (i.e. they include the HTTP or HTTPS
    prefix, depending on how they would appear when accessed from a
    normal browser): This is particularly important since URLs in
    blocklists are often *not* formatted properly and this would
    influence the testing.

3.  Access the [OONI Run website](https://run.ooni.io/)

4.  Copy your (saved) list of blocklist URLs and paste it into the first
    URL slot in the [OONI Run website](https://run.ooni.io/).

The URL slots should now be populated with the blocklist URLs.

5.  Click on the “**Generate**” button (in the OONI Run page) at the end
    of all the URLs.

You have now generated a link (and widget code) for OONI Probe testing
of the blocklist URLs.

6.  **Open the generated link with your OONI Probe mobile app** (not
    with a web browser!).

You should now view the blocklist URLs in your OONI Probe mobile app.

7.  Tap “**Run**” to test the blocklist URLs.

Once the testing has been completed, you will find the results in the
**Test Results** section of your OONI Probe mobile app. The results will
also automatically be published on [OONI Explorer](https://explorer.ooni.org/) within 24 hours (unless if you
disable publication in the app settings).

### What types of websites will OONI Probe test?

OONI Probe tests websites (included in the [Citizen Lab test lists](https://github.com/citizenlab/test-lists)) that fall under [30 diverse categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv).

These categories range from news media, culture, and human rights issues
to more provocative or objectionable categories, like pornography (the
latter are included because they are more likely to be blocked, enabling
the detection of censorship techniques adopted by ISPs).

### How can I choose which types of websites to test?

By default, OONI Probe will test websites that fall under [30 standardized categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv).

You can limit your testing to specific types of websites (for example,
only test media websites) through the following steps:

* Tap on the **Websites card** in your OONI Probe mobile app

* Tap on the **menu icon on the top right corner** (inside the
Websites card)

* Tap on “**Website categories to test**”

* All website categories are enabled by default. Enable/disable
categories to customize your testing.

### How can I choose which websites to test?

You can test websites of your choice (rather than the websites included
in [test lists](https://github.com/citizenlab/test-lists/tree/master/lists))
through the following steps:

1.  Tap on the **Websites card** in your OONI Probe mobile app

2.  Tap on the **“Choose websites”** button (inside the Websites card)

3.  Add the websites you want to test in the URL slots (ensure each
website is formatted properly)

4.  Tap “**Run**”

Once the testing has been completed, you will find the results in the
**Test Results** section of your OONI Probe mobile app. The results will
also automatically be published on [OONI Explorer](https://explorer.ooni.org/) within 24 hours (unless if you
disable publication in the app settings).

### How can I test a custom list of URLs?

If you would like to test a long list of websites, adding them one by
one via the “Choose websites” button in the OONI Probe mobile app might
not be a pleasant option.

You can test your own custom list of URLs through the following steps:

1.  Install the [OONI Probe mobile app](https://ooni.org/install/)

2.  **Save the URLs of your list in a text file** and ensure that:

    * Each URL is included in a separate line

    * URLs are formatted properly (i.e. they include the HTTP or HTTPS
    prefix, depending on how they would appear when accessed from a
    normal browser)

3.  Access the [OONI Run website](https://run.ooni.io/)

4.  Copy your list of URLs and paste it into the first URL slot in the
    [OONI Run website](https://run.ooni.io/).

The URL slots should now be populated with your list of URLs.

5.  Click on the “**Generate**” button (in the OONI Run page) at the end
    of all the URLs.

You have now generated a link (and widget code) for OONI Probe testing
of your URL list.

6.  **Open the generated link with your OONI Probe mobile app** (not
    with a web browser!).

You should now view your list of URLs in your OONI Probe mobile app.

7.  Tap “**Run**” to test the URLs.

Once the testing has been completed, you will find the results in the
**Test Results** section of your OONI Probe mobile app. The results will
also automatically be published on [OONI Explorer](https://explorer.ooni.org/) within 24 hours (unless if you
disable publication in the app settings).

## OONI data

### What is OONI data?

[OONI data](https://ooni.org/data/) are network measurements collected
through [OONI Probe tests](https://github.com/ooni/spec/tree/master/nettests).

### Why does OONI publish data?

Every day, we openly publish all measurements we collect from [OONI Probe](https://ooni.org/install/) users around the world to:

* Increase **transparency of internet censorship** and other forms of
network interference;

* Share **evidence of internet censorship** and other forms of network
interference;

* Enable the **independent verification** of our findings;

* Support **reproducible research;**

* Support **research, policy, legal, and advocacy efforts** around the
world;

* Support **public debate** on information controls.

### Where does OONI publish data?

Every day, we publish measurements from around the world via the
following two resources:

* **[OONI Explorer](https://explorer.ooni.org/):** Web interface for
exploring OONI measurements

* **[OONI API](https://api.ooni.io/):** Download the raw data in
JSON format

### How can I interpret OONI data?

Each OONI measurement is generated from an OONI Probe test. Depending on
[how each OONI Probe test functions](https://github.com/ooni/spec/tree/master/nettests), each
OONI measurement has a very [specific data format](https://github.com/ooni/spec). This therefore varies from test
to test.

Generally, OONI Probe tests will present one of the following three
types of results:

* **Normal.** A “normal” measurement is a testing result with the
expected outcome, where nothing is out of the ordinary. When
websites and apps are tested, a “normal” measurement is when they
are considered accessible. In the case of middlebox tests, a
“normal” measurement is when no middleboxes have been detected,
and there are therefore no clear signs of network tampering.

* **Anomalous.** An “anomalous” measurement is a testing result which
is flagged because it presents *signs of potential network
interference* (such as the blocking of a website or app, or the
presence of a middlebox). An anomalous measurement *does not
necessarily contain evidence of internet censorship*, as it might
be a false positive. Essentially, an anomalous measurement signals
that something is wrong and that we should look deeper into the
measurement data to determine what is happening.

* **Confirmed blocked.** A measurement is “confirmed blocked” when we
are absolutely sure that the tested resource is blocked. Based on
our current heuristics, this can only apply to websites when an
Internet Service Provider (ISP) **serves a block page** (which
notifies the user that the website is intentionally blocked).

### How can I fetch and analyze OONI data?

You have the following options:

* **OONI PostgreSQL Metadb.** This system enables you to set-up your
own instance (and to have an always in sync version) of the OONI
measurement database that powers the [OONI API](https://api.ooni.io/) and [OONI Explorer](https://explorer.ooni.org/). Learn how to set-up your
own copy of the OONI metadb through this [documentation](https://github.com/ooni/sysadmin/blob/metadb-share/docs/metadb-sharing.md).

* **Amazon S3.** Thanks to the [Amazon Open Data program](https://aws.amazon.com/government-education/open-data/),
the whole OONI dataset can be fetched from the [ooni-data Amazon S3 bucket](https://ooni-data.s3.amazonaws.com/). Learn more through
our relevant [blog post](https://ooni.org/post/mining-ooni-data/).

* **OONI API.** You can download all OONI measurements in JSON format
via the [OONI API](https://api.ooni.io/). Learn how to query the
API through our [documentation](https://api.ooni.io/api/).

We **recommend the first two options** if you plan on working with
large volumes of OONI data (including, for example, downloading all the
measurements from a country to perform queries).

Given that other tools (such as [OONI Explorer](https://explorer.ooni.org/)) depend on the OONI API, it’s
best to limit the use of the API to light-weight queries (to avoid
affecting the performance of the other tools that rely on it).

## OONI Explorer

### What is OONI Explorer?

[OONI Explorer](https://explorer.ooni.org/) is an open data resource
on internet censorship around the world. It hosts millions of OONI
measurements collected from more than 200 countries since 2012. Every
day, hundreds of thousands of new OONI measurements are openly published
on OONI Explorer from around the world.

### How can I find blocked websites via OONI Explorer?

You can view the most recently blocked websites around the world via the
following steps:

1.  Access [OONI Explorer](https://explorer.ooni.org/)

2.  Click on “**Search**” (top right corner)

3.  Select “**Confirmed**” (under “Status” in the filter options on
    the left)

4.  Click “**Filter Results**”

All of the OONI Explorer measurements will now be filtered to only show
you those where **websites have been confirmed blocked** around the
world (based on OONI Probe testing).

To view websites that are **possibly** blocked:

1.  Click on “**Search**” (top right corner of [OONI Explorer](https://explorer.ooni.org/))

2.  Select “**Anomalies**” (under “Status” in the filter options on
    the left)

3.  Click “**Filter Results**”

However, interpret these results with caution, as they may contain false
positives.

### How can I access measurements?

You can find OONI measurements (i.e. OONI Probe test results) through
the following steps:

1.  Access [OONI Explorer](https://explorer.ooni.org/)

2.  Click on “**Search**” (top right corner)

Every row you will now see (in the Search page) -- containing country
codes, ASNs, dates, and test names -- is each an individual measurement
(OONI Probe test result).

For example:

![OONI measurement](/faq/measurement.png)

1.  **Click on each measurement** to access it.

An example of a measurement page:

![OONI measurement page](/faq/measurement-page.png)

### How can I find OONI data via OONI Explorer?

If you scroll down in any OONI measurement page ([example measurement page](https://explorer.ooni.org/measurement/20191030T235810Z_AS11878_Den5kggBp6SDiUHQVvFBzEF4jwknUrn1wzd8XavOs4ZjMY8QoJ?input=https://www.reddit.com/)),
you will view the **raw network measurement data** -- which you can also
**download in JSON format**.

The network measurement data will differ depending on the [OONI Probe test](https://github.com/ooni/spec/tree/master/nettests) from which it
was generated.

### How can I find “evidence of internet censorship” in a measurement?

First, there are two things to consider:

* A measurement may contain evidence of internet censorship *only* if
the specific [OONI Probe test](https://ooni.org/nettest/) was
designed to measure internet censorship in the first place.

* Based on our current heuristics, we only confirm internet censorship
automatically if an ISP serves a block page for a website.

Based on this, you can easily find evidence of internet censorship
through the following steps:

1.  Click on “**Search**” (top right corner of [OONI Explorer](https://explorer.ooni.org/))

2.  Select “**Confirmed**” (under “Status” in the filter options on
    the left)

3.  Click “**Filter Results**”

All OONI measurements will now be filtered to only show you those where
ISPs around the world served block pages for websites. The results will
be listed from the most recent cases, and they will automatically be
updated with new measurements every day.

4.  **Click on a measurement**

Example of a “confirmed blocked” measurement:

![Confirmed blocked measurement](/faq/confirmed-blocked-measurement.png)

5.  Scroll down to view the raw network measurement data

![Raw measurement data](/faq/raw-data-blocked.png)

You can download the data in JSON format.

Similarly to the steps shared above, you can also find cases of internet
censorship by selecting “Anomalies” (instead of “Confirmed”) under the
“Status” section of the OONI Explorer search tool. However, confirming
those cases is more tricky and it’s probably best to consult with an
engineer.

### How can I find blocked websites in my country?

You can find the websites that are blocked in your country through the
following steps:

1.  Access [OONI Explorer](https://explorer.ooni.org/)

2.  Click on “**Search**” (top right corner)

3.  **Select your country** via the “Country” drop-down menu on the left

4.  Select “**Web Connectivity**” via the “Test Name” drop-down menu on
    the left

5.  Select “**Anomalies**” and/or “**Confirmed**” (under “Status”)

6.  Click “**Filter Results**”

Please interpret the “anomalous” results with caution, as they may
contain false positives.

“Confirmed” blocked results will only appear if the tested ISPs served
block pages for those specific websites.

### How can I check if a specific website is blocked?

You can check whether a specific website (such as twitter.com) is
blocked through the following steps:

1.  Access [OONI Explorer](https://explorer.ooni.org/)

2.  Click on “**Search**” (top right corner)

3.  **Select a country** via the “Country” drop-down menu on the left

4.  Select “**Web Connectivity**” via the “Test Name” drop-down menu on
    the left

5.  **Type the domain (e.g. twitter.com)** of the website in the
    “Domain” slot

6.  Select “**Anomalies**” and/or “**Confirmed**” (under “Status”)

7.  Click “**Filter Results**”

Please interpret the “anomalous” results with caution, as they may
contain false positives.

“Confirmed” blocked results will only appear if the tested ISPs served
block pages for those specific websites.

### Why can’t I find results for a specific website?

If you search for the results pertaining to a specific website (based on
the instructions shared in the previous answer) and you don’t find any
results, that’s likely due to one of the following reasons:

* **The specific website has *not* been tested in the country
you selected.** You can check which websites are generally tested
in each country by reviewing the URLs included in the
[global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)
and [country-specific](https://github.com/citizenlab/test-lists/tree/master/lists)
list (if the latter exists).

* **The domain has been mistyped.** If you mistype the domain (for
example, `bbc.com` instead of `www.bbc.com`), OONI Explorer
will not be able to render the requested results. We recommend
accessing the website from a browser (or from [Tor Browser](https://www.torproject.org/download/) if access to the
website is blocked in your location) to check how the domain is
format (it’s the part of the website, excluding the HTTP or
HTTPS prefix).

### How can I check the blocking of websites during a specific time period?

To narrow down the results to a specific time frame, use [OONI Explorer](https://explorer.ooni.org/) in the following way:

1.  Click on “**Search**” (top right corner)

2.  **Select a country** via the “Country” drop-down menu on the left

3.  Select “**Web Connectivity**” via the “Test Name” drop-down menu on
    the left

4.  **Specify the time period by selecting dates** through the “From”
    and “Until” calendars

5.  Select “**Anomalies**” and/or “**Confirmed**” (under “Status”)

6.  Click “**Filter Results**”

Please interpret the “anomalous” results with caution, as they may
contain false positives.

“Confirmed” blocked results will only appear if the tested ISPs served
block pages for those specific websites.

### What do you mean by “Confirmed”?

A measurement is “confirmed blocked” when we are absolutely sure that
the tested resource is blocked. Based on our current heuristics, this
can **only apply to websites when an Internet Service Provider (ISP)
serves a block page** (which notifies the user that the website is
intentionally blocked).

By selecting “Confirmed” via OONI Explorer, you will view all the OONI
Probe testing results where we confirmed the blocking of websites around
the world.

### I know of many other websites that are blocked. Why doesn’t OONI Explorer show them when I select “confirmed”?

The “Confirmed” option will only render results (blocked websites) for
cases when **all of the following** apply:

* **An ISP blocked a website by serving a block page.** A block page
(or “Access Denied” page) is a web page that is displayed when a
user attempts to access a website they are not permitted to view.
If an ISP blocks access to a website using *different censorship
techniques* (which is often the case), those cases will *not* show
up under the “Confirmed” option on OONI Explorer.

* **We (the OONI team) have detected that block page and added its
fingerprint to the OONI database (and updated OONI Explorer).**
There are probably many block pages out there that we haven’t
detected yet. If you come across block pages that aren’t flagged
on OONI Explorer, please [share them with us](https://github.com/ooni/pipeline/issues/new).

* **The website in question has been tested by OONI Probe in the
specific country and on the specific network where it is blocked
(and the relevant measurement has been published).** Internet
censorship can differ from network to network within a country. If
a website is not tested on the specific network which blocks
access to it, and if the OONI Probe users opt-outs from submitting
measurements, we will not have the measurements available for the
specific website.

As we are always working on improving our censorship detection heuristics on an
ongoing basis, these cases will likely change over time. For more technical
insight, check out the code for the
[ooni/pipeline](https://github.com/ooni/pipeline).

### Why does OONI confirm censorship when a block page is served?

A block page is a web page that **informs the user that the intended
website is intentionally blocked.** Often, a block page even cites the
relevant legal justification for the blocking. There is, therefore, no
ambiguity around this form of censorship, as **even the ISP is
transparent about the intentional blocking involved**.

Example of a block page served by ISPs in Indonesia:

![Indonesian block page](/faq/indonesian-blockpage.png)

Furthermore, block pages contain **fingerprints which enable their
automated detection**. Once we have detected a block page fingerprint
and added it to our database, we can scan measurements in search of all
other measurements that contain the same fingerprint. As a result, we
can automatically detect the blocking of many other websites.

### Why doesn’t OONI confirm other cases of internet censorship (beyond block pages)?

Other censorship cases (such as DNS tampering or TCP/IP blocking) are
more subtle, since the ISP doesn’t explicitly inform the user that they
are intentionally blocking access to a specific website (as they do in
the case of a block page).

Furthermore, **there are many reasons why those cases might *look* like
censorship, but actually not be (which makes their automatic detection
trickier)**. For example, tests run on an unstable network may generate
TCP/IP errors, which may have nothing to do with intentional TCP/IP
blocking. It may also be the case that a tested website is hosted on an
unreliable server, or that the website owner is blocking access to IP
addresses that originate from that specific country. Or perhaps DNS
anomalies show up as a result of [DNS misconfiguration](https://ooni.org/post/not-quite-network-censorship/),
rather than due to intentional DNS-based blocking.

It’s therefore often necessary to examine each measurement on a
case-by-case basis in order to inspect the data carefully and determine
the precise reason why its testing didn’t succeed.

Automatically distinguishing cases of intentional censorship from the
countless other reasons why network anomalies can occur has been an
ongoing challenge, though we continue to make improvements to our
heuristics on an ongoing basis and plan to automatically confirm more
forms of internet censorship soon.

### What do you mean by “Anomalies”?

An “anomalous” measurement is a testing result which is flagged because
it presents *signs of potential network interference* (such as the
blocking of a website or app, or the presence of a middlebox).

When a block page is detected, OONI flags that measurement as
“confirmed”. All other cases of internet censorship (such as DNS
tampering or TCP/IP blocking) are included in “anomalous” measurements.

However, an anomalous measurement *does not necessarily contain evidence
of internet censorship*, as it might be a false positive.

Essentially, an anomalous measurement **signals that something is wrong
and that we should look deeper into the measurement data** to determine
what is happening.

### Why does OONI Explorer suggest that a site or app that I can access is blocked in my country?

There are two reasons why this may happen:

1.  Perhaps the website or app in question was blocked by other Internet
    Service Provider(s) in your country, and not by your ISP.

2.  The testing result is a **false positive**. The following two
    questions and answers address this further.

### What are false positives?

**False positives are OONI Probe test results (flagged as "anomalous")
which incorrectly indicate the presence of network interference (such as
the blocking of a website or app).**

When measuring the accessibility of websites, OONI Probe compares the results
from your network with the results from a non-censored network. If the results
don't match, then the OONI Probe test result in question is flagged as an
"anomaly", indicating potential network interference. Many of these anomalies
are in fact cases of network interference, while some may be false positives.

### Why do false positives occur?

False positives can occur due a number of reasons. 

Below are some reasons which may trigger false positives in **website testing**:

* **Transient network failures.** If OONI Probe tests are performed on
an unstable network, the test results may show signs of potential
TCP/IP interference, when in fact network errors can cause the TCP
connection to drop.

* **Unreliable servers.** If a website is hosted on an unreliable
server or otherwise encounters server issues, the tested website
may return failures (even though it's not interfered with) and the
OONI Probe test may fail.

* **DNS resolution.** If the DNS resolver of an OONI Probe user (such
as Google or their local ISP) provides an IP addresses that is
closest to the user geographically, that IP address may differ
from the IP address resolved from a control vantage point,
potentially incorrectly indicating the presence of DNS tampering.

* **Geographical distribution of content.** Many websites serve
different content depending on the country that the user is
connecting from. In these cases, the HTTP responses from the
network of the OONI Probe user and from the control vantage point
will differ, potentially incorrectly indicating the presence of
HTTP based interference.

When running the OONI Probe **instant messaging tests** (WhatsApp, Facebook
Messenger, Telegram), false positives may occur when the instant messaging app
vendor makes changes to their infrastructure that affect how our tests run. 

When running the OONI Probe **middlebox tests**, false positives may occur due to issues
with the OONI Probe backend infrastructure. 

When running **any OONI Probe test**, false positives may be caused by software bugs which are triggered by your
particular device and network configuration.

### How can I distinguish false positives?

Distinguishing false positives can often be tricky, even for engineers.
It requires examining the network measurement data carefully, having a
good understanding of [how OONI Probe tests work](https://github.com/ooni/spec/tree/master/nettests), analyzing the
data over a long period of time (to check whether the tested resource
consistently presents the same anomalies on the same network), and
evaluating and ruling out other possible reasons that could have
triggered the anomaly (for example, by checking the global failure rates
of a site).

As part of the [OONI Partnership Program](https://ooni.org/get-involved/partnership-program/), we offer
data analysis support to the human rights organizations that we
collaborate with. All [OONI data and methodologies](https://ooni.org/data/) are openly available with the
hope that other data analysis will support communities as well.

We encourage you to [reach out (via email or Slack)](https://ooni.org/about/#contact) if you’re unsure of a
measurement and planning on using it (for example) as part of reporting.

In general, **we recommend looking at results over a timeline, rather
than individually** (unless if they are tagged as “confirmed”). For
example, if you observe that a tested website presents the same anomaly
(e.g. DNS tampering) every time it is tested on a specific network in a
country, it’s more likely the case that access to it is being interfered
with. If, however, a single measurement (for example) presents a TCP
anomaly, but all other measurements testing that website on the same
network were successful, it’s likely the case that that TCP anomaly is a
false positive.

### How can I check results from other OONI Probe tests?

You can filter [OONI Explorer](https://explorer.ooni.org/) to find
results from [other OONI Probe tests](https://ooni.org/nettest/)
through the following steps:

1.  Click on “**Search**” (top right corner)

2.  Optional: Select a country via the “Country” drop-down menu on the
    left

3.  **Select an OONI Probe test via the “Test Name” drop-down menu** on
    the left

4.  Optional: Select “Anomalies”

5.  Click “**Filter Results**”

Please interpret the “anomalous” results with caution, as they may
contain false positives.

### Why doesn’t my country have any recent measurements on OONI Explorer?

OONI Explorer automatically publishes the test results (measurements) of OONI
Probe users in *near-real time*, within minutes of tests having been run.

If there are no recent measurements from your country, that means that:

* No OONI Probe tests have been run in your country recently; *or*

* OONI Probe users in your country have opted-out from submitting
measurements for publication.

You can contribute measurements by [running OONI Probe](https://ooni.org/install/) in your country. The easiest way to
run tests is through the **OONI Probe mobile app** for
[Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe)
and [iOS](https://itunes.apple.com/us/app/id1199566366).
