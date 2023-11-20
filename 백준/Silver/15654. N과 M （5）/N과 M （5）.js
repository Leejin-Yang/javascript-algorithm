const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [length, count] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)

const getPermutations = (arr, selectNumber) => {
  const result = []
  if (selectNumber === 1) return arr.map((el) => [el])
  
  arr.forEach((num, i) => {
    const restArr = [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)]
    const permutations = getPermutations(restArr, selectNumber - 1)
    const added = permutations.map((el) => [num, ...el])
    result.push(...added)
  })
  
  return result
}

const answer = getPermutations(arr, count)
console.log(answer.map((el) => el.join(' ')).join('\n'))