# Riesgos: Lo que debes saber antes de ejecutar OONI Probe

**Note:** This document was translated by [Derechos Digitales](https://www.derechosdigitales.org/) ([view the english version](/about/risks)).

Según nuestro conocimiento, ningún usuario de OONI Probe ha sufrido consecuencias
como resultado del uso de nuestro software. Por lo tanto, los riesgos
potenciales descritos a continuación son teóricos y especulativos. Si estás
ejecutando OONI Probe en un entorno de alto riesgo, enfáticamente te recomendamos
a leer toda la documentación a continuación.

## Resumen de riesgos potenciales

* Cualquiera que monitoree tu actividad en Internet (por ejemplo, proveedores de
servicio de internet, gobiernos, empleadores) serán capaces de ver que estás
ejecutando OONI Probe;

* La [prueba de conectividad web de OONI](https://ooni.org/nettest/web-connectivity/) se conecta y descarga datos de muchos
tipos de sitios web, incluyendo algunos sitios que pueden ser considerados
provocativos o cuestionables (como por ejemplo, pornografía), los cuales pueden
ser ilegales en algunos países;

* Por defecto, todos los datos de red recopilados por OONI Probe son
[publicados](https://ooni.org/data/) para aumentar la transparencia
de la censura en Internet, fomentar el debate público y apoyar la investigación.
Sin embargo, enviar información de redes locales a servidores extranjeros puede
no ser visto como algo favorable por algunos gobiernos. Mientras los datos
publicados se restringen al mínimo necesario para identificar casos de censura
(hacemos lo posible por no publicar direcciones IP), proveedores de servicio de
internet (o ISPs, por sus siglas en Inglés) pueden intentar identificar usuarios
de OONI Probe a través de los datos públicos de OONI.

Por lo tanto, los riesgos potenciales asociados al uso de OONI Probe dependerán
de:

1. **Tu modelo de amenazas**. Un activista de alto perfil que ya es víctima de
vigilancia, por ejemplo, puede llamar más la atención al usar OONI Probe.

2. **Las leyes y regulaciones del país desde donde se ejecutará OONI Probe**. Lo
mejor sería consultar con abogados locales, e investigar si en el país existen
antecedentes de acciones judiciales contra particulares involucrados en
actividades similares.

3. **Los tipos de pruebas que se ejecutarán con OONI Probe**. No todas las
pruebas de OONI Probe tienen el mismo impacto en término de riesgos. La [prueba de WhatsApp de OONI](https://ooni.org/nettest/whatsapp/), por ejemplo, sólo intenta conectarse a servidores a los
que ya más de un billón de personas están conectadas alrededor del mundo. Puedes
deshabilitar la ejecución automática de pruebas y puedes seleccionar cuáles
pruebas ejecutar en la interfaz web de OONI.

4. **Los tipos de sitios que se probarán**. Puedes seleccionar tu propia lista
de sitios con la opción de línea de comandos: 

```
ooniprobe <nombre-de-la-prueba> -f <tu-lista-de-pruebas> 
```
También puedes contribuir a las listas de pruebas
utilizadas y sugerir la adición o remoción de sitios web.

5. **Si se publicarán los resultados obtenidos con OONI Probe**. Puedes
deshabilitar la publicación de esta información en la configuración de OONI
Probe.

## Entendiendo los riesgos potenciales de una forma más completa

El [software de pruebas de OONI](https://github.com/TheTorProject/ooni-probe)
(llamado OONI Probe) está diseñado para probar redes buscando señales de
censura, vigilancia y manipulación de tráfico. En algunos países alrededor del
mundo usar OONI Probe puede resultar en acciones judiciales, multas e incluso
encarcelación. Por esto te urgimos enfáticamente consultar con un abogado
licenciado para ejercer en tu país antes de descargar, instalar y ejecutar
OONI Probe, y leer cuidadosamente la documentación a continuación.

Los usuarios que ejecutan OONI Probe lo hacen bajo su propio riesgo. Al instalar
OONI Probe, los usuarios están de acuerdo con cumplir con la
[licencia](https://github.com/TheTorProject/ooni-probe/blob/master/LICENSE) y
[Política de Datos](/about/data-policy) de OONI. Ni
el [Proyecto OONI](/) ni [El Proyecto Tor](https://www.torproject.org/), se hacen responsables, de forma
conjunta o solidaria, ante la ley o en equidad, ante usuarios de OONI Probe y
terceros por cualquier daño resultante del uso de OONI Probe bajo cualquier
agravio, contrato u otras causas de acción.

* [Riesgos potenciales y sanciones](#riesgos-potenciales-y-sanciones)

* [Riesgos: Detección de OONI Probe](#riesgos-deteccion-de-ooni-probe)

	* [Vigilancia](#vigilancia)

	* [Servicios analizados](#servicios-analizados)

	* [Acceso físico o remoto al dispositivo del usuario](#acceso-fisico-o-remoto-al-dispositivo-del-usuario)

	* [Publicación de mediciones](#publicacion-de-mediciones)

* [Riesgos: Pruebas de OONI Probe](#riesgos-pruebas-de-ooni-probe)
  
	* [Legalidad de los sitios web analizados](#legalidad-de-los-sitios-web-analizados)
	
	* [Legalidad de las pruebas de OONI Probe](#legalidad-de-las-pruebas-de-ooni-probe)

	* [Legalidad del software de anonimato](#legalidad-del-software-de-anonimato)

	* [Servicios de terceros](#servicios-de-terceros)

* [Buscando consejo legal](#buscando-consejo-legal)

**Nota:** Los riesgos descritos a continuación son especulativos. Según nuestro
conocimiento, ningún usuario de OONI Probe ha sufrido consecuencias
relacionadas a los riesgos descritos a continuación. No obstante, te
recomendamos enfáticamente leer la siguiente información sobre los riesgos
potenciales asociados al uso de OONI Probe.

### Riesgos potenciales y sanciones

En algunos países, cualquier forma de medición activa de red puede ser ilegal o
incluso considerado una forma de espionaje.

Varios gobiernos tienen una larga historia de someter a activistas de derechos
digitales a varias formas de abuso que pueden hacer peligroso para las personas
en estos países ejecutar OONI Probe. El uso de OONI Probe puede por lo tanto
conllevar a sus usuarios a ser sometidos a penalidades civiles, criminales o
extra-judiciales. Estas sanciones pueden incluir potencialmente:

* Encarcelación

* Ataques físicos

* Grandes multas

* Amenazas

* Inclusión en listas de vigilancia gubernamentales

* Ser objetivo de monitoreo

En vista de estas amenazas, enfáticamente recomendamos consultar a un abogado y
entender los riesgos legales antes de usar OONI Probe. Los riesgos potenciales de
usar OONI Probe se detallan a continuación.

### Riesgos: Detección de OONI Probe

Ciertos usuarios pueden enfrentar sanciones severas si son detectados por
terceras entidades (como gobiernos) que ven a OONI Probe como una amenaza.

El uso de OONI Probe puede ser detectado por terceras entidades a través de lo
siguiente:

#### Vigilancia

Terceras entidades (como el gobierno de tu país, tu proveedor de servicio de
internet, o tu empleador) pueden estar monitoreando parte o la totalidad de tu
actividad en línea. Esto podría permitirles detectar el tráfico web generado por
tu uso de OONI Probe y asociarlo a tu persona.

Muchos países emplean medidas sofisticadas de vigilancia que permiten a
gobiernos rastrear la actividad en línea de las personas – incluso si están
utilizando servicios que preservan la privacidad, como Tor, Psiphon, redes
privadas virtuales (VPNs), o servidores proxy. En tales países, los gobiernos o
terceras entidades pueden ser capaces de identificarte como un usuario de
OONI Probe a pesar de las medidas que tomes para proteger tu privacidad en línea.

#### Servicios analizados

Los servicios a los que se conecta OONI Probe verán tu dirección IP y pueden ser
capaces de detectar que estás usando OONI Probe. Puedes ver cuáles son los
servicios que OONI Probe analiza [aquí](https://github.com/citizenlab/test-lists/tree/master/lists).

#### Acceso físico o remoto al dispositivo del usuario

Como con cualquier otro software, el uso de OONI Probe puede dejar rastros. Como
tal, cualquiera con acceso físico o remoto a tu computadora puede ser capaz de
ver que has descargado, instalado y ejecutado OONI Probe.

#### Publicación de mediciones

Por defecto, todas las mediciones generadas a través de OONI Probe son enviadas
al recolector de mediciones de OONI y automáticamente publicadas en:

* [Explorador OONI](https://explorer.ooni.org/world/)

* [Interfaz de mediciones de OONI](https://api.ooni.io/)

Por lo tanto, el público - incluyendo terceras entidades que ven el uso de OONI
Probe como una amenaza - será capaz de ver todas las mediciones de usuarios,
excepto si los usuarios [optan por no hacerlo](/about/data-policy/).

Los datos publicados incluyen tu ubicación aproximada, la red (ASN) desde la que
te conectas, y la hora en que ejecutaste OONI Probe. Otro tipo de información
que pueda identificarte, como tu dirección IP, no es recolectada
deliberadamente, pero puede estar incluida en cabeceras HTTP y otro tipo de
metadata. El contenido completo de las páginas descargadas por OONI Probe pueden
incluir tal información si, por ejemplo, un sitio web incluye códigos de rastreo
(tracking codes) o contenido personalizado basado en la ubicación de tu red.
Información que pueda identificarte podría potencialmente ayudar a terceras
entidades a detectar que eres un usuario de OONI Probe.

### Riesgos: Pruebas de OONI Probe

OONI ha desarrollado múltiples pruebas de software, cada una diseñada para
realizar una función diferente. Por tanto estas pruebas implican potencialmente
diferentes tipos de riesgos para el usuario.

De manera general, OONI Probe está diseñado para:

* Examinar si hay sitios web bloqueados;

* Examinar si aplicaciones de mensajería instantánea (como WhatsApp o Facebook
Messenger) están bloqueadas;

* Detectar la presencia de sistemas que pueden ser responsables de censura,
vigilancia y manipulación de tráfico;

* Examinar si herramientas para evadir la censura, como [Tor bridges](https://bridges.torproject.org/), [Psiphon](https://psiphon.ca/) y
[Lantern](https://getlantern.org/), están bloqueadas.

Le instamos a que revise detenidamente las **[especificaciones](https://github.com/ooni/spec)** y **[descripciones](https://ooni.org/nettest/)** de cada test de OONI Probe antes de ejecutarla.

#### Legalidad de los sitios web analizados

Al ejecutar la prueba de [conectividad web](https://ooni.org/nettest/web-connectivity/) de OONI te conectarás y descargarás información de varios
sitios web que están incluidos en las siguienes listas:

* [Lista de prueba específica por país](https://github.com/citizenlab/test-lists/tree/master/lists) (busca la lista de prueba de tu país de acuerdo al código de país)

* [Lista de prueba global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) (incluyendo una lista de sitios web visitados globalmente)

Muchos sitios web incluídos en las listas mencionadas son considerados
controversiales y pueden incluir pornografía o discurso de odio. Puede ser
ilegal acceder a este tipo de contenidos en tu país. En algunos países, acceder
a contenido ilegal tiene consecuencias severas, como la encarcelación. Por lo
tanto te recomendamos que revises cuidadosamente si estás dispuesto a tomar el
riesgo de acceder y descargar información de tales sitios web a través de las
pruebas de OONI Probe.

Si no está seguro de las posibles implicaciones de conectarse y descargar datos de los sitios web enumerados en las listas anteriores, puede elegir qué sitios web testear a través del botón "Elegir sitios web" de la aplicación móvil OONI Probe, o utilizando la plataforma [OONI Run](https://run.ooni.io/).

#### Legalidad de las pruebas de OONI Probe

Algunas pruebas de red llevadas a cabo por OONI Probe pueden violar las leyes de
mal uso de sistemas computacionales de tu país o los términos de servicio de tu
proveedor de internet.

En particular, los operadores de componentes de red afectados por estas pruebas
de OONI Probe pueden verlas como intentos de ataque. La prueba [HTTP-invalid-request-line](https://ooni.org/nettest/http-invalid-request-line/) de
OONI, por ejemplo, puede generar sospecha al enviar mensajes fuera de
especificación a un servicio de repetición y puede ser visto como una forma de
"hacking". Si los componentes de red afectados por esta prueba ven estos
mensajes fuera de especificación como ataques, puedes enfrentar consecuencias
tales como enjuiciamiento bajo leyes de mal uso de sistemas computacionales.

#### Servicios de terceros

Nuestra [Prueba de Diagnóstico de Red (NDT)](https://ooni.org/nettest/ndt/) es una prueba de desempeño de
propósito general llevada a cabo utilizando servidores de terceros,
proporcionados por [Measurement Lab (M-Lab)](https://www.measurementlab.net/).
Los servicios NTD del M-Lab requieren la retención y publicación de direcciones
IP con propósitos de investigación. Para mayor información te invitamos a leer
el [enunciado de privacidad](https://www.measurementlab.net/privacy/) del M-Lab.

### Buscando consejo legal

Los riesgos legales asociados a descargar, instalar y ejecutar OONI Probe pueden
variar de país en país, por lo que que te aconsejamos consultar con abogados que
tengan licencia para ejercer en tu país.

Algunas preguntas relacionadas con OONI Probe que puedes querer preguntar a tus
abogados incluyen:

* Mi país me prohíbe el uso de:

  * **¿software de medición de red?**

  * **¿software de detección de censura?**

  * **¿software de evasión de censura?**

  * **¿software de anonimato?**

* ¿Es ilegal acceder a determinados sitios web?

* ¿Hay leyes en mi país que requieran que el proveedor de servicios de internet
 (ISP) rastree mi actividad en línea?

* ¿Alguien en mi país ha sido criminalizado basado en su actividad en línea?
 (esto no debe ser necesariamente específico sobre mediciones de red)

Ten en cuenta que esta no es una lista exhaustiva de preguntas.

De manera adicional, mientras que muchos países no tienen leyes específicas que
prohíban el uso de software para realizar mediciones de red, el uso de OONI
Probe aún puede ser criminalizado en determinados países bajo otras leyes más
generales. Por ejemplo, usar OONI Probe puede ser visto como ilegal o actividad
en contra del gobierno. Los usuarios de OONI Probe pueden también enfrentar el
riesgo de ser criminalizados por motivos de **seguridad nacional** si la
información obtenida y publicada al ejecutar OONI Probe es vista como "un
compromiso" de la seguridad interna o externa del país. Es posible que quieras
consultar con un abogado local sobre estos aspectos también.

Además de consultar con un abogado, también puedes contactarnos con preguntas
específicas a **contact@openobservatory.org**. Por favor ten en cuenta que no
somos abogados, y que cualquier información que te entreguemos no constituye
consejo legal. Adicionalmente, tu comunicación con nosotros no está protegida
por ningún privilegio legal por lo que fuerzas de la ley pueden requerir y
obtener cualquier información que nos entregues. Sin embargo, podríamos ponerte
en contacto con abogados que son capaces de abordar tus preguntas y/o
preocupaciones.

Algunos recursos relevantes:

* [Tor Legal FAQ](https://www.eff.org/torchallenge/faq.html)

* [EFF Know Your Rights](https://www.eff.org/issues/know-your-rights)

**Nota:** Estos recursos no constituyen consejo legal y pueden estar
desactualizados. Por favor confirma que estás leyendo la última versión antes
de confiar en algún consejo.

Nuevamente, Los usuarios que ejecutan OONI Probe lo hacen bajo su propio riesgo.
Al instalar OONI Probe, los usuarios están de acuerdo con cumplir con la
[licencia](https://github.com/TheTorProject/ooni-probe/blob/master/LICENSE) y
[Política de Datos](https://ooni.org/about/data-policy) de OONI. Ni
el [Proyecto OONI](https://ooni.org/) ni [El Proyecto Tor](https://www.torproject.org/), se hacen responsables, de forma
conjunta o solidaria, ante la ley o en equidad, ante usuarios de OONI Probe y
terceros por cualquier daño resultante del uso de OONI Probe bajo cualquier
agravio, contrato u otras causas de acción.
