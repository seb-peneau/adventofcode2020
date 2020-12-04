const getItemAtPosition = require("../days/day3").getItemAtPosition
const day3 = require("../days/day3").day3
const day3part2 = require("../days/day3").day3part2

const should = require('chai').should()

describe('test suite for problem 3 of advent of code 2020', () => {

it('should get # for 2 right move ["..##.......","#...#...#..",".#....#..#.","..#.#...#.#",".#...##..#.","..#.##.....",".#.#.#....#",".#........#","#.##...#...","#...##....#",".#..#...#.#"]', () => {
    let input = ["..##.......","#...#...#..",".#....#..#.","..#.#...#.#",".#...##..#.","..#.##.....",".#.#.#....#",".#........#","#.##...#...","#...##....#",".#..#...#.#"]
    getItemAtPosition(input, {"x":2, "y": 0}).should.equal("#")
  })

  it('should get . for 2,1 move ["..##.......","#...#...#..",".#....#..#.","..#.#...#.#",".#...##..#.","..#.##.....",".#.#.#....#",".#........#","#.##...#...","#...##....#",".#..#...#.#"]', () => {
    let input = ["..##.......","#...#...#..",".#....#..#.","..#.#...#.#",".#...##..#.","..#.##.....",".#.#.#....#",".#........#","#.##...#...","#...##....#",".#..#...#.#"]
    getItemAtPosition(input, {"x":2, "y": 1}).should.equal(".")
  })

  it('should get # for 14 right move ["..##.......","#...#...#..",".#....#..#.","..#.#...#.#",".#...##..#.","..#.##.....",".#.#.#....#",".#........#","#.##...#...","#...##....#",".#..#...#.#"]', () => {
    let input = ["..##.......","#...#...#..",".#....#..#.","..#.#...#.#",".#...##..#.","..#.##.....",".#.#.#....#",".#........#","#.##...#...","#...##....#",".#..#...#.#"]
    getItemAtPosition(input, {"x":14, "y": 0}).should.equal("#")
  })

  it('should get null when reaching the end', () => {
    let input = ["..##.......","#...#...#..",".#....#..#.","..#.#...#.#",".#...##..#.","..#.##.....",".#.#.#....#",".#........#","#.##...#...","#...##....#",".#..#...#.#"]
    should.equal(getItemAtPosition(input, {"x":0, "y":14}), null)
  })

  it('should count the #', () => {
    let input = ["..##.......","#...#...#..",".#....#..#.","..#.#...#.#",".#...##..#.","..#.##.....",".#.#.#....#",".#........#","#.##...#...","#...##....#",".#..#...#.#"]
    day3(input, {"x":3, "y": 1}).should.equal(7)
  })

  it('should count the # with strange slops', () => {
    let input = ["..##.......","#...#...#..",".#....#..#.","..#.#...#.#",".#...##..#.","..#.##.....",".#.#.#....#",".#........#","#.##...#...","#...##....#",".#..#...#.#"]
    day3part2(input).should.equal(336)
  })
})