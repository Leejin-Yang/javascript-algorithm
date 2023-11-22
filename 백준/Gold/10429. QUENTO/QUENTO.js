const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input
  .slice(1, input.length)
  .map((row) => row.split('').map((col) => (isNaN(Number(col)) ? col : Number(col))));

const numberCoor = [];
const operationCoor = [];

board.forEach((row, i) => {
  row.forEach((col, j) => {
    if (typeof col === 'number') {
      numberCoor.push([i, j]);
    } else {
      operationCoor.push([i, j]);
    }
  });
});

class Queue {
  constructor() {
    this.queue = [];
    this.start = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.start];
    delete this.queue[this.start];
    this.start += 1;
    return value;
  }

  size() {
    return this.rear - this.start;
  }

  reset() {
    this.queue = [];
    this.start = 0;
    this.rear = 0;
  }
}

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const isOperation = (el) => el === '+' || el === '-';

function solution() {
  const queue = new Queue();

  for (let i = 0; i < numberCoor.length; i += 1) {
    const visited = board.map((row) => row.map(() => false))
    visited[numberCoor[i][0]][numberCoor[i][1]] = true;
    queue.enqueue({
      coor: numberCoor[i],
      total: board[numberCoor[i][0]][numberCoor[i][1]],
      stack: [numberCoor[i]],
      visited
    });
    
    while (queue.size() > 0) {
      const value = queue.dequeue();
      const { coor, total, stack, visited } = value

      if (stack.length === M * 2 - 1 && total === N) {
        return [1, stack];
      }

      if (stack.length === M * 2) {
        break;
      }

      for (let j = 0; j < 4; j += 1) {
        const nextRow = coor[0] + dr[j];
        const nextCol = coor[1] + dc[j];

        const isAvailableRow = nextRow >= 0 && nextRow < 3;
        const isAvailableCol = nextCol >= 0 && nextCol < 3;
        const isAvailable = isAvailableRow && isAvailableCol && !visited[nextRow][nextCol];

        if (isAvailable) {
          const nextEl = board[nextRow][nextCol];
          const nextTotal = isOperation(nextEl)
            ? total
            : board[coor[0]][coor[1]] === '+'
            ? total + nextEl
            : total - nextEl;
          const nextVisited = visited.map((row, i) => row.map((col, j) => i === nextRow && j === nextCol ? true : col))
          queue.enqueue({
            coor: [nextRow, nextCol],
            stack: [...stack, [nextRow, nextCol]],
            total: nextTotal,
            visited: nextVisited
          });
          ;
        }
      }
    }
    queue.reset();
  }

  return 0;
}

const returned = solution()
const answer = Array.isArray(returned) ? `${returned[0]}\n${returned[1].map((el) => el.join(' ')).join('\n')}` : returned

console.log(answer)
