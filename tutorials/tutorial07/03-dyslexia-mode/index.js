defaultDyslexia();

/* Function to enable dyslexia mode if previously activated */
function defaultDyslexia() {
  const dyslexiaMode = window.localStorage.getItem('dyslexiaMode');
  if(dyslexiaMode === 'false') return;
  document.querySelector('body').className = 'dyslexia';
}

/* Function to toggle dyslexia mode */
function toggleDyslexia() {

  const dyslexiaMode = window.localStorage.getItem('dyslexiaMode');

  if(dyslexiaMode == 'true') {
    window.localStorage.setItem('dyslexiaMode', false);
    document.querySelector('body').className = null;
  }
  else {
    window.localStorage.setItem('dyslexiaMode', true);
    document.querySelector('body').className = 'dyslexia';
  }

}