---
title: "Announcing OONI's New Anonymous Credential System"
description: "A high-level look at how OONI is designing and building an anonymous credential system for OONI Probe."
author: "Michele Orrù"
date: "2026-01-12"
tags: ["ooni", "anonymous credentials", "cryptography"]
categories: ["blog"]
---


In our previous posts, we outlined [why OONI requires an anonymous credential system](/post/2025-probe-security-without-identification/) and detailed the [security and privacy requirements](/post/2025-requirements-for-oonis-anonymous-credentials/) such a system must satisfy. We highlighted the core challenge: OONI needs to establish trust in submitted measurements without creating identifiers that could reveal user identity or allow cross-network tracking.

Anonymous credentials offer a cryptographic mechanism to authenticate certain properties of a probe — such as long-term participation or measurement volume — without exposing who the user is, where they are, or linking their activity across networks.

## OONI's requirements

To meet OONI’s threat model, a credential system must satisfy several constraints:

- **Prevent cross-network linkability**, supporting network-local identifiers only.
- **Authenticate metadata** (probe_age, measurement_count, blocklist/trust status) without revealing raw values or compromising anonymity.
- **Resist forgery and Sybil attacks**, ensuring malicious actors cannot easily create or manipulate identities.
- **Support frequent multi-show presentations**, since probes upload measurements continuously.
- **Avoid narrowing anonymity sets**, even when additional metadata is included in measurements.

Existing credential ecosystems (blind-signature-based, zk-friendly signatures, SNARK-based constructions) each satisfy some of these requirements but not all. In particular, OONI needs **issuer-local verification**, **efficient range proofs**, **network-dependent pseudonyms**, and **credential update protocols**. No off-the-shelf system met these constraints without significant compromises.

## Building a modular, expressive credential framework

In collaboration with Ian Goldberg (University of Waterloo), Lindsey Tulloch (Tor Project), and Victor Graf (Risc Zero), we built a layered system for building zero-knowledge credentials and protocols. Three Rust crates (*cmz*, *sigma-compiler*, and *sigma-proofs*) implementing well-studied sigma-protocols and compile high-level statements into efficient linear-algebraic proof statements.
In parallel, CFRG drafts for these protocols are being built (draft-irtf-cfrg-sigma-protocols, draft-irtf-cfrg-fiat-shamir).

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

This ensures:

- the probe keeps the same network-local pseudonym
- the measurement count increments monotonically
- the age bucket stays correct
- OONI cannot see raw values — only proven statements
- a malicious client cannot forge trust metadata

The *server sees only the proof*, not the underlying attributes.
The attribute `measurement_count` is used to assess a user's participation in the network, not to rate-limit users.

### XXX integration with Golang??

## What's next

OONI users will soon be able to filter or annotate measurements by:

- long-running vs. fresh probes
- high-volume contributors
- blocklisted or faulty probes
- trusted institutional probes

While full Sybil-resistance remains an application-layer problem (e.g. registration rate-limiting), authenticated measurement_count and probe_age buckets provide meaningful friction to would-be attackers.

If you’re a cryptographer, implementer, or just curious, **we welcome feedback** — this work is meant to serve the global OONI community safely and transparently.

Stay tuned for deeper dives into the protocol design, performance benchmarks, and how sigma-rs will ship inside the next major OONI Probe release.
