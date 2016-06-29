
// SET UP
var results = document.querySelector('.results');



// Update Page



function updateRestaurants (restaurants) {
	restaurants.forEach(createRestaurant);
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