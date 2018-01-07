function computerChoice() {
  let choices = ["rock", "paper", "scissors"]
  return choices[Math.floor(Math.random() * choices.length)]
}

function humanChoice(){
  let choice = prompt().toLowerCase()
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
    humanChoice()
  }
}

function playRound(human, computer) {
  if (human === computer){
    console.log("tie")
  }
  else if (human == "rock" && computer == "scissors") {
    console.log("You win!")
  }
  else if (human == "paper" && computer == "rock") {
    console.log("You win!")
  }
  else if (human == "scissors" && computer == "paper") {
    console.log("You win!")
  }
  else {
    console.log("You lose!")
  }
}

playRound(computerChoice(), humanChoice())