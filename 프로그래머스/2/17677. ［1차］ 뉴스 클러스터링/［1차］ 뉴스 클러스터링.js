const regx = /^[A-Z]+$/
const MULTIPLY_NUMBER = 65536

const getSubsets = (str) => {
    const arr = []
    for(let i = 0; i < str.length - 1; i += 1) {
        arr.push(str[i] + str[i + 1])
    }
    const filtered = arr.filter((el) => el.match(regx))
    const subsetObj = filtered.reduce((acc, cur) => ({...acc, [cur]: acc[cur] ? acc[cur] + 1 : 1}), {})
    return subsetObj
}

function solution(str1, str2) {
    const upperStr1 = str1.toUpperCase()
    const upperStr2 = str2.toUpperCase()
    
    const subset1 = getSubsets(upperStr1)
    const subset2 = getSubsets(upperStr2)
    
    const entry1 = Object.entries(subset1)
    const entry2 = Object.entries(subset2)
    
    if (entry1.length === 0 && entry2.length === 0) return MULTIPLY_NUMBER
    
    const intersectionCount = entry1.reduce((acc, cur) => {
        const [substr, count1] = cur
        if (substr in subset2) {
            const count = Math.min(count1, subset2[substr])
            return acc + count
        }
        
        return acc
    }, 0)
    const unionCount = entry1.reduce((acc, cur) => {
        const [substr, count1] = cur
        if (substr in subset2) {
            const count = Math.max(count1, subset2[substr])
            return acc + count
        }
        return acc + count1
    }, 0) + entry2.reduce((acc, cur) => {
        const [substr, count2] = cur
        if (substr in subset1) return acc
        return acc + count2
    }, 0)
    
    return Math.floor((intersectionCount / unionCount) * MULTIPLY_NUMBER)
}