---
title: "Kullanım rehberi: OONI Probe Desktop uygulaması"
description: "Bu kullanıcı rehberi, OONI Probe Desktop uygulamasının nasıl kullanılacağı hakkında adım adım yönergeler sağlar."
---
**Son güncelleme:** 6 Eylül 2022

**OONI Probe Desktop sürümü:** 3.7.0

Bu belgenin çevirisi için Kaya Zeren'e teşekkür ederiz.

{{<img src="images/install-desktop.png" title="Install OONI Probe Desktop" alt="Install OONI Probe Desktop">}}

OONI Probe, internet sansürünü ve diğer ağ engellemelerini ölçmek için kullanabileceğiniz [ücretsiz ve açık kaynaklı](https://github.com/ooni/probe) bir uygulamadır. Bu kullanıcı rehberinde, [OONI Probe Desktop uygulamasını](https://ooni.org/install/desktop) kurma, çalıştırma ve özelleştirme konusunda **adım adım yönergeler** bulunur.

**Bu rehber size ne sağlayacak:**

* OONI Probe Desktop uygulamasını şunlar için nasıl kullanacağınızı öğrenin:

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

Bu rehber, internet sansürünü ölçen küresel bir topluluğa katılabilmeniz için [OONI Probe Desktop uygulamasını](https://ooni.org/install/desktop) kullanmakta size yol göstermeyi amaçlamaktadır.

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

## OONI Probe Desktop kurulumu

OONI Probe Desktop uygulaması [Windows ve macOS](https://ooni.org/install/desktop) üzerinde kullanılabilir. Linux kullanıyorsanız lütfen [OONI Probe komut satırı arayüzünü (CLI)](https://ooni.org/install/cli/ubuntu-debian) kurun.

OONI Probe Desktop uygulamasını (Windows ve macOS için) şu adımları izleyerek kurabilirsiniz:

**1. adım** OONI Probe Desktop kurulum sayfasını ziyaret edin (OONI sitesinde): <https://ooni.org/install/desktop>

{{<img src="images/install-desktop.png" title="Install OONI Probe Desktop" alt="Install OONI Probe Desktop">}}

**2. adım** OONI Probe indirmek için **İndir** düğmesine tıklayın. Sayfada, işletim sisteminize (macOS gibi) uygun bir OONI Probe sürümü önerilir. Farklı bir işletim sistemine uygun bir sürüm seçmeniz gerekiyorsa, lütfen **Diğer platformlar** düğmesine tıklayın.

{{<img src="images/download-windows-macos.png" title="Download OONI Probe Desktop" alt="Download OONI Probe Desktop">}}

{{<img src="images/image1.jpg" title="OS version" alt="OS version">}}

**3. adım** OONI Probe paketini indirdikten sonra, OONI Probe uygulamasını **kurmak** için indirilen dosyaya çift tıklayın.

**macOS** üzerinde, OONI Probe simgesini sürükleyip Uygulama klasörüne bırakın.

{{<img src="images/macos-application-folder.png" title="macOS Application folder" alt="macOS Application folder">}}

Ardından, OONI Probe uygulamasını macOS üzerine kurmak için **Aç** üzerine tıklayın.

{{<img src="images/macos-more-info.png" title="macOS screen on More Info" alt="macOS screen on More Info">}}

**Windows** üzerinde (Windows 10), şu ekranda **Daha fazla bilgi** üzerine tıklayın:

{{<img src="images/windows-more-info.png" title="Windows screen on More Info" alt="Windows screen on More Info">}}

Ardından, OONI Probe uygulamasını Windows üzerine kurmak için **Gene de çalıştır** üzerine tıklayın.

{{<img src="images/windows-run-anyway.png" title="Windows screen on Run anyway" alt="Windows screen on Run anyway">}}

**4. adım** OONI Probe Desktop uygulamasını açın. **macOS** üzerinde, OONI Probe uygulamasını Uygulamalar klasöründen başlatabilirsiniz. **Windows** üzerinde OONI Probe masaüstü kısayolundan başlatın.

### Hazırlık: Rıza onayı

OONI Probe Desktop uygulamanızı kurup açtığınıza göre, hazırlık sürecinin bir parçası olarak size OONI Probe hakkında bazı temel bilgiler sunulacak.

Ayrıca, OONI Probe çalıştırmakla ilişkili [olası riskler](https://ooni.org/about/risks/) hakkında da bilgi edineceksiniz. Bu olası riskleri anladığınızdan emin olmak için, uygulamalı olarak onayınızı almak üzere kısa bir test ekledik. OONI Probe kullanabilmek için Test sorularını doğru olarak yanıtlamanız gerekir.

Hazırlık sürecinin son adımında, OONI Probe çalıştırılırken varsayılan olarak toplanan veri türlerini paylaşırız (ayrıntılı bilgi almak için [veri ilkemize](https://ooni.org/about/data-policy) bakılabilir). OONI Probe uygulamasını iyileştirmemize yardımcı olması için çökme bildirimlerini ve uygulama kullanımı ölçümlerini paylaşmayı seçebilirsiniz.

Aşağıda, hazırlık süreci boyunca size yol göstereceğiz.

**1. adım** OONI Probe hakkında temel bilgileri okuduktan sonra **Anladım**' üzerine tıklayın.

{{<img src="images/what-is-ooni-probe.png" title="What is OONI Probe" alt="What is OONI Probe">}}

**2. adım** Sonraki ekranda, OONI Probe uygulamasını çalıştırmakla ilgili olası risklerin özeti görüntülenir. Olası riskleri açıklayan [belgelerimizi](https://ooni.org/about/risks/) okumak için **Ayrıntılı bilgi alın** üzerine tıklayın.

{{<img src="images/learn-more-risks.png" title="Learn more " alt="Learn more ">}}

**3. adım** OONI Probe uygulamasını çalıştırmayla ilgili olası riskleri öğrendikten sonra **Anladım** üzerine tıklayın.

{{<img src="images/understand-risks.png" title="Understand risks" alt="Understand risks">}}

**4. adım** Aşağıdaki sınav, önceki ekranda aldığınız bilgileri ölçer. İfadeyi anladığınızı göstermek için **Doğru** üzerine tıklayın.

{{<img src="images/quiz-1.png" title="Quiz 1" alt="Quiz 1">}}

**Doğru** olanın doğru yanıt olduğunu göreceksiniz. Yanlış üzerine tıklarsanız, yanıtın neden yanlış olduğu ile ilgili bir açıklama görürsünüz.

{{<img src="images/tick.png" title="Tick" alt="Tick">}}

**5. adım** İfadeyi anladığınızı göstermek için **Doğru** üzerine tıklayın (testin ikinci bölümünde).

{{<img src="images/quiz-2.png" title="Quiz 2" alt="Quiz 2">}}

**Doğru** olanın doğru yanıt olduğunu göreceksiniz. Yanlış üzerine tıklarsanız, yanıtın neden yanlış olduğu ile ilgili bir açıklama görürsünüz.

{{<img src="images/tick.png" title="Tick" alt="Tick">}}

**6. adım** Aşağıdaki ekranda, OONI Probe sorunlarını belirleyip düzeltmemize yardımcı olabilecek [çökme bildirimlerini](https://ooni.org/about/data-policy#data-we-collect) paylaşmanız istenir. Çökme bildirimlerini paylaşmak ve OONI Probe uygulamasını iyileştirmemize yardımcı olmak için lütfen **Evet** üzerine tıklayın.

{{<img src="images/crash-reporting.png" title="Tick" alt="Tick">}}

**8. adım** Aşağıdaki ekranda, OONI tarafından varsayılan olarak toplanan ve yayınlanan veri türleri ile ilgili  bilgileri bulabilirsiniz (OONI Probe her çalıştırıldığında). Ekranda **[OONI Veri İlkesi](https://ooni.org/about/data-policy)** seçeneğine tıklayarak ayrıntılı bilgi alabilirsiniz.

{{<img src="images/new-default-settings.png" title="Lets Go" alt="Lets Go">}}

**8. adım** Ölçümlerinizle ilgili verileri bizimle paylaşmaya hazırsanız **Başlayalım** üzerine tıklayın.

Böylece hazırlık sürecini tamamladınız ve OONI Probe kullanmaya başlayabilirsiniz!

{{<img src="images/empty-dashboard.png" title="Dashboard" alt="Dashboard">}}

**İsteğe bağlı 9. adım** Ayarlarınızı, çökme bildirimlerini bizimle paylaşmayı **İstemiyorum** olarak değiştirmek isterseniz, **Ayarlar** üzerine tıklayın. Böylece tüm varsayılan ayarları gözden geçirip değiştirebileceğiniz OONI Probe ayarları ekranına yönlendirilirsiniz. Çökme bildirimleri varsayılan olarak gönderilmez ve yalnızca **Başlayalım** düğmesine (7. adımdaki) tıklarsanız veya ilgili ayarı el ile açarsanız gönderilir.

{{<img src="images/new-default-settings-onboarding.png" title="Default settings" alt="Default settings">}}

OONI Probe ayarları hakkında ayrıntılı bilgi almak için, bu rehberin [OONI Probe ayarlarını yapılandırma](https://ooni.org/support/ooni-probe-desktop#configuring-your-ooni-probe-settings) bölümüne bakabilirsiniz.

## OONI Probe Desktop çalıştırmak

Artık hazırlık sürecini tamamladığınıza göre, internet sansürünü ölçmek için OONI Probe uygulamasını çalıştırabilirsiniz!

OONI Probe Desktop uygulamasının **Panosu**, her birinde OONI Probe sınamaları bulunan 5 karttan oluşur:

* **Siteler kartı.** OONI [site engellemesini](https://ooni.org/support/faq/#what-websites-will-i-test-for-censorship-with-ooni-probe) ölçen [site bağlantısı sınaması](https://ooni.org/nettest/web-connectivity/).
* **Anlık ileti kartı.** [WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/) ve [Signal](https://ooni.org/nettest/signal) uygulamalarının engellenme sınamaları.
* **Sansürü aşma kartı.** OONI [Tor](https://ooni.org/nettest/tor/) ve [Psiphon](https://ooni.org/nettest/psiphon/) sansürü aşma araçlarını engelleme sınaması.
* **Başarım kartı.** [NDT hız sınaması](https://ooni.org/nettest/ndt/), [DASH video akışı başarımı sınaması](https://ooni.org/nettest/dash/) ve OONI [ara kutu](https://ooni.org/support/glossary/#middlebox) sınamaları ([HTTP üst bilgi alanı değiştirme](https://ooni.org/nettest/http-header-field-manipulation/) sınaması ve [HTTP geçersiz istek satırı](https://ooni.org/nettest/http-invalid-request-line/) sınaması).
* **Deneysel kart.** OONI ekibi tarafından geliştirilen çok sayıda yeni deneysel sınama. Bu sınamalar zamanla değişebilir. Bu sınamaların neler olduğunu [buradan](https://github.com/ooni/spec/tree/master/nettests) görebilirsiniz.

**1. adım.** İlk OONI Probe sınamalarınızı yapmak için **Çalıştır** üzerine tıklayın.

{{<img src="images/empty-dashboard.png" title="Dashboard" alt="Dashboard">}}

Böylece, OONI Probe **tüm** sınamaları (tüm kartlarda bulunan) tek seferde başlatır!

{{<img src="images/running-web-connectivity.png" title="Testing websites" alt="Testing websites">}}

{{<img src="images/running-telegram.png" title="Testing Telegram" alt="Testing Telegram">}}

{{<img src="images/running-psiphon.png" title="Testing Psiphon" alt="Testing Psiphon">}}

{{<img src="images/running-ndt.png" title="Running NDT" alt="Running NDT">}}

{{<img src="images/running-middlebox.png" title="Testing for middleboxes" alt="Testing for middleboxes">}}

OONI Probe tüm sınamaları birkaç dakika içinde tamamlamalıdır (gerçi bu, bağlı olduğunuz ağın başarımına bağlıdır ve bazı durumlarda daha uzun sürebilir). Ağınızın başarımı yeterince iyi değilse ve sınamalar çok uzun sürerse sağ üst köşedeki **Çarpı** düğmesine tıklayarak **çalışan sınamayı durdurabilirsiniz**.

{{<img src="images/stop-testing.png" title="Stop testing" alt="Stop testing">}}

Sınamayı durdurmak için **Tamam** düğmesine tıklayın.

{{<img src="images/stop-testing-ok.png" title="Stop testing" alt="Stop testing">}}

Sınamalar sona erdiğinde, OONI Probe sınama sonuçlarını otomatik olarak [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerinde yayınlar.

Sınamanızı belirli bir sınama türü (kart) ile sınırlandırmak ister misiniz? Aşağıdaki bölümlerde, bunun nasıl yapılacağı ile ilgili yönergeleri bulabilirsiniz.

### Site engellemelerini ölçmek

Yalnızca sitelerin engellenmesini ölçmek istiyorsanız, bunu şu adımları izleyerek yapabilirsiniz:

**1. adım.** OONI Probe Desktop panosundaki **Siteler** kartına tıklayın.

{{<img src="images/dashboard-websites.png" title="Dashboard" alt="Dashboard">}}

**2. adım.** Siteler kartında **Çalıştır** üzerine tıklayın.

{{<img src="images/inside-websites-card.png" title="Inside Websites card" alt="Inside Websites card">}}

Şu anda sitelerin engellenmesini ölçen OONI [site bağlantısı sınamasını](https://ooni.org/nettest/web-connectivity/) çalıştırıyorsunuz.

{{<img src="images/running-web-connectivity.png" title="Testing websites" alt="Testing websites">}}

Sınamalar sona erdiğinde, OONI Probe sınama sonuçlarını otomatik olarak [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerinde yayınlar.

**Hangi siteler sınanacak?**

Varsayılan olarak, şu 2 listede bulunan siteler sınanır:

* **[Küresel sınama listesi](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)**. Uluslararası düzeydeki siteleri (facebook.com gibi) kapsar.
* **[Ülkeye özgü sınama listesi](https://github.com/citizenlab/test-lists/tree/master/lists)**. Yalnızca OONI Probe uygulamasını çalıştırdığınız ülkedeki siteleri kapsar.

OONI Probe uygulamasını hangi ülkeden çalıştırıyor olursanız olun, [küresel sınama listesi](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) siteleri *her zaman* ölçülür.

OONI Probe, OONI Probe uygulamasını çalıştırdığınız ülkeye göre sınama için hangi [ülkeye özgü listenin](https://github.com/citizenlab/test-lists/tree/master/lists) seçileceğini otomatik olarak belirler. Örneğin, Brezilya'da OONI Probe çalıştırırsanız, küresel sınama listesindeki ve Brezilya sınama listesindeki siteleri ölçersiniz. Almanya'ya gidip OONI Probe çalıştırırsanız, küresel ve Almanya sınama listelerindeki siteler ölçülür. Ancak henüz ülkeye özgü bir sınama listesi olmayan (oluşturulmamış) bir ülkede OONI Probe çalıştırıyorsanız, yalnızca küresel listedeki siteleri ölçebilirsiniz.

[Citizen Lab sınama listelerine](https://github.com/citizenlab/test-lists/tree/master/lists) (dünya çapındaki OONI Probe kullanıcıları tarafından sınanan varsayılan siteleri içerir) katkıda bulunmak isterseniz, ilgili [belgelerimize](https://ooni.org/get-involved/contribute-test-lists) bakabilirsiniz.

**Not:** **OONI Probe, “Çalıştır” üzerine tıkladığınızda (panodan ya da siteler kartından) yalnızca 90 saniye içinde sınanabilecek kadar çok site sınanır**. Bu siteler (90 saniye içinde sınanan), [küresel](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) ve (ilgili) [ülkeye özel](https://github.com/citizenlab/test-lists/tree/master/lists) sınama listelerinden rastgele olarak seçilir. “Çalıştır” üzerine her tıkladığınızda, 90 saniye içinde farklı, rastgele seçilmiş siteleri (küresel ve ülkeye özgü sınama listelerinden) sınamış olacaksınız. Bu nedenle, “Çalıştır” üzerine ne kadar çok dokunursanız, o kadar çok siteyi sınamış olursunuz.

Daha geniş bir site seçimini sınamak ya da tümüyle farklı siteleri sınamak istiyorsanız, bu rehberin [Site testini özelleştirme](https://ooni.org/support/ooni-probe-desktop#customizing-your-website-testing) bölümüne bakabilirsiniz.

### Anlık ileti uygulamalarının engellenip engellenmediğini ölçmek

Yalnızca anlık ileti uygulamalarının engellenmesini ölçmek istiyorsanız, bunu şu adımları izleyerek yapabilirsiniz:

**1. adım.** OONI Probe Desktop panosundaki **Anlık ileti** kartına tıklayın.

{{<img src="images/dashboard-im.png" title="Dashboard" alt="Dashboard">}}

**2. adım.** Anlık ileti kartında **Çalıştır** üzerine tıklayın.

{{<img src="images/new-inside-im-card.png" title="Inside IM card" alt="Inside IM card">}}

OONI [WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/) ve [Signal](https://ooni.org/nettest/signal) sınamaları ile bu uygulamaların engellenip engellenmediğine bakıyorsunuz.

{{<img src="images/running-telegram.png" title="Testing Telegram" alt="Testing Telegram">}}

Sınamalar sona erdiğinde, OONI Probe sınama sonuçlarını otomatik olarak [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerinde yayınlar.

### Sansürü aşma araçlarının engellenmesini ölçmek

Yalnızca sansürü aşma araçlarının engellenmesini ölçmek istiyorsanız, bunu şu adımları izleyerek yapabilirsiniz:

**1. adım.** OONI Probe Desktop panosundaki **Sansürü aşma** kartına tıklayın.

{{<img src="images/dashboard-circumvention.png" title="Dashboard" alt="Dashboard">}}

**2. adım.** Sansürü aşma kartında **Çalıştır** üzerine tıklayın.

{{<img src="images/inside-circumvention-card.png" title="Inside Circumvention card" alt="Inside Circumvention card">}}

OONI [Tor](https://ooni.org/nettest/tor/) ve [Psiphon](https://ooni.org/nettest/psiphon/) sınamaları ile bu araçların engellenip engellenmediğine bakıyorsunuz.

{{<img src="images/running-psiphon.png" title="Testing Psiphon" alt="Testing Psiphon">}}

Sınamalar sona erdiğinde, OONI Probe sınama sonuçlarını otomatik olarak [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerinde yayınlar.

### Ağ başarımını ölçmek

Yalnızca ağ başarımını ölçmek istiyorsanız, bunu şu adımları izleyerek yapabilirsiniz:

**1. adım.** OONI Probe Desktop panosundaki **Başarım** kartına tıklayın.

{{<img src="images/dashboard-performance.png" title="Dashboard" alt="Dashboard">}}

**2. adım.** Başarım kartında **Çalıştır** üzerine tıklayın.

{{<img src="images/inside-performance-card.png" title="Inside Performance card" alt="Inside Performance card">}}

[NDT hız sınamasını](https://ooni.org/nettest/ndt/) ve [DASH video akışı başarımı sınamasını](https://ooni.org/nettest/dash/) çalıştırıyorsunuz.

{{<img src="images/running-ndt.png" title="Running NDT" alt="Running NDT">}}

Sınamalar sona erdiğinde, sınama sonuçlarını otomatik olarak [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerinde yayınlanır.

**Sorumluluk Reddi:** [NDT](https://ooni.org/nettest/ndt/) ve [DASH](https://ooni.org/nettest/dash/) sınamaları, [Measurement Lab (M-Lab)](https://www.measurementlab.net/) tarafından sağlanan üçüncü taraf sunucular kullanılarak yapılır. Bu sınamaları yaparsanız, M-Lab, OONI Probe ayarlarınızdan bağımsız olarak IP adresinizi araştırma amacıyla kaydeder ve yayınlar. [Gizlilik bildirimi](https://www.measurementlab.net/privacy/) aracılığıyla M-Lab veri yönetişimi hakkında ayrıntılı bilgi alın.

### Ara kutuların varlığını ölçmek

Ağları yalnızca [ara kutuların](https://ooni.org/support/glossary/#middlebox) (ve olası ağ kurcalama belirtilerinin) varlığını algılamak için ölçmek istiyorsanız, bunu şu adımları izleyerek yapabilirsiniz:

**1. adım.** OONI Probe Desktop panosundaki **Ara kutular** kartına tıklayın.

{{<img src="images/dashboard-middleboxes.png" title="Dashboard" alt="Dashboard">}}

**2. adım.** Ara kutular kartında **Çalıştır** üzerine tıklayın.

{{<img src="images/inside-middleboxes-card.png" title="Inside Middleboxes card" alt="Inside Middleboxes card">}}

OONI [ara kutu](https://ooni.org/support/glossary/#middlebox) sınamalarını ([HTTP üst bilgi alanı değiştirme](https://ooni.org/nettest/http-header-field-manipulation/) sınaması ve [HTTP geçersiz istek satırı](https://ooni.org/nettest/http-invalid-request-line/) sınaması) çalıştırıyorsunuz.

{{<img src="images/running-middlebox.png" title="Testing for middleboxes" alt="Testing for middleboxes">}}

Sınamalar sona erdiğinde, OONI Probe sınama sonuçlarını otomatik olarak [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerinde yayınlar.

### Deneysel sınamaları çalıştırmak

Yalnızca OONI ekibi tarafından geliştirilen deneysel sınamaları çalıştırmak istiyorsanız, bunu şu adımları izleyerek yapabilirsiniz:

**1. adım.** OONI Probe Desktop panosundaki **Deneysel** kartına tıklayın.

{{<img src="images/dashboard-experimental.png" title="Dashboard experimental" alt="Dashboard experimental">}}

**2. adım.** Deneysel kartında **Çalıştır** üzerine tıklayın.

{{<img src="images/inside-experimental-card.png" title="Inside Experimental card" alt="Inside Experimental card">}}

OONI ekibi tarafından geliştirilen [deneysel sınamaları](https://github.com/ooni/spec/tree/master/nettests) developed by the OONI çalıştırıyorsunuz. 

{{<img src="images/running-experimental.png" title="Running experimental" alt="Running experimental">}}

## Otomatik OONI Probe sınaması

Sınamaları el ile çalıştırmayı anımsamak yerine, OONI Probe Desktop uygulamanızın ayarlarından **otomatik sınama seçeneğini açabilirsiniz**.  Bu durumda OONI Probe sınamaları otomatik olarak çalıştırır!

Otomatik sınama seçeneğini açtığınızda, OONI Probe **arka planda günde birkaç kez tüm sınamaları çalıştırır** (bant genişliğinin yoğun kullanıldığı başarım sınamaları dışında), her sınamada ([Citizen Lab sınama listelerinden](https: //github.com/citizenlab/test-lists/tree/master/lists)) farklı birkaç siteye bakar. Uygulamanızın sınama sonuçları bölümünde yığılmayı önlemek için, bu sınamaların sonuçları neredeyse gerçek zamanlı olarak [OONI Explorer](https://explorer.ooni.org/) üzerinde otomatik olarak yayınlanır (ancak sınama sonuçları bölümünde görüntülenmez) .

Otomatik OONI Probe sınaması ile **sansür ölçümlerine düzenli olarak katkıda bulunabilirsiniz** (fazladan bir şey yapmanız gerekmeden. Bu seçeneği açmak, internet özgürlüğü topluluğunun zaman içinde ülkenizdeki sansür olaylarını izlemesini ve yakalamasını sağlar.

Otomatik OONI Probe sınamasını şu adımları izleyerek açabilirsiniz:

**1. adım.** OONI Probe Desktop yan çubuğundaki **Ayarlar** üzerine tıklayın.

{{<img src="images/new-automated-testing-disabled.png" title="Automated testing disabled" alt="Automated testing disabled">}}

Ayarların **Otomatik sınama** bölümünde otomatik OONI Probe sınamasının varsayılan olarak kapalı olduğunu göreceksiniz.

**2. adım.** Ayarlarda **Sınamalar otomatik olarak çalıştırılsın** seçeneğini açın.

{{<img src="images/new-automated-testing-enabled.png" title="Automated testing enabled" alt="Automated testing enabled">}}

Böylece otomatik OONI Probe sınamalarını açtınız! OONI Probe, sınamaları günde birkaç kez (kullanıcının bir şey yapması gerekmeden) otomatik olarak çalıştırır ve sınama sonuçlarını otomatik olarak [OONI Explorer](https://explorer.ooni.org/) üzerinde yayınlar.

Genel olarak, otomatik sınama seçeneğini açmadıysanız, ara sıra otomatik sınamayı açmak isteyip istemediğinizi soran bir açılır pencere görürsünüz.

{{<img src="images/automated-testing-pop-up.png" title="Automated testing window" alt="Automated testing window">}}

Otomatik sınamayı açmak için **Harika görünüyor** üzerine tıklayabilirsiniz. Daha sonra otomatik sınamayı açmak için bir anımsatıcı gösterilmesini isterseniz **Daha sonra anımsat** üzerine tıklayın.

## Site sınamanızı özelleştirmek

Varsayılan olarak, OONI Probe ile siteleri sınarken, [Citizen Lab sınama listelerinde](https://github.com/citizenlab/test-lists/tree/master/lists) bulunan adreslere bakarsınız. Başka bir deyişle, “Çalıştır” üzerine (OONI Probe uygulamasının panosundan ya da siteler kartından) tıklarsanız, [Citizen Lab sınama listelerinden](https://github.com/citizenlab/test-lists/tree/master/lists) alınan rastgele seçilmiş siteleri sınamış olursunuz. Bu listeler, ülke içindeki araştırmacılar ve uzmanlarla işbirliği yapılarak oluşturulmuştur. [GitHub üzerinde herkese açık olarak bulunabileceklerinden](https://github.com/citizenlab/test-lists/tree/master/lists), isteyen herkes bunları inceleyebilir, adreslere [katkıda bulunabilir](https://ooni.org/get-involved/contribute-test-lists) ve belirli adreslerin kaldırılmasını önerebilir. Ayrıca, dünya çapında çoğu OONI Probe kullanıcısı tarafından düzenli olarak sınanan siteleri içerdiklerinden, bu listeleri [incelemeyi ve güncellemeyi](https://ooni.org/get-involved/contribute-test-lists) sürdürmemiz önemlidir.

Ancak sınamanızı seçtiğiniz sitelerle sınırlamayı yeğlerseniz, bunu OONI Probe Desktop uygulaması üzerinden yapabilirsiniz.

Site sınamanızı şu yollarla özelleştirebilirsiniz:

* Sınamanızı [belirli site kategorileriyle](https://ooni.org/support/ooni-probe-desktop#testing-specific-website-categories)  sınırlayın (haber medyası ve insan hakları içerikleri gibi);
* Yalnızca [ilgilendiğiniz siteleri](https://ooni.org/support/ooni-probe-desktop#testing-websites-of-your-choice) sınayın;
* [Citizen Lab sınama listesi](https://github.com/citizenlab/test-lists/tree/master/lists) içindeki [*tüm* adresleri](https://ooni.org/support/ooni-probe-desktop#testing-all-websites-from-the-citizen-lab-test-lists) ([ilgili](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)) adresleri sınayın (90 saniye süreyle rastgele seçilen siteleri sınamak yerine);

Aşağıdaki bölümlerde, bunları nasıl yapabileceğiniz açıklanmaktadır.

### Belirli site kategorilerini sınamak

OONI Probe uygulamasında “Çalıştır” üzerine tıkladığınızda, [küresel](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) ve (ilgili) [ülkeye özel Citizen Lab sınama listeleri](https://github.com/citizenlab/test-lists/tree/master/lists) içindeki siteler sınanır.

Bu siteler [30 standartlaştırılmış kategoriye](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) göre ayrılmıştır. Bu kategoriler, haber medyası, kültür ve insan hakları sorunlarından pornografi gibi daha kışkırtıcı veya sakıncalı kategorilere kadar uzanır (ikincisi, internet servisi sağlayıcıları tarafından benimsenen sansür tekniklerinin fark edilmesini sağlayarak engellenme olasılığı daha yüksek olduğundan katılmıştır).

OONI Probe Desktop uygulamasında varsayılan olarak, daha çeşitli sitelerin sınanmasını teşvik etmek ve daha fazla site sansürünü keşfetme olasılığı artırmak için 30 kategorinin tümü açılmıştır.

Ancak, 30 site kategorisinin tümünü sınamak konusunda kendinizi rahat hissetmiyorsanız (özellikle ülkenizde yasa dışı, kışkırtıcı veya sakıncalı içerik bulunuyorsa) veya yalnızca belirli içerik türlerini (haber medyası gibi) sınamakla ilgileniyorsanız, OONI Probe sınamasını seçtiğiniz site kategorileriyle sınırlayabilirsiniz.

**1. adım.** OONI Probe Desktop uygulamasında **Ayarlar** üzerine tıklayın.

{{<img src="images/settings-website-categories.png" title="Website category settings" alt="Website category settings">}}

Ayarlarda **Sınama seçenekleri** altında, [30 site kategorisi](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) görebilirsiniz. Bu kategoriler varsayılan olarak açılmıştır.

**2. adım.** **Düzenle** düğmesine tıklayın (“Sınanacak site kategorileri” altında).

{{<img src="images/edit-website-categories.png" title="Edit website categories" alt="Edit website categories">}}

Böylece OONI Probe tarafından varsayılan olarak sınanan [30 site kategorisini](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) görebilirsiniz. Bu kategorilerin tümü açılmıştır.

{{<img src="images/website-categories.png" title="Website categories" alt="Website categories">}}

**3. adım.** Sınamak **istemediğiniz** site kategorilerini **kapatın**.

{{<img src="images/website-categories-disabled.png" title="Website categories disabled" alt="Website categories disabled">}}

Yukarıdaki örnekte 2 kategoriyi kapattık (“Pornografi” ve “Tahrik Edici Kıyafet”).

**4. adım** **Kaydet** üzerine dokunun.

Geri döndüğünüzde, artık yalnızca 28 kategorinin açık olduğunu görebilirsiniz (2 tanesi kapatıldığı için).

{{<img src="images/28-website-categories.png" title="28 website categories enabled" alt="28 website categories enabled">}}

İstediğiniz zaman bu ayarı değiştirerek, seçtiğiniz site kategorilerini açabilir ya da kapatabilirsiniz.

### Seçtiğiniz siteleri sınamak

Doğrudan ilgilendiğiniz sitelerin sınamasını şu adımları izleyerek yapabilirsiniz:

**1. adım.** OONI Probe Desktop uygulamasındaki **Siteler** kartına tıklayın.

{{<img src="images/dashboard-websites.png" title="Dashboard" alt="Dashboard">}}

**2. adım.** Siteler kartındaki **Siteleri seçin** düğmesine tıklayın.

{{<img src="images/choose-websites.png" title="Choose websites button" alt="Choose websites button">}}

Sınamak istediğiniz siteleri ekleyebileceğiniz bir ekran göreceksiniz.

{{<img src="images/choose-websites-screen.png" title="Choose websites screen" alt="Choose websites screen">}}

**3. adım.** Sınamak istediğiniz sitenin **adresini** yazın. Örnekte `https://www.facebook.com/` yazdık.

{{<img src="images/test-facebook.com.png" title="Add facebook" alt="Add facebook">}}

**Önemli:** Lütfen [adresin](https://ooni.org/support/glossary/#url) doğru yazıldığından emin olun. Yanlış yazılırsa, OONI Probe amaçlanan siteyi *sınamaz* ve bu durum yanlış sınama sonuçlarına yol açabilir.

Akılda tutulması gereken şeyler:

* Site **HTTP** ya da **HTTPS** ile mi sunuluyor? İkincisi ise, lütfen "http" sonuna bir "s" ekleyin.
* [Etki alanında](https://ooni.org/support/glossary/#domain-name) 'www' var mı? Varsa lütfen başa ekleyin.

[Adresin](https://ooni.org/support/glossary/#url) doğru yazıldığından emin olmak için **lütfen adrese normal bir tarayıcıdan erişildiğinde nasıl göründüğüne bakın**.

**4. adım.** Sınanacak başka bir site eklemek için yeni bir satır oluşturmak üzere "Site ekle" üzerine tıklayın.

**5. adım.** Sınamak istediğiniz **başka bir adresi yazın**. Örnekte `https://twitter.com/` adresini ekledik.

{{<img src="images/add-twitter.com.png" title="Add twitter" alt="Add twitter">}}

Fikrinizi değiştirirseniz ve eklediğiniz adreslerden herhangi birini kaldırmak isterseniz, bunu her adresin yanındaki kırmızı simgeye tıklayarak yapabilirsiniz.

İstediğiniz kadar adres eklemeyi sürdürebilirsiniz. Örnekte `https://www.gutenberg.org/` adresini ekledik.

{{<img src="images/add-gutenberg.png" title="Add gutenberg" alt="Add gutenberg">}}

**6. adım.** Eklediğiniz tüm siteleri sınamak için **Çalıştır** üzerine tıklayın.

Seçtiğiniz sitelerin OONI Probe tarafından sınandığını göreceksiniz!

{{<img src="images/running-gutenberg.png" title="Testing gutenberg" alt="Testing gutenberg">}}

Sınamalar sona erdiğinde, OONI Probe sınama sonuçlarını otomatik olarak [OONI Explorer](https://explorer.ooni.org/) ve [OONI API](https://api.ooni.io/) üzerinde yayınlar.

### Citizen Lab sınama listelerindeki tüm siteleri sınamak

OONI Probe Desktop uygulaması yalnızca 90 saniye içinde bağlanabileceği kadar çok siteyi sınar (varsayılan ayarlara göre).

Wi-Fi ile bağlıysanız ve ([ilgili](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)) [Citizen Lab sınama listeleri](https://github.com/citizenlab/test-lists/tree/master/lists) içindeki **tüm siteleri** tek seferde sınamak istiyorsanız, bunu şu adımları izleyerek yapabilirsiniz:

**1. adım.** OONI Probe Desktop yan çubuğundaki **Ayarlar** üzerine tıklayın.

{{<img src="images/settings-website-categories.png" title="Settings" alt="Settings">}}

Ayarlarda **Sınama seçenekleri** altında, **Sınama süresi sınırlansın** seçeneğinin (site sınamasını belirli bir süre ile sınırlar) varsayılan olarak açık olduğunu göreceksiniz.

**2. adım.** **Sınama süresi sınırlansın** seçeneğini kapatın.

{{<img src="images/limit-test-duration.png" title="Limit test duration" alt="Limit test duration">}}

Böylece site sınamasında artık bir zaman sınırı uygulanmaz. Böylece “Çalıştır” üzerine her tıkladığınızda OONI Probe uygulaması [ilgili Citizen Lab sınama listelerinde](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe) bulunan tüm siteleri sınayabilir.

{{<img src="images/limit-test-duration-disabled.png" title="Test duration disabled" alt="Test duration disabled">}}

**Alternatif olarak**: Daha uzun bir süre içinde daha fazla siteyi sınamak isterseniz (ancak zaman sınırını kapatıp tüm siteleri sınamadan), bunu şu adımları izleyerek yapabilirsiniz:

**1. adım.** Ayarlarda sınama seçenekleri bölümünde **Sınama süresi** bölümüne gidin.

{{<img src="images/test-duration.png" title="Test duration" alt="Test duration">}}

Varsayılan olarak, site sınama süresi **90 saniye** olarak ayarlanmıştır. Böylece, OONI Probe yalnızca 90 saniye içinde bağlanabileceği sayıda siteyi ([ilgili Citizen Lab test listelerinden](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)) sınayabilir.

**2. adım.** Sınama süresini değiştirmek için, OONI Probe tarafından sitelerin sınanacağı **saniye sayısını yazın**. Aşağıdaki örnekte, OONI Probe sitelerinin 6 dakika boyunca sınanması için `360` yazdık.

{{<img src="images/360-test-duration.png" title="360 for test duration" alt="360 for test duration">}}

Böylece OONI Probe Desktop uygulamanızın site sınama süresini değiştirdiniz.

## OONI Probe sınama sonuçlarına erişmek

Bir OONI Probe sınaması yaptığınız anda, sınama sonuçlarına doğrudan OONI Probe Desktop uygulamanızdan anında erişebilirsiniz.

**1. adım.** OONI Probe Desktop yan çubuğundaki **Sınama sonuçları** üzerine tıklayın.

{{<img src="images/test-results.png" title="Test Results" alt="Test Results">}}

Burada en son sınamalar başta olmak üzere zamana göre dizilmiş olarak tüm OONI Probe sınama sonuçlarınızın özetini görebilirsiniz. Bu özet, sınama sonuçlarını uygulamadaki 5 tematik karta göre gruplar (“Siteler”, “Anlık ileti”, “Sansürü aşma”, “Başarım”, “Ara kutular”).

Her tematik sınama sonuç kartında şunlarla ilgili bir özet görebilirsiniz:

* Her sınamanın çalıştırıldığı **ağ** (`AS16010` - Magticom Ltd. gibi);
* Sınamanın **tarihi ve saati** (3 Ağustos 2022, yerel saatle 13:58 gibi);
* **İlgili bulguların özeti** (3 site erişilebilir bulundu, hiçbiri engellenmemiş gibi).

Bu özet, ağlar arasında sonuçların karşılaştırılmasına yardımcı olabilir (birçok farklı ağ üzerinde sınamalar yapıyorsanız) ve bulgulara yukarıdan bakmayı sağlar.

Üst başlıkta (sınama sonuçları ekranında), aşağıdakilerin özetini paylaşırız:

* Şu ana kadar çalıştırdığınız **OONI Probe sınaması sayısı**;
* Şu ana kadar üzerinde OONI Probe çalıştırdığınız **ağ sayısı**;
* OONI Probe **veri kullanımı**.

{{<img src="images/test-results-header.png" title="Header" alt="Header">}}

Sınama sonuçları ekranı, sonuçlarla ilgili özeti sağlarken, aşağıdaki bölümlerde açıklandığı gibi daha derine inebilir ve her bir sınamayla ilgili verilere erişebilirsiniz.

### Siteler

Site sınamalarından elde edilen OONI Probe sonuçlarınıza şu adımları izleyerek erişebilirsiniz:

**1. adım.** OONI Probe Desktop sınama sonuçları ekranında **Siteler** üzerine tıklayın.

{{<img src="images/test-results-websites.png" title="Test Results" alt="Test Results">}}

Belirli bir sınama oturumunda çalıştırdığınız tüm site sınamalarının listesini göreceksiniz.

{{<img src="images/websites-tested.png" title="Websites tested " alt="Websites tested ">}}

Üst başlıkta, sitenizin sınama sonuçlarının özetini göreceksiniz. Sınanan her adresin yanında yeşil bir onay simgesi (sitenin erişilebilirliğini gösteren) ya da kırmızı bir çarpı simgesi (olası site engellemesini gösteren) bulunur.

**2. adım.** **Sınanmış bir site satırına** tıklayın (bu site sınamasında elde edilen verilere erişmek için).

{{<img src="images/facebook-measurement-page.png" title="Facebook measurement" alt="Facebook measurement">}}

Artık belirli bir site sınamasıyla ilişkili verilere erişebilirsiniz.

Yukarıdaki ölçüm sayfası, `https://www.facebook.com/` sınamasıyla ilgilidir. Bu ölçüm sayfasında, 3 Ağustos 2022 tarihinde yerel saatle 13:58 zamanında Magticom Ltd. (AS16010) üzerinden sınanan `https://www.facebook.com/` adresinin erişilebilir olduğunu görebiliriz.

Bir site için (olası) engelleme algılanırsa, ölçüm sayfasında aşağıdaki gibi ünlem işareti olan turuncu bir başlık görüntülenir.

{{<img src="images/gutenberg-measurement-page.png" title="Gutenberg measurement" alt="Gutenberg measurement">}}

Bu durumda, Vodafone Italia (AS30722) üzerinden 30 Mart 2021 tarihinde yerel saatle 15:13 zamanında sınandığında `https://www.gutenberg.org` sitesinin engelleme belirtileri (“[anomali](https://ooni.org/support/glossary/#network-anomaly)”) gösterdiğini görebiliriz. Özellikle [DNS kurcalama](https://ooni.org/support/glossary/#dns-tampering) belirtileri olduğunu görebiliriz ([OONI site bağlantısı sınamasının](https://ooni.org/nettest/web-connectivity/) sonuçlarına göre). Bu sonuçlar, Vodafone Italia tarafından DNS ile `https://www.gutenberg.org` sitesine erişimin (30 Mart 2021 tarihinde) engellemiş olabileceği anlamına gelir.

[Yanlış pozitif sonuçlar](https://ooni.org/support/glossary/#false-positive) oluşabileceğinden, [Site bağlantısı sınamamızın](https://ooni.org/nettest/web-connectivity/) tüm ölçütlerini karşılamayan sınama sonuçlarına “[anomaliler](https://ooni.org/support/faq/#how-can-i-interpret-ooni-data)” olarak (“engellendiği doğrulandı” yerine), sınanan sitenin *engellenmiş olabilir* şeklinde bir açıklama ekleriz.

Bir sitenin engellenmesi değerlendirilirken, [OONI Explorer](https://explorer.ooni.org/) (tüm sınama sonuçlarını yayınladığımız yer) üzerindeki ilgili ölçümleri (aynı ağdaki belirli bir sitenin zaman içinde sınanmasından elde edilen) **toplu** olarak değerlendirmek yararlı olur. OONI Explorer ayrıca [tüm “engellendiği onaylanmış”](https://explorer.ooni.org/search?since=2021-02-24&only=confirmed) durumlar için ölçümleri görüntüler. Burada [sayfaların engellenmesine](https://ooni.org/support/glossary/#block-page) bakarak, sitelerin engellendiğini otomatik olarak onaylarız.

### Anlık ileti

Anlık ileti uygulamalarının sınamalarından elde edilen OONI Probe sonuçlarınıza şu adımları izleyerek erişebilirsiniz:

**1. adım.** OONI Probe Desktop sınama sonuçları ekranında **Anlık ileti** üzerine tıklayın.

{{<img src="images/new-im-test-results.png" title="Test Results" alt="Test Results">}}

Böylece belirli bir sınama oturumunda sınadığınız anlık ileti uygulamalarının (WhatsApp, Facebook Messenger, Telegram, Signal) listesini göreceksiniz.

{{<img src="images/new-im-apps-tested.png" title="IM apps tested" alt="IM apps tested">}}

Üst başlıkta, anlık ileti uygulamasının sınama sonuçlarının özetini göreceksiniz. Sınanan her uygulamanın yanında yeşil bir onay simgesi (sitenin erişilebilirliğini gösteren) ya da kırmızı bir çarpı simgesi (olası uygulama engellemesini gösteren) bulunur.

**2. adım.** **Sınanmış bir uygulama satırına** tıklayın (bu uygulama sınamasında elde edilen verilere erişmek için).

{{<img src="images/whatsapp-measurement.png" title="WhatsApp measurement" alt="WhatsApp measurement">}}

Yukarıdaki ölçüm sayfasında WhatsApp sınama sonucu bulunur. Magticom Ltd. (AS16010) üzerinden 3 Ağustos 2022 tarihinde yerel saatle 12:19 zamanında sınanan WhatsApp uygulamasının erişilebilir olduğunu görebiliriz. [OONI WhatsApp sınaması](https://ooni.org/nettest/whatsapp/), WhatsApp uç noktaları, kayıt hizmeti ve internet arayüzü (`web.whatsapp.com`) ile başarılı bir şekilde bağlantı kurabildiği için bu sonuca ulaşılmıştır.

WhatsApp uygulaması için (olası) engelleme algılanırsa, bu ölçüm sayfasında ilgili bilgiler görüntülenir ([OONI WhatsApp sınamasının](https://ooni.org/nettest/whatsapp/) bulgularına göre)).

Benzer şekilde, Telegram sınama sonuçlarına OONI Probe uygulamanızdaki anlık ileti sonuçları üzerinden erişebilirsiniz.

{{<img src="images/telegram-measurement.png" title="Telegram measurement" alt="Telegram measurement">}}

Bu durumda, 3 Ağustos 2022 tarihinde yerel saatle 12:19 zamanında Magticom Ltd. (AS16010) üzerinden sınanan Telegram uygulamasının erişilebilir olduğunu görebiliriz. [OONI Telegram sınaması](https://ooni.org/nettest/telegram/), Telegram uç noktaları, kayıt hizmeti ve internet arayüzü (`web.telegram.org`) ile başarılı bir şekilde bağlantı kurabildiği için bu sonuca ulaşılmıştır.

Telegram uygulaması için (olası) engelleme algılanırsa, bu ölçüm sayfasında ilgili bilgiler görüntülenir ([OONI Telegram sınamasının](https://ooni.org/nettest/telegram/) bulgularına göre)).

Facebook Messenger sınama sonuçlarına da OONI Probe uygulamanızdaki anlık ileti sonuçları üzerinden erişebilirsiniz.

{{<img src="images/facebook-measurement-page.png" title="Facebook Messenger measurement" alt="Facebook Messenger measurement">}}

Bu durumda, 3 Ağustos 2022 tarihinde yerel saatle 13:58 zamanında Magticom Ltd. (AS16010) üzerinden sınanan Facebook Messenger uygulamasının erişilebilir olduğunu görebiliriz. [OONI Facebook Messenger sınaması](https://ooni.org/nettest/facebook-messenger/), Facebook uç noktaları ile başarılı bir şekilde bağlantı kurabildiği ve Facebook IP adreslerini çözümleyebildiği için bu sonuca ulaşılmıştır.

Facebook Messenger uygulaması için (olası) engelleme algılanırsa, bu ölçüm sayfasında ilgili bilgiler görüntülenir ([OONI Facebook Messenger sınamasının](https://ooni.org/nettest/facebook-messenger/) bulgularına göre)).

Signal sınama sonuçlarına da OONI Probe uygulamanızdaki anlık ileti sonuçları üzerinden erişebilirsiniz.

{{<img src="images/signal-measurement.png" title="Signal measurement" alt="Signal measurement">}}

Bu durumda, 3 Ağustos 2022 tarihinde yerel saatle 12:19 zamanında Magticom Ltd. (AS16010) üzerinden sınanan Signal uygulamasının erişilebilir olduğunu görebiliriz. [OONI Signal sınaması](https://ooni.org/nettest/signal/), Signal uç noktaları ile başarılı bir şekilde bağlantı kurabildiği için bu sonuca ulaşılmıştır.

Signal uygulaması için (olası) engelleme algılanırsa, bu ölçüm sayfasında ilgili bilgiler görüntülenir ([OONI Signal sınamasının](https://ooni.org/nettest/signal/) bulgularına göre)).

Her durumda, [OONI Explorer](https://explorer.ooni.org/) üzerindeki ilgili ölçümleri toplu olarak değerlendirmek yararlı olur ([yanlış pozitif sonuçları](https://ooni.org/support/glossary/#false-positive) elemekte ve engellemeyi onaylamakta yardımcı olabilir).

### Sansürü aşma

Sansürü aşma araçları sınamasından elde edilen OONI Probe sonuçlarınıza şu adımları izleyerek erişebilirsiniz:

**1. adım.** OONI Probe Desktop sınama sonuçları ekranında **Sansürü aşma** üzerine tıklayın.

{{<img src="images/test-results-circumvention.png" title="Test Results" alt="Test Results">}}

Böylece belirli bir sınama oturumunda sınadığınız sansürü aşma araçlarının (Psiphon, Tor) listesini göreceksiniz.

{{<img src="images/circumvention-tools-tested.png" title="Circumvention tools tested" alt="Circumvention tools tested">}}

Üst başlıkta, sansürü aşma aracının sınama sonuçlarının özetini göreceksiniz. Sınanan her aracın yanında yeşil bir onay simgesi (aracın erişilebilirliğini gösteren) ya da kırmızı bir çarpı simgesi (olası araç engellemesini gösteren) bulunur.

**2. adım.** **Sınanmış bir aracın satırına** tıklayın (bu aracın sınamasında elde edilen verilere erişmek için).

{{<img src="images/psiphon-measurement.png" title="Psiphon measurement" alt="Psiphon measurement">}}

Yukarıdaki ölçüm sayfasında [Psiphon](https://psiphon.ca/) sınamasının sonucu bulunur. Magticom Ltd. (AS16010) üzerinden 3 Ağustos 2022 tarihinde yerel saatle 12:17 zamanında sınanan Psiphon aracının erişilebilir olduğunu görebiliriz. [OONI Psiphon sınaması](https://ooni.org/nettest/psiphon/), Psiphon ile başarılı bir şekilde bağlantı kurabildiği için bu sonuca ulaşılmıştır.

Psiphon aracı için (olası) engelleme algılanırsa, bu ölçüm sayfasında ilgili bilgiler görüntülenir ([OONI Psiphon sınamasının](https://ooni.org/nettest/psiphon/) bulgularına göre)).

Benzer şekilde, [Tor](https://www.torproject.org/) sınama sonuçlarına OONI Probe uygulamanızdaki sansürü aşma sonuçları üzerinden erişebilirsiniz.

{{<img src="images/tor-measurement.png" title="Tor measurement" alt="Tor measurement">}}

Bu durumda, 3 Ağustos 2022 tarihinde yerel saatle 12:17 zamanında Magticom Ltd. (AS16010) üzerinden sınanan Tor aracının erişilebilir olduğunu görebiliriz. [OONI Tor sınaması](https://ooni.org/nettest/tor/), Varsayılan Tor köprülerinin çoğuyla ve Tor dizin belirleyicilerinin tümüyle başarılı bir şekilde bağlantı kurabildiği için bu sonuca ulaşılmıştır.

Tor aracı için (olası) engelleme algılanırsa, bu ölçüm sayfasında ilgili bilgiler görüntülenir ([OONI Tor sınamasının](https://ooni.org/nettest/tor/) bulgularına göre)).

Her durumda, [OONI Explorer](https://explorer.ooni.org/) üzerindeki ilgili ölçümleri toplu olarak değerlendirmek yararlı olur ([yanlış pozitif sonuçları](https://ooni.org/support/glossary/#false-positive) elemekte ve engellemeyi onaylamakta yardımcı olabilir).

### Başarım

Ağ başarımı sınamalarından elde edilen OONI Probe sonuçlarınıza şu adımları izleyerek erişebilirsiniz:

**1. adım.** OONI Probe Desktop sınama sonuçları ekranında **Başarım** üzerine tıklayın.

{{<img src="images/test-results-performance.png" title="Test Results" alt="Test Results">}}

Belirli bir sınama oturumunda çalıştırdığınız tüm başarım sınamalarının listesini göreceksiniz.

{{<img src="images/performance-tests-tested.png" title="Performance tests" alt="Performance tests">}}

Üst başlıkta, sınamanın tarihi ve saatinin yanında bu sınamaların çalıştırıldığı ülke ve ağ ile ilgili genel bir sonuç özetini bulabilirsiniz. Ana başarım bulguları da her sınama sonucunun yanında listelenir.

**2. adım.** **Bir sınama sonucu satırına** tıklayın (ilgili verilere erişmek için).

{{<img src="images/ndt-measurement.png" title="NDT measurement" alt="NDT measurement">}}

Yukarıdaki ölçüm sayfasında, bu [NDT hız sınamasının](https://ooni.org/nettest/ndt/) yapıldığını görebiliriz. Sınama yapıldığında, indirme hızı saniyede 21,4 megabit, yükleme hızı saniyede 19,7 megabit idi ve bir [M-Lab](https://www.measurementlab.net/) sunucusu ile bağlantı kurmak 147,481 milisaniye sürdü. Ortalama ping süresinin (bu M-Lab sunucusuna) 953,267 milisaniye olduğu düşünülürse, bu sonuç internet hızının iyi olduğunu gösterir.

NDT sınama sonuçlarınızı, internet servisi sağlayıcınızdan (İSS) satın aldığınız internet hizmeti tarifesi ile karşılaştırabilirsiniz.

[DASH](https://ooni.org/nettest/dash/) sınama sonuçlarına OONI Probe uygulaması üzerindeki başarım sonuçları üzerinden erişebilirsiniz.

{{<img src="images/dash-measurement.png" title="DASH measurement" alt="DASH measurement">}}

Bu durumda, 3 Ağustos 2022 tarihinde yerel saatle 12:21 zamanında Magticom Ltd. (AS16010) üzerinden bir [DASH video akış sınaması](https://ooni.org/nettest/dash/) çalıştırıldığını görebiliriz. Sınama yapıldığında, medyan bit hızı saniyede 3,6 megabit olmak üzere ara belleğe alma olmadan 480p çözünürlüğe çıkan (full HD) video akışı yapılabildi. Bu sonuçlar, akış sunucusunun ölçüm sunucusuyla aynı konumda olması durumunda kullanıcının bu ağda yalnızca düşük çözünürlüklü videolar yayınlayabileceğini gösterir.

DASH sınama sonuçlarınızı, internet servisi sağlayıcınızdan (İSS) satın aldığınız internet hizmeti tarifesi ile karşılaştırabilirsiniz.

### Ara kutular

Ara kutu, paket iletme dışındaki amaçlar için trafiği dönüştüren, inceleyen, süzen veya başka şekilde değiştiren bir bilgisayar ağ aygıtıdır. Dünyanın dört bir yanındaki birçok İnternet Servis Sağlayıcısı (İSS), ağ başarımını iyileştirmek, kullanıcıların sitelere daha hızlı erişmesini sağlamak ve bir dizi başka ağ işlemleri amacıyla ara kutuları kullanır. Ara kutular bazen internet sansürü ve/veya gözetimi uygulamak için de kullanılır.

Ağ kurcalama sınamasından ([ara kutuların](https://ooni.org/support/glossary/#middlebox)) varlığını algılamak amacıyla) elde edilen OONI Probe sonuçlarınıza şu adımları izleyerek erişebilirsiniz:

**1. adım.** OONI Probe Desktop sınama sonuçları ekranında **Ara kutular** üzerine tıklayın.

{{<img src="images/test-results-middleboxes.png" title="Test Results" alt="Test Results">}}

Böylece belirli bir sınama oturumunda çalıştırdığınız ara kutu sınamalarının listesini göreceksiniz ([HTTP geçersiz istek satırı sınaması](https://ooni.org/nettest/http-invalid-request-line/) ve [HTTP üst bilgi alanı değiştirme sınaması](https://ooni.org/nettest/http-header-field-manipulation/)).

{{<img src="images/middleboxes-tested.png" title="Middlebox tests" alt="Middlebox tests">}}

Üst başlıkta, sınamanın tarihi ve saati ile çalıştırıldığı ülke ve ağ bilgilerinin yanında sonuçlarını (bu durumda herhangi bir ara kutu algılanmadı) özetini görebilirsiniz.

**2. adım.** **Bir sınama sonucu satırına** tıklayın (ilgili verilere erişmek için).

{{<img src="images/http-invalid-request-line-measurement.png" title="HTTP Invalid Request Line measurement" alt="HTTP Invalid Request Line measurement">}}

Yukarıdaki durumda, [HTTP geçersiz istek satırı](https://ooni.org/nettest/http-invalid-request-line/) sınamasının Magticom Ltd. (AS16010) üzerinden 3 Ağustos 2022 tarihinde yerel saat ile 12:20 zamanında çalıştırıldığını görebiliriz. Bu sınama yapıldığında, standart HTTP bağlantı noktasını dinleyen bir yankı hizmetine geçersiz bir HTTP istek satırı (geçersiz bir HTTP sürüm numarası, geçersiz bir alan numarası ve büyük bir istek yöntemi içeren) gönderildi. Yankı hizmeti (aldığı tüm verileri basitçe geri gönderen bir hata ayıklama ve ölçüm aracı), geçersiz HTTP istek satırını aynen aldığı gibi bize geri gönderdi. Bu sonuç, sınanan ağda görünür bir ara kutu olmadığını veya trafiğin değiştirilmediğini gösterir.

Bununla birlikte, sınanan ağda bir ara kutu varsa, HTTP geçersiz istek satırı ara kutu tarafından yakalanır ve büyük olasılıkla yankı hizmeti tarafından bize geri gönderilecek bir hata iletisini tetikler. Bu tür hatalar, sınanan ağda trafiğin değiştirilmesi için bir yazılımın kullanıldığını gösterir. Ancak bu yazılımın ne olduğu her zaman açık değildir.

Benzer şekilde OONI [HTTP üst bilgi değişikliği](https://ooni.org/nettest/http-header-field-manipulation/) sınamasının sonuçlarına OONI Probe uygulamanızın ara kutular sonuçları üzerinden erişebilirsiniz.

{{<img src="images/http-header-field-manipulation-measurement.png" title="HTTP Header Field Manipulation measurement" alt="HTTP Header Field Manipulation measurement">}}

Yukarıdaki durumda, Magticom Ltd. (AS16010) üzerinde 3 Ağustos 2022 tasrihinde yerel saat ile 12:20 zamanında, yapılan sınamada, bir arka uç kontrol sunucusuna (aldığı tüm verileri geri gönderen) yönelik bir [HTTP isteği](https://ooni.org/support/glossary/#http-request) taklit edildi. Gönderilen [HTTP üst bilgilerinde](https://ooni.org/support/glossary/#http-header) büyük harf kullanımında farklılıklar (standart olmayan HTTP üst bilgileri gibi) yapıldı. HTTP üst bilgilerini tam olarak gönderdiğimiz gibi geri aldığımız için, sınanan ağda görünür bir ara kutu veya trafik değişikliği olmadığı söylenebilir.

Bununla birlikte, sınanan ağda bir ara kutu varsa, gönderdiğimiz geçersiz üst bilgileri normalleştirmiş veya fazladan üst bilgiler eklemiş olabilir. Bir arka uç kontrol sunucusundan gönderdiğimiz ve aldığımız HTTP üst bilgilerinin aynı olup olmadığına bağlı olarak, sınanan ağda bir ara kutunun olup olmadığını değerlendirebiliriz.

## OONI Probe sınama sonuçlarını paylaşmak

Her bir OONI Probe sınama sonucuyla şunları yapmanızı sağlayan özelliklere erişebilirsiniz:

* **Ham ölçüm verilerine** (bu sınama sonucunun) erişebilir, kopyalayabilir ve paylaşabilirsiniz;
* [OONI Explorer](https://explorer.ooni.org/) üzerinden **Ölçüme** erişebilirsiniz (burada otomatik olarak yayınlanır) ve kişilerinizle paylaşabilirsiniz.

**1. adım.** Herhangi bir OONI Probe sınama sonucuna erişin (OONI Probe sınama sonuçlarını nasıl bulacağınızla ilgili ayrıntılar için lütfen bu rehberin önceki bölümüne bakın).

{{<img src="images/facebook-measurement-page.png" title="Measurement" alt="Measurement">}}

Aşağıdaki bölümlerde her özelliğin ayrıntılarına ineceğiz.

### Ham veriler

Her OONI Probe sınaması sonucunda bulguların özeti sunulur. Her sınama sonucunun dayandığı gerçek verilere (yani ham ölçüm verileri), her sınama sonucu sayfasındaki **Veriler** düğmesi ile erişilebilir.

Diğer bir deyişle, "https://www.facebook.com" adresini sınadıysanız, sınama sonucu sayfasında bulguların özeti sunulur (Erişilebilir gibi). Ancak ağ ölçüm verileri sınamanın ayrıntılarını verir. Örneğin, siteye erişilemiyorsa, sitenin nasıl ve neden engelleniyor olabileceğini gösterir.

Ham ölçüm verilerine erişebilmek şu nedenlerle yararlıdır:

* Olası engellemenin **kanıtı** olarak sunulabilecek teknik ayrıntılar sağlar;
* Bir sitenin gerçekten engellenip engellenmediğini veya sınanmasının sansürle ilgili olmayan başka nedenlerle bir [anomaliyi](https://ooni.org/support/glossary/#network-anomaly) tetikleyip tetiklemediğini belirlemeye yardımcı olabilir ([yanlış pozitif sonuçları](https://ooni.org/support/glossary/#false-positive) elemek gibi).

Ham ölçüm verilerine şu adımları izleyerek erişebilir ve paylaşabilirsiniz:

**1. adım.** Bir OONI Probe sınama sonucu sayfasında **Veriler** düğmesine tıklayın.

{{<img src="images/data-button.png" title="Data button" alt="Data button">}}

Böylece seçtiğiniz OONI Probe sınama sonucu ile ilişkili ham ölçüm verilerine erişmiş oldunuz.

{{<img src="images/raw-data.png" title="Raw data" alt="Raw data">}}

Verilerin görünümünü genişletmek için oklara (`test_keys`yanındaki gibi) tıklayabilirsiniz.

**2. adım.** Ham verileri kopyalamak ve paylaşmak için (örneğin yorumlanmasına yardımcı olabilecek teknoloji uzmanlarıyla), verilerin başındaki **kopyala simgesine** tıklayın (aşağıda gösterildiği gibi `root` satırında).

{{<img src="images/copy-raw-data.png" title="Copy raw data" alt="Copy raw data">}}

Böylece ham verileri kopyalamış oldunuz. Artık istediğiniz kişilerle paylaşabilirsiniz.

### Ölçümünüze OONI Explorer üzerinden erişmek

[OONI Explorer](https://explorer.ooni.org/) üzerinde OONI Probe sınama sonucunuzu görüntülemek veya daha sonra kişilerinizle paylaşabileceğiniz ve bağlantı kurabileceğiniz (örneğin, bir araştırma raporu veya tweet ile) bir ölçüm bağlantısına erişmek isteyebilirsiniz.

**1. adım.** Bir OONI Probe sınama sonucu sayfasında **OONI Explorer üzerinde görüntüle** düğmesine tıklayın.

{{<img src="images/show-in-ooni-explorer-button.png" title="Show in OONI Explorer button" alt="Show in OONI Explorer button">}}

İlgili OONI Probe sınama sonucu tarayıcınızda doğrudan [OONI Explorer](https://explorer.ooni.org/) üzerinde açılır. Örneğin, yukarıda bahsedilen facebook ölçümü için ilgili [sayfa budur](https://explorer.ooni.org/measurement/20220803T095857Z_webconnectivity_GE_16010_n1_vTthHQGwVlhSDc19?input=https://www.facebook.com/).

{{<img src="images/facebook-ooni-explorer.png" title="Measurement viewed on OONI Explorer" alt="Measurement viewed on OONI Explorer">}}

Böyelce [OONI Explorer](https://explorer.ooni.org/) üzerinden OONI Probe ölçümünüze erişebilirsiniz. Bu ölçüm sayfasını aşağı kaydırırsanız, ham ölçüm verilerini de görebilirsiniz. Artık o ölçüm sayfasının adreisni paylaşarak o ölçümün bağlantısını verebilir veya bu ölçümü paylaşabilirsiniz.

## OONI Probe ayarlarınızı yapılandırmak

Ayarları değiştirerek OONI Probe kullanımınızı özelleştirebilirsiniz.

**1. adım.** OONI Probe Desktop uygulamasının yan çubuğundaki **Ayarlar** üzerine tıklayın.

{{<img src="images/settings-website-categories.png" title="Settings" alt="Settings">}}

Böylece OONI Probe Desktop uygulamasının tüm ayarlarını görebilirsiniz.

Aşağıdaki bölümlerde her ayarın üzerinden geçeceğiz.

### Dil

[Localization Lab](https://www.localizationlab.org/) topluluğunun desteği sayesinde, OONI Probe uygulamaları birçok dile çevrildi.

OONI Probe Desktop uygulamasının dilini şu adımları izleyerek değiştirebilirsiniz:

**1. adım.** Ayarlar altında **Dil** bölümündeki açılır menüye tıklayın.

{{<img src="images/languages.png" title="Languages" alt="Languages">}}

**2. adım.** Açılan menüden bir dil seçin.

Böylece OONI Probe Desktop uygulamanızı seçtiğiniz dilde kullanabilirsiniz.

Bir OONI Probe çevirisini değerlendirmek ve/veya katkıda bulunmak istiyorsanız, lütfen [Transifex üzerinde bize katılın](https://www.transifex.com/otf/ooniprobe/).

### Sınama seçenekleri

Site sınaması ayarları, bu rehberin önceki bölümlerinde ele alınmıştır. Lütfen ”[Site sınamasını özelleştirme](https://ooni.org/support/ooni-probe-desktop#customizing-your-website-testing)” bölümüne bakın.

### Otomatik sınama

Otomatik OONI Probe sınaması ayarları, bu rehberin önceki bölümlerinde ele alınmıştır. Lütfen "[Otomatik OONI Probe sınaması](https://ooni.org/support/ooni-probe-desktop#automated-ooni-probe-testing)" bölümüne bakın.

### Kişisel gizlilik

OONI Probe ayarlarının Gizlilik bölümü, OONI Probe sınama sonuçlarının yayınlanması ve [çökme raporlarının](https://ooni.org/about/data-policy) sunulmasıyla ilgilidir.

{{<img src="images/new-privacy-settings-enabled.png" title="Privacy settings enabled" alt="Privacy settings enabled">}}

Varsayılan olarak, OONI Probe sınama sonuçlarınızın otomatik olarak yayınlanması açıkken çökme bildirimlerinin gönderilmesi kapalıdır (ilk katılım sırasında açmadıysanız).

İnternet sansürünün görünürlüğünü artırmaya yardımcı olabileceği ve internet özgürlüğü topluluğunun araştırma ve savunma çabalarını destekleyebileceği için **OONI Probe sınama sonuçlarının yayınlanmasını öneriyoruz**.

OONI Probe sınama sonuçlarınızı yayınlarsanız, bu sonuçlarda şu veriler bulunur:

* Ölçümün tarihi ve saati.
* Ülke kodu (Türkiye için `TR`gibi);
* Ağ bilgileri: [ASN](https://ooni.org/support/glossary/#asn) (Magticom Ltd. için `AS16010` gibi); 
* Ağ ölçümü verileri ([OONI Probe sınaması](https://ooni.org/nettest/) ile ilişkili).

Ayrıntılı bilgi almak için [veri ilkemize](https://ooni.org/about/data-policy) bakabilirsiniz.

Çökme bildirimlerini bizimle paylaşmayı seçerseniz, hataları belirlemek ve OONI Probe uygulamasının başarımını iyileştirmek için gerekli olan bilgileri paylaşmış olursunuz. Bu çökme bildirimlerinde, OONI Probe yazılımının sürümü ve belirli bir OONI Probe özelliğinin neden ve nasıl beklendiği gibi çalışmadığı ile ilgili bilgiler bulunur.

İlgili ayarlardan OONI Probe sınama sonuçlarınızı yayınlamayı ve/veya çökme bildirimlerini bizimle paylaşmayı kapatabilirsiniz.

{{<img src="images/new-privacy-settings-disabled.png" title="Privacy settings disabled" alt="Privacy settings disabled">}}

Bu rehberi okuduğunuz ve OONI Probe kullandığınız için teşekkür ederiz!
