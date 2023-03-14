// Assignment code here

  // Character sets
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specials = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Generate password function
function generatePassword() {
  // Prompt for password length
  var passwordLength = parseInt(prompt("Enter a password length between 8 and 128 characters:"));
  
  // Validate password length input
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Invalid input. Enter a password length between 8 and 128 characters:"));
  }
  
  // Prompt for character types to include
  var includeLowers = confirm("Include lowercase characters?");
  var includeUppers = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numerical characters?");
  var includeSpecials = confirm("Include special characters?");
  
  // Validate at least one character type is selected
  if (!includeLowers && !includeUppers && !includeNumbers && !includeSpecials) {
    alert("Please select at least one character type.");
    return "";
  }
  
  // Build character set based on selected criteria
  var characterSet = "";
  if (includeLowers) {
    characterSet += lowerCase;
  }
  if (includeUppers) {
    characterSet += upperCase;
  }
  if (includeNumbers) {
    characterSet += numbers;
  }
  if (includeSpecials) {
    characterSet += specials;
  }
  
  // Generate password using selected criteria
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var newPass = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(newPass);
  }
  
  // Return generated password
  return password;
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
