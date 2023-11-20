const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [length, count] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)

const getCombinations = (arr, selectNumber) => {
  const result = []
  if (selectNumber === 1) return arr.map((el) => [el])
  
  arr.forEach((num, i) => {
    const restArr = arr.slice(i + 1, arr.length)
    const combinations = getCombinations(restArr, selectNumber - 1)
    const added = combinations.map((el) => [num, ...el])
    result.push(...added)
  })
  
  return result
}

const answer = getCombinations(arr, count)
console.log(answer.map((el) => el.join(' ')).join('\n'))