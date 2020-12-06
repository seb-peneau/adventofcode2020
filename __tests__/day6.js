const getUniqueValues = require("../days/day6").getUniqueValues
const getCommonValues = require("../days/day6").getCommonValues
const day6 = require("../days/day6").day6
const day6part2 = require("../days/day6").day6part2

const should = require('chai').should()

describe('test suite for problem 6 of advent of code 2020', () => {
  it('get unique values for input "abaacda"', () => {
    let input = "abaacda"
    getUniqueValues(input).join('').should.equal(["a", "b", "c", "d"].join(''))
  })

  it('get the correct count for [["abc"], ["a","b","c"], ["ab","ac"], ["a","a","a","a"], ["b"]]', () => {
    let input = [["abc"], ["a","b","c"], ["ab","ac"], ["a","a","a","a"], ["b"]]
    day6(input).should.equal(11)
  })

  it('get common values for input ["ab","ac"]', () => {
    let input = ["ab","ac"]
    getCommonValues(input).join('').should.equal(["a"].join(''))
  })  

  it('get the correct count for [["abc"], ["a","b","c"], ["ab","ac"], ["a","a","a","a"], ["b"]]', () => {
    let input = [["abc"], ["a","b","c"], ["ab","ac"], ["a","a","a","a"], ["b"]]
    day6part2(input).should.equal(6)
  })
})
