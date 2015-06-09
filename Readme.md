# Setup

On OSX:
```
brew install hugo
```

For other platforms download the hugo release for your system here:
https://github.com/spf13/hugo/releases

# Running locally

```
hugo --theme=ooni server
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
