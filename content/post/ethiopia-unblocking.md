---
title: "Ethiopia: Verifying the unblocking of websites"
author: "Berhan Taye (Access Now), Maria Xynou (OONI), Leonid Evdokimov (OONI), Moses Karanja (University of Toronto)"
date: "2018-06-29T19:49:00"
tags: ["ethiopia", "unblocking", "country-et", "theme-news_media", "theme-social_media", "theme-circumvention", "theme-human_rights"]
categories: ["report"]
---

![Rally at Meskel Square](/post/ethiopia-unblocking/cover.jpg)
Pro PM Abiy Ahmed Rally at Meskel Square, June 2018 - Photo by Berhan Taye


On 22nd June 2018, the Ethiopian government <a href="http://www.africanews.com/2018/06/23/ethiopia-unblocks-264-websites-and-tv-channels//">reported</a>  that it had unblocked 264 websites. This (great) news was also <a href="https://ethsat.com/2018/06/ethiopia-unblocks-264-websites-including-esat/">reported by ESAT</a>, a major Ethiopian media website that was <a href="https://explorer.ooni.io/measurement/20160817T192345Z_AS24757_vkmTFvmkOUzdotRJrOUrieRB5bqhrEUjem5G2ZnQqDbfRByV2U?input=http:%2F%2Fethsat.com">blocked</a> over the last years.

Today, <a href="/">OONI</a> and <a href="https://www.accessnow.org/">Access Now</a> publish new research based on the testing of sites that were previously <a href="/post/ethiopia-report/#websites-blocked">found to be blocked</a>, in an attempt to examine whether they have in fact been unblocked in recent days.

# Why this matters

We quite rarely hear of governments unblocking hundreds of websites in one go. This is also an important event given Ethiopia’s political climate and the conditions that led to <a href="/post/ethiopia-report/">pervasive levels of internet censorship</a>. In addition to internet censorship, the Ethiopian government has <a href="https://freedomhouse.org/report/freedom-net/2017/ethiopia">prosecuted</a> many for their online activities and repeatedly <a href="/post/ethiopia-internet-shutdown-amidst-recent-protests/">shutdown the internet</a>.  

Under a <a href="https://edition.cnn.com/2018/04/02/africa/ethiopia-new-pm-abiy-ahmed/index.html">new Prime Minister</a> who’s from the Oromia region - that has been <a href="https://www.bbc.com/news/world-africa-36940906">protesting</a> against marginalization and persecution by authorities over the last years - many reforms have taken place over the last months. These include the <a href="https://www.aljazeera.com/indepth/opinion/abiy-ahmed-transforming-ethiopia-face-adversity-180622112645741.html">release of thousands of political prisoners</a>, the <a href="https://qz.com/1295834/ethiopias-prime-minister-abiy-ahmed-ends-the-countrys-state-of-emergency-early/">termination of the State of Emergency</a>, <a href="https://www.nytimes.com/2018/06/05/world/africa/ethiopia-eritrea-peace-deal.html">peace-building efforts with Eritrea</a> and, more recently, the <a href="http://www.africanews.com/2018/06/23/ethiopia-unblocks-264-websites-and-tv-channels//">reported unblocking</a> of websites.  

But to our knowledge, an official list detailing the 264 websites that are reportedly unblocked has not been published yet. As a result, confirming that all of these sites are indeed accessible is quite challenging, since it remains unclear which sites have been unblocked.

Nonetheless, we decided to start off by having a look at sites that were previously known to be blocked based on <a href="https://explorer.ooni.io/country/ET">OONI’s network measurement data</a>. About two years ago, OONI collaborated with Amnesty International on a joint <a href="/post/ethiopia-report/">research report</a> examining internet censorship in Ethiopia. Through network measurement tests, this research found numerous news outlets, human rights, LGBTQI, political opposition, and circumvention tool sites to be blocked through the use of Deep Packet Inspection (DPI) technology. Previous censorship research conducted by <a href="https://opennet.net/research/profiles/ethiopia">The Open Net Initiative (ONI)</a> between 2006-2012 also documented extensive blocking of websites, especially political blogs hosting opposition content.

By lifting the lid on said 264 websites, the Ethiopian government may be closing a decade-long sustained internet censorship. While this is a positive move, there is need for continuous vigilance on monitoring information controls in Ethiopia, as such controls may potentially mutate from overt forms, like website blocking and internet shutdowns, to more covert controls, like targeted surveillance and social media manipulation.

# Findings

Almost all of the websites previously<a href="/post/ethiopia-report/#websites-blocked"> found to be blocked</a> seem to have been unblocked over the last month. Our data analysis - providing a timeline of recent blocking and unblocking - is available **<a href="/post/ethiopia-unblocking/2018-06-ethiopia-unblocking.csv">here</a>**

The following sections list the <a href="/post/ethiopia-report/#websites-blocked">previously known to be blocked sites</a> and share <a href="https://explorer.ooni.io/country/ET">OONI measurements</a> showing their recent unblocking. The tables that will follow provide dates pertaining to the last OONI measurements showing the blocking of sites, and the first OONI measurements showing their unblocking. It can therefore be inferred that the sites in question were probably unblocked between these dates, though the precise dates of unblocking are unknown due to the limited availability of relevant network measurements.

## Media outlets

Two years ago, <a href="/post/ethiopia-report/#media-outlets">more than 15 Ethiopian media websites</a> were blocked amidst a <a href="/post/ethiopia-report/#internet-censorship-during-protests">wave of deadly protests</a>. Now, under a <a href="https://edition.cnn.com/2018/04/02/africa/ethiopia-new-pm-abiy-ahmed/index.html">new government</a>, almost all of these sites seem to be accessible, as illustrated in the following table.


<table style="margin-left:-37.5pt;border-spacing:0;border-collapse:collapse;margin-right:auto">

<tbody>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;background-color:#ea9999;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

Tested URLs

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;background-color:#ea9999;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<b>Last</b> blocked measurement

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;background-color:#ea9999;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<b>First</b> unblocked measurement

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://ecadforum.com/

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Fecadforum.com%2F">12th April 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fecadforum.com%2F">7th June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

https://mereja.com

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=https:%2F%2Fmereja.com">12th April 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=https:%2F%2Fmereja.com">7th June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://zehabesha.com/

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20160912T112136Z_AS24757_b8C5V1dP3DlBSVTWBFZ3HEZ4RyzJzyyBEmhx1k5jiVTnITtcIr?input=http:%2F%2Fzehabesha.com%2F">12th September 2016</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

N/A

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://ethiomedia.com

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180224T065645Z_AS24757_kHgSNnt3ZBjGe8Af2JZZ5jEMQ7ro2MtqyrA5CWK8ON5Z2IVXdS?input=http:%2F%2Fethiomedia.com">24th February 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Fethiomedia.com">23rd June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://ethsat.com

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Fethsat.com%2F">12th April 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fethsat.com%2F">7th June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://ethiopianreview.com

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20170418T163133Z_AS24757_X5R90nNDscpexxCsw6y93vwO57xbp0MeIA9zU7oQmYyJCyA6mK?input=http:%2F%2Fethiopianreview.com">18th April 2017</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Fethiopianreview.com">23rd June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://www.ethioforum.org

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20170418T163133Z_AS24757_X5R90nNDscpexxCsw6y93vwO57xbp0MeIA9zU7oQmYyJCyA6mK?input=http:%2F%2Fwww.ethioforum.org">18th April 2017</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Fwww.ethioforum.org">23rd June 2018</a> 

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://www.quatero.net

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20170418T163133Z_AS24757_X5R90nNDscpexxCsw6y93vwO57xbp0MeIA9zU7oQmYyJCyA6mK?input=http:%2F%2Fwww.quatero.net">18th April 2017</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180626T081130Z_AS24757_eJnwpDjxi2jvx0YT0pea8OqBy9ptZm2HeMLGqLF2sEAcivNw56?input=http:%2F%2Fwww.quatero.net%2F">26th June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://www.goolgule.com

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180224T065645Z_AS24757_kHgSNnt3ZBjGe8Af2JZZ5jEMQ7ro2MtqyrA5CWK8ON5Z2IVXdS?input=http:%2F%2Fwww.goolgule.com">24th February 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Fwww.goolgule.com">23rd June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://www.ogaden.com

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180224T065645Z_AS24757_kHgSNnt3ZBjGe8Af2JZZ5jEMQ7ro2MtqyrA5CWK8ON5Z2IVXdS?input=http:%2F%2Fwww.ogaden.com">24th February 2018</a> 

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Fwww.ogaden.com">23rd June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://oromiamedia.org/

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Foromiamedia.org%2F">23rd June 2018</a> 

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

N/A

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

https://www.oromiamedia.org/

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=https:%2F%2Fwww.oromiamedia.org%2F">7th June 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180626T102649Z_AS24757_dclIeZaa5e75c3gN7rVZWluzecAEpFAs6DaL3sxR3R48VpOe8u?input=https:%2F%2Fwww.oromiamedia.org%2F">26th June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://www.debteraw.com

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180504T064138Z_AS24757_bG2hOF4yLGhsaAMoZZ0CD6jgblmya3xKntwUTfwDH06xkhjr81?input=http:%2F%2Fwww.debteraw.com">4th May 2018</a> 

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fwww.debteraw.com">7th June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://www.nazret.com

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Fwww.nazret.com%2F">12th April 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fwww.nazret.com%2F">7th June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://www.tzta.ca

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Fwww.tzta.ca">23rd June 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180626T102649Z_AS24757_dclIeZaa5e75c3gN7rVZWluzecAEpFAs6DaL3sxR3R48VpOe8u?input=http:%2F%2Fwww.tzta.ca">26th June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://www.ethiopianreporter.com

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180224T065645Z_AS24757_kHgSNnt3ZBjGe8Af2JZZ5jEMQ7ro2MtqyrA5CWK8ON5Z2IVXdS?input=http:%2F%2Fwww.ethiopianreporter.com">24th February 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Fwww.ethiopianreporter.com">23rd June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://www.ethioobserver.net/

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fwww.ethioobserver.net%2F">7th June 2018</a> 

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180624T095414Z_AS24757_8n0E1nbCnJmkeI97jQbxbXyz3Q9h93jf4IP6f5nXSFxnsuyyx4?input=http:%2F%2Fwww.ethioobserver.net%2F">24th June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://abbaymedia.info

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:164.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Fabbaymedia.info">12th April 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:176.2pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180607T224120Z_AS24757_EosXWkpmIOOjuCsiO2zwrksubPmahjUQtuEQNKZS4wRuzboNfy?input=http:%2F%2Fabbaymedia.info">7th June 2018</a>

</td>

</tr>

</tbody>

</table>

Most media sites seem to have been unblocked from April 2018 onwards (most likely in June 2018), following the <a href="https://edition.cnn.com/2018/04/02/africa/ethiopia-new-pm-abiy-ahmed/index.html">swearing in of Ethiopia’s new Prime Minister</a>. The unblocking of oromiamedia.org and ethsat.com, in particular, can potentially be viewed as a political landmark, given that these websites cover news from the Oromia region that has been <a href="https://www.bbc.com/news/world-africa-36940906">protesting heavily</a> over the last years.

It’s worth noting though that while the HTTPS version of oromiamedia.org seems to be <a href="https://explorer.ooni.io/measurement/20180626T102649Z_AS24757_dclIeZaa5e75c3gN7rVZWluzecAEpFAs6DaL3sxR3R48VpOe8u?input=https:%2F%2Fwww.oromiamedia.org%2F">accessible</a> from (at least) 26th June 2018, the HTTP version of the site was <a href="https://explorer.ooni.io/measurement/20180623T151119Z_AS24757_pnkzXHeUDMlWefsKvJ2xIOr3aXCXIQ0uwzypXghMFPbgLMC8wQ?input=http:%2F%2Foromiamedia.org%2F">blocked on 23rd June 2018</a> and hasn’t been tested since. Furthermore, it remains unclear if zehabesha.com has been unblocked, since the site <a href="https://explorer.ooni.io/measurement/20160912T112136Z_AS24757_b8C5V1dP3DlBSVTWBFZ3HEZ4RyzJzyyBEmhx1k5jiVTnITtcIr?input=http:%2F%2Fzehabesha.com%2F">hasn’t been tested since September 2016</a>. OONI Probe mobile app users can test both sites via <a href="https://run.ooni.io/nettest?tn=web_connectivity&ta=%7B%22urls%22%3A%5B%22http%3A%2F%2Fzehabesha.com%2F%22%2C%22http%3A%2F%2Foromiamedia.org%2F%22%5D%7D&mv=1.2.0">OONI Run</a>.

## Instagram

Most popular social networking sites and services seem to be accessible in Ethiopia. Instagram, however, is <a href="https://explorer.ooni.io/measurement/20180625T060311Z_AS24757_eSjxSSELTTMYZhwJKLYYmV8HUJ8IEIiQnboLxGms7K4oOcGPVm?input=https:%2F%2Finstagram.com">blocked</a> on mobile data (connections to https://instagram.com are reset), but <a href="https://explorer.ooni.io/measurement/20180625T034722Z_AS24757_XKdZRcT9FE2VaYZFEINvWwBJOlzgmLLxGRaClVMzFB8yiYALVv?input=https:%2F%2Finstagram.com">accessible</a> over WiFi (according to measurements collected on 25th June 2018).

## Human rights and LGBTQI

Several human rights and LGBTQI site were <a href="/post/ethiopia-report/#human-rights-websites">previously found to be blocked</a> in Ethiopia. Recent measurements suggest that these sites have been unblocked, as illustrated in the following table.


<table style="margin-left:-42.8pt;border-spacing:0;border-collapse:collapse;margin-right:auto">

<tbody>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;background-color:#ffe599;border-left-style:solid;border-bottom-width:1pt;width:207.8pt;border-top-color:#000000;border-bottom-style:solid">

Tested URLs

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;background-color:#ffe599;border-left-style:solid;border-bottom-width:1pt;width:159.8pt;border-top-color:#000000;border-bottom-style:solid">

<b>Last</b> blocked measurement

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;background-color:#ffe599;border-left-style:solid;border-bottom-width:1pt;width:183pt;border-top-color:#000000;border-bottom-style:solid">

<b>First</b> unblocked measurement

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:207.8pt;border-top-color:#000000;border-bottom-style:solid">

http://www.cyberethiopia.com/

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:159.8pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Fwww.cyberethiopia.com%2Fwarka14%2F">12th April 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:183pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fwww.cyberethiopia.com%2Fwarka14%2F">7th June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:207.8pt;border-top-color:#000000;border-bottom-style:solid">

http://www.fepproject.org

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:159.8pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20160912T073614Z_AS24757_X3IkzqOSgCNOKdIDORFtxZecJr5joiFg8RJwj1Nzx4K9NTBik6?input=http:%2F%2Fwww.fepproject.org">12th September 2016</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:183pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20161007T103227Z_AS24757_2L3k891LkzJ6lTGT4TYB4L1sjbaNQq5uvLSAk0vNZ8WIKsz4Jb?input=http:%2F%2Fwww.fepproject.org">7th October 2016</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:207.8pt;border-top-color:#000000;border-bottom-style:solid">

http://www.queernet.org/

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:159.8pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Fwww.queernet.org%2F">12th April 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:183pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fwww.queernet.org%2F">7th June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:207.8pt;border-top-color:#000000;border-bottom-style:solid">

http://www.samesexmarriage.ca/

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:159.8pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180226T130436Z_AS24757_I92qPHDdzidUh6huAbI3iGcLTPae4N7dS9L16h9SFi7AeZczAi?input=http:%2F%2Fwww.samesexmarriage.ca">24th February 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:183pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180625T122826Z_AS24757_csAuWFuX9SkLE1hcCKlFNhQbcfRNWK5ttP0I1IIxAGr9SbbBs8?input=http:%2F%2Fwww.samesexmarriage.ca">25th June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:207.8pt;border-top-color:#000000;border-bottom-style:solid">

http://www.ifge.org/

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:159.8pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Fwww.ifge.org%2F">12th April 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:183pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Fwww.ifge.org%2F">7th June 2018</a>

</td>

</tr>

</tbody>

</table>

## Political opposition and armed groups

Last week, Ethiopian rebel group Ginbot 7 <a href="https://www.bbc.com/news/world-africa-44580761">suspended its armed resistance</a> against the government, as the new Prime Minister’s reforms have reportedly given them hope that a “genuine democracy may be a real possibility”. Recent OONI measurements though suggest that their site was <a href="https://explorer.ooni.io/measurement/20180626T081130Z_AS24757_eJnwpDjxi2jvx0YT0pea8OqBy9ptZm2HeMLGqLF2sEAcivNw56?input=http:%2F%2Fwww.ginbot7.org%2F">still blocked</a> as of 26th June 2018.


<table style="margin-left:-43.5pt;border-spacing:0;border-collapse:collapse;margin-right:auto">

<tbody>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;background-color:#a4c2f4;border-left-style:solid;border-bottom-width:1pt;width:174pt;border-top-color:#000000;border-bottom-style:solid">

Tested URLs

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;background-color:#a4c2f4;border-left-style:solid;border-bottom-width:1pt;width:187.5pt;border-top-color:#000000;border-bottom-style:solid">

<b>Last</b> blocked measurement

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;background-color:#a4c2f4;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

<b>First</b> unblocked measurement

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:174pt;border-top-color:#000000;border-bottom-style:solid">

http://www.ginbot7.org

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:187.5pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180626T081130Z_AS24757_eJnwpDjxi2jvx0YT0pea8OqBy9ptZm2HeMLGqLF2sEAcivNw56?input=http:%2F%2Fwww.ginbot7.org%2F">26th June 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

N/A

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:174pt;border-top-color:#000000;border-bottom-style:solid">

http://www.eprp.com

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:187.5pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20170418T163133Z_AS24757_X5R90nNDscpexxCsw6y93vwO57xbp0MeIA9zU7oQmYyJCyA6mK?input=http:%2F%2Fwww.eprp.com">18th April 2017</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180626T081130Z_AS24757_eJnwpDjxi2jvx0YT0pea8OqBy9ptZm2HeMLGqLF2sEAcivNw56?input=http:%2F%2Fwww.eprp.com%2F">26th June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:174pt;border-top-color:#000000;border-bottom-style:solid">

http://www.eppf.net

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:187.5pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20170418T163133Z_AS24757_X5R90nNDscpexxCsw6y93vwO57xbp0MeIA9zU7oQmYyJCyA6mK?input=http:%2F%2Fwww.eppf.net">18th April 2017</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180626T102649Z_AS24757_dclIeZaa5e75c3gN7rVZWluzecAEpFAs6DaL3sxR3R48VpOe8u?input=http:%2F%2Fwww.eppf.net">26th June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:174pt;border-top-color:#000000;border-bottom-style:solid">

http://www.onlf.org

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:187.5pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180626T081130Z_AS24757_eJnwpDjxi2jvx0YT0pea8OqBy9ptZm2HeMLGqLF2sEAcivNw56?input=http:%2F%2Fwww.onlf.org%2F">26th June 2018</a> (08:52 UTC)

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180626T102649Z_AS24757_dclIeZaa5e75c3gN7rVZWluzecAEpFAs6DaL3sxR3R48VpOe8u?input=http:%2F%2Fwww.onlf.org">26th June 2018</a> (10:41 UTC)

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:174pt;border-top-color:#000000;border-bottom-style:solid">

http://oromoliberationfront.org/

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:187.5pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180412T180619Z_AS24757_N9jB51eOdozBtMYT6aPAaY4y0DMod7nAGSUCJ5a3rgYS4UF0wL?input=http:%2F%2Foromoliberationfront.org%2Fenglish%2F">12th April 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180607T190737Z_AS24757_aVOA3TKk17VjUrffznLi8OwF5JOtkJw69mrXB3iKYSosFJq6wX?input=http:%2F%2Foromoliberationfront.org%2Fenglish%2F">7th June 2018</a>

</td>

</tr>

</tbody>

</table>

Other sites though of armed groups and the political opposition appear to have been unblocked recently. While the precise dates pertaining to the unblocking of most of these sites remain unclear, the site of the Ogaden National Liberation Front (onlf.org) appears to have been unblocked on 26th June 2018. This is suggested by OONI measurements showing that the site was <a href="https://explorer.ooni.io/measurement/20180626T081130Z_AS24757_eJnwpDjxi2jvx0YT0pea8OqBy9ptZm2HeMLGqLF2sEAcivNw56?input=http:%2F%2Fwww.onlf.org%2F">blocked at 08:52 UTC</a>, but <a href="https://explorer.ooni.io/measurement/20180626T102649Z_AS24757_dclIeZaa5e75c3gN7rVZWluzecAEpFAs6DaL3sxR3R48VpOe8u?input=http:%2F%2Fwww.onlf.org">accessible</a> about two hours later.

## Circumvention tools

Confirming the potential unblocking of circumvention tool sites based on <a href="https://explorer.ooni.io/country/ET">OONI measurements</a> is more challenging.

Measurements pertaining to torproject.org show that the site has switched between being accessible and inaccessible in various points in time over the last months. Unlike other measurements (which show connections being reset), the testing of torproject.org presents `generic timeout errors`. This suggests that rather than being blocked, the site may (at times) be inaccessible due to transient network failures. As the measurements pertaining to the testing of torproject.org are non-conclusive, it remains unclear whether the site has been blocked and unblocked in recent months. Most measurements though suggest that torproject.org remains (mostly) inaccessible in Ethiopia.

<table style="margin-left:-30pt;border-spacing:0;border-collapse:collapse;margin-right:auto">

<tbody>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;background-color:#d9d2e9;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

Tested URLs

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;background-color:#d9d2e9;border-left-style:solid;border-bottom-width:1pt;width:159.8pt;border-top-color:#000000;border-bottom-style:solid">

<b>Last</b> blocked measurement

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;background-color:#d9d2e9;border-left-style:solid;border-bottom-width:1pt;width:186pt;border-top-color:#000000;border-bottom-style:solid">

<b>First</b> unblocked measurement

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

https://www.torproject.org

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:159.8pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180622T192757Z_AS24757_rkb3FEigjlMTmrAO6vvUAZr1ZhZ6PfW30zDjq9NRe3Mfo1MdmM?input=https:%2F%2Fwww.torproject.org%2F">22nd June 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:186pt;border-top-color:#000000;border-bottom-style:solid">

N/A

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://www.psiphon.ca

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:159.8pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180224T065645Z_AS24757_kHgSNnt3ZBjGe8Af2JZZ5jEMQ7ro2MtqyrA5CWK8ON5Z2IVXdS?input=http:%2F%2Fwww.psiphon.ca">24th February 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:186pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180626T102649Z_AS24757_dclIeZaa5e75c3gN7rVZWluzecAEpFAs6DaL3sxR3R48VpOe8u?input=http:%2F%2Fwww.psiphon.ca">26th June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

https://www.psiphon.ca

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:159.8pt;border-top-color:#000000;border-bottom-style:solid">

N/A

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:186pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180623T151016Z_AS24757_wi0mIIyqGAgiqK7JzULvAAkJ7recHEOTbXA4EXb2s10COhRDUk?input=https:%2F%2Fwww.psiphon.ca">23rd June 2018</a>

</td>

</tr>

<tr style="height:0pt">

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:189pt;border-top-color:#000000;border-bottom-style:solid">

http://www.ultrasurf.us

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:159.8pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180224T065645Z_AS24757_kHgSNnt3ZBjGe8Af2JZZ5jEMQ7ro2MtqyrA5CWK8ON5Z2IVXdS?input=http:%2F%2Fwww.ultrasurf.us">24th February 2018</a>

</td>

<td colspan="1" rowspan="1" style="border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:186pt;border-top-color:#000000;border-bottom-style:solid">

<a href="https://explorer.ooni.io/measurement/20180623T151016Z_AS24757_wi0mIIyqGAgiqK7JzULvAAkJ7recHEOTbXA4EXb2s10COhRDUk?input=http:%2F%2Fwww.ultrasurf.us">23rd June 2018</a>

</td>

</tr>

</tbody>

</table>

Psiphon and Ultrasurf, on the other hand, appear to be accessible. Recent <a href="https://explorer.ooni.io/country/ET">measurements</a> suggest that their sites have been unblocked over the last week, if not earlier.  

# Reproduce this study

OONI and Access Now carried out this study through the use of <a href="https://github.com/TheTorProject/ooni-probe">free and open source software</a>, <a href="/docs/">open methodologies</a> and <a href="https://api.ooni.io/files/by_country/ET">open data</a>. This means that you can reproduce this study and independently verify our findings.

If you’re interesting in testing the potential unblocking of more sites in Ethiopia, you can do so via the following steps:

1.  <a href="/install/">Install</a> the OONI Probe mobile app (Android, F-Droid, iOS)
2.  Add the sites you want to test to <a href="https://run.ooni.io/">OONI Run</a> and generate a link
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

To run more OONI Probe tests and to schedule daily testing, consider running OONI Probe on <a href="/install/ooniprobe">Linux</a>, <a href="/install/ooniprobe">macOS</a>, or on a <a href="/install/lepidopter/">Raspberry Pi</a>. All network measurement data will be published on <a href="https://explorer.ooni.io/">OONI Explorer</a> and on the <a href="https://api.ooni.io/">OONI API</a>, increasing transparency of internet censorship.
