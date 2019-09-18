OONI_PROBE_REPO_DIR=../ooni-probe
-include make.conf

update-site:
	@echo "Updating the website on ooni.torproject.org from openobservatory.github.io"
	scp '-oProxyCommand=ssh perdulce.torproject.org -W %h:%p' update-site.sh staticiforme.torproject.org:
	ssh '-oProxyCommand=ssh perdulce.torproject.org -W %h:%p' -t staticiforme.torproject.org sudo -u ooni sh ./update-site.sh
	@echo "The website is now live at https://ooni.torproject.org/"

# NB: `make publish` is slow as it downloads whole website and re-uploads it back,
# you should not use it in your daily life, it's a disaster recovery procedure.
# keep this in-sync with `.travis.yml`
publish:
	rm -rf public design
	hugo --buildDrafts --baseUrl=https://ooni.torproject.org
	make -C ${OONI_PROBE_REPO_DIR}/docs clean
	make -C ${OONI_PROBE_REPO_DIR}/docs html
	cp -R ${OONI_PROBE_REPO_DIR}/docs/build/html/ public/docs/
	git show HEAD -q '--format=# HELP ooni_web_mtime UNIX Time of the commit used to build website.%n# TYPE ooni_web_mtime gauge%nooni_web_mtime %ct' >public/_web.mtime.txt
	touch public/.nojekyll
	cd public && git init && git remote add pages git@github.com:OpenObservatory/openobservatory.github.io.git
	cd public && git add . && git commit -m 'Manual publishing'
	cd public && git push --force pages master
	@echo "You can now view the website at: https://openobservatory.github.io/"

netlify:
	mkdir -p bin contrib
	# wget hugo is not needed, netlify already has it
	pip install sphinx sphinx_rtd_theme
	# netlify may cache contrib/ooni-probe from previous build
	if [ ! -d contrib/ooni-probe ]; then git clone --depth 1 --branch master https://github.com/ooni/probe-legacy.git contrib/ooni-probe; else cd contrib/ooni-probe && git pull --ff-only origin master; fi
	rm -rf public design
	hugo --buildDrafts --baseUrl=https://ooni.org
	make -C contrib/ooni-probe/docs clean
	make -C contrib/ooni-probe/docs html
	cp -R contrib/ooni-probe/docs/build/html/ public/docs/
	# netlify does not permit `.web.mtime` filename for unknown reason
	git show HEAD -q '--format=# HELP ooni_web_mtime UNIX Time of the commit used to build website.%n# TYPE ooni_web_mtime gauge%nooni_web_mtime %ct' >public/_web.mtime.txt

server:
	hugo server --baseUrl=http://127.0.0.1:1313 --buildDrafts --buildFuture

known-publishers:
	ssh perdulce.torproject.org getent group ooni

known-tags:
	git grep -h ^tags: | sed 's/^tags: *//' | jq .[] | sort | uniq -c | sort -nr
