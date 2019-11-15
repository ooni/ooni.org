---
aliases: ["/data-policy"]
---

# OONI Data Policy

**Last modified:** April 23, 2018

**Version:** 1.2.0

This Data Policy discloses and explains what data the [Open Observatory of Network Interference (OONI) project](https://ooni.org/) ("we", "us",
or "our") collects, processes, stores and publishes relating to users of its
website and its ooniprobe software ("you" or "your").

**WARNING:**

Our ooniprobe software is *not* designed to protect your privacy. You may face
various **[risks](https://ooni.org/about/risks/)** such as fines,
imprisonment, or other penalties for running ooniprobe. You can avoid some of
these risks by opting not to send us certain types of data when running
ooniprobe. You can find instructions on how to do so in section 2 below.

We reserve all rights to make future changes to this Data Policy at our sole
discretion. 

## 1. Website Visitors

We collect some information about visitors to our [website](https://ooni.org/) using
the free and open source tool [piwik](https://piwik.org). We do not record the
full IP address of users (which is "anonymised" to the first 3 octets, ex.
123.45.67.0).

Our analytics site is also respectful of ["Do not
track"](https://en.wikipedia.org/wiki/Do_Not_Track) allowing you to opt out of
analytics all-together.

We will notify you of any future changes to our website visitor policy through
this Data Policy.

## 2. Software Users

### 2.1. Data We Collect

We collect different types of network measurements when you run different types
of tests. You can view the specifications about each ooniprobe test
[here](https://github.com/TheTorProject/ooni-spec), and the details about the
collected network measurements on [OONI Explorer](https://explorer.ooni.org/world/) or through our
[OONI API](https://api.ooni.io/).

You can opt out of sending us your measurements by running ooniprobe with the `-n`
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

**2.1.3. Network measurements**

We collect different types of network measurements when you run different types
of tests. You can view the specifications about each ooniprobe test
[here](https://github.com/TheTorProject/ooni-spec), and the details about the
collected network measurements on [OONI Explorer](https://explorer.ooni.org/world/) or through our
[OONI API](https://api.ooni.io/).

You can opt out of sending us your measurements by running ooniprobe with the `-n`
command line option. Alternatively, you can choose *not* to have your
measurements uploaded via OONI's web user interface or OONI's mobile app.

**2.1.4. Autonomous System Number (ASN)**

By default, we collect your corresponding network Autonomous System Number (ASN)
when you run ooniprobe. Collecting ASNs helps our work by revealing the identity
of network providers that engage in censorship or other forms of network
interference.

You can opt out of sending us your network's ASN by [editing the ooniprobe configuration](https://github.com/TheTorProject/ooni-probe#configuring-ooniprobe) file inside of  `~/.ooni/ooniprobe.conf`. Alternatively, you can opt
out of sending us this information through the setup settings of OONI's web user
interface or OONI's mobile app.

**2.1.5. IP addresses and other information**

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

You can opt out of sending us your measurements by running ooniprobe with the `-n`
command line option. Alternatively, you can choose *not* to have your
measurements uploaded through the setup settings of OONI's web user interface or
OONI's mobile app.

### 2.3. Data We Store

By default, we store ALL of the data that your copy of ooniprobe sends us when
you run a test. This includes information that *might* be personally-identifying,
such as your IP address or other information contained in the HTTP headers.

You can opt out of sending specific types of data to our measurement collector
as described in Section 2.1. You can opt out of sending us any measurements by
running ooniprobe with the `-n` command line option, or by choosing *not* to have
your measurements uploaded through the setup settings of OONI's web user
interface or OONI's mobile app.

### 2.4. Data We Publish

We publish ALL of the network measurement data that we have collected and stored
to allow third parties to conduct independent studies, verify our findings, and
answer other research questions.

Currently, we publish all measurement data both through our [OONI API](https://api.ooni.io/) and through an interactive
visualization called [OONI Explorer](https://explorer.ooni.org/world/).

For more information on the license under which the data is released, see
[github.com/ooni/license/data](https://github.com/ooni/license/tree/master/data).

### 2.5. Third-party services

Our [Network Diagnostic Test (NDT)](https://ooni.org/nettest/ndt/) is
a general-purpose performance test conducted against third-party servers
provided by [Measurement Lab (M-Lab)](https://www.measurementlab.net/). M-Lab's
NDT services require the retention and disclosure of IP addresses for research
purposes. For more about M-Lab's data governance, see its [privacy statement](https://www.measurementlab.net/privacy/).

For questions and comments on this Data Policy, please contact:
**contact@openobservatory.org**.

```
Key ID:
    6B2943F00CB177B7
Fingerprint:
4C15 DDA9 96C6 C0CF 48BD 3309 6B29 43F0 0CB1 77B7
```
