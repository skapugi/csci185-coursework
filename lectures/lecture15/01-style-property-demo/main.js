/* Function to change the background colour of some selector */
function changeColour(selector, color) {
    console.log('Changing background colour of ' + selector + ' to ' + color);
    document.querySelector(selector).style.backgroundColor = color;

    // Ensure that text is readable if the user selects the 'red' or 'blue' color.
    if (color == 'red' || color == 'blue') document.querySelector(selector).style.color = 'white';
    else document.querySelector(selector).style.color = 'black';

}

/* Function to change the colours of all four sections */
function multiColour() {
    console.log('Changing colours of all four sections');
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section2').style.backgroundColor = 'blue';
    document.querySelector('#section3').style.backgroundColor = 'pink';
    document.querySelector('#section4').style.backgroundColor = 'orange';
}