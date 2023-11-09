function solution(n, t, m, p) {
    let answer = ''
    const arr = Array.from({length: 1000 * m}, (_, i) => i).flatMap((num) => num.toString(n).split(''))
    for (let i = p - 1; i < t * m; i += m) {
        answer += arr[i]
    }
    return answer.toUpperCase()   
}