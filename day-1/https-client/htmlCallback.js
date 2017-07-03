const https = require('https');

function getHTML (options, callback) {
  https.get(options, function(response) {
    response.setEncoding('utf-8');
    let rawData = '';
    response.on('data', function(chunk) {
      rawData += chunk;
    });
    response.on('end', function() {
      callback(rawData);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);