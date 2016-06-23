// SET UP VARIABLES 
// ------------------------------------------

var gameShow = document.querySelector(".game-show");
var rupaul = document.querySelector(".rupaul");
var questionArea = document.querySelector(".question-area");
var question = document.querySelector(".question");
var choice = document.querySelector(".choice");





var startScreen = document.querySelector(".start-screen");
var seasonScreen = document.querySelector(".season-screen");
var questionScreen = document.querySelector(".question-screen");
var finalScreen = document.querySelector(".final-screen");

// Enter on Start Screen

// Start Button Event

// var startButton = document.querySelector(".start-button");
// startButton.addEventListener('click', toSeasons);

// 	function toSeason (){
// 		startScreen.classList.add('hide');
// 	}


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
















