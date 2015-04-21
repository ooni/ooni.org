build: site
	site build

site: site.hs
	ghc --make -threaded site.hs

serve: site
	site watch --no-serve &
	nginx -p . -c nginx.conf

clean:
	rm -r _site _cache
	rm site.hi site.o site

.PHONY: build serve clean
