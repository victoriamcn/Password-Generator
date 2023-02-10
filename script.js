// Start working code

//Button DOM Selector
let generateBtn = document.querySelector("#generate");
//User selection Variables
let userLength;
let confirmUppercase;
let confirmLowercase;
let confirmNumber;
let confirmSpecialChar;
let userSelection;
//Function for Lowercase
let lowerCase = function getRandromLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
//Function for Uppercase
let upperCase = function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
//Function for Number
let number = function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
//Function for Special Character
let specialChar = function getRandomSpecialCharacter() {
  let symbols = '!@#$%^&*()=+[{]}<>/?';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Write password to the #password input
function writePassword() {
  let password = createPassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate button event Listener
generateBtn.addEventListener("click", writePassword);


//Function to Generate PW
function createPassword() {
  
  enter = parseInt(prompt("How long would you like your password to be? Please type a number between 8 and 128."));
  //validate entry //parseInt converts first argument to string, parses it, then returns an integer or NaN 
  if (userLength < 8 || userLength > 128) {
    Event.preventDefault();
    Event.stopPropagation();     // window returns to the alert if user make invalid length choice
    parseInt(alert("Please type a number between 8 and 128."));
  } else {
    confirmUppercase = confirm("Would you like your password to have UPPERCASE letters?");
    confirmLowercase = confirm("would you like your password to have lowercase letters?");
    confirmNumber = confirm("Would you like your password to have numbers?");
    confirmSpecialChar = confirm("Would you like your password to contain special characters?: ! @ # $ % & * = + < > / ?");
};

// User's Character Selections
    // No selections made
if (!confirmUppercase && !confirmLowercase && !confirmNumber && !confirmSpecialChar) {
  alert("My dude, you have to have a password, so please choose your password's characters from the criteria.");
  userSelection = " ";
            // All selections made
} else if (confirmUppercase && confirmLowercase && confirmNumber && confirmSpecialChar) {
  userSelection = upperCase + lowerCase + number + specialChar;

            // 3/4 Selections Made !upperCase
} else if (!confirmUppercase && confirmLowercase && confirmNumber && confirmSpecialChar) {
  userSelection = lowerCase + number + specialChar;
            // 3 of 4 Selections Made !lowerCase
} else if (confirmUppercase && !confirmLowercase && confirmNumber && confirmSpecialChar) {
  userSelection = upperCase + number + specialChar;
            // 3 of 4 Selections Made !number
} else if (confirmUppercase && confirmLowercase && !confirmNumber && confirmSpecialChar) {
  userSelection = upperCase + lowerCase + specialChar;
            // 3/4 Selections Made !specialChar
} else if (confirmUppercase && confirmLowercase && confirmNumber && !confirmSpecialChar) {
  userSelection = upperCase + lowerCase + number;

            // 2/4 Selections Made !upperCase !lowerCase
} else if (!confirmUppercase && !confirmLowercase && confirmNumber && confirmSpecialChar) {
  userSelection = number + specialChar;
            // 2/4 Selections Made !upperCase !number
} else if (!confirmUppercase && confirmLowercase && !confirmNumber && confirmSpecialChar) {
  userSelection = lowerCase + specialChar;
            // 2/4 Selections Made !upperCase !specialChar
} else if (!confirmUppercase && confirmLowercase && confirmNumber && !confirmSpecialChar) {
  userSelection = lowerCase + number;
            // 2/4 Selections Made !lowerCase !number
} else if (confirmUppercase && !confirmLowercase && !confirmNumber && confirmSpecialChar) {
  userSelection =  upperCase + specialChar;
            // 2/4 Selections Made !lowerCase !specialChar
} else if (confirmUppercase && !confirmLowercase && confirmNumber && !confirmSpecialChar) {
  userSelection =  upperCase + number;
            // 2/4 Selections Made !number !specialChar
} else if (confirmUppercase && confirmLowercase && !confirmNumber && !confirmSpecialChar) {
  userSelection =  upperCase + lowerCase;

            // 1/4 Selections Made for upperCase only
} else if (confirmUppercase && !confirmLowercase && !confirmNumber && !confirmSpecialChar) {
  userSelection = upperCase;
            // 1/4 Selections Made for lowerCase only
} else if (!confirmUppercase && confirmLowercase && !confirmNumber && !confirmSpecialChar) {
  userSelection =  lowerCase;
            // 1/4 Selections Made for number only 
} else if (!confirmUppercase && !confirmLowercase && confirmNumber && !confirmSpecialChar) {
  userSelection =  number;
            // 1/4 Selections Made for specialChar only
} else if (!confirmUppercase && !confirmLowercase && !confirmNumber && confirmSpecialChar) {
  userSelection =  specialChar;
};

//let the genPassword variable be a place holder for the PW length
let genPassword =[];

//random selection of variables

//for loop randomly selecting
for (p = 0; p < userLength; p++) {
  let chooseSelect = userSelection(Math.floor(Math.random() * userSelection.length))
  genPassword = chooseSelect;
}
};