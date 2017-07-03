const https = require('https');

function getAndPrintHTMLChunks () {

  const resquestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(resquestOptions, function(response) {
    response.setEncoding('utf-8');
    response.on('data', function(data) {
      console.log(data, '\n');
    });
    response.on('end', function () {
      console.log('Stream complete');
    });
  });
}

getAndPrintHTMLChunks();