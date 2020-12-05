const getSeatInfo = (rowId) => {
  let rowRange = [0, 127]
  let colRange = [0, 7]
  let col = 0
  let row = 0
  rowId.split('').forEach((element, index) => {
    if (element == 'F') {
      rowRange[1] = rowRange[1] - Math.ceil((rowRange[1] - rowRange[0]) / 2)
    } else if (element == 'B') {
      rowRange[0] = rowRange[0] + Math.ceil((rowRange[1] - rowRange[0]) / 2)
    } else if (element == 'L') {
      colRange[1] = colRange[1] - Math.ceil((colRange[1] - colRange[0]) / 2)
    } else if (element == 'R') {
      colRange[0] = colRange[0] + Math.ceil((colRange[1] - colRange[0]) / 2)
    }
    if (index == 6) {
      row = element == "B" ? rowRange[1] : rowRange[0]
    }
    if (index == 9) {
      col = element == "R" ? colRange[1] : colRange[0]
    }    
  });
  return {"row": row, "col": col, "seatId": row * 8 + col}
}

const day5 = (input) => input.map(x => getSeatInfo(x)).sort((a,b) => b.seatId - a.seatId)[0].seatId

const day5part2 = (input) => {
  let allSeats = []
  for (let i = 1; i < 127; i++) {
    for (let j = 0; j < 8; j++) {
      allSeats.push(i * 8 + j)
    }
  }
  const passBoards = input.map(x => getSeatInfo(x))
  passBoards.forEach(element => {
    allSeats = allSeats.filter(y => y != element.seatId)
  })

  allSeats = allSeats.filter(element => {
    return passBoards.filter(x => x.seatId == (element + 1)).length > 0
      && passBoards.filter(x => x.seatId == (element - 1)).length > 0
  })
  
  return allSeats[0]
}


module.exports = {
  "getSeatInfo": getSeatInfo,
  "day5": day5,
  "day5part2": day5part2
}