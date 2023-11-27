# Risks: Things you should know before running OONI Probe

Translations:

* **Español,** [Riesgos: Lo que debes saber antes de ejecutar OONI Probe](/es/about/risks)
* **العربية,** [Risks: Things you should know before running OONI Probe](/ar/about/risks)
* **فارسی,** [Risks: Things you should know before running OONI Probe](/fa/about/risks)
* **Kiswahili,** [Hatari: Vitu unavyotakiwa kuvijua kabla ya kutumia OONI Probe](/sw/about/risks)
* **Русский,** [Риски: что вы должны знать до запуска OONI Probe](/ru/about/risks)
* **Français,** [Risques: Ce que vous devez savoir avant d'exécuter OONI Probe](/fr/about/risks)
* **မြန်မာ,** [အန္တရာယ်များ OONI Probe ကို အသုံးမပြုမီ ဤအရာများကို သိထားသင့်သည်။](/my/about/risks)

To our knowledge, no OONI Probe user has ever faced consequences as a result of using our software. Therefore, the potential risks described below are theoretical and quite speculative. If you are running OONI Probe from a "high-risk environment", we strongly encourage you to read all of the documentation below.

## Summary of potential risks

* Anyone monitoring your internet activity (e.g. ISP, government, employer) will be able to see that you are running OONI Probe;

* OONI's [Web Connectivity test](https://ooni.org/nettest/web-connectivity/) connects to and downloads data from a broad range of sites, including provocative or objectionable sites (e.g. pornography), which might be illegal in some countries;

* By default, all network measurement data collected by OONI Probe is [published](https://ooni.org/data/) to increase transparency of internet censorship, foster public debate, and support research. However, sending local network information to foreign servers might not be viewed favourably by some governments. While the data published is restricted to what is necessary to identify cases of censorship (and we do our best to not publish IP addresses), motivated ISPs might attempt to identify OONI Probe users through public OONI data.

Therefore the potential risks associated to running OONI Probe depend on:

1. **Your threat model**. A high-profile activist already under a lot of surveillance, for example, might attract more attention when running OONI Probe.

2. **The laws and regulations in the country that you are running OONI Probe from.** Best to consult with local lawyers, and to learn whether that country has a record in prosecuting individuals engaging in similar types of activities.

3. **The types of OONI Probe tests run.** Not all OONI Probe tests carry the same weight in terms of potential risk. OONI's [WhatsApp test](https://ooni.org/nettest/whatsapp/), for example, merely attempts to connect to servers that are already connected by more than a billion people around the world. You can choose which tests to run through the OONI Probe apps.

4. **The types of sites that you test.** You can test the websites of your choice through the "Choose websites" button in the OONI Probe mobile app, or by using the [OONI Run](https://run.ooni.io/) platform. You can also [contribute to test lists](https://ooni.org/get-involved/contribute-test-lists/) and suggest URLs to be added or removed. 

5. **Whether you have OONI Probe data published.** You can opt-out from having your OONI Probe test results published through the OONI Probe app settings.

## Understanding potential risks more comprehensively

OONI's [software tests](https://github.com/ooni/probe) (called
OONI Probe) are designed to measure networks for signs of internet censorship
and traffic manipulation. In some countries, using OONI Probe may
result in criminal prosecution, fines, or even imprisonment. We therefore
strongly urge you to consult with a lawyer licensed to practice in your country
*prior* to downloading, installing and running OONI Probe, and to carefully read
the documentation below.

Users run OONI Probe at their own risk. By installing OONI Probe, users agree to
comply with OONI's software
[license](https://github.com/ooni/license)
and [Data Policy](/about/data-policy). Neither the
[OONI project](https://ooni.org/) nor [The Tor Project](https://www.torproject.org/), can be held liable, jointly or
severally, at law or at equity, to OONI Probe users and other third parties, for
any risks or damages resulting from the use of OONI Probe under any tort,
contract, or other causes of action.

* [Potential Penalties and Sanctions](#potential-penalties-and-sanctions)

* [Risks: Detection of OONI Probe](#risks-detection-of-ooni-probe)

    * [Surveillance](#surveillance)

    * [Tested services](#tested-services)

    * [Physical or remote access to a user's device](#physical-or-remote-access-to-a-users-device)

    * [Publication of measurements](#publication-of-measurements)

* [Risks: OONI Probe tests](#risks-ooni-probe-tests)

    * [Legality of tested websites](#legality-of-tested-websites)

    * [Legality of OONI Probe tests](#legality-of-ooni-probe-tests)

    * [Third-party services](#third-party-services)

* [Seeking Legal advice](#seeking-legal-advice)

**Note:** The risks described below are quite speculative. To our
knowledge, no OONI Probe user has ever faced consequences from the risks
described below. Nonetheless, we strongly encourage you to read the following
information regarding potential risks associated with the use of OONI Probe.

### Potential Penalties and Sanctions

In some countries, any form of active network measurement may be illegal, or
even considered a form of espionage.

Many governments have a lengthy history of subjecting digital rights activists to
various forms of abuse that may make it dangerous for individuals in these
countries to run OONI Probe. The use of OONI Probe may therefore subject users
to severe civil, criminal, or extra-judicial penalties. Such sanctions can
potentially include:

* Imprisonment

* Physical assaults

* Large fines

* Threats

* Placement on government watch lists

* Targeting for surveillance

In view of these threats, we strongly encourage you to consult with a lawyer and
to understand the legal risks prior to using OONI Probe. Potential risks of using
OONI Probe are detailed below.

### Risks: Detection of OONI Probe

Certain users may face severe penalties if these users are detected by third
parties (such as governments) who view OONI Probe as a threat.

The use of OONI Probe may be detected by third parties through the following.

#### Surveillance

Third parties (such as your government, your internet service provider, or your
employer) may be monitoring some or all of your internet activity. This may
allow them to detect the web traffic generated by your use of OONI Probe and to
link it back to you personally.

Many countries employ sophisticated surveillance measures that allow governments
to track individuals' online activities – even if they are using privacy-
preserving services such as Tor, Psiphon, virtual private networks (VPNs), or
proxy servers. In such countries, governments or third parties may be able to
identify you as an OONI Probe user regardless of what measures you take to
protect your online privacy.

#### Tested services

The services OONI Probe connects to will be able to see your IP address and may be
able to detect that you are using OONI Probe. You can view which services OONI Probe tests
[here](https://github.com/citizenlab/test-lists/tree/master/lists).

#### Physical or remote access to a user's device

As with any other software, the usage of OONI Probe can leave traces. As such,
anyone with physical or remote access to your computer may be able to see
that you have downloaded, installed or run OONI Probe.

#### Publication of measurements

By default, all measurements generated through OONI Probe are sent to OONI's
measurement collector and automatically published through:

* [OONI Explorer](https://explorer.ooni.org/)

* [OONI API](https://api.ooni.io/)

Consequently, the public - including third parties who view the usage of
OONI Probe as a threat - will be able to see all user measurements, unless users
**opt out** via the OONI Probe app settings.

Published data will include your approximate location, the network (ASN) you are
connecting from, and the time when you ran OONI Probe. Other identifying
information, such as your IP address, is *not* deliberately collected, but may
be included in HTTP headers or other metadata. The full page content downloaded
by OONI Probe may include such information if, for example, a website includes
tracking codes or custom content based on your network location. Identifying
information could potentially aid third parties in detecting you as an OONI Probe
user.

### Risks: OONI Probe tests

OONI has developed multiple free software tests, each one of which is designed
to perform a different function. Therefore, these tests potentially entail different
types of risks to the user.

Generally, OONI Probe is designed to:

* Measure whether websites are blocked;

* Measure whether instant messaging (IM) apps (such as WhatsApp or Facebook Messenger) are blocked;

* Detect the presence of systems ("middleboxes") which may be responsible for censorship,
  surveillance, and traffic manipulation;

* Examine whether censorship circumvention tools, such as [Tor](https://www.torproject.org/) and [Psiphon](https://psiphon.ca/), are blocked.

We urge you to review the
**[specifications](https://github.com/ooni/spec)** and **[descriptions](https://ooni.org/nettest/)** for each OONI Probe test carefully, prior to running them.

#### Legality of tested websites

When running OONI's [Web Connectivity test](https://ooni.org/nettest/web-connectivity/) you will connect to and download data from various websites
which are included in the following two lists:

* **[Country-specific test list](https://github.com/citizenlab/test-lists/tree/master/lists)** 
  (search for your country's test list based on its country code)

* **[Global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)** 
  (including a list of globally accessed websites)

Many websites included in the above lists are controversial and may include
pornography or hate speech. This content may be illegal to access in your
country. In some countries, accessing illegal content has severe consequences,
such as imprisonment. We therefore recommend that you carefully examine whether
you are willing to take the risk of accessing and downloading data from such
websites through OONI Probe tests.

If you are uncertain of the potential implications of connecting to and
downloading data from the websites listed in the above lists, you can choose
which websites to test through the "Choose websites" button in the OONI Probe mobile app, or by using the [OONI Run](https://run.ooni.io/) platform.

#### Legality of OONI Probe tests

Some network tests performed by OONI Probe may violate your country's computer
misuse laws or terms of service of your internet provider.

Specifically, the operators of network components affected by OONI Probe tests
may view these tests as attacks. OONI's **[HTTP-invalid-request-line](https://ooni.org/nettest/http-invalid-request-line/)** test,
for example, *might* trigger suspicion when sending out-of-spec messages to an
echo service and could be viewed as a form of "hacking". If network components
affected by this test view these out-of-spec messages as attacks, you may face
severe consequences, such as prosecution under computer misuse laws.

#### Third-party services

Our [Network Diagnostic Test (NDT)](https://ooni.org/nettest/ndt/) is
a general-purpose performance test conducted against third-party servers
provided by [Measurement Lab (M-Lab)](https://www.measurementlab.net/). M-Lab's
NDT services require the retention and disclosure of IP addresses for research
purposes. For more about M-Lab's data governance, see its [privacy statement](https://www.measurementlab.net/privacy/).

### Seeking legal advice

The legal risks of downloading, installing and running OONI Probe can vary from
country to country, which is why we advise you to consult with lawyers who are
licensed to practice in your country.

Some questions you may want to ask your lawyers relating to the use of OONI Probe
include:

* Does my country prohibit me from using:

  * **network measurement software**?

  * **censorship detection software**?

  * **censorship circumvention software**?

* Is it illegal for me to access certain websites?

* Are there laws in my country that require Internet Service Providers (ISPs) to
 track my online activity?

* Has anyone in my country ever been criminalized based on their internet
activity? (This does not necessarily need to be specific to network
measurements)

Note, this is not an exhaustive list of questions to ask your lawyers.

Additionally, while many countries do not have laws specifically prohibiting the
use of network measurement software, the use of OONI Probe may still be
criminalized in certain countries under other, broader laws. For example, using
OONI Probe may be viewed as illegal or anti-government activity. OONI Probe users
may also face the risk of being criminalized on the grounds of **national security**
if the data obtained and published by running OONI Probe is viewed as
"jeopardizing" the country's external or internal security. You may want to
consult with a lawyer about these matters as well.

In addition to consulting with a lawyer, you can also reach out to us with
specific inquiries at **contact@openobservatory.org**. Please note that we are
*not* lawyers, and any information we give you does not constitute legal advice.
Additionally, your communication with us is not protected by any legal privilege
so law enforcement may subpoena and obtain any information you give us. However,
we may be able to put you in touch with lawyers who are capable of addressing
your questions and/or concerns.

Some relevant resources include:

* [Tor Legal FAQ](https://www.eff.org/torchallenge/faq.html)

* [EFF Know Your Rights](https://www.eff.org/issues/know-your-rights)

**Note:** These resources do *not* constitute legal advice and may be out of date.
Please confirm you are reading the latest version before relying on any advice.

Again, users run OONI Probe at their own risk. By installing OONI Probe, users agree to
comply with OONI's software
[license](https://github.com/ooni/license)
and [Data Policy](/about/data-policy). Neither the
[OONI project](https://ooni.org/) nor [The Tor Project](https://www.torproject.org/), can be held liable, jointly or
severally, at law or at equity, to OONI Probe users and other third parties, for
any risks or damages resulting from the use of OONI Probe under any tort,
contract, or other causes of action.
