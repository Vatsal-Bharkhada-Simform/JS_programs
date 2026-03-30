const GITHUB_API = 'https://api.github.com/users/vatsal2054'

const user = fetch(GITHUB_API);

console.log("Start");

user.then((result) => {
    console.log("Got Result");
});

setTimeout(() => {
    console.log("Timeout");
}, 80);

console.log("End");