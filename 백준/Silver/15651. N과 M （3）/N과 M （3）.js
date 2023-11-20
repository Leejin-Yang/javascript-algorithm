const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [length, count] = input.split(' ').map(Number)

const arr = Array.from({length}, (_, i) => i + 1)

const getPerm = (arr, selectNumber) => {
  const result = []
  if (selectNumber === 1) return arr.map((el) => [el])
  
  arr.forEach((num, i) => {
    const perms = getPerm(arr, selectNumber - 1)
    const added = perms.map((el) => [num, ...el])
    result.push(...added)
  })
  
  return result
}

const answer = getPerm(arr, count)
console.log(answer.map((el) => el.join(' ')).join('\n'))