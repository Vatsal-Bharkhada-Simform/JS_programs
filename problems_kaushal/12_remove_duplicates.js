function removeDuplicates(arr){
    let map = new Map();
    let newArr = [];
    arr.forEach(item => {
        if(!map.get(item)){
            newArr.push(item);
            map.set(item, 1);
        }
    })
    return newArr;
}

function removeDuplicates2(arr){
    let set = new Set();
    arr.forEach(item => set.add(item))
    return Array.from(set);
}

console.log(removeDuplicates2([1,1,2,1,3,5,4]));