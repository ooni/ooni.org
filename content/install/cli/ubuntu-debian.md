---
title: Install OONI Probe CLI on Debian/Ubuntu Linux
description: How to install the OONI Probe CLI on Debian/Ubuntu Linux
platform: cli
---

1) Install the GPG key:

```
sudo gpg --no-default-keyring --keyserver hkp://keyserver.ubuntu.com --keyring /etc/apt/keyrings/ooni-apt-keyring.gpg --recv-keys 'B5A08F01796E7F521861B449372D1FF271F2DD50'
```

You can choose how to fetch OONI Probe:

2.A) Using HTTP. This is the recommended option.

```
echo "deb [signed-by=/etc/apt/keyrings/ooni-apt-keyring.gpg] https://deb.ooni.org/ unstable main" | sudo tee /etc/apt/sources.list.d/ooniprobe.list
```

2.B) Using Tor. This is an alternative option in case the HTTP repository is not reachable. This requires running the tor daemon on your system.

```
sudo apt-get install tor apt-transport-tor
echo "deb [signed-by=/etc/apt/keyrings/ooni-apt-keyring.gpg] tor+http://deb.ooni.org/ unstable main" | sudo tee /etc/apt/sources.list.d/ooniprobe.list
```

3) Finally, update the package list and install OONI Probe

```
sudo apt-get update
sudo apt-get install ooniprobe-cli
```
