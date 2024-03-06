function solution(my_string) {
    return my_string.replaceAll(/[^0-9]/g, "").split("").map((elem) => +elem).sort((a, b) => a - b);
}