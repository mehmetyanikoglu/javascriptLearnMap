const yoluSec = document.getElementById("yoluSec");





yoluSec.addEventListener("click", () => {
    let secilenYol = Number(prompt("Sayı ile 1,2,3 yollarından birini seçiniz"))

    if (secilenYol === 1) {
        return alert("Seçilen Yol: " + secilenYol + ". yoldur.")
    } else if (secilenYol === 2) {
        return alert("Seçilen Yol: " + secilenYol + ". yoldur.")
    } else if (secilenYol === 3) {
        return alert("Seçilen Yol: " + secilenYol + ". yoldur.")
    } else {
        return alert("lütfen geçerli yol seçniz.")
    }

})


