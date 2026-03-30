// 
let obj1 = {
    name: "Vatsal",
    age: 11,
    toJSON(){
        return {name: this.name}
    }
}

let str = JSON.stringify(obj1);

console.log(str);

let obj2 = JSON.parse(str);

console.log(obj2);

let d = new Date();
console.log(Date.now());