function solution(intStrs, k, s, l) {
    return intStrs.reduce((acc, cur) => {
        let convertedInt = +(cur.slice(s, s + l));
        return convertedInt > k ? [...acc, convertedInt] : acc;
    }, []);
}