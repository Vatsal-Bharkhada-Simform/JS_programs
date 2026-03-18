function generateFactorial(num){
    if(num <= 1) return (num < 0 ? 0n : BigInt(num));
    return BigInt(BigInt(num) * generateFactorial(num-1));
}

console.log(generateFactorial(50));