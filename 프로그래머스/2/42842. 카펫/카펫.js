// 테두리 갈색
// 중앙 노란색
// 가로 x, 세로 y (x >= y)
// 갈색의 개수 === 2 * (x + y) - 4
// 노란색 개수 === (x - 2) * (y - 2)
// 2x + 2y === brown + 4
// xy + 4 - yellow = 2x + 2y
// xy = brown + yellow
// 약수 구해서 경우의 수 구하기

function solution(brown, yellow) {
    const answer = []
    
    const multiplied = brown + yellow
    const sq = Math.sqrt(multiplied)
    const arr = Array.from({length: Math.floor(sq)}, (_, i) => i + 1).filter((num) => multiplied % num === 0)
    for(let i = 0; i < arr.length; i += 1) {
        const y = arr[i]
        const x = multiplied / y

        if (x * 2 + y * 2 === brown + 4) {
            answer.push(x)
            answer.push(y)
        }
    }
    
    return answer
}