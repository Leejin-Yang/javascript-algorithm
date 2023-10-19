const charRegx = /[^a-z0-9\.\-\_]/g
const dotRegx = /\.+\./g
const firstDotRegx = /^\./
const lastDotRegx = /\.$/

function solution(new_id) {
    let fixedId = new_id
    
    fixedId = fixedId.toLowerCase()
    fixedId = fixedId.replace(charRegx, '')
    fixedId = fixedId.replace(dotRegx, '.')
    
    fixedId = fixedId.replace(firstDotRegx, '')
    fixedId = fixedId.replace(lastDotRegx, '')
    
    if (fixedId.length === 0) {
        fixedId += 'a'
    }
    
    if (fixedId.length >= 16) {
        fixedId = fixedId.substring(0, 15)
        fixedId = fixedId.replace(lastDotRegx, '')
    }
    
    if (fixedId.length <= 2) {
        while(fixedId.length < 3) {
            fixedId += fixedId[fixedId.length - 1]
        }
    }
    
    return fixedId
}