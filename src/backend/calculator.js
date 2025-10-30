
    const veriGirisi = document.getElementById("veriGirisi");
    const hesapla = document.getElementById("hesapla");
    const topla = document.getElementById("topla");
    const cikar = document.getElementById("cikar");
    const sonuc = document.getElementById("sonuc");
    const reset = document.getElementById("reset");
    const carpma = document.getElementById("carpma");
    const bolme = document.getElementById("bolme");
    const faktoriyel = document.getElementById("faktoriyel");
    const eulerSayisi = document.getElementById("eulerSayisi");
    const piSayisi = document.getElementById("piSayisi");
    const usluSayi = document.getElementById("usluSayi");
    const karekok = document.getElementById("karekok");
    const kupkok = document.getElementById("kupkok");

    let sayilar = 0;

    class Islemler {
      toplamaYap() {
        let ilksayi = sayilar
        sonuc.textContent = `${ilksayi} + `
        sayilar = Number(veriGirisi.value);
        let ikincisayi = Number(veriGirisi.value);
        if (ilksayi === 0) {
          const toplam = ikincisayi + ikincisayi;
          veriGirisi.value = "";
          sayilar = toplam
          sonuc.textContent = `${ikincisayi} + ${ikincisayi} `
        } else {
          const toplam = ilksayi + sayilar;
          veriGirisi.value = "";
          sayilar = 0;
          sayilar = toplam
          sonuc.textContent = `${ilksayi} + ${ikincisayi} `
        }

        console.log(sayilar)

      }

      cikarmaYap() {
        let ilksayi = sayilar
        sonuc.textContent = `${ilksayi} + `;
        sayilar = Number(veriGirisi.value);
        let ikincisayi = Number(veriGirisi.value);
        const toplam = ilksayi - ikincisayi;
        veriGirisi.value = "";
        sayilar = 0;
        sayilar = toplam;
        sonuc.textContent = `${ilksayi} - ${ikincisayi} `
        console.log(sayilar)
      }

      bolmeYap() {
        let ilksayi = sayilar
        sonuc.textContent = `${ilksayi} + `;
        sayilar = Number(veriGirisi.value);
        let ikincisayi = Number(veriGirisi.value);
        if (ilksayi !== 0) {
          let toplam = ilksayi / ikincisayi;
          veriGirisi.value = "";
          sayilar = 0;
          sayilar = toplam;
          sonuc.textContent = `${ilksayi} / ${ikincisayi} `
        } else {
          ilksayi = 1;
          veriGirisi.value = "";
          sonuc.textContent = `${ikincisayi} / `

        }
        console.log(sayilar)
      }

      carpmaYap() {
        let ilksayi = sayilar
        sonuc.textContent = `${ilksayi} + `;
        sayilar = Number(veriGirisi.value);
        let ikincisayi = Number(veriGirisi.value);
        if (ilksayi !== 0) {
          let toplam = ilksayi * ikincisayi;
          veriGirisi.value = "";
          sayilar = 0;
          sayilar = toplam;
          sonuc.textContent = `${ilksayi} x ${ikincisayi} `
        } else {
          ilksayi = 1;
          veriGirisi.value = "";
          sonuc.textContent = `${ikincisayi} x `

        }
        console.log(sayilar)
      }

      faktoriyelBul() {
        let sayi = Number(veriGirisi.value);
        if (sayi > 170 || sayi < 0 || isNaN(sayi)) {
          alert("Sayı 171'den küçük ve pozitif sayı olmalıdır.");
        } else {
          let toplam = 1;
          for (let i = 1; i <= sayi; i++) {
            toplam *= i;
          }
          sayilar = toplam
          veriGirisi.value = "";
          sonuc.textContent = `${sayi}!`
        }
        console.log(sayilar)
      }

      usluSayiYap() {
        let ilksayi = sayilar
        sonuc.textContent = `${ilksayi} + `;
        sayilar = Number(veriGirisi.value);
        let ikincisayi = Number(veriGirisi.value);
        if (ilksayi !== 0) {
          let toplam = Math.pow(ilksayi, ikincisayi);
          veriGirisi.value = "";
          sayilar = 0;
          sayilar = toplam;
          sonuc.textContent = `${ilksayi} ^ ${ikincisayi} `
        } else {
          ilksayi = 1;
          veriGirisi.value = "";
          sonuc.textContent = `${ikincisayi} ^ `

        }
        console.log(sayilar)

      }

      karekokYap() {
        let sayi = Number(veriGirisi.value);
        const toplam = Math.sqrt(sayi);
        sayilar = toplam
        veriGirisi.value = "";
        sonuc.textContent = `√${sayi}`

        console.log(sayilar)
      }

      kupkokYap() {
        let sayi = Number(veriGirisi.value);
        const toplam = Math.cbrt(sayi);
        sayilar = toplam
        veriGirisi.value = "";
        sonuc.textContent = `∛${sayi}`

        console.log(sayilar)
      }

      sonucuGoster() {
        sonuc.textContent = sayilar;
        veriGirisi.value = sayilar;
      }

      hepsiniSil() {
        sayilar = 0;
        sonuc.textContent = sayilar;
        veriGirisi.value = "";
      }
    }

    class matematikselSabitler {
      eulerSayisiYaz() {
        sayilar = Math.E;
        sonuc.textContent = "e: " + sayilar;
        veriGirisi.value = sayilar;
      }

      piSayisiYaz() {
        sayilar = Math.PI;
        sonuc.textContent = "π: " + sayilar;
        veriGirisi.value = sayilar;
      }

    }

    const matSabitlerNesnesi = new matematikselSabitler();
    const islemNesnesi = new Islemler();


    topla.addEventListener("click", () => {
      if (Number(veriGirisi.value)) {
        islemNesnesi.toplamaYap();
      } else {
        alert("Geçersiz işlem: lütfen sayı giriniz!");
      }

    });

    cikar.addEventListener("click", () => {
      if (Number(veriGirisi.value)) {
        islemNesnesi.cikarmaYap();
      } else {
        alert("Geçersiz işlem: lütfen sayı giriniz!")
      }

    });

    bolme.addEventListener("click", () => {
      if (Number(veriGirisi.value)) {
        islemNesnesi.bolmeYap();
      } else {
        alert("Geçersiz işlem: lütfen sayı giriniz!")
      }
    })

    carpma.addEventListener("click", () => {
      if (Number(veriGirisi.value)) {
        islemNesnesi.carpmaYap();
      } else {
        alert("Geçersiz işlem: lütfen sayı giriniz!")
      }
    })

    faktoriyel.addEventListener("click", () => {
      if (Number(veriGirisi.value)) {
        islemNesnesi.faktoriyelBul();
      } else {
        alert("Geçersiz işlem: lütfen sayı giriniz!")
      }
    })

    eulerSayisi.addEventListener("click", () => {
      matSabitlerNesnesi.eulerSayisiYaz();
    })

    piSayisi.addEventListener("click", () => {
      matSabitlerNesnesi.piSayisiYaz();
    })

    usluSayi.addEventListener("click", () => {
      if (Number(veriGirisi.value)) {
        islemNesnesi.usluSayiYap();
      } else {
        alert("Geçersiz işlem: lütfen sayı giriniz!")
      }
    })

    karekok.addEventListener("click", () => {
      if (Number(veriGirisi.value)) {
        islemNesnesi.karekokYap();
      } else {
        alert("Geçersiz işlem: lütfen sayı giriniz!")
      }
    })

    kupkok.addEventListener("click", () => {
      if (Number(veriGirisi.value)) {
        islemNesnesi.kupkokYap();
      } else {
        alert("Geçersiz işlem: lütfen sayı giriniz!")
      }
    })

    hesapla.addEventListener("click", () => {
      islemNesnesi.sonucuGoster();
    })

    reset.addEventListener("click", () => {
      islemNesnesi.hepsiniSil();
    })
