---
title: "Let's measure the accessibility of COVID-19 websites around the world"
author: "Maria Xynou"
date: "2020-03-23"
tags: ["ooni", "coronavirus"]
categories: ["blog"]
---

Ensuring a free and open internet during an emergency, like the current
[COVID-19 pandemic](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen),
is more important than ever. However, access to information related to
the coronavirus pandemic has already been censored by certain
governments. [China censored information on the coronavirus](https://citizenlab.ca/2020/03/censored-contagion-how-information-on-the-coronavirus-is-managed-on-chinese-social-media/)
on Chinese social media platforms, while [Venezuela’s state-owned CANTV blocked access to a coronavirus information portal](https://vesinfiltro.com/noticias/bloqueado_portal_coronavirus_AN)
last week.

We therefore invite you to participate in a measurement campaign to
check if COVID-19 sites are accessible in your country (and on the
network you’re using) and to [share relevant measurement data](https://explorer.ooni.org/) with the world.

You can measure the blocking of COVID-19 websites through the following
4 steps:

1) **Install the OONI Probe mobile app** on [Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe)
or [iOS](https://itunes.apple.com/us/app/id1199566366).

![OONI Probe mobile app](/post/covid-19/dashboard.png)

2) Tap on the following [OONI Run](https://run.ooni.io/) button
(which is also available through this [page](https://ooni.org/get-involved/run/)).

{{<oonirunurls text="COVID-19 (25 URLs)">}}
https://www.who.int/emergencies/diseases/novel-coronavirus-2019/
https://coronavirus.jhu.edu/map.html
https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6
https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd
https://www.worldometers.info/coronavirus/
https://www.healthmap.org/covid-19/
https://hgis.uw.edu/virus/
https://nssac.bii.virginia.edu/covid-19/dashboard/
https://app.developer.here.com/coronavirus/
https://apps.crowdtangle.com/public-hub/covid19
https://google.org/crisisresponse/covid19-map
https://www.bing.com/covid
https://covidtracking.com/
https://www.kff.org/global-health-policy/fact-sheet/coronavirus-tracker/
https://storymaps.arcgis.com/stories/4fdc0d03d3a34aa485de1fb0d2650ee0
https://www.projectbaseline.com/study/covid-19/
https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic
https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/world-map.html
http://www.euro.who.int/en/health-topics/health-emergencies/coronavirus-covid-19
https://www.ecdc.europa.eu/en/geographical-distribution-2019-ncov-cases
https://www.caixinglobal.com/2020/coronavirus-live-update/
https://www.nytimes.com/interactive/2020/world/coronavirus-maps.html
https://multimedia.scmp.com/infographics/news/china/article/3047038/wuhan-virus/index.html?src=article-launcher
https://www.nbcnewyork.com/news/national-international/map-watch-the-coronavirus-cases-spread-across-the-world/2303276/
https://nextstrain.org/ncov
{{</oonirunurls>}}

3) **Open the button with your OONI Probe mobile app** (not with a
web browser).

![Testing COVID-19 sites](/post/covid-19/covid-19-testing.jpeg)

4) Tap **Run**

Please ensure that your [VPN is turned-off](https://ooni.org/support/faq/#can-i-run-ooni-probe-over-a-vpn)
when you run OONI Probe tests.

You will be able to see the results immediately inside the OONI Probe
mobile app (**Test Results** section), and they will automatically be
published on [OONI Explorer](https://explorer.ooni.org/) in near
real-time as well.

If you would like to test *different* COVID-19 sites, you can do so by
testing the sites of your choice directly through the [OONI Probe mobile app](https://ooni.org/install/) (tap on the “Choose websites”
button inside the Websites card). To enable others to test those sites
as well, please consider [contributing those sites to the Citizen Lab test lists](https://ooni.org/get-involved/contribute-test-lists) (or
share those URLs with us [via email](https://ooni.org/about/#contact)).

Thank you for contributing measurements during these difficult times. We
hope you [stay safe and healthy](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public).
