function solution(N, stages) {
    const answer = []
    
    for (let i = 1; i <= N; i += 1) {
        const challengedUsers = stages.filter((stage) => stage >= i).length
        const failedUsers = stages.filter((stage) => stage === i).length
        
        if (challengedUsers === 0) {
            answer.push({stage: i, failPer: 0})
            continue
        }
        answer.push({stage: i, failPer: failedUsers / challengedUsers})
    }
    
    return answer.sort((a, b) => b.failPer - a.failPer).map((stage) => stage.stage)
}