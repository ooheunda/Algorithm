function solution(nums) {
    let answer = 0;
    
    for (let x = 0; x < nums.length - 2; x++) {
        for (let y = x + 1; y < nums.length - 1; y++) {
            for (let z = y + 1; z < nums.length; z++) {
                let num = nums[x] + nums[y] + nums[z];
                let isPrime = true;
                
                for (let i = 2; i < num; i++) {
                    if (num % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
                
                if (isPrime) answer++;
            }
        }
    }
        
    return answer;
}