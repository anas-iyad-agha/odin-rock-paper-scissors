var humanScore = 0;
var computerScore = 0;

function getHumanChoice() {
  return prompt("please Chose rock, paper or scissors").toLowerCase();
}

function getComputerChoice() {
  var num = Math.floor(Math.random() * 3);
  if (num == 0) {
    return "rock";
  }
  if (num == 1) {
    return "paper";
  }
  return "scissors";
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "Draw";
  }
  if (humanChoice == "rock") {
    if (computerChoice == "scissors") {
      humanScore++;
      return "you win";
    }
    computerScore++;
    return "you lose";
  }
  if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      humanScore++;
      return "you win";
    }
    computerScore++;
    return "you lose";
  }
  if (humanChoice == "scissors") {
    if (computerChoice == "paper") {
      humanScore++;
      return "you win";
    }
    computerScore++;
    return "you lose";
  }
}

function playGame() {
  for (var i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    var result = playRound(humanChoice, computerChoice);

    console.log(result);
    console.log(
      `your choice :: `,
      humanChoice,
      "| computer choice :: ",
      computerChoice
    );
  }
  console.log(
    "results :: computer score ",
    computerScore,
    "| your score",
    humanScore
  );
}

playGame();
