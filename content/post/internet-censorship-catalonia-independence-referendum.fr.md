---
title: "Preuve de la censure sur Internet pendant le référendum de l'indépendance de la Catalogne"
author: "Tord Lundström (Virtual Road), Maria Xynou (OONI)"
date: "2017-10-05"
tags: ["catalonia", "censorship", "country-es"]
categories: ["report"]
aliases:
  - /internet-censure-catalogne
  - /post/internet-censure-catalogne
---

![Seized referendum site](/post/catalonia/seized.png)

Image: Catalan Independence Referendum site seized

**Note:** This post was originally published [here](/post/internet-censorship-catalonia-independence-referendum/) on 3rd October 2017. Below we provide a French translation by [Tomàs](https://twitter.com/ersikoo).


Il y a deux jours, la Catalogne a tenu un [référendum](http://time.com/4951665/catalan-referendum-2017/) en vue de l'indépendance de l'Espagne. Alors que le monde attend à voir ce qui va se passer ensuite, on publique cette post afin de partager les preuves des récents [événements de censure](https://api.ooni.io/files/by_country/ES) qui se sont déroulés pendant et avant le référendum.

On confirme le blocage d'au moins 25 sites liés au référendum catalan en utilisant le “DNS tampering” (falsification du DNS) et le “HTTP Blocking” (blocage HTTP), en fonction des mesures [collectées](https://explorer.ooni.torproject.org/country/ES) par “OONI Probe network” (réseau de sondes OONI) auprès de trois réseaux locaux. Les données OONI montrent que ces sites ont été bloqués tous les jours depuis (au moins) le 25 septembre 2017 (lorsque le test a commencé) jusqu’à le jour du référendum, le 1er octobre 2017.

# Référendum de l'indépendance de la Catalogne

Les catalans ont leur propre identité linguistique et culturelle, même s’ils font partie de l'Espagne. Leur président, Carles Puigdemont, [soutient](https://www.theguardian.com/world/2017/sep/21/why-do-some-catalans-want-independence-and-what-is-spains-view) qu'ils ont un droit moral, culturel, économique et politique à l'autodétermination. Au cours des dernières années, le mouvement d'indépendance catalan s'est renforcé, en particulier pendant  la crise économique espagnole. Nombreux partisans de l'indépendance [soutiennent](https://www.economist.com/news/leaders/21729438-there-are-better-ways-referendum-address-regions-legitimate-grievances-catalonias) que la Catalogne a longtemps été opprimée sous le gouvernement central espagnol qui ne reconnaît pas leur «droit de choisir».

La Catalogne a cherché plus d'autonomie et d'indépendance de l'Espagne plusieurs fois. En 2006, la Catalogne a tenu un [référendum pour modifier le Statut d'Autonomie de Catalogne](https://www.theatlantic.com/international/archive/2017/10/catalonia-referendum/541611/), en élargissant l'autorité de son gouvernement régional. Mais quatre ans plus tard, la Cour Constitutionnelle Espagnole a examiné la loi sur demande du gouvernement espagnol conduit par le Parti Populaire (PP), en réécrivant et en dictant l'interprétation de plusieurs de ses articles et en menant à une [manifestation massive](http://www.bbc.com/news/10588494) à Barcelone.

Le 9 novembre 2014 (9N), la Catalogne a tenu un [référendum d'autodétermination](http://www.bbc.com/news/world-europe-29982960) non contraignant, où on a demandé aux électeurs s'ils voulaient que la Catalogne soit un Etat et s'ils voulaient que cet Etat soit indépendant. Même si [80%](http://www.bbc.com/news/world-europe-29982960) des bulletins de vote ont été exprimés en faveur des deux questions (bien que la participation électorale ait été assez faible), la Cour Constitutionnelle Espagnole a jugé le référendum «inconstitutionnel et nul». Ces événements ont ouvert la voie au dernier référendum de la Catalogne, mais cette fois le gouvernement espagnol a montré moins de tolérance.

Avant du référendum, la police espagnole [a attaqué des bureaux du gouvernement régional catalan](https://www.theguardian.com/world/2017/sep/20/spain-guardia-civil-raid-catalan-government-hq-referendum-row) et a arrêté des hauts fonctionnaires. Ils ont également [attaqué](https://www.theregister.co.uk/2017/09/23/spanish_government_criticized_over_catalan_internet_registry_raid/) les bureaux du registre Internet .cat. Les domaines associés au référendum, comme [referendum.cat](http://referendum.cat/) et [ref1oct.cat](http://ref1oct.cat/), ont été saisis. Mais les événements de censure n’ont pas été limités aux domaines .cat. Plusieurs personnes en Catalogne ont signalé que l'accès à d'autres domaines (miroirs) liés au référendum catalan était également [bloqué](https://www.theguardian.com/world/2017/sep/27/catalans-compare-spain-to-north-korea-after-referendum-sites-blocked).

Pour s'assurer que les électeurs aient pu participer même si leurs postes de vote désignés [ont été fermés par la police](http://cadenaser.com/ser/2017/09/30/politica/1506775623_785036.html), le gouvernement catalan a annoncé le «recensement universel» dans la matinée du référendum (1-O). Les électeurs ont eu la possibilité de choisir n'importe quel poste de vote dans le pays. Cependant, le système central qui a validé que les électeurs étaient dans le recensement a été [retiré par Amazon](https://www.elgrupoinformatico.com/amazon-recibio-una-peticion-para-bloquear-los-servidores-del-referendum-t38919.html) pendant les premières heures de la journée. Google a déjà été [ordonné de déposer une application de vote qui fournissait des informations sur les bureaux de vote pour le référendum](https://www.thespainreport.com/articles/1166-170929190146-google-removes-catalan-referendum-app-from-google-play-after-catalan-high-court-issues-take-down-order) d'indépendance catalan.

Malgré toutes les tentatives de blocage du processus, des serveurs alternatifs pour compter les votes ont été déployés et le référendum (1-O) a eu lieu dimanche dernier. Des personnes locales ont signalé qu'elles avaient des difficultés pour accéder à Internet dans les bureaux de vote, mais nous n'avons pas de données pour confirmer s’il s’agissant du “throttling” ou d’une panne de courant.

Selon les responsables catalans, [90% de plus de 2,2 millions de bulletins de vote ont été en faveur de l'indépendance](https://www.theguardian.com/world/live/2017/oct/01/catalan-independence-referendum-spain-catalonia-vote-live). Cependant, le référendum a été loin d'être pacifique, car de lourdes [violences policières](http://www.bbc.com/news/world-europe-41461032) ont entraîné des centaines d'électeurs blessés. Aujourd'hui, [des milliers protestent contre la violence policière espagnole](http://www.bbc.com/news/av/world-europe-41478754/catalonia-referendum-thousands-protest-spanish-police-violence) dans les rues de Barcelone, en réponse à la répression lors du référendum.

Le président de la Catalogne [a demandé à la Commission européenne d'encourager la médiation internationale](https://www.theguardian.com/world/2017/oct/02/catalan-government-emergency-meeting-spain-independence) avec l'Espagne sur l'indépendance de la région. Madrid soutient que le référendum a été [illégal](https://www.theguardian.com/commentisfree/2017/oct/01/the-guardian-view-on-catalonias-referendum-the-spanish-state-has-lost) et son résultat était donc nul. L'Espagne connaît actuellement une de ses plus [grandes crises politiques](http://www.bbc.com/news/world-europe-41466619) depuis des décennies. Même la société catalane est assez [divisée](https://www.theguardian.com/world/2017/sep/19/temperature-climbs-in-spain-as-catalan-question-comes-to-a-head) sur la question de l'indépendance.

On reconnaisse la sensibilité de la situation politique actuelle. Grâce à des [données empiriques](https://api.ooni.io/files/by_country/ES) recueillies par les membres de la communauté [OONI Probe](https://ooni.torproject.org/install/) en Espagne et en Catalogne, nous visons à soutenir le débat public.

# Blocage des sites du référendum catalan

Pour recueillir des preuves montrant si et comment les sites associés au référendum catalan ont été bloqués, [les tests de OONI Probe](https://ooni.torproject.org/install/) ont été effectués en Catalogne au cours de la semaine dernière. OONI Probe est un [logiciel gratuit et ouvert](https://github.com/TheTorProject/ooni-probe) que n'importe qui peut exécuter pour [mesurer](https://ooni.torproject.org/install/) le blocage des sites web. Toutes les données de mesure du réseau collectées par OONI Probe sont [publiées](https://explorer.ooni.torproject.org/world/) automatiquement pour accroître la transparence de la censure sur Internet dans le monde entier.

[Les données d'OONI](https://explorer.ooni.torproject.org/country/ES) confirment que, à partir du 25 septembre 2017 (lorsque le test OONI Probe a commencé), les ISP locaux bloquent l'accès à (au moins) 25 sites du référendum catalan et ont continué à appliquer les blocs lors de la journée référendaire.

Le tableau ci-dessous donne un lien vers les mesures de réseau collectées auprès de trois ISP locaux et montre comment et quels sites ont été **bloqués le 1er Octobre 2017**, pendant le référendum d'indépendance catalan.

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

Beaucoup de domaines bloqués (tels que referendum.lol et referendum.ninja) dans le tableau ci-dessus sont des miroirs de referendum.cat, [saisis](https://www.theregister.co.uk/2017/09/23/spanish_government_criticized_over_catalan_internet_registry_raid/) plus d'une semaine avant. [Les miroirs des sites web bloqués](https://github.com/GrenderG/referendum_cat_mirror) ont été gérés par des volontaires en utilisant d'autres domaines de premier niveau (tels que .ninja .lol et .party).

[Les données OONI](https://explorer.ooni.torproject.org/country/ES) montrent que ces miroirs ont été bloqués par “DNS tampering” et par des pages bloquant desservies par des proxy HTTP transparents. Daniel Morales, un activiste de la liberté d'expression qui a travaillé sur les scripts pour refléter les sites bloqués, a été appelé à comparaître devant le tribunal le 22 Septembre et a été [accusé](https://elpais.com/elpais/2017/09/28/inenglish/1506588970_026442.html) d'être soutenu par des pirates russes par El Pais, l'un des plus importants journaux de l'Espagne.

France Télécom España (AS12479) et Euskaltel (AS12338) ont bloqué l'accès aux sites au moyen de “DNS tampering”, tandis que Telefónica de España (AS3352) a servi des pages bloquant grâce à l'utilisation de proxies transparentes HTTP. Il convient de noter que France Télécom España (AS12479) et Euskaltel (AS12338) n'ont pas bloqué certains domaines .cat (référendum.cat et ref1oct.cat), probablement car ces sites avaient déjà été saisis. Telefónica de España (AS3352), d'autre part, a renforcé la censure en servant des pages de bloc pour les domaines saisis.

Les données OONI montrent le blocage des sites ci-dessus menant au référendum, entre le 25 septembre 2017 et le 1er octobre 2017. Ces données peuvent être consultées en faisant le suivant:

1. Accéder à la [page espagnole d'OONI Explorer](https://explorer.ooni.torproject.org/country/ES)

2. Cliquez sur "Filter results"

3. Ajoutez un des domaines (du tableau ci-dessus) dans la section "Test input"

4. Facultatif: Filtrer les mesures par date dans la section "Date Range"

5. Cliquez sur "Apply Filter"

6. Cliquez sur l'une des mesures filtrées

7. Faites défiler jusqu'à la fin de la page de mesure

8. Cliquez sur "Object" pour afficher les données de mesure du réseau

Alternativement, les données peuvent être téléchargées et analysées via des fichiers json inclus [dans les OONI](https://api.ooni.io/files/by_country/ES).

D'autres mesures collectées à partir de sondes qui fournissent des valeurs historiques du DNS montrent que referendum.cat a été redirigé vers le domaine paginaintervenida.edgesuite.net hébergé par Akamai le 13 septembre.

```

2017-09-13 16:30:46 -0000 IN CNAME paginaintervenida.edgesuite.net.

```


À partir du 3 octobre 2017, les noms de domaine suivants sont redirigés vers paginaintervenida.edgesuite.net:


* piolin.cat

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

Tous les domaines .cat ont été supprimés en raison [de l'ordonnance du tribunal](http://fundacio.cat/es/noticias/liberacion-del-director-de-innovacion-y-sistemas-de-informacion-de-la-fundacio-puntcat) que fundacio.cat a reçue le 15 septembre du Tribunal Supérieur de Justice de Catalogne (TSJC). Le directeur de la recherche et de l'information de l'organisation qui dirige le domaine de premier niveau catalan .cat, Pep Oliver, a été détenu le 20 septembre et arrêté pendant 60 heures.

# Conclusion

En résumé, trois techniques principales ont été utilisées pour censurer les sites du référendum catalans:

**DNS tampering (falsification de DNS)**

Les résolveurs DNS des opérateurs sont configurés pour renvoyer des réponses DNS fausses pour bloquer les noms de domaine. Cette technique peut être appliquée pour n'importe quel domaine mais peut être contournée en modifiant les résolveurs DNS des périphériques (en utilisant Google 8.8.8.8, par exemple, au lieu du serveur DNS de l'opérateur).

[Les données d'OONI](https://explorer.ooni.torproject.org/country/ES) montrent que France Télécom España (AS12479) et Euskaltel (AS12338) ont adopté cette technique pour bloquer les sites liés au référendum catalan.

**HTTP(S) blocking (HTTP blocage)**

Cette technique inspecte, intercepte et modifie le trafic web afin que les requêtes HTTP et / ou HTTPS vers les URL soient remplacées par une nouvelle page ("page bloquant") indiquant qu'elles ont été bloquées

[Les données OONI](https://explorer.ooni.torproject.org/country/ES) montrent que Telefóonica de España (AS3352) a adopté cette technique pour bloquer les sites liés au référendum catalan. Les enregistrements de trafic et l'analyse du blocage indiquent que Telefónica pourrait utiliser la technologie israélienne [d'Allot Communications](https://www.allot.com/press-release/telefonica-partners-with-allot-communications-to-establish-a-multi-service-platform-for-improved-security-and-user-experience/).

**Saisie de domaines .CAT**

Une fois que Fundacio .CAT a mis en œuvre l'ordonnance du tribunal, les domaines ont été redirigés par DNS vers le domaine paginaintervenida.edgesuite.net hébergé sur Akamai. Beaucoup de domaines .cat ont également été bloqués par la falsification de DNS et le blocage HTTP.


L'avenir de la Catalogne reste tout à fait peu clair. Ce qui est clair, c'est qu'il est important de garder les responsables, même dans les «démocraties occidentales». Une façon de le faire est [de mesurer les réseaux](https://ooni.torproject.org/install/) et d'accroître la transparence des contrôles de l'information.

Des preuves sont nécessaires pour un débat public éclairé.
 

*  **Mise à jour (2017-01-04 16:00 UTC):** Qurium / Virtual Road a publié des données montrant les mécanismes utilisés pour bloquer les sites associés au référendum du 1-O de Catalogne. Regardez leurs résultats [ici](https://www.qurium.org/alerts/spain/blocking-techniques-catalunya/).

* **Mise à jour (2017-10-03 20:38 UTC):** Grâce à nos amis de [Security without Borders](https://securitywithoutborders.org/blog/2017/09/27/catalonia.html), vous pouvez [exécuter OONI Probe](https://ooni.torproject.org/install) pour tester les sites Web catalans pour la censure en cliquant sur le bouton "Exécuter OONI" ci-dessous:

{{<ooni-run-banner link="https://run.ooni.io/nettest?tn=web_connectivity&ta=%7B%22urls%22%3A%5B%22gateway.ipfs.io%22%2C%22cat.referendum.barcelona%22%2C%22referendum.enricpineda.cat%22%2C%22www.referendum.legal%22%2C%22www.referendum.party%22%2C%22www.referendum.ninja%22%2C%22www.referendum.love%22%2C%22www.referendum.fyi%22%2C%22www.referendum.rip%22%2C%22www.referendum.soy%22%2C%22www.referendum.lol%22%2C%22www.referendum.voto%22%2C%22www.referendum.works%22%2C%22www.referendum.observer%22%2C%22www.referendum.fun%22%2C%22alerta.cat%22%2C%22referendum.pirata.cat%22%2C%22referendum.pau.fm%22%2C%22www.referendumcat.eu%22%2C%22nigeon.github.io%22%2C%22www.ref1oct.eu%22%2C%22www.ref1oct.cat%22%2C%22ref1oct.net%22%2C%22ref1oct.org%22%2C%22referendum.zalo.nyc%22%2C%22aniol.github.io%22%2C%22referendum.cat%22%2C%22ref1oct.cat%22%2C%22www.marianorajoy.cat%22%2C%22garantiespelreferendum.com%22%2C%22referendum.clash.cat%22%2C%22marianorajoy.clash.cat%22%5D%7D&mv=1.2.0" text="Test Catalan referendum sites" >}}
