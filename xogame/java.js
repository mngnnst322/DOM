const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");
const resetbtn = document.getElementById("resetbtn");

let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let running = true;

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      running = false;
      status.textContent = `Player ${gameState[a]} wins!`;
      condition.forEach((i) => cells[i].classList.add("win"));
      return;
    }
  }

  if (!gameState.includes("")) {
    running = false;
    status.textContent = "It's a draw!";
  }
};

const cellClicked = (event) => {
  const index = event.target.dataset.index;

  if (gameState[index] !== "" || !running) {
    return;
  }

  gameState[index] = currentPlayer;
  event.target.textContent = currentPlayer;
  checkWinner();

  if (running) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = `Player ${currentPlayer}'s turn`;
  }
};

const resetGame = () => {
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  running = true;
  status.textContent = "Player X's turn";
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("win");
  });
};

cells.forEach((cell) => cell.addEventListener("click", cellClicked));
resetbtn.addEventListener("click", resetGame);
