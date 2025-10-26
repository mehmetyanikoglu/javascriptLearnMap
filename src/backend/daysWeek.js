
const baslat = document.getElementById("baslat");
const test = document.getElementById("test")

baslat.addEventListener("click", () => {

let yeniSatir = "\r\n";

let metin = 
"1-Pazartesi"+yeniSatir
+"2-Salı"+yeniSatir
+"3-Çarşamba"+yeniSatir
+"4-Perşembe"+yeniSatir
+"5-Cuma"+yeniSatir
+"6-Cumartesi"+yeniSatir
+"7-Pazar"+yeniSatir
+"Lütfen Seçim Yapınız";

let deger = prompt(metin);

switch(deger){
    case "1":
        test.textContent = "Pazartesi Günü";
        test.style.color = "red";
        console.log("Pazartesi Günü");
        break;
    case "2":
        test.textContent = "Salı Günü";
        test.style.color = "red";
        console.log("Salı Günü");
        break;
    case "3":
        test.textContent = "Çarşamba Günü";
        test.style.color = "red";
        console.log("Çarşamba Günü");
        break;
    case "4":
        test.textContent = "Perşembe Günü";
        test.style.color = "red";
        console.log("Perşembe Günü");
        break;
    case "5":
        test.textContent = "Cuma Günü";
        test.style.color = "red";
        console.log("Cuma Günü");
        break;
    case "6":
        test.textContent = "Cumartesi Günü";
        test.style.color = "red";
        console.log("Cumartesi Günü");
        break;
    case "7":
        test.textContent = "Pazar Günü";
        test.style.color = "red";
        console.log("Pazar Günü");
        break;
}

})

