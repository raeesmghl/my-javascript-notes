


// synchronous execution means, code is executed in a sequential and blocking manner
// default behavior in javascript

// each operation cause delay and blocking behavior until it completes 
// as other operations has to wait for the execution until first completes
// if an operation takes long time to execute it couse the whole/entire program to pause
// synchronous is simple, so its examples are also simple

console.log('hello world');
console.log(333);
console.log(true);

// first "hello world" is printed than "333" and than "true" is printed in the console







let func2 = () =>{
    console.log('this is func2')
}

let func1 = () =>{
    console.log('func1 start');
    func2();
    console.log('func1 ending');
};


func1();


//output : 

// func1 start
// this is func2
// func1 ending


// but if

let fun2 = () =>{
    console.log('this is fun2')
}

let fun1 = () =>{
    console.log('fun1 start');
    setTimeout(fun2,1);          // used setTimeout (Asynchronous)
    console.log('fun1 ending');
};
fun1();


// func1 start
// func1 ending
// this is func2













let func2 = () => console.log('func2');
let func1=()=>{
    console.log('func1 started');
    
    let d = new Date().getTime();
    while(new Date().getTime()-d<=5000){
    }  // for 5 seconds the execution of the code stops and control never moves to the next line

    // after 5 seconds the control moves to the next line
    setTimeout(func2,1000) //  now (after 5 seconds) the timer starts
    console.log('func1 ended');
}
func1();
// output : 

/*
func1 started
func1 ended
func2
*/













console.log("Start");   // Start

function step1() {
  console.log("Step 1");
}

function step2() {
  console.log("Step 2");
}

function end() {
  console.log("End");
}

step1();  // Execute Step 1 synchronously
step2();  // Execute Step 2 synchronously
end();    // Execute End synchronously















// Synchronous exucution
// following code stops the exucution of code for 5 seconds when button is clicked;



/* <h1 id="btn">click</h1>

<form action="">
    <input type="text" placeholder="name">
    <br><br>
    <input type="text" placeholder="password">
</form>
<script>

    let btn = document.getElementById('btn');

    btn.addEventListener('click',()=>{
        console.log('clicked');

        let d = new Date().getTime();
        console.log(new Date().getTime() - d);

        while(new Date().getTime() - d < 5000){
          // no code to execute because this code is only used for let all the operations to wait until the execution of while loop
        }
        console.log('its all right')
    })
</script> */





// new Date().getTime(): This code creates a new Date object and then calls its getTime() method. This method returns the current time in milliseconds since the epoch (January 1, 1970, 00:00:00 UTC). So, new Date().getTime() gives you the current time in milliseconds.

// d: This is a variable that was assigned the current time in milliseconds just before the while loop started, using let d = new Date().getTime();. So, d holds the value of the current time when the button was clicked.

// new Date().getTime() - d: This expression calculates the difference between the current time (when the expression is evaluated within the loop) and the time recorded in the variable d. This difference represents the elapsed time in milliseconds since the button was clicked.

// < 5000: This is the comparison part of the condition. It checks whether the elapsed time (the difference between the current time and d) is less than 5000 milliseconds (5 seconds). If this condition is true, the loop continues to execute.




// same code in Asynchronous execution 




btn.addEventListener('click',()=>{
  console.log('clicked');
  
  setTimeout(()=>{
  console.log('its all right');
  },5000)
})

// but in this code , the output is same but all tasks are executed independently







// another synchronous example;



console.log('hello world');

let i = 0;
while (i<800000000) {
    // console.log(i)
    i++;
}

console.log('new world')
