let playerScore = 0;
let computerScore = 0;

let playersItem = "";
let computersItem = "";

let usersTurn = document.getElementById("users-turn");
let computersTurn = document.getElementById("computers-turn");

let outcome = document.getElementById("outcome");

let scoreBoard = document.getElementById("score-board");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let options = [rock, paper, scissors];

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    switch (option) {
      case rock:
        gameRound(rock, paper, scissors);
        break;
      case paper:
        gameRound(paper, scissors, rock);
        break;
      case scissors:
        gameRound(scissors, rock, paper);
        break;
      default:
        outcome.textContent =
          "Error, something went wrong. Please restart the game or reach out to developer";
    }
  });
});

function gameRound(userChoice, greaterThanUser, lessThanUser) {
  let random = Math.floor(Math.random() * 3);
  let computerChoice = options[random];

  usersTurn.textContent = `The user chose ${userChoice.id}`;
  computersTurn.textContent = `The computer chose ${computerChoice.id}`;

  switch (computerChoice.id) {
    case greaterThanUser.id:
      computerScore++;
      outcome.textContent = "The Computer Won!";
      break;
    case lessThanUser.id:
      playerScore++;
      outcome.textContent = "The User Won!";
      break;
    default:
      outcome.textContent = "It was a Tie!";
  }

  scoreBoard.textContent = `(User) ${playerScore} - ${computerScore} (Computer)`;
}
