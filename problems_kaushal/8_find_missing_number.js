function findMissingNumber(arr){
    return ((arr.length)*(arr.length+1))/2 - arr.reduce((sum, number) => sum += number, 0)
}

console.log(findMissingNumber([0,1,3,4]));