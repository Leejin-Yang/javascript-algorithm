const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, struc, pipe, num, el] = input

const count = Number(env)
const structures = struc.split(' ').map(Number)
const pipes = pipe.split(' ').map(Number)
const elementCount = Number(num)
const elements = el.split(' ').map(Number)

const queue = (arr, index, el) => {
  const temp = arr[index]
  arr[index] = el
  return temp
}

const queues = pipes.filter((pipe, i) => structures[i] === 0)

function solution() {
  if (queues.length === 0) return el
  
  return queues.reverse().concat(elements).slice(0, elementCount).join(' ')
}

console.log(solution())
