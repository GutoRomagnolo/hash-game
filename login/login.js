const loginForm = document.getElementById('login-form')
const firstNameInput = document.getElementById('first-name')
const secondNameInput = document.getElementById('second-name')
const continueButton = document.getElementById('continue-button')
const submitButton = document.getElementById('submit-button')

const nextStep = () => {
    elementsToHide = [continueButton]
    elementsToShow = [secondNameInput, submitButton]

    hideElements(elementsToHide)
    showElements(elementsToShow)
}

const hideElements = (elementsToHide) => {
    elementsToHide.forEach(element => element.classList.add('ghost-input'))
}

const showElements = (elementsToShow) => {
    elementsToShow.forEach(element => element.classList.remove('ghost-input'))
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const firstName = firstNameInput.value
    const secondName = secondNameInput.value
    window.location.replace('./../hash-game/hash.html')
})