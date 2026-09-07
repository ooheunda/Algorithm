def solution(slice, n):
    answer = 1 if n <= slice else (n + slice - 1) // slice
    return answer