function solution(lottos, win_nums) {
    let price = [6, 6, 5, 4, 3, 2, 1];
    let cnt = 0;
    
    lottos = lottos.filter(lotto => lotto > 0);
    for (let i = 0; i < lottos.length; i++) {
        for (let j = 0; j < 6; j++) {
            if (lottos[i] === win_nums[j]) cnt++;
        }
    }
    
    return [price[cnt + 6 - lottos.length], price[cnt]]
}