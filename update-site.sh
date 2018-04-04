#!/bin/sh
set -o errexit
set -o xtrace
cd $HOME # should be ~ooni
python - <<'EOF'
TIMEOUT, STEP = 180, 5
import urllib2, json, time, sys
# XXX hotfix
sys.exit(0)

for i in xrange(0, TIMEOUT, STEP):
    try:
        state = json.load(urllib2.urlopen('https://api.github.com/repos/thetorproject/ooni-web/commits/master/status'))['state']
    except Exception, err:
        state = err
    print time.ctime(), state
    if state == 'success':
        break
    elif state == 'failure':
        raise RuntimeError('Build failed, go to https://travis-ci.org/TheTorProject/ooni-web/')
    time.sleep(STEP)
else:
    raise RuntimeError('Build have not finished within timeout, go to https://travis-ci.org/TheTorProject/ooni-web/')
EOF
if [ ! -d ./openobservatory.github.io ]; then
    git clone --bare https://github.com/OpenObservatory/openobservatory.github.io.git ./openobservatory.github.io
fi
cd openobservatory.github.io
git fetch --all
rm -rf ../website~new # to clean possible temporary files
mkdir ../website~new
git archive --format tar FETCH_HEAD | tar x -C ../website~new
cd ../website~new
find . -type d -exec chmod 755 '{}' +
find . -type f -exec chmod 644 '{}' +
cd ../
mv website website~old
mv website~new website
sudo -u mirroradm /usr/local/bin/static-master-update-component ooni.torproject.org
rm -rf website~old
