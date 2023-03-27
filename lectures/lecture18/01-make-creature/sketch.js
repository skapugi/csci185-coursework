function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    makeCreature(300, 300);

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature(positionX, positionY) {
    fill('yellow');
    circle(positionX, positionY, 300);

    fill('black');

    ellipse(positionX - 50, positionY - 50, 30, 40);
    ellipse(positionX + 50, positionY - 50, 30, 40);
}