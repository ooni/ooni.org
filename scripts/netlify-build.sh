#!/bin/bash

BASE_URL="https://ooni.org"
if [ "$CONTEXT" == "deploy-preview" ];then
    BASE_URL="$DEPLOY_PRIME_URL"
fi

echo "Using BASE_URL=$BASE_URL"
hugo --buildDrafts --baseUrl="$BASE_URL"
cp static/googlec8ce605468a38232.html public/
cp static/robots.txt public/
cp _redirects public/
# netlify does not permit `.web.mtime` filename for unknown reason
git show HEAD -q '--format=# HELP ooni_web_mtime UNIX Time of the commit used to build website.%n# TYPE ooni_web_mtime gauge%nooni_web_mtime %ct' >public/_web.mtime.txt
