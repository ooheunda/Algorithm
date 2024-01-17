function solution(food) {
    let str = [];
    
    for (let i = 1; i < food.length; i++) {
        for (let j = 0; j < Math.floor(food[i] / 2); j++) {
            str.push(i);
        }
    }
    
    return str.join('') + '0' + str.reverse().join('');
}