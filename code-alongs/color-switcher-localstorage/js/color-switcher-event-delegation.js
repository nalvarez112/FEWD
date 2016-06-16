// Structure
// ------------------------------
var body = document.querySelector("body");
var ul = document.querySelector("ul");
var textTheme = document.querySelector(".text-theme");


// Events
// ------------------------------
ul.addEventListener('click', changeTheme);
//on page load, get theme from local storage
window.addEventListener('load', reloadPage);

// Event Handler Functions
// ------------------------------


function reloadPage(e){
	localStorage.getItem('theme');
	var theme = localStorage.getItem('theme');
	updatePage(theme);
}



function changeTheme(e) {
	// error checking. return early if a li wasn't clicked
	if (e.target.tagName != 'LI') {
		return;
	}

	updatePage(e.target.className);

	// save theme to local storage
	localStorage.setItem('theme', e.target.className)
}

//get from local storage
function updatePage(theme){
	console.log("updatePage", theme);
	body.className = theme;
	textTheme.textContent = theme;
}