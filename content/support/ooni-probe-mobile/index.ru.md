---
title: "Инструкция по использованию приложения OONI Probe Mobile "
description: "Инструкция по использованию приложения OONI Probe Mobile "
---

**Последнее обновление:** 6 сентября 2022

**Версия OONI Probe Mobile:** 3.7.1

{{<img src="images/image49.png" title="Measure Internet Censorship" alt="Measure Internet Censorship">}}

OONI Probe – это [бесплатное оупенсорсное приложение](https://github.com/ooni/probe), с помощью которого вы можете отслеживать интернет-цензуру и другие формы вмешательства в ваше интернет-соединение. В этом документе содержится **пошаговая инструкция** по установке, запуску и настройкам [OONI Probe mobile app](https://ooni.org/install/mobile). 

**С помощью этой инструкции вы научитесь:**

* Использовать OONI Probe Mobile чтобы: 
  * Проверить блокировки сайтов
  * Протестировать блокировку мессенджеров
  * Проверить блокировки сайтов
  * Тестировать блокировку мессенджеров
* Создавать собственные списки сайтов для тестирования с помощью OONI Probe 
* Получать доступ к результатам ваших тестов и делиться этими результатами
* Настраивать приложение OONI Probe 

Мы надеемся, что после прочтения этой инструкции, вы почувствуете уверенность и желание делиться вашими знаниями об OONI Probe с окружающими! 

Это содержание должно помочь вам сориентироваться внутри инструкции и найти нужные вам разделы. 

{{<table-of-contents>}}

## Знакомство с OONI Probe

OONI Probe – это [бесплатное оупенсорсное приложение](https://github.com/ooni/probe), с помощью которого вы можете отслеживать интернет-цензуру и другие формы вмешательства в ваше интернет-соединение. Это приложение разрабатывается с 2012 года [Open Observatory of Network Interference (OONI)](https://ooni.org/), некоммерческим проектом, который изначально был частью [Tor Project](https://www.torproject.org/).

С помощью приложения OONI Probe ([для мобильного](https://ooni.org/install/mobile) и [для рабочего стола](https://ooni.org/install/desktop)), вы можете [тестировать свое соединение](https://ooni.org/nettest/), чтобы проверить:

* Присутствие блокировок [сайтов](https://ooni.org/nettest/web-connectivity/);
* Присутствие блокировок мессенджеров ([WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/), [Signal](https://ooni.org/nettest/signal));
* Эффективность инструментов обхода блокировок ([Tor](https://ooni.org/nettest/tor/), [Tor Snowflake](https://ooni.org/nettest/tor-snowflake/), [Psiphon](https://ooni.org/nettest/psiphon/));
* Присутствие ТСПУ ([middleboxes](https://ooni.org/nettest/http-header-field-manipulation/)) в вашей сети, которые могли бы быть ответственны за цензуру и/или слежку;
* [Скорость и качество](https://ooni.org/nettest/ndt/) вашего соединения и [качество видео-стриминга](https://ooni.org/nettest/dash/).

Как только вы запускаете OONI Probe, результаты ваших тестов автоматически отправляются на сервера OONI, [анализируются](https://github.com/ooni/pipeline), и [публикуются в открытом доступе](https://ooni.org/data/) в режиме реального времени (если только вы не отказались от публикации результатов тестов в настройках вашего приложения).

OONI [публикует в открытом доступе результаты тестов OONI Probe](https://ooni.org/data/) собранные со всего мира, чтобы:

* Повысить **прозрачность интернет-цензуры** во всем мире;
* Поделиться **доказательствами интернет-цензуры** и другими формами вмешательств в работу интернета;
* Дать возможность **независимо проверять** случаи цензуры, обнаруженные OONI;
* Поддерживать **возможность воссоздавать исследования**;
* Поддерживать **исследовательские, юридические, управленческие и правозащитные процессы** по всему миру;
* Поддерживать **публичную дикуссию** о контроле над информацией.

Чтобы обеспечить доступ к результатам тестов OONI Probe (также мы называем их «измерениями»), команда публикует их на портале [OONI Explorer](https://explorer.ooni.org/): веб-платформе, где на основе измерений публикуются графики, и где есть возможность поиска отдельных измерений. 

Так как [OONI Explorer](https://explorer.ooni.org/) хранит более 850 миллионов измерений собранных из более, чем 24 500 сетей в 241 странах и территориях начиная с 2012-го года, скорее всего можно считать его **самой большой глобальной базой открытых данных об интернет-цензуре** на сегодняшний день.

Запуская OONI Probe вы:

* Узнаете блокирует ли ваш интернет-провайдер доступ к определенным сайтам и приложениям, и как он это делает; 
* Сделаете вклад в публикацию измерений, которые будут публично заархивированы, что позволит глобальному сообществу интернет-свобод отслеживать, обнаруживать интернет-цензуру и бороться с ней.

Цель этой инструкции — познакомить вас с использованием [приложения OONI Probe](https://ooni.org/install/mobile), чтобы вы могли присоединиться к глобальному сообществу, измеряющему интернет-цензуру.

### Внимание

Так как OONI Probe создано для измерения интернет-цензуры, его запуск может нести определенные [риски](https://ooni.org/about/risks/) для людей в некоторых странах.

Некоторые вещи, которые стоит иметь в виду: 

* **OONI Probe не обеспечивает конфиденциальность.** Любой, кто следит за вашей интернет-активностью (например, правительство, интернет-провайдер, работодатель), может увидеть, что вы используете OONI Probe (точно так же, как они, возможно, могут видеть все остальные программы, которые вы запускаете).
* **OONI Probe — это исследовательский инструмент.** Некоторые тесты OONI Probe созданы специально для обнаружения интернет-цензуры.
* **[Моделирование ваших рисков](https://www.eff.org/keeping-your-site-alive/evaluating-your-threat-model).** Если вы, например, известный активист, уже находящийся под пристальным наблюдением, то вы можете привлечь больше внимания при запуске OONI Probe.
* **Законы и правила страны, в которой вы запускаете OONI Probe.** Чтобы лучше понять контекст, стоит проконсультироваться с местными юристами.
* **Типы сайтов, которые вы тестируете.** С помощью OONI Probe вы можете тестировать провокационные, нежелательные или запрещенные законом в некоторых странах [сайты](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe).
* **Типы тестов OONI Probe, которые вы запускаете.** [Тесты OONI Probe](https://ooni.org/nettest/) могут нести разные риски. Например, OONI Probe включает в себя [тест NDT](https://ooni.org/nettest/ndt/) предназначенный для измерения скорости и производительности вашей сети, его можно рассматривать как менее политический или спорный по сравнению с другими тестами, предназначенными для обнаружения блокировок сайтов или приложений.
* **Публиковать свои измерения или нет.** OONI публикует измерения, собранные пользователями OONI Probe [в открытом доступе](https://ooni.org/data/) для повышения прозрачности интернет-цензуры по всему миру. Мы делаем все возможное, чтобы не публиковать ваш IP-адрес или любую другую информацию, потенциально позволяющую установить ваше местоположение или личность. Подробнее об этом можно прочитать в нашей [политике использования данных](https://ooni.org/about/data-policy).

Чтобы узнать больше о потенциальных рисках, связанных с использованием OONI Probe, прочитайте соответствующую [статью](https://ooni.org/about/risks/).

## Установить OONI Probe Mobile

Приложение OONI Probe доступно на [Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe), [F-Droid](https://f-droid.org/repository/browse/?fdid=org.openobservatory.ooniprobe), и [iOS](https://apps.apple.com/us/app/ooni-probe/id1199566366).

Чтобы установить приложение OONI Probe на телефон:

**Шаг 1.** Зайдите на страницу OONI Probe Mobile на сайте OONI: <https://ooni.org/install/mobile> 

{{<img src="images/image49.png" title="Measure Internet Censorship" alt="Measure Internet Censorship">}}

**Шаг 2.** В зависимости от вашей операционной системы (Android, iOS, F-Droid) выберите нужную кнопку.

{{<img src="images/image49.png" title="Install mobile app links" alt="Install mobile app links">}}

**Шаг 3.** Установите приложение OONI Probe.

{{<img src="images/image102.jpg" title="Install mobile app" alt="Install mobile app">}}

**Шаг 4.** Откройте приложение OONI Probe на вашем телефоне.

{{<img src="images/image8.jpg" title="Open OONI Probe mobile app" alt="Open OONI Probe mobile app">}}

### Онбординг: Информированное согласие

После того, как вы установили и запустили ваше приложение OONI Probe, запустится онбординг с базовой информацией о приложении.

Вы также узнаете о [возможных рисках](https://ooni.org/about/risks/) связанных с использованием OONI Probe. Чтобы убедиться, что вы понимаете возможные риски, мы включили небольшую анкету. Правильные ответы на анкету – обязательное условие для использования OONI Probe.

В последней части онбординга мы рассказываем о типах данных, которые автоматически собираются при запуске OONI Probe (больше об этом можно прочитать в нашей [политике конфиденциальности](https://ooni.org/about/data-policy)). Вы можетесогласиться отправлять отчеты об ошибках и делиться данными об использовании приолжения, чтобы помогать нам улучшать OONI Probe. 

Следующие шаги описывают прохождение онбординга. 

**Шаг 1.** После прочтения основной информации о OONI Probe нажмите **ОК**.

{{<img src="images/image5.jpg" title="Got it" alt="Got it">}}

**Шаг 2.** На следующем экране располагается список потенциальных рисков, связанных с запуском OONI Probe. Нажмите **Подробнее**, чтобы прочитать нашу [документацию](https://ooni.org/about/risks/) в которой описаны потенциальный риски.

{{<img src="images/image26.jpg" title="Tap learn more" alt="Tap learn more">}}

**Шаг 3.** После ознакомления с потенциальными рисками, связанными с запуском OONI Probe, нажмите **Я понимаю**.

{{<img src="images/image96.jpg" title="I understand" alt="I understand">}}

**Шаг 4.** Тест основан на информации, которую вы прочитали на предыдущем экране. Нажмите **Да**, если вы понимаете смысл утверждения.

{{<img src="images/image115.jpg" title="Quiz step 1" alt="Quiz step 1">}}

**Да** — правильный ответ. Если вы нажмете **Нет**, то увидите объяснение, почему ответ неверен.

{{<img src="images/image83.jpg" title="Correct quiz" alt="Correct quiz">}}

**Шаг 5.** Нажмите **Да**, если вы понимаете смысл утверждения (во второй части теста).

{{<img src="images/image104.jpg" title="Quiz step 2" alt="Quiz step 2">}}

**Да** — правильный ответ. Если вы нажмете **Нет**, то увидите объяснение, почему ответ неверен.

{{<img src="images/image83.jpg" title="Quiz correct" alt="Quiz correct">}}

**Шаг 6.** Если вы хотите, чтобы приложение автоматически собирало измерения, нажмите кнопку **Звучит отлично**.

{{<img src="images/image118.jpg" title="Automatic measurements" alt="Automatic measurements">}}

**Шаг 7.** Если вы хотите делиться [отчетами об ошибках](https://ooni.org/about/data-policy#data-we-collect), которые могут помочь нам исправить ошибки в работе OONI Probe, нажмите **Да**.

{{<img src="images/image119.jpg" title="Crash reports" alt="Crash reports">}}

**Шаг 8.** На следующем экране представлена информация о типах данных, которые OONI собирает и публикует по умолчанию (каждый раз когда вы запускаете OONI Probe). Чтобы узнать больше нажмите **[Политика данных OONI](https://ooni.org/about/data-policy)** на экране.

{{<img src="images/image24.jpg" title="Onboarding default settings" alt="Onboarding default settings">}}

**Шаг 9.** Нажмите **OK**.

Вы завершили подготовку и готовы использовать OONI Probe!

## Использование OONI Probe Mobile

Теперь, когда подготовка завершена, вы можете запустить OONI Probe для измерения интернет-цензуры!

**Главное меню** OONI Probe включает 5 карточек, каждая из которых содержит тесты OONI Probe:

* **Сайты.** Включает [Web Connectivity тест](https://ooni.org/nettest/web-connectivity/), который проверяет [блокировку сайтов](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe).
* **Мессенджеры.** Включает тесты OONI [WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/) и [Signal](https://ooni.org/nettest/signal), которые проверяют блокировку приложений.
* **Обход блокировки.** Включает тесты OONI [Tor](https://ooni.org/nettest/tor/) и [Psiphon](https://ooni.org/nettest/psiphon/), которые проверяют доступность инструментов для обхода блокировки.
* **Производительности.** Включает [тест скорости NDT](https://ooni.org/nettest/ndt/), [тест производительности видео-стриминга DASH](https://ooni.org/nettest/dash/), и OONI [middlebox](https://ooni.org/support/glossary/#middlebox) тесты ([HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/) тест и [HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/)).
* **Экспериментальная карточка.** Включает несколько новых экспериментальных тестов, разработанных командой OONI. Эти тесты со временем могут измениться. Подробнее об этих тестах можно узнать [здесь](https://github.com/ooni/spec/tree/master/nettests).

**Шаг 1.** Нажмите **Старт**, чтобы запустить ваши первые тесты OONI Probe.

{{<img src="images/image25.jpg" title="Dashboard main screen" alt="Dashboard main screen">}}

Когда вы нажмете "Старт", OONI Probe запустит **все** тесты (входящие во все карточки) сразу!

{{<img src="images/image120.jpg" title="Launched tests" alt="Launched tests">}}

Если вы нажмете на **бегущую строку** внизу экрана, это откроет полноэкранное окно со **всеми производимыми тестами**.

{{<img src="images/image121.jpg" title="Open ongoing tests" alt="Open ongoing tests">}}

{{<img src="images/image37.jpg" title="Running websites" alt="Running websites">}}

{{<img src="images/image58.jpg" title="Running IM" alt="Running IM">}}

{{<img src="images/image32.jpg" title="Running circumvention" alt="Running circumvention">}}

{{<img src="images/image12.jpg" title="Running performance" alt="Running performance">}}

OONI Probe должен выполнить все тесты в течение нескольких минут (зависит от скорости сети, к которой вы подключены, в некоторых случаях это может занять больше времени). Если скорость вашей сети недостаточна и тесты занимают слишком много времени, вы можете **остановить текущий тест**, нажав на **Остановить тест** .

{{<img src="images/image122.jpg" title="Stop test" alt="Stop test">}}

Как только тестирование завершится, результаты ваших тестов OONI Probe будут автоматически опубликованы в [OONI Explorer](https://explorer.ooni.org/) и в [OONI API](https://api.ooni.io/).

Вы хотели бы ограничить свое тестирование определенным типом теста (картой)? В следующих разделах мы поделимся инструкциями о том, как это сделать.

### Исследование блокировок сайтов

Если вы хотите исследовать только блокировку сайтов, выполните следующие действия:

**Шаг 1.** Нажмите на карточку **Сайты** в главном меню вашего приложения OONI Probe.

{{<img src="images/image51.jpg" title="Tap websites" alt="Tap websites">}}

**Шаг 2.** Нажмите кнопку **Старт** в карточке Сайты.

{{<img src="images/image99.jpg" title="Websites card details" alt="Websites card details">}}

Вы запустили [Web Connectivity test](https://ooni.org/nettest/web-connectivity/) для анализа блокировки сайтов.

{{<img src="images/image37.jpg" title="Running websites" alt="Running websites">}}

Результаты вашего тестирования OONI Probe будут автоматически опубликованы в [OONI Explorer](https://explorer.ooni.org/) и в [OONI API](https://api.ooni.io/).

**Какие сайты тестируются?**

По умолчанию вы будете тестировать сайты из двух списков:

* **[Глобальный список](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)**. Включает значимые на международном уровне сайты (например, facebook.com).
* **[Список по странам](https://github.com/citizenlab/test-lists/tree/master/lists)**. Включает только сайты, актуальные для страны, из которой вы запускаете OONI Probe.

Независимо от того, из какой страны вы запускаете OONI Probe, вы *всегда* будете тестировать сайты из [глобального списка](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv ).

OONI Probe автоматически определит, какой список сайтов [по странам](https://github.com/citizenlab/test-lists/tree/master/lists) выбрать для тестирования в зависимости от того, откуда вы запускаете OONI Probe. Например, если вы запустите OONI Probe в Бразилии, вы будете тестировать сайты из глобального списка и из списка сайтов Бразилии. Если вы окажитесь в Германии и запустите OONI Probe, он проверит сайты из глобального списка и списка сайтов Германии. Но если вы запускаете OONI Probe из страны, для которой еще нет списка, вы будете тестировать только сайты из глобального списка.

Если вы хотите внести свой вклад в [списки тестов Citizen Lab](https://github.com/citizenlab/test-lists/tree/master/lists) (в которые входят сайты которые по умолчанию тестируют пользователи OONI Probe по всему миру), пожалуйста, обратитесь к соответствующей [документации](https://ooni.org/get-involved/contribute-test-lists) или используйте наш [Test Lists Editor](https://test-lists.ooni.org/).

**Примечание.** Когда вы нажмете кнопку «Старт» (в главном меню или на карточке Сайты), OONI Probe **протестирует столько сайтов, сколько сможет протестировать за 90 секунд**. Сайты, которые проверяются в течение этого времени, выбираются случайным образом из [глобального списка](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) и [списка по странам](https://github.com/citizenlab/test-lists/tree/master/lists). Каждый раз, когда вы нажимаете «Старт», вы будете проверять новую случайную выборку сайтов. Следовательно, чем больше раз вы нажмете «Старт», тем больше сайтов вы протестируете.

Если вы хотите тестировать более широкую выборку сайтов или совершенно разные сайты, перейдите в раздел **Настройка тестирования сайтов**.

### Анализ блокировки мессенджеров

Если вы хотите анализировать только блокировку мессенджеров, выполните следующие действия:

**Шаг 1.** Нажмите на карточку **Мессенджеры** в главном меню OONI Probe.

{{<img src="images/image85.jpg" title="Tap IM card" alt="Tap IM card">}}

**Шаг 2.** Нажмите кнопку **Старт** в карточке Мессенджеры.

{{<img src="images/image40.jpg" title="IM Card details" alt="IM Card details">}}

Вы запустили тесты OONI [WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/) и [Signal](https://ooni.org/nettest/signal) для анализа блокировки этих приложений.

{{<img src="images/image58.jpg" title="Running IM" alt="Running IM">}}

Результаты ваших тестов OONI Probe будут автоматически опубликованы в [OONI Explorer](https://explorer.ooni.org/) и [OONI API](https://api.ooni.io/).

Если вы хотите анализировать только WhatsApp, Facebook Messenger, Telegram, или Signal, пожалуйста, обратитесь к разделу **Настройки OONI Probe**.

### Анализ доступности инструментов для обхода блокировки

Если вы хотите анализировать только доступность инструментов для обхода блокировки, выполните следующие действия:

**Шаг 1.** Нажмите на карточку **Обход блокировки** в главном меню OONI Probe.

{{<img src="images/image3.jpg" title="Tap circumvention" alt="Tap circumvention">}}

**Шаг 2.** Нажмите **Старт** на карточке Обход блокировки.

{{<img src="images/image90.jpg" title="Circumvention card details" alt="Circumvention card details">}}

Вы запустили тесты OONI [Tor](https://ooni.org/nettest/tor/) и [Psiphon](https://ooni.org/nettest/psiphon/) для анализа доступности этих инструментов.

{{<img src="images/image32.jpg" title="Running circumvention" alt="Running circumvention">}}

Результаты ваших тестов OONI Probe будут автоматически опубликованы в [OONI Explorer](https://explorer.ooni.org/) и [OONI API](https://api.ooni.io/).

Если вы хотите анализировать только Tor или Psiphon, пожалуйста, обратитесь к разделу **Настройки OONI Probe**.

### Анализ производительности сети

Если вы хотите анализировать только производительность сети, выполните следующие действия:

**Шаг 1.** Нажмите на карточку **Производительность** в главном меню OONI Probe.

{{<img src="images/image65.jpg" title="Tap performance" alt="Tap performance">}}

**Шаг 2.** Нажмите кнопку **Старт** в карточке Производительность.

{{<img src="images/image27.jpg" title="Performance card details" alt="Performance card details">}}

Теперь вы запустили [тест на скорость NDT](https://ooni.org/nettest/ndt/) и [тестирование производительности видео-стриминга DASH](https://ooni.org/nettest/dash/), и тесты OONI по обнаружению [middlebox](https://ooni.org/support/glossary/#middlebox), которые включают определение [HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/) и [HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/).

{{<img src="images/image12.jpg" title="Running performance" alt="Running performance">}}

Результаты ваших тестов OONI Probe будут автоматически опубликованы в [OONI Explorer](https://explorer.ooni.org/) и [OONI API](https://api.ooni.io/).

**Дисклеймер:** [NDT](https://ooni.org/nettest/ndt/) и [DASH](https://ooni.org/nettest/dash/) тесты проводятся на сторонних серверах, предоставленных [Measurement Lab (M-Lab)](https://www.measurementlab.net/). Если вы запускаете эти тесты, M-Lab соберет и опубликует ваш IP-адрес в исследовательских целях, независимо от ваших настроек OONI Probe. Узнайте больше об управлении данными компании M-Lab в их [политике конфиденциальности](https://www.measurementlab.net/privacy/).

Если вы хотите провести только один (или несколько) тестов, включенных в тесты на качество соединения, пожалуйста, обратитесь к разделу **Настройки OONI Probe**.


## Настройка тестирования сайтов

По умолчанию при анализе сайтов с помощью OONI Probe вы тестируете URL-адреса, включенные в [списки тестов Citizen Lab](https://github.com/citizenlab/test-lists/tree/master/lists). Другими словами, если вы просто нажмете «Старт» (в главном меню или в карточке «Сайты» приложения OONI Probe), вы протестируете случайую выборку сайтов, взятых из [списков тестов Citizen Lab](https://github.com/citizenlab/test-lists/tree/master/lists). Эти списки были созданы в сотрудничестве с местными исследователями и экспертами. Поскольку они находятся [в открытом доступе на GitHub](https://github.com/citizenlab/test-lists/tree/master/lists), любой человек может изучить список и [предложить добавить новые](https://ooni.org/get-involved/contribute-test-lists) URL-адреса или удалить существующие. Важно чтобы мы продолжали [изучать и обновлять](https://ooni.org/get-involved/contribute-test-lists) эти списки, поскольку содержащиеся в них сайты регулярно тестируются пользователями OONI Probe по всему миру.

Но если вы хотите сформировать список тестируемых сайтов самостоятельно, вы можете сделать это с помощью приложения OONI Probe.

Вы можете настроить тестируемые сайты следующими способами:

* Ограничить список тестируемых сайтов **специальными категориями** (например, медиа или материалы связанные с правами человека);
* Тестировать только **сайты, которые вам важны**;
* Тестировать **ваш собственный список сайтов**; 
* Тестировать *все* URL-адреса в ([нужных](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)) [списке тестов Citizen Lab](https://github.com/citizenlab/test-lists/tree/master/lists) (вместо того, чтобы тестировать случайную выборку сайтов каждые 90 секунд).

В следующих разделах объясняется, как вы можете релизовать каждый из вышеперечисленных пунктов.

### Тестирование сайтов из определенных категорий

Когда вы нажимаете кнопку «Старт» в приложении OONI Probe, вы тестируете сайты из [глобального списка](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) и сайты [из списка Citizen Lab для страны, из которой вы запускаете приложение](https://github.com/citizenlab/test-lists/tree/master/lists).

Эти сайты были классифицированы на основе [30 стандартных категорий](https://ooni.org/get-involved/contribute-test-lists/#what-are-test-lists). Категории варьируются от средств массовой информации, культуры и прав человека до более провокационных, таких как порнография (последние включены, потому что они с большей вероятностью будут заблокированы, что позволяет обнаруживать методы цензуры которые используют интернет-провайдеры).

По умолчанию в OONI Probe активированы все 30 категорий, чтобы поощрять тестирование более разнообразных сайтов, что повышает шансы обнаружения разных видов интернет-цензуры.

Но если вам некомфортно тестировать все 30 категорий сайтов (особенно если они содержат контент, который является незаконным, провокационным или неприемлемым в вашей стране) или заинтересованы в тестировании только определенного типа контента (например, новостных медиа), вы можете ограничить тестируемые OONI Probe категории сайтов по вашему выбору.

**Шаг 1.** Нажмите **Настройки** в приложении OONI Probe.

{{<img src="images/image63.jpg" title="App settings" alt="App settings">}}

**Шаг 2.** Нажмите кнопку **Варианты тестирования** в настройках.

{{<img src="images/image2.jpg" title="Tap test options" alt="Tap test options">}}

**Шаг 3.** Нажмите **Сайты** (в разделе “Варианты тестирования”).

{{<img src="images/image61.jpg" title="Tap websites" alt="Tap websites">}}

**Шаг 4.** Нажмите **Категории сайтов для тестирования** (в разделе “Сайты” внутри “Варианты тестирования”).

{{<img src="images/image98.jpg" title="Tap website categories" alt="Tap website categories">}}

Вы увидите [30 категорий](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) сайтов, которые OONI Probe тестирует по умолчанию. Все эти категории активированы.

{{<img src="images/image78.jpg" title="Website categories" alt="Website categories">}}

**Шаг 5.** **Отключите** категории сайтов, которые вы **не** хотите тестировать.

{{<img src="images/image75.jpg" title="Disable options" alt="Disable options">}}

В приведенном выше примере мы выключили 5 категорий – «ЛГБТ», «Политическая критика», «Порнография», «Провоцирующая одежда», «Религия».

Когда вы вернетесь в меню настроек, то увидите, что только 25 категорий сайтов активированы, потому что 5 мы выключили. 

{{<img src="images/image48.jpg" title="Categories enabled" alt="Categories enabled">}}

Вы можете вернуться к этим настройкам в любое время, чтобы активировать или отключить категории сайтов по вашему выбору.

### Тестирование сайтов по вашему выбору

Вы можете тестировать интересующие вас сайты напрямую, выполнив следующие действия:

**Шаг 1.** Нажмите на карточку **Сайты** в приложении OONI Probe.

{{<img src="images/image51.jpg" title="Tap websites card" alt="Tap websites card">}}

**Шаг 2.** Нажмите кнопку **Выберите сайты** внутри карточки Сайты.

{{<img src="images/image116.jpg" title="Choose websites" alt="Choose websites">}}

Вы увидите экран, где вы можете выбрать сайт или сайты, которые хотите протестировать.

{{<img src="images/image86.jpg" title="Choose websites empty" alt="Choose websites empty">}}

**Step 3.** **Напишите URL** сайта, который хотите протестировать. В этом примере мы написали `https://www.facebook.com`.

{{<img src="images/image73.jpg" title="Choose websites facebook.com" alt="Choose websites facebook.com">}}

**Важно:** Пожалуйста, убедитесь, что [URL](https://ooni.org/support/glossary/#url) введен правильно. Если он введен неверно, OONI Probe *не* проверит сайт, что может привести к неточным результатам тестирования.

Также следует помнить:

* Сайт использует **HTTP** или **HTTPS**? Если второе, пожалуйста, добавьте `s` после `http`.
* Включает ли [домен](https://ooni.org/support/glossary/#domain-name) `www`? Если да, пожалуйста, добавьте его. 

Чтобы гарантировать правильность [URL](https://ooni.org/support/glossary/#url), **пожалуйста, проверьте, как он выглядит при доступе из обычного браузера**.

**Шаг 4.** Нажмите плюс, чтобы создать строку для добавления нового сайта для тестирования.

**Шаг 5.** **Добавьте другой URL**, который вы хотите протестировать. В следующем примере мы добавили `https://twitter.com`.

{{<img src="images/image54.jpg" title="Add website" alt="Add website">}}

Если вы передумали и хотите удалить одну из добавленных ссылок, нажмите на красную иконку рядом со ссылкой, которую хотите удалить.

Вы можете добавить любое количество ссылок. В следующем примере мы добавили `https://www.gutenberg.org`. 

{{<img src="images/image9.jpg" title="add url twitter.com" alt="add url twitter.com">}}

**Шаг 6.** Нажмите **Старт**, чтобы протестировать все сайты, которые вы добавили.

Теперь OONI Probe будет тестировать все нужные вам сайты!

{{<img src="images/image72.jpg" title="Testing custom sites" alt="Testing custom sites">}}

Результаты тестов OONI Probe автоматически опубликуются в [OONI Explorer](https://explorer.ooni.org/) и в [OONI API](https://api.ooni.io/).

### Протестировать кастомизированный список сайтов

Вручную добавлять много ссылок одну за другой (через опцию «Выберите сайты» приложения OONI Probe) может быть достаточно сложно, особенно если список включает больше десятка ссылок. Исследователи часто заинтересованы в тестировании их собственных списков сайтов, которые могут включать более сотник ссылок. 

Вы можете протестировать свой собственный список сайтов следующим образом: 

**Шаг 1.** Составьте список сайтов в текстовом редакторе так, чтобы каждая ссылка занимала отдельную строку. Ниже представлен пример такого списка.

{{<img src="images/image69.png" title="Text editor custom URLs" alt="Text editor custom URLs">}}

**Важно:** Пожалуйста, убедитесь, что каждая [ссылка](https://ooni.org/support/glossary/#url) напечатана корректно. Если в ссылке будут ошибки, OONI Probe *не* протестирует сайт, который вам нужен, и это может привести к неточным результатам всего исследования.

Несколько вещей, которые стоит иметь ввиду: 

* Использует ли сайт **HTTP** или **HTTPS**? Если второе, пожалуйста, добавьте `s` после `http`.
* Включает ли [домен](https://ooni.org/support/glossary/#domain-name) `www`? Если да, пожалуйста, добавьте его. 
* Если сайт использует HTTPS (например, `https://www.hrw.org/`), вам не нужно указывать отдельную страницу (например, `https://www.hrw.org/publications`), так как, как правило, провайдеры не могут ограничить блокировку до отдельной страницу, если сайт использует HTTPS-протокол. В таком случае, скорее всего, произойдет блокировка всего сайта.

Чтобы гарантировать правильность [URL](https://ooni.org/support/glossary/#url), **пожалуйста, проверьте, как он выглядит при доступе из обычного браузера**.

**Шаг 2.** **Скопируйте** список ссылок (из вашего текстового редактора).

**Шаг 3.** Зайдите на сайт **OONI Run**: https://run.ooni.org/

{{<img src="images/image-ooni-run.png" title="OONI Run landing page" alt="OONI Run landing page">}}

**Шаг 4.** **Выберите** `http://` в первой строке для ссылки на странице OONI Run (чтобы избежать дублирования `http` при добавлении вашей первой ссылки).

{{<img src="images/image50.png" title="Select URL OONI Run" alt="Select URL OONI Run">}}

**Шаг 5.** **Вставьте** ваш список ссылок в первую строку для ссылки на странице OONI Run.

Теперь вы должны увидеть список ваших ссылок, где каждая ссылка занимает отдельную строку на странице [OONI Run](https://run.ooni.org/).

{{<img src="images/image77.png" title="OONI Run custom list" alt="OONI Run custom list">}}

Если вы заметите пустые строки (или неправильно оформленные ссылки), пожалуйста, удалите их с помощью кнопки **удаления**.

{{<img src="images/image67.png" title="Empty rows" alt="Empty rows">}}

**Шаг 6.** Нажмите кнопку **Создать** в конце вашего списка.

{{<img src="images/image13.png" title="Click generate" alt="Click generate">}}

Теперь вы увидите новое окно.

{{<img src="images/image55.png" title="OONI Run popup window" alt="OONI Run popup window">}}

Вы создали **ссылку OONI Run** для тестирования вашего списка сайтов. 

**Шаг 7.** **Скопируйте** сгенерированную ссылку:

* Либо нажмите на ссылку под “**Share this URL with your friends**”, нажав Control+A, чтобы выделить всю ссылку, и затем нажмите Control + C, чтобы скопировать ее; либо
* Нажмите правой кнопкой мыши на **кнопку со ссылкой** и выберите «Скопировать адрес ссылки».

{{<img src="images/image30.png" title="Copy OONI Run link" alt="Copy OONI Run link">}}

**Шаг 8.** Так как скорее всего вы проделываете все шаги с ноутбука или компьютера, **отправьте скопированную ссылку** **на ваш мобильный** (чтобы впоследствии вы могли открыть ссылку с помощью вашего приложения OONI Probe). Вы также можете поделиться этой ссылкой с другими пользователями OONI Probe, если вы хотите, чтобы они тоже протестировали ваш список сайтов.

**Шаг 9.** **Откройте** ссылку OONI Run с вашего мобильного устройства.

{{<img src="images/image100.jpg" title="OONI Run link" alt="OONI Run link">}}

**Шаг 10.** **Откройте** ссылку с помощью вашего приложения **OONI Probe** (не с помощью браузера).

{{<img src="images/image113.jpg" title="Open with OONI Probe" alt="Open with OONI Probe">}}

Теперь вы должны увидеть список ваших сайтов в приложении OONI Probe. 

{{<img src="images/image56.jpg" title="OONI Run page mobile" alt="OONI Run page mobile">}}

**Шаг 11.** Нажмите **Старт**, чтобы протестировать ваш список сайтов.

{{<img src="images/image31.jpg" title="Running OONI Run" alt="Running OONI Run">}}

Результаты ваших тестов OONI Probe будут автоматически опубликованы в [OONI Explorer](https://explorer.ooni.org/) и в [OONI API](https://api.ooni.io/).

### Протестировать все сайты из списков Citizen Lab

В связи с ограничением трафика, OONI Probe тестирует ровно столько сайтов, к скольким успевает подключиться за 90 секунд (в рамках предустановленных настроек). 

Если вы подключены к WiFi и хотели бы протестировать **все сайты** из ([релевантных](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)) [списков Citizen Lab](https://github.com/citizenlab/test-lists/tree/master/lists) за раз, вы можете сделать это следующим образом:

**Шаг 1.** Нажмите **Настройки** в боковом меню вашего приложения OONI Probe. 

{{<img src="images/image63.jpg" title="Settings page" alt="Settings page">}}

**Шаг 2.** Нажмите **Варианты тестирования** в настройках.

{{<img src="images/image2.jpg" title="Test options" alt="Test options">}}

**Шаг 3.** Нажмите **Сайты** (в «Вариантах тестирования»).

{{<img src="images/image61.jpg" title="Websites option" alt="Websites option">}}

Теперь вы увидите настройки тестирования сайтов OONI Probe. 

{{<img src="images/image68.jpg" title="OONI Probe website settings" alt="OONI Probe website settings">}}

**Шаг 4.** Отключите настройку **Ограничить продолжительность теста**.

{{<img src="images/image81.jpg" title="Disable limit test duration" alt="Disable limit test duration">}}

Теперь ваше тестирование не ограничено по времени. Это значит, что OONI Probe может тестировать все сайты, включенные в [релевантные списки Citizen Lab](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe) каждый раз, когда вы нажимаете “Старт”. 

**Другой вариант**: Если вам хотелось бы тестировать больше сайтов в течение более долгого времени (но необязательно тестировать все сайты), вы можете сделать это следующим образом:

**Шаг 1.** Откройте **Продолжительность теста** в разделе **Варианты тестирования**, **Сайты**.

{{<img src="images/image1.jpg" title="Test duration setting" alt="Test duration setting">}}

Изначально длительность тестирования сайтов установлена как **90 секунд**. Это значит, что OONI Probe протестирует ровно столько сайтов (из [релевантных списков Citizen Lab](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)), к скольким успеет подключиться за 90 секунд. 

**Шаг 2.** Чтобы изменить длительность теста, **укажите количество секунд**, чтобы обозначить время, в течение которого вам бы хотелось, чтобы OONI Probe тестировал сайты. В примере ниже, мы ввели `360`, а значит OONI Probe будет тестировать сайты в течение 6 минут.

{{<img src="images/image53.jpg" title="Test duration custom seconds" alt="Test duration custom seconds">}}

## Доступ к результатам тестирований OONI Probe

Как только тест OONI Probe закончится, вы сможете увидеть результаты теста в вашем приложении OONI Probe. 

**Шаг 1.** Нажмите **Результаты тестов** в нижнем меню приложения OONI Probe. 

{{<img src="images/new-test-results.jpg" title="Test results page" alt="Test results page">}}

Теперь вы видите результаты всех тестов, которые вы провели в OONI Probe. 

Все результаты сгруппированы в 4 группы соответствующие типам тестов («Сайты», «Мессенджеры», «Обход блокировок», «Производительность»).

В каждой отдельной карточке с результатами теста вы увидите:

* **Сеть** (например, `AS16010` – Magticom Ltd.) через которую было проведено тестирование;
* **Дата и время** тестирования (например, 22 августа 2022 в 12:01 по местному времени);
* **Общие результаты тестирования** (например, 3 оказались доступны и ни один не был заблокирован).

Эти общие сведения потенциально могут помочь сравнивать результаты между сетями (если вы подключаетесь через разные сети), и дают обобщенное понимание выводов.

Чтобы получить больше информации о каждом измерении и получить доступ к необработанным данным, вам нужно нажать на отдельный результат теста, подробнее мы объясним в следующих разделах. 

**Удаление результатов тестов**

В верхнем меню (экрана «Результаты тестов») видно:

* **Общее количество тестов OONI Probe**, которые вы провели;
* **Количество сетей** в которых вы запускали OONI Probe;
* Количество **траффика** использованного OONI Probe.

{{<img src="images/image34.jpg" title="Test results hero" alt="Test results hero">}}

**Шаг 1.** Если вы хотите удалить результаты теста OONI Probe (например, чтобы очистить место на вашем устройстве), **нажмите на корзину** в верхнем правом углу.

Не беспокойтесь, что результаты ваших тестов будут потеряны; как только вы запускаете тест OONI Probe, результаты теста автоматически публикуются в [OONI Explorer](https://explorer.ooni.org/) и [OONI API](https://api.ooni.io/) в режиме реального времени. Если вы хотите отказаться от публикации результатов ваших тестов, обратитесь к разделу «Настройка OONI Probe: конфиденциальность» этой инструкции.

После нажатия на значок удаления вы увидите следующее всплывающее окно:

{{<img src="images/image15.jpg" title="Delete all tests" alt="Delete all tests">}}

**Шаг 2.** Нажмите **Удалить**, если хотите удалить все результаты тестов OONI Probe. В противном случае нажмите **Отмена**.

**Фильтрация результатов тестов**

На экране «Результаты тестов» вашего приложения OONI Probe, результаты представлены в хронологическом порядке, самые последние тесты перечислены первыми.

{{<img src="images/new-test-results.jpg" title="Test results page" alt="Test results page">}}

**Шаг 1.** Если вы хотите отфильтровать результаты по определенной категории тестирования («Сайты», «Мессенджеры», «Обход блокировки», «Производительность»), нажмите **Все тесты** (или «Фильтровать тесты», или значок выпадающего меню в этой строке).

{{<img src="images/image93.jpg" title="Test results filtering" alt="Test results filtering">}}

Теперь вы видите раскрывающееся меню, в котором перечислены все категории тестирования.

**Шаг 2.** Нажмите на категорию, по которой вы хотите отфильтровать результаты. В следующем примере мы нажали «Сайты».

{{<img src="images/image41.jpg" title="Filtering websites" alt="Filtering websites">}}

{{<img src="images/image126.jpg" title="Filtered websites" alt="Filtered websites">}}

Когда вы отфильтруете результаты по категории «Сайты», это позволит просмотреть результаты тестирования сайтов. В приведенном примере мы видим, что из 3 веб-сайтов, протестированных Magticom Ltd. (2 августа 2022 года в 12:01 по местному времени) 0 сайтов имели признаки блокировки.

На экране «Результаты теста» представлен общий обзор результатов, при необходимости вы можете также получить доступ к более подробным и к необработанным данным, относящимся к каждому тесту, как описано в следующих разделах.

### Сайты

Вы можете получить доступ к результатам тестов OONI Probe следующим способом: 

**Шаг 1.** Нажмите **Сайты** на экране с результатами тестов приложения OONI Probe. 

{{<img src="images/image41.jpg" title="Websites tests filtered" alt="Websites tests filtered">}}

Теперь вы увидите список всех сайтов, которые вы протестировали в течение одной сессии. 

В верхней панели будет указано общая информация о вашем тестировании. Рядом с каждой ссылкой будет либо зеленая галочка (если сайт оказался доступен), либо красный крест (если сайт оказался заблокирован).

**Шаг 2.** Нажмите на **строчку протестированного сайта**, чтобы получить доступ к данным о тестировании этого сайта.

{{<img src="images/image127.jpg" title="Tested website" alt="Tested website">}}

{{<img src="images/image101.jpg" title="Websites results" alt="Websites results">}}

Теперь у вас есть доступ к данным, содержащимся в тестировании отдельного сайта. В примере показана страница, относящаяся к тесту `https://telegram.org/'.

{{<img src="images/image47.jpg" title="Telegram’s access accessible" alt="Telegram’s access accessible">}}

На этой странице мы видим, что https://telegram.org/ был доступен во время тестирования на Magticom Ltd. (AS16010) 2 августа 2022 года в 11:10 по местному времени.

Если бы сайт был (возможно) заблокирован, на странице измерения был бы оранжевый заголовок с восклицательным знаком, как в скриншоте ниже.

{{<img src="images/image105.jpg" title="1tv inaccessible" alt="1tv inaccessible">}}

Вы можете получить доступ к странице с результатми теста, относящейся к возможно заблокированному сайту, который мы показали выше, нажав на строку с протестированным сайтом.

{{<img src="images/image62.jpg" title="1tv inaccessible" alt="1tv inaccessible">}}

В этом случае мы видим, что https://www.gutenberg.org показал признаки блокировки («[аномалию](https://ooni.org/support/glossary/#network-anomaly)») при тестировании в сети Magticom Ltd (AS16010) 2 августа 2022 года в 10:16 по местному времени. В частности, мы можем видеть признаки [DNS фальсификации](https://ooni.org/support/glossary/#dns-tampering) (на основе эвристики [теста OONI Web Connectivity](https://ooni.org/nettest/web-connectivity/)). Это означает, что Magticom Ltd. мог заблокировать доступ к 'http://1tv.ru' (2 августа 2022 г.) с помощью TCP/IP блокировки.

Поскольку могут возникать [ложные блокировки](https://ooni.org/support/glossary/#false-positive), мы отмечаем результаты тестов, которые не соответствуют всем критериям нашего [теста на подключение к Интернету](https://ooni.org/nettest/web-connectivity/) как «[аномалии](https://ooni.org/support/faq/#how-can-i-interpret-ooni-data)» (а не «подтвержденные блокировки» ), что указывает на то, что проверенный сайт *возможно* заблокирован.

При оценке блокировки веб-сайта полезно изучить соответствующие измерения (другие тестирования этого же веб-сайта в этой же сети в другие дни и время). Это можно сделать с помощью [OONI Explorer](https://explorer.ooni.org/), где мы публикуем все результаты тестирования в **агрегированном** виде. OONI Explorer также [показывает измерения всех «подтвержденных блокировок»](https://explorer.ooni.org/search?since=2021-02-24&only=confirmed), когда мы автоматически подтверждаем блокировку веб-сайтов на основании [страниц блокировки](https://ooni.org/support/glossary/#block-page).

Когда при тестировании веб-сайта обнаруживается [аномалия](https://ooni.org/support/faq/#how-can-i-interpret-ooni-data), особенно важно повторно протестировать его (в той же сети) как можно больше раз, так как это может помочь исключить [ложные блокировки](https://ooni.org/support/glossary/#false-positive), когда, например, мы видим, что сайт выдает одинаковую ошибку каждый раз, когда он проверяется. Одного аномального измерения часто недостаточно для оценки блокировки (особенно потому, что тестирование может из-за ошибок сети, которые могут не иметь никакого отношения к цензуре).

**Шаг 3.** Чтобы повторно протестировать ссылку, нажмите **значок повторной попытки** в правом верхнем углу страницы результатов тестирования сайта в приложении OONI Probe.

{{<img src="images/image23.jpg" title="Retry icon" alt="Retry icon">}}

Затем вы увидите следующее всплывающее окно с вопросом, хотите ли вы повторно протестировать все сайты, которые вы протестировали в рамках этой сессии.

{{<img src="images/image36.jpg" title="Rerun test" alt="Rerun test">}}

**Шаг 4.** Нажмите **Старт**, чтобы заново протестировать сайты.

### Мессенджеры

Вы можете получить доступ к результатам тестов OONI Probe на доступность мессенджеров следующим образом: 

**Шаг 1.** Нажмите **Мессенджеры** на экране с результатами тестов в вашем приложении OONI Probe. 

{{<img src="images/image128.jpg" title="Test results screen" alt="Test results screen">}}

{{<img src="images/image129.jpg" title="Test results IM screen" alt="Test results IM screen">}}

Теперь вы видите список мессенджеров (WhatsApp, Facebook Messenger, Telegram, Signal), которые вы протестировали в рамках отдельной сессии.

В верхней панели мы показываем общие результаты вашего тестирования доступности мессенджеров. Рядом с каждым протестированным приложением будет либо зеленая галочка (подтверждающая доступность приложения), либо красный крестик (подтверждающий возможную блокировку приложения).

**Шаг 2.** Нажмите на **строку протестированного приложения**, чтобы получить доступ к данным о результатах тестирования этого приложения. 

{{<img src="images/new-im-test-results.jpg" title="IM test results" alt="IM test results">}}

Приведенная выше страница измерений относится к тестированию WhatsApp.

{{<img src="images/image64.jpg" title="WhatsApp test result" alt="WhatsApp test result">}}

Мы видим, что WhatsApp был доступен при тестировании на Magticom Ltd. (AS16010) 2 августа 2022 года в 10:16 по местному времени. Такой вывод сделан потому что [тест OONI WhatsApp](https://ooni.org/nettest/whatsapp/) смог успешно подключиться к WhatsApp, службе регистрации и веб-интерфейсу (`web.whatsapp.com`).

Если бы WhatsApp по итогам теста был отмечен как (возможно) заблокированный, то на этой странице измерения отобразилась бы соответствующая информация (на основе эвристики [теста WhatsApp OONI](https://ooni.org/nettest/whatsapp/)).

Таким же образом вы можете получить доступ к результатам тестирования доступности Telegram через результаты тестирования мессенджеров в вашем приложении OONI Probe.

{{<img src="images/image4.jpg" title="Telegram test result" alt="Telegram test result">}}

В этом случае мы видим, что Telegram был доступен при тестировании на Magticom Ltd. (AS16010) 3 августа 2022 года в 12:19 по местному времени. Этот вывод сделан потому, что [тест Telegram OONI](https://ooni.org/nettest/telegram/) смог успешно подключиться к Telegram и веб-интерфейсу (`web.telegram.org`).

Если бы Telegram по итогам теста был отмечен как (возможно) заблокированный, то на этой странице измерения отобразилась бы соответствующая информация (на основе эвристики [теста Telegram OONI](https://ooni.org/nettest/telegram/)).

Как вы можете заметить, в нижней части экрана есть серая полоса, говорящая о том, что измерение не было загружено в [OONI Explorer](https://explorer.ooni.org/) и [OONI API](https://api.ooni.io/). Возможно, это произошло из-за плохого сетевого подключения. Чтобы повторить попытку загрузки измерений, нажмите **Загрузить**.

Также вы можете найти результаты тестов Signal в вашем приложении OONI Probe.

{{<img src="images/signal-test-result.jpg" title="Signal results" alt="Signal results">}}

В этом случае мы видим, что Signal был досутен при тестировании на Magticom Ltd. (AS16010) 2 августа 2022 года в 10:18 по местному времени. Такой вывод сделан, потому что [тест Signal OONI](https://ooni.org/nettest/signal) смог успешно подключиться к Signal.

Если бы Signal по итогам теста был отмечен как (возможно) заблокированный, то на этой странице измерения отобразилась бы соответствующая информация (на основе эвристики [теста Signal](https://ooni.org/nettest/signal)).

Во всех случаях мы рекомендуем обращаться к данным OONI, публикующимся в [OONI Explorer](https://explorer.ooni.org/), где вы можете изучить обобщенные результаты (и потенциально исключить [ложные блокировки](https://ooni.org/support/glossary/#false-positive) и подтвердить настоящие блокировки).

### Обход блокировки

Вы можете получить доступ к результатам тестов OONI Probe на эффективность инструментов обхода блокировок следующим образом: 

**Шаг 1.** Нажмите **Обход блокировки** на экране с результатами тестов вашего приложения OONI Probe. 

{{<img src="images/new-test-results.jpg" title="Test results page" alt="Test results page">}}

{{<img src="images/image130.jpg" title="Test results page" alt="Test results page">}}

{{<img src="images/image132.jpg" title="Test results page" alt="Test results page">}}

Теперь вы видите список инструментов обхода блокировок (Psiphon, Tor), которые вы протестировали в рамках отдельной сессии.

В верхней панели мы показываем общие результаты вашего тестирования инструментов обхода блокировок. Рядом с каждым протестированным инструментом будет либо зеленая галочка (подтверждающая доступность приложения), либо красный крестик (подтверждающий возможную блокировку приложения).

**Шаг 2.** Нажмите на **строку протестированного инструмента**, чтобы получить доступ к данным о результатах тестирования этого инструмента. 

{{<img src="images/image108.jpg" title="Circumvention test results" alt="Circumvention test results">}}

Приведенная выше страница относится к тестированию [Psiphon](https://psiphon.ca/).

{{<img src="images/image21.jpg" title="Psiphon test result page" alt="Psiphon test result page">}}

Мы видим, что Psiphon был доступен при тестировании на Magticom Ltd. (AS16010) 2 августа 2022 года в 13:11 по местному времени. Такой вывод сделан, потому что [тест OONI Psiphon](https://ooni.org/nettest/psiphon/) смог успешно реализовать соединение Psiphon.

Если бы Psiphon по итогам теста был отмечен как (возможно) заблокированный, то на этой странице измерения отобразилась бы соответствующая информация (на основе эвристики [теста Psiphon](https://ooni.org/nettest/psiphon/)).

Таким же образом вы можете получить доступ к результатам тестирования [Tor](https://www.torproject.org/) через результаты тестирования инструментов обхода блокировок в вашем приложении OONI Probe.

{{<img src="images/image107.jpg" title="Tor test results" alt="Tor test results">}}

В этом случае мы видим, что Tor был доступен при тестировании на Magticom Ltd. (AS16010) 2 августа 2022 года в 13:11 по местному времени. Такой вывод сделан потому, что [тест OONI Tor](https://ooni.org/nettest/tor/) смог успешно подключиться к большинству стандартных мостов Tor и ко всем центрам Tor.

Если бы Tor по итогам теста был отмечен как (возможно) заблокированный, то на этой странице измерения отобразилась бы соответствующая информация (на основе эвристики [теста Tor](https://ooni.org/nettest/tor/)).

### Производительность

Вы можете получить доступ к результатам тестов производительности вашей сети в вашем приложении OONI Probe следующим образом: 

**Шаг 1.** Нажмите **Производительность** на экране с результатами тестов в вашем приложении OONI Probe. 

{{<img src="images/new-test-results.jpg" title="Test results page" alt="Test results page">}}

{{<img src="images/image131.jpg" title="Test results page" alt="Test results page">}}

Теперь вы видите список тестов на производительность, которые вы произвели в рамках отдельной сессии. В верхней панели мы показываем общие результаты вашего тестирования производительности. Основные итоги теста показаны рядом с каждым из результатов.

**Шаг 2.** Нажмите на **строку отдельного теста**, чтобы получить доступ к данным о результатах тестирования. 

{{<img src="images/image16.jpg" title="Performance test results" alt="Performance test results">}}

Приведенная выше страница измерений взята из [теста скорости NDT](https://ooni.org/nettest/ndt/).

{{<img src="images/image79.jpg" title="NDT speed test details" alt="NDT speed test details">}}

Мы видим, что когда был выполнен этот [тест скорости NDT](https://ooni.org/nettest/ndt/) в сети Magticom Ltd. (AS16010) 2 августа 2022 года в 13:26 по местному времени, скорость загрузки из сети составила 9,44 мегабита в секунду, скорость загрузки в сеть составила 11,5 мегабита в секунду, и потребовалось 151,6 миллисекунд, чтобы установить соединение с сервером [M-Lab](https://www.measurementlab.net/) (`mil03-IT`). Это указывает на среднюю скорость интернета, учитывая, что средний пинг (до этого сервера M-Lab) составляет 453.3 мс.

Вы можете сравнить результаты теста NDT с параметрами интернет-соединения, которые предлагает вам ваш интернет-провайдер.

Вы можете получить доступ к результатам [DASH](https://ooni.org/nettest/dash/) теста через результаты производительности в вашем приложении OONI Probe.

{{<img src="images/image92.jpg" title="Dash test results" alt="Dash test results">}}

В этом случае мы видим, что [видео-стриминговый тест DASH](https://ooni.org/nettest/dash/) был запущен на Magticom Ltd. (AS16010) 2 августа 2022 года в 13:35 по местному времени. Во время теста можно было транслировать видео до 1080p без буферизации, при этом средний битрейт составлял 6,07 мегабита в секунду. Это указывает на то, что пользователь может транслировать видео высокого разрешения в этой сети, если сервер потоковой передачи находится рядом с сервером измерений.

Вы можете сравнит результаты вашего DASH-теста с тем, что официально предлагает ваш интернет-провайдер. в рамках вашего тарифа 

В разделе производительности вы также можете запустить два теста OONI, предназначенных для определения наличия [middleboxes](https://ooni.org/support/glossary/#middlebox) в протестированных сетях:

* [HTTP Invalid Request Line test](https://ooni.org/nettest/http-invalid-request-line/)
* [HTTP Header Field Manipulation test](https://ooni.org/nettest/http-header-field-manipulation/)

Middlebox — это компьютерное сетевое устройство, которое преобразует, проверяет, фильтрует или иным образом манипулирует трафиком для целей, отличных от пересылки пакетов. Многие интернет-провайдеры по всему миру используют middleboxes для повышения производительности сети, предоставления пользователям более быстрого доступа к веб-сайтам и для ряда других задач. Однако иногда такие устройства также используются для реализации интернет-цензуры и/или слежки.

Вы можете получить доступ к результатам теста OONI [HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/) через результаты тестов производительности в приложении OONI Probe.

{{<img src="images/image117.jpg" title="HIRL no middlebox detected" alt="HIRL no middlebox detected">}}

В примере выше мы видим, что тест [HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/) был запущен в Magticom Ltd. (AS16010) 2 августа 2022 г. в 13:36 по местному времени. Когда этот тест был выполнен, он отправил нерабочую строку HTTP-запроса (содержащую недопустимый номер версии HTTP, недопустимое количество полей и огромный метод запроса) эхо-службе, прослушивающей стандартный HTTP-порт. Служба эха (инструмент отладки и измерения, который просто отправляет обратно любые полученные данные) отправила нам нерабочую строку HTTP-запроса точно так же, как она ее получила. Это указывает на то, что в тестируемой сети нет видимого middlebox или манипулирования трафиком.

Однако если бы в тестируемой сети присутствовало устройство middlebox, нерабочая строка HTTP-запроса была бы им перехвачена, что потенциально могло бы вызвать ошибку, которая была бы отправлена нам эхо-службой. Такие ошибки указывают на то, что в тестируемой сети, скорее всего, размещено программное обеспечение для манипулирования трафиком, хотя не всегда понятно, что это за программное обеспечение.

Точно так же вы можете получить доступ к результатам теста OONI [HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/) через результаты в разделе Middleboxes в приложении OONI Probe.

{{<img src="images/image7.jpg" title="HHFM no middlebox detected" alt="HHFM no middlebox detected">}}

В приведенном примере мы видим, что тест [HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/) был запущен на Magticom Ltd. (AS16010) 2 августа 2022 г. в 13:35 по местному времени. Во время теста был эмулирован [HTTP-запрос](https://ooni.org/support/glossary/#http-request) к внутреннему управляющему серверу (который отправляет обратно все полученные данные), но отправлял [HTTP-заголовки](https://ooni.org/support/glossary/#http-header) с вариациями в написании заглавными буквами (т.е. неканонические заголовки HTTP). Поскольку мы получили заголовки HTTP точно в том виде, в каком мы их отправили, в тестируемой сети нет видимых middleboxes или манипулирования трафиком.

Однако, если бы в тестируемой сети присутствовало middlebox-устройство, оно могло бы нормализовать отправленные нами нерабочие заголовки или добавить дополнительные заголовки. В зависимости от того, совпадают ли HTTP-заголовки, которые мы отправляем и получаем от управляющего сервера, мы можем оценить, присутствует ли middlebox-устройство в тестируемой сети.

## Поделиться результатами ваших OONI Probe тестов 

В каждом результате теста OONI Probe вы можете получить доступ к функциям, которые позволят вам:

* Получить **доступ к измерению** в [OONI Explorer](https://explorer.ooni.org/));
* **Поделиться результатами теста** со своими контактами;
* Получить доступ к **необработанным данным измерений**;
* **Получить доступ к логам** вашего измерения.

### Получить **доступ к измерению** в [OONI Explorer](https://explorer.ooni.org/)

**Шаг 1.** Получите доступ к результату любого теста OONI Probe (подробности о том, как найти результаты теста OONI Probe, см. в предыдущем разделе этой инструкции).

{{<img src="images/image62.jpg" title="1tv potentially blocked" alt="1tv potentially blocked">}}

**Шаг 2.** Нажмите кнопку **Показать в OONI Explorer** на экране с результатами тестов OONI Probe.

Это откроет соответствующий результат теста OONI Probe в вашем браузере в [OONI Explorer](https://explorer.ooni.org/). Например, для теста `1tv`, упомянутого выше, это будет следующая [страница](https://explorer.ooni.io/measurement/20220802T082305Z_webconnectivity_GE_16010_n1_mqcSN23znJTURgOm?input=http://1tv.ru ).

### Поделиться результатами вашего теста

Вы можете быть заинтересованы в том, чтобы поделиться результатами своих тестов, особенно если или когда вы столкнетесь со случаями возможной блокировки. Несмотря на то, что результаты ваших тестов автоматически публикуются в [OONI Explorer](https://explorer.ooni.org/) (если вы не откажетесь, как описано в разделе «Настройка OONI Probe: конфиденциальность» этой инструкции), вы все еще можете быть заинтересованы в том, чтобы поделиться результатами теста со своими контактами.

Вы можете поделиться результатами ваших тестов OONI Probe следующим образом: 

**Шаг 1.** Нажмите **Поделиться** в результатах теста OONI Probe. 

{{<img src="images/image87.jpg" title="Share explorer URL" alt="Share explorer URL">}}

Это откроет функцию **Поделиться с** вашего телефона, которая предложит вам поделиться выбранным тестом напрямую с любым из ваших контактов (например, через WhatsApp, Signal или Slack).

**Шаг 2.** Нажмите на контакт, с которым вы хотели бы поделиться измерением.

**Шаг 3.** Нажмите **Отправить**, чтобы поделиться измерением с вашим контактом. Ваш контакт получить ссылку на [OONI Explorer](https://explorer.ooni.org/) со страницей, показывающей результаты вашего теста.

### Необработанные данные

Каждый результат теста OONI Probe предоставляет обзор результатов. Фактические данные (т. е. необработанные данные), на которых основан каждый результат теста, доступны с помощью кнопки **Данные** на каждом экране результатов отдельного теста.

Использовать необработанные данные может быть полезно по следующим причинам:

* Данные раскрывают технические детали, которые потенциально могут служить **доказательством** блокировки;
* Данные могут помочь определить, действительно ли сайт заблокирован или его тестирование вызвало [аномалию](https://ooni.org/support/glossary/#network-anomaly) по другим причинам, не связанным с цензурой (в случае [ложных блокировок](https://ooni.org/support/glossary/#false-positive)).

Вы можете получить доступ к необработанным данным и поделиться ими следующим образом:

**Шаг 1.** Нажмите кнопку **Данные** на экране с результатами теста OONI Probe.

{{<img src="images/image133.jpg" title="Data button" alt="Data button">}}

**Шаг 2.** Вы можете скопировать данные и поделиться ими используя кнопку **Скопировать** в верхнем правом углу.

{{<img src="images/image134.jpg" title="Copy to clipboard" alt="Copy to clipboard">}}

### Логи

Лог — это файл, в котором записано, как работало конкретное программное обеспечение. В контексте OONI Probe к каждому результату теста прилагается лог, в котором записано, как этот конкретный тест выполнялся в конкретной сети. Эти данные видны только в том случае, если у вас включен параметр **Журналы отладки**. Чтобы проверить, включена ли эта опция, перейдите в меню **Расширенные настройки** в **Настройки**.

Потенциально может быть полезно иметь доступ к логам тестов OONI Probe, если приложение выдало ошибку или тест не смог запуститься должным образом. В этих случаях вы можете поделиться соответствующим логом с [командой OONI](https://ooni.org/about/#contact), чтобы помочь нам **исправить** проблему.

## Настройки OONI Probe

Вы можете кастомизировать ваше приложение OONI Probe через настройки.

**Шаг 1.** Нажмите **Настройки** в нижнем меню приложения OONI Probe.

{{<img src="images/image63.jpg" title="Settings page" alt="Settings page">}}

Теперь вы видите все настройки приложения OONI Probe.

В следующих разделах мы расскажем про каждую из настроек.

### Уведомления

Если вы используете OONI Probe на **Android**, вы можете включить **уведомления**, чтобы получать сообщения от [команды OONI](https://ooni.org/about/#contact).

В первую очередь мы рассылаем уведомления, когда узнаем о цензуре в определенной стране, призывая пользователей OONI Probe в этой стране протестировать сервисы, которые могут быть заблокированы (или которые кажутся заблокированными на основании [измерений OONI](https://explorer.ooni.org/)). Обычно мы не отправляем push-уведомления слишком часто.

Вы можете настроить уведомления следующим образом:

**Шаг 1.** Нажмите **Уведомления** в настройках вашего приложения OONI Probe.

{{<img src="images/image114.jpg" title="Tap notification settings" alt="Tap notification settings">}}

Вы увидите, что изначально уведомления отключены.

{{<img src="images/image94.jpg" title="Notification settings screen" alt="Notification settings screen">}}

**Шаг 2.** Включите параметр **Включено**, чтобы получать уведомления.

{{<img src="images/image71.jpg" title="Enable notifications" alt="Enable notifications">}}

Включив уведомления, вы можете получить от нас сообщение, когда и если мы узнаем о случае интернет-цензуры в вашей стране. В нашем сообщении мы можем предоставить ссылку [OONI Run](https://run.ooni.io/) для тестирования конкретных сервисов, которые могут оказаться заблокированными.

### Автоматическое тестирование

Чтобы не запускать тесты вручную, вы можете **включить автоматическое тестирование** в настройках приложения OONI Probe, и OONI Probe будет запускать тесты автоматически!

После включения автоматического тестирования, OONI Probe будет **запускать все тесты в фоновом режиме несколько раз в день** (за исключением тестов производительности, интенсивно использующих ширину соединения), тестируя другой набор сайтов (из [списков тестов Citizen Lab](https://github.com/citizenlab/test-lists/tree/master/lists)) каждый раз. Чтобы не перегружать раздел «Результаты тестирования» вашего приложения, результаты автоматически публикуются в [OONI Explorer](https://explorer.ooni.org/) практически в режиме реального времени (но не отображаются в разделе «Результаты тестирования»).

С помощью автоматизированного тестирования OONI Probe вы можете **регулярно предоставлять данные о цензуре** (без необходимости что-либо делать), позволяя сообществу выступающему за свободу интернета отслеживать случаи цензурирования интернета в вашей стране.

Чтобы активировать автоматическое тестирование OONI Probe выполните следующие действия:

**Шаг 1.** Нажмите **Настройки** на нижней панели OONI Probe и нажмите кнопку **Автоматическое тестирование**. 

{{<img src="images/image135.jpg" title="Automated testing settings" alt="Automated testing settings">}}

В разделе настроек **Автоматическое тестирование** вы увидите, что автоматическое тестирование OONI Probe отключено по умолчанию.

{{<img src="images/image136.jpg" title="Automated testing disabled" alt="Automated testing disabled">}}

**Шаг 2.** Активируйте в настройках опцию **Запускать тесты автоматически**.

{{<img src="images/image138.jpg" title="Always automated testing" alt="Always automated testing">}}

Вы активировали автоматическое тестирование OONI Probe! OONI Probe автоматически запускает тесты несколько раз в день (без вмешательства пользователя), результаты тесирования автоматически публикуются в [OONI Explorer](https://explorer.ooni.org/).

Если у вас нет ограничений по количеству мобильного трафика или использования батареи, вы можете проводить автоматические измерения без подключения к Wi-Fi или зарядного устройства. Для этого отключите настройки **Только по Wi-Fi** и **Только во время зарядки**.

{{<img src="images/image137.jpg" title="Automated testing enabled" alt="Automated testing enabled">}}

**Важно:** Если у вас включен VPN, OONI Probe *не* запустит тесты автоматически. Пожалуйста, **отключите VPN** для автоматического тестирования OONI Probe.

### Варианты тестирования

Вы можете настроить OONI Probe на основе различных вариантов тестирования каждого раздела («Сайты», «Мессенджеры», «Обход блокировки», «Производительность»).

**Шаг 1.** Нажмите **Варианты тестирования** в разделе настроек вашего приложения OONI Probe.

{{<img src="images/image2.jpg" title="Test options settings" alt="Test options settings">}}

Вы увидите, что настройки сгруппированы по разделам соответствующим типу тестирования.

{{<img src="images/image111.jpg" title="Test settings" alt="Test settings">}}

Далее мы расскажем вам о каждой группе настроек.

#### Сайты

Про настройки тестирования сайтов мы уже рассказали в предыдущем разделе этой инструкции. Пожалуйста, обратитесь к разделу «**Настройка тестирования сайтов**».

#### Мессенджеры

Вы можете настроить тестирование мессенджеров.

**Шаг 1.** Нажмите **Мессенджеры** в разделе «Варианты тестирования» настроек приложения.

{{<img src="images/image84.jpg" title="Tap IM settings" alt="Tap IM settings">}}

Вы увидите 4 теста (для [WhatsApp](https://ooni.org/nettest/whatsapp/), [Telegram](https://ooni.org/nettest/telegram/), [Facebook Messenger]( https://ooni.org/nettest/facebook-messenger/) и [Signal](https://ooni.org/nettest/signal)), которые включены в карточку мессенджеров основного меню OONI Probe. Все 4 теста включены по умолчанию.

{{<img src="images/new-im-settings.jpg" title="IM settings" alt="IM settings">}}

Если вы хотите ограничить тестирование несколькими (или ни одним) из этих тестов, вы можете сделать это, отключив соответствующие тесты в этих настройках.

**Примечание.** Нас часто спрашивают, могут ли пользователи добавить приложение для обмена мгновенными сообщениями, которое они хотели бы протестировать (для индивидуального тестирования приложения с помощью OONI Probe). К сожалению, это не так просто, как индивидуальное тестирование сайта (где вы можете добавить любой URL для тестирования). Тестирование приложения требует определения всех конечных точек соответствующего приложения и определения наилучшего способа измерения доступности этого конкретного сервиса. Это варьируется от приложения к приложению, и на создание каждого теста мессенджера OONI Probe уходит немало усилий. Вот почему в настоящее время у нас есть только несколько тестов мессенджеров, и [методология](https://ooni.org/nettest/) каждого теста уникальна. Мы уделяем приоритетное внимание разработке тестов мессенджеров, которые (а) часто блокируются по всему миру и (б) получают много запросов от сообщества. Если есть другие мессенджеры, для которых, по вашему мнению, мы должны отдать приоритет тестированию, [дайте нам знать](https://ooni.org/about/#contact).

#### Обход блокировки

Вы можете настроить тестирование инструментов обхода блокировок.

**Шаг 1.** Нажмите **Обход блокировок** в разделе настроек «Варианты тестирования».

{{<img src="images/image109.jpg" title="Tap circumvention" alt="Tap circumvention">}}

Вы увидите 2 теста ([Psiphon](https://ooni.org/nettest/psiphon/) и [Tor](https://ooni.org/nettest/tor/)), которые включены в раздел тестирования инструментов обхода блокировок приложения OONI Probe. Оба теста изначально включены.

{{<img src="images/image20.jpg" title="Circumvention settings" alt="Circumvention settings">}}

Если вы хотите ограничить тестирование только одним из этих тестов (или отключить оба), вы можете это сделать отключив нужные тесты в настройках.

**Примечание.** Нас иногда спрашивают, могут ли пользователи добавить VPN, который они хотели бы протестировать. К сожалению, это не так просто, как индивидуальное тестирование сайта (где вы можете добавить любой URL для тестирования). Тестирование сервиса требует определения всех конечных точек соответствующего сервиса и определения наилучшего способа измерения доступности этого конкретного VPN. Это варьируется от сервиса к сервису, и на создание каждого теста инструмента обхода OONI Probe уходит немало времени. Вот почему в настоящее время у нас есть только несколько тестов инструментов обхода цензуры, и [методология](https://ooni.org/nettest/) каждого теста уникальна. Мы уделяем первоочередное внимание разработке тестов, когда есть возможность сотрудничать с разработчиками инструментов обхода цензуры. Если есть другие инструменты, тестированию которых, по вашему мнению, мы должны отдать приоритет, [дайте нам знать](https://ooni.org/about/#contact).

#### Производительность

Вы можете настроить ваши тесты на производительность.

**Шаг 1.** Нажмите **Производительность** в разделе настроек «**Варианты тестирования**».

{{<img src="images/image82.jpg" title="Performance settings" alt="Performance settings">}}

Вы увидите 4 доступных теста: ([NDT](https://ooni.org/nettest/ndt/), [DASH](https://ooni.org/nettest/dash/), [HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/), [HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/)) которые включены в тестирование производительности сети в рамках OONI Probe. Все 4 теста по умолчанию включены.

{{<img src="images/image43.jpg" title="Performance settings" alt="Performance settings">}}

Если вы хотите тестировать только один (или никакие из этих тестов) вы можете это сделать отключив нужные тесты в настройках.

### Конфиденциальность

Раздел «Конфиденциальность» настроек OONI Probe относится к публикации результатов тестирования OONI Probe и отправке [отчетов об ошибках](https://ooni.org/about/data-policy).

**Шаг 1.** Нажмите **Конфиденциальность** в настройках OONI Probe.

{{<img src="images/image35.jpg" title="Privacy settings" alt="Privacy settings">}}

По умолчанию результаты тестов OONI Probe публикуются автоматически, а отправка отчетов об ошибках будет включена только если вы согласились на это во время первого входа в приложение.

{{<img src="images/image80.jpg" title="Privacy settings" alt="Privacy settings">}}

Мы **поощряем публикацию результатов тестов OONI Probe**, потому что они могут помочь повысить прозрачность интернет-цензуры и поддержать исследования и усилия по защите интересов интернет-сообщества.

Если вы опубликуете результаты тестов OONI Probe, они будут включать следующие данные:

* Дата и время теста;
* Код страны (например, 'RU' для России);
* Информацию о сети: [ASN](https://ooni.org/support/glossary/#asn) (например, `AS16010` for Magticom Ltd.);
* Данные о тестах (которые зависят от [теста OONI Probe](https://ooni.org/nettest/)).

Дополнительная информация доступна в нашей [Политике данных](https://ooni.org/about/data-policy).

Если вы решите делиться с нами отчетами об ошибках, вы будете делиться информацией, необходимой для выявления ошибок и повышения производительности приложения OONI Probe. Эти отчеты включают версию приложения OONI Probe и информацию о том, почему и как конкретная функция OONI Probe не работает должным образом.

Вы можете отказаться от публикации результатов тестирования OONI Probe и/или отправки нам отчетов об ошибках, отключив соответствующие настройки.

{{<img src="images/image29.jpg" title="All privacy off" alt="All privacy off">}}

### Дополнительно

Расширенные настройки OONI Probe включают настройки для:

* Изменения **языка** вашего приложения OONI Probe;
* Возможность делиться **логами измерений** для того, чтобы мы могли исправлять ошибки в работе приложения;
* Очистку **места**, которое занимают тесты OONI Probe ;
* Получение предупреждения когда ваш **VPN включен**.

Вы можете получить доступ к расширенным настройкам следующим образом: 

**Шаг 1.** Нажмите **Расширенные настройки** в настройках вашего приложения OONI Probe.

{{<img src="images/image74.jpg" title="Advanced settings" alt="Advanced settings">}}

Теперь у вас есть доступ к расширенным настройкам приложения OONI Probe, где **Журналы отладки** отключены по умолчанию, а **Предупреждение об использовании VPN** включено по умолчанию для всех пользователей OONI Probe.

{{<img src="images/image97.jpg" title="Advanced settings" alt="Advanced settings">}}

**Шаг 2.** Включите **Журналы отладки**, чтобы отправлять информацию (например, версию программного обеспечения OONI Probe), которая может помочь нам выявлять и исправлять ошибки OONI Probe.

**Шаг 3.** Измените язык приложения OONI Probe, нажав **Выбрать язык**.

{{<img src="images/image103.jpg" title="Language Settings" alt="Language Settings">}}

**Шаг 4.** Важно, чтобы ваш **VPN был отключен** при запуске OONI Probe, чтобы обеспечить более точные результаты тестирования. Пожалуйста, **включите предупреждение о включенном VPN**, если вы хотите получать уведомления.

{{<img src="images/image33.jpg" title="Debug logs and VPN disabled" alt="Debug logs and VPN disabled">}}

**Шаг 5.** Нажмите **Очистить**, если вы хотите удалить все результаты тестов с вашего устройства и очистить место.

После этого появится всплывающее окно с вопросом, хотите ли вы удалить все результаты тестов OONI Probe. Все результаты ваших тестов OONI Probe должны быть уже опубликованы в [OONI Explorer](https://explorer.ooni.org/) (если только вы не отказались от публикации результатов во вкладке «Конфиденциальность» в настройках).

{{<img src="images/image38.jpg" title="Delete all results" alt="Delete all results">}}

**Шаг 6.** Нажмите **Удалить**, чтобы удалить все результаты тестов OONI Probe и сохранить место на вашем устройстве.

{{<img src="images/image22.jpg" title="Empty test results" alt="Empty test results">}}

Все результаты тестов OONI Probe были удалены из вашего приложения.

### OONI серверный прокси

Эта функция необходима только в том случае, если приложение OONI Probe **не работает в вашей стране**. Если ваше приложение показывает «Ошибка — не удалось выполнить все доступные тесты», это означает, что OONI Probe пытался связаться со всеми общедоступными конечными точками API OONI (которые мы называем «службами тестирования»), но они были недоступны для него.

{{<img src="images/image143.png" title="OONI Probe failed" alt="OONI Probe failed">}}

Нажав на настройку **Внутренний прокси-сервер OONI**, вы сможете выбрать, какой прокси-сервер вы хотите использовать для обхода потенциальной (преднамеренной или случайной) блокировки OONI Probe.

{{<img src="images/image139.jpg" title="OONI Backend Proxy" alt="OONI Backend Proxy">}}

По умолчанию все прокси отключены.

{{<img src="images/image140.jpg" title="OONI Proxy disabled" alt="OONI Proxy disabled">}}

Если вы выберите **Psiphon**, OONI Probe будет использовать [Psiphon](https://psiphon.ca/) обращаясь ко всем сервисам тестирования.

{{<img src="images/image141.jpg" title="Backend proxy Psiphon" alt="Backend proxy Psiphon">}}

Если вы выберете **Пользовательский прокси**, вы сможете указать имя хоста и порт прокси-сервера SOCKS5. Например, имя хоста и порт с 127.0.0.1 и 9050 можно использовать, если на вашем устройстве запущен Orbot (или Tor внутри Termux).

{{<img src="images/image142.jpg" title="Backend proxy custom" alt="Backend proxy custom">}}

При включении внутреннего прокси-сервера OONI, OONI Probe *не* будет работать через VPN. Вместо этого OONI Probe будет использовать [Psiphon](https://psiphon.ca/) или собственный прокси-сервер (в зависимости от того, что вы выберете), чтобы обойти потенциальную блокировку серверных служб OONI.

### Отправить письмо поддержке

Если у вас возникли проблемы с OONI Probe и вам нужна поддержка, мы рекомендуем вам обратиться к нам. Вы можете сделать это, выполнив следующие действия:

**Шаг 1.** Нажмите **Обратиться в поддержку** в настройках OONI Probe.

{{<img src="images/image89.jpg" title="Send email to support" alt="Send email to support">}}

Приложение предложит вам отправить емейл через один из почтовых клиентов на вашем телефоне.

{{<img src="images/image39.jpg" title="Send email prompt" alt="Send email prompt">}}

**Шаг 2.** Напишите письмо с описанием проблем, с которыми вы столкнулись при использовании OONI Probe. В зависимости от проблемы может быть полезно поделиться с нами логами и/или необработанными данными измерений (как описано в разделе «Поделиться результатами ваших тестов OONI Probe» этой инструкции).

**Шаг 3.** Отправьте ваше письмо на [contact@openobservatory.org](mailto:contact@openobservatory.org).

Если вам нужна срочная помощь от команды OONI, мы просим вас связаться с нами в канале [OONI Slack](https://slack.ooni.org/), где мы сможем общаться с вами в режиме реального времени.

### Об OONI

Последняя настройка «Об OONI» приложения OONI Probe содержит информацию [об OONI](https://ooni.org/about/) и **версию программного обеспечения OONI Probe**, которую вы используете в данный момент.

**Шаг 1.** Нажмите **Об OONI** в настройках приложения OONI Probe.

{{<img src="images/image44.jpg" title="About OONI" alt="About OONI">}}

Откроется экран с общей информацией об OONI, а также о версии программного обеспечения OONI Probe, которую вы используете в данный момент. В следующем примере это **OONI Probe 3.7.0**.

{{<img src="images/new-about-screen.jpg" title="OONI About page" alt="OONI About page">}}

**Шаг 2.** Нажмите кнопку **Подробнее**, чтобы получить доступ к [веб-сайту OONI](https://ooni.org/) и узнать больше о нашем проекте.

**Шаг 3.** Нажмите **Блог**, чтобы получить доступ к [блогу OONI](https://ooni.org/blog/) и ознакомиться с нашими публикациями.

**Шаг 4.** Нажмите **Отчеты**, чтобы прочитать наши [отчеты об исследованиях](https://ooni.org/reports/) об интернет-цензуре по всему миру (на основе данных OONI).

**Шаг 5.** Нажмите **Политика данных OONI**, чтобы прочитать нашу [Политику данных](https://ooni.org/about/data-policy).

Спасибо, что прочитали эту инструкцию, и спасибо, что используете OONI Probe!
