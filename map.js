function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i]); 
    } 
   } 
    function map(array, f) { 
          var acc = []; 
          each(array, function(element, i) { 
                acc.push(f(element, i)); 
          }); 
          return acc; 
    }

    function ages(people) { 
        return map(people, function(person) { 
              return person.age;}); 
  }

  function firstName(people) { 
    return map(people, function(person) { 
          return person.name.first;}); 
}

function lastName(people) { 
    return map(people, function(person) { 
          return person.name.last;}); 
}

function fullName(people) { 
    return map(people, function(person) { 
          return (person.name.first +" " + person.name.middle + " " + person.name.last );}); 
}

function abs(array){
    return map(array,function(element){
        return (Math.abs(element))
               })
}
   

function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i]); 
    } 
   } 
    function map(array, f) { 
          var acc = []; 
          each(array, function(element, i) { 
                acc.push(f(element, i)); 
          }); 
          return acc; 
    }

    var maxi =function (array){
        max = array[0]
        each(array,function(element){
            if (max < element){
                max = element}
            })
            return max
    }

    function maximums(array){
        return map(array,function(element){
            return (maxi(element))
        })  
        }

        function each(array, func) { 
            for (var i = 0; i < array.length; i++) { 
                  func(array[i]); 
            } 
           } 
            function map(array, f) { 
                  var acc = []; 
                  each(array, function(element, i) { 
                        acc.push(f(element, i)); 
                  }); 
                  return acc; 
            }

        function exponentials(numbers){
            return map(numbers,function(element){
                return (Math.pow(element,element))
            })
        }

        function each(array, func) { 
            for (var i = 0; i < array.length; i++) { 
                  func(array[i]); 
            } 
           } 
            function map(array, f) { 
                  var acc = []; 
                  each(array, function(element, i) { 
                        acc.push(f(element, i)); 
                  }); 
                  return acc; 
            }

            var reverse =function (string){
   
                var ha = ""
                for (var i = string.length-1; i >= 0; i--) {
                    ha= ha + string[i]
                } return ha
            }

            function reverseWords(string){
                var arr = string.split(" ")
               var res=  map(arr,function(element){
                    return(reverse(element))
                })
                return res.join(' ')
            }


            function each(array, func) { 
                for (var i = 0; i < array.length; i++) { 
                      func(array[i]); 
                } 
               } 
                function map(array, f) { 
                      var acc = []; 
                      each(array, function(element, i) { 
                            acc.push(f(element, i)); 
                      }); 
                      return acc; 
                }
            function ages(people) { 
                return map(people, function(person) { 
                      return person.age; 
                }); 
          }


           function each(array, func) { 
                for (var i = 0; i < array.length; i++) { 
                      func(array[i]); 
                } 
               } 
                function map(array, f) { 
                      var acc = []; 
                      each(array, function(element) { 
                            acc.push(f(element)); 
                      }); 
                      return acc; 
                }
           function ages(people, key) {
                  return map(people, function(person) {
                   return person[key];
             });
}
          