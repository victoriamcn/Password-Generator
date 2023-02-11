// Start working code

//Button DOM Selector
let generateBtn = document.querySelector("#generate");
//User selection and confirm variables
let userLength; //Variable for user's password length ~line 50
let promptLength; //made promptLength for the prompt window asking for PW length
let confirmUppercase; //made confirm for each character set so I could list all possible selections in my conditional statements ~line66
let confirmLowercase;
let confirmNumber;
let confirmSpecialChar;
let userSelection = []; //Variable to create a random password based on the userLength and confirmed characters

//Uppercase Variable Array for userSelection
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  //console.log(specialChar)

//Lowercase Variable Array for userSelection
let lowerCase = ["a","b","c","d","e","f","j","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  //console.log(specialChar)

//Number Variable Array for userSelection
let number = [1,2,3,4,5,6,7,8,9,0];
  //console.log(number)

//Function for Special Character Variable for userSelection
let specialChar = ["!","@","#","$","%","^","&","*","(",")","=","+","[","{","]","}","<",">","/","?"];
  //console.log(specialChar);

//Function for getting a random element from an array//function getRandom(uppercase) {// var randUpperCase = Math.floor(Math.random() * upperCase.length);//var randElement = arr[randUpperCase];return randElement;}

// Write password to the #password input
function writePassword() {
  let password = createPassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate button event listener for the mouse click
generateBtn.addEventListener("click", writePassword); //debugger


//Function to Generate PW
function createPassword() {
  
  promptLength = parseInt(prompt("How long would you like your password to be? Please type a number between 8 and 128."));
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

// User's Character Selection // Found that concat works best rather than push.
    // No selections made
if (!confirmUppercase && !confirmLowercase && !confirmNumber && !confirmSpecialChar) {
  alert("My dude, you need to have a password. Please choose 'Okay' or 'Cancel' from the criteria.");
  userSelection = " ";
              // All selections made
  } else if (confirmUppercase && confirmLowercase && confirmNumber && confirmSpecialChar) {
    userSelection.concat(upperCase,lowerCase,number,specialChar);
    //console.log(userSelection);

              // 3/4 Selections Made !upperCase
  } else if (!confirmUppercase && confirmLowercase && confirmNumber && confirmSpecialChar) {
    userSelection.concat(lowerCase,number,specialChar);
              // 3/4 Selections Made !lowerCase
  } else if (confirmUppercase && !confirmLowercase && confirmNumber && confirmSpecialChar) {
    userSelection.concat(upperCase,number,specialChar);
              // 3/4 Selections Made !number
  } else if (confirmUppercase && confirmLowercase && !confirmNumber && confirmSpecialChar) {
    userSelection.concat(upperCase,lowerCase,specialChar);
              // 3/4 Selections Made !specialChar
  } else if (confirmUppercase && confirmLowercase && confirmNumber && !confirmSpecialChar) {
    userSelection.concat(upperCase,lowerCase,number);

              // 2/4 Selections Made !upperCase !lowerCase
  } else if (!confirmUppercase && !confirmLowercase && confirmNumber && confirmSpecialChar) {
    userSelection.concat(number,specialChar);
              // 2/4 Selections Made !upperCase !number
  } else if (!confirmUppercase && confirmLowercase && !confirmNumber && confirmSpecialChar) {
    userSelection.concat(lowerCase,specialChar);
              // 2/4 Selections Made !upperCase !specialChar
  } else if (!confirmUppercase && confirmLowercase && confirmNumber && !confirmSpecialChar) {
    userSelection.concat(lowerCase,number);
              // 2/4 Selections Made !lowerCase !number
  } else if (confirmUppercase && !confirmLowercase && !confirmNumber && confirmSpecialChar) {
    userSelection.concat(upperCase,specialChar);
              // 2/4 Selections Made !lowerCase !specialChar
  } else if (confirmUppercase && !confirmLowercase && confirmNumber && !confirmSpecialChar) {
    userSelection.concat(upperCase,number);
              // 2/4 Selections Made !number !specialChar
  } else if (confirmUppercase && confirmLowercase && !confirmNumber && !confirmSpecialChar) {
    userSelection.concat(upperCase,lowerCase);

              // 1/4 Selections Made for upperCase only
  //don't need .concat here because it's only one confirm
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

  //below are the loops and functions for the random selection of characters based on 
    //functions for getting random characters for each set
    function getRandomUpper() {
      Math.floor(Math.random() * upperCase.length);
    };

    function getRandomLower() {  
      Math.floor(Math.random() * lowerArr.length);
    };

    function getRandomNumber() {
      Math.floor(Math.random() * number.length);
    };

    function getRandomSpecialChar() {
      Math.floor(Math.random() * specialChar.length);
    };

    //for loop selecting random characters based on chosen length
    for (i = 0; i < userLength; i++) {
      userSelection.push(getRandomUpper(),getRandomLower(),getRandomNumber(),getRandomSpecialChar());
  };

return
};