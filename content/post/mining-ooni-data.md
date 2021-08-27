---
title: "Mining OONI data"
author: "Federico Ceratto"
date: "2021-08-24"
tags: ["technology"]
categories: ["blog"]
---

OONI receives measurement data from OONI Probes around the world and processes it in real-time to detect censorship.

There are different ways to access the output of the processing: [OONI Explorer](https://explorer.ooni.org/), the [OONI API](https://api.ooni.io/) and
dumps of the PostgreSQL database.

[OONI Explorer](https://explorer.ooni.org/) provides a user-friendly web interface to all visitors.

The [OONI API](https://api.ooni.io/) is meant for developers and researches and allows [searching for
measurement metadata](https://api.ooni.io/apidocs/#/default/get_api_v1_measurements), [fetching single measurements](https://api.ooni.io/apidocs/#/default/get_api_v1_measurement_meta), and [generating statistics](https://api.ooni.io/apidocs/#/default/get_api_v1_aggregation).
Hovever, it is not designed for large data transfers (i.e. extracting tens of thousands of measurements or many GB of data) and the API is rate limited.

The API uses a PostgreSQL database as its main data source. Regular dumps of the database will be made
available in the future.

Finally, researchers can access the raw measurement data from an S3 bucket. This can be used
to implement your own detection algorithms or to run our data processing tools on your own hardware.

We process and publish measurements in real-time to provide transparency. The methodology, alghoritms,
and software developed by us is also [published](https://github.com/ooni/).

We encourage researchers to replicate our findings.

Please [contact us](/about/#contact) if you need any clarification or database dumps.

## Accessing raw measurement data

"Raw measurement data" refers to data structures uploaded by OONI Probes (run by volunteers worldwide) to the
processing pipeline.

Thanks to the [Amazon Open Data program](https://aws.amazon.com/government-education/open-data/), the whole OONI dataset
can be fetched from the [`ooni-data-eu-fra` Amazon S3 bucket](https://ooni-data-eu-fra.s3.eu-central-1.amazonaws.com/).

A single chunk of data is called "a measurement" and its uncompressed size can vary between 1KB to 1MB, roughly.

Probes usually upload multiple measurements on each execution. Measurements are stored temporarily and then batched together, compressed and uploaded to the S3 bucket once every hour. To ensure transparency, incoming measurements go through basic content validation and the API returns success or error;
once a measurement is accepted it will be published on S3.

OONI measurements are also processed by the [fastpath](https://github.com/ooni/pipeline/tree/master/af/fastpath) and made immediately available on OONI Explorer. See the "receive_measurement" function in the probe_services.py file in the API codebase for details.

Specifications of the raw measurement data can be found inside of the [ooni/spec](https://github.com/ooni/spec) repository.

## File paths in the S3 bucket in JSONL format

Contains a JSON document for each measurement, separated by newline and compressed, for easy processing.
The path structure allows to easily select, identify and download data based on the researcher's needs.

In the path template:
- `cc` is an uppercase [2 letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
- `testname` is a test name where underscores are removed
- `timestamp` is a `YYYYMMDD` timestamp
- `name` is a unique filename

### Compressed JSONL from measurements before 20201021

The path structure is: `s3://ooni-data-eu-fra/jsonl/<testname>/<cc>/<timestamp>/00/<name>.jsonl.gz`

Example: `s3://ooni-data-eu-fra/jsonl/webconnectivity/IT/20200921/00/20200921_IT_webconnectivity.l.0.jsonl.gz`

Listing JSONL files:
```
s3cmd ls s3://ooni-data-eu-fra/jsonl/
s3cmd ls s3://ooni-data-eu-fra/jsonl/webconnectivity/US/20201021/00/
```

### Compressed JSONL from measurements starting from 20201020

The path structure is: `s3://ooni-data-eu-fra/raw/<timestamp>/<hour>/<cc>/<testname>/<ts2>_<cc>_<testname>.<host_id>.<counter>.jsonl.gz`

Example: `s3://ooni-data-eu-fra/raw/20210817/15/US/webconnectivity/2021081715_US_webconnectivity.n0.0.jsonl.gz`

Note: The path will be updated in the future to live under `/jsonl/`

Listing JSONL files:
```
s3cmd ls s3://ooni-data-eu-fra/raw/20210817/15/US/webconnectivity/
```

## Raw "postcans" from measurements starting from 20201020

A "postcan" is tarball containing measurements as they are uploaded by the probes, optionally compressed.
Each HTTP POST is stored in the tarball as `<timestamp>_<cc>_<testname>/<timestamp>_<cc>_<testname>_<hash>.post`

Example: `s3://ooni-data-eu-fra/raw/20210817/11/GB/webconnectivity/2021081711_GB_webconnectivity.n0.0.tar.gz`

Listing postcan files:
```
s3cmd ls s3://ooni-data-eu-fra/raw/20210817/
s3cmd ls s3://ooni-data-eu-fra/raw/20210817/11/GB/webconnectivity/
```
