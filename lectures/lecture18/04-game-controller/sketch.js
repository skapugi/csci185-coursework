let x = 100;
let y = 200;
let width = 50;
let fillColor = 'white';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

const moveController = ev => {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    switch(ev.code) {

        case "ArrowLeft":
            x -= 10;
            break;

        case "ArrowRight":
            x += 10;
            break;

        case "ArrowUp":
            y -= 10;
            break;

        case "ArrowDown":
            y += 10;
            break;

        case "Equal":
            width += 10;
            break;

        case "Minus":
            width -= 10;
            break;

        case "KeyR":
            fillColor = 'red';

    }


    // redraw circle:
    clear();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
