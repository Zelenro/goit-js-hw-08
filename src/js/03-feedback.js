const { functions, constant } = require('lodash');
const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

const FEEDBACK_FORM = 'feedback-form-state';
let feedbackFormState = {}

const updateStorage = throttle((e) => {
  feedbackFormState[e.target.name] = e.target.value.trim();
  localStorage.setItem(
    FEEDBACK_FORM,
    JSON.stringify(feedbackFormState)
  );
}, 500);

const fillFormFields = () => {
  try {
    const data = localStorage.getItem(FEEDBACK_FORM);
    if (!data) return;
    feedbackFormState = JSON.parse(data);
    Object.entries(feedbackFormState).forEach(([key, val]) => {
      form.elements[key].value = val;
    });
  } catch (error) {
    console.log(message);
  }
}

function onSubmit(e){
  e.preventDefault();
  console.log(feedbackFormState);
  feedbackFormState = {};
  form.reset();
  localStorage.removeItem(FEEDBACK_FORM);
}

fillFormFields();
form.addEventListener('input', updateStorage)
form.addEventListener('submit', onSubmit)

