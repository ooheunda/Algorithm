function solution(a, b) {
    let dayArr = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    
    let day = b;
    for (let i = 1; i < a; i++) {
        if (i === 2) {
            day += 29;
        } else if (i < 8) {
            day += i % 2 === 0 ? 30 : 31;
        } else {
            day += i % 2 === 0 ? 31 : 30;
        }
    }
    
    return dayArr[day % 7];
}