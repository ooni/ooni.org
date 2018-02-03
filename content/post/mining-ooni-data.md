---
title: "I have hands, how can I mine OONI data?"
author: "Leonid Evdokimov"
date: "2018-02-02"
tags: ["technology"]
categories: ["blog"]
---

[OONI Explorer](https://explorer.ooni.io/) and [OONI API](https://api.ooni.io/)
provide access to [the data OONI gathers](/data/), but these two tools are currently
not the best ones for a researcher wanting to dig through the entire OONI
dataset or access some big slice of it.

This post describes other options that are either currently available or can be
made available [upon request](/about/#contact).

## Raw data

First of all, whole OONI dataset can be fetched from
the [`ooni-data` Amazon S3 bucket](https://ooni-data.s3.amazonaws.com/),
thanks to the [Amazon Open Data program](https://aws.amazon.com/government-education/open-data/).

To access the S3 buckets we recommend you use either the [AWS Command Line
Interface](https://aws.amazon.com/cli/) or the [AWS SDK for Python
(boto)](https://aws.amazon.com/sdk-for-python/).

There are two prefixes available within the bucket:

- `autoclaved/jsonl.tar.lz4/` dataset compressed to ~1.7 terabytes with
  [tar](https://en.wikipedia.org/wiki/Tar_(computing)) and [LZ4](http://www.lz4.org),
  growing at ~5.5 gigabytes per day
- `autoclaved/jsonl/` containing uncompressed data, ~7.4 terabytes, having one file
  per report with median file size around 4kb that makes it unsuitable for speedy
  data transfers

There is also `sanitised/` prefix in the bucket, it's legacy one, it's not
updated since 2017-10-02 and is scheduled for removal.

You can read more about our data format inside of
[ooni-spec](https://github.com/TheTorProject/ooni-spec) repository, but, beware,
JSON schema is not enforced on data ingestion, so there may be some data that
does not fit into the schema perfectly.

Command-line `lz4` tool supporting LZ4 format is packaged as `liblz4-tool` for
_Debian 9 (stretch)_ and _Ubuntu 16.04 (xenial)_, older version may fail with
`Error 64 : Does not support stream size` error message.

## Metadata as PostgreSQL dump

If you don't need the whole dataset, you may get a PostgreSQL (9.6) database dump
that holds some metadata about every measurement collected and you can run SQL queries
on it. That may be much faster if you need some aggregate statistics or you
need to know which subset of measurements you need to download for further processing.

The most sizable data that is removed is the response body of web pages. Uncompressed
database size is ~230 gigabytes (as of 2018-02-03) including some indexes growing at ~0.75
gigabytes per day. The dump compressed for data transfer is ~three times
smaller. [Tell us](/about/#contact) if that's useful for you!

## Metadata-as-a-service

If metadata database is enough (or useful) for your analysis and you know how
to run SQL queries, but you have no resources to run your own PostgreSQL server
instance, you may [ask us](/about/#contact) for access to sandboxed read-only
OONI metadata DB instance.

## OONI API

The [OONI API](https://api.ooni.io/api/) is nice for cursory analysis or some integrations with other systems
(e.g. OONI Explorer relies on it), but it's currently not possible to run any
dataset scan that runs for more than a minute using the OONI API. So the API is not
the best option if the query does heavy scanning of metadata. Also,
implementation of pagination in the OONI API `next_url` is far from perfect and
may fail with greater than zero offsets.

Rule of thumb: if the OONI API is slow for you (your request takes more than half a
minute) or you need more than a couple thousands of API requests to achieve
your goal, you should consider sending SQL queries directly to some instance of
metadata DB as you'll likely be able to achieve your goal significantly faster
that way.

## Outro

This post does not represent _desired_ state of OONI API and OONI Data
availability, but highlights current limitations and possible alternative
methods to achieve various research goals.
