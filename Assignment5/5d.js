function Student(name,lastname,id,grade){
  this.name=name;
  this.lastname=lastname;
  this.id=id;
  this.grade=grade;

  this.info = function(){
    var sum=0;
    for(var i=0;i<this.grade.length;i++){
      sum+=i;
    }
    var result = sum/this.grade.length;
    return this.name+" "+this.lastname+" "+id+" "+result;
  }
}

var student = new Student('Aziz','Tashpulatov',16225,[5,4,3,2]);

Object.defineProperty(student,'average',{
  get: function(){
    return this.info;
  }
  });
Object.defineProperty(student,'fullName',{
 c,
  set: function(fullname){
    var words = fullname.split(' ');
    this.name=words[0] || '';
    this.lastname=words[1] || '';
  }
});
student.fullname='Aziza Karimova';