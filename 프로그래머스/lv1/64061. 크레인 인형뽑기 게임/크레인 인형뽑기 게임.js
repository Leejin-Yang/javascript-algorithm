function solution(board, moves) {
    const stack = []
    const sortedBoard = Array.from({length: board.length}, () => [])
    let answer = 0
    
    board.forEach((arr, index) => {
      for (let i = 0; i < board.length; i += 1) {
        if (arr[i] === 0) continue
        sortedBoard[i].push(arr[i])
      }    
    })
    
    sortedBoard.forEach((v) => v.reverse())
    
    moves.forEach((move) => {
        const doll = sortedBoard[move - 1].pop()
        
        if (!doll) return
        
        if (stack[stack.length - 1] === doll) {
            stack.pop()
            answer += 2
            return
        }
        
        stack.push(doll)
    })
    
    return answer;
}