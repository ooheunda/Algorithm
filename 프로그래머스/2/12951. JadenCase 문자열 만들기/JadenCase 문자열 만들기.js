function solution(s) {
    return s.split(' ').map((elem) => {
        if (elem.length > 1)
            return elem[0].toUpperCase() + elem.slice(1).toLowerCase();
        
        return elem.toUpperCase();
    }).join(' ');
}