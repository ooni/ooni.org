OONI_SPEC_REPO=../ooni-spec
OONI_PROBE_REPO_DIR=../ooni-probe

setup:
	git remote add ghpage git@github.com:ooni/ooni.github.io.git

spec-update:
	cd ${OONI_SPEC_REPO}; git checkout master; git pull
	cp ${OONI_SPEC_REPO}/test-descriptions/*.md content/nettest/
	echo "---" > content/about/data-policy.md
	echo "aliases: [\"/data-policy\"]" >> content/about/data-policy.md
	echo "---" >> content/about/data-policy.md
	cat ${OONI_SPEC_REPO}/informed-consent/data-policy.md >> content/about/data-policy.md
	cp ${OONI_SPEC_REPO}/informed-consent/risks.md content/about/risks.md

update-site:
	echo "Updating the website on ooni.torproject.org"
	ssh -t staticiforme.torproject.org 'sudo -u ooni /home/ooni/update-website.sh'
	echo "The website is now live at https://ooni.torproject.org/"

publish:
	rm -rf public/*
	hugo --theme=ooni --buildDrafts --baseUrl=https://ooni.torproject.org
	echo "ooni.io" > public/CNAME
	cd ${OONI_PROBE_REPO_DIR}/docs/; make clean; make html
	cp -R ${OONI_PROBE_REPO_DIR}/docs/build/html/ public/docs/
	touch public/.nojekyll
	ghp-import public
	git push -u origin gh-pages:gh-pages --force
	git push -u ghpage gh-pages:master --force
	echo "You can now view the website at: http://ooni.github.io/"

publish-update: publish update-site

server:
	hugo server --theme=ooni --baseUrl=http://127.0.0.1:1313
