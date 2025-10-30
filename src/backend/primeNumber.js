
/*

** ASAL SAYI BULMA

bir asal sayının asal sayı olduğunu anlamak için,

bir asal sayı sadece kendine veya 1 tam bölünür kalanı 0 olur..

örnek; 17 sayısı 17/17 =1 kalan 0   veya 17/1=17 kalan 0 

asal olmayan sayı ise 18 gibi örneğin 18/9,6,3,2 gibi sayılarada bölündüğü için asal değildir.

1 asal sayı olarak kabul edilmez çünkü tek böleni var.

*/

const sayiInput = document.getElementById("sayiInput");
const kontrolEtBtn = document.getElementById("kontrolEtBtn");
const sonucAlani = document.getElementById("sonucAlani");
const sonucMesaji = document.getElementById("sonucMesaji");

function asalMi(sayi) {
    if (sayi <= 1) return false;      // 1 ve altı asal değil
    if (sayi === 2) return true;      // 2 asal
    if (sayi % 2 === 0) return false; // 2 hariç çiftler asal değil

    const sinir = Math.sqrt(sayi);    // kök(sayi) kadar kontrol yeterli
    for (let i = 3; i <= sinir; i += 2) {
        if (sayi % i === 0) return false; // böleni varsa asal değil
    }
    return true;
}

kontrolEtBtn.addEventListener("click", () => {
    const sayi = Number(sayiInput.value);

    if (sayiInput.value === "" || sayi < 0) {
        alert("Lütfen geçerli bir pozitif sayı giriniz.");
        return;
    }

    const sonuc = asalMi(sayi);

    if (sonuc) {
        sonucMesaji.textContent = `${sayi} bir ASAL sayıdır.`;
        sonucMesaji.className = "fs-4 fw-bold text-success";
    } else {
        sonucMesaji.textContent = `${sayi} bir asal sayı DEĞİLDİR.`;
        sonucMesaji.className = "fs-4 fw-bold text-danger";
    }

    sonucAlani.style.display = "block";
});
