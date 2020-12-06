
const getUniqueValues = (input) => Array.from(new Set([...input.split('')]))
const sizeOf = (array) => array.length
const day6 = (input) => input.map(x => x.join('')).map(x => sizeOf(getUniqueValues(x))).reduce((x, acc) => acc + x, 0)

const getCommonValues = (input) => {
  // input == ["a", "ab", "bac"]
  const inputLength = input.length
  let commonValues = []
  getUniqueValues(input.join('')).forEach(x => {
    if (input.filter(y => y.indexOf(x) != -1).length == inputLength) {
      commonValues.push(x)
    } 
  })
  return commonValues
}

const day6part2 = (input) => input.map(x => sizeOf(getCommonValues(x))).reduce((x, acc) => acc + x, 0)

module.exports = {
  "getUniqueValues": getUniqueValues,
  "getCommonValues": getCommonValues,
  "day6": day6,
  "day6part2": day6part2
}