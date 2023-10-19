const arr = Array.from({ length: 10 }, (_, i) => i)

function solution(numbers) {
    const excluded = arr.filter((num) => !numbers.includes(num))
    return excluded.reduce((acc, cur) => acc + cur, 0)
}