---
title: OONI Faharasa
description: "Faharasa hii imekusanya maelezo mafupi ya maneno yaliyotumika kwenye programu ya OONI, njia na tafiti za taarifa."
---

Hati hiyo imetafsiriwa kwa Kiswahili na [Zaina Foundation](https://zainafoundationtz.org/).

Hati asili: [OONI Glossary](https://ooni.org/support/glossary)

Faharasa hii *imekusanya* maelezo mafupi ya maneno yaliyotumika kwenye programu ya OONI, njia na tafiti za taarifa.

Kama ungependa kufahamu maneno ya ziada katika faharasa hii tafadhali [fungua hapa](https://github.com/ooni/ooni.org) au
[tutumie barua pepe](https://ooni.org/about/#contact).

* [API](#api)

* [AS](#as)

* [ASN](#asn)

* [BGP](#bgp)

* [Orodha iliyozuiliwa](#orodha-iliyozuiliwa)

* [Kurasa iliyozuiliwa](#kurasa-iliyozuiliwa)

* [Kuweka akiba](#kuweka-akiba)

* [Vifaa vya kukwepa udhibiti wa mtandao](#vifaa-vya-kukwepa-udhibiti-wa-mtandao)

* [Mtumiaji](#mtumiaji)

* [Mfumo unaochakata data](#mfumo-unaochakata-data)

* [DNS](#dns)

* [Utekaji wa DNS](#utekaji-wa-dns)

* [Utambuzi wa DNS](#utambuzi-wa-dns)

* [Maswali ya DNS](#ombi-la-dns)

* [Seva inayopokea maombi ya DNS](#seva-inayopokea-maombi-ya-dns)

* [Kudukuliwa DNS](#kudukuliwa-dns)

* [Kuchezea DNS](#kuchezea-dns)

* [Kutanguliza Kikoa](#kutanguliza-kikoa)

* [Jina la kikoa](#jina-la-kikoa)

* [Vipimo visivyo sahihi](#vipimo-visivyo-sahihi)

* [HTTP](#http)

* [HTTPS](#https)

* [Kuzuiwa HTTP](#kuzuiliwa-kwa-http)

* [Vikusanya HTTPS](#vikusanya-https)

* [Maelezo ya HTTP](#maelezo-ya-http)

* [Ombi la HTTP](#maombi-ya-http)

* [Majibu ya HTTP](#majibu-ya-http)

* [Hali za misimbo HTTP](#hali-za-misimbo-za-http)

* [Wakala wa kudhibiti HTTP](#wakala-wa-kudhibiti-http)

* [Ujumbe wa papo kwa papo](#ujumbe-wa-papo-kwa-papo)

* [Mtandao](#mtandao)

* [Upotevu wa mtandao](#upotevu-wa-mtandao)

* [Udhibiti wa mtandao](#udhibiti-wa-mtandao)

* [Anwani ya IP](#anwani-ya-ip)

* [ISP](#isp)

* [Kipimo](#kipimo)

* [Taarifa za Data](#taarifa-za-data)

* [Middlebox](#middlebox)

* [Tovuti kioo](#tovuti-kioo)

* [Kipimo vya mtandao](#kipimo-cha-mtandao)

* [Mtandao](#mtandao)

* [Mtandao kutokuwa kawaida](#mtandao-kutokuwa-kawaida)

* [Udhibiti wa Mtandao](#udhibiti-wa-mtandao)

* [Huduma zilizofichwa](#huduma-zilizofichwa)

* [OONI Taarifa](#ooni-taarifa)

* [Kikusanya OONI](#kikusanya-ooni)

* [OONI Explorer](#ooni-explorer)

* [Watoa Huduma wa OONI](#ooni-huduma-kwa-watumiaji)

* [OONI Probe](#ooni-probe)

* [OONI Run](#ooni-run)

* [Utendaji wa Mtandao](#utendaji)

* [Utaratibu](#utaratibu)

* [Wakala](#wakala)

* [Raspberry Pi](#raspberry-pi)

* [Seva](#seva)

* [TCP](#tcp)

* [Kuzuiwa TCP/IP](#kuzuiliva-kwa-tcpip)

* [Vitu vya kupima](#vitu-vya-kupima)

* [Orodha ya vipimo](#orodha-ya-vipimo)

* [TLS](#tls)

* [Tor](#tor)

* [Usafirishaji wa data kwa namna ya tofauti](#upotoshaji-wa-usafirishaji-wa-taarifa)

* [URL](#url)

* [Sehemu maalumu](#sehemu-maalum)

* [VPN](#vpn)

### API

An application Programming Interface (API) ni mfumo unaowawezesha watengenezaji wa programu kuandika msimbo wa programu kati ya vifaa mbalimbali.

[API ya OONI](https://api.ooni.io/) inatoa mfumo
unaowawezesha watumiaji kuomba aina fulani ya data za OONI na kuzipakua data hizo katika mfumo mahususi (JSON). Kwa matumizi ya makubwa ya data, tunapendekeza [OONI PostrageSQL MetaDB](https://github.com/ooni/sysadmin/blob/master/docs/metadb-sharing.md).

Kwa maelezo zaidi, tunapendekeza makala ["API ni
nini? kwa kingereza, tafadhali"](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/).

### AS

Mtandao inaendeshwa na makumi elfu ya mifumo huru (AS) ambayo inaratibiana yenyewe kwa yenyewe katika kusambaza uelekeo wa njia: ya taarifa ya namna ya kufikia anwani ya IP ya mtandao.

Kwa ujumla, Mtoa huduma ya mtandao (ISP) atawajibika kuisimamia mifumo huru kwa namna moja au nyingine.

Kila mfumo huru unawajibika kutoa paketi za taratibu za mtandao (IP) kwa seti za anwani za taratibu za mtandao (IP) anazozisimamia.

### ASN

Nambari ya mfumo huru(ASN) ni utambuzi wa kipekee wa mfumo huru (AS). Nambari hii inawezesha mfumo huru kubadilishana njia za taarifa na mifumo mingine.

Mtoa huduma ya mtandao (ISP) kwa kawaida huwa na nambari ya mfumo huru (ASN) iliyosajiliwa rasmi (na wanaweza kuwa nambari ya mfumo huru zaidi ya mmoja).

OONI probe inakusanya nambari ya mfumo huru ili kutambua mtandao ambao kipimo kilifanyika.

Kwa kutazama nambari ya mifumo huru katika kivinjari (kama Google) itaonesha ni mtoa huduma wa mtandao gani inahusiana nayo. Kwa mfano, ukitafuta "AS30722" inaleta majibu "Vodafone Italia".

### BGP

Mfumo wa kusafirisha taarifa katika mtandao (BGP) ni utaratibu unaotumiwa na mfumo huru (AS) katika mtandao ili kubadilishana njia za taarifa. Kwa taarifa hizi wanaweza kugundua mfumo huru upi unawajibika kwa seti zipi za anuani ya IP na njia zipi pakiti za IP zinahitaji kupita ili kufikia mfumo huru husika.

Data za BGP zinakusanywa na kuchapishwa na taasisi kama vile
[RIPE](https://www.ripe.net/) na [CAIDA](https://www.caida.org/), Zinaweza kutumika katika kupima upotevu wa mtandao.

### Orodha iliyozuiliwa

Orodha iliyozuiliwa ni orodha ya rasilimali za mtandao (kama vile tovuti na anwani za IP) zilizoiliwa kutoka na kuwafikia watumiaji

Baadhi ya serikali mara kwa chache huchapisha orodha rasmi za mtandao zilizozuiliwa (au zilizokiuka misingi) ambazo zimekusanya orodha ya tovuti ambazo zimezuiwa kisheria katika nchi.

Watoa huduma za mtandao (ISPs) wanaagizwa kuzuia upatikanaji wa tovuti zote zilizo jumuishwa katika orodha iliyozuiliwa, kwa kawaida hujumuisha mamia au maelfu ya URLs ambazo hubeba maudhui yaliyo kinyume na sheria
za nchi husika (Kama vile kamari, kusambaza mafaili, maudhui ya watu wazima, hotuba ya kisiasa, nakadhalika.).

### Kurasa iliyozuiliwa

Kurasa iliyozuiliwa ni kurasa ya tovuti ambayo inajitokeza wakati
mtumiaji anajaribu kufungua kurasa iliyozuiliwa kuonekana.

Hii ni mbinu ya udhibiti inayotumiwa na watoa huduma za mtandao (ISPs)
katika nchi mbalimbali (Kama vile Iran, Indonesia, Ugiriki na Italia).

Wakati kurasa iliyozuiliwa inatumiwa na mtoa huduma wa mtandao, mtumiaji
haoni maudhui ya tovuti anayojaribu kuifungua. Badala yake, wanaona
kurasa wa mtandao (Kurasa iliyozuiwa) inamfahamisha kuwa haruhusiwi
kufikia tovuti uliokusudiwa.

Ukurasa uliozuiliwa ni aina pekee ya udhibiti wa mtandao ambao
humfahamisha kwa uwazi mtumiaji wa mtandao kuhusu udhibiti. Mara nyingi
kurasa iliyozuiliwa huakisi sheria ya udhibiti.

Kwa mfano huu chini inaonyesha kurasa iliyozuiliwa nchini Indonesia:

![Indonesian block page](/post/indonesia/indonesian-blockpage.png)

Kulingana na ugunduzi wa OONI, Udhibiti wa mtandao moja kwa moja
huthibitika unapopatikana ukurasa uliozuiliwa.

### Kuweka akiba

Kuweka akiba ni mchakato wa kuhifadhi data kwa hifadhi isiyo ya kudumu ambayo inarahisisha upatikanaji wa haraka kwa matumizi ya baadae.

Kwa mfano, seva ya tovuti inaweza kuhifadhi rasilimali za tovuti fulani ili ziweze kuchakatwa haraka pale mtumiaji anapohitaji.

### Vifaa vya kukwepa udhibiti wa mtandao

Vifaa vya kukwepa udhibiti wa mtandao ni teknolojia zinazowawezesha mtumiaji wa mtandao kuepuka udhibiti wa mtandao, kama vile kuzuiwa kwa tovuti na programu za mitandao ya kijamii.

Vifaa vya kukwepa udhibiti wa mtandao zinawawezesha watumiaji wao kupata huduma za mtandao ambazo zimezuiliwa na watoa huduma wa mtandao (ISPs).

VPN na Proxies ni zana za kawaida za kukwepa udhibiti wa mtandao, wakati [Tor](https://www.torproject.org/) pia huwapa watumiaji wake faragha na kutokujulikana mtandaoni (pia husaidia kukwepa udhibiti wa mtandao).

### Mtumiaji

Katika ulimwengu wa kompyuta, mtumiaji ni program au kifaa ambacho kinachowasiliana na mtoa huduma wa seva.

Kwa mfano [Programu tumizi ya OONIProbe](https://ooni.org/install/), ni mtumiaji anayewasiliana na seva ya OONI ili kuwasilisha matokeo ya vipimo.

### Mfumo unaochakata Data

Mfumo unaochakata data ni mfumo wa programu iliotengenezwa kuchakata data.

[Mfumo unaochakata data wa OONI](https://github.com/ooni/pipeline) unawajibika kukusanya data za vipimo vya mtandao kutoka kwa watumiaji wa OONI Probe na kuchambua data ili kutambua hali isiyo ya kawaida mtandaoni ulimwenguni.

### DNS

DNS inamaanisha "Mfumo wa jina ya kikoa" na inaweka majina ya kikoa katika anwani za IP.

Kikoa ni jina ambalo kwa kawaida huwepo katika tovuti (zinatengenezwa) ili ziweze kupatikana na kukumbukwa kwa urahisi zaidi. Kwa mfano, `twitter.com` ni kikoa cha tovuti ya Twitter.

Hata hivyo, kompyuta haiwezi kuunganishwa na huduma ya mtandao kupitia majina ya kikoa, lakini inaweza kuunganishwa kwa anuani ya IP: Anwani ya kidigitali ya kila huduma ya mtandao. Sambamba na hilo, kiuhalisia, utahitaji anwani ya nyumba (zaidi ya kuwa na jina la nyumba yenyewe) ili kutembelea nyumba hio.

Mfumo wa jina la kikoa (DNS) inatumika katika kubadilisha jina la kikoa linalosomeka na binadamu (kama vile `ooni.org`) kwenda katika mfumo wa tarakimu ya anwani ya IP (`104.198.14.52`), ambazo zinaruhusu kompyuta yako yako kufikia tovuti iliyokusudiwa.

### Utekaji wa DNS

Utekaji wa DNS hutokea pale ambapo unatafuta anwani ya IP ya kikoa fulani, seva inayopokea maombi yaliyotumwa katika mfumo wa jina la kikoa hicho hufanyiwa udanganyifu kwa makusudi na kurudisha jibu lisilo sahihi

Matokeo yake, unaweza pokea anwani ya IP ya kurasa iliyozuiliwa, au unapata jibu linalo bainisha kuwa jina la kikoa halipo.

Watoa huduma za mtandao (ISPs) wanapopokea maagizo ya kuzuia tovuti kutoka serikalini, wakati mwingine hutumia mbinu hii, Katika hali hii, Inawezekana kukwepa udhibiti kwa kubadili seva inayopokea maombi ya DNS pekee, au kwa kutumia DNS iliyosimbwa, Kama vile DNS kupitia HTTPS.

### Utambuzi wa DNS

Unapojaribu kuipata tovuti katika kivinjari chako, ombi lako hutumwa kwa seva inayopokea maombi ya DNS, ambayo huomba anwani ya IP inayolingana na jina la kikoa uliloingiza.

Kuangalia kama tovuti imezuiliwa kwa njia ya DNS, [OONI Probe](https://ooni.org/install/) inaanza kwa kutambua DNS
ili kuona IP zipi zilizopo katika kupima vikoa vya seva za watumiaji zinazopokea maombi ya DNS. Ikiwa anwani ya IP hailingani na zile zilizotolewa na seva inayopokea maombi ya DNS nyingine (inajulikana hakuna udhibiti), Kuna uwezekano kwamba udhibiti umefanyika katika DNS.

Kwa maelezo zaidi juu ya utandjia kazi wa tovuti wa OONI unapatikana [hapa](https://ooni.org/nettest/web-connectivity/).

### Ombi la DNS

Ombi la DNS ni taarifa toka kwenye kompyuta ya mtumiaji kwenda kwenye seva ya DNS.

Mara nyingi, maombi ya DNS hutumwa kutafuta anwani ya IP inayo husiana na jina la kikoa (kama vile `ooni.org`).

### Seva inayopokea maombi ya DNS

Seva inayopokea maombi ya DNS ni seva ambayo huzipatia anwani za IP majina ya kikoa, hufanya kazi kama "kitabu cha anwani".

Seva inayopokea maombi ya DNS husimamia maombi yote ya DNS (kwa watumiaji wote wa kompyuta katika mtandao) na ina jukumu la kubadilisha majina ya kikoa (kama vile twitter.com) kuwa anwani ya IP (kama vile `38.229.72.16`).

Watoa huduma ya mtandao (ISPs), miongoni mwa watoaji huduma wengine (kama vile Google), hutumia seva ya maombi ya DNS ambayo inaweza kuhitajika kupokea anwani ya IP ya tovuti husika.

### Kudukuliwa DNS

Kudukuliwa kwa DNS hutokea wakati maombi ya DNS yameingiliwa na kugushiwa. Matokeo yake yanakuwa ya kughushi.

*Hii haihusishi* [DNS isiyopangiliwa](https://ooni.org/post/not-quite-network-censorship/), wala haifanani na DNS iliyotekwa ambapo seva ya maombi ya DNS huleta
majibu yaliyoghushiwa.

Kudukuliwa kwa DNS ni mbinu ya kisasa zaidi inayoiga jibu halali la swali lililoulizwa kutoka kwenye seva ya DNS, ambalo hutoa data zisizo halali.

Pale watoa huduma wa mtandao (ISPs) anapopokea maagizo kutoka serikalini kuzuia tovuti husika, wakati mwingine hutumia mbinu hii, kuingilia trafiki ya DNS na kutoa mrejesho wa kugushi kwa tovuti zilizopigwa marufuku (zilizozuiwa upatikanaji).

### Kuchezea DNS

Kucheza na mfumo wa jina la kikoa (DNS) ni neno **la mwamvuli linalotumika kuelezea aina mbalimbali za udhibiti**, utekaji na udukuzi wa DNS.

Huduma za mtandao (kama vile tovuti na programu) zinamilikiwa katika anwani ya IP, ambayo ni anwani ya kidigitali kwenye mtandao. Ili kutembelea tovuti, utahitaji anwani yake ya IP.

Kupata anwani ya IP kwenye tovuti, kompyuta yako inahitaji kutuma maombi katika seva inayopokea maombi ya DNS (sababu inasimamia kazidata ya anwani za IP zinazohusiana na vikoa).

Kucheza na mfumo wa jina la kikoa (DNS) hutokea, unapofanya utafutaji wa DNS kwa ajili ya tovuti, anwani ya IP isiyo sahihi inarejeshwa, inakuzuia kutembelea tovuti husika.

Uchezaji wa DNS unaweza kutokea katika namna mbalimbali, ikiwemo:

* **Utekaji wa DNS**: Ambapo seva ya DNS inayopokea maombi 'hudanganya' na kutoa anwani ya IP isiyo sahihi.

* **Kudukuliwa kwa DNS**: Ambapo ombi lako la DNS linazuiwa na utapokea anwani ya IP isiyo sahihi.

Kuchezea DNS ni mbinu iliyozoeleka ya udhibiti inayotumiwa na watoa huduma ya mtandao (ISPS) ulimwenguni kote.

[Programu ya OONI Probe](https://ooni.org/install/)
inapima [uchezewaji wa tovuti na programu](https://ooni.org/nettest/).

### Kutanguliza kikoa

Kutanguliza kikoa ( pia hufahamika kama "utangulizaji mtandaoni) "ni mbinu ya kukwepa udhibiti ambayo inategemea kutumia jina maarufu la kikoa linalohifadhiwa na mtoa huduma mkubwa katika kazidata ya mtandaoni "kutanguliza" usafirishaji wa taarifa nyingi katika huduma ya kukwepa udhibiti inayohifadhiwa katika kazidata ya mtandaoni ile ile.

Kwa mfano, Hii inaweza kuhusisha mpangilio wa huduma ya Kazidata ya mtandaoni ya Google katika kikoa `circumvention-service.google-cloud.com`, lakini kuitanguliza hii kwa kupitia `google.com`. Hii inamaanisha kwamba mtu anayefuatilia usafirishwaji wa data, atakachoweza kuona ni TLC iliyosimbwa katika `google.com`, Vilevile, Katika haya mawasiliano yaliyosimbwa, mtumiaji husema "ninataka kupata huduma ya `circumvention-service.google-cloud.com`" ili kukwepa kizuizi chochote kilichopo.

Matokeo yake, mdhibiti anaweza kuzuia kazidata ya mtandao (hivyo kuharibu huduma nyingine zote) au wanaweza kupata wakati mgumu katika kutofautisha maombi kwenda `circumvention-service.google-cloud.com` kutoka
kwa `google.com`. Dhana hii huitwa "[collateral freedom](https://www.upturn.org/static/files/CollateralFreedom.pdf)",
ambayo inategemea vidhibiti kutosababisha uharibifu wa ulinzi kwa kuzuia upatikanaji wa huduma kubwa (kama vile kazidata ya mtandao wa Google) ambapo shughuli zingine hutegemea.

### Jina la Kikoa

Kikoa ni jina ambalo hutumika kwenye tovuti (zinapo tengenezwa), ili
yaweze kufikiwa kwa urahisi na kukumbukwa.

Kwa mfano, **twitter.com** ni jina la kikoa la tovuti ya Twitter.

### DPI

Uchunguzwaji wa kina wa pakiti ni njia ya kuchunguza na kusimamia usafirishwaji wa data katika mtandao. Teknolojia hii hutumika kwa ukaguzi wa kina wa data zilizotumwa katika mtandao wa kompyuta.

DPI inawezesha namna bora ya kusimamia mtandao, na mara nyingi inatumika na makampuni na watoa huduma za mtandao (ISPs).

Hata hivyo teknolojia ya DPI, pia inaweza kutumika katika kudhibiti mtandao (kuzuia utendaji kazi wa tovuti au programu tumizi) na ufuatiliaji katika mitandao.

### Vipimo visivyo Sahihi

Vipimo visivyo sahihi ni matokeo ya kipimo yasiyo sahihi juu ya hali fulani.

**Katika muktadha OONI, vipimo visivyo sahihi ni matokeo ya kipimo cha OONI Probe (kinatambulika kama "isiyo ya kawaida") ambapo kimakosa huonesha uwepo wa udhibiti katika mtandao (kama vile kuzuiliwa kwa tovuti au programu).**

Matokeo ya kipimo cha OONI Probe, yaliyokusanywa kutoka katika mtandao wa mtumiaji, moja kwa moja hulinganishwa na matokeo kutoka kwenye mtandao ambao haujadhibitiwa. Kama matokeo hayalingani, basi matokeo ya OONI Probe yatatambulika kama yasiyo ya kawaida, kuonyesha kudhibitiwa
kwa mtandao. Mara nyingi hali hizi zisizo ya kawaida huwa udhibiti wakati baadhi huwa wa mtandao.

Vipimo visivyo sahihi hutokea kutokana na sababu mbalimbali (Baadhi hutokana na vizuizi katika [Njia za utendaji kazi za OONI](https://ooni.org/nettest/), na baadhi hutokana na namna mtandao unafanya kazi) kama zifuatazo:

* **Mtandao kushindwa kufanya kazi kwa muda mfupi**. Kama vipimo vya OONI Probe vimechukuliwa katika mtandao usio imara, matokeo huweza kuonyesha viashiria vya kudhibitiwa kwa TCP/IP, wakati kiuhalisia dosari za kimtandao huweza kusababisha utendaji wa TCP kushuka.

* **Huduma zisizo na uhakika**. Kama tovuti ipo katika seva isiyo ya uhakika au vinginevyo, huleta matatizo ya kiutendaji, tovuti iliyopimwa inaweza kuonyesha kushindwa (hata kama haijadhibitiwa) na kipimo cha OONIProbe kinaweza kushindwa.

* **Kitendo cha kutafsiri anwani ya IP ya DNS katika jina la kikoa**. Kama seva ya DNS inayopokea maombi ya mtumiaji wa OONIProbe (kama vile Google au watoa huduma ya mtandao wa ndani) huleta anwani ya IP ambayo ipo karibu na mtumiaji, anwani hiyo inaweza kuwa tofauti na anwani iliyosomwa katika eneo halisi alipo mtumiaji, huwa haliko sawa kuonyesha uwepo wa kuchezewa kwa DNS.

* **Mgawanyo wa maudhui kijiografia**. Tovuti nyingi hutoa maudhui tofauti kutegemea na nchi aliyopo mtumiaji. Katika hili majibu ya HTTP kutoka katika mtandao wa OONIProbe na yale yanayotoka sehemu halisi aliyopo yatatofautiana kuonyesha uwepo wa udhibiti au muingiliano utokanao na HTTP.

### HTTP

Utaratibu ya kuhamisha kiungo (HTTP) ni utaratibu uliowekwa na tovuti ulimwenguni ili kuhamisha na kubadilisha data katika mtandao.

Utaratibu wa HTTP huruhusu mawasiliano kati ya mtumiaji na seva. Hufanya hivyo kwa kushughulikia maombi ya mtumiaji kuunganishwa katika seva, na majibu ya seva juu ya maombi ya mtumiaji.

Tovuti zote huusisha na HTTP (au HTTPS) kiambishi awali (kama vile `http://example.com/`) ili kwamba kompyuta (mtumiaji) inaweza kuomba na kupokea maudhui yaliyopo katika tovuti (iliyo katika seva).

Uhamishwaji wa data katika utaratibu wa HTTP **usiosimbwa**.

### HTTPS

Itifaki ya Uhamishaji wa Kiungo Salama (HTTPS) pia unafahamika kama HTTP katika TLS au HTTP katika SSL ni **utaratibu wa HTTP ulio simbwa**.

Katika miaka ya nyuma, tovuti kubwa nyingi zilianza kukubaliana na HTTPS (kama vile `https://www.facebook.com/`) ili usafirishaji wa data (kama vile nywila za kuingilia katika tovuti) katika utaratibu wa HTTP zinakuwa zimesimbwa.

### Kuzuiliwa kwa HTTP

Kuzuiliwa HTTP ni neno linalobeba namna zote za kudhibitiwa katika mfumo wa HTTP kwa lengo la kuzuia mtumiaji kupata taarifa kutoka tovuti seva husika.

Kupata tovuti katika mtandao, maombi ya HTTP hutumwa katika seva ambayo tovuti husika ipo. Kama maombi yalifanikiwa seva itatoa majibu ikiwa na maudhui ya kukupatia ruhusa ya kufikia.

Watoa huduma za mtandao wanapopokea maagizo toka serikalini kuzuia utendaji wa tovuti fulani, kuzuia utendaji wa HTTP ni mbinu inayotumika mara kwa mara katika udhibiti wa mtandao. Kuna namna nyingi za kufanya udhibiti wa mtandao kama zifuatazo:

* **Kukupatia ukurasa uliozuiliwa**: katika hili, ISP inazuia maombi ya mtumiaji kuifikia tovuti husika (mfano facebook.com) badala yake inamletea mtumiaji ukurasa uliozuiliwa, ambayo inamtaarifu mtumiaji kuwa haruhusiwi kufikia tovuti anayohitaji.

* **Kushindwa kwa HTTP**: Maombi ya mtumiaji ya HTTP (kupata huduma fulani ya mtandao) yanashindiwa kwa sababu yanadhibitiwa na seva ya HTTP inayodhibiti mawasiliano kati ya mtumiaji na mtandao, au ISP anaunganisha kwa upya au inateka mawasiliano (yasiyo simbwa) kuielekeza upya (kuzuia kufikia seva iliyokusudiwa).

[Kipimo cha upatikanaji wa tovuti](https://ooni.org/nettest/web-connectivity/) cha OONI Probe hukagua hali zilizo hapo juu wakati wa kupima tovuti kwa uzuiaji HTTP (na aina nyingine za udhibiti wa mtandao).

###  Vikusanya HTTPS

Vikusanya HTTPS ni seva inayokusanya data katika utaratibu wa HTTPS uliosimbwa.

OONI hutumia vikusanya HTTPS ili kukusanya vipimo vya mtandao kutoka kwa watumiaji wa OONI Probe duniani.

### Maelezo ya HTTP

Maelezo ya HTTP hutumika **kusambaza taarifa za data zihusuzo** maombi ya HTTP au majibu kwenye seva au kwa mtumiaji.

Maelezo ya HTTP yana viwango kwa ajili ya kusambaza taarifa zilizopo katika pakiti moja kama vile taarifa muhimu za maombi ya mtumiaji, ambayo inatumika kuijulisha seva aina gani ya kivinjari inatuma maombi.

Kila unapoujiunganisha na seva, mtumiaji anatuma maombi kupitia utaratibu wa HTTP katika seva husika. Maombi hayo huusisha maelezo ya HTTP, ambayo huomba aina fulani ya taarifa kulingana na aina tofauti za taarifa ("HTTP header fields"). Hii huusisha "maelezo ya msimamizi", ambayo huusisha taarifa za kikoa husika unachotaka kukifikia. Kwa mfano unajiunganisha katika `ooni.org`, 'msimamizi' maelezo ya ombi lako la HTTP inahusisha taarifa unazowasiliana ambazo unataka kuzifikia katika kikoa.

Katika upimaji wa tovuti zilizozuiliwa, [Kipimo cha upatikanaji wa tovuti](https://ooni.org/nettest/web-connectivity/) cha OONI Probe hulinganisha maelezo ya HTTP za tovuti zilizopimwa kutoka katika mtandao wa mtumiaji na mtandao usiokuwa na udhibiti (kama sehemu ya njia kubwa ya upimaji).

### Maombi ya HTTP

Kila wakati unapotembelea tovuti. Kivinjari chako (mtumiaji) hutuma maombi ("HTTP request") kupitia ( utaratibu wa HTTP wa seva ambayo inahifadhi tovuti hiyo. Kwa kawaida seva hurudisha majibu yakiwa na "majibu ya HTTP"ambayo huusisha maudhui ya tovuti isimamiwayo.

Baadhi ya matukio, (ISP) watoa huduma za mtandao huzuia watumiaji kufikia tovuti fulani kwa kuzuia au kudhibiti mawasiliano kati yao na seva. Huu ni mfumo wa kuzuia HTTP,
[unaopimwa](https://ooni.org/nettest/web-connectivity/) na
[Programu ya OONI](https://ooni.org/install/).

### Majibu ya HTTP

Kila unapotembelea tovuti, kivinjari chako (mtumiaji) hutuma maombi ("maombi ya HTTP") kupitia utaratibu wa HTTP kwenye seva inayosimamia tovuti.

Kwa kuzingatia maombi ya HTTP, seva itatuma majibu ya HTTP, ambayo inahusisha majibu ya maelezo ya HTTP pamoja na taarifa isiyo ya lazima, ambayo kwa upande wa tovuti itakuwa ni maudhui ya kurasa husika.

### Hali za Misimbo za HTTP

Hali za Misimbo za HTTP ni viwango vya hali ya misimbo (zitokanazo na Namba maalum zilizopewa viwango na mtandao au IANA) ambazo hutolewa na seva katika kuzingatia maombi ya mtumiaji. Kama zilivyopendekezwa na jina lake, misimbo hii huelezea hali ya majibu ya HTTP.

Hali za misimbo za HTTP zimegawanyika katika mtiririko maalum, kulingana na aina ya hali zinazoelezewa:

* **100-199**: hutumika kuwasilisha taarifa kwa mtumiaji

* **200-299**: hutumika kuonesha maombi yaliyofanikiwa

* **300-399**: hutumika kuelekeza maombi mahali pengine

* **400-499**: hutumika kuonyesha dosari zitokanazo na mtumiaji katika maombi

* **500-599**: hutumika kuonyesha dosari zilizopo katika upande seva

Hali za misimbo za HTTP zinajumuisha:

* Hali ya HTTP **200** (OK): inatumika kuonyesha kuwa maombi yalifanikiwa. Kwa ujumla hii hali ya msimbo mara nyingi huwa katika kurasa zilizofanikiwa kuleta majibu.

* Hali ya HTTP status **301** (Imehamishwa kabisa): Kama chanzo cha taarifa kinachotafutwa na mtumiaji kwa sasa kinapatikana katika chanzo kingine tofauti.

* Hali ya HTTP **302** (Kimepatikana): kama chanzo cha taarifa kinachotafutwa na mtumiaji kwa muda kinaweza kupatikana sehemu nyingine tofauti.

* Hali ya HTTP **400** (Ombi Baya): kama programu tumizi unayotumia (kama vile kivinjari) imeipata seva kimakosa (isiyo sahihi) au maombi hayakufanikiwa.

* Hali ya HTTP **401** (Isiyo Idhinishwa): Unapojaribu kupitia kurasa ya tovuti inayohitaji taarifa za kuidhinisha bila ya wewe kutoa taarifa yoyote.

* Hali ya HTTP **403** (Katazo): Unapojaribu kufungua sehemu ya tovuti isiyoruhusiwa na hauna taarifa sahihi za kupatiwa idhini ili kuifikia.

* Hali ya HTTP **404** (Haipo): Unapojaribu kutafuta chanzo katika seva (kawaida katika kurasa ya tovuti) ambayo haipo (kwa sababu, kwa mfano umekosea kuchapa jina la anuani)

* Hali ya HTTP **451**( Haipatikani kwa sababu za kisheria): Kama chanzo unachojaribu kutafuta kimezuiliwa na seva kutokana na sababu za kisheria. Hii ndio hali ya msimbo inayotumika kufanya udhibiti wa mtandao husika.

* Hali ya HTTP **500** (Dosari ya seva ya mtandao): Ujumbe uliokusudiwa wa ujumla unaotokea wakati seva ya mtandao inapokutana na aina fulani ya dosari za kimtandao.

Unapopima kuzuiliwa kwa tovuti, [kipimo cha upatikanaji wa tovuti](https://ooni.org/nettest/web-connectivity/) cha
OONI Probe hulinganisha hali ya msimbo wa HTTP za tovuti zilizopimwa kutoka kwenye mtandao wa mtumiaji na mtandao usiokuwa na udhibiti (kama sehemu ya njia ya upimaji mkubwa zaidi).

### Wakala wa kudhibiti HTTP

Wakala wa kudhibiti HTTP ni aina mfumo wa kuingilia utendaji wa utaratibu wa HTTP kwa kukaa kati ya mtumiaji na seva.

Mtumiaji anapotuma maombi katika seva (mfano kuifikia `facebook.com`), wakala wa kudhibiti, anadhibiti maombi kufanya vitu mbalimbali (kama vile kuhifadhi kwa ajili ya matumizi ya baadae, kuielekeza mahali pengine, na kuthibitisha).

Watoa huduma wengi wa mtandao (ISP) ulimwenguni, hutumia wakala wa kudhibiti HTTP kwa malengo kadhaa; kwa mfano, kuboresha utendaji kazi wa mtandao, au kuwezesha watumiaji kuzifikia tovuti kwa haraka.

Japo kwa wakati mwingine wakala wa kudhibiti HTTP pia hutumika kufanya udhibiti na/au ufuatiliaji wa mtandao.

[Programu Tumizi ya OONI Probe](https://ooni.org/install/) huusisha [vipimo](https://ooni.org/nettest/) viwili
vilivyotengenezwa kwa ajili ya kupima uwepo wa wakala wa kudhibiti HTTP.

### Ujumbe wa papo kwa papo

Teknolojia ya Ujumbe wa papo kwa papo (IM) ni aina ya mawasiliano ya mtandaoni ambayo hutoa ujumbe kwa muda halisi katika mtandao.

WhatsApp, Facebook Messenger, na Telegram ni mifano ya programu tumizi za IM, ambazo zote [hupimwa](https://ooni.org/nettest/) kwa udhibiti wa [Programu tumizi ya OONI Probe](https://ooni.org/install/).

### Mtandao

Mtandao ni muungano wa mtandao na mitandao ulimwenguni.

Vifaa kama vile kompyuta, huungana na kutengeneza mtandao. Kila mtandao umeunganishwa na mitandao mingine, ambayo. imeungana kwa kupitia vifaa vya umeme, visivyotumia waya na teknolojia za kimtandao zinazotumia saini za mwanga badala ya umeme.

Mitandao mingi iliyoungana kutoka katika mtandao.

### Upotevu wa mtandao

Upotevu wa mtandao (pia inafahamika kama "kuzima kwa mtandao") hutokea pale ambapo mtandao unazimwa kabisa nchi au eneo fulani. Eneo litakalo athirika na kuzimwa kwa mtandao hukosa mtandao kabisa.

Upotevu wa mtandao inaweza kuwa **imekusudiwa** (agizo la serikali) -- katika hali ambayo -- inahusisha udhibiti wa mtandao -- au inaweza kuwa imesababishwa **bila kukusudia** (hitirafu katika mitambo).

Kwakuwa [OONI Probe](https://ooni.org/install/) inahitaji
mtandao ili kupima upatikanaji wa mtandao kwa sasa ipo nje ya upeo.

[Vyanzo vya data vya umma](https://ooni.org/post/examining-internet-blackouts/) mbalimbali vipo kwa ajili ya kufuatilia upatikanaji kwa mtandao kama vile [IODA](https://ioda.caida.org/).

### Udhibiti wa mtandao

Udhibiti wa mtandao ni udhibiti *uliokusudiwa* au kuondoa uwezo wa upatikanaji wa mtandao na maudhui yake.

Watoa huduma za mtandao (ISPs) kwa kawaida hufanya udhibiti wa mtandao kwa kufuata maagizo ya serikali na/au kutokana na miongozo ya bunge. Hii inahuisha kuzuia upatikanaji wa tovuti husika na/au programu, kuzuia watumiaji katika mtandao husika kupata huduma fulani za mtandao.

Udhibiti wa mtandao hufanywa katika ngazi ya mtandao, unaweza
kutofautiana kati ya mtandao na mtandao, na katika nchi na nchi.

### Anwani ya IP

Ni anwani ya kipekee ya tarakimu inayotambulisha kifaa au huduma ya mtandao.

Anwani za IP hufanya kazi kuu 2:

1.  **Utambuzi**: Anwani ya IP hutofautisha mfumo kutoka katika mifumo mingine ya mtandao

2.  **Eneo**: Anwani ya IP huwa kama **anwani ya kidijitali** ya mfumo, inayowezesha mifumo mingine katika mtandao kuufikia.

Ili kuunganisha katika mtandao, kila kifaa hupewa anwani ya IP.

### ISP

Mtoa huduma za mtandao (ISP) ni taasisi ambayo hutoa huduma inayowezesha kufikia na kutumia mtandao.

Watoa huduma za mtandao (ISPs )wanaweza kuwa wamiliki wa nchi, wafanya bishara, mali ya umma, isiyo ingiza ya faida au ya kibinafsi.

Mfano wa Watoa Huduma za mtandao ISPs ni Vodafone, AT&T, Airtel, na MTN.

### Kipimo

Kipimo cha mtandao ni mchakato wa kupima sifa fulani ya mtandao.

Kwa muktadha wa OONI, kipimo ni matokeo ya **kipimo cha OONI Probe**.

Kila [kipimo cha OONI Probe](https://ooni.org/nettest/)
kimetengenezwa kupima aina tofauti za udhibiti wa mtandao. Inategemeana na kipimo, kila kipimo cha OONI huwa na majibu tofauti.

Huu ni mfano wa kipimo cha OONI:
<https://explorer.ooni.org/measurement/20191024T090549Z_AS42668_D8RVKYKWbqzaTopEcH3K6qy8yzOHVe1QgNeyzn686G1CbEveKU?input=http://kavkaznews.com/>

### Taarifa za Data

Metadata mara nyingi huelezewa kama "data zihusuzo data" na hutumiwa kutoa muktadha na maelezo ya data.

Mfano wa metadata kwa nyaraka inaweza kujumuisha mwandishi wake na tarehe ya kuchapishwa.

### Middlebox

Middlebox ni kifaa cha kimtandao wa kompyuta ambacho hubadilisha, hukagua, huchuja, au vinginevyo huwezesha usafirishaji wa data ulio bora kwa madhumuni, kuliko njia ya kwaida ya kusambaza taarifa.

Watoa huduma wengi wa mtandao (ISPs) ulimwenguni hutumia kifaa cha kati katika utendaji ili kuboresha utendaji kazi wa mtandao, kuwapa watumiaji ufikiwaji wa haraka wa mtandao, na na kwa madhumuni kadhaa ya mtandao.

Japokua mara nyingine kifaa cha kati hutumika kufanya udhibiti na/au ufuatiliaji wa mtandao.

[Programu ya OONI Probe](https://ooni.org/install/) huusisha [vipimo](https://ooni.org/nettest/) viwili viliyoundwa kutambua uwepo wa vifaa vya kati.

### Tovuti Kioo

Tovuti kioo ni nakala halisi ya tovuti nyingine. Tovuti hizi zina URLs tofauti lakini zina maudhui yanayo lingana au yanayokaribia kulingana.

Tovuti kioo mara hutengenezwa ili kukwepa udhibiti wa mtandao. Watoa huduma wa mtandao wanapozuia upatikanaji wa mtandao, huzuia upatikanaji wa URL. Kwa kubadilisha jina la kikoa, wamiliki hawa wa tovuti wanaweza kuwezesha umma kupata maudhui yaliyopo tovuti yao.

### Kipimo cha mtandao

Nettest ni kifupisho cha "kipimo cha mtandao".

katika muktadha wa OONI, nettest humaanisha vipimo vya mtandao vya OONI
Probe.

Maelezo ya kipimo cha mtandao cha OONI Probe yanapatikana hapa: [https://ooni.org/nettest/](https://ooni.org/nettest/)

### Mtandao

Vifaa, kama vile kompyuta, huungana na kuunda mtandao ili kubadilishana data.

Kila mtandao huungana na mitandao mingine, ambayo imeunganishwa kwa kila mmoja kupitia vifaa vya umeme, teknolojia za kimtandao zisizo tumia waya pamoja na vifaa vya mtandao vinavyotumia mwanga. mtandao huundwa na mitandao mingi iliyounganishwa.

### Mtandao kutokuwa kawaida

Mtandao kutokuwa kawaida ni tabia ya mtandao ambayo inapotoka kutoka kwenye kiwango cha kawaida au kilichotarajiwa.

Katika muktadha wa OONI, ukiukwaji wa mtandao unapima matokeo
yaliyopotoka kutoka kwa kile kinachotarajiwa kulingana na [njia za majaribio ya OONI Probe](http://www.ooni.org).

Matokeo ya vipimo vya OONI Probe, yaliyokusanywa kutoka kwenye mtandao ya mtumiaji, moja kwa moja hulinganishwa na matokeo ya majaribio yaliyokusanywa kutoka kwa mtandao ambao haujadhibitiwa. Kama matokeo hayalingani, ndipo matokeo ya kipimo cha OONI Probe hujulikana kama "hali isiyo ya kawaida" ambayo inaonyesha uwezekano wa udhibiti wa
mtandao.

### Uyumbaji wa mtandao

Uyumbaji wa mtandao ni neno linalotumika kuelezea aina mbalimbali za uyumbaji zinazotokea katika mitandao.

Katika muktadha wa OONI, neno uyumbaji wa mtandao kimsingi ni neno linalotumika kuelezea udhibiti wa mtandao na usafirishaji wa data ulio bora.

### Huduma zilizofichwa

[Huduma zilizofichwa](https://community.torproject.org/) ni huduma za mtandao ambazo zinaweza kupatikana kwenye [Tor network pekee](http://torproject.org), ili kuwapa watumiaji wao manufaa zaidi ya faragha na usalama.

Tovuti, kwa mfano, zinaweza kuwekwa katika eneo la mtandao usiojulikana kwa kutumia huduma zilizofichwa, ambazo zinawaruhusu kuficha anwani za IP zao na kutoa faragha zaidi kwa watembeleaji wa tovuti. Unaweza kutofautisha tovuti hizo kwa anwani ya huduma zilizofichwa kama vile, `https://facebookcorewwwi.onion/` au `http://www.nytimes3xbfgragh.onion/`.

Kwa miaka iliyopita, [toleo la OONI Probe kwa Linux na macOS](https://ooni.org/) lilitumia huduma zilizodhibitiwa kupakia vipimo kwa seva za OONI.

### OONI Taarifa

Kiarifu cha OONI ni huduma ambayo inawajibika kuwataarifu watumiaji wa
OONI Probe:

* Wapi wanatakiwa kuwasilisha matokeo yao

* Anwani zipi za wasaidizi wa kipimo cha mtandao zinaweza kupokea usaidizi katika kufanya vipimo

### Kikusanya OONI

Kikusanya OONI ni huduma ambayo inatumika kukusanya vipimo kutoka kwa wateja wa OONI probe duniani.

### OONI Explorer

[OONI Explorer](https://explorer.ooni.org/) ni tovuti ambayo inatoa eneo la kupeleleza, kutafuta na kupakua vipimo vyote vya mtandao vilivyokusanywa kupitia vipimo vya [OONI Probe](https://ooni.org/install/) kuanzia mwaka 2012 hadi leo.

### OONI Huduma kwa watumiaji

OONI huduma kwa watumiaji hufanya kazi za seva ambazo ni msaada kwa wateja wa OONI Probe katika kufanya vipimo. Kwa mfano, watumiaji wa OONI Probe wanaongea na msaidizi wa vipimo vya OONI na maudhui yapi ya tovuti yanatarajiwa ili kufanya udhibiti wa kulinganisha na kutambua kama tovuti imezuiliwa.

### OONI Probe

OONI Probe [ni programu huru na ya bure](https://github.com/ooni) ambayo imetengenezwa kupima udhibiti wa mtandao na aina nyingine za uyumbaji wa mtandao.

OONI Probe imetengenezwa na [Open Observatory of Network Interference](https://ooni.org/) tangu mwaka 2012 na inapatikana kwenye mfumo wa
[Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe),
[iOS](https://itunes.apple.com/us/app/id1199566366),
[Linux](https://github.com/ooni/probe-cli/releases),
[Windows](https://github.com/ooni/probe-desktop/releases) na
[macOS](https://github.com/ooni/probe-desktop/releases).

### OONI Run

[OONI Run](https://run.ooni.io/) ni programu za tovuti
zinazowezesha watumiaji wa programu ya OONI probe ili kutengeneza viungo (Mpango maalum wa URI) kwa vipimo vya OONI Probe.

Hii inakusudiwa kutumika kama **kifaa cha kuratibu kipimo cha udhibiti kwa watumiaji wa OONI** wa nchi husika.

[Anwani za OONI Run](https://ooni.org/post/ooni-run/)
zinaweza kutengenezwa kwa kuchagua kipimo husika cha OONI Probe, au kwa kuongeza URLs ya chaguo la mtumiaji. Lengo ni kusambaza anwani hizi za OONI zilizotengenezwa na watumiaji wengine wa prorgramu ya OONI Probe kupitia programu za simu za mkononi, ili waweze kufanya vipimo au kupima tovuti zao ambazo zilichaguliwa wakati anwani zinatengenezwa.

OONI Run pia hutengeneza misimbo ya programu ambayo inawezesha kitufe cha OONI katika tovuti.

### Utendaji

Utendaji wa mtandao ni kipimo kinacho tafsiri ubora wa uunganishwaji wa mtandao. Hii huweza kupimwa kwa njia mbalimbali (mfano. kasi, kiwango cha usafirishaji wa data, kasi ya kuchakata data, kiwango cha dosari).

### Utaratibu

Utaratibu ni mkusanyiko wa miongozo au kanuni kwa ajili ya kusambaza data kati ya vifaa vya vya umeme (kama vile kompyuta) katika mtandao. Miongozo hii hutambua namna taarifa itakavyoundwa na namna itakavyotumwa na kupokelewa kwenye mtandao.

Mtandao inajumuisha taratibu mbalimbali, utaratibu wa mtandao (IP) ambao hutumika kuelekeza pakiti za data kwenye kompyuta au seva husika.

### Wakala

Wakala ni seva ambayo hutumika kama kiunganishi ambacho inaweza kuelekeza baadhi au mawasiliano yako yote katika mtandao. Kwahiyo wakala inaweza hutumika kukwepa udhibiti wa mtandao.

### Raspberry Pi

Raspberry Pi ni jina kompyuta nyingi zilizopo katika sehemu moja iliyoanzishwa na [Raspberry Pi Foundation](https://www.raspberrypi.org/), shirika la misaada la Uingereza ambalo lililenga kuelimisha watu kompyuta na kurahisisha upatikanaji rahisi wa elimu ya kompyuta.

Awali OONI iliunda usambazaji wa OONI Probe kwa Raspberry Pis, iliitwa [Lepidoptera](https://ooni.org/install/lepidopter/).

### Seva

Seva ni kompyuta isiyozimwa na kuunganishwa na mtandao ili kutoa huduma za mtandao kwa kompyuta nyinginezo.

Huduma zote za mtandao (kama vile tovuti, programu tumizi na barua pepe) zinaendeshwa katika seva, ambazo zinajukumu la kupokea maombi kutoka kwenye kompyuta na kujibu maombi yote (kwa mfano, kwa kuruhusu upatikaknaji wa tovuti wanazozisimamia).

### TCP

Utaratibu wa udhibiti wa usafirishaji ni moja ya taratibu kuu kwenye mtandao.

Kuunganishwa katika tovuti, kompyuta yako inahitaji kuunganisha TCP kwenye anwani ya hiyo tovuti.

TCP inafanya kazi katika utaratibu wa mtandao (IP), ambayo inatafsiri jinsi ya kushughulikia kompyuta katika mtandao.

Unapowasiliana na mashine kwa utaratibu wa TCP unatumia IP na jozi ya
sakiti, ambayo inaonesha kitu kama:10.20.1.1:8080.

Tofauti kubwa kati ya TCP na (utaratibu mwingine maarufu inaitwa) UDP ni TCP ina dhana ya "kuungana", kufanya iwe itifaki ya usafirishaji ya "kuaminika".

### Kuzuiliwa kwa TCP/IP

Kuzuiliwa kwa TCP/IP ni njia ya kudhibiti mtandao ambayo hufanywa kwa kuzuia mtumiaji kuunganisha TCP katika huduma za mtandao.

Hili hufanikiwa kwa kuzuia upatikanaji au urekebishwaji wa IP
iliyokusudiwa (inamaanisha kuweka pakiti za TCP/RST) kuunganishwa katika jozi ya sakiti ya IP.

[OONI Probe](https://ooni.org/install/) hupima kuzuiliwa
kwa TCP/IP katika tovuti na programu tumizi.

### Vitu vya kupima

Vitu vya kupima (katika muktadha wa [OONI Probe](https://ooni.org/install/) ni rasilimali zote za mtandao (kama vile URL, kikoa au anuani ya IP) ambavyo hupimwa.

### Orodha ya Vipimo

[Orodha ya vipimo](https://github.com/citizenlab/test-lists/tree/master/lists) ni mashine- inayosomwa faili la CSV inayokuwa na URLs ambazo hupimwa kujua udhibiti kwa vifaa kama [OONI Probe](https://ooni.org/install/).

Miradi ya kupima udhibiti kama OONI inategemea jamii za kimataifa za kujitolea ambazo zinapima udhibiti kutoka sehemu halisi. Kwa upande wa vizuizi vya vipimo data, kupima tovuti mbalimbali zilizopo katika mtandao katika namna mbalimbali siyo rahisi. Badala yake vipimo vyetu vimelenga kwa sampuli za tovuti zilizopo katika "orodha ya vipimo":
mashine faili ya CSV lisomekalo lenye URLs za usahihi.

Kuna aina mbili za orodha ya vipimo:

* **Orodha ya kimataifa**: inahusisha tovuti mbalimbali toka mataifa mbalimbali (mfano, facebook.com) ambazo nyingi zipo katika lugha ya kingereza.

* **Orodha ya nchi husika**: inahusisha tovuti zilizopo katika nchi husika. (mfano, Tovuti za vyombo vya habari za Brazil) nyingi ambazo zipo katika lugha ya nchi husika.

Orodha ya vipimo [zinahifadhiwa](https://github.com/citizenlab/test-lists) na kusimamiwa na [Citizen Lab](http://www.citizenlab.ca).

### TLS

Transport Layer Security (TLS) -- pia hufaamika kama "SSL" -- ni utaratibu wa kriptografia ambao unakuruhusu kudumisha usalama, mawasiliano yaliyosimbwa kati ya kompyuta na huduma ya mtandao.

Unapojiunganisha katika tovuti kwa kutumia TLS, anuani ya tovuti itaanza na HTTPS (kama vile `https://facebook.com/`), badala ya HTTP.

### Tor

[Mtandao wa Tor](https://www.torproject.org/) ni mtandao
huru ambao unapatikana bila malipo, hutoa usuluhishi wa udhibiti wa mtandao, usiri na kutotambulika kwa watumiaji wake. Programu ya Tor imetengenezwa kuwa na uwezo wa kuruka mawasiliano katika mitandao yote iliyounganishwa kupokea na kusambaza mawasiliano duniani kote, kwa kuficha anuani za IP za watumiaji na kuweza kukwepa vikwazo vyote vya udhibiti wa mtandao.

### Upotoshaji wa usafirishaji wa taarifa

Upotoshaji wa usafirishaji wa taarifa (ni aina ya uyumbaji wa mtandao) ambao hufafanua ufikiaji usiofaa kwa muunganiko wa mtandao wenye uwezo wa kuunganisha mtiririko wa data.

Kifaa cha kati (kifaa cha mtandao wa kompyuta), kwa mfano, inaweza kutumika na mtoa huduma wa mtandao (ISP) kwa kukagua,
kubadilisha,kuchuja, au vinginevyo kudhibiti trafiki ya mtandao.

### URL

URL ni anwani ya ya ukurasa wa mtandao wa dunia nzima.

Kwa mfano, `https://twitter.com/` ni URL, wakati twitter.com ni kikoa.

### Sehemu maalum

Sehemu maalumu ya mtandao ni eneo la kipekee la mtandao ambalo vipimo vya mtandao hufanywa. Katika muktadha wa OONI Probe, tunachukulia sehemu kuu ya mtandao wa kipekee na nchi, kama vile sehemu maalum ya "Vodafone in Italy".

### VPN

Mtandao binafsi usio Bayana (VPN) ni programu iliyounda mawasiliano yaliyosimbwa (kawaida huitwa "njia ya kupenyeza ndani kwa ndani") kutoka kwenye kifaa chako hadi kwa seva (inayofanyakazi na mtoa huduma wa VPN).

Wakati unavinjari mtandao kupitia njia ya kupenyeza ndani kwa ndani, tovuti na huduma zingine za mtandaoni itapokea maombi kutoka kwa anwani ya IP kwa seva huyo, badala ya kutoka kwa anwani yako halisi ya IP.

Vilevile VPNs zinaweza kutumika kukwepa udhibiti wa mtandao.
