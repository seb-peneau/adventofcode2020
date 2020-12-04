const day2 = require("../days/day2").day2
const day2part2 = require("../days/day2").day2part2

const should = require('chai').should()


describe('test suite for problem 2 of advent of code 2020', () => {

  it('should return 1 for input ["1-3 a: abcde"]', () => {
    day2(["1-3 a: abcde"]).should.equal(1)
  })

  it('should return 0 for input ["1-3 b: cdefg"]', () => {
    day2(["1-3 b: cdefg"]).should.equal(0)
  })

  it('should return 1 for input ["1-3 a: abcde"]', () => {
    day2part2(["1-3 a: abcde"]).should.equal(1)
  })

  it('should return 0 for input ["1-3 b: cdefg"]', () => {
    day2part2(["1-3 b: cdefg"]).should.equal(0)
  })

  it('should return 0 for input ["2-9 c: ccccccccc"]', () => {
    day2part2(["2-9 c: ccccccccc"]).should.equal(0)
  })
})