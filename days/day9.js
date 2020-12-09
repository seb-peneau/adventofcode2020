

const day9 = (input, preamble) => {
  let lastNumbers = input.filter((x,index) => index < preamble)
  input = input.filter((x,index) => index >= preamble)
  let res = input.map(x => {
    if(lastNumbers.length > preamble) lastNumbers.shift()
    const find = lastNumbers.filter((y, i, ln) => {
      return ln.indexOf(x-y) != -1
    })
    if (find.length > 0) {
      lastNumbers.push(x)
      return -1
    } else {
      return x
    }
  })
  return res.filter(x => x > 0)[0]
}

const day9part2 = (input, res) => {
  const pair = {"s":0, "e": 0}
  let allV = []
  input.map((x, index, ln) => {
    if (pair.s == 0) {
      allV = []
      ln.slice(index).reduce((sum, y, rindex, ln2) => {
        if (sum+y == res) {
          allV = ln2.slice(0, rindex+1)
          pair.s = x
          pair.e = y
        }
        return sum + y
      })
    }
  })
  return allV.sort((a, b) => b - a)
}

module.exports = {
  "day9": day9,
  "day9part2" : day9part2
}
