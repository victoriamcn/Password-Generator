// Start working code

//Button DOM Selector
let generateBtn = document.querySelector("#generate");

// Generate button event listener for the mouse click
generateBtn.addEventListener("click", function writePassword() {
  let password = generatePassword()
  let passwordText = document.querySelector("#password")

  //Password value into the text box
  passwordText.value = password;
});


//Function to Generate PW
function generatePassword() {

    let passLength = prompt("How long would you like your password to be? Please type a number between 8 and 128.")
    while ((passLength < 8) || (passLength > 128) || (isNaN(passLength)=== true)) {
      alert("Please type a number between 8 and 128.")
      passLength = prompt("Please type a number between 8 and 128.")
    }

  //variables for confirming characters
  let confirmUppercase = confirm("Would you like your password to have UPPERCASE letters?")
  let confirmLowercase = confirm("would you like your password to have lowercase letters?")
  let confirmNumber = confirm("Would you like your password to have numbers?")
  let confirmSpecialChar = confirm("Would you like your password to contain special characters?: ! @ # $ % & * = + < > / ?")
  let userSelection = [] //empty array for character selection
  let randomPassword = [] //empty array for password generation
  //console.log(randomPassword)

  //Character Selection // tutor advised that .concat works best here over .push

  //upperCase
  if  (confirmUppercase === true) {
    userSelection = userSelection.concat(upperCase)
  }
  //lowerCase
  if (confirmLowercase === true) {
    userSelection = userSelection.concat(lowerCase)
  }
  //number
  if (confirmNumber === true) {
    userSelection = userSelection.concat(number)
  }
  //specialChar
  if (confirmSpecialChar === true) {
    userSelection = userSelection.concat(specialChar)
  }

  //Uppercase
  let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  //Lowercase
  let lowerCase = ["a", "b", "c", "d", "e", "f", "j", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  //Numbers
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  //Special Characters
  let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", "[", "{", "]", "}", "<", ">", "/", "?"]
  
  //function to randomize user's selections // function allRandom() {return[Math.floor(Math.random() * passLength)]}

  //for loop selecting random characters based on chosen length
  for (let i = 0; i < passLength; i++) {
    //let allSelect = userSelection[Math.floor(Math.random() * userSelection.length)];
    let allSelect = userSelection.sort(() => .5 - Math.random()).slice(0,i)
    randomPassword.push(allSelect);
  }
  console.log(randomPassword)
  return randomPassword //.join("");
  }

//Below complicated code I worked on for several days before my classmates helped me make it simple
    //(confirmUppercase && confirmLowercase && confirmNumber && confirmSpecialChar) {
    //userSelection = userSelection.concat(upperCase, lowerCase, number, specialChar);
    //console.log(userSelection);
    // 3/4 Selections Made !upperCase
  //} else if (!confirmUppercase && confirmLowercase && confirmNumber && confirmSpecialChar) {
    //userSelection = userSelection.concat(lowerCase, number, specialChar);
    // 3/4 Selections Made !lowerCase
  //} else if (confirmUppercase && !confirmLowercase && confirmNumber && confirmSpecialChar) {
    //userSelection = userSelection.concat(upperCase, number, specialChar);
    // 3/4 Selections Made !number
  //} else if (confirmUppercase && confirmLowercase && !confirmNumber && confirmSpecialChar) {
    //userSelection = userSelection.concat(upperCase, lowerCase, specialChar);
    // 3/4 Selections Made !specialChar
  //} else if (confirmUppercase && confirmLowercase && confirmNumber && !confirmSpecialChar) {
    //userSelection = userSelection.concat(upperCase, lowerCase, number);
    // 2/4 Selections Made !upperCase !lowerCase
  //} else if (!confirmUppercase && !confirmLowercase && confirmNumber && confirmSpecialChar) {
    //userSelection = userSelection.concat(number, specialChar);
    // 2/4 Selections Made !upperCase !number
  //} else if (!confirmUppercase && confirmLowercase && !confirmNumber && confirmSpecialChar) {
   // userSelection = userSelection.concat(lowerCase, specialChar);
    // 2/4 Selections Made !upperCase !specialChar
  //} else if (!confirmUppercase && confirmLowercase && confirmNumber && !confirmSpecialChar) {
    //userSelection = userSelection.concat(lowerCase, number);
    // 2/4 Selections Made !lowerCase !number
  //} else if (confirmUppercase && !confirmLowercase && !confirmNumber && confirmSpecialChar) {
    //userSelection = userSelection.concat(upperCase, specialChar);
    // 2/4 Selections Made !lowerCase !specialChar
  //} else if (confirmUppercase && !confirmLowercase && confirmNumber && !confirmSpecialChar) {
    //userSelection = userSelection.concat(upperCase, number);
    // 2/4 Selections Made !number !specialChar
  //} else if (confirmUppercase && confirmLowercase && !confirmNumber && !confirmSpecialChar) {
    //userSelection = userSelection.concat(upperCase, lowerCase);
    // 1/4 Selections Made for upperCase only
    //don't need .concat here because it's only one confirm
  //function getRandomUpper(upperCase) { Math.floor(Math.random() * upperCase.length);}
  //function getRandomLower(lowerCase) { Math.floor(Math.random() * lowerCase.length);}
  //function getRandomNumber(number) {Math.floor(Math.random() * number.length);}
  //function getRandomSpecialChar(specialChar) { Math.floor(Math.random() * specialChar.length);}