    let str = 'the quick brown fox jumps over the lazy dog';    // this is the string
    let arr = str.split(' ');                                   // converting into array
    let newArray = []                              
    for(let i=0;i<arr.length;i++){
      let bb = arr[i][0].toUpperCase();
      newArray.push(bb)
    }
console.log(newArray);                       // will give an array of first letter of all the elemets of arr
let b = [];
for(let j = 0 ; j < arr.length ; j++){
  b.push(arr[j].slice(1));
}
console.log(b);                              // will give all elements of array after removing the first letter of all elements
let finalArray = []
for(let k = 0 ;k < arr.length; k++){
  let final = newArray[k].concat(b[k]);
  finalArray.push(final);
}
console.log(finalArray);                    // gives the array of string elements with first letter capital of all the elements
console.log(finalArray.join(' '))           // converts it into string













// can also be done simply :



    let str = 'the quick brown fox jumps over the lazy dog';
    let arr = str.split(' ');
    let newa = []
    for(let i = 0 ; i < arr.length ; i++){
      newa.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }
    console.log(newa.join(' '));
    
    
    
    
    
    
    
    
    
    
    
    
    
    //using function
   
   
   
   
   
       let str = 'this is a string';

    let changing =(string)=>{
      let arr = string.split(' ');
      for(let i = 0 ; i < arr.length ; i++){
        arr[i] = arr[i][0].toUpperCase()+ arr[i].slice(1);
      }
      return arr.join(' ')
    };
    console.log(str)
    console.log(changing(str))
    
    
    
