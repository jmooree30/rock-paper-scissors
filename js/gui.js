let computerScore = 0
let humanScore = 0
const h4 = document.querySelector('h4');
const h2 = document.querySelector('h2');

function reset(){
 humanScore = 0
 computerScore = 0
 h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
}

function buttonReset(){
  document.querySelector('#reset').addEventListener('click', reset)
}

function computerChoice() {
  let choices = ["rock", "paper", "scissors"]
  return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(human, computer) {
  const content = document.querySelector('p');
  if (human === computer){
    content.textContent = 'tie';
    h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
  }
  else if (human == "rock" && computer == "scissors") {
    content.textContent = 'You win, rock beats scissors!';
    humanScore += 1;
    h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
  }
  else if (human == "paper" && computer == "rock") {
    content.textContent = 'You win, paper beats rock!';
    humanScore += 1;
    h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
  }
  else if (human == "scissors" && computer == "paper") {
    content.textContent = 'You win, scissors beats paper!';
    humanScore += 1;
    h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
  }
  else {
    content.textContent = `You lose, ${computer} beats ${human}!`;
    computerScore += 1;
    h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
  }
  if (computerScore == 5){
    reset();
    h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
    h2.textContent = 'Computer wins!';
    setTimeout(function(){
      h2.textContent = ''
    }, 2000);
  }
  else if (humanScore == 5){
    reset();
    h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
    h2.textContent = 'You win!';
    setTimeout(function(){
      h2.textContent = '';
    }, 2000);
  }
}

function game(){
  h4.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
     playRound(button.id, computerChoice())
   });
  });
}

function startGame(){
  document.querySelector('#start').addEventListener('click', game)
}

buttonReset()
startGame()