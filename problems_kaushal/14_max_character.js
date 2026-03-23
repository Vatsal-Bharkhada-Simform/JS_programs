function getMaxCharacter(str){
    let map = new Map();
    let max = 0, ans = '';

    for(let char of str){
        if(char !== ' ') map.set(char, map.get(char) === undefined ? 0 : map.get(char)+1);
    }
    
    for(let [key, value] of map.entries()){
        if(value > max) {
            max = value;
            ans = key;
        }
    }
    return ans;
}

console.log(getMaxCharacter("Hello, this is the nwe stringi."));