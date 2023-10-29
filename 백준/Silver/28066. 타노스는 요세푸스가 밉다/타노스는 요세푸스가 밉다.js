const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

const [N, K] = input.split(' ').map(Number)

const deleteElement = (arr) => {
  if (arr.length <= K) return arr[0] + 1
  
  const stack = []
  let index = 0
  
  while (index < arr.length) {
    stack.push(arr[index])
    index += K
  }

  const i = arr.indexOf(stack[stack.length - 1])
  
  for (let a = index - K + 1; a < arr.length; a += 1) {
    stack.push(arr[a])
  }
  
  index = stack.findIndex((el) => el === arr[i])
  const spliced = stack.splice(index, stack.length)
  
  return deleteElement(spliced.concat(stack))
}

function solution() {
  if (N < K) return 1
  
  const arr = Array.from({length: N}, (_, i) => i)
  return deleteElement(arr)
}

console.log(solution())
