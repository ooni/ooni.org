#!/bin/bash
set -ex
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

#    BASE_URL="$DEPLOY_PRIME_URL"

source $DIR/build_website.sh
