// SET UP VARIABLES 
// ------------------------------------------


var rupaulSeason = document.querySelector(".rupaul-season");
var rupaulQuestion = document.querySelector(".rupaul-question");


// start screen
var startScreen = document.querySelector(".start-screen");


// question screen
var questionScreen = document.querySelector(".question-screen");
var gameShow = document.querySelector(".game-show");
var questionArea = document.querySelector(".question-area");
var questionText = document.querySelector(".question");
var seasonScreen = document.querySelector(".season-screen");
var choices = document.querySelector('.choices');
var qOptions = document.querySelectorAll(".choice")
var questionNumber = document.querySelector('.question-number');
var seasonNumber = document.querySelector('.season-number');


// final creen
var finalScreen = document.querySelector(".final-screen");

// set up
var currentSeason = null;
var currentQuestion = null;


// START BUTTON FUNCTION
// ------------------------------------------------------
var startButton = document.querySelector(".start-button");
startButton.addEventListener('click', clickedStartButton);

// MOVE TO CHOOSE YOUR SEASON SCREEN
// ------------------------------------------------------

function clickedStartButton (e){
	showScreen('seasonScreen');
}




// PICK THE SEASON
// ------------------------------------------------------

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
	currentSeason = parseInt(target.dataset.season);
	startSeason();
	randomRu();
}

function startSeason (season) {
	console.log('startSeason', season);
	showScreen('questionScreen');
	currentQuestion = 1;
	createQuestion(seasons[season]);
	updateVideo();
}

function updateVideo(){

	var videoBackground = document.querySelector(".video-background");
	videoBackground.innerHTML = "";
	var video = document.createElement('video');
	video.src = seasons[currentSeason].song;
	video.autoplay = true;
	video.loop = true;
	videoBackground.appendChild(video);

}

function createQuestion (){
	seasonNumber.textContent = "Season " + currentSeason;
	questionNumber.textContent = "Question " + currentQuestion;
	questionText.textContent = seasons[currentSeason].questions[currentQuestion].question;
	choices.innerHTML = "";
	var currentChoices = seasons[currentSeason].questions[currentQuestion].choices;

	for (i = 0; i < currentChoices.length; i++) {
		// create
		var img = document.createElement('img');
		var p = document.createElement('p');
		var li = document.createElement('li');
		
		// Att content and attribute
		img.src = currentChoices[i].image;
		p.textContent = currentChoices[i].choice;
		li.className = ".choice";
		li.dataset.choice = i;

		// append
		li.appendChild(img);
		li.appendChild(p);
		li.addEventListener('click', pickChoice);
		choices.appendChild(li);
		console.log('createQuestion', currentQuestion);
	}
	randomRu();
}

function pickChoice (e){
	var target = e.target;

	if (target.tagName != 'LI') {
		target = target.closest('li');
	}
	console.log('choice', target.dataset.choice);
	var choice = target.dataset.choice;

	if (choice == seasons[currentSeason].questions[currentQuestion].answer) {
		alert('YAS');
	} else {
		alert('NO, GURL');
	}

	nextQuestion();
}

function nextQuestion(){
	currentQuestion++;
	console.log(seasons[currentSeason].questions.length, 'current question', currentQuestion)
	if (currentQuestion < seasons[currentSeason].questions.length) {
	
		createQuestion();

	} else {
		showScreen('finalScreen');
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
	} else if (screen == 'finalScreen');
		finalScreen.classList.remove('hide');
};

showScreen('startScreen');





function randomRu(){
	rupaulSeason.innerHTML = "";
	rupaulQuestion.innerHTML = "";

	// create
	var img = document.createElement('img');
	// Att content and attribute
	img.src = ru[Math.floor(Math.random()*ru.length)];
	// append
	rupaulSeason.appendChild(img);
	rupaulQuestion.appendChild(img);

}












