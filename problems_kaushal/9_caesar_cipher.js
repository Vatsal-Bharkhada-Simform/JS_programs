function caesarCipher(str, shiftPos){
    return str.split('').map(char => shiftChar(char, shiftPos)).join('');
}

function shiftChar(char, shiftPos){
    let charCode = char.charCodeAt();
    if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
        let charBase = charCode >= 97 ? 97 : 65;
        charCode = charCode - charBase;
        charCode += shiftPos;
        charCode = charCode > 26 ? (charCode % 26) : charCode;
        char = String.fromCharCode(charBase+charCode);
    }
    return char;
}

console.log(caesarCipher("This code should be ciphered.", 5));