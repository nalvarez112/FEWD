// Structure
// ------------------------------------------------
var listArea = document.querySelector(".list-area");
var form = document.querySelector("form");
var task = document.querySelector(".task");
var date = document.querySelector(".date");
var button = document.querySelector("button");
var ol = document.querySelector("ol");


// Events
// ------------------------------------------------

form.addEventListener("submit", addTask);


// Event handler functions
// ------------------------------------------------

function addTask (e){
	e.preventDefault();
	console.log(" fn addTask");

	if (task.value == ""){
		return;
	}


	// Create LI
	var li = document.createElement("li");
		ol.appendChild(li);


	// Create Checkbox
	var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.className = "task-checkbox";
		console.log("created checkbox")
	

	// Create a Task
	var taskName = document.createElement("span");
		taskName.className = "task-Name";
		console.log("task name created");

	// Create a Date
	var dateDue = document.createElement("span");
		dateDue.className = "date-due";
		console.log("date picked")



	//get the information

		taskName.textContent = task.value;
		dateDue.textContent = date.value;


	//Give LI Content

	li.appendChild(checkbox);
	li.appendChild(taskName);
	li.appendChild(dateDue);

	form.reset();

	

}


//put even on ul and listen for li creation
//----------------------
var taskCheckbox = document.querySelector(".task-checkbox");
taskCheckbox.addEventListener('click', removeTask)

function removeTask(){
if (taskCheckbox.checked) {
      ol.removeChild(li);
     }
}




// Utility functions
// ------------------------------------------------

// 

	





