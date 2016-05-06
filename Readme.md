# Setup

On OSX:
```
brew install hugo
```

For other platforms download the hugo release for your system here:
https://github.com/spf13/hugo/releases

# Running locally

```
hugo server --theme=ooni --baseUrl=http://127.0.0.1:1313
```

# Contributing articles

* Fork this repository

* Add your post to `content/post/` directory

* Submit a pull request

# Publishing

Make sure you have the ghpage remote setup:

```
git remote add ghpage git@github.com:ooni/ooni.github.io.git
```

Then run the publish script:

```
./publish.sh
```

## Python requirements

```
ghp-import==0.4.1
MarkupSafe==0.23
Sphinx==1.3.1
```
