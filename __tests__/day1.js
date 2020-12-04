const day1 = require("../days/day1").day1

const should = require('chai').should()

describe('test suite for problem 1 of advent of code 2020', () => {

  it('should return 2019 for input [2019, 2, 1]', () => {
    day1([2019, 2, 1]).should.equal(2019)
  })

  it('should return 514579 for input [1721,979,366,299,675,1456]', () => {
    day1([1721,979,366,299,675,1456]).should.equal(514579)
  })

  it('should return 1 for input [2009, 2, 1]', () => {
    should.equal(day1([2009, 2, 1]), 1)
  })

})
