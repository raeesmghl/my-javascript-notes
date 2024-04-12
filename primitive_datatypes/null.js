Null

The Null type is inhabited by exactly one value: null.

In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
example:


let x = null;
console.log(x);   //result will be (null)


typeof null:


let x = null;
console.log(typeof x);   //will be object



Unfortunately, in JavaScript, the data type of null is an object.

You can consider it a bug in JavaScript that typeof null is an object. It should be null.







You can empty an object by setting it to null:
Example
let person = {
  firstName:"John", 
  lastName:"Doe", 
  age:50, 
  eyeColor:"blue"
  };
person = null;

console.log(person);            //Now value is null
console.log(typeof person)      //type will be still object











You can also empty an object by setting it to undefined:
Example
let person = {
  firstName:"John", 
  lastName:"Doe", 
  age:50, 
  eyeColor:"blue"
  };
person = undefined; 


console.log(person);            //Now value is undefined
console.log(typeof person)      //type is now undefined












Difference between null and undefined

undefined and null are equal in value but different in type


this is because null is defined and undefined is obviously not defined



overview:

typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true 
