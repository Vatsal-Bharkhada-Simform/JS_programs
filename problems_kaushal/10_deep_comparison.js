function deepCompare(obj1, obj2) {
    if (!obj1 || !obj2 || typeof obj1 !== 'object' || typeof obj2 !== 'object') return obj1 === obj2;
    else if (typeof obj1 === 'function') return true;
    else if (typeof obj1 !== 'object') return (obj1 === obj2);
    else if (obj1 instanceof Map && !deepCompare([...obj1.entries()], [...obj2.entries()])) return false;
    else if (obj1 instanceof Set && !deepCompare([...obj1.keys()], [...obj2.keys()])) return false;
    else if (obj1 instanceof Date && (obj1.getTime() !== obj2.getTime())) return false;
    else if (Array.isArray(obj1) && Array.isArray(obj2)){
        if(obj1.length !== obj2.length) return false;
        for(let i = 0 ; i < obj1.length ; i++) if(!deepCompare(obj1[i], obj2[i])) return false;
    }
    else if (typeof obj1 === 'object') {
        if(!deepCompare([...Object.keys(obj1)], [...Object.keys(obj2)])) return false;
        for(let key of Object.keys(obj1)) if(!deepCompare(obj1[key], obj2[key])) return false;
    }
    return true;
}


let obj = {
    title: 'Algorithms',
    author: new Set([['Robert Sedgewick', 'Kevin Wayne']]),
    publisher: 'Addison-Wesley Professional',
    publicationDate: new Date('2011-03-24'),
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

let obj2 = {
    title: 'Algorithms',
    author: new Set([['Robert Sedgewick', 'Kevin Wayne']]),
    publisher: 'Addison-Wesley Professional',
    publicationDate: new Date('2011-03-24'),
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
    // abc: "def",
    getInfo() {
        return `${this.title} is written by ${this.author.join(" and ")}, published in ${this.publicationDate.slice(0, 4)}.`
    }
};

console.log(deepCompare(obj, obj2));
// console.log(deepCompare(5, 5));