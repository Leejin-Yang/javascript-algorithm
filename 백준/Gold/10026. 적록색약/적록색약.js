const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const RED = 'R'
const GREEN = 'G'
const BLUE = 'B'

const N = Number(input[0])
const board = input.slice(1, input.length).map((row) => row.split(''))
const blindness = board.map((row) => row.map((col) => col === GREEN ? RED : col))

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

const normalBoard = {
  [RED]: [],
  [GREEN]: [],
  [BLUE]: [],
  visited: board.map((row) => row.map(() => false))
}

const blindnessBoard = {
  [RED]: [],
  [BLUE]: [],
  visited: board.map((row) => row.map(() => false))
}

board.forEach((row, i) => {
  row.forEach((col, j) => {
    if (col === RED) {
      normalBoard[RED].push([i, j])
      blindnessBoard[RED].push([i, j])
    } else if (col === GREEN) {
      normalBoard[GREEN].push([i, j])
      blindnessBoard[RED].push([i, j])
    } else if (col === BLUE) {
      normalBoard[BLUE].push([i, j])
      blindnessBoard[BLUE].push([i, j])
    }
  })
})

const dr = [-1, 1, 0, 0]
const dc = [0, 0, -1, 1]

function solution() {
  const queue = new Queue()
  const visited = board.map((row) => row.map(() => false))
  
  const colorArr = [RED, GREEN, BLUE]
  const blindnessColorArr = [RED, BLUE]
  
  let normalCount = 0
  let blindnessCount = 0
  
  colorArr.forEach((color) => {
    const coors = normalBoard[color]
    
    coors.forEach((coor) => {
      if (normalBoard.visited[coor[0]][coor[1]]) return
      
      queue.enqueue(coor)
      normalBoard.visited[coor[0]][coor[1]] = true
    
      while (queue.size() > 0) {
        const [curRow, curCol] = queue.dequeue()
      
        for(let i = 0; i < 4; i += 1) {
          const nextRow = curRow + dr[i]
          const nextCol = curCol + dc[i]
        
          const isAvailableRow = nextRow >= 0 && nextRow < N
          const isAvailableCol = nextCol >= 0 && nextCol < N
          const isAvailable = isAvailableRow && isAvailableCol && board[nextRow][nextCol] === color && !normalBoard.visited[nextRow][nextCol]
        
          if (isAvailable) {
            queue.enqueue([nextRow, nextCol])
            normalBoard.visited[nextRow][nextCol] = true
          }
        }
      }
      
      normalCount += 1
    })
  })

  blindnessColorArr.forEach((color) => {
    const coors = blindnessBoard[color]
    
    coors.forEach((coor) => {
      if (blindnessBoard.visited[coor[0]][coor[1]]) return
      
      queue.enqueue(coor)
      blindnessBoard.visited[coor[0]][coor[1]] = true
    
      while (queue.size() > 0) {
        const [curRow, curCol] = queue.dequeue()
      
        for(let i = 0; i < 4; i += 1) {
          const nextRow = curRow + dr[i]
          const nextCol = curCol + dc[i]
        
          const isAvailableRow = nextRow >= 0 && nextRow < N
          const isAvailableCol = nextCol >= 0 && nextCol < N
          const isAvailable = isAvailableRow && isAvailableCol && blindness[nextRow][nextCol] === color && !blindnessBoard.visited[nextRow][nextCol]
        
          if (isAvailable) {
            queue.enqueue([nextRow, nextCol])
            blindnessBoard.visited[nextRow][nextCol] = true
          }
        }
      }
      
      blindnessCount += 1
    })
  })
    
  
  return [normalCount, blindnessCount]
}

console.log(solution().join(' '))
