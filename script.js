// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharset = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var numericCharset = "0123456789";

function generatePassword() {
  console.log("breakpoint 1");
  let passwordLength = prompt("How many characters would you like your password to contain?");
  var numericPasswordLength = parseInt(passwordLength);
  if (passwordLength == null || passwordLength == "" || isNaN(numericPasswordLength)) {
    alert("Invalid input, please try again");
    return;
  } else if (numericPasswordLength < 8 || numericPasswordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  } else {
    alert("Password will be " + numericPasswordLength + " characters long");
  }
  console.log("breakpoint 2");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
