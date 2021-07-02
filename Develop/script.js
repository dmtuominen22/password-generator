// Assignment code here


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

function generatePassword() {
	var passwordChars = "";
	var passwordLength = 0;
	var OptionLowerCase = false, OptionUpperCase = false, OptionNumeric = false, OptionSpecialCharacters = false;
	passwordLength = prompt("Please enter the length you would like your password, must be between 8 and 128");
  
    if (passwordLength >= 8 && passwordLength <= 128){
		OptionLowerCase = confirm("Do you want lowercase letters?");
		OptionUpperCase = confirm("Do you want uppercase letters?");
		OptionNumeric = confirm("Do you want numbers?");
		OptionSpecialCharacters = confirm("Do you want special characters?");
    return passwordChars = createPassword(passwordLength, [OptionLowerCase, OptionUpperCase, OptionNumeric, OptionSpecialCharacters]);
	}
	else {
		alert("Invalid password length.");
	}
}

function createPassword(pLength, pOptions){
  var generatedPassword = "";
  const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersSet = "0123456789";
  const specialCharsSet = "~`!@#$%^&*()_-+={[}]|:;<,>./?";
  
  for(var i = 0; i < pLength; i++) {
  // choose what type of char you'll generate during this loop
  var randomSet;
  
  // make sure it's a character that is valid according to user specifications
  do {
  randomSet = Math.floor(Math.random() * pOptions.length);
  } while(!pOptions[randomSet]);
  
  // generate a character based on the type randomly chosen
  switch(randomSet) {
  case 0: // lowercase
  generatedPassword += lowerCaseSet[Math.floor(Math.random() * lowerCaseSet.length)];
  break;
  case 1: // uppercase
  generatedPassword += upperCaseSet[Math.floor(Math.random() * upperCaseSet.length)];
  break;
  case 2: // numeric
  generatedPassword += numbersSet[Math.floor(Math.random() * numbersSet.length)];
  break;
  case 3: // special
  generatedPassword += specialCharsSet[Math.floor(Math.random() * specialCharsSet.length)];
  break;
  }
  }
  return generatedPassword;
  }
  

