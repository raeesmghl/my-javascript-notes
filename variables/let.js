// let and const are block scoped which means if a code is placed in a block, its effect is in the block




// cannot be redeclare

// eg:

// let x = 10;
// console.log(x)

// let x = 20;     // this will throw an error
// console.log(x)





// but can be reassign as:

// let x = 10;
// console.log(x)

// x = 20;     // this is ok
// console.log(x)




// hoisting:

// let x;
// x = 10;
// console.log(x);



// but cannot be used before the vvariable is declared:


// x = 10;
// let x;
// console.log(x);    //will throw an error





// blocked scoped:

// Redeclaring a variable inside a block will not redeclare the variable outside the block

// let x = 'raees';
// console.log(x);       // x is 'raees'
// {
//   let x = 'mughal';
//   console.log(x);     //x is 'mughal'
// }
// console.log(x);       // x is 'raees'           // in var it will be mughal



// to be notice that in block, we redeclared the x and it is OK because its scope is only in the block







// Redeclaring a variable with let, in another block, IS allowed:
// Example:


// let x = 2;   // Allowed

// {
// let x = 3;   // Allowed
// }

// {
// let x = 4;    // Allowed
// } 



// but is the same block is not allowed

// var x = 2;   // Allowed
// let x = 3;   // Not allowed

// {
// let x = 2;   // Allowed
// let x = 3;   // Not allowed
// }

// {
// let x = 2;   // Allowed
// var x = 3;   // Not allowed
// }









// freecodecamp.org (ES6)

let a = 3,b=9    

// that is equals to: 
let a = 3; 
let b = 9;
