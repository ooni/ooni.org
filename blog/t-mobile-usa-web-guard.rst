---
title: T-Mobile USA Web Guard
summary: Measuring censorship on T-Mobile USA
author: Arturo Filastò
date: 2012-03-21 00:00:00
---

**ooni\_test:** HTTP Host

**country:** United States

**provider:** T-Mobile USA

**product:** Web Guard

**product\_website:** http://support.t-mobile.com/docs/DOC-2144

**censorship\_method:** Transparent HTTP proxy

**downloads:**

-  `Full scan
   result </media/releases/2012/T-Mobile_USA_WebGuard/t-mobile-scan.yamlooni.tar.gz>`__
-  `List of censored
   sites </media/releases/2012/T-Mobile_USA_WebGuard/t-mobile-scan-blockedsites.txt>`__
-  `Categories of censored
   sites </media/releases/2012/T-Mobile_USA_WebGuard/t-mobile-scan-blockedsites-categorized.txt>`__

T-Mobile USA offers a "feature" to restrict access to certain kinds of
content. This is called Web Guard. Supposedly Web Guard is supposed to
inhibit access to content that falls under the following categories:
Alcohol, Mature Content, Violence, Drugs, Pornography, Weapons,
Gambling, Suicide, Guns, Hate, Tobacco, Ammunition.

By developing an OONI-probe test we were able to extract part of the
list of censored content and discovered that sites that do not fall
under these categories were also censored. This feature is enabled by
default on all prepaid accounts and although it can be disabled by
customers who wish to do so (if over 18 years of age), it is not clearly
stated in the error page how to do so. This means that T-Mobile USA
customers may be drawn into the Filternet without knowing how to get
out.

How is the censorship performed?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The technique being used by T-Mobile USA to restrict access to certain
content involves deploying a transprent HTTP proxy. This proxy
intercepts every HTTP packet going through the network and checks it's
Host header field to see if it on the censored list. If the site is to
be blocked it injects a fake response warning the user of the block.
What this means is that the block is only effective against unencrypted
HTTP traffic, but does not work for encrypted HTTPs traffic.

Some sites should not be censored
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

While most of the censored sites are legitimately categorized, there are
certain ones that do not fall under the categories of the block. Here is
a list of sites that we found to be censored, but that we don't believe
belong to any of the following categories Alcohol, Mature Content,
Violence, Drugs, Pornography, Weapons, Gambling, Suicide, Guns, Hate,
Tobacco, Ammunition.

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/torproject.org.png
   :alt: The Tor Project is dedicated to proving anonymous
   secure communication

   The Tor Project is dedicated to proving anonymous
   secure communication

`The Tor Project is dedicated to proving anonymous
secure communication <http://torproject.org>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/italian-censorship.png
   :alt: This is one of the most interestingly blocked website. Italy
   practices DNS based censorship for website that are related to online
   gambling. This is the block page is displayed when the IP address in
   the DNS response is spoofed. This is meta censorship!

   This is one of the most interestingly blocked website. Italy
   practices DNS based censorship for website that are related to online
   gambling. This is the block page is displayed when the IP address in
   the DNS response is spoofed. This is meta censorship!

`This is one of the most interestingly blocked website. Italy practices
DNS based censorship for website that are related to online gambling.
This is the block page is displayed when the IP address in the DNS
response is spoofed. This is meta censorship! <http://217.175.53.72/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/web.archive.org.png
   :alt: The internet archive Way Back Machine. The Library of
   the Internet.

   The internet archive Way Back Machine. The Library of the Internet.

`The internet archive Way Back Machine. The Library of
the Internet. <http://web.archive.org/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/newgrounds.com.png
   :alt: Newgrounds is an American entertainment and social media
   website.

   Newgrounds is an American entertainment and social media website.

`Newgrounds is an American entertainment and social media
website. <http://newgrounds.com>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/wjunction.com.png
   :alt: Webmaster Hangout

   Webmaster Hangout

`Webmaster Hangout <http://wjunction.com/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/logicalmedia.com.png
   :alt: Logical Media is an Affiliate Network.

   Logical Media is an Affiliate Network.

`Logical Media is an Affiliate Network. <http://logicalmedia.com/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/cosmopolitan.com.png
   :alt: Cosmopolitan is an international magazine for women.

   Cosmopolitan is an international magazine for women.

`Cosmopolitan is an international magazine for
women. <http://cosmopolitan.com/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/nullrefer.com.png
   :alt: Hide Refer hides the visitors HTTP refer from being seen by
   other websites

   Hide Refer hides the visitors HTTP refer from being seen by
   other websites

`Hide Refer hides the visitors HTTP refer from being seen by
other websites <http://nullrefer.com/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/sportscn.com.png
   :alt: Chinese sports news website

   Chinese sports news website

`Chinese sports news website <http://sportscn.com/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/programme.tv.png
   :alt: French TV guide website.

   French TV guide website.

`French TV guide website. <http://programme.tv/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/nulled.cc.png
   :alt: Russian programming forum

   Russian programming forum

`Russian programming forum <http://nulled.cc/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/ir-tci.org.png
   :alt: Iranian Forum

   Iranian Forum

`Iranian Forum <http://ir-tci.org/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/zonebourse.com.png
   :alt: French economics and financial news site

   French economics and financial news site

`French economics and financial news site <http://zonebourse.com/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/hackbase.com.png
   :alt: Chinese computer security website

   Chinese computer security website

`Chinese computer security website <http://hackbase.com/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/whatreallyhappened.com.png
   :alt: 9/11 conspiracy theory news site

   9/11 conspiracy theory news site

`9/11 conspiracy theory news site <http://whatreallyhappened.com/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/p.tl.png
   :alt: Japanese URL shortening service

   Japanese URL shortening service

`Japanese URL shortening service <http://p.tl/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/10minutesaperdre.fr.png
   :alt: French funny news website

   French funny news website

`French funny news website <http://10minutesaperdre.fr/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/statsie.com.png
   :alt: Website statistics collection site

   Website statistics collection site

`Website statistics collection site <http://statsie.com/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/bbcprofit.com.png
   :alt: Financial advice website

   Financial advice website

`Financial advice website <http://bbcprofit.com/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/el-annuaire.com.png
   :alt: French website index

   French website index

`French website index <http://el-annuaire.com/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/livesports.pl.png
   :alt: Polish sports news website

   Polish sports news website

`Polish sports news website <http://livesports.pl/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/titan007.com.png
   :alt: Chinese sports news website

   Chinese sports news website

`Chinese sports news website <http://titan007.com/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/girlpower.it.png
   :alt: Italian women advice website

   Italian women advice website

`Italian women advice website <http://girlpower.it/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/yusukebe.com.png
   :alt: Japanese blog

   Japanese blog

`Japanese blog <http://yusukebe.com/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/sougouwiki.com.png
   :alt: Japanese wiki

   Japanese wiki

`Japanese wiki <http://sougouwiki.com/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/wiki-live.com.png
   :alt: Online Article directory

   Online Article directory

`Online Article directory <http://wiki-live.com/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/hltv.org.png
   :alt: Sports news website

   Sports news website

`Sports news website <http://hltv.org/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/elu24.ee.png
   :alt: Estonian news portal

   Estonian news portal

`Estonian news portal <http://elu24.ee/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/pitsirikos.net.png
   :alt: Greek political blog

   Greek political blog

`Greek political blog <http://pitsirikos.net/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/kath.net.png
   :alt: Religious news site

   Religious news site

`Religious news site <http://kath.net/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/hackforums.net.png
   :alt: Computer security Forum

   Computer security Forum

`Computer security Forum <http://hackforums.net/>`__

.. figure:: /media/releases/2012/T-Mobile_USA_WebGuard/screenshot/echartsinfrance.net.png
   :alt: French pop music hit list

   French pop music hit list

`French pop music hit list <http://www.chartsinfrance.net/>`__

What can we learn from this?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

That if you are a Chinese sports fan or a French interested in economics
under 18 you will have a hard time going with T-Mobile in the US. There
appears to be overall a tendency to blocking foreign sports news
websites.

When I asked T-Mobile US about the matter this is what came out with the
following:

::

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

So T-Mobile is basically interfering into what should be taught by
parents to their children. Since most of prepaid customers are under 18
they reserve the right to decide what is right and wrong for them, even
bypassing their parents. If I were a parent I would be mad that T-Mobile
US chooses for my what my child should watch and should not.
