const chooseForm = document.getElementById('choose-form');
const gameBoard = document.getElementById('game-board');
const playersIdentifier = document.getElementById('players-names');
const boardCells = document.querySelectorAll('.cell');
const players = []
const gameStart = true;
const currentPlayer = null;

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
  
  players.push(
    { name: playersNames[0] },
    { name: playersNames[1] }
  )

  currentPlayer = players[0];
  document.getElementById('choose-title').innerHTML = `<strong>${currentPlayer.name}</strong>, choose your size!`
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
  const possibleChoices = document.getElementsByName('possible-choice')
  possibleChoices.forEach(choice => {
    choice.addEventListener('click', () => {
      registerPlayerChoice(choice)
    })
  })
}

const registerPlayerChoice = (choice) => {
  if(choice.id === 'cross-choice') {
    players[0].choice = 'cross'
    players[1].choice = 'circle'
  } else {
    players[0].choice = 'circle'
    players[1].choice = 'cross'
  }

  hideElements([chooseForm])
  showElements([gameBoard, playersIdentifier])
  listenCellClicks()
}

const isValidTurn = (clickedCell) => {
  if (clickedCell.innerText === 'X' || clickedCell.innerText === 'O'){
    return false;
  }

  return true;
};

const userAction = (clickedCell, index) => {
  if(isValidTurn(clickedCell) && isGameActive) {
    clickedCell.innerText = currentPlayer;
    clickedCell.classList.add(`player${currentPlayer}`);
    updateBoard(index);
    handleResultValidation();
    changePlayer();
  }
}

const returnGame = () => {
  localStorage.clear();
  window.location.replace('./../login/login.html');
}

registerPlayersNames();
listenUserChoice();
