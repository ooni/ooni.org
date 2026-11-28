---
title: "Security Audit: OONI Anonymous Credential System"
description: "This blog post shares the penetration test report for the OONI Anonymous Credential System."
author: "Maria Xynou"
date: "2026-11-28"
tags: ["security-audit", "penetration-test", "anonymous credentials", "cryptography", "ooni"]
categories: ["blog"]
---

Earlier this year, we [announced](https://ooni.org/post/2025-announcing-ooni-new-anonymous-credential-system/) OONI's new Anonymous Credential System, which lets us cryptographically verify properties of the probes that submit measurements, such as how long they've been contributing and how many measurements they've sent, without revealing who is running them. This helps increase trust in [OONI data](https://ooni.org/data/) while protecting the privacy and security of [OONI Probe](https://ooni.org/install) users.

As part of our free software ethos and community commitment to deliver secure, high quality [code](https://github.com/ooni), we are publishing the full report of the penetration test that [Radically Open Security](https://www.radicallyopensecurity.com/) conducted on the OONI Anonymous Credential System.

{{< oonibtn href="/documents/2026-ooni-anonymous-credentials-penetration-test-report.pdf" text="Download Security Report" >}}

Radically Open Security carried out a crystal-box penetration test between May 4, 2026 and July 4, 2026. They examined the Rust implementation, the Python bindings, and the cryptographic implementation of the following targets:

*   [OONI UserAuth](https://github.com/ooni/userauth/), the library that lets OONI Probes prove they are authorized to submit measurements
*   [sigma-proofs](https://github.com/sigma-rs/sigma-proofs/)
*   [sigma-compiler](https://github.com/sigma-rs/sigma-compiler/)
*   [CMZ](https://github.com/sigma-rs/cmz)

During this penetration test, Radically Open Security discovered one High, one Moderate and two Low-severity issues, plus one informational finding with no severity rating. We have **resolved all identified issues**.

Most notably, Radically Open Security found that the authorization proofs could be replayed and that the probe encoding was ambiguous, but they expect both issues to have relatively minor impact in the production application. Through fuzzing, they also uncovered several crashes. As they consider fuzzing a valuable way to find bugs in unexpected places, they have made their fuzzing harnesses available to us so that we can keep using and building on them.

Overall, Radically Open Security considers the **proofs and the cryptographic implementation of the OONI Anonymous Credential System to be sound**. Further details are available in the full [report](/documents/2026-ooni-anonymous-credentials-penetration-test-report.pdf).

We thank [Radically Open Security](https://www.radicallyopensecurity.com/) for their thorough audit and valuable contributions to strengthening the security of the OONI Anonymous Credential System. We also thank the [Open Technology Fund (OTF)](https://www.opentech.fund/) for [supporting](https://www.opentech.fund/projects-we-support/supported-projects/ooni-anonymous-credentials/) this security audit, as well as the overall creation of the system.