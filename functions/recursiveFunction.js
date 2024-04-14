



// let array = [1,2,3,4,5];



// let multiply = (arr,n) =>{
//     let total = 1;

//     for(let i = 0;i<n;i++){
//         total*=arr[i];
//     };
//     return total;
// };

// console.log(multiply(array,5));

// console.log(multiply(array,4)*array[5-1])





// let mul2 = (arr,n) =>{
//     if(n<=0){
//         return 1;
//     }
//     return mul2(arr,n-1)*arr[n-1]
// }






// let fromTo = (min,max)=>{
//     return Math.floor(Math.random()*(max-min+1))+min
// }




// let rec = (n) =>{
//     if(n<=1){
//         console.log(1)
//         return 1;
//     }else{
//         let a = n*rec(n-1);
//         console.log(a);
//         return a;
//     }
// };
// console.log(rec(4));





// function factorial(n) {
//     // Base case
//     if (n <= 1) {
//         console.log(`Base case reached with n=${n}. Returning 1.`);
//         return 1;
//     } else {
//         console.log(`Calculating factorial(${n}) as ${n} * factorial(${n - 1}).`);
//         // Recursive case
//         let result = n * factorial(n - 1);
//         console.log(`Factorial(${n}) = ${n} * factorial(${n - 1}) = ${n} * ${result} = ${result}`);
//         return result;
//     }
// }

// console.log(factorial(4));




// let fic = (n)=>{
//     if(n<=1){
//         return 1;
//     }else{
//         let a = n*fic(n-1);
//         console.log(a);
//         return a;
//     }
// };
// console.log(fic(5));
// fic(5)



// first function call fic(5);

// fic(5) = 5 * fic(4);        //printed 120 and returned fic(120) as 6
// fic(4) = 4 * fic(3);        //printed 24 and returned fic(4) as 24
// fic(3) = 3 * fic(2);        //printed 6 and returned fic(3) as 6
// fic(2) = 2 * fic(1);        //printed 2 and returned fic(2) as 2
// fic(1) = 1






// let fabonacci = (n) =>{
//     if(n<=1){
//         return n;
//     }else{
//         return fabonacci(n-1)+fabonacci(n-2)
//     }
// }









// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// let sumArr = (arr) => {
//     if (arr.length == 0){
//         return 0; 
//     }else{
//         return arr[0] + 
//     }
// }





























// ///////////////////////////////////example in javascript in freecodecamp: ////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////rules: ///////////////////////////////////////////////////////////////////

// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return the string No such contact.
// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.


/////////////////////////////////////////////////////////problem ://///////////////////////////////////////////////////////////



const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];



/////////////////////////////////////////////////////// SOLUTION 1 ///////////////////////////////////////////////////////////////

// USING LOOP

function lookUpProfile(name, prop) {
  // Iterate through contacts
  for (let i = 0; i < contacts.length; i++) {
    // Check if the name matches any contact's firstName
    if (contacts[i].firstName === name) {
      // If prop exists for the contact, return its value
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        // If prop doesn't exist, return "No such property"
        return "No such property";
      }
    }
  }
  // If name doesn't match any contact's firstName, return "No such contact"
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes")); // Output: ["Pizza", "Coding", "Brownie Points"]






/////////////////////////////////////////////////////// SOLUTION 2 ///////////////////////////////////////////////////////////////

// Using recursive function by chatgpt , but in this function we are doing some changes with the function's calling syntax.
// freecodecamp only input 2 arguments, but in our function their are 3 arguments;





function lookUpProfile(name, prop, index = 0) {
  // Base case: If index exceeds the length of contacts array, return "No such contact"
  if (index >= contacts.length) {
    return "No such contact";
  }

  // Check if the name matches the firstName of the contact at the current index
  if (contacts[index].firstName === name) {
    // If prop exists for the contact, return its value
    if (contacts[index].hasOwnProperty(prop)) {
      return contacts[index][prop];
    } else {
      // If prop doesn't exist, return "No such property"
      return "No such property";
    }
  }

  // Recursively call lookUpProfile with the next index
  return lookUpProfile(name, prop, index + 1);
}

console.log(lookUpProfile("Akira", "likes")); // Output: ["Pizza", "Coding", "Brownie Points"]










/////////////////////////////////////////////////////// SOLUTION 3 ///////////////////////////////////////////////////////////////

// Using recursive function by doing some changed in the code provided by chatGPT;

  let idx = 0;
function lookUpProfile(name, prop) {
  // Only change code below this line
  if(idx>=contacts.length){
    return 'No such contact';
  }

  if(contacts[idx].firstName==name){

    if(contacts[idx].hasOwnProperty(prop)){
      return contacts[idx][prop]
    }

    return 'No such property';
  }
  idx++;
return lookUpProfile(name,prop)
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
