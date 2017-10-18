.PHONY: all

all: ooni.io.png

%.png: %.seqdiag
	# Use any TTF font, otherwise text is UGLY.
	seqdiag --antialias --no-transparency --font /usr/share/fonts/truetype/dejavu/DejaVuSans.ttf $^ -o $@
