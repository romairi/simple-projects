const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

let isAlertShown = false;

clipboardEl.addEventListener("click", copyToClipboard);
generateEl.addEventListener("click", generatePasswordHandler);

function copyToClipboard() {
  if (!isAlertShown) {
    const password = resultEl.innerText;

    if (!password) {
      return;
    }

    navigator.clipboard.writeText(password);
    showAlert("Password copied to clipboard!");
    isAlertShown = true;
  }
}

function generatePasswordHandler() {
  isAlertShown = false;

  const length = +lengthEl.value;
  const options = {
    lower: lowercaseEl.checked,
    upper: uppercaseEl.checked,
    number: numbersEl.checked,
    symbol: symbolsEl.checked,
  };

  resultEl.innerText = generatePassword(length, options);
}

function generatePassword(length, options) {
  const types = Object.keys(options).filter((option) => options[option]);

  if (types.length === 0) {
    return "";
  }

  const charactersPerType = Math.ceil(length / types.length);
  const generatedPassword = types
    .flatMap((type) => generateRandomCharacters(charactersPerType, type))
    .join("");
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function generateRandomCharacters(count, type) {
  const func = randomFunc[type];
  return Array.from({ length: count }, func).join("");
}

function getRandomCharacterFromRange(start, end) {
  const charCode = Math.floor(Math.random() * (end - start + 1)) + start;
  return String.fromCharCode(charCode);
}

// Unicode range for lowercase letters
function getRandomLower() {
  return getRandomCharacterFromRange(97, 122);
}

// Unicode range for uppercase letters
function getRandomUpper() {
  return getRandomCharacterFromRange(65, 90);
}

// Unicode range for digits
function getRandomNumber() {
  return getRandomCharacterFromRange(48, 57);
}

// range for symbols !@#$%^&*(){}[]=<>/,.
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function showAlert(message) {
  const alert = document.createElement("div");
  alert.className = "alert";
  alert.textContent = message;
  document.body.appendChild(alert);

  setTimeout(() => {
    document.body.removeChild(alert);
  }, 1500);
}
