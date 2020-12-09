const getBagIfContain = require("../days/day7").getBagIfContain
const filterFor = require("../days/day7").filterFor
const day7 = require("../days/day7").day7
const day7part2 = require("../days/day7").day7part2

const should = require('chai').should()

describe('test suite for problem 7 of advent of code 2020', () => {
  
  it('Should return muted yellow for input muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.', () => {
    const input = "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags."
    getBagIfContain(input, "shiny gold").should.equal("muted yellow")
  })

  it('Should return bright white,muted yellow ', () => {
    const input = ["bright white bags contain 1 shiny gold bag.","muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.","shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags."]
    filterFor(input, "shiny gold").join(",").should.equal("bright white,muted yellow")
  })  


  it('Should return 4 for given example', () => {
    const input = ["light red bags contain 1 bright white bag, 2 muted yellow bags.","dark orange bags contain 3 bright white bags, 4 muted yellow bags.","bright white bags contain 1 shiny gold bag.","muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.","shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.","dark olive bags contain 3 faded blue bags, 4 dotted black bags.","vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.","faded blue bags contain no other bags.","dotted black bags contain no other bags."]
    day7(input, "shiny gold").should.equal(4)
  })  

  it ('should return 32 for part 2 first exmaple', () => {
    const input = ["faded blue bags contain no other bags.","dotted black bags contain no other bags.","vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.","dark olive bags contain 3 faded blue bags, 4 dotted black bags.","shiny gold bags contain 1 dark olive bags, 2 vibrant plum bags."]
    day7part2(input, "shiny gold").should.equal(32)
  })
  
  it ('should return 126 for part 2 second exmaple', () => {
    const input = ["shiny gold bags contain 2 dark red bags.","dark red bags contain 2 dark orange bags.","dark orange bags contain 2 dark yellow bags.","dark yellow bags contain 2 dark green bags.","dark green bags contain 2 dark blue bags.","dark blue bags contain 2 dark violet bags.","dark violet bags contain no other bags."]
    day7part2(input, "shiny gold").should.equal(126)
  })

})


