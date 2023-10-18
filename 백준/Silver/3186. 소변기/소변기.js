const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, str] = input
const [K, L, N] = env.split(' ').map(Number)
const people = str.split('').map(Number)

const flushArr = []

let isUsing = false
let isEmpty = false
let usingPerson = []
let emptyTime = []

for(let i = 0; i <= N; i += 1) {
  const person = people[i]
  
  if(person === 1) {
    if (emptyTime.length !== L) {
      emptyTime = []
    }
    usingPerson.push(person)
  }
  
  if (person === 0) {
    if (isUsing) {
      emptyTime.push(person)
    } else {
      usingPerson = []
    }
  }
  
  if (usingPerson.length === K) {
    isUsing = true
  }
  
  if (emptyTime.length === L) {
    isEmpty = true
  }
  
  if (isUsing && isEmpty) {
    flushArr.push(i + 1)
    isUsing = false
    isEmpty = false
    usingPerson = []
    emptyTime = []
  }
}

if (isUsing) {
  flushArr.push(L + N)
}

const answer = flushArr.length > 0 ? flushArr.join('\n') : 'NIKAD'
console.log(answer)