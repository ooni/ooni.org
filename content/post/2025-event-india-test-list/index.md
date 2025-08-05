---
title: "[Event Report] India, Let's build the list 2025"
author: "The Bachchao Project, OONI"
date: "2025-07-05"
tags: ["events", "test list", "india"]
categories: ["blog"]
---

In June 2025, **The [Bachchao Project](https://thebachchaoproject.org/) and OONI** reviewed the[ list of websites](https://github.com/citizenlab/test-lists/blob/master/lists/in.csv) used for monitoring website censorship in India. This is part of our efforts as a collective to build robust civil society engagement in monitoring internet access in India. As part of this event, we invited a small group of experts and practitioners to join us for a series of workshops focused on updating specific categories of websites tested for censorship in India.

Test lists are publicly curated[ lists of websites](https://github.com/citizenlab/test-lists/tree/master/lists) that are tested for censorship by[ OONI Probe ](https://ooni.org/install/)and tools developed by other projects, such as [Censored Planet](https://censoredplanet.org/#/). These lists include a wide range of different types of websites based on[ 30 standardized categories ](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)(such as news media, political criticism, and human rights content). 

The India-specific test list is hosted here: [https://github.com/citizenlab/test-lists/blob/master/lists/in.csv](https://github.com/citizenlab/test-lists/blob/master/lists/in.csv)

While test lists usually include *some *websites that are known to be blocked, many sites are not censored locally when they are added to test lists. By updating the test lists, we aim to **discover website censorship **(by identifying the blocking of sites that were previously accessible), not only to confirm it.

Though the lists are public and can (and should) be updated by anyone who has an interest in doing so, the review of the list requires an understanding of socio-political and economic issues and the current digital landscape to understand which websites host important information. We used [OONI’s](https://ooni.org/get-involved/contribute-test-lists) and [Netalitica’s](https://netalitica.com/wp-content/uploads/2024/03/Test-List-Manual-4E.pdf) documentation to guide us through the event.

Previously, the Indian test list was reviewed back in 2021, and you can read a detailed report about this update [here](https://ooni.org/post/2021-event-india-test-list/). Since 2021, India has witnessed a variety of social, political, and legal changes affecting the local digital landscape.

The COVID pandemic of 2020 – 2022 introduced new digital services and platforms and encouraged citizens to use online platforms daily. Access to online platforms and services became a necessity. This encouraged the development of payment, information, and identity verification services by private players. Some of these efforts brought forward questions of trust and politics in technology platforms.

The usage of digital platforms in daily life has also made digital platforms a more prominent means of sharing information. The regulation of social media platforms and new media platforms changed due to these increased interactions.

India witnessed various political movements during this time. Most of the movements were a result of policy changes and political decisions undertaken by the ruling government. For example, the introduction of the [Farm Bill](https://en.wikipedia.org/wiki/2020%E2%80%932021_Indian_farmers%27_protest) (in 2019 and 2021), through which the government claims to introduce reforms in agricultural businesses. Similarly introduction of the [CAA/NRC Act](https://en.wikipedia.org/wiki/Citizenship_(Amendment)_Act%2C_2019) in 2019, the abrogation of [Article 370](https://en.wikipedia.org/wiki/Article_370_of_the_Constitution_of_India) in Jammu & Kashmir in 2019 and 2020 also invited major political debates.

India also has a current ongoing conflict in the State of Manipur and cross-border tensions with its neighboring countries of China and Pakistan.

The government has also introduced three new criminal laws, [Bharatiya Nyaya Sanhita](https://en.wikipedia.org/wiki/Bharatiya_Nyaya_Sanhita), [Bharatiya Sakshaya Act](https://en.wikipedia.org/wiki/Bharatiya_Sakshya_Adhiniyam), and [Bharatiya Nagarik Suraksha](https://en.wikipedia.org/wiki/Bharatiya_Nagarik_Suraksha_Sanhita). These Acts are intended to replace the existing Indian Penal Code, Code of Criminal Procedure, and Evidence Act.

These changes have had an effect on information regulation, policies, and information control practices. Today, access to information is actively restricted and regulated by the government and courts based on the existing laws. Sometimes the access to information is also influenced by the telecom operators and other nation states' policies.

The ultimate goal of this series of workshops was to edit the existing test list to improve the monitoring of website censorship in India. **As part of this effort, we aimed to:

* Add the websites that may be considered important (by users) for monitoring;
* Update the existing entries and remove the inactive, outdated, or irrelevant websites from testing;
* Provide additional context about the existing and new entries for future research purposes.

On 21st and 22nd June 2025, we hosted **5 thematic working groups** that reviewed and updated 22 categories of tested websites (out of 30). We organised 22 categories in 5 thematic groups. Below are some of our observations for the thematic groups. In these observations, we also talk about the categories and factors we considered for these groups.

**Working Group 1: Gender and Sexual Information**

The categories included in this thematic section were LGBTQ (LGBT), Sex Education (SEX), Online Dating (DATE), and Pornographic Content (PORN). ​

India has been actively regulating pornographic content online. There have been several government and court orders to ban porn websites. 63 porn websites were [blocked](https://dot.gov.in/sites/default/files/Letter%20to%20ISP%2024-09-2022%20OW%20303%20of%202) in 2022. The ban of porn websites has been an ongoing effort, not necessarily a new trend we observed. For example, [Uttarkhand Court mandated ISPs](https://images.assettype.com/barandbench/import/2018/09/Uttarkhand-HC-Porn-ban-ISPs.pdf)to enforce a porn ban in 2018. Previous government orders took down different websites, including Porn Hub. While updating the list, we observed that despite bans, some of these sites remain accessible on certain networks. Some of them have circumvented the bans by moving their websites to the new domains.

Social media platforms and other communication platforms are more widely used now to share cases of sexual abuse in the country. Sometimes, they are also used to circulate videos shaming the survivors and victims of the abuse. For more prominent cases, courts have been issuing take-down orders. For example, orders requiring taking down the content from social media platforms followed the circulation of the rape videos of the [Kuki-Zo women](https://www.aljazeera.com/news/2023/7/20/outrage-in-india-over-video-of-manipur-women-paraded-naked-raped) from Manipur and the publication of the identity information of the [RG Kar Medical College Rape Victim](https://en.wikipedia.org/wiki/2024_Kolkata_rape_and_murder). These events have also increased the scrutiny on pornographic material online, including the Supreme Court stepping in and asking the social media and OTT platforms to have stringent screening for pornographic materials.

The border tensions between India and China have prompted India to be critical and reduce trust in technology built by Chinese companies. Many dating apps that were reportedly built by China were blocked during the Indo-China conflict, including various Asian and LGBTQ dating platforms.

In the whitelist issued by the government during the internet shutdown in Kashmir, websites related to Sexual Health and Education, Dating and Matrimonial sites were not included. This indicates that they were not considered a priority in terms of access to technology platforms.

**Working Group 2: Environment-related Information**

This section included only the Environment (ENV) category.

The ruling government introduced farm bills to regulate the markets that sell farmers' products. This bill resulted in large protests across the country. During these protests of 2019 & 2021, the Kisan Manch Facebook page was [reportedly](https://www.thefinancialworld.com/facebook-removes-kisan-ekta-manch-page-restores-later-after-outcry/) taken down, and access to it was restored after the protests ended. Reports point to the [removal](https://www.bbc.com/news/world-asia-india-55898708) of several X (formerly known as Twitter) accounts on governmental orders. Kisan Ekta Morcha [claimed](https://www.bbc.com/news/world-asia-india-55898708) that a lot of accounts connected with them were blocked.

The Caravan, a leading long-form news platform’s website, which was covering these events in depth, was also reportedly[ temporarily blocked](https://www.ft.com/content/8b9cfde2-9acb-476b-bf16-f5d6cc599494) on X/Twitter. Websites of citizen action groups like Fridays for Futures and There is No Earth B were also [reported](https://southasiatimes.org/young-green-activists-blocked-in-india/) to be blocked.

The regulation around civil society was experiencing changes in 2010 with the [amendment of the FCRA rule](https://qz.com/india/1611326/india-has-been-hostile-to-ngos-for-decades-modi-made-it-worse), which made fundraising harder. The change of government in 2014 also prompted more changes in this direction, increasing the challenges for civil society. [Leaked intelligence reports](https://www.icj.org/wp-content/uploads/2020/12/India-FCRA-Briefing-Paper-2020-ENG.pdf) blamed groups like Greenpeace and others for causing a loss of revenue for the country (because their evidentiary and awareness-building work caused public scrutiny and legal roadblocks for industry and state projects).

**Working Group 3: Health Information**

The categories included in this thematic section were Public Health (PUBH), Sex Education (SEX), and Alcohol and Drugs (ALDR).

With COVID, health information became more accessible through social media platforms and other websites. This has also led to the spread of misinformation and questioning of health information shared online.

The X/Twitter account of ‘The Liver Doc ’, a doctor sharing health-related information on X/Twitter, [was suspended](https://www.indiatoday.in/health/story/dr-abby-philips-aka-the-liver-doc-gets-his-x-account-back-2449008-2023-10-14) in India after an ex parte judgement from the Bangalore Civil Court on 28th September 2023 due to the case filed by a major pharma company. His account was restored by the Karnataka High Court on October 14th, 2023.

On 10th August 2023, the central government released[ Guidelines for Health and Wellness Celebrities and Influencers](https://www.consumeraffairs.nic.in/sites/default/files/file-uploads/latestnews/Additional%20Influencer%20Guidelines%20for%20Health%20and%20Wellness%20Celebrities,%20Influencers%20and%20Virtual%20Influencers.pdf) as a step towards ensuring accountability over health claims and misinformation that could be harmful to the public interest. This can be seen in light of widespread misinformation about vaccinations and health protocols in the wake of the COVID-19 pandemic. Following these guidelines Delhi High Court ordered the [take-down](https://indiankanoon.org/doc/190433832/) of the Instagram video and LinkedIn post by Mr Prashant Desai on 26th September 2024 because of the criticism of certain “health drinks”.

**Working Group 4: Technology Infrastructure**

The categories included in this thematic section were Search Engines (SRCH), Communication Tools (COMT), File Sharing (FILE), Media Sharing (MMED), E-commerce (COMM), Gaming (GAME), Hacking tools (HACK), and Anonymization and Circumvention Tools (ANON).

The reduced trust of the Government of India in the Chinese-funded/built applications led to about [220 applications](https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=1635206) being [removed](https://www.pib.gov.in/PressReleasePage.aspx?PRID=1650669) from the Indian app stores [in 2020](https://www.pib.gov.in/PressReleasePage.aspx?PRID=1675335). Several of these applications were file-sharing, communication, and media-sharing apps. The [list](https://www.pib.gov.in/PressReleasePage.aspx?PRID=1675335) also included some payment platforms and some dating applications, making their services inaccessible for customers.

Several video streaming platforms have been[ ordered to be blocked under copyright infringement cases](https://dot.gov.in/blocking-notificationsinstructions-internet-service-licensees-under-court-orders?page=21) filed by popular channels and production companies such as Star Entertainment, Sony Entertainment, and other organisations. A lot of these platforms were reported to have violated copyright rules. We observed that these platforms, though temporarily unavailable, ended up coming back online in different forms over time. The government and courts have been pushing for stricter blocking, which would probably make these domains inaccessible in the future.

CERT-In released a set of directions for VPN Service Providers with users in India to store information about their customers’ IP addresses and logs along with other information for a period of 5 years. Since the VPN services are advertised to provide privacy to their users, this directive was criticized by major VPN providers. The government of India also later on went on to [ban some](https://trak.in/stories/6-vpn-services-including-cloudflare-vpn-banned-by-govt-of-india/) of the VPN Services.

The States of Manipur and Jammu and Kashmir have experienced long-term internet outages. In both these shutdowns, the restoration of internet connection has involved an undertaking from internet users. This undertaking prohibits tethering and the usage of VPN Apps.

The Government of India introduced [the IT rules amendment for gaming websites](https://www.pib.gov.in/PressReleasePage.aspx?PRID=1918383) and Intermediaries in April 2023. It[ mandates and holds intermediaries responsible](https://www.pib.gov.in/PressReleasePage.aspx?PRID=1914358) for the games and information hosted on their sites. It warns of a ban for games that violate the rules. This enables the requirement of KYC for games that involve money transactions.

In 2025, 25 betting apps and at least 100 websites were [reportedly blocked](https://www.thecricketpanda.com/banned-betting-apps-in-india/)for violating the rules. Most of these apps and websites were blocked for illegal and unregulated gambling.

India released the Digital Personal Data Protection Rules in 2025. In the past decade, several services, including government welfare schemes, have collected large amounts of data. At that time, there was no clear regulation on how this data should be stored or could be used. Some platforms attempted to provide services using this data, but since 2025, the Government of India [has restricted the usage of Aadhar](https://economictimes.indiatimes.com/tech/technology/ettech-explainer-why-is-the-government-cracking-down-on-id-verification-services/articleshow/121890707.cms?from=mdr) (digital ID) for identity verification by private platforms.

Indian Meteorological Data, which was freely accessible before, is now restricted and paywalled. This has also affected platforms that used this data to inform users.

**Working Group 5: Information and Human Rights**

The categories included in this thematic section were Human Rights (HUMR), News Media (NEWS), Hosting and Blogging Platforms (HOST), Political Criticism (POLR), and Religion (REL).

Over the last 5 years, many news media organizations have been blocked. The censorship has also affected the social media platforms, for example, [Savala Vada](https://www.medianama.com/2025/06/223-india-savala-vada-instagram-free-speech/), a platform hosting political cartoons and satire, experienced the take-down of their Instagram account.

During recent cross-border tensions with Pakistan, multiple YouTube channels [were blocked](https://www.hindustantimes.com/india-news/full-list-of-16-pakistani-youtube-channels-blocked-by-centre-for-spreading-hate-after-pahalgam-terror-attack-101745816755063.html). X/Twitter profiles of Maktoob Media, The Kashmiriyat, and Free Press Kashmir [were blocked](https://www.thenewsminute.com/news/maktoob-media-the-kashmiriyat-free-press-kashmir-accounts-blocked-on-x) during border tensions between India and Pakistan, and another 8000 profiles were [requested](https://www.thehindubusinessline.com/info-tech/xs-global-affairs-account-reinstated-after-being-withheld-in-india-briefly/article69556265.ece) to be blocked. Some Turkish websites and brands were also [reportedly impacted](https://www.business-standard.com/industry/news/ecom-firms-reduce-visibility-of-turkish-brands-amid-india-pak-tensions-125051301630_1.html) by censorship during the tensions between India and Pakistan.

We also observed several political parties increasing their online presence. Most political parties have upgraded to better top-level domains. But a lot of them still lacked a secure certificate (likely due to the usage of [National Indian Root CA](https://cca.gov.in/)).

The table below shares an overview of the [changes and updates](https://github.com/citizenlab/test-lists/pull/1983) to the list contributed by the community members during the two-day workshop hosted by the Baochchao Project.


---

We hope that this effort encourages more people to engage in list-building and testing activities. We also hope that the new information helps with a better and updated understanding of website access in India. 
