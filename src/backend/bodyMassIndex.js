const kiloInput = document.getElementById("kilo");
const boyInput = document.getElementById("boy");
const hesaplaBtn = document.getElementById("hesapla");
const sonucAlani = document.getElementById("sonucAlani");
const bkiSonuc = document.getElementById("bkiSonuc");
const durumMesaji = document.getElementById("durumMesaji");

hesaplaBtn.addEventListener("click", () => {
    const kilo = Number(kiloInput.value);
    const boy = Number(boyInput.value);

    if (!kilo || !boy || kilo <= 0 || boy <= 0) {
        alert("Lütfen geçerli kilo ve boy değerleri giriniz.");
        return;
    }

    const boyMetre = boy / 100;
    const sonuc = kilo / (boyMetre * boyMetre);

    bkiSonuc.textContent = sonuc.toFixed(2);

    let mesaj = "";
    let renk = "";

    if (sonuc < 18.5) {
        mesaj = "Zayıf";
        renk = "text-warning";
    } else if (sonuc >= 18.5 && sonuc <= 24.9) {
        mesaj = "Normal Kilolu";
        renk = "text-success";
    } else if (sonuc >= 25 && sonuc <= 29.9) {
        mesaj = "Fazla Kilolu";
        renk = "text-warning";
    } else if (sonuc >= 30 && sonuc <= 39.9) {
        mesaj = "Obez";
        renk = "text-danger";
    } else if (sonuc >= 40) {
        mesaj = "İleri Derecede Obez";
        renk = "text-danger fw-bold";
    }

    durumMesaji.textContent = mesaj;
    durumMesaji.className = `fs-5 ${renk}`;

    sonucAlani.style.display = "block";
});
