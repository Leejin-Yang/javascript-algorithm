function convertUpperCase(word) {
    return word.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')
}

function solution(s) {
    return s.split(' ').map(convertUpperCase).join(' ')
}