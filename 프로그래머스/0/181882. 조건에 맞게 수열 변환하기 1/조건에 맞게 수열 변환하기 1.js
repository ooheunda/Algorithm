function solution(arr) {
    return arr.map((elem) => {
        if (elem >= 50 && !(elem % 2)) return elem / 2;
        if (elem < 50 && elem % 2) return elem * 2;
        return elem;
    })
}