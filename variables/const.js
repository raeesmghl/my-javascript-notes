// neither redeclared nor reassigned

// The keyword const is a little misleading.

// It does not define a constant value. It defines a constant reference to a value, which can neither be redeclared nor reassigned




//                                         Because of this you can NOT:

//                                         Reassign a constant value
//                                         Reassign a constant array
//                                         Reassign a constant object

//                                         But you CAN:

//                                         Change the elements of constant array
//                                         Change the properties of constant object

                                         
    
    
    
    
    

// const x = 20;
// console.log(x);    // will be 20




// const a = 'raees';
// a = 'mughal';
// console.log(a);    // due to reassigning this will throw an error




// const a = 'raees';
// const a = 'mughal';
// console.log(a);    // due to redeclaring this will throw an error






// hoisting
// not allowed:

// const x;
// x = 'raees';
// console.log(x)   //error





// x = 'raees';
// const x;
// console.log(x)   //error




// but because they are blocked scoped, so they can be redeclared within a block



// const a = 'raees';
// {
// const a = 'mughal';
// console.log(a);   
// }
// console.log(a)




// const x = 2;       // Allowed

// {
//   const x = 3;   // Allowed
// }

// {
//   const x = 4;   // Allowed
// } 





// but:



// var x = 2;     // Allowed
// const x = 2;   // Not allowed

// {
// let x = 2;     // Allowed
// const x = 2;   // Not allowed
// }

// {
// const x = 2;   // Allowed
// const x = 2;   // Not allowed
// }
