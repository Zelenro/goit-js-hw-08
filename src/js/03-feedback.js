const _ = require('lodash');
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const updateStorage = _.throttle(() => {
  const feedbackFormState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}, 500);

const fillFormFields = () => {
  const feedbackFormState = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (feedbackFormState) {
    emailInput.value = feedbackFormState.email || '';
    messageInput.value = feedbackFormState.message || '';
  } else {
    emailInput.value = '';
    messageInput.value = '';
  }
};

fillFormFields();
emailInput.addEventListener('input', updateStorage);
messageInput.addEventListener('input', updateStorage);
