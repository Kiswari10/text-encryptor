const text = document.getElementById("user-text");
const noContentSection = document.getElementById("no-content-section");
const resultSection = document.getElementById("result-section");
const resultText = document.getElementById("result-text");
const data = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};
let result = "";

const toEncrypt = () => {
  result = "";
  resultText.innerText = "";
  for (letter of text.value) {
    if (data[letter]) {
      result += data[letter];
    } else {
      result += letter;
    }
  }
  noContentSection.style.display = "none";
  resultSection.style.display = "flex";
  resultText.innerText = result;
  text.value = "";
};

async function copyResult() {
  try {
    await navigator.clipboard.writeText(result);
    console.log("Contenido copiado al portapapeles");
  } catch (err) {
    console.error("Error al copiar: ", err);
  }
}
