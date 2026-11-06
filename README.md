# Ardıç Oto Detay

## Proje açıklaması

HTML, CSS ve JavaScript ile geliştirilmiş, kurgusal bir oto detay ve araç bakım işletmesine ait Türkçe, mobil uyumlu tanıtım sitesidir. Gerçek bir işletme, sertifika, müşteri sayısı veya başarı iddiası içermez.

## Teknolojiler

- HTML
- CSS
- JavaScript

## Chrome'da açma

1. Bu proje klasörünü açın.
2. `index.html` dosyasına sağ tıklayın, **Birlikte aç > Google Chrome** seçeneğini seçin. Chrome varsayılan tarayıcınızsa dosyaya çift tıklamanız yeterlidir.
3. Değişiklik yaptığınızda dosyayı kaydedin ve Chrome'da sayfayı yenileyin (Ctrl + R).

Kurulum, internet, sunucu, Node.js veya npm gerekmez. HTML, CSS, JavaScript dosyalarını ve `assets/images` klasörünü mevcut konumlarında tutun.

## Dosyalar

- `index.html`: Başlıklar, metinler ve sayfa bölümleri.
- `style.css`: Renkler, düzen, CSS otomobil çizimi ve ekran boyutlarına göre görünüm.
- `script.js`: Mobil menü ve klavye davranışları.
- `README.md`: Kullanım ve kontrol açıklamaları.

## Özellikler

Ana sayfa, dört hizmet kartı, Nasıl Çalışıyoruz, Uygulama Detayları, hakkımızda ve iletişim bölümleri bulunur. Menü ve butonlar sayfa içindeki bölümlere gider. Mobil menü düğmesi Enter veya Boşluk ile çalışır, Escape ile kapanır. Menü bağlantısı seçildiğinde menü kapanır ve odak hedef bölüme taşınır. Dışarı tıklandığında da menü kapanır. JavaScript kapalıysa bağlantılar görünür kalır.

Klavye odağı görünürdür. İlk Tab tuşuyla ana içeriğe geçiş bağlantısı açılır. Sisteminizde azaltılmış hareket etkinse yumuşak kaydırma ve geçiş efektleri kapatılır. Otomobil çizimi CSS ile hazırlanmıştır. Uygulama Detayları bölümündeki fotoğraflar yerel `assets/images` klasöründen yüklenir; harici yazı tipi veya kütüphane kullanılmaz.

İletişim alanı DEMO olarak işaretlidir. Telefon, adres ve çalışma saatleri yer tutucu metinlerdir. Arama, WhatsApp, form gönderimi ve randevu sistemi yoktur.

## Chrome'da kendiniz kontrol edin

- Üst ve alt menü bağlantıları ile “Hizmetleri İncele” düğmesinin doğru bölüme gittiğini kontrol edin.
- Pencereyi daraltın; mobil menüyü açıp kapatın. Bağlantı seçimi, dışarı tıklama ve Escape davranışlarını deneyin.
- Yalnızca Tab, Shift + Tab, Enter ve Boşluk kullanarak gezinin; odak göstergesinin görünür kaldığını kontrol edin.
- Chrome geliştirici araçlarının cihaz görünümünde 320, 375, 390, 768 ve 1440 piksel genişlikleri deneyin. Yatay taşma ve metin kesilmesi olmadığını kontrol edin.
- Sayfayı yüzde 200 yakınlaştırmada inceleyin.
- Sisteminizin azaltılmış hareket ayarını etkinleştirip kaydırma davranışını kontrol edin.
- İnterneti kapatıp sayfayı yenileyin; tasarım ve menünün çalıştığını kontrol edin.
- Gerekirse bir ekran okuyucuyla başlıkları ve menünün açık/kapalı bilgisini kontrol edin.

### Yapılan kontroller

Kullanıcının bildirdiğine göre proje, Chrome'da 320, 390, 768 ve 1280 piksel genişliklerde test edildi. Mobil menü, klavye kullanımı, bağlantılar ve sayfa görünümü kontrolleri başarılı oldu. Canlı sitede HTTPS ve geliştirici konsolu (Console) kontrolü de yapıldı.

Bu testler kullanıcı tarafından gerçekleştirildi; bu README düzenlemesini yapan yapay zekâ asistanı bağımsız bir tarayıcı testi yapmadı. Yukarıdaki liste kontrol önerileri içerir; listedeki diğer kontrollerin tamamlandığı iddia edilmez. Kod üzerindeki statik kontroller, tarayıcıda görsel veya etkileşimli test yerine geçmez.

## Fotoğraf kaynakları ve lisans bilgileri

Bu fotoğraflar kullanıcı tarafından proje klasörüne eklenmiştir. Temsili stok görsellerdir; işletmenin gerçek çalışmalarını göstermez. Kaynak dosyalar değiştirilmemiştir.

| Dosya | Boyut ve dosya büyüklüğü | Kaynak sayfası | Fotoğrafçı | Lisans ve lisans bağlantısı |
| --- | --- | --- | --- | --- |
| `assets/images/ic-temizlik.jpg` | 1200 × 800 piksel; 70.070 bayt | [Pexels — araç koltuğu temizliği](https://www.pexels.com/photo/a-man-in-black-jacket-cleaning-the-seat-of-a-car-6873185/) | Tima Miroshnichenko | [Pexels License](https://www.pexels.com/license/) |
| `assets/images/pasta-cila.jpg` | 1200 × 795 piksel; 87.169 bayt | [Pexels — beyaz araca pasta cila uygulaması](https://www.pexels.com/photo/a-person-polishing-the-white-car-5233279/) | Khunkorn Laowisit | [Pexels License](https://www.pexels.com/license/) |

### Lisans bilgisi ve kullanım koşulları

- **Lisans:** [Pexels License](https://www.pexels.com/license/)
- **Kaynak ve lisans kontrol tarihi:** 6 Kasım 2026
- Pexels'in genel lisansı kişisel ve ticari kullanıma izin verir.
- Kaynak gösterme zorunlu değildir ancak bu projede kaynaklar belgelenmektedir.
- Görseller temsili amaçlıdır; gerçek işletme çalışmaları olarak sunulmamalıdır.
- Görsellerdeki kişi ve markaların işletmeyi desteklediği ima edilmemelidir.
- Üçüncü kişilere ait marka, görüntü ve diğer haklar ayrıca geçerli olabilir.

### Fotoğrafların teknik bilgileri ve kontrolü

Fotoğraflar toplam yaklaşık 154 KB olduğu için ek dosya veya farklı çözünürlük üretilmemiştir. Her görselde anlamlı Türkçe alt metin, gerçek piksel ölçülerine uygun `width` ve `height`, `loading="lazy"` ve `decoding="async"` kullanılır. Ölçüler, görsel yüklenmeden önce yer ayrılmasını sağlar. CSS'teki `width: 100%; height: auto` fotoğrafların oranlarını korur. Kartlar 760 piksel ve altında tek sütuna geçer.

Chrome'da Nasıl Çalışıyoruz ile Hakkımızda arasında iki fotoğrafın göründüğünü kontrol edin. 390 piksel genişlikte kartlar alt alta durmalı; fotoğraflar esnememeli ve yatay kaydırma oluşmamalıdır.

## Gerçek işletmeye uyarlama

İşletme adı ve açıklamalarını `index.html` üzerinden, renkleri `style.css` başındaki değişkenlerden değiştirebilirsiniz. Gerçek iletişim bilgileri doğrulandıktan sonra yer tutucular güncellenmeli ve DEMO açıklamaları uygun biçimde kaldırılmalıdır. Yayına çıkmadan önce hizmet içerikleri de işletmeyle doğrulanmalıdır.

Sonraki aşamada izinli işletme fotoğrafları, doğrulanmış telefon/harita bağlantıları ve gerçek bir alan adı eklenebilir. Bu yerel şablonda arama motorlarına indekslenme veya sıralama garantisi yoktur; temel başlık ve açıklama etiketleri hazırlanmıştır.
