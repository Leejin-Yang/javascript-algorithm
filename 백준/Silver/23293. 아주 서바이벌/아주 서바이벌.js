const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, ...flow] = input
const [gameCount, playerCount] = env.split(' ').map(Number)
const gameFlow = flow.map((f) => f.split(' '))

const bug = {
  logCount: 0,
  log: [],
  blockCount: 0,
  blockedPlayer: []
}

const result = new Map()
const init = { location: '1', weapon: {} }

Array.from({length: playerCount}, (_, i) => (i + 1) + '').forEach((player) => {
  result.set(player, init)
})


const movePlayer = (player, location) => {
  result.set(player, {...result.get(player), location})
}

const farming = (flowNumber, player, weapon) => {
  const currentWeapon = result.get(player).weapon
  
  if (weapon !== result.get(player).location) {
    bug.log.push(flowNumber)
    bug.logCount += 1
  }
  
  result.set(player, {...result.get(player), weapon: {...currentWeapon, [weapon]: currentWeapon[weapon] ? currentWeapon[weapon] + 1 : 1 }})
}

const crafting = (flowNumber, player, weapon1, weapon2) => {
  const usingWeapon = [weapon1, weapon2]
  const currentWeapon = result.get(player).weapon
  const hasWeapon = (weapon) => weapon in currentWeapon && currentWeapon[weapon] !== undefined && currentWeapon[weapon] > 0
  
  if (!usingWeapon.every((w) => hasWeapon(w))) {
    bug.log.push(flowNumber)
    bug.logCount += 1
  }
  
    result.set(player, {...result.get(player), weapon: {...currentWeapon, [weapon1]: hasWeapon(weapon1) ? currentWeapon[weapon1] - 1 : undefined , [weapon2]: hasWeapon(weapon2) ? currentWeapon[weapon2] - 1 : undefined }})
}

const attack = (flowNumber, player, attackedPlayer) => {  
  if (result.get(player).location !== result.get(attackedPlayer).location) {
    bug.log.push(flowNumber)
    bug.logCount += 1
    
    if (!bug.blockedPlayer.includes(player)) {
      bug.blockCount += 1
      bug.blockedPlayer.push(player)  
    }
  }
}

gameFlow.forEach((game) => {
  const [flowNumber, player, action, num1, num2] = game
  
  if (action === 'M') {
    movePlayer(player, num1)
  } else if (action === 'F') {
    farming(flowNumber, player, num1)
  } else if (action === 'C') {
    crafting(flowNumber, player, num1, num2)
  } else if (action === 'A') {
    attack(flowNumber, player, num1)
  }
})

const answerArr = Object.values(bug).map((val) => Array.isArray(val) ? [...val].sort((a, b) => Number(a) - Number(b)).join(' ') : val).filter((val) => typeof val === 'number' || (typeof val === 'string' && val.length > 0))
console.log(answerArr.join('\n'))

// =============================================

// const input = [
//   '7 20', 
//   '1 11 M 13',
//   '2 13 M 15',
//   '3 11 F 13',
//   '4 11 M 3',
//   '5 11 F 3',
//   '6 11 C 3 13',
//   '7 13 A 11'
// ]
// const input = [
//   '8 15', 
//   '1 10 M 13',
//   '2 13 M 15',
//   '3 10 F 13',
//   '4 10 M 3',
//   '5 1 M 15',
//   '6 10 F 3',
//   '7 10 C 3 13',
//   '8 1 A 13'
// ]
// const input = [
//   '11 7',
//   '1 2 A 6',
//   '2 7 F 2',
//   '3 1 M 43',
//   '4 1 F 43',
//   '5 1 C 43 1',
//   '6 5 C 1 2',
//   '7 4 F 1',
//   '8 4 M 5',
//   '9 4 F 5',
//   '10 4 C 1 5',
//   '11 4 C 1 5',
// ]

// 이동 획득 조합 공격
// M.  F.  C.  A
// 다른 지역으로 이동
// 위치 지역에서만 획득
// 서로 다른 종류 조합
// 같은 위치 플레이어 공격

// 플레이어가 현재 위치한 지역에서 얻을 수 없는 소재 아이템을 획득한 경우
// 플레이어가 가지고 있지 않은 소재 아이템을 사용해 조합하는 경우 (부정행위로 습득해도 인정, 없는 걸로 조합할 때만 로그 기록)
// 플레이어가 다른 지역에 있는 상대 플레이어를 공격하는 경우 (로그, 차단)