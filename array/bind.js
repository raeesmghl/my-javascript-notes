// With the bind() method, an object can borrow a method from another object.

// The example below creates 2 objects (obj and newObj).

// The newObj object borrows the greeting method from the obj object:



let obj = {
    fname : 'raees',
    lname : 'mughal',
    greeting : function (){
        return ('hello ' + this.fname +' ' +this.lname)
    }
};
const newObj={
    fname : 'wajahat',
    lname : 'Islam',
};
let fullgreeting = obj.greeting.bind(newObj);
console.log(fullgreeting()) ;













// here intro is an outside funciton and "data" is object that borrows the function 
let intro = function (){
    return ('hello ' + this.fname +' ' +this.lname)
}

const data = {
fname : 'wajahat',
lname : 'Islam',
};
let prints = intro.bind(data);
console.log(prints());








// example without bind function 
// this example defines the value of 'this'

const person = {
    fname : 'raees mughal',
    age : 20,
    professeion : 'frontend developer',
    fullIntro : function (){
        console.log(`${this.fname} is ${this.age} years old and he is ${this.professeion} by profession`)
    }
};
person.fullIntro();





// when a function is used as a call back function, 'this' is lost

// as:


const boy = {
    n : 'mughal',
    address : 'skp',
    func : function (){
        console.log(this.n + ' is from '+ this.address)
    }
};

boy.func() // this will print the expected result (mughal is from skp)


// we used the function directly
// but if we use this as callback function, "this" will be lost:

setTimeout(boy.func(),2000); // this will print (undefined is from undefined),because function using 'this' is used as a call back funciton so 'this' is lost;

// always remember : in "setTimeout" when we use external function , we dont use parantheses and put arguments after delay time


// this is the time to use bind() function

setTimeout(boy.func.bind(boy),2000); // this will print ('mughal is from skp') after 2 second 


