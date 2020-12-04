function validateInput (input) {
  return input
    .map(y => {
      if (y.indexOf("byr:") != -1
          && y.indexOf("eyr:") != -1
          && y.indexOf("iyr:") != -1
          && y.indexOf("hcl:") != -1
          && y.indexOf("ecl:") != -1
          && y.indexOf("pid:") != -1
          && y.indexOf("hgt:") != -1) {
            return y
      } else {
        return false
      }
    })
    .filter(x => x != false)
}

function validateInputPart2 (input) {
  return validateInput(input)
    .map(x => x.split(" "))
    .map(x => validateCard(x))
    .filter(x => x.indexOf(false) == -1)
}

const validateField = (field) => {
  let x = field.split(":")
  switch(x[0]) {
    case 'byr':
      return parseInt(x[1]) > 1919 && parseInt(x[1]) <= 2002
    case 'iyr':
      return parseInt(x[1]) > 2009 && parseInt(x[1]) <= 2020   
    case 'eyr':
      return parseInt(x[1]) >= 2020 && parseInt(x[1]) <= 2030         
    case 'hgt':
      let h = x[1]
      if (h.indexOf("cm") != - 1) {
        return parseInt(h) >= 150 && parseInt(h) <= 193
      } else if (h.indexOf("in") != -1) {
        return parseInt(h) >= 59 && parseInt(h) <= 76
      } else {return false}
    case 'hcl':
      return RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$').test(x[1])   
    case 'ecl':
      return ["amb","blu","brn","gry","grn","hzl","oth"].indexOf(x[1]) != -1
    case 'pid':
      return RegExp("^\\d{9}$").test(x[1])
    default:
      return field
  }
}

const validateCard = (card, type) => card.map(x => validateField(x, type))
const count = (callback) => (input) => callback(input).length
const day4 = count(validateInput)
const day4part2 = count(validateInputPart2)

module.exports = {
  "day4": day4,
  "day4part2": day4part2
}
