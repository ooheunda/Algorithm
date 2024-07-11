function solution(myString, pat) {
    let convertedStr = '';
    
    for (let i = 0; i < myString.length; i++) {
        convertedStr += myString[i] === 'A' ? 'B' : 'A';
    }
    
    return +convertedStr.includes(pat);
}