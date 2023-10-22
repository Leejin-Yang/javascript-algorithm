// 약수 구하기
// Math.floor(Math.sqrt(number)) 제곱근 구한 뒤 내림
// 이 수까지 나머지가 0인 애들을 구한다
// 구한 애들로 나눈 친구들이 나머지 약수

const getDivisor = (number) => {
    const sq = Math.floor(Math.sqrt(number))
    const arr = Array.from({length: sq}, (_, i) => i + 1)
    const filtered = arr.filter((num) => number % num === 0)
    return [...new Set([...filtered, ...filtered.map((num) => number / num)])]
}

function solution(left, right) {
    const numbers = Array.from({length: right - left + 1}, (_, i) => left + i)
    const divisorCounts = numbers.map((num) => getDivisor(num).length)
    
    return numbers.reduce((acc, cur, i) => divisorCounts[i] % 2 === 0 ? acc + cur : acc - cur, 0)
}