const SampleUrls = require('./sampleUrls1.json');
const findServer = require('./findServer');

// this is the entry file where findServer function is being called
findServer(SampleUrls)
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
		console.log(err);
	});
