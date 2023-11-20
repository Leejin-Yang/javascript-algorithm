const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0])
const towers = input[1].split(' ').map(Number)

const first = towers[0]
const last = towers[towers.length - 1]

const middleTowers = towers.slice(1, towers.length - 1)

const maxTowers = middleTowers.map((tower, i) => {
  const left = i - 1 < 0 ? first : middleTowers[i - 1]
  const right = i + 1 >= middleTowers.length ? last : middleTowers[i + 1]
  
  const condition = left > 0 && right > 0 && tower > 0
  return condition ? tower + Math.min(left, right) : -1
})

console.log(Math.max(first, last, ...maxTowers))
