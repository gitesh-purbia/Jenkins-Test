var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
   res.render('index', { title: 'Express.js Todo App' });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});