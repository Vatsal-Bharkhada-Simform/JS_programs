function arrayChunker(arr, size) {
    let chunk = [];
    let ans = [];
    arr.forEach(item => {
        if(chunk.length < size) chunk.push(item);
        if (chunk.length === size) {
            ans.push([...chunk]);
            chunk.length = 0;
        } 
    })
    return ans;
}

function arrayChunker2(arr, size){
    let index = 0;
    let ans = [];
    while(index < arr.length){
        ans.push(arr.slice(index, index+size));
        index += size;
    }
    return ans;
}

let test_arr = [1, 2, 3, 4, 5, 6];

console.log(arrayChunker(test_arr, 2));