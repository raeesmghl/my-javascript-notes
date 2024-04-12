BigInt


JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number



How to Create a BigInt:

To create a BigInt, append n to the end of an integer or call BigInt()
example:


let x = BigInt(2222222222222222222);
console.log(x);                          //2222222222222222336n
console.log(typeof x)                    //bigint



or:


let x = 2222222222222222222n;
console.log(x);                   //2222222222222222222n
console.log(typeof x)             //bigint











BigInt is the second numeric data type in JavaScript (after Number).

With BigInt the total number of supported data types in JavaScript is 8:

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object 













BigInt Operators

Operators that can be used on a JavaScript Number can also be used on a BigInt.
example:




let x = 2222n;
let y = 8n;
console.log(x+y);        //2230n
console.log(typeof x)    //bigint




even with a big value and different operator :


let x = 9007199254740995n;
let y = 9007199254740995n;
let z = x * y;
console.log(z);                //81129638414606735738984533590025n
console.log(typeof z);         //bigint














to apply an operator , both should be of same type
example:


let x = 5n;
let y = 2;
let z = x/y;      
console.log(z)     //error          Cannot mix BigInt and other types, use explicit conversions           

to convert into a number:

let x = 5n;
let y = 2;
let z = Number(x)/y;
console.log(z)                   //will result 2.5
console.log(typeof z)            //number























