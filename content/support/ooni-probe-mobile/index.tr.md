---
title: "Kullanım rehberi: OONI Probe Mobile uygulaması"
description: "OONI Probe Mobile uygulaması kullanıcı rehberi"
---

**Son güncelleme:** 6 Eylül 2022

**OONI Probe Mobile sürümü:** 3.7.1

Bu belgenin çevirisi için Kaya Zeren'e teşekkür ederiz.

{{<img src="images/image49.png" title="Measure Internet Censorship" alt="Measure Internet Censorship">}}

OONI Probe, internet sansürünü ve diğer ağ engellemelerini ölçmek için kullanabileceğiniz [ücretsiz ve açık kaynaklı](https://github.com/ooni/probe) bir uygulamadır. Bu kullanıcı rehberinde, [OONI Probe Mobile uygulamasını](https://ooni.org/install/mobile) kurma, çalıştırma ve özelleştirme konusunda **adım adım yönergeler** bulunur.

**Bu rehber size ne sağlayacak:**

* OONI Probe Mobile uygulamasını şunlar için nasıl kullanacağınızı öğrenin:
  * Site engellemelerini sınayın
  * Anlık ileti uygulamalarının engellenip engellenmediğini anlayın
  * Sansürü aşma araçlarının engellenmesini sınayın
  * Ağınızın hızını ve başarımını ölçün
* OONI Probe sınamasını seçtiğiniz siteler için özelleştirin
* OONI Probe sınama sonuçlarına nasıl erişip paylaşacağınızı öğrenin
* OONI Probe uygulama ayarlarınızı yapılandırın

Bu rehberi okuduktan sonra, OONI Probe ile ilgili bilgi ve becerilerinizi başkalarıyla paylaşmakta kendinizi güçlü hissedeceğinizi umuyoruz!

Aşağıdaki içindekiler tablosu, rehberde gezinmeyi kolaylaştırır.

{{<table-of-contents>}}

## OONI Probe nedir

OONI Probe, internet sansürünü ve diğer ağ müdahalesi biçimlerini ölçmek için tasarlanmış [ücretsiz ve açık kaynaklı bir yazılımdır](https://github.com/ooni/probe). Bu yazılım 2012 yılından beri, [Tor Projesi](https://www.torproject.org/) altında doğmuş ve kar amacı gütmeyen [Open Observatory of Network Interference (OONI)](https://ooni.org/) tarafından geliştirilmektedir.

OONI Probe uygulaması ile ([Mobile](https://ooni.org/install/mobile) ve [Desktop](https://ooni.org/install/desktop) sürümleri vardır), mobil aygıtlar ve bilgisayarlarda şunları ölçen [ağ ölçümü sınamaları](https://ooni.org/nettest/) yapabilirsiniz:

* [Site](https://ooni.org/nettest/web-connectivity/) engellemeleri;
* Anlık ileti uygulamalarının engellemeleri ([WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/), [Signal](https://ooni.org/nettest/signal));
* Sansürü aşma araçlarının engellemeleri ([Tor](https://ooni.org/nettest/tor/), [Tor Snowflake](https://ooni.org/nettest/tor-snowflake/), [Psiphon](https://ooni.org/nettest/psiphon/));
* Ağınızda sansür ya da izleme ile ilgili olabilecek sistemlerin varlığının bulunması ([ara kutular](https://ooni.org/nettest/http-header-field-manipulation/));
* Ağınızın [hızı ve başarımı](https://ooni.org/nettest/ndt/) ile [video akışı başarımı](https://ooni.org/nettest/dash/).

OONI Probe uygulamasını çalıştırdığınızda, sınama sonuçlarınız neredeyse gerçek zamanlı ve otomatik olarak OONI sunucularına gönderilir, [işlenir](https://github.com/ooni/pipeline) ve [herkese açık olarak yayınlanır](https://ooni.org/data/) (sınama sonuçlarınızın yayınlanmasını kapatmadığınız sürece).

OONI tüm dünyadan topladığı [OONI Probe sınama sonuçlarını açık olarak yayınlar](https://ooni.org/data/):

* Dünya çapında **internet sansürünün görünürlüğünü** artırın;
* **İnternet sansürünün kanıtlarını** ve diğer ağ müdahalesi biçimlerini paylaşın;
* OONI sansür bulgularının **bağımsız olarak doğrulanmasını** sağlayın;
* **Yinelenebilir araştırmayı** destekleyin;
* Dünya çapındaki **araştırma, politika, hukuk ve savunuculuk çabalarını** destekleyin;
* Bilgi denetiminin **kamusal olarak tartışılmasını** destekleyin.

OONI ekibi, OONI Probe sınama sonuçlarını (daha yaygın olarak “ölçümleri”) herkesin erişebilmesi için internet üzerindeki [OONI Explorer](https://explorer.ooni.org/) sitesinde aranabilir olarak ve ölçüm kapsamına göre oluşturulmuş çizelgeler ile sunar.

[OONI Explorer](https://explorer.ooni.org/), 2012 yıılından beri 241 ülke ve bölgede 24.500 ağdan toplanan 850 milyondan fazla ağ ölçümünün kaydını tuttuğundan, büyük olasılıkla bugüne kadar bilnen **internet sansürüyle ilgili en büyük küresel açık veri kaynağıdır**.

OONI Probe çalıştırarak şunları yapabileceksiniz:

* İnternet servisi sağlayıcınızın (ISS) belirli sitelere ve uygulamalara erişimi engelleyip engellemediğini ve nasıl engellediğini öğrenebileceksiniz;
* Herkese açık olarak arşivlenecek ölçümlere katkıda bulunarak, küresel internet özgürlüğü topluluğunun internet sansürünü izlemesini, fark etmesini ve karşı koymasını sağlayabileceksiniz.

Bu rehber, internet sansürünü ölçen küresel bir topluluğa katılabilmeniz için [OONI Probe Mobile uygulamasını](https://ooni.org/install/mobile) kullanmakta size yol göstermeyi amaçlamaktadır.

### Sorumluluk reddi

OONI Probe, internet sansürünü ölçmek için tasarlandığından, çalıştırılması bazı ülkelerdeki bazı kişiler için [riskli](https://ooni.org/about/risks/) olabilir.

Dikkate alınması gereken bazı şeyler:

* **OONI Probe bir gizlilik sağlama aracı değildir.** İnternet etkinliğinizi izleyen herkes (devlet, İSS, işveren gibi) OONI Probe kullandığınızı görebilir (büyük olasılıkla çalıştırdığınız diğer tüm yazılımları görebilecekleri gibi).
* **OONI Probe bir araştırma aracıdır.** Bazı OONI Probe sınamaları açıkça internet sansürünü ortaya çıkarmak için tasarlanmıştır.
* **[Tehdit modeliniz](https://www.eff.org/keeper-your-site-alive/evaluating-your-threat-model).** Örneğin, yoğun bir şekilde izlenen yüksek profilli bir aktivist, OONI Probe uygulamasını çalıştırdığında daha fazla dikkat çekebilir.
* **OONI Probe çalıştırdığınız ülkenin yasa ve düzenlemeleri.** En iyisi yerel avukatlara danışmaktır.
* **Sınadığınız sitelerin türleri.** OONI Probe kullanarak yasal olarak yasaklanmış (bazı ülkelerde), kışkırtıcı veya sakıncalı [siteleri](https://ooni.org/support/faq/#what-websites-will-i-test-for-censorship-with-ooni-probe) sınayabilirsiniz.
* **Yürüttüğünüz OONI Probe sınaması türleri.** Tüm [OONI Probe sınamalarının](https://ooni.org/nettest/) olası risk ağırlığı aynı değildir. Örneğin, OONI Probe üzerinde, sitelerin veya uygulamaların engellenmesini ölçmek için tasarlanmış diğer sınamalara göre daha az politik veya tartışmalı olarak görülebilecek [NDT sınaması](https://ooni.org/nettest/ndt/) (bir ağın hızını ve başarımını ölçer) bulunur.
* **Ölçümlerinizi yayınlasanız da yayınlamasanız da.** Dünya çapında internet sansürünün şeffaflığını artırmak için OONI Probe kullanıcılarından toplanan OONI [ölçümleri açık olarak yayınlanır](https://ooni.org/data/). IP adresinizi veya sizi kişisel olarak tanımlayabilecek diğer bilgileri yayınlamamak için elimizden gelenin en iyisini yapıyoruz. [Veri ilkemizden](https://ooni.org/about/data-policy) ayrıntılı bilgi alabilirsiniz.

OONI Probe uygulamasını kullanmakla ilişkili olası riskler hakkında ayrıntılı bilgi almak için ilgili [belgelerimize](https://ooni.org/about/risks/) bakabilirsiniz.

## OONI Probe Mobile kurulumu

OONI Probe Mobile uygulamasının [Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe), [F-Droid](https://f-droid.org/repository/browse/?fdid=org.openobservatory.ooniprobe) ve [iOS](https://apps.apple.com/us/app/ooni-probe/id1199566366) sürümleri vardır.

OONI Probe Mobile uygulamasını şu adımları izleyerek kurabilirsiniz:

**1. adım** OONI Probe Mobile kurulum sayfasını ziyaret edin (OONI sitesinde): <https://ooni.org/install/mobile>

{{<img src="images/image49.png" title="Measure Internet Censorship" alt="Measure Internet Censorship">}}

**2. adım** İşletim sisteminize uygun (Android, iOS, F-Droid) uygulama mağazası düğmesine dokunun.

{{<img src="images/image49.png" title="Install mobile app links" alt="Install mobile app links">}}

**3. adım** OONI Probe Mobile uygulamasını kurun (uygulama mağazasından).

{{<img src="images/image102.jpg" title="Install mobile app" alt="Install mobile app">}}

**4. adım** OONI Probe Mobile uygulamanızı açın.

{{<img src="images/image8.jpg" title="Open OONI Probe mobile app" alt="Open OONI Probe mobile app">}}

### Hazırlık: Rıza onayı

OONI Probe Mobile uygulamanızı kurup açtığınıza göre, hazırlık sürecinin bir parçası olarak size OONI Probe hakkında bazı temel bilgiler sunulacak.

Ayrıca, OONI Probe çalıştırmakla ilişkili [olası riskler](https://ooni.org/about/risks/) hakkında da bilgi edineceksiniz. Bu olası riskleri anladığınızdan emin olmak için, uygulamalı olarak onayınızı almak üzere kısa bir test ekledik. OONI Probe kullanabilmek için Test sorularını doğru olarak yanıtlamanız gerekir.

Hazırlık sürecinin son adımında, OONI Probe çalıştırılırken varsayılan olarak toplanan veri türlerini paylaşırız (ayrıntılı bilgi almak için [veri ilkemize](https://ooni.org/about/data-policy) bakılabilir). OONI Probe uygulamasını iyileştirmemize yardımcı olması için çökme bildirimlerini paylaşmayı seçebilirsiniz.

Aşağıda, hazırlık süreci boyunca size yol göstereceğiz.

**1. adım** OONI Probe hakkında temel bilgileri okuduktan sonra **Anladım**' üzerine dokunun.

{{<img src="images/image5.jpg" title="Got it" alt="Got it">}}

**2. adım** Sonraki ekranda, OONI Probe uygulamasını çalıştırmakla ilgili olası risklerin özeti görüntülenir. Olası riskleri açıklayan [belgelerimizi](https://ooni.org/about/risks/) okumak için **Ayrıntılı bilgi alın** üzerine dokunun.

{{<img src="images/image26.jpg" title="Tap learn more" alt="Tap learn more">}}

**3. adım** OONI Probe uygulamasını çalıştırmayla ilgili olası riskleri öğrendikten sonra **Anladım** üzerine dokunun.

{{<img src="images/image96.jpg" title="I understand" alt="I understand">}}

**4. adım** Aşağıdaki sınav, önceki ekranda aldığınız bilgileri ölçer. İfadeyi anladığınızı göstermek için **Doğru** üzerine dokunun.

{{<img src="images/image115.jpg" title="Quiz step 1" alt="Quiz step 1">}}

**Doğru** olanın doğru yanıt olduğunu göreceksiniz. Yanlış üzerine dokunursanız, yanıtın neden yanlış olduğu ile ilgili bir açıklama görürsünüz.

{{<img src="images/image83.jpg" title="Correct quiz" alt="Correct quiz">}}

**5. adım** İfadeyi anladığınızı göstermek için **Doğru** üzerine dokunun (testin ikinci bölümünde).

{{<img src="images/image104.jpg" title="Quiz step 2" alt="Quiz step 2">}}

**Doğru** olanın doğru yanıt olduğunu göreceksiniz. Yanlış üzerine dokunursanız, yanıtın neden yanlış olduğu ile ilgili bir açıklama görürsünüz.

{{<img src="images/image83.jpg" title="Quiz correct" alt="Quiz correct">}}

**6. adım** Uygulamanın ölçümleri otomatik olarak toplamasını istiyorsanız **Çok iyi görünüyor** düğmesine dokunun.

{{<img src="images/image118.jpg" title="Automatic measurements" alt="Automatic measurements">}}

**7. adım** OONI Probe uygulamasını iyileştirmemize yardımcı olması için [çökme bildirimlerini](https://ooni.org/about/data-policy#data-we-collect) paylaşmak isterseniz **Evet** üzerine dokunun.

{{<img src="images/image119.jpg" title="Crash reports" alt="Crash reports">}}

**8. adım** Aşağıdaki ekranda, OONI tarafından varsayılan olarak toplanan ve yayınlanan veri türleri ile ilgili  bilgileri bulabilirsiniz (OONI Probe her çalıştırıldığında). Ekranda **[OONI Veri İlkesi](https://ooni.org/about/data-policy)** seçeneğine dokunarak ayrıntılı bilgi alabilirsiniz.

{{<img src="images/image24.jpg" title="Onboarding default settings" alt="Onboarding default settings">}}

**9. adım** **Tamam** üzerine dokunun.

Böylece hazırlık sürecini tamamladınız ve OONI Probe kullanmaya başlayabilirsiniz!

## OONI Probe Mobile çalıştırmak

Artık hazırlık sürecini tamamladığınıza göre, internet sansürünü ölçmek için OONI Probe uygulamasını çalıştırabilirsiniz!

OONI Probe Mobile uygulamasının **Panosu**, her birinde OONI Probe sınamaları bulunan 5 karttan oluşur:

* **Siteler kartı.** OONI [site engellemesini](https://ooni.org/support/faq/#what-websites-will-i-test-for-censorship-with-ooni-probe) ölçen [site bağlantısı sınaması](https://ooni.org/nettest/web-connectivity/).
* **Anlık ileti kartı.** [WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/) ve [Signal](https://ooni.org/nettest/signal) uygulamalarının engellenme sınamaları.
* **Sansürü aşma kartı.** OONI [Tor](https://ooni.org/nettest/tor/) ve [Psiphon](https://ooni.org/nettest/psiphon/) sansürü aşma araçlarını engelleme sınaması.
* **Başarım kartı.** [NDT hız sınaması](https://ooni.org/nettest/ndt/), [DASH video akışı başarımı sınaması](https://ooni.org/nettest/dash/) ve OONI [ara kutu](https://ooni.org/support/glossary/#middlebox) sınamaları ([HTTP üst bilgi alanı değiştirme](https://ooni.org/nettest/http-header-field-manipulation/) sınaması ve [HTTP geçersiz istek satırı](https://ooni.org/nettest/http-invalid-request-line/) sınaması).
* **Deneysel kart.** OONI ekibi tarafından geliştirilen çok sayıda yeni deneysel sınama. Bu sınamalar zamanla değişebilir. Bu sınamaların neler olduğunu [buradan](https://github.com/ooni/spec/tree/master/nettests) görebilirsiniz.

**1. adım.** İlk OONI Probe sınamalarınızı yapmak için **Çalıştır** üzerine dokunun.

{{<img src="images/image25.jpg" title="Dashboard main screen" alt="Dashboard main screen">}}

"Çalıştır" üzerine dokunduğunuzda OONI Probe **tüm sınamaları** (tüm kartlarda bulunan) başlatır!

{{<img src="images/image120.jpg" title="Launched tests" alt="Launched tests">}}

**Çalışanlar** üzerine dokunursanız, **süren sınamaların** olduğu tam boyda bir pencere açılır:

{{<img src="images/image121.jpg" title="Open ongoing tests" alt="Open ongoing tests">}}

{{<img src="images/image37.jpg" title="Running websites" alt="Running websites">}}

{{<img src="images/image58.jpg" title="Running IM" alt="Running IM">}}

{{<img src="images/image32.jpg" title="Running circumvention" alt="Running circumvention">}}

{{<img src="images/image12.jpg" title="Running performance" alt="Running performance">}}

OONI Probe tüm sınamaları birkaç dakika içinde tamamlamalıdır (gerçi bu, bağlı olduğunuz ağın başarımına bağlıdır ve bazı durumlarda daha uzun sürebilir). Ağınızın başarımı yeterince iyi değilse ve sınamalar çok uzun sürerse **Sınamayı durdur** düğmesine dokunarak **çalışan sınamayı durdurabilirsiniz**.

{{<img src="images/image122.jpg" title="Stop test" alt="Stop test">}}

Sınamalar sona erdiğinde, OONI Probe sınama sonuçlarını otomatik olarak [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerinde yayınlar.

Sınamanızı belirli bir sınama türü (kart) ile sınırlandırmak ister misiniz? Aşağıdaki bölümlerde, bunun nasıl yapılacağı ile ilgili yönergeleri bulabilirsiniz.

### Site engellemelerini ölçmek

Yalnızca sitelerin engellenmesini ölçmek istiyorsanız, bunu şu adımları izleyerek yapabilirsiniz:

**1. adım.** OONI Probe Mobile panosundaki **Siteler** kartına dokunun.

{{<img src="images/image51.jpg" title="Tap websites" alt="Tap websites">}}

**2. adım.** Siteler kartında **Çalıştır** üzerine dokunun.

{{<img src="images/image99.jpg" title="Websites card details" alt="Websites card details">}}

Şu anda sitelerin engellenmesini ölçen OONI [site bağlantısı sınamasını](https://ooni.org/nettest/web-connectivity/) çalıştırıyorsunuz.

{{<img src="images/image37.jpg" title="Running websites" alt="Running websites">}}

Sınamalar sona erdiğinde, OONI Probe sınama sonuçlarını otomatik olarak [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerinde yayınlar.

**Hangi siteler sınanacak?**

Varsayılan olarak, şu 2 listede bulunan siteler sınanır:

* **[Küresel sınama listesi](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)**. Uluslararası düzeydeki siteleri (facebook.com gibi) kapsar.
* **[Ülkeye özgü sınama listesi](https://github.com/citizenlab/test-lists/tree/master/lists)**. Yalnızca OONI Probe uygulamasını çalıştırdığınız ülkedeki siteleri kapsar.

OONI Probe uygulamasını hangi ülkeden çalıştırıyor olursanız olun, [küresel sınama listesi](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) siteleri *her zaman* ölçülür.

OONI Probe, OONI Probe uygulamasını çalıştırdığınız ülkeye göre sınama için hangi [ülkeye özgü listenin](https://github.com/citizenlab/test-lists/tree/master/lists) seçileceğini otomatik olarak belirler. Örneğin, Brezilya'da OONI Probe çalıştırırsanız, küresel sınama listesindeki ve Brezilya sınama listesindeki siteleri ölçersiniz. Almanya'ya gidip OONI Probe çalıştırırsanız, küresel ve Almanya sınama listelerindeki siteler ölçülür. Ancak henüz ülkeye özgü bir sınama listesi olmayan (oluşturulmamış) bir ülkede OONI Probe çalıştırıyorsanız, yalnızca küresel listedeki siteleri ölçebilirsiniz.

[Citizen Lab sınama listelerine](https://github.com/citizenlab/test-lists/tree/master/lists) (dünya çapındaki OONI Probe kullanıcıları tarafından sınanan varsayılan siteleri içerir) katkıda bulunmak isterseniz, ilgili [belgelerimize](https://ooni.org/get-involved/contribute-test-lists) bakabilir ya da [sınama listeleri düzenleyicimizi](https://test-lists.ooni.org/) kullanabilirsiniz.

**Not:** Mobil veri kotanızın tümünü tüketmekten kaçınmak için **OONI Probe, “Çalıştır” üzerine dokunduğunuzda (panodan ya da siteler kartından) yalnızca 90 saniye içinde sınanabilecek kadar çok site sınanır**. Bu siteler (90 saniye içinde sınanan), [küresel](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) ve (ilgili) [ülkeye özel](https://github.com/citizenlab/test-lists/tree/master/lists) sınama listelerinden rastgele olarak seçilir. “Çalıştır” üzerine her dokunduğunuzda, 90 saniye içinde farklı, rastgele seçilmiş siteleri (küresel ve ülkeye özgü sınama listelerinden) sınamış olacaksınız. Bu nedenle, “Çalıştır” üzerine ne kadar çok dokunursanız, o kadar çok siteyi sınamış olursunuz.

Daha geniş bir site seçimini sınamak ya da tümüyle farklı siteleri sınamak istiyorsanız, bu rehberin **Site testini özelleştirme** bölümüne bakabilirsiniz.

### Anlık ileti uygulamalarının engellenip engellenmediğini ölçmek

Yalnızca anlık ileti uygulamalarının engellenmesini ölçmek istiyorsanız, bunu şu adımları izleyerek yapabilirsiniz:

**1. adım.** OONI Probe Mobile panosundaki **Anlık ileti** kartına dokunun.

{{<img src="images/image85.jpg" title="Tap IM card" alt="Tap IM card">}}

**2. adım.** Anlık ileti kartında **Çalıştır** üzerine dokunun.

{{<img src="images/image40.jpg" title="IM Card details" alt="IM Card details">}}

OONI [WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/) ve [Signal](https://ooni.org/nettest/signal) sınamaları ile bu uygulamaların engellenip engellenmediğine bakıyorsunuz.

{{<img src="images/image58.jpg" title="Running IM" alt="Running IM">}}

Sınamalar sona erdiğinde, OONI Probe sınama sonuçlarını otomatik olarak [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerinde yayınlar.

Sınamanızı yalnızca WhatsApp, Facebook Messenger, Telegram ya da Signal ile sınırlandırmak istiyorsanız, bu rehberin **OONI Probe ayarlarınızı yapılandırma** bölümüne bakabilirsiniz.

### Sansürü aşma araçlarının engellenmesini ölçmek

Yalnızca sansürü aşma araçlarının engellenmesini ölçmek istiyorsanız, bunu şu adımları izleyerek yapabilirsiniz:

**1. adım.** OONI Probe Mobile panosundaki **Sansürü aşma** kartına dokunun.

{{<img src="images/image3.jpg" title="Tap circumvention" alt="Tap circumvention">}}

**2. adım.** Sansürü aşma kartında **Çalıştır** üzerine dokunun.

{{<img src="images/image90.jpg" title="Circumvention card details" alt="Circumvention card details">}}

OONI [Tor](https://ooni.org/nettest/tor/) ve [Psiphon](https://ooni.org/nettest/psiphon/) sınamaları ile bu araçların engellenip engellenmediğine bakıyorsunuz.

{{<img src="images/image32.jpg" title="Running circumvention" alt="Running circumvention">}}

Sınamalar sona erdiğinde, OONI Probe sınama sonuçlarını otomatik olarak [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerinde yayınlar.

Sınamanızı yalnızca Tor ya da Psiphon ile sınırlandırmak istiyorsanız, bu rehberin **OONI Probe ayarlarınızı yapılandırma** bölümüne bakabilirsiniz.

### Ağ başarımını ölçmek

Yalnızca ağ başarımını ölçmek istiyorsanız, bunu şu adımları izleyerek yapabilirsiniz:

**1. adım.** OONI Probe Mobile panosundaki **Başarım** kartına dokunun.

{{<img src="images/image65.jpg" title="Tap performance" alt="Tap performance">}}

**2. adım.** Başarım kartında **Çalıştır** üzerine dokunun.

{{<img src="images/image27.jpg" title="Performance card details" alt="Performance card details">}}

[NDT hız sınaması](https://ooni.org/nettest/ndt/), [DASH video akışı başarımı sınaması](https://ooni.org/nettest/dash/) ve OONI [ara kutu](https://ooni.org/support/glossary/#middlebox) sınamalarını ([HTTP üst bilgi alanı değiştirme](https://ooni.org/nettest/http-header-field-manipulation/) sınaması ve [HTTP geçersiz istek satırı](https://ooni.org/nettest/http-invalid-request-line/) sınaması) çalıştırıyorsunuz.

{{<img src="images/image12.jpg" title="Running performance" alt="Running performance">}}

Sınamalar sona erdiğinde, OONI Probe sınama sonuçları otomatik olarak [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerinde yayınlanır.

**Sorumluluk Reddi:** [NDT](https://ooni.org/nettest/ndt/) ve [DASH](https://ooni.org/nettest/dash/) sınamaları, [Measurement Lab (M-Lab)](https://www.measurementlab.net/) tarafından sağlanan üçüncü taraf sunucular kullanılarak yapılır. Bu sınamaları yaparsanız, M-Lab, OONI Probe ayarlarınızdan bağımsız olarak IP adresinizi araştırma amacıyla kaydeder ve yayınlar. [Gizlilik bildirimi](https://www.measurementlab.net/privacy/) aracılığıyla M-Lab veri yönetişimi hakkında ayrıntılı bilgi alın.

Sınamanızı Başarım kartındaki bir ya da birkaç sınama ile sınırlandırmak istiyorsanız, bu rehberin **OONI Probe ayarlarınızı yapılandırma** bölümüne bakabilirsiniz.


## Site sınamanızı özelleştirmek

Varsayılan olarak, OONI Probe ile siteleri sınarken, [Citizen Lab sınama listelerinde](https://github.com/citizenlab/test-lists/tree/master/lists) bulunan adreslere bakarsınız. Başka bir deyişle, “Çalıştır” üzerine (OONI Probe uygulamasının panosundan ya da siteler kartından) dokunursanız, [Citizen Lab sınama listelerinden](https://github.com/citizenlab/test-lists/tree/master/lists) alınan rastgele seçilmiş siteleri sınamış olursunuz. Bu listeler, ülke içindeki araştırmacılar ve uzmanlarla işbirliği yapılarak oluşturulmuştur. [GitHub üzerinde herkese açık olarak bulunabileceklerinden](https://github.com/citizenlab/test-lists/tree/master/lists), isteyen herkes bunları inceleyebilir, adreslere [katkıda bulunabilir](https://ooni.org/get -involved/contribute-test-lists) ve belirli adreslerin kaldırılmasını önerebilir. Ayrıca, dünya çapında çoğu OONI Probe kullanıcısı tarafından düzenli olarak sınanan siteleri içerdiklerinden, bu listeleri [incelemeyi ve güncellemeyi](https://ooni.org/get-involved/contribute-test-lists) sürdürmemiz önemlidir.

Ancak sınamanızı seçtiğiniz sitelerle sınırlamayı yeğlerseniz, bunu OONI Probe Mobile uygulaması üzerinden yapabilirsiniz.

Site sınamanızı şu yollarla özelleştirebilirsiniz:

* Sınamanızı **belirli site kategorileriyle** sınırlayın (haber medyası ve insan hakları içerikleri gibi);
* Yalnızca **ilgilendiğiniz siteleri** sınayın;
* **Kendi listenizi** sınayın;
* [Citizen Lab sınama listesi](https://github.com/citizenlab/test-lists/tree/master/lists) içindeki *tüm* adresleri ([ilgili](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)) sınayın (90 saniye süreyle rastgele seçilen siteleri sınamak yerine);

Aşağıdaki bölümlerde, bunları nasıl yapabileceğiniz açıklanmaktadır.

### Belirli site kategorilerini sınamak

OONI Probe uygulamasında “Çalıştır” üzerine dokunduğunuzda, [küresel](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) ve ([ilgili](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)) [ülkeye özel Citizen Lab sınama listeleri](https://github.com/citizenlab/test-lists/tree/master/lists) içindeki siteler sınanır.

Bu siteler [30 standartlaştırılmış kategoriye](https://ooni.org/get-involved/contribute-test-lists/#what-are-test-lists) göre ayrılmıştır. Bu kategoriler, haber medyası, kültür ve insan hakları sorunlarından pornografi gibi daha kışkırtıcı veya sakıncalı kategorilere kadar uzanır (ikincisi, internet servisi sağlayıcıları tarafından benimsenen sansür tekniklerinin fark edilmesini sağlayarak engellenme olasılığı daha yüksek olduğundan katılmıştır).

OONI Probe Mobile uygulamasında varsayılan olarak, daha çeşitli sitelerin sınanmasını teşvik etmek ve daha fazla site sansürünü keşfetme olasılığı artırmak için 30 kategorinin tümü açılmıştır.

Ancak, 30 site kategorisinin tümünü sınamak konusunda kendinizi rahat hissetmiyorsanız (özellikle ülkenizde yasa dışı, kışkırtıcı veya sakıncalı içerik bulunuyorsa) veya yalnızca belirli içerik türlerini (haber medyası gibi) sınamakla ilgileniyorsanız, OONI Probe sınamasını seçtiğiniz site kategorileriyle sınırlayabilirsiniz.

**1. adım.** OONI Probe Mobile alt çubuğundaki **Ayarlar** üzerine tıklayın.

{{<img src="images/image63.jpg" title="App settings" alt="App settings">}}

**2. adım.** Ayarlarda **Sınama seçenekleri** üzerine dokunun.

{{<img src="images/image2.jpg" title="Tap test options" alt="Tap test options">}}

**3. adım.** **Siteler** üzerine dokunun (“Sınama seçenekleri” ayarında).

{{<img src="images/image61.jpg" title="Tap websites" alt="Tap websites">}}

**4. adım.** **Sınanacak site kategorileri** üzerine dokunun (“Sınama seçenekleri” ayarının “Siteler” bölümünde).

{{<img src="images/image98.jpg" title="Tap website categories" alt="Tap website categories">}}

Böylece OONI Probe tarafından varsayılan olarak sınanan [30 site kategorisini](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) görebilirsiniz. Bu kategorilerin tümü açılmıştır.

{{<img src="images/image78.jpg" title="Website categories" alt="Website categories">}}

**5. adım.** Sınamak **istemediğiniz** site kategorilerini **kapatın**.

{{<img src="images/image75.jpg" title="Disable options" alt="Disable options">}}

Yukarıdaki örnekte 5 kategoriyi kapattık ("LGBTQI", "Siyasi Eleştiri", "Pornografi", “Tahrik Edici Kıyafet”, "Din").

Geri döndüğünüzde, artık yalnızca 25 kategorinin açık olduğunu görebilirsiniz (5 tanesi kapatıldığı için).

{{<img src="images/image48.jpg" title="Categories enabled" alt="Categories enabled">}}

İstediğiniz zaman bu ayarı değiştirerek, seçtiğiniz site kategorilerini açabilir ya da kapatabilirsiniz.

### Seçtiğiniz siteleri sınamak

Doğrudan ilgilendiğiniz sitelerin sınamasını şu adımları izleyerek yapabilirsiniz:

**1. adım.** OONI Probe Mobile uygulamasındaki **Siteler** kartına dokunun.

{{<img src="images/image51.jpg" title="Tap websites card" alt="Tap websites card">}}

**2. adım.** Siteler kartındaki **Siteleri seçin** düğmesine dokunun.

{{<img src="images/image116.jpg" title="Choose websites" alt="Choose websites">}}

Sınamak istediğiniz siteleri ekleyebileceğiniz bir ekran göreceksiniz.

{{<img src="images/image86.jpg" title="Choose websites empty" alt="Choose websites empty">}}

**3. adım.** Sınamak istediğiniz sitenin **adresini** yazın. Örnekte `https://www.facebook.com` yazdık.

{{<img src="images/image73.jpg" title="Choose websites facebook.com" alt="Choose websites facebook.com">}}

**Önemli:** Lütfen [adresin](https://ooni.org/support/glossary/#url) doğru yazıldığından emin olun. Yanlış yazılırsa, OONI Probe amaçlanan siteyi *sınamaz* ve bu durum yanlış sınama sonuçlarına yol açabilir.

Akılda tutulması gereken şeyler:

* Site **HTTP** ya da **HTTPS** ile mi sunuluyor? İkincisi ise, lütfen "http" sonuna bir "s" ekleyin.
* [Etki alanında](https://ooni.org/support/glossary/#domain-name) 'www' var mı? Varsa lütfen başa ekleyin.

[Adresin](https://ooni.org/support/glossary/#url) doğru yazıldığından emin olmak için **lütfen adrese normal bir tarayıcıdan erişildiğinde nasıl göründüğüne bakın**.

**4. adım.** Sınanacak başka bir site eklemek için yeni bir satır oluşturmak üzere artı işaretine dokunun.

**5. adım.** Sınamak istediğiniz **başka bir adresi yazın**. Örnekte `https://twitter.com` adresini ekledik.

{{<img src="images/image54.jpg" title="Add website" alt="Add website">}}

Fikrinizi değiştirirseniz ve eklediğiniz adreslerden herhangi birini kaldırmak isterseniz, bunu her adresin yanındaki kırmızı simgeye dokunarak yapabilirsiniz.

İstediğiniz kadar adres eklemeyi sürdürebilirsiniz. Örnekte `https://www.gutenberg.org` adresini ekledik.

{{<img src="images/image9.jpg" title="add url twitter.com" alt="add url twitter.com">}}

**6. adım.** Eklediğiniz tüm siteleri sınamak için **Çalıştır** üzerine dokunun.

Seçtiğiniz sitelerin OONI Probe tarafından sınandığını göreceksiniz!

{{<img src="images/image72.jpg" title="Testing custom sites" alt="Testing custom sites">}}

Sınamalar sona erdiğinde, OONI Probe sınama sonuçlarını otomatik olarak [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerinde yayınlar.

### Özel site listesini sınamak

Adresleri tek tek el ile eklemek (OONI Probe mobil uygulamasının “Siteleri seçin” düğmesi ile), özellikle de on taneden fazla adres varsa can sıkıcı olabilir. Araştırmacılar genellikle yüzlerce adres bulunabilen kendi site listelerini sınamakla ilgilenirler.

Kendi site listenizin sınamasını şu adımları izleyerek yapabilirsiniz: 

**1. adım.** Site listenizi, bir metin düzenleyici kullanarak her satırda bir adres olacak şekilde hazırlayın. Aşağıda bir örnek paylaştık.

{{<img src="images/image69.png" title="Text editor custom URLs" alt="Text editor custom URLs">}}

**Önemli:** Lütfen her bir [adresin](https://ooni.org/support/glossary/#url) doğru yazıldığından emin olun. Yanlış yazılırsa, OONI Probe istenilen siteyi *sınamaz* ve bu durum sınama sonuçlarının yanlış olmasına yol açar.

Akılda tutulması gereken şeyler:

* Site **HTTP** ya da **HTTPS** ile mi sunuluyor? İkincisi ise, lütfen "http" sonuna bir "s" ekleyin.
* [Etki alanında](https://ooni.org/support/glossary/#domain-name) 'www' var mı? Varsa lütfen başa ekleyin.
* Site HTTPS kullanıyorsa ("https://www.hrw.org/" gibi), büyük olasılıkla bir site sayfası ("https://www.hrw.org/publications" gibi) belirtmeniz gerekmez. Çünkü internet servisi sağlayıcıları HTTPS ile erişildiğinde genellikle erişimi belirli bir site sayfasıyla engelleyemez. Bunun yerine, tüm siteye erişimi engellemek zorunda kalırlar.

Her [adresin](https://ooni.org/support/glossary/#url) doğru yazıldığından emin olmak için **lütfen adresi kopyalayıp bir tarayıcıya yapıştırıp siteyi açarak kontrol edin.**

**2. adım.** Adres listenizi **kopyalayın** (metin düzenleyiciden).

**3. adım.** **OONI Run** sitesine gidin: https://run.ooni.org/

{{<img src="images/image-ooni-run.png" title="OONI Run landing page" alt="OONI Run landing page">}}

**4. adım.** **OONI Run sayfasının ilk adres alanından** "http://" seçin (ilk adresinizin biçimlendirmesinde çift "http" olmasını önlemek için).

{{<img src="images/image50.png" title="Select URL OONI Run" alt="Select URL OONI Run">}}

**5. adım.** Adres listenizi OONI Run sayfasının ilk adres alanına **yapıştırın**.

Her adresin [OONI Run](https://run.ooni.org/) sayfasındaki farklı bir adres satırına yazıldığını görmelisiniz.

{{<img src="images/image77.png" title="OONI Run custom list" alt="OONI Run custom list">}}

Herhangi bir boş satır (ya da başka şekilde hatalı biçimlendirilmiş adresler) fark ederseniz, lütfen **silme simgesi** üzerine tıklayarak bunları silin.

{{<img src="images/image67.png" title="Empty rows" alt="Empty rows">}}

**6. adım.** Listenizin sonundaki **Oluştur** düğmesine tıklayın.

{{<img src="images/image13.png" title="Click generate" alt="Click generate">}}

Şu açılan pencereyi göreceksiniz.

{{<img src="images/image55.png" title="OONI Run popup window" alt="OONI Run popup window">}}

Böylece site listenizin sınanması için bir **OONI Run Mobile derin bağlantısı** oluşturdunuz.

**7. adım.** Oluşturulan bağlantıyı şu yöntemlerden biriyle **kopyalayın**:

* “**Bu adresi arkadaşlarınızla paylaşın**” altındaki bağlantıya tıklayın, tüm bağlantıyı seçmek için Control+A tuşlarına basın ve ardından kopyalamak için Control + C tuşlarına basın ya da
* **Bağlantı düğmesine** sağ tıklayın ve “Bağlantı adresini kopyala” üzerine tıklayın.

{{<img src="images/image30.png" title="Copy OONI Run link" alt="Copy OONI Run link">}}

**8. adım.** Tüm bu adımları büyük olasılıkla masaüstünüzde yaptığınız için, **kopyalanan bağlantıyı** **cep telefonunuzla paylaşın** (böylece bağlantıyı daha sonra cep telefonunuzda OONI Probe uygulaması ile açabilirsiniz). Başkalarının da sizin site listenizi sınamasını istiyorsanız, bu bağlantıyı diğer OONI Probe kullanıcılarıyla da paylaşabilirsiniz.

**9. adım.** Mobil aygıtınızda OONI Run bağlantısına **dokunun**.

{{<img src="images/image100.jpg" title="OONI Run link" alt="OONI Run link">}}

**10. adım.** Bağlantıyı **OONI Probe Mobile uygulamasında** **açın** (tarayıcıda değil).

{{<img src="images/image113.jpg" title="Open with OONI Probe" alt="Open with OONI Probe">}}

Artık OONI Probe Mobile uygulamasında sitelerin listesini görmelisiniz.

{{<img src="images/image56.jpg" title="OONI Run page mobile" alt="OONI Run page mobile">}}

**11. adım.** Site listenizi sınamak için **Çalıştır** üzerine dokunun.

{{<img src="images/image31.jpg" title="Running OONI Run" alt="Running OONI Run">}}

Sınamalar sona erdiğinde, OONI Probe sınama sonuçlarını otomatik olarak [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerinde yayınlar.

### Citizen Lab sınama listelerindeki tüm siteleri sınamak

Bant genişliği kısıtlamaları nedeniyle, OONI Probe Mobile uygulaması yalnızca 90 saniye içinde bağlanabileceği kadar çok siteyi sınar (varsayılan ayarlara göre).

Wi-Fi ile bağlıysanız ve ([ilgili](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)) [Citizen Lab sınama listeleri](https://github.com/citizenlab/test-lists/tree/master/lists) içindeki tüm siteleri tek seferde sınamak istiyorsanız, bunu şu adımları izleyerek yapabilirsiniz:

**1. adım.** OONI Probe Mobile alt çubuğundaki **Ayarlar** üzerine tıklayın.

{{<img src="images/image63.jpg" title="Settings page" alt="Settings page">}}

**2. adım.** Ayarlar içinde **Sınama seçenekleri** üzerine dokunun.

{{<img src="images/image2.jpg" title="Test options" alt="Test options">}}

**3. adım.** **Siteler** üzerine dokunun (“Sınama seçenekleri” ayarında).

{{<img src="images/image61.jpg" title="Websites option" alt="Websites option">}}

Şimdi OONI Probe site ayarlarını görüyorsunuz.

{{<img src="images/image68.jpg" title="OONI Probe website settings" alt="OONI Probe website settings">}}

**4. adım.** **Sınama süresi sınırlansın** seçeneğini kapatın (“Sınama seçenekleri” ayarının “Siteler” bölümünde).

{{<img src="images/image81.jpg" title="Disable limit test duration" alt="Disable limit test duration">}}

Böylece site sınamasında artık bir zaman sınırı uygulanmaz. Böylece “Çalıştır” üzerine her dokunduğunuzda OONI Probe uygulaması [ilgili Citizen Lab sınama listelerinde](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe) bulunan tüm siteleri sınayabilir.

**Alternatif olarak**: Daha uzun bir süre içinde daha fazla siteyi sınamak isterseniz (ancak zaman sınırını kapatıp tüm siteleri sınamadan), bunu şu adımları izleyerek yapabilirsiniz:

**1. adım.** **Sınama süresi** üzerine dokunun (“Sınama seçenekleri” ayarının “Siteler” bölümünde).

{{<img src="images/image1.jpg" title="Test duration setting" alt="Test duration setting">}}

Varsayılan olarak, site sınama süresi **90 saniye** olarak ayarlanmıştır. Böylece, OONI Probe yalnızca 90 saniye içinde bağlanabileceği sayıda siteyi ([ilgili Citizen Lab test listelerinden](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)) sınayabilir.

**2. adım.** Sınama süresini değiştirmek için, OONI Probe tarafından sitelerin sınanacağı **saniye sayısını yazın**. Aşağıdaki örnekte, OONI Probe sitelerinin 6 dakika boyunca sınanması için `360` yazdık.

{{<img src="images/image53.jpg" title="Test duration custom seconds" alt="Test duration custom seconds">}}

## OONI Probe sınama sonuçlarına erişmek

Bir OONI Probe sınaması yaptığınız anda, sınama sonuçlarına doğrudan OONI Probe Mobile uygulamanızdan anında erişebilirsiniz.

**1. adım.** OONI Probe Mobile alt çubuğundaki **Sınama sonuçları** üzerine tıklayın.

{{<img src="images/new-test-results.jpg" title="Test results page" alt="Test results page">}}

Tüm OONI Probe sınama sonuçlarınızın özeti görüntülenir.

Bu özette, sınama sonuçları uygulamadaki 4 tematik karta göre gruplanır (“Siteler”, “Anlık ileti”, “Sansürü aşma”, “Başarım”).

Her tematik sınama sonuç kartında şunlarla ilgili bir özet görebilirsiniz:

* Her sınamanın çalıştırıldığı **ağ** (`AS16010` - Magticom Ltd. gibi);
* Sınamanın **tarihi ve saati** (22 Ağustos 2022, yerel saatle 12:01 gibi);
* **İlgili bulguların özeti** (3 anlık ileti uygulaması erişilebilir bulundu, hiçbiri engellenmemiş gibi).

Bu özet, ağlar arasında sonuçların karşılaştırılmasına yardımcı olabilir (birçok farklı ağ üzerinde sınamalar yapıyorsanız) ve bulgulara yukarıdan bakmayı sağlar.

Daha derine inmek (ve ilgili ölçüm verilerine erişmek) için, aşağıdaki bölümlerde açıkladığımız her bir sınama sonucuna dokunmanız gerekir.

**Sınama sonuçlarını silmek**

Üst menüde (sınama sonuçları ekranında), aşağıdakilerin özetini paylaşırız:

* Şu ana kadar çalıştırdığınız **OONI Probe sınaması sayısı**;
* Şu ana kadar üzerinde OONI Probe çalıştırdığınız **ağ sayısı**;
* OONI Probe **veri kullanımı**.

{{<img src="images/image34.jpg" title="Test results hero" alt="Test results hero">}}

**1. adım.** OONI Probe sınama sonuçlarınızı silmek isterseniz (örneğin, depolama alanından kazanmak için), sağ üst köşedeki **silme simgesine** dokunun.

Sınama sonuçlarınız kaybolacak diye endişelenmeyin. OONI Probe sınaması yaptığınız anda sonuçlarınız otomatik olarak [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerinde neredeyse gerçek zamanlı olarak yayınlanır. Sınama sonuçlarınızın yayınlanmasını engellemek isterseniz, lütfen bu rehberin “OONI Probe ayarlarınızı yapılandırmak: Gizlilik” bölümüne bakın.

Silme simgesine dokunduğunuzda, şu açılır pencereyi göreceksiniz:

{{<img src="images/image15.jpg" title="Delete all tests" alt="Delete all tests">}}

**2. adım.** Tüm OONI Probe sınama sonuçlarınızı silmek istiyorsanız **Sil** üzerine dokunun. İstemiyorsanız **İptal** üzerine dokunun.

**Sınama sonuçlarını süzmek**

Sonuçlar, OONI Probe Mobile uygulamanızın sınama sonuçları ekranında, en son çalıştırılan sınamalar en başta olacak şekilde zamana göre görüntülenir.

{{<img src="images/new-test-results.jpg" title="Test results page" alt="Test results page">}}

**1. adım.** Sonuçlarınızı belirli bir sınama kategorisine (“Siteler”, “Anlık ileti”, “Sansürü aşma”, “Başarım”) göre süzmek isterseniz, **Tüm sınamalar** üzerine (ya da “Sınamaları süz” veya o satırdaki ok üzerine) dokunun.

{{<img src="images/image93.jpg" title="Test results filtering" alt="Test results filtering">}}

Böylece tüm tematik sınama kategorilerinin bulunduğu bir açılır menüyle karşılaşacaksınız.

**2. adım.** Sonuçları süzmek istediğiniz kategoriye dokunun. Aşağıdaki örnekte, “Siteler” üzerine dokunduk.

{{<img src="images/image41.jpg" title="Filtering websites" alt="Filtering websites">}}

{{<img src="images/image126.jpg" title="Filtered websites" alt="Filtered websites">}}

Böylece sonuçları “Siteler” kategorisine göre süzerek site sınama sonuçlarının özetini elde ettiniz. Yukarıdaki örnekte, Magticom Ltd. üzerinde sınanan 3 siteden (2 Ağustos 2022 yerel saatle 12:01 zamanında) bu sitelerden 0 tanesinin engelleme belirtileri gösterdiğini görebiliriz.

Sınama sonuçları ekranı, sonuçlarla ilgili özeti sağlarken, aşağıdaki bölümlerde açıklandığı gibi daha derine inebilir ve her bir sınamayla ilgili verilere erişebilirsiniz.

### Siteler

Site sınamalarından elde edilen OONI Probe sonuçlarınıza şu adımları izleyerek erişebilirsiniz:

**1. adım.** OONI Probe Mobile sınama sonuçları ekranında **Siteler** üzerine dokunun.

{{<img src="images/image41.jpg" title="Websites tests filtered" alt="Websites tests filtered">}}

Şimdiye kadar sınadığınız tüm sitelerin listesini göreceksiniz.

Üst başlıkta, sitenizin sınama sonuçlarının özetini göreceksiniz. Sınanan her adresin yanında yeşil bir onay simgesi (sitenin erişilebilirliğini gösteren) ya da turuncu bir ünlem simgesi (olası site engellemesini gösteren) bulunur.

**2. adım.** **Sınanmış bir site satırına** dokunun (bu site sınamasında elde edilen verilere erişmek için).

{{<img src="images/image127.jpg" title="Tested website" alt="Tested website">}}

{{<img src="images/image101.jpg" title="Websites results" alt="Websites results">}}

Böylece belirli bir site sınamasının verilerine erişebilirsiniz. İzleyen ölçüm sayfası, `https://telegram.org/` sınamasıyla ilgilidir.

{{<img src="images/image47.jpg" title="Telegram’s access accessible" alt="Telegram’s access accessible">}}

Bu ölçüm sayfasında size sınama sonucunun genel bir özeti sunulur. Bu durumda, 2 Ağustos 2022 tarihinde yerel saatle 11:10 zamanında Magticom Ltd. (AS16010) üzerinde sınanmış `https://telegram.org/` adresinin erişilebilir olduğunu görebiliriz.

Bir site için (olası) engelleme algılanırsa, site sınama sonuçlarında aşağıdaki gibi turuncu bir ünlem simgesiyle gösterilir.

{{<img src="images/image105.jpg" title="1tv inaccessible" alt="1tv inaccessible">}}

Sınanan sitenin bulunduğu satıra dokunarak yukarıdaki (olası) engellenen siteye ait ölçüm sayfasına erişebilirsiniz.

{{<img src="images/image62.jpg" title="1tv inaccessible" alt="1tv inaccessible">}}

Bu durumda, Magticom Ltd (AS16010) üzerinden 2 Ağustos 2022 tarihinde yerel saatle 10:16 zamanında sınandığında `http://1tv.ru` sitesinin engelleme belirtileri (“[anomali](https://ooni.org/support/glossary/#network-anomaly)”)  gösterdiğini görebiliriz. Özellikle [DNS kurcalama](https://ooni.org/support/glossary/#dns-tampering) belirtileri olduğunu görebiliriz ([OONI site bağlantısı sınaması](https://ooni.org/nettest/web-connectivity/) sonuçlarına göre). Bu sonuçlar, Magticom Ltd. tarafından TCP/IP engellemesi ile `http://1tv.ru` sitesine erişimin (2 Ağustos 2022 tarihinde) engellemiş olabileceği anlamına gelir.

[Yanlış pozitif sonuçlar](https://ooni.org/support/glossary/#false-positive) oluşabileceğinden, [Site bağlantısı sınamamızın](https://ooni.org/nettest/web-connectivity/) tüm ölçütlerini karşılamayan sınama sonuçlarına “[anomaliler](https://ooni.org/support/faq/#how-can-i-interpret-ooni-data)” olarak (“engellendiği doğrulandı” yerine), sınanan sitenin *engellenmiş olabilir* şeklinde bir açıklama ekleriz.

Bir sitenin engellenmesi değerlendirilirken, [OONI Explorer](https://explorer.ooni.org/) (tüm sınama sonuçlarını yayınladığımız yer) üzerindeki ilgili ölçümleri (aynı ağdaki belirli bir sitenin zaman içinde sınanmasından elde edilen) **toplu** olarak değerlendirmek yararlı olur. OONI Explorer ayrıca [tüm “engellendiği onaylanmış”](https://explorer.ooni.org/search?since=2021-02-24&only=confirmed) durumlar için ölçümleri görüntüler. Burada [sayfaların engellenmesine](https://ooni.org/support/glossary/#block-page) bakarak, sitelerin engellendiğini otomatik olarak onaylarız.

Bir site sınanırken bir [anomali](https://ooni.org/support/faq/#how-can-i-interpret-ooni-data) ortaya çıktığında, sitenin yeniden sınanması (aynı ağ üzerinde) [yanlış pozitif sonuçları](https://ooni.org/support/glossary/#false-positive) ortadan kaldırmaya yardımcı olabileceğinden özellikle önemlidir (örneğin, bir site her sınandığında aynı şekilde başarısız oluyorsa). Anormal bir ölçüm genellikle tek başına engellemeyi değerlendirmek için yeterli değildir (özellikle sınama, sansürle hiçbir ilgisi olmayabilecek çeşitli ağ sorunları nedenleriyle başarısız olabileceğinden).

**3. adım.** Sınanan bir adresi yeniden sınamak için, OONI Probe uygulamanızda sitesi sınama sonuçları sayfasının sağ üst köşesindeki **yeniden dene simgesine** dokunun.

{{<img src="images/image23.jpg" title="Retry icon" alt="Retry icon">}}

Ardından, (zaten sınamış olduğunuz) tüm siteleri yeniden sınamak isteyip istemediğinizin sorulduğu açılır pencereyi göreceksiniz.

{{<img src="images/image36.jpg" title="Rerun test" alt="Rerun test">}}

**4. adım.** Siteleri yeniden sınamak için **Çalıştır** üzerine dokunun.

### Anlık ileti

Anlık ileti uygulamalarının sınamalarından elde edilen OONI Probe sonuçlarınıza şu adımları izleyerek erişebilirsiniz:

**1. adım.** OONI Probe Mobile sınama sonuçları ekranında **Anlık ileti** üzerine dokunun.

{{<img src="images/image128.jpg" title="Test results screen" alt="Test results screen">}}

{{<img src="images/image129.jpg" title="Test results IM screen" alt="Test results IM screen">}}

Böylece şu ana kadar sınadığınız anlık ileti uygulamalarının (WhatsApp, Facebook Messenger, Telegram) listesini göreceksiniz.

Üst başlıkta, anlık ileti uygulamasının sınama sonuçlarının özetini göreceksiniz. Sınanan her uygulamanın yanında yeşil bir onay simgesi (uygulamanın erişilebilirliğini gösteren) ya da turuncu bir ünlem simgesi (olası uygulama engellemesini gösteren) bulunur.

**2. adım.** **Sınanmış bir uygulama satırına** dokunun (bu uygulama sınamasında elde edilen verilere erişmek için).

{{<img src="images/new-im-test-results.jpg" title="IM test results" alt="IM test results">}}

Aşağıdaki ölçüm sayfası, WhatsApp sınamasıyla ilgilidir.

{{<img src="images/image64.jpg" title="WhatsApp test result" alt="WhatsApp test result">}}

Bu ölçüm sayfasında WhatsApp sınama sonucunun genel bir özeti bulunur. Bu durumda, 2 Ağustos 2022 tarihinde yerel saatle 10:16 zamanında Magticom Ltd. (AS16010) üzerinden sınanan WhatsApp uygulamasının erişilebilir olduğunu görebiliriz. [OONI WhatsApp sınaması](https://ooni.org/nettest/whatsapp/), WhatsApp uç noktaları, kayıt hizmeti ve internet arayüzü (`web.whatsapp.com`) ile başarılı bir şekilde bağlantı kurabildiği için bu sonuca ulaşılmıştır.

WhatsApp uygulaması için (olası) engelleme algılanırsa, bu sınama sonucunda turuncu bir ünlem işareti ve neden engellenme olasılığı olduğu hakkında bilgiler görüntülenir ([OONI WhatsApp sınamasının](https://ooni.org/nettest/whatsapp/) bulgularına göre)).

Benzer şekilde, Telegram sınama sonuçlarına OONI Probe uygulamanızdaki anlık ileti sonuçları üzerinden erişebilirsiniz.

{{<img src="images/image4.jpg" title="Telegram test result" alt="Telegram test result">}}

Bu durumda, 2 Ağustos 2022 tarihinde yerel saatle 10:16 zamanında Magticom Ltd. (AS16010) üzerinden sınanan Telegram uygulamasının erişilebilir olduğunu görebiliriz. [OONI Telegram sınaması](https://ooni.org/nettest/telegram/), Telegram uç noktaları, kayıt hizmeti ve internet arayüzü (`web.telegram.org`) ile başarılı bir şekilde bağlantı kurabildiği için bu sonuca ulaşılmıştır.

Telegram uygulaması için (olası) engelleme algılanırsa, bu sınama sonucunda turuncu bir ünlem işareti ve neden engellenme olasılığı olduğu hakkında bilgiler görüntülenir ([OONI Telegram sınamasının](https://ooni.org/nettest/telegram/) bulgularına göre)).

Gördüğünüz gibi, ekranın altında, ölçümün [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerine yüklenmediğini belirten gri bir çizgi bulunuyor. Bu durum, zayıf ağ bağlantısından kaynaklanmış olabilir. Ölçümleri yeniden yüklemeyi denemek için **Yükle** üzerine dokunun.

Signal sınama sonuçlarına OONI Probe uygulamanızdaki anlık ileti sonuçları üzerinden erişebilirsiniz.

{{<img src="images/signal-test-result.jpg" title="Signal results" alt="Signal results">}}

Bu durumda, 2 Ağustos 2022 tarihinde yerel saatle 10:18 zamanında Magticom Ltd. (AS16010) üzerinden sınanan Signal uygulamasının erişilebilir olduğunu görebiliriz. [OONI Signal sınaması](https://ooni.org/nettest/signal/), Signal uç noktaları ile başarılı bir şekilde bağlantı kurabildiği için bu sonuca ulaşılmıştır.

Signal uygulaması için (olası) engelleme algılanırsa, bu sınama sonucunda turuncu bir ünlem işareti ve neden engellenme olasılığı olduğu hakkında bilgiler görüntülenir ([OONI Signal sınamasının](https://ooni.org/nettest/signal/) bulgularına göre)).

Her durumda, [OONI Explorer](https://explorer.ooni.org/) üzerindeki ilgili ölçümleri toplu olarak değerlendirmek yararlı olur ([yanlış pozitif sonuçları](https://ooni.org/support/glossary/#false-positive) elemekte ve engellemeyi onaylamakta yardımcı olabilir).

### Sansürü aşma

Sansürü aşma araçları sınamasından elde edilen OONI Probe sonuçlarınıza şu adımları izleyerek erişebilirsiniz:

**1. adım.** OONI Probe Mobile uygulamanızın sınama sonuçları ekranında **Sansürü aşma** üzerine dokunun.

{{<img src="images/new-test-results.jpg" title="Test results page" alt="Test results page">}}

{{<img src="images/image130.jpg" title="Test results page" alt="Test results page">}}

{{<img src="images/image132.jpg" title="Test results page" alt="Test results page">}}

Böylece şu ana kadar sınadığınız sansürü aşma uygulamalarının (Psiphon, Tor) listesini göreceksiniz.

Üst başlıkta, sansürü aşma aracının sınama sonuçlarının özetini göreceksiniz. Sınanan her aracın yanında yeşil bir onay simgesi (aracın erişilebilirliğini gösteren) ya da turuncu bir ünlem simgesi (olası araç engellemesini gösteren) bulunur.

**2. adım.** **Sınanmış bir aracın satırına** dokunun (bu aracın sınamasında elde edilen verilere erişmek için).

{{<img src="images/image108.jpg" title="Circumvention test results" alt="Circumvention test results">}}

Aşağıdaki ölçüm sayfası [Psiphon](https://psiphon.ca/) sınamasıyla ilgilidir.

{{<img src="images/image21.jpg" title="Psiphon test result page" alt="Psiphon test result page">}}

Bu ölçüm sayfasında Psiphon sınama sonucunun genel bir özeti bulunur. Bu durumda, 2 Ağustos 2022 tarihinde yerel saatle 13:11 zamanında Magticom Ltd. (AS16010) üzerinden sınanan Psiphon uygulamasının erişilebilir olduğunu görebiliriz. [OONI Psiphon sınaması](https://ooni.org/nettest/psiphon/), Psiphon ile başarılı bir şekilde bağlantı kurulabildiği için bu sonuca ulaşılmıştır.

Psiphon aracı için (olası) engelleme algılanırsa, bu sınama sonucunda turuncu bir ünlem işareti ve neden engellenme olasılığı olduğu hakkında bilgiler görüntülenir ([OONI Psiphon sınamasının](https://ooni.org/nettest/psiphon/) bulgularına göre)).

Benzer şekilde, [Tor](https://www.torproject.org/) sınama sonuçlarına OONI Probe uygulamanızdaki sansürü aşma sonuçları üzerinden erişebilirsiniz.

{{<img src="images/image107.jpg" title="Tor test results" alt="Tor test results">}}

Bu durumda, 2 Ağustos 2022 tarihinde yerel saatle 13:11 zamanında Magticom Ltd. (AS16010) üzerinden sınanan Tor aracının erişilebilir olduğunu görebiliriz. [OONI Tor sınaması](https://ooni.org/nettest/tor/), Varsayılan Tor köprülerinin çoğuyla ve Tor dizin belirleyicilerinin tümüyle başarılı bir şekilde bağlantı kurabildiği için bu sonuca ulaşılmıştır.

Tor aracı için (olası) engelleme algılanırsa, bu sınama sonucunda turuncu bir ünlem işareti ve neden engellenme olasılığı olduğu hakkında bilgiler görüntülenir ([OONI Tor sınamasının](https://ooni.org/nettest/tor/) bulgularına göre)).

### Başarım

Ağ başarımı sınamalarından elde edilen OONI Probe sonuçlarınıza şu adımları izleyerek erişebilirsiniz:

**1. adım.** OONI Probe Mobile sınama sonuçları ekranında **Başarım** üzerine dokunun.

{{<img src="images/new-test-results.jpg" title="Test results page" alt="Test results page">}}

{{<img src="images/image131.jpg" title="Test results page" alt="Test results page">}}

Böylece şu ana kadar çalıştırdığınız başarım sınamalarının listesini göreceksiniz. Üst başlıkta, her sınama sonucunun yanında listelenen ana bulgularla birlikte sonuçların genel bir özetini bulacaksınız.

**2. adım.** **Bir sınama sonucu satırına** dokunun (ilgili verilere erişmek için).

{{<img src="images/image16.jpg" title="Performance test results" alt="Performance test results">}}

Bu ölçüm sayfası bir [NDT hız sınamasından](https://ooni.org/nettest/ndt/) alınmıştır.

{{<img src="images/image79.jpg" title="NDT speed test details" alt="NDT speed test details">}}

Bu durumda, 2 Ağustos 2022 tarihinde yerel saatle 13:26 zamanında Magticom Ltd. (AS16010) üzerinden bir [NDT hız sınamasının](https://ooni.org/nettest/ndt/) yapıldığını görebiliriz. Sınama yapıldığında, indirme hızı saniyede 9,44 megabit, yükleme hızı saniyede 11,5 megabit idi ve bir [M-Lab](https://www.measurementlab.net/) sunucusu (`mil03-IT`) ile bağlantı kurmak 151,6 milisaniye sürdü. Ortalama ping süresinin (bu M-Lab sunucusuna) 453,3 milisaniye olduğu düşünülürse, bu sonuç internet hızının ortalama olduğunu gösterir.

NDT sınama sonuçlarınızı, internet servisi sağlayıcınızdan (İSS) satın aldığınız internet hizmeti tarifesi ile karşılaştırabilirsiniz.

[DASH](https://ooni.org/nettest/dash/) sınama sonuçlarına OONI Probe uygulamanızdaki başarım sonuçları üzerinden erişebilirsiniz.

{{<img src="images/image92.jpg" title="Dash test results" alt="Dash test results">}}

Bu durumda, 2 Ağustos 2022 tarihinde yerel saatle 13:35 zamanında Magticom Ltd. (AS16010) üzerinden bir [DASH video akış sınaması](https://ooni.org/nettest/dash/) çalıştırıldığını görebiliriz. Sınama yapıldığında, medyan bit hızı saniyede 6,07 megabit olmak üzere ara belleğe alma olmadan 1080p çözünürlüğe çıkan (full HD) video akışı yapılabildi. Bu sonuçlar, akış sunucusunun ölçüm sunucusuyla aynı konumda olması durumunda kullanıcının bu ağda yüksek çözünürlüklü videolar yayınlayabileceğini gösterir.

DASH sınama sonuçlarınızı, internet servisi sağlayıcınızdan (İSS) satın aldığınız internet hizmeti tarifesi ile karşılaştırabilirsiniz.

Başarım kartından, sınanan ağlarda [ara kutuların](https://ooni.org/support/glossary/#middlebox) varlığını ölçmek için tasarlanmış iki OONI sınamasını da çalıştırabilirsiniz:

* [HTTP geçersiz istek satırı sınaması](https://ooni.org/nettest/http-invalid-request-line/)
* [HTTP üst bilgi alanı değiştirme sınaması](https://ooni.org/nettest/http-header-field-manipulation/)

Ara kutu, paket iletme dışındaki amaçlar için trafiği dönüştüren, inceleyen, süzen veya başka şekilde değiştiren bir bilgisayar ağ aygıtıdır. Dünyanın dört bir yanındaki birçok İnternet Servis Sağlayıcısı (İSS), ağ başarımını iyileştirmek, kullanıcıların sitelere daha hızlı erişmesini sağlamak ve bir dizi başka ağ işlemleri amacıyla ara kutuları kullanır. Ara kutular bazen internet sansürü ve/veya gözetimi uygulamak için de kullanılır.

OONI [HTTP geçersiz istek satırı](https://ooni.org/nettest/http-invalid-request-line/) sınaması sonuçlarına OONI Probe uygulamanızdaki başarım sonuçları üzerinden erişebilirsiniz.

{{<img src="images/image117.jpg" title="HIRL no middlebox detected" alt="HIRL no middlebox detected">}}

Bu durumda, [HTTP geçersiz istek satırı](https://ooni.org/nettest/http-invalid-request-line/) sınamasının Magticom Ltd. (AS16010) üzerinden 2 Ağustos 2022 tarihinde yerel saat ile 13:36 zamanında çalıştırıldığını görebiliriz. Bu sınama yapıldığında, standart HTTP bağlantı noktasını dinleyen bir yankı hizmetine geçersiz bir HTTP istek satırı (geçersiz bir HTTP sürüm numarası, geçersiz bir alan numarası ve büyük bir istek yöntemi içeren) gönderildi. Yankı hizmeti (aldığı tüm verileri basitçe geri gönderen bir hata ayıklama ve ölçüm aracı), geçersiz HTTP istek satırını aynen aldığı gibi bize geri gönderdi. Bu sonuç, sınanan ağda görünür bir ara kutu olmadığını veya trafiğin değiştirilmediğini gösterir.

Bununla birlikte, sınanan ağda bir ara kutu varsa, HTTP geçersiz istek satırı ara kutu tarafından yakalanır ve büyük olasılıkla yankı hizmeti tarafından bize geri gönderilecek bir hata iletisini tetikler. Bu tür hatalar, sınanan ağda trafiğin değiştirilmesi için bir yazılımın kullanıldığını gösterir. Ancak bu yazılımın ne olduğu her zaman açık değildir.

Benzer şekilde OONI [HTTP üst bilgi değişikliği](https://ooni.org/nettest/http-header-field-manipulation/) sınamasının sonuçlarına OONI Probe uygulamanızın başarım sonuçları üzerinden erişebilirsiniz.

{{<img src="images/image7.jpg" title="HHFM no middlebox detected" alt="HHFM no middlebox detected">}}

Bu durumda, Magticom Ltd. (AS16010) üzerinde 2 Ağustos 2022 tasrihinde yerel saat ile 13:35 zamanında, yapılan sınamada, bir arka uç kontrol sunucusuna (aldığı tüm verileri geri gönderen) yönelik bir [HTTP isteği](https://ooni.org/support/glossary/#http-request) taklit edildi. Gönderilen [HTTP üst bilgilerinde](https://ooni.org/support/glossary/#http-header) büyük harf kullanımında farklılıklar (standart olmayan HTTP üst bilgileri gibi) yapıldı. HTTP üst bilgilerini tam olarak gönderdiğimiz gibi geri aldığımız için, sınanan ağda görünür bir ara kutu veya trafik değişikliği olmadığı söylenebilir.

Bununla birlikte, sınanan ağda bir ara kutu varsa, gönderdiğimiz geçersiz üst bilgileri normalleştirmiş veya fazladan üst bilgiler eklemiş olabilir. Bir arka uç kontrol sunucusundan gönderdiğimiz ve aldığımız HTTP üst bilgilerinin aynı olup olmadığına bağlı olarak, sınanan ağda bir ara kutunun olup olmadığını değerlendirebiliriz.

## OONI Probe sınama sonuçlarınızı paylaşmak

Her OONI Probe sınama sonucu ile şunları yapabilirsiniz:

* [OONI Explorer](https://explorer.ooni.org/) üzerinde yayınlanan **ölçümünüze erişip paylaşabilirsiniz**;
* **Ölçümü kişilerinizle paylaşabilirsiniz**;
* **Ölçümünüzün ham verilerine** erişebilirsiniz;
* **Ölçümünüzün günlük kayıtlarına** erişebilirsiniz;

### Ölçümünüze OONI Explorer üzerinden erişmek

**1. adım.** Herhangi bir OONI Probe sınama sonucuna erişin (OONI Probe sınama sonuçlarını nasıl bulacağınızla ilgili ayrıntılar için lütfen bu rehberin önceki bölümüne bakın).

{{<img src="images/image62.jpg" title="1tv potentially blocked" alt="1tv potentially blocked">}}

**2. adım.** Bir OONI Probe sınama sonucunda **OONI Explorer üzerinde görüntüle** düğmesine dokunun.

Uygulama sizi ölçümünüzle ilgili **OONI Explorer** sayfasına yönlendirir. `1tv` örneği için şu sayfa olur: https://explorer.ooni.io/measurement/20220802T082305Z_webconnectivity_GE_16010_n1_mqcSN23znJTURgOm?input=http://1tv.ru

### Ölçümünüzü paylaşmak

Özellikle olası engelleme durumlarıyla karşılaştığınızda sınama sonuçlarınızı paylaşmak ilginizi çekebilir. OONI Probe sonuçlarınız [OONI Explorer](https://explorer.ooni.org/) üzerinde otomatik olarak yayınlanırken (bu rehberin “OONI Probe ayarlarınızı yapılandırma: Gizlilik” bölümünde açıklandığı gibi kapatmadığınız sürece) ), sınama sonuçlarınızı doğrudan kişilerinizle paylaşmak isteyebilirsiniz.

OONI Probe ölçümlerinizi şu adımları izleyerek paylaşabilirsiniz:

**1. adım.** Bir OONI Probe sınama sonucunda **Paylaş** düğmesine dokunun.

{{<img src="images/image87.jpg" title="Share explorer URL" alt="Share explorer URL">}}

Böylece, telefonunuzun **Paylaş** özelliği açılarak seçilen ölçümü kişilerinizle (örneğin, WhatsApp, Signal ya da Slack gibi uygulamalar üzerinden) doğrudan paylaşmanızı sağlar.

**2. adım.** Ölçümü paylaşmak istediğiniz kişiye dokunun.

**3. adım.** Ölçümü kişinizle paylaşmak için **Gönder** üzerine dokunun. Kişiye sınama sonucunuzla ilgili [OONI Explorer](https://explorer.ooni.org/) ölçümü gönderilir.

### Ham veriler

Her OONI Probe sınaması sonucunda bulguların özeti sunulur. Her sınama sonucunun dayandığı gerçek verilere (yani ham ölçüm verileri), her sınama sonucunun **Veriler** düğmesi ile erişilebilir.

Ham ölçüm verilerine erişebilmek şu nedenlerle yararlıdır:

* Olası engellemenin **kanıtı** olarak sunulabilecek teknik ayrıntılar sağlar;
* Bir sitenin gerçekten engellenip engellenmediğini veya sınanmasının sansürle ilgili olmayan başka nedenlerle bir [anomaliyi](https://ooni.org/support/glossary/#network-anomaly) tetikleyip tetiklemediğini belirlemeye yardımcı olabilir ([yanlış pozitif sonuçları](https://ooni.org/support/glossary/#false-positive) elemek gibi).

Bir sınama sonucunun ham OONI verilerine erişmek için:

**1. adım.** Bir OONI Probe sınamasının sonucunda **Veriler** düğmesine dokunun.

{{<img src="images/image133.jpg" title="Data button" alt="Data button">}}

**2. adım.** Sağ üst köşedeki **Panoya kopyala** seçeneğine dokunarak verileri kopyalayabilir ve paylaşabilirsiniz.

{{<img src="images/image134.jpg" title="Copy to clipboard" alt="Copy to clipboard">}}

### Günlük

Günlük, belirli bir yazılımın nasıl çalıştığını kaydeden bir dosyadır. OONI Probe bağlamında, her sınama sonucu, söz konusu sınamanın belirli bir ağda nasıl çalıştığını kaydeden bir günlüğü vardır. Bu veriler yalnızca **Hata ayıklama günlükleri** seçeneğiniz açıksa görüntülenir. Bu seçeneğin açık mı kapalı mı olduğunu **Ayarlar** altındaki **Gelişmiş** bölümünde görebilirsiniz.

Bir sorun çıktıysa veya başka bir şekilde beklendiği gibi çalışamadıysa, bir OONI Probe sınama sonucunun günlüğüne bakmanın olası yararları olabilir. Bu gibi durumlarda, **hatayı ayıklamamıza** ve sorunu çözmemize yardımcı olması için ilgili günlüğü [OONI ekibi](https://ooni.org/about/#contact) ile paylaşabilirsiniz.

## OONI Probe ayarlarınızı yapılandırmak

Ayarları değiştirerek OONI Probe kullanımınızı özelleştirebilirsiniz.

**1. adım.** OONI Probe uygulamanızın alt gezinme çubuğundaki **Ayarlar** üzerine dokunun.

{{<img src="images/image63.jpg" title="Settings page" alt="Settings page">}}

Böylece OONI Probe uygulamasının tüm ayarlarını görebilirsiniz.

Aşağıdaki bölümlerde her ayarın üzerinden geçeceğiz.

### Bildirimler

**Android** üzerinde OONI Probe kullanıyorsanız, [OONI ekibinden](https://ooni.org/about/#contact) ileti almak için **anında bildirimleri** etkinleştirebilirsiniz.

Belirli bir ülkede sansür olduğunu duyduğumuzda öncelikle o ülkedeki OONI Probe kullanıcılarına bildirimler göndererek, engellendiği bildirilen (veya [OONI ölçümlerine](https://explorer.ooni. kuruluş/) göre engellendiği görülen) hizmetleri sınamalarını öneririz. Anında bildirimleri genellikle çok sık göndermeyiz.

Anında bildirim ayarlarınızı şu adımları izleyerek yapılandırabilirsiniz:

**1. adım.** OONI Probe uygulamanızın ayarlarında **Bildirimler** üzerine dokunun.

{{<img src="images/image114.jpg" title="Tap notification settings" alt="Tap notification settings">}}

Anında bildirimlerin varsayılan olarak kapalı olduğunu göreceksiniz.

{{<img src="images/image94.jpg" title="Notification settings screen" alt="Notification settings screen">}}

**2. adım.** Anında bildirimleri almak için **Açık** seçeneğini açın.

{{<img src="images/image71.jpg" title="Enable notifications" alt="Enable notifications">}}

Anında bildirimleri etkinleştirdiğinizde, ülkenizde bir internet sansürü uygulandığını duyarsak bizden bir ileti alabilirsiniz. İletimizde, engellendiği bildirilen veya görünüşte engellenen belirli hizmetlerin sınanması için bir [OONI Run](https://run.ooni.io/) bağlantısı verebiliriz.

### Otomatik sınama

Sınamaları el ile çalıştırmayı anımsamak yerine, OONI Probe uygulamanızın ayarlarından **otomatik sınama seçeneğini açabilirsiniz**.  Bu durumda OONI Probe sınamaları otomatik olarak çalıştırır!

Otomatik sınama seçeneğini açtığınızda, OONI Probe **arka planda günde birkaç kez tüm sınamaları çalıştırır** (bant genişliğinin yoğun kullanıldığı başarım sınamaları dışında), her sınamada ([Citizen Lab sınama listelerinden](https://github.com/citizenlab/test-lists/tree/master/lists)) farklı birkaç siteye bakar. Uygulamanızın sınama sonuçları bölümünde yığılmayı önlemek için, bu sınamaların sonuçları neredeyse gerçek zamanlı olarak [OONI Explorer](https://explorer.ooni.org/) üzerinde otomatik olarak yayınlanır (ancak sınama sonuçları bölümünde görüntülenmez) .

Otomatik OONI Probe sınaması ile **sansür ölçümlerine düzenli olarak katkıda bulunabilirsiniz** (fazladan bir şey yapmanız gerekmeden. Bu seçeneği açmak, internet özgürlüğü topluluğunun zaman içinde ülkenizdeki sansür olaylarını izlemesini ve yakalamasını sağlar.

Otomatik OONI Probe sınamasını şu adımları izleyerek açabilirsiniz:

**1. adım.** OONI Probe uygulamanızın alt gezinme çubuğundaki **Ayarlar** üzerine ve ardından **Otomatik sınama** düğmesine dokunun.

{{<img src="images/image135.jpg" title="Automated testing settings" alt="Automated testing settings">}}

**Sınamalar otomatik olarak çalıştırılsın** seçeneğinin varsayılan olarak kapalı olduğunu göreceksiniz.

{{<img src="images/image136.jpg" title="Automated testing disabled" alt="Automated testing disabled">}}

**2. adım.** Ayarlarda **Sınamalar otomatik olarak çalıştırılsın** seçeneğini açın.

{{<img src="images/image138.jpg" title="Always automated testing" alt="Always automated testing">}}

Böylece otomatik OONI Probe sınamalarını açtınız! OONI Probe, sınamaları günde birkaç kez (kullanıcının bir şey yapması gerekmeden) otomatik olarak çalıştırır ve aygıtınızın Wi-Fi bağlantısı varken ve şarj oluyorken, sınama sonuçlarını otomatik olarak [OONI Explorer](https://explorer.ooni.org/) üzerinde yayınlar.

Trafik veya pil kullanımıyla ilgili herhangi bir kısıtlamanız yoksa, otomatik ölçümleri Wi-Fi bağlantısı veya şarja bağlı olmadan çalıştırabilirsiniz. Bunu yapmak için lütfen **Yalnızca Wi-Fi kullanılırken** ve **Yalnızca şarj edilirken** ayarlarını kapatın.

{{<img src="images/image137.jpg" title="Automated testing enabled" alt="Automated testing enabled">}}

**Önemli:** Etkin bir VPN bağlantınız varsa, OONI Probe sınamaları otomatik olarak *çalıştırmaz*. Otomatik OONI Probe sınaması için lütfen **VPN bağlantınızı kapatın**.

### Sınama ayarları

Sınamanızı her tematik kartın (“Siteler”, “Anlık ileti”, “Sansürü aşma”, “Başarım”) kendi sınama seçeneklerine göre özelleştirebilirsiniz.

**1. adım.** OONI Probe uygulamanızın ayarlarında **Sınama seçenekleri** üzerine dokunun.

{{<img src="images/image2.jpg" title="Test options settings" alt="Test options settings">}}

Böylece sonraki ayarların her bir tematik sınama kartı altında gruplandığını göreceksiniz.

{{<img src="images/image111.jpg" title="Test settings" alt="Test settings">}}

Aşağıdaki bölümlerde her gruptaki ayarların üzerinden geçeceğiz.

#### Siteler

Site sınaması ayarları, bu rehberin önceki bölümlerinde ele alınmıştır. Lütfen “**Site sınamasını özelleştirme**” bölümüne bakın.

#### Anlık ileti

Anlık ileti uygulamaları sınamanızı özelleştirebilirsiniz.

**1. adım.** Ayarlarda “Sınama seçenekleri” bölümünde **Anlık ileti** bölümüne gidin.

{{<img src="images/image84.jpg" title="Tap IM settings" alt="Tap IM settings">}}

Burada 4 sınama göreceksiniz ([WhatsApp](https://ooni.org/nettest/whatsapp/), [Telegram](https://ooni.org/nettest/telegram/), [Facebook Messenger]( https://ooni.org/nettest/facebook-messenger/) ve [Signal](https://ooni.org/nettest/signal) için). Bunlar OONI Probe panosunun Anlık ileti kartında bulunur. Varsayılan olarak 4 sınamanın tümü etkindir.

{{<img src="images/new-im-settings.jpg" title="IM settings" alt="IM settings">}}

Sınamanızı bu sınamalardan birkaçıyla (ya da hiçbiriyle) sınırlamak isterseniz, bu ayarlardan ilgili sınamaları kapatabilirsiniz.

**Not:** Bize sık sık kullanıcıların sınamak istedikleri anlık ileti uygulamasını ekleyip ekleyemeyecekleri sorulur (OONI Probe ile özelleştirilmiş bir uygulama sınaması). Ne yazık ki bu, özelleştirilmiş site sınaması (sınama için herhangi bir adres ekleyebileceğiniz yer) kadar basit değil. Uygulama sınaması için, ilgili uygulamanın tüm uç noktalarının tanımlanması ve söz konusu uygulamanın erişilebilirliğini ölçmenin en iyi yolunun belirlenmesi gerekir. Bunlar, uygulamadan uygulamaya çok değişebilir ve her bir OONI Probe anlık ileti uygulaması sınamasının oluşturulması için oldukça fazla geliştirme çalışması yapılır. Bu nedenle şu anda yalnızca birkaç anlık ileti uygulaması sınamamız var ve her sınamanın [yöntemi](https://ooni.org/nettest/) farklı. (a) Dünya çapında sıklıkla engellenen ve (b) topluluktan çok sayıda istek alan anlık ileti uygulamaları için sınamalar geliştirmeye öncelik verdik. Sınamalara öncelik vermemiz gerektiğini düşündüğünüz başka anlık ileti uygulamaları varsa lütfen [bize bildirin](https://ooni.org/about/#contact).

#### Sansürü aşma

Sansürü aşma araçları sınamanızı özelleştirebilirsiniz.

**1. adım.** Ayarlarda “Sınama seçenekleri” bölümünde **Sansürü aşma** bölümüne gidin.

{{<img src="images/image109.jpg" title="Tap circumvention" alt="Tap circumvention">}}

Burada OONI Probe panosunda sansürü aşma kartında bulunan 2 sınamayı göreceksiniz ([Psiphon](https://ooni.org/nettest/psiphon/) ve [Tor](https://ooni.org/nettest/tor/)). Varsayılan olarak iki sınama da açıktır.

{{<img src="images/image20.jpg" title="Circumvention settings" alt="Circumvention settings">}}

Sınamanızı bu sınamalardan biri (ya da hiçbiriyle) sınırlamak isterseniz, bu ayarlardan ilgili sınamaları kapatabilirsiniz.

**Not:** Bize bazen kullanıcıların sınamak istedikleri sansürü aşma aracını ekleyip ekleyemeyecekleri sorulur (OONI Probe ile özelleştirilmiş VPN sınaması). Ne yazık ki bu, özelleştirilmiş site sınaması (sınama için herhangi bir adres ekleyebileceğiniz yer) kadar basit değil. Sansürü aşma aracı sınaması için, ilgili aracın tüm uç noktalarının tanımlanması ve söz konusu aracın erişilebilirliğini ölçmenin en iyi yolunun belirlenmesi gerekir. Bunlar, araçtan araca çok değişebilir ve her bir OONI Probe sansürü aşma aracı sınamasının oluşturulması için oldukça fazla geliştirme çalışması yapılır. Bu nedenle şu anda yalnızca birkaç sansürü aşma aracı sınamamız var ve her sınamanın [yöntemi](https://ooni.org/nettest/) farklı. Geliştiricileriyle işbirliği yapabildiğimiz sansürü aşma araçları için sınama geliştirmeye öncelik verdik. Sınamalarına öncelik vermemiz gerektiğini düşündüğünüz başka sansürü aşma araçları varsa lütfen [bize bildirin](https://ooni.org/about/#contact).

#### Başarım

Ağ başarımı sınamanızı özelleştirebilirsiniz.

**1. adım.** Ayarlarda “Sınama seçenekleri” bölümünde **Başarım** bölümüne gidin.

{{<img src="images/image82.jpg" title="Performance settings" alt="Performance settings">}}

Burada OONI Probe panosunun Başarım kartında bulunan 4 sınamayı göreceksiniz ([NDT](https://ooni.org/nettest/ndt/), [DASH](https://ooni.org/nettest/dash/), [HTTP geçersiz istek satırı](https://ooni.org/nettest/http-invalid-request-line/), [HTTP üst bilgi alanı değiştirme](https://ooni.org/nettest/http-header-field-manipulation/)) . Varsayılan olarak 4 sınamanın tümü etkindir.

{{<img src="images/image43.jpg" title="Performance settings" alt="Performance settings">}}

Sınamanızı bu sınamalardan birkaçıyla (ya da hiçbiriyle) sınırlamak isterseniz, bu ayarlardan ilgili sınamaları kapatabilirsiniz.

### Kişisel gizlilik

OONI Probe ayarlarının Gizlilik sekmesi, OONI Probe sınama sonuçlarının yayınlanması ve çökme bildirimlerinin sunulmasıyla ilgilidir.

**1. adım.** OONI Probe uygulamanızın ayarlarında **Gizlilik** üzerine dokunun.

{{<img src="images/image35.jpg" title="Privacy settings" alt="Privacy settings">}}

Varsayılan olarak, OONI Probe sınama sonuçlarınızın otomatik olarak yayınlanması açıkken çökme bildirimlerinin gönderilmesi kapalıdır (ilk katılım sırasında açmadıysanız).

{{<img src="images/image80.jpg" title="Privacy settings" alt="Privacy settings">}}

İnternet sansürünün görünürlüğünü artırmaya yardımcı olabileceği ve internet özgürlüğü topluluğunun araştırma ve savunma çabalarını destekleyebileceği için OONI Probe sınama sonuçlarının yayınlanmasını öneriyoruz.

OONI Probe sınama sonuçlarınızı yayınlarsanız, bu sonuçlarda şu veriler bulunur:

* Ölçümün tarihi ve saati.
* Ülke kodu (Türkiye için `TR`gibi);
* Ağ bilgileri: [ASN](https://ooni.org/support/glossary/#asn) (Magticom Ltd. için `AS16010` gibi) ve sınama yapılırken Wi-Fi ya da mobil veri kullanıldığı;
* Ağ ölçümü verileri ([OONI Probe sınaması](https://ooni.org/nettest/) ile ilişkili).

Ayrıntılı bilgi almak için [veri ilkemize](https://ooni.org/about/data-policy) bakabilirsiniz.

Çökme bildirimlerini bizimle paylaşmayı seçerseniz, hataları belirlemek ve OONI Probe uygulamasının başarımını iyileştirmek için gerekli olan bilgileri paylaşmış olursunuz. Bu çökme bildirimlerinde, belirli bir OONI Probe özelliğinin neden ve nasıl beklendiği gibi çalışmadığı ile ilgili bilgiler bulunur.

İlgili ayarlardan OONI Probe sınama sonuçlarınızı yayınlamayı ve/veya çökme bildirimlerini bizimle paylaşmayı kapatabilirsiniz.

{{<img src="images/image29.jpg" title="All privacy off" alt="All privacy off">}}

### Gelişmiş

OONI Probe uygulamasının gelişmiş ayarlarında şunlar bulunur:

* OONI Probe uygulamanızın **dilini** değiştirmek;
* Hata ayıklaması için **günlükleri** paylaşmak;
* OONI Probe **depolama alanınızı** temizlemek;
* **VPN kullanılıyorken** uyarı almak.

Gelişmiş ayarlara şu adımları izleyerek erişebilirsiniz:

**1. adım.** OONI Probe uygulamanızın ayarlarında **Gelişmiş** üzerine dokunun.

{{<img src="images/image74.jpg" title="Advanced settings" alt="Advanced settings">}}

Böylece OONI Probe uygulamanızın **Hata ayıklama günlüklerinin** varsayılan olarak kapalı ve **VPN uyarısının** tüm OONI Probe kullanıcıları için varsayılan olarak açık olduğu gelişmiş ayarlarına erişmiş oldunuz.

{{<img src="images/image97.jpg" title="Advanced settings" alt="Advanced settings">}}

**2. adım.** OONI Probe hatalarını belirlememize ve düzeltmemize yardımcı olabilecek bilgileri (OONI Probe yazılım sürümü gibi) paylaşmak için **Hata ayıklama günlükleri** seçeneğini açın.

**3. adım.** **Dil** seçeneği üzerine dokunarak OONI Probe uygulamanızın dilini değiştirin.

{{<img src="images/image103.jpg" title="Language Settings" alt="Language Settings">}}

**4. adım.** Sınama sonuçlarının daha doğru olmasını sağlamak için OONI Probe çalıştırırken **VPN bağlantınızın kapatılması** önemlidir. VPN bağlantınız açıldığında uyarılmak istiyorsanız lütfen **VPN uyarısı seçeneğini etkinleştirin**.

{{<img src="images/image33.jpg" title="Debug logs and VPN disabled" alt="Debug logs and VPN disabled">}}

**5. adım.** Depolama alanından kazanmak için OONI Probe sınamalarınızı silmek isterseniz **Temizle** düğmesine dokunun.

Böylece, tüm OONI Probe sınama sonuçlarınızı silmek isteyip istemediğinizi soran açılır pencereyi göreceksiniz. Tüm OONI Probe sınama sonuçlarınız zaten [OONI Explorer](https://explorer.ooni.org/) üzerinde yayınlanmıştır (ayarların Gizlilik sekmesinde sonuçların yayınlanması seçeneğini kapatmadıysanız).

{{<img src="images/image38.jpg" title="Delete all results" alt="Delete all results">}}

**6. adım.** Tüm OONI Probe sınama sonuçlarınızı silmek (ve depolama alanından kazanmak) için **Temizle** üzerine dokunun.

{{<img src="images/image22.jpg" title="Empty test results" alt="Empty test results">}}

Böylece OONI Probe sınama sonuçlarınızın tümünü uygulamanızdan silmiş oldunuz.

### OONI arka uç vekil sunucusu

Bu seçenek yalnızca OONI Probe uygulaması **ülkenizde çalışmıyorsa** gerekli olur. Uygulamanızda "Error  – all available probe services failed" iletisini görüyorsanız, OONI Probe tarafından tüm genel OONI API uç noktalarıyla ("probe hizmetleri" olarak adlandırdığımız) iletişim kurulmaya çalışıldığı, ancak bu uç noktalara erişilemediği anlaşılmalıdır.

{{<img src="images/image143.png" title="OONI Probe failed" alt="OONI Probe failed">}}

**OONI arka uç vekil sunucusu** seçeneğine dokunarak, olası (kasıtlı ya da kazara) OONI Probe engellemesini aşmak için kullanmak istediğiniz vekil sunucuyu seçebileceksiniz.

{{<img src="images/image139.jpg" title="OONI Backend Proxy" alt="OONI Backend Proxy">}}

Varsayılan olarak tüm vekil sunucular kapalıdır.

{{<img src="images/image140.jpg" title="OONI Proxy disabled" alt="OONI Proxy disabled">}}

**Psiphon** olarak seçerseniz, OONI Probe, probe hizmetleriyle konuşurken [Psiphon](https://psiphon.ca/) kullanır.

{{<img src="images/image141.jpg" title="Backend proxy Psiphon" alt="Backend proxy Psiphon">}}

**Özel vekil sunucu** olarak seçerseniz, bir SOCKS5 vekil sunucusunun adını ve bağlantı noktasını ayarlayabilirsiniz. Örneğin, aygıtınızda (ya da Termux içinde Tor) çalışan bir Orbot bulut sunucunuz varsa, sunucu adı olarak 127.0.0.1 ve bağlantı noktası olarak 9050 kullanabilirsiniz.

{{<img src="images/image142.jpg" title="Backend proxy custom" alt="Backend proxy custom">}}

Bir OONI arka uç vekil sunucusunu kullandığınızda, OONI Probe bir VPN üzerinde *çalışmaz*. Bunun yerine, OONI Probe, OONI arka uç hizmetlerinin olası engellemesini aşmak için [Psiphon](https://psiphon.ca/) ya da özel bir vekil sunucu (neyi seçtiğinize bağlı olarak) kullanır.

### Destek ekibine e-posta gönderin

OONI Probe ile ilgili sorunlar yaşıyorsanız ve desteğe gerek duyuyorsanız, bize ulaşmanızı öneririz. Bunu şu adımları izleyerek yapabilirsiniz:

**1. adım.** OONI Probe uygulamanızın ayarlarında **Destek ekibine e-posta gönder** üzerine dokunun.

{{<img src="images/image89.jpg" title="Send email to support" alt="Send email to support">}}

Telefonunuzdaki e-posta istemcilerinizden biri ile bir e-posta göndermeniz istenir.

{{<img src="images/image39.jpg" title="Send email prompt" alt="Send email prompt">}}

**2. adım.** OONI Probe ile yaşadığınız sorunları açıklayan bir e-posta yazın. Soruna bağlı olarak günlüğü ve/veya ham ölçüm verilerini bizimle paylaşmanız yararlı olabilir (bu rehberin “OONI Probe sınama sonuçlarınızı paylaşmak” bölümünde açıklandığı gibi).

**3. adım.** E-postanızı [contact@openobservatory.org](mailto:contact@openobservatory.org) adresine gönderin.

OONI ekibinden acil yardım almanız gerekiyorsa, bize gerçek zamanlı olarak sohbet edebileceğimiz [OONI Slack kanalından](https://slack.ooni.org/) ulaşmanızı öneririz.

### OONI hakkında

OONI Probe uygulamasının son ayarı olan "OONI hakkında", [OONI hakkında](https://ooni.org/about/) ve kullanmakta olduğunuz **OONI Probe yazılımı sürümü** hakkında bilgileri görüntüler.

**1. adım.** OONI Probe uygulamanızın ayarlarında **OONI hakkında** üzerine dokunun.

{{<img src="images/image44.jpg" title="About OONI" alt="About OONI">}}

Böylece, OONI ve şu anda kullanmakta olduğunuz OONI Probe yazılımı sürümü hakkında bilgi veren bir sayfa açılır. Aşağıdaki örneğin başlığında sürümün **OONI Probe 3.7.0** olduğunu görebiliriz.

{{<img src="images/new-about-screen.jpg" title="OONI About page" alt="OONI About page">}}

**2. adım.** [OONI sitesine](https://ooni.org/) erişmek ve projemiz hakkında ayrıntılı bilgi almak için **Ayrıntılı bilgi alın** düğmesine dokunun.

**3. adım.** [OONI günlüğüne](https://ooni.org/blog/) erişmek için **Günlük** üzerine dokunun ve duyurularımıza bakın.

**4. adım.** Dünya çapında (OONI verilerine dayalı) internet sansürüyle ilgili [araştırma raporlarımızı](https://ooni.org/reports/) okumak için **Raporlar** üzerine dokunun.

**5. adım.** [Veri ilkemizi](https://ooni.org/about/data-policy) okumak için **OONI veri ilkesi** üzerine dokunun.

Bu rehberi okuduğunuz ve OONI Probe kullandığınız için teşekkür ederiz!
