build:
	hugo
server:
	hugo server --buildDrafts --buildFuture

dev:
	hugo server --buildDrafts --buildFuture --disableFastRender
