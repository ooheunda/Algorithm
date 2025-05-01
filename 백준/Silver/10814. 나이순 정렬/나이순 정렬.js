const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const arr = input.split(`\n`).slice(1);

const sortedArr = arr.sort((a, b) => {
    const [ageA, nameA] = a.split(' ');
    const [ageB, nameB] = b.split(' ');
    
    return +ageA - +ageB;
})

sortedArr.forEach((v) => console.log(v));