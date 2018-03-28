class UI {
	constructor() {
		this.giphyContainer = document.querySelector('#giphy');
		this.responseReceived = [];
		this.receivedGif;
		this.receivedGifForTV;
		this.TVGifs;
	}

	showAllGiphys(giphys) {
		this.responseReceived = giphys.data;
		let output = '';

		this.responseReceived.forEach((giphy, index) => {
			return output += `
					<div class="card m-2">
						<a href="${giphy.images.original.url}">
							<img class="card-img" src="${giphy.images.fixed_height.url}" style="width:${giphy.images.fixed_height.width}; height:${giphy.images.fixed_height.height}" alt="Card image">
						</a>
					</div>
				`;
		});

		this.giphyContainer.innerHTML = output;
	}

	showTranslate(data) {
		this.receivedGif = data.data;
		console.log(this.receivedGif);
		this.giphyContainer.innerHTML = `
			<div class="card m-2">
				<a href="${this.receivedGif.images.original.url}">
					<img class="card-img" src="${this.receivedGif.images.fixed_height.url}" style="width:${this.receivedGif.images.fixed_height.width}; height:${this.receivedGif.images.fixed_height.height}" alt="Card image">
				</a>
			</div>
		`;
	}

	showTV(data) {
		this.receivedGifForTV = data.data;
		this.giphyContainer.innerHTML = `
			<div class="tv-screen" style="background-image:url(${this.receivedGifForTV.images.original.url});">
			</div>
		`;
	}

	clearGiphyContainer(){
		this.giphyContainer.innerHTML = '';
	}
}

export const ui = new UI();