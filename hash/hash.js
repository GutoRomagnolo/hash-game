const chooseForm = document.getElementById('choose-form');
const gameBoard = document.getElementById('game-board');
const playersIdentifier = document.getElementById('players-names');
const boardCells = document.querySelectorAll('.board-cell');
const playerChooseRequest = document.getElementById('choose-title');
const playerTurnAnnouncement = document.getElementById('player-turn-announcement');
const winnerAnnouncement = document.getElementById('winner-announcement');
const tieAnnouncement = document.getElementById('tie-announcement');

const playerOne = { markedCells: [] };
const playerTwo = { markedCells: [] };
const boardMarks = []

let currentPlayer = null;
let gameIsRunning = true;

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const registerPlayersNames = () => {
  const playersNames = getNamesFromLocalStorage();
  
  playerOne.name = playersNames[0]
  playerTwo.name = playersNames[1]

  currentPlayer = playerOne;
  playerChooseRequest.innerHTML = `<strong>${currentPlayer.name}</strong>, choose your size!`
}

const getNamesFromLocalStorage = () => {
  const playersNames = [localStorage.getItem('playerOne'), localStorage.getItem('playerTwo')];
  return playersNames
}

const hideElements = (elementsToHide) => {
  elementsToHide.forEach(element => element.classList.add('hide-element'))
}

const showElements = (elementsToShow) => {
  elementsToShow.forEach(element => element.classList.remove('hide-element'))
}

const listenUserChoice = () => {
  const crossChoice = document.getElementById('cross-choice');
  const circleChoice = document.getElementById('circle-choice');
  const possibleChoices = [crossChoice, circleChoice]

  possibleChoices.forEach(choice => {
    choice.addEventListener('click', () => {
      registerPlayerChoice(choice)
    })
  })
}

const listenPlayersActions = () => {
  boardCells.forEach(cell => {
    cell.addEventListener('click', () => {
      const cellDisabled = cell.getAttribute('data-disabled-click')

      if(cellDisabled === 'false' && gameIsRunning) {
        cell.setAttribute('data-disabled-click', true);
        addImageOnCell(cell)
        computePlayerAction(cell)
        changePlayerTurn()
      }
    })
  })
}

const registerPlayerChoice = (choice) => {
  if (choice.className === 'cross-button') {
    playerOne.choice = 'cross'
    playerTwo.choice = 'circle'
  } else {
    playerOne.choice = 'circle'
    playerTwo.choice = 'cross'
  }

  hideElements([chooseForm]);
  showElements([gameBoard, playersIdentifier]);
  listenPlayersActions();
}

const addImageOnCell = (cell) => {
  const playerSign = document.createElement('img');
  playerSign.classList.add('player-sign')

  cell.appendChild(playerSign)
  playerSign.src = `./../assets/icon-${currentPlayer.choice}.svg`
}

const computePlayerAction = (cell) => {
  const markedCell = cell.getAttribute('data-cell-index')
  const integerCellIndex = parseInt(markedCell)

  currentPlayer.markedCells.push(integerCellIndex)
  boardMarks.push(integerCellIndex)

  checkTieConditions();
  checkWinConditions();
}

const checkTieConditions = () => {
  if (boardMarks.length >= 9 && gameIsRunning) {
    gameIsRunning = false;

    showElements([tieAnnouncement]);
    hideElements([playersIdentifier, gameBoard])
  }
}

const checkWinConditions = () => {
  winConditions.forEach(winCondition => {
    const playerOneWin = winCondition.every(condition => playerOne.markedCells.includes(condition))
    const playerTwoWin = winCondition.every(condition => playerTwo.markedCells.includes(condition))

    if (playerOneWin || playerTwoWin ) {
      gameIsRunning = false;
      announceWinner();
    }
  })
}

const announceWinner = () => {
  const winnerTitle = document.getElementById('winner-title');

  showElements([winnerAnnouncement]);
  hideElements([playersIdentifier, gameBoard])
  winnerTitle.innerHTML = `Congratulations, ${currentPlayer.name}, you win!`
}

const changePlayerTurn = () => {
  currentPlayer === playerOne
    ? currentPlayer = playerTwo
    : currentPlayer = playerOne

    playerTurnAnnouncement.innerHTML = `<strong>${currentPlayer.name}</strong>, your turn!`
}

const listenRefresh = () => {
  document.addEventListener("keydown", event => {
    if (event.key === 'F5') {
      returnGame();
    }
  })
}

const returnGame = () => {
  localStorage.clear();
  window.location.replace('./../login/login.html');
}

registerPlayersNames();
listenRefresh();
listenUserChoice();
changePlayerTurn();
