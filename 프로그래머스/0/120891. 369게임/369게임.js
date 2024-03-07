function solution(order) {
    return order.toString().split("").filter((e) => +e && e % 3 === 0).length;
}