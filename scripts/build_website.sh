#!/bin/bash

if [ -z "${BASE_URL}" ]; then
    BASE_URL="https://ooni.org"
fi

PROBE_DESKTOP_VERSION=$(grep "^probeDesktopVersion" config.toml | cut -d '=' -f2 | tr -d \" | awk '{$1=$1};1')

echo "Using BASE_URL=$BASE_URL"
echo "Probe Desktop Version: $PROBE_DESKTOP_VERSION"

hugo --minify --buildDrafts --baseUrl="$BASE_URL"
cp static/googlec8ce605468a38232.html public/
cp static/robots.txt public/
cp _redirects public/
touch public/.nojekyll

mkdir -p public/downloads
curl -Lo public/downloads/OONI-Probe-Setup-${PROBE_DESKTOP_VERSION}.exe \
    https://github.com/ooni/probe-desktop/releases/download/v${PROBE_DESKTOP_VERSION}/OONI-Probe-Setup-${PROBE_DESKTOP_VERSION}.exe
if [ "$(du -k public/downloads/OONI-Probe-Setup-${PROBE_DESKTOP_VERSION}.exe | awk '{print $1}')" -lt 10000 ]; then
    echo "ERR: downloaded OONI-Probe-Setup-${PROBE_DESKTOP_VERSION}.exe is < 10 MB"
    exit 1
fi

curl -Lo public/downloads/OONI-Probe-${PROBE_DESKTOP_VERSION}.dmg \
    https://github.com/ooni/probe-desktop/releases/download/v${PROBE_DESKTOP_VERSION}/OONI-Probe-${PROBE_DESKTOP_VERSION}.dmg
if [ "$(du -k public/downloads/OONI-Probe-${PROBE_DESKTOP_VERSION}.dmg | awk '{print $1}')" -lt 10000 ]; then
    echo "ERR: downloaded OONI-Probe-${PROBE_DESKTOP_VERSION}.dmg is < 10 MB"
    exit 1
fi

# netlify does not permit `.web.mtime` filename for unknown reason
git show HEAD -q '--format=# HELP ooni_web_mtime UNIX Time of the commit used to build website.%n# TYPE ooni_web_mtime gauge%nooni_web_mtime %ct' > public/_web.mtime.txt
