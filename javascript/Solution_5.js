const config = {
    db: { host: "localhost", port: 5432 },
    app: { retries: 3, timeout: 5000, features: { logs: true, metrics: false } }
};
// Implement a utility to flatten the object using a custom delimiterconfig.flatten(":");
/*
Ans: {
    "db:host": "localhost",
    "db:port": 5432,
    "app:retries": 3,
    "app:timeout": 5000,
    "app:features:logs": true,
    "app:features:metrics": false
}
*/

function generateFlattenedObject(obj, prefix= ""){
    if(typeof obj !== "object") return {};
    let res = {};
    Object.entries(obj).forEach(([key, value]) => {
        if(typeof value === "object") res = {...res, ...generateFlattenedObject(value, prefix+key+":")};
        else res[prefix+key] = value;
    });

    return res;
}

console.log(generateFlattenedObject(config));