---
title: "OONI Probe Android 2.0.0 Incident Report"
date: "2019-02-22T23:00:00Z"
tags: ["incident"]
categories: ["blog"]
---

The first public release of OONI Probe Android 2.0.0 (since 2.0.0-alpha.7) included a very serious bug: we lost measurements and collected measurements that we shouldn’t have. As soon as the problem was identified, we quickly released a fix (OONI Probe Android 2.0.1). All measurements that should not have been uploaded have been deleted and we are working on a new OONI Probe release (OONI Probe Mobile 2.1.0) that will allow you to manually re-upload measurements. No other OONI Probe platforms ([iOS](https://itunes.apple.com/us/app/id1199566366), [macOS](https://ooni.io/install/ooniprobe), [Linux](https://ooni.io/install/ooniprobe), [Lepidopter](https://ooni.io/install/lepidopter/)) were affected.

As part of our [commitment to transparency](https://blog.torproject.org/tor-social-contract), we are publishing this report to share details about the bug, what we did to fix it, and what we are doing to reduce the possibility of similar bugs recurring in the future.

We first discovered the bug after a user [reported](https://github.com/ooni/probe-android/issues/188) to us that they were not seeing the `report_id` inside of the raw data of measurements. Looking at the stats for OONI Probe Android, we noticed that there were significantly fewer submitted measurements from Android users than expected, which made us understand that there was something wrong in how measurements were submitted from Android.

The bug itself was actually pretty simple. We were interpreting the meaning of the setting “Share results” opposite to the intended value. In practice, this meant that Android users who wanted to share their measurements, were not sharing them. But more importantly, it meant that users who didn’t want to share them (because they had opted-out), did.

As soon as we noticed the bug, we swiftly worked on resolving the incident. Specifically, we:

* Released a fix to end users (OONI Probe Android 2.0.1), thereby fixing the bug and ensuring that the correct measurements were uploaded.
* Unpublished measurements from the affected time periods.
* Deleted all measurements from OONI Probe Android 2.0.0 from all of our servers and re-published the cleaned dataset.
* Posted a [tweet](https://twitter.com/OpenObservatory/status/1093587859385155584) and sent out a push notification to all OONI Probe Android 2.0.0 users, asking them to update to the latest version.
* Reached out to several organizations and individuals who may have a mirror of OONI data, requesting that they also delete the affected measurements. If you are mirroring OONI data, please re-synchronize and delete a copy of OONI measurements from the following buckets: [https://gist.github.com/hellais/3889594a525324d4369c330a6c2750b1](https://gist.github.com/hellais/3889594a525324d4369c330a6c2750b1) 
* Stopped accepting any measurement submissions from OONI Probe Android 2.0.0, as a precautionary measure.

For a full timeline of the incident, see this [incident ticket](https://github.com/ooni/sysadmin/issues/281). The reason why we are only disclosing this incident publicly now is because we were still working on ensuring that all the affected data had been deleted and that people who had copies of the data had done the same.

We will soon release another version of OONI Probe (2.1.0) which will allow you to manually upload measurements. This means that if you were an OONI Probe Android 2.0.0 user and you wanted to share your data, you will be able to re-upload your measurements by enabling the **“Manual measurement upload”** feature in the Sharing Settings.

To limit the possibility of such bugs recurring in the future, we are working on improving our development practices. To this end, we are:

* Improving how we do **testing of our apps** (both in terms of unit tests, but also end-to-end integration tests
* Strengthening our **quality assurance and release management workflow**
* Being more thorough and rigorous in how we do **code review** for all our software
* Ensuring that OONI developers follow the software development practices outlined in a [new document that we wrote](/post/ooni-software-development-guidelines) (following the incident)

The OONI team sincerely apologizes to the OONI community for this incident. We would never intentionally harm our users, we value and respect user choice, and [we take seriously the trust our users have placed in us](https://blog.torproject.org/tor-social-contract). We do our best to give you as much control over your data and how you use OONI Probe, but sometimes we make mistakes. This has been a learning experience for us, an opportunity to make improvements to our software development practices and to make our tools more safe and useful to our community.

If you have any questions related to this incident or anything else OONI related, please do not hesitate to reach out to us at: [contact@openobservatory.org](mailto:contact@openobservatory.org).
