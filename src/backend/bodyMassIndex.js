const baslat = document.getElementById("baslat");

baslat.addEventListener("click", () => {
   
let kilo = Number(prompt("Kilonuzu giriniz"))
let boy = Number(prompt("boyunuzu giriniz (cm cinsinden giriniz)"))

boy = boy/100;

let sonuc = kilo/(boy*2);

sonuc = parseFloat(sonuc.toFixed(2))

if(sonuc<18.5){
    alert("Sonuc: "+sonuc+" Zayıf bir birey")
}else if(sonuc >= 18.5 && sonuc <= 24.9){
    alert("Sonuc: "+sonuc+" Sağlıklı bir birey")
}else if(sonuc >=25 && sonuc <= 29.9){
    alert("Sonuc: "+sonuc+" Kilolu bir birey")
}else if(sonuc >=30 && sonuc <= 39.9){
    alert("Sonuc: "+sonuc+" Obez bir birey")
}else if(sonuc >= 40){
    alert("Sonuc: "+sonuc+" Aşırı obez bir birey")
}

})

