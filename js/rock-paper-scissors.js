function computerChoice() {
  let choices = ["rock", "paper", "scissors"]
  return choices[Math.floor(Math.random() * choices.length)]
}

function humanChoice(){
  let choice = prompt("Please enter rock, paper, or scissors.").toLowerCase()
  if (choice === "rock"){
    return choice;
  }
  else if (choice === "paper"){
    return choice;
  }
  else if (choice === "scissors"){
    return choice;
  }
  else {
    console.log("Something went horribly wrong, please try again!");
    let choice = humanChoice()
    return choice
  }
}

function playRound(human, computer) {
  if (human === computer){
    console.log("tie")
  }
  else if (human == "rock" && computer == "scissors") {
    console.log("You win, rock beats scissors!")
    return true
  }
  else if (human == "paper" && computer == "rock") {
    console.log("You win, paper beats rock!")
    return true
  }
  else if (human == "scissors" && computer == "paper") {
    console.log("You win, scissors beat paper!")
    return true 
  }
  else {
    console.log(`You lose, ${computer} beats ${human}!`)
    return false
  }
}

function game() {
  let humanScore = 0;
  let computerScore = 0;
  let turnsLeft = 5
  i = 0;
  while (i < 5){
   let round = playRound(humanChoice(), computerChoice())
   if (round == false){
    computerScore ++;
  }
  else if (round == true){
    humanScore ++;
  }
  i++
  console.log(`Player:${humanScore} Computer:${computerScore}`)
}
if (humanScore > computerScore){
  console.log("You win!");
}
else if (humanScore < computerScore){
  console.log("You lost =(")
}
else{
  console.log("The game ended with a tie.")
}
}

game()