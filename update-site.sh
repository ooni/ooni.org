#!/bin/sh
set -o errexit
set -o xtrace
cd $HOME # should be ~ooni
if [ ! -d ./openobservatory.github.io ]; then
    git clone --bare https://github.com/OpenObservatory/openobservatory.github.io.git ./openobservatory.github.io
fi
cd openobservatory.github.io
git fetch --all
rm -rf ../website~new # to clean possible temporary files
mkdir ../website~new
git archive --format tar master | tar x -C ../website~new
cd ../website~new
find . -type d -exec chmod 755 '{}' +
find . -type f -exec chmod 644 '{}' +
cd ../
mv website website~old
mv website~new website
sudo -u mirroradm /usr/local/bin/static-master-update-component ooni.torproject.org
rm -rf website~old
