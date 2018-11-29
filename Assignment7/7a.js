var express = require('express');
var app = express();
app.set('view engine', 'ejs');


function operation(first,second,oper){
var valueFirst=parseInt(first);
var valueSecond=parseInt(second);
if(oper==='add') return valueFirst+valueSecond;if(oper==='sub') return valueFirst-valueSecond;
if(oper==='div') return valueFirst/valueSecond;if(oper==='mul') return valueFirst*valueSecond;
}
function handler(req, res){
    if(isNaN(req.params.firstValue) || isNaN(req.params.secondValue) ){
        res.send('Please enter proper values --> [Numbers]');
}
}
function handlerNull(req, res){
 /*   if (req.params=== undefined || req.params=== null) {
        res.send('Please dont let unfilled values');
}
if (req.params.isEmpty()) {
    res.send('Please dont let unfilled values');
}*/
}


app.get('/add/:firstValue/:secondValue',function(req,res){
  handler(req,res);
  var resU=operation(req.params.firstValue,req.params.secondValue,'add');
// document.getElementsById('y').innerHTML =result; --> res.sendFile(__dirname+'/add.htm.html');
res.render('operation',{result: resU});
});

app.get('/[a-z]+/:Anyvalue',function(req,res){
  res.send('Please specify second value as well');
  });
  app.get('/[a-z]{3}',function(req,res){
    res.send('Welcome to Calculator Web-page !');
    });


app.get('/sub/:firstValue/:secondValue',function(req,res){
    handler(req,res);
    var resU=operation(req.params.firstValue,req.params.secondValue,'sub');
    res.render('operation',{result: resU});
});

app.get('/div/:firstValue/:secondValue',function(req,res){
   handler(req,res);
   var resU=operation(req.params.firstValue,req.params.secondValue,'div');
    res.render('operation',{result: resU});
});

app.get('/mul/:firstValue/:secondValue',function(req,res){
    handler(req,res);
    var resU=operation(req.params.firstValue,req.params.secondValue,'mul');
    res.render('operation',{result: resU});
});
app.listen(8080);