var express = require('express');
var app = express();

app.use(express.static('public'));

//the browser pass a string, and node js shuld response with a reversed string



function reverseString(string) {
  var stringToArray = string.split('');
  var arrayReverse = stringToArray.reverse();
  var joinArray = arrayReverse.join('');
  return joinArray
};


app.get('/reverse/:string',function(req, res) {
  var string = String(req.params.string);
  res.send(reverseString(string));
});


app.listen(8888, function() {
  console.log("app started on port 8888");
});
    
    
    