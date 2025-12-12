var result = document.querySelector("#result");

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
    ("Draw");
    result.textContent =
      "Draw you chose :: " +
      humanChoice +
      " computer chose :: " +
      computerChoice;
  } else if (humanChoice == "rock") {
    if (computerChoice == "scissors") {
      result.textContent =
        "Win you chose :: " +
        humanChoice +
        " computer chose :: " +
        computerChoice;
    } else {
      result.textContent =
        "Lose you chose :: " +
        humanChoice +
        " computer chose :: " +
        computerChoice;
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      result.textContent =
        "Win you chose :: " +
        humanChoice +
        " computer chose :: " +
        computerChoice;
    } else {
      result.textContent =
        "Lose you chose :: " +
        humanChoice +
        " computer chose :: " +
        computerChoice;
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "paper") {
      result.textContent =
        "Win you chose :: " +
        humanChoice +
        " computer chose :: " +
        computerChoice;
    } else {
      result.textContent =
        "Lose you chose :: " +
        humanChoice +
        " computer chose :: " +
        computerChoice;
    }
  }
}

var rockButton = document.querySelector("#rock");
var paperButton = document.querySelector("#paper");
var scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
