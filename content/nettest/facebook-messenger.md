# Facebook Messenger test

This test is designed to examine the reachability of Facebook Messenger within a
tested network.

OONI's Facebook Messenger test attempts to perform a TCP connection and DNS
lookup to Facebook's endpoints over the vantage point of the user. Based on this
methodology, Facebook Messenger is likely blocked if one or both of the
following apply:

* TCP/IP connections to Facebook's endpoints fail

* DNS lookup illustrates that different IP addresses have been allocated to
Facebook's endpoints

**Note:** DNS resolvers, such as Google or your local ISP, often provide users with
IP addresses that are closest to them geographically. Often this is not done
with the intention of network tampering, but merely for the purpose of providing
users faster access to websites. As a result, some false positives might arise
in OONI measurements. Other false positives might occur when tested websites
return failures even though they are not tampered with.