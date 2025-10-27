# JavaScript Projeler Koleksiyonu

Bu repo, çeşitli JavaScript, HTML ve CSS mini projelerini içermektedir. Her proje, belirli bir JavaScript konseptini veya web geliştirme tekniğini uygulamak için tasarlanmıştır.

## Canlı Demo

Projenin Netlify üzerinde yayınlanmış canlı versiyonuna **[BURADAN ULAŞABİLİRSİNİZ](https://68fe6015ab05ba00088cb608--kezateam.netlify.app/)**.

## Projeler

### Mini Projeler

- **Bilimsel Hesap Makinesi:** Dört işlem ve diğer bilimsel fonksiyonları içeren bir hesap makinesi.
- **Ortalama Hesaplama:** Vize ve final notlarına göre ders ortalamasını hesaplar.
- **Yol Ayrımı Uygulaması:** Kullanıcı seçimlerine göre farklı senaryolar sunan bir macera uygulaması.
- **Beden Kitle İndeksi (BKİ) Hesaplama:** Boy ve kilo bilgileriyle BKİ hesaplar.
- **Benzin İstasyonu Uygulaması:** Yakıt tipi ve bakiye yönetimi simülasyonu.
- **Haftanın Günleri:** Seçilen güne göre bilgi veren basit bir uygulama.
- **ATM Uygulaması:** Para çekme, yatırma ve bakiye sorgulama gibi temel ATM işlevleri.
- **TYT Puan Hesaplama:** Ders netleri ve okul puanına göre TYT puanını tahmin eder.
- **Çarpım Tablosu:** Döngü kullanarak çarpım tablosunu oluşturur.
- **Asal Sayı Bulma:** Girilen bir sayının asal olup olmadığını kontrol eder.
- **Todo List Uygulaması:** Notları kaydetmek için bir uygulama. *(Not: Geliştirme aşamasındadır. MongoDB entegrasyonu gibi özellikler eklenmektedir.)*

### Tasarım Deseni (Design Pattern) Projeleri

- **Singleton Pattern Örneği:** Singleton tasarım deseninin ne olduğunu, nerelerde kullanıldığını ve nasıl uygulandığını gösteren interaktif bir sayfa.
- **Mix Pattern - Word App:** Birden fazla tasarım deseninin bir arada kullanıldığı bir metin efekt uygulaması.
  - **Kullanılan Desenler:** Registry, Iterator, Factory.
- **Efektleri Yeniden Kullanma Örneği:** "Word App" projesindeki efekt motorunun, farklı bir sayfada nasıl modüler bir şekilde yeniden kullanıldığını gösteren bir örnek.

## Projede Kullanılan Tasarım Desenleri (Design Patterns)

Bu projede, kodun daha modüler, esnek ve yeniden kullanılabilir olmasını sağlamak için çeşitli tasarım desenlerinden yararlanılmıştır.

### Singleton Pattern

Bir sınıftan yalnızca **tek bir nesne** oluşturulmasını garanti eder ve bu nesneye her yerden erişilebilen global bir erişim noktası sağlar.

*   **Kullanıldığı Yer:** "Akıllı Kod Kopyalayıcı" modülü (`singletonPatternIndex.js`).
*   **Amaç:** Uygulama boyunca kopyalama işlemlerini yönetecek olan `App` nesnesinin bir tane olmasını sağlamak. Bu sayede, bu modül hangi sayfaya dahil edilirse edilsin, her zaman aynı nesne üzerinden çalışır ve kaynakları verimli kullanır.

### Registry Pattern

Nesnelerin veya sınıfların merkezi bir "kayıt defterine" kaydedilmesini ve ihtiyaç duyulduğunda bu defterden isimleriyle çağrılmasını sağlar.

*   **Kullanıldığı Yer:** "Mix Pattern - Word App" projesindeki `sinifKoleksiyonu`.
*   **Amaç:** Tüm metin efekti sınıflarını (`kalin`, `golge` vb.) merkezi bir `Map` üzerinde toplamak. Bu sayede yeni bir efekt eklemek veya mevcut bir efekti çağırmak kolaylaşır.

### Factory Pattern

Nesne oluşturma mantığını bir "fabrika" sınıfının içine gizler. Hangi türde nesne oluşturulacağına, verilen parametrelere göre bu fabrika karar verir.

*   **Kullanıldığı Yer:** "Mix Pattern - Word App" projesindeki `efektFabrikasi`.
*   **Amaç:** `'kalin'` gibi bir string verildiğinde, `new kalin()` nesnesini otomatik olarak oluşturup döndürmek. Bu, `if/else` veya `switch` blokları olmadan yeni efekt türleri eklemeyi çok kolaylaştırır.

## Kullanılan Teknolojiler

Bu projenin geliştirilmesinde aşağıdaki teknolojiler ve kütüphaneler kullanılmıştır:

*   **HTML5:** Projelerin temel yapısını oluşturur.
*   **CSS3:** Projelere stil ve görsel tasarım kazandırır.
*   **JavaScript (ES6+):** Projelerin tüm interaktifliğini ve mantığını yönetir.
*   **Bootstrap 5:** Hızlı ve duyarlı (responsive) arayüzler oluşturmak için kullanılmıştır.

**Not:** Projeler tamamen istemci tarafında (client-side) çalıştığı için bir Node.js sunucusuna veya veritabanına ihtiyaç duymazlar.

## Kurulum ve Yayınlama

### Yerel Makinede (Lokalde) Çalıştırma

Projeyi kendi bilgisayarınızda test etmek için:

1.  Bu repoyu `git clone` komutuyla klonlayın.
2.  Ana dizinde `index.html` dosyasını bir web tarayıcısında açın.
3.  Görüntülemek istediğiniz projenin "Test Et" veya "İncele" butonuna tıklayın.

### Sunucuda Yayınlama (Deployment)

Bu proje, statik dosyalardan (HTML, CSS, JS) oluştuğu için herhangi bir statik site yayınlama servisinde (Netlify, Vercel, GitHub Pages vb.) kolayca ve ücretsiz bir şekilde canlıya alınabilir.

**GitHub Pages ile Yayınlama Adımları:**

1.  Projenin GitHub deposunda **Settings** sekmesine gidin.
2.  Sol menüden **Pages**'ı seçin.
3.  "Branch" olarak `main` dalını seçin ve **Save** butonuna tıklayın.
4.  Birkaç dakika içinde projeniz `https://kullanici-adiniz.github.io/proje-adiniz/` gibi bir adreste yayında olacaktır.

## Sürekli Geliştirme

Bu koleksiyon yaşayan bir projedir ve sürekli olarak geliştirilmektedir:

*   **Yeni Projeler:** Düzenli aralıklarla yeni ve yaratıcı mini projeler eklenecektir.
*   **Özellik Güncellemeleri:** Mevcut projelere yeni fonksiyonlar ve özellikler eklenerek zenginleştirilecektir.
*   **Kod İyileştirmeleri:** Kod kalitesini artırmak için mevcut projeler periyodik olarak yeniden düzenlenecektir (refactoring).

Projeyi "Watch" veya "Star" ile takip ederek en son güncellemelerden haberdar olabilirsiniz. Katkıda bulunmak isterseniz, her zaman bir "Pull Request" gönderebilirsiniz!
