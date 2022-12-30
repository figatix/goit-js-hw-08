
const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form')
const resultObj = {}

function fillFormFields() {
  const formInfoLS =  JSON.parse(localStorage.getItem('feedback-form-state'))

  if (!formInfoLS) {
    return
  }

  for (let prop in formInfoLS) {
    formEl.elements[prop].value = formInfoLS[prop];
  }
}

fillFormFields()

function onInputText(e) {
  resultObj[e.target.name] = e.target.value
  localStorage.setItem('feedback-form-state', JSON.stringify(resultObj));
}

function onSubmit(e) {
  e.preventDefault()
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')))
  localStorage.removeItem('feedback-form-state')
  formEl.reset()
}

const onInputTextThrottle = throttle(onInputText, 500);
const onSubmitThrottle = throttle(onSubmit, 500);

formEl.addEventListener('input', onInputTextThrottle)
formEl.addEventListener('submit', onSubmitThrottle)
