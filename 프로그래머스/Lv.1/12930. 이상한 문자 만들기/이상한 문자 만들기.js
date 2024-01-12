function solution(s) {
    s = s.split(' ');
    
    for (let i = 0; i < s.length; i++) {
        let str = '';
        for (let j = 0; j < s[i].length; j++) {
            let ch = s[i][j];
            str += (j % 2 === 0) ? ch.toUpperCase() : ch.toLowerCase();
        }
        s[i] = str;
    }
    
    return s.join(' ');
}