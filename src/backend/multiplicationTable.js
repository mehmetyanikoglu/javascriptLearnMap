const baslat = document.getElementById("baslat");
const sonuc = document.getElementById("sonuc");
const codeBlock = document.getElementById("code-block");

baslat.addEventListener("click", () => {
    let tableHTML = "";
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            tableHTML += `${i} x ${j} = ${i * j}<br>`;
        }
        tableHTML += "--------------------<br>";
    }
    sonuc.innerHTML = tableHTML;
});

// Ekranda göstermek istediğimiz kod metni
const codeString = `
baslat.addEventListener("click", () => {
    let tableHTML = "";
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            tableHTML += \`\${i} x \${j} = \${i * j}<br>\`;
        }
        tableHTML += "--------------------<br>";
    }
    sonuc.innerHTML = tableHTML;
});
`;

// Kod metnini HTML'deki <pre><code> bloğunun içine yazdırıyoruz.
codeBlock.textContent = codeString.trim();
