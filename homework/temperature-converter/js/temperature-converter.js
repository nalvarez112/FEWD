console.log("loaded js file");

// Marup
// <input class="fahrenheit">
// <button class="convert"></button>

// STRUCTURE
// --------------------------------------

var fahrenheit = document.querySelector (".fahrenheit");
var celsius = document.querySelector (".celsius")
var convert = document.querySelector (".convert");

// EVENTS
// --------------------------------------
convert.addEventListener('click', fahrenheitToCelsius);
convert.addEventListener('click', celsiusToFahrenheit);

// EVENT HANDLER
// --------------------------------------

function fahrenheitToCelsius () {

	console.log("fn fahrenheitToCelsius");

	// get data from page

	var f = parseInt(fahrenheit.value);
	console.log("f:",f);



	// do some work / processing

		var c = (f-32)*5/9;


	//  update the page


	fahrenheit.value = c;


}



function celsiusToFahrenheit () {

	console.log("fn celsiusToFahrenheit");

	// get data from page

	var c = parseInt(celsius.value);
	console.log("c:",c);



	// do some work / processing

		var f = (c*9/5)+32;



	//  update the page


	celsius.value = f;

}