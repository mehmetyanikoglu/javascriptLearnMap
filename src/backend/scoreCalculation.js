
/*    
?Sorular
* 1-Türkçe 40
* 2- Matematik 40 
* 3- Sosyal Bilimler
* 4- Fen Bilimleri 20

* --->100 puanı ösym veriyor.
* ---> okul puanı max 60 veriyor. 
*/


const baslat = document.getElementById("baslat");
const sonuc = document.getElementById("sonuc");
const cikis = document.getElementById("cikis");

baslat.addEventListener("click", () => {

    let turkceDogru, turkceYanlis = 0;
    let matematikDogru, mateamtikYanlis = 0;
    let sosyalDogru, sosyalYanlis = 0;
    let fenDogru, fenYanlis = 0;
    let puan = 0;
    let okulPuani;

    let yeniSatir = "\r\n";

    let mesaj =
        "TYT puan hesaplama uygulamasına hoşgeldiniz" + yeniSatir
        + "1-Puan hesapla" + yeniSatir
        + "2-Çıkış yap";

    //alert mesaj

    let secim = prompt(mesaj);

    switch (secim) {
        case "1":
            okulPuani = Number(prompt("Okul puanını giriniz"))
            turkceDogru = Number(prompt("Türkçe doğru sayısı giriniz"))
            turkceYanlis = Number(prompt("Türkçe Yanlış sayısı giriniz"))

            matematikDogru = Number(prompt("Matematik doğru sayısı giriniz"))
            mateamtikYanlis = Number(prompt("Matematik Yanlış sayısı giriniz"))

            sosyalDogru = Number(prompt("Sosyal Bilimler doğru sayısı giriniz"))
            sosyalYanlis = Number(prompt("Sosyal Bilimler Yanlış sayısı giriniz"))

            fenDogru = Number(prompt("Fen Bilimleri doğru sayısı giriniz"))
            fenYanlis = Number(prompt("Fen Bilimleri Yanlış sayısı giriniz"))

            let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
            let yanlisSayisi = turkceYanlis + mateamtikYanlis + sosyalYanlis + fenYanlis;

            let kalanDogruSayisi = dogruSayisi - (yanlisSayisi / 4);// 4 yanlış bir doğruyu götürür
            puan = (kalanDogruSayisi * 4) + 100 + okulPuani;
            alert("TYT puan sonucu: " + puan);
            sonuc.textContent = puan
            break;
        case "2":
            alert("uygulamadan çıkış yapıldı.")
            cikis.textContent = "Çıkış yapılmıştır.";
            cikis.style.color= "red";
            break;
        default:
            break;
    }
})
