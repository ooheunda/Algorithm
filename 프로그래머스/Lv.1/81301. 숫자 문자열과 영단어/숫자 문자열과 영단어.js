function solution(s) {
    let numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    numArr.reduce((_, cur, idx) => {
        const regex = new RegExp(cur, 'g');
        s = s.replace(regex, idx);
    }, 0)
    
    return +s;
}