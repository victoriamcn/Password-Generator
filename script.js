// Assignment Code
var generateBtn = document.querySelector("#generate");

//code to say that only these characters permitted: !@#$%^&*()=+[{]}<\>/?

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //CHARACTERS GENERATED , MINIMUM 8 , MAXIMUM 128 - should the chosen variable be passwordText or password?
  function generatePassword() {
    var charSet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()=+[]{}}<\>/?"
    var passwordMinLength = 8;
    var passwordMaxlength = 128;
      //conditional statement for loop to check PW length
      if i>=passwordMinLength && i<=passwordMaxLength {for (var i = 0, i>=passwordMinLength; i++){
        var randomPW =Math.floor(Math.random() * charSet);
        passwordText
      }
      } if else  {
        alert("Please write a password that is between " + passwordMinLength + " and " + passwordMaxLength + ".");
        return false;
      } else {
        alert ("You have met the criteria.")
        return true;
      }
        
      }

  //.value specifies the value of the input text field
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
