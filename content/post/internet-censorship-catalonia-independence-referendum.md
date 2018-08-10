---
title: "Evidence of Internet Censorship during Catalonia's Independence Referendum"
author: "Tord Lundström (Virtual Road), Maria Xynou (OONI)"
date: "2017-10-03"
tags: ["catalonia", "censorship", "country-es"]
categories: ["report"]
---

![Seized referendum site](/post/catalonia/seized.png)

Image: Catalan Independence Referendum site seized

Two days ago, Catalonia held a
[referendum](http://time.com/4951665/catalan-referendum-2017/) seeking
independence from Spain. As the world awaits to see what happens next,
we publish this post to share
[evidence](https://api.ooni.io/files/by_country/ES) of recent
censorship events that occurred during and leading up to the referendum.

We **confirm the blocking of at least 25 sites related to the Catalan
referendum** by means of DNS tampering and HTTP blocking, based on
[OONI Probe network measurements](https://explorer.ooni.torproject.org/country/ES)
collected from three local networks. OONI data shows that these sites
were blocked every day from (at least) 25th September 2017 (when the
testing started) leading up to the referendum day, on 1st October 2017.

# Catalan Independence Referendum

Catalans have their own language and cultural identity, despite being
part of Spain. Their president Carles Puigdemont
[argues](https://www.theguardian.com/world/2017/sep/21/why-do-some-catalans-want-independence-and-what-is-spains-view)
that they have a moral, cultural, economic, and political right to
self-determination. In recent years, the Catalan independence movement
has strengthened, particularly in light of Spain’s economic crisis. Many
independence supporters
[argue](https://www.economist.com/news/leaders/21729438-there-are-better-ways-referendum-address-regions-legitimate-grievances-catalonias)
that Catalonia has long been oppressed under the Spanish central
government that does not acknowledge their “right to decide”.

Catalonia has seeked more autonomy and independence from Spain in
various occasions. In 2006, Catalonia held a [referendum amending the Statute of Autonomy of Catalonia](https://www.theatlantic.com/international/archive/2017/10/catalonia-referendum/541611/),
expanding its regional government’s authority. But four years later,
Spain’s Constitutional Court reviewed the law upon request from the
Spanish government led by the Popular Party (PP), re-writing and
dictating the interpretation of many of its articles, and leading to a
[massive demonstration](http://www.bbc.com/news/10588494) in
Barcelona.

On 9th November 2014 (9N), Catalonia held a non-binding
[self-determination referendum](http://www.bbc.com/news/world-europe-29982960), where
voters were asked whether they wanted Catalonia to be a state and
whether they wanted that state to be independent. Even though [80% of ballots were cast in favour](http://www.bbc.com/news/world-europe-29982960) of both
questions (though the voter turnout was quite low), Spain’s
Constitutional Court ruled the referendum “unconstitutional and null.”
Such events paved the way for Catalonia’s latest referendum, but this
time the Spanish government showed less tolerance.

Leading up to the referendum, Spanish police [raided Catalan regional government offices and arrested senior officials](https://www.theguardian.com/world/2017/sep/20/spain-guardia-civil-raid-catalan-government-hq-referendum-row).
They also [raided the offices of the .cat internet registry](https://www.theregister.co.uk/2017/09/23/spanish_government_criticized_over_catalan_internet_registry_raid/).
Domains associated to the referendum, like
[referendum.cat](http://referendum.cat/) and [ref1oct.cat](http://ref1oct.cat/), have been seized. But censorship
events were not limited to .cat domains. Many in Catalonia
[reported](https://www.theguardian.com/world/2017/sep/27/catalans-compare-spain-to-north-korea-after-referendum-sites-blocked)
that access to various other domains (mirrors) related to the Catalan
referendum were being blocked as well.

To ensure that voters could participate even if their appointed voting
stations were [shut down](http://cadenaser.com/ser/2017/09/30/politica/1506775623_785036.html)
by the police, the Catalan government announced the “open census” in the
morning of the referendum (1-O). Voters were offered the opportunity to
choose any voting station in the country. However, the central system
that validated that the voters were in the census was [taken down by Amazon](https://www.elgrupoinformatico.com/amazon-recibio-una-peticion-para-bloquear-los-servidores-del-referendum-t38919.html)
during the first hours of the day. [Google was also previously ordered to take down a voting app](https://www.thespainreport.com/articles/1166-170929190146-google-removes-catalan-referendum-app-from-google-play-after-catalan-high-court-issues-take-down-order)
that provides information about the polling stations for the Catalan
independence referendum.

Despite all the attempts to block the process, alternative servers to
count votes were deployed and the referendum (1-O) was held last Sunday.
Locals reported that they had difficulty accessing the internet at the
polling stations, but we don’t have data to confirm whether throttling
or an internet blackout took place.

According to Catalan officials, [90% of more than 2.2 million ballots were cast in favour of independence](https://www.theguardian.com/world/live/2017/oct/01/catalan-independence-referendum-spain-catalonia-vote-live).
However, the referendum was far from peaceful, as heavy police violence
resulted in [hundreds of voters injured](http://www.bbc.com/news/world-europe-41461032). Today,
[thousands are protesting](http://www.bbc.com/news/av/world-europe-41478754/catalonia-referendum-thousands-protest-spanish-police-violence)
against Spanish police violence on the streets of Barcelona, in response
to the crackdown during the referendum.

Catalonia’s president [asked the European Commission to encourage international mediation](https://www.theguardian.com/world/2017/oct/02/catalan-government-emergency-meeting-spain-independence)
with Spain over the region’s independence. Madrid maintains that the
referendum was
[illegal](https://www.theguardian.com/commentisfree/2017/oct/01/the-guardian-view-on-catalonias-referendum-the-spanish-state-has-lost)
and its outcome therefore null. Spain is currently experiencing [one of its biggest political crises](http://www.bbc.com/news/world-europe-41466619) in decades. Even
Catalan society is quite
[divided](https://www.theguardian.com/world/2017/sep/19/temperature-climbs-in-spain-as-catalan-question-comes-to-a-head)
on the question of independence.

We recognize the sensitivity of the current political situation. Through
[empirical data](https://api.ooni.io/files/by_country/ES) collected by
[OONI Probe](https://ooni.torproject.org/install/) community members
in Spain and Catalonia, we aim to support public debate.

# Blocking of Catalan referendum sites

To collect evidence showing whether and how sites associated to the
Catalan referendum were blocked, [OONI Probe tests](https://ooni.torproject.org/install/) were run in Catalonia over
the last week. OONI Probe is [free and open software](https://github.com/TheTorProject/ooni-probe) that anyone can
[run](https://ooni.torproject.org/install/) to measure the blocking of
websites. All network measurement data collected by OONI Probe is
automatically [published](https://explorer.ooni.torproject.org/world/)
to increase transparency of internet censorship worldwide.

[OONI data](https://explorer.ooni.torproject.org/country/ES) confirms
that, as of 25th September 2017 (when OONI Probe testing started), local
ISPs have been blocking access to (at least) 25 Catalan referendum sites
and continued to enforce the blocks on the referendum day.

The table below links to network measurements collected from three local
ISPs and shows how and which sites were **blocked on 1st October 2017**,
when the Catalan independence referendum was held.


|**Domain** | **AS12479** | **AS3352** | **AS12338**|
|---|---|---|---|
| cat.referendum.barcelona | [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fcat.referendum.barcelona) |       [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fcat.referendum.barcelona)  |     [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fcat.referendum.barcelona)
  referendum.enricpineda.cat |   [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Freferendum.enricpineda.cat) |     [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Freferendum.enricpineda.cat) |     [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Freferendum.enricpineda.cat) |
|  referendum.legal |             [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.referendum.legal) |           [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fwww.referendum.legal) |           [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fwww.referendum.legal)|
|  referendum.party |             [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.referendum.party) |           [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fwww.referendum.party) |           [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fwww.referendum.party)|
| referendum.ninja |             [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.referendum.ninja) |           [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fwww.referendum.ninja) |           [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fwww.referendum.ninja)|
| referendum.love |              [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.referendum.love) |            [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fwww.referendum.love) |            [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fwww.referendum.love)|
| referendum.fyi |               [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.referendum.fyi) |             [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fwww.referendum.fyi) |             [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fwww.referendum.fyi)|
| referendum.rip |               [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.referendum.rip) |             [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http%3A%2F%2Fwww.referendum.rip) |           [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fwww.referendum.rip)|
|  referendum.soy |               [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.referendum.soy) |             [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http%3A%2F%2Fwww.referendum.soy) |           [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fwww.referendum.soy)|
| referendum.lol |               [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.referendum.lol) |             [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fwww.referendum.lol) |             [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fwww.referendum.lol)|
|  referendum.voto |              [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.referendum.voto) |            [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fwww.referendum.voto) |            [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fwww.referendum.voto)|
|  referendum.works |             [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.referendum.works) |           [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fwww.referendum.works) |           [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fwww.referendum.works)|
|  referendum.observer |          [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.referendum.observer) |        [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fwww.referendum.observer) |        [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fwww.referendum.observer)
|  referendum.fun |               [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.referendum.fun) |             [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fwww.referendum.fun) |             [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fwww.referendum.fun)|
|  alerta.cat |                  [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Falerta.cat)        |             [*Not blocked*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Falerta.cat)/Seized        |        [*Not blocked*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Falerta.cat)/Seized |
|  referendum.pirata.cat |        [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Freferendum.pirata.cat) |          [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Freferendum.pirata.cat) |          [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Freferendum.pirata.cat)|
|  referendum.pau.fm |            [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Freferendum.pau.fm) |              [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Freferendum.pau.fm) |              [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Freferendum.pau.fm)|
|  referendumcat.eu |             [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.referendumcat.eu) |           [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fwww.referendumcat.eu) |           [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fwww.referendumcat.eu)|
|  ref1oct.eu |                   [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.ref1oct.eu) |                 [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fwww.ref1oct.eu) |                 [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fwww.ref1oct.eu)|
|  ref1oct.cat |                  [*Not blocked*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.ref1oct.cat)/Seized |           [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fref1oct.cat) |                    [*Not blocked*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fref1oct.cat)/Seized|
|  ref1oct.net |                  [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fref1oct.net) |                    [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fref1oct.net) |                    [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fref1oct.net)|
|  ref1oct.org |                  [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fref1oct.org) |                    [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fref1oct.org) |                    [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fref1oct.org)|
|  referendum.zalo.nyc |          [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Freferendum.zalo.nyc) |            [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Freferendum.zalo.nyc) |            [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Freferendum.zalo.nyc)|
|  referendum.cat |               [*Not blocked*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Freferendum.cat)/Seized |            [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Freferendum.cat) |                 [*Not blocked*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Freferendum.cat)/Seized|
|  marianorajoy.cat |             [*Not blocked*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fwww.marianorajoy.cat)/Seized |      [*Not blocked*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fwww.marianorajoy.cat)/Seized |      [*Not blocked*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fwww.marianorajoy.cat)/Seized|
|  garantiespelreferendum.com |   [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=http:%2F%2Fgarantiespelreferendum.com) |     [*HTTP blocking*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=http:%2F%2Fgarantiespelreferendum.com) |     [*DNS tampering*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=http:%2F%2Fgarantiespelreferendum.com)|
|  referendum.clash.cat |         [*Not blocked*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=https:%2F%2Freferendum.clash.cat)/Seized |     [*Not blocked*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=https:%2F%2Freferendum.clash.cat)/Seized |     [*Not blocked*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=https:%2F%2Freferendum.clash.cat)/Seized|
|  marianorajoy.clash.cat |       [*Not blocked*](https://explorer.ooni.torproject.org/measurement/20171001T195749Z_AS12479_sPkqfpoY7fcTeZ8a3suP8ujlQTXMExcoUwGnXnArRi5l1xxMsr?input=https:%2F%2Fmarianorajoy.clash.cat)/Seized |   [*Not blocked*](https://explorer.ooni.torproject.org/measurement/20171001T155442Z_AS3352_WPrjXiNTPtG16TjdsHSLOY7mIpZgEDNhbloWOsg6wn69AwO8rC?input=https:%2F%2Fmarianorajoy.clash.cat)/Seized |   [*Not blocked*](https://explorer.ooni.torproject.org/measurement/20171001T072938Z_AS12338_JesS9rCt7C1xWtNgevggzjSNVDR6xG1j5T4RDFV7lYCURBmS7y?input=https:%2F%2Fmarianorajoy.clash.cat)/Seized|

Many of the blocked domains (such as referendum.lol and
referendum.ninja) in the table above are mirrors of referendum.cat,
which was
[seized](https://www.theregister.co.uk/2017/09/23/spanish_government_criticized_over_catalan_internet_registry_raid/)
more than a week ago. The [mirrors of blocked websites](https://github.com/GrenderG/referendum_cat_mirror) have been
run by volunteers using other top level domains (such as as .ninja .lol,
and .party).

[OONI data](https://explorer.ooni.torproject.org/country/ES) shows
that these mirrors were blocked by means of DNS tampering and through
block pages served by HTTP transparent proxies. Daniel Morales, a
freedom of expression activist who worked on the scripts to mirror the
blocked sites, was called to appear in court on 22nd September
and [accused of being supported by Russian hackers](https://elpais.com/elpais/2017/09/28/inenglish/1506588970_026442.html)
by El Pais, one of Spain’s largest media outlets.

France Telecom Espanya (AS12479) and Euskaltel (AS12338) blocked access
to sites by means of DNS tampering, while Telefonica de Espanya (AS3352)
served block pages through the use of HTTP transparent proxies. It’s
worth noting that France Telecom Espanya (AS12479) and Euskaltel
(AS12338) didn’t block certain .cat domains (referendum.cat and
ref1oct.cat), likely because those sites had already been seized.
Telefonica de Espanya (AS3352), on the other hand, reinforced the
censorship by serving block pages for seized domains as well.

OONI data shows the blocking of the above sites leading up to the
referendum, between 25th September 2017 to 1st October 2017. Such data
can be accessed through the following steps:

1.  Access the [Spanish page of OONI Explorer](https://explorer.ooni.torproject.org/country/ES)

2.  Click “Filter Results”

3.  Add one of the domains (from the table above) in the “Test Input” section

4.  Optional: Filter the measurements by date through the “Date Range” section

5.  Click “Apply Filter”

6.  Click on one of the filtered measurements

7.  Scroll to the end of the measurement page

8.  Click “Object” to view the network measurement data

Alternatively, the data can be download and analyzed through json files
included in [OONI’s API](https://api.ooni.io/files/by_country/ES).

Other measurements collected from sensors that provide DNS historical
values show that referendum.cat was redirected to the domain
paginaintervenida.edgesuite.net hosted by Akamai on 13th September.

```

2017-09-13 16:30:46 -0000 IN CNAME paginaintervenida.edgesuite.net.

```

As of 3rd October 2017, the following domain names are redirected to
paginaintervenida.edgesuite.net:

* iolin.cat

* Ref1oct.cat

* Webdelsi.cat

* Empaperem.cat

* Garanties.cat

* Joconvoco.cat

* Vullvotar.cat

* Prenpartit.cat

* Referendum.cat

* Votaras1-o.cat

* 7democracia.cat

* Sorayasaenz.cat

* Marianorajoy.cat

* Referendumcat.cat

* 1octreferendum.cat

* Holademocracia.cat

* Referendumoct1.cat

* Cridademocracia.cat

* Referendumoctubre1.cat

All the .cat domains have been taken down as the result of the [court order](http://fundacio.cat/es/noticias/liberacion-del-director-de-innovacion-y-sistemas-de-informacion-de-la-fundacio-puntcat)
that Fundacio .cat received on 15th September from the Tribunal
Superior de Justicia de Cataluña (TSJC). The director of research and
information of the organization that runs the Catalan top level domain
.cat, Pep Oliver, was detained on 20th September and retained under
custody for 60 hours.

# Conclusion

In summary, three main techniques have been used to censor Catalan
referendum sites:

**DNS tampering**

The DNS resolvers of the operators are configured to return bogus DNS
responses to block the domain names. This technique can be applied for
any domain but can be bypassed by changing the DNS resolvers of the
devices (by using Google 8.8.8.8, for example, instead of the operator
DNS server).

[OONI data](https://explorer.ooni.torproject.org/country/ES) shows
that France Telecom Espanya (AS12479) and Euskaltel (AS12338) adopted
this technique to block sites related to the Catalan referendum.

**HTTP(S) blocking**

This technique inspects, intercepts and alters web traffic so that HTTP
and/or HTTPS requests to URLs are replaced by a new page (“block page”)
indicating that they have been blocked.

[OONI data](https://explorer.ooni.torproject.org/country/ES) shows
that Telefonica de Espanya (AS3352) adopted this technique to block
sites related to the Catalan referendum. Traffic recordings and analysis
of the blocking indicate that Telefonica might be using Israeli
technology from [Allot Communications](https://www.allot.com/press-release/telefonica-partners-with-allot-communications-to-establish-a-multi-service-platform-for-improved-security-and-user-experience/).

**.CAT domain seizure**

Once Fundacio .CAT implemented the court order, the domains have been
redirected by means of DNS to the domain paginaintervenida.edgesuite.net
hosted on Akamai. Many .cat domains though were also blocked by means of
DNS tampering and HTTP blocking.


The future of Catalonia remains quite unclear. What is clear is that
it’s important to keep those in power to account, even in “Western
democracies”. One way of doing so is by [measuring networks](https://ooni.torproject.org/install/) and increasing
transparency of information controls.

Evidence is necessary for informed public debate.

**Update (2017-10-05 16:30 UTC):** As community members in Spain and Catalonia come across more blocked sites, they are added to this list [here](https://www.nodo50.cat/lista.txt).

**Update (2017-10-04 16:00 UTC):** Qurium / Virtual Road have published data showing the mechanisms used to block websites associated to the referendum of 1-O of Catalonia. View their findings **[here](https://www.qurium.org/alerts/spain/blocking-techniques-catalunya/)**.

**Update (2017-10-03 20:38 UTC):**  Courtesy of our friends from [Security Without
Borders](https://securitywithoutborders.org/blog/2017/09/27/catalonia.html),
you can run [OONI Probe](https://ooni.torproject.org/install) to test
Catalan websites for censorship by clicking on the "Run OONI" button below:

{{<ooni-run-banner link="https://run.ooni.io/nettest?tn=web_connectivity&ta=%7B%22urls%22%3A%5B%22gateway.ipfs.io%22%2C%22cat.referendum.barcelona%22%2C%22referendum.enricpineda.cat%22%2C%22www.referendum.legal%22%2C%22www.referendum.party%22%2C%22www.referendum.ninja%22%2C%22www.referendum.love%22%2C%22www.referendum.fyi%22%2C%22www.referendum.rip%22%2C%22www.referendum.soy%22%2C%22www.referendum.lol%22%2C%22www.referendum.voto%22%2C%22www.referendum.works%22%2C%22www.referendum.observer%22%2C%22www.referendum.fun%22%2C%22alerta.cat%22%2C%22referendum.pirata.cat%22%2C%22referendum.pau.fm%22%2C%22www.referendumcat.eu%22%2C%22nigeon.github.io%22%2C%22www.ref1oct.eu%22%2C%22www.ref1oct.cat%22%2C%22ref1oct.net%22%2C%22ref1oct.org%22%2C%22referendum.zalo.nyc%22%2C%22aniol.github.io%22%2C%22referendum.cat%22%2C%22ref1oct.cat%22%2C%22www.marianorajoy.cat%22%2C%22garantiespelreferendum.com%22%2C%22referendum.clash.cat%22%2C%22marianorajoy.clash.cat%22%5D%7D&mv=1.2.0" text="Test Catalan referendum sites" >}}
