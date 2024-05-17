function solution(keyinput, board) {
    const answer = [0, 0];
    const [maxX, maxY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
    
    for (let i = 0; i < keyinput.length; i++) {
        switch (keyinput[i]) {
            case 'up':
                if (answer[1] < maxY) answer[1]++;
                break;
            case 'down':
                if (answer[1] > -maxY) answer[1]--;
                break;
            case 'right':
                if (answer[0] < maxX) answer[0]++;
                break;
            case 'left':
                if (answer[0] > -maxX) answer[0]--;
                break;
        }
    }
    
    return answer;
}