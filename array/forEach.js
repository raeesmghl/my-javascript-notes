
// In JavaScript, you can use a for...each loop to iterate through an array. Here's an example:

const myArray = [1, 2, 3, 4, 5];

myArray.forEach(function (element) {
  console.log(element);
});


// In this example, we declare an array myArray with 5 elements. We then use the forEach method to loop through each element in the array. The forEach method takes a callback function as an argument, which is called for each element in the array. In this case, the callback function simply logs each element to the console.




// You can also use an arrow function instead of a regular function:

const myArray1 = [1, 2, 3, 4, 5];

myArray1.forEach(element => {
  console.log(element);
});


// This does the same thing as the previous example, but uses an arrow function instead of a regular function.



// Note that the forEach method does not return anything, so you cannot use it to create a new array. If you need to create a new array based on the elements in the original array, you can use a `map` function instead.
























// syntax :



// array.forEach(function (currentValue, index, array) {
  // code to be execute for each element of array
// })



// current value is the value of each element
// index is the index of each element 
// and array is the reference to array that 'forEach' is being called upon;







let array = [1, 2, 3, 4, 5];


array.forEach((val, i, ary) => {

  console.log(val + ',      ' + i + ',      ' + ary)
})


// first argument is compalsory , 2nd and 3rd are optional












// multiplying each Element by 2
let arrr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

let myFunction = (v, i, a) => {
  a[i] = v * 2;
}
arrr.forEach(myFunction);

console.log(arrr);













// getting sum of all the elements of array
let numb = [5, 2, 4, 8, 12, 3, 9, 1, 10, 1];
let sum = 0;
numb.forEach((v, i, a) => {
  sum += v;
})
console.log(sum);














// checking if all the numbers in array are even

let evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let allEvens = true;
evens.forEach((v, i, a) => {
  if (evens[i] % 2 !== 0) {
    allEvens = false;
  }
})
console.log(allEvens);












// seperating odd and even numbers into 2 new arrays



let all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let even = [];
let odd = [];


// applied a forEach loop on 'all', for each item the condition is applied, it it is even , it is pushed into 'even' array , otherwise it is sent to 'odd' array

all.forEach((element, index, array) => {
  if ((array[index] % 2) == 0) {
    even.push(element)
  } else if ((array[index] % 2) !== 0) {
    odd.push(element)
  }
});

console.log(all);
console.log(odd);
console.log(even);


// can also be performed if we use only the compulsory argument (element), and leave (index,array);


// works same
all.forEach((element) => {
  if ((element % 2) == 0) {
    even.push(element)
  } else if ((element % 2) !== 0) {
    odd.push(element)
  }
});














// REMOVING A SPECIFIC NUMBER FROM THE ARRAY



let alll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

alll.forEach((v, i, a) => {
  if (v == 5) {
    a.splice(i, 1)
  };
})

console.log(alll)












// this program removes 1,3,5 from the loop (deep understanding of loop and splice);

let a = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < a.length; i++) {
  a.splice(i, 1)
}
console.log(a);

















// Converting an array of strings to uppercase:

let arrayy = ['this', 'is', 'a', 'string'];
arrayy.forEach((v, i, a) => {
  a[i] = v.toUpperCase();
});
console.log(arrayy);



// or if we use new array

let aarray = ['this', 'is', 'a', 'string'];
upercse = [];
aarray.forEach((v, i, a) => {
  let us = a[i].toUpperCase();
  upercse.push(us)
});
console.log(aarray);
console.log(upercse);















// Reversing the order of an array:

let aray = [1, 2, 3, 4, 5, 6, 7, 8];
let reversed = [];
aray.forEach((v, i, a) => {
  reversed.unshift(v);
});
console.log(reversed);












// Mapping an array of numbers to their square roots:

let nmbs = [4, 9, 16, 25, 36, 49, 64, 81, 100, 144, 169];
let sqr = [];
nmbs.forEach((v, i, a) => {
  let gettingsr = Math.sqrt(v)
  sqr.push(gettingsr);
});
console.log(nmbs);
console.log(sqr);
















// Filtering out duplicate elements from an array:
let Ar = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 4, 3, 4, 3, 4, 3, 4, 5, 6, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7];
let newAr = [];
Ar.forEach((v, i, a) => {
  if (!newAr.includes(v)) {
    newAr.push(v);
  }
})
console.log(newAr);
















// Reversing the order of words in a sentence:


let str = 'this is a string just for testing';
let strToArray = str.split(' '); //split() method splits the string into array
// in the bracket notation there is a space, covered with quotes shows that till 1st space, there is the first item of array;
let reversedArray = [];
strToArray.forEach((v,i,a)=>{
    reversedArray.unshift(v);
});
console.log(reversedArray);
console.log(reversedArray.join(' ')); // again converting array to string by using join method 


// or

let reversedString = reversedArray.join(' ');
console.log(reversedString);




















// Counting the occurrences of each element in an array:

let a9 = [1,2,3,4,5,6,1,4,5,3,4,5,6,2,1,3,2,4,3,5,6,7,3];
let count = {};
a9.forEach((v,i,a)=>{
    if(count[v]){
        count[v]++;
    }else{
        count[v] = 1;
    }
});
console.log(count);  // this gives the result as keys as the element in array and values as number of times it occur in the array

for(let i in count){
    console.log(i + ' is ' + count[i] + ' times in the array');
};



// for string


let stt = 'aquickbrownfoxjumpsoverthelazydog'.split('');
let objj = {};
stt.forEach((v,i,a)=>{
    if(objj[v]){
        objj[v]++
    }else{
        objj[v] = 1;
    }
})
console.log(objj)



// for string, it also counts the number of spaces;


let sttr = 'this is a string'
let arr = sttr.split('');
let obj = {};
arr.forEach((v,i,a)=>{
    if(obj[v]){
        obj[v]++
    }else{
        obj[v] = 1;
    }
})
console.log(obj)

















// Flattening a nested array:
// but this cant flatened the nested array of nested array (3 level deeper or above)

let arrayyy = [1,2,3,4,[2,3,4],[5,4,3,[4,5,6]]];
let flatenedarray = [];
arrayyy.forEach((v,i,a)=>{
   if(Array.isArray(v)){
       v.forEach((e)=>{
           flatenedarray.push(e)
       })
   }else{
       flatenedarray.push(v);
   }
})
console.log(flatenedarray);




// use the flat method with flat() , flat(2) , flat(3) they will flatened the array with thier level according to the deepness of array

// practiced deep deeper deepest in freecodecamp;










//Sorting an array of objects by a specific property: (increasing age)
let arR = [
  {name:'raees',age:20},
  {name:'rumman',age:18},
  {name:'rahat',age:18.5},
  {name:'rohan',age:16},
  {name:'aihan',age:19},
  {name:'nadir',age:15},
];

arR.sort((a,b)=>{
  return a.age-b.age;
});
console.log(arR);

















// Finding the average value of an array of numbers:

let aRr = [10,15,10,14,12,15];
let avg =(array)=>{
    let sum = 0;
    array.forEach((v)=>{
        sum+=v;
    })
    return sum/array.length
};
let average = avg(aRr);
console.log(average)












// Checking if an array contains all elements in another array:
// this dont care if their is number repeating in the array, Arr should contain that number atleast one time
let aRRr = [10,15,10,14,12,15];
let Arr = [10,15,14,12];

let allContain = true;
aRRr.forEach((v,i,a)=>{
 if(!Arr.includes(v)){
     allContain = false;
 }
});
console.log(allContain);








// but in this case, both arrays should be same to get true result

let aRrrr = [10,15,10,14,12,15];
let Arrrr = [10,15,10,14,12,15];

let allContains = true;
aRrrr.forEach((v,i,a)=>{
 if(v!==Arrrr[i]){
     allContains = false;
 }   
});
console.log(allContains);

















let arrrr = [1, 2, 3, 4, 5];

// we are using an internal call back function
arrrr.forEach(function (element) {
  console.log(element);
})






// we can also use an external callback function as an argument for (forEach function)




let ar1 = [3, 4, 5, 6, 7, 8, 9];

// we have to name this external function to use it as callback function as an argument in forEach()
function myFunction(element) {
  console.log(element)
}


// here the external function is used as a callback function in forEach function (called by name)
ar1.forEach(myFunction);

















let array1 = [0, 1, 2, 3, 4, 5];

let multiplyby2 = (value) => {
  console.log(value * 2);
}

array1.forEach(multiplyby2);





