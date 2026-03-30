function capitalizeWords(str){
    return str.split(" ").map(word => word.length > 0 ? word[0].toUpperCase() + word.slice(1) : "").join(" ");
}

console.log(capitalizeWords("this is a  string  with no capital letters."));