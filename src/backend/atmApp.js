const baslat = document.getElementById("baslat");

baslat.addEventListener("click", () => {

    let bakiye = 1000;
    let yeniSatir = "\r\n";
    let metin =
        "1-Bakiye görüntüleme" + yeniSatir
        + "2-Para çekme" + yeniSatir
        + "3-Para yatırma" + yeniSatir
        + "4-Çıkış" + yeniSatir
        + "Lütfen bir değer seçiniz:";

    //alert metin
    let secim = prompt(metin);

    switch (secim) {
        case "1":
            alert("Bakiyeniz: " + bakiye);
            break;
        case "2":
            let cekilecekTutar = Number(prompt("Çekilecek tutarı giriniz"))
            if (cekilecekTutar < bakiye) {
                //başarılı
                bakiye = bakiye - cekilecekTutar;
                alert("Kalan bakiye: " + bakiye);
            } else {
                alert("Bakiyeniz yetersiz işlem gerçekleştirilemedi" + yeniSatir
                    + "Bakiyeniz: " + bakiye + yeniSatir
                    + "Çekilecek tutar: " + cekilecekTutar
                )
            }
            break;

        case "3":
            let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz: "))
            bakiye = bakiye + yatirilacakTutar;
            alert("Güncel bakiyeniz: "+bakiye)
            break;
        case "4":
            alert("sistemden çıkış yapılmıştır...")
            break;
            
        default: 
        alert("Lütfen 1-4 arasında değer giriniz!")
    }  




})

