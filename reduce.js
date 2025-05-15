function each(array, func) { 
            for (var i = 0; i < array.length; i++) { 
                  func(array[i]); 
            } 
           }

function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }

  function product(numbers) { 
       return reduce(numbers, function(acc, number) { 
             return acc * number; 
       }, 1); 
 }

  function averageAge(people) { 
       var arr = reduce(people, function(acc, person) { 
           return  acc = acc + person.age
        
       }, 0); 
     return arr / people.length
 }


 function range(start, end) { 
       var acc = []; 
       for (var i = start; i > end; i--) { 
             acc.push(i); 
       } 
       return acc; 
 }

 function each(range, func) { 
            for (var i = 0; i < range.length; i++) { 
                  func(range[i]); 
            } 
           }

function reduce(range, f, start) { 
       var acc = start; 
       each(range, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }

 function factorial(n) { 
       return reduce(n, function(acc, element) { 
             return acc * element; 
       }, 1); 
 }


 function each(array, func) { 
            for (var i = 0; i < array.length; i++) { 
                  func(array[i]); 
            } 
           }

function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }
 function sumBy(numbers) { 
      return reduce(numbers, function(acc, number) { 
           return   acc + (number**2)
        
       }, 0); 
 }


 function each(array, func) { 
            for (var i = 0; i < array.length; i++) { 
                  func(array[i]); 
            } 
           }

function reduce(array, f, start) { 
       var max = start; 
       each(array, function(element) { 
             max = f(max, element); 
       }); 
       return max; 
 }
 function Max(numbers) { 
      return reduce(numbers, function(max, number) { 
          if  (max < number){
              max = number
          }
          return   max
        
       }, numbers[0]); 
 }


 function each(string, func) { 
            for (var i = 0; i < string.length; i++) { 
                  func(string[i]); 
            } 
           }

function reduce(string, f, start) { 
       var acc = start; 
       each(string, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }
 function countOccurrences (string,char) { 
      return reduce(string, function(acc, character) { 
          if  (char === character){
              acc = acc + 1
          }
          else acc
          return   acc 
        
       }, 0); 
 }


 function each(array, func) { 
            for (var i = 0; i < array.length; i++) { 
                  func(array[i]); 
            } 
           }

function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }
 function everyNumberEven (numbers) { 
      return reduce(numbers, function(acc, number) { 
           return   acc && number % 2 === 0
        
       }, true); 
 }


 function each(array, func) { 
            for (var i = 0; i < array.length; i++) { 
                  func(array[i]); 
            } 
           }

function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }
 function everyGreater (array) { 
      return reduce(array, function(acc, str) { 
           return   acc && str.length > 3
        
       }, true); 
 }


  function everyGreater (array,char) { 
      return reduce(array, function(acc, str) { 
          for (var i = 0; i < str.length; i++) {
            if(  str[i] === char ){
              return  acc = true
          }
          }
           return   false 
        
       }, true); 
 }


 function range(start, end) { 
    var acc = []; 
    for (var i = start; i <= end; i++) { 
        acc.push(i); 
    } 
    return acc; 
}

function each(range, func) { 
    for (var i = 0; i < range.length; i++) { 
        func(range[i]); 
    } 
}

function reduce(array, f, acc) { 
    if (acc === undefined) { 
        acc = array[0]; 
        array = array.slice(1); 
    } 
    each(array, function(element) {  
        acc = f(acc, element);      
    }); 
    return acc; 
}

function factorial(n) { 
    return reduce(range(1, n), function(acc, element) { 
        return acc * element; 
    }); 
}


function predicate(number){
             return number % 2 === 0
         }
function each(array, func) { 
            for (var i = 0; i < array.length; i++) { 
                  func(array[i]); 
            } 
           }

function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }
 function everyGreater (array,predicate) { 
      return reduce(array, function(acc, number) { 
         return    acc && predicate(number) 
       }, true); 
 }


  function joinWith(onto, next, separator) {
     return onto + separator + next
 }


 function each(array, func) { 
            for (var i = 0; i < array.length; i++) { 
                  func(array[i]); 
            } 
           }

function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }
 function join (array,separator) { 
      return reduce(array, function(acc, element) { 
         return    acc + element + separator 
       }, ""); 
 }


 function each(array, func) { 
            for (var i = 0; i < array.length; i++) { 
                  func(array[i]); 
            } 
           }

function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }
function countwords(s) {
  var words = s.split(' ');
  var counts = reduce(words, function(acc, word) {
    if (acc[word] === undefined) {
      acc[word] = 1;
    } else {
      acc[word]++;
    }
    return acc;
  }, {});
  return counts;
}