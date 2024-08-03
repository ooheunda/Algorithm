function solution(name, yearning, photo) {
    const scoreObj = {};
    name.forEach((elem, idx) => {
        scoreObj[elem] = yearning[idx];
    })
    
    return photo.map((pic) => {
        let sum = 0;
        pic.forEach((person) => {
            sum += scoreObj[person] || 0;
        })
        return sum;
    })
}