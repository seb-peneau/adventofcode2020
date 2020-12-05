const getSeatInfo = require("../days/day5").getSeatInfo

const should = require('chai').should()

describe('test suite for problem 5 of advent of code 2020', () => {

  it('get the correct Row for input FBFBBFFRLR', () => {
    let input = "FBFBBFFRLR"
    getSeatInfo(input).row.should.equal(44)
    getSeatInfo(input).col.should.equal(5)
    getSeatInfo(input).seatId.should.equal(357)
  })

  it('get the correct Row for input BFFFBBFRRR', () => {
    let input = "BFFFBBFRRR"
    getSeatInfo(input).row.should.equal(70)
    getSeatInfo(input).col.should.equal(7)
    getSeatInfo(input).seatId.should.equal(567)
  })

  it('get the correct Row for input FFFBBBFRRR', () => {
    let input = "FFFBBBFRRR"
    getSeatInfo(input).row.should.equal(14)
    getSeatInfo(input).col.should.equal(7)
    getSeatInfo(input).seatId.should.equal(119)
  })

  it('get the correct Row for input BBFFBBFRLL', () => {
    let input = "BBFFBBFRLL"
    getSeatInfo(input).row.should.equal(102)
    getSeatInfo(input).col.should.equal(4)
    getSeatInfo(input).seatId.should.equal(820)
  })
})