var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/form', function (req, res) {
   res.sendFile( __dirname + "/" + "form.htm" );
})

app.post('/formdata', urlencodedParser, function (req, res) {

   res.render('engine',{firstname:req.body.field1,lastname:req.body.field2});
})

app.listen(8081);