var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine1', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/form', function (req, res) {
   res.sendFile( __dirname + "/" + "form1.htm" );
})

app.post('/jsondata', urlencodedParser, function (req, res) {
   var namePerson = {'firstName':req.body.field1};
   var lastNamePerson =  { 'lastname' : req.body.field2};
   var agePerson =  { 'age' : req.body.field3};
   var objectname = JSON.stringify(namePerson);
   var objectlasttname = JSON.stringify(lastNamePerson);
   var objectage = JSON.stringify(agePerson);

 // var namePerson = JSON.parse(req.body.field1);
 // var lastNamePerson = JSON.parse(req.body.field2);
   res.render('engine1.ejs',{firstname:objectname,lastname:objectlasttname,age:objectage});
})

app.listen(8081);