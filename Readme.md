# OONI Website

This is the canonical website for OONI,  that  you can access via:

* https://ooni.org
* https://openobservatory.github.io
* https://ooni.netlify.com

If you are having trouble accessing our website, please contact us at contact [at] openobservatory.org.

## Contributing articles

* Fork this repository if you're not a collaborator
* Add your post to `content/post/` directory
* Submit a pull request
* Wait for pull request to be reviewed and merged to `master` or merge it yourself :)

## Local build

### Setup

Dependencies to build the website **manually** are
[Hugo](https://github.com/spf13/hugo/),
[ooni-probe](https://github.com/TheTorProject/ooni-probe), and
[Sphinx](http://www.sphinx-doc.org/en/stable/) to build ooni-probe docs. Exact
Versions are codified in "canonical" build procedure in
[travis.yml](./travis.yml).

### Running locally

If you want to preview the website while editing styles and posts you can do it running following command:

```
Make server
```

If you want to publish to [Github mirror](https://openobservatory.github.io/), you should run:

```
Make publish
```

### End to end local testing

To run the end to end integration tests do:

```
Yarn install
Yarn run cypress open
```
