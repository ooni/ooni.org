#!/bin/bash

set -ex

BASE_URL="https://ooni.org"
source build_website.sh

chmod 600 scripts/id_travis_deploy_key
eval $(ssh-agent -s)
ssh-add scripts/id_travis_deploy_key

cd public/
git init .
git remote add openobservatory-gh git@github.com:OpenObservatory/openobservatory.github.io.git
git add .
git commit -am 'Static site deploy'
git push openobservatory-gh --force
