var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');

function calculation(firstnumber,operator,secondnumber){
    switch(operator){
        case '+':
        return firstnumber+secondnumber;
        break;
        case '-':
        return firstnumber-secondnumber;
        break;
        case '*':
        return firstnumber*secondnumber;
        break;
        case '/':
        return firstnumber/secondnumber;
    }
    
}
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/',function(req,res){
    res.sendFile(__dirname + "/" + "index.htm.html");  
})

app.post('/num',function(req,res){
   var operator = req.body.operation;
   var firstNumber=Number(req.body.firstnumber);
   var secondNumber=Number(req.body.secondnumber);
   var result = calculation(firstNumber,operator,secondNumber);
   console.log(result);
  res.send(JSON.stringify(result));
    })
app.listen(8081);