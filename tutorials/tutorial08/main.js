function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight; 
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}

function mouseDragged(){

    let colourShape = document.querySelector('#colourShape').value;
    let sizeShape = document.querySelector('#sizeShape').value;
    let colourOutline = document.querySelector('#colourOutline').value;
    let strokeState = document.querySelector('#strokeState').value;
    let type = document.querySelector('#shape').value;

    /* Set shape's colour dependent on user input */
    fill(colourShape);

    /* Enable or disable stroke dependent on user input */
    if(strokeState == 'enabled') stroke(colourOutline);
    else noStroke();

    /* Changes the shape to be drawn dependent on user input */
    switch(type) {

        case 'circle':
            circle(mouseX, mouseY, sizeShape);
            break;

        case 'square':
            square(mouseX, mouseY, sizeShape);
            break;

        case 'triangle':
            triangle(mouseX, mouseY - (sizeShape/2), mouseX - (sizeShape/2), mouseY + (sizeShape/2), mouseX + (sizeShape/2), mouseY + (sizeShape/2));
            break;

        case 'ellipse':
            ellipse(mouseX, mouseY, sizeShape, (sizeShape * 2));
            break;

    }


    
}