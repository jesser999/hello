var numberOfStudent = 0
function addStudent(){
    numberOfStudent = numberOfStudent + 1
    console.log(numberOfStudent)
}
function getNumberOfStudent(){
    return numberOfStudent
}
var student=[]
function addStudent(string){
    student.push(string)
        console.log(student)
}
function clearStudent(){
    student.splice(0,student.length)
    numberOfStudent = 0
    console.log(student)
    console.log(numberOfStudent)
}
function addStudent(string){
    student.push(string)
    numberOfStudent = student.length
        console.log(student)
    console.log(numberOfStudent)
}
function createFullName(firstName,lastName){
    var fullName = ""
    fullName = firstName + " " + lastName
    return fullName
}
addStudent(createFullName("ahmed","amine"))

function getStudentByInitials(name,char){
    name = name.toLowerCase()
   char = char.toLowerCase()
       if (name[0] === char) {
           return true
       }
       return false
   }
   
   function isFullName(name){
    var  arr = name.split(" ");
       return arr.length>1;
   }

   function getStudentSByInitials(char){
    var ok = []
    for (var i = 0; i < student.length; i++) {
        ok.push(student[i].toLowerCase())
    }
    char = char.toLowerCase()
    var res = []
    while (i < ok.length) {
    if (ok[i][0] === char) {
     res.push(ok[i])
        i++
    }
    }return res
    }