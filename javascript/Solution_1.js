const nestedArray = [1, [2, [3, 4], 5], 6];
// Extend Array.prototype to implement a flatIterator method


Array.prototype.flatIterator = function(){
    let flatten = [];

    // Flatten the array
    this.forEach((item) => {
        if(Array.isArray(item)){
            flatten.push(...deepFlat(item));
        } else {
            flatten.push(item);
        }
    });

    // Use generator to create custom iterator
    let i = 0;
    let it = (function*(){
        while(i < flatten.length){
            yield flatten[i++];
        }
    })();

    return () => it.next().value ?? null;
}

const getNext = nestedArray.flatIterator();
console.log(getNext()); // 1
console.log(getNext()); // 2
console.log(getNext()); // 3
console.log(getNext()); // 4
console.log(getNext()); // 5
console.log(getNext()); // 6
console.log(getNext()); // null
console.log(getNext()); // null