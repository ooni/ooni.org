# WhatsApp test

This test is designed to examine the reachability of both WhatsApp's app and
web.whatsapp.com within a tested network.

OONI's WhatsApp test attempts to perform an HTTP GET request, TCP
connection and DNS lookup to WhatsApp’s endpoints, registration service and web
version over the vantage point of the user. Based on this methodology,
WhatsApp’s *app* is likely blocked if any of the following apply:

* TCP/IP connections to WhatsApp's endpoints fail

* TCP/IP connections to WhatsApp's registration service fail

* DNS lookup illustrates that different IP addresses have been allocated to
WhatsApp's endpoints

* HTTP requests to WhatsApp's registration service do *not* send back a response
to OONI's servers

WhatsApp's *website* is likely blocked if any of the following apply:

* TCP/IP connections to web.whatsapp.com fail

* DNS lookup illustrates that a different IP addresses has been allocated to
web.whatsapp.com

* HTTP requests to web.whatsapp.com do *not* send back a response to OONI's
servers

**Note:** DNS resolvers, such as Google or your local ISP, often provide users with
IP addresses that are closest to them geographically. Often this is not done
with the intention of network tampering, but merely for the purpose of providing
users faster access to websites. As a result, some false positives might arise
in OONI measurements. Other false positives might occur when tested websites
serve different content depending on the country that the user is connecting
from, or in the cases when websites return failures even though they are not
tampered with.