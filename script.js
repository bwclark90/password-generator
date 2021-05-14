let generate = document.getElementById("generate")


document.getElementById('generate').addEventListener('click', () => {
  let length = prompt("how long do you want your password?")
  let lowerCase = confirm("lower case?")
  let upperCase = confirm("upper case?")
  let nums = confirm("nums?")
  let specChars = confirm("special characters?")
  let lowerArray = "abcdefghijklmnopqrstuvwxyz"
  let upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numArray = "0123456789"
  let specArray = "!@#$%^&*()"
  let chosenArray = []
  let password = chosenArray
  let count = lowerCase + upperCase + nums + specChars

  if (lowerCase) {chosenArray += lowerArray}
  if (upperCase) {chosenArray += upperArray}
  if (nums) { chosenArray += numArray}
  if (specChars) { chosenArray += specArray}

  
let passwordGeneration = []
  for (i = 0; i < length; i++) {
    passwordGeneration.push(chosenArray [Math.floor(Math.random() * chosenArray.length)])
  }
console.log(passwordGeneration)
  document.getElementById('password').innerHTML = passwordGeneration.join('')


})
