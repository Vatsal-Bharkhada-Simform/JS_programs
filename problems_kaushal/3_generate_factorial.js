function generateFactorial(num){

    // Recursive solution (Not recommended)
    
    // if(num <= 1) return (num < 0 ? 0n : BigInt(num));
    // return BigInt(BigInt(num) * generateFactorial(num-1));

    // Iterative solution
    let ans = BigInt(1);
    for(let i = 1n ; i <= BigInt(num) ; i++) ans *= i;
    return ans;
}

console.log(generateFactorial(5));