let x = 0
let y = 0
let easing = 0.1

function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(200, 99);
    windowResized();
    noStroke();
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'black';
}

function draw() {
    clear();
    let targetX = mouseX;
	x += (targetX - x) * easing;
    let targetY = mouseY;
	y += (targetY - y) * easing;
    ellipse(x, y, 30, 30);
}

function windowResized() {
    const css = getComputedStyle(canvas.parentElement),
          mw = float(css.marginLeft) + float(css.marginRight),
          mh = float(css.marginTop)  + float(css.marginBottom),
          ww = float(css.width)  || windowWidth,
          wh = float(css.height) || windowHeight,
          w = round(ww - mw), h = round(wh - mh);
  
    resizeCanvas(w, h, true);
  }