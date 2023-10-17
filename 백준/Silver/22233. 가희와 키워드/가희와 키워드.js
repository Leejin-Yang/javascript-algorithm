const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [keywordCnt, blogCnt] = input[0].split(' ').map(Number)
const keywords = input.slice(1, (keywordCnt + 1))
const words = input.slice(keywordCnt + 1).map((word) => word.split(','))

const k = keywords.reduce((acc, cur) => {
  acc.set(cur, 1)
  return acc
}, new Map())

let index = 0
let answer = []

while(k.size !== 0 && index !== blogCnt) {
  const word = words[index]
  word.forEach((w) => {
    k.delete(w)
  })
  answer.push(k.size)
  index++
}

if (index < blogCnt) {
  answer = [...answer, ...Array.from({length: blogCnt - index}, () => 0)]
}

console.log(answer.join('\n'))