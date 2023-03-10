// First, we need to get a reference to the div element with the id 'barralateral'
const lateralBar = document.getElementById('barralateral');
const lateralBarSec = document.getElementById('barralateralsecundaria');

// Next, we will define a function that will be called whenever the user scrolls
function handleScroll() {
  // We can use the window.scrollY property to get the current vertical scroll position of the page
  const scrollPosition = window.scrollY;

  // If the scroll position is greater than 0, it means the user has scrolled away from the top of the page
  if (scrollPosition > 0) {
    // In this case, we can set the div's background to be partially opaque by setting its opacity property to a value between 0 and 1
    lateralBar.style.background = '#1F1F1F';
    lateralBarSec.style.background = '#1F1F1F';
  } else {
    // If the scroll position is 0, it means the user is at the top of the page, so we can set the div's background to be fully transparent by setting its opacity to 0
    lateralBar.style.background = 'rgba(0, 0, 0, 0.0)';
    lateralBarSec.style.background = 'rgba(0, 0, 0, 0.0)';
  }
}

// Finally, we will use the window.addEventListener() method to attach the 'scroll' event to the window object, and specify our handleScroll function as the event handler
window.addEventListener('scroll', handleScroll);



// BOTON DE CONTACTO

const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openBtn');


window.addEventListener("click", function(e) {


  if (overlay.contains(e.target)) { 
    console.log('on the div')
    overlay.style.right = '0%'
  } 

  else if (openBtn.contains(e.target)){
    if(overlay.style.right = '-100%'){
      console.log('clickn open');
      overlay.style.right = '0%';
    }
    else {
      console.log('clickn close');
      overlay.style.right = '-100%';
    }
  } 

  else {
    console.log('outside the div')
    overlay.style.right = '-100%'
  }
});


