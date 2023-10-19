function solution(absolutes, signs) {
    const realNumbers = absolutes.map((ab, i) => signs[i] ? ab : ab * -1)
    return realNumbers.reduce((acc, cur) => acc + cur, 0)
}