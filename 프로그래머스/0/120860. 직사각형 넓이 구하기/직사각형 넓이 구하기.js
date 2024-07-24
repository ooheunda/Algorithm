function solution(dots) {
    let width, height;
    
    for (let i = 1; i < dots.length; i++) {
        if (dots[i][0] === dots[0][0]) {
            height = Math.abs(dots[0][1] - dots[i][1]);
        }
        if (dots[i][1] === dots[0][1]) {
            width = Math.abs(dots[0][0] - dots[i][0]);
        }
    }
    
    return width * height;
}