

function werfen() {
const wurfAnzahl = Number(document.getElementById("wurfAnzahl").value);
const wuerfelSorte = Number(document.getElementById("wuerfelSorte").value);
const resultText = document.getElementById("resultText");
const resultImage = document.getElementById("resultImage");
const values = [];
const images = [];

    for (let i = 0; i < wurfAnzahl; i++) {
        let value = Math.floor(Math.random() * wuerfelSorte)+1;
        values.push(value);
        values.sort(compareNumbers);
        images.push(`<img src="../pictures/${value}.png" alt="Würfel auf ${value}" class="image">`);
    }
resultText.innerHTML = `<a id="resultText"> würfe:<br> ${values.join(', ')}</a>`;
resultImage.innerHTML = images.join('');
}

function compareNumbers(a, b) {
    return a - b;
  }