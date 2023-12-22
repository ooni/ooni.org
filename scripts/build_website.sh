#!/bin/bash

if [ -z "${BASE_URL}" ]; then
    BASE_URL="https://ooni.org"
fi

echo "Using BASE_URL=$BASE_URL"
npm install
mkdir -p public/
hugo --minify --buildDrafts --baseURL="$BASE_URL"
cp static/googlec8ce605468a38232.html public/
cp static/robots.txt public/
cp _redirects public/
touch public/.nojekyll

MTIME="0000000000000000"
if [ -n "$RAILWAY_GIT_COMMIT_SHA" ];then
  ts=$(curl -s 'https://api.github.com/repos/ooni/ooni.org/commits/cf4b81cae5f1ca6eebef661e75d69aa3eb356d4d' | jq -r '.commit.author.date' )
  MTIME=$(date -d $ts +%s)
else
  MTIME=$(git show HEAD -q '--format=%ct')
fi
echo "# HELP ooni_web_mtime UNIX Time of the commit used to build website." > public/_web.mtime.txt
echo "# TYPE ooni_web_mtime gauge" >> public/_web.mtime.txt
echo "ooni_web_mtime $MTIME" >> public/_web.mtime.txt
