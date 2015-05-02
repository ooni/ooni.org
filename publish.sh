#!/bin/sh
# Must run this before:
# git remote add ghpage git@github.com:ooni/ooni.github.io.git
OONI_PROBE_REPO_DIR="../ooni-probe/"
CWD=`pwd`
hugo --theme=ooni --buildDrafts
cd $OONI_PROBE_REPO_DIR/docs/
make clean
make html
cd $CWD
cp -R $OONI_PROBE_REPO_DIR/docs/build/html/ public/docs/
touch public/.nojekyll
ghp-import public
git push -u ghpage gh-pages:master --force
