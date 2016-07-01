// SET UP VARIABLES 
// ------------------------------------------

var gameShow = document.querySelector(".game-show");
var rupaul = document.querySelector(".rupaul");
var questionArea = document.querySelector(".question-area");
var questionText = document.querySelector(".question");

var startScreen = document.querySelector(".start-screen");
var seasonScreen = document.querySelector(".season-screen");
var questionScreen = document.querySelector(".question-screen");
var finalScreen = document.querySelector(".final-screen");

var currentSeason = null;
var currentQuestion = null;

// STEP 1: Enter on Start Screen


// STEP 2: Start Button Event

var startButton = document.querySelector(".start-button");
startButton.addEventListener('click', clickedStartButton);

// STEP 3: MOVE TO CHOOSE YOUR SEASON SCREEN
function clickedStartButton (e){
	showScreen('seasonScreen');
}

// STEP 4: PICK THE SEASON
var mainWrapper = document.querySelector("#main-wrapper")
var thumbnails = document.querySelectorAll(".thumbnails")
for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', pickSeason);
}

function pickSeason (e) {
	
	var target = e.target;

	if (target.tagName != 'LI'){
		target = target.closest("li");  
	}
	console.log('season', target.dataset.season);
	startSeason(target.dataset.season);
	currentSeason = parseInt(target.dataset.season);


}

function startSeason (season) {
	console.log('startSeason', season);
	showScreen('questionScreen');
	beginQuestion(seasons[season]);

}

function beginQuestion (seasonData) {
	console.log('seasondata', seasonData);
	var seasonQuestions = document.querySelector('.season-questions');

	questionText.textContent = "";
	seasonQuestions.innerHTML = "";
	// for (i = 0; i < seasonQuestions.children.length; i++) {

	// }
	// currentQuestion = sea;
}

function createQuestion (toAnswer){
	var li = document.createElement('li');
	var h2 = document.createElement('h2');
	var p = document.createElement('p');
	var a = document.createElement('a');

}



var choices = document.querySelectorAll(".choice")
for (var i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', pickChoice);
}

function pickChoice (e){
	var target = e.target;

	if (target.tagName != 'LI') {
		target = target.closest('li');
	}
	console.log('choice', target.dataset.choice);
	var choice = target.dataset.choice;

	if (choice == seasons[currentSeason].questions[currentQuestion].answer) {
		alert('yo win');
	} else {
		alert('yo loser');
	}

}




// SWITCH SCREENS
function showScreen(screen) {
	startScreen.classList.add('hide');
	seasonScreen.classList.add('hide');
	questionScreen.classList.add('hide');

	if (screen == 'startScreen') {
		startScreen.classList.remove('hide');
	} else if (screen == 'seasonScreen') {
		seasonScreen.classList.remove('hide');
	} else if (screen == 'questionScreen'){
		questionScreen.classList.remove('hide');
	}
};

showScreen('seasonScreen');
















