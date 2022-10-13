const loginForm = document.getElementById('login-form')
const loginInputs = document.querySelectorAll('input')
const submitButton = document.getElementById('submit-button')
const iconForward = document.getElementById('icon-forward')
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

  if (allInputsAreValid) {
    submitButton.disabled = false
    disablePlayButton(true)
  } else {
    submitButton.disabled = true
    disablePlayButton(false)
  }
}

const hideElements = (elementsToHide) => {
  elementsToHide.forEach(element => element.classList.add('hide-element'))
}

const showElements = (elementsToShow) => {
  elementsToShow.forEach(element => element.classList.remove('hide-element'))
}

const disablePlayButton = state => {
  state
    ? iconForward.classList.remove('icon-disabled')
    : iconForward.classList.add('icon-disabled')
}

const submitForm = () => {
  const playersNames = Array.from(loginInputs).map(input => input.value)
  populateLocalStorage(playersNames)
  window.location.replace('./../hash/hash.html');
}

const preventRefresh = event => {
  event.preventDefault();
}

const populateLocalStorage = playersNames => {
  localStorage.setItem('playerOne', playersNames[0]);
  localStorage.setItem('playerTwo', playersNames[1]);
}
