const redElement = document.querySelector("#red");
const yellowElement = document.querySelector("#yellow");
const blueElement = document.querySelector("#blue");

const setBackgroundColor = color => {
    document.querySelector('body').style.backgroundColor = color;
}

const updateColor = (ev) => {
    /*
    INSTRUCTIONS: Update this function as follows:
    If red is turned on, make the background red (done for you).
    If yellow is turned on, make the background yellow (done for you).
    If blue is turned on, make the background blue.
    If red and yellow are both turned on, make the background orange.
    If red and blue are turned on, make the background purple.
    If yellow and blue are turned on, make the background green.
    If everything is turned on, then make the background black.
    */

    /* Generate composite value */
    let x = 0;
    if(redElement.value == 'on') x += 1;
    if(yellowElement.value == 'on') x += 3;
    if(blueElement.value == 'on') x += 5;
    
    /* Set colour based on composite value */
    switch(x) {
        case 1:
            setBackgroundColor('red');
            break;
        case 3:
            setBackgroundColor('yellow');
            break
        case 5:
            setBackgroundColor('blue');
            break;
        case 4:
            setBackgroundColor('orange');
            break;
        case 6:
            setBackgroundColor('purple');
            break;
        case 8:
            setBackgroundColor('green');
            break;
        case 9:
            setBackgroundColor('black');
            break;
        default:
            setBackgroundColor('white');
            break;
    }

};



// You can either attach event handlers dynamically (using JavaScript)...
redElement.onchange = updateColor;
yellowElement.onchange = updateColor;
blueElement.onchange = updateColor;
