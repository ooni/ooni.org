#!/bin/sh
HUGO_VERSION="0.58.2"
HUGO_SHA="6129b8232fa71dc169f7159bafc4c2afd8769e750a3628262716febb5e119518"
wget https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz -O /tmp/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz
echo "${HUGO_SHA}  /tmp/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz" >/tmp/hugo_${HUGO_VERSION}_checksums.txt
sha256sum --check /tmp/hugo_${HUGO_VERSION}_checksums.txt
tar -xf /tmp/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz -C bin/
