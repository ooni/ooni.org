---
title: "Probe Security Without Identification"
description: "An overview of the current literature on anonymous credentials and how we will be designing and implementing an anonymous credential system for use in OONI Probe."
author: "Michele Orrù"
date: "2025-02-20"
tags: ["ooni", "anonymous credentials", "cryptography"]
categories: ["blog"]
---

Thanks to Toomore Chiang and [OCF community](https://ooni-research.ocf.tw/), this post is available in [Mandarin (zh-tw)](https://ooni-research.ocf.tw/docs/zh-tw/blog/2025/03/2025-probe-security-without-identification/).

{{<figure src="images/chaum.png"
   class="text-center"
   width="60%"
   caption="**Image**: In his seminal paper [_Security without identification: transaction systems to make big brother obsolete_](https://dl.acm.org/doi/10.1145/4372.4373), Chaum envisioned users interacting anonymously with various organizations using a single digital wallet, even if those organizations colluded.">}}

To increase the trustworthiness of [OONI data](https://ooni.org/data/) and protect the OONI dataset from the *intentional or unintentional* submission of faulty measurements, we are considering designing and implementing anonymous credentials within [OONI Probe](https://ooni.org/install/).

In this blog post, we provide an **overview of the current literature on anonymous credentials**. This is intended for curious readers that aren't familiar with the cryptographic primitives and would like to dig into underlying protocols.

## Why create an anonymous credential system for OONI?

OONI works thanks to a global network of volunteers who run tests to detect and document internet censorship worldwide, increasing transparency around digital rights violations. As the [OONI Probe](https://ooni.org/install/) network grows, so does the risk that some users (voluntarily or involuntarily) taint the measurement by supplying faulty data to the submission server. This may either be the result of a deliberate attack aimed at discrediting OONI’s platform by submitting false measurements or just caused by faulty OONI Probe installations.

For example, a malicious actor could upload false measurements from the same network and for only a few websites and within a short timeframe. This would make it relatively easy to spot the false measurements. A more advanced actor could upload false data from multiple networks, related to multiple URLs and in small amounts over a long period of time, making it more difficult to detect their actions. The goal of the attacker in these scenarios could be to pollute the OONI dataset with fake data to cast a shadow of doubt over the platform. Alternatively, they may be interested in using the OONI dataset to spread misinformation about censorship in a specific country or region, for example by claiming that certain sites which are blocked are not blocked or vice-versa.

The common approach to mitigate the risk of faulty measurement pollution is to implement IP-based blocking, user accounts (with registration and login), and device authentication. All of these solutions are not ideal for OONI, since it might expose (and put in danger\!) our community. We have been **investigating possible cryptographic solutions to the problem of signaling trust *without* tracking users or compromising user anonymity**.

OONI's infrastructure is quite specific: privacy for user submissions is prioritized both at the network level, and also at the application level. It is also possible for users to upload measurement data in a way that stronger anonymity properties are preserved by using a circumvention or anonymity tool like [tor](https://www.torproject.org/). Additionally, OONI is in charge of both receiving and maintaining user submissions. The main data flows are structured as shown in OONI’s [backend documentation](https://docs.ooni.org/backend/):

{{<figure src="images/backend.png" class="text-center"  width="50%">}}

Ideally, we would like to step in and establish some trust in the data being submitted. Specifically, we aim to establish trust during the `checkIn(ProbeMeta)` and the `upload(Measurements)` flows, and stop faulty (or evil) probes without changing the round complexity or putting a burden on the user or the server.

In summary, we are looking for an anonymous authentication system that:

* Can scale up to hundreds of verifications per seconds
* Does *not* de-anonymise users
* Allows OONI to implement policies to mitigate potential attacks or erroneous submissions
* Can fit into OONI's measurement upload system
* Assigns a higher trust level to users who contribute to the system for a long period of time
* Penalizes users for uploading bad data

An approach that has been taken in recent years by large VPN providers and content delivery networks, and that we have been closely following, are **anonymous credentials**.

An anonymous credential is a signature but, instead of just revealing it, the signature holder proves (in zero-knowledge) that the attributes satisfy a certain property. Showing a credential can demonstrate that a user has a certain property, but no more. We call this to show a credential. The entity issuing a credential is called an “issuer”; the entity to which a credential is issued to is the “prover”. The entity that verifies the credential is called a “verifier”. In the OONI language, the [OONI Probe](https://ooni.org/install/) is the user, and the [OONI Backend](https://github.com/ooni/backend) is both the issuer and the verifier.

## Literature review: Anonymous credentials

In the world of anonymous credentials, it is possible to distinguish two lines of literature:
(i) **Keyed-verification credentials (KVAC)**, where the issuer and the redeemer are the same entity, and both hold the same signing key. These schemes generally rely on more lightweight cryptography and are, for instance, deployed today in [Signal](https://signal.org/).
(ii) **Public-verification credentials,** where the issuer and the redeemer can be different entities. In this case, the issuer holds a signing key and the redeemer holds the respective verification key. As you might have already guessed, in this case the verifier is unable to produce new credentials. This is the case of large identity projects like [Idemix](https://github.com/IBM/idemix).

There is another axis over which credentials can be seen:

(i) **Single-show credentials,** where a user will present a particular credential and that credential cannot then be used again. They can be blazingly fast, and can even be as simple as a blind signature scheme (even the one invented by David Chaum \[Chaum82\] in the 80s\!). Single use keyed-verification credentials are sometimes called “anonymous tokens” and are often inspired from Verifiable Oblivious Pseudorandom Functions \[[RFC9497](https://datatracker.ietf.org/doc/rfc9497/)\] which internally relies either on the VOPRF of Jareki et al. \[[JarKiaKra14](https://eprint.iacr.org/2014/650.pdf)\], used for the [Privacy Pass IETF](https://datatracker.ietf.org/wg/privacypass/documents/) standard or the Blind RSA signature scheme of Chaum \[[Chaum82](https://sceweb.sce.uhcl.edu/yang/teaching/csci5234WebSecurityFall2011/Chaum-blind-signatures.PDF)\]. Some examples of deployments here are:

* Google's BoringSSL implements anonymous tokens \[[KLOR20](https://eprint.iacr.org/2020/072.pdf)\].
* Blind RSA signatures are also used by [Apple Cloud Relay](https://www.apple.com/icloud/docs/iCloud_Private_Relay_Overview_Dec2021.pdf) and [Google One's VPN service](https://one.google.com/about/vpn/howitworks).

(ii) **Multi-show credentials**, where the user might want to present the same credential multiple times. They were introduced by Anna Lysyanskaya and Jan Camenisch in 2002 (for public verification), and
 Melissa Chase and Sarah Meiklejohn and Greg Zaverucha in 2014 \[CMZ14\] (for keyed verification). Examples include:

* **Based on Camenisch–Lysyanskaya** \[[CamLys01](https://www.iacr.org/archive/eurocrypt2001/20450093.pdf), [CamLys02](https://cs.brown.edu/~alysyans/papers/camlys02b.pdf)\].
  This includes [Bifold](https://github.com/openwallet-foundation/bifold-wallet) and [Aries RFC](https://hyperledger.github.io/aries-rfcs/latest/), both sponsored by the Open Wallet Foundation.

* **Based on Chase–Meiklejohn–Zaverucha** \[[ChaMeiZav14](https://eprint.iacr.org/2013/516), [PoiSan16](https://eprint.iacr.org/2017/1197.pdf)\]. Used in [Signal](https://signal.org/blog/signal-private-group-system/) for private group systems \[[ChaPerZav20](https://signal.org/blog/pdfs/signal_private_group_system.pdf)\], by [NYM Technologies](https://nymtech.net/docs/coconut.html), and Tor for distribution of bridges \[[TulGol23](https://petsymposium.org/popets/2023/popets-2023-0029.pdf)\].
* **Based on BBS signatures** \[[BonBoySha04](https://crypto.stanford.edu/~dabo/papers/groupsigs.pdf), [TesZhu23b](https://eprint.iacr.org/2023/275)\]. This scheme is by far the oldest and most widely used in the public verification setting. BBS is under consideration of the W3C and the IETF: the W3C hosts multiple efforts in this direction, more specifically on [decentralized identity](https://decentralized-id.com/web-standards/w3c/verifiable-credentials/data-integrity-bbs+/) and [verifiable credentials](https://www.w3.org/TR/vc-data-model-2.0/), and mentions BBS in both of them. The IETF currently has an ongoing proposal for [BBS credentials](https://datatracker.ietf.org/doc/draft-irtf-cfrg-bbs-signatures/). In addition, BBS has been [suggested](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/issues/200) as a solution for the European Digital Identity, it is adopted by [Idemix](https://github.com/hyperledger/fabric/blob/main/docs/source/idemix.rst) for their DLOG credentials (Idemix is also implemented by [IRMA](https://github.com/privacybydesign/irmago)) and [Dock](https://github.com/docknetwork/crypto), a blockchain network that provides reusable digital identification and verifiable credentials.

Why would anyone need to present a credential many times? Think about paper identity documents: they are shown many times (but they're also very bad at privacy\!). In OONI, we expect users to submit reports many times, and while we could send a batch of single-show credentials (this is what Cloudflare did in the past with the [Internet Challenge Bypass Privacy Pass](https://research.cloudflare.com/publications/Davidson2018/)), it's not going to be as efficient.

Of course one can imagine an application that gives 1000 one-time tokens, and burns one of them at a time in place of multi-show credentials. However, this would put in the application layer the burden of tuning the number of credentials to be issued and when to refresh the pool of tokens to be spent. Schemes that are native specifically for the multi-show setting are much more efficient.

{{<figure src="images/credentials-hardness.png"
   class="text-center"
   width="60%"
   figcaption="**Image**: A classification of the three main approaches at building anonymous credentials, from simpler (on the left) to harder (on the right).">}}

Beyond the basic credential system, where a user can just say that they are a user which has been previously “trusted” by the system, there are numerous optional features that can be proven anonymously to the server. These cryptographic extensions include:

* **Expiry:** Implementing time-based validity periods for credentials.
* **Network-dependent identity:** Keeping users unlinkable across networks, but maintain a consistent ephemeral identifier within the same network.
* **Threshold issuance:** Putting some trusted authorities in charge of issuing credentials, and making collective decisions about who shouldn't have access to them.
* **Revocation:** Enabling the removal of compromised or expired credentials.
* **Issuer-blindness:** Preventing the issuer from learning the contents of the credentials they sign.
* **Range Proofs:** Proving numeric attributes fall within specific ranges.
* **Credential Bridging:** Linking credentials across different systems while maintaining privacy.

These features can be implemented independently of the underlying credential system \[[Orru24](https://eprint.iacr.org/2024/1552.pdf)\], allowing for flexible deployment based on specific needs. While each feature introduces its own computational and storage overhead, these trade-offs can be evaluated separately from the core credential protocol.

{{<figure src="images/credentials-table.png"
   class="text-center"
   caption="**Image**: An overview of the landscape of anonymous credentials in theoretical cryptography, with OONI's positioning.">}}

Outside of the scientific literature, looking at **today's ecosystem of deployed credentials**, from mature old companies to wild and free early blockchain projects, it is possible to see three categories:

1. ***Credentials obtained from generic blind signatures.***
   These credentials are very lightweight, but make a trade off between efficiency and usability by constraining the features that can be supported and the number of shows. A number of show-once credentials have been created in the past years, especially in the keyed-verification setting where Verifiable Oblivious Pseudorandom Functions have emerged as the leader. Despite their simplicity, issuing these signatures in the discrete logarithm setting requires **more than** 1 round of interaction.

2. ***Credentials obtained choosing zk-friendly signature schemes and message authentication codes.***
   This approach consists of picking a signature scheme that has nice “algebraic” properties. If these “algebraic” properties are compatible with the algebra that is done in a zero-knowledge proof system, the result is an anonymous credential where one can prove anything that the underlying zero-knowledge proof system can support. These signatures, for instance, do not need to rely on a hash function, and are often based on groups where the discrete logarithm problem is hard. One nice fact about these constructions is that they can be done with 1 round of interaction: at issuance, the user can ask for a credential and the server responds with it.

3. ***Credentials obtained leveraging zero-knowledge proofs.***
   This broad class of credentials generally relies on SNARKs and recursive SNARKs, and generally boils down to proving signature verification for a standardized, common signature scheme, or all the way removing signatures, and creating Merkle trees of secret keys in possession of users and then proving statements of membership and non-membership in order to authenticate. This class generally lacks a public provable-security formalization.
   This class is quite common in cases, such as blockchain scenarios, where it's hard to identify a single entity (or a small group) of signers that can approve users. It is hard to see any formalization of this approach in the theory. Here are two examples:

   * The [Semaphore library](https://semaphore.pse.dev/) and [Anon Aadhaar protocol](https://pse.dev/en/projects/anon-aadhaar) from Privacy Scaling Explorations (PSE) are a collection of tools used for building applications that leverage anonymous signaling on the Ethereum blockchain, relying on general-purpose zero-knowledge succinct arguments (zk-SNARKs).
   * [Zupass](https://github.com/proofcarryingdata/zupass) is an authentication system based on the proof-carrying data paradigm.

Signature-based schemes with efficient protocols seem to give us everything we need: one-round interaction, solid security proofs, and room to grow \- all while keeping things snappy and scalable.

Anonymous credentials seem to be a great alternative to user logins and location-based blocking. For us, they can strengthen our measurement platform *without* compromising what matters most: the privacy and safety of our amazing volunteer community who make OONI's censorship measurements possible.

We're already tinkering with a prototype, and we can't wait to share our progress with you. 🚀
