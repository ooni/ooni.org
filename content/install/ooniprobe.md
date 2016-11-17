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

### Linux: Debian

**On Debian stable (jessie):**

**Step 1.** Configure the torproject repository by typing the following in your terminal:

```
gpg --keyserver keys.gnupg.net --recv A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89
gpg --export A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89 | sudo apt-key add -
echo 'deb http://deb.torproject.org/torproject.org jessie main' | sudo tee /etc/apt/sources.list.d/ooniprobe.list
sudo apt-get update
```

**Step 2.** Type the following in your terminal:

```
sudo apt-get install ooniprobe deb.torproject.org-keyring
```

**On Debian testing:**

**Step 1.** Configure the torproject repository by typing the following in your terminal:

```
gpg --keyserver keys.gnupg.net --recv A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89
gpg --export A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89 | sudo apt-key add -
echo 'deb http://deb.torproject.org/torproject.org testing main' | sudo tee /etc/apt/sources.list.d/ooniprobe.list
sudo apt-get update
```

**Step 2.** Type the following in your terminal:

```
sudo apt-get install ooniprobe deb.torproject.org-keyring
```

**On Debian unstable:**

**Step 1.** Configure the torproject repository by typing the following in your terminal:

```
gpg --keyserver keys.gnupg.net --recv A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89
gpg --export A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89 | sudo apt-key add -
echo 'deb http://deb.torproject.org/torproject.org unstable main' | sudo tee /etc/apt/sources.list.d/ooniprobe.list
sudo apt-get update
```

**Step 2.** Type the following in your terminal:

```
sudo apt-get install ooniprobe deb.torproject.org-keyring
```

### Linux: Ubuntu

**On Ubuntu 16.10 (yakkety):**

**Step 1.** Configure the torproject repository by typing the following in your terminal:

```
gpg --keyserver keys.gnupg.net --recv A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89
gpg --export A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89 | sudo apt-key add -
echo 'deb http://deb.torproject.org/torproject.org yakkety main' | sudo tee /etc/apt/sources.list.d/ooniprobe.list
sudo apt-get update
```

**Step 2.** Type the following in your terminal:

```
sudo apt-get install ooniprobe deb.torproject.org-keyring
```

**On Ubuntu 16.04 (xenial):**

**Step 1.** Configure the torproject repository by typing the following in your terminal:

```
gpg --keyserver keys.gnupg.net --recv A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89
gpg --export A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89 | sudo apt-key add -
echo 'deb http://deb.torproject.org/torproject.org xenial main' | sudo tee /etc/apt/sources.list.d/ooniprobe.list
sudo apt-get update
```

**Step 2.** Type the following in your terminal:

```
sudo apt-get install ooniprobe deb.torproject.org-keyring
```

**On Ubuntu 14.04 (trusty):**


**Step 1.** Configure the torproject repository by typing the following in your terminal:

```
gpg --keyserver keys.gnupg.net --recv A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89
gpg --export A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89 | sudo apt-key add -
echo 'deb http://deb.torproject.org/torproject.org trusty main' | sudo tee /etc/apt/sources.list.d/ooniprobe.list
sudo apt-get update
```

**Step 2.** Type the following in your terminal:

```
sudo apt-get install ooniprobe deb.torproject.org-keyring
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

Then you can install ooniprobe inside a virtual environment with pip by typing
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

## Running ooniprobe

### Debian/Ubuntu

Access ooniprobe's web UI in you web's browser at
[http://localhost:8842](http://localhost:8842) and go through the setup wizard
process to initialize and use ooniprobe.

### Pip and other Linux versions

Type `ooniprobe-agent start` in your terminal to start ooniprobe agent. You
should be presented with the following URL: [http://127.0.0.1:8842]
(http://127.0.0.1:8842).

By opening this URL [http://127.0.0.1:8842](http://127.0.0.1:8842) in your web
browser you will be directed to ooniprobe's web UI setup wizard. Upon
completion of the setup wizard process ooniprobe will be successfully
initialized and ready to use.

Further documentation on how to use ooniprobe's web UI can be found [here]
(/post/web-ui-post/).

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
cd ooni-probe/
vagrant up
```

**Step 5.** Access your virtual machine with:

```
vagrant ssh probe
```

**Step 6.** Start the ooniprobe agent:

```
ooniprobe-agent start
```

**Step 7.** Connect to the web UI on your host machine at:
[http://localhost:8842/](http://localhost:8842/)

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
