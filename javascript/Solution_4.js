const users = [
    { userId: 1, city: "Ahmedabad", age: 25, gender: "male", modeOfWork: "wfo" },
    { userId: 2, city: "Mumbai", age: 30, gender: "female", modeOfWork: "wfh" },
    { userId: 3, city: "Delhi", age: 28, gender: "male", modeOfWork: "wfh" },
    { userId: 4, city: "Bangalore", age: 35, gender: "female", modeOfWork: "wfo" },
    { userId: 5, city: "Pune", age: 22, gender: "male", modeOfWork: "wfh" },
    { userId: 6, city: "Chennai", age: 40, gender: "female", modeOfWork: "wfo" },
    { userId: 7, city: "Hyderabad", age: 27, gender: "male", modeOfWork: "wfh" },
    { userId: 8, city: "Kolkata", age: 33, gender: "female", modeOfWork: "wfo" },
    { userId: 9, city: "Jaipur", age: 29, gender: "male", modeOfWork: "wfh" },
    { userId: 10, city: "Surat", age: 31, gender: "female", modeOfWork: "wfo" },
    { userId: 11, city: "Ahmedabad", age: 26, gender: "female", modeOfWork: "wfh" },
    { userId: 12, city: "Mumbai", age: 38, gender: "male", modeOfWork: "wfo" },
    { userId: 13, city: "Delhi", age: 24, gender: "female", modeOfWork: "wfh" },
    { userId: 14, city: "Bangalore", age: 36, gender: "male", modeOfWork: "wfo" },
    { userId: 15, city: "Pune", age: 21, gender: "female", modeOfWork: "wfh" }
];

Array.prototype.getStats = function({groupBy, calculateOn}){
    console.log(groupBy);
    let groupedObject = this.reduce((acc, item) => {
        if(acc[item[groupBy]]) {
            let obj = acc[item[groupBy]]; 
            obj.count++;
            obj.minAge = item.age < obj.minAge ? item.age : obj.minAge; 
            obj.maxAge = item.age > obj.maxAge ? item.age : obj.maxAge; 
            obj.avgAge = (obj.avgAge*(obj.count-1) + item.age) / obj.count;
        } else {
            acc[item[groupBy]] = {
                count: 1,
                minAge: item.age,
                maxAge: item.age,
                avgAge: item.age
            }
        }
        return acc;
    }, {});

    return groupedObject;
}

// Extend Array.prototype to calculate min, max, and average of a specific numeric property based on a group.
users.getStats({ groupBy: "modeOfWork", calculateOn: "age" });
/*
Ans: {
    "wfo": { 
        count: 7, 
        minAge: 25, 
        maxAge: 40, 
        avgAge: 34
    },
    "wfh": { 
        count: 8, 
        minAge: 21, 
        maxAge: 30, 
        avgAge: 25.87 
    }
}
*/