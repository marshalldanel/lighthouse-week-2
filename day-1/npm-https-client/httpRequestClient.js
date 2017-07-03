var request  = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
    console.log('Oh no! Something is wrong :(');
    throw err;
  })
  .on('response', function (response) {
    console.log('Response status code:', response.statusCode);
    console.log('Response status message:', response.statusMessage);
    console.log('Response content type:', response.headers['content-type']);
    console.log('Download complete');
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .end('response', function (response) {
    console.log('Downloading image...');
  });