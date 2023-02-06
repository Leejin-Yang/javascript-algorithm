function solution(arr) {
   const stack = []
   let index = -1
   
   arr.forEach((v) => {
       if (stack[index] === v) return
       stack.push(v)
       index += 1
   })
    
    return stack
}