function checkAnagrams(str1, str2){
    return str1.trim().length === str2.trim().length && (str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join(''));
}

console.log(checkAnagrams(" Hello", "leHlo"));