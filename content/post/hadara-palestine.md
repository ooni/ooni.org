---
title: "Hadara Palestine"
summary: "This is the technical report on the politically motivated censorship going on in Bethlehem, West Bank"
author: "Arturo Filastò"
date: "2012-04-23"
tags: ["palestine", "country-ps"]
categories: ["report"]
aliases:
  - /hadara-palestine.html
---

**ooni_test:** HTTP Host

**country:** Palestine

**provider:** Hadara, Paltel

**product:** Squid

**product_website:** http://www.squid-cache.org/

**censorship method:** Transparent HTTP proxy

**downloads:**

* [Full scan result](/post/hadara-palestine/hadara_palestine.yamlooni.tar.gz)
* [List of censored sites](/post/hadara-palestine/censored-sites.txt)

This is the technical report on the politically motivated censorship going on
in Bethlehem, West Bank.

These are the networks in question:

    inetnum:         82.205.96.0 - 82.205.103.255
    netname:         GZ-HOME-BR1
    descr:           GAZA BSA HOME
    country:         PS
    admin-c:         WK4085-RIPE
    tech-c:          HT1472-RIPE
    status:          ASSIGNED PA
    mnt-by:          Palnet-mnt
    source:          RIPE # Filtered

    inetnum:         212.106.88.0 - 212.106.95.255
    netname:         RA-HM-ASR-02
    descr:           Hadara Ramallah BSA
    country:         PS
    admin-c:         WK4085-RIPE
    tech-c:          HT1472-RIPE
    status:          Assigned PA
    mnt-by:          Palnet-MNT
    source:          RIPE # Filtered

The technique being used to restrict access to content is a transparent HTTP
proxy. What this does is intercept every HTTP request being made and process it
internally. If the content is cached it will serve the cached version of the
content. If the content is to be blocked it will serve a blocked page.

We developed a test that opens a connection on port 80 towards a known
unrestricted host. Keep in mind that it's irrelevant to what destination the
connection is opened because the transparent HTTP proxy will intercept all HTTP
requests, meaning that all clients are in reality always only speaking to the proxy.
Once we have a connection open we do HTTP GET requests with a changed Host header field.
If the result is the block page then the content is restricted.

We have identified two different block pages that were interchanged at a
certain point during our tests:

### First block page

    HTTP/1.0 403 Forbidden
    Server: squid
    Date: Wed, 11 Apr 2012 05:47:10 GMT
    Content-Type: text/html
    Content-Length: 21
    Connection: close

    Sorry, Access Denied

### Second block page

    HTTP/1.0 403 Forbidden
    Server: squid
    Date: Sun, 22 Apr 2012 20:55:34 GMT
    Content-Type: text/html
    Content-Length: 2205
    Connection: close

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    <html>
        <head>
            <meta http-equiv="Content-type" content="text/html; charset=iso-8859-1">
            <title>ERROR: The requested URL could not be retrieved</title>
            <style type="text/css">
                #logo {
                    margin: 0 auto;
                    display: block;
                }
                hr {
                    height: 1px;
                    border: none;
                    background: gray;
                    margin: 1em 0;
                }
                h1 {
                    padding: 0;
                    font-size: 1.5em;
                    margin: 0;
                }
                h2 {
                    padding: 0;
                    font-size: 1.2em;
                    margin: 0 0 1em 0;
                }
                body {
                    font-family: sans-serif;
                    padding: 1em 0;
                }
                #content {
                    margin: 0 auto;
                    max-width: 800px;
                    border: 1px solid gray;
                    background: #eee;
                    padding: 1em 2em;
                    -moz-border-radius: 16px;
                }
            </style>
        </head>
        <body>
            <div id="content">

            <h1>ERROR</h1>
            <h2>The requested URL could not be retrieved</h2>
            <hr/>

    <P>
    While trying to retrieve the URL:
    <A HREF="http://fateh-voice.ps/">http://fateh-voice.ps/</A>
    <P>
    The following error was encountered:
    <UL>
    <LI>
    <STRONG>
    Access Denied.
    </STRONG>
    <P>
    Access control configuration prevents your request from
    being allowed at this time.  Please contact your service provider if
    you feel this is incorrect.
    </UL>
    <P>Your cache administrator is <A HREF="mailto:webmaster">webmaster</A>.
            </div>
        <!--
      -- Unfortunately, Microsoft has added a clever new
      -- feature to Internet Explorer.  If the text in
      -- an errors message is too small, specifically
      -- less than 512 bytes, Internet Explorer returns
      -- its own error message.  Yes, you can turn that
      -- off, but *surprise* its pretty tricky to find
      -- buried as a switch called smart error
      -- messages  That means, of course, that many of
      -- Resins error messages are censored by default.
      -- And, of course, youll be shocked to learn that
      -- IIS always returns error messages that are long
      -- enough to make Internet Explorer happy.  The
      -- workaround is pretty simple: pad the error
      -- message with a big comment to push it over the
      -- five hundred and twelve byte minimum.  Of course,
      -- thats exactly what youre reading right now.
    //-->
    </body></html>

From the response headers of a blocked page we are able to learn that the
software being used is Squid.

We scanned more than 1 million hostnames and only detected censorship on 8 of
these.
The full scan results are available in an unredacted from [here](/post/hadara-palestine/hadara_palestine.yamlooni.tar.gz)

At a certain point we decided to go for a high level of parallelism and not
care about timeout errors. This is because the transparent HTTP proxy is
intercepting our request and making them for us. This means that if a
certain hostname is to be blocked it will reply with the block page
instantenously without processing it. If the site is in the blocklist a
connection attempt to it will never timeout.

What this means, though, is that sites blocked with some more sophisticated
techniques would not have been detected. Though by seeing the kind of setup
that was deployed in this case we find it unlikely that access to content
would be restricted with some more advanced setup and that they would be
using a mix between squid transparent HTTP proxy censorship and other.

The sites whose access is being restricted access to are:

* pal-home.net

* kofiapress.com

* amad.ps

* inlightpress.com

* fpnp.net

* fateh-voice.ps

* karamapress.com

* milad.ps


![Screenshort of http://pal-home.net](/post/hadara-palestine/screenshot/palhome.png)

[http://pal-home.net](http://pal-home.net)


![Screenshort of http://milad.ps](/post/hadara-palestine/screenshot/milad.png)

[http://milad.ps](http://milad.ps)


![Screenshort of http://karamapress.com](/post/hadara-palestine/screenshot/karamapress.png)

[http://karamapress.com](http://karamapress.com)


![Screenshort of http://inlightpress.com](/post/hadara-palestine/screenshot/inlightpress.png)

[http://inlightpress.com](http://inlightpress.com)


![Screenshort of http://fpnp.net](/post/hadara-palestine/screenshot/fpnp.png)

[http://fpnp.net](http://fpnp.net)


![Screenshort of http://fateh-voice.ps](/post/hadara-palestine/screenshot/fateh-voice.png)

[http://fateh-voice.ps](http://fateh-voice.ps)


![Screenshort of http://amad.ps](/post/hadara-palestine/screenshot/amad.png)

[http://amad.ps](http://amad.ps)

For more details on the political implications check see the [article by George
Hale on Ma'An News](http://www.maannews.net/eng/ViewDetails.aspx?ID=478726)
