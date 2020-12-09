
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

// day 6
const day6 = require("./days/day6").day6
const day6part2 = require("./days/day6").day6part2
const inputDay6 = require("./inputs/day6").input6
console.log("day 6 : ", day6(inputDay6))
console.log("day 6 part 2 : ", day6part2(inputDay6))

// day 7
const day7 = require("./days/day7").day7
const day7part2 = require("./days/day7").day7part2
const inputDay7 = require("./inputs/day7").input7
console.log("day 7 : ", day7(inputDay7, "shiny gold"))
console.log("day 7 part 2: ", day7part2(inputDay7, "shiny gold"))

//day 9
const day9 = require("./days/day9").day9
const day9part2 = require("./days/day9").day9part2
const input = require("./inputs/day9").input9
let search = day9(input, 25)
console.log("day 9 : ", search)
const s = day9part2(input, search)
console.log("day 9 part 2 : ", s[0] + s[s.length-1])