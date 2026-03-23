function countVowels(str){
    return str.toLowerCase().split('').reduce((count, char) => {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') count++;
        return count;
    }, 0);
}

console.log(countVowels("Hello, this is a string with multiple words and vowels."));