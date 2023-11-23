const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N, P] = input[0].split(' ').map(Number);
const board = input.slice(1, M + 1).map((row) => row.split(''));
const players = input.slice(M + 1, input.length - 1).reduce((acc, cur) => {
  const info = cur.split(' ');
  acc[info[0]] = Number(info[1]);
  return acc;
}, {});

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
}

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function solution() {
  if (P === 1) return 1;

  const queue = new Queue();
  const visited = Object.keys(players).reduce((acc, cur) => {
    acc[cur] = board.map((row) => row.map((col) => (col === 'X' ? true : false)));
    return acc;
  }, {});
  const earnedPlayer = [];
  let bossRow = 0;
  let bossCol = 0;
  let bossHP = Number(input[input.length - 1]);
  let hit = 0;

  board.forEach((row, r) => {
    row.forEach((col, c) => {
      if (col in players) {
        queue.enqueue([r, c, col]);
        visited[col][r][c] = true;
      }
      if (col === 'B') {
        bossRow = r;
        bossCol = c;
      }
    });
  });

  while (queue.size() > 0) {
    if (bossHP <= 0) break;

    bossHP -= hit;

    let size = queue.size();

    while (size-- > 0) {
      const value = queue.dequeue();

      if (earnedPlayer.includes(value[2])) {
        continue;
      }

      for (let j = 0; j < 4; j += 1) {
        const newRow = value[0] + dr[j];
        const newCol = value[1] + dc[j];

        if (newRow === bossRow && newCol === bossCol) {
          const dps = players[value[2]];
          bossHP -= dps;
          hit += dps;
          earnedPlayer.push(value[2]);
          break;
        }

        if (newRow >= 0 && newRow < M && newCol >= 0 && newCol < N && !visited[value[2]][newRow][newCol]) {
          queue.enqueue([newRow, newCol, value[2]]);
          visited[value[2]][newRow][newCol] = true;
        }
      }
    }
  }

  return earnedPlayer.length;
}

console.log(solution());
