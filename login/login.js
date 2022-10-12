const loginForm = document.getElementById('login-form')
const loginInputs = document.querySelectorAll('input')
const submitButton = document.getElementById('submit-button')
const inputValidator = {
  firstname: false,
  secondname: false
}

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

const submitForm = () => {
  const playersNames = Array.from(loginInputs).map(input => input.value)
  // registerPlayersNames(playersNames)
  populateLocalStorage(playersNames)
  window.location.replace('./../hash/hash.html');

  // hideElements([loginForm])
  // showElements([chooseForm])

  // document.getElementById('choose-title').innerHTML = `<strong>${players[0].name}</strong> choose your size!`
}

const preventRefresh = event => {
  event.preventDefault();
}

const populateLocalStorage = playersNames => {
  localStorage.setItem('playerOne', playersNames[0]);
  localStorage.setItem('playerTwo', playersNames[1]);
}
