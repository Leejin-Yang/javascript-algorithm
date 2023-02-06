function getNumCount(number) {
    const numCounts = Array(10).fill(0)
    for (const num of number) {
        numCounts[Number(num)]++
    }
    return numCounts
}

function solution(X, Y) {
    const numCountX = getNumCount(X)
    const numCountY = getNumCount(Y)
    let answer = ''
    
    numCountX.forEach((num, i) => {
        if (num === 0) return
        if (numCountY[i] === 0) return
        const targetCount = Math.min(num, numCountY[i])
        answer += (i + '').repeat(targetCount)
    })
    
    if (!answer) return '-1'
    if (Number(answer) === 0) return "0"
    
    return answer.split('').reverse().join('')
}