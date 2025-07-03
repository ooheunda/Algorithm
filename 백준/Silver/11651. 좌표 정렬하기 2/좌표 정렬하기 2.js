const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const dots = input.slice(1).map((dot) => dot.split(' ').map(Number));
const sortedDots = dots.sort(([x1, y1], [x2, y2]) => {
    if (y1 === y2) return x1 > x2 ? 1 : -1;
    if (y1 > y2) return 1;
    return -1;
})

console.log(sortedDots.map((dot) => dot.join(' ')).join(`\n`));