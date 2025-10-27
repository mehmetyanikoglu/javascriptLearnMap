 // --- REGISTRY PATTERN (Kayıt Defteri Kalıbı) & ITERATOR PATTERN (Yineleyici Kalıbı) ---
        // Bütün efekt sınıflarını toplayacağımız bir nevi muhtar azası.
        // Adı 'sinifKoleksiyonu', kendisi tam bir görev adamı.
        class sinifKoleksiyonu {
            // Map kullanıyoruz ki "bu kimdi ya?" diye aratması kolay olsun.
            // Yapısı şöyle bir şey: { 'kalin' => { class: kalin, title: 'Kalın' } }
            constructor() {
                this.siniflar = new Map();
            }

            // Yeni gelen sınıfı ve başlığını kütüğe işliyor.
            ekle(sinif, baslik) {
                this.siniflar.set(sinif.name, { class: sinif, title: baslik });
            }

            // "Bana 'kalin' lazım!" dediğinde sınıfın kendisini bulup getirir.
            sinifGetir(isim) {
                return this.siniflar.get(isim)?.class;
            }

            // --- ITERATOR PATTERN (Yineleyici Kalıbı) ---
            // Bu sihirli metot sayesinde 'for...of' ile koleksiyonun içinde fink atabiliyoruz.
            // Bize bütün sınıfların isimlerini (key'lerini) sırayla veriyor.
            [Symbol.iterator]() {
                return this.siniflar.keys();
            }
        }

        const koleksiyon = new sinifKoleksiyonu();

        // --- REGISTRY PATTERN (Kayıt Defteri Kalıbı) - Devamı ---
        // Bütün efektlerin atası, soyadı kanunu gibi bir şey.
        class base {
            // Bu metot sayesinde her sınıf doğar doğmaz kendini 'koleksiyon'a yazdırıyor.
            static kayit(sinif, baslik) {
                koleksiyon.ekle(sinif, baslik);
            }
        }

        // --- REGISTRY PATTERN: Self-Registration (Sınıfların Kendi Kendini Kaydetmesi) ---
        // Aşağıdaki her bir efekt sınıfı, 'static' blok içinde kendini merkezi 'koleksiyon'a kaydeder.
        class kalin extends base {
            static {
                base.kayit(this, "Kalın");
            }
            olustur(mesaj) {
                const div = document.getElementById("myDiv");
                const ozellikAdi = document.createElement("span");
                const br = document.createElement("br"); // satır sonu
                const b = document.createElement("b"); // <b> etiketi oluştur
                ozellikAdi.textContent = `${koleksiyon.siniflar.get('kalin').title}: `;
                b.textContent = `${mesaj}`;   // kullanıcıdan gelen veriyi güvenli şekilde ekle

                div.append(ozellikAdi, b, br); // güvenli biçimde DOM’a ekle
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
        // Burası efekt üretim bandı. Ne istersen onu üretiyor.
        // "bana bir 'kalin' çek" diyorsun, o sana 'new kalin()' veriyor.
        class efektFabrikasi { // Fabrika kalıbı dediğin budur işte.
            efektSec(tip) {
                const EfektSinifi = koleksiyon.sinifGetir(tip);
                if (EfektSinifi) {
                    return new EfektSinifi();
                }
                throw new Error(`Bilinmeyen efekt tipi: ${tip}`);
            }
        }



        // Koleksiyondaki tüm efektleri hop diye bir diziye atıyoruz. Iterator saolsun.
        const efektListesi = [...koleksiyon];
        console.log("efektListesi:", efektListesi);
        console.log("Koleksiyon Map'i:", koleksiyon.siniflar);

        // Bu fonksiyon bizim amele. Ver listeyi, çizsin ekrana.
        function efektleriCiz(cizilecekEfektler) {
            const efektler = new efektFabrikasi();
            const mesaj = "Mehmet Yanıkoğlu";
            const div = document.getElementById("myDiv");

            // Ortalığı bir temizleyelim, sonra yine batırırız.
            div.innerHTML = "";

            for (let i = 0; i < cizilecekEfektler.length; i++) {
                const efektTipi = cizilecekEfektler[i];
                const efektNesnesi = efektler.efektSec(efektTipi);
                efektNesnesi.olustur(mesaj);

                // Sonuncusu değilse araya bir çizgi çekelim de karışmasın.
                if (i < cizilecekEfektler.length - 1) {
                    div.append(document.createElement("hr"));
                }
            }
        }

        // Sayfa açılır açılmaz bütün marifetlerimizi bir dökelim.
        efektleriCiz(efektListesi);

        // Şimdi de menüyü hazırlayalım. Checkbox'lar geliyor!
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

        // "Kimler seçilmiş bi bakalım" fonksiyonu.
        function seciliEfektleriAl() {
            const secilen = document.querySelectorAll('input[name="efekt"]:checked');
            // Seçilenleri topla, dizi yap, isimlerini (value) al, tamamdır.
            return Array.from(secilen).map(checkbox => checkbox.value);
        }

        const myDiv2 = document.getElementById("myDiv2");
        const btn = document.createElement("BUTTON");
        btn.textContent = "Seçilenleri Uygula"; // Buton metnini eklemenin daha kısa yolu.
        myDiv2.append(btn);

        btn.addEventListener("click", () => {
            // Butona tıklandığında, o an seçili olan efektleri al.
            const secilenEfektler = seciliEfektleriAl();
            const secimSayisi = secilenEfektler.length;
            console.log(`Seçilen Efektler (${secimSayisi} tane):`, secilenEfektler);

            // Abartmayalım lütfen, 3'ten az 7'den çok olmasın.
            if (secimSayisi < 3 || secimSayisi > 7) {
                alert(`Lütfen en az 3, en fazla 7 efekt seçiniz. Siz ${secimSayisi} tane seçtiniz.`);
                return; // Uymazsa yol ver gitsin.
            }

            // Her şey yolundaysa, seçilenleri çizdirelim.
            efektleriCiz(secilenEfektler);
        });

        // Ve final! Yaptığımız sanat eserini indiriyoruz.
        const exportBtn = document.createElement("BUTTON");
        exportBtn.textContent = "Resim Olarak İndir";
        myDiv2.append(exportBtn);

        exportBtn.addEventListener("click", () => {
            // Resme dönüştürülecek olan div'i seç.
            const divToExport = document.getElementById("myDiv");

            // html2canvas'e diyoruz ki "Al şu div'i, resim yap!". O da "Tamamdır, bitince haber veririm (Promise)" diyor.
            html2canvas(divToExport, { scale: 2 }).then(canvas => {
                // Canvas'ı bir resim URL'sine (data URL) çevir.
                const imageURL = canvas.toDataURL("image/png");

                // Görünmez bir link oluşturup indirme işlemini tetikliyoruz. Klasik numara.
                const downloadLink = document.createElement('a');
                downloadLink.href = imageURL;
                downloadLink.download = 'efektli_resim.png'; // İndirilecek dosyanın adı.

                // Linke tıkla, işi bitince de ortadan kaybolsun.
                downloadLink.click();
            });
        });


       