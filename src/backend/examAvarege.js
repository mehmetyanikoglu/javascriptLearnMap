/* ders ortlaması bulma*/

/*
vize1 %30
vize2 %30
final %40

*/

const baslat = document.getElementById("baslat");

baslat.addEventListener("click", () => {
    let vize1 = Number(prompt("Vize 1 notunu giriniz. "))
    let vize2 = Number(prompt("Vize 2 notunu giriniz. "))

    let final = Number(prompt("Final notunu giriniz. "))

    let ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);

    if (ortalama >= 60) {
        alert("Ortalamanız: " + ortalama + "--> Tebrikler dersten geçtiniz")
        console.log("tebrikler dersten geçtiniz")
    } else {
        alert("Ortalamanız: " + ortalama + "--> kaldınız, geçmiş olsun :(")
        console.log("kaldınız, geçmiş olsun :(")
    }



})






