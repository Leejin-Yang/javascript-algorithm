const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [count, probs] = input
const arr = probs.split(' ').map(Number)

const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0)
const multiply = (arr) => arr.reduce((acc, cur) => acc * cur, 1)

function getCalcs(index) {
  const indivisuals = []
  
  const lastIndex = count - 3 + index
  const multis = arr.slice(index, count - 3 + index)
  
  const indivisualIndex = (c) => lastIndex + c >= count ? lastIndex + c - count : lastIndex + c
  
  
  for(let i = 0; i <= 2; i += 1) {
    indivisuals.push(arr[indivisualIndex(i)])
  }
  
  return multiply(multis) + sum(indivisuals)
}

const answer = Math.max(getCalcs(0), getCalcs(1), getCalcs(2), getCalcs(3))

console.log(answer)