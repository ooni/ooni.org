---
title: "ooniprobe: Installation guide"
enabletoc: true
---

The **[Open Observatory of Network Interference
(OONI)](https://ooni.torproject.org)** is a *free software* project under the [Tor
Project](https://torproject.org/) which aims to detect internet censorship,
traffic manipulation and signs of surveillance around the world through the
collection and processing of network measurements. Since late 2012, OONI has
collected millions of network measurements across more than 90 countries around
the world, shedding light on multiple cases of network interference.

ooniprobe is a program that users can run to probe their network and to collect
data for the OONI project. Are you interested in testing your network for
censorship and traffic manipulation? Do you want to collect data to share with
others, so that you and others can better understand your network? If so, please
read this document to learn how to install and run ooniprobe.

## Risks of running ooniprobe

**WARNING:** Running ooniprobe might be against the terms of service of your ISP
or legally questionable in your country. By running ooniprobe you will connect
to web services which might be banned, and use web censorship circumvention
methods such as Tor. The OONI project will publish data submitted by probes,
possibly including your IP address or other identifying information. In
addition, your use of ooniprobe will be clear to anybody who has access to
your computer, and to anybody who can monitor your internet connection (such
as your employer, ISP or government). Please read our relevant
**[documentation](https://ooni.torproject.org/about/risks)** to learn more about potential risks.

## Installing ooniprobe

 The desktop version of ooniprobe is currently designed for **Linux** and **Mac OS X** systems.

 To install ooniprobe follow the steps below:

### Mac OS X

**Step 1.** Install **[homebrew](http://brew.sh)**.

**Step 2.** Type the following in your terminal:

```
brew install ooniprobe
```
If you would like to contribute measurements to OONI daily you can also add this to your crontab:

```
@daily ooniprobe $THE_OONI_COMMAND
```
Run this command to automatically update your crontab:

```
(crontab -l 2>/dev/null; echo "@daily ooniprobe $THE_OONI_COMMAND") | crontab -
```


### Linux: Debian

**On Debian testing and unstable:**

**Step 1.** Type the following in your terminal:

```
sudo apt-get install ooniprobe
```

**On Debian stable (jessie):**

**Step 1.** Configure debian backports by typing the following in your terminal:

```
echo 'deb http://ftp.debian.org/debian jessie-backports main' | sudo tee -a /etc/apt/sources.list
sudo apt-get update
```

**Step 2.** Type the following in your terminal:

```
sudo apt-get install ooniprobe
```

### Linux: Ubuntu

**On Ubuntu 16.04 (xenial):**

**Step 1.** Configure the torproject repository by typing the following in your terminal:

```
echo 'deb http://deb.torproject.org/torproject.org xenial main' | sudo tee -a /etc/apt/sources.list
sudo apt-get update
```

**Step 2.** Type the following in your terminal:

```
sudo apt-get install ooniprobe
```

**On Ubuntu 15.10 (wily):**

**Step 1.** Configure the torproject repository by typing the following in your terminal:

```
echo 'deb http://deb.torproject.org/torproject.org wily main' | sudo tee -a /etc/apt/sources.list
sudo apt-get update
```

**Step 2.** Type the following in your terminal:

```
sudo apt-get install ooniprobe
```

**On Ubuntu 14.04 (trusty):**


**Step 1.** Configure the torproject repository by typing the following in your terminal:

```
echo 'deb http://deb.torproject.org/torproject.org trusty main' | sudo tee -a /etc/apt/sources.list
sudo apt-get update
```

**Step 2.** Type the following in your terminal:

```
sudo apt-get install ooniprobe
```

### Unsupported UNIX (with pip)

On other unix systems ensure that you have installed the following dependencies:

* build-essential

* python (>=2.7)

* python-dev

* pip

* libgeoip-dev

* libdumbnet-dev

* libpcap-dev

* libssl-dev

* libffi-dev

* tor (>=0.2.5.1 to run all the tor related tests)

* virtualenv

Then you can install ooniprobe inside a virtualenvironment with pip by typing
the following in your terminal:

```
virtualenv env/
source env/bin/activate
```

To install the stable version:

```
pip install ooniprobe
```

To install from master:

```
pip install https://github.com/TheTorProject/ooni-probe/archive/master.zip
``` 
If you're using the Debian package, you will be asked when installing
whether you would like to run ooniprobe daily. On other platforms, if you would
like to contribute measurements to OONI daily you can also add this to your
crontab:

```
@daily ooniprobe $THE_OONI_COMMAND
```
Run this command to automatically update your crontab:

```
(crontab -l 2>/dev/null; echo "@daily ooniprobe $THE_OONI_COMMAND") | crontab -
```

## Running ooniprobe

You can run ooniprobe through the following steps:

**Step 1.** Type `ooniprobe` in your terminal to view all of your options.

**Step 2.** Type `oonideckgen` in your terminal. This will generate an OONI deck
that includes a set of tests and a global list of URLs, as well as a country-
specific list of URLs based on your IP address.

**Step 3.** Type `ooniprobe -i /home/user/deck/default-user.deck` in your
terminal, where "user" is your system's username.

Now ooniprobe should be running on your computer. 

**What ooniprobe runs and tests by default**

If you follow the steps above, then it will *by default* do the following:

1. Run the **[web_connectivity test](https://ooni.torproject.org/nettest/web-connectivity/)** which will test the following lists of websites for censorship:

   * **[Global list of websites](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)**

   * **[Country-specific list of websites](https://github.com/citizenlab/test-lists/tree/master/lists)** (if it exists for the country that you are running ooniprobe from)

2. Run the **[http-invalid-request-line test](https://ooni.torproject.org/nettest/http-invalid-request-line/)** to
examine whether a proxy technology (which could potentially be used for the
purpose of censorship and surveillance) is present in the network you are
testing.

3. Run the **[http-header-field-manipulation test](https://ooni.torproject.org/nettest/http-header-field-manipulation/)** to
examine whether a proxy technology (which could potentially be used for the
purpose of censorship and surveillance) is present in the network you are
testing.

4. Send the measurements to OONI's measurement collector.

5. Publish the measurements (once they have been processed by OONI) on **[OONI
Explorer](https://explorer.ooni.torproject.org/world/)**.

## Opt-out

If you don't feel comfortable with the above, you have the following choices:

1. **Specify which test(s) you want to run:** You can do this by typing
`ooniprobe -s` in your terminal to view the different commands for each test.

2. **Specify which URLs you want to test:** You can do this by creating your own
list of URLs that you want to test, and by subsequently passing that list with
the `ooniprobe -f` command line option. For example: `ooniprobe
blocking/web_connectivity -f mylist.txt`.

3. Opt-out from sending OONI your (a) country code and/or (b) Autonomous System
Number (ASN) by **[editing the ooniprobe configuration
file](https://github.com/TheTorProject/ooni-probe#configuring-ooniprobe)**
inside of `~/.ooni/ooniprobe.conf`. This option though is *not* recommended, as
we would not be able to attribute measurements to a specific country or network.

4. Opt-out from sending OONI any measurements at all (which will prevent them
from being published), by running ooniprobe with the `-n` option.

## Choosing which OONI tests to run

ooniprobe is designed to run the following tests by default:

* **[Web-Connectivity](https://ooni.torproject.org/nettest/web-connectivity/)**

* **[HTTP-invalid-request-line](https://ooni.torproject.org/nettest/http-invalid-request-line/)**

* **[HTTP-header-field-manipulation](https://ooni.torproject.org/nettest/http-header-field-manipulation/)**

If you don't want to run all of these tests or if you would prefer to run
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

## Advanced users

### Running ooniprobe from a virtual machine

You can run ooniprobe from a virtual machine through the following steps:

**Step 1.** Install **[Virtualbox](https://www.virtualbox.org/wiki/Downloads)** (which is a prerequisite of Vagrant).

**Step 2.** Install **[Vagrant](https://www.vagrantup.com/downloads.html)**. 

**Step 3.** Depending on your operating system, do the following:

**Mac OS X**

Install **[homebrew](http://brew.sh/)**:

```
brew install git
```

**Debian/Ubuntu**

```
sudo apt-get install git
```

**Step 4.** Run the following from your terminal:

```
git clone https://github.com/TheTorProject/ooni-probe.git
git clone https://github.com/TheTorProject/ooni-backend.git
cd ooni-probe/
vagrant up
```

**Step 5.** Access your virtual machine with:

```
vagrant ssh probe
```

ooniprobe will be installed in /data/ooni-probe. 

**Step 6.** You can run ooniprobe with:

```
oonideckgen
ooniprobe -i deck/default-user.deck
```

#### Setting capabilities on your virtualenv python binary

If your distribution supports capabilities you can avoid running ooniprobe as
root through the following:

```
setcap cap_net_admin,cap_net_raw+eip /path/to/your/virtualenv's/python2
```

### Running ooniprobe from a development environment

On Debian based systems a development environment can be setup as follows: 

**Step 1.** Install all of the dependencies:

* build-essential

* python (>=2.7)

* python-dev

* pip

* libgeoip-dev

* libdumbnet-dev

* libpcap-dev

* libssl-dev

* libffi-dev

* tor (>=0.2.5.1 to run all the tor related tests)

**Step 2.** Install ooniprobe in a virtual environment through the following:

```
git clone https://github.com/TheTorProject/ooni-probe
cd ooni-probe
virtualenv env
```

virtualenv venv will create a folder in the current directory which will contain
the Python executable files, and a copy of the pip library which you can use to
install other packages.

**Step 3.** Activate the virtual environment to begin using it, as follows:

```
source env/bin/activate
pip install -r requirements.txt
pip install -r requirements-dev.txt
python setup.py install
ooniprobe -s # if all went well, lists available tests
```

### Running ooniprobe with Tor bridges

If Tor is blocked in the country that you are trying to run ooniprobe from, you
can circumvent this censorship through the use of **[Tor
bridges](https://bridges.torproject.org/)**. ooniprobe will automatically try to
use the bridges of **[Tor
Browser](https://www.torproject.org/projects/torbrowser.html.en)** but this
requires that obfs4proxy is installed. You can do this through the following,
depending on your operating system:

**Mac OS X**

Install Tor Browser and it will automatically find obfs4proxy. 

**Debian/Ubuntu**

Install obfs4proxy:

```
sudo apt-get install obfs4proxy
```

You can also configure ooniprobe to use your own Tor bridges by editing the
.ooni/ooniprobe.conf file in your home directory. Specifically, add the
following in the torrc section and adjust them to your bridges:

```
tor:
    torrc:
       Bridge:
       - "obfs4 198.245.60.50:443 752CF7825B3B9EA6A98C83AC41F7099D67007EA5 cert=xpmQtKUqQ/6v5X7ijgYE/f03+l2/EuQ1dexjyUhh16wQlu/cpXUGalmhDIlhuiQPNEKmKw iat-mode=0"
       - "obfs4 154.35.22.10:41835 8FB9F4319E89E5C6223052AA525A192AFBC85D55 cert=GGGS1TX4R81m3r0HBl79wKy1OtPPNR2CZUIrHjkRg65Vc2VR8fOyo64f9kmT1UAFG7j0HQ iat-mode=0"
       ClientTransportPlugin: "obfs4 exec /usr/bin/obfs4proxy"
```
