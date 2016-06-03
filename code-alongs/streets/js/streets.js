

// STRUCTURE
// --------------------------
var input = document.querySelector("input");
var button = document.querySelector("button");
var directions = document.querySelector(".directions");



// SET UP
// --------------------------

var streets = [];


// EVENT LISTENERS
//----------------------------



button.addEventListener('click', addStreet);


// EVENT HANDLER FUNCTIONS
// --------------------------

function addStreet(e){

	console.log('fn addStreet');
	console.log(e);

	// prevet defualt event to prevent behavior to keep form from submitting
	e.preventDefault();

	// error validation - return early if blank

	if (input.value == "") {
		return;
	}


	createStreet(input.value);

	streets.push(input.value);
	input.value ="";

}

// UPDATE PAGE
// --------------------------

function createStreet (name) {
	var li = document.createElement('li');
	li.textContent = name;
	directions.appendChild(li);
}