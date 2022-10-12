const chooseForm = document.getElementById('choose-form');
const gameBoard = document.getElementById('game-board');
const playersIdentifier = document.getElementById('players-names');
const boardCells = document.querySelectorAll('.cell');
const players = []
const gameStart = true;

const registerPlayersNames = () => {
  const playersNames = getNamesFromLocalStorage();
  
  players.push(
    { name: playersNames[0] },
    { name: playersNames[1] }
  )

  document.getElementById('choose-title').innerHTML = `<strong>${players[0].name}</strong>, choose your size!`
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

const returnGame = () => {
  localStorage.clear();
  window.location.replace('./../login/login.html');
}

registerPlayersNames();
listenUserChoice();
