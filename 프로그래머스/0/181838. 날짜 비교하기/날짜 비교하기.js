function solution(date1, date2) {
    for (let i = 0; i < date1.length; i++) {
        if (date1[i] > date2[i]) return 0;
        if (date1[i] < date2[i]) return 1;
    }
    
    return 0;
}