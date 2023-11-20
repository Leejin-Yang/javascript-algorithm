const regex = /[\{\}]/gi

function solution(s) {
    const replaced = s.replace(regex, '')
    
    const numArr = replaced.split(',').filter((char) => !isNaN(char)).map(Number)
    const countObj = numArr.reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1
        return acc
    }, {})
    
    return Object.entries(countObj).sort((a, b) => b[1] - a[1]).map((el) => Number(el[0]))
}