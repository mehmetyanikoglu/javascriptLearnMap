const baslat = document.getElementById("baslat");
/*
| Yakıt Türü                      | Fiyat (TL/Litre) |
| ------------------------------- | ---------------- |
| **Kurşunsuz Benzin (95 Oktan)** | 52,34            |
| **Motorin (Diesel)**            | 55,44            |
| **LPG (Otogaz)**                | 27,71            |


*/
baslat.addEventListener("click", () => {

    let dizel = 52.34;//tip 1
    let motorin = 55.44;//tip 2
    let lpg = 27.71;// tip 3

    const yeniSatir = '\r\n';
    const yakitMetni =
        "1-Dizel: " + dizel + " TL" + yeniSatir +
        "1-Motorin: " + motorin + " TL" + yeniSatir +
        "1-LPG: " + lpg + " TL" + yeniSatir
        + "yakıt türünü seçiniz";
    ;

    let yakitTipi = Number(prompt(yakitMetni));
    let yakitLitresi = Number(prompt("yakıt litresini giriniz"))
    let bakiye = Number(prompt("bakiyenizi giriniz"))

    if (yakitTipi === 1) {
        //DİZEL
        let odenecekTutar = dizel * yakitLitresi;
        odenecekTutar = odenecekTutar.toFixed(2)
        if (odenecekTutar < bakiye) {
            //bakiye yeterli
            alert("Yakıt alma işlemi başarılı" + yeniSatir + "para üstü:" + (bakiye - odenecekTutar).toFixed(2));
        } else {
            // bakiye yeterli değil

            alert(
                "bakiyeniz yeterli değildir." + yeniSatir
                + "Ödenecek tutar: " + odenecekTutar + yeniSatir
                + "Bakiye: " + bakiye + yeniSatir
                + "Eksik tutar: " + (odenecekTutar - bakiye).toFixed(2)

            );
        }
    } else if (yakitTipi === 2) {
        //MOTORİN
        let odenecekTutar = motorin * yakitLitresi;
        odenecekTutar = odenecekTutar.toFixed(2)
        if (odenecekTutar < bakiye) {
            //bakiye yeterli
            alert("Yakıt alma işlemi başarılı" + yeniSatir + "para üstü:" + (bakiye - odenecekTutar).toFixed(2));
        } else {
            // bakiye yeterli değil

            alert(
                "bakiyeniz yeterli değildir." + yeniSatir
                + "Ödenecek tutar: " + odenecekTutar + yeniSatir
                + "Bakiye: " + bakiye + yeniSatir
                + "Eksik tutar: " + (odenecekTutar - bakiye).toFixed(2)

            );
        }
    } else if (yakitTipi === 3) {
        //LPG
        let odenecekTutar = lpg * yakitLitresi;
        odenecekTutar = odenecekTutar.toFixed(2)
        if (odenecekTutar < bakiye) {
            //bakiye yeterli
            alert("Yakıt alma işlemi başarılı" + yeniSatir + "para üstü:" + (bakiye - odenecekTutar).toFixed(2));
        } else {
            // bakiye yeterli değil

            alert(
                "bakiyeniz yeterli değildir." + yeniSatir
                + "Ödenecek tutar: " + odenecekTutar + yeniSatir
                + "Bakiye: " + bakiye + yeniSatir
                + "Eksik tutar: " + (odenecekTutar - bakiye).toFixed(2)

            );
        }
    } else {
        alert("lütfen geçerli bir yakıt türü seçiniz");
    }
})

