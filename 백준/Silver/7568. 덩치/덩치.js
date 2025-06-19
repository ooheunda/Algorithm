const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const len = +input[0];
const people = input.slice(1).map((v, i) => {
    const [w, h] = v.split(' ').map(Number);
    return {w, h};
})

const answers = [];
people.forEach(({w, h}) => {
    let rank = 1;
    for (let i = 0; i < len; i++) {
        const temp = people[i];
        if (temp.w > w && temp.h > h) rank++;
    }
    answers.push(rank);
})
    
console.log(answers.join(' '));