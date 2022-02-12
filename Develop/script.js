// Assignment code here
function generatePassword() {
  var length ;
  if (lengthPrompt === 8) {
    length = 8;
  } else {
    length = 12;
  }

  var lowercase ;
  if (lowercasePrompt === yes) {
    charset = "abcdefghijklmnopqrstuvwxyz";
  } else {
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var numeric ;
  if (numericPrompt === yes) {
    numeric = "1234567890";
  } else {
    numeric = "";
  }

  var special ;
  if (specialPrompt === yes) {
    charset = "~`!@#$%^&*()_-+=[{]}|;:',.></?";
  } else {
    charset = "";
  }

  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
