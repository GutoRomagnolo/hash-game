const loginForm = document.getElementById('login-form')
const loginInputs = document.querySelectorAll('input')
const submitButton = document.getElementById('submit-button')
const chooseForm = document.getElementById('choose-form')
const inputValidator = {
  firstname: false,
  secondname: false
}

const players = []

loginInputs.forEach(input => {
  input.addEventListener('input', (onChangeInput) => {
      registerInputChanges(onChangeInput)
      checkInputsValidity()
  })
})

const registerInputChanges = (onChangeInput) => {
  const name = onChangeInput.target.getAttribute('name')

  onChangeInput.target.value.length > 0 
    ? inputValidator[name] = true
    : inputValidator[name] = false
}

const checkInputsValidity = () => {
  const inputKeys = Object.keys(inputValidator)
  const allInputsAreValid = inputKeys.every(key => inputValidator[key] === true)

  allInputsAreValid 
    ? submitButton.disabled = false 
    : submitButton.disabled = true
}

const hideElements = (elementsToHide) => {
  elementsToHide.forEach(element => element.classList.add('hide-element'))
}

const showElements = (elementsToShow) => {
  elementsToShow.forEach(element => element.classList.remove('hide-element'))
}

const preventRefresh = event => {
  event.preventDefault();
}

const submitForm = () => {
  const playersNames = Array.from(loginInputs).map(input => input.value)
  registerPlayersNames(playersNames)

  hideElements([loginForm])
  showElements([chooseForm])

  document.getElementById('choose-title').innerHTML = `<strong>${players[0].name}</strong> choose your size!`
}

const registerPlayersNames = playersNames => {
  const playerOne = {
    name: playersNames[0]
  }

  const playerTwo = {
    name: playersNames[1]
  }

  players.push(playerOne, playerTwo)
}

const handleChoice = () => {
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
  showElements([chooseForm])
}
