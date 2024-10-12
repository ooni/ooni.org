---
title: "T-Mobile USA Web Guard"
summary: "Measuring censorship on T-Mobile USA"
author: "Arturo Filastò"
date: "2012-03-21"
tags: ["usa", "country-us"]
categories: ["report"]
aliases:
  - /t-mobile-usa-web-guard.html
---

**ooni_test:** HTTP Host

**country:** United States

**provider:** T-Mobile USA

**product:** Web Guard

**product_website:** http://support.t-mobile.com/docs/DOC-2144

**censorship_method:** Transparent HTTP proxy

**downloads:**

* [Full scan result](/post/t-mobile-usa-web-guard/t-mobile-scan.yamlooni.tar.gz)
* [List of censored sites](/post/t-mobile-usa-web-guard/t-mobile-scan-blockedsites.txt)
* [Categories of censored sites](/post/t-mobile-usa-web-guard/t-mobile-scan-blockedsites-categorized.txt)

T-Mobile USA offers a "feature" to restrict access to certain
kinds of content. This is called Web Guard. Supposedly Web Guard
is supposed to inhibit access to content that falls under the
following categories: Alcohol, Mature Content, Violence,
Drugs, Pornography,  Weapons, Gambling, Suicide, Guns, Hate,
Tobacco, Ammunition.

By developing an OONI-probe test we were able to extract part of
the list of censored content and discovered that sites that do
not fall under these categories were also censored.
This feature is enabled by default on all prepaid accounts and
although it can be disabled by customers who wish to do so
(if over 18 years of age), it is not clearly stated in the
error page how to do so. This means that T-Mobile USA customers may
be drawn into the Filternet without knowing how to get out.

### How is the censorship performed?

The technique being used by T-Mobile USA to restrict access to certain content
involves deploying a transprent HTTP proxy. This proxy intercepts every HTTP
packet going through the network and checks it's Host header field to see if
it on the censored list. If the site is to be blocked it injects a fake response
warning the user of the block. What this means is that the block is only effective
against unencrypted HTTP traffic, but does not work for encrypted HTTPs traffic.

### Some sites should not be censored

While most of the censored sites are legitimately categorized, there are certain
ones that do not fall under the categories of the block.
Here is a list of sites that we found to be censored, but that we don't believe
belong to any of the following categories Alcohol, Mature Content, Violence,
Drugs, Pornography, Weapons, Gambling, Suicide, Guns, Hate, Tobacco, Ammunition.


![The Tor Project is dedicated to proving anonymous secure communication](/post/t-mobile-usa-web-guard/screenshot/torproject.org.png)

[The Tor Project is dedicated to proving anonymous secure communication](http://torproject.org)


![This is one of the most interestingly blocked website. Italy practices DNS based censorship for website that are related to
  online gambling. This is the block page is displayed when the IP address in the DNS response is spoofed. This is meta censorship! ](/post/t-mobile-usa-web-guard/screenshot/italian-censorship.png)

[This is one of the most interestingly blocked website. Italy practices DNS based censorship for website that are related to
  online gambling. This is the block page is displayed when the IP address in the DNS response is spoofed. This is meta censorship! ](http://217.175.53.72/)


![The internet archive Way Back Machine. The Library of the Internet.](/post/t-mobile-usa-web-guard/screenshot/web.archive.org.png)

[The internet archive Way Back Machine. The Library of the Internet.](http://web.archive.org/)


![Newgrounds is an American entertainment and social media website. ](/post/t-mobile-usa-web-guard/screenshot/newgrounds.com.png)

[Newgrounds is an American entertainment and social media website. ](http://newgrounds.com)


![Webmaster Hangout](/post/t-mobile-usa-web-guard/screenshot/wjunction.com.png)

[Webmaster Hangout](http://wjunction.com/)


![Logical Media is an Affiliate Network.](/post/t-mobile-usa-web-guard/screenshot/logicalmedia.com.png)

[Logical Media is an Affiliate Network.](http://logicalmedia.com/)


![Cosmopolitan is an international magazine for women. ](/post/t-mobile-usa-web-guard/screenshot/cosmopolitan.com.png)

[Cosmopolitan is an international magazine for women. ](http://cosmopolitan.com/)


![Hide Refer hides the visitors HTTP refer from being seen by other websites](/post/t-mobile-usa-web-guard/screenshot/nullrefer.com.png)

[Hide Refer hides the visitors HTTP refer from being seen by other websites](http://nullrefer.com/)


![Chinese sports news website](/post/t-mobile-usa-web-guard/screenshot/sportscn.com.png)

[Chinese sports news website](http://sportscn.com/)


![French TV guide website.](/post/t-mobile-usa-web-guard/screenshot/programme.tv.png)

[French TV guide website.](http://programme.tv/)


![Russian programming forum](/post/t-mobile-usa-web-guard/screenshot/nulled.cc.png)

[Russian programming forum](http://nulled.cc/)


![Iranian Forum](/post/t-mobile-usa-web-guard/screenshot/ir-tci.org.png)

[Iranian Forum](http://ir-tci.org/)


![French economics and financial news site](/post/t-mobile-usa-web-guard/screenshot/zonebourse.com.png)

[French economics and financial news site](http://zonebourse.com/)


![Chinese computer security website](/post/t-mobile-usa-web-guard/screenshot/hackbase.com.png)

[Chinese computer security website](http://hackbase.com/)


![9/11 conspiracy theory news site](/post/t-mobile-usa-web-guard/screenshot/whatreallyhappened.com.png)

[9/11 conspiracy theory news site](http://whatreallyhappened.com/)


![Japanese URL shortening service](/post/t-mobile-usa-web-guard/screenshot/p.tl.png)

[Japanese URL shortening service](http://p.tl/)


![French funny news website](/post/t-mobile-usa-web-guard/screenshot/10minutesaperdre.fr.png)

[French funny news website](http://10minutesaperdre.fr/)


![Website statistics collection site](/post/t-mobile-usa-web-guard/screenshot/statsie.com.png)

[Website statistics collection site](http://statsie.com/)


![Financial advice website](/post/t-mobile-usa-web-guard/screenshot/bbcprofit.com.png)

[Financial advice website](http://bbcprofit.com/)


![French website index](/post/t-mobile-usa-web-guard/screenshot/el-annuaire.com.png)

[French website index](http://el-annuaire.com/)


![Polish sports news website](/post/t-mobile-usa-web-guard/screenshot/livesports.pl.png)

[Polish sports news website](http://livesports.pl/)


![Chinese sports news website](/post/t-mobile-usa-web-guard/screenshot/titan007.com.png)

[Chinese sports news website](http://titan007.com/)


![Italian women advice website](/post/t-mobile-usa-web-guard/screenshot/girlpower.it.png)

[Italian women advice website](http://girlpower.it/)


![Japanese blog](/post/t-mobile-usa-web-guard/screenshot/yusukebe.com.png)

[Japanese blog](http://yusukebe.com/)


![Japanese wiki](/post/t-mobile-usa-web-guard/screenshot/sougouwiki.com.png)

[Japanese wiki](http://sougouwiki.com/)


![Online Article directory](/post/t-mobile-usa-web-guard/screenshot/wiki-live.com.png)

[Online Article directory](http://wiki-live.com/)


![Sports news website](/post/t-mobile-usa-web-guard/screenshot/hltv.org.png)

[Sports news website](http://hltv.org/)


![Estonian news portal](/post/t-mobile-usa-web-guard/screenshot/elu24.ee.png)

[Estonian news portal](http://elu24.ee/)


![Greek political blog](/post/t-mobile-usa-web-guard/screenshot/pitsirikos.net.png)

[Greek political blog](http://pitsirikos.net/)


![Religious news site](/post/t-mobile-usa-web-guard/screenshot/kath.net.png)

[Religious news site](http://kath.net/)


![Computer security Forum](/post/t-mobile-usa-web-guard/screenshot/hackforums.net.png)

[Computer security Forum](http://hackforums.net/)


![French pop music hit list](/post/t-mobile-usa-web-guard/screenshot/echartsinfrance.net.png)

[French pop music hit list](http://www.chartsinfrance.net/)


### What can we learn from this?

That if you are a Chinese sports fan or a French interested in economics under
18 you will have a hard time going with T-Mobile in the US. There appears to be
overall a tendency to blocking foreign sports news websites.


When I asked T-Mobile US about the matter this is what came out with the
following:

```
 Arturo Filastò @hellais
@TMobileHelp Under what category does http://torproject.org fall under? I don't see any reason for it being blocked. @mikavienna @ioerror

 T-Mobile USA @TMobileHelp
Hi there. Here's more info about webguard. http://ow.ly/9JbxO Please let us know if we can help. ^CG

 Arturo Filastò @hellais
@TMobileHelp Why is web guard blocking http://torproject.org? It does not appear to belong to the filtered categories.

 T-Mobile USA @TMobileHelp
@hellais @MiKaVienna @ioerror http://torproject.org is not blocked. There must be a webguard on your line. Please contact us to resolve. ^CG

 Arturo Filastò  @hellais
Wonder what keywords it picket up in @torproject that fit in these categories: http://support.t-mobile.com/docs/DOC-2144#What_categories_will_be_completely_restricted_with_the_Web_Guard_feature

 T-Mobile USA  @TMobileHelp
My guess would be system picked up keywords there. Let us know if we can assist in turning webguard off. ^CG

 Arturo Filastò  @hellais
Also, doesn't t-mobile buy the list of censored sites from a third party? Or does it compile it itself?

 T-Mobile USA @TMobileHelp
My guess would be system picked up keywords there. Let us know if we can assist in turning webguard off. ^CG

 Arturo Filastò @hellais
My questions are: why is Web Guard enabled on my account and why sites such as http://torproject.org are filtered.

 T-Mobile USA @TMobileHelp
I don't have enough information to speculate further about the details. I CAN help you turn off webguard? ^CG

 Arturo Filastò @hellais
@TMobileHelp what leads TMobile to believe that a customer is interested in censorship? Is Web Guard activated on all prepaid accounts?

 T-Mobile USA @TMobileHelp
Must be because when your account was set up, we thought you wanted it. If you don't, please contact us: http://ow.ly/9JllQ ^CG
```

So T-Mobile is basically interfering into what should be taught by
parents to their children. Since most of prepaid customers are
under 18 they reserve the right to decide what is right and wrong
for them, even bypassing their parents.

If I were a parent I would be mad that T-Mobile US chooses for my
what my child should watch and should not.
