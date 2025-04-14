function solution(s) {
    const words = s.split(' ');
    const answer = [];
    
    for (let i = 0; i < words.length; i++) {
        let weirdWord = '';
        for (let j = 0; j < words[i].length; j++) {
            const letter = words[i][j];
            weirdWord += j % 2 ? letter.toLowerCase() : letter.toUpperCase();
        }
        
        answer.push(weirdWord);
    }
    
    return answer.join(' ');
}