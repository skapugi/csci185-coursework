function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */    

    /* The Creature */
    fill("teal");
    frogger(300, 200);

    function frogger(startX, startY) {
        const size = 200;
        circle(startX, startY, size);
        circle(startX + 800, startY, size);
        rect(startX - 100, startY, size + 800, size);
        rect(startX - 100, startY, size, size + 300);
        rect(startX + 700, startY, size, size + 300);
    }

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}