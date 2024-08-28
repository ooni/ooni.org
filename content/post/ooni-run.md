---
title: "OONI Run: Let's fight internet censorship together!"
author: "Maria Xynou"
date: "2017-09-27"
tags: ["internet censorship", "net neutrality"]
categories: ["blog"]
---

![OONI Run](/post/ooni-run/ooni-run.png)

Today we released **[OONI Run](https://run.ooni.org/)**, a website linked to an exciting new OONI Probe mobile app feature that enables you to:

* Engage your friends (and the world) to run censorship measurement tests

* Monitor the blocking of *your* website around the world

OONI Run includes a variety of [OONI Probe software tests](https://github.com/TheTorProject/ooni-probe)designed to:

* Test the [blocking of websites](https://ooni.org/nettest/web-connectivity/)

* Find [middleboxes](https://ooni.org/nettest/http-invalid-request-line/)

* Measure the [speed and performance](https://ooni.org/nettest/ndt/) of networks

* Measure [video streaming performance](https://ooni.org/nettest/dash/)

By choosing the tests that interest you and the sites you want to test, generate a link via [OONI Run](https://run.ooni.org/) and share it. Alternatively, embed the widget code to monitor the accessibility of your site. The global OONI Probe community can then respond!

# Engage your friends

With [OONI Run](https://run.ooni.org/), you can **choose which websites you want to test** for censorship. Simply select “Web Connectivity” and add as many URLs as you like.

![OONI Run: Web Connectivity](/post/ooni-run/web-connectivity.png)

Then click “Generate” to generate a link that you can share with your friends.

![OONI Run: Generating a link](/post/ooni-run/share.png)

If they already have OONI Probe installed, the link will open their mobile app and automatically start testing the sites of your choice! Otherwise, it will encourage them to [install OONI Probe](https://ooni.org/install/) first.

# Engage the world

**OONI Run can help build a global network for rapid response to emergent censorship events.** By tweeting a generated link, you can encourage the world to run the tests (and to test the sites) you’ve chosen.

If you suspect that a site might be censored during political events, add that site to [OONI Run](https://run.ooni.org/), generate a link, and share it with people in that country. If you heard rumors of censorship, engage people in that country to collect data that can serve as evidence.

# Monitor your site

Perhaps your site has been blocked by some governments and you're unsure how the censorship is implemented or whether it’s blocked across all networks. Or perhaps you’re just interested in having data that can serve as evidence that your site was intentionally censored.

You can monitor the accessibility of your site through the following simple steps:

* Select “Web Connectivity” on [OONI Run](https://run.ooni.org/)

* Add your site

* Click “Generate”

* Embed the provided widget code and encourage the global OONI Probe community to test your site!

You can embed a nice widget on your website by including the widget source like this:

```
<script async src="https://cdn.jsdelivr.net/npm/ooni-run/dist/widgets.js"></script>
```

You can then add buttons to your website by adding this element:

```
<a href="https://run.ooni.io/nettest?tn=web_connectivity&ta=%7B%22urls%22%3A%5B%22https%3A%2F%2Fwww.wikipedia.org%22%5D%7D&mv=1.2.0"
  class="ooni-run-button">
Run OONI!
</a>
```

The button will look like this on your website:

{{<ooni-run-button link="https://run.ooni.io/nettest?tn=web_connectivity&ta=%7B%22urls%22%3A%5B%22https%3A%2F%2Fwww.wikipedia.org%22%5D%7D&mv=1.2.0" text="Run OONI!" >}}

Otherwise, if you would like a bigger widget, you can add (and tailor) the following element to your website:

```
<div data-link="https://run.ooni.io/nettest?tn=web_connectivity&ta=%7B%22urls%22%3A%5B%22https%3A%2F%2Fwikipedia.org%22%5D%7D&mv=1.2.0"
     class='ooni-run-banner'>
Test Wikipedia
</div>
```

It can look like this:

{{<ooni-run-banner link="https://run.ooni.io/nettest?tn=web_connectivity&ta=%7B%22urls%22%3A%5B%22https%3A%2F%2Fwikipedia.org%22%5D%7D&mv=1.2.0" text="Test Wikipedia" >}}

Going forward, more [OONI Probe tests](https://ooni.org/nettest/) will be added to [OONI Run](https://run.ooni.io/). Together, we can coordinate on fighting internet censorship around the world.

*Note:* OONI Run is now available on Android and within 24-48 hours (depending
on Apple) it will be available on iOS too.


