ARRAY


An array is a special variable, which can hold more than one value:

An array can hold many values under a single name, and you can access the values by referring to an index number.
It is a common practice to declare arrays with the const keyword.


syntax:

const cars=[
  'civic',
  'gli',
  'xli',
  'city',
  'mehran'
]
console.log(cars)                    //will be an array [ 'civic', 'gli', 'xli', 'city', 'mehran' ]
console.log(typeof cars)             //will be object



Or:

const cars=['civic','gli','xli','city','mehran']
console.log(cars)
console.log(typeof cars)











Example:



const students=['raees','aihan','rumman','rahat','rohan','nadir'];
console.log(students);                            //will print the array with identifier students
console.log(typeof students);                     //will be object






can store values with different datatypes:


const values=['raees', 13, true];
console.log(values);
console.log(typeof values);



















Accessing array elements:

You access an array element by referring to the index number:     array indexes start with 0.




const values = [10,20,30,40,50,60,70,80,90]

console.log(values);                // will print the whole array

console.log(values[0]);            // will print the element with index 0 which is 10.



similarly:

console.log(values[0]);        // will print the element with index 0 which is 10.
console.log(values[1]);        // print element with index 1 which is 20.
console.log(values[2]);        //30 as index is 2
console.log(values[3]);        //40
console.log(values[4]);        //50
console.log(values[5]);        //60
console.log(values[6]);        //70
console.log(values[7]);        //80
console.log(values[8]);        //90
console.log(values[9]);        //undefined because the value with index 9 is not present.




Remember: if you entered high index, at which there is no value in the array , it will be undefined.  (as above)























Changing Elements of array :

elements in javascript are changed by using their index number:



const x = [20,50,80];
console.log(x);         // will print the array [20,50,80]

x[0]=10;
console.log(x)          //will print the array [10,50,80] , the element with 0 index is changed


if you add hight index , it will create a new element in the array:

for example:
  
  
  x[3] = 100;
console.log(x);       // at index 3 there was not any element present, so it added a new element at index 3 with value 100



























Adding new elements in the array :

we see that how to add new element in the array:

if you wanna change the element in the array, use its index as:


const x = [1,2,3,4,5];

x[2] = 0 ;   //changing the element with index 2

console.log(x);     //will change the element 3 to 0 and array becomes  [1,2,0,4,5];


but if we wanna add the new element, we have to use the index number next to the last one:


for example : to add a new element , first see the index of last element and than add an element with index number next to it:



const x = [3,4,5,6,7];
console.log(x);       // this will print the array


by counting we found that its index is 4 , so if you wanna add a new element, use index number 5 :

x[5]= 8;
console.log(x)      // will print [3,4,5,6,7,8]




in this way we added element in the array



Warning : if we use high index numbers , it can create indefined holes in the array:

for example:
  
  const x = [9,8,7,6,5];   

this is an array with the index of last element is 4 , and to add a new element in the end of array, we have to use index 5 
but what happens if we add 6 or 7 or greater number, it will create undefined holes as:


x[6] = 4;
console.log(x)   // this will print [ 9, 8, 7, 6, 5, <1 empty item>, 4 ]  at index 5 there is nothing

























length of array:

The length property of an array returns the length of an array (the number of array elements). starts from 1



const y = ['apple', 'mango', 'banana', 'pineapple' , 'grapes']

const arrayLength = y.length;
console.log(arrayLength);      // will print 5 as the number of elements is 5





length can also be use to find the index number of array
as length starts from 1 and index starts from 0


example:

const x = [1,2,3,4,5,6,7,8,9,0,9,8,6,7,65,45,12,34,565,755,7657,33,233,098]

console.log(x.length);          //gives the length which is 24
console.log(x.length -1);       // will give the index number which is 23


The length property is always one more than the highest array index.




























Associative Arrays

Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes. 





WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.


 const person = [];
person["firstName"] = "John";         // incorrect way of adding element in the array  (not added)

person["lastName"] = "Doe";           // incorrect   (not added)

person["age"] = 46;                   // incorrect    (not added)


person.length;     // Will return 0
person[0];         // Will return undefined 





but we can add by using index numbers:



 const person = [];
person[0] = "John"; 
person[1] = "Doe"; 
person[2] = 46;
console.log(person.length);    // will return 3
console.log(person);           // will return array [ 'John', 'Doe', 46 ]
console.log(person[0]);        // will return john

























The Difference Between Arrays and Objects

In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.








When to Use Arrays. When to use Objects.

    JavaScript does not support associative arrays.
    You should use objects when you want the element names to be strings (text).
    You should use arrays when you want the element names to be numbers.
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    let arr = ['raees','wajahat','islam','mughal',20,true,false,[0,12,21],{name:['raees','wajahat','islam','mughal'],age:20}];
    console.log(arr);
    console.log(typeof arr);
    console.log(arr.length)

    let accessing = arr[arr.length-1]['name'][1]
    console.log(typeof accessing);
    arr[arr.length-2][0]=arr[4];
    console.log(arr)
    arr[arr.length-1]=true

























let classMates = ['raees','rehman','sohail','Abubakar','abdulrehman','john','ahsan','mohsin','arslan','fahad',
                  'usama','tayyab','talha','iqrar','waseem','zohaib','umar','bilal','tahoor','doud','aihan',
                  'rumman','talha arshad','ikram','islam','sultan','anwar'];

console.log(classMates[5])
classMates[5]='john alea';                       //changing
console.log(classMates.indexOf('fahad'));        // using indexOf property to get the index of 'fahad'
classMates[classMates.indexOf('fahad')] = 'fahad Imtiaz';  
console.log(classMates[9]);



// creating an array using the index numbers of classMates

let friends = [

  [
    classMates[0],
    classMates[1],
    classMates[2]
  ],

  [
    classMates[classMates.indexOf('Abubakar')],
    classMates[5]
  ],

  [
    classMates[6],
    classMates[7],
    classMates[8],classMates[9]
  ],

  [
    classMates[classMates.length-1],
    classMates[classMates.length-2],
    classMates[classMates.length-3],
    classMates[classMates.length-4]
  ]

]
console.log(friends);



for(let i in friends){
  console.log(i + ' : ' + friends[i])   // for in loop is applied to get indexes and values in friends
}
console.log(typeof friends[0])

for(let i of friends){
  console.log(i)
}



//accessing 'islam';
let islam = friends[3][2];
console.log(islam)
console.log(typeof islam)





















    let food = [];
    food[0] = 'chips';
    food[1] = 'tomato';
    food[2] = 'roti';
    food[3] = 'rice';
    food[4] = 'fish';
    food[5] = 'chicken';
    food[6] = 'beef';
    food[7] = 'matan';

    console.log(food);   


    favourites = [];
    favourites.push(food[5]);      //pushing modifies original array
    favourites.push('karele');        
    favourites.push('daal chawal');  
    console.log(favourites);      


    // pop() also modifies the original string
    let pp = favourites.pop();      // storing poped value in the variable pp
    console.log(favourites);        // 
    console.log(pp);


    favourites.unshift('vegetables');
    console.log(favourites);




    // toString does not modify the original string
    let ms = favourites.toString();    // converting favourites into string and storing in the variable ms 
    console.log(ms);


    favourites.unshift('fruits');    // unshift modifies the original string

    console.log(favourites)


    let sh = favourites.shift()      // shifting and storing the shifted value in the variabel sh

    console.log(favourites);         
    console.log(sh)                 // getting the shifted value




    let joining = favourites.join(' ');    // join method does not modify the original string  
    console.log(joining)                   // getting the variable in which the  favoirites 
                                           // (after converting into string through join() method) is stored
    
    or:

    console.log(favourites.join(' ')) ;
























//The concat() method does not change the existing arrays. It always returns a new array.
    
    let ar1 = [1,2,3,45,5];
    let ar2 = [9,8,7,6,5];
    let ar3 = ['a','b','c','d','e'];
    ar1.concat(ar2,ar3);
    console.log(ar1)        // returns ar1 without concatinating ar2 and ar3

    // but

    console.log(ar1.concat(ar2,ar3));   // this is concatenated

    // or

    let concatenated = ar1.concat(ar2, ar3);
    console.log(concatenated);

    console.log(ar1.concat('z','y','x','w','v','u')); // can also take string as arguments    (taking 6 strings as argumant)

    console.log(ar2.concat([1,2,3,4,5]));            // concatenating ar2 with array [1,2,3,4,5]

    console.log(ar3.concat([12,13,14,15,16],'o','p','q','r'));    // first concenates with array [12,13,14,15,16] , then with strings

    console.log(ar1.concat([[1,2],[3,4],[5,6]]))    // concatenates the ar1 with given array but not the arrays inside the array
                                                    // [ 1, 2, 3, 45, 5, [1,2], [3,4], [5,6]]











   // write code for flattening , splice , slice , sort alphabetically , sort numerically ,reverse












     //     The Fisher Yates Method for shuffle the elements of an array

  
    let myArray = [11,12,13,14,15,16];
    
    function shuffleArray(array){

    for(let i = array.length-1 ; i > 0 ; i--){
      let j = Math.floor(Math.random() * (i+1));
      
      let getting = array[i];
      array[i] = array[j];
      array[j] = getting;

    }
    return array
    }
    let gotShuffle = shuffleArray(myArray);
    console.log(gotShuffle)























// If you want to flatten a nested array but also have a condition to check whether the elements are arrays or other data types,
//you can modify the flattening function to include this condition.
//Here's how you can do it:
// this is (kind of) recursive function.


// to understand this recursive function, simply do it with a nested array of depth 1 , like array inside an array, and focus on recursive call in the if block and concat in the else block

let ar = [
    [1, 2, 3, 4, 5],
    [2, 4, 6, 8, 10],
    [1, 3, 5, 7, 9],
    [0, 1, 2, 3, 4, [5, 6, 7, 8, 9, [10, 11, 12, [0,0,0,0,0,[90,90,90,90,90],0],13, 14]]],
];

let func = (arr) =>{
    return arr.reduce((a,b)=>{
        if(Array.isArray(b)){
            return a.concat(func(b))  
        }else{
            return a.concat(b);
        }
    },[])
};

console.log(func(ar));



// but we can also use flat() method to flatten our array

// The flat() method is a built-in method in JavaScript 
//that allows you to flatten an array to a specified depth.
//However, the flat() method does not provide a built-in way to filter
//or conditionally process elements during flattening. (reffering to the last example as we have the authority to perform some other operation during flattening);

// Here's how you can use flat() to flatten a nested array:


let arr = [
    [1,2,3,4,5],
    ['a','b','c','d'],
    [true,true,true,true],
    [1,1,1,1,1,[2,2,2,2,2,[3,3,3,3,3,[4,4,4,4,4]]]]
];
let ar2 = arr.flat(Infinity);     // this method does not modify the original array;

console.log(arr);
console.log(ar2);






//The flat() method accepts an optional argument that specifies the depth of flattening.
//If no depth is provided or if it's 1, (1 is default),it flattens the array by one level. 
// Using Infinity as the depth will flatten the array recursively to any depth.




