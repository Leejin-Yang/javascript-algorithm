const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [X, Y] = input.split(' ').map(Number)

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
  const queue = new Queue()
  const visited = Array.from({length: 100_001}, () => false)
  
  queue.enqueue([X, 0])
  visited[X] = true
  
  while (queue.size() > 0) {
    const [value, sec] = queue.dequeue()
    
    if (value === Y) {
      return sec
    }
    
    if (value - 1 >= 0 && value - 1 <= 100_000 && !visited[value - 1]) {
      queue.enqueue([value - 1, sec + 1])
      visited[value - 1] = true
    }
    
    if (value + 1 >= 0 && value + 1 <= 100_000 && !visited[value + 1]) {
      queue.enqueue([value + 1, sec + 1])
      visited[value + 1] = true
    }
    
    if (value * 2 >= 0 && value * 2 <= 100_000 && !visited[value * 2]) {
      queue.enqueue([value * 2, sec + 1])
      visited[value * 2] = true
    }
  } 
  
  return -1
}

console.log(solution())
