const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, str] = input

const count = Number(env)
const toppings = str.split(' ')

function solution() {
  if (count < 4) return 'sad'
  
  const filtered = [... new Set(toppings.filter((topping) => topping.substring(topping.length - 6) === 'Cheese'))]
  
  return filtered.length >= 4 ? 'yummy' : 'sad'
}

console.log(solution())
