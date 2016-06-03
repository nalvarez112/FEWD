
// Structure
// ------------------------------------------------
var body = document.querySelector("body");
var olive = document.querySelector(".olive");
var skyblue = document.querySelector(".skyblue");
var burlywood = document.querySelector(".burlywood");
var thistle = document.querySelector(".thistle");
var textTheme = document.querySelector(".text-theme");


// Setup
// ------------------------------------------------


// function bodyColorChanger(color){
// 	body.className=color
// }

// Events
// ------------------------------------------------

olive.addEventListener('click', changeThemeOlive);
skyblue.addEventListener('click', changeThemeSkyblue);
burlywood.addEventListener('click', changeThemeBurlywood);
thistle.addEventListener('click', changeThemeThistle);




function changeThemeOlive (){
	console.log('fn changeThemeOlive');
	body.className = "olive";
	textTheme.textContent = "olive";
	
}


function changeThemeSkyblue (){
	console.log('fn changeThemeSkyblue');
	body.className = "skyblue";
	textTheme.textContent = "skyblue";
}

function changeThemeBurlywood (){
	console.log('fn changeThemeBurlywood');
	body.className = "burlywood";
	textTheme.textContent = "burlywood";
}

function changeThemeThistle (){
	console.log('fn changeThemeThistle');
	body.className = "thistle";
	textTheme.textContent = "thistle";
}



