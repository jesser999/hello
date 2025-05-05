var ahmed = {
    firstname : 'jesser',
    lastname : 'sekri',
    age : 26 ,
    hometown : 'sidi bouzid '
}
  
function addproperty(object,key){
   object.key=true
    return object
}

function emtyobject(){
    var objectempty = {}
    return objectempty
} 
//and you call emtyobject()


var ahmed = {
    firstname : 'jesser',
    lastname : 'sekri',
    age : 26 ,
    hometown : 'sidi bouzid '
}
  
function deleteproperty(object,key){
   delete object.age
    return object
}


var ahmed = {
    firstname : 'jesser',
    lastname : 'sekri',
    age : 26 ,
    hometown : 'sidi bouzid '
}
var ok = {
    firstname : 'jesser',
    lastname : 'sekri',
}
function addobjectproperty(object,string,object2){
    object.string = object2
    return object
}

var ahmed = {
    firstname : 'jesser',
    lastname : 'sekri',
    age : 26 ,
    hometown : 'sidi bouzid '
}
var ok = {
    firstname : 'jesser',
    lastname : 'sekri',
}
function addobjectproperty(object,key,object2){
    object[key] = object2
    return object
}

var obj = {
    firstname : 'ahmed' ,
    lastname : 'bro' 
}
function addfullnameproprty(object){
    object.fullname = object.firstname +" "+ object.lastname
    console.log(object.fullname)
    return object
}


var obj = {
    firstname : 'ahmed' ,
    lastname : 'bro' 
}
    var arr = [1,2]
function addarrayproprty(object,string,array){
    object.string = array
    console.log(object.string)
    return object
}

var obj = {
    firstname : 'ahmed' ,
    lastname : 'bro' 
}
function printallprop(object){
    return Object.values(object)
}


for ( var key in object){
    console.log(object[key])
}
 1
 2
 3


for ( var key in object){
    console.log(key)
}
 a
 b
 c


for ( var key in object){
    console.log(typeof key)
}

const object = { a: 1, b: 2, c: 3 };



for ( var key in object){
    if( key === "b"){
    }
}


//object["c"] = 18
//18
//object
//{a: 1, b: 2, c: 18}


for ( var key in object){
    if( key === "b"){
        object[key] = 10
    }
}


//object
//{a: 1, b: 10, c: 18}


var obj = {a : 9 ,
    b : 5,
    c:'monta'
   }
function remove(number , object){

for ( var key in object){
if ( object[key] > number ){
 delete object[key]
}return object
}
}

var obj = {a : 9 ,
    b : 10,
    c:'monta'
   }
function removeEven(object){  
for ( var key in object){
if ( object[key] % 2 === 0 ){
 delete object[key]
}
}return object
}


var obj = {a : 9 ,
    b : 10,
    h:10,
    c:'monta',
    n : 10
   }
function removeEven(object){  
for ( var key in object){
if ( object[key] !== 10 ){
 delete object[key]
}
}return object
}


var obj = {a : 9 ,
    b : "ahla byk",
    h:10,
    c:'monta',
    n : "montana"
   }
function removeEven(object){  
for ( var key in object){
if ( object[key].length > 6){
 delete object[key]
}
}return object
}


var obj = {a : 9 ,
    b : "ahla byk",
    h:10,
    c:'monta',
    n : "montana"
   }
function removeEven(object){  
for ( var key in object){
if ( typeof object[key] === "number"){
 delete object[key]
}
}return object
}


var obj = {a : 9 ,
    b : ["ahla", "byk"],
    h:[,5,6,10],
    c:'monta',
    n : "montana"
   }
function removeEven(object){  
for ( var key in object){
if ( typeof object[key] === "object"){
 delete object[key]
}
}return object
}


var obj = { 
    array : [1,2,3,4],
    age : 18,
    ha :[]
}
function getfirstelement(object,key){
    if (typeof object[key] === "object"){
        return object[key][0]
    }else return undefined
}


var obj = { 
    array : [1,2,3,4],
    age : 18,
    ha :[]
}
function getfirstelement(object,key,number){
    if (typeof object[key] === "object"){
        return object[key][number]
    }else return undefined
}


var obj = { 
    array : [1,2,3,4],
    age : 18,
    ha :[]
}
function isproprtypresent(object,key){
       console.log(object.hasOwnProperty(key))
           
}


var obj = { 
    array : [1,2,3,4],
    age : 18,
    ha :[]
}
function getallkeys(object){
    var ha = []
            ha.push(Object.keys(object))
         return ha
}

var obj = { 
    array : [1,2,3,4],
    age : 18,
    ha :[]
}
function getallkeys(object){
    var ha = []
            ha.push(Object.values(object))
         return ha
}

var arr = ["ha","ho","hi","he"]
function tans(array){
    var ok = {}
    ok[array[0]] = array[array.length-1]
return ok
}


var obj1={ a:1 , b:2}
var obj2={ b:3, c:3}
function extand(object1,object2){
   Object.assign(object1,object2)
    return object1
}


function countAllCharacters(str) {  
    const counts = {};  
    if (!str) return counts;   
  
    for (var char of str) {  
      counts[char] = (counts[char] || 0) + 1;  
    }  
    
    return counts;  
  }  


  function convertobjecttolist(object){
    return (Object.entries(object))
}