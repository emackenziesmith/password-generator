let generateBtn = document.querySelector("#generate");

let number = window.confirm("Click OK if you would like your password to include numbers")
let upper = window.confirm("Click OK if you would like your password to include uppercase letters")
let lower = window.confirm("Click OK if you would like your password to include lowercase letters")
let character = window.confirm("Click OK if you would like your password to include special characters")
let passwordLength = parseInt(window.prompt("Enter your desired password length between 8 and 128 characters"))

while (passwordLength <8 || passwordLength > 128) {
  passwordLength = parseInt(window.prompt("You must enter a number between 8 and 128"));
}

let library = ""
let numbers = ("1234567890")
let uppers = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
let lowers = ("abcdefghijklmnopqrstuvwxyz")
let characters = ("!@#$%^&*")

if (number) {
  library = library + numbers
}

if (upper) {
  library = library + uppers
}

if (lower) {
  library = library + lowers
}

if (character) {
  library = library + characters
}

library = library.split('')

function randomNumberGenerator(maxNum) {
    let randomNum = Math.floor(Math.random()*maxNum);

    return randomNum;
  };

  let password = '';

for (let i=0; i<passwordLength; i++) {
  password = password + library[randomNumberGenerator(library.length)];

}
console.log(password)


function passwordWriter() {
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", passwordWriter);















