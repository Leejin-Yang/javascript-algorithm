const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, str] = input
const [N, K] = env.split(' ').map(Number)
const flows = str.split(' ').map(Number)

const answer = flows.reduce((acc, cur) => {
  if (acc.clapAt < cur) {
    acc.count += 1
    acc.clapAt = cur + K
  }
  
  return acc
}, {count: 0, clapAt: 0})

console.log(answer.count)
