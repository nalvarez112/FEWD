
// Structure
// ------------------------------------------------
var input = document.querySelector(".task-item");
var taskButton = document.querySelector("button");
var itemsList = document.querySelector(".items");
var date = document.querySelector(".date");


// Setup
// ------------------------------------------------
var todoList = {
	tasks:[]
};

// Events
// ------------------------------------------------
taskButton.addEventListener("click", submitForm);
window.addEventListener('load', reloadPage);

// Event Handlers
// ------------------------------------------------
// creating a task and adding it to an array of tasks


// rebuild todo list when page is reloaded
function reloadPage(event){
	
	// get saved data from local stroage - convert to JSON
	todoList = JSON.parse(localStorage.getItem('todoList'));
	// save back into JSON object called todoList
	createTodoList();

}


// event handler for when user clicks button
function submitForm(event){
	event.preventDefault();
	//creating a task with certain sections
	var task = {
		name: input.value,
		date: date.value,
		completed: completedStatus.value
	}

	// pushing those sections into the array
	todoList.tasks.push(task);

	//Save to local storage : keyname is a string and the data is the json object
	localStorage.setItem('todoList', JSON.stringify(todoList));

	//after it pushes to the array, create the todo list
	createTodoList();
}

// Update Page
// ------------------------------------------------

// creating the todo list from json data
function createTodoList(){

	//clears out the list
	itemsList.innerHTML = "";
	//for each task, create an LI from the createTask function
	todoList.tasks.forEach(createTask);
}




//create one LI on page from a task object
function createTask(task) {
	console.log(task);

	// STEP 1 create markups
	var addLi = document.createElement("li");
	var checkbox = document.createElement("input");
	var labelTask = document.createElement("label");
	var labelDate = document.createElement("span");
		
	// STEP 2 bedazzle markup (add attributes / text) 
	checkbox.setAttribute("type", "checkbox");
	labelTask.textContent = task.name;
	labelDate.textContent = "(" + task.date + ")";
	labelDate.classList.add("gray");

	//STEP 3 append new element to DOM tree
	itemsList.appendChild(addLi);
	addLi.appendChild(checkbox);
	addLi.appendChild(labelTask);
	addLi.appendChild(labelDate);
}


// remove task from local stroage:

itemsList.addEventListener('click', completedTask);

function completedTask(e) {
	if (e.target.tagName != 'LABEL') {

	return; 
	}
	console.log('completedTask', e.target);

}
























