function student(name,sclass,rollno) {
    return{
      name : name,
    sclass : sclass,
    rollno : rollno };
  }
     
  
  var stude = student()

  delete stude.rollno

  function studentlength(object){
    var res = Object.keys(object)
    return res.length
  }

  function displayBook(array){
    var display = ""
    for (var i = 0; i < array.length; i++) {
        display = display + i + "." + array[i].author + " by " + array[i].title + " and your reading statut is " + array[i].readingStatus + "\n"
    } return display
}

function Volumecylinder(radius,height) {
  var vol = {} 
  vol.radius = radius;
  vol.height = height;
  vol.volu = 0;
  vol.volume = volumes;
  return vol
}
var  volumes = function (){
  var volume = Math.PI * Math.pow(this.radius,2) * this.height
  this.volu = volume.toFixed(4)
  return this.volu
}

function CalculateAP(radius){
  var cal = {}
  cal.radius = radius
  cal.area = area;
  cal.perimetre = perimetre;

  return cal
}
var area = function(){
 var A = Math.PI * Math.pow(this.radius,2)
  return A
};
var perimetre = function(){
  var P = 2 * Math.PI * this.radius
  return P
}

class Book{
  constructor(title,genre,author,read =false,readDate = null){
this.title = title
this.genre = genre
this.author = author
this.read = read
this.readDate = ( readDate || new Date ) ;
  }
markAsRead() {
      this.read = true;
      this.readDate = new Date();
  }
}

class BookList{
  constructor(){
  this.Allbooks = []
  this.Booksreaded= 0
  this.Booksnotreaded = 0
  this.Nextbook =null
  this.Currentbook = null
  this.Lastbookread =null
}
add(book) {
  this.books.push(book);
  if (book.read) {
      this.readCount++;
      this.lastBook = book;
  } else {
      this.unreadCount++;
  }
}
}
