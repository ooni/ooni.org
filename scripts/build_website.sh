#!/bin/bash

echo "Building OONI.org"
npm install
mkdir -p public/
hugo --minify --buildDrafts
cp static/googlec8ce605468a38232.html public/
cp static/robots.txt public/
cp _redirects public/
touch public/.nojekyll
# netlify does not permit `.web.mtime` filename for unknown reason
git show HEAD -q '--format=# HELP ooni_web_mtime UNIX Time of the commit used to build website.%n# TYPE ooni_web_mtime gauge%nooni_web_mtime %ct' > public/_web.mtime.txt
