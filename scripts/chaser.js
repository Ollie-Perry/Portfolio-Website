let x = 0
let y = 0
let easing = 0.1

function setup() {
    createCanvas(displayWidth, displayHeight);
    fill(200, 99);
    noStroke()
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'black';
}

function draw() {
    clear()
    let targetX = mouseX;
	x += (targetX - x) * easing;
    let targetY = mouseY;
	y += (targetY - y) * easing;
    ellipse(x, y, 30, 30)
}