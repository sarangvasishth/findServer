// const http = require('http');

// initially used native HTTP client, but HTTP doesn't automatically follow
// HTTP redirects. Received  301 statusCode for almost all the requests.

// then used  follow-redirects module, has exactly the same interface as the native HTTP
// but handles redirects automatically
const http = require('follow-redirects').http;

const findServer = (urls) => {
	// object where response from requests is store
	let responseCollector = {};

	return new Promise(async (resolve, reject) => {
		try {
			// creating array of promises to implement Promise.all
			// for parallel requests
			const urlsPromises = urls.map((url) => {
				return new Promise(async (resolve, reject) => {
					let currentUrl = url.url;
					let options = {
						// to extract host name from url
						host: url.url.split('//')[1],
						timeout: 5000,
						followAllRedirects: true,
					};

					let request = http.get(options, (response) => {
						// check to see server is online based on statusCode
						if (response && response.statusCode > 199 && response.statusCode < 300) {
							responseCollector[currentUrl] = [response.statusCode, url.priority];
						} else {
							responseCollector[currentUrl] = [null, url.priority];
						}
						resolve(responseCollector);
					});
					// request times out after 5 seconds.
					request.on('timeout', () => {
						responseCollector[currentUrl] = [null, url.priority];
						request.abort();
						resolve(responseCollector);
					});
					request.on('error', (err) => {
						responseCollector[currentUrl] = [null, url.priority];
						resolve(responseCollector);
					});
				});
			});

			// event loop will stop here until we resolve all the promises
			await Promise.all(urlsPromises).catch((err) => {
				console.log('promise.all err');
			});

			let serverResponse;
			let lowestPriority = 99999;
			// looping through the responseCollector object
			// and finding out server with minimum priority number
			Object.keys(responseCollector).forEach((key) => {
				if (responseCollector[key][0]) {
					if (lowestPriority > responseCollector[key][1]) {
						lowestPriority = responseCollector[key][1];
						serverResponse = key;
					}
				}
			});

			if (serverResponse) {
				// if atleast one server is online
				resolve(serverResponse);
			} else {
				// if no server is online
				resolve('No servers are online!');
			}
		} catch (error) {
			console.log('catch eroor!!!');
		}
	});
};

module.exports = findServer;
