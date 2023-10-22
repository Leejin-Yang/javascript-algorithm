function solution(numbers) {
    const answerSet = new Set()
    
    for (let i = 0; i < numbers.length; i += 1) {
        const first = numbers[i]
        
        for (let j = i + 1; j < numbers.length; j += 1) {
            const second = numbers[j]
            
            answerSet.add(first + second)
        }
    }
    
    return [...answerSet].sort((a, b) => a - b)
}