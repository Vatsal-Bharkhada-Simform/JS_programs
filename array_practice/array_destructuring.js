import books from "./starter_data.js";

const [firstBook, secondBook] = books;

const [ , , thirdBook] = books;

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

const [[,rating], [,ratingsCount]] = ratings;

// console.log(rating, ratingsCount);

// console.log(thirdBook);