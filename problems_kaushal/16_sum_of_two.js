function sumOfTwo(arr, target){
    let sorted = [...arr].sort((a,b) => a-b);
    let left = 0;
    let right = sorted.length-1;
    let sum = 0;
    while(left <= right){
        sum = sorted[left] + sorted[right];
        if(sum === target) return true;
        else if(sum > target) --right;
        else if(sum < target) ++left;
    }
    return false;
}

let arr = [15, 4, 26, 9, 11, 6];
console.log(sumOfTwo(arr, 15));
