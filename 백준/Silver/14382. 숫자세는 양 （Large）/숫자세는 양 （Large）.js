const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, ...tests] = input
const testCount = Number(env)
const testCases = tests.map(Number)

function getAnswer(N) {
  if (N === 0) return 'INSOMNIA'
  
  let stack = []
  let i = 1
  
  while(1) {
    const currentArr = (N * i).toString().split('')
    stack = [...stack, ...currentArr]
    const set = new Set(stack)
    
    if (set.size === 10) break
    
    i += 1
  }
  
  return N * i
}

testCases.forEach((test, i) => {
  const answer = getAnswer(test)
  console.log(`Case #${i + 1}: ${answer}`)
})
