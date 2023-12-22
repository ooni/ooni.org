FROM alpine:latest AS build
RUN apk add --update hugo git
WORKDIR /hugo
COPY . /hugo
RUN sh /hugo/scripts/build_website.sh

FROM nginx:1.25-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /hugo/public .
EXPOSE 80/tcp
