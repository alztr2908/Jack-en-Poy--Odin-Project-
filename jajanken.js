//variables that will be used in #DOM
const buttons= document.querySelectorAll('button')
const myScore= document.getElementById('yourScore')
const computerScore= document.getElementById('compScore')
let yourScore= 0
let compScore= 0


// function of the website
function computerPlay(){
  var rps= ['rock','paper','scissors']
  var zz= Math.floor(Math.random() * rps.length)
  return rps[zz]
}

function playRound(playerSelection,choice2){
  if(playerSelection == choice2){
    return "IT'S A TIE. THE COMPUTER CHOSE THE SAME."
  }
  else if(playerSelection == 'rock'){
    if (choice2 == "paper") {
      compScore++
      return "You Lose! Paper beats Rock"
    } 
    else if (choice2 == "scissors") {
      yourScore++
      return "You Win! Rock beats Scissors"
    }
  }
  else if(playerSelection == 'paper'){
    if (choice2 === "rock") {
      yourScore++
      return "You Win! Paper beats Rock"
    } 
    else if (choice2 == "scissors") {
      compScore++
      return "You Lose! Scissors beats Paper"
    }
  }
  else if(playerSelection == 'scissors'){
    if (choice2 == "rock") {
      compScore++
      return "You Lose! Rock beats Scissors"
    } 
    else if (choice2 == "paper") {
      yourScore++
      return "You Win! Scissors beats Paper"
    }
  }
}


// code of the gameplay
for (var i = 0; i < buttons.length; i++) {
  var self = buttons[i];

  self.addEventListener('click', function (e) {  
      e.preventDefault()

      // call your awesome function here
      let playerSelection= this.textContent
      const choice2 = computerPlay()
      document.getElementById('result').textContent= (playRound(playerSelection,choice2))
      myScore.textContent= yourScore
      computerScore.textContent= compScore
  })
}



