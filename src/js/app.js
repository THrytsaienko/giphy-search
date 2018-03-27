import {
	giphy
} from './giphy';
import {
	ui
} from './ui';

// Add event listeners
// document.addEventListener('DOMContentLoaded', getGiphys('ryan+gosling'));
document.addEventListener('DOMContentLoaded', getGiphysTrending);
// Search input
const searchGiphy = document.querySelector('.search__input');

function getGiphysTrending() {
	// giphy.get(`https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=5`)
	giphy.get(`https://api.giphy.com/v1/gifs/trending?api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
		// giphy.get('https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4')
		// giphy.get('http://api.giphy.com/v1/gifs/search?q=cheeseburgers&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10')
		.then(data => ui.showAllGiphys(data))
		// .then(data => console.log(data))
		.catch(err => console.log(err));
};


// function getGiphys(searchText) {
// 	// giphy.get(`https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=5`)
// 	giphy.get(`https://api.giphy.com/v1/gifs/trending?api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=5`)
// 		// giphy.get('https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4')
// 		// giphy.get('http://api.giphy.com/v1/gifs/search?q=cheeseburgers&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10')
// 		.then(data => ui.showAllGiphys(data))
// 		// .then(data => console.log(data))
// 		.catch(err => console.log(err));
// };


function getGiphysSearch(searchText) {
	giphy.get(`https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
	// giphy.get(`https://api.giphy.com/v1/gifs/trending?api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=5`)
		// giphy.get('https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4')
		// giphy.get('http://api.giphy.com/v1/gifs/search?q=cheeseburgers&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10')
		.then(data => ui.showAllGiphys(data))
		// .then(data => console.log(data))
		.catch(err => console.log(err));
};

// Search input event listener
searchGiphy.addEventListener('keyup', (e) => {
	// Get input text
	let searchText = e.target.value;

	if (searchText !== '') {
		searchText = searchText.split(' ').join('+');
		console.log(searchText);
		// Make http call
		getGiphysSearch(searchText);
	} else {
		// Clear profile
		getGiphysTrending();
	}
});