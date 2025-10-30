 // --- HTML'deki Elementleri Seçme Bölümü ---
        // Sayfadaki açılır menüyü (select) ve tabloyu kod içinde kullanmak için seçiyoruz.
        const bazParaBirimiSelect = document.getElementById('base-currency-select');
        const kurTablosuGovdesi = document.getElementById('currency-table-body');

        // --- Ayarlar ve Sabit Değişkenler ---
        const apiAnahtari = "fca_live_O5QsX0bVkUayELupsS5p0GWnyx1AgWqaVZEJneDb";
        const anaUrl = "https://api.freecurrencyapi.com/v1/";

        // API'den gelen tüm para birimlerinin adını ve sembolünü saklayacağımız bir nesne.
        let tumParaBirimleri = {};

        /**
         * API'den anlık kur verilerini çeken ve tabloyu güncelleyen fonksiyon.
         * @param {string} bazParaBirimi - Hangi para birimini temel alacağımız (örneğin: "TRY")
         */
        async function kurlariGetirVeGoster(bazParaBirimi = "TRY") {
            // Önceki verileri temizleyip kullanıcıya "Yükleniyor..." mesajı gösterelim.
            kurTablosuGovdesi.innerHTML = '<tr><td colspan="2">Veriler yükleniyor...</td></tr>';

            // API'ye hangi adrese istek atacağımızı belirliyoruz.
            const adres = `${anaUrl}latest?apikey=${apiAnahtari}&base_currency=${bazParaBirimi}`;

            try {
                // `fetch` komutu ile adrese isteğimizi gönderiyoruz ve cevabın gelmesini `await` ile bekliyoruz.
                const yanit = await fetch(adres);
                if (!yanit.ok) { // Eğer cevapta bir sorun varsa (örn: 404 Not Found)
                    throw new Error(`API Hatası: ${yanit.statusText}`);
                }

                // Gelen cevabı `.json()` metoduyla JavaScript'in anlayacağı bir nesneye çeviriyoruz.
                // Destructuring kullanarak direkt `data` kısmını alıyoruz: { data }
                const { data: gelenVeri } = await yanit.json();

                // Yeni verileri eklemeden önce tabloyu tamamen temizliyoruz.
                kurTablosuGovdesi.innerHTML = '';

                // Gelen her bir para birimi ve değeri için tabloya yeni bir satır (row) ekleyeceğiz.
                // Object.entries ile nesneyi [anahtar, değer] şeklinde bir diziye çevirip döngüye sokuyoruz.
                for (const [paraBirimi, kurDegeri] of Object.entries(gelenVeri)) {

                    // Eğer döngüdeki para birimi, bizim temel aldığımız para birimiyle aynıysa,
                    // onu listeye eklemeye gerek yok. Bu yüzden bu adımı atlıyoruz.
                    if (paraBirimi === bazParaBirimi) {
                        continue; // Döngünün bu adımını atla, bir sonraki para birimine geç.
                    }

                    // Tabloya eklemek için yeni bir satır elementi (<tr>) oluşturuyoruz.
                    const satir = document.createElement('tr');

                    // Para biriminin adını gösterecek hücreyi (<td>) oluşturuyoruz.
                    const paraBirimiHucresi = document.createElement('td');
                    // Daha önce kaydettiğimiz `tumParaBirimleri` nesnesinden para biriminin tam adını buluyoruz.
                    const paraBirimiBilgisi = tumParaBirimleri[paraBirimi] ? `${tumParaBirimleri[paraBirimi].name}` : paraBirimi;
                    paraBirimiHucresi.textContent = paraBirimiBilgisi;
                    paraBirimiHucresi.classList.add('paraBirimiHucresi');

                    // Kurun değerini gösterecek hücreyi (<td>) oluşturuyoruz.
                    const kurDegeriHucresi = document.createElement('td');
                    // API bize 1 TRY'nin kaç USD olduğunu verir (örn: 0.03). 
                    // Ama biz 1 USD'nin kaç TRY olduğunu görmek isteriz. Bu yüzden 1'i gelen değere bölüyoruz (1 / 0.03).
                    kurDegeriHucresi.textContent = (1 / kurDegeri).toFixed(4);
                    kurDegeriHucresi.classList.add('kurDegerHucresi');

                    //kur sembolü hücresi ekleyelim.
                    const kurSemboluHucresi = document.createElement('td');
                    kurSemboluHucresi.textContent = tumParaBirimleri[paraBirimi].symbol_native;
                    kurSemboluHucresi.classList.add('kurSemboluHucresi');


                    //kur Kodu hücresi ekleyelim.
                    const kurKoduHucresi = document.createElement('td');
                    kurKoduHucresi.textContent = `(${paraBirimi})`;
                    kurKoduHucresi.classList.add('kurKoduHucresi');




                    // Oluşturduğumuz iki hücreyi satıra ekliyoruz.
                    satir.appendChild(paraBirimiHucresi);
                    satir.appendChild(kurDegeriHucresi);
                    satir.appendChild(kurSemboluHucresi);
                    satir.appendChild(kurKoduHucresi);
                    // Hazırladığımız bu satırı da tablonun gövdesine ekliyoruz.
                    kurTablosuGovdesi.appendChild(satir);
                }
            } catch (hata) {
                console.error("Kur verileri alınırken hata oluştu:", hata);
                kurTablosuGovdesi.innerHTML = '<tr><td colspan="2">Veriler alınamadı. Lütfen tekrar deneyin.</td></tr>';
            }
        }

        /**
         * API'den mevcut tüm para birimlerini çekip açılır menüyü dolduran fonksiyon.
         */
        async function paraBirimiSeciminiDoldur() {
            const adres = `${anaUrl}currencies?apikey=${apiAnahtari}`;

            try {
                const yanit = await fetch(adres);
                if (!yanit.ok) {
                    throw new Error(`API Hatası: ${yanit.statusText}`);
                }
                const { data: gelenVeri } = await yanit.json();
                
              

                // Gelen para birimi listesini daha sonra kullanmak üzere saklıyoruz.
                tumParaBirimleri = gelenVeri;

                // Açılır menünün içini temizliyoruz.
                bazParaBirimiSelect.innerHTML = '';

                // Gelen her bir para birimi için menüye bir seçenek (<option>) ekliyoruz.
                for (const [kod, detaylar] of Object.entries(gelenVeri)) {
                    const secenek = document.createElement('option');
                    secenek.value = kod; // Seçeneğin değeri (örn: "USD")
                    secenek.textContent = `${detaylar.name} (${kod})`; // Görünen yazı (örn: "US Dollar (USD)")
                    bazParaBirimiSelect.appendChild(secenek);
                    /*console.log(detaylar)*/
                }

                // Başlangıçta menüde Türk Lirası'nın seçili gelmesini sağlıyoruz.
                bazParaBirimiSelect.value = "TRY";

            } catch (hata) {
                console.error("Para birimleri listesi alınırken hata oluştu:", hata);
                bazParaBirimiSelect.innerHTML = '<option>Para birimleri yüklenemedi.</option>';
            }
        }

        // --- UYGULAMAYI BAŞLATAN BÖLÜM ---
        async function uygulamayiBaslat() {
            // 1. Önce açılır menüyü para birimleriyle doldur.
            await paraBirimiSeciminiDoldur();

            // 2. Sonra, başlangıçta seçili olan para birimine (TRY) göre kurları getir ve göster.
            await kurlariGetirVeGoster(bazParaBirimiSelect.value);

            // 3. Açılır menüde kullanıcı yeni bir seçim yaptığında ne olacağını dinle.
            bazParaBirimiSelect.addEventListener('change', (olay) => {
                // Kullanıcının seçtiği yeni para biriminin değerini al.
                const yeniBazParaBirimi = olay.target.value;
                // Tabloyu bu yeni para birimine göre güncelle.
                kurlariGetirVeGoster(yeniBazParaBirimi);
            });
        }

        // Her şey hazır olduğuna göre, uygulamayı başlatalım!
        uygulamayiBaslat();