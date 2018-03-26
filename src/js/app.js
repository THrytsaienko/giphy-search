import {
	giphy
} from './giphy';
import {
	ui
} from './ui';

// Add event listeners
document.addEventListener('DOMContentLoaded', getGiphys);
// Search input
const searchGiphy = document.querySelector('.search__input');

function getGiphys() {
	giphy.get('https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4')
	// giphy.get('http://api.giphy.com/v1/gifs/search?q=cheeseburgers&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10')
		.then(data => ui.showAllGiphys(data))
		// .then(data => console.log(data))
		.catch(err => console.log(err));
};