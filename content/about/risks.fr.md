# Risques: Ce que vous devez savoir avant d'exécuter OONI Probe

Texte original: **English**, [Risks: Things you should know before running OONI Probe](https://ooni.org/about/risks)

Ce texte a été traduit par [Computech](https://computechinstitute.com/).

À notre connaissance, aucun utilisateur d'OONI Probe n'a une fois subi
de conséquences suite à l'utilisation de notre logiciel. Les risques
potentiels décrits ci-dessous sont donc théoriques et plutôt
spéculatifs. Si vous exécutez OONI Probe dans un "environnement à haut
risque", nous vous encourageons fortement à lire toute la documentation
ci-dessous.

## **Résumé des risques potentiels**

* Quiconque surveillant votre activité Internet (par exemple, le FAI, le gouvernement, l'employeur) pourra voir que vous utilisez OONI Probe;

* [Le test de connectivité Web](https://ooni.org/nettest/web-connectivity/) d'OONI se connecte et télécharge des données à partir d'un large éventail de sites, y compris des sites provocateurs ou répréhensibles (par exemple, de la pornographie), qui peuvent être illégaux dans certains pays;

* Par défaut, toutes les données de mesure du réseau collectées par OONI Probe sont [publiées](https://ooni.org/data/) pour accroître la transparence de la censure de l'Internet, stimuler le débat public et soutenir la recherche. Cependant, l'envoi d'informations sur le réseau local vers des serveurs étrangers pourrait ne pas être perçu d'un bon œil par certains gouvernements. Bien que les données publiées soient limitées à ce qui est nécessaire pour identifier les cas de censure (et que nous faisons de notre mieux pour ne pas publier les adresses IP), les FAI motivés pourraient tenter d'identifier les utilisateurs d'OONI Probe via les données publiques d'OONI

Par conséquent, les risques potentiels associés à l'exécution d'OONI Probe dépendent de:

1. **Votre modèle de menace**. Un activiste de premier plan déjà soumis à une forte surveillance, par exemple, pourrait attirer davantage l'attention lorsqu'il exécute OONI Probe.

2. **Les lois et réglementations du pays à partir duquel vous exécutez OONI Probe**. Il est préférable de consulter des avocats locaux et de savoir si ce pays a l'habitude de poursuivre en justice des individus se livrant à des types d'activités similaires.

3. **Les types de tests OONI Probe exécutés**. Tous les tests OONI Probe n'ont pas le même poids en termes de risque potentiel. Le [test WhatsApp](https://ooni.org/nettest/whatsapp/) d'OONI, par exemple, tente simplement de se connecter à des serveurs sur lesquels sont déjà connectés plus d'un milliard de personnes dans le monde. Vous pouvez choisir les tests à exécuter via les applications OONI Probe.

4. **Les types de sites que vous testez.** Vous pouvez tester les sites Web de votre choix via le bouton "Choisir des sites Web" dans l'application mobile OONI Probe, ou en utilisant la plateforme [OONI Run](https://run.ooni.io/). Vous pouvez également [contribuer à des listes de tests](https://ooni.org/get-involved/contribute-test-lists/) et suggérer des URLs à ajouter ou à supprimer.

5. **Si vous avez des données d'OONI Probe publiées.** Vous pouvez refuser la publication des résultats de vos tests OONI Probe via les paramètres de l'application OONI Probe.

## **Comprendre les risques potentiels de manière plus globale**

Les [logiciels de tests](https://github.com/ooni/probe) d'OONI (appelé OONI Probe) sont conçus pour mesurer les réseaux à la recherche de signes de censure sur Internet et de manipulation du trafic. Dans certains pays, l'utilisation d'OONI Probe peut entraîner des poursuites pénales, des amendes, voire une peine d'emprisonnement. Nous
vous invitons donc fortement à consulter un avocat autorisé à exercer dans votre pays *avant* de télécharger, d'installer et d'exécuter OONI Probe, et de lire attentivement la documentation ci-dessous.

Les utilisateurs exécutent OONI Probe à leurs propres risques. En installant OONI Probe, les utilisateurs acceptent de se conformer à la [licence](https://github.com/ooni/license) du logiciel et à la [Politique de données d'OONI](https://ooni.org/about/data-policy). Ni le [projet OONI](https://ooni.org/), ni [Le Projet Tor](https://www.torproject.org/), ne peuvent être tenus pour responsables, conjointement ou solidairement, en droit ou en équité,
envers les utilisateurs d'OONI Probe et d'autres tiers, de tout risque
ou dommage résultant de l'utilisation d'OONI Probe sous tout délit,
contrat ou autre cause d'action.

* [Penalites et Sanctions Éventuelles](https://ooni.org/fr/about/risks/#penalites-et-sanctions-éventuelles) 

* [Risques: Détection d'OONI Probe](https://ooni.org/fr/about/risks/#risques-détection-dooni-probe)

    * [Surveillance](https://ooni.org/fr/about/risks/#surveillance)

    * [Services Testés](https://ooni.org/fr/about/risks/#services-testés) 

    * [Accès physique à distance à l'appareil de l'utilisateur](https://ooni.org/fr/about/risks/#accès-physique-à-distance-à-lappareil-de-lutilisateur) 

    * [Publication des mesures](https://ooni.org/fr/about/risks/#publication-des-mesures)

* [Risques: Tests OONI Probe](https://ooni.org/fr/about/risks/#risques-tests-ooni-probe)

    * [Légalité des sites web testés](https://ooni.org/fr/about/risks/#légalité-des-sites-web-testés)

    * [Légalité des tests OONI Probe](https://ooni.org/fr/about/risks/#légalité-des-tests-ooni-probe)

    * [Services Tiers](https://ooni.org/fr/about/risks/#services-tiers) 

* [Demander des conseils juridiques](https://ooni.org/fr/about/risks/#demander-des-conseils-juridiques)

**Remarque**: Les risques décrits ci-dessous sont plutôt spéculatifs. À
notre connaissance, aucun utilisateur d'OONI Probe n'a déjà été
confronté aux conséquences des risques décrits ci-dessous.

Néanmoins, nous vous encourageons fortement à lire les informations
suivantes concernant les risques potentiels associés à l'utilisation
d'OONI Probe.

### **Sanctions et Pénalités éventuelles**

Dans certains pays, toute forme de mesure active du réseau peut être
illégale, voire considérée comme une forme d'espionnage.

De nombreux gouvernements soumettent depuis longtemps les militants des
droits numériques à diverses formes d'abus qui peuvent rendre dangereux
pour les individus de ces pays l'exécution d'OONI Probe. L'utilisation
d'OONI Probe peut donc les exposer à de lourdes sanctions civiles,
pénales ou extra-judiciaires. Ces sanctions peuvent éventuellement
inclure:

* L'emprisonnement

* Des agressions physiques

* De fortes amendes

* Des Menaces

* Le placement sur les listes de surveillance gouvernementales

* Le Ciblage pour la surveillance

Compte tenu de ces menaces, nous vous encourageons fortement à consulter
un avocat et à comprendre les risques juridiques avant d'utiliser OONI
Probe. Les risques potentiels liés à l'utilisation de OONI Probe sont
détaillés ci-dessous.

### **Risques: Détection d'OONI Probe**

Certains utilisateurs peuvent faire face à des sanctions sévères s'ils
sont détectés par des tiers (tels que les gouvernements) qui considèrent
OONI Probe comme une menace.

L'utilisation d'OONI Probe peut être détectée par des tiers de la
manière suivante:

#### **La surveillance**

Des tiers (tels que votre gouvernement, votre fournisseur d'accès Internet ou votre employeur) peuvent surveiller tout ou partie de votre activité Internet. Cela peut leur permettre de détecter le trafic web généré par votre utilisation d'OONI Probe et de vous imputer la charge de responsabilité.

De nombreux pays emploient des mesures de surveillance sophistiquées qui
permettent aux gouvernements de suivre les activités en ligne des
individus,-même si ceux-ci utilisent des services préservant la
confidentialité tels que Tor, Psiphon, des réseaux privés virtuels (VPN)
ou des serveurs proxy. Dans ces pays, les gouvernements ou des tiers
peuvent être en mesure de vous identifier en tant qu'utilisateur
d'OONI Probe, quelles que soient les mesures que vous prenez pour
protéger votre vie privée en ligne.

#### **Les services Testés**

Les services auxquels OONI Probe se connecte pourront voir votre adresse
IP et pourront peut-être détecter que vous utilisez OONI Probe. Vous
pouvez voir les services testés par OONI Probe
[ici](https://github.com/citizenlab/test-lists/tree/master/lists).

#### **L'accès physical ou à distance à l'appareil d'un utilisateur**

Comme pour tout autre logiciel, l'utilisation d'OONI Probe peut laisser des traces. Ainsi, toute personne ayant un accès physique ou à distance à votre ordinateur peut voir que vous avez téléchargé, installé ou exécuté OONI Probe.

#### **Publication of measurements**

Par défaut, toutes les mesures générées via OONI Probe sont envoyées au
collecteur de mesures d'OONI et automatiquement publiées via:

* [OONI Explorer](https://explorer.ooni.org/)

* [OONI API](https://api.ooni.io/)

Par conséquent, le public - y compris les tiers qui considèrent
l'utilisation d'OONI Probe comme une menace - pourra voir toutes les
mesures des utilisateurs, à moins que les utilisateurs ne se
**désinscrivent** via les paramètres de l'application OONI Probe.

Les données publiées incluront votre emplacement approximatif, le réseau
(ASN) à partir duquel vous vous connectez et l'heure à laquelle vous
avez exécuté OONI Probe. D'autres informations d'identification,
telles que votre adresse IP, *ne sont pas* délibérément collectées, mais
peuvent être incluses dans les en-têtes HTTP ou d'autres métadonnées.
Le contenu de la page complète téléchargée par OONI Probe peut inclure
de telles informations si, par exemple, un site web comprend des codes
de suivi ou un contenu personnalisé basé sur votre emplacement réseau.
Les informations d'identification pourraient potentiellement aider des
tiers à vous détecter en tant qu'utilisateur de OONI Probe.

### **Risques: Tests OONI Probe**

OONI a développé plusieurs logiciels gratuits de test, chacun d'eux est
destiné à une fonction spécifique. multiple free software tests, each
one of which is designed to perform a different function. Par
conséquent, ces tests peuvent comporter différents types de risques pour
l'utilisateur.

Généralement, OONI Probe est conçu pour:

* Mesurer si des sites web sont bloqués;

* Mesurer si les applications de messagerie instantanée (IM) (tels que WhatsApp ou Facebook Messenger) sont bloqués;

* Détecter la présence de systèmes ("middleboxes") qui peuvent être responsables de censure, surveillance, et manipulation de trafic;

* Examiner si les outils de contournement de censure, tels que [Tor](https://www.torproject.org/) et [Psiphon](https://psiphon.ca/), sont bloqués.

Nous vous recommandons de consulter minutieusement les
[**spécifications**](https://github.com/ooni/spec) et
[**descriptions**](https://ooni.org/nettest/) pour chaque test d'OONI
Probe, avant de les exécuter.

#### **Légalité des sites web testés**

Lors de l'exécution du [test de Connectivité Web](https://ooni.org/nettest/web-connectivity/) d'OONI, vous vous connecterez et téléchargerez des données à partir de divers sites web inclus dans les deux listes suivantes: 

* [**Liste de test spécifique au pays**](https://github.com/citizenlab/test-lists/tree/master/lists) (recherche la liste de tests de votre pays en fonction de son code pays)

* [**Liste de test global**](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) (comprenant une liste de sites web consultés mondialement)

De nombreux sites Web figurant dans les listes ci-dessus sont controversés et peuvent inclure de la pornographie ou des discours de haine. L'accès à ce contenu peut être illégal dans votre pays. Dans certains pays, l'accès à des contenus illégaux entraîne de graves conséquences, telles que l'emprisonnement. Nous vous recommandons donc d'examiner attentivement si vous êtes prêt à prendre le risque d'accéder et de télécharger des données à partir de ces sites Web via les tests OONI Probe.

Si vous n'êtes pas sûr des implications potentielles de la connexion
aux données et de leur téléchargement de à partir des sites web
répertoriés dans les listes ci-dessus, vous pouvez choisir les sites web
à tester via le bouton "Choisir des sites Web" dans l'application
mobile OONI Probe ou en utilisant la plateforme [OONI
Run](https://run.ooni.io/).

#### **Légalité des tests d'OONI Probe**

Certains tests de réseau effectués avec OONI Probe peuvent enfreindre
les lois sur l'utilisation abusive des ordinateurs de votre pays ou les
conditions de service de votre fournisseur d'accès Internet.

Plus précisément, les opérateurs des composants réseau concernés par les
tests d'OONI Probe peuvent considérer ces tests comme des attaques. Le
[**test
HTTP-invalid-request-line**](https://ooni.org/nettest/http-invalid-request-line/)
d'OONI, par exemple, *pourrait* déclencher des soupçons lors de
l'envoi de messages hors spécifications à un service d'écho et
pourrait être considéré comme une forme de "piratage". Si les composants
réseau affectés par ce test considèrent ces messages hors spécifications
comme des attaques, vous pourriez faire face à de graves conséquences,
telles que des poursuites en vertu des lois sur l'utilisation abusive
d'ordinateurs.

#### **Services tiers**

Notre [Test de Diagnostic Réseau (NDT)](https://ooni.org/nettest/ndt/)
est un test de performances à usage général effectué sur des serveurs
tiers fournis par [Measurement Lab
(M-Lab)](https://www.measurementlab.net/). Les services NDT
de M-Lab nécessitent la conservation et la divulgation des adresses IP à
des fins de recherche. Pour en savoir plus sur la gouvernance des
données de M-Lab, consultez sa [déclaration de
confidentialité](https://www.measurementlab.net/privacy/).

### **Demander des conseils juridiques**

Les risques juridiques liés au téléchargement, à l'installation et à
l'exécution d'OONI Probe peuvent varier d'un pays à un autre, c'est
pourquoi nous vous conseillons de consulter des avocats agréés pour
exercer dans votre pays.

Certaines questions que vous voudrez peut-être poser à vos avocats
concernant l'utilisation d'OONI Probe comprennent

* Mon pays m'interdit-il d'utiliser:
   * **un logiciel de mesure de réseau?**
   * **un logiciel de détection de censure?**
   * **un logiciel de contournement de la censure?**

* Est-il illégal pour moi d'accéder à certains sites web ?

* Existe-t-il des lois dans mon pays qui exigent que les fournisseurs d'accès Internet (FAI) suivent mon activité en ligne?

* Quelqu'un dans mon pays a-t-il déjà été criminalisé en raison de son activité sur Internet ? (Cela ne doit pas nécessairement être spécifique aux mesures de réseau).

Attention, il ne s'agit pas d'une liste exhaustive de questions à poser
à vos avocats.

De plus, même si de nombreux pays n'ont pas de lois interdisant
spécifiquement l'utilisation de logiciels de mesure de réseau,
l'utilisation d'OONI Probe peut toujours être criminalisée dans
certains pays en vertu d'autres lois plus larges. Par exemple,
l'utilisation d'OONI Probe peut être considérée comme une activité
illégale ou anti-gouvernementale. Les utilisateurs d'OONI Probe peuvent
également courir le risque d'être criminalisés pour des raisons de
**sécurité nationale** si les données obtenues et publiées en exécutant
OONI Probe sont considérées comme "mettant en danger" la sécurité
externe ou interne du pays. Vous souhaiteriez peut-être également
consulter un avocat sur ces questions.

En plus de consulter un avocat, vous pouvez également nous contacter
pour toute demande spécifique à **contact@openobservatory.org**.
Veuillez noter que nous *ne sommes pas* des avocats et que les
informations que nous vous donnons ne constituent pas un conseil
juridique. De plus, vos communications avec nous ne sont protégées par
aucun privilège légal, les forces de l'ordre peuvent donc assigner à
comparaître et obtenir toute information que vous nous fournissez.
Cependant, nous pourrons peut-être vous mettre en contact avec des
avocats capables de répondre à vos questions et/ou préoccupations.

Certaines ressources pertinentes comprennent:

* [La Foire Aux Questions juridiques de Tor](https://www.eff.org/torchallenge/faq.html)

* [EFF Connaître ses droits](https://www.eff.org/issues/know-your-rights)

**Remarque**: Ces ressources *ne* constituent *pas* des conseils
juridiques et peuvent être obsolètes. Assurez-vous que vous lisez la
dernière version avant de vous fier à des conseils.

Encore une fois, les utilisateurs exécutent OONI Probe à leurs propres
risques. En installant OONI Probe, les utilisateurs acceptent de se
conformer à la [licence](https://github.com/ooni/license) du logiciel et
à la [Politique de Données](https://ooni.org/about/data-policy) d'OONI.
Ni le [Projet OONI](https://ooni.org/), ni [Le Projet
Tor](https://www.torproject.org/), ne peuvent être tenus responsables,
conjointement ou solidairement, en droit ou en équité, envers les
utilisateurs d'OONI Probe et d'autres tiers, de tout risque ou dommage
résultant de l'utilisation d'OONI Probe sous tout délit, contrat ou
autre cause d'action.
