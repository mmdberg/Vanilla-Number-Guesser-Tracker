var userGuess = document.querySelector('#guess')
var submitButton = document.querySelector('.submit-button')
var lastGuess = document.querySelector('.last-guess')
var lastGuessWas = document.querySelector('.last-guess-was')
var result = document.querySelector('.result')
var clearButton = document.querySelector('.clear-button')
var resetButton = document.querySelector('.reset-button')
var minimum = document.querySelector('.min')
var maximum = document.querySelector('.max')
var rangeButton = document.querySelector('.range-button')
var main = document.querySelector('main')
var rangeScreen = document.querySelector('.pick-range')
var showRange = document.querySelector('.show-range')
var previousGuesses = document.querySelector('.previous-guesses')

rangeButton.addEventListener('click', handleRange);
submitButton.addEventListener('click', handleSubmit);
clearButton.addEventListener('click', handleClear);
resetButton.addEventListener('click', handleReset);

var randomNumber;
var min;
var max;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function handleRange(event) {
  event.preventDefault()
  min = parseInt(minimum.value)
  max = parseInt(maximum.value)
  randomNumber = generateRandomNumber(min, max)
  showRange.innerText = `Guess a number between ${min} and ${max}!`
  main.style.display = 'block'
  rangeScreen.style.display = 'none'
}

function handleSubmit(event) {
  event.preventDefault()
  var userInput = parseInt(userGuess.value)
  if (userInput > max || userInput < min) {
    lastGuessWas = '';
    lastGuess.innerText = '';
    result.innerText = 'doh. Guess a number within the range.'
  } else {
    showResult(userInput, randomNumber)
    resetButton.style.display = 'block'
    previousGuesses.style.display = 'block'
    var previousGuessesChild = document.createElement('p')
    previousGuesses.append(previousGuessesChild)
    previousGuessesChild.innerHTML = userInput
  }
}

function showResult(guess, randomNumber) {
  lastGuessWas.innerText = 'Your last guess was:'
  lastGuess.innerText = guess
  if (guess === randomNumber) {
    result.innerText = 'YER RIGHT'
  } else if (guess > randomNumber) {
    result.innerText = 'nah, too high, guess again'
  } else {
    result.innerText = 'nah, too low, guess again'
  }
}

function handleClear(event) {
  event.preventDefault()
  userGuess.value = ''
}

function handleReset() {
  userGuess.value = '';
  // result.innerText = 'Pick a range!';
  lastGuessWas = '';
  lastGuess.innerText = '';
  minimum.value = '';
  maximum.value = '';
  main.style.display = 'none'
  rangeScreen.style.display = 'block';
  resetButton.style.display = 'none';
  previousGuesses.style.display = 'none';
}






