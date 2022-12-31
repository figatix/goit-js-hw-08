
const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form')
const resultObj = {}

function fillFormFields() {
  let formInfoLS = localStorage.getItem('feedback-form-state');

  if (formInfoLS) {
    formInfoLS = JSON.parse(formInfoLS)
    
    Object.entries(formInfoLS).forEach(([name, value]) => {
      resultObj[name] = value;
      formEl.elements[name].value = value;
    })
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
