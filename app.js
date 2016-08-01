var express = require('express');
var app = express();

app.use(express.static('public'));

function reverseString(string) {
  var stringToArray = string.split('');
  var arrayReverse = stringToArray.reverse();
  var joinArray = arrayReverse.join('');
  return joinArray
};

app.get('/reverse',function(req, res) {
  var string = String(req.query.wordinput);
  res.send(reverseString(string));
});

app.listen(8888, function() {
  console.log("app started on port 8888");
});


