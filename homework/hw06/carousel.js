const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let arrayPosition = 0;

/* Function to change the displayed image and caption */
const showImage = function(direction) {

    /* Changes arrayPosition value depending on input direction */
    switch(direction) {

        case 'forward':
            arrayPosition > 8 ? arrayPosition = 0 : arrayPosition++;
            break;
        
        case 'back':
            arrayPosition < 1 ? arrayPosition = 9 : arrayPosition--;
            break;

        default:
            console.log("Invalid direction: " + direction);
            return;

    }

    document.querySelector('.current-photo img').src = photos[arrayPosition];
    document.querySelector('.caption').textContent = "Image " + (arrayPosition + 1) + " of 10";

}