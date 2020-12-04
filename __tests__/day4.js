const day4 = require("../days/day4").day4

const should = require('chai').should()

describe('test suite for problem 4 of advent of code 2020', () => {

it('should validate test entry', () => {
    let input = ["ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm","iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884 hcl:#cfa07d byr:1929","hcl:#ae17e1 iyr:2013 eyr:2024 ecl:brn pid:760753108 byr:1931 hgt:179cm","hcl:#cfa07d eyr:2025 pid:166559648 iyr:2011 ecl:brn hgt:59in"]
    day4(input).should.equal(2)
  })

})