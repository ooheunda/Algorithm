function solution(spell, dic) {
    for (let i = 0; i < dic.length; i++) {
        const word = dic[i];
        const temp = [];
        
        for (let j = 0; j < word.length; j++) {
            temp.push(spell.indexOf(word[j]));
        }
        
        if (temp.length === spell.length) {
            temp.sort((a, b) => a - b);
            if (temp[0] === 0 && temp.pop() === spell.length - 1) return 1;
        }
    }
    
    return 2;
}