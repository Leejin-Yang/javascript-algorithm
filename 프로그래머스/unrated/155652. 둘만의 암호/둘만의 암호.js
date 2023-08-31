const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('')

function solution(s, skip, index) {
    const usedArr = alphabetArr.filter((char) => !skip.includes(char))
    const getCurrentIndex = (char) => usedArr.findIndex((used) => used === char)
    const getTargetIndex = (currentIndex, index) => (currentIndex + index) % usedArr.length

    return s.split('').map((char) => usedArr[getTargetIndex(getCurrentIndex(char), index)]).join('')
}