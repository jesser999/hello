function each(array,func){
    for (var i = 0; i < array.length; i++) {
        func (array[i])
    }
}
var numbers = [1, 9, 27, 5, 10, 3];
function summing(numbers){
    var sum = 0
each(numbers, function(number) {
sum = sum + number;
});
    return sum
}
summing(numbers)

function product(numbers){
    var pro = 1
each(numbers, function(number) {
pro = pro * number;
});
    return pro
}

 var square = function(x) { 
       return x * x; 
 }; 

var cube = function(x){
    return x*x*x;
}
var fullname = function(first, last) { 
       return first + ' ' + last; 
 } 
var power = function (base, exp) { 
       if (exp === 0) { 
       return 1; 
       } 
       return base * power(base, exp - 1); 
 } 
var sumCubes = function (numbers) { 
       var total = 0; 
       for (var i = 0; i < numbers.length; i++) { 
             total = total + cube(numbers[i]); 
       } 
       return total; 
 }
 function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i]); 
    } 
}

function sumSquares(array){
    
 var total = 0
each(array,function(number){
 total = total + square(number)
 })
    return total
}

function sumCubes(array) { 
    var total = 0; 
 each(array,function(number){
     total+= cube(number)
    })
    return total; 
}

function product(array) { 
    var total = 1; 
    for (var i = 0; i < array.length; i++) { 
          total = total * array[i]; 
    } 
    return total; 
}


function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i]); 
    } 
}
function products(array) { 
    var total = 1; 
   each(array,function(number){
          total = total * number; 
    } )
    return total; 
}


function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i]); 
    } 
}
function Cubes(array) { 
 var total = []; 
each(array,function(number){
  total.push(cube(number))
 })
 return total; 
}

function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i]); 
    } 
}
function sumByAllElementsMultipliedByFour(array) { 
 var total = 0; 
each(array,function(number){
 total = total +(number*4)
 })
 return total; 
}

var square = function(x) { 
    return x * x; 
}; 
function each(array, func) { 
 for (var i = 0; i < array.length; i++) { 
       func(array[i]); 
 } 
}
function sumBy(array,func) {
var total = 0
each(array,function(number){
 total = total + func(number)
})
 return total
}

var square = function(x) { 
    return x * x; 
}; 
function each(array, func) { 
 for (var i = 0; i < array.length; i++) { 
       func(array[i]); 
 } 
}
function sumBy(array,func) {
var total = 1
each(array,function(number){
 total = total * func(number)
})
 return total
}

function sumBy(array,func) {
    var total = 1
   each(array,function(number){
       total = total * func(number)
   })
       return total
   }

   function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

function indexedExponentials(array){
 var ok = []
 each(array,function (element,i) {
     ok.push(Math.pow(element,i))
 })
 return ok
}

function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

function evenIndexedOddNumbers (array){
 var ok = []
 each(array,function (element,i) {
    if (element % 2 === 1 && i % 2 ===0 ){
        ok.push(element)
    }
 })
 return ok
}

function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

function evenIndexedEvenLengths  (array){
 var ok = []
 each(array,function (element,i) {
    if (element.length % 2 === 0 && i % 2 ===0 ){
        ok.push(element)
    }
 })
 return ok
}


function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

function unique(array){
 
 var uni = []
 each(array,function(element){
     var found = false
    for (var j = 0; j < uni.length; j++) {
        if (element === uni[j]){
           found = true
        } 
    } if (!found){
        uni.push(element)}
 })
 return uni
    } 

    function each(array, func) { 
        for (var i = 0; i < array.length; i++) { 
              func(array[i], i); 
        } 
  }
 
 function merge (array1,array2){
      each(array2,function(element){
       array1.push(element)
          array1.sort()
     })
     return array1
     }

     function each(string, func) { 
        for (var i = 0; i < string.length; i++) { 
              func(string[i], i); 
        } 
  }
 
 function palindrome (string){
 debugger
     var pal = ''
     var pali = ''
     each(string,function(element){
         pali = pali + element
       }) 
      for (var j = string.length-1; j >= 0; j--) {
                pal = pal + string[j]
        }
         if (pal === pali){
             return true
         }else return false
        } 
          