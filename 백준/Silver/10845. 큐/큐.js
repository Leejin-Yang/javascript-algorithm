const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, ...flows] = input
const count = Number(env)

const queue = []
let firstIndex = 0
const answer = []

const push = (num) => {
  queue.push(num)
}

const pop = () => {
  if (queue.length === firstIndex) {
    return -1
  }
  
  return queue[firstIndex++]
}

const size = () => {
  return (queue.length - firstIndex)
}

const empty = () => {
  if (queue.length === firstIndex) {
    return 1
  }
  
  return 0
}

const front = () => {
    if (queue.length === firstIndex) {
    return -1
  }
  
  return queue[firstIndex]
}

const back = () => {
  if (queue.length === firstIndex) {
    return -1
  }
  
  return queue[queue.length - 1]
}

flows.forEach((flow, i) => {
  if (flow === 'pop') {
    answer.push(pop())
  } else if (flow === 'size') {
    answer.push(size())
  } else if (flow === 'empty') {
    answer.push(empty())
  } else if (flow === 'front') {
    answer.push(front())
  } else if (flow === 'back') {
    answer.push(back())
  } else {
    const [_, num] = flow.split(' ')
    push(Number(num))
  }
})

console.log(answer.join('\n'))
