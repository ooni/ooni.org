---
title: OONI Glosario
description: "Este glosario contiene breves explicaciones de los términos utilizados en las aplicaciones, metodologías e informes de investigación de OONI."
---
Este documento fue traducido al español por Katherine Pennacchio y Mariengracia Chirinos.

Documento original:

* English, [OONI Glossary](https://ooni.org/support/glossary/)

Este glosario contiene *breves explicaciones* de los términos utilizados en las aplicaciones, metodologías e informes de investigación de OONI.

Si desea incluir más términos en este glosario, envíenos [una solicitud](https://github.com/ooni/ooni.org) o un [correo electrónico.](https://ooni.org/about/#contact)

* [API](#api)

* [AS](#as)

* [ASN](#asn)

* [BGP](#bgp)

* [Lista de bloqueos](#lista-de-bloqueos)

* [Página bloqueada](#página-bloqueada)

* [Almacenamiento en caché](#almacenamiento-en-caché)

* [Herramientas para evadir la censura](#herramientas-para-evadir-la-censura)

* [Cliente](#cliente)

* [Canal de procesamiento de datos](#canal-de-procesamiento-de-datos)

* [DNS o sistema de nombre de dominio](#dns)

* [Secuestro de DNS o sistema de nombre de dominio](#secuestro-de-dns)

* [Búsqueda DNS o sistema de nombre de dominio](#búsqueda-dns)

* [Consulta DNS o sistema de nombre de dominio](#consulta-dns)

* [Solucionador DNS o sistema de nombre de dominio](#solucionador-dns)

* [Suplantación de DNS o sistema de nombre de dominio](#suplantación-de-dns)

* [Manipulación de DNS o sistema de nombre de dominio](#manipulación-de-dns)

* [Fachada o enmascaramiento de dominio](#fachada-de-dominio)

* [Nombre de dominio](#nombre-de-dominio)

* [DPI o Inspección profunda de paquetes](#dpi)

* [Falso positivo](#falso-positivo)

* [HTTP](#http)

* [HTTPS](#https)

* [Bloqueo HTTP](#bloqueo-http)

* [Colectores HTTPS](#colectores-https)

* [Cabecera HTTP](#cabecera-http)

* [Petición HTTP](#petición-http)

* [Respuesta HTTP](#respuesta-http)

* [Códigos de estado HTTP](#códigos-de-estado-http)

* [Proxy transparente HTTP](#proxy-transparente-http)

* [Mensajería instantánea](#mensajería-instantánea)

* [Internet](#internet)

* [Apagón de Internet](#apagón-de-internet)

* [Censura en Internet](#censura-en-internet)

* [Dirección IP](#dirección-ip)

* [ISP](#isp)

* [Medición](#medición)

* [Metadatos](#metadatos)

* [Middlebox](#middlebox)

* [Sitio web espejo](#sitio-web-espejo)

* [Nettest](#nettest)

* [Red](#red)

* [Anomalía en la red](#anomalía-en-la-red)

* [Interferencias en la red](#interferencias-en-la-red)

* [Servicios cebolla](#servicios-cebolla)

* [OONI bouncer o rebotador](#ooni-bouncer-o-rebotador)

* [Colector OONI](#colector-ooni)

* [OONI Explorer](#ooni-explorer)

* [Ayudantes de OONI nettest](#ayudantes-de-ooni-nettest)

* [OONI Probe](#ooni-probe)

* [OONI Run](#ooni-run)

* [Rendimiento](#rendimiento)

* [Protocolo](#protocolo)

* [Proxy](#proxy)

* [Raspberry Pi o placa de micro ordenador](#raspberry-pi-o-placa-de-micro-ordenador)

* [Servidor](#servidor)

* [TCP](#tcp)

* [Bloqueo TCP/IP](#bloqueo-tcpip)

* [Entrada de test](#entrada-de-test)

* [Lista de test](#lista-de-test)

* [TLS](#tls)

* [Tor](#tor)

* [Manipulación del tráfico](#manipulación-del-tráfico)

* [URL](#url)

* [Punto de vista de red](#punto-de-vista-de-red)

* [VPN](#vpn)

### API
Una Interfaz de Programación de Aplicaciones (API) es una interfaz que permite a los programadores escribir código de integración entre diferentes servicios.

La [API de OONI](https://api.ooni.io/) proporciona una interfaz que permite a los usuarios solicitar tipos de datos OONI específicos y descargar dichos datos en un formato específico (JSON).

Para el uso por lotes, recomendamos la [MetaDB PostgreSQL de OONI](https://github.com/ooni/sysadmin/blob/master/docs/metadb-sharing.md).

Para una explicación más detallada, recomendamos el artículo ["¿Qué es una API?"](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/).

### AS

Internet está gestionado por decenas de miles de sistemas autónomos (AS, por sus siglas en inglés) que se coordinan entre sí para compartir información de enrutamiento: direcciones sobre cómo llegar a direcciones IP en Internet.

Por lo general, un proveedor de servicios de Internet (ISP) es
responsable de uno o varios AS.

Cada AS es responsable de entregar paquetes IP a un conjunto de
direcciones IP que gestiona.

### ASN

Un Número de Sistema Autónomo (ASN, por sus siglas en inglés) es un identificador único de un sistema autónomo (AS). Este número permite al sistema autónomo correspondiente intercambiar información de enrutamiento con otros sistemas.

Un proveedor de servicios de Internet (ISP) suele tener un ASN
registrado oficialmente (y pueden tener más de un ASN).

OONI Probe recoge el ASN para identificar la red en la que se ha
realizado cada prueba.

Si buscas un número ASN en un buscador web (como Google) verás a qué ISP corresponde. Por ejemplo, la búsqueda de "AS30722" debería devolver "Vodafone Italia".

### BGP

El Protocolo de Pasarela Fronteriza (BGP, por sus siglas en inglés) es un protocolo utilizado por los Sistemas Autónomos (AS) en Internet para intercambiar información de ruta. Con esta información pueden descubrir qué AS es responsable de qué conjunto de direcciones IP y cuál es el camino que deben seguir los paquetes IP para llegar a ese AS en particular.

Los datos de BGP, agregados y publicados por organizaciones como
[RIPE](https://www.ripe.net/) y [CAIDA](https://www.caida.org/), pueden ser útiles para detectar cortes de Internet.

### Lista de bloqueos

Una lista de bloqueos es un inventario de recursos de Internet (como sitios web y direcciones IP) cuyo acceso está bloqueado para los usuarios.

Algunos gobiernos publican ocasionalmente listas de bloqueos oficiales (o se filtran) que contienen listas de sitios web prohibidos legalmente en un país.

Se ordena, entonces, a los proveedores de servicios de Internet (ISP) que bloqueen el acceso a todos los sitios web incluidos en esas listas de bloqueos, que suelen incluir cientos (o miles) de URL con contenidos ilegales en el país correspondiente (como juegos de azar, intercambio de archivos, contenidos para adultos, discursos políticos, etc.).

### Página bloqueada

Una página bloqueada (o "página de acceso denegado") es una página web que se muestra cuando un usuario intenta acceder a un sitio web que no está autorizado a ver.

Se trata de una técnica de censura adoptada por los proveedores de
servicios de Internet (ISP) en varios países (como Irán, Indonesia, Grecia e Italia).

Cuando un ISP bloquea una página, el usuario no ve el contenido del sitio web al que intenta acceder. En su lugar, en la web (la página bloqueada) aparece un mensaje que le informa de que no puede acceder al sitio web deseado.

Una página bloqueada es la única forma de censura en Internet que
notifica claramente a los usuarios la censura. A menudo, una página bloqueada hace referencia a la ley en la que se basa la censura.

A modo de ejemplo, a continuación se muestra una página bloqueada
mostrada por los ISP en Indonesia:

![Indonesian block page](/post/indonesia/indonesian-blockpage.png)

Basándose en la heurística de OONI, la censura en Internet se confirma automáticamente cuando se detecta una página bloqueada.

### Almacenamiento en caché

El almacenamiento en caché es el proceso de reunir datos en un almacén temporal que permite un acceso más rápido para su uso futuro.

Por ejemplo, un servidor web puede almacenar en caché determinados
recursos web para que puedan cargarse más rápidamente cuando un usuario los solicite.

### Herramientas para evadir la censura

Las herramientas para evadir la censura son tecnologías que permiten a sus usuarios eludir la censura en Internet, como el bloqueo de sitios web y aplicaciones de redes sociales.

Las herramientas para evadir la censura permiten a sus usuarios acceder a servicios de Internet bloqueados por sus proveedores de servicios de Internet (ISP).

Las VPN y los proxies son herramientas de evasión comunes, mientras que las herramientas de [Tor](https://www.torproject.org/), que también ofrece servicios para eludir la censura, también proporciona a sus usuarios privacidad y anonimato en línea (además de eludir la censura).

### Cliente

En el mundo de la informática, un cliente es una pieza de software o hardware que interactúa con un servicio alojado en un servidor.

[La aplicación OONI Probe](https://ooni.org/install/), por
ejemplo, es un cliente que se comunica con los servidores de OONI para enviar los resultados de los tests.

### Canal de procesamiento de datos

Un canal de procesamiento de datos es un sistema de software diseñado para procesar datos.

[El canal de procesamiento de datos de OONI](https://github.com/ooni/pipeline) es responsable de agregar los datos de medición de red de los usuarios de OONI Probe y analizarlos para identificar anomalías de red en todo el mundo.

### DNS

DNS significa "Domain Name System" (Sistema de Nombres de Dominio) y asigna nombres de dominio a direcciones de protocolos de internet, conocidas como las IP .

Un dominio es un nombre que se atribuye comúnmente a los sitios web (cuando se crean), para que se pueda acceder a ellos y recordarlos más fácilmente. Por ejemplo, twitter.com es el dominio del sitio web de Twitter.

Sin embargo, las computadoras no pueden conectarse a los servicios de internet a través de nombres de dominio, sino basándose en direcciones IP: la dirección digital de cada servicio en Internet. Del mismo modo, en el mundo físico se necesitaría la dirección de una casa (en lugar del nombre de la propia casa) para poder visitarla.

El Sistema de Nombres de Dominio (DNS) es el responsable de transformar un nombre de dominio legible por humanos (como `ooni.org`) en su dirección IP numérica homóloga (en este caso:`104.198.14.52`), permitiendo así que su computador acceda al sitio web deseado.

### Secuestro de DNS

El secuestro de DNS (también conocido como "envenenamiento de DNS") se produce cuando, al buscar la dirección de un dominio concreto, el solucionador DNS consultado es "deshonesto", devolviendo intencionadamente una respuesta incorrecta.

Como resultado, usted recibe la dirección IP de una página bloqueada, u obtiene una respuesta que afirma que el nombre de dominio no existe.

Cuando los proveedores de servicios de Internet (ISP) reciben órdenes gubernamentales de bloquear sitios web específicos, a veces adoptan esta técnica. En estos casos, puede ser posible evadir la censura simplemente cambiando su solucionador DNS, o mediante el uso de DNS cifrado, como DNS sobre HTTPS.

### Búsqueda DNS

Cuando intenta acceder a un sitio web en su navegador, la petición se reenvía a un solucionador DNS, solicitando la dirección IP correspondiente al nombre de dominio que ha introducido.

Para comprobar si los sitios web están bloqueados mediante DNS, [OONI Probe](https://ooni.org/install/) comienza realizando una
búsqueda DNS para ver qué direcciones IP están mapeadas a los dominios comprobados por el solucionador DNS del usuario. Si las direcciones IP no coinciden con las asignadas por otro DNS solucionador (conocido por no implementar censura), es posible que la censura esté implementada a nivel de DNS.

Una descripción más detallada de cómo funciona el test de conectividad web de OONI está disponible [aquí](https://ooni.org/nettest/web-connectivity/).

### Consulta DNS

Una consulta DNS (también conocida como "petición DNS") es una
solicitud de información enviada desde el ordenador de un usuario a un servidor DNS.

En la mayoría de los casos, una solicitud DNS se envía para preguntar por la dirección IP asociada a un nombre de dominio (como `ooni.org`).

### Solucionador DNS

Un solucionador DNS es un servidor que asigna nombres de dominio a
direcciones IP, funcionando como una "libreta de direcciones".

Un solucionador DNS gestiona las peticiones DNS (para todos los clientes de su red) y es responsable de transformar los nombres de host (/dominio) (como `twitter.com`) en direcciones IP (como `38.229.72.16`).

Los proveedores de servicios de Internet (ISP), entre otros proveedores de servicios (como Google), gestionan solucionadores DNS a los que se puede solicitar la dirección IP de un determinado sitio web.

### Suplantación de DNS

La suplantación de DNS (también conocida como "inyección de DNS") se produce cuando se interceptan las consultas DNS y se inyectan respuestas DNS falsas como respuesta.

Esto no implica una mala [configuración de DNS](https://ooni.org/post/not-quite-network-censorship/), ni es similar al secuestro de DNS en el que los solucionador DNS responden con una respuesta falsificada.

La suplantación de DNS es una técnica más sofisticada que imita la
respuesta legítima del servidor DNS consultado, pero proporcionando datos falsos.

Cuando los proveedores de servicios de Internet (ISP) reciben órdenes gubernamentales para bloquear sitios web específicos, a veces adoptan esta técnica, interceptando el tráfico DNS y respondiendo con una respuesta falsificada para los sitios prohibidos (impidiendo el acceso).

### Manipulación de DNS

La manipulación de DNS es **un término genérico utilizado para describir varias formas de interferencia de DNS**, incluidos el secuestro de DNS y la suplantación de DNS.

Los servicios de Internet (como sitios web y aplicaciones) se alojan en direcciones IP, que son direcciones digitales en Internet. Para visitar un sitio web, se necesita su dirección IP.

Para obtener la dirección IP de un sitio web, el ordenador debe
solicitarla a un solucionador DNS (que gestiona una base de datos de direcciones IP que corresponden a dominios).

La manipulación de DNS se produce cuando, al realizar una búsqueda DNS de un sitio web, se devuelve una dirección IP incorrecta, lo que le impide visitar el sitio web solicitado.

La manipulación de DNS puede producirse de varias formas, entre ellas:

* **Secuestro de DNS**: cuando el solucionador DNS "miente" y devuelve una dirección IP incorrecta.

* **Suplantación de DNS**: cuando su solicitud DNS es interceptada y recibe una dirección IP incorrecta.

La manipulación de DNS es una técnica de censura común adoptada por los proveedores de servicios de Internet (ISP) de todo el mundo.

[Las aplicaciones OONI Probe](https://ooni.org/install/) miden [la manipulación de DNS de sitios web y aplicaciones](https://ooni.org/nettest/).

### Fachada de dominio 

La fachada de dominio (también conocido como "fachada de nube") es una técnica de evasión de la censura que se basa en el uso de un nombre de dominio popular alojado en un gran proveedor de servicios en la nube para "dirigir" el tráfico hacia un servicio de evasión alojado en el mismo servicio en la nube.

Por ejemplo, esto podría implicar la creación de un servicio en Google Cloud bajo el dominio `circumvention-service.google-cloud.com`, pero dirigiéndolo a través de `google.com`. Esto significa que, desde la perspectiva de alguien que observe el tráfico de red, todo lo que puede ver es una conexión TLS cifrada hacia google.com. Sin embargo, dentro de esta conexión cifrada, el cliente dice "en realidad quiero acceder a `circumvention-service.google-cloud.com`", evadiendo cualquier posible bloqueo.

Como resultado, el censor tendría que bloquear todo Google Cloud (y, por tanto, interrumpir también otros servicios) o tendría dificultades para distinguir las solicitudes dirigidas a `circumvention-service.google-cloud.com`
de las dirigidas a `google.com`. Este concepto se denomina "[libertad colateral](https://www.upturn.org/static/files/CollateralFreedom.pdf)", ya que depende de que los censores *no* causen daños colaterales bloqueando el acceso a grandes servicios (como Google Cloud) de los que dependen muchos otros servicios.

### Nombre de dominio

Un dominio es un nombre que se atribuye comúnmente a los sitios web
(cuando se crean), para que puedan ser más fácilmente accesibles y
recordados.

Por ejemplo, **twitter.com** es el dominio del sitio web de Twitter.

### DPI

La inspección profunda de paquetes (DPI, por sus siglas en inglés) es un método de examen y gestión del tráfico de red. Esta tecnología se utiliza para una inspección detallada de los datos que se envían a través de una red informática.

Dado que la DPI permite una gestión avanzada de la red, es utilizada habitualmente por empresas y proveedores de servicios de Internet (ISP).

Sin embargo, la tecnología DPI también puede utilizarse para aplicar la censura en Internet (bloqueo de sitios web o aplicaciones específicas) y la vigilancia en línea.

### Falso positivo

Un falso positivo es el resultado de una prueba que indica erróneamente la presencia de una condición o atributo concreto.

**En el contexto de OONI, los falsos positivos son resultados de tests de OONI Probe (marcados como "anomalías") que indican incorrectamente la presencia de interferencias en la red (como el bloqueo de un sitio web o una aplicación).**

Los resultados de los tests de OONI Probe, recogidos de la red del
usuario, se comparan automáticamente con los resultados recogidos de una red no censurada. Si los resultados no coinciden, el resultado del test de OONI Probe en cuestión se marca como "anomalía", lo que indica una posible interferencia en la red. Muchas de estas anomalías son, de hecho, casos de interferencia de red, mientras que algunas son falsos
positivos.

Los falsos positivos pueden producirse por varias razones (en parte
debido a las limitaciones de las [metodologías OONI](https://ooni.org/nettest/), y en parte debido a la propia naturaleza del funcionamiento de Internet), como las siguientes:

* **Fallos transitorios de la red**: Si los tests OONI Probe se realizan en una red inestable, los resultados del test pueden mostrar signos de posibles interferencias TCP/IP, cuando en realidad los errores de red pueden provocar la caída de la conexión TCP.

* **Servidores poco fiables**: Si un sitio web se aloja en un servidor poco fiable o tiene problemas con el servidor, el sitio web testeado puede devolver fallos (aunque no haya interferencias) y el test OONI Probe puede fallar.

* **Resolución DNS**: Si la resolución DNS de un usuario de OONI Probe (como Google o su ISP local) proporciona una dirección IP que es la más cercana al usuario geográficamente, esa dirección IP puede diferir de la dirección IP resuelta desde un punto de control, indicando potencialmente de forma incorrecta la presencia de manipulación DNS.

* **Distribución geográfica de contenidos**: Muchos sitios web ofrecen o muestran contenidos diferentes en función del país desde el que se conecta el usuario. En estos casos, las respuestas HTTP desde la red del usuario de OONI Probe y desde el punto de control diferirán, indicando potencialmente de forma incorrecta la presencia de interferencias basadas en HTTP.

### HTTP

El Protocolo de Transferencia de Hipertexto (HTTP, por sus siglas en inglés) es el protocolo subyacente utilizado por la World Wide Web (La Web) para transferir o intercambiar datos a través de Internet.

El protocolo HTTP permite la comunicación entre un cliente y un
servidor. Para ello, gestiona la solicitud de un cliente para conectarse a un servidor y la respuesta del servidor a la solicitud del cliente.

Todos los sitios web incluyen un prefijo HTTP (o HTTPS) (como
`http://example.com/`) para que su ordenador (el cliente) pueda solicitary recibir el contenido de un sitio web (alojado en un servidor).

La transmisión de datos a través del protocolo HTTP **no está cifrada**.

### HTTPS

El Protocolo de Transferencia de Hipertexto Seguro (HTTPS, por sus
siglas en inglés) -- también conocido como HTTP sobre TLS, o HTTP sobre SSL -- es **el protocolo HTTP sobre un canal cifrado**.

En los últimos años, la mayoría de los principales sitios web de
Internet han empezado a soportar HTTPS (como `https://www.facebook.com/`) para que la transmisión de datos (como contraseñas para acceder a sitios web) a través del protocolo HTTP esté cifrada, es decir con un nivel más alto de seguridad.

### Bloqueo HTTP

El bloqueo HTTP es un término general utilizado para describir diversas formas de interferencia HTTP con la intención de impedir que los clientes recuperen información de servidores específicos.

Para acceder a un sitio web en Internet, se envía una solicitud HTTP al servidor que aloja el sitio web al que se intenta acceder. Si la petición tiene éxito, el servidor responderá con el contenido del sitio web, permitiendo el acceso.

Cuando los Proveedores de Servicios de Internet (ISP) reciben órdenes gubernamentales de bloquear sitios web específicos, el bloqueo HTTP es una técnica de censura común que pueden adoptar. Hay muchas formas en las que pueden implementar la censura en el protocolo HTTP, como las siguientes:

* **Sirviendo una página bloqueada**: en este caso, el ISP intercepta la solicitud del usuario para acceder a un sitio web específico (por ejemplo, facebook.com) y sirve al usuario una página bloqueada en su lugar, que informa al usuario de que no se le permite acceder al sitio web solicitado.

* **Fallo HTTP**: la petición HTTP del usuario (para acceder a un servicio específico de Internet) falla o no se puede completar porque es interceptada por un proxy transparente HTTP, o el ISP reinicia la conexión o secuestra la conexión (no cifrada) para redirigirla (impidiendo que llegue al servidor previsto).

[Web Connectivity test](https://ooni.org/nettest/web-connectivity/) de OONI Probe comprueba los escenarios anteriores al medir sitios web para el bloqueo HTTP (y otras formas de censura en Internet).

### Colectores HTTPS

Un colector HTTPS es un servidor que recoge datos a través del protocolo cifrado HTTPS.

OONI utiliza colectores HTTPS para recopilar mediciones de red de
usuarios de OONI Probe de todo el mundo.

### Cabecera HTTP

Las cabeceras HTTP se utilizan para **transmitir metadatos** sobre la solicitud o respuesta HTTP al servidor o al cliente.

Ciertas cabeceras HTTP están estandarizadas para transmitir bits comunes de información, como el campo de cabecera Usuario-Agente, que se utiliza para indicar al servidor qué navegador está realizando la solicitud.

Cada vez que te conectas a un servidor, tú (el cliente) envías una
petición a través del protocolo HTTP a ese servidor. Dichas peticiones incluyen cabeceras HTTP, que solicitan ciertos tipos de información basados en varios tipos de campos de información ("campos de cabecera HTTP"). Entre estos campos se encuentra la "cabecera anfitrión", que incluye información sobre el dominio específico al que desea acceder. Por ejemplo, cuando se conecta a `ooni.org`, la cabecera "anfitrión" de su solicitud HTTP incluye información que comunica que desea acceder a ese dominio.

Al medir el bloqueo de sitios web, el [Web Connectivity test de](https://ooni.org/nettest/web-connectivity/) OONI Probe compara las
cabeceras HTTP del sitio web probado desde la red del usuario con una red no censurada (como parte de una metodología de test más amplia).

### Petición HTTP

Cada vez que visita un sitio web, su navegador (el cliente) envía una solicitud ("solicitud HTTP") a través del protocolo HTTP al servidor que aloja el sitio web. Un servidor normalmente responde con una "respuesta HTTP" que incluye el contenido del sitio web que aloja.

Sin embargo, en algunos casos, los proveedores de servicios de Internet (ISP) impiden a los usuarios acceder a determinados sitios web bloqueando o interfiriendo la conexión entre ellos y el servidor. Esta es una forma de bloqueo HTTP, [medido](https://ooni.org/nettest/web-connectivity/) por [la aplicación OONI Probe](https://ooni.org/install/).

### Respuesta HTTP

Cada vez que visitas un sitio web, tu navegador (el cliente) envía una petición ("petición HTTP") a través del protocolo HTTP al servidor que aloja el sitio web.

En respuesta a una petición HTTP, un servidor enviará una respuesta
HTTP, que incluye cabeceras de respuesta HTTP y opcionalmente un cuerpo de respuesta, que en el caso de un sitio web será el contenido de la página.

### Códigos de estado HTTP

Los códigos de estado HTTP son códigos estandarizados (mantenidos por la Autoridad de Asignación de Números de Internet o IANA) que emite un servidor en respuesta a la solicitud de un cliente. Como sugiere su nombre, estos códigos comunican el estado de una respuesta HTTP.

Los códigos de estado HTTP se dividen en rangos específicos, dependiendo del tipo de estado que comuniquen:

* **100-199**: se utilizan para comunicar información al cliente
* **200-299**: se utilizan para indicar una solicitud correcta
* **300-399**: se utilizan para redirigir la solicitud a otro lugar
* **400-499**: se utilizan para indicar errores en la solicitud por parte del cliente
* **500-599**: se utilizan para indicar errores del lado del servidor

Los códigos de estado HTTP más comunes son:

* Estado HTTP **200** (OK): Se utiliza para indicar que la solicitud se ha realizado correctamente. Por lo general, este es el código de estado más utilizado para la carga correcta de páginas.

* Estado HTTP **301** (Movido permanentemente): Cuando el recurso solicitado por el cliente está ahora disponible en una ubicación diferente.

* Estado HTTP **302** (Encontrado): Cuando se puede acceder temporalmente al recurso solicitado por el cliente en una ubicación diferente.

* Estado HTTP **400** (Solicitud incorrecta): Cuando la aplicación que está utilizando (como el navegador web) accede a un servidor de forma incorrecta o la solicitud estaba dañada.

* Estado HTTP **401** (No autorizado): Cuando intentas acceder a una página web que requiere credenciales de autenticación sin que hayas proporcionado ninguna.

* Estado HTTP **403** (Prohibido): Cuando intentas acceder a un directorio restringido de un sitio web para el que no tienes las credenciales autorizadas correctas.

* Estado HTTP **404** (No encontrado): Cuando intentas acceder a un recurso de un servidor web (normalmente una página web) que no existe (porque, por ejemplo, has escrito mal una URL).

* Estado HTTP **451** (No disponible por motivos legales): Cuando el recurso al que se intenta acceder está bloqueado por el servidor debido a restricciones legales. El código de estado se utiliza para aplicar la censura en Internet.

* Estado HTTP **500** (Error interno del servidor): Mensaje de error de propósito general cuando un servidor web encuentra algún tipo de error interno.

Al medir el bloqueo de sitios web, el [Web Connectivity test de OONI Probe](https://ooni.org/nettest/web-connectivity/) compara
los códigos de estado HTTP del sitio web probado desde la red del
usuario con una red no censurada (como parte de una metodología de
pruebas más amplia).

### Proxy transparente HTTP

Un proxy transparente HTTP es un tipo de middlebox, un sistema
intermediario que se sitúa entre un cliente y un servidor y realiza
acciones a través del protocolo HTTP.

Cuando un usuario realiza una solicitud a un servidor (por ejemplo, para acceder a `facebook.com`), el proxy transparente intercepta la solicitud para realizar diversas acciones (como el almacenamiento en caché, la redirección y la autenticación).

Muchos proveedores de servicios de Internet (ISP) de todo el mundo
utilizan proxies transparentes HTTP para diversos fines; por ejemplo, para mejorar el rendimiento de la red o para proporcionar a los usuarios un acceso más rápido a los sitios web.

A veces, sin embargo, los proxies transparentes HTTP también se utilizan para implementar la censura y/o la vigilancia en Internet.

La [aplicación OONI Probe](https://ooni.org/install/) incluye dos [tests](https://ooni.org/nettest/) diseñados para medir redes con el objetivo de identificar la presencia de proxies transparentes HTTP.

### Mensajería instantánea

La tecnología de mensajería instantánea (MI) es un tipo de chat en línea que ofrece transmisión de texto en tiempo real a través de Internet.

WhatsApp, Facebook Messenger y Telegram son ejemplos de aplicaciones de mensajería instantánea, todas ellas [medidas](https://ooni.org/nettest/) en la [aplicación OONI Probe](https://ooni.org/install/) para comprobar censura.

### Internet

Internet es una red internacional descentralizada de redes.

Los dispositivos, como los computadores, se conectan entre sí y forman una red. Cada red está conectada a otras redes, que a su vez están conectadas entre sí a través de tecnologías de redes electrónicas, inalámbricas y ópticas.

Múltiples redes interconectadas forman Internet.

### Apagón de Internet

Un apagón de Internet (también conocido como "interrupción de
Internet" o "cierre de Internet") se produce cuando Internet se apaga por completo en un país o región. La zona o red afectada por el apagón no tiene acceso a Internet.

Un apagón de internet puede ser *intencional* (ordenado por un gobierno) -- en cuyo caso, constituye una forma de censura de internet -- o puede haber sido causado de forma no *intencionada* (por ejemplo, debido a ruptura o fallas con los cables).

Dado que [OONI Probe](https://ooni.org/install/) requiere conectividad a Internet para realizar las pruebas, la medición de los apagones de Internet está actualmente fuera de alcance.

Existen varias [fuentes públicas de datos](https://ooni.org/post/examining-internet-blackouts/) para el seguimiento de los apagones de Internet, como [IODA](https://ioda.caida.org/).

### Censura en Internet

La censura en Internet es el control *intencionado* o la supresión de lo que se puede acceder, publicar o ver en Internet.

Los proveedores de servicios de Internet (ISP) suelen aplicar la censura de Internet basándose en órdenes gubernamentales y/o en cumplimiento de la legislación nacional. Esto implica bloquear el acceso a determinados sitios web y/o aplicaciones, impidiendo a los usuarios de esa red específica acceder a determinados servicios de internet.

Como la censura de internet se aplica a nivel de red, puede variar de una red a otra y de un país a otro.

### Dirección IP

Una dirección de Protocolo de Internet (IP, por sus siglas en inglés) es una dirección numérica única que identifica un dispositivo o servicio en Internet.

Una dirección IP cumple 2 funciones principales:

1.  **Identificación**: Una dirección IP distingue un sistema de todos los demás sistemas de Internet.

2.  **Localización**: Una dirección IP sirve como dirección digital para un sistema, permitiendo a otros sistemas en internet llegar a él.

Para conectarse a Internet, a cada dispositivo se le asigna una
dirección IP.

### ISP

Un proveedor de servicios de Internet (ISP) es una organización que
proporciona servicios para acceder y utilizar Internet.

Los ISP pueden ser estatales, comerciales, comunitarios, sin ánimo de lucro o privados.

Vodafone, AT&T, Airtel y MTN son ejemplos de ISP.

### Medición

Una medición de red es el proceso de medir ciertos atributos de una red.

En el contexto de OONI, una medición es el resultado de un test de OONI Probe.

Cada [test OONI Probe](https://ooni.org/nettest/) está concebido para medir diferentes formas de interferencia de red. Dependiendo del test, cada medición OONI contiene un resultado diferente.

He aquí un ejemplo de medición OONI:
[https://explorer.ooni.org/measurement/20191024T090549Z_AS42668_D8RVKYKWbqzaTopEcH3K6qy8yzOHVe1QgNeyzn686G1CbEveKU?input=http://kavkaznews.com/](https://explorer.ooni.org/measurement/20191024T090549Z_AS42668_D8RVKYKWbqzaTopEcH3K6qy8yzOHVe1QgNeyzn686G1CbEveKU?input=http://kavkaznews.com/)

### Metadatos

Los metadatos suelen describirse como "datos sobre datos" y se utilizan para proporcionar un contexto y una descripción de los datos.

Ejemplos de metadatos de un documento pueden ser su autor y la fecha de publicación.

### Middlebox

Un middlebox es un dispositivo informático de red que transforma,
inspecciona, filtra o manipula el tráfico para fines distintos al
reenvío de paquetes.

Muchos proveedores de servicios de Internet (ISP) de todo el mundo
utilizan middleboxes para mejorar el rendimiento de la red, proporcionar a los usuarios un acceso más rápido a los sitios web y para otros fines de conexión.

A veces, sin embargo, los middleboxes también se utilizan para
implementar la censura y/o la vigilancia en Internet.

La aplicación [OONI Probe](https://ooni.org/install/) incluye dos [tests](https://ooni.org/nettest/) diseñados para medir redes con el objetivo de identificar la presencia de middleboxes.

### Sitio web espejo

Un sitio web espejo es una réplica de otro sitio web. Estos sitios web tienen URL diferentes, pero contenidos idénticos o casi idénticos.

Los sitios web espejo suelen crearse para evadir la censura en Internet. Cuando los ISP bloquean el acceso a un sitio web, bloquean el acceso a su URL. Cambiando el nombre de dominio, estos propietarios de sitios web pueden permitir que el público acceda al contenido de su sitio.

### Nettest

Nettest es la abreviatura de "Test de red".

En el contexto de OONI, los nettests se refieren a los tests de medición de red de OONI Probe.

Las descripciones de los nettests de OONI Probe están disponibles aquí: [https://ooni.org/nettest/](https://ooni.org/nettest/)

### Red

Los dispositivos, como las computadoras, se conectan entre sí y forman una red para intercambiar datos.

Cada red está conectada a otras redes, que a su vez están conectadas entre sí mediante tecnologías de redes electrónicas, inalámbricas y ópticas. Internet está formada por múltiples redes interconectadas.

### Anomalía en la red

Una anomalía de red es un comportamiento de red que se desvía de lo que es estándar, normal o esperado.

En el contexto de OONI, las anomalías de red son resultados de pruebas que se desvían de lo esperado basándose en las [metodologías de los tests de OONI Probe](https://ooni.org/nettest/).

Los resultados de los tests de OONI Probe, recolectados de la red del usuario, se comparan automáticamente con los resultados del test recolectado de una red no censurada. Si los resultados no coinciden, el resultado del test de OONI Probe en cuestión se marca como "anomalía", indicando una posible interferencia en la red.

### Interferencias en la red

Interferencia de red es un término general utilizado para describir
diversas formas de interferencia que se producen en las redes de
Internet.

En el contexto de OONI, el término interferencia de red se utiliza
principalmente para referirse a casos de censura y manipulación del
tráfico en Internet.

### Servicios cebolla

[Los servicios cebolla](https://community.torproject.org/onion-services/) (anteriormente conocidos como "servicios ocultos de Tor") son servicios de Internet a los que sólo se puede acceder [a través de la red Tor,](https://www.torproject.org/) proporcionando a sus usuarios mayores beneficios de privacidad y seguridad.

Los sitios web, por ejemplo, pueden situarse en una ubicación de red anónima mediante el uso de servicios cebolla, que les permiten ocultar su dirección IP y proporcionar más privacidad a sus visitantes. Estos sitios web se distinguen por sus direcciones .onion, como `https://facebookcorewwwi.onion/` o `http://www.nytimes3xbfgragh.onion/`.

En los últimos años, la versión de [OONI Probe para Linux y macOS](https://ooni.org/install/ooniprobe/) utilizaba servicios onion para subir mediciones a los servidores de OONI.

### OONI bouncer o rebotador

El OONI bouncer es el servicio que se encarga de informar a los clientes de OONI Probe:

* dónde deben enviar sus resultados

* cuáles son las direcciones de los ayudantes de nettest para que puedan recibir asistencia en la realización de pruebas

### Colector OONI

El colector OONI es el servicio que se utiliza para recoger las
mediciones de los clientes de OONI Probe de todo el mundo.

### OONI Explorer

[OONI Explorer](https://explorer.ooni.org/) es una
interfaz web que proporciona una localización para explorar, buscar y descargar todas las mediciones de red recogidas [a través de los tests de OONI Probe](https://ooni.org/install/) desde 2012 hasta
hoy.

### Ayudantes de OONI nettest

Los ayudantes de OONI nettest implementan protocolos del lado del
servidor que son de ayuda para los clientes de OONI Probe que ejecutan tests. Por ejemplo, los clientes de OONI Probe hablan con un ayudante de tests para saber cuál es el contenido esperado de un sitio web con el fin de hacer la comparación de control y determinar si ese sitio web está bloqueado.

### OONI Probe

OONI Probe es un [software libre y de código abierto](https://github.com/ooni) diseñado para medir la censura en Internet y otras formas de interferencia en la red.

OONI Probe ha sido desarrollado por el [Open Observatory of Network Interference](https://ooni.org/) desde 2012 y está disponible en [Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe), [iOS](https://itunes.apple.com/us/app/id1199566366), [Linux](https://github.com/ooni/probe-cli/releases), [Windows y macOS](https://github.com/ooni/probe-desktop/releases).

### OONI Run

[OONI Run](https://run.ooni.io/) es una interfaz web que permite a los usuarios de la aplicación móvil OONI Probe generar enlaces (esquema URL personalizado) para pruebas personalizadas de OONI Probe.

Está pensada como **herramienta para coordinar la medición de la censura con otros usuarios de OONI Probe** en un país o en todo el mundo.

[Los enlaces OONI Run](https://ooni.org/post/ooni-run/) pueden generarse seleccionando un test de OONI Probe específico, o añadiendo URLs a elección del usuario. El objetivo es compartir este enlace OONI Run generado con otros usuarios de la aplicación móvil OONI Probe, para que puedan ejecutar el test o testear los sitios que se eligieron cuando se generó el enlace.

La plataforma OONI Run también se puede utilizar para generar un código widget para incrustar un botón OONI (para pruebas personalizadas de OONI Probe) en una página web.

### Rendimiento

El rendimiento de red es una medida para definir la calidad de una
conexión de red. Se puede medir de varias formas (por ejemplo,
velocidad, ancho de banda, latencia, tasa de error).

### Protocolo

Los protocolos son un conjunto de reglas o procedimientos para
transmitir datos entre dispositivos electrónicos (como computadoras) en Internet. Estas reglas determinan cómo se estructurará la información y cómo se enviará y recibirá a través de internet.

Internet consta de varios tipos de protocolos, como el Protocolo de
Internet (IP), que se utiliza para dirigir paquetes de datos a un
ordenador o servidor específico.

### Proxy

Un proxy es un servidor que actúa como servicio intermediario a través del cual puedes canalizar parte o la totalidad de tus comunicaciones por internet. Por tanto, los proxies pueden utilizarse para evadir la censura en Internet.

### Raspberry Pi o placa de micro ordenador

Raspberry Pi es el nombre de una serie de computadoras monoplaca
fabricadas por la [Fundación Raspberry Pi](https://www.raspberrypi.org/), una organización benéfica del Reino Unido cuyo objetivo es educar a la gente en informática y crear un acceso más fácil a la educación informática.

OONI creó previamente una distribución de OONI Probe para Raspberry Pis, llamada [Lepidopter](https://ooni.org/install/lepidopter/).

### Servidor

Un servidor es un computador que permanece encendido y conectado a
Internet para proporcionar servicios de Internet a otros computadores.

Todos los servicios de Internet (como sitios web, aplicaciones y correos electrónicos) se alojan en servidores, que son responsables de recibir peticiones de otros computadores y responder a esas peticiones (por ejemplo, proporcionando acceso a los sitios web que alojan).

### TCP

El Protocolo de Control de Transmisión (TCP, por sus siglas en inglés) es uno de los principales protocolos de Internet.

Para conectarse a un sitio web, su computador necesita establecer una conexión TCP con la dirección de ese sitio web.

El TCP funciona sobre el Protocolo de Internet (IP), que define cómo dirigirse a los computadores en Internet.

Cuando se habla con una máquina a través del protocolo TCP se utiliza un par de IP y puerto, que tiene el siguiente aspecto: 10.20.1.1:8080.

La principal diferencia entre TCP y (otro protocolo muy popular llamado) UDP es que TCP tiene la noción de "conexión", lo que lo convierte en un protocolo de transporte "fiable".

### Bloqueo TCP/IP

El bloqueo TCP/IP es una forma de censura en Internet que se implementa impidiendo que un cliente establezca una conexión TCP con un servicio de Internet.

Esto se consigue impidiendo que la IP de destino sea alcanzable o
restableciendo activamente (es decir, inyectando paquetes TCP RST) la conexión al par IP:Puerto.

[OONI Probe](https://ooni.org/install/) mide el bloqueo TCP/IP de sitios web y aplicaciones.

### Entrada de test

La entrada de tests (en el contexto de [OONI Probe](https://ooni.org/install/)) es un recurso de Internet (como una URL, un dominio o una dirección IP) que es el objetivo de una medición.

### Lista de test

Una [lista de test](https://github.com/citizenlab/test-lists/tree/master/lists) es un archivo CSV legible electrónicamente que incluye URLs que son analizadas por herramientas como [OONI Probe](https://ooni.org/install/) en busca de censura.

Los proyectos de medición de la censura como OONI se basan en una
comunidad global de voluntarios que realizan tests de detección de la censura desde puntos de observación locales. Dadas las limitaciones de ancho de banda, no resulta práctico (ni posible en muchos casos) analizar la mayoría de los sitios web disponibles en Internet. En su lugar, nuestras mediciones se centran en *una muestra* de sitios web proporcionados en las "listas de test": archivos CSV legibles electrónicamente con un conjunto de URL depuradas e interesantes.

Hay dos tipos de listas de test:

* **Lista de test global**: Incluye una amplia gama de sitios web de interés internacional (por ejemplo, facebook.com), la mayoría en inglés.

* **Lista de test específicas por cada país**: Incluyen sitios web que sólo son relevantes para un país específico (por ejemplo, sitios web de medios de comunicación brasileños), muchos de los cuales están en los idiomas locales

Las listas de test están [alojadas](https://github.com/citizenlab/test-lists) y gestionadas por el [Citizen Lab](https://citizenlab.ca/).

### TLS

Seguridad en la Capa de Transporte (TLS, por sus siglas en inglés) -- también conocido como "SSL" -- es un protocolo criptográfico que
permite mantener una conexión segura y encriptada entre su computador y un servicio de Internet.

Cuando se conecta a un sitio web a través de TLS, la dirección del sitio web comenzará por HTTPS (como `https://www.facebook.com/`), en lugar de HTTP.

### Tor

[La red Tor,](https://www.torproject.org/) que es gratuita
y de código abierto, proporciona a sus usuarios anonimato en línea,
privacidad y evasión de la censura. El software Tor está diseñado para hacer rebotar las comunicaciones en una red distribuida de repetidores gestionados por voluntarios de todo el mundo, ocultando así las direcciones IP de sus usuarios y permitiéndoles eludir el rastreo en línea y la censura en Internet.

### Manipulación del tráfico

La manipulación del tráfico (una forma de interferencia de red) describe el acceso de un adversario a una conexión de red con capacidad para modificar el flujo de datos.

Por ejemplo, un proveedor de servicios de Internet (ISP) puede utilizar un middlebox (un dispositivo informático de red) para inspeccionar, transformar, filtrar o manipular de cualquier otro modo el tráfico de Internet.

### URL

Una URL es la dirección de una página de la World Wide Web (La Web).

Por ejemplo, `https://twitter.com/` es una URL, mientras que twitter.com es un dominio.

### Punto de vista de red

Una posición estrátegica de red es una ubicación de red única desde la que se realizan mediciones de Internet. En el contexto de OONI Probe, consideramos que un punto de ventaja es un par único de red y país, como el punto de ventaja de "Vodafone en Italia".

### VPN

Una Red Privada Virtual (VPN, por sus siglas en inglés) es un software que crea una conexión encriptada (comúnmente llamada "túnel") desde tu dispositivo a un servidor (gestionado por un proveedor de VPN).

Cuando navega por internet a través de este "túnel", los sitios web y otros servicios en línea recibirán las peticiones de la dirección IP de ese servidor, en lugar de las de su dirección IP real.

Las VPN pueden utilizarse para evadir la censura en internet.
