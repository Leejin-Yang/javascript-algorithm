const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, ...flows] = input
const [N, M, K] = env.split(' ').map(Number)
const workflows = flows.map((flow) => flow.split(' ').map(Number))

const result = new Map()

function solution() {
  for (let i = 0; i < M; i += 1) {
    for (let user = 0; user < N; user += 1) {
      const length = workflows[user][i]
      const newLength = result.get(user) ? result.get(user) + length : length

      if (newLength >= K) {
        return `${user + 1} ${i + 1}`
      }
      
      result.set(user, newLength)
    }
  }  
}

console.log(solution())

// N명이 결제, 점원과의 거리 K
// 처음으로 K이상이면 결제
// x좌표 기준으로 실행, 가장 먼저 도착하면 결제하고 종료
// 결제한 사람, 손을 뻗은 횟수 출력

// const input = [
//   '4 5 20',
//   '3 5 2 1 4',
//   '1 8 2 5 8',
//   '1 5 2 3 3',
//   '1 1 8 9 9',
// ]
// const input = [
//   '2 5 100',
//   '1 1 1 1 1',
//   '50 50 50 50 50'
// ]
// const input = [
//   '1 4 5',
//   '1 2 2 1'
// ]
