---
title: "Announcing OONI's New Anonymous Credential System"
description: "A high-level look at how OONI is designing and building an anonymous credential system for OONI Probe."
author: "Michele Orrù"
date: "2026-01-22"
tags: ["ooni", "anonymous credentials", "cryptography"]
categories: ["blog"]
---


In our previous posts, we outlined [why OONI requires an anonymous credential system](/post/2025-probe-security-without-identification/) and detailed the [security and privacy requirements](/post/2025-requirements-for-oonis-anonymous-credentials/) such a system must satisfy. We highlighted the core challenge: OONI needs to establish trust in submitted measurements without creating identifiers that could reveal user identity or allow cross-network tracking.

Anonymous credentials offer a cryptographic mechanism to authenticate certain properties of a probe without exposing who the user is, or linking their activity across networks. 

## OONI's requirements

To meet OONI’s threat model, a credential system must satisfy several constraints. 
We want network-local identifiers only, ensuring malicious actors cannot easily create or manipulate identities. 
We want to be able to authenticate the metadata (like age, measurement count, and trust status) without revealing the raw values or compromising anonymity. 

Existing credential ecosystems (blind-signature-based, zk-friendly signatures, SNARK-based constructions) each satisfy some of these requirements but not all. In particular, OONI needs **issuer-local verification**, **efficient range proofs**, **network-dependent pseudonyms**, and **credential update protocols**. No off-the-shelf system met these constraints without significant compromises.

## Building a modular, expressive credential framework

In collaboration with Ian Goldberg (University of Waterloo), Lindsey Tulloch (Tor Project), and Victor Graf (Risc Zero), we built a layered system for building zero-knowledge credentials and protocols. Three Rust crates ([*cmz*](https://github.com/sigma-rs/cmz), [*sigma-compiler*](https://github.com/sigma-rs/sigma-compiler), and [*sigma-proofs*](https://github.com/sigma-rs/sigma-proofs)) implementing well-studied sigma-protocols and compile high-level statements into efficient linear-algebraic proof statements.
In parallel, CFRG drafts for these protocols are being built ([draft-irtf-cfrg-sigma-protocols](https://datatracker.ietf.org/doc/draft-irtf-cfrg-sigma-protocols/), [draft-irtf-cfrg-fiat-shamir](https://datatracker.ietf.org/doc/draft-irtf-cfrg-fiat-shamir/)).

Some of the features provided that are particularly useful for OONI are:

1. **Multi-show, issuer-local verification.**
OONI’s usage pattern resembles KVAC credentials (issuer=verifier), which the CMZ and μCMZ schemes support out of the box.
2. **Efficient range proofs.**
Coarse ranges for probe_age and measurement_count (e.g. >1 week, >1k measurements) are essential to avoid creating near-unique tuples.
The sigma-rs stack supports these range proofs compactly.
3. **Network-local pseudonyms.**
A probe must appear as *one identity per network*, but remain unlinkable across networks.
This maps naturally onto the attribute and constraint system used by sigma-rs (e.g., pseudonym = secret * DOMAIN).
4. **Issuance + update protocols.**
Our model requires showing an old credential and receiving a new updated one (incrementing measurement_count) without revealing underlying values — exactly the pattern described in the UserAuth example.

## What OONI’s credential looks like

OONI’s anonymous credential includes the following attributes:

```rust
CMZ! { UserAuthCredential:
    nym_id, // a stable per-installation secret
    age, // coarse bucket
    measurement_count // measurements submitted
}
```

These match the additional metadata we described in our requirements post while respecting anonymity constraints.

### A high-level view of our “submit measurement” protocol

Using the sigma-rs μCMZ API, the protocol for submitting a new measurement looks schematically like:

```rust
muCMZProtocol!(submit<min_age_today, max_age, min_measurement_count, max_measurement_count, @DOMAIN, @NYM>,
    Old: UserAuthCredential { nym_id: H, age: H, measurement_count: H},
    New: UserAuthCredential { nym_id: H, age: H, measurement_count: H},
    // the per-installation secret is the same
    Old.nym_id = New.nym_id,
    // the age is the same
    Old.age = New.age,
    // the new measurement count is increased
    New.measurement_count = Old.measurement_count + 1,
    // the submitted NYM is correct
    NYM = Old.nym_id * DOMAIN,
    // the age and measurement counts are within the desired range
    (min_age_today..=max_age).contains(Old.age),
    (min_measurement_count..=max_measurement_count).contains(Old.measurement_count) );
```

This ensures that the probe has the same network-local pseudonym and satisfies the freshness policy for that network; updates the measurement count. OONI cannot see raw attributes, it *sees only the proof*, and has the guarantee that the authentication policy is enforced.

The attribute `measurement_count` is used to assess a user's participation in the network, not to rate-limit users.

## What's next

OONI users will soon be able to filter or annotate measurements by:

- long-running vs. fresh probes
- high-volume contributors
- trusted institutional probes

Additionally, OONI will be able to mitigate attacks and enforce transparent access policies that filter by `measurement_count` and  `probe_age` buckets, mitigating the risk of attacks. Malicious probes can be blocklisted on a per-nym basis. 

We inverstigated the ability of blocklisting for full-credentials, however this seems to require more expensive cryptography (paring-friendly elliptic curves or proofs of hash preimages). We haven't found a solution that would meet our performance and maintenability requirements, but we think this is an exciting a very interesting area for further research.

If you’re a cryptographer, implementer, or just curious, **we welcome feedback** — this work is meant to serve the global OONI community safely and transparently.

Stay tuned for deeper dives into the protocol design, performance benchmarks, and how sigma-rs will ship inside the next major OONI Probe release.
