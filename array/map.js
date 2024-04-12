// forEach method is used to perform different functions on the elements of the existing array or to iterate the elements of the existing array;

// In JavaScript, the map() function is a built-in higher-order function that is used to create a new array by transforming each element of an existing array with a given function. The map() function takes an array and applies a callback function to each element of the array, then returns a new array with the results. 



let arrayy = [1, 2, 3, 4, 5];
let ba = arrayy.map((v, i, a) => {
    return v
});
console.log(ba);   // ba returns the same array



// but if we use forEach : 

array.forEach((v,i,a)=>{
    console.log(v)
});
// we used console.log() because forEach() does not return anything (but map() do);



















// we can also use an external function as a callback function
let array = [1, 2, 3, 4, 5];
let fun = (v, i, a) => {
  return v + i
};
let b = array.map(fun);
console.log(b);
















// converting an array of strings into array of numbers (using for loop)

let array4 = ['1', '2', '3', '4', '5'];
let b1 = []
for (let i = 0; i < array4.length; i++) {
  b1.push(Number(array4[i]));
}
console.log(b1);


// but we can do it using map()


let array5 = ['1', '2', '3', '4', '5'];
let numberedArray = array5.map((v, i, a) => {
  return Number(array5[i])
})
console.log(numberedArray) // same results



















// Capitalizing the first letter of each word in an array of strings:

let s = 'this is the string';
let str = s.split(' ')
    let converted = str.map((v,i,a)=>{
      return v[0].toUpperCase() + v.slice(1);
    })
    console.log(converted);
// covered in the github repository (testing) using for loop and function


















// Creating an array of objects from arrays of strings:

let keys = ['name','age','profession','cast'];
let values = ['raees',20,'developer','mughal'];

let obj = keys.map((v,i,a)=>{
 return { [v] : values[i]}
});
console.log(obj);















// Extracting a specific property from an array of objects: (name)

let anArrayOfObjects = [
  {name:'raees',age : 20},
  {name:'rehman',age : 19},
  {name:'sohail',age : 23},
  {name:'abdullah',age : 21},
  {name:'waseem',age : 34},
  {name:'uman',age : 15},
]
let gettingNames = anArrayOfObjects.map((v,i,a)=>{
  return v['name']
})
console.log(gettingNames);



















//converting an array of celcius into array of fahrenheit

let celcius = [20,30,42,37,40,55];
let Fahrenheit = celcius.map((v,i,a)=>{
  return (v *(9/5))+32
});
console.log(Fahrenheit);











