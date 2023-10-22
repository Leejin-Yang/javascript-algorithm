const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, ...flows] = input
const [p, m] = env.split(' ').map(Number)
const workflows = flows.map((flow) => flow.split(' ').map((a, i) => i === 0 ? Number(a) : a))

const answer = new Map()
let roomNumber = 1

workflows.forEach((player) => {
  const playerLevel = player[0]
  let needNewRoom = false
  
  if (answer.size === 0) {
    answer.set(roomNumber, {players: [player], minLevel: playerLevel - 10, maxLevel: playerLevel + 10, isFull: 1 === m})
    return
  }
  
  for(const room of answer) {
    if (room[1].isFull || room[1].maxLevel < playerLevel || room[1].minLevel > playerLevel) {
      needNewRoom = true;
      continue
    }
    
    answer.set(room[0], {...answer.get(room[0]), players: [...answer.get(room[0]).players, player], isFull: answer.get(room[0]).players.length + 1 === m})
    needNewRoom = false
    break
  }
  
  if (needNewRoom) {
    roomNumber += 1
    answer.set(roomNumber, {players: [player], minLevel: playerLevel - 10, maxLevel: playerLevel + 10, isFull: 1 === m})
  }
})

for(const room of answer) {
  const {players, isFull} = room[1]
  const message = isFull ? 'Started!' : 'Waiting!'
  const sortedPlayers = [...players].sort((a, b) => a[1] > b[1] ? 1 : -1).map((player) => player.join(' ')).join('\n')
  console.log(message + '\n' + sortedPlayers)
}
