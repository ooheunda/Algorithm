function solution(sizes) {
    let widthMax = 0;
    let heightMax = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        let element = sizes[i];
        if (Math.max(...element) > widthMax) widthMax = Math.max(...element);
        if (Math.min(...element) > heightMax) heightMax = Math.min(...element);
    }
    
    return widthMax * heightMax;
}