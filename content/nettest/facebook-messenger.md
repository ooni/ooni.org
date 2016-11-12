# Facebook Messenger test

This test is designed to examine the reachability of Facebook Messenger within a
tested network.

OONI's Facebook Messenger test attempts to perform a TCP connection and DNS
lookup to Facebook's endpoints over the vantage point of the user. Based on this
methodology, Facebook Messenger is likely blocked if one or both of the
following apply:

* TCP connections to Facebook's endpoints fail

* DNS lookups to domains associated to Facebook do not resolve to IP addresses allocated to Facebook
