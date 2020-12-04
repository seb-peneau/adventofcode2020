function findValsWithSum (input, sum, nb) {
  let input2 = input.map(x => {return {"steps": [x], "value": x}})
  for (i = 0; i < nb-1; i++) {
    input2 = input2.flatMap(x => {
      return input.flatMap(z => {
        let t = x.steps.map(elem => elem)
        t.push(z)
        return {"steps": t, "value": x.value + z}
      }).filter(elem => elem.value <= sum)
    })
  }
  let res = input2.filter(x => x.value == sum)[0]
  if (res) {
    return res.steps
  } else {
    return []
  }
}

const f = (f1, f2, paramf2) => input => f1(f2(input, paramf2))
const findValWithSum2020 = (input, paramf2) => findValsWithSum(input, 2020, paramf2, [])
const multiply = (arr) => arr.reduce((x, m) => m * x, 1)

const day1 =  f(multiply, findValWithSum2020, 2)
const day1part2 = f(multiply, findValWithSum2020, 3)

module.exports = {
  "day1" : day1,
  "day1part2": day1part2
}