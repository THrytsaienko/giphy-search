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
const tvPage = document.querySelector('.nav-item--tv');
let radioButton;

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
	// Search input
	const searchGiphy = document.querySelector('.search__input');

	for (let i = 0; i < document.getElementsByName('radioButton').length; i++) {
		document.getElementsByName('radioButton')[i].onclick = function () {
			//VALUE OF THE CLICKED RADIO ELEMENT
			// alert(`this : ${this.value}`);
			radioButton = this.value;
			console.log(radioButton);
			if (searchGiphy.value !== '') {
				if (radioButton === 'Gif') {
					console.log('Checked Gif');
					getTranslateSearchGif(searchGiphy.value);
				} else if (radioButton === 'Sticker') {
					console.log('Checked Sticker');
					getTranslateSearchSticker(searchGiphy.value);
				}
			}
		}
	}

	// Search input event listener
	searchGiphy.addEventListener('keyup', (e) => {
		// Get input text
		let searchText = e.target.value;

		if (searchText !== '') {
			searchText = searchText.split(' ').join('+');
			console.log(searchText);
			if (radioButton === 'Gif') {
				console.log('Checked Gif');
				getTranslateSearchGif(searchText);
			} else if (radioButton === 'Sticker') {
				console.log('Checked Sticker');
				getTranslateSearchSticker(searchText);
			}
			// Make http call
			// getStickersSearch(searchText);
		} else {
			// Clear profile
			// getStickersTrending();
		}
	});

	function getTranslateSearchGif(searchText) {
		giphy.get(`https://api.giphy.com/v1/gifs/translate?s=${searchText}&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
			.then(data => ui.showTranslate(data))
			// .then(data => console.log(data))
			.catch(err => console.log(err));
	};

	function getTranslateSearchSticker(searchText) {
		giphy.get(`https://api.giphy.com/v1/stickers/translate?s=${searchText}&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
			.then(data => ui.showTranslate(data))
			// .then(data => console.log(data))
			.catch(err => console.log(err));
	};
}


if (randomPage.classList.contains('active')) {
	console.log('randomPage');
	// Search input
	const searchGiphy = document.querySelector('.search__input');

	for (let i = 0; i < document.getElementsByName('radioButton').length; i++) {
		document.getElementsByName('radioButton')[i].onclick = function () {
			//VALUE OF THE CLICKED RADIO ELEMENT
			// alert(`this : ${this.value}`);
			radioButton = this.value;
			console.log(radioButton);

			if (radioButton === 'Gif') {
				console.log('Checked Gif');
				getRandomSearchGif(`tag=${searchGiphy.value}&`);
			} else if (radioButton === 'Sticker') {
				console.log('Checked Sticker');
				getRandomSearchSticker(`tag=${searchGiphy.value}&`);
			}
			// if (searchGiphy.value !== '') {
			// 	if (radioButton === 'Gif') {
			// 		console.log('Checked Gif');
			// 		getRandomSearchGif(`tag=${searchGiphy.value}&`);
			// 	} else if (radioButton === 'Sticker') {
			// 		console.log('Checked Sticker');
			// 		getRandomSearchSticker(`tag=${searchGiphy.value}&`);
			// 	}
			// }
		}
	}

	// Search input event listener
	searchGiphy.addEventListener('keyup', (e) => {
		// Get input text
		let searchText = e.target.value;


		searchText = searchText.split(' ').join('+');
		console.log(searchText);
		if (radioButton === 'Gif') {
			console.log('Checked Gif');
			getRandomSearchGif(`tag=${searchText}&`);
		} else if (radioButton === 'Sticker') {
			console.log('Checked Sticker');
			getRandomSearchSticker(`tag=${searchText}&`);
		}
	});

	function getRandomSearchGif(searchText) {
		giphy.get(`https://api.giphy.com/v1/gifs/random?${searchText}api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4`)
			.then(data => ui.showTranslate(data))
			// .then(data => console.log(data))
			.catch(err => console.log(err));
	};

	function getRandomSearchSticker(searchText) {
		giphy.get(`https://api.giphy.com/v1/stickers/random?${searchText}api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4`)
			.then(data => ui.showTranslate(data))
			// .then(data => console.log(data))
			.catch(err => console.log(err));
	};
}

if (tvPage.classList.contains('active')) {
	console.log('tvPage');
	document.addEventListener('DOMContentLoaded', getGiphysTV);

	function getGiphysTV() {
		giphy.get(`https://api.giphy.com/v1/gifs/random?api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=1`)
			.then(data => ui.showTV(data))
			// .then(data => console.log(data))
			.catch(err => console.log(err));
	};

	setInterval(function () {
		getGiphysTV();
	}, 10000);
}