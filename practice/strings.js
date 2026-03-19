let str = "💙hi";
//Unicode safe
for(let char of str) console.log(char);

//Not unicode safe
for(let i = 0 ; i < str.length ; i++) console.log(str[i]);