const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, str] = input
const length = Number(env)
const MAX_LENGTH = 25

const isOneSentence = (str) => !str.includes('.') || (str.split('').findIndex((char) => char === '.') === str.length - 1)

function solution() {
  if (env <= MAX_LENGTH) return str
  
  const middleStr = str.substring(11, str.length - 11)
  
  if (isOneSentence(middleStr)) {
    const frontStr = str.substring(0, 11)
    const backStr = str.substring(str.length - 11, str.length)
    return `${frontStr}...${backStr}`
  }

  const frontStr = str.substring(0, 9)
  const backStr = str.substring(str.length - 10, str.length)
  return `${frontStr}......${backStr}`
}

console.log(solution())
