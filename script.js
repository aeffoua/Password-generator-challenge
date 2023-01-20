let passwordLength=(8 - 128)
let symbolArr=[' ','!','"','#','$','%','&',',','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','/','^','_','{','}','~']
let lowerCaseArr= ['a','b','c','d','e','f','j','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
let upperCaseArr= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let numberArr= ['1','2','3','4','5','6','7','8','9','0']
let userChoiceArr= []

// Assignment code here

function generatePassword() {
  let passwordLength= prompt("how many characters do you want your password to be?")
  console.log(passwordLength);

  let upperCase= confirm("Do you want upper case in your pssword?")
  console.log(upperCase);
if(upperCase) {
  userChoiceArr= userChoiceArr.concat(upperCaseArr);
}
console.log(userChoiceArr);

  let lowerCase= confirm("do you want lower case in your password?")
  console.log(lowerCase);
if(lowerCase) {
  userChoiceArr=userChoiceArr.concat(lowerCaseArr);
}
console.log(userChoiceArr);

  let number= confirm("do you want number in your password?")
  console.log(number);
  if(number) {
    userChoiceArr=userChoiceArr.concat(numberArr);
  }
  console.log(userChoiceArr);

  let symbol= confirm("do you want symbols in your password?")
  console.log(symbol);
  if(symbol) {
    userChoiceArr=userChoiceArr.concat(symbolArr);
  }
  console.log(userChoiceArr);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
console.log("test");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

