const dictionary = Array.from({length: 26}, (_, i) => i + 1).reduce((acc, num, i) => {
   acc[String.fromCharCode('A'.charCodeAt() + i)] = num
    return acc
}, {})

function solution(msg) {
    const answer = []
    let prevSubStr = ''
    let lastNumber = 26
    
    for (const char of msg) {
        const nextStr = prevSubStr + char
        
        if (nextStr in dictionary) {
            prevSubStr = nextStr
            continue
        } else {
            answer.push(dictionary[prevSubStr])
            dictionary[nextStr] = ++lastNumber
            prevSubStr = char
        }
    }
    
    answer.push(dictionary[prevSubStr])
    
    return answer
}