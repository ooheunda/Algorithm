const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const battles = input.slice(1);
const gandalfPower = [1, 2, 3, 3, 4, 10];
const sauronPower = [1, 2, 2, 2, 3, 5, 10];

function solution(gandalfs, saurons) {
    let gandalf = 0;
    let sauron = 0;
    
    gandalfs.forEach((v, i) => {
        gandalf += v * gandalfPower[i];
    })
    saurons.forEach((v, i) => {
        sauron += v * sauronPower[i];
    })
    
    if (gandalf === sauron) return 'No victor on this battle field';
    return gandalf > sauron ? 'Good triumphs over Evil' : 'Evil eradicates all trace of Good';
}

let battleCnt = 1;
battles.forEach((battle, i) => {
    if (i % 2) {
        const gandalfs = battles[i - 1].split(' ').map((v) => +v);
        const saurons = battles[i].split(' ').map((v) => +v);
        console.log(`Battle ${battleCnt}: ${solution(gandalfs, saurons)}`);
        battleCnt++;
    }
})