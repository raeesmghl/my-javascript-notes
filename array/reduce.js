


// reduce() is used to reduce an array to a single value by executing a reducer function on each element of the array. The reducer function takes two arguments, the accumulator and the current value. It returns a single value, which becomes the accumulator for the next iteration.



const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // Output: 15


// before the closing bracket of reduce() function, there is 0, which represents the initial value of the accumulator,
// in this way, the first iteration will be 0+1=1 and than it becomes accumulator so next iteration will be 1+2 = 3 and so no, until the final accumulated value of 15 is returned.



// above function can also be written as:

let num = [1,2,3,4,5];
let summ = num.reduce((ac,cr)=>{
    return ac+cr;
},1)
console.log(summ);    // will print 16 because the initial value of accumulator is 1, in this way the first iteration will be 1+1 = 2;















// sum of all the elements of an array
let arrr = [1,2,3,4,5];
let reducer = arrr.reduce((ac,cu,i)=>{
    let red = ac+cu;
    console.log(`ac : ${ac} , cu : ${cu} , index : ${i}`)
    console.log(`${ac} + ${cu} = ${ac+cu}`)
    return red;
},0);

console.log(reducer);















// Sum of values in an object array
let numberss = [
    {subject : 'eng', marks : 67},
    {subject : 'urdu', marks : 57},
    {subject : 'math', marks : 61},
    {subject : 'pakst', marks : 30},
];

let total = numberss.reduce((ac,cu)=>{
    console.log(`${ac} + ${cu.marks} = ${ac+cu.marks}`)
    return ac + cu.marks;
},0);
console.log('the total marks are '+total);









// largest number in an array;

let arr = [1,5,7,2,4];
let largest = arr.reduce((acc,curr)=>{
    return acc>curr?acc:curr;
})
console.log(largest);









// inside object-datatypes, their is an example about flattening a nested array.
// this concept uses (reduce method and recursive function).
