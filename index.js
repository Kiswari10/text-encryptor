const text = document.getElementById("user-text");
const noContentSection = document.getElementById("no-content-section");
const resultSection = document.getElementById("result-section");
const resultText = document.getElementById("result-text");
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const copyBtn = document.getElementById("copy-btn");

const data = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};
let result = "";

const execAfterOperation = () => {
  noContentSection.style.display = "none";
  resultSection.style.display = "flex";
  resultText.innerText = result;
  text.value = "";
};

const toEncrypt = () => {
  result = "";
  for (const letter of text.value) {
    result += data[letter] ? data[letter] : letter;
  }
  execAfterOperation();
};

const toDecrypt = () => {
  result = text.value;
  for (const [key, value] of Object.entries(data)) {
    result = result.replaceAll(value, key);
  }
  execAfterOperation();
};

async function copyResult() {
  try {
    await navigator.clipboard.writeText(result);
    console.log("Contenido copiado al portapapeles");
  } catch (err) {
    console.error("Error al copiar: ", err);
  }
}

//****************Event handlers*****************//
// Encrypt
encryptBtn.addEventListener("click", () => {
  toEncrypt();
});
// Decrypt
decryptBtn.addEventListener("click", () => {
  toDecrypt();
});
// Copy
copyBtn.addEventListener("click", () => {
  copyResult();
});
