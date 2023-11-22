function solution(queue1, queue2) {
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0)
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0)
    
    if ((sum1 + sum2) % 2 === 1) return -1
    
    const queue = queue1.concat(queue2)
    
    let pointer1 = 0
    let pointer2 = queue1.length
    let answer = 0
    
    for(let i = 0; i < queue1.length * 3; i += 1) {
        if (sum1 === sum2) {
            return answer
        }
        
        if (sum1 > sum2) {
            sum1 -= queue[pointer1]
            sum2 += queue[pointer1]
            pointer1 += 1
        } else {
            sum1 += queue[pointer2]
            sum2 -= queue[pointer2]
            pointer2 += 1
        }
        
        answer += 1
    }
    
    return -1
}