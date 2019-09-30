# OONI Monthly Report: July 2019

In July 2019, the OONI team made progress on many fronts: fast-path pipeline, RSS feed generator, OONI Probe mobile and desktop apps, new OONI Explorer, OONI Probe Orchestration System, ndt7, and on making OONI Probe testing more resilient to network outages. We also held a team meeting to roadmap for the next 12 months, and we attended the Tor Meeting and the Citizen Lab Summer Institute (CLSI). Further details are provided below.

## Progress on fast-path pipeline

Currently the OONI data processing pipeline takes ~24 hours to publish new measurements from around the world. Our aim is to reduce this latency to less than daily.

To this end, we have been working on the implementation of a fast-path pipeline: https://github.com/ooni/spec/issues/145

As part of ingesting metadata from OONI Probe tests, the fast-path does feature extraction for Web Connectivity. As new OONI Probe tests are shipped, more logic can be added for the other tests. 

The fast-path also aims at increasing performance compared to the existing implementation and will eventually allow the reprocessing of previously collected data, including newer test types (such as instant messaging tests).

The new pipeline adds more flexible heuristics and implements blocking event detection that will be used by the RSS Feed generator, OONI Explorer, and other projects.

## Progress on RSS Feed generator

Progress was made on implementing an RSS feed generator for confirmed instances of blocking based on metrics calculated in the OONI data processing pipeline.

This work can be found here: https://github.com/ooni/pipeline/pull/204

## Progress on OONI Probe mobile apps

In preparation for the OONI Probe Mobile 2.2.0 release, we implemented the following:
    
On Android:

* Faster measurement resubmission: https://github.com/ooni/probe-android/pull/247
* API to fetch measurement URL: https://github.com/ooni/probe-android/pull/246
* Tests with json: https://github.com/ooni/probe-android/pull/244

On iOS:
    
* Faster measurement resubmission: https://github.com/ooni/probe-ios/pull/302
* Bug fixes: https://github.com/ooni/probe-ios/pull/301
* Call delete function: https://github.com/ooni/probe-ios/pull/300
* Log file removal: https://github.com/ooni/probe-ios/pull/299
* API to fetch measurement URL: https://github.com/ooni/probe-ios/pull/293
* Tests with json: https://github.com/ooni/probe-ios/pull/292

We released the 2.2.0-beta TestFlight for OONI Probe on iOS.

## Progress on OONI Probe desktop apps

We continued to make progress on the OONI Probe desktop apps: https://github.com/ooni/probe-desktop/pull/32 & https://github.com/ooni/probe-desktop/pull/33 

We started adding support for auto-update: https://github.com/ooni/probe-desktop/pull/37 

We also released an updated version of the beta: https://github.com/ooni/probe-desktop/releases/tag/v3.0.0-beta.4

## Progress on revamping OONI Explorer

In preparation for the launch of the revamped OONI Explorer, we continued to make a series of improvements to the beta (https://explorer-beta.ooni.io/) throughout July 2019. More specifically, we merged the following pull requests:

https://github.com/ooni/explorer/pull/238
https://github.com/ooni/explorer/pull/237
https://github.com/ooni/explorer/pull/233
https://github.com/ooni/explorer/pull/231
https://github.com/ooni/explorer/pull/230
https://github.com/ooni/explorer/pull/227
https://github.com/ooni/explorer/pull/226
https://github.com/ooni/explorer/pull/225
https://github.com/ooni/explorer/pull/224
https://github.com/ooni/explorer/pull/223
https://github.com/ooni/explorer/pull/221
https://github.com/ooni/explorer/pull/216
https://github.com/ooni/explorer/pull/211
https://github.com/ooni/explorer/pull/210
https://github.com/ooni/explorer/pull/209
https://github.com/ooni/explorer/pull/208
https://github.com/ooni/explorer/pull/206
https://github.com/ooni/explorer/pull/205
https://github.com/ooni/explorer/pull/203
https://github.com/ooni/explorer/pull/199
https://github.com/ooni/explorer/pull/196

During the Citizen Lab Summer Institute (CLSI), we facilitated a session where we provided a sneak peek to the beta version of the new OONI Explorer, during which participants shared very useful feedback. We will be incorporating most of the feedback before the stable release.

## Making OONI Probe testing more resilient to network outages

As part of our goal to make OONI Probe testing more resilient to network outages (i.e. being able to run some OONI Probe tests even when there is limited or missing internet connectivity), we have been working on a series of activities (such as adding support for re-uploading (non-uploaded) measurements: https://github.com/ooni/probe/issues/838 & https://github.com/ooni/probe/issues/846).

During July 2019, we made progress on the following:

* Improving the manual measurement upload performance: https://github.com/ooni/probe/issues/861
* Ensuring that measurement-kit works during network outages: https://github.com/measurement-kit/measurement-kit/issues/1866 (MK v0.10.5: https://github.com/measurement-kit/measurement-kit/milestone/20)
* Faster development cycles: https://github.com/measurement-kit/measurement-kit/issues/1867

## Progress on ndt7

We continued to make progress on the development of ndt7 (next generation speed test): https://github.com/m-lab/ndt7-client-go/issues/16 & https://github.com/measurement-kit/libndt/milestone/4

##  Progress on Probe Orchestration

We continued to make progress on the OONI Probe Orchestration System and we made a release with improvements: https://github.com/ooni/orchestra/releases/tag/v0.3.0

In 0.3.0 we added support for returning the full list of URLs by default, making it possible for clients to test the full URL list.

## Tor Meeting

The OONI team traveled to Stockholm, Sweden, to attend the Tor Meeting between 12th-14th July 2019: https://trac.torproject.org/projects/tor/wiki/org/meetings/2019Stockholm

As part of the Tor Meeting, we participated in the following sessions:

* State of the Onion: We presented OONI's work over the last months (since the last Tor Meeting in Mexico)

* Anti-censorship: Collaborating with Tor's new anti-censorship team on making Tor more resilient to censorship (for example, through the development on new OONI Probe tests for pluggable transports)

* Responding faster to emergent censorship events

* User research coordination with local communities

## OONI Team Meeting

Given that the Tor Meeting was only hosted for 3 days this time and that the OONI team is quite distributed geographically, we used most of the Tor Meeting to facilitate OONI sessions as part of the OONI Team Meeting.

The OONI Team Meeting consisted of the following sessions:

* Roadmap for the next 12 months

* OONI Probe Desktop: Next Steps

* OONI Probe Mobile: Next Steps

* OONI Explorer: Next Steps

* OONI Pipeline Priorities

* OONI Infrastructure: Next Steps

* New OONI Probe nettests

* OONI Needs

* Fundraising

The notes from the sessions of the OONI Team Meeting are available here: https://trac.torproject.org/projects/tor/wiki/org/meetings/2019Stockholm/Notes/OONI

## Community activities

### Citizen Lab Summer Institute (CLSI)

OONI's Sarath, Arturo, and Maria participated at the Citizen Lab Summer Institute (CLSI) in Toronto, Canada, between 31st July to 2nd August 2019 (https://citizenlab.ca/summerinstitute-2019/).

At the CLSI, we facilitated the following sessions:

1. Presenting network measurements, the new OONI Explorer & beyond, https://docs.google.com/document/d/e/2PACX-1vQ9d__mLXzK3ngw-8YA3fvkMIQ3VMDY3h3WCubP1bvT-_My85rMoD1W3Z_vzo5rJPhFoSDjVHl-smqO/pub#h.yiw9u34e3flg

2. Censorship Measurement Campaigns: A decentralized approach to measuring and responding to internet censorship events, https://docs.google.com/document/d/e/2PACX-1vQ9d__mLXzK3ngw-8YA3fvkMIQ3VMDY3h3WCubP1bvT-_My85rMoD1W3Z_vzo5rJPhFoSDjVHl-smqO/pub#h.k3ynl29ntpo2

### Blog post about OONI

Redes Ayuda published a blog post (in Spanish) about OONI: https://redesayuda.org/2019/07/17/ooni-la-app-que-comprueba-en-tiempo-real-un-bloqueo-en-internet/

## Userbase

In July 2019, OONI Probe was run 356,191 times from 5,090 different vantage points in 205 countries around the world.

This information can also be found through our stats: https://api.ooni.io/stats

~ The OONI team.