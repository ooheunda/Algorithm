function solution(score) {
    score = score.map((s) => ((s[0] + s[1]) / 2));
    let sortedScore = [...score].sort((a, b) => b - a);
    return score.map((s) => sortedScore.indexOf(s) + 1);
}