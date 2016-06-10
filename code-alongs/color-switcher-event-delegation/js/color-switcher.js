
// Structure
// ------------------------------------------------
var body = document.querySelector("body");
var ul = document.querySelector("ul");
var textTheme = document.querySelector(".text-theme");



// Events
// ------------------------------------------------

ul.addEventListener('click', changeTheme);


// EVENT HANDLER FUNCTION
// ------------------------------------------------



function changeTheme (e){

	var target = e.target;
	console.log(e.target, e.type);

	// error checking - return early is a li wasnt click

	if (target.tagName != 'LI') {
		return;
	}

	body.className = target.className;;
	textTheme.textContent = target.className;;
	
}

