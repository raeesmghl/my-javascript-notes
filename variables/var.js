// var can be reassign, redeclare and can be used before it is declare





// var a = 10;
// console.log(a);
// a = 'volvo';         //rereassigning
// console.log(a);





// var a = 10;
// console.log(a);
// var a = 'volvo';    //redeclaring
// console.log(a);




// carName = 'volvo';
// var carName;           //variables can be used before they are declared
// console.log(carName);





// var carname = 'volvo';
// console.log(carname);
// var a = carname;
// console.log(a)







// var x = 10;
// var y = 20;
// var z = x + y;
// console.log('x is', x);
// console.log('y is', y);
// console.log('z is x + y, that is' , z)






// //undeclared
//  x = 10;
//  y = 20;
//  z = x + y;
// console.log('x is', x);
// console.log('y is', y);
// console.log('z is x + y, that is' , z)    //gives the same result as above   // not a good practice






// var is global scoped

// var x = 10;
// console.log(x);    // x is 10
// {
//   var x  = 20;
//   console.log(x);    // in the block x  is 20
// }
// console.log(x)      //because it is not a block scoped, so this is 20 here    // but in let, it will be 10





// all the three variables (let,var,const) are functional scoped it means if a variable si declared inside a function, it is not accessable outside of the function;
