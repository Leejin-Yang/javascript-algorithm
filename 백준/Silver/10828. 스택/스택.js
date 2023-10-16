const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [length, ...actions] = input

const stack = []
const answer = []

actions.forEach((action) => {
  const isEmpty = stack.length === 0
  
  if (action === 'pop') {
    const last = stack.pop()
    isEmpty ? answer.push(-1) : answer.push(last) 
    return
  }
  
  if (action === 'top') {
    const last = stack[stack.length - 1]
    isEmpty ? answer.push(-1) : answer.push(last) 
    return
  }
  
  if (action === 'size') {
    answer.push(stack.length)
    return
  }
  
  if (action === 'empty') {
    isEmpty ? answer.push(1) : answer.push(0)
    return
  }
  
  if (action.includes('push')) {
    const [_, value] = action.split(' ')
    stack.push(Number(value))
    return
  }
  
  answer.push(-1)
})

console.log(answer.join('\n'))