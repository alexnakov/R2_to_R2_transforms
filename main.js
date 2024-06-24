const sqrt2 = Math.sqrt(2)

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
  addLineToSvg(svgParent, i, 0, i, 300)
}

for (let i = 0; i <= 300; i+=50) {
  addLineToSvg(svgParent, 0, i, 300, i)
}

const rotLine45 = function() {
  const line1 = document.getElementById('line1')

  let x1 = parseFloat(line1.getAttribute('x1'));
  let y1 = parseFloat(line1.getAttribute('y1'));
  let x2 = parseFloat(line1.getAttribute('x2'));
  let y2 = parseFloat(line1.getAttribute('y2'));

  const center_x = 150
  const center_y = 150

  // Translation
  x1 = x1 - center_x
  x2 = x2 - center_x
  y1 = y1 - center_y
  y2 = y2 - center_y

  // Rotation around O
  r_x1 = sqrt2/2*(x1-y1)
  // You just changed the x-val so next line uses the new one 😅
  r_y1 = sqrt2/2*(x1+y1) 
  r_x2 = sqrt2/2*(x2-y2)
  r_y2 = sqrt2/2*(x2+y2)

  // Backtranslation
  x1 = r_x1 + center_x
  x2 = r_x2 + center_x
  y1 = r_y1 + center_y
  y2 = r_y2 + center_y

  line1.setAttribute('x1', x1)
  line1.setAttribute('y1', y1)
  line1.setAttribute('x2', x2)
  line1.setAttribute('y2', y2)
}

rotLine45()