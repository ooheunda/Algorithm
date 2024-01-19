function solution(cards1, cards2, goal) {
    let length = goal.length;
    for (let i = 0; i < length; i++) {
      if (goal[0] === cards1[0]) {
          cards1.shift();
          goal.shift();
      } else if (goal[0] === cards2[0]) {
          cards2.shift();
          goal.shift();
      }
    }
    
    return !goal[0] ? "Yes" : "No";
}