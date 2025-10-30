const anaMenu = document.getElementById("anaMenu");
const islemAlani = document.getElementById("islemAlani");
const mesajAlani = document.getElementById("mesajAlani");

const bakiyeBtn = document.getElementById("bakiyeBtn");
const paraCekBtn = document.getElementById("paraCekBtn");
const paraYatirBtn = document.getElementById("paraYatirBtn");

const islemBaslik = document.getElementById("islemBaslik");
const tutarInput = document.getElementById("tutarInput");
const onaylaBtn = document.getElementById("onaylaBtn");
const iptalBtn = document.getElementById("iptalBtn");

let bakiye = 1000;
let mevcutIslem = null; // Hangi işlemde olduğumuzu tutar: 'cek' veya 'yatir'

// Bu fonksiyon, para çekme/yatırma ekranından ana menüye dönmeyi sağlar.
function menuyeDon() {
    islemAlani.style.display = "none"; // Tutar giriş alanını gizle
    anaMenu.style.display = "grid";   // Ana menü butonlarını göster
    tutarInput.value = "";            // Input'un içini temizle
    mevcutIslem = null;               // Mevcut işlemi sıfırla
}

// Bu fonksiyon, para çekme veya yatırma ekranını açar.
function islemEkraniniGoster(islemTipi) {
    anaMenu.style.display = "none";     // Ana menüyü gizle
    islemAlani.style.display = "block"; // Tutar giriş alanını göster
    mesajAlani.textContent = "";        // Önceki mesajları temizle
    mevcutIslem = islemTipi;            // Hangi işlemde olduğumuzu kaydet ('cek' veya 'yatir')

    if (islemTipi === 'cek') {
        islemBaslik.textContent = "Çekmek istediğiniz tutarı giriniz";
    } else if (islemTipi === 'yatir') {
        islemBaslik.textContent = "Yatırmak istediğiniz tutarı giriniz";
    }
}

// "Bakiye Görüntüle" butonuna tıklandığında çalışır.
bakiyeBtn.addEventListener("click", () => {
    mesajAlani.textContent = `Mevcut Bakiyeniz: ${bakiye} ₺`;
    mesajAlani.className = "card-text fw-bold my-3 text-info";
});

// "Para Çek" butonuna tıklandığında para çekme ekranını açar.
paraCekBtn.addEventListener("click", () => {
    islemEkraniniGoster('cek');
});

// "Para Yatır" butonuna tıklandığında para yatırma ekranını açar.
paraYatirBtn.addEventListener("click", () => {
    islemEkraniniGoster('yatir');
});

// "İptal" butonuna tıklandığında ana menüye döner.
iptalBtn.addEventListener("click", () => {
    menuyeDon();
});

// "Onayla" butonuna tıklandığında para çekme veya yatırma işlemini yapar.
onaylaBtn.addEventListener("click", () => {
    const tutar = Number(tutarInput.value);

    if (isNaN(tutar) || tutar <= 0) {
        alert("Lütfen geçerli bir tutar giriniz.");
        return;
    }

    if (mevcutIslem === 'cek') {
        // Burası senin eski kodundaki "case 2" mantığı
        if (tutar > bakiye) {
            mesajAlani.textContent = `Yetersiz bakiye! En fazla ${bakiye} ₺ çekebilirsiniz.`;
            mesajAlani.className = "card-text fw-bold my-3 text-danger";
        } else {
            bakiye -= tutar;
            mesajAlani.textContent = `İşlem başarılı! Yeni bakiyeniz: ${bakiye} ₺`;
            mesajAlani.className = "card-text fw-bold my-3 text-success";
            menuyeDon(); // İşlem sonrası menüye dön
        }
    } else if (mevcutIslem === 'yatir') {
        // Burası senin eski kodundaki "case 3" mantığı
        bakiye += tutar;
        mesajAlani.textContent = `İşlem başarılı! Yeni bakiyeniz: ${bakiye} ₺`;
        mesajAlani.className = "card-text fw-bold my-3 text-success";
        menuyeDon(); // İşlem sonrası menüye dön
    }
});
