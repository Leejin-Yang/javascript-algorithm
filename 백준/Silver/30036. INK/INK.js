const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 충전 j
// 점프 J
// 이동 U D R L
// 스테이지 밖, 장애물과 겹치면 해당 커맨드 무시

const [env, inks, ...grid ] = input
const [I, N, K] = env.split(' ').map(Number)
const commands = grid.pop()
const board = grid.map((g) => g.split(''))

const setting = board.reduce((acc, cur, x) => {
  cur.forEach((sq, y) => {
    if (sq === '@') {
      acc = {...acc, location: {x, y} }
    } else if (sq === '#') {
      acc = {...acc, obstacle: [...acc.obstacle, {x, y, color: null}]}
    }
  })
  return acc
}, {location: {x: 0, y: 0}, obstacle: []})

const commandAction = {
  index: 0,
  charged: 0,
  canMove: ({x, y}) => x >= 0 && y >= 0 && x < N && y < N && !setting.obstacle.some((o) => o.x === x && o.y === y),
  U: () => {
    const {x, y} = setting.location
    const newLocation = {x: x - 1, y}
    if (commandAction.canMove(newLocation)) {
      setting.location = newLocation
    }
  },
  D: () => {
    const {x, y} = setting.location
    const newLocation = { x: x + 1, y }
    if (commandAction.canMove(newLocation)) {
      setting.location = newLocation
    }
  },
  L: () => {
    const {x, y} = setting.location
    const newLocation = { x, y: y - 1 }
    if (commandAction.canMove(newLocation)) {
      setting.location = newLocation
    }
  },
  R: () => {
    const {x, y} = setting.location
    const newLocation = {x, y: y + 1}
    if (commandAction.canMove(newLocation)) {
      setting.location = newLocation
    }
  },
  j: () => commandAction.charged += 1,
  J: () => {
    const newObs = Object.values(setting.obstacle).map((o) => {
      const {x, y} = o
      const {x: locationX, y: locationY} = setting.location
      const yAbs = Math.abs(locationY - y)
      const xAbs = Math.abs(locationX - x)
      if (xAbs + yAbs > commandAction.charged) return o
      
      const currentInk = inks[commandAction.index % I]
      return {...o, color: currentInk}
    })
    setting.obstacle = newObs
    commandAction.charged = 0
    commandAction.index += 1
  }
}

for (const command of commands) {
  commandAction[command]()
}

const answer = Array.from({length: N}, () => Array.from({length: N}, () => '.'))

const {location, obstacle} = setting
answer[location.x][location.y] = '@'
obstacle.forEach(({x, y, color}) => {
  answer[x][y] = color ?? '#'
})

answer.forEach((a) => {
  console.log(a.join(''))
})
