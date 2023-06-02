---
title: "Benutzerhandbuch: OONI Probe Desktop App"
description: "Dieses Benutzerhandbuch enthält eine schrittweise Anleitung zur Verwendung der OONI Probe Desktop App."
---
**Zuletzt aktualisiert:** 6 September 2022

**OONI Probe Desktop Version:** 3.7.0

Wir sind Curtis Baltimore sehr dankbar für die Übersetzung dieses Dokuments.

{{<img src="images/install-desktop.png" title="Install OONI Probe Desktop" alt="Install OONI Probe Desktop">}}

OONI Probe ist eine [freie und quelloffene](https://github.com/ooni/probe) Anwendung, mit der du Internet-Zensur und andere Formen von Netzwerkstörungen messen kannst. Dieses Benutzerhandbuch enthält **Schritt-für-Schritt-Anweisungen** zur Installation, Ausführung und Anpassung der [OONI Probe Desktop App](https://ooni.org/install/desktop).

**Was dir dieses Handbuch bietet:**

* Erfahre, wie du OONI Probe Desktop verwenden kannst, um:

  * die Blockierung von Webseiten zu testen
  * die Blockierung von Instant Messaging-Apps zu testen
  * die Blockierung von Umgehungstools zu testen
  * die Geschwindigkeit und Performance deines Netzwerks zu testen
* deine OONI-Probe-Tests an Websites deiner Wahl anzupassen
* Erfahre, wie du auf deine OONI-Probe-Testergebnisse zugreifen und sie weitergeben kannst
* Konfiguriere die Einstellungen deiner OONI Probe App

Wir hoffen, dass du dich nach der Lektüre dieses Handbuchs motiviert fühlst, dein Wissen und deine Fähigkeiten über OONI Probe mit anderen zu teilen!

Das folgende Inhaltsverzeichnis soll dir bei der Navigation durch das Handbuch helfen.

{{<table-of-contents>}}

## Einführung zu OONI Probe

OONI Probe ist [freie und quelloffene Software](https://github.com/ooni/probe), die zur Messung von Internetzensur und anderen Formen der Netzstörung entwickelt wurde. Seit 2012 wird diese Software vom [Open Observatory of Network Interference (OONI)](https://ooni.org/) entwickelt, einem gemeinnützigen Projekt, das ursprünglich aus dem [Tor-Projekt](https://www.torproject.org/) hervorgegangen ist.

Mit der OONI Probe App (verfügbar für die Plattformen [Mobile](https://ooni.org/install/mobile) und [Desktop](https://ooni.org/install/desktop)) kannst du [Netzwerkmessungstests](https://ooni.org/nettest/) durchführen, um Folgendes zu überprüfen:

* Blockierung von [Websites](https://ooni.org/nettest/web-connectivity/);
* Blockierung von Instant Messaging Apps ([WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/), [Signal](https://ooni.org/nettest/signal));
* Blockierung von Umgehungstools ([Tor](https://ooni.org/nettest/tor/), [Tor Snowflake](https://ooni.org/nettest/tor-snowflake/), [Psiphon](https://ooni.org/nettest/psiphon/));
* Vorhandensein von Systemen mit ([Middleboxen](https://ooni.org/nettest/http-header-field-manipulation/)) in deinem Netz, die für Zensur und/oder Überwachung verantwortlich sein könnten;
* [Geschwindigkeit und Leistung](https://ooni.org/nettest/ndt/) deines Netzwerks und [Leistung deines Video-Streamings](https://ooni.org/nettest/dash/).

Sobald du OONI Probe ausführst, werden deine Testergebnisse automatisch an die OONI-Server gesendet, [verarbeitet](https://github.com/ooni/pipeline) und [veröffentlicht](https://ooni.org/data/), und zwar fast in Echtzeit (es sei denn, du hast die Veröffentlichung deiner Testergebnisse abgelehnt).

OONI [veröffentlicht die Ergebnisse der OONI-Probe-Tests](https://ooni.org/data/), die aus der ganzen Welt zusammengetragen wurden, um:

* die **Transparenz der Internet-Zensur** weltweit zu erhöhen;
* **Beweise für Internet-Zensur** und andere Formen der Netzbeeinflussung zu teilen;
* die **unabhängige Überprüfung** von OONI-Zensurergebnissen zu ermöglichen;
* **reproduzierbare Forschung** zu unterstützen;
* **Forschung, Politik, Recht und Interessenvertretung** in der ganzen Welt zu unterstützen;
* die **öffentliche Debatte** über die Informationskontrolle zu unterstützen.

Um den öffentlichen Zugang zu den Testergebnissen der OONI-Probe (allgemein als “Messungen” bezeichnet) zu ermöglichen, stellt das OONI-Team diese auf [OONI Explorer](https://explorer.ooni.org/) zur Verfügung: eine Webplattform, die Diagramme auf der Grundlage der Messabdeckung und ein Suchwerkzeug zur Erkundung der Messungen bietet.

Der [OONI Explorer](https://explorer.ooni.org/) beherbergt mehr als 850 Millionen Netzwerkmessungen, die seit 2012 von 24'500 Netzwerken in 241 Ländern und Regionen gesammelt wurden, und ist damit wahrscheinlich die **größte globale, offene Datenquelle zu Internetzensur**.

Wenn du OONI Probe ausführst, wirst du:

* erfahren, ob und wie dein Internetdienstanbieter (ISP) den Zugriff auf bestimmte Websites und Anwendungen zensiert;
* Messungen beitragen, die öffentlich archiviert werden und es der weltweiten Commnity für Internetfreiheit ermöglichen, Internet-Zensur zu überwachen, zu erkennen und zu bekämpfen.

Dieser Leitfaden soll dich durch die Benutzung der [OONI Probe Desktop App](https://ooni.org/install/desktop) führen, damit du dich einer globalen Gemeinschaft anschließen kannst, die die Internetzensur misst.

### Haftungsausschluss

Da OONI Probe zur Messung der Internetzensur entwickelt wurde, kann die Ausführung für manche Menschen in manchen Ländern [riskant](https://ooni.org/about/risks/) sein.

Einige Dinge sollten berücksichtigt werden:

* **OONI Probe ist kein Werkzeug zum Schutz der Privatsphäre.** Jeder, der deine Internet-Aktivitäten überwacht (z.B. Regierung, Internetdienstanbieter, Arbeitgeber), kann sehen, dass du OONI Probe verwendest (genauso wie sie wahrscheinlich jede andere Software sehen können, die du verwendest).
* **OONI Probe ist ein Ermittlungsinstrument.** Einige OONI Probe-Tests sind ausdrücklich dazu gedacht, Internet-Zensur aufzudecken.
* **[Dein Bedrohungsmodell](https://www.eff.org/keeping-your-site-alive/evaluating-your-threat-model).** Ein profilierter Aktivist, der bereits stark überwacht wird, könnte beispielsweise mehr Aufmerksamkeit auf sich ziehen, wenn er OONI Probe laufen lässt.
* **Die Gesetze und Vorschriften des Landes, von dem aus du OONI Probe betreibst.** Am besten konsultierst du einen Anwalt vor Ort.
* **Die Arten von Websites, die du testest.** Du kannst mit OONI Probe (in einigen Ländern) gesetzlich verbotene, provokative oder anstößige [Websites](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe) testen.
* **Die Arten von OONI-Probe-Tests, die du durchführst.** Nicht alle [OONI-Probe-Tests](https://ooni.org/nettest/) haben das gleiche Gewicht in Bezug auf das potenzielle Risiko. OONI Probe enthält zum Beispiel den [NDT-Test](https://ooni.org/nettest/ndt/) (zur Messung der Geschwindigkeit und Leistung eines Netzwerks), der im Vergleich zu anderen Tests zur Messung der Sperrung von Websites oder Apps als weniger politisch oder kontrovers angesehen werden kann.
* **Ob du deine Messungen veröffentlichst oder nicht.** OONI [veröffentlicht die Messungen offen](https://ooni.org/data/), die von OONI Probe-Benutzern gesammelt wurden, um die Transparenz der Internetzensur auf der ganzen Welt zu erhöhen. Wir tun unser Bestes, um deine IP-Adresse oder andere potentiell persönlich identifizierbare Informationen nicht zu veröffentlichen. Erfahre mehr in unserer [Datenrichtlinie](https://ooni.org/about/data-policy).

Um mehr über mögliche Risiken im Zusammenhang mit der Verwendung von OONI Probe zu erfahren, lies bitte unsere entsprechende [Dokumentation](https://ooni.org/about/risks/).

## Installiere OONI Probe Desktop

Die OONI Probe Desktop App ist verfügbar für [Windows und macOS](https://ooni.org/install/desktop). Wenn du auf Linux arbeitest, installiere bitte das [OONI Probe Command Line Interface (CLI)](https://ooni.org/install/cli/ubuntu-debian).

Du kannst die OONI Probe Desktop App (auf Windows und macOS) durch die folgenden Schritte installieren:

**Schritt 1.** Besuche die OONI Probe Desktop Installationsseite (auf der OONI Website):<https://ooni.org/install/desktop>

{{<img src="images/install-desktop.png" title="Install OONI Probe Desktop" alt="Install OONI Probe Desktop">}}

**Schritt 2.** Klicke auf die Schaltfläche **Download**, um OONI Probe herunterzuladen. Die Seite wird dir eine OONI Probe Version vorschlagen, die für dein Betriebssystem relevant ist (z.B. macOS). Wenn du eine Version für ein anderes Betriebssystem auswählen möchtest, klicke bitte auf die Schaltfläche **Andere Plattformen**.

{{<img src="images/download-windows-macos.png" title="Download OONI Probe Desktop" alt="Download OONI Probe Desktop">}}

{{<img src="images/image1.jpg" title="OS version" alt="OS version">}}

**Schritt 3.** Sobald du OONI Probe heruntergeladen hast, doppelklicke auf die heruntergeladene Datei, um OONI Probe zu **installieren**.

Unter **macOS** ziehe das OONI Probe-Symbol in den Anwendungsordner und lege es dort ab.

{{<img src="images/macos-application-folder.png" title="macOS Application folder" alt="macOS Application folder">}}

Und dann klicke auf **Öffnen**, um die OONI Probe App auf macOS zu installieren.

{{<img src="images/macos-more-info.png" title="macOS screen on More Info" alt="macOS screen on More Info">}}

Klicke unter **Windows** (Windows 10) im folgenden Bildschirm auf **Mehr Informationen**:

{{<img src="images/windows-more-info.png" title="Windows screen on More Info" alt="Windows screen on More Info">}}

Klicke dann auf **Trotzdem ausführen**, um die OONI Probe App unter Windows zu installieren.

{{<img src="images/windows-run-anyway.png" title="Windows screen on Run anyway" alt="Windows screen on Run anyway">}}

**Schritt 4.** Öffne deine OONI Probe Desktop-App. Unter **macOS** kannst du deine OONI Probe App über den Anwendungsordner öffnen. Unter **Windows** starte OONI Probe über die Desktop-Verknüpfung.

### Einführung: Informierte Zustimmung

Nachdem du deine OONI Probe Desktop-App installiert und geöffnet hast, werden dir im Rahmen des Einführungsprozesses einige grundlegende Informationen über OONI Probe angezeigt. 

Du wirst auch über [potenzielle Risiken](https://ooni.org/about/risks/) im Zusammenhang mit dem Betrieb von OONI Probe informiert. Um sicherzustellen, dass du diese potenziellen Risiken verstehst, haben wir ein kurzes Quiz beigefügt, um deine korrekte Zustimmung zu erhalten. Die richtige Beantwortung der Quizfragen ist eine Voraussetzung für die Nutzung von OONI Probe.

Im letzten Schritt des Einführungsprozesses teilen wir mit dir die Arten von Daten, die standardmäßig bei der Ausführung von OONI Probe gesammelt werden (für weitere Informationen verweisen wir auf unsere [Daten-Richtlinie](https://ooni.org/about/data-policy)). Du kannst dich für die Freigabe von Absturzberichten und App-Nutzungsmetriken entscheiden, um uns bei der Verbesserung von OONI Probe zu helfen.

Im Folgenden führen wir dich durch den Einführungsprozess.

**Schritt 1.** Sobald du die grundlegenden Informationen über OONI Probe gelesen hast, tippe auf **Verstanden**.

{{<img src="images/what-is-ooni-probe.png" title="What is OONI Probe" alt="What is OONI Probe">}}

**Schritt 2.** Der nächste Bildschirm zeigt eine Zusammenfassung der potenziellen Risiken, die mit der Ausführung von OONI Probe verbunden sind. Klicke auf **Mehr erfahren**, um unsere [Dokumentation](https://ooni.org/about/risks/) zu lesen, in der mögliche Risiken erläutert werden.

{{<img src="images/learn-more-risks.png" title="Learn more " alt="Learn more ">}}

**Schritt 3.** Wenn du dich über die potentiellen Risiken im Zusammenhang mit dem Betrieb von OONI Probe informiert hast, klicke auf **Ich verstehe**.

{{<img src="images/understand-risks.png" title="Understand risks" alt="Understand risks">}}

**Schritt 4.** Das folgende Quiz basiert auf den Informationen, die du gerade im vorherigen Bildschirm gelesen hast. Klicke auf **Wahr**, um zu zeigen, dass du die Aussage verstanden hast.

{{<img src="images/quiz-1.png" title="Quiz 1" alt="Quiz 1">}}

Du wirst sehen, dass **Wahr** die richtige Antwort ist. Wenn du auf Falsch klickst, erhältst du eine Erklärung, warum die Antwort falsch ist.

{{<img src="images/tick.png" title="Tick" alt="Tick">}}

**Schritt 5.** Klicke auf **Wahr**, um zu zeigen, dass du die Aussage verstanden hast (im zweiten Teil des Quiz).

{{<img src="images/quiz-2.png" title="Quiz 2" alt="Quiz 2">}}

Du wirst sehen, dass **True** die richtige Antwort ist. Wenn du auf Falsch klickst, erhältst du eine Erklärung, warum die Antwort falsch ist.

{{<img src="images/tick.png" title="Tick" alt="Tick">}}

**Schritt 6.** Der folgende Bildschirm fordert dich auf, [Absturzberichte](https://ooni.org/about/data-policy#data-we-collect) zu teilen, die uns helfen können, Fehler in OONI Probe zu identifizieren und zu beheben. Bitte klicke auf **Ja**, um Absturzberichte zu teilen und uns zu helfen, OONI Probe zu verbessern.

{{<img src="images/crash-reporting.png" title="Tick" alt="Tick">}}

**Schritt 7.** Der folgende Bildschirm enthält Informationen über die Datentypen, die OONI (jedes Mal, wenn du OONI Probe ausführst) standardmäßig sammelt und veröffentlicht. Du kannst mehr erfahren, indem du auf **[OONI's Datenrichtlinie](https://ooni.org/about/data-policy)** auf dem Bildschirm klickst.

{{<img src="images/new-default-settings.png" title="Lets Go" alt="Lets Go">}}

**Schritt 8.** Klicke auf **Los geht's**, wenn du bereit bist, Daten über deine Messungen mit uns zu teilen.

Du hast nun den Einführungsprozess abgeschlossen und bist bereit, OONI Probe zu nutzen!

{{<img src="images/empty-dashboard.png" title="Dashboard" alt="Dashboard">}}

**Optionaler Schritt 9.** Wenn du deine Einstellungen so ändern möchtest, dass du dich **nicht** für die Weitergabe von Absturzberichten an uns entscheidest, klicke auf **Einstellungen**. Dadurch wirst du zum Bildschirm OONI Probe-Einstellungen weitergeleitet, wo du alle Standardeinstellungen überprüfen und ändern kannst. Die Übermittlung von Absturzberichten ist standardmäßig deaktiviert und wird nur aktiviert, wenn du auf die Schaltfläche **Los geht's** (von Schritt 7 oben) klickst, oder wenn du die entsprechende Einstellung manuell aktivierst.

{{<img src="images/new-default-settings-onboarding.png" title="Default settings" alt="Default settings">}}

Ausführliche Informationen zu den OONI-Probe-Einstellungen findest du im Abschnitt [Konfigurieren deiner OONI-Probe-Einstellungen](https://ooni.org/support/ooni-probe-desktop#configuring-your-ooni-probe-settings) in diesem Handbuch.

## OONI Probe Desktop ausführen

Nun, da du den Einführungsprozess abgeschlossen hast, kannst du mit OONI Probe beginnen, um die Internetzensur zu messen!

Das **Dashboard** der OONI Probe Desktop App enthält 5 Karten, von denen jede OONI Probe Tests beinhaltet:

* **Websites-Karte** Enthält den [Web-Konnektivitätstest](https://ooni.org/nettest/web-connectivity/) von OONI, der die [Sperrung von Websites](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe) misst.
* **Instant Messaging card.** Beinhaltet OONI's [WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/), und [Signal](https://ooni.org/nettest/signal) Tests, die überprüfen, ob diese Apps blockiert sind.
* **Umgehungskarte** Enthält OONI's [Tor](https://ooni.org/nettest/tor/) und [Psiphon](https://ooni.org/nettest/psiphon/) Tests, die prüfen, ob diese Zensurumgehungstools blockiert sind.
* **Leistungskarte** Enthält den [NDT-Geschwindigkeitstest](https://ooni.org/nettest/ndt/), den [DASH-Videostreaming-Leistungstest](https://ooni.org/nettest/dash/) und OONIs [Middlebox](https://ooni.org/support/glossary/#middlebox) Tests sowie die ([HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/) und [HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/) Tests).
* **Experimental Karte.** Enthält mehrere neue experimentelle Tests, die vom OONI-Team entwickelt wurden. Diese Tests können sich im Laufe der Zeit ändern. Du kannst diese Tests [hier](https://github.com/ooni/spec/tree/master/nettests) sehen.

**Schritt 1.** Klicke **Ausführen** um deine ersten OONI Probe Tests auszuführen.

{{<img src="images/empty-dashboard.png" title="Dashboard" alt="Dashboard">}}

Damit werden **alle** OONI Probe-Tests (auf allen Karten enthalten) in einem Durchgang ausgeführt!

{{<img src="images/running-web-connectivity.png" title="Testing websites" alt="Testing websites">}}

{{<img src="images/running-telegram.png" title="Testing Telegram" alt="Testing Telegram">}}

{{<img src="images/running-psiphon.png" title="Testing Psiphon" alt="Testing Psiphon">}}

{{<img src="images/running-ndt.png" title="Running NDT" alt="Running NDT">}}

{{<img src="images/running-middlebox.png" title="Testing for middleboxes" alt="Testing for middleboxes">}}

OONI Probe sollte alle Tests innerhalb weniger Minuten durchgeführt haben (dies hängt jedoch von der Leistung des Netzwerks ab, mit dem du verbunden bist, und kann in einigen Fällen länger dauern). Wenn die Leistung deines Netzwerks nicht gut genug ist und die Tests zu lange dauern, kannst du **den laufenden Test anhalten**, indem du auf das **Kreuz** in der oberen rechten Ecke klickst.

{{<img src="images/stop-testing.png" title="Stop testing" alt="Stop testing">}}

Klicke auf die Schaltfläche **OK**, um den Test zu beenden.

{{<img src="images/stop-testing-ok.png" title="Stop testing" alt="Stop testing">}}

Deine OONI Probe Testergebnisse werden automatisch auf [OONI Explorer](https://explorer.ooni.org/) und auf der [OONI API](https://api.ooni.io/) veröffentlicht.

Möchtest du deine Tests lieber auf einen bestimmten Testtyp (Karte) beschränken? In den folgenden Abschnitten findest du Anleitungen, wie du das machen kannst.

### Messe die Blockierung von Webseiten

Wenn du nur die Sperrung von Websites messen willst, kannst du dies mit den folgenden Schritten tun:

**Schritt 1.** Klicke auf die Karte **Websites** im Dashboard deiner OONI Probe Desktop App.

{{<img src="images/dashboard-websites.png" title="Dashboard" alt="Dashboard">}}

**Schritt 2.** Klicke auf **Ausführen** auf der Website-Karte.

{{<img src="images/inside-websites-card.png" title="Inside Websites card" alt="Inside Websites card">}}

Du führst jetzt den [Web-Konnektivitätstest](https://ooni.org/nettest/web-connectivity/) von OONI aus, um die Blockierung von Websites zu messen.

{{<img src="images/running-web-connectivity.png" title="Testing websites" alt="Testing websites">}}

Deine OONI Probe Testergebnisse werden automatisch auf [OONI Explorer](https://explorer.ooni.org/) und auf der [OONI API](https://api.ooni.io/) veröffentlicht.

**Welche Websites werden getestet?**

Standardmäßig wirst du Websites testen, die in den folgenden 2 Listen enthalten sind:

* **[Globale Testliste](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)**. Enthält international relevante Websites (z. B. facebook.com).
* **[Länderspezifische Testliste](https://github.com/citizenlab/test-lists/tree/master/lists)**. Enthält Websites, die nur für das Land relevant sind, in dem du OONI Probe ausführst.

Unabhängig davon, von welchem Land aus du OONI Probe ausführst, testest du *immer* Websites aus der [globalen Testliste](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv).

OONI Probe bestimmt automatisch, welche [länderspezifische Liste](https://github.com/citizenlab/test-lists/tree/master/lists) für den Test ausgewählt wird, basierend auf dem Land, in dem du OONI Probe ausführst. Wenn du zum Beispiel OONI Probe in Brasilien ausführst, wirst du Webseiten aus der globalen Testliste und aus der brasilianischen Testliste testen. Wenn du nach Deutschland reist und OONI Probe ausführst, werden die Webseiten aus der globalen und der deutschen Testliste getestet. Wenn du OONI Probe jedoch von einem Land aus startest, das noch keine länderspezifische Testliste hat (weil sie noch nicht erstellt wurde), wirst du nur Websites aus der globalen Liste testen.

Wenn du zu den [Citizen Lab Testlisten](https://github.com/citizenlab/test-lists/tree/master/lists) (welche die von OONI Probe-Benutzern weltweit getesteten Standard-Websites enthalten) beitragen möchtest, lies bitte unsere entsprechende [Dokumentation](https://ooni.org/get-involved/contribute-test-lists).

**Hinweis:** OONI Probe testet **nur so viele Websites, wie es innerhalb von 90 Sekunden** testen kann, wenn du auf “Ausführen” klickst (entweder vom Dashboard oder von der Websites-Karte). Diese Websites (die innerhalb von 90 Sekunden getestet werden) werden nach dem Zufallsprinzip aus den [globalen](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) und (relevanten) [länderspezifischen](https://github.com/citizenlab/test-lists/tree/master/lists) Testlisten ausgewählt. Jedes Mal, wenn du auf “Ausführen” klickst, testest du innerhalb von 90 Sekunden eine andere, zufällige Auswahl von Websites (aus der globalen und der länderspezifischen Testliste). Je öfter du also auf “Ausführen” klickst, desto mehr Websites wirst du testen.

Wenn du eine größere Auswahl an Websites testen möchtest oder ganz andere Websites testen willst, lies bitte den Abschnitt [Anpassen von Website-Tests](https://ooni.org/support/ooni-probe-desktop#customizing-your-website-testing) in diesem Leitfaden.

### Messe das Blockieren von Instant Messaging-Apps

Wenn du nur die Sperrung von Instant-Messaging-Apps messen willst, kannst du dies mit den folgenden Schritten tun:

**Schritt 1.** Klicke auf die Karte **Instant Messaging** im Dashboard deiner OONI Probe Desktop App.

{{<img src="images/dashboard-im.png" title="Dashboard" alt="Dashboard">}}

**Schritt 2.** Klicke auf **Ausführen** in der Instant Messaging-Karte.

{{<img src="images/new-inside-im-card.png" title="Inside IM card" alt="Inside IM card">}}

Du führst jetzt die OONI-Tests [WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/) und [Signal](https://ooni.org/nettest/signal) durch, um die Blockierung dieser Apps zu messen.

{{<img src="images/running-telegram.png" title="Testing Telegram" alt="Testing Telegram">}}

Deine OONI Probe Testergebnisse werden automatisch auf [OONI Explorer](https://explorer.ooni.org/) und auf der [OONI API](https://api.ooni.io/) veröffentlicht.

### Messung der Blockierung von Umgehungstools

Wenn du nur die Sperrung von Tools zur Umgehung der Zensur messen willst, kannst du dies mit den folgenden Schritten tun:

**Schritt 1.** Klicke auf die Karte **Umgehung** im Dashboard deiner OONI Probe Desktop-App.

{{<img src="images/dashboard-circumvention.png" title="Dashboard" alt="Dashboard">}}

**Schritt 2.** Klicke auf **Ausführen** auf der Umgehungskarte.

{{<img src="images/inside-circumvention-card.png" title="Inside Circumvention card" alt="Inside Circumvention card">}}

Du führst jetzt OONIs [Tor](https://ooni.org/nettest/tor/) und [Psiphon](https://ooni.org/nettest/psiphon/) Tests durch, um die Erreichbarkeit dieser Tools zu messen.

{{<img src="images/running-psiphon.png" title="Testing Psiphon" alt="Testing Psiphon">}}

Deine OONI Probe Testergebnisse werden automatisch auf [OONI Explorer](https://explorer.ooni.org/) und auf der [OONI API](https://api.ooni.io/) veröffentlicht.

### Messung der Netzwerkleistung

Wenn du nur die Leistung des Netzwerks messen willst, kannst du dies mit den folgenden Schritten tun:

**Schritt 1.** Klicke auf die Karte **Leistung** im Dashboard deiner OONI Probe Desktop-App.

{{<img src="images/dashboard-performance.png" title="Dashboard" alt="Dashboard">}}

**Schritt 2.** Klicke auf **Ausführen** in der Leistungskarte.

{{<img src="images/inside-performance-card.png" title="Inside Performance card" alt="Inside Performance card">}}

Du führst jetzt den [NDT-Geschwindigkeitstest](https://ooni.org/nettest/ndt/) und den [DASH-Video-Streaming-Leistungstest](https://ooni.org/nettest/dash/) durch.

{{<img src="images/running-ndt.png" title="Running NDT" alt="Running NDT">}}

Deine Testergebnisse werden automatisch auf [OONI Explorer](https://explorer.ooni.org/) und auf der [OONI API](https://api.ooni.io/) veröffentlicht.

**Haftungsausschluss:** Die Tests [NDT](https://ooni.org/nettest/ndt/) und [DASH](https://ooni.org/nettest/dash/) werden gegen Server Dritter durchgeführt, die von [Measurement Lab (M-Lab)](https://www.measurementlab.net/) bereitgestellt werden. Wenn du diese Tests durchführst, wird M-Lab deine IP-Adresse zu Forschungszwecken erfassen und veröffentlichen, unabhängig von deinen OONI-Probe-Einstellungen. Erfahre mehr über die Datenschutzbestimmungen von M-Lab in der [Datenschutzerklärung](https://www.measurementlab.net/privacy/). 

### Messung der Anwesenheit von Middleboxen

Wenn du nur Netzwerke messen willst, um das Vorhandensein von [Middleboxen](https://ooni.org/support/glossary/#middlebox) (und mögliche Anzeichen von Netzwerkmanipulationen) zu erkennen, kannst du dies mit den folgenden Schritten tun:

**Schritt 1.** Klicke auf die Karte **Middleboxen** im Dashboard deiner OONI Probe Desktop-App.

{{<img src="images/dashboard-middleboxes.png" title="Dashboard" alt="Dashboard">}}

**Schritt 2.** Klicke auf **Ausführen** in der Karte Middleboxes.

{{<img src="images/inside-middleboxes-card.png" title="Inside Middleboxes card" alt="Inside Middleboxes card">}}

Du führst jetzt die [Middlebox](https://ooni.org/support/glossary/#middlebox)-Tests von OONI ([HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/)-Test und [HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/)-Test) durch.

{{<img src="images/running-middlebox.png" title="Testing for middleboxes" alt="Testing for middleboxes">}}

Deine OONI Probe Testergebnisse werden automatisch auf [OONI Explorer](https://explorer.ooni.org/) und auf der [OONI API](https://api.ooni.io/) veröffentlicht.

### Durchführung experimenteller Tests

Wenn du nur neue experimentelle Tests durchführen möchtest, die vom OONI-Team entwickelt wurden, kannst du dies mit den folgenden Schritten tun:

**Schritt 1.** Klicke auf die Karte **Experimentell** im Dashboard deiner OONI Probe Desktop-App.

{{<img src="images/dashboard-experimental.png" title="Dashboard experimental" alt="Dashboard experimental">}}

**Schritt 2.** Klicke auf **Ausführen** auf der Experimentell-Karte.

{{<img src="images/inside-experimental-card.png" title="Inside Experimental card" alt="Inside Experimental card">}}

Du führst jetzt die [experimentellen Tests](https://github.com/ooni/spec/tree/master/nettests) aus, die vom OONI-Team entwickelt wurden.

{{<img src="images/running-experimental.png" title="Running experimental" alt="Running experimental">}}

## Automatisierte OONI-Probe-Tests

Anstatt sich an die manuelle Durchführung von Tests erinnern zu müssen, kannst du **automatisierte Tests** in den Einstellungen deiner OONI Probe Desktop-Anwendung aktivieren und OONI Probe führt automatisch Tests für dich durch!

Wenn du die automatischen Tests aktivierst, wird OONI Probe **alle Tests mehrmals täglich im Hintergrund ausführen** (mit Ausnahme der bandbreitenintensiven Leistungstests) und jedes Mal eine andere Gruppe von Websites (aus den [Citizen Lab Testlisten](https://github.com/citizenlab/test-lists/tree/master/lists)) testen. Um den Abschnitt Testergebnisse deiner App nicht zu überfüllen, werden diese Testergebnisse automatisch und nahezu in Echtzeit auf [OONI Explorer](https://explorer.ooni.org/) veröffentlicht (sind aber nicht über den Abschnitt Testergebnisse sichtbar).

Mit den automatisierten OONI-Probe-Tests kannst du **regelmäßig Zensurmessungen** beisteuern (ohne etwas tun zu müssen), was es der Gemeinschaft für Internetfreiheit ermöglicht, Zensurereignisse in deinem Land im Laufe der Zeit zu überwachen und zu erkennen.

Du kannst automatische OONI-Probe-Tests durch die folgenden Schritte aktivieren:

**Schritt 1.** Klicke auf **Einstellungen** in der Seitenleiste deiner OONI Probe Desktop-App.

{{<img src="images/new-automated-testing-disabled.png" title="Automated testing disabled" alt="Automated testing disabled">}}

Unter dem Abschnitt **Automatisierte Tests** der Einstellungen siehst du, dass die automatischen OONI-Probe-Tests standardmäßig deaktiviert sind.

**Schritt 2.** Aktiviere die Option **Tests automatisch ausführen** in den Einstellungen.

{{<img src="images/new-automated-testing-enabled.png" title="Automated testing enabled" alt="Automated testing enabled">}}

Du hast jetzt automatische OONI Probe-Tests aktiviert! OONI Probe führt automatisch mehrmals am Tag Tests durch (ohne Benutzereingriff), und die Testergebnisse werden automatisch auf [OONI Explorer](https://explorer.ooni.org/) veröffentlicht.

Wenn du die automatischen Tests nicht aktiviert hast, wird gelegentlich das folgende Popup-Fenster angezeigt, in dem du gefragt wirst, ob du die automatischen Tests aktivieren möchtest.

{{<img src="images/automated-testing-pop-up.png" title="Automated testing window" alt="Automated testing window">}}

Um automatische Tests zu aktivieren, klickst du auf **Klingt gut**. Wenn du zu einem späteren Zeitpunkt an die Aktivierung der automatischen Tests erinnert werden möchtest, klicke auf **Erinnere mich später**.

## Anpassen der Tests deiner Website

Wenn du Websites mit OONI Probe testest, misst du standardmäßig die URLs, die in den [Citizen Lab Testlisten](https://github.com/citizenlab/test-lists/tree/master/lists) enthalten sind. Mit anderen Worten, wenn du einfach auf “Ausführen” klickst (im Dashboard oder auf der Websites-Karte der OONI Probe-App), testest du eine zufällige Auswahl von Websites aus den [Citizen Lab Testlisten](https://github.com/citizenlab/test-lists/tree/master/lists). Diese Listen wurden in Zusammenarbeit mit Forschern und Experten in den jeweiligen Ländern erstellt. Da sie [auf GitHub](https://github.com/citizenlab/test-lists/tree/master/lists) offen zugänglich sind, kann jeder sie überprüfen, URLs [beitragen](https://ooni.org/get-involved/contribute-test-lists) und die Entfernung bestimmter URLs vorschlagen. Und es ist wichtig, dass wir diese Listen weiterhin [überprüfen und aktualisieren](https://ooni.org/get-involved/contribute-test-lists), da sie die Websites enthalten, die von den meisten OONI-Probe-Nutzern auf der ganzen Welt regelmäßig getestet werden.

Wenn du deine Tests jedoch lieber auf Websites deiner Wahl beschränken möchtest, kannst du dies über die OONI Probe Desktop App tun.

Du kannst deine Website-Tests auf die folgenden Arten anpassen:

* Beschränke deine Tests auf [bestimmte Website-Kategorien](https://ooni.org/support/ooni-probe-desktop#testing-specific-website-categories) (z. B. Nachrichtenmedien und Menschenrechtsinhalte);
* Teste nur [Websites, die dich interessieren](https://ooni.org/support/ooni-probe-desktop#testing-websites-of-your-choice);
* Teste [*alle* URLs](https://ooni.org/support/ooni-probe-desktop#testing-all-websites-from-the-citizen-lab-test-lists) in den ([relevanten](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)) [Citizen Lab Testlisten](https://github.com/citizenlab/test-lists/tree/master/lists) (anstatt eine zufällige Auswahl von Websites in 90 Sekunden zu testen).

In den folgenden Abschnitten wird erläutert, wie du jede der oben genannten Aktionen durchführen kannst. 

### Testen bestimmter Website-Kategorien

Wenn du in der OONI Probe App auf “Ausführen” klickst, testest du Websites aus den [globalen](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) und (relevanten) [länderspezifischen Citizen Lab Testlisten](https://github.com/citizenlab/test-lists/tree/master/lists). 

Diese Websites wurden anhand von [30 standardisierten Kategorien](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) kategorisiert. Diese Kategorien reichen von Nachrichtenmedien, Kultur und Menschenrechtsthemen bis hin zu eher provokativen oder anstößigen Kategorien wie Pornografie (letztere werden einbezogen, weil sie mit größerer Wahrscheinlichkeit blockiert werden, was die Aufdeckung von Zensurtechniken der Internetanbieter ermöglicht).

Standardmäßig sind alle 30 Kategorien in der OONI Probe-Desktop-App aktiviert, um das Testen vielfältigerer Websites zu fördern und die Möglichkeit zu erhöhen, mehr Formen der Website-Zensur zu entdecken.

Wenn du dich jedoch nicht wohl dabei fühlst, alle 30 Kategorien von Websites zu testen (insbesondere, wenn sie Inhalte enthalten, die in deinem Land illegal, provokativ oder anstößig sind), oder wenn nur daran interessiert bist, bestimmte Arten von Inhalten zu testen (z.B. Nachrichtenmedien), kannst du deine OONI Probe-Tests auf die Website-Kategorien deiner Wahl beschränken.

**Schritt 1.** Klicke auf **Einstellungen** in deiner OONI Probe Desktop-App.

{{<img src="images/settings-website-categories.png" title="Website category settings" alt="Website category settings">}}

Unter **Testoptionen** in den Einstellungen siehst du, dass [30 Kategorien von Websites](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) standardmäßig aktiviert sind.

**Schritt 2.** Klicke auf die Schaltfläche **Bearbeiten** (unter “Zu testende Website-Kategorien”).

{{<img src="images/edit-website-categories.png" title="Edit website categories" alt="Edit website categories">}}

Du siehst nun die [30 Kategorien](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) von Websites, die OONI Probe standardmäßig testet. Alle diese Kategorien sind aktiviert.

{{<img src="images/website-categories.png" title="Website categories" alt="Website categories">}}

**Schritt 3.** **Deaktiviere** die Website-Kategorien, die du **nicht** testen möchtest.

{{<img src="images/website-categories-disabled.png" title="Website categories disabled" alt="Website categories disabled">}}

Im obigen Beispiel haben wir 2 Kategorien deaktiviert (“Pornografie” und “Aufreizende Kleidung”).

**Schritt 4.** Klicke auf **Speichern**.

Wenn du zurückgehst, kannst du sehen, dass nur noch 28 Kategorien aktiviert sind (da 2 deaktiviert wurden).

{{<img src="images/28-website-categories.png" title="28 website categories enabled" alt="28 website categories enabled">}}

Du kannst diese Einstellung jederzeit wieder aufrufen, um die Website-Kategorien deiner Wahl zu aktivieren oder zu deaktivieren.

### Testen von Websites deiner Wahl

Du kannst die Websites, die dich interessieren, direkt mit den folgenden Schritten testen:

**Schritt 1.** Klicke auf die Karte **Websites** in deiner OONI Probe Desktop-App.

{{<img src="images/dashboard-websites.png" title="Dashboard" alt="Dashboard">}}

**Schritt 2.** Klicke auf die Schaltfläche **Websites auswählen** auf der Karte Websites.

{{<img src="images/choose-websites.png" title="Choose websites button" alt="Choose websites button">}}

Du siehst nun ein Fenster, in dem du die Website(s), die du testen möchtest, hinzufügen kannst.

{{<img src="images/choose-websites-screen.png" title="Choose websites screen" alt="Choose websites screen">}}

**Schritt 3.** **Tippe die URL** der Website, die du testen willst. Im folgenden Beispiel haben wir `https://www.facebook.com/` eingegeben. 

{{<img src="images/test-facebook.com.png" title="Add facebook" alt="Add facebook">}}

**Wichtig:** Bitte stelle sicher, dass die [URL](https://ooni.org/support/glossary/#url) korrekt eingegeben wird. Wenn sie falsch eingegeben wird, testet OONI Probe die beabsichtigte Website *nicht*, und dies führt möglicherweise zu ungenauen Testergebnissen. 

Ein paar Dinge sind zu beachten:

* Läuft die Website über **HTTP** oder **HTTPS**? Wenn letzteres, füge bitte ein zusätzliches `s` nach `http` ein.
* Enthält die [Domain](https://ooni.org/support/glossary/#domain-name) `www`? Wenn ja, füge es bitte ein.

Um sicherzustellen, dass eine [URL](https://ooni.org/support/glossary/#url) korrekt eingegeben wird, **prüfe bitte, wie sie bei einem Zugriff über einen normalen Browser** erscheint.

**Schritt 4.** Klicke auf **Website hinzufügen**, um eine neue Zeile für das Hinzufügen einer weiteren Website zu Testzwecken zu erstellen.

**Schritt 5.** **Gib eine andere URL** ein, die du testen möchtest. Im folgenden Beispiel haben wir `https://twitter.com/` hinzugefügt. 

{{<img src="images/add-twitter.com.png" title="Add twitter" alt="Add twitter">}}

Wenn du deine Meinung änderst und eine der von dir hinzugefügten URLs entfernen möchtest, kannst du dies tun, indem du auf das rote Symbol neben der jeweiligen URL klickst.

Du kannst so viele URLs hinzufügen, wie du willst. Im folgenden Beispiel haben wir `https://www.gutenberg.org/` hinzugefügt.

{{<img src="images/add-gutenberg.png" title="Add gutenberg" alt="Add gutenberg">}}

**Schritt 6.** Klicke auf **Ausführen**, um alle von dir hinzugefügten Websites zu testen.

Du wirst nun sehen, wie OONI Probe die Webseiten deiner Wahl testet!

{{<img src="images/running-gutenberg.png" title="Testing gutenberg" alt="Testing gutenberg">}}

Deine OONI Probe Testergebnisse werden automatisch auf [OONI Explorer](https://explorer.ooni.org/) und auf der [OONI API](https://api.ooni.io/) veröffentlicht.

### Testen aller Websites aus den Testlisten des Citizen Lab

Die OONI Probe Desktop-App testet nur so viele Websites, wie sie innerhalb von 90 Sekunden erreichen kann (basierend auf den Standardeinstellungen). 

Wenn du eine WiFi-Verbindung hast und **alle Websites** aus den ([relevanten](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)) [Citizen Lab Testlisten](https://github.com/citizenlab/test-lists/tree/master/lists) in einem Rutsch testen möchtest, kannst du dies mit den folgenden Schritten tun:

**Schritt 1.** Klicke auf **Einstellungen** in der Seitenleiste deiner OONI Probe Desktop-App. 

{{<img src="images/settings-website-categories.png" title="Settings" alt="Settings">}}

Unter **Testoptionen** in den Einstellungen siehst du, dass die Option **Testdauer begrenzen** (die das Testen der Website auf eine bestimmte Zeitspanne begrenzt) standardmäßig aktiviert ist.

**Schritt 2** Deaktiviere **Begrenzte Testdauer**.

{{<img src="images/limit-test-duration.png" title="Limit test duration" alt="Limit test duration">}}

Es gibt jetzt kein Zeitlimit mehr für deine Website-Tests. Das bedeutet, dass OONI Probe jedes Mal, wenn du auf “Ausführen” klickst, alle Websites testen kannst, die in den [relevanten Citizen Lab Testlisten](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe) enthalten sind.

{{<img src="images/limit-test-duration-disabled.png" title="Test duration disabled" alt="Test duration disabled">}}

**Alternativ**: Wenn du mehr Websites innerhalb eines längeren Zeitraums testen möchtest (ohne jedoch unbedingt das Zeitlimit zu deaktivieren und alle Websites zu testen), kannst du dies mit den folgenden Schritten tun:

**Schritt 1.** Gehe zu **Testdauer** im Abschnitt Testoptionen der Einstellungen.

{{<img src="images/test-duration.png" title="Test duration" alt="Test duration">}}

Standardmäßig ist die Testdauer für Websites auf **90 Sekunden** eingestellt. Das bedeutet, dass OONI Probe nur so viele Websites (aus den [relevanten Citizen Lab Testlisten](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)) testet, wie es innerhalb von 90 Sekunden erreichen kann.

**Schritt 2.** Um die Testdauer zu ändern, **tippe die Anzahl der Sekunden** ein, die OONI Probe die Webseiten testen soll. Im folgenden Beispiel haben wir `360` eingegeben, womit OONI Probe Websites 6 Minuten lang testen würde.

{{<img src="images/360-test-duration.png" title="360 for test duration" alt="360 for test duration">}}

Du hast jetzt die Website-Testdauer deiner OONI Probe Desktop-App geändert.

## Zugriff auf deine OONI-Probe-Testergebnisse

Sobald du einen OONI Probe Test durchführst, kannst du sofort auf die Testergebnisse direkt in deiner OONI Probe Desktop App zugreifen.

**Schritt 1.** Klicke auf **Testergebnisse** in der Seitenleiste deiner OONI Probe Desktop-App. 

{{<img src="images/test-results.png" title="Test Results" alt="Test Results">}}

Du bekommst nun einen Überblick über alle deine OONI Probe Testergebnisse, die chronologisch dargestellt werden, wobei die neuesten Tests zuerst aufgeführt werden. In dieser Übersicht sind die Testergebnisse nach den 5 thematischen Karten der App gruppiert (“Websites”, “Instant Messaging”, “Umgehung”, “Leistung”, “Middleboxes”).

In jeder thematischen Testergebniskarte hast du einen Überblick über:

* Das **Netzwerk** (z. B. `AS16010` - Magticom Ltd.), in dem jeder Test durchgeführt wurde;
* Das **Datum und die Uhrzeit** der Prüfung (z. B. 3. August 2022 um 13:58 Uhr Ortszeit);
* **Zusammenfassung der relevanten Ergebnisse** (z. B. wurden 3 Websites als erreichbar befunden, während keine gesperrt war).

Diese Übersicht kann beim Vergleich der Ergebnisse in verschiedenen Netzwerken helfen (wenn du Tests in vielen verschiedenen Netzwerken durchführst) und bietet einen Überblick über die Ergebnisse aus der Vogelperspektive.

In der oberen Kopfzeile des Bildschirms mit den Testergebnissen findest du einen Überblick über die Ergebnisse:

* Die **Anzahl der OONI-Probe-Tests**, die du bisher durchgeführt hast;
* Die **Anzahl der Netzwerke**, in denen du OONI Probe bisher ausgeführt hast;
* Deine OONI-Probe **Datennutzung**.

{{<img src="images/test-results-header.png" title="Header" alt="Header">}}

Während der Bildschirm Testergebnisse einen ersten Überblick über die Ergebnisse bietet, kannst du tiefer graben und auf die Daten zu jedem Test zugreifen, wie in den folgenden Abschnitten erläutert.

### Webseiten

Du kannst auf deine OONI-Probe-Ergebnisse der Tests von Websites durch die folgenden Schritte zugreifen:

**Schritt 1.** Klicke auf **Websites** in der Anzeige der Testergebnisse deiner OONI Probe Desktop-App. 

{{<img src="images/test-results-websites.png" title="Test Results" alt="Test Results">}}

Du siehst nun eine Liste aller Websites, die du in einer bestimmten Testsitzung getestet hast.

{{<img src="images/websites-tested.png" title="Websites tested " alt="Websites tested ">}}

In der oberen Kopfzeile findest du einen Überblick über die Ergebnisse deiner Website-Tests. Neben jeder getesteten URL befindet sich entweder ein grünes Häkchen (für die Erreichbarkeit der Website) oder ein rotes Kreuz (für eine mögliche Sperrung der Website).

**Schritt 2.** Klicke auf die **Zeile einer getesteten Website** (um auf die Daten aus dem Test der betreffenden Website zuzugreifen).

{{<img src="images/facebook-measurement-page.png" title="Facebook measurement" alt="Facebook measurement">}}

Du hast nun Zugang zu den Daten, die sich auf den Test einer bestimmten Website beziehen.

Die obige Messseite bezieht sich auf den Test von `https://www.facebook.com/`. Anhand dieser Messseite können wir sehen, dass `https://www.facebook.com/` beim Test auf Magticom Ltd. (AS16010) am 3. August 2022 um 13:58 Uhr Ortszeit als erreichbar getestet wurde.

Wenn eine Website als (potenziell) gesperrt eingestuft wird, erscheint auf der Messseite eine orangefarbene Kopfzeile mit einem Ausrufezeichen, wie unten dargestellt.

{{<img src="images/gutenberg-measurement-page.png" title="Gutenberg measurement" alt="Gutenberg measurement">}}

In diesem Fall kann man sehen, dass `https://www.gutenberg.org` Anzeichen für eine sperrende (“[Anomalie](https://ooni.org/support/glossary/#network-anomaly)”) aufweist, als es am 30. März 2021 um 15:13 Uhr Ortszeit bei Vodafone Italia (AS30722) getestet wurde. Insbesondere können wir sehen, dass es Anzeichen für [DNS-Manipulation](https://ooni.org/support/glossary/#dns-tampering) (basierend auf der Heuristik des [OONI Web Connectivity test](https://ooni.org/nettest/web-connectivity/)) gab. Das bedeutet, dass Vodafone Italia den Zugang zu `https://www.gutenberg.org` (am 30. März 2021) mittels DNS blockiert haben könnte.

Da es zu [falsch positiven Ergebnissen](https://ooni.org/support/glossary/#false-positive) kommen kann, vermerken wir Testergebnisse, die nicht alle Kriterien unseres [Web-Verbindungstests](https://ooni.org/nettest/web-connectivity/) erfüllen, als “[Anomalien](https://ooni.org/support/faq/#how-can-i-interpret-ooni-data)” (und nicht als “bestätigt gesperrt”), was darauf hinweist, dass die getestete Website *möglicherweise* gesperrt ist.

Bei der Bewertung der Sperrung einer Website ist es nützlich, relevante Messungen (aus dem Test einer bestimmten Website im selben Netzwerk im Laufe der Zeit) in **zusammengefasster Form** zu untersuchen, was du über [OONI Explorer](https://explorer.ooni.org/) tun kannst (wo wir alle Testergebnisse veröffentlichen). OONI Explorer zeigt auch [Messungen für alle “bestätigt gesperrten”](https://explorer.ooni.org/search?since=2021-02-24&only=confirmed) Fälle an, in denen wir automatisch die Sperrung von Websites auf der Grundlage von [gesperrten Seiten](https://ooni.org/support/glossary/#block-page) bestätigen.

### Instant Messaging

Mit den folgenden Schritten kannst du auf deine OONI-Probe-Ergebnisse aus den Tests der Instant-Messaging-Anwendungen zugreifen:

**Schritt 1.** Klicke auf **Sofortnachrichten** im Bildschirm Testergebnisse deiner OONI Probe Desktop-App.

{{<img src="images/new-im-test-results.png" title="Test Results" alt="Test Results">}}

Du siehst nun eine Liste der Instant-Messaging-Apps (WhatsApp, Facebook Messenger, Telegram, Signal), die du in einer bestimmten Testsitzung getestet hast.

{{<img src="images/new-im-apps-tested.png" title="IM apps tested" alt="IM apps tested">}}

In der oberen Kopfzeile geben wir einen Überblick über die Testergebnisse deiner Instant-Messaging-Apps. Neben jeder getesteten App befindet sich entweder ein grünes Häkchen (das die Erreichbarkeit der App anzeigt) oder ein rotes Kreuz (das eine mögliche Blockierung der App anzeigt).

**Schritt 2.** Klicke auf die **Zeile einer getesteten Anwendung** (um auf die Daten aus den Tests dieser Anwendung zuzugreifen).

{{<img src="images/whatsapp-measurement.png" title="WhatsApp measurement" alt="WhatsApp measurement">}}

Die obige Messseite bezieht sich auf den Test von WhatsApp. Wir können sehen, dass WhatsApp beim Test auf Magticom Ltd. (AS16010) am 3. August 2022 um 12:19 Uhr Ortszeit als erreichbar getestet wurde. Diese Schlussfolgerung ergibt sich daraus, dass der [OONI WhatsApp-Test](https://ooni.org/nettest/whatsapp/) in der Lage war, erfolgreich eine Verbindung zu den Endpunkten von WhatsApp, dem Registrierungsdienst und der Webschnittstelle (`web.whatsapp.com`) herzustellen.

Wenn WhatsApp (möglicherweise) blockiert wurde, würde diese Messseite relevante Informationen anzeigen (basierend auf der Heuristik von [OONI's WhatsApp test](https://ooni.org/nettest/whatsapp/)).

In ähnlicher Weise kannst du auf Telegram-Testergebnisse über die Instant-Messaging-Ergebnisse in deiner OONI Probe-App zugreifen.

{{<img src="images/telegram-measurement.png" title="Telegram measurement" alt="Telegram measurement">}}

In diesem Fall können wir sehen, dass Telegram auf Magticom Ltd. (AS16010) am 3. August 2022 um 12:19 Uhr Ortszeit als erreichbar getestet wurde. Diese Schlussfolgerung wird erreicht, weil [OONI's Telegram test](https://ooni.org/nettest/telegram/) in der Lage war, sich erfolgreich mit Telegrams Endpunkten und dem Webinterface (`web.telegram.org`) zu verbinden.

Wenn Telegram (potentiell) blockiert wurde, würde diese Messseite relevante Informationen anzeigen (basierend auf der Heuristik von [OONI's Telegram test](https://ooni.org/nettest/telegram/)).

Du kannst auch auf Facebook Messenger Testergebnisse über die Instant Messaging Ergebnisse in deiner OONI Probe App zugreifen.

{{<img src="images/facebook-measurement-page.png" title="Facebook Messenger measurement" alt="Facebook Messenger measurement">}}

In diesem Fall können wir feststellen, dass Facebook Messenger bei einem Test auf Magticom Ltd. (AS16010) am 3. August 2022 um 13:58 Uhr Ortszeit als erreichbar getestet wurde. Diese Schlussfolgerung ergibt sich daraus, dass [OONIs Facebook Messenger-Test](https://ooni.org/nettest/facebook-messenger/) in der Lage war, sich erfolgreich mit Facebooks Endpunkten zu verbinden und Facebook-IP-Adressen aufzulösen.

Wenn der Facebook-Messenger (möglicherweise) blockiert wurde, würde diese Messseite relevante Informationen anzeigen (basierend auf der Heuristik von [OONI's Facebook Messenger test](https://ooni.org/nettest/facebook-messenger/)).

Du kannst die Ergebnisse des Signal-Tests auch über die Instant-Messaging-Ergebnisse in deiner OONI Probe App abrufen.

{{<img src="images/signal-measurement.png" title="Signal measurement" alt="Signal measurement">}}

In diesem Fall können wir sehen, dass Signal beim Test auf Magticom Ltd. (AS16010) am 3. August 2022 um 12:19 Uhr Ortszeit als erreichbar getestet wurde. Diese Schlussfolgerung wird erreicht, weil [OONI's Signal test](https://ooni.org/nettest/signal) in der Lage war, sich erfolgreich mit den Endpunkten von Signal zu verbinden.

Wenn Signal als (potenziell) blockiert eingestuft wird, zeigt diese Messseite relevante Informationen (basierend auf der Heuristik von [OONI's Signal test](https://ooni.org/nettest/signal)).

In allen Fällen empfehlen wir, sich auf die OONI-Messungen zu beziehen, die auf [OONI Explorer](https://explorer.ooni.org/) veröffentlicht sind, wo du die Ergebnisse in zusammengefasster Form betrachten kannst (was dabei helfen kann, [Falsch-Positive](https://ooni.org/support/glossary/#false-positive) auszuschließen und die Sperrung zu bestätigen).

### Umgehung

Du kannst auf die Ergebnisse von OONI-Probe aus dem Test der Umgehungstools zugreifen, indem du die folgenden Schritte ausführst:

**Schritt 1.** Klicke auf **Umgehung** im Bildschirm mit den Testergebnissen deiner OONI Probe Desktop-App.

{{<img src="images/test-results-circumvention.png" title="Test Results" alt="Test Results">}}

Du siehst nun eine Liste der Tools zur Umgehung der Zensur (Psiphon, Tor), die du im Rahmen einer bestimmten Testsitzung getestet hast.

{{<img src="images/circumvention-tools-tested.png" title="Circumvention tools tested" alt="Circumvention tools tested">}}

In der oberen Kopfzeile geben wir einen Überblick über die Ergebnisse der Umgehungstools. Neben jedem getesteten Tool befindet sich entweder ein grünes Häkchen (das die Erreichbarkeit anzeigt) oder ein rotes Kreuz (das eine mögliche Blockierung anzeigt).

**Schritt 2.** Klicke auf die **Zeile eines getesteten Werkzeugs** (um auf die Daten aus dessen Test zuzugreifen).

{{<img src="images/psiphon-measurement.png" title="Psiphon measurement" alt="Psiphon measurement">}}

Die obige Messseite bezieht sich auf den Test von [Psiphon](https://psiphon.ca/). Wir können sehen, dass Psiphon erreichbar war, als es auf Magticom Ltd. (AS16010) am 3. August 2022 um 12:17 Uhr Ortszeit getestet wurde. Diese Schlussfolgerung ergibt sich daraus, dass [OONI's Psiphon test](https://ooni.org/nettest/psiphon/) in der Lage war, eine Psiphon-Verbindung erfolgreich zu starten.

Wenn Psiphon (potenziell) blockiert wurde, würde dieses Testergebnis relevante Informationen anzeigen (basierend auf der Heuristik von [OONI's Psiphon test](https://ooni.org/nettest/psiphon/)).

In ähnlicher Weise kannst du die [Tor](https://www.torproject.org/) Testergebnisse über die Umgehungsergebnisse in deiner OONI Probe App aufrufen.

{{<img src="images/tor-measurement.png" title="Tor measurement" alt="Tor measurement">}}

In diesem Fall können wir sehen, dass Tor erreichbar war, als es auf Magticom Ltd. (AS16010) am 3. August 2022 um 12:17 Uhr Ortszeit getestet wurde. Diese Schlussfolgerung ergibt sich daraus, dass [OONI's Tor test](https://ooni.org/nettest/tor/) in der Lage war, sich erfolgreich mit den meisten Standard-Tor-Bridges und allen Tor-Verzeichnisbehörden zu verbinden.

Wenn Tor (potentiell) blockiert wurde, würde dieses Testergebnis relevante Informationen anzeigen (basierend auf der Heuristik von [OONI's Tor test](https://ooni.org/nettest/tor/)).

In allen Fällen empfehlen wir, sich auf die OONI-Messungen zu beziehen, die auf [OONI Explorer](https://explorer.ooni.org/) veröffentlicht sind, wo du die Ergebnisse in ihrer Gesamtheit betrachten kannst (was dabei helfen kann, [Falsch-Positive](https://ooni.org/support/glossary/#false-positive) auszuschließen und die Sperrung zu bestätigen).

### Leistung

Mit den folgenden Schritten kannst du auf deine OONI-Probe-Ergebnisse zugreifen, um die Leistung deines Netzwerks zu testen:

**Schritt 1.** Klicke auf **Leistung** im Bildschirm der Testergebnisse deiner OONI Probe Desktop-App.

{{<img src="images/test-results-performance.png" title="Test Results" alt="Test Results">}}

Du siehst nun eine Liste der Leistungstests, die du in einer bestimmten Testsitzung durchgeführt hast.

{{<img src="images/performance-tests-tested.png" title="Performance tests" alt="Performance tests">}}

In der oberen Kopfzeile geben wir einen Überblick über die Ergebnisse, das Datum und die Uhrzeit der Tests sowie das Land und das Netz, in dem diese Tests durchgeführt wurden. Die wichtigsten Leistungsergebnisse sind neben jedem Testergebnis aufgeführt.

**Schritt 2.** Klicke auf die **Zeile eines Testergebnisses** (um auf die entsprechenden Daten zuzugreifen).

{{<img src="images/ndt-measurement.png" title="NDT measurement" alt="NDT measurement">}}

Die obige Messseite stammt von einem [NDT-Geschwindigkeitstest](https://ooni.org/nettest/ndt/). Wir können sehen, dass bei diesem [NDT-Geschwindigkeitstest](https://ooni.org/nettest/ndt/) die Download-Geschwindigkeit 21,4 Megabit pro Sekunde und die Upload-Geschwindigkeit 19,7 Megabit pro Sekunde betrug und es 147,481 Millisekunden dauerte, eine Verbindung zu einem [M-Lab](https://www.measurementlab.net/) Server herzustellen. Dies deutet auf eine gute Internetgeschwindigkeit hin, wenn man bedenkt, dass der durchschnittliche Ping (zu diesem M-Lab-Server) 953,267 Millisekunden beträgt.

Du kannst deine NDT-Testergebnisse mit dem Angebot deines Internetdienstanbieters (ISP) vergleichen.

Du kannst auf die [DASH](https://ooni.org/nettest/dash/) Ergebnisse über die Leistungsergebnisse in deiner OONI Probe App zugreifen.

{{<img src="images/dash-measurement.png" title="DASH measurement" alt="DASH measurement">}}

In diesem Fall können wir sehen, dass ein [DASH-Video-Streaming-Test](https://ooni.org/nettest/dash/) auf Magticom Ltd. (AS16010) am 3. August 2022 um 12:21 Uhr Ortszeit durchgeführt wurde. Bei der Durchführung des Tests war es möglich, Videos mit bis zu 480p ohne Pufferung zu streamen, wobei die mittlere Bitrate 3,6 Megabit pro Sekunde betrug. Dies zeigt, dass der Nutzer in diesem Netz Videos nur in niedriger Auflösung streamen konnte, und das auch nur wenn sich der Streaming-Server in der Nähe des Mess-Servers befand.

Du kannst deine DASH-Testergebnisse mit dem Internetangebot deines Internetanbieters (ISP) vergleichen.

### Middleboxen

Eine Middlebox ist ein Computernetzwerkgerät, das den Datenverkehr zu anderen Zwecken als der Weiterleitung von Paketen verändert, prüft, filtert oder anderweitig manipuliert. Viele Internetdienstanbieter (ISP) auf der ganzen Welt setzen Middleboxen ein, um die Netzwerkleistung zu verbessern, den Nutzern einen schnelleren Zugang zu Websites zu ermöglichen und für eine Reihe anderer Netzwerkzwecke. Manchmal werden Middleboxen aber auch zur Internet-Zensur und/oder Überwachung eingesetzt.

Mit den folgenden Schritten kannst du auf die Ergebnisse deiner OONI-Probe zugreifen, wenn du Netzwerkmanipulationen testest (mit dem Ziel, das Vorhandensein von [Middleboxen](https://ooni.org/support/glossary/#middlebox) zu erkennen):

**Schritt 1.** Klicke auf **Middleboxen** im Bildschirm Testergebnisse deiner OONI Probe Desktop-App.

{{<img src="images/test-results-middleboxes.png" title="Test Results" alt="Test Results">}}

Du siehst nun eine Liste der Middlebox-Tests ([HTTP Invalid Request Line test](https://ooni.org/nettest/http-invalid-request-line/) und [HTTP Header Field Manipulation test](https://ooni.org/nettest/http-header-field-manipulation/)), die du in einer bestimmten Testsitzung ausgeführt hast.

{{<img src="images/middleboxes-tested.png" title="Middlebox tests" alt="Middlebox tests">}}

In der oberen Kopfzeile geben wir einen Überblick über die Ergebnisse (in diesem Fall wurden keine Middleboxen entdeckt), das Datum und die Uhrzeit der Tests sowie das Land und das Netzwerk, in dem diese Tests durchgeführt wurden.

**Schritt 2.** Klicke auf die **Zeile eines Testergebnisses** (um auf die entsprechenden Daten zuzugreifen).

{{<img src="images/http-invalid-request-line-measurement.png" title="HTTP Invalid Request Line measurement" alt="HTTP Invalid Request Line measurement">}}

Im obigen Fall können wir sehen, dass der [HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/)-Test auf Magticom Ltd. (AS16010) am 3. August 2022 um 12:20 Uhr Ortszeit durchgeführt wurde. Bei der Durchführung dieses Tests wurde eine ungültige HTTP-Anfragezeile (mit einer ungültigen HTTP-Versionsnummer, einer ungültigen Feldanzahl und einer riesigen Anfragemethode) an einen Echo-Dienst gesendet, der auf dem Standard-HTTP-Port lauscht. Der Echo-Dienst (ein Debugging- und Messwerkzeug, das einfach alle empfangenen Daten zurücksendet) schickte die ungültige HTTP-Anfragezeile genau so an uns zurück, wie er sie empfangen hatte. Dies deutet darauf hin, dass es im getesteten Netz keine sichtbare Middlebox oder Datenverkehrsmanipulation gibt.

Wenn jedoch eine Middlebox im getesteten Netzwerk vorhanden war, wäre die ungültige HTTP-Anfragezeile von der Middlebox abgefangen worden und hätte möglicherweise einen Fehler ausgelöst, der vom Echo-Dienst an uns zurückgeschickt worden wäre. Solche Fehler deuten darauf hin, dass sich im getesteten Netzwerk wahrscheinlich Software zur Manipulation des Datenverkehrs befindet, obwohl nicht immer klar ist, um welche Software es sich dabei handelt.

In ähnlicher Weise kannst du auf OONIs [HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/)-Testergebnisse über die Middlebox-Ergebnisse in deiner OONI Probe App zugreifen.

{{<img src="images/http-header-field-manipulation-measurement.png" title="HTTP Header Field Manipulation measurement" alt="HTTP Header Field Manipulation measurement">}}

Im obigen Fall können wir sehen, dass der [HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/)-Test auf Magticom Ltd. (AS16010) am 3. August 2022 um 12:20 Uhr Ortszeit durchgeführt wurde. Bei der Durchführung dieses Tests wurde eine [HTTP-Anfrage](https://ooni.org/support/glossary/#http-request) an einen Backend-Kontrollserver emuliert (der alle empfangenen Daten zurücksendet), wobei jedoch [HTTP-Header](https://ooni.org/support/glossary/#http-header) mit abweichender Großschreibung (d. h. nicht-kanonische HTTP-Header) gesendet wurden. Da wir die HTTP-Header genau so erhalten haben, wie wir sie gesendet haben, gibt es keine sichtbare Middlebox oder Datenverkehrsmanipulation im getesteten Netzwerk.

Wenn jedoch eine Middlebox im getesteten Netz vorhanden war, hat sie möglicherweise die ungültigen Header, die wir gesendet haben, normalisiert oder zusätzliche Header hinzugefügt. Je nachdem, ob die HTTP-Header, die wir von einem Backend-Kontrollserver senden und empfangen, gleich sind oder nicht, können wir feststellen, ob eine Middlebox im getesteten Netzwerk vorhanden ist.

## Teilen deiner OONI-Probe-Testergebnisse

Über jedes Testergebnis der OONI-Probe kannst du auf Funktionen zugreifen, die dir Folgendes ermöglichen:

* Zugriff, Kopieren und Weitergabe der **Rohmessdaten** (zu diesem Testergebnis);
* **Greife auf die Messung** im [OONI Explorer](https://explorer.ooni.org/) zu (wo sie automatisch veröffentlicht wird) und teile sie möglicherweise mit deinen Kontakten.

**Schritt 1.** Greife auf ein beliebiges Testergebnis von OONI Probe zu (Einzelheiten zum Auffinden von Testergebnissen von OONI Probe findest du im vorherigen Abschnitt dieses Leitfadens).

{{<img src="images/facebook-measurement-page.png" title="Measurement" alt="Measurement">}}

In den folgenden Abschnitten gehen wir auf die einzelnen Funktionen ein.

### Rohdaten

Jedes Testergebnis von OONI Probe bietet einen Überblick über die Ergebnisse. Die tatsächlichen Daten (z.B. die Rohmessdaten), auf denen jedes Testergebnis basiert, sind über die Schaltfläche **Daten** auf jedem Testergebnisbildschirm verfügbar.

Mit anderen Worten: Wenn du `https://www.facebook.com` getestet hast, gibt die Seite mit den Testergebnissen einen Überblick über das Ergebnis (z. B.: Erreichbar), aber die Netzwerkmessdaten liefern die Details des Tests. Wenn die Website beispielsweise nicht zugänglich war, wird angegeben, wie und warum die Website möglicherweise blockiert ist.

Der Zugriff auf die Rohmessdaten ist nützlich, weil:

* Er enthält technische Details, die möglicherweise als **Beweis** für eine Sperrung dienen können;
* Er kann dabei helfen, festzustellen, ob eine Website tatsächlich gesperrt ist oder ob ihre Prüfung eine [Anomalie](https://ooni.org/support/glossary/#network-anomaly) aus anderen, nicht zensurbezogenen Gründen ausgelöst hat (z. B. zum Ausschluss von [falsch positiven Meldungen](https://ooni.org/support/glossary/#false-positive)).

Mit den folgenden Schritten kannst du auf die Rohmessdaten zugreifen und sie weitergeben:

**Schritt 1.** Klicke auf die Schaltfläche **Daten** auf dem Bildschirm mit den Testergebnissen von OONI Probe.

{{<img src="images/data-button.png" title="Data button" alt="Data button">}}

Du hast nun Zugriff auf die Rohmessdaten des von dir ausgewählten Testergebnisses von OONI Probe.

{{<img src="images/raw-data.png" title="Raw data" alt="Raw data">}}

Du kannst auf die Pfeile klicken (z. B. auf den Pfeil neben `test_keys`), um die Ansicht der Daten zu erweitern.

**Schritt 2.** Um die Rohdaten zu kopieren und weiterzugeben (z. B. an Techniker, die bei der Interpretation helfen können), klicke auf das **Kopiersymbol** am Anfang der Daten (in der `Root`-Zeile, wie unten angegeben).

{{<img src="images/copy-raw-data.png" title="Copy raw data" alt="Copy raw data">}}

Du hast nun die Rohdaten kopiert und kannst sie mit deinen Kontakten teilen.

### Zugriff auf deine Messung im OONI Explorer

Vielleicht bist du daran interessiert, deine OONI Probe Testergebnisse auf [OONI Explorer](https://explorer.ooni.org/) zu sehen oder auf einen Messungslink zuzugreifen, den du später mit deinen Kontakten teilen oder verlinken kannst (zum Beispiel in einem Forschungsbericht oder Tweet).

**Schritt 1.** Klicke auf die Schaltfläche **Im OONI Explorer anzeigen** auf dem Bildschirm mit den Testergebnissen von OONI Probe.

{{<img src="images/show-in-ooni-explorer-button.png" title="Show in OONI Explorer button" alt="Show in OONI Explorer button">}}

Dadurch wird das entsprechende Testergebnis von OONI Probe in deinem Webbrowser geöffnet, direkt im [OONI Explorer](https://explorer.ooni.org/). Für die oben erwähnte Facebook-Messung wäre das zum Beispiel die folgende [Seite](https://explorer.ooni.org/measurement/20220803T095857Z_webconnectivity_GE_16010_n1_vTthHQGwVlhSDc19?input=https://www.facebook.com/).

{{<img src="images/facebook-ooni-explorer.png" title="Measurement viewed on OONI Explorer" alt="Measurement viewed on OONI Explorer">}}

Du hast jetzt Zugang zu deiner OONI Probe Messung im [OONI Explorer](https://explorer.ooni.org/). Wenn du auf dieser Messungsseite nach unten scrollst, kannst du auch die Rohdaten der Messung sehen. Du kannst nun einen Link zu dieser Messung erstellen oder sie mit anderen teilen, indem du die URL der Messungsseite teilst.

## Konfigurieren deiner OONI Probe-Einstellungen

Du kannst die Verwendung von OONI Probe über die Einstellungen anpassen.

**Schritt 1.** Klicke auf **Einstellungen** in der Seitenleiste deiner OONI Probe App.

{{<img src="images/settings-website-categories.png" title="Settings" alt="Settings">}}

Du kannst nun alle Einstellungen der OONI Probe Desktop App sehen.

In den folgenden Abschnitten werden die einzelnen Einstellungen erläutert.

### Sprache

Dank der Unterstützung durch die [Localization Lab](https://www.localizationlab.org/) Community sind die OONI Probe Apps in mehreren Sprachen verfügbar.

Mit den folgenden Schritten kannst du die Sprache deiner OONI Probe Desktop-App ändern:

**Schritt 1.** Klicke in den Einstellungen auf das Dropdown-Menü unter **Sprache**.

{{<img src="images/languages.png" title="Languages" alt="Languages">}}

**Schritt 2.** Wähle eine Sprache aus dem Dropdown-Menü.

Deine OONI Probe Desktop-Applikation ist nun auf die von dir gewählte Sprache umgeschaltet.

Wenn du eine OONI-Probe-Übersetzung überprüfen und/oder beisteuern möchtest, ziehe es bitte in Erwägung, [uns auf Transifex](https://www.transifex.com/otf/ooniprobe/) beizutreten.

### Testoptionen

Die Einstellungen für den Website-Test wurden bereits in früheren Abschnitten dieses Leitfadens behandelt. Bitte lies den Abschnitt ”[Anpassen der Website-Tests](https://ooni.org/support/ooni-probe-desktop#customizing-your-website-testing)”.

### Automatisches Testen

Die Einstellungen für den automatischen OONI-Probe-Test wurden bereits in früheren Abschnitten dieses Handbuchs behandelt. Bitte lies den Abschnitt “[Automatisierte OONI-Probe-Tests](https://ooni.org/support/ooni-probe-desktop#automated-ooni-probe-testing)”.

### Privatsphäre

Der Abschnitt über den Datenschutz in den OONI-Probe-Einstellungen bezieht sich auf die Veröffentlichung von OONI-Probe-Testergebnissen und die Übermittlung von [Absturzberichten](https://ooni.org/about/data-policy).

{{<img src="images/new-privacy-settings-enabled.png" title="Privacy settings enabled" alt="Privacy settings enabled">}}

Standardmäßig ist die automatische Veröffentlichung deiner OONI-Probe-Testergebnisse aktiviert, während die Übermittlung von Absturzberichten deaktiviert ist (es sei denn, du hast dich während des Onboardings dafür entschieden).

Wir **befürworten die Veröffentlichung der Testergebnisse von OONI Probe**, weil sie dazu beitragen können, die Transparenz der Internetzensur zu erhöhen und die Forschungs- und Lobbyarbeit der Gemeinschaft für Internetfreiheit zu unterstützen. 

Wenn du deine OONI-Probe-Testergebnisse veröffentlichst, beinhaltet dies die folgenden Daten:

* Datum und Uhrzeit der Messung;
* Ländercode (z. B. `GE` für Georgien);
* Netzinformationen: [ASN](https://ooni.org/support/glossary/#asn) (z. B. `AS16010` für Magticom Ltd.);
* Netzwerkmessdaten (abhängig des [OONI Probe-Tests](https://ooni.org/nettest/)).

Weitere Informationen findest du in unserer [Datenrichtlinie](https://ooni.org/about/data-policy).

Wenn du dich dafür entscheidest, Absturzberichte mit uns zu teilen, gibst du Informationen weiter, die für die Identifizierung von Fehlern und die Verbesserung der Leistung der OONI Probe App wichtig sind. Diese Absturzberichte enthalten die OONI Probe-Softwareversion und Informationen darüber, warum und wie eine bestimmte OONI Probe-Funktion nicht wie erwartet funktioniert hat.

Du kannst die Veröffentlichung deiner OONI Probe Testergebnisse und/oder die Weitergabe von Absturzberichten an uns ablehnen, indem du die entsprechenden Einstellungen deaktivierst.

{{<img src="images/new-privacy-settings-disabled.png" title="Privacy settings disabled" alt="Privacy settings disabled">}}

Vielen Dank für die Lektüre dieses Leitfadens und danke, dass du OONI Probe verwendest!
