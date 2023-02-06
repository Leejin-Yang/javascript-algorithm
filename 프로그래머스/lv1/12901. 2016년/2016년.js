const monthDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']


function solution(a, b) {
    const targetMonths = monthDays.slice(0, a).reduce((acc, day) => acc + day, 0)
    const targetDays = targetMonths + b - 1
    const answer = days[targetDays % 7]
    
    
    return answer;
}