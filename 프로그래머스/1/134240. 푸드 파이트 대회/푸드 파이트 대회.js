function solution(food) {
    let str1 = [];
    let str2 = [];
    
    for (let i = 1; i < food.length; i++) {
        for (let j = 0; j < Math.floor(food[i] / 2); j++) {
            str1.push(i);
            str2.push(i);
        }
    }
    
    str2.sort((a, b) => b - a);
    
    return str1.join('') + '0' + str2.join('');
}