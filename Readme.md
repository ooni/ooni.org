<img src="https://raw.githubusercontent.com/ooni/design-system/refs/heads/master/svgs/logos/OONI-HorizontalColor.svg" width="422px" />

# OONI, the Organisation, not the Pizza Oven

We are the Open Observatory, of Network Interference.

We are trying to make the Internet for Humans, not AI bots, by observing what's going on.

BTW, [OONI Pizza ovens SUCK](https://ooni.com). We hope one day to get our domain back...

---

## 💡 **Do you think that's a good idea?**

Then throw in some spare change and help us bring about some change :)

[Donate NOW](https://ooni.org/donate)

---

## 🤝 **No coins? No problem.**

Don't have much coin? No problemo. You can also volunteer your time and it can make a huge difference.

**Join our Slack channel:** [https://slack.ooni.org/](https://slack.ooni.org/)

---

## Nerd stuff for the website

This is also the canonical website for OONI, that you can access via:

* https://ooni.org
* https://openobservatory.github.io
* https://ooni.netlify.com

If you are having trouble accessing our website, please contact us at contact [at] openobservatory.org.

### Contributing articles

* Fork this repository if you're not a collaborator
* Add your post to `content/post/` directory
* Submit a pull request
* Wait for pull request to be reviewed and merged to `master` or merge it yourself :)

### Local build

#### Setup

Dependencies to build the website **manually** are
[hugo](https://github.com/spf13/hugo/),
[ooni-probe](https://github.com/TheTorProject/ooni-probe), and
[sphinx](http://www.sphinx-doc.org/en/stable/) to build ooni-probe docs. Exact
versions are codified in "canonical" build procedure in
[travis.yml](./travis.yml).

#### Running locally

If you want to preview the website while editing styles and posts you can do it running following command:

```
make server
```

If you want to publish to [Github mirror](https://openobservatory.github.io/), you should run:

```
make publish
```

#### End to end local testing

To run the end to end integration tests do:

```
yarn install
yarn run cypress open
```
