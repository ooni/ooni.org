#!/bin/bash
set -ex

BASE_URL="https://ooni.org"
if [ "$CONTEXT" == "deploy-preview" ];then
    BASE_URL="$DEPLOY_PRIME_URL"
fi

source build_website.sh
