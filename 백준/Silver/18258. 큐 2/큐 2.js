const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, ...flows] = input
const N = Number(env)

const queue = []
let firstIndex = 0

const answer = []

const push = (flow) => {
  const [_, value] = flow.split(' ')
  queue.push(Number(value))
}

const pop = () => {
  const firstValue = queue[firstIndex]
  
  if (!firstValue) {
    answer.push(-1)
    return
  }
  
  answer.push(firstValue)
  firstIndex++
}

const size = () => {
  answer.push(queue.length - firstIndex)
}

const empty = () => {
  const firstValue = queue[firstIndex]
  
  if (!firstValue) {
    answer.push(1)
    return
  }
  
  answer.push(0)
}

const front = () => {
  const firstValue = queue[firstIndex]
  
  if (!firstValue) {
    answer.push(-1)
    return
  }
  
  answer.push(firstValue)
}

const back = () => {
  const firstValue = queue[firstIndex]
  
  if (!firstValue) {
    answer.push(-1)
    return
  }
  
  const lastValue = queue[queue.length - 1]
  answer.push(lastValue)
}

for(let i = 0; i < N; i += 1) {
  const flow = flows[i]
  
  if (flow === 'front') {
    front()
  } else if (flow === 'back') {
    back()
  } else if (flow === 'empty') {
    empty()
  } else if (flow === 'size') {
    size()
  } else if (flow === 'pop') {
    pop()
  } else {
    push(flow)
  }
}

console.log(answer.join('\n'))
