import {
	giphy
} from './giphy';
import {
	ui
} from './ui';

const searchGiphy = document.querySelector('.search__input');
const giphyPage = document.querySelector('.nav-item--search');
const stickersPage = document.querySelector('.nav-item--stickers');
const translatePage = document.querySelector('.nav-item--translate');
const randomPage = document.querySelector('.nav-item--random');
const tvPage = document.querySelector('.nav-item--tv');
let radioButton;

$(function () {
	// Check on what page we are - what page is active
	if (giphyPage.classList.contains('active')) {
		var gifInit = function (event, page) {
			function getGiphysTrending() {
				giphy.get(`https://api.giphy.com/v1/gifs/trending?api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
					.then(data => ui.showAllGiphys(data))
					.catch(err => console.log(err));
			};


			function getGiphysSearch(searchText) {
				giphy.get(`https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
					.then(data => ui.showAllGiphys(data))
					.catch(err => console.log(err));
			};

			// Search input event listener
			searchGiphy.addEventListener('keyup', (e) => {

				// Get input text
				let searchText = e.target.value;

				if (searchText !== '') {
					searchText = searchText.split(' ').join('+');
					// Make http call
					getGiphysSearch(searchText);
				} else {
					// Make http call
					getGiphysTrending();
				}
			});
		};


		gifInit();
		$(document).on("pageInit", gifInit);
	};

	if (stickersPage.classList.contains('active')) {
		var stickerInit = function (event, page) {
			function getStickersTrending() {
				giphy.get(`https://api.giphy.com/v1/stickers/trending?api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
					.then(data => ui.showAllGiphys(data))
					.catch(err => console.log(err));
			};


			function getStickersSearch(searchText) {
				giphy.get(`https://api.giphy.com/v1/stickers/search?q=${searchText}&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
					.then(data => ui.showAllGiphys(data))
					.catch(err => console.log(err));
			};

			// Search input event listener
			searchGiphy.addEventListener('keyup', (e) => {

				// Get input text
				let searchText = e.target.value;

				if (searchText !== '') {
					searchText = searchText.split(' ').join('+');
					// Make http call
					getStickersSearch(searchText);
				} else {
					// Make http call
					getStickersTrending();
				}
			});
		}

		stickerInit();
		$(document).on("pageInit", stickerInit);
	}

	if (translatePage.classList.contains('active')) {
		var translateInit = function (event, page) {
			for (let i = 0; i < document.getElementsByName('radioButton').length; i++) {
				document.getElementsByName('radioButton')[i].onclick = function () {
					// Value of the clicked radio button
					radioButton = this.value;
					if (searchGiphy.value !== '') {
						if (radioButton === 'Gif') {
							// Make http call
							getTranslateSearchGif(searchGiphy.value);
						} else if (radioButton === 'Sticker') {
							// Make http call
							getTranslateSearchSticker(searchGiphy.value);
						}
					} else {
						ui.clearGiphyContainer();
					}
				}
			}

			// Search input event listener
			searchGiphy.addEventListener('keyup', (e) => {
				// Get input text
				let searchText = e.target.value;

				if (searchText !== '') {
					searchText = searchText.split(' ').join('+');
					if (radioButton === 'Gif') {
						// Make http call
						getTranslateSearchGif(searchText);
					} else if (radioButton === 'Sticker') {
						// Make http call
						getTranslateSearchSticker(searchText);
					}
				} else {
					ui.clearGiphyContainer();
				}
			});

			function getTranslateSearchGif(searchText) {
				giphy.get(`https://api.giphy.com/v1/gifs/translate?s=${searchText}&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
					.then(data => ui.showOneGif(data))
					.catch(err => console.log(err));
			};

			function getTranslateSearchSticker(searchText) {
				giphy.get(`https://api.giphy.com/v1/stickers/translate?s=${searchText}&api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=10`)
					.then(data => ui.showOneGif(data))
					.catch(err => console.log(err));
			};
		}

		translateInit();
		$(document).on("pageInit", translateInit);
	}


	if (randomPage.classList.contains('active')) {
		var randomInit = function (event, page) {
			for (let i = 0; i < document.getElementsByName('radioButton').length; i++) {
				document.getElementsByName('radioButton')[i].onclick = function () {
					// Value of the clicked radio button
					radioButton = this.value;

					if (radioButton === 'Gif') {
						// Make http call
						getRandomSearchGif(`tag=${searchGiphy.value}&`);
					} else if (radioButton === 'Sticker') {
						// Make http call
						getRandomSearchSticker(`tag=${searchGiphy.value}&`);
					}
				}
			}

			// Search input event listener
			searchGiphy.addEventListener('keyup', (e) => {
				// Get input text
				let searchText = e.target.value;

				searchText = searchText.split(' ').join('+');
				if (searchText !== '') {
					if (radioButton === 'Gif') {
						// Make http call
						getRandomSearchGif(`tag=${searchText}&`);
					} else if (radioButton === 'Sticker') {
						// Make http call
						getRandomSearchSticker(`tag=${searchText}&`);
					}
				}
			});

			function getRandomSearchGif(searchText) {
				giphy.get(`https://api.giphy.com/v1/gifs/random?${searchText}api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4`)
					.then(data => ui.showOneGif(data))
					.catch(err => console.log(err));
			};

			function getRandomSearchSticker(searchText) {
				giphy.get(`https://api.giphy.com/v1/stickers/random?${searchText}api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4`)
					.then(data => ui.showOneGif(data))
					.catch(err => console.log(err));
			};
		}

		randomInit();
		$(document).on("pageInit", randomInit);
	}

	if (tvPage.classList.contains('active')) {
		var tvInit = function (event, page) {
			function getGiphysTV() {
				giphy.get(`https://api.giphy.com/v1/gifs/random?api_key=3qihbJMIkDcADvA3dKAAXfgjzspM7Js4&limit=1`)
					.then(data => ui.showTV(data))
					.catch(err => console.log(err));
			};

			setInterval(function () {
				getGiphysTV();
			}, 5000);
		}
		
		tvInit();
		$(document).on("pageInit", tvInit);
	}
});