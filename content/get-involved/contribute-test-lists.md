---
title: "Test Lists: Contribute websites for censorship testing"
description: "This documentation provides information related to updating the Citizen Lab test lists for website censorship measurement."
---

Censorship findings are only as interesting as the sites and services that you test.

You can contribute websites for censorship testing through the following platforms:

* [Test Lists Editor](https://test-lists.ooni.org/) ([guide](https://ooni.org/support/test-lists-editor))
* [GitHub](https://github.com/citizenlab/test-lists) ([guide](https://ooni.org/support/github-test-lists))

Before contributing, please read the documentation below to learn all about test lists. We also recommend reading **[Netalitica's Guidelines for Test List Researchers](https://netalitica.com/wp-content/uploads/2021/10/Guideline-for-Test-List-Researchers-V7.pdf)**.

* [About test lists](#about-test-lists)

	* [What are test lists?](#what-are-test-lists)

	* [What aren't test lists?](#what-aren-t-test-lists)

	* [Types of test lists](#types-of-test-lists)

* [Contributing to test lists](#contributing-to-test-lists)

	* [Why contribute to test lists?](#why-contribute-to-test-lists)

	* [Who can contribute to test lists?](#who-can-contribute-to-test-lists)

	* [How to contribute to test lists?](#how-to-contribute-to-test-lists)

	* [What does contributing to test lists involve?](#what-does-contributing-to-test-lists-involve)

* [Test list research](#test-list-research)

	* [Background research](#background-research)

	* [Drawing inspiration from 30 categories](#drawing-inspiration-from-30-categories)

	* [Research on previous cases of reported censorship](#research-on-previous-cases-of-reported-censorship)

# About test lists

## What are test lists?

Test lists are [lists of websites](https://github.com/citizenlab/test-lists/tree/master/lists)
that are tested for censorship by [OONI Probe](https://ooni.org/install/) and tools developed by other
projects, such as [Censored Planet](https://censoredplanet.org/projects).

Since 2014, these lists have been [publicly hosted on GitHub](https://github.com/citizenlab/test-lists) by the [Citizen Lab](https://citizenlab.ca/) with the goal of encouraging community review and contributions. As a result, these lists have been dynamically
updated on an ongoing basis over the years.

Test lists include a wide range of different types of websites based on
[30 standardized categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)
(such as news media, political criticism, and human rights content).
Since these lists are tested by [OONI Probe](https://ooni.org/install/) users on local networks (who may
experience bandwidth constraints), they usually only include up to 1,000
URLs.

While test lists usually include *some* websites that are known to be
blocked, many sites are not censored locally when they are added to test
lists. With test lists, we aim to **discover website censorship** (by
identifying the blocking of sites that were previously accessible), not
only confirm it.

## What aren't test lists?

**1. A list of thousands of sites scraped from Alexa**

Creating (or contributing to existing) test lists is not a question of scraping
“the top 1,000 sites” from Alexa. Rather, it requires *research*, an understanding
of a country’s social and political environment, and how that may motivate
information controls.

**2. Blocklists**

Some governments occasionally publish official blocklists (or they get leaked)
which contain lists of websites that are legally prohibited in a country.
Internet Service Providers (ISPs) are then ordered to block access to all
websites included in such blocklists, commonly involving hundreds (or thousands)
of URLs that contain content illegal in that country (such as gambling, file sharing, adult content, etc.).

Test lists, on the other hand, are *not* meant to be limited to blocked websites.
Rather, they serve the purpose of monitoring when policies change - what's most
likely to be blocked or unblocked. While test lists may include *some* websites
that are known to be blocked (and that is useful for detecting censorship
techniques adopted by ISPs), most sites are not censored locally when they are
added to test lists. The aim of using the test list methodology is to not only
identify censorship, but to also confirm the accessibility of sites. Unlike
blocklists (which can include thousands of URLs), each test list is usually
limited to up to 1,000 sites (due to the aforementioned bandwidth constraints).

## Types of test lists

There are 2 categories of test lists:

* **[Global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)**:
Includes a wide range of internationally relevant websites (e.g.
facebook.com), most of which are in English. This list is tested
by **all** [OONI Probe](https://ooni.org/install/) users
globally.

* **[Country-specific test lists](https://github.com/citizenlab/test-lists/tree/master/lists)**:
Each list includes websites that are only relevant to a specific
country (e.g. Brazilian media websites), many of which are in
local languages. [OONI Probe](https://ooni.org/install/) users
test the list of the country that they are running tests from
(e.g. OONI Probe users in Brazil test the [Brazilian test list](https://github.com/citizenlab/test-lists/blob/master/lists/br.csv)).

To maximize the breadth of coverage while reducing research bias, test list URLs
are categorized based on **[30 diverse categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)**. These categories range from news media, culture, and human rights issues to more provocative or objectionable
categories (such as pornography and hate speech).

**Note:** The **MISC (Miscellaneous)** category is temporarily included for
non-categorized URLs (such as those measured through custom, manual testing).
Please refrain from using the MISC category when categorizing URLs in the
test lists. 

# Contributing to test lists

## Why contribute to test lists?

Discovering cases of website blocking (such as the current [blocking of bbc.com in Russia](https://explorer.ooni.org/measurement/20220517T140500Z_webconnectivity_RU_48642_n1_DC1jDel4Ougo1Zpo?input=http%3A%2F%2Fwww.bbc.com%2Fnews))
really depends on *which* websites you test.

For example, if a specific human rights website is blocked in a country,
but it’s not included in a relevant test list, it won’t get tested by
tools like [OONI Probe](https://ooni.org/install/), which means that
relevant test results will not be [openly published](https://ooni.org/data/). 

You can play an important role in ensuring that your country’s test list
includes websites that are worth monitoring for censorship.

Updating test lists requires **local knowledge**, an understanding of
which websites are relevant, commonly accessed, and more likely to be
blocked in light of a country’s social and political environment.

Websites constantly change (e.g. domains expire, domains change, new
websites are created), and what is sensitive to blocking changes over
time. It is therefore important that test lists are reviewed and updated
regularly.

The OONI Probe results of website testing are automatically published as
[open data](https://ooni.org/data/) in real-time.

## Who can contribute to test lists?

Anyone can contribute to test lists -- no technical skills or knowledge is
required. In fact, social scientists, researchers, and human rights defenders
are often best-positioned to contribute to test lists (since identifying
interesting/relevant websites for censorship testing often requires an
understanding of a country's social and political environment). 

If you are an organization interested in *regularly* contributing to the test
lists of your country or region, please [reach out to us](https://ooni.org/about/#contact). We are always happy to collaborate on the
review and update of test lists. 

We also recommend keeping an eye out for [paid research opportunities by Netalitica](https://netalitica.com/more-jobs/) to update test lists.

## How to contribute to test lists?

You can contribute to test lists through the following platforms:

* [Test Lists Editor](https://test-lists.ooni.org/) ([guide](https://ooni.org/support/test-lists-editor))
* [GitHub](https://github.com/citizenlab/test-lists) ([guide](https://ooni.org/support/github-test-lists))

## What does contributing to test lists involve?

As part of reviewing a test list, you can:

* **Add** websites;

* **Edit** existing entries (update the URL, update the category, add relevant
  context in the Notes);

* **Delete** existing entries (for example, if the domain has expired or is
  otherwise no longer relevant).

# Test list research

To identify URLs worth adding to test lists, we recommend starting off with
relevant test list research. 

## Background research

Understanding information controls in a country requires an understanding of the
country itself. Some background research on the country in question is therefore
essential to identifying websites that are worth testing for censorship.

In-depth PhD style research is not required. In fact, many online resources with
country profiles that you can refer to already exist, such as [The World Factbook](https://www.cia.gov/library/publications/the-world-factbook/), the [OpenNet Initiative](https://opennet.net/research/profiles), and [Freedom House](https://freedomhouse.org/), among others. Your
background research probably shouldn’t be limited to such resources. Rather,
these resources can serve as a *starting point* for identifying sites to add to
test lists (in which case, you can even refer to a country’s [Wikipedia](https://en.wikipedia.org/wiki/Lists_of_countries_and_territories) page).

Knowing that a country has many ethnic minorities, for example, is a starting
point for subsequently exploring which sites represent the voices of those
groups. Due to their sensitive nature, such sites might be more likely to get
blocked (now or in the future), and so it might make sense to add them to your
test list. By reading news websites from that country, you may come across the
names of political activists. Similarly, it may be worth exploring whether those
activists have websites and adding them to your test list.

By researching the main economic, political, and social issues of a country, you
can search for a variety of different types of sites that address them and
present different opinions. Those are the types of sites that are worth adding
to test lists to monitor their accessibility over time. The process of
identifying sites to add to your test list can also be guided by the [30 categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) of the test list methodology.

## Drawing inspiration from 30 categories

The Citizen Lab’s test list methodology relies on [30 diverse categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) for
URLs. These categories serve the following main purposes:

* Ensuring that the testing sample of URLs is as diverse as possible 

* Enabling the characterization of information controls

The more diverse the testing sample, the more likely researchers are to identify
different forms of internet censorship. By categorizing URLs, researchers can
more easily characterize internet censorship depending on what is blocked. In
Iran, for example, the breadth and scale of internet censorship appears to be
pervasive since many [different types of websites](https://ooni.org/post/iran-internet-censorship/#key-findings) were found to be [blocked](https://ooni.org/post/iran-internet-censorship/).

When working on a test list, you can refer to the [30 categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) and search for
local websites that fall under each one. Ideally, a test list includes multiple
URLs for each of the 30 categories, though we recognize that this is not always
possible.

## Research on previous cases of reported censorship

Has censorship been reported in the country whose test list you're updating? If
so, which websites were reportedly blocked?

As part of your research for identifying sites to add to a test list, it’s
important to explore whether previous censorship events have been reported in
the country. Those sites might *still* be blocked, even if their ban has been
lifted. We, for example, found [Vimeo and Reddit to be blocked in Indonesia](https://ooni.org/post/indonesia-internet-censorship/), even though their ban was lifted more than two years ago. Furthermore, certain sites might only be blocked on certain networks, rather
than on a nationwide level. By adding sites that have reportedly been blocked to
your test list, [OONI Probe](https://ooni.org/install/) users can collect network measurement data examining
the accessibility of those sites over time (and may even be able to corroborate
media reports).

Previous censorship cases can also help with identifying:

* The **types of information** that the country’s government censors (for example, if
political opposition sites were blocked in the past, it might be worth adding
them to test lists to examine if they’re blocked in the present or future); 

* The **motivations** behind censorship (for example, if a government has previously
blocked sites for political reasons, it may be worth searching for other sites
that could trigger politically-motivated censorship).

To identify censorship cases, you can start off by searching for relevant media
articles (where you’re likely to find the most recent cases). In addition to
international news websites, it’s important to search for censorship reports
through local media outlets as well. You can then refer to a variety of research
reports published by a number of digital rights organizations, including (but
not limited to) [Citizen Lab](https://citizenlab.ca/category/research/), [Freedom on the Net (Freedom House)](https://freedomhouse.org/reports), [OpenNet Initiative](https://opennet.net/research/profiles), [Reporters Without Borders](https://rsf.org/en/ranking), and [ARTICLE 19](https://www.article19.org/).

Given that economic, social, and political systems change over time (and the
motivations of governments change along with them), it’s important to update
test lists on an ongoing basis through the above recommended practices.
