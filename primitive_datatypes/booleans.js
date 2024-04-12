Boolean Values

Very often, in programming, you will need a data type that can only have one of two values, like

    YES / NO
    ON / OFF
    TRUE / FALSE

For this, JavaScript has a Boolean data type. It can only take the values true or false.

eg:

let x = 10;
let y = 20; 
console.log(x>y);    //result is a boolean which is (false)


but:
console.log(x<y)   //will be true




we will see this in the comparison and conditional operators










You can use the Boolean() function to find out if an expression (or a variable) is true:
Example

console.log(Boolean(10 > 9));    //true

or simply:

console.log(10>9);    //true










Everything With a "Value" is True
example:


let x = 10;
console.log(Boolean(x));    //true

or:

console.log(Boolean(10));  //true



let x = 'raees';
console.log(Boolean(x));   //true

or:

console.log(Boolean(raees));  //will throw an error because raees is not defined

but:

console.log(Boolean('raees')) //true









Everything Without a "Value" is False
example:



console.log(Boolean())  //false













The Boolean value of 0 (zero) or -0 is false:

let x = 0;
console.log(Boolean(x));  //false

or:

console.log(Boolean(0));  //false

or:

let x =-0;
console.log(Boolean(x));  //false













The Boolean value of "" (empty string) is false:



let s = "";
console.log(Boolean(s));  //flase














The Boolean value of undefined is false:


let x;
console.log(Boolean(x)); 

or:

let x=undefined;
console.log(Boolean(x));
















The Boolean value of null is false:


let x = null;
console.log(Boolean(x));  //false

or:

console.log(Boolean(null));  //false







