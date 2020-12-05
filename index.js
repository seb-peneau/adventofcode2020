
console.log("All solutions : ")

// day 1
const day1 = require("./days/day1").day1
const day1part2 = require("./days/day1").day1part2
const inputDay1 = require("./inputs/day1").inputDay1
console.log("day 1 : ", day1(inputDay1))
console.log("day 1 part 2 : ", day1part2(inputDay1))

// day 2 
const day2 = require("./days/day2").day2
const day2part2 = require("./days/day2").day2part2
const inputDay2 = require("./inputs/day2").inputDay2
console.log("day 2 : ", day2(inputDay2))
console.log("day 2 part 2 : ", day2part2(inputDay2))

// day 3
const day3 = require("./days/day3").day3
const day3part2 = require("./days/day3").day3part2
const inputDay3 = require("./inputs/day3").inputDay3
console.log("day 3 : ", day3(inputDay3, {"x":3,"y":1}))
console.log("day 3 part 2 : ", day3part2(inputDay3))

// day 4
const day4 = require("./days/day4").day4
const day4part2 = require("./days/day4").day4part2
const inputDay4 = require("./inputs/day4").inputDay4
console.log("day 4 : ", day4(inputDay4))
console.log("day 4 part 2 : ", day4part2(inputDay4))

// day 5
const day5 = require("./days/day5").day5
const day5part2 = require("./days/day5").day5part2
const inputDay5 = require("./inputs/day5").input5
console.log("day 5 : ", day5(inputDay5))
console.log("day 5 part 2 : ", day5part2(inputDay5))