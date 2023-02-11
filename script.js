// Start working code

//Button DOM Selector
let generateBtn = document.querySelector("#generate");
//User selection and confirm variables
let input; //Variable for user's password length ~line 50
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

// Write password to the #password input
function writePassword() {
  let password = createPassword();
  let passwordText = document.querySelector("#password");
  //tried created a new element to put the new password in and it didn't work//var elementP = document.createElement("p");//elementP.textContent = password;//console.log(elementP)
  //Password value into the text box
  passwordText.value = password;
}

// Generate button event listener for the mouse click
generateBtn.addEventListener("click", writePassword); //debugger


//Function to Generate PW
function createPassword() {
  input = parseInt(prompt("How long would you like your password to be? Please type a number between 8 and 128."));
  //validate entry //parseInt converts first argument to string, parses it, then returns an integer or NaN 
  if (input < 8 || input > 128) {
      alert("Please type a number between 8 and 128.");
    } else {
      confirmUppercase = confirm("Would you like your password to have UPPERCASE letters?");
      confirmLowercase = confirm("would you like your password to have lowercase letters?");
      confirmNumber = confirm("Would you like your password to have numbers?");
      confirmSpecialChar = confirm("Would you like your password to contain special characters?: ! @ # $ % & * = + < > / ?");
    }

  // User's Character Selection // advised .concat works best rather than push.
                // All selections made
    if (confirmUppercase && confirmLowercase && confirmNumber && confirmSpecialChar) {
      userSelection.concat(getRandomUpper,getRandomLower,getRandomNumber,getRandomSpecialChar);
      //console.log(userSelection);
                // 3/4 Selections Made !upperCase
    } else if (!confirmUppercase && confirmLowercase && confirmNumber && confirmSpecialChar) {
      userSelection.concat(getRandomLower,getRandomNumber,getRandomSpecialChar);
                // 3/4 Selections Made !lowerCase
    } else if (confirmUppercase && !confirmLowercase && confirmNumber && confirmSpecialChar) {
      userSelection.concat(getRandomUpper,getRandomNumber,getRandomSpecialChar);
                // 3/4 Selections Made !number
    } else if (confirmUppercase && confirmLowercase && !confirmNumber && confirmSpecialChar) {
      userSelection.concat(getRandomUpper,getRandomLower,getRandomSpecialChar);
                // 3/4 Selections Made !specialChar
    } else if (confirmUppercase && confirmLowercase && confirmNumber && !confirmSpecialChar) {
      userSelection.concat(getRandomUpper,getRandomLower,getRandomNumber);
                // 2/4 Selections Made !upperCase !lowerCase
    } else if (!confirmUppercase && !confirmLowercase && confirmNumber && confirmSpecialChar) {
      userSelection.concat(getRandomNumber,getRandomSpecialChar);
                // 2/4 Selections Made !upperCase !number
    } else if (!confirmUppercase && confirmLowercase && !confirmNumber && confirmSpecialChar) {
      userSelection.concat(getRandomLower,getRandomSpecialChar);
                // 2/4 Selections Made !upperCase !specialChar
    } else if (!confirmUppercase && confirmLowercase && confirmNumber && !confirmSpecialChar) {
      userSelection.concat(getRandomLower,getRandomNumber);
                // 2/4 Selections Made !lowerCase !number
    } else if (confirmUppercase && !confirmLowercase && !confirmNumber && confirmSpecialChar) {
      userSelection.concat(getRandomUpper,getRandomSpecialChar);
                // 2/4 Selections Made !lowerCase !specialChar
    } else if (confirmUppercase && !confirmLowercase && confirmNumber && !confirmSpecialChar) {
      userSelection.concat(getRandomUpper,getRandomNumber);
                // 2/4 Selections Made !number !specialChar
    } else if (confirmUppercase && confirmLowercase && !confirmNumber && !confirmSpecialChar) {
      userSelection.concat(getRandomUpper,getRandomLower);
                // 1/4 Selections Made for upperCase only
    //don't need .concat here because it's only one confirm
    } else if (confirmUppercase && !confirmLowercase && !confirmNumber && !confirmSpecialChar) {
      userSelection = getRandomUpper;
                // 1/4 Selections Made for lowerCase only
    } else if (!confirmUppercase && confirmLowercase && !confirmNumber && !confirmSpecialChar) {
      userSelection =  getRandomLower;
                // 1/4 Selections Made for number only 
    } else if (!confirmUppercase && !confirmLowercase && confirmNumber && !confirmSpecialChar) {
      userSelection =  getRandomNumber;
                // 1/4 Selections Made for specialChar only
    } else if (!confirmUppercase && !confirmLowercase && !confirmNumber && confirmSpecialChar) {
      userSelection =  getRandomSpecialChar;
      // No selections made
  } else (!confirmUppercase && !confirmLowercase && !confirmNumber && !confirmSpecialChar) {
    alert("Please choose from the accepted criteria.");

  let getRandomUpper = [Math.floor(Math.random() * upperCase.length)];
  let getRandomLower= [Math.floor(Math.random() * lowerCase.length)]; 
  let getRandomNumber = [Math.floor(Math.random() * number.length)];
  let getRandomSpecialChar = [Math.floor(Math.random() * specialChar.length)];

    //for loop selecting random characters based on chosen length
    for (let i = 0; i < userLength; i++) {
      let generatedPassword = " "
      generatedPassword.slice(userSelection);
    } //didn't work, put the getRandom functions in the confirm instead.. .concat(getRandomUpper,getRandomLower,getRandomNumber,getRandomSpecialChar);

}