---
aliases: ["/data-policy"]
---

# OONI Data Policy

**Last modified:** January 26, 2017

**Version:** 1.0.1

This Data Policy discloses and explains what data the [Open Observatory of Network Interference (OONI) project](https://ooni.torproject.org/) ("we", "us",
or "our") collects, processes, stores and publishes relating to users of its
website and its ooniprobe software ("you" or "your").

**WARNING:**

Our ooniprobe software is *not* designed to protect your privacy. You may face
various **[risks](https://ooni.torproject.org/about/risks/)** such as fines,
imprisonment, or other penalties for running ooniprobe. You can avoid some of
these risks by opting not to send us certain types of data when running
ooniprobe. You can find instructions on how to do so in section 2 below.

We reserve all rights to make future changes to this Data Policy at our sole
discretion. 

## 1. Website Visitors

We do *not* collect any information about visitors to our
[website](https://ooni.torproject.org/). We do *not* use analytics, tracking
cookies, or any other tracking technologies on our website.

Our website access logs store only the date (up to 2 weeks), but not the time,
when you requested access to our webpages. Our website does *not* log your IP
addresses.

We will notify you of any future changes to our website visitor policy through
this Data Policy.

## 2. Software Users

### 2.1. Data We Collect

We collect different types of network measurements when you run different types
of tests. You can view the specifications about each ooniprobe test
[here](https://github.com/TheTorProject/ooni-spec), and the details about the
collected network measurements on [OONI Explorer](https://explorer.ooni.torproject.org/world/) or through our
[measurements interface](https://measurements.ooni.torproject.org/).

You can opt out of sending us your measurements by running ooniprobe with the -n
command line option. Alternatively, you can choose *not* to have your
measurements uploaded through the setup settings of OONI's web user interface or
OONI's mobile app.

If you *don't* opt out of sending us your measurements, we will collect the
following types of data when you run ooniprobe:

**2.1.1. Date and time of measurements**

We **always** collect the time and date of measurements when you run ooniprobe.
This data helps us evaluate when network interference has occurred and to
compare such occurrences over time. **You cannot opt-out of sending us this type
of data.**

**2.1.2. Country code**

By default, we automatically transmit your IP address to the [MaxMind GeoIP database](https://www.maxmind.com/en/home), which identifies the country in
which you are located. We then obtain a two-letter country code from this
database and store it along with the rest of your test results. Knowing the
country from which our users are running ooniprobe allows us to locate any
network interference the software identifies to a specific country. Such
information may be useful to researchers, journalists, and advocates who aim to
discover network interference (such as censorship and traffic manipulation).

You can opt out of sending us your country code by [editing the ooniprobe configuration](https://github.com/TheTorProject/ooni-probe#configuring-ooniprobe) file inside of `~/.ooni/ooniprobe.conf`. Alternatively, you can opt
out of sending us this information through the setup settings of OONI's web user
interface or OONI's mobile app.

**2.1.3. Autonomous System Number (ASN)**

By default, we collect your corresponding network Autonomous System Number (ASN)
when you run ooniprobe. Collecting ASNs helps our work by revealing the identity
of network providers that engage in censorship or other forms of network
interference.

You can opt out of sending us your network's ASN by [editing the ooniprobe configuration](https://github.com/TheTorProject/ooni-probe#configuring-ooniprobe) file inside of  `~/.ooni/ooniprobe.conf`. Alternatively, you can opt
out of sending us this information through the setup settings of OONI's web user
interface or OONI's mobile app.

**2.1.4. IP addresses and other information**

We do *not* aim to collect or store your IP addresses. In face, we take measures
to remove them from our database of collected measurements to reduce the risk to
you.

However, we **might unintentionally** collect your IP addresses and other
personally-identifiable information if this data is included in the HTTP headers
or other metadata of measurements. This data might be collected if the websites
ooniprobe is testing employ tracking technologies or contain custom content.

By default, we do *not* collect your IP addresses. You can, however, opt-in to
provide your individual IP address (to enhance the accuracy of information) by
[editing the ooniprobe  configuration](https://github.com/TheTorProject/ooni-probe#configuring-ooniprobe) file inside of `~/.ooni/ooniprobe.conf`.
Alternatively, you can opt-in to send us this information through the setup
settings of OONI's web user interface or OONI's mobile app.

**2.1.5. Network measurements**

We collect different types of network measurements when you run different types
of tests. You can view the specifications about each ooniprobe test
[here](https://github.com/TheTorProject/ooni-spec), and the details about the
collected network measurements on [OONI Explorer](https://explorer.ooni.torproject.org/world/) or through our
[measurements interface](https://measurements.ooni.torproject.org/).

You can opt out of sending us your measurements by running ooniprobe with the -n
command line option. Alternatively, you can choose *not* to have your
measurements uploaded via OONI's web user interface or OONI's mobile app.

### 2.2. Data We Process

We process all the collected network measurements mentioned in 2.1. through our
[data processing pipeline](https://github.com/TheTorProject/ooni-pipeline). We
try to make sense of the data and to find answers to the following questions:

* Which types of ooniprobe tests were run?

* In which countries were those tests run?

* In which networks were those tests run?

* When were those tests run?

* What types of network interference occurred?

* In which countries did network interference occur?

* In which networks did network interference occur?

* When did network interference occur?

* How did network interference occur?

You can opt out of sending us your measurements by running ooniprobe with the -n
command line option. Alternatively, you can choose *not* to have your
measurements uploaded through the setup settings of OONI's web user interface or
OONI's mobile app.

### 2.3. Data We Store

By default, we store ALL of the data that your copy of ooniprobe sends us when
you run a test. This includes information that *might* be personally-identifying,
such as your IP address or other information contained in the HTTP headers.

You can opt out of sending specific types of data to our measurement collector
as described in Section 2.1. You can opt out of sending us any measurements by
running ooniprobe with the -n command line option, or by choosing *not* to have
your measurements uploaded through the setup settings of OONI's web user
interface or OONI's mobile app.

### 2.4. Data We Publish

We publish ALL of the network measurement data that we have collected and stored
to allow third parties to conduct independent studies, verify our findings, and
answer other research questions.

Currently, we publish all measurement data both through our [measurements interface](https://measurements.ooni.torproject.org/)and through an interactive
visualization called [OONI Explorer](https://explorer.ooni.torproject.org/world/).

For questions and comments on this Data Policy, please contact:
**contact@openobservatory.org**.

```
Key ID:
    0CB177B7
Fingerprint:
4C15 DDA9 96C6 C0CF 48BD 3309 6B29 43F0 0CB1 77B7
```