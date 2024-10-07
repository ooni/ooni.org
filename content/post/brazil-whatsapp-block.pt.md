---
title: "WhatsApp bloqueado (outra vez) no Brasil"
author: "Vasilis Ververis, Maria Xynou, Will Scott"
date: "2016-05-06"
tags: ["brazil", "whatsapp", "country-br", "theme-im"]
categories: ["report"]
aliases:
  - /whatsapp-blocked-in-brazil-again-pt
  - /post/brazil-whatsapp-block-pt
---

**Pais:** Brasil

**ISPs investigados:** Tim mobile (AS 26615), Oi landline (AS 7738)

**Método de censura:** DNS Hijacking

**OONI testes:** HTTP Requests, DNS Consistency

**Periodo da medição:** 2016-05-02 - 2016-05-03

**Translation by:** Kornelia Friesch

----------------------------------------------------------------------------------------

Desde que o
[WhatsApp implantou a codificação end-to-end (end-to-end encryption)]
(https://www.whatsapp.com/security/) para proteger a privacidade e segurança
dos, em nível mundial, um bilhão de usuários, manifestaram-se, alguns casos de
censura ordenados por governos irritando-se pelo fato de não terem mais acesso
à comunicação privada dos cidadãos. Com a codificação end-to-end pelo protocolo
Signal, se torna-se impossível para o WhatsApp decifrar os dados do usuário. Ou
seja, mesmo se quisesse entregar os dados não podería – sendo isso o que
precisamente faz a comunicação pelo WhatsApp mais segura. Já em Dezembro do
ano passado um juiz no Brasil [ordenou o bloqueio do WhatsApp por 48 horas]
(https://www.theguardian.com/technology/2015/dec/17/whatsapp-blocked-brazil-48-hours-facebook)
, sancionando desta forma a rejeição de entrega de dados pelo WhatsApp durante
uma investigação de crimes. No início desta semana aconteceu outro incidente de
bloqueio por [ordem judicial no Brasil]
(https://www.theguardian.com/technology/2016/may/02/brazil-whatsapp-block-72-hours)
, desta vez por 72 horas, penalizando novamente desta forma outra vez a
rejeição da empresa de entregar dados durante uma investigação sobre tráfico de
drogas. Nos dois casos, a ordem de bloqueio de WhatsApp se efetuou em menos de
24 horas, gerando um enorme descontenamento na população brasileira, da qual
[mais de cem milhões de pessoas]
(http://www.theglobeandmail.com/technology/tech-news/whatsapp-comes-down-how-brazilians-are-coping-without-their-social-mediafixes/article27799710/)
(91% dos usuários de celular) dependem desse serviço na sua comunicação
cotidiana deles.

Segundo Lucas Teixeira, técnico-chefe de [Coding Rights]
(https://www.codingrights.org/):


> "As pessoas reagiram ao bloqueio do Whatsapp com um misto de choque, revolta e
> zoeira, refletindo o fato de que o Whatsapp é usado por quase todas as pessoas
> em cidades pequenas e grandes -- e até mesmo em áreas rurais -- para se
> comunicarem, substituindo o SMS e chamadas telefônicas em quase 100%. As
> parcerias de zero rating da empresa com telecoms também ajudou bastante na
> adoção. Planos de Internet móvel com franquia de dados mas "Whatsapp de graça"
> são comuns. O Marco Civil da Internet proíbe expressamente violações à
> neutralidade de rede, mas a legalidade do zero rating especificamente vai ser
> definida no seu [processo de regulamentação](http://participacao.mj.gov.br/marcocivil).
> Já sobre a legalidade do bloqueio do Whatsapp, não há certeza pois o processo
> corre sob sigilo, mas ele foi revertido na Justiça."


Acompanhando as reportagens recentes sobre o bloqueio de WhatsApp no Brasil, o
[Open Observatory of Network Interference (OONI)](https://ooni.org/)
realizou testes dentro do País para detectar os detalhes técnicos da
implementação, isto é, o metodo da censura. Esta entrada blog contem a
publicação dos dados contabilizados, mostrando desta maneira o que o bloqueio
da página web do WhatsApp pelos provedores de serviço de internet (ISPs)
brasileiros usando o método de DNS hijacking.

# Os nossos resultados

Para comprovar o bloqueio do WhatsApp, assim como para identificar o método
aplicado, dois tipos de [testes OONI]
(https://github.com/TheTorProject/ooni-spec) foram realizados no Brasil:

* [DNS-consistency tests]
(https://github.com/TheTorProject/ooni-probe/blob/master/docs/source/tests/dnsconsistency.rst)
* [HTTP-request tests]
(https://github.com/TheTorProject/ooni-probe/blob/master/docs/source/tests/http_requests.rst)

O primeiro teste é criado para comparar os resultados da consulta do DNS de um
DNS reverso confiável com os resultados de um DNS reverso pelo qual
comprovou-se manipulação. O segundo teste tenta detectar a censura online,
comparando HTTP pedidos de informação pelo [Tor](https://www.torproject.org/) e
pela rede do usuário. Aplicando estes dois testes a **web.whatsapp.com** e a
**www.whatsapp.com**, o **DNS hijacking** se revelou como método de bloqueio
(exemplificado a seguir):

**DNS-consistency tests**

```
###########################################
# OONI Probe Report for dns_consistency (0.7.0)
# Tue May  3 06:20:40 2016
###########################################
probe_asn: AS7738
probe_cc: BR
test_helpers: {backend: '213.138.109.232:57004'}
test_name: dns_consistency
test_start_time: '2016-05-03 04:20:40'
test_version: 0.7.0
---
control_resolver: 213.138.109.232:57004
errors: {192.168.122.1: dns_lookup_error}
failures: [192.168.122.1]
inconsistent: []
input: www.whatsapp.com
measurement_start_time: '2016-05-03 04:20:43'
queries:
- answers:
  - {answer_type: A, ipv4: 184.173.147.39}
  - {answer_type: A, ipv4: 184.173.147.38}
  - {answer_type: A, ipv4: 192.155.212.203}
  - {answer_type: A, ipv4: 192.155.212.202}
  failure: null
  hostname: www.whatsapp.com
  query_type: A
  resolver_hostname: 213.138.109.232
  resolver_port: 57004
- answers: []
  failure: deferred_timeout_error
  hostname: www.whatsapp.com
  query_type: A
  resolver_hostname: 192.168.122.1
  resolver_port: 53
successful: []
test_resolvers: [192.168.122.1]
test_runtime: 1.2021667957305908
...
control_resolver: 213.138.109.232:57004
errors: {192.168.122.1: dns_lookup_error}
failures: [192.168.122.1]
inconsistent: []
input: web.whatsapp.com
measurement_start_time: '2016-05-03 04:20:43'
queries:
- answers:
  - {answer_type: CNAME, hostname: mmx-ds.cdn.whatsapp.net}
  - {answer_type: A, ipv4: 179.60.192.51}
  failure: null
  hostname: web.whatsapp.com
  query_type: A
  resolver_hostname: 213.138.109.232
  resolver_port: 57004
- answers: []
  failure: deferred_timeout_error
  hostname: web.whatsapp.com
  query_type: A
  resolver_hostname: 192.168.122.1
  resolver_port: 53
successful: []
test_resolvers: [192.168.122.1]
test_runtime: 1.223766803741455
```

```
###########################################
# OONI Probe Report for dns_consistency (0.7.0)
# Tue May  3 01:39:37 2016
###########################################
probe_asn: AS26615
probe_cc: BR
software_name: ooniprobe
software_version: 1.4.2
test_helpers: {backend: '213.138.109.232:57004'}
test_name: dns_consistency
test_start_time: '2016-05-02 23:39:37'
test_version: 0.7.0
---
control_resolver: 213.138.109.232:57004
errors: {192.168.122.1: no_answer}
failures: [192.168.122.1]
input: www.whatsapp.com
measurement_start_time: '2016-05-02 23:39:40'
queries:
- answers:
  - {answer_type: A, ipv4: 169.44.84.178}
  - {answer_type: A, ipv4: 184.173.147.39}
  - {answer_type: A, ipv4: 184.173.147.38}
  - {answer_type: A, ipv4: 169.44.82.102}
  - {answer_type: A, ipv4: 192.155.212.202}
  - {answer_type: A, ipv4: 192.155.212.203}
  failure: null
  hostname: www.whatsapp.com
  query_type: A
  resolver_hostname: 213.138.109.232
  resolver_port: 57004
- answers: []
  failure: null
  hostname: www.whatsapp.com
  query_type: A
  resolver_hostname: 192.168.122.1
  resolver_port: 53
successful: []
test_resolvers: [192.168.122.1]
test_runtime: 0.47959399223327637
---
control_resolver: 213.138.109.232:57004
errors: {192.168.122.1: no_answer}
failures: [192.168.122.1]
input: web.whatsapp.com
measurement_start_time: '2016-05-02 23:39:40'
queries:
- answers:
  - {answer_type: CNAME, hostname: mmx-ds.cdn.whatsapp.net}
  - {answer_type: A, ipv4: 179.60.192.51}
  failure: null
  hostname: web.whatsapp.com
  query_type: A
  resolver_hostname: 213.138.109.232
  resolver_port: 57004
- answers: []
  failure: null
  hostname: web.whatsapp.com
  query_type: A
  resolver_hostname: 192.168.122.1
  resolver_port: 53
successful: []
test_resolvers: [192.168.122.1]
test_runtime: 0.03604292869567871
```

```
###########################################
# OONI Probe Report for dns_consistency (0.7.0)
# Tue May  3 15:07:07 2016
###########################################
---
annotations: null
data_format_version: 0.2.0
input_hashes: [db9176124032c0dd1d974fa52ee194e8304658ba2f32f5f07911abfb03521ff0]
options: [-f, whatsappurl.list]
probe_asn: AS7738
probe_cc: BR
probe_city: null
probe_ip: 127.0.0.1
report_id: null
software_name: ooniprobe
software_version: 1.4.2
test_helpers: {backend: '213.138.109.232:57004'}
test_name: dns_consistency
test_start_time: '2016-05-03 13:07:07'
test_version: 0.7.0
...
---
control_resolver: 213.138.109.232:57004
errors: {192.168.122.1: dns_lookup_error}
failures: [192.168.122.1]
inconsistent: []
input: www.whatsapp.com
measurement_start_time: '2016-05-03 13:07:12'
queries:
- answers:
  - {answer_type: A, ipv4: 192.155.212.202}
  - {answer_type: A, ipv4: 192.155.212.203}
  - {answer_type: A, ipv4: 184.173.147.38}
  - {answer_type: A, ipv4: 184.173.147.39}
  - {answer_type: A, ipv4: 169.44.84.178}
  - {answer_type: A, ipv4: 169.44.82.102}
  failure: null
  hostname: www.whatsapp.com
  query_type: A
  resolver_hostname: 213.138.109.232
  resolver_port: 57004
- answers: []
  failure: deferred_timeout_error
  hostname: www.whatsapp.com
  query_type: A
  resolver_hostname: 192.168.122.1
  resolver_port: 53
successful: []
test_resolvers: [192.168.122.1]
test_runtime: 1.296454906463623
...
---
```

**HTTP-request test**

```
###########################################
# OONI Probe Report for http_requests (0.2.5)
# Mon May  2 23:17:02 2016
###########################################
probe_asn: AS26615
probe_cc: BR
software_name: ooniprobe
software_version: 1.4.2
test_helpers: {}
test_name: http_requests
test_start_time: '2016-05-02 21:17:02'
test_version: 0.2.5
...
agent: agent
body_length_match: null
body_proportion: null
control_cloudflare: null
control_failure: null
experiment_failure: dns_lookup_error
factor: 0.8
headers_diff: null
headers_match: null
input: https://www.whatsapp.com
measurement_start_time: '2016-05-02 21:17:07'
requests:
- failure: dns_lookup_error
  request:
    body: null
    headers: {User-Agent: 'Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.2)
        Gecko/20100115 Firefox/3.6'}
    method: GET
    tor: {exit_ip: null, exit_name: null, is_tor: false}
    url: https://www.whatsapp.com
  response: null
```

## Ultrapassar censura

Pode-se ultrapassar o bloqueio da página web do WhatsApp’s pelo uso do
[Tor](https://www.torproject.org/). No caso do DNS hijacking, os usuários podem
conseguir acesso às páginas bloqueadas apenas [modificando o DNS reverso]
(https://developers.google.com/speed/public-dns/docs/using#google_public_dns_ip_addresses)
(embora essa variante não seja sempre eficaz). Em caso de bloquearem o
WhatsApp (ou outros IM aplicatvos) outra vez, os usários de Android no Brasil
(e por toda a parte) podem tentar ultrapassar a censura usando o [**modo da VPN
de Orbot**](https://www.torproject.org/docs/android.html) o qual autoriza todos
os applicativos a funcionar pela rede [Tor](https://www.torproject.org/). Não
obstante, é importante dastacar que o recurso da VPN de Orbot **não** dever ser
utilizado para anonimato na rede, mas para ultrapassar a censura na rede.

## Limitações nessa investigação
No momento, os [testes de software do OONI]
(https://github.com/TheTorProject/ooni-spec) **não** se relacionam
particularmente aos applicativos de instant messaging (IM) (como p. ex.
WhatsApp), mas às páginas web. È por isso, que os nossos resultados não
refletem os testes do applicativo WhatsApp, mas se limitam aos testes a
respeito da página web de WhatsApp a qual foi bloqueada por DNS hijacking. Ao
longo desse ano pretendemos desenvolver outros OONI testes que particularmente
tenham como objetivo testar applicativos de IM a respeito da censura.

Até então, o bloqueio da página web de WhatsApp assim como o applicativo web
podem ser testados da seguinte forma:

1. [Instalar ooniprobe]
 (https://github.com/TheTorProject/ooni-probe#installation)
2. Baixar o [whatsapp deck]
(https://raw.githubusercontent.com/TheTorProject/ooni-probe/0b4cea0ad99696f664cd3083df929d93f88fda43/data/decks/whatsapp.deck)
(eg. `wget https://raw.githubusercontent.com/TheTorProject/ooni-probe/0b4cea0ad99696f664cd3083df929d93f88fda43/data/decks/whatsapp.deck`)
3. Percorrer o test deck `ooniprobe -i whatsapp.deck hr`

# OONI Explorer report links

## HTTP Requests measurements

- [URL: http://web.whatsapp.com May 2, 2016 9:17:02 PM, AS 26615](https://explorer.ooni.org/measurement/20160502T211641Z_AS26615_S0P6z1jAn0ToeMtK4xvjJUKlSOw9ENcipv9pUfrVd3yPmuD7ek?input=http:%2F%2Fweb.whatsapp.com)
- [URL: http://web.whatsapp.com May 2, 2016 9:17:02 PM, AS 26615](https://explorer.ooni.org/measurement/20160502T211641Z_AS26615_S0P6z1jAn0ToeMtK4xvjJUKlSOw9ENcipv9pUfrVd3yPmuD7ek?input=https:%2F%2Fweb.whatsapp.com)
- [URL: http://www.whatsapp.com May 2, 2016 9:17:02 PM, AS 26615](https://explorer.ooni.org/measurement/20160502T211641Z_AS26615_S0P6z1jAn0ToeMtK4xvjJUKlSOw9ENcipv9pUfrVd3yPmuD7ek?input=http:%2F%2Fwww.whatsapp.com)
- [URL: https://www.whatsapp.com May 2, 2016 9:17:02 PM, AS 26615](https://explorer.ooni.org/measurement/20160502T211641Z_AS26615_S0P6z1jAn0ToeMtK4xvjJUKlSOw9ENcipv9pUfrVd3yPmuD7ek?input=https:%2F%2Fwww.whatsapp.com)
- [URL: http://www.whatsapp.com/cidr.txt May 2, 2016 11:39:18 PM, AS 26615](https://explorer.ooni.org/measurement/20160504T214210Z_AS26615_LzBigYkP8oN1aAnI1mnFFDwZPAbUcTu2ZN6uSwosZuW8HVm7br?input=http:%2F%2Fwww.whatsapp.com%2Fcidr.txt)
- [URL: https://www.whatsapp.com/cidr.txt May 2, 2016 9:17:02 PM, AS 26615](https://explorer.ooni.org/measurement/20160502T211641Z_AS26615_S0P6z1jAn0ToeMtK4xvjJUKlSOw9ENcipv9pUfrVd3yPmuD7ek?input=https:%2F%2Fwww.whatsapp.com%2Fcidr.txt)
- [URL: http://web.whatsapp.com May 3, 2016 4:17:57 AM, AS 7738](https://explorer.ooni.org/measurement/20160504T214555Z_AS7738_bCjuASU2Bx2qP7XWIarsRXUTHCRUO7AYaWgDOQowqyUgF8hEGA?input=http:%2F%2Fweb.whatsapp.com)
- [URL: https://web.whatsapp.com May 3, 2016 4:17:57 AM, AS 7738](https://explorer.ooni.org/measurement/20160504T214555Z_AS7738_bCjuASU2Bx2qP7XWIarsRXUTHCRUO7AYaWgDOQowqyUgF8hEGA?input=https:%2F%2Fweb.whatsapp.com)
- [URL: http://www.whatsapp.com May 3, 2016 4:17:57 AM, AS 7738](https://explorer.ooni.org/measurement/20160504T214555Z_AS7738_bCjuASU2Bx2qP7XWIarsRXUTHCRUO7AYaWgDOQowqyUgF8hEGA?input=http:%2F%2Fwww.whatsapp.com)
- [URL: https://www.whatsapp.com May 3, 2016 4:17:57 AM, AS 7738](https://explorer.ooni.org/measurement/20160504T214555Z_AS7738_bCjuASU2Bx2qP7XWIarsRXUTHCRUO7AYaWgDOQowqyUgF8hEGA?input=https:%2F%2Fwww.whatsapp.com)
- [URL: http://www.whatsapp.com/cidr.txt May 3, 2016 4:17:57 AM, AS 7738](https://explorer.ooni.org/measurement/20160503T041735Z_AS7738_N5LWvuq8MtDoAP7r93EWmqurxi6pZ9pzpBsbZhXZR8VF4R484M?input=http:%2F%2Fwww.whatsapp.com%2Fcidr.txt)
- [URL: https://www.whatsapp.com/cidr.txt May 3, 2016 4:17:57 AM, AS 7738](https://explorer.ooni.org/measurement/20160503T041735Z_AS7738_N5LWvuq8MtDoAP7r93EWmqurxi6pZ9pzpBsbZhXZR8VF4R484M?input=https:%2F%2Fwww.whatsapp.com%2Fcidr.txt)

## DNS Consistency measurements

- [Website: web.whatsapp.com May 2, 2016 11:39:37 PM, AS 26615](https://explorer.ooni.org/measurement/20160502T233914Z_AS26615_MFMGaqdNJpa0ao1EZjVRVRkQIngry7DXMHE44SANRBBWMNB53e?input=web.whatsapp.com)
- [Website: www.whatsapp.com May 2, 2016 11:39:37 PM, AS 26615](https://explorer.ooni.org/measurement/20160502T233914Z_AS26615_MFMGaqdNJpa0ao1EZjVRVRkQIngry7DXMHE44SANRBBWMNB53e?input=www.whatsapp.com)
- [Website: web.whatsapp.com May 3, 2016 1:07:07 PM, AS 7738](https://explorer.ooni.org/measurement/20160504T214811Z_AS7738_G7r7jVDGUQffeea959x5m7Fr0e4EsM5ppD3vl9fWhuM3uqkyIA?input=web.whatsapp.com)
- [Website: www.whatsapp.com May 3, 2016 4:20:40 AM, AS 7738](https://explorer.ooni.org/measurement/20160503T042017Z_AS7738_OZ89SZlnKKhSFhXOGMmsFzcZ9ctLL8NZgJeEg6llwDV92JKIf8?input=www.whatsapp.com)
