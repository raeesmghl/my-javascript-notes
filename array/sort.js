// read basics on w3schools  (sort, tosorted, toreversed, reverse ,...etc);


// here we are talking about sort method's compare function:

let marks = [56,87,90,99,100,56,90,78,45,33];

let func = (arr) =>{
    return arr.sort();
};
let func2 = (arr) =>{
    return arr.sort((a,b)=>a-b);
}


// func() will sort the array alphabetically (in which 100 is smaller than 33 (lol));
// func2() applys a sort function to array and also uses a function as argument called comparison function'
// see how this function works : 



// suppose the array was [4, 2, 5, 1, 3];


// Comparing 4 and 2:
// a = 4, b = 2
// Calculation: a - b = 4 - 2 = 2
// Since the result is positive, b (2) should come before a (4).
// Output after this step: [2, 4, 5, 1, 3]
// Comparing 4 and 5:
// a = 4, b = 5
// Calculation: a - b = 4 - 5 = -1
// Since the result is negative, a (4) should come before b (5).
// Output after this step: [2, 4, 5, 1, 3] (No change)
// Comparing 4 and 1:
// a = 4, b = 1
// Calculation: a - b = 4 - 1 = 3
// Since the result is positive, b (1) should come before a (4).
// Output after this step: [2, 1, 4, 5, 3]
// Comparing 4 and 3:
// a = 4, b = 3
// Calculation: a - b = 4 - 3 = 1
// Since the result is positive, b (3) should come before a (4).
// Output after this step: [2, 1, 3, 4, 5]
// Comparing 2 and 1:
// a = 2, b = 1
// Calculation: a - b = 2 - 1 = 1
// Since the result is positive, b (1) should come before a (2).
// Output after this step: [1, 2, 3, 4, 5]
// Comparing 5 and 3:
// a = 5, b = 3
// Calculation: a - b = 5 - 3 = 2
// Since the result is positive, b (3) should come before a (5).
// Output after this step: [1, 2, 3, 4, 5] (No change)



