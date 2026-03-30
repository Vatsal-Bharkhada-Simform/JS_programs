'use strict';

let obj = {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
        goodreads: {
            rating: 4.41,
            ratingsCount: 1733,
            reviewsCount: 63,
            fiveStarRatingCount: 976,
            oneStarRatingCount: 13
        }
    },
    highlighted: true,
    getInfo() {
        return `${this.title} is written by ${this.author.join(" and ")}, published in ${this.publicationDate.slice(0, 4)}.`
    }
};

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
clone.thirdParty.goodreads.rating = 0;
console.log("OBJ:", obj);
console.log("CLONE:", clone);


//------------------------------------------------------------------------------------//


console.log("\n===============================================");
console.log("Looping though objects");
console.log("===============================================");


console.log("\n========= obj.author ==========\n");
console.log(obj.author);
console.log("\n========= obj[\"title\"] ==========\n");
console.log(obj["title"]);
console.log("\n========= obj.getInfo() ==========\n");
console.log(obj.getInfo());


//------------------------------------------------------------------------------------//


console.log("\n===============================================");
console.log("Optional chaining");
console.log("===============================================");

console.log(obj.thirdParty?.goodreads);         //Works
console.log(obj.thirdParty.badReads?.fourStarRatingCount);      //undefined


//------------------------------------------------------------------------------------//


console.log("\n===============================================");
console.log("Looping though objects");
console.log("===============================================");

let a = {
    name: "Vatsal",
    grades: [2, 3, 4],
    info: {
        gender: "male"
    }
}

console.log("\n========= for .. in ==========\n");
for (let key in a) {
    console.log(`${key}: ${obj[key]}`);
}

console.log("\n========= Object.keys() ==========\n");
Object.keys(a).forEach((key) => {
    console.log(key);
})

console.log("\n========= Object.values() ==========\n");
Object.values(a).forEach((value) => {
    console.log(value);
})

console.log("\n========= Object.entries() ==========\n");
Object.entries(a).forEach((entry) => {
    console.log(entry);
})


//------------------------------------------------------------------------------------//


console.log("\n===============================================");
console.log("Conversion of objects");
console.log("===============================================");

let objToArr = {
    name: "John",
    age: 30
};
let arrToObj = Object.entries(objToArr);

console.log("\n========= Object to Array using Object.entries(obj) ==========\n");
console.log("Object: ", objToArr);
console.log("Array: ", Object.entries(objToArr));

console.log("\n========= Array to Object using Object.fromEntries(obj) ==========\n");
console.log("Array: ", arrToObj);
console.log("Object: ", Object.fromEntries(arrToObj));


//------------------------------------------------------------------------------------//

console.log("\n===============================================");
console.log("Configuring Object Properties");
console.log("===============================================");

let obj1 = {
    date: new Date()
}

Object.defineProperty(obj1, "date", {
    writable: false,
    enumerable: false,
    configurable: false,
})

console.log(Object.getOwnPropertyDescriptor(obj1, "date"));


//------------------------------------------------------------------------------------//