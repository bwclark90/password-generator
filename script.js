let generate = document.getElementById("generate")

// defining variables // 
document.getElementById('generate').addEventListener('click', () => {
  let length = parseInt(prompt("how long do you want your password?"))
  let lowerCase = confirm("lower case?")
  let upperCase = confirm("upper case?")
  let nums = confirm("numbers?")
  let specChars = confirm("special characters?")
  let lowerArray = "abcdefghijklmnopqrstuvwxyz"
  let upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numArray = "0123456789"
  let specArray = "!@#$%^&*()"
  let chosenArray = []
  let passwordGeneration = []
  let count = lowerCase + upperCase + nums + specChars
  let lowerCon = "b"
  let upperCon = "C"
  let specCon = "$"
  let numCon = "8"
  let conAmount = 0

  // if statement for chosen user data
  if (lowerCase) {chosenArray += lowerArray
  passwordGeneration.push(lowerCon) 
conAmount ++}

  if (upperCase) {chosenArray += upperArray
  passwordGeneration.push(upperCon)
conAmount ++}
  if (nums) { chosenArray += numArray
    passwordGeneration.push(numCon)
  conAmount ++}
  if (specChars) { chosenArray += specArray
    passwordGeneration.push(specCon)
  conAmount ++}
  
// if user does not select a parameter, then alert or redo
  if (lowerCase === false && upperCase === false && specChars === false && nums === false) {
    alert("You must choose at least one parameter") 
    document.getElementById("generate")  }
      else{
   



  
//array selection from random generator 
  for (i = 0; i < length - conAmount; i++) {
    passwordGeneration.push(chosenArray [Math.floor(Math.random() * chosenArray.length)])
  }
console.log(passwordGeneration)
  document.getElementById('password').innerHTML = passwordGeneration.join('')


  }})
