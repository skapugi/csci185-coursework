function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');

    noFill();

    for(let i = 0; i < 13; i++) {
        for(let j = 0; j < 13; j++) {
            circle(100 + (i * 100), (j * 50), 50 * (j/2));
        }
    } 

    drawGrid(canvasWidth, canvasHeight);
}
