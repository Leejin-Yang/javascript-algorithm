function getType(survey, choice) {
    if (choice === 4) return survey[0] < survey[1] ? survey[0] : survey[1]
    
    if (choice > 4) return survey[1]
    
    return survey[0]
}

function getScore(choice) {
    if (choice === 4) return 0
    
    if (choice > 4) return choice - 4
    
    return choice === 1 ? 3 : choice === 3 ? 1 : 2
}

function getPersonality(scores) {
    const first = scores['R'] >= scores['T'] ? 'R' : 'T'
    const second = scores['C'] >= scores['F'] ? 'C' : 'F'
    const third = scores['J'] >= scores['M'] ? 'J' : 'M'
    const fourth = scores['A'] >= scores['N'] ? 'A' : 'N'
    
    return first + second + third + fourth
}

function solution(survey, choices) {
    const initial = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0}
    const scores = survey.reduce((acc, cur, i) => {
        const type = getType(cur, choices[i])
        const score = getScore(choices[i])
        
        return {...acc, [type]: acc[type] + score }
    } , initial)
    
    return getPersonality(scores)
}