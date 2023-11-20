const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [length, count] = input.split(' ').map(Number)

const arr = Array.from({length}, (_, i) => i + 1)

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
answer.forEach((el) => {
  console.log(el.join(' '))
})