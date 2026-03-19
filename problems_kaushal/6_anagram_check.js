function checkAnagrams(str1, str2){
    return (str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join(''));
}

console.log(checkAnagrams("Hello", "leHlo"));