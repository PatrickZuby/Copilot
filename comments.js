// Create web server
// Use 'express' module
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
// Use 'body-parser' module
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use 'express' module to create a web server
app.use(express.static('public'));

// Get comments from file
app.get('/api/comments', function(req, res) {
  fs.readFile('comments.json', 'utf8', function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).send('Server Error');
      return;
    }
    res.send(data);
  });
});

// Add comment to file
app.post('/api/comments', function(req, res) {
  fs.readFile('comments.json', 'utf8', function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).send('Server Error');
      return;
    }
    var comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
      if (err) {
        console.log(err);
        res.status(500).send('Server Error');
        return;
      }
      res.send('Success');
    });
  });
});

// Start server
app.listen(3000, function() {
  console.log('Server is running on port 3000!');
});