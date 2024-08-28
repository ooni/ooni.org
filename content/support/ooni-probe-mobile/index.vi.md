---
title: "Cẩm Nang Sử Dụng: Ứng dụng Di động OONI Probe"
description: "Cẩm nang sử dụng Ứng dụng Di động OONI Probe"
---

**Cập nhật lần chót:** 6 tháng Chín 2022

Tài liệu này được dịch sang tiếng Việt bởi Nathan Tran.

**OONI Probe Mobile phiên bản:** 3.7.1

{{<img src="images/image49.png" title="Measure Internet Censorship" alt="Measure Internet Censorship">}}

OONI Probe là một ứng dụng [nguồn mở và miễn phí](https://github.com/ooni/probe) bạn dùng để đo lường kiểm duyệt internet và những hình thái can thiệp mạng khác. Cẩm nang sử dụng này cung cấp **hướng dẫn từng bước một** cách cài đặt, chạy, và tùy chỉnh việc dùng [ứng dụng di động OONI Probe](https://ooni.org/install/mobile). 

**Bạn được biết gì qua cẩm nang này:**

* Biết cách chạy OONI Probe Mobile để:
  * Kiểm tra việc chặn các trang web
  * Kiểm tra việc chặn các ứng dụng nhắn tin tức thời
  * Kiểm tra việc chặn các công cụ vượt thoát
  * Đo tốc độ và hiệu suất của mạng bạn
* Tùy chọn các trang web bạn muốn kiểm tra với OONI Probe
* Biết cách xem và chia sẻ kết quả kiểm tra của OONI Probe
* Cấu hình thiết đặt của ứng dụng OONI Probe

Sau khi xem cẩm nang này, chúng tôi mong bạn cảm thấy thêm năng lực để chia sẻ kiến thức và kỹ năng dùng OONI Probe với người khác!

Mục lục sau đây giúp bạn dùng cẩm nang này.

{{<table-of-contents>}}

## Giới thiệu OONI Probe

OONI Probe là một [phần mềm nguồn mở và miễn phí](https://github.com/ooni/probe) thiết kế để đo lường kiểm duyệt internet và các hình thái can thiệp mạng khác. Từ năm 2012, phần mềm này được phát triển bởi [Đài Quan Sát Mở về Can Thiệp Mạng (OONI)](https://ooni.org/), một đề án phi lợi nhuận thoát thai từ [Đề án Tor](https://www.torproject.org/).

Vơi ứng dụng OONI Probe (có trên nền [đi động](https://ooni.org/install/mobile) và [máy tính](https://ooni.org/install/desktop)), bạn có thể chạy [kiểm tra đo lường mạng](https://ooni.org/nettest/) để kiểm tra những việc sau đây:

* Chặn [trang web](https://ooni.org/nettest/web-connectivity/);
* Chặn các ứng dụng tin nhắn nhanh ([WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/), [Signal](https://ooni.org/nettest/signal));
* Chặn các công cụ vượt thoát ([Tor](https://ooni.org/nettest/tor/), [Tor Snowflake](https://ooni.org/nettest/tor-snowflake/), [Psiphon](https://ooni.org/nettest/psiphon/));
* Các hệ thống ([middleboxes](https://ooni.org/nettest/http-header-field-manipulation/)) có mặt trong mạng của bạn nhằm để kiểm duyệt và/hoặc theo dõi;
* [Tốc độ và hiệu suất](https://ooni.org/nettest/ndt/) của mạng bạn và [hiệu suất của video streaming](https://ooni.org/nettest/dash/).

Khi vừa chạy OONI Probe xong, kết quả kiểm tra được tự động gửi đến máy chủ OONI, [xử lý](https://github.com/ooni/pipeline), và [công bố công khai](https://ooni.org/data/) theo gần thời gian thực (trừ phi bạn chọn không công bố kết quả).

OONI [công bố công khai kết quả kiểm tra của OONI Probe](https://ooni.org/data/) thâu thập trên thế giới để:

* Gia tăng **minh bạch về kiểm duyệt internet** trên thế giới;
* Chia sẻ **bằng chứng kiểm duyệt internet** và các hình thái can thiệp mạng khác;
* Tạo điều kiện **phối kiểm độc lập** đối với các phát hiện kiểm duyệt của OONI;
* Hỗ trợ **nghiên cứu lặp lại được**;
* Hỗ trợ **các nỗ lực nghiên cứu, chính sách, pháp lý, và vận động** trên thế giới;
* Hỗ trợ **tranh luận công cộng** về kiểm soát thông tin.

Để giúp công chúng truy cập được kết quả kiểm tra của OONI Probe (thường được gọi là “đo lường”), đội ngũ OONI giữ kết quả trên [OONI Explorer](https://explorer.ooni.org/vi): một trang web với các biểu đồ dựa trên tầm mức đo lường và công cụ tìm kiếm để xem xét các dữ liệu đo lường.

[OONI Explorer](https://explorer.ooni.org/vi) lưu trữ hơn 850 triệu dữ liệu đo lường mạng thâu thập từ 24,500 mạng trên 241 quốc gia và lãnh thổ từ năm 2012. Đây có lẻ là **nguồn dữ liệu mở lớn nhất toàn cầu về kiểm duyệt internet** từ trước đến nay.

Khi chạy OONI Probe, bạn sẽ:

* Tìm hiểu xem nhà mạng (ISP) có kiểm duyệt hay không và bằng cách nào để chặn truy cập vào một số trang web và ứng dụng;
* Dữ liệu đo lường bạn đóng góp sẽ được lưu trữ công khai, giúp cho cộng đồng chuộng tự do internet toàn cầu giám sát, phát hiện và chống lại kiểm duyệt internet.

Cẩm nang này giúp bạn biết cách dùng [ứng dụng di động OONI Probe](https://ooni.org/install/mobile) để bạn gia nhập vào cộng đồng toàn cầu đo lường kiểm duyệt internet.

### Tuyên bố giới hạn trách nhiệm

Vì OONI Probe dùng để đo lường kiểm duyệt internet, sử dụng nó có thể gây [rủi ro](https://ooni.org/about/risks/) cho một số người ở một số quốc gia.

Một số điều cần lưu ý:

* **OONI Probe không phải là một công cụ bảo vệ riêng tư.** Bất cứ ai giám sát hoạt động internet của bạn (như chính quyền, nhà mạng ISP, chủ công ty) có thể thấy là bạn đang dùng OONI Probe (cũng như họ có thể thấy tất cả những phần mềm khác bạn dùng).
* **OONI Probe là một công cụ điều tra.** Một số kiểm tra của OONI Probe được thiết kế với chủ đích khám phá kiểm duyệt internet.
* **[Mô thức đe dọa của bạn](https://www.eff.org/keeping-your-site-alive/evaluating-your-threat-model)**. Thí dụ như một nhà hoạt động nổi tiếng đang bị theo dõi gắt gao mà cho chạy OONI Probe thì lại càng bị chú ý hơn nữa.
* **Luật lệ và quy định của quốc gia bạn cho chạy OONI Probe ở đó.** Tốt nhất là xin tư vấn từ luật sư bản xứ.
* **Loại trang web gì được kiểm tra.** Bạn có thể kiểm tra các [trang web](https://ooni.org/vi/support/faq/#các-trang-web-nào-sẽ-được-kiểm-tra-xem-có-bị-kiểm-duyệt) bị chính thức cấm đoán (tại một số quốc gia), hoặc mang tính khiêu khích hay bị chống đối.
* **Loại kiểm tra của OONI Probe.** Không phải [kiểm tra nào của OONI Probe](https://ooni.org/nettest/) cũng có cùng trọng lượng rủi ro. Thí dụ như OONI Probe có loại [kiểm tra NDT](https://ooni.org/nettest/ndt/) (thiết kế để đo tốc độ và hiệu suất mạng) có thể được xem là không mang tính chính trị hay gây tranh cãi so với các kiểm tra khác nhằm đo lường việc ngăn chận trang web hoặc ứng dụng.
* **Dầu bạn có hay không công bố các dữ liệu đo lường đi nữa.** OONI cũng [công bố công khai dữ liệu đo lường](https://ooni.org/data/) thâu thập được từ người dùng OONI Probe để gia tăng độ minh bạch của kiểm duyệt internet trên thế giới. Chúng tôi cố gắng không công bố địa chỉ IP hay các thông tin có thể nhận dạng cá nhân của bạn. Tìm hiểu thêm về [Chính sách Dữ liệu](https://ooni.org/about/data-policy).

Để tìm hiểu thêm về các rủi ro tiềm tàng khi dùng OONI Probe, xin đọc [tài liệu này](https://ooni.org/about/risks/).

## Cài đặt OONI Probe Mobile

Ứng dụng di động OONI Probe có trên các hệ [Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe), [F-Droid](https://f-droid.org/repository/browse/?fdid=org.openobservatory.ooniprobe), và [iOS](https://apps.apple.com/us/app/ooni-probe/id1199566366).

Bạn có thể cài đặt ứng dụng di động OONI Probe qua các bước sau:

**Bước 1.** Vào trang cài đặt OONI Probe Mobile (trong trang web OONI): <https://ooni.org/install/mobile> 

{{<img src="images/image49.png" title="Measure Internet Censorship" alt="Measure Internet Censorship">}}

**Bước 2.** Tùy vào hệ điều hành của bạn (Android, iOS, F-Droid), nhấn vào cửa hàng ứng dụng phù hợp.

{{<img src="images/image49.png" title="Install mobile app links" alt="Install mobile app links">}}

**Bước 3.** Cài đặt ứng dụng di động OONI Probe (từ cửa hàng ứng dụng phù hợp).

{{<img src="images/image102.jpg" title="Install mobile app" alt="Install mobile app">}}

**Bước 4.** Mở ứng dụng di động OONI Probe lên.

{{<img src="images/image8.jpg" title="Open OONI Probe mobile app" alt="Open OONI Probe mobile app">}}

### Nhập cuộc: Hiểu & Đồng ý

Sau khi cài đặt và mở ứng dụng OONI Probe lên, bạn sẽ thấy một số thông tin căn bản về OONI Probe là một phần của thủ tục nhập cuộc.

Bạn sẽ tìm hiểu về [các rủi ro tiềm tàng](https://ooni.org/about/risks/) liên quan đến việc chạy OONI Probe. Để bảo đảm bạn nắm vững các rủi ro tiềm tàng này, chúng tôi có một bài đố nhanh để biết là bạn đã hiểu và đồng ý. Trả lời bài đố nhanh cho đúng là điều bắt buộc để sử dụng OONI Probe.

Trong bước chót của thủ tục nhập cuộc, chúng tôi cho biết loại dữ liệu gì được thâu thập mặc định khi chạy OONI Probe (liên kết đến [Chính sách Dữ liệu](https://ooni.org/about/data-policy) để biết thêm chi tiết). Bạn có thể chọn đồng ý chia sẻ báo cáo sự cố hỏng và các thông số sử dụng của ứng dụng để giúp chúng tôi cải thiện OONI Probe.

Chúng tôi sẽ dẫn dắt bạn qua thủ tục nhập cuộc

**Bước 1.** Sau khi bạn đọc xong các thông tin căn bản về OONI Probe, bấm vào **Hiểu rồi**.

{{<img src="images/image5.jpg" title="Got it" alt="Got it">}}

**Bước 2.** Màn hình kế tiếp tóm tắt những rủi ro tiềm tàng liên quan đến việc sử dụng OONI Probe. Bấm vào **Tìm hiểu thêm** để đọc [tài liệu](https://ooni.org/about/risks/) giải thích các rủi ro tiềm tàng.

{{<img src="images/image26.jpg" title="Tap learn more" alt="Tap learn more">}}

**Bước 3.** Sau khi bạn tìm hiểu về các rủi ro tiềm tàng liên quan đến việc sử dụng OONI Probe, bấm vào **Tôi hiểu**.

{{<img src="images/image96.jpg" title="I understand" alt="I understand">}}

**Bước 4.** Đố nhanh sau đây dựa vào thông tin bạn vừa đọc qua. Bấm vào **Đúng** để chứng minh bạn hiểu câu này.

{{<img src="images/image115.jpg" title="Quiz step 1" alt="Quiz step 1">}}

Bạn thấy **Đúng** là câu trả lời đúng. Nếu bạn bấm vào Sai, sẽ có giải thích tại sao sai.

{{<img src="images/image83.jpg" title="Correct quiz" alt="Correct quiz">}}

**Bước 5.** Bấm vào **Đúng** để chứng minh bạn hiểu câu này (trong phần thứ nhì của đố nhanh).

{{<img src="images/image104.jpg" title="Quiz step 2" alt="Quiz step 2">}}

Bạn thấy **Đúng** là câu trả lời đúng. Nếu bạn bấm vào Sai, sẽ có giải thích tại sao sai.

{{<img src="images/image83.jpg" title="Quiz correct" alt="Quiz correct">}}

**Bước 6.** Nếu bạn muốn ứng dụng thâu thập đo lường tự động, nhấn vào nút **Rất tốt**.

{{<img src="images/image118.jpg" title="Automatic measurements" alt="Automatic measurements">}}

**Bước 7.** Nếu bạn muốn chia sẻ [báo cáo sự cố hỏng](https://ooni.org/about/data-policy#data-we-collect) để giúp chúng tôi cải thiện OONI Probe, nhấn **Có**.

{{<img src="images/image119.jpg" title="Crash reports" alt="Crash reports">}}

**Bước 8.** Màn hình sau đây cho biết loại dữ liệu gì OONI thâu thập và công bố mặc định (mỗi khi bạn chạy OONI Probe). Bạn nhấn vào **[Chính sách Dữ liệu của OONI](https://ooni.org/about/data-policy)** để tìm hiểu thêm.

{{<img src="images/image24.jpg" title="Onboarding default settings" alt="Onboarding default settings">}}

**Bước 9.** Nhấn **OK**.

Bạn đã hoàn tất thủ tục nhập cuộc và sẵn sàng để sử dụng OONI Probe!

## Chạy OONI Probe Mobile

Bây giờ đã hoàn tất thủ tục nhập cuộc, bạn có thể bắt đầu dùng OONI Probe để đo lường kiểm duyệt internet!

**Bảng tóm tắt** của ứng dụng di động OONI Probe có 5 thẻ, mỗi thẻ chạy một số kiểm tra của OONI Probe:

* **Thẻ Trang web** Bao gồm [Kiểm tra Kết Nối Web](https://ooni.org/nettest/web-connectivity/) để đo lường việc [chặn các trang web](https://ooni.org/vi/support/faq/#các-trang-web-nào-sẽ-được-kiểm-tra-xem-có-bị-kiểm-duyệt).
* **Thẻ Tin Nhắn Nhanh** Bao gồm các bài kiểm tra của OONI xem các ứng dụng  [WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/), và [Signal](https://ooni.org/nettest/signal) có bị chặn không.
* **Thẻ Vượt Thoát.** Bao gồm các kiểm tra của OONI xem công cụ vượt thoát kiểm duyệt  [Tor](https://ooni.org/nettest/tor/) và [Psiphon](https://ooni.org/nettest/psiphon/) có bị chặn không.
* **Thẻ Hiệu suất.** Bao gồm [Kiểm tra tốc độ NDT](https://ooni.org/nettest/ndt/), [kiểm tra hiệu suất DASH video streaming](https://ooni.org/nettest/dash/), và [kiểm tra middlebox](https://ooni.org/support/glossary/#middlebox), ([HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/) và [HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/) ).
* **Thẻ Thử Nghiệm.** Bao gồm một số kiểm tra thử nghiệm mới do đội ngũ OONI soạn thảo. Các kiểm tra này có thể thay đổi theo thời gian. Bạn xem các kiểm tra này [nơi đây](https://github.com/ooni/spec/tree/master/nettests).

**Bước 1.** Bấm nút **Chạy** để chạy kiểm tra đầu tiên của OONI Probe.

{{<img src="images/image25.jpg" title="Dashboard main screen" alt="Dashboard main screen">}}

Một khi bạn nhấn "Chạy" OONI Probe sẽ khởi động cho chạy **tất cả kiểm tra** (bao gồm trong mọi thẻ) cùng một lúc!

{{<img src="images/image120.jpg" title="Launched tests" alt="Launched tests">}}

Nếu bạn nhấn vào hàng **Đang chạy: ...** thì ứng dụng sẽ hiển thị **kiểm tra đang chạy** trên trọn màn hình: 

{{<img src="images/image121.jpg" title="Open ongoing tests" alt="Open ongoing tests">}}

{{<img src="images/image37.jpg" title="Running websites" alt="Running websites">}}

{{<img src="images/image58.jpg" title="Running IM" alt="Running IM">}}

{{<img src="images/image32.jpg" title="Running circumvention" alt="Running circumvention">}}

{{<img src="images/image12.jpg" title="Running performance" alt="Running performance">}}

OONI Probe chạy hết các kiểm tra trong vòng vài phút (cũng tùy vào hiệu suất mạng đang nối kết, và có thể chạy lâu hơn). Nếu hiệu suất mạng không được tốt và kiểm tra kéo dài quá, bạn có thể **ngưng kiểm tra đang chạy** bằng cách bấm vào nút **Dừng kiểm tra**.

{{<img src="images/image122.jpg" title="Stop test" alt="Stop test">}}

Sau khi kiểm tra chạy xong, kết quả kiểm tra của OONI Probe sẽ được tự động công bố trên [OONI Explorer](https://explorer.ooni.org/vi) và trên [OONI API](https://api.ooni.io/).

Bạn muốn giới hạn việc kiểm tra vào một số loại kiểm tra (thẻ) đặc trưng? Trong mục kế tiếp đây, chúng tôi sẽ chỉ cách làm.

### Đo lường việc chặn trang web

Nếu chỉ muốn đo lường việc chặn trang web, hãy theo các bước sau đây:

**Bước 1.** Bấm vào thẻ **Trang web** trong Bảng tóm tắt của OONI Probe Mobile.

{{<img src="images/image51.jpg" title="Tap websites" alt="Tap websites">}}

**Bước 2.** Bấm vào **Chạy** trong thẻ Trang Web.

{{<img src="images/image99.jpg" title="Websites card details" alt="Websites card details">}}

Bây giờ bạn đang chạy [Kiểm tra Kết Nối Web](https://ooni.org/nettest/web-connectivity/) của OONI để đo lường việc chặn trang web.

{{<img src="images/image37.jpg" title="Running websites" alt="Running websites">}}

Kết quả kiểm tra của OONI Probe sẽ được tự động công bố trên [OONI Explorer](https://explorer.ooni.org/vi) và trên [OONI API](https://api.ooni.io/).

**Trang web nào được kiểm tra?**

Theo mặc định, bạn sẽ kiểm tra các trang web trong 2 danh sách sau đây:

* **[Danh sách kiểm tra toàn cầu](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv)**. Bao gồm các trang web quốc tế quan trọng (như facebook.com).
* **[Danh sách kiểm tra quốc gia riêng biệt](https://github.com/citizenlab/test-lists/tree/master/lists)**. Bao gồm các trang web riêng biệt cho quốc gia mà bạn đang chạy OONI Probe ở nơi đó.

Bất kể bạn đang chạy OONI Probe từ quốc gia nào, bạn sẽ *luôn* kiểm tra các trang trong [danh sách kiểm tra toàn cầu](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv).

OONI Probe sẽ tự động xác định [danh sách quốc gia riêng biệt](https://github.com/citizenlab/test-lists/tree/master/lists) nào sẽ được kiểm tra dựa vào quốc gia bạn đang có mặt và chạy OONI Probe từ nơi đó. Lấy thí dụ, nếu bạn cho chạy OONI Probe ở Brazil, bạn sẽ kiểm tra các trang web từ danh sách toàn cầu và từ danh sách kiểm tra của Brazilian. Nếu bạn du lịch đến Đức và chạy OONI Probe, bạn sẽ kiểm tra các trang web từ danh sách toàn cầu và danh sách của Đức. Nhưng nếu bạn chạy OONI Probe từ một nơi mà chưa có danh sách kiểm tra của nước đó (vì chưa được lập ra), bạn chỉ kiểm tra các trang web từ danh sách toàn cầu.

Nếu bạn muốn đóng góp vào [danh sách kiểm tra của Citizen Lab](https://github.com/citizenlab/test-lists/tree/master/lists) (bao gồm các trang web mặc định được kiểm tra bởi người dùng khắp nơi trên thế giới), xin đọc thêm trong [tài liệu](https://ooni.org/get-involved/contribute-test-lists) hoặc dùng [Trình Biên Tập Danh Sách Kiểm Tra](https://test-lists.ooni.org/).

**Ghi chú:** Để tránh dùng hết dữ liệu di động của bạn, **OONI Probe chỉ kiểm tra một số trang web nội trong vòng 90 giây** khi bạn nhấn “Chạy” (hoặc từ Bảng tóm tắt hoặc từ thẻ Trang web). Các trang web này (kiểm tra trong vòng 90 giây) được chọn ngẫu nhiên từ danh sách [toàn cầu](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) và danh sách [quốc gia riêng biệt](https://github.com/citizenlab/test-lists/tree/master/lists)(thích hợp). Mỗi lần nhấn “Chạy”, bạn sẽ kiểm tra một số trang web khác, được chọn ngẫu nhiên (từ danh sách toàn cầu và quốc gia riêng biệt) trong vòng 90 giây. Do đó, càng nhấn “Chạy” nhiều lần, càng có nhiều trang web được kiểm tra.

Nếu bạn muốn kiểm tra nhiều trang web hơn nữa, hoặc kiểm tra các trang web khác, xin đọc phần **Tùy chỉnh kiểm tra trang web** trong cẩm nang này.

### Đo lường việc chặn các ứng dụng tin nhắn nhanh

Nếu chỉ muốn đo lường việc chặn các ứng dụng tin nhắn nhanh, bạn theo các bước sau đây:

**Bước 1.** Bấm vào thẻ **Tin Nhắn Nhanh** trong Bảng tóm tắt của OONI Probe Mobile.

{{<img src="images/image85.jpg" title="Tap IM card" alt="Tap IM card">}}

**Bước 2.** Bấm **Chạy** trong thẻ Tin Nhắn Nhanh.

{{<img src="images/image40.jpg" title="IM Card details" alt="IM Card details">}}

Bây giờ bạn đang chạy kiểm tra của OONI để xem các ứng dụng tin nhắn nhanh [WhatsApp](https://ooni.org/nettest/whatsapp/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), [Telegram](https://ooni.org/nettest/telegram/), và [Signal](https://ooni.org/nettest/signal) có bị chặn không.

{{<img src="images/image58.jpg" title="Running IM" alt="Running IM">}}

Kết quả kiểm tra của OONI Probe sẽ được tự động công bố trên [OONI Explorer](https://explorer.ooni.org/vi) và trên [OONI API](https://api.ooni.io/).

Nếu bạn muốn giới hạn kiểm tra cho WhatsApp, Facebook Messenger, Telegram, hoặc Signal thôi, xin tham khảo phần **Cấu hình Thiết đặt của OONI Probe** trong cẩm nang này 

### Đo lường việc chặn các công cụ vượt thoát kiểm duyệt

Nếu chỉ muốn đo lường việc chặn các công cụ vượt thoát kiểm duyệt, bạn theo các bước sau đây:

**Bước 1.** Bấm vào thẻ **Vượt thoát kiểm duyệt** trong Bảng tóm tắt của OONI Probe Mobile.

{{<img src="images/image3.jpg" title="Tap circumvention" alt="Tap circumvention">}}

**Bước 2.** Bấm vào **Chạy** trong thẻ Vượt thoát kiểm duyệt.

{{<img src="images/image90.jpg" title="Circumvention card details" alt="Circumvention card details">}}

Bây giờ bạn đang chạy kiểm tra của OONI để xem các công cụ vượt thoát kiểm duyệt [Tor](https://ooni.org/nettest/tor/) và [Psiphon](https://ooni.org/nettest/psiphon/) có bị chặn không.

{{<img src="images/image32.jpg" title="Running circumvention" alt="Running circumvention">}}

Kết quả kiểm tra của OONI Probe sẽ được tự động công bố trên [OONI Explorer](https://explorer.ooni.org/vi) và trên [OONI API](https://api.ooni.io/).

Nếu bạn muốn giới hạn kiểm tra cho Tor hay Psiphon thôi, xin tham khảo phần **Cấu hình Thiết đặt của OONI Probe** trong cẩm nang này 

### Đo lường hiệu suất mạng

Nếu chỉ muốn đo lường hiệu suất mạng, bạn theo các bước sau đây:

**Bước 1.** Bấm vào thẻ **Hiệu suất** trong Bảng tóm tắt của OONI Probe Mobile.

{{<img src="images/image65.jpg" title="Tap performance" alt="Tap performance">}}

**Bước 2.** Bấm vào **Chạy** trong thẻ Hiệu suất.

{{<img src="images/image27.jpg" title="Performance card details" alt="Performance card details">}}

Bây giờ bạn đang chạy [kiểm tra tốc độ NDT](https://ooni.org/nettest/ndt/),  [kiểm tra hiệu suất DASH video streaming](https://ooni.org/nettest/dash/), và kiểm tra [middlebox](https://ooni.org/support/glossary/#middlebox)  ([HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/)  và [HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/) ).

{{<img src="images/image12.jpg" title="Running performance" alt="Running performance">}}

Kết quả kiểm tra của OONI Probe sẽ được tự động công bố trên [OONI Explorer](https://explorer.ooni.org/vi) và trên [OONI API](https://api.ooni.io/).

**Tuyên bố giới hạn trách nhiệm:** Kiểm tra [NDT](https://ooni.org/nettest/ndt/) và [DASH](https://ooni.org/nettest/dash/) được tiến hành trên máy chủ bên thứ ba do [Measurement Lab (M-Lab)](https://www.measurementlab.net/) cung cấp. Nếu chạy các kiểm tra này, M-Lab sẽ thâu thập và công bố địa chỉ IP của bạn cho mục đích nghiên cứu, bất kể thiết đặt OONI Probe ra sao. Tìm hiểu thêm về cách quản lý dữ liệu của M-Lab nơi đây [tuyên bố về quyền riêng tư](https://www.measurementlab.net/privacy/).  

Nếu bạn muốn giới hạn kiểm tra trong vòng một (hay vài) kiểm tra trong thẻ Hiệu suất thôi, xin tham khảo phần **Cấu hình Thiết đặt của OONI Probe** trong cẩm nang này 


## Tùy chỉnh kiểm tra trang web

Theo mặc định, khi kiểm tra trang web với OONI Probe, bạn đo lường các URL có trong [danh sách kiểm tra của Citizen Lab](https://github.com/citizenlab/test-lists/tree/master/lists). Nói cách khác, khi bạn bấm “Chạy” (trong Bảng tóm tắt hoặc thẻ Trang web của ứng dụng OONI Probe), bạn sẽ kiểm tra một số trang web ngẫu nhiên từ [danh sách kiểm tra của Citizen Lab](https://github.com/citizenlab/test-lists/tree/master/lists). Danh sách này được soạn thảo qua sự hợp tác của các chuyên gia và nghiên cứu gia tại mỗi quốc gia. Vì danh sách này [có công khai trên GitHub](https://github.com/citizenlab/test-lists/tree/master/lists), bất cứ ai cũng có thể duyệt xét, [đóng góp](https://ooni.org/get-involved/contribute-test-lists) URLs, và đề nghị xóa URL nào đó. Điều quan trọng là chúng tôi thường xuyên [duyệt xét và cập nhật](https://ooni.org/get-involved/contribute-test-lists) các danh sách này, vì chúng gồm có các trang web được người dùng OONI Pobe trên thế giới thường xuyên kiểm tra.

Nhưng nếu bạn muốn giới hạn việc kiểm tra vào một số trang web bạn chọn, OONI Probe Mobile cho phép làm việc đó.

Bạn có thể tùy chỉnh kiểm tra trang web bằng cách sau đây:

* Giới hạn việc kiểm tra vào các **thể loại trang web riêng biệt** (như truyền thông tin tức và nội dung nhân quyền);
* Chỉ kiểm tra **trang web bạn quan tâm**;
* Kiểm tra **danh sách của bạn**;
* Kiểm tra *tất cả* URLs trong [danh sách của Citizen Lab](https://github.com/citizenlab/test-lists/tree/master/lists) ([thích hợp](https://ooni.org/vi/support/faq/#các-trang-web-nào-sẽ-được-kiểm-tra-xem-có-bị-kiểm-duyệt)) (hơn là kiểm tra các trang chọn ngẫu nhiên trong vòng 90 giây);

Mục sau đây sẽ giải thích cách làm cho từng điều trên.

### Kiểm tra các thể loại trang web riêng biệt

Khi bấm “Chạy” trong OONI Probe, bạn kiểm tra các trang web từ danh sách [toàn cầu](https://github.com/citizenlab/test-lists/blob/master/lists/global.csv) và [danh sách quốc gia riêng biệt của Citizen Lab](https://github.com/citizenlab/test-lists/tree/master/lists)  ([thích hợp](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)) 

Các trang web này đã được phân loại dựa vào  [30 thể loại chuẩn](https://ooni.org/get-involved/contribute-test-lists/#what-are-test-lists). Các thể loại này bao gồm từ truyền thông tin tức, văn hóa, nhân quyền cho đến các thể loại khiêu khích hoặc bị chống đối, như nội dung khiêu dâm (những loại này được đưa vào vì chúng có nhiều xác suất bị chặn, do đó giúp phát hiện được kỹ thuật kiểm duyệt của nhà mạng).

Theo mặc định, tất cả 30 thể loại được chọn trong OONI Probe Mobile nhằm khuyến khích việc kiểm tra đa dạng, làm tăng xác suất khám phá ra các hình thức kiểm duyệt khác.

Nếu bạn không thấy yên tâm để kiểm tra tất cả 30 thể loại trang web (nhất là khi chúng bao gồm nội dung phi pháp, khiêu khích, hoặc bị chống đối tại quốc gia bạn), hoặc bạn chỉ quan tâm đến việc kiểm tra một loại nội dung nào đó (như truyền thông tin tức), bạn có thể giới hạn việc kiểm tra vào các thể loại trang web bạn chọn. 

**Bước 1.** Bấm vào **Thiết đặt** trong thanh điều hướng bên dưới của OONI Probe.

{{<img src="images/image63.jpg" title="App settings" alt="App settings">}}

**Bước 2.** Nhấn vào **Tùy chọn kiểm tra** trong thiết đặt.

{{<img src="images/image2.jpg" title="Tap test options" alt="Tap test options">}}

**Bước 3.** Nhấn vào **Trang web** (trong thiết đặt “Tùy chọn kiểm tra”).

{{<img src="images/image61.jpg" title="Tap websites" alt="Tap websites">}}

**Bước 4.** Nhấn vào **Thể loại web để kiểm tra** (trong phần “Trang web”  của thiết đặt “Tùy chọn kiểm tra”).

{{<img src="images/image98.jpg" title="Tap website categories" alt="Tap website categories">}}

Bạn sẽ thấy [30 thể loại](https://github.com/citizenlab/test-lists/blob/master/lists/00-LEGEND-new_category_codes.csv) trang web mà OONI Probe sẽ kiểm tra mặc định. Tất cả thể loại này được chọn.

{{<img src="images/image78.jpg" title="Website categories" alt="Website categories">}}

**Bước 5.** **Tắt** thể loại trang web mà bạn **không** muốn kiểm tra.

{{<img src="images/image75.jpg" title="Disable options" alt="Disable options">}}

Trong thí dụ trên, chúng tôi tắt 5 thể loại (“LGBTQI”, “Phê bình Chính trị”, “Nội dung khiêu dâm” và “Trang phục khêu gợi”, “Tôn giáo”).

Khi bạn quay lại, sẽ thấy chỉ còn có 25 thể loại được chọn (vì 5 cái bị tắt).

{{<img src="images/image48.jpg" title="Categories enabled" alt="Categories enabled">}}

Bạn vào phần thiết đặt này bất cứ lúc nào để tắt hay mở lên thể loại trang web bạn muốn kiểm tra.

### Kiểm tra trang web bạn muốn

Bạn có thể kiểm tra trực tiếp trang web bạn quan tâm bằng cách sau đây:

**Bước 1.** Bấm vào thẻ **Trang web** trong OONI Probe Mobile.

{{<img src="images/image51.jpg" title="Tap websites card" alt="Tap websites card">}}

**Bước 2.** Bấm vào nút **Chọn trang web** bên trong thẻ Trang web

{{<img src="images/image116.jpg" title="Choose websites" alt="Choose websites">}}

Bạn sẽ thấy màn hình nơi bạn có thể thêm trang web nào muốn kiểm tra.

{{<img src="images/image86.jpg" title="Choose websites empty" alt="Choose websites empty">}}

**Bước 3.** **Điền vào đường dẫn URL** của trang web bạn muốn kiểm tra. Trong thí dụ sau đây, chúng tôi gõ vào `https://www.facebook.com`. 

{{<img src="images/image73.jpg" title="Choose websites facebook.com" alt="Choose websites facebook.com">}}

**Quan trọng:** Bạn cố gắng điền vào [URL](https://ooni.org/support/glossary/#url) cho đúng. Nếu đánh sai, OONI Probe sẽ *không* kiểm tra trang đó được và dẫn đến kết quả kiểm tra không chính xác.

Một vài điều cần lưu ý:

* Trang web dùng giao thức **HTTP** or **HTTPS**? Nếu là loại thứ nhì, nhớ thêm `s` vào phía sau `http`.
* [Tên miền](https://ooni.org/support/glossary/#domain-name) có `www` hay không? Nếu có, nhớ ghi vào.

Để bảo đảm đường dẫn [URL](https://ooni.org/support/glossary/#url) điền vào đúng, **xin xem đường dẫn đó trông như thế nào khi truy cập dùng trình duyệt bình thường**.

**Bước 4.** Bấm vào dấu cộng để tạo ra một hàng mới để thêm một trang web vào.

**Bước 5.** **Điền vào đường dẫn URL** bạn muốn kiểm tra. Trong thí dụ sau đây, chúng tôi thêm `https://twitter.com`. 

{{<img src="images/image54.jpg" title="Add website" alt="Add website">}}

Nếu bạn đổi ý và muốn lấy ra đường dẫn URL nào đã thêm vào, chỉ cần bấm vào biểu tượng màu đỏ bên cạnh mỗi URL.

Bạn có thể thêm bao nhiêu đường dẫn URL cũng được. Trong thí dụ sau đây, chúng tôi thêm `https://www.gutenberg.org`. 

{{<img src="images/image9.jpg" title="add url twitter.com" alt="add url twitter.com">}}

**Bước 6.** Bấm vào **Chạy** để kiểm tra tất cả các trang web bạn vừa thêm vào.

Bạn sẽ thấy OONI Probe kiểm tra các trang web bạn muốn!

{{<img src="images/image72.jpg" title="Testing custom sites" alt="Testing custom sites">}}

Kết quả kiểm tra của OONI Probe sẽ được tự động công bố trên [OONI Explorer](https://explorer.ooni.org/vi) và trên [OONI API](https://api.ooni.io/).

### Kiểm tra danh sách trang web tùy chọn

Thêm vào từng URL một (dùng nút “Chọn trang web” trong OONI Probe Mobile) có thể mệt nhọc -- nhất là có hơn một chục URL. Các nghiên cứu gia thường dùng danh sách trang web riêng của họ, có thể dài tới cả trăm trang web.

Bạn có thể kiểm tra danh sách trang web của riêng bạn bằng cách sau đây:

**Bước 1.** Soạn danh sách trang web trong một trình biên tập, để mỗi một URL trên một hàng riêng. Dưới đây là một thí dụ:

{{<img src="images/image69.png" title="Text editor custom URLs" alt="Text editor custom URLs">}}

**Quan trọng:** Bạn cố gắng điền vào [URL](https://ooni.org/support/glossary/#url) cho đúng. Nếu đánh sai, OONI Probe sẽ *không* kiểm tra trang đó được và dẫn đến kết quả kiểm tra không chính xác.

Một vài điều cần lưu ý:

* Trang web dùng giao thức **HTTP** or **HTTPS**? Nếu là loại thứ nhì, nhớ thêm `s` vào phía sau `http`.
* [Tên miền](https://ooni.org/support/glossary/#domain-name) có `www` hay không? Nếu có, nhớ ghi vào.
* Nếu trang web dùng giao thức HTTPS (ví dụ như `https://www.hrw.org/`), bạn không cần ghi rõ tên trang (ví dụ như `https://www.hrw.org/publications`), vì nhà mạng không thể chặn một trang riêng biệt khi trang web đó dùng HTTPS. Thay vào đó, họ chặn nguyên trang web.

Để bảo đảm đường dẫn [URL](https://ooni.org/support/glossary/#url) điền vào đúng, **xin sao chép từ trình duyệt**.

**Bước 2.** **Sao chép** danh sách URL của bạn (từ trình biên tập).

**Bước 3.** Vào trang **OONI Run**: https://run.ooni.org/

{{<img src="images/image-ooni-run.png" title="OONI Run landing page" alt="OONI Run landing page">}}

**Bước 4.** **Chọn** `http://` trong hàng URL đầu tiên của trang OONI Run (để tránh có `http` hai lần trong định dạng của URL đầu tiên).

{{<img src="images/image50.png" title="Select URL OONI Run" alt="Select URL OONI Run">}}

**Bước 5.** **Dán** danh sách URL của bạn vào hàng URL đầu tiên trong trang OONI Run.

Bây giờ bạn sẽ thấy tất cả URL hiển thị từng hàng một trong trang [OONI Run](https://run.ooni.org/.

{{<img src="images/image77.png" title="OONI Run custom list" alt="OONI Run custom list">}}

Nếu bạn thấy có hàng trống (hoặc URL có dạng thức sai), hãy xóa đi bằng cách bấm vào **biểu tượng xóa** - hình thùng rác.

{{<img src="images/image67.png" title="Empty rows" alt="Empty rows">}}

**Bước 6.** Bấm vào nút **Tạo ra** ở cuối danh sách.

{{<img src="images/image13.png" title="Click generate" alt="Click generate">}}

Bạn sẽ thấy một khung cửa xuất hiện sau đây.

{{<img src="images/image55.png" title="OONI Run popup window" alt="OONI Run popup window">}}

Bạn đã vừa tạo ra một **liên kết di động của OONI Run** để kiểm tra danh sách trang web của bạn.

**Bước 7.** **Sao chép** đường liên kết vừa tạo ra bằng cách:

* Bấm vào liên kết bên dưới “**Chia sẻ URL với bạn bè**”, nhấn Control + A để chọn nguyên liên kết, rồi sau đó nhấn Control + C để sao chép; hoặc
* Bấm chuột phải vào **nút Liên kết** và chọn “Sao chép địa chỉ liên kết”.

{{<img src="images/image30.png" title="Copy OONI Run link" alt="Copy OONI Run link">}}

**Bước 8.** có lẻ bạn thực hiện những bước này từ máy tính để bàn, **chia sẻ liên kiết đã sao chép** **với điện thoại di động của bạn** (để sau đó bạn có thể mở liên kết lên qua ứng dụng di động OONI Probe). Bạn cũng có thể chia sẻ liên kết này với những người dùng OONI Probe khác, nếu bạn muốn họ kiểm tra danh sách trang web của bạn.

**Bước 9.** **Nhấn** vào đường liên kế OONI Run từ thiết bị di động của bạn.

{{<img src="images/image100.jpg" title="OONI Run link" alt="OONI Run link">}}

**Bước 10.** **Mở** liên kết ra với **ứng dụng di động OONI Probe** (đừng dùng trình duyệt).

{{<img src="images/image113.jpg" title="Open with OONI Probe" alt="Open with OONI Probe">}}

Bạn sẽ thấy danh sách trang web của bạn trong ứng dụng di động OONI Probe.

{{<img src="images/image56.jpg" title="OONI Run page mobile" alt="OONI Run page mobile">}}

**Bước 11.** Nhấn **Chạy** để kiểm tra danh sách trang web của bạn.

{{<img src="images/image31.jpg" title="Running OONI Run" alt="Running OONI Run">}}

Kết quả kiểm tra của OONI Probe sẽ được tự động công bố trên [OONI Explorer](https://explorer.ooni.org/vi) và trên [OONI API](https://api.ooni.io/).

### Kiểm tất cả trang web từ danh sách kiểm tra của Citizen Lab

Vì giới hạn của băng thông, ứng dụng di động OONI Probe chỉ kiểm tra được một số trang web trong vòng 90 giây (đây là thiết đặt mặc định).

Nếu bạn kết nối vào WiFi và muốn kiểm tra **toàn bộ trang web** từ [danh sách kiểm tra của Citizen Lab](https://github.com/citizenlab/test-lists/tree/master/lists) ([thích hợp](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)) trong cùng một lúc, xin theo các bước sau:

**Bước 1.** Nhấn vào **Thiết đặt** trong thanh điều hướng bên dưới của OONI Probe.

{{<img src="images/image63.jpg" title="Settings page" alt="Settings page">}}

**Bước 2.** Nhấn vào **Tùy chọn kiểm tra** trong phần thiết đặt.

{{<img src="images/image2.jpg" title="Test options" alt="Test options">}}

**Bước 3.** Nhấn vào **Trang web** (trong phần thiết đặt “Tùy chọn kiểm tra”).

{{<img src="images/image61.jpg" title="Websites option" alt="Websites option">}}

Bạn sẽ thấy phần thiết đặt trang web của OONI Probe 

{{<img src="images/image68.jpg" title="OONI Probe website settings" alt="OONI Probe website settings">}}

**Bước 4.** Tắt **Giới hạn thời lượng kiểm tra** (trong phần “Trang web” của thiết đặt “Tùy chọn kiểm tra”).

{{<img src="images/image81.jpg" title="Disable limit test duration" alt="Disable limit test duration">}}

Bây giờ không còn bị giới hạn thời lượng kiểm tra nữa. Điều này có nghĩa là OONI Probe có thể kiểm tra hết tất cả các trang web trong [danh sách kiểm tra thích hợp của Citizen Lab](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe) mỗi khi bạn bấm nút “Chạy”. 

**Chọn lựa khác**: Nếu bạn muốn kiểm tra thêm các trang web trong thời lượng dài hơn (nhưng không nhất thiết phải tắt tùy chọn giới hạn thời lượng và kiểm tra toàn bộ trang web), bạn theo các bước sau:

**Bước 1.** Nhấn vào **Thời lượng kiểm tra** (trong phần “Trang web” của thiết đặt “Tùy chọn Kiểm tra”).

{{<img src="images/image1.jpg" title="Test duration setting" alt="Test duration setting">}}

Theo mặc định, thời lượng kiểm tra là **90 giây**. Có nghĩa là OONI Probe chỉ kiểm tra được một số trang web (từ [danh sách kiểm tra xác đáng của Citizen Lab](https://ooni.org/support/faq/#which-websites-will-i-test-for-censorship-with-ooni-probe)) nội trong vòng 90 giây.

**Bước 2.** Để đổi thời lượng kiểm tra, **điền vào số giây** bạn muốn OONI Probe chạy. Trong thí dụ sau đây, chúng tôi điền vào `360` có nghĩa là OONI Probe sẽ chạy kiểm tra trong vòng 6 phút.

{{<img src="images/image53.jpg" title="Test duration custom seconds" alt="Test duration custom seconds">}}

## Xem kết quả kiểm tra của OONI Probe

Vừa chạy xong kiểm tra của OONI Probe, bạn có thể xem liền kết quả trực tiếp trong ứng dụng OONI Probe Mobile.

**Bước 1.** Bấm vào **Kết quả kiểm tra** trong thanh điều hướng bên dưới của OONI Probe Mobile.

{{<img src="images/new-test-results.jpg" title="Test results page" alt="Test results page">}}

Bạn sẽ thấy tổng quan của tất cả kết quả kiểm tra của OONI Probe.

Trong phần tổng quan, kết quả kiểm tra được nhóm lại dựa theo 4 thẻ chủ đề của ứng dụng (“Trang web”, “Tin Nhắn Nhanh”, “Vượt thoát kiểm duyệt”, “Hiệu suất”).

Trong mỗi thẻ chủ đề của kết quả kiểm tra, bạn có một tổng quan của:

* **Mạng** (ví dụ `AS16010` - Magticom Ltd.) mà mỗi kiểm tra chạy trong đó;
* **Ngày giờ** kiểm tra (ví dụ như 22 tháng Tám, 2022 lúc 12:01 giờ địa phương);
* **Tóm tắt những điều tìm thấy** (ví dụ như 3 ứng dụng tin nhắn nhanh truy cập được, không có ứng dụng nào bị chặn).

Tổng quan này có thể hữu ích để so sánh với kết quả xuyên mạng (nếu bạn kiểm tra trên nhiều mạng khác nhau), và cho một cái nhìn tổng quát của những điều tìm thấy.

Để đào sâu hơn (và xem dữ liệu đo lường thích hợp), bạn nhấn vào mỗi kết quả kiểm tra, mà chúng tôi sẽ giải thích trong các mục sau đây.

**Xóa kết quả kiểm tra**

Trong menu trên cùng (của trang Kết quả Kiểm tra), có tổng quan của:

* **Số lượng kiểm tra của OONI Probe** bạn đã chạy cho đến nay;
* **Số lượng mạng** bạn đã cho OONI Probe chạy trên đó cho đến nay;
* **Lượng dữ liệu dùng** của OONI Probe.

{{<img src="images/image34.jpg" title="Test results hero" alt="Test results hero">}}

**Bước 1.** nếu bạn muốn xóa kết quả kiểm tra của OONI Probe (để tiết kiệm chỗ chứa chẳng hạn),  **nhấn vào biểu tượng xóa** ở góc phải phía trên màn hình.

Xin đừng lo ngại là kết quả kiểm tra của bạn sẽ bị mất; vì khi vừa kiểm tra xong, kết quả được tự động công bố trên [OONI Explorer](https://explorer.ooni.org/vi) và trên [OONI API](https://api.ooni.io/) theo gần thời gian thực. Nếu bạn không muốn công bố kết quả kiểm tra, xin tham khảo tiết mục “Cấu hình thiết đặt của OONI Probe: Riêng tư” trong cẩm nang này.

Khi nhấn vào biểu tượng xóa, bạn sẽ thấy khung sau đây hiện lên:

{{<img src="images/image15.jpg" title="Delete all tests" alt="Delete all tests">}}

**Bước 2.** Nhấn **Xóa** nếu bạn muốn xóa hết kết quả kiểm tra của OONI Probe. Nếu không thì nhấn **Hủy**.

**Sàng lọc kết quả kiểm tra**

Trong trang Kết quả Kiểm Tra của OONI Probe Mobile, kết quả được xếp theo thứ tự thời gian, với kiểm tra mới nhất được liệt kê trước.

{{<img src="images/new-test-results.jpg" title="Test results page" alt="Test results page">}}

**Bước 1.** Nếu bạn muốn sàng lọc kết quả dựa vào một thể loại kiểm tra riêng biệt (“Trang web”, “Tin Nhắn Nhanh”, “Vượt thoát kiểm duyệt”, “Hiệu suất”), nhấn **Tất cả kiểm tra** (hoặc “Sàng lọc Kiểm tra”, hoặc mũi tên trong hàng đó).

{{<img src="images/image93.jpg" title="Test results filtering" alt="Test results filtering">}}

Bạn sẽ thấy một menu thả xuống liệt kê tất cả các thể loại kiểm tra theo chủ đề.

**Bước 2.** Nhấn vào thể loại bạn muốn sàng lọc kết quả. Trong thí dụ sau đây, chúng tôi nhấn vào “Trang web”.

{{<img src="images/image41.jpg" title="Filtering websites" alt="Filtering websites">}}

{{<img src="images/image126.jpg" title="Filtered websites" alt="Filtered websites">}}

Bạn đã chọn sàng lọc kết quả dựa vào thể loại “Trang web”, cho ra một tổng quan của kết quả kiểm tra các trang web. Trong thí dụ trên, chúng ta thấy trong 3 trang web kiểm tra trong mạng Magticom Ltd. (vào ngày 2 tháng Tám 2022 lúc 12:01 giờ địa phương), không có trang nào có chỉ dấu bị chặn.

Trong khi trang Kết quả Kiểm tra cho thấy kết quả sơ khởi, bạn có thể đào sâu hơn và xem các dữ liệu của từng kiểm tra một, được giải thích trong các mục sau đây.

### Trang web

Bạn có thể xem kết quả kiểm tra các trang web của OONI Probe qua các bước sau:

**Bước 1.** Bấm vào **Trang web** trong trang Kết quả Kiểm tra của OONI Probe Mobile.

{{<img src="images/image41.jpg" title="Websites tests filtered" alt="Websites tests filtered">}}

Bạn sẽ thấy danh sách tất cả trang web bạn đã kiểm tra cho tới nay.

Trong tiêu đề phía trên, cho thấy tổng quan của kết quả kiểm tra. Cạnh bên mỗi một URL được kiểm tra, sẽ có vạch xanh (truy cập được), hoặc một dấu chấm than màu cam (có thể bị chặn).

**Bước 2.** Bấm vào **hàng của trang được kiểm tra** (để xem dữ liệu của kiểm tra trang đó). 

{{<img src="images/image127.jpg" title="Tested website" alt="Tested website">}}

{{<img src="images/image101.jpg" title="Websites results" alt="Websites results">}}

Bạn thấy dữ liệu thuộc về việc kiểm tra một trang web nào đó. Trang đo lường sau đây thuộc về kiểm tra của trang  `https://telegram.org/`.

{{<img src="images/image47.jpg" title="Telegram’s access accessible" alt="Telegram’s access accessible">}}

Qua trang đo lường này, bạn thấy tổng quan của kết quả kiểm tra. Trong trường hợp này, chúng ta thấy  `https://telegram.org/` truy cập được khi kiểm tra trong mạng Magticom Ltd. (AS16010) vào ngày 2 tháng Tám 2022 lúc 11:10 giờ địa phương.

Nếu một trang web thấy (có thể) bị chặn, kết quả kiểm tra sẽ cho thấy một dấu chấm than màu cam, như hình minh họa sau đây.

{{<img src="images/image105.jpg" title="1tv inaccessible" alt="1tv inaccessible">}}

Bạn có thể xem trang đo lường của trang (có thể) bị chặn trên bằng cách nhấn vào hàng của trang kiểm tra.

{{<img src="images/image62.jpg" title="1tv inaccessible" alt="1tv inaccessible">}}

Trong trường hợp này, chúng ta thấy là `http://1tv.ru` có chỉ dấu bị chặn (“[bất thường](https://ooni.org/support/glossary/#network-anomaly)”) khi được kiểm tra trong mạng Magticom Ltd (AS16010) vào ngày 2 tháng Tám 2022 lúc 10:16 giờ địa phương. Nhất là chúng ta thấy có chỉ dấu [sửa DNS trái phép](https://ooni.org/support/glossary/#dns-tampering) (dựa trên suy nghiệm của [kiểm tra Kết nối Web của OONI](https://ooni.org/nettest/web-connectivity/)). Điều này có nghĩa là Magticom Ltd. có thể chặn không cho truy cập `http://1tv.ru` (vào ngày 2 tháng Tám 2022) bằng phương pháp chặn TCP/IP.

Vì tình trạng [dương tính giả](https://ooni.org/support/glossary/#false-positive) có thể xảy ra, chúng tôi chú thích những kết quả kiểm tra nào không đáp ứng hết các tiêu chuẩn của [kiểm tra Kết nối Web](https://ooni.org/nettest/web-connectivity/) là “[bất thường](https://ooni.org/support/faq/#how-can-i-interpret-ooni-data)” (hơn là ghi “xác nhận bị chặn”), cho thấy là trang web được kiểm tra *có thể* bị chặn.

Khi đánh giá việc chặn một trang web, xem xét các đo lường liên hệ (từ việc kiểm tra trang web đó trong cùng mạng suốt một thời gian) một cách **tổng hợp** sẽ ích lợi hơn. Bạn dùng [OONI Explorer](https://explorer.ooni.org/vi) (nơi chúng tôi công bố toàn bộ kết quả kiểm tra). OONI Explorer còn [cho thấy đo lường của tất cả các trường hợp “được xác nhận chặn”](https://explorer.ooni.org/vi/search?since=2021-02-24&only=confirmed), trong đó chúng tôi tự động xác nhận việc chặn trang web dựa vào [trang chặn](https://ooni.org/support/glossary/#block-page).

Khi kiểm tra một trang web cho thấy có điều [bất thường](https://ooni.org/support/faq/#how-can-i-interpret-ooni-data), rất quan trọng để kiểm tra lại (trong cùng mạng) càng nhiều lần càng tốt, vì có thể giúp để loại trừ tình trạng [dương tính giả](https://ooni.org/support/glossary/#false-positive) (thí dụ như nếu thấy trang đó bị hỏng giống nhau mỗi khi kiểm tra). Một đo lường bất thường không đủ để đánh giá việc ngăn chặn (nhất là khi kiểm tra có thể thất bại vì nhiều lý do liên hệ đến mạng, mà không dính dáng gì đến kiểm duyệt).

**Bước 3.** Để kiểm tra lại một URL đã được kiểm tra, nhấn **biểu tượng Thử lại** ở góc phải bên trên trang kết quả kiểm tra của OONI Probe.

{{<img src="images/image23.jpg" title="Retry icon" alt="Retry icon">}}

Bạn sẽ thấy khung sau đây hiện lên, hỏi bạn có muốn kiểm tra lại hết tất cả các trang web (bạn đã kiểm tra rồi).

{{<img src="images/image36.jpg" title="Rerun test" alt="Rerun test">}}

**Bước 4.** Nhấn **Chạy** để kiểm tra lại các trang web.

### Tin Nhắn Nhanh

Bạn có thể xem kết quả của OONI Probe kiểm tra các ứng dụng tin nhắn nhanh bằng các bước sau:

**Bước 1.** Bấm vào **Tin Nhắn Nhanh** trong trang Kết quả Kiểm tra của OONI Probe Mobile. 

{{<img src="images/image128.jpg" title="Test results screen" alt="Test results screen">}}

{{<img src="images/image129.jpg" title="Test results IM screen" alt="Test results IM screen">}}

Ban sẽ thấy danh sách các ứng dụng tin nhắn nhanh (WhatsApp, Facebook Messenger, Telegram, Signal) đã được kiểm tra.

Trong tiêu đề phía trên, cho thấy tổng quan của kết quả kiểm tra tin nhắn nhanh. Cạnh bên mỗi một ứng dụng được kiểm tra, sẽ có vạch xanh (cho thấy là ứng dụng truy cập được), hoặc một dấu chấm than màu cam (ứng dụng có thể bị chặn).

**Bước 2.** Bấm vào **hàng của một ứng dụng được kiểm tra** (để xem dữ liệu kiểm tra của ứng dụng đó). 

{{<img src="images/new-im-test-results.jpg" title="IM test results" alt="IM test results">}}

Trang đo lường sau đây thuộc về việc kiểm tra WhatsApp.

{{<img src="images/image64.jpg" title="WhatsApp test result" alt="WhatsApp test result">}}

Trang đo lường này cho thấy tổng quan về kết quả kiểm tra WhatsApp. Trong trường hợp này, chúng ta thấy là WhatsApp truy cập được khi kiểm tra trong mạng Magticom Ltd. (AS16010) vào ngày 2 tháng Tám 2022 lúc 10:16 giờ địa phương. Có kết luận này là vì [kiểm tra WhatsApp của OONI](https://ooni.org/nettest/whatsapp/) kết nối tốt đẹp với điểm cuối, dịch vụ đăng ký, và trang (`web.whatsapp.com`) của WhatsApp.

Nếu thấy WhatsApp (có thể) bị chặn, kết quả kiểm tra này sẽ có một dấu chấm than màu cam và thông tin tại sao ứng dụng có thể bị chặn (dựa vào suy nghiệm của [kiểm tra WhatsApp của OONI](https://ooni.org/nettest/whatsapp/)).

Tương tự vậy, bạn có thể xem kết quả kiểm tra Telegram trong phần kết quả kiểm tra tin nhắn nhanh của OONI Probe.

{{<img src="images/image4.jpg" title="Telegram test result" alt="Telegram test result">}}

Trong trường hợp này, chúng ta thấy là Telegram truy cập được khi kiểm tra trong mạng Magticom Ltd. (AS16010) vào ngày 2 tháng Tám 2022 lúc 10:16 giờ địa phương. Có kết luận này là vì [kiểm tra Telegram của OONI](https://ooni.org/nettest/telegram/) kết nối tốt đẹp với điểm cuối, và trang(`web.telegram.org`). 

Nếu thấy Telegram (có thể) bị chặn, kết quả kiểm tra này sẽ có một dấu chấm than màu cam và thông tin tại sao ứng dụng có thể bị chặn (dựa vào suy nghiệm của [kiểm tra Telegram của OONI](https://ooni.org/nettest/telegram/)).

Như bạn thấy, có hàng màu xám ở cuối màn hình cho biết là đo lường không được tải lên [OONI Explorer](https://explorer.ooni.org/vi) và [OONI API](https://api.ooni.io/). Điều này xảy ra có thể vì kết nối mạng yếu. Để thử tải đo lường lên lại, nhấn vào **Tải lên**. 

Bạn có thể xem kết quả kiểm tra Signal trong phần kết quả kiểm tra tin nhắn nhanh của OONI Probe.

{{<img src="images/signal-test-result.jpg" title="Signal results" alt="Signal results">}}

Trong trường hợp này, chúng ta thấy là Signal truy cập được khi kiểm tra trong mạng Magticom Ltd. (AS16010) vào ngày 2 tháng Tám 2022 lúc 10:18 giờ địa phương. Có kết luận này  là vì [kiểm tra Signal của OONI](https://ooni.org/nettest/signal) kết nối tốt đẹp với điểm cuối của Signal.

Nếu thấy Signal (có thể) bị chặn, kết quả kiểm tra này sẽ có một dấu chấm than màu cam và thông tin tại sao ứng dụng có thể bị chặn (dựa vào suy nghiệm của [kiểm tra Signal của OONI](https://ooni.org/nettest/signal)).

Trong mọi trường hợp, chúng tôi đề nghị tham khảo các dữ liệu đo lường được công bố trongn [OONI Explorer](https://explorer.ooni.org/vi), nơi đây bạn có thể xem xét kết quả một cách tổng hợp (có thể giúp loại trừ [dương tính giả](https://ooni.org/support/glossary/#false-positive) và xác nhận tình trạng chặn). 

### Vượt thoát kiểm duyệt

Bạn có thể xem kết quả kiểm tra các công cụ vượt thoát kiểm duyệt qua các bước sau:

**Bước 1.** Bấm vào **Vượt thoát kiểm duyệt** trong trang Kết quả Kiểm tra của ứng dụng OONI Probe Mobile

{{<img src="images/new-test-results.jpg" title="Test results page" alt="Test results page">}}

{{<img src="images/image130.jpg" title="Test results page" alt="Test results page">}}

{{<img src="images/image132.jpg" title="Test results page" alt="Test results page">}}

Bạn sẽ thấy danh sách các công cụ vượt thoát kiểm duyệt (Psiphon, Tor) đã được bạn kiểm tra cho đến nay.

Trong tiêu đề phía trên, cho thấy tổng quan của kết quả kiểm tra của các công cụ vượt thoát. Cạnh bên mỗi một công cụ được kiểm tra, sẽ có vạch xanh (truy cập được), hoặc một dấu chấm than màu cam (có thể bị chặn).

**Bước 2.** Bấm vào **hàng của một công cụ được kiểm tra** (để xem dữ liệu kiểm tra). 

{{<img src="images/image108.jpg" title="Circumvention test results" alt="Circumvention test results">}}

Trang đo lường sau đây thuộc về việc kiểm tra [Psiphon](https://psiphon.ca/).

{{<img src="images/image21.jpg" title="Psiphon test result page" alt="Psiphon test result page">}}

Qua trang đo lường này, bạn thấy tổng quan của kết quả kiểm tra Psiphon. Trong trường hợp này, chúng ta thấy là Psiphon truy cập được khi kiểm tra trong mạng Magticom Ltd. (AS16010) vào ngày 2 tháng Tám 2022 lúc 13:11 giờ địa phương. Có kết luận này là vì [kiểm tra Psiphon của OONI](https://ooni.org/nettest/psiphon/) khởi động kết nối với Psiphon tốt đẹp.

Nếu thấy Psiphon (có thể) bị chặn, kết quả kiểm tra này sẽ có một dấu chấm than màu cam và thông tin tại sao có thể bị chặn (dựa vào suy nghiệm của [kiểm tra Psiphon của OONI](https://ooni.org/nettest/psiphon/)).

Tương tự vậy, bạn có thể xem kết quả kiểm tra [Tor](https://www.torproject.org/) trong phần kết quả vượt thoát kiểm duyệt của OONI Probe.

{{<img src="images/image107.jpg" title="Tor test results" alt="Tor test results">}}

Trong trường hợp này, chúng ta thấy là Tor truy cập được khi kiểm tra trong mạng Magticom Ltd. (AS16010) vào ngày 2 tháng Tám 2022 lúc 13:11 giờ địa phương. Có kết luận này là vì [kiểm tra Tor của OONI](https://ooni.org/nettest/tor/) kết nối tốt đẹp với hầu hết các cầu nối Tor và tất cả danh bạ chính thức của Tor.

Nếu thấy Tor (có thể) bị chặn, kết quả kiểm tra này sẽ có một dấu chấm than màu cam và thông tin tại sao có thể bị chặn (dựa vào suy nghiệm của [kiểm tra Tor của OONI](https://ooni.org/nettest/tor/)).

### Hiệu suất

Bạn có thể xem kết quả kiểm tra hiệu suất mạng của bạn qua các bước sau:

**Bước 1.** Bấm vào **Hiệu suất** trong trang Kết quả Kiểm tra của OONI Probe Mobile.

{{<img src="images/new-test-results.jpg" title="Test results page" alt="Test results page">}}

{{<img src="images/image131.jpg" title="Test results page" alt="Test results page">}}

Bạn sẽ thấy danh sách các kiểm tra hiệu suất đã chạy tới nay. Trong tiêu đề bên trên, có tổng quan của kết quả, với điểm chính tìm thấy liệt kê cạnh bên mỗi kết quả.

**Bước 2.** Bấm vào **hàng của một kết quả kiểm tra** (để xem dữ liệu liên hệ). 

{{<img src="images/image16.jpg" title="Performance test results" alt="Performance test results">}}

Trang đo lường sau đây của một [kiểm tra tốc độ NDT](https://ooni.org/nettest/ndt/).

{{<img src="images/image79.jpg" title="NDT speed test details" alt="NDT speed test details">}}

Trong trường hợp này, chúng ta thấy một [kiểm tra tốc độ NDT](https://ooni.org/nettest/ndt/) được chạy trong mạng Magticom Ltd. (AS16010) vào ngày 2 tháng Tám 2022 lúc 13:26 giờ địa phương. Khi kiểm tra chạy, tốc độ tải xuống là 9.44 megabits mỗi giây, tốc độ tải lên là 11.5 megabits mỗi giây, và mất 151.6 phần ngàn giây để kết nối với một máy chủ [M-Lab](https://www.measurementlab.net/) (`mil03-IT`). Đây là một tốc độ mạng trung bình, vì ping trung bình đến (máy chủ M-Lab này) mất 453.3 phần ngàn giây. 

Bạn có thể so sánh kết quả kiểm tra NDT với các con số trong gói internet của nhà mạng (ISP) cung cấp.

Bạn có thể xem kết quả của [DASH](https://ooni.org/nettest/dash/) trong trang kết quả hiệu suất của OONI Probe.

{{<img src="images/image92.jpg" title="Dash test results" alt="Dash test results">}}

Trong trường hợp này, chúng ta thấy một [kiểm tra DASH video streaming](https://ooni.org/nettest/dash/) chạy trong mạng Magticom Ltd. (AS16010) vào ngày 2 tháng Tám 2022 lúc 13:35 giờ địa phương. Khi thực hiện kiểm tra, có thể phát trực tiếp video lên đến 1080p (full HD) không cần đệm, với bitrate trung bình là 6.07 megabits mỗi giây. Điều này cho thấy người dùng có thể phát trực tiếp video với độ phân giải cao trong mạng đó nếu máy chủ phát hình nằm cùng chỗ với máy chủ đo lường.

Bạn có thể so sánh kết quả kiểm tra DASH với các con số của gói internet do nhà mạng (ISP) cung cấp.

Qua thẻ hiệu suất, bạn có thể chạy hai kiểm tra của OONI nhằm phát hiện sự có mặt của [middleboxes](https://ooni.org/support/glossary/#middlebox) trong mạng được kiểm tra:

* [kiểm tra HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/)
* [kiểm tra HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/)

A middlebox là một thiết bị mạng để biến đổi, kiểm tra, sàng lọc, hoặc thao túng lưu lượng giao thông bên cạnh chức năng thường lệ là chuyển tiếp các gói dữ liệu. Nhiều nhà mạng (ISP) trên thế giới dùng middleboxes để cải thiện hiệu suất mạng, giúp truy cập vào trang web lẹ hơn, và cho một số mục tiêu khác của mạng lưới. Đôi lúc, middleboxes còn được dùng cho mục tiêu kiểm duyệt internet và/hoặc theo dõi.

Bạn có thể xem kết quả của kiểm tra [HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/) trong kết quả hiệu suất của OONI Probe.

{{<img src="images/image117.jpg" title="HIRL no middlebox detected" alt="HIRL no middlebox detected">}}

Trong trường hợp này, chúng ta thấy kiểm tra [HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/) chạy trong mạng Magticom Ltd. (AS16010) vào ngày 2 tháng Tám 2022 lúc 13:36 giờ địa phương. Khi thực hiện, kiểm tra này gửi ra một yêu cầu HTTP bất hợp lệ (bao gồm con số phiên bản HTTP bất hợp lệ, số lượng ô bất hợp lệ và một phương pháp yêu cầu thật lớn) đến một dich vụ echo đang lắng nghe ở cổng HTTP chuẩn. Dịch vụ echo (chỉ là một công cụ đo lường và gỡ lỗi gửi trả lại bất cứ dữ liệu gì nhận được) gửi trả lại chúng ta yêu cầu HTTP bất hợp lệ, giống hệt như khi gửi ra. Điều này cho thấy là không có middlebox hoặc không có thao túng lưu lượng giao thông trong mạng được kiểm tra.

Nhưng nếu có một middlebox trong mạng được kiểm tra, yêu cầu HTTP bất hợp lệ sẽ được middlebox chặn lấy, và có thể gây ra lỗi và được dịch vụ echo gửi lại cho chúng ta. Nhận được lỗi như thế cho thấy có phần mềm thao túng lưu lượng giao thông, tuy nhiên không rõ phần mềm đó là gì.

Tương tự vậy, bạn có thể xem kết quả kiểm tra [HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/) trong trang kết quả hiệu suất của OONI Probe.

{{<img src="images/image7.jpg" title="HHFM no middlebox detected" alt="HHFM no middlebox detected">}}

Trong trường hợp trên, chúng ta thấy kiểm tra [HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/) chạy trong mạng Magticom Ltd. (AS16010) vào ngày 2 tháng Tám 2022 lúc 13:35 giờ địa phươg. Khi chạy, kiểm tra này mô phỏng một [yêu cầu HTTP](https://ooni.org/support/glossary/#http-request) gửi đến một máy chủ kiểm soát ở phía sau (sẽ gửi trả lại dữ liệu gì nhận được), nhưng [tiêu đề HTTP](https://ooni.org/support/glossary/#http-header) bị thay đổi với ký tự thường và HOA (tức là không đúng chuẩn HTTP). Vì chúng ta nhận trở lại tiêu đề HTTP y hệt như lúc gửi ra, điều này cho thấy không có middlebox, hoặc không có thao túng lưu lượng giao thông trong mạng được kiểm tra.

Tuy nhiên nếu có mặt của middlebox trong mạng được kiểm tra, hộp đó có thể bình thường hóa tiêu đề bất hợp lệ hoặc thêm vào tiêu đề phụ trội. Tùy theo tiêu đề HTTP  gửi và nhận lại từ máy chủ kiểm soát phía sau có giống nhau hay không, chúng ta có thể suy đoán là có mặt middlebox trong mạng được kiểm tra hay không.

## Chia sẻ kết quả kiểm tra của OONI Probe

Cho mỗi kết quả kiểm tra của OONI Probe, bạn có thể:

* **Truy cập và chia sẻ đo lường của bạn** đã được công bố trên [OONI Explorer](https://explorer.ooni.org/vi);
* **Chia sẻ đo lường** với người quen;
* **Truy cập dữ liệu thô** của đo lường của bạn;
* **Truy cập nhật ký** của đo lường của bạn.

### Truy cập dữ liệu đo lường trong OONI Explorer

**Bước 1.** Truy cập bất cứ kết quả kiểm tra nào của OONI Probe (để biết cách truy tìm kết quả kiểm tra, xin đọc lại các tiết mục trước của cẩm nang này).

{{<img src="images/image62.jpg" title="1tv potentially blocked" alt="1tv potentially blocked">}}

**Bước 2.** Bấm vào nút **Hiển thị trong OONI Explorer** trong một kết quả kiểm tra của OONI Probe.

Ứng dụng sẽ đưa bạn qua trang **OONI Explorer** liên hệ đến đo lường của bạn. Cho thí dụ `1tv` sẽ là trang sau đây: https://explorer.ooni.org/vi/measurement/20220802T082305Z_webconnectivity_GE_16010_n1_mqcSN23znJTURgOm?input=http://1tv.ru 

### Chia sẻ đo lường của bạn

Bạn có thể muốn chia sẻ kết quả kiểm tra, nhất là khi gặp một trường hợp có thể bị chặn. Tuy kết quả của OONI Probe được tự động công bố trên [OONI Explorer](https://explorer.ooni.org/vi) (trừ phi bạn chọn không muốn, như đã trình bày trong tiết mục “Cấu hình thiết đặc của OONI Probe: Riêng tư” trong cẩm nang này), bạn vẫn có thể chia sẻ kết quả kiểm tra trực tiếp đến người liên hệ.

Bạn có thể chia sẻ đo lường của OONI Probe bằng cách sau đây: 

**Bước 1.** Nhấn vào **nút Chia sẻ** trong một kết quả kiểm tra của OONI Probe. 

{{<img src="images/image87.jpg" title="Share explorer URL" alt="Share explorer URL">}}

Thao tác này sẽ mở chức năng **Chia sẻ với** trên điện thoại, giúp chia sẻ trực tiếp đo lường bạn đã chọn đến bất kỳ người liên hệ nào (ví dụ như qua ứng dụng WhatsApp, Signal, hay Slack).

**Bước 2.** Nhấn vào người liên hệ bạn muốn chia sẻ đo lường.

**Bước 3.** Nhấn **Gửi** để chia sẻ đo lường với người liên hệ. Họ sẽ nhận được đo lường thích hợp trong [OONI Explorer](https://explorer.ooni.org/vi) liên quan đến kết quả kiểm tra của bạn.

### Dữ liệu thô

Mỗi kết quả kiểm tra của OONI Probe đều có một tổng quan của dữ kiện tìm được. Để xem dữ liệu thật sự (tức là dữ liệu đo lường thô) mà kết quả kiểm tra dựa vào đó, bấm vào nút **Dữ liệu** trong mỗi trang kết quả kiểm tra.

Xem dữ liệu đo lường thô có thể hữu ích vì:

* Chúng cung cấp chi tiết kỹ thuật có thể dùng làm **bằng chứng** của việc ngăn chặn.
* Chúng có thể giúp xác định một trang web có thực sự bị chặn hay không, hay việc kiểm tra gây ra điều [bất thường](https://ooni.org/support/glossary/#network-anomaly) vì những lý do khác không liên quan gì đến chuyện kiểm duyệt (tức là loại trừ tình trạng [dương tính giả](https://ooni.org/support/glossary/#false-positive)).

Để truy cập dữ liệu OONI thô của kết quả kiểm tra:

**Bước 1.** Bấm vào nút **Dữ liệu** trong một kết quả kiểm tra của OONI Probe.

{{<img src="images/image133.jpg" title="Data button" alt="Data button">}}

**Bước 2.** Bạn có thể sao chép và chia sẻ dữ liệu bằng cách nhấn vào **Sao chép vào Bảng ghi tạm** ở góc phải phía trên.

{{<img src="images/image134.jpg" title="Copy to clipboard" alt="Copy to clipboard">}}

### Nhật ký

Nhật ký là một tập tin ghi lại cách một phần mềm chạy như thế nào. Trong khuôn khổ của OONI Probe, mỗi kết quả kiểm tra có một nhật ký, ghi lại kiểm tra đó chạy như thế nào trong một mạng đặc trưng. Dữ liệu này chỉ có nếu bạn bật mở tùy chọn **Nhật ký gỡ lỗi**. Để kiểm xem tùy chọn này có bật mở lên không, xin vào menu **Nâng cao** trong phần **Thiết đặt**.

Có thể hữu ích để truy cập nhật ký của một kết quả kiểm tra của OONI Probe nếu có lỗi hoặc kiểm tra không chạy được như dự định. Trong trường hợp này, bạn có thể chia sẻ nhật ký thích hợp với [đội ngũ OONI](https://ooni.org/about/#contact) để giúp chúng tôi **gỡ lỗi** của vấn đề.

## Cấu hình thiết đặt của OONI Probe

Bạn có thể tùy chỉnh việc sử dụng OONI Probe trong phần thiết đặt.

**Bước 1.** Bấm vào **Thiết đặt** trong thanh điều hướng bên dưới của OONI Probe.

{{<img src="images/image63.jpg" title="Settings page" alt="Settings page">}}

Bạn sẽ thấy tất cả các thiết đặt của ứng dụng OONI Probe.

Trong các mục sau đây, chúng tôi sẽ hướng dẫn bạn qua từng thiết đặt.

### Thông báo

Nếu bạn dùng OONI Probe trong điện thoại **Android**, bạn có thể bật mở **thông báo đẩy** để nhận tin nhắn từ [đội ngũ OONI](https://ooni.org/about/#contact).

Chúng tôi chủ yếu gửi thông báo ra khi được biết có kiểm duyệt ở một quốc gia riêng biệt, để khuyến khích người dùng OONI Probe ở quốc gia đó kiểm tra các dịch vụ được tin là bị chặn (hay dường như bị chặn dựa vào [đo lường của OONI](https://explorer.ooni.org/vi)). Nói chung, chúng tôi không gửi thông báo đẩy ra quá nhiều.

Bạn có thể cấu hình thiết đặt thông báo đẩy bằng cách sau đây:

**Bước 1.** Nhấn **Thông báo** trong phần thiết đặt của OONI Probe.

{{<img src="images/image114.jpg" title="Tap notification settings" alt="Tap notification settings">}}

Bạn thấy là thông báo đẩy được tắt theo mặc định.

{{<img src="images/image94.jpg" title="Notification settings screen" alt="Notification settings screen">}}

**Bước 2.** Bật mở tùy chọn **Bật lên** để nhận thông báo đẩy.

{{<img src="images/image71.jpg" title="Enable notifications" alt="Enable notifications">}}

Khi bật mở thông báo đẩy, bạn có thể nhận được tin nhắn từ chúng tôi khi chúng tôi được biết có trường hợp kiểm duyệt internet tại quốc gia bạn. Trong tin nhắn, chúng tôi có thể kèm theo liên kết [OONI Run](https://run.ooni.io/) để kiểm tra một số dịch vụ riêng biệt được biết là bị chặn hay có thể bị chặn.

### Kiểm tra tự động

Thay vì phải nhớ bấm chạy từng kiểm tra một, bạn có thể **bật mở kiểm tra tự động** trong phần thiết đặt của OONI Probe và OONI Probe sẽ tự động chạy kiểm tra cho bạn!

Khi bật mở kiểm tra tự động, OONI Probe sẽ **chạy tất cả kiểm tra trong nền sau nhiều lần trong ngày** (không tính kiểm tra hiệu suất choán nhiều băng thông), kiểm tra mỗi lần một nhóm trang web khác nhau (từ [danh sách kiểm tra của Citizen Lab](https://github.com/citizenlab/test-lists/tree/master/lists)). Để tránh bừa bộn phần Kết quả Kiểm Tra trong ứng dụng, các kết quả này được tự động công bố trên [OONI Explorer](https://explorer.ooni.org/vi) theo gần thời gian thực (nhưng sẽ không thấy được trong phần Kết quả Kiểm tra).

Với OONI Probe kiểm tra tự động , bạn giúp **đóng góp đo lường kiểm duyệt thường xuyên** (mà không phải làm gì cả), giúp cho cộng đồng chuộng tự do internet giám sát và phát hiện các sự kiện kiểm duyệt tại quốc gia bạn theo thời gian.

Bạn có thể bật mở OONI Probe kiểm tra tự động  qua các bước sau đây:

**Bước 1.** Bấm vào **Thiết đặt** trong thanh điều hướng bên dưới của OONI Probe rồi bấm vào nút **Kiểm tra tự động**.

{{<img src="images/image135.jpg" title="Automated testing settings" alt="Automated testing settings">}}

Bạn thấy là tùy chọn **Chạy kiểm tra tự động** trong phần thiết đặt bị tắt theo mặc định.

{{<img src="images/image136.jpg" title="Automated testing disabled" alt="Automated testing disabled">}}

**Bước 2.** Bật mở tùy chọn **Chạy kiểm tra tự động** trong phần thiết đặt.

{{<img src="images/image138.jpg" title="Always automated testing" alt="Always automated testing">}}

Bây giờ bạn đã bật mở kiểm tra OONI Probe tự động! OONI Probe sẽ chạy kiểm tra tự động nhiều lần trong ngày (người dùng không cần làm gì cả) một khi thiết bị kết nối vào WiFi và sạc pin. Tất cả kết quả kiểm tra sẽ được tự động công bố trên [OONI Explorer](https://explorer.ooni.org/vi).

Nếu bạn không bị giới hạn bởi lưu lượng giao thông hay mức sử dụng pin, bạn có thể chạy đo lường tự động mà không buộc phải kết nối WiFi hoặc cắm dây sạc pin. Muốn thế, xin tắt các tùy chọn **Chỉ khi có WiFi** và **Chỉ khi đang sạc** trong phần thiết đặt.

{{<img src="images/image137.jpg" title="Automated testing enabled" alt="Automated testing enabled">}}

**Quan trọng:** Nếu bạn đang dùng VPN, OONI Probe sẽ *không* chạy kiểm tra tự động.  Xin **tắt VPN** để OONI Probe chạy kiểm tra tự đông.

### Tùy chọn kiểm tra

Bạn có thể tùy chỉnh kiểm tra dựa vào các chọn lựa kiểm tra khác nhau trong các thẻ chủ đề (“Trang web”, “Tin Nhắn Nhanh”, “Vượt thoát kiểm duyệt”, “Hiệu suất”).

**Bước 1.** Nhấn vào **Tùy chọn kiểm tra** trong phần thiết đặt của OONI Probe.

{{<img src="images/image2.jpg" title="Test options settings" alt="Test options settings">}}

Bạn sẽ thấy các thiết đặt sau đó được nhóm lại dưới mỗi thẻ kiểm tra chủ đề.

{{<img src="images/image111.jpg" title="Test settings" alt="Test settings">}}

Trong các mục sau đây, chúng tôi sẽ hướng dẫn bạn qua thiết đặt của từng nhóm.

#### Trang web

Thiết đặt kiểm tra trang web đã được trình bày trong tiết mục trước trong cẩm nang này. Xin đọc tiết mục “**Tùy chỉnh kiểm tra trang web**”

#### Tin Nhắn Nhanh

Bạn có thể tùy chỉnh việc kiểm tra các ứng dụng tin nhắn nhanh.

**Bước 1.** Nhấn vào **Tin Nhắn Nhanh** trong phần “Tùy chọn kiểm tra” của thiết đặt.

{{<img src="images/image84.jpg" title="Tap IM settings" alt="Tap IM settings">}}

Bạn sẽ thấy 4 kiểm tra (cho [WhatsApp](https://ooni.org/nettest/whatsapp/), [Telegram](https://ooni.org/nettest/telegram/), [Facebook Messenger](https://ooni.org/nettest/facebook-messenger/), và [Signal](https://ooni.org/nettest/signal)) có trong thẻ Tin Nhắn Nhanh trong Bảng tóm tắt của OONI Probe. Cả 4 kiểm tra được bật mở theo mặc định.

{{<img src="images/new-im-settings.jpg" title="IM settings" alt="IM settings">}}

Nếu muốn giới hạn việc kiểm tra vào một vài (hoặc không) kiểm tra, bạn có thể tắt kiểm tra nào bạn muốn trong các phần thiết đặt này.

**Ghi chú:** Chúng tôi thường được hỏi là người dùng có thể thêm ứng dụng tin nhắn nhanh họ muốn kiểm tra (cho việc tùy chỉnh kiểm tra ứng dụng với OONI Probe). Rất tiếc là điều này không đơn giản như việc tùy chỉnh kiểm tra các trang web (nơi bạn có thể thêm bất cứ URL nào để kiểm tra). Kiểm tra ứng dụng đòi hỏi phải nhận diện tất cả các điểm cuối của ứng dụng đó, và xác định cách nào tốt nhất để đo lường tầm với tới của ứng dụng đó. Việc này thay đổi từ ứng dụng này qua ứng dụng nọ, và tốn khá nhiều công sức để tạo ra các kiểm tra ứng dụng tin nhắn nhanh. Vì thế mà tại sao chúng tôi hiện chỉ có kiểm tra vài ứng dụng tin nhắn nhanh phổ biến nhất, và [phương pháp](https://ooni.org/nettest/) của mỗi kiểm tra cũng khác biệt. Chúng tôi ưu tiên để soạn thảo kiểm tra cho các ứng dụng tin nhắn nhanh nào mà (a) thường bị chặn trên thế giới, và (b) nhận được nhiều yêu cầu nhất từ cộng đồng. Nếu có những ứng dụng tin nhắn nhanh nào khác mà bạn nghĩ là chúng tôi nên ưu tiên kiểm tra, xin [cho chúng tôi biết](https://ooni.org/about/#contact).

#### Vượt thoát kiểm duyệt

Bạn có thể tùy chỉnh việc kiểm tra các công cụ vượt thoát kiểm duyệt.

**Bước 1.** Nhấn vào **Vượt thoát kiểm duyệt** trong phần “Tùy chọn kiểm tra” của thiết đặt.

{{<img src="images/image109.jpg" title="Tap circumvention" alt="Tap circumvention">}}

Bạn sẽ thấy 2 kiểm tra (cho [Psiphon](https://ooni.org/nettest/psiphon/) và [Tor](https://ooni.org/nettest/tor/)) có trong thẻ Vượt thoát kiểm duyệt trong Bảng tóm tắt của OONI Probe. Cả 2 kiểm tra được bật mở theo mặc định.

{{<img src="images/image20.jpg" title="Circumvention settings" alt="Circumvention settings">}}

Nếu muốn giới hạn việc kiểm tra vào một vài (hoặc không) kiểm tra, bạn có thể tắt kiểm tra nào bạn muốn trong các phần thiết đặt này.

**Ghi chú:** Chúng tôi thường được hỏi là người dùng có thể thêm công cụ vượt thoát kiểm duyệt họ muốn kiểm tra (cho việc tùy chỉnh kiểm tra VPN với OONI Probe). Rất tiếc là điều này không đơn giản như việc tùy chỉnh kiểm tra các trang web (nơi bạn có thể thêm bất cứ URL nào để kiểm tra). Kiểm tra ứng dụng đòi hỏi phải nhận diện tất cả các điểm cuối của ứng dụng đó, và xác định cách nào tốt nhất để đo lường tầm với tới của ứng dụng đó. Việc này thay đổi từ ứng dụng này qua ứng dụng nọ, và tốn khá nhiều công sức để tạo ra các kiểm tra công cụ vượt thoát. Vì thế mà tại sao chúng tôi hiện chỉ có kiểm tra vài công cụ vượt thoát phổ biến nhất, và [phương pháp](https://ooni.org/nettest/) của mỗi kiểm tra cũng khác biệt. Chúng tôi ưu tiên để soạn thảo kiểm tra khi có thể cùng cộng tác với nhóm phát triển công cụ vượt thoát. Nếu có những công cụ vượt thoát nào khác mà bạn nghĩ là chúng tôi nên ưu tiên kiểm tra, xin [cho chúng tôi biết](https://ooni.org/about/#contact).

#### Hiệu suất

Bạn có thể tùy chỉnh việc kiểm tra hiệu suất mạng.

**Bước 1.** Nhấn vào **Hiệu suất** trong phần “Tùy chọn kiểm tra” của thiết đặt.

{{<img src="images/image82.jpg" title="Performance settings" alt="Performance settings">}}

Bạn sẽ thấy 4 kiểm tra ([NDT](https://ooni.org/nettest/ndt/), [DASH](https://ooni.org/nettest/dash/), [HTTP Invalid Request Line](https://ooni.org/nettest/http-invalid-request-line/), [HTTP Header Field Manipulation](https://ooni.org/nettest/http-header-field-manipulation/)) có trong thẻ Hiệu suất trong Bảng tóm tắt của OONI Probe. Cả 4 kiểm tra được bật mở theo mặc định.

{{<img src="images/image43.jpg" title="Performance settings" alt="Performance settings">}}

Nếu muốn giới hạn việc kiểm tra vào một vài (hoặc không) kiểm tra, bạn có thể tắt kiểm tra nào bạn muốn trong các phần thiết đặt này.

### Riêng tư

Trang Riêng tư của thiết đặt OONI Probe liên quan đến việc công bố kết quả kiểm tra của OONI Probe, và việc chia sẻ báo cáo sự cố hỏng

**Bước 1.** Nhấn vào **Riêng tư** trong phần thiết đặt của OONI Probe.

{{<img src="images/image35.jpg" title="Privacy settings" alt="Privacy settings">}}

Theo mặc định, kết quả kiểm tra của OONI Probe sẽ được tự động công bố, trong khi đó báo cáo sự cố hỏng bị tắt (trừ phi bạn chọn gửi trong thủ tục nhập cuộc).

{{<img src="images/image80.jpg" title="Privacy settings" alt="Privacy settings">}}

Chúng tôi khuyến khích công bố kết quả kiểm tra của OONI Probe vì điều này giúp gia tăng tính minh bạch của kiểm duyệt internet và hỗ trợ các nỗ lực nghiên cứu và vận động của cộng đồng chuộng tự do internet.

Nếu bạn công cố kết quả kiểm tra của OONI Probe, sẽ bao gồm các dữ liệu sau đây:

* Ngày giờ của đo lường;
* Mã quốc gia (ví dụ `VN` cho Việt Nam);
* Thông tin về mạng: [ASN](https://ooni.org/support/glossary/#asn) (ví dụ, AS16010 cho mạng `Magticom Ltd.) và kiểm tra chạy qua WiFi hay dùng dữ liệu di động;
* Dữ liệu đo lường mạng (tùy thuộc vào [kiểm tra của OONI Probe](https://ooni.org/nettest/)).

Xin đọc thêm thông tin trong [Chính sách Dữ liệu](https://ooni.org/about/data-policy) của chúng tôi.

Nếu chọn chia sẻ báo cáo sự cố hỏng, bạn sẽ chia sẻ thông tin rất cần thiết để tìm ra lỗi và cải thiện hiệu suất của ứng dụng OONI Probe. Các báo cáo sự cố hỏng bao gồm thông tin tại sao và thế nào mà các chức năng của OONI Probe không chạy như dự tính.

Bạn có thể chọn không công bố kết quả kiểm tra của OONI Probe và/hoặc chia sẻ báo cáo sự cố hỏng bằng cách tắt tùy chọn trong phần thiết đặt.

{{<img src="images/image29.jpg" title="All privacy off" alt="All privacy off">}}

### Nâng cao

Phần thiết đặt nâng cao của OONI Probe bao gồm thiết đặt cho:

* Thay đổi **ngôn ngữ** giao diện của OONI Probe;
* Chia sẻ **nhật ký** cho mục tiêu gỡ lỗi;
* Làm sạch **chỗ lưu trữ** của OONI Probe
* Nhận cảnh báo khi thấy **VPN đang được dùng**.

Bạn có thể vào phần thiết đặt nâng cao bằng cách sau đây:

**Bước 1.** Nhấn **Nâng cao** trong phần thiết đặt của OONI Probe.

{{<img src="images/image74.jpg" title="Advanced settings" alt="Advanced settings">}}

Bạn đã vào phần thiết đặt nâng cao của OONI Probe, trong đó **Nhật ký gỡ lỗi** mặc định được tắt và **Cảnh báo VPN** mặc định được mở lên for tất cả người dùng OONI Probe.

{{<img src="images/image97.jpg" title="Advanced settings" alt="Advanced settings">}}

**Bước 2.** Bật mở **Nhật ký gỡ lỗi** để chia sẻ thông tin (ví dụ như phiên bản phần mềm của OONI Probe) để giúp chúng tôi nhận diện và sửa chửa lỗi của OONI Probe.

**Bước 3.** Thay đổi ngôn ngữ giao diện của OONI Probe bằng cách nhấn vào **Thiết đặt Ngôn ngữ**.

{{<img src="images/image103.jpg" title="Language Settings" alt="Language Settings">}}

**Bước 4.** **Tắt VPN** là điều quan trọng cần làm khi chạy OONI Probe để bảo đảm kiểm tra có kết quả chính xác. Xin **bật mở cảnh báo VPN** nếu bạn muốn được nhắc nếu VPN đang chạy.

{{<img src="images/image33.jpg" title="Debug logs and VPN disabled" alt="Debug logs and VPN disabled">}}

**Bước 5.** Nhấn nút **XÓA** nếu bạn muốn xóa các kiểm tra của OONI Probe để tiết kiệm chỗ lưu trữ.

Thao tác này sẽ khiến một khung cửa hiện lên, hỏi bạn là có muốn xóa hết các kết quả kiểm tra của OONI Probe không. Tất cả kết quả kiểm tra của OONI Probe đã được công bố trên [OONI Explorer](https://explorer.ooni.org/vi) (trừ phi bạn chọn không công bố kết quả trong phần Riêng tư của Thiết đặt).

{{<img src="images/image38.jpg" title="Delete all results" alt="Delete all results">}}

**Bước 6.** Nhấn **XÓA** để xóa hết các kết quả kiểm tra của OONI Probe (tiết kiệm chỗ lưu trữ).

{{<img src="images/image22.jpg" title="Empty test results" alt="Empty test results">}}

Tất cả kết quả kiểm tra của OONI Probe đã được xóa khỏi ứng dụng.

### Backend proxy của OONI

Tùy chọn này chỉ cần thiết khi ứng dụng OONI Probe **không chạy được trong quốc gia bạn**. Nếu ứng dụng có "Lỗi – tất cả dịch vụ dò xét thất bại", điều ngày có nghĩa là OONI Probe tìm cách liên lạc với tất cả điểm cuối OONI API công cộng (mà chúng tôi gọi là “dịch vụ dò xét”) nhưng không với tới được.

{{<img src="images/image143.png" title="OONI Probe failed" alt="OONI Probe failed">}}

Khi nhấn vào thiết đặt **proxy phía sau của OONI**, bạn có thể chọn proxy nào muốn dùng để vượt thoát cổng chặn (cố tình hay vô tình) OONI Probe.

{{<img src="images/image139.jpg" title="OONI Backend Proxy" alt="OONI Backend Proxy">}}

Theo mặc định, tất cả proxies bị đóng tắt.

{{<img src="images/image140.jpg" title="OONI Proxy disabled" alt="OONI Proxy disabled">}}

Nếu chọn **Psiphon**, OONI Probe sẽ dùng [Psiphon](https://psiphon.ca/) khi nói chuyện với dịch vụ dò xét.

{{<img src="images/image141.jpg" title="Backend proxy Psiphon" alt="Backend proxy Psiphon">}}

Nếu bạn chọn **Proxy Tùy chỉnh**, bạn có thể cài tên máy chủ và cổng của proxy SOCKS5. Lấy thí dụ, tên máy chủ 127.0.0.1 và cổng 9050 có thể được dùng nếu bạn có Orbot đang chạy trên thiết bị (hoặc Tor bên trong Termux).

{{<img src="images/image142.jpg" title="Backend proxy custom" alt="Backend proxy custom">}}

Khi bật mở proxy phía sau của OONI, OONI Probe sẽ *không* chạy xuyên qua VPN. Thay vào đó, OONI Probe sẽ dùng [Psiphon](https://psiphon.ca/) hoặc một proxy tùy chỉnh (tùy theo bạn chọn cái gi) để vượt thoát cổng chặn dịch vụ phía sau của OONI.

### Gửi email đến hỗ trợ

Nếu bạn gặp trở ngại với OONI Probe và cần hỗ trợ, xin liên lạc với chúng tôi bằng cách sau đây:

**Bước 1.** Nhấn vào **Gửi email đến hỗ trợ** trong phần thiết đặt của OONI Probe.

{{<img src="images/image89.jpg" title="Send email to support" alt="Send email to support">}}

Thao tác này sẽ nhắc bạn dùng một trình email trong điện thoải để gửi email đến chúng tôi.

{{<img src="images/image39.jpg" title="Send email prompt" alt="Send email prompt">}}

**Bước 2.** Soạn email, mô tả trở ngại bạn gặp phải khi dùng OONI Probe. Nếu chia sẻ được nhật ký và/hoặc dữ liệu đo lường thô với chúng tôi thì càng quý (có giải thích trong phần “Chia sẻ kết quả kiểm tra của OONI Probe” của cẩm nang này), cũng tùy thuộc vào vấn đề.

**Bước 3.** Gửi email đến [contact@openobservatory.org](mailto:contact@openobservatory.org).

Nếu bạn cần sự giúp đỡ khẩn từ đội ngũ OONI, chúng tôi đề nghị dùng [kênh OONI Slack](https://slack.ooni.org/), nơi mà chúng ta có thể trao đổi trực tiếp.

### Giới thiệu về OONI

Thiết đặt cuối cùng “Giới thiệu về OONI” của OONI Probe chia sẻ thông tin [về OONI](https://ooni.org/about/) và về **phiên bản phần mềm OONI Probe** bạn đang sử dụng.

**Bước 1.** Nhấn vào **Giới thiệu về OONI** trong phần thiết đặt của OONI Probe.

{{<img src="images/image44.jpg" title="About OONI" alt="About OONI">}}

Sẽ có một màn hình mở ra với thông tin tóm lược về OONI, cũng như phiên bản phần mềm OONI Probe mà bạn đang sử dụng. Trong tiêu đề của thí dụ sau đây, chúng ta thấy đây là phiên bản **OONI Probe 3.7.0**.

{{<img src="images/new-about-screen.jpg" title="OONI About page" alt="OONI About page">}}

**Bước 2.** Nhấn vào nút **Tìm hiểu thêm** để vào [trang web OONI](https://ooni.org/) và tìm hiểu thêm về đề án của chúng tôi.

**Bước 3.** Nhấn vào **Blog** để vào xem trang [blog OONI](https://ooni.org/blog/) và đọc các thông báo mới.

**Bước 4.** Nhấn vào **Báo cáo** để đọc các [báo cáo nghiên cứu](https://ooni.org/reports/) về kiểm duyệt internet trên thế giới (dựa vào dữ liệu của OONI).

**Bước 5.** Nhấn vào **Chính sách Dữ liệu của OONI** để đọc [Chính sách Dữ liệu ](https://ooni.org/about/data-policy).

Cám ơn bạn đã đọc cẩm nang này, và cám ơn bạn sử dụng OONI Probe!
