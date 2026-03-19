function caesarCipher(str, shiftPos){
    return str.slice(str.length-(shiftPos%str.length)) + str.slice(0, str.length-(shiftPos%str.length));
}

console.log(caesarCipher("Hello", 9));