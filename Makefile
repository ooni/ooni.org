build:
	hugo
server:
	hugo server --baseURL=http://127.0.0.1:1313 --buildDrafts --buildFuture

dev:
	hugo server --baseURL=http://127.0.0.1:1313 --buildDrafts --buildFuture  --disableFastRender

# Pull the latest citations CSV from Google Sheets
update-citations:
	./scripts/update-citations.sh
