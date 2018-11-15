
var student = {array:['Geometry','Chemistry','Physics']};
 Clone = function(name,lastname,id){
  var studentClone = Object.create(student);
  studentClone.array[3]='Biology';
  studentClone.name=name;
  studentClone.lastname=lastname;
  studentClone.id=id; 
   return studentClone.name+" "+studentClone.lastname+" "+studentClone.id+" "+studentClone.array[3];
  }
 
 console.log(Clone('Ikrom','Ashuraliev',17));
