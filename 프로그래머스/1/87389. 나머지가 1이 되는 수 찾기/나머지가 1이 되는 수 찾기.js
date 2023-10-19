function solution(n) {
    let answer = 2
    
    for(let i = 2; i < n; i += 1) {
        if (n % i === 1) {
            answer = i
            break
        }
    }
    
    return answer
}