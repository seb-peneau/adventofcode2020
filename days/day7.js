const getBagIfContain = (input, search) => {
  const res = new RegExp("^(.*) bags contain.*"+ search + ".*$").exec(input)
  return res && res[1]
}

const filterFor = (input, search) => input.map(x => getBagIfContain(x, search)).filter(x => x != null)

const day7 = (input, search) => {
  let res = []
  let searchMatches = [search]
  while (searchMatches.length != 0) {
    filterFor(input, searchMatches.shift()).forEach(element => {
      res.push(element)
      searchMatches.push(element)
    });
  }
  return Array.from(new Set([...res])).length
}

const run = (input, search) => {
  let i = input
    .filter(x => new RegExp("^"+search+" bags contain").test(x))
    .map(x => {
      return {
        "x": x,
        "c" : x.match(/([0-9]) ([a-z]+ [a-z]+)/g)
      }
    })[0]

  if(i && i.c) {
    let res = 0
    i.c.forEach(element => {
      let a = element.split(" ")
      let an = a.shift()
      res = res + parseInt(an) + parseInt(an) * run(input, a.join(" ")) 
    })
    return res
  } else {
    return 0
  }
  
}

const day7part2 = (input, search) => {
  return run(input, search)
}

module.exports = {
  "getBagIfContain": getBagIfContain,
  "filterFor": filterFor,
  "day7": day7,
  "day7part2" : day7part2
}
