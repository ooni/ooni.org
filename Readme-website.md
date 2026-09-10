## About this repository

This is the canonical source for the OONI website, reachable at:

* https://ooni.org
* https://openobservatory.github.io

If you have trouble accessing the website, contact us at contact [at] openobservatory.org.

### Contributing articles

1. Fork this repository (if you're not already a collaborator).
2. Add your post to the `content/post/` directory.
3. Submit a pull request.
4. Wait for review and merge to `master` — or, if you have access, merge it yourself.

### Building locally

#### Dependencies

Building the website manually requires:

* [Hugo](https://github.com/spf13/hugo/)

Exact versions are codified in the canonical build procedure in the [github actions workflows](./github/workflows/main.yml).

#### Running locally

To preview the website while editing styles and posts:

```
make server
```

To publish to the [GitHub mirror](https://openobservatory.github.io/):

```
make publish
```

#### End-to-end testing

To run the end-to-end integration tests:

```
yarn install
yarn run cypress open
```
