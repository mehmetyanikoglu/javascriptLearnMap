
const gunSecimi = document.getElementById("gunSecimi");
const sonucAlani = document.getElementById("sonucAlani");
const sonucMesaji = document.getElementById("sonucMesaji");

const gunler = {
    "1": { mesaj: "Pazartesi: Haftaya sendromsuz başla!", renk: "text-primary" },
    "2": { mesaj: "Salı: Haftanın en sallanan günü!", renk: "text-secondary" },
    "3": { mesaj: "Çarşamba: Ortayı bulduk, devam!", renk: "text-info" },
    "4": { mesaj: "Perşembe: #tbt zamanı!", renk: "text-dark" },
    "5": { mesaj: "Cuma: Akşama planlar hazır mı?", renk: "text-success" },
    "6": { mesaj: "Cumartesi: Keyif zamanı!", renk: "text-warning" },
    "7": { mesaj: "Pazar: Yarın iş var...", renk: "text-danger" }
};

gunSecimi.addEventListener("change", () => {
    const secilenDeger = gunSecimi.value;
    const secilenGun = gunler[secilenDeger];

    sonucMesaji.textContent = secilenGun.mesaj;
    sonucMesaji.className = `fs-4 fw-bold ${secilenGun.renk}`;
    sonucAlani.style.display = "block";
});
