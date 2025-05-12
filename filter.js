function each(array, func) { 
            for (var i = 0; i < array.length; i++) { 
                  func(array[i]); 
            } 
           } 
function filter(array, f) { 
    var res = []
    each(array,function(element){
         if (f(element)){
             res.push(element)
         }
    })
    return res
}
function isEven(arra){
    return filter(arra,function(element){
            return  element % 2 === 0
    })
}

//it works at positive and negative numbers
function isOdd(arra){
    return filter(arra,function(element){
            return  element % 2 !== 0
    })
}

function multiplesOfThree (arra){
    return filter(arra,function(element){
            return  element % 3 === 0
    })
}

function positives(arra){
    return filter(arra,function(element){
            return  element > 0
    })
}

function evenLength(arra){
    return filter(arra,function(element){
            return  element.length % 2 === 0
    })
}


function each(array, func) { 
            for (var i = 0; i < array.length; i++) { 
                  func(array[i]); 
            } 
           } 
function filter(array, f) { 
    var res = []
    each(array,function(element){
         if (f(element)){
             res.push(element)
         }
    })
    return res
}
function startsWithChar (arra,char){
   var ha = arra.split(" ")
   return filter(ha,function(element){
            return element.startsWith(char)
    })
}


function each(array, func) { 
            for (var i = 0; i < array.length; i++) { 
                  func(array[i],i); 
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
 function evenIndexedEvenLengths(array){
    return filter(array,function(element,i){
        return element.length % 2 === 0 && i % 2 === 0
    })
}

function each(object, func) { 
            for (var key in object) { 
                  func(key,object[key]); 
            } 
           } 
function filter(object, f) { 
    var ok = {}
    each(object,function(key,value){
         if (f(key,value)){
             ok[key] = value
         }
    })
    return ok
}
function filt(object){
    return filter(object,function(key,value){
        return typeof value === 'number'
    })
    }

    function each(array, func) { 
            for (var i = 0; i < array.length; i++) { 
                  func(array[i]); 
            } 
           } 
function filter(array, f) { 
    var res = []
    each(array,function(element){
         if (f(element)){
             res.push(element)
         }
    })
    return res
}
function moveZero(array){
   return filter(array,function(element){
            return element !== 0
    })
}


function each(array, func) { 
            for (var i = 0; i < array.length; i++) { 
                  func(array[i]); 
            } 
           } 
function filter(array, f) { 
    var res = []
    each(array,function(element){
         if (f(element)){
             res.push(element)
         }
    })
    return res
}
function strongPasswords(array){
   var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
   return filter(array,function(person){
            return strongRegex.test(person.user.password)
    })
}