
function getItemAtPosition (input, position) {
  const getLine = input[position.y]
  let res = null
  if (getLine) {
    let posX = position.x >= getLine.length ? (position.x % getLine.length) : position.x
    res = getLine[posX]
  }
  return res
}

function day3 (input, step) {
  let s = {
    "x": step.x,
    "y": step.y
  }
  let item = getItemAtPosition(input, step)
  let count = item == "#" ? 1 : 0
  while (item != null) {
    s.x = s.x + step.x
    s.y = s.y + step.y
    item = getItemAtPosition(input, s)
    count = item == "#" ? count+1 : count
  }
  return count
}

function day3part2 (input) {
  return day3(input, {"x":1, "y":1}) * day3(input, {"x":3, "y":1}) * day3(input, {"x":5, "y":1}) * day3(input, {"x":7, "y":1}) * day3(input, {"x":1, "y":2})
}

module.exports = {
  "getItemAtPosition" : getItemAtPosition,
  "day3": day3,
  "day3part2": day3part2
}