function validatePasswords (input) {
  let input2 = input.map(x => {
    const xx = x.split(" ")
    const minmax = xx[0].split("-")
    const char = xx[1].slice(0, -1)
    const regexp = RegExp('^([^' + char + ']*' + char + '){' + minmax[0] + ',' + minmax[1] + '}[^'+ char +']*$')
    return {"item": x, "matched": regexp.test(xx[2])}
  })
  return input2
} 

function validatePasswordsPart2 (input) {
  let input2 = input.map(x => {
    const xx = x.split(" ")
    const minmax = xx[0].split("-")
    const min = parseInt(minmax[0]) - 1
    const max = parseInt(minmax[1]) - 1
    const char = xx[1].slice(0, -1)
    const regexp1 = RegExp('^.{'+ min +'}'+ char)
    const regexp2 = RegExp('^.{'+ max +'}'+ char)
    const match = regexp1.test(xx[2]) == regexp2.test(xx[2]) ? false : true
    return {"item": x, "matched": match}
  })
  return input2
} 

const g = (f1, f2) => input => f1(f2(input))
const countValidPasswords = (input) => input.filter(x => x.matched == true).length

const day2 = g(countValidPasswords,validatePasswords)
const day2part2 = g(countValidPasswords,validatePasswordsPart2)

module.exports = {
  "day2" : day2,
  "day2part2": day2part2
}
