//length
// the original array is not modified


let str = 'this is a string';
let length = str.length;
console.log(length);

// but if we check the original string, it has no effect
console.log(str)      //gives the original string




// or if:

let crt = 'creating string';
crt.length;
console.log(crt);     // this will print the original string
//which means this has no effect on original string








//toUpperCase()  and toLowerCase
// the original array is not modified


let str1 = 'This is a String';
let upperCase = str1.toUpperCase();
console.log(upperCase);





let lowerCase = str1.toLowerCase();
console.log(lowerCase);











// Slice a part of string
// does not modify the original string;


let str2 = 'raeeswajahatislammughal';

let slicing = str2.slice(5, 12);
//select from 5 index to 11 (before 12 index)

console.log(slicing)     // wajahat



// but if:

let slicing1 = str2.slice(12); //starts from 12 index and goes till the end

console.log(slicing1);  // islammughal













// the replace() method replaces only the first match
// the original string is not modified

let str3 = 'javascript is a flexible language and i like it very much';

let replacing = str3.replace('and', 'or');
console.log(replacing);







// replaceAll method is used to replace all the matches with the given one

let strr = 'this is a pen. this is my pen. this is a new pen. this is a good pen';
let replacingAll = strr.replaceAll('pen', 'book'); // all pen replaced with book
console.log(replacingAll);























// concating two or more strings
// original string is not modified


let str4 = 'hello';
let str5 = 'world';

let concat = str4.concat(str5);
console.log(concat);             // helloworld

let concat2 = str4.concat(' ', str5);
console.log(concat2)             // hello world


// or
console.log(str4.concat(' ', str5))   // hello world




let one = 'this';
let two = 'is';
let three = 'a';
let four = 'string';

console.log(one.concat(' ', two, ' ', three, ' ', four))  // this is a string

console.log(one.concat(' ').concat(two).concat(' ').concat(three).concat(' ').concat(four))  //this is a string

















// trim method
// removes white spaces from start and end of the string
// does not modify the original string


let str6 = '                                 this is a string                ';
let triming = str6.trim();
console.log(triming);




//trimStart trims from start only
//trimEnd trims from end only

















// CharAt()  method is used to get a specific character from string using its index
// does not effect the original string;


let str7 = 'laptop computer charger mouse keyboard handfree';
console.log(str7.length);
let gettingChar = str7.charAt(16);
console.log(gettingChar);



// The charCodeAt() method in JavaScript returns an integer between 0 and 65535 that represents the Unicode value of the character at a specified index in a string.


let gettingUnicode = str7.charCodeAt(3);
console.log(gettingUnicode);













let str8 = 'please give Rs 1000 f';
console.log(str8.indexOf('R'));
console.log(str8.slice(str8.indexOf('1000'),str8.lastIndexOf(' f'))) // 1000



