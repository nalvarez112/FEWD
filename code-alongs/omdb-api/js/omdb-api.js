
// SET UP
// --------------------------------
var results = document.querySelector('.results');
var form = document.querySelector('form');
var input = document.querySelector('input');

// Event Handler
// --------------------------------

form.addEventListener('submit', getMovies);


function getMovies (e) {
	e.preventDefault();

	//Building API URL
	var search = input.value;
	var url = "http://www.omdbapi.com/?s=" + search;

	// WO JSON TECHNIQUES

	// 1. use AJAX with getJSON
	// making ajax request for data from api
	$.getJSON(url, updateMovies);

	// 2. use JSONP
	// url = url + "&callback=updateRestaurants";
	// var scriptTag = document.createElement("script");
	// scriptTag.src = url;
	// document.body.appendChild(scriptTag);
}

// Update Page
// --------------------------------
function updateMovies (json) {
	console.log('fn updateMovies');
	console.log(json);

	// clear out element
	results.innerHTML = "";

	json.Search.forEach(createMovies);
}

function createMovies (movies) {
	
	//setp 1: create markup
	var li = document.createElement('li');
	var img = document.createElement('img');
	var h2 = document.createElement('h2');
	var p = document.createElement('p');
	var a = document.createElement('a');
	
	//step 2: create content
	img.src = movies.Poster;
	h2.textContent = movies.Title;
	p.textContent = movies.Year;
	a.href = "http://www.imdb.com/title/" + movies.imdbID;
	a.target = "_blank";
	
	// append
	li.appendChild(a)
	a.appendChild(img);
	a.appendChild(h2);
	a.appendChild(p);
	results.appendChild(li);

}

// updateRestaurants(json.objects);






