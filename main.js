const SQRT2 = Math.sqrt(2)

const addLineToSvg = function (svgParent, x1, y1, x2, y2) {
  var newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  newLine.setAttribute('x1', x1);
  newLine.setAttribute('y1', y1);
  newLine.setAttribute('x2', x2);
  newLine.setAttribute('y2', y2);
  newLine.setAttribute("stroke", "black")
  svgParent.appendChild(newLine);
}

const svgParent = document.getElementById("svg1")

for (let i = 0; i <= 300; i+=50) {
  addLineToSvg(svgParent, i, -1000, i, 1300)
}

for (let i = 0; i <= 300; i+=50) {
  addLineToSvg(svgParent, -1000, i, 1300, i)
}

const rotLine45 = function(svgLine) {
  let x1 = parseFloat(svgLine.getAttribute('x1'));
  let y1 = parseFloat(svgLine.getAttribute('y1'));
  let x2 = parseFloat(svgLine.getAttribute('x2'));
  let y2 = parseFloat(svgLine.getAttribute('y2'));

  const center_x = 150
  const center_y = 150

  // Translation
  x1 = x1 - center_x
  x2 = x2 - center_x
  y1 = y1 - center_y
  y2 = y2 - center_y

  // Rotation around O
  r_x1 = SQRT2/2*(x1-y1)
  // You just changed the x-val so next line uses the new one 😅
  r_y1 = SQRT2/2*(x1+y1) 
  r_x2 = SQRT2/2*(x2-y2)
  r_y2 = SQRT2/2*(x2+y2)

  // Backtranslation
  x1 = r_x1 + center_x
  x2 = r_x2 + center_x
  y1 = r_y1 + center_y
  y2 = r_y2 + center_y

  svgLine.setAttribute('x1', x1)
  svgLine.setAttribute('y1', y1)
  svgLine.setAttribute('x2', x2)
  svgLine.setAttribute('y2', y2)
}

let lines = document.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'line')
for (let i = 0; i < lines.length; i++) {
  rotLine45(lines[i])
}
