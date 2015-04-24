#!/bin/sh
# Must run this before:
# git remote add ghpage git@github.com:ooni/ooni.github.io.git
hugo --theme=ooni --buildDrafts --baseUrl="http://ooni.io/"
ghp-import public
git push -u ghpage gh-pages:master --force
