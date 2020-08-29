const letPlay = document.querySelector('#let-play')
const mainMenu = document.querySelector('.main-menu')
const playMenu = document.querySelector('.play-menu')
const option = document.querySelectorAll('.choose')
const leftHand = document.querySelector('.left')
const rightHand = document.querySelector('.right')
const hands = document.querySelectorAll('.hands img')

const playerScore = document.querySelector('.player-score')
let player = 0

const computerScore = document.querySelector('.computer-score')
let bot = 0

const winner = document.querySelector('.choose-option')

letPlay.addEventListener('click', () => {
  mainMenu.style.display = 'none'

  playMenu.style.display = 'flex'
})


option.forEach(button => {
  button.addEventListener('click',() => {
    leftHand.src = `./assets/rock.png`
    rightHand.src = `./assets/rock.png`
  
    if(button.classList.contains('rock')) {
      leftHand.style.animation = 'shakePlayer 2s ease'
      rightHand.style.animation = 'shakeComputer 2s ease'
      setTimeout(() => {
        zz = computerPlay()
        mechanics('rock', zz)
        leftHand.src = `./assets/rock.png`
        rightHand.src = `./assets/${zz}.png`
      },2000)    
    } else if(button.classList.contains('paper')) {
      leftHand.style.animation = 'shakePlayer 2s ease'
      rightHand.style.animation = 'shakeComputer 2s ease'
      setTimeout(() => {
        ss = computerPlay()
        mechanics('paper', ss)
        leftHand.src = `./assets/paper.png`
        rightHand.src = `./assets/${ss}.png`
      },2000)
    } else if(button.classList.contains('scissors')) {
      leftHand.style.animation = 'shakePlayer 2s ease'
      rightHand.style.animation = 'shakeComputer 2s ease'
      setTimeout(() => {
        aa = computerPlay()
        mechanics('scissors', aa)
        leftHand.src = `./assets/scissors.png`
        rightHand.src = `./assets/${aa}.png`
      },2000)
    }

    // Changing the color of the scores 
    setTimeout(() => {
      if (player > bot) {
        playerScore.style.color = 'green'
        computerScore.style.color = 'red'
      } else if (player < bot){
        playerScore.style.color = 'red'
        computerScore.style.color = 'green'
      } else {
        playerScore.style.color = 'white'
        computerScore.style.color = 'white'
      }
    },2000)

    hands.forEach(hand => {
      hand.addEventListener('animationend', function() {
        this.style.animation = ''
      })
    })
  })
})




function mechanics(sign,computer) {
  if (sign === computer) {
    winner.textContent = 'It is a tie'
    return
  }

  if (sign === 'rock') {
    if (computer === 'scissors') {
      winner.textContent = 'Player Wins'
      player += 1
      playerScore.textContent = player
      return 
    } else {
      winner.textContent = 'Computer Wins'
      bot += 1
      computerScore.textContent = bot
      return
    }
  }

  if (sign === 'paper') {
    if (computer === 'rock') {
      winner.textContent = 'Player Wins'
      player += 1
      playerScore.textContent = player
      return 
    } else {
      winner.textContent = 'Computer Wins'
      bot += 1
      computerScore.textContent = bot
      return
    }
  }

  if (sign === 'scissors') {
    if (computer === 'paper') {
      winner.textContent = 'Player Wins'
      player += 1
      playerScore.textContent = player
      return 
    } else {
      winner.textContent = 'Computer Wins'
      bot += 1
      computerScore.textContent = bot
      return
    }
  }
}

function computerPlay(){
  rps= ['rock','paper','scissors']
  decision= [0,1,2]

  random = shuffle(decision)

  return rps[random[Math.floor(Math.random()*(random.length-1))]]
}

function shuffle(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  
  return o;
};

