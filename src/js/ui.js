class UI {
	constructor() {
		this.giphyContainer = document.querySelector('#giphy');
		this.responseReceived = [];
	}

	showAllGiphys(giphys) {
		this.responseReceived = giphys.data;
		let output = '';

		this.responseReceived.forEach((giphy, index) => {
			return output +=  `
					<div class="card m-2">
						<a href="${giphy.images.original.url}">
							<img class="card-img" src="${giphy.images.fixed_height.url}" style="width:${giphy.images.fixed_height.width}; height:${giphy.images.fixed_height.height}" alt="Card image">
						</a>
					</div>
				`;
			});

		this.giphyContainer.innerHTML = output;
	}
}

export const ui = new UI();