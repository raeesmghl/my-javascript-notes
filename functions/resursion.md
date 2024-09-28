// fictorial
function fictorial(n) {
    if(n<=0){
        return 1;
    }
    return fictorial(n-1) * n;
}
console.log(fictorial(4))
