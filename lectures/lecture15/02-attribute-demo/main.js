let cat = "https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg";
let dog = "https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg";
let bird = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg";
let fish = "https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755_1280.jpg";

/* Function to display the image of a cat */
function showCat() {
    console.log('update the image to show a cat!');
    document.querySelector('#image-demo').src = cat;
};

/* Function to display the image of a dog */
function showDog() {
    console.log('update the image to show a dog!');
    document.querySelector('#image-demo').src = dog;
};

/* Function to display the image of a bird */
function showBird() {
    console.log('update the image to show a bird!');
    document.querySelector('#image-demo').src = bird;
};

/* Function to display the image of a fish */
function showFish() {
    console.log('update the image to show a fish!');
    document.querySelector('#image-demo').src = fish;
};
