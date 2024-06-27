var linesCoords = []
let l1
let l2

window.onload = function() {
  const svg = document.getElementById('mySVG');
  for (let i = -500; i <= 500; i += 50) {
    let line1 = document.createElementNS("http://www.w3.org/2000/svg", 'line')
    linesCoords.push([i, i, -500, 500])
    line1.setAttribute('x1', i)
    line1.setAttribute('x2', i)
    line1.setAttribute('y1', -500)
    line1.setAttribute('y2', 500)
    line1.setAttribute('stroke', 'black')
    svg.appendChild(line1)

    let line2 = document.createElementNS("http://www.w3.org/2000/svg", 'line')
    linesCoords.push([-500, 500, i, i])
    line2.setAttribute('x1', -500)
    line2.setAttribute('x2', 500)
    line2.setAttribute('y1', i)
    line2.setAttribute('y2', i)
    line2.setAttribute('stroke', 'black')
    svg.appendChild(line2)
  }

  l1 = linesCoords
  console.log(linesCoords)
}

const applyLinearTransform = function() {
  coords2 = []
  for (let i = 0; i < linesCoords.length; i++) {
    let line = linesCoords[i]
    let line1 = line.map((pt) => pt - 150) // Now 0,0
    let line2 = []
    line2.push(2*line1[0] + line1[2]) // x1
    line2.push(2*line1[1] + line1[3]) // x2
    line2.push(line1[0] - 3*line1[2]) // y1
    line2.push(line1[1] - 3*line1[3]) // y2
    let line3 = line2.map((pt) => pt + 150)
    coords2.push(line3)
  }

  let allLines = document.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'line')
  for (let i = 0; i < allLines.length; i++) {
    let line = allLines[i]
    line.setAttribute('x1', coords2[i][0])
    line.setAttribute('x2', coords2[i][1])
    line.setAttribute('y1', coords2[i][2])
    line.setAttribute('y2', coords2[i][3])
  }
}

function changeLines(matrix) {
  let allLines = document.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'line')
  for (let i = 0; i < allLines.length; i++) {
    let line = allLines[i]
    line.setAttribute('x1', matrix[i][0])
    line.setAttribute('x2', matrix[i][1])
    line.setAttribute('y1', matrix[i][2])
    line.setAttribute('y2', matrix[i][3])
  }
}