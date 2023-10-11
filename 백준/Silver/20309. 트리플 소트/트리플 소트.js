const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const length = input[0]
const arr = input[1].split(' ').map(Number)

const boo = arr.every((num, i) => {
  const order = i + 1
  if (order % 2 === 0) {
    return num % 2 === 0
  } else {
    return num % 2 !== 0
  }
})

const answer = boo ? 'YES' : 'NO'

console.log(answer)