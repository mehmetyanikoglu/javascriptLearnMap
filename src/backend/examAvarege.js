/* ders ortlaması bulma*/

/*
vize1 %30
vize2 %30
final %40

*/

const vize1Input = document.getElementById("vize1");
const vize2Input = document.getElementById("vize2");
const finalInput = document.getElementById("final");
const hesaplaBtn = document.getElementById("hesapla");
const sonucAlani = document.getElementById("sonucAlani");
const ortalamaSonuc = document.getElementById("ortalamaSonuc");
const durumMesaji = document.getElementById("durumMesaji");

hesaplaBtn.addEventListener("click", () => {
    const vize1 = Number(vize1Input.value);
    const vize2 = Number(vize2Input.value);
    const final = Number(finalInput.value);

    if (vize1Input.value === "" || vize2Input.value === "" || finalInput.value === "") {
        alert("Lütfen tüm not alanlarını doldurunuz.");
        return;
    }

    const ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);

    ortalamaSonuc.textContent = ortalama.toFixed(2); // Ortalamayı 2 ondalık basamakla göster

    if (ortalama >= 60) {
        durumMesaji.textContent = "🎉 Tebrikler, dersi geçtiniz! 🎉";
        durumMesaji.className = "fs-5 text-success";
    } else {
        durumMesaji.textContent = "😔 Maalesef dersten kaldınız. 😔";
        durumMesaji.className = "fs-5 text-danger";
    }

    sonucAlani.style.display = "block"; // Sonuç alanını görünür yap
});
