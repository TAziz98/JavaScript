var name ='Azizbek';
var LasName='Tashpulatov';
var DateOfBirth=new Date('1998-07-24');
var objectAziz={
  a:name,
  b:LasName,
  c:DateOfBirth,
  d:function method1(){
   var age=((new Date()).getFullYear()-1900)-objectAziz.c.getYear();
    return age;},
  e:function method2(a,b){
  return a+" "+b;}
};
function Print(objectAziz){
  return typeof(objectAziz.a)+"-"+objectAziz.a+" "+typeof(objectAziz.b)+"-"+objectAziz.b+" "+typeof(objectAziz.c)+"-"+objectAziz.c.toString();
}
console.log(Print(objectAziz));
console.log(objectAziz.d());