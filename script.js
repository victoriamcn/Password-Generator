// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);

//Letters, Numbers, Special Characters



//function to generate PW
function createPassword() {
  enter = parseInt(prompt("How long would you like your password to be? Please type a number between 8 and 128."));
  //validate entry //parseInt converts first argument to string, parses it, then returns an integer or NaN 
  if (enter < 8 || enter > 128) {
    parseInt(alert("Please type a number between 8 and 128."));
    //PW length validation
    //I want to return to the alert window if user make invalid length choice
  } else {
    var = upperCase;
    uppercase = prompt("Would you like your password to have UPPERCASE letters?")
    var = lowerCase;
    lowercase =prompt("would you like your password to have lowercase letters?")
    var = numericValue;
    numericValue = prompt("Would you like your password to have numbers?")
    var = specialChar; //prompt to say that only these characters permitted: !@#$%^&*()=+[{]}<\>/?
    specialChar = prompt(message, "Would you like your password to contain special characters, such as these: ! @ # $ % & * = + < \ > / ??")
    
  }
}
;


//CHARACTERS GENERATED , MINIMUM 8 , MAXIMUM 128 - should the chosen variable be passwordText or password?
  //function generatePassword() {
   // var charSet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()=+[]{}}<\>/?"
   // var passwordMinLength = 8;
    // var passwordMaxlength = 128;
      //conditional statement for loop to check PW length
      // if i>=passwordMinLength && i<=passwordMaxLength {for (var i = 0, i>=passwordMinLength; i++){
        // var randomPW =Math.floor(Math.random() * charSet);}
      // } if else  {
        // alert("Please write a password that is between " + passwordMinLength + " and " + passwordMaxLength + ".");
        // return false;
      // } else {
        // alert ("You have met the criteria.")
       // return true;}}//
