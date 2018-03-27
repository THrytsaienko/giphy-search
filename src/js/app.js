import {
	giphy
} from './giphy';
import {
	ui
} from './ui';

const giphyPage = document.querySelector('.nav-item--search');
const stickersPage = document.querySelector('.nav-item--stickers');
const translatePage = document.querySelector('.nav-item--translate');
const randomPage = document.querySelector('.nav-item--random');

if (giphyPage.classList.contains('active')) {
	console.log('giphyPage');
	// Add event listeners
	// document.addEventListener('DOMContentLoaded', getGiphys('ryan+gosling'));
	document.addEventListener('DOMContentLoaded', getGiphysTrending);
	// Search input
	const searchGiphy = document.querySelector('.search__input');

	function getGiphysTrending() {
		giphy.get(`https://api.giphy.com/v1/gifs/trending?api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
			.then(data => ui.showAllGiphys(data))
			// .then(data => console.log(data))
			.catch(err => console.log(err));
	};

	function getGiphysSearch(searchText) {
		giphy.get(`https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
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
}

if (stickersPage.classList.contains('active')) {
	console.log('stickersPage');
	// Add event listeners
	// document.addEventListener('DOMContentLoaded', getGiphys('ryan+gosling'));
	document.addEventListener('DOMContentLoaded', getStickersTrending);
	// Search input
	const searchGiphy = document.querySelector('.search__input');

	function getStickersTrending() {
		giphy.get(`https://api.giphy.com/v1/stickers/trending?api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
			.then(data => ui.showAllGiphys(data))
			// .then(data => console.log(data))
			.catch(err => console.log(err));
	};

	function getStickersSearch(searchText) {
		giphy.get(`https://api.giphy.com/v1/stickers/search?q=${searchText}&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
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
			getStickersSearch(searchText);
		} else {
			// Clear profile
			getStickersTrending();
		}
	});
}

if (translatePage.classList.contains('active')) {
	console.log('translatePage');
	// Add event listeners
	// document.addEventListener('DOMContentLoaded', getGiphys('ryan+gosling'));
	document.addEventListener('DOMContentLoaded', getTranslateSearch('morning'));
	// Search input
	const searchGiphy = document.querySelector('.search__input');

// 	function getGiphysTrending() {
// 		giphy.get(`https://api.giphy.com/v1/gifs/trending?api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
// 			.then(data => ui.showAllGiphys(data))
// 			// .then(data => console.log(data))
// 			.catch(err => console.log(err));
// 	};

	function getTranslateSearch(searchText) {
		giphy.get(`https://api.giphy.com/v1/gifs/translate?s=${searchText}&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
			.then(data => ui.showTranslate(data))
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
			getTranslateSearch(searchText);
		} else {
			// Clear profile
			getTranslateSearch('morning');
		}
	});
}

// if (randomPage.classList.contains('active')) {
// 	console.log('randomPage');
// 	// Add event listeners
// 	// document.addEventListener('DOMContentLoaded', getGiphys('ryan+gosling'));
// 	document.addEventListener('DOMContentLoaded', getGiphysTrending);
// 	// Search input
// 	const searchGiphy = document.querySelector('.search__input');

// 	function getGiphysTrending() {
// 		giphy.get(`https://api.giphy.com/v1/gifs/trending?api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
// 			.then(data => ui.showAllGiphys(data))
// 			// .then(data => console.log(data))
// 			.catch(err => console.log(err));
// 	};

// 	function getGiphysSearch(searchText) {
// 		giphy.get(`https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
// 			.then(data => ui.showAllGiphys(data))
// 			// .then(data => console.log(data))
// 			.catch(err => console.log(err));
// 	};

// 	// Search input event listener
// 	searchGiphy.addEventListener('keyup', (e) => {
// 		// Get input text
// 		let searchText = e.target.value;

// 		if (searchText !== '') {
// 			searchText = searchText.split(' ').join('+');
// 			console.log(searchText);
// 			// Make http call
// 			getGiphysSearch(searchText);
// 		} else {
// 			// Clear profile
// 			getGiphysTrending();
// 		}
// 	});
// }