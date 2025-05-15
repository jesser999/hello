//1


function each(array,func){
    for (var i = 0; i < array.length; i++) {
      func(array[i])  
    }
}
    function map(array,fu){
        var acc = []
        each(array,function(element){
            return acc.push(fu(element))
        })
             return acc
    }

function addOne(array){
  return  map(array,function(number){
        return number+1
    })
}


//2

function each(array,func){
    for (var i = 0; i < array.length; i++) {
      func(array[i],i)  
    }
}

function filter(array, f) { 
    var ok = []
    each(array,function(element,i){
         if (f(element,i)){
             ok.push(element)
         }
    })
    return ok
}
function removeEveryOther(array){
  return  filter(array,function(element,i){
      
         return i % 2 === 0
    })
}


//3

function each(array,func){
    for (var i = 0; i < array.length; i++) {
      func(array[i],i)  
    }
}
    function map(array,fu){
        var acc = []
        each(array,function(element,i){
            return acc.push(fu(element,i))
        })
             return acc
    }
function doubleAll(array){
  return  map(array,function(number,i){
      return number * 2
    })
}

function square(array){
  return  map(array,function(number,i){
      return number * number
    })
}


function string(array){
  return  map(array,function(str,i){
      return str.length
    })
}

//4


function each(array,func){
    for (var i = 0; i < array.length; i++) {
      func(array[i],i)  
    }
}

function filter(array, f) { 
    var ok = []
    each(array,function(element,i){
         if (f(element,i)){
             ok.push(element)
         }
    })
    return ok
}
function odds(array){
  return  filter(array,function(element,i){
       return i % 2 === 1
    })
}


function each(array,func){
    for (var i = 0; i < array.length; i++) {
      func(array[i])  
    }
}

function filter(array, f) { 
    var ok = []
    each(array,function(element,){
         if (f(element)){
             ok.push(element)
         }
    })
    return ok
}
function positive(array){
  return  filter(array,function(element){
       return element > 0
    })
}


function largerThanSix(array){
  return  filter(array,function(element){
       return element > 6
    })
}


//5

function each(array1,array2,func){
    for (var i = 0; i < array1.length; i++)
    for (var i = 0; i < array2.length; i++)
        {
      func(array1[i],array2[i])  
    }
}
    function map2(array1,array2,fu){
        var acc = []
        each(array1,array2,function(a,b){
            return acc.push(fu(a,b))
        })
             return acc
    }

function ok(array1,array2){
 return   map2(array1,array2,function(a,b){
        return a*b
    })
}

// another version of map2

function each(array,func){
    for (var i = 0; i < array.length; i++){
      func(array[i],i)  
    }
}
    function map2(array1,array2,fu){
        var acc = []
        each(array1,function(element,index){
            return acc.push(fu(element,array2[index]))
        })
             return acc
    }
function ok(array1,array2,fu){
 return   map2(array1,array2,function(a,b){
        return a*b
    })
}


//6
var students = [
{ name: "Alice", grade: 90, teacherNotes: "Excellent work", level: "A" },
{ name: "Bob", grade: 80, teacherNotes: "Good effort", level: "B" },
{ name: "Charlie", grade: 95, teacherNotes: "Impressive performance", level: "A+" },
{ name: "Dave", grade: 75, teacherNotes: "Needs improvement", level: "C" }
]
function each(array,func){
    for (var i = 0; i < array.length; i++) {
      func(array[i],i)  
    }
}
 function map(array,fu){
        var acc = []
        each(array,function(element,i){
            return acc.push(fu(element,i))
        })
             return acc
    }

function filter(array, f) { 
    var ok = []
    each(array,function(element,i){
         if (f(element,i)){
             ok.push(element)
         }
    })
    return ok
}
function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }

function gradeHigher90(array){
  return  filter(array,function(person,i){
      
         return person.grade >= 90
    })
}

function peopleName(array){
  return  map(array,function(person,i){
      
         return person.name
    })
}

function peopleLevel(array){
  return  filter(array,function(person,i){
      
         return person.level === "A+"
    })
}

function peopleGrade(array){
  return  map(array,function(person,i){
      
         return person.grade
    })
}

function highestGrade(array){
  return  reduce(array,function(acc,person){
     if (acc < person.grade){
          acc = person.grade
      } return acc
    },0)
}


//7
var customerProducts = [
  {
    productName: "iPhone 13",
    productPrice: 1099.99,
    productQuantity: 2,
    productCategory: "Electronics"
  },
  {
    productName: "Leather Jacket",
    productPrice: 299.99,
    productQuantity: 1,
    productCategory: "Clothing"
  },
  {
    productName: "Bluetooth Speaker",
    productPrice: 79.99,
    productQuantity: 3,
    productCategory: "Electronics"
  },
  {
    productName: "Running Shoes",
    productPrice: 129.99,
    productQuantity: 1,
    productCategory: "Shoes"
  }
];

function each(array,func){
    for (var i = 0; i < array.length; i++) {
      func(array[i],i)  
    }
}

function filter(array, f) { 
    var ok = []
    each(array,function(element,i){
         if (f(element,i)){
             ok.push(element)
         }
    })
    return ok
}
  function map(array,fu){
        var acc = []
        each(array,function(element,i){
            return acc.push(fu(element,i))
        })
             return acc
    }
function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }
function productList(array){
  return  map(array,function(product,i){
       return product.productName
    })
}



function electronicProducts(array){
  var electronicsArray = filter(array, function(element){
    return element.productCategory==="Electronics"
  })

  return productList(electronicsArray)
}


function totalToPay (array){
  return reduce(array,function(total, element){
    return total+(element.productQuantity*element.productPrice)
  },0)
}

function productYouCanbuy(amount,array){
  return filter(array, function(element){
    return amount>=element.productPrice
  })
}

function productsQuantity(array){
   return reduce(array,function(acc,element){
         acc[element.productCategory] = element.productQuantity
           return acc
   },{})
}

function totalPriceByCategory(category,array){
    return reduce(array,function (acc,element){
        if (category === element.productCategory){
        acc["totalQuantity"] = element.productQuantity
        acc["totalCost"] = element.productQuantity*element.productPrice
        }
            return acc
        },{})
}
  

//8

var users = [
{ name: "John", age: 25, gender: "male", occupation: "developer", hobbies: ["reading", "gaming", "hiking"] },
{ name: "Jane", age: 32, gender: "female", occupation: "teacher", hobbies: ["photography", "painting", "travelling"] },
{ name: "Bob", age: 42, gender: "male", occupation: "engineer", hobbies: ["cycling", "swimming", "cooking"] },
{ name: "Alice", age: 28, gender: "female", occupation: "doctor", hobbies: ["yoga", "running", "dancing"] }
]


function each(array,func){
    for (var i = 0; i < array.length; i++) {
      func(array[i],i)  
    }
}

function filter(array, f) { 
    var ok = []
    each(array,function(element,i){
         if (f(element,i)){
             ok.push(element)
         }
    })
    return ok
}
  function map(array,fu){
        var acc = []
        each(array,function(element,i){
            return acc.push(fu(element,i))
        })
             return acc
    }
function reduce(array, f, start) { 
       var acc = start; 
       each(array, function(element) { 
             acc = f(acc, element); 
       }); 
       return acc; 
 }
function listNames(array){
  var ok =  map(array,function(user,i){
       return user.name
    })
    return ok.sort()
}

     
function filterByGender (gender,array){
  return  filter(array,function(user,i){
       return (gender === user.gender)
    })
}
