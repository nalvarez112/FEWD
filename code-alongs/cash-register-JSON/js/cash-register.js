// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");


// Setup
// ------------------------------------------------
var totalValue = 0;



// SETUP OBJECTS
// -------------------------------------------------


var receipt = {
	lineItems : []
}





// Events
// ------------------------------------------------
form.addEventListener("submit", enter);


// Event handler functions
// ------------------------------------------------
function enter(event) {
	event.preventDefault();

	// get the current entry value, convert to number with parseFloat
	var entry = parseFloat(input.value);
	receipt.lineItems.push(entry);

	
	

	// clean up!
	input.value = "";
}


function createReceipt () {

}

function createLineItem(cost){

	// step 1.  create and append the new list item
	var li = document.createElement("li");

	// step 2. set the text content for both the new list item and the total
	li.textContent = formatCurrency(cost);
	total.textContent = formatCurrency(totalValue);

	// Step Three. append element
	entries.appendChild(li);


	// update the value for the total
	totalValue = totalValue + cost;


}

// Utility functions
// ------------------------------------------------
function formatCurrency(number) {
	var currency = parseFloat(number);
	currency = currency.toFixed(2);
	currency = "$" + currency;
	return currency;
}

















var bus = {
 "arrivalTime" : "5:47pm",
 "route" : 31,
}

var car = {
 "name" : "Azure",
 "color" : "Velvet",
 "make" : "Chevy",
 "model" : "Sonic",
 "year" : 2015,
 "options" : ["wifi", "backupCam", "onstar"],
 "accidents" : 2,
 "running" : false,
 "start" : function () {

 	car.running = true;
 
 }
}

























