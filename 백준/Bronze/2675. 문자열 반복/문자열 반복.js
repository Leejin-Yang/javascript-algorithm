const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [count, ...tests] = input

const answer = tests.map((test) => {
  const [repeatCount, str] = test.split(' ')
  return str.split('').map((s) => s.repeat(repeatCount)).join('')
}).join('\n')

console.log(answer)