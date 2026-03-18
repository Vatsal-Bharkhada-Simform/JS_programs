function checkPalindrome(str){
    let front = 0;
    let back = str.length-1;
    while(front < back){
        if(!isValid(str[front])) ++front;
        else if(!isValid(str[back])) --back;
        else if(str[front++].toLowerCase() !== str[back--].toLowerCase()) return false;
    }
    return true;
}

function isValid(char){
    return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z") || (char >= "0" && char <= "9");
}

console.time("Execution time")
console.log(checkPalindrome("A man, a plan, a canal: Panama"));
console.timeEnd("Execution time")
