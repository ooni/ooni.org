FROM alpine:edge

ENV OONI_PROBE_REPO_DIR=/ooni-probe
ENV OONI_WEB_REPO_DIR=/ooni-web
ENV HUGO_VERSION=0.16

# Install hugo and package dependencies to build ooni-web
RUN apk add --update wget ca-certificates make git py2-pip
WORKDIR /tmp
RUN wget https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_linux-64bit.tgz && \
  tar xzf hugo_${HUGO_VERSION}_linux-64bit.tgz && \
  rm -r hugo_${HUGO_VERSION}_linux-64bit.tgz && \
  mv hugo /usr/bin/hugo

# Clone required OONI repositories
RUN git clone https://github.com/TheTorProject/ooni-web ${OONI_WEB_REPO_DIR} && \
  git clone https://github.com/TheTorProject/ooni-probe ${OONI_PROBE_REPO_DIR}

# Generate OONI website
WORKDIR ${OONI_WEB_REPO_DIR}
RUN cp ${OONI_PROBE_REPO_DIR}/requirements-docs.txt .
RUN pip install -r requirements-docs.txt
RUN rm -rf public/* && \
  hugo --theme=ooni --buildDrafts --baseUrl=http://0.0.0.0:1313
# Generate and update docs of ooni-probe
WORKDIR ${OONI_PROBE_REPO_DIR}/docs
RUN make clean && \
  make html
WORKDIR ${OONI_WEB_REPO_DIR}
RUN cp -R ${OONI_PROBE_REPO_DIR}/docs/build/html/ public/docs/ && \
  touch public/.nojekyll

# Run hugo server with OONI website
CMD ["hugo", "server", "--bind=0.0.0.0", "--theme=ooni", "--baseUrl=http://localhost:1313"]
