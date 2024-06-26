window.onload = function() {
  const svg = document.getElementById('mySVG');
  for (let i = 0; i <= 300; i++) {
    pt = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    pt.setAttribute('r', '1px')
    pt.setAttribute('fill', 'red')
    pt.setAttribute('cy', '150px')
    pt.setAttribute('cx', i+'px')
    svg.addChild(pt)
  }
}