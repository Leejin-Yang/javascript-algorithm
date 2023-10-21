function solution(today, terms, privacies) {
    const answer = []
    
    const todayDay = new Date(today)
    const todayYear = todayDay.getFullYear()
    const todayMonth = todayDay.getMonth() + 1
    const todayDate = todayDay.getDate()
    
    const termObj = terms.reduce((acc, cur) => {
        const [term, month] = cur.split(' ')
        return {...acc, [term]: month}
    }, {})
    
    const privaciesDate = privacies.map((privacy) => {
        const [d, term] = privacy.split(' ')
        const day = new Date(d)
        const year = day.getFullYear()
        const month = day.getMonth() + 1
        const date = day.getDate()
        return {year, month, date, term}
    })
    
    privaciesDate.forEach((privacy, i) => {
        const yearDiff = todayYear - privacy.year
        const monthDiff = todayMonth - privacy.month
        const period = yearDiff * 12 + monthDiff
        
        if (termObj[privacy.term] < period) {
            answer.push(i + 1)
        } 
        
        if (Number(termObj[privacy.term]) === period) {
            if (privacy.date <= todayDate) {
                answer.push(i + 1)
            }
        }
    })
    
    return answer
}