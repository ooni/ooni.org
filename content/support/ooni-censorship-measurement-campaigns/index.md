---
title: "Coordinating OONI censorship measurement campaigns"
description: "This documentation explains how you can coordinate OONI censorship measurement campaigns around the world."
---

**Last updated:** 21st March 2023

Internet censorship around the world often [emerges during political events](https://ooni.org/documents/2022-ooni-submission-ohchr-report-internet-shutdowns.pdf), such as elections or protests. The abrupt emergence of new blocks requires rapid response in terms of measurement, particularly if the blocks are short-lived. Such measurement can help with the collection of data that can potentially serve as evidence of internet censorship, supporting the efforts of journalists, researchers, and human rights defenders challenging the blocks.

Detecting sudden or expected blocks can be achieved through **community coordination** on censorship measurement.

This documentation explains how you can organize **OONI censorship measurement campaigns** with your communities.

* [What are OONI censorship measurement campaigns?](#what-are-ooni-censorship-measurement-campaigns)

* [Why run OONI censorship measurement campaigns?](#why-run-ooni-censorship-measurement-campaigns)

* [Examples of OONI censorship measurement campaigns](#examples-of-ooni-censorship-measurement-campaigns)

* [How to run an OONI censorship measurement campaign](#how-to-run-an-ooni-censorship-measurement-campaign)

### What are OONI censorship measurement campaigns?

OONI censorship measurement campaigns are **community-coordinated efforts aimed at measuring the blocking of specific websites** through the use of [OONI Probe](https://ooni.org/install/).

Specifically, community members use the [OONI Run](https://run.ooni.org/) platform to generate mobile deep links based on the specific website(s) that they want to measure for censorship. These links are shared with their community of volunteers (who are [OONI Probe mobile app](https://ooni.org/install/mobile) users) in their country, region, or elsewhere in the world. Their community uses these links to test the website(s), contributing measurements that are published as [open data](https://ooni.org/data/) in real-time.

Generally, the goal of OONI censorship measurement campaigns is to **rapidly collect (and publish) data in response to emergent censorship events**.

Community members often run such campaigns [leading up to and during an election](https://sinarproject.org/digital-rights/measuring-and-detecting-network-interference/ge15), or in response to emergent new blocks during protests or other political events. Sometimes, researchers coordinate with communities of [OONI Probe](https://ooni.org/install/mobile) volunteers for the testing of their custom lists of websites.

### Why run OONI censorship measurement campaigns?

Censorship events tend to [emerge during political events](https://ooni.org/documents/2022-ooni-submission-ohchr-report-internet-shutdowns.pdf), such as elections or protests. Such blocks are often short-lived (for example, limited to election day), enabling governments to potentially seek plausible deniability.

Rapidly measuring such blocks – and collecting data that can serve as evidence – is therefore necessary.

However, if you run [OONI Probe](https://ooni.org/install/), you are only performing tests on the network that you’re connected to. This means that you cannot measure censorship implemented on different networks or in different countries. If you use a VPN or VPS for remote testing, your measurements will not be as accurate as if run directly inside the intended country.

By running an OONI censorship measurement campaign, you can coordinate with other [OONI Probe](https://ooni.org/install/) users (who are in the country or connected to the networks where the blocks are reported or suspected) to **ensure that specific websites are rapidly measured**, and that relevant data (which may serve as evidence) is [openly published](https://ooni.org/data/) in real-time. Such [data](https://ooni.org/data/) can support **research and advocacy efforts** investigating the blocks.

### Examples of OONI censorship measurement campaigns

Over the years, internet freedom community members have coordinated OONI censorship measurement campaigns in support of their research and advocacy efforts.

For example, [Sinar Project](https://sinarproject.org/) coordinated an [OONI censorship measurement campaign in Malaysia](https://sinarproject.org/digital-rights/measuring-and-detecting-network-interference/ge15) to encourage the testing of election-related websites during the country’s 2022 general election. As part of this, they published a [Call to Action](https://sinarproject.org/digital-rights/measuring-and-detecting-network-interference/ge15) with OONI Probe testing instructions and the following [OONI Run](https://run.ooni.org/) widgets embedded into their website.

{{<img src="images/image3.png">}}

**Image:** Call to Action for OONI Probe testing of election-related websites during Malaysia's 2022 general election (source: [Sinar Project](https://sinarproject.org/digital-rights/measuring-and-detecting-network-interference/ge15)).

India’s [Software Freedom Law Centre (SFLC.in)](https://sflc.in/) embedded OONI Run widgets into their [India Internet Shutdown Tracker project](https://internetshutdowns.in/) website, encouraging long-term OONI Probe testing of news media, blogs, human rights, and political websites in India.

{{<img src="images/image4.png">}}

**Image:** Call to Action for OONI Probe testing of news media, blogs, human rights, and political websites in India (source: [SFLC.in](https://internetshutdowns.in/)).

Over the years, [Venezuela Inteligente](https://veinteligente.org/) coordinated with [OONI Probe volunteers in different regions of Venezuela](https://www.youtube.com/watch?v=UDvVfjJ0Iq8) to measure (and respond to) [temporary website blocks](https://vesinfiltro.com/) which emerged in correlation with political events. Human rights advocates from the global [#KeepItOn campaign](https://www.accessnow.org/keepiton/) coordinated OONI censorship measurement campaigns leading up to and during political events (such as elections and protests), using OONI data to support their advocacy efforts in response to emergent censorship events.

Community members have also run OONI censorship measurement campaigns for research purposes. [Digital Security Lab Ukraine](https://medium.com/@cyberlabukraine), for example, [coordinated with OONI Probe volunteers in different regions of Ukraine](https://www.youtube.com/watch?v=nIn-r6JxdEM) to examine how internet censorship differs from region to region (and network to network) in the country. OTF Information Controls research fellows, Igor Valentovitch and Ksenia Ermoshina, [investigated and compared internet censorship in Russia and Crimea](https://www.opentech.fund/news/exploring-online-media-filtering-during-2018-russian-presidential-elections/) during Russia’s 2018 presidential election by coordinating with OONI Probe communities for the testing of their custom lists of websites.

### How to run an OONI censorship measurement campaign

To organize your own OONI censorship measurement campaign:

**Step 1.** Determine the **question(s)** that you would like to investigate through your campaign.

Such questions help inform the timing and location of the campaign, the types of websites that would need to be tested, and other relevant factors that will help inform the design of your campaign.

For example, if you’re concerned about new censorship events emerging during Cambodia’s 2023 general election, a relevant question could be:

“Are election-monitoring and political opposition websites accessible in Cambodia during the country’s 2023 general election?”

Based on the above question, you would need to:

* Engage [OONI Probe](https://ooni.org/install/) users in Cambodia for website testing:
  * You can encourage them to take the [online OONI training course](https://advocacyassembly.org/en/courses/63/#/chapter/1/lesson/1);
  * Please communicate that censorship measurement is [potentially risky](https://ooni.org/about/risks/);
* Determine *which election-monitoring and political opposition websites* you would like OONI Probe users in Cambodia to test;
* Ensure that the testing is carried out during Cambodia’s 2023 elections (July 2023).

**Note:** Internet censorship is **often limited to specific networks or regions** within a country. You would therefore (ideally) engage OONI Probe users connected to as many networks and in as many regions in a country as possible. Depending on where internet censorship is reported, you may need to coordinate with people to run OONI Probe in those regions.

When determining the question(s) that will inform your campaign, it’s also worth determining your campaign goals (and relevant outputs, such as the publication of research).

**Step 2.** Determine **which website(s)** you would like to test for censorship.

This step may require some research to determine the specific URLs that you would like to measure for censorship. For example, if you’re interested in monitoring political opposition websites in Cambodia, you may need to start off by carrying out some desk research to identify those sites. It may also be worth reaching out to local experts, asking for website testing recommendations.

**Step 3.** **Save yourlist of websites in a text editor**, where each URL is in a separate line. You do not need to separate URLs by commas or in any other way.

{{<img src="images/image5.png">}}

**Important:** Please ensure that each [URL](https://ooni.org/support/glossary/#url) is typed correctly. If it is mis-typed, [OONI Probe](https://ooni.org/install/mobile) will not test the intended website and this will potentially lead to inaccurate test results.

A few things to keep in mind:

*   Is the website on **HTTP** or **HTTPS**? If the latter, please add an extra `s` after `http`.
*   Does the [domain](https://ooni.org/support/glossary/#domain-name) include `www`? If so, please include it.
*   If the website is on HTTPS (e.g `https://www.hrw.org/`), you don’t need to specify a webpage (e.g `https://www.hrw.org/publications`), since ISPs usually cannot limit blocking to a specific webpage when it’s hosted on HTTPS. Rather, they would have to block access to the entire website.

To ensure that each [URL](https://ooni.org/support/glossary/#url) is typed accurately, please **copy-paste it from a browser**.

**Optional, but encouraged:** If some of the websites that you’re using for your measurement campaign are relevant for country-wide or worldwide testing, please propose them for the lists of websites ("[test lists](https://ooni.org/get-involved/contribute-test-lists)") tested by all OONI Probe users. You can do so through our [Test Lists Editor](https://ooni.org/support/test-lists-editor).

**Step 4.** **Copy** your list of URLs (from your text editor).

**Step 5.** Visit the OONI Run website: [https://run.ooni.org/](https://run.ooni.org/)

{{<img src="images/image11.png">}}

**Step 6. Paste** your list of URLs into the first URL slot of the OONI Run page.

You should now see that all of your URLs have populated each URL row in the [OONI Run](https://run.ooni.org/) page.

{{<img src="images/image8.png">}}

If you notice any empty rows (or otherwise misformatted URLs), please delete them by clicking on the **deletion icon** or edit them by clicking on the URL field.

**Step 7.** Click the **Generate** button at the end of your list.

{{<img src="images/image1.png">}}

You will now see the following pop-up window.

{{<img src="images/image6.png">}}

**Note:** If you have a long list of websites (resulting in the generated link being very long), we recommend using the **widget code** generated through the pop-up window to embed a widget into your website (for the testing of your list of websites). Learn more through our [OONI Run user guide](https://ooni.org/support/ooni-run#creating-ooni-run-widget-code-for-website-testing). You can also refer to the [widgets that we have embedded](https://ooni.org/get-involved/run) into the OONI website.

**Step 8. Copy** the generated mobile deep link either by:

*   Clicking the link under “**Share this link with OONI Probe mobile app users**”, pressing Control+A to select the whole link, and subsequently pressing Control + C to copy it; or
*   Right-clicking the **Link button** and selecting “Copy link address”.

{{<img src="images/image10.png">}}

**Step 9. Share** the copied link with **[OONI Probe mobile app users](https://ooni.org/install/mobile)** in the country where you would like your list of websites to get tested (it’s not currently possible to use these links with the OONI Probe desktop app). Alternatively, share the link on Twitter by clicking the Tweet button.

**Important:** When engaging people with the use of [OONI Probe](https://ooni.org/install/), please communicate that censorship measurement can potentially be [risky](https://ooni.org/about/risks/). Participants should be aware of potential risks and provide consent.

When your communities receive the link, they should **open it with the [OONI Probe mobile app](https://ooni.org/install/mobile)** (not with a web browser).

{{<img src="images/image12.jpg">}}

They will then see your list of websites in their OONI Probe mobile app.

{{<img src="images/image9.jpg">}}

If they agree to test your list of websites, they can do so by tapping **Run**.

{{<img src="images/image2.jpg">}}

**Important:** Please encourage your community of OONI Probe testers to **perform testing as many times as possible on multiple networks** based on the shared link (the more results, the greater the evidence of potential censorship). If there are reports that some websites are not accessible on different networks or in different regions in the country, please share the link with OONI Probe users there too.

Once the testing has completed, OONI Probe users will have immediate [access to the test results through their OONI Probe mobile app](https://ooni.org/support/ooni-probe-mobile#websites), which they can [share](https://ooni.org/support/ooni-probe-mobile#sharing-your-ooni-probe-test-results) with you.

All OONI Probe test results will automatically get published on [OONI Explorer](https://explorer.ooni.org/) and on the [OONI API](https://api.ooni.io/) in near real-time.

**Step 10.** Find the test results on OONI Explorer: [https://explorer.ooni.org/search](https://explorer.ooni.org/search)

{{<img src="images/image7.png">}}

Learn how to use OONI Explorer to find measurements relevant to your campaign through our [user guide](https://ooni.org/support/ooni-explorer/).

If you have any questions or need OONI data analysis support, please feel encouraged to [contact the OONI team](https://ooni.org/about/#contact).

If you publish research based on your campaign, we’d love to learn about it!
