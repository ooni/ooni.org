---
title: Preguntas frecuentes (FAQ)
description: Esta sección de preguntas frecuentes pretende responder a las preguntas que con más frecuencia nos plantea la comunidad.
aliases:
    - es/about/faq/
---

Este documento fue traducido al español por Katherine Pennacchio y Mariengracia Chirinos.

Documento original:
* English, [Frequently Asked Questions (FAQ)](https://ooni.org/support/faq/)

Esta sección de preguntas frecuentes pretende responder a las preguntas que con más frecuencia nos plantea la comunidad.

¿Hay alguna otra pregunta que le gustaría que tratáramos? [Háganoslo saber](https://ooni.org/about/#contact).

* [Sobre OONI](#sobre-ooni)

    * [¿Qué es OONI?](#qué-es-ooni)

    * [¿Por qué OONI?](#por-qué-ooni)

    * [¿Qué hace OONI?](#qué-hace-ooni)

    * [¿Por qué medir la censura en Internet?](#por-qué-medir-la-censura-en-internet)

    * [¿Cómo se financia OONI?](#cómo-se-financia-ooni)

    * [¿Cuál es la relación de OONI con el Proyecto Tor?](#cuál-es-la-relación-de-ooni-con-el-proyecto-tor)

    * [¿Dónde tiene su sede OONI?](#dónde-tiene-su-sede-ooni)

    * [¿Cuál es el estatus legal de la OONI?](#cuál-es-el-estatus-legal-de-la-ooni)

    * [¿Cómo puedo involucrarme?](#cómo-puedo-involucrarme)

* [OONI Probe](#ooni-probe)

    * [¿Qué es OONI Probe?](#qué-es-ooni-probe)

    * [En mi país no hay censura. ¿Por qué utilizar OONI Probe?](#en-mi-país-no-hay-censura-por-qué-utilizar-ooni-probe)

    * [¿Qué hacen los tests de OONI Probe?](#qué-hacen-los-tests-de-ooni-probe)

    * [¿Cómo miden los tests de OONI Probe la censura en Internet?](#cómo-miden-los-tests-de-ooni-probe-la-censura-en-internet)

    * [No soy un experto en tecnología. ¿Puedo utilizar OONI Probe?](#no-soy-un-experto-en-tecnología-puedo-utilizar-ooni-probe)

    * [¿Cómo puedo ejecutar OONI Probe?](#cómo-puedo-ejecutar-ooni-probe)

    * [He ejecutado OONI Probe. ¿Debo enviarles los resultados?](#he-ejecutado-ooni-probe-debo-enviarles-los-resultados)

    * [¿Con qué frecuencia debo ejecutar OONI Probe?](#con-qué-frecuencia-debo-ejecutar-ooni-probe)

    * [¿Cómo puedo ejecutar OONI Probe automáticamente?](#cómo-puedo-ejecutar-ooni-probe-automáticamente)

    * [¿Durante cuánto tiempo debo ejecutar OONI Probe?](#durante-cuánto-tiempo-debo-ejecutar-ooni-probe)

    * [He encontrado sitios web bloqueados. ¿Cómo puedo evitar su bloqueo?](#he-encontrado-sitios-web-bloqueados-cómo-puedo-evitar-su-bloqueo)

    * [OONI Probe ha encontrado un middlebox en mi red. ¿Significa eso que estoy bajo vigilancia?](#ooni-probe-ha-encontrado-un-middlebox-en-mi-red-significa-eso-que-estoy-bajo-vigilancia)

    * [¿Puedo medir la censura en Internet de forma remota en otro país?](#puedo-medir-la-censura-en-internet-de-forma-remota-en-otro-país)

    * [¿Qué tipo de datos recoge OONI Probe?](#qué-tipo-de-datos-recoge-ooni-probe)

    * [¿Cómo puedo cancelar el envío de mediciones de OONI?](#cómo-puedo-cancelar-el-envío-de-mediciones-de-ooni)

    * [¿Cuáles son los riesgos de ejecutar OONI Probe?](#cuáles-son-los-riesgos-de-ejecutar-ooni-probe)

    * [¿Cómo puedo reducir los riesgos asociados al uso de OONI Probe?](#cómo-puedo-reducir-los-riesgos-asociados-al-uso-de-ooni-probe)

    * [¿Puedo ejecutar OONI Probe a través de una VPN?](#puedo-ejecutar-ooni-probe-a-través-de-una-vpn)

    * [¿Puede OONI proporcionar asesoramiento legal?](#puede-ooni-proporcionar-asesoramiento-legal)

* [Testeando sitios web](#testeando-sitios-web)

    * [¿Qué sitios web testeará en busca de censura con OONI Probe?](#qué-sitios-web-testeará-en-busca-de-censura-con-ooni-probe)

    * [¿Qué son las listas de test?](#qué-son-las-listas-de-test)
    
    * [¿Por qué OONI Probe utiliza listas de test?](#por-qué-ooni-probe-utiliza-listas-de-test)

    * [¿Por qué la aplicación móvil OONI Probe no testea todas las páginas web de las listas de test?](#por-qué-la-aplicación-móvil-ooni-probe-no-testea-todas-las-páginas-web-de-las-listas-de-test)

    * [¿Cómo puedo cambiar la duración de los tests en la aplicación móvil de OONI Probe para testear más sitios web?](#cómo-puedo-cambiar-la-duración-de-los-tests-en-la-aplicación-móvil-ooni-probe-para-testear-más-sitios-web)

    * [¿Cómo puedo encontrar la lista de test de mi país?](#cómo-puedo-encontrar-la-lista-de-test-de-mi-país)

    * [¿Por qué mi país no tiene una lista de test?](#por-qué-mi-país-no-tiene-una-lista-de-test)

    * [¿Quién decide qué sitios web se incluyen en las listas de test?](#quién-decide-qué-sitios-web-se-incluyen-en-las-listas-de-test)

    * [¿Cómo puedo contribuir a las listas de test?](#cómo-puedo-contribuir-a-las-listas-de-test)

    * [No soy usuario de GitHub, pero me gustaría enviar URL para los test. ¿Cómo puedo hacerlo?](#no-soy-usuario-de-github-pero-me-gustaría-enviar-url-para-los-tests-cómo-puedo-hacerlo)

    * [¿Cuál es la diferencia entre una lista de test y una lista de bloqueo?](#cuál-es-la-diferencia-entre-una-lista-de-test-y-una-lista-de-bloqueo)

    * [¿Qué tipos de sitios web puede testear OONI Probe?](#qué-tipos-de-sitios-web-puede-testear-ooni-probe)

    * [¿Cómo puedo elegir qué tipo de sitios web testear?](#cómo-puedo-elegir-qué-tipo-de-sitios-web-testear)

    * [¿Cómo puedo elegir las páginas web que quiero testear?](#cómo-puedo-elegir-las-páginas-web-que-quiero-testear)

    * [¿Cómo puedo testear una lista personalizada de URLs?](#cómo-puedo-testear-una-lista-personalizada-de-urls)

* [Datos OONI](#datos-ooni)

    * [¿Qué son los datos OONI?](#qué-son-los-datos-ooni)

    * [¿Por qué publica datos OONI?](#por-qué-publica-datos-ooni)

    * [¿Dónde publica datos OONI?](#dónde-publica-datos-ooni)

    * [¿Cómo puedo interpretar los datos OONI?](#cómo-puedo-interpretar-los-datos-ooni)

    * [¿Cómo puedo obtener y analizar los datos OONI?](#cómo-puedo-obtener-y-analizar-los-datos-ooni)

* [Explorador de OONI](#explorador-ooni)

    * [¿Qué es el Explorador de OONI?](#qué-es-ooni-explorer)

    * [¿Cómo puedo encontrar sitios web bloqueados a través del Explorador OONI?](#cómo-puedo-encontrar-sitios-web-bloqueados-a-través-del-explorador-de-ooni)

    * [¿Cómo puedo acceder a las mediciones?](#cómo-puedo-acceder-a-las-mediciones)

    * [¿Cómo puedo encontrar datos OONI a través del OONI Explorer?](#cómo-puedo-encontrar-los-datos-de-ooni-a-través-del-explorador-de-ooni)

    * [¿Cómo puedo encontrar "evidencias de censura en Internet" en una medición?](#cómo-puedo-encontrar-tests-de-censura-en-internet-en-una-medición)

    * [¿Cómo puedo encontrar sitios web bloqueados en mi país?](#cómo-puedo-encontrar-los-sitios-web-bloqueados-en-mi-país)

    * [¿Cómo puedo comprobar si un sitio web específico está bloqueado?](#cómo-puedo-comprobar-si-un-sitio-web-específico-está-bloqueado)

    * [¿Por qué no puedo encontrar resultados para un sitio web específico?](#por-qué-no-encuentro-resultados-para-un-sitio-web-específico)

    * [¿Cómo puedo comprobar el bloqueo de sitios web durante un periodo de tiempo específico?](#cómo-puedo-comprobar-el-bloqueo-de-sitios-web-durante-un-periodo-de-tiempo-específico)
    
    * [¿Qué quiere decir "Confirmado"?](#qué-quiere-decir-confirmado)

    * [Sé de muchos otros sitios web que están bloqueados. ¿Por qué el Explorador de OONI no las muestra cuando selecciono "confirmado"?](#sé-de-muchos-otros-sitios-web-que-están-bloqueados-por-qué-ooni-explorer-no-las-muestra-cuando-selecciono-confirmado)

    * [¿Por qué OONI confirma la censura cuando se muestra una página bloqueada?](#por-qué-ooni-confirma-la-censura-cuando-se-muestra-una-página-bloqueada)

    * [¿Por qué OONI no confirma otros casos de censura en Internet (más allá de las páginas bloqueadas)?](#por-qué-ooni-no-confirma-otros-casos-de-censura-en-internet-más-allá-del-bloqueo-de-páginas)

    * [¿Qué quiere decir "Anomalías"?](#a-qué-se-refieren-por-anomalías)

    * [¿Por qué el Explorador de OONI sugiere que una página o app a la que puedo acceder está bloqueada en mi país?](#por-qué-ooni-explorer-sugiere-que-un-sitio-o-aplicación-al-que-puedo-acceder-está-bloqueado-en-mi-país)

    * [¿Qué son los falsos positivos?](#qué-son-los-falsos-positivos)

    * [¿Por qué se producen falsos positivos?](#por-qué-se-producen-falsos-positivos)

    * [¿Cómo puedo distinguir los falsos positivos?](#cómo-puedo-distinguir-los-falsos-positivos)

    * [¿Cómo puedo comprobar los resultados de otros tests de OONI Probe?](#cómo-puedo-chequear-los-resultados-de-otras-tests-de-ooni-probe)

    * [¿Por qué mi país no tiene ninguna medición reciente en el Explorador de OONI?](#por-qué-mi-país-no-tiene-mediciones-recientes-en-el-explorador-de-ooni)

## Sobre OONI

### ¿Qué es OONI?

El [Open Observatory of Network Interference (OONI)](https://ooni.org/) es un proyecto de software libre que pretende potenciar los esfuerzos
descentralizados para aumentar la transparencia de la censura en Internet en todo el mundo.

Desde 2012, OONI ha lanzado varias [aplicaciones de medición de la censura (OONI Probe)](https://ooni.org/install/) y [ha publicado abiertamente más de mil millones de mediciones de red](https://ooni.org/data/) sobre la censura en Internet
en todo el mundo.

### ¿Por qué OONI?

Nuestras herramientas de software libre, metodologías abiertas y datos abiertos pueden usarse para verificar nuestros hallazgos, reproducir nuestros estudios e investigar la censura en Internet en su país.

Creamos OONI para apoyar el debate público, informes basados en pruebas y la defensa de los controles de la información.

### ¿Qué hace OONI?

Para potenciar los esfuerzos descentralizados en el incremento de la transparencia de la censura en Internet en todo el mundo, nosotros:

* **Construimos software libre y de código abierto para detectar la censura en Internet**. [OONI Probe](https://ooni.org/install/) es una herramienta de medición de red que se puede utilizar para medir varias formas de censura en Internet, así como la velocidad y el rendimiento de la red.

* **Analizamos y publicamos abiertamente mediciones de red**. Cada día, analizamos y publicamos abiertamente mediciones en el [Explorador de OONI](https://explorer.ooni.org/), un sitio web que alberga más de mil millones de mediciones de red de más de 200 países desde 2012 hasta la fecha.

* **Publicamos informes de investigación sobre la censura en Internet en todo el mundo**. Basándonos en el análisis de las mediciones de OONI, publicamos [informes de investigación](https://ooni.org/reports/) (a menudo en colaboración con nuestros [socios](https://ooni.org/partners/) locales) que documentan casos de censura en internet en todo el mundo.

### ¿Por qué medir la censura en Internet?

La censura en Internet puede constituir una violación de los derechos humanos (como el derecho a la libertad de expresión y el derecho de
acceso a la información).

Sin embargo, identificar el bloqueo *intencionado* de sitios y servicios puede ser complicado. A continuación se exponen algunas razones:

1.  **Es más difícil darse cuenta del bloqueo de sitios y servicios menos populares**. La censura en Internet es más fácil de detectar cuando afecta a servicios que utilizamos habitualmente o cuando su bloqueo recibe cobertura mediática. El [bloqueo de Telegram e Instagram en Irán](https://ooni.org/post/2018-iran-protests/), por ejemplo, recibió bastante [cobertura mediática](http://www.bbc.com/news/world-middle-east-42529576) y atención internacional, mientras que el [bloqueo de sitios religiosos y de minorías étnicas](https://ooni.org/post/iran-internet-censorship/#human-rights-issues) puede ser menos conocido.

2.  **La censura en Internet a menudo difiere entre redes dentro de un mismo país**. En muchos países, los proveedores de servicios de Internet (ISP) bloquean el acceso a diferentes sitios web, a menudo como resultado de órdenes gubernamentales imprecisas. Un sitio puede ser accesible desde una red y estar bloqueado en otra.

3.  **La mayoría de las técnicas de censura pueden ser bastante sutiles**. Cuando un ISP sirve una página de bloqueo, suele informar de que un sitio está censurado de forma intencional y a menudo incluye una justificación legal. Algunos ISP, sin embargo, muestran páginas bloqueadas en blanco, lo que puede crear ambigüedad sobre si un sitio está bloqueado intencionadamente o es inaccesible por otras razones (como un problema técnico). En muchos países, los ISP no muestran páginas bloqueadas. Más bien, bloquean sitios por medios totalmente distintos (como la manipulación de DNS, el bloqueo de TCP/IP o la inyección de RST) que no informan a los usuarios ni justifican la censura. En estos casos, es más difícil determinar si un sitio está bloqueado intencionadamente, o si es inaccesible debido a otras razones (como un fallo transitorio de la red o un caso de [mala configuración del DNS](https://ooni.org/post/not-quite-network-censorship/)).

4.  **Algunos ISP adoptan una combinación de distintas técnicas de censura**. Mientras que su ISP puede servir una página bloqueada para algunos sitios (informándole de que esos sitios están intencionadamente bloqueados), pueden bloquear diferentes sitios con diferentes técnicas -- limitando su capacidad para darse cuenta del bloqueo de esos otros sitios. En algunos países, los ISP incluso [bloquean los mismos sitios con técnicas diferentes.](https://ooni.org/post/iran-internet-censorship/#blocked-domains-and-tools)

5.  **Bloqueo excesivo y daños colaterales**. En Indonesia, por ejemplo, se descubrió que [Vimeo y Reddit estaban bloqueados a pesar de que su prohibición se levantó](https://ooni.org/post/indonesia-internet-censorship/) hace más de 2 años. En Egipto, también se [bloquearon](https://ooni.org/post/egypt-network-interference/#collateral-damage) varios sitios alojados en la misma red de distribución de contenidos que The New Arab.

6.  **El hecho de que un sitio o servicio sea inaccesible no significa necesariamente que esté bloqueado por tu proveedor de Internet**. Quizá esté alojado en un servidor poco fiable, o quizá el propietario del sitio o servicio esté bloqueando todas las direcciones IP procedentes del país desde el que intentas acceder (en cumplimiento de las leyes y normativas).

Medir la censura en Internet es, por tanto, importante porque nos permite **inspeccionar una red** y examinar las razones de por qué y cómo
podemos (o no) conectarnos a un servicio de Internet.

Cuando inspeccionamos una red y observamos, por ejemplo, que nuestro proveedor de servicios de Internet está falseando la dirección IP del
sitio web al que intentamos acceder, esta información de incapacidad al acceder al sitio web deseado puede servir potencialmente como **prueba de interferencia intencionada**.

Mediante el uso de [OONI Probe](https://ooni.org/install/), se pueden medir las redes y recopilar datos que muestren qué se bloquea, cómo, cuándo y por quién.

### ¿Cómo se financia OONI?

Como la mayoría de los proyectos sin ánimo de lucro, OONI se financia
principalmente a través de subvenciones y donaciones.

Algunos de nuestros principales financiadores son la [Oficina de Democracia, Derechos Humanos y Trabajo](https://www.state.gov/bureaus-offices/under-secretary-for-civilian-security-democracy-and-human-rights/bureau-of-democracy-human-rights-and-labor/)
(DRL, por sus siglas en inglés) y la [Fundación Ford](https://www.fordfoundation.org/).

A lo largo de los años, el [Fondo de Tecnología Abierta](https://www.opentech.fund/) (OTF, por sus siglas en inglés) ha sido nuestro principal financiador, apoyando originalmente
las [primeras actividades de OONI en 2012](https://www.opentech.fund/results/supported-projects/ooni-open-observatory-of-network-interference/).
El OTF ha [apoyado](https://www.opentech.fund/results/supported-projects/) algunos de los proyectos de software libre más destacados que promueven los derechos humanos en Internet, como
[Tor](https://www.opentech.fund/results/supported-projects/tor-project/) y [Signal](https://www.opentech.fund/results/supported-projects/open-whisper-systems/).

Hemos recibido el apoyo de Mozilla ([Soporte de código abierto de Mozilla](https://www.mozilla.org/en-US/moss/)) para modernizar [OONI Explorer](https://ooni.org/post/next-generation-ooni-explorer/).
La creación inicial de OONI Explorer ([lanzado originalmente en marzo de 2016](https://blog.torproject.org/ooni-explorer-censorship-and-other-network-anomalies-around-world)) contó con el apoyo del [Ministerio de Asuntos Exteriores alemán](https://www.auswaertiges-amt.de/). A lo largo de
los años, también hemos recibido apoyo de otras fundaciones, como [Fondo para la Democracia en los Medios](https://mediademocracyfund.org/) (MDF, por sus siglas en inglés), [Sociedad de Internet](https://www.internetsociety.org/) (ISOC, por sus
siglas en inglés) y [Fundación Nacional para la Ciencia](https://www.nsf.gov/) (NSF, por sus siglas en inglés).

También hemos recibido otras formas de apoyo, como donaciones de empresas como [Google Jigsaw](https://jigsaw.google.com/), [Pantheon](https://pantheon.io/blog/pantheon-rises-support-open-web),
[Netlify](https://www.netlify.com/), [AirVPN](https://airvpn.org/) y [VPNCompare](https://www.vpncompare.co.uk/). Hemos recibido apoyo de infraestructura de [Greenhost](https://greenhost.net/) y Amazon (para alojar las [mediciones de OONI en Amazon S3](https://ooni-data.s3.amazonaws.com/) y para utilizar
sus [herramientas de big data](https://aws.amazon.com/research-credits/) para
analizar las mediciones).

Si desea apoyar nuestro trabajo, por favor considere la posibilidad de hacer una [donación a OONI](https://ooni.org/donate).

### ¿Cuál es la relación de OONI con el Proyecto Tor?

OONI nació a partir del [Proyecto Tor](https://www.torproject.org/).

En 2011, los desarrolladores del Proyecto Tor empezaron a crear metodologías y marcos abiertos con el objetivo de medir varias formas de interferencia en la red, lo que resultó en la creación de OONI.

Entre 2011 y 2019, OONI fue uno de los proyectos [alojados en el Proyecto Tor](https://2019.www.torproject.org/projects/projects.html.en).
A partir de 2020, OONI ha estado patrocinado fiscalmente por el [Centro Hermes para la Transparencia y los Derechos Humanos Digitales](https://www.hermescenter.org/), pero operamos de
forma independiente en términos de recaudación de fondos y gobernanza.

Continuamos siendo parte de la comunidad Tor y
[colaborando](https://ooni.org/partners/tor-project/) en la medición de la accesibilidad de Tor.

### ¿Dónde tiene su sede OONI?

OONI es un proyecto global, con una comunidad global y un equipo internacional.

A lo largo de los años, los miembros del equipo OONI han procedido de múltiples países, incluyendo Italia, Grecia, Sudáfrica, Camerún, India, Rusia, Alemania y Eslovenia.

No tenemos sede en ningún país concreto, debido a que no hemos tenido una oficina física y siempre hemos trabajado a distancia en línea.

### ¿Cuál es el estatus legal de la OONI?

OONI es un proyecto sin ánimo de lucro, pero no tiene una entidad legalmente registrada.

Entre 2011 y 2019, OONI fue un proyecto del [Proyecto de Tor](https://www.torproject.org/) (una organización sin ánimo de lucro 501(c)(3) registrada en EEUU). Desde 2020, estamos patrocinados fiscalmente por el [Centro Hermes para la Transparencia y los Derechos Humanos Digitales](https://www.hermescenter.org/), que es una organización de derechos digitales sin ánimo de lucro registrada en Italia.

### ¿Cómo puedo involucrarme?

Hay muchas formas de involucrarse.

* **[Ejecute OONI Probe](https://ooni.org/install/)**. Cuantas más redes se midan, más probabilidades tendremos (OONI y el público) de detectar la censura en Internet y otras formas de interferencia en la red. Incluso si no detecta censura, contribuir con mediciones sigue siendo muy útil (para análisis de datos y fines históricos).

* **[Sugiera URL para test](https://ooni.org/get-involved/contribute-test-lists/)**. Los resultados de la censura son tan interesantes como los sitios web que se comprueban. Por favor, ayúdenos a mejorar la calidad de las mediciones añadiendo sitios web que crea que deberían ser analizados.

* **[Traduzca las aplicaciones de OONI Probe](https://www.transifex.com/otf/ooniprobe/)**. [Traduciendo las aplicaciones de OONI Probe](https://github.com/ooni/translations/blob/master/Guidelines%20for%20OONI%20Probe.md), estará permitiendo a más comunidades medir la censura en Internet.

* **[Traduzca el Explorador de OONI](https://www.transifex.com/otf/ooni-explorer/)**. [Traduciendo el Explorador de OONI](https://github.com/ooni/translations/blob/master/Guidelines%20for%20OONI%20Explorer.md), permite a más comunidades acceder a datos de medición de la censura.

* **Participe en los debates de la comunidad**. Únase a nosotros en nuestro canal de [Slack](https://slack.ooni.org/) o IRC (ircs://irc.oftc.net:6697/#ooni) para discusiones en tiempo real, e inscríbase en nuestra [lista de correo](https://lists.torproject.org/cgi-bin/mailman/listinfo/ooni-talk) para recibir actualizaciones y compartir noticias.

* **Organice talleres OONI**. Involucre a sus comunidades locales en el uso de [OONI Probe](https://ooni.org/install/) y [OONI datos](https://ooni.org/data/). ¡Corra la voz!

* **Coordine pruebas de censura con usuarios de OONI Probe de todo el mundo**. Utilice la [plataforma OONI Run](https://run.ooni.io/) para generar enlaces basados en los sitios web que quiera probar, ¡y comparta esos enlaces con usuarios de OONI Probe de todo el mundo!

* **Utilice los datos de OONI en su investigación**. OONI proporciona [software libre](https://ooni.org/install/), [metodologías abiertas](https://ooni.org/docs/) y [datos abiertos](https://ooni.org/data/) que puede utilizar como parte de su investigación. Vea algunos de nuestros [informes de investigación](https://ooni.org/reports/) para ver ejemplos de lo que se puede descubrir a través de los datos de OONI.

* **Utilice los datos de OONI en sus reportajes periodísticos**. Aumente la credibilidad de sus reportajes haciendo referencia a los datos de medición de redes como prueba de sucesos de censura. Descubra [historias de censura nunca contadas](https://cpj.org/blog/2019/09/qa-ooni-explorer-team-unlock-the-webs-untold-censo.php) a través de los [datos de OONI](https://explorer.ooni.org/) y compártalas con el público.

* **Utilice los datos de OONI en sus actividades de defensa de derechos**. Aporte información a sus esfuerzos en defensa de derechos basándose en los casos de censura y las tendencias identificadas en todo el mundo a través de los [datos de OONI](https://ooni.org/data/).

* **Examine la legalidad de los casos de censura identificados a través de los datos de OONI**. Comparta su análisis jurídico con el público y considere la posibilidad de utilizar los datos OONI como prueba en casos judiciales.

* **[Analice los datos OONI](https://ooni.org/post/mining-ooni-data/)**. OONI datos es una mina de oro, compuesta por más de mil millones de mediciones recopiladas en más de 200 países desde 2012. Cada día se publican cientos de miles de nuevas mediciones. ¡Escarbe en [los datos de OONI](https://ooni.org/data/) y descubra casos de censura en Internet!

* **Visualice datos**. Comunique los resultados de la censura de OONI mediante la creación de visualizaciones de datos.

* **Únase al [Programa de Colaboración de OONI](https://ooni.org/get-involved/partnership-program/)**. Colabore con nosotros en el estudio de la censura en Internet. Involucre a sus comunidades locales con OONI Probe, actualice las listas de test e informe sobre los hallazgos de censura.

* **[Ayude a mejorar el software de OONI](https://github.com/ooni)**. Desarrollamos y mantenemos muchos proyectos de software que potencian el ecosistema OONI. Todo nuestro código es abierto y le animamos a que lo revise y/o contribuya.

* **[Escriba un test de medición de red para OONI Probe](https://github.com/ooni/probe-cli/tree/master/internal/tutorial)**. OONI Probe fue creado basándose en metodologías y marcos abiertos para permitir a los miembros de la comunidad contribuir con sus propias pruebas de medición de red. Si esto le interesa, por favor, [póngase en contacto](https://ooni.org/about/#contact) con nosotros para que podamos coordinarnos.

## OONI Probe

### ¿Qué es OONI Probe?

OONI Probe es un [software libre y de código abierto](https://github.com/ooni/probe) diseñado para medir la censura en Internet y otras formas de interferencia en la red.

### En mi país no hay censura. ¿Por qué utilizar OONI Probe?

Creemos que es importante medir la censura en las redes de todos los
países del mundo (independientemente de si se han denunciado o no casos
de censura en internet) porque:

* La censura suele tener [motivaciones políticas](https://explorer.ooni.org/) y, por tanto, puede cambiar en función de los gobernantes y de los acontecimientos políticos.

* Si empieza a haber censura en su país, tendrá datos que lo demuestren (y datos anteriores con los que compararlos).

* Muchos casos de censura en Internet pueden pasar desapercibidos, como el bloqueo de sitios web de grupos minoritarios.

* La censura en Internet puede variar de una red a otra dentro de un mismo país. Puede que servicios de Internet accesibles en su red estén bloqueados en otras.

* No siempre está claro si un servicio de Internet está bloqueado intencionalmente o si es inaccesible por otras razones (como problemas de red).

* Mientras no haya transparencia, los gobiernos y los proveedores de servicios de Internet (ISP) pueden buscar una negación plausible (especialmente cuando no está claro si un servicio está bloqueado *intencionalmente*).

* Consideramos **una buena práctica democrática exigir responsabilidades a quienes ostentan el poder**.

* Al contribuir con mediciones, está ayudando a **crear un archivo público sobre las interferencias en la red en todo el mundo. Permitirá a las generaciones futuras ver lo que ocurría a nivel de red de Internet**.

### ¿Qué hacen los tests de OONI Probe?

[OONI Probe](https://ooni.org/install/) consiste en
[múltiples tests de software libre](https://github.com/ooni/spec/tree/master/nettests)
diseñados para medir:

* Bloqueo de sitios web;

* Bloqueo de aplicaciones de mensajería instantánea (WhatsApp, Facebook Messenger, Telegram, Signal);

* Bloqueo de herramientas para eludir la censura (Tor y Psiphon);

* Presencia de middleboxes (es decir, sistemas que podrían ser responsables de la censura o la vigilancia);

* Velocidad y rendimiento de las redes.

### ¿Cómo miden los tests de OONI Probe la censura en Internet?

Para medir el bloqueo de un sitio web, [OONI Probe](https://ooni.org/install/) realiza automáticamente
[ciertas comprobaciones](https://ooni.org/nettest/web-connectivity/) hacia ese sitio web desde dos redes:

* La red del usuario (que puede estar censurada)

* Una red de control (que no está censurada)

Los resultados de las dos redes se comparan automáticamente. Si coinciden, el sitio web comprobado se considera accesible. Sin embargo,
si los resultados difieren, es posible que el acceso al sitio web probado esté bloqueado.

Puedes saber cómo funciona cada test de OONI Probe a través de los enlaces que te proporcionamos a continuación:

* Prueba de conectividad web: [https://ooni.org/nettest/web-connectivity/](https://ooni.org/nettest/web-connectivity/)

* Prueba de WhatsApp: [https://ooni.org/nettest/whatsapp/](https://ooni.org/nettest/whatsapp/)

* Prueba de Facebook Messenger: [https://ooni.org/nettest/facebook-messenger/](https://ooni.org/nettest/facebook-messenger/)

* Prueba de Telegram: [https://ooni.org/nettest/telegram/](https://ooni.org/nettest/telegram/)

* Signal: [https://ooni.org/nettest/signal/](https://ooni.org/nettest/signal/)

* Tor: [https://ooni.org/nettest/tor/](https://ooni.org/nettest/tor/)

* Psiphon: [https://ooni.org/nettest/psiphon/](https://ooni.org/nettest/psiphon/)

* Prueba de línea de solicitud no válida HTTP: [https://ooni.org/nettest/http-invalid-request-line/](https://ooni.org/nettest/http-invalid-request-line/)

* Prueba de manipulación de campos de encabezado HTTP: [https://ooni.org/nettest/http-header-field-manipulation/](https://ooni.org/nettest/http-header-field-manipulation/)

* NDT: [https://ooni.org/nettest/ndt/](https://ooni.org/nettest/ndt/)

* DASH: [https://ooni.org/nettest/dash/](https://ooni.org/nettest/dash/)

También puede consultar las especificaciones de las pruebas aquí:
[https://github.com/ooni/spec/tree/master/nettests](https://github.com/ooni/spec/tree/master/nettests)

### No soy un experto en tecnología. ¿Puedo utilizar OONI Probe?

Por supuesto. Puede instalar la aplicación móvil OONI Probe (para [Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe) e [iOS](https://itunes.apple.com/us/app/id1199566366)), que es la forma más sencilla de ejecutar OONI Probe. Puede ejecutar pruebas con sólo pulsar un botón.

También puede ejecutar la [aplicación de escritorio de OONI Probe](https://ooni.org/install/desktop), que incluye un diseño, una experiencia de usuario y unas características similares a
las de la [aplicación móvil de OONI Probe](https://ooni.org/install/mobile).

### ¿Cómo puedo ejecutar OONI Probe?

Puede ejecutar OONI Probe en las siguientes plataformas:

* Android: [https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe)

* iOS: [https://itunes.apple.com/us/app/id1199566366](https://itunes.apple.com/us/app/id1199566366)

* F-Droid: [https://f-droid.org/repository/browse/?fdid=org.openobservatory.ooniprobe](https://f-droid.org/repository/browse/?fdid=org.openobservatory.ooniprobe)

* Windows y macOS: [https://ooni.org/install/desktop](https://ooni.org/install/desktop)

* Linux: [https://ooni.org/install/cli/ubuntu-debian](https://ooni.org/install/cli/ubuntu-debian)

### He ejecutado OONI Probe. ¿Debo enviarles los resultados?

No es necesario. OONI Probe está diseñado para enviarnos automáticamente sus resultados tan pronto como ejecute una prueba (a menos que haya optado por no hacerlo en la configuración). Sus resultados se [procesarán](https://github.com/ooni/pipeline) y [publicarán](https://ooni.org/data/) automáticamente en tiempo real.

### ¿Con qué frecuencia debo ejecutar OONI Probe?

Tan a menudo como sea posible. La censura en Internet puede surgir de repente, mientras que el bloqueo y desbloqueo de servicios de Internet
puede cambiar con el tiempo.

Lo ideal sería **[habilitar tests automatizados](https://ooni.org/support/ooni-probe-mobile#automated-testing)** en OONI Probe.

### ¿Cómo puedo ejecutar OONI Probe automáticamente?

Puede activar los ajustes de "Tests automatizados" en las [aplicaciones de OONI Probe](https://ooni.org/support/ooni-probe-desktop#automated-ooni-probe-testing).

En estos ajustes, tiene la opción de que OONI Probe sólo se ejecute automáticamente cuando esté conectado a WiFi y/o tu dispositivo se esté
cargando.

[OONI Probe CLI para Linux](https://ooni.org/install/cli/ubuntu-debian) se ejecuta automáticamente cuando se instala usando el paquete .deb.

### ¿Durante cuánto tiempo debo ejecutar OONI Probe?

El mayor tiempo posible. La censura en Internet puede surgir de forma abrupta, mientras que el bloqueo y desbloqueo de servicios de Internet
puede cambiar con el tiempo.

Cada vez que ejecuta OONI Probe, contribuye con mediciones a un [archivo público sobre interferencias en la red](https://explorer.ooni.org/) (ya que tus mediciones se publican).

Para realizar un seguimiento más eficaz de la censura en Internet a lo largo del tiempo, lo ideal sería ejecutar OONI Probe durante el mayor
tiempo posible (años).

### He encontrado sitios web bloqueados. ¿Cómo puedo evitar su bloqueo?

Puede intentar evadir el bloqueo de sitios web o aplicaciones mediante el uso del [Navegador Tor](https://www.torproject.org/download/) o una VPN (como [Psiphon](https://psiphon.ca/en/download.html?psiphonca)).

### OONI Probe ha encontrado un middlebox en mi red. ¿Significa eso que estoy bajo vigilancia?

No, no necesariamente.

Muchos Proveedores de Servicios de Internet (ISPs) utilizan middleboxes para una amplia gama de propósitos de red (como caché), muchos de los
cuales no tienen nada que ver con la vigilancia o la aplicación de la censura en Internet.

### ¿Puedo medir la censura en Internet de forma remota en otro país?

Los tests de OONI Probe están diseñados con el objetivo de medir la censura en internet tal y como la experimentaría un usuario dentro de un
país. OONI Probe está diseñado para medir la red a la que se conecta, en el país en el que se encuentra esa red.

Si realiza tests remotos (sin estar físicamente localizado en ese país específico) -- por ejemplo, mediante el uso de un VPS -- probablemente recibirá resultados inexactos porque la heurística de OONI Probe no está diseñada para ello.

Para tests remotos, recomendamos otras herramientas, como [Satellite](https://censoredplanet.org/projects/satellite),
que escanea internet en busca de solucionadores DNS abiertos y realiza consultas a ellos en un intento de identificar bloqueos basados en DNS.

### ¿Qué tipo de datos recoge OONI Probe?

OONI Probe fue construido pensando en la privacidad y seguridad de sus usuarios, pero no es una herramienta de privacidad. Por lo tanto,
intentamos limitar la recogida de datos a los tipos de datos que son necesarios para medir las distintas formas de censura en Internet.

Por defecto, OONI Probe recopila:

* **La fecha y hora** de una medición (como "2019-10-30, 14:00 UTC").

* **El código de país** (como "IT" para Italia)

* **Información sobre su red**: Esto incluye el Número AS (por ejemplo, "AS30722" si se realizó una prueba en Vodafone Italia) y el tipo de red en la que se encuentra (wifi o móvil).

* **Datos de medición de la red** (que varían en función de la [prueba](https://github.com/ooni/spec/tree/master/nettests) específica realizada)

OONI Probe **no** recoge su dirección IP.

Es posible que **recopilemos involuntariamente** su dirección IP y otros datos de identificación personal si estos se incluyen en las cabeceras
HTTP u otros metadatos de las mediciones. Estos datos podrían recogerse si los sitios web que OONI Probe está probando emplean tecnologías de
seguimiento o contienen contenido personalizado. Tomamos medidas para eliminar las direcciones IP y otra información potencialmente identificable personalmente de nuestra base de datos de mediciones recopiladas para reducir el riesgo para usted.

Obtenga más información sobre nuestras prácticas de datos a través de la Política de datos de OONI:
[https://ooni.org/about/data-policy/](https://ooni.org/about/data-policy/)

### ¿Cómo puedo cancelar el envío de mediciones de OONI?

A través de la configuración de las aplicaciones de OONI Probe, puede desactivar la opción "**Publicar resultados automáticamente**" para **no
compartir (ni publicar) ninguna medición**.

### ¿Cuáles son los riesgos de ejecutar OONI Probe?

Ejecutar OONI Probe puede ser potencialmente arriesgado, dependiendo de su modelo de amenazas y del país desde el que esté ejecutando OONI
Probe.

Algunas cosas a tener en cuenta:

* **OONI Probe *no es* una herramienta de privacidad**. Cualquiera que monitorice su actividad en Internet (ejemplo: gobierno, ISP, empleador) puede ver que está ejecutando OONI Probe (de la misma manera que probablemente puedan ver cualquier otro software que ejecute).

* **OONI Probe es una herramienta de investigación**. Algunas pruebas de OONI Probe están explícitamente diseñadas para descubrir la censura en Internet.

* **[Su modelo de amenaza](https://www.eff.org/keeping-your-site-alive/evaluating-your-threat-model)**. Un activista de alto perfil ya sometido a una fuerte vigilancia, por ejemplo, podría atraer más atención al ejecutar OONI Probe.

* **Las leyes y regulaciones del país desde el que ejecuta OONI Probe**. Lo mejor es consultar con abogados locales.

* **Los tipos de sitios web que testea**. Puede testear sitios web legalmente prohibidos (en algunos países), provocativos u objetables mediante el uso de OONI Probe.

* **El tipo de tests que ejecuta con OONI Probe**. No todas los tests de OONI Probe tienen el mismo peso en términos de riesgo potencial. OONI Probe, por ejemplo, incluye la [prueba NDT](https://ooni.org/nettest/ndt/) (diseñada para medir la velocidad y el rendimiento de una red) que puede considerarse menos política o controvertida en comparación con otros tests diseñados para medir el bloqueo de sitios web o aplicaciones.

* **Publicación o no de las mediciones**. OONI [publica abiertamente las mediciones](https://ooni.org/data/) recogidas de los usuarios de OONI Probe para aumentar la transparencia de la censura en Internet en todo el mundo. Hacemos todo lo posible por no publicar su dirección IP ni ninguna otra información que pueda identificarlo personalmente.

Para saber más sobre los riesgos potenciales asociados al uso de OONI Probe, consulte nuestra documentación: [https://ooni.org/es/about/risks/](https://ooni.org/es/about/risks/)

### ¿Cómo puedo reducir los riesgos asociados al uso de OONI Probe?

Nuestro objetivo es ofrecerle tantas *opciones* como sea posible, para que pueda mitigar los riesgos potenciales y personalizar el uso de OONI Probe en función de lo que le resulte más cómodo.

Puede:

* **Limitar sus tests a los sitios web de su elección**. El botón ["Elegir sitios web"](https://ooni.org/support/ooni-probe-mobile#testing-websites-of-your-choice) dentro de la aplicación móvil de OONI Probe le permite probar sitios web específicos de su elección. También puede probar una lista personalizada de sitios usando la plataforma [OONI Run](https://run.ooni.io/), y puede influir en qué URLs son medidas por los usuarios de OONI Probe [contribuyendo a las listas de tests](https://ooni.org/get-involved/contribute-test-lists/).

* **Limite sus pruebas a aquellas con las que se sientas más cómodo**. A través de las aplicaciones de OONI Probe, tiene que iniciar un test tocando o haciendo clic en ella (es decir, los tests no se ejecutan automáticamente por defecto).

* **No compartir las mediciones**. A través de los ajustes de las aplicaciones de OONI Probe, puede optar por no enviar a OONI ninguna medición. En este caso, los resultados de sus tests no serán publicados (sólo usted tendrá acceso a ellos a través de tu aplicación).

### ¿Puedo ejecutar OONI Probe a través de una VPN?

Desaconsejamos ejecutar OONI Probe a través de una VPN porque no estaría midiendo su red. En su lugar, estaría midiendo la red de tu proveedor VPN, que probablemente no esté censurada.

Para capturar la censura de internet (tal y como la experimenta un usuario local de internet), apague su VPN (o cualquier otro software de elusión) antes de ejecutar los tests de OONI Probe.

### ¿Puede OONI proporcionar asesoramiento legal?

No. Somos un equipo de desarrolladores de software, y por lo tanto no podemos proporcionar ningún tipo de asesoramiento legal.

Sin embargo, a continuación compartimos algunas preguntas que puede hacer a sus abogados relacionadas con el uso de OONI Probe: [https://ooni.org/es/about/risks/#seeking-legal-advice](https://ooni.org/es/about/risks/#seeking-legal-advice)

## Testeando sitios web

### ¿Qué sitios web testeará en busca de censura con OONI Probe?

Al pulsar "Ejecutar" en las aplicaciones de OONI Probe, estará testeando los sitios web incluidos en las dos listas siguientes:

* **[Lista de test global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)**: Incluye sitios web de relevancia internacional (como facebook.com), la mayoría de los cuales están en inglés;

* **[Lista de test específico por país](https://github.com/citizenlab/test-lists/tree/master/lists)**: Incluye sitios web que sólo son relevantes para un país concreto, muchos de los cuales están en los idiomas locales.

Independientemente del país desde el que esté ejecutando OONI Probe, siempre probará sitios web de la [lista de test global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv).

OONI Probe determinará automáticamente qué lista específica de cada país debe elegir para realizar las pruebas en función del país desde el que
esté ejecutando OONI Probe. Por ejemplo, si ejecuta OONI Probe en Brasil, estará testeando sitios web de la lista de test global y de la
[lista de test brasileña](https://github.com/citizenlab/test-lists/blob/master/lists/br.csv).
Si viaja a Alemania y ejecuta OONI Probe, estará testeando las páginas web de las listas de test global y [alemana](https://github.com/citizenlab/test-lists/blob/master/lists/de.csv).

### ¿Qué son las listas de test?

Una [lista de test](https://ooni.org/get-involved/contribute-test-lists/) es una lista de sitios web sometidos a pruebas de censura.

### ¿Por qué OONI Probe utiliza listas de test?

Probar todas las páginas web alojadas en Internet no es factible, especialmente porque OONI Probe se ejecuta por usuarios con limitaciones de ancho de banda. Por lo tanto, necesitamos limitar las pruebas a una selección de sitios web.

Las [listas de pruebas](https://github.com/citizenlab/test-lists/tree/master/lists)
ofrecen las siguientes ventajas principales:

* Incluyen una selección de sitios web de **relevancia internacional** (lista de test global);

* Incluyen una selección de sitios web **relevantes para el país del usuario** (listas de test por países);

* Son **diversas** (incluyen URL que pueden pertenecer a [30 categorías](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv)), lo que brinda la oportunidad de *descubrir* casos de censura;

* Son públicas, lo que significa que los **usuarios pueden comprobar qué sitios web van a testear** (antes de ejecutar los tests);

* Están alojados públicamente en GitHub, lo que **fomenta la revisión y las contribuciones de la comunidad**;

* Al estar alojados en GitHub, **los nuevos sitios web se revisan cuidadosamente** antes de integrarlos para los tests (esto, por ejemplo, puede ayudar a garantizar que no se añadan sitios maliciosos);

* Son **legibles por máquina** y, como resultado, OONI Probe puede utilizarlos fácilmente para las pruebas.

### ¿Por qué la aplicación móvil OONI Probe no testea todas las páginas web de las listas de test?

Debido a limitaciones de ancho de banda, los tests de sitios web por defecto a través de la aplicación móvil OONI Probe están limitadas a 90
segundos. OONI Probe seleccionará una **muestra aleatoria de sitios web** (de la lista
[global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) y de [países específicos](https://github.com/citizenlab/test-lists/tree/master/lists)) y **se conectará a tantos de ellos como pueda en 90 segundos**.

La aplicación de escritorio de OONI Probe prueba todos los sitios web (de la lista [global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) y [específica de cada país](https://github.com/citizenlab/test-lists/tree/master/lists)) de una sola vez y puedes limitar el número de sitios web probados en la configuración de la aplicación.

### ¿Cómo puedo cambiar la duración de los tests en la aplicación móvil OONI Probe para testear más sitios web?

Puede encontrar instrucciones paso a paso (con capturas de pantalla) sobre cómo probar todos los sitios web (de las listas de pruebas de Citizen Lab) a través de las siguientes guías de usuario:

* [OONI Probe Móvil](https://ooni.org/support/ooni-probe-mobile#testing-all-websites-from-the-citizen-lab-test-lists)

* [OONI Probe Desktop](https://ooni.org/support/ooni-probe-desktop#testing-all-websites-from-the-citizen-lab-test-lists)

### ¿Cómo puedo encontrar la lista de test de mi país?

La lista de test de cada país se guarda como archivo CSV en el repositorio de listas de [test del Citizen Lab en GitHub](https://github.com/citizenlab/test-lists/tree/master/lists).

Estos archivos se han guardado en el siguiente formato: **código de país punto csv**. Por ejemplo, la lista de pruebas de Brasil se ha guardado como [br.csv](https://github.com/citizenlab/test-lists/blob/master/lists/br.csv)
(ya que "BR" es el código de país de Brasil).

Puede encontrar la lista de test de su país buscando un [archivo CSV con su código de país](https://github.com/citizenlab/test-lists/tree/master/lists).

### ¿Por qué mi país no tiene una lista de test?

Si no encuentra una lista de test para tu país, probablemente es porque todavía no existe. En este caso, OONI Probe sólo probaría las páginas web incluidas en la lista de prueba [global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv).

Por favor, [ayúdenos a crear una lista de test](https://ooni.org/support/github-test-lists#creating-new-test-lists) para su país.

### ¿Quién decide qué sitios web se incluyen en las listas de test?

¡Cualquiera puede hacerlo! El Citizen Lab publica las listas de test [en GitHub](https://github.com/citizenlab/test-lists) para fomentar la revisión y las contribuciones de la comunidad.

Le animamos a [revisar qué sitios web se incluyen en las listas de test y a proponer URL adicionales](https://ooni.org/get-involved/contribute-test-lists/).

### ¿Cómo puedo contribuir a las listas de test?

Puede contribuir con sitios web para los tests de censura a través de las siguientes plataformas:

* [Editor de listas de test](https://test-lists.ooni.org/) ([guía](https://ooni.org/support/test-lists-editor))

* [GitHub](https://github.com/citizenlab/test-lists) ([guía](https://ooni.org/support/github-test-lists))

### No soy usuario de GitHub, pero me gustaría enviar URL para los tests. ¿Cómo puedo hacerlo?

Algunas de las mejores contribuciones a las listas de test proceden de personas que no utilizan GitHub (como los científicos sociales), sobre todo porque la actualización de las listas de test requiere un conocimiento del entorno social y político del país.

Si no es usuario de GitHub y quiere contribuir a las listas de test, puede hacerlo a través de nuestro **[Editor de listas de pruebas](https://test-lists.ooni.org/)**.

Consulte nuestra [guía](https://ooni.org/support/test-lists-editor) y el [vídeo tutorial](https://www.youtube.com/watch?v=6i2OVHUQEpE) del Editor de listas de test.

### ¿Cuál es la diferencia entre una lista de test y una lista de bloqueo?

Una lista de test es una **lista de sitios que probamos** para comprobar si están bloqueados.

Una lista de bloqueo, en cambio, es una lista de sitios (legalmente) prohibidos, los cuales suelen estar bloqueados.

Algunos gobiernos publican ocasionalmente listas de bloqueo oficiales (o se filtran) que contienen listas de sitios web prohibidos legalmente en un país. Se ordena entonces a los proveedores de servicios de Internet (ISP) que bloqueen el acceso a todos los sitios web incluidos en esas listas de bloqueo, que suelen incluir cientos (o miles) de URL con contenidos ilegales en ese país (como juegos de azar, intercambio de archivos, contenidos para adultos, etc.).

En cambio, las listas de test no se limitan a los sitios web bloqueados. Más bien, sirven para controlar cuándo cambian las políticas: qué es lo más probable que se bloquee o desbloquee.

Aunque las listas de test pueden incluir *algunos* sitios web que se sabe que están bloqueados (y eso es útil para detectar las técnicas de censura adoptadas por los ISP), la mayoría de los sitios no se censuran localmente cuando se añaden a las listas de prueba.

Con las listas de test, pretendemos **descubrir la censura en Internet** (identificando el bloqueo de sitios que antes eran accesibles), no sólo confirmarla.

### ¿Qué tipos de sitios web puede testear OONI Probe?

OONI Probe testea sitios web (incluidos en las listas de test de [Citizen Lab](https://github.com/citizenlab/test-lists)) que pertenecen a [30 categorías distintas](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv).

Estas categorías van desde medios de comunicación, cultura y derechos humanos hasta categorías más provocativas o censurables, como la pornografía (estas últimas se incluyen porque es más probable que se bloqueen, lo que permite detectar las técnicas de censura adoptadas por
los ISP).

### ¿Cómo puedo elegir qué tipo de sitios web testear?

Por defecto, OONI Probe testeará sitios web que pertenezcan a [30 categorías estandarizadas](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv).

Puede limitar sus pruebas a tipos específicos de sitios web (por ejemplo, sólo probar sitios web de medios de comunicación) siguiendo las instrucciones paso a paso compartidas en nuestras guías para:

* [OONI Probe Móvil](https://ooni.org/support/ooni-probe-mobile#testing-specific-website-categories)

* [OONI Probe Desktop](https://ooni.org/support/ooni-probe-desktop#testing-specific-website-categories)

### ¿Cómo puedo elegir las páginas web que quiero testear?

Puede testear los sitios web de su elección (en lugar de los sitios web incluidos en las [listas de test](https://github.com/citizenlab/test-lists/tree/master/lists)) siguiendo las instrucciones paso a paso compartidas en nuestras guías para:

* [OONI Probe Móvil](https://ooni.org/support/ooni-probe-mobile#testing-websites-of-your-choice)

* [OONI Probe Desktop](https://ooni.org/support/ooni-probe-desktop#testing-websites-of-your-choice)

### ¿Cómo puedo testear una lista personalizada de URLs?

Si desea testear una larga lista de sitios web, añadirlos uno a uno a través del botón "Elegir sitios web" en la aplicación móvil de OONI Probe puede no ser una opción agradable.

Puede testear su propia lista personalizada de URLs a través de las instrucciones paso a paso de nuestras guías para [OONI Probe Móvil](https://ooni.org/support/ooni-probe-mobile#testing-a-custom-list-of-websites).

## Datos OONI

### ¿Qué son los datos OONI?

[Los datos OONI](https://ooni.org/data/) son medidas de red recogidas a través de los test de [OONI Probe](https://github.com/ooni/spec/tree/master/nettests).

### ¿Por qué publica datos OONI?

Publicamos en tiempo real todas las [mediciones de OONI Probe](https://ooni.org/data/) de todo el mundo para:

* Aumentar la **transparencia de la censura** en Internet y otras formas de interferencia en la red;

* Compartir **pruebas de la censura en Internet** y otras formas de interferencia en la red;

* Permitir la **verificación independiente** de nuestros resultados;

* Apoyar la **investigación reproducible**;

* Apoyar los esfuerzos de **investigación, políticos, legales y de defensa en todo** el mundo;

* Apoyar el **debate público** sobre los controles de la información.

### ¿Dónde publica datos OONI?

En tiempo real, publicamos mediciones de todo el mundo a través de los siguientes recursos:

* **[Explorador de OONI:](https://explorer.ooni.org/)** Interfaz web para explorar las mediciones de OONI

* **[API de OONI:](https://api.ooni.io/)** Descargue los datos sin procesar en formato JSON

### ¿Cómo puedo interpretar los datos OONI?

Cada medición OONI se genera a partir de un test OONI Probe. Dependiendo de [cómo funcione cada test de OONI Probe](https://github.com/ooni/spec/tree/master/nettests), cada medición OONI tiene un [formato de datos muy específico.](https://github.com/ooni/spec) Por lo tanto, éste varía de un test a otro.

Generalmente, los tests OONI Probe presentarán uno de los tres tipos de
resultados siguientes:

* **Normal**. Una medición "normal" es un test con el resultado esperado, en el que no hay nada fuera de lo normal. Cuando se testean sitios web y aplicaciones, una medición "normal" es cuando se consideran accesibles. En el caso de los tests de middlebox, una medición "normal" es cuando no se ha detectado ningún middlebox y, por tanto, no hay indicios claros de manipulación de la red.

* **Anómala**. Una medición "anómala" es un resultado de un test que se marca porque presenta signos de interferencia potencial de la red (como el bloqueo de un sitio web o una aplicación, o la presencia de un middlebox). Una medición anómala no contiene necesariamente tests de censura en Internet, ya que podría tratarse de un falso positivo. Básicamente, una medición anómala indica que algo no va bien y que deberíamos profundizar en los datos de medición para determinar qué está ocurriendo.

* **Bloqueo confirmado**. Una medición está "bloqueo confirmado" cuando estamos absolutamente seguros de que el recurso analizado está bloqueado. Basándonos en nuestra heurística actual, esto sólo puede aplicarse a sitios web cuando un proveedor de servicios de Internet (ISP) sirve una página de bloqueo (que notifica al usuario que el sitio web está bloqueado intencionadamente) o cuando la resolución DNS devuelve una IP asociada a la censura.

### ¿Cómo puedo obtener y analizar los datos OONI?

Tiene las siguientes opciones:

* **Amazon S3**. Gracias al programa [Amazon Open Data](https://aws.amazon.com/government-education/open-data/), todo el conjunto de datos de OONI puede obtenerse del [bucket ooni-data Amazon S3](https://ooni-data.s3.amazonaws.com/). Obtenga más información en nuestra entrada del [blog](https://ooni.org/post/mining-ooni-data/) correspondiente.

* **API de OONI**. Puede descargar todas las mediciones de OONI en formato JSON a través de la [API de OONI](https://api.ooni.io/). Aprenda a consultar la API a través de nuestra [documentación](https://api.ooni.io/api/).

**Recomendamos obtener los datos de OONI desde el bucket de S3** si planea trabajar con grandes volúmenes de datos de OONI (incluyendo, por
ejemplo, la descarga de todas las mediciones de un país para realizar consultas).

Dado que otras herramientas (como [OONI Explorer](https://explorer.ooni.org/)) dependen de la API de OONI, es mejor limitar el uso de la API a consultas ligeras (para evitar afectar al rendimiento de las otras herramientas que dependen de ella).

## Explorador OONI

### ¿Qué es OONI Explorer?

El [Explorador OONI](https://explorer.ooni.org/) es un recurso de datos abiertos sobre la censura en Internet en todo el mundo. Alberga más de mil millones de mediciones OONI recogidas en más de 200
países desde 2012. Cada día, cientos de miles de nuevas mediciones OONI se publican abiertamente en el Explorador de OONI desde todo el mundo.

### ¿Cómo puedo encontrar sitios web bloqueados a través del Explorador de OONI?

Puede ver los sitios web bloqueados más recientemente en todo el mundo mediante los siguientes pasos:

* Acceda al [Explorador de OONI](https://explorer.ooni.org/)

* Haga clic en "**Buscar**" (esquina superior derecha)

* Seleccione "**Confirmado**" (en "Estado" en las opciones de filtro de la izquierda)

* Haga clic en "**Filtrar resultados**"

Todas las mediciones del OONI Explorer serán ahora filtradas para mostrarle sólo aquellas en las que se ha confirmado que los **sitios web han sido bloqueados** en todo el mundo (basándose en las pruebas de OONI Probe).

Para ver los sitios web que **posiblemente** estén bloqueados:

* Haga clic en "**Buscar**" (esquina superior derecha de [OONI Explorer](https://explorer.ooni.org/))

* Seleccione "*Anomalías*" (en "Estado" en las opciones de filtro de la izquierda)

* Haga clic en "**Filtrar resultados**".

No obstante, interprete estos resultados con precaución, ya que pueden contener falsos positivos.

### ¿Cómo puedo acceder a las mediciones?

Puede encontrar las mediciones de OONI (es decir, los resultados de los tests de OONI Probe) a través de los siguientes pasos:

* Acceda a [Explorador de OONI](https://explorer.ooni.org/)

* Haga clic en "**Buscar**" (esquina superior derecha)

Cada fila que verá ahora (en la página de Búsqueda) - que contiene códigos de país, ASNs, fechas y nombres de pruebas - es cada una
medición individual (resultado de test de OONI Probe).

Por ejemplo:

![OONI measurement](/faq/measurement.png)

1. **Haga clic en una medición** para acceder a ella.

Un ejemplo de página de medición:

![OONI measurement page](/faq/measurement-page.png)

### ¿Cómo puedo encontrar los datos de OONI a través del Explorador de OONI?

Si se desplaza hacia abajo en cualquier página de medición OONI ([página de medición de ejemplo](https://explorer.ooni.org/measurement/20191030T235810Z_AS11878_Den5kggBp6SDiUHQVvFBzEF4jwknUrn1wzd8XavOs4ZjMY8QoJ?input=https://www.reddit.com/)),
verá los **datos de medición de red sin procesar**, que también puede **descargar en formato JSON**.

Los datos de medición de red variarán en función del [test OONI Probe](https://github.com/ooni/spec/tree/master/nettests) a partir de la cual se hayan generado.

### ¿Cómo puedo encontrar "tests de censura en Internet" en una medición?

En primer lugar, hay que tener en cuenta dos cosas:

* Una medición puede contener indicios de censura en Internet *sólo* si el [test OONI Probe](https://ooni.org/nettest/) específico fue diseñado para medir la censura en Internet en primer lugar.

* Basándonos en nuestra heurística actual, sólo confirmamos la censura en Internet automáticamente si un ISP devuelve una página bloqueada para un sitio web o si la resolución DNS devuelve una IP asociada a la censura.

Basándonos en esto, puedes encontrar fácilmente test de censura en internet a través de los siguientes pasos:

1.  Haga clic en "**Buscar**" (esquina superior derecha del [Explorador de OONI)](https://explorer.ooni.org/)

2.  Seleccione "**Confirmado**" (en "Estado" en las opciones de filtro de la izquierda)

3.  Haga clic en "**Filtrar resultados**".

Todas las mediciones de OONI se filtrarán ahora para mostrarle sólo aquellas en las que los ISP de todo el mundo devuelve páginas bloqueadas para sitios web. Los resultados se listarán a partir de los casos más recientes, y se actualizarán automáticamente con nuevas mediciones cada día.

4.  **Haga clic en una medición**

Ejemplo de una medición "bloqueo confirmado":

![Confirmed blocked measurement](/faq/confirmed-blocked-measurement.png)

5.  Desplácese hacia abajo para ver los datos brutos de medición de la red

![Raw measurement data](/faq/raw-data-blocked.png)

Puede descargar los datos en formato JSON.

De forma similar a los pasos compartidos anteriormente, también puede encontrar casos de censura en Internet seleccionando "Anomalías" (en
lugar de "Confirmado") en la sección "Estado" de la herramienta de búsqueda OONI Explorer. Sin embargo, confirmar esos casos es más complicado y probablemente sea mejor consultar con un ingeniero.

### ¿Cómo puedo encontrar los sitios web bloqueados en mi país?

Puede encontrar los sitios web bloqueados en su país siguiendo los siguientes pasos:

* Acceda a [OONI Explorer](https://explorer.ooni.org/)

* Haga clic en "**Buscar**" (esquina superior derecha)

* **Seleccione su país** a través del menú desplegable "País" de la izquierda

* Seleccione "**Conectividad Web**" a través del menú desplegable "Nombre de la prueba" situado a la izquierda

* Seleccione "**Anomalías**" y/o "**Confirmado**" (en "Estado")

* Haga clic en "**Filtrar resultados**".

Interprete los resultados "Anómalos" con precaución, ya que pueden
contener falsos positivos.

Los resultados bloqueados "Confirmados" sólo aparecerán si los ISP analizados devuelven páginas bloqueadas para esos sitios web específicos.

### ¿Cómo puedo comprobar si un sitio web específico está bloqueado?

Puedes comprobar si un sitio web específico (como twitter.com) está bloqueado mediante los siguientes pasos:

* Acceda a [OONI Explorer](https://explorer.ooni.org/)

* Haga clic en "**Buscar**" (esquina superior derecha)

* **Seleccione un país** a través del menú desplegable "País" de la izquierda

* Seleccione "**Conectividad Web**" a través del menú desplegable "Nombre de test" de la izquierda

* **Escriba el dominio** (por ejemplo, twitter.com) del sitio web en la casilla "Dominio

* Seleccione "**Anomalías**" y/o "Confirmado" (en "Estado")

* Haga clic en "**Filtrar resultados**".

Por favor, interprete los resultados "anómalos" con precaución, ya que
pueden contener falsos positivos.

Los resultados bloqueados "Confirmados" sólo aparecerán si los ISP analizados devuelven páginas bloqueadas para esos sitios web específicos.

### ¿Por qué no encuentro resultados para un sitio web específico?

Si busca los resultados correspondientes a un sitio web concreto (siguiendo las instrucciones de la respuesta anterior) y no encuentra ningún resultado, es probable que se deba a una de las siguientes razones:

* **El sitio web en cuestión no ha sido testeado en el país seleccionado**. Puede comprobar qué sitios web se testean generalmente en cada país revisando las URL incluidas en la lista [global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) y en la [específica del país](https://github.com/citizenlab/test-lists/tree/master/lists) (si existe esta última).

* **El dominio está mal escrito**. Si escribe mal el dominio (por ejemplo, `bbc.com` en lugar de `www.bbc.com`), OONI Explorer no podrá mostrar los resultados solicitados. Le recomendamos que acceda al sitio web desde un navegador (o desde [Tor Browser](https://www.torproject.org/download/) si el acceso al sitio web está bloqueado en su localidad) para comprobar cómo está formateado el dominio (es la parte del sitio web, excluyendo el prefijo HTTP o HTTPS).

### ¿Cómo puedo comprobar el bloqueo de sitios web durante un periodo de tiempo específico?

Para acotar los resultados a un periodo de tiempo concreto, utilice el [Explorador OONI](https://explorer.ooni.org/) de la siguiente manera:

1.  Haga clic en "**Buscar**" (esquina superior derecha)

2.  **Seleccione un país** a través del menú desplegable "País" de la izquierda

3.  Seleccione "**Conectividad web**" en el menú desplegable "Nombre de la prueba" de la izquierda.

4.  **Especifique el periodo de tiempo seleccionando** fechas a través de los calendarios "Desde" y "Hasta

5.  Seleccione "**Anomalías**" y/o "**Confirmado**" (en "Estado")

6.  Haga clic en "**Filtrar resultados**"

Por favor, interprete los resultados "Anómalos" con precaución, ya que pueden contener falsos positivos.

Los resultados bloqueados "Confirmados" sólo aparecerán si los ISP probados devuelven páginas bloqueadas para esos sitios web específicos.

### ¿Qué quiere decir "confirmado"?

Una medida es "bloqueo confirmado" cuando estamos absolutamente seguros de que el recurso analizado está bloqueado. Basándonos en nuestra heurística actual, esto **sólo puede aplicarse a sitios web cuando un Proveedor de Servicios de Internet (ISP) devuelve una página bloqueada** (que notifica al usuario que el sitio web está intencionadamente bloqueado) o cuando la resolución DNS devuelve una IP asociada a la censura.

Seleccionando "Confirmado" a través de OONI Explorer, verá todos los resultados de los tests de OONI Probe en las que hemos confirmado el
bloqueo de sitios web en todo el mundo.

### Sé de muchos otros sitios web que están bloqueados. ¿Por qué OONI Explorer no las muestra cuando selecciono "Confirmado"?

La opción "Confirmado" sólo mostrará resultados (sitios web bloqueados) en los casos en los que se den todas las circunstancias siguientes:

* **Un ISP bloqueó un sitio web devolviendo una página bloqueada**. Una página bloqueada (o página de "Acceso denegado") es una página web que se muestra cuando un usuario intenta acceder a un sitio web que no tiene permitido ver. Si un ISP bloquea el acceso a un sitio web utilizando diferentes técnicas de censura (lo que ocurre a menudo), esos casos no aparecerán en la opción "Confirmado" del Explorador de OONI.

* **Nosotros (el equipo de OONI) hemos detectado esa página bloqueada y hemos añadido su huella digital a la base de datos de OONI (y actualizado OONI Explorer)**. Probablemente hay muchas páginas bloqueadas que aún no hemos detectado. Si encuentra páginas bloqueadas que no estén marcadas en el Explorador de OONI, por favor, [compártela con nosotros.](https://github.com/ooni/pipeline/issues/new)

* **La página web en cuestión ha sido testeada por OONI Probe en el país específico y en la red específica donde está bloqueada (y se ha publicado la medición correspondiente)**. La censura en Internet puede variar de una red a otra dentro de un mismo país. Si un sitio web no se testea en la red específica que bloquea el acceso al mismo, y si los usuarios de OONI Probe optan por no enviar mediciones, no dispondremos de las mediciones para el sitio web específico.

Como siempre estamos trabajando para mejorar nuestra heurística de detección de la censura, es probable que estos casos cambien con el tiempo. Para más información técnica, consulte el código de [ooni/pipeline.](https://github.com/ooni/pipeline)

### ¿Por qué OONI confirma la censura cuando se muestra una página bloqueada?

Una página bloqueada es una página web que **informa al usuario de que el sitio web deseado está intencionadamente bloqueado**. A menudo, una página bloqueada cita incluso la justificación legal pertinente para el bloqueo. Por lo tanto, no hay ambigüedad en torno a esta forma de censura, ya que **incluso el ISP es transparente sobre el bloqueo intencionado que implica**.

Ejemplo de una página bloqueada mostrada por los ISP en Indonesia:

![Indonesian block page](/faq/indonesian-blockpage.png)

Además, las páginas bloqueadas contienen **huellas dactilares que permiten su detección automática**. Una vez detectada la huella digital de una página bloqueada y añadida a nuestra base de datos, podemos escanear las medidas en busca de todas las demás medidas que contengan la misma huella digital. Como resultado, podemos detectar automáticamente el bloqueo de muchas otras páginas web.

### ¿Por qué OONI no confirma otros casos de censura en Internet (más allá del bloqueo de páginas)?

Otros casos de censura (como la manipulación de DNS o el bloqueo de TCP/IP) son más sutiles, ya que el ISP no informa explícitamente al usuario de que está bloqueando intencionadamente el acceso a un sitio web específico (como se hace en el caso de una página bloqueada).

Además, **hay muchas razones por las que estos casos pueden parecer censura, pero en realidad no lo son (lo que hace que su detección automática sea más complicada)**. Por ejemplo, los tests realizados en una red inestable pueden generar errores TCP/IP, que pueden no tener nada que ver con un bloqueo TCP/IP intencionado. También puede darse el caso de que un sitio web testeado esté alojado en un servidor poco fiable, o que el propietario del sitio web esté bloqueando el acceso a las direcciones IP que se originan en ese país concreto. O puede que las [anomalías de DNS](https://ooni.org/post/not-quite-network-censorship/) aparezcan como resultado de una mala configuración de DNS, en lugar de deberse a un bloqueo intencionado basado en DNS.

Por lo tanto, a menudo es necesario examinar cada medición caso por caso para inspeccionar los datos cuidadosamente y determinar la razón precisa por la que sus tests no tuvieron éxito.

Distinguir automáticamente los casos de censura intencionada de las innumerables razones por las que pueden producirse anomalías en la red ha sido un reto constante, aunque seguimos introduciendo mejoras en nuestra heurística de forma continua y tenemos previsto confirmar automáticamente más formas de censura en Internet pronto.

### ¿A qué se refieren por "anomalías"?

Una medición "anómala" es un resultado de una prueba que se marca porque presenta *indicios de posibles interferencias en la red* (como el bloqueo de una página web o aplicación, o la presencia de una middlebox).

Cuando se detecta una página bloqueada, OONI marca esa medición como "confirmada". Todos los demás casos de censura en Internet (como la manipulación de DNS o el bloqueo de TCP/IP) se incluyen en las
mediciones "anómalas".

Sin embargo, una medición anómala *no contiene necesariamente tests de censura en Internet*, ya que podría tratarse de un falso positivo.

Esencialmente, una medición anómala **indica que algo va mal y que deberíamos profundizar en los datos de medición** para determinar qué está ocurriendo.

### ¿Por qué OONI Explorer sugiere que un sitio o aplicación al que puedo acceder está bloqueado en mi país?

Hay dos razones por las que esto puede ocurrir:

1.  Puede que el sitio web o la app en cuestión hayan sido bloqueados por otro(s) proveedor(es) de servicios de Internet de su país, y no por tu ISP.

2.  El resultado del test es un **falso positivo**. Las dos preguntas y respuestas siguientes tratan este tema con más detalle.

### ¿Qué son los falsos positivos?

**Los falsos positivos son resultados de tests de OONI Probe (marcados como "Anómalos") que indican incorrectamente la presencia de interferencias en la red (como el bloqueo de una web o app).**

Al medir la accesibilidad de sitios web, OONI Probe compara los resultados de tu red con los resultados de una red no censurada. Si los resultados no coinciden, entonces el resultado de la prueba de OONI Probe en cuestión se marca como "anomalía", indicando una posible interferencia en la red. Muchas de estas anomalías son de hecho casos de interferencia de red, mientras que algunas pueden ser falsos positivos.

### ¿Por qué se producen falsos positivos?

Los falsos positivos pueden producirse por varias razones.

A continuación se indican algunas razones que pueden desencadenar falsos positivos en las **pruebas de sitios web**:

* **Fallos transitorios en la red**. Si las pruebas de OONI Probe se realizan en una red inestable, los resultados de las pruebas pueden mostrar signos de posibles interferencias TCP/IP, cuando en realidad los errores de red pueden provocar la caída de la conexión TCP.

* **Servidores poco fiables**. Si un sitio web está alojado en un servidor poco fiable o tiene algún problema con el servidor, el sitio web testeado puede devolver fallos (aunque no haya interferencias) y el test OONI Probe puede fallar.

* **Resolución DNS**. Si la resolución DNS de un usuario de OONI Probe (como Google o su ISP local) proporciona una dirección IP que es la más cercana al usuario geográficamente, esa dirección IP puede diferir de la dirección IP resuelta desde un punto de control, indicando potencialmente de forma incorrecta la presencia de manipulación DNS.

* **Distribución geográfica de contenidos**. Muchos sitios web sirven contenidos diferentes en función del país desde el que se conecta el usuario. En estos casos, las respuestas HTTP desde la red del usuario de OONI Probe y desde el punto de control diferirán, indicando potencialmente de forma incorrecta la presencia de interferencias basadas en HTTP.

Al ejecutar los **tests de mensajería instantánea** de OONI Probe (WhatsApp, Facebook Messenger, Telegram), pueden producirse falsos positivos cuando el proveedor de la aplicación de mensajería instantánea realice cambios en su infraestructura que afecten a la ejecución de nuestros tests.

Al ejecutar los **tests de middlebox** de OONI Probe, pueden producirse falsos positivos debido a problemas con la infraestructura de backend de
OONI Probe.

Cuando se ejecuta **cualquier test de OONI Probe**, los falsos positivos pueden ser causados por errores de software que se activan por la configuración particular de su dispositivo y red.

### ¿Cómo puedo distinguir los falsos positivos?

Distinguir falsos positivos puede ser complicado, incluso para los ingenieros. Requiere examinar cuidadosamente los datos de medición de la red, comprender bien [cómo funcionan los tests de OONI Probe](https://github.com/ooni/spec/tree/master/nettests), analizar los datos durante un largo periodo de tiempo (para comprobar si el recurso probado presenta sistemáticamente las mismas anomalías en la misma red), y evaluar y descartar otras posibles razones que podrían haber desencadenado la anomalía (por ejemplo, comprobando las tasas de fallo globales de un sitio).

Como parte del [Programa de Asociación OONI](https://ooni.org/get-involved/partnership-program/), ofrecemos apoyo de análisis de datos a las organizaciones de derechos humanos con las que colaboramos. Todos [los datos y metodologías de OONI](https://ooni.org/data/) están disponibles
abiertamente con la esperanza de que otros análisis de datos apoyen también a las comunidades.

Te animamos a que te [pongas en contacto (por correo electrónico o Slack)](https://ooni.org/about/#contact) si no estás seguro de una medición y planeas utilizarla (por ejemplo) como parte de un
informe.

En general, **recomendamos observar los resultados a lo largo de una línea de tiempo, en lugar de individualmente** (a menos que estén etiquetados
como "Confirmados"). Por ejemplo, si observa que un sitio web sometido a tests presenta la misma anomalía (por ejemplo, manipulación de DNS)
cada vez que se somete a tests en una red específica de un país, es más probable que se esté interfiriendo en el acceso al mismo. Si, por el
contrario, una única medición (por ejemplo) presenta una anomalía TCP, pero todas las demás mediciones que testean ese sitio web en la misma
red han tenido éxito, es probable que esa anomalía TCP sea un falso positivo.

### ¿Cómo puedo chequear los resultados de otras tests de OONI Probe?

Puede filtrar [Explorador de OONI](https://explorer.ooni.org/) para encontrar resultados
de [otros tests de OONI Probe](https://ooni.org/nettest/) mediante los siguientes pasos:

* Hagaclick en "**Buscar**" (esquina superior derecha)

* Opcional: Seleccione un país a través del menú desplegable "País" de la izquierda

* **Seleccione un test OONI Probe a través del menú desplegable "Nombre del test"** de la izquierda

* Opcional: Seleccione "Anomalías"

* Haga clic en "**Filtrar resultados**".

Por favor, interprete los resultados "Anómalos" con precaución, ya que pueden contener falsos positivos.

### ¿Por qué mi país no tiene mediciones recientes en el Explorador de OONI?

El Explorador de OONI publica automáticamente los resultados de los tests (mediciones) de los  suarios de OONI Probe en *tiempo casi real*, a
los pocos minutos de haberse ejecutado los tests.

Si no hay mediciones recientes de su país, significa que

* No se han realizado tests de OONI Probe en su país recientemente; *o*

* Los usuarios de la OONI Probe de su país han optado por no enviar mediciones para su publicación.

Puede contribuir con mediciones [ejecutando OONI
Probe](https://ooni.org/install/) en su país. La forma más sencilla de realizar tests es a través de la **aplicación móvil OONI Probe** para [Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe) e [iOS.](https://itunes.apple.com/us/app/id1199566366)
