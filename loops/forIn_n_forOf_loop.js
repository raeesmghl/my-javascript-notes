


// iterating the keys and values of object using (for loop)
let obj = {
    name : 'raees',
    age:20,
    class: 'nothing',
    religion: 'Islam (Alhamdulillah)',
    isFasting : true,
  }
  
  for(let i = 0 ; i < Object.keys(obj).length ; i++){
    console.log(Object.keys(obj)[i] + ' : ' + obj[Object.keys(obj)[i]])
  }
  
  
  
  
  
  // iterating using (for in loop)
  
  
  for(let i in obj){
    console.log(i + ' : ' + obj[i])
  }
  
  
  
  
  
  
  
//   iterating array elements with index number using for loop;

let array = ['m','u','g','h','a','l'];
for(let i = 0 ; i<array.length;i++){
  console.log(i + ' : '+ array[i])
}




// iterating using (for in loop)


for(let i in array){
    console.log(i + ' : ' + array[i])
}






// iterating string elements with index number

let myString = 'hello world';

for(let i = 0; i < myString.length ; i++){
    console.log( i + ' : ' + myString[i])
}



// doing same using for in loop;


for(let i in myString){
    console.log(i +' : '+ myString[i])
}







// for of loop  (used only for iterables like array,string);


//iterating elements of array;

let numbers = [1,2,3,4,5,6,7,8,9];

for(let i of numbers){
    console.log(i)
}





// iterating the letters of a string;
let string = 'this is a nice string';
for(let i of(string)){
  console.log(i)
}