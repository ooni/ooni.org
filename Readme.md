<img src="https://raw.githubusercontent.com/ooni/design-system/refs/heads/master/svgs/logos/OONI-HorizontalColor.svg" width="422px" />

# OONI - Open Observatory of Network Interference
 
OONI increases the transparency of internet censorship around the world.
 
Since 2012, a global community of volunteers, researchers, journalists, and human rights defenders has used our free and open-source tools to detect and document this interference, turning isolated network measurements into accessible, verifiable evidence.
 
The result is the world's largest open dataset on internet censorship: **3+ billion measurements** from **29,000+ networks** across **245 countries and territories**, published in near real time, every day, and openly available to anyone.
 
This repository is the source for OONI's website.
 
## Support our work
 
OONI is independent, and the evidence we produce is free for everyone, journalists investigating shutdowns, researchers studying their impact, and lawyers and advocates challenging censorship in court. Your support keeps the observatory running and open.
 
[**Donate to OONI →**](https://ooni.org/donate)
 
## Contribute your time
 
Funding is one way to help; your time is another, and it makes a real difference. Researchers, developers, translators, and writers all have a place in our community.
 
Join us on Slack: [https://slack.ooni.org/](https://slack.ooni.org/)
 
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
