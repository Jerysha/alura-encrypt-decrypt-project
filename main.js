//Textarea
const resultShow = document.getElementById("message");
const inputText = document.getElementById("input-text");
//Message
const message = document.querySelector(".message-empty");
//Buttons
const copyBtn = document.getElementById("copy-text");
const encryptBtn = document.getElementById("encrypt");
const decryptBtn = document.getElementById("desencrypt");
//ShowBtn
const showCopyBtn = document.querySelector(".result-copy");
showCopyBtn.style.display = "none";

//Events
function isLowerCase(text) {
  return text === text.toLowerCase();
}
encryptBtn.addEventListener("click", () => {
  if (inputText.value.trim() === "") {
    message.style.display = "block";
    resultShow.style.display = "none";
    copyBtn.style.display = "none";
    alert("No puede estar vacío");
  } else if (!isLowerCase(inputText.value)) {
    alert("Debe estar en minúsculas");
  } else {
    message.style.display = "none";
    resultShow.style.display = "block";
    showCopyBtn.style.display = "block";
    resultShow.innerText = encrypt(inputText.value);
  }
});
decryptBtn.addEventListener("click", () => {
  if (inputText.value.trim() === "") {
    message.style.display = "block";
    resultShow.style.display = "none";
    alert("No puede estar vacío");
  } else if (!isLowerCase(inputText.value)) {
    alert("Debe estar en minúsculas");
  } else {
    message.style.display = "none";
    resultShow.style.display = "block";
    showCopyBtn.style.display = "block";
    resultShow.innerText = decrypt(inputText.value);
  }
});
copyBtn.addEventListener("click", () => {
  if (inputText.value.trim() != "") {
    message.style.display = "none";
    resultShow.style.display = "block";
    showCopyBtn.style.display = "block";
    resultShow.select();
    resultShow.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(resultShow.value);
  } else {
    message.style.display = "block";
    resultShow.style.display = "none";
  }
});
//Functions
function encrypt(text) {
  const encryptionMap = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  return text
    .split("")
    .map((char) => encryptionMap[char] || char)
    .join("");
}

function decrypt(text) {
  const decryptionMap = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  return text
    .split(" ")
    .map((word) => {
      const decryptedWord = word
        .split("")
        .map((char) => decryptionMap[char] || char)
        .join("");
      return decryptedWord;
    })
    .join(" ");
}
