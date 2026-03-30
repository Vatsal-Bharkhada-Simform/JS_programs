//Rest

function add(a, ...args){
    console.log(args[args.length-1]);
    return args.reduce((sum, item) => {return sum += item}, 0);
}

// console.log(add(1,2,3,4,5));

//Spread 

let arr = [1,2,3];

console.log(add(...arr));

let arr2 = [...arr, 4,5];

let arr3 = [...arr, ...arr2];

console.log("Arr-2:", arr2);
console.log("Arr-3:", arr3);



const original = { a: 1, b: { c: 2 } };
const copy = { ...original };

copy.b.c = 99;

copy.b = {e: 5};

console.log(original);
console.log(copy);


const user = { name: 'Alex', role: 'User' };
const admin = { ...user, role: 'Admin' };

console.log(admin.role);


let mappa = new Map();
mappa.set(1, "Hii");

mappa.entries().forEach(([key, vlaue]) => {
    console.log(key, vlaue);
})
