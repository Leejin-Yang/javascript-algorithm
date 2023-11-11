function solution(progresses, speeds) {
    const answer = []
    let stack = []
    const workDays = progresses.map((progress, i) => {
        const remainProgress = 100 - progress
        return Math.ceil(remainProgress / speeds[i])
    })
    console.log(workDays)
    workDays.forEach((workDay) => {
        if (stack.length === 0) {
            stack.push(workDay)
        } else if (workDay <= Math.max(...stack)) {
            stack.push(workDay)
        } else {
            answer.push(stack.length)
            stack = [workDay]
        }
    })
    answer.push(stack.length)
    return answer
}