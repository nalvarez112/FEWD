// Structure
// ------------------------------------------------
var register = document.querySelector(".register");
var ticket = document.querySelector(".ticket");
var entries = document.querySelector(".entries");
var total = document.querySelector(".total");
var input = document.querySelector("input");

console.log("Structure Running")

// Setup
// -----------------------------------------------

var price = []
// Events
// ------------------------------------------------
	input.addEventListener('keypress', typePrice);
		console.log("event listener typePrice");

// Event handler functions
// ------------------------------------------------
	function typePrice (e) {

		console.log("fn typePrice");
		console.log(e);
		
		// error validation - return early if blank
		if (e.keyCode ==13) {
			// prevet defualt event to prevent behavior to keep form from submitting
			e.preventDefault();

			// run function to add LI to the line

			pushPrice(input.value);

			// Update the price

			updatePrice();


			input.value="";
		}
		

	}
		


// Update page functions
// ------------------------------------------------



		function pushPrice (price){
			var li = document.createElement('li')
			li.textContent = "$" + price;
			entries.appendChild(li);
		}


		function updatePrice () {
			var zero = 0;

		}


// Utility functions
// ------------------------------------------------
