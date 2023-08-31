function solution(name, yearning, photo) {
    const friendsYearnings = name.reduce((acc, cur, i) => ({...acc, [cur]: yearning[i]}), {})
    
    return photo.map((p) => p.reduce((acc, cur) => acc + (friendsYearnings[cur] ?? 0), 0))
}