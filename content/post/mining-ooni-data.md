---
title: "I have hands, how can I mine OONI data?"
author: "Leonid Evdokimov, Arturo Filastò"
date: "2018-02-07"
tags: ["technology"]
categories: ["blog"]
---

**Attention:** *The documentation below is out of date as we are currently working on migrating our data to a new more user friendly data format. Please contact us if you need access to the raw data with details about your use case so we can further advise.*

[OONI Explorer](https://explorer.ooni.io/) and the [OONI API](https://api.ooni.io/)
provide access to [the data OONI gathers](/data/). As these tools currently present some limitations, we publish this post to share other options for researchers interested in digging through OONI data. These options are either currently available or can be made available [upon request](/about/#contact).

There is another important caveat: The data uploaded by OONI Probes is made
available in daily batches, so it may take up to 48 hours for the measurements
to become available in OONI Explorer, OONI API and other sources of OONI data.

## Raw data

Thanks to the [Amazon Open Data program](https://aws.amazon.com/government-education/open-data/), the whole OONI dataset can be fetched from the [`ooni-data` Amazon S3 bucket](https://ooni-data.s3.amazonaws.com/).

To access the S3 buckets we recommend you either use the [AWS Command Line
Interface](https://aws.amazon.com/cli/) or the [AWS SDK for Python
(boto)](https://aws.amazon.com/sdk-for-python/).

There are two prefixes available within the bucket:

- `autoclaved/jsonl.tar.lz4/` dataset compressed to ~1.7 terabytes with
  [tar](https://en.wikipedia.org/wiki/Tar_(computing)) and [LZ4](http://www.lz4.org),
  growing at ~5.5 gigabytes per day
- `autoclaved/jsonl/` containing uncompressed data, ~7.4 terabytes, having one file
  per report with median file size around 4kb that makes it unsuitable for speedy
  data transfers

In each of these prefixes you will find one directory (a "daily bucket") for
every day of the year (example: `s3://ooni-data/autoclaved/jsonl/2017-11-23`). It's worth noting that the "daily bucket" dates are not necessarily the dates of the measurements, but the dates of when particular sets of measurements
were processed by the pipeline.

There is also the legacy `sanitised/` prefix in the bucket, but it hasn't been updated since 2017-10-02 and is scheduled for removal. 

You can find information about the base data formats inside of
[ooni-spec/data-formats](https://github.com/TheTorProject/ooni-spec/tree/master/data-formats).

The data format for every test is also specified inside of
[ooni-spec/test-specs](https://github.com/TheTorProject/ooni-spec/tree/master/test-specs).

Note: The JSON schema is not entirely enforced on data ingestion, so there may
be some slight difference between the schema specification and the actual data.

The command-line `lz4` tool supporting LZ4 format is packaged as `liblz4-tool` for
_Debian 9 (stretch)_ and _Ubuntu 16.04 (xenial)_, older versions may fail with the following error message: `Error 64 : Does not support stream size`.

### jsonl

Each file inside of the `jsonl` "daily bucket" has the following format:

```
${UTCTIMESTAMP}-${COUNTRY_CODE}-AS${AS_NUMBER}-${TEST_NAME}-${REPORT_ID}-0.2.0-probe.json
```

Example:

```
20171123T012056Z-YE-AS30873-ndt-20171122T162015Z_AS30873_AkAI5sg9XxaVlGlGaGO1fiab5M03iu7ntXEiT2uN5ojtBXIdzr-0.2.0-probe.json
```

You can list the files related to a particular date using the [AWS CLI](https://aws.amazon.com/cli/):

```
aws s3 --no-sign-request ls s3://ooni-data/autoclaved/jsonl/2017-11-23/
```

### jsonl.tar.lz4

The `jsonl.tar.lz4` "daily buckets" contain one or more LZ4 compressed
files for every
[OONI Probe test type](https://github.com/TheTorProject/ooni-spec/tree/master/test-specs).

The file format is: `${TEST_NAME}.${NUM}.tar.lz4` for small sets of files.

Example:

```
...
2017-11-24 02:29:10    1485166 tcp_connect.0.tar.lz4
2017-11-24 02:29:01      18463 telegram.0.tar.lz4
2017-11-24 02:29:01      86817 vanilla_tor.0.tar.lz4
2017-11-24 02:29:01   10949785 web_connectivity.00.tar.lz4
2017-11-24 02:29:02   10151077 web_connectivity.01.tar.lz4
2017-11-24 02:29:02   10698714 web_connectivity.02.tar.lz4
2017-11-24 02:29:04   10664260 web_connectivity.03.tar.lz4
...
```

The format is the same as `jsonl` (with the `.lz4` extension) for
larger files (currently 64MB).

Example:

```
...
2017-11-24 02:28:57   23481332 20171122T190819Z-RO-AS8708-web_connectivity-20171122T190820Z_AS8708_btrNW56GZOToKz1RAIxqRBuEsjAVeI4lp3Rt0qd4owWqUcYdTY-0.2.0-probe.json.lz4
2017-11-24 02:28:58   27249867 20171122T230746Z-US-AS20001-web_connectivity-20171122T230747Z_AS20001_FvWLlFFUg2K7UCY9BCZsdv3qp2DvhPPl2WHFmvmgUJ7sYaWOrJ-0.2.0-probe.json.lz4
...
```

You can list the files related to a particular date using the [AWS CLI](https://aws.amazon.com/cli/):

```
aws s3 --no-sign-request ls s3://ooni-data/autoclaved/jsonl.tar.lz4/2017-11-23/
```

You should run the `aws` command with the `--no-sign-request` option, to
disable signing of requests (ex. `aws --no-sign-request s3 ls s3://ooni-data/autoclaved/jsonl.tar.lz4/2017-11-23/`).

A `gzip` compressed newline separated JSON index file (`index.json.gz`) is also
available in every "daily bucket" root (example:
`s3://ooni-data/autoclaved/jsonl.tar.lz4/2017-11-23/index.json.gz`).
The file stores metadata to make the tarballs seekable. You don't have
to parse information on LZ4 frames unless you want to `seek()` to the specific
measurement, as decompressing tarballs with `tar -I lz4 --extract …` should work.

Every row of the index file contains a JSON document with metadata that is
useful to find the measurements you care about inside of a given daily bucket.

The ordering of the rows inside of the index file matters!

Each document has a `type` key that can be one of:

* `file`: used to indicate the beginning of metadata pertaining to a particular compressed file. It will have the `filename` key which tells you which file it's related to (example: `2017-11-23/web_connectivity.02.tar.lz4`).

* `/file`: used to indicate the end of metadata pertaining to a particular file (it will be followed by another `file` document).

* `frame`: used to indicate the beginning of a LZ4 frame. A document of this type will also have the following keys `file_off` (the offset into the compressed file to the beginning of this frame), `file_size` (the total compressed size of this frame), `text_off` (the uncompressed offset to the beginning of the tar file), `text_size` (the total uncompressed size of this frame).

* `/frame`: used to indicate the end of a LZ4 frame.

* `report`: used to indicate the beginning of a particular report file (what you would find as a distinct file in the `autoclaved/jsonl` prefix). It also has the following keys: `textname` the path to the jsonl report file (example: `2017-11-23/20171122T003814Z-RU-AS8427-web_connectivity-20171122T003815Z_AS8427_V52os5wKkSAWHvoXDPJ5aRTmcLPSFcgg3HOfDPrMG9OKZ1HcWd-0.2.0-probe.json`), `orig_sha1` a base64 encoded sha1 hash of the _incomming_ report file, `src_size` the uncompressed filesize in bytes.

* `/report`: used to indicate the end of the previously "open" report file.

* `datum`: used to indicate the presence of an individual measurement. The other keys present are: `text_off` (the offset into the uncompressed tar file to the beginning of this measurement), `text_size` (the overall uncompressed size of this measurement), `orig_sha1` (a base64 encoded sha1 hash of the _incomming_ measurement).

## Metadata as PostgreSQL dump

If you don't need the whole dataset, you may get a PostgreSQL (9.6) database dump
that holds some metadata about every measurement collected and you can run SQL queries
on it. That may be much faster if you need some aggregate statistics or you
need to know which subset of measurements you need to download for further processing.

The most sizable data that is removed is the response body of web pages. The uncompressed
database size is ~230 gigabytes (as of 2018-02-03) including some indexes growing at ~0.75
gigabytes per day. The dump compressed for data transfer is around three times
smaller. [Let us know](/about/#contact) if that's useful for you!

## Metadata as a service

If the metadata database is enough (or useful) for your analysis and you know how
to run SQL queries, but you have no resources to run your own PostgreSQL server
instance, you can [request](/about/#contact) access to the sandboxed read-only
OONI metadata DB instance.

## OONI API

The [OONI API](https://api.ooni.io/api/) is nice for cursory analysis or some integrations with other systems
(e.g. OONI Explorer relies on it), but it's currently not possible to run any
dataset scan that runs for more than a minute using the OONI API. So the API is not
the best option if the query does heavy scanning of metadata. Also,
implementation of pagination in the OONI API `next_url` is far from perfect and
may fail with greater than zero offsets.

Rule of thumb: If the OONI API is slow for you (i.e. your request takes more than half a
minute) or you need more than a couple thousands of API requests to achieve
your goal, you should consider sending SQL queries directly to some instance of
metadata DB as you'll likely be able to achieve your goal significantly faster
that way.

## Outro

This post does not represent the _desired_ state of the OONI API and OONI data
availability, but highlights current limitations and possible alternative
methods to achieve various research goals.
