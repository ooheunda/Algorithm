const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const idx = +input % 3 ? +input % 3 - 1 : 2;

console.log(['U', 'O', 'S'][idx]);