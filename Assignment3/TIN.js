
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
    <script type="text/javascript">
      
      
      
    //Recursive Function & Function Expression  
  var factorial = function(x) {
  if (x < 0) return;
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
    console.log('Rec.func || Exp.func ' +factorial(5));
 
      
      //------------------------------------------
      
    //Iterative Function & Function Declaration       
     function factorial1(x){
  if (x < 0) return;
  if (x === 0) return 1;
  var k = 1;
  for (var i=1; i<=x; i++ )
    k *= i;
  return k;
}
       console.log('Iter.func || Dec.func '+factorial1(5));
      
      
      //------------------------------------------
      
      //Fibonacci N-th number
       var fibo = function(n){
       var result = 0 
       if(n<=1){
       return n;
}
       result = fibo(n-1) + fibo(n-2);
       return result;
       }    
           console.log('Fibonacci N-th number '+fibo(7));

      
      
      //------------------------------------------
      
      
      
      //Palindrome
      function palindrome(str) {
        //RegEx non  alpha-numeric characters
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
      
if (palindrome("Aziza")) {
    console.log("palindrome");
} else {
    console.log("not palindrome");
}
     
      
      //------------------------------------------
      
      //string ordering
      function sortString(str){
  var arr = str.split('');
  var sorted = arr.sort();
  return sorted.join('');
        
}
       console.log('sorting strings '+sortString('destructback'));

  
  //Longest word in array 
        function findLongestWord(str) {
          function sortFunc(a, b) {
            return b.length - a.length; 
          }
  var longestWord = str.split(' ').sort(sortFunc);
  return longestWord[0];
}
console.log(findLongestWord("Polish Japanese academy of Information Technology"));
  
      //----------------------------
      
   //Prime Numbers


function isPrime(n) 
{ 
  
    // Corner case 
    if (n <= 1) {
        return false; 
    }
    // Check from 2 to n-1 
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
} 
  console.log('bool '+isPrime(5));
  
      
      //Return type
   function returnType(param){  
     return typeof param;
   }
      console.log(returnType('Aziz'));
      
      
      
    //SecondLowest & greatest   
      function second(n){
         var sorted = n.sort(function(a,b){ return a-b;});
         var noRepet=[sorted[0]];var returnC =[];
         for(var j=1; j < n.length; j++){
         if(n[j-1] !== n[j]){
         noRepet.push(n[j]);
        }
        }
        returnC[0]=sorted[1];
        returnC[1]=sorted[sorted.length-2];
        returnC.join(',');
        return returnC;
      }
        console.log(second([1,2,3,4,5]));
   
      
      //moneyToCoin
      function moneyToCoin(amountOfMoney,Coin){
        if(amountOfMoney===0){
          return [];
        }
        if(amountOfMoney>=Coin[0]){
          remainAmount=amountOfMoney-Coin[0];
          return Coin[0]+" "+moneyToCoin(remainAmount,Coin);
        }
        else{
          Coin.shift();
         return moneyToCoin(amountOfMoney,Coin);
        }    
      }
      console.log(moneyToCoin(46,[25,10,5,2,1]));
      
      
      //Binary Search
      function binary(items, value){
    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }
     if((items[middleIndex] != value))
       return 'number doesnt exist in array';
     else
 return middleIndex;
}
var items = [5, 2, 3, 5, 5, 7, 8, 9];
console.log(binary(items, 1));   
console.log(binary(items, 5));
      
    </script>

</body>
</html>
