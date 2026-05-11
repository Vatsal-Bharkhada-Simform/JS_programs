function processPayment(amount) {
    return `Processing payment of $${amount}`;
}

// Extend Function.prototype to limit execution times
// const safePayment = processPayment.withLimit(3, "Limit exceeded! Try again later.");

Function.prototype.withLimit = function (iterations, message){
    if(iterations < 0) throw new Error("Iterations cannot be negative");
    return (amount) => {
        iterations--;
        if(iterations >= 0){
            return this(amount);
        } else {
            return message;
        }
    }
}

const safePayment = processPayment.withLimit(3, "Limit exceeded! Try again later.");

console.log(safePayment(100)); // "Processing payment of $100"
console.log(safePayment(200)); // "Processing payment of $200"
console.log(safePayment(300)); // "Processing payment of $300"
console.log(safePayment(400)); // "Limit exceeded! Try again later."
console.log(safePayment(500)); // "Limit exceeded! Try again later."