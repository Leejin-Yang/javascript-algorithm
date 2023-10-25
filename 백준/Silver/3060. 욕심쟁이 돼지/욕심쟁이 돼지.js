const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const [env, ...flows] = input
const testCase = Number(env)

function getTests() {
  let index = 0

  const tests = flows.reduce((acc, cur, i) => {
    if (i % 2 === 0) {
      return [...acc, {total: Number(cur)}]
    } else {
      const feeds = cur.split(' ').map(Number)
      acc[index].feeds = feeds
      index++
      return acc
    }
  }, [])
  
  return tests.map((test) => ({total: test.total, cycle: test.feeds.reduce((acc, cur) => acc + cur, 0)}))
}

const getCount = (cycle, max, count) => {
  if (cycle > max) return count
  if (cycle === max) return count + 1
  
  return getCount(4 * cycle, max, count + 1)
}

const answer = getTests().map((test) => getCount(test.cycle, test.total, 1))

console.log(answer.join('\n'))
