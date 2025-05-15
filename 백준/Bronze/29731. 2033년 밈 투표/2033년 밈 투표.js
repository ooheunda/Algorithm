const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const lines = ['Never gonna give you up', 'Never gonna let you down', 'Never gonna run around and desert you', 'Never gonna make you cry', 'Never gonna say goodbye', 'Never gonna tell a lie and hurt you', 'Never gonna stop'];
const sentences = input.slice(1);

function solution(sentences) {
    const len = sentences.length;
    
    for (let i = 0; i < len; i++) {
        if (!(lines.includes(sentences[i]))) return 'Yes';
    }
    
    return 'No';
}

console.log(solution(sentences));