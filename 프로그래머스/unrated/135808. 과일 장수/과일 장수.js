function solution(k, m, score) {
    if (score.length < m) return 0;
    
    const sortedScores = [...score].sort((a, b) => a - b);
    let answer = 0;
    
    while (Math.floor(sortedScores.length / m)) {
        const appleBox = [];
        
        while(appleBox.length < m) {
            const currentScore = sortedScores.pop();
            appleBox.push(currentScore);
        }
        
        const minScore = Math.min(...appleBox);
        answer += minScore * m;
    }
    
    return answer;
}