module.exports = function getHTML (options, callback) {
  const https = require('https');
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
};