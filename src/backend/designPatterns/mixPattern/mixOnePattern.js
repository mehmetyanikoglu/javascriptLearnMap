import app from "../singletonPattern/singletonPatternIndex.js";
  // --- REGISTRY PATTERN (Kayıt Defteri Kalıbı) & ITERATOR PATTERN (Yineleyici Kalıbı) ---
        // Tüm efekt sınıflarını merkezi bir yerde toplamak için kullanılır.
        class sinifKoleksiyonu {
            // Map veri yapısı, sınıflara anahtarları (isimleri) üzerinden hızlı erişim sağlar.
            // Örnek yapı: { 'kalin' => { class: kalin, title: 'Kalın' } }
            constructor() {
                this.siniflar = new Map();
            }

            // Yeni bir sınıfı ve başlığını koleksiyona ekler.
            ekle(sinif, baslik) {
                this.siniflar.set(sinif.name, { class: sinif, title: baslik });
            }

            // Verilen isme göre ilgili sınıfı koleksiyondan getirir.
            sinifGetir(isim) {
                return this.siniflar.get(isim)?.class;
            }

            // --- ITERATOR PATTERN (Yineleyici Kalıbı) ---
            // Bu metot, sınıfın 'for...of' döngüsüyle kullanılabilmesini sağlar (iterable protocol).
            // Koleksiyondaki tüm sınıfların anahtarlarını (isimlerini) bir iterator olarak döndürür.
            [Symbol.iterator]() {
                return this.siniflar.keys();
            }
        }

        const koleksiyon = new sinifKoleksiyonu();

        // --- REGISTRY PATTERN (Kayıt Defteri Kalıbı) - Devamı ---
        // Tüm efekt sınıfları için ortak bir temel sınıf.
        class base {
            // Sınıfların kendi kendini koleksiyona kaydetmesi için statik bir metot.
            static kayit(sinif, baslik) {
                koleksiyon.ekle(sinif, baslik);
            }
        }

        // --- REGISTRY PATTERN: Self-Registration (Sınıfların Kendi Kendini Kaydetmesi) ---
        // Her efekt sınıfı, 'static' blok içinde kendini merkezi 'koleksiyon'a kaydeder.
        class kalin extends base {
            static {
                base.kayit(this, "Kalın");
            }
            olustur(mesaj) {
                const div = document.getElementById("myDiv");
                const ozellikAdi = document.createElement("span");
                const br = document.createElement("br"); // satır sonu
                const b = document.createElement("b");
                ozellikAdi.textContent = `${koleksiyon.siniflar.get('kalin').title}: `;
                b.textContent = `${mesaj}`;

                div.append(ozellikAdi, b, br);
                console.log(`kalin: "${mesaj}"`);
            }
        }

        class yaziTipi extends base {
            static { base.kayit(this, "Yazı Tipi"); }
            olustur(mesaj) {
                const div = document.getElementById("myDiv");
                const ozellikAdi = document.createElement("span");
                const span = document.createElement("span");
                ozellikAdi.textContent = `${koleksiyon.siniflar.get('yaziTipi').title}: `;
                span.textContent = `${mesaj}`;
                span.style.fontFamily = "Roboto, sans-serif";
                const br = document.createElement("br");
                div.append(ozellikAdi, span, br);
                console.log(`yaziTipi: "${mesaj}"`);
            }
        }

        class basAsagi extends base {
            static { base.kayit(this, "Baş Aşağı"); }
            olustur(mesaj) {
                const div = document.getElementById("myDiv");
                const br = document.createElement("br")
                const span = document.createElement("span");
                const ozellikAdi = document.createElement("span");
                ozellikAdi.textContent = `${koleksiyon.siniflar.get('basAsagi').title}: `;
                span.textContent = `${mesaj}`;
                span.style.transform = "rotate(180deg)";
                span.style.display = "inline-block";
                div.append(ozellikAdi, span, br);
                console.log(`basAsagi "${mesaj}"`);
            }
        }

        class kabartma extends base {
            static { base.kayit(this, "Kabartma"); }
            olustur(mesaj) {
                const div = document.getElementById("myDiv");
                const br = document.createElement("br");
                const ozellikAdi = document.createElement("span");
                const span = document.createElement("span");
                ozellikAdi.textContent = `${koleksiyon.siniflar.get('kabartma').title}: `;
                span.textContent = `${mesaj}`;
                span.style.fontWeight = "bold";
                span.style.color = "#000";
                span.style.textShadow = "1px 1px 0 #999, 2px 2px 0 #777, 3px 3px 0 #555";
                div.append(ozellikAdi, span, br);
                console.log(`kabartma "${mesaj}"`);
            }
        }

        class golge extends base {
            static { base.kayit(this, "Gölge"); }
            olustur(mesaj) {
                const div = document.getElementById("myDiv");
                const span = document.createElement("span");
                const br = document.createElement("br");
                const ozellikAdi = document.createElement("span");
                ozellikAdi.textContent = `${koleksiyon.siniflar.get('golge').title}: `;
                span.textContent = `${mesaj}`;
                span.style.textShadow = "2px 2px 5px rgba(0,0,0,0.5)";
                div.append(ozellikAdi, span, br);
                console.log(`golge "${mesaj}"`);
            }
        }

        class ustuCizili extends base {
            static { base.kayit(this, "Üstü Çizili"); }
            olustur(mesaj) {
                const div = document.getElementById("myDiv");
                const ozellikAdi = document.createElement("span");
                const br = document.createElement("br");
                const span = document.createElement("span");
                ozellikAdi.textContent = `${koleksiyon.siniflar.get("ustuCizili").title}: `;
                span.textContent = `${mesaj}`;
                span.style.textDecoration = "line-through";
                div.append(ozellikAdi, span, br);
                
                console.log(`ustuCizili ${mesaj}`);
            }
        }

        class donuk extends base {
            static { base.kayit(this, "Donuk"); }
            olustur(mesaj) {
                const div = document.getElementById("myDiv");
                const ozellikAdi = document.createElement("span");
                const br = document.createElement("br");
                const span = document.createElement("span");
                ozellikAdi.textContent = `${koleksiyon.siniflar.get('donuk').title}: `;
                span.textContent = `${mesaj}`;
                span.style.opacity = "0.5";
                div.append(ozellikAdi, span, br);
                console.log(`donuk "${mesaj}"`);
            }
        }

        class buyutec extends base {
            static { base.kayit(this, "Büyüteç"); }
            olustur(mesaj) {
                const div = document.getElementById("myDiv");
                const ozellikAdi = document.createElement("span");
                const br = document.createElement("br");
                const span = document.createElement("span");
                ozellikAdi.textContent = `${koleksiyon.siniflar.get('buyutec').title}: `;
                span.textContent = `${mesaj}`;
                span.style.transform = "scale(1.5)";
                span.style.display = "inline-block";
                span.style.transformOrigin = "left";
                div.append(ozellikAdi, span, br);
                console.log(`buyutec "${mesaj}"`);
            }
        }

        class bulanik extends base {
            static { base.kayit(this, "Bulanık"); }
            olustur(mesaj) {
                const div = document.getElementById("myDiv");
                const ozellikAdi = document.createElement("span");
                const br = document.createElement("br");
                const span = document.createElement("span");
                ozellikAdi.textContent = `${koleksiyon.siniflar.get('bulanik').title}: `;
                span.textContent = `${mesaj}`;
                span.style.filter = "blur(2px)";
                div.append(ozellikAdi, span, br);
                console.log(`bulanik "${mesaj}"`);
            }
        }

        class tersCevir extends base {
            static { base.kayit(this, "Ters Çevir"); }
            olustur(mesaj) {
                const div = document.getElementById("myDiv");
                const ozellikAdi = document.createElement("span");
                const br = document.createElement("br");
                const span = document.createElement("span");
                ozellikAdi.textContent = `${koleksiyon.siniflar.get('tersCevir').title}: `;
                span.textContent = `${mesaj}`;
                span.style.filter = "invert(1)";
                span.style.backgroundColor = "black";
                span.style.color = "white";
                span.style.display = "inline-block";
                div.append(ozellikAdi, span, br);
                console.log(`tersCevir "${mesaj}"`);
            }
        }

        // --- FACTORY PATTERN (Fabrika Kalıbı) ---
        // İstenen efekt tipine göre ilgili sınıfın bir nesnesini (instance) oluşturur.
        // Bu, 'new' anahtar kelimesini doğrudan kullanmaktan kaçınarak esneklik sağlar.
        class efektFabrikasi {
            efektSec(tip) {
                const EfektSinifi = koleksiyon.sinifGetir(tip);
                if (EfektSinifi) {
                    return new EfektSinifi();
                }
                throw new Error(`Bilinmeyen efekt tipi: ${tip}`);
            }
        }



        // Iterator pattern sayesinde koleksiyondaki tüm efekt isimlerini bir diziye aktar.
        const efektListesi = [...koleksiyon];
        console.log("efektListesi:", efektListesi);
        console.log("Koleksiyon Map'i:", koleksiyon.siniflar);

        // Verilen efekt listesini alıp sırayla ekrana çizen fonksiyon.
        function efektleriCiz(cizilecekEfektler) {
            const efektler = new efektFabrikasi();
            const mesaj = "Mehmet Yanıkoğlu";
            const div = document.getElementById("myDiv");

            // Her çizim öncesi önceki içeriği temizle.
            div.innerHTML = "";

            for (let i = 0; i < cizilecekEfektler.length; i++) {
                const efektTipi = cizilecekEfektler[i];
                const efektNesnesi = efektler.efektSec(efektTipi);
                efektNesnesi.olustur(mesaj);

                // Efektler arasına ayırıcı olarak bir çizgi ekle.
                if (i < cizilecekEfektler.length - 1) {
                    div.append(document.createElement("hr"));
                }
            }
        }

        // Sayfa ilk yüklendiğinde tüm efektleri göster.
        efektleriCiz(efektListesi);

        // Koleksiyondaki her efekt için bir checkbox oluştur ve menüye ekle.
        const myUl = document.getElementById("myUl");
        for (const [isim, deger] of koleksiyon.siniflar) {
            const li = document.createElement("label");
            const x = document.createElement("INPUT");
            x.setAttribute("type", "checkbox");
            x.value = isim;
            x.name = "efekt";
            li.textContent = deger.title;

            myUl.append(li, x);

            console.log(x)
        }

        // Seçili olan tüm checkbox'ların değerlerini (efekt isimlerini) bir dizi olarak döndürür.
        function seciliEfektleriAl() {
            const secilen = document.querySelectorAll('input[name="efekt"]:checked');
            return Array.from(secilen).map(checkbox => checkbox.value);
        }

        const myDiv2 = document.getElementById("myDiv2");
        const btn = document.createElement("BUTTON");
        btn.textContent = "Seçilenleri Uygula";
        myDiv2.append(btn);

        btn.addEventListener("click", () => {
            // Butona tıklandığında, seçili olan efektleri al.
            const secilenEfektler = seciliEfektleriAl();
            const secimSayisi = secilenEfektler.length;
            console.log(`Seçilen Efektler (${secimSayisi} tane):`, secilenEfektler);

            // Kullanıcının belirli bir aralıkta seçim yapmasını sağla.
            if (secimSayisi < 3 || secimSayisi > 7) {
                alert(`Lütfen en az 3, en fazla 7 efekt seçiniz. Siz ${secimSayisi} tane seçtiniz.`);
                return; // Koşul sağlanmazsa işlemi durdur.
            }

            // Seçim geçerliyse, seçilen efektleri ekrana çizdir.
            efektleriCiz(secilenEfektler);
        });

        // Oluşturulan görseli resim olarak indirmek için bir buton ekle.
        const exportBtn = document.createElement("BUTTON");
        exportBtn.textContent = "Resim Olarak İndir";
        myDiv2.append(exportBtn);
        exportBtn.className = "doncuAmca";
       
       


        exportBtn.addEventListener("click", () => {
            // Resme dönüştürülecek olan DOM elementini seç.
            const divToExport = document.getElementById("myDiv");

            // html2canvas kütüphanesi ile seçilen div'i bir canvas elementine çiz.
            html2canvas(divToExport, { scale: 2 }).then(canvas => {
                // Canvas'ı PNG formatında bir data URL'ine dönüştür.
                const imageURL = canvas.toDataURL("image/png");

                // İndirme işlemini tetiklemek için geçici bir <a> elementi oluştur.
                const downloadLink = document.createElement('a');
                downloadLink.href = imageURL;
                downloadLink.download = 'efektli_resim.png'; // İndirilecek dosyanın adı.

                // Linke programatik olarak tıkla ve indirmeyi başlat.
                downloadLink.click();
            });
        });


       