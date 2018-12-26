var tempConverter = require('./configureTemp.js');
var distConverter = require('./configureDist.js');

 function convert(fromInput,toInput,result,input){
    let _convertion;
     if(input=='input-temp')
    _convertion = tempConverter[document.getElementById(fromInput).value.concat(document.getElementById(toInput).value)];
     else
     _convertion = distConverter[document.getElementById(fromInput).value.concat(document.getElementById(toInput).value)];
    document.getElementById(result).innerHTML = _convertion(Number(document.getElementById(input).value));
   }
     window.onload = function(){
      document.getElementById('distButton').onclick = function() {
         convert('fromDistance','toDistance','result-dist','input-dist');
     };
     document.getElementById('tempButton').onclick = function() {
      convert('fromTemperature','toTemperature','result-temp','input-temp');
  };
}