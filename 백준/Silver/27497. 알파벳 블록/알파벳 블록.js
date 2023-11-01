const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 1: 맨 뒤에 추가
// 2: 맨 앞에 추가
// 3: 마지막 추가 블록 제거

const flows = input.slice(1, input.length)

const lastCount = []
let firstIndex = 1
let lastIndex = 0
const answerMap = new Map()

flows.forEach((flow, i) => {
  if (flow === '3') {
    if (answerMap.size === 0) {
      return
    } else {
      answerMap.delete(lastCount[lastCount.length - 1])
      lastCount.pop()
    }
    
    return
  }
  
  const actionFlow = flow.split(' ')
  
  if (actionFlow[0] === '1') {
    answerMap.set(i, {value: actionFlow[1], index: firstIndex} )
    firstIndex += 1
    lastCount.push(i)
  } else if (actionFlow[0] === '2') {
    answerMap.set(i, {value: actionFlow[1], index: lastIndex})
    lastIndex -= 1
    lastCount.push(i)
  }
  
})

const arr = Array.from(answerMap)
const str = arr.sort((a, b) => a[1].index - b[1].index).map((el) => el[1].value).join('')
const answer = str.length !== 0 ? str : 0

console.log(answer)
