# Setup

On OSX:
```
brew install hugo
```

For other platforms download the hugo release for your system here:
https://github.com/spf13/hugo/releases

# Running locally

```
make server
```

Which is the equivalent of:

```
hugo server --theme=ooni --baseUrl=http://127.0.0.1:1313
```

# Contributing articles

* Fork this repository

* Add your post to `content/post/` directory

* Submit a pull request

# Publishing

Make sure you have the ghpage remote setup with:

```
make setup
```

That runs:

```
git remote add ghpage git@github.com:ooni/ooni.github.io.git
```

You can publish the website to github by running:

```
make publish
```

Once this is done you can then update the site on the torproject server by
doing:

```
make update-site
```

If you want to do both at the same time run:

```
make publish-update
```

## Adding a new blog post

When adding a new blog post and make it appear on the front page you shall edit
`themes/ooni/layouts/index.html`.

## Python requirements

```
ghp-import==0.4.1
MarkupSafe==0.23
Sphinx==1.3.1
```
