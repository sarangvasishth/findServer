const findServer = require('./findServer');
const Original = require('./original.json');
const SampleUrls1 = require('./sampleUrls1.json');
const SampleUrls2 = require('./sampleUrls2.json');
const SampleUrls3 = require('./sampleUrls3.json');
const SampleUrls4 = require('./sampleUrls4.json');
const SampleUrls5 = require('./sampleUrls5.json');
const SampleUrls6 = require('./sampleUrls6.json');
const SampleUrls7 = require('./sampleUrls7.json');
const SampleUrls8 = require('./sampleUrls8.json');
const SampleUrls9 = require('./sampleUrls9.json');
const SampleUrls10 = require('./sampleUrls10.json');

test('finds available server for original.json', () => {
	jest.setTimeout(30000);
	return findServer(Original).then((response) => expect(response).toEqual('http://google.com'));
});

test('finds available server for sampleUrls1.json', () => {
	jest.setTimeout(30000);
	return findServer(SampleUrls1).then((response) => expect(response).toEqual('http://amazon.com'));
});

test('finds available server for sampleUrls2.json', () => {
	jest.setTimeout(30000);
	return findServer(SampleUrls2).then((response) => expect(response).toEqual('http://google.com'));
});

test('finds available server for sampleUrls3.json', () => {
	jest.setTimeout(30000);
	return findServer(SampleUrls3).then((response) => expect(response).toEqual('http://google.com'));
});

test('finds available server for sampleUrls4.json', () => {
	jest.setTimeout(30000);
	return findServer(SampleUrls4).then((response) => expect(response).toEqual('http://facebook.com'));
});

test('finds available server for sampleUrls5.json', () => {
	jest.setTimeout(30000);
	return findServer(SampleUrls5).then((response) => expect(response).toEqual('http://amazon.com'));
});

test('finds available server for sampleUrls6.json', () => {
	jest.setTimeout(30000);
	return findServer(SampleUrls6).then((response) => expect(response).toEqual('http://google.com'));
});

test('finds available server for sampleUrls7.json', () => {
	jest.setTimeout(30000);
	return findServer(SampleUrls7).then((response) => expect(response).toEqual('http://facebook.com'));
});

test('finds available server for sampleUrls8.json', () => {
	jest.setTimeout(30000);
	return findServer(SampleUrls8).then((response) => expect(response).toEqual('http://amazon.com'));
});

test('finds available server for sampleUrls9.json', () => {
	jest.setTimeout(30000);
	return findServer(SampleUrls9).then((response) => expect(response).toEqual('http://google.com'));
});

test('finds available server for sampleUrls10.json', () => {
	jest.setTimeout(30000);
	return findServer(SampleUrls10).then((response) => expect(response).toEqual('No servers are online!'));
});
