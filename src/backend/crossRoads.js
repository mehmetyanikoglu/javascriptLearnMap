const yol1Btn = document.getElementById("yol1");
const yol2Btn = document.getElementById("yol2");
const yol3Btn = document.getElementById("yol3");
const tekrarOynaBtn = document.getElementById("tekrarOyna");

const hikayeParagrafi = document.getElementById("hikaye");
const secimlerDiv = document.getElementById("secimler");
const sonucAlaniDiv = document.getElementById("sonucAlani");
const sonucMesaji = document.getElementById("sonucMesaji");

function sonucuGoster(mesaj) {
    hikayeParagrafi.style.display = "none";
    secimlerDiv.style.display = "none";
    sonucMesaji.innerHTML = mesaj; // innerHTML kullanarak <br> gibi etiketleri işleyebiliriz.
    sonucAlaniDiv.style.display = "block";
}

yol1Btn.addEventListener("click", () => {
    const mesaj = "Yosunlu taşları takip ettin ve antik bir tapınağın kalıntılarına ulaştın. <br>İçeride unutulmuş bir hazine sandığı buldun! 💎";
    sonucuGoster(mesaj);
});

yol2Btn.addEventListener("click", () => {
    const mesaj = "Karanlık mağaraya cesurca girdin. Gözleri parlayan bir ejderha ile karşılaştın! 🐉 <br>Neyse ki dost canlısıydı ve sana bilgece öğütler verdi.";
    sonucuGoster(mesaj);
});

yol3Btn.addEventListener("click", () => {
    const mesaj = "Işıltılı nehri takip ettin ve gizli bir şelalenin arkasında saklı, perilerin yaşadığı bir köye vardın. ✨ <br>Seni misafir edip büyülü meyveler ikram ettiler.";
    sonucuGoster(mesaj);
});

tekrarOynaBtn.addEventListener("click", () => {
    hikayeParagrafi.style.display = "block";
    secimlerDiv.style.display = "grid"; // Orijinal display değerine döndürüyoruz.
    sonucAlaniDiv.style.display = "none";
    sonucMesaji.textContent = "";
});
