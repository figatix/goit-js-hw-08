const LOCAL_STORAGE_KEY = 'feedback-form-state'
const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form')

function fillFormFields() {
  let formInfoLS = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (formInfoLS) {
    formInfoLS = JSON.parse(formInfoLS)
    Object.entries(formInfoLS).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    })
  } 
}
fillFormFields()

function onInputText(e) {
  let userInfoLS = localStorage.getItem(LOCAL_STORAGE_KEY)
  userInfoLS = userInfoLS ? JSON.parse(userInfoLS) : {};
  userInfoLS[e.target.name] = e.target.value
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userInfoLS))
}

function onSubmit(e) {
  e.preventDefault()
  if (formEl.elements.message.value && formEl.elements.email.value) {
    console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    formEl.reset()
  }
}

const onInputTextThrottle = throttle(onInputText, 500);
const onSubmitThrottle = throttle(onSubmit, 500);

formEl.addEventListener('input', onInputTextThrottle)
formEl.addEventListener('submit', onSubmitThrottle)
