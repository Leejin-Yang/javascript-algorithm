const getRank = (matchCount) => ({
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5
}[matchCount] ?? 6)

function solution(lottos, win_nums) {
    if (lottos.every((lotto) => lotto === 0)) {
        return [1, 6]
    }
    
    const erasedNumCount = lottos.filter((lotto) => lotto === 0).length
    const matchCount = lottos.filter((lotto) => win_nums.includes(lotto)).length
    
    const currentRank = getRank(matchCount)
    
    if (erasedNumCount === 0) {
        return [currentRank, currentRank]
    }
    
    const bestRank = getRank(matchCount + erasedNumCount)
    
    return [bestRank, currentRank]
}