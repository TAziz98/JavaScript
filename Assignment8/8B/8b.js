var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/form', function (req, res) {
   res.sendFile( __dirname + "/" + "form.htm" );
})

app.post('/formdata', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   personInfo = {
      Name:req.body.field1,
      FamilyName:req.body.field2
   };
   console.log(personInfo);
   res.end(JSON.stringify(personInfo));
})

app.listen(8081);