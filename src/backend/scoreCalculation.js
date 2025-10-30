
/*    
?Sorular
* 1-Türkçe 40
* 2- Matematik 40 
* 3- Sosyal Bilimler
* 4- Fen Bilimleri 20

* --->100 puanı ösym veriyor.
* ---> okul puanı max 60 veriyor. 
*/


const hesaplaBtn = document.getElementById("hesapla");

const turkceDogruInput = document.getElementById("turkceDogru");
const turkceYanlisInput = document.getElementById("turkceYanlis");
const matDogruInput = document.getElementById("matDogru");
const matYanlisInput = document.getElementById("matYanlis");
const sosyalDogruInput = document.getElementById("sosyalDogru");
const sosyalYanlisInput = document.getElementById("sosyalYanlis");
const fenDogruInput = document.getElementById("fenDogru");
const fenYanlisInput = document.getElementById("fenYanlis");
const okulPuaniInput = document.getElementById("okulPuani");

const sonucAlani = document.getElementById("sonucAlani");
const puanSonuc = document.getElementById("puanSonuc");
const toplamNet = document.getElementById("toplamNet");

hesaplaBtn.addEventListener("click", () => {
    const turkceDogru = Number(turkceDogruInput.value) || 0;
    const turkceYanlis = Number(turkceYanlisInput.value) || 0;
    const matDogru = Number(matDogruInput.value) || 0;
    const matYanlis = Number(matYanlisInput.value) || 0;
    const sosyalDogru = Number(sosyalDogruInput.value) || 0;
    const sosyalYanlis = Number(sosyalYanlisInput.value) || 0;
    const fenDogru = Number(fenDogruInput.value) || 0;
    const fenYanlis = Number(fenYanlisInput.value) || 0;
    const okulPuani = Number(okulPuaniInput.value) || 0;

    if (okulPuani === 0) {
        alert("Lütfen okul puanınızı giriniz.");
        return;
    }

    const turkceNet = turkceDogru - (turkceYanlis / 4);
    const matNet = matDogru - (matYanlis / 4);
    const sosyalNet = sosyalDogru - (sosyalYanlis / 4);
    const fenNet = fenDogru - (fenYanlis / 4);

    const toplamDogruSayisi = turkceDogru + matDogru + sosyalDogru + fenDogru;
    const toplamYanlisSayisi = turkceYanlis + matYanlis + sosyalYanlis + fenYanlis;
    const toplamNetSayisi = toplamDogruSayisi - (toplamYanlisSayisi / 4);

    const puan = (toplamNetSayisi * 4) + 100 + okulPuani;

    puanSonuc.textContent = puan.toFixed(3);
    toplamNet.textContent = toplamNetSayisi.toFixed(2);
    sonucAlani.style.display = "block";
});
