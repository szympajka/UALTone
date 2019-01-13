const fs = require('fs');
const { words } = require('../words');

let num = 0;
let max = 0;

const popularity = {};

for (let i = 0; i < words.length; i += 1) {
  const digitSum = i.toString().split('').map(Number).reduce((a, b) => (a + b), 0);

  if (!popularity[digitSum]) {
    popularity[digitSum] = 0;
  }

  popularity[digitSum] += 1;

  if (digitSum > max) {
    num = i;
    max = digitSum;
  }
}

const greatest = Number(Object.keys(popularity).reduce((a, b) => (popularity[a] > popularity[b] ? a : b)));

fs.writeFile('words_stats.js', `module.exports = ${JSON.stringify({
  max, num, popularity, greatest,
})}`, (err) => {
  if (err) return console.log(err);
  console.log('Success');
});
