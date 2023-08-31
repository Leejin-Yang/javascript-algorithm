function solution(s){
    const isP = (char) => char === 'p' || char === 'P';
    const isY = (char) => char === 'y' || char === 'Y';
    
    let pCount = 0;
    let yCount = 0;
    
    s.split('').forEach((char) => {
      if (isP(char)) {
          pCount += 1;
      }
        
      if (isY(char)) {
          yCount += 1;
      }
    })
    
    return pCount === yCount
}