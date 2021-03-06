
// SET UP
// --------------------------------
var results = document.querySelector('.results');
var form = document.querySelector('form');
var input = document.querySelector('input');

// Event Handler
// --------------------------------

form.addEventListener('submit', getRestaurants);


function getRestaurants (e) {
	e.preventDefault();

	//Building API URL
	var search = input.value;
	var url = "https://api.locu.com/v1_0/venue/search/?api_key=5f4c4311aa7ad028d7cdadf0cd3eb3a8fa5ae3f3&postal_code=" + search;

	// WO JSON TECHNIQUES

	// 1. use AJAX with getJSON
	// making ajax request for data from api
	// $.getJSON(url, updateRestaurants);

	// 2. use JSONP
	url = url + "&callback=updateRestaurants";
	var scriptTag = document.createElement("script");
	scriptTag.src = url;
	document.body.appendChild(scriptTag);
}

// Update Page
// --------------------------------
function updateRestaurants (json) {
	console.log('fn updateRestaurants');
	console.log(json);

	// clear out element
	results.innerHTML = "";

	json.objects.forEach(createRestaurant);
}

function createRestaurant (restaurant) {
	
	//setp 1: create markup
	var li = document.createElement('li');
	var h2 = document.createElement('h2');
	var p = document.createElement('p');
	var a = document.createElement('a');
	
	//step 2: create content
	h2.textContent = restaurant.name;
	p.textContent = restaurant.street_address;
	a.textContent = restaurant.phone;
	a.setAttribute('href', "tel:" + restaurant.phone)
	
	// append
	li.appendChild(h2);
	li.appendChild(p);
	li.appendChild(a);
	results.appendChild(li);

}

// updateRestaurants(json.objects);






