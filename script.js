// Helper function: writes any HTML into the #out div
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
*/
function greet () {
  // TODO: Write your code here
  const userName= prompt("What is your name?");
  if(!userName || !userName.trim()){
    return
    render("<p class = 'text-muted'> No name entered </p>")}
    else{
    render(`<p> Hello ${userName}</p>`)
  }
    
}

/* 
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers () {
  // TODO: Write your code here
  const nums = prompt('Enter a list of numbers, seperated by commas: ')
  if (!nums){
    render("<p class = 'text-muted'> No numbers entered </p>")
    return
  }

  const numArray = nums
                  .split(',')
                  .map(n=> parseFloat(n.trim()))
                  .filter((n)=> !isNaN(n))
const sum = numArray.reduce((a,b) => a + b ,0)

const avg = sum / numArray.length

const list = numArray.map(n => `<li class = "list-group-item"> ${n}</li>`).join('')

render
  (`<p> Average: <strong> ${avg} </strong> </p>
    <ul class = "list-group">  ${list} </ul>`
  )
    

}

/* 
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay () {
  // TODO: Write your code here
  const h = new Date().getHours()

  let msg = ''

  if (h<12){
    msg = "Good Morning"
  }else if (h>12 && h<15){
    msg = "Good Afternoon"
  }else if (h>15 && h<18){
    msg = "Good Evening"
  }
  else{
    msg = "Good Night"
  }

  render(`<p>${msg}</p>`)
}

/* 
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween () {
  const minInput = prompt('Enter the minimum number:')
  const maxInput = prompt('Enter the maximum number:')
  const min = Number(minInput)
  const max = Number(maxInput)

  if (minInput === null || maxInput === null || minInput.trim() === '' || maxInput.trim() === '' || isNaN(min) || isNaN(max) || min >= max) {
    render('<p class="text-muted">Please enter valid minimum and maximum numbers.</p>')
    return
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  render(`<p>Random number: ${randomNumber}</p>`)
}

/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput () {
  // TODO: Write your code here
 render("<p class='text-muted'>No numbers entered</p>");
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)

/* 
  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Each time you press the button, the output text color cycles through a few choices (red, green, orange, etc.).
  3) Press the button to change the background color of the output box to a random color.
  4) Ask the user for a number and display that number doubled.
  
  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/

function changeTitle () {
  document.getElementById('pageTitle').textContent = 'JavaScript Functions Are Fun!'
  document.title = 'JavaScript Functions Are Fun!'
}

const textColors = ['red', 'green', 'orange', 'purple', 'blue']
let currentColorIndex = 0

function cycleColor () {
  document.getElementById('out').style.color = textColors[currentColorIndex]
  currentColorIndex++

  if (currentColorIndex === textColors.length) {
    currentColorIndex = 0
  }
}

const backgroundColors = ['hotpink', 'yellow', 'cyan', '#bf00ff', 'lime', 'orange']
let lastBackgroundColorIndex = -1

function changeBackgroundColor () {
  let randomIndex = Math.floor(Math.random() * backgroundColors.length)

  if (randomIndex === lastBackgroundColorIndex) {
    randomIndex = (randomIndex + 1) % backgroundColors.length
  }

  lastBackgroundColorIndex = randomIndex
  document.getElementById('out').style.backgroundColor = backgroundColors[randomIndex]
}

function doubleNumber () {
  const input = prompt('Enter a number:')
  const number = Number(input)

  if (input === null || input.trim() === '' || isNaN(number)) {
    render('<p class="text-muted">Please enter a valid number.</p>')
    return
  }

  render(`<p>${number} doubled is ${number * 2}.</p>`)
}

document.getElementById('btnChangeTitle').addEventListener('click', changeTitle)
document.getElementById('btnCycleColor').addEventListener('click', cycleColor)
document.getElementById('btnBgColor').addEventListener('click', changeBackgroundColor)
document.getElementById('btnDouble').addEventListener('click', doubleNumber)

document.getElementsByClassName('titlee')