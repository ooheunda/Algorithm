function solution(s) {
    let numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    numArr.reduce((_, cur, idx) => {
        s = s.replace(cur, idx).replace(cur, idx);
    }, 0)
    
    return +s;
}