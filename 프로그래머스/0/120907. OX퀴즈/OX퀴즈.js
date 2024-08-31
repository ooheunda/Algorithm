function solution(quizzes) {
    const answer = [];
    
    quizzes.forEach((quiz) => {
        const [x, operator, y, is, z] = quiz.split(' ');
        if (operator === '+') {
            answer.push(+x + +y === +z ? 'O' : 'X');
        } else {
            answer.push(+x - +y === +z ? 'O' : 'X');
        }
    })

    return answer;
}