const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

function solution(orgStr) {
    let newStr = '';
    
    for (let i = 0; i < orgStr.length; i++) {
        const upperCase = orgStr[i].toUpperCase();
        if (orgStr[i] === upperCase) {
            newStr += orgStr[i].toLowerCase();
        } else {
            newStr += upperCase;
        }
    }
    
    return newStr;
}

console.log(solution(input));