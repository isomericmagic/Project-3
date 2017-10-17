//grab the name element and set focus to it
function setFocusToName(){
  document.getElementById("name").focus();
}

setFocusToName();

//set up a listener on the title list and add a text box
//if other is selected
const jobRole = document.getElementById('title');
let fieldExists = false;
let fieldSet = jobRole.parentNode;

//add a text area field with job role placeholder if 
//other is selected and remove it if other is then unselected
jobRole.addEventListener('change', function() {
let textArea = document.createElement('textarea');
let br = document.createElement('br');
  if (this.value === 'other') {
	textArea.id = "other-title";
	textArea.placeholder = "Your Job Role";
	fieldSet.appendChild(br);
	fieldSet.appendChild(textArea);
	fieldExists = true;
  } else if (fieldExists == true) {
	fieldSet.removeChild(fieldSet.lastChild);
	fieldSet.removeChild(fieldSet.lastChild);
	fieldExists = false;
  }
});


//display only matching tshirt colors for selected design
const tshirtDesign = document.getElementById('design');
const tshirtColor = document.getElementById('color');

tshirtDesign.addEventListener('change', function() {
let shirt1 = document.createElement('option');
let shirt2 = document.createElement('option');
let shirt3 = document.createElement('option');
let shirt4 = document.createElement('option');
let shirt5 = document.createElement('option');
let shirt6 = document.createElement('option');

  if (this.value === 'js puns') {
	  tshirtColor.innerHTML = '';
	  shirt1.value = 'cornflowerblue';
	  shirt1.textContent = 'Cornflower Blue (JS Puns shirt only)';
	  shirt2.value = 'darkslategrey';
	  shirt2.textContent = 'Dark Slate Grey (JS Puns shirt only)';
	  shirt3.value = 'gold';
	  shirt3.textContent = 'Gold (JS Puns shirt only)';
	  tshirtColor.appendChild(shirt1);
	  tshirtColor.appendChild(shirt2);
	  tshirtColor.appendChild(shirt3);
  } else if (this.value === 'heart js') {
	  tshirtColor.innerHTML = '';
	  shirt4.value = 'tomato';
	  shirt4.textContent = 'Tomato (I ♥ JS shirt only)';
	  shirt5.value = 'steelblue';
	  shirt5.textContent = "Steel Blue (I ♥ JS shirt only)";
	  shirt6.value = 'dimgrey';
	  shirt6.textContent = "Dim Grey (I ♥ JS shirt only)";
	  tshirtColor.appendChild(shirt4);
	  tshirtColor.appendChild(shirt5);
	  tshirtColor.appendChild(shirt6);
  } else {
	  tshirtColor.innerHTML = '';
	  shirt1.value = 'cornflowerblue';
	  shirt1.textContent = 'Cornflower Blue (JS Puns shirt only)';
	  shirt2.value = 'darkslategrey';
	  shirt2.textContent = 'Dark Slate Grey (JS Puns shirt only)';
	  shirt3.value = 'gold';
	  shirt3.textContent = 'Gold (JS Puns shirt only)';
	  shirt4.value = 'tomato';
	  shirt4.textContent = 'Tomato (I ♥ JS shirt only)';
	  shirt5.value = 'steelblue';
	  shirt5.textContent = "Steel Blue (I ♥ JS shirt only)";
	  shirt6.value = 'dimgrey';
	  shirt6.textContent = "Dim Grey (I ♥ JS shirt only)";
	  tshirtColor.appendChild(shirt1);
	  tshirtColor.appendChild(shirt2);
	  tshirtColor.appendChild(shirt3);
	  tshirtColor.appendChild(shirt4);
	  tshirtColor.appendChild(shirt5);
	  tshirtColor.appendChild(shirt6);
  }
});

//set up checkbox behavior
const allCheckboxes = document.querySelector('.activities')
let checkbox1 = document.getElementsByName("all")[0];
let checkbox2 = document.getElementsByName("js-frameworks")[0];
let checkbox3 = document.getElementsByName("js-libs")[0];
let checkbox4 = document.getElementsByName("express")[0];
let checkbox5 = document.getElementsByName("node")[0];
let checkbox6 = document.getElementsByName("build-tools")[0];
let checkbox7 = document.getElementsByName("npm")[0];
let runningTotal = document.createElement('div');
totalAmount = 0

checkbox1.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  if (isChecked) {
	totalAmount += 200;
    runningTotal.textContent = 'Total: $' + totalAmount;
	allCheckboxes.appendChild(runningTotal);
  } else {
	totalAmount -= 200;
    runningTotal.textContent = 'Total: $' + totalAmount;
	allCheckboxes.appendChild(runningTotal);
  }
});

checkbox2.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  if (isChecked) {
    checkbox4.disabled = true;
    totalAmount += 100;
    runningTotal.textContent = 'Total: $' + totalAmount;
	allCheckboxes.appendChild(runningTotal);
  } else {
    checkbox4.disabled = false;
    totalAmount -= 100;
    runningTotal.textContent = 'Total: $' + totalAmount;
	allCheckboxes.appendChild(runningTotal);
  }
});

checkbox3.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  if (isChecked) {
    checkbox5.disabled = true;
	totalAmount += 100;
    runningTotal.textContent = 'Total: $' + totalAmount;
	allCheckboxes.appendChild(runningTotal);
  } else {
    checkbox5.disabled = false;
	totalAmount -= 100;
    runningTotal.textContent = 'Total: $' + totalAmount;
	allCheckboxes.appendChild(runningTotal);
  }
});

checkbox4.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  if (isChecked) {
    checkbox2.disabled = true;
	totalAmount += 100;
    runningTotal.textContent = 'Total: $' + totalAmount;
	allCheckboxes.appendChild(runningTotal);
  } else {
    checkbox2.disabled = false;
	totalAmount -= 100;
    runningTotal.textContent = 'Total: $' + totalAmount;
	allCheckboxes.appendChild(runningTotal);
  }
});

checkbox5.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  if (isChecked) {
    checkbox3.disabled = true;
	totalAmount += 100;
    runningTotal.textContent = 'Total: $' + totalAmount;
	allCheckboxes.appendChild(runningTotal);
  } else {
    checkbox3.disabled = false;
	totalAmount -= 100;
    runningTotal.textContent = 'Total: $' + totalAmount;
	allCheckboxes.appendChild(runningTotal);
  }
});

checkbox6.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  if (isChecked) {
    totalAmount += 100;
    runningTotal.textContent = 'Total: $' + totalAmount;
	allCheckboxes.appendChild(runningTotal);
  } else {
    totalAmount -= 100;
    runningTotal.textContent = 'Total: $' + totalAmount;
	allCheckboxes.appendChild(runningTotal);
  }
});

checkbox7.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  if (isChecked) {
    totalAmount += 100;
    runningTotal.textContent = 'Total: $' + totalAmount;
	allCheckboxes.appendChild(runningTotal);
  } else {
    totalAmount -= 100;
    runningTotal.textContent = 'Total: $' + totalAmount;
	allCheckboxes.appendChild(runningTotal);
  }
});

//setup payment info behavior
const paymentSection = document.getElementById('payment');
paymentSection.value = 'credit card';
let thirdFieldSet = paymentSection.parentNode;
let creditCardDiv = document.getElementById('credit-card');
let firstParagraph = document.getElementsByTagName('p')[0];
let secondParagraph = document.getElementsByTagName('p')[1];
firstParagraph.style.display = 'none';
secondParagraph.style.display = 'none';
creditCardDiv.style.display = '';

paymentSection.addEventListener('change', function() {
  if (this.value === 'credit card') {
	firstParagraph.style.display = 'none';
	secondParagraph.style.display = 'none';
	creditCardDiv.style.display = '';
  } else if (this.value === 'paypal') {
    firstParagraph.style.display = '';
	secondParagraph.style.display = 'none';
	creditCardDiv.style.display = 'none';
  } else if (this.value === 'bitcoin') {
    secondParagraph.style.display = '';
	firstParagraph.style.display = 'none';
	creditCardDiv.style.display = 'none';
  } else {
	firstParagraph.style.display = 'none';
	secondParagraph.style.display = 'none';
	creditCardDiv.style.display = 'none';
  }
});

//setup form validation
const registerButton = document.getElementsByTagName('button')[0];
let nameField = document.getElementById('name');
let emailField = document.getElementById('mail');
let creditCardNumberField = document.getElementById('cc-num');
let creditCardZipField = document.getElementById('zip');
let creditCardCVVField = document.getElementById('cvv');

function validateName () {
  if (nameField.value.length > 0) {
    return true;
  } else {
    return false;
  }	
}

function validateEmail () {
  let emailLength = emailField.value.length;	
  let lastChar = emailField.value.charAt(emailLength - 1);
  lastChar = lastChar.toUpperCase();
  let secondLastChar = emailField.value.charAt(emailLength - 2);
  secondLastChar = secondLastChar.toUpperCase();
  let thirdLastChar = emailField.value.charAt(emailLength - 3);
  thirdLastChar = thirdLastChar.toUpperCase();
  let fourthLastChar = emailField.value.charAt(emailLength - 4);
  
  if (emailLength > 6 && emailField.value.includes('@') && emailField.value.charAt(emailLength - 5) !== '@' && emailField.value.charAt(0) !== '@' 
      && fourthLastChar === '.' && thirdLastChar === 'C' && secondLastChar === 'O' && lastChar === 'M') {
    return true;
  } else {
    return false;
  }
}

function checkActivities () {
  if (totalAmount > 0) { 
    return true;
  } else {
	return false;  
  }
}

function isCreditCardSelected () {	
  if (creditCardDiv.style.display === 'none') {
	return false;
  } else {
	return true;
  }
}

function checkCreditCardNumber () {
let cardNumberLength = creditCardNumberField.value.length;
  if (isCreditCardSelected() && !isNaN(creditCardNumberField.value) && cardNumberLength >= 13 && cardNumberLength <= 16) {
	return true;
  } else {
	return false;
  }
}

function checkCreditCardZip () {
let zipLength = creditCardZipField.value.length;
  if (isCreditCardSelected() && !isNaN(creditCardZipField.value) && zipLength === 5) {
	return true;
  } else {
	return false;
  }
}

function checkCreditCardCVV () {
let cvvLength = creditCardCVVField.value.length;
  if (isCreditCardSelected() && !isNaN(creditCardCVVField.value) && cvvLength === 3) {
	return true;
  } else {
	return false;
  }
}				

registerButton.addEventListener('click', () => {
  if (!validateName ()) {
	alert('Invalid Name.');
	return false;
  } else if (!validateEmail ()) {
	alert('Invalid Email.');
	return false;
  } else if (!checkActivities ()) {
	alert('At least one activity must be selected.');
	return false;
  } else if (!checkCreditCardNumber ()) {
	alert('Invalid credit card number.');
	return false;
  } else if (!checkCreditCardZip ()) {
	alert('Invalid Zip Code.');
	return false;
  } else if (!checkCreditCardCVV ()) {
	alert('Invalid CVV.');
	return false;
  } else {
	alert('Form Submitted!');
	return true;
  }
});
