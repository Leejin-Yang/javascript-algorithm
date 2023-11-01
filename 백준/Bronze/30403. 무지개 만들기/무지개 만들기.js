const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, str] = input
const length = Number(env)

const isLowerCase = (char) => char >= 'a' && char <= 'z'
const isUpperCase = (char) => char >= 'A' && char <= 'Z'

const upperRainbowArr = ['R', 'O', 'Y', 'G', 'B', 'I', 'V']
const lowerRainbowArr = upperRainbowArr.map((char) => char.toLowerCase())

const canRainbow = (rainbowArr, arr) => rainbowArr.every((char) => arr.includes(char))

function solution() {
  const arr = str.split('')
  const lowerArr = arr.filter(isLowerCase)
  const upperArr = arr.filter(isUpperCase)
  
  if (lowerArr.length < 7 && upperArr.length < 7) {
    return 'NO!'
  } else {
    if (canRainbow(upperRainbowArr, upperArr) && canRainbow(lowerRainbowArr, lowerArr)) {
      return 'YeS'
    } else if (canRainbow(upperRainbowArr, upperArr)) {
      return 'YES'
    } else if (canRainbow(lowerRainbowArr, lowerArr)) {
      return 'yes'
    }
  }
  
  return 'NO!'
}

console.log(solution())
