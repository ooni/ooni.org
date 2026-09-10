<img src="https://raw.githubusercontent.com/ooni/design-system/refs/heads/master/svgs/logos/OONI-HorizontalColor.svg" width="422px" />

# OONI - Open Observatory of Network Interference

OONI increases the transparency of internet censorship around the world.

Since 2012, a global community of volunteers, researchers, journalists, and human rights defenders has used our free and open-source tools to detect and document this interference, turning isolated network measurements into accessible, verifiable evidence.

The result is the world's largest open dataset on internet censorship: **3+ billion measurements** from **29,000+ networks** across **245 countries and territories**, published in near real time, every day, and openly available to anyone.

## The OONI ecosystem

OONI is spread across several repositories. This one hosts the [website](Readme-website.md) and is
also where we track **cross-organisational issues**. If you're unsure where
something belongs, [open it here](https://github.com/ooni/ooni.org/issues).

### Measuring

| Repository | What it is |
| --- | --- |
| [probe](https://github.com/ooni/probe) | Umbrella issue tracker for all OONI Probe apps — start here for bug reports |
| [probe-cli](https://github.com/ooni/probe-cli) | The measurement engine and command-line client (Go) |
| [probe-multiplatform](https://github.com/ooni/probe-multiplatform) | The Android, iOS and desktop apps (Kotlin Multiplatform) |
| [probe-web](https://github.com/ooni/probe-web) | Measure website blocking from the browser |
| [run](https://github.com/ooni/run) | OONI Run — build and share your own measurement links |
| [spec](https://github.com/ooni/spec) | Specifications for our tests and data formats |
| [userauth](https://github.com/ooni/userauth/) | OONI Anonymous credentials library |
| [ooniprobe-rs](https://github.com/ooni/ooniprobe-rs/) | OONI Probe rust library component |

### Collecting and processing data

| Repository | What it is |
| --- | --- |
| [backend](https://github.com/ooni/backend) | Collector, test helpers, API and supporting services |
| [data](https://github.com/ooni/data) | The measurement processing pipeline and data CLI |
| [devops](https://github.com/ooni/devops) | Infrastructure as code for the services above |
| [historical-geoip](https://github.com/ooni/historical-geoip) | Historical IP-to-country and ASN databases for reprocessing old data |

### Exploring the data

| Repository | What it is |
| --- | --- |
| [explorer](https://github.com/ooni/explorer) | OONI Explorer, the web interface to the open dataset |
| [notebooks](https://github.com/ooni/notebooks) | Jupyter notebooks for analysing OONI data |

### Contributing content and testing lists

| Repository | What it is |
| --- | --- |
| [test-lists-ui](https://github.com/ooni/test-lists-ui) | Web interface for proposing changes to the test lists |
| [docs](https://github.com/ooni/docs) | Source for [docs.ooni.org](https://docs.ooni.org), mostly automatically built from each code repository |
| [translations](https://github.com/ooni/translations) | Localisation of our apps and website |
| [design-system](https://github.com/ooni/design-system) | Shared React components and visual identity |

The full list, including archived and experimental work, is at
[github.com/ooni](https://github.com/orgs/ooni/repositories).

## Support our work

OONI is independent, and the evidence we produce is free for everyone, journalists investigating shutdowns, researchers studying their impact, and lawyers and advocates challenging censorship in court. Your support keeps the observatory running and open.

[**Donate to OONI →**](https://ooni.org/donate)

## Contribute your time

Funding is one way to help; your time is another, and it makes a real difference. Researchers, developers, translators, and writers all have a place in our community.

Join us on Slack: [https://slack.ooni.org/](https://slack.ooni.org/)
