---
title: "مصر تحجب بي بي سي والحرة: التوسع في الرقابة على الإعلام وسط الاضطرابات السياسية"
author: "Ramy Raoof, Mohamed El-Taher, Mohamed Tita, Arturo Filastò, Maria Xynou"
date: "2019-09-26"
tags: ["egypt", "censorship", "country-eg", "theme-news_media"]
categories: ["report"]
---

في نهاية الأسبوع الماضي ،<a href="https://www.bbc.com/news/world-middle-east-49786367"> اندلعت الاحتجاجات في مصر رداً</a> على مزاعم الفساد ضد حكومة الرئيس عبد الفتاح السيسي.

كانت الاحتجاجات نادرة منذ تولي الرئيس السيسي السلطة في عام 2014 ، ولكن وسط سياسات التقشف الاقتصادي وادعاءات الفساد الأخيرة ، خرج مئات المصريين إلى الشوارع. <a href="https://netblocks.org/reports/facebook-messenger-social-media-and-news-sites-disrupted-in-egypt-amid-protests-eA1Jd7Bp">أفيد لاحقًا</a> أن موقع بي بي سي و موقع الحرة الإخباري الذي تموله الولايات المتحدة كانا من بين الخدمات التي حُجبت. <a href="https://cpj.org/2019/09/egypt-authorities-arrest-3-journalists-block-websi.php">وذكر رئيس المجلس الأعلى لتنظيم الإعلام والصحافة </a>في مصر أن بي بي سي ومواقع الأخبار الأخرى ربما حُجبت بسبب تغطيتها "غير الدقيقة" للاحتجاجات.

كجزء من حملة على الاحتجاجات (<a href="https://www.theguardian.com/world/2019/sep/26/over-1900-arrested-as-egypt-braces-for-more-protests">يُتوقع حدوث المزيد </a>من الاحتجاجات غدًا ، 27 سبتمبر 2019) ،<a href="https://www.amnesty.org/en/latest/news/2019/09/egypt-world-leaders-must-act-to-stop-president-al-sisis-repressive-crackdown/"> ذُكر أن قوات الأمن المصرية اعتقلت ما لا يقل عن 59 متظاهراً</a> (أفاد المركز المصري للحقوق الاقتصادية والاجتماعية بأن مئات الأفراد الذين لهم صلة بالاحتجاجات قد اعتُقلوا خلال الأسبوع الماضي).

لسوء الحظ ، فإن الرقابة على الإعلام منتشرة في مصر ، كما وُثّقت <a href="https://ooni.io/documents/Egypt-Internet-Censorship-AFTE-OONI-2018-07.pdf"> من خلال دراساتنا السابق</a>ة. تمكنّا من فحص القياسات الخاصة<a href="https://explorer.ooni.org/search?until=2019-09-26&amp;domain=www.bbc.com&amp;probe_cc=EG"> باختبار bbc.com </a>و <a href="https://explorer.ooni.org/search?until=2019-09-26&amp;domain=www.alhurra.com&amp;probe_cc=EG">alhurra.com</a>، ذلك بفضل اختبار<a href="https://ooni.io/install/"> OONI Probe</a> المستمر في مصر. كما دعمنا نتائج OONI من خلال اختبارات curl يدوي أُجري في مصر على شبكة  المصرية للاتصالات (AS8452) بمساعدة شركائنا المحليين.

في هذا التقرير ، <a href="https://explorer.ooni.org/search?until=2019-09-26&amp;domain=www.bbc.com&amp;probe_cc=EG">نشارك بيانات قياسات OONI  لاختبارات bbc.com و alhurra.com </a>، ونشرح كيف تم تنفيذ الحجب على المستوى التقني. نشارك أيضًا بعض التوصيات حول ما يمكن لمالكي مواقع الويب القيام به لتحسين مقاومة مواقعهم للرقابة على الإنترنت.
## الفهرس

* بي بي سي
* قناة الحرة
* خاتمة

## بي بي سي
<a href="https://explorer.ooni.org/search?until=2019-09-26&amp;probe_cc=EG&amp;test_name=web_connectivity">تُجمع قياسات</a> بي بي سي ومئات المواقع الإعلامية الأخرى المُعرّضة للرقابة في مصر بانتظام ،إلى حد ما، من خلال استخدام<a href="https://ooni.io/install/"> OONI Probe</a>. على وجه التحديد ، يتضمن OONI Probe اختبارًا يسمى <a href="https://ooni.io/nettest/web-connectivity/">Web Connectivity</a> - مصممًا لقياس حظر DNS و TCP / IP و HTTP لمواقع الويب. كشف هذا الاختبار <a href="https://ooni.io/documents/Egypt-Internet-Censorship-AFTE-OONI-2018-07.pdf">من قبل عن حجب مئات المواقع الإعلامية في مصر</a>.

اعتبارًا من 22 سبتمبر 2019 (بالتزامن مع احتجاجات مصر في نهاية الأسبوع الماضي) ، بدأت قياسات OONI<a href="https://explorer.ooni.org/search?until=2019-09-26&amp;domain=www.bbc.com&amp;probe_cc=EG"> تُظهر علامات تشويش عند اختبار موقع bbc.com في مصر.</a>

على وجه الخصوص ، نلاحظ أن العديد من القياسات أسفرت عن أخطاء TLS على<a href="https://explorer.ooni.org/measurement/20190925T123505Z_AS8452_AengvAPQR19gEwSJlbI6QNIr2tgysRD5Apb8nCxXlHtuyHh0aF?input=http%3A%2F%2Fwww.bbc.com%2Fnews"> المصرية للاتصالات (AS8452)</a> و <a href="https://explorer.ooni.org/measurement/20190922T172806Z_AS37069_7bnh3ifWTQXLc1XBrgp9HuqnEW5OplnWMbjQ0I5h8iVZiLdPoc?input=https%3A%2F%2Fwww.bbc.com%2Fnews">أورانج مصر (AS37069)</a>. القياسات الأخرى التي جُمعت من<a href="https://explorer.ooni.org/measurement/20190922T105606Z_AS36935_hRGq3a52FYoCY423rzA0QxLZ5EWfKYcvPBkFf363IoX4u1dvyZ?input=https://www.bbc.com"> شركة فودافون مصر (AS36935)</a> أظهرت timeout error  عند محاولة جلب محتوى الموقع.

لدعم هذه النتائج بشكل أكبر ، قمنا بالتنسيق مع مجموعات في مصر لجمع المزيد من البيانات عبر الاختبارات اليدوية (التي أجريت على المصرية للاتصالات).

```
curl -v --connect-to ::www.kernel.org: https://www.bbc.com/arabic
* Connecting to hostname: www.kernel.org
* Trying 136.144.49.103:443...
* TCP_NODELAY set
* Connected to www.kernel.org (136.144.49.103) port 443 (#0)
* Initializing NSS with certpath: sql:/etc/pki/nssdb
* CAfile: none
CApath: none
* loaded libnssckbi.so
* NSS error -5938 (PR_END_OF_FILE_ERROR)
* Encountered end of file
* Closing connection 0
curl: (35) Encountered end of file
```


يمكننا أن نرى أنه حتى عند الاتصال بخادم غير ذي صلة (www.kernel.org) ، ولكن عند محاولة مصافحة TLS لـ www.bbc.com ، قُطع الاتصال أثناء المصافحة.

من ناحية أخرى ، عندما نتصل بـ bbc.com مباشرة ، لكننا نستخدم www.kernel.org في مصافحة TLS ، يمر الاتصال ، كما هو واضح في المقتطف التالي من curl request:

```
curl -v --connect-to :: www.bbc.com: https://www.kernel.org
*   Trying 151.101.240.81:80...
* TCP_NODELAY set
* Connected to www.bbc.com (151.101.240.81) port 80 (#0)
> GET / HTTP/1.1
> Host: www.bbc.com
> User-Agent: curl/7.66.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 301 Moved Permanently
< Server: Apache
< x-bbc-no-scheme-rewrite: 1
< X-Cache-Action: HIT
< Cache-Control: max-age=3600
< X-Cache-Age: 2747
< Content-Type: text/html; charset=iso-8859-1
< Location: https://www.bbc.com/
< X-PAL-Host: pal149.back.live.telhc.local:80
< Content-Length: 228
< Accept-Ranges: bytes
< Date: Wed, 25 Sep 2019 16:52:23 GMT
< Via: 1.1 varnish
< Age: 2942
< Connection: keep-alive
< X-Fastly-Cache-Status: HIT
< X-Served-By: cache-mxp19848-MXP
< X-Cache: HIT
< X-Cache-Hits: 15, 21
< X-Timer: S1569430343.142910,VS0,VE0
< Vary: Accept-Encoding
< 
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>301 Moved Permanently</title>
</head><body>
<h1>Moved Permanently</h1>
<p>The document has moved <a href="https://www.bbc.com/">here</a>.</p>
</body></html>
* Connection #0 to host www.bbc.com left intact
*   Trying 136.144.49.103:443...
* TCP_NODELAY set
* Connected to www.kernel.org (136.144.49.103) port 443 (#1)
* Initializing NSS with certpath: sql:/etc/pki/nssdb
*   CAfile: none
  CApath: none
* loaded libnssckbi.so
* ALPN, server accepted to use http/1.1
* SSL connection using TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
* Server certificate:
* 	subject: CN=kernel.org,OU=PositiveSSL Multi-Domain,OU=Domain Control Validated
* 	start date: Oct 11 00:00:00 2016 GMT
* 	expire date: Oct 11 23:59:59 2019 GMT
* 	common name: kernel.org
* 	issuer: CN=Gandi Standard SSL CA 2,O=Gandi,L=Paris,ST=Paris,C=FR
> GET / HTTP/1.1
> Host: www.kernel.org
> User-Agent: curl/7.66.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Server: nginx
< Date: Wed, 25 Sep 2019 16:54:58 GMT
< Content-Type: text/html
< Content-Length: 16613
< Last-Modified: Tue, 24 Sep 2019 19:55:34 GMT
< Connection: keep-alive
< X-Frame-Options: DENY
< X-Content-Type-Options: nosniff
< Strict-Transport-Security: max-age=15768001
< Accept-Ranges: bytes
<
<!DOCTYPE html>
<html lang="en">
<head>
[ SNIP ]
```

يعد هذا مؤشراً قوياً على وجود شكل من أشكال تقنية فحص الحزم العميقة (DPI) التي تستشم TLS والتي من المرجح أن تكون بصمة حقل SNI الخاص بمصافحة TLS.
## قناة الحرة
في حالة Alhurra ، نلاحظ أيضًا أنه اعتبارًا من 22 سبتمبر 2019 ، فشلت محاولات الاتصال بالموقع بشكل ثابت ، كما هو موضح في الرسم البياني التالي.

![Chart: Blocking of BBC and Alhurra in Egypt](/post/egypt-internet-censorship/eg-bbc-alhurra-2019.png)

المصدر: قياسات OONI: مصر ، <a href="https://explorer.ooni.org/search%D8%9Funtil=2019-09-26&amp;probe_cc=EG">https://explorer.ooni.org/search؟until=2019-09-26&amp;probe_cc=EG</a>

تعرض جميع قياسات OONI التي جُمعت في 22 سبتمبر 2019 نفس النوع من http_experiment_failure (connection_reset) ، مما يشير بقوة إلى أن موقع alhurra.com قد حُجب. نلاحظ هذه الحالات الشاذة على شبكتين تم اختبارهما:<a href="https://explorer.ooni.org/search?until=2019-09-26&amp;domain=www.alhurra.com&amp;probe_cc=EG&amp;probe_asn=AS36935&amp;test_name=web_connectivity"> فودافون مصر (AS36935)</a> و <a href="https://explorer.ooni.org/search?until=2019-09-26&amp;domain=www.alhurra.com&amp;probe_cc=EG&amp;probe_asn=AS8452&amp;test_name=web_connectivity">المصرية للاتصالات (AS8452).</a>

لتأكيد نتائج قياس OONI وفحصها أكثر ، أجرينا أيضًا اختبارات يدوية من شبكة المصرية للاتصالات (AS8452) وتوصلنا إلى استنتاجات مشابهة جدًا لتلك الخاصة بموقع bbc.com.

يؤدي الاتصال بخادم غير ذي صلة ، ولكن باستخدام نطاق www.alhurra.com في مصافحة TLS ، إلى اتصال غير ناجح ، كما هو موضح أدناه.


```
curl -v --connect-to ::www.kernel.org: https://www.alhurra.com/
* Connecting to hostname: www.kernel.org
*   Trying 136.144.49.103:443...
* TCP_NODELAY set
* Connected to www.kernel.org (136.144.49.103) port 443 (#0)
* Initializing NSS with certpath: sql:/etc/pki/nssdb
*   CAfile: none
  CApath: none
* loaded libnssckbi.so
* NSS error -5938 (PR_END_OF_FILE_ERROR)
* Encountered end of file
* Closing connection 0
curl: (35) Encountered end of file
```


على العكس ، نحن قادرون على إنشاء اتصال بـ www.alhurra.com إذا استخدمنا نطاقا مختلفًا في مصافحة TLS.



```
curl -v --connect-to :: www.alhurra.com: https://www.kernel.org
*   Trying 23.40.114.89:80...
* TCP_NODELAY set
* Connected to www.alhurra.com (23.40.114.89) port 80 (#0)
> GET / HTTP/1.1
> Host: www.alhurra.com
> User-Agent: curl/7.66.0
> Accept: */*
> 
* Recv failure: Connection reset by peer
* Closing connection 0
curl: (56) Recv failure: Connection reset by peer
*   Trying 136.144.49.103:443...
* TCP_NODELAY set
* Connected to www.kernel.org (136.144.49.103) port 443 (#1)
* Initializing NSS with certpath: sql:/etc/pki/nssdb
*   CAfile: none
  CApath: none
* loaded libnssckbi.so
* ALPN, server accepted to use http/1.1
* SSL connection using TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
* Server certificate:
* 	subject: CN=kernel.org,OU=PositiveSSL Multi-Domain,OU=Domain Control Validated
* 	start date: Oct 11 00:00:00 2016 GMT
* 	expire date: Oct 11 23:59:59 2019 GMT
* 	common name: kernel.org
* 	issuer: CN=Gandi Standard SSL CA 2,O=Gandi,L=Paris,ST=Paris,C=FR
> GET / HTTP/1.1
> Host: www.kernel.org
> User-Agent: curl/7.66.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Server: nginx
< Date: Wed, 25 Sep 2019 17:09:15 GMT
< Content-Type: text/html
< Content-Length: 16613
< Last-Modified: Tue, 24 Sep 2019 19:55:34 GMT
< Connection: keep-alive
< X-Frame-Options: DENY
< X-Content-Type-Options: nosniff
< Strict-Transport-Security: max-age=15768001
< Accept-Ranges: bytes
< 
<!DOCTYPE html>
<html lang="en">
<head>
        <title>The Linux Kernel Archives</title>
```

تقدم هذه النتائج مؤشرا قويا على أن الحجب يحدث عن طريق تصفية SNI.
## خاتمة
وسط الاحتجاجات ، حُجب كل من bbc.com و alhurra.com في مصر في 22 سبتمبر 2019 ، وذلك طبقا لقياسات OONI واختبار curl اليدوي.

خلال التحقيقات السابقة ، <a href="https://ooni.io/documents/Egypt-Internet-Censorship-AFTE-OONI-2018-07.pdf">وجدنا</a> أن مزودي خدمة الإنترنت المصريين يعيدون ضبط الاتصالات (reset connection) من خلال استخدام معدات الفحص الدقيق للحزم (DPI). يشير الاختبار اليدوي الذي تم إجراؤه على bbc.com و alhurra.com إلى أنه من المُرجّح أن الرقابة على الإنترنت (على الأقل في TEData) تُنفّذ عن طريق الفحص الدقيق للحزم (DPI).

استنادًا إلى النتائج التي جمعناها ، يبدو أن bbc.com و allhurra.com يمكنهما الاستفادة من دعم SNI المُعمّى على خوادمهما الخلفية. بالقيام بذلك ، قد يكون من الممكن التحايل على الحجب ، على افتراض أن المتصفح المُستخدم يدعم هذه الميزة (يدعمها Firefox حاليًا).

نظرً<a href="https://www.theguardian.com/world/2019/sep/26/over-1900-arrested-as-egypt-braces-for-more-protests">ا للتخطيط لمزيد من الاحتجاجات غدًا</a> ، 27 سبتمبر 2019 ، هناك خطر من احتمال حدوث المزيد من الرقابة في مصر. يمكن التوسع في هذه الدراسة من خلال استخدام<a href="https://ooni.io/install/"> OONI Probe</a> لمزيد من الاختبارات. و يمكن استخدام <a href="https://run.ooni.io/">OONI Run</a> لإنشاء روابط قابلة للمشاركة تتيح الاختبار المنسق لمواقع محددة. تُنشر <a href="https://ooni.io/data/">جميع قياسات شبكة OONI</a> بشكل مفتوح يوميًا.

نشكر جميع مستخدمي OONI Probe في مصر الذين جعلوا هذه الدراسة ممكنة.
