const parent = document.getElementById('svg1')
const addLineToSvg = function (svgParent, x1, y1, x2, y2) {
    var newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    newLine.setAttribute('x1', x1);
    newLine.setAttribute('y1', y1);
    newLine.setAttribute('x2', x2);
    newLine.setAttribute('y2', y2);
    newLine.setAttribute("stroke", "black")
    parent.append(newLine);
    }

for (let y = 5; y < 50; y += 6) {
    addLineToSvg(parent, 10, y, 105, y)        
}

addLineToSvg(parent, 0, 0, 200, 200)