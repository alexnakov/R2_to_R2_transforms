window.onload = function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    console.log(canvas.width)
    console.log(canvas.height)

    // Grid spacing cannot be relative, it needs to be absolute
    const gridSpacingX = 50;
    const gridSpacingY = 25;

    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, 300, 150)
    ctx.strokeStyle = 'whitesmoke';
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

    ctx.strokeStyle = 'aqua'
    ctx.lineWidth = 2;

    ctx.beginPath()
    ctx.moveTo(0, 75)
    ctx.lineTo(350, 75)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(150, 0)
    ctx.lineTo(150, 150)
    ctx.stroke()

    // fill origin grey
    ctx.fillStyle = 'grey';
    ctx.fillRect(148, 73, 4, 4)
}

// Ideally you would have the matrix params to pass
const showCanvas2 = function() {
    const canvas = document.getElementById('canvas2');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, 350, 250)
    ctx.strokeStyle = 'whitesmoke';
    ctx.lineWidth = 1;

    ctx.fillStyle = 'red';

    for (let y = 0; y <= canvas.height; y += 25) {
        for (let x = 0; x <= canvas.width; x += 1) {
            var x_ = x
            var y_ = y
            var xCoord = x_;
            var yCoord = y_;
            
            ctx.fillRect(xCoord, yCoord, 1, 1)
        }
    }

    for (let x = 0; x <= canvas.width; x += 50) {
        for (let y = 0; y <= canvas.height; y += 1) {
            var x_ = x
            var y_ = y
            var xCoord = x_;
            var yCoord = y_;
            
            ctx.fillRect(xCoord, yCoord, 1, 1)
        }
    }

    ctx.fillStyle = 'aqua';
    ctx.fillRect(148, 73, 4, 4)
}
