---
title: Install OONI Probe CLI on Debian/Ubuntu Linux
description: How to install the OONI Probe CLI on Debian/Ubuntu Linux
platform: cli
---

1) Install the bintray GPG key:

```
sudo apt-key adv --verbose --keyserver hkp://keyserver.ubuntu.com --recv-keys 'B5A08F01796E7F521861B449372D1FF271F2DD50'
```

2) Add the extra repository:

```
echo "deb http://deb.ooni.org/ unstable main" | sudo tee /etc/apt/sources.list.d/ooniprobe.list
```

3) Update package manager

```
sudo apt-get update
```

4) Install OONI Probe

```
sudo apt-get install ooniprobe-cli
```
