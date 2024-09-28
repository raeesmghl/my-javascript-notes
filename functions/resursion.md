``` javascript
// fictorial
function fictorial(n) {
    if(n<=0){
        return 1;
    }
    return fictorial(n-1) * n;
}
console.log(fictorial(4))

```

``` javascript
// Function to sum all even numbers from 0 to n
function sumEvens(n) {
    if (n <= 0) {  // Base case: if n is 0 or negative, return 0
        return 0; 
    }
    
    // Ensure n is even; if odd, subtract 1 to make it even
    n = n % 2 == 0 ? n : n - 1;
    
    // Recursively sum the even numbers
    return sumEvens(n - 2) + n;
}

console.log(sumEvens(20));  // Output: 110

```

``` javascript
// Function to sum numbers from 1 to n
function sum(n) {
    if (n <= 0) {  // Base case: return 0 if n is 0 or negative
        return 0;
    }
    
    // Recursive call: sum(n-1) + n
    return sum(n - 1) + n;
}

console.log(sum(5));  // Output: 15

```

