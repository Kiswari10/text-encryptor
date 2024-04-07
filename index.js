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
  showModal("ENCRYPTED!", "You can proceed to copy the encrypted text!");
};

const toDecrypt = () => {
  result = text.value;
  for (const [key, value] of Object.entries(data)) {
    result = result.replaceAll(value, key);
  }
  execAfterOperation();
  showModal("DECRYPTED!", "You can proceed to copy the decrypted text!");
};

async function copyResult() {
  try {
    await navigator.clipboard.writeText(result);
    showModal("COPIED!", "Content copied to clipboard!");
  } catch (err) {
    console.error("Error al copiar: ", err);
  }
}

const showModal = (title, text) => {
  Swal.fire({
    title,
    text,
    icon: "success",
    confirmButtonText: "Yeah!",
  });
};

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
