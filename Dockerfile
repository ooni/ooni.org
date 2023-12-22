FROM node:current-alpine AS build
RUN apk add --update hugo git
WORKDIR /hugo
COPY . /hugo
RUN sh /hugo/scripts/build_website.sh

FROM nginx:1.25-alpine
COPY ./nginx.conf .
COPY --from=build /hugo/public /usr/share/nginx/html
EXPOSE $PORT
