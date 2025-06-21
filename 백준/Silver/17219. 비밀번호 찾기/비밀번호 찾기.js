const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const [n, m] = input[0].split(' ').map(Number);
const passwords = input.slice(1, n + 1).reduce((acc, cur) => {
    const [domain, password] = cur.split(' ');
    acc[domain] = password;
    return acc;
}, {})

const sites = input.slice(n + 1);
const answers = [];
sites.forEach((site) => answers.push(passwords[site]));

console.log(answers.join(`\n`));