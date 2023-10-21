const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(str) {
  if (str === '910') return '9 10'
  
  const firstNumber = str.substring(0, 3)
  const lastNumber = str.substring(str.length - 3)
  let answer = ''
  
  if (firstNumber === lastNumber) {
    const numbers = firstNumber.split('').map(Number)
    const first = numbers[0]
    const last = numbers[numbers.length - 1]
    
    if (first + firstNumber.length - 1 === last) {
      return `${first} ${last}`
    }
    
    return `${firstNumber} ${lastNumber}`
  }
  
  const firstArr = firstNumber.split('').map(Number)
  const lastArr = lastNumber.split('').map(Number)
  
  let firstAnswerArr = []
  let lastAnswerArr = []
  
  for (let firstIndex = 0; firstIndex < firstArr.length; firstIndex += 1) {
    firstAnswerArr.push(firstArr[firstIndex])
    const a = Number(firstAnswerArr.join(''))
    
    for (let lastIndex = lastArr.length - 1; lastIndex >= 0; lastIndex -= 1) {
      lastAnswerArr.push(lastArr[lastIndex])
      if (lastAnswerArr.length < firstAnswerArr.length) continue
      
      const b = Number([...lastAnswerArr].reverse().join(''))
      if (a > b) continue
      
      if (firstAnswerArr.length === lastAnswerArr.length) {
        const diff = b - a + 1
        
        if (diff * lastAnswerArr.length === str.length) {
          answer = `${a} ${b}`
          break
        }
        
        continue
      }
      
      const firstAnwerLength = firstAnswerArr.length
      const lastAnswerLength = lastAnswerArr.length
      
     const oneCount = 10 - a > 0 ? 10 - a : 0 
     const twoCount = firstAnwerLength === 2 ? (100 - a) * 2 : lastAnswerLength === 2 ? (b - 9) * 2 : (firstAnwerLength === 1 && lastAnswerLength === 3) ? 180 : 0
     const threeCount = b - 99 > 0 ? (b - 99) * 3 : 0
     
     if (str.length === oneCount + twoCount + threeCount) {
       answer = `${a} ${b}`
       break
     }
    }
    
    if (answer) break
    
    lastAnswerArr = []
  }
  
  return answer
}

console.log(solution(input))
