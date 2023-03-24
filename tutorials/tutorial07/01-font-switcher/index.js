/* Function to toggle the font size between larger and regular size */
function toggleFontSize() {
   let fontSize = document.querySelector('body').style.fontSize;
   if(fontSize == '30px') document.querySelector('body').style.fontSize = null;
   else document.querySelector('body').style.fontSize = '30px';
}