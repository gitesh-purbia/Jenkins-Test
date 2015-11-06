var express = require('express');
var path = require('path');
var cool = require('cool-ascii-faces');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.render('index', { title: 'Express.js Todo App' });
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});