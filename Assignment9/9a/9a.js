var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

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
        return firstnumber*secondnumber;
    }
    
}
app.get('/',function(req,res){
    res.sendFile(__dirname + "/" + "index.htm.html");

});

app.post('/calculation',urlencodedParser,function(req,res){
    var numbers ={firstNum:req.body.first,
                  operat:req.body.Operation,
                  secondNum:req.body.second};
   var resp ={result:calculation(parseInt(numbers.firstNum),numbers.operat,parseInt(numbers.secondNum))};              
    res.render('engine',{FinalResult:resp.result});
})
app.listen(8081);