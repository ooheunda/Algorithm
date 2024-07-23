function solution(code) {
    let ret = '';
    let mode = 0;
    
    for (let i = 0; i < code.length; i++) {
        if (code[i] === '1') {
            mode = mode ? 0 : 1;
        } else {
            ret += mode && i % 2 ? code[i] : !mode && !(i % 2) ? code[i] : '';
        }
    }
    
    return ret.length ? ret : 'EMPTY';
}