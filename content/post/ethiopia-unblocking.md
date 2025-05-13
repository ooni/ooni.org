---
title: "Ethiopia: Verifying the unblocking of websites"
author: "Berhan Taye (Access Now), Maria Xynou (OONI), Leonid Evdokimov (OONI), Moses Karanja (University of Toronto)"
date: "2018-06-29T19:49:00"
tags: ["ethiopia", "unblocking", "country-et", "theme-news_media", "theme-social_media", "theme-circumvention", "theme-human_rights"]
categories: ["report"]
---

![Rally at Meskel Square](/post/ethiopia-unblocking/cover.jpg)
Pro PM Abiy Ahmed Rally at Meskel Square, June 2018 - Photo by Berhan Taye


On 22nd June 2018, the Ethiopian government [reported](http://www.africanews.com/2018/06/23/ethiopia-unblocks-264-websites-and-tv-channels/) that it had unblocked 264 websites. This (great) news was also [reported by ESAT](https://ethsat.com/2018/06/ethiopia-unblocks-264-websites-including-esat/), a major Ethiopian media website that was [blocked](https://explorer.ooni.io/measurement/20160817T192345Z_AS24757_vkmTFvmkOUzdotRJrOUrieRB5bqhrEUjem5G2ZnQqDbfRByV2U?input=http:%2F%2Fethsat.com) over the last years.

Today, [OONI](/) and [Access Now](https://www.accessnow.org/) publish new research based on the testing of sites that were previously [found to be blocked](/post/ethiopia-report/#websites-blocked), in an attempt to examine whether they have in fact been unblocked in recent days.

# Why this matters

We quite rarely hear of governments unblocking hundreds of websites in one go. This is also an important event given Ethiopia’s political climate and the conditions that led to [pervasive levels of internet censorship](/post/ethiopia-report/). In addition to internet censorship, the Ethiopian government has [prosecuted](https://freedomhouse.org/report/freedom-net/2017/ethiopia) many for their online activities and repeatedly [shutdown the internet](/post/ethiopia-internet-shutdown-amidst-recent-protests/).  

Under a [new Prime Minister](https://edition.cnn.com/2018/04/02/africa/ethiopia-new-pm-abiy-ahmed/index.html) who’s from the Oromia region - that has been [protesting](https://www.bbc.com/news/world-africa-36940906) against marginalization and persecution by authorities over the last years - many reforms have taken place over the last months. These include the [release of thousands of political prisoners](https://www.aljazeera.com/indepth/opinion/abiy-ahmed-transforming-ethiopia-face-adversity-180622112645741.html), the [termination of the State of Emergency](https://qz.com/1295834/ethiopias-prime-minister-abiy-ahmed-ends-the-countrys-state-of-emergency-early/), [peace-building efforts with Eritrea](https://www.nytimes.com/2018/06/05/world/africa/ethiopia-eritrea-peace-deal.html) and, more recently, the [reported unblocking](http://www.africanews.com/2018/06/23/ethiopia-unblocks-264-websites-and-tv-channels/) of websites.  

But to our knowledge, an official list detailing the 264 websites that are reportedly unblocked has not been published yet. As a result, confirming that all of these sites are indeed accessible is quite challenging, since it remains unclear which sites have been unblocked.

Nonetheless, we decided to start off by having a look at sites that were previously known to be blocked based on [OONI’s network measurement data](https://explorer.ooni.io/country/ET). About two years ago, OONI collaborated with Amnesty International on a joint [research report](/post/ethiopia-report/) examining internet censorship in Ethiopia. Through network measurement tests, this research found numerous news outlets, human rights, LGBTQI, political opposition, and circumvention tool sites to be blocked through the use of Deep Packet Inspection (DPI) technology. Previous censorship research conducted by [The Open Net Initiative (ONI)](https://opennet.net/research/profiles/ethiopia) between 2006-2012 also documented extensive blocking of websites, especially political blogs hosting opposition content.

By lifting the lid on said 264 websites, the Ethiopian government may be closing a decade-long sustained internet censorship. While this is a positive move, there is need for continuous vigilance on monitoring information controls in Ethiopia, as such controls may potentially mutate from overt forms, like website blocking and internet shutdowns, to more covert controls, like targeted surveillance and social media manipulation.

# Findings

Almost all of the websites previously [found to be blocked](/post/ethiopia-report/#websites-blocked) seem to have been unblocked over the last month. Our data analysis - providing a timeline of recent blocking and unblocking - is available **[here](/post/ethiopia-unblocking/2018-06-ethiopia-unblocking.csv)**

The following sections list the [previously known to be blocked sites](/post/ethiopia-report/#websites-blocked) and share [OONI measurements](https://explorer.ooni.io/country/ET) showing their recent unblocking. The tables that will follow provide dates pertaining to the last OONI measurements showing the blocking of sites, and the first OONI measurements showing their unblocking. It can therefore be inferred that the sites in question were probably unblocked between these dates, though the precise dates of unblocking are unknown due to the limited availability of relevant network measurements.

## Media outlets

Two years ago, [more than 15 Ethiopian media websites](/post/ethiopia-report/#media-outlets) were blocked amidst a [wave of deadly protests](/post/ethiopia-report/#internet-censorship-during-protests). Now, under a [new government](https://edition.cnn.com/2018/04/02/africa/ethiopia-new-pm-abiy-ahmed/index.html), almost all of these sites seem to be accessible, as illustrated in the following table.

| Tested URLs | **Last** blocked measurement | **First** unblocked measurement |
|------------|-------------------------|------------------------------|
| http://ecadforum.com/ | [12th April 2018](https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Fecadforum.com%2F) | [7th June 2018](https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fecadforum.com%2F) |
| https://mereja.com | [12th April 2018](https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=https:%2F%2Fmereja.com) | [7th June 2018](https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=https:%2F%2Fmereja.com) |
| http://zehabesha.com/ | [12th September 2016](https://explorer.ooni.io/measurement/20160912T112136Z_AS24757_b8C5V1dP3DlBSVTWBFZ3HEZ4RyzJzyyBEmhx1k5jiVTnITtcIr?input=http:%2F%2Fzehabesha.com%2F) | N/A |
| http://ethiomedia.com | [24th February 2018](https://explorer.ooni.io/measurement/20180224T065645Z_AS24757_kHgSNnt3ZBjGe8Af2JZZ5jEMQ7ro2MtqyrA5CWK8ON5Z2IVXdS?input=http:%2F%2Fethiomedia.com) | [23rd June 2018](https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Fethiomedia.com) |
| http://ethsat.com | [12th April 2018](https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Fethsat.com%2F) | [7th June 2018](https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fethsat.com%2F) |
| http://ethiopianreview.com | [18th April 2017](https://explorer.ooni.io/measurement/20170418T163133Z_AS24757_X5R90nNDscpexxCsw6y93vwO57xbp0MeIA9zU7oQmYyJCyA6mK?input=http:%2F%2Fethiopianreview.com) | [23rd June 2018](https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Fethiopianreview.com) |
| http://www.ethioforum.org | [18th April 2017](https://explorer.ooni.io/measurement/20170418T163133Z_AS24757_X5R90nNDscpexxCsw6y93vwO57xbp0MeIA9zU7oQmYyJCyA6mK?input=http:%2F%2Fwww.ethioforum.org) | [23rd June 2018](https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Fwww.ethioforum.org) |
| http://www.quatero.net | [18th April 2017](https://explorer.ooni.io/measurement/20170418T163133Z_AS24757_X5R90nNDscpexxCsw6y93vwO57xbp0MeIA9zU7oQmYyJCyA6mK?input=http:%2F%2Fwww.quatero.net) | [26th June 2018](https://explorer.ooni.io/measurement/20180626T081130Z_AS24757_eJnwpDjxi2jvx0YT0pea8OqBy9ptZm2HeMLGqLF2sEAcivNw56?input=http:%2F%2Fwww.quatero.net%2F) |
| http://www.goolgule.com | [24th February 2018](https://explorer.ooni.io/measurement/20180224T065645Z_AS24757_kHgSNnt3ZBjGe8Af2JZZ5jEMQ7ro2MtqyrA5CWK8ON5Z2IVXdS?input=http:%2F%2Fwww.goolgule.com) | [23rd June 2018](https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Fwww.goolgule.com) |
| http://www.ogaden.com | [24th February 2018](https://explorer.ooni.io/measurement/20180224T065645Z_AS24757_kHgSNnt3ZBjGe8Af2JZZ5jEMQ7ro2MtqyrA5CWK8ON5Z2IVXdS?input=http:%2F%2Fwww.ogaden.com) | [23rd June 2018](https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Fwww.ogaden.com) |
| http://oromiamedia.org/ | [23rd June 2018](https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Foromiamedia.org%2F) | N/A |
| https://www.oromiamedia.org/ | [7th June 2018](https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=https:%2F%2Fwww.oromiamedia.org%2F) | [26th June 2018](https://explorer.ooni.io/measurement/20180626T102649Z_AS24757_dclIeZaa5e75c3gN7rVZWluzecAEpFAs6DaL3sxR3R48VpOe8u?input=https:%2F%2Fwww.oromiamedia.org%2F) |
| http://www.debteraw.com | [4th May 2018](https://explorer.ooni.io/measurement/20180504T064138Z_AS24757_bG2hOF4yLGhsaAMoZZ0CD6jgblmya3xKntwUTfwDH06xkhjr81?input=http:%2F%2Fwww.debteraw.com) | [7th June 2018](https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fwww.debteraw.com) |
| http://www.nazret.com | [12th April 2018](https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Fwww.nazret.com%2F) | [7th June 2018](https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fwww.nazret.com%2F) |
| http://www.tzta.ca | [23rd June 2018](https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Fwww.tzta.ca) | [26th June 2018](https://explorer.ooni.io/measurement/20180626T102649Z_AS24757_dclIeZaa5e75c3gN7rVZWluzecAEpFAs6DaL3sxR3R48VpOe8u?input=http:%2F%2Fwww.tzta.ca) |
| http://www.ethiopianreporter.com | [24th February 2018](https://explorer.ooni.io/measurement/20180224T065645Z_AS24757_kHgSNnt3ZBjGe8Af2JZZ5jEMQ7ro2MtqyrA5CWK8ON5Z2IVXdS?input=http:%2F%2Fwww.ethiopianreporter.com) | [23rd June 2018](https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Fwww.ethiopianreporter.com) |
| http://www.ethioobserver.net/ | [7th June 2018](https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fwww.ethioobserver.net%2F) | [24th June 2018](https://explorer.ooni.io/measurement/20180624T095414Z_AS24757_8n0E1nbCnJmkeI97jQbxbXyz3Q9h93jf4IP6f5nXSFxnsuyyx4?input=http:%2F%2Fwww.ethioobserver.net%2F) |
| http://abbaymedia.info | [12th April 2018](https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Fabbaymedia.info) | [7th June 2018](https://explorer.ooni.io/measurement/20180607T224120Z_AS24757_EosXWkpmIOOjuCsiO2zwrksubPmahjUQtuEQNKZS4wRuzboNfy?input=http:%2F%2Fabbaymedia.info) |

Most media sites seem to have been unblocked from April 2018 onwards (most likely in June 2018), following the [swearing in of Ethiopia’s new Prime Minister](https://edition.cnn.com/2018/04/02/africa/ethiopia-new-pm-abiy-ahmed/index.html). The unblocking of oromiamedia.org and ethsat.com, in particular, can potentially be viewed as a political landmark, given that these websites cover news from the Oromia region that has been [protesting heavily](https://www.bbc.com/news/world-africa-36940906) over the last years.

It’s worth noting though that while the HTTPS version of oromiamedia.org seems to be [accessible](https://explorer.ooni.io/measurement/20180626T102649Z_AS24757_dclIeZaa5e75c3gN7rVZWluzecAEpFAs6DaL3sxR3R48VpOe8u?input=https:%2F%2Fwww.oromiamedia.org%2F) from (at least) 26th June 2018, the HTTP version of the site was [blocked on 23rd June 2018](https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Foromiamedia.org%2F) and hasn’t been tested since. Furthermore, it remains unclear if zehabesha.com has been unblocked, since the site [hasn't been tested since September 2016](https://explorer.ooni.io/measurement/20160912T112136Z_AS24757_b8C5V1dP3DlBSVTWBFZ3HEZ4RyzJzyyBEmhx1k5jiVTnITtcIr?input=http:%2F%2Fzehabesha.com%2F). OONI Probe mobile app users can test both sites via [OONI Run](https://run.ooni.io/nettest?tn=web_connectivity&ta=%7B%22urls%22%3A%5B%22http%3A%2F%2Fzehabesha.com%2F%22%2C%22http%3A%2F%2Foromiamedia.org%2F%22%5D%7D&mv=1.2.0).

## Instagram

# Instagram Accessibility in Ethiopia

Most popular social networking sites and services seem to be accessible in Ethiopia. Instagram, however, is [blocked](https://explorer.ooni.io/measurement/20180625T060311Z_AS24757_eSjxSSELTTMYZhwJKLYYmV8HUJ8IEIiQnboLxGms7K4oOcGPVm?input=https:%2F%2Finstagram.com) on mobile data (connections to https://instagram.com are reset), but [accessible](https://explorer.ooni.io/measurement/20180625T034722Z_AS24757_XKdZRcT9FE2VaYZFEINvWwBJOlzgmLLxGRaClVMzFB8yiYALVv?input=https:%2F%2Finstagram.com) over WiFi (according to measurements collected on 25th June 2018).

## Human rights and LGBTQI

Several human rights and LGBTQI site were [previously found to be blocked](/post/ethiopia-report/#human-rights-websites) in Ethiopia. Recent measurements suggest that these sites have been unblocked, as illustrated in the following table.

| Tested URLs | **Last** Blocked Measurement | **First** Unblocked Measurement |
|------------|-------------------------|------------------------------|
| http://www.cyberethiopia.com/ | [12th April 2018](https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Fwww.cyberethiopia.com%2Fwarka14%2F) | [7th June 2018](https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fwww.cyberethiopia.com%2Fwarka14%2F) |
| http://www.fepproject.org | [12th September 2016](https://explorer.ooni.io/measurement/20160912T073614Z_AS24757_X3IkzqOSgCNOKdIDORFtxZecJr5joiFg8RJwj1Nzx4K9NTBik6?input=http:%2F%2Fwww.fepproject.org) | [7th October 2016](https://explorer.ooni.io/measurement/20161007T103227Z_AS24757_2L3k891LkzJ6lTGT4TYB4L1sjbaNQq5uvLSAk0vNZ8WIKsz4Jb?input=http:%2F%2Fwww.fepproject.org) |
| http://www.queernet.org/ | [12th April 2018](https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Fwww.queernet.org%2F) | [7th June 2018](https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fwww.queernet.org%2F) |
| http://www.samesexmarriage.ca/ | [24th February 2018](https://explorer.ooni.io/measurement/20180226T130436Z_AS24757_I92qPHDdzidUh6huAbI3iGcLTPae4N7dS9L16h9SFi7AeZczAi?input=http:%2F%2Fwww.samesexmarriage.ca) | [25th June 2018](https://explorer.ooni.io/measurement/20180625T122826Z_AS24757_csAuWFuX9SkLE1hcCKlFNhQbcfRNWK5ttP0I1IIxAGr9SbbBs8?input=http:%2F%2Fwww.samesexmarriage.ca) |
| http://www.ifge.org/ | [12th April 2018](https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Fwww.ifge.org%2F) | [7th June 2018](https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fwww.ifge.org%2F) |

## Political opposition and armed groups

Last week, Ethiopian rebel group Ginbot 7 [suspended its armed resistance](https://www.bbc.com/news/world-africa-44580761) against the government, as the new Prime Minister's reforms have reportedly given them hope that a "genuine democracy may be a real possibility". Recent OONI measurements though suggest that their site was [still blocked](https://explorer.ooni.io/measurement/20180626T081130Z_AS24757_eJnwpDjxi2jvx0YT0pea8OqBy9ptZm2HeMLGqLF2sEAcivNw56?input=http:%2F%2Fwww.ginbot7.org%2F) as of 26th June 2018.


| Tested URLs | **Last** Blocked Measurement | **First** Unblocked Measurement |
|------------|-------------------------|------------------------------|
| http://www.ginbot7.org | [26th June 2018](https://explorer.ooni.io/measurement/20180626T081130Z_AS24757_eJnwpDjxi2jvx0YT0pea8OqBy9ptZm2HeMLGqLF2sEAcivNw56?input=http:%2F%2Fwww.ginbot7.org%2F) | N/A |
| http://www.eprp.com | [18th April 2017](https://explorer.ooni.io/measurement/20170418T163133Z_AS24757_X5R90nNDscpexxCsw6y93vwO57xbp0MeIA9zU7oQmYyJCyA6mK?input=http:%2F%2Fwww.eprp.com) | [26th June 2018](https://explorer.ooni.io/measurement/20180626T081130Z_AS24757_eJnwpDjxi2jvx0YT0pea8OqBy9ptZm2HeMLGqLF2sEAcivNw56?input=http:%2F%2Fwww.eprp.com%2F) |
| http://www.eppf.net | [18th April 2017](https://explorer.ooni.io/measurement/20170418T163133Z_AS24757_X5R90nNDscpexxCsw6y93vwO57xbp0MeIA9zU7oQmYyJCyA6mK?input=http:%2F%2Fwww.eppf.net) | [26th June 2018](https://explorer.ooni.io/measurement/20180626T102649Z_AS24757_dclIeZaa5e75c3gN7rVZWluzecAEpFAs6DaL3sxR3R48VpOe8u?input=http:%2F%2Fwww.eppf.net) |
| http://www.onlf.org | [26th June 2018 (08:52 UTC)](https://explorer.ooni.io/measurement/20180626T081130Z_AS24757_eJnwpDjxi2jvx0YT0pea8OqBy9ptZm2HeMLGqLF2sEAcivNw56?input=http:%2F%2Fwww.onlf.org%2F) | [26th June 2018 (10:41 UTC)](https://explorer.ooni.io/measurement/20180626T102649Z_AS24757_dclIeZaa5e75c3gN7rVZWluzecAEpFAs6DaL3sxR3R48VpOe8u?input=http:%2F%2Fwww.onlf.org) |
| http://oromoliberationfront.org/ | [12th April 2018](https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Foromoliberationfront.org%2Fenglish%2F) | [7th June 2018](https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Foromoliberationfront.org%2Fenglish%2F) |

Other sites though of armed groups and the political opposition appear to have been unblocked recently. While the precise dates pertaining to the unblocking of most of these sites remain unclear, the site of the Ogaden National Liberation Front (onlf.org) appears to have been unblocked on 26th June 2018. This is suggested by OONI measurements showing that the site was [blocked at 08:52 UTC](https://explorer.ooni.io/measurement/20180626T081130Z_AS24757_eJnwpDjxi2jvx0YT0pea8OqBy9ptZm2HeMLGqLF2sEAcivNw56?input=http:%2F%2Fwww.onlf.org%2F), but [accessible](https://explorer.ooni.io/measurement/20180626T102649Z_AS24757_dclIeZaa5e75c3gN7rVZWluzecAEpFAs6DaL3sxR3R48VpOe8u?input=http:%2F%2Fwww.onlf.org) about two hours later.

## Circumvention tools

Confirming the potential unblocking of circumvention tool sites based on [OONI measurements](https://explorer.ooni.io/country/ET) is more challenging.

Measurements pertaining to torproject.org show that the site has switched between being accessible and inaccessible in various points in time over the last months. Unlike other measurements (which show connections being reset), the testing of torproject.org presents `generic timeout errors`. This suggests that rather than being blocked, the site may (at times) be inaccessible due to transient network failures. As the measurements pertaining to the testing of torproject.org are non-conclusive, it remains unclear whether the site has been blocked and unblocked in recent months. Most measurements though suggest that torproject.org remains (mostly) inaccessible in Ethiopia.

# Website Blocking/Unblocking Data

| Tested URLs | **Last** blocked measurement | **First** unblocked measurement |
|------------|-------------------------|------------------------------|
| https://www.torproject.org | [22nd June 2018](https://explorer.ooni.io/measurement/20180622T192757Z_AS24757_rkb3FEigjlMTmrAO6vvUAZr1ZhZ6PfW30zDjq9NRe3Mfo1MdmM?input=https:%2F%2Fwww.torproject.org%2F) | N/A |
| http://www.psiphon.ca | [24th February 2018](https://explorer.ooni.io/measurement/20180224T065645Z_AS24757_kHgSNnt3ZBjGe8Af2JZZ5jEMQ7ro2MtqyrA5CWK8ON5Z2IVXdS?input=http:%2F%2Fwww.psiphon.ca) | [26th June 2018](https://explorer.ooni.io/measurement/20180626T102649Z_AS24757_dclIeZaa5e75c3gN7rVZWluzecAEpFAs6DaL3sxR3R48VpOe8u?input=http:%2F%2Fwww.psiphon.ca) |
| https://www.psiphon.ca | N/A | [23rd June 2018](https://explorer.ooni.io/measurement/20180623T151016Z_AS24757_wi0mIIyqGAgiqK7JzULvAAkJ7recHEOTbXA4EXb2s10COhRDUk?input=https:%2F%2Fwww.psiphon.ca) |
| http://www.ultrasurf.us | [24th February 2018](https://explorer.ooni.io/measurement/20180224T065645Z_AS24757_kHgSNnt3ZBjGe8Af2JZZ5jEMQ7ro2MtqyrA5CWK8ON5Z2IVXdS?input=http:%2F%2Fwww.ultrasurf.us) | [23rd June 2018](https://explorer.ooni.io/measurement/20180623T151016Z_AS24757_wi0mIIyqGAgiqK7JzULvAAkJ7recHEOTbXA4EXb2s10COhRDUk?input=http:%2F%2Fwww.ultrasurf.us) |

Psiphon and Ultrasurf, on the other hand, appear to be accessible. Recent [measurements](https://explorer.ooni.io/country/ET) suggest that their sites have been unblocked over the last week, if not earlier.  

# Reproduce this study

OONI and Access Now carried out this study through the use of [free and open source software](https://github.com/TheTorProject/ooni-probe), [open methodologies](/docs/) and [open data](https://api.ooni.io/files/by_country/ET). This means that you can reproduce this study and independently verify our findings.

If you’re interesting in testing the potential unblocking of more sites in Ethiopia, you can do so via the following steps:

1.  [Install](/install/) the OONI Probe mobile app (Android, F-Droid, iOS)
2.  Add the sites you want to test to [OONI Run](https://run.ooni.io/) and generate a link
3.  Open your OONI Run link with your OONI Probe mobile app
4.  Tap “Run”

To view the results:

1.  Tap on the menu icon on the top left corner in your OONI Probe mobile app
2.  Tap “Past Tests”
3.  Tap “View” next to “Web Connectivity”

To view the details of each measurement, tap on “View” next to each tested site. If the site you selected is red, the measurement page will provide you the following information:

*   How the site is blocked (e.g. DNS tampering, HTTP or TCP/IP blocking);
*   How the specific censorship can be circumvented;
*   Network measurement information serving as evidence of the blocking (available towards the end of each measurement page).

Please note though that false positives may emerge. If you’re unsure how to interpret the data, please feel encouraged to reach out to the OONI team: contact@openobservatory.org.

To run more OONI Probe tests and to schedule daily testing, consider running OONI Probe on [Linux](/install/ooniprobe), [macOS](/install/ooniprobe), or on a [Raspberry Pi](/install/lepidopter/). All network measurement data will be published on [OONI Explorer](https://explorer.ooni.io/) and on the [OONI API](https://api.ooni.io/), increasing transparency of internet censorship.
