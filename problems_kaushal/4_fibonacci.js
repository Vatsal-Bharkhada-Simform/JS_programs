function getNthFibbonaciElement(n){
    if(n <= 1) return n;
    let a = 0;
    let b = 1;
    let sum = 0;
    while(n-- != 2){
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum;
}

console.log(getNthFibbonaciElement(9));