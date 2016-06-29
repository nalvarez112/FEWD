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

// STEP 1: Enter on Start Screen



// STEP 2: Start Button Event

var startButton = document.querySelector(".start-button");
startButton.addEventListener('click', clickedStartButton);

// STEP 3: MOVE TO CHOOSE YOUR SEASON SCREEN
function clickedStartButton (e){
	showScreen('seasonScreen');
}

// STEP 4: SEASON GAME BEGINS
var options = document.querySelector(".options")
options.addEventListener('click', beginGame);

function beginGame (e) {
	var target = e.target;
	console.log(e.target, e.type);

	if (target.className != 'season1'){
		
	}
}


// STEP 5: GAME INTERACTIONS






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
















