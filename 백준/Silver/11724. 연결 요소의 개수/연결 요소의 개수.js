const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number)
const obj = input.slice(1, input.length).map((s) => s.split(' ')).reduce((acc, cur) => {
  const [firstNode, secondNode] = cur
  
  if (acc[firstNode]) {
    acc[firstNode].push(secondNode)
  } else {
    acc[firstNode] = [secondNode]  
  }
  
  if (acc[secondNode]) {
    acc[secondNode].push(firstNode)
  } else {
    acc[secondNode] = [firstNode]  
  }
  
  return acc
}, {})

class Queue {
  constructor() {
    this.queue = []
    this.start = 0
    this.rear = 0
  }
  
  enqueue(value) {
    this.queue[this.rear++] = value
  }
  
  dequeue() {
    const value = this.queue[this.start]
    delete this.queue[this.start]
    this.start += 1
    return value
  }
  
  size() {
    return this.rear - this.start    
  }
}

function solution() {
  let answer = 0
  
  const queue = new Queue()
  const visited = Array.from({length: N + 1}, () => false)
  const nodes = Array.from({length: N}, (_, i) => i + 1)
  
  nodes.forEach((node) => {
    if (visited[node]) return
    
    queue.enqueue(node)
    visited[node] = true
    
    while (queue.size() > 0) {
      const value = queue.dequeue()
      const nextNodes = obj[value]
      
      if (!nextNodes) {
        break
      }
    
      nextNodes.forEach((n) => {
        if (visited[n]) return
      
        queue.enqueue(n)
        visited[n] = true
      })
    }
    
    answer += 1
  })

  return answer
}

console.log(solution())
