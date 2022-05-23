---
title: Install OONI Probe CLI on Debian/Ubuntu Linux
description: How to install the OONI Probe CLI on Debian/Ubuntu Linux
platform: cli
---

There are different ways to install OONI Probe CLI on Debian and derivatives.

#### Using extrepo

The extrepo tool is available on Debian Bullseye, Debian Buster with Backports enabled, Ubuntu Focal and any later release.

```
sudo apt install extrepo
sudo extrepo enable ooni
sudo apt install ooniprobe-cli
```

#### Using apt-key

Note: apt-key has been deprecated.

```
sudo apt-key adv --verbose --keyserver hkp://keyserver.ubuntu.com --recv-keys 'B5A08F01796E7F521861B449372D1FF271F2DD50'
echo "deb http://deb.ooni.org/ unstable main" | sudo tee /etc/apt/sources.list.d/ooniprobe.list
sudo apt-get update
sudo apt-get install ooniprobe-cli
```
