// 2x + 1 = n
// 3x + 1 + 2 = n
// 4x + 1 + 2 + 3 = n
// ...
// i * x = n - i * (i - 1) / 2

function solution(n) {
    let answer = 1
    let i = 2
    
    while ((n - i * (i - 1) / 2) / i >= 1) {
        const multiplied = (n - i * (i - 1) / 2)
        if (multiplied % i === 0) {
            answer += 1
        }
        i += 1
    }
    
    return answer
}