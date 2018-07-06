# The test list methodology

Censorship findings are only as interesting as the sites and services that you test.

We encourage you to suggest sites and services to test for censorship.

Please read the documentation below to contribute to community resources for censorship measurement research.

* [What are test lists?](#what-are-test-lists)

* [What aren't test lists?](#what-aren-t-test-lists)

* [Why contribute to test lists?](#why-contribute-to-test-lists)

* [Contributing to test lists](#contributing-to-test-lists)

	* [Test list research](#test-list-research)

		* [Background research](#background-research)

		* [Drawing inspiration from 30 categories](#drawing-inspiration-from-30-categories)

		* [Research on previous cases of reported censorship](#research-on-previous-cases-of-reported-censorship)

	* [Reviewing test lists](#reviewing-test-lists)

	* [Creating new test lists](#creating-new-test-lists)

* [Important tips](#important-tips)

## What are test lists?

Test lists are machine-readable [CSV files](https://en.wikipedia.org/wiki/Comma-separated_values) that include URLs that are tested for
censorship.

Censorship measurement projects like [OONI](https://ooni.torproject.org/) rely on a global community of
volunteers who run censorship detection tests from local vantage points. In
light of bandwidth constraints, testing most websites available on the internet
is not practical (nor possible in many cases). Instead, our measurements focus
on a *sample* of websites provided in “test lists”: machine-readable CSV files
with a set of curated, interesting domains. There are two types of test lists:

* [Global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv): Includes a wide range of internationally relevant websites (e.g. facebook.com), most of which are in English

* [Country-specific test lists](https://github.com/citizenlab/test-lists/tree/master/lists): Include websites that are only relevant to a
specific country (e.g. Brazilian media websites), many of which are in local languages

To maximize the breadth of coverage while reducing research bias, test list URLs
are broken down into [30 diverse categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv):

* **ALDR** (Alcohol & Drugs): "Sites devoted to the use, paraphernalia, and sale of drugs and alcohol irrespective of the local legality."
* **REL** (Religion): "Sites devoted to discussion of religious issues, both supportive and critical, as well as discussion of minority religious groups."
* **PORN** (Pornography): Hard-core and soft-core pornography.
* **PROV** (Provocative Attire): "Websites which show provocative attire and portray women in a sexual manner, wearing minimal clothing. "
* **POLR** (Political Criticism): "Content that offers critical political viewpoints. Includes critical authors and bloggers, as well as oppositional political organizations. Includes pro-democracy content, anti-corruption content as well as content calling for changes in leadership, governance issues, legal reform. Etc."
* **HUMR** (Human Rights Issues): Sites dedicated to discussing human rights issues in various forms. Includes women's rights and rights of minority ethnic groups.
* **ENV** (Environment): "Pollution, international environmental treaties, deforestation, environmental justice, disasters, etc."
* **MILX** (Terrorism and Militants): "Sites promoting terrorism, violent militant or separatist movements."
* **HATE** (Hate Speech): "Content that disparages particular groups or persons based on race, sex, sexuality or other characteristics"
* **NEWS** (News Media): "This category includes major news outlets (BBC, CNN, etc.) as well as regional news outlets and independent media."
* **XED** (Sex Education): "Includes contraception, abstinence, STDs, healthy sexuality, teen pregnancy, rape prevention, abortion, sexual rights, and sexual health services."
* **PUBH** (Public Health): "HIV, SARS, bird flu, centers for disease control, World Health Organization, etc"
* **GMB** (Gambling): "Online gambling sites. Includes casino games, sports betting, etc."
* **ANON** (Anonymization and circumvention tools): "Sites that provide tools used for anonymization, circumvention, proxy-services and encryption."
* **DATE** (Online Dating): "Online dating services which can be used to meet people, post profiles, chat, etc"
* **GRP** (Social Networking): Social networking tools and platforms.
* **LGBT** (LGBT): A range of gay-lesbian-bisexual-transgender queer issues. (Excluding pornography)
* **FILE** (File-sharing): "Sites and tools used to share files, including cloud-based file storage, torrents and P2P file-sharing tools."
* **HACK** (Hacking Tools): "Sites dedicated to computer security, including news and tools. Includes malicious and non-malicious content."
* **COMT** (Communication Tools): "Sites and tools for individual and group communications. Includes webmail, VoIP, instant messaging, chat and mobile messaging applications."
* **MMED** (Media sharing): "Video, audio or photo sharing platforms."
* **HOST** (Hosting and Blogging Platforms): "Web hosting services, blogging and other online publishing platforms."
* **SRCH** (Search Engines): Search engines and portals.
* **GAME** (Gaming): "Online games and gaming platforms, excluding gambling sites."
* **CULTR** (Culture): "Content relating to entertainment, history, literature, music, film, books, satire and humour"
* **ECON** (Economics): "General economic development and poverty related topics, agencies and funding opportunities"
* **GOVT** (Government): "Government-run websites, including military sites."
* **COMM** (E-commerce): "Websites of commercial services and products."
* **CTRL** (Control content): "Benign or innocuous content used as a control."
* **IGO** (Intergovernmental Organizations): "Websites of intergovernmental organizations such as the United Nations."

These categories range from news
media, culture, and human rights issues to more provocative or objectionable
categories, like pornography (the latter are included because they are more
likely to be blocked, enabling the detection of censorship techniques adopted by
ISPs).

Creating test lists requires local knowledge, an understanding of which sites
are commonly accessed and more likely to be blocked in light of a country’s
social and political environment. The [Citizen Lab](https://citizenlab.ca/) (which manages the test list
project) has, therefore, made the lists publicly available on [GitHub](https://github.com/citizenlab/test-lists),
encouraging community contributions.

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

## Why contribute to test lists?

**1. Censorship findings are only as interesting as the sites you test**

When measuring censorship through the use of software like [OONI Probe](https://ooni.torproject.org/install/),
censorship findings are only as interesting as the sites that are tested. If
bbc.com, for example, is blocked in China, OONI Probe is only likely to detect
that if bbc.com was included in the Chinese test list to begin with.

It’s therefore important to ensure that test lists are representative of many
types of online content and reflect the country’s social, economic, and
political environment. 

**2. You can provide local insight**

Examining internet censorship in a country requires local knowledge, an understanding of which sites and services are:

* commonly accessed;
* more likely to be blocked;
* interesting to test in light of a country's social and political environment.

To ensure that test lists include a variety of different types of URLs that are updated on an ongoing basis, we encourage community contributions from around the world.

**3. Potential risks**

When running OONI Probe, you will connect to and download data from the websites
included in the global test list and in the test list which is specific to the
country that you are running OONI Probe from. 

We therefore encourage you to review all of the URLs included in these lists carefully, prior to running OONI Probe, as connecting to some of these websites might be legally questionable (or illegal) in some jurisdictions.

If you are uncertain of the potential implications of connecting to and
downloading data from the websites listed in the test lists, you can pass your
*own* test list with the following type of command line option:

`ooniprobe <test-name> -f <your-test-list>` 

## Contributing to test lists

You can contribute to test lists in 2 ways:

* Review *existing* test lists;

* Create *new* test lists for countries that don't have test lists yet.

This requires a bit of research. We provide some recommended research practices for
compiling (or contributing to existing) test lists in the following section.

### Test list research


#### Background research

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

#### Drawing inspiration from 30 categories

The Citizen Lab’s test list methodology relies on [30 diverse categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) for
URLs. These categories serve the following main purposes:

* Ensuring that the testing sample of URLs is as diverse as possible 

* Enabling the characterization of information controls

The more diverse the testing sample, the more likely researchers are to identify
different forms of internet censorship. By categorizing URLs, researchers can
more easily characterize internet censorship depending on what is blocked. In
Iran, for example, the breadth and scale of internet censorship appears to be
pervasive since many [different types of websites](https://ooni.torproject.org/post/iran-internet-censorship/#key-findings) were found to be [blocked](https://ooni.torproject.org/post/iran-internet-censorship/).

When working on a test list, you can refer to the [30 categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) and search for
local websites that fall under each one. Ideally, a test list includes multiple
URLs for each of the 30 categories, though we recognize that this is not always
possible.

#### Research on previous cases of reported censorship

Has censorship been reported in the country that you’re compiling a test list
for? If so, which websites were reportedly blocked?

As part of your research for identifying sites to add to a test list, it’s
important to explore whether previous censorship events have been reported in
the country. Those sites might *still* be blocked, even if their ban has been
lifted. We, for example, found [Vimeo and Reddit to be blocked in Indonesia](https://ooni.torproject.org/post/indonesia-internet-censorship/), even though their ban was lifted more than two years ago.
Furthermore, certain sites might only be blocked in certain networks, rather
than on a nationwide level. By adding sites that have reportedly been blocked to
your test list, [OONI Probe](https://ooni.torproject.org/install/) users can collect network measurement data examining
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

### Reviewing test lists

All test lists that OONI Probe is designed to test for censorship are hosted in
the [Citizen Lab's test-list repository on GitHub](https://github.com/citizenlab/test-lists).

To review country-specific test lists, please follow the steps below:

**Step 1.** Find the *csv* file which is specific to the country that you want
to run OONI Probe from (based on that country's code)
**[here](https://github.com/citizenlab/test-lists/tree/master/lists)**.

If you don't find a csv file for your country, that's probably because it
doesn't exist yet. In this case, please refer to the next section on *"Creating new test lists"*.

**Step 2.** Add *new* URLs to the csv file under the "url" column.  

Some criteria for adding new URLs can include the following:

* The URLs cover topics of socio-political interest within the country;

* The URLs are likely to be blocked because they include sensitive content (for
  example, they touch upon sensitive issues or express political criticism);

* The URLs have been blocked in the past;

* You have faced difficulty connecting to those URLs.

For further criteria, please view the URL categories
**[here](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)**.

Please try to add URLs which fall under as many (if not all) of these categories as possible.

**Step 3.** Every time you add a URL, please add the following in the csv file for
  each new URL:

* **Category code:** Add the code of the category that each URL falls under.
This can be added under the "category_code" column of the csv file. The
category codes can be found **[here](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)**.

* **Category description:** Add the description of the category that each URL
falls under. This can be added under the "category_description" column of
the csv file. The category descriptions can be found
**[here](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)**.

* **Date:** Add the date of when you added each URL. This can be added under the
"date_added" column of the csv file.

* **Contributor:** *Optional:* Add the name of the organization that you are
 affiliated with, in terms of contributing to the test list. This can be
 added under the "source" column of the csv file.

* **Notes:** *Optional:* Here you can add notes for each URL under the "notes"
column of the csv file. This column, in particular, can be useful for describing
the type of URL added, particularly since the standardized categories are quite
broad. As an example, you can write "Site of the political opposition, reported
to be blocked during 2016 elections" in the "notes" column, to provide more
meaning than the standardized POLR category (and to provide context that may be
useful to researchers).

**Step 4.** Change the category codes and descriptions for URLs (included under
the "category_code" and "category_description" columns of the csv file) *only
if* you think that those URLs have been allocated to wrong category codes and
descriptions. In this case, please replace the category codes and descriptions
with ones (from the [recommended categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) that you think are more
suitable. We would also appreciate a comment on
[GitHub](https://github.com/citizenlab/test-lists) or via email explaining the
proposed changes.

**Step 5.** Once you have reviewed a test list based on the above, please submit
 your changes to us. If you're a GitHub user, you can do so through a pull
 request. If you're *not* a GitHub user, please send us a *spreadsheet*
 (including the same format as github csv files) by dropping us an email at
 contact@openobservatory.org (PGP Key Fingerprint: 4C15 DDA9 96C6 C0CF 48BD
 3309 6B29 43F0 0CB1 77B7).

### Creating new test lists

If you can't find a test list specific to your country
[here](https://github.com/citizenlab/test-lists/tree/master/lists), then it
probably does not exist yet. Please help us create a test list for your country
through the steps below:

**Step 1.** Create a csv file and name it based on an ISO-3166 two-letter country
code which is specific to the country that URLs are being added for. You can
find a reference for international standards for country codes
**[here](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-country_codes.csv)**. An example would include a csv file created for Andora, named *ad.csv*.

**Step 2.** Include the following columns in the newly created csv file:

* url

* category_code

* category_description

* date_added

* source

* notes

**Step 3.** Add URLs under the "url" column of the csv file. 

Some criteria for adding new URLs can include the following:

* The URLs cover topics of socio-political interest within the country;

* The URLs are likely to be blocked because they include sensitive content (for
  example, they touch upon sensitive issues or express political criticism);

* The URLs have been blocked in the past;

* You have faced difficulty connecting to those URLs.

For further criteria, please view URL categories
**[here](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)**.

**Step 4.** Every time you add a URL, please add the following in the csv file for
 each new URL:

* **Category code:** Add the code of the category that each URL falls under.
This can be added under the "category_code" column of the csv file. The
category codes can be found **[here](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)**.

* **Category description:** Add the description of the category that each URL
falls under. This can be added under the "category_description" column of
the csv file. The category descriptions can be found
**[here](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)**.

* **Date:** Add the date of when you added each URL. This can be added under the
"date_added" column of the csv file.

* **Contributor:** *Optional:* Add the name of the organization that you are
 affiliated with, in terms of contributing to the test list. This can be
 added under the "source" column of the csv file.

* **Notes:** *Optional:* Here you can add notes for each URL under the "notes"
 column of the csv file. This column, in particular, can be useful for describing
the type of URL added, particularly since the standardized categories are quite
broad. As an example, you can write "Site of the political opposition, reported
to be blocked during 2016 elections" in the "notes" column, to provide more
meaning than the standardized POLR category (and to provide context that may be
useful to researchers).

**Step 5.** Once you have created a new test list based on the above, please
 submit your csv file to us. If you're a GitHub user, you can do so through a
 pull request. If you're *not* a GitHub user, please send us your csv file by
 dropping us an email at contact@openobservatory.org (PGP Key Fingerprint: 4C15
 DDA9 96C6 C0CF 48BD  3309 6B29 43F0 0CB1 77B7).

## Important tips

 1. **Always include the full URL, including the HTTP or HTTPS prefix, exactly as it appears when you type it into a browser.** If you include `example.com` in a test list, OONI Probe won't be able to test it. Rather, it should be included as `http://www.example.com`, if that is what it looks like in a browser.

 2. **Always use the format described in the sections above.** The test lists are meant to be machine-readable, and OONI Probe will not parse test lists that don't strictly follow the prescribed format.

 3. **Please use the categories provided [here](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) and refrain from adding your own categories.** The categories may not be perfect, and we welcome your suggestions for additional/alternative categories. But if you don't use the prescribed category codes, OONI Probe will not be able to test those URLs, since test lists are meant to be machine-readable.

4. **Please do not scrape and add "the top 1,000 Alexa sites".** Community contributions are more useful when they include URLs that (a) fall under these [30 diverse categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) and (b) reflect local insight. Given that many OONI Probe users around the world have bandwidth constraints, we favour *quality* over quantity in terms of what is tested.

Thanks for contributing!
