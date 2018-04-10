var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = requier('cheerio');
var app = express();

app.get('/scrape', function(req, res) {
  // URL for site we want to scrape
  url = 'http://www.imdb.com/title/tt1229340/'
  // Structure of our request call
  // First parameter is our URL
  // Callback takes 3 parameters: error, response status code, and the HTML
  request(url, function(error, response, html) {
    // Check to make sure no errors occurred when making the request
    if (!error) {
      // Use Cheerio library on the returned html, which essentially gives us jQuery functionality
      var $ = cheerio.load(html);
      // Define the variables we're going to capture
      var title, release, rating;
      var json = { title : "", release : "", rating : ""};
    }
  });
});

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;
