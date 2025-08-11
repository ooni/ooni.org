---
title: "OONI Security Audit: Penetration Test Report"
description: "This blog post shares a penetration test report for OONI services and infrastructure."
author: "Maria Xynou, Arturo Filastò"
date: "2025-08-11"
tags: ["security-audit", "penetration-test"]
categories: ["blog"]
---

As part of our free software ethos and community [commitment](https://ooni.org/post/ooni-software-development-guidelines/) to deliver secure and high quality [code](https://github.com/ooni), we are publishing the detailed penetration test report conducted by [Radically Open Security](https://www.radicallyopensecurity.com/) with support from the [Open Technology Fund (OTF)](https://www.opentech.fund/).

{{< oonibtn href="/documents/ooni-penetration-test-report.pdf" text="Download Security Report" >}}

This report contains the results of a crystal box penetration test — a core part of our broader security audit process – carried out between August 5, 2024 and October 18, 2024. The security audit focused on evaluating the core components of OONI’s software to ensure they meet high standards of security and quality.

Specifically, the scope of the penetration test included the following OONI targets:
* [Devops systems](https://github.com/ooni/devops/)
* [OONI API](https://github.com/ooni/backend/tree/master/ooniapi)
* [Backend services](https://github.com/ooni/backend)
* [Cross-platform development architecture plan](https://github.com/ooni/probe-multiplatform)
* [OONI Run v2 implementation](https://github.com/ooni/backend/tree/master/ooniapi/services/oonirun)

We prioritized auditing these specific OONI software components because they form the backbone of OONI infrastructure. Their development was supported by the [OTF Free and Open Source Software Sustainability Fund (FOSS)](https://www.opentech.fund/funds/free-and-open-source-software-sustainability-fund/), which also funded this audit.

The audit of the OONI Probe cross-platform architecture informed the [launch](https://ooni.org/post/2025-launch-ooniprobe-multiplatform-app/) of a more robust multiplatform OONI Probe app. Similarly, the audit of the OONI Run v2 implementation contributed to the [launch](https://ooni.org/post/2024-launch-ooni-run-v2/) of a more secure and reliable next-generation version of the OONI Run tool.

**Overall, the results of the penetration test were positive, with no critical or systemic vulnerabilities identified. Most issues were low-severity and have either been addressed or require minimal mitigation.**

Radically Open Security identified 14 low-severity issues, 2 high-severity issues, 2 moderate-severity issues, and 5 issues that were not applicable. The two high-severity findings were discussed in detail with Radically Open Security. Upon review, they acknowledged that no further mitigation was necessary beyond updates to our developer documentation — particularly as one of the high-severity findings stemmed from a misunderstanding of our implementation, which turned out to be secure and in line with best practices. 

We have addressed all high and moderate severity issues identified during the penetration test and many of the low severity issues. We did not resolve some low severity issues which we did not consider to be high priority, but we have documented them in our [issue tracker](https://github.com/ooni/devops/issues) and we will address them when time and resources permit. We remain committed to delivering secure, high-quality software to our community.

We thank [Radically Open Security](https://www.radicallyopensecurity.com/) for their thorough audit and valuable contributions to strengthening the security of OONI’s services and infrastructure. We are also grateful to the [Open Technology Fund (OTF)](https://www.opentech.fund/) for making this important work possible through their support.
