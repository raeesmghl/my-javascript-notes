# 1
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
# 2
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

# 3

## sum (1 to n);


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
i asked chatGPT to rewrite this code that has better runtime than my code,

chatGPT suggested me to use this formula : Sum = n(n+1)/2

so function looks like : 
```javascript
function sum(n) {
    return n * (n + 1) / 2;
}
```

### To derive the formula for the sum of the first 𝑛 natural numbers:

#### We can use a clever method, originally attributed to the mathematician Carl Friedrich Gauss.


## Step-by-Step Derivation:

### Write the sum in forward order:

𝑆=1+2+3+⋯+𝑛

### Write the same sum in reverse order:

S=n+(n−1)+(n−2)+⋯+1


### Add both versions of the sum:


Now, add these two equations together, pairing the terms from the forward and reverse sums:

S+S=(1+n)+(2+(n−1))+(3+(n−2))+⋯+(n+1)
Each pair sums to n+1. Since there are n terms, we get:

2S=(n+1)+(n+1)+⋯+(n+1)(a total of n terms)
So:

2S=n(n+1)
Solve for 
𝑆
S:

Finally, divide both sides by 2 to isolate 
𝑆
S:

𝑆
=
𝑛
(
𝑛
+
1
)
2S = n(n+1)/2
​
