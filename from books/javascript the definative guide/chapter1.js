

//(from page 4)
let primes = [2,3,5,7,11,13,17,19,23];

console.log(primes.length);
console.log(primes[primes.length-1]);
console.log(primes[0] + primes[1]);





//(from page 4)
// functiion of finding fictorial
function fact(x){
    if(x>1){
        return x * fact(x-1)
    }else{
        return 1
    }
}
console.log(fact(4))    // i did not understand this








//(from page 4)
let x = 2 ; let y = 3;
console.log(x+y);
console.log((x===2)&&(y===3));
console.log((x>3)||(y<2));





//(from page 6)

let obj = {
    name : 'raees',
    age : 20
}


console.log(obj.name);            
console.log(obj['age']);
obj.position = 'frontEnd';
obj.Entries = {};            // adding property with value of an empty object
console.log(obj);









//(from page 6)
let primeNo = [2,3,5,7,11,13,17];
console.log(primeNo.length);
console.log(primeNo[primeNo.length-1]);
console.log(primeNo[0]);
primeNo[7]= 19;
primeNo[primeNo.length]=23;
console.log(primeNo);




// (from page 6)
//arrays can hold objects

let arr = [
    {x:2,y:3},
    {x:3,y:2}
]

let checking = arr[0].x == arr[1].y;
console.log(checking)               //=> true


let opt = arr[0]['y'] - arr[1]['y'];
console.log(opt)    // => 1










//(from page 6,7)

let objt = {
    trial1:[1,2,4,[61,62,63,[103,104,105],64]],
    trial2:[[80,90],[70,60]]
}

console.log(objt['trial1'][3][3][1]-objt['trial2'][0][1]);       // 14

  //or

  let from_trial1 = objt['trial1'][3][3][1];   
  console.log(from_trial1);                    // 104
  let from_trial2 = objt['trial2'][0][1];      
  console.log(from_trial2);                    // 90


  console.log(from_trial1-from_trial2)       //14










  //(from page 7)

  let count = 0;
  count++;
  count--;
  count+=2;
  count*=3;
  console.log(count);    //=> 6
 
  --count;
  ++count;
  count++;
  count-=3;
  count%=2;
  console.log(count)     //=> 0




  let X = 4; let Y = 6 ;
  console.log(X===Y);     //false
  console.log(X!==Y);     //true 

  console.log(X>Y)        // false
  console.log(X<Y)        // true
  console.log(X>=Y)       // false
  console.log(X<=Y)       // true
  console.log(!(X>Y))     // true
  console.log((X==(Y-2))&&(X<Y))   //true
  console.log('two' > 'three')    // true , 'tw' is alphabetically greater than 'th'
  console.log(false==(X>Y))       // true         
  















//   (from page 8)       
//   function for adding 1;

function add1(x){
    return x+1;
}

let yy = 5;
console.log(add1(yy));

// function for square;

function square(x){
    return x*x;
}

console.log(square(yy))

console.log(square(add1(yy)));   







// modern syntax for function

const plus1 = x => x+1;
console.log(plus1(4));

const sqr = x => x*x;
console.log(sqr(3));

console.log(sqr(plus1(4)));










// (from page 9)
// When functions are assigned to the properties of an object, we call them "methods." All JavaScript objects (including arrays) have methods:


let array = [1,2,3,4,5];
let reversing = array.reverse();     // .reverse is an array method
console.log(array);












// (from page 9)
// a function to compute the absolute value
const abs = x =>{
    if(x>=0){
        return x
    }else{
        return -x
    }
};
console.log(abs(-8));
console.log(abs(20)===abs(-20));










// (from page 9)
let ARRAY = [2,4,6,8,10];
function summation(anArray){
    let sum = 0;
    for(let x of anArray){
        sum+=x;
    }                       // primes are defined above as [2,3,5,7,11,13,17,19,23]
    return sum
} 
console.log(summation(ARRAY));






//(from page 9)
let fictorial = (n) => {
    let fic = 1;
    for(let i = 2;i<=n;i++){
        fic*=i
    }
    return fic
};

console.log(fictorial(5));






//with while loop
function Fictorial(n){
    let product = 1;
    while(n>1){
        product*=n
        n--
    }
    return product
}
console.log(Fictorial(5));








console.log('this\u0020is\u0020a\u0020string')  //unicode of white space













