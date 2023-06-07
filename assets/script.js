// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("textarea");

const upper = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const Lower = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numbers = ["0","1","2","3","4","5","6","7","8","9"]
const symbols = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","{","]","}","/","|",";",":","'","?",",","<",">"]
let passWord = "";
let character = "";

function generatePassword() {
  console.log("button clicked")
  var passLength = prompt ("how many characters do you want in the password");
  if (passLength < 8 || passLength > 128)
  {
    alert("must be between 10 to 150 characters, please try again");
    return;
  }
  var userLowerCase = confirm("please put some lower case letters in 'ok' for yes");
  var userUpperCase = confirm("please input upper case");
  var userSymbols = confirm("please put one symbole");
  var userNumbers = confirm("please put one number");

  console.log(character)

  if (userUpperCase === true) {character=character.concat(userUpperCase)};
  if (userLowerCase === true) {character=character.concat(userLowerCase)};
  if (userNumbers === true) {character=character.concat(numbers)};
  if (userSymbols === true) {character=character.concat(symbols)};

  for (var i = 0; i < passLength; i++) {
    var randomindex = Math.floor(Math.random() * character.length);
    console.log(randomindex)
    passWord = passWord + character[randomindex];
  }
  return passWord;
}

// Write password to the #password input
function writePassword() {
  //resetPassword();
  var password = generatePassword();
  passwordText.value = password;
}


//rest password when clicked
function resetPassword() {
console.log("Reset Password")
passWord = '';
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  