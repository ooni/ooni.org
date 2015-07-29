#!/bin/sh
# Must run this before:
# git remote add ghpage git@github.com:ooni/ooni.github.io.git
OONI_PROBE_REPO_DIR="../ooni-probe/"
CWD=`pwd`
rm -rf public/*
hugo --theme=ooni --buildDrafts --baseUrl=http://ooni.io
echo "ooni.io" > public/CNAME
cd $OONI_PROBE_REPO_DIR/docs/
make clean
make html
cd $CWD
cp -R $OONI_PROBE_REPO_DIR/docs/build/html/ public/docs/
touch public/.nojekyll
ghp-import public
git push -u origin gh-pages:gh-pages --force
git push -u ghpage gh-pages:master --force
