
// STRUCTURE
// -------------------------------
var parent = document.querySelector(".sponsored-articles");



// EVENT HANDLER
// -------------------------------

function createItem(){

	// STEP1 CREATE
	
	var child = document.createElement("li");
	
	// STEP 2 ADD CONTENT AND ATTRIBUTES
	
	child.textContent = "text text tex text";
	child.classList.add('new');
	child.setAttribute('src', 'img/logo.jpg')
	
	// STEP 3 ADD TO DOM TREE
	
	parent.appendChild(child);

}