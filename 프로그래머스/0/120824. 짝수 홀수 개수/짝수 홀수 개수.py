def solution(num_list):
    answer = [0, 0]
    
    for n in num_list:
        is_even = n % 2
        answer[1 if is_even else 0] += 1
        
    return answer