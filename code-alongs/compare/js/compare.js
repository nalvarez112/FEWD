var firstNumber = document.querySelector(".first-number");
var secondNumber = document.querySelector(".second-number");
var sign = document.querySelector(".sign");
var compare = document.querySelector(".compare");

// EVENTS

// Listen for the compare button to be clicked

compare.addEventListener('click', compareNumbers);



// EVENT HANDLERS
//----------------------------
// Compare first and second number
// Update the page - change the sign

function compareNumbers(){

	var firstValue = firstNumber.value;
	firstValue = parseInt(firstValue);
	console.log('first:', firstValue);

	var secondValue = secondNumber.value;
	secondValue = parseInt(secondValue);
	console.log('second:', secondValue);

	// JS Comparison

	if (firstValue > secondValue) {
		sign.textContent = ">";

	} else if (firstValue < secondValue) {
		sign.textContent = "<";

	} else {
		sign.textContent = "=";
	}

}

