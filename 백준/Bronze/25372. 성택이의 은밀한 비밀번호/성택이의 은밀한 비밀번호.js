const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const passwords = input.slice(1);
passwords.forEach((password) => {
    const len = password.length;
    if (len >= 6 && len <= 9) console.log('yes');
    else console.log('no');
})