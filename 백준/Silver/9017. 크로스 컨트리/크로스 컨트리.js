const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, ...b] = input
const testCount = Number(a)
const tests = b.filter((_, i) => i % 2 === 1).map((v) => v.split(' '))

const init = { score: 0, rank: [] }

function solution(test) {
  const fullTeam = [...new Set(test)]
  const teamCount = test.reduce((acc, cur) => ({...acc, [cur]: acc[cur] ? acc[cur] + 1 : 1}), {})
  const teams = fullTeam.filter((team) => teamCount[team] === 6)
  
  if (teams.length === 1) return teams[0]
  
  const result = new Map()

  teams.forEach((t) => {
    result.set(t, init)
  })
  
  let score = 1
  
  test.forEach((t, i) => {
    if (!teams.includes(t)) return
    
    const currentScore = result.get(t).score
    const currentRank = result.get(t).rank
    const rank = i + 1
    
    if (result.get(t).rank.length >= 4) {
      result.set(t, {score: currentScore, rank: [...currentRank, rank]})
    } else {
      result.set(t, {score: currentScore + score, rank: [...currentRank, rank]})     
    }
    
    score++
  })
  
  const winner = teams.reduce((acc, cur) => {
    if (!result.get(acc)) return cur
    if (result.get(acc).score < result.get(cur).score) return acc
    if (result.get(acc).score > result.get(cur).score) return cur
    
    return result.get(acc).rank[4] > result.get(cur).rank[4] ? cur : acc   
  }, 0)
  
  return winner
}

console.log(tests.map((t) => solution(t)).join('\n'))


// 크로스 컨트리
// 4 - 12km
// 개인 성적, 팀 점수 계산
// 한 팀 여섯 명
// 팀 점수는 상위 네명 점수, 결승점 통과 순서대로 점수
// 가장 낮은 점수 팀이 우승

// 팀에 여섯 명이 없으면 점수 계산 제외
// 동점의 경우 5번째 주자 빨리온 팀 우승