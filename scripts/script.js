'use strict';
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const issue = document.getElementById('message');


const inputArray = [username, email, number, password, confirmPassword,issue];

const showError = function (input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
};

const showSuccess = function (input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};


// const isValidEmail = function (input) {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(input).toLowerCase());
// };


const checkEmail = function (input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(String(input.value).toLowerCase().trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
};
const checkNumber = function (input) {
  const mn =
  /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

  if (mn.test((input.value).trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Number is not valid is not valid');
  }
};

const checkRequired = function (inputArr) {
  inputArr.forEach((input) => {
    if (input.value === '') {
      showError(input, `${message(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};


const checkLength = function (input, min, max) {
  if (input.value.length < min) {
    showError(input, `${message(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${message(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
};



const checkPasswordMatch = function (input1, input2) {
  if (input1.value !== '' && input2.value !== '')
    if (input1.value !== input2.value) {
      showError(input2, 'Passwords not matched');
    } else {
      showSuccess(input1);
      showSuccess(input2);
    }
};



const message = function (input) {
  var errorMessage = input.id.replace(/-p/, ' P');
  return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
};


form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkRequired(inputArray);
  checkLength(username, 3, 15);
  checkEmail(email);
  checkLength(number, 10,10);
  checkNumber(number);
  checkLength(password, 5, 12);
  checkLength(issue, 10,300);
  checkPasswordMatch(password, confirmPassword);
  let noc = document.getElementById('message').value.length;
  document.getElementById('show').innerHTML = ` the number of characters is ${noc}`;
});