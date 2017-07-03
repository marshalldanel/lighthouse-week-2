const https = require('https');

function getAndPrintHTML () {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf-8');
    let rawData = '';
    response.on('data', function(chunk) {
      rawData += chunk;
    });
    response.on('end', function() {
      console.log(rawData);
    });
  });
}

getAndPrintHTML();