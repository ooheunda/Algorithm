function solution(keyinput, board) {
    const answer = [0, 0];
    const [maxX, maxY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
    
    for (let i = 0; i < keyinput.length; i++) {
        if (['up', 'down'].includes(keyinput[i])) {
            answer[1] += keyinput[i] === 'up' ? 1 : -1;
            if (answer[1] > maxY || answer[1] < -maxY) {
                answer[1] = answer[1] > 0 ? maxY : -maxY;
            }
        } else {
            answer[0] += keyinput[i] === 'right' ? 1 : -1;
            if (answer[0] > maxX || answer[0] < -maxX) {
                answer[0] = answer[0] > 0 ? maxX : -maxX;
            }
        }
    }
    
    return answer;
}