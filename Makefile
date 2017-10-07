OONI_PROBE_REPO_DIR=../ooni-probe
-include make.conf

setup:
	git remote add ghpage git@github.com:OpenObservatory/ooni.github.io.git

update-site: publish
	echo "Updating the website on ooni.torproject.org"
	ssh -t staticiforme.torproject.org 'sudo -u ooni /home/ooni/update-website.sh'
	echo "The website is now live at https://ooni.torproject.org/"

publish:
	rm -rf public/*
	hugo --theme=ooni --buildDrafts --baseUrl=https://ooni.torproject.org
	echo "ooni.io" > public/CNAME
	cd ${OONI_PROBE_REPO_DIR}/docs/ && make clean && make html
	cp -R ${OONI_PROBE_REPO_DIR}/docs/build/html/ public/docs/
	touch public/.nojekyll
	ghp-import public
	git push -u origin gh-pages:gh-pages --force
	git push -u ghpage gh-pages:master --force
	echo "You can now view the website at: http://ooni.github.io/"

# backward compat
publish-update: update-site

server:
	hugo server --theme=ooni --baseUrl=http://127.0.0.1:1313 --buildDrafts
