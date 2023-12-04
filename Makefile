build:
	hugo
server:
	hugo server --baseURL=http://127.0.0.1:1313 --buildDrafts --buildFuture

dev:
	hugo server --baseURL=http://127.0.0.1:1313 --buildDrafts --buildFuture --disableFastRender
