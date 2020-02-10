#!/bin/bash

set -ex

cd public/
git init .
git remote add openobservatory-gh git@github.com:OpenObservatory/openobservatory.github.io.git
git add .
git config --global user.email "admin@openobservatory.org"
git config --global user.name "OONI Git Pusher"
git commit -am 'Static site deploy'
git push --set-upstream openobservatory-gh master
