const https = require('https');

function getAndPrintHTML (options) {
  https.get(options, function(response) {
    response.setEncoding('utf-8');
    let rawData = '';
    response.on('data', function(chunk) {
      rawData += chunk;
    });
    response.on('end', function() {
      console.log("Transmission start");
      console.log(rawData);
      console.log("Transmission terminated");
    });

  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);