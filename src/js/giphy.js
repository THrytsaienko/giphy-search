class GIPHY {
	// Make an HTTP GET Request 
	async get(url) {
		const response = await fetch(url);
		const resData = await response.json();
		return resData;
	}
}

export const giphy = new GIPHY();


// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function (data) { console.log("success got data", data); });

// class Github {
// 	constructor() {
// 		this.client_id = 'f8561c04cdb39c1e68cc';
// 		this.client_secret = '26bfcb266788226ae55c1fcdcec1c7209cdd0c45';
// 		this.repos_count = 5;
// 		this.repos_sort = 'created: asc';
// 	}

// 	async getUser(user) {
// 		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

// 		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

// 		const profile = await profileResponse.json();
// 		const repos = await repoResponse.json();
// 		return {
// 			profile,
// 			repos
// 		}
// 	}
// }