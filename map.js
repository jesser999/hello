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
   