const boardEl = document.getElementById("board");
const status = document.getElementById("status");
const resetbtn = document.getElementById("resetbtn");

const ROWS = 6;
const COLS = 7;

let board = [];
let currentPlayer = "red";
let running = true;

const buildBoard = () => {
  boardEl.innerHTML = "";
  board = [];
  for (let r = 0; r < ROWS; r++) {
    const row = [];
    for (let c = 0; c < COLS; c++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = r;
      cell.dataset.col = c;
      cell.addEventListener("click", () => dropDisc(c));
      boardEl.appendChild(cell);
      row.push("");
    }
    board.push(row);
  }
};

const getCell = (r, c) =>
  boardEl.querySelector(`[data-row="${r}"][data-col="${c}"]`);

const dropDisc = (col) => {
  if (!running) return;

  // baganii hamgiin dood hooson nudiig ol
  for (let r = ROWS - 1; r >= 0; r--) {
    if (board[r][col] === "") {
      board[r][col] = currentPlayer;
      getCell(r, col).classList.add(currentPlayer);
      if (checkWin(r, col)) {
        running = false;
        status.textContent = `${cap(currentPlayer)} wins!`;
        return;
      }
      if (isBoardFull()) {
        running = false;
        status.textContent = "It's a draw!";
        return;
      }
      currentPlayer = currentPlayer === "red" ? "yellow" : "red";
      status.textContent = `${cap(currentPlayer)}'s turn`;
      return;
    }
  }
};

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const isBoardFull = () => board.every((row) => row.every((cell) => cell !== ""));

const checkWin = (row, col) => {
  const player = board[row][col];
  const directions = [
    [0, 1], // horizontal
    [1, 0], // vertical
    [1, 1], // diagonal \
    [1, -1], // diagonal /
  ];

  for (const [dr, dc] of directions) {
    const line = [[row, col]];

    // neger chigleld shalgana
    for (let step = 1; step < 4; step++) {
      const r = row + dr * step;
      const c = col + dc * step;
      if (inBounds(r, c) && board[r][c] === player) line.push([r, c]);
      else break;
    }
    // esreg chigleld shalgana
    for (let step = 1; step < 4; step++) {
      const r = row - dr * step;
      const c = col - dc * step;
      if (inBounds(r, c) && board[r][c] === player) line.push([r, c]);
      else break;
    }

    if (line.length >= 4) {
      line.forEach(([r, c]) => getCell(r, c).classList.add("win"));
      return true;
    }
  }
  return false;
};

const inBounds = (r, c) => r >= 0 && r < ROWS && c >= 0 && c < COLS;

const resetGame = () => {
  currentPlayer = "red";
  running = true;
  status.textContent = "Red's turn";
  buildBoard();
};

buildBoard();
resetbtn.addEventListener("click", resetGame);
