

let funcA = () =>{
  console.log('funcA')
}
let funcB = () =>{
  console.log('funcB')
}

funcA();
funcB();

// first we call funcA and than funcB (simple);

// but if:

funcB();
funcA();
// calls funcB before funcA  (simple);

// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.



// so if i wanna run funcB after funcA (means i wanna say to funcA that after your execution complete, run the funcB);

let funca = () =>{
  console.log('funcA')
  funcb();
}
let funcb = () =>{
  console.log('funcB')
}
funca();  








//    ANOTHER EXAMPLE



let A = () =>{
  setTimeout(()=>{
      console.log('funcA')
  },2000)
}
let B = () =>{
console.log('funcB')
}
A();
B();  

// in this case, a is called first but, by the use of setTimeout its thrown in the background, will run after 2 seconds and b is executed

// if you still want to execute A (first) as its setTimeout completes , and than B, so use B as a callback function;


let AA = () =>{
  setTimeout(()=>{
      console.log('funcA')
      BB()
  },2000)
}
let BB = () =>{
console.log('funcB')
}
AA();  

//javascript is an event driven language which means instead of waiting for a response before moving on, js will keep executing while listening for other events

// so callback is a way to make sure certain code doesn't execute until other code has already finished execution










//             |||||   Sequence Control   |||||

// Sometimes you would like to have better control over when to execute a function.

// Suppose you want to do a calculation, and then display the result.




let display = (some) =>{
  console.log(some)
}

let summing = (a,b) =>{
  let sum = a+b;
  return sum
}
let result = summing(5,6);
display(result)



// OR  you could use display as a callback function as:


let displayy = (some) =>{
  console.log(some)
};

let sumFunc = (a,b) =>{
  let sum = a+b;
  displayy(sum);
};
sumFunc(4,7);



// The problem with the first example above, is that you have to call two functions to display the result.

// The problem with the second example, is that you cannot prevent the calculator function from displaying the result.

// Now it is time to bring in a callback.




let disply = (v) =>{
  console.log(v);
};

let sum = (callback,...value)=>{
  let sum = value.reduce((a,b)=>{
      return a+b
  });
  callback(sum)
};

sum(disply,2,2,23,12,11,12,13,15)






//A JavaScript callback is a function which is to be executed after another function has finished execution. A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.




function greet(name, callback) {
  console.log('hello ' + name);
  callback()
}


// Goodbye function is used as a callBack function in the function greet

function Goodbye() {
  console.log("It's been great talking with you. Thank you for sharing your experience.")
}

greet('raees', Goodbye);












let funccc = (name,callback) =>{
  let greet = 'hello '+ name;
  console.log(greet);
  callback(greet);
}
let bye = (v)=>{
  console.log(v, 'chutti kr');
}
funccc('raees',(v)=>{
  setTimeout(bye,1000,v)
})

















let greeting = () => {
  console.log('hello ')
}

setTimeout(greeting, 2000)  // setTimeout is also a function that takes the greeting function as a callback function as a first argument and second argument is time in seconds that executes this callback function after 2s







// sum function with dsply() as a callback function


let dsply = (result) =>{
  console.log(result)
}
let mainFunc = (a,b,callback) =>{
  let sum = a+b;
  callback(sum);
}
mainFunc(4,5,dsply);














let isPrime = (n) =>{
  let prime = true;
  if(n<2){
  prime = false;
  }
  for(let i = 2;i<n;i++){
      if(n%i==0){
          prime = false;
      }
  }
  return prime
 }

 let rslt = (n,callback) =>{
  let result = callback(n);
  console.log(result);
 };

 rslt(6,isPrime)


















let myName = 'raees'

// function greet takes a name and callback function as an argument
function greet(name, callback) {
  // prints 'hello name' without any time
  console.log('hello ' + name);

  // setTimeout function is used as a callback function witch also takes an anonymous function   
  setTimeout(() => {
    console.log('let me check ....')
  }, 1000);
  setTimeout(function () {
    callback();    // we are using meeting function as a callback function that executes after 3s
  }, 3000)
}


//this is the function we are giving as callback function in argument of greet()
function meeting() {
  console.log('OK \ntoday is your meeting with mr. something else')
}


greet(myName, meeting)  // calling function with myName and a callback function (which is meeting) as an argument











// a better way
// in the last example you used a setTimeout to show a statment ('let me check') and wanna make delay after this statement executed, you used another setTimeout with time greater than first one , so second one should execute after the execution of first one
// but you can use the second setTimeout inside the first one , which means when first statement is executed, start setTimeout for second statement

let n = 'raees'
let meeting = () => {
    console.log('you have a meeting')
};

let func = (name, callback) => {
    console.log('hello ' + name);
    setTimeout(() => {
        console.log('let me check');
        setTimeout(callback, 1000)
    }, 1000)
};
func(n,meeting);






// same example with nested callbacks





let greet = (name,callback)=>{
  console.log('hello ' + name);

  let func1 = (callb) =>{
      setTimeout(()=>{
          console.log('let me check')
          callb()
      },1000);
  };

  let func2 = () =>{
      setTimeout(()=>{
          callback()
      },1000)
  }

  func1(func2)
}

greet('raees',()=>{
  console.log('yes you are right')
})

// the purpose of making this example is just to check the code when used callbacks ;actually this is an example on callBack.js














//       /////// CODEWITHHARRY  /////// 


// loading a bootstrap script in document  


let loadScript = (src)=>{
  let script = document.createElement('script');
  script.src = src;
  script.onload = () =>{
      console.log('src : ' + src)
  };
  document.body.appendChild(script);
};
loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js');



// now with callback funcion

let hello = (ar)=>{
  alert(ar)
}
let loadS = (src,callback)=>{
  let script = document.createElement('script');
  script.src = src;
  script.onload = () =>{
      console.log('src : ' + src);
      callback(src);
  };
  document.body.appendChild(script);
};
loadS('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',hello);






// same function with error handling


// main funciton
function loadScript(src,callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () =>{
        console.log('src : ' + src);
        callback(null,src)
    }
    
    script.onerror = () =>{
        
        let er = new Error('error in src: ' + src);
        callback(er,src)
    }
    document.head.appendChild(script)
}

// 2nd funciton (used as callback);
function cb (error,src){
    if(error){
        console.log(error);
        return;
    }
    console.log('success, src : '+ src);
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrdap.bundle.min.js",cb);







// new example;

// function used as a callback in the main function
let funs = (error,script)=>{
  alert(error?error:script);
  if(error){
      console.log(error)
      return
  }
  console.log(script)
} 


// main function taking 2 arguments , actually creating a script tag and appending it in html with simple dom methods
// but two events (onload and onerror) are used;
// when there is no error in the script (script is correct) than 1st argument of callback is passed as null ( so in callback function , it cannot execute the conditional statement)
// when there is an error found , the onerror event executed and in this event there is an anonymous function in which a callback function is used , but this time the first argument is an (Error object)
// in the callback function the condition statement is executed and prints the error object directly as passed

// there is also an alert is added and a ternery operator is used in this, when it got error , it alerts error object; but when there is no error , it prints the script;
let loadingScript = (source,callback) =>{
  let script = document.createElement('script');
  script.src = source;
  script.onload = ()=>{
      console.log('loaded script with src : ' + source);
      callback(null,source);
  }
  script.onerror = ()=>{
      console.log('error in script with src : ' + source);
      callback(new Error('src got some error',source))
  }
  document.body.appendChild(script)
}
loadingScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min .js',funs);



















let array = [1,2,3,4,5,6,7,8,9];

let square = (n) =>{
    return n**2
};
let cube = (n) =>{
    return n**3
};

let funcc = (arr,operation)=>{
    let newArr = [];
    for(let i of arr){
        newArr.push(operation(i))
    };
    return newArr;
}
let squared = funcc(array,square);
let cubic = funcc(array,cube)
console.log(array);
console.log(squared);
console.log(cubic);






function fetchData(callback) {
  // Simulating an asynchronous operation (e.g., fetching data from a server)
  setTimeout(function() {
    var data = 'Some data';
    callback(data); // Execute the callback function with the data
  }, 2000);
}

function processData(data) {
  console.log('Processing data:', data);
}

fetchData(processData); // Pass the processData function as a callback

















let func1 = (arr, callback) => {
  let i = 0;

  let iterate = () => {
      if (i < arr.length) {
          callback(arr[i], () => {
              i++;
              iterate()
          })
      } else {
          console.log('complete process')
      }
  }
  iterate()
}

let outerFunc = (v, callback) => {
  console.log('processing : ' + v);
  setTimeout(callback, 1000);
};
let arra = [1, 2, 3, 4, 5];
func1(arra, outerFunc);




//same with setTimeout in callback func

let datafunc = (callback) =>{
  setTimeout(()=>{
      let data = 'some data';
      callback(data)
  });
};
let backFnc = (v) =>{
  console.log('processing data');
  setTimeout(()=>{
      console.log('processed data ' + v)
  },2000)
};
datafunc(backFnc)







// same function but different timing funciton;

let mainFunction = (arr,callback,finalCallback) =>{
  let i = 0;

  let iterate = ()=>{
      if(i<arr.length){
          callback(arr[i],()=>{
              i++;
              iterate()
          });
      }else{
          finalCallback()
      }
  }
  iterate()
};
let arrayy = [15,30,47,65,87];
mainFunction(arrayy,(v,cb)=>{
  console.log('processing : ' + v);
  let random = Math.floor(Math.random()*5)*1000;
  setTimeout(cb,random)
},()=>{
  console.log('processing complete')
})









let check = (n)=>{
  return n>0
};

let positiveArray = (arr,callback)=>{
  let posArr = [];
  for(let i of arr){
      if(callback(i)){
          posArr.push(i)
      };
  };
  return posArr;
};
let Aray = [-5,6,4,2,-6,1,8,-1];
let rslts = positiveArray(Aray,check);
console.log(rslts);
















let add = (a,b) =>{
  return a+b;
};

let subtract = (a,b) =>{
  return a-b;
};

let multiply = (a,b) =>{
  return a*b;
};

let divide = (a,b) =>{
  return a/b;
};


let doOperation = (a,b,callback) =>{
  return callback(a,b);
};

console.log(doOperation(5,4,add))
console.log(doOperation(5,4,subtract))
console.log(doOperation(5,4,multiply))
console.log(doOperation(5,4,divide))
