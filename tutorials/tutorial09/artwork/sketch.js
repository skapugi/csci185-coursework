const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    //frameRate(1);
    
    background("#888");

    for(let i = 0; i < 100; i++) {
        drawCircle();
        drawLine();
    }

}


// anything that you want to animate goes in this function:  
// function draw() {
//     clear();
//     drawCircle();
// }

function drawCircle() {
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    let size = randomFloat(25, 125);
    circle(x, y, size);
}

function drawTriangle() {
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    let size = randomFloat(25, 125);
    triangle(x, y - (size/2), x - (size/2), y + (size/2), x + (size/2), y+(size/2));
}

function drawLine() {
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    let size = randomFloat(25, 125);
    line(x, y, (x + size), (y + size));
}
