let str = "Hello"

function reverseString(str){
    let ans = "";
    for(let char of str){
        ans = char + ans;
    }
    return ans;
}

console.log(reverseString(str));