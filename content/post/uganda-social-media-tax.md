---
title: "Uganda's Social Media Tax through the lens of network measurements"
author: "Maria Xynou (OONI), Leonid Evdokimov (OONI), Arturo Filastò (OONI), DefendDefenders, with artwork and contributions from POLLICY"
date: "2018-11-12"
tags: ["uganda", "research-report", "country-ug", "theme-social_media", "theme-im", "theme-circumvention"]
categories: ["report"]
---

![Cover image](/post/uganda-social-media-tax/ug.jpg)

Image by [@neemascribbles](https://www.instagram.com/neemascribbles/).

**Probed ISPs:** MTN (AS20294), Africell (AS36991), Airtel (AS37075), Smile Telecom (AS37122), Africa Online Uganda (AS29039), DATANET (AS29032), Sombha Solutions (AS328015), Roke (AS37063), Airtel (AS36977), Uganda Telecom (AS21491)

**OONI tests:** [Web Connectivity](/nettest/web-connectivity/), [HTTP Invalid Request Line](/nettest/http-invalid-request-line/), [HTTP Header Field Manipulation](/nettest/http-header-field-manipulation/), [WhatsApp](/nettest/whatsapp/), [Facebook Messenger](/nettest/facebook-messenger/), [Telegram](/nettest/telegram/), [Vanilla Tor](/nettest/vanilla-tor/). 

**Testing/analysis period:** 1st July 2018 to 24th October 2018

**Censorship methods:** HTTP blocking (resetting connections) and TCP/IP blocking

* [Key Findings](#key-findings)

* [Introduction](#introduction)

* [Social Media Tax](#social-media-tax)

* [Methodology](#methodology)

* [Findings](#findings)

  * [Blocking of social media](#blocking-of-social-media)
  
    * [WhatsApp](#whatsapp)
    
    * [Facebook Messenger](#facebook-messenger)
    
    * [Telegram](#telegram)
    
  * [Blocking of circumvention tools](#blocking-of-circumvention-tools)
  
    * [VPN blocking](#vpn-blocking)
    
  * [Blocking of adult websites](#blocking-of-adult-websites)
  
* [Conclusion](#conclusion)

* [Acknowledgements](#acknowledgements)

# Key Findings

* **HTTP blocking and RST injection:** Ugandan ISPs primarily implement internet censorship by means of HTTP blocking, resetting connections to taxed and banned sites.

* **TCP/IP blocking of apps:** MTN appears to block Twitter, Facebook, WhatsApp, Instagram and Snapchat by means of TCP/IP blocking. The TCP/IP blocking of Snapchat may have caused collateral damage, possibly affecting thousands of sites hosted on the same CDN. However, even if this is the case, it doesn't affect most MTN users since MTN's proxy circumvents IP-level blocking. 

* **Variance in blocking:** Social media censorship varies across ASNs. Africell, for example, attempts to block Telegram, while MTN doesn’t. Some Ugandan ISPs don’t block access to social media sites at all (such as Uganda Telecom and Smile Communications). 

* **Circumvention tools blocked to prevent untaxed access to social media:** The blocking of circumvention tool sites also varies across ASNs. MTN blocks access to VPN servers using the OpenVPN protocol and to torproject.org, but not to the Tor network.

# Introduction

This study is part of an ongoing effort to examine internet censorship in Uganda and in [more than 200 other countries](https://explorer.ooni.io/world/) around the world.

The [Open Observatory of Network Interference (OONI)](https://ooni.org/) and [DefendDefenders](https://www.defenddefenders.org/) (The East and Horn of Africa Human Rights Defenders Project) collaborated on a joint research study to examine internet censorship in Uganda through the collection and analysis of network measurements. The aim of this study is to document internet censorship in Uganda through the analysis of empirical data. 

The following sections provide information about Uganda’s [new social media tax](https://www.wired.com/story/uganda-social-media-tax-stays-for-now/). We also document our methodology and present the findings from our analysis.

# Social Media Tax

Since 1st July 2018, people in Uganda are required to [pay taxes](https://cipesa.org/2018/07/uganda-blocks-access-to-social-media-vpns-and-dating-sites-as-new-tax-takes-effect/) to the Ugandan government in order to access several online social media platforms. Unless this levy is paid, access to these specific platforms is blocked. The tax is commonly referred to as the Social Media Tax or the OTT (Over The Top) Tax.

According to [MTN](https://www.mtn.co.ug/en/products/internet/Pages/OTT-Services-.aspx), the taxed online platforms include:

<table>
<tr><td>WhatsApp       </td><td>Telegram          </td><td>Freevideo - Mail.ru</td><td>Tumblr             </td></tr>
<tr><td>Facebook       </td><td>IM+               </td><td>TextMe             </td><td>Kik                </td></tr>
<tr><td>Twitter        </td><td>IMessenger        </td><td>TalkU              </td><td>Chatouts           </td></tr>
<tr><td>Truecaller     </td><td>Yahoo Messenger   </td><td>LOVOO              </td><td>Grindr             </td></tr>
<tr><td>Google Hangouts</td><td>Facetime          </td><td>Drupe              </td><td>LiveTalk           </td></tr>
<tr><td>Google Allo    </td><td>Android Messages  </td><td>Imo                </td><td>Zalo               </td></tr>
<tr><td>Viber          </td><td>New Messenger     </td><td>Hangouts Dialer    </td><td>Kakao Talk         </td></tr>
<tr><td>Snapchat       </td><td>Textra            </td><td>CallerID           </td><td>Mood               </td></tr>
<tr><td>LINE           </td><td>Instagram         </td><td>magicApp           </td><td>Google Plus        </td></tr>
<tr><td>Phone+         </td><td>WiCall            </td><td>Skype              </td><td>Linkedin           </td></tr>
<tr><td>Call Free      </td><td>WeChat            </td><td>Badoo              </td><td>BBM-Free           </td></tr>
<tr><td>Signal         </td><td>InMessage         </td><td>Hitwe              </td><td>Voxer Walkie Talkie</td></tr>
<tr><td>StealthChat    </td><td>TrueCaller <em>(sic!)</em></td><td>SayHi              </td><td>Hike               </td></tr>
<tr><td>Tinder         </td><td>Hi5               </td><td>iPair-Meet         </td><td>Moments            </td></tr>
<tr><td>MeetMe         </td><td>                  </td><td>                   </td><td>                   </td></tr>
</table>

To access platforms like Facebook, WhatsApp and Twitter, users of Ugandan ISPs are now required to [pay a tax of UGX 200 (USD 0.05) per day](https://qz.com/africa/1321756/uganda-social-media-tax-is-not-about-raising-revenues-on-whatsapp-facebook-twitter/). This was introduced through a [new set of taxes](http://parliamentwatch.ug/wp-content/uploads/2018/05/FPED3-18-Report-on-the-Excise-Duty-Amendment-Bill-2018.pdf) in the Excise Duty Act (Amended) on OTT services and mobile money transactions. For mobile money, a 0.5% levy applies to withdrawals, and 1% is levied on transfers.

Most ISPs in Uganda have blocked access to social media platforms, requiring upfront payment of the tax, while smaller ISPs have simply [increased the cost of data](https://qz.com/africa/1319826/how-ugandas-social-media-tax-works-with-whatsapp-facebook-twitter-blocked/). This is not the first time that social media has been blocked in Uganda. In early 2016, ISPs were instructed to [block access to social media](/post/uganda-social-media-blocked/) in the run-up to the general elections and during President Museveni’s subsequent inauguration ceremony. Authorities ordered the blocking of social media for “security purposes”, but the move [reportedly](https://advox.globalvoices.org/2016/05/11/social-media-blocked-in-uganda-ahead-of-president-musevenis-inauguration/) harmed the political opposition.

Now Ugandan civil society organizations are [concerned](https://africabusinesscommunities.com/tech/tech-news/uganda-civil-society-condemns-proposed-taxation-of-over-the-top-services/) that the new OTT tax is being introduced to silence alternative or dissenting opinions on matters of public interestin Uganda. In December 2016, an opposition politician, Swaibu Nsamba Gwogyolonga, was [arrested](http://www.monitor.co.ug/News/National/FDC-chairperson-arrested-over-posting-Museveni-in-coffin/688334-3485026-6lkhc9z/index.html) over his (offensive to President Museveni) Facebook post. These concerns were exacerbated when President Yoweri Museveni [reportedly claimed](http://www.monitor.co.ug/News/National/Museveni-taxes-social-media-users-Twitter-Skype/688334-4366608-oilivjz/index.html) that the new tax is meant to “deal with the consequences of online gossip” (lugambo) on social media platforms.

Civil society groups have also [expressed concern](https://cipesa.org/2018/04/ugandas-social-media-tax-threatens-internet-access-affordability/) that these taxes will negatively affect internet access and affordability, as well as financial inclusion for low income and marginalized groups such as women, youth and rural communities. The Alliance for Affordable Internet (A4AI) [estimates](https://a4ai.org/uganda-social-media-tax/) that the new taxes will represent a 30% increase in the cost to connect to the internet for Uganda’s poorest populations. 

In his [statement](https://www.yowerikmuseveni.com/why-government-taxing-social-media-president-museveni), President Museveni argued that the social media tax is meant to reduce capital flight and improve the country’s tax to GDP ratio. The 14th June national [budget speech](http://www.finance.go.ug/sites/default/files/Publications/Government%20of%20Uganda%20Budget%20Speech%20for%20Fiscal%20Year%202018-2019_1.pdf) for the fiscal year 2018/19 indicated projections of up to UGX 486 billion (approximately USD 129 million) of estimated revenue annually by 2022/23.

Restricting access to the internet, however, can have an economic impact. According to CIPESA’s [framework for calculating the economic impact of internet disruptions in sub-Saharan Africa](https://cipesa.org/?wpfb_dl=252), Uganda’s five-day social media shutdown in 2016 set the economy back an estimated USD 2.2 million. The ICT sector has previously contributed up to 3.4% to Uganda’s GDP per annum, while recent [studies](https://spiral.imperial.ac.uk/bitstream/10044/1/46208/2/Goodridge%202017-05.pdf) have shown that a 10% increase in mobile broadband penetration can increase economic growth by nearly 3%. Increasing the cost to access the internet, therefore, has the potential to impact the country’s economic growth.

In response to the OTT tax, [protests](https://www.bbc.com/news/world-africa-44798627) erupted in Uganda. Five users and a technology company [reportedly filed a lawsuit](https://qz.com/africa/1319826/how-ugandas-social-media-tax-works-with-whatsapp-facebook-twitter-blocked/) with the Constitutional Court, suing the Uganda Communications Commission, Uganda Revenue Authority and the country’s Attorney General. In an attempt to prevent untaxed access to social media, circumvention tools are being blocked as well. According to [MTN](https://www.mtn.co.ug/en/products/internet/Pages/OTT-Services-.aspx):

*“The operators will block access to VPNs that the authorities declare to be used for OTT services, unless the consumer has paid their OTT tax.”*

Internet taxes are not unique to Uganda. Zambia plans to [tax calls made over social media apps](https://qz.com/africa/1370717/zambia-to-tax-calls-made-on-whatsapp-facebook-messenger-viber-and-others/), while Tanzania has rolled out a “[blogger tax](https://advox.globalvoices.org/2018/04/12/will-tanzanian-bloggers-pay-up-or-push-back-against-blogger-tax/)”. According to [DefendDefenders](https://www.defenddefenders.org/publication/spreading-fear-asserting-control-tanzanias-assault-on-civic-space/), Tanzania’s Electronic and Postal Communications (Online Content) Regulations 2018 prohibit online content in broad terms and impose registration or licensing requirements which enable the government to arbitrarily regulate and ban online content produced by bloggers, citizen journalists, forum administrators, social media users, as well as websites, television and radio stations. Benin previously had plans to tax social media use, but it was [repealed](https://internetwithoutborders.org/benin-government-repeals-social-media-tax/) following public backlash.

# Methodology

To measure internet censorship in Uganda, OONI’s network measurement software (called [OONI Probe](/install/)) was run across multiple local vantage points. OONI Probe is [free and open source software](https://github.com/TheTorProject/ooni-probe) designed to measure various forms of network interference.

The main OONI Probe tests run as part of this study include:

*   [Web Connectivity](/nettest/web-connectivity/)
*   [HTTP Invalid Request Line](/nettest/http-invalid-request-line/)
*   [HTTP Header Field Manipulation](/nettest/http-header-field-manipulation/)
*   [Vanilla Tor](/nettest/vanilla-tor/)
*   [WhatsApp](/nettest/whatsapp/)
*   [Facebook Messenger](/nettest/facebook-messenger/)
*   [Telegram](/nettest/telegram/)

Given that the Ugandan government recently rolled out a [new social media tax](https://www.wired.com/story/uganda-social-media-tax-stays-for-now/) - resulting in the blocking of social media platforms - running OONI’s Web Connectivity test was core to the objective of collecting network measurement data that shows which websites are blocked, how they are blocked, and which ISPs implement the blocks.

OONI’s [Web Connectivity test](/nettest/web-connectivity/) is designed to measure whether websites are blocked by means of DNS tampering, TCP/IP blocking, or by an HTTP transparent proxy. This test is automatically performed both over the vantage point of the user and from a non-censored control vantage point. If the results from both vantage points match, the tested website is most likely accessible. If the results however differ, the measurement is flagged as anomalous. OONI’s current methodology is blockpage-driven, primarily confirming censorship events when ISPs serve blockpages. In cases where ISPs do not serve blockpages, the relevant network measurements are analyzed over time, examining whether the specific types of failures persist and what caused these failures (i.e. ruling out false positives).

The testing was mostly limited to the URLs included in the Citizen Lab’s [global](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) and [Ugandan](https://github.com/citizenlab/test-lists/blob/master/lists/ug.csv) test lists. These lists consist of a variety of different types of URLs that fall under [30 categories](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) and that are tested for censorship by network measurement projects like OONI. Throughout the course of this research, [test lists were updated](https://github.com/citizenlab/test-lists/pull/391) to ensure that social media sites affected by the tax were tested.

To monitor the accessibility of popular instant messaging platforms, OONI’s [WhatsApp](/nettest/whatsapp/), [Facebook Messenger](/nettest/facebook-messenger/) and [Telegram](/nettest/telegram/) tests were run locally. These tests are designed to measure the reachability of the WhatsApp, Facebook Messenger, and Telegram apps and web interfaces through DNS lookups and by attempting to establish TCP and TLS connections to their servers.

Since censorship circumvention tools were [reportedly blocked](https://observer.ug/news/headlines/58065-social-media-tax-telecoms-to-block-vpns-says-ucc.html) to prevent untaxed access to social media, the accessibility of circumvention tools was measured as well. Many circumvention tool sites were already included in the Citizen Lab’s [global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) and additional ones were [added](https://github.com/citizenlab/test-lists/pull/391), all of which were measured via OONI’s [Web Connectivity test](/nettest/web-connectivity/). OONI’s [Vanilla Tor](/nettest/vanilla-tor/) test was also run, which is designed to measure the blocking of the [Tor network](https://www.torproject.org/). To better understand how circumvention tools are blocked, a series of custom tests and experiments were run as well.

Once network measurement data was collected from all of these tests, [OONI data](https://api.ooni.io/files/by_country/UG) was subsequently [processed](https://github.com/ooni/pipeline) and analyzed based on a standardized set of heuristics for detecting internet censorship and traffic manipulation. All OONI Probe network measurements collected from Uganda between 1st July 2018 to 24th October 2018 were analyzed as part of this study.

# Findings

Ugandan ISPs don’t appear to serve block pages. Confirming censorship events can therefore be quite challenging, particularly in light of false positives that (almost) inevitably emerge (due to transient network failures, for example). The findings have therefore been limited to network anomalies that are consistent and persistent in the same ASNs over time.

While a [directive](https://www.dignited.com/32755/uganda-tax-on-ott-services-effective-1st-july-2018/) has been issued for the OTT tax, the blocking of certain adult websites is [legally required](http://chapterfouruganda.com/sites/default/files/downloads/The%20Anti%20Pornography%20Act%202014.pdf) of all ISPs in Uganda. Banned adult websites ([listed on the UCC letter](https://www.sautitech.com/telecom/full-list-of-porn-sites-banned-in-uganda/)) were therefore tested to detect the censorship techniques adopted by different ISPs and to compare them with measurements testing the blocking of social media and circumvention tool sites.

## Blocking of social media

Since [2014](https://api.ooni.io/files/by_country/UG?order_by=test_start_time&order=asc) - and particularly since the OTT tax was rolled out in July 2018 - the accessibility of social media sites has been measured across multiple ASNs in Uganda through the use of [OONI Probe](/install/).

As part of this study, the analysis has been narrowed to:

* The [taxed social media sites](https://www.mtn.co.ug/en/products/internet/Pages/OTT-Services-.aspx)
* Measurements [collected](https://explorer.ooni.io/country/UG) from 1st July 2018 onwards (when the OTT tax came into effect)
* Measurements collected from networks where the OTT tax hadn’t been paid (enabling the detection of censorship)
* Networks from which most measurements had been collected from (enabling the examination of network anomalies over time)

Measurements collected from MTN ([AS20294](https://stat.ripe.net/AS20294)) and Africell ([AS36991](https://stat.ripe.net/AS36991)) met the above criteria, which is why findings from these two networks are primarily presented. Measurements were also collected from a number of other ASNs, as well as from networks where the OTT tax was paid. The latter served as a baseline, allowing the comparison of measurements based on whether or not the OTT tax was paid. This was particularly useful for ruling out false positives and presenting the findings with more confidence.

Before we dive into the findings, it's important to first highlight that MTN subscribers are required to use an HTTP proxy to access the internet. On mobile devices, they generally do not have to do anything to setup the HTTP proxy, as it's shipped as part of the APN settings. This means that MTN mobile users may have a different internet experience in comparison to what is captured by OONI Probe on the network level. The HTTP proxy used for MTN testing has the address: `http://10.120.0.138:8080/`.

The following table shows results collected between 1st July 2018 to 24th October 2018 (without having paid the OTT tax) from MTN, Africell and Airtel. The findings under the “MTN without proxy” column were gathered (using OONI Probe) on the MTN network with the proxy settings disabled, while the results under the “MTN with proxy” column were collected using curl with the `--proxy` flag.

|**URLs**|**MTN without proxy (AS20294)**| **MTN with proxy (AS20294)**| **Africell (AS36991)**| **Airtel (AS37075)** |
|--------|--------|----|---|---|
|`https://badoo.com`|[HTTP failure](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=https:%2F%2Fbadoo.com)|CONNECT fail|[HTTP failure](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fbadoo.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T144136Z_AS0_TD9AA71S7zvc9717nWFiFI7OJYPaIdNDavekfd4EAx4WFsQfAj?input=https:%2F%2Fbadoo.com%2F) |
|`https://go-text.me`|[HTTP failure](https://explorer.ooni.io/measurement/20181001T111406Z_AS20294_tgQ7URHzX2aSrExyrDCQWjpdvDuIfXbVJ6Lz8ZB9Y8BnIhXYsz?input=https:%2F%2Fgo-text.me)|OK|[Accessible](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fgo-text.me)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184154Z_AS0_zYxE6RvxgbU7iA3cCoPLz8XnhUxyHQK8P6ab9FVhAIHdWeOWhZ?input=https:%2F%2Fgo-text.me) |
|`https://hangouts.google.com`|[HTTP failure](https://explorer.ooni.io/measurement/20181001T061057Z_AS20294_5QfjAZlWsywwLcATq2mK71PGV3EXP2OpentBhIV0rccUL11uJe?input=https:%2F%2Fhangouts.google.com)|OK|[HTTP failure](https://explorer.ooni.io/measurement/20181001T074629Z_AS36991_Bv85jp5hZ6ZpklZaqDcXOBFkpfEVxBggA5eFIEL4eEcgflCwk0?input=https:%2F%2Fhangouts.google.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184154Z_AS0_zYxE6RvxgbU7iA3cCoPLz8XnhUxyHQK8P6ab9FVhAIHdWeOWhZ?input=https:%2F%2Fhangouts.google.com) |
|`https://hitwe.com`|[Accessible](https://explorer.ooni.io/measurement/20181001T111406Z_AS20294_tgQ7URHzX2aSrExyrDCQWjpdvDuIfXbVJ6Lz8ZB9Y8BnIhXYsz?input=https:%2F%2Fhitwe.com)|CONNECT: 503 error|[Accessible](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fhitwe.com)| [Accessible](https://explorer.ooni.io/measurement/20181024T184154Z_AS0_zYxE6RvxgbU7iA3cCoPLz8XnhUxyHQK8P6ab9FVhAIHdWeOWhZ?input=https:%2F%2Fhitwe.com) |
|`https://line.me`|[Accessible](https://explorer.ooni.io/measurement/20181018T181638Z_AS20294_C5jNUOmZxUar2iheDEkMd85GnvKFAiVIqy0yTpfQCPTYL72DRD?input=https:%2F%2Fline.me)|OK|[HTTP failure](https://explorer.ooni.io/measurement/20181001T074629Z_AS36991_Bv85jp5hZ6ZpklZaqDcXOBFkpfEVxBggA5eFIEL4eEcgflCwk0?input=https://line.me)| [Accessible](https://explorer.ooni.io/measurement/20181024T184154Z_AS0_zYxE6RvxgbU7iA3cCoPLz8XnhUxyHQK8P6ab9FVhAIHdWeOWhZ?input=https:%2F%2Fline.me) |
|`https://mail.ru/`|[Accessible](https://explorer.ooni.io/measurement/20181001T111406Z_AS20294_tgQ7URHzX2aSrExyrDCQWjpdvDuIfXbVJ6Lz8ZB9Y8BnIhXYsz?input=https:%2F%2Fmail.ru)|OK|N/A| [Accessible](https://explorer.ooni.io/measurement/20181024T184154Z_AS0_zYxE6RvxgbU7iA3cCoPLz8XnhUxyHQK8P6ab9FVhAIHdWeOWhZ?input=https:%2F%2Fmail.ru) |
|`https://secure.hi5.com`|[HTTP failure](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=https:%2F%2Fsecure.hi5.com)|OK|[HTTP failure](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fsecure.hi5.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184154Z_AS0_zYxE6RvxgbU7iA3cCoPLz8XnhUxyHQK8P6ab9FVhAIHdWeOWhZ?input=https:%2F%2Fsecure.hi5.com) |
|`https://tinder.com`|[HTTP failure](https://explorer.ooni.io/measurement/20180928T120414Z_AS20294_UDAvnGBihX4WslqOJEw4dopAYJz0vMlMDBgAbOUVVbinJz3lnw?input=https://tinder.com)|OK|[HTTP failure](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Ftinder.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184154Z_AS0_zYxE6RvxgbU7iA3cCoPLz8XnhUxyHQK8P6ab9FVhAIHdWeOWhZ?input=https:%2F%2Ftinder.com) |
|`https://twitter.com`|[TCP/IP connect timeout](https://explorer.ooni.io/measurement/20180928T120414Z_AS20294_UDAvnGBihX4WslqOJEw4dopAYJz0vMlMDBgAbOUVVbinJz3lnw?input=https:%2F%2Ftwitter.com)|CONNECT fail|[HTTP failure](https://explorer.ooni.io/measurement/20181001T074629Z_AS36991_Bv85jp5hZ6ZpklZaqDcXOBFkpfEVxBggA5eFIEL4eEcgflCwk0?input=https:%2F%2Ftwitter.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184154Z_AS0_zYxE6RvxgbU7iA3cCoPLz8XnhUxyHQK8P6ab9FVhAIHdWeOWhZ?input=https:%2F%2Ftwitter.com) |
|`https://web.telegram.org`|[Accessible](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=https:%2F%2Fweb.telegram.org)|OK|[HTTP failure](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fweb.telegram.org)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184628Z_AS0_IJ6QFRNgSLtrtjvVQcnUKhTm2cnjgo8xW0ZbRnBNlDJW3WF273?input=https:%2F%2Fweb.telegram.org) |
|`https://web.wechat.com`|[HTTP failure](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=https:%2F%2Fweb.wechat.com)|CONNECT fail|[HTTP failure](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fweb.wechat.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184154Z_AS0_zYxE6RvxgbU7iA3cCoPLz8XnhUxyHQK8P6ab9FVhAIHdWeOWhZ?input=https:%2F%2Fweb.wechat.com) |
|`https://web.whatsapp.com`|[TCP/IP connect timeout](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=https:%2F%2Fweb.whatsapp.com)|OK|[HTTP failure](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fweb.whatsapp.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184628Z_AS0_IJ6QFRNgSLtrtjvVQcnUKhTm2cnjgo8xW0ZbRnBNlDJW3WF273?input=https:%2F%2Fweb.whatsapp.com) |
|`https://www.facebook.com`|[TCP/IP connect timeout](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=https:%2F%2Fwww.facebook.com)|OK|[HTTP failure](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fwww.facebook.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184154Z_AS0_zYxE6RvxgbU7iA3cCoPLz8XnhUxyHQK8P6ab9FVhAIHdWeOWhZ?input=https:%2F%2Fwww.facebook.com) |
|`https://www.instagram.com`|[TCP/IP connect timeout](https://explorer.ooni.io/measurement/20181001T061057Z_AS20294_5QfjAZlWsywwLcATq2mK71PGV3EXP2OpentBhIV0rccUL11uJe?input=https:%2F%2Fwww.instagram.com)|CONNECT fail|[HTTP failure](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fwww.instagram.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184154Z_AS0_zYxE6RvxgbU7iA3cCoPLz8XnhUxyHQK8P6ab9FVhAIHdWeOWhZ?input=https:%2F%2Fwww.instagram.com) |
|`https://www.kik.com/`|[HTTP failure](https://explorer.ooni.io/measurement/20180706T060812Z_AS20294_wNur1AXYflR8kmhZHUXiqzi0L7tAV0JGbn4yRse1WsPYIfpkvE?input=https:%2F%2Fwww.kik.com%2F)|SSL fail|N/A| [HTTP failure](https://explorer.ooni.io/measurement/20181024T142004Z_AS0_VM2kP3RLgvYz5kry18CFzJI2zYnYoBzvXVaLZ62EQ9KGbXshal?input=https:%2F%2Fwww.kik.com%2F) |
|`https://www.linkedin.com`|[HTTP failure](https://explorer.ooni.io/measurement/20181001T061057Z_AS20294_5QfjAZlWsywwLcATq2mK71PGV3EXP2OpentBhIV0rccUL11uJe?input=https:%2F%2Fwww.linkedin.com)|OK|[HTTP failure](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fwww.linkedin.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184628Z_AS0_IJ6QFRNgSLtrtjvVQcnUKhTm2cnjgo8xW0ZbRnBNlDJW3WF273?input=https:%2F%2Fwww.linkedin.com) |
|`https://www.meetme.com`|[Accessible](https://explorer.ooni.io/measurement/20181001T111406Z_AS20294_tgQ7URHzX2aSrExyrDCQWjpdvDuIfXbVJ6Lz8ZB9Y8BnIhXYsz?input=https:%2F%2Fwww.meetme.com)|OK|[HTTP failure](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fwww.meetme.com)| [Accessible](https://explorer.ooni.io/measurement/20181024T184628Z_AS0_IJ6QFRNgSLtrtjvVQcnUKhTm2cnjgo8xW0ZbRnBNlDJW3WF273?input=https:%2F%2Fwww.meetme.com) |
|`https://www.skype.com`|[HTTP failure](https://explorer.ooni.io/measurement/20181001T061057Z_AS20294_5QfjAZlWsywwLcATq2mK71PGV3EXP2OpentBhIV0rccUL11uJe?input=https:%2F%2Fwww.skype.com)|CONNECT fail|[HTTP failure](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fwww.skype.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184628Z_AS0_IJ6QFRNgSLtrtjvVQcnUKhTm2cnjgo8xW0ZbRnBNlDJW3WF273?input=https:%2F%2Fwww.skype.com) |
|`https://www.snapchat.com`|[TCP/IP connect timeout](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=https:%2F%2Fwww.snapchat.com)|OK|[HTTP failure](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fwww.snapchat.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184154Z_AS0_zYxE6RvxgbU7iA3cCoPLz8XnhUxyHQK8P6ab9FVhAIHdWeOWhZ?input=https:%2F%2Fwww.snapchat.com) |
|`https://www.textra.me`|[TCP/IP connect timeout](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=https:%2F%2Fwww.textra.me)|CONNECT: 502 error|[TCP/IP connect timeout](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fwww.textra.me)| [TCP/IP connect timeout](https://explorer.ooni.io/measurement/20181024T184154Z_AS0_zYxE6RvxgbU7iA3cCoPLz8XnhUxyHQK8P6ab9FVhAIHdWeOWhZ?input=https:%2F%2Fwww.textra.me) |
|`https://www.truecaller.com`|[HTTP failure](https://explorer.ooni.io/measurement/20181001T061057Z_AS20294_5QfjAZlWsywwLcATq2mK71PGV3EXP2OpentBhIV0rccUL11uJe?input=https:%2F%2Fwww.truecaller.com)|CONNECT fail|[HTTP failure](https://explorer.ooni.io/measurement/20181002T124420Z_AS36991_mcS5A6RMoxmjz6ooQwhmrufmf2o2nVdNmcgVjoHLQpkh6yrHkm?input=https:%2F%2Fwww.truecaller.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184154Z_AS0_zYxE6RvxgbU7iA3cCoPLz8XnhUxyHQK8P6ab9FVhAIHdWeOWhZ?input=https:%2F%2Fwww.truecaller.com) |
|`https://www.tumblr.com`|[HTTP failure](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=https:%2F%2Fwww.tumblr.com)|CONNECT fail|[HTTP failure](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fwww.tumblr.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184628Z_AS0_IJ6QFRNgSLtrtjvVQcnUKhTm2cnjgo8xW0ZbRnBNlDJW3WF273?input=https:%2F%2Fwww.tumblr.com) |
|`https://www.viber.com`|[HTTP failure](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=https:%2F%2Fwww.viber.com)|CONNECT fail|[HTTP failure](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fwww.viber.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184628Z_AS0_IJ6QFRNgSLtrtjvVQcnUKhTm2cnjgo8xW0ZbRnBNlDJW3WF273?input=https:%2F%2Fwww.viber.com) |
|`https://zalo.me/pc`|[HTTP failure](https://explorer.ooni.io/measurement/20180706T060812Z_AS20294_wNur1AXYflR8kmhZHUXiqzi0L7tAV0JGbn4yRse1WsPYIfpkvE?input=https:%2F%2Fzalo.me%2Fpc)|OK|N/A| [HTTP failure](https://explorer.ooni.io/measurement/20181024T144136Z_AS0_TD9AA71S7zvc9717nWFiFI7OJYPaIdNDavekfd4EAx4WFsQfAj?input=https:%2F%2Fzalo.me%2Fpc) |
|`http://www.getdrupe.com/`|[Accessible](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=http:%2F%2Fwww.getdrupe.com%2F)|OK|[HTTP timeout](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=http:%2F%2Fwww.getdrupe.com%2F)| [Accessible](https://explorer.ooni.io/measurement/20181024T184628Z_AS0_IJ6QFRNgSLtrtjvVQcnUKhTm2cnjgo8xW0ZbRnBNlDJW3WF273?input=http:%2F%2Fwww.getdrupe.com%2F) |
|`http://www.grindr.com`|[HTTP timeout](https://explorer.ooni.io/measurement/20181019T081615Z_AS20294_oiQ7wStdBimXRddfcsafroTVysks2Hk74iIH3Wvz82ETS7NeO9?input=http:%2F%2Fwww.grindr.com%2F)|N/A|| N/A |

What is evident is that not all social media sites are blocked across ISPs. Africell, for example, blocks access to line.me and meetme.com, while MTN and Airtel don't. In many cases, the accessibility of social media sites on MTN varies depending on whether or not the user has configured the carrier provided proxy or not.

In relation to the tests run using the MTN proxy:

* “OK” means that the request was successfull. Note behavior of the proxy "flooding" the client with series of TCP ACKs.

![OK via proxy](./proxy-ok-mail.png)

* “CONNECT fail” means that the connection was aborted right after sending the HTTP proxy `CONNECT example.com:443` instruction. Note anomalous `TTL=62` and echoed `IP ID` of `RST` packet suggesting that the packet is injected.

![CONNECT fail](./proxy-connect-fail-badoo.png)

* “SSL fail” means that it was possible to establish a connection to the endpoint (via the CONNECT command), but the connection was terminated during the TLS handshake phase. Note that TTL is not anomalous in this case.

![SSL fail](./proxy-ssl-fail-kik.png)

* “CONNECT: 502” refers to “502 Bad Gateway” error meaning that [the HTTP proxy returned an error](./proxy-502-textra.txt) when attempting to establish a connection to the remote host and failing to do it for half a minute.

![Bad Gateway](./proxy-502-textra.png)

* “CONNECT: 503” refers to “503 Service Unavailable” error meaning that [the proxy was unavailable](./proxy-503-hitwe.txt) during the query.

![Proxy Service Unavailable”](./proxy-503-hitwe.png)

“CONNECT fail” connections were likely aborted by MTN’s blocking equipment, rather than by the MTN HTTP proxy itself. If the proxy fails to establish a connection, then the proxy delivers errors, rather than resetting connections.

```
### traceroute to the port of the proxy shipped as the APN setting for MTN
$ mtr --report-wide --show-ips --aslookup --tcp --port=8080 10.120.0.138
Start: Fri Oct 19 16:24:17 2018
HOST: raspberrypi            Loss%   Snt   Last   Avg  Best  Wrst StDev
  1. AS???    192.168.1.1     0.0%    10    2.1   2.9   1.6   4.9   1.1
  2. AS???    192.168.225.1   0.0%    10    7.0   6.7   3.7   8.8   1.3
  3. AS???    10.120.20.21    0.0%    10   39.4  37.8  27.7  52.6   7.0
  4. AS???    ???            100.0    10    0.0   0.0   0.0   0.0   0.0
  5. AS???    10.120.0.138    0.0%    10  404.0 221.0 149.3 404.0  66.8
```

MTN, Africell and Airtel primarily appear to block access to social media sites by means of HTTP blocking. Most measurements collected from these three ISPs present the same HTTP failures and “connection reset” errors, which means that they reset connections to block access to those sites. A few of those [measurements](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Ftinder.com) are annotated by OONI Probe as DNS failures due to geoDNS-based load balancing, but they are actually HTTP failures too. The fact that HTTP failures and “connection reset” errors consistently occur in most anomalous measurements (expanding beyond the above social media sites) leads to the conclusion that Ugandan ISPs primarily block access by resetting connections.

In some cases though, MTN appears to block access to sites by means of [TCP/IP blocking](https://github.com/ooni/spec/blob/master/nettests/ts-017-web-connectivity.md#test-description). Most measurements collected from MTN testing twitter.com, web.whatsapp.com, facebook.com, instagram.com and snapchat.com consistently presented TCP connect timeout errors. In an attempt to examine whether MTN in fact blocks these sites by means of TCP/IP (or if these anomalies are caused by poor network performance), further tests were run from two Raspberry Pis connected to MTN.

When testing twitter.com, we observed the same pattern with TCP connect timeout errors. TCP traceroutes to port 443 terminated at the third hop, while TCP traceroutes to port 22 or another host in same /25 subnet went further. We also observed the same patterns and the same TCP connect timeout errors when testing web.whatsapp.com, facebook.com and instagram.com. RIPE Atlas measurements show the same errors for [web.whatsapp.com](https://atlas.ripe.net/measurements/16558010/#!probes), [facebook.com](https://atlas.ripe.net/measurements/16548953/#!probes) and [instagram.com](https://atlas.ripe.net/measurements/16556134/#!probes) from local vantage points.

```
### traceroute to HTTPS port of IP for twitter.com
$ mtr --report-wide --show-ips --aslookup --tcp --port=443 104.244.42.193
Start: Fri Oct 19 10:16:01 2018
HOST: raspberrypi            Loss%   Snt   Last   Avg  Best  Wrst StDev
  1. AS???    192.168.1.1     0.0%    10    3.0   3.4   2.0   4.8   0.7
  2. AS???    192.168.225.1   0.0%    10    7.7   6.2   3.4   7.7   1.2
  3. AS???    ???            100.0    10    0.0   0.0   0.0   0.0   0.0

### traceroute to nearby IP in same /24 using same TCP port
$ mtr --report-wide --show-ips --aslookup --tcp --port=443 104.244.42.192
Start: Fri Oct 19 10:16:25 2018
HOST: raspberrypi                                      Loss%   Snt   Last   Avg  Best  Wrst StDev
  1. AS???    192.168.1.1                               0.0%    10    2.3   3.7   0.9  11.4   2.9
  2. AS???    192.168.225.1                             0.0%    10    3.3   6.9   3.3   8.8   1.5
  3. AS???    10.120.20.21                              0.0%    10   36.1  33.5  27.4  38.1   3.2
  4. AS???    10.120.22.33                              0.0%    10   36.8  33.2  24.7  46.5   7.6
  5. AS20294  h903.n1.ips.mtn.co.ug (41.210.137.3)      0.0%    10   25.0  33.2  25.0  44.4   6.1
  6. AS20294  h3ecc.n1.ips.mtn.co.ug (41.210.190.204)   0.0%    10   25.5  34.8  25.0  46.2   7.5
  7. AS20294  h3ee8.n1.ips.mtn.co.ug (41.210.190.232)   0.0%    10   26.3  32.4  22.7  49.1   8.2
  8. AS16637  41.181.247.38                             0.0%    10  227.2 236.7 226.5 253.4   8.2
  9. AS16637  41.181.245.178                            0.0%    10  239.3 246.4 229.1 280.4  18.6
     AS16637  41.181.245.250
 10. AS16637  41.181.190.197                            0.0%    10  239.3 240.7 229.1 287.1  16.9
 11. AS16637  41.181.245.187                            0.0%    10  238.9 235.5 225.5 251.8   7.2
 12. AS???    ???                                      100.0    10    0.0   0.0   0.0   0.0   0.0

### traceroute to same twitter.com IP using TCP port 22/ssh
$ mtr --report-wide --show-ips --aslookup --tcp --port=22 104.244.42.193
Start: Fri Oct 19 10:17:24 2018
HOST: raspberrypi                                      Loss%   Snt   Last   Avg  Best  Wrst StDev
  1. AS???    192.168.1.1                               0.0%    10    3.7   3.3   2.3   4.1   0.3
  2. AS???    192.168.225.1                             0.0%    10    8.7   6.4   1.9   8.7   2.2
  3. AS???    10.120.20.21                              0.0%    10   41.2  33.8  21.1  52.4   9.0
  4. AS???    10.120.22.33                              0.0%    10   33.9  32.3  26.0  42.8   4.7
  5. AS20294  h903.n1.ips.mtn.co.ug (41.210.137.3)      0.0%    10   90.5  39.2  23.3  90.5  18.9
  6. AS20294  h3ecc.n1.ips.mtn.co.ug (41.210.190.204)   0.0%    10   78.9  39.5  24.5  78.9  15.1
  7. AS20294  h3ee8.n1.ips.mtn.co.ug (41.210.190.232)   0.0%    10   71.6  38.3  25.1  71.6  14.1
  8. AS16637  41.181.247.38                             0.0%    10  228.0 241.9 228.0 273.8  15.3
  9. AS16637  41.181.245.250                            0.0%    10  236.5 250.9 226.5 331.9  34.2
     AS16637  41.181.245.178
 10. AS16637  41.181.190.197                            0.0%    10  236.0 253.5 230.7 373.9  43.0
 11. AS16637  41.181.245.187                            0.0%    10  229.5 234.3 223.0 266.4  12.5
 12. AS???    ???                                      100.0    10    0.0   0.0   0.0   0.0   0.0

### traceroute to same IP using TCP port 25/SMTP
$ mtr --report-wide --show-ips --aslookup --tcp --port=25 104.244.42.193
Start: Fri Oct 19 10:23:42 2018
HOST: raspberrypi            Loss%   Snt   Last   Avg  Best  Wrst StDev
  1. AS???    192.168.1.1     0.0%    10    3.4   3.1   1.3   4.8   1.1
  2. AS???    192.168.225.1   0.0%    10    8.0   6.9   5.4   8.5   1.1
  3. AS???    10.120.20.21    0.0%    10   44.1  35.7  23.2  44.1   6.1
  4. AS???    ???            100.0    10    0.0   0.0   0.0   0.0   0.0

### traceroute to HTTPS port of IP for web.whatsapp.com
$  mtr --report-wide --show-ips --aslookup --tcp --port=443 31.13.64.51
Start: Fri Oct 19 10:19:51 2018
HOST: raspberrypi            Loss%   Snt   Last   Avg  Best  Wrst StDev
  1. AS???    192.168.1.1     0.0%    10    3.6   2.8   1.1   4.8   1.1
  2. AS???    192.168.225.1   0.0%    10    5.1   6.0   2.6   8.6   1.6
  3. AS???    ???            100.0    10    0.0   0.0   0.0   0.0   0.0
```

In testing the reachability of www.snapchat.com, without the MTN proxy, we noticed that this site appeared to be blocked by IP rather than by hostname. Since www.snapchat.com is hosted on the Google Cloud, the blocking of the IPs associated to ghs.googlehosted.com may have resulted in the blocking of many other unrelated sites. According to the [Rapid7 Forward-DNS dataset](https://opendata.rapid7.com/sonar.fdns_v2/), around 300,000 domains use the ghs.googlehosted.com endpoint.

To examine whether these sites were indeed blocked on the MTN network without the proxy, we tested a sample of high profile sites using that network endpoint as an entry point for their website. We also tested a random sample of hosted sites. OONI [measurements](https://explorer.ooni.io/country/UG) presented TCP anomalies for all those sites, suggesting that they may have been affected by the blocking of www.snapchat.com. MTN may, therefore, have blocked access to www.snapchat.com by means of TCP/IP, unintentionally causing collateral damage and possibly affecting thousands of other sites.

Most MTN users, though, probably won’t experience any of this collateral damage, since the MTN proxy appears to circumvent IP level blocking by issuing CONNECT requests by hostname, instead of IP. This would explain why MTN users, with the proxy enabled and without having paid the OTT tax, can access sites that are blocked by IP (such as facebook.com). However, they cannot access social media sites that are [blocked](https://explorer.ooni.io/measurement/20181001T061057Z_AS20294_5QfjAZlWsywwLcATq2mK71PGV3EXP2OpentBhIV0rccUL11uJe?input=https:%2F%2Fwww.skype.com) by means of HTTP (such as skype.com). This also explains why they can access many of the other potentially affected domains hosted on the same cloud load balancer as www.snapchat.com. One of these sites is www.chickentonight.ug, which presents [TCP anomalies](https://explorer.ooni.io/measurement/20181019T151858Z_AS20294_jyozFIq1o2l5WkDFh8s0FOjDvRmxsQyaFxgg6Q6vpa3vjXa4Jj?input=http:%2F%2Fwww.chickentonight.ug%2F) in OONI testing (likely as a result of collateral damage), but which is accessible from a mobile browser connected to MTN (using its HTTP proxy).

Overall, the TCP anomalies for twitter.com, web.whatsapp.com, facebook.com, instagram.com and snapchat.com highlight inconsistencies in the configuration of the MTN HTTP proxy. This could potentially be explained as an attempt by MTN to block applications, without distinguishing the website traffic from the application traffic. Perhaps their blocking equipment was misconfigured, or perhaps it was configured with cached IP addresses.

Finally, OONI measurements show that www.textra.me is inaccessible on the TCP/IP level, but this appears to be due to server-side issues. The site also presents reachability issues from global vantage points, as illustrated by [RIPE Atlas measurements](https://atlas.ripe.net/measurements/16547519/?filter=&show_only=Failed#!map) (15% of vantage points can’t do a TLS handshake). TCP traceroutes towards www.textra.me from a vantage point in MTN differ significantly from TCP traceroutes towards other websites that are inaccessible on the TCP level (such as twitter.com), while attempts to connect to the website via MTN's auto-provisioned proxy are not blocked (unlike twitter.com or instagram.com), but produce a proxy-level error. All of this suggests that www.textra.me is inaccessible due to server-side issues, which is further implied by the 503 error that appears when attempting to access the site via MTN’s proxy.

```
$ mtr --report-wide --show-ips --aslookup --tcp --port=443 www.textra.me
Start: Fri Oct 19 10:45:59 2018
HOST: raspberrypi                                                   Loss%   Snt   Last   Avg  Best  Wrst StDev
  1. AS???    192.168.1.1                                            0.0%    10    1.9   2.8   1.0   6.1   1.6
  2. AS???    192.168.225.1                                          0.0%    10    4.9   5.8   2.7   8.0   1.3
  3. AS???    10.120.20.21                                           0.0%    10   37.2  32.1  18.2  43.4   6.7
  4. AS???    10.120.22.33                                           0.0%    10   44.7  39.4  26.5  47.9   6.2
  5. AS20294  h903.n1.ips.mtn.co.ug (41.210.137.3)                   0.0%    10   28.8  34.8  25.6  44.8   5.4
  6. AS20294  h3ecc.n1.ips.mtn.co.ug (41.210.190.204)                0.0%    10   25.2  34.0  21.8  57.8   9.8
  7. AS20294  h3ee8.n1.ips.mtn.co.ug (41.210.190.232)                0.0%    10   33.7  36.5  24.4  46.7   7.2
  8. AS16637  41.181.247.38                                          0.0%    10  229.4 239.0 225.3 275.9  15.0
  9. AS???    ???                                                   100.0    10    0.0   0.0   0.0   0.0   0.0
 10. AS???    ???                                                   100.0    10    0.0   0.0   0.0   0.0   0.0
 11. AS3356   lag-106.ear1.London15.Level3.net (212.187.167.65)      0.0%    10  229.2 234.8 227.7 244.6   5.2
 12. AS3356   ae-1-3114.edge5.London1.Level3.net (4.69.148.218)      0.0%    10  233.1 235.8 229.7 240.1   3.2
 13. AS2914   ae-3.r00.londen10.uk.bb.gin.ntt.net (129.250.9.125)    0.0%    10  233.2 236.9 233.2 246.1   4.0
 14. AS2914   ae-13.r24.londen12.uk.bb.gin.ntt.net (129.250.4.25)    0.0%    10  229.3 233.2 221.2 244.0   6.9
 15. AS2914   ae-5.r24.nycmny01.us.bb.gin.ntt.net (129.250.2.18)     0.0%    10  307.6 305.0 293.9 312.9   6.4
 16. AS2914   ae-4.r22.sttlwa01.us.bb.gin.ntt.net (129.250.4.13)    10.0%    10  369.2 1067. 369.2 3517. 1377.5
 17. AS2914   ae-0.r23.sttlwa01.us.bb.gin.ntt.net (129.250.6.30)     0.0%    10  365.7 681.6 363.2 3467. 978.8
 18. AS2914   ae-3.r23.snjsca04.us.bb.gin.ntt.net (129.250.3.124)    0.0%    10  378.2 380.1 370.6 391.8   7.5
 19. AS2914   ae-45.r01.snjsca04.us.bb.gin.ntt.net (129.250.3.175)   0.0%    10  382.4 383.1 370.9 400.6   7.8
 20. AS2914   ae-4.r05.plalca01.us.bb.gin.ntt.net (129.250.5.32)     0.0%    10  382.8 387.6 376.9 400.7   8.8
 21. AS???    ???                                                   100.0    10    0.0   0.0   0.0   0.0   0.0
```

### WhatsApp

OONI’s [WhatsApp test](/nettest/whatsapp/) is designed to measure the reachability of WhatsApp’s app and web interface by attempting to perform an HTTP GET request, TCP connection and DNS lookup to WhatsApp’s endpoints, registration service and website (web.whatsapp.com). Depending on the success or failure of these methods, we can evaluate whether (and to what extent) WhatsApp’s app and/or web interface are blocked.

The following table summarizes our findings on the testing of WhatsApp across ISPs from 1st July 2018 to 19th October 2018.

| **ASNs** | **Endpoints** | **Registration server** | **web.whatsapp.com** |
|---|---|---|---|
|[MTN (AS20294)](https://explorer.ooni.io/measurement/20181019T000058Z_AS20294_VVDvGKGAGkyCmW3sgI52ooC0LbC7wiqbWhYbgsjnvHE97DNX1O)|Blocked|Blocked|Blocked|
|[Africell (AS36991)](https://explorer.ooni.io/measurement/20181003T051836Z_AS36991_GUhMq5VjNuxXVGL6glppUU7lf9WhUciUT93N17VuuCyn5R9A5r)|OK|Blocked|Blocked|
|[Smile Communications (AS37122)](https://explorer.ooni.io/measurement/20181003T072004Z_AS37122_NqMTrLT87vhVZul7wKCbWySqfVKGtfXFgjJjTvVxacllUAqvxj)|OK|OK|OK|
|[Airtel (AS37075)](https://explorer.ooni.io/measurement/20180827T063503Z_AS37075_fu2iWx7u2jhLkzVjFmNjbHCk4wAK7AKMzx9scK6clyirI9soCK)|OK|Blocked|Blocked|
|[Uganda Telecom (AS21491)](https://explorer.ooni.io/measurement/20181019T142749Z_AS21491_RN1oBmMKAE6xc0X78Plo5CHFTYHJRevjyVX0Gam156G7d7nI44)|OK|OK|OK|

MTN appears to block access to both WhatsApp’s app and web versions, as TCP connections to the app’s endpoints, registration service and web.whatsapp.com failed. This is also corroborated by Web Connectivity measurements collected from MTN, showing the [TCP/IP blocking of web.whatsapp.com](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=https:%2F%2Fweb.whatsapp.com). Both WhatsApp and Web Connectivity measurements collected from MTN show the same timeout errors, strongly suggesting that MTN blocks WhatsApp entirely by means of TCP/IP blocking.

Africell also appears to block access to both WhatsApp’s app and web version, but their blocking techniques are different. They reset connections (HTTP blocking) to WhatsApp’s registration service and website, while refraining to block WhatsApp’s endpoints. The same techniques are also observed in [Web Connectivity measurements](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fweb.whatsapp.com) testing web.whatsapp.com in Africell. Similarly, Airtel blocks WhatsApp’s app and web version by resetting connections to the app’s registration service and website.  

Smile Communications and Uganda Telecom, on the other hand, do not block WhatsApp. All measurements suggest that both the app and its web version are accessible in these two networks. In July 2018, Smile Communications announced that they would [pay the OTT tax on behalf of their customers](https://observer.ug/news/headlines/58078-smile-telecom-to-pay-social-media-tax-for-customers.html) for at least three months.

### Facebook Messenger

OONI’s [Facebook Messenger test](/nettest/facebook-messenger/) is designed to measure the reachability of Facebook Messenger by attempting to perform TCP connections and DNS lookups to Facebook’s endpoints. If TCP connections fail or DNS lookups do not resolve to IP addresses allocated to Facebook, then access to the app is likely blocked.

The following table summarizes findings on the testing of Facebook Messenger across ISPs from 1st July 2018 to 19th October 2018.

| **ASNs** | **TCP connections** | **DNS lookups** |
|---|---|---|
| [MTN (AS20294)](https://explorer.ooni.io/measurement/20181018T145439Z_AS20294_VfqYLM66wjoGa0ncNwyzmeeN8tOqUd0fICtdfJYLNdH6dA7MOt)| Blocked | OK |
| [Africell (AS36991)](https://explorer.ooni.io/measurement/20181002T110531Z_AS36991_3UOOv0ls1sKFZ0yX69M3NxyECOnV4Wwlj0w21I2wjMV0mduEMG) | OK | OK |
| [Smile Communications (AS37122)](https://explorer.ooni.io/measurement/20181003T071933Z_AS37122_hIS2Y6blxpK5CdqlFro1vlegwPmgVmoU1Xb98EjNQS395CBNFZ) | OK | OK |
| [Airtel (AS37075)](https://explorer.ooni.io/measurement/20180827T063610Z_AS37075_UkAnYufR8h4ny0hLbOPNAFQd0Rolbv1tNr4gunkFXYggbGj65o) | OK | OK |
| [Uganda Telecom (AS21491)](https://explorer.ooni.io/measurement/20181019T142702Z_AS21491_O1qGf8NRSIGcuIIenRiF0yo3pLKezsG0TzCgPMMCWV4vtnR8NO) | OK | OK |

Only MTN appears to block access to Facebook Messenger. Most measurements collected from MTN show that TCP connections to Facebook’s endpoints failed. Recent measurements suggest that Facebook Messenger is accessible on (at least) Africell, Smile Communications, Airtel and Uganda Telecom.

### Telegram

OONI’s [Telegram test](/nettest/telegram/) is designed to measure the reachability of Telegram’s app and web version by attempting to perform an HTTP POST request and establish a TCP connection to Telegram’s access points, as well as an HTTP GET request to web.telegram.org. If these methods fail, Telegram’s app and/or web version are likely blocked.

The following table summarizes findings on the testing of Telegram across ISPs from 1st July 2018 to 19th October 2018.

| **ASNs** | **TCP connections** |  **HTTP requests** | **web.telegram.org** |
|---|---|---|---|
| [MTN (AS20294)](https://explorer.ooni.io/measurement/20181018T145458Z_AS20294_sm6hov39iVRNENQDNzNyGGdjU0ISfWE45Ui50b4kIbzfmqxwAM) | OK | OK | OK |
| [Africell (AS36991)](https://explorer.ooni.io/measurement/20181003T051755Z_AS36991_YM3kWShoe2v6jkpk7G0U8WAjpccjlrJJJIdQTz3Hx7MoemVxGR) | OK | Blocked | Blocked |
| [Smile Communications (AS37122)](https://explorer.ooni.io/measurement/20181003T071947Z_AS37122_c4uu9vGJy6hutBVADLdPWqKtfMZJpm7TxdsRx3LkKzQyb45DBF) | OK | OK | OK |
| [Airtel (AS37075)](https://explorer.ooni.io/measurement/20180827T063551Z_AS37075_2cKemyOa7A1cavoCW8dM23F5740jVmr7wyTvkGC6uJr3tBYu7i) | OK | OK | Blocked |
| [Uganda Telecom (AS21491)](https://explorer.ooni.io/measurement/20181019T143316Z_AS21491_FWnSWmZKdmpy2sauPfPdMQnSPXKDUpWQrvyWnwPYQT8tbmBYbe) | OK | OK | Blocked |

Interestingly, MTN does not appear to block Telegram, even though they block access to [WhatsApp](https://explorer.ooni.io/measurement/20181019T000058Z_AS20294_VVDvGKGAGkyCmW3sgI52ooC0LbC7wiqbWhYbgsjnvHE97DNX1O) and [Facebook Messenger](https://explorer.ooni.io/measurement/20181018T145439Z_AS20294_VfqYLM66wjoGa0ncNwyzmeeN8tOqUd0fICtdfJYLNdH6dA7MOt). This is also suggested by Web Connectivity measurements, showing the [accessibility of web.telegram.org](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=https:%2F%2Fweb.telegram.org) on MTN. Africell, on the other hand, appears to block access to both Telegram’s app and web version by resetting connections. The same censorship techniques are also [observed](https://explorer.ooni.io/measurement/20181003T052433Z_AS36991_q5KVbFxFyox4pGiZvUp3KyQH6dCz8fwsUKE6eKTtyzM0S4GhfJ?input=https:%2F%2Fweb.telegram.org) in Web Connectivity measurements for web.telegram.org on that network.

Unsurprisingly (given that Smile [committed to paying the OTT tax](https://observer.ug/news/headlines/58078-smile-telecom-to-pay-social-media-tax-for-customers.html) for their customers), Telegram is accessible on Smile Communications. The Telegram app appears to work on Airtel, but they reset connections to web.telegram.org, potentially censoring access to the website. Similar measurements are observed from Uganda Telecom. It’s worth noting, however, that very few Telegram measurements have been collected from Smile Communications, Airtel and Uganda Telecom during the testing period, limiting confidence in confirming findings from these three networks.

## Blocking of circumvention tools

Some censorship circumvention tools have been [blocked](https://www.mtn.co.ug/en/products/internet/Pages/OTT-Services-.aspx) to prevent untaxed access to social media.

Through the use of OONI’s [Web Connectivity test](/nettest/web-connectivity/), multiple circumvention tool sites included in the [Citizen Lab’s global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) were measured. The analysis was subsequently narrowed to the sites presenting consistent anomalies in these two networks. These measurements were compared with those collected from Uganda Telecom, since most of them show that circumvention tools are accessible.

The following table summarizes findings on the testing of circumvention tool sites.

| **URLs** | **MTN (AS20294)** | **Africell (AS36991)** | **Uganda Telecom (AS21491)** | **Airtel (AS37075)** |
|---|---|---|---|---|
|`https://www.torproject.org`|[HTTP failure](https://explorer.ooni.io/measurement/20181019T165144Z_AS20294_ZApcgXR0NAtaVL8D2UQS0FMOg2F06QsXV4YnzG4h82n1fvmTOP?input=https:%2F%2Fwww.torproject.org%2F)|[Accessible](https://explorer.ooni.io/measurement/20181019T054753Z_AS36991_PxmgbwaEex2kayNcJg293s1lpwfVYO5HmPHSOEbetSSM2Akewk?input=https:%2F%2Fwww.torproject.org)|[Accessible](https://explorer.ooni.io/measurement/20181019T162950Z_AS21491_wUAUikTGaDrHrB9U1wmp7BBucsQlcszhGFfecSgTPosqQ9fqzb?input=https:%2F%2Fwww.torproject.org)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T184042Z_AS0_cdzRaXxgOiC902UgyNgIShGtbszFpdKXbjp6DUrI3SYh34KLHF?input=https:%2F%2Fwww.torproject.org) |
|`https://psiphon.ca`|[Accessible](https://explorer.ooni.io/measurement/20181019T165144Z_AS20294_ZApcgXR0NAtaVL8D2UQS0FMOg2F06QsXV4YnzG4h82n1fvmTOP?input=https:%2F%2Fpsiphon.ca%2F)|[Accessible](https://explorer.ooni.io/measurement/20181019T054753Z_AS36991_PxmgbwaEex2kayNcJg293s1lpwfVYO5HmPHSOEbetSSM2Akewk?input=https:%2F%2Fpsiphon.ca)|[Accessible](https://explorer.ooni.io/measurement/20181019T162950Z_AS21491_wUAUikTGaDrHrB9U1wmp7BBucsQlcszhGFfecSgTPosqQ9fqzb?input=https:%2F%2Fpsiphon.ca)| [Accessible](https://explorer.ooni.io/measurement/20181024T184116Z_AS0_VIu9KzsG4aBfLFS64wFgYn7R9M1u0oXH4Ght14rMW8Wr4Sckwv?input=https:%2F%2Fpsiphon.ca)
|`https://www.tunnelbear.com`|[HTTP failure](https://explorer.ooni.io/measurement/20181001T060743Z_AS20294_YEEN5fRkxOVzEbd70nBnZrHWrbxpVWiM9MkiT7DsN60euzFzKR?input=https:%2F%2Fwww.tunnelbear.com)|[HTTP failure](https://explorer.ooni.io/measurement/20181003T052044Z_AS36991_dZTRywjH00M8cXR7N4c0jMvNrWM8kip5up2lbiaLINPdXvAf2j?input=https:%2F%2Fwww.tunnelbear.com)|[Accessible](https://explorer.ooni.io/measurement/20181019T162950Z_AS21491_wUAUikTGaDrHrB9U1wmp7BBucsQlcszhGFfecSgTPosqQ9fqzb?input=https:%2F%2Fwww.tunnelbear.com)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T144038Z_AS0_bwkjaxb3HDv3SCOQGKoUi2kNl9kD6994JoUAnL9LGTVjvXoLDb?input=https:%2F%2Fwww.tunnelbear.com) |
|`https://www.betternet.co`|[HTTP failure](https://explorer.ooni.io/measurement/20181001T060743Z_AS20294_YEEN5fRkxOVzEbd70nBnZrHWrbxpVWiM9MkiT7DsN60euzFzKR?input=https:%2F%2Fwww.betternet.co)|[HTTP timeout](https://explorer.ooni.io/measurement/20181003T052044Z_AS36991_dZTRywjH00M8cXR7N4c0jMvNrWM8kip5up2lbiaLINPdXvAf2j?input=https:%2F%2Fwww.betternet.co)|[Accessible](https://explorer.ooni.io/measurement/20181019T162950Z_AS21491_wUAUikTGaDrHrB9U1wmp7BBucsQlcszhGFfecSgTPosqQ9fqzb?input=https:%2F%2Fwww.betternet.co)| [HTTP failure](https://explorer.ooni.io/measurement/20181024T142822Z_AS0_jbBewckLkvYz89lDTqSNPFVsNM6ajDCXXmnfcO4IoKFZcxbjSn?input=https:%2F%2Fwww.betternet.co) |
|`https://www.getoutline.org`|[TCP connect error](https://explorer.ooni.io/measurement/20181019T164252Z_AS20294_aljAsvKH9dfSzJFLMeuvcryosETQQqSzaI2z6lIJ0oOL8q8UrY?input=https:%2F%2Fwww.getoutline.org)|[Accessible](https://explorer.ooni.io/measurement/20181019T054753Z_AS36991_PxmgbwaEex2kayNcJg293s1lpwfVYO5HmPHSOEbetSSM2Akewk?input=https:%2F%2Fwww.getoutline.org)|[Accessible](https://explorer.ooni.io/measurement/20181019T162950Z_AS21491_wUAUikTGaDrHrB9U1wmp7BBucsQlcszhGFfecSgTPosqQ9fqzb?input=https:%2F%2Fwww.getoutline.org)| [Accessible](https://explorer.ooni.io/measurement/20181024T144038Z_AS0_bwkjaxb3HDv3SCOQGKoUi2kNl9kD6994JoUAnL9LGTVjvXoLDb?input=https:%2F%2Fwww.getoutline.org) |

MTN appears to block torproject.org, tunnelbear.com and betternet.co by means of HTTP blocking, resetting connections to these sites. Most measurements collected from MTN suggest that it may, instead, block access to getoutline.org by means of TCP/IP blocking. Africell appears to adopt similar techniques (HTTP blocking), but they don’t block access to torproject.org and getoutline.org. It’s worth noting that all of these circumvention tool sites are accessible on Uganda Telecom.

Even though MTN blocks access to torproject.org, the [Tor network](https://www.torproject.org/) appears to be [accessible](https://explorer.ooni.io/measurement/20181019T000101Z_AS20294_DJUQrVIPyQo1P1YueXuFoHzrroRjBPfNmEoZxoVT4CI3RbDDAh) from MTN and various other local vantage points. Most measurements collected from [Airtel](https://explorer.ooni.io/measurement/20180821T161716Z_AS37075_2N9tZ7FsEQGyjuTfcHFDRhto0VdkgdM4Q0ghHoWOOcaJ1vOyIB) and [iWayAfrica](https://explorer.ooni.io/measurement/20181018T110419Z_AS29039_KKs2s7mZGhYyKh1debNvEFDqj7wqrxNc3PL0Bc1N6ybscRFIbZ), for example, also show that OONI’s [Vanilla Tor test](/nettest/vanilla-tor/) is able to successfully bootstrap connections to the Tor network.

The accessibility of the Tor network from Uganda is also suggested by Tor Metrics which [show](https://metrics.torproject.org/userstats-relay-country.html?start=2018-05-01&end=2018-10-19&country=ug&events=off) a huge spike in Tor usage on 1st July 2018, following the rollout of the OTT tax.

![Tor Metrics for Uganda](./userstats-relay-country-ug-2018-05-01-2018-10-19-off.png)

Tor usage gradually declined - possibly as a result of torproject.org being blocked in some networks (limiting the ability to download Tor Browser) - but the fact that there have been subsequent spikes in usage suggests that it has been accessible (at least from some local ASNs).

### VPN blocking

To better understand VPN blocking, a series of experiments were run from an MTN vantage point in Uganda. The goal was to understand if protocol-specific blocking was used or not, if VPN-in-a-box solutions like [Streisand](https://github.com/StreisandEffect/streisand/), [Algo](https://github.com/trailofbits/algo) and [Outline](https://www.getoutline.org/) work or not.

As part of our testing methodology, we deployed a VPN-in-a-box server, connected to it from an MTN vantage point and downloaded a 10-megabyte file from the RFC1918 IP of a VPN server. We found that OpenConnect, OpenVPN/TCP, OpenVPN/UDP, Wireguard work. IPsec and shadowsocks-based Outline also face no problems according to our sources.

However, OpenVPN deployed with *Streisand* uses the `tls-crypt` feature, which has been available since OpenVPN 2.4. `tls-crypt` is used to both authenticate and encrypt *most* metadata available on the wire with a pre-shared key. If the `tls-crypt` feature is disabled completely or replaced with authentication-only `tls-auth`, then attempts to block OpenVPN are clearly observed.

MTN (AS20294) NAT does not preserve the source port, but preserves the [IP ID](https://en.wikipedia.org/wiki/IPv4#Identification) field, which can be used to correlate packets sent from the Raspberry Pi and arriving to the Streisand server. The following Wireshark screenshots show that UDP traffic is blocked as soon as the man-in-the-middle (MITM) sees the initial OpenVPN/UDP handshake packet from the server:

![OpenVPN/UDP, client side](./openvpn-udp-plain-client.png)

The client part of the connection above does not get any reply from the server. The server below does not see any retries coming from the client (IP ID 6184, 6372, 6842, 7058) using the same 5-tuple (combination of the client's and server's IP address, used port and protocol).

![OpenVPN/UDP, server side](./openvpn-udp-plain-server.png)

While OpenVPN/UDP packets are just dropped, a slightly different pattern is observed for OpenVPN/TCP connections: the connections are reset actively in both directions, RTT difference and echoed IP ID of client-side RST packet suggests that it's injected:

![OpenVPN/UDP, client side](./openvpn-tcp-tls-auth-client.png)

The initial `P_CONTROL_HARD_RESET_CLIENT_V2` packet from the client is likely dropped by the middlebox (unlike UDP case), so the server does not receive it at all. The RST packet the server gets has the "usual" TTL and IP ID fields:

![OpenVPN/UDP, server side](./openvpn-tcp-tls-auth-server.png)

Besides `tls-crypt`, there are options to circumvent MTN OpenVPN blocking that are useful when it's hard to upgrade the clients or the server to OpenVPN 2.4. First, [brdgrd](https://github.com/NullHypothesis/brdgrd) can be used to enforce `P_CONTROL_HARD_RESET_CLIENT_V2` packet fragmentation from the server-side. It successfully circumvents the block (note `Win=3` in the SYN-ACK packet coming from the server):

![OpenVPN/TCP + brdgrd, client side](./openvpn-tcp-brdgrd-client.png)

The downside of the `brdgrd` method is that low TCP flow-control window is a network anomaly and this fingerprint may be used to block traffic as well. 

Enforcing client-side TCP segmentation is also possible with a patched OpenVPN client or tooling like [GoodbyeDPI](https://github.com/ValdikSS/GoodbyeDPI) which circumvents the filter (note `Len=2` in the first data packet from the client).

![OpenVPN/TCP + segmentation, client side](./openvpn-tcp-segmentation-client.png)

## Blocking of adult websites

On 6th July 2018, following the rollout of the OTT tax, the Uganda Communications Commission (UCC) instructed all telecom operators and ISPs in Uganda to block a list of adult websites. According to Uganda’s Pornography Control Committee, these sites stream pornographic content in breach of section 13 of the [Anti-Pornography Act (2014](http://chapterfouruganda.com/sites/default/files/downloads/The%20Anti%20Pornography%20Act%202014.pdf)).

![UCC letter banning adult sites](/post/uganda-social-media-tax/ug-porn-ban.jpg)

Adult websites [listed on the UCC letter](https://www.sautitech.com/telecom/full-list-of-porn-sites-banned-in-uganda/) were tested with OONI Probe (as well as several other, internationally popular adult sites included in the Citizen Lab’s [global test list](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)).

The findings reveal that adult websites are blocked in the same way social media and circumvention tool sites are blocked. The same HTTP failures and “connection reset” errors are present in most measurements testing adult websites, similarly to the measurements testing social media and circumvention tool sites. In some cases, Ugandan ISPs may also block adult sites by means of TCP/IP blocking (which was also observed in the testing of social media and circumvention tool sites). The consistency in terms of the types of anomalies identified in measurements across ASNs strongly suggests that most Ugandan ISPs are resetting connections to block access to banned (and OTT taxed) sites.

The analysis, containing all measurements showing the blocking of banned adult sites across ASNs (from 1st July 2018 to 19th October 2018), is available via this [CSV file](/post/uganda-social-media-tax/ug-porn.csv). Even corporate networks on which probes were run - which were formerly completely unfiltered - now block access to the sites banned by Uganda’s Pornography Control Committee. It’s worth noting that Uganda Telecom did not block access to the same adult sites, despite being the state-owned telecom.

# Conclusion

Leading up to the 2016 general elections and during President Museveni’s inauguration, access to social media was [blocked](https://edition.cnn.com/2016/02/18/world/uganda-election-social-media-shutdown/index.html) in Uganda. At the time, OONI [reported](/post/uganda-social-media-blocked/) that Smile Telecom and Orange carried out IP blocking and that Orange only blocked the HTTP version of facebook.com and twitter.com, while Smile blocked both the HTTP and HTTPS versions of facebook.com, twitter.com, whatsapp.com and viber.com.

Circumstances have now changed considerably. In light of the new [OTT tax](https://www.mtn.co.ug/en/products/internet/Pages/OTT-Services-.aspx), most Ugandan ISPs appear to block a number of taxed social media sites, while Smile doesn’t. Instead, they (Smile) have [paid the OTT tax for their customers](https://www.busiweek.com/smile-telecom-to-pay-social-media-tax-for-its-customers/)(for at least three months). Quite similarly, Uganda Telecom [doesn’t appear to block social media](https://explorer.ooni.io/measurement/20181019T142749Z_AS21491_RN1oBmMKAE6xc0X78Plo5CHFTYHJRevjyVX0Gam156G7d7nI44) either. Orange, on the other hand (which has been [acquired by Africell](https://www.newvision.co.ug/new_vision/news/1340873/orange-sells-stake-uganda-africell)), has [blocked](https://explorer.ooni.io/measurement/20181019T055512Z_AS36991_40VaUIgvabrimSPmMSE2dSJjftYHrKREpcPg7boygjEd64gvNJ) a number of social media sites, requiring upfront payment of the OTT tax prior to access.

Social media censorship varies across ASNs, as not all ISPs appear to block the same sites. They are consistent in terms of their censorship techniques, since most ISPs block sites by means of HTTP, resetting connections to taxed sites. The same censorship techniques are also observed in relation to the blocking of adult websites, which are legally banned under section 13 of the [Anti-pornography Act (2014](http://chapterfouruganda.com/sites/default/files/downloads/The%20Anti%20Pornography%20Act%202014.pdf)).

MTN seems to have blocked access to [facebook.com](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=https:%2F%2Fwww.facebook.com), [web.whatsapp.com](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=https:%2F%2Fweb.whatsapp.com), [instagram.com](https://explorer.ooni.io/measurement/20181001T061057Z_AS20294_5QfjAZlWsywwLcATq2mK71PGV3EXP2OpentBhIV0rccUL11uJe?input=https:%2F%2Fwww.instagram.com), [twitter.com](https://explorer.ooni.io/measurement/20180928T120414Z_AS20294_UDAvnGBihX4WslqOJEw4dopAYJz0vMlMDBgAbOUVVbinJz3lnw?input=https:%2F%2Ftwitter.com) and [snapchat.com](https://explorer.ooni.io/measurement/20181001T105931Z_AS20294_BkFsGHeXn61WcnWX8eVm7uCvnNpKPomPZBM277XId3i0qipr6k?input=https:%2F%2Fwww.snapchat.com) by means of TCP/IP blocking, possibly as a result of blocking the applications without distinguishing application traffic from website traffic. The blocking of Snapchat, however, may have resulted in collateral damage, possibly affecting thousands of other sites hosted on the same CDN. But even if this is the case, most MTN users probably won’t experience this collateral damage, since MTN’s proxy circumvents IP-level blocking.

Following the rollout of the OTT tax, various circumvention tools sites were [blocked](http://www.monitor.co.ug/News/National/Government-moves-block-VPN-Ugandans-vow-dodge-social-media-tax/688334-4642176-sjyrvn/index.html) to prevent untaxed access to social media. Some circumvention tool sites were found to be blocked but, similarly to social media sites, their blocking varied across ASNs. In some cases, MTN appears to block access to OpenVPN. It’s worth noting that the Tor network is [accessible](https://explorer.ooni.io/measurement/20181019T081548Z_AS20294_pMrGP7BOIRdkuqqKPr67EFj5nyfGiB8MiSVt9NrGjONjP1iXl5) on MTN, even though MTN seems to [block](https://explorer.ooni.io/measurement/20181019T164252Z_AS20294_aljAsvKH9dfSzJFLMeuvcryosETQQqSzaI2z6lIJ0oOL8q8UrY?input=https:%2F%2Fwww.torproject.org) access to torproject.org. 

Further testing is required to better understand the breadth and depth of internet censorship in Uganda, particularly in light of the new OTT tax. Since this study was carried out through the use of [free and open source software](https://github.com/ooni), [open methodologies](https://ooni.io/docs/) and [open data](https://ooni.io/data/), it can be reproduced and expanded upon. 

# Acknowledgements

We thank all the volunteers in Uganda who have run OONI Probe, making this research possible.
