----
title: Install OONI Probe on Debian/Ubuntu
description: How to install the OONI Probe CLI on Debian/Ubuntu linux
platform: cli
----
1. Install the bintray GPG key:

```
sudo apt-key adv --verbose --keyserver keyserver.ubuntu.com --recv-keys '8756C4F765C9AC3CB6B85D62379CE192D401AB61'
```

2. Add the extra repository:

```
echo "deb https://dl.bintray.com/ooni/ooniprobe-debian/ unstable main" | sudo tee /etc/apt/sources.list.d/ooniprobe.list
```

3. Update package manager

```
sudo apt-get update
```

3. Install OONI Probe

```
sudo apt-get install ooniprobe-cli
```
