// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
let uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialCharset = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let numericCharset = "0123456789";

function generatePassword() {
  let passwordLength = prompt("How many characters would you like your password to contain?");
  var numericPasswordLength = parseInt(passwordLength);
  if (passwordLength == null || passwordLength == "" || isNaN(numericPasswordLength)) {
    alert("Invalid input, please try again");
    return;
  } else if (numericPasswordLength < 8 || numericPasswordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }

  let availableCharset = "";

  if (confirm("Click OK to confirm using lowercase characters")) {
    availableCharset += lowercaseCharset;
  }
  if (confirm("Click OK to confirm using uppercase characters")) {
    availableCharset += uppercaseCharset;
  }
  if (confirm("Click OK to confirm using numeric characters")) {
    availableCharset += numericCharset;
  }
  if (confirm("Click OK to confirm using special characters")) {
    availableCharset += specialCharset;
  }

  if (availableCharset == "") {
    alert("You must include some character type for the password");
  }

  var password = "";

  let usableCharacters = availableCharset.split("");

  for (let i = 0; i <= numericPasswordLength; i++) {
    password += usableCharacters[getRandomInt(availableCharset.length)];
  }

  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandomInt(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
