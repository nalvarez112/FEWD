console.log("loaded js file");

// Marup
// <input class="fahrenheit">
// <button class="convert"></button>

// STRUCTURE
// --------------------------------------

var fahrenheit = document.querySelector (".fahrenheit");
var celsius = document.querySelector (".celsius")
var convert = document.querySelector (".convert");


// SET UP

var last;

// EVENTS
// --------------------------------------
celsius.addEventListener('keyup', keyupCelsius);
fahrenheit.addEventListener('keyup', keyupFahrenheit);
convert.addEventListener('click', convertTemp);

// EVENT HANDLER
// --------------------------------------
function keyupCelsius() {
	last = "celsius";
}
function keyupFahrenheit() {
	last = "fahrenheit";	
}
function convertTemp() {
	console.log("fn convert");

	if (last == "fahrenheit") {
		fahrenheitToCelsius();
	} else {
		celsiusToFahrenheit();
	}
}


// UPDATE PAGE
// --------------------------------------
function fahrenheitToCelsius () {

	console.log("fn fahrenheitToCelsius");

	// get data from page

	var f = parseInt(fahrenheit.value);
	console.log("f:",f);



	// do some work / processing
	var c = (f-32)*5/9;

	//  update the page
	celsius.value = c.toFixed();


}



function celsiusToFahrenheit () {

	console.log("fn celsiusToFahrenheit");
	// get data from page
	var c = parseInt(celsius.value);
	console.log("c:",c);

	// do some work / processing
		var f = (c*9/5)+32;

	//  update the page
	fahrenheit.value = f.toFixed();

}

