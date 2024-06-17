window.onload = function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    // Grid spacing cannot be relative, it needs to be absolute
    const gridSpacingX = 50;
    const gridSpacingY = 25;

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;

    for (let x = 0; x <= canvas.width; x += gridSpacingX) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
    }

    for (let y = 0; y <= canvas.height; y += gridSpacingY) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
    }
}