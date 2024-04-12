// filter() is a method in JavaScript that is used to create a new array with all the elements that pass the test implemented by the provided function


let array = [1,2,3,4,5];
    let filtered = array.filter((v,i,a)=>{
      return v>3     // this is the condition we are giving to pass by each element
    });
    console.log(filtered)  // gives the filtered array [4,5];


    // but if we use map() and apply the condition :


    let array1 = [1,2,3,4,5];
    let filtered1 = array1.map((v,i,a)=>{
      return v>3
    });
    console.log(filtered1) // this will apply the condition on all the elements and gives the boolean value whether the element passed the test or not;
    // [false,false,false,true,true]






















    // odd numbers in an array
    
    let array2 = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    let filtered2 = array2.filter((v,i,a)=>{
      return v%2==0    // condition
    });
    console.log(filtered2);

























// remove all the null and undefined values 
    let array3 = [1,'string',5,24,null,'booleans are y or n',undefined];
    let newArray = array3.filter((v,i,a)=>{
      return v!=null      // this only checks the value not type
    });
    console.log(newArray)



















// Filtering out objects with a specific property value:

    let array4 = [
        {name:'Adam',age : 34},
        {name:'Alen',age : 45},
        {name:'John',age : 23},
        {name:'William',age : 27},
        {name:'Richered',age : 32},
      ];
  
      let filtering = array4.filter(v => v.age >=30)
      // this is a shorthand and modern way to write a function in witch only current value (v) is given as argument and than condition is written by which all the elements have to pass;
  console.log(filtering)








// we can use both map() and filter() at the same time as:


let array5 = [
    {name:'Adam',age : 34},
    {name:'Alen',age : 45},
    {name:'John',age : 23},
    {name:'William',age : 27},
    {name:'Richered',age : 32},
  ];

  let filtering2 = array5.filter(v => v.age >=30).map(person=>person.name)
console.log(filtering2)


// first filter() filters the objects and creates a new array (as seen in the previous example) than map() is applied in which callback function takes person as an argument and returns an array which contains the names of the persons >= 30



















// Filtering out elements from an array based on a function that takes an argument:

// its callback function takes a function as an argument (to filter);


let array6 = [1,2,3,4,5,6,7,8,9];

let myFunction = (number , max)=>{
  return number<=max
};                   

let filtered6 = array6.filter((v,i,a)=>{
  return myFunction(v,5)    // function is used as condition
});

console.log(filtered6)













// outer callback function is used;


const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(number => filterByNumber(number, 3));
console.log(filteredNumbers); // Output: [1, 2, 3]

function filterByNumber(number, max) {
  return number <= max;
}

