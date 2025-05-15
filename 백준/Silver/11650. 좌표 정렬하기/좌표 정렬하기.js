const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const dots = input.map((v) => v.split(' ')).slice(1);

const sortedDots = dots.sort((a, b) => {
    if (a[0] === b[0]) return +a[1] > +b[1] ? 1 : -1;
    return +a[0] > +b[0] ? 1 : -1;
})

sortedDots.forEach((v) => console.log(v.join(' ')));