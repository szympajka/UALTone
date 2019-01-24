const fs = require('fs');
const lodash = require('lodash');
const { words } = require('../words');

const data = lodash.map(lodash.take(words, 1000), (p, i) => i.toString().split('').map(Number).reduce((a, b) => (a + b), 0));

console.log('data', data);

fs.writeFile('words_stats2.js', lodash.map(data, d => `${d}\n`), () => {});


// let num = 0;
// let max = 0;

// const popularity = {};

// for (let i = 0; i < words.length; i += 1) {
//   const digitSum = i.toString().split('').map(Number).reduce((a, b) => (a + b), 0);

//   if (!popularity[digitSum]) {
//     popularity[digitSum] = 0;
//   }

//   popularity[digitSum] += 1;

//   if (digitSum > max) {
//     num = i;
//     max = digitSum;
//   }
// }

// const greatest = Number(Object.keys(popularity).reduce((a, b) => (popularity[a] > popularity[b] ? a : b)));

// fs.writeFile('words_stats2.js', `module.exports = ${JSON.stringify({
//   max, num, popularity, greatest,
// })}`, (err) => {
//   if (err) return console.log(err);
//   console.log('Success');
// });
