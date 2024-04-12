


setTimeout(function (){
    console.log('hello world')
},2000)// after 2 seconds, the function is executed and prints a message to the console











// we can also change the CSS of out page after a selected time as:

setTimeout(function (){
    document.getElementById('div').style.color = 'green';
},3000) // after 3 seconds, the function is executed and changed the color of #div












// using anonymous function

setTimeout(()=>{
    console.log('new world')
},3000)












// clearing timeout of anonymous function 

let cleartimeout = setTimeout(()=>console.log('timeout cancelled'),1000);
clearTimeout(cleartimeout);











// using external function

setTimeout(fun,2000);
function fun (){
    alert('hello world')
}






// uning function with arguments:

setTimeout((n)=>{
    console.log('hello '+ n)
},2000,'raees mughal');  // arguments are passed after the delay time



// or:
let txt = 'hello world! this is a line of code'
setTimeout(fn,1500,txt);
function fn(msg){
    console.log(msg)
}








// clearing a timeout before execution:
// for this we have to put it into a variable as:

let id = setTimeout(fun,1000);
function fun(){
    alert('coding world')
};
clearTimeout(id); // to clear time out , we use variable identifier









// executing a function inside an object after a delay:

const myObject = {
    name: 'John',
    greet: function() {
      console.log('Hello, ' + this.name);
    }
  };
  
  setTimeout(myObject.greet.bind(myObject), 2000); // Executes the greet method after 2 seconds
  // bind function is used (see bind.js);
  











let namee = prompt('Enter your name')

let interval;
if(namee){
    interval = setTimeout(fun,3000,namee);
    function fun(n){
        console.log('hello ' + n)
    }
}else{
    clearTimeout(interval);
    console.log('prompt was empty')
};







// use event handler to setTime and clearTime

let btn = document.getElementById('btn');   // this button will start the timeout
let div = document.getElementById('div');   // this is div whose color is going to change
let btn2 = document.getElementById('btn2')  // second button, to stop execution
let timeoutid;
btn.onclick = ()=>{
    let newF =()=>{
    div.style.backgroundColor = 'blue';
}
timeoutid = setTimeout(newF,3000);
}

btn2.onclick = ()=>{
    clearTimeout(timeoutid)
};

// when you click on button one, the timeOut is started and if the second button is not clicked within the given timeOut , the function for changing background color is executed , but if second functin is clicked within the given time, the function will not execute














// iterates the array elements after 2 seconds
let array = [1,2,3,4,5];
        
for(let i = 0;i<array.length;i++){
    setTimeout(()=>{console.log(array[i])},2000)
}






// Canceling a timeout based on a condition inside a loop:
// loop is designed in this way, that when it is executed, it will print a message 5 times, but if condition becomes true, the function is stoped
let timeoutId;

for (let i = 0; i < 5; i++) {
  timeoutId = setTimeout(function() {
    console.log('This message will be canceled if condition is true');
  }, 2000);

  if (condition) {
    clearTimeout(timeoutId);
    break;
  }
}












/* <h1>hello world</h1>
<button id="start">start</button>
<button id="stop">stop</button>
<script>

    let start = document.querySelector('#start');
    let stop = document.querySelector('#stop');
    stop.disabled = true
    let interval;
    let i = 1;
    let func = () =>{
        let el = document.createElement('h1');
        el.innerHTML = 'heading no ' + i;
        document.body.appendChild(el);
        i++;
    }

    start.addEventListener('click',()=>{
        start.disabled = true;
        stop.disabled = false;
       interval = setInterval(func,1000)
    })
    stop.addEventListener('click',()=>{
        start.disabled = false;
        stop.disabled = true;
       clearInterval(interval)
    })
</script> */