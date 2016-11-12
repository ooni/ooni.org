# Frequently Asked Questions 

Below we include some questions that we are quite frequently asked. Hope
this helps!

* [*OONI*](#ooni)

    * [*1. What does OONI's software do?*](#what-does-oonis-software-do)
  
    * [*2. Who can run ooniprobe?*](#who-can-run-ooniprobe)
  
    * [*3. How can I run ooniprobe?*](#how-can-i-run-ooniprobe)
  
    * [*4. What does the default set of ooniprobe tests include?*](#what-does-the-default-set-of-ooniprobe-tests-include)
  
    * [*5. How can I choose which ooniprobe tests to run from the terminal?*](#how-can-i-choose-which-ooniprobe-tests-to-run-from-the-terminal)
  
    * [*6. What are the risks of running ooniprobe?*](#what-are-the-risks-of-running-ooniprobe)
  
    * [*7. Can OONI protect my privacy?*](#can-ooni-protect-my-privacy)
  
    * [*8. What types of data does OONI collect?*](#what-types-of-data-does-ooni-collect)
  
    * [*9. Once ooniprobe has run, should I send the results to you?*](#once-ooniprobe-has-run-should-i-send-the-results-to-you)
  
    * [*10. How can I opt-out from sending OONI specific types of data?*](#how-can-i-opt-out-from-sending-ooni-specific-types-of-data)
  
    * [*11. Where are the measurements published?*](#where-are-the-measurements-published)
  
    * [*12. How can I opt-out from having my measurements published by default?*](#how-can-i-opt-out-from-having-my-measurements-published-by-default)
  
    * [*13. Why doesn't my country have any measurements on OONI Explorer?*](#why-doesnt-my-country-have-any-measurements-on-ooni-explorer)
  
* [*Lepidopter: OONI's Raspberry Pi distribution*](#lepidopter-oonis-raspberry-pi-distribution)

    * [*1. Running the software seems too technical/complicated. How else can I contribute to measurements?*](#running-the- software-seems-too-technical-complicated-how-else-can-i-contribute-to-measurements)
  
    * [*2. How often will ooniprobe run tests through my Raspberry Pi?*](#how-often-will-ooniprobe-run-tests-through-my- raspberry-pi)
  
    * [*3. How are the measurements collected from the tests run via my Raspberry Pi?*](#how-are-the-measurements-collected- from-the-tests-run-via-my-raspberry-pi)
  
    * [*4. How can I view the results of the tests run via my Raspberry Pi?*](#how-can-i-view-the-results-of-the-tests-run-via-my-raspberry-pi)
  
    * [*5. How much time does it take for my measurements to get published on OONI Explorer?*](#how-much-time-does-it-take-for-my-measurements-to-get-published-on-ooni-explorer)
  
    * [*6. How can I update ooniprobe on my Raspberry Pi?*](#how-can-i-update-ooniprobe-on-my-raspberry-pi)
  
    * [*7. What are the risks of running ooniprobe via a Raspberry Pi?*](#what-are-the-risks-of-running-ooniprobe-via-a- raspberry-pi)

* [*Testing URLs for censorship*](#testing-urls-for-censorship)

    * [*1. What are test lists?*](#what-are-test-lists)
    
    * [*2. What types of test lists does OONI examine?*](#what-types-of-test-lists-does-ooni-examine)
    
    * [*3. Which list of URLs will I test if I run ooniprobe?*](#which-list-of-urls-will-i-test-if-i-run-ooniprobe)
    
    * [*4. How can I choose which URLs to test for censorship?*](#how-can-i-choose-which-urls-to-test-for-censorship)
    
    * [*5. How can I contribute to test lists?*](#how-can-i-contribute-to-test-lists)
    
    * [*6. I'm not a github user, but I'd still like to submit URLs for testing. How can I do so?*](#im-not-a-github-user- but-id-still-like-to-submit-urls-for-testing-how-can-i-do-so)

## OONI

### 1. What does OONI's software do?

OONI's software tests (called ooniprobe) are designed to:

* Detect the blocking of websites

* Detect the blocking of instant messaging apps

* Detect the presence of systems which could potentially be responsible for
censorship, surveillance and traffic manipulation

* Examine the reachability of Tor, proxies, VPNs, and sensitive domains

OONI has many software tests, each of which has different functions. You can
learn more about what each test is designed to do
[here](https://ooni.torproject.org/test/), and you can review the code
[here](https://github.com/TheTorProject/ooni-spec).

### 2. Who can run ooniprobe?

Linux and Mac OS X users can run ooniprobe. 

If you're a Windows user interested in running ooniprobe, please consider
running our ooniprobe distribution for Raspberry Pis. More information about this
can be found [here](https://ooni.torproject.org/install/lepidopter/). Alternatively, you can run ooniprobe via a virtual machine. 

### 3. How can I run ooniprobe?

You can run ooniprobe from one of the following:

* Terminal

* Web user interface

* Raspberry Pi

You can learn how to run ooniprobe through our [installation
guide](https://ooni.torproject.org/install/ooniprobe/).

### 4. What does the default set of ooniprobe tests include?

By running ooniprobe from the terminal, you will by default run the following tests:

* [Web connectivity](https://ooni.torproject.org/nettest/web-connectivity/):
Designed to examine whether and how websites are blocked.

* [HTTP invalid request line](https://ooni.torproject.org/nettest/http-invalid-request-line/): Designed to examine whether systems which could potentially be responsible for censorship, surveillance and traffic manipulation are present in tested networks.

* [HTTP header field manipulation](https://ooni.torproject.org/nettest/http-header-field-manipulation/): Similarly to the HTTP invalid request line test, it's designed to detect the presence of systems in tested networks.

* [Vanilla Tor](https://ooni.torproject.org/nettest/vanilla-tor/): Designed to examine the reachability of the Tor network in tested networks.

If you run ooniprobe from a web user interface, you can choose each test you run. 

### 5. How can I choose which tests to run from the terminal?

If you don’t want to run OONI's default tests or if you would prefer to run
entirely different OONI tests, you can do so by typing `ooniprobe -s` in your
terminal to view which commands to run for each test. This will present you with
the following that can be run for each test:

* **Web_connectivity:** `ooniprobe blocking/web_connectivity`

* **HTTP_invalid-request-line:** `ooniprobe manipulation/http_invalid_request_line`

* **TCP_connect:** `ooniprobe blocking/tcp_connect`

* **Traceroute:** `ooniprobe manipulation/traceroute`

* **DNS_consistency:** `ooniprobe blocking/dns_consistency`

* **Bridge_reachability:** `ooniprobe blocking/bridge_reachability`

* **HTTP_header_field_manipulation:** `ooniprobe manipulation/http_header_field_manipulation`

* **Meek_fronted_requests:** `ooniprobe blocking/meek_fronted_requests`

* **HTTP_requests:** `ooniprobe blocking/http_requests`

* **Captive_portal:** `ooniprobe manipulation/captiveportal`

* **DNS_spoof:** `ooniprobe manipulation/dns_spoof`

* **OpenVPN:** `ooniprobe third_party/openvpn`

* **HTTP_host:** `ooniprobe manipulation/http_host`

* **Lantern:** `ooniprobe third_party/lantern`

* **Psiphon:** `ooniprobe third_party/psiphon`

**Note:** Third party applications (such as the OpenVPN, Lantern and Psiphon
tests) require the installation of external applications to run properly. For
example, to run the Lantern test, installing the Lantern software is a
prerequisite.

### 6. What are the risks of running ooniprobe?

Various legal and/or extra-legal risks might potentially emerge as a result of
running ooniprobe. Such risks depend on many factors, such as which tests you
run, which URLs you test for censorship and the legal frameworks of the country
you are running ooniprobe from. In any case, it's important to know that anyone
monitoring your internet activity (such as your local ISP, government or
employer) will be able to see that you are running ooniprobe. We therefore
encourage you to seek legal advice prior to running ooniprobe.

Learn more about potential risks [here](https://ooni.torproject.org/about/risks/).

### 7. Can OONI protect my privacy?

OONI's software is *not* designed to protect your privacy, as anyone monitoring
your internet activity (such as you local ISP, government or employer) will be
able to see that you are running ooniprobe. OONI though does *care* about the
right to privacy, which is why IP addresses are removed before
publishing data.

### 8. What types of data does OONI collect?

If you run ooniprobe, OONI will by default collect the following types of data:

* Country code

* Autonomous System Number (ASN)

* Date and time of measurements

* IP addresses (though OONI makes efforts to remove such data prior to
publishing measurements)

* Network measurements (you can view the specifics by reviewing each of the
[tests](https://github.com/TheTorProject/ooni-spec/tree/master/test-specs))

Learn more about the above through [OONI's Data
Policy](https://ooni.torproject.org/about/data-policy/).

### 9. Once ooniprobe has run, should I send the results to you?

No need to. ooniprobe is designed to automatically send the measurements to
OONI's measurement collector by default.

### 10. How can I opt-out from sending OONI specific types of data?

You can opt-out from from sending OONI specific types of data by editing the
[ooniprobe configuration file](https://github.com/TheTorProject/ooni-probe#configuring-ooniprobe) inside of `~/.ooni/ooniprobe.conf`.

### 11. Where are the measurements published?

Once OONI receives measurements, it automatically processes them and publishes
them on [OONI Explorer](https://explorer.ooni.torproject.org/world/): a global
data map which provides an interface to explore the measurements.

OONI also publishes measurements in json files **[here](https://measurements.ooni.torproject.org/)**.

### 12. How can I opt-out from having my measurements published by default?

You can opt-out from from sending OONI any data at all, by running ooniprobe
with the `-n` command line option.

This option is sometimes chosen by users who prefer to not have their
measurements published, due to potential risks that could emerge as a result of
such publication.

### 13. Why doesn't my country have any measurements on OONI Explorer?

If your country doesn't have any measurements on OONI Explorer, that's probably
because ooniprobe hasn't been run there yet.

You can learn how to run ooniprobe [here](https://ooni.torproject.org/install/ooniprobe/).

## Lepidopter: OONI's Raspberry Pi distribution

### 1. Running the software seems too technical/complicated. How else can I contribute to measurements?

If you're a Windows user or generally find running ooniprobe from the command
line too complicated, you can try out **Lepidopter:** an ooniprobe
distribution for Raspberry Pis.

A Raspberry Pi is a small single-board computer. You can run ooniprobe from a
Raspberry Pi through the following steps:

1. Copy the ooniprobe distribution (Lepidopter) onto an SD card

2. Insert the SD card into your Raspberry Pi

3. Plug your Raspberry Pi to power

4. Connect your Raspberry Pi to the internet (via an Ethernet cable)

Learn how to copy the ooniprobe distribution onto an SD card through the
guide [here](https://ooni.torproject.org/install/lepidopter/).

### 2. How often will ooniprobe run tests through my Raspberry Pi?

The ooniprobe distribution for Raspberry Pis is configured to run tests once a
day, every day.

### 3. How are the measurements collected from the tests run via my Raspberry Pi?

The ooniprobe distribution for Raspberry Pis is configured to automatically send
all measurements to OONI by default.

### 4. How can I view the results of the tests run via my Raspberry Pi?

You can view all measurements - including the ones collected via your Raspberry
Pi ooniprobe distribution - through **[OONI
Explorer](https://explorer.ooni.torproject.org/world/)**.

### 5. How much time does it take for my measurements to get published on OONI Explorer?

Measurements are published on OONI Explorer around 24 hours after each set of
tests are run.

### 6. How can I update ooniprobe on my Raspberry Pi?

The ooniprobe distribution for Raspberry Pis is configured to automatically
update to the latest ooniprobe version.

### 7. What are the risks of running ooniprobe via a Raspberry Pi?

Various legal and/or extra-legal risks might potentially emerge as a result of
running ooniprobe. Such risks depend on many factors, such as which tests you
run, which URLs you test for censorship and the legal frameworks of the country
you are running ooniprobe from. In any case, it's important to know that anyone
monitoring your internet activity (such as your local ISP, government or
employer) will be able to see that ooniprobe is run from your network.

The advantage of running ooniprobe from a Raspberry Pi, rather than from your
personal laptop, is that this activity will *not* be linked to your personal IP
address.

We encourage you to seek legal advice prior to running ooniprobe. Please learn
more about potential risks [here](https://ooni.torproject.org/about/risks/).

## Testing URLs for censorship

### 1. What are test lists?

OONI tests specific websites to see if they are blocked, and such websites are
included in lists. These lists are called "test lists".

### 2. What types of test lists does OONI examine?

ooniprobe examines two types of test lists:

* [Global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)

* [Country-specific test lists](https://github.com/citizenlab/test-lists/tree/master/lists)

The global list includes a wide range of internationally relevant websites (most
of which are in English), while each country-specific test list includes
websites that are relevant and commonly accessed within that country (many of
which are in local languages).

The URLs included in these lists fall under **[30
categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-proposed-category_codes.csv)**, ranging from news media, file sharing and
culture, to provocative or objectionable categories, like pornography, political
criticism and hate speech.

When running ooniprobe, you will connect to and download data from the websites
included in the global test list and in the test list which is specific to the
country that you are running ooniprobe from. We therefore encourage you to
review all of the URLs included in these lists carefully, prior to running
ooniprobe, as connecting to some of these websites might be legally questionable
(or illegal) in some jurisdictions around the world.

### 3. Which list of URLs will I test if I run ooniprobe?

By default, when you run ooniprobe you will test all of the websites included in
the **[global list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)**, regardless of which country you are running ooniprobe from.

If a **[country-specific test list](https://github.com/citizenlab/test-lists/tree/master/lists)** also exists for the country that you are running
ooniprobe from, the software will by default test all of the websites included
in that country's test list as well (in addition to those included in the global
list).

### 4. How can I choose which URLs to test for censorship?

If you are uncertain of the potential implications of connecting to and
downloading data from the websites listed in the test lists, you can pass your
own test list with the following type of command line option:

`ooniprobe <test-name> -f <your-test-list>`

### 5. How can I contribute to test lists?

You can find information on how to contribute to test lists and submit URLs for
testing [here](https://ooni.torproject.org/get-involved/contribute-test-lists/).

### 6. I'm not a github user, but I'd still like to submit URLs for testing. How can I do so?

If you’re not a github user, please send us your csv file by dropping us an
email at **contact@openobservatory.org** (PGP Key Fingerprint: 4C15 DDA9 96C6
C0CF 48BD 3309 6B29 43F0 0CB1 77B7).
