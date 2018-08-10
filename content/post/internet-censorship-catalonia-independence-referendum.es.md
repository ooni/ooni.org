---
title: "Evidencia de censura en Internet durante el referéndum de independencia de Cataluña"
author: "Tord Lundström (Virtual Road), Maria Xynou (OONI)"
date: "2017-10-03"
tags: ["catalonia", "censorship", "country-es"]
categories: ["report"]
---

![Seized referendum site](/post/catalonia/seized.png)

Image: Catalan Independence Referendum site seized

**Note:** This post was originally published [here](/post/internet-censorship-catalonia-independence-referendum/) on 3rd October 2017. Below we provide a Spanish translation from the community.


Hace dos días, Cataluña celebró un [referéndum de independencia](http://time.com/4951665/catalan-referendum-2017/) de España. Mientras el mundo espera a ver qué ocurre a continuación, publicamos este artículo para compartir [evidencias](https://api.ooni.io/files/by_country/ES) de eventos recientes de censura que ocurrieron poco antes y durante el referéndum.

Confirmamos el bloqueo de al menos 25 sitios web relacionados con el referéndum catalán mediante las técnicas de "DNS tampering" (manipulación de DNS) y "HTTP blocking" (bloqueo de HTTP), basado en medidas recogidas por "[OONI Probe network](https://explorer.ooni.torproject.org/country/ES)" (red de sondas de OONI) desde tres redes locales. Los datos de OONI muestran que estos sitios fueron bloqueados cada día desde (al menos) el 25 de septiembre de 2017 (cuando la prueba comenzó) hasta el día del referéndum, el 1 de octubre de 2017.

# Referéndum catalán de independencia

Los catalanes tienen su propia lengua e identidad cultural, a pesar de ser parte de España. Su presidente, Carles Puigdemont, [argumenta](https://www.theguardian.com/world/2017/sep/21/why-do-some-catalans-want-independence-and-what-is-spains-view) que tienen un derecho moral, cultural, económico y político a la autodeterminación. En los últimos años, el movimiento por la independencia catalán se ha reforzado, en particular en el contexto de la crisis económica de España. Muchos partidarios de la independencia [argumentan](https://www.economist.com/news/leaders/21729438-there-are-better-ways-referendum-address-regions-legitimate-grievances-catalonias) que Cataluña ha sido oprimida desde hace tiempo por el gobierno central español, que no les reconoce su "derecho a decidir".

Cataluña ha buscado más autonomía e independencia de España en varias ocasiones. En 2006, Cataluña celebró un [referéndum para enmendar el Estatuto de Autonomía de Cataluña](https://www.theatlantic.com/international/archive/2017/10/catalonia-referendum/541611/), expandiendo la autoridad de su gobierno regional. Pero cuatro años después, el Tribunal Constitucional español revisó la ley debido a un recurso de inconstitucionalidad interpuesto por el Partido Popular, y sentenció que 14 de sus artículos son inconstitucionales, entre los que se encontraban la catalogación de Cataluña como nación y la obligación de España a invertir en infraestructuras catalanas teniendo en cuenta su contribución al PIB (producto interior bruto) de todo el estado, lo cual dio lugar a una [gran manifestación](http://www.bbc.com/news/10588494) en Barcelona.

El 9 de noviembre de 2014 (9N), Cataluña celebró un [referéndum de autodeterminación](http://www.bbc.com/news/world-europe-29982960) no vinculante, en el que se preguntó a los votantes si querían que Cataluña fuera un estado y si querían que dicho estado fuese independiente. A pesar de que el [80%](http://www.bbc.com/news/world-europe-29982960) de los votos fueron afirmativos para ambas preguntas (aunque la participación fue bastante baja), el Tribunal Constitucional dictaminó que el referéndum era "inconstitucional y nulo". Dichos eventos allanaron el camino para el último referéndum en Cataluña, pero esta vez el gobierno español mostró menos tolerancia.

Unos días antes del referéndum, la policía española realizó una [redada en las oficinas del gobierno regional catalán](https://www.theguardian.com/world/2017/sep/20/spain-guardia-civil-raid-catalan-government-hq-referendum-row) y arrestó a altos cargos. También hicieron redadas en las [oficinas del registro del dominio .cat](https://www.theregister.co.uk/2017/09/23/spanish_government_criticized_over_catalan_internet_registry_raid/). Los dominios asociados con el referéndum, como [referendum.cat](http://referendum.cat/) y [ref1oct.cat](http://ref1oct.cat/), han sido incautados. Pero la censura no se limitó a los dominios .cat. Muchos en Cataluña informaron que el acceso a otros dominios ("mirrors", es decir, clones de las webs originales), relacionados con el referéndum catalán [también estaban siendo bloqueados](https://www.theguardian.com/world/2017/sep/27/catalans-compare-spain-to-north-korea-after-referendum-sites-blocked).

Para asegurar que los votantes pudieran participar incluso si sus colegios electorales [fueran cerrados por la policía](http://cadenaser.com/ser/2017/09/30/politica/1506775623_785036.html), el gobierno catalán anunció el "censo abierto" en la mañana del referéndum (1-O). Se ofreció a los votantes la oportunidad de escoger cualquier colegio electoral en el país. De todas formas, el sistema central que validaba que los votantes estaban en el censo fue [desconectado por Amazon](https://www.elgrupoinformatico.com/amazon-recibio-una-peticion-para-bloquear-los-servidores-del-referendum-t38919.html) durante las primeras horas del día. Previamente a [Google también se le ordenó desconectar una aplicación](https://www.thespainreport.com/articles/1166-170929190146-google-removes-catalan-referendum-app-from-google-play-after-catalan-high-court-issues-take-down-order) que proporcionaba información actualizada sobre los colegios electorales abiertos para votar en el referéndum de independencia.

A pesar de los intentos de bloquear el proceso, servidores alternativos de recuento de votos fueron puestos a disposición de los participantes y el referéndum (1-O) se celebró el domingo pasado. Los ciudadanos informaron que tuvieron dificultades en el acceso a Internet en los colegios electorales, pero no tenemos datos para confirmar si un limitació (throttling) o desconexión de Internet tuvo lugar.

Según los dirigentes catalanes, el [90%](https://www.theguardian.com/world/live/2017/oct/01/catalan-independence-referendum-spain-catalonia-vote-live), más de 2,2 millones de papeletas, fueron a favor de la independencia. De todas formas, el referéndum estuvo lejos de ser pacífico, ya que la dura [violencia policial](http://www.bbc.com/news/world-europe-41461032) resultó en cerca de 900 votantes heridos. Hoy, miles están [protestando contra la violencia de la policía española](http://www.bbc.com/news/av/world-europe-41478754/catalonia-referendum-thousands-protest-spanish-police-violence) en las calles de Barcelona, enviada para dar respuesta a la campaña en contra del referéndum.

El presidente de Cataluña [pidió a la Comisión Europea que fomentara la mediación internacional](https://www.theguardian.com/world/2017/oct/02/catalan-government-emergency-meeting-spain-independence) con España sobre la independencia de la región. Madrid sostiene que el referéndum era [ilegal](https://www.theguardian.com/commentisfree/2017/oct/01/the-guardian-view-on-catalonias-referendum-the-spanish-state-has-lost) y que su resultado fue por lo tanto nulo. España está sufriendo actualmente una de sus [mayores crisis políticas](http://www.bbc.com/news/world-europe-41466619) en décadas. Incluso la sociedad catalana está bastante [dividida](https://www.theguardian.com/world/2017/sep/19/temperature-climbs-in-spain-as-catalan-question-comes-to-a-head) en la cuestión de la independencia.

Reconocemos la sensibilidad de la situación política actual. A través de [datos empíricos](https://api.ooni.io/files/by_country/ES) recogidos por miembros de la comunidad "[OONI Probe](https://ooni.torproject.org/install/)" en España y Cataluña, nuestro objetivo es apoyar el debate público. 

# Bloqueo de las páginas del referéndum Catalán

Para recopilar evidencias que demuestran si y cómo los sitios asociados al referéndum catalán fueron bloqueados, las [pruebas OONI Probe](https://ooni.torproject.org/install/) se llevaron a cabo en Cataluña durante la última semana. OONI Probe es un [software gratuito](https://github.com/TheTorProject/ooni-probe) y abierto que cualquiera puede [ejecutar](https://ooni.torproject.org/install/) para medir el bloqueo de sitios web. Todos los datos de medición de red recopilados por OONI Probe se [publican](https://explorer.ooni.torproject.org/world/) automáticamente para aumentar la transparencia de la censura en Internet en todo el mundo.  

[Los datos de OONI](https://explorer.ooni.torproject.org/country/ES) confirman que, a partir del 25 de septiembre de 2017 (cuando se inició la prueba OONI Probe), los ISP locales han estado bloqueando el acceso a (por lo menos) 25 referendos catalanes y continuaron reforzando los bloques en el día del referéndum. 

En la tabla siguiente se relacionan las mediciones de la red de tres ISPs locales y se muestra cómo y qué sitios fueron **bloqueados el 1 de Octubre de 2017**, cuando se celebró el referéndum de independencia de Cataluña. 

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

Muchos de los dominios bloqueados (como referendum.lol y referendum.ninja) en la tabla anterior son mirrors (espejos) de la web referendum.cat, que fue [incautado](https://www.theregister.co.uk/2017/09/23/spanish_government_criticized_over_catalan_internet_registry_raid/) hace más de una semana. [Los espejos de sitios web bloqueados](https://github.com/GrenderG/referendum_cat_mirror) han sido gestionados por voluntarios que utilizan otros dominios de nivel superior (como .ninja .lol y .party).

[Los datos de OONI](https://explorer.ooni.torproject.org/country/ES) muestran que estos espejos fueron bloqueados mediante la manipulación de DNS y a través de páginas de bloque servidas por proxies transparentes de HTTP. Daniel Morales, activista de la libertad de expresión que trabajó en los guiones para reflejar los sitios bloqueados, fue llamado a comparecer ante el tribunal el 22 de Septiembre y [acusado](https://elpais.com/elpais/2017/09/28/inenglish/1506588970_026442.html) de ser apoyado por hackers rusos por El País, uno de los mayores medios de comunicación de España.

France Telecom Espanña (AS12479) y Euskaltel (AS12338) bloquearon el acceso a sitios mediante la manipulación de DNS, mientras que Telefónica de España (AS3352) sirvió páginas de bloque mediante el uso de proxies transparentes HTTP.  Conviene señalar que France Telecom España (AS12479) y Euskaltel (AS12338) no bloquearon ciertos dominios .cat (referendum.cat y ref1oct.cat), probablemente porque estos sitios ya habían sido incautados. Telefónica de España (AS3352), por otro lado, reforzó la censura al servir páginas de bloque para dominios incautados.

Los datos de OONI muestran el bloqueo de los sitios anteriores que llevaron al referéndum, entre el 25 de Septiembre de 2017 y el 1 de octubre de 2017. A estos datos se puede acceder a través de los siguientes pasos:  
    
1. Acceda a [la página en español de OONI Explorer](https://explorer.ooni.torproject.org/country/ES) 

2. Haga clic en "Filter results" 

3. Agregue uno de los dominios (de la tabla anterior) en la sección "Test Input" 

4. Opcional: Filtre las mediciones por fecha a través de la sección "Date Range" 

5. Haga clic en "Apply Filter" 

6. Haga clic en una de las mediciones filtradas 

7. Desplácese hasta el final de la página de medición 

8. Haga clic en "Object" para ver los datos de medición de la red  

Alternativamente, los datos pueden ser descargados y analizados a través de archivos JSON incluidos en OONI.  
    
Otras mediciones obtenidas de sensores que proporcionan valores históricos de DNS muestran que referendum.cat fue redirigido al dominio paginaintervenida.edgesuite.net alojado por Akamai el 13 de septiembre.

```

2017-09-13 16:30:46 -0000 EN CNAME paginaintervenida.edgesuite.net. 

```

A partir del 3 de octubre de 2017, los siguientes nombres de dominio son redirigidos a paginaintervenida.edgesuite.net:  

* piolin.cat

* ref1oct.cat

* webdelsi.cat

* empaperem.cat

* garanties.cat

* joconvoco.cat

* vullvotar.cat

* prenpartit.cat

* referendum.cat

* votaras1-o.cat

* 7democracia.cat

* sorayasaenz.cat

* marianorajoy.cat

* referendumcat.cat

* 1octreferendum.cat

* holademocracia.cat

* referendumoct1.cat

* cridademocracia.cat

* referendumoctubre1.cat
        
Todos los dominios .cat han sido retirados como resultado de la [orden judicial](http://fundacio.cat/es/noticias/liberacion-del-director-de-innovacion-y-sistemas-de-informacion-de-la-fundacio-puntcat) recibida por Fundacio .cat el 15 de septiembre del Tribunal Superior de Justicia de Cataluña. El director de investigación e información de la organización que dirige el dominio catalán de nivel superior .cat, Pep Oliver, fue detenido el 20 de septiembre y mantenido bajo custodia durante 60 horas.

# Conclusión

En resumen, tres técnicas principales han sido usadas para censurar sitios web del referéndum catalán.

**DNS tampering**

Los sensores analógicos DNS de los operadores están configurados para devolver respuestas DNS falsas para bloquear los nombres de dominio. Esta técnica se puede aplicar para cualquier dominio, pero se puede omitir cambiando estos sensores analógicos DNS de los dispositivos (utilizando Google 8.8.8.8, por ejemplo, en lugar del servidor DNS del operador).

[Los datos de OONI](https://explorer.ooni.torproject.org/country/ES) muestran que  France Telecom Espanya (AS12479) y Euskaltel (AS12338) utilzaron esta técnica para bloquear sitios web relacioneados con el referendum catalán.

**Bloqueo de HTTP(S)**

Esta técnica inspecciona, intercepta y altera el tráfico en la red por lo que las peticiones HTTP y/o HTTPS a URLs son reemplazadas por una nueva página (“página bloqueada”) indicando que éstas han sido bloqueadas.

[Los datos de OONI](https://explorer.ooni.torproject.org/country/ES), en este caso muestran que Telefonica de España (AS3352) usó esta técnica para bloquear páginas relacionadas con el referendum catalá. Registros de tráfico web y análisis de los bloqueos indicaron que Telefonica puede estar usando tecnología israelí de la empresa [Allot Communications](https://www.allot.com/press-release/telefonica-partners-with-allot-communications-to-establish-a-multi-service-platform-for-improved-security-and-user-experience/).

**Apropiación del dominio .CAT** 

Una vez que Fundacio .CAT acató la orden judicial, los dominios han sido redirigidos por medio de DNS al dominio paginaintervenida.edgesuite.net alojado en Akamai. Muchos dominios .cat, sin embargo, también fueron bloqueados por medio de la manipulación de DNS y el bloqueo de HTTP. 


El futuro de Cataluña sigue siendo poco claro. Lo que está claro es que es importante mantener a la gente poderosa rindiendo cuentas, incluso en las "democracias occidentales". Una forma de hacerlo es [midiendo las redes](https://ooni.torproject.org/install/) y aumentando la transparencia de los controles de la información.

La evidencia es necesaria para un debate público informado.

**Actualización (2017-10-04 16:00 UTC):** Qurium/Virtual Road han publicado datos mostrando los mecanismos usados para bloquear sitios web associados al referéndum del 1 de octubre en Catalunya. Los podéis leer [aquí](https://www.qurium.org/alerts/spain/blocking-techniques-catalunya/).

**Actualización (2017-10-03 20:38 UTC):** Por cortesía de nuestros amigos de [Security Without Borders](https://securitywithoutborders.org/blog/2017/09/27/catalonia.html), ahora puedes [ejecutar OONI Probe](https://ooni.torproject.org/install) para probar la censura a sitios web catalanes haciendo clic en el botón "Run OONI" aquí.

{{<ooni-run-banner link="https://run.ooni.io/nettest?tn=web_connectivity&ta=%7B%22urls%22%3A%5B%22gateway.ipfs.io%22%2C%22cat.referendum.barcelona%22%2C%22referendum.enricpineda.cat%22%2C%22www.referendum.legal%22%2C%22www.referendum.party%22%2C%22www.referendum.ninja%22%2C%22www.referendum.love%22%2C%22www.referendum.fyi%22%2C%22www.referendum.rip%22%2C%22www.referendum.soy%22%2C%22www.referendum.lol%22%2C%22www.referendum.voto%22%2C%22www.referendum.works%22%2C%22www.referendum.observer%22%2C%22www.referendum.fun%22%2C%22alerta.cat%22%2C%22referendum.pirata.cat%22%2C%22referendum.pau.fm%22%2C%22www.referendumcat.eu%22%2C%22nigeon.github.io%22%2C%22www.ref1oct.eu%22%2C%22www.ref1oct.cat%22%2C%22ref1oct.net%22%2C%22ref1oct.org%22%2C%22referendum.zalo.nyc%22%2C%22aniol.github.io%22%2C%22referendum.cat%22%2C%22ref1oct.cat%22%2C%22www.marianorajoy.cat%22%2C%22garantiespelreferendum.com%22%2C%22referendum.clash.cat%22%2C%22marianorajoy.clash.cat%22%5D%7D&mv=1.2.0" text="Test Catalan referendum sites" >}}