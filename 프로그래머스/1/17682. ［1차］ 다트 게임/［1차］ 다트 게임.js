const calc = {
    S: (number) => Math.pow(number, 1),
    D: (number) => Math.pow(number, 2),
    T: (number) => Math.pow(number, 3)
}

function solution(dartResult) {
    const answer = new Map()
    answer.set(1, 0)
    answer.set(2, 0)
    answer.set(3, 0)
    let index = 0
    let isPrevNumber = false
    
    for (const char of dartResult) {
        if (!isNaN(char)) {
            if (isPrevNumber) {
                answer.set(index, Number(answer.get(index) + '' + char) )
            } else {
                answer.set(++index, answer.get(index) + Number(char))
            }
            isPrevNumber = true
            continue
        }
        
        if (char in calc) {
            answer.set(index, calc[char](answer.get(index)))
        }
        
        if (char === '#') {
            answer.set(index, answer.get(index) * -1)
        }
        
        if (char === '*') {
            for (let i = index; i > index - 2; i -= 1) {
                if (i === 0) break
                answer.set(i, answer.get(i) * 2)
            }
        }
        
        isPrevNumber = false
    }
    
    return [...answer].map((a) => a[1]).reduce((acc, cur) => acc + cur, 0)
}