#!/bin/bash

BASE_URL="https://ooni.org"
if [ "$CONTEXT" == "deploy-preview" ];then
    BASE_URL="$DEPLOY_PRIME_URL"
fi

echo "Using BASE_URL=$BASE_URL"

mkdir -p bin contrib
# wget hugo is not needed, netlify already has it
pip install sphinx sphinx_rtd_theme
# netlify may cache contrib/ooni-probe from previous build
if [[ ! -d contrib/ooni-probe ]]; then
    git clone --depth 1 --branch master https://github.com/ooni/probe-legacy.git contrib/ooni-probe;
else
    cd contrib/ooni-probe && git pull --ff-only origin master;
fi
hugo --buildDrafts --baseUrl=$BASE_URL
make -C contrib/ooni-probe/docs clean
make -C contrib/ooni-probe/docs html
cp -R contrib/ooni-probe/docs/build/html/ public/docs/
cp static/googlec8ce605468a38232.html public/
cp _redirects public/
# netlify does not permit `.web.mtime` filename for unknown reason
git show HEAD -q '--format=# HELP ooni_web_mtime UNIX Time of the commit used to build website.%n# TYPE ooni_web_mtime gauge%nooni_web_mtime %ct' >public/_web.mtime.txt
