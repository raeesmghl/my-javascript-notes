let str1 = 'this is a string';
let index = str1.indexOf('i');  // gives the index of first 'i' in the string which is 2;
console.log(index);


console.log(str1.indexOf('is'));// gives the index of 'i' in the first 'is' in the string which is also 2 because 'this' also contains 'is'

console.log(str1.indexOf('is a'));// gives the index of 'i' in the first 'is a' element in the string, which is 5

console.log(str1.indexOf('ing'));   // gives 13 (index of i)







// lastIndexOf    works the same but it starts finding the character from end but gives the index (counting) form start

let str2 = 'this is a string';
let indexx = str2.lastIndexOf('i');   // gives 13
console.log(indexx);


console.log(str2.lastIndexOf('is'));    // gives 5  
console.log(str2.lastIndexOf('is a'));  // gives 5
console.log(str2.lastIndexOf('ing'));   // gives 13
console.log(str2.lastIndexOf('this'));   // gives 0





















// The includes() method returns true if a string contains a specified value.
// Otherwise it returns false.
// the original string is not modified
// includes() is case sensitive

let str3 = 'this is a new string';
let isIncluded = str3.includes('new');
console.log(isIncluded);             // true

console.log(str3.includes('new'));    // true
console.log(str3.includes('neww'));   // false

























// The startsWith() method returns true if a string begins with a specified value.
// Otherwise it returns false:




let str4 = 'hello world, welcome to the universe';
let doesIt = str4.startsWith('hello');
console.log(doesIt);                  // true


console.log(str4.startsWith('h'));     // true
console.log(str4.startsWith('world'))  // false




//A start position for the search can be specified (index of the character)


console.log(str4.startsWith('world',6));  // true ('world' starts at index 6)



console.log(str4.startsWith('welcome',str4.indexOf('welcome')/* gives 1*/));  //true







// similarly The endsWith() method returns true if a string ends with a specified value.
// Otherwise it returns false:


let str5 = 'hello world, welcome to the universe';
let whatIf = str5.endsWith('hello');
console.log(whatIf);                    //false

console.log(str5.endsWith('universe')); //true
console.log(str5.endsWith('e'));        //true

console.log(str5.endsWith('univers'))   //false ('e' is missing);



// An End position for the search can be specified:

console.log(str5.endsWith('hello',5)) // true