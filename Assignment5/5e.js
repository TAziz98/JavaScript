  
  class  Student{
    constructor(name,lastname,id,grade){
        this.name=name;
        this.lastname=lastname;
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

  get nameAndSurname(){
    return this.name + ' '+this.lastname;
  }
set nameAndSurname(fullname){
    var words = fullname.split(' ');
    this.name=words[0] || '';
    this.lastname=words[1] || '';
  }
}
const student = new Student('Aziz','Tashpulatov',16225,[5,4,3,2]);
console.log(student.average);