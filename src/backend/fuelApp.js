const yakitTipiSelect = document.getElementById("yakitTipi");
const yakitLitresiInput = document.getElementById("yakitLitresi");
const bakiyeInput = document.getElementById("bakiye");
const hesaplaBtn = document.getElementById("hesapla");
const sonucAlani = document.getElementById("sonucAlani");
const sonucMesaji = document.getElementById("sonucMesaji");

/*
| Yakıt Türü                      | Fiyat (TL/Litre) |
| ------------------------------- | ---------------- |
| **Kurşunsuz Benzin (95 Oktan)** | 52,34            |
| **Motorin (Diesel)**            | 55,44            |
| **LPG (Otogaz)**                | 27,71            |
*/
const fiyatlar = {
    "1": 52.34, // Dizel
    "2": 55.44, // Motorin
    "3": 27.71  // LPG
};

hesaplaBtn.addEventListener("click", () => {
    const yakitTipi = yakitTipiSelect.value;
    const yakitLitresi = Number(yakitLitresiInput.value);
    const bakiye = Number(bakiyeInput.value);

    if (!yakitLitresi || !bakiye || yakitLitresi <= 0 || bakiye <= 0) {
        alert("Lütfen geçerli litre ve bakiye bilgisi giriniz.");
        return;
    }

    const birimFiyat = fiyatlar[yakitTipi];
    const odenecekTutar = birimFiyat * yakitLitresi;

    let mesaj = "";
    let renk = "";

    if (odenecekTutar <= bakiye) {
        const paraUstu = bakiye - odenecekTutar;
        mesaj = `✅ Yakıt alma işlemi başarılı! <br>
                 Ödenen Tutar: <strong>${odenecekTutar.toFixed(2)} ₺</strong> <br>
                 Para Üstü: <strong>${paraUstu.toFixed(2)} ₺</strong>`;
        renk = "text-success";
    } else {
        const eksikTutar = odenecekTutar - bakiye;
        mesaj = `❌ Bakiye yetersiz! <br>
                 Ödenecek Tutar: <strong>${odenecekTutar.toFixed(2)} ₺</strong> <br>
                 Eksik Tutar: <strong class="text-danger">${eksikTutar.toFixed(2)} ₺</strong>`;
        renk = "text-warning";
    }

    sonucMesaji.innerHTML = mesaj;
    sonucMesaji.className = `fs-5 ${renk}`;
    sonucAlani.style.display = "block";
});
