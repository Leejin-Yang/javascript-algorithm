function solution(want, number, discount) {
    let answer = 0
    
    const obj = want.reduce((acc, cur, i) => {
        acc[cur] = number[i]
        return acc
    }, {})
    
    for (let i = 0; i <= discount.length - 10; i += 1) {
        const arr = discount.slice(i, i + 10)
        const copied = {...obj}
        arr.forEach((product) => {
            copied[product] -= 1
        })
        const canJoin = Object.values(copied).every((product) => product === 0)
        if (canJoin) {
            answer += 1
        }
    }
    
    return answer
}