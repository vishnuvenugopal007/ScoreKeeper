var p1button = document.getElementById('p1')
var p2button = document.getElementById('p2')

var p1Display = document.getElementById('p1-display')
var p2Display = document.getElementById('p2-display')

var p1Score = 0
var p2Score = 0

var gameOver = false
var winningScoreDisplay = document.querySelector('p span')
var winningScore = 7

var resetButton = document.getElementById('reset')
var numInput = document.querySelector('input')

p1button.addEventListener('click', function() {
  if(!gameOver){
    p1Score++
    if(p1Score === winningScore){
      p1Display.classList.add('winner')
      gameOver = true
    }
    p1Display.textContent = p1Score
  }
})

p2button.addEventListener('click', function() {
  if(!gameOver){
    p2Score++
    if(p2Score === winningScore){
      p2Display.classList.add('winner')
      gameOver = true
    }
    p2Display.textContent = p2Score
  }
})

resetButton.addEventListener('click', function() {
  reset()
})

function reset() {
  p1Score = 0
  p2Score = 0
  p1Display.textContent = p1Score
  p2Display.textContent = p2Score
  p1Display.classList.remove('winner')
  p2Display.classList.remove('winner')
  gameOver = false
}

numInput.addEventListener('change', function(){
  //this refers to what event is being listened on in this case
  winningScoreDisplay.textContent = this.value
  winningScore = Number(this.value)
  reset()
})
