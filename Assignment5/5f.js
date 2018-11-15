class Person{
    constructor(name,lastname){
         this.name=name;
         this.lastname=lastname;
   
 }
   get nameAndSurnamePerson(){
     return this.name + ' '+this.lastname;
   }
   set nameAndSurnamePerson(fullname){
     var words = fullname.split(' ');
     this.name=words[0] || '';
     this.lastname=words[1] || '';
   }
   
 }

 class  Student extends Person{
     constructor(name,lastname,id,grade){
         super(name,lastname);
         this.id=id;
         this.grade=grade; 
 }

     info(){
     var sum=0;
     for(var i=0;i<this.grade.length;i++){
       sum+=i;
     }
     var result = sum/this.grade.length;
     return result;
   }
  
 get average(){
     return this.info();
   }
 

 }
 const student = new Student('Aziz','Tashpulatov',16225,[5,4,3,2]);
 console.log(student.nameAndSurnamePerson);
student.nameAndSurnamePerson='Ikrom Ashuraliev';
 console.log(student.nameAndSurnamePerson);