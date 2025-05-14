const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const words = input.slice(1);

const sortedWords = words.sort((a, b) => {
    if (a.length === b.length) return a > b ? 1 : -1;
    return a.length - b.length;
})

const set = new Set(sortedWords);
set.forEach((word) => { console.log(word); });