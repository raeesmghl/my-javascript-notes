objects

In real life, a car is an object.

A car has properties like weight and color, and methods like start and stop

All cars have the same properties, but the property values differ from car to car.

All cars have the same methods, but the methods are performed at different times.





Objects are variables too. But objects can contain many values.

This code assigns many values (Fiat, 500, white) to a variable named car:

const car = {
  type: 'fiat',         //where type is property and fait is its value
  model: '500',         //model is property and 500 is value
  color: 'white'        //color is property and white is value
}

console.log(car);   // will result an object  { type: 'fiat', model: '500', color: 'white' }



The values are written as name:value pairs (name and value separated by a colon).

It is a common practice to declare objects with the const keyword.
(if we use const, we cannot redeclare or reassign it but can add or change values);
(but if we use let, we can ever reassign it)  using const is better












Example:


const myIntro = {
  firstName:'raees',
  lastName:'mughal',
  age: 20,
  height: '5 feet and 6 inches',
  profession:'coding'
  };



//accessing the object is same as accessing a variable as:
console.log(myIntro);   //will result an object : {firstName: 'raees', lastName: 'mughal', age: 20, height: '5 feet and 6 inches', profession: 'coding'}




Accessing Object Properties

You can access object properties in two ways: 



1:    using dot:

console.log(myIntro.fristName);    // will print the value of the property firstName which is raees
console.log(myIntro.lastName);     // mughal
console.log(myIntro.age);          // 20
console.log(myIntro.height);       // 5 feet and 6 inches
console.log(myIntro.profession);   // coding






2: using square brackets :

console.log(myIntro['firstName']);   
console.log(myIntro['lastName']);
console.log(myIntro['age']);
console.log(myIntro['height']);
console.log(myIntro['profession']);
//both have same results


























We can change the value of object even we are using const

This is very similar to accessing an object's values
first we access the property and than change its value Or assign it a new value


example :

If i wanna change my first name from raees to wajahat , i can do it in 2 ways just like accessing the properties of object


1:   myIntro.firstName = 'wajahat' ;   //we access the property and assigned it a new value
     console.log(myIntro);       //this will give the same result but the only change is : the value of firstName will be changed.




2:   myIntro['firstName'] = 'islam';  
     console.log(myIntro)       // same result but value of firstName is changed




















Adding a value in the object :


similar to changing the value of object's property
if we access the property name, which already exists in the object , we can print it directly or can change its value and than print it 
but if we wanna add a new value in the object , we have to use a property name that does not exist in the object before

example:



const myIntro = {
  firstName:'raees',
  lastName:'mughal',
  age: 20,
  height: '5 feet and 6 inches',
  profession:'coding'
  };


console.log(myIntro);    //will print an object as expected



myIntro.middleName = 'wajahat' ;  //this property name is not already in the object , so it is added in the end

or:

myIntro['middleName'] = 'wajahat';




console.log(myIntro);    //will also print an object with a new value at the end
















Typeof object:

type of object is object:


const myIntro = {
  firstName:'raees',
  lastName:'mughal',
  age: 20,
  height: '5 feet and 6 inches',
  profession:'coding'
  };
console.log(typeof myIntro)    // object








but if you check the type of its property value, it will not be object rether it will give the exact datatype of that value:



console.log(typeof myIntro.firstName);   //will be string

console.log(typeof myIntro['age']);     //will be a number



















we will read about its methods and implementing loops on it later
